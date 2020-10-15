export interface ITranslationFetcher {
    fetch(uri: string): Promise<any>;
}
export declare class TranslationsParser {
    constructor(baseUrl: string);
}
export declare class Translations {
    #private;
    constructor(defaultStrings: any);
    setTranslations(value: any): void;
    get(text: string): string;
}
