import type { ComponentProps } from "react";
export type IconProps = {
    name: string;
    className?: string;
    inline?: boolean;
    size?: number;
} & Omit<ComponentProps<"span">, "children">;
export default function Icon({ name, className, inline, size, ...rest }: IconProps): import("react/jsx-runtime").JSX.Element;
