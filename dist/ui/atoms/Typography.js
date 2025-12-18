import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "../utils/cx";
const variantStyles = {
    h1: "text-2xl sm:text-3xl font-bold",
    h2: "text-xl sm:text-2xl font-semibold",
    h3: "text-lg sm:text-xl font-semibold",
    h4: "text-base sm:text-lg font-medium",
    body: "text-sm sm:text-base",
    small: "text-xs sm:text-sm",
    caption: "text-xs",
};
const colorStyles = {
    light: "text-theme-light",
    muted: "text-theme-muted",
    gray: "text-gray-400",
    primary: "text-blue-400",
    success: "text-green-400",
    warning: "text-yellow-400",
    error: "text-red-400",
};
const defaultElements = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    body: "p",
    small: "p",
    caption: "span",
};
export function Typography({ variant = "body", color = "light", className = "", children, as, }) {
    const Component = as || defaultElements[variant];
    const classes = cx(variantStyles[variant], colorStyles[color], className);
    return _jsx(Component, { className: classes, children: children });
}
