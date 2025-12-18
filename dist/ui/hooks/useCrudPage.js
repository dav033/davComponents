"use client";
import { useCallback } from "react";
import { useCrudState } from "./useCrudState";
import { useCrudMutations } from "./useCrudMutations";
import { useCrudModal } from "./useCrudModal";
import { useCrudForm } from "./useCrudForm";
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
export function useCrudPage(options) {
    const { queryKey, createFn, updateFn, toDraft, toPatch, initialFormValue, toFormValue, successMessages, onSuccess, onSuccessNotification, onErrorNotification, } = options;
    // 1. State management
    const state = useCrudState({
        initialFormValue,
    });
    // 2. Mutations (create/update)
    const mutations = useCrudMutations({
        queryKey,
        createFn,
        updateFn,
        successMessages,
        onCreateSuccess: async () => {
            state.resetState();
            await (onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess());
        },
        onUpdateSuccess: async () => {
            state.resetState();
            await (onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess());
        },
        onSuccessNotification,
        onErrorNotification,
    });
    // 3. Modal control
    const modal = useCrudModal({
        mode: state.mode,
        currentItem: state.currentItem,
        initialFormValue,
        toFormValue,
        isPending: mutations.isPending,
        setMode: state.setMode,
        setCurrentItem: state.setCurrentItem,
        setFormValue: state.setFormValue,
        setServerError: state.setServerError,
        resetState: state.resetState,
    });
    // 4. Form handling
    const form = useCrudForm({
        formValue: state.formValue,
        currentItem: state.currentItem,
        toDraft,
        toPatch,
        setFormValue: state.setFormValue,
        setServerError: state.setServerError,
        handleCreate: mutations.handleCreate,
        handleUpdate: mutations.handleUpdate,
        closeModal: modal.closeModal,
    });
    // Backward compatible handleDelete
    const handleDelete = useCallback((id) => {
        mutations.invalidateQueries();
    }, [mutations]);
    // Compose and return the complete API
    return {
        // State
        mode: state.mode,
        currentItem: state.currentItem,
        formValue: form.formValue,
        serverError: state.serverError,
        // Mutations status
        isCreating: mutations.isCreating,
        isUpdating: mutations.isUpdating,
        isPending: mutations.isPending,
        // Modal actions
        openCreate: modal.openCreate,
        openEdit: modal.openEdit,
        closeModal: modal.closeModal,
        // Form actions
        setFormValue: state.setFormValue,
        handleFormChange: form.handleFormChange,
        setServerError: form.setServerError,
        handleCreateSubmit: form.handleCreateSubmit,
        handleEditSubmit: form.handleEditSubmit,
        // Delete (legacy support)
        handleDelete,
    };
}
