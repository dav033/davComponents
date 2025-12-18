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
export function Checkbox(_a) {
    var { className = "" } = _a, props = __rest(_a, ["className"]);
    const classes = cx("h-4 w-4 rounded border border-theme-gray bg-theme-dark text-[#1ab3a4] accent-[#1ab3a4]", "focus:outline-none focus:ring-2 focus:ring-[#9ff3e7]/40 cursor-pointer", className);
    return _jsx("input", Object.assign({ type: "checkbox", className: classes }, props));
}
