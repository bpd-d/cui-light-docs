import { is } from "../../../node_modules/bpd-toolkit/dist/esm/index";

export function getDownloadLinks(): Promise<any> {
    let links: any = undefined;
    return new Promise((resolve, reject) => {
        if (is(links)) {
            resolve(links);
            return;
        }
        fetch('/assets/content/download_links.json').then(
            response => response.json()
        ).then(file => {
            links = file;
            resolve(links);
        })
    })
}