import {
    ConversationFlow,
    ConversationSession,
    ConversationState,
    FlowResult,
} from "../types";

export class PassportFlow implements ConversationFlow {
    state = ConversationState.PASSPORT;

    execute(session: ConversationSession): FlowResult {
        if (session.profile.passportAvailable === undefined) {
            return {
                message: "Do you currently have a valid passport?",
                quickReplies: [
                    "Yes, Valid Passport",
                    "Applied / In Progress",
                    "No Passport Yet",
                ],
                allowFreeText: true,
            };
        }

        return {
            message: "Thank you! We've gathered your study preferences. 🎯\n\nPlease share your Full Name and Contact Details (Email / Phone) so our senior counsellor can connect with you.",
            allowFreeText: true,
            nextState: ConversationState.CONTACT_DETAILS,
        };
    }
}
