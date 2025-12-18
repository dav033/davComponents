import type { ButtonHTMLAttributes, ReactNode } from "react";
type Variant = "primary" | "secondary" | "ghost" | "danger" | "subtle";
type Size = "sm" | "md" | "lg";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    size?: Size;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    loading?: boolean;
    fullWidth?: boolean;
};
export declare function Button({ variant, size, leftIcon, rightIcon, className, loading, disabled, fullWidth, children, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
