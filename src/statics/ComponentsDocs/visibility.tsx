import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";

function createCard(suff: string, pC: string[]): ParserNode {
    return {
        tag: "div",
        classes: ["cui-card", "cui-default", ...pC],
        children: [
            {
                tag: "div",
                children: [
                    {
                        tag: "span",
                        text: "Visible on " + suff,
                        classes: ["cui-visible--" + suff, "cui-text-success"]
                    },
                    {
                        tag: "span",
                        text: "Hidden on " + suff,
                        classes: ["cui-hidden--" + suff, "cui-text-warning"]
                    }
                ]
            }
        ]
    };
}


const mediaExample: ParserNode = {
    tag: "div",
    children: [
        createCard("s", []),
        createCard("m", ["cui-margin-top"]),
        createCard("l", ["cui-margin-top"]),
        createCard("xl", ["cui-margin-top"]),
    ]
}

const touchExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "div",
            children: [
                {
                    tag: 'p',
                    text: "Hidden on touch device",
                },
                {
                    tag: "div",
                    classes: ["cui-padding", "cui-background-shade", "cui-text-success", "cui-hidden-touch", "cui-margin-top"],
                    text: "I'm visible on non-touch devices"
                }
            ]
        },
        {
            tag: "div",
            children: [
                {
                    tag: 'p',
                    text: "Hidden on non-touch device",
                },
                {
                    tag: "div",
                    classes: ["cui-padding", "cui-background-shade", "cui-text-success", "cui-hidden-precise", "cui-margin-top"],
                    text: "I'm visible on touch devices"
                }
            ]
        }
    ]
}

const orientationExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "div",
            children: [
                {
                    tag: 'p',
                    text: "Hidden on portait orientation",
                },
                {
                    tag: "div",
                    classes: ["cui-padding", "cui-background-shade", "cui-text-success", "cui-hidden-portrait", "cui-margin-top"],
                    text: "I'm visible on landscape devices"
                }
            ]
        },
        {
            tag: "div",
            children: [
                {
                    tag: 'p',
                    text: "Hidden on landscape orientation",
                },
                {
                    tag: "div",
                    classes: ["cui-padding", "cui-background-shade", "cui-text-success", "cui-hidden-landscape", "cui-margin-top"],
                    text: "I'm visible on portrait devices"
                }
            ]
        }
    ]
}

const hoverExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "div",
            classes: ["cui-hover-trigger"],
            children: [
                {
                    tag: 'p',
                    text: "Visible on hover",
                },
                {
                    tag: "div",
                    classes: ["cui-padding", "cui-background-shade", "cui-text-success", "cui-visible-hover", "cui-margin-top"],
                    text: "I'm visible on hover"
                }
            ]
        },
        {
            tag: "div",
            classes: ["cui-hover-trigger"],
            children: [
                {
                    tag: 'p',
                    text: "Hidden on hover",
                },
                {
                    tag: "div",
                    classes: ["cui-padding", "cui-background-shade", "cui-text-success", "cui-hidden-hover", "cui-margin-top"],
                    text: "I'm hidden on hover"
                }
            ]
        }
    ]
}

export const CuiDocsVisibilityScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Use visibility classes to control whether certain element shall be visible or hidden.
            Most useful when there is a need of control visibility on different device screen sizes, input types or device orientation.
            To use this feature, add class <span className="style-class">cui-unhidden</span> to show or <span className="style-class">cui-hidden</span> to hide element.
            You can also use classes <span className="style-class">cui-visible</span> or <span className="style-class">cui-invisible</span> to achieve similar effect.
            The difference however is that visible/invisible classes only set opacity on the element - it stills occupy the space but are not visible to the user.
            Classes hidden/unhidden set display to none what make element not visible and not in the container. Modifiers can be used according to the certain needs.
            Sometimes it is better to only transparentize element as hiding makes change in DOM structure and make break overall component style.
            Add responsive suffix to control feature on certain screen size:</>,
            example: GetTabbedPreview(mediaExample, "300px"),
        },
        {
            name: "Touch",
            description: <>To hide or show/element on touch-only or mouse-only elements use one of following classes:</>,
            list: [
                { name: "cui-hidden-touch", description: "Hides element on touch devices" },
                { name: "cui-hidden-precise", description: "Hides element on devices with precise input" },
                { name: "cui-invisible-touch", description: "Removes opacity from element on touch devices" },
                { name: "cui-invisible-precise", description: "Removes opacity devices with precise input" },
                { name: "cui-visible-touch", description: "Makes element visible on touch devices" },
                { name: "cui-visible-precise", description: "Makes element visible on devices with precise input" },
                { name: "cui-unhidden-touch", description: "Unhides opacity from element on touch devices" },
                { name: "cui-unhidden-precise", description: "Removes opacity on devices with precise input" },
            ],
            example: GetTabbedPreview(touchExample, "200px")
        },
        {
            name: "Landscape",
            description: <>To hide or show element when device is in portrait vs landscape orientation use one of following classes:</>,
            list: [
                { name: "cui-hidden-landscape", description: "Hides element on devices with landscape screen orientation" },
                { name: "cui-hidden-portrait", description: "Hides element on devices with portrait screen orientation" },
                { name: "cui-invisible-landscape", description: "Removes opacity from element on devices with landscape screen orientation" },
                { name: "cui-invisible-portrait", description: "Removes opacity devices with portrait screen orientation" },
                { name: "cui-visible-landscape", description: "Makes element visible on devices with landscape screen orientation" },
                { name: "cui-visible-portrait", description: "Makes element visible on devices with portrait screen orientation" },
                { name: "cui-unhidden-landscape", description: "Unhides opacity from element on on devices with landscape screen orientation" },
                { name: "cui-unhidden-portrait", description: "Removes opacity on devices with portrait screen orientation" },
            ],
            example: GetTabbedPreview(orientationExample, "200px"),
            hint: {
                title: "Note",
                content: "Most of computer monitor are already in landscape mode!"
            }
        },
        {
            name: "Hover",
            description: <>To hide or show element on trigger hover add class on of following classes:</>,
            list: [
                { name: "cui-hidden-hover", description: "Hides element on devices with landscape screen orientation" },
                { name: "cui-unhidden-hover", description: "Hides element on devices with portrait screen orientation" },
                { name: "cui-visible-hover", description: "Removes opacity from element on devices with landscape screen orientation" },
                { name: "cui-invisible-hover", description: "Removes opacity devices with portrait screen orientation" },
            ],
            example: GetTabbedPreview(hoverExample, "200px")
        },
        {
            name: "CSS options",
            description: "Component name is visibility and supports following CSS build options:",
            list: [
                { name: "hidden", description: "Adds hidden classes" },
                { name: "unhidden", description: "Adds unhidden classes" },
                { name: "visible", description: "Adds visible classes" },
                { name: "invisible", description: "Adds invisible classes" },
                { name: "responsive", description: "Adds responsive options of visible/hidden features" },
                { name: "touch", description: "Adds classes related to touch devices" },
                { name: "landscape", description: "Adds classes controlling visibility on device landscape mode" },
                { name: "portrait", description: "Adds classes controlling visibility on device portrait mode" },
                { name: "hover", description: "Adds classes controlling visibility on element hover" }
            ]
        }
    ]
}