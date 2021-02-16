import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { getJsCodePreview, GetPreivewWithoutCode } from "../../components/preview/preview";

const firstExample: ParserNode = {
    tag: "group",
    children: [
        {
            tag: 'object',
            text: `options`,
            children: [
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
                    text: `onOk: () => { console.log("Ok") },`
                },
                {
                    tag: 'text',
                    text: `onCancel: () => { console.log("Cancel") },`
                },
                {
                    tag: 'text',
                    text: `onYes: () => { console.log("Yes") },`
                },
                {
                    tag: 'text',
                    text: `onNo: () => { console.log("No") }`
                }
            ]
        },
        {
            tag: 'object',
            text: `data`,
            children: [
                {
                    tag: 'text',
                    text: `id: "id",`
                },
                {
                    tag: 'text',
                    text: `type: "Info | OkCancel | YesNoCancel",`
                },
                {
                    tag: 'text',
                    text: `options: options`
                },
            ]
        },
        {
            tag: "text",
            text: `$cui.emit("alert", "~alert-plugin", data)`
        }

    ]
}

const baseExample: ParserNode = {
    tag: "div",
    children: [
        { tag: "button", classes: ["cui-button"], text: "Info", click: "plugins:alert_info" },
        { tag: "button", classes: ["cui-button"], text: "OkCancel", click: "plugins:alert_ok_cancel" },
        { tag: "button", classes: ["cui-button"], text: "YesNoCancel", click: "plugins:alert_yes_no_cancel" },
    ]
}

export const CuiDocsAlertScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: `Alert is a special type of dialog. It can be used as information, Ok/Cancel or Yes/No/Cancel pop up. It provides a shorthand for simple interactive dialog, that may be used to inform end user about taken action or asking about decision in some cases.
            See below examples`,
            example: GetPreivewWithoutCode(baseExample)
        },
        {
            name: "Options",
            description: `To create and show this component, call an event alert to alert-plugin and pass object that fills id, type and options containing title, message and callbacks:`,
            list: [
                { name: "id", description: "element identifier, alse used in HTML DOM. Must be unique for different alert types." },
                { name: "type", description: "Info | OkCancel | YesNoCancel - creates dialog element that matches with layout and behaior to choosed type." },
                { name: "data", description: "object that keeps: title and message texts displayed in dialog. Also have number of callbacks that interact with alert: onOk, onCancel, onYes, onNo" }
            ],
            hint: {
                title: "Keep id unique",
                content: "cUI tries to reuse alert if possible so it is important to use the same id in calls that point the same part of the program."
            },
            example: getJsCodePreview(firstExample)
        }
    ]
}