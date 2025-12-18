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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from "../utils/cx";
export function ListCardItem(_a) {
    var { children, actions, className = "" } = _a, props = __rest(_a, ["children", "actions", "className"]);
    return (_jsxs("div", Object.assign({ className: cx("group", "flex", "items-center", "justify-between", "rounded-lg", "px-3", "py-3.5", "mb-1.5", "bg-gray-800/50", "transition-colors", "hover:bg-theme-dark/60", className) }, props, { children: [_jsx("div", { className: cx("flex", "items-center", "gap-2.5", "min-w-0", "flex-1"), children: children }), actions && (_jsx("div", { className: cx("flex", "items-center", "gap-0.5", "shrink-0", "opacity-0", "group-hover:opacity-100", "transition-opacity"), children: actions }))] })));
}
