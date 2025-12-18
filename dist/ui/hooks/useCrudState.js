"use client";
import { useState, useCallback } from "react";
/**
 * Hook for managing CRUD page state.
 * Handles mode, current item, form values, and error state.
 *
 * Separated from logic to improve testability and reusability.
 */
export function useCrudState({ initialFormValue, }) {
    const [mode, setMode] = useState("list");
    const [currentItem, setCurrentItem] = useState(null);
    const [formValue, setFormValue] = useState(initialFormValue);
    const [serverError, setServerError] = useState(null);
    const resetState = useCallback(() => {
        setMode("list");
        setCurrentItem(null);
        setFormValue(initialFormValue);
        setServerError(null);
    }, [initialFormValue]);
    return {
        mode,
        currentItem,
        formValue,
        serverError,
        setMode,
        setCurrentItem,
        setFormValue,
        setServerError,
        resetState,
    };
}
