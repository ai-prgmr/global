import { StudentProfile } from "../../types";
import { Extractor } from "./Extractor";

export class BudgetExtractor implements Extractor {
    canExtract(text: string): boolean {
        return /(\d+(?:\.\d+)?)\s?(lakh|lakhs|lac|crore|crores|k|\$|₹)/i.test(text);
    }

    extract(text: string): Partial<StudentProfile> {
        const match = text.match(
            /(\d+(?:\.\d+)?)\s?(lakh|lakhs|lac|crore|crores|k|\$|₹)/i
        );

        if (!match) return { budget: text };

        return {
            budget: match[0],
        };
    }
}