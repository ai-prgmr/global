import { StudentProfile } from "../types";

export interface ScoreResult {
    score: number;
    notes: string[];
}

export class LeadScorer {
    static calculate(profile: StudentProfile): ScoreResult {
        let score = 0;
        const notes: string[] = [];

        if (profile.interestedCountry) {
            score += 10;
            notes.push(`Target Destination: ${profile.interestedCountry}`);
        }

        if (profile.interestedCourse) {
            score += 10;
            notes.push(`Course Goal: ${profile.interestedCourse}`);
        }

        if (profile.currentQualification || profile.educationLevel) {
            score += 10;
        }

        if (profile.currentPercentage) {
            score += 10;
            notes.push(`Academic Marks: ${profile.currentPercentage}`);
        }

        if (profile.englishTest) {
            score += 15;
            notes.push(`English Proficiency Status: ${profile.englishTest}`);
            if (profile.englishTest.toLowerCase().includes("not")) {
                notes.push("Action Required: Register / prepare for IELTS or TOEFL.");
            }
        }

        if (profile.budget) {
            score += 15;
            notes.push(`Budget Band: ${profile.budget}`);
        }

        if (profile.preferredIntake) {
            score += 10;
            notes.push(`Target Intake: ${profile.preferredIntake}`);
        }

        if (profile.passportAvailable !== undefined) {
            score += 10;
            notes.push(
                profile.passportAvailable
                    ? "Passport: Valid passport ready."
                    : "Passport: Pending application."
            );
        }

        if (profile.name && (profile.email || profile.phone)) {
            score += 10;
        }

        return {
            score: Math.min(100, score),
            notes: notes.length > 0 ? notes : ["Standard student lead."],
        };
    }
}
