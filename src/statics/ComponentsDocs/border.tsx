import * as React from "react";
import { ParserNode } from "../../../src/api/DocsElementParser/interfaces";
import { DocsScript } from "../../../src/components/docs/base";
import { GetTabbedPreview } from "../../../src/components/preview/preview";

function createBorderChild(text: string, ...classes: string[]): ParserNode {
    return {
        tag: "div",
        classes: classes,
        text: text
    }
}
const firstExample: ParserNode = {
    tag: "div",
    children: [
        createBorderChild("Border", "cui-section", "cui-border"),
        createBorderChild("Border top", "cui-section", "cui-border-top", "cui-margin-top"),
        createBorderChild("Border bottom", "cui-section", "cui-border-bottom", "cui-margin-top"),
    ]
}

export const CuiDocsBorderScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Allows to add border to elements which by default don't have border.
            Component allows to add border to selected sides.
            It comes with responsive modifires so borders can be setup according to specfic device size.
            Component supports following classes:</>,
            list: [
                { name: "cui-border", description: "Covers whole element with border" },
                { name: "cui-border-top", description: "Adds border to top part of the element" },
                { name: "cui-border-bottom", description: "Adds border to bottom part of the element" },
                { name: "cui-border-left", description: "Adds border to left side of the element" },
                { name: "cui-border-right", description: "Adds border to right side of the element" },
            ],
            example: GetTabbedPreview(firstExample, "200px")
        },
        {
            name: "CSS options",
            description: "Component name is border and supports following CSS build options:",
            list: [
                { name: "sides", description: "Adds classes for side borders" },
                { name: "responsive", description: "Adds responsive related classes" },
                { name: "dark", description: "Adds support for dark mode" },
            ]
        }
    ]
}