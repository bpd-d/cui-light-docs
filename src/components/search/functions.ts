import { enumerateObject } from "../../../node_modules/bpd-toolkit/dist/esm/index";
import { CuiDocsComponentDef } from "../../statics/base";
import { DOCTYPE_COMPONENTS, DOCTYPE_PLUGINS, getComponentsDocsAsync, getDocsModule, getPluginsDocsAsync } from "../../core/imports/components";
import { iconsData } from "../../statics/icons";
import { IconElementData } from "../main/icons/icons";
import { SearchResult, SearchResultSection } from "./interfaces";




export function FindSearchResults(search: string): Promise<SearchResultSection[]> {
    // async function getComponents(filter: string): Promise<SearchResult[]> {
    //     let result: SearchResult[] = [];
    //     try {
    //         let components = await getComponentsDocsAsync();
    //         enumerateObject(components, (key: string, value: CuiDocsComponentDef) => {
    //             const lowerCasedKey = key.toLowerCase();
    //             if (key.match('doc') || key.match(lowerCasedKey) || (value.tags && searchByTag(filter, value.tags))) {
    //                 result.push({ name: key, detail: value.uri })
    //             }
    //         });
    //     } catch (e) {

    //         return [];
    //     }
    //     return result;
    // }
    const SearchDefinition = [
        {
            name: "Components", callback: (search: string) => {
                return getDocs(search, DOCTYPE_COMPONENTS)
            }
        },
        {
            name: "Plugins", callback: (search: string) => {
                return getDocs(search, DOCTYPE_PLUGINS)
            }
        },
        {
            name: "Icons", callback: (search: string) => {
                return getIcons(search)
            }
        }
    ]

    async function getDocs(filter: string, type: string): Promise<SearchResult[]> {
        let result: SearchResult[] = [];
        try {
            let components = await getDocsModule(type);
            enumerateObject(components, (key: string, value: CuiDocsComponentDef) => {
                const lowerCasedKey = key.toLowerCase();
                const lowerFilter = filter.toLowerCase();
                if (lowerFilter.match('doc') || lowerFilter.match(lowerCasedKey) || (value.tags && searchByTag(lowerFilter, value.tags))) {
                    result.push({ name: key, detail: value.uri })
                }
            });
        } catch (e) {

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

        //[getDocs(search, DOCTYPE_COMPONENTS), getDocs(search, DOCTYPE_PLUGINS), getIcons(search)]
        let searchPromise = Promise.all(SearchDefinition.map(el => el.callback(search)))
        searchPromise.then((found) => {
            let finalResult = SearchDefinition.reduce((result, current, index) => {
                let data = found[index];
                if (data && data.length > 0) {
                    result.push({
                        name: current.name,
                        results: data
                    })
                }
                return result;
            }, [])
            // let matchComponents = found[0];
            // let matchPlugins = found[1];
            // let matchIcons = found[2];

            // if (matchComponents.length > 0) {
            //     result.push({
            //         name: "Components",
            //         results: matchComponents
            //     })
            // }

            // if (matchPlugins.length > 0) {
            //     result.push({
            //         name: "Plugins",
            //         results: matchPlugins
            //     })
            // }

            // if (matchIcons.length > 0) {
            //     result.push({
            //         name: "Icons",
            //         results: matchIcons
            //     })
            // }
            resolve(finalResult)
        })
    })
}

function searchByTag(filter: string, tags: string[]): boolean {
    return tags.find((tag) => tag.match(filter)) !== undefined;
}

