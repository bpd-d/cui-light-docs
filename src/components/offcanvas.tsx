import * as React from "react";
import { NavbarLink } from "./partials/navbarlink";
import { Link } from "react-router-dom";

export interface OffCanvasProps {
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class OffCanvas extends React.Component<OffCanvasProps, {}> {
    constructor(props: OffCanvasProps) {
        super(props);
    }
    render() {
        return <div className="cui-off-canvas" id="app-offcanvas">
            <div className="cui-off-canvas-container cui-section">
                <div className="cui-flex cui-middle cui-right">
                    <a href="#" className="cui-icon" cui-icon="close" cui-close="target:#app-offcanvas; action: .cui-offcanvas-default-right-out; timeout: 500"></a>
                </div>
                <ul className="cui-list cui-interactive cui-margin-top">
                    <li><NavbarLink url="/" name="Home" /></li>
                    <li><NavbarLink url="/overview" name="Oveview" /></li>
                    <li><NavbarLink class="cui-navbar-item" url="/start" name="Getting started" /></li>
                    <li><NavbarLink url="/docs" name="Documentation" /></li>
                </ul>
                <div className="cui-margin-top cui-flex cui-center">
                    <Link to="/download" className="cui-button cui-accent cui-rounded">Download</Link>
                </div>
            </div>
        </div>
    }
}