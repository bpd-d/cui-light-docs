import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function createHint(title: string, body: string, footer: string, ...classes: string[]): ParserNode {
    return {
        tag: "div",
        classes: ["cui-hint", ...classes],
        children: [
            {
                tag: "div",
                classes: ['cui-hint-title'],
                text: title
            },
            {
                tag: "div",
                classes: ["cui-hint-body"],
                text: body
            },
            {
                tag: "div",
                classes: ["cui-hint-footer"],
                text: footer
            }
        ]
    }
}

const firstExample = createHint("Hint", "Hint body", "Footer");
const secondExample: ParserNode = {
    tag: "div",
    classes: ["cui-hint", "cui-body"],
    text: "Body only content"
}

const thirdExample: ParserNode = {
    tag: "div",
    children: [
        createHint("Accent hint", "Hint body", "Footer", "cui-accent"),
        createHint("Secondary hint", "Hint body", "Footer", "cui-secondary", "cui-margin-top"),
        createHint("Error hint", "Hint body", "Footer", "cui-error", "cui-margin-top"),
        createHint("Warning hint", "Hint body", "Footer", "cui-warning", "cui-margin-top"),
        createHint("Success hint", "Hint body", "Footer", "cui-success", "cui-margin-top"),
    ]
}

export const CuiDocsHintScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Hint can be used to highlight some information with colored, styled block.
            To create this component add <span className="style-element">div</span> with class <span className="style-class">cui-hint</span>.
            Component can be filled with title, body and footer. </>,
            example: GetTabbedPreview(firstExample, "150px")
        },
        {
            name: "Body",
            description: <>Not all hints have to have content consisting of three elements.
            To create component with body only, add class <span className="style-class">cui-body</span> to root element:</>,
            example: GetTabbedPreview(secondExample, "60px")
        },
        {
            name: "Colors",
            description: <>Hints can be styled with accent and secondary colors. Component gets a subtle, colored background and texts.
            To style component with colors add one of following classes to root element:</>,
            list: [
                { name: "cui-accent", description: "Gives an accent background and colors" },
                { name: "cui-secondary", description: "Gives a secondary background and colors" },
                { name: "cui-error", description: "Gives a error signal background and colors" },
                { name: "cui-warning", description: "Gives a warning signal background and colors" },
                { name: "cui-success", description: "Gives a success signal background and colors" },
            ],
            example: GetTabbedPreview(thirdExample, "750px")
        }
    ]
}