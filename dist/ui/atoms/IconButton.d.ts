import type { ButtonHTMLAttributes, ReactNode } from "react";
type IconButtonVariant = "solid" | "ghost";
type IconButtonSize = "sm" | "md" | "lg";
export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: ReactNode;
    variant?: IconButtonVariant;
    size?: IconButtonSize;
};
export declare function IconButton({ icon, variant, size, className, ...props }: IconButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
