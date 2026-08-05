import { StudentProfile } from "../../types";
import { Extractor } from "./Extractor";

export class PercentageExtractor implements Extractor {
    canExtract(text: string): boolean {
        return /\b(\d{2}(?:\.\d+)?)\s?%/.test(text) || /\b(\d(?:\.\d+)?)\s?cgpa/i.test(text);
    }

    extract(text: string): Partial<StudentProfile> {
        const matchPct = text.match(/\b(\d{2}(?:\.\d+)?)\s?%/);
        if (matchPct) {
            return { currentPercentage: `${matchPct[1]}%` };
        }
        const matchCgpa = text.match(/\b(\d(?:\.\d+)?)\s?cgpa/i);
        if (matchCgpa) {
            return { currentPercentage: `${matchCgpa[1]} CGPA` };
        }
        return {};
    }
}