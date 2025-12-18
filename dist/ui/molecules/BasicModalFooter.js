"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../atoms/Button";
export function BasicModalFooter({ onCancel, onSubmit, isLoading = false, canSubmit = true, mode = "create", cancelLabel = "Cancel", }) {
    const submitLabel = mode === "create" ? "Create" : "Save changes";
    return (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "secondary", onClick: onCancel, disabled: isLoading, children: cancelLabel }), _jsx(Button, { variant: "primary", onClick: onSubmit, disabled: !canSubmit || isLoading, loading: isLoading, children: submitLabel })] }));
}
