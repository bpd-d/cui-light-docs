import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function getParentWithChild(name: string, classes: string): ParserNode {
    return {
        tag: "div",
        styleClass: "cui-background-shade cui-margin-small-top",
        children: [
            {
                tag: "span",
                classes: [classes],
                styleClass: "cui-background-default",
                text: name
            }
        ]
    }
}

function createParent(children: ParserNode[]) {
    return {
        tag: "div",
        styleClass: "cui-background-shade cui-margin-small-top cui-padding-small",
        children: [
            ...children
        ]
    }
}

function getMarginAll() {
    return createParent([
        {
            tag: "span",
            styleClass: "cui-background-default",
            text: "element"
        },
        {
            tag: "span",
            classes: ['cui-margin'],
            styleClass: "cui-background-default",
            text: "cui-margin"
        },
        {
            tag: "span",
            styleClass: "cui-background-default",
            text: "element"
        },
    ])
}

function getMarginLeft() {
    return createParent([
        {
            tag: "span",
            styleClass: "cui-background-default",
            text: "element"
        },
        {
            tag: "span",
            classes: ['cui-margin-left'],
            styleClass: "cui-background-default",
            text: "cui-margin-left"
        },
        {
            tag: "span",
            styleClass: "cui-background-default",
            text: "element"
        },
    ])
}

function getMarginRight() {
    return createParent([
        {
            tag: "span",
            styleClass: "cui-background-default",
            text: "element"
        },
        {
            tag: "span",
            classes: ['cui-margin-right'],
            styleClass: "cui-background-default",
            text: "cui-margin-right"
        },
        {
            tag: "span",
            styleClass: "cui-background-default",
            text: "element"
        },
    ])
}

const marginExample: ParserNode = {
    tag: "div",
    children: [
        getMarginAll(),
        getMarginLeft(),
        getMarginRight(),
        getParentWithChild("Margin", 'cui-margin'),
        getParentWithChild("Margin top", 'cui-margin-top'),
        getParentWithChild("Margin bottom", 'cui-margin-bottom'),
        getParentWithChild("Margin top", 'cui-margin-top'),
        getParentWithChild("Margin bottom", 'cui-margin-bottom')
    ]
}


export const CuiDocsSpacesScript: DocsScript = {
    sections: [
        {
            name: "Margin",
            description: "Provides classes to add or extend margin on all sides or each side separately. They come in three options: default, small and large.",
            list: [
                { name: "cui-margin", description: "Sets margin for all element side" },
                { name: "cui-margin-SIZE", description: "Add small or large suffix to class to increase or decrease margin" },
                { name: "cui-margin-SIZE-SIDE", description: "Add left, right, top,bottom to limit margin to only one side" }
            ],
            example: GetTabbedPreview(marginExample, '200px')
        },
        {
            name: "Padding",
            description: "Provides classes to add or extend padding on all sides or each side separately. They come in three options: default, small and large:",
            list: [
                { name: "cui-padding", description: "Sets padding for all element side" },
                { name: "cui-padding-SIZE", description: "Add small or large suffix to class to increase or decrease padding" },
                { name: "cui-padding-SIZE-SIDE", description: "Add left, right, top,bottom to limit padding to only one side" }
            ]
        },
        {
            name: "Remove",
            description: "Provides classes to remove padding or margin on all sides or each side separately:",
            list: [
                { name: "cui-padding-remove", description: "Removes padding for all element side" },
                { name: "cui-padding-remove-SIDE", description: "Removes padding from element on specific side" },
                { name: "cui-margin-remove", description: "Removes margin for all element side" },
                { name: "cui-margin-remove-SIDE", description: "Removes margin from element on specifi side" }
            ]
        },
        {
            name: "CSS options",
            description: "Component name is spaces and supports following CSS build options:",
            list: [
                { name: "margin", description: "Adds base margin classes" },
                { name: "padding", description: "Adds base padding classes" },
                { name: "remove", description: "Adds remove classes to padding and margin" },
                { name: "small", description: "Adds small classes to padding and margin" },
                { name: "large", description: "Adds large classes to padding and margin" },
                { name: "auto", description: "Adds margin auto classes" },
                { name: "responsive", description: "Adds responsive options to small/large/remove/auto classes in padding and margin" },
                { name: "clearfix", description: "Adds clearfix option class" },
                { name: "display", description: "Adds block/inline/inline-block classes" },
                { name: "wrapper", description: "Adds a wrapper class" },
                { name: "overflow", description: "Adds an overflow classes" },
            ]
        }
    ]
}