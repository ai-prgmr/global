import { StudentProfile } from "../types";

export class ProfileUpdater {
    static update(
        current: StudentProfile,
        incoming: Partial<StudentProfile>
    ): StudentProfile {
        return {
            ...current,
            ...incoming,
            questionsAsked: current.questionsAsked,
        };
    }
}