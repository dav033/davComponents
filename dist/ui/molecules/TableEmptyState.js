"use client";
import { jsx as _jsx } from "react/jsx-runtime";
export function TableEmptyState({ message = "No data found.", isLoading = false }) {
    return (_jsx("div", { className: "rounded-2xl border border-theme-border/60 bg-theme-dark/40 p-4 text-sm text-theme-muted", children: isLoading ? "Loading..." : message }));
}
