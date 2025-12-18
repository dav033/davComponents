"use client";

import * as React from "react";
import type { Key, ReactNode } from "react";

import { useContextMenu } from "../hooks";
import { ContextMenu } from "../molecules/ContextMenu";
import { EmptyState } from "../molecules/EmptyState";
import { SimpleTable, type SimpleTableColumn } from "./SimpleTable";
import type { ContextMenuOption } from "../../types/context-menu";

export type ContextMenuTableItem = {
  id?: string;
  label: string;
  onClick: () => void;
  icon?: string | ReactNode;
  variant?: "default" | "danger";
  disabled?: boolean;
  shortcut?: string;
  separator?: boolean;
};

export type ContextMenuTableState = {
  iconName: string;
  title: string;
  subtitle: string;
};

export type ContextMenuTableProps<T> = {
  data: T[];
  columns: SimpleTableColumn<T>[];
  rowKey: (item: T) => Key;
  getContextMenuItems?: (item: T) => ContextMenuTableItem[];
  isLoading?: boolean;
  emptyState?: ContextMenuTableState;
  loadingState?: ContextMenuTableState;
};

export function ContextMenuTable<T>({
  data,
  columns,
  rowKey,
  getContextMenuItems,
  isLoading = false,
  emptyState,
  loadingState,
}: ContextMenuTableProps<T>) {
  const {
    isVisible,
    position,
    options,
    show,
    hide,
  } = useContextMenu();

  const safeData = data ?? [];

  const handleRowContextMenu = React.useCallback(
    (event: React.MouseEvent<HTMLTableRowElement>, item: T) => {
      if (!getContextMenuItems) {
        return;
      }

      const menuItems = getContextMenuItems(item) ?? [];

      const menuOptions: ContextMenuOption[] = menuItems.map((menuItem, index) => ({
        id: menuItem.id ?? `${String(rowKey(item))}-${index}`,
        label: menuItem.label,
        icon: menuItem.icon,
        action: () => {
          menuItem.onClick();
          hide();
        },
        danger: menuItem.variant === "danger",
        disabled: menuItem.disabled,
        shortcut: menuItem.shortcut,
        separator: menuItem.separator,
      }));

      show(event, menuOptions);
    },
    [getContextMenuItems, hide, rowKey, show]
  );

  if (isLoading) {
    return (
      <EmptyState
        iconName={loadingState?.iconName ?? "lucide:loader-2"}
        title={loadingState?.title ?? "Loading data…"}
        subtitle={loadingState?.subtitle ?? "Please wait while we load your data."}
      />
    );
  }

  if (!safeData.length) {
    return (
      <EmptyState
        iconName={emptyState?.iconName ?? "lucide:list-x"}
        title={emptyState?.title ?? "No records found."}
        subtitle={
          emptyState?.subtitle ?? "Use the actions above to create a new record."
        }
      />
    );
  }

  return (
    <>
      <SimpleTable<T>
        columns={columns}
        data={safeData}
        rowKey={rowKey}
        onRowContextMenu={getContextMenuItems ? handleRowContextMenu : undefined}
      />

      {getContextMenuItems ? (
        <ContextMenu
          isOpen={isVisible}
          position={position}
          onClose={hide}
          options={options}
        />
      ) : null}
    </>
  );
}


