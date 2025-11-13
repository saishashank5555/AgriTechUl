(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function c(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(f){if(f.ep)return;f.ep=!0;const p=c(f);fetch(f.href,p)}})();function ox(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Rc={exports:{}},Ni={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function sx(){if(hh)return Ni;hh=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(u,f,p){var h=null;if(p!==void 0&&(h=""+p),f.key!==void 0&&(h=""+f.key),"key"in f){p={};for(var x in f)x!=="key"&&(p[x]=f[x])}else p=f;return f=p.ref,{$$typeof:l,type:u,key:h,ref:f!==void 0?f:null,props:p}}return Ni.Fragment=s,Ni.jsx=c,Ni.jsxs=c,Ni}var mh;function cx(){return mh||(mh=1,Rc.exports=sx()),Rc.exports}var r=cx(),Mc={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh;function ux(){if(gh)return ge;gh=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),h=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),L=Symbol.iterator;function V(A){return A===null||typeof A!="object"?null:(A=L&&A[L]||A["@@iterator"],typeof A=="function"?A:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,D={};function X(A,H,K){this.props=A,this.context=H,this.refs=D,this.updater=K||w}X.prototype.isReactComponent={},X.prototype.setState=function(A,H){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,H,"setState")},X.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function I(){}I.prototype=X.prototype;function ee(A,H,K){this.props=A,this.context=H,this.refs=D,this.updater=K||w}var me=ee.prototype=new I;me.constructor=ee,R(me,X.prototype),me.isPureReactComponent=!0;var le=Array.isArray;function pe(){}var ae={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function ue(A,H,K){var W=K.ref;return{$$typeof:l,type:A,key:H,ref:W!==void 0?W:null,props:K}}function De(A,H){return ue(A.type,H,A.props)}function Me(A){return typeof A=="object"&&A!==null&&A.$$typeof===l}function we(A){var H={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(K){return H[K]})}var Ye=/\/+/g;function Te(A,H){return typeof A=="object"&&A!==null&&A.key!=null?we(""+A.key):H.toString(36)}function Xe(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(pe,pe):(A.status="pending",A.then(function(H){A.status==="pending"&&(A.status="fulfilled",A.value=H)},function(H){A.status==="pending"&&(A.status="rejected",A.reason=H)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function B(A,H,K,W,se){var he=typeof A;(he==="undefined"||he==="boolean")&&(A=null);var Be=!1;if(A===null)Be=!0;else switch(he){case"bigint":case"string":case"number":Be=!0;break;case"object":switch(A.$$typeof){case l:case s:Be=!0;break;case y:return Be=A._init,B(Be(A._payload),H,K,W,se)}}if(Be)return se=se(A),Be=W===""?"."+Te(A,0):W,le(se)?(K="",Be!=null&&(K=Be.replace(Ye,"$&/")+"/"),B(se,H,K,"",function(Bt){return Bt})):se!=null&&(Me(se)&&(se=De(se,K+(se.key==null||A&&A.key===se.key?"":(""+se.key).replace(Ye,"$&/")+"/")+Be)),H.push(se)),1;Be=0;var tt=W===""?".":W+":";if(le(A))for(var Fe=0;Fe<A.length;Fe++)W=A[Fe],he=tt+Te(W,Fe),Be+=B(W,H,K,he,se);else if(Fe=V(A),typeof Fe=="function")for(A=Fe.call(A),Fe=0;!(W=A.next()).done;)W=W.value,he=tt+Te(W,Fe++),Be+=B(W,H,K,he,se);else if(he==="object"){if(typeof A.then=="function")return B(Xe(A),H,K,W,se);throw H=String(A),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return Be}function P(A,H,K){if(A==null)return A;var W=[],se=0;return B(A,W,"","",function(he){return H.call(K,he,se++)}),W}function ne(A){if(A._status===-1){var H=A._result;H=H(),H.then(function(K){(A._status===0||A._status===-1)&&(A._status=1,A._result=K)},function(K){(A._status===0||A._status===-1)&&(A._status=2,A._result=K)}),A._status===-1&&(A._status=0,A._result=H)}if(A._status===1)return A._result.default;throw A._result}var xe=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},fe={map:P,forEach:function(A,H,K){P(A,function(){H.apply(this,arguments)},K)},count:function(A){var H=0;return P(A,function(){H++}),H},toArray:function(A){return P(A,function(H){return H})||[]},only:function(A){if(!Me(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ge.Activity=j,ge.Children=fe,ge.Component=X,ge.Fragment=c,ge.Profiler=f,ge.PureComponent=ee,ge.StrictMode=u,ge.Suspense=b,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,ge.__COMPILER_RUNTIME={__proto__:null,c:function(A){return ae.H.useMemoCache(A)}},ge.cache=function(A){return function(){return A.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(A,H,K){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var W=R({},A.props),se=A.key;if(H!=null)for(he in H.key!==void 0&&(se=""+H.key),H)!re.call(H,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&H.ref===void 0||(W[he]=H[he]);var he=arguments.length-2;if(he===1)W.children=K;else if(1<he){for(var Be=Array(he),tt=0;tt<he;tt++)Be[tt]=arguments[tt+2];W.children=Be}return ue(A.type,se,W)},ge.createContext=function(A){return A={$$typeof:h,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:p,_context:A},A},ge.createElement=function(A,H,K){var W,se={},he=null;if(H!=null)for(W in H.key!==void 0&&(he=""+H.key),H)re.call(H,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(se[W]=H[W]);var Be=arguments.length-2;if(Be===1)se.children=K;else if(1<Be){for(var tt=Array(Be),Fe=0;Fe<Be;Fe++)tt[Fe]=arguments[Fe+2];se.children=tt}if(A&&A.defaultProps)for(W in Be=A.defaultProps,Be)se[W]===void 0&&(se[W]=Be[W]);return ue(A,he,se)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(A){return{$$typeof:x,render:A}},ge.isValidElement=Me,ge.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:ne}},ge.memo=function(A,H){return{$$typeof:m,type:A,compare:H===void 0?null:H}},ge.startTransition=function(A){var H=ae.T,K={};ae.T=K;try{var W=A(),se=ae.S;se!==null&&se(K,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(pe,xe)}catch(he){xe(he)}finally{H!==null&&K.types!==null&&(H.types=K.types),ae.T=H}},ge.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},ge.use=function(A){return ae.H.use(A)},ge.useActionState=function(A,H,K){return ae.H.useActionState(A,H,K)},ge.useCallback=function(A,H){return ae.H.useCallback(A,H)},ge.useContext=function(A){return ae.H.useContext(A)},ge.useDebugValue=function(){},ge.useDeferredValue=function(A,H){return ae.H.useDeferredValue(A,H)},ge.useEffect=function(A,H){return ae.H.useEffect(A,H)},ge.useEffectEvent=function(A){return ae.H.useEffectEvent(A)},ge.useId=function(){return ae.H.useId()},ge.useImperativeHandle=function(A,H,K){return ae.H.useImperativeHandle(A,H,K)},ge.useInsertionEffect=function(A,H){return ae.H.useInsertionEffect(A,H)},ge.useLayoutEffect=function(A,H){return ae.H.useLayoutEffect(A,H)},ge.useMemo=function(A,H){return ae.H.useMemo(A,H)},ge.useOptimistic=function(A,H){return ae.H.useOptimistic(A,H)},ge.useReducer=function(A,H,K){return ae.H.useReducer(A,H,K)},ge.useRef=function(A){return ae.H.useRef(A)},ge.useState=function(A){return ae.H.useState(A)},ge.useSyncExternalStore=function(A,H,K){return ae.H.useSyncExternalStore(A,H,K)},ge.useTransition=function(){return ae.H.useTransition()},ge.version="19.2.0",ge}var xh;function so(){return xh||(xh=1,Mc.exports=ux()),Mc.exports}var E=so();const Rn=ox(E);var Dc={exports:{}},zi={},Uc={exports:{}},Hc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh;function fx(){return bh||(bh=1,(function(l){function s(B,P){var ne=B.length;B.push(P);e:for(;0<ne;){var xe=ne-1>>>1,fe=B[xe];if(0<f(fe,P))B[xe]=P,B[ne]=fe,ne=xe;else break e}}function c(B){return B.length===0?null:B[0]}function u(B){if(B.length===0)return null;var P=B[0],ne=B.pop();if(ne!==P){B[0]=ne;e:for(var xe=0,fe=B.length,A=fe>>>1;xe<A;){var H=2*(xe+1)-1,K=B[H],W=H+1,se=B[W];if(0>f(K,ne))W<fe&&0>f(se,K)?(B[xe]=se,B[W]=ne,xe=W):(B[xe]=K,B[H]=ne,xe=H);else if(W<fe&&0>f(se,ne))B[xe]=se,B[W]=ne,xe=W;else break e}}return P}function f(B,P){var ne=B.sortIndex-P.sortIndex;return ne!==0?ne:B.id-P.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var h=Date,x=h.now();l.unstable_now=function(){return h.now()-x}}var b=[],m=[],y=1,j=null,L=3,V=!1,w=!1,R=!1,D=!1,X=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function me(B){for(var P=c(m);P!==null;){if(P.callback===null)u(m);else if(P.startTime<=B)u(m),P.sortIndex=P.expirationTime,s(b,P);else break;P=c(m)}}function le(B){if(R=!1,me(B),!w)if(c(b)!==null)w=!0,pe||(pe=!0,we());else{var P=c(m);P!==null&&Xe(le,P.startTime-B)}}var pe=!1,ae=-1,re=5,ue=-1;function De(){return D?!0:!(l.unstable_now()-ue<re)}function Me(){if(D=!1,pe){var B=l.unstable_now();ue=B;var P=!0;try{e:{w=!1,R&&(R=!1,I(ae),ae=-1),V=!0;var ne=L;try{t:{for(me(B),j=c(b);j!==null&&!(j.expirationTime>B&&De());){var xe=j.callback;if(typeof xe=="function"){j.callback=null,L=j.priorityLevel;var fe=xe(j.expirationTime<=B);if(B=l.unstable_now(),typeof fe=="function"){j.callback=fe,me(B),P=!0;break t}j===c(b)&&u(b),me(B)}else u(b);j=c(b)}if(j!==null)P=!0;else{var A=c(m);A!==null&&Xe(le,A.startTime-B),P=!1}}break e}finally{j=null,L=ne,V=!1}P=void 0}}finally{P?we():pe=!1}}}var we;if(typeof ee=="function")we=function(){ee(Me)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,Te=Ye.port2;Ye.port1.onmessage=Me,we=function(){Te.postMessage(null)}}else we=function(){X(Me,0)};function Xe(B,P){ae=X(function(){B(l.unstable_now())},P)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(B){B.callback=null},l.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<B?Math.floor(1e3/B):5},l.unstable_getCurrentPriorityLevel=function(){return L},l.unstable_next=function(B){switch(L){case 1:case 2:case 3:var P=3;break;default:P=L}var ne=L;L=P;try{return B()}finally{L=ne}},l.unstable_requestPaint=function(){D=!0},l.unstable_runWithPriority=function(B,P){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ne=L;L=B;try{return P()}finally{L=ne}},l.unstable_scheduleCallback=function(B,P,ne){var xe=l.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?xe+ne:xe):ne=xe,B){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ne+fe,B={id:y++,callback:P,priorityLevel:B,startTime:ne,expirationTime:fe,sortIndex:-1},ne>xe?(B.sortIndex=ne,s(m,B),c(b)===null&&B===c(m)&&(R?(I(ae),ae=-1):R=!0,Xe(le,ne-xe))):(B.sortIndex=fe,s(b,B),w||V||(w=!0,pe||(pe=!0,we()))),B},l.unstable_shouldYield=De,l.unstable_wrapCallback=function(B){var P=L;return function(){var ne=L;L=P;try{return B.apply(this,arguments)}finally{L=ne}}}})(Hc)),Hc}var yh;function dx(){return yh||(yh=1,Uc.exports=fx()),Uc.exports}var Lc={exports:{}},zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh;function px(){if(vh)return zt;vh=1;var l=so();function s(b){var m="https://react.dev/errors/"+b;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+b+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(b,m,y){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:j==null?null:""+j,children:b,containerInfo:m,implementation:y}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(b,m){if(b==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,zt.createPortal=function(b,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(s(299));return p(b,m,null,y)},zt.flushSync=function(b){var m=h.T,y=u.p;try{if(h.T=null,u.p=2,b)return b()}finally{h.T=m,u.p=y,u.d.f()}},zt.preconnect=function(b,m){typeof b=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(b,m))},zt.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},zt.preinit=function(b,m){if(typeof b=="string"&&m&&typeof m.as=="string"){var y=m.as,j=x(y,m.crossOrigin),L=typeof m.integrity=="string"?m.integrity:void 0,V=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?u.d.S(b,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:j,integrity:L,fetchPriority:V}):y==="script"&&u.d.X(b,{crossOrigin:j,integrity:L,fetchPriority:V,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},zt.preinitModule=function(b,m){if(typeof b=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=x(m.as,m.crossOrigin);u.d.M(b,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(b)},zt.preload=function(b,m){if(typeof b=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,j=x(y,m.crossOrigin);u.d.L(b,y,{crossOrigin:j,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},zt.preloadModule=function(b,m){if(typeof b=="string")if(m){var y=x(m.as,m.crossOrigin);u.d.m(b,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(b)},zt.requestFormReset=function(b){u.d.r(b)},zt.unstable_batchedUpdates=function(b,m){return b(m)},zt.useFormState=function(b,m,y){return h.H.useFormState(b,m,y)},zt.useFormStatus=function(){return h.H.useHostTransitionStatus()},zt.version="19.2.0",zt}var Ah;function hx(){if(Ah)return Lc.exports;Ah=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),Lc.exports=px(),Lc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jh;function mx(){if(jh)return zi;jh=1;var l=dx(),s=so(),c=hx();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(p(e)!==e)throw Error(u(188))}function m(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===a)return b(i),e;if(o===n)return b(i),t;o=o.sibling}throw Error(u(188))}if(a.return!==n.return)a=i,n=o;else{for(var d=!1,g=i.child;g;){if(g===a){d=!0,a=i,n=o;break}if(g===n){d=!0,n=i,a=o;break}g=g.sibling}if(!d){for(g=o.child;g;){if(g===a){d=!0,a=o,n=i;break}if(g===n){d=!0,n=o,a=i;break}g=g.sibling}if(!d)throw Error(u(189))}}if(a.alternate!==n)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,L=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),ue=Symbol.for("react.activity"),De=Symbol.for("react.memo_cache_sentinel"),Me=Symbol.iterator;function we(e){return e===null||typeof e!="object"?null:(e=Me&&e[Me]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Symbol.for("react.client.reference");function Te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case X:return"Profiler";case D:return"StrictMode";case le:return"Suspense";case pe:return"SuspenseList";case ue:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case ee:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case me:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return t=e.displayName||null,t!==null?t:Te(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return Te(e(t))}catch{}}return null}var Xe=Array.isArray,B=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},xe=[],fe=-1;function A(e){return{current:e}}function H(e){0>fe||(e.current=xe[fe],xe[fe]=null,fe--)}function K(e,t){fe++,xe[fe]=e.current,e.current=t}var W=A(null),se=A(null),he=A(null),Be=A(null);function tt(e,t){switch(K(he,t),K(se,e),K(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Lp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Lp(t),e=qp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(W),K(W,e)}function Fe(){H(W),H(se),H(he)}function Bt(e){e.memoizedState!==null&&K(Be,e);var t=W.current,a=qp(t,e.type);t!==a&&(K(se,e),K(W,a))}function rt(e){se.current===e&&(H(W),H(se)),Be.current===e&&(H(Be),ji._currentValue=ne)}var Nt,vt;function va(e){if(Nt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Nt=t&&t[1]||"",vt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+e+vt}var Un=!1;function Hn(e,t){if(!e||Un)return"";Un=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(U){var T=U}Reflect.construct(e,[],G)}else{try{G.call()}catch(U){T=U}e.call(G.prototype)}}else{try{throw Error()}catch(U){T=U}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(U){if(U&&T&&typeof U.stack=="string")return[U.stack,T.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),d=o[0],g=o[1];if(d&&g){var v=d.split(`
`),C=g.split(`
`);for(i=n=0;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;for(;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;if(n===v.length||i===C.length)for(n=v.length-1,i=C.length-1;1<=n&&0<=i&&v[n]!==C[i];)i--;for(;1<=n&&0<=i;n--,i--)if(v[n]!==C[i]){if(n!==1||i!==1)do if(n--,i--,0>i||v[n]!==C[i]){var k=`
`+v[n].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=n&&0<=i);break}}}finally{Un=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?va(a):""}function vo(e,t){switch(e.tag){case 26:case 27:case 5:return va(e.type);case 16:return va("Lazy");case 13:return e.child!==t&&t!==null?va("Suspense Fallback"):va("Suspense");case 19:return va("SuspenseList");case 0:case 15:return Hn(e.type,!1);case 11:return Hn(e.type.render,!1);case 1:return Hn(e.type,!0);case 31:return va("Activity");default:return""}}function dn(e){try{var t="",a=null;do t+=vo(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Ml=Object.prototype.hasOwnProperty,Ln=l.unstable_scheduleCallback,pn=l.unstable_cancelCallback,qn=l.unstable_shouldYield,Dl=l.unstable_requestPaint,Ot=l.unstable_now,Z=l.unstable_getCurrentPriorityLevel,O=l.unstable_ImmediatePriority,F=l.unstable_UserBlockingPriority,J=l.unstable_NormalPriority,Ae=l.unstable_LowPriority,Se=l.unstable_IdlePriority,Le=l.log,q=l.unstable_setDisableYieldValue,Y=null,$=null;function te(e){if(typeof Le=="function"&&q(e),$&&typeof $.setStrictMode=="function")try{$.setStrictMode(Y,e)}catch{}}var _=Math.clz32?Math.clz32:Ie,Ee=Math.log,We=Math.LN2;function Ie(e){return e>>>=0,e===0?32:31-(Ee(e)/We|0)|0}var Ve=256,ot=262144,_e=4194304;function at(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ra(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var g=n&134217727;return g!==0?(n=g&~o,n!==0?i=at(n):(d&=g,d!==0?i=at(d):a||(a=g&~e,a!==0&&(i=at(a))))):(g=n&~o,g!==0?i=at(g):d!==0?i=at(d):a||(a=n&~e,a!==0&&(i=at(a)))),i===0?0:t!==0&&t!==i&&(t&o)===0&&(o=i&-i,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:i}function Qt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Vn(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ul(){var e=_e;return _e<<=1,(_e&62914560)===0&&(_e=4194304),e}function kn(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Hl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pm(e,t,a,n,i,o){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var g=e.entanglements,v=e.expirationTimes,C=e.hiddenUpdates;for(a=d&~a;0<a;){var k=31-_(a),G=1<<k;g[k]=0,v[k]=-1;var T=C[k];if(T!==null)for(C[k]=null,k=0;k<T.length;k++){var U=T[k];U!==null&&(U.lane&=-536870913)}a&=~G}n!==0&&bu(e,n,0),o!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=o&~(d&~t))}function bu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-_(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function yu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-_(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function vu(e,t){var a=t&-t;return a=(a&42)!==0?1:Ao(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ao(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Au(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:oh(e.type))}function ju(e,t){var a=P.p;try{return P.p=e,t()}finally{P.p=a}}var Qa=Math.random().toString(36).slice(2),At="__reactFiber$"+Qa,Rt="__reactProps$"+Qa,Qn="__reactContainer$"+Qa,wo="__reactEvents$"+Qa,Wm="__reactListeners$"+Qa,Im="__reactHandles$"+Qa,wu="__reactResources$"+Qa,Ll="__reactMarker$"+Qa;function So(e){delete e[At],delete e[Rt],delete e[wo],delete e[Wm],delete e[Im]}function Yn(e){var t=e[At];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Qn]||a[At]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Zp(e);e!==null;){if(a=e[At])return a;e=Zp(e)}return t}e=a,a=e.parentNode}return null}function Gn(e){if(e=e[At]||e[Qn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ql(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Kn(e){var t=e[wu];return t||(t=e[wu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function bt(e){e[Ll]=!0}var Su=new Set,Eu={};function hn(e,t){Zn(e,t),Zn(e+"Capture",t)}function Zn(e,t){for(Eu[e]=t,e=0;e<t.length;e++)Su.add(t[e])}var _m=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nu={},zu={};function $m(e){return Ml.call(zu,e)?!0:Ml.call(Nu,e)?!1:_m.test(e)?zu[e]=!0:(Nu[e]=!0,!1)}function qi(e,t,a){if($m(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Vi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Aa(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Pt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function eg(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){a=""+d,o.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eo(e){if(!e._valueTracker){var t=Cu(e)?"checked":"value";e._valueTracker=eg(e,t,""+e[t])}}function Ou(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Cu(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var tg=/[\n"\\]/g;function Wt(e){return e.replace(tg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function No(e,t,a,n,i,o,d,g){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Pt(t)):e.value!==""+Pt(t)&&(e.value=""+Pt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?zo(e,d,Pt(t)):a!=null?zo(e,d,Pt(a)):n!=null&&e.removeAttribute("value"),i==null&&o!=null&&(e.defaultChecked=!!o),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Pt(g):e.removeAttribute("name")}function Tu(e,t,a,n,i,o,d,g){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Eo(e);return}a=a!=null?""+Pt(a):"",t=t!=null?""+Pt(t):a,g||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=g?e.checked:!!n,e.defaultChecked=!!n,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Eo(e)}function zo(e,t,a){t==="number"&&ki(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Xn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Pt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bu(e,t,a){if(t!=null&&(t=""+Pt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Pt(a):""}function Ru(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(u(92));if(Xe(n)){if(1<n.length)throw Error(u(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Pt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Eo(e)}function Fn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var ag=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||ag.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Du(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Mu(e,i,n)}else for(var o in t)t.hasOwnProperty(o)&&Mu(e,o,t[o])}function Co(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ng=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qi(e){return lg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ja(){}var Oo=null;function To(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jn=null,Pn=null;function Uu(e){var t=Gn(e);if(t&&(e=t.stateNode)){var a=e[Rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(No(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Wt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[Rt]||null;if(!i)throw Error(u(90));No(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Ou(n)}break e;case"textarea":Bu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Xn(e,!!a.multiple,t,!1)}}}var Bo=!1;function Hu(e,t,a){if(Bo)return e(t,a);Bo=!0;try{var n=e(t);return n}finally{if(Bo=!1,(Jn!==null||Pn!==null)&&(Cr(),Jn&&(t=Jn,e=Pn,Pn=Jn=null,Uu(t),e)))for(t=0;t<e.length;t++)Uu(e[t])}}function Vl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Rt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var wa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ro=!1;if(wa)try{var kl={};Object.defineProperty(kl,"passive",{get:function(){Ro=!0}}),window.addEventListener("test",kl,kl),window.removeEventListener("test",kl,kl)}catch{Ro=!1}var Ya=null,Mo=null,Yi=null;function Lu(){if(Yi)return Yi;var e,t=Mo,a=t.length,n,i="value"in Ya?Ya.value:Ya.textContent,o=i.length;for(e=0;e<a&&t[e]===i[e];e++);var d=a-e;for(n=1;n<=d&&t[a-n]===i[o-n];n++);return Yi=i.slice(e,1<n?1-n:void 0)}function Gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ki(){return!0}function qu(){return!1}function Mt(e){function t(a,n,i,o,d){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(a=e[g],this[g]=a?a(o):o[g]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ki:qu,this.isPropagationStopped=qu,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zi=Mt(mn),Ql=j({},mn,{view:0,detail:0}),ig=Mt(Ql),Do,Uo,Yl,Xi=j({},Ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yl&&(Yl&&e.type==="mousemove"?(Do=e.screenX-Yl.screenX,Uo=e.screenY-Yl.screenY):Uo=Do=0,Yl=e),Do)},movementY:function(e){return"movementY"in e?e.movementY:Uo}}),Vu=Mt(Xi),rg=j({},Xi,{dataTransfer:0}),og=Mt(rg),sg=j({},Ql,{relatedTarget:0}),Ho=Mt(sg),cg=j({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),ug=Mt(cg),fg=j({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dg=Mt(fg),pg=j({},mn,{data:0}),ku=Mt(pg),hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gg[e])?!!t[e]:!1}function Lo(){return xg}var bg=j({},Ql,{key:function(e){if(e.key){var t=hg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lo,charCode:function(e){return e.type==="keypress"?Gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yg=Mt(bg),vg=j({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qu=Mt(vg),Ag=j({},Ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lo}),jg=Mt(Ag),wg=j({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sg=Mt(wg),Eg=j({},Xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ng=Mt(Eg),zg=j({},mn,{newState:0,oldState:0}),Cg=Mt(zg),Og=[9,13,27,32],qo=wa&&"CompositionEvent"in window,Gl=null;wa&&"documentMode"in document&&(Gl=document.documentMode);var Tg=wa&&"TextEvent"in window&&!Gl,Yu=wa&&(!qo||Gl&&8<Gl&&11>=Gl),Gu=" ",Ku=!1;function Zu(e,t){switch(e){case"keyup":return Og.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function Bg(e,t){switch(e){case"compositionend":return Xu(t);case"keypress":return t.which!==32?null:(Ku=!0,Gu);case"textInput":return e=t.data,e===Gu&&Ku?null:e;default:return null}}function Rg(e,t){if(Wn)return e==="compositionend"||!qo&&Zu(e,t)?(e=Lu(),Yi=Mo=Ya=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yu&&t.locale!=="ko"?null:t.data;default:return null}}var Mg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mg[e.type]:t==="textarea"}function Ju(e,t,a,n){Jn?Pn?Pn.push(n):Pn=[n]:Jn=n,t=Ur(t,"onChange"),0<t.length&&(a=new Zi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Kl=null,Zl=null;function Dg(e){Bp(e,0)}function Fi(e){var t=ql(e);if(Ou(t))return e}function Pu(e,t){if(e==="change")return t}var Wu=!1;if(wa){var Vo;if(wa){var ko="oninput"in document;if(!ko){var Iu=document.createElement("div");Iu.setAttribute("oninput","return;"),ko=typeof Iu.oninput=="function"}Vo=ko}else Vo=!1;Wu=Vo&&(!document.documentMode||9<document.documentMode)}function _u(){Kl&&(Kl.detachEvent("onpropertychange",$u),Zl=Kl=null)}function $u(e){if(e.propertyName==="value"&&Fi(Zl)){var t=[];Ju(t,Zl,e,To(e)),Hu(Dg,t)}}function Ug(e,t,a){e==="focusin"?(_u(),Kl=t,Zl=a,Kl.attachEvent("onpropertychange",$u)):e==="focusout"&&_u()}function Hg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fi(Zl)}function Lg(e,t){if(e==="click")return Fi(t)}function qg(e,t){if(e==="input"||e==="change")return Fi(t)}function Vg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:Vg;function Xl(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Ml.call(t,i)||!Yt(e[i],t[i]))return!1}return!0}function ef(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tf(e,t){var a=ef(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ef(a)}}function af(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?af(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ki(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ki(e.document)}return t}function Qo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var kg=wa&&"documentMode"in document&&11>=document.documentMode,In=null,Yo=null,Fl=null,Go=!1;function lf(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Go||In==null||In!==ki(n)||(n=In,"selectionStart"in n&&Qo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Fl&&Xl(Fl,n)||(Fl=n,n=Ur(Yo,"onSelect"),0<n.length&&(t=new Zi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=In)))}function gn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var _n={animationend:gn("Animation","AnimationEnd"),animationiteration:gn("Animation","AnimationIteration"),animationstart:gn("Animation","AnimationStart"),transitionrun:gn("Transition","TransitionRun"),transitionstart:gn("Transition","TransitionStart"),transitioncancel:gn("Transition","TransitionCancel"),transitionend:gn("Transition","TransitionEnd")},Ko={},rf={};wa&&(rf=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function xn(e){if(Ko[e])return Ko[e];if(!_n[e])return e;var t=_n[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in rf)return Ko[e]=t[a];return e}var of=xn("animationend"),sf=xn("animationiteration"),cf=xn("animationstart"),Qg=xn("transitionrun"),Yg=xn("transitionstart"),Gg=xn("transitioncancel"),uf=xn("transitionend"),ff=new Map,Zo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zo.push("scrollEnd");function oa(e,t){ff.set(e,t),hn(t,[e])}var Ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},It=[],$n=0,Xo=0;function Pi(){for(var e=$n,t=Xo=$n=0;t<e;){var a=It[t];It[t++]=null;var n=It[t];It[t++]=null;var i=It[t];It[t++]=null;var o=It[t];if(It[t++]=null,n!==null&&i!==null){var d=n.pending;d===null?i.next=i:(i.next=d.next,d.next=i),n.pending=i}o!==0&&df(a,i,o)}}function Wi(e,t,a,n){It[$n++]=e,It[$n++]=t,It[$n++]=a,It[$n++]=n,Xo|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Fo(e,t,a,n){return Wi(e,t,a,n),Ii(e)}function bn(e,t){return Wi(e,null,null,t),Ii(e)}function df(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,o=e.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(i=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,i&&t!==null&&(i=31-_(a),e=o.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),o):null}function Ii(e){if(50<mi)throw mi=0,ac=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var el={};function Kg(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(e,t,a,n){return new Kg(e,t,a,n)}function Jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sa(e,t){var a=e.alternate;return a===null?(a=Gt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function pf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,a,n,i,o){var d=0;if(n=e,typeof e=="function")Jo(e)&&(d=1);else if(typeof e=="string")d=P0(e,a,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ue:return e=Gt(31,a,t,i),e.elementType=ue,e.lanes=o,e;case R:return yn(a.children,i,o,t);case D:d=8,i|=24;break;case X:return e=Gt(12,a,t,i|2),e.elementType=X,e.lanes=o,e;case le:return e=Gt(13,a,t,i),e.elementType=le,e.lanes=o,e;case pe:return e=Gt(19,a,t,i),e.elementType=pe,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ee:d=10;break e;case I:d=9;break e;case me:d=11;break e;case ae:d=14;break e;case re:d=16,n=null;break e}d=29,a=Error(u(130,e===null?"null":typeof e,"")),n=null}return t=Gt(d,a,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function yn(e,t,a,n){return e=Gt(7,e,n,t),e.lanes=a,e}function Po(e,t,a){return e=Gt(6,e,null,t),e.lanes=a,e}function hf(e){var t=Gt(18,null,null,0);return t.stateNode=e,t}function Wo(e,t,a){return t=Gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mf=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var a=mf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:dn(t)},mf.set(e,t),t)}return{value:e,source:t,stack:dn(t)}}var tl=[],al=0,$i=null,Jl=0,$t=[],ea=0,Ga=null,ha=1,ma="";function Ea(e,t){tl[al++]=Jl,tl[al++]=$i,$i=e,Jl=t}function gf(e,t,a){$t[ea++]=ha,$t[ea++]=ma,$t[ea++]=Ga,Ga=e;var n=ha;e=ma;var i=32-_(n)-1;n&=~(1<<i),a+=1;var o=32-_(t)+i;if(30<o){var d=i-i%5;o=(n&(1<<d)-1).toString(32),n>>=d,i-=d,ha=1<<32-_(t)+i|a<<i|n,ma=o+e}else ha=1<<o|a<<i|n,ma=e}function Io(e){e.return!==null&&(Ea(e,1),gf(e,1,0))}function _o(e){for(;e===$i;)$i=tl[--al],tl[al]=null,Jl=tl[--al],tl[al]=null;for(;e===Ga;)Ga=$t[--ea],$t[ea]=null,ma=$t[--ea],$t[ea]=null,ha=$t[--ea],$t[ea]=null}function xf(e,t){$t[ea++]=ha,$t[ea++]=ma,$t[ea++]=Ga,ha=t.id,ma=t.overflow,Ga=e}var jt=null,$e=null,Re=!1,Ka=null,ta=!1,$o=Error(u(519));function Za(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pl(_t(t,e)),$o}function bf(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[At]=e,t[Rt]=n,a){case"dialog":ze("cancel",t),ze("close",t);break;case"iframe":case"object":case"embed":ze("load",t);break;case"video":case"audio":for(a=0;a<xi.length;a++)ze(xi[a],t);break;case"source":ze("error",t);break;case"img":case"image":case"link":ze("error",t),ze("load",t);break;case"details":ze("toggle",t);break;case"input":ze("invalid",t),Tu(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ze("invalid",t);break;case"textarea":ze("invalid",t),Ru(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Up(t.textContent,a)?(n.popover!=null&&(ze("beforetoggle",t),ze("toggle",t)),n.onScroll!=null&&ze("scroll",t),n.onScrollEnd!=null&&ze("scrollend",t),n.onClick!=null&&(t.onclick=ja),t=!0):t=!1,t||Za(e,!0)}function yf(e){for(jt=e.return;jt;)switch(jt.tag){case 5:case 31:case 13:ta=!1;return;case 27:case 3:ta=!0;return;default:jt=jt.return}}function nl(e){if(e!==jt)return!1;if(!Re)return yf(e),Re=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||xc(e.type,e.memoizedProps)),a=!a),a&&$e&&Za(e),yf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));$e=Kp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));$e=Kp(e)}else t===27?(t=$e,rn(e.type)?(e=jc,jc=null,$e=e):$e=t):$e=jt?na(e.stateNode.nextSibling):null;return!0}function vn(){$e=jt=null,Re=!1}function es(){var e=Ka;return e!==null&&(Lt===null?Lt=e:Lt.push.apply(Lt,e),Ka=null),e}function Pl(e){Ka===null?Ka=[e]:Ka.push(e)}var ts=A(null),An=null,Na=null;function Xa(e,t,a){K(ts,t._currentValue),t._currentValue=a}function za(e){e._currentValue=ts.current,H(ts)}function as(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function ns(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var d=i.child;o=o.firstContext;e:for(;o!==null;){var g=o;o=i;for(var v=0;v<t.length;v++)if(g.context===t[v]){o.lanes|=a,g=o.alternate,g!==null&&(g.lanes|=a),as(o.return,a,e),n||(d=null);break e}o=g.next}}else if(i.tag===18){if(d=i.return,d===null)throw Error(u(341));d.lanes|=a,o=d.alternate,o!==null&&(o.lanes|=a),as(d,a,e),d=null}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===e){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}}function ll(e,t,a,n){e=null;for(var i=t,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var d=i.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var g=i.type;Yt(i.pendingProps.value,d.value)||(e!==null?e.push(g):e=[g])}}else if(i===Be.current){if(d=i.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ji):e=[ji])}i=i.return}e!==null&&ns(t,e,a,n),t.flags|=262144}function er(e){for(e=e.firstContext;e!==null;){if(!Yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function jn(e){An=e,Na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wt(e){return vf(An,e)}function tr(e,t){return An===null&&jn(e),vf(e,t)}function vf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Na===null){if(e===null)throw Error(u(308));Na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Na=Na.next=t;return a}var Zg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Xg=l.unstable_scheduleCallback,Fg=l.unstable_NormalPriority,pt={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ls(){return{controller:new Zg,data:new Map,refCount:0}}function Wl(e){e.refCount--,e.refCount===0&&Xg(Fg,function(){e.controller.abort()})}var Il=null,is=0,il=0,rl=null;function Jg(e,t){if(Il===null){var a=Il=[];is=0,il=sc(),rl={status:"pending",value:void 0,then:function(n){a.push(n)}}}return is++,t.then(Af,Af),t}function Af(){if(--is===0&&Il!==null){rl!==null&&(rl.status="fulfilled");var e=Il;Il=null,il=0,rl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pg(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var jf=B.S;B.S=function(e,t){ip=Ot(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Jg(e,t),jf!==null&&jf(e,t)};var wn=A(null);function rs(){var e=wn.current;return e!==null?e:Je.pooledCache}function ar(e,t){t===null?K(wn,wn.current):K(wn,t.pool)}function wf(){var e=rs();return e===null?null:{parent:pt._currentValue,pool:e}}var ol=Error(u(460)),os=Error(u(474)),nr=Error(u(542)),lr={then:function(){}};function Sf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ef(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ja,ja),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zf(e),e;default:if(typeof t.status=="string")t.then(ja,ja);else{if(e=Je,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zf(e),e}throw En=t,ol}}function Sn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(En=a,ol):a}}var En=null;function Nf(){if(En===null)throw Error(u(459));var e=En;return En=null,e}function zf(e){if(e===ol||e===nr)throw Error(u(483))}var sl=null,_l=0;function ir(e){var t=_l;return _l+=1,sl===null&&(sl=[]),Ef(sl,e,t)}function $l(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function rr(e,t){throw t.$$typeof===L?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Cf(e){function t(N,S){if(e){var z=N.deletions;z===null?(N.deletions=[S],N.flags|=16):z.push(S)}}function a(N,S){if(!e)return null;for(;S!==null;)t(N,S),S=S.sibling;return null}function n(N){for(var S=new Map;N!==null;)N.key!==null?S.set(N.key,N):S.set(N.index,N),N=N.sibling;return S}function i(N,S){return N=Sa(N,S),N.index=0,N.sibling=null,N}function o(N,S,z){return N.index=z,e?(z=N.alternate,z!==null?(z=z.index,z<S?(N.flags|=67108866,S):z):(N.flags|=67108866,S)):(N.flags|=1048576,S)}function d(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function g(N,S,z,Q){return S===null||S.tag!==6?(S=Po(z,N.mode,Q),S.return=N,S):(S=i(S,z),S.return=N,S)}function v(N,S,z,Q){var ce=z.type;return ce===R?k(N,S,z.props.children,Q,z.key):S!==null&&(S.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===re&&Sn(ce)===S.type)?(S=i(S,z.props),$l(S,z),S.return=N,S):(S=_i(z.type,z.key,z.props,null,N.mode,Q),$l(S,z),S.return=N,S)}function C(N,S,z,Q){return S===null||S.tag!==4||S.stateNode.containerInfo!==z.containerInfo||S.stateNode.implementation!==z.implementation?(S=Wo(z,N.mode,Q),S.return=N,S):(S=i(S,z.children||[]),S.return=N,S)}function k(N,S,z,Q,ce){return S===null||S.tag!==7?(S=yn(z,N.mode,Q,ce),S.return=N,S):(S=i(S,z),S.return=N,S)}function G(N,S,z){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Po(""+S,N.mode,z),S.return=N,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case V:return z=_i(S.type,S.key,S.props,null,N.mode,z),$l(z,S),z.return=N,z;case w:return S=Wo(S,N.mode,z),S.return=N,S;case re:return S=Sn(S),G(N,S,z)}if(Xe(S)||we(S))return S=yn(S,N.mode,z,null),S.return=N,S;if(typeof S.then=="function")return G(N,ir(S),z);if(S.$$typeof===ee)return G(N,tr(N,S),z);rr(N,S)}return null}function T(N,S,z,Q){var ce=S!==null?S.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ce!==null?null:g(N,S,""+z,Q);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case V:return z.key===ce?v(N,S,z,Q):null;case w:return z.key===ce?C(N,S,z,Q):null;case re:return z=Sn(z),T(N,S,z,Q)}if(Xe(z)||we(z))return ce!==null?null:k(N,S,z,Q,null);if(typeof z.then=="function")return T(N,S,ir(z),Q);if(z.$$typeof===ee)return T(N,S,tr(N,z),Q);rr(N,z)}return null}function U(N,S,z,Q,ce){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return N=N.get(z)||null,g(S,N,""+Q,ce);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case V:return N=N.get(Q.key===null?z:Q.key)||null,v(S,N,Q,ce);case w:return N=N.get(Q.key===null?z:Q.key)||null,C(S,N,Q,ce);case re:return Q=Sn(Q),U(N,S,z,Q,ce)}if(Xe(Q)||we(Q))return N=N.get(z)||null,k(S,N,Q,ce,null);if(typeof Q.then=="function")return U(N,S,z,ir(Q),ce);if(Q.$$typeof===ee)return U(N,S,z,tr(S,Q),ce);rr(S,Q)}return null}function ie(N,S,z,Q){for(var ce=null,Ue=null,oe=S,je=S=0,Oe=null;oe!==null&&je<z.length;je++){oe.index>je?(Oe=oe,oe=null):Oe=oe.sibling;var He=T(N,oe,z[je],Q);if(He===null){oe===null&&(oe=Oe);break}e&&oe&&He.alternate===null&&t(N,oe),S=o(He,S,je),Ue===null?ce=He:Ue.sibling=He,Ue=He,oe=Oe}if(je===z.length)return a(N,oe),Re&&Ea(N,je),ce;if(oe===null){for(;je<z.length;je++)oe=G(N,z[je],Q),oe!==null&&(S=o(oe,S,je),Ue===null?ce=oe:Ue.sibling=oe,Ue=oe);return Re&&Ea(N,je),ce}for(oe=n(oe);je<z.length;je++)Oe=U(oe,N,je,z[je],Q),Oe!==null&&(e&&Oe.alternate!==null&&oe.delete(Oe.key===null?je:Oe.key),S=o(Oe,S,je),Ue===null?ce=Oe:Ue.sibling=Oe,Ue=Oe);return e&&oe.forEach(function(fn){return t(N,fn)}),Re&&Ea(N,je),ce}function de(N,S,z,Q){if(z==null)throw Error(u(151));for(var ce=null,Ue=null,oe=S,je=S=0,Oe=null,He=z.next();oe!==null&&!He.done;je++,He=z.next()){oe.index>je?(Oe=oe,oe=null):Oe=oe.sibling;var fn=T(N,oe,He.value,Q);if(fn===null){oe===null&&(oe=Oe);break}e&&oe&&fn.alternate===null&&t(N,oe),S=o(fn,S,je),Ue===null?ce=fn:Ue.sibling=fn,Ue=fn,oe=Oe}if(He.done)return a(N,oe),Re&&Ea(N,je),ce;if(oe===null){for(;!He.done;je++,He=z.next())He=G(N,He.value,Q),He!==null&&(S=o(He,S,je),Ue===null?ce=He:Ue.sibling=He,Ue=He);return Re&&Ea(N,je),ce}for(oe=n(oe);!He.done;je++,He=z.next())He=U(oe,N,je,He.value,Q),He!==null&&(e&&He.alternate!==null&&oe.delete(He.key===null?je:He.key),S=o(He,S,je),Ue===null?ce=He:Ue.sibling=He,Ue=He);return e&&oe.forEach(function(rx){return t(N,rx)}),Re&&Ea(N,je),ce}function Ze(N,S,z,Q){if(typeof z=="object"&&z!==null&&z.type===R&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case V:e:{for(var ce=z.key;S!==null;){if(S.key===ce){if(ce=z.type,ce===R){if(S.tag===7){a(N,S.sibling),Q=i(S,z.props.children),Q.return=N,N=Q;break e}}else if(S.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===re&&Sn(ce)===S.type){a(N,S.sibling),Q=i(S,z.props),$l(Q,z),Q.return=N,N=Q;break e}a(N,S);break}else t(N,S);S=S.sibling}z.type===R?(Q=yn(z.props.children,N.mode,Q,z.key),Q.return=N,N=Q):(Q=_i(z.type,z.key,z.props,null,N.mode,Q),$l(Q,z),Q.return=N,N=Q)}return d(N);case w:e:{for(ce=z.key;S!==null;){if(S.key===ce)if(S.tag===4&&S.stateNode.containerInfo===z.containerInfo&&S.stateNode.implementation===z.implementation){a(N,S.sibling),Q=i(S,z.children||[]),Q.return=N,N=Q;break e}else{a(N,S);break}else t(N,S);S=S.sibling}Q=Wo(z,N.mode,Q),Q.return=N,N=Q}return d(N);case re:return z=Sn(z),Ze(N,S,z,Q)}if(Xe(z))return ie(N,S,z,Q);if(we(z)){if(ce=we(z),typeof ce!="function")throw Error(u(150));return z=ce.call(z),de(N,S,z,Q)}if(typeof z.then=="function")return Ze(N,S,ir(z),Q);if(z.$$typeof===ee)return Ze(N,S,tr(N,z),Q);rr(N,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,S!==null&&S.tag===6?(a(N,S.sibling),Q=i(S,z),Q.return=N,N=Q):(a(N,S),Q=Po(z,N.mode,Q),Q.return=N,N=Q),d(N)):a(N,S)}return function(N,S,z,Q){try{_l=0;var ce=Ze(N,S,z,Q);return sl=null,ce}catch(oe){if(oe===ol||oe===nr)throw oe;var Ue=Gt(29,oe,null,N.mode);return Ue.lanes=Q,Ue.return=N,Ue}finally{}}}var Nn=Cf(!0),Of=Cf(!1),Fa=!1;function ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(qe&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Ii(e),df(e,null,a),t}return Wi(e,n,t,a),Ii(e)}function ei(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,yu(e,a)}}function us(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?i=o=d:o=o.next=d,a=a.next}while(a!==null);o===null?i=o=t:o=o.next=t}else i=o=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var fs=!1;function ti(){if(fs){var e=rl;if(e!==null)throw e}}function ai(e,t,a,n){fs=!1;var i=e.updateQueue;Fa=!1;var o=i.firstBaseUpdate,d=i.lastBaseUpdate,g=i.shared.pending;if(g!==null){i.shared.pending=null;var v=g,C=v.next;v.next=null,d===null?o=C:d.next=C,d=v;var k=e.alternate;k!==null&&(k=k.updateQueue,g=k.lastBaseUpdate,g!==d&&(g===null?k.firstBaseUpdate=C:g.next=C,k.lastBaseUpdate=v))}if(o!==null){var G=i.baseState;d=0,k=C=v=null,g=o;do{var T=g.lane&-536870913,U=T!==g.lane;if(U?(Ce&T)===T:(n&T)===T){T!==0&&T===il&&(fs=!0),k!==null&&(k=k.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var ie=e,de=g;T=t;var Ze=a;switch(de.tag){case 1:if(ie=de.payload,typeof ie=="function"){G=ie.call(Ze,G,T);break e}G=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=de.payload,T=typeof ie=="function"?ie.call(Ze,G,T):ie,T==null)break e;G=j({},G,T);break e;case 2:Fa=!0}}T=g.callback,T!==null&&(e.flags|=64,U&&(e.flags|=8192),U=i.callbacks,U===null?i.callbacks=[T]:U.push(T))}else U={lane:T,tag:g.tag,payload:g.payload,callback:g.callback,next:null},k===null?(C=k=U,v=G):k=k.next=U,d|=T;if(g=g.next,g===null){if(g=i.shared.pending,g===null)break;U=g,g=U.next,U.next=null,i.lastBaseUpdate=U,i.shared.pending=null}}while(!0);k===null&&(v=G),i.baseState=v,i.firstBaseUpdate=C,i.lastBaseUpdate=k,o===null&&(i.shared.lanes=0),en|=d,e.lanes=d,e.memoizedState=G}}function Tf(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Bf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Tf(a[e],t)}var cl=A(null),or=A(0);function Rf(e,t){e=Ha,K(or,e),K(cl,t),Ha=e|t.baseLanes}function ds(){K(or,Ha),K(cl,cl.current)}function ps(){Ha=or.current,H(cl),H(or)}var Kt=A(null),aa=null;function Wa(e){var t=e.alternate;K(ut,ut.current&1),K(Kt,e),aa===null&&(t===null||cl.current!==null||t.memoizedState!==null)&&(aa=e)}function hs(e){K(ut,ut.current),K(Kt,e),aa===null&&(aa=e)}function Mf(e){e.tag===22?(K(ut,ut.current),K(Kt,e),aa===null&&(aa=e)):Ia()}function Ia(){K(ut,ut.current),K(Kt,Kt.current)}function Zt(e){H(Kt),aa===e&&(aa=null),H(ut)}var ut=A(0);function sr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vc(a)||Ac(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ca=0,ye=null,Ge=null,ht=null,cr=!1,ul=!1,zn=!1,ur=0,ni=0,fl=null,Wg=0;function st(){throw Error(u(321))}function ms(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Yt(e[a],t[a]))return!1;return!0}function gs(e,t,a,n,i,o){return Ca=o,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?gd:Bs,zn=!1,o=a(n,i),zn=!1,ul&&(o=Uf(t,a,n,i)),Df(e),o}function Df(e){B.H=ri;var t=Ge!==null&&Ge.next!==null;if(Ca=0,ht=Ge=ye=null,cr=!1,ni=0,fl=null,t)throw Error(u(300));e===null||mt||(e=e.dependencies,e!==null&&er(e)&&(mt=!0))}function Uf(e,t,a,n){ye=e;var i=0;do{if(ul&&(fl=null),ni=0,ul=!1,25<=i)throw Error(u(301));if(i+=1,ht=Ge=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}B.H=xd,o=t(a,n)}while(ul);return o}function Ig(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?li(t):t,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ye.flags|=1024),t}function xs(){var e=ur!==0;return ur=0,e}function bs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ys(e){if(cr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}cr=!1}Ca=0,ht=Ge=ye=null,ul=!1,ni=ur=0,fl=null}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?ye.memoizedState=ht=e:ht=ht.next=e,ht}function ft(){if(Ge===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=ht===null?ye.memoizedState:ht.next;if(t!==null)ht=t,Ge=e;else{if(e===null)throw ye.alternate===null?Error(u(467)):Error(u(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},ht===null?ye.memoizedState=ht=e:ht=ht.next=e}return ht}function fr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function li(e){var t=ni;return ni+=1,fl===null&&(fl=[]),e=Ef(fl,e,t),t=ye,(ht===null?t.memoizedState:ht.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?gd:Bs),e}function dr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return li(e);if(e.$$typeof===ee)return wt(e)}throw Error(u(438,String(e)))}function vs(e){var t=null,a=ye.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ye.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=fr(),ye.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=De;return t.index++,a}function Oa(e,t){return typeof t=="function"?t(e):t}function pr(e){var t=ft();return As(t,Ge,e)}function As(e,t,a){var n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=a;var i=e.baseQueue,o=n.pending;if(o!==null){if(i!==null){var d=i.next;i.next=o.next,o.next=d}t.baseQueue=i=o,n.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var g=d=null,v=null,C=t,k=!1;do{var G=C.lane&-536870913;if(G!==C.lane?(Ce&G)===G:(Ca&G)===G){var T=C.revertLane;if(T===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),G===il&&(k=!0);else if((Ca&T)===T){C=C.next,T===il&&(k=!0);continue}else G={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},v===null?(g=v=G,d=o):v=v.next=G,ye.lanes|=T,en|=T;G=C.action,zn&&a(o,G),o=C.hasEagerState?C.eagerState:a(o,G)}else T={lane:G,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},v===null?(g=v=T,d=o):v=v.next=T,ye.lanes|=G,en|=G;C=C.next}while(C!==null&&C!==t);if(v===null?d=o:v.next=g,!Yt(o,e.memoizedState)&&(mt=!0,k&&(a=rl,a!==null)))throw a;e.memoizedState=o,e.baseState=d,e.baseQueue=v,n.lastRenderedState=o}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function js(e){var t=ft(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,o=t.memoizedState;if(i!==null){a.pending=null;var d=i=i.next;do o=e(o,d.action),d=d.next;while(d!==i);Yt(o,t.memoizedState)||(mt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function Hf(e,t,a){var n=ye,i=ft(),o=Re;if(o){if(a===void 0)throw Error(u(407));a=a()}else a=t();var d=!Yt((Ge||i).memoizedState,a);if(d&&(i.memoizedState=a,mt=!0),i=i.queue,Es(Vf.bind(null,n,i,e),[e]),i.getSnapshot!==t||d||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,dl(9,{destroy:void 0},qf.bind(null,n,i,a,t),null),Je===null)throw Error(u(349));o||(Ca&127)!==0||Lf(n,t,a)}return a}function Lf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ye.updateQueue,t===null?(t=fr(),ye.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function qf(e,t,a,n){t.value=a,t.getSnapshot=n,kf(t)&&Qf(e)}function Vf(e,t,a){return a(function(){kf(t)&&Qf(e)})}function kf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Yt(e,a)}catch{return!0}}function Qf(e){var t=bn(e,2);t!==null&&qt(t,e,2)}function ws(e){var t=Tt();if(typeof e=="function"){var a=e;if(e=a(),zn){te(!0);try{a()}finally{te(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:e},t}function Yf(e,t,a,n){return e.baseState=a,As(e,Ge,typeof n=="function"?n:Oa)}function _g(e,t,a,n,i){if(gr(e))throw Error(u(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){o.listeners.push(d)}};B.T!==null?a(!0):o.isTransition=!1,n(o),a=t.pending,a===null?(o.next=t.pending=o,Gf(t,o)):(o.next=a.next,t.pending=a.next=o)}}function Gf(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var o=B.T,d={};B.T=d;try{var g=a(i,n),v=B.S;v!==null&&v(d,g),Kf(e,t,g)}catch(C){Ss(e,t,C)}finally{o!==null&&d.types!==null&&(o.types=d.types),B.T=o}}else try{o=a(i,n),Kf(e,t,o)}catch(C){Ss(e,t,C)}}function Kf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Zf(e,t,n)},function(n){return Ss(e,t,n)}):Zf(e,t,a)}function Zf(e,t,a){t.status="fulfilled",t.value=a,Xf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Gf(e,a)))}function Ss(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Xf(t),t=t.next;while(t!==n)}e.action=null}function Xf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ff(e,t){return t}function Jf(e,t){if(Re){var a=Je.formState;if(a!==null){e:{var n=ye;if(Re){if($e){t:{for(var i=$e,o=ta;i.nodeType!==8;){if(!o){i=null;break t}if(i=na(i.nextSibling),i===null){i=null;break t}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){$e=na(i.nextSibling),n=i.data==="F!";break e}}Za(n)}n=!1}n&&(t=a[0])}}return a=Tt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ff,lastRenderedState:t},a.queue=n,a=pd.bind(null,ye,n),n.dispatch=a,n=ws(!1),o=Ts.bind(null,ye,!1,n.queue),n=Tt(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=_g.bind(null,ye,i,o,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function Pf(e){var t=ft();return Wf(t,Ge,e)}function Wf(e,t,a){if(t=As(e,t,Ff)[0],e=pr(Oa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=li(t)}catch(d){throw d===ol?nr:d}else n=t;t=ft();var i=t.queue,o=i.dispatch;return a!==t.memoizedState&&(ye.flags|=2048,dl(9,{destroy:void 0},$g.bind(null,i,a),null)),[n,o,e]}function $g(e,t){e.action=t}function If(e){var t=ft(),a=Ge;if(a!==null)return Wf(t,a,e);ft(),t=t.memoizedState,a=ft();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function dl(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ye.updateQueue,t===null&&(t=fr(),ye.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function _f(){return ft().memoizedState}function hr(e,t,a,n){var i=Tt();ye.flags|=e,i.memoizedState=dl(1|t,{destroy:void 0},a,n===void 0?null:n)}function mr(e,t,a,n){var i=ft();n=n===void 0?null:n;var o=i.memoizedState.inst;Ge!==null&&n!==null&&ms(n,Ge.memoizedState.deps)?i.memoizedState=dl(t,o,a,n):(ye.flags|=e,i.memoizedState=dl(1|t,o,a,n))}function $f(e,t){hr(8390656,8,e,t)}function Es(e,t){mr(2048,8,e,t)}function e0(e){ye.flags|=4;var t=ye.updateQueue;if(t===null)t=fr(),ye.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function ed(e){var t=ft().memoizedState;return e0({ref:t,nextImpl:e}),function(){if((qe&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function td(e,t){return mr(4,2,e,t)}function ad(e,t){return mr(4,4,e,t)}function nd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ld(e,t,a){a=a!=null?a.concat([e]):null,mr(4,4,nd.bind(null,t,e),a)}function Ns(){}function id(e,t){var a=ft();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&ms(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function rd(e,t){var a=ft();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&ms(t,n[1]))return n[0];if(n=e(),zn){te(!0);try{e()}finally{te(!1)}}return a.memoizedState=[n,t],n}function zs(e,t,a){return a===void 0||(Ca&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=op(),ye.lanes|=e,en|=e,a)}function od(e,t,a,n){return Yt(a,t)?a:cl.current!==null?(e=zs(e,a,n),Yt(e,t)||(mt=!0),e):(Ca&42)===0||(Ca&1073741824)!==0&&(Ce&261930)===0?(mt=!0,e.memoizedState=a):(e=op(),ye.lanes|=e,en|=e,t)}function sd(e,t,a,n,i){var o=P.p;P.p=o!==0&&8>o?o:8;var d=B.T,g={};B.T=g,Ts(e,!1,t,a);try{var v=i(),C=B.S;if(C!==null&&C(g,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var k=Pg(v,n);ii(e,t,k,Jt(e))}else ii(e,t,n,Jt(e))}catch(G){ii(e,t,{then:function(){},status:"rejected",reason:G},Jt())}finally{P.p=o,d!==null&&g.types!==null&&(d.types=g.types),B.T=d}}function t0(){}function Cs(e,t,a,n){if(e.tag!==5)throw Error(u(476));var i=cd(e).queue;sd(e,i,t,ne,a===null?t0:function(){return ud(e),a(n)})}function cd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:ne},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ud(e){var t=cd(e);t.next===null&&(t=e.alternate.memoizedState),ii(e,t.next.queue,{},Jt())}function Os(){return wt(ji)}function fd(){return ft().memoizedState}function dd(){return ft().memoizedState}function a0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Jt();e=Ja(a);var n=Pa(t,e,a);n!==null&&(qt(n,t,a),ei(n,t,a)),t={cache:ls()},e.payload=t;return}t=t.return}}function n0(e,t,a){var n=Jt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gr(e)?hd(t,a):(a=Fo(e,t,a,n),a!==null&&(qt(a,e,n),md(a,t,n)))}function pd(e,t,a){var n=Jt();ii(e,t,a,n)}function ii(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gr(e))hd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var d=t.lastRenderedState,g=o(d,a);if(i.hasEagerState=!0,i.eagerState=g,Yt(g,d))return Wi(e,t,i,0),Je===null&&Pi(),!1}catch{}finally{}if(a=Fo(e,t,i,n),a!==null)return qt(a,e,n),md(a,t,n),!0}return!1}function Ts(e,t,a,n){if(n={lane:2,revertLane:sc(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},gr(e)){if(t)throw Error(u(479))}else t=Fo(e,a,n,2),t!==null&&qt(t,e,2)}function gr(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function hd(e,t){ul=cr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function md(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,yu(e,a)}}var ri={readContext:wt,use:dr,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st};ri.useEffectEvent=st;var gd={readContext:wt,use:dr,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:$f,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,hr(4194308,4,nd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return hr(4194308,4,e,t)},useInsertionEffect:function(e,t){hr(4,2,e,t)},useMemo:function(e,t){var a=Tt();t=t===void 0?null:t;var n=e();if(zn){te(!0);try{e()}finally{te(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Tt();if(a!==void 0){var i=a(t);if(zn){te(!0);try{a(t)}finally{te(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=n0.bind(null,ye,e),[n.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:function(e){e=ws(e);var t=e.queue,a=pd.bind(null,ye,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ns,useDeferredValue:function(e,t){var a=Tt();return zs(a,e,t)},useTransition:function(){var e=ws(!1);return e=sd.bind(null,ye,e.queue,!0,!1),Tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ye,i=Tt();if(Re){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Je===null)throw Error(u(349));(Ce&127)!==0||Lf(n,t,a)}i.memoizedState=a;var o={value:a,getSnapshot:t};return i.queue=o,$f(Vf.bind(null,n,o,e),[e]),n.flags|=2048,dl(9,{destroy:void 0},qf.bind(null,n,o,a,t),null),a},useId:function(){var e=Tt(),t=Je.identifierPrefix;if(Re){var a=ma,n=ha;a=(n&~(1<<32-_(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ur++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Wg++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:Jf,useActionState:Jf,useOptimistic:function(e){var t=Tt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ts.bind(null,ye,!0,a),a.dispatch=t,[e,t]},useMemoCache:vs,useCacheRefresh:function(){return Tt().memoizedState=a0.bind(null,ye)},useEffectEvent:function(e){var t=Tt(),a={impl:e};return t.memoizedState=a,function(){if((qe&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Bs={readContext:wt,use:dr,useCallback:id,useContext:wt,useEffect:Es,useImperativeHandle:ld,useInsertionEffect:td,useLayoutEffect:ad,useMemo:rd,useReducer:pr,useRef:_f,useState:function(){return pr(Oa)},useDebugValue:Ns,useDeferredValue:function(e,t){var a=ft();return od(a,Ge.memoizedState,e,t)},useTransition:function(){var e=pr(Oa)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:li(e),t]},useSyncExternalStore:Hf,useId:fd,useHostTransitionStatus:Os,useFormState:Pf,useActionState:Pf,useOptimistic:function(e,t){var a=ft();return Yf(a,Ge,e,t)},useMemoCache:vs,useCacheRefresh:dd};Bs.useEffectEvent=ed;var xd={readContext:wt,use:dr,useCallback:id,useContext:wt,useEffect:Es,useImperativeHandle:ld,useInsertionEffect:td,useLayoutEffect:ad,useMemo:rd,useReducer:js,useRef:_f,useState:function(){return js(Oa)},useDebugValue:Ns,useDeferredValue:function(e,t){var a=ft();return Ge===null?zs(a,e,t):od(a,Ge.memoizedState,e,t)},useTransition:function(){var e=js(Oa)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:li(e),t]},useSyncExternalStore:Hf,useId:fd,useHostTransitionStatus:Os,useFormState:If,useActionState:If,useOptimistic:function(e,t){var a=ft();return Ge!==null?Yf(a,Ge,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:vs,useCacheRefresh:dd};xd.useEffectEvent=ed;function Rs(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:j({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ms={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Jt(),i=Ja(n);i.payload=t,a!=null&&(i.callback=a),t=Pa(e,i,n),t!==null&&(qt(t,e,n),ei(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Jt(),i=Ja(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Pa(e,i,n),t!==null&&(qt(t,e,n),ei(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Jt(),n=Ja(a);n.tag=2,t!=null&&(n.callback=t),t=Pa(e,n,a),t!==null&&(qt(t,e,a),ei(t,e,a))}};function bd(e,t,a,n,i,o,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,d):t.prototype&&t.prototype.isPureReactComponent?!Xl(a,n)||!Xl(i,o):!0}function yd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Ms.enqueueReplaceState(t,t.state,null)}function Cn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=j({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function vd(e){Ji(e)}function Ad(e){console.error(e)}function jd(e){Ji(e)}function xr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function wd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Ds(e,t,a){return a=Ja(a),a.tag=3,a.payload={element:null},a.callback=function(){xr(e,t)},a}function Sd(e){return e=Ja(e),e.tag=3,e}function Ed(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var o=n.value;e.payload=function(){return i(o)},e.callback=function(){wd(t,a,n)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){wd(t,a,n),typeof i!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var g=n.stack;this.componentDidCatch(n.value,{componentStack:g!==null?g:""})})}function l0(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&ll(t,a,i,!0),a=Kt.current,a!==null){switch(a.tag){case 31:case 13:return aa===null?Or():a.alternate===null&&ct===0&&(ct=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===lr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),ic(e,n,i)),!1;case 22:return a.flags|=65536,n===lr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),ic(e,n,i)),!1}throw Error(u(435,a.tag))}return ic(e,n,i),Or(),!1}if(Re)return t=Kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==$o&&(e=Error(u(422),{cause:n}),Pl(_t(e,a)))):(n!==$o&&(t=Error(u(423),{cause:n}),Pl(_t(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=_t(n,a),i=Ds(e.stateNode,n,i),us(e,i),ct!==4&&(ct=2)),!1;var o=Error(u(520),{cause:n});if(o=_t(o,a),hi===null?hi=[o]:hi.push(o),ct!==4&&(ct=2),t===null)return!0;n=_t(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Ds(a.stateNode,n,e),us(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(tn===null||!tn.has(o))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Sd(i),Ed(i,e,a,n),us(a,i),!1}a=a.return}while(a!==null);return!1}var Us=Error(u(461)),mt=!1;function St(e,t,a,n){t.child=e===null?Of(t,null,a,n):Nn(t,e.child,a,n)}function Nd(e,t,a,n,i){a=a.render;var o=t.ref;if("ref"in n){var d={};for(var g in n)g!=="ref"&&(d[g]=n[g])}else d=n;return jn(t),n=gs(e,t,a,d,o,i),g=xs(),e!==null&&!mt?(bs(e,t,i),Ta(e,t,i)):(Re&&g&&Io(t),t.flags|=1,St(e,t,n,i),t.child)}function zd(e,t,a,n,i){if(e===null){var o=a.type;return typeof o=="function"&&!Jo(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,Cd(e,t,o,n,i)):(e=_i(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Gs(e,i)){var d=o.memoizedProps;if(a=a.compare,a=a!==null?a:Xl,a(d,n)&&e.ref===t.ref)return Ta(e,t,i)}return t.flags|=1,e=Sa(o,n),e.ref=t.ref,e.return=t,t.child=e}function Cd(e,t,a,n,i){if(e!==null){var o=e.memoizedProps;if(Xl(o,n)&&e.ref===t.ref)if(mt=!1,t.pendingProps=n=o,Gs(e,i))(e.flags&131072)!==0&&(mt=!0);else return t.lanes=e.lanes,Ta(e,t,i)}return Hs(e,t,a,n,i)}function Od(e,t,a,n){var i=n.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~o}else n=0,t.child=null;return Td(e,t,o,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ar(t,o!==null?o.cachePool:null),o!==null?Rf(t,o):ds(),Mf(t);else return n=t.lanes=536870912,Td(e,t,o!==null?o.baseLanes|a:a,a,n)}else o!==null?(ar(t,o.cachePool),Rf(t,o),Ia(),t.memoizedState=null):(e!==null&&ar(t,null),ds(),Ia());return St(e,t,i,a),t.child}function oi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Td(e,t,a,n,i){var o=rs();return o=o===null?null:{parent:pt._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&ar(t,null),ds(),Mf(t),e!==null&&ll(e,t,n,!0),t.childLanes=i,null}function br(e,t){return t=vr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Bd(e,t,a){return Nn(t,e.child,null,a),e=br(t,t.pendingProps),e.flags|=2,Zt(t),t.memoizedState=null,e}function i0(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Re){if(n.mode==="hidden")return e=br(t,n),t.lanes=536870912,oi(null,e);if(hs(t),(e=$e)?(e=Gp(e,ta),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:ha,overflow:ma}:null,retryLane:536870912,hydrationErrors:null},a=hf(e),a.return=t,t.child=a,jt=t,$e=null)):e=null,e===null)throw Za(t);return t.lanes=536870912,null}return br(t,n)}var o=e.memoizedState;if(o!==null){var d=o.dehydrated;if(hs(t),i)if(t.flags&256)t.flags&=-257,t=Bd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(mt||ll(e,t,a,!1),i=(a&e.childLanes)!==0,mt||i){if(n=Je,n!==null&&(d=vu(n,a),d!==0&&d!==o.retryLane))throw o.retryLane=d,bn(e,d),qt(n,e,d),Us;Or(),t=Bd(e,t,a)}else e=o.treeContext,$e=na(d.nextSibling),jt=t,Re=!0,Ka=null,ta=!1,e!==null&&xf(t,e),t=br(t,n),t.flags|=4096;return t}return e=Sa(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function yr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Hs(e,t,a,n,i){return jn(t),a=gs(e,t,a,n,void 0,i),n=xs(),e!==null&&!mt?(bs(e,t,i),Ta(e,t,i)):(Re&&n&&Io(t),t.flags|=1,St(e,t,a,i),t.child)}function Rd(e,t,a,n,i,o){return jn(t),t.updateQueue=null,a=Uf(t,n,a,i),Df(e),n=xs(),e!==null&&!mt?(bs(e,t,o),Ta(e,t,o)):(Re&&n&&Io(t),t.flags|=1,St(e,t,a,o),t.child)}function Md(e,t,a,n,i){if(jn(t),t.stateNode===null){var o=el,d=a.contextType;typeof d=="object"&&d!==null&&(o=wt(d)),o=new a(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ms,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},ss(t),d=a.contextType,o.context=typeof d=="object"&&d!==null?wt(d):el,o.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(Rs(t,a,d,n),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(d=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),d!==o.state&&Ms.enqueueReplaceState(o,o.state,null),ai(t,n,o,i),ti(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var g=t.memoizedProps,v=Cn(a,g);o.props=v;var C=o.context,k=a.contextType;d=el,typeof k=="object"&&k!==null&&(d=wt(k));var G=a.getDerivedStateFromProps;k=typeof G=="function"||typeof o.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,k||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(g||C!==d)&&yd(t,o,n,d),Fa=!1;var T=t.memoizedState;o.state=T,ai(t,n,o,i),ti(),C=t.memoizedState,g||T!==C||Fa?(typeof G=="function"&&(Rs(t,a,G,n),C=t.memoizedState),(v=Fa||bd(t,a,v,n,T,C,d))?(k||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=C),o.props=n,o.state=C,o.context=d,n=v):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,cs(e,t),d=t.memoizedProps,k=Cn(a,d),o.props=k,G=t.pendingProps,T=o.context,C=a.contextType,v=el,typeof C=="object"&&C!==null&&(v=wt(C)),g=a.getDerivedStateFromProps,(C=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==G||T!==v)&&yd(t,o,n,v),Fa=!1,T=t.memoizedState,o.state=T,ai(t,n,o,i),ti();var U=t.memoizedState;d!==G||T!==U||Fa||e!==null&&e.dependencies!==null&&er(e.dependencies)?(typeof g=="function"&&(Rs(t,a,g,n),U=t.memoizedState),(k=Fa||bd(t,a,k,n,T,U,v)||e!==null&&e.dependencies!==null&&er(e.dependencies))?(C||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,U,v),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,U,v)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=U),o.props=n,o.state=U,o.context=v,n=k):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,yr(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=Nn(t,e.child,null,i),t.child=Nn(t,null,a,i)):St(e,t,a,i),t.memoizedState=o.state,e=t.child):e=Ta(e,t,i),e}function Dd(e,t,a,n){return vn(),t.flags|=256,St(e,t,a,n),t.child}var Ls={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qs(e){return{baseLanes:e,cachePool:wf()}}function Vs(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ft),e}function Ud(e,t,a){var n=t.pendingProps,i=!1,o=(t.flags&128)!==0,d;if((d=o)||(d=e!==null&&e.memoizedState===null?!1:(ut.current&2)!==0),d&&(i=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Re){if(i?Wa(t):Ia(),(e=$e)?(e=Gp(e,ta),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:ha,overflow:ma}:null,retryLane:536870912,hydrationErrors:null},a=hf(e),a.return=t,t.child=a,jt=t,$e=null)):e=null,e===null)throw Za(t);return Ac(e)?t.lanes=32:t.lanes=536870912,null}var g=n.children;return n=n.fallback,i?(Ia(),i=t.mode,g=vr({mode:"hidden",children:g},i),n=yn(n,i,a,null),g.return=t,n.return=t,g.sibling=n,t.child=g,n=t.child,n.memoizedState=qs(a),n.childLanes=Vs(e,d,a),t.memoizedState=Ls,oi(null,n)):(Wa(t),ks(t,g))}var v=e.memoizedState;if(v!==null&&(g=v.dehydrated,g!==null)){if(o)t.flags&256?(Wa(t),t.flags&=-257,t=Qs(e,t,a)):t.memoizedState!==null?(Ia(),t.child=e.child,t.flags|=128,t=null):(Ia(),g=n.fallback,i=t.mode,n=vr({mode:"visible",children:n.children},i),g=yn(g,i,a,null),g.flags|=2,n.return=t,g.return=t,n.sibling=g,t.child=n,Nn(t,e.child,null,a),n=t.child,n.memoizedState=qs(a),n.childLanes=Vs(e,d,a),t.memoizedState=Ls,t=oi(null,n));else if(Wa(t),Ac(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var C=d.dgst;d=C,n=Error(u(419)),n.stack="",n.digest=d,Pl({value:n,source:null,stack:null}),t=Qs(e,t,a)}else if(mt||ll(e,t,a,!1),d=(a&e.childLanes)!==0,mt||d){if(d=Je,d!==null&&(n=vu(d,a),n!==0&&n!==v.retryLane))throw v.retryLane=n,bn(e,n),qt(d,e,n),Us;vc(g)||Or(),t=Qs(e,t,a)}else vc(g)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,$e=na(g.nextSibling),jt=t,Re=!0,Ka=null,ta=!1,e!==null&&xf(t,e),t=ks(t,n.children),t.flags|=4096);return t}return i?(Ia(),g=n.fallback,i=t.mode,v=e.child,C=v.sibling,n=Sa(v,{mode:"hidden",children:n.children}),n.subtreeFlags=v.subtreeFlags&65011712,C!==null?g=Sa(C,g):(g=yn(g,i,a,null),g.flags|=2),g.return=t,n.return=t,n.sibling=g,t.child=n,oi(null,n),n=t.child,g=e.child.memoizedState,g===null?g=qs(a):(i=g.cachePool,i!==null?(v=pt._currentValue,i=i.parent!==v?{parent:v,pool:v}:i):i=wf(),g={baseLanes:g.baseLanes|a,cachePool:i}),n.memoizedState=g,n.childLanes=Vs(e,d,a),t.memoizedState=Ls,oi(e.child,n)):(Wa(t),a=e.child,e=a.sibling,a=Sa(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function ks(e,t){return t=vr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function vr(e,t){return e=Gt(22,e,null,t),e.lanes=0,e}function Qs(e,t,a){return Nn(t,e.child,null,a),e=ks(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),as(e.return,t,a)}function Ys(e,t,a,n,i,o){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:o}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=n,d.tail=a,d.tailMode=i,d.treeForkCount=o)}function Ld(e,t,a){var n=t.pendingProps,i=n.revealOrder,o=n.tail;n=n.children;var d=ut.current,g=(d&2)!==0;if(g?(d=d&1|2,t.flags|=128):d&=1,K(ut,d),St(e,t,n,a),n=Re?Jl:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hd(e,a,t);else if(e.tag===19)Hd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&sr(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Ys(t,!1,i,a,o,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&sr(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Ys(t,!0,a,null,o,n);break;case"together":Ys(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Ta(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),en|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ll(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Sa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Sa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Gs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&er(e)))}function r0(e,t,a){switch(t.tag){case 3:tt(t,t.stateNode.containerInfo),Xa(t,pt,e.memoizedState.cache),vn();break;case 27:case 5:Bt(t);break;case 4:tt(t,t.stateNode.containerInfo);break;case 10:Xa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,hs(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Wa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ud(e,t,a):(Wa(t),e=Ta(e,t,a),e!==null?e.sibling:null);Wa(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(ll(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Ld(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(ut,ut.current),n)break;return null;case 22:return t.lanes=0,Od(e,t,a,t.pendingProps);case 24:Xa(t,pt,e.memoizedState.cache)}return Ta(e,t,a)}function qd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)mt=!0;else{if(!Gs(e,a)&&(t.flags&128)===0)return mt=!1,r0(e,t,a);mt=(e.flags&131072)!==0}else mt=!1,Re&&(t.flags&1048576)!==0&&gf(t,Jl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Sn(t.elementType),t.type=e,typeof e=="function")Jo(e)?(n=Cn(e,n),t.tag=1,t=Md(null,t,e,n,a)):(t.tag=0,t=Hs(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===me){t.tag=11,t=Nd(null,t,e,n,a);break e}else if(i===ae){t.tag=14,t=zd(null,t,e,n,a);break e}}throw t=Te(e)||e,Error(u(306,t,""))}}return t;case 0:return Hs(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Cn(n,t.pendingProps),Md(e,t,n,i,a);case 3:e:{if(tt(t,t.stateNode.containerInfo),e===null)throw Error(u(387));n=t.pendingProps;var o=t.memoizedState;i=o.element,cs(e,t),ai(t,n,null,a);var d=t.memoizedState;if(n=d.cache,Xa(t,pt,n),n!==o.cache&&ns(t,[pt],a,!0),ti(),n=d.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Dd(e,t,n,a);break e}else if(n!==i){i=_t(Error(u(424)),t),Pl(i),t=Dd(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=na(e.firstChild),jt=t,Re=!0,Ka=null,ta=!0,a=Of(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vn(),n===i){t=Ta(e,t,a);break e}St(e,t,n,a)}t=t.child}return t;case 26:return yr(e,t),e===null?(a=Pp(t.type,null,t.pendingProps,null))?t.memoizedState=a:Re||(a=t.type,e=t.pendingProps,n=Hr(he.current).createElement(a),n[At]=t,n[Rt]=e,Et(n,a,e),bt(n),t.stateNode=n):t.memoizedState=Pp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Bt(t),e===null&&Re&&(n=t.stateNode=Xp(t.type,t.pendingProps,he.current),jt=t,ta=!0,i=$e,rn(t.type)?(jc=i,$e=na(n.firstChild)):$e=i),St(e,t,t.pendingProps.children,a),yr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Re&&((i=n=$e)&&(n=H0(n,t.type,t.pendingProps,ta),n!==null?(t.stateNode=n,jt=t,$e=na(n.firstChild),ta=!1,i=!0):i=!1),i||Za(t)),Bt(t),i=t.type,o=t.pendingProps,d=e!==null?e.memoizedProps:null,n=o.children,xc(i,o)?n=null:d!==null&&xc(i,d)&&(t.flags|=32),t.memoizedState!==null&&(i=gs(e,t,Ig,null,null,a),ji._currentValue=i),yr(e,t),St(e,t,n,a),t.child;case 6:return e===null&&Re&&((e=a=$e)&&(a=L0(a,t.pendingProps,ta),a!==null?(t.stateNode=a,jt=t,$e=null,e=!0):e=!1),e||Za(t)),null;case 13:return Ud(e,t,a);case 4:return tt(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Nn(t,null,n,a):St(e,t,n,a),t.child;case 11:return Nd(e,t,t.type,t.pendingProps,a);case 7:return St(e,t,t.pendingProps,a),t.child;case 8:return St(e,t,t.pendingProps.children,a),t.child;case 12:return St(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Xa(t,t.type,n.value),St(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,jn(t),i=wt(i),n=n(i),t.flags|=1,St(e,t,n,a),t.child;case 14:return zd(e,t,t.type,t.pendingProps,a);case 15:return Cd(e,t,t.type,t.pendingProps,a);case 19:return Ld(e,t,a);case 31:return i0(e,t,a);case 22:return Od(e,t,a,t.pendingProps);case 24:return jn(t),n=wt(pt),e===null?(i=rs(),i===null&&(i=Je,o=ls(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=a),i=o),t.memoizedState={parent:n,cache:i},ss(t),Xa(t,pt,i)):((e.lanes&a)!==0&&(cs(e,t),ai(t,null,null,a),ti()),i=e.memoizedState,o=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Xa(t,pt,n)):(n=o.cache,Xa(t,pt,n),n!==i.cache&&ns(t,[pt],a,!0))),St(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Ba(e){e.flags|=4}function Ks(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(fp())e.flags|=8192;else throw En=lr,os}else e.flags&=-16777217}function Vd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!eh(t))if(fp())e.flags|=8192;else throw En=lr,os}function Ar(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ul():536870912,e.lanes|=t,gl|=t)}function si(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function o0(e,t,a){var n=t.pendingProps;switch(_o(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return et(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),za(pt),Fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nl(t)?Ba(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,es())),et(t),null;case 26:var i=t.type,o=t.memoizedState;return e===null?(Ba(t),o!==null?(et(t),Vd(t,o)):(et(t),Ks(t,i,null,n,a))):o?o!==e.memoizedState?(Ba(t),et(t),Vd(t,o)):(et(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Ba(t),et(t),Ks(t,i,e,n,a)),null;case 27:if(rt(t),a=he.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ba(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return et(t),null}e=W.current,nl(t)?bf(t):(e=Xp(i,n,a),t.stateNode=e,Ba(t))}return et(t),null;case 5:if(rt(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ba(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return et(t),null}if(o=W.current,nl(t))bf(t);else{var d=Hr(he.current);switch(o){case 1:o=d.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:o=d.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":o=d.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":o=d.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":o=d.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?d.createElement("select",{is:n.is}):d.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?d.createElement(i,{is:n.is}):d.createElement(i)}}o[At]=t,o[Rt]=n;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)o.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=o;e:switch(Et(o,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Ba(t)}}return et(t),Ks(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Ba(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(e=he.current,nl(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=jt,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[At]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Up(e.nodeValue,a)),e||Za(t,!0)}else e=Hr(e).createTextNode(n),e[At]=t,t.stateNode=e}return et(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=nl(t),a!==null){if(e===null){if(!n)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[At]=t}else vn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),e=!1}else a=es(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Zt(t),t):(Zt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return et(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=nl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[At]=t}else vn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),i=!1}else i=es(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Zt(t),t):(Zt(t),null)}return Zt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ar(t,t.updateQueue),et(t),null);case 4:return Fe(),e===null&&dc(t.stateNode.containerInfo),et(t),null;case 10:return za(t.type),et(t),null;case 19:if(H(ut),n=t.memoizedState,n===null)return et(t),null;if(i=(t.flags&128)!==0,o=n.rendering,o===null)if(i)si(n,!1);else{if(ct!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=sr(e),o!==null){for(t.flags|=128,si(n,!1),e=o.updateQueue,t.updateQueue=e,Ar(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)pf(a,e),a=a.sibling;return K(ut,ut.current&1|2),Re&&Ea(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Ot()>Nr&&(t.flags|=128,i=!0,si(n,!1),t.lanes=4194304)}else{if(!i)if(e=sr(o),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ar(t,e),si(n,!0),n.tail===null&&n.tailMode==="hidden"&&!o.alternate&&!Re)return et(t),null}else 2*Ot()-n.renderingStartTime>Nr&&a!==536870912&&(t.flags|=128,i=!0,si(n,!1),t.lanes=4194304);n.isBackwards?(o.sibling=t.child,t.child=o):(e=n.last,e!==null?e.sibling=o:t.child=o,n.last=o)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Ot(),e.sibling=null,a=ut.current,K(ut,i?a&1|2:a&1),Re&&Ea(t,n.treeForkCount),e):(et(t),null);case 22:case 23:return Zt(t),ps(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),a=t.updateQueue,a!==null&&Ar(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&H(wn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),za(pt),et(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function s0(e,t){switch(_o(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return za(pt),Fe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return rt(t),null;case 31:if(t.memoizedState!==null){if(Zt(t),t.alternate===null)throw Error(u(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Zt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(ut),null;case 4:return Fe(),null;case 10:return za(t.type),null;case 22:case 23:return Zt(t),ps(),e!==null&&H(wn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return za(pt),null;case 25:return null;default:return null}}function kd(e,t){switch(_o(t),t.tag){case 3:za(pt),Fe();break;case 26:case 27:case 5:rt(t);break;case 4:Fe();break;case 31:t.memoizedState!==null&&Zt(t);break;case 13:Zt(t);break;case 19:H(ut);break;case 10:za(t.type);break;case 22:case 23:Zt(t),ps(),e!==null&&H(wn);break;case 24:za(pt)}}function ci(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var o=a.create,d=a.inst;n=o(),d.destroy=n}a=a.next}while(a!==i)}}catch(g){Qe(t,t.return,g)}}function _a(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&e)===e){var d=n.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,i=t;var v=a,C=g;try{C()}catch(k){Qe(i,v,k)}}}n=n.next}while(n!==o)}}catch(k){Qe(t,t.return,k)}}function Qd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Bf(t,a)}catch(n){Qe(e,e.return,n)}}}function Yd(e,t,a){a.props=Cn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Qe(e,t,n)}}function ui(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){Qe(e,t,i)}}function ga(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Qe(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Qe(e,t,i)}else a.current=null}function Gd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Qe(e,e.return,i)}}function Zs(e,t,a){try{var n=e.stateNode;T0(n,e.type,a,t),n[Rt]=t}catch(i){Qe(e,e.return,i)}}function Kd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rn(e.type)||e.tag===4}function Xs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fs(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ja));else if(n!==4&&(n===27&&rn(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Fs(e,t,a),e=e.sibling;e!==null;)Fs(e,t,a),e=e.sibling}function jr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&rn(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jr(e,t,a),e=e.sibling;e!==null;)jr(e,t,a),e=e.sibling}function Zd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Et(t,n,a),t[At]=e,t[Rt]=a}catch(o){Qe(e,e.return,o)}}var Ra=!1,gt=!1,Js=!1,Xd=typeof WeakSet=="function"?WeakSet:Set,yt=null;function c0(e,t){if(e=e.containerInfo,mc=Gr,e=nf(e),Qo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var d=0,g=-1,v=-1,C=0,k=0,G=e,T=null;t:for(;;){for(var U;G!==a||i!==0&&G.nodeType!==3||(g=d+i),G!==o||n!==0&&G.nodeType!==3||(v=d+n),G.nodeType===3&&(d+=G.nodeValue.length),(U=G.firstChild)!==null;)T=G,G=U;for(;;){if(G===e)break t;if(T===a&&++C===i&&(g=d),T===o&&++k===n&&(v=d),(U=G.nextSibling)!==null)break;G=T,T=G.parentNode}G=U}a=g===-1||v===-1?null:{start:g,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(gc={focusedElem:e,selectionRange:a},Gr=!1,yt=t;yt!==null;)if(t=yt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,yt=e;else for(;yt!==null;){switch(t=yt,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,i=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var ie=Cn(a.type,i);e=n.getSnapshotBeforeUpdate(ie,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(de){Qe(a,a.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)yc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,yt=e;break}yt=t.return}}function Fd(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Da(e,a),n&4&&ci(5,a);break;case 1:if(Da(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){Qe(a,a.return,d)}else{var i=Cn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Qe(a,a.return,d)}}n&64&&Qd(a),n&512&&ui(a,a.return);break;case 3:if(Da(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Bf(e,t)}catch(d){Qe(a,a.return,d)}}break;case 27:t===null&&n&4&&Zd(a);case 26:case 5:Da(e,a),t===null&&n&4&&Gd(a),n&512&&ui(a,a.return);break;case 12:Da(e,a);break;case 31:Da(e,a),n&4&&Wd(e,a);break;case 13:Da(e,a),n&4&&Id(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=b0.bind(null,a),q0(e,a))));break;case 22:if(n=a.memoizedState!==null||Ra,!n){t=t!==null&&t.memoizedState!==null||gt,i=Ra;var o=gt;Ra=n,(gt=t)&&!o?Ua(e,a,(a.subtreeFlags&8772)!==0):Da(e,a),Ra=i,gt=o}break;case 30:break;default:Da(e,a)}}function Jd(e){var t=e.alternate;t!==null&&(e.alternate=null,Jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&So(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nt=null,Dt=!1;function Ma(e,t,a){for(a=a.child;a!==null;)Pd(e,t,a),a=a.sibling}function Pd(e,t,a){if($&&typeof $.onCommitFiberUnmount=="function")try{$.onCommitFiberUnmount(Y,a)}catch{}switch(a.tag){case 26:gt||ga(a,t),Ma(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gt||ga(a,t);var n=nt,i=Dt;rn(a.type)&&(nt=a.stateNode,Dt=!1),Ma(e,t,a),yi(a.stateNode),nt=n,Dt=i;break;case 5:gt||ga(a,t);case 6:if(n=nt,i=Dt,nt=null,Ma(e,t,a),nt=n,Dt=i,nt!==null)if(Dt)try{(nt.nodeType===9?nt.body:nt.nodeName==="HTML"?nt.ownerDocument.body:nt).removeChild(a.stateNode)}catch(o){Qe(a,t,o)}else try{nt.removeChild(a.stateNode)}catch(o){Qe(a,t,o)}break;case 18:nt!==null&&(Dt?(e=nt,Qp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Sl(e)):Qp(nt,a.stateNode));break;case 4:n=nt,i=Dt,nt=a.stateNode.containerInfo,Dt=!0,Ma(e,t,a),nt=n,Dt=i;break;case 0:case 11:case 14:case 15:_a(2,a,t),gt||_a(4,a,t),Ma(e,t,a);break;case 1:gt||(ga(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Yd(a,t,n)),Ma(e,t,a);break;case 21:Ma(e,t,a);break;case 22:gt=(n=gt)||a.memoizedState!==null,Ma(e,t,a),gt=n;break;default:Ma(e,t,a)}}function Wd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Sl(e)}catch(a){Qe(t,t.return,a)}}}function Id(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Sl(e)}catch(a){Qe(t,t.return,a)}}function u0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xd),t;default:throw Error(u(435,e.tag))}}function wr(e,t){var a=u0(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=y0.bind(null,e,n);n.then(i,i)}})}function Ut(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],o=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 27:if(rn(g.type)){nt=g.stateNode,Dt=!1;break e}break;case 5:nt=g.stateNode,Dt=!1;break e;case 3:case 4:nt=g.stateNode.containerInfo,Dt=!0;break e}g=g.return}if(nt===null)throw Error(u(160));Pd(o,d,i),nt=null,Dt=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_d(t,e),t=t.sibling}var sa=null;function _d(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ut(t,e),Ht(e),n&4&&(_a(3,e,e.return),ci(3,e),_a(5,e,e.return));break;case 1:Ut(t,e),Ht(e),n&512&&(gt||a===null||ga(a,a.return)),n&64&&Ra&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=sa;if(Ut(t,e),Ht(e),n&512&&(gt||a===null||ga(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":o=i.getElementsByTagName("title")[0],(!o||o[Ll]||o[At]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(n),i.head.insertBefore(o,i.querySelector("head > title"))),Et(o,n,a),o[At]=e,bt(o),n=o;break e;case"link":var d=_p("link","href",i).get(n+(a.href||""));if(d){for(var g=0;g<d.length;g++)if(o=d[g],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(g,1);break t}}o=i.createElement(n),Et(o,n,a),i.head.appendChild(o);break;case"meta":if(d=_p("meta","content",i).get(n+(a.content||""))){for(g=0;g<d.length;g++)if(o=d[g],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(g,1);break t}}o=i.createElement(n),Et(o,n,a),i.head.appendChild(o);break;default:throw Error(u(468,n))}o[At]=e,bt(o),n=o}e.stateNode=n}else $p(i,e.type,e.stateNode);else e.stateNode=Ip(i,n,e.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?$p(i,e.type,e.stateNode):Ip(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Zs(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ut(t,e),Ht(e),n&512&&(gt||a===null||ga(a,a.return)),a!==null&&n&4&&Zs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ut(t,e),Ht(e),n&512&&(gt||a===null||ga(a,a.return)),e.flags&32){i=e.stateNode;try{Fn(i,"")}catch(ie){Qe(e,e.return,ie)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Zs(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Js=!0);break;case 6:if(Ut(t,e),Ht(e),n&4){if(e.stateNode===null)throw Error(u(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(ie){Qe(e,e.return,ie)}}break;case 3:if(Vr=null,i=sa,sa=Lr(t.containerInfo),Ut(t,e),sa=i,Ht(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Sl(t.containerInfo)}catch(ie){Qe(e,e.return,ie)}Js&&(Js=!1,$d(e));break;case 4:n=sa,sa=Lr(e.stateNode.containerInfo),Ut(t,e),Ht(e),sa=n;break;case 12:Ut(t,e),Ht(e);break;case 31:Ut(t,e),Ht(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wr(e,n)));break;case 13:Ut(t,e),Ht(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Er=Ot()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wr(e,n)));break;case 22:i=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,C=Ra,k=gt;if(Ra=C||i,gt=k||v,Ut(t,e),gt=k,Ra=C,Ht(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||v||Ra||gt||On(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(o=v.stateNode,i)d=o.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=v.stateNode;var G=v.memoizedProps.style,T=G!=null&&G.hasOwnProperty("display")?G.display:null;g.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(ie){Qe(v,v.return,ie)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=i?"":v.memoizedProps}catch(ie){Qe(v,v.return,ie)}}}else if(t.tag===18){if(a===null){v=t;try{var U=v.stateNode;i?Yp(U,!0):Yp(v.stateNode,!1)}catch(ie){Qe(v,v.return,ie)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,wr(e,a))));break;case 19:Ut(t,e),Ht(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wr(e,n)));break;case 30:break;case 21:break;default:Ut(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Kd(n)){a=n;break}n=n.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var i=a.stateNode,o=Xs(e);jr(e,o,i);break;case 5:var d=a.stateNode;a.flags&32&&(Fn(d,""),a.flags&=-33);var g=Xs(e);jr(e,g,d);break;case 3:case 4:var v=a.stateNode.containerInfo,C=Xs(e);Fs(e,C,v);break;default:throw Error(u(161))}}catch(k){Qe(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $d(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$d(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Da(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Fd(e,t.alternate,t),t=t.sibling}function On(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:_a(4,t,t.return),On(t);break;case 1:ga(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Yd(t,t.return,a),On(t);break;case 27:yi(t.stateNode);case 26:case 5:ga(t,t.return),On(t);break;case 22:t.memoizedState===null&&On(t);break;case 30:On(t);break;default:On(t)}e=e.sibling}}function Ua(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,o=t,d=o.flags;switch(o.tag){case 0:case 11:case 15:Ua(i,o,a),ci(4,o);break;case 1:if(Ua(i,o,a),n=o,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(C){Qe(n,n.return,C)}if(n=o,i=n.updateQueue,i!==null){var g=n.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)Tf(v[i],g)}catch(C){Qe(n,n.return,C)}}a&&d&64&&Qd(o),ui(o,o.return);break;case 27:Zd(o);case 26:case 5:Ua(i,o,a),a&&n===null&&d&4&&Gd(o),ui(o,o.return);break;case 12:Ua(i,o,a);break;case 31:Ua(i,o,a),a&&d&4&&Wd(i,o);break;case 13:Ua(i,o,a),a&&d&4&&Id(i,o);break;case 22:o.memoizedState===null&&Ua(i,o,a),ui(o,o.return);break;case 30:break;default:Ua(i,o,a)}t=t.sibling}}function Ps(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Wl(a))}function Ws(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wl(e))}function ca(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ep(e,t,a,n),t=t.sibling}function ep(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:ca(e,t,a,n),i&2048&&ci(9,t);break;case 1:ca(e,t,a,n);break;case 3:ca(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wl(e)));break;case 12:if(i&2048){ca(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,d=o.id,g=o.onPostCommit;typeof g=="function"&&g(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Qe(t,t.return,v)}}else ca(e,t,a,n);break;case 31:ca(e,t,a,n);break;case 13:ca(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,d=t.alternate,t.memoizedState!==null?o._visibility&2?ca(e,t,a,n):fi(e,t):o._visibility&2?ca(e,t,a,n):(o._visibility|=2,pl(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Ps(d,t);break;case 24:ca(e,t,a,n),i&2048&&Ws(t.alternate,t);break;default:ca(e,t,a,n)}}function pl(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,d=t,g=a,v=n,C=d.flags;switch(d.tag){case 0:case 11:case 15:pl(o,d,g,v,i),ci(8,d);break;case 23:break;case 22:var k=d.stateNode;d.memoizedState!==null?k._visibility&2?pl(o,d,g,v,i):fi(o,d):(k._visibility|=2,pl(o,d,g,v,i)),i&&C&2048&&Ps(d.alternate,d);break;case 24:pl(o,d,g,v,i),i&&C&2048&&Ws(d.alternate,d);break;default:pl(o,d,g,v,i)}t=t.sibling}}function fi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:fi(a,n),i&2048&&Ps(n.alternate,n);break;case 24:fi(a,n),i&2048&&Ws(n.alternate,n);break;default:fi(a,n)}t=t.sibling}}var di=8192;function hl(e,t,a){if(e.subtreeFlags&di)for(e=e.child;e!==null;)tp(e,t,a),e=e.sibling}function tp(e,t,a){switch(e.tag){case 26:hl(e,t,a),e.flags&di&&e.memoizedState!==null&&W0(a,sa,e.memoizedState,e.memoizedProps);break;case 5:hl(e,t,a);break;case 3:case 4:var n=sa;sa=Lr(e.stateNode.containerInfo),hl(e,t,a),sa=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=di,di=16777216,hl(e,t,a),di=n):hl(e,t,a));break;default:hl(e,t,a)}}function ap(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];yt=n,lp(n,e)}ap(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)np(e),e=e.sibling}function np(e){switch(e.tag){case 0:case 11:case 15:pi(e),e.flags&2048&&_a(9,e,e.return);break;case 3:pi(e);break;case 12:pi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Sr(e)):pi(e);break;default:pi(e)}}function Sr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];yt=n,lp(n,e)}ap(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:_a(8,t,t.return),Sr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Sr(t));break;default:Sr(t)}e=e.sibling}}function lp(e,t){for(;yt!==null;){var a=yt;switch(a.tag){case 0:case 11:case 15:_a(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Wl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,yt=n;else e:for(a=e;yt!==null;){n=yt;var i=n.sibling,o=n.return;if(Jd(n),n===a){yt=null;break e}if(i!==null){i.return=o,yt=i;break e}yt=o}}}var f0={getCacheForType:function(e){var t=wt(pt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return wt(pt).controller.signal}},d0=typeof WeakMap=="function"?WeakMap:Map,qe=0,Je=null,Ne=null,Ce=0,ke=0,Xt=null,$a=!1,ml=!1,Is=!1,Ha=0,ct=0,en=0,Tn=0,_s=0,Ft=0,gl=0,hi=null,Lt=null,$s=!1,Er=0,ip=0,Nr=1/0,zr=null,tn=null,xt=0,an=null,xl=null,La=0,ec=0,tc=null,rp=null,mi=0,ac=null;function Jt(){return(qe&2)!==0&&Ce!==0?Ce&-Ce:B.T!==null?sc():Au()}function op(){if(Ft===0)if((Ce&536870912)===0||Re){var e=ot;ot<<=1,(ot&3932160)===0&&(ot=262144),Ft=e}else Ft=536870912;return e=Kt.current,e!==null&&(e.flags|=32),Ft}function qt(e,t,a){(e===Je&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(bl(e,0),nn(e,Ce,Ft,!1)),Hl(e,a),((qe&2)===0||e!==Je)&&(e===Je&&((qe&2)===0&&(Tn|=a),ct===4&&nn(e,Ce,Ft,!1)),xa(e))}function sp(e,t,a){if((qe&6)!==0)throw Error(u(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Qt(e,t),i=n?m0(e,t):lc(e,t,!0),o=n;do{if(i===0){ml&&!n&&nn(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!p0(a)){i=lc(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var g=e;i=hi;var v=g.current.memoizedState.isDehydrated;if(v&&(bl(g,d).flags|=256),d=lc(g,d,!1),d!==2){if(Is&&!v){g.errorRecoveryDisabledLanes|=o,Tn|=o,i=4;break e}o=Lt,Lt=i,o!==null&&(Lt===null?Lt=o:Lt.push.apply(Lt,o))}i=d}if(o=!1,i!==2)continue}}if(i===1){bl(e,0),nn(e,t,0,!0);break}e:{switch(n=e,o=i,o){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:nn(n,t,Ft,!$a);break e;case 2:Lt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=Er+300-Ot(),10<i)){if(nn(n,t,Ft,!$a),ra(n,0,!0)!==0)break e;La=t,n.timeoutHandle=Vp(cp.bind(null,n,a,Lt,zr,$s,t,Ft,Tn,gl,$a,o,"Throttled",-0,0),i);break e}cp(n,a,Lt,zr,$s,t,Ft,Tn,gl,$a,o,null,-0,0)}}break}while(!0);xa(e)}function cp(e,t,a,n,i,o,d,g,v,C,k,G,T,U){if(e.timeoutHandle=-1,G=t.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ja},tp(t,o,G);var ie=(o&62914560)===o?Er-Ot():(o&4194048)===o?ip-Ot():0;if(ie=I0(G,ie),ie!==null){La=o,e.cancelPendingCommit=ie(xp.bind(null,e,t,o,a,n,i,d,g,v,k,G,null,T,U)),nn(e,o,d,!C);return}}xp(e,t,o,a,n,i,d,g,v)}function p0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],o=i.getSnapshot;i=i.value;try{if(!Yt(o(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t,a,n){t&=~_s,t&=~Tn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var o=31-_(i),d=1<<o;n[o]=-1,i&=~d}a!==0&&bu(e,a,t)}function Cr(){return(qe&6)===0?(gi(0),!1):!0}function nc(){if(Ne!==null){if(ke===0)var e=Ne.return;else e=Ne,Na=An=null,ys(e),sl=null,_l=0,e=Ne;for(;e!==null;)kd(e.alternate,e),e=e.return;Ne=null}}function bl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,M0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),La=0,nc(),Je=e,Ne=a=Sa(e.current,null),Ce=t,ke=0,Xt=null,$a=!1,ml=Qt(e,t),Is=!1,gl=Ft=_s=Tn=en=ct=0,Lt=hi=null,$s=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-_(n),o=1<<i;t|=e[i],n&=~o}return Ha=t,Pi(),a}function up(e,t){ye=null,B.H=ri,t===ol||t===nr?(t=Nf(),ke=3):t===os?(t=Nf(),ke=4):ke=t===Us?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Xt=t,Ne===null&&(ct=1,xr(e,_t(t,e.current)))}function fp(){var e=Kt.current;return e===null?!0:(Ce&4194048)===Ce?aa===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===aa:!1}function dp(){var e=B.H;return B.H=ri,e===null?ri:e}function pp(){var e=B.A;return B.A=f0,e}function Or(){ct=4,$a||(Ce&4194048)!==Ce&&Kt.current!==null||(ml=!0),(en&134217727)===0&&(Tn&134217727)===0||Je===null||nn(Je,Ce,Ft,!1)}function lc(e,t,a){var n=qe;qe|=2;var i=dp(),o=pp();(Je!==e||Ce!==t)&&(zr=null,bl(e,t)),t=!1;var d=ct;e:do try{if(ke!==0&&Ne!==null){var g=Ne,v=Xt;switch(ke){case 8:nc(),d=6;break e;case 3:case 2:case 9:case 6:Kt.current===null&&(t=!0);var C=ke;if(ke=0,Xt=null,yl(e,g,v,C),a&&ml){d=0;break e}break;default:C=ke,ke=0,Xt=null,yl(e,g,v,C)}}h0(),d=ct;break}catch(k){up(e,k)}while(!0);return t&&e.shellSuspendCounter++,Na=An=null,qe=n,B.H=i,B.A=o,Ne===null&&(Je=null,Ce=0,Pi()),d}function h0(){for(;Ne!==null;)hp(Ne)}function m0(e,t){var a=qe;qe|=2;var n=dp(),i=pp();Je!==e||Ce!==t?(zr=null,Nr=Ot()+500,bl(e,t)):ml=Qt(e,t);e:do try{if(ke!==0&&Ne!==null){t=Ne;var o=Xt;t:switch(ke){case 1:ke=0,Xt=null,yl(e,t,o,1);break;case 2:case 9:if(Sf(o)){ke=0,Xt=null,mp(t);break}t=function(){ke!==2&&ke!==9||Je!==e||(ke=7),xa(e)},o.then(t,t);break e;case 3:ke=7;break e;case 4:ke=5;break e;case 7:Sf(o)?(ke=0,Xt=null,mp(t)):(ke=0,Xt=null,yl(e,t,o,7));break;case 5:var d=null;switch(Ne.tag){case 26:d=Ne.memoizedState;case 5:case 27:var g=Ne;if(d?eh(d):g.stateNode.complete){ke=0,Xt=null;var v=g.sibling;if(v!==null)Ne=v;else{var C=g.return;C!==null?(Ne=C,Tr(C)):Ne=null}break t}}ke=0,Xt=null,yl(e,t,o,5);break;case 6:ke=0,Xt=null,yl(e,t,o,6);break;case 8:nc(),ct=6;break e;default:throw Error(u(462))}}g0();break}catch(k){up(e,k)}while(!0);return Na=An=null,B.H=n,B.A=i,qe=a,Ne!==null?0:(Je=null,Ce=0,Pi(),ct)}function g0(){for(;Ne!==null&&!qn();)hp(Ne)}function hp(e){var t=qd(e.alternate,e,Ha);e.memoizedProps=e.pendingProps,t===null?Tr(e):Ne=t}function mp(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Rd(a,t,t.pendingProps,t.type,void 0,Ce);break;case 11:t=Rd(a,t,t.pendingProps,t.type.render,t.ref,Ce);break;case 5:ys(t);default:kd(a,t),t=Ne=pf(t,Ha),t=qd(a,t,Ha)}e.memoizedProps=e.pendingProps,t===null?Tr(e):Ne=t}function yl(e,t,a,n){Na=An=null,ys(t),sl=null,_l=0;var i=t.return;try{if(l0(e,i,t,a,Ce)){ct=1,xr(e,_t(a,e.current)),Ne=null;return}}catch(o){if(i!==null)throw Ne=i,o;ct=1,xr(e,_t(a,e.current)),Ne=null;return}t.flags&32768?(Re||n===1?e=!0:ml||(Ce&536870912)!==0?e=!1:($a=e=!0,(n===2||n===9||n===3||n===6)&&(n=Kt.current,n!==null&&n.tag===13&&(n.flags|=16384))),gp(t,e)):Tr(t)}function Tr(e){var t=e;do{if((t.flags&32768)!==0){gp(t,$a);return}e=t.return;var a=o0(t.alternate,t,Ha);if(a!==null){Ne=a;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);ct===0&&(ct=5)}function gp(e,t){do{var a=s0(e.alternate,e);if(a!==null){a.flags&=32767,Ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=a}while(e!==null);ct=6,Ne=null}function xp(e,t,a,n,i,o,d,g,v){e.cancelPendingCommit=null;do Br();while(xt!==0);if((qe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(o=t.lanes|t.childLanes,o|=Xo,Pm(e,a,o,d,g,v),e===Je&&(Ne=Je=null,Ce=0),xl=t,an=e,La=a,ec=o,tc=i,rp=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,v0(J,function(){return jp(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null,i=P.p,P.p=2,d=qe,qe|=4;try{c0(e,t,a)}finally{qe=d,P.p=i,B.T=n}}xt=1,bp(),yp(),vp()}}function bp(){if(xt===1){xt=0;var e=an,t=xl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var n=P.p;P.p=2;var i=qe;qe|=4;try{_d(t,e);var o=gc,d=nf(e.containerInfo),g=o.focusedElem,v=o.selectionRange;if(d!==g&&g&&g.ownerDocument&&af(g.ownerDocument.documentElement,g)){if(v!==null&&Qo(g)){var C=v.start,k=v.end;if(k===void 0&&(k=C),"selectionStart"in g)g.selectionStart=C,g.selectionEnd=Math.min(k,g.value.length);else{var G=g.ownerDocument||document,T=G&&G.defaultView||window;if(T.getSelection){var U=T.getSelection(),ie=g.textContent.length,de=Math.min(v.start,ie),Ze=v.end===void 0?de:Math.min(v.end,ie);!U.extend&&de>Ze&&(d=Ze,Ze=de,de=d);var N=tf(g,de),S=tf(g,Ze);if(N&&S&&(U.rangeCount!==1||U.anchorNode!==N.node||U.anchorOffset!==N.offset||U.focusNode!==S.node||U.focusOffset!==S.offset)){var z=G.createRange();z.setStart(N.node,N.offset),U.removeAllRanges(),de>Ze?(U.addRange(z),U.extend(S.node,S.offset)):(z.setEnd(S.node,S.offset),U.addRange(z))}}}}for(G=[],U=g;U=U.parentNode;)U.nodeType===1&&G.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<G.length;g++){var Q=G[g];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Gr=!!mc,gc=mc=null}finally{qe=i,P.p=n,B.T=a}}e.current=t,xt=2}}function yp(){if(xt===2){xt=0;var e=an,t=xl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var n=P.p;P.p=2;var i=qe;qe|=4;try{Fd(e,t.alternate,t)}finally{qe=i,P.p=n,B.T=a}}xt=3}}function vp(){if(xt===4||xt===3){xt=0,Dl();var e=an,t=xl,a=La,n=rp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?xt=5:(xt=0,xl=an=null,Ap(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(tn=null),jo(a),t=t.stateNode,$&&typeof $.onCommitFiberRoot=="function")try{$.onCommitFiberRoot(Y,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=B.T,i=P.p,P.p=2,B.T=null;try{for(var o=e.onRecoverableError,d=0;d<n.length;d++){var g=n[d];o(g.value,{componentStack:g.stack})}}finally{B.T=t,P.p=i}}(La&3)!==0&&Br(),xa(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===ac?mi++:(mi=0,ac=e):mi=0,gi(0)}}function Ap(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Wl(t)))}function Br(){return bp(),yp(),vp(),jp()}function jp(){if(xt!==5)return!1;var e=an,t=ec;ec=0;var a=jo(La),n=B.T,i=P.p;try{P.p=32>a?32:a,B.T=null,a=tc,tc=null;var o=an,d=La;if(xt=0,xl=an=null,La=0,(qe&6)!==0)throw Error(u(331));var g=qe;if(qe|=4,np(o.current),ep(o,o.current,d,a),qe=g,gi(0,!1),$&&typeof $.onPostCommitFiberRoot=="function")try{$.onPostCommitFiberRoot(Y,o)}catch{}return!0}finally{P.p=i,B.T=n,Ap(e,t)}}function wp(e,t,a){t=_t(a,t),t=Ds(e.stateNode,t,2),e=Pa(e,t,2),e!==null&&(Hl(e,2),xa(e))}function Qe(e,t,a){if(e.tag===3)wp(e,e,a);else for(;t!==null;){if(t.tag===3){wp(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(tn===null||!tn.has(n))){e=_t(a,e),a=Sd(2),n=Pa(t,a,2),n!==null&&(Ed(a,n,t,e),Hl(n,2),xa(n));break}}t=t.return}}function ic(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new d0;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Is=!0,i.add(a),e=x0.bind(null,e,t,a),t.then(e,e))}function x0(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Je===e&&(Ce&a)===a&&(ct===4||ct===3&&(Ce&62914560)===Ce&&300>Ot()-Er?(qe&2)===0&&bl(e,0):_s|=a,gl===Ce&&(gl=0)),xa(e)}function Sp(e,t){t===0&&(t=Ul()),e=bn(e,t),e!==null&&(Hl(e,t),xa(e))}function b0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Sp(e,a)}function y0(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(t),Sp(e,a)}function v0(e,t){return Ln(e,t)}var Rr=null,vl=null,rc=!1,Mr=!1,oc=!1,ln=0;function xa(e){e!==vl&&e.next===null&&(vl===null?Rr=vl=e:vl=vl.next=e),Mr=!0,rc||(rc=!0,j0())}function gi(e,t){if(!oc&&Mr){oc=!0;do for(var a=!1,n=Rr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var o=0;else{var d=n.suspendedLanes,g=n.pingedLanes;o=(1<<31-_(42|e)+1)-1,o&=i&~(d&~g),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,Cp(n,o))}else o=Ce,o=ra(n,n===Je?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||Qt(n,o)||(a=!0,Cp(n,o));n=n.next}while(a);oc=!1}}function A0(){Ep()}function Ep(){Mr=rc=!1;var e=0;ln!==0&&R0()&&(e=ln);for(var t=Ot(),a=null,n=Rr;n!==null;){var i=n.next,o=Np(n,t);o===0?(n.next=null,a===null?Rr=i:a.next=i,i===null&&(vl=a)):(a=n,(e!==0||(o&3)!==0)&&(Mr=!0)),n=i}xt!==0&&xt!==5||gi(e),ln!==0&&(ln=0)}function Np(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var d=31-_(o),g=1<<d,v=i[d];v===-1?((g&a)===0||(g&n)!==0)&&(i[d]=Vn(g,t)):v<=t&&(e.expiredLanes|=g),o&=~g}if(t=Je,a=Ce,a=ra(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&pn(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Qt(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&pn(n),jo(a)){case 2:case 8:a=F;break;case 32:a=J;break;case 268435456:a=Se;break;default:a=J}return n=zp.bind(null,e),a=Ln(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&pn(n),e.callbackPriority=2,e.callbackNode=null,2}function zp(e,t){if(xt!==0&&xt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Br()&&e.callbackNode!==a)return null;var n=Ce;return n=ra(e,e===Je?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(sp(e,n,t),Np(e,Ot()),e.callbackNode!=null&&e.callbackNode===a?zp.bind(null,e):null)}function Cp(e,t){if(Br())return null;sp(e,t,!0)}function j0(){D0(function(){(qe&6)!==0?Ln(O,A0):Ep()})}function sc(){if(ln===0){var e=il;e===0&&(e=Ve,Ve<<=1,(Ve&261888)===0&&(Ve=256)),ln=e}return ln}function Op(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qi(""+e)}function Tp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function w0(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var o=Op((i[Rt]||null).action),d=n.submitter;d&&(t=(t=d[Rt]||null)?Op(t.formAction):d.getAttribute("formAction"),t!==null&&(o=t,d=null));var g=new Zi("action","action",null,n,i);e.push({event:g,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ln!==0){var v=d?Tp(i,d):new FormData(i);Cs(a,{pending:!0,data:v,method:i.method,action:o},null,v)}}else typeof o=="function"&&(g.preventDefault(),v=d?Tp(i,d):new FormData(i),Cs(a,{pending:!0,data:v,method:i.method,action:o},o,v))},currentTarget:i}]})}}for(var cc=0;cc<Zo.length;cc++){var uc=Zo[cc],S0=uc.toLowerCase(),E0=uc[0].toUpperCase()+uc.slice(1);oa(S0,"on"+E0)}oa(of,"onAnimationEnd"),oa(sf,"onAnimationIteration"),oa(cf,"onAnimationStart"),oa("dblclick","onDoubleClick"),oa("focusin","onFocus"),oa("focusout","onBlur"),oa(Qg,"onTransitionRun"),oa(Yg,"onTransitionStart"),oa(Gg,"onTransitionCancel"),oa(uf,"onTransitionEnd"),Zn("onMouseEnter",["mouseout","mouseover"]),Zn("onMouseLeave",["mouseout","mouseover"]),Zn("onPointerEnter",["pointerout","pointerover"]),Zn("onPointerLeave",["pointerout","pointerover"]),hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xi));function Bp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var d=n.length-1;0<=d;d--){var g=n[d],v=g.instance,C=g.currentTarget;if(g=g.listener,v!==o&&i.isPropagationStopped())break e;o=g,i.currentTarget=C;try{o(i)}catch(k){Ji(k)}i.currentTarget=null,o=v}else for(d=0;d<n.length;d++){if(g=n[d],v=g.instance,C=g.currentTarget,g=g.listener,v!==o&&i.isPropagationStopped())break e;o=g,i.currentTarget=C;try{o(i)}catch(k){Ji(k)}i.currentTarget=null,o=v}}}}function ze(e,t){var a=t[wo];a===void 0&&(a=t[wo]=new Set);var n=e+"__bubble";a.has(n)||(Rp(t,e,2,!1),a.add(n))}function fc(e,t,a){var n=0;t&&(n|=4),Rp(a,e,n,t)}var Dr="_reactListening"+Math.random().toString(36).slice(2);function dc(e){if(!e[Dr]){e[Dr]=!0,Su.forEach(function(a){a!=="selectionchange"&&(N0.has(a)||fc(a,!1,e),fc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dr]||(t[Dr]=!0,fc("selectionchange",!1,t))}}function Rp(e,t,a,n){switch(oh(t)){case 2:var i=ex;break;case 8:i=tx;break;default:i=zc}a=i.bind(null,t,a,e),i=void 0,!Ro||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function pc(e,t,a,n,i){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var g=n.stateNode.containerInfo;if(g===i)break;if(d===4)for(d=n.return;d!==null;){var v=d.tag;if((v===3||v===4)&&d.stateNode.containerInfo===i)return;d=d.return}for(;g!==null;){if(d=Yn(g),d===null)return;if(v=d.tag,v===5||v===6||v===26||v===27){n=o=d;continue e}g=g.parentNode}}n=n.return}Hu(function(){var C=o,k=To(a),G=[];e:{var T=ff.get(e);if(T!==void 0){var U=Zi,ie=e;switch(e){case"keypress":if(Gi(a)===0)break e;case"keydown":case"keyup":U=yg;break;case"focusin":ie="focus",U=Ho;break;case"focusout":ie="blur",U=Ho;break;case"beforeblur":case"afterblur":U=Ho;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=og;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=jg;break;case of:case sf:case cf:U=ug;break;case uf:U=Sg;break;case"scroll":case"scrollend":U=ig;break;case"wheel":U=Ng;break;case"copy":case"cut":case"paste":U=dg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Qu;break;case"toggle":case"beforetoggle":U=Cg}var de=(t&4)!==0,Ze=!de&&(e==="scroll"||e==="scrollend"),N=de?T!==null?T+"Capture":null:T;de=[];for(var S=C,z;S!==null;){var Q=S;if(z=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||z===null||N===null||(Q=Vl(S,N),Q!=null&&de.push(bi(S,Q,z))),Ze)break;S=S.return}0<de.length&&(T=new U(T,ie,null,a,k),G.push({event:T,listeners:de}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",T&&a!==Oo&&(ie=a.relatedTarget||a.fromElement)&&(Yn(ie)||ie[Qn]))break e;if((U||T)&&(T=k.window===k?k:(T=k.ownerDocument)?T.defaultView||T.parentWindow:window,U?(ie=a.relatedTarget||a.toElement,U=C,ie=ie?Yn(ie):null,ie!==null&&(Ze=p(ie),de=ie.tag,ie!==Ze||de!==5&&de!==27&&de!==6)&&(ie=null)):(U=null,ie=C),U!==ie)){if(de=Vu,Q="onMouseLeave",N="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(de=Qu,Q="onPointerLeave",N="onPointerEnter",S="pointer"),Ze=U==null?T:ql(U),z=ie==null?T:ql(ie),T=new de(Q,S+"leave",U,a,k),T.target=Ze,T.relatedTarget=z,Q=null,Yn(k)===C&&(de=new de(N,S+"enter",ie,a,k),de.target=z,de.relatedTarget=Ze,Q=de),Ze=Q,U&&ie)t:{for(de=z0,N=U,S=ie,z=0,Q=N;Q;Q=de(Q))z++;Q=0;for(var ce=S;ce;ce=de(ce))Q++;for(;0<z-Q;)N=de(N),z--;for(;0<Q-z;)S=de(S),Q--;for(;z--;){if(N===S||S!==null&&N===S.alternate){de=N;break t}N=de(N),S=de(S)}de=null}else de=null;U!==null&&Mp(G,T,U,de,!1),ie!==null&&Ze!==null&&Mp(G,Ze,ie,de,!0)}}e:{if(T=C?ql(C):window,U=T.nodeName&&T.nodeName.toLowerCase(),U==="select"||U==="input"&&T.type==="file")var Ue=Pu;else if(Fu(T))if(Wu)Ue=qg;else{Ue=Hg;var oe=Ug}else U=T.nodeName,!U||U.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?C&&Co(C.elementType)&&(Ue=Pu):Ue=Lg;if(Ue&&(Ue=Ue(e,C))){Ju(G,Ue,a,k);break e}oe&&oe(e,T,C),e==="focusout"&&C&&T.type==="number"&&C.memoizedProps.value!=null&&zo(T,"number",T.value)}switch(oe=C?ql(C):window,e){case"focusin":(Fu(oe)||oe.contentEditable==="true")&&(In=oe,Yo=C,Fl=null);break;case"focusout":Fl=Yo=In=null;break;case"mousedown":Go=!0;break;case"contextmenu":case"mouseup":case"dragend":Go=!1,lf(G,a,k);break;case"selectionchange":if(kg)break;case"keydown":case"keyup":lf(G,a,k)}var je;if(qo)e:{switch(e){case"compositionstart":var Oe="onCompositionStart";break e;case"compositionend":Oe="onCompositionEnd";break e;case"compositionupdate":Oe="onCompositionUpdate";break e}Oe=void 0}else Wn?Zu(e,a)&&(Oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Oe="onCompositionStart");Oe&&(Yu&&a.locale!=="ko"&&(Wn||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&Wn&&(je=Lu()):(Ya=k,Mo="value"in Ya?Ya.value:Ya.textContent,Wn=!0)),oe=Ur(C,Oe),0<oe.length&&(Oe=new ku(Oe,e,null,a,k),G.push({event:Oe,listeners:oe}),je?Oe.data=je:(je=Xu(a),je!==null&&(Oe.data=je)))),(je=Tg?Bg(e,a):Rg(e,a))&&(Oe=Ur(C,"onBeforeInput"),0<Oe.length&&(oe=new ku("onBeforeInput","beforeinput",null,a,k),G.push({event:oe,listeners:Oe}),oe.data=je)),w0(G,e,C,a,k)}Bp(G,t)})}function bi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ur(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=Vl(e,a),i!=null&&n.unshift(bi(e,i,o)),i=Vl(e,t),i!=null&&n.push(bi(e,i,o))),e.tag===3)return n;e=e.return}return[]}function z0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mp(e,t,a,n,i){for(var o=t._reactName,d=[];a!==null&&a!==n;){var g=a,v=g.alternate,C=g.stateNode;if(g=g.tag,v!==null&&v===n)break;g!==5&&g!==26&&g!==27||C===null||(v=C,i?(C=Vl(a,o),C!=null&&d.unshift(bi(a,C,v))):i||(C=Vl(a,o),C!=null&&d.push(bi(a,C,v)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var C0=/\r\n?/g,O0=/\u0000|\uFFFD/g;function Dp(e){return(typeof e=="string"?e:""+e).replace(C0,`
`).replace(O0,"")}function Up(e,t){return t=Dp(t),Dp(e)===t}function Ke(e,t,a,n,i,o){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Fn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Fn(e,""+n);break;case"className":Vi(e,"class",n);break;case"tabIndex":Vi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Vi(e,a,n);break;case"style":Du(e,n,o);break;case"data":if(t!=="object"){Vi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Qi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&Ke(e,t,"name",i.name,i,null),Ke(e,t,"formEncType",i.formEncType,i,null),Ke(e,t,"formMethod",i.formMethod,i,null),Ke(e,t,"formTarget",i.formTarget,i,null)):(Ke(e,t,"encType",i.encType,i,null),Ke(e,t,"method",i.method,i,null),Ke(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Qi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=ja);break;case"onScroll":n!=null&&ze("scroll",e);break;case"onScrollEnd":n!=null&&ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Qi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ze("beforetoggle",e),ze("toggle",e),qi(e,"popover",n);break;case"xlinkActuate":Aa(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Aa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Aa(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Aa(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Aa(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Aa(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Aa(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Aa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Aa(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":qi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ng.get(a)||a,qi(e,a,n))}}function hc(e,t,a,n,i,o){switch(a){case"style":Du(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Fn(e,n):(typeof n=="number"||typeof n=="bigint")&&Fn(e,""+n);break;case"onScroll":n!=null&&ze("scroll",e);break;case"onScrollEnd":n!=null&&ze("scrollend",e);break;case"onClick":n!=null&&(e.onclick=ja);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Eu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),o=e[Rt]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,i),typeof n=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):qi(e,a,n)}}}function Et(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var n=!1,i=!1,o;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];if(d!=null)switch(o){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ke(e,t,o,d,a,null)}}i&&Ke(e,t,"srcSet",a.srcSet,a,null),n&&Ke(e,t,"src",a.src,a,null);return;case"input":ze("invalid",e);var g=o=d=i=null,v=null,C=null;for(n in a)if(a.hasOwnProperty(n)){var k=a[n];if(k!=null)switch(n){case"name":i=k;break;case"type":d=k;break;case"checked":v=k;break;case"defaultChecked":C=k;break;case"value":o=k;break;case"defaultValue":g=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(u(137,t));break;default:Ke(e,t,n,k,a,null)}}Tu(e,o,g,v,C,d,i,!1);return;case"select":ze("invalid",e),n=d=o=null;for(i in a)if(a.hasOwnProperty(i)&&(g=a[i],g!=null))switch(i){case"value":o=g;break;case"defaultValue":d=g;break;case"multiple":n=g;default:Ke(e,t,i,g,a,null)}t=o,a=d,e.multiple=!!n,t!=null?Xn(e,!!n,t,!1):a!=null&&Xn(e,!!n,a,!0);return;case"textarea":ze("invalid",e),o=i=n=null;for(d in a)if(a.hasOwnProperty(d)&&(g=a[d],g!=null))switch(d){case"value":n=g;break;case"defaultValue":i=g;break;case"children":o=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(u(91));break;default:Ke(e,t,d,g,a,null)}Ru(e,n,i,o);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(n=a[v],n!=null))switch(v){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ke(e,t,v,n,a,null)}return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(n=0;n<xi.length;n++)ze(xi[n],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(n=a[C],n!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ke(e,t,C,n,a,null)}return;default:if(Co(t)){for(k in a)a.hasOwnProperty(k)&&(n=a[k],n!==void 0&&hc(e,t,k,n,a,void 0));return}}for(g in a)a.hasOwnProperty(g)&&(n=a[g],n!=null&&Ke(e,t,g,n,a,null))}function T0(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,d=null,g=null,v=null,C=null,k=null;for(U in a){var G=a[U];if(a.hasOwnProperty(U)&&G!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":v=G;default:n.hasOwnProperty(U)||Ke(e,t,U,null,n,G)}}for(var T in n){var U=n[T];if(G=a[T],n.hasOwnProperty(T)&&(U!=null||G!=null))switch(T){case"type":o=U;break;case"name":i=U;break;case"checked":C=U;break;case"defaultChecked":k=U;break;case"value":d=U;break;case"defaultValue":g=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(u(137,t));break;default:U!==G&&Ke(e,t,T,U,n,G)}}No(e,d,g,v,C,k,o,i);return;case"select":U=d=g=T=null;for(o in a)if(v=a[o],a.hasOwnProperty(o)&&v!=null)switch(o){case"value":break;case"multiple":U=v;default:n.hasOwnProperty(o)||Ke(e,t,o,null,n,v)}for(i in n)if(o=n[i],v=a[i],n.hasOwnProperty(i)&&(o!=null||v!=null))switch(i){case"value":T=o;break;case"defaultValue":g=o;break;case"multiple":d=o;default:o!==v&&Ke(e,t,i,o,n,v)}t=g,a=d,n=U,T!=null?Xn(e,!!a,T,!1):!!n!=!!a&&(t!=null?Xn(e,!!a,t,!0):Xn(e,!!a,a?[]:"",!1));return;case"textarea":U=T=null;for(g in a)if(i=a[g],a.hasOwnProperty(g)&&i!=null&&!n.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ke(e,t,g,null,n,i)}for(d in n)if(i=n[d],o=a[d],n.hasOwnProperty(d)&&(i!=null||o!=null))switch(d){case"value":T=i;break;case"defaultValue":U=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==o&&Ke(e,t,d,i,n,o)}Bu(e,T,U);return;case"option":for(var ie in a)if(T=a[ie],a.hasOwnProperty(ie)&&T!=null&&!n.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Ke(e,t,ie,null,n,T)}for(v in n)if(T=n[v],U=a[v],n.hasOwnProperty(v)&&T!==U&&(T!=null||U!=null))switch(v){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:Ke(e,t,v,T,n,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in a)T=a[de],a.hasOwnProperty(de)&&T!=null&&!n.hasOwnProperty(de)&&Ke(e,t,de,null,n,T);for(C in n)if(T=n[C],U=a[C],n.hasOwnProperty(C)&&T!==U&&(T!=null||U!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,t));break;default:Ke(e,t,C,T,n,U)}return;default:if(Co(t)){for(var Ze in a)T=a[Ze],a.hasOwnProperty(Ze)&&T!==void 0&&!n.hasOwnProperty(Ze)&&hc(e,t,Ze,void 0,n,T);for(k in n)T=n[k],U=a[k],!n.hasOwnProperty(k)||T===U||T===void 0&&U===void 0||hc(e,t,k,T,n,U);return}}for(var N in a)T=a[N],a.hasOwnProperty(N)&&T!=null&&!n.hasOwnProperty(N)&&Ke(e,t,N,null,n,T);for(G in n)T=n[G],U=a[G],!n.hasOwnProperty(G)||T===U||T==null&&U==null||Ke(e,t,G,T,n,U)}function Hp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function B0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],o=i.transferSize,d=i.initiatorType,g=i.duration;if(o&&g&&Hp(d)){for(d=0,g=i.responseEnd,n+=1;n<a.length;n++){var v=a[n],C=v.startTime;if(C>g)break;var k=v.transferSize,G=v.initiatorType;k&&Hp(G)&&(v=v.responseEnd,d+=k*(v<g?1:(g-C)/(v-C)))}if(--n,t+=8*(o+d)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var mc=null,gc=null;function Hr(e){return e.nodeType===9?e:e.ownerDocument}function Lp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function xc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bc=null;function R0(){var e=window.event;return e&&e.type==="popstate"?e===bc?!1:(bc=e,!0):(bc=null,!1)}var Vp=typeof setTimeout=="function"?setTimeout:void 0,M0=typeof clearTimeout=="function"?clearTimeout:void 0,kp=typeof Promise=="function"?Promise:void 0,D0=typeof queueMicrotask=="function"?queueMicrotask:typeof kp<"u"?function(e){return kp.resolve(null).then(e).catch(U0)}:Vp;function U0(e){setTimeout(function(){throw e})}function rn(e){return e==="head"}function Qp(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),Sl(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")yi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,yi(a);for(var o=a.firstChild;o;){var d=o.nextSibling,g=o.nodeName;o[Ll]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=d}}else a==="body"&&yi(e.ownerDocument.body);a=i}while(a);Sl(t)}function Yp(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function yc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yc(a),So(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function H0(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Ll])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=na(e.nextSibling),e===null)break}return null}function L0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=na(e.nextSibling),e===null))return null;return e}function Gp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=na(e.nextSibling),e===null))return null;return e}function vc(e){return e.data==="$?"||e.data==="$~"}function Ac(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function q0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function na(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var jc=null;function Kp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return na(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Zp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Xp(e,t,a){switch(t=Hr(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function yi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);So(e)}var la=new Map,Fp=new Set;function Lr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qa=P.d;P.d={f:V0,r:k0,D:Q0,C:Y0,L:G0,m:K0,X:X0,S:Z0,M:F0};function V0(){var e=qa.f(),t=Cr();return e||t}function k0(e){var t=Gn(e);t!==null&&t.tag===5&&t.type==="form"?ud(t):qa.r(e)}var Al=typeof document>"u"?null:document;function Jp(e,t,a){var n=Al;if(n&&typeof t=="string"&&t){var i=Wt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Fp.has(i)||(Fp.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Et(t,"link",e),bt(t),n.head.appendChild(t)))}}function Q0(e){qa.D(e),Jp("dns-prefetch",e,null)}function Y0(e,t){qa.C(e,t),Jp("preconnect",e,t)}function G0(e,t,a){qa.L(e,t,a);var n=Al;if(n&&e&&t){var i='link[rel="preload"][as="'+Wt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Wt(a.imageSizes)+'"]')):i+='[href="'+Wt(e)+'"]';var o=i;switch(t){case"style":o=jl(e);break;case"script":o=wl(e)}la.has(o)||(e=j({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),la.set(o,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(vi(o))||t==="script"&&n.querySelector(Ai(o))||(t=n.createElement("link"),Et(t,"link",e),bt(t),n.head.appendChild(t)))}}function K0(e,t){qa.m(e,t);var a=Al;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Wt(n)+'"][href="'+Wt(e)+'"]',o=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=wl(e)}if(!la.has(o)&&(e=j({rel:"modulepreload",href:e},t),la.set(o,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ai(o)))return}n=a.createElement("link"),Et(n,"link",e),bt(n),a.head.appendChild(n)}}}function Z0(e,t,a){qa.S(e,t,a);var n=Al;if(n&&e){var i=Kn(n).hoistableStyles,o=jl(e);t=t||"default";var d=i.get(o);if(!d){var g={loading:0,preload:null};if(d=n.querySelector(vi(o)))g.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},a),(a=la.get(o))&&wc(e,a);var v=d=n.createElement("link");bt(v),Et(v,"link",e),v._p=new Promise(function(C,k){v.onload=C,v.onerror=k}),v.addEventListener("load",function(){g.loading|=1}),v.addEventListener("error",function(){g.loading|=2}),g.loading|=4,qr(d,t,n)}d={type:"stylesheet",instance:d,count:1,state:g},i.set(o,d)}}}function X0(e,t){qa.X(e,t);var a=Al;if(a&&e){var n=Kn(a).hoistableScripts,i=wl(e),o=n.get(i);o||(o=a.querySelector(Ai(i)),o||(e=j({src:e,async:!0},t),(t=la.get(i))&&Sc(e,t),o=a.createElement("script"),bt(o),Et(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function F0(e,t){qa.M(e,t);var a=Al;if(a&&e){var n=Kn(a).hoistableScripts,i=wl(e),o=n.get(i);o||(o=a.querySelector(Ai(i)),o||(e=j({src:e,async:!0,type:"module"},t),(t=la.get(i))&&Sc(e,t),o=a.createElement("script"),bt(o),Et(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function Pp(e,t,a,n){var i=(i=he.current)?Lr(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=jl(a.href),a=Kn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=jl(a.href);var o=Kn(i).hoistableStyles,d=o.get(e);if(d||(i=i.ownerDocument||i,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,d),(o=i.querySelector(vi(e)))&&!o._p&&(d.instance=o,d.state.loading=5),la.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},la.set(e,a),o||J0(i,e,a,d.state))),t&&n===null)throw Error(u(528,""));return d}if(t&&n!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=wl(a),a=Kn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function jl(e){return'href="'+Wt(e)+'"'}function vi(e){return'link[rel="stylesheet"]['+e+"]"}function Wp(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function J0(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Et(t,"link",a),bt(t),e.head.appendChild(t))}function wl(e){return'[src="'+Wt(e)+'"]'}function Ai(e){return"script[async]"+e}function Ip(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Wt(a.href)+'"]');if(n)return t.instance=n,bt(n),n;var i=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),bt(n),Et(n,"style",i),qr(n,a.precedence,e),t.instance=n;case"stylesheet":i=jl(a.href);var o=e.querySelector(vi(i));if(o)return t.state.loading|=4,t.instance=o,bt(o),o;n=Wp(a),(i=la.get(i))&&wc(n,i),o=(e.ownerDocument||e).createElement("link"),bt(o);var d=o;return d._p=new Promise(function(g,v){d.onload=g,d.onerror=v}),Et(o,"link",n),t.state.loading|=4,qr(o,a.precedence,e),t.instance=o;case"script":return o=wl(a.src),(i=e.querySelector(Ai(o)))?(t.instance=i,bt(i),i):(n=a,(i=la.get(o))&&(n=j({},a),Sc(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),bt(i),Et(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,qr(n,a.precedence,e));return t.instance}function qr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,o=i,d=0;d<n.length;d++){var g=n[d];if(g.dataset.precedence===t)o=g;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Sc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vr=null;function _p(e,t,a){if(Vr===null){var n=new Map,i=Vr=new Map;i.set(a,n)}else i=Vr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var o=a[i];if(!(o[Ll]||o[At]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var d=o.getAttribute(t)||"";d=e+d;var g=n.get(d);g?g.push(o):n.set(d,[o])}}return n}function $p(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function P0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function eh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function W0(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=jl(n.href),o=t.querySelector(vi(i));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=kr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=o,bt(o);return}o=t.ownerDocument||t,n=Wp(n),(i=la.get(i))&&wc(n,i),o=o.createElement("link"),bt(o);var d=o;d._p=new Promise(function(g,v){d.onload=g,d.onerror=v}),Et(o,"link",n),a.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=kr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ec=0;function I0(e,t){return e.stylesheets&&e.count===0&&Yr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Yr(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Ec===0&&(Ec=62500*B0());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Yr(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Ec?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function kr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Qr=null;function Yr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qr=new Map,t.forEach(_0,e),Qr=null,kr.call(e))}function _0(e,t){if(!(t.state.loading&4)){var a=Qr.get(e);if(a)var n=a.get(null);else{a=new Map,Qr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var d=i[o];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),n=d)}n&&a.set(null,n)}i=t.instance,d=i.getAttribute("data-precedence"),o=a.get(d)||n,o===n&&a.set(null,i),a.set(d,i),this.count++,n=kr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),o?o.parentNode.insertBefore(i,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ji={$$typeof:ee,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function $0(e,t,a,n,i,o,d,g,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=kn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kn(0),this.hiddenUpdates=kn(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function th(e,t,a,n,i,o,d,g,v,C,k,G){return e=new $0(e,t,a,d,v,C,k,G,g),t=1,o===!0&&(t|=24),o=Gt(3,null,null,t),e.current=o,o.stateNode=e,t=ls(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},ss(o),e}function ah(e){return e?(e=el,e):el}function nh(e,t,a,n,i,o){i=ah(i),n.context===null?n.context=i:n.pendingContext=i,n=Ja(t),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=Pa(e,n,t),a!==null&&(qt(a,e,t),ei(a,e,t))}function lh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Nc(e,t){lh(e,t),(e=e.alternate)&&lh(e,t)}function ih(e){if(e.tag===13||e.tag===31){var t=bn(e,67108864);t!==null&&qt(t,e,67108864),Nc(e,67108864)}}function rh(e){if(e.tag===13||e.tag===31){var t=Jt();t=Ao(t);var a=bn(e,t);a!==null&&qt(a,e,t),Nc(e,t)}}var Gr=!0;function ex(e,t,a,n){var i=B.T;B.T=null;var o=P.p;try{P.p=2,zc(e,t,a,n)}finally{P.p=o,B.T=i}}function tx(e,t,a,n){var i=B.T;B.T=null;var o=P.p;try{P.p=8,zc(e,t,a,n)}finally{P.p=o,B.T=i}}function zc(e,t,a,n){if(Gr){var i=Cc(n);if(i===null)pc(e,t,n,Kr,a),sh(e,n);else if(nx(i,e,t,a,n))n.stopPropagation();else if(sh(e,n),t&4&&-1<ax.indexOf(e)){for(;i!==null;){var o=Gn(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var d=at(o.pendingLanes);if(d!==0){var g=o;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var v=1<<31-_(d);g.entanglements[1]|=v,d&=~v}xa(o),(qe&6)===0&&(Nr=Ot()+500,gi(0))}}break;case 31:case 13:g=bn(o,2),g!==null&&qt(g,o,2),Cr(),Nc(o,2)}if(o=Cc(n),o===null&&pc(e,t,n,Kr,a),o===i)break;i=o}i!==null&&n.stopPropagation()}else pc(e,t,n,null,a)}}function Cc(e){return e=To(e),Oc(e)}var Kr=null;function Oc(e){if(Kr=null,e=Yn(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=x(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Kr=e,null}function oh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case O:return 2;case F:return 8;case J:case Ae:return 32;case Se:return 268435456;default:return 32}default:return 32}}var Tc=!1,on=null,sn=null,cn=null,wi=new Map,Si=new Map,un=[],ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sh(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(t.pointerId)}}function Ei(e,t,a,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Gn(t),t!==null&&ih(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function nx(e,t,a,n,i){switch(t){case"focusin":return on=Ei(on,e,t,a,n,i),!0;case"dragenter":return sn=Ei(sn,e,t,a,n,i),!0;case"mouseover":return cn=Ei(cn,e,t,a,n,i),!0;case"pointerover":var o=i.pointerId;return wi.set(o,Ei(wi.get(o)||null,e,t,a,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Si.set(o,Ei(Si.get(o)||null,e,t,a,n,i)),!0}return!1}function ch(e){var t=Yn(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,ju(e.priority,function(){rh(a)});return}}else if(t===31){if(t=x(a),t!==null){e.blockedOn=t,ju(e.priority,function(){rh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Cc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Oo=n,a.target.dispatchEvent(n),Oo=null}else return t=Gn(a),t!==null&&ih(t),e.blockedOn=a,!1;t.shift()}return!0}function uh(e,t,a){Zr(e)&&a.delete(t)}function lx(){Tc=!1,on!==null&&Zr(on)&&(on=null),sn!==null&&Zr(sn)&&(sn=null),cn!==null&&Zr(cn)&&(cn=null),wi.forEach(uh),Si.forEach(uh)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,Tc||(Tc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,lx)))}var Fr=null;function fh(e){Fr!==e&&(Fr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Fr===e&&(Fr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Oc(n||a)===null)continue;break}var o=Gn(a);o!==null&&(e.splice(t,3),t-=3,Cs(o,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Sl(e){function t(v){return Xr(v,e)}on!==null&&Xr(on,e),sn!==null&&Xr(sn,e),cn!==null&&Xr(cn,e),wi.forEach(t),Si.forEach(t);for(var a=0;a<un.length;a++){var n=un[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<un.length&&(a=un[0],a.blockedOn===null);)ch(a),a.blockedOn===null&&un.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],o=a[n+1],d=i[Rt]||null;if(typeof o=="function")d||fh(a);else if(d){var g=null;if(o&&o.hasAttribute("formAction")){if(i=o,d=o[Rt]||null)g=d.formAction;else if(Oc(i)!==null)continue}else g=d.action;typeof g=="function"?a[n+1]=g:(a.splice(n,3),n-=3),fh(a)}}}function dh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(d){return i=d})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Bc(e){this._internalRoot=e}Jr.prototype.render=Bc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,n=Jt();nh(a,n,e,t,null,null)},Jr.prototype.unmount=Bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nh(e.current,2,null,e,null,null),Cr(),t[Qn]=null}};function Jr(e){this._internalRoot=e}Jr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Au();e={blockedOn:null,target:e,priority:t};for(var a=0;a<un.length&&t!==0&&t<un[a].priority;a++);un.splice(a,0,e),a===0&&ch(e)}};var ph=s.version;if(ph!=="19.2.0")throw Error(u(527,ph,"19.2.0"));P.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=m(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var ix={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{Y=Pr.inject(ix),$=Pr}catch{}}return zi.createRoot=function(e,t){if(!f(e))throw Error(u(299));var a=!1,n="",i=vd,o=Ad,d=jd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=th(e,1,!1,null,null,a,n,null,i,o,d,dh),e[Qn]=t.current,dc(e),new Bc(t)},zi.hydrateRoot=function(e,t,a){if(!f(e))throw Error(u(299));var n=!1,i="",o=vd,d=Ad,g=jd,v=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(g=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=th(e,1,!0,t,a??null,n,i,v,o,d,g,dh),t.context=ah(null),a=t.current,n=Jt(),n=Ao(n),i=Ja(n),i.callback=null,Pa(a,i,n),a=n,t.current.lanes=a,Hl(t,a),xa(t),e[Qn]=t.current,dc(e),new Jr(t)},zi.version="19.2.0",zi}var wh;function gx(){if(wh)return Dc.exports;wh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),Dc.exports=mx(),Dc.exports}var xx=gx();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Sh="popstate";function bx(l={}){function s(u,f){let{pathname:p,search:h,hash:x}=u.location;return Wc("",{pathname:p,search:h,hash:x},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function c(u,f){return typeof f=="string"?f:Ti(f)}return vx(s,c,null,l)}function lt(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function ua(l,s){if(!l){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function yx(){return Math.random().toString(36).substring(2,10)}function Eh(l,s){return{usr:l.state,key:l.key,idx:s}}function Wc(l,s,c=null,u){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof s=="string"?Cl(s):s,state:c,key:s&&s.key||u||yx()}}function Ti({pathname:l="/",search:s="",hash:c=""}){return s&&s!=="?"&&(l+=s.charAt(0)==="?"?s:"?"+s),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function Cl(l){let s={};if(l){let c=l.indexOf("#");c>=0&&(s.hash=l.substring(c),l=l.substring(0,c));let u=l.indexOf("?");u>=0&&(s.search=l.substring(u),l=l.substring(0,u)),l&&(s.pathname=l)}return s}function vx(l,s,c,u={}){let{window:f=document.defaultView,v5Compat:p=!1}=u,h=f.history,x="POP",b=null,m=y();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function y(){return(h.state||{idx:null}).idx}function j(){x="POP";let D=y(),X=D==null?null:D-m;m=D,b&&b({action:x,location:R.location,delta:X})}function L(D,X){x="PUSH";let I=Wc(R.location,D,X);m=y()+1;let ee=Eh(I,m),me=R.createHref(I);try{h.pushState(ee,"",me)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;f.location.assign(me)}p&&b&&b({action:x,location:R.location,delta:1})}function V(D,X){x="REPLACE";let I=Wc(R.location,D,X);m=y();let ee=Eh(I,m),me=R.createHref(I);h.replaceState(ee,"",me),p&&b&&b({action:x,location:R.location,delta:0})}function w(D){return Ax(D)}let R={get action(){return x},get location(){return l(f,h)},listen(D){if(b)throw new Error("A history only accepts one active listener");return f.addEventListener(Sh,j),b=D,()=>{f.removeEventListener(Sh,j),b=null}},createHref(D){return s(f,D)},createURL:w,encodeLocation(D){let X=w(D);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:L,replace:V,go(D){return h.go(D)}};return R}function Ax(l,s=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),lt(c,"No window.location.(origin|href) available to create URL");let u=typeof l=="string"?l:Ti(l);return u=u.replace(/ $/,"%20"),!s&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function $h(l,s,c="/"){return jx(l,s,c,!1)}function jx(l,s,c,u){let f=typeof s=="string"?Cl(s):s,p=ka(f.pathname||"/",c);if(p==null)return null;let h=em(l);wx(h);let x=null;for(let b=0;x==null&&b<h.length;++b){let m=Dx(p);x=Rx(h[b],m,u)}return x}function em(l,s=[],c=[],u="",f=!1){let p=(h,x,b=f,m)=>{let y={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:x,route:h};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(u)&&b)return;lt(y.relativePath.startsWith(u),`Absolute route path "${y.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(u.length)}let j=Va([u,y.relativePath]),L=c.concat(y);h.children&&h.children.length>0&&(lt(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${j}".`),em(h.children,s,L,j,b)),!(h.path==null&&!h.index)&&s.push({path:j,score:Tx(j,h.index),routesMeta:L})};return l.forEach((h,x)=>{if(h.path===""||!h.path?.includes("?"))p(h,x);else for(let b of tm(h.path))p(h,x,!0,b)}),s}function tm(l){let s=l.split("/");if(s.length===0)return[];let[c,...u]=s,f=c.endsWith("?"),p=c.replace(/\?$/,"");if(u.length===0)return f?[p,""]:[p];let h=tm(u.join("/")),x=[];return x.push(...h.map(b=>b===""?p:[p,b].join("/"))),f&&x.push(...h),x.map(b=>l.startsWith("/")&&b===""?"/":b)}function wx(l){l.sort((s,c)=>s.score!==c.score?c.score-s.score:Bx(s.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var Sx=/^:[\w-]+$/,Ex=3,Nx=2,zx=1,Cx=10,Ox=-2,Nh=l=>l==="*";function Tx(l,s){let c=l.split("/"),u=c.length;return c.some(Nh)&&(u+=Ox),s&&(u+=Nx),c.filter(f=>!Nh(f)).reduce((f,p)=>f+(Sx.test(p)?Ex:p===""?zx:Cx),u)}function Bx(l,s){return l.length===s.length&&l.slice(0,-1).every((u,f)=>u===s[f])?l[l.length-1]-s[s.length-1]:0}function Rx(l,s,c=!1){let{routesMeta:u}=l,f={},p="/",h=[];for(let x=0;x<u.length;++x){let b=u[x],m=x===u.length-1,y=p==="/"?s:s.slice(p.length)||"/",j=no({path:b.relativePath,caseSensitive:b.caseSensitive,end:m},y),L=b.route;if(!j&&m&&c&&!u[u.length-1].route.index&&(j=no({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},y)),!j)return null;Object.assign(f,j.params),h.push({params:f,pathname:Va([p,j.pathname]),pathnameBase:qx(Va([p,j.pathnameBase])),route:L}),j.pathnameBase!=="/"&&(p=Va([p,j.pathnameBase]))}return h}function no(l,s){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[c,u]=Mx(l.path,l.caseSensitive,l.end),f=s.match(c);if(!f)return null;let p=f[0],h=p.replace(/(.)\/+$/,"$1"),x=f.slice(1);return{params:u.reduce((m,{paramName:y,isOptional:j},L)=>{if(y==="*"){let w=x[L]||"";h=p.slice(0,p.length-w.length).replace(/(.)\/+$/,"$1")}const V=x[L];return j&&!V?m[y]=void 0:m[y]=(V||"").replace(/%2F/g,"/"),m},{}),pathname:p,pathnameBase:h,pattern:l}}function Mx(l,s=!1,c=!0){ua(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,x,b)=>(u.push({paramName:x,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(u.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),u]}function Dx(l){try{return l.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return ua(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),l}}function ka(l,s){if(s==="/")return l;if(!l.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,u=l.charAt(c);return u&&u!=="/"?null:l.slice(c)||"/"}function Ux(l,s="/"){let{pathname:c,search:u="",hash:f=""}=typeof l=="string"?Cl(l):l;return{pathname:c?c.startsWith("/")?c:Hx(c,s):s,search:Vx(u),hash:kx(f)}}function Hx(l,s){let c=s.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?c.length>1&&c.pop():f!=="."&&c.push(f)}),c.length>1?c.join("/"):"/"}function qc(l,s,c,u){return`Cannot include a '${l}' character in a manually specified \`to.${s}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Lx(l){return l.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function nu(l){let s=Lx(l);return s.map((c,u)=>u===s.length-1?c.pathname:c.pathnameBase)}function lu(l,s,c,u=!1){let f;typeof l=="string"?f=Cl(l):(f={...l},lt(!f.pathname||!f.pathname.includes("?"),qc("?","pathname","search",f)),lt(!f.pathname||!f.pathname.includes("#"),qc("#","pathname","hash",f)),lt(!f.search||!f.search.includes("#"),qc("#","search","hash",f)));let p=l===""||f.pathname==="",h=p?"/":f.pathname,x;if(h==null)x=c;else{let j=s.length-1;if(!u&&h.startsWith("..")){let L=h.split("/");for(;L[0]==="..";)L.shift(),j-=1;f.pathname=L.join("/")}x=j>=0?s[j]:"/"}let b=Ux(f,x),m=h&&h!=="/"&&h.endsWith("/"),y=(p||h===".")&&c.endsWith("/");return!b.pathname.endsWith("/")&&(m||y)&&(b.pathname+="/"),b}var Va=l=>l.join("/").replace(/\/\/+/g,"/"),qx=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Vx=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,kx=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function Qx(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var am=["POST","PUT","PATCH","DELETE"];new Set(am);var Yx=["GET",...am];new Set(Yx);var Ol=E.createContext(null);Ol.displayName="DataRouter";var co=E.createContext(null);co.displayName="DataRouterState";E.createContext(!1);var nm=E.createContext({isTransitioning:!1});nm.displayName="ViewTransition";var Gx=E.createContext(new Map);Gx.displayName="Fetchers";var Kx=E.createContext(null);Kx.displayName="Await";var fa=E.createContext(null);fa.displayName="Navigation";var Ri=E.createContext(null);Ri.displayName="Location";var ia=E.createContext({outlet:null,matches:[],isDataRoute:!1});ia.displayName="Route";var iu=E.createContext(null);iu.displayName="RouteError";function Zx(l,{relative:s}={}){lt(Tl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=E.useContext(fa),{hash:f,pathname:p,search:h}=Mi(l,{relative:s}),x=p;return c!=="/"&&(x=p==="/"?c:Va([c,p])),u.createHref({pathname:x,search:h,hash:f})}function Tl(){return E.useContext(Ri)!=null}function da(){return lt(Tl(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Ri).location}var lm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function im(l){E.useContext(fa).static||E.useLayoutEffect(l)}function ya(){let{isDataRoute:l}=E.useContext(ia);return l?ob():Xx()}function Xx(){lt(Tl(),"useNavigate() may be used only in the context of a <Router> component.");let l=E.useContext(Ol),{basename:s,navigator:c}=E.useContext(fa),{matches:u}=E.useContext(ia),{pathname:f}=da(),p=JSON.stringify(nu(u)),h=E.useRef(!1);return im(()=>{h.current=!0}),E.useCallback((b,m={})=>{if(ua(h.current,lm),!h.current)return;if(typeof b=="number"){c.go(b);return}let y=lu(b,JSON.parse(p),f,m.relative==="path");l==null&&s!=="/"&&(y.pathname=y.pathname==="/"?s:Va([s,y.pathname])),(m.replace?c.replace:c.push)(y,m.state,m)},[s,c,p,f,l])}var Fx=E.createContext(null);function Jx(l){let s=E.useContext(ia).outlet;return E.useMemo(()=>s&&E.createElement(Fx.Provider,{value:l},s),[s,l])}function Px(){let{matches:l}=E.useContext(ia),s=l[l.length-1];return s?s.params:{}}function Mi(l,{relative:s}={}){let{matches:c}=E.useContext(ia),{pathname:u}=da(),f=JSON.stringify(nu(c));return E.useMemo(()=>lu(l,JSON.parse(f),u,s==="path"),[l,f,u,s])}function Wx(l,s){return rm(l,s)}function rm(l,s,c,u,f){lt(Tl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=E.useContext(fa),{matches:h}=E.useContext(ia),x=h[h.length-1],b=x?x.params:{},m=x?x.pathname:"/",y=x?x.pathnameBase:"/",j=x&&x.route;{let I=j&&j.path||"";om(m,!j||I.endsWith("*")||I.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${I}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${I}"> to <Route path="${I==="/"?"*":`${I}/*`}">.`)}let L=da(),V;if(s){let I=typeof s=="string"?Cl(s):s;lt(y==="/"||I.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${I.pathname}" was given in the \`location\` prop.`),V=I}else V=L;let w=V.pathname||"/",R=w;if(y!=="/"){let I=y.replace(/^\//,"").split("/");R="/"+w.replace(/^\//,"").split("/").slice(I.length).join("/")}let D=$h(l,{pathname:R});ua(j||D!=null,`No routes matched location "${V.pathname}${V.search}${V.hash}" `),ua(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${V.pathname}${V.search}${V.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=tb(D&&D.map(I=>Object.assign({},I,{params:Object.assign({},b,I.params),pathname:Va([y,p.encodeLocation?p.encodeLocation(I.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?y:Va([y,p.encodeLocation?p.encodeLocation(I.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:I.pathnameBase])})),h,c,u,f);return s&&X?E.createElement(Ri.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...V},navigationType:"POP"}},X):X}function Ix(){let l=rb(),s=Qx(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),c=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:u},p={padding:"2px 4px",backgroundColor:u},h=null;return console.error("Error handled by React Router default ErrorBoundary:",l),h=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:p},"ErrorBoundary")," or"," ",E.createElement("code",{style:p},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},s),c?E.createElement("pre",{style:f},c):null,h)}var _x=E.createElement(Ix,null),$x=class extends E.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,s){return s.location!==l.location||s.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:s.error,location:s.location,revalidation:l.revalidation||s.revalidation}}componentDidCatch(l,s){this.props.unstable_onError?this.props.unstable_onError(l,s):console.error("React Router caught the following error during render",l)}render(){return this.state.error!==void 0?E.createElement(ia.Provider,{value:this.props.routeContext},E.createElement(iu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function eb({routeContext:l,match:s,children:c}){let u=E.useContext(Ol);return u&&u.static&&u.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=s.route.id),E.createElement(ia.Provider,{value:l},c)}function tb(l,s=[],c=null,u=null,f=null){if(l==null){if(!c)return null;if(c.errors)l=c.matches;else if(s.length===0&&!c.initialized&&c.matches.length>0)l=c.matches;else return null}let p=l,h=c?.errors;if(h!=null){let m=p.findIndex(y=>y.route.id&&h?.[y.route.id]!==void 0);lt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),p=p.slice(0,Math.min(p.length,m+1))}let x=!1,b=-1;if(c)for(let m=0;m<p.length;m++){let y=p[m];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(b=m),y.route.id){let{loaderData:j,errors:L}=c,V=y.route.loader&&!j.hasOwnProperty(y.route.id)&&(!L||L[y.route.id]===void 0);if(y.route.lazy||V){x=!0,b>=0?p=p.slice(0,b+1):p=[p[0]];break}}}return p.reduceRight((m,y,j)=>{let L,V=!1,w=null,R=null;c&&(L=h&&y.route.id?h[y.route.id]:void 0,w=y.route.errorElement||_x,x&&(b<0&&j===0?(om("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),V=!0,R=null):b===j&&(V=!0,R=y.route.hydrateFallbackElement||null)));let D=s.concat(p.slice(0,j+1)),X=()=>{let I;return L?I=w:V?I=R:y.route.Component?I=E.createElement(y.route.Component,null):y.route.element?I=y.route.element:I=m,E.createElement(eb,{match:y,routeContext:{outlet:m,matches:D,isDataRoute:c!=null},children:I})};return c&&(y.route.ErrorBoundary||y.route.errorElement||j===0)?E.createElement($x,{location:c.location,revalidation:c.revalidation,component:w,error:L,children:X(),routeContext:{outlet:null,matches:D,isDataRoute:!0},unstable_onError:u}):X()},null)}function ru(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ab(l){let s=E.useContext(Ol);return lt(s,ru(l)),s}function nb(l){let s=E.useContext(co);return lt(s,ru(l)),s}function lb(l){let s=E.useContext(ia);return lt(s,ru(l)),s}function ou(l){let s=lb(l),c=s.matches[s.matches.length-1];return lt(c.route.id,`${l} can only be used on routes that contain a unique "id"`),c.route.id}function ib(){return ou("useRouteId")}function rb(){let l=E.useContext(iu),s=nb("useRouteError"),c=ou("useRouteError");return l!==void 0?l:s.errors?.[c]}function ob(){let{router:l}=ab("useNavigate"),s=ou("useNavigate"),c=E.useRef(!1);return im(()=>{c.current=!0}),E.useCallback(async(f,p={})=>{ua(c.current,lm),c.current&&(typeof f=="number"?l.navigate(f):await l.navigate(f,{fromRouteId:s,...p}))},[l,s])}var zh={};function om(l,s,c){!s&&!zh[l]&&(zh[l]=!0,ua(!1,c))}E.memo(sb);function sb({routes:l,future:s,state:c,unstable_onError:u}){return rm(l,void 0,c,u,s)}function cb({to:l,replace:s,state:c,relative:u}){lt(Tl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=E.useContext(fa);ua(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=E.useContext(ia),{pathname:h}=da(),x=ya(),b=lu(l,nu(p),h,u==="path"),m=JSON.stringify(b);return E.useEffect(()=>{x(JSON.parse(m),{replace:s,state:c,relative:u})},[x,m,u,s,c]),null}function ub(l){return Jx(l.context)}function Pe(l){lt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fb({basename:l="/",children:s=null,location:c,navigationType:u="POP",navigator:f,static:p=!1}){lt(!Tl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=l.replace(/^\/*/,"/"),x=E.useMemo(()=>({basename:h,navigator:f,static:p,future:{}}),[h,f,p]);typeof c=="string"&&(c=Cl(c));let{pathname:b="/",search:m="",hash:y="",state:j=null,key:L="default"}=c,V=E.useMemo(()=>{let w=ka(b,h);return w==null?null:{location:{pathname:w,search:m,hash:y,state:j,key:L},navigationType:u}},[h,b,m,y,j,L,u]);return ua(V!=null,`<Router basename="${h}"> is not able to match the URL "${b}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),V==null?null:E.createElement(fa.Provider,{value:x},E.createElement(Ri.Provider,{children:s,value:V}))}function db({children:l,location:s}){return Wx(Ic(l),s)}function Ic(l,s=[]){let c=[];return E.Children.forEach(l,(u,f)=>{if(!E.isValidElement(u))return;let p=[...s,f];if(u.type===E.Fragment){c.push.apply(c,Ic(u.props.children,p));return}lt(u.type===Pe,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),lt(!u.props.index||!u.props.children,"An index route cannot have child routes.");let h={id:u.props.id||p.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(h.children=Ic(u.props.children,p)),c.push(h)}),c}var _r="get",$r="application/x-www-form-urlencoded";function uo(l){return l!=null&&typeof l.tagName=="string"}function pb(l){return uo(l)&&l.tagName.toLowerCase()==="button"}function hb(l){return uo(l)&&l.tagName.toLowerCase()==="form"}function mb(l){return uo(l)&&l.tagName.toLowerCase()==="input"}function gb(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function xb(l,s){return l.button===0&&(!s||s==="_self")&&!gb(l)}var Wr=null;function bb(){if(Wr===null)try{new FormData(document.createElement("form"),0),Wr=!1}catch{Wr=!0}return Wr}var yb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vc(l){return l!=null&&!yb.has(l)?(ua(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$r}"`),null):l}function vb(l,s){let c,u,f,p,h;if(hb(l)){let x=l.getAttribute("action");u=x?ka(x,s):null,c=l.getAttribute("method")||_r,f=Vc(l.getAttribute("enctype"))||$r,p=new FormData(l)}else if(pb(l)||mb(l)&&(l.type==="submit"||l.type==="image")){let x=l.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=l.getAttribute("formaction")||x.getAttribute("action");if(u=b?ka(b,s):null,c=l.getAttribute("formmethod")||x.getAttribute("method")||_r,f=Vc(l.getAttribute("formenctype"))||Vc(x.getAttribute("enctype"))||$r,p=new FormData(x,l),!bb()){let{name:m,type:y,value:j}=l;if(y==="image"){let L=m?`${m}.`:"";p.append(`${L}x`,"0"),p.append(`${L}y`,"0")}else m&&p.append(m,j)}}else{if(uo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=_r,u=null,f=$r,h=l}return p&&f==="text/plain"&&(h=p,p=void 0),{action:u,method:c.toLowerCase(),encType:f,formData:p,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function su(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function Ab(l,s,c){let u=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u.pathname==="/"?u.pathname=`_root.${c}`:s&&ka(u.pathname,s)==="/"?u.pathname=`${s.replace(/\/$/,"")}/_root.${c}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${c}`,u}async function jb(l,s){if(l.id in s)return s[l.id];try{let c=await import(l.module);return s[l.id]=c,c}catch(c){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wb(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function Sb(l,s,c){let u=await Promise.all(l.map(async f=>{let p=s.routes[f.route.id];if(p){let h=await jb(p,c);return h.links?h.links():[]}return[]}));return Cb(u.flat(1).filter(wb).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Ch(l,s,c,u,f,p){let h=(b,m)=>c[m]?b.route.id!==c[m].route.id:!0,x=(b,m)=>c[m].pathname!==b.pathname||c[m].route.path?.endsWith("*")&&c[m].params["*"]!==b.params["*"];return p==="assets"?s.filter((b,m)=>h(b,m)||x(b,m)):p==="data"?s.filter((b,m)=>{let y=u.routes[b.route.id];if(!y||!y.hasLoader)return!1;if(h(b,m)||x(b,m))return!0;if(b.route.shouldRevalidate){let j=b.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function Eb(l,s,{includeHydrateFallback:c}={}){return Nb(l.map(u=>{let f=s.routes[u.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),c&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function Nb(l){return[...new Set(l)]}function zb(l){let s={},c=Object.keys(l).sort();for(let u of c)s[u]=l[u];return s}function Cb(l,s){let c=new Set;return new Set(s),l.reduce((u,f)=>{let p=JSON.stringify(zb(f));return c.has(p)||(c.add(p),u.push({key:p,link:f})),u},[])}function sm(){let l=E.useContext(Ol);return su(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Ob(){let l=E.useContext(co);return su(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var cu=E.createContext(void 0);cu.displayName="FrameworkContext";function cm(){let l=E.useContext(cu);return su(l,"You must render this element inside a <HydratedRouter> element"),l}function Tb(l,s){let c=E.useContext(cu),[u,f]=E.useState(!1),[p,h]=E.useState(!1),{onFocus:x,onBlur:b,onMouseEnter:m,onMouseLeave:y,onTouchStart:j}=s,L=E.useRef(null);E.useEffect(()=>{if(l==="render"&&h(!0),l==="viewport"){let R=X=>{X.forEach(I=>{h(I.isIntersecting)})},D=new IntersectionObserver(R,{threshold:.5});return L.current&&D.observe(L.current),()=>{D.disconnect()}}},[l]),E.useEffect(()=>{if(u){let R=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(R)}}},[u]);let V=()=>{f(!0)},w=()=>{f(!1),h(!1)};return c?l!=="intent"?[p,L,{}]:[p,L,{onFocus:Ci(x,V),onBlur:Ci(b,w),onMouseEnter:Ci(m,V),onMouseLeave:Ci(y,w),onTouchStart:Ci(j,V)}]:[!1,L,{}]}function Ci(l,s){return c=>{l&&l(c),c.defaultPrevented||s(c)}}function Bb({page:l,...s}){let{router:c}=sm(),u=E.useMemo(()=>$h(c.routes,l,c.basename),[c.routes,l,c.basename]);return u?E.createElement(Mb,{page:l,matches:u,...s}):null}function Rb(l){let{manifest:s,routeModules:c}=cm(),[u,f]=E.useState([]);return E.useEffect(()=>{let p=!1;return Sb(l,s,c).then(h=>{p||f(h)}),()=>{p=!0}},[l,s,c]),u}function Mb({page:l,matches:s,...c}){let u=da(),{manifest:f,routeModules:p}=cm(),{basename:h}=sm(),{loaderData:x,matches:b}=Ob(),m=E.useMemo(()=>Ch(l,s,b,f,u,"data"),[l,s,b,f,u]),y=E.useMemo(()=>Ch(l,s,b,f,u,"assets"),[l,s,b,f,u]),j=E.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let w=new Set,R=!1;if(s.forEach(X=>{let I=f.routes[X.route.id];!I||!I.hasLoader||(!m.some(ee=>ee.route.id===X.route.id)&&X.route.id in x&&p[X.route.id]?.shouldRevalidate||I.hasClientLoader?R=!0:w.add(X.route.id))}),w.size===0)return[];let D=Ab(l,h,"data");return R&&w.size>0&&D.searchParams.set("_routes",s.filter(X=>w.has(X.route.id)).map(X=>X.route.id).join(",")),[D.pathname+D.search]},[h,x,u,f,m,s,l,p]),L=E.useMemo(()=>Eb(y,f),[y,f]),V=Rb(y);return E.createElement(E.Fragment,null,j.map(w=>E.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...c})),L.map(w=>E.createElement("link",{key:w,rel:"modulepreload",href:w,...c})),V.map(({key:w,link:R})=>E.createElement("link",{key:w,nonce:c.nonce,...R})))}function Db(...l){return s=>{l.forEach(c=>{typeof c=="function"?c(s):c!=null&&(c.current=s)})}}var um=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{um&&(window.__reactRouterVersion="7.9.4")}catch{}function Ub({basename:l,children:s,window:c}){let u=E.useRef();u.current==null&&(u.current=bx({window:c,v5Compat:!0}));let f=u.current,[p,h]=E.useState({action:f.action,location:f.location}),x=E.useCallback(b=>{E.startTransition(()=>h(b))},[h]);return E.useLayoutEffect(()=>f.listen(x),[f,x]),E.createElement(fb,{basename:l,children:s,location:p.location,navigationType:p.action,navigator:f})}var fm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,be=E.forwardRef(function({onClick:s,discover:c="render",prefetch:u="none",relative:f,reloadDocument:p,replace:h,state:x,target:b,to:m,preventScrollReset:y,viewTransition:j,...L},V){let{basename:w}=E.useContext(fa),R=typeof m=="string"&&fm.test(m),D,X=!1;if(typeof m=="string"&&R&&(D=m,um))try{let ue=new URL(window.location.href),De=m.startsWith("//")?new URL(ue.protocol+m):new URL(m),Me=ka(De.pathname,w);De.origin===ue.origin&&Me!=null?m=Me+De.search+De.hash:X=!0}catch{ua(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let I=Zx(m,{relative:f}),[ee,me,le]=Tb(u,L),pe=qb(m,{replace:h,state:x,target:b,preventScrollReset:y,relative:f,viewTransition:j});function ae(ue){s&&s(ue),ue.defaultPrevented||pe(ue)}let re=E.createElement("a",{...L,...le,href:D||I,onClick:X||p?s:ae,ref:Db(V,me),target:b,"data-discover":!R&&c==="render"?"true":void 0});return ee&&!R?E.createElement(E.Fragment,null,re,E.createElement(Bb,{page:I})):re});be.displayName="Link";var _c=E.forwardRef(function({"aria-current":s="page",caseSensitive:c=!1,className:u="",end:f=!1,style:p,to:h,viewTransition:x,children:b,...m},y){let j=Mi(h,{relative:m.relative}),L=da(),V=E.useContext(co),{navigator:w,basename:R}=E.useContext(fa),D=V!=null&&Gb(j)&&x===!0,X=w.encodeLocation?w.encodeLocation(j).pathname:j.pathname,I=L.pathname,ee=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;c||(I=I.toLowerCase(),ee=ee?ee.toLowerCase():null,X=X.toLowerCase()),ee&&R&&(ee=ka(ee,R)||ee);const me=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let le=I===X||!f&&I.startsWith(X)&&I.charAt(me)==="/",pe=ee!=null&&(ee===X||!f&&ee.startsWith(X)&&ee.charAt(X.length)==="/"),ae={isActive:le,isPending:pe,isTransitioning:D},re=le?s:void 0,ue;typeof u=="function"?ue=u(ae):ue=[u,le?"active":null,pe?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let De=typeof p=="function"?p(ae):p;return E.createElement(be,{...m,"aria-current":re,className:ue,ref:y,style:De,to:h,viewTransition:x},typeof b=="function"?b(ae):b)});_c.displayName="NavLink";var Hb=E.forwardRef(({discover:l="render",fetcherKey:s,navigate:c,reloadDocument:u,replace:f,state:p,method:h=_r,action:x,onSubmit:b,relative:m,preventScrollReset:y,viewTransition:j,...L},V)=>{let w=Qb(),R=Yb(x,{relative:m}),D=h.toLowerCase()==="get"?"get":"post",X=typeof x=="string"&&fm.test(x),I=ee=>{if(b&&b(ee),ee.defaultPrevented)return;ee.preventDefault();let me=ee.nativeEvent.submitter,le=me?.getAttribute("formmethod")||h;w(me||ee.currentTarget,{fetcherKey:s,method:le,navigate:c,replace:f,state:p,relative:m,preventScrollReset:y,viewTransition:j})};return E.createElement("form",{ref:V,method:D,action:R,onSubmit:u?b:I,...L,"data-discover":!X&&l==="render"?"true":void 0})});Hb.displayName="Form";function Lb(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dm(l){let s=E.useContext(Ol);return lt(s,Lb(l)),s}function qb(l,{target:s,replace:c,state:u,preventScrollReset:f,relative:p,viewTransition:h}={}){let x=ya(),b=da(),m=Mi(l,{relative:p});return E.useCallback(y=>{if(xb(y,s)){y.preventDefault();let j=c!==void 0?c:Ti(b)===Ti(m);x(l,{replace:j,state:u,preventScrollReset:f,relative:p,viewTransition:h})}},[b,x,m,c,u,s,l,f,p,h])}var Vb=0,kb=()=>`__${String(++Vb)}__`;function Qb(){let{router:l}=dm("useSubmit"),{basename:s}=E.useContext(fa),c=ib();return E.useCallback(async(u,f={})=>{let{action:p,method:h,encType:x,formData:b,body:m}=vb(u,s);if(f.navigate===!1){let y=f.fetcherKey||kb();await l.fetch(y,c,f.action||p,{preventScrollReset:f.preventScrollReset,formData:b,body:m,formMethod:f.method||h,formEncType:f.encType||x,flushSync:f.flushSync})}else await l.navigate(f.action||p,{preventScrollReset:f.preventScrollReset,formData:b,body:m,formMethod:f.method||h,formEncType:f.encType||x,replace:f.replace,state:f.state,fromRouteId:c,flushSync:f.flushSync,viewTransition:f.viewTransition})},[l,s,c])}function Yb(l,{relative:s}={}){let{basename:c}=E.useContext(fa),u=E.useContext(ia);lt(u,"useFormAction must be used inside a RouteContext");let[f]=u.matches.slice(-1),p={...Mi(l||".",{relative:s})},h=da();if(l==null){p.search=h.search;let x=new URLSearchParams(p.search),b=x.getAll("index");if(b.some(y=>y==="")){x.delete("index"),b.filter(j=>j).forEach(j=>x.append("index",j));let y=x.toString();p.search=y?`?${y}`:""}}return(!l||l===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(p.pathname=p.pathname==="/"?c:Va([c,p.pathname])),Ti(p)}function Gb(l,{relative:s}={}){let c=E.useContext(nm);lt(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=dm("useViewTransitionState"),f=Mi(l,{relative:s});if(!c.isTransitioning)return!1;let p=ka(c.currentLocation.pathname,u)||c.currentLocation.pathname,h=ka(c.nextLocation.pathname,u)||c.nextLocation.pathname;return no(f.pathname,h)!=null||no(f.pathname,p)!=null}function fo(){const[l,s]=E.useState(!1),[c,u]=E.useState(!1),[f,p]=E.useState(!1),h=da(),x=E.useRef(null),b=E.useRef(null);return E.useEffect(()=>{const m=()=>p(window.innerWidth<=800);return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),E.useEffect(()=>{s(!1),u(!1)},[h]),E.useEffect(()=>{const m=y=>{x.current&&!x.current.contains(y.target)&&s(!1),b.current&&!b.current.contains(y.target)&&u(!1)};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[]),r.jsxs("header",{className:"agri-header",children:[r.jsxs("nav",{className:"agri-nav",ref:x,children:[r.jsxs(be,{to:"/",className:"agri-logo",children:[r.jsx("img",{src:"https://www.shutterstock.com/image-vector/agri-tech-leaf-logo-design-600nw-2388734381.jpg",alt:"logo"}),"AgriTechPro"]}),r.jsx("div",{className:"agri-center",children:r.jsxs("div",{className:"agri-search",children:[r.jsx("input",{type:"text",placeholder:"Search Seeds, Fertilizers, Tools..."}),r.jsx("button",{children:"Search"})]})}),r.jsxs("div",{className:`agri-links ${l?"open":""}`,children:[r.jsxs("div",{className:"agri-more-area",ref:b,onMouseEnter:()=>!f&&u(!0),onMouseLeave:()=>!f&&u(!1),children:[r.jsxs("button",{className:"agri-more-btn",onClick:f?()=>u(!c):void 0,children:["Categories ",r.jsx("span",{children:c?"▲":"▼"})]}),c&&r.jsxs("div",{className:"agri-dropdown open",children:[r.jsx(be,{to:"/products/seeds",children:"Seeds"}),r.jsx(be,{to:"/products/fertilizers",children:"Fertilizers"}),r.jsx(be,{to:"/products/pesticides",children:"Pesticides"}),r.jsx(be,{to:"/products/tools",children:"Tools"}),r.jsx(be,{to:"/products/equipment",children:"Equipment"})]})]}),r.jsx(be,{to:"/services",children:"Services"}),r.jsx(be,{to:"/about",children:"About Us"}),r.jsx(be,{to:"/contact",children:"Contact"}),r.jsx(be,{to:"/login",className:"agri-login-btn",children:"Login"})]}),r.jsxs("button",{className:"agri-hamburger",onClick:()=>s(!l),children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})]}),r.jsx("style",{children:`
        :root {
          --green: #2a7a0e;
          --border: #e2e2e2;
          --light: #f6f8f5;
        }
        .agri-header {
          background: #fff;
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          z-index: 9999;
        }
        .agri-nav {
          max-width: 1300px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 24px;
        }
        .agri-logo {
          display: flex;
          align-items: center;
          font-size: 1.6rem;
          font-weight: 700;
          text-decoration: none;
          color: var(--green);
        }
        .agri-logo img {
          height: 42px;
          border-radius: 8px;
          margin-right: 8px;
        }
        .agri-center{ flex:1; display:flex; justify-content:center; }
        .agri-search {
          display:flex;
          background: var(--light);
          border:1px solid var(--border);
          border-radius: 25px;
          overflow:hidden;
          width: 420px;
          max-width:100%;
        }
        .agri-search input { flex:1; border:none; padding:10px; background:transparent; outline:none; }
        .agri-search button {
          background: var(--green);
          border:none;
          padding:10px 18px;
          color:#fff;
          cursor:pointer;
          font-weight:600;
        }
        .agri-links {
          display:flex;
          align-items:center;
          gap:24px;
        }
        .agri-links a { text-decoration:none; color:#333; font-weight:500; }
        .agri-links a:hover { color: var(--green); }
        .agri-more-btn {
          background:none; border:none; cursor:pointer; font-weight:500; color:#333; display:flex; align-items:center; gap:4px;
        }
        .agri-more-area{ position:relative; }
        .agri-dropdown {
          display:flex; flex-direction:column;
          position:absolute; top:40px; background:#fff;
          border:1px solid var(--border); border-radius:8px;
          box-shadow:0 6px 18px rgba(0,0,0,0.1); animation:fadeIn .2s;
        }
        .agri-dropdown a{ padding:10px 18px; }
        .agri-dropdown a:hover{ background:var(--light); color: var(--green); }
        .agri-login-btn{ padding:8px 18px; border:1px solid var(--green); border-radius:6px; }
        .agri-login-btn:hover{ background:var(--green); color:#fff; }
        .agri-hamburger {
          display:none;
          flex-direction:column;
          gap:5px;
          background:none;
          border:none;
          cursor:pointer;
          margin-left:10px;
        }
        .agri-hamburger span{ width:26px; height:3px; background: var(--green); }

        /* MOBILE */
        @media(max-width:800px){
          .agri-center{ display:none; }
          .agri-links{
            display:none;
            flex-direction:column;
            width:100%;
            padding:20px;
            background:#fff;
            border-top:1px solid var(--border);
          }
          .agri-links.open{ display:flex; }
          .agri-dropdown{ position:static; box-shadow:none; border:none; }
          .agri-hamburger{ display:flex; }
        }

        @keyframes fadeIn{ from{opacity:0;} to{opacity:1;} }
      `})]})}var pm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Oh=Rn.createContext&&Rn.createContext(pm),Kb=["attr","size","title"];function Zb(l,s){if(l==null)return{};var c=Xb(l,s),u,f;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(l);for(f=0;f<p.length;f++)u=p[f],!(s.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(l,u)&&(c[u]=l[u])}return c}function Xb(l,s){if(l==null)return{};var c={};for(var u in l)if(Object.prototype.hasOwnProperty.call(l,u)){if(s.indexOf(u)>=0)continue;c[u]=l[u]}return c}function lo(){return lo=Object.assign?Object.assign.bind():function(l){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(l[u]=c[u])}return l},lo.apply(this,arguments)}function Th(l,s){var c=Object.keys(l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(l);s&&(u=u.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),c.push.apply(c,u)}return c}function io(l){for(var s=1;s<arguments.length;s++){var c=arguments[s]!=null?arguments[s]:{};s%2?Th(Object(c),!0).forEach(function(u){Fb(l,u,c[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(c)):Th(Object(c)).forEach(function(u){Object.defineProperty(l,u,Object.getOwnPropertyDescriptor(c,u))})}return l}function Fb(l,s,c){return s=Jb(s),s in l?Object.defineProperty(l,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[s]=c,l}function Jb(l){var s=Pb(l,"string");return typeof s=="symbol"?s:s+""}function Pb(l,s){if(typeof l!="object"||!l)return l;var c=l[Symbol.toPrimitive];if(c!==void 0){var u=c.call(l,s);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(l)}function hm(l){return l&&l.map((s,c)=>Rn.createElement(s.tag,io({key:c},s.attr),hm(s.child)))}function po(l){return s=>Rn.createElement(Wb,lo({attr:io({},l.attr)},s),hm(l.child))}function Wb(l){var s=c=>{var{attr:u,size:f,title:p}=l,h=Zb(l,Kb),x=f||c.size||"1em",b;return c.className&&(b=c.className),l.className&&(b=(b?b+" ":"")+l.className),Rn.createElement("svg",lo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,u,h,{className:b,style:io(io({color:l.color||c.color},c.style),l.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),p&&Rn.createElement("title",null,p),l.children)};return Oh!==void 0?Rn.createElement(Oh.Consumer,null,c=>s(c)):s(pm)}function uu(l){return po({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(l)}function fu(l){return po({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(l)}function du(l){return po({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(l)}function pu(l){return po({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(l)}function mm(l,s){return function(){return l.apply(s,arguments)}}const{toString:Ib}=Object.prototype,{getPrototypeOf:hu}=Object,{iterator:ho,toStringTag:gm}=Symbol,mo=(l=>s=>{const c=Ib.call(s);return l[c]||(l[c]=c.slice(8,-1).toLowerCase())})(Object.create(null)),pa=l=>(l=l.toLowerCase(),s=>mo(s)===l),go=l=>s=>typeof s===l,{isArray:Bl}=Array,El=go("undefined");function Di(l){return l!==null&&!El(l)&&l.constructor!==null&&!El(l.constructor)&&Vt(l.constructor.isBuffer)&&l.constructor.isBuffer(l)}const xm=pa("ArrayBuffer");function _b(l){let s;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?s=ArrayBuffer.isView(l):s=l&&l.buffer&&xm(l.buffer),s}const $b=go("string"),Vt=go("function"),bm=go("number"),Ui=l=>l!==null&&typeof l=="object",e1=l=>l===!0||l===!1,eo=l=>{if(mo(l)!=="object")return!1;const s=hu(l);return(s===null||s===Object.prototype||Object.getPrototypeOf(s)===null)&&!(gm in l)&&!(ho in l)},t1=l=>{if(!Ui(l)||Di(l))return!1;try{return Object.keys(l).length===0&&Object.getPrototypeOf(l)===Object.prototype}catch{return!1}},a1=pa("Date"),n1=pa("File"),l1=pa("Blob"),i1=pa("FileList"),r1=l=>Ui(l)&&Vt(l.pipe),o1=l=>{let s;return l&&(typeof FormData=="function"&&l instanceof FormData||Vt(l.append)&&((s=mo(l))==="formdata"||s==="object"&&Vt(l.toString)&&l.toString()==="[object FormData]"))},s1=pa("URLSearchParams"),[c1,u1,f1,d1]=["ReadableStream","Request","Response","Headers"].map(pa),p1=l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Hi(l,s,{allOwnKeys:c=!1}={}){if(l===null||typeof l>"u")return;let u,f;if(typeof l!="object"&&(l=[l]),Bl(l))for(u=0,f=l.length;u<f;u++)s.call(null,l[u],u,l);else{if(Di(l))return;const p=c?Object.getOwnPropertyNames(l):Object.keys(l),h=p.length;let x;for(u=0;u<h;u++)x=p[u],s.call(null,l[x],x,l)}}function ym(l,s){if(Di(l))return null;s=s.toLowerCase();const c=Object.keys(l);let u=c.length,f;for(;u-- >0;)if(f=c[u],s===f.toLowerCase())return f;return null}const Bn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,vm=l=>!El(l)&&l!==Bn;function $c(){const{caseless:l,skipUndefined:s}=vm(this)&&this||{},c={},u=(f,p)=>{const h=l&&ym(c,p)||p;eo(c[h])&&eo(f)?c[h]=$c(c[h],f):eo(f)?c[h]=$c({},f):Bl(f)?c[h]=f.slice():(!s||!El(f))&&(c[h]=f)};for(let f=0,p=arguments.length;f<p;f++)arguments[f]&&Hi(arguments[f],u);return c}const h1=(l,s,c,{allOwnKeys:u}={})=>(Hi(s,(f,p)=>{c&&Vt(f)?l[p]=mm(f,c):l[p]=f},{allOwnKeys:u}),l),m1=l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),g1=(l,s,c,u)=>{l.prototype=Object.create(s.prototype,u),l.prototype.constructor=l,Object.defineProperty(l,"super",{value:s.prototype}),c&&Object.assign(l.prototype,c)},x1=(l,s,c,u)=>{let f,p,h;const x={};if(s=s||{},l==null)return s;do{for(f=Object.getOwnPropertyNames(l),p=f.length;p-- >0;)h=f[p],(!u||u(h,l,s))&&!x[h]&&(s[h]=l[h],x[h]=!0);l=c!==!1&&hu(l)}while(l&&(!c||c(l,s))&&l!==Object.prototype);return s},b1=(l,s,c)=>{l=String(l),(c===void 0||c>l.length)&&(c=l.length),c-=s.length;const u=l.indexOf(s,c);return u!==-1&&u===c},y1=l=>{if(!l)return null;if(Bl(l))return l;let s=l.length;if(!bm(s))return null;const c=new Array(s);for(;s-- >0;)c[s]=l[s];return c},v1=(l=>s=>l&&s instanceof l)(typeof Uint8Array<"u"&&hu(Uint8Array)),A1=(l,s)=>{const u=(l&&l[ho]).call(l);let f;for(;(f=u.next())&&!f.done;){const p=f.value;s.call(l,p[0],p[1])}},j1=(l,s)=>{let c;const u=[];for(;(c=l.exec(s))!==null;)u.push(c);return u},w1=pa("HTMLFormElement"),S1=l=>l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(c,u,f){return u.toUpperCase()+f}),Bh=(({hasOwnProperty:l})=>(s,c)=>l.call(s,c))(Object.prototype),E1=pa("RegExp"),Am=(l,s)=>{const c=Object.getOwnPropertyDescriptors(l),u={};Hi(c,(f,p)=>{let h;(h=s(f,p,l))!==!1&&(u[p]=h||f)}),Object.defineProperties(l,u)},N1=l=>{Am(l,(s,c)=>{if(Vt(l)&&["arguments","caller","callee"].indexOf(c)!==-1)return!1;const u=l[c];if(Vt(u)){if(s.enumerable=!1,"writable"in s){s.writable=!1;return}s.set||(s.set=()=>{throw Error("Can not rewrite read-only method '"+c+"'")})}})},z1=(l,s)=>{const c={},u=f=>{f.forEach(p=>{c[p]=!0})};return Bl(l)?u(l):u(String(l).split(s)),c},C1=()=>{},O1=(l,s)=>l!=null&&Number.isFinite(l=+l)?l:s;function T1(l){return!!(l&&Vt(l.append)&&l[gm]==="FormData"&&l[ho])}const B1=l=>{const s=new Array(10),c=(u,f)=>{if(Ui(u)){if(s.indexOf(u)>=0)return;if(Di(u))return u;if(!("toJSON"in u)){s[f]=u;const p=Bl(u)?[]:{};return Hi(u,(h,x)=>{const b=c(h,f+1);!El(b)&&(p[x]=b)}),s[f]=void 0,p}}return u};return c(l,0)},R1=pa("AsyncFunction"),M1=l=>l&&(Ui(l)||Vt(l))&&Vt(l.then)&&Vt(l.catch),jm=((l,s)=>l?setImmediate:s?((c,u)=>(Bn.addEventListener("message",({source:f,data:p})=>{f===Bn&&p===c&&u.length&&u.shift()()},!1),f=>{u.push(f),Bn.postMessage(c,"*")}))(`axios@${Math.random()}`,[]):c=>setTimeout(c))(typeof setImmediate=="function",Vt(Bn.postMessage)),D1=typeof queueMicrotask<"u"?queueMicrotask.bind(Bn):typeof process<"u"&&process.nextTick||jm,U1=l=>l!=null&&Vt(l[ho]),M={isArray:Bl,isArrayBuffer:xm,isBuffer:Di,isFormData:o1,isArrayBufferView:_b,isString:$b,isNumber:bm,isBoolean:e1,isObject:Ui,isPlainObject:eo,isEmptyObject:t1,isReadableStream:c1,isRequest:u1,isResponse:f1,isHeaders:d1,isUndefined:El,isDate:a1,isFile:n1,isBlob:l1,isRegExp:E1,isFunction:Vt,isStream:r1,isURLSearchParams:s1,isTypedArray:v1,isFileList:i1,forEach:Hi,merge:$c,extend:h1,trim:p1,stripBOM:m1,inherits:g1,toFlatObject:x1,kindOf:mo,kindOfTest:pa,endsWith:b1,toArray:y1,forEachEntry:A1,matchAll:j1,isHTMLForm:w1,hasOwnProperty:Bh,hasOwnProp:Bh,reduceDescriptors:Am,freezeMethods:N1,toObjectSet:z1,toCamelCase:S1,noop:C1,toFiniteNumber:O1,findKey:ym,global:Bn,isContextDefined:vm,isSpecCompliantForm:T1,toJSONObject:B1,isAsyncFn:R1,isThenable:M1,setImmediate:jm,asap:D1,isIterable:U1};function ve(l,s,c,u,f){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=l,this.name="AxiosError",s&&(this.code=s),c&&(this.config=c),u&&(this.request=u),f&&(this.response=f,this.status=f.status?f.status:null)}M.inherits(ve,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:M.toJSONObject(this.config),code:this.code,status:this.status}}});const wm=ve.prototype,Sm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(l=>{Sm[l]={value:l}});Object.defineProperties(ve,Sm);Object.defineProperty(wm,"isAxiosError",{value:!0});ve.from=(l,s,c,u,f,p)=>{const h=Object.create(wm);M.toFlatObject(l,h,function(y){return y!==Error.prototype},m=>m!=="isAxiosError");const x=l&&l.message?l.message:"Error",b=s==null&&l?l.code:s;return ve.call(h,x,b,c,u,f),l&&h.cause==null&&Object.defineProperty(h,"cause",{value:l,configurable:!0}),h.name=l&&l.name||"Error",p&&Object.assign(h,p),h};const H1=null;function eu(l){return M.isPlainObject(l)||M.isArray(l)}function Em(l){return M.endsWith(l,"[]")?l.slice(0,-2):l}function Rh(l,s,c){return l?l.concat(s).map(function(f,p){return f=Em(f),!c&&p?"["+f+"]":f}).join(c?".":""):s}function L1(l){return M.isArray(l)&&!l.some(eu)}const q1=M.toFlatObject(M,{},null,function(s){return/^is[A-Z]/.test(s)});function xo(l,s,c){if(!M.isObject(l))throw new TypeError("target must be an object");s=s||new FormData,c=M.toFlatObject(c,{metaTokens:!0,dots:!1,indexes:!1},!1,function(R,D){return!M.isUndefined(D[R])});const u=c.metaTokens,f=c.visitor||y,p=c.dots,h=c.indexes,b=(c.Blob||typeof Blob<"u"&&Blob)&&M.isSpecCompliantForm(s);if(!M.isFunction(f))throw new TypeError("visitor must be a function");function m(w){if(w===null)return"";if(M.isDate(w))return w.toISOString();if(M.isBoolean(w))return w.toString();if(!b&&M.isBlob(w))throw new ve("Blob is not supported. Use a Buffer instead.");return M.isArrayBuffer(w)||M.isTypedArray(w)?b&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function y(w,R,D){let X=w;if(w&&!D&&typeof w=="object"){if(M.endsWith(R,"{}"))R=u?R:R.slice(0,-2),w=JSON.stringify(w);else if(M.isArray(w)&&L1(w)||(M.isFileList(w)||M.endsWith(R,"[]"))&&(X=M.toArray(w)))return R=Em(R),X.forEach(function(ee,me){!(M.isUndefined(ee)||ee===null)&&s.append(h===!0?Rh([R],me,p):h===null?R:R+"[]",m(ee))}),!1}return eu(w)?!0:(s.append(Rh(D,R,p),m(w)),!1)}const j=[],L=Object.assign(q1,{defaultVisitor:y,convertValue:m,isVisitable:eu});function V(w,R){if(!M.isUndefined(w)){if(j.indexOf(w)!==-1)throw Error("Circular reference detected in "+R.join("."));j.push(w),M.forEach(w,function(X,I){(!(M.isUndefined(X)||X===null)&&f.call(s,X,M.isString(I)?I.trim():I,R,L))===!0&&V(X,R?R.concat(I):[I])}),j.pop()}}if(!M.isObject(l))throw new TypeError("data must be an object");return V(l),s}function Mh(l){const s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g,function(u){return s[u]})}function mu(l,s){this._pairs=[],l&&xo(l,this,s)}const Nm=mu.prototype;Nm.append=function(s,c){this._pairs.push([s,c])};Nm.toString=function(s){const c=s?function(u){return s.call(this,u,Mh)}:Mh;return this._pairs.map(function(f){return c(f[0])+"="+c(f[1])},"").join("&")};function V1(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function zm(l,s,c){if(!s)return l;const u=c&&c.encode||V1;M.isFunction(c)&&(c={serialize:c});const f=c&&c.serialize;let p;if(f?p=f(s,c):p=M.isURLSearchParams(s)?s.toString():new mu(s,c).toString(u),p){const h=l.indexOf("#");h!==-1&&(l=l.slice(0,h)),l+=(l.indexOf("?")===-1?"?":"&")+p}return l}class Dh{constructor(){this.handlers=[]}use(s,c,u){return this.handlers.push({fulfilled:s,rejected:c,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1}eject(s){this.handlers[s]&&(this.handlers[s]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(s){M.forEach(this.handlers,function(u){u!==null&&s(u)})}}const Cm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},k1=typeof URLSearchParams<"u"?URLSearchParams:mu,Q1=typeof FormData<"u"?FormData:null,Y1=typeof Blob<"u"?Blob:null,G1={isBrowser:!0,classes:{URLSearchParams:k1,FormData:Q1,Blob:Y1},protocols:["http","https","file","blob","url","data"]},gu=typeof window<"u"&&typeof document<"u",tu=typeof navigator=="object"&&navigator||void 0,K1=gu&&(!tu||["ReactNative","NativeScript","NS"].indexOf(tu.product)<0),Z1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",X1=gu&&window.location.href||"http://localhost",F1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:gu,hasStandardBrowserEnv:K1,hasStandardBrowserWebWorkerEnv:Z1,navigator:tu,origin:X1},Symbol.toStringTag,{value:"Module"})),Ct={...F1,...G1};function J1(l,s){return xo(l,new Ct.classes.URLSearchParams,{visitor:function(c,u,f,p){return Ct.isNode&&M.isBuffer(c)?(this.append(u,c.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)},...s})}function P1(l){return M.matchAll(/\w+|\[(\w*)]/g,l).map(s=>s[0]==="[]"?"":s[1]||s[0])}function W1(l){const s={},c=Object.keys(l);let u;const f=c.length;let p;for(u=0;u<f;u++)p=c[u],s[p]=l[p];return s}function Om(l){function s(c,u,f,p){let h=c[p++];if(h==="__proto__")return!0;const x=Number.isFinite(+h),b=p>=c.length;return h=!h&&M.isArray(f)?f.length:h,b?(M.hasOwnProp(f,h)?f[h]=[f[h],u]:f[h]=u,!x):((!f[h]||!M.isObject(f[h]))&&(f[h]=[]),s(c,u,f[h],p)&&M.isArray(f[h])&&(f[h]=W1(f[h])),!x)}if(M.isFormData(l)&&M.isFunction(l.entries)){const c={};return M.forEachEntry(l,(u,f)=>{s(P1(u),f,c,0)}),c}return null}function I1(l,s,c){if(M.isString(l))try{return(s||JSON.parse)(l),M.trim(l)}catch(u){if(u.name!=="SyntaxError")throw u}return(c||JSON.stringify)(l)}const Li={transitional:Cm,adapter:["xhr","http","fetch"],transformRequest:[function(s,c){const u=c.getContentType()||"",f=u.indexOf("application/json")>-1,p=M.isObject(s);if(p&&M.isHTMLForm(s)&&(s=new FormData(s)),M.isFormData(s))return f?JSON.stringify(Om(s)):s;if(M.isArrayBuffer(s)||M.isBuffer(s)||M.isStream(s)||M.isFile(s)||M.isBlob(s)||M.isReadableStream(s))return s;if(M.isArrayBufferView(s))return s.buffer;if(M.isURLSearchParams(s))return c.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),s.toString();let x;if(p){if(u.indexOf("application/x-www-form-urlencoded")>-1)return J1(s,this.formSerializer).toString();if((x=M.isFileList(s))||u.indexOf("multipart/form-data")>-1){const b=this.env&&this.env.FormData;return xo(x?{"files[]":s}:s,b&&new b,this.formSerializer)}}return p||f?(c.setContentType("application/json",!1),I1(s)):s}],transformResponse:[function(s){const c=this.transitional||Li.transitional,u=c&&c.forcedJSONParsing,f=this.responseType==="json";if(M.isResponse(s)||M.isReadableStream(s))return s;if(s&&M.isString(s)&&(u&&!this.responseType||f)){const h=!(c&&c.silentJSONParsing)&&f;try{return JSON.parse(s,this.parseReviver)}catch(x){if(h)throw x.name==="SyntaxError"?ve.from(x,ve.ERR_BAD_RESPONSE,this,null,this.response):x}}return s}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ct.classes.FormData,Blob:Ct.classes.Blob},validateStatus:function(s){return s>=200&&s<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};M.forEach(["delete","get","head","post","put","patch"],l=>{Li.headers[l]={}});const _1=M.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),$1=l=>{const s={};let c,u,f;return l&&l.split(`
`).forEach(function(h){f=h.indexOf(":"),c=h.substring(0,f).trim().toLowerCase(),u=h.substring(f+1).trim(),!(!c||s[c]&&_1[c])&&(c==="set-cookie"?s[c]?s[c].push(u):s[c]=[u]:s[c]=s[c]?s[c]+", "+u:u)}),s},Uh=Symbol("internals");function Oi(l){return l&&String(l).trim().toLowerCase()}function to(l){return l===!1||l==null?l:M.isArray(l)?l.map(to):String(l)}function ey(l){const s=Object.create(null),c=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let u;for(;u=c.exec(l);)s[u[1]]=u[2];return s}const ty=l=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());function kc(l,s,c,u,f){if(M.isFunction(u))return u.call(this,s,c);if(f&&(s=c),!!M.isString(s)){if(M.isString(u))return s.indexOf(u)!==-1;if(M.isRegExp(u))return u.test(s)}}function ay(l){return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(s,c,u)=>c.toUpperCase()+u)}function ny(l,s){const c=M.toCamelCase(" "+s);["get","set","has"].forEach(u=>{Object.defineProperty(l,u+c,{value:function(f,p,h){return this[u].call(this,s,f,p,h)},configurable:!0})})}let kt=class{constructor(s){s&&this.set(s)}set(s,c,u){const f=this;function p(x,b,m){const y=Oi(b);if(!y)throw new Error("header name must be a non-empty string");const j=M.findKey(f,y);(!j||f[j]===void 0||m===!0||m===void 0&&f[j]!==!1)&&(f[j||b]=to(x))}const h=(x,b)=>M.forEach(x,(m,y)=>p(m,y,b));if(M.isPlainObject(s)||s instanceof this.constructor)h(s,c);else if(M.isString(s)&&(s=s.trim())&&!ty(s))h($1(s),c);else if(M.isObject(s)&&M.isIterable(s)){let x={},b,m;for(const y of s){if(!M.isArray(y))throw TypeError("Object iterator must return a key-value pair");x[m=y[0]]=(b=x[m])?M.isArray(b)?[...b,y[1]]:[b,y[1]]:y[1]}h(x,c)}else s!=null&&p(c,s,u);return this}get(s,c){if(s=Oi(s),s){const u=M.findKey(this,s);if(u){const f=this[u];if(!c)return f;if(c===!0)return ey(f);if(M.isFunction(c))return c.call(this,f,u);if(M.isRegExp(c))return c.exec(f);throw new TypeError("parser must be boolean|regexp|function")}}}has(s,c){if(s=Oi(s),s){const u=M.findKey(this,s);return!!(u&&this[u]!==void 0&&(!c||kc(this,this[u],u,c)))}return!1}delete(s,c){const u=this;let f=!1;function p(h){if(h=Oi(h),h){const x=M.findKey(u,h);x&&(!c||kc(u,u[x],x,c))&&(delete u[x],f=!0)}}return M.isArray(s)?s.forEach(p):p(s),f}clear(s){const c=Object.keys(this);let u=c.length,f=!1;for(;u--;){const p=c[u];(!s||kc(this,this[p],p,s,!0))&&(delete this[p],f=!0)}return f}normalize(s){const c=this,u={};return M.forEach(this,(f,p)=>{const h=M.findKey(u,p);if(h){c[h]=to(f),delete c[p];return}const x=s?ay(p):String(p).trim();x!==p&&delete c[p],c[x]=to(f),u[x]=!0}),this}concat(...s){return this.constructor.concat(this,...s)}toJSON(s){const c=Object.create(null);return M.forEach(this,(u,f)=>{u!=null&&u!==!1&&(c[f]=s&&M.isArray(u)?u.join(", "):u)}),c}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([s,c])=>s+": "+c).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(s){return s instanceof this?s:new this(s)}static concat(s,...c){const u=new this(s);return c.forEach(f=>u.set(f)),u}static accessor(s){const u=(this[Uh]=this[Uh]={accessors:{}}).accessors,f=this.prototype;function p(h){const x=Oi(h);u[x]||(ny(f,h),u[x]=!0)}return M.isArray(s)?s.forEach(p):p(s),this}};kt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);M.reduceDescriptors(kt.prototype,({value:l},s)=>{let c=s[0].toUpperCase()+s.slice(1);return{get:()=>l,set(u){this[c]=u}}});M.freezeMethods(kt);function Qc(l,s){const c=this||Li,u=s||c,f=kt.from(u.headers);let p=u.data;return M.forEach(l,function(x){p=x.call(c,p,f.normalize(),s?s.status:void 0)}),f.normalize(),p}function Tm(l){return!!(l&&l.__CANCEL__)}function Rl(l,s,c){ve.call(this,l??"canceled",ve.ERR_CANCELED,s,c),this.name="CanceledError"}M.inherits(Rl,ve,{__CANCEL__:!0});function Bm(l,s,c){const u=c.config.validateStatus;!c.status||!u||u(c.status)?l(c):s(new ve("Request failed with status code "+c.status,[ve.ERR_BAD_REQUEST,ve.ERR_BAD_RESPONSE][Math.floor(c.status/100)-4],c.config,c.request,c))}function ly(l){const s=/^([-+\w]{1,25})(:?\/\/|:)/.exec(l);return s&&s[1]||""}function iy(l,s){l=l||10;const c=new Array(l),u=new Array(l);let f=0,p=0,h;return s=s!==void 0?s:1e3,function(b){const m=Date.now(),y=u[p];h||(h=m),c[f]=b,u[f]=m;let j=p,L=0;for(;j!==f;)L+=c[j++],j=j%l;if(f=(f+1)%l,f===p&&(p=(p+1)%l),m-h<s)return;const V=y&&m-y;return V?Math.round(L*1e3/V):void 0}}function ry(l,s){let c=0,u=1e3/s,f,p;const h=(m,y=Date.now())=>{c=y,f=null,p&&(clearTimeout(p),p=null),l(...m)};return[(...m)=>{const y=Date.now(),j=y-c;j>=u?h(m,y):(f=m,p||(p=setTimeout(()=>{p=null,h(f)},u-j)))},()=>f&&h(f)]}const ro=(l,s,c=3)=>{let u=0;const f=iy(50,250);return ry(p=>{const h=p.loaded,x=p.lengthComputable?p.total:void 0,b=h-u,m=f(b),y=h<=x;u=h;const j={loaded:h,total:x,progress:x?h/x:void 0,bytes:b,rate:m||void 0,estimated:m&&x&&y?(x-h)/m:void 0,event:p,lengthComputable:x!=null,[s?"download":"upload"]:!0};l(j)},c)},Hh=(l,s)=>{const c=l!=null;return[u=>s[0]({lengthComputable:c,total:l,loaded:u}),s[1]]},Lh=l=>(...s)=>M.asap(()=>l(...s)),oy=Ct.hasStandardBrowserEnv?((l,s)=>c=>(c=new URL(c,Ct.origin),l.protocol===c.protocol&&l.host===c.host&&(s||l.port===c.port)))(new URL(Ct.origin),Ct.navigator&&/(msie|trident)/i.test(Ct.navigator.userAgent)):()=>!0,sy=Ct.hasStandardBrowserEnv?{write(l,s,c,u,f,p,h){if(typeof document>"u")return;const x=[`${l}=${encodeURIComponent(s)}`];M.isNumber(c)&&x.push(`expires=${new Date(c).toUTCString()}`),M.isString(u)&&x.push(`path=${u}`),M.isString(f)&&x.push(`domain=${f}`),p===!0&&x.push("secure"),M.isString(h)&&x.push(`SameSite=${h}`),document.cookie=x.join("; ")},read(l){if(typeof document>"u")return null;const s=document.cookie.match(new RegExp("(?:^|; )"+l+"=([^;]*)"));return s?decodeURIComponent(s[1]):null},remove(l){this.write(l,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function cy(l){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)}function uy(l,s){return s?l.replace(/\/?\/$/,"")+"/"+s.replace(/^\/+/,""):l}function Rm(l,s,c){let u=!cy(s);return l&&(u||c==!1)?uy(l,s):s}const qh=l=>l instanceof kt?{...l}:l;function Dn(l,s){s=s||{};const c={};function u(m,y,j,L){return M.isPlainObject(m)&&M.isPlainObject(y)?M.merge.call({caseless:L},m,y):M.isPlainObject(y)?M.merge({},y):M.isArray(y)?y.slice():y}function f(m,y,j,L){if(M.isUndefined(y)){if(!M.isUndefined(m))return u(void 0,m,j,L)}else return u(m,y,j,L)}function p(m,y){if(!M.isUndefined(y))return u(void 0,y)}function h(m,y){if(M.isUndefined(y)){if(!M.isUndefined(m))return u(void 0,m)}else return u(void 0,y)}function x(m,y,j){if(j in s)return u(m,y);if(j in l)return u(void 0,m)}const b={url:p,method:p,data:p,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:x,headers:(m,y,j)=>f(qh(m),qh(y),j,!0)};return M.forEach(Object.keys({...l,...s}),function(y){const j=b[y]||f,L=j(l[y],s[y],y);M.isUndefined(L)&&j!==x||(c[y]=L)}),c}const Mm=l=>{const s=Dn({},l);let{data:c,withXSRFToken:u,xsrfHeaderName:f,xsrfCookieName:p,headers:h,auth:x}=s;if(s.headers=h=kt.from(h),s.url=zm(Rm(s.baseURL,s.url,s.allowAbsoluteUrls),l.params,l.paramsSerializer),x&&h.set("Authorization","Basic "+btoa((x.username||"")+":"+(x.password?unescape(encodeURIComponent(x.password)):""))),M.isFormData(c)){if(Ct.hasStandardBrowserEnv||Ct.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if(M.isFunction(c.getHeaders)){const b=c.getHeaders(),m=["content-type","content-length"];Object.entries(b).forEach(([y,j])=>{m.includes(y.toLowerCase())&&h.set(y,j)})}}if(Ct.hasStandardBrowserEnv&&(u&&M.isFunction(u)&&(u=u(s)),u||u!==!1&&oy(s.url))){const b=f&&p&&sy.read(p);b&&h.set(f,b)}return s},fy=typeof XMLHttpRequest<"u",dy=fy&&function(l){return new Promise(function(c,u){const f=Mm(l);let p=f.data;const h=kt.from(f.headers).normalize();let{responseType:x,onUploadProgress:b,onDownloadProgress:m}=f,y,j,L,V,w;function R(){V&&V(),w&&w(),f.cancelToken&&f.cancelToken.unsubscribe(y),f.signal&&f.signal.removeEventListener("abort",y)}let D=new XMLHttpRequest;D.open(f.method.toUpperCase(),f.url,!0),D.timeout=f.timeout;function X(){if(!D)return;const ee=kt.from("getAllResponseHeaders"in D&&D.getAllResponseHeaders()),le={data:!x||x==="text"||x==="json"?D.responseText:D.response,status:D.status,statusText:D.statusText,headers:ee,config:l,request:D};Bm(function(ae){c(ae),R()},function(ae){u(ae),R()},le),D=null}"onloadend"in D?D.onloadend=X:D.onreadystatechange=function(){!D||D.readyState!==4||D.status===0&&!(D.responseURL&&D.responseURL.indexOf("file:")===0)||setTimeout(X)},D.onabort=function(){D&&(u(new ve("Request aborted",ve.ECONNABORTED,l,D)),D=null)},D.onerror=function(me){const le=me&&me.message?me.message:"Network Error",pe=new ve(le,ve.ERR_NETWORK,l,D);pe.event=me||null,u(pe),D=null},D.ontimeout=function(){let me=f.timeout?"timeout of "+f.timeout+"ms exceeded":"timeout exceeded";const le=f.transitional||Cm;f.timeoutErrorMessage&&(me=f.timeoutErrorMessage),u(new ve(me,le.clarifyTimeoutError?ve.ETIMEDOUT:ve.ECONNABORTED,l,D)),D=null},p===void 0&&h.setContentType(null),"setRequestHeader"in D&&M.forEach(h.toJSON(),function(me,le){D.setRequestHeader(le,me)}),M.isUndefined(f.withCredentials)||(D.withCredentials=!!f.withCredentials),x&&x!=="json"&&(D.responseType=f.responseType),m&&([L,w]=ro(m,!0),D.addEventListener("progress",L)),b&&D.upload&&([j,V]=ro(b),D.upload.addEventListener("progress",j),D.upload.addEventListener("loadend",V)),(f.cancelToken||f.signal)&&(y=ee=>{D&&(u(!ee||ee.type?new Rl(null,l,D):ee),D.abort(),D=null)},f.cancelToken&&f.cancelToken.subscribe(y),f.signal&&(f.signal.aborted?y():f.signal.addEventListener("abort",y)));const I=ly(f.url);if(I&&Ct.protocols.indexOf(I)===-1){u(new ve("Unsupported protocol "+I+":",ve.ERR_BAD_REQUEST,l));return}D.send(p||null)})},py=(l,s)=>{const{length:c}=l=l?l.filter(Boolean):[];if(s||c){let u=new AbortController,f;const p=function(m){if(!f){f=!0,x();const y=m instanceof Error?m:this.reason;u.abort(y instanceof ve?y:new Rl(y instanceof Error?y.message:y))}};let h=s&&setTimeout(()=>{h=null,p(new ve(`timeout ${s} of ms exceeded`,ve.ETIMEDOUT))},s);const x=()=>{l&&(h&&clearTimeout(h),h=null,l.forEach(m=>{m.unsubscribe?m.unsubscribe(p):m.removeEventListener("abort",p)}),l=null)};l.forEach(m=>m.addEventListener("abort",p));const{signal:b}=u;return b.unsubscribe=()=>M.asap(x),b}},hy=function*(l,s){let c=l.byteLength;if(c<s){yield l;return}let u=0,f;for(;u<c;)f=u+s,yield l.slice(u,f),u=f},my=async function*(l,s){for await(const c of gy(l))yield*hy(c,s)},gy=async function*(l){if(l[Symbol.asyncIterator]){yield*l;return}const s=l.getReader();try{for(;;){const{done:c,value:u}=await s.read();if(c)break;yield u}}finally{await s.cancel()}},Vh=(l,s,c,u)=>{const f=my(l,s);let p=0,h,x=b=>{h||(h=!0,u&&u(b))};return new ReadableStream({async pull(b){try{const{done:m,value:y}=await f.next();if(m){x(),b.close();return}let j=y.byteLength;if(c){let L=p+=j;c(L)}b.enqueue(new Uint8Array(y))}catch(m){throw x(m),m}},cancel(b){return x(b),f.return()}},{highWaterMark:2})},kh=64*1024,{isFunction:Ir}=M,xy=(({Request:l,Response:s})=>({Request:l,Response:s}))(M.global),{ReadableStream:Qh,TextEncoder:Yh}=M.global,Gh=(l,...s)=>{try{return!!l(...s)}catch{return!1}},by=l=>{l=M.merge.call({skipUndefined:!0},xy,l);const{fetch:s,Request:c,Response:u}=l,f=s?Ir(s):typeof fetch=="function",p=Ir(c),h=Ir(u);if(!f)return!1;const x=f&&Ir(Qh),b=f&&(typeof Yh=="function"?(w=>R=>w.encode(R))(new Yh):async w=>new Uint8Array(await new c(w).arrayBuffer())),m=p&&x&&Gh(()=>{let w=!1;const R=new c(Ct.origin,{body:new Qh,method:"POST",get duplex(){return w=!0,"half"}}).headers.has("Content-Type");return w&&!R}),y=h&&x&&Gh(()=>M.isReadableStream(new u("").body)),j={stream:y&&(w=>w.body)};f&&["text","arrayBuffer","blob","formData","stream"].forEach(w=>{!j[w]&&(j[w]=(R,D)=>{let X=R&&R[w];if(X)return X.call(R);throw new ve(`Response type '${w}' is not supported`,ve.ERR_NOT_SUPPORT,D)})});const L=async w=>{if(w==null)return 0;if(M.isBlob(w))return w.size;if(M.isSpecCompliantForm(w))return(await new c(Ct.origin,{method:"POST",body:w}).arrayBuffer()).byteLength;if(M.isArrayBufferView(w)||M.isArrayBuffer(w))return w.byteLength;if(M.isURLSearchParams(w)&&(w=w+""),M.isString(w))return(await b(w)).byteLength},V=async(w,R)=>{const D=M.toFiniteNumber(w.getContentLength());return D??L(R)};return async w=>{let{url:R,method:D,data:X,signal:I,cancelToken:ee,timeout:me,onDownloadProgress:le,onUploadProgress:pe,responseType:ae,headers:re,withCredentials:ue="same-origin",fetchOptions:De}=Mm(w),Me=s||fetch;ae=ae?(ae+"").toLowerCase():"text";let we=py([I,ee&&ee.toAbortSignal()],me),Ye=null;const Te=we&&we.unsubscribe&&(()=>{we.unsubscribe()});let Xe;try{if(pe&&m&&D!=="get"&&D!=="head"&&(Xe=await V(re,X))!==0){let A=new c(R,{method:"POST",body:X,duplex:"half"}),H;if(M.isFormData(X)&&(H=A.headers.get("content-type"))&&re.setContentType(H),A.body){const[K,W]=Hh(Xe,ro(Lh(pe)));X=Vh(A.body,kh,K,W)}}M.isString(ue)||(ue=ue?"include":"omit");const B=p&&"credentials"in c.prototype,P={...De,signal:we,method:D.toUpperCase(),headers:re.normalize().toJSON(),body:X,duplex:"half",credentials:B?ue:void 0};Ye=p&&new c(R,P);let ne=await(p?Me(Ye,De):Me(R,P));const xe=y&&(ae==="stream"||ae==="response");if(y&&(le||xe&&Te)){const A={};["status","statusText","headers"].forEach(se=>{A[se]=ne[se]});const H=M.toFiniteNumber(ne.headers.get("content-length")),[K,W]=le&&Hh(H,ro(Lh(le),!0))||[];ne=new u(Vh(ne.body,kh,K,()=>{W&&W(),Te&&Te()}),A)}ae=ae||"text";let fe=await j[M.findKey(j,ae)||"text"](ne,w);return!xe&&Te&&Te(),await new Promise((A,H)=>{Bm(A,H,{data:fe,headers:kt.from(ne.headers),status:ne.status,statusText:ne.statusText,config:w,request:Ye})})}catch(B){throw Te&&Te(),B&&B.name==="TypeError"&&/Load failed|fetch/i.test(B.message)?Object.assign(new ve("Network Error",ve.ERR_NETWORK,w,Ye),{cause:B.cause||B}):ve.from(B,B&&B.code,w,Ye)}}},yy=new Map,Dm=l=>{let s=l&&l.env||{};const{fetch:c,Request:u,Response:f}=s,p=[u,f,c];let h=p.length,x=h,b,m,y=yy;for(;x--;)b=p[x],m=y.get(b),m===void 0&&y.set(b,m=x?new Map:by(s)),y=m;return m};Dm();const xu={http:H1,xhr:dy,fetch:{get:Dm}};M.forEach(xu,(l,s)=>{if(l){try{Object.defineProperty(l,"name",{value:s})}catch{}Object.defineProperty(l,"adapterName",{value:s})}});const Kh=l=>`- ${l}`,vy=l=>M.isFunction(l)||l===null||l===!1;function Ay(l,s){l=M.isArray(l)?l:[l];const{length:c}=l;let u,f;const p={};for(let h=0;h<c;h++){u=l[h];let x;if(f=u,!vy(u)&&(f=xu[(x=String(u)).toLowerCase()],f===void 0))throw new ve(`Unknown adapter '${x}'`);if(f&&(M.isFunction(f)||(f=f.get(s))))break;p[x||"#"+h]=f}if(!f){const h=Object.entries(p).map(([b,m])=>`adapter ${b} `+(m===!1?"is not supported by the environment":"is not available in the build"));let x=c?h.length>1?`since :
`+h.map(Kh).join(`
`):" "+Kh(h[0]):"as no adapter specified";throw new ve("There is no suitable adapter to dispatch the request "+x,"ERR_NOT_SUPPORT")}return f}const Um={getAdapter:Ay,adapters:xu};function Yc(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new Rl(null,l)}function Zh(l){return Yc(l),l.headers=kt.from(l.headers),l.data=Qc.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),Um.getAdapter(l.adapter||Li.adapter,l)(l).then(function(u){return Yc(l),u.data=Qc.call(l,l.transformResponse,u),u.headers=kt.from(u.headers),u},function(u){return Tm(u)||(Yc(l),u&&u.response&&(u.response.data=Qc.call(l,l.transformResponse,u.response),u.response.headers=kt.from(u.response.headers))),Promise.reject(u)})}const Hm="1.13.1",bo={};["object","boolean","number","function","string","symbol"].forEach((l,s)=>{bo[l]=function(u){return typeof u===l||"a"+(s<1?"n ":" ")+l}});const Xh={};bo.transitional=function(s,c,u){function f(p,h){return"[Axios v"+Hm+"] Transitional option '"+p+"'"+h+(u?". "+u:"")}return(p,h,x)=>{if(s===!1)throw new ve(f(h," has been removed"+(c?" in "+c:"")),ve.ERR_DEPRECATED);return c&&!Xh[h]&&(Xh[h]=!0,console.warn(f(h," has been deprecated since v"+c+" and will be removed in the near future"))),s?s(p,h,x):!0}};bo.spelling=function(s){return(c,u)=>(console.warn(`${u} is likely a misspelling of ${s}`),!0)};function jy(l,s,c){if(typeof l!="object")throw new ve("options must be an object",ve.ERR_BAD_OPTION_VALUE);const u=Object.keys(l);let f=u.length;for(;f-- >0;){const p=u[f],h=s[p];if(h){const x=l[p],b=x===void 0||h(x,p,l);if(b!==!0)throw new ve("option "+p+" must be "+b,ve.ERR_BAD_OPTION_VALUE);continue}if(c!==!0)throw new ve("Unknown option "+p,ve.ERR_BAD_OPTION)}}const ao={assertOptions:jy,validators:bo},ba=ao.validators;let Mn=class{constructor(s){this.defaults=s||{},this.interceptors={request:new Dh,response:new Dh}}async request(s,c){try{return await this._request(s,c)}catch(u){if(u instanceof Error){let f={};Error.captureStackTrace?Error.captureStackTrace(f):f=new Error;const p=f.stack?f.stack.replace(/^.+\n/,""):"";try{u.stack?p&&!String(u.stack).endsWith(p.replace(/^.+\n.+\n/,""))&&(u.stack+=`
`+p):u.stack=p}catch{}}throw u}}_request(s,c){typeof s=="string"?(c=c||{},c.url=s):c=s||{},c=Dn(this.defaults,c);const{transitional:u,paramsSerializer:f,headers:p}=c;u!==void 0&&ao.assertOptions(u,{silentJSONParsing:ba.transitional(ba.boolean),forcedJSONParsing:ba.transitional(ba.boolean),clarifyTimeoutError:ba.transitional(ba.boolean)},!1),f!=null&&(M.isFunction(f)?c.paramsSerializer={serialize:f}:ao.assertOptions(f,{encode:ba.function,serialize:ba.function},!0)),c.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?c.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:c.allowAbsoluteUrls=!0),ao.assertOptions(c,{baseUrl:ba.spelling("baseURL"),withXsrfToken:ba.spelling("withXSRFToken")},!0),c.method=(c.method||this.defaults.method||"get").toLowerCase();let h=p&&M.merge(p.common,p[c.method]);p&&M.forEach(["delete","get","head","post","put","patch","common"],w=>{delete p[w]}),c.headers=kt.concat(h,p);const x=[];let b=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(c)===!1||(b=b&&R.synchronous,x.unshift(R.fulfilled,R.rejected))});const m=[];this.interceptors.response.forEach(function(R){m.push(R.fulfilled,R.rejected)});let y,j=0,L;if(!b){const w=[Zh.bind(this),void 0];for(w.unshift(...x),w.push(...m),L=w.length,y=Promise.resolve(c);j<L;)y=y.then(w[j++],w[j++]);return y}L=x.length;let V=c;for(;j<L;){const w=x[j++],R=x[j++];try{V=w(V)}catch(D){R.call(this,D);break}}try{y=Zh.call(this,V)}catch(w){return Promise.reject(w)}for(j=0,L=m.length;j<L;)y=y.then(m[j++],m[j++]);return y}getUri(s){s=Dn(this.defaults,s);const c=Rm(s.baseURL,s.url,s.allowAbsoluteUrls);return zm(c,s.params,s.paramsSerializer)}};M.forEach(["delete","get","head","options"],function(s){Mn.prototype[s]=function(c,u){return this.request(Dn(u||{},{method:s,url:c,data:(u||{}).data}))}});M.forEach(["post","put","patch"],function(s){function c(u){return function(p,h,x){return this.request(Dn(x||{},{method:s,headers:u?{"Content-Type":"multipart/form-data"}:{},url:p,data:h}))}}Mn.prototype[s]=c(),Mn.prototype[s+"Form"]=c(!0)});let wy=class Lm{constructor(s){if(typeof s!="function")throw new TypeError("executor must be a function.");let c;this.promise=new Promise(function(p){c=p});const u=this;this.promise.then(f=>{if(!u._listeners)return;let p=u._listeners.length;for(;p-- >0;)u._listeners[p](f);u._listeners=null}),this.promise.then=f=>{let p;const h=new Promise(x=>{u.subscribe(x),p=x}).then(f);return h.cancel=function(){u.unsubscribe(p)},h},s(function(p,h,x){u.reason||(u.reason=new Rl(p,h,x),c(u.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]}unsubscribe(s){if(!this._listeners)return;const c=this._listeners.indexOf(s);c!==-1&&this._listeners.splice(c,1)}toAbortSignal(){const s=new AbortController,c=u=>{s.abort(u)};return this.subscribe(c),s.signal.unsubscribe=()=>this.unsubscribe(c),s.signal}static source(){let s;return{token:new Lm(function(f){s=f}),cancel:s}}};function Sy(l){return function(c){return l.apply(null,c)}}function Ey(l){return M.isObject(l)&&l.isAxiosError===!0}const au={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(au).forEach(([l,s])=>{au[s]=l});function qm(l){const s=new Mn(l),c=mm(Mn.prototype.request,s);return M.extend(c,Mn.prototype,s,{allOwnKeys:!0}),M.extend(c,s,null,{allOwnKeys:!0}),c.create=function(f){return qm(Dn(l,f))},c}const dt=qm(Li);dt.Axios=Mn;dt.CanceledError=Rl;dt.CancelToken=wy;dt.isCancel=Tm;dt.VERSION=Hm;dt.toFormData=xo;dt.AxiosError=ve;dt.Cancel=dt.CanceledError;dt.all=function(s){return Promise.all(s)};dt.spread=Sy;dt.isAxiosError=Ey;dt.mergeConfig=Dn;dt.AxiosHeaders=kt;dt.formToJSON=l=>Om(M.isHTMLForm(l)?new FormData(l):l);dt.getAdapter=Um.getAdapter;dt.HttpStatusCode=au;dt.default=dt;const{Axios:H2,AxiosError:L2,CanceledError:q2,isCancel:V2,CancelToken:k2,VERSION:Q2,all:Y2,Cancel:G2,isAxiosError:K2,spread:Z2,toFormData:X2,AxiosHeaders:F2,HttpStatusCode:J2,formToJSON:P2,getAdapter:W2,mergeConfig:I2}=dt,Ny="http://localhost:8080/api/auth",Vm=dt.create({baseURL:Ny,headers:{"Content-Type":"application/json"}}),zy=async(l,s)=>{try{const c=await Vm.post("/login",{username:l,password:s});if(!c.data.accessToken)throw new Error(c.data.message||"Invalid credentials");return c.data}catch(c){throw console.error(" Login API Error:",c),new Error(c.response?.data?.message||"Login failed")}},Cy=async l=>{try{return(await Vm.post("/register",l)).data}catch(s){throw console.error(" Register API Error:",s),new Error(s.response?.data?.message||"Registration failed")}},Oy=()=>{const[l,s]=E.useState(!0),[c,u]=E.useState(!1),[f,p]=E.useState(""),[h,x]=E.useState(""),[b,m]=E.useState(""),[y,j]=E.useState(!1),L=ya(),V=async w=>{w.preventDefault(),m(""),j(!0);try{const R=await zy(f,h);R.accessToken?(sessionStorage.setItem("accessToken",R.accessToken),sessionStorage.setItem("refreshToken",R.refreshToken),sessionStorage.setItem("userEmail",f),alert("Login Successful!"),L("/userdashboard")):m(R.message||"Invalid email or password")}catch(R){m(R.message||"Invalid email or password")}finally{j(!1)}};return r.jsxs(r.Fragment,{children:[r.jsx(fo,{}),r.jsx("div",{style:{paddingTop:"120px"},children:r.jsx("div",{className:"login-container",children:r.jsxs("div",{className:"login-card",children:[r.jsx("h2",{children:"Welcome Back"}),r.jsx("p",{children:"Login to continue your AgriTechPro journey"}),r.jsxs("div",{className:"login-toggle",children:[r.jsx("button",{className:l?"active":"",onClick:()=>s(!0),children:"Email Login"}),r.jsx("button",{className:l?"":"active",onClick:()=>s(!1),children:"Phone Login"})]}),r.jsxs("form",{className:"login-form",onSubmit:V,children:[r.jsx("input",{type:l?"email":"tel",placeholder:l?"Enter your email":"Enter your phone number",value:f,onChange:w=>p(w.target.value),required:!0}),r.jsxs("div",{className:"password-field",children:[r.jsx("input",{type:c?"text":"password",placeholder:"Enter your password",value:h,onChange:w=>x(w.target.value),required:!0}),r.jsx("span",{className:"toggle-password",onClick:()=>u(!c),children:c?"Hide":"Show"})]}),b&&r.jsx("p",{className:"error-text",children:b}),r.jsx("div",{className:"forgot-password",children:r.jsx("a",{href:"/forgot-password",children:"Forgot Password?"})}),r.jsx("button",{type:"submit",className:"login-btn",disabled:y,children:y?"Logging in...":"Login"})]}),r.jsx("div",{className:"divider",children:r.jsx("span",{children:"OR"})}),r.jsxs("div",{className:"sso-icons",children:[r.jsx("a",{href:"http://localhost:8080/oauth2/authorization/google",className:"sso-btn google",children:r.jsx(uu,{size:22})}),r.jsx("a",{href:"http://localhost:8080/oauth2/authorization/github",className:"sso-btn github",children:r.jsx(du,{size:20})}),r.jsx("a",{href:"#",className:"sso-btn facebook",children:r.jsx(fu,{size:20})}),r.jsx("a",{href:"#",className:"sso-btn linkedin",children:r.jsx(pu,{size:20})})]}),r.jsxs("p",{className:"signup-text",children:["Don’t have an account? ",r.jsx(be,{to:"/register",children:"Sign up"})]})]})})}),r.jsx("style",{children:`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #e8f5e9, #f1f8e9);
          padding: 1rem;
           margin-top: -120px; /* Adjust for fixed navbar height */
        }
        .login-card {
          background: #fff;
          padding: 2.5rem 2rem;
          border-radius: 15px;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 420px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .login-card:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(0,0,0,0.15); }
        h2 { color: #2a7a0e; margin-bottom: .5rem; }
        p { color: #555; font-size: .95rem; margin-bottom: 1.5rem; }

        .login-toggle {
          display: flex;
          justify-content: center;
          margin-bottom: 1.2rem;
          background: #f3f4f6;
          border-radius: 10px;
          overflow: hidden;
        }
        .login-toggle button {
          flex: 1; padding: .7rem; border: none; background: transparent;
          font-weight: 500; color: #555; cursor: pointer; transition: .3s;
        }
        .login-toggle button.active { background: #2a7a0e; color: #fff; }

        .login-form { display: flex; flex-direction: column; gap: 1rem; }
        .login-form input {
          width: 100%; padding: .9rem; border: 1px solid #ccc; border-radius: 8px;
          font-size: 1rem; outline: none; transition: .3s;
        }
        .login-form input:focus { border-color: #2a7a0e; box-shadow: 0 0 5px rgba(42,122,14,.2); }

        .password-field { position: relative; }
        .toggle-password {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          color: #2a7a0e; font-size: .9rem; cursor: pointer; font-weight: 600;
        }

        .forgot-password { text-align: right; }
        .forgot-password a { color: #2a7a0e; font-size: .9rem; text-decoration: none; }

        .login-btn {
          background: #2a7a0e; color: #fff; padding: .9rem; border: none;
          border-radius: 8px; cursor: pointer; font-weight: 600;
        }

        .divider { margin: 1.5rem 0; color: #999; font-weight: 500; font-size: .9rem; }

        .sso-icons { display: flex; justify-content: center; gap: 1rem; margin-bottom: 1rem; }
        .sso-btn {
          width: 45px; height: 45px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #fff; font-size: 1.2rem;
          transition: all .3s ease; box-shadow: 0 3px 10px rgba(0,0,0,.15);
        }

        .sso-btn.google { background: #fff; border: 1px solid #ddd; color: #000; }
        .sso-btn.github { background: #333; }
        .sso-btn.facebook { background: #1877f2; }
        .sso-btn.linkedin { background: #0077b5; }

        .signup-text a { color: #2a7a0e; text-decoration: none; font-weight: 600; }

        @media (max-width: 600px) {
          .login-card { padding: 2rem 1.5rem; }
          h2 { font-size: 1.3rem; }
        }
      `})]})},Ty=()=>{const[l,s]=E.useState({userName:"",email:"",mobile:"",password:"",address:"",role:"USER"}),[c,u]=E.useState(!1),[f,p]=E.useState(""),h=ya(),x=m=>{s({...l,[m.target.name]:m.target.value})},b=async m=>{m.preventDefault(),p(""),u(!0);try{const y=await Cy(l);alert(y.message||"User registered successfully!"),h("/login")}catch(y){p(y.message||"Registration failed! Try again.")}finally{u(!1)}};return r.jsxs("div",{className:"register-container",children:[r.jsxs("div",{className:"register-card",children:[r.jsx("h2",{children:"Create Account 🌿"}),r.jsx("p",{children:"Join AgriTechPro and grow your future"}),r.jsxs("form",{className:"register-form",onSubmit:b,children:[r.jsx("input",{type:"text",name:"userName",placeholder:"Full Name",value:l.userName,onChange:x,required:!0}),r.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:l.email,onChange:x,required:!0}),r.jsx("input",{type:"tel",name:"mobile",placeholder:"Mobile Number",value:l.mobile,onChange:x,required:!0}),r.jsx("input",{type:"password",name:"password",placeholder:"Password",value:l.password,onChange:x,required:!0}),r.jsx("textarea",{name:"address",placeholder:"Full Address",rows:"3",value:l.address,onChange:x,required:!0}),r.jsxs("select",{name:"role",value:l.role,onChange:x,required:!0,children:[r.jsx("option",{value:"USER",children:"USER"}),r.jsx("option",{value:"ADMIN",children:"ADMIN"}),r.jsx("option",{value:"VENDOR",children:"VENDOR"})]}),f&&r.jsx("p",{style:{color:"red"},children:f}),r.jsx("button",{type:"submit",className:"register-btn",disabled:c,children:c?"Registering...":"Register"})]}),r.jsxs("p",{className:"signup-text",children:["Already have an account? ",r.jsx(be,{to:"/login",children:"Login"})]})]}),r.jsx("style",{children:`
        .register-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #e8f5e9, #f1f8e9);
          padding: 1rem;
        }

        .register-card {
          background: #fff;
          padding: 2.5rem 2rem;
          border-radius: 15px;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 450px;
          text-align: center;
        }

        h2 {
          color: #2a7a0e;
          margin-bottom: 0.5rem;
        }

        p {
          color: #555;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .register-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
        }

        .register-form input,
        .register-form textarea,
        .register-form select {
          width: 100%;
          padding: 0.9rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          outline: none;
          transition: 0.3s;
        }

        .register-form input:focus,
        .register-form textarea:focus,
        .register-form select:focus {
          border-color: #2a7a0e;
          box-shadow: 0 0 5px rgba(42, 122, 14, 0.2);
        }

        .register-form textarea {
          resize: none;
        }

        .register-btn {
          background: #2a7a0e;
          color: #fff;
          padding: 0.9rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s;
          width: 100%;
        }

        .register-btn:hover {
          background: #256d0c;
          transform: translateY(-2px);
        }

        .signup-text {
          margin-top: 1.5rem;
          color: #555;
        }

        .signup-text a {
          color: #2a7a0e;
          text-decoration: none;
          font-weight: 600;
        }

        .signup-text a:hover {
          text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .register-card {
            padding: 2rem 1.5rem;
          }
          h2 {
            font-size: 1.5rem;
          }
          .register-btn {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .register-card {
            padding: 1.5rem 1.2rem;
          }
          h2 {
            font-size: 1.3rem;
          }
          .register-btn {
            font-size: 0.95rem;
          }
        }
      `})]})},By="/AgriTechUl/assets/b1-x3izpeS2.jpg",Ry="/AgriTechUl/assets/b2-D2CNAekI.jpeg",My="/AgriTechUl/assets/b3-DNW8ECe5.jpg",Gc=[{id:1,image:By,title:"Quality Seeds for High Yield",subtitle:"Scientifically tested seeds to boost productivity.",backgroundColor:"#e6f7e6"},{id:2,image:Ry,title:"Organic Fertilizers",subtitle:"Keep your soil healthy. Grow naturally.",backgroundColor:"#fff4e6"},{id:3,image:My,title:"Tractor & Equipments",subtitle:"Modern tools for smart farming.",backgroundColor:"#e6f3ff"}];function Dy(){const[l,s]=E.useState(0);return E.useEffect(()=>{const c=setInterval(()=>{s(u=>(u+1)%Gc.length)},3500);return()=>clearInterval(c)},[]),r.jsxs("div",{className:"hero-slider",children:[Gc.map((c,u)=>r.jsxs("div",{className:`hero-slide ${l===u?"active":""}`,style:{backgroundColor:c.backgroundColor},children:[r.jsxs("div",{className:"hero-content",children:[r.jsx("h2",{children:c.title}),r.jsx("p",{children:c.subtitle}),r.jsxs("div",{className:"hero-buttons",children:[r.jsx("button",{className:"buy-btn",children:"Buy Now"}),r.jsx("button",{className:"info-btn",children:"More Info"})]})]}),r.jsx("div",{className:"hero-img-box",children:r.jsx("img",{src:c.image,alt:"banner"})})]},c.id)),r.jsx("div",{className:"dots",children:Gc.map((c,u)=>r.jsx("span",{className:`dot ${l===u?"active":""}`,onClick:()=>s(u)},u))}),r.jsx("style",{children:`
        .hero-slider {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 60px;
          opacity: 0;
          transition: opacity 0.7s ease-in-out;
        }

        .hero-slide.active {
          opacity: 1;
        }

        .hero-content {
          max-width: 45%;
        }

        .hero-content h2 {
          font-size: 38px;
          font-weight: 700;
          color: #1b5e20;
          margin-bottom: 12px;
        }

        .hero-content p {
          font-size: 18px;
          margin-bottom: 22px;
          color: #333;
        }

        .hero-buttons {
          display: flex;
          gap: 14px;
        }

        .buy-btn {
          background: #2e7d32;
          border: none;
          padding: 12px 28px;
          border-radius: 6px;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }

        .info-btn {
          background: #fff;
          border: 2px solid #2e7d32;
          padding: 12px 28px;
          border-radius: 6px;
          color: #2e7d32;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }

        .hero-img-box {
          width: 42%;
          height: 85%;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .dots {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
        }

        .dot {
          width: 12px;
          height: 12px;
          background: #ccc;
          border-radius: 50%;
          cursor: pointer;
          transition: 0.3s;
        }

        .dot.active {
          background: #2e7d32;
        }

        /* ✅ RESPONSIVE */
        @media (max-width: 768px) {
          .hero-slide {
            flex-direction: column;
            text-align: center;
            padding: 20px;
            height: auto;
            gap: 18px;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-content h2 {
            font-size: 28px;
          }

          .hero-content p {
            font-size: 15px;
          }

          .hero-img-box {
            width: 90%;
            height: 240px;
            border-radius: 18px;
          }

          .hero-buttons {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-content h2 {
            font-size: 24px;
          }
          .buy-btn, .info-btn {
            padding: 10px 20px;
            font-size: 14px;
          }
        }
      `})]})}const Uy=[{id:1,name:"Offers",img:"https://media.bighaat.com/wsfbanners/ec9db2d0-d70c-41ae-abf0-83a286c1de05.webp?w=1080&q=80",to:"/offers"},{id:2,name:"Insecticides",img:"https://media.bighaat.com/wsfbanners/f74bb722-23ff-4cfa-8a4f-09a817617c5f.webp?w=1080&q=80",to:"/category/insecticides"},{id:3,name:"Nutrients",img:"https://media.bighaat.com/wsfbanners/45e90225-8767-44f7-a3de-c1f5d186ae16.webp?w=1080&q=80",to:"/category/nutrients"},{id:4,name:"Fungicides",img:"https://media.bighaat.com/wsfbanners/97c1397e-0e1a-4c66-8d63-229a983de12b.webp?w=1080&q=80",to:"/category/fungicides"},{id:5,name:"Vegetable & Fruit Seeds",img:"https://media.bighaat.com/wsfbanners/87f7b455-ab96-4433-9e8c-24fac60ccff3.webp?w=1080&q=80",to:"/category/veg-fruit-seeds"},{id:6,name:"Herbicides",img:"https://media.bighaat.com/wsfbanners/f294b1e7-1cd2-4895-8b6f-d50fe172ddd1.webp?w=1080&q=80",to:"/category/herbicides"},{id:7,name:"Growth Promoters",img:"https://media.bighaat.com/wsfbanners/153b1941-7cab-41b0-ba1b-f1020be1f4b9.webp?w=1080&q=80",to:"/category/growth-promoters"},{id:8,name:"Farm Machinery",img:"https://media.bighaat.com/wsfbanners/65967dbe-5b82-4c4a-a24f-5d72cf21eaf6.webp?w=1080&q=80",to:"/category/farm-machinery"},{id:9,name:"Flower Seeds",img:"https://media.bighaat.com/wsfbanners/74efbaad-48dd-432c-8979-78fd0a970d39.webp?w=1080&q=80",to:"/category/flower-seeds"},{id:10,name:"Organic Farming",img:"https://media.bighaat.com/wsfbanners/b5b78d8a-27fe-40a5-8c05-5684ed78611c.webp?w=1080&q=80",to:"/category/organic"},{id:11,name:"Animal Husbandry",img:"https://media.bighaat.com/wsfbanners/6f4d9010-e0c9-4653-b27e-5a3933fbefa5.webp?w=1080&q=80",to:"/category/animal-husbandry"},{id:12,name:"New Arrivals",img:"https://media.bighaat.com/wsfbanners/5270cb61-95a2-41f8-9d8f-d88ae16bef1e.webp?w=1080&q=80",to:"/new-arrivals"}];function Hy(){return r.jsxs("section",{className:"cat-wrap",children:[r.jsx("h2",{className:"cat-title",children:"Categories"}),r.jsx("div",{className:"cat-grid",children:Uy.map((l,s)=>r.jsxs(be,{to:l.to,className:"cat-card",children:[r.jsx("div",{className:"cat-thumb",style:{background:Fh[s%Fh.length]},children:r.jsx("img",{src:l.img,alt:l.name,loading:"lazy"})}),r.jsx("div",{className:"cat-name",children:l.name})]},l.id))}),r.jsx("style",{children:`
        .cat-wrap {
          max-width: 1200px;
          margin: 35px auto 40px;
          padding: 0 16px;
        }

        .cat-title {
          text-align: center;
          font-size: 34px;
          font-weight: 700;
          margin-bottom: 32px;
          color: #1b3a1a;
          letter-spacing: -0.5px;
        }

        /* GRID */
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 32px;
          place-items: center;
        }

        /* CARD */
        .cat-card {
          text-decoration: none;
          color: #1a1a1a;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform .3s ease, filter .3s ease;
        }

        /* CIRCLE IMAGE */
        .cat-thumb {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          box-shadow: 0 8px 28px rgba(0,0,0,0.12);
          transition: transform .35s ease, box-shadow .35s ease;
        }

        .cat-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .4s ease;
        }

        /* TITLE */
        .cat-name {
          margin-top: 14px;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
        }

        /* PREMIUM HOVER EFFECT */
        @media (hover:hover) {
          .cat-card:hover .cat-thumb {
            transform: translateY(-6px) scale(1.08);
            box-shadow: 0 14px 38px rgba(0,0,0,0.18);
          }
          .cat-card:hover img {
            transform: scale(1.15);
          }
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .cat-thumb { width: 120px; height: 120px; }
        }

        @media (max-width: 520px) {
          .cat-grid { gap: 20px; }
          .cat-thumb { width: 95px; height: 95px; }
          .cat-name { font-size: 13px; }
        }

        @media (max-width: 380px) {
          .cat-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `})]})}const Fh=["linear-gradient(145deg, #d9f6ff, #fffdf3)","linear-gradient(145deg, #ffe5ec, #fffdfa)","linear-gradient(145deg, #e8ffe8, #fffef2)","linear-gradient(145deg, #f1e8ff, #fffdf6)","linear-gradient(145deg, #ffe9d9, #fffdf9)","linear-gradient(145deg, #dff5ff, #fffef4)"],Nl=[{id:1,name:"Kaveri Hybrid Tomato Seeds",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",brand:"Kaveri Seeds",price:199,mrp:250,rating:4.6},{id:2,name:"F1 Hybrid Chilli Seeds",image:"https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&q=80",brand:"East West Seeds",price:149,mrp:200,rating:4.3},{id:3,name:"Hybrid Brinjal Seeds",image:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",brand:"Nunhems",price:135,mrp:180,rating:4.1},{id:4,name:"Cucumber Hybrid Seeds",image:"https://th.bing.com/th/id/OIP.Y-g_X54Kg34x7GkIgTGDxgHaHY?w=179&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",brand:"Mahyco",price:160,mrp:220,rating:4.4},{id:5,name:"Okra / Bhindi Hybrid Seeds",image:"data:image/webp;base64,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",brand:"Syngenta",price:120,mrp:180,rating:4.2},{id:6,name:"Tomato Hybrid Seeds",image:"data:image/jpeg;base64,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",brand:"Kaveri Seeds",price:180,mrp:240,rating:4.5},{id:7,name:"Hot Green Chilli Seeds",image:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",brand:"East West Seeds",price:145,mrp:195,rating:4.4},{id:8,name:"Round Brinjal Hybrid Seeds",image:"https://th.bing.com/th/id/OIP.Y-g_X54Kg34x7GkIgTGDxgHaHY?w=179&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",brand:"Nunhems",price:130,mrp:175,rating:4},{id:9,name:"Cucumber Long Hybrid Seeds",image:"https://th.bing.com/th/id/OIP.Y-g_X54Kg34x7GkIgTGDxgHaHY?w=179&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",brand:"Mahyco",price:165,mrp:230,rating:4.3},{id:10,name:"High Yield Okra Seeds",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",brand:"Syngenta",price:125,mrp:185,rating:4.2},{id:11,name:"Fresh Cucumber Hybrid Seeds",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",brand:"Mahyco",price:158,mrp:215,rating:4.4},{id:12,name:"Premium Okra Seeds Pack",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",brand:"Syngenta",price:118,mrp:170,rating:4.1}],km=({item:l})=>r.jsxs(be,{to:`/seeds/${l.id}`,className:"seed-card",children:[r.jsx("div",{className:"seed-img-box",children:r.jsx("img",{src:l.image,alt:l.name})}),r.jsx("h3",{className:"seed-name",children:l.name}),r.jsx("p",{className:"seed-brand",children:l.brand}),r.jsxs("div",{className:"seed-price-row",children:[r.jsxs("span",{className:"seed-price",children:["₹",l.price]}),r.jsxs("span",{className:"seed-mrp",children:["₹",l.mrp]})]}),r.jsx("style",{children:`
        .seed-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          padding: 14px;
          text-align: center;
          transition: transform .25s ease;
          text-decoration: none;
          color: #222;
          display: block;
          cursor: pointer;
        }

        .seed-card:hover {
          transform: translateY(-4px);
        }

        .seed-img-box {
          width: 100%;
          height: 160px;
          background: #fafafa;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .seed-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .seed-name {
          font-size: 15px;
          font-weight: 600;
          margin: 12px 0 6px;
          color: #222;
          line-height: 1.3;
        }

        .seed-brand {
          font-size: 13px;
          color: #777;
          margin-bottom: 8px;
        }

        .seed-price-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .seed-price {
          font-size: 16px;
          font-weight: 700;
          color: #2a7a0e;
        }

        .seed-mrp {
          font-size: 13px;
          color: #888;
          text-decoration: line-through;
        }

        @media(max-width: 600px) {
          .seed-img-box {
            height: 140px;
          }
        }
      `})]}),Ly=()=>{const[l,s]=E.useState(""),[c,u]=E.useState("All"),[f,p]=E.useState("default"),[h,x]=E.useState(1),b=12,m=["All",...new Set(Nl.map(w=>w.brand))];let y=Nl.filter(w=>w.name.toLowerCase().includes(l.toLowerCase()));c!=="All"&&(y=y.filter(w=>w.brand===c)),f==="low"&&y.sort((w,R)=>w.price-R.price),f==="high"&&y.sort((w,R)=>R.price-w.price),f==="rating"&&y.sort((w,R)=>R.rating-w.rating);const j=Math.ceil(y.length/b),L=(h-1)*b,V=y.slice(L,L+b);return r.jsxs("div",{className:"seed-page",children:[r.jsx("h2",{className:"seed-title",children:"Vegetable Seeds"}),r.jsxs("div",{className:"seed-filters",children:[r.jsx("input",{type:"text",placeholder:"Search Seeds...",value:l,onChange:w=>s(w.target.value)}),r.jsx("select",{value:c,onChange:w=>u(w.target.value),children:m.map((w,R)=>r.jsx("option",{value:w,children:w},R))}),r.jsxs("select",{value:f,onChange:w=>p(w.target.value),children:[r.jsx("option",{value:"default",children:"Sort By"}),r.jsx("option",{value:"low",children:"Price: Low to High"}),r.jsx("option",{value:"high",children:"Price: High to Low"}),r.jsx("option",{value:"rating",children:"Rating"})]})]}),r.jsx("div",{className:"seed-grid",children:V.map(w=>r.jsx(km,{item:w},w.id))}),r.jsxs("div",{className:"seed-pagination",children:[r.jsx("button",{disabled:h===1,onClick:()=>x(h-1),children:"⟵ Prev"}),r.jsxs("span",{children:["Page ",h," of ",j]}),r.jsx("button",{disabled:h===j,onClick:()=>x(h+1),children:"Next ⟶"})]}),r.jsx("style",{children:`
        .seed-page { max-width:1300px;margin:auto;padding:40px 20px; }

        .seed-title { text-align:center;margin-bottom:25px;font-size:28px;font-weight:700;color:#2a7a0e; }

        .seed-filters {
          display:flex;gap:12px;flex-wrap:wrap;justify-content:center;
          margin-bottom:25px;
        }
        .seed-filters input,.seed-filters select {
          padding:10px 14px;border:1px solid #ccc;border-radius:6px;font-size:15px;outline:none;
        }
        .seed-filters input:focus,.seed-filters select:focus { border-color:#2a7a0e; }

        .seed-grid {
          display:grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap:20px;
        }

        .seed-pagination {
          margin-top:30px;display:flex;justify-content:center;gap:15px;align-items:center;
        }
        .seed-pagination button {
          background:#2a7a0e;color:#fff;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:600;
        }
        .seed-pagination button:disabled { background:#ccc;cursor:not-allowed; }
      `})]})},qy=()=>{const l=Nl.slice(0,6);return r.jsxs("div",{className:"seed-preview-wrapper",children:[r.jsxs("div",{className:"seed-header-row",children:[r.jsx("h2",{className:"seed-preview-title",children:"Vegetable Seeds"}),r.jsx(be,{to:"/category/vegetable-seeds",className:"seed-more-btn",children:"View More →"})]}),r.jsx("div",{className:"seed-scroll-row",children:l.map(s=>r.jsx("div",{className:"scroll-item",children:r.jsx(km,{item:s})},s.id))}),r.jsx("style",{children:`
        .seed-preview-wrapper {
          max-width: 1300px;
          margin: auto;
          padding: 0 20px; /* Removed top padding */
        }

        .seed-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px; /* Reduced space */
          margin-top:30px; /* Added top margin for spacing */
        }

        .seed-preview-title {
          font-size: 24px;
          font-weight: 700;
          color: #2a7a0e;
          margin: 0; /* Remove default margin */
        }

        .seed-more-btn {
          background: #2a7a0e;
          color: white;
          padding: 6px 14px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
        }

        .seed-more-btn:hover { opacity: 0.85; }

        /* Horizontal Scroll */
        .seed-scroll-row {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          padding-bottom: 8px;
          scroll-behavior: smooth;
          scrollbar-width: none; /* Hide scrollbar in Firefox */
          margin-top: 0;
        }

        .seed-scroll-row::-webkit-scrollbar { display: none; } /* Hide scrollbar in Chrome */

        .scroll-item {
          min-width: 180px;
        }

        @media(max-width: 600px) {
          .scroll-item { min-width: 150px; }
        }
      `})]})},Bi=[{id:1,name:"Urea Nitrogen Fertilizer",image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQAeksVMkoWSBA8t3J0ndEEPLCqeYGZf1vEfwdpgmNEn2evLpabELU2w_v5YUb-DyYv5tmWc5S4P1Zgs13N_kuO1ezmbY6STFefd2B6RiGi&usqp=CAc",brand:"IFFCO",price:220,mrp:260,rating:4.4},{id:2,name:"DAP 18-46-0 Fertilizer",image:"data:image/jpeg;base64,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",brand:"Coromandel",price:1350,mrp:1500,rating:4.6},{id:3,name:"NPK 19-19-19 Water Soluble",image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_Ce0IZ6xOrvzQijF4oiB8xcLr0_a_6NfSyqyXpA8_9SBdsrrcNiMFdiisY9hbpTX02Wy8Eo9iHBq8cQ8lOhqBRS2e7R554chA-XqzdLDC-ntioc2hE7ndYtTWVn8vScx4nORk8Q&usqp=CAc",brand:"Mahadhan",price:780,mrp:900,rating:4.3},{id:4,name:"Potash Muriate of Potash",image:"data:image/jpeg;base64,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",brand:"Zuari",price:550,mrp:620,rating:4.2},{id:5,name:"Zinc Sulphate 21%",image:"https://pratikindia.com/wp-content/uploads/2023/12/Zinc-Sulphate-21.png",brand:"Nova",price:260,mrp:320,rating:4.1},{id:6,name:"Zinc Sulphate 21%",image:"https://pratikindia.com/wp-content/uploads/2023/12/Zinc-Sulphate-21.png",brand:"Nova",price:250,mrp:320,rating:4.1},{id:7,name:"Zinc Sulphate 21%",image:"https://pratikindia.com/wp-content/uploads/2023/12/Zinc-Sulphate-21.png",brand:"Nova",price:230,mrp:320,rating:4.1}],Qm=({item:l})=>r.jsxs(be,{to:`/fertilizers/${l.id}`,className:"fert-card",children:[r.jsx("div",{className:"fert-img-box",children:r.jsx("img",{src:l.image,alt:l.name})}),r.jsx("h3",{className:"fert-name",children:l.name}),r.jsx("p",{className:"fert-brand",children:l.brand}),r.jsxs("div",{className:"fert-price-row",children:[r.jsxs("span",{className:"fert-price",children:["₹",l.price]}),r.jsxs("span",{className:"fert-mrp",children:["₹",l.mrp]})]}),r.jsx("style",{children:`
        .fert-card {
          background:#fff;border-radius:12px;padding:14px;
          text-align:center;box-shadow:0 4px 12px rgba(0,0,0,0.08);
          transition:.25s;display:block;text-decoration:none;color:#222;
        }
        .fert-card:hover { transform:translateY(-4px); }

        .fert-img-box { height:160px;border-radius:10px;overflow:hidden;background:#fafafa; }
        .fert-img-box img { width:100%;height:100%;object-fit:cover; }

        .fert-name { margin:10px 0 4px;font-size:15px;font-weight:600;color:#222; }
        .fert-brand { font-size:13px;color:#777;margin-bottom:8px; }

        .fert-price-row { display:flex;justify-content:center;gap:8px; }
        .fert-price { font-weight:700;color:#2a7a0e; }
        .fert-mrp { text-decoration:line-through;font-size:13px;color:#888; }
      `})]}),Vy=()=>{const l=Bi.slice(0,12);return r.jsxs("div",{className:"fert-preview-wrapper",children:[r.jsxs("div",{className:"fert-header-row",children:[r.jsx("h2",{className:"fert-preview-title",children:"Fertilizers"}),r.jsx(be,{to:"/category/fertilizers",className:"fert-more-btn",children:"View More →"})]}),r.jsx("div",{className:"fert-scroll-row",children:l.map(s=>r.jsx("div",{className:"scroll-item",children:r.jsx(Qm,{item:s})},s.id))}),r.jsx("style",{children:`
        .fert-preview-wrapper {
          max-width: 1300px;
          margin: auto;
          padding: 0 20px; /* Removed top padding */
        }

        .fert-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px; /* Reduced extra space */
          margin-top:30px; /* Added top margin for spacing */
        }

        .fert-preview-title {
          font-size: 24px;
          font-weight: 700;
          color: #2a7a0e;
          margin: 0; /* Removed default margin */
        }

        .fert-more-btn {
          background: #2a7a0e;
          color: white;
          padding: 6px 14px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
        }
        .fert-more-btn:hover { opacity: 0.85; }

        /* Horizontal Scroll */
        .fert-scroll-row {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          padding-bottom: 8px;
          scroll-behavior: smooth;
          scrollbar-width: none; /* Hide scrollbar for Firefox */
          margin-top: 0;
        }
        .fert-scroll-row::-webkit-scrollbar {
          display: none; /* Hide scroll in Chrome/Safari/Edge */
        }

        .scroll-item {
          min-width: 180px;
        }

        @media(max-width: 600px) {
          .scroll-item { min-width: 150px; }
        }
      `})]})},yo=[{id:1,name:"Power Sprayer 18L (Portable)",image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRAKvOsKUweVhPlby71fTxm1lUToHw23WKi6VzD_X80KFFBxTLGtDQBb36g_obFxXgizT8cdIxf-3FdaHLLLn8OB1BeM2o3wYQ-njCv8tL4GxU-P3PSYl_gVEWs-ZcyXjkqqzAr388&usqp=CAc",brand:"Kisan Kraft",price:6500,mrp:7800,rating:4.4},{id:2,name:"Knapsack Manual Sprayer 16L",image:"data:image/webp;base64,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",brand:"Neptune",price:1450,mrp:1800,rating:4.3},{id:3,name:"Mini Power Tiller / Cultivator",image:"data:image/jpeg;base64,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",brand:"AgriPro",price:18500,mrp:21500,rating:4.5},{id:4,name:"Brush Cutter 52cc Heavy Duty",image:"/assets/machinery/brush-cutter.jpg",brand:"Balwaan",price:7200,mrp:8900,rating:4.2},{id:5,name:"Water Pump 5HP Diesel",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTXPjEg7g0BDMdu5jzOY8E6rNA_Ktd-vYaXVXWj-8Jq6z1s9DY9lRVID5Awua6D7O_sVFNoRi-QTJAHMwqNb96fcYzjy8X_eID6i1pzXAjZ2JhMUAD6AT9gZX00jR35CTCodWHVjg&usqp=CAc",brand:"FieldPro",price:14800,mrp:17e3,rating:4.1},{id:6,name:"Mini Tractor 12HP Compact",image:"data:image/jpeg;base64,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",brand:"VST Shakti",price:245e3,mrp:27e4,rating:4.7}],Ym=({item:l})=>r.jsxs(be,{to:`/machinery/${l.id}`,className:"mach-card",children:[r.jsx("div",{className:"mach-img-box",children:r.jsx("img",{src:l.image,alt:l.name})}),r.jsx("h3",{className:"mach-name",children:l.name}),r.jsx("p",{className:"mach-brand",children:l.brand}),r.jsxs("div",{className:"mach-price-row",children:[r.jsxs("span",{className:"mach-price",children:["₹",l.price]}),r.jsxs("span",{className:"mach-mrp",children:["₹",l.mrp]})]}),r.jsx("style",{children:`
        .mach-card { background:#fff;border-radius:12px;padding:14px;
        text-align:center;box-shadow:0 4px 12px rgba(0,0,0,0.1);
        transition:.25s;display:block;text-decoration:none;color:#222; }
        .mach-card:hover { transform:translateY(-4px); }

        .mach-img-box { height:160px;border-radius:10px;overflow:hidden;background:#fafafa; }
        .mach-img-box img { width:100%;height:100%;object-fit:cover; }

        .mach-name { font-size:15px;font-weight:600;margin:10px 0 4px;color:#222; }
        .mach-brand { font-size:13px;color:#777;margin-bottom:8px; }

        .mach-price-row { display:flex;justify-content:center;gap:8px; }
        .mach-price { font-weight:700;color:#2a7a0e; }
        .mach-mrp { text-decoration:line-through;font-size:13px;color:#888; }
      `})]}),ky=()=>{const l=yo.slice(0,12);return r.jsxs("div",{className:"mach-preview-wrapper",children:[r.jsxs("div",{className:"mach-header-row",children:[r.jsx("h2",{className:"mach-preview-title",children:"Farm Machinery"}),r.jsx(be,{to:"/category/farm-machinery",className:"mach-more-btn",children:"View More →"})]}),r.jsx("div",{className:"mach-scroll-row",children:l.map(s=>r.jsx("div",{className:"scroll-item",children:r.jsx(Ym,{item:s})},s.id))}),r.jsx("style",{children:`
        .mach-preview-wrapper {
          max-width:1300px;
          margin:auto;
          padding:0 20px; /* Removed extra top padding */
        }

        .mach-header-row {
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:6px; /* Reduced space */
          margin-top:30px; /* Added top margin for spacing */
        }

        .mach-preview-title {
          font-size:24px;
          font-weight:700;
          color:#2a7a0e;
          margin:0; /* Removed default h2 margin */
        }

        .mach-more-btn {
          background:#2a7a0e;
          color:#fff;
          padding:6px 14px;
          border-radius:6px;
          text-decoration:none;
          font-weight:600;
          transition:.3s;
        }
        .mach-more-btn:hover { opacity:.85; }

        /* Horizontal Scroll */
        .mach-scroll-row {
          display:flex;
          gap:14px;
          overflow-x:auto;
          padding-bottom:8px;
          scroll-behavior:smooth;
          scrollbar-width:none;
          margin-top:0;
        }
        .mach-scroll-row::-webkit-scrollbar {
          display:none; /* Hide scrollbar cross-browser */
        }

        .scroll-item {
          min-width:180px;
        }
      `})]})},Kc=(l,s)=>l.map(c=>({...c,category:s,discountPercent:Math.round((c.mrp-c.price)/c.mrp*100)})),Gm=[...Kc(Nl,"seeds"),...Kc(Bi,"fertilizers"),...Kc(yo,"machinery")],Qy=(l=6)=>Gm.filter(s=>s.discountPercent>=10).sort((s,c)=>c.discountPercent-s.discountPercent).slice(0,l),Yy=()=>Gm.filter(l=>l.discountPercent>=10),Km=({item:l})=>{const s={seeds:`/seeds/${l.id}`,fertilizers:`/fertilizers/${l.id}`,machinery:`/machinery/${l.id}`}[l.category];return r.jsxs(be,{to:s,className:"offer-card",children:[r.jsxs("div",{className:"offer-img-box",children:[r.jsx("img",{src:l.image,alt:l.name}),r.jsxs("span",{className:"offer-badge",children:["-",l.discountPercent,"%"]})]}),r.jsx("h3",{className:"offer-name",children:l.name}),r.jsx("p",{className:"offer-brand",children:l.brand}),r.jsxs("div",{className:"offer-price-box",children:[r.jsxs("span",{className:"offer-price",children:["₹",l.price]}),r.jsxs("span",{className:"offer-mrp",children:["₹",l.mrp]})]}),r.jsx("style",{children:`
        .offer-card {
          background:#fff;border-radius:12px;padding:14px;text-decoration:none;
          color:#111;text-align:center;box-shadow:0 4px 12px rgba(0,0,0,0.08);
          display:block;transition:.3s;
        }
        .offer-card:hover { transform:translateY(-4px); }

        .offer-img-box { position:relative;height:160px;border-radius:10px;overflow:hidden;background:#fafafa; }
        .offer-img-box img { width:100%;height:100%;object-fit:cover; }

        .offer-badge {
          position:absolute;top:8px;left:8px;background:#c62828;color:#fff;font-weight:600;
          padding:4px 8px;border-radius:6px;font-size:13px;
        }
        .offer-name { font-size:15px;font-weight:600;margin:10px 0 4px; }
        .offer-brand { font-size:13px;color:#777;margin-bottom:6px; }

        .offer-price-box { display:flex;gap:8px;justify-content:center; }
        .offer-price { color:#2a7a0e;font-weight:700; }
        .offer-mrp { text-decoration:line-through;color:#888;font-size:13px; }
      `})]})},Gy=()=>{const l=Qy(12);return r.jsxs("div",{className:"offers-preview-wrap",children:[r.jsxs("div",{className:"offers-head-row",children:[r.jsx("h2",{className:"offers-title",children:"Today's Offers"}),r.jsx(be,{to:"/offers-today",className:"offers-more-btn",children:"View More →"})]}),r.jsx("div",{className:"offers-scroll",children:l.map(s=>r.jsx("div",{className:"scroll-item",children:r.jsx(Km,{item:s})},s.id))}),r.jsx("style",{children:`
        .offers-preview-wrap { 
          max-width:1300px;
          margin:auto;
          padding:0 20px;
        }

        .offers-head-row { 
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:6px; /* Reduced from 18px */
          margin-top:30px; /* Added top margin for spacing */
        }

        .offers-title { 
          font-size:24px;
          font-weight:700;
          color:#2a7a0e;
          margin:0; /* Removed default h2 margin */
       
        }

        .offers-more-btn {
          background:#2a7a0e;
          color:#fff;
          padding:6px 14px;
          border-radius:6px;
          text-decoration:none;
          font-weight:600;
          transition:.3s;
        }
        .offers-more-btn:hover { opacity:.8; }

        /* Horizontal Scroll */
        .offers-scroll {
          display:flex;
          gap:14px;
          overflow-x:auto;
          padding-bottom:8px;
          scroll-behavior:smooth;
          scrollbar-width:none;
          margin-top:0; /* Remove spacing above product list */
        }
        .offers-scroll::-webkit-scrollbar {
          display:none;
        }

        .scroll-item { min-width:180px; }
      `})]})},Zc=(l,s)=>l.map(c=>({...c,category:s,rating:c.rating||4}));let oo=[...Zc(Nl,"seeds"),...Zc(Bi,"fertilizers"),...Zc(yo,"machinery")];oo=oo.sort((l,s)=>s.rating-l.rating);const Ky=(l=6)=>oo.slice(0,l),Zy=()=>oo,Zm=({item:l})=>{const s={seeds:`/seeds/${l.id}`,fertilizers:`/fertilizers/${l.id}`,machinery:`/machinery/${l.id}`}[l.category];return r.jsxs(be,{to:s,className:"bs-card",children:[r.jsxs("div",{className:"bs-img-box",children:[r.jsx("img",{src:l.image,alt:l.name}),r.jsxs("span",{className:"bs-badge",children:["⭐ ",l.rating]})]}),r.jsx("h3",{className:"bs-name",children:l.name}),r.jsx("p",{className:"bs-brand",children:l.brand}),r.jsxs("div",{className:"bs-price-row",children:[r.jsxs("span",{className:"bs-price",children:["₹",l.price]}),r.jsxs("span",{className:"bs-mrp",children:["₹",l.mrp]})]}),r.jsx("style",{children:`
        .bs-card {
          background:#fff;border-radius:12px;padding:14px;text-decoration:none;
          color:#111;text-align:center;box-shadow:0 4px 12px rgba(0,0,0,0.08);
          display:block;transition:.3s;
        }
        .bs-card:hover { transform:translateY(-4px); }

        .bs-img-box { position:relative;height:160px;border-radius:10px;overflow:hidden;background:#fafafa; }
        .bs-img-box img { width:100%;height:100%;object-fit:cover; }

        .bs-badge {
          position:absolute;top:8px;left:8px;background:#2a7a0e;color:#fff;font-weight:600;
          padding:4px 8px;border-radius:6px;font-size:13px;
        }

        .bs-name { font-size:15px;font-weight:600;margin:10px 0 4px; }
        .bs-brand { font-size:13px;color:#777;margin-bottom:6px; }

        .bs-price-row { display:flex;gap:8px;justify-content:center; }
        .bs-price { color:#2a7a0e;font-weight:700; }
        .bs-mrp { text-decoration:line-through;color:#888;font-size:13px; }
      `})]})},Xy=()=>{const l=Ky(12);return r.jsxs("div",{className:"bs-preview-wrap",children:[r.jsxs("div",{className:"bs-head-row",children:[r.jsx("h2",{className:"bs-title",children:"Best Selling"}),r.jsx(be,{to:"/best-selling",className:"bs-more-btn",children:"View More →"})]}),r.jsx("div",{className:"bs-scroll",children:l.map(s=>r.jsx("div",{className:"scroll-item",children:r.jsx(Zm,{item:s})},s.id))}),r.jsx("style",{children:`
        .bs-preview-wrap { 
          max-width:1300px;
          margin:auto;
          padding:0 20px; /* Removed top padding */
        }

        .bs-head-row { 
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:6px; /* Reduced spacing */
          margin-top:30px; /* Added top margin for spacing */
        }

        .bs-title { 
          font-size:24px;
          font-weight:700;
          color:#2a7a0e;
          margin:0; /* Removed default h2 margin */
        
        }

        .bs-more-btn {
          background:#2a7a0e;
          color:#fff;
          padding:6px 14px;
          border-radius:6px;
          text-decoration:none;
          font-weight:600;
          transition:.3s;
        }
        .bs-more-btn:hover { opacity:.8; }

        /* Scroll container */
        .bs-scroll {
          display:flex;
          gap:14px;
          overflow-x:auto;
          padding-bottom:8px;
          scroll-behavior:smooth;
          scrollbar-width:none;
          margin-top:0; /* Remove extra gap */
        }
        .bs-scroll::-webkit-scrollbar {
          display:none;
        }

        .scroll-item { 
          min-width:180px;
        }
      `})]})},Fy=({item:l})=>r.jsxs(be,{to:l.to,className:"ex-card",children:[r.jsx("img",{src:l.image,alt:"exclusive"}),r.jsx("style",{children:`
        .ex-card {
          display:block;
          border-radius:14px;
          overflow:hidden;
          box-shadow:0 6px 18px rgba(0,0,0,0.12);
          transition:.3s;
          background:#fff;
        }
        .ex-card:hover { transform:translateY(-6px); }
        .ex-card img {
          width:100%;
          height:260px;
          object-fit:cover;
        }

        @media (max-width: 1024px) {
          .ex-card img { height:220px; }
        }
        @media (max-width: 768px) {
          .ex-card img { height:200px; }
        }
        @media (max-width: 480px) {
          .ex-card img { height:170px; }
        }
      `})]}),Jy=[{id:1,image:"https://media.bighaat.com//wsfbanners/0307c441-0f8b-4c9a-b195-b13a7883f58d.webp?w=750&q=80",to:"/products/tiger-power"},{id:2,image:"https://media.bighaat.com//wsfbanners/9b54f6e3-f14f-41f1-842e-0235ea29ffa9.webp?w=750&q=80",to:"/products/amino-maxx"},{id:3,image:"https://media.bighaat.com//wsfbanners/270395f8-cf32-4231-a8f7-b42be512bd18.webp?w=750&q=80",to:"/products/insecticides-offers"},{id:4,image:"https://media.bighaat.com//wsfbanners/81e11abf-dd4a-40cc-bb27-6104ec4a5350.webp?w=750&q=80",to:"/products/farm-implements"}],Py=()=>r.jsxs("div",{className:"exclusive-wrapper",children:[r.jsx("h2",{className:"exclusive-title",children:"Exclusive"}),r.jsx("div",{className:"exclusive-grid",children:Jy.map(l=>r.jsx(Fy,{item:l},l.id))}),r.jsx("style",{children:`
        .exclusive-wrapper {
          max-width:1300px;
          margin:auto;
          padding:10px 20px;
        }
        .exclusive-title {
          text-align:center;
          font-size:28px;
          font-weight:700;
          margin-bottom:25px;
          color:#2a7a0e;
        }

        .exclusive-grid {
          display:grid;
          grid-template-columns:repeat(4, 1fr);
          gap:22px;
        }

        @media (max-width:1024px) {
          .exclusive-grid {
            grid-template-columns:repeat(3, 1fr);
          }
        }
        @media (max-width:768px) {
          .exclusive-grid {
            grid-template-columns:repeat(2, 1fr);
          }
        }
        @media (max-width:480px) {
          .exclusive-grid {
            grid-template-columns:repeat(1, 1fr);
          }
        }
      `})]}),Wy=()=>r.jsxs("div",{className:"trust-banner",children:[r.jsxs("div",{className:"trust-item",children:[r.jsx("span",{className:"trust-icon",children:"🏷️"}),r.jsxs("p",{className:"trust-text",children:["100% Branded ",r.jsx("br",{})," Products"]})]}),r.jsxs("div",{className:"trust-item",children:[r.jsx("svg",{className:"trust-icon",width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"#2a7a0e",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"})}),r.jsxs("p",{className:"trust-text",children:["100% Original ",r.jsx("br",{})," Products"]})]}),r.jsxs("div",{className:"trust-item",children:[r.jsx("span",{className:"trust-icon",children:"🚚"}),r.jsx("p",{className:"trust-text",children:"Free Delivery"})]}),r.jsx("style",{children:`
        .trust-banner {
          background: #eef8dd;
          padding: 28px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1300px;
          margin: 0 auto;
          border-radius: 8px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .trust-icon {
          font-size: 38px;
          color: #2a7a0e;
        }

        .trust-text {
          font-size: 20px;
          font-weight: 600;
          color: #1a4d0a;
          line-height: 1.3;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .trust-banner {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .trust-text {
            font-size: 18px;
          }
          .trust-icon {
            font-size: 34px;
          }
        }

        @media (max-width: 480px) {
          .trust-text {
            font-size: 16px;
          }
          .trust-icon {
            font-size: 30px;
          }
        }
      `})]}),Iy=()=>r.jsxs("div",{className:"trust2-wrapper",children:[r.jsxs("div",{className:"trust2-item",children:[r.jsxs("svg",{className:"trust2-icon",viewBox:"0 0 24 24",fill:"none",stroke:"#2a7a0e",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"}),r.jsx("circle",{cx:"12",cy:"12",r:"2.2"})]}),r.jsxs("p",{className:"trust2-text",children:["Safe & Secure ",r.jsx("br",{})," Payment"]})]}),r.jsxs("div",{className:"trust2-item",children:[r.jsxs("svg",{className:"trust2-icon",viewBox:"0 0 24 24",fill:"none",stroke:"#2a7a0e",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"8",r:"4"}),r.jsx("path",{d:"M6 21c1.5-3 4.5-5 6-5s4.5 2 6 5"}),r.jsx("path",{d:"M16 3.5l2.5 2"})]}),r.jsx("p",{className:"trust2-text",children:"Expert Advice"})]}),r.jsxs("div",{className:"trust2-item",children:[r.jsxs("svg",{className:"trust2-icon",viewBox:"0 0 24 24",fill:"none",stroke:"#2a7a0e",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M8 12h8"}),r.jsx("path",{d:"M12 8v8"}),r.jsx("circle",{cx:"12",cy:"12",r:"9"})]}),r.jsxs("p",{className:"trust2-text",children:["Best Price ",r.jsx("br",{})," Assured"]})]}),r.jsx("style",{children:`
        .trust2-wrapper {
          background: #e9f8e4;
          padding: 28px 16px;
          max-width: 1300px;
          margin: 0 auto;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .trust2-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .trust2-icon {
          width: 48px;
          height: 48px;
        }

        .trust2-text {
          font-size: 20px;
          font-weight: 600;
          color: #1a4d0a;
          line-height: 1.3;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .trust2-wrapper {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .trust2-text {
            font-size: 18px;
          }
          .trust2-icon {
            width: 42px;
            height: 42px;
          }
        }

        @media (max-width: 480px) {
          .trust2-text {
            font-size: 16px;
          }
          .trust2-icon {
            width: 36px;
            height: 36px;
          }
        }
      `})]});var Xc={exports:{}},Jh;function _y(){return Jh||(Jh=1,(()=>{var l={296:(f,p,h)=>{var x=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,y=/^0o[0-7]+$/i,j=parseInt,L=typeof h.g=="object"&&h.g&&h.g.Object===Object&&h.g,V=typeof self=="object"&&self&&self.Object===Object&&self,w=L||V||Function("return this")(),R=Object.prototype.toString,D=Math.max,X=Math.min,I=function(){return w.Date.now()};function ee(le){var pe=typeof le;return!!le&&(pe=="object"||pe=="function")}function me(le){if(typeof le=="number")return le;if((function(re){return typeof re=="symbol"||(function(ue){return!!ue&&typeof ue=="object"})(re)&&R.call(re)=="[object Symbol]"})(le))return NaN;if(ee(le)){var pe=typeof le.valueOf=="function"?le.valueOf():le;le=ee(pe)?pe+"":pe}if(typeof le!="string")return le===0?le:+le;le=le.replace(x,"");var ae=m.test(le);return ae||y.test(le)?j(le.slice(2),ae?2:8):b.test(le)?NaN:+le}f.exports=function(le,pe,ae){var re,ue,De,Me,we,Ye,Te=0,Xe=!1,B=!1,P=!0;if(typeof le!="function")throw new TypeError("Expected a function");function ne(K){var W=re,se=ue;return re=ue=void 0,Te=K,Me=le.apply(se,W)}function xe(K){var W=K-Ye;return Ye===void 0||W>=pe||W<0||B&&K-Te>=De}function fe(){var K=I();if(xe(K))return A(K);we=setTimeout(fe,(function(W){var se=pe-(W-Ye);return B?X(se,De-(W-Te)):se})(K))}function A(K){return we=void 0,P&&re?ne(K):(re=ue=void 0,Me)}function H(){var K=I(),W=xe(K);if(re=arguments,ue=this,Ye=K,W){if(we===void 0)return(function(se){return Te=se,we=setTimeout(fe,pe),Xe?ne(se):Me})(Ye);if(B)return we=setTimeout(fe,pe),ne(Ye)}return we===void 0&&(we=setTimeout(fe,pe)),Me}return pe=me(pe)||0,ee(ae)&&(Xe=!!ae.leading,De=(B="maxWait"in ae)?D(me(ae.maxWait)||0,pe):De,P="trailing"in ae?!!ae.trailing:P),H.cancel=function(){we!==void 0&&clearTimeout(we),Te=0,re=Ye=ue=we=void 0},H.flush=function(){return we===void 0?Me:A(I())},H}},96:(f,p,h)=>{var x="Expected a function",b=NaN,m="[object Symbol]",y=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,V=/^0o[0-7]+$/i,w=parseInt,R=typeof h.g=="object"&&h.g&&h.g.Object===Object&&h.g,D=typeof self=="object"&&self&&self.Object===Object&&self,X=R||D||Function("return this")(),I=Object.prototype.toString,ee=Math.max,me=Math.min,le=function(){return X.Date.now()};function pe(re){var ue=typeof re;return!!re&&(ue=="object"||ue=="function")}function ae(re){if(typeof re=="number")return re;if((function(Me){return typeof Me=="symbol"||(function(we){return!!we&&typeof we=="object"})(Me)&&I.call(Me)==m})(re))return b;if(pe(re)){var ue=typeof re.valueOf=="function"?re.valueOf():re;re=pe(ue)?ue+"":ue}if(typeof re!="string")return re===0?re:+re;re=re.replace(y,"");var De=L.test(re);return De||V.test(re)?w(re.slice(2),De?2:8):j.test(re)?b:+re}f.exports=function(re,ue,De){var Me=!0,we=!0;if(typeof re!="function")throw new TypeError(x);return pe(De)&&(Me="leading"in De?!!De.leading:Me,we="trailing"in De?!!De.trailing:we),(function(Ye,Te,Xe){var B,P,ne,xe,fe,A,H=0,K=!1,W=!1,se=!0;if(typeof Ye!="function")throw new TypeError(x);function he(rt){var Nt=B,vt=P;return B=P=void 0,H=rt,xe=Ye.apply(vt,Nt)}function Be(rt){var Nt=rt-A;return A===void 0||Nt>=Te||Nt<0||W&&rt-H>=ne}function tt(){var rt=le();if(Be(rt))return Fe(rt);fe=setTimeout(tt,(function(Nt){var vt=Te-(Nt-A);return W?me(vt,ne-(Nt-H)):vt})(rt))}function Fe(rt){return fe=void 0,se&&B?he(rt):(B=P=void 0,xe)}function Bt(){var rt=le(),Nt=Be(rt);if(B=arguments,P=this,A=rt,Nt){if(fe===void 0)return(function(vt){return H=vt,fe=setTimeout(tt,Te),K?he(vt):xe})(A);if(W)return fe=setTimeout(tt,Te),he(A)}return fe===void 0&&(fe=setTimeout(tt,Te)),xe}return Te=ae(Te)||0,pe(Xe)&&(K=!!Xe.leading,ne=(W="maxWait"in Xe)?ee(ae(Xe.maxWait)||0,Te):ne,se="trailing"in Xe?!!Xe.trailing:se),Bt.cancel=function(){fe!==void 0&&clearTimeout(fe),H=0,B=A=P=fe=void 0},Bt.flush=function(){return fe===void 0?xe:Fe(le())},Bt})(re,ue,{leading:Me,maxWait:ue,trailing:we})}},703:(f,p,h)=>{var x=h(414);function b(){}function m(){}m.resetWarningCache=b,f.exports=function(){function y(V,w,R,D,X,I){if(I!==x){var ee=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw ee.name="Invariant Violation",ee}}function j(){return y}y.isRequired=y;var L={array:y,bigint:y,bool:y,func:y,number:y,object:y,string:y,symbol:y,any:y,arrayOf:j,element:y,elementType:y,instanceOf:j,node:y,objectOf:j,oneOf:j,oneOfType:j,shape:j,exact:j,checkPropTypes:m,resetWarningCache:b};return L.PropTypes=L,L}},697:(f,p,h)=>{f.exports=h(703)()},414:f=>{f.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},s={};function c(f){var p=s[f];if(p!==void 0)return p.exports;var h=s[f]={exports:{}};return l[f](h,h.exports,c),h.exports}c.n=f=>{var p=f&&f.__esModule?()=>f.default:()=>f;return c.d(p,{a:p}),p},c.d=(f,p)=>{for(var h in p)c.o(p,h)&&!c.o(f,h)&&Object.defineProperty(f,h,{enumerable:!0,get:p[h]})},c.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}})(),c.o=(f,p)=>Object.prototype.hasOwnProperty.call(f,p),c.r=f=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})};var u={};(()=>{c.r(u),c.d(u,{LazyLoadComponent:()=>Nt,LazyLoadImage:()=>Ot,trackWindowScroll:()=>xe});const f=so();var p=c.n(f),h=c(697);function x(){return typeof window<"u"&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function b(Z){return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},b(Z)}function m(Z,O){var F=Object.keys(Z);if(Object.getOwnPropertySymbols){var J=Object.getOwnPropertySymbols(Z);O&&(J=J.filter((function(Ae){return Object.getOwnPropertyDescriptor(Z,Ae).enumerable}))),F.push.apply(F,J)}return F}function y(Z,O,F){return(O=L(O))in Z?Object.defineProperty(Z,O,{value:F,enumerable:!0,configurable:!0,writable:!0}):Z[O]=F,Z}function j(Z,O){for(var F=0;F<O.length;F++){var J=O[F];J.enumerable=J.enumerable||!1,J.configurable=!0,"value"in J&&(J.writable=!0),Object.defineProperty(Z,L(J.key),J)}}function L(Z){var O=(function(F,J){if(b(F)!=="object"||F===null)return F;var Ae=F[Symbol.toPrimitive];if(Ae!==void 0){var Se=Ae.call(F,"string");if(b(Se)!=="object")return Se;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(F)})(Z);return b(O)==="symbol"?O:String(O)}function V(Z,O){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(F,J){return F.__proto__=J,F},V(Z,O)}function w(Z){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(O){return O.__proto__||Object.getPrototypeOf(O)},w(Z)}var R=function(Z){Z.forEach((function(O){O.isIntersecting&&O.target.onVisible()}))},D={},X=(function(Z){(function(q,Y){if(typeof Y!="function"&&Y!==null)throw new TypeError("Super expression must either be null or a function");q.prototype=Object.create(Y&&Y.prototype,{constructor:{value:q,writable:!0,configurable:!0}}),Object.defineProperty(q,"prototype",{writable:!1}),Y&&V(q,Y)})(Le,Z);var O,F,J,Ae,Se=(J=Le,Ae=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var q,Y=w(J);if(Ae){var $=w(this).constructor;q=Reflect.construct(Y,arguments,$)}else q=Y.apply(this,arguments);return(function(te,_){if(_&&(b(_)==="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(function(Ee){if(Ee===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Ee})(te)})(this,q)});function Le(q){var Y;if((function(te,_){if(!(te instanceof _))throw new TypeError("Cannot call a class as a function")})(this,Le),(Y=Se.call(this,q)).supportsObserver=!q.scrollPosition&&q.useIntersectionObserver&&x(),Y.supportsObserver){var $=q.threshold;Y.observer=(function(te){return D[te]=D[te]||new IntersectionObserver(R,{rootMargin:te+"px"}),D[te]})($)}return Y}return O=Le,F=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.scrollPosition,Y=this.placeholder.getBoundingClientRect(),$=this.placeholder.style,te=parseInt($.getPropertyValue("margin-left"),10)||0,_=parseInt($.getPropertyValue("margin-top"),10)||0;return{bottom:q.y+Y.bottom+_,left:q.x+Y.left+te,right:q.x+Y.right+te,top:q.y+Y.top+_}}},{key:"isPlaceholderInViewport",value:function(){if(typeof window>"u"||!this.placeholder)return!1;var q=this.props,Y=q.scrollPosition,$=q.threshold,te=this.getPlaceholderBoundingBox(Y),_=Y.y+window.innerHeight,Ee=Y.x,We=Y.x+window.innerWidth,Ie=Y.y;return Ie-$<=te.bottom&&_+$>=te.top&&Ee-$<=te.right&&We+$>=te.left}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var q=this,Y=this.props,$=Y.className,te=Y.height,_=Y.placeholder,Ee=Y.style,We=Y.width;if(_&&typeof _.type!="function")return p().cloneElement(_,{ref:function(Ve){return q.placeholder=Ve}});var Ie=(function(Ve){for(var ot=1;ot<arguments.length;ot++){var _e=arguments[ot]!=null?arguments[ot]:{};ot%2?m(Object(_e),!0).forEach((function(at){y(Ve,at,_e[at])})):Object.getOwnPropertyDescriptors?Object.defineProperties(Ve,Object.getOwnPropertyDescriptors(_e)):m(Object(_e)).forEach((function(at){Object.defineProperty(Ve,at,Object.getOwnPropertyDescriptor(_e,at))}))}return Ve})({display:"inline-block"},Ee);return We!==void 0&&(Ie.width=We),te!==void 0&&(Ie.height=te),p().createElement("span",{className:$,ref:function(Ve){return q.placeholder=Ve},style:Ie},_)}}],F&&j(O.prototype,F),Object.defineProperty(O,"prototype",{writable:!1}),Le})(p().Component);X.propTypes={onVisible:h.PropTypes.func.isRequired,className:h.PropTypes.string,height:h.PropTypes.oneOfType([h.PropTypes.number,h.PropTypes.string]),placeholder:h.PropTypes.element,threshold:h.PropTypes.number,useIntersectionObserver:h.PropTypes.bool,scrollPosition:h.PropTypes.shape({x:h.PropTypes.number.isRequired,y:h.PropTypes.number.isRequired}),width:h.PropTypes.oneOfType([h.PropTypes.number,h.PropTypes.string])},X.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const I=X;var ee=c(296),me=c.n(ee),le=c(96),pe=c.n(le),ae=function(Z){var O=getComputedStyle(Z,null);return O.getPropertyValue("overflow")+O.getPropertyValue("overflow-y")+O.getPropertyValue("overflow-x")};const re=function(Z){if(!(Z instanceof HTMLElement))return window;for(var O=Z;O&&O instanceof HTMLElement;){if(/(scroll|auto)/.test(ae(O)))return O;O=O.parentNode}return window};function ue(Z){return ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},ue(Z)}var De=["delayMethod","delayTime"];function Me(){return Me=Object.assign?Object.assign.bind():function(Z){for(var O=1;O<arguments.length;O++){var F=arguments[O];for(var J in F)Object.prototype.hasOwnProperty.call(F,J)&&(Z[J]=F[J])}return Z},Me.apply(this,arguments)}function we(Z,O){for(var F=0;F<O.length;F++){var J=O[F];J.enumerable=J.enumerable||!1,J.configurable=!0,"value"in J&&(J.writable=!0),Object.defineProperty(Z,(Ae=(function(Se,Le){if(ue(Se)!=="object"||Se===null)return Se;var q=Se[Symbol.toPrimitive];if(q!==void 0){var Y=q.call(Se,"string");if(ue(Y)!=="object")return Y;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Se)})(J.key),ue(Ae)==="symbol"?Ae:String(Ae)),J)}var Ae}function Ye(Z,O){return Ye=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(F,J){return F.__proto__=J,F},Ye(Z,O)}function Te(Z,O){if(O&&(ue(O)==="object"||typeof O=="function"))return O;if(O!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Xe(Z)}function Xe(Z){if(Z===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Z}function B(Z){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(O){return O.__proto__||Object.getPrototypeOf(O)},B(Z)}var P=function(){return typeof window>"u"?0:window.scrollX||window.pageXOffset},ne=function(){return typeof window>"u"?0:window.scrollY||window.pageYOffset};const xe=function(Z){var O=(function(F){(function($,te){if(typeof te!="function"&&te!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(te&&te.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),Object.defineProperty($,"prototype",{writable:!1}),te&&Ye($,te)})(Y,F);var J,Ae,Se,Le,q=(Se=Y,Le=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var $,te=B(Se);if(Le){var _=B(this).constructor;$=Reflect.construct(te,arguments,_)}else $=te.apply(this,arguments);return Te(this,$)});function Y($){var te;if((function(Ee,We){if(!(Ee instanceof We))throw new TypeError("Cannot call a class as a function")})(this,Y),(te=q.call(this,$)).useIntersectionObserver=$.useIntersectionObserver&&x(),te.useIntersectionObserver)return Te(te);var _=te.onChangeScroll.bind(Xe(te));return $.delayMethod==="debounce"?te.delayedScroll=me()(_,$.delayTime):$.delayMethod==="throttle"&&(te.delayedScroll=pe()(_,$.delayTime)),te.state={scrollPosition:{x:P(),y:ne()}},te.baseComponentRef=p().createRef(),te}return J=Y,(Ae=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){typeof window>"u"||this.useIntersectionObserver||re(this.baseComponentRef.current)!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement=re(this.baseComponentRef.current),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:P(),y:ne()}})}},{key:"render",value:function(){var $=this.props,te=($.delayMethod,$.delayTime,(function(Ee,We){if(Ee==null)return{};var Ie,Ve,ot=(function(at,ra){if(at==null)return{};var Qt,Vn,Ul={},kn=Object.keys(at);for(Vn=0;Vn<kn.length;Vn++)Qt=kn[Vn],ra.indexOf(Qt)>=0||(Ul[Qt]=at[Qt]);return Ul})(Ee,We);if(Object.getOwnPropertySymbols){var _e=Object.getOwnPropertySymbols(Ee);for(Ve=0;Ve<_e.length;Ve++)Ie=_e[Ve],We.indexOf(Ie)>=0||Object.prototype.propertyIsEnumerable.call(Ee,Ie)&&(ot[Ie]=Ee[Ie])}return ot})($,De)),_=this.useIntersectionObserver?null:this.state.scrollPosition;return p().createElement(Z,Me({forwardRef:this.baseComponentRef,scrollPosition:_},te))}}])&&we(J.prototype,Ae),Object.defineProperty(J,"prototype",{writable:!1}),Y})(p().Component);return O.propTypes={delayMethod:h.PropTypes.oneOf(["debounce","throttle"]),delayTime:h.PropTypes.number,useIntersectionObserver:h.PropTypes.bool},O.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},O};function fe(Z){return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},fe(Z)}function A(Z,O){for(var F=0;F<O.length;F++){var J=O[F];J.enumerable=J.enumerable||!1,J.configurable=!0,"value"in J&&(J.writable=!0),Object.defineProperty(Z,(Ae=(function(Se,Le){if(fe(Se)!=="object"||Se===null)return Se;var q=Se[Symbol.toPrimitive];if(q!==void 0){var Y=q.call(Se,"string");if(fe(Y)!=="object")return Y;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Se)})(J.key),fe(Ae)==="symbol"?Ae:String(Ae)),J)}var Ae}function H(Z,O){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(F,J){return F.__proto__=J,F},H(Z,O)}function K(Z){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(O){return O.__proto__||Object.getPrototypeOf(O)},K(Z)}var W=(function(Z){(function(q,Y){if(typeof Y!="function"&&Y!==null)throw new TypeError("Super expression must either be null or a function");q.prototype=Object.create(Y&&Y.prototype,{constructor:{value:q,writable:!0,configurable:!0}}),Object.defineProperty(q,"prototype",{writable:!1}),Y&&H(q,Y)})(Le,Z);var O,F,J,Ae,Se=(J=Le,Ae=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var q,Y=K(J);if(Ae){var $=K(this).constructor;q=Reflect.construct(Y,arguments,$)}else q=Y.apply(this,arguments);return(function(te,_){if(_&&(fe(_)==="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(function(Ee){if(Ee===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Ee})(te)})(this,q)});function Le(q){return(function(Y,$){if(!(Y instanceof $))throw new TypeError("Cannot call a class as a function")})(this,Le),Se.call(this,q)}return O=Le,(F=[{key:"render",value:function(){return p().createElement(I,this.props)}}])&&A(O.prototype,F),Object.defineProperty(O,"prototype",{writable:!1}),Le})(p().Component);const se=xe(W);function he(Z){return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},he(Z)}function Be(Z,O){for(var F=0;F<O.length;F++){var J=O[F];J.enumerable=J.enumerable||!1,J.configurable=!0,"value"in J&&(J.writable=!0),Object.defineProperty(Z,(Ae=(function(Se,Le){if(he(Se)!=="object"||Se===null)return Se;var q=Se[Symbol.toPrimitive];if(q!==void 0){var Y=q.call(Se,"string");if(he(Y)!=="object")return Y;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Se)})(J.key),he(Ae)==="symbol"?Ae:String(Ae)),J)}var Ae}function tt(Z,O){return tt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(F,J){return F.__proto__=J,F},tt(Z,O)}function Fe(Z){if(Z===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Z}function Bt(Z){return Bt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(O){return O.__proto__||Object.getPrototypeOf(O)},Bt(Z)}var rt=(function(Z){(function(q,Y){if(typeof Y!="function"&&Y!==null)throw new TypeError("Super expression must either be null or a function");q.prototype=Object.create(Y&&Y.prototype,{constructor:{value:q,writable:!0,configurable:!0}}),Object.defineProperty(q,"prototype",{writable:!1}),Y&&tt(q,Y)})(Le,Z);var O,F,J,Ae,Se=(J=Le,Ae=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var q,Y=Bt(J);if(Ae){var $=Bt(this).constructor;q=Reflect.construct(Y,arguments,$)}else q=Y.apply(this,arguments);return(function(te,_){if(_&&(he(_)==="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Fe(te)})(this,q)});function Le(q){var Y;(function(We,Ie){if(!(We instanceof Ie))throw new TypeError("Cannot call a class as a function")})(this,Le),Y=Se.call(this,q);var $=q.afterLoad,te=q.beforeLoad,_=q.scrollPosition,Ee=q.visibleByDefault;return Y.state={visible:Ee},Ee&&(te(),$()),Y.onVisible=Y.onVisible.bind(Fe(Y)),Y.isScrollTracked=!!(_&&Number.isFinite(_.x)&&_.x>=0&&Number.isFinite(_.y)&&_.y>=0),Y}return O=Le,(F=[{key:"componentDidUpdate",value:function(q,Y){Y.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var q=this.props,Y=q.className,$=q.delayMethod,te=q.delayTime,_=q.height,Ee=q.placeholder,We=q.scrollPosition,Ie=q.style,Ve=q.threshold,ot=q.useIntersectionObserver,_e=q.width;return this.isScrollTracked||ot&&x()?p().createElement(I,{className:Y,height:_,onVisible:this.onVisible,placeholder:Ee,scrollPosition:We,style:Ie,threshold:Ve,useIntersectionObserver:ot,width:_e}):p().createElement(se,{className:Y,delayMethod:$,delayTime:te,height:_,onVisible:this.onVisible,placeholder:Ee,style:Ie,threshold:Ve,width:_e})}}])&&Be(O.prototype,F),Object.defineProperty(O,"prototype",{writable:!1}),Le})(p().Component);rt.propTypes={afterLoad:h.PropTypes.func,beforeLoad:h.PropTypes.func,useIntersectionObserver:h.PropTypes.bool,visibleByDefault:h.PropTypes.bool},rt.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const Nt=rt;function vt(Z){return vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},vt(Z)}var va=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function Un(Z,O){var F=Object.keys(Z);if(Object.getOwnPropertySymbols){var J=Object.getOwnPropertySymbols(Z);O&&(J=J.filter((function(Ae){return Object.getOwnPropertyDescriptor(Z,Ae).enumerable}))),F.push.apply(F,J)}return F}function Hn(Z){for(var O=1;O<arguments.length;O++){var F=arguments[O]!=null?arguments[O]:{};O%2?Un(Object(F),!0).forEach((function(J){vo(Z,J,F[J])})):Object.getOwnPropertyDescriptors?Object.defineProperties(Z,Object.getOwnPropertyDescriptors(F)):Un(Object(F)).forEach((function(J){Object.defineProperty(Z,J,Object.getOwnPropertyDescriptor(F,J))}))}return Z}function vo(Z,O,F){return(O=Ln(O))in Z?Object.defineProperty(Z,O,{value:F,enumerable:!0,configurable:!0,writable:!0}):Z[O]=F,Z}function dn(){return dn=Object.assign?Object.assign.bind():function(Z){for(var O=1;O<arguments.length;O++){var F=arguments[O];for(var J in F)Object.prototype.hasOwnProperty.call(F,J)&&(Z[J]=F[J])}return Z},dn.apply(this,arguments)}function Ml(Z,O){for(var F=0;F<O.length;F++){var J=O[F];J.enumerable=J.enumerable||!1,J.configurable=!0,"value"in J&&(J.writable=!0),Object.defineProperty(Z,Ln(J.key),J)}}function Ln(Z){var O=(function(F,J){if(vt(F)!=="object"||F===null)return F;var Ae=F[Symbol.toPrimitive];if(Ae!==void 0){var Se=Ae.call(F,"string");if(vt(Se)!=="object")return Se;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(F)})(Z);return vt(O)==="symbol"?O:String(O)}function pn(Z,O){return pn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(F,J){return F.__proto__=J,F},pn(Z,O)}function qn(Z){return qn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(O){return O.__proto__||Object.getPrototypeOf(O)},qn(Z)}var Dl=(function(Z){(function(q,Y){if(typeof Y!="function"&&Y!==null)throw new TypeError("Super expression must either be null or a function");q.prototype=Object.create(Y&&Y.prototype,{constructor:{value:q,writable:!0,configurable:!0}}),Object.defineProperty(q,"prototype",{writable:!1}),Y&&pn(q,Y)})(Le,Z);var O,F,J,Ae,Se=(J=Le,Ae=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var q,Y=qn(J);if(Ae){var $=qn(this).constructor;q=Reflect.construct(Y,arguments,$)}else q=Y.apply(this,arguments);return(function(te,_){if(_&&(vt(_)==="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(function(Ee){if(Ee===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Ee})(te)})(this,q)});function Le(q){var Y;return(function($,te){if(!($ instanceof te))throw new TypeError("Cannot call a class as a function")})(this,Le),(Y=Se.call(this,q)).state={loaded:!1},Y}return O=Le,(F=[{key:"onImageLoad",value:function(){var q=this;return this.state.loaded?null:function(Y){q.props.onLoad(Y),q.props.afterLoad(),q.setState({loaded:!0})}}},{key:"getImg",value:function(){var q=this.props,Y=(q.afterLoad,q.beforeLoad,q.delayMethod,q.delayTime,q.effect,q.placeholder,q.placeholderSrc,q.scrollPosition,q.threshold,q.useIntersectionObserver,q.visibleByDefault,q.wrapperClassName,q.wrapperProps,(function($,te){if($==null)return{};var _,Ee,We=(function(Ve,ot){if(Ve==null)return{};var _e,at,ra={},Qt=Object.keys(Ve);for(at=0;at<Qt.length;at++)_e=Qt[at],ot.indexOf(_e)>=0||(ra[_e]=Ve[_e]);return ra})($,te);if(Object.getOwnPropertySymbols){var Ie=Object.getOwnPropertySymbols($);for(Ee=0;Ee<Ie.length;Ee++)_=Ie[Ee],te.indexOf(_)>=0||Object.prototype.propertyIsEnumerable.call($,_)&&(We[_]=$[_])}return We})(q,va));return p().createElement("img",dn({},Y,{onLoad:this.onImageLoad()}))}},{key:"getLazyLoadImage",value:function(){var q=this.props,Y=q.beforeLoad,$=q.className,te=q.delayMethod,_=q.delayTime,Ee=q.height,We=q.placeholder,Ie=q.scrollPosition,Ve=q.style,ot=q.threshold,_e=q.useIntersectionObserver,at=q.visibleByDefault,ra=q.width;return p().createElement(Nt,{beforeLoad:Y,className:$,delayMethod:te,delayTime:_,height:Ee,placeholder:We,scrollPosition:Ie,style:Ve,threshold:ot,useIntersectionObserver:_e,visibleByDefault:at,width:ra},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(q){var Y=this.props,$=Y.effect,te=Y.height,_=Y.placeholderSrc,Ee=Y.width,We=Y.wrapperClassName,Ie=Y.wrapperProps,Ve=this.state.loaded,ot=Ve?" lazy-load-image-loaded":"",_e=Ve||!_?{}:{backgroundImage:"url(".concat(_,")"),backgroundSize:"100% 100%"};return p().createElement("span",dn({className:We+" lazy-load-image-background "+$+ot,style:Hn(Hn({},_e),{},{color:"transparent",display:"inline-block",height:te,width:Ee})},Ie),q)}},{key:"render",value:function(){var q=this.props,Y=q.effect,$=q.placeholderSrc,te=q.visibleByDefault,_=q.wrapperClassName,Ee=q.wrapperProps,We=this.getLazyLoadImage();return(Y||$)&&!te||_||Ee?this.getWrappedLazyLoadImage(We):We}}])&&Ml(O.prototype,F),Object.defineProperty(O,"prototype",{writable:!1}),Le})(p().Component);Dl.propTypes={onLoad:h.PropTypes.func,afterLoad:h.PropTypes.func,beforeLoad:h.PropTypes.func,delayMethod:h.PropTypes.string,delayTime:h.PropTypes.number,effect:h.PropTypes.string,placeholderSrc:h.PropTypes.string,threshold:h.PropTypes.number,useIntersectionObserver:h.PropTypes.bool,visibleByDefault:h.PropTypes.bool,wrapperClassName:h.PropTypes.string,wrapperProps:h.PropTypes.object},Dl.defaultProps={onLoad:function(){},afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const Ot=Dl})(),Xc.exports=u})()),Xc.exports}var $y=_y();const Fc=[{name:"Tapas",slug:"tapas",image:"https://media.bighaat.com/brands/tapasLogo.webp?w=1920&q=80"},{name:"Syngenta",slug:"syngenta",image:"https://media.bighaat.com/brands/syngentaLogo.webp?w=1920&q=80"},{name:"Indo American",slug:"indo-american",image:"https://media.bighaat.com/brands/dcm_shriram_logo.webp?w=1920&q=80"},{name:"Shriram",slug:"shriram",image:"https://media.bighaat.com/brands/seminisLogo.webp?w=1920&q=80"},{name:"Geolife",slug:"geolife",image:"https://media.bighaat.com/brands/namdhariSeedsLogo.webp?w=1920&q=80"},{name:"Bayer",slug:"bayer",image:"https://media.bighaat.com/brands/dhanukaLogo.webp?w=1920&q=80"},{name:"Seminis",slug:"seminis",image:"https://media.bighaat.com/brands/geolife-brand-logo.webp?w=1920&q=80"},{name:"Namdhari Seeds",slug:"namdhari",image:"https://media.bighaat.com/brands/excel%20industries.webp?w=1920&q=80"}],ev=()=>{const l=ya(),s=c=>{l(`/brand/${c}`)};return r.jsxs("div",{className:"brands-section",children:[r.jsxs("div",{className:"brands-header",children:[r.jsx("h2",{className:"brands-title",children:"Brands"}),r.jsx("a",{className:"brands-more-btn",onClick:()=>l("/brands"),children:"View All →"})]}),r.jsx("div",{className:"slider",children:r.jsx("div",{className:"slide-track",children:Fc.concat(Fc).map((c,u)=>r.jsx("div",{className:"brand-card",style:{"--i":u},onClick:()=>s(c.slug),children:r.jsx($y.LazyLoadImage,{src:c.image,alt:c.name,effect:"blur",draggable:"false"})},u))})}),r.jsx("style",{children:`
        .brands-section {
          background: #E9F8E4;
          padding: 20px;
          margin-top: 30px;
        }

        .brands-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1300px;
          margin: 0 auto 6px auto;
        }

        .brands-title {
          font-size: 24px;
          font-weight: 700;
          color: #2a7a0e;
          margin: 0;
        }

        .brands-more-btn {
          background:#2a7a0e;
          color:#fff;
          padding:6px 14px;
          border-radius:6px;
          font-weight:600;
          cursor:pointer;
          transition:.3s;
        }
        .brands-more-btn:hover { opacity:.85; }

        .slider {
          height: 140px;
          overflow: hidden;
          position: relative;
          max-width: 1300px;
          margin: auto;
        }

        .slide-track {
          display: flex;
          width: calc(160px * ${Fc.length*2});
          animation: scroll 28s linear infinite;
        }

        .slider:hover .slide-track {
          animation-play-state: paused;
        }

        .brand-card {
          background:white;
          border-radius:12px;
          padding:14px;
          width:90px;
          height:90px;
          margin:0 14px;
          display:flex;
          align-items:center;
          justify-content:center;
          box-shadow:0 2px 6px rgba(0,0,0,0.08);
          cursor:pointer;

          opacity:0;
          transform:scale(0.85);
          animation: fadeInSmooth .6s ease forwards;
          animation-delay: calc(var(--i) * 0.12s);

          transition: transform .3s ease, box-shadow .3s ease;
          margin-top:10px;
        }

        .brand-card:hover {
          transform: scale(1.12);
          box-shadow: 0px 6px 16px rgba(42,122,14,0.32);
        }

        .brand-card img, .brand-card .lazy-load-image-background {
          width:100%;
          height:auto;
          object-fit:contain;
        }

        @keyframes fadeInSmooth {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .brand-card {
            width:75px;
            height:75px;
            padding:12px;
          }
        }
      `})]})},tv=()=>{const[l,s]=E.useState(""),[c,u]=E.useState("All");let f=Yy();return c!=="All"&&(f=f.filter(p=>p.category===c)),f=f.filter(p=>p.name.toLowerCase().includes(l.toLowerCase())),r.jsxs("div",{className:"offers-page",children:[r.jsx("h2",{className:"offers-page-title",children:"Today's Best Deals"}),r.jsxs("div",{className:"offers-filters",children:[r.jsx("input",{placeholder:"Search offers...",value:l,onChange:p=>s(p.target.value)}),r.jsxs("select",{value:c,onChange:p=>u(p.target.value),children:[r.jsx("option",{children:"All"}),r.jsx("option",{value:"seeds",children:"Seeds"}),r.jsx("option",{value:"fertilizers",children:"Fertilizers"}),r.jsx("option",{value:"machinery",children:"Machinery"})]})]}),r.jsx("div",{className:"offers-grid",children:f.map(p=>r.jsx(Km,{item:p},p.id))}),r.jsx("style",{children:`
        .offers-page { max-width:1300px;margin:auto;padding:40px 20px; }
        .offers-page-title { text-align:center;font-size:28px;font-weight:700;color:#2a7a0e;margin-bottom:25px; }

        .offers-filters { display:flex;gap:12px;justify-content:center;margin-bottom:25px; }
        .offers-filters input, .offers-filters select {
          padding:10px 14px;border:1px solid #ccc;border-radius:6px;font-size:15px;
        }

        .offers-grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
          gap:20px;
        }
      `})]})};function av(){return r.jsx(tv,{})}const nv=()=>{const l=new Date().getFullYear();return r.jsxs("footer",{className:"agri-footer",children:[r.jsxs("div",{className:"footer-top",children:[r.jsxs("div",{className:"brand-block",children:[r.jsxs("div",{className:"brand-logo",children:["Agri",r.jsx("span",{children:"Tech"})]}),r.jsx("p",{className:"brand-tag",children:"Quality agri products at honest prices. Seeds, fertilizers, and machinery—delivered fast."}),r.jsxs("div",{className:"socials",children:[r.jsx("a",{"aria-label":"Facebook",href:"#",className:"social",children:r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M22 12a10 10 0 1 0-11.563 9.874v-6.987H7.898V12h2.54V9.797c0-2.506 1.493-3.89 3.778-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.772-1.63 1.563V12h2.773l-.443 2.887h-2.33v6.987A10.002 10.002 0 0 0 22 12z"})})}),r.jsx("a",{"aria-label":"Instagram",href:"#",className:"social",children:r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.997.24 2.69.512a5.4 5.4 0 0 1 1.95 1.268 5.4 5.4 0 0 1 1.268 1.95c.272.693.456 1.52.512 2.69.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.997-.512 2.69a5.4 5.4 0 0 1-1.268 1.95 5.4 5.4 0 0 1-1.95 1.268c-.693.272-1.52.456-2.69.512-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.997-.24-2.69-.512a5.4 5.4 0 0 1-1.95-1.268 5.4 5.4 0 0 1-1.268-1.95c-.272-.693-.456-1.52-.512-2.69C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.997.512-2.69a5.4 5.4 0 0 1 1.268-1.95 5.4 5.4 0 0 1 1.95-1.268c.693-.272 1.52-.456 2.69-.512C8.416 2.175 8.796 2.163 12 2.163zm0 1.8c-3.16 0-3.532.012-4.775.069-1.03.047-1.59.219-1.96.364-.493.191-.846.418-1.216.788s-.597.723-.788 1.216c-.145.37-.317.93-.364 1.96-.057 1.243-.069 1.615-.069 4.775s.012 3.532.069 4.775c.047 1.03.219 1.59.364 1.96.191.493.418.846.788 1.216s.723.597 1.216.788c.37.145.93.317 1.96.364 1.243.057 1.615.069 4.775.069s3.532-.012 4.775-.069c1.03-.047 1.59-.219 1.96-.364.493-.191.846-.418 1.216-.788s.597-.723.788-1.216c.145-.37.317-.93.364-1.96.057-1.243.069-1.615.069-4.775s-.012-3.532-.69-4.775c-.047-1.03-.219-1.59-.364-1.96a3.6 3.6 0 0 0-.788-1.216 3.6 3.6 0 0 0-1.216-.788c-.37-.145-.93-.317-1.96-.364-1.243-.057-1.615-.069-4.775-.069zm0 3.474a5.563 5.563 0 1 1 0 11.126 5.563 5.563 0 0 1 0-11.126zm0 1.8a3.763 3.763 0 1 0 0 7.526 3.763 3.763 0 0 0 0-7.526zm5.67-2.025a1.302 1.302 0 1 1 0 2.604 1.302 1.302 0 0 1 0-2.604z"})})}),r.jsx("a",{"aria-label":"Twitter",href:"#",className:"social",children:r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M22.46 6c-.77.35-1.6.58-2.47.69a4.29 4.29 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.32 5.71 4.25 4.25 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.58 8.58 0 0 1 2 19.54a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.71 8.71 0 0 0 22.46 6z"})})})]})]}),r.jsxs("div",{className:"newsletter",children:[r.jsx("h4",{children:"Subscribe for best offers"}),r.jsx("p",{children:"Get updates on seeds, fertilizers & machinery deals."}),r.jsxs("form",{className:"news-form",onSubmit:s=>s.preventDefault(),children:[r.jsx("input",{type:"email",placeholder:"Enter your email",required:!0}),r.jsx("button",{type:"submit",children:"Subscribe"})]})]})]}),r.jsxs("div",{className:"footer-links",children:[r.jsxs("div",{className:"link-col",children:[r.jsx("h5",{children:"Shop"}),r.jsx(be,{to:"/category/seeds",children:"Seeds"}),r.jsx(be,{to:"/category/fertilizers",children:"Fertilizers"}),r.jsx(be,{to:"/category/farm-machinery",children:"Farm Machinery"}),r.jsx(be,{to:"/offers-today",children:"Today’s Offers"})]}),r.jsxs("div",{className:"link-col",children:[r.jsx("h5",{children:"Help"}),r.jsx(be,{to:"/help/faq",children:"FAQ"}),r.jsx(be,{to:"/help/returns",children:"Returns & Refunds"}),r.jsx(be,{to:"/help/shipping",children:"Shipping"}),r.jsx(be,{to:"/contact",children:"Contact Us"})]}),r.jsxs("div",{className:"link-col",children:[r.jsx("h5",{children:"Company"}),r.jsx(be,{to:"/about",children:"About Us"}),r.jsx(be,{to:"/careers",children:"Careers"}),r.jsx(be,{to:"/terms",children:"Terms of Use"}),r.jsx(be,{to:"/privacy",children:"Privacy Policy"})]}),r.jsxs("div",{className:"link-col contact",children:[r.jsx("h5",{children:"Contact"}),r.jsx("p",{children:"📍 Hyderabad, India"}),r.jsx("p",{children:"✉️ support@agritech.com"}),r.jsx("p",{children:"📞 +91 98765 43210"}),r.jsx("p",{children:"Mon–Sat: 9:00 AM – 7:00 PM"})]}),r.jsxs("div",{className:"link-col",children:[r.jsx("h5",{children:"Login"}),r.jsx(be,{to:"/login",children:"Login as User"}),r.jsx(be,{to:"/admin-login",children:"Login as Admin"}),r.jsx(be,{to:"/vendor-login",children:"Login as Vendor"})]})]}),r.jsxs("div",{className:"footer-bottom",children:[r.jsxs("p",{children:["© ",l," AgriTech. All rights reserved."]}),r.jsxs("div",{className:"payments",children:[r.jsx("span",{className:"pill",children:"UPI"}),r.jsx("span",{className:"pill",children:"NetBanking"}),r.jsx("span",{className:"pill",children:"Cards"}),r.jsx("span",{className:"pill",children:"COD"})]})]}),r.jsx("style",{children:`
        .agri-footer {
          background:#f7fbf6;
          border-top:1px solid #e6efe4;
          margin-top:20px;
        }

        .footer-top {
          max-width:1300px;
          margin:auto;
          padding:32px 20px 10px;
          display:flex;
          gap:28px;
          align-items:flex-start;
          justify-content:space-between;
          flex-wrap:wrap;
        }

        .brand-block { max-width:520px; }
        .brand-logo {
          font-size:28px; font-weight:800; color:#2a7a0e;
        }
        .brand-logo span { color:#0f4f06; }
        .brand-tag { margin:8px 0 14px; color:#355b2c; line-height:1.5; }

        .socials { display:flex; gap:10px; margin-top:8px; }
        .social { display:inline-flex; padding:10px; background:#eaf4e8; border-radius:8px; color:#2a7a0e; }
        .social:hover { opacity:.85; }

        .newsletter { margin-left:auto; min-width:280px; max-width:420px; }
        .newsletter h4 { margin:0 0 6px; font-size:18px; color:#2a7a0e; }
        .newsletter p { margin:0 0 12px; color:#497a3e; }
        .news-form { display:flex; gap:8px; }
        .news-form input {
          flex:1; padding:10px 12px; border:1px solid #cfe0cc; border-radius:8px; font-size:14px;
          outline:none;
        }
          
        .news-form button {
          padding:10px 14px; background:#2a7a0e; color:#fff; border:none; border-radius:8px;
          font-weight:600; cursor:pointer; transition:.25s;
        }
        .news-form button:hover { opacity:.9; }

        .footer-links {
          max-width:1300px;
          margin:auto;
          padding:20px 20px 10px;
          display:grid;
          grid-template-columns: repeat(5, minmax(180px,1fr));
          gap:20px;
          border-top:1px dashed #d7e6d4;
        }

        .link-col h5 {
          margin:0 0 10px; color:#2a7a0e; font-size:16px; font-weight:700;
        }
        .link-col a, .link-col p {
          display:block; margin:6px 0; color:#355b2c; text-decoration:none; font-size:14px;
        }
        .link-col a:hover { text-decoration:underline; }

        .contact p { margin:6px 0; }

        .footer-bottom {
          max-width:1300px;
          margin:auto;
          padding:14px 20px 24px;
          display:flex; align-items:center; justify-content:space-between; gap:12px;
          border-top:1px solid #e6efe4;
          color:#355b2c;
        }

        .payments { display:flex; gap:8px; flex-wrap:wrap; }
        .pill {
          padding:6px 10px; background:#eaf4e8; border-radius:999px; font-size:12px; color:#2a7a0e; font-weight:700;
        }

        @media (max-width: 900px) {
          .footer-links { grid-template-columns: repeat(2, minmax(160px,1fr)); }
        }
        @media (max-width: 520px) {
          .footer-links { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction:column; align-items:flex-start; }
          .newsletter { width:100%; }
        }
      `})]})},lv=()=>{const[l,s]=E.useState(!0);return E.useEffect(()=>{const c=setInterval(()=>{s(u=>!u)},4e3);return()=>clearInterval(c)},[]),r.jsxs("div",{className:"trust-rotator-wrapper",children:[r.jsx("div",{className:`banner ${l?"visible":"hidden"}`,children:r.jsx(Wy,{})}),r.jsx("div",{className:`banner ${l?"hidden":"visible"}`,children:r.jsx(Iy,{})}),r.jsx("style",{children:`
        .trust-rotator-wrapper {
          position: relative;
          max-width: 1300px;
          margin: 40px auto;
          padding: 0 20px;
        }

        .banner {
          position: absolute;
          width: 100%;
          opacity: 0;
          transform: scale(0.97);
          transition: opacity .6s ease, transform .6s ease;
        }

        .banner.visible {
          opacity: 1;
          transform: scale(1);
          position: relative;
        }

        .banner.hidden {
          opacity: 0;
          transform: scale(0.95);
        }
      `})]})},iv=()=>r.jsxs("div",{children:[r.jsx(fo,{}),r.jsx(Dy,{}),r.jsx(Hy,{}),r.jsx(Gy,{}),r.jsx(Xy,{}),r.jsx(qy,{}),r.jsx(ev,{}),r.jsx(Vy,{}),r.jsx(lv,{}),r.jsx(ky,{}),r.jsx(Py,{}),r.jsx(nv,{})]}),Ph=()=>{const[l,s]=E.useState({name:"",email:"",phone:"",message:""}),c=f=>{s({...l,[f.target.name]:f.target.value})},u=f=>{f.preventDefault(),alert("Thank you! Your message has been submitted ✅"),s({name:"",email:"",phone:"",message:""})};return r.jsxs("div",{className:"contact-wrapper",children:[r.jsx("h1",{className:"contact-title",children:"Contact Us"}),r.jsx("p",{className:"contact-sub",children:"We are here to help and answer your questions"}),r.jsxs("div",{className:"contact-container",children:[r.jsxs("div",{className:"contact-info",children:[r.jsx("h2",{children:"Get in Touch"}),r.jsx("p",{children:"Feel free to reach out to us for support, product inquiries or partnership opportunities."}),r.jsxs("div",{className:"info-row",children:[r.jsx("strong",{children:"📍 Address:"}),r.jsx("span",{children:"Hyderabad, Telangana, India"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("strong",{children:"📞 Phone:"}),r.jsx("span",{children:"+91 98765 43210"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("strong",{children:"✉️ Email:"}),r.jsx("span",{children:"support@agritechfarm.com"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("strong",{children:"🕒 Working Hours:"}),r.jsx("span",{children:"Mon - Sat : 9:00 AM - 7:00 PM"})]})]}),r.jsxs("form",{className:"contact-form",onSubmit:u,children:[r.jsx("input",{type:"text",name:"name",placeholder:"Your Name",value:l.name,onChange:c,required:!0}),r.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:l.email,onChange:c,required:!0}),r.jsx("input",{type:"tel",name:"phone",placeholder:"Phone Number",value:l.phone,onChange:c,required:!0}),r.jsx("textarea",{name:"message",placeholder:"Write your message...",rows:"5",value:l.message,onChange:c,required:!0}),r.jsx("button",{type:"submit",children:"Send Message"})]})]}),r.jsx("style",{children:`
        .contact-wrapper {
          max-width: 1200px;
          margin: auto;
          padding: 40px 20px;
          font-family: sans-serif;
        }

        .contact-title {
          text-align: center;
          color: #2a7a0e;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .contact-sub {
          text-align: center;
          color: #555;
          margin-bottom: 35px;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 35px;
        }

        .contact-info h2 {
          font-size: 22px;
          color: #2a7a0e;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .contact-info p {
          color: #444;
          margin-bottom: 18px;
        }

        .info-row {
          margin-bottom: 12px;
          font-size: 15px;
        }

        .info-row strong {
          display: block;
          margin-bottom: 4px;
          color: #2a7a0e;
        }

        .contact-form {
          background: #fff;
          padding: 24px;
          border-radius: 10px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 14px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 15px;
          outline: none;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #2a7a0e;
        }

        .contact-form button {
          width: 100%;
          padding: 12px;
          background: #2a7a0e;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          transition: .3s;
        }

        .contact-form button:hover {
          opacity: 0.85;
        }

        @media(max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Wh=()=>{const l=[{icon:"🚚",title:"Fast Delivery",desc:"Quick delivery to your doorstep"},{icon:"🛡️",title:"Trusted Quality",desc:"Verified & lab-tested products"},{icon:"💬",title:"24/7 Support",desc:"We are always here to help"},{icon:"💵",title:"Easy Returns",desc:"Hassle-free replacement guarantee"}];return r.jsxs("div",{className:"services-wrapper",children:[r.jsx("div",{className:"services-container",children:l.map((s,c)=>r.jsxs("div",{className:"service-box",children:[r.jsx("div",{className:"service-icon",children:s.icon}),r.jsx("h3",{children:s.title}),r.jsx("p",{children:s.desc})]},c))}),r.jsx("style",{children:`
        .services-wrapper {
          max-width: 1300px;
          margin: 40px auto;
          padding: 0 20px;
        }

        .services-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
        }

        .service-box {
          background: #ffffff;
          border-radius: 12px;
          padding: 22px;
          text-align: center;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
          transition: transform .3s ease, box-shadow .3s ease;
          border: 1px solid #d6e8d3;
          cursor: default;
        }

        .service-box:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
        }

        .service-icon {
          font-size: 40px;
          margin-bottom: 8px;
        }

        .service-box h3 {
          font-size: 18px;
          font-weight: 700;
          color: #2a7a0e;
          margin-bottom: 6px;
        }

        .service-box p {
          font-size: 14px;
          color: #555;
          margin: 0;
        }
      `})]})},Ih=()=>{const l=[{name:"Ravi Kumar",role:"Founder & CEO",image:"https://i.postimg.cc/g2cwQwcS/avatar1.png"},{name:"Priya Sharma",role:"Agriculture Expert",image:"https://i.postimg.cc/mD4zGNyM/avatar2.png"},{name:"Arun Verma",role:"Supply Chain Manager",image:"https://i.postimg.cc/3xk6Gtxz/avatar3.png"},{name:"Sneha Patil",role:"Customer Success Lead",image:"https://i.postimg.cc/fRYp57QZ/avatar4.png"}];return r.jsxs("div",{className:"about-wrap",children:[r.jsxs("div",{className:"about-header",children:[r.jsx("h1",{children:"About Us"}),r.jsx("p",{children:"Your trusted partner in modern agriculture"})]}),r.jsxs("div",{className:"about-content",children:[r.jsx("p",{children:"We are an AgriTech driven marketplace focused on providing farmers with the highest quality seeds, fertilizers, pesticides, tools and farming equipment at fair and transparent prices. Our goal is to empower farmers with reliable products, trusted guidance, and seamless last-mile delivery."}),r.jsx("p",{children:"Agriculture is the backbone of our nation — and we believe farmers deserve both respect and access to the best resources. We work with verified manufacturers, certified suppliers, agronomists, and high-trust distributors to ensure genuine, result-driven products reach you on time."})]}),r.jsxs("div",{className:"about-section",children:[r.jsx("h2",{children:"Our Mission"}),r.jsx("p",{children:"To make quality agri-products accessible, affordable, and reliable for every farmer — helping them increase productivity, crop yield, and profit margins."})]}),r.jsxs("div",{className:"about-section",children:[r.jsx("h2",{children:"What We Offer"}),r.jsxs("ul",{children:[r.jsx("li",{children:"✔ High-quality seeds and fertilizers"}),r.jsx("li",{children:"✔ Trusted and certified farming products"}),r.jsx("li",{children:"✔ Farm tools, machinery & accessories"}),r.jsx("li",{children:"✔ 24/7 customer support in your language"}),r.jsx("li",{children:"✔ Fast and secure delivery across regions"})]})]}),r.jsxs("div",{className:"about-section",children:[r.jsx("h2",{children:"Our Promise"}),r.jsx("p",{children:"Transparent pricing. Genuine brands. Expert support. Because farmers deserve the best — always."})]}),r.jsxs("div",{className:"about-section team-section",children:[r.jsx("h2",{children:"Meet Our Team"}),r.jsx("div",{className:"team-grid",children:l.map((s,c)=>r.jsxs("div",{className:"team-card",children:[r.jsx("img",{src:s.image,alt:s.name}),r.jsx("h3",{children:s.name}),r.jsx("p",{children:s.role})]},c))})]}),r.jsx("style",{children:`
        .about-wrap {
          max-width: 1200px;
          margin: auto;
          padding: 40px 20px;
          line-height: 1.7;
          font-family: sans-serif;
        }

        .about-header {
          text-align: center;
          margin-bottom: 35px;
        }

        .about-header h1 {
          font-size: 32px;
          font-weight: 700;
          color: #2a7a0e;
          margin-bottom: 6px;
        }

        .about-header p {
          font-size: 16px;
          color: #555;
        }

        .about-content p {
          font-size: 16px;
          color: #333;
          margin-bottom: 18px;
          text-align: justify;
        }

        .about-section {
          margin-top: 28px;
        }

        .about-section h2 {
          font-size: 22px;
          color: #2a7a0e;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .about-section ul li {
          margin-bottom: 6px;
          font-size: 15px;
        }

        /* 🧑‍🌾 Team Section Styles */
        .team-section {
          margin-top: 40px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 22px;
          margin-top: 16px;
        }

        .team-card {
          text-align: center;
          background: #fff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .team-card img {
          width: 85px;
          height: 85px;
          border-radius: 50%;
          margin-bottom: 12px;
          object-fit: cover;
        }

        .team-card h3 {
          margin-bottom: 4px;
          font-size: 18px;
          color: #2a7a0e;
          font-weight: bold;
        }

        .team-card p {
          font-size: 14px;
          color: #444;
          margin: 0;
        }
      `})]})};function rv(){return r.jsx(Ly,{})}function ov(){const{id:l}=Px(),s=Nl.find(c=>c.id===Number(l));return s?r.jsxs("div",{className:"seed-details-page",children:[r.jsxs("div",{className:"seed-details-container",children:[r.jsx("div",{className:"seed-detail-img-box",children:r.jsx("img",{src:s.image,alt:s.name})}),r.jsxs("div",{className:"seed-info",children:[r.jsx("h2",{children:s.name}),r.jsx("p",{className:"brand",children:s.brand}),r.jsxs("div",{className:"price-section",children:[r.jsxs("span",{className:"price",children:["₹",s.price]}),r.jsxs("span",{className:"mrp",children:["₹",s.mrp]})]}),r.jsxs("select",{className:"pack-select",children:[r.jsx("option",{children:"Pack Size: 10g"}),r.jsx("option",{children:"Pack Size: 25g"}),r.jsx("option",{children:"Pack Size: 50g"})]}),r.jsxs("div",{className:"btn-row",children:[r.jsx("button",{className:"buy-btn",children:"Buy Now"}),r.jsx("button",{className:"cart-btn",children:"Add to Cart"})]})]})]}),r.jsx("style",{children:`
        .seed-details-page { max-width:1300px;margin:auto;padding:40px 20px; }
        .seed-details-container { display:flex;flex-wrap:wrap;gap:40px; }

        .seed-detail-img-box { flex:1;min-width:260px;background:#fafafa;border-radius:12px;overflow:hidden; }
        .seed-detail-img-box img { width:100%;height:100%;object-fit:cover; }

        .seed-info { flex:1;min-width:260px; }
        .seed-info h2 { font-size:26px;color:#2a7a0e;margin-bottom:6px; }
        .brand { font-size:15px;color:#777;margin-bottom:18px; }

        .price-section { display:flex;gap:10px;margin-bottom:18px; }
        .price { font-size:24px;font-weight:700;color:#2a7a0e; }
        .mrp { font-size:18px;color:#999;text-decoration:line-through; }

        .pack-select { padding:10px;width:200px;margin-bottom:18px;border-radius:6px;border:1px solid #ccc; }

        .btn-row { display:flex;gap:12px;margin-top:10px; }
        .buy-btn,.cart-btn {
          padding:12px 20px;border-radius:6px;border:none;font-size:15px;
          cursor:pointer;transition: .3s;font-weight:600;
        }
        .buy-btn { background:#2a7a0e;color:#fff; }
        .cart-btn { background:#fff;border:1px solid #2a7a0e;color:#2a7a0e; }
        .cart-btn:hover { background:#2a7a0e;color:#fff; }

        @media(max-width:700px){
          .seed-details-container { flex-direction:column; }
        }
      `})]}):r.jsx("h2",{style:{textAlign:"center",marginTop:"40px"},children:"Seed Not Found"})}const sv=()=>{const[l,s]=E.useState(""),[c,u]=E.useState("All"),[f,p]=E.useState("default"),[h,x]=E.useState(1),b=12,m=["All",...new Set(Bi.map(V=>V.brand))];let y=Bi.filter(V=>V.name.toLowerCase().includes(l.toLowerCase()));c!=="All"&&(y=y.filter(V=>V.brand===c)),f==="low"&&y.sort((V,w)=>V.price-w.price),f==="high"&&y.sort((V,w)=>w.price-V.price),f==="rating"&&y.sort((V,w)=>w.rating-V.rating);const j=Math.ceil(y.length/b),L=y.slice((h-1)*b,h*b);return r.jsxs("div",{className:"fert-page",children:[r.jsx("h2",{className:"fert-title",children:"Fertilizers"}),r.jsxs("div",{className:"fert-filters",children:[r.jsx("input",{placeholder:"Search Fertilizers...",value:l,onChange:V=>s(V.target.value)}),r.jsx("select",{value:c,onChange:V=>u(V.target.value),children:m.map((V,w)=>r.jsx("option",{children:V},w))}),r.jsxs("select",{value:f,onChange:V=>p(V.target.value),children:[r.jsx("option",{value:"default",children:"Sort"}),r.jsx("option",{value:"low",children:"Price Low → High"}),r.jsx("option",{value:"high",children:"Price High → Low"}),r.jsx("option",{value:"rating",children:"Rating"})]})]}),r.jsx("div",{className:"fert-grid",children:L.map(V=>r.jsx(Qm,{item:V},V.id))}),r.jsxs("div",{className:"fert-pagination",children:[r.jsx("button",{disabled:h===1,onClick:()=>x(h-1),children:"⟵ Prev"}),r.jsxs("span",{children:["Page ",h," of ",j]}),r.jsx("button",{disabled:h===j,onClick:()=>x(h+1),children:"Next ⟶"})]}),r.jsx("style",{children:`
        .fert-page { max-width:1300px;margin:auto;padding:40px 20px; }
        .fert-title { text-align:center;font-size:28px;font-weight:700;color:#2a7a0e;margin-bottom:25px; }

        .fert-filters { display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:25px; }
        .fert-filters input,.fert-filters select {
          padding:10px 14px;border:1px solid #ccc;border-radius:6px;font-size:15px;
        }

        .fert-grid { display:grid;grid-template-columns: repeat(auto-fit,minmax(180px,1fr));gap:20px; }

        .fert-pagination { display:flex;justify-content:center;gap:15px;margin-top:30px;align-items:center; }
        .fert-pagination button { background:#2a7a0e;color:#fff;border:none;padding:8px 18px;border-radius:6px;font-weight:600; }
        .fert-pagination button:disabled { background:#ccc; }
      `})]})};function cv(){return r.jsx(sv,{})}const uv=()=>{const[l,s]=E.useState(""),c=yo.filter(u=>u.name.toLowerCase().includes(l.toLowerCase()));return r.jsxs("div",{className:"mach-page",children:[r.jsx("h2",{className:"mach-title",children:"Farm Machinery"}),r.jsx("div",{className:"mach-search-box",children:r.jsx("input",{placeholder:"Search machinery...",value:l,onChange:u=>s(u.target.value)})}),r.jsx("div",{className:"mach-grid",children:c.map(u=>r.jsx(Ym,{item:u},u.id))}),r.jsx("style",{children:`
        .mach-page { max-width:1300px;margin:auto;padding:40px 20px; }
        .mach-title { text-align:center;font-size:28px;font-weight:700;color:#2a7a0e;margin-bottom:25px; }

        .mach-search-box { display:flex;justify-content:center;margin-bottom:25px; }
        .mach-search-box input {
          padding:10px 14px;border:1px solid #ccc;border-radius:6px;font-size:15px;width:280px;
        }

        .mach-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
        gap:20px; }
      `})]})};function fv(){return r.jsx(uv,{})}const dv=()=>{const[l,s]=E.useState(""),[c,u]=E.useState("All");let f=Zy();return c!=="All"&&(f=f.filter(p=>p.category===c)),f=f.filter(p=>p.name.toLowerCase().includes(l.toLowerCase())),r.jsxs("div",{className:"bs-page",children:[r.jsx("h2",{className:"bs-page-title",children:"Best Selling Products"}),r.jsxs("div",{className:"bs-filters",children:[r.jsx("input",{placeholder:"Search products...",value:l,onChange:p=>s(p.target.value)}),r.jsxs("select",{value:c,onChange:p=>u(p.target.value),children:[r.jsx("option",{children:"All"}),r.jsx("option",{value:"seeds",children:"Seeds"}),r.jsx("option",{value:"fertilizers",children:"Fertilizers"}),r.jsx("option",{value:"machinery",children:"Farm Machinery"})]})]}),r.jsx("div",{className:"bs-grid",children:f.map(p=>r.jsx(Zm,{item:p},p.id))}),r.jsx("style",{children:`
        .bs-page { max-width:1300px;margin:auto;padding:40px 20px; }
        .bs-page-title { text-align:center;font-size:28px;font-weight:700;color:#2a7a0e;margin-bottom:25px; }

        .bs-filters { display:flex;gap:12px;justify-content:center;margin-bottom:25px; }
        .bs-filters input,.bs-filters select {
          padding:10px 14px;border:1px solid #ccc;border-radius:6px;font-size:15px;
        }

        .bs-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px; }
      `})]})};function pv(){return r.jsx(dv,{})}let Xm=[{firstName:"Raju",lastName:"Seeds",email:"vendor@gmail.com",password:"123",phoneNumber:"9876543210",businessName:"Raju Seeds Store",businessType:"Seed Supplier",address:"Guntur, Andhra Pradesh",city:"Guntur",state:"AP",pincode:"522001"}];const Jc=JSON.parse(localStorage.getItem("vendorDB"));Jc&&Jc.length>0&&(Xm=Jc);const hv=(l,s)=>{const c=Xm.find(u=>u.email===l&&u.password===s);if(!c)throw new Error("Invalid Email or Password");return sessionStorage.setItem("vendorSession",JSON.stringify(c)),c};let zl=[{id:1,name:"Hybrid Tomato Seeds",category:"Seeds",price:150,stock:50,description:"High-yield hybrid tomato seeds ideal for warm climates.",image:"https://images.unsplash.com/photo-1603048297172-1d5a2608a2cc?auto=format&fit=crop&w=400&q=60"},{id:2,name:"Organic Fertilizer",category:"Fertilizers",price:350,stock:30,description:"Natural fertilizer with organic nutrients for soil enrichment.",image:"https://images.unsplash.com/photo-1590747854873-2c0e59c2a734?auto=format&fit=crop&w=400&q=60"},{id:3,name:"Power Sprayer",category:"Machinery",price:12e3,stock:10,description:"Durable sprayer suitable for all types of crops.",image:"https://images.unsplash.com/photo-1602526218600-8ef2e779a58c?auto=format&fit=crop&w=400&q=60"}];const Pc=async()=>Promise.resolve(zl),mv=async l=>{const s={id:Date.now(),...l};return zl.push(s),Promise.resolve(s)},gv=async(l,s)=>(zl=zl.map(c=>c.id===l?{...c,...s}:c),Promise.resolve(s)),xv=async l=>(zl=zl.filter(s=>s.id!==l),Promise.resolve(!0)),bv=()=>{const[l,s]=E.useState(!0),[c,u]=E.useState(!1),[f,p]=E.useState(""),[h,x]=E.useState(""),[b,m]=E.useState(""),[y,j]=E.useState(!1),L=ya(),V=async w=>{w.preventDefault(),m(""),j(!0);try{const R=hv(f,h);alert(`Welcome ${R.firstName}!`),L("/vendor")}catch(R){m(R.message)}finally{j(!1)}};return r.jsxs(r.Fragment,{children:[r.jsx(fo,{}),r.jsx("div",{style:{paddingTop:"120px"},children:r.jsx("div",{className:"login-container",children:r.jsxs("div",{className:"login-card",children:[r.jsx("h2",{children:"Vendor Login"}),r.jsx("p",{children:"Manage your store, products & customers"}),r.jsxs("div",{className:"login-toggle",children:[r.jsx("button",{className:l?"active":"",onClick:()=>s(!0),children:"Email Login"}),r.jsx("button",{className:l?"":"active",onClick:()=>s(!1),children:"Phone Login"})]}),r.jsxs("form",{className:"login-form",onSubmit:V,children:[r.jsx("input",{type:l?"email":"tel",placeholder:l?"Enter your email":"Enter your phone number",value:f,onChange:w=>p(w.target.value),required:!0}),r.jsxs("div",{className:"password-field",children:[r.jsx("input",{type:c?"text":"password",placeholder:"Enter your password",value:h,onChange:w=>x(w.target.value),required:!0}),r.jsx("span",{className:"toggle-password",onClick:()=>u(!c),children:c?"Hide":"Show"})]}),b&&r.jsx("p",{className:"error-text",children:b}),r.jsx("button",{type:"submit",className:"login-btn",disabled:y,children:y?"Logging in...":"Login"})]}),r.jsx("div",{className:"divider",children:r.jsx("span",{children:"OR"})}),r.jsxs("div",{className:"sso-icons",children:[r.jsx("a",{className:"sso-btn google",children:r.jsx(uu,{size:22})}),r.jsx("a",{className:"sso-btn github",children:r.jsx(du,{size:20})}),r.jsx("a",{className:"sso-btn facebook",children:r.jsx(fu,{size:20})}),r.jsx("a",{className:"sso-btn linkedin",children:r.jsx(pu,{size:20})})]}),r.jsxs("p",{className:"signup-text",children:["New Vendor? ",r.jsx(be,{to:"/vendor-register",children:"Register Here"})]})]})})}),r.jsx("style",{children:`
        .login-container { 
          display:flex; 
          justify-content:center; 
          align-items:center;
          min-height:100vh; 
          background:linear-gradient(135deg,#e8f5e9,#f1f8e9); 
          padding:1rem; 
          margin-top: -120px; /* Adjust for fixed navbar height */
        }

        .login-card { 
          background:#fff; 
          padding:2.5rem 2rem; 
          border-radius:15px;
          box-shadow:0 6px 25px rgba(0,0,0,0.1); 
          width:100%; 
          max-width:420px; 
          text-align:center; 
          transition:0.3s; 
        }
        .login-card:hover { 
          transform:translateY(-3px); 
          box-shadow:0 8px 25px rgba(0,0,0,0.15); 
        }

        h2 { color:#2a7a0e; margin-bottom:0.5rem; }
        p { color:#555; margin-bottom:1.5rem; }

        .login-toggle { 
          display:flex; 
          justify-content:center; 
          margin-bottom:1.2rem;
          background:#f3f4f6; 
          border-radius:10px; 
          overflow:hidden; 
        }
        .login-toggle button { 
          flex:1; 
          padding:0.7rem; 
          border:none; 
          background:transparent;
          font-weight:500; 
          color:#555; 
          cursor:pointer; 
          transition:0.3s; 
        }
        .login-toggle button.active { 
          background:#2a7a0e; 
          color:#fff; 
        }

        .login-form { display:flex; flex-direction:column; gap:1rem; }

        .login-form input, 
        .password-field input { 
          width:100%; 
          padding:0.9rem; 
          border:1px solid #ccc;
          border-radius:8px; 
          font-size:1rem; 
          outline:none;
        }

        .password-field { position:relative; }

        .toggle-password { 
          position:absolute; 
          right:12px; 
          top:50%; 
          transform:translateY(-50%);
          color:#2a7a0e; 
          font-size:0.9rem; 
          cursor:pointer; 
          font-weight:600; 
          user-select:none; 
        }

        .error-text { 
          color:red; 
          font-size:0.9rem; 
        }

        .login-btn { 
          background:#2a7a0e; 
          color:#fff; 
          padding:0.9rem; 
          border:none;
          border-radius:8px; 
          cursor:pointer; 
          font-weight:600; 
        }

        .divider { 
          margin:1.5rem 0; 
          color:#888; 
        }

        .sso-icons { 
          display:flex; 
          justify-content:center; 
          gap:1rem; 
        }

        .sso-btn { 
          width:45px; 
          height:45px; 
          border-radius:50%; 
          display:flex; 
          justify-content:center; 
          align-items:center;
          box-shadow:0 3px 10px rgba(0,0,0,0.15); 
          cursor:pointer; 
          transition:0.3s; 
        }

        .signup-text a { 
          color:#2a7a0e; 
          font-weight:600; 
          text-decoration:none; 
        }
      `})]})},yv=()=>{const l=ya(),[s,c]=E.useState(!1),[u,f]=E.useState({firstName:"",lastName:"",email:"",phoneNumber:"",password:"",businessName:"",businessType:"",gstNumber:"",address:"",city:"",state:"",pincode:""}),[p,h]=E.useState(null),[x,b]=E.useState(null),m=V=>{f({...u,[V.target.name]:V.target.value})},y=V=>{h(V.target.files[0])},j=V=>{b(V.target.files[0])},L=async V=>{V.preventDefault(),c(!0);const w=new FormData;Object.keys(u).forEach(R=>w.append(R,u[R])),p&&w.append("businessCertificate",p),x&&w.append("profileImage",x);try{const R=await registerVendor(w);alert("Vendor Registration Successful ✅ Please wait for approval."),l("/vendor-login")}catch(R){alert(R.message||"Registration failed")}finally{c(!1)}};return r.jsxs("div",{className:"reg-container",children:[r.jsxs("div",{className:"reg-card",children:[r.jsx("h2",{children:"Vendor Registration"}),r.jsx("p",{children:"Register your business and start selling on AgriTech"}),r.jsxs("form",{className:"reg-form",onSubmit:L,children:[r.jsxs("div",{className:"row",children:[r.jsx("input",{type:"text",name:"firstName",placeholder:"First Name",onChange:m,required:!0}),r.jsx("input",{type:"text",name:"lastName",placeholder:"Last Name",onChange:m,required:!0})]}),r.jsx("input",{type:"email",name:"email",placeholder:"Email",onChange:m,required:!0}),r.jsx("input",{type:"tel",name:"phoneNumber",placeholder:"Phone Number",onChange:m,required:!0}),r.jsx("input",{type:"password",name:"password",placeholder:"Password",onChange:m,required:!0}),r.jsx("input",{type:"text",name:"businessName",placeholder:"Business / Shop Name",onChange:m,required:!0}),r.jsxs("select",{name:"businessType",onChange:m,required:!0,children:[r.jsx("option",{value:"",children:"Select Business Type"}),r.jsx("option",{value:"Seed Supplier",children:"Seed Supplier"}),r.jsx("option",{value:"Farmer Producer Group",children:"Farmer Producer Group"}),r.jsx("option",{value:"Fertilizer Dealer",children:"Fertilizer Dealer"}),r.jsx("option",{value:"Machinery Supplier",children:"Machinery Supplier"})]}),r.jsx("input",{type:"text",name:"gstNumber",placeholder:"GST Number (Optional)",onChange:m}),r.jsx("textarea",{name:"address",placeholder:"Full Business Address",rows:"3",onChange:m,required:!0}),r.jsxs("div",{className:"row",children:[r.jsx("input",{type:"text",name:"city",placeholder:"City",onChange:m,required:!0}),r.jsx("input",{type:"text",name:"state",placeholder:"State",onChange:m,required:!0})]}),r.jsx("input",{type:"number",name:"pincode",placeholder:"Pincode",onChange:m,required:!0}),r.jsx("label",{children:"Upload Business Certificate (PDF/JPG/PNG)"}),r.jsx("input",{type:"file",onChange:y,required:!0}),r.jsx("label",{children:"Profile Image (Optional)"}),r.jsx("input",{type:"file",onChange:j}),r.jsx("button",{type:"submit",className:"reg-btn",disabled:s,children:s?"Registering...":"Register"})]})]}),r.jsx("style",{children:`
        .reg-container { display:flex; justify-content:center; align-items:center; padding:2rem; background:#f5fff4; }
        .reg-card { background:#fff; padding:2rem; border-radius:12px; box-shadow:0 6px 25px rgba(0,0,0,0.12); width:100%; max-width:550px; }
        h2 { color:#2a7a0e; text-align:center; }
        .reg-form { display:flex; flex-direction:column; gap:1rem; }
        .row { display:flex; gap:1rem; }
        input, select, textarea { width:100%; padding:0.9rem; border:1px solid #ccc; border-radius:8px; }
        input:focus, select:focus, textarea:focus { border-color:#2a7a0e; box-shadow:0 0 5px rgba(42,122,14,0.2); }
        .reg-btn { background:#2a7a0e; color:#fff; padding:0.9rem; border:none; border-radius:8px; font-weight:600; cursor:pointer; }
      `})]})};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Av=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,c,u)=>u?u.toUpperCase():c.toLowerCase()),_h=l=>{const s=Av(l);return s.charAt(0).toUpperCase()+s.slice(1)},Fm=(...l)=>l.filter((s,c,u)=>!!s&&s.trim()!==""&&u.indexOf(s)===c).join(" ").trim(),jv=l=>{for(const s in l)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=E.forwardRef(({color:l="currentColor",size:s=24,strokeWidth:c=2,absoluteStrokeWidth:u,className:f="",children:p,iconNode:h,...x},b)=>E.createElement("svg",{ref:b,...wv,width:s,height:s,stroke:l,strokeWidth:u?Number(c)*24/Number(s):c,className:Fm("lucide",f),...!p&&!jv(x)&&{"aria-hidden":"true"},...x},[...h.map(([m,y])=>E.createElement(m,y)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=(l,s)=>{const c=E.forwardRef(({className:u,...f},p)=>E.createElement(Sv,{ref:p,iconNode:s,className:Fm(`lucide-${vv(_h(l))}`,`lucide-${l}`,u),...f}));return c.displayName=_h(l),c};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Jm=it("bell",Ev);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],zv=it("chevron-left",Nv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ov=it("chevron-right",Cv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Bv=it("circle-plus",Tv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Mv=it("circle-user-round",Rv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Uv=it("circle-x",Dv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Lv=it("clipboard-list",Hv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Vv=it("funnel",qv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Qv=it("info",kv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Gv=it("layout-dashboard",Yv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Zv=it("log-out",Kv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Fv=it("menu",Xv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Pv=it("moon",Jv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Iv=it("package",Wv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],$v=it("pen",_v);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],t2=it("phone",e2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],n2=it("save",a2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],i2=it("search",l2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],o2=it("settings",r2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],c2=it("smartphone",s2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],f2=it("sun",u2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],p2=it("user",d2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],m2=it("wrench",h2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],x2=it("x",g2);function b2({onAddProduct:l}){const s=ya();return r.jsxs("header",{className:"vendor-navbar-inner",children:[r.jsx("div",{className:"nav-left",children:r.jsx("h2",{children:"🌿 Vendor Dashboard"})}),r.jsxs("div",{className:"nav-right",children:[r.jsxs("button",{className:"add-btn",onClick:()=>{l?l():s("/vendor/products")},children:[r.jsx(Bv,{size:18})," Add Product"]}),r.jsxs("div",{className:"icon-btn",title:"Notifications",children:[r.jsx(Jm,{size:20}),r.jsx("span",{className:"badge",children:"3"})]}),r.jsxs("div",{className:"vendor-profile",children:[r.jsx(Mv,{size:28}),r.jsx("span",{className:"name",children:"GreenGrow Traders"})]})]}),r.jsx("style",{jsx:"true",children:`
        .vendor-navbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 24px;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-left h2 {
          color: #1f5d09;
          font-weight: 800;
          font-size: 1.2rem;
          margin: 0;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .add-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #2a7a0e;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 8px 12px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .add-btn:hover {
          transform: translateY(-2px);
        }

        .icon-btn {
          position: relative;
          cursor: pointer;
          color: #333;
        }

        .icon-btn .badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: red;
          color: white;
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 999px;
        }

        .vendor-profile {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #2a7a0e;
          font-weight: 600;
        }

        .vendor-profile .name {
          font-size: 0.95rem;
        }

        @media (max-width: 520px) {
          .nav-right {
            gap: 8px;
          }
          .add-btn {
            padding: 6px 8px;
            font-size: 0.9rem;
          }
        }
      `})]})}function y2(){const l=ya(),s=da(),[c,u]=E.useState(!1),[f,p]=E.useState(!0);E.useEffect(()=>{const m=window.matchMedia("(max-width: 992px)"),y=j=>{const L=j.matches;u(L),p(!L)};return y(m),m.addEventListener?.("change",y),m.addListener?.(y),()=>{m.removeEventListener?.("change",y),m.removeListener?.(y)}},[]),E.useEffect(()=>{c&&p(!1)},[s.pathname,c]);const h=()=>{sessionStorage.removeItem("vendorSession"),l("/vendor-login")},x=[{to:"/vendor/dashboard",icon:Gv,label:"Dashboard"},{to:"/vendor/products",icon:Iv,label:"Products"},{to:"/vendor/orders",icon:Lv,label:"Orders"},{to:"/vendor/profile",icon:p2,label:"Profile"},{to:"/vendor/settings",icon:o2,label:"Settings"}],b=[{to:"/vendor/about",icon:Qv,label:"About Us"},{to:"/vendor/services",icon:m2,label:"Services"},{to:"/vendor/contact",icon:t2,label:"Contact Us"}];return r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"hamburger",onClick:()=>p(m=>!m),"aria-label":f?"Close sidebar":"Open sidebar",children:f?r.jsx(x2,{size:20}):r.jsx(Fv,{size:20})}),c&&f&&r.jsx("div",{className:"overlay",onClick:()=>p(!1)}),r.jsxs("aside",{className:`vendor-sidebar ${f?"open":"closed"}`,children:[r.jsxs("div",{className:"sidebar-header",children:[r.jsx("div",{className:"logo",children:"🌿"}),r.jsx("h2",{className:"title",children:"Vendor Panel"})]}),r.jsxs("nav",{className:"nav",children:[r.jsx("div",{className:"nav-group-title",children:"MAIN MENU"}),x.map(({to:m,icon:y,label:j})=>r.jsxs(_c,{to:m,onClick:()=>c&&p(!1),className:({isActive:L})=>`nav-item ${L?"active":""}`,children:[r.jsx(y,{size:18}),r.jsx("span",{children:j})]},m)),r.jsx("div",{className:"nav-group-title",style:{marginTop:"10px"},children:"MORE"}),b.map(({to:m,icon:y,label:j})=>r.jsxs(_c,{to:m,onClick:()=>c&&p(!1),className:({isActive:L})=>`nav-item ${L?"active":""}`,children:[r.jsx(y,{size:18}),r.jsx("span",{children:j})]},m))]}),r.jsx("div",{className:"bottom",children:r.jsxs("button",{className:"logout",onClick:h,children:[r.jsx(Zv,{size:16})," Logout"]})})]}),r.jsx("style",{jsx:"true",children:`
        :root {
          --sidebar-width: 250px;
          --navbar-height: 65px;
        }

        /* Hamburger */
        .hamburger {
          position: fixed;
          top: 14px;
          left: 14px;
          background: #2a7a0e;
          border: none;
          padding: 8px;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          z-index: 3000;
        }

        @media (min-width: 993px) {
          .hamburger {
            display: none;
          }
        }

        /* Overlay */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 2500;
        }

        /* Sidebar Container */
        .vendor-sidebar {
          width: var(--sidebar-width);
          height: calc(100vh - var(--navbar-height));
          background: linear-gradient(180deg, #1d4f07, #256f0d);
          position: sticky;
          top: var(--navbar-height);
          color: white;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease;
          box-shadow: 2px 0 12px rgba(0, 0, 0, 0.25);
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: none; /* Firefox */
        }

        .vendor-sidebar::-webkit-scrollbar {
          display: none; /* Chrome */
        }

        /* Closed sidebar (mobile) */
        .vendor-sidebar.closed {
          transform: translateX(-100%);
        }

        /* Header */
        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        .logo {
          background: #3ca82a;
          width: 42px;
          height: 42px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          font-size: 22px;
        }

        .title {
          font-size: 1.2rem;
          font-weight: 800;
        }

        /* Nav area */
        .nav {
          flex: 1;
          padding: 10px;
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: none;
        }

        .nav::-webkit-scrollbar {
          display: none;
        }

        .nav-group-title {
          font-size: 0.75rem;
          color: #d4f6d2;
          text-transform: uppercase;
          margin: 10px 0 6px 8px;
          font-weight: bold;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          color: #eaffea;
          text-decoration: none;
          border-radius: 8px;
          transition: 0.15s;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .nav-item.active {
          background: rgba(70, 200, 80, 0.32);
          box-shadow: inset 4px 0 0 #7fff84;
          color: white;
        }

        /* Bottom logout section */
        .bottom {
          padding: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .logout {
          width: 100%;
          padding: 10px;
          background: white;
          border: none;
          border-radius: 8px;
          color: #1f5d09;
          font-weight: bold;
          cursor: pointer;
        }

        .logout:hover {
          background: #eaffea;
        }

        @media (max-width: 992px) {
          .vendor-sidebar {
            position: fixed;
            left: 0;
            top: var(--navbar-height);
            height: calc(100vh - var(--navbar-height));
          }
        }
      `})]})}function v2(){return r.jsxs("div",{className:"vendor-layout",children:[r.jsx("header",{className:"vendor-navbar",children:r.jsx(b2,{})}),r.jsxs("div",{className:"vendor-body",children:[r.jsx("div",{className:"vendor-sidebar-wrapper",children:r.jsx(y2,{})}),r.jsx("main",{className:"vendor-content",children:r.jsx(ub,{})})]}),r.jsx("style",{jsx:"true",children:`
        :root {
          --sidebar-width: 250px;
          --navbar-height: 65px;
          --border-color: rgba(0, 0, 0, 0.06);
        }

        .vendor-layout {
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 100%;
          background: #f8fff8;
          font-family: "Poppins", sans-serif;
          overflow: hidden;
        }

        .vendor-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--navbar-height);
          z-index: 2000;
          background: transparent; /* VendorNavbar component has its own background */
        }

        .vendor-body {
          display: flex;
          flex: 1;
          margin-top: var(--navbar-height);
          height: calc(100vh - var(--navbar-height));
          min-height: 0; /* important for children scroll */
        }

        /* wrapper for sidebar - used for transforms if needed */
        .vendor-sidebar-wrapper {
          width: var(--sidebar-width);
          min-width: var(--sidebar-width);
          height: calc(100vh - var(--navbar-height));
          position: relative;
          z-index: 1500;
          flex-shrink: 0;
        }

        .vendor-content {
          flex: 1;
          background: #ffffff;
          padding: 24px 32px;
          height: calc(100vh - var(--navbar-height));
          overflow-y: auto;
          box-shadow: inset 8px 0 8px -8px rgba(0, 0, 0, 0.08);
          min-width: 0; /* allow children to shrink */
        }

        /* custom scrollbar */
        .vendor-content::-webkit-scrollbar {
          width: 8px;
        }
        .vendor-content::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.12);
          border-radius: 6px;
        }

        @media (max-width: 992px) {
          .vendor-body {
            flex-direction: column;
            height: auto;
          }
          .vendor-sidebar-wrapper {
            width: 100%;
            min-width: 100%;
            position: relative;
            height: auto;
          }
          .vendor-content {
            margin-top: 0;
            height: auto;
            padding: 16px;
            box-shadow: none;
          }
        }
      `})]})}const A2=()=>{const l=[{label:"Mon",value:12},{label:"Tue",value:18},{label:"Wed",value:10},{label:"Thu",value:25},{label:"Fri",value:30},{label:"Sat",value:20},{label:"Sun",value:15}],s=[{name:"Organic Fertilizer",sales:240},{name:"Hybrid Tomato Seeds",sales:190},{name:"Power Sprayer",sales:160},{name:"Wheat Seeds",sales:120}];return r.jsxs("div",{className:"vendor-dashboard",children:[r.jsxs("section",{className:"header-section",children:[r.jsx("div",{className:"welcome",children:"Welcome, Raju 👋"}),r.jsx("h1",{className:"heading",children:"Vendor Overview"}),r.jsx("p",{className:"sub",children:"Your business performance insights this week."})]}),r.jsxs("section",{className:"stats",children:[r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"icon",children:"🌾"}),r.jsx("h4",{children:"Products"}),r.jsx("p",{children:"18"}),r.jsx("span",{className:"delta",children:"+5%"})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"icon",children:"🛒"}),r.jsx("h4",{children:"Orders"}),r.jsx("p",{children:"45"}),r.jsx("span",{className:"delta",children:"+12%"})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"icon",children:"💰"}),r.jsx("h4",{children:"Earnings"}),r.jsx("p",{children:"₹42,000"}),r.jsx("span",{className:"delta",children:"+8%"})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"icon",children:"⭐"}),r.jsx("h4",{children:"Rating"}),r.jsx("p",{children:"4.6 / 5"}),r.jsx("span",{className:"delta",children:"+0.2"})]})]}),r.jsxs("section",{className:"cards",children:[r.jsxs("div",{className:"panel",children:[r.jsxs("div",{className:"panel-head",children:[r.jsx("h3",{children:"Weekly Sales"}),r.jsx("span",{className:"hint",children:"Last 7 days"})]}),r.jsx("div",{className:"bar-chart",children:l.map(c=>r.jsxs("div",{className:"bar-wrap",children:[r.jsx("div",{className:"bar",style:{height:`${c.value*6}px`},title:`${c.label}: ${c.value} orders`}),r.jsx("span",{className:"lbl",children:c.label})]},c.label))})]}),r.jsxs("div",{className:"panel",children:[r.jsxs("div",{className:"panel-head",children:[r.jsx("h3",{children:"Top Selling Products"}),r.jsx("span",{className:"hint",children:"Based on order volume"})]}),r.jsx("ul",{className:"list",children:s.map(c=>r.jsxs("li",{className:"li",children:[r.jsx("span",{children:c.name}),r.jsx("span",{className:"pill",children:c.sales})]},c.name))})]})]}),r.jsx("style",{jsx:"true",children:`
        .vendor-dashboard {
          width: 100%;
          min-height: 100%;
          background: #f8fff8;
          padding-bottom: 20px;
        }

        /* === Header === */
        .header-section {
          background: #f0fff4;
          padding: 16px 20px;
          border-radius: 10px;
          margin-bottom: 20px;
        }

        .welcome {
          font-size: 1rem;
          color: #2a7a0e;
          font-weight: 600;
        }

        .heading {
          font-size: 1.8rem;
          font-weight: 800;
          color: #1f5d09;
          margin: 4px 0;
        }

        .sub {
          color: #5b7b54;
          font-size: 0.95rem;
        }

        /* === Stats === */
        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 18px;
          margin-bottom: 24px;
        }

        .stat-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 18px;
          text-align: center;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }

        .icon {
          font-size: 1.8rem;
          margin-bottom: 6px;
        }

        .stat-card h4 {
          color: #2a7a0e;
          font-size: 1rem;
          margin: 0;
        }

        .stat-card p {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1f5d09;
          margin: 6px 0;
        }

        .delta {
          font-size: 0.85rem;
          color: #22c55e;
          font-weight: 600;
        }

        /* === Cards Section === */
        .cards {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 18px;
        }

        .panel {
          background: #ffffff;
          border-radius: 14px;
          padding: 18px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
        }

        .panel-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .panel-head h3 {
          color: #2a7a0e;
          font-size: 1rem;
          font-weight: 700;
        }

        .hint {
          font-size: 0.85rem;
          color: #64748b;
        }

        /* === Bar Chart === */
        .bar-chart {
          display: flex;
          align-items: flex-end;
          gap: 12px;
          height: 200px;
          padding: 8px 0;
        }

        .bar-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .bar {
          width: 26px;
          background: linear-gradient(180deg, #4ade80, #15803d);
          border-radius: 6px 6px 0 0;
          transition: all 0.3s ease;
        }

        .bar:hover {
          transform: scaleY(1.1);
          background: linear-gradient(180deg, #22c55e, #166534);
        }

        .lbl {
          font-size: 0.8rem;
          color: #475569;
        }

        /* === Product List === */
        .list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .li:hover {
          background: #f0fff4;
          transform: translateX(3px);
        }

        .pill {
          background: #dcfce7;
          color: #166534;
          font-weight: 700;
          padding: 5px 10px;
          border-radius: 999px;
          border: 1px solid #bbf7d0;
        }

        /* === Responsive === */
        @media (max-width: 1200px) {
          .cards {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .heading {
            font-size: 1.5rem;
          }
          .stats {
            grid-template-columns: 1fr 1fr;
          }
          .panel {
            padding: 14px;
          }
        }
      `})]})};function j2({products:l,onView:s,onEdit:c,onDelete:u}){return r.jsxs("section",{className:"product-grid",children:[l.length>0?l.map(f=>r.jsxs("div",{className:"product-card",children:[r.jsx("div",{className:"image-wrapper",onClick:()=>s(f),children:r.jsx("img",{src:f.image||"https://via.placeholder.com/400x300?text=No+Image",alt:f.name,className:"product-image"})}),r.jsxs("div",{className:"product-info",children:[r.jsx("h4",{onClick:()=>s(f),children:f.name}),r.jsx("p",{className:"category",children:f.category}),r.jsxs("div",{className:"meta",children:[r.jsxs("span",{className:"price",children:["₹",f.price]}),r.jsxs("span",{className:"stock",children:["Stock: ",f.stock]})]})]}),r.jsxs("div",{className:"actions",children:[r.jsx("button",{className:"edit-btn",onClick:()=>c(f),children:"✏️ Edit"}),r.jsx("button",{className:"delete-btn",onClick:()=>u(f.id),children:"🗑️ Delete"})]})]},f.id)):r.jsx("p",{className:"no-products",children:"No products to display."}),r.jsx("style",{jsx:"true",children:`
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
          margin-top: 12px;
        }

        .product-card {
          background: #fff;
          border: 1px solid #e6efe4;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);
          transition: transform 0.24s ease, box-shadow 0.24s ease;
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
        }

        .image-wrapper {
          width: 100%;
          height: 180px;
          overflow: hidden;
          background: #f3f6f3;
          cursor: pointer;
        }
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .product-card:hover .product-image {
          transform: scale(1.06);
        }

        .product-info {
          padding: 12px 14px;
          flex: 1;
        }
        .product-info h4 {
          color: #1f5d09;
          margin: 0 0 6px;
          font-size: 1.05rem;
          font-weight: 700;
        }
        .product-info h4:hover { color: #3ca82a; }

        .category { color: #6d8a65; font-size: 0.9rem; margin-bottom: 8px; }
        .meta { display:flex; gap:10px; align-items:center; justify-content:space-between; }
        .price { color: #2a7a0e; font-weight:700; }
        .stock { font-size: 0.9rem; color: #556b4a; }

        .actions {
          display:flex;
          gap:8px;
          padding:10px 12px;
          border-top:1px solid #f0f5f0;
        }
        .edit-btn, .delete-btn {
          flex: 1;
          border: none;
          border-radius: 8px;
          padding: 8px;
          font-weight: 700;
          cursor: pointer;
        }
        .edit-btn { background: #eaf8ea; color: #1f5d09; }
        .delete-btn { background: #fff0f0; color: #b30000; }

        .no-products {
          grid-column: 1 / -1;
          text-align: center;
          color: #6b7f68;
          font-weight: 600;
        }

        @media (max-width: 640px) {
          .image-wrapper { height: 150px; }
        }
      `})]})}function w2({product:l,onClose:s,onEdit:c,onDelete:u}){return l?r.jsx("div",{className:"overlay",children:r.jsxs("div",{className:"details-card",children:[r.jsx("div",{className:"image-section",children:r.jsx("img",{src:l.image||"https://via.placeholder.com/300",alt:l.name,className:"product-img"})}),r.jsxs("div",{className:"info-section",children:[r.jsx("h3",{children:l.name}),r.jsxs("p",{children:[r.jsx("strong",{children:"Category:"})," ",l.category]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Price:"})," ₹",l.price]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Stock:"})," ",l.stock]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Description:"})," ",l.description||"No description available."]}),r.jsxs("div",{className:"actions",children:[r.jsx("button",{className:"edit",onClick:()=>c(l),children:"✏️ Edit"}),r.jsx("button",{className:"delete",onClick:()=>u(l.id),children:"🗑️ Delete"}),r.jsx("button",{className:"close",onClick:s,children:"❌ Close"})]})]}),r.jsx("style",{jsx:"true",children:`
          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.45);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
          }
          .details-card {
            background: #fff;
            border-radius: 12px;
            padding: 20px;
            width: 500px;
            max-width: 90%;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
            animation: fadeIn 0.3s ease;
          }
          .image-section {
            text-align: center;
          }
          .product-img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 15px;
          }
          .info-section h3 {
            margin-bottom: 10px;
            color: #1f5d09;
          }
          .info-section p {
            margin: 6px 0;
            color: #444;
          }
          .actions {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          }
          .actions button {
            flex: 1;
            margin: 0 6px;
            padding: 10px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: 0.3s;
          }
          .edit {
            background: #e0f7e0;
            color: #1f5d09;
          }
          .delete {
            background: #ffe6e6;
            color: #b30000;
          }
          .close {
            background: #ccc;
            color: #333;
          }
          .edit:hover {
            background: #c9f6c9;
          }
          .delete:hover {
            background: #ffcccc;
          }
          .close:hover {
            background: #bbb;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `})]})}):null}function S2({formData:l,setFormData:s,onSubmit:c,onCancel:u,editMode:f}){const p=E.useRef(),h=x=>{const b=x.target.files[0];if(b){const m=new FileReader;m.onload=()=>s({...l,image:m.result}),m.readAsDataURL(b)}};return r.jsx("div",{className:"modal-overlay",children:r.jsxs("div",{className:"modal",children:[r.jsx("h3",{children:f?"Edit Product":"Add New Product"}),r.jsxs("form",{onSubmit:c,children:[r.jsx("input",{type:"text",placeholder:"Product Name",value:l.name,onChange:x=>s({...l,name:x.target.value}),required:!0}),r.jsx("input",{type:"text",placeholder:"Category",value:l.category,onChange:x=>s({...l,category:x.target.value}),required:!0}),r.jsx("input",{type:"number",placeholder:"Price (₹)",value:l.price,onChange:x=>s({...l,price:x.target.value}),required:!0}),r.jsx("input",{type:"number",placeholder:"Stock Quantity",value:l.stock,onChange:x=>s({...l,stock:x.target.value}),required:!0}),r.jsx("textarea",{placeholder:"Product Description",value:l.description,onChange:x=>s({...l,description:x.target.value})}),r.jsxs("div",{className:"upload-section",children:[r.jsx("label",{children:"Upload Product Image:"}),r.jsx("input",{type:"file",accept:"image/*",ref:p,onChange:h}),l.image&&r.jsx("img",{src:l.image,alt:"preview",className:"preview"})]}),r.jsxs("div",{className:"form-actions",children:[r.jsx("button",{type:"submit",children:f?"Update Product":"Add Product"}),r.jsx("button",{type:"button",onClick:u,children:"Cancel"})]})]}),r.jsx("style",{jsx:"true",children:`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
          }
          .modal {
            background: #fff;
            border-radius: 12px;
            padding: 25px;
            width: 420px;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
            animation: fadeIn 0.3s ease-in-out;
          }
          h3 {
            color: #2a7a0e;
            margin-bottom: 18px;
          }
          input, textarea {
            width: 100%;
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 6px;
            border: 1px solid #ccc;
            outline: none;
          }
          textarea {
            height: 70px;
            resize: none;
          }
          .upload-section {
            margin-top: 10px;
          }
          .preview {
            width: 100%;
            height: 150px;
            border-radius: 6px;
            object-fit: cover;
            margin-top: 8px;
            border: 1px solid #ddd;
          }
          .form-actions {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
          }
          .form-actions button {
            padding: 10px 16px;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
          }
          .form-actions button:first-child {
            background: #2a7a0e;
            color: white;
          }
          .form-actions button:last-child {
            background: #ccc;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `})]})})}function E2(){const[l,s]=E.useState([]),[c,u]=E.useState(null),[f,p]=E.useState(!1),[h,x]=E.useState(!1),[b,m]=E.useState({name:"",category:"",price:"",stock:"",description:"",image:""});E.useEffect(()=>{Pc().then(s)},[]);const y=async R=>{R.preventDefault(),h&&c?await gv(c.id,b):await mv(b);const D=await Pc();s(D),p(!1),x(!1),u(null),m({name:"",category:"",price:"",stock:"",description:"",image:""})},j=R=>{u(R),m(R),x(!0),p(!0)},L=R=>{u(R)},V=async R=>{if(window.confirm("Are you sure you want to delete this product?")){await xv(R);const D=await Pc();s(D),u(null)}},w=()=>{m({name:"",category:"",price:"",stock:"",description:"",image:""}),x(!1),p(!0)};return r.jsxs("div",{className:"vendor-layout",children:[r.jsx("div",{className:"sidebar-area"}),r.jsxs("div",{className:"main-content",children:[r.jsxs("header",{className:"page-header",children:[r.jsx("h2",{children:"Vendor Product Management"}),r.jsx("p",{children:"Manage, edit, and track your listed products easily."}),r.jsx("button",{className:"add-btn",onClick:w,children:"➕ Add Product"})]}),r.jsx(j2,{products:l,onView:L,onEdit:j,onDelete:V}),c&&!f&&r.jsx(w2,{product:c,onClose:()=>u(null),onEdit:()=>j(c),onDelete:V}),f&&r.jsx(S2,{formData:b,setFormData:m,onSubmit:y,onCancel:()=>p(!1),editMode:h})]}),r.jsx("style",{jsx:"true",children:`
        .vendor-layout {
          display: flex;
          min-height: 100vh;
          background: #f8fff8;
        }
        .sidebar-area {
          width: 250px;
          background: linear-gradient(180deg, #1f5d09, #2a7a0e);
        }
        .main-content {
          flex: 1;
          padding: 30px;
        }
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .page-header h2 {
          color: #2a7a0e;
          margin: 0;
        }
        .add-btn {
          background: #2a7a0e;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 10px 18px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }
        .add-btn:hover {
          background: #3ca82a;
          transform: scale(1.05);
        }
      `})]})}function N2(){const[l,s]=E.useState(""),c=[{id:"ORD-1001",customer:"Rahul Sharma",amount:1899,status:"Pending",date:"2025-02-10"},{id:"ORD-1002",customer:"Priya Verma",amount:2999,status:"Shipped",date:"2025-02-09"},{id:"ORD-1003",customer:"Arun Kumar",amount:1199,status:"Delivered",date:"2025-02-08"},{id:"ORD-1004",customer:"Meghana Rao",amount:899,status:"Cancelled",date:"2025-02-07"},{id:"ORD-1005",customer:"Suresh R",amount:2499,status:"Delivered",date:"2025-02-06"}],u={Pending:"#eab308",Shipped:"#3b82f6",Delivered:"#16a34a",Cancelled:"#dc2626"};return r.jsxs("div",{className:"orders-page",children:[r.jsxs("div",{className:"header",children:[r.jsx("h1",{children:"📦 Orders"}),r.jsx("p",{children:"Manage your orders, view details, update statuses, and track progress."})]}),r.jsxs("div",{className:"actions",children:[r.jsxs("div",{className:"search-box",children:[r.jsx(i2,{size:18}),r.jsx("input",{type:"text",placeholder:"Search by Order ID or Customer Name...",value:l,onChange:f=>s(f.target.value)})]}),r.jsxs("button",{className:"filter-btn",children:[r.jsx(Vv,{size:18}),"Filter"]})]}),r.jsx("div",{className:"table-wrapper",children:r.jsxs("table",{className:"order-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Order ID"}),r.jsx("th",{children:"Customer"}),r.jsx("th",{children:"Amount"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Date"}),r.jsx("th",{children:"Action"})]})}),r.jsx("tbody",{children:c.filter(f=>f.id.toLowerCase().includes(l.toLowerCase())||f.customer.toLowerCase().includes(l.toLowerCase())).map(f=>r.jsxs("tr",{children:[r.jsx("td",{children:f.id}),r.jsx("td",{children:f.customer}),r.jsxs("td",{children:["₹",f.amount]}),r.jsx("td",{children:r.jsx("span",{className:"status",style:{background:u[f.status]+"22",color:u[f.status],border:`1px solid ${u[f.status]}55`},children:f.status})}),r.jsx("td",{children:f.date}),r.jsx("td",{children:r.jsx("button",{className:"view-btn",children:"View"})})]},f.id))})]})}),r.jsxs("div",{className:"pagination",children:[r.jsx("button",{className:"page-btn",children:r.jsx(zv,{size:18})}),r.jsx("span",{className:"page-number",children:"1"}),r.jsx("button",{className:"page-btn",children:r.jsx(Ov,{size:18})})]}),r.jsx("style",{jsx:"true",children:`
        .orders-page {
          animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Header */
        .header h1 {
          margin: 0;
          color: #1f5d09;
          font-size: 28px;
          font-weight: 800;
        }
        .header p {
          margin: 4px 0 20px;
          color: #475569;
        }

        /* Search + Filter */
        .actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #d1d5db;
          padding: 8px 12px;
          border-radius: 8px;
          background: white;
          width: 300px;
        }

        .search-box input {
          border: none;
          outline: none;
          flex: 1;
          font-size: 14px;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #2a7a0e;
          border: none;
          padding: 10px 16px;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.2s;
        }

        .filter-btn:hover {
          background: #35a012;
        }

        /* Table */
        .table-wrapper {
          overflow-x: auto;
          background: #ffffff;
          padding: 12px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .order-table {
          width: 100%;
          border-collapse: collapse;
        }

        .order-table th {
          text-align: left;
          padding: 14px 12px;
          background: #f0fdf4;
          color: #145108;
          font-weight: 600;
        }

        .order-table td {
          padding: 12px;
          border-bottom: 1px solid #e5e7eb;
        }

        .order-table tr:hover {
          background: #f9fff9;
        }

        .status {
          padding: 5px 10px;
          font-size: 12px;
          border-radius: 6px;
          font-weight: 600;
        }

        .view-btn {
          background: #e8f5e9;
          padding: 6px 12px;
          border: none;
          border-radius: 6px;
          color: #1f5d09;
          font-weight: 600;
          cursor: pointer;
        }
        .view-btn:hover {
          background: #d7f5d8;
        }

        /* Pagination */
        .pagination {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
        }

        .page-btn {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: none;
          background: #f1f5f9;
          cursor: pointer;
        }

        .page-number {
          font-size: 16px;
          font-weight: 700;
        }

        @media(max-width: 768px) {
          .actions {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }
          .search-box {
            width: 100%;
          }
        }
      `})]})}function z2(){const[l,s]=E.useState({name:"GreenGrow Traders",email:"vendor@grow.com",phone:"9876543210",shopName:"GreenGrow Organic Store",address:"Hyderabad, Telangana",gst:"22ABCDE1234F2Z5"}),[c,u]=E.useState(!1),[f,p]=E.useState(!1),[h,x]=E.useState(l),b=j=>{x({...h,[j.target.name]:j.target.value})},m=()=>{s(h),u(!1)},y=()=>{console.log("Vendor Account Deactivated!"),alert("Vendor account has been deactivated."),p(!1)};return r.jsxs("div",{className:"profile-page",children:[r.jsx("h1",{className:"title",children:"👤 Vendor Profile"}),r.jsx("p",{className:"subtitle",children:"View and manage your vendor profile information."}),r.jsxs("div",{className:"profile-card",children:[r.jsxs("div",{className:"avatar-section",children:[r.jsx("div",{className:"avatar",children:r.jsx("img",{src:"https://i.ibb.co/3kL4m7x/profile-avatar.png",alt:"Vendor Avatar"})}),r.jsx("h2",{children:l.name}),r.jsx("p",{className:"shop",children:l.shopName})]}),r.jsxs("div",{className:"details",children:[r.jsxs("div",{className:"info-row",children:[r.jsx("strong",{children:"Email:"}),r.jsx("span",{children:l.email})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("strong",{children:"Phone:"}),r.jsx("span",{children:l.phone})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("strong",{children:"Shop Name:"}),r.jsx("span",{children:l.shopName})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("strong",{children:"Address:"}),r.jsx("span",{children:l.address})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("strong",{children:"GST Number:"}),r.jsx("span",{children:l.gst})]}),r.jsxs("div",{className:"actions",children:[r.jsxs("button",{className:"edit-btn",onClick:()=>u(!0),children:[r.jsx($v,{size:16})," Edit Profile"]}),r.jsxs("button",{className:"deactivate-btn",onClick:()=>p(!0),children:[r.jsx(Uv,{size:16})," Deactivate Account"]})]})]})]}),c&&r.jsx("div",{className:"modal-overlay",children:r.jsxs("div",{className:"modal",children:[r.jsx("h2",{children:"Edit Profile"}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Name"}),r.jsx("input",{name:"name",value:h.name,onChange:b})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Email"}),r.jsx("input",{name:"email",value:h.email,onChange:b})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Phone"}),r.jsx("input",{name:"phone",value:h.phone,onChange:b})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Shop Name"}),r.jsx("input",{name:"shopName",value:h.shopName,onChange:b})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Address"}),r.jsx("textarea",{name:"address",value:h.address,onChange:b,rows:"2"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"GST Number"}),r.jsx("input",{name:"gst",value:h.gst,onChange:b})]}),r.jsxs("div",{className:"modal-actions",children:[r.jsx("button",{className:"save-btn",onClick:m,children:"Save Changes"}),r.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"})]})]})}),f&&r.jsx("div",{className:"modal-overlay",children:r.jsxs("div",{className:"modal small",children:[r.jsx("h3",{children:"Are you sure?"}),r.jsx("p",{children:"This action will permanently deactivate your vendor account."}),r.jsxs("div",{className:"modal-actions",children:[r.jsx("button",{className:"danger-btn",onClick:y,children:"Yes, Deactivate"}),r.jsx("button",{className:"cancel-btn",onClick:()=>p(!1),children:"Cancel"})]})]})}),r.jsx("style",{jsx:"true",children:`
        .profile-page {
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .title {
          color: #145108;
          font-size: 28px;
          font-weight: 800;
          margin: 0;
        }

        .subtitle {
          color: #475569;
          margin-bottom: 20px;
        }

        /* Profile Card */
        .profile-card {
          background: #ffffff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
        }

        /* Avatar */
        .avatar-section {
          text-align: center;
          min-width: 240px;
        }
        .avatar img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 12px;
        }
        h2 {
          margin: 0;
          color: #1b4d0a;
          font-size: 22px;
        }
        .shop {
          color: #475569;
          margin-top: 6px;
        }

        /* Details */
        .details {
          flex: 2;
        }

        .info-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .actions {
          margin-top: 20px;
          display: flex;
          gap: 12px;
        }

        .edit-btn {
          background: #2a7a0e;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .deactivate-btn {
          background: #fee2e2;
          color: #b91c1c;
          border: none;
          padding: 10px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* MODAL COMMON */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 5000;
        }

        .modal {
          background: white;
          padding: 22px;
          border-radius: 12px;
          width: 420px;
          animation: popup 0.3s ease;
        }

        @keyframes popup {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .modal.small {
          width: 350px;
          text-align: center;
        }

        .modal h2, .modal h3 {
          margin: 0 0 10px;
          color: #145108;
        }

        .modal p {
          color: #475569;
          margin-bottom: 15px;
        }

        .form-group {
          margin-bottom: 12px;
        }

        .form-group label {
          font-weight: 600;
          margin-bottom: 4px;
          display: block;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          outline: none;
        }

        .modal-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
        }

        .save-btn {
          background: #2a7a0e;
          border: none;
          padding: 10px 16px;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
        }

        .cancel-btn {
          background: #e5e7eb;
          border: none;
          padding: 10px 16px;
          color: #374151;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
        }

        .danger-btn {
          background: #dc2626;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
        }

        @media(max-width: 680px) {
          .profile-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]})}function C2(){const[l,s]=E.useState({businessName:"GreenGrow Traders",email:"vendor@grow.com",phone:"9876543210"}),[c,u]=E.useState({currentPwd:"",newPwd:"",confirmPwd:""}),[f,p]=E.useState({email:!0,sms:!1}),[h,x]=E.useState(!1),[b,m]=E.useState(!1);function y(D){s(X=>({...X,[D.target.name]:D.target.value}))}function j(D){u(X=>({...X,[D.target.name]:D.target.value}))}function L(D){p(X=>({...X,[D]:!X[D]}))}function V(){m(!0),setTimeout(()=>{m(!1),alert("Account settings saved.")},700)}function w(){if(!c.currentPwd||!c.newPwd){alert("Please fill required password fields.");return}if(c.newPwd!==c.confirmPwd){alert("New password and confirm password do not match.");return}m(!0),setTimeout(()=>{m(!1),u({currentPwd:"",newPwd:"",confirmPwd:""}),alert("Password updated successfully.")},900)}function R(){m(!0),setTimeout(()=>{m(!1),alert("Preferences saved.")},600)}return r.jsxs("div",{className:"settings-page",children:[r.jsxs("header",{className:"header",children:[r.jsx("h1",{children:"⚙️ Settings"}),r.jsx("p",{children:"Manage account, security and notifications for your vendor account."})]}),r.jsxs("div",{className:"grid",children:[r.jsxs("section",{className:"card",children:[r.jsx("h2",{children:"Account"}),r.jsx("p",{className:"muted",children:"Basic business contact information."}),r.jsxs("div",{className:"form",children:[r.jsxs("label",{children:["Business Name",r.jsx("input",{name:"businessName",value:l.businessName,onChange:y})]}),r.jsxs("label",{children:["Email",r.jsx("input",{name:"email",value:l.email,onChange:y})]}),r.jsxs("label",{children:["Phone",r.jsx("input",{name:"phone",value:l.phone,onChange:y})]}),r.jsx("div",{className:"row",children:r.jsxs("button",{className:"btn primary",onClick:V,disabled:b,children:[r.jsx(n2,{size:14})," ",b?"Saving...":"Save Account"]})})]})]}),r.jsxs("section",{className:"card",children:[r.jsx("h2",{children:"Security"}),r.jsx("p",{className:"muted",children:"Change your password to keep your account secure."}),r.jsxs("div",{className:"form",children:[r.jsxs("label",{children:["Current Password",r.jsx("input",{name:"currentPwd",type:"password",value:c.currentPwd,onChange:j})]}),r.jsxs("label",{children:["New Password",r.jsx("input",{name:"newPwd",type:"password",value:c.newPwd,onChange:j})]}),r.jsxs("label",{children:["Confirm New Password",r.jsx("input",{name:"confirmPwd",type:"password",value:c.confirmPwd,onChange:j})]}),r.jsx("div",{className:"row",children:r.jsx("button",{className:"btn danger",onClick:w,children:"Change Password"})})]})]}),r.jsxs("section",{className:"card",children:[r.jsx("h2",{children:"Notifications & Preferences"}),r.jsx("p",{className:"muted",children:"Control how you receive notifications and app preferences."}),r.jsxs("div",{className:"form",children:[r.jsxs("div",{className:"toggle-row",children:[r.jsxs("div",{className:"label",children:[r.jsx(Jm,{})," Email Notifications"]}),r.jsxs("label",{className:"switch",children:[r.jsx("input",{type:"checkbox",checked:f.email,onChange:()=>L("email")}),r.jsx("span",{className:"slider"})]})]}),r.jsxs("div",{className:"toggle-row",children:[r.jsxs("div",{className:"label",children:[r.jsx(c2,{})," SMS Notifications"]}),r.jsxs("label",{className:"switch",children:[r.jsx("input",{type:"checkbox",checked:f.sms,onChange:()=>L("sms")}),r.jsx("span",{className:"slider"})]})]}),r.jsxs("div",{className:"toggle-row",children:[r.jsx("div",{className:"label",children:"Theme"}),r.jsxs("button",{className:"theme-toggle",onClick:()=>x(D=>!D),children:[h?r.jsx(Pv,{}):r.jsx(f2,{})," ",h?"Dark":"Light"]})]}),r.jsx("div",{className:"row",children:r.jsx("button",{className:"btn",onClick:R,children:"Save Preferences"})})]})]})]}),r.jsx("style",{jsx:"true",children:`
        .settings-page {
          animation: fadeIn 0.35s ease;
        }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: translateY(0) } }

        .header h1 {
          margin: 0;
          color: #145108;
          font-size: 26px;
          font-weight: 800;
        }
        .header p { margin: 6px 0 18px; color: #556b57; }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .card {
          background: #fff;
          padding: 18px;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.04);
        }

        .card h2 { margin: 0 0 6px; color: #1f5d09; }
        .muted { color: #6b7769; margin-bottom: 12px; }

        .form label {
          display: block;
          margin-bottom: 10px;
          font-weight: 600;
          color: #234d09;
        }
        .form input[type="text"],
        .form input[type="password"],
        .form input[type="email"] {
          width: 100%;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          margin-top: 6px;
          font-size: 14px;
        }

        .row {
          margin-top: 12px;
          display: flex;
          gap: 10px;
        }

        .btn {
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid rgba(0,0,0,0.06);
          background: #f3faf3;
          color: #135007;
          font-weight: 700;
          cursor: pointer;
        }
        .btn.primary {
          background: #2a7a0e;
          color: #fff;
          display: inline-flex;
          gap: 8px;
          align-items: center;
        }
        .btn.danger {
          background: #fee2e2;
          color: #9b1c1c;
          border: none;
        }

        .toggle-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px dashed #eef6ee;
        }
        .toggle-row .label {
          display: flex;
          gap: 8px;
          align-items: center;
          color: #234d09;
          font-weight: 600;
        }

        /* switch */
        .switch { position: relative; display: inline-block; width: 48px; height: 26px; }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #cfe9cf;
          transition: .2s;
          border-radius: 999px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 18px; width: 18px;
          left: 4px; top: 4px;
          background: white;
          transition: .2s;
          border-radius: 50%;
        }
        .switch input:checked + .slider { background: #2a7a0e; }
        .switch input:checked + .slider:before { transform: translateX(22px); }

        .theme-toggle {
          background: transparent;
          border: 1px solid #e6f4e6;
          padding: 8px 12px;
          border-radius: 8px;
          display: inline-flex;
          gap: 8px;
          align-items: center;
          cursor: pointer;
          color: #145108;
          font-weight: 700;
        }

        @media (max-width: 980px) {
          .grid { grid-template-columns: 1fr; }
        }
      `})]})}const O2=[{email:"admin@gmail.com",phone:"1234567890",password:"123",firstName:"Super"}],T2=(l,s)=>{const c=O2.find(u=>(u.email===l||u.phone===l)&&u.password===s);if(!c)throw new Error("Invalid admin credentials.");return c},B2=()=>{const[l,s]=E.useState(!0),[c,u]=E.useState(!1),[f,p]=E.useState(""),[h,x]=E.useState(""),[b,m]=E.useState(""),[y,j]=E.useState(!1),L=ya(),V=async w=>{w.preventDefault(),m(""),j(!0);try{const R=T2(f,h);alert(`Welcome Admin ${R.firstName}!`),L("/admin")}catch(R){m(R.message)}finally{j(!1)}};return r.jsxs(r.Fragment,{children:[r.jsx(fo,{}),r.jsx("div",{style:{paddingTop:"120px"},children:r.jsxs("div",{className:"login-container",children:[r.jsxs("div",{className:"login-card",children:[r.jsx("h2",{children:"Admin Login"}),r.jsx("p",{children:"Access admin control panel & manage the system"}),r.jsxs("div",{className:"login-toggle",children:[r.jsx("button",{className:l?"active":"",onClick:()=>s(!0),children:"Email Login"}),r.jsx("button",{className:l?"":"active",onClick:()=>s(!1),children:"Phone Login"})]}),r.jsxs("form",{className:"login-form",onSubmit:V,children:[r.jsx("input",{type:l?"email":"tel",placeholder:l?"Enter admin email":"Enter admin phone",value:f,onChange:w=>p(w.target.value),required:!0}),r.jsxs("div",{className:"password-field",children:[r.jsx("input",{type:c?"text":"password",placeholder:"Enter admin password",value:h,onChange:w=>x(w.target.value),required:!0}),r.jsx("span",{className:"toggle-password",onClick:()=>u(!c),children:c?"Hide":"Show"})]}),b&&r.jsx("p",{className:"error-text",children:b}),r.jsx("button",{type:"submit",className:"login-btn",disabled:y,children:y?"Logging in...":"Login"})]}),r.jsx("div",{className:"divider",children:r.jsx("span",{children:"OR"})}),r.jsxs("div",{className:"sso-icons",children:[r.jsx("a",{className:"sso-btn google",children:r.jsx(uu,{size:22})}),r.jsx("a",{className:"sso-btn github",children:r.jsx(du,{size:20})}),r.jsx("a",{className:"sso-btn facebook",children:r.jsx(fu,{size:20})}),r.jsx("a",{className:"sso-btn linkedin",children:r.jsx(pu,{size:20})})]}),r.jsxs("p",{className:"signup-text",children:["Need an Admin Account? ",r.jsx(be,{to:"/admin-register",children:"Create One"})]})]}),r.jsx("style",{children:`
            .login-container { 
              display:flex; justify-content:center; align-items:center;
              min-height:100vh; background:linear-gradient(135deg,#e8f5e9,#f1f8e9);
              padding:1rem; 
              margin-top: -120px; 
            }

            .login-card { 
              background:#fff; padding:2.5rem 2rem; border-radius:15px;
              box-shadow:0 6px 25px rgba(0,0,0,0.1); width:100%;
              max-width:420px; text-align:center; transition:0.3s; 
            }

            .login-card:hover { 
              transform:translateY(-3px); 
              box-shadow:0 8px 25px rgba(0,0,0,0.15); 
            }

            h2 { color:#2a7a0e; margin-bottom:0.5rem; }
            p { color:#555; margin-bottom:1.5rem; }

            .login-toggle { 
              display:flex; justify-content:center; margin-bottom:1.2rem;
              background:#f3f4f6; border-radius:10px; overflow:hidden; 
            }

            .login-toggle button { 
              flex:1; padding:0.7rem; border:none; background:transparent;
              font-weight:500; color:#444; cursor:pointer; transition:0.3s; 
            }

            .login-toggle button.active { 
              background:#2a7a0e; color:#fff; 
            }

            .login-form { display:flex; flex-direction:column; gap:1rem; }

            .login-form input { 
              width:100%; padding:0.9rem; border:1px solid #ccc;
              border-radius:8px; font-size:1rem; outline:none; 
            }

            .password-field { position:relative; }

            .toggle-password { 
              position:absolute; right:12px; top:50%; transform:translateY(-50%);
              color:#2a7a0e; font-size:0.9rem; cursor:pointer;
              font-weight:600; 
            }

            .error-text { color:red; font-size:0.9rem; }

            .login-btn { 
              background:#2a7a0e; color:#fff; padding:0.9rem; border:none;
              border-radius:8px; cursor:pointer; font-weight:600; transition:0.3s; 
            }

            .login-btn:hover {
              background:#3ca82a;
            }

            .divider { margin:1.5rem 0; color:#999; }

            .sso-icons { display:flex; justify-content:center; gap:1rem; }

            .sso-btn { 
              width:45px; height:45px; border-radius:50%;
              display:flex; justify-content:center; align-items:center;
              box-shadow:0 3px 10px rgba(0,0,0,0.15); cursor:pointer; 
            }

            .sso-btn.google { background:#fff; border:1px solid #ddd; color:#000; }
            .sso-btn.github { background:#333; color:white; }
            .sso-btn.facebook { background:#1877f2; color:white; }
            .sso-btn.linkedin { background:#0077b5; color:white; }

            .signup-text a { color:#2a7a0e; font-weight:600; text-decoration:none; }
          `})]})})]})};function R2(){return r.jsx(r.Fragment,{children:r.jsxs(db,{children:[r.jsx(Pe,{path:"/",element:r.jsx(iv,{})}),r.jsx(Pe,{path:"/login",element:r.jsx(Oy,{})}),r.jsx(Pe,{path:"/register",element:r.jsx(Ty,{})}),r.jsx(Pe,{path:"/contact",element:r.jsx(Ph,{})}),r.jsx(Pe,{path:"/services",element:r.jsx(Wh,{})}),r.jsx(Pe,{path:"/about",element:r.jsx(Ih,{})}),r.jsx(Pe,{path:"/category/vegetable-seeds",element:r.jsx(rv,{})}),r.jsx(Pe,{path:"/seeds/:id",element:r.jsx(ov,{})}),r.jsx(Pe,{path:"/category/fertilizers",element:r.jsx(cv,{})}),r.jsx(Pe,{path:"/category/farm-machinery",element:r.jsx(fv,{})}),r.jsx(Pe,{path:"/offers-today",element:r.jsx(av,{})}),r.jsx(Pe,{path:"/best-selling",element:r.jsx(pv,{})}),r.jsx(Pe,{path:"/vendor-login",element:r.jsx(bv,{})}),r.jsx(Pe,{path:"/vendor-register",element:r.jsx(yv,{})}),r.jsxs(Pe,{path:"/vendor",element:r.jsx(v2,{}),children:[r.jsx(Pe,{index:!0,element:r.jsx(cb,{to:"dashboard",replace:!0})}),r.jsx(Pe,{path:"dashboard",element:r.jsx(A2,{})}),r.jsx(Pe,{path:"products",element:r.jsx(E2,{})}),r.jsx(Pe,{path:"orders",element:r.jsx(N2,{})}),r.jsx(Pe,{path:"profile",element:r.jsx(z2,{})}),r.jsx(Pe,{path:"about",element:r.jsx(Ih,{})}),r.jsx(Pe,{path:"services",element:r.jsx(Wh,{})}),r.jsx(Pe,{path:"contact",element:r.jsx(Ph,{})}),r.jsx(Pe,{path:"settings",element:r.jsx(C2,{})})]}),r.jsx(Pe,{path:"/admin-login",element:r.jsx(B2,{})}),r.jsx(Pe,{path:"*",element:r.jsx("div",{style:{padding:40},children:"404 Not Found"})})]})})}function M2(){const{pathname:l,key:s}=da(),c=E.useRef({});return E.useEffect(()=>{const u=c.current[s];if(u!==void 0){requestAnimationFrame(()=>{window.scrollTo({top:u,behavior:"auto"})});return}requestAnimationFrame(()=>{window.scrollTo({top:0,behavior:"smooth"})});const f=()=>{c.current[s]=window.scrollY};return window.addEventListener("beforeunload",f),()=>window.removeEventListener("beforeunload",f)},[l,s]),null}xx.createRoot(document.getElementById("root")).render(r.jsx(E.StrictMode,{children:r.jsxs(Ub,{basename:"/AgriTechUl",children:[r.jsx(M2,{}),r.jsx(R2,{})]})}));
