import * as React from 'react';
export interface DocsSectionProps {
    name: string;
    description: React.ReactNode;
    classes?: string;
    elements?: React.ReactNode;
}
export declare function DocsSection(props: DocsSectionProps): JSX.Element;
