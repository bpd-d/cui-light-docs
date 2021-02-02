export function getHeaderId(id?: number): string {
    return `header-${id ?? "0"}`;
}

export function setDocumentTitle(title: string) {
    document.title = `cUI Light - ${title}`;
}