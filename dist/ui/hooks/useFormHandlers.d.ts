import type { ChangeEvent } from "react";
export declare function useFormHandlers<TFormValue extends Record<string, any>>(value: TFormValue, onChange: (value: TFormValue) => void): {
    handleTextChange: (event: ChangeEvent<HTMLInputElement>, key: keyof TFormValue) => void;
    handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>, key: keyof TFormValue) => void;
    handleSelectChange: (event: ChangeEvent<HTMLSelectElement>, key: keyof TFormValue) => void;
    handleNumberSelectChange: (newValue: string, key: keyof TFormValue) => void;
    handleValueChange: <K extends keyof TFormValue>(key: K, newValue: TFormValue[K]) => void;
};
