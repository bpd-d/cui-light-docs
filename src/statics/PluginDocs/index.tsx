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
    'toast': { name: "Toast", uri: "/docs/plugins/toast", description: "Shows lightweight information on the screen", script: CuiDocsToastScript, tags: ['event', 'info', 'interactive'] },
    "alert": { name: "Alert", uri: "/docs/plugins/alert", description: "Easy to use, interactive dialog", script: CuiDocsAlertScript, tags: ['modal', 'dialog', 'event'] },
    'notification': { name: "Notification", uri: "/docs/plugins/notification", description: "Adds support for notification to library", script: CuiDocsNotificationScript, tags: ['color', 'theme', 'signal', 'event', 'interactive'] },
    'resize': { name: "Resize", uri: "/docs/plugins/resize", description: "Brings window resize observer", script: CuiLightResizePluginDocs, tags: ['responsive', 'event'] },
    'move': { name: "Move", uri: "/docs/plugins/move", description: "Registers observer for global movement detection", script: CuiDocsMovePluginScript, tags: ['gesture', 'slide', 'swipe'] },
    'focus': { name: "Focus", uri: "/docs/plugins/focus", description: "Detect input source for CSS focus", script: CuiDocsFocusScript, tags: ['within', 'visible', 'input', 'form', 'highlight'] },
    'light': { name: "Auto light", uri: "/docs/plugins/light", description: "Automatically set theme based on system settings", script: CuiDocsAutoLightScript, tags: ['theme', 'dark'] },
    'print': { name: "Print", uri: "/docs/plugins/print", description: "Automatically detects print mode and sets proper theme", script: CuiDocsPrintScript },
    'click': { name: "Click", uri: "/docs/plugins/click", description: "Detects user click globally", script: CuiDocsClickScript, tags: ['close', 'interactive'] },
    'keys': { name: "Keys", uri: "/docs/plugins/keys", description: "Detects keyboard clicks globally", script: CuiDocsKeysScript, tags: ['close', 'interactive'] },
}

export default pluginsList;