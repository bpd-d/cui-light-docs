import * as React from "react";
import { ParserNode } from "src/api/DocsElementParser/interfaces";
import { DocsScript } from "src/components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";

function create(attr: string): ParserNode {
    return {
        tag: "div",
        classes: ["cui-container"],
        text: "Resize container",
        attributes: {
            "cui-resize": attr
        }
    }
}


const firstExample: ParserNode = create(`mode:simple;default:.cui-background-shade;s:.cui-background-accent;m:.cui-background-secondary;l:.cui-background-success;xl:.cui-background-error`);
const secondExample: ParserNode = create(`mode:smart;default:.cui-background-shade;s:.cui-background-accent;m:.cui-background-secondary;l:.cui-background-success;xl:.cui-background-error`);
const thirdExample: ParserNode = create(`delay:500;mode:simple;default:.cui-background-shade;s:.cui-background-accent;m:.cui-background-secondary;l:.cui-background-success;xl:.cui-background-error`);
export const CuiDocsResizeScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Component is used to trigger an action once window size reaches certain value.
            Most desired usage for to set a different image in regard to screen size.
            Component supports 5 different screen size ranges: default, small (&gt;640px), medium (&gt;960px), large (&gt;1200px) and xlarge (&gt;1600px)</>,
            example: GetTabbedPreview(firstExample, "60px")
        },
        {
            name: "Mode",
            description: <>There are to options for this property. It tells how actions shall be set for next sizes. In simple mode, default action will be set for each one that is not defined.
            For example, if screen size is large and action correspoinding to this value is not set, then default will be used instead. Also new actions will be set right after window resize.
            Mode smart is, like name shows, smarter then default one. It tries to set largest available action if matching is not available.
            For example, if screen size is medium and action for medium is not set, then component sets small or default is small is also not available.
            In this mode, actions are changed only when component is in view.</>,
            example: GetTabbedPreview(secondExample, "60px")

        },
        {
            name: "Delay",
            description: <>Action change can be delayed by setting a <span className="style-class">delay</span> property</>,
            example: GetTabbedPreview(thirdExample, "60px")
        },
        {
            name: "Options",
            description: `Resize implements following options:`,
            properties: [
                { name: "delay", type: "selector", defaultValue: "0", description: "Delay that new action is applied after" },
                { name: "mode", type: "simple|smart", defaultValue: "simple", description: "Sets resize mode" },
                { name: "default", type: "actions", defaultValue: "undefined", description: "Default action for screens smaller than small" },
                { name: "small", type: "actions", defaultValue: "undefined", description: "Action for small screens" },
                { name: "medium", type: "actions", defaultValue: "undefined", description: "Action for medium screens" },
                { name: "large", type: "actions", defaultValue: "undefined", description: "Action for large screens" },
                { name: "xlarge", type: "actions", defaultValue: "undefined", description: "Action for xlarge screens" },
            ]
        },
    ]
}