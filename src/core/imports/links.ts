import { is } from "../../../node_modules/bpd-toolkit/dist/esm/index";

export function getDownloadLinks(): Promise<any> {
    return getJsonFromUrl('/assets/content/download_links.json')
}

export function getAboutLinks(): Promise<any> {
    return getJsonFromUrl("/assets/content/about_links.json")
}

async function getJsonFromUrl<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json()
}