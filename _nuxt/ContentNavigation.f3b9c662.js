import{a as p,b as R,B as y,C as V,D as h,T as b,r as s,l as P,E as j,F as O,G as c,h as d,H as E,I as S,k as g,d as r,_ as a,t as $,J as k,e as C,K as w}from"./entry.00a8a081.js";import{u as x}from"./asyncData.ba00a57d.js";import{h as L,j as M,u as N}from"./query.78db53e2.js";import{w as z,u as B}from"./utils.f5e6b6f0.js";/* empty css                                                                       */import"./ContentDoc.0955f8cf.js";import"./ContentList.30d391e8.js";import"./ContentQuery.f051e29a.js";import"./ContentSlot.a457ace8.js";import"./DocumentDrivenEmpty.1b8b741d.js";import"./DocumentDrivenNotFound.3f6916a2.js";import"./Markdown.50775f0d.js";import"./ProseCode.bfdf2a39.js";const q=t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const o=z(e?`/navigation/${L(e)}.json`:"/navigation");return $fetch(o,{method:"GET",responseType:"json",params:{_params:M(e||{}),previewToken:N("previewToken").value}})};const T={},F=p({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const o=R();return()=>{var _,l,m;const i=(l=(_=y(t.name)?t.name.value:t.name)!=null?_:o.meta.layout)!=null?l:"default",u=i&&i in T,n=(m=o.meta.layoutTransition)!=null?m:V;return h(b,u&&n,{default:()=>h(T[i],u,e.slots).default()}).default()}}}),G=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),H=p({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const i=s(null),u=P();return j(n=>{if(!u.isHydrating)return o("error",n),i.value=n,!1}),()=>{var n,_;return i.value?(n=e.error)==null?void 0:n.call(e,{error:i}):(_=e.default)==null?void 0:_.call(e)}}}),J=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),K=p({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e}){const o=s(!1);return O(()=>{o.value=!0}),i=>{var l;if(o.value)return(l=e.default)==null?void 0:l.call(e);const u=e.fallback||e.placeholder;if(u)return u();const n=i.fallback||i.placeholder||"",_=i.fallbackTag||i.placeholderTag||"span";return c(_,null,n)}}}),f=new WeakMap;function U(t){if(f.has(t))return f.get(t);const e={...t};return e.render?e.render=(o,...i)=>{var u,n;return o.mounted$?d(E,(u=o.$attrs)!=null?u:o._.attrs,t.render(o,...i)):d("div",(n=o.$attrs)!=null?n:o._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,i)=>{var n;const u=s(!1);return O(()=>{u.value=!0}),Promise.resolve(((n=t.setup)==null?void 0:n.call(t,o,i))||{}).then(_=>typeof _!="function"?{..._,mounted$:u}:(...l)=>u.value?d(E,i.attrs,_(...l)):d("div",i.attrs))},f.set(t,e),e}const W=Object.freeze(Object.defineProperty({__proto__:null,default:K,createClientOnly:U},Symbol.toStringTag,{value:"Module"})),Q=p({name:"ServerPlaceholder",render(){return c("div")}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),Y=p({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t){const e=Z({duration:t.duration,throttle:t.throttle}),o=P();return o.hook("page:start",e.start),o.hook("page:finish",e.finish),S(()=>e.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${e.progress.value}%`,height:`${t.height}px`,opacity:e.isLoading.value?1:0,background:t.color,backgroundSize:`${100/e.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}})}});function Z(t){const e=s(0),o=s(!1),i=g(()=>1e4/t.duration);let u=null,n=null;function _(){m(),e.value=0,o.value=!0,t.throttle?n=setTimeout(v,t.throttle):v()}function l(){e.value=100,A()}function m(){clearInterval(u),clearTimeout(n),u=null,n=null}function I(D){e.value=Math.min(100,e.value+D)}function A(){m(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function v(){u=setInterval(()=>{I(i.value)},100)}return{progress:e,isLoading:o,start:_,finish:l,clear:m}}const tt=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));r(()=>a(()=>import("./left_banner.e6a85e04.js"),["left_banner.e6a85e04.js","pp.fc023fc2.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./left_navbar.e275d9ef.js"),["left_navbar.e275d9ef.js","entry.00a8a081.js","entry.d5d6f852.css","composables.8dcc0a8d.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./portfolio_item.3076d03f.js"),["portfolio_item.3076d03f.js","portfolio_item.b9bd57ef.css","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./right_hamburger_menu.8786c7cb.js"),["right_hamburger_menu.8786c7cb.js","entry.00a8a081.js","entry.d5d6f852.css","composables.8dcc0a8d.js","pp.fc023fc2.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./skillbar.030fca34.js"),["skillbar.030fca34.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentDoc.0955f8cf.js"),["ContentDoc.0955f8cf.js","entry.00a8a081.js","entry.d5d6f852.css","head.733198b0.js","ContentQuery.f051e29a.js","asyncData.ba00a57d.js","query.78db53e2.js","utils.f5e6b6f0.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentList.30d391e8.js"),["ContentList.30d391e8.js","ContentQuery.f051e29a.js","entry.00a8a081.js","entry.d5d6f852.css","asyncData.ba00a57d.js","query.78db53e2.js","utils.f5e6b6f0.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>rt),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentQuery.f051e29a.js"),["ContentQuery.f051e29a.js","entry.00a8a081.js","entry.d5d6f852.css","asyncData.ba00a57d.js","query.78db53e2.js","utils.f5e6b6f0.js"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.00a8a081.js").then(t=>t.a8),["entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.00a8a081.js").then(t=>t.a7),["entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ContentSlot.a457ace8.js"),["ContentSlot.a457ace8.js","utils.f5e6b6f0.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./DocumentDrivenEmpty.1b8b741d.js"),["DocumentDrivenEmpty.1b8b741d.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./DocumentDrivenNotFound.3f6916a2.js"),["DocumentDrivenNotFound.3f6916a2.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./Markdown.50775f0d.js"),["Markdown.50775f0d.js","ContentSlot.a457ace8.js","utils.f5e6b6f0.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseA.936d76a2.js"),["ProseA.936d76a2.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseBlockquote.f727d918.js"),["ProseBlockquote.f727d918.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseCode.bfdf2a39.js"),["ProseCode.bfdf2a39.js","ProseCode.e63e49c6.css","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseCodeInline.2e1fd9c7.js"),["ProseCodeInline.2e1fd9c7.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseEm.611b4dd6.js"),["ProseEm.611b4dd6.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH1.b9f9b9cb.js"),["ProseH1.b9f9b9cb.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH2.748d6e51.js"),["ProseH2.748d6e51.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH3.358106f6.js"),["ProseH3.358106f6.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH4.6485ffd1.js"),["ProseH4.6485ffd1.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH5.11185bb1.js"),["ProseH5.11185bb1.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseH6.af67db7b.js"),["ProseH6.af67db7b.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseHr.9171e9b0.js"),["ProseHr.9171e9b0.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseImg.4a44a042.js"),["ProseImg.4a44a042.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseLi.27abf867.js"),["ProseLi.27abf867.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseOl.94e3cbd2.js"),["ProseOl.94e3cbd2.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseP.99fa5e00.js"),["ProseP.99fa5e00.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseStrong.4dd6a20f.js"),["ProseStrong.4dd6a20f.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTable.0e3792a5.js"),["ProseTable.0e3792a5.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTbody.dc7b6391.js"),["ProseTbody.dc7b6391.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTd.7177bc82.js"),["ProseTd.7177bc82.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTh.37d74085.js"),["ProseTh.37d74085.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseThead.694a6cc7.js"),["ProseThead.694a6cc7.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseTr.4bcf7b2e.js"),["ProseTr.4bcf7b2e.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./ProseUl.567c2cd4.js"),["ProseUl.567c2cd4.js","entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./welcome.aa910759.js"),["welcome.aa910759.js","portfolio_item.b9bd57ef.css","entry.00a8a081.js","entry.d5d6f852.css","asyncData.ba00a57d.js","query.78db53e2.js","utils.f5e6b6f0.js","ContentDoc.0955f8cf.js","head.733198b0.js","ContentQuery.f051e29a.js","ContentList.30d391e8.js","ContentSlot.a457ace8.js","DocumentDrivenEmpty.1b8b741d.js","DocumentDrivenNotFound.3f6916a2.js","Markdown.50775f0d.js","ProseCode.bfdf2a39.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>G),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>W),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./entry.00a8a081.js").then(t=>t.a6),["entry.00a8a081.js","entry.d5d6f852.css"],import.meta.url).then(t=>t.default||t));r(()=>a(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));r(()=>a(()=>import("./component.vue3.76b2c8e9.js"),["component.vue3.76b2c8e9.js","portfolio_item.b9bd57ef.css","entry.00a8a081.js","entry.d5d6f852.css","asyncData.ba00a57d.js","query.78db53e2.js","utils.f5e6b6f0.js","ContentDoc.0955f8cf.js","head.733198b0.js","ContentQuery.f051e29a.js","ContentList.30d391e8.js","ContentSlot.a457ace8.js","DocumentDrivenEmpty.1b8b741d.js","DocumentDrivenNotFound.3f6916a2.js","Markdown.50775f0d.js","ProseCode.bfdf2a39.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));const et=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=$(t),o=g(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!o.value&&k("dd-navigation").value){const{navigation:u}=B();return{navigation:u}}const{data:i}=await x(`content-navigation-${L(o.value)}`,()=>q(o.value));return{navigation:i}},render(t){const e=C(),{navigation:o}=t,i=_=>d(w,{to:_._path},()=>_.title),u=(_,l)=>d("ul",l?{"data-level":l}:null,_.map(m=>m.children?d("li",null,[i(m),u(m.children,l+1)]):d("li",null,i(m)))),n=_=>u(_,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):n(o)}}),rt=Object.freeze(Object.defineProperty({__proto__:null,default:et},Symbol.toStringTag,{value:"Module"}));export{rt as C,K as _};
