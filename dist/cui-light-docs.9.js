(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{55:function(e,t,n){"use strict";function c(e){return"header-"+(null!=e?e:"0")}function a(e){document.title="cUI Light - "+e}function i(e,t){const n=[];let c=0;for(let a in e)e.hasOwnProperty(a)&&(n.push(t(a,e[a],c)),c++);return n}n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i}))},63:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k})),n.d(t,"CuiDocsComponentNotFound",(function(){return O})),n.d(t,"CuiDocsComponentLoading",(function(){return j})),n.d(t,"CuiDocsNavigationPane",(function(){return C}));var c=n(0),a=n(7),i=n(18),l=n(35);function s(e){return c.createElement(c.Fragment,null,c.createElement("div",{className:"cui-flex cui-middle cui-center cui-left--m cui-height-viewport-1-2 cui-height-viewport-1-4--m"},c.createElement("div",{className:"cui-text-center cui-text-left--m"},c.createElement("h1",{className:"cui-article-title"},e.title),c.createElement("p",{className:""},e.description))),e.illustration&&c.createElement("div",{className:"cui-flex-center"},c.createElement("span",{className:"cui-icon docs-illustration","cui-icon":e.illustration})))}var r=n(55),m=n(11);function u(e){return c.createElement("a",{className:"cui-link"+(e.classes?" "+e.classes:""),onClick:function(){Object(m.b)(e.value).then(()=>{var t;(null===(t=e.showToast)||void 0===t||t)&&window.$cui.emit("toast","~toast-plugin",e.value+" copied")})}},e.value)}function o(e){return c.createElement("ul",{className:"cui-list cui-bullet"},e&&e.items&&e.items.map((e,t)=>c.createElement("li",{key:t},c.createElement(u,{value:e.name,classes:"cui-accent"}),c.createElement("span",{className:"cui-margin-small-left"},e.description))))}function d(e){return c.createElement("div",{className:"cui-flex-grid cui-flex-grid-match cui-child-width-1-1 cui-child-width-1-2--l"},e.items&&e.items.map(e=>c.createElement(p,{key:e.name,item:e})))}function p(e){return c.createElement("div",null,c.createElement("div",{className:"cui-card cui-background-shade"},c.createElement("div",{className:"cui-card-header"},c.createElement("span",{className:"cui-card-title"},e.item.name)),c.createElement("div",{className:"cui-card-body"},c.createElement("p",null,e.item.description)),c.createElement("div",{className:"cui-card-footer"},c.createElement("div",{className:"cui-flex cui-middle cui-between"},c.createElement("span",null,"Type:"),c.createElement("span",null,e.item.type)),c.createElement("div",{className:"cui-flex cui-middle cui-between"},c.createElement("span",{className:"cui-text-bold"},"Value:"),c.createElement("span",{className:"cui-text-bold"},e.item.defaultValue)))))}var E=n(15);function h(e){var t,n;return c.createElement("div",{className:`cui-hint ${n=e.option,Object(E.b)(n)?"cui-"+n:""} cui-margin-top`},c.createElement("div",{className:"cui-hint-title"},null!==(t=e.title)&&void 0!==t?t:"Hint"),c.createElement("div",{className:"cui-hint-body"},c.createElement("p",null,e.content)))}function v(e){return c.createElement("table",{className:"cui-table"},c.createElement("thead",null,c.createElement("tr",null,e.table.header&&e.table.header.map(e=>c.createElement("th",null,e)))),c.createElement("tbody",null,e.table.data&&e.table.data.map(e=>c.createElement(f,{items:e}))))}function f(e){return c.createElement("tr",null,e.items&&e.items.map(e=>c.createElement("td",null,e)))}function N(e){var t,n,a;const[i,l]=c.useState();let s=Object(r.a)(e.index);return c.useEffect(()=>{l(e.index+e.name+e.pageName)},[i]),c.createElement("div",{className:"cui-padding-vertical "+(e.classes?e.classes:""),id:i},c.createElement("h2",{className:"cui-h2",id:s},e.name),c.createElement("p",null,e.description),e.list&&c.createElement(o,{items:e.list}),e.elements,e.properties&&e.properties.length>0&&c.createElement(d,{items:e.properties}),e.hint&&c.createElement(h,{option:null===(t=e.hint)||void 0===t?void 0:t.option,content:null===(n=e.hint)||void 0===n?void 0:n.content,title:null===(a=e.hint)||void 0===a?void 0:a.title}),e.table&&c.createElement(v,{table:e.table}),e.subSections&&e.subSections.length>0&&e.subSections.map(e=>function(e){return c.createElement("div",{className:e.classes?e.classes:""},c.createElement("h3",{className:"cui-h3"},e.name),c.createElement("p",null,e.description),e.elements)}(e)))}function b(e){return c.useEffect(()=>{},[e.pageName]),c.createElement(c.Fragment,null,e.script&&e.script.sections?e.script.sections.map((t,n)=>c.createElement(N,{key:n,classes:0===n?"cui-padding-remove-top":void 0,name:t.name,index:n,description:t.description,hint:t.hint,properties:t.properties,table:t.table,list:t.list,pageName:e.pageName,elements:t.example})):c.createElement(g,null))}function g(){return c.createElement("div",{className:"cui-container cui-center cui-animation-fade-in"},c.createElement("h2",{className:"cui-h2 cui-text-warning"},"Page is under construction"))}function w(e){return c.createElement("div",{className:"cui-unhidden--l cui-animation-fade-in cui-animation-delay"},e.sections&&e.sections.length>0&&c.createElement("div",{className:"cui-card cui-default cui-sticky aside-card"},c.createElement("div",{className:"cui-card-header"},c.createElement("span",{className:"cui-card-title"},"Sections")),c.createElement("div",{className:"cui-card-body"},c.createElement("ul",{className:"cui-list"},e.sections&&e.sections.map((e,t)=>c.createElement("li",{key:t,className:"cui-overflow-hidden"},c.createElement("a",{href:"#"+Object(r.a)(t),className:"cui-link cui-text-truncate--l cui-width-1-1"},e)))))))}var x=n(36),y=n(37);function k(e){const{id:t}=Object(a.h)(),[n,r]=c.useState({component:null,search:"",error:!1});return c.useEffect(()=>{let e=i.a[t];e?(r({component:e,search:"",error:!1}),Object(x.a)(e.name,e.uri)):r(Object.assign(Object.assign({},n),{error:!0}))},[t]),n.error?c.createElement(O,null):c.createElement("div",{className:"cui-container layout-docs"},c.createElement("div",{className:"cui-unhidden--l"},c.createElement("div",{className:"cui-flex cui-right"},c.createElement("div",{className:"layout-docs-navigation cui-padding-small"},c.createElement("div",{className:"cui-flex cui-middle"},c.createElement(y.a,{value:n.search})),c.createElement("h3",{className:"cui-h3"},"Components"),c.createElement(l.a,{sort:!0})))),n.component?c.createElement("article",{className:"cui-padding-small"},c.createElement(s,{title:n.component.name,description:n.component.description,illustration:n.component.illustration}),c.createElement(b,{script:n.component.script,pageName:n.component.name})):c.createElement(j,null),c.createElement(w,{name:t,sections:n.component&&n.component.script?n.component.script.sections.map(e=>e.name):[]}))}function O(){return c.createElement("div",{className:"cui-container cui-center cui-height-viewport-1-2"},c.createElement("h2",{className:"cui-h2 cui-text-error"},"Page has not been found"))}function j(){return c.createElement("div",{className:"cui-container cui-center cui-height-viewport-1-2"},c.createElement("span",{className:""},"Loading..."))}function C(){const[e,t]=c.useState("");return c.createElement("div",{className:"cui-unhidden--l"},c.createElement("div",{className:"cui-flex cui-right"},c.createElement("div",{className:"layout-docs-navigation cui-padding-small"},c.createElement("div",{className:"cui-flex cui-middle"},c.createElement(y.a,{value:e,onUpdate:function(e){t(e)}})),c.createElement("h3",{className:"cui-h3"},"Components"),c.createElement(l.a,{sort:!0}))))}}}]);
//# sourceMappingURL=cui-light-docs.9.js.map