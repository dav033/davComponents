import type { SelectOption } from "./Select";
export interface SearchableSelectProps {
    options: ReadonlyArray<SelectOption>;
    value: string | number | undefined | null;
    onChange: (value: string) => void;
    placeholder?: string;
    icon?: string;
    disabled?: boolean;
    className?: string;
}
/**
 * Custom searchable select with color indicators and filtering.
 * Uses DropdownPortal for positioning and click-outside detection.
 */
export declare function SearchableSelect({ options, value, onChange, placeholder, icon, disabled, className, }: SearchableSelectProps): import("react/jsx-runtime").JSX.Element;
