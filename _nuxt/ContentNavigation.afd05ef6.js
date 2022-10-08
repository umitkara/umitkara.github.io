import{a as p,b as R,B as y,C as V,D as h,T as b,r as s,l as P,E as j,F as O,G as c,h as d,H as E,I as S,k as g,d as r,_ as a,t as $,J as k,e as C,K as w}from"./entry.3b0a3120.js";import{u as x}from"./asyncData.0b8802bb.js";import{h as L,j as M,u as N}from"./query.6b758d44.js";import{w as z,u as B}from"./utils.250e7a87.js";/* empty css                                                                       */import"./ContentDoc.e77a4a3b.js";import"./ContentList.c30c0fb9.js";import"./ContentQuery.04a897e4.js";import"./ContentSlot.0b33da9b.js";import"./DocumentDrivenEmpty.4c4eae8d.js";import"./DocumentDrivenNotFound.10e79dda.js";import"./Markdown.57ecd459.js";import"./ProseCode.0301666f.js";const q=t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const o=z(e?`/navigation/${L(e)}.json`:"/navigation");return $fetch(o,{method:"GET",responseType:"json",params:{_params:M(e||{}),previewToken:N("previewToken").value}})};const T={},F=p({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const o=R();return()=>{var _,l,m;const i=(l=(_=y(t.name)?t.name.value:t.name)!=null?_:o.meta.layout)!=null?l:"default",u=i&&i in T,n=(m=o.meta.layoutTransition)!=null?m:V;return h(b,u&&n,{default:()=>h(T[i],u,e.slots).default()}).default()}}}),G=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),H=p({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const i=s(null),u=P();return j(n=>{if(!u.isHydrating)return o("error",n),i.value=n,!1}),()=>{var n,_;return i.value?(n=e.error)==null?void 0:n.call(e,{error:i}):(_=e.default)==null?void 0:_.call(e)}}}),J=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),K=p({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e}){const o=s(!1);return O(()=>{o.value=!0}),i=>{var l;if(o.value)return(l=e.default)==null?void 0:l.call(e);const u=e.fallback||e.placeholder;if(u)return u();const n=i.fallback||i.placeholder||"",_=i.fallbackTag||i.placeholderTag||"span";return c(_,null,n)}}}),f=new WeakMap;function U(t){if(f.has(t))return f.get(t);const e={...t};return e.render?e.render=(o,...i)=>{var u,n;return o.mounted$?d(E,(u=o.$attrs)!=null?u:o._.attrs,t.render(o,...i)):d("div",(n=o.$attrs)!=null?n:o._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,i)=>{var n;const u=s(!1);return O(()=>{u.value=!0}),Promise.resolve(((n=t.setup)==null?void 0:n.call(t,o,i))||{}).then(_=>typeof _!="function"?{..._,mounted$:u}:(...l)=>u.value?d(E,i.attrs,_(...l)):d("div",i.attrs))},f.set(t,e),e}const W=Object.freeze(Object.defineProperty({__proto__:null,default:K,createClientOnly:U},Symbol.toStringTag,{value:"Module"})),Q=p({name:"ServerPlaceholder",render(){return c("div")}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),Y=p({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t){const e=Z({duration:t.duration,throttle:t.throttle}),o=P();return o.hook("page:start",e.start),o.hook("page:finish",e.finish),S(()=>e.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${e.progress.value}%`,height:`${t.height}px`,opacity:e.isLoading.value?1:0,background:t.color,backgroundSize:`${100/e.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}})}});function Z(t){const e=s(0),o=s(!1),i=g(()=>1e4/t.duration);let u=null,n=null;function _(){m(),e.value=0,o.value=!0,t.throttle?n=setTimeout(v,t.throttle):v()}function l(){e.value=100,A()}function m(){clearInterval(u),clearTimeout(n),u=null,n=null}function I(D){e.value=Math.min(100,e.value+D)}function A(){m(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function v(){u=setInterval(()=>{I(i.value)},100)}return{progress:e,isLoading:o,start:_,finish:l,clear:m}}const tt=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));r(()=>a(()=>import("./left_banner.4104a085.js"),["left_banner.4104a085.js","pp.fc023fc2.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./left_navbar.60099b59.js"),["left_navbar.60099b59.js","entry.3b0a3120.js","entry.d5d6f852.css","composables.99656f95.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./portfolio_item.e2d40c7a.js"),["portfolio_item.e2d40c7a.js","portfolio_item.b9bd57ef.css","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./right_hamburger_menu.c0491cea.js"),["right_hamburger_menu.c0491cea.js","entry.3b0a3120.js","entry.d5d6f852.css","composables.99656f95.js","pp.fc023fc2.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./skillbar.2d69eef7.js"),["skillbar.2d69eef7.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentDoc.e77a4a3b.js"),["ContentDoc.e77a4a3b.js","entry.3b0a3120.js","entry.d5d6f852.css","head.90b1b9e4.js","ContentQuery.04a897e4.js","asyncData.0b8802bb.js","query.6b758d44.js","utils.250e7a87.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentList.c30c0fb9.js"),["ContentList.c30c0fb9.js","ContentQuery.04a897e4.js","entry.3b0a3120.js","entry.d5d6f852.css","asyncData.0b8802bb.js","query.6b758d44.js","utils.250e7a87.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>rt),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentQuery.04a897e4.js"),["ContentQuery.04a897e4.js","entry.3b0a3120.js","entry.d5d6f852.css","asyncData.0b8802bb.js","query.6b758d44.js","utils.250e7a87.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.3b0a3120.js").then(t=>t.a8),["entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.3b0a3120.js").then(t=>t.a7),["entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentSlot.0b33da9b.js"),["ContentSlot.0b33da9b.js","utils.250e7a87.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./DocumentDrivenEmpty.4c4eae8d.js"),["DocumentDrivenEmpty.4c4eae8d.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./DocumentDrivenNotFound.10e79dda.js"),["DocumentDrivenNotFound.10e79dda.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./Markdown.57ecd459.js"),["Markdown.57ecd459.js","ContentSlot.0b33da9b.js","utils.250e7a87.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseA.f8fddd88.js"),["ProseA.f8fddd88.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseBlockquote.0c5c33a2.js"),["ProseBlockquote.0c5c33a2.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseCode.0301666f.js"),["ProseCode.0301666f.js","ProseCode.e63e49c6.css","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseCodeInline.ce8da249.js"),["ProseCodeInline.ce8da249.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseEm.38300967.js"),["ProseEm.38300967.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH1.23798359.js"),["ProseH1.23798359.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH2.d3bf1352.js"),["ProseH2.d3bf1352.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH3.6c5e42de.js"),["ProseH3.6c5e42de.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH4.df4ffd46.js"),["ProseH4.df4ffd46.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH5.b3554a5b.js"),["ProseH5.b3554a5b.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH6.79cad79d.js"),["ProseH6.79cad79d.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseHr.602775f2.js"),["ProseHr.602775f2.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseImg.5e94bad1.js"),["ProseImg.5e94bad1.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseLi.51265dac.js"),["ProseLi.51265dac.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseOl.9b67e6d0.js"),["ProseOl.9b67e6d0.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseP.8927b458.js"),["ProseP.8927b458.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseStrong.e095b48b.js"),["ProseStrong.e095b48b.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTable.3ad1abcb.js"),["ProseTable.3ad1abcb.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTbody.8dc12ac2.js"),["ProseTbody.8dc12ac2.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTd.69fdfb1b.js"),["ProseTd.69fdfb1b.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTh.b5803e3e.js"),["ProseTh.b5803e3e.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseThead.e966b3ef.js"),["ProseThead.e966b3ef.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTr.405cd6e2.js"),["ProseTr.405cd6e2.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseUl.308273dc.js"),["ProseUl.308273dc.js","entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./welcome.c00e7b41.js"),["welcome.c00e7b41.js","portfolio_item.b9bd57ef.css","entry.3b0a3120.js","entry.d5d6f852.css","asyncData.0b8802bb.js","query.6b758d44.js","utils.250e7a87.js","ContentDoc.e77a4a3b.js","head.90b1b9e4.js","ContentQuery.04a897e4.js","ContentList.c30c0fb9.js","ContentSlot.0b33da9b.js","DocumentDrivenEmpty.4c4eae8d.js","DocumentDrivenNotFound.10e79dda.js","Markdown.57ecd459.js","ProseCode.0301666f.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>G),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>W),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.3b0a3120.js").then(t=>t.a6),["entry.3b0a3120.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./component.vue3.fc7fbbbb.js"),["component.vue3.fc7fbbbb.js","portfolio_item.b9bd57ef.css","entry.3b0a3120.js","entry.d5d6f852.css","asyncData.0b8802bb.js","query.6b758d44.js","utils.250e7a87.js","ContentDoc.e77a4a3b.js","head.90b1b9e4.js","ContentQuery.04a897e4.js","ContentList.c30c0fb9.js","ContentSlot.0b33da9b.js","DocumentDrivenEmpty.4c4eae8d.js","DocumentDrivenNotFound.10e79dda.js","Markdown.57ecd459.js","ProseCode.0301666f.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));const et=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=$(t),o=g(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!o.value&&k("dd-navigation").value){const{navigation:u}=B();return{navigation:u}}const{data:i}=await x(`content-navigation-${L(o.value)}`,()=>q(o.value));return{navigation:i}},render(t){const e=C(),{navigation:o}=t,i=_=>d(w,{to:_._path},()=>_.title),u=(_,l)=>d("ul",l?{"data-level":l}:null,_.map(m=>m.children?d("li",null,[i(m),u(m.children,l+1)]):d("li",null,i(m)))),n=_=>u(_,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):n(o)}}),rt=Object.freeze(Object.defineProperty({__proto__:null,default:et},Symbol.toStringTag,{value:"Module"}));export{rt as C,K as _};
