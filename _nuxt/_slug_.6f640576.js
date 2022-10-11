import{f as k,h as x,V as y,o as a,b as n,u as t,e,t as o,S as d,c as w,U as v,W as M,P as $,k as C,L as S,X as Y,Y as B,K as V,Z as z,$ as D,a as I}from"./entry.88213ba7.js";import{u as N}from"./head.91110927.js";const j=l=>(Y("data-v-2652cdf1"),l=l(),B(),l),A={class:"dark:bg-gray-800 dark:text-white box-border py-16 px-4 md:px-8 lg:px-12 min-h-screen"},R={key:0},T=["src","alt"],q={class:"bg-gray-200 dark:bg-gray-800 dark:text-white px-8 py-6 content mx-4 md:mx-8 xl:mx-16 rounded-md"},E={class:"text-4xl font-extrabold mb-6"},H={key:0,class:"mb-6"},K={key:1,class:"mb-6"},L={key:1,class:"min-h-screen"},O=j(()=>e("p",{class:"text-gray-800 dark:text-white text-xl font-semibold mt-4 mb-4 text-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"fill-current w-16 h-16 inline"},[e("path",{d:"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480zM256 304c8.844 0 16-7.156 16-16V128c0-8.844-7.156-16-16-16S240 119.2 240 128v160C240 296.8 247.2 304 256 304zM256 344c-13.25 0-24 10.75-24 24s10.75 24 24 24s24-10.75 24-24S269.3 344 256 344z"})])],-1)),P={class:"text-4xl font-extrabold mb-6 text-center"},U={class:"text-gray-800 dark:text-white text-xl font-semibold mt-4 mb-2 text-center"},W={class:"text-gray-800 dark:text-white text-lg font-semibold mt-4 mb-2 text-center"},X={name:"Blog",data(){return{}},methods:{},mounted(){this.$emit("pagename","blog"),window.scrollTo(0,0)}},Z=k({...X,async setup(l){let c,_;const{path:m}=x(),h=x(),{data:s,error:g,pending:u}=([c,_]=y(()=>V(`content-${m}`,()=>D().where({slug:h.params.slug}).findOne())),c=await c,_(),c);return N(s),(r,F)=>{var i,p;const b=C,f=S;return a(),n("div",A,[!t(g)&&!t(u)?(a(),n("div",R,[e("img",{src:(i=t(s).image)==null?void 0:i.src,alt:(p=t(s).image)==null?void 0:p.alt,draggable:"false",class:"w-full"},null,8,T),e("div",q,[e("h1",E,o(t(s).title),1),this.$i18n.locale=="en"?(a(),n("p",H,[d(" By "),e("b",null,o(t(s).author),1),d(" \u2022 "+o(r.$dayjs(t(s).date).format("MMMM D, YYYY")),1)])):(a(),n("p",K,[e("b",null,o(t(s).author),1),d(" taraf\u0131ndan \u2022 "+o(r.$dayjs(t(s).date).locale(t(z)).format("D MMMM YYYY")),1)])),t(s)?(a(),w(b,{key:2,value:t(s),class:"prose prose-strong:font-bold dark:prose-strong:text-white dark:prose-p:text-white prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg dark:prose-headings:text-white dark:prose-a:text-gray-200 prose-code:bg-slate-300 dark:prose-code:bg-slate-700 dark:prose-code:text-white prose-pre:bg-gray-300 dark:prose-pre:bg-gray-700 max-w-none"},null,8,["value"])):v("",!0)])])):(a(),n("div",L,[O,e("h1",P,o(r.$t("blogpost.error")),1),e("p",U,o(r.$t("blogpost.error_message")),1),e("p",W,[M(f,{to:"/blog",class:"text-blue-500 dark:text-white font-semibold hover:underline"},{default:$(()=>[d(o(r.$t("blogpost.back")),1)]),_:1})])]))])}}});const Q=I(Z,[["__scopeId","data-v-2652cdf1"]]);export{Q as default};
