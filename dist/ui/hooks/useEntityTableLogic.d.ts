export interface ContextMenuItem {
    label: string;
    onClick: () => void;
    variant?: "default" | "danger";
    icon?: string;
    disabled?: boolean;
}
export interface UseEntityTableLogicOptions<T, TId = number> {
    items: T[] | undefined;
    onDelete?: (id: TId) => Promise<void>;
    onEdit?: (item: T) => void;
    getId?: (item: T) => TId;
    buildExtraMenuItems?: (item: T) => ContextMenuItem[];
}
export declare function useEntityTableLogic<T, TId = number>({ items, onDelete, onEdit, getId, buildExtraMenuItems, }: UseEntityTableLogicOptions<T, TId>): {
    rows: T[];
    deleteModalProps: {
        isOpen: boolean;
        onClose: () => void;
        onConfirm: () => Promise<void>;
        itemToDelete: T | null;
        isDeleting: boolean;
        error: string | null;
    };
    getContextMenuItems: (row: T) => ContextMenuItem[];
};
