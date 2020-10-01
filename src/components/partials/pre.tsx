import * as React from 'react'
import { ParserNode, ParserNodeAttribute } from '../../api/parser/interfaces';

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