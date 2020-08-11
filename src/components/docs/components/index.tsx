import * as React from "react";
import { CuiDocsComponentButton } from "./button";
import { CuiDocsComponentMockup } from "./mockup";

export function getComponentElement(component: string): JSX.Element {
    switch (component) {
        case 'button':
            return <CuiDocsComponentButton />;
        default:
            return <CuiDocsComponentMockup />;
    }
}