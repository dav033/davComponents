type ControlOptions = {
    hasLeftAddon?: boolean;
    hasRightAddon?: boolean;
    fullWidth?: boolean;
    error?: boolean;
};
export declare function controlBaseClass({ hasLeftAddon, hasRightAddon, fullWidth, error, }?: ControlOptions): string;
export declare function controlButtonClass({ variant, size, }?: {
    variant?: "default" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
}): string;
export {};
