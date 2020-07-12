import * as React from "react";
import * as ReactDOM from "react-dom";
import { Navbar } from "./navbar";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./home";
import { Docs } from "./docs";
import { Overview } from "./overview";

export interface AppProps { }
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
    render() {
        return <BrowserRouter>
            <div className="">
                <Navbar site={this.state.currentSite} />
                <div>
                    <Switch>
                        <Route path="/overview" component={Overview}>
                        </Route>
                        <Route path="/docs" component={Docs}>
                        </Route>
                        <Route path="/" component={Home}>
                        </Route>
                    </Switch>
                </div>
                <div className="info-bar">
                    <button className="cui-icon-button cui-default" cui-icon="info" cui-open="#beta-info-dialog"></button>
                </div>
                <div className="cui-dialog" id="beta-info-dialog">
                    <div className="cui-dialog-container">
                        <div className="cui-dialog-header">
                            <span className="cui-dialog-title">Information</span>
                            <a href="#" className="cui-icon" cui-icon="close" id="beta-info-close" cui-close="#beta-info-dialog"></a>
                        </div>
                        <div className="cui-dialog-body">
                            Website is currently under development. Not all actions and features may be working properly at the moment but all issues will be reviewed and corrected in the nearest future.
                </div>
                    </div>
                </div>
            </div></BrowserRouter>;
    }
}