import { ConversationRepository } from "./ConversationRepository";
import { ConversationSession } from "../types";

const PREFIX = "study-compass:";

export class LocalStorageConversationRepository
    implements ConversationRepository {
    async save(session: ConversationSession): Promise<void> {
        localStorage.setItem(
            PREFIX + session.id,
            JSON.stringify(session)
        );
    }

    async load(sessionId: string): Promise<ConversationSession | null> {
        const raw = localStorage.getItem(PREFIX + sessionId);

        if (!raw) return null;

        return JSON.parse(raw) as ConversationSession;
    }

    async delete(sessionId: string): Promise<void> {
        localStorage.removeItem(PREFIX + sessionId);
    }
}