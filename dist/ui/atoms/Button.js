var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
const variants = {
    primary: "bg-[#1ab3a4] text-white hover:bg-[#159c94] focus:ring-2 focus:ring-[#9ff3e7]/50",
    secondary: "bg-[var(--color-gray-alt)] text-[var(--color-light)] hover:bg-[var(--color-gray)]",
    ghost: "bg-transparent text-[var(--color-light)] hover:bg-[var(--color-gray-subtle)]",
    danger: "bg-red-600 text-white hover:bg-red-500",
    subtle: "bg-[var(--color-gray-subtle)] text-[var(--color-light)] hover:bg-[var(--color-gray-alt)]",
};
const sizes = {
    sm: "text-xs px-2 py-1 h-8",
    md: "text-sm px-3 py-2 h-9",
    lg: "text-base px-4 py-2.5 h-10",
};
export function Button(_a) {
    var { variant = "primary", size = "md", leftIcon, rightIcon, className = "", loading = false, disabled, fullWidth = false, children } = _a, props = __rest(_a, ["variant", "size", "leftIcon", "rightIcon", "className", "loading", "disabled", "fullWidth", "children"]);
    const widthClass = fullWidth ? "w-full sm:w-auto" : "";
    const classes = [base, variants[variant], sizes[size], widthClass, className]
        .filter(Boolean)
        .join(" ");
    const isDisabled = disabled || loading;
    return (_jsx("button", Object.assign({ className: classes, disabled: isDisabled }, props, { children: loading ? (_jsxs(_Fragment, { children: [_jsxs("svg", { className: "mr-2 h-4 w-4 animate-spin", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }), children] })) : (_jsxs(_Fragment, { children: [leftIcon && _jsx("span", { className: "mr-2 inline-flex", children: leftIcon }), children, rightIcon && _jsx("span", { className: "ml-2 inline-flex", children: rightIcon })] })) })));
}
