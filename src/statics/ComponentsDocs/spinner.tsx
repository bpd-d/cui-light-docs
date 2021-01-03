import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";

function createSpinner(text: string, cls?: string): ParserNode {
    return {
        tag: "div",
        styleClass: cls,
        children: [
            {
                tag: "span",
                attributes: { "cui-spinner": text }
            }

        ]
    }
}

const firstExample: ParserNode = {
    tag: "div",
    children: [
        createSpinner("circle"),
        createSpinner("circle_double", "cui-margin-top")
    ]
}

const secondExample: ParserNode = {
    tag: "div",
    children: [
        createSpinner("spinner: circle; scale: 2"),
        createSpinner("spinner: circle_double; scale: 2", "cui-margin-top")
    ]
}
export const CuiDocsSpinnerScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Spinner is a simple component which can be be used to notify user that application is doing some work in background.
            To create cUI spinner add a span with attribute <span className="style-class">cui-spinner</span> and give it a value: circle or circle_double:</>,
            example: GetTabbedPreview(firstExample, "70px")
        },
        {
            name: "Scale",
            description: <>To scale up a spinner, add option <span className="style-elment">scale</span> to <span className="style-class">cui-spinner</span>: </>,
            example: GetTabbedPreview(secondExample, "110px")
        },
        {
            name: "Options",
            description: "cUI spinner exposes following options: ",
            properties: [
                { name: "spinner", type: "string", defaultValue: "circle", description: "Spinner icon name" },
                { name: "scale", type: "number", defaultValue: "1", description: "Spinner scale" }
            ]
        },
        {
            name: "API",
            description: <>cUI allows to expand spinners by addition of custom ones.
            However there are some rules to follow in order to bring a proper experiance.
            Spinners use items from the icon library. If an icon is to be used here, it must be prefixed with <span className="style-class">spinner_</span>.
            For example, default icon name is <span className="style-element">spinner_circle</span>, the name provided in component is only <span className="style-element">circle</span>.
            Similar rule concerns animation CSS class - spinner name shall be prepended with <span className="style-element">animation-spinner-</span>.
            Class providing animation for example above is <span className="style-element">animation-spinner-circle</span>.</>
        }
    ]
}