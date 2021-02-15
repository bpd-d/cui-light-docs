import { CuiDocsComponents } from "../base";
import { CuiDocsPluginsIntroScript } from "./introduction";
import { CuiDocsToastScript } from "./toast";

const pluginsList: CuiDocsComponents = {
    'introduction': { name: "Introduction", uri: '/docs/plugins/introduction', description: "", script: CuiDocsPluginsIntroScript },
    'toast': { name: "Toast", uri: "/docs/plugins/toast", description: "Shows lightweight information on the screen", script: CuiDocsToastScript },
}

export default pluginsList;