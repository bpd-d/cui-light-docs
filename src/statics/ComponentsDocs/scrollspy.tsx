import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";

function createChild(text: string): ParserNode {
    return {
        tag: "div",
        classes: ["scrollspy-child", "cui-padding"],
        text: text
    }
}

function createScrollSpy(options: string): ParserNode {
    return {
        tag: "div",
        classes: ["cui-overflow-y-auto", 'scrollspy-parent'],
        attributes: {
            'cui-scrollspy': options ?? ""
        },
        children: [
            createChild("Item 1"),
            createChild("Item 2"),
            createChild("Item 3"),
            createChild("Item 4")
        ]
    }
}

function createIndicator(id: string, cls: string): ParserNode {
    return {
        tag: "ul",
        classes: ["cui-switcher-indicator", cls],
        attributes: {
            id: id,
        },
        children: [
            createIndicatorChild(),
            createIndicatorChild(),
            createIndicatorChild(),
            createIndicatorChild(),
        ]
    }
}

function createIndicatorChild(): ParserNode {
    return {
        tag: "li",
    }
}

const firstExample: ParserNode = createScrollSpy("action: .cui-background-accent; ratio: 0.4")
const secondExample: ParserNode = createScrollSpy("action: .cui-background-accent; ratio: 0.2; mode: multi")
const thirdExample: ParserNode = {
    tag: "div",
    children: [
        createScrollSpy("action: .cui-background-accent; ratio: 0.5; link: #sp-test-001 > li; linkAction: .cui-active"),
        {
            tag: "div",
            classes: ["cui-flex-center"],
            children: [
                createIndicator("sp-test-001", "cui-margin-top")
            ]
        }

    ]
}


export const CuiDocsScrollSpyScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Scrollspy triggers an action on child element that passed ratio condition.
            This component supports two modes: single (default) and multiple. In the first, last intersecting element that passes ratio condition gets action triggered in as on example below:</>,
            example: GetTabbedPreview(firstExample, "320px")
        },
        {
            name: "Modes",
            description: <>Previous example shows <span className="style-element">single</span> mode, where last matching element has action triggered. Second mode, <span className="style-element">multi</span>, triggers action on all intersecting elements that pass ratio condition.
            To enable it, set option <span className="style-class">mode: multi</span>:</>,
            example: GetTabbedPreview(secondExample, "320px")
        },
        {
            name: "Links",
            description: <>Scrollspy also is able to trigger an action on linked element.
            For example, if page has an aside panel that shows list of headers from all sections, component can highlight all of them that are matching to section shown currently on the page.
            To enable this behavior, set following options:</>,
            list: [
                { name: "link", description: "Provide link selector. Linked elements don't have to belong to component as query selection method is performed on the document element" },
                { name: "linkAction", description: "Provide action which suppose to be triggered on link element that matches to index of component child intersecting current view" }
            ],
            example: GetTabbedPreview(thirdExample, "360px")
        },
        {
            name: "Options",
            description: "Scrollspy supports following options:",
            properties: [
                { name: "selector", type: "selector", defaultValue: "> *", description: "Selector for child elements" },
                { name: "action", type: "actions", defaultValue: "null", description: "List of actions to be toggled on children" },
                { name: "link", type: "selector", defaultValue: "null", description: "Selector for linked items" },
                { name: "linkAction", type: "actions", defaultValue: "null", description: "List of action to be toggled on linked elements when corresponding children are intersecting view" },
                { name: "mode", type: "single|multi", defaultValue: "single", description: "Determines mode used: single vs multi" },
                { name: "ratio", type: "0..1", defaultValue: "0", description: "Defines ratio value that must be passed to mark child as intersecting view" },
                { name: "isRoot", type: "boolean", defaultValue: "false", description: "If set to true, scroll listener gets attached to window, not component" },
                { name: "threshold", type: "number", defaultValue: "0", description: "Threshold for scroll listener - tells how many pixels view must be scrolled on to generate event call to intersection" },
            ]
        },
        {
            name: "Events",
            description: "This component doesn't not accept any event calls for now"
        },
        {
            name: "Emits",
            description: "Scrollspy emits following events:",
            list: [
                { name: "scroll", description: "Emitted every scoll listener call. Provides following properties: top: scroll top; left: scroll left; scrolling: is scrolling; initial: is first call after attach; source: event source; timestamp" },
                { name: "targetchange", description: "Emitted when intersecting elements are changed. Provides following properties: intersecting: intersecting elements; timestamp" },
            ]
        }
    ]
}
