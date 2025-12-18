import type { ReactNode, HTMLAttributes } from "react";
import { cx } from "../utils/cx";

export type ListCardItemProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  actions?: ReactNode;
};

export function ListCardItem({
  children,
  actions,
  className = "",
  ...props
}: ListCardItemProps) {
  return (
    <div
      className={cx(
        "group",
        "flex",
        "items-center",
        "justify-between",
        "rounded-lg",
        "px-3",
        "py-3.5",
        "mb-1.5",
        "bg-gray-800/50",
        "transition-colors",
        "hover:bg-theme-dark/60",
        className
      )}
      {...props}
    >
      <div className={cx("flex", "items-center", "gap-2.5", "min-w-0", "flex-1")}>
        {children}
      </div>
      {actions && (
        <div className={cx(
          "flex",
          "items-center",
          "gap-0.5",
          "shrink-0",
          "opacity-0",
          "group-hover:opacity-100",
          "transition-opacity"
        )}>
          {actions}
        </div>
      )}
    </div>
  );
}

