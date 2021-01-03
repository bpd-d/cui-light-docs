import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";

function createChild(text: string, ...classes: string[]): ParserNode {
    return {
        tag: "span",
        classes: ["cui-padding-small", "cui-overlay-light", ...classes],
        text: text
    }
}

function createCanvas(): ParserNode {
    return {
        tag: "div",
        classes: ["background-example", "cui-position-relative"],
        children: [
            createChild("TL", "cui-position-top", "cui-position-left"),
            createChild("TC", "cui-position-top", "cui-position-center"),
            createChild("TR", "cui-position-top", "cui-position-right"),
            createChild("BL", "cui-position-bottom", "cui-position-left"),
            createChild("BC", "cui-position-bottom", "cui-position-center"),
            createChild("BR", "cui-position-bottom", "cui-position-right"),
            createChild("ML", "cui-position-middle", "cui-position-left"),
            createChild("MC", "cui-position-middle", "cui-position-center"),
            createChild("MR", "cui-position-middle", "cui-position-right"),
        ]
    }
}

const firstExample: ParserNode = createCanvas();

export const CuiDocsPositionScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Component brings a number of classes that can place item in the element.
            To set element on specific position, set class <span className="style-class">cui-position-relative</span> to it's parent, that mix of following classes to target element:</>,
            list: [
                { name: "cui-position-top", description: "" },
                { name: "cui-position-bottom", description: "" },
                { name: "cui-position-left", description: "" },
                { name: "cui-position-right", description: "" },
                { name: "cui-position-center", description: "Horizontal alignment" },
                { name: "cui-position-middle", description: "Vertical alignment" },
            ],
            example: GetTabbedPreview(firstExample, "250px"),
            hint: {
                title: "Mixins",
                content: "Position compontent mixes up very well with overlays."
            }
        }, {
            name: "Float",
            description: <>HTML elements can be also positioned in relation to whole viewport by setting display property to fixed.
            To setup such element, add class <span className="style-class">cui-position-float</span> to target and mix of position classes which have been listed in previous section</>
        },
        {
            name: "CSS options",
            description: "Component name is position and supports following CSS build options:",
            list: [
                { name: "float", description: "Adds float positioning classes" },
                { name: "relative", description: "Adds relative/absolute positioning classes" },
            ]
        }
    ]
}