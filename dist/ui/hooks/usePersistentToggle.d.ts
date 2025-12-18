export interface UsePersistentToggleOptions {
    storageKey: string;
    initialValue: boolean;
}
export interface UsePersistentToggleResult {
    isOpen: boolean;
    setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
    toggle: () => void;
    isHydrated: boolean;
}
export declare function usePersistentToggle({ storageKey, initialValue, }: UsePersistentToggleOptions): UsePersistentToggleResult;
