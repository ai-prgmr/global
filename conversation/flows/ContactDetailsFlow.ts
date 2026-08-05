import {
    ConversationFlow,
    ConversationSession,
    ConversationState,
    FlowResult,
} from "../types";

export class ContactDetailsFlow implements ConversationFlow {
    state = ConversationState.CONTACT_DETAILS;

    execute(session: ConversationSession): FlowResult {
        const p = session.profile;

        if (!p.name && !p.phone && !p.email) {
            return {
                message: "Please share your Full Name and Phone Number (or Email) so we can reserve your consultation slot.",
                allowFreeText: true,
            };
        }

        return {
            message: "",
            nextState: ConversationState.SUMMARY,
        };
    }
}
