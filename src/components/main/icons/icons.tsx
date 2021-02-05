import * as React from "react";
import { CuiIconsComponentHeader } from "./header";
import { CuiIconsGroupedComponent } from "./group";
import { CuiGroup, group } from "../../../utils/groups";
import { iconsData } from "../../../statics/icons";
import { PageWithHeaderBase } from "../../../components/base/PageWithHeaderBase";
import { IsLoading } from "../../../components/base/IsLoading";
import { useHistory, useLocation } from "react-router-dom";
import { useSearchParams } from "../../../components/hooks/params";

export const CATEGORY_ALL = 'all';

const PARAM_FILTER = 'filter';
const PARAM_CATEGORY = 'category';

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

export default function IconsComponent(props: IconsProps) {
    const [state, setState] = React.useState<IconComponentState>({
        filter: { category: CATEGORY_ALL, filter: "" },
        grouped: {}
    });

    const categories = React.useRef<string[]>([]);

    const [isLoading, setIsLoading] = React.useState(false);

    const location = useLocation();
    const history = useHistory();
    const { params, search } = useSearchParams(location);

    function onFilterUpdate(data: CuiIconFilterData) {
        const params = new URLSearchParams();
        params.set(PARAM_FILTER, data.filter);
        params.set(PARAM_CATEGORY, data.category);

        history.push({
            pathname: location.pathname,
            search: params.toString()
        })
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

    function getFilterParams(queryString: string): CuiIconFilterData {
        // const searchParams = new URLSearchParams(queryString);
        const filter = params.get(PARAM_FILTER);
        const cat = params.get(PARAM_CATEGORY);
        return {
            filter: filter ?? "",
            category: cat && categories.current.includes(cat) ? cat : CATEGORY_ALL
        }
    }

    React.useEffect(() => {
        setIsLoading(true);

        if (categories.current.length === 0) {
            categories.current = iconsData.reduce<string[]>(getCategory, [])
        }

        const filterData = getFilterParams(location.search);

        prepareGroup(filterData).then((group) => {
            setState({
                ...state,
                filter: filterData,
                grouped: group
            })
            setIsLoading(false)
        });

    }, [search])

    return <PageWithHeaderBase name="Icons" description="cUI icons pack">
        <CuiIconsComponentHeader categories={categories.current} filter={state.filter} onUpdate={onFilterUpdate} />
        {isLoading ? <IsLoading /> :
            <CuiIconsGroupedComponent icons={state.grouped} />
        }
    </PageWithHeaderBase>
}