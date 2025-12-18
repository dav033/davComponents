"use client";

import Link from "next/link";
import type { SidebarItemProps } from "../../types/sidebar";
import Icon from "../atoms/Icon";
import { cx } from "../utils/cx";
import { useSidebar } from "./SidebarContext";

type Props = {
  item: SidebarItemProps;
  depth?: number;
  isActive: (href: string) => boolean;
};

export function SidebarItem({ item, depth = 0, isActive }: Props) {
  const { title, href, icon } = item;
  const { close } = useSidebar();

  const active = isActive(href);
  const basePadding = depth === 0 ? "pl-3" : depth === 1 ? "pl-5" : "pl-7";

  const className = cx(
    "flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-[14px] leading-[1.25rem] transition-colors",
    basePadding,
    active
      ? "bg-[#2d343f] text-[#9ff3e7] shadow-inner"
      : "text-[#d5d9e1] hover:bg-[#252b34] hover:text-white"
  );

  const handleClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      close();
    }
  };

  return (
    <li className="w-full">
      <Link href={href} className={className} onClick={handleClick}>
        {icon && (
          <Icon
            name={icon}
            className={cx(
              "text-lg",
              active ? "text-[#9ff3e7]" : "text-[#a9afb8]"
            )}
          />
        )}
        <span className="truncate">{title}</span>
      </Link>
    </li>
  );
}

