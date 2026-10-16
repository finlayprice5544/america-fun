(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,334523,e=>{"use strict";let t,o={ether:-9,wei:9};function i(e,t="wei"){return function(e,t){let o=e.toString(),i=o.startsWith("-");i&&(o=o.slice(1));let[r,n]=[(o=o.padStart(t,"0")).slice(0,o.length-t),o.slice(o.length-t)];return n=n.replace(/(0+)$/,""),`${i?"-":""}${r||"0"}${n?`.${n}`:""}`}(e,o[t])}let r="2.47.0",n={getDocsUrl:({docsBaseUrl:e,docsPath:t="",docsSlug:o})=>t?`${e??"https://viem.sh"}${t}${o?`#${o}`:""}`:void 0,version:`viem@${r}`};class a extends Error{constructor(e,t={}){const o=t.cause instanceof a?t.cause.details:t.cause?.message?t.cause.message:t.details,i=t.cause instanceof a&&t.cause.docsPath||t.docsPath,s=n.getDocsUrl?.({...t,docsPath:i});super([e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...s?[`Docs: ${s}`]:[],...o?[`Details: ${o}`]:[],...n.version?[`Version: ${n.version}`]:[]].join("\n"),t.cause?{cause:t.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),this.details=o,this.docsPath=i,this.metaMessages=t.metaMessages,this.name=t.name??this.name,this.shortMessage=e,this.version=r}walk(e){return function e(t,o){return o?.(t)?t:t&&"object"==typeof t&&"cause"in t&&void 0!==t.cause?e(t.cause,o):o?null:t}(this,e)}}class s extends a{constructor({cause:e,message:t}={}){const o=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${o?`with reason: ${o}`:"for an unknown reason"}.`,{cause:e,name:"ExecutionRevertedError"})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted|gas required exceeds allowance/}),Object.defineProperty(class extends a{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${i(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e,name:"FeeCapTooHighError"})}},"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/}),Object.defineProperty(class extends a{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${i(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e,name:"FeeCapTooLowError"})}},"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/}),Object.defineProperty(class extends a{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e,name:"NonceTooHighError"})}},"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/}),Object.defineProperty(class extends a{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e,name:"NonceTooLowError"})}},"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/}),Object.defineProperty(class extends a{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e,name:"NonceMaxValueError"})}},"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/}),Object.defineProperty(class extends a{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."],name:"InsufficientFundsError"})}},"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds|exceeds transaction sender account balance/}),Object.defineProperty(class extends a{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e,name:"IntrinsicGasTooHighError"})}},"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/}),Object.defineProperty(class extends a{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e,name:"IntrinsicGasTooLowError"})}},"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/}),Object.defineProperty(class extends a{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e,name:"TransactionTypeNotSupportedError"})}},"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/}),Object.defineProperty(class extends a{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:o}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${i(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${o?` = ${i(o)} gwei`:""}).`,{cause:e,name:"TipAboveFeeCapError"})}},"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});let l=(e,t,o)=>JSON.stringify(e,(e,o)=>{let i="bigint"==typeof o?o.toString():o;return"function"==typeof t?t(e,i):i},o);class c extends a{constructor({body:e,cause:t,details:o,headers:i,status:r,url:n}){super("HTTP request failed.",{cause:t,details:o,metaMessages:[r&&`Status: ${r}`,`URL: ${n}`,e&&`Request body: ${l(e)}`].filter(Boolean),name:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=i,this.status=r,this.url=n}}class d extends a{constructor({body:e,error:t,url:o}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${o}`,`Request body: ${l(e)}`],name:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code,this.data=t.data,this.url=o}}class u extends a{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${t}`,`Request body: ${l(e)}`],name:"TimeoutError"}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.url=t}}class p extends a{constructor(e,{code:t,docsPath:o,metaMessages:i,name:r,shortMessage:n}){super(n,{cause:e,docsPath:o,metaMessages:i||e?.metaMessages,name:r||"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=r||e.name,this.code=e instanceof d?e.code:t??-1}}class h extends p{constructor(e,t){super(e,t),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class m extends p{constructor(e){super(e,{code:m.code,name:"ParseRpcError",shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class w extends p{constructor(e){super(e,{code:w.code,name:"InvalidRequestRpcError",shortMessage:"JSON is not a valid request object."})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class f extends p{constructor(e,{method:t}={}){super(e,{code:f.code,name:"MethodNotFoundRpcError",shortMessage:`The method${t?` "${t}"`:""} does not exist / is not available.`})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class g extends p{constructor(e){super(e,{code:g.code,name:"InvalidParamsRpcError",shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class b extends p{constructor(e){super(e,{code:b.code,name:"InternalRpcError",shortMessage:"An internal error was received."})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class C extends p{constructor(e){super(e,{code:C.code,name:"InvalidInputRpcError",shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class y extends p{constructor(e){super(e,{code:y.code,name:"ResourceNotFoundRpcError",shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class v extends p{constructor(e){super(e,{code:v.code,name:"ResourceUnavailableRpcError",shortMessage:"Requested resource not available."})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class x extends p{constructor(e){super(e,{code:x.code,name:"TransactionRejectedRpcError",shortMessage:"Transaction creation failed."})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class $ extends p{constructor(e,{method:t}={}){super(e,{code:$.code,name:"MethodNotSupportedRpcError",shortMessage:`Method${t?` "${t}"`:""} is not supported.`})}}Object.defineProperty($,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class k extends p{constructor(e){super(e,{code:k.code,name:"LimitExceededRpcError",shortMessage:"Request exceeds defined limit."})}}Object.defineProperty(k,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class E extends p{constructor(e){super(e,{code:E.code,name:"JsonRpcVersionUnsupportedError",shortMessage:"Version of JSON-RPC protocol is not supported."})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class S extends h{constructor(e){super(e,{code:S.code,name:"UserRejectedRequestError",shortMessage:"User rejected the request."})}}Object.defineProperty(S,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class R extends h{constructor(e){super(e,{code:R.code,name:"UnauthorizedProviderError",shortMessage:"The requested method and/or account has not been authorized by the user."})}}Object.defineProperty(R,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class A extends h{constructor(e,{method:t}={}){super(e,{code:A.code,name:"UnsupportedProviderMethodError",shortMessage:`The Provider does not support the requested method${t?` " ${t}"`:""}.`})}}Object.defineProperty(A,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class O extends h{constructor(e){super(e,{code:O.code,name:"ProviderDisconnectedError",shortMessage:"The Provider is disconnected from all chains."})}}Object.defineProperty(O,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class T extends h{constructor(e){super(e,{code:T.code,name:"ChainDisconnectedError",shortMessage:"The Provider is not connected to the requested chain."})}}Object.defineProperty(T,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class N extends h{constructor(e){super(e,{code:N.code,name:"SwitchChainError",shortMessage:"An error occurred when attempting to switch chain."})}}Object.defineProperty(N,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class I extends h{constructor(e){super(e,{code:I.code,name:"UnsupportedNonOptionalCapabilityError",shortMessage:"This Wallet does not support a capability that was not marked as optional."})}}Object.defineProperty(I,"code",{enumerable:!0,configurable:!0,writable:!0,value:5700});class U extends h{constructor(e){super(e,{code:U.code,name:"UnsupportedChainIdError",shortMessage:"This Wallet does not support the requested chain ID."})}}Object.defineProperty(U,"code",{enumerable:!0,configurable:!0,writable:!0,value:5710});class P extends h{constructor(e){super(e,{code:P.code,name:"DuplicateIdError",shortMessage:"There is already a bundle submitted with this ID."})}}Object.defineProperty(P,"code",{enumerable:!0,configurable:!0,writable:!0,value:5720});class D extends h{constructor(e){super(e,{code:D.code,name:"UnknownBundleIdError",shortMessage:"This bundle id is unknown / has not been submitted"})}}Object.defineProperty(D,"code",{enumerable:!0,configurable:!0,writable:!0,value:5730});class j extends h{constructor(e){super(e,{code:j.code,name:"BundleTooLargeError",shortMessage:"The call bundle is too large for the Wallet to process."})}}Object.defineProperty(j,"code",{enumerable:!0,configurable:!0,writable:!0,value:5740});class L extends h{constructor(e){super(e,{code:L.code,name:"AtomicReadyWalletRejectedUpgradeError",shortMessage:"The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."})}}Object.defineProperty(L,"code",{enumerable:!0,configurable:!0,writable:!0,value:5750});class W extends h{constructor(e){super(e,{code:W.code,name:"AtomicityNotSupportedError",shortMessage:"The wallet does not support atomic execution but the request requires it."})}}Object.defineProperty(W,"code",{enumerable:!0,configurable:!0,writable:!0,value:5760});class _ extends h{constructor(e){super(e,{code:_.code,name:"WalletConnectSessionSettlementError",shortMessage:"WalletConnect session settlement failed."})}}Object.defineProperty(_,"code",{enumerable:!0,configurable:!0,writable:!0,value:7e3});class z extends p{constructor(e){super(e,{name:"UnknownRpcError",shortMessage:"An unknown RPC error occurred."})}}async function M(e){return new Promise(t=>setTimeout(t,e))}class F extends a{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`,{name:"SizeOverflowError"})}}class B extends a{constructor({size:e,targetSize:t,type:o}){super(`${o.charAt(0).toUpperCase()}${o.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`,{name:"SizeExceedsPaddingSizeError"})}}function H(e){return!function(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}(e,{strict:!1})?e.length:Math.ceil((e.length-2)/2)}let V=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0")),q=new TextEncoder;class K extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){let t=super.get(e);return super.has(e)&&void 0!==t&&(this.delete(e),super.set(e,t)),t}set(e,t){if(super.set(e,t),this.maxSize&&this.size>this.maxSize){let e=this.keys().next().value;e&&this.delete(e)}return this}}let G=new K(8192),Y=256;function X({key:e,methods:o,name:i,request:r,retryCount:n=3,retryDelay:s=150,timeout:d,type:u},p){return{config:{key:e,methods:o,name:i,request:r,retryCount:n,retryDelay:s,timeout:d,type:u},request:function(e,t={}){return async(o,i={})=>{let{dedupe:r=!1,methods:n,retryDelay:s=150,retryCount:d=3,uid:u}={...t,...i},{method:p}=o;if(n?.exclude?.includes(p)||n?.include&&!n.include.includes(p))throw new $(Error("method not supported"),{method:p});let h=r?function(e,t={}){return function(e,t={}){let o="";for(let t=0;t<e.length;t++)o+=V[e[t]];let i=`0x${o}`;return"number"==typeof t.size?(!function(e,{size:t}){if(H(e)>t)throw new F({givenSize:H(e),maxSize:t})}(i,{size:t.size}),function(e,{dir:t,size:o=32}={}){return"string"==typeof e?function(e,{dir:t,size:o=32}={}){if(null===o)return e;let i=e.replace("0x","");if(i.length>2*o)throw new B({size:Math.ceil(i.length/2),targetSize:o,type:"hex"});return`0x${i["right"===t?"padEnd":"padStart"](2*o,"0")}`}(e,{dir:t,size:o}):function(e,{dir:t,size:o=32}={}){if(null===o)return e;if(e.length>o)throw new B({size:e.length,targetSize:o,type:"bytes"});let i=new Uint8Array(o);for(let r=0;r<o;r++){let n="right"===t;i[n?r:o-r-1]=e[n?r:e.length-r-1]}return i}(e,{dir:t,size:o})}(i,{dir:"right",size:t.size})):i}(q.encode(e),t)}(`${u}.${l(o)}`):void 0;return function(e,{enabled:t=!0,id:o}){if(!t||!o)return e();if(G.get(o))return G.get(o);let i=e().finally(()=>G.delete(o));return G.set(o,i),i}(()=>(function(e,{delay:t=100,retryCount:o=2,shouldRetry:i=()=>!0}={}){return new Promise((r,n)=>{let a=async({count:s=0}={})=>{let l=async({error:e})=>{let o="function"==typeof t?t({count:s,error:e}):t;o&&await M(o),a({count:s+1})};try{let t=await e();r(t)}catch(e){if(s<o&&await i({count:s,error:e}))return l({error:e});n(e)}};a()})})(async()=>{try{return await e(o)}catch(e){switch(e.code){case m.code:throw new m(e);case w.code:throw new w(e);case f.code:throw new f(e,{method:o.method});case g.code:throw new g(e);case b.code:throw new b(e);case C.code:throw new C(e);case y.code:throw new y(e);case v.code:throw new v(e);case x.code:throw new x(e);case $.code:throw new $(e,{method:o.method});case k.code:throw new k(e);case E.code:throw new E(e);case S.code:throw new S(e);case R.code:throw new R(e);case A.code:throw new A(e);case O.code:throw new O(e);case T.code:throw new T(e);case N.code:throw new N(e);case I.code:throw new I(e);case U.code:throw new U(e);case P.code:throw new P(e);case D.code:throw new D(e);case j.code:throw new j(e);case L.code:throw new L(e);case W.code:throw new W(e);case 5e3:throw new S(e);case _.code:throw new _(e);default:if(e instanceof a)throw e;throw new z(e)}}},{delay:({count:e,error:t})=>{if(t&&t instanceof c){let e=t?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*Number.parseInt(e,10)}return~~(1<<e)*s},retryCount:d,shouldRetry:({error:e})=>{var t;return"code"in(t=e)&&"number"==typeof t.code?-1===t.code||t.code===k.code||t.code===b.code:!(t instanceof c)||!t.status||403===t.status||408===t.status||413===t.status||429===t.status||500===t.status||502===t.status||503===t.status||504===t.status||!1}}),{enabled:r,id:h})}}(r,{methods:o,retryCount:n,retryDelay:s,uid:function(e=11){if(!t||Y+e>512){t="",Y=0;for(let e=0;e<256;e++)t+=(256+256*Math.random()|0).toString(16).substring(1)}return t.substring(Y,Y+++e)}()}),value:p}}function J(e,t={}){let{key:o="fallback",name:i="Fallback",rank:r=!1,shouldThrow:n=Q,retryCount:a,retryDelay:s}=t;return({chain:t,pollingInterval:l=4e3,timeout:c,...d})=>{let u=e,p=()=>{},h=X({key:o,name:i,async request({method:e,params:o}){let i,r=async(a=0)=>{let s=u[a]({...d,chain:t,retryCount:0,timeout:c});try{let t=await s.request({method:e,params:o});return p({method:e,params:o,response:t,transport:s,status:"success"}),t}catch(l){if(p({error:l,method:e,params:o,transport:s,status:"error"}),n(l)||a===u.length-1||!(i??=u.slice(a+1).some(o=>{let{include:i,exclude:r}=o({chain:t}).config.methods||{};return i?i.includes(e):!r||!r.includes(e)})))throw l;return r(a+1)}};return r()},retryCount:a,retryDelay:s,type:"fallback"},{onResponse:e=>p=e,transports:u.map(e=>e({chain:t,retryCount:0}))});if(r){let e="object"==typeof r?r:{};!function({chain:e,interval:t=4e3,onTransports:o,ping:i,sampleCount:r=10,timeout:n=1e3,transports:a,weights:s={}}){let{stability:l=.7,latency:c=.3}=s,d=[],u=async()=>{let s=await Promise.all(a.map(async t=>{let o,r,a=t({chain:e,retryCount:0,timeout:n}),s=Date.now();try{await (i?i({transport:a}):a.request({method:"net_listening"})),r=1}catch{r=0}finally{o=Date.now()}return{latency:o-s,success:r}}));d.push(s),d.length>r&&d.shift();let p=Math.max(...d.map(e=>Math.max(...e.map(({latency:e})=>e))));o(a.map((e,t)=>{let o=d.map(e=>e[t].latency),i=o.reduce((e,t)=>e+t,0)/o.length,r=d.map(e=>e[t].success),n=r.reduce((e,t)=>e+t,0)/r.length;return 0===n?[0,t]:[c*(1-i/p)+l*n,t]}).sort((e,t)=>t[0]-e[0]).map(([,e])=>a[e])),await M(t),u()};u()}({chain:t,interval:e.interval??l,onTransports:e=>u=e,ping:e.ping,sampleCount:e.sampleCount,timeout:e.timeout,transports:u,weights:e.weights})}return h}}function Q(e){return!!("code"in e&&"number"==typeof e.code&&(e.code===x.code||e.code===S.code||e.code===_.code||s.nodeMessage.test(e.message)||5e3===e.code))}class Z extends a{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}let ee=new Map,et={current:0,take(){return this.current++},reset(){this.current=0}};function eo(e,t={}){let{batch:o,fetchFn:i,fetchOptions:r,key:n="http",methods:a,name:s="HTTP JSON-RPC",onFetchRequest:p,onFetchResponse:h,retryDelay:m,raw:w}=t;return({chain:f,retryCount:g,timeout:b})=>{let{batchSize:C=1e3,wait:y=0}="object"==typeof o?o:{},v=t.retryCount??g,x=b??t.timeout??1e4,$=e||f?.rpcUrls.default.http[0];if(!$)throw new Z;let k=function(e,t={}){let{url:o,headers:i}=function(e){try{let t=new URL(e),o=(()=>{if(t.username){let e=`${decodeURIComponent(t.username)}:${decodeURIComponent(t.password)}`;return t.username="",t.password="",{url:t.toString(),headers:{Authorization:`Basic ${btoa(e)}`}}}})();return{url:t.toString(),...o}}catch{return{url:e}}}(e);return{async request(e){let{body:r,fetchFn:n=t.fetchFn??fetch,onRequest:a=t.onRequest,onResponse:s=t.onResponse,timeout:d=t.timeout??1e4}=e,p={...t.fetchOptions??{},...e.fetchOptions??{}},{headers:h,method:m,signal:w}=p;try{let e,t=await function(e,{errorInstance:t=Error("timed out"),timeout:o,signal:i}){return new Promise((r,n)=>{(async()=>{let a;try{let s=new AbortController;o>0&&(a=setTimeout(()=>{i?s.abort():n(t)},o)),r(await e({signal:s?.signal||null}))}catch(e){e?.name==="AbortError"&&n(t),n(e)}finally{clearTimeout(a)}})()})}(async({signal:e})=>{let t={...p,body:Array.isArray(r)?l(r.map(e=>({jsonrpc:"2.0",id:e.id??et.take(),...e}))):l({jsonrpc:"2.0",id:r.id??et.take(),...r}),headers:{...i,"Content-Type":"application/json",...h},method:m||"POST",signal:w||(d>0?e:null)},s=new Request(o,t),c=await a?.(s,t)??{...t,url:o};return await n(c.url??o,c)},{errorInstance:new u({body:r,url:o}),timeout:d,signal:!0});if(s&&await s(t),t.headers.get("Content-Type")?.startsWith("application/json"))e=await t.json();else{e=await t.text();try{e=JSON.parse(e||"{}")}catch(o){if(t.ok)throw o;e={error:e}}}if(!t.ok)throw new c({body:r,details:l(e.error)||t.statusText,headers:t.headers,status:t.status,url:o});return e}catch(e){if(e instanceof c||e instanceof u)throw e;throw new c({body:r,cause:e,url:o})}}}}($,{fetchFn:i,fetchOptions:r,onRequest:p,onResponse:h,timeout:x});return X({key:n,methods:a,name:s,async request({method:e,params:t}){let i={method:e,params:t},{schedule:r}=function({fn:e,id:t,shouldSplitBatch:o,wait:i=0,sort:r}){let n=async()=>{let t=s();a();let o=t.map(({args:e})=>e);0!==o.length&&e(o).then(e=>{r&&Array.isArray(e)&&e.sort(r);for(let o=0;o<t.length;o++){let{resolve:i}=t[o];i?.([e[o],e])}}).catch(e=>{for(let o=0;o<t.length;o++){let{reject:i}=t[o];i?.(e)}})},a=()=>ee.delete(t),s=()=>ee.get(t)||[],l=e=>ee.set(t,[...s(),e]);return{flush:a,async schedule(e){let t,r,{promise:a,resolve:c,reject:d}=(t=()=>void 0,r=()=>void 0,{promise:new Promise((e,o)=>{t=e,r=o}),resolve:t,reject:r});return(o?.([...s().map(({args:e})=>e),e])&&n(),s().length>0)?l({args:e,resolve:c,reject:d}):(l({args:e,resolve:c,reject:d}),setTimeout(n,i)),a}}}({id:$,wait:y,shouldSplitBatch:e=>e.length>C,fn:e=>k.request({body:e}),sort:(e,t)=>e.id-t.id}),n=async e=>o?r(e):[await k.request({body:e})],[{error:a,result:s}]=await n(i);if(w)return{error:a,result:s};if(a)throw new d({body:i,error:a,url:$});return s},retryCount:v,retryDelay:m,timeout:x,type:"http"},{fetchOptions:r,url:$})}}var ei=e.i(401564),er=e.i(960398),en=e.i(758331),ea=e.i(16555);ei.ConstantsUtil.CONNECTOR_ID.COINBASE,ei.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK,ei.ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT,ei.ConstantsUtil.CONNECTOR_ID.SAFE,ei.ConstantsUtil.CONNECTOR_ID.LEDGER,ei.ConstantsUtil.CONNECTOR_ID.OKX,ea.ConstantsUtil.METMASK_CONNECTOR_NAME,ea.ConstantsUtil.TRUST_CONNECTOR_NAME,ea.ConstantsUtil.SOLFLARE_CONNECTOR_NAME,ea.ConstantsUtil.PHANTOM_CONNECTOR_NAME,ea.ConstantsUtil.COIN98_CONNECTOR_NAME,ea.ConstantsUtil.MAGIC_EDEN_CONNECTOR_NAME,ea.ConstantsUtil.BACKPACK_CONNECTOR_NAME,ea.ConstantsUtil.BITGET_CONNECTOR_NAME,ea.ConstantsUtil.FRONTIER_CONNECTOR_NAME,ea.ConstantsUtil.XVERSE_CONNECTOR_NAME,ea.ConstantsUtil.LEATHER_CONNECTOR_NAME,ea.ConstantsUtil.OKX_CONNECTOR_NAME,ea.ConstantsUtil.BINANCE_CONNECTOR_NAME;let es={1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",5e3:"e86fae9b-b770-4eea-e520-150e12c81100",295:"6a97d510-cac8-4e58-c7ce-e8681b044c00",0xaa36a7:"e909ea0a-f92a-4512-c8fc-748044ea6800",84532:"a18a7ecd-e307-4360-4746-283182228e00",1301:"4eeea7ef-0014-4649-5d1d-07271a80f600",130:"2257980a-3463-48c6-cbac-a42d2a956e00",10143:"0a728e83-bacb-46db-7844-948f05434900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",0x4e454152:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",80094:"e329c2c9-59b0-4a02-83e4-212ff3779900",2741:"fc2427d1-5af9-4a9c-8da5-6f94627cd900","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700","000000000019d6689c085ae165831e93":"0b4838db-0161-4ffe-022d-532bf03dba00","000000000933ea01ad0ee984209779ba":"39354064-d79b-420b-065d-f980c4b78200","00000008819873e925422c1ff0f99f7c":"b3406e4a-bbfc-44fb-e3a6-89673c78b700","-239":"20f673c0-095e-49b2-07cf-eb5049dcf600","-3":"20f673c0-095e-49b2-07cf-eb5049dcf600","0x2b6653dc":"3502bb86-cc4e-420f-a387-59ea63a28b00","0x94a9059e":"3502bb86-cc4e-420f-a387-59ea63a28b00","0xcd8690dc":"3502bb86-cc4e-420f-a387-59ea63a28b00"};function el(e,t){let o=new URL("https://rpc.walletconnect.org/v1/");return o.searchParams.set("chainId",e),o.searchParams.set("projectId",t),o.toString()}ei.ConstantsUtil.CONNECTOR_ID.COINBASE,ei.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK,ei.ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT,ei.ConstantsUtil.CONNECTOR_ID.SAFE,ei.ConstantsUtil.CONNECTOR_ID.LEDGER,ei.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT,ei.ConstantsUtil.CONNECTOR_ID.INJECTED,ei.ConstantsUtil.CONNECTOR_ID.INJECTED,ei.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT,ei.ConstantsUtil.CONNECTOR_ID.COINBASE,ei.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK,ei.ConstantsUtil.CONNECTOR_ID.BASE_ACCOUNT,ei.ConstantsUtil.CONNECTOR_ID.LEDGER,ei.ConstantsUtil.CONNECTOR_ID.SAFE,ei.ConstantsUtil.CONNECTOR_ID.INJECTED,ei.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT,ei.ConstantsUtil.CONNECTOR_ID.EIP6963,ei.ConstantsUtil.CONNECTOR_ID.AUTH,ea.ConstantsUtil.CONNECTOR_TYPE_AUTH;let ec=["near:mainnet","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","eip155:1101","eip155:56","eip155:42161","eip155:7777777","eip155:59144","eip155:324","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1","eip155:5000","solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz","eip155:80084","eip155:5003","eip155:100","eip155:8453","eip155:42220","eip155:1313161555","eip155:17000","eip155:1","eip155:300","eip155:1313161554","eip155:1329","eip155:84532","eip155:421614","eip155:11155111","eip155:8217","eip155:43114","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","eip155:999999999","eip155:11155420","eip155:80002","eip155:97","eip155:43113","eip155:137","eip155:10","eip155:1301","eip155:80094","eip155:80069","eip155:560048","eip155:31","eip155:2818","eip155:57054","eip155:911867","eip155:534351","eip155:1112","eip155:534352","eip155:1111","eip155:146","eip155:130","eip155:1284","eip155:30","eip155:2810","eip155:55931","bip122:000000000019d6689c085ae165831e93","bip122:000000000933ea01ad0ee984209779ba"],ed={extendRpcUrlWithProjectId(e,t){let o=!1;try{o="rpc.walletconnect.org"===new URL(e).host}catch(e){o=!1}if(o){let o=new URL(e);return o.searchParams.has("projectId")||o.searchParams.set("projectId",t),o.toString()}return e},isCaipNetwork:e=>"chainNamespace"in e&&"caipNetworkId"in e,getChainNamespace(e){return this.isCaipNetwork(e)?e.chainNamespace:ei.ConstantsUtil.CHAIN.EVM},getCaipNetworkId(e){return this.isCaipNetwork(e)?e.caipNetworkId:`${ei.ConstantsUtil.CHAIN.EVM}:${e.id}`},getDefaultRpcUrl(e,t,o){let i=e.rpcUrls?.default?.http?.[0];return ec.includes(t)?el(t,o):i||""},extendCaipNetwork(e,{customNetworkImageUrls:t,projectId:o,customRpcUrls:i}){let r=this.getChainNamespace(e),n=this.getCaipNetworkId(e),a=e.rpcUrls?.default?.http?.[0],s=this.getDefaultRpcUrl(e,n,o),l=e?.rpcUrls?.chainDefault?.http?.[0]||a,c=i?.[n]?.map(e=>e.url)||[],d=[...c,...s?[s]:[]],u=[...c];return l&&!u.includes(l)&&u.push(l),{...e,chainNamespace:r,caipNetworkId:n,assets:{imageId:es[e.id],imageUrl:t?.[e.id]},rpcUrls:{...e.rpcUrls,default:{http:d},chainDefault:{http:u}}}},extendCaipNetworks:(e,{customNetworkImageUrls:t,projectId:o,customRpcUrls:i})=>e.map(e=>ed.extendCaipNetwork(e,{customNetworkImageUrls:t,customRpcUrls:i,projectId:o})),getViemTransport(e,t,o){let i=[];return o?.forEach(e=>{i.push(eo(e.url,e.config))}),ec.includes(e.caipNetworkId)&&i.push(eo(el(e.caipNetworkId,t),{fetchOptions:{headers:{"Content-Type":"text/plain"}}})),e?.rpcUrls?.default?.http?.forEach(e=>{i.push(eo(e))}),J(i)},extendWagmiTransports(e,t,o){return ec.includes(e.caipNetworkId)?J([o,eo(this.getDefaultRpcUrl(e,e.caipNetworkId,t))]):o},getUnsupportedNetwork:e=>({id:e.split(":")[1],caipNetworkId:e,name:ei.ConstantsUtil.UNSUPPORTED_NETWORK_NAME,chainNamespace:e.split(":")[0],nativeCurrency:{name:"",decimals:0,symbol:""},rpcUrls:{default:{http:[]}}}),getCaipNetworkFromStorage(e){let t=en.StorageUtil.getActiveCaipNetworkId(),o=er.ChainController.getAllRequestedCaipNetworks(),i=Array.from(er.ChainController.state.chains?.keys()||[]),r=t?.split(":")[0],n=!!r&&i.includes(r),a=o?.find(e=>e.caipNetworkId===t);return n&&!a&&t?this.getUnsupportedNetwork(t):a||e||o?.[0]}};e.s(["CaipNetworksUtil",0,ed],334523)},237287,972801,885873,619295,269311,359072,979890,674950,107337,210149,903134,212605,391641,28218,121121,181557,217283,904356,e=>{"use strict";e.i(812207);var t=e.i(604148),o=e.i(654479);e.i(374576);var i=e.i(120119),r=e.i(56350);e.i(234051);var n=e.i(829389),a=e.i(241845),s=e.i(436220),l=e.i(960398),c=e.i(227302),d=e.i(803468),u=e.i(82283);e.i(404041);var p=e.i(645975),h=t;e.i(852634),e.i(864380),e.i(383227),e.i(839009),e.i(73944);var m=e.i(459088),w=e.i(112699);e.i(221803);var f=e.i(162611);let g=f.css`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e["20"]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[16]};
    height: 32px;
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-flex.network-image-container wui-icon {
      background: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[16]};
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`;var b=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let C=class extends h.LitElement{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return o.html`
      <button
        ?disabled=${this.disabled}
        class=${(0,n.ifDefined)(this.balance?void 0:"local-no-balance")}
        data-error=${(0,n.ifDefined)(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `}imageTemplate(){let e=this.networkSrc?o.html`<wui-image src=${this.networkSrc}></wui-image>`:o.html` <wui-icon size="inherit" color="inherit" name="networkPlaceholder"></wui-icon> `;return o.html`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${e}</wui-flex>
    </wui-flex>`}addressTemplate(){return o.html`<wui-text variant="md-regular" color="inherit">
      ${this.address?w.UiHelperUtil.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
    </wui-text>`}balanceTemplate(){if(this.balance){let e=this.loading?o.html`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`:o.html`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;return o.html`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${e}</wui-flex
      >`}return null}};C.styles=[m.resetStyles,m.elementStyles,g],b([(0,i.property)()],C.prototype,"networkSrc",void 0),b([(0,i.property)()],C.prototype,"avatarSrc",void 0),b([(0,i.property)()],C.prototype,"balance",void 0),b([(0,i.property)({type:Boolean})],C.prototype,"isUnsupportedChain",void 0),b([(0,i.property)({type:Boolean})],C.prototype,"disabled",void 0),b([(0,i.property)({type:Boolean})],C.prototype,"loading",void 0),b([(0,i.property)()],C.prototype,"address",void 0),b([(0,i.property)()],C.prototype,"profileName",void 0),b([(0,i.property)()],C.prototype,"charsStart",void 0),b([(0,i.property)()],C.prototype,"charsEnd",void 0),C=b([(0,p.customElement)("wui-account-button")],C);var y=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};class v extends t.LitElement{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=!!u.OptionsController.state.allowUnsupportedChain||!l.ChainController.state.activeChain||l.ChainController.checkIfSupportedNetwork(l.ChainController.state.activeChain)}connectedCallback(){super.connectedCallback(),this.setAccountData(l.ChainController.getAccountData(this.namespace)),this.setNetworkData(l.ChainController.getNetworkData(this.namespace))}firstUpdated(){let e=this.namespace;e?this.unsubscribe.push(l.ChainController.subscribeChainProp("accountState",e=>{this.setAccountData(e)},e),l.ChainController.subscribeChainProp("networkState",t=>{this.setNetworkData(t),this.isSupported=l.ChainController.checkIfSupportedNetwork(e,t?.caipNetwork?.caipNetworkId)},e)):this.unsubscribe.push(a.AssetController.subscribeNetworkImages(()=>{this.networkImage=s.AssetUtil.getNetworkImage(this.network)}),l.ChainController.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),l.ChainController.subscribeChainProp("accountState",e=>{this.setAccountData(e)}),l.ChainController.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=s.AssetUtil.getNetworkImage(e),this.isSupported=!e?.chainNamespace||l.ChainController.checkIfSupportedNetwork(e?.chainNamespace),this.fetchNetworkImage(e)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!l.ChainController.state.activeChain)return null;let e="show"===this.balance,t="string"!=typeof this.balanceVal,{formattedText:i}=c.CoreHelperUtil.parseBalance(this.balanceVal,this.balanceSymbol);return o.html`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${!u.OptionsController.state.allowUnsupportedChain&&!this.isSupported}
        address=${(0,n.ifDefined)(c.CoreHelperUtil.getPlainAddress(this.caipAddress))}
        profileName=${(0,n.ifDefined)(this.profileName)}
        networkSrc=${(0,n.ifDefined)(this.networkImage)}
        avatarSrc=${(0,n.ifDefined)(this.profileImage)}
        balance=${e?i:""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||u.OptionsController.state.allowUnsupportedChain?d.ModalController.open({namespace:this.namespace}):d.ModalController.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await s.AssetUtil.fetchNetworkImage(e?.assets?.imageId))}setAccountData(e){e&&(this.caipAddress=e.caipAddress,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol,this.profileName=e.profileName,this.profileImage=e.profileImage)}setNetworkData(e){e&&(this.network=e.caipNetwork,this.networkImage=s.AssetUtil.getNetworkImage(e.caipNetwork))}}y([(0,i.property)({type:Boolean})],v.prototype,"disabled",void 0),y([(0,i.property)()],v.prototype,"balance",void 0),y([(0,i.property)()],v.prototype,"charsStart",void 0),y([(0,i.property)()],v.prototype,"charsEnd",void 0),y([(0,i.property)()],v.prototype,"namespace",void 0),y([(0,r.state)()],v.prototype,"caipAddress",void 0),y([(0,r.state)()],v.prototype,"balanceVal",void 0),y([(0,r.state)()],v.prototype,"balanceSymbol",void 0),y([(0,r.state)()],v.prototype,"profileName",void 0),y([(0,r.state)()],v.prototype,"profileImage",void 0),y([(0,r.state)()],v.prototype,"network",void 0),y([(0,r.state)()],v.prototype,"networkImage",void 0),y([(0,r.state)()],v.prototype,"isSupported",void 0);let x=class extends v{};x=y([(0,p.customElement)("w3m-account-button")],x);let $=class extends v{};$=y([(0,p.customElement)("appkit-account-button")],$),e.s(["AppKitAccountButton",()=>$,"W3mAccountButton",()=>x],237287);var k=t,E=e.i(592057);let S=E.css`
  :host {
    display: block;
    width: max-content;
  }
`;var R=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};class A extends k.LitElement{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){this.caipAddress=this.namespace?l.ChainController.getAccountData(this.namespace)?.caipAddress:l.ChainController.state.activeCaipAddress,this.namespace?this.unsubscribe.push(l.ChainController.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},this.namespace)):this.unsubscribe.push(l.ChainController.subscribeKey("activeCaipAddress",e=>this.caipAddress=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?o.html`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${(0,n.ifDefined)(this.balance)}
            .charsStart=${(0,n.ifDefined)(this.charsStart)}
            .charsEnd=${(0,n.ifDefined)(this.charsEnd)}
            namespace=${(0,n.ifDefined)(this.namespace)}
          >
          </appkit-account-button>
        `:o.html`
          <appkit-connect-button
            size=${(0,n.ifDefined)(this.size)}
            label=${(0,n.ifDefined)(this.label)}
            loadingLabel=${(0,n.ifDefined)(this.loadingLabel)}
            namespace=${(0,n.ifDefined)(this.namespace)}
          ></appkit-connect-button>
        `}}A.styles=S,R([(0,i.property)({type:Boolean})],A.prototype,"disabled",void 0),R([(0,i.property)()],A.prototype,"balance",void 0),R([(0,i.property)()],A.prototype,"size",void 0),R([(0,i.property)()],A.prototype,"label",void 0),R([(0,i.property)()],A.prototype,"loadingLabel",void 0),R([(0,i.property)()],A.prototype,"charsStart",void 0),R([(0,i.property)()],A.prototype,"charsEnd",void 0),R([(0,i.property)()],A.prototype,"namespace",void 0),R([(0,r.state)()],A.prototype,"caipAddress",void 0);let O=class extends A{};O=R([(0,p.customElement)("w3m-button")],O);let T=class extends A{};T=R([(0,p.customElement)("appkit-button")],T),e.s(["AppKitButton",()=>T,"W3mButton",()=>O],972801);var N=t,I=t;let U=f.css`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='sm'] {
    padding: ${({spacing:e})=>e[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:e})=>e[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]};
  }

  button[data-variant='primary'] {
    background: ${({tokens:e})=>e.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[20]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[16]};
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[5]};
  }
`;var P=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let D=class extends I.LitElement{constructor(){super(...arguments),this.size="md",this.variant="primary",this.loading=!1,this.text="Connect Wallet"}render(){return o.html`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `}contentTemplate(){let e={primary:"invert",secondary:"accent-primary"};return this.loading?o.html`<wui-loading-spinner
      color=${e[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`:o.html` <wui-text variant=${({lg:"lg-regular",md:"md-regular",sm:"sm-regular"})[this.size]} color=${e[this.variant]}>
        ${this.text}
      </wui-text>`}};D.styles=[m.resetStyles,m.elementStyles,U],P([(0,i.property)()],D.prototype,"size",void 0),P([(0,i.property)()],D.prototype,"variant",void 0),P([(0,i.property)({type:Boolean})],D.prototype,"loading",void 0),P([(0,i.property)()],D.prototype,"text",void 0),D=P([(0,p.customElement)("wui-connect-button")],D);var j=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};class L extends N.LitElement{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=d.ModalController.state.open,this.loading=this.namespace?d.ModalController.state.loadingNamespaceMap.get(this.namespace):d.ModalController.state.loading,this.unsubscribe.push(d.ModalController.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.html`
      <wui-connect-button
        size=${(0,n.ifDefined)(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?d.ModalController.close():this.loading||d.ModalController.open({view:"Connect",namespace:this.namespace})}}j([(0,i.property)()],L.prototype,"size",void 0),j([(0,i.property)()],L.prototype,"label",void 0),j([(0,i.property)()],L.prototype,"loadingLabel",void 0),j([(0,i.property)()],L.prototype,"namespace",void 0),j([(0,r.state)()],L.prototype,"open",void 0),j([(0,r.state)()],L.prototype,"loading",void 0);let W=class extends L{};W=j([(0,p.customElement)("w3m-connect-button")],W);let _=class extends L{};_=j([(0,p.customElement)("appkit-connect-button")],_),e.s(["AppKitConnectButton",()=>_,"W3mConnectButton",()=>W],885873);var z=t,M=e.i(653157),F=t;e.i(912190);let B=f.css`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[32]};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[1]} ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e[32]};
  }
`;var H=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let V=class extends F.LitElement{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.size="lg"}render(){return o.html`
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${({sm:"sm-regular",md:"md-regular",lg:"lg-regular"})[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?o.html` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `:this.imageSrc?o.html`<wui-image src=${this.imageSrc}></wui-image>`:o.html` <wui-icon size="xl" color="default" name="networkPlaceholder"></wui-icon> `}};V.styles=[m.resetStyles,m.elementStyles,B],H([(0,i.property)()],V.prototype,"imageSrc",void 0),H([(0,i.property)({type:Boolean})],V.prototype,"isUnsupportedChain",void 0),H([(0,i.property)({type:Boolean})],V.prototype,"disabled",void 0),H([(0,i.property)()],V.prototype,"size",void 0),V=H([(0,p.customElement)("wui-network-button")],V);let q=E.css`
  :host {
    display: block;
    width: max-content;
  }
`;var K=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};class G extends z.LitElement{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=l.ChainController.state.activeCaipNetwork,this.networkImage=s.AssetUtil.getNetworkImage(this.network),this.caipAddress=l.ChainController.state.activeCaipAddress,this.loading=d.ModalController.state.loading,this.isSupported=!!u.OptionsController.state.allowUnsupportedChain||!l.ChainController.state.activeChain||l.ChainController.checkIfSupportedNetwork(l.ChainController.state.activeChain),this.unsubscribe.push(a.AssetController.subscribeNetworkImages(()=>{this.networkImage=s.AssetUtil.getNetworkImage(this.network)}),l.ChainController.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),l.ChainController.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=s.AssetUtil.getNetworkImage(e),this.isSupported=!e?.chainNamespace||l.ChainController.checkIfSupportedNetwork(e.chainNamespace),s.AssetUtil.fetchNetworkImage(e?.assets?.imageId)}),d.ModalController.subscribeKey("loading",e=>this.loading=e))}firstUpdated(){s.AssetUtil.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=!this.network||l.ChainController.checkIfSupportedNetwork(this.network.chainNamespace);return o.html`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${!u.OptionsController.state.allowUnsupportedChain&&!e}
        imageSrc=${(0,n.ifDefined)(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||u.OptionsController.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(M.EventsController.sendEvent({type:"track",event:"CLICK_NETWORKS"}),d.ModalController.open({view:"Networks"}))}}G.styles=q,K([(0,i.property)({type:Boolean})],G.prototype,"disabled",void 0),K([(0,i.property)({type:String})],G.prototype,"label",void 0),K([(0,r.state)()],G.prototype,"network",void 0),K([(0,r.state)()],G.prototype,"networkImage",void 0),K([(0,r.state)()],G.prototype,"caipAddress",void 0),K([(0,r.state)()],G.prototype,"loading",void 0),K([(0,r.state)()],G.prototype,"isSupported",void 0);let Y=class extends G{};Y=K([(0,p.customElement)("w3m-network-button")],Y);let X=class extends G{};X=K([(0,p.customElement)("appkit-network-button")],X),e.s(["AppKitNetworkButton",()=>X,"W3mNetworkButton",()=>Y],619295);var J=t,Q=e.i(401564),Z=e.i(971080),ee=e.i(149454),et=e.i(360334),eo=e.i(221728),ei=e.i(811424);e.i(62238),e.i(907170),e.i(143053);var er=t;e.i(624947);let en=f.css`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({spacing:e})=>e[2]};
    color: ${({tokens:e})=>e.theme.textInvert};
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
    align-items: center;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent020};
    }
  }
`;var ea=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let es=class extends er.LitElement{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return o.html`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="lg" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `}};es.styles=[m.resetStyles,m.elementStyles,en],ea([(0,i.property)()],es.prototype,"label",void 0),ea([(0,i.property)()],es.prototype,"description",void 0),ea([(0,i.property)()],es.prototype,"icon",void 0),es=ea([(0,p.customElement)("wui-notice-card")],es),e.i(249536);var el=t,ec=e.i(758331),ed=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let eu=class extends el.LitElement{constructor(){super(),this.unsubscribe=[],this.socialProvider=ec.StorageUtil.getConnectedSocialProvider(),this.socialUsername=ec.StorageUtil.getConnectedSocialUsername(),this.namespace=l.ChainController.state.activeChain,this.unsubscribe.push(l.ChainController.subscribeKey("activeChain",e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=ee.ConnectorController.getConnectorId(this.namespace),t=ee.ConnectorController.getAuthConnector();if(!t||e!==Q.ConstantsUtil.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;let i=t.provider.getEmail()??"";return i||this.socialUsername?o.html`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider??"mail"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(i,this.socialProvider)}}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(i)}</wui-text>
      </wui-list-item>
    `:(this.style.cssText="display: none",null)}onGoToUpdateEmail(e,t){t||eo.RouterController.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};ed([(0,r.state)()],eu.prototype,"namespace",void 0),eu=ed([(0,p.customElement)("w3m-account-auth-button")],eu);var ep=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let eh=class extends J.LitElement{constructor(){super(),this.usubscribe=[],this.networkImages=a.AssetController.state.networkImages,this.address=l.ChainController.getAccountData()?.address,this.profileImage=l.ChainController.getAccountData()?.profileImage,this.profileName=l.ChainController.getAccountData()?.profileName,this.network=l.ChainController.state.activeCaipNetwork,this.disconnecting=!1,this.remoteFeatures=u.OptionsController.state.remoteFeatures,this.usubscribe.push(l.ChainController.subscribeChainProp("accountState",e=>{e&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName)}),l.ChainController.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}),u.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-settings-view: No account provided");let e=this.networkImages[this.network?.assets?.imageId??""];return o.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["0","5","3","5"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,n.ifDefined)(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${w.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${(0,n.ifDefined)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.smartAccountSettingsTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){let e=this.network?.chainNamespace,t=ee.ConnectorController.getConnectorId(e),i=ee.ConnectorController.getAuthConnector();return l.ChainController.checkIfNamesSupported()&&i&&t===Q.ConstantsUtil.CONNECTOR_ID.AUTH&&!this.profileName?o.html`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){let e=ee.ConnectorController.getConnectorId(this.network?.chainNamespace),t=ee.ConnectorController.getAuthConnector(),{origin:i}=location;return!t||e!==Q.ConstantsUtil.CONNECTOR_ID.AUTH||i.includes(et.ConstantsUtil.SECURE_SITE)?null:o.html`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){let e=l.ChainController.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,o=e?.find(({id:e})=>e===this.network?.id);return t||!o}onCopyAddress(){try{this.address&&(c.CoreHelperUtil.copyToClopboard(this.address),ei.SnackController.showSuccess("Address copied"))}catch{ei.SnackController.showError("Failed to copy")}}smartAccountSettingsTemplate(){let e=this.network?.chainNamespace,t=l.ChainController.checkIfSmartAccountEnabled(),i=ee.ConnectorController.getConnectorId(e);return ee.ConnectorController.getAuthConnector()&&i===Q.ConstantsUtil.CONNECTOR_ID.AUTH&&t?o.html`
      <wui-list-item
        icon="user"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onSmartAccountSettings.bind(this)}
        data-testid="account-smart-account-settings-button"
      >
        <wui-text variant="lg-regular" color="primary">Smart Account Settings</wui-text>
      </wui-list-item>
    `:null}onChooseName(){eo.RouterController.push("ChooseAccountName")}onNetworks(){this.isAllowedNetworkSwitch()&&eo.RouterController.push("Networks")}async onDisconnect(){try{this.disconnecting=!0;let e=this.network?.chainNamespace,t=Z.ConnectionController.getConnections(e).length>0,o=e&&ee.ConnectorController.state.activeConnectorIds[e],i=this.remoteFeatures?.multiWallet;await Z.ConnectionController.disconnect(i?{id:o,namespace:e}:{}),t&&i&&(eo.RouterController.push("ProfileWallets"),ei.SnackController.showSuccess("Wallet deleted"))}catch{M.EventsController.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),ei.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){M.EventsController.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),eo.RouterController.push("UpgradeEmailWallet")}onSmartAccountSettings(){eo.RouterController.push("SmartAccountSettings")}};ep([(0,r.state)()],eh.prototype,"address",void 0),ep([(0,r.state)()],eh.prototype,"profileImage",void 0),ep([(0,r.state)()],eh.prototype,"profileName",void 0),ep([(0,r.state)()],eh.prototype,"network",void 0),ep([(0,r.state)()],eh.prototype,"disconnecting",void 0),ep([(0,r.state)()],eh.prototype,"remoteFeatures",void 0),eh=ep([(0,p.customElement)("w3m-account-settings-view")],eh),e.s(["W3mAccountSettingsView",()=>eh],269311);var em=t,ew=t,ef=e.i(849694),eg=e.i(564126);e.i(534420),e.i(443452);var eb=t,eC=t;let ey=f.css`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var ev=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let ex={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},e$={lg:"md",md:"sm",sm:"sm"},ek=class extends eC.LitElement{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return o.html`
      <button data-active=${this.active}>
        ${this.icon?o.html`<wui-icon size=${e$[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${ex[this.size]}> ${this.label} </wui-text>
      </button>
    `}};ek.styles=[m.resetStyles,m.elementStyles,ey],ev([(0,i.property)()],ek.prototype,"icon",void 0),ev([(0,i.property)()],ek.prototype,"size",void 0),ev([(0,i.property)()],ek.prototype,"label",void 0),ev([(0,i.property)({type:Boolean})],ek.prototype,"active",void 0),ek=ev([(0,p.customElement)("wui-tab-item")],ek);let eE=f.css`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var eS=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let eR=class extends eb.LitElement{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,t)=>{let i=t===this.activeTab;return o.html`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${i}
          data-active=${i}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};eR.styles=[m.resetStyles,m.elementStyles,eE],eS([(0,i.property)({type:Array})],eR.prototype,"tabs",void 0),eS([(0,i.property)()],eR.prototype,"onTabChange",void 0),eS([(0,i.property)()],eR.prototype,"size",void 0),eS([(0,r.state)()],eR.prototype,"activeTab",void 0),eR=eS([(0,p.customElement)("wui-tabs")],eR),e.s([],359072),e.i(988016),e.i(604415);var eA=e.i(979484);let eO=f.css`
  wui-icon-link {
    margin-right: calc(${({spacing:e})=>e["8"]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({spacing:e})=>e["1"]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .balance-container {
    display: inline;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .symbol {
    transform: translateY(-2px);
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e["3"]};
    height: 48px;
    padding: ${({spacing:e})=>e["2"]};
    padding-right: ${({spacing:e})=>e["3"]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  .account-button:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({spacing:e})=>e["2"]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({durations:e})=>e.md}
        ${({easings:e})=>e["ease-out-power-1"]},
      opacity ${({durations:e})=>e.md} ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var eT=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let eN=class extends ew.LitElement{constructor(){super(),this.unsubscribe=[],this.caipAddress=l.ChainController.getAccountData()?.caipAddress,this.address=c.CoreHelperUtil.getPlainAddress(l.ChainController.getAccountData()?.caipAddress),this.profileImage=l.ChainController.getAccountData()?.profileImage,this.profileName=l.ChainController.getAccountData()?.profileName,this.disconnecting=!1,this.balance=l.ChainController.getAccountData()?.balance,this.balanceSymbol=l.ChainController.getAccountData()?.balanceSymbol,this.features=u.OptionsController.state.features,this.remoteFeatures=u.OptionsController.state.remoteFeatures,this.namespace=l.ChainController.state.activeChain,this.activeConnectorIds=ee.ConnectorController.state.activeConnectorIds,this.unsubscribe.push(l.ChainController.subscribeChainProp("accountState",e=>{this.address=c.CoreHelperUtil.getPlainAddress(e?.caipAddress),this.caipAddress=e?.caipAddress,this.balance=e?.balance,this.balanceSymbol=e?.balanceSymbol,this.profileName=e?.profileName,this.profileImage=e?.profileImage}),u.OptionsController.subscribeKey("features",e=>this.features=e),u.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),ee.ConnectorController.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),l.ChainController.subscribeKey("activeChain",e=>this.namespace=e),l.ChainController.subscribeKey("activeCaipNetwork",e=>{e?.chainNamespace&&(this.namespace=e?.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress||!this.namespace)return null;let e=this.activeConnectorIds[this.namespace],t=e?ee.ConnectorController.getConnectorById(e):void 0,i=s.AssetUtil.getConnectorImage(t),{value:r,decimals:a,symbol:l}=c.CoreHelperUtil.parseBalance(this.balance,this.balanceSymbol);return o.html`<wui-flex
        flexDirection="column"
        .padding=${["0","5","4","5"]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${(0,n.ifDefined)(this.caipAddress)}
          address=${(0,n.ifDefined)(c.CoreHelperUtil.getPlainAddress(this.caipAddress))}
          imageSrc=${(0,n.ifDefined)(null===this.profileImage?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${i}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <div class="balance-container">
          <wui-text variant="h3-regular" color="primary">${r}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${a}</wui-text>
          <wui-text variant="h6-medium" color="primary" class="symbol">${l}</wui-text>
        </div>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${["0","3","3","3"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;let e=et.ConstantsUtil.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),t=!!this.features?.receive,i=this.remoteFeatures?.onramp&&e,r=ef.ExchangeController.isPayWithExchangeEnabled();return i||t||r?o.html`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `:null}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||et.ConstantsUtil.DEFAULT_FEATURES.walletFeaturesOrder).map(e=>{switch(e){case"onramp":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){return this.namespace&&this.remoteFeatures?.activity&&et.ConstantsUtil.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?o.html` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){let e=this.remoteFeatures?.swaps,t=l.ChainController.state.activeChain===Q.ConstantsUtil.CHAIN.EVM;return e&&t?o.html`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){let e=this.features?.send,t=l.ChainController.state.activeChain;if(!t)throw Error("SendController:sendTemplate - namespace is required");let i=et.ConstantsUtil.SEND_SUPPORTED_NAMESPACES.includes(t);return e&&i?o.html`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){let e=l.ChainController.state.activeChain;if(!e)throw Error("AuthCardTemplate:authCardTemplate - namespace is required");let t=ee.ConnectorController.getConnectorId(e),i=ee.ConnectorController.getAuthConnector(),{origin:r}=location;return!i||t!==Q.ConstantsUtil.CONNECTOR_ID.AUTH||r.includes(et.ConstantsUtil.SECURE_SITE)?null:o.html`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){eo.RouterController.push("FundWallet")}handleClickSwap(){eo.RouterController.push("Swap")}handleClickSend(){eo.RouterController.push("WalletSend")}explorerBtnTemplate(){return l.ChainController.getAccountData()?.addressExplorerUrl?o.html`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){M.EventsController.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:(0,eg.getPreferredAccountType)(l.ChainController.state.activeChain)===eA.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),eo.RouterController.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0;let e=Z.ConnectionController.getConnections(this.namespace).length>0,t=this.namespace&&ee.ConnectorController.state.activeConnectorIds[this.namespace],o=this.remoteFeatures?.multiWallet;await Z.ConnectionController.disconnect(o?{id:t,namespace:this.namespace}:{}),e&&o&&(eo.RouterController.push("ProfileWallets"),ei.SnackController.showSuccess("Wallet deleted"))}catch{M.EventsController.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),ei.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){let e=l.ChainController.getAccountData()?.addressExplorerUrl;e&&c.CoreHelperUtil.openHref(e,"_blank")}onGoToUpgradeView(){M.EventsController.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),eo.RouterController.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){eo.RouterController.push("ProfileWallets")}};eN.styles=eO,eT([(0,r.state)()],eN.prototype,"caipAddress",void 0),eT([(0,r.state)()],eN.prototype,"address",void 0),eT([(0,r.state)()],eN.prototype,"profileImage",void 0),eT([(0,r.state)()],eN.prototype,"profileName",void 0),eT([(0,r.state)()],eN.prototype,"disconnecting",void 0),eT([(0,r.state)()],eN.prototype,"balance",void 0),eT([(0,r.state)()],eN.prototype,"balanceSymbol",void 0),eT([(0,r.state)()],eN.prototype,"features",void 0),eT([(0,r.state)()],eN.prototype,"remoteFeatures",void 0),eT([(0,r.state)()],eN.prototype,"namespace",void 0),eT([(0,r.state)()],eN.prototype,"activeConnectorIds",void 0),eN=eT([(0,p.customElement)("w3m-account-default-widget")],eN);var eI=t,eU=e.i(770850),eP=t;let eD=f.css`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({tokens:e})=>e.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }
`;var ej=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let eL=class extends eP.LitElement{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return o.html`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};eL.styles=[m.resetStyles,eD],ej([(0,i.property)()],eL.prototype,"dollars",void 0),ej([(0,i.property)()],eL.prototype,"pennies",void 0),eL=ej([(0,p.customElement)("wui-balance")],eL);var eW=t;let e_=f.css`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({colors:e})=>e.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({colors:e})=>e.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({colors:e})=>e.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) {
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var ez=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let eM={sm:"sm-regular",md:"md-regular"},eF=class extends eW.LitElement{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.size="md",this.message=""}render(){return this.dataset.variant=this.variant,this.dataset.size=this.size,o.html`<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${eM[this.size]}>${this.message}</wui-text>`}};eF.styles=[m.resetStyles,m.elementStyles,e_],ez([(0,i.property)()],eF.prototype,"placement",void 0),ez([(0,i.property)()],eF.prototype,"variant",void 0),ez([(0,i.property)()],eF.prototype,"size",void 0),ez([(0,i.property)()],eF.prototype,"message",void 0),eF=ez([(0,p.customElement)("wui-tooltip")],eF);var eB=e.i(305840),eH=t;e.i(389676);let eV=E.css`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`,eq=class extends eH.LitElement{render(){return o.html`<w3m-activity-list page="account"></w3m-activity-list>`}};eq.styles=eV,eq=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a}([(0,p.customElement)("w3m-account-activity-widget")],eq);var eK=t,eG=t;e.i(630352);let eY=f.css`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var eX=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let eJ=class extends eG.LitElement{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.disabled=!1}render(){return o.html`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description?o.html`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`:null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag?o.html`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`:null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `}};eJ.styles=[m.resetStyles,m.elementStyles,eY],eX([(0,i.property)()],eJ.prototype,"icon",void 0),eX([(0,i.property)()],eJ.prototype,"text",void 0),eX([(0,i.property)()],eJ.prototype,"description",void 0),eX([(0,i.property)()],eJ.prototype,"tag",void 0),eX([(0,i.property)({type:Boolean})],eJ.prototype,"disabled",void 0),eJ=eX([(0,p.customElement)("wui-list-description")],eJ),e.i(923838);let eQ=E.css`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var eZ=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let e0=class extends eK.LitElement{constructor(){super(),this.unsubscribe=[],this.tokenBalance=l.ChainController.getAccountData()?.tokenBalance,this.remoteFeatures=u.OptionsController.state.remoteFeatures,this.unsubscribe.push(l.ChainController.subscribeChainProp("accountState",e=>{this.tokenBalance=e?.tokenBalance}),u.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.html`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?o.html`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`:o.html` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){return this.remoteFeatures?.onramp?o.html`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:o.html``}tokenItemTemplate(){return this.tokenBalance?.map(e=>o.html`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){eo.RouterController.push("WalletReceive")}onBuyClick(){M.EventsController.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:(0,eg.getPreferredAccountType)(l.ChainController.state.activeChain)===eA.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),eo.RouterController.push("OnRampProviders")}};e0.styles=eQ,eZ([(0,r.state)()],e0.prototype,"tokenBalance",void 0),eZ([(0,r.state)()],e0.prototype,"remoteFeatures",void 0),e0=eZ([(0,p.customElement)("w3m-account-tokens-widget")],e0),e.i(741611),e.i(748449);let e3=f.css`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({spacing:e})=>e["4"]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({spacing:e})=>e["4"]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e["3"]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var e1=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let e2=class extends eI.LitElement{constructor(){super(...arguments),this.unsubscribe=[],this.network=l.ChainController.state.activeCaipNetwork,this.profileName=l.ChainController.getAccountData()?.profileName,this.address=l.ChainController.getAccountData()?.address,this.currentTab=l.ChainController.getAccountData()?.currentTab,this.tokenBalance=l.ChainController.getAccountData()?.tokenBalance,this.features=u.OptionsController.state.features,this.namespace=l.ChainController.state.activeChain,this.activeConnectorIds=ee.ConnectorController.state.activeConnectorIds,this.remoteFeatures=u.OptionsController.state.remoteFeatures}firstUpdated(){l.ChainController.fetchTokenBalance(),this.unsubscribe.push(l.ChainController.subscribeChainProp("accountState",e=>{e?.address?(this.address=e.address,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):d.ModalController.close()}),ee.ConnectorController.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),l.ChainController.subscribeKey("activeChain",e=>this.namespace=e),l.ChainController.subscribeKey("activeCaipNetwork",e=>this.network=e),u.OptionsController.subscribeKey("features",e=>this.features=e),u.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}render(){if(!this.address)throw Error("w3m-account-features-widget: No account provided");if(!this.namespace)return null;let e=this.activeConnectorIds[this.namespace],t=e?ee.ConnectorController.getConnectorById(e):void 0,{icon:i,iconSize:r}=this.getAuthData();return o.html`<wui-flex
      flexDirection="column"
      .padding=${["0","3","4","3"]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${i}
          iconSize=${r}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){let e=this.features?.walletFeaturesOrder||et.ConstantsUtil.DEFAULT_FEATURES.walletFeaturesOrder;if(e.every(e=>"send"===e||"receive"===e?!this.features?.[e]:"swaps"!==e&&"onramp"!==e||!this.remoteFeatures?.[e]))return null;let t=[...new Set(e.map(e=>"receive"===e||"onramp"===e?"fund":e))];return o.html`<wui-flex gap="2">
      ${t.map(e=>{switch(e){case"fund":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;let e=et.ConstantsUtil.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),t=this.features?.receive,i=this.remoteFeatures?.onramp&&e,r=ef.ExchangeController.isPayWithExchangeEnabled();return i||t||r?o.html`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){let e=this.remoteFeatures?.swaps,t=l.ChainController.state.activeChain===Q.ConstantsUtil.CHAIN.EVM;return e&&t?o.html`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){let e=this.features?.send,t=l.ChainController.state.activeChain,i=et.ConstantsUtil.SEND_SUPPORTED_NAMESPACES.includes(t);return e&&i?o.html`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval(()=>l.ChainController.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===Q.ConstantsUtil.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return 0===this.currentTab?o.html`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?o.html`<w3m-account-activity-widget></w3m-account-activity-widget>`:o.html`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){let e=c.CoreHelperUtil.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:i="00"}=c.CoreHelperUtil.formatTokenBalance(e);return o.html`<wui-balance dollars=${t} pennies=${i}></wui-balance>`}return o.html`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){let e=eB.HelpersUtil.getTabsByNamespace(l.ChainController.state.activeChain);return 0===e.length?null:o.html`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){l.ChainController.setAccountProp("currentTab",e,this.namespace)}onFundWalletClick(){eo.RouterController.push("FundWallet")}onSwapClick(){this.network?.caipNetworkId&&!et.ConstantsUtil.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?eo.RouterController.push("UnsupportedChain",{swapUnsupportedChain:!0}):(M.EventsController.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:(0,eg.getPreferredAccountType)(l.ChainController.state.activeChain)===eA.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),eo.RouterController.push("Swap"))}getAuthData(){let e=ec.StorageUtil.getConnectedSocialProvider(),t=ec.StorageUtil.getConnectedSocialUsername(),o=ee.ConnectorController.getAuthConnector(),i=o?.provider.getEmail()??"";return{name:eU.ConnectorUtil.getAuthName({email:i,socialUsername:t,socialProvider:e}),icon:e??"mail",iconSize:e?"xl":"md"}}onGoToProfileWalletsView(){eo.RouterController.push("ProfileWallets")}onSendClick(){M.EventsController.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:(0,eg.getPreferredAccountType)(l.ChainController.state.activeChain)===eA.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),eo.RouterController.push("WalletSend")}};e2.styles=e3,e1([(0,r.state)()],e2.prototype,"watchTokenBalance",void 0),e1([(0,r.state)()],e2.prototype,"network",void 0),e1([(0,r.state)()],e2.prototype,"profileName",void 0),e1([(0,r.state)()],e2.prototype,"address",void 0),e1([(0,r.state)()],e2.prototype,"currentTab",void 0),e1([(0,r.state)()],e2.prototype,"tokenBalance",void 0),e1([(0,r.state)()],e2.prototype,"features",void 0),e1([(0,r.state)()],e2.prototype,"namespace",void 0),e1([(0,r.state)()],e2.prototype,"activeConnectorIds",void 0),e1([(0,r.state)()],e2.prototype,"remoteFeatures",void 0),e2=e1([(0,p.customElement)("w3m-account-wallet-features-widget")],e2);var e5=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let e4=class extends em.LitElement{constructor(){super(),this.unsubscribe=[],this.namespace=l.ChainController.state.activeChain,this.unsubscribe.push(l.ChainController.subscribeKey("activeChain",e=>{this.namespace=e}))}render(){if(!this.namespace)return null;let e=ee.ConnectorController.getConnectorId(this.namespace),t=ee.ConnectorController.getAuthConnector();return o.html`
      ${t&&e===Q.ConstantsUtil.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return o.html`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return o.html`<w3m-account-default-widget></w3m-account-default-widget>`}};e5([(0,r.state)()],e4.prototype,"namespace",void 0),e4=e5([(0,p.customElement)("w3m-account-view")],e4),e.s(["W3mAccountView",()=>e4],979890);var e6=t;e.i(653976);var e8=e.i(293090),e9=e.i(150576),e7=e.i(210087),te=e.i(608601),tt=t;e.i(695553),e.i(720226);let to=f.css`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var ti=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let tr=class extends tt.LitElement{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral-primary",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return o.html`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return o.html`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?o.html`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return o.html` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?o.html`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?o.html`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:o.html`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return 0===this.content.length?null:o.html`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map(e=>this.labelAndTagTemplate(e))}
      </wui-flex>
    `}labelAndTagTemplate({address:e,profileName:t,label:i,description:r,enableButton:n,buttonType:a,buttonLabel:s,buttonVariant:l,tagVariant:c,tagLabel:d,alignItems:u="flex-end"}){return o.html`
      <wui-flex justifyContent="space-between" alignItems=${u} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${i?o.html`<wui-text variant="sm-medium" color="secondary">${i}</wui-text>`:null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${w.UiHelperUtil.getTruncateString({string:t||e,charsStart:t?16:this.charsStart,charsEnd:t?0:this.charsEnd,truncate:t?"end":"middle"})}
            </wui-text>

            ${c&&d?o.html`<wui-tag variant=${c} size="sm">${d}</wui-tag>`:null}
          </wui-flex>

          ${r?o.html`<wui-text variant="sm-regular" color="secondary">${r}</wui-text>`:null}
        </wui-flex>

        ${n?this.buttonTemplate({buttonType:a,buttonLabel:s,buttonVariant:l}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:e,buttonLabel:t,buttonVariant:i}){return o.html`
      <wui-button
        size="sm"
        variant=${i}
        @click=${"disconnect"===e?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${"disconnect"===e?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${t}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};tr.styles=[m.resetStyles,m.elementStyles,to],ti([(0,i.property)()],tr.prototype,"address",void 0),ti([(0,i.property)()],tr.prototype,"profileName",void 0),ti([(0,i.property)({type:Array})],tr.prototype,"content",void 0),ti([(0,i.property)()],tr.prototype,"alt",void 0),ti([(0,i.property)()],tr.prototype,"imageSrc",void 0),ti([(0,i.property)()],tr.prototype,"icon",void 0),ti([(0,i.property)()],tr.prototype,"iconSize",void 0),ti([(0,i.property)()],tr.prototype,"iconBadge",void 0),ti([(0,i.property)()],tr.prototype,"iconBadgeSize",void 0),ti([(0,i.property)()],tr.prototype,"buttonVariant",void 0),ti([(0,i.property)({type:Boolean})],tr.prototype,"enableMoreButton",void 0),ti([(0,i.property)({type:Number})],tr.prototype,"charsStart",void 0),ti([(0,i.property)({type:Number})],tr.prototype,"charsEnd",void 0),tr=ti([(0,p.customElement)("wui-active-profile-wallet-item")],tr),e.i(746650);var tn=t;let ta=f.css`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var ts=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let tl=class extends tn.LitElement{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent-primary",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="signOut",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return o.html`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?o.html`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?o.html`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:o.html`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return o.html`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${w.UiHelperUtil.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return o.html`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${(0,n.ifDefined)(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};tl.styles=[m.resetStyles,m.elementStyles,ta],ts([(0,i.property)()],tl.prototype,"address",void 0),ts([(0,i.property)()],tl.prototype,"profileName",void 0),ts([(0,i.property)()],tl.prototype,"alt",void 0),ts([(0,i.property)()],tl.prototype,"buttonLabel",void 0),ts([(0,i.property)()],tl.prototype,"buttonVariant",void 0),ts([(0,i.property)()],tl.prototype,"imageSrc",void 0),ts([(0,i.property)()],tl.prototype,"icon",void 0),ts([(0,i.property)()],tl.prototype,"iconSize",void 0),ts([(0,i.property)()],tl.prototype,"iconBadge",void 0),ts([(0,i.property)()],tl.prototype,"iconBadgeSize",void 0),ts([(0,i.property)()],tl.prototype,"rightIcon",void 0),ts([(0,i.property)()],tl.prototype,"rightIconSize",void 0),ts([(0,i.property)({type:Boolean})],tl.prototype,"loading",void 0),ts([(0,i.property)({type:Number})],tl.prototype,"charsStart",void 0),ts([(0,i.property)({type:Number})],tl.prototype,"charsEnd",void 0),tl=ts([(0,p.customElement)("wui-inactive-profile-wallet-item")],tl),e.i(79929);var tc=e.i(769718);let td={getAuthData(e){let t=e.connectorId===Q.ConstantsUtil.CONNECTOR_ID.AUTH;if(!t)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};let o=e?.auth?.name??ec.StorageUtil.getConnectedSocialProvider(),i=e?.auth?.username??ec.StorageUtil.getConnectedSocialUsername(),r=ee.ConnectorController.getAuthConnector(),n=r?.provider.getEmail()??"";return{isAuth:!0,icon:o??"mail",iconSize:o?"xl":"md",name:t?eU.ConnectorUtil.getAuthName({email:n,socialUsername:i,socialProvider:o}):void 0}}},tu=f.css`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e["4"]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({spacing:e})=>e["4"]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e["4"]};
  }

  wui-separator {
    margin: ${({spacing:e})=>e["2"]} 0 ${({spacing:e})=>e["2"]} 0;
  }

  .active-connection {
    padding: ${({spacing:e})=>e["2"]};
  }

  .recent-connection {
    padding: ${({spacing:e})=>e["2"]} 0 ${({spacing:e})=>e["2"]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;var tp=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let th=4,tm=6,tw="md",tf="lightbulb",tg=[0,1],tb={eip155:"ethereum",solana:"solana",bip122:"bitcoin",ton:"ton",tron:"tron"},tC=[{namespace:"eip155",icon:tb.eip155,label:"EVM"},{namespace:"solana",icon:tb.solana,label:"Solana"},{namespace:"bip122",icon:tb.bip122,label:"Bitcoin"},{namespace:"ton",icon:tb.ton,label:"Ton"},{namespace:"tron",icon:tb.tron,label:"Tron"}],ty={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"},ton:{title:"Add TON Wallet",description:"Add your first TON wallet"},tron:{title:"Add TRON Wallet",description:"Add your first TRON wallet"}},tv=class extends e6.LitElement{constructor(){super(),this.unsubscribers=[],this.currentTab=0,this.namespace=l.ChainController.state.activeChain,this.namespaces=Array.from(l.ChainController.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=ee.ConnectorController.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=l.ChainController.state.activeCaipNetwork,this.user=l.ChainController.getAccountData()?.user,this.remoteFeatures=u.OptionsController.state.remoteFeatures,this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=l.ChainController.getAccountData(this.namespace)?.caipAddress,this.profileName=l.ChainController.getAccountData(this.namespace)?.profileName,this.unsubscribers.push(Z.ConnectionController.subscribeKey("connections",()=>this.onConnectionsChange()),Z.ConnectionController.subscribeKey("recentConnections",()=>this.requestUpdate()),ee.ConnectorController.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),l.ChainController.subscribeKey("activeCaipNetwork",e=>this.caipNetwork=e),l.ChainController.subscribeChainProp("accountState",e=>{this.user=e?.user}),u.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.chainListener=l.ChainController.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName},this.namespace)}disconnectedCallback(){this.unsubscribers.forEach(e=>e()),this.resizeObserver?.disconnect(),this.removeScrollListener(),this.chainListener?.()}firstUpdated(){let e=this.shadowRoot?.querySelector(".wallet-list");if(!e)return;let t=()=>this.updateScrollOpacity(e);requestAnimationFrame(t),e.addEventListener("scroll",t),this.resizeObserver=new ResizeObserver(t),this.resizeObserver.observe(e),t()}render(){let e=this.namespace;if(!e)throw Error("Namespace is not set");return o.html`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(e)}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `}renderTabs(){let e=this.namespaces.map(e=>tC.find(t=>t.namespace===e)).filter(Boolean);return e.length>1?o.html`
        <wui-tabs
          .onTabChange=${e=>this.handleTabChange(e)}
          .activeTab=${this.currentTab}
          .tabs=${e}
        ></wui-tabs>
      `:null}renderHeader(e){let t=this.getActiveConnections(e).flatMap(({accounts:e})=>e).length+ +!!this.caipAddress;return o.html`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${tb[e]??tb.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${t>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${t}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>Z.ConnectionController.disconnect({namespace:e})}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(e){let t=this.hasAnyConnections(e);return o.html`
      <wui-flex flexDirection="column" class=${(0,e8.classMap)({"wallet-list":!0,"active-wallets-box":t,"empty-wallet-list-box":!t})} rowgap="3">
        ${t?this.renderActiveConnections(e):this.renderEmptyState(e)}
      </wui-flex>
    `}renderActiveConnections(e){let t=this.getActiveConnections(e),i=this.activeConnectorIds[e],r=this.getPlainAddress();return o.html`
      ${r||i||t.length>0?o.html`<wui-flex
            flexDirection="column"
            .padding=${["4","0","4","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(e)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(e)}
    `}renderActiveProfile(e){let t=this.activeConnectorIds[e];if(!t)return null;let{connections:i}=e7.ConnectionControllerUtil.getConnectionsData(e),r=ee.ConnectorController.getConnectorById(t),n=s.AssetUtil.getConnectorImage(r),a=this.getPlainAddress();if(!a)return null;let l=e===Q.ConstantsUtil.CHAIN.BITCOIN,c=td.getAuthData({connectorId:t,accounts:[]}),d=this.getActiveConnections(e).flatMap(e=>e.accounts).length>0,u=i.find(e=>e.connectorId===t),p=u?.accounts.filter(e=>!tc.HelpersUtil.isLowerCaseMatch(e.address,a));return o.html`
      <wui-flex flexDirection="column" .padding=${["0","4","0","4"]}>
        <wui-active-profile-wallet-item
          address=${a}
          alt=${r?.name}
          .content=${this.getProfileContent({address:a,connections:i,connectorId:t,namespace:e})}
          .charsStart=${th}
          .charsEnd=${tm}
          .icon=${c.icon}
          .iconSize=${c.iconSize}
          .iconBadge=${this.isSmartAccount(a)?tf:void 0}
          .iconBadgeSize=${this.isSmartAccount(a)?tw:void 0}
          imageSrc=${n}
          ?enableMoreButton=${c.isAuth}
          @copy=${()=>this.handleCopyAddress(a)}
          @disconnect=${()=>this.handleDisconnect(e,t)}
          @switch=${()=>{l&&u&&p?.[0]&&this.handleSwitchWallet(u,p[0].address,e)}}
          @externalLink=${()=>this.handleExternalLink(a)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${d?o.html`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(e){let t=this.getActiveConnections(e);return 0===t.length?null:o.html`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
        ${this.renderConnectionList(t,!1,e)}
      </wui-flex>
    `}renderRecentConnections(e){let{recentConnections:t}=e7.ConnectionControllerUtil.getConnectionsData(e);return 0===t.flatMap(e=>e.accounts).length?null:o.html`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
          ${this.renderConnectionList(t,!0,e)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(e,t,i){return e.filter(e=>e.accounts.length>0).map((e,r)=>{let n=ee.ConnectorController.getConnectorById(e.connectorId),a=s.AssetUtil.getConnectorImage(n)??"",l=td.getAuthData(e);return e.accounts.map((n,s)=>{let c=this.isAccountLoading(e.connectorId,n.address);return o.html`
            <wui-flex flexDirection="column">
              ${0!==r||0!==s?o.html`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${n.address}
                alt=${e.connectorId}
                buttonLabel=${t?"Connect":"Switch"}
                buttonVariant=${t?"neutral-secondary":"accent-secondary"}
                rightIcon=${t?"bin":"power"}
                rightIconSize="sm"
                class=${t?"recent-connection":"active-connection"}
                data-testid=${t?"recent-connection":"active-connection"}
                imageSrc=${a}
                .iconBadge=${this.isSmartAccount(n.address)?tf:void 0}
                .iconBadgeSize=${this.isSmartAccount(n.address)?tw:void 0}
                .icon=${l.icon}
                .iconSize=${l.iconSize}
                .loading=${c}
                .showBalance=${!1}
                .charsStart=${th}
                .charsEnd=${tm}
                @buttonClick=${()=>this.handleSwitchWallet(e,n.address,i)}
                @iconClick=${()=>this.handleWalletAction({connection:e,address:n.address,isRecentConnection:t,namespace:i})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(e){if(!this.isMultiWalletEnabled()&&this.caipAddress||!this.hasAnyConnections(e))return null;let{title:t}=this.getChainLabelInfo(e);return o.html`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${t}</wui-text>
      </wui-list-item>
    `}renderEmptyState(e){let{title:t,description:i}=this.getChainLabelInfo(e);return o.html`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${i}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(e)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${t}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(e){let t=this.namespaces[e];t&&(this.chainListener?.(),this.currentTab=this.namespaces.indexOf(t),this.namespace=t,this.caipAddress=l.ChainController.getAccountData(t)?.caipAddress,this.profileName=l.ChainController.getAccountData(t)?.profileName,this.chainListener=l.ChainController.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},t))}async handleSwitchWallet(e,t,o){try{this.isSwitching=!0,this.lastSelectedConnectorId=e.connectorId,this.lastSelectedAddress=t,this.caipNetwork?.chainNamespace!==o&&e?.caipNetwork&&(ee.ConnectorController.setFilterByNamespace(o),await l.ChainController.switchActiveNetwork(e?.caipNetwork)),await Z.ConnectionController.switchConnection({connection:e,address:t,namespace:o,closeModalOnConnect:!1,onChange({hasSwitchedAccount:e,hasSwitchedWallet:t}){t?ei.SnackController.showSuccess("Wallet switched"):e&&ei.SnackController.showSuccess("Account switched")}})}catch(e){ei.SnackController.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(e){let{connection:t,address:o,isRecentConnection:i,namespace:r}=e;i?(ec.StorageUtil.deleteAddressFromConnection({connectorId:t.connectorId,address:o,namespace:r}),Z.ConnectionController.syncStorageConnections(),ei.SnackController.showSuccess("Wallet deleted")):this.handleDisconnect(r,t.connectorId)}async handleDisconnect(e,t){try{await Z.ConnectionController.disconnect({id:t,namespace:e}),ei.SnackController.showSuccess("Wallet disconnected")}catch{ei.SnackController.showError("Failed to disconnect wallet")}}handleCopyAddress(e){c.CoreHelperUtil.copyToClopboard(e),ei.SnackController.showSuccess("Address copied")}handleMore(){eo.RouterController.push("AccountSettings")}handleExternalLink(e){let t=this.caipNetwork?.blockExplorers?.default.url;t&&c.CoreHelperUtil.openHref(`${t}/address/${e}`,"_blank")}handleAddConnection(e){ee.ConnectorController.setFilterByNamespace(e),eo.RouterController.push("Connect",{addWalletForNamespace:e})}getChainLabelInfo(e){return ty[e]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(e){if(!this.namespace)return!1;let t=this.user?.accounts?.find(e=>"smartAccount"===e.type);return!!t&&!!e&&tc.HelpersUtil.isLowerCaseMatch(t.address,e)}getPlainAddress(){return this.caipAddress?c.CoreHelperUtil.getPlainAddress(this.caipAddress):void 0}getActiveConnections(e){let t=this.activeConnectorIds[e],{connections:o}=e7.ConnectionControllerUtil.getConnectionsData(e),[i]=o.filter(e=>tc.HelpersUtil.isLowerCaseMatch(e.connectorId,t));if(!t)return o;let r=e===Q.ConstantsUtil.CHAIN.BITCOIN,{address:n}=this.caipAddress?e9.ParseUtil.parseCaipAddress(this.caipAddress):{},a=[...n?[n]:[]];return r&&i&&(a=i.accounts.map(e=>e.address)||[]),e7.ConnectionControllerUtil.excludeConnectorAddressFromConnections({connectorId:t,addresses:a,connections:o})}hasAnyConnections(e){let t=this.getActiveConnections(e),{recentConnections:o}=e7.ConnectionControllerUtil.getConnectionsData(e);return!!this.caipAddress||t.length>0||o.length>0}isAccountLoading(e,t){return tc.HelpersUtil.isLowerCaseMatch(this.lastSelectedConnectorId,e)&&tc.HelpersUtil.isLowerCaseMatch(this.lastSelectedAddress,t)&&this.isSwitching}getProfileContent(e){let{address:t,connections:o,connectorId:i,namespace:r}=e,[n]=o.filter(e=>tc.HelpersUtil.isLowerCaseMatch(e.connectorId,i));if(r===Q.ConstantsUtil.CHAIN.BITCOIN&&n?.accounts.every(e=>"string"==typeof e.type))return this.getBitcoinProfileContent(n.accounts,t);let a=td.getAuthData({connectorId:i,accounts:[]});return[{address:t,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary",...a.isAuth?{description:this.isSmartAccount(t)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(e,t){let o=e.length>1,i=this.getPlainAddress();return e.map(e=>{let r=tc.HelpersUtil.isLowerCaseMatch(e.address,i),n="PAYMENT";return"ordinal"===e.type&&(n="ORDINALS"),{address:e.address,tagLabel:tc.HelpersUtil.isLowerCaseMatch(e.address,t)?"Active":void 0,tagVariant:tc.HelpersUtil.isLowerCaseMatch(e.address,t)?"success":void 0,enableButton:!0,...o?{label:n,alignItems:"flex-end",buttonType:r?"disconnect":"switch",buttonLabel:r?"Disconnect":"Switch",buttonVariant:r?"neutral-secondary":"accent-secondary"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary"}}})}removeScrollListener(){let e=this.shadowRoot?.querySelector(".wallet-list");e&&e.removeEventListener("scroll",()=>this.handleConnectListScroll())}handleConnectListScroll(){let e=this.shadowRoot?.querySelector(".wallet-list");e&&this.updateScrollOpacity(e)}isMultiWalletEnabled(){return!!this.remoteFeatures?.multiWallet}updateScrollOpacity(e){e.style.setProperty("--connect-scroll--top-opacity",te.MathUtil.interpolate([0,50],tg,e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",te.MathUtil.interpolate([0,50],tg,e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){let{connections:e}=e7.ConnectionControllerUtil.getConnectionsData(this.namespace);0===e.length&&eo.RouterController.reset("ProfileWallets")}this.requestUpdate()}};tv.styles=tu,tp([(0,r.state)()],tv.prototype,"currentTab",void 0),tp([(0,r.state)()],tv.prototype,"namespace",void 0),tp([(0,r.state)()],tv.prototype,"namespaces",void 0),tp([(0,r.state)()],tv.prototype,"caipAddress",void 0),tp([(0,r.state)()],tv.prototype,"profileName",void 0),tp([(0,r.state)()],tv.prototype,"activeConnectorIds",void 0),tp([(0,r.state)()],tv.prototype,"lastSelectedAddress",void 0),tp([(0,r.state)()],tv.prototype,"lastSelectedConnectorId",void 0),tp([(0,r.state)()],tv.prototype,"isSwitching",void 0),tp([(0,r.state)()],tv.prototype,"caipNetwork",void 0),tp([(0,r.state)()],tv.prototype,"user",void 0),tp([(0,r.state)()],tv.prototype,"remoteFeatures",void 0),tv=tp([(0,p.customElement)("w3m-profile-wallets-view")],tv),e.s(["W3mProfileWalletsView",()=>tv],674950);var tx=t,t$=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let tk=class extends tx.LitElement{constructor(){super(),this.unsubscribe=[],this.activeCaipNetwork=l.ChainController.state.activeCaipNetwork,this.features=u.OptionsController.state.features,this.remoteFeatures=u.OptionsController.state.remoteFeatures,this.exchangesLoading=ef.ExchangeController.state.isLoading,this.exchanges=ef.ExchangeController.state.exchanges,this.unsubscribe.push(u.OptionsController.subscribeKey("features",e=>this.features=e),u.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),l.ChainController.subscribeKey("activeCaipNetwork",e=>{this.activeCaipNetwork=e,this.setDefaultPaymentAsset()}),ef.ExchangeController.subscribeKey("isLoading",e=>this.exchangesLoading=e),ef.ExchangeController.subscribeKey("exchanges",e=>this.exchanges=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}async firstUpdated(){ef.ExchangeController.isPayWithExchangeSupported()&&(await this.setDefaultPaymentAsset(),await ef.ExchangeController.fetchExchanges())}render(){return o.html`
      <wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="2">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `}async setDefaultPaymentAsset(){if(!this.activeCaipNetwork)return;let e=await ef.ExchangeController.getAssetsForNetwork(this.activeCaipNetwork.caipNetworkId),t=e.find(e=>"USDC"===e.metadata.symbol)||e[0];t&&ef.ExchangeController.setPaymentAsset(t)}onrampTemplate(){if(!this.activeCaipNetwork)return null;let e=this.remoteFeatures?.onramp,t=et.ConstantsUtil.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.activeCaipNetwork.chainNamespace);return e&&t?o.html`
      <wui-list-item
        @click=${this.onBuyCrypto.bind(this)}
        icon="card"
        data-testid="wallet-features-onramp-button"
      >
        <wui-text variant="lg-regular" color="primary">Buy crypto</wui-text>
      </wui-list-item>
    `:null}depositFromExchangeTemplate(){return this.activeCaipNetwork&&ef.ExchangeController.isPayWithExchangeSupported()?o.html`
      <wui-list-item
        @click=${this.onDepositFromExchange.bind(this)}
        icon="arrowBottomCircle"
        data-testid="wallet-features-deposit-from-exchange-button"
        ?loading=${this.exchangesLoading}
        ?disabled=${this.exchangesLoading||!this.exchanges.length}
      >
        <wui-text variant="lg-regular" color="primary">Deposit from exchange</wui-text>
      </wui-list-item>
    `:null}receiveTemplate(){return this.features?.receive?o.html`
      <wui-list-item
        @click=${this.onReceive.bind(this)}
        icon="qrCode"
        data-testid="wallet-features-receive-button"
      >
        <wui-text variant="lg-regular" color="primary">Receive funds</wui-text>
      </wui-list-item>
    `:null}onBuyCrypto(){eo.RouterController.push("OnRampProviders")}onReceive(){eo.RouterController.push("WalletReceive")}onDepositFromExchange(){ef.ExchangeController.reset(),eo.RouterController.push("PayWithExchange",{redirectView:eo.RouterController.state.data?.redirectView})}};t$([(0,r.state)()],tk.prototype,"activeCaipNetwork",void 0),t$([(0,r.state)()],tk.prototype,"features",void 0),t$([(0,r.state)()],tk.prototype,"remoteFeatures",void 0),t$([(0,r.state)()],tk.prototype,"exchangesLoading",void 0),t$([(0,r.state)()],tk.prototype,"exchanges",void 0),tk=t$([(0,p.customElement)("w3m-fund-wallet-view")],tk),e.s(["W3mFundWalletView",()=>tk],107337);var tE=t,tS=t,tR=t;e.i(684326);var tA=e.i(765090);let tO=f.css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var tT=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let tN=class extends tR.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,tA.createRef)(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return o.html`
      <label data-size=${this.size}>
        <input
          ${(0,tA.ref)(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};tN.styles=[m.resetStyles,m.elementStyles,tO],tT([(0,i.property)({type:Boolean})],tN.prototype,"checked",void 0),tT([(0,i.property)({type:Boolean})],tN.prototype,"disabled",void 0),tT([(0,i.property)()],tN.prototype,"size",void 0),tN=tT([(0,p.customElement)("wui-toggle")],tN);let tI=f.css`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e["2"]};
    padding: ${({spacing:e})=>e["2"]} ${({spacing:e})=>e["3"]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e["4"]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var tU=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let tP=class extends tS.LitElement{constructor(){super(...arguments),this.checked=!1}render(){return o.html`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};tP.styles=[m.resetStyles,m.elementStyles,tI],tU([(0,i.property)({type:Boolean})],tP.prototype,"checked",void 0),tP=tU([(0,p.customElement)("wui-certified-switch")],tP);var tD=t;e.i(835902);let tj=f.css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var tL=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let tW=class extends tD.LitElement{constructor(){super(...arguments),this.inputComponentRef=(0,tA.createRef)(),this.inputValue=""}render(){return o.html`
      <wui-input-text
        ${(0,tA.ref)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?o.html`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",this.inputValue="",t.focus(),t.dispatchEvent(new Event("input")))}};tW.styles=[m.resetStyles,tj],tL([(0,i.property)()],tW.prototype,"inputValue",void 0),tW=tL([(0,p.customElement)("wui-search-bar")],tW);var t_=t,tz=e.i(886259),tM=e.i(197730),tF=t,tB=e.i(252157);e.i(864576);let tH=f.css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var tV=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let tq=class extends tF.LitElement{constructor(){super(...arguments),this.type="wallet"}render(){return o.html`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?o.html` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${tB.networkSvgMd}`:o.html`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};tq.styles=[m.resetStyles,m.elementStyles,tH],tV([(0,i.property)()],tq.prototype,"type",void 0),tq=tV([(0,p.customElement)("wui-card-select-loader")],tq);var tK=t;let tG=E.css`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var tY=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let tX=class extends tK.LitElement{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&w.UiHelperUtil.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&w.UiHelperUtil.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&w.UiHelperUtil.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&w.UiHelperUtil.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&w.UiHelperUtil.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&w.UiHelperUtil.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&w.UiHelperUtil.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&w.UiHelperUtil.getSpacingStyles(this.margin,3)};
    `,o.html`<slot></slot>`}};tX.styles=[m.resetStyles,tG],tY([(0,i.property)()],tX.prototype,"gridTemplateRows",void 0),tY([(0,i.property)()],tX.prototype,"gridTemplateColumns",void 0),tY([(0,i.property)()],tX.prototype,"justifyItems",void 0),tY([(0,i.property)()],tX.prototype,"alignItems",void 0),tY([(0,i.property)()],tX.prototype,"justifyContent",void 0),tY([(0,i.property)()],tX.prototype,"alignContent",void 0),tY([(0,i.property)()],tX.prototype,"columnGap",void 0),tY([(0,i.property)()],tX.prototype,"rowGap",void 0),tY([(0,i.property)()],tX.prototype,"gap",void 0),tY([(0,i.property)()],tX.prototype,"padding",void 0),tY([(0,i.property)()],tX.prototype,"margin",void 0),tX=tY([(0,p.customElement)("wui-grid")],tX);var tJ=t;e.i(780313),e.i(956303);let tQ=f.css`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e["2"]};
    padding: ${({spacing:e})=>e["3"]} ${({spacing:e})=>e["0"]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e["4"]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var tZ=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let t0=class extends tJ.LitElement{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let e=this.wallet?.badge_type==="certified";return o.html`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,n.ifDefined)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?o.html`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return(this.visible||this.imageSrc)&&!this.imageLoading?o.html`
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,n.ifDefined)(this.imageSrc)}
        name=${(0,n.ifDefined)(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `:this.shimmerTemplate()}shimmerTemplate(){return o.html`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){!this.wallet||(this.imageSrc=s.AssetUtil.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await s.AssetUtil.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,M.EventsController.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:eo.RouterController.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};t0.styles=tQ,tZ([(0,r.state)()],t0.prototype,"visible",void 0),tZ([(0,r.state)()],t0.prototype,"imageSrc",void 0),tZ([(0,r.state)()],t0.prototype,"imageLoading",void 0),tZ([(0,r.state)()],t0.prototype,"isImpressed",void 0),tZ([(0,i.property)()],t0.prototype,"explorerId",void 0),tZ([(0,i.property)()],t0.prototype,"walletQuery",void 0),tZ([(0,i.property)()],t0.prototype,"certified",void 0),tZ([(0,i.property)()],t0.prototype,"displayIndex",void 0),tZ([(0,i.property)({type:Object})],t0.prototype,"wallet",void 0),t0=tZ([(0,p.customElement)("w3m-all-wallets-list-item")],t0);let t3=f.css`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e["4"]};
    padding-bottom: ${({spacing:e})=>e["4"]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var t1=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let t2="local-paginator",t5=class extends t_.LitElement{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!tz.ApiController.state.wallets.length,this.wallets=tz.ApiController.state.wallets,this.mobileFullScreen=u.OptionsController.state.enableMobileFullScreen,this.unsubscribe.push(tz.ApiController.subscribeKey("wallets",e=>this.wallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),o.html`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let e=this.shadowRoot?.querySelector("wui-grid");e&&(await tz.ApiController.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>o.html`
        <wui-card-select-loader type="wallet" id=${(0,n.ifDefined)(t)}></wui-card-select-loader>
      `)}walletsTemplate(){return tM.WalletUtil.getWalletConnectWallets(this.wallets).map((e,t)=>o.html`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${"certified"===this.badge}
          displayIndex=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:o,count:i,mobileFilteredOutWalletsLength:r}=tz.ApiController.state,n=window.innerWidth<352?3:4,a=e.length+t.length,s=Math.ceil(a/n)*n-a+n;return(s-=e.length?o.length%n:0,0===i&&o.length>0)?null:0===i||[...o,...e,...t].length<i-(r??0)?this.shimmerTemplate(s,t2):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${t2}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){let{page:e,count:t,wallets:o}=tz.ApiController.state;o.length<t&&tz.ApiController.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){ee.ConnectorController.selectWalletConnector(e)}};t5.styles=t3,t1([(0,r.state)()],t5.prototype,"loading",void 0),t1([(0,r.state)()],t5.prototype,"wallets",void 0),t1([(0,r.state)()],t5.prototype,"badge",void 0),t1([(0,r.state)()],t5.prototype,"mobileFullScreen",void 0),t5=t1([(0,p.customElement)("w3m-all-wallets-list")],t5);var t4=t;e.i(421147);let t6=E.css`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var t8=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let t9=class extends t4.LitElement{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=u.OptionsController.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?o.html`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await tz.ApiController.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){let{search:e}=tz.ApiController.state,t=tM.WalletUtil.markWalletsAsInstalled(e),i=tM.WalletUtil.filterWalletsByWcSupport(t);return i.length?o.html`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${i.map((e,t)=>o.html`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${"certified"===this.badge}
              walletQuery=${this.query}
              displayIndex=${t}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:o.html`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){ee.ConnectorController.selectWalletConnector(e)}};t9.styles=t6,t8([(0,r.state)()],t9.prototype,"loading",void 0),t8([(0,r.state)()],t9.prototype,"mobileFullScreen",void 0),t8([(0,i.property)()],t9.prototype,"query",void 0),t8([(0,i.property)()],t9.prototype,"badge",void 0),t9=t8([(0,p.customElement)("w3m-all-wallets-search")],t9);var t7=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let oe=class extends tE.LitElement{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=c.CoreHelperUtil.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return o.html`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?o.html`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:o.html`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",ei.SnackController.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return c.CoreHelperUtil.isMobile()?o.html`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){eo.RouterController.push("ConnectingWalletConnect")}};t7([(0,r.state)()],oe.prototype,"search",void 0),t7([(0,r.state)()],oe.prototype,"badge",void 0),oe=t7([(0,p.customElement)("w3m-all-wallets-view")],oe),e.s(["W3mAllWalletsView",()=>oe],210149);var ot=t,oo=e.i(455587),oi=t;let or=f.css`
  button {
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[4]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) button {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var on=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let oa=class extends oi.LitElement{constructor(){super(...arguments),this.text="",this.disabled=!1,this.size="lg",this.icon="copy",this.tabIdx=void 0}render(){this.dataset.size=this.size;let e=`${this.size}-regular`;return o.html`
      <button ?disabled=${this.disabled} tabindex=${(0,n.ifDefined)(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${e} color="primary">${this.text}</wui-text>
      </button>
    `}};oa.styles=[m.resetStyles,m.elementStyles,or],on([(0,i.property)()],oa.prototype,"text",void 0),on([(0,i.property)({type:Boolean})],oa.prototype,"disabled",void 0),on([(0,i.property)()],oa.prototype,"size",void 0),on([(0,i.property)()],oa.prototype,"icon",void 0),on([(0,i.property)()],oa.prototype,"tabIdx",void 0),oa=on([(0,p.customElement)("wui-list-button")],oa),e.i(803596);var os=e.i(16555),ol=t,oc=e.i(851887);e.i(39299);var od=e.i(535568);let ou=f.css`
  wui-separator {
    margin: ${({spacing:e})=>e["3"]} calc(${({spacing:e})=>e["3"]} * -1);
    width: calc(100% + ${({spacing:e})=>e["3"]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({spacing:e})=>e["2"]};
  }

  wui-loading-spinner {
    right: ${({spacing:e})=>e["3"]};
  }

  wui-text {
    margin: ${({spacing:e})=>e["2"]} ${({spacing:e})=>e["3"]}
      ${({spacing:e})=>e["0"]} ${({spacing:e})=>e["3"]};
  }
`;var op=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let oh=class extends ol.LitElement{constructor(){super(),this.unsubscribe=[],this.formRef=(0,tA.createRef)(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=u.OptionsController.state.remoteFeatures,this.hasExceededUsageLimit=tz.ApiController.state.plan.hasExceededUsageLimit,this.unsubscribe.push(u.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}),tz.ApiController.subscribeKey("plan",e=>this.hasExceededUsageLimit=e.hasExceededUsageLimit))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=Z.ConnectionController.hasAnyConnection(Q.ConstantsUtil.CONNECTOR_ID.AUTH);return o.html`
      <form ${(0,tA.ref)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${(0,n.ifDefined)(this.tabIdx)}
          ?disabled=${e||this.hasExceededUsageLimit}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?o.html`
          <wui-icon-link
            size="lg"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?o.html`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:null}templateError(){return this.error?o.html`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(!eB.HelpersUtil.isValidEmail(this.email))return void oc.AlertController.open({displayMessage:od.ErrorUtil.ALERT_WARNINGS.INVALID_EMAIL.displayMessage},"warning");if(!Q.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===l.ChainController.state.activeChain)){let e=l.ChainController.getFirstCaipNetworkSupportsAuthConnector();if(e)return void eo.RouterController.push("SwitchNetwork",{network:e})}try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=ee.ConnectorController.getAuthConnector();if(!t)throw Error("w3m-email-login-widget: Auth connector not found");let{action:o}=await t.provider.connectEmail({email:this.email});if(M.EventsController.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===o)M.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),eo.RouterController.push("EmailVerifyOtp",{email:this.email});else if("VERIFY_DEVICE"===o)eo.RouterController.push("EmailVerifyDevice",{email:this.email});else if("CONNECT"===o){let e=this.remoteFeatures?.multiWallet;await Z.ConnectionController.connectExternal(t,l.ChainController.state.activeChain),e?(eo.RouterController.replace("ProfileWallets"),ei.SnackController.showSuccess("New Wallet Added")):eo.RouterController.replace("Account")}}catch(t){let e=c.CoreHelperUtil.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":ei.SnackController.showError(t)}finally{this.loading=!1}}onFocusEvent(){M.EventsController.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};oh.styles=ou,op([(0,i.property)()],oh.prototype,"tabIdx",void 0),op([(0,r.state)()],oh.prototype,"email",void 0),op([(0,r.state)()],oh.prototype,"loading",void 0),op([(0,r.state)()],oh.prototype,"error",void 0),op([(0,r.state)()],oh.prototype,"remoteFeatures",void 0),op([(0,r.state)()],oh.prototype,"hasExceededUsageLimit",void 0),oh=op([(0,p.customElement)("w3m-email-login-widget")],oh),e.i(729084);var om=t,ow=e.i(328182);e.i(655934);var of=t;e.i(496969);let og=f.css`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;var ob=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let oC=class extends of.LitElement{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return o.html`
      <button ?disabled=${this.disabled} tabindex=${(0,n.ifDefined)(this.tabIdx)}>
        <wui-icon size="xxl" name=${this.logo}></wui-icon>
      </button>
    `}};oC.styles=[m.resetStyles,m.elementStyles,og],ob([(0,i.property)()],oC.prototype,"logo",void 0),ob([(0,i.property)({type:Boolean})],oC.prototype,"disabled",void 0),ob([(0,i.property)()],oC.prototype,"tabIdx",void 0),oC=ob([(0,p.customElement)("wui-logo-select")],oC);var oy=e.i(542991);let ov=f.css`
  wui-separator {
    margin: ${({spacing:e})=>e["3"]} calc(${({spacing:e})=>e["3"]} * -1)
      ${({spacing:e})=>e["3"]} calc(${({spacing:e})=>e["3"]} * -1);
    width: calc(100% + ${({spacing:e})=>e["3"]} * 2);
  }
`;var ox=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let o$=class extends om.LitElement{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=ee.ConnectorController.state.connectors,this.remoteFeatures=u.OptionsController.state.remoteFeatures,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isPwaLoading=!1,this.hasExceededUsageLimit=tz.ApiController.state.plan.hasExceededUsageLimit,this.unsubscribe.push(ee.ConnectorController.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type)}),u.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),tz.ApiController.subscribeKey("plan",e=>this.hasExceededUsageLimit=e.hasExceededUsageLimit))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.html`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){let e="explore"===this.walletGuide,t=this.remoteFeatures?.socials;return!t&&e?(t=et.ConstantsUtil.DEFAULT_SOCIALS,this.renderTopViewContent(t)):t?this.renderTopViewContent(t):null}renderTopViewContent(e){return 2===e.length?o.html` <wui-flex gap="2">
        ${e.slice(0,2).map(e=>o.html`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,n.ifDefined)(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:o.html` <wui-list-button
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      size="lg"
      icon=${(0,n.ifDefined)(e[0])}
      text=${`Continue with ${w.UiHelperUtil.capitalize(e[0])}`}
      tabIdx=${(0,n.ifDefined)(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-button>`}bottomViewTemplate(){let e=this.remoteFeatures?.socials,t="explore"===this.walletGuide;return(this.authConnector&&e&&0!==e.length||!t||(e=et.ConstantsUtil.DEFAULT_SOCIALS),!e||e.length<=2)?null:e&&e.length>6?o.html`<wui-flex gap="2">
        ${e.slice(1,5).map(e=>o.html`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,n.ifDefined)(this.tabIdx)}
              ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${(0,n.ifDefined)(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:e?o.html`<wui-flex gap="2">
      ${e.slice(1,e.length).map(e=>o.html`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${(0,n.ifDefined)(this.tabIdx)}
            ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){eo.RouterController.push("ConnectSocials")}async onSocialClick(e){if(this.hasExceededUsageLimit)return void eo.RouterController.push("UsageExceeded");if(!Q.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===l.ChainController.state.activeChain)){let e=l.ChainController.getFirstCaipNetworkSupportsAuthConnector();if(e)return void eo.RouterController.push("SwitchNetwork",{network:e})}e&&await (0,ow.executeSocialLogin)(e)}async handlePwaFrameLoad(){if(c.CoreHelperUtil.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof oy.W3mFrameProvider&&await this.authConnector.provider.init()}catch(e){oc.AlertController.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return Z.ConnectionController.hasAnyConnection(Q.ConstantsUtil.CONNECTOR_ID.AUTH)}};o$.styles=ov,ox([(0,i.property)()],o$.prototype,"walletGuide",void 0),ox([(0,i.property)()],o$.prototype,"tabIdx",void 0),ox([(0,r.state)()],o$.prototype,"connectors",void 0),ox([(0,r.state)()],o$.prototype,"remoteFeatures",void 0),ox([(0,r.state)()],o$.prototype,"authConnector",void 0),ox([(0,r.state)()],o$.prototype,"isPwaLoading",void 0),ox([(0,r.state)()],o$.prototype,"hasExceededUsageLimit",void 0),o$=ox([(0,p.customElement)("w3m-social-login-widget")],o$);var ok=t,oE=t;e.i(987789);var oS=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let oR=class extends oE.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=ee.ConnectorController.state.connectors,this.count=tz.ApiController.state.count,this.filteredCount=tz.ApiController.state.filteredWallets.length,this.isFetchingRecommendedWallets=tz.ApiController.state.isFetchingRecommendedWallets,this.unsubscribe.push(ee.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),tz.ApiController.subscribeKey("count",e=>this.count=e),tz.ApiController.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),tz.ApiController.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:t}=u.OptionsController.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!c.CoreHelperUtil.isMobile())return null;let i=tz.ApiController.state.featured.length,r=this.count+i,a=r<10?r:10*Math.floor(r/10),s=this.filteredCount>0?this.filteredCount:a,l=`${s}`;this.filteredCount>0?l=`${this.filteredCount}`:s<r&&(l=`${s}+`);let d=Z.ConnectionController.hasAnyConnection(Q.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return o.html`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${l}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,n.ifDefined)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${d}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){M.EventsController.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),eo.RouterController.push("AllWallets",{redirectView:eo.RouterController.state.data?.redirectView})}};oS([(0,i.property)()],oR.prototype,"tabIdx",void 0),oS([(0,r.state)()],oR.prototype,"connectors",void 0),oS([(0,r.state)()],oR.prototype,"count",void 0),oS([(0,r.state)()],oR.prototype,"filteredCount",void 0),oS([(0,r.state)()],oR.prototype,"isFetchingRecommendedWallets",void 0),oR=oS([(0,p.customElement)("w3m-all-wallets-widget")],oR),e.s([],903134);var oA=t;let oO=f.css`
  :host {
    margin-top: ${({spacing:e})=>e["1"]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e["3"]} calc(${({spacing:e})=>e["3"]} * -1)
      ${({spacing:e})=>e["2"]} calc(${({spacing:e})=>e["3"]} * -1);
    width: calc(100% + ${({spacing:e})=>e["3"]} * 2);
  }
`;var oT=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let oN=class extends oA.LitElement{constructor(){super(),this.unsubscribe=[],this.explorerWallets=tz.ApiController.state.explorerWallets,this.connections=Z.ConnectionController.state.connections,this.connectorImages=a.AssetController.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(Z.ConnectionController.subscribeKey("connections",e=>this.connections=e),a.AssetController.subscribeKey("connectorImages",e=>this.connectorImages=e),tz.ApiController.subscribeKey("explorerFilteredWallets",e=>{this.explorerWallets=e?.length?e:tz.ApiController.state.explorerWallets}),tz.ApiController.subscribeKey("explorerWallets",e=>{this.explorerWallets?.length||(this.explorerWallets=e)})),c.CoreHelperUtil.isTelegram()&&c.CoreHelperUtil.isIos()&&(this.loadingTelegram=!Z.ConnectionController.state.wcUri,this.unsubscribe.push(Z.ConnectionController.subscribeKey("wcUri",e=>this.loadingTelegram=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.html`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){return eU.ConnectorUtil.connectorList().map((e,t)=>"connector"===e.kind?this.renderConnector(e,t):this.renderWallet(e,t))}getConnectorNamespaces(e){return"walletConnect"===e.subtype?[]:"multiChain"===e.subtype?e.connector.connectors?.map(e=>e.chain)||[]:[e.connector.chain]}renderConnector(e,t){let i,r,a=e.connector,l=s.AssetUtil.getConnectorImage(a)||this.connectorImages[a?.imageId??""],c=(this.connections.get(a.chain)??[]).some(e=>tc.HelpersUtil.isLowerCaseMatch(e.connectorId,a.id));"walletConnect"===e.subtype?(i="qr code",r="accent"):"injected"===e.subtype||"announced"===e.subtype?(i=c?"connected":"installed",r=c?"info":"success"):(i=void 0,r=void 0);let d=Z.ConnectionController.hasAnyConnection(Q.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT),u=("walletConnect"===e.subtype||"external"===e.subtype)&&d;return o.html`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,n.ifDefined)(l)}
        .installed=${!0}
        name=${a.name??"Unknown"}
        .tagVariant=${r}
        tagLabel=${(0,n.ifDefined)(i)}
        data-testid=${`wallet-selector-${a.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${(0,n.ifDefined)(this.tabIdx)}
        ?disabled=${u}
        rdnsId=${(0,n.ifDefined)(a.explorerWallet?.rdns||void 0)}
        walletRank=${(0,n.ifDefined)(a.explorerWallet?.order)}
        .namespaces=${this.getConnectorNamespaces(e)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){let t=eo.RouterController.state.data?.redirectView;if("walletConnect"===e.subtype){ee.ConnectorController.setActiveConnector(e.connector),c.CoreHelperUtil.isMobile()?eo.RouterController.push("AllWallets"):eo.RouterController.push("ConnectingWalletConnect",{redirectView:t});return}if("multiChain"===e.subtype){ee.ConnectorController.setActiveConnector(e.connector),eo.RouterController.push("ConnectingMultiChain",{redirectView:t});return}if("injected"===e.subtype){ee.ConnectorController.setActiveConnector(e.connector),eo.RouterController.push("ConnectingExternal",{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet});return}if("announced"===e.subtype)return"walletConnect"===e.connector.id?void(c.CoreHelperUtil.isMobile()?eo.RouterController.push("AllWallets"):eo.RouterController.push("ConnectingWalletConnect",{redirectView:t})):(eo.RouterController.push("ConnectingExternal",{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet}),void 0);eo.RouterController.push("ConnectingExternal",{connector:e.connector,redirectView:t})}renderWallet(e,t){let i=e.wallet,r=s.AssetUtil.getWalletImage(i),a=Z.ConnectionController.hasAnyConnection(Q.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT),l=this.loadingTelegram,c="recent"===e.subtype?"recent":void 0,d="recent"===e.subtype?"info":void 0;return o.html`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,n.ifDefined)(r)}
        name=${i.name??"Unknown"}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${i.id}`}
        tabIdx=${(0,n.ifDefined)(this.tabIdx)}
        ?loading=${l}
        ?disabled=${a}
        rdnsId=${(0,n.ifDefined)(i.rdns||void 0)}
        walletRank=${(0,n.ifDefined)(i.order)}
        tagLabel=${(0,n.ifDefined)(c)}
        .tagVariant=${d}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){let t=eo.RouterController.state.data?.redirectView,o=l.ChainController.state.activeChain;if("featured"===e.subtype)return void ee.ConnectorController.selectWalletConnector(e.wallet);if("recent"===e.subtype){if(this.loadingTelegram)return;ee.ConnectorController.selectWalletConnector(e.wallet);return}if("custom"===e.subtype){if(this.loadingTelegram)return;eo.RouterController.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:t});return}if(this.loadingTelegram)return;let i=o?ee.ConnectorController.getConnector({id:e.wallet.id,namespace:o}):void 0;i?eo.RouterController.push("ConnectingExternal",{connector:i,redirectView:t}):eo.RouterController.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:t})}};oN.styles=oO,oT([(0,i.property)({type:Number})],oN.prototype,"tabIdx",void 0),oT([(0,r.state)()],oN.prototype,"explorerWallets",void 0),oT([(0,r.state)()],oN.prototype,"connections",void 0),oT([(0,r.state)()],oN.prototype,"connectorImages",void 0),oT([(0,r.state)()],oN.prototype,"loadingTelegram",void 0),oN=oT([(0,p.customElement)("w3m-connector-list")],oN),e.s([],212605);var oI=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let oU=class extends ok.LitElement{constructor(){super(...arguments),this.tabIdx=void 0}render(){return o.html`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${(0,n.ifDefined)(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${(0,n.ifDefined)(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};oI([(0,i.property)()],oU.prototype,"tabIdx",void 0),oU=oI([(0,p.customElement)("w3m-wallet-login-list")],oU),e.s([],391641);let oP=f.css`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({spacing:e})=>e["3"]} calc(${({spacing:e})=>e["3"]} * -1);
    width: calc(100% + ${({spacing:e})=>e["3"]} * 2);
  }
`;var oD=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let oj=class extends ot.LitElement{constructor(){super(),this.unsubscribe=[],this.connectors=ee.ConnectorController.state.connectors,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.features=u.OptionsController.state.features,this.remoteFeatures=u.OptionsController.state.remoteFeatures,this.enableWallets=u.OptionsController.state.enableWallets,this.noAdapters=l.ChainController.state.noAdapters,this.walletGuide="get-started",this.checked=oo.OptionsStateController.state.isLegalCheckboxChecked,this.isEmailEnabled=this.remoteFeatures?.email&&!l.ChainController.state.noAdapters,this.isSocialEnabled=this.remoteFeatures?.socials&&this.remoteFeatures.socials.length>0&&!l.ChainController.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(ee.ConnectorController.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),u.OptionsController.subscribeKey("features",e=>{this.features=e}),u.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),u.OptionsController.subscribeKey("enableWallets",e=>this.enableWallets=e),l.ChainController.subscribeKey("noAdapters",e=>this.setEmailAndSocialEnableCheck(e,this.remoteFeatures)),oo.OptionsStateController.subscribeKey("isLegalCheckboxChecked",e=>this.checked=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect();let e=this.shadowRoot?.querySelector(".connect");e?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){let e=this.shadowRoot?.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(e),this.handleConnectListScroll())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=u.OptionsController.state,i=u.OptionsController.state.features?.legalCheckbox,r=!!(e||t)&&!!i&&"get-started"===this.walletGuide&&!this.checked,n=u.OptionsController.state.enableWalletGuide,a=this.enableWallets,s=this.isSocialEnabled||this.authConnector;return o.html`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${["0","0","4","0"]}
          class=${(0,e8.classMap)({connect:!0,disabled:r})}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${s&&a&&n&&"get-started"===this.walletGuide?["0","3","0","3"]:["0","3","3","3"]}
          >
            ${this.renderConnectMethod(r?-1:void 0)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}reownBrandingTemplate(){return eB.HelpersUtil.hasFooter()||!this.remoteFeatures?.reownBranding?null:o.html`<wui-ux-by-reown></wui-ux-by-reown>`}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=t?.email&&!e,this.isSocialEnabled=t?.socials&&t.socials.length>0&&!e,this.remoteFeatures=t,this.noAdapters=e}checkIfAuthEnabled(e){let t=e.filter(e=>e.type===os.ConstantsUtil.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return Q.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}renderConnectMethod(e){let t=tM.WalletUtil.getConnectOrderMethod(this.features,this.connectors);return o.html`${t.map((t,i)=>{switch(t){case"email":return o.html`${this.emailTemplate(e)} ${this.separatorTemplate(i,"email")}`;case"social":return o.html`${this.socialListTemplate(e)}
          ${this.separatorTemplate(i,"social")}`;case"wallet":return o.html`${this.walletListTemplate(e)}
          ${this.separatorTemplate(i,"wallet")}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){let t=tM.WalletUtil.getConnectOrderMethod(this.features,this.connectors)[e+1];return t?this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1):void 0}separatorTemplate(e,t){let i=this.checkIsThereNextMethod(e),r="explore"===this.walletGuide;switch(t){case"wallet":return this.enableWallets&&i&&!r?o.html`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":return this.isAuthEnabled&&this.isEmailEnabled&&"social"!==i&&i?o.html`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null;case"social":return this.isAuthEnabled&&this.isSocialEnabled&&"email"!==i&&i?o.html`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;default:return null}}emailTemplate(e){return this.isEmailEnabled&&this.isAuthEnabled?o.html`<w3m-email-login-widget tabIdx=${(0,n.ifDefined)(e)}></w3m-email-login-widget>`:null}socialListTemplate(e){return this.isSocialEnabled&&this.isAuthEnabled?o.html`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,n.ifDefined)(e)}
    ></w3m-social-login-widget>`:null}walletListTemplate(e){let t=this.enableWallets,i=this.features?.emailShowWallets===!1,r=this.features?.collapseWallets;return t?(c.CoreHelperUtil.isTelegram()&&(c.CoreHelperUtil.isSafari()||c.CoreHelperUtil.isIos())&&Z.ConnectionController.connectWalletConnect().catch(e=>({})),"explore"===this.walletGuide)?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&(i||r)?o.html`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${(0,n.ifDefined)(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
        icon="wallet"
      ></wui-list-button>`:o.html`<w3m-wallet-login-list tabIdx=${(0,n.ifDefined)(e)}></w3m-wallet-login-list>`:null}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:o.html`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){let e=this.shadowRoot?.querySelector(".connect");e&&(e.scrollHeight>470?(e.style.setProperty("--connect-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty("--connect-scroll--top-opacity",te.MathUtil.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",te.MathUtil.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0")))}onContinueWalletClick(){eo.RouterController.push("ConnectWallets")}};oj.styles=oP,oD([(0,r.state)()],oj.prototype,"connectors",void 0),oD([(0,r.state)()],oj.prototype,"authConnector",void 0),oD([(0,r.state)()],oj.prototype,"features",void 0),oD([(0,r.state)()],oj.prototype,"remoteFeatures",void 0),oD([(0,r.state)()],oj.prototype,"enableWallets",void 0),oD([(0,r.state)()],oj.prototype,"noAdapters",void 0),oD([(0,i.property)()],oj.prototype,"walletGuide",void 0),oD([(0,r.state)()],oj.prototype,"checked",void 0),oD([(0,r.state)()],oj.prototype,"isEmailEnabled",void 0),oD([(0,r.state)()],oj.prototype,"isSocialEnabled",void 0),oD([(0,r.state)()],oj.prototype,"isAuthEnabled",void 0),oj=oD([(0,p.customElement)("w3m-connect-view")],oj),e.s(["W3mConnectView",()=>oj],28218);var oL=e.i(683075),oW=e.i(592279),o_=t,oz=e.i(639403);e.i(210380),e.i(595157);var oM=t,oF=t;let oB=f.css`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var oH=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let oV=class extends oF.LitElement{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return o.html`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};oV.styles=[m.resetStyles,m.elementStyles,oB],oH([(0,i.property)({type:Boolean})],oV.prototype,"disabled",void 0),oH([(0,i.property)()],oV.prototype,"label",void 0),oH([(0,i.property)()],oV.prototype,"buttonLabel",void 0),oV=oH([(0,p.customElement)("wui-cta-button")],oV);let oq=f.css`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e["5"]} ${({spacing:e})=>e["5"]};
  }
`;var oK=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let oG=class extends oM.LitElement{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:i,chrome_store:r,homepage:n}=this.wallet,a=c.CoreHelperUtil.isMobile(),s=c.CoreHelperUtil.isIos(),l=c.CoreHelperUtil.isAndroid(),d=[t,i,n,r].filter(Boolean).length>1,u=w.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return d&&!a?o.html`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>eo.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&n?o.html`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?o.html`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&l?o.html`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&c.CoreHelperUtil.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&c.CoreHelperUtil.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&c.CoreHelperUtil.openHref(this.wallet.homepage,"_blank")}};oG.styles=[oq],oK([(0,i.property)({type:Object})],oG.prototype,"wallet",void 0),oG=oK([(0,p.customElement)("w3m-mobile-download-links")],oG),e.s([],121121);let oY=f.css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e["1"]} * -1);
    bottom: calc(${({spacing:e})=>e["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var oX=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};class oJ extends o_.LitElement{constructor(){super(),this.wallet=eo.RouterController.state.data?.wallet,this.connector=eo.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=s.AssetUtil.getConnectorImage(this.connector)??s.AssetUtil.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=Z.ConnectionController.state.wcUri,this.error=Z.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Z.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),Z.ConnectionController.subscribeKey("wcError",e=>this.error=e)),(c.CoreHelperUtil.isTelegram()||c.CoreHelperUtil.isSafari())&&c.CoreHelperUtil.isIos()&&Z.ConnectionController.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),Z.ConnectionController.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t="";return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t="Connection declined")),o.html`
      <wui-flex
        data-error=${(0,n.ifDefined)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,n.ifDefined)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?o.html`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?o.html`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){Z.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){let e=oz.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.html`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(c.CoreHelperUtil.copyToClopboard(this.uri),ei.SnackController.showSuccess("Link copied"))}catch{ei.SnackController.showError("Failed to copy")}}}oJ.styles=oY,oX([(0,r.state)()],oJ.prototype,"isRetrying",void 0),oX([(0,r.state)()],oJ.prototype,"uri",void 0),oX([(0,r.state)()],oJ.prototype,"error",void 0),oX([(0,r.state)()],oJ.prototype,"ready",void 0),oX([(0,r.state)()],oJ.prototype,"showRetry",void 0),oX([(0,r.state)()],oJ.prototype,"label",void 0),oX([(0,r.state)()],oJ.prototype,"secondaryBtnLabel",void 0),oX([(0,r.state)()],oJ.prototype,"secondaryLabel",void 0),oX([(0,r.state)()],oJ.prototype,"isLoading",void 0),oX([(0,i.property)({type:Boolean})],oJ.prototype,"isMobile",void 0),oX([(0,i.property)()],oJ.prototype,"onRetry",void 0),e.s(["W3mConnectingWidget",()=>oJ],181557);let oQ=class extends oJ{constructor(){if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=Z.ConnectionController.getConnections(this.connector?.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=u.OptionsController.state.remoteFeatures,this.currentActiveConnectorId=ee.ConnectorController.state.activeConnectorIds[this.connector?.chain],!this.connector)throw Error("w3m-connecting-view: No connector provided");const e=this.connector?.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),M.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:eo.RouterController.state.view}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(ee.ConnectorController.subscribeKey("activeConnectorIds",t=>{let o=t[e],i=this.remoteFeatures?.multiWallet,{redirectView:r}=eo.RouterController.state.data??{};o!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&i?(eo.RouterController.replace("ProfileWallets"),ei.SnackController.showSuccess("New Wallet Added")):r?eo.RouterController.replace(r):d.ModalController.close())}),Z.ConnectionController.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;this.connector.id===Q.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK&&this.error||await Z.ConnectionController.connectExternal(this.connector,this.connector.chain)}}catch(e){e instanceof oW.AppKitError&&e.originalName===oL.ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?M.EventsController.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):M.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}onConnectionsChange(e){if(this.connector?.chain&&e.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){let t=e.get(this.connector.chain)??[],o=this.remoteFeatures?.multiWallet;if(0===t.length)eo.RouterController.replace("Connect");else{let e=e7.ConnectionControllerUtil.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(e=>e.accounts),i=e7.ConnectionControllerUtil.getConnectionsByConnectorId(t,this.connector.id).flatMap(e=>e.accounts);0===i.length?this.hasMultipleConnections&&o?(eo.RouterController.replace("ProfileWallets"),ei.SnackController.showSuccess("Wallet deleted")):d.ModalController.close():!e.every(e=>i.some(t=>tc.HelpersUtil.isLowerCaseMatch(e.address,t.address)))&&o&&eo.RouterController.replace("ProfileWallets")}}}isAlreadyConnected(e){return!!e&&this.connectionsByNamespace.some(t=>tc.HelpersUtil.isLowerCaseMatch(t.connectorId,e.id))}};oQ=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a}([(0,p.customElement)("w3m-connecting-external-view")],oQ),e.s(["W3mConnectingExternalView",()=>oQ],217283);var oZ=t;let o0=E.css`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var o3=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let o1=class extends oZ.LitElement{constructor(){super(),this.unsubscribe=[],this.activeConnector=ee.ConnectorController.state.activeConnector,this.unsubscribe.push(ee.ConnectorController.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,n.ifDefined)(s.AssetUtil.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["0","3","0","3"]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","2","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map((e,t)=>e.name?o.html`
            <w3m-list-wallet
              displayIndex=${t}
              imageSrc=${(0,n.ifDefined)(s.AssetUtil.getChainImage(e.chain))}
              name=${Q.ConstantsUtil.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              size="sm"
              data-testid="wui-list-chain-${e.chain}"
              rdnsId=${e.explorerWallet?.rdns}
            ></w3m-list-wallet>
          `:null)}onConnector(e){let t=this.activeConnector?.connectors?.find(t=>t.chain===e.chain),o=eo.RouterController.state.data?.redirectView;t?"walletConnect"===t.id?c.CoreHelperUtil.isMobile()?eo.RouterController.push("AllWallets"):eo.RouterController.push("ConnectingWalletConnect",{redirectView:o}):eo.RouterController.push("ConnectingExternal",{connector:t,redirectView:o,wallet:this.activeConnector?.explorerWallet}):ei.SnackController.showError("Failed to find connector")}};o1.styles=o0,o3([(0,r.state)()],o1.prototype,"activeConnector",void 0),o1=o3([(0,p.customElement)("w3m-connecting-multi-chain-view")],o1),e.s(["W3mConnectingMultiChainView",()=>o1],904356)},910842,90344,612639,669783,108201,64077,667772,744216,569962,505676,317016,843476,516519,427159,149566,e=>{"use strict";e.i(237287),e.i(972801),e.i(885873),e.i(619295),e.i(465487),e.i(590404),e.i(269311),e.i(979890),e.i(674950),e.i(107337),e.i(210149),e.i(28218),e.i(217283),e.i(904356),e.i(812207);var t=e.i(604148),o=e.i(654479);e.i(374576);var i=e.i(120119),r=e.i(56350),n=e.i(683075),a=e.i(592279),s=e.i(960398),l=e.i(971080),c=e.i(227302),d=e.i(653157),u=e.i(411249),p=e.i(803468),h=e.i(82283),m=e.i(221728),w=e.i(811424);e.i(404041);var f=e.i(645975),g=e.i(334523),b=t;e.i(62238),e.i(359072);var C=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let y=class extends b.LitElement{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return o.html`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>{if("browser"===e)return{label:"Browser",icon:"extension",platform:"browser"};if("mobile"===e)return{label:"Mobile",icon:"mobile",platform:"mobile"};if("qrcode"===e)return{label:"Mobile",icon:"mobile",platform:"qrcode"};if("web"===e)return{label:"Webapp",icon:"browser",platform:"web"};if("desktop"===e)return{label:"Desktop",icon:"desktop",platform:"desktop"};return{label:"Browser",icon:"extension",platform:"unsupported"}});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};C([(0,i.property)({type:Array})],y.prototype,"platforms",void 0),C([(0,i.property)()],y.prototype,"onSelectPlatfrom",void 0),y=C([(0,f.customElement)("w3m-connecting-header")],y);var v=e.i(149454),x=e.i(181557);let $=class extends x.W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),d.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:m.RouterController.state.view}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=v.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name);if(t)await l.ConnectionController.connectExternal(t,t.chain);else throw Error("w3m-connecting-wc-browser: No connector found");p.ModalController.close()}catch(e){e instanceof a.AppKitError&&e.originalName===n.ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?d.EventsController.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):d.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};$=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a}([(0,f.customElement)("w3m-connecting-wc-browser")],$);var k=x;let E=class extends k.W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),d.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:m.RouterController.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:o,href:i}=c.CoreHelperUtil.formatNativeUrl(e,this.uri);l.ConnectionController.setWcLinking({name:t,href:i}),l.ConnectionController.setRecentWallet(this.wallet),c.CoreHelperUtil.openHref(o,"_blank")}catch{this.error=!0}}};E=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a}([(0,f.customElement)("w3m-connecting-wc-desktop")],E);var S=e.i(210087),R=e.i(360334),A=x,O=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let T=class extends A.W3mConnectingWidget{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=h.OptionsController.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{S.ConnectionControllerUtil.onConnectMobile(this.wallet)},!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=R.ConstantsUtil.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(l.ConnectionController.subscribeKey("wcUri",()=>{this.onHandleURI()})),d.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:m.RouterController.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){l.ConnectionController.setWcError(!1),this.onConnect?.()}};O([(0,r.state)()],T.prototype,"redirectDeeplink",void 0),O([(0,r.state)()],T.prototype,"redirectUniversalLink",void 0),O([(0,r.state)()],T.prototype,"target",void 0),O([(0,r.state)()],T.prototype,"preferUniversalLinks",void 0),O([(0,r.state)()],T.prototype,"isLoading",void 0),T=O([(0,f.customElement)("w3m-connecting-wc-mobile")],T),e.i(234051);var N=e.i(829389),I=e.i(436220),U=e.i(639403);e.i(443452),e.i(210380),e.i(732965),e.i(780313),e.i(249536),e.i(803596);var P=x;e.i(121121);var D=e.i(162611);let j=D.css`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var L=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let W=class extends P.W3mConnectingWidget{constructor(){super(),this.basic=!1}firstUpdated(){this.basic||d.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:m.RouterController.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e())}render(){return this.onRenderProxy(),o.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.wallet?this.wallet.name:void 0;l.ConnectionController.setWcLinking(void 0),l.ConnectionController.setRecentWallet(this.wallet);let t=U.ThemeController.state.themeVariables["--apkt-qr-color"]??U.ThemeController.state.themeVariables["--w3m-qr-color"];return o.html` <wui-qr-code
      theme=${U.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,N.ifDefined)(I.AssetUtil.getWalletImage(this.wallet))}
      color=${(0,N.ifDefined)(t)}
      alt=${(0,N.ifDefined)(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return o.html`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};W.styles=j,L([(0,i.property)({type:Boolean})],W.prototype,"basic",void 0),W=L([(0,f.customElement)("w3m-connecting-wc-qrcode")],W);var _=t;e.i(956303);let z=class extends _.LitElement{constructor(){if(super(),this.wallet=m.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");d.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:m.RouterController.state.view}})}render(){return o.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,N.ifDefined)(I.AssetUtil.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};z=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a}([(0,f.customElement)("w3m-connecting-wc-unsupported")],z);var M=x,F=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let B=class extends M.W3mConnectingWidget{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=R.ConstantsUtil.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(l.ConnectionController.subscribeKey("wcUri",()=>{this.updateLoadingState()})),d.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:m.RouterController.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:o,href:i}=c.CoreHelperUtil.formatUniversalUrl(e,this.uri);l.ConnectionController.setWcLinking({name:t,href:i}),l.ConnectionController.setRecentWallet(this.wallet),c.CoreHelperUtil.openHref(o,"_blank")}catch{this.error=!0}}};F([(0,r.state)()],B.prototype,"isLoading",void 0),B=F([(0,f.customElement)("w3m-connecting-wc-web")],B);let H=D.css`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var V=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let q=class extends t.LitElement{constructor(){super(),this.wallet=m.RouterController.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!h.OptionsController.state.siwx,this.remoteFeatures=h.OptionsController.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(h.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return h.OptionsController.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),o.html`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding&&this.displayBranding?o.html`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if("browser"!==this.platform&&(!h.OptionsController.state.manualWCControl||e))try{let{wcPairingExpiry:t,status:o}=l.ConnectionController.state,{redirectView:i}=m.RouterController.state.data??{};if(e||h.OptionsController.state.enableEmbedded||c.CoreHelperUtil.isPairingExpired(t)||"connecting"===o){let e=l.ConnectionController.getConnections(s.ChainController.state.activeChain),t=this.remoteFeatures?.multiWallet,o=e.length>0;await l.ConnectionController.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(o&&t?(m.RouterController.replace("ProfileWallets"),w.SnackController.showSuccess("New Wallet Added")):i?m.RouterController.replace(i):p.ModalController.close())}}catch(e){if(e instanceof Error&&e.message.includes("An error occurred when attempting to switch chain")&&!h.OptionsController.state.enableNetworkSwitch&&s.ChainController.state.activeChain){s.ChainController.setActiveCaipNetwork(g.CaipNetworksUtil.getUnsupportedNetwork(`${s.ChainController.state.activeChain}:${s.ChainController.state.activeCaipNetwork?.id}`)),s.ChainController.showUnsupportedChainUI();return}e instanceof a.AppKitError&&e.originalName===n.ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?d.EventsController.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):d.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),l.ConnectionController.setWcError(!0),w.SnackController.showError(e.message??"Connection error"),l.ConnectionController.resetWcConnection(),m.RouterController.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:o,injected:i,rdns:r}=this.wallet,n=i?.map(({injected_id:e})=>e).filter(Boolean),a=[...r?[r]:n??[]],d=!h.OptionsController.state.isUniversalProvider&&a.length,p=l.ConnectionController.checkInstalled(a),m=d&&p,w=t&&!c.CoreHelperUtil.isMobile();m&&!s.ChainController.state.noAdapters&&this.platforms.push("browser"),e&&this.platforms.push(c.CoreHelperUtil.isMobile()?"mobile":"qrcode"),o&&this.platforms.push("web"),w&&this.platforms.push("desktop");let f=u.MobileWalletUtil.isCustomDeeplinkWallet(this.wallet.id,s.ChainController.state.activeChain);m||!d||s.ChainController.state.noAdapters||f||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return o.html`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return o.html`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return o.html`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return o.html`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return o.html`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return o.html`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?o.html`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};q.styles=H,V([(0,r.state)()],q.prototype,"platform",void 0),V([(0,r.state)()],q.prototype,"platforms",void 0),V([(0,r.state)()],q.prototype,"isSiwxEnabled",void 0),V([(0,r.state)()],q.prototype,"remoteFeatures",void 0),V([(0,i.property)({type:Boolean})],q.prototype,"displayBranding",void 0),V([(0,i.property)({type:Boolean})],q.prototype,"basic",void 0),q=V([(0,f.customElement)("w3m-connecting-wc-view")],q),e.s(["W3mConnectingWcView",()=>q],90344);var K=t,G=e.i(886259),Y=e.i(758331);e.i(903134),e.i(212605);var X=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let J=class extends K.LitElement{constructor(){super(),this.unsubscribe=[],this.isMobile=c.CoreHelperUtil.isMobile(),this.remoteFeatures=h.OptionsController.state.remoteFeatures,this.unsubscribe.push(h.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){let{featured:e,recommended:t}=G.ApiController.state,{customWallets:i}=h.OptionsController.state,r=Y.StorageUtil.getRecentWallets(),n=e.length||t.length||i?.length||r.length;return o.html`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${n?o.html`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return o.html`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?o.html` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};X([(0,r.state)()],J.prototype,"isMobile",void 0),X([(0,r.state)()],J.prototype,"remoteFeatures",void 0),J=X([(0,f.customElement)("w3m-connecting-wc-basic-view")],J),e.s(["W3mConnectingWcBasicView",()=>J],612639);var Q=t,Z=e.i(576599),ee=e.i(564126);e.i(534420),e.i(746650);var et=e.i(979484),eo=e.i(592057);let ei=eo.css`
  .continue-button-container {
    width: 100%;
  }
`;var er=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let en=class extends Q.LitElement{constructor(){super(...arguments),this.loading=!1}render(){return o.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{c.CoreHelperUtil.openHref(Z.NavigationUtil.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return o.html` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return o.html`<wui-flex
      .padding=${["0","8","0","8"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){m.RouterController.push("RegisterAccountName"),d.EventsController.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:(0,ee.getPreferredAccountType)(s.ChainController.state.activeChain)===et.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}})}};en.styles=ei,er([(0,r.state)()],en.prototype,"loading",void 0),en=er([(0,f.customElement)("w3m-choose-account-name-view")],en),e.s(["W3mChooseAccountNameView",()=>en],669783);var ea=t;e.i(143053);let es=class extends ea.LitElement{constructor(){super(...arguments),this.wallet=m.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return o.html`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?o.html`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?o.html`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?o.html`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?o.html`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(d.EventsController.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),c.CoreHelperUtil.openHref(e.href,"_blank"))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};es=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a}([(0,f.customElement)("w3m-downloads-view")],es),e.s(["W3mDownloadsView",()=>es],108201);var el=t;let ec=class extends el.LitElement{render(){return o.html`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{c.CoreHelperUtil.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></w3m-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=G.ApiController.state,{customWallets:i}=h.OptionsController.state;return[...t,...i??[],...e].slice(0,4).map((e,t)=>o.html`
        <w3m-list-wallet
          displayIndex=${t}
          name=${e.name??"Unknown"}
          tagVariant="accent"
          size="sm"
          imageSrc=${(0,N.ifDefined)(I.AssetUtil.getWalletImage(e))}
          @click=${()=>{this.onWalletClick(e)}}
        ></w3m-list-wallet>
      `)}onWalletClick(e){d.EventsController.sendEvent({type:"track",event:"GET_WALLET",properties:{name:e.name,walletRank:void 0,explorerId:e.id,type:"homepage"}}),c.CoreHelperUtil.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}};ec=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a}([(0,f.customElement)("w3m-get-wallet-view")],ec),e.s(["W3mGetWalletView",()=>ec],64077);var ed=t,eu=t;e.i(357650);var ep=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let eh=class extends eu.LitElement{constructor(){super(...arguments),this.data=[]}render(){return o.html`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(e=>o.html`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${e.images.map(e=>o.html`<wui-visual size="sm" name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${e.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${e.text}</wui-text
              >
            </wui-flex>
          `)}
      </wui-flex>
    `}};ep([(0,i.property)({type:Array})],eh.prototype,"data",void 0),eh=ep([(0,f.customElement)("w3m-help-widget")],eh);let em=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],ew=class extends ed.LitElement{render(){return o.html`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${em}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){d.EventsController.sendEvent({type:"track",event:"CLICK_GET_WALLET_HELP"}),m.RouterController.push("GetWallet")}};ew=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a}([(0,f.customElement)("w3m-what-is-a-wallet-view")],ew),e.s(["W3mWhatIsAWalletView",()=>ew],667772);var ef=t,eg=e.i(455587);e.i(729084),e.i(391641);let eb=D.css`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var eC=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let ey=class extends ef.LitElement{constructor(){super(),this.unsubscribe=[],this.checked=eg.OptionsStateController.state.isLegalCheckboxChecked,this.unsubscribe.push(eg.OptionsStateController.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=h.OptionsController.state,i=h.OptionsController.state.features?.legalCheckbox,r=!!(e||t)&&!!i,n=r&&!this.checked;return o.html`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${r?["0","3","3","3"]:"3"}
        gap="2"
        class=${(0,N.ifDefined)(n?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${(0,N.ifDefined)(n?-1:void 0)}></w3m-wallet-login-list>
      </wui-flex>
    `}};ey.styles=eb,eC([(0,r.state)()],ey.prototype,"checked",void 0),ey=eC([(0,f.customElement)("w3m-connect-wallets-view")],ey),e.s(["W3mConnectWalletsView",()=>ey],744216);var ev=t,ex=e.i(401564),e$=e.i(218454),ek=t,eE=e.i(459088);let eS=D.css`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${e=>e.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,eR=class extends ek.LitElement{render(){return o.html`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};eR.styles=[eE.resetStyles,eS],eR=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a}([(0,f.customElement)("wui-loading-hexagon")],eR),e.i(774339);let eA=eo.css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var eO=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let eT=class extends ev.LitElement{constructor(){super(),this.network=m.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.getLabel(),t=this.getSubLabel();return o.html`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","10","5"]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,N.ifDefined)(I.AssetUtil.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:o.html`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${e}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){let e=v.ConnectorController.getConnectorId(s.ChainController.state.activeChain);return v.ConnectorController.getAuthConnector()&&e===ex.ConstantsUtil.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){let e=v.ConnectorController.getConnectorId(s.ChainController.state.activeChain);return v.ConnectorController.getAuthConnector()&&e===ex.ConstantsUtil.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,s.ChainController.state.activeChain!==this.network?.chainNamespace&&s.ChainController.setIsSwitchingNamespace(!0),this.network&&(await s.ChainController.switchActiveNetwork(this.network),await e$.SIWXUtil.isAuthenticated()&&m.RouterController.goBack())}catch(e){this.error=!0}}};eT.styles=eA,eO([(0,r.state)()],eT.prototype,"showRetry",void 0),eO([(0,r.state)()],eT.prototype,"error",void 0),eT=eO([(0,f.customElement)("w3m-network-switch-view")],eT),e.s(["W3mNetworkSwitchView",()=>eT],569962);var eN=t,eI=e.i(241845),eU=e.i(798852);e.i(6957);var eP=t;e.i(839009),e.i(496969);let eD=D.css`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var ej=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let eL=class extends eP.LitElement{constructor(){super(...arguments),this.imageSrc=void 0,this.name="Ethereum",this.disabled=!1}render(){return o.html`
      <button ?disabled=${this.disabled} tabindex=${(0,N.ifDefined)(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          ${this.imageTemplate()}
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}imageTemplate(){return this.imageSrc?o.html`<wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>`:o.html`<wui-image
      ?boxed=${!0}
      icon="networkPlaceholder"
      size="lg"
      iconColor="default"
    ></wui-image>`}};eL.styles=[eE.resetStyles,eE.elementStyles,eD],ej([(0,i.property)()],eL.prototype,"imageSrc",void 0),ej([(0,i.property)()],eL.prototype,"name",void 0),ej([(0,i.property)()],eL.prototype,"tabIdx",void 0),ej([(0,i.property)({type:Boolean})],eL.prototype,"disabled",void 0),eL=ej([(0,f.customElement)("wui-list-network")],eL);let eW=eo.css`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var e_=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let ez=class extends eN.LitElement{constructor(){super(),this.unsubscribe=[],this.network=s.ChainController.state.activeCaipNetwork,this.requestedCaipNetworks=s.ChainController.getCaipNetworks(),this.search="",this.onDebouncedSearch=c.CoreHelperUtil.debounce(e=>{this.search=e},100),this.unsubscribe.push(eI.AssetController.subscribeNetworkImages(()=>this.requestUpdate()),s.ChainController.subscribeKey("activeCaipNetwork",e=>this.network=e),s.ChainController.subscribe(()=>{this.requestedCaipNetworks=s.ChainController.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.html`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","3","3","3"]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `}templateSearchInput(){return o.html`
      <wui-flex gap="2" .padding=${["0","3","3","3"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}networksTemplate(){let e=s.ChainController.getAllApprovedCaipNetworkIds(),t=c.CoreHelperUtil.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.search?this.filteredNetworks=t?.filter(e=>e?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=t,this.filteredNetworks?.map(e=>o.html`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${(0,N.ifDefined)(I.AssetUtil.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${s.ChainController.isCaipNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `)}onSwitchNetwork(e){eU.NetworkUtil.onSwitchNetwork({network:e})}};ez.styles=eW,e_([(0,r.state)()],ez.prototype,"network",void 0),e_([(0,r.state)()],ez.prototype,"requestedCaipNetworks",void 0),e_([(0,r.state)()],ez.prototype,"filteredNetworks",void 0),e_([(0,r.state)()],ez.prototype,"search",void 0),ez=e_([(0,f.customElement)("w3m-networks-view")],ez),e.s(["W3mNetworksView",()=>ez],505676);var eM=t;let eF=D.css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({borderRadius:e})=>e["1"]} * 9 - ${({borderRadius:e})=>e["3"]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({borderRadius:e})=>e["1"]} * 9 - ${({borderRadius:e})=>e["3"]}
    );
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e["1"]} * -1);
    bottom: calc(${({spacing:e})=>e["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:e})=>e["01"]} ${({spacing:e})=>e["2"]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var eB=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let eH={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0},eV=class extends eM.LitElement{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=m.RouterController.state.data?.switchToChain,this.caipNetwork=m.RouterController.state.data?.network,this.activeChain=s.ChainController.state.activeChain}firstUpdated(){this.unsubscribe.push(s.ChainController.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.switchToChain?ex.ConstantsUtil.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;let t=ex.ConstantsUtil.CHAIN_NAME_MAP[this.switchToChain];return o.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","2","2","2"]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${(0,N.ifDefined)(eH[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column" alignItems="center">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${t}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${t}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${e} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(s.ChainController.setIsSwitchingNamespace(!0),v.ConnectorController.setFilterByNamespace(this.switchToChain),this.caipNetwork?await s.ChainController.switchActiveNetwork(this.caipNetwork):s.ChainController.setActiveNamespace(this.switchToChain),m.RouterController.reset("Connect"))}};eV.styles=eF,eB([(0,i.property)()],eV.prototype,"activeChain",void 0),eV=eB([(0,f.customElement)("w3m-switch-active-chain-view")],eV),e.s(["W3mSwitchActiveChainView",()=>eV],317016);var eq=t;let eK=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],eG=class extends eq.LitElement{render(){return o.html`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${eK}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{c.CoreHelperUtil.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};eG=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a}([(0,f.customElement)("w3m-what-is-a-network-view")],eG),e.s(["W3mWhatIsANetworkView",()=>eG],843476);var eY=t;e.i(79929);let eX=eo.css`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var eJ=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let eQ=class extends eY.LitElement{constructor(){super(),this.swapUnsupportedChain=m.RouterController.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=h.OptionsController.state.remoteFeatures,this.unsubscribe.push(eI.AssetController.subscribeNetworkImages(()=>this.requestUpdate()),h.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.html`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["3","5","2","5"]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?o.html`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:o.html`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){let e=s.ChainController.getAllRequestedCaipNetworks(),t=s.ChainController.getAllApprovedCaipNetworkIds(),i=c.CoreHelperUtil.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?i.filter(e=>R.ConstantsUtil.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId)):i).map(e=>o.html`
        <wui-list-network
          imageSrc=${(0,N.ifDefined)(I.AssetUtil.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconnecting=!0;let e=s.ChainController.state.activeChain,t=l.ConnectionController.getConnections(e).length>0,o=e&&v.ConnectorController.state.activeConnectorIds[e],i=this.remoteFeatures?.multiWallet;await l.ConnectionController.disconnect(i?{id:o,namespace:e}:{}),t&&i&&(m.RouterController.push("ProfileWallets"),w.SnackController.showSuccess("Wallet deleted"))}catch{d.EventsController.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),w.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(e){let t=s.ChainController.getActiveCaipAddress(),o=s.ChainController.getAllApprovedCaipNetworkIds(),i=(s.ChainController.getNetworkProp("supportsAllNetworks",e.chainNamespace),m.RouterController.state.data);t?o?.includes(e.caipNetworkId)?await s.ChainController.switchActiveNetwork(e):m.RouterController.push("SwitchNetwork",{...i,network:e}):t||(s.ChainController.setActiveCaipNetwork(e),m.RouterController.push("Connect"))}};eQ.styles=eX,eJ([(0,r.state)()],eQ.prototype,"disconnecting",void 0),eJ([(0,r.state)()],eQ.prototype,"remoteFeatures",void 0),eQ=eJ([(0,f.customElement)("w3m-unsupported-chain-view")],eQ),e.s(["W3mUnsupportedChainView",()=>eQ],516519);var eZ=t,e0=t;e.i(912190);let e3=D.css`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({tokens:e})=>e.core.textSuccess};
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({tokens:e})=>e.core.textError};
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({tokens:e})=>e.core.textWarning};
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`;var e1=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let e2=class extends e0.LitElement{constructor(){super(...arguments),this.icon="externalLink",this.text="",this.type="info"}render(){return o.html`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `}};e2.styles=[eE.resetStyles,eE.elementStyles,e3],e1([(0,i.property)()],e2.prototype,"icon",void 0),e1([(0,i.property)()],e2.prototype,"text",void 0),e1([(0,i.property)()],e2.prototype,"type",void 0),e2=e1([(0,f.customElement)("wui-banner")],e2);let e5=eo.css`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,e4=class extends eZ.LitElement{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.html` <wui-flex flexDirection="column" .padding=${["2","3","3","3"]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=s.ChainController.getAllRequestedCaipNetworks(),t=s.ChainController.getAllApprovedCaipNetworkIds(),i=s.ChainController.state.activeCaipNetwork,r=s.ChainController.checkIfSmartAccountEnabled(),n=c.CoreHelperUtil.sortRequestedNetworks(t,e);if(r&&(0,ee.getPreferredAccountType)(i?.chainNamespace)===et.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT){if(!i)return null;n=[i]}return n.filter(e=>e.chainNamespace===i?.chainNamespace).map(e=>o.html`
        <wui-list-network
          imageSrc=${(0,N.ifDefined)(I.AssetUtil.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};e4.styles=e5,e4=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a}([(0,f.customElement)("w3m-wallet-compatible-networks-view")],e4),e.s(["W3mWalletCompatibleNetworksView",()=>e4],427159);var e6=t,e8=t,e9=t;e.i(852634),e.i(864380);let e7=D.css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var te=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let tt=class extends e9.LitElement{render(){return this.dataset.borderRadiusFull=this.borderRadiusFull?"true":"false",o.html`${this.templateVisual()}`}templateVisual(){return this.imageSrc?o.html`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:o.html`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};tt.styles=[eE.resetStyles,e7],te([(0,i.property)()],tt.prototype,"imageSrc",void 0),te([(0,i.property)()],tt.prototype,"alt",void 0),te([(0,i.property)({type:Boolean})],tt.prototype,"borderRadiusFull",void 0),tt=te([(0,f.customElement)("wui-visual-thumbnail")],tt);let to=D.css`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({spacing:e})=>e["4"]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`,ti=class extends e8.LitElement{constructor(){super(...arguments),this.dappImageUrl=h.OptionsController.state.metadata?.icons,this.walletImageUrl=s.ChainController.getAccountData()?.connectedWalletInfo?.icon}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return o.html`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};ti.styles=to,ti=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a}([(0,f.customElement)("w3m-siwx-sign-message-thumbnails")],ti);var tr=function(e,t,o,i){var r,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,o,a):r(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let tn=class extends e6.LitElement{constructor(){super(...arguments),this.dappName=h.OptionsController.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return o.html`
      <wui-flex justifyContent="center" .padding=${["8","0","6","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${["0","20","5","20"]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["0","10","4","10"]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["4","5","5","5"]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await e$.SIWXUtil.requestSignMessage()}catch(e){if(e instanceof Error&&e.message.includes("OTP is required")){w.SnackController.showError({message:"Something went wrong. We need to verify your account again."}),m.RouterController.replace("DataCapture");return}throw e}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await e$.SIWXUtil.cancelSignMessage().finally(()=>this.isCancelling=!1)}};tr([(0,r.state)()],tn.prototype,"isCancelling",void 0),tr([(0,r.state)()],tn.prototype,"isSigning",void 0),tn=tr([(0,f.customElement)("w3m-siwx-sign-message-view")],tn),e.s(["W3mSIWXSignMessageView",()=>tn],149566),e.s([],910842)}]);