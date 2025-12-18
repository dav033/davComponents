import React from "react";
type AddressAutocompleteInputProps = {
    value?: string;
    onChange: (value: string) => void;
    onLinkChange: (link: string) => void;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    initialCenter?: {
        lat: number;
        lng: number;
    };
    height?: string;
    leftAddon?: React.ReactNode;
    onLocationChange?: (location: {
        address: string;
        link: string;
    }) => void;
};
export declare function AddressAutocompleteInput({ value, onChange, onLinkChange, onLocationChange, label, placeholder, disabled, required, initialCenter, height, leftAddon, }: AddressAutocompleteInputProps): import("react/jsx-runtime").JSX.Element;
export {};
