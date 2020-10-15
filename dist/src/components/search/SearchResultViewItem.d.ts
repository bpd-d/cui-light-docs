/// <reference types="react" />
import { SearchResult, SearchResultSection } from './interfaces';
export interface ListItemProp {
    result: SearchResult;
}
export declare function SearchResultViewItem(result: SearchResultSection): JSX.Element;
export declare function SearchResultLinkItem(prop: ListItemProp): JSX.Element;
export declare function SearchResulIconItem(prop: ListItemProp): JSX.Element;
