import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Modal } from "../molecules/Modal";
import { Button } from "../atoms/Button";
import Icon from "../atoms/Icon";
export function DeleteFeedbackModal({ isOpen, title = "Delete Item", description = "Are you sure you want to delete this item? This action cannot be undone.", error, loading = false, onClose, onConfirm, confirmLabel = "Delete", cancelLabel = "Cancel", }) {
    return (_jsx(Modal, { isOpen: isOpen, title: title, onClose: onClose, footer: _jsxs(_Fragment, { children: [_jsx(Button, { variant: "secondary", onClick: onClose, disabled: loading, children: cancelLabel }), _jsx(Button, { variant: "danger", onClick: onConfirm, disabled: loading, children: loading ? (_jsxs("span", { className: "flex items-center gap-2", children: [_jsx(Icon, { name: "lucide:loader-2", size: 16, className: "animate-spin" }), "Deleting..."] })) : (confirmLabel) })] }), children: _jsxs("div", { className: "space-y-4", children: [_jsx("p", { className: "text-sm text-gray-300", children: description }), error && (_jsxs("div", { className: "flex items-start gap-2 rounded-lg bg-red-500/10 border border-red-500/20 p-3", children: [_jsx(Icon, { name: "lucide:alert-circle", size: 16, className: "text-red-400 mt-0.5" }), _jsx("p", { className: "text-sm text-red-400", children: error })] }))] }) }));
}
