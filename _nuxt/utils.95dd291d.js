import{z as l,A as o}from"./entry.1d3e9487.js";const y=["p","h1","h2","h3","h4","h5","h6","li"];function n(r,t){return r.type===t||typeof r.type=="object"&&r.type.tag===t||r.tag===t}function s(r){return n(r,"text")||typeof r.children=="string"}function c(r){return Array.isArray(r.children)||typeof r.children=="string"?r.children:typeof r.children.default=="function"?r.children.default():[]}function u(r){if(!r)return"";if(Array.isArray(r))return r.map(u).join("");if(s(r))return r.children||r.value;const t=c(r);return Array.isArray(t)?t.map(u).join(""):""}function a(r,t=["p"]){if(Array.isArray(r))return r.flatMap(e=>a(e,t));let i=r;return t.some(e=>e==="*"||n(r,e))&&(i=c(r)||r,!Array.isArray(i)&&y.some(e=>n(r,e))&&(i=[i])),i}function f(r,t=["p"]){return r=Array.isArray(r)?r:[r],t.length?r.flatMap(i=>f(a(i,[t[0]]),t.slice(1))).filter(i=>!(s(i)&&u(i).trim()==="")):r}const p=r=>l(r,"/api/"+o().public.content.base),m=()=>({unwrap:a,flatUnwrap:f}),A=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxtjs.org/guide/writing/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")};export{m as a,A as u,p as w};
