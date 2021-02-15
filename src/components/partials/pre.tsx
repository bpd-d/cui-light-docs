import * as React from 'react'
import { ParserNode, ParserNodeAttribute } from '../../api/DocsElementParser/interfaces';

export interface preProps { 
    node: ParserNode;
    level: number;
}

interface ClasssesNodeProps { 
    classes: string[];
}

interface AttributesNodeProps { 
    attributes: ParserNodeAttribute;
}



export function PreNode(props: preProps) {
    let classesEl = props.node.classes && (<span className="">&nbsp;class="<span className="cui-var">{props.node.classes.join(" ")}</span>"</span> )
   
    return (
        <>
            {
                props.node.children && props.node.children.length > 0 ? 
                    <PreNodeWithChildren node={props.node} level={props.level} />
                :
                    <PreNodeWithoutChildren node={props.node} level={props.level}/>
            }
        </>);
}

export function PreJsNode(pre: preProps) { 
    function create(pre: preProps): JSX.Element {
        switch (pre.node.tag) { 
            case "function":
                return createJsFunctionNode(pre)
            case "group":
                return createGroup(pre)
            case "object":
                return createObjectNode(pre);
            default:
                return createJsTextNode(pre.node, pre.level)
        }
    }
        return (<>{create(pre)}</>)
}

function PreNodeWithoutChildren(props: preProps) { 
    return (<><span><span className={props.level > 0 ? "cui-indent-" + props.level : ""}>&lt;<span className="cui-tag">{props.node.tag}</span>
        <ClassesNode classes={props.node.classes} />
        <AttributesNode attributes={props.node.attributes} />&gt;</span>
        <span>{props.node.text}</span>
        <span>&lt;/<span className="cui-tag">{props.node.tag}</span>&gt;</span></span></>)
}

function PreNodeWithChildren(props: preProps) { 
    return (<><span><span className={props.level > 0 ? "cui-indent-" + props.level : ""}>&lt;<span className="cui-tag">{props.node.tag}</span><ClassesNode classes={props.node.classes} /><AttributesNode attributes={props.node.attributes} />&gt;</span></span>
            {
                props.node.children && props.node.children.map((child: ParserNode, index: number) => {
                    return <PreNode key={index} node={child} level={props.level + 1} />
                })
            }
            <span><span className={props.level > 0 ? "cui-indent-" + props.level : ""}>&lt;/<span className="cui-tag">{props.node.tag}</span>&gt;</span></span></>);
}

function ClassesNode(props: ClasssesNodeProps) { 
    let classesEl = props.classes && (<span className="">&nbsp;class="<span className="cui-var">{props.classes.join(" ")}</span>"</span>)
    return (<>{classesEl}</>);
}

function AttributesNode(props: AttributesNodeProps) { 
    let attributesEl = props.attributes && (enumerateAttributes(props.attributes));
    function enumerateAttributes(attributes: ParserNodeAttribute) { 
        let arr = [];
        for (let attr in attributes) { 
            arr.push((<span key={attr}>&nbsp;
                {attr}="<span className="cui-var">{attributes[attr]}</span>"</span>))
        }
        return arr;
    }
    return (<>{attributesEl}</> );
}

// JS related

function createJsTextNode(node: ParserNode, level: number) {
    return <span><span className={level > 0 ? "cui-indent-" + level : ""}>{node.text}</span></span>;
}

function createJsFunctionNode(props: preProps) { 
    return (<><span><span className={props.level > 0 && "cui-indent-" + props.level}>function <span className="cui-tag">{props.node.text}</span>&#040;{functionArgs(props.node.attributes)}&#041; &#123;</span></span>
        {
            props.node.children && props.node.children.map((child: ParserNode, index: number) => {
                return <PreJsNode key={index} node={child} level={props.level + 1} />
            })
        }
        <span><span className={props.level > 0 ? "cui-indent-" + props.level : ""}>&#125;</span></span></>);
}

function createObjectNode(props: preProps) {
    return (<><span><span className={props.level > 0 && "cui-indent-" + props.level}>const <span className="cui-tag">{props.node.text}</span> = &#123;</span></span>
        {
            props.node.children && props.node.children.map((child: ParserNode, index: number) => {
                return <PreJsNode key={index} node={child} level={props.level + 1} />
            })
        }
        <span><span className={props.level > 0 ? "cui-indent-" + props.level : ""}>&#125;</span></span></>);
}

function createGroup(props: preProps): JSX.Element { 
    return <>
        {props.node.children.map((item, index) => { 
          return  <PreJsNode key={index} node={item} level={props.level} /> 
        })}
    </>
}

function functionArgs(attr: ParserNodeAttribute) { 
     let attributesEl = attr && (enumerateAttributes(attr));
    function enumerateAttributes(attributes: ParserNodeAttribute) { 
        let arr = [];
        for (let attr in attributes) { 
            arr.push(
                (<><span key={attr} className="cui-var">{attr}</span><span>:{attributes[attr]}</span></>))
        }

        return arr;
    }
    let len = attributesEl ? attributesEl.length : 0;
    return (<>{attributesEl.map((item: JSX.Element, index: number) => { 
        if (index < len - 1) {
            return <>{item}, </>
        }
        return item
    })}</> );
}