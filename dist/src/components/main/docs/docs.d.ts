/// <reference types="react" />
import { CuiDocsComponentDef } from "../../../statics/base";
export interface DocsProps {
    site?: string;
}
export interface DocsComponentState {
    component: CuiDocsComponentDef;
    search: string;
    error: boolean;
    errorMessage: string;
}
export default function DocsComponent(args: DocsProps): JSX.Element;
