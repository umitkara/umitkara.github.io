import{f as p,h as g,S as u,o,b as d,e as t,K as x,Y as b,u as h,W as f,X as v,Q as y,V as k,P as w,t as c,N,a as B}from"./entry.27d030ca.js";import{u as S}from"./asyncData.4373cced.js";import{q as C}from"./query.a778562c.js";import"./utils.e0dad20f.js";const I=s=>(f("data-v-ba86d71b"),s=s(),v(),s),V={class:"dark:bg-gray-800 dark:text-white box-border py-16 px-12"},$=I(()=>t("h1",{class:"text-4xl font-semibold mb-8 relative"},[y(" Blog "),t("div",{class:"pat pattern-dots-sm w-12 h-8 text-blue-500 dark:text-blue-400 inline-block absolute"})],-1)),q={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},A={class:"img-hover-zoom overflow-hidden"},D=["src","alt"],F={class:"p-4 bg-gray-300 dark:bg-gray-700"},j={class:"mb-2 text-sm text-gray-500 dark:text-gray-400"},z={class:"text-xl font-semibold"},E={name:"Blog",data(){return{}},methods:{},mounted(){this.$emit("pagename","blog")}},K=p({...E,async setup(s){let a,r;g();const{data:_}=([a,r]=u(()=>S("home",()=>C("/").only(["title","date","author","cover","imgFolderName","slug","image"]).sort({date:-1}).find())),a=await a,r(),a);return(i,L)=>{const m=N;return o(),d("div",V,[$,t("div",q,[(o(!0),d(x,null,b(h(_),e=>(o(),d("div",{key:e.id},[k(m,{class:"flex flex-col",to:`/blog/${e.slug}/`},{default:w(()=>{var n,l;return[t("div",A,[t("img",{src:(n=e.image)==null?void 0:n.src,alt:(l=e.image)==null?void 0:l.alt,draggable:"false"},null,8,D)]),t("div",F,[t("div",j,c(i.$dayjs(e.date).fromNow()),1),t("div",z,c(e.title),1)])]}),_:2},1032,["to"])]))),128))])])}}});const W=B(K,[["__scopeId","data-v-ba86d71b"]]);export{W as default};
