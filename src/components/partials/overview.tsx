import * as React from "react";

export interface OverviewSegmentProps {
    title: string;
    icon: string;
    description: string;
    even?: boolean;
}

export function OverviewSegmentComponent(props: OverviewSegmentProps) {
    let classIcon = `cui-width-1-4 cui-flex-center cui-order-1 ${props.even ? "cui-order-1--s" : "cui-order-2--s"}`;
    let classText = `cui-width-3-4 cui-order-2 ${props.even ? "cui-order-2--s" : "cui-order-1--s"}`;
    let classSection = `cui-section cui-height-viewport-1-1 cui-height-viewport-1-3--s  cui-width-1-1 cui-flex-center ${props.even ? "" : "cui-background-shade"}`
    return (
        <div className={classSection}>
            <div className="limited-content-width cui-flex-grid">
                <div className={classIcon}>
                    <span className="cui-icon" cui-icon={props.icon}></span>
                </div>
                <div className={classText}>
                    <h1 className="cui-h1">{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
