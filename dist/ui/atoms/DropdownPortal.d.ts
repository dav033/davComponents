import { type ReactNode } from "react";
export interface DropdownPortalProps {
    isOpen: boolean;
    onClose: () => void;
    triggerRef: React.RefObject<HTMLElement | null>;
    children: ReactNode;
    className?: string;
}
/**
 * Reusable portal-based dropdown that handles:
 * - Positioning relative to trigger element
 * - Click-outside detection
 * - Portal rendering to document.body
 *
 * Separated from Select to enable reuse in other components.
 */
export declare function DropdownPortal({ isOpen, onClose, triggerRef, children, className, }: DropdownPortalProps): import("react").ReactPortal | null;
