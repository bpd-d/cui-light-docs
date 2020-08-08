/// <reference types="react" />
import { CuiIconFilterData } from "../../main/icons";
export interface CuiIconsComponentHeaderProps {
    categories: string[];
    filter: CuiIconFilterData;
    onUpdate?: (data: CuiIconFilterData) => void;
}
export declare function CuiIconsComponentHeader(props: CuiIconsComponentHeaderProps): JSX.Element;
