(window.webpackJsonp=window.webpackJsonp||[]).push([[20,3,8],{295:function(t,e,r){var content=r(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("3972cbc1",content,!0,{sourceMap:!1})},301:function(t,e,r){"use strict";r(295)},302:function(t,e,r){var o=r(39)((function(i){return i[1]}));o.push([t.i,".img-hover-zoom img[data-v-2658095f]{transition:transform .5s ease}.img-hover-zoom:hover img[data-v-2658095f]{transform:scale(1.5)}",""]),o.locals={},t.exports=o},316:function(t,e,r){"use strict";r.r(e);r(32),r(51);var o={name:"AppModal",props:{item:{type:Object,required:!0}},data:function(){return{imageIndex:0}},methods:{closeModal:function(){this.$emit("closeModal"),this.imageIndex=0},nextImage:function(){this.imageIndex++,this.imageIndex>=this.item.images.length&&(this.imageIndex=0)},prevImage:function(){this.imageIndex--,this.imageIndex<0&&(this.imageIndex=this.item.images.length-1)}}},n=r(31),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{ref:"modal",staticClass:"w-screen h-screen z-30 bg-black bg-opacity-40 absolute top-0 left-0 box-border flex items-center justify-center",attrs:{tabindex:"-1"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.closeModal.apply(null,arguments)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.prevImage.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"right",39,e.key,["Right","ArrowRight"])||"button"in e&&2!==e.button?null:t.nextImage.apply(null,arguments)}],click:function(e){return e.target!==e.currentTarget?null:t.closeModal.apply(null,arguments)}}},[e("div",{staticClass:"bg-gray-800 w-8/12 relative",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"absolute top-1/2 cursor-pointer",on:{click:t.prevImage}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"#ffffff",width:"28",height:"28"}},[e("path",{attrs:{d:"M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"}})])]),t._v(" "),t.item.images?e("div",[t.item.images.length?e("div",[e("img",{staticClass:"max-h-screen m-auto",attrs:{src:t.item.images[t.imageIndex],draggable:"false"}})]):e("div",{staticClass:"box-border p-4 text-center text-white text-lg",domProps:{innerHTML:t._s(t.item.description)}},[t._v("\n        "+t._s(t.item.description)+"\n      ")])]):t._e(),t._v(" "),e("div",{staticClass:"absolute top-1/2 right-0 cursor-pointer",on:{click:t.nextImage}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"#ffffff",width:"28",height:"28"}},[e("path",{attrs:{d:"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"}})])])]),t._v(" "),e("div",{staticClass:"absolute top-8 right-8 cursor-pointer",on:{click:t.closeModal}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"#ffffff",width:"28",height:"28"}},[e("path",{attrs:{d:"M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"}})])])])}),[],!1,null,"132d431b",null);e.default=component.exports},317:function(t,e,r){"use strict";r.r(e);var o={name:"portfolioItem",props:{item:{type:Object,required:!0}}},n=(r(301),r(31)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"cursor-pointer",on:{click:function(e){return t.$emit("showModal",t.item)}}},[e("div",{staticClass:"img-hover-zoom overflow-hidden"},[e("img",{staticClass:"w-full mb-2",attrs:{src:t.item.thumbnail,draggable:"false"}})]),t._v(" "),e("h2",{staticClass:"font-semibold text-lg"},[t._v("\n    "+t._s(t.item.title)+"\n  ")])])}),[],!1,null,"2658095f",null);e.default=component.exports},326:function(t){t.exports=JSON.parse('{"items":[{"id":"1","title":"Udemy Course Suggestion Engine","thumbnail":"https://github.com/umitkara/InternshipProject/raw/master/ss/ss1.png","categories":["ds","ml"],"link":"https://github.com/umitkara/InternshipProject/","images":["https://github.com/umitkara/InternshipProject/raw/master/ss/ss2.png","https://github.com/umitkara/InternshipProject/raw/master/ss/ss3.png","https://github.com/umitkara/InternshipProject/raw/master/ss/ss4.png","https://github.com/umitkara/InternshipProject/raw/master/ss/ss5.png"]},{"id":"2","title":"Birdle","thumbnail":"https://github.com/umitkara/birdle/raw/master/ss/1.png","categories":["web","php","vue","programming"],"link":"https://github.com/umitkara/birdle","images":["https://github.com/umitkara/birdle/raw/master/ss/4.png","https://github.com/umitkara/birdle/raw/master/ss/5.png","https://github.com/umitkara/birdle/raw/master/ss/6.png","https://github.com/umitkara/birdle/raw/master/ss/7.png","https://github.com/umitkara/birdle/raw/master/ss/8.png","https://github.com/umitkara/birdle/raw/master/ss/9.png","https://github.com/umitkara/birdle/raw/master/ss/10.png","https://github.com/umitkara/birdle/raw/master/ss/11.png"]},{"id":"3","title":"Social Network","thumbnail":"https://github.com/umitkara/socialnetwork/raw/master/ss/ss1.png","categories":["web","python","django","programming"],"link":"https://github.com/umitkara/socialnetwork/","images":["https://github.com/umitkara/socialnetwork/raw/master/ss/ss2.png","https://github.com/umitkara/socialnetwork/raw/master/ss/ss3.png","https://github.com/umitkara/socialnetwork/raw/master/ss/ss4.png","https://github.com/umitkara/socialnetwork/raw/master/ss/ss5.png","https://github.com/umitkara/socialnetwork/raw/master/ss/ss6.png","https://github.com/umitkara/socialnetwork/raw/master/ss/ss7.png"]},{"id":"4","title":"Playify","thumbnail":"https://github.com/umitkara/Spotify-Clone/raw/master/ss/1.png","categories":["web","php","js","programming"],"link":"https://github.com/umitkara/Spotify-Clone/","images":["https://github.com/umitkara/Spotify-Clone/raw/master/ss/1.png","https://github.com/umitkara/Spotify-Clone/raw/master/ss/2.png","https://github.com/umitkara/Spotify-Clone/raw/master/ss/3.png","https://github.com/umitkara/Spotify-Clone/raw/master/ss/4.png","https://github.com/umitkara/Spotify-Clone/raw/master/ss/5.png","https://github.com/umitkara/Spotify-Clone/raw/master/ss/6.png","https://github.com/umitkara/Spotify-Clone/raw/master/ss/7.png","https://github.com/umitkara/Spotify-Clone/raw/master/ss/8.png","https://github.com/umitkara/Spotify-Clone/raw/master/ss/9.png"]},{"id":"5","title":"Photography Works","thumbnail":"../photos/1.jpg","categories":["photo"],"link":"","images":["../photos/2.jpg","../photos/3.jpg","../photos/4.jpg","../photos/5.jpg","../photos/6.jpg"]},{"id":"6","title":"Python Projects","thumbnail":"../other/cs_map.jpg","categories":["programming"],"link":"","images":[],"description":"This is a project that I have done in Python:<br/><a href=\'https://github.com/umitkara/Bloom-Filter\'>Bloom Filter</a>,<br/><a href=\'https://github.com/umitkara/Heap\'>Heap</a>,<br/><a href=\'https://github.com/umitkara/Trie-DS\'>Trie</a>,<br/><a href=\'https://github.com/umitkara/Cache-DS\'>Cache</a>."},{"id":"7","title":"Flutty Birdle","thumbnail":"https://github.com/umitkara/twitter_clone_flutter/raw/master/ss/ss3.png","categories":["mobile","programming"],"link":"https://github.com/umitkara/twitter_clone_flutter","images":["https://github.com/umitkara/twitter_clone_flutter/raw/master/ss/ss1.png","https://github.com/umitkara/twitter_clone_flutter/raw/master/ss/ss2.png","https://github.com/umitkara/twitter_clone_flutter/raw/master/ss/ss3.png","https://github.com/umitkara/twitter_clone_flutter/raw/master/ss/ss4.png","https://github.com/umitkara/twitter_clone_flutter/raw/master/ss/ss5.png","https://github.com/umitkara/twitter_clone_flutter/raw/master/ss/ss6.png","https://github.com/umitkara/twitter_clone_flutter/raw/master/ss/ss7.png","https://github.com/umitkara/twitter_clone_flutter/raw/master/ss/ss8.png","https://github.com/umitkara/twitter_clone_flutter/raw/master/ss/ss9.png"]}]}')},354:function(t,e,r){"use strict";r.r(e);r(42),r(15),r(68),r(87);var o=r(326),n={name:"portfolio",data:function(){return{items:o,itemsList:o.items,currentCategory:"all",modalDisplay:!1,modalItem:{}}},methods:{filterItems:function(t){this.currentCategory=t,this.itemsList="all"===t?this.items.items:this.items.items.filter((function(e){return e.categories.includes(t)}))},changeCategory:function(t){this.currentCategory=t,this.filterItems(t)},isActive:function(t){return this.currentCategory===t},showModal:function(t){this.modalDisplay=!0,this.modalItem=t},closeModal:function(){this.modalDisplay=!1,console.log("closeModal")}},mounted:function(){this.$emit("changePage","portfolio")}},l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-gray-800 w-screen h-screen py-16 px-12 text-white overflow-y-auto min-h-710"},[e("app-modal",{directives:[{name:"show",rawName:"v-show",value:t.modalDisplay,expression:"modalDisplay"}],attrs:{item:t.modalItem},on:{closeModal:t.closeModal}}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"text-sm text-gray-400 mb-8"},[e("ul",{staticClass:"flex"},[e("li",{staticClass:"mr-5",class:{"text-gray-300":t.isActive("all")}},[e("a",{staticClass:"hover:text-gray-400",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.changeCategory("all")}}},[t._v("\n          All\n        ")])]),t._v(" "),e("li",{staticClass:"mr-5",class:{"text-gray-300":t.isActive("web")}},[e("a",{staticClass:"hover:text-gray-400",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.changeCategory("web")}}},[t._v("\n          Web Development\n        ")])]),t._v(" "),e("li",{staticClass:"mr-5",class:{"text-gray-300":t.isActive("mobile")}},[e("a",{staticClass:"hover:text-gray-400",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.changeCategory("mobile")}}},[t._v("\n          Mobile Development\n        ")])]),t._v(" "),e("li",{staticClass:"mr-5",class:{"text-gray-300":t.isActive("ds")}},[e("a",{staticClass:"hover:text-gray-400",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.changeCategory("ds")}}},[t._v("\n          Data Science & Machine Learning\n        ")])]),t._v(" "),e("li",{staticClass:"mr-5",class:{"text-gray-300":t.isActive("photo")}},[e("a",{staticClass:"hover:text-gray-400",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.changeCategory("photo")}}},[t._v("\n          Photography\n        ")])]),t._v(" "),e("li",{staticClass:"mr-5",class:{"text-gray-300":t.isActive("design")}},[e("a",{staticClass:"hover:text-gray-400",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.changeCategory("design")}}},[t._v("\n          Design\n        ")])]),t._v(" "),e("li",{staticClass:"mr-5",class:{"text-gray-300":t.isActive("programming")}},[e("a",{staticClass:"hover:text-gray-400",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.changeCategory("programming")}}},[t._v("\n          Programming\n        ")])])])]),t._v(" "),e("div",{staticClass:"grid grid-cols-3 gap-4"},t._l(t.itemsList,(function(r){return e("div",[e("portfolio-item",{attrs:{item:r},on:{showModal:t.showModal}})],1)})),0)],1)}),[function(){var t=this._self._c;return t("h1",{staticClass:"text-4xl font-semibold mb-8 relative"},[this._v("\n    Portfolio\n    "),t("div",{staticClass:"pat pattern-dots-sm w-12 h-8 text-blue-400 inline-block absolute"})])}],!1,null,"2351c293",null);e.default=component.exports;installComponents(component,{AppModal:r(316).default,PortfolioItem:r(317).default})}}]);