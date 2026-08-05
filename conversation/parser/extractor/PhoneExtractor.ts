import { StudentProfile } from "../../types";
import { Extractor } from "./Extractor";

export class PhoneExtractor implements Extractor {
    canExtract(text: string): boolean {
        return /(?:\+91[\s-]?)?[6-9]\d{9}/.test(text);
    }

    extract(text: string): Partial<StudentProfile> {
        const match = text.match(/(?:\+91[\s-]?)?([6-9]\d{9})/);

        if (!match) return {};

        return {
            phone: match[1],
        };
    }
}