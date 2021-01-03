import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";

const firstExample: ParserNode = {
    tag: "div",
    classes: ["offset-parent", "cui-overflow-y-auto"],
    children: [
        {
            tag: "div",
            children: [
                {
                    tag: "div",
                    classes: ["cui-padding", "cui-background-default", "cui-sticky","cui-box-shadow"],
                    text: "Sticky",
                },
                {
                    tag: "p",
                    classes: ["offset-first-child", "cui-background-accent"],
                },
                {
                    tag: "p",
                    classes: ["offset-second-child", "cui-background-secondary"],
                }
            ]
        }
    ]
}

export const CuiDocsStickyScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>To make element stick to it's scrollable parent top border, add class <span className="style-class">cui-sticky</span> to it. 
            Component supports class <span className="style-class">cui-not-visible</span> which hides element from the view - sample usage of this feature is shown in section related component offset.
            Example below shows most basic usage of this component:</>,
            example: GetTabbedPreview(firstExample, "320px")
        
        }
    ]
}