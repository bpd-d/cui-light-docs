import * as React from "react";
import { useParams } from "react-router-dom";
import { cuiComponents, CuiDocsComponentDef } from "../../statics/components/base";
import { CuiDocsNavigation } from "../docs/navigation";
import DocsHeader from "../partials/components/header";
import { CuiDocsPage } from "../docs/base";
import { CuiDocsAside } from "../docs/aside";

export interface DocsProps {
    site?: string;
}

export interface DocsComponentState {
    component: CuiDocsComponentDef;
}

export function DocsComponent(args: DocsProps) {
    const { id } = useParams();
    const [state, setState] = React.useState<DocsComponentState>({
        component: null
    });

    React.useEffect(() => {
        let component = cuiComponents[id];
        if (component) {
            setState({
                component: component
            })
        }

    }, [id])
    return <div className="cui-container layout-docs">
        <div className="cui-visible--l">
            <div className="cui-form">
                <input type="text" className="cui-input" placeholder="Search" />
            </div>
            <h3 className="cui-h3">Components</h3>
            <CuiDocsNavigation sort={true} /></div>
        {state.component ?
            (<article>
                <DocsHeader title={state.component.name} description={state.component.description} />
                <CuiDocsPage script={state.component.script} />
            </article>) :
            (<CuiDocsComponentNotFound />)
        }
        {<CuiDocsAside name={id} sections={state.component && state.component.script ? state.component.script.sections.map(sec => {
            return sec.name;
        }) : []} />}
    </div>;
}

export function CuiDocsComponentNotFound() {
    return (<div className="cui-container cui-center cui-height-viewport-1-2">
        <h2 className="cui-h2 cui-text-error">Page has not been found</h2>
    </div>);
}
