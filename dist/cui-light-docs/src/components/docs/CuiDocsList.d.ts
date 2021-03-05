/// <reference types="react" />
export interface CuiListItem {
    name: string;
    description: string;
}
export interface CuiDocsListProps {
    items: CuiListItem[];
}
export declare function CuiDocsList(props: CuiDocsListProps): JSX.Element;
