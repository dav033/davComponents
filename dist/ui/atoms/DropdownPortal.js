"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
/**
 * Reusable portal-based dropdown that handles:
 * - Positioning relative to trigger element
 * - Click-outside detection
 * - Portal rendering to document.body
 *
 * Separated from Select to enable reuse in other components.
 */
export function DropdownPortal({ isOpen, onClose, triggerRef, children, className = "", }) {
    const [position, setPosition] = useState({
        top: 0,
        left: 0,
        width: 0,
    });
    const dropdownRef = useRef(null);
    // Click-outside handler
    useEffect(() => {
        if (typeof window === "undefined" || !isOpen)
            return;
        const onClickOutside = (e) => {
            var _a, _b;
            const target = e.target;
            if (((_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.contains(target)) || ((_b = dropdownRef.current) === null || _b === void 0 ? void 0 : _b.contains(target))) {
                return;
            }
            onClose();
        };
        window.addEventListener("mousedown", onClickOutside);
        return () => window.removeEventListener("mousedown", onClickOutside);
    }, [isOpen, onClose, triggerRef]);
    // Position calculation
    useEffect(() => {
        if (isOpen && triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX,
                width: rect.width,
            });
        }
    }, [isOpen, triggerRef]);
    if (!isOpen || typeof document === "undefined") {
        return null;
    }
    return createPortal(_jsx("div", { ref: dropdownRef, style: {
            position: "absolute",
            top: position.top,
            left: position.left,
            width: position.width,
            zIndex: 9999,
        }, className: className, children: children }), document.body);
}
