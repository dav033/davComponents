import type { PropsWithChildren } from "react";
import type { SidebarDropdownProps } from "../../types/sidebar";
type Props = PropsWithChildren<{
    config: SidebarDropdownProps;
    isInitiallyOpen: boolean;
    storageKey: string;
}>;
export declare function SidebarDropdown({ config, isInitiallyOpen, children, storageKey, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
