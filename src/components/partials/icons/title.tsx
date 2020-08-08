import * as React from "react";

export interface CuiIconsHeaderTitleProps {
    text: string;
}

export function CuiIconsHeaderTitle(props: CuiIconsHeaderTitleProps) {
    const isText = props.text && props.text.length > 0;
    const result = <span>Results for: <span className="cui-text-italic">{props.text}</span></span>;
    const title = isText ? result : "";
    return (
        <h2 className="cui-h2">{title}</h2>
    )
}