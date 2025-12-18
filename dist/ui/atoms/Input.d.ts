import type { InputHTMLAttributes, ReactNode } from "react";
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
    leftAddon?: ReactNode;
    rightAddon?: ReactNode;
    hint?: string;
    fullWidth?: boolean;
};
export declare const Input: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
    leftAddon?: ReactNode;
    rightAddon?: ReactNode;
    hint?: string;
    fullWidth?: boolean;
} & import("react").RefAttributes<HTMLInputElement>>;
