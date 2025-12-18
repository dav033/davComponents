"use client";
import { useState, useCallback, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
export function useFormController({ initialForm, validate, onSubmit, invalidateKeys = [], onSuccess, transformBeforeSubmit, }) {
    const queryClient = useQueryClient();
    const [form, setForm] = useState(initialForm);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const canSubmit = useMemo(() => {
        return validate(form);
    }, [form, validate]);
    const setField = useCallback((key, value) => {
        setError(null);
        setForm((prev) => (Object.assign(Object.assign({}, prev), { [key]: value })));
    }, []);
    const setFields = useCallback((fields) => {
        setError(null);
        setForm((prev) => (Object.assign(Object.assign({}, prev), fields)));
    }, []);
    const submit = useCallback(async () => {
        if (!canSubmit || isLoading)
            return false;
        setIsLoading(true);
        setError(null);
        try {
            const formToSubmit = transformBeforeSubmit ? transformBeforeSubmit(form) : form;
            if (formToSubmit === null) {
                setError("No changes detected");
                setIsLoading(false);
                return false;
            }
            const result = await onSubmit(formToSubmit);
            for (const key of invalidateKeys) {
                queryClient.invalidateQueries({ queryKey: key });
            }
            onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(result);
            return true;
        }
        catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            setError(msg);
            return false;
        }
        finally {
            setIsLoading(false);
        }
    }, [canSubmit, isLoading, form, transformBeforeSubmit, onSubmit, invalidateKeys, queryClient, onSuccess]);
    const reset = useCallback(() => {
        setForm(initialForm);
        setError(null);
        setIsLoading(false);
    }, [initialForm]);
    return {
        form,
        setField,
        setFields,
        setForm,
        isLoading,
        error,
        setError,
        canSubmit,
        submit,
        reset,
    };
}
