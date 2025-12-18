import type { SelectOption } from "./Select";
export interface SelectNativeProps {
    options: ReadonlyArray<SelectOption>;
    value: string | number | undefined | null;
    onChange: (value: string) => void;
    placeholder?: string;
    icon?: string;
    disabled?: boolean;
    className?: string;
    allowEmpty?: boolean;
    emptyLabel?: string;
}
/**
 * Native <select> implementation for non-searchable selects.
 * Simpler, accessible, and browser-native behavior.
 */
export declare function SelectNative({ options, value, onChange, placeholder, icon, disabled, className, allowEmpty, emptyLabel, }: SelectNativeProps): import("react/jsx-runtime").JSX.Element;
