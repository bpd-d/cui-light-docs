import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

const firstExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "button",
            attributes: {
                "cui-open": "#float-test-01"
            },
            styleClass: "cui-button",
            text: "Open Float"
        },
        {
            tag: "div",
            styleClass: "float-initial-size",
            attributes: {
                "cui-float": "",
                "id": "float-test-01",
            },
            children: [
                {
                    tag: "div",
                    styleClass: "cui-float-container",
                    children: [
                        {
                            tag: "a",
                            classes: ["cui-float-move"]
                        }, {
                            tag: "a",
                            classes: ["cui-float-resize"]
                        },
                        {
                            tag: "div",
                            classes: ["cui-float-content"],
                            children: [{
                                tag: "div",
                                classes: ["cui-card"],
                                children: [
                                    {
                                        tag: "div",
                                        classes: ["cui-card-header", "cui-flex", "cui-right"],
                                        children: [
                                            {
                                                tag: "a",
                                                attributes: {
                                                    "cui-close": "",
                                                    "cui-icon": "close"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        tag: "div",
                                        classes: ["cui-card-body"],
                                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                                    }
                                ]
                            }]
                        }
                    ]
                }
            ]

        }

    ]
}


export const CuiDocsFloatScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: `Creates simple floating component that can be moved around the viewport and resized. 
                        It also comes with some requirements in terms of classes and components that have to be set. Div with class cui-float is a base element.
                        Inside of it, there shall be another with class cui-float-container.
                        There can (but don't have to) be a two anchor elements inside of container: cui-float-move and cui-float-resize.
                        They will capture user actions on float. If any of them doesn't exist, component will work, but user will not be able to interact with either moving or resizing.
                        Float content shall be placed in cui-float-content`,
            example: GetTabbedPreview(firstExample, "100px")
        },
        {
            name: "Options",
            description: "Component float supports following options:",
            properties: [
                { name: "escClose", type: "boolean", defaultValue: "false", description: "Closes a float after Esc keyboard key was pressed" },
                { name: "keyClose", type: "string", defaultValue: "undefined", description: "Assign keyboard key to closing a dialog with" },
                { name: "openAct", type: "action", defaultValue: "cui-dialog-default-in", description: "Animation action opening float" },
                { name: "closeAct", type: "action", defaultValue: "cui-dialog-default-out", description: "Animation action closing float" },
                { name: "timeout", type: "number", defaultValue: "default long", description: "Animation timeout" }
            ]
        },
        {
            name: "Events",
            description: "Float support for following events:",
            list: [
                { name: "open", description: "Shows float if not opened" },
                { name: "close", description: "Hides float if opened" }
            ]
        },
        {
            name: "Emits",
            description: "Float emits following events:",
            list: [
                { name: "opened", description: "Emitted after float is opened" },
                { name: "closed", description: "Emitted after float is closed" }
            ]
        }

    ]
}