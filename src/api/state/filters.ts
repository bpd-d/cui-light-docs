import { RecentItem } from "../services/models";
import { RecentState } from "./state";

export function getLastRecentItem(state: RecentState): RecentItem {
    return state.recent;
}

export function getRecentItems(state: RecentState): RecentItem[] {
    return state.recents;
}