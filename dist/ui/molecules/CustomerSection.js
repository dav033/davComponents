import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function CustomerSection({ title, itemCount, showSkeleton, skeleton, table, }) {
    const itemLabel = itemCount === 1 ? title.toLowerCase().slice(0, -1) : title.toLowerCase();
    return (_jsxs("section", { className: "flex flex-col gap-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h2", { className: "text-lg font-medium text-theme-light", children: title }), _jsxs("span", { className: "text-sm text-gray-400", children: [itemCount, " ", itemLabel] })] }), showSkeleton ? skeleton : table] }));
}
