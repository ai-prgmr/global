import tests from "../../knowledge/english-tests.json";
import { StudentProfile } from "../../types";
import { Extractor } from "./Extractor";

interface EnglishTest {
    name: string;
    keywords: string[];
}

export class EnglishTestExtractor implements Extractor {
    canExtract(text: string): boolean {
        return (tests as EnglishTest[]).some((test) =>
            test.keywords.some((keyword) => text.includes(keyword))
        );
    }

    extract(text: string): Partial<StudentProfile> {
        const test = (tests as EnglishTest[]).find((test) =>
            test.keywords.some((keyword) => text.includes(keyword))
        );

        if (!test) return {};

        return {
            englishTest: test.name,
        };
    }
}