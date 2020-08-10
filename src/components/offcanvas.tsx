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
            <div className="cui-off-canvas-container cui-section off-canvas-layout">
                <div className="cui-flex cui-middle cui-right off-canvas-header">
                    <a href="#" className="cui-icon" cui-icon="close" cui-close=""></a>
                </div>
                <div className="off-canvas-content">

                    <div className="cui-width-1-1">
                        <ul className="cui-list cui-interactive cui-margin-top">
                            <li><NavbarLink url="/" name="Home" /></li>
                            <li><NavbarLink url="/overview" name="Overview" /></li>
                            <li><NavbarLink url="/icon" name="Icons" /></li>
                        </ul>
                        <h3 className="cui-h3">Getting started</h3>
                        <ul className="cui-list cui-interactive cui-margin-top">
                            <li><NavbarLink url="/start" name="Begin" /></li>
                            <li><NavbarLink url="/start/css" name="Styles" /></li>
                            <li><NavbarLink url="/start/js" name="Javascript" /></li>
                        </ul>
                        <h3 className="cui-h3">Documentation</h3>
                        <ul className="cui-list cui-interactive cui-margin-top">
                            <li><NavbarLink url="/docs" name="Begin" /></li>
                            <li><NavbarLink url="/docs/section" name="Section" /></li>
                            <li><NavbarLink url="/docs/container" name="Container" /></li>
                            <li><NavbarLink url="/docs/button" name="Button" /></li>
                            <li><NavbarLink url="/docs/card" name="Card" /></li>
                        </ul>
                    </div>
                </div>
                <div className="cui-flex-center off-canvas-footer">
                    <Link to="/download" className="cui-button cui-accent cui-rounded">Download</Link>
                </div>

            </div>
        </div>
    }
}