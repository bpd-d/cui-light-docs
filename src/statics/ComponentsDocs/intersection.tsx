import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function createChild(text: string): ParserNode {
    return {
        tag: "div",
        classes: ["cui-padding", "intersection-child"],
        children: [
            {
                tag: "h2",
                classes: ["cui-h2"],
                text: text
            }
        ]
    }
}

const firstExample: ParserNode = {
    tag: "div",
    classes: ["intersection-parent", "cui-overflow-y-auto"],
    attributes: {
        "cui-intersection": "action: .cui-background-accent; offset: 0.4"
    },
    children: [
        createChild("Item 1"),
        createChild("Item 2"),
        createChild("Item 3"),
        createChild("Item 4")
    ]
}

export const CuiDocsIntersectionScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Component intersection is used to trigger an action on targets whenever the targets are in view.
            It uses built-in intersection observer to track visibility of the targets.
            To setup this component set attribute <span className="style-class">cui-intersection</span> on parent element.
            As options set targets selector (default is &gt; *), action to be triggered and offset if needed.
            Offset is an equivalent of intersection ratio provided by intersection observer. Ratio tells how much of target viewbox is intersecting with a viewport.
            If ratio exceeds offset then action is triggered on. Following example shows usage of this component:
            </>,
            example: GetTabbedPreview(firstExample, "320px")
        },

    ]
}