import{u as p,w as g,b as u,i as h,j as l}from"./entry.1d3e9487.js";const b=(n,m=u())=>{const f=p(n);g(()=>p(n),(t=f)=>{if(!m.path||!t)return;const e=Object.assign({},(t==null?void 0:t.head)||{}),r=e.title||(t==null?void 0:t.title);r&&(e.title=r),e.meta=[...e.meta||[]];const c=(e==null?void 0:e.description)||(t==null?void 0:t.description);c&&e.meta.filter(s=>s.name==="description").length===0&&e.meta.push({name:"description",content:c});const i=(e==null?void 0:e.image)||(t==null?void 0:t.image);if(i&&e.meta.filter(s=>s.property==="og:image").length===0&&(typeof i=="string"&&e.meta.push({property:"og:image",content:i}),typeof i=="object")){const s=["src","secure_url","type","width","height","alt"];for(const o of s)o==="src"&&i.src?e.meta.push({property:"og:image",content:i[o]}):i[o]&&e.meta.push({property:`og:image:${o}`,content:i[o]})}h(()=>l(e))},{immediate:!0})};export{b as u};
