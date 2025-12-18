import type { SearchConfig } from "./types";
export type SearchState<T> = Readonly<{
    query: string;
    field: keyof T & string | "all";
}>;
export declare function normalizeValue(value: string, config?: {
    normalize?: (s: string) => string;
}): string;
export declare function filterBySearch<T>(items: readonly T[], config: SearchConfig<T>, state: SearchState<T>): T[];
