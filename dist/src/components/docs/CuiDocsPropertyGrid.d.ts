/// <reference types="react" />
export interface PropertyGridItem {
    name: string;
    class?: string;
    type: string;
    defaultValue: string;
    description: string;
}
export interface CuiDocsPropertyGridProps {
    items: PropertyGridItem[];
}
export interface CuiDocsPropertyItemGridProps {
    item: PropertyGridItem;
}
export declare function CuiDocsPropertyGrid(props: CuiDocsPropertyGridProps): JSX.Element;
export declare function GridItem(props: CuiDocsPropertyItemGridProps): JSX.Element;
