export interface SearchResult {
    name: string;
    detail: string;
}
export interface SearchResultSection {
    name: string;
    results: SearchResult[];
}
