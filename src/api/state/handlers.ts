import { OnChangeEventType } from "../../../node_modules/bpd-state-manager/dist/esm/interfaces";

export function StateErrorHandler(stateId: string, type: OnChangeEventType, error: Error, detail: string): void {
    console.error(`An error occured in state: [${stateId}], details: ${detail}`)
    console.error(error);

}