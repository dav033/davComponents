export interface UseCrudFormOptions<TEntity, TFormValue, TDraft, TPatch> {
    formValue: TFormValue;
    currentItem: TEntity | null;
    toDraft: (formValue: TFormValue) => TDraft;
    toPatch: (current: TEntity, formValue: TFormValue) => TPatch;
    setFormValue: (value: TFormValue) => void;
    setServerError: (error: string | null) => void;
    handleCreate: (draft: TDraft) => void;
    handleUpdate: (id: number, patch: TPatch) => void;
    closeModal: () => void;
}
export interface UseCrudFormReturn<TFormValue> {
    formValue: TFormValue;
    handleFormChange: (value: TFormValue) => void;
    handleCreateSubmit: () => void;
    handleEditSubmit: () => void;
    setServerError: (error: string | null) => void;
}
/**
 * Hook for managing CRUD form state and submissions.
 * Handles form value changes and submit logic for create/edit operations.
 *
 * Coordinates transformations and delegates to mutation hooks.
 */
export declare function useCrudForm<TEntity extends {
    id: number;
}, TFormValue, TDraft, TPatch>({ formValue, currentItem, toDraft, toPatch, setFormValue, setServerError, handleCreate, handleUpdate, closeModal, }: UseCrudFormOptions<TEntity, TFormValue, TDraft, TPatch>): UseCrudFormReturn<TFormValue>;
