"use client";

import { useCallback, useMemo, useState } from "react";
import type { SearchConfig } from "../search/types";
import { filterBySearch, normalizeValue } from "../search/utils";

export interface UseTableWithSearchOptions<T> {
  data: T[];
  searchableFields?: (keyof T)[];
  defaultSearchField?: string;
  customSearchFn?: (item: T, query: string, field: string) => boolean;
  normalize?: (value: string) => string;
}

export interface UseTableWithSearchResult<T> {
  filteredData: T[];
  searchQuery: string;
  searchField: string;
  setSearchQuery: (query: string) => void;
  setSearchField: (field: string) => void;
  totalCount: number;
  filteredCount: number;
}

export function useTableWithSearch<T extends Record<string, any>>({
  data,
  searchableFields = [],
  defaultSearchField = "all",
  customSearchFn,
  normalize,
}: UseTableWithSearchOptions<T>): UseTableWithSearchResult<T> {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState(defaultSearchField);

  const searchConfig = useMemo<SearchConfig<T>>(
    () => ({
      fields: searchableFields.map((key) => ({
        key: key as keyof T & string,
        label: String(key),
      })),
      defaultField:
        (defaultSearchField as keyof T & string) ?? (searchableFields[0] as keyof T & string),
      normalize,
    }),
    [searchableFields, normalize, defaultSearchField]
  );

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) {
      return data;
    }

    if (customSearchFn) {
      const term = normalizeValue(searchQuery, searchConfig);
      return data.filter((item) => customSearchFn(item, term, searchField));
    }

    return filterBySearch(data, searchConfig, {
      query: searchQuery,
      field: (searchField as keyof T & string) ?? "all",
    });
  }, [data, searchQuery, searchField, searchConfig, customSearchFn]);

  const handleSetSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleSetSearchField = useCallback((field: string) => {
    setSearchField(field);
  }, []);

  return {
    filteredData,
    searchQuery,
    searchField,
    setSearchQuery: handleSetSearchQuery,
    setSearchField: handleSetSearchField,
    totalCount: data.length,
    filteredCount: filteredData.length,
  };
}


