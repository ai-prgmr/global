import {
    ConversationFlow,
    ConversationSession,
    ConversationState,
    FlowResult,
} from "../types";

export class EnglishTestFlow implements ConversationFlow {
    state = ConversationState.ENGLISH_TEST;

    execute(session: ConversationSession): FlowResult {
        if (!session.profile.englishTest) {
            return {
                message: "Have you taken or planned an English language test?",
                quickReplies: [
                    "IELTS",
                    "TOEFL",
                    "Duolingo",
                    "Not Yet Taken",
                ],
                allowFreeText: true,
            };
        }

        return {
            message: "Got it! Our counsellors can help recommend test prep or university waiver options if needed.\n\nWhat is your estimated total budget for tuition and living expenses?",
            quickReplies: [
                "Under ₹15 Lakhs",
                "₹15 - 25 Lakhs",
                "₹25 - 40 Lakhs",
                "Above ₹40 Lakhs",
            ],
            allowFreeText: true,
            nextState: ConversationState.BUDGET,
        };
    }
}
