import{r as z,w as O,s as v,v as N,x as L,y as H}from"./entry.825fba2e.js";import{w as P}from"./utils.1c527acd.js";const $=decodeURIComponent,F=encodeURIComponent,I=/; */,m=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function M(r,s){if(typeof r!="string")throw new TypeError("argument str must be a string");let n={},t=s||{},e=r.split(I),i=t.decode||$;for(let o=0;o<e.length;o++){let c=e[o],a=c.indexOf("=");if(a<0)continue;let l=c.substr(0,a).trim(),u=c.substr(++a,c.length).trim();u[0]=='"'&&(u=u.slice(1,-1)),n[l]==null&&(n[l]=D(u,i))}return n}function S(r,s,n){let t=n||{},e=t.encode||F;if(typeof e!="function")throw new TypeError("option encode is invalid");if(!m.test(r))throw new TypeError("argument name is invalid");let i=e(s);if(i&&!m.test(i))throw new TypeError("argument val is invalid");let o=r+"="+i;if(t.maxAge!=null){let c=t.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(c)}if(t.domain){if(!m.test(t.domain))throw new TypeError("option domain is invalid");o+="; Domain="+t.domain}if(t.path){if(!m.test(t.path))throw new TypeError("option path is invalid");o+="; Path="+t.path}if(t.expires){if(typeof t.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(o+="; HttpOnly"),t.secure&&(o+="; Secure"),t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function D(r,s){try{return s(r)}catch{return r}}const W={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function J(r,s={}){s={...W,...s};const n=k(s);return n.dispatch(r),n.toString()}function k(r){const s=[];let n=[];const t=e=>{s.push(e)};return{toString(){return s.join("")},getContext(){return n},dispatch(e){return r.replacer&&(e=r.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){const i=/\[object (.*)\]/i,o=Object.prototype.toString.call(e),c=i.exec(o),a=c?c[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let l=null;if((l=n.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+l+"]");if(n.push(e),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(a!=="object"&&a!=="function"&&a!=="asyncfunction")if(this["_"+a])this["_"+a](e);else{if(r.ignoreUnknown)return t("["+a+"]");throw new Error('Unknown object type "'+a+'"')}else{let u=Object.keys(e);return r.unorderedObjects&&(u=u.sort()),r.respectType!==!1&&!x(e)&&u.splice(0,0,"prototype","__proto__","letructor"),r.excludeKeys&&(u=u.filter(function(p){return!r.excludeKeys(p)})),t("object:"+u.length+":"),u.forEach(p=>{this.dispatch(p),t(":"),r.excludeValues||this.dispatch(e[p]),t(",")})}},_array(e,i){if(i=typeof i<"u"?i:r.unorderedArrays!==!1,t("array:"+e.length+":"),!i||e.length<=1)return e.forEach(a=>this.dispatch(a));const o=[],c=e.map(a=>{const l=k(r);return l.dispatch(a),o.push(l.getContext()),l.toString()});return n=n.concat(o),c.sort(),this._array(c,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),x(e)?this.dispatch("[native]"):this.dispatch(e.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),r.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const i=Array.from(e);return this._array(i,r.unorderedSets!==!1)},_set(e){t("set:");const i=Array.from(e);return this._array(i,r.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(r.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function x(r){return typeof r!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(r))!=null}class y{constructor(s,n){s=this.words=s||[],n!==void 0?this.sigBytes=n:this.sigBytes=s.length*4}toString(s){return(s||K).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let n=0;n<s.sigBytes;n++){const t=s.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=t<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<s.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=s.words[n>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new y(this.words.slice(0))}}const K={stringify(r){const s=[];for(let n=0;n<r.sigBytes;n++){const t=r.words[n>>>2]>>>24-n%4*8&255;s.push((t>>>4).toString(16)),s.push((t&15).toString(16))}return s.join("")}},G={stringify(r){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let t=0;t<r.sigBytes;t+=3){const e=r.words[t>>>2]>>>24-t%4*8&255,i=r.words[t+1>>>2]>>>24-(t+1)%4*8&255,o=r.words[t+2>>>2]>>>24-(t+2)%4*8&255,c=e<<16|i<<8|o;for(let a=0;a<4&&t*8+a*6<r.sigBytes*8;a++)n.push(s.charAt(c>>>6*(3-a)&63))}return n.join("")}},Q={parse(r){const s=r.length,n=[];for(let t=0;t<s;t++)n[t>>>2]|=(r.charCodeAt(t)&255)<<24-t%4*8;return new y(n,s)}},V={parse(r){return Q.parse(unescape(encodeURIComponent(r)))}};class X{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new y,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=V.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,n){}_process(s){let n,t=this._data.sigBytes/(this.blockSize*4);s?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,i=Math.min(e*4,this._data.sigBytes);if(e){for(let o=0;o<e;o+=this.blockSize)this._doProcessBlock(this._data.words,o);n=this._data.words.splice(0,e),this._data.sigBytes-=i}return new y(n,i)}}class q extends X{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const Y=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Z=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],f=[];class tt extends q{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new y(Y.slice(0))}_doProcessBlock(s,n){const t=this._hash.words;let e=t[0],i=t[1],o=t[2],c=t[3],a=t[4],l=t[5],u=t[6],p=t[7];for(let h=0;h<64;h++){if(h<16)f[h]=s[n+h]|0;else{const g=f[h-15],R=(g<<25|g>>>7)^(g<<14|g>>>18)^g>>>3,_=f[h-2],U=(_<<15|_>>>17)^(_<<13|_>>>19)^_>>>10;f[h]=R+f[h-7]+U+f[h-16]}const C=a&l^~a&u,E=e&i^e&o^i&o,T=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),A=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),w=p+A+C+Z[h]+f[h],j=T+E;p=u,u=l,l=a,a=c+w|0,c=o,o=i,i=e,e=w+j|0}t[0]=t[0]+e|0,t[1]=t[1]+i|0,t[2]=t[2]+o|0,t[3]=t[3]+c|0,t[4]=t[4]+a|0,t[5]=t[5]+l|0,t[6]=t[6]+u|0,t[7]=t[7]+p|0}finalize(s){super.finalize(s);const n=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(t+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function et(r){return new tt().finalize(r).toString(G)}function rt(r,s={}){const n=typeof r=="string"?r:J(r,s);return et(n).substr(0,10)}const st={path:"/",decode:r=>v(decodeURIComponent(r)),encode:r=>encodeURIComponent(typeof r=="string"?r:JSON.stringify(r))};function nt(r,s){var i,o;const n={...st,...s},t=it(n)||{},e=z((o=t[r])!=null?o:(i=n.default)==null?void 0:i.call(n));return O(e,()=>{at(r,e.value,n)}),e}function it(r={}){return M(document.cookie,r)}function ot(r,s,n={}){return s==null?S(r,s,{...n,maxAge:-1}):S(r,s,n)}function at(r,s,n={}){document.cookie=ot(r,s,n)}const d=r=>Array.isArray(r)?r:r?[r]:[],ct=["sort","where","only","without"],b=(r,s)=>{const n={...s};for(const i of ct)n[i]&&(n[i]=d(n[i]));const t=(i,o=c=>c)=>(...c)=>(n[i]=o(...c),e),e={params:()=>n,only:t("only",d),without:t("without",d),where:t("where",i=>[...d(n.where),i]),sort:t("sort",i=>[...d(n.sort),...d(i)]),limit:t("limit",i=>parseInt(String(i),10)),skip:t("skip",i=>parseInt(String(i),10)),find:()=>r(e),findOne:()=>(n.first=!0,r(e)),findSurround:(i,o)=>(n.surround={query:i,...o},r(e)),locale:i=>e.where({_locale:i})};return e};function ut(r){return JSON.stringify(r,lt)}function lt(r,s){return s instanceof RegExp?`--REGEX ${s.toString()}`:s}const B=r=>s=>{var e;r&&(s.params().first?s.where({_path:H(r)}):s.where({_path:new RegExp(`^${r.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(e=s.params().sort)!=null&&e.length||s.sort({_file:1,$numeric:!0});const n=s.params(),t=P(`/query/${rt(n)}.json`);return $fetch(t,{method:"GET",responseType:"json",params:{_params:ut(n),previewToken:nt("previewToken").value}})};function ft(r,...s){return typeof r=="string"?b(B(N(L(r,...s)))):b(B(),r)}export{rt as h,ut as j,ft as q,nt as u};
