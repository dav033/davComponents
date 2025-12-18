"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "./Icon";
import { controlBaseClass } from "../controlStyles";
import { cx } from "../utils/cx";
/**
 * Native <select> implementation for non-searchable selects.
 * Simpler, accessible, and browser-native behavior.
 */
export function SelectNative({ options, value, onChange, placeholder = "Select an option", icon, disabled = false, className = "", allowEmpty = true, emptyLabel = "None", }) {
    const baseControl = cx(controlBaseClass({
        hasLeftAddon: !!icon,
        fullWidth: true,
    }), "flex items-center cursor-pointer", "ring-0 focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50");
    return (_jsxs("div", { className: cx("relative overflow-visible w-full", className), children: [icon && (_jsx("span", { className: "absolute inset-y-0 left-3 flex items-center pointer-events-none", children: _jsx(Icon, { name: icon, className: "text-gray-400", size: 20 }) })), _jsxs("select", { disabled: disabled, value: value !== null && value !== void 0 ? value : "", onChange: (e) => onChange(e.target.value), className: baseControl, children: [allowEmpty && _jsx("option", { value: "", children: emptyLabel }), options.map((opt) => (_jsx("option", { value: String(opt.value), disabled: !!opt.disabled, children: opt.label || "No label" }, String(opt.value))))] })] }));
}
