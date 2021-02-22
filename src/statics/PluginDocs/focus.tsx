import * as React from "react";
import { DocsScript } from "../../components/docs/base";

export const CuiDocsFocusScript: DocsScript = {
    sections: [{
        name: "Usage",
        description: <>Plugin is used to detect current input source, whether it is a touch, mouse or keyboard.
        Based on current input plugin sets class on a body element.
        In fact, this plugin is used as a polyfill for <span className="style-class">:focus-visible</span> component state.
        Based on class set by this plugin, corresponding CSS component adds or remove additional styling for focus state in the domcument.</>
    }, {
        name: "Initialization",
        description: <>During plugin initialization, you can pass class to be set on body for each type of input: </>,
        list: [
            { name: "keybordClass", description: "" },
            { name: "mouseClass", description: "" },
            { name: "touchClass", description: "" },
        ]
    }]
}