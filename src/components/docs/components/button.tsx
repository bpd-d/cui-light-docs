import * as React from "react";
import { ExamplePreview } from "../../partials/preview";
import { count } from "../../../utils/function";
import { GLOBAL_COUNTER } from "../../../statics/common";

export function CuiDocsComponentButton(props: any) {
    const btnsFirst: JSX.Element = (
        <>
            <div><button className="cui-button">Button</button></div>
            <div><button className="cui-button cui-default">Button default</button></div>
        </>
    )

    return (
        <>
            <p>There is no need for introduction of buttons. In cUI they behave the same way like in all every other framework.</p>
            <p>Buttons in cUI provide a variety of styles which suit most cases. Styling is supported on <span className="cui-text-bold">button</span> and <span className="cui-text-bold">a</span></p>
            <h3 className="cui-h3">Example</h3>
            {ExamplePreview({
                code: "Code",
                element: btnsFirst
            }, 'tabbed')}
        </>
    );
}