import * as React from "react";
import { ITextParser, ParserNode } from "./interfaces";
export declare class HTMLElementParser implements ITextParser<HTMLElement> {
    parse(node: ParserNode, level: number): HTMLElement;
    appendChildrens(element: HTMLElement, t: HTMLElement[]): HTMLElement;
}
export declare class PreCodeParser implements ITextParser<HTMLElement> {
    parse(node: ParserNode, level: number): HTMLElement;
    appendChildrens(element: HTMLElement, t: HTMLElement[]): HTMLElement;
}
export declare class ReactParser implements ITextParser<any> {
    parse(node: ParserNode, level: number): any;
}
export declare class ReactPreParser implements ITextParser<any> {
    parse(node: ParserNode, level: number): React.FunctionComponentElement<{
        node: ParserNode;
        level: number;
    }>;
}
