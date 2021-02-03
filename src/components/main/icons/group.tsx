import { IconElementData, IconsGroup, GroupedIconsData } from "./icons";
import * as React from "react";
import { capitalize } from "../../../utils/function";
import { CuiGroupItem, CuiGroup } from "../../../utils/groups";
import { IconElement } from "./card";


export interface CuiIconsGroupedComponentProps {
    icons: CuiGroup<IconElementData>;
}


export interface CuiIconsGroupComponentProps {
    group: CuiGroupItem<IconElementData>;
}

export function CuiIconsGroupComponent(props: CuiIconsGroupComponentProps) {
    return (
        <li className="cui-active">
            <a className="cui-accordion-title">{capitalize(props.group.name)}</a>
            <div className="cui-accordion-content cui-flex-grid cui-child-width-1-2 cui-child-width-1-4--m cui-child-width-1-6--l">
                {props.group.data.map(icon => {
                    return (<div key={icon.code}><IconElement name={icon.name} code={icon.code} /></div>);
                })}
            </div>
        </li>
    )
}


export function CuiIconsGroupedComponent(props: CuiIconsGroupedComponentProps) {
    const [list, setList] = React.useState<JSX.Element[]>([]);

    function prepareViews(icons: CuiGroup<IconElementData>) {
        let view: JSX.Element[] = [];
        for (let group in icons) {
            view.push(<CuiIconsGroupComponent key={group} group={icons[group]} />)
        }
        return view;
    }


    React.useEffect(() => {

    }, [props.icons])
    return (
        <ul className="cui-accordion" cui-accordion="single: false" >
            {prepareViews(props.icons)}
        </ul >
    );
}