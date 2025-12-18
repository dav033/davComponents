"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { controlBaseClass } from "../controlStyles";
export function AddressAutocompleteWithMap({ value, onChange, onLinkChange, onLocationChange, initialCenter = { lat: 25.7617, lng: -80.1918 }, height = "180px", label, placeholder, required, disabled, leftAddon, }) {
    const inputRef = useRef(null);
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markerRef = useRef(null);
    const autocompleteRef = useRef(null);
    const geocoderRef = useRef(null);
    const initializedRef = useRef(false);
    const onChangeRef = useRef(onChange);
    const onLinkChangeRef = useRef(onLinkChange);
    const onLocationChangeRef = useRef(onLocationChange);
    useEffect(() => {
        onChangeRef.current = onChange;
    }, [onChange]);
    useEffect(() => {
        onLinkChangeRef.current = onLinkChange;
    }, [onLinkChange]);
    useEffect(() => {
        onLocationChangeRef.current = onLocationChange;
    }, [onLocationChange]);
    useEffect(() => {
        if (disabled)
            return;
        const initialize = () => {
            var _a;
            if (initializedRef.current)
                return;
            const w = window;
            if (!((_a = w.google) === null || _a === void 0 ? void 0 : _a.maps) || !w.google.maps.places) {
                return;
            }
            initializedRef.current = true;
            geocoderRef.current = new w.google.maps.Geocoder();
            if (mapRef.current) {
                mapInstanceRef.current = new w.google.maps.Map(mapRef.current, {
                    center: initialCenter,
                    zoom: 12,
                });
                markerRef.current = new w.google.maps.Marker({
                    map: mapInstanceRef.current,
                    position: initialCenter,
                });
                mapInstanceRef.current.addListener("click", (e) => {
                    var _a;
                    if (!e.latLng || !markerRef.current || !mapInstanceRef.current)
                        return;
                    const pos = e.latLng.toJSON();
                    markerRef.current.setPosition(pos);
                    mapInstanceRef.current.setCenter(pos);
                    const link = `https://www.google.com/maps/search/?api=1&query=${pos.lat}%2C${pos.lng}`;
                    if (onLocationChangeRef.current) {
                        const currentAddress = ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value) || "";
                        onLocationChangeRef.current({ address: currentAddress, link });
                    }
                    else {
                        onLinkChangeRef.current(link);
                    }
                });
            }
            if (inputRef.current) {
                autocompleteRef.current = new w.google.maps.places.Autocomplete(inputRef.current, {
                    fields: ["formatted_address", "geometry", "place_id", "url"],
                    types: ["address"],
                });
                autocompleteRef.current.addListener("place_changed", () => {
                    var _a;
                    const ac = autocompleteRef.current;
                    if (!ac || !inputRef.current)
                        return;
                    const place = ac.getPlace();
                    const address = place.formatted_address || inputRef.current.value || "";
                    const location = (_a = place.geometry) === null || _a === void 0 ? void 0 : _a.location;
                    const placeId = place.place_id;
                    const placeUrl = place.url;
                    let link = "";
                    if (placeUrl) {
                        link = placeUrl;
                    }
                    else {
                        const base = "https://www.google.com/maps/search/?api=1";
                        const query = encodeURIComponent(address);
                        const queryPlaceId = placeId ? `&query_place_id=${encodeURIComponent(placeId)}` : "";
                        link = `${base}&query=${query}${queryPlaceId}`;
                    }
                    if (onLocationChangeRef.current) {
                        onLocationChangeRef.current({ address, link });
                    }
                    else {
                        onChangeRef.current(address);
                        onLinkChangeRef.current(link);
                    }
                    if (location && mapInstanceRef.current && markerRef.current) {
                        const pos = location.toJSON();
                        mapInstanceRef.current.setCenter(pos);
                        mapInstanceRef.current.setZoom(16);
                        markerRef.current.setPosition(pos);
                    }
                });
            }
            if (value && inputRef.current && geocoderRef.current && mapInstanceRef.current && markerRef.current) {
                inputRef.current.value = value;
                geocoderRef.current.geocode({ address: value }, (results, status) => {
                    if (status === "OK" && results && results[0]) {
                        const loc = results[0].geometry.location;
                        const pos = loc.toJSON();
                        mapInstanceRef.current.setCenter(pos);
                        mapInstanceRef.current.setZoom(16);
                        markerRef.current.setPosition(pos);
                    }
                });
            }
        };
        initialize();
        const handler = () => initialize();
        window.addEventListener("google-maps-loaded", handler);
        return () => {
            window.removeEventListener("google-maps-loaded", handler);
        };
    }, [initialCenter, disabled, value]);
    useEffect(() => {
        if (inputRef.current && value !== undefined && inputRef.current.value !== value) {
            inputRef.current.value = value;
        }
    }, [value]);
    if (disabled) {
        return (_jsxs("div", { className: "space-y-2", children: [label && (_jsxs("label", { className: "block text-sm font-medium text-gray-400", children: [label, " ", required && "*"] })), _jsxs("div", { className: "relative", children: [leftAddon && (_jsx("span", { className: "pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400", children: leftAddon })), _jsx("input", { type: "text", disabled: true, value: value !== null && value !== void 0 ? value : "", placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : "Address", className: controlBaseClass({ hasLeftAddon: !!leftAddon }) })] }), _jsx("div", { style: {
                        width: "100%",
                        height,
                        borderRadius: "0.75rem",
                        backgroundColor: "#374151",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#9ca3af",
                    }, children: "Map disabled" })] }));
    }
    return (_jsxs("div", { className: "space-y-2", children: [label && (_jsxs("label", { className: "block text-sm font-medium text-gray-300", children: [label, " ", required && "*"] })), _jsxs("div", { className: "flex items-center", children: [leftAddon && _jsx("span", { className: "mr-2 text-gray-400 flex items-center", children: leftAddon }), _jsx("input", { ref: inputRef, type: "text", value: value !== null && value !== void 0 ? value : "", onChange: (e) => onChange(e.target.value), placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : "Type an address", className: controlBaseClass({ hasLeftAddon: !!leftAddon, fullWidth: true }), autoComplete: "off" })] }), _jsx("div", { ref: mapRef, style: {
                    width: "100%",
                    height,
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    border: "1px solid #374151",
                } })] }));
}
