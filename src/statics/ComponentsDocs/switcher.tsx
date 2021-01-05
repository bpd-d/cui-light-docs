import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";

function createIndicator(...cls: string[]): ParserNode {
    return {
        tag: "ul",
        classes: ["cui-switcher-indicator", ...cls],
        children: [
            createIndLi(),
            createIndLi(),
            createIndLi("cui-active"),
            createIndLi(),
            createIndLi(),
        ]
    }
}

function createIndLi(...cls: string[]): ParserNode {
    return {
        tag: "li",
        classes: [...cls],

    }
}
function createLi(text: string): ParserNode {
    return {
        tag: "li",
        children: [
            {
                tag: "a",
                text: text,
            }
        ]
    }
}

function createSliderLi(text: string, isActive: boolean, ...classes: string[]): ParserNode {

    return {
        tag: "li",
        styleClass: isActive ? "cui-active" : "",
        children: [
            {
                tag: "div",
                classes: ["cui-padding", ...classes],
                text: text,
            }
        ]
    }
}

const firstExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "ul",
            classes: ["cui-tab"],
            attributes: {
                "cui-switcher": "target: #slider-switcher-01",
                "id": "switcher-test-01"
            },
            children: [
                createLi("Item 1"),
                createLi("Item 2"),
            ]
        },
        {
            tag: "ul",
            attributes: {
                "id": "slider-switcher-01",
                "cui-slider": "links: #switcher-test-01 > li"
            },
            children: [
                createSliderLi("Item 1", true, "cui-background-accent"),
                createSliderLi("Item 2", false, "cui-background-secondary"),
            ]
        },
        {
            tag: "div",
            styleClass: "cui-margin-top",
            children: [
                {
                    tag: "button",
                    classes: ["cui-button", 'cui-default'],
                    text: "Prev",
                    attributes: {
                        "cui-switcher": "index: prev; target: #slider-switcher-01"
                    }
                },
                {
                    tag: "button",
                    classes: ["cui-button", 'cui-default', 'cui-margin-small-left'],
                    text: "Next",
                    attributes: {
                        "cui-switcher": "index: next; target: #slider-switcher-01"
                    }
                }
            ]
        }
    ]
}


const thirdExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "div",
            classes: ["cui-padding", "cui-flex-center"],
            children: [
                createIndicator()
            ]
        },
        {
            tag: "div",
            classes: ["cui-padding", "cui-flex-center"],
            children: [
                createIndicator("cui-small")
            ]
        }

    ],
}

export const CuiDocsSwitcherScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Switcher is used to cooperate with components that listen for event <span className="style-class">switch</span>.
            It can always trigger specific index or choose one according to position of clicked list item if set on <span className="style-element">UL</span>.
            </>,
            example: GetTabbedPreview(firstExample, "170px")
        },
        {
            name: "Indicator",
            description: <>There are different kinds of switchers available in cUI. Most popular showed around this whole page is a <span className="style-class">cui-tab</span>.
            Other switcher, simpler option, is a common button with attribute <span className="style-class">cui-switcher</span>.
            There are also indicators available as elliptical simple shapes:</>,
            example: GetTabbedPreview(thirdExample, "150px")
        },
        {
            name: "Events",
            description: `Component does not support any events. To change switcher, call switch event on linked component.`
        },
        {
            name: "Emits",
            description: "Switcher emits following events:",
            list: [
                { name: "switch", description: "Emitted on click action" }
            ]
        },
        {
            name: "CSS options",
            description: "Component name is switcher and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "print", description: "Adds print mode styling" },
                { name: "shade", description: "Adds shade indicator classes" },
                { name: "small", description: "Adds indicator small classes" },
            ]
        },
        {
            name: "CSS tab options",
            description: "Component name is tab and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "print", description: "Adds print mode styling" },
                { name: "theme", description: "Adds theme color classes" },
                { name: "side", description: "Adds side option classes" },
            ]
        }
    ]
}