import { IElementGenerator, ITextParser, ParserNode } from "./interfaces";
export declare class ElementGenerator<T> implements IElementGenerator<T> {
    #private;
    constructor(parser: ITextParser<T>);
    build(data: ParserNode): T;
    private createLevel;
    private parseSingle;
    private is;
}
