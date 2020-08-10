import './styles/styles.scss';
import { CuiInit, CuiInstance } from "../node_modules/cui-light/dist/index";
declare global {
    interface Window {
        cuiInit: CuiInit;
        $cui: CuiInstance;
    }
}
