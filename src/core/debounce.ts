

export class Debounce {
    #id: any;
    #delay: number;
    #callback: (...args: any[]) => void;
    constructor(delay: number, callback: (...args: any[]) => void) {
        this.#id = null;
        this.#delay = delay;
        this.#callback = callback;
    }

    call(...args: any[]) {
        this.cancel();
        this.#id = setTimeout(() => {
            this.#callback(...args);
            this.#id = null;
        }, this.#delay)
    }

    cancel() {
        if (this.#id) {
            clearTimeout(this.#id);
            this.#id = null;
        }
    }
}