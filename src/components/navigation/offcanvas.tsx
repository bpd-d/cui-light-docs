import * as React from "react";
import { NavbarLink } from "../partials/navbarlink";
import { Link } from "react-router-dom";
import { ElementManager } from "../../../node_modules/cui-light-app/dist/index";
import { cuiComponents } from "../../statics/ComponentsDocs/base";
import { enumerate } from "../../utils/function";
import { CuiDocsNavigation } from "../docs/CuiDocsNavigation";
import { ROUTES } from "../../routes";

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
        const componentListItems: JSX.Element[] = []
        enumerate((key, value) => {
            if (value) {
                componentListItems.push(<li key={key}><NavbarLink url={value.uri} name={value.name} shouldClose={true} /></li>)
            }
        }, cuiComponents)
        return <div className="cui-off-canvas" id="app-offcanvas" cui-off-canvas="escClose: y; outClose: y">
            <div className="cui-off-canvas-container cui-card off-canvas-layout">
                <div className="cui-card-header cui-flex cui-middle cui-right">
                    <a href="#" className="cui-icon" cui-icon="close" cui-close=""></a>
                </div>
                <div className="off-canvas-content cui-card-body">
                    <div className="cui-width-1-1">
                        <h3 className="cui-h3">Menu</h3>
                        <ul className="cui-list cui-interactive cui-margin-top">
                            <li><NavbarLink url={ROUTES['home'].uri} name={ROUTES['home'].name} shouldClose={true} /></li>
                            <li><NavbarLink url={ROUTES['overview'].uri} name={ROUTES['overview'].name} shouldClose={true} /></li>
                            <li><NavbarLink url={ROUTES['docs'].uri} name={ROUTES['docs'].name} shouldClose={true} /></li>
                            <li><NavbarLink url={ROUTES['icons'].uri} name={ROUTES['icons'].name} shouldClose={true} /></li>
                            <li><NavbarLink url={ROUTES['about'].uri} name={ROUTES['about'].name} shouldClose={true} /></li>
                        </ul>
                        <h3 className="cui-h3">Components</h3>
                        <CuiDocsNavigation shouldClose={true} sort={true} />
                    </div>
                </div>
                <div className="cui-flex-center cui-card-footer">
                    <Link to={ROUTES['download'].uri} className="cui-button cui-accent cui-rounded">{ROUTES['download'].name}</Link>
                </div>
            </div>
        </div>
    }
}