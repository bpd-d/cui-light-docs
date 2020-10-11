import * as React from 'react'
import { CuiDialog } from '../partials/components/CuiDialog';
import { SearchArea } from './SearchArea';

export function SearchDialog() {

    React.useEffect(() => {

        return () => {

        }
    })
    return (<CuiDialog id="search-dialog" title="Search" outClose={true}
        body={<SearchArea parentId="search-dialog" />}
    />);
}
