import * as React from "react";
import { CuiDocsComponentButton } from "./button";
import { CuiDocsComponentMockup } from "./mockup";
import { CuiDocsComponentBadge } from "./badge";

export function getComponentElement(component: string): JSX.Element {
    switch (component) {
        case 'button':
            return <CuiDocsComponentButton />;
        case 'badge':
            return <CuiDocsComponentBadge />;
        default:
            return <CuiDocsComponentMockup />;
    }
}