/// <reference types="react" />
export declare type CuiPreviewType = 'aside' | "tabbed";
export interface CodePreviewProps {
    code: JSX.Element;
    element: JSX.Element;
    js?: JSX.Element;
    height?: string;
}
export declare function CodePreviewAside(props: CodePreviewProps): JSX.Element;
export declare function CodePreviewTabbed(props: CodePreviewProps): JSX.Element;
export declare function ExamplePreview(props: CodePreviewProps, type: CuiPreviewType): JSX.Element;
