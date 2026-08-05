import { StudentProfile } from "../../types";
import { Extractor } from "./Extractor";

export class IntakeExtractor implements Extractor {
    canExtract(text: string): boolean {
        return /fall|spring|summer|intake|2024|2025|2026|exploring/i.test(text);
    }

    extract(text: string): Partial<StudentProfile> {
        return {
            preferredIntake: text,
        };
    }
}
