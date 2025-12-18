"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "../atoms/Icon";
import { IconButton } from "../atoms/IconButton";
import { Select } from "../atoms/Select";
import { Input } from "../atoms/Input";
export function SearchBoxWithDropdown({ searchTerm, onSearchTermChange, options, selectedKey, onSelectKey, placeholder, hasActiveSearch, onClearSearch, resultCount, totalCount, }) {
    function handleTermChange(event) {
        onSearchTermChange(event.target.value);
    }
    function handleSelectChange(value) {
        onSelectKey(value);
    }
    const showCounts = typeof resultCount === "number" && typeof totalCount === "number";
    return (_jsxs("div", { className: "flex items-center gap-2 w-full", children: [_jsx("div", { className: "w-32 shrink-0", children: _jsx(Select, { value: selectedKey, onChange: handleSelectChange, options: options.map((option) => ({
                        value: option.key,
                        label: option.label,
                    })) }) }), _jsx("div", { className: "flex-1 min-w-0", children: _jsx(Input, { type: "text", value: searchTerm, onChange: handleTermChange, placeholder: placeholder, leftAddon: _jsx(Icon, { name: "material-symbols:search", className: "h-4 w-4 text-gray-400" }) }) }), hasActiveSearch && onClearSearch && (_jsx(IconButton, { type: "button", onClick: onClearSearch, "aria-label": "Clear search", variant: "ghost", size: "sm", className: "text-gray-300 hover:text-white", icon: _jsx(Icon, { name: "material-symbols:close", className: "h-4 w-4" }) })), showCounts && (_jsxs("span", { className: "whitespace-nowrap text-[10px] text-gray-400", children: ["Showing ", resultCount, " of ", totalCount, " results"] }))] }));
}
