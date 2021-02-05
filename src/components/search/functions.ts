// import { enumerateObject } from "../../../node_modules/bpd-toolkit/dist/esm/index";
// import { cuiComponents, CuiDocsComponentDef } from "../../statics/ComponentsDocs/base";
import { iconsData } from "../../statics/icons";
import { IconElementData } from "../main/icons/icons";
import { SearchResult, SearchResultSection } from "./interfaces";

export function FindSearchResults(search: string): Promise<SearchResultSection[]> {
    function getComponents(filter: string) {
        let result: SearchResult[] = [];
        try {
            // enumerateObject(cuiComponents, (key: string, value: CuiDocsComponentDef) => {
            //     if (key.match(filter.toLowerCase())) {
            //         result.push({ name: key, detail: value.uri })
            //     }
            // });
        } catch (e) {
            console.log(e);
            return []
        }
        return result;
    }

    function getIcons(filter: string) {
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
        let result = [];
        let matchComponents = getComponents(search);
        let matchIcons = getIcons(search);

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
}