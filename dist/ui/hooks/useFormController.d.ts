import { type QueryKey } from "@tanstack/react-query";
export interface UseFormControllerConfig<TForm, TResult> {
    initialForm: TForm;
    validate: (form: TForm) => boolean;
    onSubmit: (form: TForm) => Promise<TResult>;
    invalidateKeys?: QueryKey[];
    onSuccess?: (result: TResult) => void;
    transformBeforeSubmit?: (form: TForm) => TForm | null;
}
export interface UseFormControllerReturn<TForm, TResult> {
    form: TForm;
    setField: <K extends keyof TForm>(key: K, value: TForm[K]) => void;
    setFields: (fields: Partial<TForm>) => void;
    setForm: (form: TForm) => void;
    isLoading: boolean;
    error: string | null;
    setError: (error: string | null) => void;
    canSubmit: boolean;
    submit: () => Promise<boolean>;
    reset: () => void;
}
export declare function useFormController<TForm extends Record<string, any>, TResult>({ initialForm, validate, onSubmit, invalidateKeys, onSuccess, transformBeforeSubmit, }: UseFormControllerConfig<TForm, TResult>): UseFormControllerReturn<TForm, TResult>;
