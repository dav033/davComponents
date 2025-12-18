export declare const ICON_SIZES: {
    readonly xs: 14;
    readonly sm: 16;
    readonly md: 20;
    readonly lg: 24;
    readonly xl: 32;
    readonly "2xl": 48;
    readonly "3xl": 64;
};
export type IconSize = keyof typeof ICON_SIZES;
export declare function getIconSize(size: IconSize): number;
export declare function getIconSizeClass(size: IconSize): string;
