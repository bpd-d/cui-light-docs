export declare class Debounce {
    #private;
    constructor(delay: number, callback: (...args: any[]) => void);
    call(...args: any[]): void;
    cancel(): void;
}
