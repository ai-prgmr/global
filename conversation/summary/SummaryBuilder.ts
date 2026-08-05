import { StudentProfile } from "../types";

export class SummaryBuilder {
    static build(profile: StudentProfile): string {
        const passportStatus =
            profile.passportAvailable === undefined
                ? "Not Specified"
                : profile.passportAvailable
                ? "Yes (Valid)"
                : "No / In Progress";

        const scholarshipStatus =
            profile.scholarshipInterested === undefined
                ? "Not Specified"
                : profile.scholarshipInterested
                ? "Yes (Seeking Aid)"
                : "Self-Funded";

        return `📋 **Your Pre-Counselling Summary**

• **Destination**: ${profile.interestedCountry ?? "Flexible"}
• **Course**: ${profile.interestedCourse ?? "Under Discussion"}
• **Qualification**: ${profile.currentQualification ?? "Student"} (${profile.currentPercentage ?? "N/A"}, Graduated ${profile.graduationYear ?? "N/A"})
• **Target Intake**: ${profile.preferredIntake ?? "Upcoming Intake"}
• **Budget**: ${profile.budget ?? "Under Review"}
• **English Test**: ${profile.englishTest ?? "Not Taken"}
• **Work Experience**: ${profile.workExperience ?? "None"}
• **Scholarship**: ${scholarshipStatus}
• **Passport**: ${passportStatus}

👤 **Contact**: ${profile.name ?? "Student"} | ${profile.phone ?? profile.email ?? "Shared"}`.trim();
    }
}