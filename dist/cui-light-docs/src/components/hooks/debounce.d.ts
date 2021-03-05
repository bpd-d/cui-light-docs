export interface UseDebounceRet {
    debounceState: string;
    call: (...args: any[]) => void;
    cancel: () => void;
}
export declare function useDebounce(callback: (...args: any[]) => void, timeout: number): UseDebounceRet;
