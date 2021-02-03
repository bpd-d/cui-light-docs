import * as React from "react";
import { Link } from "react-router-dom";
import { setDocumentTitle } from "src/core/functions";
import { PageBase } from "../base/PageBase";

export interface HomeProps {
    site?: string;
}

export class Home extends React.Component<any, {}> {
    constructor(props: HomeProps) {
        super(props);
    }
    render() {
        return <PageBase name="Home">
            <div className="home-main-container cui-dark">
                <div className="cui-container cui-flex cui-center cui-flex-direction-column cui-height-1-1 home-background-shapes">
                    <div className="cui-flex-center home-logo-container">
                        <span className="cui-icon app-home-logo cui-padding-large" cui-icon="app_icon_large_new"></span>
                    </div>
                    <div className="cui-flex cui-center cui-margin-large-top">
                        <div className="">
                            <h1 className="cui-h1 cui-margin-large-top cui-margin-bottom cui-text-center">Modern, fast and responsive UI tool for the Web</h1>
                            <div className="cui-margin-large-top cui-flex cui-center">
                                <Link to="/overview" className="cui-button cui-rounded">Learn more</Link>
                                <Link to="/docs/components/introduction" className="cui-margin-small-left cui-button cui-shade cui-rounded">Get started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageBase>;
    }
}