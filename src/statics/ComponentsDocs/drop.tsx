import { Children } from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";

{/* <div className="cui-drop-trigger" >
    <a className="cui-icon-button cui-accent cui-box-shadow" cui-icon="git"></a>
    <div className="cui-drop cui-dropdown cui-drop-top-right" cui-drop="mode: click; autoClose: y; outClose: y">
        <span className="cui-icon-margin cui-icon cui-padding-small cui-text-bold" cui-icon="git"> Git links</span>
        <ul className="cui-drop-nav">
            <li><a href="https://github.com/bpd-d/cui-light">cUI Light</a></li>
            <li><a href="https://github.com/bpd-d/cui-styles">cUI Styles</a></li>
            <li><a href="https://github.com/bpd-d/cui-icons">cUI Icons</a></li>
        </ul>
    </div>
</div> */}

function createDrop(options: string, classes: string, content: ParserNode[]): ParserNode {
    return {
        tag: "div",
        classes: ["cui-drop-trigger"],
        children: [
            {
                tag: "a",
                classes: ["cui-button"],
                text: "Drop trigger"
            },
            {
                tag: "div",
                classes: ["cui-dropdown", classes],
                attributes: {
                    "cui-drop": options
                },
                children: content
            }
        ]
    }
}

function getSimpleContent(text: string): ParserNode {
    return {
        tag: "span",
        classes: ["cui-padding"],
        text: text
    }
}

function getList(): ParserNode {
    return {
        tag: "ul",
        classes: ["cui-drop-nav"],
        children: [
            getListItem("Item 1"),
            getListItem("Item 2"),
            getListItem("Item 3")
        ]
    }
}

function getListItem(text: string): ParserNode {
    return {
        tag: "li",
        children: [
            {
                tag: "a",
                text: text
            }
        ]

    }
}

export const dropExample: ParserNode = createDrop("", "", [getSimpleContent("Drop content")])
export const dropNavExample: ParserNode = createDrop("", "", [getList()])
export const dropHoverExample: ParserNode = createDrop("mode: hover", "", [getList()])
export const dropAutoExample: ParserNode = createDrop("autoClose: Y", "", [getList()])

export const CuiDocsDropScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: `To create drop component add a drop container by creating a div with class cui-drop-trigger. 
            Then put a element that will trigger a drop to a container. By default it should be an anchor or a button.
            Add a dialog component - it is a div with attribute cui-dialog:`,
            example: GetTabbedPreview(dropExample, "160px")
        },
        {
            name: "Navigation",
            description: `To add navigation list to dropdown add ul with class cui-drop-nav:`,
            example: GetTabbedPreview(dropNavExample, "200px")
        },
        {
            name: "Position",
            description: `Dropdown can be placed in any position in relation to the parent element. It is calculated automatically based on drop size and trigger position. 
            Default position is: bottom-left, however this can be changed by setting option pos to one of following values:`,
            list: [
                { name: "top-left", description: "Places dropdown in top left corner of the parent" },
                { name: "top-center", description: "Places dropdown in top part of the parent" },
                { name: "top-right", description: "Places dropdown in top left corner of the parent" },
                { name: "bottom-left", description: "Places dropdown in bottom left corner of the parent" },
                { name: "bottom-center", description: "Places dropdown in bottom part of the parent" },
                { name: "bottom-right", description: "Places dropdown in bottom right corner of the parent" },
            ]
        },
        {
            name: "Hover",
            description: "If you want to open drop by hovering a trigger, set option mode: hover to cui-drop:",
            example: GetTabbedPreview(dropHoverExample, "200px")
        },
        {
            name: "Auto close",
            description: "To make dropdown close automatically after user stops hovering it, set option autoClose: Y:",
            example: GetTabbedPreview(dropAutoExample, "200px")
        },
        {
            name: "Options",
            description: "Here is a list of all options supported by cui-drop:",
            properties: [
                { name: "mode", description: "Sets trigger mode", type: "click | hover", defaultValue: "click" },
                { name: "trigger", description: "Selector for trigger element", type: "string", defaultValue: "> a, button" },
                { name: "prevent", description: "Prevents default click/hover event behavior on trigger", type: "boolean", defaultValue: "false" },
                { name: "outClose", description: "Click outside of drop area will close it", type: "boolean", defaultValue: "true" },
                { name: "autoClose", description: "Automatically closes drop after timeout when user not hovering drop area", type: "boolean", defaultValue: "false" },
                { name: "pos", description: "Dropdown position in relation to trigger", type: "string", defaultValue: "bottom-left" },
                { name: "margin", description: "Drop margin from trigger", type: "number", defaultValue: "8" },
                { name: "timeout", description: "Timeout (in ms) for auto close task", type: "number", defaultValue: "3000" },
            ]
        },
        {
            name: "Events",
            description: "Drop supports follwing events:",
            list: [
                { name: "open", description: "Openes a drop component" },
                { name: "close", description: "Closes a drop component" },
            ]
        },
        {
            name: "Emits",
            description: "Drop emits follwing events:",
            list: [
                { name: "opened", description: "Emitted after component is opened" },
                { name: "closed", description: "Emitted after component is closed" },
            ]
        },
        {
            name: "CSS options",
            description: "Component name is drop and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "print", description: "Adds print mode styling" },
                { name: "animation", description: "Adds default animation/transition classes" },
                { name: "dropdown", description: "Adds dropdown classes" },
                { name: "nav", description: "Adds drop navigation classes" },
            ]
        }
    ]
}