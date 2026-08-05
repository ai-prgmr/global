import { StudentProfile } from "../types";

export class ProfileCompleteness {
    static requiredFields: (keyof StudentProfile)[] = [
        "name",
        "phone",
        "email",

        "interestedCountry",
        "interestedCourse",

        "educationLevel",
        "currentQualification",
        "graduationYear",
        "currentPercentage",

        "englishTest",
        "budget",

        "passportAvailable",
        "scholarshipInterested",
    ];

    static percentage(profile: StudentProfile): number {
        const completed = this.requiredFields.filter((field) => {
            const value = profile[field];
            return value !== undefined && value !== "";
        }).length;

        return Math.round(
            (completed / this.requiredFields.length) * 100
        );
    }

    static missing(profile: StudentProfile) {
        return this.requiredFields.filter((field) => {
            const value = profile[field];
            return value === undefined || value === "";
        });
    }

    static isComplete(profile: StudentProfile) {
        return this.missing(profile).length === 0;
    }
}