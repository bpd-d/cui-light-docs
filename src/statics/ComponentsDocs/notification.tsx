import * as React from "react";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { getJsCodePreview } from "../../components/preview/preview";
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

export const CuiDocsNotificationScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Notifications bring floating elements to cUI. They provide variety of options including setting of additional message and actions.
            It also comes with color options. Notifications can be styles with theme and signal colors. To create notification, emit an event called <span className="style-class">notify</span> to notification-plugin
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
        }
    ]
}