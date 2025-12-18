type SearchFieldOption = {
    key: string;
    label: string;
};
export type SearchBoxWithDropdownProps = {
    searchTerm: string;
    onSearchTermChange: (value: string) => void;
    options: SearchFieldOption[];
    selectedKey: string;
    onSelectKey: (value: string) => void;
    placeholder?: string;
    hasActiveSearch?: boolean;
    onClearSearch?: () => void;
    resultCount?: number;
    totalCount?: number;
};
export declare function SearchBoxWithDropdown({ searchTerm, onSearchTermChange, options, selectedKey, onSelectKey, placeholder, hasActiveSearch, onClearSearch, resultCount, totalCount, }: SearchBoxWithDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
