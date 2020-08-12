export interface CuiDocsComponentDef {
    name: string;
    uri: string;
    desription: string;
}

export interface CuiDocsComponents {
    [id: string]: CuiDocsComponentDef;
}

export const cuiComponents: CuiDocsComponents = {
    "container": { name: "Container", uri: "/docs/components/container", desription: "Help to groups smaller components" },
    "section": { name: "Section", uri: "/docs/components/section", desription: "Makes creating components groups easy" },
    "button": { name: "Button", uri: "/docs/components/button", desription: "Lots of styled options for buttons" },
    "card": { name: "Card", uri: "/docs/components/card", desription: "Creates nice looking cards with ease" },
    "breadcrumb": { name: "Breadcrumb", uri: "/docs/components/breadcrumb", desription: "Makes subpage navigation more accessible" },
    "badge": { name: "Badge", uri: "/docs/components/badge", desription: "Provides pretty indicators to other elements" },
    "accordion": { name: "Accordion", uri: "/docs/components/accordion", desription: "Helps to display a grouped data" },
}