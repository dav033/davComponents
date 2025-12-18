export interface UseNotesEditorOptions {
    notes: string[];
    onNotesChange: (notes: string[]) => void;
    resetOnClose?: boolean;
}
export interface UseNotesEditorReturn {
    newNote: string;
    setNewNote: (value: string) => void;
    editIndex: number | null;
    editValue: string;
    setEditValue: (value: string) => void;
    handleAddNote: () => void;
    handleStartEditNote: (index: number) => void;
    handleSaveEditNote: () => void;
    handleCancelEdit: () => void;
    handleDeleteNoteAtIndex: (index: number) => void;
    reset: () => void;
}
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
export declare function useNotesEditor({ notes, onNotesChange, resetOnClose, }: UseNotesEditorOptions): UseNotesEditorReturn;
