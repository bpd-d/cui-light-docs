/// <reference types="react" />
interface CuiIconPackItem {
    name: string;
    data: string;
    selected: boolean;
    index: number;
}
export declare function CuiDocsIconPackBuilder(): JSX.Element;
export interface CuiIconPackBuilderCardProps {
    item: CuiIconPackItem;
    onClick: (item: CuiIconPackItem) => void;
}
export declare function CuiIconPackBuilderCard(props: CuiIconPackBuilderCardProps): JSX.Element;
export {};
