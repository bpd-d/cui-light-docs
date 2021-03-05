export interface CuiDocsRoute {
    name: string;
    uri: string;
}
export interface CuiDocsRoutes {
    [id: string]: CuiDocsRoute;
}
export declare const ROUTES: CuiDocsRoutes;
