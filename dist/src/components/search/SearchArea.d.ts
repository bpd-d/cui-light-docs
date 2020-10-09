/// <reference types="react" />
export interface SearchResult {
    name: string;
    detail: string;
}
export interface SearchResultSection {
    name: string;
    results: SearchResult[];
}
export declare function SearchArea(): JSX.Element;
export declare function SearchResultView(result: SearchResultSection): JSX.Element;
