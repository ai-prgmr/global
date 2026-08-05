import {
    ConversationFlow,
    ConversationSession,
    ConversationState,
    FlowResult,
} from "../types";

export class IntakeFlow implements ConversationFlow {
    state = ConversationState.INTAKE;

    execute(session: ConversationSession): FlowResult {
        if (!session.profile.preferredIntake) {
            return {
                message: "Which intake are you aiming for?",
                quickReplies: [
                    "Fall 2024 / Spring 2025",
                    "Fall 2025",
                    "Spring 2026",
                    "Exploring Intakes",
                ],
                allowFreeText: true,
            };
        }

        return {
            message: "Awesome! Are you interested in university scholarship guidance and financial aid options?",
            quickReplies: [
                "Yes, very interested",
                "Maybe if eligible",
                "No, self-funded",
            ],
            allowFreeText: true,
            nextState: ConversationState.SCHOLARSHIP,
        };
    }
}
