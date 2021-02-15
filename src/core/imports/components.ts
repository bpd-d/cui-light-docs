import { CuiDocsComponents } from "src/statics/base";

// export function getComponentsDocs(onResolve?: (module: CuiDocsComponents) => void, onError?: (e: Error) => void) {
//     import("../../statics/ComponentsDocs/index").then((module) => {
//         if (onResolve)
//             onResolve(module.default);
//     }).catch((e) => {
//         if (onError)
//             onError(e);
//     });
// }

export const DOCTYPE_PLUGINS = "plugins";
export const DOCTYPE_COMPONENTS = "components";
export const DOCTYPE_API = "api";
export const DOCTYPE_COMMON = "common";

export async function getComponentsDocsAsync(): Promise<CuiDocsComponents> {
    const module = await import("../../statics/ComponentsDocs/index");
    return module.default;
}

export async function getPluginsDocsAsync(): Promise<CuiDocsComponents> {
    const module = await import("../../statics/PluginDocs/index");
    return module.default;
}

export async function getDocsModule(docType: string): Promise<CuiDocsComponents | null> {
    let module = null;
    switch (docType) {
        case DOCTYPE_COMPONENTS:
            module = await import("../../statics/ComponentsDocs/index");
            break;
        case DOCTYPE_PLUGINS:
            module = await import("../../statics/PluginDocs/index");
            break;
    }

    if (module) {
        return module.default;
    }
    return null;
}