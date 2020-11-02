import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function createSliderChild(text: string, isActive: boolean, ...classes: string[]): ParserNode {
    let cls = isActive ? "cui-active" : "";
    return {
        tag: "li",
        styleClass: cls,
        children: [
            {
                tag: "div",
                classes: ["cui-padding", ...classes],
                text: text
            }
        ]
    }
}

function createSlider(attr: string, ...classes: string[]): ParserNode {
    return {
        tag: "ul",
        classes: [...classes],
        attributes: { "cui-slider": attr ?? "" },
        children: [
            createSliderChild("Item 1", true, "cui-background-accent"),
            createSliderChild("Item 2", false, "cui-background-secondary"),
            createSliderChild("Item 3", false, "cui-background-shade"),
            createSliderChild("Item 4", false, "cui-background-warning"),
        ]
    }
}

function createSwitcher(id: string): ParserNode {
    return {
        tag: "ul",
        classes: ["cui-switcher-indicator", "cui-small", "cui-padding"],
        attributes: {
            id: id,
            "cui-switcher": ""
        },
        children: [
            { tag: "li" },
            { tag: "li" },
            { tag: "li" },
            { tag: "li" }
        ]
    }
}

const firstExample: ParserNode = createSlider("");

const secondExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "div",
            classes: ["cui-flex-center"],
            children: [
                createSwitcher("switcher-slide-01")
            ]
        },
        createSlider("links: #switcher-slide-01 > li")
    ]

}

const thirdExample: ParserNode = createSlider("autoTimeout: 3000; loop: y");

const fourthExample: ParserNode = {
    tag: "div",
    children: [
        createSlider("animation: push"),
        createSlider("animation: fade", "cui-margin-top")
    ]

}

export const CuiDocsSliderScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Slider is an interactive component which can be used to switch child elements (within one view) with touch or mouse interaction.
            To setup component add a <span className="style-element">UL</span> with attribute <span className="style-class">cui-slider</span>.
            Then add children within <span className="style-element">LI</span> elements.
            To setup first active element, add class <span className="style-class">cui-active</span> to desired LI element:</>,
            example: GetTabbedPreview(firstExample, "100px")
        },
        {
            name: "Links",
            description: <>Slider can work with switchers like tab or inidicators.
            It is enough to set <span className="style-class">links</span> selector as option in component:</>,
            example: GetTabbedPreview(secondExample, "150px")
        },
        {
            name: "Auto",
            description: <>Slider support automatic sliding without user input.
            To enable this, set option <span className="style-class">autoTimeout</span> setting how often elements shall be switched:</>,
            example: GetTabbedPreview(thirdExample, "100px"),
            hint: {
                title: "Loop",
                content: "By default elements will be switched until last one is appears. To enable switching in loop add such option."
            }
        },
        {
            name: "Animation",
            description: <>To setup sliding animation, set option <span className="style-class">animation</span> and provide animation name. Currently three animations are supported:</>,
            list: [
                { name: "slide", description: "default" },
                { name: "push", description: "" },
                { name: "fade", description: "" },
            ],
            example: GetTabbedPreview(fourthExample, "150px"),
            hint: {
                title: "Custom",
                content: "Animations definitions can be added during cUI instance initialization"
            }
        },
        {
            name: "Options",
            description: <>Slider supports following options:</>,
            properties: [
                { name: "targets", type: "selector", defaultValue: "> li", description: "Child elements selector" },
                { name: "timeout", type: "number", defaultValue: "default", description: "Animtation duration" },
                { name: "links", type: "selector", defaultValue: "null", description: "Selector to switcher children" },
                { name: "autoTimeout", type: "number", defaultValue: "0", description: "Auto switch task timeout" },
                { name: "height", type: "number", defaultValue: "auto", description: "Height of the element" },
                { name: "animation", type: "string", defaultValue: "slide", description: "Animation name" },
                { name: "loop", type: "boolean", defaultValue: "false", description: "Slide elements in loop" },
            ]
        },
        {
            name: "Events",
            description: <>Slider supports following events:</>,
            list: [
                { name: "switch", description: "Triggers switch action" }
            ]
        },
        {
            name: "Emits",
            description: <>Slider emits following events:</>,
            list: [
                { name: "switched", description: "Triggered switch action has completed" }
            ]
        }
    ]
}