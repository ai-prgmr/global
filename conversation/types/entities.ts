export interface ExtractedEntity<T = unknown> {
    field: string;
    value: T;
    confidence: number;
}