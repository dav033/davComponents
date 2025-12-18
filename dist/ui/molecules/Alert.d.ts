import type { HTMLAttributes, ReactNode } from "react";
export type AlertVariant = "info" | "success" | "warning" | "error";
export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant?: AlertVariant;
    children: ReactNode;
}
export declare function Alert({ variant, className, children, ...rest }: AlertProps): import("react/jsx-runtime").JSX.Element;
