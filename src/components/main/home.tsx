import * as React from "react";
import { Link } from "react-router-dom";

export interface HomeProps {
    site?: string;
}

export class Home extends React.Component<any, {}> {
    constructor(props: HomeProps) {
        super(props);
    }
    render() {
        return <div className="home-main-container cui-flex-center">
            <div className="cui-container cui-flex-grid cui-child-width-1-4">
                <div className="cui-width-1-1 cui-flex-center">
                    <span className="cui-icon app-home-logo" cui-icon="app_icon_large"></span>
                </div>
                <div className="cui-width-1-1 cui-flex cui-center">
                    <div className="">
                        <h1 className="cui-h1 cui-margin-top cui-margin-bottom cui-text-center cui-text-left--s">Modern, fast and responsive <span className="cui-text-bold">UI</span> framework for the <span className="cui-text-bold">Web</span></h1>
                        {/* <ul className="hashtags cui-text-muted">
                            <li>#Responsive</li>
                            <li>#Light</li>
                            <li>#Fast</li>
                            <li>#Simple</li>
                            <li>#Sass</li>
                            <li>#Typescript</li>
                            <li>#Themes</li>
                            <li>#Dark Mode</li>
                        </ul> */}
                        <div className="cui-margin-large-top cui-flex cui-center">
                            <Link to="/overview" className="cui-button cui-default cui-rounded">Learn more</Link>
                            <Link to="/start" className="cui-margin-small-left cui-button cui-accent cui-rounded">Get started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}