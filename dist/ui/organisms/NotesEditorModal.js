"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { Modal } from "../molecules/Modal";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { IconButton } from "../atoms/IconButton";
import { Spinner } from "../atoms/Spinner";
import Icon from "../atoms/Icon";
import { ICON_SIZES } from "../iconSizes";
import { useNotesEditor } from "../hooks/useNotesEditor";
export function NotesEditorModal({ controller, fullWidth = false, }) {
    const { isOpen, title = "Notes", notes, loading = false, onChangeNotes, onClose, onSave, } = controller;
    const editor = useNotesEditor({
        notes,
        onNotesChange: onChangeNotes,
    });
    React.useEffect(() => {
        if (!isOpen) {
            editor.reset();
        }
    }, [isOpen, editor.reset]);
    const handleInternalClose = React.useCallback(() => {
        if (loading)
            return;
        onClose();
    }, [loading, onClose]);
    const handleInternalSave = React.useCallback(() => {
        if (loading)
            return;
        onSave();
    }, [loading, onSave]);
    return (_jsx(Modal, { isOpen: isOpen, title: title, onClose: handleInternalClose, fullWidth: fullWidth, children: _jsxs("div", { className: "p-4 space-y-4", children: [loading && (_jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-300", children: [_jsx(Spinner, {}), _jsx("span", { children: "Saving notes..." })] })), notes && notes.length > 0 ? (_jsx("div", { className: "space-y-2 max-h-64 overflow-y-auto pr-1", children: notes.map((note, idx) => (_jsx("div", { className: "flex items-center justify-between gap-2 rounded border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-gray-100", children: editor.editIndex === idx ? (_jsxs("div", { className: "flex w-full items-center gap-2", children: [_jsx("div", { className: "flex-1", children: _jsx(Input, { value: editor.editValue, onChange: (e) => editor.setEditValue(e.target.value) }) }), _jsx(Button, { type: "button", variant: "primary", size: "sm", onClick: editor.handleSaveEditNote, children: "Save" }), _jsx(Button, { type: "button", variant: "secondary", size: "sm", onClick: editor.handleCancelEdit, children: "Cancel" })] })) : (_jsxs(_Fragment, { children: [_jsx("span", { className: "flex-1", children: note }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => editor.handleStartEditNote(idx), className: "h-7 w-7 p-0 min-h-0 bg-gray-800 hover:bg-blue-600 hover:text-white", children: _jsx(Icon, { name: "lucide:pencil", size: ICON_SIZES.xs }) }), _jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => editor.handleDeleteNoteAtIndex(idx), className: "h-7 w-7 p-0 min-h-0 bg-red-900/60 text-red-300 hover:bg-red-600 hover:text-white", children: _jsx(Icon, { name: "lucide:trash-2", size: ICON_SIZES.xs }) })] })] })) }, idx))) })) : (_jsx("div", { className: "text-sm text-gray-400", children: "No notes available." })), _jsxs("div", { className: "flex gap-2 pt-2", children: [_jsx("div", { className: "flex-1", children: _jsx(Input, { type: "text", value: editor.newNote, onChange: (e) => editor.setNewNote(e.target.value), placeholder: "Add a new note...", disabled: loading }) }), _jsx(IconButton, { icon: _jsx(Icon, { name: "lucide:plus", size: 16 }), variant: "solid", size: "md", "aria-label": "Add note", onClick: editor.handleAddNote, disabled: loading })] }), _jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [_jsx(Button, { type: "button", variant: "secondary", size: "md", onClick: handleInternalClose, disabled: loading, children: "Cancel" }), _jsx(Button, { type: "button", variant: "primary", size: "md", onClick: handleInternalSave, disabled: loading, children: "Save changes" })] })] }) }));
}
