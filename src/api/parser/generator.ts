import { IElementGenerator, ITextParser, ParserNode } from "./interfaces";

export class ElementGenerator<T> implements IElementGenerator<T> {
    #parser: ITextParser<T>;
    constructor(parser: ITextParser<T>) {
        this.#parser = parser;
    }

    build(data: ParserNode): T {
        return this.parseSingle(data, 0);
    }

    private createLevel(nodes: ParserNode[], level: number): T[] {
        return nodes.map<T>((node: ParserNode) => {
            return this.parseSingle(node, level);
        })
    }

    private parseSingle(node: ParserNode, level: number): T {
        let el = this.#parser.parse(node, 0);
        if (this.is(node.children)) {
            let elements: T[] = this.createLevel(node.children, 1);
            this.#parser.appendChildrens(el, elements)
        }
        return el;
    }

    private is(obj: any) {
        return typeof obj !== "undefined" && obj !== null;
    }

}