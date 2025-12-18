"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { createPortal } from "react-dom";
import Icon from "../atoms/Icon";
function getVariantClasses(danger) {
    return danger
        ? "text-red-400 hover:bg-red-500/10"
        : "hover:bg-[#9ff3e7]/12 focus:bg-[#9ff3e7]/18";
}
const ContextMenuComponent = ({ options, isOpen, position, onClose, }) => {
    const ref = React.useRef(null);
    const [mounted, setMounted] = React.useState(false);
    const [finalPos, setFinalPos] = React.useState(null);
    // Mount detection for portal
    React.useEffect(() => {
        setMounted(true);
    }, []);
    // Close handlers
    React.useEffect(() => {
        if (!isOpen)
            return;
        const handleDown = (event) => {
            var _a;
            const target = event.target;
            if (!((_a = target === null || target === void 0 ? void 0 : target.closest) === null || _a === void 0 ? void 0 : _a.call(target, "[data-context-menu]"))) {
                onClose();
            }
        };
        const handleContextMenu = (event) => {
            var _a;
            const target = event.target;
            if (!((_a = target === null || target === void 0 ? void 0 : target.closest) === null || _a === void 0 ? void 0 : _a.call(target, "[data-context-menu]"))) {
                event.preventDefault();
                onClose();
            }
        };
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleDown);
        document.addEventListener("contextmenu", handleContextMenu);
        window.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("mousedown", handleDown);
            document.removeEventListener("contextmenu", handleContextMenu);
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);
    // Position calculation - uses viewport dimensions captured at click time
    React.useEffect(() => {
        if (!isOpen) {
            setFinalPos(null);
            return;
        }
        // Small delay to ensure the element is in the DOM and measured
        const timeoutId = setTimeout(() => {
            const el = ref.current;
            if (!el) {
                setFinalPos({ x: position.x, y: position.y });
                return;
            }
            // Use viewport dimensions captured at the moment of click
            const vw = position.viewportWidth;
            const vh = position.viewportHeight;
            const width = el.offsetWidth;
            const height = el.offsetHeight;
            const padding = 8;
            let x = position.x;
            let y = position.y;
            // Horizontal adjustment: keep visible in viewport
            if (x + width + padding > vw) {
                x = Math.max(padding, vw - width - padding);
            }
            if (x < padding) {
                x = padding;
            }
            // Vertical adjustment based on VISIBLE viewport space
            // position.y is clientY = distance from top of viewport (what user sees)
            // vh is viewport height at click time
            const spaceBelow = vh - position.y; // space below click point in viewport
            const spaceAbove = position.y; // space above click point in viewport
            // If menu doesn't fit below AND there's more space above, open upwards
            if (height + padding > spaceBelow && spaceAbove > spaceBelow) {
                // Open upwards: position bottom of menu at click point
                y = Math.max(padding, position.y - height);
            }
            else {
                // Open downwards: clamp to bottom of viewport if needed
                if (y + height + padding > vh) {
                    y = Math.max(padding, vh - height - padding);
                }
            }
            setFinalPos({ x, y });
        }, 0);
        return () => clearTimeout(timeoutId);
    }, [isOpen, position]);
    if (!isOpen || !mounted)
        return null;
    const renderIcon = (icon) => {
        if (!icon)
            return null;
        if (typeof icon === "string") {
            return _jsx(Icon, { name: icon, className: "mr-2 text-gray-400 group-hover:text-[#9ff3e7] transition-colors", size: 14 });
        }
        return _jsx("span", { className: "mr-2 text-gray-400 group-hover:text-[#9ff3e7] transition-colors", children: icon });
    };
    const isPositioned = finalPos !== null;
    const displayPos = finalPos !== null && finalPos !== void 0 ? finalPos : { x: position.x, y: position.y };
    const menu = (_jsx("div", { ref: ref, "data-context-menu": true, className: "fixed z-50 min-w-[180px] rounded-lg border border-[#343438] bg-[#1d1d1f] backdrop-blur-sm text-theme-light shadow-lg py-1 overflow-hidden transition-opacity duration-75", style: {
            left: displayPos.x,
            top: displayPos.y,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
            opacity: isPositioned ? 1 : 0,
            pointerEvents: isPositioned ? 'auto' : 'none',
        }, role: "menu", "aria-label": "Context menu", children: _jsx("ul", { className: "m-0 flex list-none flex-col p-1", children: options.map((option, index) => option.separator ? (_jsx("li", { className: "my-0.5 border-t border-[#343438]/80", "aria-hidden": "true" }, option.id || `separator-${index}`)) : (_jsx("li", { children: _jsxs("button", { type: "button", disabled: option.disabled, onClick: () => {
                        if (!option.disabled) {
                            option.action();
                        }
                    }, className: [
                        "group flex w-full items-center justify-between rounded px-2.5 py-1.5 text-[13px] border border-transparent",
                        "text-theme-light/90 transition-colors duration-100",
                        option.disabled
                            ? "cursor-not-allowed opacity-50"
                            : getVariantClasses(option.danger),
                    ]
                        .filter(Boolean)
                        .join(" "), children: [_jsxs("span", { className: "flex items-center", children: [renderIcon(option.icon), _jsx("span", { className: "text-gray-400 group-hover:text-[#9ff3e7] transition-colors", children: option.label })] }), option.shortcut && (_jsx("span", { className: "ml-3 text-[10px] text-theme-light/40", children: option.shortcut }))] }) }, option.id || index))) }) }));
    return createPortal(menu, document.body);
};
export const ContextMenu = React.memo(ContextMenuComponent);
