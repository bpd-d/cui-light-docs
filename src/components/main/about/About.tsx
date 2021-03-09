import * as React from 'react'
import { IsLoading } from '../../../components/base/IsLoading';
import { getAboutLinks } from '../../../core/imports/links';
import { PageWithHeaderBase } from '../../../components/base/PageWithHeaderBase';

export default function About() {
    return (<PageWithHeaderBase name="About" description="Information about page and product">
        <AboutContent />
    </PageWithHeaderBase>);
}

function AboutContent() {
    const [links, setLinks] = React.useState<any>(undefined);
    React.useEffect(() => {
        getAboutLinks().then(file => setLinks(file))
    }, []);

    if (!links) {
        return <IsLoading classes="cui-section" />
    }

    return <><div>Project is created and maintained by <span className="cui-text-bold">BPDev</span>. Visit our <a className="cui-link" href="https://github.com/bpd-d">Github</a> repository to see more projects.</div>
        <div>Check out also: </div>
        <ul className="cui-list">
            <li><AboutListItem url={links['bpd-toolkit']} name="bpd-toolkit" description="Set of handy tools and functions which speed up development" /></li>
            <li><AboutListItem url={links['bpd-storage']} name="bpd-storage" description="Tool to handle local storage in the browser" /></li>
            <li><AboutListItem url={links['bpd-state-manager']} name="bpd-state-manager" description="Simple implementation of state manager for javascript" /></li>
        </ul></>
}

interface AboutListItemProps {
    name: string;
    url: string;
    description: string;
}

function AboutListItem(props: AboutListItemProps) {
    return <><a className="cui-link cui-accent" href={props.url}>{props.name}</a><span className="cui-margin-left">{props.description}</span></>
}