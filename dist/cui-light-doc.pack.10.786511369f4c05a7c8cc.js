(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{63:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(2),c=n(33);function i(e){var t,n;const[i,l]=a.useState("");function s(t){l(t),Object(c.b)(e.onUpdate)&&e.onUpdate(t)}return a.useEffect(()=>{l(e.value)},[e.value]),a.createElement("div",{className:null!==(t="cui-input-mix "+e.className)&&void 0!==t?t:""},a.createElement("input",{type:"text",className:"cui-input",placeholder:null!==(n=e.filter)&&void 0!==n?n:"Filter",value:i,onChange:function(e){s(e.target.value)},disabled:e.disabled}),(Object(c.b)(i)||e.alwaysShow)&&a.createElement("a",{className:"cui-icon","cui-icon":"clear",onClick:()=>s("")}))}},69:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return J}));var a=n(2),c=n(7),i=n(29),l=n(34);function s(e){return a.createElement("div",{className:"cui-unhidden--l cui-animation-fade-in cui-animation-delay"},e.sections&&e.sections.length>0&&a.createElement("div",{className:"cui-card cui-default cui-sticky aside-card"},a.createElement("div",{className:"cui-card-header"},a.createElement("span",{className:"cui-card-title"},"Sections")),a.createElement("div",{className:"cui-card-body"},a.createElement("ul",{className:"cui-list"},e.sections&&e.sections.map((e,t)=>a.createElement("li",{key:t,className:"cui-overflow-hidden"},a.createElement("a",{href:"#"+Object(l.a)(t),className:"cui-link cui-text-truncate--l cui-width-1-1"},e)))))))}var r=n(38),m=n(63),u=n(18),o=n(17);function d(e){return a.createElement("a",{className:"cui-link"+(e.classes?" "+e.classes:""),onClick:function(){Object(o.b)(e.value).then(()=>{var t;(null===(t=e.showToast)||void 0===t||t)&&window.$cui.emit("toast","~toast-plugin",e.value+" copied")})}},e.value)}function p(e){return a.createElement("ul",{className:"cui-list cui-bullet"},e&&e.items&&e.items.map((e,t)=>a.createElement("li",{key:t},a.createElement(d,{value:e.name,classes:"cui-accent"}),a.createElement("span",{className:"cui-margin-small-left"},e.description))))}function E(e){return a.createElement("div",{className:"cui-flex-grid cui-flex-grid-match cui-child-width-1-1 cui-child-width-1-2--l"},e.items&&e.items.map(e=>a.createElement(v,{key:e.name,item:e})))}function v(e){return a.createElement("div",null,a.createElement("div",{className:"cui-card cui-background-shade"},a.createElement("div",{className:"cui-card-header"},a.createElement("span",{className:"cui-card-title"},e.item.name)),a.createElement("div",{className:"cui-card-body"},a.createElement("p",null,e.item.description)),a.createElement("div",{className:"cui-card-footer"},a.createElement("div",{className:"cui-flex cui-middle cui-between"},a.createElement("span",null,"Type:"),a.createElement("span",null,e.item.type)),a.createElement("div",{className:"cui-flex cui-middle cui-between"},a.createElement("span",{className:"cui-text-bold"},"Value:"),a.createElement("span",{className:"cui-text-bold"},e.item.defaultValue)))))}var h=n(33);function f(e){var t,n;return a.createElement("div",{className:`cui-hint ${n=e.option,Object(h.b)(n)?"cui-"+n:""} cui-margin-top`},a.createElement("div",{className:"cui-hint-title"},null!==(t=e.title)&&void 0!==t?t:"Hint"),a.createElement("div",{className:"cui-hint-body"},a.createElement("p",null,e.content)))}function N(e){return a.createElement("table",{className:"cui-table"},a.createElement("thead",null,a.createElement("tr",null,e.table.header&&e.table.header.map(e=>a.createElement("th",null,e)))),a.createElement("tbody",null,e.table.data&&e.table.data.map(e=>a.createElement(b,{items:e}))))}function b(e){return a.createElement("tr",null,e.items&&e.items.map(e=>a.createElement("td",null,e)))}function g(e){var t,n,c;const[i,s]=a.useState();let r=Object(l.a)(e.index);return a.useEffect(()=>{s(e.index+e.name+e.pageName)},[i]),a.createElement("div",{className:"cui-padding-vertical "+(e.classes?e.classes:""),id:i},a.createElement("h2",{className:"cui-h2",id:r},e.name),a.createElement("p",null,e.description),e.list&&a.createElement(p,{items:e.list}),e.elements,e.properties&&e.properties.length>0&&a.createElement(E,{items:e.properties}),e.hint&&a.createElement(f,{option:null===(t=e.hint)||void 0===t?void 0:t.option,content:null===(n=e.hint)||void 0===n?void 0:n.content,title:null===(c=e.hint)||void 0===c?void 0:c.title}),e.table&&a.createElement(N,{table:e.table}),e.subSections&&e.subSections.length>0&&e.subSections.map(e=>function(e){return a.createElement("div",{className:e.classes?e.classes:""},a.createElement("h3",{className:"cui-h3"},e.name),a.createElement("p",null,e.description),e.elements)}(e)))}function w(e){return a.useEffect(()=>{},[e.pageName]),a.createElement(a.Fragment,null,e.script&&e.script.sections?e.script.sections.map((t,n)=>a.createElement(g,{key:n,classes:0===n?"cui-padding-remove-top":void 0,name:t.name,index:n,description:t.description,hint:t.hint,properties:t.properties,table:t.table,list:t.list,pageName:e.pageName,elements:t.example})):a.createElement(y,null))}function y(){return a.createElement("div",{className:"cui-container cui-center cui-animation-fade-in"},a.createElement("h2",{className:"cui-h2 cui-text-warning"},"Page is under construction"))}function x(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"cui-flex cui-middle cui-center cui-left--m cui-height-viewport-1-2 cui-height-viewport-1-4--m"},a.createElement("div",{className:"cui-text-center cui-text-left--m"},a.createElement("h1",{className:"cui-article-title"},e.title),a.createElement("p",{className:""},e.description))),e.illustration&&a.createElement("div",{className:"cui-flex-center"},a.createElement("span",{className:"cui-icon docs-illustration","cui-icon":e.illustration})))}function k(e){return e.component?a.createElement("article",{className:"cui-padding-small"},a.createElement(x,{title:e.component.name,description:e.component.description,illustration:e.component.illustration}),a.createElement(w,{script:e.component.script,pageName:e.component.name})):a.createElement(O,null)}function j(){return a.createElement("div",{className:"cui-container cui-center cui-height-viewport-1-2"},a.createElement("h2",{className:"cui-h2 cui-text-error"},"Page has not been found"))}function O(){return a.createElement("div",{className:"cui-container cui-center cui-height-viewport-1-2"},a.createElement("span",{className:""},"Loading..."))}function S(e){return{type:"set-error",payload:e}}function C(e,t){switch(t.type){case"set-component":return Object.assign(Object.assign({},e),{component:t.payload,search:"",error:!1});case"set-error":return Object.assign(Object.assign({},e),{error:!0});default:throw new Error("unknown action")}}const F={component:null,search:"",error:!1,errorMessage:""};function J(e){const{id:t,type:n}=Object(c.h)(),[l,o]=a.useReducer(C,F);return a.useEffect(()=>{u.d.call(n).then(e=>{e&&t||o(S("Module not found"));let n=e[t];n?(o(function(e){return{type:"set-component",payload:e}}(n)),Object(r.a)(n.name,n.uri)):o(S("Component not found"))},e=>{o(S(e.message))})},[t]),l.error?a.createElement(j,null):a.createElement("div",{className:"cui-container layout-docs"},a.createElement("div",{className:"cui-unhidden--l"},a.createElement("div",{className:"cui-flex cui-right"},a.createElement("div",{className:"layout-docs-navigation cui-padding-small"},a.createElement("div",{className:"cui-flex cui-middle"},a.createElement(m.a,{value:l.search})),a.createElement("h3",{className:"cui-h3"},"Components"),a.createElement(i.a,{sort:!0,type:n})))),a.createElement(k,{component:l.component}),a.createElement(s,{name:t,sections:l.component&&l.component.script?l.component.script.sections.map(e=>e.name):[]}))}}}]);
//# sourceMappingURL=cui-light-doc.pack.10.786511369f4c05a7c8cc.js.map