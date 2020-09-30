import { ITextParser, ParserNode } from "./interfaces";

export class HTMLElementParser implements ITextParser<HTMLElement> {

    parse(node: ParserNode, level: number): HTMLElement {
        if (!node || !node.tag) {
            return undefined;
        }
        let element = document.createElement(node.tag)
        if (node.classes) {
            element.classList.add(...node.classes);
        }
        if (node.id) {
            element.id = node.id;
        }
        if (node.text) {
            element.textContent = node.text;
        }
        if (node.attributes) {
            for (let attribute in node.attributes) {
                element.setAttribute(attribute, node.attributes[attribute]);
            }
        }
        return element;
    }

    appendChildrens(element: HTMLElement, t: HTMLElement[]): HTMLElement {
        t.forEach(node => {
            element.appendChild(node);
        })
        return element;
    }

}

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