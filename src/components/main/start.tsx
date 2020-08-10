import * as React from "react";
import { useParams } from "react-router-dom";

export function GettingStarted(props: any) {
    const { id } = useParams();
    return (
        <div className="">Getting started {id}</div>
    )
}