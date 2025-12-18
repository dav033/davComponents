"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Icon from "../atoms/Icon";
const DEFAULT_PAGE_SIZE = 10;
const PAGE_SIZE_OPTIONS = [10, 25, 50];
export function SimpleTable({ columns, data, rowKey, onRowContextMenu, }) {
    const [sortState, setSortState] = React.useState(null);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(DEFAULT_PAGE_SIZE);
    const sortedData = React.useMemo(() => {
        if (!sortState) {
            return data;
        }
        const column = columns.find((col) => String(col.key) === sortState.key);
        if (!column || !column.sortable) {
            return data;
        }
        const getSortValue = (item) => {
            const value = column.sortValue
                ? column.sortValue(item)
                : item[column.key];
            if (value == null) {
                return "";
            }
            return value;
        };
        const normalize = (value) => typeof value === "number" ? value : String(value).toLowerCase();
        const comparator = (a, b) => {
            const aValue = normalize(getSortValue(a));
            const bValue = normalize(getSortValue(b));
            if (aValue < bValue) {
                return -1;
            }
            if (aValue > bValue) {
                return 1;
            }
            return 0;
        };
        const sorted = [...data].sort((a, b) => comparator(a, b));
        return sortState.direction === "asc" ? sorted : sorted.reverse();
    }, [columns, data, sortState]);
    const totalPages = Math.max(1, Math.ceil(sortedData.length / pageSize));
    React.useEffect(() => {
        setCurrentPage((prev) => Math.min(prev, totalPages));
    }, [sortedData.length, totalPages]);
    const paginatedData = React.useMemo(() => {
        if (sortedData.length <= pageSize) {
            return sortedData;
        }
        const start = (currentPage - 1) * pageSize;
        return sortedData.slice(start, start + pageSize);
    }, [sortedData, currentPage, pageSize]);
    const handleSort = (column) => {
        if (!column.sortable) {
            return;
        }
        const key = String(column.key);
        setSortState((current) => {
            if (!current || current.key !== key) {
                return { key, direction: "asc" };
            }
            return {
                key,
                direction: current.direction === "asc" ? "desc" : "asc",
            };
        });
    };
    return (_jsxs("section", { className: "rounded-2xl bg-[#1d1d1f] shadow-sm overflow-x-auto", children: [_jsxs("table", { className: "w-full table-fixed text-sm", children: [_jsx("thead", { className: "bg-[#181818]", children: _jsx("tr", { className: "text-left text-xs uppercase tracking-wide text-gray-400 h-12", children: columns.map((column) => {
                                var _a;
                                return (_jsx("th", { className: `px-4 py-3 h-full align-middle ${(_a = column.className) !== null && _a !== void 0 ? _a : ""} ${column.sortable ? "cursor-pointer select-none hover:bg-[#9ff3e7]/10 transition-colors group" : ""}`, onClick: column.sortable ? () => handleSort(column) : undefined, "aria-sort": (sortState === null || sortState === void 0 ? void 0 : sortState.key) === String(column.key)
                                        ? sortState.direction === "asc"
                                            ? "ascending"
                                            : "descending"
                                        : "none", children: _jsxs("div", { className: "flex h-full items-center gap-1.5", children: [_jsx("span", { children: column.header }), column.sortable && (sortState === null || sortState === void 0 ? void 0 : sortState.key) === String(column.key) && (_jsx("span", { className: "text-xs text-gray-300", children: sortState.direction === "asc" ? "▲" : "▼" }))] }) }, String(column.key)));
                            }) }) }), _jsx("tbody", { className: "divide-y divide-[#2a2a2a]", children: paginatedData.map((item) => (_jsx("tr", { onContextMenu: onRowContextMenu
                                ? (event) => onRowContextMenu(event, item)
                                : undefined, className: "cursor-default hover:bg-[#9ff3e7]/8 transition-colors", children: columns.map((column) => {
                                var _a;
                                return (_jsx("td", { className: `px-4 py-3 ${(_a = column.className) !== null && _a !== void 0 ? _a : ""}`, children: column.render
                                        ? column.render(item)
                                        : item[column.key] }, String(column.key)));
                            }) }, rowKey(item)))) })] }), sortedData.length > DEFAULT_PAGE_SIZE && (_jsxs("div", { className: "flex flex-col gap-3 border-t border-[#2a2a2a] px-4 py-3 text-sm text-gray-300 md:flex-row md:items-center md:justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-xs text-gray-400", children: "Rows per page" }), _jsx("select", { value: pageSize, onChange: (e) => {
                                    const next = Number(e.target.value);
                                    setPageSize(next);
                                    setCurrentPage(1);
                                }, className: "rounded-md border border-[#343438] bg-[#2a2a2d] px-2 py-1 text-xs text-theme-light hover:bg-[#343438] focus:outline-none", children: PAGE_SIZE_OPTIONS.map((size) => (_jsx("option", { value: size, children: size }, size))) })] }), _jsxs("div", { className: "flex items-center justify-between gap-3 md:justify-end", children: [_jsxs("span", { className: "text-xs text-gray-400", children: ["Showing ", paginatedData.length, " of ", sortedData.length, " records"] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { type: "button", onClick: () => setCurrentPage((p) => Math.max(1, p - 1)), disabled: currentPage === 1, className: "inline-flex items-center justify-center rounded-md border border-[#343438] bg-[#2a2a2d] px-2 py-1.5 text-xs text-theme-light hover:bg-[#343438] disabled:opacity-50 disabled:cursor-not-allowed", "aria-label": "Previous", children: _jsx(Icon, { name: "material-symbols:chevron-left-rounded", className: "h-4 w-4" }) }), _jsxs("span", { className: "text-xs text-gray-400", children: ["Page ", currentPage, " of ", totalPages] }), _jsx("button", { type: "button", onClick: () => setCurrentPage((p) => Math.min(totalPages, p + 1)), disabled: currentPage >= totalPages, className: "inline-flex items-center justify-center rounded-md border border-[#343438] bg-[#2a2a2d] px-2 py-1.5 text-xs text-theme-light hover:bg-[#343438] disabled:opacity-50 disabled:cursor-not-allowed", "aria-label": "Next", children: _jsx(Icon, { name: "material-symbols:chevron-right-rounded", className: "h-4 w-4" }) })] })] })] }))] }));
}
