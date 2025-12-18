"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useState } from "react";
import { Toast } from "../atoms/Toast";
const ToastContext = createContext(undefined);
export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    const showToast = useCallback((message, type = "info") => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);
    }, []);
    const showSuccess = useCallback((message) => showToast(message, "success"), [showToast]);
    const showError = useCallback((message) => showToast(message, "error"), [showToast]);
    const showInfo = useCallback((message) => showToast(message, "info"), [showToast]);
    const showWarning = useCallback((message) => showToast(message, "warning"), [showToast]);
    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);
    return (_jsxs(ToastContext.Provider, { value: { showToast, showSuccess, showError, showInfo, showWarning }, children: [children, _jsx("div", { className: "fixed top-4 right-4 z-9999 flex flex-col gap-2 max-w-md w-full pointer-events-none", children: _jsx("div", { className: "pointer-events-auto", children: toasts.map((toast) => (_jsx("div", { className: "mb-2", children: _jsx(Toast, { message: toast.message, type: toast.type, onClose: () => removeToast(toast.id) }) }, toast.id))) }) })] }));
}
export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within ToastProvider");
    }
    return context;
}
