import * as React from 'react'
import { Link } from 'react-router-dom';
import { capitalize, copyText } from '../../utils/function';
import { SearchResult, SearchResultSection } from './interfaces';

export interface ListItemProp {
    result: SearchResult;
}

export function SearchResultViewItem(result: SearchResultSection) {
    return (<div>
        <div className="cui-card">
            <div className="cui-card-header">
                <span className="cui-card-title">{result.name}</span>
            </div>
            <div className="cui-card-body">
                <ul className="cui-list">
                    {
                        result.results.map(res => {
                            return (<li className="search-result-list-item" key={res.name}>{result.name.match("con") ? <SearchResulIconItem result={res} /> : <SearchResultLinkItem result={res} />}</li>)
                        })
                    }
                </ul>
            </div>
        </div>
    </div>);
}

export function SearchResultLinkItem(prop: ListItemProp) {
    return (<Link className="cui-link" to={prop.result.detail} cui-close="">{capitalize(prop.result.name)}</Link>);
}

export function SearchResulIconItem(prop: ListItemProp) {
    function onClick() {
        copyText(prop.result.detail).then((value) => {
            window.$cui.emit("toast", "~toast-plugin", `${value} copied`);
        });
    }
    return (<a className="cui-icon cui-icon-margin" cui-icon={prop.result.detail} cui-close="" onClick={onClick}>{prop.result.name}</a>);
}