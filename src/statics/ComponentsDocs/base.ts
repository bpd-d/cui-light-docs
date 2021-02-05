import { DocsScript } from "../../components/docs/base"

export const COMPONENTS = {
    container: "container",
    section: "section",
    button: "button",
    card: "card",
    breadcrumb: "breadcrumb",
    badge: "badge",
    accordion: "accordion"
}

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

