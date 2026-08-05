import {
    ConversationFlow,
    ConversationSession,
    ConversationState,
    FlowResult,
} from "../types";

export class DestinationFlow implements ConversationFlow {
    state = ConversationState.DESTINATION;

    execute(session: ConversationSession): FlowResult {
        if (!session.profile.interestedCountry) {
            return {
                message: "Which study destination are you interested in?",
                quickReplies: [
                    "Australia",
                    "Canada",
                    "United Kingdom",
                    "USA",
                    "Germany",
                    "Exploring Options",
                ],
                allowFreeText: true,
            };
        }

        return {
            message: `Great choice! ${session.profile.interestedCountry} has world-class universities.\n\nWhat course or field of study are you planning to pursue?`,
            quickReplies: [
                "Master's / PG",
                "Bachelor's Degree",
                "MBA",
                "Computer Science / IT",
                "Engineering",
                "Data Science / AI",
            ],
            allowFreeText: true,
            nextState: ConversationState.UNDERSTAND_GOAL,
        };
    }
}
