export function getHeaderId(id?: number): string {
    return `header-${id ?? "0"}`;
}

export function setDocumentTitle(title: string) {
    document.title = `cUI Light - ${title}`;
}

export function mapObjectToArray<T>(object: any, callback: (key: string, value: any, index: number) => T): T[] {
    const array: T[] = [];
    let counter = 0;
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            array.push(callback(key, object[key], counter));
            counter++;
        }
    }
    return array;
}