export interface UseTableWithSearchOptions<T> {
    data: T[];
    searchableFields?: (keyof T)[];
    defaultSearchField?: string;
    customSearchFn?: (item: T, query: string, field: string) => boolean;
    normalize?: (value: string) => string;
}
export interface UseTableWithSearchResult<T> {
    filteredData: T[];
    searchQuery: string;
    searchField: string;
    setSearchQuery: (query: string) => void;
    setSearchField: (field: string) => void;
    totalCount: number;
    filteredCount: number;
}
export declare function useTableWithSearch<T extends Record<string, any>>({ data, searchableFields, defaultSearchField, customSearchFn, normalize, }: UseTableWithSearchOptions<T>): UseTableWithSearchResult<T>;
