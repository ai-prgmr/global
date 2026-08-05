import { ConversationFlow, ConversationState } from "../types";
import {
    WelcomeFlow,
    DestinationFlow,
    UnderstandGoalFlow,
    AcademicFlow,
    EnglishTestFlow,
    BudgetFlow,
    IntakeFlow,
    ScholarshipFlow,
    WorkExperienceFlow,
    PassportFlow,
    ContactDetailsFlow,
    SummaryFlow,
} from "../flows";

export class FlowRegistry {
    private static flows = new Map<ConversationState, ConversationFlow>([
        [ConversationState.WELCOME, new WelcomeFlow()],
        [ConversationState.DESTINATION, new DestinationFlow()],
        [ConversationState.UNDERSTAND_GOAL, new UnderstandGoalFlow()],
        [ConversationState.ACADEMIC_DETAILS, new AcademicFlow()],
        [ConversationState.ENGLISH_TEST, new EnglishTestFlow()],
        [ConversationState.BUDGET, new BudgetFlow()],
        [ConversationState.INTAKE, new IntakeFlow()],
        [ConversationState.SCHOLARSHIP, new ScholarshipFlow()],
        [ConversationState.WORK_EXPERIENCE, new WorkExperienceFlow()],
        [ConversationState.PASSPORT, new PassportFlow()],
        [ConversationState.CONTACT_DETAILS, new ContactDetailsFlow()],
        [ConversationState.SUMMARY, new SummaryFlow()],
    ]);

    static get(state: ConversationState): ConversationFlow | undefined {
        return this.flows.get(state);
    }
}