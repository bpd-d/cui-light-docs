import * as React from 'react'
import { getHeaderId } from '../../core/functions';
export interface CuiDocsAsideProps {
    name: string;
    sections: string[];
}
export function CuiDocsAside(props: CuiDocsAsideProps) {
    return (<div className="cui-visible--l">
        {props.sections && props.sections.length > 0 && <div className="cui-card cui-default cui-sticky aside-card">
            <div className="cui-card-header">
                <span className="cui-card-title">Sections</span>
            </div>
            <div className="cui-card-body">
                <ul className="cui-list">
                    {props.sections && props.sections.map((item: string, index: number) => {
                        return (<li key={index} className="cui-overflow-hidden"><a href={"#" + getHeaderId(index)} className="cui-link cui-text-truncate--l cui-width-1-1">{item}</a></li>)
                    })}
                </ul>
            </div>
        </div>}
    </div>);
}
