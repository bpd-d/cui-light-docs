import * as React from "react";
import { DocsHint } from "../partials/components/CuiHint";
import { CuiTable, DocsTable } from "../partials/components/CuiTable";
import { DocsSection } from "../partials/components/section";
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
    script: DocsScript
    pageName: string;
}

export function CuiDocsPage(props: CuiDocsPageProps) {
    React.useEffect(() => {

    }, [props.pageName])
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
                        hint={item.hint}
                        properties={item.properties}
                        table={item.table}
                        list={item.list}
                        pageName={props.pageName}
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
