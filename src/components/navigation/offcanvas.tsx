import * as React from "react";
import { NavbarLink } from "../partials/navbarlink";
import { Link } from "react-router-dom";
import { CuiDocsNavigation } from "../docs/CuiDocsNavigation";
import { ROUTES } from "../../routes";
import { useHistoryWrapper } from "../hooks/historyWrapper";
import { is } from "bpd-toolkit/dist/esm/index";
import { DOCTYPE_COMPONENTS, DOCTYPE_PLUGINS } from "../../core/imports/components";

export interface OffCanvasProps {
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.

export function OffCanvas() {
    const [search, setSearch] = React.useState("");
    const { pushHistory } = useHistoryWrapper();

    function onSearchInputUpdate(event: any) {
        setSearch(event.target.value)
    }

    function onSubmit(e: any) {
        e.preventDefault();
        GotoSearchPage();
    }

    function GotoSearchPage() {
        if (is(search)) {
            const params = new URLSearchParams();
            params.set("search", search);
            setSearch("")
            let offcanvas = window.$cui.get("#app-offcanvas");
            offcanvas.emit('close');
            pushHistory(ROUTES.search.uri, params);

        }
    }


    return <div className="cui-off-canvas" id="app-offcanvas" cui-off-canvas="escClose: y; outClose: y">
        <div className="cui-off-canvas-container cui-card off-canvas-layout cui-flex cui-flex-direction-column cui-nowrap">
            <div className="cui-card-header cui-flex cui-middle cui-between cui-flex-shrink cui-width-1-1">
                <form action="" onSubmit={onSubmit}>
                    <div className="cui-input-mix">
                        <input type="text" className="cui-input" placeholder="Search" onChange={onSearchInputUpdate} onSubmit={onSubmit} />
                        <a className="cui-icon" cui-icon="search" onClick={GotoSearchPage}></a>
                    </div>
                </form>
                <a href="#" className="cui-icon" cui-icon="close" cui-close=""></a>
            </div>
            <div className="cui-card-body cui-flex-grow cui-overflow-hidden cui-width-1-1">
                <div className="cui-width-1-1 cui-height-1-1 cui-overflow-y-auto">
                    <OffcanvasHeader text="Menu" />
                    <ul className="cui-list cui-interactive cui-width-1-1">
                        <li><NavbarLink url={ROUTES['home'].uri} name={ROUTES['home'].name} shouldClose={true} /></li>
                        <li><NavbarLink url={ROUTES['overview'].uri} name={ROUTES['overview'].name} shouldClose={true} /></li>
                        <li><NavbarLink url={ROUTES['docs'].uri} name={ROUTES['docs'].name} shouldClose={true} /></li>
                        <li><NavbarLink url={ROUTES['icons'].uri} name={ROUTES['icons'].name} shouldClose={true} /></li>
                        <li><NavbarLink url={ROUTES['about'].uri} name={ROUTES['about'].name} shouldClose={true} /></li>
                    </ul>
                    <OffcanvasHeader text="Components" />
                    <CuiDocsNavigation shouldClose={true} sort={true} type={DOCTYPE_COMPONENTS} />
                    <OffcanvasHeader text="Plugins" />
                    <CuiDocsNavigation shouldClose={true} sort={true} type={DOCTYPE_PLUGINS} />

                </div>
            </div>
            <div className="cui-flex-center cui-card-footer cui-flex-auto cui-width-1-1">
                <Link to={ROUTES['download'].uri} className="cui-button cui-accent cui-rounded">{ROUTES['download'].name}</Link>
            </div>
        </div>
    </div>
}

export interface OffcanvasHeaderProps {
    text: string
}
export function OffcanvasHeader(props: OffcanvasHeaderProps) {
    return <h3 className="cui-h3 cui-sticky cui-background-default cui-layer-top">{props.text}</h3>;
}
