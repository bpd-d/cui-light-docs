import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function getInfoBar(text: string, modifier: string | null, ...cls: string[]): ParserNode {
    let classes = cls ?? [];
    let modifiers = ["cui-info-box"];
    if (modifier !== null) {
        modifiers.push(modifier);
    }
    return {
        tag: "div",
        classes: classes,
        children: [
            {
                tag: "span",
                classes: modifiers,
                text: text
            }
        ]
    }
}

const firstExample: ParserNode = getInfoBar("200 items in stock", null);
const secondExample: ParserNode = {
    tag: "div",
    children: [
        getInfoBar("Product available", "cui-accent"),
        getInfoBar("Product available", "cui-secondary", "cui-margin-top")
    ]
}

const thirdExample: ParserNode = {
    tag: "div",
    children: [
        getInfoBar("Product not available", "cui-error"),
        getInfoBar("Only 3 items left", "cui-warning", "cui-margin-top"),
        getInfoBar("Product available", "cui-success", "cui-margin-top")
    ]
}

export const CuiDocsInfoBoxScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Info box is a small component for colored options that can show or highlight some information inside of a component, like item availability on product card in the online store.
            To add this component, add class <span className="style-class">cui-info-bar</span> to an HTML element and specific theme or signal modifier class to get styled option:</>,
            example: GetTabbedPreview(firstExample, "30px")
        },
        {
            name: "Theme",
            description: <>To get this element colored with accent colors, add class <span className="style-class">cui-accent</span> or <span className="style-class">cui-secondary</span>:</>,
            example: GetTabbedPreview(secondExample, "80px")
        },
        {
            name: "Signal",
            description: <>To get info box colored with signal colors, add class <span className="style-class">cui-error</span>, <span className="style-class">cui-warning</span> or  <span className="style-class">cui-success</span>:</>,
            example: GetTabbedPreview(thirdExample, "120px")
        },
        {
            name: "CSS options",
            description: "Component name is icon and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "print", description: "Adds print mode styling" },
                { name: "theme", description: "Adds theme color classes" },
                { name: "signal", description: "Adds signal color options" }
            ]
        }
    ]
}