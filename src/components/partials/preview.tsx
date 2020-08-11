import * as React from "react";
import { GLOBAL_COUNTER } from "../../statics/common";

export type CuiPreviewType = 'aside' | "tabbed";

export interface CodePreviewProps {
    code: any;
    //  identification: string;
    element: JSX.Element;
}

export function CodePreviewAside(props: CodePreviewProps) {
    return (
        <div className="cui-flex-grid cui-child-width-1-1 cui-child-width-1-2--s">
            <div>{props.element}</div>
            <div className="cui-background-shade">
                <pre>{props.code}</pre>
            </div>
        </div>
    )
}

export function CodePreviewTabbed(props: CodePreviewProps) {
    const identification = GLOBAL_COUNTER.next().value;
    let tabId = "tab-" + identification;
    let switchId = 'switch-' + identification;

    return (
        <div className="">
            <ul className="cui-tab" cui-switcher={"target: #" + switchId} id={tabId}>
                <li><a href="#">Preview</a></li>
                <li><a href="#">Code</a></li>
            </ul>
            <ul className="cui-switch cui-margin-small-top" cui-switch={`links: #${tabId} > li `} id={switchId}>
                <li className="cui-active"><div>{props.element}</div></li>
                <li>
                    <div className="">
                        <pre>{props.code}</pre>
                    </div>
                </li>
            </ul>
        </div>
    )
}


export function ExamplePreview(props: CodePreviewProps, type: CuiPreviewType) {
    switch (type) {
        case "aside":
            return <CodePreviewAside code={props.code} element={props.element} />;
        default:
            return <CodePreviewTabbed code={props.code} element={props.element} />;
    }

}