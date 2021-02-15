import { enumerate } from "../../utils/function";

export function createCallbackHandler<T>(init: ICuiCallbackHandlerInit<T>): CuiDocsCallbackHandler<T> {
    const handler = new CuiDocsCallbackHandler<T>();
    if (init) {
        enumerate((key: string, value: ICuiDocsCallbacks<T>) => {
            handler.addSingle({ prefix: key, callbacks: value })
        }, init)
    }
    return handler;
}

export class CuiDocsCallbackHandler<T> {
    groups: ICuiCallbackGroup<T>[];
    constructor() {
        this.groups = [];
    }

    add(...groups: ICuiCallbackGroup<T>[]) {
        if (!groups || groups.length === 0) {
            return;
        }
        groups.forEach(g => this.addSingle(g))
    }

    addSingle(group: ICuiCallbackGroup<T>, replace?: boolean) {
        if (!group || !group.prefix) {
            return;
        }
        let idx = this.groups.findIndex(g => g.prefix === group.prefix)
        if (idx < 0) {
            this.groups.push(group)
        }
        if (replace === true) {
            this.groups[idx] = group;
        }
    }

    get(prefix: string): ICuiCallbackGroup<T> | undefined {
        return prefix ? this.groups.find(g => g.prefix === prefix) : undefined;
    }

    call(name: string, ...args: T[]) {
        let split = name.split(':');
        if (split.length < 2) {
            return;
        }
        let group = this.get(split[0].trim());
        if (!group) {
            return;
        }
        const callback = group.callbacks[split[1].trim()];
        if (callback) {
            callback(...args);
        }
    }

}