import * as React from 'react'
import { getHeaderId } from '../../../core/functions';
import { CuiDocsList, CuiListItem } from '../../docs/CuiDocsList';
import { CuiDocsPropertyGrid, PropertyGridItem } from '../../docs/CuiDocsPropertyGrid';
import { CuiHint, DocsHint } from './CuiHint';
import { CuiTable, DocsTable } from './CuiTable';

export interface SubSectionProps {
    name: string;
    description: React.ReactNode;
    classes?: string;
    elements?: React.ReactNode;
}

export interface DocsSectionProps {
    pageName: string;
    name: string;
    description: React.ReactNode;
    classes?: string;
    elements?: React.ReactNode;
    index?: number;
    hint?: DocsHint;
    table?: DocsTable;
    list?: CuiListItem[];
    properties?: PropertyGridItem[];
    subSections?: SubSectionProps[];
}

export function DocsSection(props: DocsSectionProps) {
    const [state, useState] = React.useState<string>();
    let headerId = getHeaderId(props.index);
    React.useEffect(() => {
        useState(props.index + props.name + props.pageName);
    }, [state])
    return (<div className={"cui-padding-vertical " + (props.classes ? props.classes : "")} id={state}>
        <h2 className="cui-h2" id={headerId}>{props.name}</h2>
        <p>{props.description}</p>
        {props.list && <CuiDocsList items={props.list} />}
        {props.elements}
        {props.properties && props.properties.length > 0 && <CuiDocsPropertyGrid items={props.properties} />}
        {props.hint && <CuiHint option={props.hint?.option} content={props.hint?.content} title={props.hint?.title} />}
        {props.table && <CuiTable table={props.table} />}
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
