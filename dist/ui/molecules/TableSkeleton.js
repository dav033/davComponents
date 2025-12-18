"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton } from "../atoms/Skeleton";
export function TableSkeleton({ columns, rowCount = 13 }) {
    return (_jsx("section", { className: "flex-1 rounded-2xl bg-[#1d1d1f] shadow-sm overflow-hidden", children: _jsxs("table", { className: "w-full table-fixed text-sm", children: [_jsx("colgroup", { children: columns.map((col, index) => (_jsx("col", { className: col.width }, index))) }), _jsx("thead", { className: "bg-[#181818]", children: _jsx("tr", { className: "text-left text-xs uppercase tracking-wide text-gray-400", children: columns.map((col, index) => (_jsx("th", { className: `px-4 py-3 ${col.align === "right" ? "text-right" :
                                col.align === "center" ? "text-center" :
                                    "text-left"}`, children: col.header }, index))) }) }), _jsx("tbody", { children: Array.from({ length: rowCount }).map((_, rowIndex) => (_jsx("tr", { className: "", children: columns.map((col, colIndex) => (_jsx("td", { className: "px-4 py-3", children: col.align === "right" || col.align === "center" ? (_jsx("div", { className: `flex ${col.align === "right" ? "justify-end" :
                                    "justify-center"}`, children: _jsx(Skeleton, { className: `${col.isBadge ? "h-5" : "h-4"} bg-[#2a2a2d] ${col.skeletonWidth || "w-12"}${col.isBadge ? " rounded-full" : ""}` }) })) : (_jsx(Skeleton, { className: `${col.isBadge ? "h-5" : "h-4"} bg-[#2a2a2d] ${col.skeletonWidth || "w-3/4"}${col.isBadge ? " rounded-full" : ""}` })) }, colIndex))) }, rowIndex))) })] }) }));
}
