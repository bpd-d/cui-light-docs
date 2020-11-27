import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function create(text: string, cls: string): ParserNode {
    return {
        tag: "div",
        classes: ["cui-card", "cui-default", "cui-overflow-hidden", "cui-margin-top", cls],
        children: [
            { tag: "div", text: text }
        ]
    }
}

const firstExample = {
    tag: "div",
    children: [
        create("1-1", "cui-width-1-1"),
        create("6-6", "cui-width-6-6"),
        create("5-5", "cui-width-5-5"),
        create("5-6", "cui-width-5-6"),
        create("4-5", "cui-width-4-5"),
        create("3-4", "cui-width-3-4"),
        create("2-3", "cui-width-2-3"),
        create("4-6", "cui-width-4-6"),
        create("3-5", "cui-width-3-5"),
        create("1-2", "cui-width-1-2"),
        create("2-4", "cui-width-2-4"),
        create("3-6", "cui-width-3-6"),
        create("2-5", "cui-width-2-5"),
        create("1-3", "cui-width-1-3"),
        create("2-6", "cui-width-2-6"),
        create("1-4", "cui-width-1-4"),
        create("1-5", "cui-width-1-5"),
        create("1-6", "cui-width-1-6"),
    ]
}

const secondExample = create("1-6, 1-4--m, 1-3--l", "cui-width-1-6 cui-width-1-4--m cui-width-1-3--l");


export const CuiDocsWidthScript: DocsScript = {
    sections: [{
        name: "Usage",
        description: `Width classes can be used to take control over elements width, even responsively on different screen sizes.
        cUI element grid is divided on 6 parts so users can basically choose from value 1-1 (100%) to 5-6 (~83%). All width class names start from cui-width- followed by proper value. 
        To set width for certain screen sizes group one of suffixes --s, --m, --l, --xl:`,
        example: GetTabbedPreview(firstExample, "1300px")
    }, {
        name: "Responsive",
        description: `To add responsivity to elements with static width, classes support alse screen size value. 
            Responsive option sets width for indicated size and bigger, e.g. cui-width-1-3--m will set width of 33% to medium screen sizes and bigger.
            Following example sets 1/6 generally for screen sizes up to medium size, then 1/4 on screens between medium and large an then it sets 1/3 on screen size large and bigger:`,
        example: GetTabbedPreview(secondExample, "60px")
    },
    {
        name: "CSS options",
        description: "Component name is link and supports following CSS build options:",
        list: [
            { name: "responsive", description: "Adds responsive options to width classes" },
        ]
    }
    ]
}