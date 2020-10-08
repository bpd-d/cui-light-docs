import { IElementGenerator, ITextParser, ParserNode } from "./interfaces";

export class ElementGenerator<T> implements IElementGenerator<T> {
    #parser: ITextParser<T>;
    constructor(parser: ITextParser<T>) {
        this.#parser = parser;
    }

    build(data: ParserNode): T {
        return this.#parser.parse(data, 0);
    }
}
