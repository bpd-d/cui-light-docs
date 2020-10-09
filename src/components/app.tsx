import * as React from "react";
import * as ReactDOM from "react-dom";
import { Navbar } from "./navigation/navbar";
import { Router, Switch, Route, BrowserRouter, useLocation, Link } from "react-router-dom";
import { Home } from "./main/home";
import { DocsComponent } from "./main/docs";
import { Overview } from "./main/overview/overview";
import { OffCanvas } from "./navigation/offcanvas";
import { ErrorRoute } from "./error";
import { Download } from "./main/download";
import { IconsComponent } from "./main/icons/icons";
import { About } from "./main/about/About";
import { BpdStateManager } from "../../node_modules/bpd-state-manager/dist/esm/index";
import { RecentState, STATE_RECENT } from "../api/state/state";
import { RecentItem } from "../api/services/models";
import { getLastRecentItem, getRecentItems } from "../api/state/filters";
import { capitalize } from "../utils/function";
import { loadRecentsFromService } from "../api/state/actions";

export interface AppProps {
}
export interface AppState {
    currentSite?: string;
    recents: RecentItem[];
    recent: RecentItem;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<AppProps, AppState> {
    subscribctionId: string;
    constructor(props: AppProps) {
        super(props);
        this.state = {
            currentSite: "",
            recents: [],
            recent: undefined

        }
        this.subscribctionId = null;
        this.shouldDisplayRecent = this.shouldDisplayRecent.bind(this)
    }

    componentDidUpdate() {

    }

    componentDidMount() {
        this.subscribctionId = BpdStateManager.subscribeToState(STATE_RECENT, this.onGlobalStateUpdate.bind(this));
        loadRecentsFromService();
    }

    componentWillUnmount() {
        if (this.subscribctionId !== null) {
            BpdStateManager.unsubscribeFromState(STATE_RECENT, this.subscribctionId)
            this.subscribctionId = null;
        }
    }

    onGlobalStateUpdate(state: RecentState) {
        console.log(state);
        this.setState({
            ...this.state,
            recents: getRecentItems(state),
            recent: getLastRecentItem(state)
        })
    }

    shouldDisplayRecent() {
        return this.state.recent && this.state.recent.name;
    }
    render() {
        return <BrowserRouter>
            <div className="layout-main">
                <Navbar site={this.state.currentSite} />
                <div className="layout-content">
                    <Switch>
                        <Route path="/docs/components/:id" component={DocsComponent}></Route>
                        <Route path="/overview" component={Overview}></Route>
                        {/* <Route path="/docs" component={DocsComponent}></Route> */}
                        <Route path="/download" component={Download}></Route>
                        <Route path="/icon" component={IconsComponent}></Route>
                        <Route path="/about" component={About} />
                        <Route path="/" component={Home}></Route>
                        <Route>
                            <ErrorRoute />
                        </Route>
                    </Switch>
                </div>
                <div className="info-bar">
                    <div className="cui-inline-block cui-drop-trigger cui-margin-small-bottom" >
                        <a className="cui-icon-button cui-accent cui-box-shadow cui-animation-fade-in" cui-icon="history"></a>
                        <div className="cui-drop cui-dropdown cui-drop-top-right" cui-drop="mode: click; autoClose: y; outClose: y">
                            <ul className="cui-drop-nav">
                                {this.state.recents.map(recent => {
                                    return <li key={recent.name}><Link cui-icon="chevron-right" to={recent.url}>{recent.name}</Link></li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="cui-inline-block cui-drop-trigger" >
                        <a className="cui-icon-button cui-accent cui-box-shadow cui-animation-fade-in" cui-icon="info"></a>
                        <div className="cui-drop cui-dropdown cui-drop-top-right" cui-drop="mode: click; autoClose: y; outClose: y">
                            <ul className="cui-drop-nav">
                                <li><a className="cui-icon cui-icon-margin" cui-icon="code" href="https://github.com/bpd-d/cui-light">cUI Light</a></li>
                                <li><a className="cui-icon cui-icon-margin" cui-icon="code" href="https://github.com/bpd-d/cui-styles">cUI Styles</a></li>
                                <li><a className="cui-icon cui-icon-margin" cui-icon="code" href="https://github.com/bpd-d/cui-icons">cUI Icons</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <OffCanvas />
            </div></BrowserRouter>;
    }
}