import { StudentProfile } from "../../types";
import { Extractor } from "./Extractor";

const IGNORE = new Set([
    "hi",
    "hello",
    "hey",
    "i",
    "im",
    "i'm",
    "my",
    "name",
    "is",
]);

export class NameExtractor implements Extractor {
    canExtract(text: string): boolean {
        return (
            /^my name is/i.test(text) ||
            /^i am/i.test(text) ||
            /^i'm/i.test(text)
        );
    }

    extract(text: string): Partial<StudentProfile> {
        const cleaned = text
            .replace(/^my name is/i, "")
            .replace(/^i am/i, "")
            .replace(/^i'm/i, "")
            .trim();

        const words = cleaned
            .split(/\s+/)
            .filter((word) => !IGNORE.has(word.toLowerCase()));

        if (!words.length) return {};

        return {
            name: words.join(" "),
        };
    }
}