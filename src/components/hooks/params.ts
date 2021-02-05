import * as React from "react";
import { Location } from 'history';

export interface SearchParamsResult {
    params: URLSearchParams,
    search: string,
}

export function useSearchParams<T>(location: Location<T>): SearchParamsResult {
    const params = new URLSearchParams(location.search);

    React.useEffect(() => {
    }, [location.search])
    return {
        params: params,
        search: location.search
    };
}