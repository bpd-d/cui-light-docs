import * as React from 'react'
import { setDocumentTitle } from '../../core/functions';

export interface PageBaseProps {
    name: string;
    children: JSX.Element[] | JSX.Element | undefined;
}
export function PageBase(props: PageBaseProps) {
    React.useEffect(() => {
        setDocumentTitle(props.name)
    })
    return (<>
        {props.children}
    </>);
}
