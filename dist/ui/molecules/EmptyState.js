"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "../atoms/Icon";
export function EmptyState({ iconName, title, subtitle, variant = "default", }) {
    return (_jsx("div", { className: "flex flex-1 items-center justify-center p-4", children: _jsxs("div", { className: "max-w-md rounded-xl border border-dashed border-theme-gray-subtle bg-theme-dark/80 px-4 py-8 text-center text-sm text-gray-400 sm:rounded-2xl sm:px-6 sm:py-10", children: [_jsx(Icon, { name: iconName, size: 48, className: "mx-auto mb-4 text-gray-500" }), _jsx("p", { className: "text-base font-medium text-gray-300", children: title }), _jsx("p", { className: "mt-2 text-xs sm:text-sm", children: subtitle })] }) }));
}
