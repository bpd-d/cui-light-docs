import * as React from "react";
import { ElementGenerator } from "../../api/parser/ElementGenerator";
import { ParserNode } from "../../api/parser/interfaces";
import { ReactPreParser, ReactParser } from "../../api/parser/GeneratorParsers";
import { GLOBAL_COUNTER } from "../../statics/common";

export type CuiPreviewType = 'aside' | "tabbed";

export interface CodePreviewProps {
    code: JSX.Element;
    //  identification: string;
    element: JSX.Element;
    js?: JSX.Element;
    height?: string;
}

export interface TabbedPreviewProps {
    node: ParserNode;
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
                {props.code && <li> <a href="#">HTML</a></li>}
                {props.js && <li> <a href="#">Code</a></li>}
            </ul>
            <ul className="cui-switch cui-margin-top" cui-switch={`links: #${tabId} > li`} id={switchId}>
                <li className="cui-active"><div className="preview-wrapper">{props.element}</div></li>
                {props.code && <li>
                    <div className="cui-code cui-format cui-line-counter">
                        {props.code}
                    </div>
                </li>}
                {props.js && <li>
                    <div className="cui-code cui-format cui-line-counter">
                        {props.js}
                    </div>
                </li>}
            </ul>
        </div >
    )
}


export function ExamplePreview(props: CodePreviewProps, type: CuiPreviewType) {
    switch (type) {
        case "aside":
            return <CodePreviewAside code={props.code} element={props.element} />;
        default:
            return <CodePreviewTabbed code={props.code} element={props.element} height={props.height} />;
    }

}

export function GetTabbedPreview(node: ParserNode) {
    return ExamplePreview({
        code: new ElementGenerator(new ReactPreParser()).build(node),
        element: new ElementGenerator(new ReactParser()).build(node)
    }, 'tabbed')
}