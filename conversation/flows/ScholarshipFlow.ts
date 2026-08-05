import {
    ConversationFlow,
    ConversationSession,
    ConversationState,
    FlowResult,
} from "../types";

export class ScholarshipFlow implements ConversationFlow {
    state = ConversationState.SCHOLARSHIP;

    execute(session: ConversationSession): FlowResult {
        if (session.profile.scholarshipInterested === undefined) {
            return {
                message: "Are you interested in scholarship guidance?",
                quickReplies: [
                    "Yes, very interested",
                    "Maybe if eligible",
                    "No, self-funded",
                ],
                allowFreeText: true,
            };
        }

        return {
            message: "Noted! Do you have any full-time or relevant work experience?",
            quickReplies: [
                "None (Fresh Graduate)",
                "1-2 Years",
                "3-5 Years",
                "5+ Years",
            ],
            allowFreeText: true,
            nextState: ConversationState.WORK_EXPERIENCE,
        };
    }
}
