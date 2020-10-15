import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function createLink(name: string, ...classes: string[]): ParserNode {
    return {
        tag: "a",
        attributes: {
            href: "#"
        },
        classes: ['cui-link', ...classes],
        styleClass: "cui-margin",
        text: name
    }
}

const linkExample: ParserNode = createLink("Simple link");

const accentsExample: ParserNode = {
    tag: "div",
    children: [
        createLink("Accent link", "cui-accent"),
        createLink("Secondary link", "cui-secondary"),
        createLink("Error link", "cui-error"),
        createLink("Warning link", "cui-warning"),
        createLink("Success link", "cui-success"),
    ]
}


export const CuiDocsLinkScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: "Add class cui-link to any anchor element to give it a different styling:",
            example: GetTabbedPreview(linkExample)
        },
        {
            name: "Colors",
            description: "Links also come with signal and theme colors:",
            example: GetTabbedPreview(accentsExample)
        }
    ]
}