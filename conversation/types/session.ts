import { Message } from "./message";
import { StudentProfile } from "./profile";
import { ConversationState } from "./state";

export interface ConversationSession {
    id: string;

    currentState: ConversationState;

    profile: StudentProfile;

    history: Message[];

    completedStates: ConversationState[];

    skippedStates: ConversationState[];

    summary?: string;
}