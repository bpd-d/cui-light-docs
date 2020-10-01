export interface ParserNodeAttribute {
    [key: string]: string;
}
export interface ParserNode {
    tag: string;
    classes?: string[];
    styleClass?: string;
    id?: string;
    text?: string;
    attributes?: ParserNodeAttribute;
    children?: ParserNode[];
}
export interface ITextParser<T> {
    parse(node: ParserNode, level: number): T;
}
export interface IElementGenerator<T> {
    build(data: ParserNode): T;
}
