import * as React from 'react';
export interface SubSectionProps {
    name: string;
    description: React.ReactNode;
    classes?: string;
    elements?: React.ReactNode;
}
export interface DocsSectionProps {
    name: string;
    description: React.ReactNode;
    classes?: string;
    elements?: React.ReactNode;
    index?: number;
    subSections?: SubSectionProps[];
}
export declare function DocsSection(props: DocsSectionProps): JSX.Element;
export declare function SubSubSection(props: SubSectionProps): JSX.Element;