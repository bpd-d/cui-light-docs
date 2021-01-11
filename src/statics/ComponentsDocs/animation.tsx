import * as React from "react";
import { ParserNode } from "src/api/DocsElementParser/interfaces";
import { DocsScript } from "src/components/docs/base";
import { GetTabbedPreview } from "../../../src/components/preview/preview";

function create(animation: string, text: string): ParserNode {
    return {
        tag: "div",
        children: [
            {
                tag: "button",
                classes: ['cui-button', 'cui-badge-area'],
                text: text,
                children: [
                    {
                        tag: "span",
                        classes: ["cui-badge", "cui-accent", animation],
                        text: "9"
                    }
                ]
            }
        ]
    }
}

const example: ParserNode = {
    tag: "div",
    children: [
        create("cui-animation-pulse", "Pulse"),
        create("cui-animation-blink", "Blink"),
        create("cui-animation-shake", "Shake"),
    ]
}

export const CuiDocsAnimationScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Animations in cUI help bring user attention to certain component. There are some available right now:</>,
            list: [
                { name: "cui-animation-pulse", description: "" },
                { name: "cui-animation-blink", description: "" },
                { name: "cui-animation-shake", description: "" },
            ],
            example: GetTabbedPreview(example, "130px")
        }
    ]
}