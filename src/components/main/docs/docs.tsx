import * as React from "react";
import { useLocation, useParams } from "react-router-dom";
import { cuiComponents, CuiDocsComponentDef } from "../../../statics/ComponentsDocs/base";
import { CuiDocsNavigation } from "../../docs/CuiDocsNavigation";
import DocsHeader from "../../partials/components/DocsHeader";
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
    error: boolean;
}

export default function DocsComponent(args: DocsProps) {
    const { id } = useParams();
    const [state, setState] = React.useState<DocsComponentState>({
        component: null,
        search: "",
        error: false
    });

    function getAsideHeaders(): string[] {
        if (!state.component || !state.component.script) {
            return [];
        }
        return state.component.script.sections.map(sec => {
            return sec.name;
        });
    }

    React.useEffect(() => {
        console.log("Docs render:" + id)
        let component = cuiComponents[id];
        if (component) {
            setState({
                component: component,
                search: "",
                error: false
            })
            addRecentItem(component.name, component.uri)
        } else {
            setState({
                ...state,
                error: true
            })
        }
    }, [id])
    if (state.error) {
        return <CuiDocsComponentNotFound />
    }
    return (
        <div className="cui-container layout-docs">
            <div className="cui-unhidden--l">
                <div className="cui-flex cui-right">
                    <div className="layout-docs-navigation cui-padding-small">
                        <div className="cui-flex cui-middle">
                            <ClearableInput value={state.search} />
                        </div>
                        <h3 className="cui-h3">Components</h3>
                        <CuiDocsNavigation sort={true} /></div>
                </div>
            </div>
            <CuiDocsContentPane component={state.component} />
            <CuiDocsAside name={id} sections={getAsideHeaders()} />
        </div>
    )
}

interface CuiDocsContentPaneProps {
    component: CuiDocsComponentDef;
}

function CuiDocsContentPane(props: CuiDocsContentPaneProps) {
    if (!props.component) {
        return <CuiDocsComponentLoading />;
    }
    return (<article className="cui-padding-small">
        <DocsHeader title={props.component.name} description={props.component.description} illustration={props.component.illustration} />
        <CuiDocsPage script={props.component.script} pageName={props.component.name} />
    </article>)
}

function CuiDocsComponentNotFound() {
    return (<div className="cui-container cui-center cui-height-viewport-1-2">
        <h2 className="cui-h2 cui-text-error">Page has not been found</h2>
    </div>);
}

function CuiDocsComponentLoading() {
    return (<div className="cui-container cui-center cui-height-viewport-1-2">
        <span className="">Loading...</span>
    </div>);
}

function CuiDocsNavigationPane() {
    const [search, setSearch] = React.useState<string>("");
    function onInputUpdate(value: string) {
        setSearch(value);
    }
    return (
        <div className="cui-unhidden--l">
            <div className="cui-flex cui-right">
                <div className="layout-docs-navigation cui-padding-small">
                    <div className="cui-flex cui-middle">
                        <ClearableInput value={search} onUpdate={onInputUpdate} />
                    </div>
                    <h3 className="cui-h3">Components</h3>
                    <CuiDocsNavigation sort={true} /></div>
            </div>
        </div>
    )
}