"use client";
import { usePathname } from "next/navigation";
export function useSidebarNavigation() {
    var _a;
    const currentPath = (_a = usePathname()) !== null && _a !== void 0 ? _a : "/";
    const normalize = (path) => {
        if (!path)
            return "/";
        if (path === "/")
            return "/";
        return path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
    };
    const normalizedCurrent = normalize(currentPath);
    const isActive = (href) => {
        const normalizedHref = normalize(href);
        if (normalizedHref === "/") {
            return normalizedCurrent === "/";
        }
        return (normalizedCurrent === normalizedHref ||
            normalizedCurrent.startsWith(normalizedHref + "/"));
    };
    const shouldBeOpen = (sectionBasePath) => {
        if (!sectionBasePath)
            return false;
        if (sectionBasePath === "/") {
            return isActive("/");
        }
        const normalizedSection = normalize(sectionBasePath);
        return (normalizedCurrent === normalizedSection ||
            normalizedCurrent.startsWith(normalizedSection + "/"));
    };
    return {
        currentPath,
        isActive,
        shouldBeOpen,
    };
}
