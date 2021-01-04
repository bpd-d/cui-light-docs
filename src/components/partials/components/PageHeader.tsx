import * as React from 'react'

export interface PageHeaderProps {
    title: string;
    description?: string;
}

export function PageHeader(props: PageHeaderProps) {
    return (<div className="cui-flex cui-middle cui-center cui-height-viewport-1-2 cui-height-viewport-1-4--m">
        <div className="cui-text-center">
            <h1 className="cui-article-title">{props.title}</h1>
            <p className="">{props.description}</p>
        </div>
    </div>);
}
