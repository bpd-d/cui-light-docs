import * as React from 'react'

export interface DocsSectionProps {
    name: string;
    description: React.ReactNode;
    classes?: string;
    elements?: React.ReactNode;
}

export function DocsSection(props: DocsSectionProps) {
    return (<div className={"cui-padding-vertical" + (props.classes ? " " + props.classes : "")}>
        <h2 className="cui-h2">{props.name}</h2>
        <p>{props.description}</p>
        {props.elements}
    </div>);
}
