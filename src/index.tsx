import * as React from "react";
import * as ReactDOM from "react-dom";
import './styles/styles.scss';
import { App } from "./components/app";
import { BpdStateManager } from 'bpd-state-manager/dist/esm/index';
import { BpdStateManagerConfig } from "bpd-state-manager/dist/esm/interfaces";
import { CuiIconsPack } from 'bpd-cui-icons/esm/index';
import { Translations } from "./api/strings/DocsTranslations/DocsTranslations";
import { ActionsType, RecentsMutationHandler, StatesType, STATE_RECENT } from "./api/state/state";
import { ViewRecentStorageService } from "./api/services/ViewRecents";
import { StateErrorHandler } from "./api/state/handlers";
import { CuiInitData, CuiInstance } from "node_modules/cui-light/dist/index";
import { CuiSetupInit } from "cui-light-core/dist/esm/models/setup";

export const CUI_DOCS_VER = "0.0.1";

declare global {
    interface Window {
        //cuiInit: CuiInit;
        $cui: CuiInstance;
        strings: Translations;
    }
}

const preload = document.getElementById("preload");
const loadingText = document.getElementById("loading-text");
const HIDDEN_CLS = 'hidden';




function load(icons: any): boolean {
    loadingText.textContent = "Initializing..."
    let app_icons = icons;
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
        preload.classList.add("fade-out");
        setTimeout(() => {
            requestAnimationFrame(() => {
                preload.remove();//classList.add(HIDDEN_CLS);
                rootElement.classList.remove(HIDDEN_CLS);
            })
        }, 100);

    });
    return true;
}

Promise.all([
    fetch("/icons/dist/all.json").then((response) => response.json())
]).then((results) => {
    load(results[0])
}).catch((e) => {
    loadingText.textContent = "App cannot be loaded, an error occured";
    console.error(e);
})

// setTimeout(() => {
//     load();
// }, 500);
