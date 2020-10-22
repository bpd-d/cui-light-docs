import * as React from 'react'

export interface PropertyGridItem {
    name: string;
    class?: string;
    type: string;
    defaultValue: string;
    description: string;
}

export interface CuiDocsPropertyGridProps {
    items: PropertyGridItem[];
}
export interface CuiDocsPropertyItemGridProps {
    item: PropertyGridItem;
}

export function CuiDocsPropertyGrid(props: CuiDocsPropertyGridProps) {
    return (<div className="cui-flex-grid cui-flex-grid-match cui-child-width-1-1 cui-child-width-1-2--l">
        {props.items && props.items.map(item => {
            return <GridItem key={item.name} item={item} />
        })}
    </div>);
}

export function GridItem(props: CuiDocsPropertyItemGridProps) {
    return (<div>
        <div className="cui-card cui-background-shade">
            <div className="cui-card-header">
                <span className="cui-card-title">{props.item.name}</span>
            </div>
            <div className="cui-card-body">
                <p>{props.item.description}</p>

            </div>
            <div className="cui-card-footer">
                <div className="cui-flex cui-middle cui-between">
                    <span>Type:</span>
                    <span>{props.item.type}</span>
                </div>
                <div className="cui-flex cui-middle cui-between">
                    <span className="cui-text-bold">Value:</span>
                    <span className="cui-text-bold">{props.item.defaultValue}</span>
                </div>
            </div>
        </div>
    </div>);
}
