import type { ReactNode } from "react";
export type BadgeVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "purple" | "indigo" | "gray";
export type BadgeSize = "sm" | "md" | "lg";
export interface BadgeProps {
    children: ReactNode;
    variant?: BadgeVariant;
    size?: BadgeSize;
    icon?: ReactNode;
    dot?: boolean;
    dotColor?: string;
    interactive?: boolean;
    onClick?: () => void;
    className?: string;
    customColor?: string;
}
export declare function Badge({ children, variant, size, icon, dot, dotColor, interactive, onClick, className, customColor, }: BadgeProps): import("react/jsx-runtime").JSX.Element;
