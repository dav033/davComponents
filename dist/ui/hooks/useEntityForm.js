"use client";
import { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export function useEntityForm({ initialFormValue, toPatch, updateFn, invalidateKeys, successMessage = "Entity updated successfully!", errorMessage = "Could not update entity", onSuccess, notifications, }) {
    const queryClient = useQueryClient();
    const [isOpen, setIsOpen] = useState(false);
    const [currentEntity, setCurrentEntity] = useState(null);
    const [formValue, setFormValue] = useState(initialFormValue);
    const [serverError, setServerError] = useState(null);
    const updateMutation = useMutation({
        mutationFn: (input) => updateFn(input.id, input.patch),
        onSuccess: () => {
            var _a;
            setIsOpen(false);
            setCurrentEntity(null);
            setServerError(null);
            setFormValue(initialFormValue);
            invalidateKeys.forEach((key) => {
                queryClient.invalidateQueries({ queryKey: key });
            });
            (_a = notifications === null || notifications === void 0 ? void 0 : notifications.showSuccess) === null || _a === void 0 ? void 0 : _a.call(notifications, successMessage);
            onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
        },
        onError: (error) => {
            var _a;
            const message = error instanceof Error ? error.message : errorMessage;
            setServerError(message);
            (_a = notifications === null || notifications === void 0 ? void 0 : notifications.showError) === null || _a === void 0 ? void 0 : _a.call(notifications, message);
        },
    });
    const openEdit = useCallback((entity, formMapper) => {
        setCurrentEntity(entity);
        setFormValue(formMapper(entity));
        setServerError(null);
        setIsOpen(true);
    }, []);
    const closeModal = useCallback(() => {
        if (updateMutation.isPending) {
            return;
        }
        setIsOpen(false);
        setCurrentEntity(null);
        setServerError(null);
        setFormValue(initialFormValue);
    }, [updateMutation.isPending, initialFormValue]);
    const handleSubmit = useCallback(() => {
        if (!currentEntity) {
            return;
        }
        const patch = toPatch(currentEntity, formValue);
        if (Object.keys(patch).length === 0) {
            setServerError("No changes detected");
            return;
        }
        updateMutation.mutate({ id: currentEntity.id, patch });
    }, [currentEntity, formValue, toPatch, updateMutation]);
    return {
        isOpen,
        openEdit,
        closeModal,
        formValue,
        setFormValue,
        currentEntity,
        serverError,
        setServerError,
        handleSubmit,
        isSubmitting: updateMutation.isPending,
    };
}
