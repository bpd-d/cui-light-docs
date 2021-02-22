import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { getJsCodePreview } from "../../components/preview/preview";

const resizeExample: ParserNode = {
    tag: "group",
    children: [
        {
            tag: "function",
            text: "onResize",
            attributes: {
                "ev": "CuiResizeData"
            }
        },
        {
            tag: "text",
            text: "$cui.on('resize', onResize)"
        }
    ]
}

export const CuiLightResizePluginDocs: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Plugin registers window resize observer that emits an event each time window size changes. It doesn't fire on each pixel change. It is emitted only on certain breakpoints, similar to these used in CSS for responsive components.
            Observer supports four breakpoints:</>,
            list: [
                { name: "none", description: "[< 640px] - returned for smallest screens" },
                { name: "small", description: "[>= 640px] - returned for small screens" },
                { name: "medium", description: "[>= 960px] - returned for medium screens" },
                { name: "large", description: "[>= 1200px] - returned for large screens" },
                { name: "xlarge", description: "[>= 1600px] - returned for largest screens" },
            ]
        },
        {
            name: "Initialization",
            description: <>Plugin constructor allows to set following properties during initialization:</>,
            list: [
                { name: "resizeThreshold", description: "[performance] tells how often (in px) observer shall recalculate data during resize" }
            ]
        },
        {
            name: "Event",
            description: <>Plugin fires event <span className="style-class">resize</span> globally with following data. To attach to this event use method on from cUI instance.</>,
            list: [
                { name: "current", description: "Current window size" },
                { name: "previous", description: "Previous window size" },
                { name: "width", description: "Current window width" },
                { name: "height", description: "Current window height" },
                { name: "timestamp", description: "Event timestamp" },
                { name: "name", description: "Event name" },
                { name: "source", description: "Event source" },
            ],
            example: getJsCodePreview(resizeExample),
            hint: {
                content: "Event is called only when window is resizing, to get initial value of screen size call calcWindowSize(window.innerWidth) from module core/utils/functions"
            }
        }
    ]
}