export interface CuiDocsComponentDef {
    name: string;
    uri: string;
}

export interface CuiDocsComponents {
    [id: string]: CuiDocsComponentDef;
}

export const cuiComponents: CuiDocsComponents = {
    "container": { name: "Container", uri: "/docs/components/container" },
    "section": { name: "Section", uri: "/docs/components/section" },
    "button": { name: "Button", uri: "/docs/components/button" },
    "card": { name: "Card", uri: "/docs/components/card" },
    "breadcrumb": { name: "Breadcrumb", uri: "/docs/components/breadcrumb" },
    "badge": { name: "Badge", uri: "/docs/components/badge" },
    "accordion": { name: "Accordion", uri: "/docs/components/accordion" },
}