"use client";

import type { PropsWithChildren } from "react";
import type { SidebarDropdownProps } from "../../types/sidebar";
import Icon from "../atoms/Icon";
import { usePersistentToggle } from "../hooks/usePersistentToggle";
import { useAnimatedHeight } from "../hooks/useAnimatedHeight";
import { ICON_SIZES } from "../iconSizes";
import { cx } from "../utils/cx";

type Props = PropsWithChildren<{
  config: SidebarDropdownProps;
  isInitiallyOpen: boolean;
  storageKey: string;
}>;

export function SidebarDropdown({
  config,
  isInitiallyOpen,
  children,
  storageKey,
}: Props) {
  const { isOpen, toggle } = usePersistentToggle({
    storageKey,
    initialValue: isInitiallyOpen,
  });

  const { contentRef, inlineHeight } = useAnimatedHeight({
    isOpen,
    dependencies: [children],
  });

  const { trigger } = config;

  const iconClassName = cx(
    "text-xl transition-transform text-[#a9afb8]",
    isOpen ? "rotate-180" : "rotate-0"
  );

  return (
    <div className="mb-2">
      <button
        type="button"
        onClick={toggle}
        className="flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-[15px] leading-5 text-[#cfd3db] transition-colors hover:bg-[#252b34] hover:text-white"
      >
        <span className="flex items-center gap-2">
          {trigger.icon && <Icon name={trigger.icon} size={ICON_SIZES.lg} />}
          <span>{trigger.title}</span>
        </span>
        <Icon name="material-symbols:arrow-drop-down" className={iconClassName} />
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-[height] duration-200 ease-out"
        style={{ height: inlineHeight }}
      >
        <ul className="mt-1 space-y-1 pl-6">{children}</ul>
      </div>
    </div>
  );
}

