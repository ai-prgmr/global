import {
    ConversationFlow,
    ConversationSession,
    ConversationState,
    FlowResult,
} from "../types";

export class UnderstandGoalFlow implements ConversationFlow {
    state = ConversationState.UNDERSTAND_GOAL;

    execute(session: ConversationSession): FlowResult {
        if (!session.profile.interestedCourse) {
            return {
                message: "What course or field of study are you planning to pursue abroad?",
                quickReplies: [
                    "Master's / PG",
                    "Bachelor's Degree",
                    "MBA",
                    "Computer Science / IT",
                    "Engineering",
                    "Data Science / AI",
                ],
                allowFreeText: true,
            };
        }

        return {
            message: `Understood! Pursuing ${session.profile.interestedCourse} will open great career opportunities.\n\nNow, could you share your highest academic qualification?`,
            quickReplies: [
                "B.Tech / B.E.",
                "B.Com / BBA",
                "B.Sc / BCA",
                "12th Grade / Senior Secondary",
                "Master's Degree",
            ],
            allowFreeText: true,
            nextState: ConversationState.ACADEMIC_DETAILS,
        };
    }
}