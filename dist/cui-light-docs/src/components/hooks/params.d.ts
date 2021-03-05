import { Location } from 'history';
export interface SearchParamsResult {
    searchParams: URLSearchParams;
    search: string;
}
export declare function useSearchParams<T>(location: Location<T>): SearchParamsResult;
