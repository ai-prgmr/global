import { ConversationState, StudentProfile } from "../types";

export class FlowManager {
    static getNextState(profile: StudentProfile): ConversationState {
        if (!profile.interestedCountry)
            return ConversationState.DESTINATION;

        if (!profile.interestedCourse)
            return ConversationState.UNDERSTAND_GOAL;

        if (
            !profile.educationLevel &&
            !profile.currentQualification
        )
            return ConversationState.ACADEMIC_DETAILS;

        if (!profile.englishTest)
            return ConversationState.ENGLISH_TEST;

        if (!profile.budget)
            return ConversationState.BUDGET;

        if (!profile.preferredIntake)
            return ConversationState.INTAKE;

        if (profile.scholarshipInterested === undefined)
            return ConversationState.SCHOLARSHIP;

        if (!profile.workExperience)
            return ConversationState.WORK_EXPERIENCE;

        if (profile.passportAvailable === undefined)
            return ConversationState.PASSPORT;

        if (!profile.name && !profile.email && !profile.phone)
            return ConversationState.CONTACT_DETAILS;

        return ConversationState.SUMMARY;
    }
}