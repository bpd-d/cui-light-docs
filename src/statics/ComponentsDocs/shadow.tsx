import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";

function createShadow(name: string, ...classes: string[]): ParserNode {
    return {
        tag: "div",
        styleClass: "cui-padding cui-margin-top container-wrap-around cui-width-3-4",
        classes: [...classes],
        text: name

    }
}

const shadowExample: ParserNode = {
    tag: "div",
    styleClass: "cui-flex cui-center",
    children: [
        createShadow("Box shadow", "cui-box-shadow"),
        createShadow("Box shadow medium", "cui-box-shadow-m"),
        createShadow("Box shadow large", "cui-box-shadow-l"),
        createShadow("Box shadow xlarge", "cui-box-shadow-xl"),
    ]
}

const shadowHoverExample: ParserNode = {
    tag: "div",
    styleClass: "cui-flex cui-center",
    children: [
        createShadow("Box shadow hover ", "cui-box-shadow-hover"),
        createShadow("Box shadow hover medium", "cui-box-shadow-hover-m"),
        createShadow("Box shadow hover large", "cui-box-shadow-hover-l"),
        createShadow("Box shadow hover xlarge", "cui-box-shadow-hover-xl"),
    ]
}


export const CuiDocsShadowElement: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: "Add some depth to flat elements to make them stand out: ",
            list: [
                { name: "cui-box-shadow", description: "Add a subtle box shadow" },
                { name: "cui-box-shadow-m", description: "Add a medium box shadow" },
                { name: "cui-box-shadow-l", description: "Add a large box shadow" },
                { name: "cui-box-shadow-xl", description: "Add a xlarge box shadow" }
            ],
            example: GetTabbedPreview(shadowExample, "350px")
        },
        {
            name: "Hover",
            description: "Add some depth to flat elements to make them stand out: ",
            list: [
                { name: "cui-box-shadow-hover", description: "Add a subtle box shadow on hover" },
                { name: "cui-box-shadow-hover-m", description: "Add a medium box shadow on hover" },
                { name: "cui-box-shadow-hover-l", description: "Add a large box shadow on hover" },
                { name: "cui-box-shadow-hover-xl", description: "Add a xlarge box shadow on hover" }
            ],
            example: GetTabbedPreview(shadowHoverExample, "350px")
        },
        {
            name: "Remove",
            description: "Add class cui-box-shadow-remove to remove box shadow from the element"
        }
    ]
}