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
import { Icon as Iconify } from "@iconify/react";
export default function Icon(_a) {
    var { name, className = "", inline = false, size = 16 } = _a, rest = __rest(_a, ["name", "className", "inline", "size"]);
    return (_jsx("span", Object.assign({ className: `inline-flex items-center ${className}` }, rest, { children: _jsx(Iconify, { icon: name, inline: inline, style: { width: size, height: size } }) })));
}
