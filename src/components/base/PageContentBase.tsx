import * as React from 'react'

export interface PageContentBaseProps {
    children: JSX.Element[] | JSX.Element | undefined;
    classes?: string;
}
export function PageContentBase(props: PageContentBaseProps) {
    let classes = "limited-content-width cui-section cui-margin-auto";
    if (props.classes) {
        classes += " " + props.classes;
    }
    return (<div className={classes}>
        {props.children}
    </div>);
}
