"use client";

import * as React from "react";
import { createPortal } from "react-dom";

import type { ContextMenuOption, ContextMenuPosition } from "../../types/context-menu";
import Icon from "../atoms/Icon";

export type ContextMenuProps = Readonly<{
  options: ContextMenuOption[];
  isOpen: boolean;
  position: ContextMenuPosition;
  onClose: () => void;
}>;

function getVariantClasses(danger?: boolean) {
  return danger
    ? "text-red-400 hover:bg-red-500/10"
    : "hover:bg-[#9ff3e7]/12 focus:bg-[#9ff3e7]/18";
}

const ContextMenuComponent: React.FC<ContextMenuProps> = ({
  options,
  isOpen,
  position,
  onClose,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = React.useState(false);
  const [finalPos, setFinalPos] = React.useState<{ x: number; y: number } | null>(null);

  // Mount detection for portal
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Close handlers
  React.useEffect(() => {
    if (!isOpen) return;

    const handleDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest?.("[data-context-menu]")) {
        onClose();
      }
    };

    const handleContextMenu = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest?.("[data-context-menu]")) {
        event.preventDefault();
        onClose();
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleDown);
    document.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  // Position calculation - uses viewport dimensions captured at click time
  React.useEffect(() => {
    if (!isOpen) {
      setFinalPos(null);
      return;
    }

    // Small delay to ensure the element is in the DOM and measured
    const timeoutId = setTimeout(() => {
      const el = ref.current;
      if (!el) {
        setFinalPos({ x: position.x, y: position.y });
        return;
      }

      // Use viewport dimensions captured at the moment of click
      const vw = position.viewportWidth;
      const vh = position.viewportHeight;
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      const padding = 8;

      let x = position.x;
      let y = position.y;

      // Horizontal adjustment: keep visible in viewport
      if (x + width + padding > vw) {
        x = Math.max(padding, vw - width - padding);
      }
      if (x < padding) {
        x = padding;
      }

      // Vertical adjustment based on VISIBLE viewport space
      // position.y is clientY = distance from top of viewport (what user sees)
      // vh is viewport height at click time
      const spaceBelow = vh - position.y; // space below click point in viewport
      const spaceAbove = position.y;       // space above click point in viewport

      // If menu doesn't fit below AND there's more space above, open upwards
      if (height + padding > spaceBelow && spaceAbove > spaceBelow) {
        // Open upwards: position bottom of menu at click point
        y = Math.max(padding, position.y - height);
      } else {
        // Open downwards: clamp to bottom of viewport if needed
        if (y + height + padding > vh) {
          y = Math.max(padding, vh - height - padding);
        }
      }

      setFinalPos({ x, y });
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [isOpen, position]);

  if (!isOpen || !mounted) return null;

  const renderIcon = (icon?: React.ReactNode | string) => {
    if (!icon) return null;
    if (typeof icon === "string") {
      return <Icon name={icon} className="mr-2 text-gray-400 group-hover:text-[#9ff3e7] transition-colors" size={14} />;
    }
    return <span className="mr-2 text-gray-400 group-hover:text-[#9ff3e7] transition-colors">{icon}</span>;
  };

  const isPositioned = finalPos !== null;
  const displayPos = finalPos ?? { x: position.x, y: position.y };

  const menu = (
    <div
      ref={ref}
      data-context-menu
      className="fixed z-50 min-w-[180px] rounded-lg border border-[#343438] bg-[#1d1d1f] backdrop-blur-sm text-theme-light shadow-lg py-1 overflow-hidden transition-opacity duration-75"
      style={{
        left: displayPos.x,
        top: displayPos.y,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        opacity: isPositioned ? 1 : 0,
        pointerEvents: isPositioned ? 'auto' : 'none',
      }}
      role="menu"
      aria-label="Context menu"
    >
      <ul className="m-0 flex list-none flex-col p-1">
        {options.map((option, index) =>
          option.separator ? (
            <li
              key={option.id || `separator-${index}`}
              className="my-0.5 border-t border-[#343438]/80"
              aria-hidden="true"
            />
          ) : (
            <li key={option.id || index}>
              <button
                type="button"
                disabled={option.disabled}
                onClick={() => {
                  if (!option.disabled) {
                    option.action();
                  }
                }}
                className={[
                  "group flex w-full items-center justify-between rounded px-2.5 py-1.5 text-[13px] border border-transparent",
                  "text-theme-light/90 transition-colors duration-100",
                  option.disabled
                    ? "cursor-not-allowed opacity-50"
                    : getVariantClasses(option.danger),
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="flex items-center">
                  {renderIcon(option.icon)}
                  <span className="text-gray-400 group-hover:text-[#9ff3e7] transition-colors">{option.label}</span>
                </span>
                {option.shortcut && (
                  <span className="ml-3 text-[10px] text-theme-light/40">
                    {option.shortcut}
                  </span>
                )}
              </button>
            </li>
          ),
        )}
      </ul>
    </div>
  );

  return createPortal(menu, document.body);
};

export const ContextMenu = React.memo(ContextMenuComponent);
