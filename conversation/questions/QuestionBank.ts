import { ConversationState } from "../types";

export const QuestionBank: Record<ConversationState, string[]> = {
    [ConversationState.WELCOME]: [
        "Hi! Welcome to Globalizers Study Compass. I'm here to understand your study abroad plans before connecting you with one of our counsellors."
    ],

    [ConversationState.DESTINATION]: [
        "Which country are you interested in studying in?"
    ],

    [ConversationState.UNDERSTAND_GOAL]: [
        "Which course are you planning to study abroad?",
        "What would you like to study?"
    ],

    [ConversationState.ACADEMIC_DETAILS]: [
        "Could you tell me your highest qualification?",
        "What percentage or CGPA did you score, and when did you graduate?"
    ],

    [ConversationState.ENGLISH_TEST]: [
        "Have you taken IELTS, TOEFL, Duolingo or any English proficiency test?"
    ],

    [ConversationState.BUDGET]: [
        "What is your approximate budget for studying abroad?"
    ],

    [ConversationState.INTAKE]: [
        "Which intake are you planning to join?"
    ],

    [ConversationState.SCHOLARSHIP]: [
        "Would you like to explore scholarship opportunities?"
    ],

    [ConversationState.WORK_EXPERIENCE]: [
        "Do you have any full-time or relevant work experience?"
    ],

    [ConversationState.PASSPORT]: [
        "Do you already have a valid passport?"
    ],

    [ConversationState.CONTACT_DETAILS]: [
        "Please share your Full Name, Email, and Phone number to complete your profile."
    ],

    [ConversationState.SUMMARY]: [
        "Thanks! I've gathered everything needed."
    ],

    [ConversationState.CONSULTATION]: [
        "Our counsellor will review your profile and recommend the best options. Would you like to schedule a consultation?"
    ],

    [ConversationState.COMPLETED]: [
        "Thank you for choosing Globalizers."
    ],
};