export declare function capitalize(value: string): string;
export declare function copyTextOld(value: string): Promise<string>;
export declare function copyTextNew(value: string): Promise<string>;
export declare function copyText(value: string): Promise<string>;
export declare function count(): Generator<number, void, unknown>;
export declare function enumerate(callback: (key: string, value: any) => void, obj: any): void;
export declare function getKeysFromObject(obj: any): string[];
