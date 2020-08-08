import * as React from "react";
export interface NavbarLinkProps {
    url: string;
    name: string;
    class?: string;
}
export declare class NavbarLink extends React.Component<NavbarLinkProps, {}> {
    constructor(props: NavbarLinkProps);
    render(): JSX.Element;
}
