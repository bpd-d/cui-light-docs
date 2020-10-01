import * as React from 'react'

export interface DocsHeaderProps {
    title: string;
    description: string;
    illustration?: string;
}

export default function DocsHeader(props: DocsHeaderProps) {
    return (
        <>
            <div className="top-header-height cui-flex cui-middle">
                <h1 className="cui-article-title">{props.title}</h1>
            </div>
            {props.illustration && <div className="cui-flex-center">
                <span className="cui-icon docs-illustration" cui-icon={props.illustration}></span>
            </div>}
            <p className="cui-article-description cui-margin-top">{props.description}</p>
        </>
    )
}
