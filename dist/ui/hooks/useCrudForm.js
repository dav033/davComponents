"use client";
import { useCallback } from "react";
/**
 * Hook for managing CRUD form state and submissions.
 * Handles form value changes and submit logic for create/edit operations.
 *
 * Coordinates transformations and delegates to mutation hooks.
 */
export function useCrudForm({ formValue, currentItem, toDraft, toPatch, setFormValue, setServerError, handleCreate, handleUpdate, closeModal, }) {
    const handleFormChange = useCallback((value) => {
        setFormValue(value);
    }, [setFormValue]);
    const handleCreateSubmit = useCallback(() => {
        const draft = toDraft(formValue);
        handleCreate(draft);
    }, [formValue, toDraft, handleCreate]);
    const handleEditSubmit = useCallback(() => {
        if (!currentItem) {
            return;
        }
        const patch = toPatch(currentItem, formValue);
        // If no changes detected, just close the modal
        if (Object.keys(patch).length === 0) {
            closeModal();
            return;
        }
        handleUpdate(currentItem.id, patch);
    }, [currentItem, formValue, toPatch, handleUpdate, closeModal]);
    return {
        formValue,
        handleFormChange,
        handleCreateSubmit,
        handleEditSubmit,
        setServerError,
    };
}
