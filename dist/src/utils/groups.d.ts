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
export declare function group<T>(getGroup: (item: T, index: number) => string, array: T[], filter?: (item: T, index: number) => boolean): CuiGroup<T>;
