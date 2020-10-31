import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function createParent(children: ParserNode[]): ParserNode {
    return {
        tag: "div",
        children: children
    }
}

function createOffcanvas(id: string, text: string, attr?: string): ParserNode {
    return {
        tag: "div",
        attributes: {
            "cui-off-canvas": attr ?? "",
            "id": id
        },
        children: [
            {
                tag: "div",
                classes: ["cui-off-canvas-container"],
                children: [
                    {
                        tag: "div",
                        classes: ["cui-card"],
                        children: [
                            {
                                tag: "div",
                                classes: ["cui-card-header", "cui-flex", "cui-right"],
                                children: [
                                    { tag: "a", attributes: { "cui-icon": "close", "cui-close": "" } }
                                ]
                            },
                            {
                                tag: "div",
                                classes: ["cui-card-body"],
                                text: text
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

function createPair(id: string, btnText: string, containerText: string, attr?: string): ParserNode[] {
    return [{
        tag: "button",
        classes: ['cui-button'],
        attributes: {
            "cui-open": "#" + id,
        },
        text: btnText
    },
    createOffcanvas(id, containerText, attr)]
}

export const firstExample: ParserNode = createParent(
    [
        ...createPair("off-can-test-001", "Open offcanvas", "Offcanvas default right"),
    ]
)

export const secondExample: ParserNode = createParent([
    ...createPair("off-can-test-002", "Open left", "Offcanvas default left", "position: left"),
])

export const thirdExample: ParserNode = createParent([
    ...createPair("off-can-test-003", "Open custom", "Offcanvas default", "openAct: .cui-animation-fade-in; closeAct: .cui-animation-fade-out"),
])

export const CuiDocsOffcanvas: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Offcanvas creates component that is placed on either left or right side of the viewport and takes whole height.
            Useful on mobile devices to hold navgiation that normally is kept in navbar.
            To create offcanvas add <span className="style-element">div</span> with attribute <span className="style-class">cui-off-canvas</span>.
            This will create element that takes size of whole viewport when opened. Put a <span className="style-element">div</span> element with class <span className="style-class">cui-off-canvas-container</span> to create content area:</>,

            example: GetTabbedPreview(firstExample, "60px")
        },
        {
            name: "Left",
            description: <>To place offcanvas on the left side of the screen, add option <span className="style-class">position: left</span> to the component</>,
            example: GetTabbedPreview(secondExample, "60px")
        },
        {
            name: "Customization",
            description: <>Offcanvas may be customized by changing open/close animation.
            Animation engine used in this component just toggles an action that defines animation for the time of timeout. When it ends, action gets reverted.
            To change animations it is enough to set class in openCls or closeCls option in component's attribute:</>,
            example: GetTabbedPreview(thirdExample, "60px")
        },
        {
            name: "Options",
            description: "Component comes with several options:",
            properties: [
                { name: "escClose", type: "boolean", defaultValue: "false", description: "Offcanvas can be closed by pressing Esc button on the keyboard" },
                { name: "outClose", type: "boolean", defaultValue: "false", description: "Offcanvas can be closed by clicking outside of container area" },
                { name: "position", type: "string", defaultValue: "right", description: "Offcanvas position: left or right" },
                { name: "openAct", type: "string", defaultValue: ".cui-offcanvas-default-right-in", description: "Offcanvas show animation" },
                { name: "closeAct", type: "string", defaultValue: ".cui-offcanvas-default-right-out", description: "Offcanvas hide animation" },
                { name: "timeout", type: "number", defaultValue: "300", description: "Open/close animation time" },
            ]
        },
        {
            name: "Events",
            description: "Offcanvas support for following events:",
            list: [
                { name: "open", description: "Shows offcanvas if not opened" },
                { name: "close", description: "Hides offcanvas if opened" }
            ]
        },
        {
            name: "Emits",
            description: "Cover emits following events:",
            list: [
                { name: "opened", description: "Emitted after offcanvas is opened" },
                { name: "closed", description: "Emitted after offcanvas is closed" }
            ]
        }
    ]
}