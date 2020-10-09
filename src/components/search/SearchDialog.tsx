import * as React from 'react'
import { CuiDialog } from '../partials/components/CuiDialog';
import { SearchArea } from './SearchArea';

export function SearchDialog() {
    return (<CuiDialog id="search-dialog" title="Search"
        body={<SearchArea />}
    />);
}
