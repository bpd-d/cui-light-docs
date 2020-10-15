import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";
function getAcordionChild(title: string, content: string): ParserNode {
    return {
        tag: "li",
        children: [
            {
                tag: "a",
                classes: ["cui-accordion-title"],
                text: title
            },
            {
                tag: "div",
                classes: ["cui-accordion-content"],
                styleClass: "cui-padding",
                text: content
            }
        ]
    }
}

export const accordionExample: ParserNode = {
    tag: "ul",
    classes: ["cui-accordion"],
    attributes: {
        "cui-accordion": "single: true"
    },
    children: [
        getAcordionChild("Title 1", "Content 1"),
        getAcordionChild("Title 2", "Content 2"),
        getAcordionChild("Title 3", "Content 3")
    ]
}

export const accordionExampleSingle: ParserNode = {
    tag: "ul",
    classes: ["cui-accordion"],
    attributes: {
        "cui-accordion": "single: false"
    },
    children: [
        getAcordionChild("Title 1", "Content 1"),
        getAcordionChild("Title 2", "Content 2"),
        getAcordionChild("Title 3", "Content 3")
    ]
}

export const AccordionDocsScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: "To create an accordion add a container element with class cui-accordion and attribute cui-accordion",
            example: GetTabbedPreview(accordionExample, '180px')
        },
        {
            name: "Expand",
            description: "Accordion allows to control items expand bahavior set option single to true or false:",
            example: GetTabbedPreview(accordionExampleSingle, '270ps')
        },
        {
            name: "Options",
            description: "List of all options available in accordion:",
            properties: [
                { name: "single", defaultValue: "false", type: "boolean", description: "Expand one or many items" },
                { name: "selector", defaultValue: "> * > .{prefix}-accordion-title", type: "string", description: "Selector to element which triggers active state" },
                { name: "content", defaultValue: "> * ", type: "string", description: "Selector to child element" },
                { name: "animation", defaultValue: "true", type: "boolean", description: "Perform open/close animaton" },
                { name: "timeout", defaultValue: "default", type: "number", description: "Defines animation timeout" },
            ]
            // table: {
            //     header: ["Property", "Type", "Default", "Description"],
            //     data: [
            //         ["single", "boolean", "false", "Expand one only or many"],
            //         ["selector", "string", "> * > .{prefix}-accordion-title", "Selector to element which triggers active state"],
            //         ["content", "string", "> * ", "Selector to child element"],
            //         ["animation", "boolean", "true", "Perform open/close animaton"],
            //         ["timeout", "number", "default", "Defines animation timeout"]
            //     ]
            // }
        },

    ]
}