"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function SimplePageHeader({ title, description, }) {
    return (_jsxs("header", { className: "flex flex-col gap-1", children: [_jsx("h1", { className: "text-xl font-semibold text-theme-light sm:text-2xl", children: title }), _jsx("p", { className: "text-xs text-gray-400 sm:text-sm", children: description })] }));
}
