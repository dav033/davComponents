import { type ReactNode } from "react";
export type SidebarContextValue = {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
};
export declare function SidebarProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useSidebar(): SidebarContextValue;
