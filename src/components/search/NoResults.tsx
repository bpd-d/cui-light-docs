import * as React from 'react'
import { is } from '../../../node_modules/bpd-toolkit/dist/esm/index';
export interface NoResultsProps {
    filter: string;
}
export function NoResults(props: NoResultsProps) {
    return (<div className="cui-flex-center cui-container cui-animation-fade-in">
        {is(props.filter) && <span>No result found for <span className="cui-text-italic">{props.filter}</span></span>}
    </div>);
}
