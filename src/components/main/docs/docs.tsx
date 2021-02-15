import * as React from "react";
import { useParams } from "react-router-dom";
import { CuiDocsComponentDef } from "../../../statics/base";
import { CuiDocsNavigation } from "../../docs/CuiDocsNavigation";
import { CuiDocsAside } from "../../docs/CuiDocsAside";
import { addRecentItem } from "../../../api/state/actions";
import { ClearableInput } from "../../partials/forms/ClearableInput";
import { getComponentsDocsAsync, getDocsModule } from "../../../core/imports/components";
import { CuiDocsComponentNotFound, CuiDocsContentPane } from "./base";
import { CuiReducerAction } from "../../../api/interfaces/reducers";

export interface DocsProps {
    site?: string;
}

export interface DocsComponentState {
    component: CuiDocsComponentDef;
    search: string;
    error: boolean;
    errorMessage: string;
}



type CuiDocsSetError = 'set-error';
type CuiDocsSetComponent = 'set-component';

type DocsComponentStateActions =
    | CuiReducerAction<CuiDocsComponentDef, CuiDocsSetComponent>
    | CuiReducerAction<string, CuiDocsSetError>;

function setComponent(component: CuiDocsComponentDef): CuiReducerAction<CuiDocsComponentDef, CuiDocsSetComponent> {
    return {
        type: 'set-component',
        payload: component
    }
}

function setError(message: string): CuiReducerAction<string, CuiDocsSetError> {
    return {
        type: "set-error",
        payload: message
    }
}

function DocsComponentReducer(state: DocsComponentState, action: DocsComponentStateActions): DocsComponentState {
    switch (action.type) {
        case 'set-component':
            return {
                ...state,
                component: action.payload,
                search: "",
                error: false
            };
        case 'set-error':
            return {
                ...state,
                error: true,

            }
        default:
            throw new Error("unknown action");
    }
}

const stateInit: DocsComponentState = {
    component: null,
    search: "",
    error: false,
    errorMessage: ""
};

export default function DocsComponent(args: DocsProps) {
    const { id, type } = useParams();
    const [state, dispatch] = React.useReducer(DocsComponentReducer, stateInit);

    function getAsideHeaders(): string[] {
        if (!state.component || !state.component.script) {
            return [];
        }
        return state.component.script.sections.map((sec: CuiDocsComponentDef) => {
            return sec.name;
        });
    }

    React.useEffect(() => {
        console.log(type);
        getDocsModule(type).then((cuiComponents) => {
            if (!cuiComponents) {
                dispatch(setError("Module not found"))
            }
            let component = cuiComponents[id];
            if (component) {
                dispatch(setComponent(component));
                addRecentItem(component.name, component.uri)
            } else {
                dispatch(setError("Component not found"))
            }
        }, (e) => {
            dispatch(setError(e.message));
        })
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
                        <CuiDocsNavigation sort={true} type={type} /></div>
                </div>
            </div>
            <CuiDocsContentPane component={state.component} />
            <CuiDocsAside name={id} sections={getAsideHeaders()} />
        </div>
    )
}