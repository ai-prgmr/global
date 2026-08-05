import countries from "../../knowledge/countries.json";
import { StudentProfile } from "../../types";
import { Extractor } from "./Extractor";

export class CountryExtractor implements Extractor {
    canExtract(text: string): boolean {
        return countries.some(
            (c) =>
                text.includes(c.id.toLowerCase()) ||
                text.includes(c.name.toLowerCase())
        );
    }

    extract(text: string): Partial<StudentProfile> {
        const country = countries.find(
            (c) =>
                text.includes(c.id.toLowerCase()) ||
                text.includes(c.name.toLowerCase())
        );

        if (!country) return {};

        return {
            interestedCountry: country.name,
        };
    }
}