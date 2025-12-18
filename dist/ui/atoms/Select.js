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
import { SelectNative } from "./SelectNative";
import { SearchableSelect } from "./SearchableSelect";
/**
 * Unified Select component that delegates to specialized implementations:
 * - SelectNative: Native <select> for simple dropdowns (better accessibility & performance)
 * - SearchableSelect: Custom dropdown with search, color indicators, and portal positioning
 *
 * This composition reduces complexity and separates concerns:
 * - Native behavior vs custom UI
 * - Search/filter logic
 * - Portal positioning
 */
export function Select(_a) {
    var { searchable = false } = _a, rest = __rest(_a, ["searchable"]);
    if (!searchable) {
        return _jsx(SelectNative, Object.assign({}, rest));
    }
    return _jsx(SearchableSelect, Object.assign({}, rest));
}
