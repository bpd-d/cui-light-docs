/// <reference types="react" />
import { CuiIconFilterData } from "./icons";
export interface CuiIconsComponentHeaderProps {
    categories: string[];
    filter: CuiIconFilterData;
    onUpdate?: (data: CuiIconFilterData) => void;
}
export declare function CuiIconsComponentHeader(props: CuiIconsComponentHeaderProps): JSX.Element;
