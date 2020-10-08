import { BpdStateManager } from "../../../node_modules/bpd-state-manager/dist/esm/index";
import { StatesType, ActionsType, STATE_RECENT, RECENT_ACTION_ADD, RECENT_ACTION_LOAD } from "./state";

export function addRecentItem(name: string, uri: string) {
    BpdStateManager.performStateAction<StatesType, ActionsType>(STATE_RECENT, {
        action: RECENT_ACTION_ADD,
        data: {
            name: name,
            url: uri
        }
    })
}

export function loadRecentsFromService() {
    BpdStateManager.performStateAction<StatesType, ActionsType>(STATE_RECENT, {
        action: RECENT_ACTION_LOAD
    })
}