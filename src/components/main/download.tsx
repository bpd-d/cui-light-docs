import * as React from "react";
import { getDownloadLinks } from "../../core/imports/links";
import { IsLoading } from "../base/IsLoading";
import { PageWithHeaderBase } from "../base/PageWithHeaderBase";

export default function Download(props: any) {
    return (
        <PageWithHeaderBase name="Download" description="Download or import files to your project">
            <DownloadPageContent />
        </PageWithHeaderBase>
    )
}

function DownloadPageContent() {
    const [links, setLinks] = React.useState<any>(undefined);
    React.useEffect(() => {
        getDownloadLinks().then((data) => setLinks(data))
    }, [])

    if (!links) {
        return <IsLoading />;
    }
    return <>
        <div className="cui-section">
            <h2 className="cui-h2">Styles</h2>
            <h3 className="cui-h3">Bundle</h3>
            <p>cUI Styles package comes with pre-built CSS bundle. After each iteration, library is built and published to Github repository. Files can be found in the <b>dist</b> folder: <DownloadPageLink url={links['styles-github-dist']} name="Github dist" />.</p>
            <p>Another way of obtaining built project is to use a NPM package. To do this use your favorite CDN service that caches NPM repositories. In this example we use  <DownloadPageLink url={links['cdn']} name="UNPKG" /> service to show how bundle can be obtained: <DownloadPageLink url={links['styles-cdn-dist']} /></p>
            <h3 className="cui-h3">SASS</h3>
            <p>cUI Styles package exposes whole SASS project in shape of *.scss file. They can be downloaded manually from Github repository, from folder src: <DownloadPageLink url={links['styles-github-src']} name="SASS" />.</p>
            <p>Better and recommended approach would be to import package via npm service, using command: <span className="cui-text-bold cui-text-accent">npm install cui-styles --save-dev</span></p>
        </div>
        <div className="cui-section">
            <h2 className="cui-h2">Javascript</h2>
            <h3 className="cui-h3">Bundle</h3>
            <p>cUI Light Javascript package also comes as pre-built bundle. After each version, there two options published to Github dist: common and minified version. cUI Light ESM files are also published to dist foleder. Files can be found in the <b>dist</b> folder: <DownloadPageLink url={links['js-github-dist']} name="Github" /></p>
            <p>Similarily to styles, JS files also can be attached to project from CDN service, like: <a className="cui-link cui-accent" href="https://unpkg.com/">UNPKG</a>. Two examples show how to get bundle and it's minified version: <DownloadPageLink url={links["js-cdn-dist"]} name="index.js" /> and <DownloadPageLink url={links["js-cdn-dist-min"]} name="index.min.js" /></p>
            <h3 className="cui-h3">ESM and Typescript</h3>
            <p>cUI Light project provides two another ways of intergating it with other projects. Since it is written in <b>Typescript</b> it allows to import users raw *.ts files into project. They can be imported from folder src (Github and NPM): <DownloadPageLink url={links['js-github-src']} name="Github" /> or via command: <span className="cui-text-bold cui-text-accent">npm install cui-light-app --save-dev</span></p>
            <p>For those who want to use compiled version, ESM files are in the folder dist/esm: <DownloadPageLink url={links['js-github-src-esm']} name="Github" />. They all contain TS declaration files so they also can be freely used with Typescript.</p>
        </div>
        <div className="cui-section">
            <h2 className="cui-h2">Icons</h2>
            <p>All icons are merged in single file, you can download common and ESM version of it from Github: <DownloadPageLink url={links['icons-github-common']} name="common" /> and <DownloadPageLink url={links['icons-github-esm']} name="esm" />.</p>
            <p>If you want to attach them to HTML, use CDN service, see example: <DownloadPageLink url={links['icons-cdn-common']} name="common" /> and <DownloadPageLink url={links['icons-cdn-esm']} name="esm" />.</p>
            <p>If you want to attach them to project use NPM: <span className="cui-text-bold cui-accent"> npm install bpd-cui-icons --save-dev</span></p>
        </div>
        <div className="cui-hint cui-warning cui-margin-top">
            <div className="cui-hint-title">Warning</div>
            <div className="cui-hint-body"><p>Check our page for latest package version before copying any of CDN examples. They were created as examples and may not point to latest version of the package.</p></div>
        </div>
    </>
}

interface DownloadPageLinkProps {
    url: string;
    name?: string;
}

function DownloadPageLink(props: DownloadPageLinkProps) {
    return <a href={props.url} target="_blank" className="cui-link cui-accent">{props.name ?? props.url}</a>
}