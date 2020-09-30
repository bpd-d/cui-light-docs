import { ITextParser, ParserNode } from "./interfaces";
export declare class HTMLElementParser implements ITextParser<HTMLElement> {
    parse(node: ParserNode, level: number): HTMLElement;
    appendChildrens(element: HTMLElement, t: HTMLElement[]): HTMLElement;
}
export declare class PreCodeParser implements ITextParser<HTMLElement> {
    parse(node: ParserNode, level: number): HTMLElement;
    appendChildrens(element: HTMLElement, t: HTMLElement[]): HTMLElement;
}
