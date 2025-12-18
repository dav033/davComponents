import type { ReactNode } from "react";
export type ModalProps = {
    isOpen: boolean;
    title?: ReactNode;
    children: ReactNode;
    onClose: () => void;
    footer?: ReactNode;
    fullWidth?: boolean;
};
export declare function Modal({ isOpen, title, children, onClose, footer, fullWidth, }: ModalProps): import("react").ReactPortal | null;
