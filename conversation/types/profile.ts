export interface StudentProfile {
    name?: string;
    phone?: string;
    email?: string;

    interestedCountry?: string;
    interestedCourse?: string;

    educationLevel?: string;
    currentQualification?: string;
    graduationYear?: string;
    currentPercentage?: string;

    englishTest?: string;
    budget?: string;
    preferredIntake?: string;

    scholarshipInterested?: boolean;
    passportAvailable?: boolean;
    workExperience?: string;

    questionsAsked: string[];
}