!function(e){function t(t){for(var a,i,o=t[0],l=t[1],u=t[2],m=0,d=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(s&&s(t);d.length;)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==c[l]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={0:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=c[e]=[t,a]}));t.push(n[2]=a);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.src=function(e){return i.p+"cui-light-doc.pack."+({}[e]||e)+"."+{2:"05862a937f049e69d395",3:"64679fc74cbb692bdbde",4:"73910dafa63bdc485f85",5:"33779c72ee93233d36d1",6:"2b66e2d7b4ff3fe13300",7:"79684844cf98add3f751",8:"2f44ca871e54c5192d77",9:"7278bc872d588ef3ccc7",10:"d851cf3f81899e5c26d5"}[e]+".js"}(e);var l=new Error;r=function(t){o.onerror=o.onload=null,clearTimeout(u);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}c[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var s=l;r.push([54,1]),n()}({10:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(2),c=n(9);class r extends a.Component{constructor(e){super(e),this.onClick=this.onClick.bind(this)}onClick(){this.props.shouldClose&&setTimeout(()=>{window.$cui.get("#app-offcanvas").emit("close")},0)}render(){return a.createElement(c.c,{exact:!0,activeClassName:"cui-active",className:this.props.class,to:this.props.url,onClick:this.onClick},this.props.name)}}},14:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s}));var a,c,r=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},i=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};const o="RECENTS",l="ADD_RECENT",u="LOAD_RECENTS";class s{constructor(e){a.set(this,void 0),c.set(this,void 0),r(this,a,e),r(this,c,5)}mutate(e,t){if(!t)return e;switch(t.action){case l:let n=e.recents;n.length>=5&&n.shift(),n.findIndex(e=>e.name===t.data.name)<0&&(e={recent:t.data,recents:[...n,t.data]}),i(this,a).setRecents(e.recents);break;case u:if(!e.recents||0===e.recents.length){let t=i(this,a).getAllRecents();e={recents:null!=t?t:[],recent:t?t[t.length-1]:void 0}}break;case"CLEAR_RECENTS":e={recent:void 0,recents:[]},i(this,a).clearRecents()}return e}}a=new WeakMap,c=new WeakMap},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return l}));var a=function(e,t,n,a){return new(n||(n=Promise))((function(c,r){function i(e){try{l(a.next(e))}catch(e){r(e)}}function o(e){try{l(a.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}l((a=a.apply(e,t||[])).next())}))};function c(e){return e&&e.length>0?e.charAt(0).toUpperCase()+e.slice(1):e}function r(e){return a(this,void 0,void 0,(function*(){return e?window.navigator&&window.navigator.clipboard?function(e){return a(this,void 0,void 0,(function*(){let t=null;try{yield navigator.clipboard.writeText(e),t=e}catch(e){t=null}return t}))}(e):function(e){return a(this,void 0,void 0,(function*(){let t=document.createElement("textarea"),n=null;t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="2em",t.style.height="2em",t.style.padding="0",t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",t.value=e,document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy");n=e}catch(e){n=null}return document.body.removeChild(t),n}))}(e):null}))}function*i(){let e=0;for(;;){((yield e++)||e>2e5)&&(e=0)}}function o(e,t){if(t)for(let n in t)t.hasOwnProperty(n)&&e(n,t[n])}function l(e){let t=[];if(!e)return t;for(let n in e)e.hasOwnProperty(n)&&t.push(n);return t}},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(2);function c(e){var t;let n="cui-container cui-center";const c=null!==(t=e.text)&&void 0!==t?t:"Loading...";return e.classes&&(n+=" "+e.classes),a.createElement("div",{className:n},c)}},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a={home:{name:"Home",uri:"/"},overview:{name:"Overview",uri:"/overview"},icons:{name:"Icons",uri:"/icons"},about:{name:"About",uri:"/about"},download:{name:"Download",uri:"/download"},docs:{name:"Documentation",uri:"/docs/dashboard"},component:{name:"Component",uri:"/docs/components/:id"},builder:{name:"Icons builder",uri:"/icons/builder"},search:{name:"Search",uri:"/search"}}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(2),c=n(32);function r(e){return a.useEffect(()=>{Object(c.c)(e.name)}),a.createElement("div",{className:"route-child"},e.children)}},32:function(e,t,n){"use strict";function a(e){return"header-"+(null!=e?e:"0")}function c(e){document.title="cUI Light - "+e}function r(e,t){const n=[];let a=0;for(let c in e)e.hasOwnProperty(c)&&(n.push(t(c,e[c],a)),a++);return n}n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return r}))},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=function(e,t,n,a){return new(n||(n=Promise))((function(c,r){function i(e){try{l(a.next(e))}catch(e){r(e)}}function o(e){try{l(a.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}l((a=a.apply(e,t||[])).next())}))};function c(){return a(this,void 0,void 0,(function*(){return(yield n.e(10).then(n.bind(null,55))).default}))}},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(2),c=n(10),r=n(17),i=n(33);function o(e){var t;const[n,o]=a.useState([]),l=e.shouldClose&&!0,[u,s]=a.useState(void 0);return a.useEffect(()=>{Object(i.a)().then(t=>{var n;o(e.sort?(n=t,Object(r.e)(n).sort().map(e=>{let t=n[e];return a.createElement("li",{key:e},a.createElement(c.a,{url:t.uri,name:t.name,shouldClose:l}))})):function(e){const t=[];return Object(r.d)((e,n)=>{n&&t.push(a.createElement("li",{key:e},a.createElement(c.a,{url:n.uri,name:n.name,shouldClose:l})))},e),t}(t))},e=>{s(e.message)})},[e.sort,u]),u?a.createElement("div",{className:"cui-text-error"},u):a.createElement(a.Fragment,null,a.createElement("ul",{className:"cui-list cui-interactive animated-list "+(null!==(t=e.class)&&void 0!==t?t:"")},n))}},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(7);function c(){const e=Object(a.f)();return{history:e,pushHistory:function(t,n){e.push({pathname:t,search:n?n.toString():void 0})}}}},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var a=n(15),c=n(14);function r(e,t){a.a.performStateAction(c.d,{action:c.a,data:{name:e,url:t}})}function i(){a.a.performStateAction(c.d,{action:c.b})}},48:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t),n.d(t,"CUI_DOCS_VER",(function(){return K}));var a=n(2),c=n(39),r=(n(48),n(7)),i=n(9),o=n(3),l=n(17),u=n(10);function s(e){const t=Object(r.g)(),[n,c]=a.useState({currentSite:""}),s=(n.currentSite,"cui-shade");function m(){let e=t.pathname.split("/"),n="";return e.length>1&&(n=e.length>=4&&e[2].toLowerCase().match("component")?Object(l.a)(e[3]):Object(l.a)(e[1])),n}return a.useEffect(()=>{c({currentSite:m()})},[t]),a.createElement("nav",{className:"cui-navbar cui-sticky layout-navigation navbar-background-accent cui-dark  cui-box-shadow-remove"},a.createElement("div",{className:"cui-navbar-left cui-width-1-1 cui-width-auto--m cui-flex cui-middle cui-between",id:"navbar-left"},a.createElement("ul",null,n.currentSite&&a.createElement("li",null,a.createElement(i.b,{className:"cui-icon app-icon","cui-icon":"app_icon",to:"/"})),a.createElement("li",null,a.createElement("span",null,n.currentSite))),a.createElement("ul",{className:"cui-hidden--m"},a.createElement("li",null,a.createElement("a",{className:"cui-icon cui-padding cui-button ","cui-icon":"menu","cui-open":"target: #app-offcanvas"})))),a.createElement("ul",{className:"cui-navbar-right cui-visible--m"},a.createElement("li",null,a.createElement(u.a,{class:"cui-navbar-item",url:o.a.home.uri,name:o.a.home.name})),a.createElement("li",null,a.createElement(u.a,{class:"cui-navbar-item",url:o.a.overview.uri,name:o.a.overview.name})),a.createElement("li",null,a.createElement(u.a,{class:"cui-navbar-item",url:o.a.docs.uri,name:o.a.docs.name})),a.createElement("li",null,a.createElement(u.a,{class:"cui-navbar-item",url:o.a.icons.uri,name:o.a.icons.name})),a.createElement("li",null,a.createElement(u.a,{class:"cui-navbar-item",url:o.a.about.uri,name:o.a.about.name})),a.createElement("li",null,a.createElement(i.b,{to:o.a.download.uri,className:"cui-button cui-rounded "+s},"Download")),a.createElement("li",null,a.createElement(i.b,{className:"cui-icon cui-button cui-circle cui-padding","cui-icon":"search",to:o.a.search.uri}))))}var m=n(36),d=n(37),f=n(31);function h(){const[e,t]=a.useState(""),{pushHistory:n}=Object(d.a)();function c(e){e.preventDefault(),r()}function r(){if(Object(f.b)(e)){const a=new URLSearchParams;a.set("search",e),t(""),window.$cui.get("#app-offcanvas").emit("close"),n(o.a.search.uri,a)}}return a.createElement("div",{className:"cui-off-canvas",id:"app-offcanvas","cui-off-canvas":"escClose: y; outClose: y"},a.createElement("div",{className:"cui-off-canvas-container cui-card off-canvas-layout"},a.createElement("div",{className:"cui-card-header cui-flex cui-middle cui-between"},a.createElement("form",{action:"",onSubmit:c},a.createElement("div",{className:"cui-input-mix"},a.createElement("input",{type:"text",className:"cui-input",placeholder:"Search",onChange:function(e){t(e.target.value)},onSubmit:c}),a.createElement("a",{className:"cui-icon","cui-icon":"search",onClick:r}))),a.createElement("a",{href:"#",className:"cui-icon","cui-icon":"close","cui-close":""})),a.createElement("div",{className:"off-canvas-content cui-card-body"},a.createElement("div",{className:"cui-width-1-1"},a.createElement("h3",{className:"cui-h3"},"Menu"),a.createElement("ul",{className:"cui-list cui-interactive cui-margin-top"},a.createElement("li",null,a.createElement(u.a,{url:o.a.home.uri,name:o.a.home.name,shouldClose:!0})),a.createElement("li",null,a.createElement(u.a,{url:o.a.overview.uri,name:o.a.overview.name,shouldClose:!0})),a.createElement("li",null,a.createElement(u.a,{url:o.a.docs.uri,name:o.a.docs.name,shouldClose:!0})),a.createElement("li",null,a.createElement(u.a,{url:o.a.icons.uri,name:o.a.icons.name,shouldClose:!0})),a.createElement("li",null,a.createElement(u.a,{url:o.a.about.uri,name:o.a.about.name,shouldClose:!0}))),a.createElement("h3",{className:"cui-h3"},"Components"),a.createElement(m.a,{shouldClose:!0,sort:!0}))),a.createElement("div",{className:"cui-flex-center cui-card-footer"},a.createElement(i.b,{to:o.a.download.uri,className:"cui-button cui-accent cui-rounded"},o.a.download.name))))}class p extends a.Component{constructor(e){super(e)}render(){return a.createElement("div",{className:"cui-section cui-flex-center cui-height-viewport-1-2"},a.createElement("div",{className:"cui-card cui-large"},a.createElement("div",{className:"cui-card-header cui-text-error"},a.createElement("span",{className:"cui-card-title"},"Error")),a.createElement("div",{className:"cui-card-body cui-animation-fade-in cui-animation-delay"},"It appears that page you looking for does not exist. Try to look for it again or go back to our Home page"),a.createElement("div",{className:"cui-card-footer cui-flex cui-right cui-animation-fade-in cui-animation-delay-long"},a.createElement(i.b,{to:"/",className:"cui-link"},"Go Home"))))}}var v=n(15),E=n(14);function b(e){return e.recent}function g(e){return e.recents}var y=n(38),w=n(41),N=n(42),C=n(20),x=n(26),k=n(30);class S extends a.Component{constructor(e){super(e)}render(){return a.createElement(k.a,{name:"Home"},a.createElement("div",{className:"home-main-container cui-dark"},a.createElement("div",{className:"cui-container cui-flex cui-center cui-flex-direction-column cui-height-1-1 home-background-shapes"},a.createElement("div",{className:"cui-flex-center home-logo-container"},a.createElement("span",{className:"cui-icon app-home-logo cui-padding-large","cui-icon":"app_icon_large_new"})),a.createElement("div",{className:"cui-flex cui-center cui-margin-large-top"},a.createElement("div",{className:""},a.createElement("h1",{className:"cui-h1 cui-margin-large-top cui-margin-bottom cui-text-center"},"Modern, fast and responsive UI tool for the Web"),a.createElement("div",{className:"cui-margin-large-top cui-flex cui-center"},a.createElement(i.b,{to:"/overview",className:"cui-button cui-rounded"},"Learn more"),a.createElement(i.b,{to:"/docs/components/introduction",className:"cui-margin-small-left cui-button cui-shade cui-rounded"},"Get started")))))))}}const O=a.lazy(()=>n.e(6).then(n.bind(null,62))),j=a.lazy(()=>n.e(3).then(n.bind(null,67))),T=a.lazy(()=>n.e(4).then(n.bind(null,63))),R=a.lazy(()=>n.e(9).then(n.bind(null,69))),I=a.lazy(()=>n.e(5).then(n.bind(null,64))),_=a.lazy(()=>n.e(7).then(n.bind(null,65))),M=a.lazy(()=>n.e(8).then(n.bind(null,66))),P=a.lazy(()=>n.e(2).then(n.bind(null,68)));function A(){return a.createElement(a.Fragment,null,a.createElement(i.a,null,a.createElement(L,null)))}function L(e){const[t,n]=a.useState({currentSite:"",recents:[],recent:void 0,isReady:!1}),c=Object(r.g)();function l(e){n(Object.assign(Object.assign({},t),{recents:g(e),recent:b(e),isReady:!0}))}return a.useEffect(()=>{const e=v.a.subscribeToState(E.d,l);return Object(y.b)(),()=>{e&&v.a.unsubscribeFromState(E.d,e)}},[t.isReady]),t.isReady?a.createElement("div",{className:"layout-main"},a.createElement(s,{site:t.currentSite}),a.createElement("div",{className:"layout-content"},a.createElement(a.Suspense,{fallback:a.createElement(x.a,{classes:"cui-height-viewport-1-1"})},a.createElement(r.c,{location:c},a.createElement(r.a,{path:o.a.docs.uri,render:()=>a.createElement(O,null)}),a.createElement(r.a,{path:o.a.component.uri,render:()=>a.createElement(M,null)}),a.createElement(r.a,{path:o.a.overview.uri,render:()=>a.createElement(R,null)}),a.createElement(r.a,{path:o.a.download.uri,render:()=>a.createElement(_,null)}),a.createElement(r.a,{path:o.a.builder.uri,render:()=>a.createElement(T,null)}),a.createElement(r.a,{path:o.a.icons.uri,render:()=>a.createElement(j,null)}),a.createElement(r.a,{path:o.a.about.uri,render:()=>a.createElement(I,null)}),a.createElement(r.a,{path:o.a.search.uri,render:()=>a.createElement(P,null)}),a.createElement(r.a,{path:o.a.home.uri,component:S}),a.createElement(r.a,null,a.createElement(p,null))))),a.createElement("div",{className:"info-bar"},a.createElement("div",{className:"cui-drop-trigger cui-margin-small-bottom"},a.createElement("a",{className:"cui-icon-button cui-default cui-box-shadow","cui-icon":"history"}),a.createElement("div",{className:"cui-drop cui-dropdown","cui-drop":"mode: click; autoClose: y; outClose: y"},a.createElement("span",{className:"cui-icon-margin cui-icon cui-padding-small cui-text-bold","cui-icon":"history"}," History"),a.createElement("ul",{className:"cui-drop-nav"},t.recents.map(e=>a.createElement("li",{key:e.name},a.createElement(i.b,{to:e.url},e.name)))))),a.createElement("div",{className:"cui-drop-trigger"},a.createElement("a",{className:"cui-icon-button cui-default cui-box-shadow","cui-icon":"git"}),a.createElement("div",{className:"cui-drop cui-dropdown","cui-drop":"mode: click; autoClose: y; outClose: y"},a.createElement("span",{className:"cui-icon-margin cui-icon cui-padding-small cui-text-bold","cui-icon":"git"}," Git links"),a.createElement("ul",{className:"cui-drop-nav"},a.createElement("li",null,a.createElement("a",{href:"https://github.com/bpd-d/cui-light"},"cUI Light ",w.a)),a.createElement("li",null,a.createElement("a",{href:"https://github.com/bpd-d/cui-styles"},"cUI Styles ",N.a)),a.createElement("li",null,a.createElement("a",{href:"https://github.com/bpd-d/cui-icons"},"cUI Icons ",C.a)))))),a.createElement(h,null)):a.createElement(x.a,null)}var D,z,U=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},W=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class H{constructor(e){D.set(this,void 0),z.set(this,void 0)}setTranslations(e){U(this,z,e)}get(e){if(!e)return"";let t=W(this,z)&&W(this,z)[e]?W(this,z)[e]:W(this,D)[e];return null!=t?t:e}}D=new WeakMap,z=new WeakMap;var F,G=n(43),$=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},B=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class Q{constructor(){F.set(this,void 0),$(this,F,new G.a("local","_VIEW_RECENTS"))}getAllRecents(){return B(this,F).getAny("RECENTS")}setRecents(e){B(this,F).setAny("RECENTS",e)}addRecent(e){throw new Error("Method not implemented.")}getLastItem(){throw new Error("Method not implemented.")}clearRecents(){B(this,F).clear()}}F=new WeakMap;function q(e,t,n,a){console.error(`An error occured in state: [${e}], details: ${a}`),console.error(n)}new WeakMap;var J=n(18),V=n(25);const K="0.0.1",X=document.getElementById("preload"),Y=document.getElementById("loading-text");Promise.all([fetch("/icons/dist/all.json").then(e=>e.json())]).then(e=>{!function(e){Y.textContent="Initializing...";let t=e,n=document.getElementById("root"),r=new J.b;r.logLevel="debug",r.root=n,r.busSetup=[{name:"MoveQueue",eventsDef:["global_move"],handler:"tasked",priority:0},{name:"InteractQueue",eventsDef:["open","close","switch"],handler:"tasked",priority:0},{name:"ResponsesQueue",eventsDef:["opened","closed","switched","resize","offset"],handler:"tasked",priority:1},{name:"GlobalSimple",eventsDef:["keydown","scroll","intersection","windowclick"],handler:"tasked",priority:2}];let i={setup:r,icons:Object.assign(Object.assign({},C.b),t)};window.strings=new H({});let o=new Q,l=new E.c(o),u={onError:q};v.a.createStateManager(u),v.a.createState(E.d,{recent:void 0,recents:[]},l.mutate.bind(l)),c.render(a.createElement(A,null),n),(new V.a).init(i).then(e=>{X.classList.add("fade-out"),setTimeout(()=>{requestAnimationFrame(()=>{X.remove(),n.classList.remove("hidden")})},0)})}(e[0])}).catch(e=>{Y.textContent="App cannot be loaded, an error occured",console.error(e)})}});
//# sourceMappingURL=cui-light-docs.index.js.map