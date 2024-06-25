var nt=Object.defineProperty;var rt=(e,t,n)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _=(e,t,n)=>(rt(e,typeof t!="symbol"?t+"":t,n),n),we=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var y=(e,t,n)=>(we(e,t,"read from private field"),n?n.call(e):t.get(e)),B=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},O=(e,t,n,r)=>(we(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);class Se extends Error{constructor(n,r,s){super(s);_(this,"url");_(this,"status");_(this,"statusText");_(this,"body");_(this,"request");this.name="ApiError",this.url=r.url,this.status=r.status,this.statusText=r.statusText,this.body=r.body,this.request=n}}class st extends Error{constructor(t){super(t),this.name="CancelError"}get isCancelled(){return!0}}var g,C,A,j,D,$,L;class ot{constructor(t){B(this,g,void 0);B(this,C,void 0);B(this,A,void 0);B(this,j,void 0);B(this,D,void 0);B(this,$,void 0);B(this,L,void 0);O(this,g,!1),O(this,C,!1),O(this,A,!1),O(this,j,[]),O(this,D,new Promise((n,r)=>{O(this,$,n),O(this,L,r);const s=u=>{var l;y(this,g)||y(this,C)||y(this,A)||(O(this,g,!0),(l=y(this,$))==null||l.call(this,u))},o=u=>{var l;y(this,g)||y(this,C)||y(this,A)||(O(this,C,!0),(l=y(this,L))==null||l.call(this,u))},i=u=>{y(this,g)||y(this,C)||y(this,A)||y(this,j).push(u)};return Object.defineProperty(i,"isResolved",{get:()=>y(this,g)}),Object.defineProperty(i,"isRejected",{get:()=>y(this,C)}),Object.defineProperty(i,"isCancelled",{get:()=>y(this,A)}),t(s,o,i)}))}get[Symbol.toStringTag](){return"Cancellable Promise"}then(t,n){return y(this,D).then(t,n)}catch(t){return y(this,D).catch(t)}finally(t){return y(this,D).finally(t)}cancel(){var t;if(!(y(this,g)||y(this,C)||y(this,A))){if(O(this,A,!0),y(this,j).length)try{for(const n of y(this,j))n()}catch(n){console.warn("Cancellation threw an error",n);return}y(this,j).length=0,(t=y(this,L))==null||t.call(this,new st("Request aborted"))}}get isCancelled(){return y(this,A)}}g=new WeakMap,C=new WeakMap,A=new WeakMap,j=new WeakMap,D=new WeakMap,$=new WeakMap,L=new WeakMap;function je(e,t){return function(){return e.apply(t,arguments)}}const{toString:it}=Object.prototype,{getPrototypeOf:de}=Object,Q=(e=>t=>{const n=it.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>Q(t)===e),Z=e=>t=>typeof t===e,{isArray:k}=Array,I=Z("undefined");function at(e){return e!==null&&!I(e)&&e.constructor!==null&&!I(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const De=N("ArrayBuffer");function ct(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&De(e.buffer),t}const ut=Z("string"),R=Z("function"),_e=Z("number"),Y=e=>e!==null&&typeof e=="object",lt=e=>e===!0||e===!1,W=e=>{if(Q(e)!=="object")return!1;const t=de(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ft=N("Date"),dt=N("File"),ht=N("Blob"),pt=N("FileList"),mt=e=>Y(e)&&R(e.pipe),yt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=Q(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},bt=N("URLSearchParams"),Et=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function M(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(r=0;r<i;r++)u=o[r],t.call(null,e[u],u,e)}}function Le(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const He=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ke=e=>!I(e)&&e!==He;function ae(){const{caseless:e}=ke(this)&&this||{},t={},n=(r,s)=>{const o=e&&Le(t,s)||s;W(t[o])&&W(r)?t[o]=ae(t[o],r):W(r)?t[o]=ae({},r):k(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&M(arguments[r],n);return t}const wt=(e,t,n,{allOwnKeys:r}={})=>(M(t,(s,o)=>{n&&R(s)?e[o]=je(s,n):e[o]=s},{allOwnKeys:r}),e),St=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Rt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ot=(e,t,n,r)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&de(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},At=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Tt=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!_e(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},gt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&de(Uint8Array)),Ct=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},xt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Nt=N("HTMLFormElement"),Pt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Re=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ft=N("RegExp"),qe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};M(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Bt=e=>{qe(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ut=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return k(e)?r(e):r(String(e).split(t)),n},jt=()=>{},Dt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ne="abcdefghijklmnopqrstuvwxyz",Oe="0123456789",Ie={DIGIT:Oe,ALPHA:ne,ALPHA_DIGIT:ne+ne.toUpperCase()+Oe},_t=(e=16,t=Ie.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Lt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ht=e=>{const t=new Array(10),n=(r,s)=>{if(Y(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=k(r)?[]:{};return M(r,(i,u)=>{const l=n(i,s+1);!I(l)&&(o[u]=l)}),t[s]=void 0,o}}return r};return n(e,0)},kt=N("AsyncFunction"),qt=e=>e&&(Y(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:k,isArrayBuffer:De,isBuffer:at,isFormData:yt,isArrayBufferView:ct,isString:ut,isNumber:_e,isBoolean:lt,isObject:Y,isPlainObject:W,isUndefined:I,isDate:ft,isFile:dt,isBlob:ht,isRegExp:Ft,isFunction:R,isStream:mt,isURLSearchParams:bt,isTypedArray:gt,isFileList:pt,forEach:M,merge:ae,extend:wt,trim:Et,stripBOM:St,inherits:Rt,toFlatObject:Ot,kindOf:Q,kindOfTest:N,endsWith:At,toArray:Tt,forEachEntry:Ct,matchAll:xt,isHTMLForm:Nt,hasOwnProperty:Re,hasOwnProp:Re,reduceDescriptors:qe,freezeMethods:Bt,toObjectSet:Ut,toCamelCase:Pt,noop:jt,toFiniteNumber:Dt,findKey:Le,global:He,isContextDefined:ke,ALPHABET:Ie,generateString:_t,isSpecCompliantForm:Lt,toJSONObject:Ht,isAsyncFn:kt,isThenable:qt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const $e=m.prototype,Me={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Me[e]={value:e}});Object.defineProperties(m,Me);Object.defineProperty($e,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create($e);return a.toFlatObject(e,i,function(l){return l!==Error.prototype},u=>u!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const It=null;function ce(e){return a.isPlainObject(e)||a.isArray(e)}function ze(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ae(e,t,n){return e?e.concat(t).map(function(s,o){return s=ze(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function $t(e){return a.isArray(e)&&!e.some(ce)}const Mt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function v(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,S){return!a.isUndefined(S[p])});const r=n.metaTokens,s=n.visitor||c,o=n.dots,i=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function d(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!l&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?l&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function c(f,p,S){let P=f;if(f&&!S&&typeof f=="object"){if(a.endsWith(p,"{}"))p=r?p:p.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&$t(f)||(a.isFileList(f)||a.endsWith(p,"[]"))&&(P=a.toArray(f)))return p=ze(p),P.forEach(function(J,tt){!(a.isUndefined(J)||J===null)&&t.append(i===!0?Ae([p],tt,o):i===null?p:p+"[]",d(J))}),!1}return ce(f)?!0:(t.append(Ae(S,p,o),d(f)),!1)}const h=[],b=Object.assign(Mt,{defaultVisitor:c,convertValue:d,isVisitable:ce});function w(f,p){if(!a.isUndefined(f)){if(h.indexOf(f)!==-1)throw Error("Circular reference detected in "+p.join("."));h.push(f),a.forEach(f,function(P,T){(!(a.isUndefined(P)||P===null)&&s.call(t,P,a.isString(T)?T.trim():T,p,b))===!0&&w(P,p?p.concat(T):[T])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Te(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function he(e,t){this._pairs=[],e&&v(e,this,t)}const Je=he.prototype;Je.append=function(t,n){this._pairs.push([t,n])};Je.toString=function(t){const n=t?function(r){return t.call(this,r,Te)}:Te;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function zt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ve(e,t,n){if(!t)return e;const r=n&&n.encode||zt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new he(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Jt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ge=Jt,We={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vt=typeof URLSearchParams<"u"?URLSearchParams:he,Wt=typeof FormData<"u"?FormData:null,Kt=typeof Blob<"u"?Blob:null,Gt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Xt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),x={isBrowser:!0,classes:{URLSearchParams:Vt,FormData:Wt,Blob:Kt},isStandardBrowserEnv:Gt,isStandardBrowserWebWorkerEnv:Xt,protocols:["http","https","file","blob","url","data"]};function Qt(e,t){return v(e,new x.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return x.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Zt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Yt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ke(e){function t(n,r,s,o){let i=n[o++];const u=Number.isFinite(+i),l=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,l?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Yt(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Zt(r),s,n,0)}),n}return null}function vt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const pe={transitional:We,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ke(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Qt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return v(u?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),vt(t)):t}],transformResponse:[function(t){const n=this.transitional||pe.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:x.classes.FormData,Blob:x.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{pe.headers[e]={}});const me=pe,en=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),tn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&en[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ce=Symbol("internals");function q(e){return e&&String(e).trim().toLowerCase()}function K(e){return e===!1||e==null?e:a.isArray(e)?e.map(K):String(e)}function nn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const rn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function re(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function sn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function on(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class ee{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(u,l,d){const c=q(l);if(!c)throw new Error("header name must be a non-empty string");const h=a.findKey(s,c);(!h||s[h]===void 0||d===!0||d===void 0&&s[h]!==!1)&&(s[h||l]=K(u))}const i=(u,l)=>a.forEach(u,(d,c)=>o(d,c,l));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!rn(t)?i(tn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=q(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return nn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=q(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||re(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=q(i),i){const u=a.findKey(r,i);u&&(!n||re(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||re(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=K(s),delete n[o];return}const u=t?sn(o):String(o).trim();u!==o&&delete n[o],n[u]=K(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ce]=this[Ce]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=q(i);r[u]||(on(s,i),r[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(ee.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(ee);const F=ee;function se(e,t){const n=this||me,r=t||n,s=F.from(r.headers);let o=r.data;return a.forEach(e,function(u){o=u.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ge(e){return!!(e&&e.__CANCEL__)}function z(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(z,m,{__CANCEL__:!0});function an(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const cn=x.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,u){const l=[];l.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&l.push("expires="+new Date(s).toGMTString()),a.isString(o)&&l.push("path="+o),a.isString(i)&&l.push("domain="+i),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function un(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ln(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Xe(e,t){return e&&!un(t)?ln(e,t):t}const fn=x.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function dn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function hn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(l){const d=Date.now(),c=r[o];i||(i=d),n[s]=l,r[s]=d;let h=o,b=0;for(;h!==s;)b+=n[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),d-i<t)return;const w=c&&d-c;return w?Math.round(b*1e3/w):void 0}}function xe(e,t){let n=0;const r=hn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-n,l=r(u),d=o<=i;n=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:l||void 0,estimated:l&&i&&d?(i-o)/l:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const pn=typeof XMLHttpRequest<"u",mn=pn&&function(e){return new Promise(function(n,r){let s=e.data;const o=F.from(e.headers).normalize(),i=e.responseType;let u;function l(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}let d;a.isFormData(s)&&(x.isStandardBrowserEnv||x.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?a.isString(d=o.getContentType())&&o.setContentType(d.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const f=e.auth.username||"",p=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(f+":"+p))}const h=Xe(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ve(h,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function b(){if(!c)return;const f=F.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),S={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:f,config:e,request:c};an(function(T){n(T),l()},function(T){r(T),l()},S),c=null}if("onloadend"in c?c.onloadend=b:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(b)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let p=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const S=e.transitional||We;e.timeoutErrorMessage&&(p=e.timeoutErrorMessage),r(new m(p,S.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},x.isStandardBrowserEnv){const f=fn(h)&&e.xsrfCookieName&&cn.read(e.xsrfCookieName);f&&o.set(e.xsrfHeaderName,f)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(p,S){c.setRequestHeader(S,p)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",xe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",xe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=f=>{c&&(r(!f||f.type?new z(null,e,c):f),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const w=dn(h);if(w&&x.protocols.indexOf(w)===-1){r(new m("Unsupported protocol "+w+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},ue={http:It,xhr:mn};a.forEach(ue,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ne=e=>`- ${e}`,yn=e=>a.isFunction(e)||e===null||e===!1,Qe={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!yn(n)&&(r=ue[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([u,l])=>`adapter ${u} `+(l===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ne).join(`
`):" "+Ne(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ue};function oe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new z(null,e)}function Pe(e){return oe(e),e.headers=F.from(e.headers),e.data=se.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Qe.getAdapter(e.adapter||me.adapter)(e).then(function(r){return oe(e),r.data=se.call(e,e.transformResponse,r),r.headers=F.from(r.headers),r},function(r){return Ge(r)||(oe(e),r&&r.response&&(r.response.data=se.call(e,e.transformResponse,r.response),r.response.headers=F.from(r.response.headers))),Promise.reject(r)})}const Fe=e=>e instanceof F?e.toJSON():e;function H(e,t){t=t||{};const n={};function r(d,c,h){return a.isPlainObject(d)&&a.isPlainObject(c)?a.merge.call({caseless:h},d,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(d,c,h){if(a.isUndefined(c)){if(!a.isUndefined(d))return r(void 0,d,h)}else return r(d,c,h)}function o(d,c){if(!a.isUndefined(c))return r(void 0,c)}function i(d,c){if(a.isUndefined(c)){if(!a.isUndefined(d))return r(void 0,d)}else return r(void 0,c)}function u(d,c,h){if(h in t)return r(d,c);if(h in e)return r(void 0,d)}const l={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(d,c)=>s(Fe(d),Fe(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const h=l[c]||s,b=h(e[c],t[c],c);a.isUndefined(b)&&h!==u||(n[c]=b)}),n}const Ze="1.6.0",ye={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ye[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Be={};ye.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ze+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,u)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Be[i]&&(Be[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,u):!0}};function bn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const u=e[o],l=u===void 0||i(u,o,e);if(l!==!0)throw new m("option "+o+" must be "+l,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const le={assertOptions:bn,validators:ye},U=le.validators;class X{constructor(t){this.defaults=t,this.interceptors={request:new ge,response:new ge}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=H(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&le.assertOptions(r,{silentJSONParsing:U.transitional(U.boolean),forcedJSONParsing:U.transitional(U.boolean),clarifyTimeoutError:U.transitional(U.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:le.assertOptions(s,{encode:U.function,serialize:U.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=F.concat(i,o);const u=[];let l=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(l=l&&p.synchronous,u.unshift(p.fulfilled,p.rejected))});const d=[];this.interceptors.response.forEach(function(p){d.push(p.fulfilled,p.rejected)});let c,h=0,b;if(!l){const f=[Pe.bind(this),void 0];for(f.unshift.apply(f,u),f.push.apply(f,d),b=f.length,c=Promise.resolve(n);h<b;)c=c.then(f[h++],f[h++]);return c}b=u.length;let w=n;for(h=0;h<b;){const f=u[h++],p=u[h++];try{w=f(w)}catch(S){p.call(this,S);break}}try{c=Pe.call(this,w)}catch(f){return Promise.reject(f)}for(h=0,b=d.length;h<b;)c=c.then(d[h++],d[h++]);return c}getUri(t){t=H(this.defaults,t);const n=Xe(t.baseURL,t.url);return Ve(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){X.prototype[t]=function(n,r){return this.request(H(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,u){return this.request(H(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}X.prototype[t]=n(),X.prototype[t+"Form"]=n(!0)});const G=X;class be{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{r.subscribe(u),o=u}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,u){r.reason||(r.reason=new z(o,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new be(function(s){t=s}),cancel:t}}}const En=be;function wn(e){return function(n){return e.apply(null,n)}}function Sn(e){return a.isObject(e)&&e.isAxiosError===!0}const fe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fe).forEach(([e,t])=>{fe[t]=e});const Rn=fe;function Ye(e){const t=new G(e),n=je(G.prototype.request,t);return a.extend(n,G.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ye(H(e,s))},n}const E=Ye(me);E.Axios=G;E.CanceledError=z;E.CancelToken=En;E.isCancel=Ge;E.VERSION=Ze;E.toFormData=v;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=wn;E.isAxiosError=Sn;E.mergeConfig=H;E.AxiosHeaders=F;E.formToJSON=e=>Ke(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=Qe.getAdapter;E.HttpStatusCode=Rn;E.default=E;const Ue=E;var ve=typeof self=="object"?self.FormData:window.FormData;const Ee=e=>e!=null,te=e=>typeof e=="string",ie=e=>te(e)&&e!=="",et=e=>typeof e=="object"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.arrayBuffer=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag]),On=e=>e instanceof ve,An=e=>e>=200&&e<300,Tn=e=>{try{return btoa(e)}catch{return Buffer.from(e).toString("base64")}},gn=e=>{const t=[],n=(s,o)=>{t.push(`${encodeURIComponent(s)}=${encodeURIComponent(String(o))}`)},r=(s,o)=>{Ee(o)&&(Array.isArray(o)?o.forEach(i=>{r(s,i)}):typeof o=="object"?Object.entries(o).forEach(([i,u])=>{r(`${s}[${i}]`,u)}):n(s,o))};return Object.entries(e).forEach(([s,o])=>{r(s,o)}),t.length>0?`?${t.join("&")}`:""},Cn=(e,t)=>{const n=e.ENCODE_PATH||encodeURI,r=t.url.replace("{api-version}",e.VERSION).replace(/{(.*?)}/g,(o,i)=>{var u;return(u=t.path)!=null&&u.hasOwnProperty(i)?n(String(t.path[i])):o}),s=`${e.BASE}${r}`;return t.query?`${s}${gn(t.query)}`:s},xn=e=>{if(e.formData){const t=new ve,n=(r,s)=>{te(s)||et(s)?t.append(r,s):t.append(r,JSON.stringify(s))};return Object.entries(e.formData).filter(([r,s])=>Ee(s)).forEach(([r,s])=>{Array.isArray(s)?s.forEach(o=>n(r,o)):n(r,s)}),t}},V=async(e,t)=>typeof t=="function"?t(e):t,Nn=async(e,t,n)=>{const r=await V(t,e.TOKEN),s=await V(t,e.USERNAME),o=await V(t,e.PASSWORD),i=await V(t,e.HEADERS),u=typeof(n==null?void 0:n.getHeaders)=="function"&&(n==null?void 0:n.getHeaders())||{},l=Object.entries({Accept:"application/json",...i,...t.headers,...u}).filter(([d,c])=>Ee(c)).reduce((d,[c,h])=>({...d,[c]:String(h)}),{});if(ie(r)&&(l.Authorization=`Bearer ${r}`),ie(s)&&ie(o)){const d=Tn(`${s}:${o}`);l.Authorization=`Basic ${d}`}return t.body&&(t.mediaType?l["Content-Type"]=t.mediaType:et(t.body)?l["Content-Type"]=t.body.type||"application/octet-stream":te(t.body)?l["Content-Type"]="text/plain":On(t.body)||(l["Content-Type"]="application/json")),l},Pn=e=>{if(e.body)return e.body},Fn=async(e,t,n,r,s,o,i)=>{const u=Ue.CancelToken.source(),l={url:n,headers:o,data:r??s,method:t.method,withCredentials:e.WITH_CREDENTIALS,cancelToken:u.token};i(()=>u.cancel("The user aborted a request."));try{return await Ue.request(l)}catch(d){const c=d;if(c.response)return c.response;throw d}},Bn=(e,t)=>{if(t){const n=e.headers[t];if(te(n))return n}},Un=e=>{if(e.status!==204)return e.data},jn=(e,t)=>{const r={400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found",500:"Internal Server Error",502:"Bad Gateway",503:"Service Unavailable",...e.errors}[t.status];if(r)throw new Se(e,t,r);if(!t.ok)throw new Se(e,t,"Generic Error")},_n=(e,t)=>new ot(async(n,r,s)=>{try{const o=Cn(e,t),i=xn(t),u=Pn(t),l=await Nn(e,t,i);if(!s.isCancelled){const d=await Fn(e,t,o,u,i,l,s),c=Un(d),h=Bn(d,t.responseHeader),b={url:o,ok:An(d.status),status:d.status,statusText:d.statusText,body:h??c};jn(t,b),n(b.body)}}catch(o){r(o)}});export{_n as r};
