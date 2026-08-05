import { StudentProfile } from "../../types";
import { Extractor } from "./Extractor";

export class EmailExtractor implements Extractor {
    canExtract(text: string): boolean {
        return /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(text);
    }

    extract(text: string): Partial<StudentProfile> {
        const match = text.match(
            /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i
        );

        if (!match) return {};

        return {
            email: match[0].toLowerCase(),
        };
    }
}