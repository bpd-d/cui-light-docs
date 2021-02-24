import * as React from "react";
import { DocsHint } from "../partials/components/CuiHint";
import { CuiTable, DocsTable } from "../partials/components/CuiTable";
import { DocsSection } from "../partials/components/DocsSection";
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
    keywords?: string[];
    pageName: string;
}

export function CuiDocsPage(props: CuiDocsPageProps) {
    React.useEffect(() => {

    }, [props.pageName])
    if (!props.script || !props.script.sections) {
        return <CuiDocsUnderConstruction />;
    }
    return (<>
        <DocsSectionList pageName={props.pageName} sections={props.script.sections} />
        <DocsScriptKeywords keywords={props.keywords} />
    </>);
}

interface DocsSectionListProps {
    sections: ScriptSection[];
    pageName: string;
}

function DocsSectionList(props: DocsSectionListProps) {
    return <>
        {
            props.sections.map((item: ScriptSection, index: number) => {
                return (
                    <DocsSection
                        key={index + item.name}
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
            })
        }</>;
}

export interface DocsScriptKeywordsProps {
    keywords?: string[];

}
export function DocsScriptKeywords(props: DocsScriptKeywordsProps) {
    if (!props.keywords || props.keywords.length === 0) {
        return null;
    }
    return (<>
        <h3 className="cui-h3">Keywords</h3>
        <ul className="cui-list cui-inline">{
            props.keywords.map((keyword, index) => {
                return <li key={index} className="cui-text-muted">#{keyword}</li>
            })
        }</ul></>);
}


export function CuiDocsUnderConstruction() {
    return (
        <div className="cui-container cui-center cui-animation-fade-in">
            <h2 className="cui-h2 cui-text-warning">Page is under construction</h2>
        </div>
    );
}


