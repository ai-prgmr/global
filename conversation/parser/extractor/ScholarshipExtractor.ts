import { StudentProfile } from "../../types";
import { Extractor } from "./Extractor";

export class ScholarshipExtractor implements Extractor {
    canExtract(text: string): boolean {
        return text.includes("scholarship");
    }

    extract(text: string): Partial<StudentProfile> {
        if (
            /(yes|interested|need|want|apply)/i.test(text)
        ) {
            return {
                scholarshipInterested: true,
            };
        }

        if (/(no|not)/i.test(text)) {
            return {
                scholarshipInterested: false,
            };
        }

        return {};
    }
}