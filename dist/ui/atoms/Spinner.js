import { jsx as _jsx } from "react/jsx-runtime";
export function Spinner({ size = 'md' }) {
    const sizeClasses = {
        sm: 'w-4 h-4 border-2',
        md: 'w-6 h-6 border-2',
        lg: 'w-8 h-8 border-3',
    };
    return (_jsx("div", { className: `${sizeClasses[size]} border-gray-300 border-t-blue-500 rounded-full animate-spin`, role: "status", "aria-label": "Loading" }));
}
