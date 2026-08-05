import { ConversationRepository } from "./ConversationRepository";
import { ConversationSession } from "../types";

export class InMemoryConversationRepository
    implements ConversationRepository {
    private store = new Map<string, ConversationSession>();

    async save(session: ConversationSession): Promise<void> {
        this.store.set(session.id, structuredClone(session));
    }

    async load(sessionId: string): Promise<ConversationSession | null> {
        return this.store.get(sessionId) ?? null;
    }

    async delete(sessionId: string): Promise<void> {
        this.store.delete(sessionId);
    }
}