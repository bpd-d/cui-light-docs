import * as React from "react";
import { useParams } from "react-router-dom";

export interface TestComponentProps {
    name: string;
}

export function TestComponent(props: TestComponentProps) {
    let { id } = useParams();
    return (
        <div className="cui-container">
            sdsdsd {id}
        </div>
    )
}