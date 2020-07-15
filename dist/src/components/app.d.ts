import * as React from "react";
export interface AppProps {
}
export interface AppState {
    currentSite?: string;
}
export declare class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps);
    componentDidUpdate(): void;
    render(): JSX.Element;
}
