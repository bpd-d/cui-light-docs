import * as React from 'react'
import { Link } from 'react-router-dom'
export interface CuiDocsDashboardItem {
    title: string;
    icon: string;
    uri: string;
}
export function CuiDocsDashboard() {
    const items: CuiDocsDashboardItem[] = [
        { title: "Commons", icon: "dashboard_common", uri: "/" },
        { title: "Components", icon: "dashboard_component", uri: "/docs/components/introduction" },
        { title: "API", icon: "dashboard_api", uri: "/" },
        { title: "Plugins", icon: "overview_plugins", uri: "/" },
    ]
    return <div className="cui-container limited-content-width cui-margin-auto">
        <div className="cui-section">
            <h1 className="cui-h1">Documentation</h1>
            <div className="cui-container cui-flex-grid cui-child-width-1-1 cui-child-width-1-2--l">
                {items.map(item => {
                    return <div>
                        <div className="cui-card">
                            <div className="cui-card-header"><span className="cui-card-title">{item.title}</span></div>
                            <div className="cui-card-body cui-flex-center">
                                <span cui-icon={item.icon}></span>
                            </div>
                            <div className="cui-card-footer cui-flex cui-right">
                                <Link to={item.uri} className="cui-link">Read more</Link>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}
