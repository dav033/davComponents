import type { TextareaHTMLAttributes } from "react";
import { cx } from "../utils/cx";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className = "", ...props }: TextareaProps) {
  const classes = cx(
    "block w-full rounded-lg border border-gray-800 bg-theme-dark text-theme-light placeholder:text-gray-400",
    "focus:outline-none",
    "px-3 py-2 text-sm",
    className
  );

  return <textarea className={classes} {...props} />;
}
