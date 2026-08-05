import { ConversationSession } from "../types";

export interface ConversationRepository {
    save(session: ConversationSession): Promise<void>;
    load(sessionId: string): Promise<ConversationSession | null>;
    delete(sessionId: string): Promise<void>;
}