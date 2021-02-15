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

function createHeaderEx2(names: ExampleCell[], modifier?: string): ParserNode {
    return {
        tag: "thead",
        children: [createRowEx2("th", names, modifier)],
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
        children: children,
    }
}

function createRowEx2(childTag: string, names: ExampleCell[], modifier?: string): ParserNode {
    const children: ParserNode[] = names.map(cell => {

        return {
            tag: childTag,
            text: cell.name,
            classes: cell.modifier ? [cell.modifier] : []
        }
    })
    return {
        tag: "tr",
        children: children,
        classes: modifier ? [modifier] : undefined
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

const stickyHeaderExample: ParserNode = {
    tag: "div",
    classes: ["docs-table-sticky-container", "cui-overflow-y-auto"],
    children: [
        {
            tag: "table",
            classes: ['cui-table', "cui-divider", "cui-column-divider"],
            children: [
                createHeaderEx2([{ name: "Head 1", modifier: 'cui-background-default' }, { name: "Head 2", modifier: "cui-background-default" }, { name: "Head 3", modifier: "cui-background-default" }], 'cui-row-sticky'),
                createBody([
                    createRowEx("td", { name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }),
                    createRowEx("td", { name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }),
                    createRowEx("td", { name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }),
                    createRowEx("td", { name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }),
                ])
            ]
        }
    ]
}

const stickyColumnExample: ParserNode = {
    tag: "div",
    classes: ["docs-table-sticky-column-container", "cui-overflow-x-auto"],
    children: [
        {
            tag: "table",
            classes: ['cui-table', "cui-divider", "cui-column-divider", "cui-first-column-sticky"],
            children: [
                createHeaderEx({ name: "Head 1", modifier: 'cui-background-default element-width-100' }, { name: "Head 2", modifier: "element-width-100" }, { name: "Head 3", modifier: "element-width-100" }, { name: "Head 4", modifier: "element-width-100" }, { name: "Head 5", modifier: "element-width-100" }, { name: "Head 6", modifier: "element-width-100" }, { name: "Head 7", modifier: "element-width-100" }),
                createBody([
                    createRowEx("td", { name: "Item 1", modifier: 'cui-background-default' }, { name: "Item 2" }, { name: "Item 3" }, { name: "Item 4" }, { name: "Item 5" }, { name: "Item 6" }, { name: "Item 7" }),
                    createRowEx("td", { name: "Item 1", modifier: 'cui-background-default' }, { name: "Item 2" }, { name: "Item 3" }, { name: "Item 4" }, { name: "Item 5" }, { name: "Item 6" }, { name: "Item 7" }),
                    createRowEx("td", { name: "Item 1", modifier: 'cui-background-default' }, { name: "Item 2" }, { name: "Item 3" }, { name: "Item 4" }, { name: "Item 5" }, { name: "Item 6" }, { name: "Item 7" }),
                ])
            ]
        }
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
            example: GetTabbedPreview(thirdExample, "185px")
        },
        {
            name: "Column divider",
            description: <>To add column separators to table add class <span className="style-class">cui-column-divider</span> to main component:</>,
            example: GetTabbedPreview(fourthExample, "180px"),
        },
        {
            name: "Header",
            description: <>To change color of the header row, add class <span className="style-class">cui-header-inverse</span> to main component:</>,
            example: GetTabbedPreview(fifthExample, "180px"),
        },
        {
            name: "Theme",
            description: <>Table allows to change cell text colors to one of theme colors. To set it add class <span className="style-class">cui-accent</span> or <span className="style-class">cui-secondary</span> to choosen td or th cell element:</>,
            example: GetTabbedPreview(sixthExample, "180px"),
        },
        {
            name: "Alignment",
            description: <>By default, content of table cell is left-aligned. To changed it add class <span className="style-class">cui-center</span> or <span className="style-class">cui-right</span> to choosen td or th cell element to make content centered or right-aligned:</>,
            example: GetTabbedPreview(seventhExample, "185px"),
        },
        {
            name: "Sticky",
            description: <>This option brings some responsiveness to the table component.
            Depending on the choosen modifier it allows to stick row or column to parent component edge when scrolling.
            For example, you can make header row to stick to top when scrolling through the table vertically. It becomes handy for long data tables, so user can easily track table context and meaning of data in cell.
            To add sticky header to table add class <span className="style-class">cui-row-sticky</span> to header tr element. In similar matter, you can add the same class to any row in table body to achieve the same effect:</>,
            hint: {
                content: "Header will become sticky only when table's parent is limited in height and has overflow set to auto."
            },
            example: GetTabbedPreview(stickyHeaderExample, "155px"),
        },
        {
            name: "Sticky column",
            description: <>It is possible to also make first column sticky to the left table edge, so it will work in similar way to header, but in horizontal scrolling.
            To enable this behavior, add class <span className="style-class">cui-first-column-sticky</span> to table root element.</>,
            hint: {
                content: "Header will become sticky only when table's parent is limited in width and has overflow set to auto."
            },
            example: GetTabbedPreview(stickyColumnExample, "200px"),
        },
        {
            name: "Sticky cell",
            description: <>Previous options provided a shorthand for sticky options for most used cases. For more complex solution there are some modifiers provided: </>,
            list: [
                { name: "cui-cell-sticky", description: "To be set on specific cell (th or td). If set on th, it will stick to top by default. When set on td, it will stick to left." },
                { name: "cui-cell-sticky-top", description: "Tells exactly that cell shall stick to top edge" },
                { name: "cui-cell-sticky-left", description: "Tells exactly that cell shall stick to left edge" },
            ]
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