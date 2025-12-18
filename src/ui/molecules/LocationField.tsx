"use client";

import { useEffect, useState } from "react";
import { AddressAutocompleteInput } from "./AddressAutocompleteInput";
import { controlBaseClass } from "../controlStyles";

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
  
  onLocationChange?: (location: { address: string; link: string }) => void;
};


export function LocationField({
  address,
  addressLink,
  label = "Location",
  placeholder = "Enter address",
  googlePlaceholder = "Start typing and select the address",
  disabled = false,
  showHelperText = true,
  onAddressChange,
  onAddressLinkChange,
  onLocationChange,
}: LocationFieldProps) {
 
  const [useGoogleService, setUseGoogleService] = useState(
    !!addressLink && addressLink.trim() !== ""
  );

  useEffect(() => {
    const hasLink = !!addressLink && addressLink.trim() !== "";
    setUseGoogleService(hasLink);
  }, [addressLink]);

  const handleToggleGoogle = (checked: boolean) => {
    setUseGoogleService(checked);
    if (!checked) {
      onAddressLinkChange("");
    }
  };

  return (
    <div className="space-y-3">
      {}
      <label className="flex items-center gap-2 text-sm text-gray-300">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-gray-500"
          checked={useGoogleService}
          onChange={(e) => handleToggleGoogle(e.target.checked)}
          disabled={disabled}
        />
        <span>
          Enable Google Maps Service
          <span className="ml-1 text-xs text-gray-500">
            (autocomplete + map)
          </span>
        </span>
      </label>

      {}
      {!useGoogleService && (
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-300">
            {label}
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => onAddressChange(e.target.value)}
            disabled={disabled}
            placeholder={placeholder}
            className={controlBaseClass()}
          />
          {showHelperText && (
            <p className="text-xs text-gray-500">
              Only the address text will be saved. No Google Maps link will be generated.
            </p>
          )}
        </div>
      )}

      {}
      {useGoogleService && (
        <div className="space-y-2">
          <AddressAutocompleteInput
            label={`${label} (Google Maps)`}
            placeholder={googlePlaceholder}
            value={address}
            disabled={disabled}
            required={false}
            onChange={(addressText) => {
              onAddressChange(addressText);
            }}
            onLinkChange={(link) => {
              onAddressLinkChange(link);
            }}
            onLocationChange={onLocationChange}
          />
        </div>
      )}
    </div>
  );
}









