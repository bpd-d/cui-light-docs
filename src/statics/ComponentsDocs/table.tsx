import * as React from "react";
import { ParserNode } from "src/api/DocsElementParser/interfaces";
import { DocsScript } from "src/components/docs/base";
import { GetTabbedPreview } from "../../../src/components/preview/preview";

function createHeader(...names: string[]): ParserNode {
    let heads: ParserNode[] = [];
    names.forEach(name => {
        heads.push({
            tag: "th",
            text: name
        })
    })

    return {
        tag: "thead",
        children: [
            {
                tag: "tr",
                children: heads
            }
        ]
    }
}

const firstExample: ParserNode = {
    tag: "table",
    classes: ["cui-table"],
    children: [
        createHeader("Head 1", "Head 2", "Head 3")
    ]
}

export const CuiDocsTableScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Component brings styling to common table component and adds some modifiers which allow to customize user experience.
            To setup it, add class <span className="style-class">cui-table</span> to component table</>,
            example: GetTabbedPreview(firstExample, "200px")
        },
    ]
}