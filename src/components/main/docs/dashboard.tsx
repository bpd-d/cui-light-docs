import * as React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { PageHeader } from '../../partials/components/PageHeader'
export interface CuiDocsDashboardItem {
    title: string;
    icon: string;
    uri: string;
    description: string;
}
export function CuiDocsDashboard() {
    const history = useHistory();
    const items: CuiDocsDashboardItem[] = [
        { title: "Commons", icon: "dashboard_common", uri: "/", description: "Read about basics of cUI usage" },
        { title: "Components", icon: "dashboard_component", uri: "/docs/components/introduction", description: "Get deatails about CSS and JS components" },
        { title: "API", icon: "dashboard_api", uri: "/", description: "Learn how to integrate cUI with other packages in your project" },
        { title: "Plugins", icon: "overview_plugins", uri: "/", description: "Get details about plugins available in the cUI package" },
    ]

    function onIconClick(item: CuiDocsDashboardItem) {
        history.push(item.uri);
    }

    return <div className="cui-container limited-content-width cui-margin-auto">
        <div className="">
            <PageHeader title="Documentation" description="Product documentation dashboard" />
            <div className="cui-flex-grid cui-flex-grid-center cui-child-width-1-1 cui-child-width-1-3--l">
                {items.map(item => {
                    return <div key={item.title}>
                        <div className="cui-card cui-animation-fade-in">
                            <div className="cui-card-body cui-cursor-pointer" onClick={() => {
                                onIconClick(item)
                            }}>
                                <div className="cui-position-relative cui-transition-trigger cui-transition-slide-up height-dashboard-item">
                                    <div className="cui-position-center">
                                        <div className="cui-transition-fade-reverse" cui-icon={item.icon}></div>
                                    </div>
                                    <div className="cui-transition-container">
                                        <div className="cui-transition-body">
                                            <div className="cui-transition-header cui-text-center">{item.title}</div>
                                            <div className="cui-transition-content cui-text-center">
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}
