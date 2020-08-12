import * as React from "react";
import { useParams } from "react-router-dom";
import { CuiDocsComponentButton } from "../docs/components/button";
import { capitalize } from "../../utils/function";
import { cuiComponents, CuiDocsComponentDef } from "../../statics/components";
import { getComponentElement } from "../docs/components/index";
import { CuiDocsNavigation } from "../docs/navigation";

export interface DocsProps {
    site?: string;
}

export interface DocsComponentState {
    title: string;
    description: string;
    element: JSX.Element;
}

export function DocsComponent(args: DocsProps) {
    const { id } = useParams();
    const [state, setState] = React.useState<DocsComponentState>({
        title: "",
        description: "",
        element: null
    });

    function setElement(component: CuiDocsComponentDef, element: JSX.Element) {
        setState({
            title: component.name,
            description: component.desription,
            element: element
        })
    }
    React.useEffect(() => {
        let component = cuiComponents[id];
        if (component) {
            setElement(component, getComponentElement(id))
        }

    }, [id])
    return <div className="cui-container layout-docs">
        <div className="cui-visible--l">
            <div className="cui-form">
                <input type="text" className="cui-input" placeholder="Search" />
            </div>
            <h3 className="cui-h3">Components</h3>
            <CuiDocsNavigation sort={true} /></div>
        {state.element ?
            (<article><h1 className="cui-article-title">{state.title}</h1>
                <p className="cui-article-description">{state.description}</p>
                {state.element}</article>) :
            (<div>Document not found</div>)
        }
    </div>;
}