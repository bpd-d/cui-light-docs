import * as React from "react";
import { NavbarLink } from "../partials/navbarlink";
import { cuiComponents } from "../../statics/components/base";
import { enumerate, getKeysFromObject } from "../../utils/function";

export interface CuiDocsNavigationProps {
    class?: string;
    shouldClose?: boolean;
    sort?: boolean;
}

export function CuiDocsNavigation(props: CuiDocsNavigationProps) {
    // let items: JSX.Element[] = []
    const [items, setItems] = React.useState<JSX.Element[]>([]);
    const shouldClose = props.shouldClose && true;
    function sortAndPrepare(): JSX.Element[] {
        let keys: string[] = getKeysFromObject(cuiComponents);
        return keys.sort().map(key => {
            let value = cuiComponents[key]
            return <li key={key}><NavbarLink url={value.uri} name={value.name} shouldClose={shouldClose} /></li>;
        })
    }

    function prepare(): JSX.Element[] {
        const list: JSX.Element[] = [];
        enumerate((key, value) => {
            if (value) {
                list.push(<li key={key}><NavbarLink url={value.uri} name={value.name} shouldClose={shouldClose} /></li>)
            }
        }, cuiComponents)
        return list
    }

    React.useEffect(() => {
        setItems(props.sort && true ? sortAndPrepare() : prepare())
    }, [props.sort])
    return (
        <>
            <ul className={"cui-list cui-interactive " + (props.class ?? "")}>
                {items}
            </ul>
        </>
    )
}