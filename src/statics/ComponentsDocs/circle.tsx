import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

const firstExample: ParserNode = {
    tag: "div",
    classes: ["cui-flex-center"],
    children: [
        {
            tag: "span",
            classes: ["cui-svg"],
            attributes: {
                "cui-circle-progress": "80"
            }
        }
    ]
}

export const CuiDocsCircleScript: DocsScript = {
    sections: [
        {
            name: 'Usage',
            description: <>Component circle was implemented to provide circular based progress bar.
            To create such component, add any HTML element with attribute <span className="style-class">cui-circle-progress</span>. As value put progress value 0..100:</>,
            example: GetTabbedPreview(firstExample, "150px")
        }
    ]
}