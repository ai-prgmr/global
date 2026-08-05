import { StudentProfile } from "../../types";
import { Extractor } from "./Extractor";

export class GraduationYearExtractor implements Extractor {
    canExtract(text: string): boolean {
        return /\b(19|20)\d{2}\b/.test(text);
    }


    extract(text: string): Partial<StudentProfile> {
        const match = text.match(/\b20\d{2}\b/);

        if (!match) return {};

        return {
            graduationYear: match[0],
        };
    }
}