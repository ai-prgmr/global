export class Normalizer {
    static text(input: string): string {
        return input
            .trim()
            .replace(/\s+/g, " ")
            .toLowerCase();
    }
}