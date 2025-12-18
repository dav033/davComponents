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
import { forwardRef } from "react";
import { controlBaseClass } from "../controlStyles";
import { Field } from "../molecules/Field";
import { cx } from "../utils/cx";
export const Input = forwardRef((_a, ref) => {
    var { label, error, leftAddon, rightAddon, hint, id, className = "", value, fullWidth = true } = _a, props = __rest(_a, ["label", "error", "leftAddon", "rightAddon", "hint", "id", "className", "value", "fullWidth"]);
    const inputId = id !== null && id !== void 0 ? id : (label ? `${String(label).toLowerCase().replace(/\s+/g, "-")}-input` : undefined);
    const baseInputClass = cx(controlBaseClass({
        hasLeftAddon: !!leftAddon,
        hasRightAddon: !!rightAddon,
        fullWidth,
        error: !!error,
    }), "cursor-pointer", className);
    const normalizedValue = value !== null && value !== void 0 ? value : "";
    return (_jsx(Field, { label: label, error: error, hint: hint, htmlFor: inputId, children: _jsxs("div", { className: "relative", children: [leftAddon && (_jsx("span", { className: "pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400", children: leftAddon })), _jsx("input", Object.assign({ id: inputId, ref: ref, className: baseInputClass, value: normalizedValue }, props)), rightAddon && (_jsx("span", { className: "pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400", children: rightAddon }))] }) }));
});
Input.displayName = "Input";
