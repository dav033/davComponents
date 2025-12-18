import type { ReactNode, HTMLAttributes } from "react";
export type ListCardItemProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    actions?: ReactNode;
};
export declare function ListCardItem({ children, actions, className, ...props }: ListCardItemProps): import("react/jsx-runtime").JSX.Element;
