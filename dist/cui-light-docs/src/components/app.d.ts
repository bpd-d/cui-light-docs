/// <reference types="react" />
import { RecentItem } from "../api/services/models";
export interface AppProps {
}
export interface AppState {
    currentSite?: string;
    recents: RecentItem[];
    recent: RecentItem;
    isReady: boolean;
}
export declare function App(): JSX.Element;
