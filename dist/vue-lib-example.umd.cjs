(function(o,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(o=typeof globalThis<"u"?globalThis:o||self,e(o.VueLibExample={},o.Vue))})(this,function(o,e){"use strict";const r="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e",a=t=>(e.pushScopeId("data-v-a9bae2ec"),t=t(),e.popScopeId(),t),p={class:"greetings"},d={class:"green"},l=a(()=>e.createElementVNode("h3",null,[e.createTextVNode(" You’ve successfully created a project with "),e.createElementVNode("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite"),e.createTextVNode(" + "),e.createElementVNode("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue 3"),e.createTextVNode(". ")],-1)),i=e.defineComponent({__name:"HelloWorld",props:{msg:{}},setup(t){return(c,s)=>(e.openBlock(),e.createElementBlock("div",p,[e.createElementVNode("h1",d,e.toDisplayString(c.msg),1),l]))}}),n=(t,c)=>{const s=t.__vccOpts||t;for(const[g,V]of c)s[g]=V;return s},_=n(i,[["__scopeId","data-v-a9bae2ec"]]),h=(t=>(e.pushScopeId("data-v-24750e22"),t=t(),e.popScopeId(),t))(()=>e.createElementVNode("img",{alt:"Vue logo",class:"logo",src:r,width:"125",height:"125"},null,-1)),m={class:"wrapper"},f=n(e.defineComponent({__name:"App",setup(t){return(c,s)=>(e.openBlock(),e.createElementBlock("header",null,[h,e.createElementVNode("div",m,[e.createVNode(_,{msg:"You did it!"})])]))}}),[["__scopeId","data-v-24750e22"]]);o.App=f,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});