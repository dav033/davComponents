"use client";

import { Button } from "../atoms/Button";

export interface BasicModalFooterProps {
  onCancel: () => void;
  onSubmit: () => void;
  isLoading?: boolean;
  canSubmit?: boolean;
  mode?: "create" | "update";
  cancelLabel?: string;
}

export function BasicModalFooter({
  onCancel,
  onSubmit,
  isLoading = false,
  canSubmit = true,
  mode = "create",
  cancelLabel = "Cancel",
}: BasicModalFooterProps) {
  const submitLabel = mode === "create" ? "Create" : "Save changes";

  return (
    <>
      <Button variant="secondary" onClick={onCancel} disabled={isLoading}>
        {cancelLabel}
      </Button>
      <Button
        variant="primary"
        onClick={onSubmit}
        disabled={!canSubmit || isLoading}
        loading={isLoading}
      >
        {submitLabel}
      </Button>
    </>
  );
}

