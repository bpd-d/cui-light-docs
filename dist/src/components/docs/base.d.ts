import * as React from "react";
import { DocsHint } from "../partials/components/CuiHint";
export interface DocsScript {
    sections?: ScriptSection[];
}
export interface ScriptSection {
    name: string;
    description: React.ReactNode;
    example?: JSX.Element;
    hint?: DocsHint;
    additions?: React.ReactNode;
    subsections?: ScriptSection[];
}
export interface CuiDocsPageProps {
    script: DocsScript;
}
export declare function CuiDocsPage(props: CuiDocsPageProps): JSX.Element;
export declare function CuiDocsUnderConstruction(): JSX.Element;
