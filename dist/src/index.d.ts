import './styles/styles.scss';
import { Translations } from "./api/strings/DocsTranslations/DocsTranslations";
import { CuiInstance } from "node_modules/cui-light/dist/index";
export declare const CUI_DOCS_VER = "0.0.1";
declare global {
    interface Window {
        $cui: CuiInstance;
        strings: Translations;
    }
}
