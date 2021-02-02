import * as React from 'react'
import { PageBase } from './PageBase';
import { PageContentBase } from './PageContentBase';

export interface PageWithoutHeaderProps {
    children: JSX.Element[] | JSX.Element | undefined;
    name: string;
}
export function PageWithoutHeader(props: PageWithoutHeaderProps) {
    return (<PageBase name={props.name}>
        <PageContentBase>
            {props.children}
        </PageContentBase>
    </PageBase>);
}
