/// <reference types="react" />
import { ParserNode } from "../../api/DocsElementParser/interfaces";
export declare type CuiPreviewType = 'aside' | "tabbed";
export interface CodePreviewProps {
    code: JSX.Element;
    element: JSX.Element;
    js?: JSX.Element;
    height?: string;
}
export interface JsCodePrevieProps {
    js: JSX.Element;
}
export interface TabbedPreviewProps {
    node: ParserNode;
}
export interface SimplePreviewProps {
    element: JSX.Element;
}
export declare function CodePreviewAside(props: CodePreviewProps): JSX.Element;
export declare function JsCodePreview(props: JsCodePrevieProps): JSX.Element;
export declare function SimplePreview(props: SimplePreviewProps): JSX.Element;
export declare function CodePreviewTabbed(props: CodePreviewProps): JSX.Element;
export declare function Preview(props: JsCodePrevieProps): JSX.Element;
export declare function ExamplePreview(props: CodePreviewProps, type: CuiPreviewType): JSX.Element;
export declare function getJsCodePreview(node: ParserNode): JSX.Element;
export declare function GetTabbedPreview(node: ParserNode, height?: string): JSX.Element;
export declare function GetTabbedPreviewWithJs(node: ParserNode, js: string, height?: string): JSX.Element;
export declare function GetPreivewWithoutCode(node: ParserNode): JSX.Element;
