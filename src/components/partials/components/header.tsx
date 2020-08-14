import * as React from 'react'

export interface DocsHeaderProps {
    title: string;
    description: string;
}

export default function DocsHeader(props: DocsHeaderProps) {
    return (
        <>
            <h1 className="cui-article-title">{props.title}</h1>
            <p className="cui-article-description">{props.description}</p>
        </>
    )
}
