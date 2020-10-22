import * as React from "react";
import * as ReactDOM from "react-dom";
import './styles/styles.scss';
import { App } from "./components/app";
import { CuiInit, CuiInitData, CuiSetupInit, CuiInstance } from "../node_modules/cui-light/dist/index";
import { BpdStateManager } from '../node_modules/bpd-state-manager/dist/esm/index';
import { CuiIconsPack } from '../node_modules/bpd-cui-icons/index';
import { Translations } from "./api/strings/DocsTranslations/DocsTranslations";
import { ActionsType, RecentsMutationHandler, StatesType, STATE_RECENT } from "./api/state/state";
import { ViewRecentStorageService } from "./api/services/ViewRecents";
import { BpdStateManagerConfig } from "../node_modules/bpd-state-manager/dist/esm/interfaces";
import { StateErrorHandler } from "./api/state/handlers";

declare global {
    interface Window {
        cuiInit: CuiInit;
        $cui: CuiInstance;
        strings: Translations;
    }
}

let app_icons = require("../icons/dist/all.json");
let rootElement = document.getElementById('root');
let setup = new CuiSetupInit();
setup.logLevel = 'debug';
setup.root = rootElement;
setup.busSetup = [
    {
        name: "MoveQueue",
        eventsDef: ["global_move"],
        handler: 'tasked',
        priority: 0
    },
    {
        name: "InteractQueue",
        eventsDef: ["open", "close", "switch"],
        handler: 'tasked',
        priority: 0
    },
    {
        name: "ResponsesQueue",
        eventsDef: ["opened", "closed", "switched", "resize", "offset"],
        handler: 'tasked',
        priority: 1
    },
    {
        name: "GlobalSimple",
        eventsDef: ["keydown", "scroll", "intersection", "windowclick"],
        handler: 'tasked',
        priority: 2
    },
]
let cuiSetup: CuiInitData = {
    setup: setup,
    icons: {
        ...CuiIconsPack,
        ...app_icons
    }
};

window.strings = new Translations({});
let service = new ViewRecentStorageService();
let mutatationHandler = new RecentsMutationHandler(service);
let stateManagerConfig: BpdStateManagerConfig<StatesType> = {
    onError: StateErrorHandler
}
BpdStateManager.createStateManager<StatesType, ActionsType>(stateManagerConfig);
BpdStateManager.createState<StatesType, ActionsType>(STATE_RECENT, {
    recent: undefined,
    recents: []
}, mutatationHandler.mutate.bind(mutatationHandler))
ReactDOM.render(<App />, rootElement);
window.cuiInit.init(cuiSetup).then((result) => {
    console.log(result)
});

