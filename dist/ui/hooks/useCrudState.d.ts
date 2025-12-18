export type CrudMode = "list" | "create" | "edit";
export interface UseCrudStateOptions<TEntity, TFormValue> {
    initialFormValue: TFormValue;
}
export interface UseCrudStateReturn<TEntity, TFormValue> {
    mode: CrudMode;
    currentItem: TEntity | null;
    formValue: TFormValue;
    serverError: string | null;
    setMode: (mode: CrudMode) => void;
    setCurrentItem: (item: TEntity | null) => void;
    setFormValue: (value: TFormValue) => void;
    setServerError: (error: string | null) => void;
    resetState: () => void;
}
/**
 * Hook for managing CRUD page state.
 * Handles mode, current item, form values, and error state.
 *
 * Separated from logic to improve testability and reusability.
 */
export declare function useCrudState<TEntity extends {
    id: number;
}, TFormValue>({ initialFormValue, }: UseCrudStateOptions<TEntity, TFormValue>): UseCrudStateReturn<TEntity, TFormValue>;
