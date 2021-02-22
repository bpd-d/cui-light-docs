import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { getJsCodePreview } from "../../components/preview/preview";

const example: ParserNode = {
    tag: "group",
    children: [
        { tag: "text", text: "import { ICuiKeyDownEvent } from './core/models/events'" },
        { tag: "function", text: "onKeyDown", attributes: { ev: "ICuiKeyDownEvent" } },
        { tag: "text", text: "$cui.on('keydown', onKeyDown);" }
    ]
}

export const CuiDocsKeysScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Plugin captures keydown event globally and reemits it via event bus.
            It is used by some components to capture whether user click certain key in order to take some action, e.g. closing a dialog.</>
        },
        {
            name: "Event",
            description: <>Plugin emits event <span className="style-class">keydown</span>.
            To attach to it use method <span className="style-class">on</span> from cUI instance.
            Event passes following data: </>,
            list: [
                { name: 'event', description: "Keydown event" },
                { name: 'timestamp', description: "Event timestamp" },
                { name: 'source', description: "Event source" },
                { name: 'name', description: "Event name" },
            ],
            example: getJsCodePreview(example)
        }
    ]
}