import { CuiDocsComponents } from "../base";
import { CuiDocsAlertScript } from "./alert";
import { CuiDocsPluginsIntroScript } from "./introduction";
import { CuiDocsNotificationScript } from "./notification";
import { CuiDocsToastScript } from "./toast";

const pluginsList: CuiDocsComponents = {
    'introduction': { name: "Introduction", uri: '/docs/plugins/introduction', description: "", script: CuiDocsPluginsIntroScript },
    'toast': { name: "Toast", uri: "/docs/plugins/toast", description: "Shows lightweight information on the screen", script: CuiDocsToastScript },
    "alert": { name: "Alert", uri: "/docs/plugins/alert", description: "Easy to use, interactive dialog", script: CuiDocsAlertScript },
    'notification': { name: "Notification", uri: "/docs/plugins/notification", description: "Adds support for notification to library", script: CuiDocsNotificationScript }
}

export default pluginsList;