import * as React from "react";
import { NavLink } from "react-router-dom";

export interface NavbarLinkProps {
    url: string;
    name: string;
    class?: string;
}

export class NavbarLink extends React.Component<NavbarLinkProps, {}> {
    constructor(props: NavbarLinkProps) {
        super(props);
    }
    render() {
        return <NavLink exact activeClassName="cui-active" className={this.props.class} to={this.props.url}>{this.props.name}</NavLink>;
    }
}