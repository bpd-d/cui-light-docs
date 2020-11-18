import './styles/styles.scss';
import { CuiInit, CuiInstance } from "../node_modules/cui-light/dist/index";
import { Translations } from "./api/strings/DocsTranslations/DocsTranslations";
export declare const CUI_DOCS_VER = "0.0.1";
declare global {
    interface Window {
        cuiInit: CuiInit;
        $cui: CuiInstance;
        strings: Translations;
    }
}
