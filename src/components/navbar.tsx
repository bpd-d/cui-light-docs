import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export interface NavbarProps {
    site?: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Navbar extends React.Component<NavbarProps, {}> {
    constructor(props: NavbarProps) {
        super(props);
    }
    render() {
        return <div className="cui-navbar">
            <ul className="cui-navbar-left">
                <li><Link className="cui-icon app-icon" cui-icon="app_icon" to="/"></Link></li>
                <li><a href="#">{this.props.site}</a></li>

            </ul>
            <ul className="cui-navbar-right">
                <li><Link className="cui-navbar-item" to="/">Home</Link></li>
                <li><Link className="cui-navbar-item" to="/overview">Oveview</Link></li>
                <li><Link className="cui-navbar-item" to="/docs">Documentation</Link></li>
                <li><a href="#" className="cui-button cui-accent cui-rounded">Download</a></li>
            </ul>
        </div>;
    }
}