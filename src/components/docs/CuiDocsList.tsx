import * as React from 'react'
import { copyText } from '../../utils/function';
import { CuiLinkTextCopy } from '../partials/components/CuiLinkTextCopy';
export interface CuiListItem {
    name: string;
    description: string;
}

export interface CuiDocsListProps {
    items: CuiListItem[];
}

export function CuiDocsList(props: CuiDocsListProps) {
    function onItemClick(value: string) {
        copyText(value).then(() => {

        })
    }
    return (<ul className="cui-list cui-bullet">
        {props && props.items && props.items.map((item: CuiListItem, index: number) => {
            return <li key={index}>
                <CuiLinkTextCopy value={item.name} classes="cui-accent" />
                <span className="cui-margin-small-left">{item.description}</span>
            </li>
        })}
    </ul>);
}
