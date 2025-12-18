import type { ReactNode } from "react";
export interface EntityCrudPageTemplateProps {
    header: ReactNode;
    toolbar?: ReactNode;
    isLoading: boolean;
    loadingContent: ReactNode;
    isEmpty?: boolean;
    emptyContent?: ReactNode;
    tableContent: ReactNode;
    modals?: ReactNode;
    className?: string;
}
export declare function EntityCrudPageTemplate({ header, toolbar, isLoading, loadingContent, isEmpty, emptyContent, tableContent, modals, className, }: EntityCrudPageTemplateProps): import("react/jsx-runtime").JSX.Element;
