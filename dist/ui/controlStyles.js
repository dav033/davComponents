export function controlBaseClass({ hasLeftAddon, hasRightAddon, fullWidth = true, error, } = {}) {
    return [
        "rounded-lg border border-[#343438] bg-theme-dark text-theme-light placeholder:text-gray-400 focus:border-[#4b4b50]",
        "text-sm py-2 h-10",
        fullWidth ? "w-full" : "",
        hasLeftAddon ? "pl-10" : "pl-3",
        hasRightAddon ? "pr-10" : "pr-3",
        "focus:outline-none",
        "transition-colors duration-200",
        error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "",
    ]
        .filter(Boolean)
        .join(" ");
}
// For buttons that follow the same design pattern
export function controlButtonClass({ variant = "default", size = "md", } = {}) {
    const baseClasses = [
        "rounded-lg font-medium transition-colors duration-200",
        "focus:outline-none",
        "disabled:opacity-50 disabled:cursor-not-allowed",
    ];
    const variantClasses = {
        default: "bg-theme-dark border border-theme-gray text-theme-light hover:bg-theme-darker",
        ghost: "text-theme-light hover:bg-theme-darker",
        outline: "border border-theme-gray text-theme-light hover:bg-theme-darker",
    };
    const sizeClasses = {
        sm: "text-xs px-2 py-1 h-8",
        md: "text-sm px-3 py-2 h-9",
        lg: "text-base px-4 py-2.5 h-10",
    };
    return [
        ...baseClasses,
        variantClasses[variant],
        sizeClasses[size],
    ]
        .filter(Boolean)
        .join(" ");
}
