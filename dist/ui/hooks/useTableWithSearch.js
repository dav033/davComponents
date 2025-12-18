"use client";
import { useCallback, useMemo, useState } from "react";
import { filterBySearch, normalizeValue } from "../search/utils";
export function useTableWithSearch({ data, searchableFields = [], defaultSearchField = "all", customSearchFn, normalize, }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchField, setSearchField] = useState(defaultSearchField);
    const searchConfig = useMemo(() => {
        var _a;
        return ({
            fields: searchableFields.map((key) => ({
                key: key,
                label: String(key),
            })),
            defaultField: (_a = defaultSearchField) !== null && _a !== void 0 ? _a : searchableFields[0],
            normalize,
        });
    }, [searchableFields, normalize, defaultSearchField]);
    const filteredData = useMemo(() => {
        var _a;
        if (!searchQuery.trim()) {
            return data;
        }
        if (customSearchFn) {
            const term = normalizeValue(searchQuery, searchConfig);
            return data.filter((item) => customSearchFn(item, term, searchField));
        }
        return filterBySearch(data, searchConfig, {
            query: searchQuery,
            field: (_a = searchField) !== null && _a !== void 0 ? _a : "all",
        });
    }, [data, searchQuery, searchField, searchConfig, customSearchFn]);
    const handleSetSearchQuery = useCallback((query) => {
        setSearchQuery(query);
    }, []);
    const handleSetSearchField = useCallback((field) => {
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
