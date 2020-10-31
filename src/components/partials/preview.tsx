import * as React from "react";
import { ElementGenerator } from "../../api/DocsElementParser/ElementGenerator";
import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { ReactPreParser, ReactParser, ReactJsParser } from "../../api/DocsElementParser/GeneratorParsers";
import { GLOBAL_COUNTER } from "../../statics/common";

export type CuiPreviewType = 'aside' | "tabbed";

export interface CodePreviewProps {
    code: JSX.Element;
    //  identification: string;
    element: JSX.Element;
    js?: JSX.Element;
    height?: string;
}

export interface JsCodePrevieProps {
    js: JSX.Element;
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

export function JsCodePreview(props: JsCodePrevieProps) {
    return (
        <div className="cui-code cui-format cui-line-counter">
            {props.js}
        </div>
    )
}

export function CodePreviewTabbed(props: CodePreviewProps) {
    const identification = GLOBAL_COUNTER.next().value;
    let tabId = "tab-" + identification;
    let switchId = 'switch-' + identification;
    let height = props.height ? "; height:" + props.height : "";
    return (
        <div className="">
            <ul className="cui-tab" cui-switcher={`target: #${switchId}${height}`} id={tabId}>
                <li><a href="#">Preview</a></li>
                {props.code && <li> <a href="#">HTML</a></li>}
                {props.js && <li> <a href="#">Code</a></li>}
            </ul>
            <ul className="cui-switch cui-margin-top" cui-switch={`links: #${tabId} > li${height}`} id={switchId}>
                <li className="cui-active"><div className="preview-wrapper">{props.element}</div></li>
                {props.code && <li>
                    <div className="cui-code cui-format cui-line-counter cui-overflow-x-auto">
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
            return <CodePreviewTabbed code={props.code} element={props.element} js={props.js} height={props.height} />;
    }

}

export function getJsCodePreview(node: ParserNode) {
    return <JsCodePreview js={new ElementGenerator(new ReactJsParser()).build(node)} />
}

export function GetTabbedPreview(node: ParserNode, height?: string) {
    return ExamplePreview({
        code: new ElementGenerator(new ReactPreParser()).build(node),
        element: new ElementGenerator(new ReactParser()).build(node),
        height: height
    }, 'tabbed')
}

export function GetTabbedPreviewWithJs(node: ParserNode, js: string, height?: string) {
    return ExamplePreview({
        code: node && new ElementGenerator(new ReactPreParser()).build(node),
        element: node && new ElementGenerator(new ReactParser()).build(node),
        js: <div>{js}</div>,
        height: height
    }, 'tabbed')
}