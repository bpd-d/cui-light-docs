import * as React from "react";

export interface HomeProps {
    site?: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Home extends React.Component<any, {}> {
    constructor(props: HomeProps) {
        super(props);
    }
    render() {
        return <div className="">
            Home
        </div>;
    }
}