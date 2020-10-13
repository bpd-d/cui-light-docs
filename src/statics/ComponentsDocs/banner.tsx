
import * as React from "react";
import { DocsScript } from "../../components/docs/base";
import { ExamplePreview } from "../../components/partials/preview";

const bannerFirst = (<>
    <div className="cui-banner cui-active">
        Banner
    </div>
</>);

const bannerFirstCode = (
    <>
        <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-banner cui-active</span>"&gt;Banner&lt;/<span className="cui-tag">div</span>&gt;</span>
    </>
);


const bannerSecond = (<>
    <div className="cui-banner cui-active cui-accent">Banner accent</div>
    <div className="cui-banner cui-active cui-secondary cui-margin-top">Banner secondary</div>
    <div className="cui-banner cui-active cui-success cui-margin-top">Banner success</div>
    <div className="cui-banner cui-active cui-warning cui-margin-top">Banner warning</div>
    <div className="cui-banner cui-active cui-error cui-margin-top">Banner error</div>
</>)

const bannerSecondCode = (
    <>
        <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-banner cui-active cui-accent</span>"&gt;Banner accent&lt;/<span className="cui-tag">div</span>&gt;</span>
        <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-banner cui-active cui-secondary</span>"&gt;Banner secondary&lt;/<span className="cui-tag">div</span>&gt;</span>
        <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-banner cui-active cui-success</span>"&gt;Banner success&lt;/<span className="cui-tag">div</span>&gt;</span>
        <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-banner cui-active cui-warning</span>"&gt;Banner warning&lt;/<span className="cui-tag">div</span>&gt;</span>
        <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-banner cui-active cui-error</span>"&gt;Banner error&lt;/<span className="cui-tag">div</span>&gt;</span>
    </>
);

const bannerThird = (<>
    <div className="cui-banner cui-active">
        <span className="cui-margin-left cui-message">Banner advanced</span>
        <span className="cui-message-icon" cui-icon="error"></span>
        <a className="cui-close cui-icon" cui-icon="close" cui-close=""></a>
    </div>
</>);

const bannerThirdCode = (
    <>
        <span>&lt;<span className="cui-tag">div</span> class="<span className="cui-var">cui-banner cui-active</span>"&gt;</span>
        <span><span className="cui-indent-1">&lt;<span className="cui-tag">span</span> class="<span className="cui-var">cui-message-icon</span>" cui-icon="error"&gt;&lt;<span className="cui-tag">span</span>&gt;</span></span>
        <span><span className="cui-indent-1">&lt;<span className="cui-tag">span</span> class="<span className="cui-var">cui-message</span>"&gt;Banner advanced&lt;<span className="cui-tag">span</span>&gt;</span></span>
        <span><span className="cui-indent-1">&lt;<span className="cui-tag">a</span> class="<span className="cui-var">cui-close</span>"  cui-icon="close"&gt;&lt;/<span className="cui-tag">a</span>&gt;</span></span>
        <span>&lt;<span className="cui-tag">div</span>&gt;</span>
    </>
);


export const CuiDocsBannerScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: (<>Banners are small, closable components which intended usage is notifing user about events happeing on the page.
            Component comes with variety of styling options. The most basic option is to add cui-banner and cui-active classes. If you want to close component remove cui-active or use component Close.
            </>),
            example: ExamplePreview({
                code: bannerFirstCode,
                element: bannerFirst
            }, 'tabbed')
        },
        {
            name: "Styling",
            description: (<>To style banner with some color extend component with style classes: cui-accent, cui-secondary, cui-success, cui-warning, cui-error:
            </>),
            example: ExamplePreview({
                code: bannerSecondCode,
                element: bannerSecond
            }, 'tabbed')
        },
        {
            name: "Advanced",
            description: (<>Component supports more complex styling with few additional classes.
            Add element with cui-message-icon to add an icon at the very begining. Wrap banner text with class cui-message.
            If you want to add icon closing/hiding element insert a link element with class cui-close and the same attribute, see example below
            </>),
            example: ExamplePreview({
                code: bannerThirdCode,
                element: bannerThird
            }, 'tabbed')
        }
    ]
}