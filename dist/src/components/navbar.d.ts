/// <reference types="react" />
export interface NavbarState {
    currentSite: string;
}
export interface NavbarProps {
    site?: string;
    location?: any;
}
export declare function Navbar(props: NavbarProps): JSX.Element;
