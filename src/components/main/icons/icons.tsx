import * as React from "react";
import { CuiIconsComponentHeader } from "./header";
import { CuiIconsGroupedComponent } from "./group";
import { CuiGroup, group } from "../../../utils/groups";
import { iconsData } from "../../../statics/icons";
import { PageHeader } from "../../partials/components/PageHeader";
export const CATEGORY_ALL = 'all';
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

export class IconsComponent extends React.Component<IconsProps, IconComponentState> {

    constructor(props: IconsProps) {
        super(props);
        const categories: string[] = [CATEGORY_ALL, ...iconsData.reduce<string[]>(this.getCategory, [])]
        this.state = {
            categories: categories,
            filter: { category: CATEGORY_ALL, filter: "" }
        }
        this.onFilterUpdate = this.onFilterUpdate.bind(this);
    }

    onFilterUpdate(data: CuiIconFilterData) {
        this.setState({
            ...this.state,
            filter: data
        })
    }

    getCategory(result: string[], current: IconElementData) {
        if (!result.find(x => x == current.category)) {
            result.push(current.category);
        }
        return result;
    }

    isCategoryMatching(item: IconElementData, category: string) {
        return !category || category === CATEGORY_ALL ? true : item.category === category
    }

    isFilterMatching(item: IconElementData, filter: string) {
        return !filter || filter === '' ? true : item.code.includes(filter.toLowerCase());
    }

    render() {
        //  const filterIcons = this.state.filter.filter ? this.icons.filter(icon => { return icon.code.includes(this.state.filter.filter.toLowerCase()) }) : this.icons;
        const groupedIcons: CuiGroup<IconElementData> = group((item: IconElementData) => {
            return item.category;
        }, iconsData, (item: IconElementData) => {
            return this.isFilterMatching(item, this.state.filter.filter) && this.isCategoryMatching(item, this.state.filter.category);
        });
        return <div className="">
            <PageHeader title="Icons" description="cUI icons pack" />
            <div className="limited-content-width cui-section cui-margin-auto">
                <CuiIconsComponentHeader categories={this.state.categories} filter={this.state.filter} onUpdate={this.onFilterUpdate} />
                <CuiIconsGroupedComponent icons={groupedIcons} />
            </div>
        </div>;
    }
}