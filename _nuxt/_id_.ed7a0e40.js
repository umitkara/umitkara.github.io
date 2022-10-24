import{i as v}from"./items.085d8054.js";import{a as I,o as i,b as d,e as t,Q as h,t as u,V as g,P as x,T as f,$ as c,a0 as m,a1 as b,U as C,K as p,Y as y,W as w,X as k}from"./entry.3fac59af.js";const L={name:"Portfolio",data(){return{items:v,currentImageIndex:0,buttonState:!1,loaded:!0,error:!1}},methods:{getCurrentItem(){const s=this.$route.params.id;return v.items.find(e=>e.id==s)},nextImage(){this.currentImageIndex<this.currentItem.images.length-1&&(this.currentImageIndex++,this.loaded=!1)},previousImage(){this.currentImageIndex>0&&(this.currentImageIndex--,this.loaded=!1)},onLoaded(){this.loaded=!0},onError(){this.error=!0},changeButtonState(s){this.currentItem.images.length>1&&(this.buttonState=s)},handleTouchStart(s){this.xDown=s.touches[0].clientX},handleTouchMove(s){if(!this.xDown)return;let e=document.getElementById("currentSlideImage"),_=s.touches[0].clientX,l=this.xDown-_;l>0?(e.style.transform=`translateX(${-l}px)`,e.style.opacity=`${1-l/1e3}`,l>100&&(e.style.transform=null,e.style.opacity=null,this.nextImage(),this.xDown=null)):(e.style.transform=`translateX(${-l}px)`,e.style.opacity=`${1-l/1e3}`,l<-100&&(e.style.transform=null,e.style.opacity=null,this.previousImage(),this.xDown=null))},handleTouchEnd(s){let e=document.getElementById("currentSlideImage");this.xDown=null,e.style.transform=null,e.style.opacity=null}},mounted(){this.$emit("pagename","portfolio"),window.scrollTo(0,0)},computed:{currentItem(){return this.getCurrentItem()}}};const o=s=>(w("data-v-c3361a6e"),s=s(),k(),s),S={class:"dark:bg-gray-800 dark:text-white box-border py-16 px-12"},T=o(()=>t("h1",{class:"text-4xl font-semibold mb-8 relative"},[h(" Portfolio "),t("div",{class:"pat pattern-dots-sm w-12 h-8 text-blue-500 dark:text-blue-400 inline-block absolute"})],-1)),M={class:"text-2xl font-semibold mb-8 relative"},B=o(()=>t("div",{class:"pat pattern-dots-sm w-12 h-6 text-blue-500 dark:text-blue-400 inline-block absolute"},null,-1)),E=["disabled"],D=o(()=>t("svg",{class:"w-6 h-6 text-gray-800 dark:text-gray-200",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{d:"M15 19l-7-7 7-7"})],-1)),z=[D],V={class:"text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},X=o(()=>t("div",{role:"status"},[t("svg",{class:"inline mr-2 w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),t("span",{class:"sr-only"},"Loading...")],-1)),N=[X],j={class:"absolute bottom-0 left-1/2 transform -translate-x-1/2"},P={class:"bg-gray-200 dark:bg-gray-700 rounded-t-lg p-2 text-gray-800 dark:text-gray-200"},U={ref:"slideContainer"},Z=["src"],F=["disabled"],H=o(()=>t("svg",{class:"w-6 h-6 text-gray-800 dark:text-gray-200",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{d:"M9 5l7 7-7 7"})],-1)),G=[H],K=["href"],Q=o(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 480 512",class:"fill-white dark:fill-gray-800 w-8 h-8 inline mr-2"},[t("path",{d:"M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"})],-1)),R=["href"],W=o(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",class:"fill-white dark:fill-blue-500 w-8 h-8 inline mr-2"},[t("path",{d:"M173 131.5C229.2 75.27 320.3 75.27 376.5 131.5C430 185 432.9 270.9 383 327.9L377.7 334C368.9 344 353.8 345 343.8 336.3C333.8 327.6 332.8 312.4 341.5 302.4L346.9 296.3C380.1 258.3 378.2 201.1 342.5 165.4C305.1 127.1 244.4 127.1 206.1 165.4L93.63 278.7C56.19 316.2 56.19 376.9 93.63 414.3C129.3 449.1 186.6 451.9 224.5 418.7L230.7 413.3C240.6 404.6 255.8 405.6 264.5 415.6C273.3 425.5 272.2 440.7 262.3 449.4L256.1 454.8C199.1 504.6 113.2 501.8 59.69 448.2C3.505 392.1 3.505 300.1 59.69 244.8L173 131.5zM467 380.5C410.8 436.7 319.7 436.7 263.5 380.5C209.1 326.1 207.1 241.1 256.9 184.1L261.6 178.7C270.3 168.7 285.5 167.7 295.5 176.4C305.5 185.1 306.5 200.3 297.8 210.3L293.1 215.7C259.8 253.7 261.8 310.9 297.4 346.6C334.9 384 395.6 384 433.1 346.6L546.4 233.3C583.8 195.8 583.8 135.1 546.4 97.7C510.7 62.02 453.4 60.11 415.5 93.35L409.3 98.7C399.4 107.4 384.2 106.4 375.5 96.44C366.7 86.47 367.8 71.3 377.7 62.58L383.9 57.22C440.9 7.348 526.8 10.21 580.3 63.76C636.5 119.9 636.5 211 580.3 267.2L467 380.5z"})],-1)),Y={class:"flex flex-wrap mt-4"},q={class:"text-gray-800 dark:text-white text-lg font-semibold mt-4 mb-2"},A=["innerHTML"];function J(s,e,_,l,a,r){return i(),d("div",S,[T,t("h2",M,[h(u(r.currentItem.title)+" ",1),B]),t("div",{class:"relative gallery w-full",onMouseover:e[4]||(e[4]=n=>r.changeButtonState(!0)),onMouseleave:e[5]||(e[5]=n=>r.changeButtonState(!1)),onTouchstart:e[6]||(e[6]=b((...n)=>r.handleTouchStart&&r.handleTouchStart(...n),["prevent"])),onTouchmove:e[7]||(e[7]=b((...n)=>r.handleTouchMove&&r.handleTouchMove(...n),["prevent"])),onTouchend:e[8]||(e[8]=b((...n)=>r.handleTouchEnd&&r.handleTouchEnd(...n),["prevent"]))},[g(f,{name:"slide",mode:"out-in"},{default:x(()=>[c(t("button",{class:"bg-gray-200 dark:bg-gray-700 rounded-full p-2 mr-2 absolute top-1/2 left-5 transition duration-300 ease-in-out transform hover:scale-110 -translate-y-1/2",onClick:e[0]||(e[0]=(...n)=>r.previousImage&&r.previousImage(...n)),disabled:a.currentImageIndex===0},z,8,E),[[m,a.buttonState]])]),_:1}),c(t("div",V,N,512),[[m,!a.loaded||a.error]]),g(f,{name:"slideUp",mode:"out-in"},{default:x(()=>[c(t("div",j,[t("div",P,u(a.currentImageIndex+1)+" / "+u(r.currentItem.images.length),1)],512),[[m,a.buttonState]])]),_:1}),t("div",U,[t("img",{id:"currentSlideImage",ref:"currentSlideImage",src:r.currentItem.images[a.currentImageIndex],alt:"portfolio image",class:"m-auto object-cover max-h-screen",onLoad:e[1]||(e[1]=(...n)=>r.onLoaded&&r.onLoaded(...n)),onError:e[2]||(e[2]=(...n)=>r.onError&&r.onError(...n)),draggable:"false"},null,40,Z)],512),g(f,{name:"slideRight",mode:"out-in"},{default:x(()=>[c(t("button",{class:"bg-gray-200 dark:bg-gray-700 rounded-full p-2 ml-2 absolute top-1/2 right-5 transition duration-300 ease-in-out transform hover:scale-110 -translate-y-1/2",onClick:e[3]||(e[3]=(...n)=>r.nextImage&&r.nextImage(...n)),disabled:a.currentImageIndex===r.currentItem.images.length-1},G,8,F),[[m,a.buttonState]])]),_:1})],32),t("div",null,[r.currentItem.repo?(i(),d("a",{key:0,href:r.currentItem.repo,target:"_blank",rel:"noopener noreferrer",class:"inline-block bg-gray-800 dark:bg-white text-white dark:text-black font-semibold px-4 py-2 rounded-lg mt-4 mr-4 transition duration-300 ease-in-out transform hover:scale-110"},[Q,h(" Github ")],8,K)):C("",!0),r.currentItem.link?(i(),d("a",{key:1,href:r.currentItem.link,target:"_blank",rel:"noopener noreferrer",class:"inline-block bg-blue-500 dark:bg-white text-white dark:text-blue-500 font-semibold px-4 py-2 rounded-lg mt-4 mr-4 transition duration-300 ease-in-out transform hover:scale-110"},[W,h(" Demo ")],8,R)):C("",!0)]),t("div",null,[t("div",Y,[(i(!0),d(p,null,y(r.currentItem.tech,n=>(i(),d("div",{key:n,class:"bg-blue-500 dark:bg-white text-white dark:text-black font-semibold px-4 py-2 rounded-lg mt-4 mr-4"},u(n),1))),128))])]),t("div",null,[t("p",q,u(r.currentItem.title),1),t("p",{class:"text-gray-600 dark:text-gray-400 text-sm",innerHTML:r.currentItem.description},null,8,A)])])}const ee=I(L,[["render",J],["__scopeId","data-v-c3361a6e"]]);export{ee as default};
