import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { getJsCodePreview } from "../../components/preview/preview";

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
            tag: "text",
            text: `$cui.alert("alert-id", "YesNoCancel", options)`
        }

    ]

}

export const CuiDocsAlertScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: `Alert is a special type of dialog. It can be used as information, Ok/Cancel or Yes/No/Cancel pop up. 
            Although it is still based on common cui-dialog, whole interaction takes place in javascript. To create and show this component, invoke method alert in cUI instance.
            Method take 4 arguments:`,
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