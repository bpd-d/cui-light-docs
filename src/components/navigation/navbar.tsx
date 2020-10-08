import * as React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
    const navbarBgClass = "navbar-background-accent cui-dark cui-box-shadow-remove"; //state.currentSite ? "navbar-background-accent cui-dark" : "cui-transparent"
    const downloadBtnCls = state.currentSite ? "cui-shade" : "cui-accent";

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
        <nav className={"cui-navbar cui-sticky layout-navigation " + navbarBgClass}>
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
                <li><NavbarLink class="cui-navbar-item" url="/docs/components/introduction" name="Documentation" /></li>
                <li><NavbarLink class="cui-navbar-item" url="/icon" name="Icons" /></li>
                <li><NavbarLink class="cui-navbar-item" url="/about" name="About" /></li>
                <li><Link to="/download" className={"cui-button cui-rounded " + downloadBtnCls}>Download</Link></li>
            </ul>
        </nav>
    )
}