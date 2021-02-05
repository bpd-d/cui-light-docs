import { CuiDocsComponents } from "src/statics/ComponentsDocs/base";

// export function getComponentsDocs(onResolve?: (module: CuiDocsComponents) => void, onError?: (e: Error) => void) {
//     import("../../statics/ComponentsDocs/index").then((module) => {
//         if (onResolve)
//             onResolve(module.default);
//     }).catch((e) => {
//         if (onError)
//             onError(e);
//     });
// }

export async function getComponentsDocsAsync(): Promise<CuiDocsComponents> {
    const module = await import("../../statics/ComponentsDocs/index");
    return module.default;
}