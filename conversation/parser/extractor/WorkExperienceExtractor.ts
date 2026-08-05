import { StudentProfile } from "../../types";
import { Extractor } from "./Extractor";

export class WorkExperienceExtractor implements Extractor {
    canExtract(text: string): boolean {
        return (
            text.includes("experience") ||
            text.includes("worked") ||
            text.includes("working")
        );
    }

    extract(text: string): Partial<StudentProfile> {
        const match = text.match(
            /(\d+)\s+(year|years|month|months)/i
        );

        if (!match) return {};

        return {
            workExperience: match[0],
        };
    }
}