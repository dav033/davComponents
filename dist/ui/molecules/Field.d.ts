import type { ReactNode } from "react";
export interface FieldProps {
    label?: string;
    error?: string;
    hint?: string;
    children: ReactNode;
    htmlFor?: string;
}
/**
 * Wrapper component that provides consistent label, error, and hint styling
 * for form controls. Reduces duplication across Input, Select, and other form components.
 */
export declare function Field({ label, error, hint, children, htmlFor }: FieldProps): import("react/jsx-runtime").JSX.Element;
