import * as React from "react";
import { DocsScript } from "src/components/docs/base";

export const CuiDocsAutoLightScript: DocsScript = {
    sections: [
        {
            name: "Usage",
            description: <>Plugin is used to detect system theme.
            It automatically sets light/dark theme based on OS theme.
            For detection it uses media query <span className="style-class">(prefers-color-scheme: dark)</span>.
            It is not supported on all operating systems so feature may not be reliable.</>
        }
    ]
}