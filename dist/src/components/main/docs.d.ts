/// <reference types="react" />
import { CuiDocsComponentDef } from "../../statics/components/base";
export interface DocsProps {
    site?: string;
}
export interface DocsComponentState {
    component: CuiDocsComponentDef;
}
export declare function DocsComponent(args: DocsProps): JSX.Element;
export declare function CuiDocsComponentNotFound(): JSX.Element;
