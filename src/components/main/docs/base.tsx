import * as React from "react";
import { CuiDocsPage } from "../../../components/docs/base";
import DocsHeader from "../../../components/partials/components/DocsHeader";
import { CuiDocsComponentDef } from "../../../statics/base";

export interface CuiDocsContentPaneProps {
    component: CuiDocsComponentDef;
}


export function CuiDocsContentPane(props: CuiDocsContentPaneProps) {
    if (!props.component) {
        return <CuiDocsComponentLoading />;
    }
    return (<article className="cui-padding-small">
        <DocsHeader title={props.component.name} description={props.component.description} illustration={props.component.illustration} />
        <CuiDocsPage script={props.component.script} pageName={props.component.name} keywords={props.component.tags} />
    </article>)
}


export function CuiDocsComponentNotFound() {
    return (<div className="cui-container cui-center cui-height-viewport-1-2">
        <h2 className="cui-h2 cui-text-error">Page has not been found</h2>
    </div>);
}

export function CuiDocsComponentLoading() {
    return (<div className="cui-container cui-center cui-height-viewport-1-2">
        <span className="">Loading...</span>
    </div>);
}