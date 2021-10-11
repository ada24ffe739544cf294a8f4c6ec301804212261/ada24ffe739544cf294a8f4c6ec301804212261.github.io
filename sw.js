try{self["workbox:core:6.2.4"]&&_()}catch(s){}const z=(s,...e)=>{let t=s;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t},J=z;class h extends Error{constructor(e,t){const n=J(e,t);super(n);this.name=e,this.details=t}}const d={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration!="undefined"?registration.scope:""},E=s=>[d.prefix,s,d.suffix].filter(e=>e&&e.length>0).join("-"),X=s=>{for(const e of Object.keys(d))s(e)},g={updateDetails:s=>{X(e=>{typeof s[e]=="string"&&(d[e]=s[e])})},getGoogleAnalyticsName:s=>s||E(d.googleAnalytics),getPrecacheName:s=>s||E(d.precache),getPrefix:()=>d.prefix,getRuntimeName:s=>s||E(d.runtime),getSuffix:()=>d.suffix};function K(s,e){const t=e();return s.waitUntil(t),t}try{self["workbox:precaching:6.2.4"]&&_()}catch(s){}const Y="__WB_REVISION__";function Z(s){if(!s)throw new h("add-to-cache-list-unexpected-type",{entry:s});if(typeof s=="string"){const r=new URL(s,location.href);return{cacheKey:r.href,url:r.href}}const{revision:e,url:t}=s;if(!t)throw new h("add-to-cache-list-unexpected-type",{entry:s});if(!e){const r=new URL(t,location.href);return{cacheKey:r.href,url:r.href}}const n=new URL(t,location.href),a=new URL(t,location.href);return n.searchParams.set(Y,e),{cacheKey:n.href,url:a.href}}class ee{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:n})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){const a=t.originalRequest.url;n?this.notUpdatedURLs.push(a):this.updatedURLs.push(a)}return n}}}class te{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:n})=>{const a=(n==null?void 0:n.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return a?new Request(a,{headers:t.headers}):t},this._precacheController=e}}let y;function se(){if(y===void 0){const s=new Response("");if("body"in s)try{new Response(s.body),y=!0}catch(e){y=!1}y=!1}return y}async function ne(s,e){let t=null;if(s.url&&(t=new URL(s.url).origin),t!==self.location.origin)throw new h("cross-origin-copy-response",{origin:t});const n=s.clone(),a={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=e?e(a):a,i=se()?n.body:await n.blob();return new Response(i,r)}const ae=s=>new URL(String(s),location.href).href.replace(new RegExp(`^${location.origin}`),"");function O(s,e){const t=new URL(s);for(const n of e)t.searchParams.delete(n);return t.href}async function re(s,e,t,n){const a=O(e.url,t);if(e.url===a)return s.match(e,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await s.keys(e,r);for(const c of i){const o=O(c.url,t);if(a===o)return s.match(c,n)}}class ie{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const S=new Set;async function ce(){for(const s of S)await s()}function oe(s){return new Promise(e=>setTimeout(e,s))}try{self["workbox:strategies:6.2.4"]&&_()}catch(s){}function C(s){return typeof s=="string"?new Request(s):s}class he{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new ie,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const n of this._plugins)this._pluginStateMap.set(n,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let n=C(e);if(n.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const i=await t.preloadResponse;if(i)return i}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const i of this.iterateCallbacks("requestWillFetch"))n=await i({request:n.clone(),event:t})}catch(i){if(i instanceof Error)throw new h("plugin-error-request-will-fetch",{thrownErrorMessage:i.message})}const r=n.clone();try{let i;i=await fetch(n,n.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const c of this.iterateCallbacks("fetchDidSucceed"))i=await c({event:t,request:r,response:i});return i}catch(i){throw a&&await this.runCallbacks("fetchDidFail",{error:i,event:t,originalRequest:a.clone(),request:r.clone()}),i}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=C(e);let n;const{cacheName:a,matchOptions:r}=this._strategy,i=await this.getCacheKey(t,"read"),c=Object.assign(Object.assign({},r),{cacheName:a});n=await caches.match(i,c);for(const o of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await o({cacheName:a,matchOptions:r,cachedResponse:n,request:i,event:this.event})||void 0;return n}async cachePut(e,t){const n=C(e);await oe(0);const a=await this.getCacheKey(n,"write");if(!t)throw new h("cache-put-with-no-response",{url:ae(a.url)});const r=await this._ensureResponseSafeToCache(t);if(!r)return!1;const{cacheName:i,matchOptions:c}=this._strategy,o=await self.caches.open(i),l=this.hasCallback("cacheDidUpdate"),w=l?await re(o,a.clone(),["__WB_REVISION__"],c):null;try{await o.put(a,l?r.clone():r)}catch(u){if(u instanceof Error)throw u.name==="QuotaExceededError"&&await ce(),u}for(const u of this.iterateCallbacks("cacheDidUpdate"))await u({cacheName:i,oldResponse:w,newResponse:r.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let n=e;for(const a of this.iterateCallbacks("cacheKeyWillBeUsed"))n=C(await a({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[t]=n}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const n=this._pluginStateMap.get(t);yield r=>{const i=Object.assign(Object.assign({},r),{state:n});return t[e](i)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=await a({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&t.status!==200&&(t=void 0),t}}class D{constructor(e={}){this.cacheName=g.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n=typeof e.request=="string"?new Request(e.request):e.request,a="params"in e?e.params:void 0,r=new he(this,{event:t,request:n,params:a}),i=this._getResponse(r,n,t),c=this._awaitComplete(i,r,n,t);return[i,c]}async _getResponse(e,t,n){await e.runCallbacks("handlerWillStart",{event:n,request:t});let a;try{if(a=await this._handle(t,e),!a||a.type==="error")throw new h("no-response",{url:t.url})}catch(r){if(r instanceof Error){for(const i of e.iterateCallbacks("handlerDidError"))if(a=await i({error:r,event:n,request:t}),a)break}if(!a)throw r}for(const r of e.iterateCallbacks("handlerWillRespond"))a=await r({event:n,request:t,response:a});return a}async _awaitComplete(e,t,n,a){let r,i;try{r=await e}catch(c){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:n,response:r}),await t.doneWaiting()}catch(c){c instanceof Error&&(i=c)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:n,response:r,error:i}),t.destroy(),i)throw i}}class p extends D{constructor(e={}){e.cacheName=g.getPrecacheName(e.cacheName);super(e);this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(p.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const n=await t.cacheMatch(e);return n||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let n;const a=t.params||{};if(this._fallbackToNetwork){const r=a.integrity,i=e.integrity,c=!i||i===r;n=await t.fetch(new Request(e,{integrity:i||r})),r&&c&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,n.clone()))}else throw new h("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return n}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const n=await t.fetch(e);if(!await t.cachePut(e,n.clone()))throw new h("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[n,a]of this.plugins.entries())a!==p.copyRedirectedCacheableResponsesPlugin&&(a===p.defaultPrecacheCacheabilityPlugin&&(e=n),a.cacheWillUpdate&&t++);t===0?this.plugins.push(p.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}p.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:s}){return!s||s.status>=400?null:s}};p.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:s}){return s.redirected?await ne(s):s}};class le{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new p({cacheName:g.getPrecacheName(e),plugins:[...t,new te({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const n of e){typeof n=="string"?t.push(n):n&&n.revision===void 0&&t.push(n.url);const{cacheKey:a,url:r}=Z(n),i=typeof n!="string"&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==a)throw new h("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:a});if(typeof n!="string"&&n.integrity){if(this._cacheKeysToIntegrities.has(a)&&this._cacheKeysToIntegrities.get(a)!==n.integrity)throw new h("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(a,n.integrity)}if(this._urlsToCacheKeys.set(r,a),this._urlsToCacheModes.set(r,i),t.length>0){const c=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(c)}}}install(e){return K(e,async()=>{const t=new ee;this.strategy.plugins.push(t);for(const[r,i]of this._urlsToCacheKeys){const c=this._cacheKeysToIntegrities.get(i),o=this._urlsToCacheModes.get(r),l=new Request(r,{integrity:c,cache:o,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:i},request:l,event:e}))}const{updatedURLs:n,notUpdatedURLs:a}=t;return{updatedURLs:n,notUpdatedURLs:a}})}activate(e){return K(e,async()=>{const t=await self.caches.open(this.strategy.cacheName),n=await t.keys(),a=new Set(this._urlsToCacheKeys.values()),r=[];for(const i of n)a.has(i.url)||(await t.delete(i),r.push(i.url));return{deletedURLs:r}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n)return(await self.caches.open(this.strategy.cacheName)).match(n)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new h("non-precached-url",{url:e});return n=>(n.request=new Request(e),n.params=Object.assign({cacheKey:t},n.params),this.strategy.handle(n))}}let L;const U=()=>(L||(L=new le),L);try{self["workbox:routing:6.2.4"]&&_()}catch(s){}const W="GET",x=s=>s&&typeof s=="object"?s:{handle:s};class m{constructor(e,t,n=W){this.handler=x(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=x(e)}}class ue extends m{constructor(e,t,n){const a=({url:r})=>{const i=e.exec(r.href);if(!!i&&!(r.origin!==location.origin&&i.index!==0))return i.slice(1)};super(a,t,n)}}class de{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,n=Promise.all(t.urlsToCache.map(a=>{typeof a=="string"&&(a=[a]);const r=new Request(...a);return this.handleRequest({request:r,event:e})}));e.waitUntil(n),e.ports&&e.ports[0]&&n.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return;const a=n.origin===location.origin,{params:r,route:i}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:n});let c=i&&i.handler;const o=e.method;if(!c&&this._defaultHandlerMap.has(o)&&(c=this._defaultHandlerMap.get(o)),!c)return;let l;try{l=c.handle({url:n,request:e,event:t,params:r})}catch(u){l=Promise.reject(u)}const w=i&&i.catchHandler;return l instanceof Promise&&(this._catchHandler||w)&&(l=l.catch(async u=>{if(w)try{return await w.handle({url:n,request:e,event:t,params:r})}catch(A){A instanceof Error&&(u=A)}if(this._catchHandler)return this._catchHandler.handle({url:n,request:e,event:t});throw u})),l}findMatchingRoute({url:e,sameOrigin:t,request:n,event:a}){const r=this._routes.get(n.method)||[];for(const i of r){let c;const o=i.match({url:e,sameOrigin:t,request:n,event:a});if(o)return c=o,(Array.isArray(c)&&c.length===0||o.constructor===Object&&Object.keys(o).length===0||typeof o=="boolean")&&(c=void 0),{route:i,params:c}}return{}}setDefaultHandler(e,t=W){this._defaultHandlerMap.set(t,x(e))}setCatchHandler(e){this._catchHandler=x(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new h("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new h("unregister-route-route-not-registered")}}let R;const B=()=>(R||(R=new de,R.addFetchListener(),R.addCacheListener()),R);function T(s,e,t){let n;if(typeof s=="string"){const r=new URL(s,location.href),i=({url:c})=>c.href===r.href;n=new m(i,e,t)}else if(s instanceof RegExp)n=new ue(s,e,t);else if(typeof s=="function")n=new m(s,e,t);else if(s instanceof m)n=s;else throw new h("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return B().registerRoute(n),n}function fe(s,e=[]){for(const t of[...s.searchParams.keys()])e.some(n=>n.test(t))&&s.searchParams.delete(t);return s}function*pe(s,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(s,location.href);r.hash="",yield r.href;const i=fe(r,e);if(yield i.href,t&&i.pathname.endsWith("/")){const c=new URL(i.href);c.pathname+=t,yield c.href}if(n){const c=new URL(i.href);c.pathname+=".html",yield c.href}if(a){const c=a({url:r});for(const o of c)yield o.href}}class ge extends m{constructor(e,t){const n=({request:a})=>{const r=e.getURLsToCacheKeys();for(const i of pe(a.url,t)){const c=r.get(i);if(c){const o=e.getIntegrityForCacheKey(c);return{cacheKey:c,integrity:o}}}};super(n,e.strategy)}}function me(s){const e=U(),t=new ge(e,s);T(t)}const we="-precache-",ye=async(s,e=we)=>{const n=(await self.caches.keys()).filter(a=>a.includes(e)&&a.includes(self.registration.scope)&&a!==s);return await Promise.all(n.map(a=>self.caches.delete(a))),n};function _e(){self.addEventListener("activate",s=>{const e=g.getPrecacheName();s.waitUntil(ye(e).then(t=>{}))})}function Re(s){return U().createHandlerBoundToURL(s)}function be(s){U().precache(s)}function Ce(s,e){be(s),me(e)}function xe(s){S.add(s)}function j(s){s.then(()=>{})}function Ee(s){g.updateDetails(s)}class De extends m{constructor(e,{allowlist:t=[/./],denylist:n=[]}={}){super(a=>this._match(a),e);this._allowlist=t,this._denylist=n}_match({url:e,request:t}){if(t&&t.mode!=="navigate")return!1;const n=e.pathname+e.search;for(const a of this._denylist)if(a.test(n))return!1;return!!this._allowlist.some(a=>a.test(n))}}function Le(s){B().setDefaultHandler(s)}class Ue extends D{async _handle(e,t){let n=await t.cacheMatch(e),a;if(!n)try{n=await t.fetchAndCachePut(e)}catch(r){r instanceof Error&&(a=r)}if(!n)throw new h("no-response",{url:e.url,error:a});return n}}const Te={cacheWillUpdate:async({response:s})=>s.status===200||s.status===0?s:null};class Pe extends D{constructor(e={}){super(e);this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(Te)}async _handle(e,t){const n=t.fetchAndCachePut(e).catch(()=>{});let a=await t.cacheMatch(e),r;if(!a)try{a=await n}catch(i){i instanceof Error&&(r=i)}if(!a)throw new h("no-response",{url:e.url,error:r});return a}}const ke=(s,e)=>e.some(t=>s instanceof t);let q,F;function Ie(){return q||(q=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ne(){return F||(F=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const H=new WeakMap,P=new WeakMap,V=new WeakMap,k=new WeakMap,I=new WeakMap;function ve(s){const e=new Promise((t,n)=>{const a=()=>{s.removeEventListener("success",r),s.removeEventListener("error",i)},r=()=>{t(f(s.result)),a()},i=()=>{n(s.error),a()};s.addEventListener("success",r),s.addEventListener("error",i)});return e.then(t=>{t instanceof IDBCursor&&H.set(t,s)}).catch(()=>{}),I.set(e,s),e}function Me(s){if(P.has(s))return;const e=new Promise((t,n)=>{const a=()=>{s.removeEventListener("complete",r),s.removeEventListener("error",i),s.removeEventListener("abort",i)},r=()=>{t(),a()},i=()=>{n(s.error||new DOMException("AbortError","AbortError")),a()};s.addEventListener("complete",r),s.addEventListener("error",i),s.addEventListener("abort",i)});P.set(s,e)}let N={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return P.get(s);if(e==="objectStoreNames")return s.objectStoreNames||V.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return f(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function Ae(s){N=s(N)}function Ke(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(v(this),e,...t);return V.set(n,e.sort?e.sort():[e]),f(n)}:Ne().includes(s)?function(...e){return s.apply(v(this),e),f(H.get(this))}:function(...e){return f(s.apply(v(this),e))}}function Oe(s){return typeof s=="function"?Ke(s):(s instanceof IDBTransaction&&Me(s),ke(s,Ie())?new Proxy(s,N):s)}function f(s){if(s instanceof IDBRequest)return ve(s);if(k.has(s))return k.get(s);const e=Oe(s);return e!==s&&(k.set(s,e),I.set(e,s)),e}const v=s=>I.get(s);function Se(s,e,{blocked:t,upgrade:n,blocking:a,terminated:r}={}){const i=indexedDB.open(s,e),c=f(i);return n&&i.addEventListener("upgradeneeded",o=>{n(f(i.result),o.oldVersion,o.newVersion,f(i.transaction))}),t&&i.addEventListener("blocked",()=>t()),c.then(o=>{r&&o.addEventListener("close",()=>r()),a&&o.addEventListener("versionchange",()=>a())}).catch(()=>{}),c}function We(s,{blocked:e}={}){const t=indexedDB.deleteDatabase(s);return e&&t.addEventListener("blocked",()=>e()),f(t).then(()=>{})}const Be=["get","getKey","getAll","getAllKeys","count"],je=["put","add","delete","clear"],M=new Map;function G(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(M.get(e))return M.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,a=je.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(a||Be.includes(t)))return;const r=async function(i,...c){const o=this.transaction(i,a?"readwrite":"readonly");let l=o.store;return n&&(l=l.index(c.shift())),(await Promise.all([l[t](...c),a&&o.done]))[0]};return M.set(e,r),r}Ae(s=>({...s,get:(e,t,n)=>G(e,t)||s.get(e,t,n),has:(e,t)=>!!G(e,t)||s.has(e,t)}));try{self["workbox:expiration:6.2.4"]&&_()}catch(s){}const qe="workbox-expiration",b="cache-entries",Q=s=>{const e=new URL(s,location.href);return e.hash="",e.href};class Fe{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(b,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&We(this._cacheName)}async setTimestamp(e,t){e=Q(e);const n={url:e,timestamp:t,cacheName:this._cacheName,id:this._getId(e)},r=(await this.getDb()).transaction(b,"readwrite",{durability:"relaxed"});await r.store.put(n),await r.done}async getTimestamp(e){const n=await(await this.getDb()).get(b,this._getId(e));return n==null?void 0:n.timestamp}async expireEntries(e,t){const n=await this.getDb();let a=await n.transaction(b).store.index("timestamp").openCursor(null,"prev");const r=[];let i=0;for(;a;){const o=a.value;o.cacheName===this._cacheName&&(e&&o.timestamp<e||t&&i>=t?r.push(a.value):i++),a=await a.continue()}const c=[];for(const o of r)await n.delete(b,o.id),c.push(o.url);return c}_getId(e){return this._cacheName+"|"+Q(e)}async getDb(){return this._db||(this._db=await Se(qe,1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class He{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new Fe(e)}async expireEntries(){if(this._isRunning){this._rerunRequested=!0;return}this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-this._maxAgeSeconds*1e3:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),n=await self.caches.open(this._cacheName);for(const a of t)await n.delete(a,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,j(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),n=Date.now()-this._maxAgeSeconds*1e3;return t!==void 0?t<n:!0}else return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class ${constructor(e={}){this.cachedResponseWillBeUsed=async({event:t,request:n,cacheName:a,cachedResponse:r})=>{if(!r)return null;const i=this._isResponseDateFresh(r),c=this._getCacheExpiration(a);j(c.expireEntries());const o=c.updateTimestamp(n.url);if(t)try{t.waitUntil(o)}catch(l){}return i?r:null},this.cacheDidUpdate=async({cacheName:t,request:n})=>{const a=this._getCacheExpiration(t);await a.updateTimestamp(n.url),await a.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&xe(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(e){if(e===g.getRuntimeName())throw new h("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new He(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(t===null)return!0;const n=Date.now();return t>=n-this._maxAgeSeconds*1e3}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),a=new Date(t).getTime();return isNaN(a)?null:a}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}try{self["workbox:cacheable-response:6.2.4"]&&_()}catch(s){}class Ve{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some(n=>e.headers.get(n)===this._headers[n])),t}}class Ge{constructor(e){this.cacheWillUpdate=async({response:t})=>this._cacheableResponse.isResponseCacheable(t)?t:null,this._cacheableResponse=new Ve(e)}}Ee({prefix:"viscoin",suffix:"v1",precache:"precache",runtime:"runtime"});Ce([{"revision":"14ee27f07d5daa4c55f14fb806b9f191","url":"assets/[...all].72577f15.js"},{"revision":"f51235fa937cb3b0154f9b8a4547ab00","url":"assets/[address].a28c1708.js"},{"revision":"93a63c7c20f875ce85d8e2e3718facf1","url":"assets/community.1c3465e6.js"},{"revision":"5790679b84a45b35a951127225e63e1e","url":"assets/debounce.dc046047.js"},{"revision":"8cd1e19a8179c6394b2fff15ec294ea8","url":"assets/docs.c7947a9e.js"},{"revision":"79e8b17a745d0a107db6a56d9e83d554","url":"assets/explorer.0d0f63b1.js"},{"revision":"fc56f4d6658035e318f17fc11cab0675","url":"assets/explorer.3a79a7a9.css"},{"revision":"96787be6713aa2bba51b9be441e0856c","url":"assets/import.a610bd46.js"},{"revision":"137b953b26f7fac71d1df9196263808a","url":"assets/index.0f1e4086.js"},{"revision":"e190bd1d4a9e982c1c145250e50845d6","url":"assets/index.11e527c5.js"},{"revision":"dcc6ec84381fe6e288e4585ddc5ba088","url":"assets/index.c04bb645.css"},{"revision":"acb47696fd813ba068856ed67cbdc9a5","url":"assets/vendor.309dbb5d.js"},{"revision":"3dd3ef4d19e8b8e4cf5c3909ddc77e33","url":"assets/WalletAddress.5041787c.js"},{"revision":"30b15bf8a5dc9bbeb315017dc234d055","url":"index.html"},{"revision":"a2f04c9e80f3cdf00f278ff8a446b377","url":"android-chrome-192x192.png"},{"revision":"366dd8ad2768fc6fd1ebc413bff43d9f","url":"android-chrome-512x512.png"},{"revision":"08ba759adb61ae8b1edb37665819ab1b","url":"manifest.webmanifest"}]);_e();T(new De(Re("index.html")));const Qe=new Pe({cacheName:"viscoin-external-v1",plugins:[new $({maxEntries:50,maxAgeSeconds:60*60*24,purgeOnQuotaError:!0}),new Ge({statuses:[0,200]})]});Le(s=>s.request.method==="GET"?Qe.handle(s):fetch(s.request));T(/^.*\\.(png|jpg|jpeg|gif|svg|ico)/i,new Ue({cacheName:"viscoin-media-v1",plugins:[new $({maxEntries:50,maxAgeSeconds:60*60*24,purgeOnQuotaError:!0})]}));self.addEventListener("install",()=>{self.skipWaiting()});self.addEventListener("message",s=>{s.data&&s.data.type==="SKIP_WAITING"&&self.skipWaiting()});
