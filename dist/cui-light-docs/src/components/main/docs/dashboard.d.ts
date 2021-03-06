/// <reference types="react" />
export interface CuiDocsDashboardItem {
    title: string;
    icon: string;
    uri: string;
    description: string;
}
export default function CuiDocsDashboard(): JSX.Element;
export interface CuiDocsDashboardItemViewProps {
    item: CuiDocsDashboardItem;
    onClick: (uri: string) => void;
}
export declare function CuiDocsDashboardItemView(props: CuiDocsDashboardItemViewProps): JSX.Element;
