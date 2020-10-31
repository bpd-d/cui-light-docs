import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function createLiWithCard(text: string): ParserNode {
    return {
        tag: "li",
        classes: ["cui-margin-vertical"],
        children: [
            {
                tag: "div",
                classes: ["cui-card", "cui-default"],
                children: [
                    {
                        tag: "div",
                        text: text
                    }
                ]
            }
        ]
    }
}

function createLiWithTrigger(text: string): ParserNode {
    return {
        tag: "li",
        classes: ["cui-margin-vertical"],
        children: [
            {
                tag: "div",
                classes: ["cui-card", "cui-default"],
                children: [
                    {
                        tag: "div",
                        children: [
                            {
                                tag: "span",
                                classes: ["trigger"],
                                attributes: {
                                    "cui-icon": "stretch"
                                }
                            },
                            {
                                tag: "span",
                                classes: ["cui-margin-left"],
                                text: text
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const firstExample: ParserNode = {
    tag: "ul",
    attributes: {
        "cui-sortable": ""
    },
    children: [
        createLiWithCard("Item 1"),
        createLiWithCard("Item 2"),
        createLiWithCard("Item 3"),
        createLiWithCard("Item 4"),
        createLiWithCard("Item 5"),
    ]
}

const secondExample: ParserNode = {
    tag: "ul",
    attributes: {
        "cui-sortable": "trigger: > li .trigger"
    },
    children: [
        createLiWithTrigger("Item 1"),
        createLiWithTrigger("Item 2"),
        createLiWithTrigger("Item 3"),
        createLiWithTrigger("Item 4"),
        createLiWithTrigger("Item 5"),
    ]
}


export const CuiDocsSortableScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Use sortable to change order of the element if in list or grid. Sortable implements drag and drop feature for visual interaction with children.
            Feature start after long press on child element.
            To setup this component add element with attribute <span className="style-class">cui-sortable</span>.
            Default implementation expects to element <span className="style-element">UL</span> to ba a parent element and <span className="style-element">li</span> childrens to be sortable child items:</>,
            example: GetTabbedPreview(firstExample, "400px")
        },
        {
            name: "Trigger",
            description: <>By default whole target is considered as trigger. This means that click on specific child will start drag and drop procedure.
            This behavior can be changed by setting up a trigger option which basically is a selector for elements that will be used as triggers, e.g. button inside of card of child:</>,
            example: GetTabbedPreview(secondExample, "400px")
        },
        {
            name: "Custom",
            description: <>To adapt sortable to custom HTML elements set options target and trigger to match your children and target selectors:</>,

        },
        {
            name: "Options",
            description: <>By default whole target is considered as trigger. This means that click on specific child will start drag and drop procedure.
            This behavior can be changed by setting up a trigger option which basically is a selector for elements that will be used as triggers, e.g. button inside of card of child:</>,

        }
    ]
}