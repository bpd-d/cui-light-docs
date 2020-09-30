import * as React from "react";
export interface DocsScript {
    sections?: ScriptSection[];
}
export interface ScriptSection {
    name: string;
    description: React.ReactNode;
    example?: JSX.Element;
    additions?: React.ReactNode;
    subsections?: ScriptSection[];
}
export interface CuiDocsPageProps {
    script: DocsScript;
}
export declare function CuiDocsPage(props: CuiDocsPageProps): JSX.Element;
export declare function CuiDocsUnderConstruction(): JSX.Element;
