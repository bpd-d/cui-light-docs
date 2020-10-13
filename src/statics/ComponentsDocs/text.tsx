import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function getNode(text: string, classes: string): ParserNode {
    return {
        tag: 'div',
        styleClass: "cui-padding-small",
        children: [
            { tag: "span", text: text, classes: [classes] }
        ]
    };
}

function getParent(...children: ParserNode[]): ParserNode {
    return {
        tag: "div",
        children: [...children]
    }
}


const accentsExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: 'div',
            styleClass: "cui-padding-small",
            children: [
                { tag: "span", text: "Accent", classes: ["cui-text-accent"] }
            ]
        },
        {
            tag: 'div',
            styleClass: "cui-padding-small",
            children: [
                { tag: "span", text: "Secondary", classes: ["cui-text-secondary"] }
            ]
        },
        {
            tag: 'div',
            styleClass: "cui-padding-small",
            children: [
                { tag: "span", text: "Error", classes: ["cui-text-error"] }
            ]
        },
        {
            tag: 'div',
            styleClass: "cui-padding-small",
            children: [
                { tag: "span", text: "Warning", classes: ["cui-text-warning"] }
            ]
        },
        {
            tag: 'div',
            styleClass: "cui-padding-small",
            children: [
                { tag: "span", text: "Success", classes: ["cui-text-success"] }
            ]
        },
    ]
}

const wrappingExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "div",
            styleClass: "cui-padding-small",
            children: [
                { tag: "span", text: "Truncate", classes: ["cui-text-truncate"] }
            ]
        },
        getNode("Nowrap", "cui-text-nowrap")
    ]
}

const weightsExample: ParserNode = {
    tag: "div",
    children: [
        getNode("Bold", "cui-text-bold"),
        getNode("Thin", "cui-text-thin")
    ]
}

export const decorationExample: ParserNode = getParent(
    getNode("Underline", "cui-text-underline"),
    getNode("Line through", "cui-text-line"),
    getNode("Italic", "cui-text-italic")
)

export const transformExample: ParserNode = getParent(
    getNode("Uppercase", "cui-text-upper"),
    getNode("Lowercase", "cui-text-lower"),
    getNode("Capitalize", "cui-text-capital")
)

export const sizezExample: ParserNode = getParent(
    getNode("Larger Text", "cui-text-large"),
    getNode("Normal Text", ""),
    getNode("Smaller Text ", "cui-text-small"),
)

export const alignExample: ParserNode = getParent(
    getNode("Left Text", "cui-text-left"),
    getNode("Center Text", "cui-text-center"),
    getNode("Right Text", "cui-text-right"),
    getNode("Long justified text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "cui-text-justify")
)


export const blockquoteExample: ParserNode = {
    tag: "div",
    classes: ["cui-blockquote"],
    text: "Blockquote text"
}

export const articleExample: ParserNode = getParent(
    getNode("Article title", "cui-article-title"),
    getNode("Article intro text", "cui-article-description")
);
export const CuiDocsTextScript: DocsScript = {
    sections: [
        {
            name: "Colors",
            description: <>To change default dark/light text color add accent class to HTML element:</>,
            example: GetTabbedPreview(accentsExample)
        },
        {
            name: "Weights",
            description: <>Make text bolder or thinner by adding cui-text-bold or cui-text-thin to the element:</>,
            example: GetTabbedPreview(weightsExample)
        },
        {
            name: "Decorations",
            description: <>Add cui-text-underline, cui-text-line or cui-text-italic to get text decorated with underline, line through or italic letters:</>,
            example: GetTabbedPreview(decorationExample)
        },
        {
            name: "Sizes",
            description: <>cUI provides two option for sizing text: cui-text-large and cui-text-small</>,
            example: GetTabbedPreview(sizezExample)
        },
        {
            name: "Transform",
            description: <>To transform to uppercased, lowercased or capitalized add cui-text-upper, cui-text-lower or cui-text-capital</>,
            example: GetTabbedPreview(transformExample)
        },
        {
            name: "Alignment",
            description: <>For more flexible content arrangement text can be aligned to specific side of the element.   </>,
            example: GetTabbedPreview(alignExample),
            hint: { content: "This feature comes with responsive options for more flexibility. You can add one of screen size suffixes to fine tune text alignment on different devices." }
        },
        {
            name: "Wrap",
            description: <>Provides text wrapping options. This works properly when parent element has overflow set to hidden:</>,
            example: GetTabbedPreview(wrappingExample),
            hint: { content: "Available in responsive option. Add screen size suffix to make text bahave differently of different screen sizes." }
        },
        {
            name: "Blockquote",
            description: <>Creates styled container for blockquotes:</>,
            example: GetTabbedPreview(blockquoteExample),
        },
        {
            name: 'Article',
            description: <>Gives some styling to article title and article intro description:</>,
            example: GetTabbedPreview(articleExample)
        }
    ]
}