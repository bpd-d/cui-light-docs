import * as React from "react";
import * as ReactDOM from "react-dom";
import { Navbar } from "./navigation/Navbar";
import { Switch, Route, BrowserRouter, Link, useLocation } from "react-router-dom";
// import { DocsComponent } from "./main/docs/docs";
// import { Overview } from "./main/overview/overview";
import { OffCanvas } from "./navigation/Offcanvas";
import { ErrorRoute } from "./error";
// import { Download } from "./main/download";
// import { About } from "./main/about/About";
import { BpdStateManager } from "../../node_modules/bpd-state-manager/dist/esm/index";
import { RecentState, STATE_RECENT } from "../api/state/state";
import { RecentItem } from "../api/services/models";
import { getLastRecentItem, getRecentItems } from "../api/state/filters";
import { loadRecentsFromService } from "../api/state/actions";
import { SearchDialog } from "./search/SearchDialog";
import { CUI_LIGHT_VERSION } from "cui-light-app/dist/esm/index";
import { CUI_STYLES_VERSION } from "cui-styles/index";
import { CUI_ICONS_VERSION } from "bpd-cui-icons/esm/index";
import { IsLoading } from "./base/IsLoading";
import { ROUTES } from "../routes";
import Home from "./main/home";


const CuiDocsDashboard = React.lazy(() => import('./main/docs/dashboard'));
const IconsComponent = React.lazy(() => import('./main/icons/icons'));
const CuiDocsIconPackBuilder = React.lazy(() => import('./main/icons/builder/builder'));
// const Home = React.lazy(() => import('./main/home'));
const Overview = React.lazy(() => import('./main/overview/overview'));
const About = React.lazy(() => import('./main/about/About'));
const Download = React.lazy(() => import('./main/download'));
const DocsComponent = React.lazy(() => import('./main/docs/docs'));

export interface AppProps {
}
export interface AppState {
    currentSite?: string;
    recents: RecentItem[];
    recent: RecentItem;
    isReady: boolean;
}
export function App() {
    return (<>

        <BrowserRouter>
            <AppContent />
        </BrowserRouter>

    </>);
}


function AppContent(props: AppProps) {
    const [state, setState] = React.useState<AppState>({
        currentSite: "",
        recents: [],
        recent: undefined,
        isReady: false
    })
    const location = useLocation();



    function onGlobalStateUpdate(recentstate: RecentState) {
        setState({
            ...state,
            recents: getRecentItems(recentstate),
            recent: getLastRecentItem(recentstate),
            isReady: true
        })
    }

    React.useEffect(() => {
        const subscribctionId = BpdStateManager.subscribeToState(STATE_RECENT, onGlobalStateUpdate);
        loadRecentsFromService();
        return () => {
            if (subscribctionId) {
                BpdStateManager.unsubscribeFromState(STATE_RECENT, subscribctionId)
            }
        }
    }, [state.isReady])
    if (!state.isReady) {
        return (
            <IsLoading />)
    }
    return (
        <div className="layout-main">
            <Navbar site={state.currentSite} />
            <div className="layout-content">
                <React.Suspense fallback={<IsLoading classes="cui-height-viewport-1-1" />}>
                    <Switch location={location} >
                        <Route path={ROUTES["docs"].uri} render={() => <CuiDocsDashboard />}></Route>
                        <Route path={ROUTES['component'].uri} render={() => <DocsComponent />}></Route>
                        <Route path={ROUTES.overview.uri} render={() => <Overview />}></Route>
                        <Route path={ROUTES.download.uri} render={() => <Download />}></Route>
                        <Route path={ROUTES.builder.uri} render={() => <CuiDocsIconPackBuilder />}></Route>
                        <Route path={ROUTES.icons.uri} render={() => <IconsComponent />}></Route>
                        <Route path={ROUTES.about.uri} render={() => <About />} />
                        <Route path={ROUTES.home.uri} component={Home}></Route>
                        <Route>
                            <ErrorRoute />
                        </Route>
                    </Switch>
                </React.Suspense>
            </div>
            <div className="info-bar">
                <div className="cui-drop-trigger cui-margin-small-bottom" >
                    <a className="cui-icon-button cui-default cui-box-shadow" cui-icon="history"></a>
                    <div className="cui-drop cui-dropdown" cui-drop="mode: click; autoClose: y; outClose: y">
                        <span className="cui-icon-margin cui-icon cui-padding-small cui-text-bold" cui-icon="history"> History</span>
                        <ul className="cui-drop-nav">
                            {state.recents.map(recent => {
                                return <li key={recent.name}><Link to={recent.url}>{recent.name}</Link></li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="cui-drop-trigger" >
                    <a className="cui-icon-button cui-default cui-box-shadow" cui-icon="git"></a>
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
        </div>
    )
}