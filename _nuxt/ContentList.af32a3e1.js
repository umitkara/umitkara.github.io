import p from"./ContentQuery.92d493eb.js";import{a as m,e as c,h as o}from"./entry.ae1103b5.js";import"./asyncData.b1350b6b.js";import"./query.cb01ec4c.js";import"./utils.d8dd40d7.js";const q=m({name:"ContentList",props:{path:{type:String,required:!1,default:"/"},query:{type:Object,required:!1,default:void 0}},render(a){const e=c(),{path:f,query:i}=a,d=Object.assign(i||{},{path:f}),r=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:t,data:n},null,2));return o(p,d,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:u})=>e==null?void 0:e.default({list:t,refresh:n,isPartial:u,...this.$attrs}):({data:t})=>r("default",t),empty:t=>e!=null&&e.empty?e.empty(t):({data:n})=>r("default",n),"not-found":t=>{var n;return e!=null&&e["not-found"]?(n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t):({data:u})=>r("not-found",u)}})}});export{q as default};
