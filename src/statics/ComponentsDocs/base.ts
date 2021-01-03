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
import { CuiDocsToggleScript } from "./toggle"
import { CuiDocsOverlayScript } from "./overlay"
import { CuiDocsFloatScript } from "./float"
import { CuiDocsOffcanvas } from "./offcanvas"
import { CuiDocsHeadingsScript } from "./headings"
import { CuiDocsSeparatorScript } from "./separator"
import { CuiDocsFlexScript } from "./flex"
import { CuiDocsCloseScript } from "./close"
import { CuiDocsIconScript } from "./icon"
import { CuiDocsSpinnerScript } from "./spinner"
import { CuiDocsCoverScript } from "./cover"
import { CuiDocsWidthScript } from "./width"
import { CuiDocsSortableScript } from "./sortable"
import { CuiDocsHintScript } from "./hint"
import { CuiDocsGridScript } from "./grid"
import { CuiDocsSliderScript } from "./slider"
import { CuiDocsSwitcherScript } from "./switcher"
import { CuiDocsCircleScript } from "./circle"
import { CuiDocsPositionScript } from "./position"
import { CuiDocsOffsetScript } from "./offset"
import { CuiDocsOpenScript } from "./open"
import { CuiDocsStickyScript } from "./sticky"
import { CuiDocsIntersectionScript } from "./intersection"
import { CuiDocsScrollSpyScript } from "./scrollspy"
import { CuiDocsTransitionScript } from "./transition"
import { CuiDocsSwitchScript } from "./switch"
import { CuiDocsInputScript } from "./input"
import { CuiDocsVisibilityScript } from "./visibility"
import { CuiDocProgressScript } from "./progress"
import { CuiDocsSequenceScript } from "./sequence"
import { CuiDocsInfoBoxScript } from "./infobox"
import { CuiDocsHoverScript } from "./hover"
import { CuiDocsBorderScript } from "./border"

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
    "overlay": { name: "Overlay", uri: "/docs/components/overlay", description: "Creates simple overlay on elements", script: CuiDocsOverlayScript },
    "cover": { name: "Cover", uri: "/docs/components/cover", description: "Creates element that cover whole viewport", script: CuiDocsCoverScript },
    "drop": { name: "Drop", uri: "/docs/components/drop", description: "Creates drop and dropdowns", script: CuiDocsDropScript },
    "float": { name: "Float", uri: "/docs/components/float", description: "Movable and resizable floating elements", script: CuiDocsFloatScript },
    "navbar": { name: "Navbar", uri: "/docs/components/navbar", description: "Navigation bar for the web page", script: CuiDocsNavbarScript },
    "input": { name: "Input", uri: "/docs/components/input", description: "Set of forms and input elements", script: CuiDocsInputScript },
    "link": { name: "Link", uri: "/docs/components/link", description: "Styled anchor elements", script: CuiDocsLinkScript },
    "shadow": { name: "Shadow", uri: "/docs/components/shadow", description: "Styled anchor elements", script: CuiDocsShadowElement },
    "list": { name: "List", uri: "/docs/components/list", description: "Styled lists with options", script: CuiDocsListScript },
    "tooltip": { name: "Tooltip", uri: "/docs/components/tooltip", description: "Add little feature descriptors on hover", script: CuiDocsTooltipScript },
    "switcher": { name: "Switchers", uri: "/docs/components/switcher", description: "Switchers for lists and items styles with options", script: CuiDocsSwitcherScript },
    "hint": { name: "Hint", uri: "/docs/components/hint", description: "Highlights notices and informations between paragraphs", script: CuiDocsHintScript },
    "offcanvas": { name: "Offcanvas", uri: "/docs/components/offcanvas", description: "Highlights notices and informations between paragraphs", script: CuiDocsOffcanvas },
    "spinner": { name: "Spinner", uri: "/docs/components/spinner", description: "Simple preloaders and progress indicators", script: CuiDocsSpinnerScript },
    "table": { name: "Table", uri: "/docs/components/table", description: "Nice looking tables with many options" },
    "separator": { name: "Separator", uri: "/docs/components/separator", description: "Creates separation between blocks", script: CuiDocsSeparatorScript },
    "code": { name: "Code", uri: "/docs/components/code", description: "Styled code blocks built from span" },
    "flex": { name: "Flex", uri: "/docs/components/flex", description: "Set of options for flexible components", script: CuiDocsFlexScript },
    "grid": { name: "Grid", uri: "/docs/components/grid", description: "Simple grid implementation built on top of flex", script: CuiDocsGridScript },
    "heading": { name: "Heading", uri: "/docs/components/heading", description: "Styling options for heading elements", script: CuiDocsHeadingsScript },
    "position": { name: "Position", uri: "/docs/components/position", description: "Position", script: CuiDocsPositionScript },
    "sticky": { name: "Sticky", uri: "/docs/components/sticky", description: "Creates element that stick to specific position", script: CuiDocsStickyScript },
    "transition": { name: "Transitions", uri: "/docs/components/transition", description: "Add transitions to element on hover", script: CuiDocsTransitionScript },
    "visibility": { name: "Visibility", uri: "/docs/components/visibility", description: "Allows to show and hide elements", script: CuiDocsVisibilityScript },
    "width": { name: "Width", uri: "/docs/components/width", description: "Set of width options for components", script: CuiDocsWidthScript },
    "circle": { name: "Circle", uri: "/docs/components/circle", description: "Custom progress bar created on circle", script: CuiDocsCircleScript },
    "close": { name: "Close", uri: "/docs/components/close", description: "Allows to close other cUI components", script: CuiDocsCloseScript },
    "open": { name: "Open", uri: "/docs/components/open", description: "Allows to open other cUI components", script: CuiDocsOpenScript },
    "intersection": { name: "Intersection", uri: "/docs/components/intersection", description: "Triggers actions when elements are intersecting the viewport", script: CuiDocsIntersectionScript },
    "offset": { name: "Offset", uri: "/docs/components/offset", description: "Offset", script: CuiDocsOffsetScript },
    "scrollspy": { name: "Scrollspy", uri: "/docs/components/scrollspy", description: "Triggers specific actions on user scoll", script: CuiDocsScrollSpyScript },
    "toggle": { name: "Toggle", uri: "/docs/components/toggle", description: "Toggles an action on target element", script: CuiDocsToggleScript },
    "resize": { name: "Resize", uri: "/docs/components/resize", description: "Work in progress" },
    "icon": { name: "Icon", uri: "/docs/components/icon", description: "Predefined styles for svg icons", script: CuiDocsIconScript },
    "height": { name: "Height", uri: "/docs/components/height", description: "Customization for heights of the element" },
    "switch": { name: "Switch", uri: "/docs/components/switch", description: "Switch elements in view", script: CuiDocsSwitchScript },
    "slider": { name: "Slider", uri: "/docs/components/slider", description: "Switch elements by sliding", script: CuiDocsSliderScript },
    "sortable": { name: "Sortable", uri: "/docs/components/sortable", description: "Reorders children in list", script: CuiDocsSortableScript },
    "progress": { name: "Progress", uri: "/docs/components/progress", description: "Customized progress bars", script: CuiDocProgressScript },
    "sequence": { name: "Step sequence", uri: "/docs/components/sequence", description: "Progress Step sequence with options", script: CuiDocsSequenceScript },
    "infobox": { name: "Info box", uri: "/docs/components/infobox", description: "Highligts informations in a small box", script: CuiDocsInfoBoxScript },
    'hover': { name: "Hover", uri: "/docs/components/hover", description: "Highlights hovered element", script: CuiDocsHoverScript },
    'border': { name: "Border", uri: "/docs/components/border", description: "Adds border to page element", script: CuiDocsBorderScript },
}