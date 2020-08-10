import * as React from "react";
import { NavbarLink } from "./partials/navbarlink";
import { Link } from "react-router-dom";
import { ElementManager } from "../../node_modules/cui-light/dist/index";

export interface OffCanvasProps {
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class OffCanvas extends React.Component<OffCanvasProps, {}> {
    offcanvas: ElementManager;
    constructor(props: OffCanvasProps) {
        super(props);

    }

    render() {
        return <div className="cui-off-canvas" id="app-offcanvas" cui-off-canvas="escClose: y; outClose: y">
            <div className="cui-off-canvas-container cui-section">
                <div className="cui-flex cui-middle cui-right">
                    <a href="#" className="cui-icon" cui-icon="close" cui-close=""></a>
                </div>
                <div className="cui-flex cui-middle" style={{ height: "80vh" }}>
                    <div className="cui-width-1-1">
                        <ul className="cui-list cui-interactive cui-margin-top">
                            <li><NavbarLink url="/" name="Home" /></li>
                            <li><NavbarLink url="/overview" name="Oveview" /></li>
                            <li><NavbarLink url="/start" name="Getting started" /></li>
                            <li><NavbarLink url="/docs" name="Documentation" /></li>
                            <li><NavbarLink url="/icon" name="Icons" /></li>
                        </ul>
                        <div className="cui-margin-top cui-flex cui-center">
                            <Link to="/download" className="cui-button cui-accent cui-rounded">Download</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}