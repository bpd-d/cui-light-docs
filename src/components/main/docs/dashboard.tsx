import * as React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { PageHeader } from '../../partials/components/PageHeader'
export interface CuiDocsDashboardItem {
    title: string;
    icon: string;
    uri: string;
}
export function CuiDocsDashboard() {
    const history = useHistory();
    const items: CuiDocsDashboardItem[] = [
        { title: "Commons", icon: "dashboard_common", uri: "/" },
        { title: "Components", icon: "dashboard_component", uri: "/docs/components/introduction" },
        { title: "API", icon: "dashboard_api", uri: "/" },
        { title: "Plugins", icon: "overview_plugins", uri: "/" },
    ]

    function onIconClick(item: CuiDocsDashboardItem) {
        history.push(item.uri);
    }

    return <div className="cui-container limited-content-width cui-margin-auto">
        <div className="">
            <PageHeader title="Documentation" description="Product documentation dashboard" />
            <div className="cui-flex-grid cui-child-width-1-1 cui-child-width-1-2--l">
                {items.map(item => {
                    return <div key={item.title}>
                        <div className="cui-card cui-hover cui-animation-fade-in">
                            <div className="cui-card-header cui-flex cui-center"><span className="cui-card-title">{item.title}</span></div>
                            <div className="cui-card-body cui-flex-center cui-height-viewport-1-2" onClick={() => {
                                onIconClick(item)
                            }}>
                                <span cui-icon={item.icon} className="dashboard-icon"></span>
                            </div>
                            {/* <div className="cui-card-footer cui-flex cui-right">
                                <Link to={item.uri} className="cui-link">Read more</Link>
                            </div> */}
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}
