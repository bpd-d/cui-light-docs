import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";

function createContainer(name: string, ...classes: string[]): ParserNode {
    return {
        tag: "div",
        children: [createLink(name, ...classes)]
    }
}

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
        createContainer("Accent link", "cui-accent"),
        createContainer("Secondary link", "cui-secondary"),
        createContainer("Error link", "cui-error"),
        createContainer("Warning link", "cui-warning"),
        createContainer("Success link", "cui-success"),
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
        },
        {
            name: "CSS options",
            description: "Component name is link and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "print", description: "Adds print mode styling" },
                { name: "theme", description: "Adds theme color classes" },
                { name: "signal", description: "Adds signal color classes" },
                { name: "animation", description: "Adds support for transition effect" },
            ]
        }
    ]
}