export function capitalize(value: string) {
    return value && value.length > 0 ? value.charAt(0).toUpperCase() + value.slice(1) : value;
}

export async function copyTextOld(value: string): Promise<string> {
    let textArea = document.createElement("textarea");
    let result: string = null;
    // Place in top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = "0";
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        let successful = document.execCommand('copy');
        result = value;
    } catch (err) {
        result = null;
    }
    document.body.removeChild(textArea);
    return result;
}


export async function copyTextNew(value: string): Promise<string> {
    let result = null;
    try {
        await navigator.clipboard.writeText(value)
        result = value;
    } catch (err) {
        result = null;
    }
    return result;
}

export async function copyText(value: string): Promise<string> {
    if (!value) {
        return null;
    }
    return window.navigator && window.navigator.clipboard ? copyTextNew(value) : copyTextOld(value);
}

export function* count() {
    let idx = 0;
    while (true) {
        let reset = yield idx++;
        if (reset || idx > 200000) {
            idx = 0
        }
    }
}

export function enumerate(callback: (key: string, value: any) => void, obj: any): void {
    if (!obj) {
        return;
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            callback(key, obj[key]);
        }
    }
}

export function getKeysFromObject(obj: any): string[] {
    let list: string[] = [];
    if (!obj) {
        return list;
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            list.push(key);
        }
    }
    return list;
}