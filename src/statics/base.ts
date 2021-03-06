import { DocsScript } from "../components/docs/base"

export interface CuiDocsComponentDef {
    name: string;
    uri: string;
    description: string;
    illustration?: string;
    script?: DocsScript;
    tags?: string[];
}

export interface CuiDocsComponents {
    [id: string]: CuiDocsComponentDef;
}

