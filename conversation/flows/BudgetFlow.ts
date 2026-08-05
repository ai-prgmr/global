import {
    ConversationFlow,
    ConversationSession,
    ConversationState,
    FlowResult,
} from "../types";

export class BudgetFlow implements ConversationFlow {
    state = ConversationState.BUDGET;

    execute(session: ConversationSession): FlowResult {
        if (!session.profile.budget) {
            return {
                message: "What is your estimated total budget for tuition & living costs?",
                quickReplies: [
                    "Under ₹15 Lakhs",
                    "₹15 - 25 Lakhs",
                    "₹25 - 40 Lakhs",
                    "Above ₹40 Lakhs",
                ],
                allowFreeText: true,
            };
        }

        return {
            message: "Understood! When do you plan to start your studies abroad?",
            quickReplies: [
                "Fall 2024 / Spring 2025",
                "Fall 2025",
                "Spring 2026",
                "Exploring Intakes",
            ],
            allowFreeText: true,
            nextState: ConversationState.INTAKE,
        };
    }
}
