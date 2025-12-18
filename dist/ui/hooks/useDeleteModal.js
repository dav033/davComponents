"use client";
import { useState, useCallback } from "react";
export function useDeleteModal() {
    const [deleteModalState, setDeleteModalState] = useState({
        isOpen: false,
        item: null,
        isLoading: false,
        error: null,
    });
    const openDeleteModal = useCallback((item) => {
        setDeleteModalState({
            isOpen: true,
            item,
            isLoading: false,
            error: null,
        });
    }, []);
    const closeDeleteModal = useCallback(() => {
        setDeleteModalState({
            isOpen: false,
            item: null,
            isLoading: false,
            error: null,
        });
    }, []);
    const setDeleteError = useCallback((error) => {
        setDeleteModalState((prev) => (Object.assign(Object.assign({}, prev), { error })));
    }, []);
    const confirmDelete = useCallback(async (onDeleteFn) => {
        if (!deleteModalState.item)
            return;
        setDeleteModalState((prev) => (Object.assign(Object.assign({}, prev), { isLoading: true, error: null })));
        try {
            await onDeleteFn(deleteModalState.item);
            closeDeleteModal();
        }
        catch (error) {
            const message = error instanceof Error ? error.message : "Failed to delete item";
            setDeleteModalState((prev) => (Object.assign(Object.assign({}, prev), { error: message })));
            throw error;
        }
        finally {
            setDeleteModalState((prev) => (Object.assign(Object.assign({}, prev), { isLoading: false })));
        }
    }, [deleteModalState.item, closeDeleteModal]);
    return {
        deleteModalState,
        openDeleteModal,
        closeDeleteModal,
        confirmDelete,
        setDeleteError,
    };
}
