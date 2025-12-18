import type { PropsWithChildren } from "react";
export interface PageContainerProps {
    centered?: boolean;
    title?: string;
    subtitle?: string;
    className?: string;
}
export declare function PageContainer({ centered, title, subtitle, className, children, }: PropsWithChildren<PageContainerProps>): import("react/jsx-runtime").JSX.Element;
