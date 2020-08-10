import * as React from "react";
import { copyText } from "../../utils/function";

export interface IconElementProps {
    name: string;
    code: string;
}

export function IconElement(props: IconElementProps) {
    function onLinkClick() {
        copyText(props.code).then((value) => {
            window.$cui.toast(`<b>${value}</b> has been copied`);
        });
    }

    return (
        <div className="cui-card cui-default">
            <div className="cui-card-body cui-flex-center cui-padding-large">
                <span className="cui-icon" cui-icon={props.code}></span>
            </div>
            <div className="cui-card-footer cui-flex-center">
                <a href="#" className="cui-link" onClick={onLinkClick}>{props.name}</a>
            </div>
        </div>
    );
}