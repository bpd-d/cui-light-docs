import * as React from "react";
import { DocsScript } from "../../components/docs/base";
import { ExamplePreview } from "../../components/partials/preview";

const sectionFirst = (<>
    <div className="cui-section container-wrap-around">Section default</div>
    <div className="cui-section cui-space cui-margin-top container-wrap-around">Section space</div>
</>);
const sectionFirstCode = (
    <>
        <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-section</span>"&gt;Section default&lt;/<span className="cui-tag">div</span>&gt;</span>
        <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-section cui-space</span>"&gt;Section space&lt;/<span className="cui-tag">div</span>&gt;</span>
    </>
);

export const CuiDocsSectionScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: (<> Sections were created to be used only as high level wrappers.
            Basically they only add some padding around the container.
            To use it add class<span className="style-class">cui- section</span > to the element.
            In case of need of having more padding on component, add class<span className="style-class">cui- space</span>.See below how it works in practice: </>),
            example: ExamplePreview({
                code: sectionFirstCode,
                element: sectionFirst
            }, 'tabbed')
        }
    ]
}