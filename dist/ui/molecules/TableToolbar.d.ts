import type { ReactNode } from "react";
type SearchFieldDescriptor = {
    value: string;
    label: string;
};
export type TableToolbarSearchController = {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    selectedField: string;
    onFieldChange: (value: string) => void;
    searchFields: SearchFieldDescriptor[];
    placeholder?: string;
    resultCount?: number;
    totalCount?: number;
};
export type TableToolbarProps = {
    search: TableToolbarSearchController;
    onCreate?: () => void;
    createLabel?: string;
    createIcon?: ReactNode;
    createAriaLabel?: string;
    rightSlot?: ReactNode;
    className?: string;
};
export declare function TableToolbar({ search, onCreate, createLabel, createIcon, createAriaLabel, rightSlot, className, }: TableToolbarProps): import("react/jsx-runtime").JSX.Element;
export {};
