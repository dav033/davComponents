"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../atoms/Button";
import { IconButton } from "../atoms/IconButton";
import { SearchBoxWithDropdown } from "./SearchBoxWithDropdown";
export function TableToolbar({ search, onCreate, createLabel = "Add", createIcon, createAriaLabel, rightSlot, className, }) {
    const { searchTerm, onSearchChange, selectedField, onFieldChange, searchFields, placeholder, resultCount, totalCount, } = search;
    const normalizedFields = searchFields.map((field) => ({
        key: field.value,
        label: field.label,
    }));
    const activeSearch = searchTerm.trim().length > 0;
    const handleClearSearch = () => onSearchChange("");
    return (_jsxs("div", { className: `flex items-center justify-between gap-3 rounded-xl bg-[#1d1d1f] p-3 ${className !== null && className !== void 0 ? className : ""}`, children: [_jsx("div", { className: "max-w-3xl", children: _jsx(SearchBoxWithDropdown, { searchTerm: searchTerm, onSearchTermChange: onSearchChange, options: normalizedFields, selectedKey: selectedField, onSelectKey: onFieldChange, placeholder: placeholder, hasActiveSearch: activeSearch, onClearSearch: handleClearSearch, resultCount: resultCount, totalCount: totalCount }) }), _jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [rightSlot, onCreate &&
                        (createIcon ? (_jsx(IconButton, { icon: createIcon, "aria-label": createAriaLabel !== null && createAriaLabel !== void 0 ? createAriaLabel : createLabel, onClick: onCreate })) : (_jsx(Button, { variant: "primary", onClick: onCreate, className: "whitespace-nowrap text-sm font-medium", children: createLabel })))] })] }));
}
