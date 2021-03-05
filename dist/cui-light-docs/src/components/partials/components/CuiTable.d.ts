/// <reference types="react" />
export interface DocsTable {
    header: string[];
    data: string[][];
}
export interface CuiTableProps {
    table: DocsTable;
}
export declare function CuiTable(props: CuiTableProps): JSX.Element;
