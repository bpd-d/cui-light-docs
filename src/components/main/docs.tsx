import * as React from "react";
import { useParams } from "react-router-dom";

export interface DocsProps {
    site?: string;
}

export function DocsComponent(args: DocsProps) {
    const { id } = useParams();

    return <div className="">
        Docs {id}
    </div>;
}