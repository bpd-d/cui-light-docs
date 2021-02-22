import { CuiDocsComponents } from "../base";
import { CuiDocsAlertScript } from "./alert";
import { CuiDocsClickScript } from "./click";
import { CuiDocsFocusScript } from "./focus";
import { CuiDocsPluginsIntroScript } from "./introduction";
import { CuiDocsKeysScript } from "./keys";
import { CuiDocsAutoLightScript } from "./light";
import { CuiDocsMovePluginScript } from "./move";
import { CuiDocsNotificationScript } from "./notification";
import { CuiDocsPrintScript } from "./print";
import { CuiLightResizePluginDocs } from "./resize";
import { CuiDocsToastScript } from "./toast";

const pluginsList: CuiDocsComponents = {
    'introduction': { name: "Introduction", uri: '/docs/plugins/introduction', description: "", script: CuiDocsPluginsIntroScript },
    'toast': { name: "Toast", uri: "/docs/plugins/toast", description: "Shows lightweight information on the screen", script: CuiDocsToastScript },
    "alert": { name: "Alert", uri: "/docs/plugins/alert", description: "Easy to use, interactive dialog", script: CuiDocsAlertScript },
    'notification': { name: "Notification", uri: "/docs/plugins/notification", description: "Adds support for notification to library", script: CuiDocsNotificationScript },
    'resize': { name: "Resize", uri: "/docs/plugins/resize", description: "Brings window resize observer", script: CuiLightResizePluginDocs },
    'move': { name: "Move", uri: "/docs/plugins/move", description: "Registers observer for global movement detection", script: CuiDocsMovePluginScript },
    'focus': { name: "Focus", uri: "/docs/plugins/focus", description: "Detect input source for CSS focus", script: CuiDocsFocusScript },
    'light': { name: "Auto light", uri: "/docs/plugins/light", description: "Automatically set theme based on system settings", script: CuiDocsAutoLightScript },
    'print': { name: "Print", uri: "/docs/plugins/print", description: "Automatically detects print mode and sets proper theme", script: CuiDocsPrintScript },
    'click': { name: "Click", uri: "/docs/plugins/click", description: "Detects user click globally", script: CuiDocsClickScript },
    'keys': { name: "Keys", uri: "/docs/plugins/keys", description: "Detects keyboard clicks globally", script: CuiDocsKeysScript },
}

export default pluginsList;