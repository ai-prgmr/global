import { ConversationState } from "./state";

export interface EngineResponse {
    message: string;
    quickReplies?: string[];
    allowFreeText: boolean;
    currentState: ConversationState;
    nextState?: ConversationState;
    progress: number;
    isComplete: boolean;
    summary?: string;
    leadScore?: number;
    counsellorNotes?: string[];
}
