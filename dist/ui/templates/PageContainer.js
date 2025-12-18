import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function PageContainer({ centered = false, title, subtitle, className = "", children, }) {
    const baseClasses = [
        "min-h-screen bg-theme-dark text-theme-light",
        centered ? "flex flex-col items-center justify-center" : "flex flex-col",
        className,
    ]
        .filter(Boolean)
        .join(" ");
    return (_jsxs("main", { className: baseClasses, children: [title && (_jsxs("div", { className: centered ? "text-center mb-6" : "p-6 border-b border-theme-gray", children: [_jsx("h1", { className: "text-3xl font-bold text-theme-light", children: title }), subtitle && _jsx("p", { className: "mt-2 text-lg text-gray-400", children: subtitle })] })), _jsx("div", { className: centered ? "w-full max-w-4xl px-4" : "flex-1 p-6", children: children })] }));
}
