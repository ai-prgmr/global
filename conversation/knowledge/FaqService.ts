import faqs from "./faqs.json";

interface FAQ {
    id: string;
    keywords: string[];
    answer: string;
}

export class FaqService {
    static find(query: string): string | null {
        const text = query.toLowerCase();

        const faq = (faqs as FAQ[]).find((item) =>
            item.keywords.some((keyword) => text.includes(keyword))
        );

        return faq?.answer ?? null;
    }
}