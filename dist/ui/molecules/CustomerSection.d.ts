import type { ReactNode } from "react";
export type CustomerSectionProps<T> = {
    title: string;
    itemCount: number;
    showSkeleton: boolean;
    skeleton: ReactNode;
    table: ReactNode;
};
export declare function CustomerSection<T>({ title, itemCount, showSkeleton, skeleton, table, }: CustomerSectionProps<T>): import("react/jsx-runtime").JSX.Element;
