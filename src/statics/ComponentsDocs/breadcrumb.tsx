import * as React from "react"
import { DocsScript } from "../../components/docs/base"
import { ExamplePreview } from "../../components/preview/preview"

const firstEl: JSX.Element = (
    <ul className="cui-breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#">Page</a></li>
        <li><span>Current</span></li>
    </ul>
)
const firstCode: JSX.Element = (<>
    <span>&lt;<span className="cui-tag">ul</span> class="<span className="cui-var">cui-breadcrumb</span>"&gt;</span>
    <span><span className="cui-indent-1">&lt;<span className="cui-tag">li</span>&gt;&lt;<span className="cui-tag">a</span> href="#"&gt;Parent&lt;/<span className="cui-tag">a</span>&gt;&lt;/<span className="cui-tag">li</span>&gt;</span></span>
    <span><span className="cui-indent-1">&lt;<span className="cui-tag">li</span>&gt;&lt;<span className="cui-tag">a</span> href="#"&gt;Child&lt;/<span className="cui-tag">a</span>&gt;&lt;/<span className="cui-tag">li</span>&gt;</span></span>
    <span><span className="cui-indent-1">&lt;<span className="cui-tag">li</span>&gt;&lt;<span className="cui-tag">a</span> href="#"&gt;Current&lt;/<span className="cui-tag">a</span>&gt;&lt;/<span className="cui-tag">li</span>&gt;</span></span>

    <span>&lt;/<span className="cui-tag">ul</span>&gt;</span>
</>)

export const BreadrumbScript: DocsScript = {
    sections: [{
        name: "Usage",
        description: (<> Breadcrumbs help with navgation on subpages.They are based on common HTML list component: <span className="style-element">ul-li</span>.
        It is enough to add class <span className="style-class">cui-breadcrumb</span > to parent to bring proper component styling, see example below: </>),
        example: ExamplePreview({
            element: firstEl,
            code: firstCode,
            height: "200px"
        }, 'tabbed')

    },
    {
        name: "CSS options",
        description: "Component name is breadcrumb and supports following CSS build options:",
        list: [
            { name: "dark", description: "Adds dark mode styling" },
            { name: "print", description: "Adds print mode styling" },
        ]
    }]
}
