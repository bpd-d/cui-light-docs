import * as React from "react";
import { getJsCodePreview } from "../../components/preview/preview";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";

const clickEventExample: ParserNode = {
    tag: "group",
    children: [
        { tag: "function", text: "onClick", attributes: { ev: "MouseEvent" } },
        { tag: "text", text: "$cui.on('windowclick', onClick)" }
    ]
}

export const CuiDocsClickScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Plugin is simply used for user click detection on the document.
            It is used by some components to detect click outside of target element.
            For example, component dialog uses this plugin for feature that closes component when user clicks outside of it.</>
        },
        {
            name: "Event",
            description: <>Plugin emits an event every times user performs click.
            To attach to this event, use method <span className="style-class">on</span> from cUI instance passing event name <span className="style-class">windowclick</span> and callback:</>,
            example: getJsCodePreview(clickEventExample)
        }
    ]
}