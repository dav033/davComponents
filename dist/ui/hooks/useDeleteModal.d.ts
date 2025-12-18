export type DeleteModalState<T> = {
    isOpen: boolean;
    item: T | null;
    isLoading: boolean;
    error: string | null;
};
export type UseDeleteModalResult<T> = {
    deleteModalState: DeleteModalState<T>;
    openDeleteModal: (item: T) => void;
    closeDeleteModal: () => void;
    confirmDelete: (onDeleteFn: (item: T) => Promise<void>) => Promise<void>;
    setDeleteError: (error: string | null) => void;
};
export declare function useDeleteModal<T>(): UseDeleteModalResult<T>;
