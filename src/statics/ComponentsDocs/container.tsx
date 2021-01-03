import * as React from "react"
import { DocsScript } from "../../components/docs/base"
import { ExamplePreview } from "../../components/preview/preview"

const firstExample = (
    <>
        <div className="cui-container container-wrap-around">Container</div>
    </>
)
const firstExampleCode = (
    <>
        <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-container</span>"&gt;Container&lt;/<span className="cui-tag">div</span>&gt;</span>
    </>
)
const secondExample = (
    <>
        <div className="cui-container cui-accent">Container accent</div>
        <div className="cui-container cui-secondary">Container secondary</div>
        <div className="cui-container cui-inverse">Container inverse</div>

    </>
)
const secondExampleCode = (
    <>
        <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-container cui-accent</span>"&gt;Container accent&lt;/<span className="cui-tag">div</span>&gt;</span>
        <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-container cui-secondary</span>"&gt;Container secondary&lt;/<span className="cui-tag">div</span>&gt;</span>
        <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-container cui-inverse</span>"&gt;Container inverse&lt;/<span className="cui-tag">div</span>&gt;</span>
    </>
)

const thirdExample = (
    <>
        <div className="cui-container cui-space cui-accent">Container space</div>
        <div className="cui-container cui-lean cui-secondary">Container lean</div>
    </>
)
const thirdExampleCode = (
    <>
        <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-container cui-space</span>"&gt;Container space&lt;/<span className="cui-tag">div</span>&gt;</span>
        <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-container cui-lean</span>"&gt;Container lean&lt;/<span className="cui-tag">div</span>&gt;</span>
    </>
)

const fourthExample = (
    <>
        <div className="cui-container cui-center cui-accent" style={{ "height": "200px" }}>
            <h2 className="cui-h2">Centered</h2>
        </div>
    </>
)
const fourthExampleCode = (
    <>
        <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-container cui-center</span>"&gt;</span>
        <span><span className="cui-indent-1">&lt;<span className="cui-tag">h2</span> class="<span className="cui-var">cui-h2</span>"&gt;Centered&lt;/<span className="cui-tag">div</span>&gt;</span></span>
        <span>&lt;/<span className="cui-tag">div</span>&gt;</span>
    </>
)

export const CuiDocsContainerScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: "Containers wrap elements by adding padding around them. They are similar to sections, but theming is a bit different. Here is a base option",
            example: ExamplePreview({
                code: firstExampleCode,
                element: firstExample,
                height: "60px"
            }, 'tabbed')
        },
        {
            name: "Styling",
            description: "Container can be colored with accent or secondary color. It can be simply done by adding a theme class to the element. There is an option to use inverted container. It will be dark in light theme and light on dark theme.",
            example: ExamplePreview({
                code: secondExampleCode,
                element: secondExample,
                height: "140px"
            }, 'tabbed')
        },
        {
            name: "Sizes",
            description: "There are two sizing options available in containers: space and lean. First one doubles a padding on the element and second halves the same padding. See examples below:",
            example: ExamplePreview({
                code: thirdExampleCode,
                element: thirdExample,
                height: "140px"
            }, 'tabbed')
        },
        {
            name: "Center",
            description: "Containers wrap elements by adding padding around them. They are similar to sections, but theming is a bit different.",
            example: ExamplePreview({
                code: fourthExampleCode,
                element: fourthExample,
                height: "240px"
            }, 'tabbed')
        },
        {
            name: "CSS options",
            description: "Component name is container and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "print", description: "Adds print mode styling" },
                { name: "theme", description: "Adds theme colored badge options" },
                { name: "space", description: "Adds container space classes" },
                { name: "lean", description: "Adds container lean classes" },
                { name: "center", description: "Adds container center classes" },
            ]
        }
    ]
}