import * as React from "react";

export interface DocsProps {
    site?: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Docs extends React.Component<any, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return <div className="">
            Docs
        </div>;
    }
}