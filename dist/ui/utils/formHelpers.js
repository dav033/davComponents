export function createPatch(current, updates, normalizers) {
    const patch = {};
    for (const key in updates) {
        if (!Object.prototype.hasOwnProperty.call(updates, key)) {
            continue;
        }
        const updateValue = updates[key];
        const currentValue = current[key];
        const normalizer = normalizers === null || normalizers === void 0 ? void 0 : normalizers[key];
        const normalizedUpdate = normalizer ? normalizer(updateValue) : updateValue;
        const normalizedCurrent = normalizer ? normalizer(currentValue) : currentValue;
        const areEqual = normalizedUpdate === normalizedCurrent || (normalizedUpdate == null && normalizedCurrent == null);
        if (!areEqual) {
            patch[key] = normalizedUpdate;
        }
    }
    return patch;
}
export function hasChanges(patch) {
    return Object.keys(patch).length > 0;
}
export function trimStringFields(obj) {
    const result = Object.assign({}, obj);
    for (const key in result) {
        if (typeof result[key] === "string") {
            result[key] = result[key].trim();
        }
    }
    return result;
}
export function removeNullish(obj) {
    const result = {};
    for (const key in obj) {
        if (obj[key] != null) {
            result[key] = obj[key];
        }
    }
    return result;
}
