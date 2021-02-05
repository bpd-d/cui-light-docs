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
export default function DocsComponent(args: DocsProps): JSX.Element;
