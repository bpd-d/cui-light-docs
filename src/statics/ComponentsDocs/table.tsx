import * as React from "react";
import { ParserNode } from "src/api/DocsElementParser/interfaces";
import { DocsScript } from "src/components/docs/base";
import { GetTabbedPreview } from "../../../src/components/preview/preview";

interface ExampleCell {
    name: string;
    modifier?: string;
}

function createHeaderEx(...names: ExampleCell[]): ParserNode {
    return {
        tag: "thead",
        children: [createRowEx("th", ...names)]
    }
}

function createHeader(...names: string[]): ParserNode {
    return {
        tag: "thead",
        children: [createRow("th", ...names)]
    }
}

function createBody(rows: ParserNode[]): ParserNode {
    return {
        tag: "tbody",
        children: rows
    }
}

function createRowEx(childTag: string, ...names: ExampleCell[]): ParserNode {
    const children: ParserNode[] = names.map(cell => {

        return {
            tag: childTag,
            text: cell.name,
            classes: cell.modifier ? [cell.modifier] : []
        }
    })
    return {
        tag: "tr",
        children: children
    }
}

function createRow(childTag: string, ...names: string[]): ParserNode {
    const children: ParserNode[] = names.map(name => {
        return {
            tag: childTag,
            text: name
        }
    })
    return {
        tag: "tr",
        children: children
    }
}

function createTable(modifier?: string): ParserNode {
    let classes = ["cui-table"];
    if (modifier) {
        classes.push(modifier);
    }


    return {
        tag: "table",
        classes: classes,
        children: [
            createHeader("Head 1", "Head 2", "Head 3"),
            createBody([
                createRow("td", "Item 1", "Item 2", "Item 3"),
                createRow("td", "Item 1", "Item 2", "Item 3"),
                createRow("td", "Item 1", "Item 2", "Item 3"),
            ])
        ]
    }
}

const firstExample: ParserNode = createTable();
const secondExample: ParserNode = createTable("cui-stripped");
const thirdExample: ParserNode = createTable("cui-divider");
const fourthExample: ParserNode = createTable("cui-column-divider");
const fifthExample: ParserNode = createTable("cui-header-inverse");

const sixthExample: ParserNode = {
    tag: "table",
    classes: ['cui-table'],
    children: [
        createHeaderEx({ name: "Head 1" }, { name: "Head 2", modifier: "cui-accent" }, { name: "Head 3", modifier: "cui-secondary" }),
        createBody([
            createRowEx("td", { name: "Item 1" }, { name: "Item 2", modifier: "cui-accent" }, { name: "Item 3", modifier: "cui-secondary" }),
            createRowEx("td", { name: "Item 1" }, { name: "Item 2", modifier: "cui-accent" }, { name: "Item 3", modifier: "cui-secondary" }),
            createRowEx("td", { name: "Item 1" }, { name: "Item 2", modifier: "cui-accent" }, { name: "Item 3", modifier: "cui-secondary" }),
        ])
    ]
}

const seventhExample: ParserNode = {
    tag: "table",
    classes: ['cui-table', "cui-divider", "cui-column-divider"],
    children: [
        createHeaderEx({ name: "Head 1" }, { name: "Head 2", modifier: "cui-center" }, { name: "Head 3", modifier: "cui-right" }),
        createBody([
            createRowEx("td", { name: "Item 1" }, { name: "Item 2", modifier: "cui-center" }, { name: "Item 3", modifier: "cui-right" }),
            createRowEx("td", { name: "Item 1" }, { name: "Item 2", modifier: "cui-center" }, { name: "Item 3", modifier: "cui-right" }),
            createRowEx("td", { name: "Item 1" }, { name: "Item 2", modifier: "cui-center" }, { name: "Item 3", modifier: "cui-right" }),
        ])
    ]
}

export const CuiDocsTableScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Component brings styling to common table component and adds some modifiers which allow to customize user experience.
            To setup it, add class <span className="style-class">cui-table</span> to component table</>,
            example: GetTabbedPreview(firstExample, "180px")
        },
        {
            name: "Stripped",
            description: <>To highlight even row add class <span className="style-class">cui-stripped</span> to main component:</>,
            example: GetTabbedPreview(secondExample, "180px")
        },
        {
            name: "Divider",
            description: <>Default table styling comes with no row dividers. To make them visible, add class <span className="style-class">cui-divider</span> to main component:</>,
            example: GetTabbedPreview(thirdExample, "180px")
        },
        {
            name: "Column divider",
            description: <>To add column separators to table add class <span className="style-class">cui-column-divider</span> to main component:</>,
            example: GetTabbedPreview(fourthExample, "180px")
        },
        {
            name: "Header",
            description: <>To change color of the header row, add class <span className="style-class">cui-header-inverse</span> to main component:</>,
            example: GetTabbedPreview(fifthExample, "180px"),
            hint: {
                title: "Sticky",
                content: "By adding class \"cui-header-sticky\" you can make header stick to the top of the component when scrolling through table. To make it work table must be wrapped container with fixed height and overflow enabled"
            }
        },
        {
            name: "Theme",
            description: <>Table allows to change cell text colors to one of theme colors. To set it add class <span className="style-class">cui-accent</span> or <span className="style-class">cui-secondary</span> to choosen td or th cell element:</>,
            example: GetTabbedPreview(sixthExample, "180px"),
        },
        {
            name: "Alignment",
            description: <>By default, content of table cell is left-aligned. To changed it add class <span className="style-class">cui-center</span> or <span className="style-class">cui-right</span> to choosen td or th cell element to make content centered or right-aligned:</>,
            example: GetTabbedPreview(seventhExample, "180px"),
        },
        {
            name: "CSS options",
            description: "Component name is table and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" },
                { name: "print", description: "Adds print mode styling" },
                { name: "theme", description: "Adds theme color classes" },
                { name: "align", description: "Adds cell alignment classes" },
                { name: "sticky", description: "Adds header sticky class" },
                { name: "stripped", description: "Adds rows stripped class" },
                { name: "inverse", description: "Adds header inverse class" },
                { name: "divider", description: "Adds divider classes" },
            ]
        }
    ]
}