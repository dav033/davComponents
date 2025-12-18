"use client";
import { useCallback, useEffect, useState } from "react";
export function useEntityTableLogic({ items, onDelete, onEdit, getId = (item) => item.id, buildExtraMenuItems, }) {
    const [rows, setRows] = useState([]);
    const areItemsEqual = useCallback((a, b) => {
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++) {
            if (getId(a[i]) !== getId(b[i]))
                return false;
        }
        return true;
    }, [getId]);
    useEffect(() => {
        const newItems = items !== null && items !== void 0 ? items : [];
        setRows((prev) => (areItemsEqual(prev, newItems) ? prev : newItems));
    }, [items, areItemsEqual]);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState(null);
    const openDeleteModal = useCallback((item) => {
        setItemToDelete(item);
        setDeleteError(null);
        setIsDeleteModalOpen(true);
    }, []);
    const closeDeleteModal = useCallback(() => {
        setIsDeleteModalOpen(false);
        setItemToDelete(null);
        setDeleteError(null);
    }, []);
    const confirmDelete = useCallback(async () => {
        if (!itemToDelete || !onDelete)
            return;
        const id = getId(itemToDelete);
        try {
            setIsDeleting(true);
            setDeleteError(null);
            await onDelete(id);
            setRows((prev) => prev.filter((row) => getId(row) !== id));
            closeDeleteModal();
        }
        catch (error) {
            const msg = error instanceof Error ? error.message : "Failed to delete item";
            setDeleteError(msg);
        }
        finally {
            setIsDeleting(false);
        }
    }, [itemToDelete, onDelete, getId, closeDeleteModal]);
    const getContextMenuItems = useCallback((row) => {
        const items = [];
        if (onEdit) {
            items.push({
                label: "Edit",
                onClick: () => onEdit(row),
                icon: "lucide:edit",
            });
        }
        if (buildExtraMenuItems) {
            items.push(...buildExtraMenuItems(row));
        }
        if (onDelete) {
            items.push({
                label: "Delete",
                onClick: () => openDeleteModal(row),
                variant: "danger",
                icon: "lucide:trash",
            });
        }
        return items;
    }, [onEdit, onDelete, openDeleteModal, buildExtraMenuItems]);
    return {
        rows,
        deleteModalProps: {
            isOpen: isDeleteModalOpen,
            onClose: closeDeleteModal,
            onConfirm: confirmDelete,
            itemToDelete,
            isDeleting,
            error: deleteError,
        },
        getContextMenuItems,
    };
}
