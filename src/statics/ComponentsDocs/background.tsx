import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";

function getChildBackground(colorName: string, classes: string): ParserNode {
    return {
        tag: "div",
        classes: [classes],
        styleClass: "cui-padding",
        text: colorName,
    }
}

function getImageBackground(text: string, className: string): ParserNode {
    return {
        tag: "div",
        styleClass: "background-example image-background cui-flex-center cui-margin-small",
        classes: [className],
        text: text
    }
}

const backgroundPositionExample: ParserNode = {
    tag: "div",
    styleClass: "cui-flex cui-center",
    children: [
        getImageBackground("cui-background", "cui-background"),
        getImageBackground("cui-background-border-box", "cui-background cui-background-border-box"),
        getImageBackground("cui-background-padding-box", "cui-background cui-background-padding-box"),
        getImageBackground("cui-background-position-start", "cui-background cui-background-position-start"),
        getImageBackground("cui-background-position-end", "cui-background cui-background-position-end"),
        getImageBackground("cui-background-size-cover", "cui-background cui-background-size-cover"),
        getImageBackground("cui-background-size-contain", "cui-background cui-background-size-contain"),
    ]
}


const backgroundColorExample: ParserNode = {
    tag: "div",
    children: [
        getChildBackground("Default", "cui-background-default"),
        getChildBackground("Shade", "cui-background-shade"),
        getChildBackground("Accent", "cui-background-accent"),
        getChildBackground("Secondary", "cui-background-secondary"),
        getChildBackground("Error", "cui-background-error"),
        getChildBackground("Warning", "cui-background-warning"),
        getChildBackground("Success", "cui-background-success"),
    ]
}


export const CuiDocsBackgroundScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: "Sets basic background image properties with helper classes that set object clip or position. With default usage it sets background in the center of the element",
            list: [
                { name: "cui-background", description: "Sets basic background options with clip to content-box and size of cover" },
                { name: "cui-background-border-box", description: "Sets background clip to border-box" },
                { name: "cui-background-padding-box", description: "Sets background clip to padding-box" },
                { name: "cui-background-position-start", description: "Sets background position to element start" },
                { name: "cui-background-position-end", description: "Sets background position to element end" },
                { name: "cui-background-size-cover", description: "Stretches image to size of a container" },
                { name: "cui-background-size-contain", description: "Stretches image to size of a container" },
            ],
            example: GetTabbedPreview(backgroundPositionExample, "1050px")
        },
        {
            name: "Colors",
            description: "There are some classes available which change default element background color to one of signal or accent shade colors:",
            list: [
                { name: "cui-background-default", description: "Sets default light/dark component background color" },
                { name: "cui-background-shade", description: "Sets shade light/dark component background color" },
                { name: "cui-background-accent", description: "Sets accent light/dark component background color" },
                { name: "cui-background-secondary", description: "Sets secondary light/dark component background color" },
                { name: "cui-background-error", description: "Sets error light/dark component background color" },
                { name: "cui-background-warning", description: "Sets warning light/dark component background color" },
                { name: "cui-background-success", description: "Sets success light/dark component background color" },
            ],
            example: GetTabbedPreview(backgroundColorExample, '400px')
        },
        {
            name: "CSS options",
            description: "Component name is background and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "print", description: "Adds print mode styling" },
                { name: "colors", description: "Adds colored background options" }
            ]
        }
    ]
}