export type NotesModalState<T> = {
    isOpen: boolean;
    item: T | null;
    title: string;
    notes: string[];
    isLoading: boolean;
};
export type UseNotesModalResult<T> = {
    notesModalState: NotesModalState<T>;
    openNotesModal: (item: T, title: string, notes: string[]) => void;
    closeNotesModal: () => void;
    updateNotes: (notes: string[]) => void;
    saveNotes: (onSaveFn: (item: T, notes: string[]) => Promise<void>) => Promise<void>;
};
export declare function useNotesModal<T>(): UseNotesModalResult<T>;
