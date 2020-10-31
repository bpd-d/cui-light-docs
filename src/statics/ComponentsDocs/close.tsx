import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

const firstExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "button",
            attributes: { "cui-open": "" },
            text: "Open dialog",
            classes: ["cui-button", "cui-default"]
        },
        {
            tag: "div",
            attributes: { "cui-dialog": "" },
            children: [
                {
                    tag: "div",
                    classes: ["cui-dialog-container cui-padding"],
                    children: [
                        { tag: "button", attributes: { "cui-close": "" }, classes: ["cui-button", "cui-default"], text: "Close dialog" }
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

export const CuiDocsCloseScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Component <span className="style-element">close</span> is used to close cUI components (like dialog or float) or remove <span className="style-class">cui-active</span> class from HTML element followed by action, e.g. animation.
            To use this component add HTML element with attribute <span className="style-class">cui-close</span>.
            As value put target selector so component can query an element to interact with.
            If no value is provided them it will be looking for nearest parent that is a cUI component.
            Example below shows interaction with dialog:</>,
            example: GetTabbedPreview(firstExample, "60px")
        },
        {
            name: "Custom element",
            description: <>Component can also close component that is not a cUI element.
            In that case it just removes class <span className="style-class">cui-active</span> from HTML element.
            This can be done with or without an animation, depending on whether action is provided or not.
            In case of HTML element target selector must be provided. Following examples show closing a cover with and without animation:</>,
            example: GetTabbedPreview(secondExample, "60px")
        },
        {
            name: "Options",
            description: "Component close provides support for following options:",
            properties: [
                { name: "target", defaultValue: "this", type: "selector", description: "Target selector value" },
                { name: "action", defaultValue: "null", type: "action", description: "Action to be perfromed on non-cUI elements" },
                { name: "timeout", defaultValue: "0", type: "number", description: "Timeout for action performance" },
                { name: "state", defaultValue: "", type: "string", description: "Optional value which will be passed to cUI component on close" },
                { name: "prevent", defaultValue: "false", type: "boolean", description: "After click on the element action will be performed but default behavior will be prevented" },
            ]
        },
        {
            name: "API",
            description: `To make HTML element compatible with this component, add styling for to states in CSS: with class cui-active and without it. 
            Element that doesn't have cui-active should be generally unavailable for the user, e.g. hidden. This class shall make component available or visible. 
            Close component supports also element animation (on transition). To make it work with CSS, use mixin called not-animation-or-active to style not active state.`
        }

    ]
}