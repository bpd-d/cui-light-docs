import * as React from "react";
import { CuiSelect } from "../../partials/forms/select";
import { CuiIconsHeaderTitle } from "./title";
import { CuiIconFilterData } from "./icons";

export interface CuiIconsComponentHeaderProps {
    categories: string[];
    filter: CuiIconFilterData;
    onUpdate?: (data: CuiIconFilterData) => void;
}

export function CuiIconsComponentHeader(props: CuiIconsComponentHeaderProps) {
    function onSelectChange(value: string) {
        if (props.onUpdate) {
            props.onUpdate({ ...props.filter, category: value })
        }
    }

    function onInputChange(event: any) {
        if (props.onUpdate) {
            props.onUpdate({ ...props.filter, filter: event.target.value })
        }
    }

    return (
        <div className="cui-flex cui-between-m cui-middle">
            <CuiIconsHeaderTitle text={props.filter.filter} />
            <div className="cui-flex cui-right--s cui-flex-grow cui-middle">
                <div className="cui-form cui-flex cui-between cui-left--s cui-width-1-1 cui-width-auto--m cui-margin-small cui-middle">
                    <label htmlFor="filter" className="cui-form-label cui-margin-small-right">Filter</label>
                    <input className="cui-input" type="text" placeholder="Filter" value={props.filter.filter} onChange={onInputChange} />
                </div>
                <div className="cui-form cui-flex cui-between cui-left--s cui-width-1-1 cui-width-auto--m cui-margin-small cui-middle">
                    <label htmlFor="categories" className="cui-form-label cui-margin-small-right">Categories</label>
                    <CuiSelect name="categories" options={props.categories} current={props.filter.category} placeholder="Category" onChange={onSelectChange} />
                </div>
            </div>
        </div>
    );
}