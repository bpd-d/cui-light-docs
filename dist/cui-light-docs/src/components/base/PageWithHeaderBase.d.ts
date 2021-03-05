/// <reference types="react" />
export interface PageWithHeaderBaseProps {
    children?: JSX.Element[] | JSX.Element | undefined;
    name: string;
    description?: string;
    contentParentCls?: string;
}
export declare function PageWithHeaderBase(props: PageWithHeaderBaseProps): JSX.Element;
