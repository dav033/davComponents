"use client";
export function useFormHandlers(value, onChange) {
    const handleTextChange = (event, key) => {
        onChange(Object.assign(Object.assign({}, value), { [key]: event.target.value }));
    };
    const handleCheckboxChange = (event, key) => {
        onChange(Object.assign(Object.assign({}, value), { [key]: event.target.checked }));
    };
    const handleSelectChange = (event, key) => {
        onChange(Object.assign(Object.assign({}, value), { [key]: event.target.value }));
    };
    const handleNumberSelectChange = (newValue, key) => {
        const numValue = newValue === "" ? null : Number(newValue);
        onChange(Object.assign(Object.assign({}, value), { [key]: numValue }));
    };
    const handleValueChange = (key, newValue) => {
        onChange(Object.assign(Object.assign({}, value), { [key]: newValue }));
    };
    return {
        handleTextChange,
        handleCheckboxChange,
        handleSelectChange,
        handleNumberSelectChange,
        handleValueChange,
    };
}
