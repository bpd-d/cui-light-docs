import * as React from "react";
import { Link } from "react-router-dom";

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
        return <div className="home-main-container cui-flex-center">
            <div className="cui-container cui-flex-grid cui-child-width-1-4">
                <div className="cui-width-1-3 cui-flex-center">
                    <span className="cui-icon app-home-logo" cui-icon="app_icon_large"></span>
                </div>
                <div className="cui-width-2-3">
                    <div className="">
                        <h1 className="cui-h1 cui-margin-top cui-margin-bottom cui-text-center cui-text-left--s">Modern, fast and responsive <span className="cui-text-bold">UI</span> framework for the <span className="cui-text-bold">Web</span></h1>
                        <div className="cui-text-muted">
                            <ul className="hashtags">
                                <li>#Responsive</li>
                                <li>#Light</li>
                                <li>#Fast</li>
                                <li>#Simple</li>
                                <li>#Sass</li>
                                <li>#Typescript</li>
                                <li>#Themes</li>
                                <li>#Dark Mode</li>
                            </ul>
                        </div>
                        <div className="cui-margin-top cui-flex cui-center cui-left--m">
                            <Link to="/overview" className="cui-button cui-default cui-rounded">Learn more</Link>
                            <Link to="/start" className="cui-margin-small-left cui-button cui-accent cui-rounded">Get started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}