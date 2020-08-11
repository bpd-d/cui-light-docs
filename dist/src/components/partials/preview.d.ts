/// <reference types="react" />
export declare type CuiPreviewType = 'aside' | "tabbed";
export interface CodePreviewProps {
    code: any;
    element: JSX.Element;
}
export declare function CodePreviewAside(props: CodePreviewProps): JSX.Element;
export declare function CodePreviewTabbed(props: CodePreviewProps): JSX.Element;
export declare function ExamplePreview(props: CodePreviewProps, type: CuiPreviewType): JSX.Element;
