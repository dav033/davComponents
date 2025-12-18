import type { InputHTMLAttributes } from "react";
import { cx } from "../utils/cx";

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export function Checkbox({ className = "", ...props }: CheckboxProps) {
  const classes = cx(
    "h-4 w-4 rounded border border-theme-gray bg-theme-dark text-[#1ab3a4] accent-[#1ab3a4]",
    "focus:outline-none focus:ring-2 focus:ring-[#9ff3e7]/40 cursor-pointer",
    className
  );

  return <input type="checkbox" className={classes} {...props} />;
}
