import{u as a}from"./composables.35e5fa92.js";import{a as r,k as s,o as c,G as d,Y as n,W as p,X as i,O as l,L as m}from"./entry.8bd8abb4.js";const u=e=>(p("data-v-e1da1106"),e=e(),i(),e),_=u(()=>l("p",{class:"dark:text-white text-5xl text-center name box-border"}," \xDCmit Kara ",-1)),h=[_],g={name:"Home",data(){return{}},props:{pageWidth:{type:Number,default:0},pageLeft:{type:Number,default:0}},methods:{getCoverImage(){return this.isDark?"./cover/cover.jpg":"./cover/cover-white.jpg"}},mounted(){this.$emit("pagename","home"),console.log(this.coverLight)}},v=r({...g,setup(e){const o=a();return s(()=>o.value==="dark"),(t,f)=>(c(),d("div",{class:"home box-border",style:n({"background-image":t.$colorMode.value=="dark"?"url(/cover/cover.jpg":"url(/cover/cover-white.jpg)",width:e.pageWidth,"margin-left":e.pageLeft})},h,4))}});const b=m(v,[["__scopeId","data-v-e1da1106"]]);export{b as default};
