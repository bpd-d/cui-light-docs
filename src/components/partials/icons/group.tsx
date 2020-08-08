import { IconElementData, IconsGroup, GroupedIconsData } from "../../main/icons";
import * as React from "react";
import { IconElement } from "../icon";
import { capitalize } from "../../../utils/function";
import { CuiGroupItem, CuiGroup } from "../../../utils/groups";


export interface CuiIconsGroupedComponentProps {
    icons: CuiGroup<IconElementData>;
}


export interface CuiIconsGroupComponentProps {
    group: CuiGroupItem<IconElementData>;
}

export function CuiIconsGroupComponent(props: CuiIconsGroupComponentProps) {
    const iconsView = props.group.data.map(icon => {
        return (<div key={icon.code}><IconElement name={icon.name} code={icon.code} /></div>);
    })
    return (
        <li className="cui-active">
            <a className="cui-accordion-title">{capitalize(props.group.name)}</a>
            <div className="cui-accordion-content cui-flex-grid cui-child-width-1-2 cui-child-width-1-4--m cui-child-width-1-6--l">
                {iconsView}
            </div>
        </li>
    )
}


export function CuiIconsGroupedComponent(props: CuiIconsGroupedComponentProps) {
    function prepareViews(icons: CuiGroup<IconElementData>) {
        let view: JSX.Element[] = [];
        for (let group in icons) {
            view.push(<CuiIconsGroupComponent key={group} group={icons[group]} />)
        }
        return view;
    }

    const listView = prepareViews(props.icons)
    console.log("Accordion render")
    return (
        <ul className="cui-accordion" cui-accordion="single: false" >
            {listView}
        </ul >
    );
}