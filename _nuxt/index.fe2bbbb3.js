import i from"./left_navbar.f6f027d9.js";import s from"./left_banner.3062ef65.js";import u from"./right_hamburger_menu.ec73c9ad.js";import{L as h,a3 as d,o as _,G as M,Z as n,Y as C,O as r}from"./entry.1d3e9487.js";import"./composables.f0c245db.js";import"./pp.fc023fc2.js";const p={name:"Index",components:{LeftNavbar:i,LeftBanner:s,RightHamburgerMenu:u},data(){return{mainContentWidth:0,mainContentLeftMargin:0,currentPageName:"home",hamburgerMenuState:!1}},methods:{calculateMainContentVars(){this.mainContentWidth=window.innerWidth-this.$refs.leftNav.$el.clientWidth-this.$refs.leftBanner.$el.clientWidth,this.mainContentLeftMargin=this.$refs.leftNav.$el.offsetWidth+this.$refs.leftBanner.$el.offsetWidth},setCurrentPageName(a){this.currentPageName=a},toggleHamburgerMenu(){this.hamburgerMenuState=!this.hamburgerMenuState},closeHamburgerMenu(){window.innerWidth>768&&(this.hamburgerMenuState=!1)}},mounted(){this.calculateMainContentVars(),window.addEventListener("resize",this.calculateMainContentVars),window.addEventListener("resize",this.closeHamburgerMenu)},unmounted(){window.removeEventListener("resize",this.calculateMainContentVars),window.removeEventListener("resize",this.closeHamburgerMenu)}},v=r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",class:"w-8 h-8 fill-white"},[r("path",{d:"M0 88C0 74.75 10.75 64 24 64H424C437.3 64 448 74.75 448 88C448 101.3 437.3 112 424 112H24C10.75 112 0 101.3 0 88zM0 248C0 234.7 10.75 224 24 224H424C437.3 224 448 234.7 448 248C448 261.3 437.3 272 424 272H24C10.75 272 0 261.3 0 248zM424 432H24C10.75 432 0 421.3 0 408C0 394.7 10.75 384 24 384H424C437.3 384 448 394.7 448 408C448 421.3 437.3 432 424 432z"})],-1),w=[v];function b(a,o,x,H,e,t){const m=i,l=s,c=d("nuxt-page"),g=u;return _(),M("div",null,[n(m,{ref:"leftNav",activeMenuItem:e.currentPageName},null,8,["activeMenuItem"]),n(l,{ref:"leftBanner"},null,512),n(c,{ref:"mainContent",style:C({width:e.mainContentWidth+"px","margin-left":e.mainContentLeftMargin+"px"}),onPagename:t.setCurrentPageName},null,8,["style","onPagename"]),n(g,{ref:"rightHamburger",activeMenuItem:e.currentPageName,menuState:e.hamburgerMenuState,onCloseMenu:t.toggleHamburgerMenu},null,8,["activeMenuItem","menuState","onCloseMenu"]),r("div",{class:"md:hidden fixed w-14 h-14 bg-blue-500 top-5 right-5 z-10 rounded-full flex justify-center items-center cursor-pointer",onClick:o[0]||(o[0]=(...f)=>t.toggleHamburgerMenu&&t.toggleHamburgerMenu(...f))},w)])}const S=h(p,[["render",b]]);export{S as default};
