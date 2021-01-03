
import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { ExamplePreview, GetTabbedPreview } from "../../components/preview/preview";

function getBanner(text: string, cls?: string): ParserNode {
    return {
        tag: "div",
        classes: cls ? [cls] : undefined,
        attributes: {
            "cui-banner": ""
        },
        text: text
    }
}

const bannerFirst: ParserNode = getBanner("Banner")
const bannerSecond: ParserNode = {
    tag: "div",
    children: [
        getBanner("Accent", "cui-accent"),
        getBanner("Secondary", "cui-secondary cui-margin-top"),
        getBanner("Success", "cui-success cui-margin-top"),
        getBanner("Error", "cui-error cui-margin-top"),
        getBanner("Warning", "cui-warning cui-margin-top"),
    ]
}

const bannerThird: ParserNode = {
    tag: "div",
    attributes: {
        "cui-banner": ""
    },
    children: [
        {
            tag: "span",
            classes: ["cui-margin-left", "cui-message"],
            text: "Banner advanced"
        },
        {
            tag: "span",
            classes: ["cui-message-icon"],
            attributes: {
                "cui-icon": "error"
            }
        },
        {
            tag: "a",
            attributes: {
                "cui-icon": "close",
                "cui-close": ""
            }
        }
    ]
}

const bannerFourth = {
    tag: "div",
    attributes: {
        "cui-banner": "swipe: Y"
    },
    text: "Swipe to close"
}


export const CuiDocsBannerScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: (<>Banners are small, closable components which intended usage is notifing user about events happeing on the page.
            Component comes with variety of styling options. The most basic option is to add cui-banner attribute to div element. Use cui-close component to close it:
            </>),
            example: GetTabbedPreview(bannerFirst, "60px")
        },
        {
            name: "Styling",
            description: (<>To style banner with some color extend component with style classes: cui-accent, cui-secondary, cui-success, cui-warning, cui-error:
            </>),
            example: GetTabbedPreview(bannerSecond, "350px")
        },
        {
            name: "Advanced",
            description: (<>Component supports more complex styling with few additional classes.
            Add element with cui-message-icon to add an icon at the very begining. Wrap banner text with class cui-message.
            If you want to add icon closing/hiding element insert a link element with class cui-close and the same attribute, see example below
            </>),
            example: GetTabbedPreview(bannerThird, "60px")
        },
        {
            name: "Swipe",
            description: (<>Add option swipe to cui-banner to turn on option "Swipe to close":
            </>),
            example: GetTabbedPreview(bannerFourth, "60px")
        },
        {
            name: "Options",
            description: "Due to having a support for swipe banner supports some properties:",
            properties: [
                {
                    name: "swipe",
                    description: "Enables/disables swipe on the component",
                    type: "boolean",
                    defaultValue: "false"
                },
                {
                    name: "timeout",
                    description: "Animation timeout",
                    type: "number",
                    defaultValue: "Default value (300)"
                },
                {
                    name: "openAct",
                    description: "Component open animation action",
                    defaultValue: "cui-animation-fade-in",
                    type: "action"
                },
                {
                    name: "closeAct",
                    description: "Component close animation action",
                    defaultValue: "cui-animation-fade-out",
                    type: "action"
                },
            ]
        },
        {
            name: "Events",
            description: "Banner will react for two events:",
            list: [
                { name: "open", description: "Shows banner on the screen if it is not showing" },
                { name: "close", description: "Hides banner from the screen." }
            ]
        },
        {
            name: "Emits",
            description: "Banner emits two events:",
            list: [
                { name: "opened", description: "Emitted after banner is opened" },
                { name: "closed", description: "Emitted after banner is closed" }
            ]
        },
        {
            name: "CSS options",
            description: "Component name is banner and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "print", description: "Adds print mode styling" },
                { name: "theme", description: "Adds theme colored banner options" },
                { name: "signal", description: "Adds signal colored banner options" }
            ]
        }
    ]
}