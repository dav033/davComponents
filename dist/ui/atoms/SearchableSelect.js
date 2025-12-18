"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import Icon from "./Icon";
import { ICON_SIZES } from "../iconSizes";
import { controlBaseClass } from "../controlStyles";
import { DropdownPortal } from "./DropdownPortal";
/**
 * Custom searchable select with color indicators and filtering.
 * Uses DropdownPortal for positioning and click-outside detection.
 */
export function SearchableSelect({ options, value, onChange, placeholder = "Select an option", icon, disabled = false, className = "", }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const containerRef = useRef(null);
    const selectedOption = options.find((o) => o.value === value);
    const filteredOptions = options.filter((o) => (o.label || "").toLowerCase().includes(searchTerm.toLowerCase()));
    const baseControl = [
        controlBaseClass({
            hasLeftAddon: !!icon,
            fullWidth: true,
        }),
        "flex items-center justify-between cursor-pointer",
        "ring-0 focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
    ].join(" ");
    const handleOptionClick = (optValue, optDisabled) => {
        if (optDisabled)
            return;
        onChange(String(optValue));
        setIsOpen(false);
        setSearchTerm("");
    };
    return (_jsxs("div", { ref: containerRef, className: `relative overflow-visible w-full ${className}`, children: [icon && (_jsx("span", { className: "absolute inset-y-0 left-3 flex items-center pointer-events-none", children: _jsx(Icon, { name: icon, className: "text-gray-400", size: ICON_SIZES.md }) })), _jsxs("button", { type: "button", disabled: disabled, onClick: () => setIsOpen((o) => !o), className: baseControl, "aria-haspopup": "listbox", "aria-expanded": isOpen, children: [_jsxs("span", { className: "truncate flex items-center gap-2", children: [(selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.color) ? (_jsx("div", { className: "h-3 w-3 rounded-full shrink-0", style: { backgroundColor: selectedOption.color } })) : (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.color) === null ? (_jsx("div", { className: "h-3 w-3 rounded-full shrink-0 border border-gray-500" })) : null, _jsx("span", { className: "truncate", children: (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) || placeholder })] }), _jsx(Icon, { name: isOpen
                            ? "material-symbols:arrow-drop-up"
                            : "material-symbols:arrow-drop-down", className: "text-gray-400", size: ICON_SIZES.lg })] }), _jsxs(DropdownPortal, { isOpen: isOpen, onClose: () => {
                    setIsOpen(false);
                    setSearchTerm("");
                }, triggerRef: containerRef, className: "bg-theme-dark border border-theme-gray rounded-lg max-h-60 overflow-auto shadow-lg", children: [_jsx("div", { className: "px-3 py-2 border-b border-theme-gray", children: _jsx("input", { type: "text", className: "w-full bg-theme-dark border-none text-sm text-theme-light placeholder:text-gray-400 outline-none focus:outline-none", placeholder: "Search\u2026", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), autoFocus: true }) }), filteredOptions.map((opt, index) => (_jsxs("button", { type: "button", disabled: !!opt.disabled, className: "w-full text-left px-3 py-2 text-sm truncate text-theme-light hover:bg-[#9ff3e7]/10 cursor-pointer border-none bg-transparent disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2", onClick: () => handleOptionClick(opt.value, opt.disabled), children: [opt.color ? (_jsx("div", { className: "h-3 w-3 rounded-full shrink-0", style: { backgroundColor: opt.color } })) : opt.color === null ? (_jsx("div", { className: "h-3 w-3 rounded-full shrink-0 border border-gray-500" })) : null, _jsx("span", { className: "truncate", children: opt.label || "No label" })] }, opt.value != null ? `${String(opt.value)}-${index}` : `option-${index}`))), filteredOptions.length === 0 && (_jsx("div", { className: "px-3 py-2 text-sm text-gray-400", children: "No options found" }))] })] }));
}
