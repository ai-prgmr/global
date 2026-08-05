import { StudentProfile } from "../../types";

export interface Extractor {
    canExtract(text: string): boolean;
    extract(text: string): Partial<StudentProfile>;
}