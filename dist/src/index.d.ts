import './styles/styles.scss';
import { CuiInit, CuiInstance } from "../node_modules/cui-light/dist/index";
import { Translations } from "./api/strings/DocsTranslations/DocsTranslations";
declare global {
    interface Window {
        cuiInit: CuiInit;
        $cui: CuiInstance;
        strings: Translations;
    }
}
