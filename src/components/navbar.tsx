import * as React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NavbarLink } from "./partials/navbarlink";

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
    const navbarBgClass = state.currentSite ? " navbar-background-accent cui-dark" : ""
    const downloadBtnCls = state.currentSite ? "cui-shade" : "cui-accent"
    React.useEffect(() => {
        let split = currentLocation.pathname.split('/');
        setState({
            currentSite: split.length > 1 ? currentLocation.pathname.split('/')[1].toLocaleUpperCase() : ""
        })
    }, [currentLocation])
    return (
        <nav className={"cui-navbar cui-transparent cui-sticky layout-navigation" + navbarBgClass}>
            <div className="cui-navbar-left cui-width-1-1 cui-width-auto--m cui-flex cui-middle cui-between" id="navbar-left">
                <ul>
                    {state.currentSite && <li><Link className="cui-icon app-icon" cui-icon="app_icon" to="/"></Link></li>}
                    <li><span>{state.currentSite}</span></li>
                </ul>
                <a className="cui-icon cui-padding cui-button cui-hidden--m" cui-icon="menu" cui-open="target: #app-offcanvas"></a>
            </div>

            <ul className="cui-navbar-right cui-visible--m">
                <li><NavbarLink class="cui-navbar-item" url="/" name="Home" /></li>
                <li><NavbarLink class="cui-navbar-item" url="/overview" name="Oveview" /></li>
                <li><NavbarLink class="cui-navbar-item" url="/start" name="Getting started" /></li>
                <li><NavbarLink class="cui-navbar-item" url="/docs" name="Documentation" /></li>
                <li><NavbarLink class="cui-navbar-item" url="/icon" name="Icons" /></li>
                <li><Link to="/download" className={"cui-button cui-rounded " + downloadBtnCls}>Download</Link></li>
            </ul>
        </nav>
    )
}