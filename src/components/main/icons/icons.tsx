import * as React from "react";
import { CuiIconsComponentHeader } from "./header";
import { CuiIconsGroupedComponent } from "./group";
import { CuiGroup, group } from "../../../utils/groups";
import { iconsData } from "../../../statics/icons";
import { PageWithHeaderBase } from "../../../components/base/PageWithHeaderBase";
import { IsLoading } from "../../../components/base/IsLoading";

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
    filter: CuiIconFilterData;
    grouped: CuiGroup<IconElementData>;
}

export interface CuiIconFilterData {
    filter: string;
    category: string;
}

export function IconsComponent(props: IconsProps) {
    const [state, setState] = React.useState<IconComponentState>({
        filter: { category: CATEGORY_ALL, filter: "" },
        grouped: {}
    });

    const categories = React.useRef<string[]>([]);

    const [isLoading, setIsLoading] = React.useState(false);

    function onFilterUpdate(data: CuiIconFilterData) {
        setState({
            ...state,
            filter: data
        })
    }

    function getCategory(result: string[], current: IconElementData) {
        if (!result.find(x => x == current.category)) {
            result.push(current.category);
        }
        return result;
    }

    function isCategoryMatching(item: IconElementData, category: string) {
        return !category || category === CATEGORY_ALL ? true : item.category === category
    }

    function isFilterMatching(item: IconElementData, filter: string) {
        return !filter || filter === '' ? true : item.code.includes(filter.toLowerCase());
    }

    function prepareGroup(data: CuiIconFilterData): Promise<CuiGroup<IconElementData>> {
        return new Promise((resolve, reject) => {
            resolve(group((item: IconElementData) => {
                return item.category;
            }, iconsData, (item: IconElementData) => {
                return isFilterMatching(item, data.filter) && isCategoryMatching(item, data.category);
            }));
        });
    }


    React.useEffect(() => {
        setIsLoading(true);
        if (categories.current.length === 0) {
            categories.current = iconsData.reduce<string[]>(getCategory, [])
        }

        prepareGroup(state.filter).then((group) => {
            setState({
                ...state,
                grouped: group
            })
            setIsLoading(false)
        });

    }, [state.filter])

    return <PageWithHeaderBase name="Icons" description="cUI icons pack">
        <CuiIconsComponentHeader categories={categories.current} filter={state.filter} onUpdate={onFilterUpdate} />
        {isLoading ? <IsLoading /> :
            <CuiIconsGroupedComponent icons={state.grouped} />
        }
    </PageWithHeaderBase>
}