export type UseToast = {
    showToast?: (message: string, type?: string) => void;
    showSuccess?: (message: string) => void;
    showError?: (message: string) => void;
    showInfo?: (message: string) => void;
    showWarning?: (message: string) => void;
};
