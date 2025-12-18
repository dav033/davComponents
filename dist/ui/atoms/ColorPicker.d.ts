export type ColorPickerProps = {
    value: string;
    onChange: (color: string) => void;
    disabled?: boolean;
    label?: string;
};
export declare function ColorPicker({ value, onChange, disabled, label }: ColorPickerProps): import("react/jsx-runtime").JSX.Element;
