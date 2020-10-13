import * as React from 'react'
import { is } from '../../../../node_modules/bpd-toolkit/dist/esm/index';

export interface DocsHint {
    option?: string
    title?: string,
    content: string
}

export function CuiHint(props: DocsHint) {
    function getHintColorClass(option: string) {
        return is(option) ? "cui-" + option : "";
    }
    return (<div className={`cui-hint ${getHintColorClass(props.option)} cui-margin-top`}>
        <div className="cui-hint-title">{props.title ?? "Hint"}</div>
        <div className="cui-hint-body">
            <p>{props.content}</p>
        </div>
    </div>);
}
