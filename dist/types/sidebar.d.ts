export type SidebarItemProps = {
    title: string;
    href: string;
    icon?: string;
};
export type SidebarDropdownProps = {
    trigger: {
        title: string;
        icon?: string;
    };
    items: SidebarDropdownConfig[];
};
export type SidebarDropdownConfig = SidebarItemProps | SidebarDropdownProps;
export type SidebarSection = {
    section: string;
    items: SidebarDropdownConfig[];
};
export type SidebarConfig = {
    top: Array<SidebarDropdownConfig | SidebarSection>;
    bottom?: Array<SidebarDropdownConfig | SidebarSection>;
    title?: string;
};
