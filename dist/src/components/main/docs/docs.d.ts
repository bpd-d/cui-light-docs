/// <reference types="react" />
import { CuiDocsComponentDef } from "../../../statics/ComponentsDocs/base";
export interface DocsProps {
    site?: string;
}
export interface DocsComponentState {
    component: CuiDocsComponentDef;
    search: string;
    error: boolean;
}
export declare function DocsComponent(args: DocsProps): JSX.Element;
export declare function CuiDocsComponentNotFound(): JSX.Element;
export declare function CuiDocsComponentLoading(): JSX.Element;
export declare function CuiDocsNavigationPane(): JSX.Element;
