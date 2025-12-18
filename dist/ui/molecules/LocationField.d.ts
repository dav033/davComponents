export type LocationFieldProps = {
    address: string;
    addressLink?: string | null;
    label?: string;
    placeholder?: string;
    googlePlaceholder?: string;
    disabled?: boolean;
    showHelperText?: boolean;
    onAddressChange: (value: string) => void;
    onAddressLinkChange: (value: string) => void;
    onLocationChange?: (location: {
        address: string;
        link: string;
    }) => void;
};
export declare function LocationField({ address, addressLink, label, placeholder, googlePlaceholder, disabled, showHelperText, onAddressChange, onAddressLinkChange, onLocationChange, }: LocationFieldProps): import("react/jsx-runtime").JSX.Element;
