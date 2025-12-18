import type { Key, ReactNode } from "react";
import { type SimpleTableColumn } from "./SimpleTable";
export type ContextMenuTableItem = {
    id?: string;
    label: string;
    onClick: () => void;
    icon?: string | ReactNode;
    variant?: "default" | "danger";
    disabled?: boolean;
    shortcut?: string;
    separator?: boolean;
};
export type ContextMenuTableState = {
    iconName: string;
    title: string;
    subtitle: string;
};
export type ContextMenuTableProps<T> = {
    data: T[];
    columns: SimpleTableColumn<T>[];
    rowKey: (item: T) => Key;
    getContextMenuItems?: (item: T) => ContextMenuTableItem[];
    isLoading?: boolean;
    emptyState?: ContextMenuTableState;
    loadingState?: ContextMenuTableState;
};
export declare function ContextMenuTable<T>({ data, columns, rowKey, getContextMenuItems, isLoading, emptyState, loadingState, }: ContextMenuTableProps<T>): import("react/jsx-runtime").JSX.Element;
