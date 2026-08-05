import { StudentProfile } from "../types";

export class DynamicQuestions {
    static getMissing(profile: StudentProfile): string[] {
        const missing: string[] = [];

        if (!profile.interestedCourse)
            missing.push("interestedCourse");

        if (!profile.educationLevel)
            missing.push("educationLevel");

        if (!profile.currentQualification)
            missing.push("currentQualification");

        if (!profile.currentPercentage)
            missing.push("currentPercentage");

        if (!profile.graduationYear)
            missing.push("graduationYear");

        if (!profile.interestedCountry)
            missing.push("interestedCountry");

        if (!profile.englishTest)
            missing.push("englishTest");

        if (!profile.budget)
            missing.push("budget");

        if (profile.passportAvailable === undefined)
            missing.push("passportAvailable");

        if (profile.scholarshipInterested === undefined)
            missing.push("scholarshipInterested");

        return missing;
    }

    static isComplete(profile: StudentProfile) {
        return this.getMissing(profile).length === 0;
    }
}