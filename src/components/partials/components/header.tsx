import * as React from 'react'

export interface DocsHeaderProps {
    title: string;
    description: string;
    illustration?: string;
}

export default function DocsHeader(props: DocsHeaderProps) {
    return (
        <>
            <div className="cui-flex cui-middle cui-center cui-left--m cui-height-viewport-1-2 cui-height-viewport-1-4--m">
                <div className="cui-text-center cui-text-left--m">
                    <h1 className="cui-article-title">{props.title}</h1>
                    <p className="cui-article-description">{props.description}</p>
                </div>

            </div>
            {props.illustration && <div className="cui-flex-center">
                <span className="cui-icon docs-illustration" cui-icon={props.illustration}></span>
            </div>}

        </>
    )
}
