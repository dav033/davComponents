import * as React from "react";
import type { ContextMenuOption, ContextMenuPosition } from "../../types/context-menu";
export type ContextMenuProps = Readonly<{
    options: ContextMenuOption[];
    isOpen: boolean;
    position: ContextMenuPosition;
    onClose: () => void;
}>;
export declare const ContextMenu: React.NamedExoticComponent<Readonly<{
    options: ContextMenuOption[];
    isOpen: boolean;
    position: ContextMenuPosition;
    onClose: () => void;
}>>;
