(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{55:function(e,t,i){"use strict";function n(e){return"header-"+(null!=e?e:"0")}function c(e){document.title="cUI Light - "+e}function a(e,t){const i=[];let n=0;for(let c in e)e.hasOwnProperty(c)&&(i.push(t(c,e[c],n)),n++);return i}i.d(t,"a",(function(){return n})),i.d(t,"c",(function(){return c})),i.d(t,"b",(function(){return a}))},56:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i(0),c=i(55);function a(e){return n.useEffect(()=>{Object(c.c)(e.name)}),n.createElement("div",{className:"route-child"},e.children)}},57:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i(0);function c(e){return n.createElement("div",{className:"cui-flex cui-middle cui-center cui-height-viewport-1-2 cui-height-viewport-1-4--m"},n.createElement("div",{className:"cui-text-center"},n.createElement("h1",{className:"cui-article-title"},e.title),n.createElement("p",{className:""},e.description)))}var a=i(56);function r(e){let t="limited-content-width cui-section cui-margin-auto";return e.classes&&(t+=" "+e.classes),n.createElement("div",{className:t},e.children)}function o(e){return n.createElement(a.a,{name:e.name},n.createElement(c,{title:e.name,description:e.description}),n.createElement(r,{classes:e.contentParentCls},e.children))}},58:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return r})),i.d(t,"CuiDocsDashboardItemView",(function(){return o}));var n=i(0),c=i(7),a=i(57);function r(){const e=Object(c.f)();function t(t){e.push(t)}return n.createElement(a.a,{name:"Documentation",description:"Product documentation dashboard"},n.createElement("div",{className:"cui-flex-grid cui-flex-grid-center cui-child-width-1-1 cui-child-width-1-3--l"},[{title:"Commons",icon:"dashboard_common",uri:"/",description:"Read about basics of cUI usage"},{title:"Components",icon:"dashboard_component",uri:"/docs/components/introduction",description:"Get deatails about CSS and JS components"},{title:"API",icon:"dashboard_api",uri:"/",description:"Learn how to integrate cUI with other packages in your project"},{title:"Plugins",icon:"overview_plugins",uri:"/",description:"Get details about plugins available in the cUI package"}].map(e=>n.createElement(o,{key:e.title,item:e,onClick:t}))))}function o(e){return n.createElement("div",{className:"cui-card cui-animation-fade-in"},n.createElement("div",{className:"cui-card-body cui-cursor-pointer",onClick:()=>{e.onClick(e.item.uri)}},n.createElement("div",{className:"cui-position-relative cui-transition-trigger cui-transition-slide-up height-dashboard-item"},n.createElement("div",{className:"cui-position-center"},n.createElement("div",{className:"cui-transition-fade-reverse","cui-icon":e.item.icon})),n.createElement("div",{className:"cui-transition-container"},n.createElement("div",{className:"cui-transition-body"},n.createElement("div",{className:"cui-transition-header cui-text-center"},e.item.title),n.createElement("div",{className:"cui-transition-content cui-text-center"},e.item.description))))))}}}]);
//# sourceMappingURL=cui-light-docs.3.js.map