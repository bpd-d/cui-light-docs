import { BpdStateAction } from '../../../node_modules/bpd-state-manager/dist/esm/interfaces';
import { RecentItem } from "../services/models";
import { IViewRecentsService } from "../services/ViewRecents";

export const STATE_RECENT = "RECENTS";
export const RECENT_ACTION_ADD = "ADD_RECENT";
export const RECENT_ACTION_LOAD = "LOAD_RECENTS";
export const RECENT_CLEAR_RECENTS = "CLEAR_RECENTS";

export type StatesType = RecentState;
export type ActionsType = RecentItem;

export interface RecentState {
    recents: RecentItem[];
    recent: RecentItem;
}

export class RecentsMutationHandler {
    #service: IViewRecentsService;
    #maxRecentCount: number;
    constructor(service: IViewRecentsService) {
        this.#service = service;
        this.#maxRecentCount = 5;
    }

    mutate(state: RecentState, action: BpdStateAction<ActionsType>): RecentState {
        if (!action) {
            return state;
        }
        switch (action.action) {
            case RECENT_ACTION_ADD:
                let arr = state.recents;
                if (arr.length >= 5) {
                    arr.shift();
                }
                if (arr.findIndex(item => {
                    return item.name === action.data.name;
                }) < 0) {
                    state = {
                        recent: action.data,
                        recents: [...arr, action.data]
                    }
                }

                this.#service.setRecents(state.recents);
                break;
            case RECENT_ACTION_LOAD:
                if (!state.recents || state.recents.length === 0) {
                    let fromStorage = this.#service.getAllRecents();
                    let last = fromStorage ? fromStorage[fromStorage.length - 1] : undefined;
                    state = {
                        recents: fromStorage ?? [],
                        recent: last
                    }
                }

                break;
            case RECENT_CLEAR_RECENTS:
                state = {
                    recent: undefined,
                    recents: []
                }
                this.#service.clearRecents();
                break;
        }
        return state;
    }
}