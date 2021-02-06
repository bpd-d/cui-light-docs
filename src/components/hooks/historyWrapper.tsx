import { useHistory } from "react-router-dom";

export interface UseHistoryWrapperResult {
    history: History;
    pushHistory: (path: string, search?: URLSearchParams) => void;
}

export function useHistoryWrapper() {
    const history = useHistory();

    function push(path: string, search?: URLSearchParams) {
        history.push({
            pathname: path,
            search: search ? search.toString() : undefined
        })
    }

    return {
        history: history,
        pushHistory: push
    }
}