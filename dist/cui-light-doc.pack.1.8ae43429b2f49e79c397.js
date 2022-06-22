(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{47:function(e,t,n){"use strict";n.r(t);var i=n(59);const a={tag:"group",children:[{tag:"object",text:"options",children:[{tag:"text",text:'title: "Title",'},{tag:"text",text:'message: "Message",'},{tag:"text",text:'onOk: () => { console.log("Ok") },'},{tag:"text",text:'onCancel: () => { console.log("Cancel") },'},{tag:"text",text:'onYes: () => { console.log("Yes") },'},{tag:"text",text:'onNo: () => { console.log("No") }'}]},{tag:"object",text:"data",children:[{tag:"text",text:'id: "id",'},{tag:"text",text:'type: "Info | OkCancel | YesNoCancel",'},{tag:"text",text:"options: options"}]},{tag:"text",text:'$cui.emit("alert", "~alert-plugin", data)'}]},s={sections:[{name:"Usage",description:"Alert is a special type of dialog. It can be used as information, Ok/Cancel or Yes/No/Cancel pop up. It provides a shorthand for simple interactive dialog, that may be used to inform end user about taken action or asking about decision in some cases.\n            See below examples",example:Object(i.b)({tag:"div",children:[{tag:"button",classes:["cui-button"],text:"Info",click:"plugins:alert_info"},{tag:"button",classes:["cui-button"],text:"OkCancel",click:"plugins:alert_ok_cancel"},{tag:"button",classes:["cui-button"],text:"YesNoCancel",click:"plugins:alert_yes_no_cancel"}]})},{name:"Options",description:"To create and show this component, call an event alert to alert-plugin and pass object that fills id, type and options containing title, message and callbacks:",list:[{name:"id",description:"element identifier, alse used in HTML DOM. Must be unique for different alert types."},{name:"type",description:"Info | OkCancel | YesNoCancel - creates dialog element that matches with layout and behaior to choosed type."},{name:"data",description:"object that keeps: title and message texts displayed in dialog. Also have number of callbacks that interact with alert: onOk, onCancel, onYes, onNo"}],hint:{title:"Keep id unique",content:"cUI tries to reuse alert if possible so it is important to use the same id in calls that point the same part of the program."},example:Object(i.d)(a)}]};var o=n(1);const l={sections:[{name:"Usage",description:o.createElement(o.Fragment,null,"Plugin is simply used for user click detection on the document. It is used by some components to detect click outside of target element. For example, component dialog uses this plugin for feature that closes component when user clicks outside of it.")},{name:"Event",description:o.createElement(o.Fragment,null,"Plugin emits an event every times user performs click. To attach to this event, use method ",o.createElement("span",{className:"style-class"},"on")," from cUI instance passing event name ",o.createElement("span",{className:"style-class"},"windowclick")," and callback:"),example:Object(i.d)({tag:"group",children:[{tag:"function",text:"onClick",attributes:{ev:"MouseEvent"}},{tag:"text",text:"$cui.on('windowclick', onClick)"}]})}]},c={sections:[{name:"Usage",description:o.createElement(o.Fragment,null,"Plugin is used to detect current input source, whether it is a touch, mouse or keyboard. Based on current input plugin sets class on a body element. In fact, this plugin is used as a polyfill for ",o.createElement("span",{className:"style-class"},":focus-visible")," component state. Based on class set by this plugin, corresponding CSS component adds or remove additional styling for focus state in the domcument.")},{name:"Initialization",description:o.createElement(o.Fragment,null,"During plugin initialization, you can pass class to be set on body for each type of input: "),list:[{name:"keybordClass",description:""},{name:"mouseClass",description:""},{name:"touchClass",description:""}]}]},r={sections:[{name:"Plugins",description:o.createElement(o.Fragment,null,"Plugins provide extensions to cUI framework. They are initialized during framework initialization, provide features through all instance lifecycle and are destroyed during instance destruction. cUI also exposes API to for plugins - more details can be found in documentation, section API. Main idea standing behind plugins is that they provide features, but framework shall work just fine when they are not included in the package.")}]},u={sections:[{name:"Usage",description:o.createElement(o.Fragment,null,"Plugin captures keydown event globally and reemits it via event bus. It is used by some components to capture whether user click certain key in order to take some action, e.g. closing a dialog.")},{name:"Event",description:o.createElement(o.Fragment,null,"Plugin emits event ",o.createElement("span",{className:"style-class"},"keydown"),". To attach to it use method ",o.createElement("span",{className:"style-class"},"on")," from cUI instance. Event passes following data: "),list:[{name:"event",description:"Keydown event"},{name:"timestamp",description:"Event timestamp"},{name:"source",description:"Event source"},{name:"name",description:"Event name"}],example:Object(i.d)({tag:"group",children:[{tag:"text",text:"import { ICuiKeyDownEvent } from './core/models/events'"},{tag:"function",text:"onKeyDown",attributes:{ev:"ICuiKeyDownEvent"}},{tag:"text",text:"$cui.on('keydown', onKeyDown);"}]})}]},m={sections:[{name:"Usage",description:o.createElement(o.Fragment,null,"Plugin is used to detect system theme. It automatically sets light/dark theme based on OS theme. For detection it uses media query ",o.createElement("span",{className:"style-class"},"(prefers-color-scheme: dark)"),". It is not supported on all operating systems so feature may not be reliable.")}]},d={sections:[{name:"Usage",description:o.createElement(o.Fragment,null,"Move plugin is used to detect mouse or touch movement on window. It fires up an ",o.createElement("span",{className:"style-class"},"global-move")," event when user perform a move. It is not a common mouse move operation. It starts detecting when user touches (or clicks) the window area. After first move, it emits two events: first indicating touch down, second indicating move. Then it emits an event every move until user releases touch or click. Last emit inidicates that release. It may have variety of use cases in components for slider implementation.")},{name:"Event",description:o.createElement(o.Fragment,null,"To attach to ",o.createElement("span",{className:"style-class"},"global-move")," event, you need to use method ",o.createElement("span",{className:"style-class"},"on")," from cUI instance and assign callback function. Each event passes follwing data:"),list:[{name:"x",description:"Pointer x position"},{name:"y",description:"Pointer y position"},{name:"moveX",description:"Indicates movementX"},{name:"moveY",description:"Indicates movementY"},{name:"type",description:"down | move | up"},{name:"target",description:"Provides current event target"},{name:"event",description:"Mouse or Touch event base"},{name:"timestamp",description:"Event timestamp"},{name:"name",description:"Event name"}],example:Object(i.d)({tag:"group",children:[{tag:"text",text:"import { ICuiMoveEvent } from './core/models/events'"},{tag:"function",text:"onMove",attributes:{ev:"ICuiMoveEvent"}},{tag:"text",text:"$cui.on('global-move', onMove)"}]})},{name:"Gestures",description:o.createElement(o.Fragment,null,"In addition to movement detection, plugin emits events related to simple swipe gestures. When user releases touch or click, it calculates whether total move value passed condition for gesture and emits proper event. Condition is calculated based on window height or width multiplied by ratio of 0.3, depending on swipe direction. Function favourites horizontal gestures so if detects left or right swipe, it releases event immediately without checking vertical directions. To attach for this event use method ",o.createElement("span",{className:"style-class"},"on")," from cUI instance and pass callback and one of following event names:"),list:[{name:"gesture-left",description:""},{name:"gesture-right",description:""},{name:"gesture-up",description:""},{name:"gesture-down",description:""}],example:Object(i.d)({tag:"group",children:[{tag:"text",text:"import { ICuiGestureEvent } from './core/models/events'"},{tag:"function",text:"onGesture",attributes:{ev:"ICuiGestureEvent"}},{tag:"text",text:"$cui.on('gesture-left', onGesture)"}]})}]},p={tag:"group",children:[{tag:"object",text:"options",children:[{tag:"text",text:'id: "id",'},{tag:"text",text:'title: "Title",'},{tag:"text",text:'message: "Message",'},{tag:"text",text:'auto: "true",'},{tag:"text",text:'type: "accent" | "secondary" | "error" | "warning" | "success" | "default",'},{tag:"text",text:'actions: [{ name: "Name", callback: () => void }]'}]},{tag:"text",text:'$cui.emit("notify", "~notification-plugin", options)'}]},g={sections:[{name:"Usage",description:o.createElement(o.Fragment,null,"Notifications bring floating elements to cUI. They provide variety of options including setting of additional message and actions. It also comes with color options. Notifications can be styles with theme and signal colors. See examples below: "),example:Object(i.b)({tag:"div",children:[{tag:"button",classes:["cui-button"],text:"Notify",click:"plugins:notify_base"},{tag:"button",classes:["cui-button"],text:"With description",click:"plugins:notify_description"},{tag:"button",classes:["cui-button"],text:"With action",click:"plugins:notify_action"},{tag:"button",classes:["cui-button"],text:"With type",click:"plugins:notify_type"},{tag:"button",classes:["cui-button"],text:"No self close",click:"plugins:notify_no_close"}]})},{name:"Options",description:o.createElement(o.Fragment,null,"To create notification, emit an event called ",o.createElement("span",{className:"style-class"},"notify")," to notification-plugin and provde object with options described below:"),list:[{name:"id",description:"Notification id - must be unique"},{name:"title",description:"Notification title - required"},{name:"message",description:"Notification message - optional"},{name:"type",description:"Notification type - optional - one of accent, secondary, error, warning, success"},{name:"auto",description:"Turn off/on automatic close on notifiaction element - optional - must be strictly set to false to turn auto-close"},{name:"actions",description:"List of actions with callback put on notification footer"}],example:Object(i.d)(p)},{name:"Events",description:o.createElement(o.Fragment,null,"For each showed notifiaction, plugin emits an event ",o.createElement("span",{className:"style-class"},"notified")," with the same data as received in received notify event. Additionally it adds field ",o.createElement("span",{className:"style-element"},"dissmissed")," which holds information whether notification was closed by the user or automatically. Field type is boolean. It is set to true when user clicks close or action, false otherwise.")}]},f={sections:[{name:"Usage",description:"Plugin is used for automated detection of print mode in the document.\n            It sets cui-print class on the document body to enable reduced colors theme on all cUI elements.\n            Class is taken off once, browser goes off the print mode"}]},h={sections:[{name:"Usage",description:o.createElement(o.Fragment,null,"Plugin registers window resize observer that emits an event each time window size changes. It doesn't fire on each pixel change. It is emitted only on certain breakpoints, similar to these used in CSS for responsive components. Observer supports four breakpoints:"),list:[{name:"none",description:"[< 640px] - returned for smallest screens"},{name:"small",description:"[>= 640px] - returned for small screens"},{name:"medium",description:"[>= 960px] - returned for medium screens"},{name:"large",description:"[>= 1200px] - returned for large screens"},{name:"xlarge",description:"[>= 1600px] - returned for largest screens"}]},{name:"Initialization",description:o.createElement(o.Fragment,null,"Plugin constructor allows to set following properties during initialization:"),list:[{name:"resizeThreshold",description:"[performance] tells how often (in px) observer shall recalculate data during resize"}]},{name:"Event",description:o.createElement(o.Fragment,null,"Plugin fires event ",o.createElement("span",{className:"style-class"},"resize")," globally with following data. To attach to this event use method on from cUI instance."),list:[{name:"current",description:"Current window size"},{name:"previous",description:"Previous window size"},{name:"width",description:"Current window width"},{name:"height",description:"Current window height"},{name:"timestamp",description:"Event timestamp"},{name:"name",description:"Event name"},{name:"source",description:"Event source"}],example:Object(i.d)({tag:"group",children:[{tag:"function",text:"onResize",attributes:{ev:"CuiResizeData"}},{tag:"text",text:"$cui.on('resize', onResize)"}]}),hint:{content:"Event is called only when window is resizing, to get initial value of screen size call calcWindowSize(window.innerWidth) from module core/utils/functions"}}]},v={tag:"text",text:'window.$cui.emit("toast", \'~toast-plugin\', "Lorem ipsum");'},w={introduction:{name:"Introduction",uri:"/docs/plugins/introduction",description:"",script:r},toast:{name:"Toast",uri:"/docs/plugins/toast",description:"Shows lightweight information on the screen",script:{sections:[{name:"Usage",description:o.createElement(o.Fragment,null,"Plugin provides access to simple component which is displayed for short period of time on the bottom part of the screen. It can show simple, short text data. It can be used to notify user about event occured in the app. "),example:Object(i.b)({tag:"button",classes:["cui-button","cui-default"],text:"Show Toast",click:"plugins:toast"})},{name:"Implementation",description:o.createElement(o.Fragment,null,"To call for toast use cUI event bus. Emit event ",o.createElement("span",{className:"style-class"},"toast")," with message to be displayed in element: "),example:Object(i.d)(v),hint:{title:"Important",content:"You can call only one toast at the time. If there is any toast showing on the screen, new calls will be ignored!"}}]},tags:["event","info","interactive"]},alert:{name:"Alert",uri:"/docs/plugins/alert",description:"Easy to use, interactive dialog",script:s,tags:["modal","dialog","event"]},notification:{name:"Notification",uri:"/docs/plugins/notification",description:"Adds support for notification to library",script:g,tags:["color","theme","signal","event","interactive"]},resize:{name:"Resize",uri:"/docs/plugins/resize",description:"Brings window resize observer",script:h,tags:["responsive","event"]},move:{name:"Move",uri:"/docs/plugins/move",description:"Registers observer for global movement detection",script:d,tags:["gesture","slide","swipe"]},focus:{name:"Focus",uri:"/docs/plugins/focus",description:"Detect input source for CSS focus",script:c,tags:["within","visible","input","form","highlight"]},light:{name:"Auto light",uri:"/docs/plugins/light",description:"Automatically set theme based on system settings",script:m,tags:["theme","dark"]},print:{name:"Print",uri:"/docs/plugins/print",description:"Automatically detects print mode and sets proper theme",script:f},click:{name:"Click",uri:"/docs/plugins/click",description:"Detects user click globally",script:l,tags:["close","interactive"]},keys:{name:"Keys",uri:"/docs/plugins/keys",description:"Detects keyboard clicks globally",script:u,tags:["close","interactive"]}};t.default=w},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return N})),n.d(t,"d",(function(){return I})),n.d(t,"c",(function(){return C})),n.d(t,"b",(function(){return F}));var i,a=n(1),s=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},o=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class l{constructor(e){i.set(this,void 0),s(this,i,e)}build(e){return o(this,i).parse(e,0)}}function c(e){return a.createElement(a.Fragment,null,e.node.children&&e.node.children.length>0?a.createElement(m,{node:e.node,level:e.level}):a.createElement(u,{node:e.node,level:e.level}))}function r(e){return a.createElement(a.Fragment,null,function(e){switch(e.node.tag){case"function":return i=e,a.createElement(a.Fragment,null,a.createElement("span",null,a.createElement("span",{className:i.level>0?"cui-indent-"+i.level:void 0},"function ",a.createElement("span",{className:"cui-tag"},i.node.text),"(",function(e){let t=e&&function(e){let t=[];for(let n in e)t.push(a.createElement(a.Fragment,null,a.createElement("span",{key:n,className:"cui-var"},n),a.createElement("span",null,":",e[n])));return t}(e),n=t?t.length:0;return a.createElement(a.Fragment,null,t.map((e,t)=>t<n-1?a.createElement(a.Fragment,null,e,", "):e))}(i.node.attributes),") {")),i.node.children&&i.node.children.map((e,t)=>a.createElement(r,{key:t,node:e,level:i.level+1})),a.createElement("span",null,a.createElement("span",{className:i.level>0?"cui-indent-"+i.level:""},"}")));case"group":return function(e){return a.createElement(a.Fragment,null,e.node.children.map((t,n)=>a.createElement(r,{key:n,node:t,level:e.level})))}(e);case"object":return function(e){return a.createElement(a.Fragment,null,a.createElement("span",null,a.createElement("span",{className:e.level>0?"cui-indent-"+e.level:void 0},"const ",a.createElement("span",{className:"cui-tag"},e.node.text)," = {")),e.node.children&&e.node.children.map((t,n)=>a.createElement(r,{key:n,node:t,level:e.level+1})),a.createElement("span",null,a.createElement("span",{className:e.level>0?"cui-indent-"+e.level:""},"}")))}(e);default:return t=e.node,n=e.level,a.createElement("span",null,a.createElement("span",{className:n>0?"cui-indent-"+n:""},t.text))}var t,n,i}(e))}function u(e){return a.createElement(a.Fragment,null,a.createElement("span",null,a.createElement("span",{className:e.level>0?"cui-indent-"+e.level:""},"<",a.createElement("span",{className:"cui-tag"},e.node.tag),a.createElement(d,{classes:e.node.classes}),a.createElement(p,{attributes:e.node.attributes}),">"),a.createElement("span",null,e.node.text),a.createElement("span",null,"</",a.createElement("span",{className:"cui-tag"},e.node.tag),">")))}function m(e){return a.createElement(a.Fragment,null,a.createElement("span",null,a.createElement("span",{className:e.level>0?"cui-indent-"+e.level:""},"<",a.createElement("span",{className:"cui-tag"},e.node.tag),a.createElement(d,{classes:e.node.classes}),a.createElement(p,{attributes:e.node.attributes}),">")),e.node.children&&e.node.children.map((t,n)=>a.createElement(c,{key:n,node:t,level:e.level+1})),a.createElement("span",null,a.createElement("span",{className:e.level>0?"cui-indent-"+e.level:""},"</",a.createElement("span",{className:"cui-tag"},e.node.tag),">")))}function d(e){let t=e.classes?a.createElement("span",{className:""},' class="',a.createElement("span",{className:"cui-var"},e.classes.join(" ")),'"'):"";return a.createElement(a.Fragment,null,t)}function p(e){let t=e.attributes?function(e){let t=[];for(let n in e)t.push(a.createElement("span",{key:n}," ",n,'="',a.createElement("span",{className:"cui-var"},e[n]),'"'));return t}(e.attributes):"";return a.createElement(a.Fragment,null,t)}i=new WeakMap;var g=n(18);const f=Object(g.c)();class h{constructor(){this.groups=[]}add(...e){e&&0!==e.length&&e.forEach(e=>this.addSingle(e))}addSingle(e,t){if(!e||!e.prefix)return;let n=this.groups.findIndex(t=>t.prefix===e.prefix);n<0&&this.groups.push(e),!0===t&&(this.groups[n]=e)}get(e){return e?this.groups.find(t=>t.prefix===e):void 0}call(e,...t){let n=e.split(":");if(n.length<2)return;let i=this.get(n[0].trim());if(!i)return;const a=i.callbacks[n[1].trim()];a&&a(...t)}}var v=function(e){const t=new h;return e&&Object(g.d)((e,n)=>{t.addSingle({prefix:e,callbacks:n})},e),t}({plugins:{alert_info:()=>{const e={id:"alert_base_dialog",type:"Info",options:{title:"Information",message:"Here is some message for the user",onOk:()=>{window.$cui.emit("toast","~toast-plugin","User confirmed")}}};window.$cui.emit("alert","~alert-plugin",e)},alert_ok_cancel:()=>{const e={id:"alert_oc_dialog",type:"OkCancel",options:{title:"Confirm",message:"Here is some message for the user to confirm some action",onOk:()=>{window.$cui.emit("toast","~toast-plugin","User confirmed")},onCancel:()=>{window.$cui.emit("toast","~toast-plugin","User canceled")}}};window.$cui.emit("alert","~alert-plugin",e)},alert_yes_no_cancel:()=>{const e={id:"alert_ync_dialog",type:"YesNoCancel",options:{title:"Decision",message:"Here is some message for the user to make some decision",onYes:()=>{window.$cui.emit("toast","~toast-plugin","User agreed")},onNo:()=>{window.$cui.emit("toast","~toast-plugin","User disagreed")},onCancel:()=>{window.$cui.emit("toast","~toast-plugin","User canceled")}}};window.$cui.emit("alert","~alert-plugin",e)},toast:()=>{window.$cui.emit("toast","~toast-plugin","Lorem ipsum")},notify_base:()=>{window.$cui.emit("notify","~notification-plugin",{id:"notify-001"+Math.random(),title:"Notification"})},notify_description:()=>{window.$cui.emit("notify","~notification-plugin",{id:"notify-002"+Math.random(),title:"Notification",message:"Notification message"})},notify_type:()=>{window.$cui.emit("notify","~notification-plugin",{id:"notify-003"+Math.random(),title:"Notification success",type:"success"})},notify_action:()=>{window.$cui.emit("notify","~notification-plugin",{id:"notify-004"+Math.random(),title:"Notification",actions:[{name:"Toast",callback:()=>{window.$cui.emit("toast","~toast-plugin","From notify")}}]})},notify_no_close:()=>{window.$cui.emit("notify","~notification-plugin",{id:"notify-005"+Math.random(),title:"No auto close",auto:!1})}}});class w{parse(e,t){var n,i;let s=void 0,o=null!==(n=e.classes)&&void 0!==n?n:[],l=null!==(i=e.attributes)&&void 0!==i?i:{},c=void 0;return e.text&&(s=[e.text]),e.children&&(s=null!=s?s:[],e.children.forEach(e=>{s.push(this.parse(e,t+1))})),e.styleClass&&o.push(e.styleClass),e.click&&(c=()=>{v.call(e.click)}),a.createElement(e.tag,Object.assign({className:o.join(" "),id:e.id,key:e.tag+t+f.next().value,onClick:c||void 0},l),s)}}class b{parse(e,t){let n=[];return e.text&&n.push(e.text),a.createElement(c,{node:e,level:0})}}class y{parse(e,t){return a.createElement(r,{node:e,level:0})}}function E(e){return a.createElement("div",{className:"cui-flex-grid cui-child-width-1-1 cui-child-width-1-2--s"},a.createElement("div",null,e.element),a.createElement("div",{className:"cui-background-shade"},a.createElement("pre",null,e.code)))}function x(e){return a.createElement("div",{className:"cui-code cui-format cui-line-counter"},e.js)}function k(e){const t=f.next().value;let n="tab-"+t,i="switch-"+t,s=e.height?"; height:"+e.height:"";return a.createElement("div",{className:""},a.createElement("ul",{className:"cui-tab","cui-switcher":`target: #${i}${s}`,id:n},a.createElement("li",null,a.createElement("a",{href:"#"},"Preview")),e.code&&a.createElement("li",null," ",a.createElement("a",{href:"#"},"HTML")),e.js&&a.createElement("li",null," ",a.createElement("a",{href:"#"},"Code"))),a.createElement("ul",{className:"cui-switch cui-margin-top","cui-switch":`links: #${n} > li${s}`,id:i},a.createElement("li",{className:"cui-active"},a.createElement("div",{className:"preview-wrapper"},e.element)),e.code&&a.createElement("li",null,a.createElement("div",{className:"cui-code cui-format cui-line-counter cui-overflow-x-auto"},e.code)),e.js&&a.createElement("li",null,a.createElement("div",{className:"cui-code cui-format cui-line-counter"},e.js))))}function N(e,t){switch(t){case"aside":return a.createElement(E,{code:e.code,element:e.element});default:return a.createElement(k,{code:e.code,element:e.element,js:e.js,height:e.height})}}function I(e){return a.createElement(x,{js:new l(new y).build(e)})}function C(e,t){return N({code:new l(new b).build(e),element:new l(new w).build(e),height:t},"tabbed")}function F(e){return t={element:new l(new w).build(e)},a.createElement("div",{className:"cui-flex-center"},t.element);var t}}}]);
//# sourceMappingURL=cui-light-doc.pack.1.8ae43429b2f49e79c397.js.map