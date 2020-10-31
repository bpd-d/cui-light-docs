import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function createCover(id: string, opts?: string): ParserNode {
    return {
        tag: "div",
        attributes: {
            "cui-cover": opts ?? "",
            "id": id
        },
        children: [
            {
                tag: "div",
                styleClass: "cui-cover-container cui-padding",
                children: [
                    {
                        tag: "div",
                        classes: ["cui-flex", "cui-right"],
                        children: [
                            {
                                tag: "button",
                                attributes: {
                                    "cui-close": "",
                                    "cui-icon": "close"
                                },
                                styleClass: "cui-icon-button cui-default"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

function createCoverBlock(id: string, opts?: string): ParserNode {
    return {
        tag: "div",
        children: [
            {
                tag: "button",
                classes: ["cui-button", "cui-default"],
                text: "Open cover",
                attributes: {
                    "cui-open": "#" + id
                }
            },
            createCover(id, opts)
        ]
    }
}

const firstExample = createCoverBlock("cover-01");
const secondExample = createCoverBlock("cover-02", "escClose: Y");

export const CuiDocsCoverScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Cover is a component that covers fill whole viewport giving an additional space on the page.
            It can be used in e.g. image galleries to present larger version of images. Cover works the same way as any other openable cUI component.
            Component consists from main element, <span className="style-class">cui-cover</span>, and element inside with class <span className="style-class">cui-cover-container</span> that fills out the viewport and holds cover content.</>,
            example: GetTabbedPreview(firstExample, "60px")
        },
        {
            name: "Key close",
            description: <>Like any other openable components, cover can be closed by a keyboard key.
            To add enable this option add <span className="style-class">escClose: Y</span> to component options:</>,
            example: GetTabbedPreview(secondExample, "60px")
        },
        {
            name: 'Options',
            description: "Cover supports following options:",
            properties: [
                { name: "escClose", type: "boolean", defaultValue: "false", description: "Escape keyboard button should close opened cover" },
                { name: "keyClose", type: "string", defaultValue: "undefined", description: "Assign keyboard key to closing a cover with" },
                { name: "openAct", type: "action", defaultValue: "cui-anim-fade-in", description: "Animation action opening cover" },
                { name: "closeAct", type: "action", defaultValue: "cui-anim-fade-out", description: "Animation action closing cover" },
                { name: "timeout", type: "number", defaultValue: "default", description: "Animation timeout" }
            ],
        },
        {
            name: "Events",
            description: "Cover support for following events:",
            list: [
                { name: "open", description: "Shows cover if not opened" },
                { name: "close", description: "Hides cover if opened" }
            ]
        },
        {
            name: "Emits",
            description: "Cover emits following events:",
            list: [
                { name: "opened", description: "Emitted after cover is opened" },
                { name: "closed", description: "Emitted after cover is closed" }
            ]
        }
    ]
}