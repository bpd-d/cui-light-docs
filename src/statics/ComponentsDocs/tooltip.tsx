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
        }
    ]
} 