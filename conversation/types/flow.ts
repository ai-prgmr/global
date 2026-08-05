import { ConversationSession } from "./session";
import { ConversationState } from "./state";

export interface FlowResult {
    message: string;
    quickReplies?: string[];
    allowFreeText?: boolean;
    nextState?: ConversationState;
}

export interface ConversationFlow {
    state: ConversationState;
    execute(session: ConversationSession): FlowResult;
}