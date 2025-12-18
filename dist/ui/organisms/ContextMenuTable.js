"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useContextMenu } from "../hooks";
import { ContextMenu } from "../molecules/ContextMenu";
import { EmptyState } from "../molecules/EmptyState";
import { SimpleTable } from "./SimpleTable";
export function ContextMenuTable({ data, columns, rowKey, getContextMenuItems, isLoading = false, emptyState, loadingState, }) {
    var _a, _b, _c, _d, _e, _f;
    const { isVisible, position, options, show, hide, } = useContextMenu();
    const safeData = data !== null && data !== void 0 ? data : [];
    const handleRowContextMenu = React.useCallback((event, item) => {
        var _a;
        if (!getContextMenuItems) {
            return;
        }
        const menuItems = (_a = getContextMenuItems(item)) !== null && _a !== void 0 ? _a : [];
        const menuOptions = menuItems.map((menuItem, index) => {
            var _a;
            return ({
                id: (_a = menuItem.id) !== null && _a !== void 0 ? _a : `${String(rowKey(item))}-${index}`,
                label: menuItem.label,
                icon: menuItem.icon,
                action: () => {
                    menuItem.onClick();
                    hide();
                },
                danger: menuItem.variant === "danger",
                disabled: menuItem.disabled,
                shortcut: menuItem.shortcut,
                separator: menuItem.separator,
            });
        });
        show(event, menuOptions);
    }, [getContextMenuItems, hide, rowKey, show]);
    if (isLoading) {
        return (_jsx(EmptyState, { iconName: (_a = loadingState === null || loadingState === void 0 ? void 0 : loadingState.iconName) !== null && _a !== void 0 ? _a : "lucide:loader-2", title: (_b = loadingState === null || loadingState === void 0 ? void 0 : loadingState.title) !== null && _b !== void 0 ? _b : "Loading data…", subtitle: (_c = loadingState === null || loadingState === void 0 ? void 0 : loadingState.subtitle) !== null && _c !== void 0 ? _c : "Please wait while we load your data." }));
    }
    if (!safeData.length) {
        return (_jsx(EmptyState, { iconName: (_d = emptyState === null || emptyState === void 0 ? void 0 : emptyState.iconName) !== null && _d !== void 0 ? _d : "lucide:list-x", title: (_e = emptyState === null || emptyState === void 0 ? void 0 : emptyState.title) !== null && _e !== void 0 ? _e : "No records found.", subtitle: (_f = emptyState === null || emptyState === void 0 ? void 0 : emptyState.subtitle) !== null && _f !== void 0 ? _f : "Use the actions above to create a new record." }));
    }
    return (_jsxs(_Fragment, { children: [_jsx(SimpleTable, { columns: columns, data: safeData, rowKey: rowKey, onRowContextMenu: getContextMenuItems ? handleRowContextMenu : undefined }), getContextMenuItems ? (_jsx(ContextMenu, { isOpen: isVisible, position: position, onClose: hide, options: options })) : null] }));
}
