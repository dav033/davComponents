import { type ReactNode } from "react";
type ToastType = "success" | "error" | "info" | "warning";
interface ToastContextValue {
    showToast: (message: string, type?: ToastType) => void;
    showSuccess: (message: string) => void;
    showError: (message: string) => void;
    showInfo: (message: string) => void;
    showWarning: (message: string) => void;
}
export declare function ToastProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useToast(): ToastContextValue;
export {};
