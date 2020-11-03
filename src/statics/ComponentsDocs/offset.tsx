import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";


const firstExample: ParserNode = {
    tag: "div",
    classes: ["offset-parent", "cui-overflow-y-auto"],
    attributes: {
        "cui-offset": "target: #offset-test-01; action: .cui-not-visible; offsetY: 200"
    },
    children: [
        {
            tag: "div",
            children: [
                {
                    tag: "div",
                    classes: ["cui-padding", "cui-background-default", "cui-position-top", "cui-sticky"],
                    text: "Sticky",
                    attributes: {
                        "id": "offset-test-01"
                    }
                },
                {
                    tag: "p",
                    classes: ["offset-first-child", "cui-background-accent"],
                },
                {
                    tag: "p",
                    classes: ["offset-second-child", "cui-background-secondary"],
                }
            ]
        }
    ]
}

const secondExample: ParserNode = {
    tag: "div",
    classes: ["offset-parent", "cui-overflow-y-auto"],
    attributes: {
        "cui-offset": "target: #offset-test-01; action: .cui-not-visible; offsetY: 200; mode: dynamic"
    },
    children: [
        {
            tag: "div",
            children: [
                {
                    tag: "div",
                    classes: ["cui-padding", "cui-background-default", "cui-position-top", "cui-sticky"],
                    text: "Sticky",
                    attributes: {
                        "id": "offset-test-01"
                    }
                },
                {
                    tag: "p",
                    classes: ["offset-first-child", "cui-background-accent"],
                },
                {
                    tag: "p",
                    classes: ["offset-second-child", "cui-background-secondary"],
                }
            ]
        }
    ]
}

export const CuiDocsOffsetScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Component is used to trigger an action on target when user scroll passes certain point in scrollable container.
            To create such component, add attribute <span className="style-class">cui-offset</span> to scrollable container, set target, action and offset value - don't set offset value which will not be in use, e.g. if container scrolls vertically only then don't set offsetX.
            To add offset to document root, set option <span className="style-class">root</span> to <span className="style-element">true</span></>,
            example: GetTabbedPreview(firstExample, "320px")
        },
        {
            name: "Mode",
            description: <>Offset can work in two modes: static and dynamic.
            First one, default, triggers an action after offset is reached and reverts it on the way back.
            Second mode also triggers action after reaching the offset, but after that point behavior changes. On scroll up action is reverted, on scroll down action is triggered on: </>,
            example: GetTabbedPreview(secondExample, "320px")
        },
        {
            name: "Options",
            description: `Offset supports following options:`,
            properties: [
                { name: "target", type: "selector", defaultValue: "null", description: "Target element to trigger actions on" },
                { name: "action", type: "actions", defaultValue: "null", description: "Actions to trigger" },
                { name: "offsetY", type: "number", defaultValue: "-1", description: "Value of vertical offset point" },
                { name: "offsetX", type: "number", defaultValue: "-1", description: "Value of horizontal offset point" },
                { name: "root", type: "boolean", defaultValue: "false", description: "Determines whether scroll shall be attached to document root" },
                { name: "mode", type: "string", defaultValue: "static", description: "Defines working mode" },
            ]
        },
        {
            name: "Emits",
            description: `Offset emits following events:`,
            list: [
                { name: "offset", description: "Emitted when action is triggered on and off and perodically every certain amount of pixels" }
            ]
        }
    ]
}