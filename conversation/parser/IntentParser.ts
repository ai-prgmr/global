import { EntityExtractor } from "./extractor/EntityExtractor";
import { Normalizer } from "./Normalizer";
import { StudentProfile } from "../types";

export interface ParsedInput {
    normalized: string;
    entities: Partial<StudentProfile>;
    isQuestion: boolean;
}

export class IntentParser {
    static parse(input: string): ParsedInput {
        const normalized = Normalizer.text(input);

        return {
            normalized,
            entities: EntityExtractor.extract(normalized),
            isQuestion:
                normalized.includes("?") ||
                normalized.startsWith("what") ||
                normalized.startsWith("how") ||
                normalized.startsWith("when") ||
                normalized.startsWith("can") ||
                normalized.startsWith("do") ||
                normalized.startsWith("is"),
        };
    }
}