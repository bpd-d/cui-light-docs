import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";
export const firstExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "button",
            classes: ['cui-button'],
            attributes: {
                "cui-toggle": "target: #toggle-test-01; action: .cui-accent"
            },
            text: "Toggle"
        },
        {
            tag: "div",
            text: "Container",
            classes: ["cui-container"],
            attributes: {
                "id": "toggle-test-01"
            }
        }
    ]
}

export const secondExample: ParserNode = {
    tag: "button",
    classes: ["cui-button"],
    attributes: {
        "cui-toggle": "action: ~dark-mode"
    },
    text: "Toggle dark mode"
}
export const CuiDocsToggleScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Toggle is a javascript component that doesn't bring any visual styling but may be used to toggle class or inbound actions on target:</>,
            example: GetTabbedPreview(firstExample, "100px")
        },
        {
            name: "Inbound actions",
            description: <>Toggle can trigger also an inbound action, so far only light mode toggeling is supported. Inbound action is prefixed with ~:</>,
            example: GetTabbedPreview(secondExample, "100px")
        },
        {
            name: "Events",
            description: "Toggle component supports following event: ",
            list: [
                { name: "toggle", description: "Performs toggle" }
            ]
        },
        {
            name: "Emits",
            description: "Toggle component emits following event: ",
            list: [
                { name: "toggled", description: "Emitted after toggle action is completed" }
            ]
        }
    ]
}