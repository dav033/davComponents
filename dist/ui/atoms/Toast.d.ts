type ToastType = "success" | "error" | "info" | "warning";
export interface ToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    onClose: () => void;
}
export declare function Toast({ message, type, duration, onClose }: ToastProps): import("react/jsx-runtime").JSX.Element;
export {};
