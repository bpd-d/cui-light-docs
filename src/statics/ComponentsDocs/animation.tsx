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

function createAnimation(name: string, id: string, animClass: string, cls?: string): ParserNode {
    let toggle = `target: #${id}; action: .${animClass}`
    let baseCls = ["cui-flex"]
    if (cls) {
        baseCls.push(cls);
    }
    return {
        tag: "div",
        classes: baseCls,
        children: [
            {
                tag: "button",
                classes: ['cui-button'],
                attributes: {
                    "cui-toggle": toggle
                },
                text: "Toggle " + name
            },
            {
                tag: "div",
                text: animClass,
                classes: ["cui-container", "cui-accent", 'cui-flex-grow'],
                attributes: {
                    "id": id
                }
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

const fadeExample: ParserNode = {
    tag: "div",
    children: [
        createAnimation("fade in", "fade-in-001", "cui-animation-fade-in"),
        createAnimation("fade out", "fade-out-001", "cui-animation-fade-out", "cui-margin-top"),
    ]
}

const scaleExample: ParserNode = {
    tag: "div",
    children: [
        createAnimation("scale in", "scale-in-001", "cui-animation-scale-in"),
        createAnimation("scale out", "scale-out-001", "cui-animation-scale-out", "cui-margin-top"),
    ]
}

const slideExample: ParserNode = {
    tag: "div",
    children: [
        createAnimation("slide in left", "slide-in-001", "cui-animation-slide-in-left"),
        createAnimation("slide out left", "slide-out-001", "cui-animation-slide-out-left", "cui-margin-top"),
        createAnimation("slide in right", "slide-in-002", "cui-animation-slide-in-right", "cui-margin-top"),
        createAnimation("slide out right", "slide-out-002", "cui-animation-slide-out-right", "cui-margin-top"),
        createAnimation("slide in bottom", "slide-in-003", "cui-animation-slide-in-bottom", "cui-margin-top"),
        createAnimation("slide out bottom", "slide-out-003", "cui-animation-slide-out-bottom", "cui-margin-top"),
        createAnimation("slide in top", "slide-in-004", "cui-animation-slide-in-top", "cui-margin-top"),
        createAnimation("slide out top", "slide-out-004", "cui-animation-slide-out-top", "cui-margin-top"),
    ]
}

const hopExample: ParserNode = {
    tag: "div",
    children: [
        createAnimation("hop in", "hop-in-001", "cui-animation-hop-in"),
        createAnimation("hop out", "hop-out-001", "cui-animation-hop-out", "cui-margin-top"),
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
        },
        {
            name: "Fade",
            description: <>cUI supports following animations with fade effect:</>,
            list: [
                { name: "cui-animation-fade-in", description: "" },
                { name: "cui-animation-fade-out", description: "" },
            ],
            example: GetTabbedPreview(fadeExample, "130px")
        },
        {
            name: "Scale",
            description: <>cUI supports following animations with scale effect:</>,
            list: [
                { name: "cui-animation-scale-in", description: "" },
                { name: "cui-animation-scale-out", description: "" },
            ],
            example: GetTabbedPreview(scaleExample, "130px")
        },
        {
            name: "Slide",
            description: <>cUI supports following animations with slide effect:</>,
            list: [
                { name: "cui-animation-slide-in-left", description: "" },
                { name: "cui-animation-slide-out-left", description: "" },
                { name: "cui-animation-slide-in-right", description: "" },
                { name: "cui-animation-slide-out-right", description: "" },
                { name: "cui-animation-slide-in-top", description: "" },
                { name: "cui-animation-slide-out-top", description: "" },
                { name: "cui-animation-slide-in-bottom", description: "" },
                { name: "cui-animation-slide-out-bottom", description: "" },
            ],
            example: GetTabbedPreview(slideExample, "450px")
        },
        {
            name: "Hop",
            description: <>cUI supports following animations with hop effect:</>,
            list: [
                { name: "cui-animation-hop-in", description: "" },
                { name: "cui-animation-hop-out", description: "" },
            ],
            example: GetTabbedPreview(hopExample, "130px")
        },
        {
            name: "CSS options",
            description: "Component name is animations and supports following CSS build options:",
            list: [
                { name: "repeat", description: "Adds transition reverse options" },
                { name: "fade", description: "Adds fade animation classes" },
                { name: "scale", description: "Adds scale animation classes" },
                { name: "slide", description: "Adds slide animation classes" },
                { name: "hop", description: "Adds hop animation classes" },
            ]
        }
    ]
}