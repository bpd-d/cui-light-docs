import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";

function createProgress(modifiers: string[], ...cls: string[]): ParserNode {
    return {
        tag: "div",
        classes: ["cui-container", ...cls],
        children: [
            {
                tag: "progress",
                attributes: {
                    value: "50",
                    max: "100",
                    min: "0"
                },
                classes: ["cui-progress", ...modifiers]
            }
        ]
    }
}

const firstExample: ParserNode = createProgress([],);
const secondExample: ParserNode = createProgress(["cui-small"],);
const tirdExample: ParserNode = {
    tag: "div",
    children: [
        createProgress(["cui-accent"]),
        createProgress(["cui-secondary"], "cui-margin-top"),
        createProgress(["cui-error"], "cui-margin-top"),
        createProgress(["cui-warning"], "cui-margin-top"),
        createProgress(["cui-success"], "cui-margin-top"),
    ]
}

export const CuiDocProgressScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>cUI comes with styling classes for element <span className="style-element">progress</span> that set visual effect matching library look and feel.
            To set it up, add class <span className="style-class">cui-progress</span> to the element:</>,
            example: GetTabbedPreview(firstExample, "60px")
        },
        {
            name: "Small",
            description: <>Add class <span className="style-class">cui-small</span> to get smaller sized progress bar:</>,
            example: GetTabbedPreview(secondExample, "60px")
        },
        {
            name: "Colors",
            description: <>Add theme or signal modifier to change main color of progress bar:</>,
            example: GetTabbedPreview(tirdExample, "240px")
        }
    ]
}