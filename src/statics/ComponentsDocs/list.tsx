import { ParserNode } from "../../api/DocsElementParser/interfaces";
import { DocsScript } from "../../components/docs/base";
import { GetTabbedPreview } from "../../components/preview/preview";

function createLi(name: string): ParserNode {
    return {
        tag: "li",
        text: name
    }
}

function createLiWithClasses(name: string, ...classes: string[]): ParserNode {
    return {
        tag: "li",
        classes: [...classes],
        children: [
            { tag: "a", text: name }
        ]
    }
}

function createList(...classes: string[]): ParserNode {
    let children: ParserNode[] = [];
    for (let i = 1; i < 6; i++) {
        children.push(createLi("Item " + i))
    }
    return {
        tag: "ul",
        classes: ["cui-list", ...classes],
        children: children
    }
}

function createInteractiveList(...classes: string[]): ParserNode {
    let children: ParserNode[] = [];
    for (let i = 1; i < 6; i++) {
        if (i == 2) {
            children.push(createLiWithClasses("Item " + i, "cui-active"))
        } else
            children.push(createLiWithClasses("Item " + i))

    }
    return {
        tag: "ul",
        classes: ["cui-list", ...classes],
        children: children
    }
}

export const listExample = createList();
export const listSmallExample = createList("cui-small");
export const listHoverExample = createList("cui-hover");
export const listStrippedExample = createList("cui-stripped");
export const listBulletExample = createList("cui-bullet");
export const listBulletShadeExample = createList("cui-bullet-shade");
export const listInteractiveExample = createInteractiveList("cui-interactive");
export const listInteractiveAccentExample = createInteractiveList("cui-interactive", "cui-accent");
export const listInteractiveSecondaryExample = createInteractiveList("cui-interactive", "cui-secondary");
export const listInlineExample = createList("cui-inline");
export const listHighlightExample = createInteractiveList("cui-highlight");

export const CuiDocsListScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: "Add ul element and add class cui-list to it to style list elements:",
            example: GetTabbedPreview(listExample, "200px")
        },
        {
            name: "Small",
            description: "Reduce padding on list items by adding class cui-small:",
            example: GetTabbedPreview(listSmallExample, "200px")
        },
        {
            name: "Hover",
            description: "Bring item highlight to list item with cui-hover:",
            example: GetTabbedPreview(listHoverExample, "200px")
        },
        {
            name: "Stripped",
            description: "Highlight even list items by adding class cui-stripped:",
            example: GetTabbedPreview(listStrippedExample, "200px")
        },
        {
            name: "Bullet",
            description: "Add item bullet indicator with class cui-bullet:",
            example: GetTabbedPreview(listBulletExample, "200px")
        },
        {
            name: "Bullet shade",
            description: "Add item bullet indicator with class cui-bullet-shade:",
            example: GetTabbedPreview(listBulletShadeExample, "200px")
        },
        {
            name: "Interactive",
            description: "To create interactive list add cui-interactive to ul and have list items to inculde an anchor:",
            example: GetTabbedPreview(listInteractiveExample, "210px")
        },
        {
            name: "Interactive accent",
            description: "Style interactive list with accent colors:",
            example: GetTabbedPreview(listInteractiveAccentExample, "210px")
        },
        {
            name: "Interactive secondary",
            description: "Style interactive list with secondary colors:",
            example: GetTabbedPreview(listInteractiveSecondaryExample, "210px")
        },
        {
            name: "Inline",
            description: "List can be also styled as line list, where items are placed next to each other instead of on the top of another",
            example: GetTabbedPreview(listInlineExample, "100px")
        },
        {
            name: "Highlight",
            description: "Similar to interactive, but gives a bit other styling to active element. To set it, add class cui-highlight to main element",
            example: GetTabbedPreview(listHighlightExample, "210px")
        },
        {
            name: "CSS options",
            description: "Component name is list and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "print", description: "Adds print mode styling" },
                { name: "theme", description: "Adds theme color classes" },
                { name: "interactive", description: "Adds list interactive classes" },
                { name: "bullet", description: "Adds list bullet indicator classes" },
                { name: "bullet-shade", description: "Adds list bullet shade indicator classes" },
                { name: "hover", description: "Adds list hover option" },
                { name: "small", description: "Adds list small option" },
                { name: "inline", description: "Adds list inline option" },
                { name: "stripped", description: "Adds list stripped classes" },
                { name: "highlight", description: "Adds list highlight classes" },
            ]
        }
    ]

}