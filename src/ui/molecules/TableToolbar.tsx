"use client";

import type { ReactNode } from "react";
import { Button } from "../atoms/Button";
import { IconButton } from "../atoms/IconButton";
import { SearchBoxWithDropdown } from "./SearchBoxWithDropdown";

type SearchFieldDescriptor = {
  value: string;
  label: string;
};

export type TableToolbarSearchController = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedField: string;
  onFieldChange: (value: string) => void;
  searchFields: SearchFieldDescriptor[];
  placeholder?: string;
  resultCount?: number;
  totalCount?: number;
};

export type TableToolbarProps = {
  search: TableToolbarSearchController;
  onCreate?: () => void;
  createLabel?: string;
  createIcon?: ReactNode;
  createAriaLabel?: string;
  rightSlot?: ReactNode;
  className?: string;
};

export function TableToolbar({
  search,
  onCreate,
  createLabel = "Add",
  createIcon,
  createAriaLabel,
  rightSlot,
  className,
}: TableToolbarProps) {
  const {
    searchTerm,
    onSearchChange,
    selectedField,
    onFieldChange,
    searchFields,
    placeholder,
    resultCount,
    totalCount,
  } = search;

  const normalizedFields = searchFields.map((field) => ({
    key: field.value,
    label: field.label,
  }));

  const activeSearch = searchTerm.trim().length > 0;
  const handleClearSearch = () => onSearchChange("");

  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-xl bg-[#1d1d1f] p-3 ${className ?? ""}`}
    >
      {/* Left section: Search */}
      <div className="max-w-3xl">
        <SearchBoxWithDropdown
          searchTerm={searchTerm}
          onSearchTermChange={onSearchChange}
          options={normalizedFields}
          selectedKey={selectedField}
          onSelectKey={onFieldChange}
          placeholder={placeholder}
          hasActiveSearch={activeSearch}
          onClearSearch={handleClearSearch}
          resultCount={resultCount}
          totalCount={totalCount}
        />
      </div>

      {/* Right section: Action buttons */}
      <div className="flex items-center gap-2 shrink-0">
        {rightSlot}

        {onCreate &&
          (createIcon ? (
            <IconButton
              icon={createIcon}
              aria-label={createAriaLabel ?? createLabel}
              onClick={onCreate}
            />
          ) : (
            <Button
              variant="primary"
              onClick={onCreate}
              className="whitespace-nowrap text-sm font-medium"
            >
              {createLabel}
            </Button>
          ))}
      </div>
    </div>
  );
}

