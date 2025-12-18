"use client";

import React from "react";
import Icon from "../atoms/Icon";

type SimpleTableSortValue = string | number | null | undefined;

export type SimpleTableColumn<T> = {
  key: keyof T | string;
  header: string;
  className?: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
  sortValue?: (item: T) => SimpleTableSortValue;
};

export interface SimpleTableProps<T> {
  columns: SimpleTableColumn<T>[];
  data: T[];
  rowKey: (item: T) => React.Key;
  onRowContextMenu?: (
    event: React.MouseEvent<HTMLTableRowElement>,
    item: T
  ) => void;
}

type SortDirection = "asc" | "desc";

type SortState = {
  key: string;
  direction: SortDirection;
};

const DEFAULT_PAGE_SIZE = 10;
const PAGE_SIZE_OPTIONS = [10, 25, 50];

export function SimpleTable<T>({
  columns,
  data,
  rowKey,
  onRowContextMenu,
}: SimpleTableProps<T>) {
  const [sortState, setSortState] = React.useState<SortState | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(DEFAULT_PAGE_SIZE);

  const sortedData = React.useMemo(() => {
    if (!sortState) {
      return data;
    }

    const column = columns.find((col) => String(col.key) === sortState.key);
    if (!column || !column.sortable) {
      return data;
    }

    const getSortValue = (item: T) => {
      const value = column.sortValue
        ? column.sortValue(item)
        : (item as any)[column.key as string];
      if (value == null) {
        return "";
      }
      return value;
    };

    const normalize = (value: unknown) =>
      typeof value === "number" ? value : String(value).toLowerCase();

    const comparator = (a: T, b: T) => {
      const aValue = normalize(getSortValue(a));
      const bValue = normalize(getSortValue(b));

      if (aValue < bValue) {
        return -1;
      }
      if (aValue > bValue) {
        return 1;
      }
      return 0;
    };

    const sorted = [...data].sort((a, b) => comparator(a, b));

    return sortState.direction === "asc" ? sorted : sorted.reverse();
  }, [columns, data, sortState]);

  const totalPages = Math.max(1, Math.ceil(sortedData.length / pageSize));

  React.useEffect(() => {
    setCurrentPage((prev) => Math.min(prev, totalPages));
  }, [sortedData.length, totalPages]);

  const paginatedData = React.useMemo(() => {
    if (sortedData.length <= pageSize) {
      return sortedData;
    }
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const handleSort = (column: SimpleTableColumn<T>) => {
    if (!column.sortable) {
      return;
    }

    const key = String(column.key);
    setSortState((current) => {
      if (!current || current.key !== key) {
        return { key, direction: "asc" };
      }
      return {
        key,
        direction: current.direction === "asc" ? "desc" : "asc",
      };
    });
  };

  return (
    <section className="rounded-2xl bg-[#1d1d1f] shadow-sm overflow-x-auto">
      <table className="w-full table-fixed text-sm">
        <thead className="bg-[#181818]">
          <tr className="text-left text-xs uppercase tracking-wide text-gray-400 h-12">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={`px-4 py-3 h-full align-middle ${column.className ?? ""} ${column.sortable ? "cursor-pointer select-none hover:bg-[#9ff3e7]/10 transition-colors group" : ""}`}
                onClick={column.sortable ? () => handleSort(column) : undefined}
                aria-sort={
                  sortState?.key === String(column.key)
                    ? sortState.direction === "asc"
                      ? "ascending"
                      : "descending"
                    : "none"
                }
              >
                <div className="flex h-full items-center gap-1.5">
                  <span>{column.header}</span>
                  {column.sortable && sortState?.key === String(column.key) && (
                    <span className="text-xs text-gray-300">
                      {sortState.direction === "asc" ? "▲" : "▼"}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#2a2a2a]">
          {paginatedData.map((item) => (
            <tr
              key={rowKey(item)}
              onContextMenu={
                onRowContextMenu
                  ? (event) => onRowContextMenu(event, item)
                  : undefined
              }
              className="cursor-default hover:bg-[#9ff3e7]/8 transition-colors"
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={`px-4 py-3 ${column.className ?? ""}`}
                >
                  {column.render
                    ? column.render(item)
                    : (item as any)[column.key as string]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {sortedData.length > DEFAULT_PAGE_SIZE && (
        <div className="flex flex-col gap-3 border-t border-[#2a2a2a] px-4 py-3 text-sm text-gray-300 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Rows per page</span>
            <select
              value={pageSize}
              onChange={(e) => {
                const next = Number(e.target.value);
                setPageSize(next);
                setCurrentPage(1);
              }}
              className="rounded-md border border-[#343438] bg-[#2a2a2d] px-2 py-1 text-xs text-theme-light hover:bg-[#343438] focus:outline-none"
            >
              {PAGE_SIZE_OPTIONS.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between gap-3 md:justify-end">
            <span className="text-xs text-gray-400">
              Showing {paginatedData.length} of {sortedData.length} records
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center justify-center rounded-md border border-[#343438] bg-[#2a2a2d] px-2 py-1.5 text-xs text-theme-light hover:bg-[#343438] disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <Icon
                  name="material-symbols:chevron-left-rounded"
                  className="h-4 w-4"
                />
              </button>
              <span className="text-xs text-gray-400">
                Page {currentPage} of {totalPages}
              </span>
              {/* <button
                type="button"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage >= totalPages}
                className="inline-flex items-center justify-center rounded-md border border-[#343438] bg-[#2a2a2d] px-2 py-1.5 text-xs text-theme-light hover:bg-[#343438] disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <Icon
                  name="material-symbols:chevron-right-rounded"
                  className="h-4 w-4"
                />
              </button> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
