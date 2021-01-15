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

function createDetailedTransition(title: string, description: string, cls?: string): ParserNode {
    let mainClasses = ["cui-transition-trigger", "cui-position-relative", "transition-size", 'cui-background-accent'];
    if (cls) {
        mainClasses.push(cls);
    }
    return {
        tag: "div",
        classes: mainClasses,
        children: [
            {
                tag: "div",
                classes: ["cui-transition-container"],
                children: [{
                    tag: "div",
                    classes: ["cui-transition-body", "cui-flex-center"],
                    children: [
                        {
                            tag: 'div',
                            classes: ["cui-text-center"],
                            children: [
                                {
                                    tag: "div",
                                    classes: ["cui-transition-header"],
                                    text: title,
                                }, {
                                    tag: "div",
                                    classes: ["cui-transition-content"],
                                    text: description,
                                }
                            ]
                        }
                    ]
                }]
            }
        ]
    }
}

function createSlideTransition(title: string, description: string, cls?: string): ParserNode {
    let mainClasses = ["cui-transition-trigger", "cui-position-relative", "transition-size", 'cui-background-accent', "cui-transition-slide-up"];
    if (cls) {
        mainClasses.push(cls);
    }
    return {
        tag: "div",
        classes: mainClasses,
        children: [
            {
                tag: "div",
                classes: ["cui-transition-container"],
                children: [{
                    tag: "div",
                    classes: ["cui-transition-body"],
                    children: [
                        {
                            tag: "div",
                            classes: ["cui-transition-header"],
                            text: title,
                        }, {
                            tag: "div",
                            classes: ["cui-transition-content"],
                            text: description,
                        }
                    ]
                }]
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

const specialExample: ParserNode = createDetailedTransition("Title", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
const specialSlideExample: ParserNode = createSlideTransition("Title", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
const specialSlideInverseExample: ParserNode = createSlideTransition("Title", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "cui-inverse")

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
            name: "Special",
            description: <>cUI add predefined option to show some information on top of the container when user is hovering it.
            Component gives a fixed height header and container with details. To set it up create fixed size container (with image for example).
            Add classes <span className="style-class">cui-transition-trigger</span> and <span className="style-class">cui-position-relative</span>.
            Then add <span className="style-element">div</span> with class <span className="style-class">cui-transition-container</span>. Container needs a wrapper for header and content.
            Add <span className="style-element">div</span> with class <span className="style-class">cui-transition-body</span>. Then add two divs with classes: <span className="style-class">cui-transition-header</span> and <span className="style-class">cui-transition-content</span>.
            Header behaves like a title with increased font-size and content is a placeholder for details. To inverse colors in the container add class <span className="style-class">cui-inverse</span> to transition trigger:
            </>,
            example: GetTabbedPreview(specialExample, "320px"),
            hint: {
                title: "Wrapper",
                content: "In this default option wrapper takes size of whole container, which makes it covering whole container. Header and body can be freely placed inside of this component via flexbox for example."
            }
        },
        {
            name: "Special slide up",
            description: <>Special transition has a second option, which slides up container when user is hovering it. To enable it, add class <span className="style-class">cui-transition-slide-up</span> to transition trigger. Component also comes with second feature. Header is always visible and sticks to the bottom part of the container.
            Background stays semi transparent to make header text visible. In this option container is not of a fixed size, so if content is expected to be bigger than parent size, it should be set to have a fixed height and overflow set to scroll.
            In this option also body cannot be a flexbox as transition will not work as it should. It supports inversed and active modifiers as default implementation. Here is an example how it looks and works:
            </>,
            example: GetTabbedPreview(specialSlideExample, "320px"),
        },
        {
            name: "Special inverse",
            description: <>Following example shows how inversed option looks like. To set it, add class <span className="style-class">cui-inverse</span> to transition trigger element:
            </>,
            example: GetTabbedPreview(specialSlideInverseExample, "320px"),
        },
        {
            name: "CSS options",
            description: "Component name is transition and supports following CSS build options:",
            list: [
                { name: "reverse", description: "Adds transition reverse options" },
                { name: "special", description: "Adds special transition options" },
                { name: "dark", description: "Adds dark mode to special transition" },
            ]
        }
    ]
}
