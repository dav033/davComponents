"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useState, } from "react";
const SidebarContext = createContext(undefined);
export function SidebarProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);
    const close = useCallback(() => {
        setIsOpen(false);
    }, []);
    return (_jsx(SidebarContext.Provider, { value: { isOpen, toggle, close }, children: children }));
}
export function useSidebar() {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within SidebarProvider");
    }
    return context;
}
