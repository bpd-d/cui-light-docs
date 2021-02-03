import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../routes";
import { capitalize } from "../../utils/function";
import { NavbarLink } from "../partials/navbarlink";

export interface NavbarState {
    currentSite: string;
}

export interface NavbarProps {
    site?: string;
    location?: any;
}

export function Navbar(props: NavbarProps) {
    const currentLocation = useLocation();
    const [state, setState] = React.useState<NavbarState>({ currentSite: "" });
    const navbarBgClass = " cui-box-shadow-remove";
    const downloadBtnCls = state.currentSite ? "cui-shade" : "cui-shade";

    function getCurrentPage() {
        let split = currentLocation.pathname.split('/');
        let curr = "";
        if (split.length > 1) {
            if (split.length >= 4 && split[2].toLowerCase().match("component")) {
                curr = capitalize(split[3]);
            } else {
                curr = capitalize(split[1])
            }
        }
        return curr;
    }

    React.useEffect(() => {
        setState({
            currentSite: getCurrentPage()
        })
    }, [currentLocation])
    return (
        <nav className={"cui-navbar cui-sticky layout-navigation navbar-background-accent cui-dark " + navbarBgClass}>
            <div className="cui-navbar-left cui-width-1-1 cui-width-auto--m cui-flex cui-middle cui-between" id="navbar-left">
                <ul>
                    {state.currentSite && <li><Link className="cui-icon app-icon" cui-icon="app_icon" to="/"></Link></li>}
                    <li><span>{state.currentSite}</span></li>
                </ul>
                <ul className="cui-hidden--m">
                    <li><a className="cui-icon cui-button cui-circle cui-padding" cui-icon="search" cui-open="#search-dialog"></a></li>
                    <li><a className="cui-icon cui-padding cui-button " cui-icon="menu" cui-open="target: #app-offcanvas"></a></li>
                </ul>
            </div>

            <ul className="cui-navbar-right cui-visible--m">
                <li><NavbarLink class="cui-navbar-item" url={ROUTES['home'].uri} name={ROUTES['home'].name} /></li>
                <li><NavbarLink class="cui-navbar-item" url={ROUTES['overview'].uri} name={ROUTES['overview'].name} /></li>
                <li><NavbarLink class="cui-navbar-item" url={ROUTES['docs'].uri} name={ROUTES['docs'].name} /></li>
                <li><NavbarLink class="cui-navbar-item" url={ROUTES['icons'].uri} name={ROUTES['icons'].name} /></li>
                <li><NavbarLink class="cui-navbar-item" url={ROUTES['about'].uri} name={ROUTES['about'].name} /></li>
                <li><Link to="/download" className={"cui-button cui-rounded " + downloadBtnCls}>Download</Link></li>
                <li><a className="cui-icon cui-button cui-circle cui-padding" cui-icon="search" cui-open="#search-dialog"></a></li>
            </ul>
        </nav>
    )
}