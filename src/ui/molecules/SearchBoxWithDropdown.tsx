"use client";

import type { ChangeEvent } from "react";
import Icon from "../atoms/Icon";
import { IconButton } from "../atoms/IconButton";
import { Select } from "../atoms/Select";
import { Input } from "../atoms/Input";

type SearchFieldOption = {
  key: string;
  label: string;
};

export type SearchBoxWithDropdownProps = {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  options: SearchFieldOption[];
  selectedKey: string;
  onSelectKey: (value: string) => void;
  placeholder?: string;
  hasActiveSearch?: boolean;
  onClearSearch?: () => void;
  resultCount?: number;
  totalCount?: number;
};

export function SearchBoxWithDropdown({
  searchTerm,
  onSearchTermChange,
  options,
  selectedKey,
  onSelectKey,
  placeholder,
  hasActiveSearch,
  onClearSearch,
  resultCount,
  totalCount,
}: SearchBoxWithDropdownProps) {
  function handleTermChange(event: ChangeEvent<HTMLInputElement>) {
    onSearchTermChange(event.target.value);
  }

  function handleSelectChange(value: string) {
    onSelectKey(value);
  }

  const showCounts =
    typeof resultCount === "number" && typeof totalCount === "number";

  return (
    <div className="flex items-center gap-2 w-full">
      <div className="w-32 shrink-0">
        <Select
          value={selectedKey}
          onChange={handleSelectChange}
          options={options.map((option) => ({
            value: option.key,
            label: option.label,
          }))}
        />
      </div>

      <div className="flex-1 min-w-0">
        <Input
          type="text"
          value={searchTerm}
          onChange={handleTermChange}
          placeholder={placeholder}
          leftAddon={
            <Icon
              name="material-symbols:search"
              className="h-4 w-4 text-gray-400"
            />
          }
        />
      </div>

      {hasActiveSearch && onClearSearch && (
        <IconButton
          type="button"
          onClick={onClearSearch}
          aria-label="Clear search"
          variant="ghost"
          size="sm"
          className="text-gray-300 hover:text-white"
          icon={<Icon name="material-symbols:close" className="h-4 w-4" />}
        />
      )}

      {showCounts && (
        <span className="whitespace-nowrap text-[10px] text-gray-400">
          Showing {resultCount} of {totalCount} results
        </span>
      )}
    </div>
  );
}

