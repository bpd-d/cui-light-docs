import * as React from 'react';
import { CuiListItem } from '../../docs/CuiDocsList';
import { PropertyGridItem } from '../../docs/CuiDocsPropertyGrid';
import { DocsHint } from './CuiHint';
import { DocsTable } from './CuiTable';
export interface SubSectionProps {
    name: string;
    description: React.ReactNode;
    classes?: string;
    elements?: React.ReactNode;
}
export interface DocsSectionProps {
    pageName: string;
    name: string;
    description: React.ReactNode;
    classes?: string;
    elements?: React.ReactNode;
    index?: number;
    hint?: DocsHint;
    table?: DocsTable;
    list?: CuiListItem[];
    properties?: PropertyGridItem[];
    subSections?: SubSectionProps[];
}
export declare function DocsSection(props: DocsSectionProps): JSX.Element;
export declare function SubSubSection(props: SubSectionProps): JSX.Element;
