import { DocsScript } from "src/components/docs/base";

export const CuiDocsPrintScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: `Plugin is used for automated detection of print mode in the document.
            It sets cui-print class on the document body to enable reduced colors theme on all cUI elements.
            Class is taken off once, browser goes off the print mode`
        }
    ]
}