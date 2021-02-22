import * as React from "react";
import { getJsCodePreview } from "../../components/preview/preview";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";

const moveExample: ParserNode = {
    tag: "group",
    children: [
        {
            tag: "text",
            text: "import { ICuiMoveEvent } from './core/models/events'"
        },
        {
            tag: "function",
            text: "onMove",
            attributes: {
                "ev": "ICuiMoveEvent"
            }
        },
        {
            tag: "text",
            text: "$cui.on('global-move', onMove)"
        }
    ]
}

const gestureExample: ParserNode = {
    tag: "group",
    children: [
        {
            tag: "text",
            text: "import { ICuiGestureEvent } from './core/models/events'"
        },
        {
            tag: "function",
            text: "onGesture",
            attributes: {
                "ev": "ICuiGestureEvent"
            }
        },
        {
            tag: "text",
            text: "$cui.on('gesture-left', onGesture)"
        }
    ]
}

export const CuiDocsMovePluginScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Move plugin is used to detect mouse or touch movement on window.
            It fires up an <span className="style-class">global-move</span> event when user perform a move.
            It is not a common mouse move operation. It starts detecting when user touches (or clicks) the window area.
            After first move, it emits two events: first indicating touch down, second indicating move.
            Then it emits an event every move until user releases touch or click. Last emit inidicates that release.
            It may have variety of use cases in components for slider implementation.</>
        },
        {
            name: "Event",
            description: <>To attach to <span className="style-class">global-move</span> event, you need to use method <span className="style-class">on</span> from cUI instance and assign callback function.
            Each event passes follwing data:
            </>,
            list: [
                { name: "x", description: "Pointer x position" },
                { name: "y", description: "Pointer y position" },
                { name: "moveX", description: "Indicates movementX" },
                { name: "moveY", description: "Indicates movementY" },
                { name: "type", description: "down | move | up" },
                { name: "target", description: "Provides current event target" },
                { name: "event", description: "Mouse or Touch event base" },
                { name: 'timestamp', description: "Event timestamp" },
                { name: 'name', description: "Event name" },
            ],
            example: getJsCodePreview(moveExample)
        },
        {
            name: "Gestures",
            description: <>In addition to movement detection, plugin emits events related to simple swipe gestures.
            When user releases touch or click, it calculates whether total move value passed condition for gesture and emits proper event.
            Condition is calculated based on window height or width multiplied by ratio of 0.3, depending on swipe direction.
            Function favourites horizontal gestures so if detects left or right swipe, it releases event immediately without checking vertical directions.
            To attach for this event use method <span className="style-class">on</span> from cUI instance and pass callback and one of following event names:</>,
            list: [
                { name: "gesture-left", description: "" },
                { name: "gesture-right", description: "" },
                { name: "gesture-up", description: "" },
                { name: "gesture-down", description: "" }
            ],
            example: getJsCodePreview(gestureExample)
        }
    ]
}

/**
 *
 *  x: number;
    y: number;
    moveX: number;
    moveY: number;
    type: CuiMoveEventState;
    target: EventTarget | null;
    event: MouseEvent | TouchEvent;
 */