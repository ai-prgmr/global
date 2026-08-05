import courses from "../../knowledge/courses.json";
import { StudentProfile } from "../../types";
import { Extractor } from "./Extractor";

interface Course {
    id: string;
    name: string;
    keywords: string[];
}

export class CourseExtractor implements Extractor {
    canExtract(text: string): boolean {
        return (courses as Course[]).some((course) =>
            course.keywords.some((keyword) => text.includes(keyword))
        );
    }

    extract(text: string): Partial<StudentProfile> {
        const course = (courses as Course[]).find((course) =>
            course.keywords.some((keyword) => text.includes(keyword))
        );

        if (!course) return {};

        return {
            interestedCourse: course.name,
        };
    }
}