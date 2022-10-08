import{a as g,b as l,S as x,o as c,G as h,O as s,u as t,Q as o,P as p,c as f,U as y,f as b,L as k}from"./entry.b62b6df5.js";import{u as w}from"./asyncData.50e803e3.js";import{q as v}from"./query.f50fe152.js";import{u as B}from"./head.e06c8efd.js";import"./utils.0928bcde.js";const C={class:"dark:bg-gray-800 dark:text-white box-border py-16 px-4 md:px-8 lg:px-12"},M=["src","alt"],Y={class:"bg-gray-200 dark:bg-gray-800 dark:text-white px-8 py-6 content mx-4 md:mx-8 xl:mx-16 rounded-md"},$={class:"text-4xl font-extrabold mb-6"},D={class:"mb-6"},N={name:"Blog",data(){return{}},methods:{},mounted(){this.$emit("pagename","blog")}},V=g({...N,async setup(q){let a,r;const{path:_}=l(),m=l(),{data:e}=([a,r]=x(()=>w(`home-${_}`,()=>v().where({slug:m.params.slug}).findOne())),a=await a,r(),a);return B(e),(i,A)=>{var n,d;const u=b;return c(),h("div",C,[s("img",{src:(n=t(e).image)==null?void 0:n.src,alt:(d=t(e).image)==null?void 0:d.alt,draggable:"false",class:"w-full"},null,8,M),s("div",Y,[s("h1",$,o(t(e).title),1),s("p",D,[p(" By "),s("b",null,o(t(e).author),1),p(" \u2022 "+o(i.$dayjs(t(e).date).format("MMMM D, YYYY")),1)]),t(e)?(c(),f(u,{key:0,value:t(e),class:"prose prose-strong:font-bold dark:prose-strong:text-white dark:prose-p:text-white prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg dark:prose-headings:text-white dark:prose-a:text-gray-200 prose-code:bg-slate-300 dark:prose-code:bg-slate-700 dark:prose-code:text-white prose-pre:bg-gray-300 dark:prose-pre:bg-gray-700 max-w-none"},null,8,["value"])):y("",!0)])])}}});const G=k(V,[["__scopeId","data-v-cf926639"]]);export{G as default};
