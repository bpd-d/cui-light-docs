/// <reference types="react" />
export interface DocsProps {
    site?: string;
}
export interface DocsComponentState {
    title: string;
    element: JSX.Element;
}
export declare function DocsComponent(args: DocsProps): JSX.Element;
