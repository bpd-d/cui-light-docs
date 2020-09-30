import * as React from 'react'

export interface DocsHeaderProps {
    title: string;
    description: string;
}

export default function DocsHeader(props: DocsHeaderProps) {
    return (
        <>
            <div className="top-header-height cui-flex cui-middle">
                <h1 className="cui-article-title">{props.title}</h1>
            </div>
            <p className="cui-article-description cui-margin-top">{props.description}</p>
        </>
    )
}
