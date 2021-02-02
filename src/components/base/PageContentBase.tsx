import * as React from 'react'

export interface PageContentBaseProps {
    children: JSX.Element[] | JSX.Element | undefined;
}
export function PageContentBase(props: PageContentBaseProps) {
    return (<div className="limited-content-width cui-section cui-margin-auto">
        {props.children}
    </div>);
}
