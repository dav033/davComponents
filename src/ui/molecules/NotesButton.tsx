import React from 'react';
import { Button } from '../atoms/Button';
import Icon from '../atoms/Icon';

export interface NotesButtonProps {
  hasNotes: boolean;
  notesCount?: number;
  onClick: () => void;
  title?: string;
}

export const NotesButton: React.FC<NotesButtonProps> = ({
  hasNotes,
  notesCount = 0,
  onClick,
  title = 'View notes',
}) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      title={title}
      variant="ghost"
      size="sm"
      className="group relative inline-flex items-center gap-1.5 !p-0 cursor-pointer bg-transparent shadow-none"
    >
      <div
        className={`relative flex items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-all duration-150 ease-out
          ${
            hasNotes
              ? 'bg-[#2a2a2d] text-white hover:text-white'
              : 'bg-[#2a2a2d] text-gray-300 hover:text-white'
          }`}
      >
        <Icon
          name="lucide:file-text"
          size={16}
          className="transition-transform group-hover:scale-105"
        />
        {hasNotes && notesCount > 0 && (
          <span className="text-[10px] font-medium tabular-nums">
            {notesCount}
          </span>
        )}
      </div>
    </Button>
  );
};

