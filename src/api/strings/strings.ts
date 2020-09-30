export class TranslationsParser {
    constructor(baseUrl: string) {

    }
}

export class Translations {
    #defaults: any;
    #translations: any;
    constructor(defaultStrings: any) {

    }

    setTranslations(value: any) {
        this.#translations = value;
    }

    get(text: string): string {
        if (!text) {
            return "";
        }
        let ret = (this.#translations && this.#translations[text]) ? this.#translations[text] : this.#defaults[text];
        return ret ?? text;
    }


}