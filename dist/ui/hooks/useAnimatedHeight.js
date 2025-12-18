"use client";
import { useState, useLayoutEffect, useCallback, useRef } from "react";
export function useAnimatedHeight({ isOpen, dependencies = [], }) {
    const [inlineHeight, setInlineHeight] = useState(isOpen ? "auto" : "0px");
    const contentRef = useRef(null);
    const updateHeight = useCallback(() => {
        const el = contentRef.current;
        if (!el)
            return;
        if (!isOpen) {
            setInlineHeight("0px");
            return;
        }
        const height = el.scrollHeight;
        setInlineHeight(`${height}px`);
    }, [isOpen]);
    useLayoutEffect(() => {
        updateHeight();
    }, [isOpen, updateHeight, ...dependencies]);
    return {
        contentRef,
        inlineHeight,
        updateHeight,
    };
}
