import {
    ConversationFlow,
    ConversationSession,
    ConversationState,
    FlowResult,
} from "../types";

export class AcademicFlow implements ConversationFlow {
    state = ConversationState.ACADEMIC_DETAILS;

    execute(session: ConversationSession): FlowResult {
        const p = session.profile;

        if (!p.currentQualification) {
            return {
                message: "What is your highest education level or qualification?",
                quickReplies: [
                    "B.Tech / B.E.",
                    "B.Com / BBA",
                    "B.Sc / BCA",
                    "12th Grade / Senior Secondary",
                    "Master's Degree",
                ],
                allowFreeText: true,
            };
        }

        if (!p.currentPercentage) {
            return {
                message: "What percentage or CGPA did you achieve in your latest qualification?",
                quickReplies: [
                    "Above 80% (or 8.5+ CGPA)",
                    "70% - 80% (or 7.5 - 8.5 CGPA)",
                    "60% - 70% (or 6.5 - 7.5 CGPA)",
                    "Below 60%",
                ],
                allowFreeText: true,
            };
        }

        if (!p.graduationYear) {
            return {
                message: "Which year did you complete or plan to complete your qualification?",
                quickReplies: [
                    "2024",
                    "2023",
                    "2022",
                    "2025 (Pursuing)",
                    "Earlier than 2022",
                ],
                allowFreeText: true,
            };
        }

        return {
            message: "Thanks for sharing your academic background!\n\nHave you taken or planned an English proficiency exam (like IELTS or TOEFL)?",
            quickReplies: [
                "IELTS Completed",
                "TOEFL / Duolingo",
                "Not Yet Taken",
                "Waiver Eligible",
            ],
            allowFreeText: true,
            nextState: ConversationState.ENGLISH_TEST,
        };
    }
}