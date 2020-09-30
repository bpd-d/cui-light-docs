import { ScriptSection, DocsScript } from "../../components/docs/base"
import { BreadrumbScript } from "./breadcrumb"
import { CuiDocsSectionScript } from "./section"
import { CuiDocsContainerScript } from "./container"
import { CuiDocsComponentButtonScript } from "./button"
import { CuiDocsComponentBadge } from "./badge"
import { Introduction } from "./intro"
import { CuiDocsBannerScript } from "./banner"

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
    script?: DocsScript;
}

export interface CuiDocsComponents {
    [id: string]: CuiDocsComponentDef;
}

export const cuiComponents: CuiDocsComponents = {
    "container": { name: "Container", uri: "/docs/components/container", description: "Help to groups smaller components", script: CuiDocsContainerScript },
    "section": { name: "Section", uri: "/docs/components/section", description: "Makes creating components groups easy", script: CuiDocsSectionScript },
    "button": { name: "Button", uri: "/docs/components/button", description: "Lots of styled options for buttons", script: CuiDocsComponentButtonScript },
    "card": { name: "Card", uri: "/docs/components/card", description: "Creates nice looking cards with ease" },
    "breadcrumb": { name: "Breadcrumb", uri: "/docs/components/breadcrumb", description: "Makes subpage navigation more accessible", script: BreadrumbScript },
    "badge": { name: "Badge", uri: "/docs/components/badge", description: "Provides pretty indicators to other elements", script: CuiDocsComponentBadge },
    "accordion": { name: "Accordion", uri: "/docs/components/accordion", description: "Helps to display a grouped data" },
    "introduction": { name: "Introduction", uri: "/docs/components/introduction", description: "This is introduction", script: Introduction },
    "banner": { name: "Banner", uri: "/docs/components/banner", description: "Display messages on the page", script: CuiDocsBannerScript }
}