import { ConversationState } from "../types";

const ORDER: ConversationState[] = [
    ConversationState.WELCOME,
    ConversationState.DESTINATION,
    ConversationState.UNDERSTAND_GOAL,
    ConversationState.ACADEMIC_DETAILS,
    ConversationState.ENGLISH_TEST,
    ConversationState.BUDGET,
    ConversationState.INTAKE,
    ConversationState.SCHOLARSHIP,
    ConversationState.WORK_EXPERIENCE,
    ConversationState.PASSPORT,
    ConversationState.CONTACT_DETAILS,
    ConversationState.SUMMARY,
    ConversationState.CONSULTATION,
    ConversationState.COMPLETED,
];

export class StateMachine {
    static next(current: ConversationState): ConversationState {
        const index = ORDER.indexOf(current);

        if (index === -1 || index === ORDER.length - 1) {
            return ConversationState.COMPLETED;
        }

        return ORDER[index + 1];
    }
}