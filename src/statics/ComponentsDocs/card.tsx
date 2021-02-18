import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";

const jsonElementData: ParserNode =
{
    tag: 'div',
    children: [
        {
            tag: "div",
            classes: ["cui-card", 'cui-default'],
            children: [
                {
                    tag: 'div',
                    classes: ['cui-card-header'],
                    children: [
                        { tag: "span", text: "Title", classes: ["cui-card-title"] }
                    ]
                },
                {
                    tag: "div",
                    classes: ["cui-card-body"],
                    children: [
                        { tag: "span", text: "Card body" }
                    ]
                },
                {
                    tag: "div",
                    classes: ["cui-card-footer cui-flex cui-right"],
                    children: [
                        { tag: "button", styleClass: "cui-button cui-margin-small-right", text: "Cancel" },
                        { tag: "button", styleClass: "cui-button cui-accent", text: "Ok" }
                    ]
                }
            ]
        },
        {
            tag: "div",
            classes: ["cui-card", 'cui-default', 'cui-margin-top',],
            children: [
                {
                    tag: "div",
                    classes: ["cui-card-body"],
                    children: [
                        { tag: "span", text: "Card body" }
                    ]
                },
            ]
        },
        {
            tag: "div",
            classes: ["cui-card", 'cui-default', 'cui-margin-top', "cui-card-body"],
            children: [
                {
                    tag: "div",
                    classes: ["cui-card-body"],
                    children: [
                        { tag: "span", text: "Card body" }
                    ]
                },
                {
                    tag: "div",
                    classes: ["cui-card-footer cui-flex cui-right"],
                    children: [
                        { tag: "button", styleClass: "cui-button cui-margin-small-right", text: "Cancel" },
                        { tag: "button", styleClass: "cui-button cui-accent", text: "Ok" }
                    ]
                }
            ]
        }
    ]
}




const stylingExample: ParserNode = {
    tag: "div",
    classes: ["cui-card", 'cui-default'],
    children: [
        {
            tag: 'div',
            classes: ['cui-card-header'],
            children: [
                { tag: "span", text: "Title", classes: ["cui-card-title"] }
            ]
        },
        {
            tag: "div",
            classes: ["cui-card-body"],
            children: [
                { tag: "span", text: "Card body" }
            ]
        },
        {
            tag: "div",
            classes: ["cui-card-footer"],
            children: [
                { tag: "span", text: "Card footer" }
            ]
        }
    ]
}

const accentsExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "div",
            classes: ["cui-card", 'cui-accent'],
            children: [
                {
                    tag: 'div',
                    classes: ['cui-card-header'],
                    children: [
                        { tag: "span", text: "Title", classes: ["cui-card-title"] }
                    ]
                },
                {
                    tag: "div",
                    classes: ["cui-card-body"],
                    children: [
                        { tag: "span", text: "Card body" }
                    ]
                },
                {
                    tag: "div",
                    classes: ["cui-card-header"],
                    children: [
                        { tag: "span", text: "Card footer" }
                    ]
                }
            ]
        },
        {
            tag: "div",
            classes: ["cui-card", 'cui-secondary'],
            styleClass: "cui-margin-top",
            children: [
                {
                    tag: 'div',
                    classes: ['cui-card-header'],
                    children: [
                        { tag: "span", text: "Title", classes: ["cui-card-title"] }
                    ]
                },
                {
                    tag: "div",
                    classes: ["cui-card-body"],
                    children: [
                        { tag: "span", text: "Card body" }
                    ]
                },
                {
                    tag: "div",
                    classes: ["cui-card-header"],
                    children: [
                        { tag: "span", text: "Card footer" }
                    ]
                }
            ]
        }
    ]
}

const hoverExample: ParserNode = {
    tag: "div",
    classes: ["cui-card", 'cui-default', "cui-hover"],
    children: [
        {
            tag: 'div',
            classes: ['cui-card-header'],
            children: [
                { tag: "span", text: "Title", classes: ["cui-card-title"] }
            ]
        },
        {
            tag: "div",
            classes: ["cui-card-body"],
            children: [
                { tag: "span", text: "Card body" }
            ]
        },
        {
            tag: "div",
            classes: ["cui-card-header"],
            children: [
                { tag: "span", text: "Card footer" }
            ]
        }
    ]
}

const topCardExample: ParserNode = {
    tag: "div",
    classes: ["cui-card", 'cui-default', "cui-width-1-2"],
    children: [
        {
            tag: 'div',
            children: [
                {
                    tag: "img",
                    classes: ["docs-card-image-style"],
                    attributes: {
                        alt: "pic",
                        src: "/assets/images/pic.jpg"
                    }
                }
            ]
        },
        {
            tag: 'div',
            classes: ["cui-content"],
            children: [
                {
                    tag: 'div',
                    classes: ['cui-card-header'],
                    children: [
                        { tag: "span", text: "Title", classes: ["cui-card-title"] }
                    ]
                },
                {
                    tag: "div",
                    classes: ["cui-card-body"],
                    children: [
                        { tag: "span", text: "Card body" }
                    ]
                },
                {
                    tag: "div",
                    classes: ["cui-card-header"],
                    children: [
                        { tag: "span", text: "Card footer" }
                    ]
                }
            ]
        }
    ]
}

const asideCardExample: ParserNode = {
    tag: "div",
    classes: ["cui-card", 'cui-default', "cui-side"],
    children: [
        {
            tag: 'div',
            classes: ["cui-width-1-4"],
            children: [
                {
                    tag: "img",
                    classes: ["docs-card-image-style-aside"],
                    attributes: {
                        alt: "pic",
                        src: "/assets/images/pic.jpg"
                    }
                }
            ]
        },
        {
            tag: 'div',
            classes: ["cui-content", "cui-width-3-4"],
            children: [
                {
                    tag: 'div',
                    classes: ['cui-card-header'],
                    children: [
                        { tag: "span", text: "Title", classes: ["cui-card-title"] }
                    ]
                },
                {
                    tag: "div",
                    classes: ["cui-card-body"],
                    children: [
                        { tag: "span", text: "Card body" }
                    ]
                },
                {
                    tag: "div",
                    classes: ["cui-card-header"],
                    children: [
                        { tag: "span", text: "Card footer" }
                    ]
                }
            ]
        }
    ]
}

export const CuiDocsCardScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: (<>Card wraps data around space with header and footer. To use this component add cui-card to div.
            By default, if there is a single element inside of card, some styling is applied. Add class cui-default to style component with border and shadow, see below: </>),
            example: GetTabbedPreview(jsonElementData, "400px")
        },
        {
            name: "Styles",
            description: (<>Default card styling may be extended by addition of header, body and footer. Header also supports adds title with styling that matches overall framework style:</>),
            example: GetTabbedPreview(stylingExample)
        },
        {
            name: "Themes",
            description: (<>Along with default background color, card comes with themes. Classes cui-accent and cui-secondary change background and text color to match theme:</>),
            example: GetTabbedPreview(accentsExample)
        },
        {
            name: "Hover",
            description: (<>To add a hover effect on card, add class cui-hover to card root element:</>),
            example: GetTabbedPreview(hoverExample)
        },
        {
            name: "Top content",
            description: (<>Card component provide special styling for layout with image on the top. In that case card content data shall be wrapped in div with class cui-content</>),
            example: GetTabbedPreview(topCardExample)
        },
        {
            name: "Aside content",
            description: (<>There is an option to create aside card with image filling up a part of card and content the rest: </>),
            example: GetTabbedPreview(asideCardExample, "300px")
        },
        {
            name: "CSS options",
            description: "Component name is card and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "print", description: "Adds print mode styling" },
                { name: "theme", description: "Adds theme colored card options" },
                { name: "signal", description: "Adds signal colored card options" },
                { name: "inverse", description: "Adds inversed color card options" },
                { name: "large", description: "Adds larger padding stying classes" },
                { name: "side", description: "Adds classes for side card" },
                { name: "hover", description: "Adds classes for card hover effect" },
            ]
        }

    ]
}