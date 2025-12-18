"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "../atoms/Icon";
import { usePersistentToggle } from "../hooks/usePersistentToggle";
import { useAnimatedHeight } from "../hooks/useAnimatedHeight";
import { ICON_SIZES } from "../iconSizes";
import { cx } from "../utils/cx";
export function SidebarDropdown({ config, isInitiallyOpen, children, storageKey, }) {
    const { isOpen, toggle } = usePersistentToggle({
        storageKey,
        initialValue: isInitiallyOpen,
    });
    const { contentRef, inlineHeight } = useAnimatedHeight({
        isOpen,
        dependencies: [children],
    });
    const { trigger } = config;
    const iconClassName = cx("text-xl transition-transform text-[#a9afb8]", isOpen ? "rotate-180" : "rotate-0");
    return (_jsxs("div", { className: "mb-2", children: [_jsxs("button", { type: "button", onClick: toggle, className: "flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-[15px] leading-5 text-[#cfd3db] transition-colors hover:bg-[#252b34] hover:text-white", children: [_jsxs("span", { className: "flex items-center gap-2", children: [trigger.icon && _jsx(Icon, { name: trigger.icon, size: ICON_SIZES.lg }), _jsx("span", { children: trigger.title })] }), _jsx(Icon, { name: "material-symbols:arrow-drop-down", className: iconClassName })] }), _jsx("div", { ref: contentRef, className: "overflow-hidden transition-[height] duration-200 ease-out", style: { height: inlineHeight }, children: _jsx("ul", { className: "mt-1 space-y-1 pl-6", children: children }) })] }));
}
