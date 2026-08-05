import {
    ConversationFlow,
    ConversationSession,
    ConversationState,
    FlowResult,
} from "../types";

export class WorkExperienceFlow implements ConversationFlow {
    state = ConversationState.WORK_EXPERIENCE;

    execute(session: ConversationSession): FlowResult {
        if (!session.profile.workExperience) {
            return {
                message: "Do you have any work experience?",
                quickReplies: [
                    "None (Fresh Graduate)",
                    "1-2 Years",
                    "3-5 Years",
                    "5+ Years",
                ],
                allowFreeText: true,
            };
        }

        return {
            message: "Great. Lastly for your study profile, do you currently have a valid passport?",
            quickReplies: [
                "Yes, Valid Passport",
                "Applied / In Progress",
                "No Passport Yet",
            ],
            allowFreeText: true,
            nextState: ConversationState.PASSPORT,
        };
    }
}
