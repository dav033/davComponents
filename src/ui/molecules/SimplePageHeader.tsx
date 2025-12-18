"use client";

export interface SimplePageHeaderProps {
  title: string;
  description: string;
}

export function SimplePageHeader({
  title,
  description,
}: SimplePageHeaderProps) {
  return (
    <header className="flex flex-col gap-1">
      <h1 className="text-xl font-semibold text-theme-light sm:text-2xl">
        {title}
      </h1>
      <p className="text-xs text-gray-400 sm:text-sm">{description}</p>
    </header>
  );
}

