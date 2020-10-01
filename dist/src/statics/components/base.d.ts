import { DocsScript } from "../../components/docs/base";
export declare const COMPONENTS: {
    container: string;
    section: string;
    button: string;
    card: string;
    breadcrumb: string;
    badge: string;
    accordion: string;
};
export interface CuiDocsComponentDef {
    name: string;
    uri: string;
    description: string;
    illustration?: string;
    script?: DocsScript;
}
export interface CuiDocsComponents {
    [id: string]: CuiDocsComponentDef;
}
export declare const cuiComponents: CuiDocsComponents;
