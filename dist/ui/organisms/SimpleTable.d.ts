import React from "react";
type SimpleTableSortValue = string | number | null | undefined;
export type SimpleTableColumn<T> = {
    key: keyof T | string;
    header: string;
    className?: string;
    render?: (item: T) => React.ReactNode;
    sortable?: boolean;
    sortValue?: (item: T) => SimpleTableSortValue;
};
export interface SimpleTableProps<T> {
    columns: SimpleTableColumn<T>[];
    data: T[];
    rowKey: (item: T) => React.Key;
    onRowContextMenu?: (event: React.MouseEvent<HTMLTableRowElement>, item: T) => void;
}
export declare function SimpleTable<T>({ columns, data, rowKey, onRowContextMenu, }: SimpleTableProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
