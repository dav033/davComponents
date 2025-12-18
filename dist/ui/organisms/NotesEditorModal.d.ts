export type NotesEditorModalController = {
    isOpen: boolean;
    title?: string;
    notes: string[];
    loading?: boolean;
    onChangeNotes: (notes: string[]) => void;
    onClose: () => void;
    onSave: () => void;
};
export interface NotesEditorModalProps {
    controller: NotesEditorModalController;
    fullWidth?: boolean;
}
export declare function NotesEditorModal({ controller, fullWidth, }: NotesEditorModalProps): import("react/jsx-runtime").JSX.Element;
