import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function createSequence(modifiers: string[], items: ParserNode[]): ParserNode {
    let mods = modifiers ? modifiers : [];
    return {
        tag: "div",
        classes: ["cui-sequence-step", ...mods],
        children: items
    }
}

function createSequenceItem(text: string, icon: string, modifiers: string[], description: string): ParserNode {
    let mods = modifiers ? modifiers : [];
    let children = [createMarker(text, icon)];
    if (description) {
        children.push(createDescription(description))
    }
    return {
        tag: "div",
        classes: ["cui-sequence-item", ...mods],
        children: children
    }
}

function createMarker(text: string, icon?: string): ParserNode {
    let child: ParserNode = {
        tag: "span",
        text: text,
    }

    if (icon) {
        child.text = "";
        child.attributes = {
            'cui-icon': icon
        }
    }
    return {
        tag: "div",
        classes: ["cui-sequence-item-marker"],
        children: [child]
    };
}

function createDescription(text: string): ParserNode {
    return {
        tag: "span",
        text: text,
        classes: ["cui-sequence-item-description"]
    }
}

const simpleExample: ParserNode = createSequence(["sequence-height"], [
    createSequenceItem("1", null, ["cui-completed"], null),
    createSequenceItem("2", null, ["cui-active"], null),
    createSequenceItem("3", null, [], null),
])

const descriptionExample: ParserNode = createSequence(["sequence-height"], [
    createSequenceItem("1", null, ["cui-completed"], "Item 1"),
    createSequenceItem("2", null, ["cui-active"], "Item 2"),
    createSequenceItem("", null, [], "Item 3"),
])

const iconExample: ParserNode = createSequence(["sequence-height"], [
    createSequenceItem("1", "checkmark", ["cui-completed"], "Item 1"),
    createSequenceItem("2", "mail", ["cui-active"], "Item 2"),
    createSequenceItem("", null, [], "Item 3"),
])

const themeExample: ParserNode = {
    tag: "div",
    children: [
        createSequence(["cui-accent", "sequence-height"], [
            createSequenceItem("1", "checkmark", ["cui-completed"], "Item 1"),
            createSequenceItem("2", "mail", ["cui-active"], "Item 2"),
            createSequenceItem("", null, [], "Item 3"),
        ]),
        createSequence(["cui-secondary", "cui-margin-top", "sequence-height"], [
            createSequenceItem("1", "checkmark", ["cui-completed"], "Item 1"),
            createSequenceItem("2", "mail", ["cui-active"], "Item 2"),
            createSequenceItem("", null, [], "Item 3")
        ])
    ]
}

const verticalExample: ParserNode = createSequence(["cui-vertical"], [
    createSequenceItem("1", "checkmark", ["cui-completed", "sequence-height"], "Item 1"),
    createSequenceItem("2", "mail", ["cui-active", "sequence-height"], "Item 2"),
    createSequenceItem("", null, ["sequence-height"], "Item 3"),
])


export const CuiDocsSequenceScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Component can be used to guide user through steps in order to accomplish certain task.
            Component provides highlight for current and completed task.
            Also comes with options to color it with accent or secondary colors.
            To setup this component add <span className="style-element">div</span> with class <span className="style-class">cui-sequence-step</span> and children, all with class <span className="style-class">cui-sequence-item</span>.
            Item supports two modifiers: <span className="style-class">cui-completed</span> and <span className="style-class">cui-active</span>. They are responsible for styling item for corresponding state.
            Each step item is created from marker - div element with class <span className="style-class">cui-sequence-item-marker</span>, which creates rounded placeholder for step highlight. Marker can hold simple text/link/icon.
            Item supports also description item that shows text or visual representation of the step. This element shall have class <span className="style-class">cui-sequence-item-description</span>. It can be a text, icon or any container that wraps few elements:
            </>,
            example: GetTabbedPreview(simpleExample, "100px")
        },
        {
            name: "Description",
            description: <>To add description, add an HTML element with class <span className="style-class">cui-sequence-item-description</span> to the sequence item:</>,
            example: GetTabbedPreview(descriptionExample, "100px")
        },
        {
            name: "Icon Marker",
            description: <>Marker is small element that can hold nothing, simple text (preferably numbers) or single icon:</>,
            example: GetTabbedPreview(iconExample, "100px")
        },
        {
            name: "Theme",
            description: <>Seqence can be colored with accent or secondary theme color:</>,
            example: GetTabbedPreview(themeExample, "240px")
        },
        {
            name: "Vertical",
            description: <>To change component to vertical, add class <span className="style-class">cui-vertical</span> to parent element:</>,
            example: GetTabbedPreview(verticalExample, "300px")
        },
        {
            name: "CSS options",
            description: "Component name is sequence and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "print", description: "Adds print mode styling" },
                { name: "theme", description: "Adds theme color classes" },
                { name: "vertical", description: "Adds vertical alignment option classes" },
            ]
        }
    ]
}