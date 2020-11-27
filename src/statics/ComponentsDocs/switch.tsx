import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function createSwitch(id: string, options: string, ...cls: string[]): ParserNode {
    return {
        tag: "ul",
        classes: [...cls],
        attributes: {
            "cui-switch": options,
            id: id
        },
        children: [
            createSwitchChild("Item 1", "cui-active", 'cui-background-accent'),
            createSwitchChild("Item 2", "", 'cui-background-secondary'),
            createSwitchChild("Item 3", "", 'cui-background-warning'),
            createSwitchChild("Item 4", "", 'cui-background-success'),
        ]
    }
}

function createSwitchChild(text: string, cls: string, ...styles: string[]): ParserNode {
    return {
        tag: "li",
        classes: [cls],
        children: [
            {
                tag: "div",
                classes: ["cui-padding", ...styles],
                text: text
            }
        ]
    }
}

function createSwitcher(text: string, options: string, ...cls: string[]): ParserNode {
    return {
        tag: "button",
        classes: ["cui-button", "cui-default", ...cls],
        text: text,
        attributes: {
            "cui-switcher": options,
        }
    }
}

function createIndicator(id: string, ...cls: string[]): ParserNode {
    return {
        tag: "ul",
        classes: ["cui-switcher-indicator"],
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

function createIndicatorChild(cls?: string): ParserNode {
    return {
        tag: "li",
        classes: cls ? [cls] : [],
    }
}

const firstExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "div",
            children: [
                createSwitcher("Previous", "target: #switch-test-001; index: prev"),
                createSwitcher("Next", "target: #switch-test-001; index: next", "cui-margin-left"),
            ]
        },
        createSwitch("switch-test-001", "height: 60px", "cui-margin-top")
    ]
}

const secondExample: ParserNode = createSwitch("switch-test-002", 'autoTimeout: 5000')
const thirdExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "div",
            children: [
                createSwitcher("Previous", "target: #switch-test-003; index: prev"),
                createSwitcher("Next", "target: #switch-test-003; index: next", "cui-margin-left"),
            ]
        },
        createSwitch("switch-test-003", "switch: #switch-test-004", "cui-margin-top"),
        createSwitch("switch-test-004", "", "cui-margin-top"),
    ]
}

const fourthExample: ParserNode = {
    tag: "div",
    children: [
        {
            tag: "div",
            children: [
                createSwitcher("Previous", "target: #switch-test-005; index: prev"),
                createSwitcher("Next", "target: #switch-test-005; index: next", "cui-margin-left"),
            ]
        },
        createSwitch("switch-test-005", "links: #switch-ind-001 > li", "cui-margin-small-top"),
        {
            tag: "div",
            classes: ["cui-padding", "cui-flex-center"],
            children: [
                createIndicator("switch-ind-001")
            ]
        }
    ]
}

export const CuiDocsSwitchScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Component is used to switch between elements in group.
            Only one element is shown at the time occuping all available space.
            Perfect usage example is switcher tab with switch used in all examples show across all documentation page.
            Elements can be switched with or without an animation.
            Also it is possible to remotely switch elements using <span className="style-class">Switcher</span> or by calling an event.</>,
            example: GetTabbedPreview(firstExample, "140px")
        },
        {
            name: "Links",
            description: <>Switch is able to change state of linked item (switcher or indicator) on self state change.
            To set it up, add option <span className="style-element">links</span> and provide selector to collection of items that need to have set class <span className="style-class">cui-active</span> on switch state change.
            Most common usage example would be a tab element like all examples are shown in documentation, but following example shows different usage:</>,
            example: GetTabbedPreview(fourthExample, "200px")
        },
        {
            name: "Auto",
            description: <>Set option <span className="style-element">autoTimeout</span> to start up a task that will switch items after certain period of time</>,
            example: GetTabbedPreview(secondExample, "60px")
        },
        {
            name: "Sync",
            description: <>Switch is able to trigger other component to switch self at the same time.
            To set up this, set option <span className="style-element">switch</span> and provide selector to component suppose to switch synchronously.</>,
            example: GetTabbedPreview(thirdExample, "200px")
        },
        {
            name: "Options",
            description: `Switch implements following options:`,
            properties: [
                { name: "targets", type: "selector", defaultValue: "> *", description: "Selects children that will be switched" },
                { name: "in", type: "actions", defaultValue: ".cui-switch-animation-default-in", description: "Actions to be performed on next element" },
                { name: "out", type: "actions", defaultValue: ".cui-switch-animation-default-out", description: "Actions to be performed on current element" },
                { name: "timeout", type: "number", defaultValue: "300", description: "Actions performance duration" },
                { name: "autoTimeout", type: "number", defaultValue: "-1", description: "Turns on task to automatic switch" },
                { name: "links", type: "selector", defaultValue: "null", description: "selector to linked items, like switcher - to be changed on switch change" },
                { name: "switch", type: "selector", defaultValue: "null", description: "selector to other switch components - for synchronized switch" },
                { name: "height", type: "string | auto", defaultValue: "auto", description: "Sets height of the element - static value or automatically calculated" },
                { name: "loop", type: "boolean", defaultValue: "false", description: "Determines whether children are switched in loop - affects only indexes: next and prev" }
            ]
        },
        {
            name: "Emits",
            description: "Switch component emits following events:",
            list: [
                { name: "switched", description: "Emitted after switch has been finished. Provides next (current index) value." },
                { name: "switch", description: "Emitted only to linked switch components when to force synchronized switch operation." },
            ]
        },
        {
            name: "Events",
            description: "Component accepts following events:",
            list: [
                { name: "switch", description: "Performs switch. Accepts values: next, prev or number" }
            ]
        }
    ]
}