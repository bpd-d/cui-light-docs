import * as React from 'react'
import { Link } from 'react-router-dom';
import { enumerateObject, is } from '../../../node_modules/bpd-toolkit/dist/esm/index';
import { Debounce } from '../../core/debounce';
import { cuiComponents, CuiDocsComponentDef } from '../../statics/ComponentsDocs/base';
import { iconsData } from '../../statics/icons';
import { capitalize } from '../../utils/function';
import { IconElementData } from '../main/icons/icons';
import { ClearableInput } from '../partials/forms/ClearableInput'

export interface SearchResult {
    name: string;
    detail: string;
}

export interface SearchResultSection {
    name: string;
    results: SearchResult[];
}

export function SearchArea() {
    const [state, setState] = React.useState<SearchResultSection[]>([]);
    const [debounce, setDebounce] = React.useState<Debounce>(new Debounce(700, runFilter));
    const [disabled, setDisabled] = React.useState<boolean>(false);
    function onValueUpdate(value: string) {
        debounce.call(value)
    }

    function getIcons(filter: string) {
        return iconsData.reduce<SearchResult[]>((results: SearchResult[], current: IconElementData) => {
            if (current.code.match(filter)) {
                results.push({
                    name: current.name,
                    detail: current.code
                })
            }
            return results;
        }, [])
    }

    function getComponents(filter: string) {
        let result: SearchResult[] = [];
        enumerateObject(cuiComponents, (key: string, value: CuiDocsComponentDef) => {
            if (key.match(filter.toLowerCase())) {
                result.push({ name: key, detail: value.uri })
            }
        });
        return result;
    }

    function runFilter(filter: string) {
        setDisabled(true)
        if (is(filter)) {
            let matchComponents = getComponents(filter);
            let matchIcons = getIcons(filter);
            let newState = [];
            if (matchComponents.length > 0) {
                newState.push({
                    name: "Components",
                    results: matchComponents
                })
            }
            if (matchIcons.length > 0) {

                newState.push({
                    name: "Icons",
                    results: matchIcons
                })
            }
            setState(newState)
        } else {
            setState([])
        }
        setDisabled(false);
    }

    React.useEffect(() => {
        //setDebounce(new Debounce(1000, runFilter))
        return () => {
            debounce.cancel();
        }
    }, [state.length])

    return (<>
        <ClearableInput value="" onUpdate={onValueUpdate} alwaysShow={true} filter="Search" className="cui-width-1-1" disabled={disabled} />
        <div className="cui-flex-center cui-padding">
            <span className="cui-spinner" data-spinner="spinner: cricle"></span>
        </div>
        <div className="cui-flex-grid cui-child-width-1-1 cui-child-width-1-2--m">
            {state.length > 0 && state.map(s => {
                return <SearchResultView key={s.name} name={s.name} results={s.results} />
            })}
        </div>
    </>);
}


export function SearchResultView(result: SearchResultSection) {
    return (<div>
        <h2 className="cui-h2">{result.name}</h2>
        <ul className="cui-list">
            {
                result.results.map(res => {
                    return (<li key={res.name}><Link className="cui-link" to={res.detail}>{capitalize(res.name)}</Link></li>)
                })
            }
        </ul>
    </div>);
}
