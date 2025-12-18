"use client";

export interface TableEmptyStateProps {
  message?: string;
  isLoading?: boolean;
}


export function TableEmptyState({ 
  message = "No data found.",
  isLoading = false 
}: TableEmptyStateProps) {
  return (
    <div className="rounded-2xl border border-theme-border/60 bg-theme-dark/40 p-4 text-sm text-theme-muted">
      {isLoading ? "Loading..." : message}
    </div>
  );
}


















