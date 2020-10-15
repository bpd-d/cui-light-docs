import * as React from 'react'
import { copyText } from '../../../utils/function';

export interface CuiLinkTextCopyProps {
    value: string;
    classes?: string;
    showToast?: boolean;

}
export function CuiLinkTextCopy(props: CuiLinkTextCopyProps) {
    function onClick() {
        copyText(props.value).then(() => {
            (props.showToast ?? true) && window.$cui.toast(`${props.value} copied`)
        })
    }
    return (<a className={`cui-link${props.classes ? " " + props.classes : ""}`} onClick={onClick}>{props.value}</a>);
}
