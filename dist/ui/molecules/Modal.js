"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Icon from "../atoms/Icon";
import { Button } from "../atoms/Button";
import { ICON_SIZES } from "../iconSizes";
export function Modal({ isOpen, title, children, onClose, footer, fullWidth = false, }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    useEffect(() => {
        if (!isOpen) {
            return;
        }
        function handleKeyDown(event) {
            if (event.key === "Escape") {
                onClose();
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);
    if (!mounted || !isOpen) {
        return null;
    }
    function handleBackdropClick(event) {
        event.stopPropagation();
        onClose();
    }
    function handleContentClick(event) {
        event.stopPropagation();
    }
    return createPortal(_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4", onClick: handleBackdropClick, children: _jsxs("div", { className: `w-full rounded-2xl border border-gray-800 bg-[#161616] p-4 shadow-2xl sm:p-6 max-h-[90vh] overflow-y-auto ${fullWidth ? 'max-w-7xl' : 'max-w-lg'}`, onClick: handleContentClick, role: "dialog", "aria-modal": "true", children: [_jsxs("div", { className: "mb-4 flex items-center justify-between gap-4", children: [title && (_jsx("h2", { className: "text-base font-semibold text-theme-light sm:text-lg flex items-center", children: title })), _jsx(Button, { type: "button", onClick: onClose, variant: "ghost", size: "sm", className: "h-9 w-9 !p-0 rounded-full text-gray-400 hover:bg-theme-gray-subtle hover:text-theme-light active:scale-95 transition-transform", "aria-label": "Close", children: _jsx(Icon, { name: "lucide:x", size: ICON_SIZES.md }) })] }), _jsx("div", { className: "space-y-4", children: children }), footer && _jsx("div", { className: "mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", children: footer })] }) }), document.body);
}
