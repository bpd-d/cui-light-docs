import './styles/styles.scss';
import { CuiInit } from "../node_modules/cui-light/dist/index";
declare global {
    interface Window {
        cuiInit: CuiInit;
        $cui: any;
    }
}
