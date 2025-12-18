import { type RefObject } from "react";
export interface UseAnimatedHeightOptions {
    isOpen: boolean;
    dependencies?: unknown[];
}
export interface UseAnimatedHeightResult {
    contentRef: RefObject<HTMLDivElement>;
    inlineHeight: string | undefined;
    updateHeight: () => void;
}
export declare function useAnimatedHeight({ isOpen, dependencies, }: UseAnimatedHeightOptions): UseAnimatedHeightResult;
