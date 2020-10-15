import * as React from "react";
import { DocsHint } from "../partials/components/CuiHint";
import { DocsTable } from "../partials/components/CuiTable";
import { CuiListItem } from "./CuiDocsList";
import { PropertyGridItem } from "./CuiDocsPropertyGrid";
export interface DocsScript {
    sections?: ScriptSection[];
}
export interface ScriptSection {
    name: string;
    description: React.ReactNode;
    example?: JSX.Element;
    hint?: DocsHint;
    table?: DocsTable;
    list?: CuiListItem[];
    properties?: PropertyGridItem[];
    additions?: React.ReactNode;
    subsections?: ScriptSection[];
}
export interface CuiDocsPageProps {
    script: DocsScript;
    pageName: string;
}
export declare function CuiDocsPage(props: CuiDocsPageProps): JSX.Element;
export declare function CuiDocsUnderConstruction(): JSX.Element;
