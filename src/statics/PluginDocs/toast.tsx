import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { getJsCodePreview, GetPreivewWithoutCode } from "../../components/preview/preview";

const showToast: ParserNode = {
    tag: "button",
    classes: ['cui-button', 'cui-default'],
    text: "Show Toast",
    click: "plugins:toast"
}

const launchExample: ParserNode = {
    tag: "text",
    text: `window.$cui.emit("toast", '~toast-plugin', "Lorem ipsum");`
}
export const CuiDocsToastScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Plugin provides access to simple component which is displayed for short period of time on the bottom part of the screen.
            It can show simple, short text data. It can be used to notify user about event occured in the app. </>,
            example: GetPreivewWithoutCode(showToast)
        },
        {
            name: "Implementation",
            description: <>To call for toast use cUI event bus. Emit event <span className="style-class">toast</span> with message to be displayed in element: </>,
            example: getJsCodePreview(launchExample)
        },
    ]
}