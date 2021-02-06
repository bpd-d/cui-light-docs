import * as React from "react";
import { Debounce } from "../../core/debounce";

export interface UseDebounceRet {
    debounceState: string;
    call: (...args: any[]) => void;
    cancel: () => void;
}

export function useDebounce(callback: (...args: any[]) => void, timeout: number): UseDebounceRet {
    const [state, setState] = React.useState("idle");
    const debounce = React.useRef(new Debounce(timeout, onFinish));

    function onFinish(...args: any[]) {
        setState('idle');
        callback(...args);
    }

    return {
        debounceState: state,
        call: (...args: any[]) => {
            debounce.current.call(...args);
            setState("active");
        },
        cancel: () => {
            debounce.current.cancel();
            setState("idle");
        }
    }
}