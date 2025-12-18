export function normalizeValue(value, config) {
    var _a;
    const fn = (_a = config === null || config === void 0 ? void 0 : config.normalize) !== null && _a !== void 0 ? _a : ((s) => s.toLowerCase().trim());
    return fn(value);
}
export function filterBySearch(items, config, state) {
    const query = normalizeValue(state.query, config);
    if (!query)
        return [...items];
    const fieldsToSearch = state.field === "all" ? config.fields.map((f) => f.key) : [state.field];
    return items.filter((item) => fieldsToSearch.some((key) => {
        const raw = item[key];
        if (raw == null)
            return false;
        const value = normalizeValue(String(raw), config);
        return value.includes(query);
    }));
}
