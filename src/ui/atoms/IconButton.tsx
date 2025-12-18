"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "../utils/cx";

type IconButtonVariant = "solid" | "ghost";
type IconButtonSize = "sm" | "md" | "lg";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
};

const baseClass =
  "inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

const variantClasses: Record<IconButtonVariant, string> = {
  solid:
    "bg-[#2a2a2d] border border-[#343438] text-theme-light hover:bg-[#9ff3e7]/12 hover:border-[#9ff3e7]/40 focus:ring-2 focus:ring-[#9ff3e7]/50",
  ghost:
    "text-theme-light hover:bg-[#9ff3e7]/12 focus:ring-2 focus:ring-[#9ff3e7]/40",
};

const sizeClasses: Record<IconButtonSize, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export function IconButton({
  icon,
  variant = "solid",
  size = "md",
  className = "",
  ...props
}: IconButtonProps) {
  const classes = cx(baseClass, variantClasses[variant], sizeClasses[size], className);

  return (
    <button className={classes} {...props}>
      {icon}
    </button>
  );
}


