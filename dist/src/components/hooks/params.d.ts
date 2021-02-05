import { Location } from 'history';
export interface SearchParamsResult {
    params: URLSearchParams;
    search: string;
}
export declare function useSearchParams<T>(location: Location<T>): SearchParamsResult;
