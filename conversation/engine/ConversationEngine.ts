import {
    ConversationSession,
    ConversationState,
    EngineResponse,
    StudentProfile,
} from "../types";
import { IntentParser } from "../parser";
import { KnowledgeService } from "../knowledge";
import { FlowRegistry } from "./FlowRegistry";
import { ProfileUpdater } from "../profile/ProfileUpdater";
import { ConversationRepository, InMemoryConversationRepository } from "../storage";
import { LeadScorer } from "../summary/LeadScorer";
import { LeadExporter } from "../handoff/LeadExporter";
import { generateUUID } from "@/lib/uuid";

const STATE_PROGRESS_MAP: Record<ConversationState, number> = {
    [ConversationState.WELCOME]: 0,
    [ConversationState.DESTINATION]: 10,
    [ConversationState.UNDERSTAND_GOAL]: 20,
    [ConversationState.ACADEMIC_DETAILS]: 35,
    [ConversationState.ENGLISH_TEST]: 50,
    [ConversationState.BUDGET]: 65,
    [ConversationState.INTAKE]: 75,
    [ConversationState.SCHOLARSHIP]: 80,
    [ConversationState.WORK_EXPERIENCE]: 85,
    [ConversationState.PASSPORT]: 90,
    [ConversationState.CONTACT_DETAILS]: 95,
    [ConversationState.SUMMARY]: 100,
    [ConversationState.CONSULTATION]: 100,
    [ConversationState.COMPLETED]: 100,
};

export class ConversationEngine {
    private session: ConversationSession;

    constructor(
        sessionId: string,
        private repository: ConversationRepository = new InMemoryConversationRepository()
    ) {
        this.session = {
            id: sessionId,
            currentState: ConversationState.WELCOME,
            profile: {
                questionsAsked: [],
            },
            history: [],
            completedStates: [],
            skippedStates: [],
        };
    }

    getSession(): ConversationSession {
        return this.session;
    }

    async restart(): Promise<EngineResponse> {
        this.session = {
            id: generateUUID(),
            currentState: ConversationState.WELCOME,
            profile: {
                questionsAsked: [],
            },
            history: [],
            completedStates: [],
            skippedStates: [],
        };
        await this.persist();
        return this.start();
    }

    async start(): Promise<EngineResponse> {
        return this.runCurrentFlow();
    }

    async reply(input: string): Promise<EngineResponse> {
        await this.addMessage("user", input);

        const parsed = IntentParser.parse(input);
        await this.mergeProfile(parsed.entities);

        // Check if student asked a general Knowledge / FAQ question
        const answer = KnowledgeService.search(parsed.normalized);
        if (answer) {
            this.session.profile.questionsAsked.push(input);
            await this.addMessage("assistant", answer);

            // Run current flow to get next active prompt, combined with answer
            const flowResponse = await this.runCurrentFlow();
            return {
                ...flowResponse,
                message: `${answer}\n\n${flowResponse.message}`,
            };
        }

        // State-aware fallback extraction if profile entity for currentState is empty
        this.applyStateFallback(this.session.currentState, input);

        return this.runCurrentFlow();
    }

    private applyStateFallback(state: ConversationState, input: string) {
        const p = this.session.profile;
        const text = input.trim();
        if (!text) return;

        switch (state) {
            case ConversationState.DESTINATION:
                if (!p.interestedCountry) p.interestedCountry = text;
                break;
            case ConversationState.UNDERSTAND_GOAL:
                if (!p.interestedCourse) p.interestedCourse = text;
                break;
            case ConversationState.ACADEMIC_DETAILS:
                if (!p.currentQualification) p.currentQualification = text;
                else if (!p.currentPercentage) p.currentPercentage = text;
                else if (!p.graduationYear) p.graduationYear = text;
                break;
            case ConversationState.ENGLISH_TEST:
                if (!p.englishTest) p.englishTest = text;
                break;
            case ConversationState.BUDGET:
                if (!p.budget) p.budget = text;
                break;
            case ConversationState.INTAKE:
                if (!p.preferredIntake) p.preferredIntake = text;
                break;
            case ConversationState.SCHOLARSHIP:
                if (p.scholarshipInterested === undefined) {
                    p.scholarshipInterested = !/no|not|self/i.test(text);
                }
                break;
            case ConversationState.WORK_EXPERIENCE:
                if (!p.workExperience) p.workExperience = text;
                break;
            case ConversationState.PASSPORT:
                if (p.passportAvailable === undefined) {
                    p.passportAvailable = /yes|valid|applied|progress/i.test(text);
                }
                break;
            case ConversationState.CONTACT_DETAILS:
                if (!p.name) p.name = text;
                break;
        }
    }

    private async runCurrentFlow(): Promise<EngineResponse> {
        while (true) {
            const flow = FlowRegistry.get(this.session.currentState);

            if (!flow) {
                const scoreResult = LeadScorer.calculate(this.session.profile);
                const leadPayload = LeadExporter.export(
                    this.session.profile,
                    this.session.summary ?? "",
                    scoreResult.score,
                    scoreResult.notes
                );

                // Export lead to API / Webhook (Google Sheets integration)
                LeadExporter.sendToWebhook(leadPayload);

                const finalResponse: EngineResponse = {
                    message: "Thank you! A Globalizers senior counsellor will contact you shortly to schedule your personalized consultation session.",
                    quickReplies: ["Book Consultation Now", "Restart Assessment"],
                    allowFreeText: true,
                    currentState: ConversationState.COMPLETED,
                    progress: 100,
                    isComplete: true,
                    summary: this.session.summary,
                    leadScore: leadPayload.leadScore,
                    counsellorNotes: leadPayload.counsellorNotes,
                };
                return finalResponse;
            }

            const result = flow.execute(this.session);

            if (result.nextState) {
                if (
                    !this.session.completedStates.includes(this.session.currentState)
                ) {
                    this.session.completedStates.push(this.session.currentState);
                }

                this.session.currentState = result.nextState;

                if (!result.message) {
                    continue;
                }
            }

            if (result.message) {
                await this.addMessage("assistant", result.message);
            }
            await this.persist();

            const scoreResult = LeadScorer.calculate(this.session.profile);
            const isComplete =
                this.session.currentState === ConversationState.SUMMARY ||
                this.session.currentState === ConversationState.CONSULTATION ||
                this.session.currentState === ConversationState.COMPLETED;

            return {
                message: result.message,
                quickReplies: result.quickReplies,
                allowFreeText: result.allowFreeText ?? true,
                currentState: this.session.currentState,
                nextState: result.nextState,
                progress: STATE_PROGRESS_MAP[this.session.currentState] ?? 50,
                isComplete,
                summary: this.session.summary,
                leadScore: scoreResult.score,
                counsellorNotes: scoreResult.notes,
            };
        }
    }

    private async mergeProfile(data: Partial<StudentProfile>) {
        this.session.profile = ProfileUpdater.update(
            this.session.profile,
            data
        );
        await this.persist();
    }

    private async addMessage(role: "user" | "assistant", content: string) {
        this.session.history.push({
            id: generateUUID(),
            role,
            content,
            timestamp: Date.now(),
        });
        await this.persist();
    }

    private async persist() {
        await this.repository.save(this.session);
    }
}