!function(e){function t(t){for(var n,r,i=t[0],l=t[1],s=t[2],u=0,m=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(d&&d(t);m.length;)m.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(n=!1)}n&&(c.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},o={0:0},c=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=n);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.src=function(e){return r.p+"cui-light-doc.pack."+({}[e]||e)+".js"}(e);var l=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(s);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",l.name="ChunkLoadError",l.type=n,l.request=c,a[1](l)}o[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=l;c.push([54,1]),a()}({14:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return d}));var n,o,c=function(e,t,a){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,a),a},r=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};const i="RECENTS",l="ADD_RECENT",s="LOAD_RECENTS";class d{constructor(e){n.set(this,void 0),o.set(this,void 0),c(this,n,e),c(this,o,5)}mutate(e,t){if(!t)return e;switch(t.action){case l:let a=e.recents;a.length>=5&&a.shift(),a.findIndex(e=>e.name===t.data.name)<0&&(e={recent:t.data,recents:[...a,t.data]}),r(this,n).setRecents(e.recents);break;case s:if(!e.recents||0===e.recents.length){let t=r(this,n).getAllRecents();e={recents:null!=t?t:[],recent:t?t[t.length-1]:void 0}}break;case"CLEAR_RECENTS":e={recent:void 0,recents:[]},r(this,n).clearRecents()}return e}}n=new WeakMap,o=new WeakMap},15:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return l}));var n=function(e,t,a,n){return new(a||(a=Promise))((function(o,c){function r(e){try{l(n.next(e))}catch(e){c(e)}}function i(e){try{l(n.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,i)}l((n=n.apply(e,t||[])).next())}))};function o(e){return e&&e.length>0?e.charAt(0).toUpperCase()+e.slice(1):e}function c(e){return n(this,void 0,void 0,(function*(){return e?window.navigator&&window.navigator.clipboard?function(e){return n(this,void 0,void 0,(function*(){let t=null;try{yield navigator.clipboard.writeText(e),t=e}catch(e){t=null}return t}))}(e):function(e){return n(this,void 0,void 0,(function*(){let t=document.createElement("textarea"),a=null;t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="2em",t.style.height="2em",t.style.padding="0",t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",t.value=e,document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy");a=e}catch(e){a=null}return document.body.removeChild(t),a}))}(e):null}))}function*r(){let e=0;for(;;){((yield e++)||e>2e5)&&(e=0)}}function i(e,t){if(t)for(let a in t)t.hasOwnProperty(a)&&e(a,t[a])}function l(e){let t=[];if(!e)return t;for(let a in e)e.hasOwnProperty(a)&&t.push(a);return t}},28:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(2);function o(e){var t;let a="cui-container cui-center";const o=null!==(t=e.text)&&void 0!==t?t:"Loading...";return e.classes&&(a+=" "+e.classes),n.createElement("div",{className:a},o)}},31:function(e,t,a){"use strict";function n(e){window.$cui.emit("toast","~toast-plugin",e)}a.d(t,"a",(function(){return n}))},34:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(2),o=a(9),c=a(15),r=a(35);function i(e){var t;const[a,i]=n.useState([]),l=e.shouldClose&&!0,[s,d]=n.useState(void 0);return n.useEffect(()=>{Object(r.a)().then(t=>{var a;i(e.sort?(a=t,Object(c.e)(a).sort().map(e=>{let t=a[e];return n.createElement("li",{key:e},n.createElement(o.a,{url:t.uri,name:t.name,shouldClose:l}))})):function(e){const t=[];return Object(c.d)((e,a)=>{a&&t.push(n.createElement("li",{key:e},n.createElement(o.a,{url:a.uri,name:a.name,shouldClose:l})))},e),t}(t))},e=>{d(e.message)})},[e.sort,s]),s?n.createElement("div",{className:"cui-text-error"},s):n.createElement(n.Fragment,null,n.createElement("ul",{className:"cui-list cui-interactive animated-list "+(null!==(t=e.class)&&void 0!==t?t:"")},a))}},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=function(e,t,a,n){return new(a||(a=Promise))((function(o,c){function r(e){try{l(n.next(e))}catch(e){c(e)}}function i(e){try{l(n.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,i)}l((n=n.apply(e,t||[])).next())}))};function o(){return n(this,void 0,void 0,(function*(){return(yield a.e(10).then(a.bind(null,55))).default}))}},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return r}));var n=a(17),o=a(14);function c(e,t){n.a.performStateAction(o.d,{action:o.a,data:{name:e,url:t}})}function r(){n.a.performStateAction(o.d,{action:o.b})}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(2),o=a(16);function c(e){var t,a;const[c,r]=n.useState("");function i(t){r(t),Object(o.a)(e.onUpdate)&&e.onUpdate(t)}return n.useEffect(()=>{r(e.value)},[e.value]),n.createElement("div",{className:null!==(t="cui-input-mix "+e.className)&&void 0!==t?t:""},n.createElement("input",{type:"text",className:"cui-input",placeholder:null!==(a=e.filter)&&void 0!==a?a:"Filter",value:c,onChange:function(e){i(e.target.value)},disabled:e.disabled}),(Object(o.a)(c)||e.alwaysShow)&&n.createElement("a",{className:"cui-icon","cui-icon":"clear",onClick:()=>i("")}))}},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=[{name:"Accordion",code:"accordion",category:"controls"},{name:"Album",code:"album",category:"controls"},{name:"Arrow down",code:"arrow_down",category:"navigation"},{name:"Arrow left",code:"arrow_left",category:"navigation"},{name:"Arrow right",code:"arrow_right",category:"navigation"},{name:"Arrow up",code:"arrow_up",category:"navigation"},{name:"Backward",code:"backward",category:"navigation"},{name:"Bag",code:"bag",category:"all"},{name:"Ban 2",code:"ban_2",category:"all"},{name:"Ban",code:"ban",category:"all"},{name:"Base",code:"base",category:"all"},{name:"Battery empty",code:"battery_empty",category:"controls"},{name:"Battery low",code:"battery_low",category:"controls"},{name:"Battery medium",code:"battery_medium",category:"controls"},{name:"Battery",code:"battery",category:"controls"},{name:"Bell",code:"bell",category:"controls"},{name:"Bookmark",code:"bookmark",category:"controls"},{name:"Calendar",code:"calendar",category:"controls"},{name:"Calendar 2",code:"calendar_2",category:"controls"},{name:"Calendar 3",code:"calendar_3",category:"controls"},{name:"Camera",code:"camera",category:"controls"},{name:"Card",code:"card",category:"controls"},{name:"Cart",code:"cart",category:"controls"},{name:"Cast",code:"cast",category:"controls"},{name:"Checkmark",code:"checkmark",category:"controls"},{name:"Chevron down",code:"chevron_down",category:"navigation"},{name:"Chevron left",code:"chevron_left",category:"navigation"},{name:"Chevron right",code:"chevron_right",category:"navigation"},{name:"Chevron up",code:"chevron_up",category:"navigation"},{name:"Chevron small down",code:"chevron_small_down",category:"navigation"},{name:"Chevron small left",code:"chevron_small_left",category:"navigation"},{name:"Chevron small right",code:"chevron_small_right",category:"navigation"},{name:"Chevron small up",code:"chevron_small_up",category:"navigation"},{name:"Clear",code:"clear",category:"controls"},{name:"Clock",code:"clock",category:"controls"},{name:"Close",code:"close",category:"controls"},{name:"Close small",code:"close_small",category:"controls"},{name:"Code",code:"code",category:"controls"},{name:"Comment 2",code:"comment_2",category:"editor"},{name:"Comment 3",code:"comment_3",category:"editor"},{name:"Comment 4",code:"comment_4",category:"editor"},{name:"Comment 5",code:"comment_5",category:"editor"},{name:"Comment",code:"comment",category:"editor"},{name:"Copy",code:"copy",category:"controls"},{name:"Credit",code:"credit",category:"controls"},{name:"Christmas tree",code:"christmas_tree",category:"all"},{name:"Cursor",code:"cursor",category:"controls"},{name:"Devices desktop",code:"devices_desktop",category:"devices"},{name:"Devices laptop",code:"devices_laptop",category:"devices"},{name:"Devices phone_2",code:"devices_phone_2",category:"devices"},{name:"Devices phone",code:"devices_phone",category:"devices"},{name:"Devices tablet_2",code:"devices_tablet_2",category:"devices"},{name:"Devices tablet",code:"devices_tablet",category:"devices"},{name:"Devices tv",code:"devices_tv",category:"devices"},{name:"Devices watch",code:"devices_watch",category:"devices"},{name:"Download",code:"download",category:"files"},{name:"Dumbbell",code:"dumbbell",category:"social"},{name:"Dumbbell 2",code:"dumbbell_2",category:"social"},{name:"Edit",code:"edit",category:"controls"},{name:"Emoji blink",code:"emoji_blink",category:"editor"},{name:"Emoji sad",code:"emoji_sad",category:"editor"},{name:"Emoji smile",code:"emoji_smile",category:"editor"},{name:"Error",code:"error",category:"signal"},{name:"Expand",code:"expand",category:"controls"},{name:"Facebook_2",code:"facebook_2",category:"social"},{name:"Facebook",code:"facebook",category:"social"},{name:"Feed",code:"feed",category:"social"},{name:"File 2",code:"file_2",category:"files"},{name:"File calc",code:"file_calc",category:"files"},{name:"File doc",code:"file_doc",category:"files"},{name:"File text",code:"file_text",category:"files"},{name:"File",code:"file",category:"files"},{name:"Folder",code:"folder",category:"files"},{name:"Forward",code:"forward",category:"navigation"},{name:"Future",code:"future",category:"navigation"},{name:"Gift",code:"gift",category:"all"},{name:"Git_fork",code:"git_fork",category:"social"},{name:"Git",code:"git",category:"social"},{name:"Globe",code:"globe",category:"social"},{name:"Grid",code:"grid",category:"editor"},{name:"Hashtag",code:"hashtag",category:"social"},{name:"Hashtag_2",code:"hashtag_2",category:"social"},{name:"Heart",code:"heart",category:"social"},{name:"Heartbeat",code:"heartbeat",category:"social"},{name:"History",code:"history",category:"controls"},{name:"Home 2",code:"home_2",category:"controls"},{name:"Home 3",code:"home_3",category:"controls"},{name:"Home 4",code:"home_4",category:"controls"},{name:"Home",code:"home",category:"controls"},{name:"Indicator 2",code:"indicator_2",category:"controls"},{name:"Indicator 3",code:"indicator_3",category:"controls"},{name:"Indicator",code:"indicator",category:"controls"},{name:"Info",code:"info",category:"signal"},{name:"Layer",code:"layer",category:"controls"},{name:"Leaf",code:"leaf",category:"all"},{name:"Link",code:"link",category:"controls"},{name:"List",code:"list",category:"editor"},{name:"Location 2",code:"location_2",category:"controls"},{name:"Location",code:"location",category:"controls"},{name:"Lock",code:"lock",category:"accounts"},{name:"Log in",code:"log_in",category:"accounts"},{name:"Log out",code:"log_out",category:"accounts"},{name:"Mail",code:"mail",category:"controls"},{name:"Media backward",code:"media_backward",category:"media"},{name:"Media forward",code:"media_forward",category:"media"},{name:"Media pause",code:"media_pause",category:"media"},{name:"Media play",code:"media_play",category:"media"},{name:"Media stop",code:"media_stop",category:"media"},{name:"Menu 2 reverted",code:"menu_2_reverted",category:"navigation"},{name:"Menu 2",code:"menu_2",category:"navigation"},{name:"Menu",code:"menu",category:"navigation"},{name:"Microphone",code:"microphone",category:"media"},{name:"Minus",code:"minus",category:"all"},{name:"More 2 vertical",code:"more_2_vertical",category:"navigation"},{name:"More 2",code:"more_2",category:"navigation"},{name:"More Vertical",code:"more_vertical",category:"navigation"},{name:"More",code:"more",category:"navigation"},{name:"Network",code:"network",category:"controls"},{name:"News",code:"news",category:"controls"},{name:"Note",code:"note",category:"editor"},{name:"Object bottom",code:"object_bottom",category:"editor"},{name:"Object center",code:"object_center",category:"editor"},{name:"Object fit",code:"object_fit",category:"editor"},{name:"Object left",code:"object_left",category:"editor"},{name:"Object middle",code:"object_middle",category:"editor"},{name:"Object right",code:"object_right",category:"editor"},{name:"Object top",code:"object_top",category:"editor"},{name:"Off",code:"off",category:"accounts"},{name:"Pencil",code:"pencil",category:"editor"},{name:"Phone",code:"phone",category:"controls"},{name:"Picture",code:"picture",category:"controls"},{name:"Pipe",code:"pipe",category:"editor"},{name:"Plus",code:"plus",category:"editor"},{name:"Printer",code:"printer",category:"controls"},{name:"Refresh",code:"refresh",category:"navigation"},{name:"Refresh base",code:"refresh_base",category:"navigation"},{name:"Rss",code:"rss",category:"controls"},{name:"search",code:"search",category:"controls"},{name:"server",code:"server",category:"controls"},{name:"Settings",code:"settings",category:"controls"},{name:"Setup",code:"setup",category:"controls"},{name:"Share 2",code:"share_2",category:"controls"},{name:"Share",code:"share",category:"controls"},{name:"Shrink",code:"shrink",category:"controls"},{name:"Social 2",code:"social_2",category:"social"},{name:"Social google",code:"social_google",category:"social"},{name:"Social instagram",code:"social_instagram",category:"social"},{name:"Social linkedin",code:"social_linkedin",category:"social"},{name:"Social twitter",code:"social_twitter",category:"social"},{name:"Social whatsup",code:"social_whatsup",category:"social"},{name:"Social youtube",code:"social_youtube",category:"social"},{name:"Social",code:"social",category:"social"},{name:"Speaker 2",code:"speaker_2",category:"media"},{name:"Speaker",code:"speaker",category:"media"},{name:"Star",code:"star",category:"social"},{name:"Stretch",code:"stretch",category:"editor"},{name:"Table",code:"table",category:"editor"},{name:"Text center",code:"text_center",category:"editor"},{name:"Text cursor",code:"text_cursor",category:"editor"},{name:"Text justify",code:"text_justify",category:"editor"},{name:"Text left",code:"text_left",category:"editor"},{name:"Text list",code:"text_list",category:"editor"},{name:"Text right",code:"text_right",category:"editor"},{name:"Thumb down",code:"thumb_down",category:"social"},{name:"Thumb up",code:"thumb_up",category:"social"},{name:"Trash",code:"trash",category:"controls"},{name:"Triangle down",code:"triangle_down",category:"navigation"},{name:"Triangle left",code:"triangle_left",category:"navigation"},{name:"Triangle right",code:"triangle_right",category:"navigation"},{name:"Triangle up",code:"triangle_up",category:"navigation"},{name:"Unlock",code:"unlock",category:"accounts"},{name:"Upload",code:"upload",category:"files"},{name:"User",code:"user",category:"users"},{name:"Users",code:"users",category:"users"},{name:"Volume down",code:"volume_down",category:"media"},{name:"Volume muted",code:"volume_muted",category:"media"},{name:"Volume up",code:"volume_up",category:"media"},{name:"Warning",code:"warning",category:"signal"},{name:"Window",code:"window",category:"controls"},{name:"Wireless",code:"wireless",category:"controls"},{name:"Sun",code:"sun",category:"all"},{name:"Moon",code:"moon",category:"all"},{name:"Moon 2",code:"moon_2",category:"all"},{name:"Light mode",code:"light_mode",category:"controls"},{name:"Sunny",code:"weather_sunny",category:"weather"},{name:"Partially sunny",code:"weather_sunny_partially",category:"weather"},{name:"Wind",code:"weather_wind",category:"weather"},{name:"Cloudy",code:"weather_cloudy",category:"weather"},{name:"Rainy",code:"weather_rainy",category:"weather"},{name:"Foggy",code:"weather_foggy",category:"weather"},{name:"Fog",code:"weather_fog",category:"weather"},{name:"Snowy",code:"weather_snowy",category:"weather"},{name:"Bolt",code:"bolt",category:"weather"},{name:"Cloud",code:"cloud",category:"controls"},{name:"Cloud offline",code:"cloud_offline",category:"controls"},{name:"Cookie",code:"cookie",category:"all"},{name:"Viewfinder",code:"viewfinder",category:"media"},{name:"Send",code:"send",category:"controls"},{name:"Send out",code:"send_out",category:"controls"},{name:"Wrench",code:"wrench",category:"controls"},{name:"Clip",code:"clip",category:"editor"},{name:"Clip 2",code:"clip_2",category:"editor"},{name:"Clip 3",code:"clip_3",category:"editor"},{name:"Stopwatch",code:"stopwatch",category:"media"},{name:"Chart",code:"chart",category:"chart"},{name:"Chart bar",code:"chart_bar",category:"chart"},{name:"Chart line",code:"chart_line",category:"chart"},{name:"Chart log",code:"chart_log",category:"chart"},{name:"Chart pie",code:"chart_pie",category:"chart"},{name:"Chart simple",code:"chart_simple",category:"chart"},{name:"Chart square",code:"chart_square",category:"chart"},{name:"Chart round",code:"chart_round",category:"chart"},{name:"Select all",code:"select_all",category:"controls"},{name:"Select all 2",code:"select_all_2",category:"controls"},{name:"Select",code:"select",category:"controls"},{name:"Wall",code:"wall",category:"all"}]},4:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={home:{name:"Home",uri:"/"},overview:{name:"Overview",uri:"/overview"},icons:{name:"Icons",uri:"/icons"},about:{name:"About",uri:"/about"},download:{name:"Download",uri:"/download"},docs:{name:"Documentation",uri:"/docs/dashboard"},component:{name:"Component",uri:"/docs/components/:id"},builder:{name:"Icons builder",uri:"/icons/builder"}}},48:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t),a.d(t,"CUI_DOCS_VER",(function(){return ue}));var n=a(2),o=a(39),c=(a(48),a(7)),r=a(10),i=a(4),l=a(15),s=a(9);function d(e){const t=Object(c.g)(),[a,o]=n.useState({currentSite:""}),d=(a.currentSite,"cui-shade");function u(){let e=t.pathname.split("/"),a="";return e.length>1&&(a=e.length>=4&&e[2].toLowerCase().match("component")?Object(l.a)(e[3]):Object(l.a)(e[1])),a}return n.useEffect(()=>{o({currentSite:u()})},[t]),n.createElement("nav",{className:"cui-navbar cui-sticky layout-navigation navbar-background-accent cui-dark  cui-box-shadow-remove"},n.createElement("div",{className:"cui-navbar-left cui-width-1-1 cui-width-auto--m cui-flex cui-middle cui-between",id:"navbar-left"},n.createElement("ul",null,a.currentSite&&n.createElement("li",null,n.createElement(r.b,{className:"cui-icon app-icon","cui-icon":"app_icon",to:"/"})),n.createElement("li",null,n.createElement("span",null,a.currentSite))),n.createElement("ul",{className:"cui-hidden--m"},n.createElement("li",null,n.createElement("a",{className:"cui-icon cui-button cui-circle cui-padding","cui-icon":"search","cui-open":"#search-dialog"})),n.createElement("li",null,n.createElement("a",{className:"cui-icon cui-padding cui-button ","cui-icon":"menu","cui-open":"target: #app-offcanvas"})))),n.createElement("ul",{className:"cui-navbar-right cui-visible--m"},n.createElement("li",null,n.createElement(s.a,{class:"cui-navbar-item",url:i.a.home.uri,name:i.a.home.name})),n.createElement("li",null,n.createElement(s.a,{class:"cui-navbar-item",url:i.a.overview.uri,name:i.a.overview.name})),n.createElement("li",null,n.createElement(s.a,{class:"cui-navbar-item",url:i.a.docs.uri,name:i.a.docs.name})),n.createElement("li",null,n.createElement(s.a,{class:"cui-navbar-item",url:i.a.icons.uri,name:i.a.icons.name})),n.createElement("li",null,n.createElement(s.a,{class:"cui-navbar-item",url:i.a.about.uri,name:i.a.about.name})),n.createElement("li",null,n.createElement(r.b,{to:"/download",className:"cui-button cui-rounded "+d},"Download")),n.createElement("li",null,n.createElement("a",{className:"cui-icon cui-button cui-circle cui-padding","cui-icon":"search","cui-open":"#search-dialog"}))))}var u=a(34);class m extends n.Component{constructor(e){super(e)}render(){return n.createElement("div",{className:"cui-off-canvas",id:"app-offcanvas","cui-off-canvas":"escClose: y; outClose: y"},n.createElement("div",{className:"cui-off-canvas-container cui-card off-canvas-layout"},n.createElement("div",{className:"cui-card-header cui-flex cui-middle cui-right"},n.createElement("a",{href:"#",className:"cui-icon","cui-icon":"close","cui-close":""})),n.createElement("div",{className:"off-canvas-content cui-card-body"},n.createElement("div",{className:"cui-width-1-1"},n.createElement("h3",{className:"cui-h3"},"Menu"),n.createElement("ul",{className:"cui-list cui-interactive cui-margin-top"},n.createElement("li",null,n.createElement(s.a,{url:i.a.home.uri,name:i.a.home.name,shouldClose:!0})),n.createElement("li",null,n.createElement(s.a,{url:i.a.overview.uri,name:i.a.overview.name,shouldClose:!0})),n.createElement("li",null,n.createElement(s.a,{url:i.a.docs.uri,name:i.a.docs.name,shouldClose:!0})),n.createElement("li",null,n.createElement(s.a,{url:i.a.icons.uri,name:i.a.icons.name,shouldClose:!0})),n.createElement("li",null,n.createElement(s.a,{url:i.a.about.uri,name:i.a.about.name,shouldClose:!0}))),n.createElement("h3",{className:"cui-h3"},"Components"),n.createElement(u.a,{shouldClose:!0,sort:!0}))),n.createElement("div",{className:"cui-flex-center cui-card-footer"},n.createElement(r.b,{to:i.a.download.uri,className:"cui-button cui-accent cui-rounded"},i.a.download.name))))}}class g extends n.Component{constructor(e){super(e)}render(){return n.createElement("div",{className:"cui-section cui-flex-center cui-height-viewport-1-2"},n.createElement("div",{className:"cui-card cui-large"},n.createElement("div",{className:"cui-card-header cui-text-error"},n.createElement("span",{className:"cui-card-title"},"Error")),n.createElement("div",{className:"cui-card-body cui-animation-fade-in cui-animation-delay"},"It appears that page you looking for does not exist. Try to look for it again or go back to our Home page"),n.createElement("div",{className:"cui-card-footer cui-flex cui-right cui-animation-fade-in cui-animation-delay-long"},n.createElement(r.b,{to:"/",className:"cui-link"},"Go Home"))))}}var y=a(17),h=a(14);function f(e){return e.recent}function p(e){return e.recents}var v=a(36);function b(e){var t;return n.useEffect(()=>{},[e]),n.createElement("div",{className:"cui-dialog "+(null!==(t=e.className)&&void 0!==t?t:""),"cui-dialog":"; outClose: Y",id:e.id},n.createElement("div",{className:"cui-dialog-container"},n.createElement("div",{className:"cui-dialog-header"},n.createElement("span",{className:"cui-dialog-title"},e.title),n.createElement("a",{className:"cui-icon","cui-icon":"close","cui-close":""})),n.createElement("div",{className:"cui-dialog-body"},e.body),e.footer&&n.createElement("div",{className:"cui-dialog-footer"},e.footer)))}var E,w,_,C=a(16),k=function(e,t,a){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,a),a},N=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class S{constructor(e,t){E.set(this,void 0),w.set(this,void 0),_.set(this,void 0),k(this,E,null),k(this,w,e),k(this,_,t)}call(...e){this.cancel(),k(this,E,setTimeout(()=>{N(this,_).call(this,...e),k(this,E,null)},N(this,w)))}cancel(){N(this,E)&&(clearTimeout(N(this,E)),k(this,E,null))}}E=new WeakMap,w=new WeakMap,_=new WeakMap;var x=a(37),j=a(38);function O(e){return new Promise((t,a)=>{let n=[],o=[],c=function(e){let t=[];try{t=j.a.reduce((t,a)=>(a.code.match(e.toLowerCase())&&t.push({name:a.name,detail:a.code}),t),[])}catch(e){console.log(e)}return t}(e);o.length>0&&n.push({name:"Components",results:o}),c.length>0&&n.push({name:"Icons",results:c}),t(n)})}function T(e){return n.createElement("div",{className:"cui-flex-center cui-container cui-animation-fade-in"},Object(C.a)(e.filter)&&n.createElement("span",null,"No result found for ",n.createElement("span",{className:"cui-text-italic"},e.filter)))}var M=a(31);function R(e){return n.createElement("div",null,n.createElement("div",{className:"cui-card"},n.createElement("div",{className:"cui-card-header"},n.createElement("span",{className:"cui-card-title"},e.name)),n.createElement("div",{className:"cui-card-body"},n.createElement("ul",{className:"cui-list"},e.results.map(t=>n.createElement("li",{className:"search-result-list-item",key:t.name},e.name.match("con")?n.createElement(D,{result:t}):n.createElement(I,{result:t})))))))}function I(e){return n.createElement(r.b,{className:"cui-link",to:e.result.detail,"cui-close":""},Object(l.a)(e.result.name))}function D(e){return n.createElement("a",{className:"cui-icon cui-icon-margin","cui-icon":e.result.detail,"cui-close":"",onClick:function(){Object(l.b)(e.result.detail).then(e=>{Object(M.a)(e+" copied")})}},e.result.name)}function L(e){return n.createElement("div",{className:"cui-flex-grid cui-child-width-1-1 cui-child-width-1-2--m"},e.results.map(e=>n.createElement(R,{key:e.name,name:e.name,results:e.results})))}function P(e){const[t,a]=n.useState([]),[o,c]=n.useState(new S(700,(function(e){s(e),Object(C.a)(e)?(i(!0),O(e).then(e=>{i(!1),a(e)})):a([])}))),[r,i]=n.useState(!1),[l,s]=n.useState("");function d(){a([]),i(!1),s("")}return n.useEffect(()=>{const t=window.$cui.get("#"+e.parentId);let a=null;return Object(C.a)(t)&&(a=t.on("closed",d)),()=>{Object(C.a)(a)&&t.detach("closed",a[0]),o.cancel()}},[t.length]),n.createElement(n.Fragment,null,n.createElement(x.a,{value:l,onUpdate:function(e){o.call(e)},alwaysShow:!0,filter:"Type search text",className:"cui-width-1-1",disabled:r}),r?n.createElement("div",{className:"cui-flex-center cui-padding"},n.createElement("span",{className:"cui-spinner","data-spinner":"spinner: cricle"},"Searching")):t.length>0?n.createElement(L,{results:t}):n.createElement(T,{filter:l}))}function A(){return n.useEffect(()=>()=>{}),n.createElement(b,{id:"search-dialog",title:"Search",outClose:!0,body:n.createElement(P,{parentId:"search-dialog"})})}var F=a(41),W=a(42),B=a(21),H=a(28);const U=n.lazy(()=>a.e(3).then(a.bind(null,59))),z=n.lazy(()=>a.e(6).then(a.bind(null,65))),G=n.lazy(()=>a.e(5).then(a.bind(null,60))),V=n.lazy(()=>a.e(7).then(a.bind(null,61))),$=n.lazy(()=>a.e(8).then(a.bind(null,66))),q=n.lazy(()=>a.e(2).then(a.bind(null,62))),Q=n.lazy(()=>a.e(4).then(a.bind(null,63))),J=n.lazy(()=>a.e(9).then(a.bind(null,64)));function Y(){return n.createElement(n.Fragment,null,n.createElement(r.a,null,n.createElement(K,null)))}function K(e){const[t,a]=n.useState({currentSite:"",recents:[],recent:void 0,isReady:!1}),o=Object(c.g)();function l(e){a(Object.assign(Object.assign({},t),{recents:p(e),recent:f(e),isReady:!0}))}return n.useEffect(()=>{const e=y.a.subscribeToState(h.d,l);return Object(v.b)(),()=>{e&&y.a.unsubscribeFromState(h.d,e)}},[t.isReady]),t.isReady?n.createElement("div",{className:"layout-main"},n.createElement(d,{site:t.currentSite}),n.createElement("div",{className:"layout-content"},n.createElement(n.Suspense,{fallback:n.createElement(H.a,{classes:"cui-height-viewport-1-1"})},n.createElement(c.c,{location:o},n.createElement(c.a,{path:i.a.docs.uri,render:()=>n.createElement(U,null)}),n.createElement(c.a,{path:i.a.component.uri,render:()=>n.createElement(J,null)}),n.createElement(c.a,{path:i.a.overview.uri,render:()=>n.createElement($,null)}),n.createElement(c.a,{path:i.a.download.uri,render:()=>n.createElement(Q,null)}),n.createElement(c.a,{path:i.a.builder.uri,render:()=>n.createElement(G,null)}),n.createElement(c.a,{path:i.a.icons.uri,render:()=>n.createElement(z,null)}),n.createElement(c.a,{path:i.a.about.uri,render:()=>n.createElement(q,null)}),n.createElement(c.a,{path:i.a.home.uri,render:()=>n.createElement(V,null)}),n.createElement(c.a,null,n.createElement(g,null))))),n.createElement("div",{className:"info-bar"},n.createElement("div",{className:"cui-drop-trigger cui-margin-small-bottom"},n.createElement("a",{className:"cui-icon-button cui-default cui-box-shadow","cui-icon":"history"}),n.createElement("div",{className:"cui-drop cui-dropdown","cui-drop":"mode: click; autoClose: y; outClose: y"},n.createElement("span",{className:"cui-icon-margin cui-icon cui-padding-small cui-text-bold","cui-icon":"history"}," History"),n.createElement("ul",{className:"cui-drop-nav"},t.recents.map(e=>n.createElement("li",{key:e.name},n.createElement(r.b,{to:e.url},e.name)))))),n.createElement("div",{className:"cui-drop-trigger"},n.createElement("a",{className:"cui-icon-button cui-default cui-box-shadow","cui-icon":"git"}),n.createElement("div",{className:"cui-drop cui-dropdown","cui-drop":"mode: click; autoClose: y; outClose: y"},n.createElement("span",{className:"cui-icon-margin cui-icon cui-padding-small cui-text-bold","cui-icon":"git"}," Git links"),n.createElement("ul",{className:"cui-drop-nav"},n.createElement("li",null,n.createElement("a",{href:"https://github.com/bpd-d/cui-light"},"cUI Light ",F.a)),n.createElement("li",null,n.createElement("a",{href:"https://github.com/bpd-d/cui-styles"},"cUI Styles ",W.a)),n.createElement("li",null,n.createElement("a",{href:"https://github.com/bpd-d/cui-icons"},"cUI Icons ",B.a)))))),n.createElement(A,null),n.createElement(m,null)):n.createElement(H.a,null)}var X,Z,ee=function(e,t,a){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,a),a},te=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class ae{constructor(e){X.set(this,void 0),Z.set(this,void 0)}setTranslations(e){ee(this,Z,e)}get(e){if(!e)return"";let t=te(this,Z)&&te(this,Z)[e]?te(this,Z)[e]:te(this,X)[e];return null!=t?t:e}}X=new WeakMap,Z=new WeakMap;var ne,oe=a(43),ce=function(e,t,a){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,a),a},re=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class ie{constructor(){ne.set(this,void 0),ce(this,ne,new oe.a("local","_VIEW_RECENTS"))}getAllRecents(){return re(this,ne).getAny("RECENTS")}setRecents(e){re(this,ne).setAny("RECENTS",e)}addRecent(e){throw new Error("Method not implemented.")}getLastItem(){throw new Error("Method not implemented.")}clearRecents(){re(this,ne).clear()}}ne=new WeakMap;function le(e,t,a,n){console.error(`An error occured in state: [${e}], details: ${n}`),console.error(a)}new WeakMap;var se=a(19),de=a(26);const ue="0.0.1",me=document.getElementById("preload"),ge=document.getElementById("loading-text");Promise.all([fetch("/icons/dist/all.json").then(e=>e.json())]).then(e=>{!function(e){ge.textContent="Initializing...";let t=e,a=document.getElementById("root"),c=new se.b;c.logLevel="debug",c.root=a,c.busSetup=[{name:"MoveQueue",eventsDef:["global_move"],handler:"tasked",priority:0},{name:"InteractQueue",eventsDef:["open","close","switch"],handler:"tasked",priority:0},{name:"ResponsesQueue",eventsDef:["opened","closed","switched","resize","offset"],handler:"tasked",priority:1},{name:"GlobalSimple",eventsDef:["keydown","scroll","intersection","windowclick"],handler:"tasked",priority:2}];let r={setup:c,icons:Object.assign(Object.assign({},B.b),t)};window.strings=new ae({});let i=new ie,l=new h.c(i),s={onError:le};y.a.createStateManager(s),y.a.createState(h.d,{recent:void 0,recents:[]},l.mutate.bind(l)),o.render(n.createElement(Y,null),a),(new de.a).init(r).then(e=>{me.classList.add("fade-out"),setTimeout(()=>{requestAnimationFrame(()=>{me.remove(),a.classList.remove("hidden")})},0)})}(e[0])}).catch(e=>{ge.textContent="App cannot be loaded, an error occured",console.error(e)})},9:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(2),o=a(10);class c extends n.Component{constructor(e){super(e),this.onClick=this.onClick.bind(this)}onClick(){this.props.shouldClose&&setTimeout(()=>{window.$cui.get("#app-offcanvas").emit("close")},0)}render(){return n.createElement(o.c,{exact:!0,activeClassName:"cui-active",className:this.props.class,to:this.props.url,onClick:this.onClick},this.props.name)}}}});
//# sourceMappingURL=cui-light-docs.index.js.map