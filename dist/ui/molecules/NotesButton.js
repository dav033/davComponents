import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../atoms/Button';
import Icon from '../atoms/Icon';
export const NotesButton = ({ hasNotes, notesCount = 0, onClick, title = 'View notes', }) => {
    return (_jsx(Button, { type: "button", onClick: onClick, title: title, variant: "ghost", size: "sm", className: "group relative inline-flex items-center gap-1.5 !p-0 cursor-pointer bg-transparent shadow-none", children: _jsxs("div", { className: `relative flex items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-all duration-150 ease-out
          ${hasNotes
                ? 'bg-[#2a2a2d] text-white hover:text-white'
                : 'bg-[#2a2a2d] text-gray-300 hover:text-white'}`, children: [_jsx(Icon, { name: "lucide:file-text", size: 16, className: "transition-transform group-hover:scale-105" }), hasNotes && notesCount > 0 && (_jsx("span", { className: "text-[10px] font-medium tabular-nums", children: notesCount }))] }) }));
};
