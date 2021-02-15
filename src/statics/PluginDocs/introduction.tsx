import * as React from "react";
import { DocsScript } from "src/components/docs/base";

export const CuiDocsPluginsIntroScript: DocsScript = {
    sections:
        [
            {
                name: "Plugins",
                description: <>Plugins provide extensions to cUI framework. They are initialized during framework initialization, provide features through all instance lifecycle and are destroyed during instance destruction.
                cUI also exposes API to for plugins - more details can be found in documentation, section API. Main idea standing behind plugins is that they provide features, but framework shall work just fine when they are not included in the package.</>
            }
        ]
}