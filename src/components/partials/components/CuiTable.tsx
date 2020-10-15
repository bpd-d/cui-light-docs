import * as React from 'react'
export interface DocsTable {
    header: string[];
    data: string[][];
}

export interface CuiTableProps {
    table: DocsTable;
}

interface CuiTableRowProps {
    items: string[];
}
export function CuiTable(props: CuiTableProps) {
    return (<table className="cui-table">
        <thead>
            <tr>{
                props.table.header && props.table.header.map(item => {
                    return <th>{item}</th>
                })
            }</tr>
        </thead>
        <tbody>
            {props.table.data && props.table.data.map(row => {
                return <CuiTableRow items={row} />
            })}
        </tbody>
    </table>);
}


function CuiTableRow(props: CuiTableRowProps) {
    return (
        <tr>
            {props.items && props.items.map(item => {
                return <td>{item}</td>
            })}
        </tr>
    );
}