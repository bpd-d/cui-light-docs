!function(e){function t(t){for(var a,i,o=t[0],l=t[1],u=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(s&&s(t);m.length;)m.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={2:0},c=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var c,o=document.createElement("script");o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.src=function(e){return i.p+"cui-light-doc.pack."+({}[e]||e)+"."+{0:"0568135e857fd41659fc",1:"8ae43429b2f49e79c397",4:"447109854eecfd904a2b",5:"f784fa8e7fe88de53a6b",6:"794e5581ef9e6506f16d",7:"2f1fee81eeacf7b4c4a7",8:"e8a89bec598444e74610",9:"8b1dedbbd69cc969a328",10:"0357784c209edb466cd6",11:"ca97356ec19da5b60bc1"}[e]+".js"}(e);var l=new Error;c=function(t){o.onerror=o.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:o})}),12e4);o.onerror=o.onload=c,document.head.appendChild(o)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var s=l;c.push([58,3]),n()}({11:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),r=n(9);class c extends a.Component{constructor(e){super(e),this.onClick=this.onClick.bind(this)}onClick(){this.props.shouldClose&&setTimeout(()=>{window.$cui.get("#app-offcanvas").emit("close")},0)}render(){return a.createElement(r.c,{exact:!0,activeClassName:"cui-active",className:this.props.class,to:this.props.url,onClick:this.onClick},this.props.name)}}},15:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s}));var a,r,c=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},i=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};const o="RECENTS",l="ADD_RECENT",u="LOAD_RECENTS";class s{constructor(e){a.set(this,void 0),r.set(this,void 0),c(this,a,e),c(this,r,5)}mutate(e,t){if(!t)return e;switch(t.action){case l:let n=e.recents;n.length>=5&&n.shift(),n.findIndex(e=>e.name===t.data.name)<0&&(e={recent:t.data,recents:[...n,t.data]}),i(this,a).setRecents(e.recents);break;case u:if(!e.recents||0===e.recents.length){let t=i(this,a).getAllRecents();e={recents:null!=t?t:[],recent:t?t[t.length-1]:void 0}}break;case"CLEAR_RECENTS":e={recent:void 0,recents:[]},i(this,a).clearRecents()}return e}}a=new WeakMap,r=new WeakMap},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return l}));var a=function(e,t,n,a){return new(n||(n=Promise))((function(r,c){function i(e){try{l(a.next(e))}catch(e){c(e)}}function o(e){try{l(a.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}l((a=a.apply(e,t||[])).next())}))};function r(e){return e&&e.length>0?e.charAt(0).toUpperCase()+e.slice(1):e}function c(e){return a(this,void 0,void 0,(function*(){return e?window.navigator&&window.navigator.clipboard?function(e){return a(this,void 0,void 0,(function*(){let t=null;try{yield navigator.clipboard.writeText(e),t=e}catch(e){t=null}return t}))}(e):function(e){return a(this,void 0,void 0,(function*(){let t=document.createElement("textarea"),n=null;t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="2em",t.style.height="2em",t.style.padding="0",t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",t.value=e,document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy");n=e}catch(e){n=null}return document.body.removeChild(t),n}))}(e):null}))}function*i(){let e=0;for(;;){((yield e++)||e>2e5)&&(e=0)}}function o(e,t){if(t)for(let n in t)t.hasOwnProperty(n)&&e(n,t[n])}function l(e){let t=[];if(!e)return t;for(let n in e)e.hasOwnProperty(n)&&t.push(n);return t}},19:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l}));var a=n(42),r=function(e,t,n,a){return new(n||(n=Promise))((function(r,c){function i(e){try{l(a.next(e))}catch(e){c(e)}}function o(e){try{l(a.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}l((a=a.apply(e,t||[])).next())}))};const c="plugins",i="components";function o(e){return r(this,void 0,void 0,(function*(){let t=null;switch(e){case i:t=yield n.e(0).then(n.bind(null,46));break;case c:t=yield n.e(1).then(n.bind(null,47))}return t?t.default:null}))}const l=new a.a(o)},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(1);function r(e){var t;let n="cui-container cui-center";const r=null!==(t=e.text)&&void 0!==t?t:"Loading...";return e.classes&&(n+=" "+e.classes),a.createElement("div",{className:n},r)}},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a={home:{name:"Home",uri:"/"},overview:{name:"Overview",uri:"/overview"},icons:{name:"Icons",uri:"/icons"},about:{name:"About",uri:"/about"},download:{name:"Download",uri:"/download"},docs:{name:"Documentation",uri:"/docs/dashboard"},component:{name:"Docs",uri:"/docs/:type/:id"},builder:{name:"Icons builder",uri:"/icons/builder"},search:{name:"Search",uri:"/search"}}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(1),r=n(11),c=n(18),i=n(19);function o(e){var t;const[n,o]=a.useState([]),l=e.shouldClose&&!0,[u,s]=a.useState(void 0);return a.useEffect(()=>{var t;i.d.call(null!==(t=e.type)&&void 0!==t?t:i.a).then(t=>{var n;o(e.sort?(n=t,Object(c.e)(n).sort().map(e=>{let t=n[e];return a.createElement("li",{key:e},a.createElement(r.a,{url:t.uri,name:t.name,shouldClose:l}))})):function(e){const t=[];return Object(c.d)((e,n)=>{n&&t.push(a.createElement("li",{key:e},a.createElement(r.a,{url:n.uri,name:n.name,shouldClose:l})))},e),t}(t))},e=>{s(e.message)})},[e.sort,u]),u?a.createElement("div",{className:"cui-text-error"},u):a.createElement(a.Fragment,null,a.createElement("ul",{className:"cui-list cui-interactive animated-list "+(null!==(t=e.class)&&void 0!==t?t:"")},n))}},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),r=n(35);function c(e){return a.useEffect(()=>{Object(r.c)(e.name)}),a.createElement("div",{className:"route-child"},e.children)}},35:function(e,t,n){"use strict";function a(e){return"header-"+(null!=e?e:"0")}function r(e){document.title="cUI Light - "+e}function c(e,t){const n=[];let a=0;for(let r in e)e.hasOwnProperty(r)&&(n.push(t(r,e[r],a)),a++);return n}n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c}))},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(6);function r(){const e=Object(a.f)();return{history:e,pushHistory:function(t,n){e.push({pathname:t,search:n?n.toString():void 0})}}}},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var a=n(16),r=n(15);function c(e,t){a.a.performStateAction(r.d,{action:r.a,data:{name:e,url:t}})}function i(){a.a.performStateAction(r.d,{action:r.b})}},52:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t),n.d(t,"CUI_DOCS_VER",(function(){return ce}));var a=n(1),r=n(40),c=(n(52),n(6)),i=n(9),o=n(3),l=n(18),u=n(11);function s(e){const t=Object(c.g)(),[n,r]=a.useState({currentSite:""}),s=(n.currentSite,"cui-shade");function d(){let e=t.pathname.split("/"),n="";return e.length>1&&(n=e.length>=4&&e[2].toLowerCase().match("component")?Object(l.a)(e[3]):Object(l.a)(e[1])),n}return a.useEffect(()=>{r({currentSite:d()})},[t]),a.createElement("nav",{className:"cui-navbar cui-sticky layout-navigation navbar-background-accent cui-dark  cui-box-shadow-remove"},a.createElement("div",{className:"cui-navbar-left cui-width-1-1 cui-width-auto--m cui-flex cui-middle cui-between",id:"navbar-left"},a.createElement("ul",null,n.currentSite&&a.createElement("li",null,a.createElement(i.b,{className:"cui-icon app-icon","cui-icon":"app_icon",to:"/"})),a.createElement("li",null,a.createElement("span",null,n.currentSite))),a.createElement("ul",{className:"cui-hidden--m"},a.createElement("li",null,a.createElement("a",{className:"cui-icon cui-padding cui-button ","cui-icon":"menu","cui-open":"target: #app-offcanvas"})))),a.createElement("ul",{className:"cui-navbar-right cui-unhidden--m"},a.createElement("li",null,a.createElement(u.a,{class:"cui-navbar-item",url:o.a.home.uri,name:o.a.home.name})),a.createElement("li",null,a.createElement(u.a,{class:"cui-navbar-item",url:o.a.overview.uri,name:o.a.overview.name})),a.createElement("li",null,a.createElement(u.a,{class:"cui-navbar-item",url:o.a.docs.uri,name:o.a.docs.name})),a.createElement("li",null,a.createElement(u.a,{class:"cui-navbar-item",url:o.a.icons.uri,name:o.a.icons.name})),a.createElement("li",null,a.createElement(u.a,{class:"cui-navbar-item",url:o.a.about.uri,name:o.a.about.name})),a.createElement("li",null,a.createElement(i.b,{to:o.a.download.uri,className:"cui-button cui-rounded "+s},"Download")),a.createElement("li",null,a.createElement(i.b,{className:"cui-icon cui-button cui-circle cui-padding","cui-icon":"search",to:o.a.search.uri}))))}var d=n(30),m=n(38),f=n(34),h=n(19);function p(){const[e,t]=a.useState(""),{pushHistory:n}=Object(m.a)();function r(e){e.preventDefault(),c()}function c(){if(Object(f.b)(e)){const a=new URLSearchParams;a.set("search",e),t(""),window.$cui.get("#app-offcanvas").emit("close"),n(o.a.search.uri,a)}}return a.createElement("div",{className:"cui-off-canvas",id:"app-offcanvas","cui-off-canvas":"escClose: y; outClose: y"},a.createElement("div",{className:"cui-off-canvas-container cui-card off-canvas-layout cui-flex cui-flex-direction-column cui-nowrap"},a.createElement("div",{className:"cui-card-header cui-flex cui-middle cui-between cui-flex-shrink cui-width-1-1"},a.createElement("form",{action:"",onSubmit:r},a.createElement("div",{className:"cui-input-mix"},a.createElement("input",{type:"text",className:"cui-input",placeholder:"Search",onChange:function(e){t(e.target.value)},onSubmit:r}),a.createElement("a",{className:"cui-icon","cui-icon":"search",onClick:c}))),a.createElement("a",{href:"#",className:"cui-icon","cui-icon":"close","cui-close":""})),a.createElement("div",{className:"cui-card-body cui-flex-grow cui-overflow-hidden cui-width-1-1"},a.createElement("div",{className:"cui-width-1-1 cui-height-1-1 cui-overflow-y-auto"},a.createElement(v,{text:"Menu"}),a.createElement("ul",{className:"cui-list cui-interactive cui-width-1-1"},a.createElement("li",null,a.createElement(u.a,{url:o.a.home.uri,name:o.a.home.name,shouldClose:!0})),a.createElement("li",null,a.createElement(u.a,{url:o.a.overview.uri,name:o.a.overview.name,shouldClose:!0})),a.createElement("li",null,a.createElement(u.a,{url:o.a.docs.uri,name:o.a.docs.name,shouldClose:!0})),a.createElement("li",null,a.createElement(u.a,{url:o.a.icons.uri,name:o.a.icons.name,shouldClose:!0})),a.createElement("li",null,a.createElement(u.a,{url:o.a.about.uri,name:o.a.about.name,shouldClose:!0}))),a.createElement(v,{text:"Components"}),a.createElement(d.a,{shouldClose:!0,sort:!0,type:h.a}),a.createElement(v,{text:"Plugins"}),a.createElement(d.a,{shouldClose:!0,sort:!0,type:h.b}))),a.createElement("div",{className:"cui-flex-center cui-card-footer cui-flex-auto cui-width-1-1"},a.createElement(i.b,{to:o.a.download.uri,className:"cui-button cui-accent cui-rounded"},o.a.download.name))))}function v(e){return a.createElement("h3",{className:"cui-h3 cui-sticky cui-background-default cui-layer-top"},e.text)}class E extends a.Component{constructor(e){super(e)}render(){return a.createElement("div",{className:"cui-section cui-flex-center cui-height-viewport-1-2"},a.createElement("div",{className:"cui-card cui-large"},a.createElement("div",{className:"cui-card-header cui-text-error"},a.createElement("span",{className:"cui-card-title"},"Error")),a.createElement("div",{className:"cui-card-body cui-animation-fade-in cui-animation-delay"},"It appears that page you looking for does not exist. Try to look for it again or go back to our Home page"),a.createElement("div",{className:"cui-card-footer cui-flex cui-right cui-animation-fade-in cui-animation-delay-long"},a.createElement(i.b,{to:"/",className:"cui-link"},"Go Home"))))}}var b=n(16),w=n(15);function g(e){return e.recent}function y(e){return e.recents}var N=n(39),x=n(43),k=n(44),C=n(23),S=n(28),O=n(33);class j extends a.Component{constructor(e){super(e)}render(){return a.createElement(O.a,{name:"Home"},a.createElement("div",{className:"home-main-container cui-dark"},a.createElement("div",{className:"cui-container cui-flex cui-center cui-flex-direction-column cui-height-1-1 home-background-shapes"},a.createElement("div",{className:"cui-flex-center home-logo-container"},a.createElement("span",{className:"cui-icon app-home-logo cui-padding-large","cui-icon":"app_icon_large_new"})),a.createElement("div",{className:"cui-flex cui-center cui-margin-large-top"},a.createElement("div",{className:""},a.createElement("h1",{className:"cui-h1 cui-margin-large-top cui-margin-bottom cui-text-center"},"Modern, fast and responsive UI tool for the Web"),a.createElement("div",{className:"cui-margin-large-top cui-flex cui-center"},a.createElement(i.b,{to:"/overview",className:"cui-button cui-rounded"},"Learn more"),a.createElement(i.b,{to:"/docs/components/introduction",className:"cui-margin-small-left cui-button cui-shade cui-rounded"},"Get started")))))))}}var R,T,M,I=n(0),_=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},P=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class L{constructor(){R.set(this,void 0),T.set(this,void 0),M.set(this,void 0),_(this,R,null),_(this,T,null),_(this,M,"")}init(){_(this,R,window.$cui.on("resize",this.onResize.bind(this))),_(this,T,window.$cui.on("gesture-left",this.onGestureLeft.bind(this))),_(this,T,window.$cui.on("gesture-right",this.onGestureRight.bind(this))),_(this,M,Object(I.b)(window.innerWidth))}destroy(){P(this,R)&&window.$cui.detach("resize",P(this,R)),P(this,T)&&window.$cui.detach("gesture-left",P(this,R))}onResize(e){_(this,M,e.current)}onGestureLeft(e){console.log(P(this,M)),"small"!==P(this,M)&&"none"!==P(this,M)||window.$cui.get("#app-offcanvas").emit("open")}onGestureRight(e){console.log(P(this,M)),"small"!==P(this,M)&&"none"!==P(this,M)||window.$cui.get("#app-offcanvas").emit("close")}}R=new WeakMap,T=new WeakMap,M=new WeakMap;const A=a.lazy(()=>n.e(9).then(n.bind(null,66))),z=a.lazy(()=>n.e(4).then(n.bind(null,71))),D=a.lazy(()=>n.e(8).then(n.bind(null,67))),W=a.lazy(()=>n.e(11).then(n.bind(null,73))),$=a.lazy(()=>n.e(6).then(n.bind(null,68))),G=a.lazy(()=>n.e(7).then(n.bind(null,69))),U=a.lazy(()=>n.e(10).then(n.bind(null,70))),H=a.lazy(()=>n.e(5).then(n.bind(null,72)));function F(){return a.createElement(a.Fragment,null,a.createElement(i.a,null,a.createElement(B,null)))}function B(e){const[t,n]=a.useState({currentSite:"",recents:[],recent:void 0,isReady:!1}),r=Object(c.g)();function l(e){n(Object.assign(Object.assign({},t),{recents:y(e),recent:g(e),isReady:!0}))}return a.useEffect(()=>{const e=b.a.subscribeToState(w.d,l),t=new L;return t.init(),Object(N.b)(),()=>{e&&b.a.unsubscribeFromState(w.d,e),t.destroy()}},[t.isReady]),t.isReady?a.createElement("div",{className:"layout-main"},a.createElement(s,{site:t.currentSite}),a.createElement("div",{className:"layout-content"},a.createElement(a.Suspense,{fallback:a.createElement(S.a,{classes:"cui-height-viewport-1-1"})},a.createElement(c.c,{location:r},a.createElement(c.a,{path:o.a.docs.uri,render:()=>a.createElement(A,null)}),a.createElement(c.a,{path:o.a.component.uri,render:()=>a.createElement(U,null)}),a.createElement(c.a,{path:o.a.overview.uri,render:()=>a.createElement(W,null)}),a.createElement(c.a,{path:o.a.download.uri,render:()=>a.createElement(G,null)}),a.createElement(c.a,{path:o.a.builder.uri,render:()=>a.createElement(D,null)}),a.createElement(c.a,{path:o.a.icons.uri,render:()=>a.createElement(z,null)}),a.createElement(c.a,{path:o.a.about.uri,render:()=>a.createElement($,null)}),a.createElement(c.a,{path:o.a.search.uri,render:()=>a.createElement(H,null)}),a.createElement(c.a,{path:o.a.home.uri,component:j}),a.createElement(c.a,null,a.createElement(E,null))))),a.createElement("div",{className:"info-bar"},a.createElement("div",{className:"cui-drop-trigger cui-margin-small-bottom"},a.createElement("a",{className:"cui-icon-button cui-default cui-box-shadow","cui-icon":"history"}),a.createElement("div",{className:"cui-drop cui-dropdown","cui-drop":"mode: click; autoClose: y; outClose: y"},a.createElement("span",{className:"cui-icon-margin cui-icon cui-padding-small cui-text-bold","cui-icon":"history"}," History"),a.createElement("ul",{className:"cui-drop-nav"},t.recents.map(e=>a.createElement("li",{key:e.name},a.createElement(i.b,{to:e.url},e.name)))))),a.createElement("div",{className:"cui-drop-trigger"},a.createElement("a",{className:"cui-icon-button cui-default cui-box-shadow","cui-icon":"git"}),a.createElement("div",{className:"cui-drop cui-dropdown","cui-drop":"mode: click; autoClose: y; outClose: y"},a.createElement("span",{className:"cui-icon-margin cui-icon cui-padding-small cui-text-bold","cui-icon":"git"}," Git links"),a.createElement("ul",{className:"cui-drop-nav"},a.createElement("li",null,a.createElement("a",{href:"https://github.com/bpd-d/cui-light"},"cUI Light ",x.a)),a.createElement("li",null,a.createElement("a",{href:"https://github.com/bpd-d/cui-styles"},"cUI Styles ",k.a)),a.createElement("li",null,a.createElement("a",{href:"https://github.com/bpd-d/cui-icons"},"cUI Icons ",C.a)))))),a.createElement(p,null)):a.createElement(S.a,null)}var Q,q,J=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},V=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class K{constructor(e){Q.set(this,void 0),q.set(this,void 0)}setTranslations(e){J(this,q,e)}get(e){if(!e)return"";let t=V(this,q)&&V(this,q)[e]?V(this,q)[e]:V(this,Q)[e];return null!=t?t:e}}Q=new WeakMap,q=new WeakMap;var X,Y=n(45),Z=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},ee=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class te{constructor(){X.set(this,void 0),Z(this,X,new Y.a("local","_VIEW_RECENTS"))}getAllRecents(){return ee(this,X).getAny("RECENTS")}setRecents(e){ee(this,X).setAny("RECENTS",e)}addRecent(e){throw new Error("Method not implemented.")}getLastItem(){throw new Error("Method not implemented.")}clearRecents(){ee(this,X).clear()}}X=new WeakMap;function ne(e,t,n,a){console.error(`An error occured in state: [${e}], details: ${a}`),console.error(n)}new WeakMap;var ae=n(20),re=n(27);const ce="0.0.1",ie=document.getElementById("preload"),oe=document.getElementById("loading-text");Promise.all([fetch("/icons/dist/all.json").then(e=>e.json())]).then(e=>{!function(e){oe.textContent="Initializing...";let t=e,n=document.getElementById("root"),c=new ae.b;c.logLevel="debug",c.root=n,c.busSetup=[{name:"MoveQueue",eventsDef:["global_move"],handler:"tasked",priority:0},{name:"InteractQueue",eventsDef:["open","close","switch"],handler:"tasked",priority:0},{name:"ResponsesQueue",eventsDef:["opened","closed","switched","resize","offset"],handler:"tasked",priority:1},{name:"GlobalSimple",eventsDef:["keydown","scroll","intersection","windowclick"],handler:"tasked",priority:2}];let i={setup:c,icons:Object.assign(Object.assign({},C.b),t)};window.strings=new K({});let o=new te,l=new w.c(o),u={onError:ne};b.a.createStateManager(u),b.a.createState(w.d,{recent:void 0,recents:[]},l.mutate.bind(l)),r.render(a.createElement(F,null),n),(new re.a).init(i).then(e=>{ie.classList.add("fade-out"),setTimeout(()=>{requestAnimationFrame(()=>{ie.remove(),n.classList.remove("hidden")})},0)})}(e[0])}).catch(e=>{oe.textContent="App cannot be loaded, an error occured",console.error(e)})}});
//# sourceMappingURL=cui-light-docs.index.js.map