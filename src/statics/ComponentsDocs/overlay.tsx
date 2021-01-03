import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";

function createContainer(children: ParserNode[], cls?: string): ParserNode {
    return {
        tag: "div",
        children: [
            {
                tag: "div",
                classes: ["image-background", "background-200"],
                children: children
            }
        ]
    }

}

function createOverlay(text: string, cls: string): ParserNode {
    return {
        tag: "div",
        text: text,
        styleClass: "cui-padding",
        classes: [cls]
    }
}

const firstExample: ParserNode = {
    tag: "div",
    styleClass: "cui-flex-grid cui-child-width-1-1 cui-child-width-1-2--s",
    children: [
        createContainer([
            createOverlay("cui-overlay-light", "cui-overlay-light"),
        ]),
        createContainer([
            createOverlay("cui-overlay-dark", "cui-overlay-dark"),
        ], "cui-margin-top")
    ]
}

export const CuiDocsOverlayScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: `An overlay does come only with color styling for elements, there is no styling for width and height or position.
            To set an overlay add a HTML element with one of classes:`,
            list: [
                { name: "cui-overlay-light", description: "Sets light, semi transparent background with dark text" },
                { name: "cui-overlay-dark", description: "Sets dark, semi transparent background with light text" }
            ],
            example: GetTabbedPreview(firstExample, "450px")
        }
    ]
}