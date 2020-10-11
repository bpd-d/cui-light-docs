import * as React from "react";
import { DocsSection } from "../partials/components/section";

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
    script: DocsScript
}

export function CuiDocsPage(props: CuiDocsPageProps) {
    return (<>
        {
            props.script && props.script.sections ? props.script.sections.map((item: ScriptSection, index: number) => {
                return (
                    <DocsSection
                        key={index}
                        classes={index === 0 ? 'cui-padding-remove-top' : undefined}
                        name={item.name}
                        index={index}
                        description={item.description}
                        elements={
                            item.example
                        }
                    />
                )
            }) : <CuiDocsUnderConstruction />
        }</>);
}

export function CuiDocsUnderConstruction() {
    return (
        <div className="cui-container cui-center cui-animation-fade-in">
            <h2 className="cui-h2 cui-text-warning">Page is under construction</h2>
        </div>
    );
}
