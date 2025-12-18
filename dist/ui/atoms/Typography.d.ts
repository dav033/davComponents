import * as React from "react";
export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "body" | "small" | "caption";
export type TypographyColor = "light" | "muted" | "gray" | "primary" | "success" | "warning" | "error";
export interface TypographyProps {
    variant?: TypographyVariant;
    color?: TypographyColor;
    className?: string;
    children: React.ReactNode;
    as?: React.ElementType;
}
export declare function Typography({ variant, color, className, children, as, }: TypographyProps): import("react/jsx-runtime").JSX.Element;
