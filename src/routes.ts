import * as React from "react";

export interface CuiDocsRoute {
    name: string;
    uri: string;
}

export interface CuiDocsRoutes {
    [id: string]: CuiDocsRoute
}

export const ROUTES: CuiDocsRoutes = {
    home: { name: "Home", uri: "/" },
    overview: { name: "Overview", uri: "/overview" },
    icons: { name: "Icons", uri: "/icons" },
    about: { name: "About", uri: "/about" },
    download: { name: "Download", uri: "/download" },
    docs: { name: "Documentation", uri: "/docs/dashboard" },
    component: { name: "Component", uri: "/docs/components/:id", },
    builder: { name: "Icons builder", uri: "/icons/builder", },
    search: { name: "Search", uri: "/search", }
};