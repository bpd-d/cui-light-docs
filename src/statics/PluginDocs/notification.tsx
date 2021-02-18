import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { getJsCodePreview, GetPreivewWithoutCode } from "../../components/preview/preview";
import { DocsScript } from "../../components/docs/base";

const firstExample: ParserNode = {
    tag: "group",
    children: [
        {
            tag: 'object',
            text: `options`,
            children: [
                {
                    tag: 'text',
                    text: `id: "id",`
                },
                {
                    tag: 'text',
                    text: `title: "Title",`
                },
                {
                    tag: 'text',
                    text: `message: "Message",`
                },
                {
                    tag: 'text',
                    text: `auto: "true",`
                },
                {
                    tag: 'text',
                    text: `type: "accent" | "secondary" | "error" | "warning" | "success" | "default",`
                },
                {
                    tag: 'text',
                    text: `actions: [{ name: "Name", callback: () => void }]`
                }
            ]
        },
        {
            tag: "text",
            text: `$cui.emit("notify", "~notification-plugin", options)`
        }

    ]
}

const baseExample: ParserNode = {
    tag: "div",
    children: [
        { tag: "button", classes: ["cui-button"], text: "Notify", click: "plugins:notify_base" },
        { tag: "button", classes: ["cui-button"], text: "With description", click: "plugins:notify_description" },
        { tag: "button", classes: ["cui-button"], text: "With action", click: "plugins:notify_action" },
        { tag: "button", classes: ["cui-button"], text: "With type", click: "plugins:notify_type" },
        { tag: "button", classes: ["cui-button"], text: "No self close", click: "plugins:notify_no_close" },
    ]
}

export const CuiDocsNotificationScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Notifications bring floating elements to cUI. They provide variety of options including setting of additional message and actions.
            It also comes with color options. Notifications can be styles with theme and signal colors. See examples below: </>,

            example: GetPreivewWithoutCode(baseExample)
        }, {
            name: "Options",
            description: <>To create notification, emit an event called <span className="style-class">notify</span> to notification-plugin
            and provde object with options described below:</>,
            list: [
                { name: "id", description: "Notification id - must be unique" },
                { name: "title", description: "Notification title - required" },
                { name: "message", description: "Notification message - optional" },
                { name: "type", description: "Notification type - optional - one of accent, secondary, error, warning, success" },
                { name: "auto", description: "Turn off/on automatic close on notifiaction element - optional - must be strictly set to false to turn auto-close" },
                { name: "actions", description: "List of actions with callback put on notification footer" },
            ],
            example: getJsCodePreview(firstExample)
        },
        {
            name: "Events",
            description: <>For each showed notifiaction, plugin emits an event <span className="style-class">notified</span> with the same data as received in received notify event.
            Additionally it adds field <span className="style-element">dissmissed</span> which holds information whether notification was closed by the user or automatically. Field type is boolean. It is set to true when user clicks close or action, false otherwise.</>
        }
    ]
}