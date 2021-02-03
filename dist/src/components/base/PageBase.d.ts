/// <reference types="react" />
export interface PageBaseProps {
    name: string;
    children?: JSX.Element[] | JSX.Element | undefined;
}
export declare function PageBase(props: PageBaseProps): JSX.Element;
