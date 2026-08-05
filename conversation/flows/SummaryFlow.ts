import {
    ConversationFlow,
    ConversationSession,
    ConversationState,
    FlowResult,
} from "../types";
import { SummaryBuilder } from "../summary/SummaryBuilder";

export class SummaryFlow implements ConversationFlow {
    state = ConversationState.SUMMARY;

    execute(session: ConversationSession): FlowResult {
        const summaryText = SummaryBuilder.build(session.profile);
        session.summary = summaryText;

        return {
            message: `${summaryText}\n\n🎉 Perfect! Your pre-counselling profile is now registered with Globalizers. Our senior study abroad counsellor will review your profile before your consultation.`,
            quickReplies: ["Book Free Consultation", "Start Over"],
            allowFreeText: true,
            nextState: ConversationState.CONSULTATION,
        };
    }
}
