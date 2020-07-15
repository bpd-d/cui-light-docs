import * as React from "react";
import { OverviewSegmentComponent } from "./partials/overview";

export interface OverviewProps {
    site?: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Overview extends React.Component<any, {}> {
    list: any = [
        {
            title: "Title",
            description: "dsadasdsada",
            icon: "plus"
        },
        {
            title: "Title",
            description: "dsadasdsada",
            icon: "plus"
        },
        {
            title: "Title",
            description: "dsadasdsada",
            icon: "plus"
        },
        {
            title: "Title",
            description: "dsadasdsada",
            icon: "plus"
        },
        {
            title: "Title",
            description: "dsadasdsada",
            icon: "plus"
        }
    ]
    constructor(props: any) {
        super(props);
    }
    render() {

        let components = this.list.map((item: any, index: number) => {
            return <OverviewSegmentComponent title={item.title} description={item.description} icon={item.icon} even={index % 2 === 0} key={index} />

        })
        return <div className="cui-flex cui-center">
            {components}
        </div>;
    }
}