import * as React from "react";
import { NavbarLink } from "../partials/navbarlink";
import { enumerate, getKeysFromObject } from "../../utils/function";
import { DOCTYPE_COMPONENTS, getDocsTask } from "../../core/imports/components";
import { CuiDocsComponents } from "../../statics/base";

export interface CuiDocsNavigationProps {
    class?: string;
    shouldClose?: boolean;
    sort?: boolean;
    filter?: string;
    type?: string;
}

export function CuiDocsNavigation(props: CuiDocsNavigationProps) {
    // let items: JSX.Element[] = []
    const [items, setItems] = React.useState<JSX.Element[]>([]);
    const shouldClose = props.shouldClose && true;
    const [error, setError] = React.useState<string>(undefined);

    function sortAndPrepare(cuiComponents: CuiDocsComponents): JSX.Element[] {
        let keys: string[] = getKeysFromObject(cuiComponents);
        return keys.sort().map(key => {
            let value = cuiComponents[key]
            return <li key={key}><NavbarLink url={value.uri} name={value.name} shouldClose={shouldClose} /></li>;
        })
    }

    function prepare(cuiComponents: CuiDocsComponents): JSX.Element[] {
        const list: JSX.Element[] = [];
        enumerate((key, value) => {
            if (value) {
                list.push(<li key={key}><NavbarLink url={value.uri} name={value.name} shouldClose={shouldClose} /></li>)
            }
        }, cuiComponents)
        return list
    }

    React.useEffect(() => {
        getDocsTask.call(props.type ?? DOCTYPE_COMPONENTS).then((components) => {
            setItems(props.sort && true ? sortAndPrepare(components) : prepare(components))
        }, (e) => {
            setError(e.message);
        })

    }, [props.sort, error])
    if (error) {
        return <div className="cui-text-error">{error}</div>
    }
    return (
        <>
            <ul className={"cui-list cui-interactive animated-list " + (props.class ?? "")}>
                {items}
            </ul>
        </>
    )
}