/// <reference types="react" />
import { ParserNode } from "../../api/DocsElementParser/interfaces";
export declare type CuiPreviewType = 'aside' | "tabbed";
export interface CodePreviewProps {
    code: JSX.Element;
    element: JSX.Element;
    js?: JSX.Element;
    height?: string;
}
export interface TabbedPreviewProps {
    node: ParserNode;
}
export declare function CodePreviewAside(props: CodePreviewProps): JSX.Element;
export declare function CodePreviewTabbed(props: CodePreviewProps): JSX.Element;
export declare function ExamplePreview(props: CodePreviewProps, type: CuiPreviewType): JSX.Element;
export declare function GetTabbedPreview(node: ParserNode, height?: string): JSX.Element;
