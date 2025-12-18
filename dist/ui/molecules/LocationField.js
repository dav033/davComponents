"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { AddressAutocompleteInput } from "./AddressAutocompleteInput";
import { controlBaseClass } from "../controlStyles";
export function LocationField({ address, addressLink, label = "Location", placeholder = "Enter address", googlePlaceholder = "Start typing and select the address", disabled = false, showHelperText = true, onAddressChange, onAddressLinkChange, onLocationChange, }) {
    const [useGoogleService, setUseGoogleService] = useState(!!addressLink && addressLink.trim() !== "");
    useEffect(() => {
        const hasLink = !!addressLink && addressLink.trim() !== "";
        setUseGoogleService(hasLink);
    }, [addressLink]);
    const handleToggleGoogle = (checked) => {
        setUseGoogleService(checked);
        if (!checked) {
            onAddressLinkChange("");
        }
    };
    return (_jsxs("div", { className: "space-y-3", children: [_jsxs("label", { className: "flex items-center gap-2 text-sm text-gray-300", children: [_jsx("input", { type: "checkbox", className: "h-4 w-4 rounded border-gray-500", checked: useGoogleService, onChange: (e) => handleToggleGoogle(e.target.checked), disabled: disabled }), _jsxs("span", { children: ["Enable Google Maps Service", _jsx("span", { className: "ml-1 text-xs text-gray-500", children: "(autocomplete + map)" })] })] }), !useGoogleService && (_jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-300", children: label }), _jsx("input", { type: "text", value: address, onChange: (e) => onAddressChange(e.target.value), disabled: disabled, placeholder: placeholder, className: controlBaseClass() }), showHelperText && (_jsx("p", { className: "text-xs text-gray-500", children: "Only the address text will be saved. No Google Maps link will be generated." }))] })), useGoogleService && (_jsx("div", { className: "space-y-2", children: _jsx(AddressAutocompleteInput, { label: `${label} (Google Maps)`, placeholder: googlePlaceholder, value: address, disabled: disabled, required: false, onChange: (addressText) => {
                        onAddressChange(addressText);
                    }, onLinkChange: (link) => {
                        onAddressLinkChange(link);
                    }, onLocationChange: onLocationChange }) }))] }));
}
