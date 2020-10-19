import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";
function createTooltip(text: string, cls: string): ParserNode {
    return {
        tag: "div",
        classes: ['cui-tooltip-container'],
        children: [
            {
                tag: "button",
                classes: ["cui-button", "cui-default"],
                text: text
            },
            {
                tag: "span",
                classes: ["cui-tooltip", cls],
                text: text
            }
        ]
    };
}

export const tooltipExample = createTooltip("Tooltip", "cui-tooltip-bottom-right");

export const CuiDocsTooltipScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: `To add a tooltip, wrap target with div with class cui-tooltip-container 
            and add span with class cui-tooltip and class pointing to tooltip position if necessary`,
            example: GetTabbedPreview(tooltipExample, "100px")
        },
        {
            name: "Position",
            description: `You can set custom tooltip position by adding one on following classes to cui-tooltip:`,
            list: [
                { name: "cui-tooltip-top-left", description: "Puts tooltip in the top left corner of the parent" },
                { name: "cui-tooltip-top-center", description: "Puts tooltip in the top center part of the parent" },
                { name: "cui-tooltip-top-right", description: "Puts tooltip in the top right corner of the parent" },
                { name: "cui-tooltip-bottom-left", description: "Puts tooltip in the bottom left corner of the parent" },
                { name: "cui-tooltip-bottom-center", description: "Puts tooltip in the bottom center part of the parent" },
                { name: "cui-tooltip-bottom-right", description: "Puts tooltip in the bottom right corner of the parent" },
            ]
        }
    ]
} 