import * as React from "react";
import { useParams } from "react-router-dom";
import { cuiComponents, CuiDocsComponentDef } from "../../../statics/ComponentsDocs/base";
import { CuiDocsNavigation } from "../../docs/CuiDocsNavigation";
import DocsHeader from "../../partials/components/header";
import { CuiDocsPage } from "../../docs/base";
import { CuiDocsAside } from "../../docs/CuiDocsAside";
import { addRecentItem } from "../../../api/state/actions";
import { ClearableInput } from "../../partials/forms/ClearableInput";

export interface DocsProps {
    site?: string;
}

export interface DocsComponentState {
    component: CuiDocsComponentDef;
    search: string;
}

export function DocsComponent(args: DocsProps) {
    const { id } = useParams();
    const [state, setState] = React.useState<DocsComponentState>({
        component: null,
        search: ""
    });

    React.useEffect(() => {
        let component = cuiComponents[id];
        if (component) {
            setState({
                component: component,
                search: ""
            })
            addRecentItem(component.name, component.uri)
        }
    }, [id])

    return <div className="cui-container layout-docs">
        <div className="cui-visible--l">
            <div className="cui-flex cui-right">
                <div className="layout-docs-navigation cui-padding">
                    <div className="cui-flex cui-middle top-header-height">
                        <ClearableInput value={state.search} />
                    </div>
                    <h3 className="cui-h3">Components</h3>
                    <CuiDocsNavigation sort={true} /></div>
            </div>
        </div>
        {state.component ?
            (<article className="cui-padding">
                <DocsHeader title={state.component.name} description={state.component.description} illustration={state.component.illustration} />
                <CuiDocsPage script={state.component.script} pageName={state.component.name} />
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
