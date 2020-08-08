import * as React from "react";

export interface OverviewSegmentProps {
    title: string;
    icon: string;
    description: string;
    even?: boolean;
}

export function OverviewSegmentComponent(props: OverviewSegmentProps) {
    let classIcon = `cui-width-1-1 cui-width-1-3--m cui-flex-center cui-order-1 ${props.even ? "cui-order-1--m" : "cui-order-2--m"}`;
    let classText = `cui-width-1-1 cui-width-2-3--m cui-order-2 cui-flex cui-middle ${props.even ? "cui-order-2--m" : "cui-order-1--m"}`;
    let classSection = `cui-section cui-height-viewport-1-1 cui-height-viewport-1-2--m cui-width-1-1 cui-flex-center ${props.even ? "" : ""}`
    return (
        <div className={classSection}>
            <div className="limited-content-width cui-flex-grid">
                <div className={classIcon}>
                    <span className="cui-icon" cui-icon={props.icon}></span>
                </div>
                <div className={classText}>
                    <div>
                        <h1 className="cui-h1">{props.title}</h1>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
