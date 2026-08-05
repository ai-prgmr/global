import qualifications from "../../knowledge/qualifications.json";
import { StudentProfile } from "../../types";
import { Extractor } from "./Extractor";

interface Qualification {
    level: string;
    qualification: string;
    keywords: string[];
}

export class QualificationExtractor implements Extractor {
    canExtract(text: string): boolean {
        return (qualifications as Qualification[]).some((item) =>
            item.keywords.some((keyword) => text.includes(keyword))
        );
    }

    extract(text: string): Partial<StudentProfile> {
        const qualification = (qualifications as Qualification[]).find((item) =>
            item.keywords.some((keyword) => text.includes(keyword))
        );

        if (!qualification) return {};

        return {
            educationLevel: qualification.level,
            currentQualification: qualification.qualification,
        };
    }
}