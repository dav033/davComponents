import React from "react";
type AddressAutocompleteWithMapProps = {
    value?: string;
    onChange: (address: string) => void;
    onLinkChange: (link: string) => void;
    onLocationChange?: (location: {
        address: string;
        link: string;
    }) => void;
    initialCenter?: {
        lat: number;
        lng: number;
    };
    height?: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    leftAddon?: React.ReactNode;
};
export declare function AddressAutocompleteWithMap({ value, onChange, onLinkChange, onLocationChange, initialCenter, height, label, placeholder, required, disabled, leftAddon, }: AddressAutocompleteWithMapProps): import("react/jsx-runtime").JSX.Element;
export {};
