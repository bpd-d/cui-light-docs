import * as React from 'react'
import { Link } from 'react-router-dom';
import { is } from '../../../node_modules/bpd-toolkit/dist/esm/index';
import { Debounce } from '../../core/debounce';
import { capitalize } from '../../utils/function';
import { ClearableInput } from '../partials/forms/ClearableInput'
import { FindSearchResults } from './functions';
import { SearchResultSection } from './interfaces';
import { NoResults } from './NoResults';
import { SearchResultComponent } from './SearchResultComponent';

export interface SearchAreaProps {
    parentId: string;
}

export function SearchArea(props: SearchAreaProps) {
    const [state, setState] = React.useState<SearchResultSection[]>([]);
    const [debounce, setDebounce] = React.useState<Debounce>(new Debounce(700, runFilter));
    const [disabled, setDisabled] = React.useState<boolean>(false);
    const [filter, setFilter] = React.useState<string>("");

    function onClosed() {
        setState([]);
        setDisabled(false)
        setFilter("")
    }

    function onValueUpdate(value: string) {
        debounce.call(value)
    }

    function runFilter(filter: string) {
        setFilter(filter)
        if (is(filter)) {
            setDisabled(true)
            FindSearchResults(filter).then((result) => {
                setDisabled(false)
                setState(result);
            })
        } else {
            setState([])
        }
    }

    React.useEffect(() => {
        const closableElement = window.$cui.get("#" + props.parentId);
        let id: string[] = null;
        if (is(closableElement)) {
            id = closableElement.on("closed", onClosed);
        }

        return () => {
            if (is(id)) {
                closableElement.detach("closed", id[0]);
            }
            debounce.cancel();
        }
    }, [state.length])

    return (<>
        <ClearableInput value={filter} onUpdate={onValueUpdate} alwaysShow={true} filter="Type search text" className="cui-width-1-1" disabled={disabled} />
        {
            disabled ? <div className="cui-flex-center cui-padding">
                <span className="cui-spinner" data-spinner="spinner: cricle">Searching</span>
            </div> : state.length > 0 ? <SearchResultComponent results={state} /> : <NoResults filter={filter} />
        }
    </>);
}


