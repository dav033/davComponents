import type { ReactNode } from "react";
export type EditModalProps<T> = {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    onSubmit: () => void;
    isPending: boolean;
    serverError: string | null;
    children: ReactNode;
};
export declare function EditModal<T>({ isOpen, title, onClose, onSubmit, isPending, serverError, children, }: EditModalProps<T>): import("react/jsx-runtime").JSX.Element;
