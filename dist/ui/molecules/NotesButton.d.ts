import React from 'react';
export interface NotesButtonProps {
    hasNotes: boolean;
    notesCount?: number;
    onClick: () => void;
    title?: string;
}
export declare const NotesButton: React.FC<NotesButtonProps>;
