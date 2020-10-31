import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

const firstExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: 'div',
            children: [
                {
                    tag: "button",
                    classes: ["cui-button", 'cui-default'],
                    text: "Open",
                    attributes: {
                        "cui-open": "#open-test-01"
                    }
                },
                {
                    tag: "div",
                    attributes: {
                        "cui-dialog": "escClose: Y, outClose: Y",
                        "id": "#open-test-01"
                    },
                    children: [
                        {
                            tag: "div",
                            classes: ["cui-dialog-header"],
                            children: [
                                { tag: "span", classes: ["cui-dialog-title"], text: "Dialog" },
                                { tag: "a", attributes: { "cui-close": "", "cui-icon": "close" } }
                            ]
                        },
                        {
                            tag: "div",
                            classes: ["cui-dialog-body"],
                            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aliquid recusandae repudiandae, ut eligendi quia iste. Voluptatibus ullam explicabo facilis necessitatibus cupiditate cum. Sed saepe excepturi tempora architecto praesentium quibusdam!"
                        }
                    ]
                }
            ]
        }
    ]
}

const secondExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "button",
            attributes: { "cui-open": "#close-cover-01" },
            text: "Open cover without animation",
            classes: ["cui-button", "cui-default"]
        },
        {
            tag: "button",
            attributes: {
                "cui-open": "target: #close-cover-02; action:.cui-anim-fade-in"
            },
            text: "Open cover with animation",
            classes: ["cui-button", "cui-default"]
        },
        {
            tag: "div",
            attributes: { "id": "close-cover-01" },
            children: [
                {
                    tag: "div",
                    classes: ["cui-dialog-container cui-padding"],
                    children: [
                        { tag: "button", attributes: { "cui-close": "#close-cover-01" }, classes: ["cui-button", "cui-default"], text: "Close cover" }
                    ]
                }

            ]
        },
        {
            tag: "div",
            attributes: { "id": "close-cover-02" },
            children: [
                {
                    tag: "div",
                    classes: ["cui-dialog-container cui-padding"],
                    children: [
                        { tag: "button", attributes: { "cui-close": "target: #close-cover-02; action:.cui-anim-fade-out" }, classes: ["cui-button", "cui-default"], text: "Close cover" }
                    ]
                }

            ]
        }
    ]
}

export const CuiDocsOpenScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Component is a javascript component and can be created by adding an <span className="style-class">cui-open</span> to any clickable element.
                As value put selector of target if it is a cUI element or target selector and action to be performed on it. If target is not provided component will choose first cUI element from the parent element (with this element excluded)
                Component Open can be used in two cases: </>,
            list: [
                { name: "", description: "To open other cUI element by invoking it's native open method" },
                { name: "", description: "To add a cui-active class to any HTML element. It can be done with animation like in cUI components" }
            ],
        },
        {
            name: "cUI targets",
            description: <>This component is handy when cooperating with other cUI components that implement an "open" event, as component emits this event to target once it detects that it is a cUI component. See example with dialog:</>,
            example: GetTabbedPreview(firstExample, "60px")
        },
        {
            name: "Non cUI target",
            description: <>If target is not a cUI component, it adds class <span className="style-class">cui-active</span> on it. Beside it can perfrom an action if timeout and action is defined.
            In pratice it means that first it adds class <span className="style-class">animation-progress</span> then triggers in the action (depending on action type it will be something different). Then after timeout, removes an action and progress class and sets active class in the end.</>,
            // example: GetTabbedPreview(firstExample, "60px")
        },
        {
            name: "Options",
            description: 'Component comes with several options:',
            properties: [
                { name: "target", defaultValue: "this", type: "selector", description: "Target selector value" },
                { name: "action", defaultValue: "null", type: "action", description: "Action to be perfromed on non-cUI elements" },
                { name: "timeout", defaultValue: "0", type: "number", description: "Timeout for action performance" },
                { name: "state", defaultValue: "", type: "string", description: "Optional value which will be passed to cUI component on open" },
                { name: "prevent", defaultValue: "false", type: "boolean", description: "After click on the element action will be performed but default behavior will be prevented" },
            ]
        },
        {
            name: "Events",
            description: "Component listens on following events:",
            list: [
                { name: "open", description: "Triggers an open action" }
            ]
        }
    ]
}