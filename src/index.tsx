import * as React from "react";
import * as ReactDOM from "react-dom";
import './styles/styles.scss';
//import "../node_modules/cui-light/dist/cui-light.index";
import { App } from "./components/app";
import { CuiInit, CuiInitData, CuiInitializer, CuiSetupInit } from "../node_modules/cui-light/dist/index";

import { CuiIconsPack } from '../node_modules/bpd-cui-icons/index'
declare global {
    interface Window {
        cuiInit: CuiInit;
    }
}
let rootElement = document.getElementById('root');
let setup = new CuiSetupInit();
setup.logLevel = 'debug';
setup.root = rootElement;
let cuiSetup: CuiInitData = {
    setup: setup,
    icons: {
        ...CuiIconsPack,
        app_icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" width=\"20\" height=\"20\"><path d=\"m 13.829877,7.3261376 v 3.5862634 c 0,1.898668 -1.394143,3.413737 -3.141268,3.413737 v 0 c -1.74713,0 -3.1412691,-1.515069 -3.1412691,-3.413737 V 7.3261376\"></path><path d=\"M 15.799079,7.3397871 V 14.312488\"></path><path d=\"M 17.407462,16.837538 A 8.9372006,9.0766956 0 0 1 11.529739,19.076696 8.9372006,9.0766956 0 0 1 2.5925382,10 8.9372006,9.0766956 0 0 1 11.529739,0.92330405 8.9372006,9.0766956 0 0 1 17.373311,3.1323384\"></path></svg>",
        app_icon_large: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\" width=\"200\" height=\"200\"><path d=\"m 142.88274,58.748866 v 53.897944 c 0,20.28939 -15.51763,36.47957 -34.96415,36.47957 v 0 c -19.446558,0 -34.964135,-16.19018 -34.964135,-36.47957 V 58.748866\"></path><path d=\"m 163.79885,58.76439 v 89.36345\"></path><path d=\"M 160.06679,170.81083 A 92.94183,93.999992 0 0 1 98.941821,193.99999 92.94183,93.999992 0 0 1 6,99.999995 92.94183,93.999992 0 0 1 98.941821,6 92.94183,93.999992 0 0 1 159.71165,28.877181\"></path></svg>"
    }
};

ReactDOM.render(<App />, rootElement);
window.cuiInit.init(cuiSetup).then((result) => {
    console.log(result)
});

