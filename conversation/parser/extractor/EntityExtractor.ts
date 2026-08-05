import { StudentProfile } from "../../types";

import { BudgetExtractor } from "./BudgetExtractor";
import { CountryExtractor } from "./CountryExtractor";
import { EnglishTestExtractor } from "./EnglistTestExtractor";
import { GraduationYearExtractor } from "./GraduationYearExtractor";
import { PercentageExtractor } from "./PercentageExtractor";
import { NameExtractor } from "./NameExtractor";
import { EmailExtractor } from "./EmailExtractor";
import { PhoneExtractor } from "./PhoneExtractor";
import { CourseExtractor } from "./CourseExtractor";
import { QualificationExtractor } from "./QualificationExtractor";
import { PassportExtractor } from "./PassportExtractor";
import { ScholarshipExtractor } from "./ScholarshipExtractor";
import { WorkExperienceExtractor } from "./WorkExperienceExtractor";
import { IntakeExtractor } from "./IntakeExtractor";

const extractors = [
    new NameExtractor(),
    new EmailExtractor(),
    new PhoneExtractor(),

    new QualificationExtractor(),
    new CourseExtractor(),

    new CountryExtractor(),

    new GraduationYearExtractor(),
    new PercentageExtractor(),

    new EnglishTestExtractor(),

    new BudgetExtractor(),
    new IntakeExtractor(),

    new PassportExtractor(),
    new ScholarshipExtractor(),
    new WorkExperienceExtractor(),
];

export class EntityExtractor {
    static extract(text: string): Partial<StudentProfile> {
        const profile: Partial<StudentProfile> = {};

        for (const extractor of extractors) {
            if (!extractor.canExtract(text)) continue;

            Object.assign(profile, extractor.extract(text));
        }

        return profile;
    }
}