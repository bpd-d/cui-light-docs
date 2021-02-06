import * as React from "react";
import { is } from "bpd-toolkit/dist/esm/index";
import { useLocation } from "react-router-dom";
import { PageWithHeaderBase } from "../base/PageWithHeaderBase";
import { useHistoryWrapper } from "../hooks/historyWrapper";
import { useSearchParams } from "../hooks/params";
import { ClearableInput } from "../partials/forms/ClearableInput";
import { FindSearchResults } from "./functions";
import { SearchResultSection } from "./interfaces";
import { IsLoading } from "../base/IsLoading";
import { SearchResultComponent } from "./SearchResultComponent";
import { Debounce } from "../../core/debounce";
import { useDebounce } from "../hooks/debounce";

const PARAM_SEARCH = "search";

interface SearchComponentState {
    isLoading: boolean;
    filter: string;
    searchResults: SearchResultSection[] | undefined;
}

const searchInitialState: SearchComponentState = {
    isLoading: false,
    filter: "",
    searchResults: undefined
}



type SearchReducerAction =
    | { type: 'loading' }
    | { type: 'notloading' }
    | { type: 'filter', filter: string }
    | { type: 'set-results', filter: string, data: SearchResultSection[] | undefined };

function SearchReducer(state: SearchComponentState, action: SearchReducerAction): SearchComponentState {
    switch (action.type) {
        case "loading":
            return {
                ...state,
                isLoading: true,
            }
        case "notloading":
            return {
                ...state,
                isLoading: false,
            }
        case 'filter':
            return {
                ...state,
                filter: action.filter,
            }
        case "set-results":
            {
                return {
                    ...state,
                    filter: action.filter,
                    searchResults: action.data
                }
            }
        default:
            return state;
    }
}

export default function SearchPageComponent() {
    const [state, dispatch] = React.useReducer(SearchReducer, searchInitialState);

    const { pushHistory } = useHistoryWrapper();
    const location = useLocation();
    const { searchParams, search } = useSearchParams(location);
    const { debounceState, call, cancel } = useDebounce(updateFilter, 1000);// React.useRef<Debounce>(new Debounce(1000, updateFilter));


    function runFilter(filter: string) {
        if (is(filter)) {
            if (filter.length > 2) {
                dispatch({ type: "loading" })
                FindSearchResults(filter).then((result) => {
                    dispatch({ type: "notloading" })
                    dispatch({ type: 'set-results', filter: filter, data: result })
                })
            } else {
                dispatch({ type: "filter", filter: filter })
            }

        } else {
            dispatch({ type: 'set-results', filter: '', data: undefined })
        }
    }

    function onFilterUpdate(value: string) {
        call(value);
    }

    function updateFilter(value: string) {
        const params = new URLSearchParams();
        params.set(PARAM_SEARCH, value);
        pushHistory(location.pathname, params);
    }

    React.useEffect(() => {
        const filter = searchParams.get(PARAM_SEARCH);
        runFilter(filter);

        return () => {
            cancel();
        }
    }, [search]);

    return (<PageWithHeaderBase name="Search" description="Find content which you are interseted in">
        <div key="search-input" className="cui-container cui-large">
            <ClearableInput value={state.filter} onUpdate={onFilterUpdate} className="cui-width-1-1" />
            <span className={"cui-text-small cui-text-muted"}>{debounceState === 'idle' ? "" : "..."}</span>
        </div>
        <SearchPageContent isLoading={state.isLoading} results={state.searchResults} />
    </PageWithHeaderBase>);
}

export interface SearchPageContentProps {
    isLoading: boolean;
    results?: SearchResultSection[];
}

export function SearchPageContent(props: SearchPageContentProps) {
    if (props.isLoading) {
        return <IsLoading classes="cui-width-1-1" text="Searching..." />
    }
    if (!props.results) {
        return <span></span>;
    }
    return <SearchResultComponent results={props.results} />
}
