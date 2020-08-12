export interface CuiDocsComponentDef {
    name: string;
    uri: string;
    desription: string;
}
export interface CuiDocsComponents {
    [id: string]: CuiDocsComponentDef;
}
export declare const cuiComponents: CuiDocsComponents;
