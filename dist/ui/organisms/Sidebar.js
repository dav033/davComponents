"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { cx } from "../utils/cx";
import { SidebarDropdown } from "./SidebarDropdown";
import { SidebarItem } from "./SidebarItem";
import { useSidebarNavigation } from "../hooks/useSidebarNavigation";
import { useSidebar } from "./SidebarContext";
function renderSidebarItems(items, isActive, shouldBeOpen, depth = 0) {
    return items.map((item, index) => {
        if ("trigger" in item) {
            const sectionBasePath = item.items.length > 0 && "href" in item.items[0]
                ? item.items[0].href
                    .split("/")
                    .slice(0, 2)
                    .join("/")
                : "";
            const isCurrentlyOpen = shouldBeOpen(sectionBasePath);
            const storageKey = `sidebar-dropdown-${item.trigger.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`;
            return (_jsx(SidebarDropdown, { config: item, isInitiallyOpen: isCurrentlyOpen, storageKey: storageKey, children: renderSidebarItems(item.items, isActive, shouldBeOpen, depth + 1) }, `${item.trigger.title}-${index}`));
        }
        const linkItem = item;
        return (_jsx(SidebarItem, { item: linkItem, depth: depth, isActive: isActive }, `${linkItem.title}-${index}`));
    });
}
function renderSidebarSections(sections, isActive, shouldBeOpen) {
    return sections.map((entry, idx) => {
        if ("section" in entry) {
            return (_jsxs("div", { className: "mb-8", children: [_jsx("div", { className: "px-3 pb-2 text-[11px] font-semibold tracking-[0.08em] text-[#8f97a3] uppercase", children: entry.section }), _jsx("ul", { className: "space-y-1.5", children: renderSidebarItems(entry.items, isActive, shouldBeOpen, 0) })] }, `${entry.section}-${idx}`));
        }
        return (_jsx("ul", { className: "space-y-1.5", children: renderSidebarItems([entry], isActive, shouldBeOpen, 0) }, `solo-${idx}`));
    });
}
export function Sidebar({ config, className = "" }) {
    const { isActive, shouldBeOpen } = useSidebarNavigation();
    const { isOpen, close } = useSidebar();
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && isOpen) {
                close();
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen, close]);
    return (_jsxs(_Fragment, { children: [isOpen && (_jsx("div", { className: "fixed inset-0 z-30 bg-black/60 lg:hidden", onClick: close, "aria-hidden": "true" })), _jsx("aside", { className: cx("fixed inset-y-0 left-0 z-40 flex w-80 flex-col border-r border-[#2f3137] bg-[#1c1e22] px-3 py-6 transition-transform duration-300 ease-in-out", "lg:translate-x-0 lg:z-20", isOpen ? "translate-x-0" : "-translate-x-full", className), children: _jsxs("nav", { className: "flex flex-1 flex-col overflow-hidden", children: [config.title && (_jsx("div", { className: "mb-10 px-2", children: _jsx("div", { className: "text-2xl font-bold leading-tight tracking-tight text-[#9ff3e7]", children: config.title }) })), _jsx("div", { className: "flex-1 overflow-auto pr-1 space-y-3", children: renderSidebarSections(config.top, isActive, shouldBeOpen) }), config.bottom && config.bottom.length > 0 && (_jsx("div", { className: "mt-4 space-y-3 border-t border-theme-gray-subtle pt-4", children: renderSidebarSections(config.bottom, isActive, shouldBeOpen) }))] }) })] }));
}
