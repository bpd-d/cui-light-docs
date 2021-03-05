export interface UseHistoryWrapperResult {
    history: History;
    pushHistory: (path: string, search?: URLSearchParams) => void;
}
export declare function useHistoryWrapper(): {
    history: import("history").History<unknown>;
    pushHistory: (path: string, search?: URLSearchParams) => void;
};
