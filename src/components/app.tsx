import * as React from "react";
import * as ReactDOM from "react-dom";
import { Navbar } from "./navbar";
import { Router, Switch, Route, BrowserRouter, useLocation } from "react-router-dom";
import { Home } from "./home";
import { Docs } from "./docs";
import { Overview } from "./overview";
import { OffCanvas } from "./offcanvas";
import { ErrorRoute } from "./error";
import { TestComponent } from "./test";
import { GettingStarted } from "./start";
import { Download } from "./download";

export interface AppProps {
}
export interface AppState {
    currentSite?: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            currentSite: ""
        }
    }

    componentDidUpdate() {
    }

    render() {
        return <BrowserRouter>
            <div className="">
                <Navbar site={this.state.currentSite} />
                <div className="">
                    <Switch>
                        <Route path="/start" component={GettingStarted}></Route>
                        <Route path="/overview" component={Overview}></Route>
                        <Route path="/docs" component={Docs}></Route>
                        <Route path="/download" component={Download}></Route>
                        <Route path="/test/:id" component={TestComponent}></Route>
                        <Route exact path="/" component={Home}></Route>
                        <Route>
                            <ErrorRoute />
                        </Route>
                    </Switch>
                </div>
                <div className="info-bar">
                    <div className="cui-inline-block cui-drop-trigger">
                        <a className="cui-button cui-background-default cui-default cui-rounded cui-margin-small-right">Github</a>
                        <div className="cui-drop cui-dropdown cui-drop-top-right cui-drop-hover">
                            <ul className="cui-drop-nav">
                                <li><a href="https://github.com/bpd-d/cui-light">cUI Light</a></li>
                                <li><a href="https://github.com/bpd-d/cui-styles">cUI Styles</a></li>
                                <li><a href="https://github.com/bpd-d/cui-icons">cUI Icons</a></li>
                            </ul>
                        </div>
                    </div>

                    <button className="cui-icon-button cui-default" cui-icon="info" cui-open="target: #beta-info-dialog; action: .cui-dialog-default-in; timeout: 500"></button>
                </div>
                <div className="cui-dialog" id="beta-info-dialog">
                    <div className="cui-dialog-container">
                        <div className="cui-dialog-header">
                            <span className="cui-dialog-title">Information</span>
                            <a href="#" className="cui-icon" cui-icon="close" id="beta-info-close" cui-close="target: #beta-info-dialog; action: .cui-dialog-default-out; timeout: 500"></a>
                        </div>
                        <div className="cui-dialog-body">
                            Website is currently under development. Not all actions and features may be working properly at the moment but all issues will be reviewed and corrected in the nearest future.
                        </div>
                    </div>
                </div>
                <OffCanvas />
            </div></BrowserRouter>;
    }
}