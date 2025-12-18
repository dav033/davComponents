"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import type {
  SidebarConfig,
  SidebarDropdownConfig,
  SidebarItemProps as SidebarItemConfig,
  SidebarSection,
} from "../../types/sidebar";
import { cx } from "../utils/cx";
import { SidebarDropdown } from "./SidebarDropdown";
import { SidebarItem } from "./SidebarItem";
import { useSidebarNavigation } from "../hooks/useSidebarNavigation";
import { useSidebar } from "./SidebarContext";

function renderSidebarItems(
  items: SidebarDropdownConfig[],
  isActive: (href: string) => boolean,
  shouldBeOpen: (sectionBasePath: string) => boolean,
  depth = 0
): ReactNode {
  return items.map((item: SidebarDropdownConfig, index: number) => {
    if ("trigger" in item) {
      const sectionBasePath =
        item.items.length > 0 && "href" in item.items[0]
          ? (item.items[0] as SidebarItemConfig).href
              .split("/")
              .slice(0, 2)
              .join("/")
          : "";

      const isCurrentlyOpen = shouldBeOpen(sectionBasePath);
      const storageKey = `sidebar-dropdown-${item.trigger.title
        .toLowerCase()
        .replace(/\s+/g, "-")}`;

      return (
        <SidebarDropdown
          key={`${item.trigger.title}-${index}`}
          config={item}
          isInitiallyOpen={isCurrentlyOpen}
          storageKey={storageKey}
        >
          {renderSidebarItems(item.items, isActive, shouldBeOpen, depth + 1)}
        </SidebarDropdown>
      );
    }

    const linkItem = item as SidebarItemConfig;

    return (
      <SidebarItem
        key={`${linkItem.title}-${index}`}
        item={linkItem}
        depth={depth}
        isActive={isActive}
      />
    );
  });
}

function renderSidebarSections(
  sections: Array<SidebarDropdownConfig | SidebarSection>,
  isActive: (href: string) => boolean,
  shouldBeOpen: (sectionBasePath: string) => boolean
) {
  return sections.map((entry, idx) => {
    if ("section" in entry) {
      return (
        <div key={`${entry.section}-${idx}`} className="mb-8">
          <div className="px-3 pb-2 text-[11px] font-semibold tracking-[0.08em] text-[#8f97a3] uppercase">
            {entry.section}
          </div>
          <ul className="space-y-1.5">
            {renderSidebarItems(entry.items, isActive, shouldBeOpen, 0)}
          </ul>
        </div>
      );
    }

    return (
      <ul key={`solo-${idx}`} className="space-y-1.5">
        {renderSidebarItems([entry], isActive, shouldBeOpen, 0)}
      </ul>
    );
  });
}

export type SidebarProps = {
  config: SidebarConfig;
  className?: string;
};

export function Sidebar({ config, className = "" }: SidebarProps) {
  const { isActive, shouldBeOpen } = useSidebarNavigation();
  const { isOpen, close } = useSidebar();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        close();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, close]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}
      <aside
        className={cx(
          "fixed inset-y-0 left-0 z-40 flex w-80 flex-col border-r border-[#2f3137] bg-[#1c1e22] px-3 py-6 transition-transform duration-300 ease-in-out",
          "lg:translate-x-0 lg:z-20",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        <nav className="flex flex-1 flex-col overflow-hidden">
          {config.title && (
            <div className="mb-10 px-2">
              <div className="text-2xl font-bold leading-tight tracking-tight text-[#9ff3e7]">
                {config.title}
              </div>
            </div>
          )}
          <div className="flex-1 overflow-auto pr-1 space-y-3">
            {renderSidebarSections(config.top, isActive, shouldBeOpen)}
          </div>
          {config.bottom && config.bottom.length > 0 && (
            <div className="mt-4 space-y-3 border-t border-theme-gray-subtle pt-4">
              {renderSidebarSections(config.bottom, isActive, shouldBeOpen)}
            </div>
          )}
        </nav>
      </aside>
    </>
  );
}

