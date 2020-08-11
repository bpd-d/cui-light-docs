import * as React from "react";
import { useParams } from "react-router-dom";
import { CuiDocsComponentButton } from "../docs/components/button";
import { capitalize } from "../../utils/function";
import { cuiComponents } from "../../statics/components";
import { getComponentElement } from "../docs/components/index";
import { CuiDocsNavigation } from "../docs/navigation";

export interface DocsProps {
    site?: string;
}

export interface DocsComponentState {
    title: string;
    element: JSX.Element;
}

export function DocsComponent(args: DocsProps) {
    const { id } = useParams();
    const [state, setState] = React.useState<DocsComponentState>({
        title: "",
        element: null
    });
    function getComponent(id: any) {
        switch (id) {
            case "button":
                return <CuiDocsComponentButton />
            default:
                return null;
        }
    }

    function setElement(title: string, element: JSX.Element) {
        setState({
            title: title,
            element: element
        })
    }
    React.useEffect(() => {
        let component = cuiComponents[id];
        if (component) {
            setElement(component.name, getComponentElement(id))
        }

    }, [id])
    return <div className="cui-container layout-docs">
        <div className="cui-visible--l"><CuiDocsNavigation sort={true} /></div>
        {state.element ?
            (<div><h1 className="cui-h1 cui-margin-small-top">{state.title}</h1>
                {state.element}</div>) :
            (<div>Document not found</div>)
        }
    </div>;
}