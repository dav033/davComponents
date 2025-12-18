import { jsx as _jsx } from "react/jsx-runtime";
import { Badge } from "./Badge";
const colorMap = {
    green: "success",
    blue: "primary",
    emerald: "info",
    red: "danger",
    gray: "gray",
};
export function StatusBadge({ status, trueLabel = "Yes", falseLabel = "No", trueColor = "green", falseColor = "red", }) {
    const variant = status ? colorMap[trueColor] : colorMap[falseColor];
    const label = status ? trueLabel : falseLabel;
    return (_jsx(Badge, { variant: variant, size: "sm", children: label }));
}
