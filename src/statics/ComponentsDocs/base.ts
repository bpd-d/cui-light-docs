import { ScriptSection, DocsScript } from "../../components/docs/base"
import { BreadrumbScript } from "./breadcrumb"
import { CuiDocsSectionScript } from "./section"
import { CuiDocsContainerScript } from "./container"
import { CuiDocsComponentButtonScript } from "./button"
import { CuiDocsComponentBadge } from "./badge"
import { Introduction } from "./intro"
import { CuiDocsBannerScript } from "./banner"
import { CuiDocsCardScript } from "./card"
import { CuiDocsTextScript } from "./text"
import { AccordionDocsScript } from "./accordion"
import { CuiDocsBackgroundScript } from "./background"
import { CuiDocsSpacesScript } from "./spaces"
import { CuiDocsDialogScript } from "./dialog"
import { CuiDocsLinkScript } from "./link"
import { CuiDocsShadowElement } from "./shadow"
import { CuiDocsListScript } from "./list"
import { CuiDocsDropScript } from "./drop"
import { CuiDocsAlertScript } from "./alert"
import { CuiDocsTooltipScript } from "./tooltip"
import { CuiDocsNavbarScript } from "./navbar"

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

export const cuiComponents: CuiDocsComponents = {
    "container": { name: "Container", uri: "/docs/components/container", description: "Help to groups smaller components", script: CuiDocsContainerScript },
    "section": { name: "Section", uri: "/docs/components/section", description: "Makes creating components groups easy", script: CuiDocsSectionScript },
    "button": { name: "Button", uri: "/docs/components/button", description: "Styled options for buttons", script: CuiDocsComponentButtonScript, illustration: "illustration_button" },
    "card": { name: "Card", uri: "/docs/components/card", description: "Creates wrapper to organize your data", script: CuiDocsCardScript },
    "breadcrumb": { name: "Breadcrumb", uri: "/docs/components/breadcrumb", description: "Makes subpage navigation more accessible", script: BreadrumbScript },
    "badge": { name: "Badge", uri: "/docs/components/badge", description: "Provides pretty indicators to other elements", script: CuiDocsComponentBadge },
    "accordion": { name: "Accordion", uri: "/docs/components/accordion", description: "Helps to display a grouped data", script: AccordionDocsScript },
    "introduction": { name: "Introduction", uri: "/docs/components/introduction", description: "This is introduction", script: Introduction },
    "banner": { name: "Banner", uri: "/docs/components/banner", description: "Display messages on the page", script: CuiDocsBannerScript },
    "text": { name: "Text", uri: "/docs/components/text", description: "Brings some handy classes that style text elements on the page", script: CuiDocsTextScript },
    "background": { name: "Background", uri: "/docs/components/background", description: "Gives some basic styling to backgroun image", script: CuiDocsBackgroundScript },
    "spaces": { name: "Spaces", uri: "/docs/components/spaces", description: "Add some space to the components", script: CuiDocsSpacesScript },
    "dialog": { name: "Dialog", uri: "/docs/components/dialog", description: "Creates modal dialog", script: CuiDocsDialogScript },
    "alert": { name: "Alert", uri: "/docs/components/alert", description: "Easy to use, interactive dialog", script: CuiDocsAlertScript },
    "animation": { name: "Animation", uri: "/docs/components/animation", description: "Add some animations to components" },
    "overlay": { name: "Overlay", uri: "/docs/components/overlay", description: "Creates simple overlay on elements" },
    "cover": { name: "Cover", uri: "/docs/components/cover", description: "Creates element that cover whole viewport" },
    "drop": { name: "Drop", uri: "/docs/components/drop", description: "Creates drop and dropdowns", script: CuiDocsDropScript },
    "float": { name: "Float", uri: "/docs/components/float", description: "Movable and resizable floating elements" },
    "navbar": { name: "Navbar", uri: "/docs/components/navbar", description: "Navigation bar for the web page", script: CuiDocsNavbarScript },
    "input": { name: "Input", uri: "/docs/components/input", description: "Set of forms and input elements" },
    "link": { name: "Link", uri: "/docs/components/link", description: "Styled anchor elements", script: CuiDocsLinkScript },
    "shadow": { name: "Shadow", uri: "/docs/components/shadow", description: "Styled anchor elements", script: CuiDocsShadowElement },
    "list": { name: "List", uri: "/docs/components/list", description: "Styled lists with options", script: CuiDocsListScript },
    "tooltip": { name: "Tooltip", uri: "/docs/components/tooltip", description: "Add little feature descriptors on hover", script: CuiDocsTooltipScript },
}