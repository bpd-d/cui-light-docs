import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function createSeparator(cls: string, children: ParserNode[]): ParserNode {
    return {
        tag: "div",
        classes: ["cui-separator", cls],
        children: children
    }
}



export const firstExample: ParserNode = createSeparator("", undefined)
export const secondExample: ParserNode = createSeparator("", [
    {
        tag: "span",
        attributes: {
            "cui-icon": "heart"
        }
    }
])

const thirdExample: ParserNode = {
    tag: "div",
    classes: ["cui-container", "cui-accent", 'cui-padding'],
    children: [
        createSeparator("", [
            {
                tag: "span",
                attributes: {
                    "cui-icon": "heart"
                }
            }
        ])
    ]
}

export const CuiDocsSeparatorScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Separators can be used to raise visual split between two sections or paragraphs.
            To create one, add <span className="style-element">div</span> with class <span className="style-class">cui-separator</span>:</>,
            example: GetTabbedPreview(firstExample, "60px")
        },
        {
            name: "Content",
            description: "Separator can contain a child, e.g. icon. In such case it will be centered vertically and horizontally:",
            example: GetTabbedPreview(secondExample, "60px")
        },
        {
            name: "Containers",
            description: "Separator will adapt to theme of other cUI elements. If place in accented container it will revert colors:",
            example: GetTabbedPreview(thirdExample, "70px")
        },
        {
            name: "CSS options",
            description: "Component name is separator and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "theme", description: "Adds theme color classes" },
            ]
        }
    ]
}