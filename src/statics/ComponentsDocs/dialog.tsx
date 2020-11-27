import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

export function createDialog(id: string, name: string, body: string, options: string): ParserNode {
    return {
        tag: "div",
        classes: ["cui-dialog"],
        attributes: {
            "cui-dialog": options,
            "id": id
        },
        children: [
            {
                tag: "div",
                classes: ["cui-dialog-container"],
                children: [
                    {
                        tag: "div", classes: ["cui-dialog-header"], children: [
                            { tag: "span", classes: ["cui-dialog-title"], text: name },
                            {
                                tag: "a", classes: ["cui-icon", "cui-icon-button"], attributes: {
                                    "cui-icon": "close",
                                    "cui-close": ""
                                }
                            }
                        ]
                    },
                    {
                        tag: "div", classes: ["cui-dialog-body"], children: [
                            { tag: "p", text: body }
                        ]
                    },
                    { tag: "div", classes: ["cui-dialog-footer"], text: "Footer" }
                ]
            }
        ]
    }
}

export const dialogExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "button",
            styleClass: "cui-button cui-default",
            text: "Open dialog",
            attributes: {
                "cui-open": "#dialog-example-1"
            }
        },
        createDialog("dialog-example-1", "Dialog", "Dialog example", "")
    ]
}

export const dialogOptionsExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "button",
            styleClass: "cui-button cui-default",
            text: "Open dialog",
            attributes: {
                "cui-open": "#dialog-example-2"
            }
        },
        createDialog("dialog-example-2", "Dialog", "Press Esc button on keyboard or click outside of dialog container", "escClose: Y; outClose: Y")
    ]
}

export const CuiDocsDialogScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: `To create a dialog add a div element with class cui-dialog and the same attribute. 
            Inside create another div with class cui-dialog-container - this will create actual component.`
        },
        {
            name: "Structure",
            description: `Dialog container consists of three main parts, similar to card: header, body and footer:`,
            example: GetTabbedPreview(dialogExample, "60px")
        },
        {
            name: "Options",
            description: "Dialog comes with few options:",
            properties: [
                { name: "outClose", type: "boolean", defaultValue: "false", description: "Click outside a dialog container should close opened dialog" },
                { name: "escClose", type: "boolean", defaultValue: "false", description: "Escape keyboard button should close opened dialog" },
                { name: "keyClose", type: "string", defaultValue: "undefined", description: "Assign keyboard key to closing a dialog with" },
                { name: "openAct", type: "action", defaultValue: "cui-dialog-default-in", description: "Animation action opening dialog" },
                { name: "closeAct", type: "action", defaultValue: "cui-dialog-default-out", description: "Animation action closing dialog" },
                { name: "timeout", type: "number", defaultValue: "default long", description: "Animation timeout" }
            ],
            example: GetTabbedPreview(dialogOptionsExample, "60px")
        },
        {
            name: "Events",
            description: "Dialog component attaches to few cUI events:",
            list: [
                { name: "open", description: "Shows dialog if not opened" },
                { name: "close", description: "Hides dialog if opened" }
            ]
        },
        {
            name: "Emits",
            description: "Dialog emits following events:",
            list: [
                { name: "opened", description: "Emitted after dialog is opened" },
                { name: "closed", description: "Emitted after dialog is closed" }
            ]
        },
        {
            name: "CSS options",
            description: "Component name is dialog and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "print", description: "Adds print mode styling" },
                { name: "animation", description: "Adds default animation/transition classes" },
                { name: "responsive", description: "Adds responsive styling to dialog" }
            ]
        }
    ]
}