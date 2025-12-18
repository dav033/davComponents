import type { CrudMode } from "./useCrudState";
export interface UseCrudModalOptions<TEntity, TFormValue> {
    mode: CrudMode;
    currentItem: TEntity | null;
    initialFormValue: TFormValue;
    toFormValue: (entity: TEntity) => TFormValue;
    isPending: boolean;
    setMode: (mode: CrudMode) => void;
    setCurrentItem: (item: TEntity | null) => void;
    setFormValue: (value: TFormValue) => void;
    setServerError: (error: string | null) => void;
    resetState: () => void;
}
export interface UseCrudModalReturn<TEntity> {
    openCreate: () => void;
    openEdit: (item: TEntity) => void;
    closeModal: () => void;
    isModalOpen: boolean;
}
/**
 * Hook for managing CRUD modal state and transitions.
 * Handles opening/closing modals and switching between create/edit modes.
 *
 * Coordinates with useCrudState to manage the overall modal flow.
 */
export declare function useCrudModal<TEntity extends {
    id: number;
}, TFormValue>({ mode, currentItem, initialFormValue, toFormValue, isPending, setMode, setCurrentItem, setFormValue, setServerError, resetState, }: UseCrudModalOptions<TEntity, TFormValue>): UseCrudModalReturn<TEntity>;
