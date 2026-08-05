import { StudentProfile } from "../../types";
import { Extractor } from "./Extractor";

export class PassportExtractor implements Extractor {
    canExtract(text: string): boolean {
        return text.includes("passport");
    }

    extract(text: string): Partial<StudentProfile> {
        if (
            /(have|yes|available|already|valid)/i.test(text)
        ) {
            return {
                passportAvailable: true,
            };
        }

        if (
            /(no|don't|dont|not yet|expired)/i.test(text)
        ) {
            return {
                passportAvailable: false,
            };
        }

        return {};
    }
}