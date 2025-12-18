import type { LabelHTMLAttributes } from "react";
import { cx } from "../utils/cx";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className = "", ...props }: LabelProps) {
  const classes = cx(
    "block text-xs font-medium uppercase tracking-wide text-gray-300",
    className
  );

  return <label className={classes} {...props} />;
}
