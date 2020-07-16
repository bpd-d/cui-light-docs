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
            title: "Built-in dark mode",
            description: "Framework has own dark mode baked into the CSS. It is enough to add one class to root element to turn the lights off. With plugin it can automatically switch on when your OS goes into dark mode.",
            icon: "overview_dark_mode_2"
        },
        {
            title: "Performance",
            description: "Light and fast - this is how framework is supposed to be. Fast dom implementation allows to achieve performance and realiable integration with front-end frameworks and libraries like Vue, Angular or React",
            icon: "overview_fastdom"
        },
        {
            title: "Flexible component compositions",
            description: "You are not tied to all the components in framework. If some are not in use it easy to built new, lighter CSS part without them. Creating own builds is the preffered way anyway.",
            icon: "overview_flex_3"
        },
        {
            title: "Color themes",
            description: "Framework provides two color sets: accent and secondary. Beacause all colors come from CSS variables, they can be easily switched to other even in runtime. Framework gives ability to do that.",
            icon: "overview_theme"
        },
        {
            title: "Events system",
            description: "All JS components as well as framework itself communicate via event bus system. Components may produce emits informing about specific actions like open/close, intersection, etc. ",
            icon: "overview_events_2"
        },
        {
            title: "Plugins and components",
            description: "Apart from CSS components cUI implements few interactive components making framework more responsive and flexible for user. For example, intersection component allows to trigger an action once element starts intersecting with viewport.",
            icon: "overview_plugins"
        },
        {
            title: "Svg icons",
            description: "cUI provides set of svg icons as well as CSS styling for them. Framework however, allows for using any svg icons library with or without built-in icons",
            icon: "overview_icons_2"
        },
        {
            title: "Print mode",
            description: "Having a beautiful and colorful application is great, but sometimes there's need to turn all the colors and stylings off. cUI allows to do this with only one switch. With proper plugin print mode can be automatically turned on once user tries to print a page.",
            icon: "overview_print"
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