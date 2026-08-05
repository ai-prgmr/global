import countries from "./countries.json";
import faqs from "./faqs.json";

interface Country {
    id: string;
    name: string;
    description: string;
}

interface FAQ {
    id: string;
    keywords: string[];
    answer: string;
}

export class KnowledgeService {
    static search(input: string): string | null {
        const query = input.toLowerCase().trim();

        if (!query) return null;

        // 1. Search FAQs by keyword matching
        const faqMatch = (faqs as FAQ[]).find((item) =>
            item.keywords.some((keyword) => query.includes(keyword.toLowerCase()))
        );

        if (faqMatch) return faqMatch.answer;

        // 2. Search Country details
        const countryMatch = (countries as Country[]).find(
            (country) =>
                query.includes(country.id.toLowerCase()) ||
                query.includes(country.name.toLowerCase())
        );

        if (countryMatch) return countryMatch.description;

        return null;
    }
}