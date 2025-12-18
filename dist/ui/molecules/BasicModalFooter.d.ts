export interface BasicModalFooterProps {
    onCancel: () => void;
    onSubmit: () => void;
    isLoading?: boolean;
    canSubmit?: boolean;
    mode?: "create" | "update";
    cancelLabel?: string;
}
export declare function BasicModalFooter({ onCancel, onSubmit, isLoading, canSubmit, mode, cancelLabel, }: BasicModalFooterProps): import("react/jsx-runtime").JSX.Element;
