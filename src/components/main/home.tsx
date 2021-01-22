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
        return <div className="home-main-container cui-flex-center cui-dark">
            <div className="cui-container cui-flex-grid cui-child-width-1-4">
                <div className="cui-width-1-1 cui-flex-center">
                    <span className="cui-icon app-home-logo" cui-icon="app_icon_large_new"></span>
                </div>
                <div className="cui-width-1-1 cui-flex cui-center">
                    <div className="">
                        <h1 className="cui-h1 cui-margin-large-top cui-margin-bottom cui-text-center">Modern, fast and responsive UI framework for the Web</h1>
                        <div className="cui-margin-large-top cui-flex cui-center">
                            <Link to="/overview" className="cui-button cui-rounded">Learn more</Link>
                            <Link to="/docs/components/introduction" className="cui-margin-small-left cui-button cui-shade cui-rounded">Get started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}