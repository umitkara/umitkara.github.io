import{f as w,h as i,S as v,o,b as n,u as e,e as s,t as c,Q as d,c as C,U as u,V as B,P as N,k as S,N as V,W as I,X as M,a as Y}from"./entry.257f8804.js";import{u as $}from"./asyncData.b886dc06.js";import{q as D}from"./query.9d2b9fd6.js";import{u as q}from"./head.85ec5a29.js";import"./utils.9549d6e7.js";const x=a=>(I("data-v-8a0f7ccf"),a=a(),M(),a),A={class:"dark:bg-gray-800 dark:text-white box-border py-16 px-4 md:px-8 lg:px-12"},E={key:0},R=["src","alt"],T={class:"bg-gray-200 dark:bg-gray-800 dark:text-white px-8 py-6 content mx-4 md:mx-8 xl:mx-16 rounded-md"},j={class:"text-4xl font-extrabold mb-6"},G={class:"mb-6"},H={key:1,class:"min-h-screen"},L=x(()=>s("h1",{class:"text-4xl font-extrabold mb-6 text-center"}," Error ",-1)),O={key:0,class:"text-center"},P=x(()=>s("p",null," This blog post does not exist. ",-1)),Q={name:"Blog",data(){return{}},methods:{},mounted(){this.$emit("pagename","blog")}},U=w({...Q,async setup(a){let r,l;const{path:m}=i(),h=i(),{data:t,error:g,pending:f}=([r,l]=v(()=>$(`content-${m}`,()=>D().where({slug:h.params.slug}).findOne())),r=await r,l(),r);return q(t),(b,W)=>{var _,p;const k=S,y=V;return o(),n("div",A,[!e(g)&&!e(f)?(o(),n("div",E,[s("img",{src:(_=e(t).image)==null?void 0:_.src,alt:(p=e(t).image)==null?void 0:p.alt,draggable:"false",class:"w-full"},null,8,R),s("div",T,[s("h1",j,c(e(t).title),1),s("p",G,[d(" By "),s("b",null,c(e(t).author),1),d(" \u2022 "+c(b.$dayjs(e(t).date).format("MMMM D, YYYY")),1)]),e(t)?(o(),C(k,{key:0,value:e(t),class:"prose prose-strong:font-bold dark:prose-strong:text-white dark:prose-p:text-white prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg dark:prose-headings:text-white dark:prose-a:text-gray-200 prose-code:bg-slate-300 dark:prose-code:bg-slate-700 dark:prose-code:text-white prose-pre:bg-gray-300 dark:prose-pre:bg-gray-700 max-w-none"},null,8,["value"])):u("",!0)])])):(o(),n("div",H,[L,e(t)?u("",!0):(o(),n("div",O,[P,B(y,{class:"text-blue-500 font-semibold hover:underline",to:"/blog"},{default:N(()=>[d(" Go back to the blog. ")]),_:1})]))]))])}}});const Z=Y(U,[["__scopeId","data-v-8a0f7ccf"]]);export{Z as default};
