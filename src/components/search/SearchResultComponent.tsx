import * as React from 'react'
import { SearchResultSection } from './interfaces';
import { SearchResultViewItem } from './SearchResultViewItem';

export interface SearchResultComponentProps {
    results: SearchResultSection[];
}

export function SearchResultComponent(props: SearchResultComponentProps) {
    return (<div className="cui-flex-grid cui-child-width-1-1 cui-child-width-1-2--m">
        { props.results.map(s => {
            return <SearchResultViewItem key={s.name} name={s.name} results={s.results} />
        })
        }
    </div>);
}
