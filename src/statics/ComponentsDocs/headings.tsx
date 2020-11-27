import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function createHeading(text: string, type: string, cls: string): ParserNode {
    return {
        tag: type,
        classes: [cls],
        text: text
    }
}

const firstExample: ParserNode = {
    tag: "div",
    children: [
        createHeading("Heading 1", "h1", "cui-h1"),
        createHeading("Heading 2", "h2", "cui-h2"),
        createHeading("Heading 3", "h3", "cui-h3"),
        createHeading("Heading 4", "h4", "cui-h4"),
    ]
}

export const CuiDocsHeadingsScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: "cUI brings some styling to headings element which is applied after adding classes:",
            list: [
                { name: "cui-h1", description: "Largest heading" },
                { name: "cui-h2", description: "Good for sections header" },
                { name: "cui-h3", description: "With smaller size brings a bit bolder style in opposition to light weight larger headers" },
                { name: "cui-h4", description: "Bold style, with default font size" }
            ],
            example: GetTabbedPreview(firstExample, "250px")
        },
        {
            name: "CSS options",
            description: "Component name is heading and supports following CSS build options:",
            list: [
                { name: "title", description: "Adds title classes" },
                { name: "h1", description: "Adds h1 classes" },
                { name: "h2", description: "Adds h2 classes" },
                { name: "h3", description: "Adds h3 classes" },
                { name: "h4", description: "Adds h4 classes" }
            ]
        }
    ]
}