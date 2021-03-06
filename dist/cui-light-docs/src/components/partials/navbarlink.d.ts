import * as React from "react";
export interface NavbarLinkProps {
    url: string;
    name: string;
    shouldClose?: boolean;
    class?: string;
}
export declare class NavbarLink extends React.Component<NavbarLinkProps, {}> {
    constructor(props: NavbarLinkProps);
    onClick(): void;
    render(): JSX.Element;
}
