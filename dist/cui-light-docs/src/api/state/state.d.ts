import { BpdStateAction } from '../../../node_modules/bpd-state-manager/dist/esm/interfaces';
import { RecentItem } from "../services/models";
import { IViewRecentsService } from "../services/ViewRecents";
export declare const STATE_RECENT = "RECENTS";
export declare const RECENT_ACTION_ADD = "ADD_RECENT";
export declare const RECENT_ACTION_LOAD = "LOAD_RECENTS";
export declare const RECENT_CLEAR_RECENTS = "CLEAR_RECENTS";
export declare type StatesType = RecentState;
export declare type ActionsType = RecentItem;
export interface RecentState {
    recents: RecentItem[];
    recent: RecentItem;
}
export declare class RecentsMutationHandler {
    #private;
    constructor(service: IViewRecentsService);
    mutate(state: RecentState, action: BpdStateAction<ActionsType>): RecentState;
}
