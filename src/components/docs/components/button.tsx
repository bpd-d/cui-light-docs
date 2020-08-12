import * as React from "react";
import { ExamplePreview } from "../../partials/preview";
import { count } from "../../../utils/function";
import { GLOBAL_COUNTER } from "../../../statics/common";

export function CuiDocsComponentButton(props: any) {
    const btnsFirst: JSX.Element = (
        <>
            <div><button className="cui-button">Button</button></div>
            <div><button className="cui-button cui-default cui-margin-small-top">Button default</button></div>
        </>
    )
    const btnsFirstCode: JSX.Element = (
        <>
            <span>&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button</span>"&gt;Button&lt;<span className="cui-tag">button</span>&gt;</span>
            <span>&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-default</span>"&gt;Button default&lt;<span className="cui-tag">button</span>&gt;</span>
        </>
    )

    const btnsSecond: JSX.Element = (
        <>
            <div><button className="cui-button cui-shade">Button</button></div>
            <div><button className="cui-button cui-accent cui-margin-small-top">Button accent</button></div>
            <div><button className="cui-button cui-secondary cui-margin-small-top">Button secondary</button></div>
            <div><button className="cui-button cui-error cui-margin-small-top">Button error</button></div>
            <div><button className="cui-button cui-warning cui-margin-small-top">Button warning</button></div>
            <div><button className="cui-button cui-success cui-margin-small-top">Button success</button></div>
            <div><button className="cui-button cui-rounded cui-default cui-margin-small-top">Button rounded</button></div>
        </>
    )

    const btnsSecondCode: JSX.Element = (
        <>
            <span>&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-shade</span>"&gt;Button shade&lt;<span className="cui-tag">button</span>&gt;</span>
            <span>&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-accent</span>"&gt;Button accent&lt;<span className="cui-tag">button</span>&gt;</span>
            <span>&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-secondary</span>"&gt;Button secondary&lt;<span className="cui-tag">button</span>&gt;</span>
            <span>&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-error</span>"&gt;Button error&lt;<span className="cui-tag">button</span>&gt;</span>
            <span>&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-warning</span>"&gt;Button warning&lt;<span className="cui-tag">button</span>&gt;</span>
            <span>&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-success</span>"&gt;Button success&lt;<span className="cui-tag">button</span>&gt;</span>
            <span>&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-rounded</span>"&gt;Button rounded&lt;<span className="cui-tag">button</span>&gt;</span>
        </>
    )

    const btnThird: JSX.Element = (
        <>
            <div>
                <button className="cui-button cui-default cui-small">Button small size</button>
                <button className="cui-button cui-default cui-margin-left">Button default size</button>
                <button className="cui-button cui-default cui-large cui-margin-left">Button large size</button>
            </div>
            <div><button className="cui-button cui-default cui-fill cui-margin-top">Button fill parent</button></div>
        </>
    )

    const btnThirdCode: JSX.Element = (
        <>
            <span>&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-default cui-small</span>"&gt;Button small&lt;<span className="cui-tag">button</span>&gt;</span>
            <span>&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-default</span>"&gt;Button default&lt;<span className="cui-tag">button</span>&gt;</span>
            <span>&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-default cui-large</span>"&gt;Button large&lt;<span className="cui-tag">button</span>&gt;</span>
            <span>&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-default cui-fill</span>"&gt;Button fill&lt;<span className="cui-tag">button</span>&gt;</span>
        </>
    )

    const btnFourth: JSX.Element = (
        <>
            <div className="cui-container cui-accent">
                <h3 className="cui-h3">Accent container</h3>
                <button className="cui-button">Button</button>
                <button className="cui-button cui-default cui-margin-left">Button default</button>
                <button className="cui-button cui-shade cui-margin-left">Button shade</button>
                <button className="cui-button cui-success cui-margin-left">Button success</button>
            </div>
        </>
    )

    const btnFourthCode: JSX.Element = (
        <>
            <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-container cui-accent</span>"&gt;</span>
            <span><span className="cui-indent-1">&lt;<span className="cui-tag">h3</span> class="<span className="cui-var">cui-h3</span>"&gt;Accent container&lt;<span className="cui-tag">h3</span>&gt;</span></span>
            <span><span className="cui-indent-1">&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button</span>"&gt;Button&lt;<span className="cui-tag">button</span>&gt;</span></span>
            <span><span className="cui-indent-1">&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-default</span>"&gt;Button default&lt;<span className="cui-tag">button</span>&gt;</span></span>
            <span><span className="cui-indent-1">&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-shade</span>"&gt;Button shade&lt;<span className="cui-tag">button</span>&gt;</span></span >
            <span><span className="cui-indent-1">&lt;<span className="cui-tag">button</span> class="<span className="cui-var">cui-button cui-success</span>"&gt;Button success&lt;<span className="cui-tag">button</span>&gt;</span></span >
            <span>&lt;/<span className="cui-tag">div</span>&gt;</span>
        </>
    )

    return (
        <><div className="cui-padding-vertical cui-padding-remove-top">
            <h2 className="cui-h2">Usage</h2>
            <p>To use this component add class <span className="style-class">cui-button</span> to <span className="style-element">a</span> or <span className="style-element">button</span> element.
                This applies font styling and paddings. To give it a border add also <span className="style-class">cui-default</span>. See example below:</p>
            {ExamplePreview({
                code: btnsFirstCode,
                element: btnsFirst,
                height: "200px"
            }, 'tabbed')}
        </div>
            <div className="cui-padding-vertical">
                <h2 className="cui-h2">Styles</h2>
                <p>Buttons come with handy classes which add themes color or appearance styling to element.
            Add <span className="style-class">cui-accent</span> or <span className="style-class">cui-secondary</span> to the component to set theme base color or set <span className="style-class">cui-rounded</span> to get nicely rounded corners on the button.
            Component also supports signals: error, warning and success</p>
                {ExamplePreview({
                    code: btnsSecondCode,
                    element: btnsSecond,
                    height: "200px"
                }, 'tabbed')}
            </div>
            <div className="cui-padding-vertical">
                <h2 className="cui-h2">Sizes</h2>
                <p>Component comes with two additional sizing options: large and small. To use it add <span className="style-class">cui-small</span> or  <span className="style-class">cui-large</span> class to button element.
            If you want to stretch component up to make it occupy all the parent's width space, add class <span className="style-class">cui-fill</span></p>
                {ExamplePreview({
                    code: btnThirdCode,
                    element: btnThird,
                    height: "200px"
                }, 'tabbed')}
            </div>
            <div className="cui-padding-vertical">
                <h2 className="cui-h2">Buttons in accent components</h2>
                <p>Some of the higher level compoments like <span className="style-element">containers</span> which background can be themed, may not look good with default or shaded button options due low color contrast.
            For these cases, add <span className="style-class">cui-dark</span> to the colorized container, so framework can use colors from dark palette.
            For themes and signals (except of sections and hints) use proper accent class e.g. <span className="style-class">cui-accent</span> or <span className="style-class">cui-error</span> on the parent. Framework will apply colors from inverted (dark) palette which make buttons visible.
            This doesn't have to be done for accented buttons because theirs styling does not change in dark theme. For better look, see example below which is based on themed container:
            </p>
                {ExamplePreview({
                    code: btnFourthCode,
                    element: btnFourth,
                    height: "200px"
                }, 'tabbed')}
            </div>
        </>
    );
}