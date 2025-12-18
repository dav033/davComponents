import type { SidebarItemProps } from "../../types/sidebar";
type Props = {
    item: SidebarItemProps;
    depth?: number;
    isActive: (href: string) => boolean;
};
export declare function SidebarItem({ item, depth, isActive }: Props): import("react/jsx-runtime").JSX.Element;
export {};
