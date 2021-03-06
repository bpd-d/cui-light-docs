import * as React from "react";
import { toast } from "../../../core/cui";
import { copyText } from "../../../utils/function";

export interface IconElementProps {
    name: string;
    code: string;
}

export function IconElement(props: IconElementProps) {
    function onLinkClick() {
        copyText(props.code).then((value) => {
            toast(`${value} copied`);
        });
    }

    return (
        <div className="cui-card cui-default">
            <div className="cui-card-body cui-flex-center cui-padding-large">
                <span className="cui-icon" cui-icon={props.code}></span>
            </div>
            <div className="cui-card-footer cui-flex-center cui-text-nowrap cui-overflow-hidden">
                <a href="#" className="cui-link" onClick={onLinkClick}>{props.name}</a>
            </div>
        </div>
    );
}