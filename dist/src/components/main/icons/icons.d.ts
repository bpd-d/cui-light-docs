import * as React from "react";
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
    categories: string[];
    filter: CuiIconFilterData;
}
export interface CuiIconFilterData {
    filter: string;
    category: string;
}
export declare class IconsComponent extends React.Component<IconsProps, IconComponentState> {
    constructor(props: IconsProps);
    onFilterUpdate(data: CuiIconFilterData): void;
    getCategory(result: string[], current: IconElementData): string[];
    isCategoryMatching(item: IconElementData, category: string): boolean;
    isFilterMatching(item: IconElementData, filter: string): boolean;
    render(): JSX.Element;
}
