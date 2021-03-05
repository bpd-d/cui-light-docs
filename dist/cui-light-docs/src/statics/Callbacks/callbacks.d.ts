export declare function createCallbackHandler<T>(init: ICuiCallbackHandlerInit<T>): CuiDocsCallbackHandler<T>;
export declare class CuiDocsCallbackHandler<T> {
    groups: ICuiCallbackGroup<T>[];
    constructor();
    add(...groups: ICuiCallbackGroup<T>[]): void;
    addSingle(group: ICuiCallbackGroup<T>, replace?: boolean): void;
    get(prefix: string): ICuiCallbackGroup<T> | undefined;
    call(name: string, ...args: T[]): void;
}
