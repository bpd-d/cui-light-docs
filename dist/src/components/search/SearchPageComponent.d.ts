/// <reference types="react" />
import { SearchResultSection } from "./interfaces";
export default function SearchPageComponent(): JSX.Element;
export interface SearchPageContentProps {
    isLoading: boolean;
    results?: SearchResultSection[];
}
export declare function SearchPageContent(props: SearchPageContentProps): JSX.Element;
