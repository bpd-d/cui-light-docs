import * as React from "react";
import { ElementManager } from "../../../node_modules/cui-light-app/dist/index";
export interface OffCanvasProps {
}
export declare class OffCanvas extends React.Component<OffCanvasProps, {}> {
    offcanvas: ElementManager;
    constructor(props: OffCanvasProps);
    render(): JSX.Element;
}
