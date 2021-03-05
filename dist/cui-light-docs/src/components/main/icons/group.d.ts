/// <reference types="react" />
import { IconElementData } from "./icons";
import { CuiGroupItem, CuiGroup } from "../../../utils/groups";
export interface CuiIconsGroupedComponentProps {
    icons: CuiGroup<IconElementData>;
}
export interface CuiIconsGroupComponentProps {
    group: CuiGroupItem<IconElementData>;
}
export declare function CuiIconsGroupComponent(props: CuiIconsGroupComponentProps): JSX.Element;
export declare function CuiIconsGroupedComponent(props: CuiIconsGroupedComponentProps): JSX.Element;
