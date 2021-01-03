import * as React from 'react'
import { ParserNode } from 'src/api/DocsElementParser/interfaces'
import { GetTabbedPreview } from '../../../src/components/preview/preview'
import { DocsScript } from 'src/components/docs/base'


const firstExample: ParserNode = {
    tag: "div",
    text: "Hover me",
    classes: ['cui-section', 'cui-hover']
}

export const CuiDocsHoverScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Hover adds an effect to the component which changes background to light shade color when user hovers or clicks it.
            To set up this effect add <span className="style-class">cui-hover</span> to target element. See example usage with section:</>,
            example: GetTabbedPreview(firstExample, "60px")
        },
        {
            name: "CSS options",
            description: "Component name is hover and supports following CSS build options:",
            list: [
                { name: "dark", description: "Adds dark mode styling" }
            ]
        }
    ]
}
