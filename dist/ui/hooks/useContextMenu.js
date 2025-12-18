"use client";
import * as React from "react";
const INITIAL_STATE = {
    isVisible: false,
    position: { x: 0, y: 0, viewportWidth: 0, viewportHeight: 0 },
    options: [],
};
export function useContextMenu() {
    const [state, setState] = React.useState(INITIAL_STATE);
    const show = React.useCallback((event, options = []) => {
        event.preventDefault();
        // Capture click position AND viewport size at the moment of click
        const position = {
            x: event.clientX,
            y: event.clientY,
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight,
        };
        setState({
            isVisible: true,
            position,
            options,
        });
    }, []);
    const hide = React.useCallback(() => {
        setState(INITIAL_STATE);
    }, []);
    return React.useMemo(() => ({
        isVisible: state.isVisible,
        position: state.position,
        options: state.options,
        show,
        hide,
    }), [state.isVisible, state.position, state.options, show, hide]);
}
export default useContextMenu;
