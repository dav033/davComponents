import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Wrapper component that provides consistent label, error, and hint styling
 * for form controls. Reduces duplication across Input, Select, and other form components.
 */
export function Field({ label, error, hint, children, htmlFor }) {
    return (_jsxs("div", { className: "flex flex-col gap-1", children: [label && (_jsx("label", { htmlFor: htmlFor, className: "text-xs font-medium uppercase tracking-wide text-gray-300", children: label })), children, error && _jsx("p", { className: "text-xs text-red-500", children: error }), !error && hint && _jsx("p", { className: "text-xs text-gray-400", children: hint })] }));
}
