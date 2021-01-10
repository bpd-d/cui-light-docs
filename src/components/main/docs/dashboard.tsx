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
            <div className="cui-flex-grid cui-child-width-1-1 cui-child-width-1-3--l">
                {items.map(item => {
                    return <div key={item.title}>
                        <div className="cui-card cui-animation-fade-in">
                            {/* <div className="cui-card-header cui-flex cui-center"><span className="cui-card-title">{item.title}</span></div> */}
                            <div className="cui-transition-trigger cui-card-body " onClick={() => {
                                onIconClick(item)
                            }}>
                                <div className="cui-position-relative height-dashboard-item">
                                    <div className="cui-transition-fade cui-position-absolute cui-position-center cui-flex-center cui-background-default z-index-1 cui-width-1-1 cui-height-1-1">
                                        <div>
                                            <h2 className="cui-h2 cui-text-center">{item.title}</h2>
                                            <p className="cui-text-center">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="cui-position-absolute cui-position-center cui-width-1-1 cui-height-1-1">
                                        <div className="cui-flex-center">
                                            <span cui-icon={item.icon} className=""></span>
                                        </div>
                                        <div className="cui-text-center cui-margin-top">{item.title}</div>
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
