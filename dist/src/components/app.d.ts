import * as React from "react";
import { RecentState } from "../api/state/state";
import { RecentItem } from "../api/services/models";
export interface AppProps {
}
export interface AppState {
    currentSite?: string;
    recents: RecentItem[];
    recent: RecentItem;
    isReady: boolean;
}
export declare class App extends React.Component<AppProps, AppState> {
    subscribctionId: string;
    constructor(props: AppProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onGlobalStateUpdate(state: RecentState): void;
    shouldDisplayRecent(): string;
    render(): JSX.Element;
}
