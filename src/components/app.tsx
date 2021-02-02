import * as React from "react";
import * as ReactDOM from "react-dom";
import { Navbar } from "./navigation/Navbar";
import { Router, Switch, Route, BrowserRouter, Link } from "react-router-dom";
import { Home } from "./main/home";
import { DocsComponent } from "./main/docs/docs";
import { Overview } from "./main/overview/overview";
import { OffCanvas } from "./navigation/Offcanvas";
import { ErrorRoute } from "./error";
import { Download } from "./main/download";
import { IconsComponent } from "./main/icons/icons";
import { About } from "./main/about/About";
import { BpdStateManager } from "../../node_modules/bpd-state-manager/dist/esm/index";
import { RecentState, STATE_RECENT } from "../api/state/state";
import { RecentItem } from "../api/services/models";
import { getLastRecentItem, getRecentItems } from "../api/state/filters";
import { loadRecentsFromService } from "../api/state/actions";
import { SearchDialog } from "./search/SearchDialog";
import { CuiDocsDashboard } from "./main/docs/dashboard";
import { CUI_LIGHT_VERSION } from "cui-light-app/dist/esm/index";
import { CUI_STYLES_VERSION } from "cui-styles/index";
import { CUI_ICONS_VERSION } from "bpd-cui-icons/esm/index";
import { ROUTES } from "../routes";
import { CuiDocsIconPackBuilder } from "./main/icons/builder/builder";


export interface AppProps {
}
export interface AppState {
    currentSite?: string;
    recents: RecentItem[];
    recent: RecentItem;
    isReady: boolean;
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
            recent: undefined,
            isReady: false
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
        this.setState({
            ...this.state,
            recents: getRecentItems(state),
            recent: getLastRecentItem(state),
            isReady: true
        })
    }

    shouldDisplayRecent() {
        return this.state.recent && this.state.recent.name;
    }
    render() {
        return <div>
            {!this.state.isReady ?
                <div className="loading-main">
                    <div className="loading-content">
                        cUI is loading...
                    </div>
                </div>
                :
                <BrowserRouter>
                    <div className="layout-main">
                        <Navbar site={this.state.currentSite} />
                        <div className="layout-content">
                            <Switch>
                                <Route path={ROUTES["docs"].uri} component={CuiDocsDashboard}></Route>
                                <Route path={ROUTES['component'].uri} component={DocsComponent}></Route>
                                <Route path={ROUTES.overview.uri} component={Overview}></Route>
                                <Route path={ROUTES.download.uri} component={Download}></Route>
                                <Route path={ROUTES.builder.uri} component={CuiDocsIconPackBuilder}></Route>
                                <Route path={ROUTES.icons.uri} component={IconsComponent}></Route>
                                <Route path={ROUTES.about.uri} component={About} />
                                <Route path={ROUTES.home.uri} component={Home}></Route>
                                <Route>
                                    <ErrorRoute />
                                </Route>
                            </Switch>
                        </div>
                        <div className="info-bar">
                            <div className="cui-drop-trigger cui-margin-small-bottom" >
                                <a className="cui-icon-button cui-accent cui-box-shadow" cui-icon="history"></a>
                                <div className="cui-drop cui-dropdown" cui-drop="mode: click; autoClose: y; outClose: y">
                                    {/* <div className="cui-flex cui-middle">
                                <span cui-icon="history"></span>
                                <span className="cui-margin-left">History</span>
                            </div> */}
                                    <span className="cui-icon-margin cui-icon cui-padding-small cui-text-bold" cui-icon="history"> History</span>
                                    <ul className="cui-drop-nav">
                                        {this.state.recents.map(recent => {
                                            return <li key={recent.name}><Link to={recent.url}>{recent.name}</Link></li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="cui-drop-trigger" >
                                <a className="cui-icon-button cui-accent cui-box-shadow" cui-icon="git"></a>
                                <div className="cui-drop cui-dropdown" cui-drop="mode: click; autoClose: y; outClose: y">
                                    <span className="cui-icon-margin cui-icon cui-padding-small cui-text-bold" cui-icon="git"> Git links</span>
                                    <ul className="cui-drop-nav">
                                        <li><a href="https://github.com/bpd-d/cui-light">cUI Light {CUI_LIGHT_VERSION}</a></li>
                                        <li><a href="https://github.com/bpd-d/cui-styles">cUI Styles {CUI_STYLES_VERSION}</a></li>
                                        <li><a href="https://github.com/bpd-d/cui-icons">cUI Icons {CUI_ICONS_VERSION}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <SearchDialog />
                        <OffCanvas />
                    </div></BrowserRouter>
            }</div>
    };
}
