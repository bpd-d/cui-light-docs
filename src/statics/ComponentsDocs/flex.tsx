import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/partials/preview";

function createFlex(options: string[], children: ParserNode[]): ParserNode {
    return {
        tag: "div",
        classes: ["cui-flex", "cui-section", "cui-background-shade","flex-default-height", ...options],
        children: [...children]
    }
}

function createCard(name: string, cls?: string): ParserNode {
    return {
        tag: "div",
        classes: ["cui-card", "cui-default"],
        styleClass: cls ?? "",
        children: [
            {
                tag: "div", text: name
            }
        ]
    }
}

function createCards(): ParserNode[] {
    return [
        createCard("Item 1", "cui-margin-small-right"),
        createCard("Item 2", "cui-margin-small-right"),
        createCard("Item 3")
    ]
}

function createCards2(): ParserNode[] {
    return [
        createCard("Item 1", "cui-margin-small-right"),
        createCard("Item 2", "cui-margin-small-right"),
        createCard("Item 3", "cui-margin-small-right"),
        createCard("Item 4", "cui-margin-small-right"),
        createCard("Item 5", "cui-margin-small-right"),
        createCard("Item 6", "cui-margin-small-right"),
        createCard("Item 7", "cui-margin-small-right"),
        createCard("Item 8", "cui-margin-small-right"),
        createCard("Item 9", "cui-margin-small-right"),
        createCard("Item 10", "cui-margin-small-right"),
        createCard("Item 11", "cui-margin-small-right"),
        createCard("Item 12", "cui-margin-small-right"),
        createCard("Item 13")
    ]
}

const firstExample = createFlex([], createCards())
const secondExample = createFlex(["cui-right"], createCards())
const thirdExample = createFlex(["cui-center"], createCards())
const fourthExample = createFlex(["cui-between"], createCards())
const fifthExample = createFlex(["cui-evenly"], createCards())
const sixthExample = createFlex(["cui-end"], createCards())
const seventhExample = createFlex(["cui-middle"], createCards())
const eightExample = createFlex(["cui-stretch"], createCards())
const ninthExample = createFlex(["cui-wrap-rev", "flex-medium-height"], createCards2())
const tenthExample: ParserNode = {
    tag: "div",
    children: [
        createFlex(["cui-middle"], [
            createCard("Item grow", "cui-flex-grow cui-margin-small-right"),
            createCard("Item", "cui-margin-small-right"),
            createCard("Item", "cui-margin-small-right")
        ]),
        createFlex(["cui-middle"], [
            createCard("Item grow", "cui-flex-grow cui-margin-small-right"),
            createCard("Item shrink", "cui-flex-shrink cui-margin-small-right"),
            createCard("Item grow", "cui-flex-grow cui-margin-small-right")
        ]),
        createFlex(["cui-middle"], [
            createCard("Item shrink", "cui-flex-shrink cui-margin-small-right"),
            createCard("Item", "cui-flex-shrink cui-margin-small-right"),
            createCard("Item grow", "cui-flex-grow cui-margin-small-right")
        ])
    ]
}

const eleventhExample: ParserNode = {
    tag: "div",
    classes: ['cui-flex-center', "flex-medium-height", 'cui-background-shade'],
    children: createCards()
}

export const CuiDocsFlexScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Flex component was created to quickly create flexbox based component.
            To create one add a <span className="style-element">div</span> element with class <span className="style-class">cui-flex</span>.
            This alone creates a flexbox container:</>,
            example: GetTabbedPreview(firstExample, '120px')
        },
        {
            name: "Flex right",
            description: <>To place flex children on the right side of the flexbox add class <span className="style-class">cui-right</span> to container:</>,
            hint: {
                title: "Responsive",
                content: "Option comes with responsive modifiers - use proper screen size suffixes to change flex behavior on different types of devices"
            },
            example: GetTabbedPreview(secondExample, '120px')
        },
        {
            name: "Flex center",
            description: <>To center children horizontally in the flexbox add class <span className="style-class">cui-center</span> to container:</>,
            hint: {
                title: "Responsive",
                content: "Option comes with responsive modifiers - use proper screen size suffixes to change flex behavior on different types of devices"
            },
            example: GetTabbedPreview(thirdExample, '120px')
        },
        {
            name: "Flex between",
            description: <>To place children between each other in the flexbox add class <span className="style-class">cui-between</span> to container:</>,
            hint: {
                title: "Responsive",
                content: "Option comes with responsive modifiers - use proper screen size suffixes to change flex behavior on different types of devices"
            },
            example: GetTabbedPreview(fourthExample, '120px')
        },
        {
            name: "Flex space evenly",
            description: <>To place children evenly between each other and sides of the flexbox add class <span className="style-class">cui-evenly</span> to container:</>,
            hint: {
                title: "Responsive",
                content: "Option comes with responsive modifiers - use proper screen size suffixes to change flex behavior on different types of devices"
            },
            example: GetTabbedPreview(fifthExample, '120px')
        },
        {
            name: "Flex end (bottom)",
            description: <>To put childrens at the flexbox's bottom (end) add class <span className="style-class">cui-end</span> to container:</>,
            hint: {
                title: "Responsive",
                content: "Option comes with responsive modifiers - use proper screen size suffixes to change flex behavior on different types of devices"
            },
            example: GetTabbedPreview(sixthExample, '120px')
        },
        {
            name: "Flex middle",
            description: <>To center items vertically in the flexbox <span className="style-class">cui-middle</span> to container:</>,
            hint: {
                title: "Responsive",
                content: "Option comes with responsive modifiers - use proper screen size suffixes to change flex behavior on different types of devices"
            },
            example: GetTabbedPreview(seventhExample, '120px')
        },
        {
            name: "Flex stretch",
            description: <>Flexbox children can be stretched to fill parent. It can be done by adding class <span className="style-class">cui-stretch</span> to container:</>,
            hint: {
                title: "Responsive",
                content: "Option comes with responsive modifiers - use proper screen size suffixes to change flex behavior on different types of devices"
            },
            example: GetTabbedPreview(eightExample, '120px')
        },
        {
            name: "Flex wrap reverse",
            description: <>To place items from bottom to top with reverse wrapping direction add class <span className="style-class">cui-wrap-rev</span> to container:</>,
            example: GetTabbedPreview(ninthExample, '310px')
        },
        {
            name: "Flex grow",
            description: <>Flexbox children can either grow or shrink in size. If item is set to grow, it will stretch out to take all available and not assigned container space.
            On the other hand, item set to shrink will take as much container area as it needs to. If there more than one item set to grow, space is divided equally to each of growable elements.
            To set item to grow or shrink set class <span className="style-class">cui-flex-grow</span> or <span className="style-class">cui-flex-shrink</span> 
            on the child element. See below some placement configuration to see how it works in practice:</>,
            hint: {
                title: "Responsive",
                content: "Option comes with responsive modifiers - use proper screen size suffixes to change flex behavior on different types of devices"
            },
            example: GetTabbedPreview(tenthExample, '340px')
        },
        {
            name: "Center",
            description: <>Set class  <span className="style-class">cui-flex-center</span> on the flex container to center items vertically and horizontally:</>,
            example: GetTabbedPreview(eleventhExample, '310px')
        },
        {
            name: "CSS options",
            description: "Component name is flex and supports following CSS build options:",
            list: [
                { name: "center", description: "Adds dark mode styling" },
                { name: "grow", description: "Adds flex grow/shrink classes" },
                { name: "wrap", description: "Adds flex wrapping options classes" },
                { name: "order", description: "Adds flex order classes" },
                { name: "align", description: "Adds flex justify/align classes" },
                { name: "responsive", description: "Adds responsive options to align and order classes" },
            ]
        }
    ]
}