"use client";
import { useState, useCallback, useEffect } from "react";
/**
 * Custom hook for managing notes editor state and logic.
 * Extracts reusable logic for adding, editing, and deleting notes.
 *
 * @example
 * const notesEditor = useNotesEditor({
 *   notes: myNotes,
 *   onNotesChange: setMyNotes,
 * });
 */
export function useNotesEditor({ notes, onNotesChange, resetOnClose = true, }) {
    const [newNote, setNewNote] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");
    const reset = useCallback(() => {
        setNewNote("");
        setEditIndex(null);
        setEditValue("");
    }, []);
    useEffect(() => {
        if (resetOnClose) {
            // Optional: auto-reset when needed
        }
    }, [resetOnClose]);
    const handleAddNote = useCallback(() => {
        const value = newNote.trim();
        if (!value)
            return;
        const updated = [...notes, value];
        onNotesChange(updated);
        setNewNote("");
    }, [newNote, notes, onNotesChange]);
    const handleStartEditNote = useCallback((index) => {
        var _a;
        if (index < 0 || index >= notes.length)
            return;
        setEditIndex(index);
        setEditValue((_a = notes[index]) !== null && _a !== void 0 ? _a : "");
    }, [notes]);
    const handleSaveEditNote = useCallback(() => {
        if (editIndex === null)
            return;
        const value = editValue.trim();
        if (!value)
            return;
        const updated = [...notes];
        updated[editIndex] = value;
        onNotesChange(updated);
        setEditIndex(null);
        setEditValue("");
    }, [editIndex, editValue, notes, onNotesChange]);
    const handleCancelEdit = useCallback(() => {
        setEditIndex(null);
        setEditValue("");
    }, []);
    const handleDeleteNoteAtIndex = useCallback((index) => {
        if (index < 0 || index >= notes.length)
            return;
        const updated = notes.filter((_, i) => i !== index);
        onNotesChange(updated);
    }, [notes, onNotesChange]);
    return {
        newNote,
        setNewNote,
        editIndex,
        editValue,
        setEditValue,
        handleAddNote,
        handleStartEditNote,
        handleSaveEditNote,
        handleCancelEdit,
        handleDeleteNoteAtIndex,
        reset,
    };
}
