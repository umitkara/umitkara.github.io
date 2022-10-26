import i from"./skillbar.495c2773.js";import{a,a8 as r,o as d,b as c,e,S as n,t as s,X as l}from"./entry.1ce68204.js";const m={name:"Resume",data(){return{}},components:{SkillBar:i},methods:{},mounted(){this.$emit("pagename","resume"),window.scrollTo(0,0)}},_={class:"dark:bg-gray-800 dark:text-white box-border py-16 px-12"},u={class:"text-4xl font-semibold mb-8 relative"},b=e("div",{class:"pat pattern-dots-sm w-12 h-8 text-blue-500 dark:text-blue-400 inline-block absolute"},null,-1),h={class:"grid grid-cols-1 md:grid-cols-2"},p={class:"flex-col"},g={class:"mb-16"},x={class:"text-2xl font-semibold mb-8 relative"},k=e("div",{class:"pat pattern-dots-sm w-10 h-6 text-blue-400 inline-block absolute"},null,-1),f={class:"relative border-l border-gray-400 dark:border-gray-700"},v={class:"mb-10 ml-4"},y=e("div",{class:"absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-blue-600 bg-blue-400"},null,-1),$=e("time",{class:"mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400"},"2016",-1),w={class:"text-lg font-semibold dark:text-white"},S={class:"text-base font-normal text-gray-500 dark:text-gray-400"},B={class:"mb-4 text-base font-normal text-gray-500 dark:text-gray-400"},C={class:"mb-2"},P={class:"flex flex-wrap"},j={class:"bg-blue-500 min-w-max px-2 py-1 rounded-md m-1 box-border text-white"},L={class:"bg-blue-500 min-w-max px-2 py-1 rounded-md m-1 box-border text-white"},N={class:"bg-blue-500 min-w-max px-2 py-1 rounded-md m-1 box-border text-white"},T={class:"bg-blue-500 min-w-max px-2 py-1 rounded-md m-1 box-border text-white"},V={class:"mb-10 ml-4"},D=e("div",{class:"absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-blue-600 bg-blue-400"},null,-1),H=e("time",{class:"mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400"},"2011",-1),J={class:"text-lg font-semibold dark:text-white"},E={class:"text-base font-normal text-gray-500 dark:text-gray-400"},I={class:"mb-16"},K={class:"text-2xl font-semibold mb-8 relative"},M=e("div",{class:"pat pattern-dots-sm w-10 h-6 text-blue-400 inline-block absolute"},null,-1),Q={class:"relative border-l border-gray-400 dark:border-gray-700"},R={class:"mb-10 ml-4"},X=e("div",{class:"absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-blue-600 bg-blue-400"},null,-1),q=e("time",{class:"mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400"},"2022",-1),z={class:"text-lg font-semibold dark:text-white"},A={class:"text-base font-normal text-gray-500"},F={class:"text-base font-normal text-gray-700 dark:text-gray-400"},G={class:"mb-4 text-base font-normal text-gray-500"},O={class:"underline hover:text-gray-400",href:"https://github.com/umitkara/InternshipProject"},U={class:"flex-col"},W={class:"text-2xl font-semibold mb-8 relative"},Y=e("div",{class:"pat pattern-dots-sm w-10 h-6 text-blue-400 inline-block absolute"},null,-1),Z={class:"text-xl font-semibold mb-8 relative"},ee={class:"text-blue-500 dark:text-blue-400"},te=e("div",{class:"pat pattern-dots-sm w-10 h-6 text-blue-400 inline-block absolute"},null,-1),se={class:"text-xl font-semibold mb-8 relative"},oe={class:"text-blue-500 dark:text-blue-400"},le=e("div",{class:"pat pattern-dots-sm w-10 h-6 text-blue-400 inline-block absolute"},null,-1);function ne(t,ie,ae,re,de,ce){const o=r("SkillBar");return d(),c("div",_,[e("h1",u,[n(s(t.$t("resume.resume"))+" ",1),b]),e("div",h,[e("div",p,[e("div",g,[e("h2",x,[n(s(t.$t("resume.education"))+" ",1),k]),e("ol",f,[e("li",v,[y,$,e("h3",w,s(t.$t("resume.education_section.degree")),1),e("p",S,s(t.$t("resume.education_section.university")),1),e("p",B,s(t.$t("resume.education_section.gpa"))+": 2.76",1),e("p",C,s(t.$t("resume.education_section.lessons"))+":",1),e("div",P,[e("div",j,s(t.$t("resume.education_section.lesson_list.big_data")),1),e("div",L,s(t.$t("resume.education_section.lesson_list.ml")),1),e("div",N,s(t.$t("resume.education_section.lesson_list.graph")),1),e("div",T,s(t.$t("resume.education_section.lesson_list.ai")),1)])]),e("li",V,[D,H,e("h3",J,s(t.$t("resume.education_section.high_school")),1),e("p",E,s(t.$t("resume.education_section.hs_name")),1)])])]),e("div",I,[e("h2",K,[n(s(t.$t("resume.experience"))+" ",1),M]),e("ol",Q,[e("li",R,[X,q,e("h3",z,s(t.$t("resume.experience_section[0].company")),1),e("p",A,s(t.$t("resume.experience_section[0].mount")),1),e("p",F,s(t.$t("resume.experience_section[0].position")),1),e("p",G,[n(s(t.$t("resume.experience_section[0].project"))+": ",1),e("a",O,s(t.$t("resume.experience_section[0].project_name")),1)])])])])]),e("div",U,[e("h2",W,[n(s(t.$t("resume.skills"))+" ",1),Y]),e("h3",Z,[n(s(t.$t("resume.skills_section.design"))+" ",1),e("span",ee,s(t.$t("resume.skills_section.skills")),1),te]),l(o,{title:t.$t("resume.skills_section.web"),percentage:70},null,8,["title"]),l(o,{title:t.$t("resume.skills_section.print"),percentage:50},null,8,["title"]),l(o,{title:t.$t("resume.skills_section.graphic"),percentage:85,class:"mb-8"},null,8,["title"]),e("h3",se,[n(s(t.$t("resume.skills_section.coding"))+" ",1),e("span",oe,s(t.$t("resume.skills_section.skills")),1),le]),l(o,{title:"HTML/CSS",percentage:90}),l(o,{title:"C",percentage:60}),l(o,{title:"C++",percentage:50}),l(o,{title:"C#",percentage:65}),l(o,{title:"Python",percentage:85}),l(o,{title:"Javascript",percentage:85}),l(o,{title:"PHP",percentage:75}),l(o,{title:"SQL",percentage:60}),l(o,{title:"Java",percentage:35}),l(o,{title:"Lua",percentage:50}),l(o,{title:"Dart",percentage:70}),l(o,{title:"Kotlin",percentage:40})])])])}const ue=a(m,[["render",ne]]);export{ue as default};
