import { CuiDocsComponents } from "src/statics/base";
export declare const DOCTYPE_PLUGINS = "plugins";
export declare const DOCTYPE_COMPONENTS = "components";
export declare const DOCTYPE_API = "api";
export declare const DOCTYPE_COMMON = "common";
export declare function getComponentsDocsAsync(): Promise<CuiDocsComponents>;
export declare function getPluginsDocsAsync(): Promise<CuiDocsComponents>;
export declare function getDocsModule(docType: string): Promise<CuiDocsComponents | null>;
