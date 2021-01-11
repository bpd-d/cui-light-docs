import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";

function createTransition(text: string, transition: string, cls?: string): ParserNode {
    return {
        tag: "div",
        classes: [cls ?? ""],
        children: [
            {
                tag: "p",
                text: text
            },
            {
                tag: "div",
                classes: ["cui-transition-trigger", "cui-section", "cui-background-accent", "cui-flex-center"],
                children: [
                    {
                        tag: "div",
                        classes: ["cui-overlay-light", 'cui-padding', transition],
                        text: text,
                    }
                ]
            }
        ]
    }
}

const firstExample: ParserNode = {
    tag: 'div',
    children: [
        createTransition("Fade", "cui-transition-fade"),
        createTransition("Scale", "cui-transition-scale", "cui-margin-top"),
        createTransition("Slide Top", "cui-transition-slide-top", "cui-margin-top"),
        createTransition("Slide Bottom", "cui-transition-slide-bottom", "cui-margin-top"),
        createTransition("Slide Left", "cui-transition-slide-left", "cui-margin-top"),
        createTransition("Slide Right", "cui-transition-slide-right", "cui-margin-top"),
        createTransition("Slide Top Small", "cui-transition-slide-top--s", "cui-margin-top"),
        createTransition("Slide Bottom Small", "cui-transition-slide-bottom--s", "cui-margin-top"),
        createTransition("Slide Left Small", "cui-transition-slide-left--s", "cui-margin-top"),
        createTransition("Slide Right Small", "cui-transition-slide-right--s", "cui-margin-top"),
    ]
}

const secondExample: ParserNode = {
    tag: 'div',
    children: [
        createTransition("Fade", "cui-transition-fade-reverse"),
        createTransition("Scale", "cui-transition-scale-reverse", "cui-margin-top"),
        createTransition("Slide Top", "cui-transition-slide-reverse-top", "cui-margin-top"),
        createTransition("Slide Bottom", "cui-transition-slide-reverse-bottom", "cui-margin-top"),
        createTransition("Slide Left", "cui-transition-slide-reverse-left", "cui-margin-top"),
        createTransition("Slide Right", "cui-transition-slide-reverse-right", "cui-margin-top"),
        createTransition("Slide Top Small", "cui-transition-slide-reverse-top--s", "cui-margin-top"),
        createTransition("Slide Bottom Small", "cui-transition-slide-reverse-bottom--s", "cui-margin-top"),
        createTransition("Slide Left Small", "cui-transition-slide-reverse-left--s", "cui-margin-top"),
        createTransition("Slide Right Small", "cui-transition-slide-reverse-right--s", "cui-margin-top"),
    ]
}


export const CuiDocsTransitionScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Transition effects can be used to reveal target element once it's parent gets hovered or focused on.
            To set it up add class <span className="style-class">cui-transition-trigger</span> to the element that will be focused.
            Next add one of listed classes to child elment that should be transitioned in:</>,
            list: [
                { name: "cui-transition-fade", description: "Changes opacity of the element" },
                { name: "cui-transition-scale", description: "Changes scale of the element" },
                { name: "cui-transition-slide-top", description: "Slides element from the top" },
                { name: "cui-transition-slide-bottom", description: "Slides element from the bottom" },
                { name: "cui-transition-slide-left", description: "Slides element from the left" },
                { name: "cui-transition-slide-right", description: "Slides element from the right" },
                { name: "cui-transition-slide-top--s", description: "Slides element a bit from the top" },
                { name: "cui-transition-slide-bottom--s", description: "Slides element a bit from the bottom" },
                { name: "cui-transition-slide-left--s", description: "Slides element a bit from the left" },
                { name: "cui-transition-slide-right--s", description: "Slides element a bit from the right" },
            ],
            hint: {
                title: "Usage",
                content: "It is not possible to use multiple transition effects at the same time. Use only one at the time"
            },
            example: GetTabbedPreview(firstExample, "1400px")
        },
        {
            name: "Reverse",
            description: <>The same transitions can be applied in reverse direction. That means that target element gets hidden on hover instead of being showed up:</>,
            list: [
                { name: "cui-transition-fade-reverse", description: "" },
                { name: "cui-transition-scale-reverse", description: "" },
                { name: "cui-transition-slide-reverse-top", description: "" },
                { name: "cui-transition-slide-reverse-bottom", description: "" },
                { name: "cui-transition-slide-reverse-left", description: "" },
                { name: "cui-transition-slide-reverse-right", description: "" },
                { name: "cui-transition-slide-reverse-top--s", description: "" },
                { name: "cui-transition-slide-reverse-bottom--s", description: "" },
                { name: "cui-transition-slide-reverse-left--s", description: "" },
                { name: "cui-transition-slide-reverse-right--s", description: "" },
            ], example: GetTabbedPreview(secondExample, "1400px")
        },
        {
            name: "Delay",
            description: <>Transition effect can be dalayed a bit.
            To set it up, add class <span className="style-class">cui-delay</span> to child element.</>
        },
        {
            name: "CSS options",
            description: "Component name is transition and supports following CSS build options:",
            list: [
                { name: "reverse", description: "Adds transition reverse options" },
            ]
        }
    ]
}
