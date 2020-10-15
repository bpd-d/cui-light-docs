export interface DocStringItemParsers<T> {
    [key: string]: IDocStringItemParser<T>;
}
export interface IDocStringItemParser<T> {
    parse(text: string): T;
}
export declare abstract class DocStringParser<T> {
    #private;
    constructor(itemParsers: DocStringItemParsers<T>, regex: RegExp);
    parse(text: string): T;
    abstract build(text: string): T;
}
