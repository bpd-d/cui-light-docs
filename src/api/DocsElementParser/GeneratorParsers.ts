import * as React from "react";
import { PreNode } from "../../components/partials/pre";
import { GLOBAL_COUNTER } from "../../statics/common";
import { ITextParser, ParserNode } from "./interfaces";

// export class HTMLElementParser implements ITextParser<HTMLElement> {

//     parse(node: ParserNode, level: number): HTMLElement {
//         if (!node || !node.tag) {
//             return undefined;
//         }
//         let element = document.createElement(node.tag)
//         if (node.classes) {
//             element.classList.add(...node.classes);
//         }
//         if (node.id) {
//             element.id = node.id;
//         }
//         if (node.text) {
//             element.textContent = node.text;
//         }
//         if (node.attributes) {
//             for (let attribute in node.attributes) {
//                 element.setAttribute(attribute, node.attributes[attribute]);
//             }
//         }
//         if (node.children && node.children.length > 0) {
//             node.children.forEach(child => {
//                 element.appendChild(this.parse(child, level + 1))
//             })

//         }
//         return element;
//     }

//     appendChildrens(element: HTMLElement, t: HTMLElement[]): HTMLElement {
//         t.forEach(node => {
//             element.appendChild(node);
//         })
//         return element;
//     }

// }

export class PreCodeParser implements ITextParser<HTMLElement> {
    parse(node: ParserNode, level: number): HTMLElement {
        let element = document.createElement("span");
        return element;
    }

    appendChildrens(element: HTMLElement, t: HTMLElement[]): HTMLElement {
        t.forEach(node => {
            element.appendChild(node);
        })
        return element;
    }
}

export class ReactParser implements ITextParser<any> {
    parse(node: ParserNode, level: number): any {
        let children: any[] = undefined;
        let classes = node.classes ?? [];
        let attributes = node.attributes ?? {};
        if (node.text) {

            children = [node.text];
        }
        if (node.children) {
            children = children ?? [];
            node.children.forEach(child => {
                children.push(this.parse(child, level + 1))
            })
        }
        if (node.styleClass) {
            classes.push(node.styleClass)
        }
        return React.createElement(node.tag, {
            className: classes.join(" "),
            id: node.id,
            key: node.tag + level + GLOBAL_COUNTER.next().value,
            ...attributes
        }, children)
    }
}

export class ReactPreParser implements ITextParser<any> {

    parse(node: ParserNode, level: number) {
        let arr = [];

        if (node.text) {
            arr.push(node.text)
        }
        return React.createElement(PreNode, { node: node, level: 0 });
    }

}