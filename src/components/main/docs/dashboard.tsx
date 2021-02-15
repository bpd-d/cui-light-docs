import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { PageWithHeaderBase } from '../../../components/base/PageWithHeaderBase';
export interface CuiDocsDashboardItem {
    title: string;
    icon: string;
    uri: string;
    description: string;
}
export default function CuiDocsDashboard() {
    const history = useHistory();
    const items: CuiDocsDashboardItem[] = [
        { title: "Commons", icon: "dashboard_common", uri: "/", description: "Read about basics of cUI usage" },
        { title: "Components", icon: "dashboard_component", uri: "/docs/components/introduction", description: "Get deatails about CSS and JS components" },
        { title: "API", icon: "dashboard_api", uri: "/docs/api/introduction", description: "Learn how to integrate cUI with other packages in your project" },
        { title: "Plugins", icon: "overview_plugins", uri: "/docs/plugins/introduction", description: "Get details about plugins available in the cUI package" },
    ]

    function onIconClick(uri: string) {
        history.push(uri);
    }

    return <PageWithHeaderBase name="Documentation" description="Product documentation dashboard">
        <div className="cui-flex-grid cui-flex-grid-center cui-child-width-1-1 cui-child-width-1-3--l">
            {items.map(item => {
                return <CuiDocsDashboardItemView key={item.title} item={item} onClick={onIconClick} />
            })}
        </div>
    </PageWithHeaderBase>
}


export interface CuiDocsDashboardItemViewProps {
    item: CuiDocsDashboardItem;
    onClick: (uri: string) => void;
}

export function CuiDocsDashboardItemView(props: CuiDocsDashboardItemViewProps) {
    return (<div className="cui-card cui-animation-fade-in">
        <div className="cui-card-body cui-cursor-pointer" onClick={() => {
            props.onClick(props.item.uri)
        }}>
            <div className="cui-position-relative cui-transition-trigger cui-transition-slide-up height-dashboard-item">
                <div className="cui-position-center">
                    <div className="cui-transition-fade-reverse" cui-icon={props.item.icon}></div>
                </div>
                <div className="cui-transition-container">
                    <div className="cui-transition-body">
                        <div className="cui-transition-header cui-text-center">{props.item.title}</div>
                        <div className="cui-transition-content cui-text-center">
                            {props.item.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
