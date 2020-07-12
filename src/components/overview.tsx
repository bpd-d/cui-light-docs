import * as React from "react";

export interface OverviewProps {
    site?: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Overview extends React.Component<any, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return <div className="">
            Overview
        </div>;
    }
}