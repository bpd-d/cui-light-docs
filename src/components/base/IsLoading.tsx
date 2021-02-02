import * as React from 'react'
export interface IsLoadingProps {
    classes?: string;
    text?: string;
}
export function IsLoading(props: IsLoadingProps) {
    let classes = "cui-container cui-center";
    const text = props.text ?? "Loading...";
    if (props.classes) {
        classes += " " + props.classes;
    }
    return (<div className={classes}>{text}</div>);
}
