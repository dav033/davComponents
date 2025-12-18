export type StatusBadgeProps = {
    status: boolean;
    trueLabel?: string;
    falseLabel?: string;
    trueColor?: "green" | "blue" | "emerald";
    falseColor?: "red" | "gray";
};
export declare function StatusBadge({ status, trueLabel, falseLabel, trueColor, falseColor, }: StatusBadgeProps): import("react/jsx-runtime").JSX.Element;
