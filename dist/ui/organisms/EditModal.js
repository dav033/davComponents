import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal } from "../molecules/Modal";
import { Button } from "../atoms/Button";
export function EditModal({ isOpen, title, onClose, onSubmit, isPending, serverError, children, }) {
    return (_jsxs(Modal, { isOpen: isOpen, title: title, onClose: onClose, footer: _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "secondary", onClick: onClose, disabled: isPending, children: "Cancel" }), _jsx(Button, { variant: "primary", onClick: onSubmit, disabled: isPending, children: isPending ? "Saving..." : "Save Changes" })] }), children: [serverError && (_jsx("div", { className: "mb-4 rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400", children: serverError })), children] }));
}
