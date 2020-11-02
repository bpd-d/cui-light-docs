import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function createGridChild(text: string, ...classes: string[]): ParserNode {
    return {
        tag: "div",
        classes: [...classes],
        children: [
            {
                tag: "div",
                classes: ["cui-card cui-default"],
                children: [
                    {
                        tag: "div",
                        text: text
                    }
                ]
            }
        ]
    }
}

function createGridChildCard(title: string, body: string, footer: string, ...classes: string[]): ParserNode {
    return {
        tag: "div",
        classes: [...classes],
        children: [
            {
                tag: "div",
                classes: ["cui-card cui-default"],
                children: [
                    {
                        tag: "div",
                        classes: ["cui-card-header"],
                        children: [
                            {
                                tag: "span",
                                classes: ["cui-card-title"],
                                text: title
                            }
                        ]
                    },
                    {
                        tag: "div",
                        classes: ["cui-card-body"],
                        text: body
                    },
                    {
                        tag: "div",
                        classes: ["cui-card-footer"],
                        text: footer
                    }
                ]
            }
        ]
    }
}

function createGrid(children: ParserNode[], ...classes: string[]): ParserNode {
    return {
        tag: "div",
        classes: ["cui-flex-grid", ...classes],
        children: children
    }
}

const firstExample: ParserNode = createGrid([
    createGridChild("Item 1"),
    createGridChild("Item 2", "cui-width-1-2"),
    createGridChild("Item 3", "cui-width-1-4"),
    createGridChild("Item 4", "cui-width-1-4"),
    createGridChild("Item 5", "cui-width-1-3"),
])

const secondExample: ParserNode = createGrid([
    createGridChild("Item 1"),
    createGridChild("Item 2"),
    createGridChild("Item 3"),
    createGridChild("Item 4"),
    createGridChild("Item 5", "cui-width-1-3"),
], "cui-child-width-1-2")

const thirdExample: ParserNode = {
    tag: "div",
    children: [
        createGrid([
            createGridChild("Item 1"),
            createGridChild("Item 2"),
            createGridChild("Item 3"),
            createGridChild("Item 4"),
        ], "cui-flex-grid-space", "cui-child-width-1-3"),
        createGrid([
            createGridChild("Item 1"),
            createGridChild("Item 2"),
            createGridChild("Item 3"),
            createGridChild("Item 4"),
        ], "cui-flex-grid-collapse", "cui-child-width-1-3", "cui-margin-top")
    ]
}

const fourthExample: ParserNode = createGrid([
    createGridChild("Item"),
    createGridChildCard("Card", "body", "footer"),
    createGridChildCard("Card", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "footer"),
], "cui-flex-grid-match", "cui-child-width-1-3")


export const CuiDocsGridScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>cUI provides simple grid implementation which is based on a flexbox rather than grid.
            To create this component, add class <span className="style-class">cui-flex-grid</span> to <span className="style-element">div</span>, then put children inside.
            By default grid look more like a list, because children take whole row space - they behave like a block elements.
            This behavior can be changed by addition any of <span className="style-class">cui-width</span> classes to child elements</>,
            example: GetTabbedPreview(firstExample, "200px"),
            hint: {
                title: "Responsive",
                content: "Responsive widths are also supported, so grid children can take different amount of space depending on screen size"
            }
        },
        {
            name: "Child Width",
            description: <>To pre-style grid children with equal width, add one of following classes: </>,
            list: [
                { name: "cui-child-width-1-6", description: "" },
                { name: "cui-child-width-1-5", description: "" },
                { name: "cui-child-width-1-4", description: "" },
                { name: "cui-child-width-1-3", description: "" },
                { name: "cui-child-width-1-2", description: "" },
                { name: "cui-child-width-1-1", description: "" }
            ],
            example: GetTabbedPreview(secondExample, "200px"),
            hint: {
                title: "Mixing",
                content: "As shown on example, child width and common width classes can be mixed up with each other. Child width classes also support responsive opotions"
            }
        },
        {
            name: "Space",
            description: <>Default styling of a grid gives a small padding to each grid child to space them out a little bit.
            This space can be exteneded or shrinked by addition of classes <span className="style-class">cui-flex-grid-space</span> or <span className="style-class">cui-flex-grid-collapse</span>:</>,
            example: GetTabbedPreview(thirdExample, "300px")
        }, {
            name: "Match",
            description: <>Some of grid children can be higher then others.
            To make them all of a equal height, add class <span className="style-class">cui-flex-grid-match</span>.
            If cUI Card element is used as child, body can be strechted out accordingly to element height leaving header and footer not changed:</>,
            example: GetTabbedPreview(fourthExample, "370px")
        }
    ]
}