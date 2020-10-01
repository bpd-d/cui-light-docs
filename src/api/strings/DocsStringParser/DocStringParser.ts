
export interface DocStringItemParsers<T> {
    [key: string]: IDocStringItemParser<T>;
}

export interface IDocStringItemParser<T> {
    parse(text: string): T;
}

export abstract class DocStringParser<T> {
    #itemParsers: DocStringItemParsers<T>;
    #regex: RegExp;
    constructor(itemParsers: DocStringItemParsers<T>, regex: RegExp) {
        this.#itemParsers = itemParsers ?? {};
        this.#regex = regex;
    }

    parse(text: string): T {
        const matches = text.match(this.#regex);
        return null;
    }

    abstract build(text: string): T;
}