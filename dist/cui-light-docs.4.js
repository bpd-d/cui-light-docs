(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{54:function(e,t,c){"use strict";c.r(t),c.d(t,"CATEGORY_ALL",(function(){return b})),c.d(t,"default",(function(){return v}));var a=c(0),n=c(8),r=c(10);function i(e){const[t,c]=a.useState({value:e.current});let n=e.options.map(e=>a.createElement("option",{key:e,value:e},Object(r.a)(e)));return a.createElement("select",{className:"cui-select",name:e.name,value:t.value,placeholder:e.placeholder,onChange:function(t){c({value:t.target.value}),e.onChange&&e.onChange(t.target.value)}},n)}function l(e){const t=e.text&&e.text.length>0,c=a.createElement("span",null,"Results for: ",a.createElement("span",{className:"cui-text-italic"},e.text)),n=t?c:"";return a.createElement("h2",{className:"cui-h2 cui-margin-remove"},n)}var u=c(4);function o(e){return a.createElement("div",{className:"cui-flex cui-between-m cui-middle"},a.createElement(l,{text:e.filter.filter}),a.createElement("div",{className:"cui-flex cui-right--s cui-flex-grow cui-middle"},a.createElement("div",{className:"cui-form cui-flex cui-between cui-left--s cui-width-1-1 cui-width-auto--m cui-margin-small cui-middle"},a.createElement("label",{htmlFor:"filter",className:"cui-form-label cui-margin-small-right"},"Filter"),a.createElement("input",{className:"cui-input",type:"text",placeholder:"Filter",value:e.filter.filter,onChange:function(t){e.onUpdate&&e.onUpdate(Object.assign(Object.assign({},e.filter),{filter:t.target.value}))}})),a.createElement("div",{className:"cui-form cui-flex cui-between cui-left--s cui-width-1-1 cui-width-auto--m cui-margin-small cui-middle"},a.createElement("label",{htmlFor:"categories",className:"cui-form-label cui-margin-small-right"},"Categories"),a.createElement(i,{name:"categories",options:e.categories,current:e.filter.category,placeholder:"Category",onChange:function(t){e.onUpdate&&e.onUpdate(Object.assign(Object.assign({},e.filter),{category:t}))}})),a.createElement(n.b,{to:u.a.builder.uri,className:"cui-button cui-accent cui-width-1-1 cui-width-auto--m cui-margin-small cui-icon-margin","cui-icon":"wrench"},"Builder")))}var s=c(32);function m(e){return a.createElement("div",{className:"cui-card cui-default"},a.createElement("div",{className:"cui-card-body cui-flex-center cui-padding-large"},a.createElement("span",{className:"cui-icon","cui-icon":e.code})),a.createElement("div",{className:"cui-card-footer cui-flex-center cui-text-nowrap cui-overflow-hidden"},a.createElement("a",{href:"#",className:"cui-link",onClick:function(){Object(r.b)(e.code).then(e=>{Object(s.a)(e+" copied")})}},e.name)))}function d(e){return a.createElement("li",{className:"cui-active"},a.createElement("a",{className:"cui-accordion-title"},Object(r.a)(e.group.name)),a.createElement("div",{className:"cui-accordion-content cui-flex-grid cui-child-width-1-2 cui-child-width-1-4--m cui-child-width-1-6--l"},e.group.data.map(e=>a.createElement("div",{key:e.code},a.createElement(m,{name:e.name,code:e.code})))))}function f(e){const[t,c]=a.useState([]);return a.useEffect(()=>{},[e.icons]),a.createElement("ul",{className:"cui-accordion","cui-accordion":"single: false"},function(e){let t=[];for(let c in e)t.push(a.createElement(d,{key:c,group:e[c]}));return t}(e.icons))}var g=c(35),h=c(31),p=c(28),E=c(7);const b="all";function v(e){const[t,c]=a.useState({filter:{category:b,filter:""},grouped:{}}),n=a.useRef([]),[r,i]=a.useState(!1),l=Object(E.g)(),u=Object(E.f)(),{params:s,search:m}=function(e){const t=new URLSearchParams(e.search);return a.useEffect(()=>{},[e.search]),{params:t,search:e.search}}(l);function d(e,t){return e.find(e=>e==t.category)||e.push(t.category),e}function v(e){return new Promise((t,c)=>{var a,n,r;t((a=e=>e.category,n=g.a,r=t=>function(e,t){return!t||""===t||e.code.includes(t.toLowerCase())}(t,e.filter)&&function(e,t){return!t||t===b||e.category===t}(t,e.category),n?n.reduce((e,t,c)=>{if(r&&!r(t,c))return e;let n=a(t,c);return n?function(e,t,c){return e[c]?e[c].data.push(t):e[c]={name:c,data:[t]},e}(e,t,n):e},{}):null))})}return a.useEffect(()=>{i(!0),0===n.current.length&&(n.current=g.a.reduce(d,[]));const e=function(e){const t=s.get("filter"),c=s.get("category");return{filter:null!=t?t:"",category:c&&n.current.includes(c)?c:b}}(l.search);v(e).then(a=>{c(Object.assign(Object.assign({},t),{filter:e,grouped:a})),i(!1)})},[m]),a.createElement(h.a,{name:"Icons",description:"cUI icons pack"},a.createElement(o,{categories:n.current,filter:t.filter,onUpdate:function(e){const a=new URLSearchParams;a.set("filter",e.filter),a.set("category",e.category),u.push({pathname:l.pathname,search:a.toString()}),c(Object.assign(Object.assign({},t),{filter:e}))}}),r?a.createElement(p.a,null):a.createElement(f,{icons:t.grouped}))}}}]);
//# sourceMappingURL=cui-light-docs.4.js.map