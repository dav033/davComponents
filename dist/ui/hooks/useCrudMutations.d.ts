import { useMutation } from "@tanstack/react-query";
export interface UseCrudMutationsOptions<TEntity, TDraft, TPatch> {
    queryKey: unknown[] | unknown[][];
    createFn: (draft: TDraft) => Promise<TEntity>;
    updateFn: (id: number, patch: TPatch) => Promise<TEntity>;
    successMessages?: {
        create?: string;
        update?: string;
    };
    onCreateSuccess?: (entity: TEntity) => void | Promise<void>;
    onUpdateSuccess?: (entity: TEntity) => void | Promise<void>;
    onSuccessNotification?: (message: string) => void;
    onErrorNotification?: (message: string) => void;
}
export interface UseCrudMutationsReturn<TEntity, TDraft, TPatch> {
    createMutation: ReturnType<typeof useMutation<TEntity, Error, TDraft>>;
    handleCreate: (draft: TDraft) => void;
    isCreating: boolean;
    updateMutation: ReturnType<typeof useMutation<TEntity, Error, {
        id: number;
        patch: TPatch;
    }>>;
    handleUpdate: (id: number, patch: TPatch) => void;
    isUpdating: boolean;
    isPending: boolean;
    invalidateQueries: () => void;
}
/**
 * Hook for managing CRUD mutations (create, update, delete).
 * Handles React Query mutations, query invalidation, and success/error notifications.
 *
 * Separated from state management for better testing and composition.
 *
 * Notifications are optional - projects can provide their own toast/notification system.
 */
export declare function useCrudMutations<TEntity extends {
    id: number;
}, TDraft, TPatch>({ queryKey, createFn, updateFn, successMessages, onCreateSuccess, onUpdateSuccess, onSuccessNotification, onErrorNotification, }: UseCrudMutationsOptions<TEntity, TDraft, TPatch>): UseCrudMutationsReturn<TEntity, TDraft, TPatch>;
