import{r as T}from"./react-Bjzu39jn.js";import{s as A,u as Qe,a as qe,b as we,c as Pe,h as Ce,d as pe,e as Ie,f as De,g as Se,i as Oe}from"./tanstack-cynJ2YVG.js";function V(e){const n={subscribe(t){let u=null,r=!1,i=!1,c=!1;function o(){if(u===null){c=!0;return}i||(i=!0,typeof u=="function"?u():u&&u.unsubscribe())}return u=e({next(s){var h;r||(h=t.next)==null||h.call(t,s)},error(s){var h;r||(r=!0,(h=t.error)==null||h.call(t,s),o())},complete(){var s;r||(r=!0,(s=t.complete)==null||s.call(t),o())}}),c&&o(),{unsubscribe:o}},pipe(...t){return t.reduce(Te,n)}};return n}function Te(e,n){return n(e)}function xe(e){const n=new AbortController;return new Promise((u,r)=>{let i=!1;function c(){i||(i=!0,o.unsubscribe())}n.signal.addEventListener("abort",()=>{r(n.signal.reason)});const o=e.subscribe({next(s){i=!0,u(s),c()},error(s){r(s)},complete(){n.abort(),c()}})})}function Ue(e){return n=>{let t=0,u=null;const r=[];function i(){u||(u=n.subscribe({next(o){var s;for(const h of r)(s=h.next)==null||s.call(h,o)},error(o){var s;for(const h of r)(s=h.error)==null||s.call(h,o)},complete(){var o;for(const s of r)(o=s.complete)==null||o.call(s)}}))}function c(){if(t===0&&u){const o=u;u=null,o.unsubscribe()}}return V(o=>(t++,r.push(o),i(),{unsubscribe(){t--,c();const s=r.findIndex(h=>h===o);s>-1&&r.splice(s,1)}}))}}function Ee(e){return V(n=>{function t(r=0,i=e.op){const c=e.links[r];if(!c)throw new Error("No more links to execute - did you forget to add an ending link?");return c({op:i,next(s){return t(r+1,s)}})}return t().subscribe(n)})}var G,X;const fe=()=>{},Y=e=>{Object.freeze&&Object.freeze(e)};function ye(e,n,t){const u=n.join(".");return(G=t)[X=u]??(G[X]=new Proxy(fe,{get(r,i){if(!(typeof i!="string"||i==="then"))return ye(e,[...n,i],t)},apply(r,i,c){const o=n[n.length-1];let s={args:c,path:n};return o==="call"?s={args:c.length>=2?[c[1]]:[],path:n.slice(0,-1)}:o==="apply"&&(s={args:c.length>=2?c[1]:[],path:n.slice(0,-1)}),Y(s.args),Y(s.path),e(s)}})),t[u]}const H=e=>ye(e,[],Object.create(null)),B=e=>new Proxy(fe,{get(n,t){if(!(typeof t!="string"||t==="then"))return e(t)}});function M(e){return!!e&&!Array.isArray(e)&&typeof e=="object"}const Me=typeof Symbol=="function"&&!!Symbol.asyncIterator;function Re(e){return Me&&M(e)&&Symbol.asyncIterator in e}function Ae(e,n){if("error"in e){const u=n.deserialize(e.error);return{ok:!1,error:{...e,error:u}}}return{ok:!0,result:{...e.result,...(!e.result.type||e.result.type==="data")&&{type:"data",data:n.deserialize(e.result.data)}}}}class J extends Error{constructor(){super("Unable to transform response from server")}}function je(e,n){let t;try{t=Ae(e,n)}catch{throw new J}if(!t.ok&&(!M(t.error.error)||typeof t.error.error.code!="number"))throw new J;if(t.ok&&!M(t.result))throw new J;return t}var re,ue,ie,ae,se,ce;typeof window>"u"||"Deno"in window||((ue=(re=globalThis.process)==null?void 0:re.env)==null?void 0:ue.NODE_ENV)==="test"||(ae=(ie=globalThis.process)==null?void 0:ie.env)!=null&&ae.JEST_WORKER_ID||(ce=(se=globalThis.process)==null?void 0:se.env)!=null&&ce.VITEST_WORKER_ID;function ke(e){return e instanceof U||e instanceof Error&&e.name==="TRPCClientError"}function Ke(e){return M(e)&&M(e.error)&&typeof e.error.code=="number"&&typeof e.error.message=="string"}function $e(e,n){return typeof e=="string"?e:M(e)&&typeof e.message=="string"?e.message:n}class U extends Error{static from(n,t={}){const u=n;return ke(u)?(t.meta&&(u.meta={...u.meta,...t.meta}),u):Ke(u)?new U(u.error.message,{...t,result:u}):new U($e(u,"Unknown error"),{...t,cause:u})}constructor(n,t){var r,i;const u=t==null?void 0:t.cause;super(n,{cause:u}),this.meta=t==null?void 0:t.meta,this.cause=u,this.shape=(r=t==null?void 0:t.result)==null?void 0:r.error,this.data=(i=t==null?void 0:t.result)==null?void 0:i.error.data,this.name="TRPCClientError",Object.setPrototypeOf(this,U.prototype)}}class de{$request(n){return Ee({links:this.links,op:{...n,context:n.context??{},id:++this.requestId}}).pipe(Ue())}async requestAsPromise(n){try{const t=this.$request(n);return(await xe(t)).result.data}catch(t){throw U.from(t)}}query(n,t,u){return this.requestAsPromise({type:"query",path:n,input:t,context:u==null?void 0:u.context,signal:u==null?void 0:u.signal})}mutation(n,t,u){return this.requestAsPromise({type:"mutation",path:n,input:t,context:u==null?void 0:u.context,signal:u==null?void 0:u.signal})}subscription(n,t,u){return this.$request({type:"subscription",path:n,input:t,context:u==null?void 0:u.context,signal:null}).subscribe({next(i){var c,o,s;i.result.type==="started"?(c=u.onStarted)==null||c.call(u,{context:i.context}):i.result.type==="stopped"?(o=u.onStopped)==null||o.call(u):(s=u.onData)==null||s.call(u,i.result.data)},error(i){var c;(c=u.onError)==null||c.call(u,i)},complete(){var i;(i=u.onComplete)==null||i.call(u)}})}constructor(n){this.requestId=0,this.runtime={},this.links=n.links.map(t=>t(this.runtime))}}function ve(e){return new de(e)}const _e={query:"query",mutate:"mutation",subscribe:"subscription"},Fe=e=>_e[e];function He(e){const n=H(({path:t,args:u})=>{const r=[...t],i=Fe(r.pop()),c=r.join(".");return e[i](c,...u)});return B(t=>e.hasOwnProperty(t)?e[t]:t==="__untypedClient"?e:n[t])}function Ne(e){return e.__untypedClient}const Z=e=>typeof e=="function";function Le(e){if(e)return e;if(typeof window<"u"&&Z(window.fetch))return window.fetch;if(typeof globalThis<"u"&&Z(globalThis.fetch))return globalThis.fetch;throw new Error("No fetch implementation found")}const ee=()=>{throw new Error("Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new")};function te(e){let n=null,t=null;const u=()=>{clearTimeout(t),t=null,n=null};function r(o){var S,C;const s=[[]];let h=0;for(;;){const b=o[h];if(!b)break;const p=s[s.length-1];if(b.aborted){(S=b.reject)==null||S.call(b,new Error("Aborted")),h++;continue}if(e.validate(p.concat(b).map(I=>I.key))){p.push(b),h++;continue}if(p.length===0){(C=b.reject)==null||C.call(b,new Error("Input is too big for a single dispatch")),h++;continue}s.push([])}return s}function i(){const o=r(n);u();for(const s of o){if(!s.length)continue;const h={items:s};for(const C of s)C.batch=h;e.fetch(h.items.map(C=>C.key)).then(async C=>{var b;await Promise.all(C.map(async(p,j)=>{var N,f;const I=h.items[j];try{const l=await Promise.resolve(p);(N=I.resolve)==null||N.call(I,l)}catch(l){(f=I.reject)==null||f.call(I,l)}I.batch=null,I.reject=null,I.resolve=null}));for(const p of h.items)(b=p.reject)==null||b.call(p,new Error("Missing result")),p.batch=null}).catch(C=>{var b;for(const p of h.items)(b=p.reject)==null||b.call(p,C),p.batch=null})}}function c(o){const s={aborted:!1,key:o,batch:null,resolve:ee,reject:ee},h=new Promise((S,C)=>{s.reject=C,s.resolve=S,n||(n=[]),n.push(s)});return t||(t=setTimeout(i)),h}return{load:c}}function ze(e){const n=e;return n?"input"in n?n:{input:n,output:n}:{input:{serialize:t=>t,deserialize:t=>t},output:{serialize:t=>t,deserialize:t=>t}}}function Je(e){return{url:e.url.toString(),fetch:e.fetch,transformer:ze(e.transformer),methodOverride:e.methodOverride}}function Ve(e){const n={};for(let t=0;t<e.length;t++){const u=e[t];n[t]=u}return n}const Be={query:"GET",mutation:"POST",subscription:"PATCH"};function he(e){return"input"in e?e.transformer.input.serialize(e.input):Ve(e.inputs.map(n=>e.transformer.input.serialize(n)))}const me=e=>{const n=e.url.split("?");let u=n[0].replace(/\/$/,"")+"/"+e.path;const r=[];if(n[1]&&r.push(n[1]),"inputs"in e&&r.push("batch=1"),e.type==="query"||e.type==="subscription"){const i=he(e);i!==void 0&&e.methodOverride!=="POST"&&r.push(`input=${encodeURIComponent(JSON.stringify(i))}`)}return r.length&&(u+="?"+r.join("&")),u},We=e=>{if(e.type==="query"&&e.methodOverride!=="POST")return;const n=he(e);return n!==void 0?JSON.stringify(n):void 0},Ge=e=>et({...e,contentTypeHeader:"application/json",getUrl:me,getBody:We});class Xe extends Error{constructor(){const n="AbortError";super(n),this.name=n,this.message=n}}const Ye=e=>{var n;if(e!=null&&e.aborted)throw(n=e.throwIfAborted)==null||n.call(e),typeof DOMException<"u"?new DOMException("AbortError","AbortError"):new Xe};async function Ze(e){Ye(e.signal);const n=e.getUrl(e),t=e.getBody(e),{type:u}=e,r=await(async()=>{const c=await e.headers();return Symbol.iterator in c?Object.fromEntries(c):c})(),i={...e.contentTypeHeader?{"content-type":e.contentTypeHeader}:{},...e.trpcAcceptHeader?{"trpc-accept":e.trpcAcceptHeader}:void 0,...r};return Le(e.fetch)(n,{method:e.methodOverride??Be[u],signal:e.signal,body:t,headers:i})}async function et(e){const n={},t=await Ze(e);n.response=t;const u=await t.json();return n.responseJSON=u,{json:u,meta:n}}function tt(e){const n=new AbortController;if(e.some(i=>!i.signal))return n;const t=e.length;let u=0;const r=()=>{++u===t&&n.abort()};for(const i of e){const c=i.signal;c.aborted?r():c.addEventListener("abort",r,{once:!0})}return n}function ht(e){const n=Je(e),t=e.maxURLLength??1/0;return()=>{const u=o=>({validate(s){if(t===1/0)return!0;const h=s.map(b=>b.path).join(","),S=s.map(b=>b.input);return me({...n,type:o,path:h,inputs:S,signal:null}).length<=t},async fetch(s){const h=s.map(I=>I.path).join(","),S=s.map(I=>I.input),C=tt(s),b=await Ge({...n,path:h,inputs:S,type:o,headers(){return e.headers?typeof e.headers=="function"?e.headers({opList:s}):e.headers:{}},signal:C.signal});return(Array.isArray(b.json)?b.json:s.map(()=>b.json)).map(I=>({meta:b.meta,json:I}))}}),r=te(u("query")),i=te(u("mutation")),c={query:r,mutation:i};return({op:o})=>V(s=>{/* istanbul ignore if -- @preserve */if(o.type==="subscription")throw new Error("Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`");const S=c[o.type].load(o);let C;return S.then(b=>{C=b;const p=je(b.json,n.transformer.output);if(!p.ok){s.error(U.from(p.error,{meta:b.meta}));return}s.next({context:b.meta,result:p.result}),s.complete()}).catch(b=>{s.error(U.from(b,{meta:C==null?void 0:C.meta}))}),()=>{}})}}function x(e,n,t){const u=e.flatMap(r=>r.split("."));if(!n&&(!t||t==="any"))return u.length?[u]:[];if(t==="infinite"&&M(n)&&("direction"in n||"cursor"in n)){const{cursor:r,direction:i,...c}=n;return[u,{input:c,type:"infinite"}]}return[u,{...typeof n<"u"&&n!==A&&{input:n},...t&&t!=="any"&&{type:t}}]}function F(e){return x(e,void 0,"any")}function nt(e){return H(({path:n,args:t})=>{const u=[...n],r=u.pop();if(r==="useMutation")return e[r](u,...t);if(r==="_def")return{path:u};const[i,...c]=t,o=c[0]||{};return e[r](u,i,o)})}const rt=["client","ssrContext","ssrState","abortOnUnmount"];var oe,le;const ut=(le=(oe=T).createContext)==null?void 0:le.call(oe,null),it=e=>{switch(e){case"fetch":case"ensureData":case"prefetch":case"getData":case"setData":case"setQueriesData":return"query";case"fetchInfinite":case"prefetchInfinite":case"getInfiniteData":case"setInfiniteData":return"infinite";case"setMutationDefaults":case"getMutationDefaults":case"isMutating":case"cancel":case"invalidate":case"refetch":case"reset":return"any"}};function at(e){return H(n=>{const t=[...n.path],u=t.pop(),r=[...n.args],i=r.shift(),c=it(u),o=x(t,i,c);return{fetch:()=>e.fetchQuery(o,...r),fetchInfinite:()=>e.fetchInfiniteQuery(o,r[0]),prefetch:()=>e.prefetchQuery(o,...r),prefetchInfinite:()=>e.prefetchInfiniteQuery(o,r[0]),ensureData:()=>e.ensureQueryData(o,...r),invalidate:()=>e.invalidateQueries(o,...r),reset:()=>e.resetQueries(o,...r),refetch:()=>e.refetchQueries(o,...r),cancel:()=>e.cancelQuery(o,...r),setData:()=>{e.setQueryData(o,r[0],r[1])},setQueriesData:()=>e.setQueriesData(o,r[0],r[1],r[2]),setInfiniteData:()=>{e.setInfiniteQueryData(o,r[0],r[1])},getData:()=>e.getQueryData(o),getInfiniteData:()=>e.getInfiniteQueryData(o),setMutationDefaults:()=>e.setMutationDefaults(F(t),i),getMutationDefaults:()=>e.getMutationDefaults(F(t)),isMutating:()=>e.isMutating({mutationKey:F(t)})}[u]()})}function st(e){const n=He(e.client),t=at(e);return B(u=>{const r=u;return r==="client"?n:rt.includes(r)?e[r]:t[u]})}function O(e,n,t){var i;const u=e[0];let r=(i=e[1])==null?void 0:i.input;return t&&(r={...r??{},...t.pageParam?{cursor:t.pageParam}:{},direction:t.direction}),[u.join("."),r,n==null?void 0:n.trpc]}function $(e){const n=e.path.join(".");return T.useMemo(()=>({path:n}),[n])}function ct(e){const{client:n,queryClient:t}=e,u=n instanceof de?n:Ne(n);return{fetchQuery:(r,i)=>t.fetchQuery({...i,queryKey:r,queryFn:()=>u.query(...O(r,i))}),fetchInfiniteQuery:(r,i)=>t.fetchInfiniteQuery({...i,queryKey:r,queryFn:({pageParam:c,direction:o})=>u.query(...O(r,i,{pageParam:c,direction:o})),initialPageParam:(i==null?void 0:i.initialCursor)??null}),prefetchQuery:(r,i)=>t.prefetchQuery({...i,queryKey:r,queryFn:()=>u.query(...O(r,i))}),prefetchInfiniteQuery:(r,i)=>t.prefetchInfiniteQuery({...i,queryKey:r,queryFn:({pageParam:c,direction:o})=>u.query(...O(r,i,{pageParam:c,direction:o})),initialPageParam:(i==null?void 0:i.initialCursor)??null}),ensureQueryData:(r,i)=>t.ensureQueryData({...i,queryKey:r,queryFn:()=>u.query(...O(r,i))}),invalidateQueries:(r,i,c)=>t.invalidateQueries({...i,queryKey:r},c),resetQueries:(r,i,c)=>t.resetQueries({...i,queryKey:r},c),refetchQueries:(r,i,c)=>t.refetchQueries({...i,queryKey:r},c),cancelQuery:(r,i)=>t.cancelQueries({queryKey:r},i),setQueryData:(r,i,c)=>t.setQueryData(r,i,c),setQueriesData:(r,i,c,o)=>t.setQueriesData({...i,queryKey:r},c,o),getQueryData:r=>t.getQueryData(r),setInfiniteQueryData:(r,i,c)=>t.setQueryData(r,i,c),getInfiniteQueryData:r=>t.getQueryData(r),setMutationDefaults:(r,i)=>{const c=r[0],o=s=>u.mutation(...O([c,{input:s}],e));return t.setMutationDefaults(r,typeof i=="function"?i({canonicalMutationFn:o}):i)},getMutationDefaults:r=>t.getMutationDefaults(r),isMutating:r=>t.isMutating({...r,exact:!0})}}function ne(e){return H(n=>{const t=n.path,u=t.join("."),[r,i]=n.args;return{queryKey:x(t,r,"query"),queryFn:()=>e.query(u,r,i==null?void 0:i.trpc),...i}})}function ot(e){const n=f=>f.originalFn(),t=ut,u=f=>ve(f),r=f=>{const{abortOnUnmount:l=!1,client:a,queryClient:d,ssrContext:Q}=f,[q,m]=T.useState(f.ssrState??!1),g=T.useMemo(()=>ct({client:a,queryClient:d}),[a,d]),w=T.useMemo(()=>({abortOnUnmount:l,queryClient:d,client:a,ssrContext:Q??null,ssrState:q,...g}),[l,a,g,d,Q,q]);return T.useEffect(()=>{m(y=>y?"mounted":!1)},[]),T.createElement(t.Provider,{value:w},f.children)};function i(){const f=T.useContext(t);if(!f)throw new Error("Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?");return f}function c(f,l){var Q;const{queryClient:a,ssrState:d}=i();return d&&d!=="mounted"&&((Q=a.getQueryCache().find({queryKey:f}))==null?void 0:Q.state.status)==="error"?{retryOnMount:!1,...l}:l}function o(f,l,a){var K,R;const d=i(),{abortOnUnmount:Q,client:q,ssrState:m,queryClient:g,prefetchQuery:w}=d,y=x(f,l,"query"),P=g.getQueryDefaults(y),D=l===A;typeof window>"u"&&m==="prepass"&&((K=a==null?void 0:a.trpc)==null?void 0:K.ssr)!==!1&&((a==null?void 0:a.enabled)??(P==null?void 0:P.enabled))!==!1&&!D&&!g.getQueryCache().find({queryKey:y})&&w(y,a);const E=c(y,{...P,...a}),v=((R=a==null?void 0:a.trpc)==null?void 0:R.abortOnUnmount)??(e==null?void 0:e.abortOnUnmount)??Q,k=Qe({...E,queryKey:y,queryFn:D?l:async _=>{const ge={...E,trpc:{...E==null?void 0:E.trpc,...v?{signal:_.signal}:{signal:null}}},L=await q.query(...O(y,ge));if(Re(L)){const W=g.getQueryCache().build(_.queryKey,{queryKey:y});W.setState({data:[],status:"success"});const z=[];for await(const be of L)z.push(be),W.setState({data:[...z]});return z}return L}},g);return k.trpc=$({path:f}),k}function s(f,l,a){var g;const d=i(),Q=x(f,l,"query"),q=l===A,m=((g=a==null?void 0:a.trpc)==null?void 0:g.abortOnUnmount)??(e==null?void 0:e.abortOnUnmount)??d.abortOnUnmount;qe({...a,queryKey:Q,queryFn:q?l:w=>{const y={trpc:{...m?{signal:w.signal}:{}}};return d.client.query(...O(Q,y))}})}function h(f,l,a){var g;const d=i(),Q=x(f,l,"query"),q=((g=a==null?void 0:a.trpc)==null?void 0:g.abortOnUnmount)??(e==null?void 0:e.abortOnUnmount)??d.abortOnUnmount,m=we({...a,queryKey:Q,queryFn:w=>{const y={trpc:{...q?{signal:w.signal}:{signal:null}}};return d.client.query(...O(Q,y))}},d.queryClient);return m.trpc=$({path:f}),[m.data,m]}function S(f,l){const{client:a,queryClient:d}=i(),Q=F(f),q=d.defaultMutationOptions(d.getMutationDefaults(Q)),m=Pe({...l,mutationKey:Q,mutationFn:g=>a.mutation(...O([f,{input:g}],l)),onSuccess(...g){return n({originalFn:()=>{var y,P;return((y=l==null?void 0:l.onSuccess)==null?void 0:y.call(l,...g))??((P=q==null?void 0:q.onSuccess)==null?void 0:P.call(q,...g))},queryClient:d,meta:(l==null?void 0:l.meta)??(q==null?void 0:q.meta)??{}})}},d);return m.trpc=$({path:f}),m}/* istanbul ignore next -- @preserve */function C(f,l,a){const d=(a==null?void 0:a.enabled)??l!==A,Q=Ce(x(f,l,"any")),{client:q}=i(),m=T.useRef(a);m.current=a,T.useEffect(()=>{if(!d)return;let g=!1;const w=q.subscription(f.join("."),l??void 0,{onStarted:()=>{var y,P;g||(P=(y=m.current).onStarted)==null||P.call(y)},onData:y=>{g||m.current.onData(y)},onError:y=>{var P,D;g||(D=(P=m.current).onError)==null||D.call(P,y)}});return()=>{g=!0,w.unsubscribe()}},[Q,d])}function b(f,l,a){var k,K;const{client:d,ssrState:Q,prefetchInfiniteQuery:q,queryClient:m,abortOnUnmount:g}=i(),w=x(f,l,"infinite"),y=m.getQueryDefaults(w),P=l===A;typeof window>"u"&&Q==="prepass"&&((k=a==null?void 0:a.trpc)==null?void 0:k.ssr)!==!1&&((a==null?void 0:a.enabled)??(y==null?void 0:y.enabled))!==!1&&!P&&!m.getQueryCache().find({queryKey:w})&&q(w,{...y,...a});const D=c(w,{...y,...a}),E=((K=a==null?void 0:a.trpc)==null?void 0:K.abortOnUnmount)??g,v=pe({...D,initialPageParam:a.initialCursor??null,persister:a.persister,queryKey:w,queryFn:P?l:R=>{const _={...D,trpc:{...D==null?void 0:D.trpc,...E?{signal:R.signal}:{signal:null}}};return d.query(...O(w,_,{pageParam:R.pageParam??a.initialCursor,direction:R.direction}))}},m);return v.trpc=$({path:f}),v}function p(f,l,a){var y;const d=i(),Q=x(f,l,"infinite"),q=d.queryClient.getQueryDefaults(Q),m=l===A,g=c(Q,{...q,...a}),w=((y=a==null?void 0:a.trpc)==null?void 0:y.abortOnUnmount)??d.abortOnUnmount;Ie({...a,initialPageParam:a.initialCursor??null,queryKey:Q,queryFn:m?l:P=>{const D={...g,trpc:{...g==null?void 0:g.trpc,...w?{signal:P.signal}:{}}};return d.client.query(...O(Q,D,{pageParam:P.pageParam??a.initialCursor,direction:P.direction}))}})}function j(f,l,a){var y;const d=i(),Q=x(f,l,"infinite"),q=d.queryClient.getQueryDefaults(Q),m=c(Q,{...q,...a}),g=((y=a==null?void 0:a.trpc)==null?void 0:y.abortOnUnmount)??d.abortOnUnmount,w=De({...a,initialPageParam:a.initialCursor??null,queryKey:Q,queryFn:P=>{const D={...m,trpc:{...m==null?void 0:m.trpc,...g?{signal:P.signal}:{}}};return d.client.query(...O(Q,D,{pageParam:P.pageParam??a.initialCursor,direction:P.direction}))}},d.queryClient);return w.trpc=$({path:f}),[w.data,w]}return{Provider:r,createClient:u,useContext:i,useUtils:i,useQuery:o,usePrefetchQuery:s,useSuspenseQuery:h,useQueries:f=>{var g;const{ssrState:l,queryClient:a,prefetchQuery:d,client:Q}=i(),q=ne(Q),m=f(q);if(typeof window>"u"&&l==="prepass")for(const w of m){const y=w;((g=y.trpc)==null?void 0:g.ssr)!==!1&&!a.getQueryCache().find({queryKey:y.queryKey})&&d(y.queryKey,y)}return Se({queries:m.map(w=>({...w,queryKey:w.queryKey}))},a)},useSuspenseQueries:f=>{const{queryClient:l,client:a}=i(),d=ne(a),Q=f(d),q=Oe({queries:Q.map(m=>({...m,queryKey:m.queryKey}))},l);return[q.map(m=>m.data),q]},useMutation:S,useSubscription:C,useInfiniteQuery:b,usePrefetchInfiniteQuery:p,useSuspenseInfiniteQuery:j}}function lt(e){const n=nt(e);return B(t=>t==="useContext"||t==="useUtils"?()=>{const u=e.useUtils();return T.useMemo(()=>st(u),[u])}:e.hasOwnProperty(t)?e[t]:n[t])}function mt(e){const n=ot(e);return lt(n)}export{mt as c,ht as h};
