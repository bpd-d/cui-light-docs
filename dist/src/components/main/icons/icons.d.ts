/// <reference types="react" />
import { CuiGroup } from "../../../utils/groups";
export declare const CATEGORY_ALL = "all";
export interface GroupedIconsData {
    [id: string]: IconsGroup;
}
export interface IconsGroup {
    name: string;
    icons: IconElementData[];
}
export interface IconsProps {
    site?: string;
}
export interface IconElementData {
    name: string;
    code: string;
    category: string;
}
export interface IconComponentState {
    filter: CuiIconFilterData;
    grouped: CuiGroup<IconElementData>;
}
export interface CuiIconFilterData {
    filter: string;
    category: string;
}
export default function IconsComponent(props: IconsProps): JSX.Element;
