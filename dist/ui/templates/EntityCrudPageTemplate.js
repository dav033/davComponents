"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function EntityCrudPageTemplate({ header, toolbar, isLoading, loadingContent, isEmpty, emptyContent, tableContent, modals, className = "", }) {
    return (_jsxs("main", { className: `flex min-h-[calc(100vh-80px)] w-full flex-col gap-3 bg-theme-dark px-3 py-3 pt-16 sm:gap-4 sm:px-4 sm:py-4 md:px-8 md:py-6 lg:pt-6 ${className}`, children: [header, toolbar, _jsx("section", { className: "mt-2 flex flex-1 flex-col", children: isLoading ? loadingContent : (isEmpty && emptyContent) ? emptyContent : tableContent }), modals] }));
}
