"use client";
import { useState, useCallback } from "react";
export function useNotesModal() {
    const [notesModalState, setNotesModalState] = useState({
        isOpen: false,
        item: null,
        title: "",
        notes: [],
        isLoading: false,
    });
    const openNotesModal = useCallback((item, title, notes) => {
        setNotesModalState({
            isOpen: true,
            item,
            title,
            notes: Array.isArray(notes) ? notes : [],
            isLoading: false,
        });
    }, []);
    const closeNotesModal = useCallback(() => {
        setNotesModalState((prev) => {
            if (prev.isLoading)
                return prev;
            return {
                isOpen: false,
                item: null,
                title: "",
                notes: [],
                isLoading: false,
            };
        });
    }, []);
    const updateNotes = useCallback((notes) => {
        setNotesModalState((prev) => (Object.assign(Object.assign({}, prev), { notes })));
    }, []);
    const saveNotes = useCallback(async (onSaveFn) => {
        if (!notesModalState.item) {
            closeNotesModal();
            return;
        }
        setNotesModalState((prev) => (Object.assign(Object.assign({}, prev), { isLoading: true })));
        try {
            await onSaveFn(notesModalState.item, notesModalState.notes);
            closeNotesModal();
        }
        catch (error) {
            console.error("Error saving notes:", error);
            throw error;
        }
        finally {
            setNotesModalState((prev) => (Object.assign(Object.assign({}, prev), { isLoading: false })));
        }
    }, [notesModalState.item, notesModalState.notes, closeNotesModal]);
    return {
        notesModalState,
        openNotesModal,
        closeNotesModal,
        updateNotes,
        saveNotes,
    };
}
