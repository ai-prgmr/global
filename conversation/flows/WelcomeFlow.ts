import {
    ConversationFlow,
    ConversationState,
    FlowResult,
    ConversationSession,
} from "../types";

export class WelcomeFlow implements ConversationFlow {
    state = ConversationState.WELCOME;

    execute(_: ConversationSession): FlowResult {
        return {
            message:
                "Hi! Welcome to Globalizers Study Compass 🎓. I'm here to understand your study abroad goals before connecting you with our expert counsellors.\n\nLet's get started — which country are you planning to study in?",
            quickReplies: [
                "Australia",
                "Canada",
                "United Kingdom",
                "USA",
                "Germany",
                "Other / Flexible",
            ],
            allowFreeText: true,
            nextState: ConversationState.DESTINATION,
        };
    }
}