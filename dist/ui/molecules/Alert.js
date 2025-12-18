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
const variantClasses = {
    info: "bg-blue-50 text-blue-800 border border-blue-200",
    success: "bg-green-50 text-green-800 border border-green-200",
    warning: "bg-yellow-50 text-yellow-800 border border-yellow-200",
    error: "bg-red-50 text-red-800 border border-red-200",
};
export function Alert(_a) {
    var { variant = "info", className = "", children } = _a, rest = __rest(_a, ["variant", "className", "children"]);
    const classes = variantClasses[variant];
    return (_jsx("div", Object.assign({ className: `rounded-md px-3 py-2 text-sm ${classes} ${className}` }, rest, { children: children })));
}
