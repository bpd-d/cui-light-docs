import * as React from "react";
import { Link } from "react-router-dom";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function getContainerWithIcon(icon: string, cls: string, text?: string): ParserNode {
    let classes = cls ?? ""
    return {
        tag: "div",
        children: [
            {
                tag: "span",
                text: text,
                styleClass: classes,
                attributes: {
                    "cui-icon": icon,
                }
            }
        ]
    }
}

const firstExample: ParserNode = {
    tag: "span",
    attributes: {
        "cui-icon": "heart"
    }
}

const secondExample: ParserNode = {
    tag: "div",
    children: [
        getContainerWithIcon("heart", "", "Icon without margin"),
        getContainerWithIcon("heart", "cui-icon-margin cui-margin-top", "Icon with margin")
    ]
}

const thirdExample: ParserNode = {
    tag: "div",
    children: [
        getContainerWithIcon("heart", "cui-accent cui-icon-margin", "cui-accent"),
        getContainerWithIcon("heart", "cui-secondary cui-icon-margin cui-margin-top", "cui-secondary"),
        getContainerWithIcon("heart", "cui-error cui-icon-margin cui-margin-top", "cui-error"),
        getContainerWithIcon("heart", "cui-warning cui-icon-margin cui-margin-top", "cui-warning"),
        getContainerWithIcon("heart", "cui-success cui-icon-margin cui-margin-top", "cui-success"),
    ]
}

const fourtExample = {
    tag: "div",
    children: [
        getContainerWithIcon("heart", "cui-fill cui-icon-margin", "cui-fill"),
        getContainerWithIcon("heart", "cui-fill cui-accent cui-icon-margin", "cui-fill cui-accent"),
    ]
}

const fifthExample: ParserNode = {
    tag: "div",
    children: [
        getContainerWithIcon("heart", "cui-icon-button"),
        getContainerWithIcon("heart", "cui-icon-button cui-default cui-margin-top"),
    ]
}

const sixthExample: ParserNode = {
    tag: "div",
    styleClass: "cui-container cui-accent",
    children: [
        {
            tag: "span",
            attributes: {
                "cui-icon": "heart"
            }
        }
    ]
}

const seventhExample: ParserNode = {
    tag: "div",
    styleClass: "custom-dark-background cui-padding",
    children: [
        {
            tag: "span",
            classes: ["cui-dark"],
            attributes: {
                "cui-icon": "heart"
            }
        }
    ]
}

const eighthExample: ParserNode = {
    tag: "ul",
    classes: ["cui-icon-nav"],
    children: [
        {
            tag: "li",
            children: [{ tag: "a", attributes: { "cui-icon": "edit" } }]
        },
        {
            tag: "li",
            children: [{ tag: "a", attributes: { "cui-icon": "trash" } }]
        },
        {
            tag: "li",
            children: [{ tag: "a", attributes: { "cui-icon": "pencil" } }]
        }
    ]
}

const ninethExample: ParserNode = {
    tag: "span",
    attributes: {
        "cui-icon": "icon: heart; scale: 3"
    }
}
export const CuiDocsIconScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>cUI brings own icons system, which is SVG based.
            All of them share the same styling to provide unified look and feel.
            For available icon list, visit <Link to="/icon" className="cui-link cui-accent">this</Link> subpage.
            To add an icon element to page, add <span className="style-element">span</span> or <span className="style-element">anchor</span> element with attribute <span className="style-class">cui-icon</span>
             and provide an icon name as value:</>,
            example: GetTabbedPreview(firstExample, "40px")
        },
        {
            name: "Icon with text",
            description: <>Icon element also support text inside, so there is no need to create complex mixins to build icon with text.
            To space out an icon from text add class <span className="style-class">cui-icon-margin</span>:</>,
            example: GetTabbedPreview(secondExample, "90px")
        },
        {
            name: "Colors",
            description: <>Icons style can be adjusted by changing a stroke color to any accent or signal color available in cUI.
            To make an add one of class below to icon element: </>,
            list: [
                { name: "cui-accent", description: "Changes stroke color to main accent color" },
                { name: "cui-secondary", description: "Changes stroke color to secondary theme color" },
                { name: "cui-error", description: "Changes stroke color to error signal color" },
                { name: "cui-warning", description: "Changes stroke color to warning signal color" },
                { name: "cui-success", description: "Changes stroke color to success signal color" },
            ],
            example: GetTabbedPreview(thirdExample, "200px")
        },
        {
            name: "Icon fill",
            description: <>By default all icons fill is transparent.
            All of them however support class option <span className="style-class">cui-fill</span> that can fill some shapes with color.
            This option supports all available colors as well:</>,
            example: GetTabbedPreview(fourtExample, "80px")
        },
        {
            name: "Icon button",
            description: <>Icons can be a part of common cUI button, but are also availabe in standalone option called <span className="style-class">cui-icon-button</span>:</>,
            example: GetTabbedPreview(fifthExample, "100px"),
            hint: {
                title: "Icon button with text",
                content: "Don't add any text to component when using icon button. Use standard cui-button instead as it has better styling for wider components."
            }
        },
        {
            name: "Icons in containers",
            description: <>cUI icons are adapting to style of other components. In containers or cards that are filled with any of cUI colors, they get a inverted color to match text:</>,
            example: GetTabbedPreview(sixthExample, "40px")
        },
        {
            name: "Icon dark",
            description: <>cUI icons are styled properly in colored containers.
            However it is possible to add icon with light colored strokes to any custom dark containers.
            It can be done with class <span className="style-class">cui-dark</span></>,
            example: GetTabbedPreview(seventhExample, "60px")
        },
        {
            name: "Icon nav",
            description: <>To create navigation bar from elements based on icons use <span className="style-element">ul</span> with class <span className="style-class">cui-icon-nav</span>:</>,
            example: GetTabbedPreview(eighthExample, "40px")
        },
        {
            name: "Scale",
            description: <>To scale up an icon, add option <span className="style-element">scale</span> to <span className="style-class">cui-icon</span> and provide value of ratio which will tell how many times icon shall be scaled up:</>,
            example: GetTabbedPreview(ninethExample, "70px")
        },
        {
            name: "Options",
            description: "Component icon supports following options:",
            properties: [
                { name: "icon", defaultValue: null, type: "string", description: "Icon name" },
                { name: "scale", defaultValue: "1", type: "number", description: "Icon scale" },
            ]
        },
        {
            name: "API",
            description: <>cUI allows user to create custom SVG icons which can be added to library during instane initialization.
            There are some requirements to be met in order to comply to icons styling:</>,
            list: [
                { name: "paths", description: "All shapes must be paths" },
                { name: "size", description: "Default icon size is 20x20, but it is not required" },
                { name: "fill", description: "Paths supporting cui-fill must contain class: fill" }
            ]
        }
    ]
}