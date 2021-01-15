import * as React from "react";
import { DocsScript } from "src/components/docs/base";

export const CuiDocsInteractionsScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Framework brings few classes which change how components interact with user. They can change cursor when hovering over the element, change selection mode or turn off pointer events completely:</>,
            list: [
                { name: "cui-cursor-pointer", description: "Changes cursor to pointer" },
                { name: "cui-cursor-none", description: "Turn off the cursor" },
                { name: "cui-cursor-cross", description: "Changes cursor to crosshair" },
                { name: "cui-select-none", description: "Turns off selection" },
                { name: "cui-select-test", description: "Sets selection mode to text" },
                { name: "cui-events-none", description: "Turn off capturing of pointer events" },
                { name: "cui-events-all", description: "Captures all pointer events" },
            ]
        },
        {
            name: "CSS options",
            description: "Component name is interactions and supports following CSS build options:",
            list: [
                { name: "cursor", description: "Adds classes related to cursor" },
                { name: "select", description: "Adds classes related to selection" },
                { name: "events", description: "Adds classes related to pointer events" },
            ]
        }
    ]
}