export declare function useSidebarNavigation(): {
    currentPath: string;
    isActive: (href: string) => boolean;
    shouldBeOpen: (sectionBasePath: string) => boolean;
};
