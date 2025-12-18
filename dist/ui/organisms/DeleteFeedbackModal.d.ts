import type { ReactNode } from "react";
export interface DeleteFeedbackModalProps {
    isOpen: boolean;
    title?: ReactNode;
    description?: ReactNode;
    error?: string | null;
    loading?: boolean;
    onClose: () => void;
    onConfirm: () => void;
    confirmLabel?: string;
    cancelLabel?: string;
}
export declare function DeleteFeedbackModal({ isOpen, title, description, error, loading, onClose, onConfirm, confirmLabel, cancelLabel, }: DeleteFeedbackModalProps): import("react/jsx-runtime").JSX.Element;
