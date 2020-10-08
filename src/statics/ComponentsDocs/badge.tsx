import * as React from "react"
import { DocsScript } from "../../components/docs/base"
import { ExamplePreview } from "../../components/partials/preview"

const badgeFirst = (
    <>
        <div className="cui-margin-top">
            <button className="cui-button cui-shade cui-badge-area">With content
                <span className="cui-badge">10</span>
            </button>
        </div>
        <div className="cui-margin-top">
            <button className="cui-button cui-shade cui-badge-area">Without content <span className="cui-badge"></span></button></div>
    </>
)

const badgeSecond = (
    <>
        <div className="cui-margin-top">
            <button className="cui-button cui-shade cui-badge-area">Accent
                <span className="cui-badge cui-accent">10</span>
            </button>
        </div>
        <div className="cui-margin-top">
            <button className="cui-button cui-shade cui-badge-area">Secondary
                <span className="cui-badge cui-secondary">10</span>
            </button>
        </div>
        <div className="cui-margin-top">
            <button className="cui-button cui-shade cui-badge-area">Error
                <span className="cui-badge cui-error">10</span>
            </button>
        </div>
        <div className="cui-margin-top">
            <button className="cui-button cui-shade cui-badge-area">Warning
                <span className="cui-badge cui-warning">10</span>
            </button>
        </div>
        <div className="cui-margin-top">
            <button className="cui-button cui-shade cui-badge-area">Success
                <span className="cui-badge cui-success">10</span>
            </button>
        </div>
    </>
)

const badgeFirstCode = (
    <>
        <span>&lt;<span className="cui-tag">div</span>&gt;</span>
        <span><span className="cui-indent-1">&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-shade cui-badge-area</span>"&gt;With content</span></span>
        <span><span className="cui-indent-2">&lt;<span className="cui-tag">span</span> class="<span className="cui-var">cui-badge</span>"&gt;10&lt;/<span className="cui-tag">span</span>&gt;</span></span>
        <span><span className="cui-indent-1">&lt;/<span className="cui-tag">button</span>&gt;</span></span>
        <span>&lt;/<span className="cui-tag">div</span>&gt;</span>
        <span>&lt;<span className="cui-tag">div</span>&gt;</span>
        <span><span className="cui-indent-1">&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-shade cui-badge-area</span>"&gt;Without content</span></span>
        <span><span className="cui-indent-2">&lt;<span className="cui-tag">span</span> class="<span className="cui-var">cui-badge</span>"&gt;&lt;/<span className="cui-tag">span</span>&gt;</span></span>
        <span><span className="cui-indent-1">&lt;/<span className="cui-tag">button</span>&gt;</span></span>
        <span>&lt;/<span className="cui-tag">div</span>&gt;</span>
    </>
)

const badgeSecondCode = (
    <>
        <span>&lt;<span className="cui-tag">div</span>&gt;</span>
        <span><span className="cui-indent-1">&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-shade cui-badge-area</span>"&gt;Accent</span></span>
        <span><span className="cui-indent-2">&lt;<span className="cui-tag">span</span> class="<span className="cui-var">cui-badge cui-accent</span>"&gt;10&lt;/<span className="cui-tag">span</span>&gt;</span></span>
        <span><span className="cui-indent-1">&lt;/<span className="cui-tag">button</span>&gt;</span></span>
        <span>&lt;/<span className="cui-tag">div</span>&gt;</span>
        <span>&lt;<span className="cui-tag">div</span>&gt;</span>
        <span><span className="cui-indent-1">&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-shade cui-badge-area</span>"&gt;Secondary</span></span>
        <span><span className="cui-indent-2">&lt;<span className="cui-tag">span</span> class="<span className="cui-var">cui-badge cui-secondary</span>"&gt;&lt;/<span className="cui-tag">span</span>&gt;</span></span>
        <span><span className="cui-indent-1">&lt;/<span className="cui-tag">button</span>&gt;</span></span>
        <span>&lt;/<span className="cui-tag">div</span>&gt;</span>
        <span>&lt;<span className="cui-tag">div</span>&gt;</span>
        <span><span className="cui-indent-1">&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-shade cui-badge-area</span>"&gt;Error</span></span>
        <span><span className="cui-indent-2">&lt;<span className="cui-tag">span</span> class="<span className="cui-var">cui-badge cui-error</span>"&gt;&lt;/<span className="cui-tag">span</span>&gt;</span></span>
        <span><span className="cui-indent-1">&lt;/<span className="cui-tag">button</span>&gt;</span></span>
        <span>&lt;/<span className="cui-tag">div</span>&gt;</span>
        <span>&lt;<span className="cui-tag">div</span>&gt;</span>
        <span><span className="cui-indent-1">&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-shade cui-badge-area</span>"&gt;Warning</span></span>
        <span><span className="cui-indent-2">&lt;<span className="cui-tag">span</span> class="<span className="cui-var">cui-badge cui-warning</span>"&gt;&lt;/<span className="cui-tag">span</span>&gt;</span></span>
        <span><span className="cui-indent-1">&lt;/<span className="cui-tag">button</span>&gt;</span></span>
        <span>&lt;/<span className="cui-tag">div</span>&gt;</span>
        <span>&lt;<span className="cui-tag">div</span>&gt;</span>
        <span><span className="cui-indent-1">&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-shade cui-badge-area</span>"&gt;Success</span></span>
        <span><span className="cui-indent-2">&lt;<span className="cui-tag">span</span> class="<span className="cui-var">cui-badge cui-success</span>"&gt;&lt;/<span className="cui-tag">span</span>&gt;</span></span>
        <span><span className="cui-indent-1">&lt;/<span className="cui-tag">button</span>&gt;</span></span>
        <span>&lt;/<span className="cui-tag">div</span>&gt;</span>
    </>
)

export const CuiDocsComponentBadge: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: (<>Badge adds small indicator in top right side of the component where it belongs to.
                Before adding badge element, hosting element must be specified. This is done by using a class <span className="style-class">cui-badge-area</span> on the parent (hosting) element.
                Element itself gets a proper styling on class <span className="style-class">cui-badge</span>. If element doesn't have any content then default size will be a line size for small font.
                Example below shows two examples, with and without a content used on button:</>),
            example: ExamplePreview({
                code: badgeFirstCode,
                element: badgeFirst,
                height: "200px"
            }, 'tabbed')
        },
        {
            name: "Usage",
            description: (<>Component comes with variety color options. To get it, use one theme or signal class along with <span className="style-class">cui-badge</span>. See example: </>),
            example: ExamplePreview({
                code: badgeSecondCode,
                element: badgeSecond,
                height: "200px"
            }, 'tabbed')
        }

    ]
}