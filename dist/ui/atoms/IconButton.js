"use client";
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
import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "../utils/cx";
const baseClass = "inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
const variantClasses = {
    solid: "bg-[#2a2a2d] border border-[#343438] text-theme-light hover:bg-[#9ff3e7]/12 hover:border-[#9ff3e7]/40 focus:ring-2 focus:ring-[#9ff3e7]/50",
    ghost: "text-theme-light hover:bg-[#9ff3e7]/12 focus:ring-2 focus:ring-[#9ff3e7]/40",
};
const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
};
export function IconButton(_a) {
    var { icon, variant = "solid", size = "md", className = "" } = _a, props = __rest(_a, ["icon", "variant", "size", "className"]);
    const classes = cx(baseClass, variantClasses[variant], sizeClasses[size], className);
    return (_jsx("button", Object.assign({ className: classes }, props, { children: icon })));
}
