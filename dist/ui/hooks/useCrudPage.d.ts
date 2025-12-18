import { useCrudState } from "./useCrudState";
export type { CrudMode } from "./useCrudState";
export type UseCrudPageOptions<TEntity, TFormValue, TDraft, TPatch> = {
    queryKey: unknown[] | unknown[][];
    createFn: (draft: TDraft) => Promise<TEntity>;
    updateFn: (id: number, patch: TPatch) => Promise<TEntity>;
    toDraft: (formValue: TFormValue) => TDraft;
    toPatch: (current: TEntity, formValue: TFormValue) => TPatch;
    initialFormValue: TFormValue;
    toFormValue: (entity: TEntity) => TFormValue;
    successMessages?: {
        create?: string;
        update?: string;
    };
    onSuccess?: () => void | Promise<void>;
    onSuccessNotification?: (message: string) => void;
    onErrorNotification?: (message: string) => void;
};
export type UseCrudPageResult<TEntity, TFormValue> = {
    mode: ReturnType<typeof useCrudState>["mode"];
    currentItem: TEntity | null;
    formValue: TFormValue;
    serverError: string | null;
    isCreating: boolean;
    isUpdating: boolean;
    isPending: boolean;
    openCreate: () => void;
    openEdit: (item: TEntity) => void;
    closeModal: () => void;
    setFormValue: (value: TFormValue) => void;
    handleFormChange: (value: TFormValue) => void;
    setServerError: (error: string | null) => void;
    handleCreateSubmit: () => void;
    handleEditSubmit: () => void;
    handleDelete: (id: number) => void;
};
/**
 * Composite hook that orchestrates CRUD page functionality.
 *
 * This hook has been refactored into smaller, composable hooks:
 * - useCrudState: Manages state (mode, currentItem, formValue, errors)
 * - useCrudMutations: Handles create/update/delete operations
 * - useCrudModal: Controls modal open/close/mode switching
 * - useCrudForm: Manages form submissions and transformations
 *
 * Benefits of this architecture:
 * - Each hook has a single responsibility
 * - Easier to test in isolation
 * - Reusable components for custom CRUD implementations
 * - Better type safety and intellisense
 *
 * @example
 * const crud = useCrudPage({
 *   queryKey: ["contacts"],
 *   createFn: (draft) => api.create(draft),
 *   updateFn: (id, patch) => api.update(id, patch),
 *   toDraft: (form) => ({ ...form }),
 *   toPatch: (current, form) => createPatch(current, form),
 *   initialFormValue: { name: "" },
 *   toFormValue: (entity) => ({ name: entity.name }),
 *   onSuccessNotification: (msg) => toast.showSuccess(msg),
 *   onErrorNotification: (msg) => toast.showError(msg),
 * });
 */
export declare function useCrudPage<TEntity extends {
    id: number;
}, TFormValue, TDraft, TPatch>(options: UseCrudPageOptions<TEntity, TFormValue, TDraft, TPatch>): UseCrudPageResult<TEntity, TFormValue>;
