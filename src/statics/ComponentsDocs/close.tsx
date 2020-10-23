import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

const firstExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "button",
            attributes: { "cui-open": "" },
            text: "Open dialog",
            classes: ["cui-button", "cui-default"]
        },
        {
            tag: "div",
            attributes: { "cui-dialog": "" },
            children: [
                {
                    tag: "div",
                    classes: ["cui-dialog-container cui-padding"],
                    children: [
                        { tag: "button", attributes: { "cui-close": "" }, classes: ["cui-button", "cui-default"], text: "Close dialog" }
                    ]
                }

            ]
        }
    ]
}

export const CuiDocsCloseScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Component <span className="style-element">close</span> is used to close cUI components (like dialog or float) or remove <span className="style-class">cui-active</span> class from HTML element followed by action, e.g. animation.
            To use this component add HTML element with attribute <span className="style-class">cui-close</span>.
            As value put target selector so component can query an element to interact with.
            If no value is provided them it will be looking for nearest parent that is a cUI component.
            Example below shows interaction with dialog:</>,
            example: GetTabbedPreview(firstExample, "60px")
        }

    ]
}