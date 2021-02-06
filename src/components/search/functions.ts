import { enumerateObject } from "../../../node_modules/bpd-toolkit/dist/esm/index";
import { CuiDocsComponentDef } from "../../statics/ComponentsDocs/base";
import { getComponentsDocsAsync } from "../../core/imports/components";
import { iconsData } from "../../statics/icons";
import { IconElementData } from "../main/icons/icons";
import { SearchResult, SearchResultSection } from "./interfaces";

export function FindSearchResults(search: string): Promise<SearchResultSection[]> {
    async function getComponents(filter: string): Promise<SearchResult[]> {
        let result: SearchResult[] = [];
        try {
            let components = await getComponentsDocsAsync();
            enumerateObject(components, (key: string, value: CuiDocsComponentDef) => {
                if (key.match(filter.toLowerCase())) {
                    result.push({ name: key, detail: value.uri })
                }
            });
        } catch (e) {
            console.log(e);
            return [];
        }
        return result;
    }

    async function getIcons(filter: string): Promise<SearchResult[]> {
        let result: SearchResult[] = [];
        try {
            result = iconsData.reduce<SearchResult[]>((results: SearchResult[], current: IconElementData) => {
                if (current.code.match(filter.toLowerCase())) {
                    results.push({
                        name: current.name,
                        detail: current.code
                    })
                }
                return results;
            }, [])
        } catch (e) {
            console.log(e);
        }
        return result;
    }

    return new Promise((resolve, reject) => {
        let result: SearchResultSection[] = [];
        let searchPromise = Promise.all([getComponents(search), getIcons(search)])
        searchPromise.then((found) => {
            let matchComponents = found[0];
            let matchIcons = found[1];

            if (matchComponents.length > 0) {
                result.push({
                    name: "Components",
                    results: matchComponents
                })
            }
            if (matchIcons.length > 0) {
                result.push({
                    name: "Icons",
                    results: matchIcons
                })
            }
            resolve(result)
        })
    })
}