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
            example: GetTabbedPreview(accordionExample)
        },
        {
            name: "Expand",
            description: "Accordion allows to control items expand bahavior set option single to true or false:",
            example: GetTabbedPreview(accordionExampleSingle)
        },
        {
            name: "Options",
            description: "List of all options available in accordion:"
        },

    ]
}