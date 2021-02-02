import * as React from 'react'
import { setDocumentTitle } from '../../core/functions';
import { PageHeader } from '../partials/components/PageHeader';
import { PageBase } from './PageBase';
import { PageContentBase } from './PageContentBase';

export interface PageWithHeaderBaseProps {
    children?: JSX.Element[] | JSX.Element | undefined;
    name: string;
    description?: string;
    contentParentCls?: string;
}
export function PageWithHeaderBase(props: PageWithHeaderBaseProps) {
    return (<PageBase name={props.name}><PageHeader title={props.name} description={props.description} />
        <PageContentBase classes={props.contentParentCls}>
            {props.children}
        </PageContentBase>
    </PageBase>);
}
