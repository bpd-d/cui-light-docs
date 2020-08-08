export interface CuiGroup<T> {
    [id: string]: CuiGroupItem<T>;
}

export interface CuiGroupItem<T> {
    name: string;
    data: T[];
}

/**
 * Function which groups items by specified condition.
 * Optionally allows to filter out not desired items
 * 
 * @param getGroup - callback to get group name from item
 * @param array - array data to be grouped
 * @param filter- ? - optional callback to reject items wich don't pass filter condition
 * 
 * @returns Grouped items
 */
export function group<T>(getGroup: (item: T, index: number) => string, array: T[], filter?: (item: T, index: number) => boolean): CuiGroup<T> {

    function appendResult(result: CuiGroup<T>, item: T, group: string) {
        if (result[group]) {
            result[group].data.push(item)
        } else {
            result[group] = {
                name: group,
                data: [item]
            }
        }
        return result;
    }

    return array ? array.reduce<CuiGroup<T>>((result: CuiGroup<T>, item: T, index: number) => {
        if (filter && !filter(item, index)) {
            return result;
        }
        let group = getGroup(item, index);
        if (!group)
            return result;
        return appendResult(result, item, group)
    }, {}) : null;
}