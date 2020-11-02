import * as React from "react"
import { ParserNode } from "../../api/DocsElementParser/interfaces"
import { DocsScript } from "../../components/docs/base"
import { ExamplePreview, GetTabbedPreview } from "../../components/partials/preview"

function createButtonWrap(button: ParserNode, ...classes: string[]): ParserNode{
    return {
        tag: "div",
        classes: [...classes],
        children: [
            button
        ]
    }
}

function createButton(text: string, ...classes: string[]): ParserNode { 
    return {
        tag: "button",
        classes: ["cui-button", ...classes],
        text: text
    }
}

const firstExample: ParserNode = {
    tag: "div",
    children: [
        createButtonWrap(createButton("Button")),
        createButtonWrap(createButton("Button default","cui-default"), "cui-margin-top")
    ]
}

const secondExample: ParserNode = {
    tag: "div",
    children: [
        createButtonWrap(createButton("Button shade", "cui-shade")),
        createButtonWrap(createButton("Button accent", "cui-accent"), "cui-margin-top"),
        createButtonWrap(createButton("Button secondary", "cui-secondary"), "cui-margin-top"),
        createButtonWrap(createButton("Button error", "cui-error"), "cui-margin-top"),
        createButtonWrap(createButton("Button warning", "cui-warning"), "cui-margin-top"),
        createButtonWrap(createButton("Button success", "cui-success"), "cui-margin-top"),
        createButtonWrap(createButton("Button rounded", "cui-rounded", "cui-default"), "cui-margin-top"),
    ]
}

const thirdExample: ParserNode = {
    tag: "div",
    children: [
        createButtonWrap(createButton("Button small", "cui-small","cui-default")),
        createButtonWrap(createButton("Button normal", "cui-default"), "cui-margin-top"),
        createButtonWrap(createButton("Button large", "cui-default", "cui-large"), "cui-margin-top"),
        createButtonWrap(createButton("Button fill", "cui-default", "cui-fill"), "cui-margin-top"),
        
    ]
}


const fourthExample: ParserNode = {
    tag: "div",
    classes: ["cui-container", "cui-accent"],
    children: [
        createButtonWrap(createButton("Button")),
        createButtonWrap(createButton("Button default", "cui-default"), "cui-margin-top"),
        createButtonWrap(createButton("Button shade", "cui-shade"), "cui-margin-top"),
        createButtonWrap(createButton("Button success", "cui-success"), "cui-margin-top"),

    ]
}

export const CuiDocsComponentButtonScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: (<>To use this component add class <span className="style-class">cui-button</span> to <span className="style-element">a</span> or <span className="style-element">button</span> element.
                This applies font styling and paddings. To give it a border add also <span className="style-class">cui-default</span>. See example below:</>),
            example: GetTabbedPreview(firstExample, "120px")
        },
        {
            name: "Styles",
            description: (<>Buttons come with handy classes which add themes color or appearance styling to element.
            Add <span className="style-class">cui-accent</span> or <span className="style-class">cui-secondary</span> to the component to set theme base color or set <span className="style-class">cui-rounded</span> to get nicely rounded corners on the button.
            Component also supports signals: error, warning and success</>),
            example: GetTabbedPreview(secondExample, "400px")
        },
        {
            name: "Sizes",
            description: (<>Component comes with two additional sizing options: large and small. To use it add <span className="style-class">cui-small</span> or  <span className="style-class">cui-large</span> class to button element.
            If you want to stretch component up to make it occupy all the parent's width space, add class <span className="style-class">cui-fill</span></>),
            example: GetTabbedPreview(thirdExample, "270px")
        },
        {
            name: "Buttons in accent components",
            description: (<>Some of the higher level compoments like <span className="style-element">containers</span> which background can be themed, may not look good with default or shaded button options due low color contrast.
            For these cases, add <span className="style-class">cui-dark</span> to the colorized container, so framework can use colors from dark palette.
            For themes and signals (except of sections and hints) use proper accent class e.g. <span className="style-class">cui-accent</span> or <span className="style-class">cui-error</span> on the parent. Framework will apply colors from inverted (dark) palette which make buttons visible.
            This doesn't have to be done for accented buttons because theirs styling does not change in dark theme. For better look, see example below which is based on themed container:</>),
            example: GetTabbedPreview(fourthExample, "250px")
        }

    ]
};