import * as React from 'react'
import { getHeaderId } from '../../../core/functions';
import { CuiHint, DocsHint } from './CuiHint';

export interface SubSectionProps {
    name: string;
    description: React.ReactNode;
    classes?: string;
    elements?: React.ReactNode;
}

export interface DocsSectionProps {
    name: string;
    description: React.ReactNode;
    classes?: string;
    elements?: React.ReactNode;
    index?: number;
    hint?: DocsHint;
    subSections?: SubSectionProps[];
}

export function DocsSection(props: DocsSectionProps) {
    let headerId = getHeaderId(props.index);
    return (<div className={"cui-padding-vertical " + (props.classes ? props.classes : "")}>
        <h2 className="cui-h2" id={headerId}>{props.name}</h2>
        <p>{props.description}</p>
        {props.elements}
        {props.hint && <CuiHint option={props.hint?.option} content={props.hint?.content} title={props.hint?.title} />}
        {props.subSections && props.subSections.length > 0 && props.subSections.map((sub => {
            return SubSubSection(sub)
        }))}
    </div>);
}


export function SubSubSection(props: SubSectionProps) {
    return (
        <div className={props.classes ? props.classes : ""}>
            <h3 className="cui-h3">{props.name}</h3>
            <p>{props.description}</p>
            {props.elements}
        </div>
    )
}
