import{f as u,h as m,S as g,o,b as d,e as t,K as h,Y as x,u as b,W as f,X as v,Q as y,V as k,P as w,t as c,N,a as B}from"./entry.50891ee3.js";import{u as S}from"./asyncData.d5a27688.js";import{q as C}from"./query.c5684bee.js";import"./utils.3ed9641c.js";const I=s=>(f("data-v-348b74a0"),s=s(),v(),s),V={class:"dark:bg-gray-800 dark:text-white box-border py-16 px-12"},$=I(()=>t("h1",{class:"text-4xl font-semibold mb-8 relative"},[y(" Blog "),t("div",{class:"pat pattern-dots-sm w-12 h-8 text-blue-500 dark:text-blue-400 inline-block absolute"})],-1)),j={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},q={class:"img-hover-zoom overflow-hidden aspect-video"},A=["src","alt"],D={class:"p-4 bg-gray-300 dark:bg-gray-700"},F={class:"mb-2 text-sm text-gray-500 dark:text-gray-400"},z={class:"text-xl font-semibold"},E={name:"Blog",data(){return{}},methods:{},mounted(){this.$emit("pagename","blog")}},K=u({...E,async setup(s){let a,l;m();const{data:i}=([a,l]=g(()=>S("home",()=>C("/").only(["title","date","author","cover","imgFolderName","slug","image"]).sort({date:-1}).find())),a=await a,l(),a);return(_,L)=>{const p=N;return o(),d("div",V,[$,t("div",j,[(o(!0),d(h,null,x(b(i),e=>(o(),d("div",{key:e.id},[k(p,{class:"flex flex-col",to:`/blog/${e.slug}/`},{default:w(()=>{var r,n;return[t("div",q,[t("img",{src:(r=e.image)==null?void 0:r.src,alt:(n=e.image)==null?void 0:n.alt,draggable:"false",class:"w-full h-full object-cover"},null,8,A)]),t("div",D,[t("div",F,c(_.$dayjs(e.date).fromNow()),1),t("div",z,c(e.title),1)])]}),_:2},1032,["to"])]))),128))])])}}});const W=B(K,[["__scopeId","data-v-348b74a0"]]);export{W as default};
