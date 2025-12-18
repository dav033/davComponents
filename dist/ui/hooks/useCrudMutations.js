"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
/**
 * Hook for managing CRUD mutations (create, update, delete).
 * Handles React Query mutations, query invalidation, and success/error notifications.
 *
 * Separated from state management for better testing and composition.
 *
 * Notifications are optional - projects can provide their own toast/notification system.
 */
export function useCrudMutations({ queryKey, createFn, updateFn, successMessages, onCreateSuccess, onUpdateSuccess, onSuccessNotification, onErrorNotification, }) {
    const queryClient = useQueryClient();
    const invalidateQueries = () => {
        if (Array.isArray(queryKey[0])) {
            queryKey.forEach((key) => {
                queryClient.invalidateQueries({ queryKey: key });
            });
        }
        else {
            queryClient.invalidateQueries({ queryKey: queryKey });
        }
    };
    const createMutation = useMutation({
        mutationFn: createFn,
        onSuccess: async (entity) => {
            var _a;
            invalidateQueries();
            const message = (_a = successMessages === null || successMessages === void 0 ? void 0 : successMessages.create) !== null && _a !== void 0 ? _a : "Created successfully!";
            onSuccessNotification === null || onSuccessNotification === void 0 ? void 0 : onSuccessNotification(message);
            await (onCreateSuccess === null || onCreateSuccess === void 0 ? void 0 : onCreateSuccess(entity));
        },
        onError: (error) => {
            const message = error.message || "Could not create";
            onErrorNotification === null || onErrorNotification === void 0 ? void 0 : onErrorNotification(message);
        },
    });
    const updateMutation = useMutation({
        mutationFn: ({ id, patch }) => updateFn(id, patch),
        onSuccess: async (entity) => {
            var _a;
            invalidateQueries();
            const message = (_a = successMessages === null || successMessages === void 0 ? void 0 : successMessages.update) !== null && _a !== void 0 ? _a : "Updated successfully!";
            onSuccessNotification === null || onSuccessNotification === void 0 ? void 0 : onSuccessNotification(message);
            await (onUpdateSuccess === null || onUpdateSuccess === void 0 ? void 0 : onUpdateSuccess(entity));
        },
        onError: (error) => {
            const message = error.message || "Could not update";
            onErrorNotification === null || onErrorNotification === void 0 ? void 0 : onErrorNotification(message);
        },
    });
    const handleCreate = (draft) => {
        createMutation.mutate(draft);
    };
    const handleUpdate = (id, patch) => {
        updateMutation.mutate({ id, patch });
    };
    return {
        createMutation,
        handleCreate,
        isCreating: createMutation.isPending,
        updateMutation,
        handleUpdate,
        isUpdating: updateMutation.isPending,
        isPending: createMutation.isPending || updateMutation.isPending,
        invalidateQueries,
    };
}
