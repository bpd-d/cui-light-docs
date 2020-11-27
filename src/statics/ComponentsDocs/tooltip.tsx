import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";
function createTooltip(text: string, cls: string): ParserNode {
    return {
        tag: "button",
        classes: ["cui-button", "cui-default"],
        text: text,
        attributes: {
            "cui-tooltip": "Tooltip content"
        }
    };
}

export const tooltipExample = createTooltip("Tooltip", "");

export const CuiDocsTooltipScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: `To add a tooltip, set attribute cui-tooltip on target element and as value put tooltip text:`,
            example: GetTabbedPreview(tooltipExample, "100px")
        },
        {
            name: "Position",
            description: `Default toolitp placement in on the top center in relation to trigger. 
            Position is calculated, based on trigger position and tooltip size, so if it doesn't fit the screen, it is place on some other position.
            It is allowed to force specific position, so tooltip would be shown always on the same position regardless of trigger position.
            To do that, add option pos with one of following values:`,
            list: [
                { name: "top-left", description: "" },
                { name: "top-center", description: "default" },
                { name: "top-right", description: "" },
                { name: "bottom-left", description: "" },
                { name: "bottom-center", description: "" },
                { name: "bottom-right", description: "" },
                { name: "middle-left", description: "" },
                { name: "middle-right", description: "" }
            ]
        },
        {
            name: "Options",
            description: "Tooltip supports following options:",
            properties: [
                { name: "content", type: "string", defaultValue: "null", description: "Tooltip content" },
                { name: "width", type: "number", defaultValue: "150", description: "Tooltip maximum width" },
                { name: "pos", type: "string", defaultValue: "top-center", description: "Tooltip position in relation to element" },
                { name: "margin", type: "number", defaultValue: "8", description: "Tooltip margin from element" },
                { name: "action", type: "action", defaultValue: ".{prefix}-animation-tooltip-in", description: "Action to be toggled on when creating a tooltip" },
                { name: "timeout", type: "number", defaultValue: "3000", description: "Timeout (in ms) that tooltip will be removed after" },
            ]
        },
        {
            name: "CSS options",
            description: "Component name is tooltip and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "print", description: "Adds print mode styling" },
                { name: "animation", description: "Adds support for transition effect" },
            ]
        }
    ]
}