(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function l(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(u){if(u.ep)return;u.ep=!0;const f=l(u);fetch(u.href,f)}})();function $1(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var _c={exports:{}},Hr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _h;function eb(){if(_h)return Hr;_h=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function l(o,u,f){var p=null;if(f!==void 0&&(p=""+f),u.key!==void 0&&(p=""+u.key),"key"in u){f={};for(var g in u)g!=="key"&&(f[g]=u[g])}else f=u;return u=f.ref,{$$typeof:r,type:o,key:p,ref:u!==void 0?u:null,props:f}}return Hr.Fragment=s,Hr.jsx=l,Hr.jsxs=l,Hr}var $h;function tb(){return $h||($h=1,_c.exports=eb()),_c.exports}var n=tb(),$c={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function ab(){if(em)return Ne;em=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),E=Symbol.iterator;function S(A){return A===null||typeof A!="object"?null:(A=E&&A[E]||A["@@iterator"],typeof A=="function"?A:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,z={};function H(A,U,I){this.props=A,this.context=U,this.refs=z,this.updater=I||j}H.prototype.isReactComponent={},H.prototype.setState=function(A,U){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,U,"setState")},H.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function R(){}R.prototype=H.prototype;function V(A,U,I){this.props=A,this.context=U,this.refs=z,this.updater=I||j}var re=V.prototype=new R;re.constructor=V,O(re,H.prototype),re.isPureReactComponent=!0;var W=Array.isArray;function le(){}var te={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function ie(A,U,I){var se=I.ref;return{$$typeof:r,type:A,key:U,ref:se!==void 0?se:null,props:I}}function pe(A,U){return ie(A.type,U,A.props)}function _(A){return typeof A=="object"&&A!==null&&A.$$typeof===r}function X(A){var U={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(I){return U[I]})}var ee=/\/+/g;function ge(A,U){return typeof A=="object"&&A!==null&&A.key!=null?X(""+A.key):U.toString(36)}function Me(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(le,le):(A.status="pending",A.then(function(U){A.status==="pending"&&(A.status="fulfilled",A.value=U)},function(U){A.status==="pending"&&(A.status="rejected",A.reason=U)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function T(A,U,I,se,ye){var we=typeof A;(we==="undefined"||we==="boolean")&&(A=null);var He=!1;if(A===null)He=!0;else switch(we){case"bigint":case"string":case"number":He=!0;break;case"object":switch(A.$$typeof){case r:case s:He=!0;break;case b:return He=A._init,T(He(A._payload),U,I,se,ye)}}if(He)return ye=ye(A),He=se===""?"."+ge(A,0):se,W(ye)?(I="",He!=null&&(I=He.replace(ee,"$&/")+"/"),T(ye,U,I,"",function(Bt){return Bt})):ye!=null&&(_(ye)&&(ye=pe(ye,I+(ye.key==null||A&&A.key===ye.key?"":(""+ye.key).replace(ee,"$&/")+"/")+He)),U.push(ye)),1;He=0;var nt=se===""?".":se+":";if(W(A))for(var Je=0;Je<A.length;Je++)se=A[Je],we=nt+ge(se,Je),He+=T(se,U,I,we,ye);else if(Je=S(A),typeof Je=="function")for(A=Je.call(A),Je=0;!(se=A.next()).done;)se=se.value,we=nt+ge(se,Je++),He+=T(se,U,I,we,ye);else if(we==="object"){if(typeof A.then=="function")return T(Me(A),U,I,se,ye);throw U=String(A),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return He}function J(A,U,I){if(A==null)return A;var se=[],ye=0;return T(A,se,"","",function(we){return U.call(I,we,ye++)}),se}function ue(A){if(A._status===-1){var U=A._result;U=U(),U.then(function(I){(A._status===0||A._status===-1)&&(A._status=1,A._result=I)},function(I){(A._status===0||A._status===-1)&&(A._status=2,A._result=I)}),A._status===-1&&(A._status=0,A._result=U)}if(A._status===1)return A._result.default;throw A._result}var K=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},fe={map:J,forEach:function(A,U,I){J(A,function(){U.apply(this,arguments)},I)},count:function(A){var U=0;return J(A,function(){U++}),U},toArray:function(A){return J(A,function(U){return U})||[]},only:function(A){if(!_(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return Ne.Activity=v,Ne.Children=fe,Ne.Component=H,Ne.Fragment=l,Ne.Profiler=u,Ne.PureComponent=V,Ne.StrictMode=o,Ne.Suspense=x,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,Ne.__COMPILER_RUNTIME={__proto__:null,c:function(A){return te.H.useMemoCache(A)}},Ne.cache=function(A){return function(){return A.apply(null,arguments)}},Ne.cacheSignal=function(){return null},Ne.cloneElement=function(A,U,I){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var se=O({},A.props),ye=A.key;if(U!=null)for(we in U.key!==void 0&&(ye=""+U.key),U)!ce.call(U,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&U.ref===void 0||(se[we]=U[we]);var we=arguments.length-2;if(we===1)se.children=I;else if(1<we){for(var He=Array(we),nt=0;nt<we;nt++)He[nt]=arguments[nt+2];se.children=He}return ie(A.type,ye,se)},Ne.createContext=function(A){return A={$$typeof:p,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:f,_context:A},A},Ne.createElement=function(A,U,I){var se,ye={},we=null;if(U!=null)for(se in U.key!==void 0&&(we=""+U.key),U)ce.call(U,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ye[se]=U[se]);var He=arguments.length-2;if(He===1)ye.children=I;else if(1<He){for(var nt=Array(He),Je=0;Je<He;Je++)nt[Je]=arguments[Je+2];ye.children=nt}if(A&&A.defaultProps)for(se in He=A.defaultProps,He)ye[se]===void 0&&(ye[se]=He[se]);return ie(A,we,ye)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(A){return{$$typeof:g,render:A}},Ne.isValidElement=_,Ne.lazy=function(A){return{$$typeof:b,_payload:{_status:-1,_result:A},_init:ue}},Ne.memo=function(A,U){return{$$typeof:h,type:A,compare:U===void 0?null:U}},Ne.startTransition=function(A){var U=te.T,I={};te.T=I;try{var se=A(),ye=te.S;ye!==null&&ye(I,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(le,K)}catch(we){K(we)}finally{U!==null&&I.types!==null&&(U.types=I.types),te.T=U}},Ne.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},Ne.use=function(A){return te.H.use(A)},Ne.useActionState=function(A,U,I){return te.H.useActionState(A,U,I)},Ne.useCallback=function(A,U){return te.H.useCallback(A,U)},Ne.useContext=function(A){return te.H.useContext(A)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(A,U){return te.H.useDeferredValue(A,U)},Ne.useEffect=function(A,U){return te.H.useEffect(A,U)},Ne.useEffectEvent=function(A){return te.H.useEffectEvent(A)},Ne.useId=function(){return te.H.useId()},Ne.useImperativeHandle=function(A,U,I){return te.H.useImperativeHandle(A,U,I)},Ne.useInsertionEffect=function(A,U){return te.H.useInsertionEffect(A,U)},Ne.useLayoutEffect=function(A,U){return te.H.useLayoutEffect(A,U)},Ne.useMemo=function(A,U){return te.H.useMemo(A,U)},Ne.useOptimistic=function(A,U){return te.H.useOptimistic(A,U)},Ne.useReducer=function(A,U,I){return te.H.useReducer(A,U,I)},Ne.useRef=function(A){return te.H.useRef(A)},Ne.useState=function(A){return te.H.useState(A)},Ne.useSyncExternalStore=function(A,U,I){return te.H.useSyncExternalStore(A,U,I)},Ne.useTransition=function(){return te.H.useTransition()},Ne.version="19.2.0",Ne}var tm;function Zr(){return tm||(tm=1,$c.exports=ab()),$c.exports}var w=Zr();const xn=$1(w);var eu={exports:{}},qr={},tu={exports:{}},au={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function nb(){return am||(am=1,(function(r){function s(T,J){var ue=T.length;T.push(J);e:for(;0<ue;){var K=ue-1>>>1,fe=T[K];if(0<u(fe,J))T[K]=J,T[ue]=fe,ue=K;else break e}}function l(T){return T.length===0?null:T[0]}function o(T){if(T.length===0)return null;var J=T[0],ue=T.pop();if(ue!==J){T[0]=ue;e:for(var K=0,fe=T.length,A=fe>>>1;K<A;){var U=2*(K+1)-1,I=T[U],se=U+1,ye=T[se];if(0>u(I,ue))se<fe&&0>u(ye,I)?(T[K]=ye,T[se]=ue,K=se):(T[K]=I,T[U]=ue,K=U);else if(se<fe&&0>u(ye,ue))T[K]=ye,T[se]=ue,K=se;else break e}}return J}function u(T,J){var ue=T.sortIndex-J.sortIndex;return ue!==0?ue:T.id-J.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var p=Date,g=p.now();r.unstable_now=function(){return p.now()-g}}var x=[],h=[],b=1,v=null,E=3,S=!1,j=!1,O=!1,z=!1,H=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function re(T){for(var J=l(h);J!==null;){if(J.callback===null)o(h);else if(J.startTime<=T)o(h),J.sortIndex=J.expirationTime,s(x,J);else break;J=l(h)}}function W(T){if(O=!1,re(T),!j)if(l(x)!==null)j=!0,le||(le=!0,X());else{var J=l(h);J!==null&&Me(W,J.startTime-T)}}var le=!1,te=-1,ce=5,ie=-1;function pe(){return z?!0:!(r.unstable_now()-ie<ce)}function _(){if(z=!1,le){var T=r.unstable_now();ie=T;var J=!0;try{e:{j=!1,O&&(O=!1,R(te),te=-1),S=!0;var ue=E;try{t:{for(re(T),v=l(x);v!==null&&!(v.expirationTime>T&&pe());){var K=v.callback;if(typeof K=="function"){v.callback=null,E=v.priorityLevel;var fe=K(v.expirationTime<=T);if(T=r.unstable_now(),typeof fe=="function"){v.callback=fe,re(T),J=!0;break t}v===l(x)&&o(x),re(T)}else o(x);v=l(x)}if(v!==null)J=!0;else{var A=l(h);A!==null&&Me(W,A.startTime-T),J=!1}}break e}finally{v=null,E=ue,S=!1}J=void 0}}finally{J?X():le=!1}}}var X;if(typeof V=="function")X=function(){V(_)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ge=ee.port2;ee.port1.onmessage=_,X=function(){ge.postMessage(null)}}else X=function(){H(_,0)};function Me(T,J){te=H(function(){T(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(T){T.callback=null},r.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<T?Math.floor(1e3/T):5},r.unstable_getCurrentPriorityLevel=function(){return E},r.unstable_next=function(T){switch(E){case 1:case 2:case 3:var J=3;break;default:J=E}var ue=E;E=J;try{return T()}finally{E=ue}},r.unstable_requestPaint=function(){z=!0},r.unstable_runWithPriority=function(T,J){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var ue=E;E=T;try{return J()}finally{E=ue}},r.unstable_scheduleCallback=function(T,J,ue){var K=r.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?K+ue:K):ue=K,T){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ue+fe,T={id:b++,callback:J,priorityLevel:T,startTime:ue,expirationTime:fe,sortIndex:-1},ue>K?(T.sortIndex=ue,s(h,T),l(x)===null&&T===l(h)&&(O?(R(te),te=-1):O=!0,Me(W,ue-K))):(T.sortIndex=fe,s(x,T),j||S||(j=!0,le||(le=!0,X()))),T},r.unstable_shouldYield=pe,r.unstable_wrapCallback=function(T){var J=E;return function(){var ue=E;E=J;try{return T.apply(this,arguments)}finally{E=ue}}}})(au)),au}var nm;function ib(){return nm||(nm=1,tu.exports=nb()),tu.exports}var nu={exports:{}},kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function rb(){if(im)return kt;im=1;var r=Zr();function s(x){var h="https://react.dev/errors/"+x;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)h+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+x+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(s(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(x,h,b){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:v==null?null:""+v,children:x,containerInfo:h,implementation:b}}var p=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(x,h){if(x==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,kt.createPortal=function(x,h){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(s(299));return f(x,h,null,b)},kt.flushSync=function(x){var h=p.T,b=o.p;try{if(p.T=null,o.p=2,x)return x()}finally{p.T=h,o.p=b,o.d.f()}},kt.preconnect=function(x,h){typeof x=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(x,h))},kt.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},kt.preinit=function(x,h){if(typeof x=="string"&&h&&typeof h.as=="string"){var b=h.as,v=g(b,h.crossOrigin),E=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;b==="style"?o.d.S(x,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:E,fetchPriority:S}):b==="script"&&o.d.X(x,{crossOrigin:v,integrity:E,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},kt.preinitModule=function(x,h){if(typeof x=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var b=g(h.as,h.crossOrigin);o.d.M(x,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(x)},kt.preload=function(x,h){if(typeof x=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var b=h.as,v=g(b,h.crossOrigin);o.d.L(x,b,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},kt.preloadModule=function(x,h){if(typeof x=="string")if(h){var b=g(h.as,h.crossOrigin);o.d.m(x,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(x)},kt.requestFormReset=function(x){o.d.r(x)},kt.unstable_batchedUpdates=function(x,h){return x(h)},kt.useFormState=function(x,h,b){return p.H.useFormState(x,h,b)},kt.useFormStatus=function(){return p.H.useHostTransitionStatus()},kt.version="19.2.0",kt}var rm;function sb(){if(rm)return nu.exports;rm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),nu.exports=rb(),nu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function lb(){if(sm)return qr;sm=1;var r=ib(),s=Zr(),l=sb();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(f(e)!==e)throw Error(o(188))}function h(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,i=t;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(i=c.return,i!==null){a=i;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return x(c),e;if(d===i)return x(c),t;d=d.sibling}throw Error(o(188))}if(a.return!==i.return)a=c,i=d;else{for(var m=!1,y=c.child;y;){if(y===a){m=!0,a=c,i=d;break}if(y===i){m=!0,i=c,a=d;break}y=y.sibling}if(!m){for(y=d.child;y;){if(y===a){m=!0,a=d,i=c;break}if(y===i){m=!0,i=d,a=c;break}y=y.sibling}if(!m)throw Error(o(189))}}if(a.alternate!==i)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),V=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),pe=Symbol.for("react.memo_cache_sentinel"),_=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Symbol.for("react.client.reference");function ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case H:return"Profiler";case z:return"StrictMode";case W:return"Suspense";case le:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case V:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return t=e.displayName||null,t!==null?t:ge(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return ge(e(t))}catch{}}return null}var Me=Array.isArray,T=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},K=[],fe=-1;function A(e){return{current:e}}function U(e){0>fe||(e.current=K[fe],K[fe]=null,fe--)}function I(e,t){fe++,K[fe]=e.current,e.current=t}var se=A(null),ye=A(null),we=A(null),He=A(null);function nt(e,t){switch(I(we,t),I(ye,e),I(se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?jh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=jh(t),e=wh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(se),I(se,e)}function Je(){U(se),U(ye),U(we)}function Bt(e){e.memoizedState!==null&&I(He,e);var t=se.current,a=wh(t,e.type);t!==a&&(I(ye,e),I(se,a))}function lt(e){ye.current===e&&(U(se),U(ye)),He.current===e&&(U(He),Br._currentValue=ue)}var Ot,At;function Sa(e){if(Ot===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ot=t&&t[1]||"",At=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ot+e+At}var Kn=!1;function Fn(e,t){if(!e||Kn)return"";Kn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(G){var L=G}Reflect.construct(e,[],Z)}else{try{Z.call()}catch(G){L=G}e.call(Z.prototype)}}else{try{throw Error()}catch(G){L=G}(Z=e())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(G){if(G&&L&&typeof G.stack=="string")return[G.stack,L.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=i.DetermineComponentFrameRoot(),m=d[0],y=d[1];if(m&&y){var N=m.split(`
`),B=y.split(`
`);for(c=i=0;i<N.length&&!N[i].includes("DetermineComponentFrameRoot");)i++;for(;c<B.length&&!B[c].includes("DetermineComponentFrameRoot");)c++;if(i===N.length||c===B.length)for(i=N.length-1,c=B.length-1;1<=i&&0<=c&&N[i]!==B[c];)c--;for(;1<=i&&0<=c;i--,c--)if(N[i]!==B[c]){if(i!==1||c!==1)do if(i--,c--,0>c||N[i]!==B[c]){var Y=`
`+N[i].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=i&&0<=c);break}}}finally{Kn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Sa(a):""}function ql(e,t){switch(e.tag){case 26:case 27:case 5:return Sa(e.type);case 16:return Sa("Lazy");case 13:return e.child!==t&&t!==null?Sa("Suspense Fallback"):Sa("Suspense");case 19:return Sa("SuspenseList");case 0:case 15:return Fn(e.type,!1);case 11:return Fn(e.type.render,!1);case 1:return Fn(e.type,!0);case 31:return Sa("Activity");default:return""}}function bn(e){try{var t="",a=null;do t+=ql(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Fi=Object.prototype.hasOwnProperty,Pn=r.unstable_scheduleCallback,yn=r.unstable_cancelCallback,Zn=r.unstable_shouldYield,Pi=r.unstable_requestPaint,Rt=r.unstable_now,$=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,ae=r.unstable_UserBlockingPriority,ne=r.unstable_NormalPriority,Oe=r.unstable_LowPriority,Te=r.unstable_IdlePriority,Qe=r.log,Q=r.unstable_setDisableYieldValue,P=null,he=null;function me(e){if(typeof Qe=="function"&&Q(e),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(P,e)}catch{}}var de=Math.clz32?Math.clz32:$e,Re=Math.log,_e=Math.LN2;function $e(e){return e>>>=0,e===0?32:31-(Re(e)/_e|0)|0}var Ke=256,ot=262144,et=4194304;function it(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ua(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var c=0,d=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var y=i&134217727;return y!==0?(i=y&~d,i!==0?c=it(i):(m&=y,m!==0?c=it(m):a||(a=y&~e,a!==0&&(c=it(a))))):(y=i&~d,y!==0?c=it(y):m!==0?c=it(m):a||(a=i&~e,a!==0&&(c=it(a)))),c===0?0:t!==0&&t!==c&&(t&d)===0&&(d=c&-c,a=t&-t,d>=a||d===32&&(a&4194048)!==0)?t:c}function Kt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xn(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zi(){var e=et;return et<<=1,(et&62914560)===0&&(et=4194304),e}function In(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Xi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gx(e,t,a,i,c,d){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var y=e.entanglements,N=e.expirationTimes,B=e.hiddenUpdates;for(a=m&~a;0<a;){var Y=31-de(a),Z=1<<Y;y[Y]=0,N[Y]=-1;var L=B[Y];if(L!==null)for(B[Y]=null,Y=0;Y<L.length;Y++){var G=L[Y];G!==null&&(G.lane&=-536870913)}a&=~Z}i!==0&&ad(e,i,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(m&~t))}function ad(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-de(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function nd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-de(a),c=1<<i;c&t|e[i]&t&&(e[i]|=t),a&=~c}}function id(e,t){var a=t&-t;return a=(a&42)!==0?1:Vl(a),(a&(e.suspendedLanes|t))!==0?0:a}function Vl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rd(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Fh(e.type))}function sd(e,t){var a=J.p;try{return J.p=e,t()}finally{J.p=a}}var Pa=Math.random().toString(36).slice(2),St="__reactFiber$"+Pa,Dt="__reactProps$"+Pa,Jn="__reactContainer$"+Pa,Ql="__reactEvents$"+Pa,Qx="__reactListeners$"+Pa,Yx="__reactHandles$"+Pa,ld="__reactResources$"+Pa,Ii="__reactMarker$"+Pa;function Yl(e){delete e[St],delete e[Dt],delete e[Ql],delete e[Qx],delete e[Yx]}function Wn(e){var t=e[St];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Jn]||a[St]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Oh(e);e!==null;){if(a=e[St])return a;e=Oh(e)}return t}e=a,a=e.parentNode}return null}function _n(e){if(e=e[St]||e[Jn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ji(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function $n(e){var t=e[ld];return t||(t=e[ld]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function vt(e){e[Ii]=!0}var od=new Set,cd={};function vn(e,t){ei(e,t),ei(e+"Capture",t)}function ei(e,t){for(cd[e]=t,e=0;e<t.length;e++)od.add(t[e])}var Kx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ud={},dd={};function Fx(e){return Fi.call(dd,e)?!0:Fi.call(ud,e)?!1:Kx.test(e)?dd[e]=!0:(ud[e]=!0,!1)}function ts(e,t,a){if(Fx(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function as(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Na(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function _t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Px(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,d=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,d.call(this,m)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kl(e){if(!e._valueTracker){var t=fd(e)?"checked":"value";e._valueTracker=Px(e,t,""+e[t])}}function pd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=fd(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zx=/[\n"\\]/g;function $t(e){return e.replace(Zx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fl(e,t,a,i,c,d,m,y){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+_t(t)):e.value!==""+_t(t)&&(e.value=""+_t(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Pl(e,m,_t(t)):a!=null?Pl(e,m,_t(a)):i!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+_t(y):e.removeAttribute("name")}function hd(e,t,a,i,c,d,m,y){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),t!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||t!=null)){Kl(e);return}a=a!=null?""+_t(a):"",t=t!=null?""+_t(t):a,y||t===e.value||(e.value=t),e.defaultValue=t}i=i??c,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=y?e.checked:!!i,e.defaultChecked=!!i,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Kl(e)}function Pl(e,t,a){t==="number"&&ns(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ti(e,t,a,i){if(e=e.options,t){t={};for(var c=0;c<a.length;c++)t["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=t.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&i&&(e[a].defaultSelected=!0)}else{for(a=""+_t(a),t=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,i&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function md(e,t,a){if(t!=null&&(t=""+_t(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+_t(a):""}function gd(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(o(92));if(Me(i)){if(1<i.length)throw Error(o(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=_t(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Kl(e)}function ai(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Xx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xd(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Xx.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function bd(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var c in t)i=t[c],t.hasOwnProperty(c)&&a[c]!==i&&xd(e,c,i)}else for(var d in t)t.hasOwnProperty(d)&&xd(e,d,t[d])}function Zl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ix=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function is(e){return Jx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ea(){}var Xl=null;function Il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ni=null,ii=null;function yd(e){var t=_n(e);if(t&&(e=t.stateNode)){var a=e[Dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Fl(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+$t(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var c=i[Dt]||null;if(!c)throw Error(o(90));Fl(i,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&pd(i)}break e;case"textarea":md(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ti(e,!!a.multiple,t,!1)}}}var Jl=!1;function vd(e,t,a){if(Jl)return e(t,a);Jl=!0;try{var i=e(t);return i}finally{if(Jl=!1,(ni!==null||ii!==null)&&(Fs(),ni&&(t=ni,e=ii,ii=ni=null,yd(t),e)))for(t=0;t<e.length;t++)yd(e[t])}}function Wi(e,t){var a=e.stateNode;if(a===null)return null;var i=a[Dt]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=!1;if(Ca)try{var _i={};Object.defineProperty(_i,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",_i,_i),window.removeEventListener("test",_i,_i)}catch{Wl=!1}var Za=null,_l=null,rs=null;function jd(){if(rs)return rs;var e,t=_l,a=t.length,i,c="value"in Za?Za.value:Za.textContent,d=c.length;for(e=0;e<a&&t[e]===c[e];e++);var m=a-e;for(i=1;i<=m&&t[a-i]===c[d-i];i++);return rs=c.slice(e,1<i?1-i:void 0)}function ss(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ls(){return!0}function wd(){return!1}function Lt(e){function t(a,i,c,d,m){this._reactName=a,this._targetInst=c,this.type=i,this.nativeEvent=d,this.target=m,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(a=e[y],this[y]=a?a(d):d[y]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ls:wd,this.isPropagationStopped=wd,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ls)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ls)},persist:function(){},isPersistent:ls}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},os=Lt(jn),$i=v({},jn,{view:0,detail:0}),Wx=Lt($i),$l,eo,er,cs=v({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?($l=e.screenX-er.screenX,eo=e.screenY-er.screenY):eo=$l=0,er=e),$l)},movementY:function(e){return"movementY"in e?e.movementY:eo}}),Ad=Lt(cs),_x=v({},cs,{dataTransfer:0}),$x=Lt(_x),e0=v({},$i,{relatedTarget:0}),to=Lt(e0),t0=v({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),a0=Lt(t0),n0=v({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),i0=Lt(n0),r0=v({},jn,{data:0}),Sd=Lt(r0),s0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=o0[e])?!!t[e]:!1}function ao(){return c0}var u0=v({},$i,{key:function(e){if(e.key){var t=s0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?l0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ao,charCode:function(e){return e.type==="keypress"?ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),d0=Lt(u0),f0=v({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=Lt(f0),p0=v({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ao}),h0=Lt(p0),m0=v({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),g0=Lt(m0),x0=v({},cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b0=Lt(x0),y0=v({},jn,{newState:0,oldState:0}),v0=Lt(y0),j0=[9,13,27,32],no=Ca&&"CompositionEvent"in window,tr=null;Ca&&"documentMode"in document&&(tr=document.documentMode);var w0=Ca&&"TextEvent"in window&&!tr,Ed=Ca&&(!no||tr&&8<tr&&11>=tr),Cd=" ",zd=!1;function Od(e,t){switch(e){case"keyup":return j0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ri=!1;function A0(e,t){switch(e){case"compositionend":return kd(t);case"keypress":return t.which!==32?null:(zd=!0,Cd);case"textInput":return e=t.data,e===Cd&&zd?null:e;default:return null}}function S0(e,t){if(ri)return e==="compositionend"||!no&&Od(e,t)?(e=jd(),rs=_l=Za=null,ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ed&&t.locale!=="ko"?null:t.data;default:return null}}var N0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!N0[e.type]:t==="textarea"}function Rd(e,t,a,i){ni?ii?ii.push(i):ii=[i]:ni=i,t=_s(t,"onChange"),0<t.length&&(a=new os("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var ar=null,nr=null;function E0(e){mh(e,0)}function us(e){var t=Ji(e);if(pd(t))return e}function Md(e,t){if(e==="change")return t}var Bd=!1;if(Ca){var io;if(Ca){var ro="oninput"in document;if(!ro){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),ro=typeof Dd.oninput=="function"}io=ro}else io=!1;Bd=io&&(!document.documentMode||9<document.documentMode)}function Ld(){ar&&(ar.detachEvent("onpropertychange",Ud),nr=ar=null)}function Ud(e){if(e.propertyName==="value"&&us(nr)){var t=[];Rd(t,nr,e,Il(e)),vd(E0,t)}}function C0(e,t,a){e==="focusin"?(Ld(),ar=t,nr=a,ar.attachEvent("onpropertychange",Ud)):e==="focusout"&&Ld()}function z0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return us(nr)}function O0(e,t){if(e==="click")return us(t)}function k0(e,t){if(e==="input"||e==="change")return us(t)}function T0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:T0;function ir(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var c=a[i];if(!Fi.call(t,c)||!Ft(e[c],t[c]))return!1}return!0}function Hd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qd(e,t){var a=Hd(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hd(a)}}function Vd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ns(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ns(e.document)}return t}function so(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var R0=Ca&&"documentMode"in document&&11>=document.documentMode,si=null,lo=null,rr=null,oo=!1;function Qd(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;oo||si==null||si!==ns(i)||(i=si,"selectionStart"in i&&so(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),rr&&ir(rr,i)||(rr=i,i=_s(lo,"onSelect"),0<i.length&&(t=new os("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=si)))}function wn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var li={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionrun:wn("Transition","TransitionRun"),transitionstart:wn("Transition","TransitionStart"),transitioncancel:wn("Transition","TransitionCancel"),transitionend:wn("Transition","TransitionEnd")},co={},Yd={};Ca&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function An(e){if(co[e])return co[e];if(!li[e])return e;var t=li[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Yd)return co[e]=t[a];return e}var Kd=An("animationend"),Fd=An("animationiteration"),Pd=An("animationstart"),M0=An("transitionrun"),B0=An("transitionstart"),D0=An("transitioncancel"),Zd=An("transitionend"),Xd=new Map,uo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uo.push("scrollEnd");function da(e,t){Xd.set(e,t),vn(t,[e])}var ds=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ea=[],oi=0,fo=0;function fs(){for(var e=oi,t=fo=oi=0;t<e;){var a=ea[t];ea[t++]=null;var i=ea[t];ea[t++]=null;var c=ea[t];ea[t++]=null;var d=ea[t];if(ea[t++]=null,i!==null&&c!==null){var m=i.pending;m===null?c.next=c:(c.next=m.next,m.next=c),i.pending=c}d!==0&&Id(a,c,d)}}function ps(e,t,a,i){ea[oi++]=e,ea[oi++]=t,ea[oi++]=a,ea[oi++]=i,fo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function po(e,t,a,i){return ps(e,t,a,i),hs(e)}function Sn(e,t){return ps(e,null,null,t),hs(e)}function Id(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var c=!1,d=e.return;d!==null;)d.childLanes|=a,i=d.alternate,i!==null&&(i.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&t!==null&&(c=31-de(a),e=d.hiddenUpdates,i=e[c],i===null?e[c]=[t]:i.push(t),t.lane=a|536870912),d):null}function hs(e){if(50<Cr)throw Cr=0,wc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ci={};function L0(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,a,i){return new L0(e,t,a,i)}function ho(e){return e=e.prototype,!(!e||!e.isReactComponent)}function za(e,t){var a=e.alternate;return a===null?(a=Pt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Jd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ms(e,t,a,i,c,d){var m=0;if(i=e,typeof e=="function")ho(e)&&(m=1);else if(typeof e=="string")m=G1(e,a,se.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=Pt(31,a,t,c),e.elementType=ie,e.lanes=d,e;case O:return Nn(a.children,c,d,t);case z:m=8,c|=24;break;case H:return e=Pt(12,a,t,c|2),e.elementType=H,e.lanes=d,e;case W:return e=Pt(13,a,t,c),e.elementType=W,e.lanes=d,e;case le:return e=Pt(19,a,t,c),e.elementType=le,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:m=10;break e;case R:m=9;break e;case re:m=11;break e;case te:m=14;break e;case ce:m=16,i=null;break e}m=29,a=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Pt(m,a,t,c),t.elementType=e,t.type=i,t.lanes=d,t}function Nn(e,t,a,i){return e=Pt(7,e,i,t),e.lanes=a,e}function mo(e,t,a){return e=Pt(6,e,null,t),e.lanes=a,e}function Wd(e){var t=Pt(18,null,null,0);return t.stateNode=e,t}function go(e,t,a){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _d=new WeakMap;function ta(e,t){if(typeof e=="object"&&e!==null){var a=_d.get(e);return a!==void 0?a:(t={value:e,source:t,stack:bn(t)},_d.set(e,t),t)}return{value:e,source:t,stack:bn(t)}}var ui=[],di=0,gs=null,sr=0,aa=[],na=0,Xa=null,ba=1,ya="";function Oa(e,t){ui[di++]=sr,ui[di++]=gs,gs=e,sr=t}function $d(e,t,a){aa[na++]=ba,aa[na++]=ya,aa[na++]=Xa,Xa=e;var i=ba;e=ya;var c=32-de(i)-1;i&=~(1<<c),a+=1;var d=32-de(t)+c;if(30<d){var m=c-c%5;d=(i&(1<<m)-1).toString(32),i>>=m,c-=m,ba=1<<32-de(t)+c|a<<c|i,ya=d+e}else ba=1<<d|a<<c|i,ya=e}function xo(e){e.return!==null&&(Oa(e,1),$d(e,1,0))}function bo(e){for(;e===gs;)gs=ui[--di],ui[di]=null,sr=ui[--di],ui[di]=null;for(;e===Xa;)Xa=aa[--na],aa[na]=null,ya=aa[--na],aa[na]=null,ba=aa[--na],aa[na]=null}function ef(e,t){aa[na++]=ba,aa[na++]=ya,aa[na++]=Xa,ba=t.id,ya=t.overflow,Xa=e}var Nt=null,tt=null,qe=!1,Ia=null,ia=!1,yo=Error(o(519));function Ja(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lr(ta(t,e)),yo}function tf(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[St]=e,t[Dt]=i,a){case"dialog":De("cancel",t),De("close",t);break;case"iframe":case"object":case"embed":De("load",t);break;case"video":case"audio":for(a=0;a<Or.length;a++)De(Or[a],t);break;case"source":De("error",t);break;case"img":case"image":case"link":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"input":De("invalid",t),hd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":De("invalid",t);break;case"textarea":De("invalid",t),gd(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||yh(t.textContent,a)?(i.popover!=null&&(De("beforetoggle",t),De("toggle",t)),i.onScroll!=null&&De("scroll",t),i.onScrollEnd!=null&&De("scrollend",t),i.onClick!=null&&(t.onclick=Ea),t=!0):t=!1,t||Ja(e,!0)}function af(e){for(Nt=e.return;Nt;)switch(Nt.tag){case 5:case 31:case 13:ia=!1;return;case 27:case 3:ia=!0;return;default:Nt=Nt.return}}function fi(e){if(e!==Nt)return!1;if(!qe)return af(e),qe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Uc(e.type,e.memoizedProps)),a=!a),a&&tt&&Ja(e),af(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));tt=zh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));tt=zh(e)}else t===27?(t=tt,dn(e.type)?(e=Qc,Qc=null,tt=e):tt=t):tt=Nt?sa(e.stateNode.nextSibling):null;return!0}function En(){tt=Nt=null,qe=!1}function vo(){var e=Ia;return e!==null&&(Vt===null?Vt=e:Vt.push.apply(Vt,e),Ia=null),e}function lr(e){Ia===null?Ia=[e]:Ia.push(e)}var jo=A(null),Cn=null,ka=null;function Wa(e,t,a){I(jo,t._currentValue),t._currentValue=a}function Ta(e){e._currentValue=jo.current,U(jo)}function wo(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function Ao(e,t,a,i){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var m=c.child;d=d.firstContext;e:for(;d!==null;){var y=d;d=c;for(var N=0;N<t.length;N++)if(y.context===t[N]){d.lanes|=a,y=d.alternate,y!==null&&(y.lanes|=a),wo(d.return,a,e),i||(m=null);break e}d=y.next}}else if(c.tag===18){if(m=c.return,m===null)throw Error(o(341));m.lanes|=a,d=m.alternate,d!==null&&(d.lanes|=a),wo(m,a,e),m=null}else m=c.child;if(m!==null)m.return=c;else for(m=c;m!==null;){if(m===e){m=null;break}if(c=m.sibling,c!==null){c.return=m.return,m=c;break}m=m.return}c=m}}function pi(e,t,a,i){e=null;for(var c=t,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var m=c.alternate;if(m===null)throw Error(o(387));if(m=m.memoizedProps,m!==null){var y=c.type;Ft(c.pendingProps.value,m.value)||(e!==null?e.push(y):e=[y])}}else if(c===He.current){if(m=c.alternate,m===null)throw Error(o(387));m.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Br):e=[Br])}c=c.return}e!==null&&Ao(t,e,a,i),t.flags|=262144}function xs(e){for(e=e.firstContext;e!==null;){if(!Ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zn(e){Cn=e,ka=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Et(e){return nf(Cn,e)}function bs(e,t){return Cn===null&&zn(e),nf(e,t)}function nf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ka===null){if(e===null)throw Error(o(308));ka=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ka=ka.next=t;return a}var U0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},H0=r.unstable_scheduleCallback,q0=r.unstable_NormalPriority,mt={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function So(){return{controller:new U0,data:new Map,refCount:0}}function or(e){e.refCount--,e.refCount===0&&H0(q0,function(){e.controller.abort()})}var cr=null,No=0,hi=0,mi=null;function V0(e,t){if(cr===null){var a=cr=[];No=0,hi=zc(),mi={status:"pending",value:void 0,then:function(i){a.push(i)}}}return No++,t.then(rf,rf),t}function rf(){if(--No===0&&cr!==null){mi!==null&&(mi.status="fulfilled");var e=cr;cr=null,hi=0,mi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function G0(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var c=0;c<a.length;c++)(0,a[c])(t)},function(c){for(i.status="rejected",i.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),i}var sf=T.S;T.S=function(e,t){Yp=Rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&V0(e,t),sf!==null&&sf(e,t)};var On=A(null);function Eo(){var e=On.current;return e!==null?e:We.pooledCache}function ys(e,t){t===null?I(On,On.current):I(On,t.pool)}function lf(){var e=Eo();return e===null?null:{parent:mt._currentValue,pool:e}}var gi=Error(o(460)),Co=Error(o(474)),vs=Error(o(542)),js={then:function(){}};function of(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ea,Ea),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,df(e),e;default:if(typeof t.status=="string")t.then(Ea,Ea);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=i}},function(i){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,df(e),e}throw Tn=t,gi}}function kn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Tn=a,gi):a}}var Tn=null;function uf(){if(Tn===null)throw Error(o(459));var e=Tn;return Tn=null,e}function df(e){if(e===gi||e===vs)throw Error(o(483))}var xi=null,ur=0;function ws(e){var t=ur;return ur+=1,xi===null&&(xi=[]),cf(xi,e,t)}function dr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function As(e,t){throw t.$$typeof===E?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ff(e){function t(k,C){if(e){var M=k.deletions;M===null?(k.deletions=[C],k.flags|=16):M.push(C)}}function a(k,C){if(!e)return null;for(;C!==null;)t(k,C),C=C.sibling;return null}function i(k){for(var C=new Map;k!==null;)k.key!==null?C.set(k.key,k):C.set(k.index,k),k=k.sibling;return C}function c(k,C){return k=za(k,C),k.index=0,k.sibling=null,k}function d(k,C,M){return k.index=M,e?(M=k.alternate,M!==null?(M=M.index,M<C?(k.flags|=67108866,C):M):(k.flags|=67108866,C)):(k.flags|=1048576,C)}function m(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function y(k,C,M,F){return C===null||C.tag!==6?(C=mo(M,k.mode,F),C.return=k,C):(C=c(C,M),C.return=k,C)}function N(k,C,M,F){var ve=M.type;return ve===O?Y(k,C,M.props.children,F,M.key):C!==null&&(C.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===ce&&kn(ve)===C.type)?(C=c(C,M.props),dr(C,M),C.return=k,C):(C=ms(M.type,M.key,M.props,null,k.mode,F),dr(C,M),C.return=k,C)}function B(k,C,M,F){return C===null||C.tag!==4||C.stateNode.containerInfo!==M.containerInfo||C.stateNode.implementation!==M.implementation?(C=go(M,k.mode,F),C.return=k,C):(C=c(C,M.children||[]),C.return=k,C)}function Y(k,C,M,F,ve){return C===null||C.tag!==7?(C=Nn(M,k.mode,F,ve),C.return=k,C):(C=c(C,M),C.return=k,C)}function Z(k,C,M){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=mo(""+C,k.mode,M),C.return=k,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case S:return M=ms(C.type,C.key,C.props,null,k.mode,M),dr(M,C),M.return=k,M;case j:return C=go(C,k.mode,M),C.return=k,C;case ce:return C=kn(C),Z(k,C,M)}if(Me(C)||X(C))return C=Nn(C,k.mode,M,null),C.return=k,C;if(typeof C.then=="function")return Z(k,ws(C),M);if(C.$$typeof===V)return Z(k,bs(k,C),M);As(k,C)}return null}function L(k,C,M,F){var ve=C!==null?C.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return ve!==null?null:y(k,C,""+M,F);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return M.key===ve?N(k,C,M,F):null;case j:return M.key===ve?B(k,C,M,F):null;case ce:return M=kn(M),L(k,C,M,F)}if(Me(M)||X(M))return ve!==null?null:Y(k,C,M,F,null);if(typeof M.then=="function")return L(k,C,ws(M),F);if(M.$$typeof===V)return L(k,C,bs(k,M),F);As(k,M)}return null}function G(k,C,M,F,ve){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return k=k.get(M)||null,y(C,k,""+F,ve);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case S:return k=k.get(F.key===null?M:F.key)||null,N(C,k,F,ve);case j:return k=k.get(F.key===null?M:F.key)||null,B(C,k,F,ve);case ce:return F=kn(F),G(k,C,M,F,ve)}if(Me(F)||X(F))return k=k.get(M)||null,Y(C,k,F,ve,null);if(typeof F.then=="function")return G(k,C,M,ws(F),ve);if(F.$$typeof===V)return G(k,C,M,bs(C,F),ve);As(C,F)}return null}function xe(k,C,M,F){for(var ve=null,Ve=null,be=C,ke=C=0,Ue=null;be!==null&&ke<M.length;ke++){be.index>ke?(Ue=be,be=null):Ue=be.sibling;var Ge=L(k,be,M[ke],F);if(Ge===null){be===null&&(be=Ue);break}e&&be&&Ge.alternate===null&&t(k,be),C=d(Ge,C,ke),Ve===null?ve=Ge:Ve.sibling=Ge,Ve=Ge,be=Ue}if(ke===M.length)return a(k,be),qe&&Oa(k,ke),ve;if(be===null){for(;ke<M.length;ke++)be=Z(k,M[ke],F),be!==null&&(C=d(be,C,ke),Ve===null?ve=be:Ve.sibling=be,Ve=be);return qe&&Oa(k,ke),ve}for(be=i(be);ke<M.length;ke++)Ue=G(be,k,ke,M[ke],F),Ue!==null&&(e&&Ue.alternate!==null&&be.delete(Ue.key===null?ke:Ue.key),C=d(Ue,C,ke),Ve===null?ve=Ue:Ve.sibling=Ue,Ve=Ue);return e&&be.forEach(function(gn){return t(k,gn)}),qe&&Oa(k,ke),ve}function je(k,C,M,F){if(M==null)throw Error(o(151));for(var ve=null,Ve=null,be=C,ke=C=0,Ue=null,Ge=M.next();be!==null&&!Ge.done;ke++,Ge=M.next()){be.index>ke?(Ue=be,be=null):Ue=be.sibling;var gn=L(k,be,Ge.value,F);if(gn===null){be===null&&(be=Ue);break}e&&be&&gn.alternate===null&&t(k,be),C=d(gn,C,ke),Ve===null?ve=gn:Ve.sibling=gn,Ve=gn,be=Ue}if(Ge.done)return a(k,be),qe&&Oa(k,ke),ve;if(be===null){for(;!Ge.done;ke++,Ge=M.next())Ge=Z(k,Ge.value,F),Ge!==null&&(C=d(Ge,C,ke),Ve===null?ve=Ge:Ve.sibling=Ge,Ve=Ge);return qe&&Oa(k,ke),ve}for(be=i(be);!Ge.done;ke++,Ge=M.next())Ge=G(be,k,ke,Ge.value,F),Ge!==null&&(e&&Ge.alternate!==null&&be.delete(Ge.key===null?ke:Ge.key),C=d(Ge,C,ke),Ve===null?ve=Ge:Ve.sibling=Ge,Ve=Ge);return e&&be.forEach(function(_1){return t(k,_1)}),qe&&Oa(k,ke),ve}function Ie(k,C,M,F){if(typeof M=="object"&&M!==null&&M.type===O&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case S:e:{for(var ve=M.key;C!==null;){if(C.key===ve){if(ve=M.type,ve===O){if(C.tag===7){a(k,C.sibling),F=c(C,M.props.children),F.return=k,k=F;break e}}else if(C.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===ce&&kn(ve)===C.type){a(k,C.sibling),F=c(C,M.props),dr(F,M),F.return=k,k=F;break e}a(k,C);break}else t(k,C);C=C.sibling}M.type===O?(F=Nn(M.props.children,k.mode,F,M.key),F.return=k,k=F):(F=ms(M.type,M.key,M.props,null,k.mode,F),dr(F,M),F.return=k,k=F)}return m(k);case j:e:{for(ve=M.key;C!==null;){if(C.key===ve)if(C.tag===4&&C.stateNode.containerInfo===M.containerInfo&&C.stateNode.implementation===M.implementation){a(k,C.sibling),F=c(C,M.children||[]),F.return=k,k=F;break e}else{a(k,C);break}else t(k,C);C=C.sibling}F=go(M,k.mode,F),F.return=k,k=F}return m(k);case ce:return M=kn(M),Ie(k,C,M,F)}if(Me(M))return xe(k,C,M,F);if(X(M)){if(ve=X(M),typeof ve!="function")throw Error(o(150));return M=ve.call(M),je(k,C,M,F)}if(typeof M.then=="function")return Ie(k,C,ws(M),F);if(M.$$typeof===V)return Ie(k,C,bs(k,M),F);As(k,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,C!==null&&C.tag===6?(a(k,C.sibling),F=c(C,M),F.return=k,k=F):(a(k,C),F=mo(M,k.mode,F),F.return=k,k=F),m(k)):a(k,C)}return function(k,C,M,F){try{ur=0;var ve=Ie(k,C,M,F);return xi=null,ve}catch(be){if(be===gi||be===vs)throw be;var Ve=Pt(29,be,null,k.mode);return Ve.lanes=F,Ve.return=k,Ve}finally{}}}var Rn=ff(!0),pf=ff(!1),_a=!1;function zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function en(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ye&2)!==0){var c=i.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),i.pending=t,t=hs(e),Id(e,null,a),t}return ps(e,i,t,a),hs(e)}function fr(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,nd(e,a)}}function ko(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=m:d=d.next=m,a=a.next}while(a!==null);d===null?c=d=t:d=d.next=t}else c=d=t;a={baseState:i.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var To=!1;function pr(){if(To){var e=mi;if(e!==null)throw e}}function hr(e,t,a,i){To=!1;var c=e.updateQueue;_a=!1;var d=c.firstBaseUpdate,m=c.lastBaseUpdate,y=c.shared.pending;if(y!==null){c.shared.pending=null;var N=y,B=N.next;N.next=null,m===null?d=B:m.next=B,m=N;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,y=Y.lastBaseUpdate,y!==m&&(y===null?Y.firstBaseUpdate=B:y.next=B,Y.lastBaseUpdate=N))}if(d!==null){var Z=c.baseState;m=0,Y=B=N=null,y=d;do{var L=y.lane&-536870913,G=L!==y.lane;if(G?(Le&L)===L:(i&L)===L){L!==0&&L===hi&&(To=!0),Y!==null&&(Y=Y.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var xe=e,je=y;L=t;var Ie=a;switch(je.tag){case 1:if(xe=je.payload,typeof xe=="function"){Z=xe.call(Ie,Z,L);break e}Z=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=je.payload,L=typeof xe=="function"?xe.call(Ie,Z,L):xe,L==null)break e;Z=v({},Z,L);break e;case 2:_a=!0}}L=y.callback,L!==null&&(e.flags|=64,G&&(e.flags|=8192),G=c.callbacks,G===null?c.callbacks=[L]:G.push(L))}else G={lane:L,tag:y.tag,payload:y.payload,callback:y.callback,next:null},Y===null?(B=Y=G,N=Z):Y=Y.next=G,m|=L;if(y=y.next,y===null){if(y=c.shared.pending,y===null)break;G=y,y=G.next,G.next=null,c.lastBaseUpdate=G,c.shared.pending=null}}while(!0);Y===null&&(N=Z),c.baseState=N,c.firstBaseUpdate=B,c.lastBaseUpdate=Y,d===null&&(c.shared.lanes=0),sn|=m,e.lanes=m,e.memoizedState=Z}}function hf(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function mf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)hf(a[e],t)}var bi=A(null),Ss=A(0);function gf(e,t){e=Va,I(Ss,e),I(bi,t),Va=e|t.baseLanes}function Ro(){I(Ss,Va),I(bi,bi.current)}function Mo(){Va=Ss.current,U(bi),U(Ss)}var Zt=A(null),ra=null;function tn(e){var t=e.alternate;I(ft,ft.current&1),I(Zt,e),ra===null&&(t===null||bi.current!==null||t.memoizedState!==null)&&(ra=e)}function Bo(e){I(ft,ft.current),I(Zt,e),ra===null&&(ra=e)}function xf(e){e.tag===22?(I(ft,ft.current),I(Zt,e),ra===null&&(ra=e)):an()}function an(){I(ft,ft.current),I(Zt,Zt.current)}function Xt(e){U(Zt),ra===e&&(ra=null),U(ft)}var ft=A(0);function Ns(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vc(a)||Gc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ra=0,Ce=null,Ze=null,gt=null,Es=!1,yi=!1,Mn=!1,Cs=0,mr=0,vi=null,Q0=0;function ct(){throw Error(o(321))}function Do(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ft(e[a],t[a]))return!1;return!0}function Lo(e,t,a,i,c,d){return Ra=d,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?ep:Wo,Mn=!1,d=a(i,c),Mn=!1,yi&&(d=yf(t,a,i,c)),bf(e),d}function bf(e){T.H=br;var t=Ze!==null&&Ze.next!==null;if(Ra=0,gt=Ze=Ce=null,Es=!1,mr=0,vi=null,t)throw Error(o(300));e===null||xt||(e=e.dependencies,e!==null&&xs(e)&&(xt=!0))}function yf(e,t,a,i){Ce=e;var c=0;do{if(yi&&(vi=null),mr=0,yi=!1,25<=c)throw Error(o(301));if(c+=1,gt=Ze=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}T.H=tp,d=t(a,i)}while(yi);return d}function Y0(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?gr(t):t,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(Ce.flags|=1024),t}function Uo(){var e=Cs!==0;return Cs=0,e}function Ho(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function qo(e){if(Es){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Es=!1}Ra=0,gt=Ze=Ce=null,yi=!1,mr=Cs=0,vi=null}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Ce.memoizedState=gt=e:gt=gt.next=e,gt}function pt(){if(Ze===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=gt===null?Ce.memoizedState:gt.next;if(t!==null)gt=t,Ze=e;else{if(e===null)throw Ce.alternate===null?Error(o(467)):Error(o(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},gt===null?Ce.memoizedState=gt=e:gt=gt.next=e}return gt}function zs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gr(e){var t=mr;return mr+=1,vi===null&&(vi=[]),e=cf(vi,e,t),t=Ce,(gt===null?t.memoizedState:gt.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?ep:Wo),e}function Os(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gr(e);if(e.$$typeof===V)return Et(e)}throw Error(o(438,String(e)))}function Vo(e){var t=null,a=Ce.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=Ce.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=zs(),Ce.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=pe;return t.index++,a}function Ma(e,t){return typeof t=="function"?t(e):t}function ks(e){var t=pt();return Go(t,Ze,e)}function Go(e,t,a){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=a;var c=e.baseQueue,d=i.pending;if(d!==null){if(c!==null){var m=c.next;c.next=d.next,d.next=m}t.baseQueue=c=d,i.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{t=c.next;var y=m=null,N=null,B=t,Y=!1;do{var Z=B.lane&-536870913;if(Z!==B.lane?(Le&Z)===Z:(Ra&Z)===Z){var L=B.revertLane;if(L===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),Z===hi&&(Y=!0);else if((Ra&L)===L){B=B.next,L===hi&&(Y=!0);continue}else Z={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},N===null?(y=N=Z,m=d):N=N.next=Z,Ce.lanes|=L,sn|=L;Z=B.action,Mn&&a(d,Z),d=B.hasEagerState?B.eagerState:a(d,Z)}else L={lane:Z,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},N===null?(y=N=L,m=d):N=N.next=L,Ce.lanes|=Z,sn|=Z;B=B.next}while(B!==null&&B!==t);if(N===null?m=d:N.next=y,!Ft(d,e.memoizedState)&&(xt=!0,Y&&(a=mi,a!==null)))throw a;e.memoizedState=d,e.baseState=m,e.baseQueue=N,i.lastRenderedState=d}return c===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Qo(e){var t=pt(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var i=a.dispatch,c=a.pending,d=t.memoizedState;if(c!==null){a.pending=null;var m=c=c.next;do d=e(d,m.action),m=m.next;while(m!==c);Ft(d,t.memoizedState)||(xt=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),a.lastRenderedState=d}return[d,i]}function vf(e,t,a){var i=Ce,c=pt(),d=qe;if(d){if(a===void 0)throw Error(o(407));a=a()}else a=t();var m=!Ft((Ze||c).memoizedState,a);if(m&&(c.memoizedState=a,xt=!0),c=c.queue,Fo(Af.bind(null,i,c,e),[e]),c.getSnapshot!==t||m||gt!==null&&gt.memoizedState.tag&1){if(i.flags|=2048,ji(9,{destroy:void 0},wf.bind(null,i,c,a,t),null),We===null)throw Error(o(349));d||(Ra&127)!==0||jf(i,t,a)}return a}function jf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Ce.updateQueue,t===null?(t=zs(),Ce.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function wf(e,t,a,i){t.value=a,t.getSnapshot=i,Sf(t)&&Nf(e)}function Af(e,t,a){return a(function(){Sf(t)&&Nf(e)})}function Sf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ft(e,a)}catch{return!0}}function Nf(e){var t=Sn(e,2);t!==null&&Gt(t,e,2)}function Yo(e){var t=Mt();if(typeof e=="function"){var a=e;if(e=a(),Mn){me(!0);try{a()}finally{me(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:e},t}function Ef(e,t,a,i){return e.baseState=a,Go(e,Ze,typeof i=="function"?i:Ma)}function K0(e,t,a,i,c){if(Ms(e))throw Error(o(485));if(e=t.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){d.listeners.push(m)}};T.T!==null?a(!0):d.isTransition=!1,i(d),a=t.pending,a===null?(d.next=t.pending=d,Cf(t,d)):(d.next=a.next,t.pending=a.next=d)}}function Cf(e,t){var a=t.action,i=t.payload,c=e.state;if(t.isTransition){var d=T.T,m={};T.T=m;try{var y=a(c,i),N=T.S;N!==null&&N(m,y),zf(e,t,y)}catch(B){Ko(e,t,B)}finally{d!==null&&m.types!==null&&(d.types=m.types),T.T=d}}else try{d=a(c,i),zf(e,t,d)}catch(B){Ko(e,t,B)}}function zf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){Of(e,t,i)},function(i){return Ko(e,t,i)}):Of(e,t,a)}function Of(e,t,a){t.status="fulfilled",t.value=a,kf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Cf(e,a)))}function Ko(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,kf(t),t=t.next;while(t!==i)}e.action=null}function kf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Tf(e,t){return t}function Rf(e,t){if(qe){var a=We.formState;if(a!==null){e:{var i=Ce;if(qe){if(tt){t:{for(var c=tt,d=ia;c.nodeType!==8;){if(!d){c=null;break t}if(c=sa(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){tt=sa(c.nextSibling),i=c.data==="F!";break e}}Ja(i)}i=!1}i&&(t=a[0])}}return a=Mt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tf,lastRenderedState:t},a.queue=i,a=Wf.bind(null,Ce,i),i.dispatch=a,i=Yo(!1),d=Jo.bind(null,Ce,!1,i.queue),i=Mt(),c={state:t,dispatch:null,action:e,pending:null},i.queue=c,a=K0.bind(null,Ce,c,d,a),c.dispatch=a,i.memoizedState=e,[t,a,!1]}function Mf(e){var t=pt();return Bf(t,Ze,e)}function Bf(e,t,a){if(t=Go(e,t,Tf)[0],e=ks(Ma)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=gr(t)}catch(m){throw m===gi?vs:m}else i=t;t=pt();var c=t.queue,d=c.dispatch;return a!==t.memoizedState&&(Ce.flags|=2048,ji(9,{destroy:void 0},F0.bind(null,c,a),null)),[i,d,e]}function F0(e,t){e.action=t}function Df(e){var t=pt(),a=Ze;if(a!==null)return Bf(t,a,e);pt(),t=t.memoizedState,a=pt();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function ji(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=Ce.updateQueue,t===null&&(t=zs(),Ce.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function Lf(){return pt().memoizedState}function Ts(e,t,a,i){var c=Mt();Ce.flags|=e,c.memoizedState=ji(1|t,{destroy:void 0},a,i===void 0?null:i)}function Rs(e,t,a,i){var c=pt();i=i===void 0?null:i;var d=c.memoizedState.inst;Ze!==null&&i!==null&&Do(i,Ze.memoizedState.deps)?c.memoizedState=ji(t,d,a,i):(Ce.flags|=e,c.memoizedState=ji(1|t,d,a,i))}function Uf(e,t){Ts(8390656,8,e,t)}function Fo(e,t){Rs(2048,8,e,t)}function P0(e){Ce.flags|=4;var t=Ce.updateQueue;if(t===null)t=zs(),Ce.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Hf(e){var t=pt().memoizedState;return P0({ref:t,nextImpl:e}),function(){if((Ye&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function qf(e,t){return Rs(4,2,e,t)}function Vf(e,t){return Rs(4,4,e,t)}function Gf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qf(e,t,a){a=a!=null?a.concat([e]):null,Rs(4,4,Gf.bind(null,t,e),a)}function Po(){}function Yf(e,t){var a=pt();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Do(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function Kf(e,t){var a=pt();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Do(t,i[1]))return i[0];if(i=e(),Mn){me(!0);try{e()}finally{me(!1)}}return a.memoizedState=[i,t],i}function Zo(e,t,a){return a===void 0||(Ra&1073741824)!==0&&(Le&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Fp(),Ce.lanes|=e,sn|=e,a)}function Ff(e,t,a,i){return Ft(a,t)?a:bi.current!==null?(e=Zo(e,a,i),Ft(e,t)||(xt=!0),e):(Ra&42)===0||(Ra&1073741824)!==0&&(Le&261930)===0?(xt=!0,e.memoizedState=a):(e=Fp(),Ce.lanes|=e,sn|=e,t)}function Pf(e,t,a,i,c){var d=J.p;J.p=d!==0&&8>d?d:8;var m=T.T,y={};T.T=y,Jo(e,!1,t,a);try{var N=c(),B=T.S;if(B!==null&&B(y,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var Y=G0(N,i);xr(e,t,Y,Wt(e))}else xr(e,t,i,Wt(e))}catch(Z){xr(e,t,{then:function(){},status:"rejected",reason:Z},Wt())}finally{J.p=d,m!==null&&y.types!==null&&(m.types=y.types),T.T=m}}function Z0(){}function Xo(e,t,a,i){if(e.tag!==5)throw Error(o(476));var c=Zf(e).queue;Pf(e,c,t,ue,a===null?Z0:function(){return Xf(e),a(i)})}function Zf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:ue},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xf(e){var t=Zf(e);t.next===null&&(t=e.alternate.memoizedState),xr(e,t.next.queue,{},Wt())}function Io(){return Et(Br)}function If(){return pt().memoizedState}function Jf(){return pt().memoizedState}function X0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Wt();e=$a(a);var i=en(t,e,a);i!==null&&(Gt(i,t,a),fr(i,t,a)),t={cache:So()},e.payload=t;return}t=t.return}}function I0(e,t,a){var i=Wt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ms(e)?_f(t,a):(a=po(e,t,a,i),a!==null&&(Gt(a,e,i),$f(a,t,i)))}function Wf(e,t,a){var i=Wt();xr(e,t,a,i)}function xr(e,t,a,i){var c={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ms(e))_f(t,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var m=t.lastRenderedState,y=d(m,a);if(c.hasEagerState=!0,c.eagerState=y,Ft(y,m))return ps(e,t,c,0),We===null&&fs(),!1}catch{}finally{}if(a=po(e,t,c,i),a!==null)return Gt(a,e,i),$f(a,t,i),!0}return!1}function Jo(e,t,a,i){if(i={lane:2,revertLane:zc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ms(e)){if(t)throw Error(o(479))}else t=po(e,a,i,2),t!==null&&Gt(t,e,2)}function Ms(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function _f(e,t){yi=Es=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function $f(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,nd(e,a)}}var br={readContext:Et,use:Os,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct};br.useEffectEvent=ct;var ep={readContext:Et,use:Os,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Uf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ts(4194308,4,Gf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ts(4194308,4,e,t)},useInsertionEffect:function(e,t){Ts(4,2,e,t)},useMemo:function(e,t){var a=Mt();t=t===void 0?null:t;var i=e();if(Mn){me(!0);try{e()}finally{me(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=Mt();if(a!==void 0){var c=a(t);if(Mn){me(!0);try{a(t)}finally{me(!1)}}}else c=t;return i.memoizedState=i.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},i.queue=e,e=e.dispatch=I0.bind(null,Ce,e),[i.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,a=Wf.bind(null,Ce,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Po,useDeferredValue:function(e,t){var a=Mt();return Zo(a,e,t)},useTransition:function(){var e=Yo(!1);return e=Pf.bind(null,Ce,e.queue,!0,!1),Mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=Ce,c=Mt();if(qe){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),We===null)throw Error(o(349));(Le&127)!==0||jf(i,t,a)}c.memoizedState=a;var d={value:a,getSnapshot:t};return c.queue=d,Uf(Af.bind(null,i,d,e),[e]),i.flags|=2048,ji(9,{destroy:void 0},wf.bind(null,i,d,a,t),null),a},useId:function(){var e=Mt(),t=We.identifierPrefix;if(qe){var a=ya,i=ba;a=(i&~(1<<32-de(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Cs++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Q0++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Io,useFormState:Rf,useActionState:Rf,useOptimistic:function(e){var t=Mt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Jo.bind(null,Ce,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vo,useCacheRefresh:function(){return Mt().memoizedState=X0.bind(null,Ce)},useEffectEvent:function(e){var t=Mt(),a={impl:e};return t.memoizedState=a,function(){if((Ye&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Wo={readContext:Et,use:Os,useCallback:Yf,useContext:Et,useEffect:Fo,useImperativeHandle:Qf,useInsertionEffect:qf,useLayoutEffect:Vf,useMemo:Kf,useReducer:ks,useRef:Lf,useState:function(){return ks(Ma)},useDebugValue:Po,useDeferredValue:function(e,t){var a=pt();return Ff(a,Ze.memoizedState,e,t)},useTransition:function(){var e=ks(Ma)[0],t=pt().memoizedState;return[typeof e=="boolean"?e:gr(e),t]},useSyncExternalStore:vf,useId:If,useHostTransitionStatus:Io,useFormState:Mf,useActionState:Mf,useOptimistic:function(e,t){var a=pt();return Ef(a,Ze,e,t)},useMemoCache:Vo,useCacheRefresh:Jf};Wo.useEffectEvent=Hf;var tp={readContext:Et,use:Os,useCallback:Yf,useContext:Et,useEffect:Fo,useImperativeHandle:Qf,useInsertionEffect:qf,useLayoutEffect:Vf,useMemo:Kf,useReducer:Qo,useRef:Lf,useState:function(){return Qo(Ma)},useDebugValue:Po,useDeferredValue:function(e,t){var a=pt();return Ze===null?Zo(a,e,t):Ff(a,Ze.memoizedState,e,t)},useTransition:function(){var e=Qo(Ma)[0],t=pt().memoizedState;return[typeof e=="boolean"?e:gr(e),t]},useSyncExternalStore:vf,useId:If,useHostTransitionStatus:Io,useFormState:Df,useActionState:Df,useOptimistic:function(e,t){var a=pt();return Ze!==null?Ef(a,Ze,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vo,useCacheRefresh:Jf};tp.useEffectEvent=Hf;function _o(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:v({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var $o={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Wt(),c=$a(i);c.payload=t,a!=null&&(c.callback=a),t=en(e,c,i),t!==null&&(Gt(t,e,i),fr(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Wt(),c=$a(i);c.tag=1,c.payload=t,a!=null&&(c.callback=a),t=en(e,c,i),t!==null&&(Gt(t,e,i),fr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Wt(),i=$a(a);i.tag=2,t!=null&&(i.callback=t),t=en(e,i,a),t!==null&&(Gt(t,e,a),fr(t,e,a))}};function ap(e,t,a,i,c,d,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,d,m):t.prototype&&t.prototype.isPureReactComponent?!ir(a,i)||!ir(c,d):!0}function np(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&$o.enqueueReplaceState(t,t.state,null)}function Bn(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function ip(e){ds(e)}function rp(e){console.error(e)}function sp(e){ds(e)}function Bs(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function lp(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ec(e,t,a){return a=$a(a),a.tag=3,a.payload={element:null},a.callback=function(){Bs(e,t)},a}function op(e){return e=$a(e),e.tag=3,e}function cp(e,t,a,i){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;e.payload=function(){return c(d)},e.callback=function(){lp(t,a,i)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){lp(t,a,i),typeof c!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var y=i.stack;this.componentDidCatch(i.value,{componentStack:y!==null?y:""})})}function J0(e,t,a,i,c){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&pi(t,a,c,!0),a=Zt.current,a!==null){switch(a.tag){case 31:case 13:return ra===null?Ps():a.alternate===null&&ut===0&&(ut=3),a.flags&=-257,a.flags|=65536,a.lanes=c,i===js?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),Nc(e,i,c)),!1;case 22:return a.flags|=65536,i===js?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),Nc(e,i,c)),!1}throw Error(o(435,a.tag))}return Nc(e,i,c),Ps(),!1}if(qe)return t=Zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,i!==yo&&(e=Error(o(422),{cause:i}),lr(ta(e,a)))):(i!==yo&&(t=Error(o(423),{cause:i}),lr(ta(t,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,i=ta(i,a),c=ec(e.stateNode,i,c),ko(e,c),ut!==4&&(ut=2)),!1;var d=Error(o(520),{cause:i});if(d=ta(d,a),Er===null?Er=[d]:Er.push(d),ut!==4&&(ut=2),t===null)return!0;i=ta(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=ec(a.stateNode,i,e),ko(a,e),!1;case 1:if(t=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ln===null||!ln.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=op(c),cp(c,e,a,i),ko(a,c),!1}a=a.return}while(a!==null);return!1}var tc=Error(o(461)),xt=!1;function Ct(e,t,a,i){t.child=e===null?pf(t,null,a,i):Rn(t,e.child,a,i)}function up(e,t,a,i,c){a=a.render;var d=t.ref;if("ref"in i){var m={};for(var y in i)y!=="ref"&&(m[y]=i[y])}else m=i;return zn(t),i=Lo(e,t,a,m,d,c),y=Uo(),e!==null&&!xt?(Ho(e,t,c),Ba(e,t,c)):(qe&&y&&xo(t),t.flags|=1,Ct(e,t,i,c),t.child)}function dp(e,t,a,i,c){if(e===null){var d=a.type;return typeof d=="function"&&!ho(d)&&d.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=d,fp(e,t,d,i,c)):(e=ms(a.type,null,i,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!cc(e,c)){var m=d.memoizedProps;if(a=a.compare,a=a!==null?a:ir,a(m,i)&&e.ref===t.ref)return Ba(e,t,c)}return t.flags|=1,e=za(d,i),e.ref=t.ref,e.return=t,t.child=e}function fp(e,t,a,i,c){if(e!==null){var d=e.memoizedProps;if(ir(d,i)&&e.ref===t.ref)if(xt=!1,t.pendingProps=i=d,cc(e,c))(e.flags&131072)!==0&&(xt=!0);else return t.lanes=e.lanes,Ba(e,t,c)}return ac(e,t,a,i,c)}function pp(e,t,a,i){var c=i.children,d=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(i=t.child=e.child,c=0;i!==null;)c=c|i.lanes|i.childLanes,i=i.sibling;i=c&~d}else i=0,t.child=null;return hp(e,t,d,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ys(t,d!==null?d.cachePool:null),d!==null?gf(t,d):Ro(),xf(t);else return i=t.lanes=536870912,hp(e,t,d!==null?d.baseLanes|a:a,a,i)}else d!==null?(ys(t,d.cachePool),gf(t,d),an(),t.memoizedState=null):(e!==null&&ys(t,null),Ro(),an());return Ct(e,t,c,a),t.child}function yr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function hp(e,t,a,i,c){var d=Eo();return d=d===null?null:{parent:mt._currentValue,pool:d},t.memoizedState={baseLanes:a,cachePool:d},e!==null&&ys(t,null),Ro(),xf(t),e!==null&&pi(e,t,i,!0),t.childLanes=c,null}function Ds(e,t){return t=Us({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mp(e,t,a){return Rn(t,e.child,null,a),e=Ds(t,t.pendingProps),e.flags|=2,Xt(t),t.memoizedState=null,e}function W0(e,t,a){var i=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(qe){if(i.mode==="hidden")return e=Ds(t,i),t.lanes=536870912,yr(null,e);if(Bo(t),(e=tt)?(e=Ch(e,ia),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:ba,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},a=Wd(e),a.return=t,t.child=a,Nt=t,tt=null)):e=null,e===null)throw Ja(t);return t.lanes=536870912,null}return Ds(t,i)}var d=e.memoizedState;if(d!==null){var m=d.dehydrated;if(Bo(t),c)if(t.flags&256)t.flags&=-257,t=mp(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(xt||pi(e,t,a,!1),c=(a&e.childLanes)!==0,xt||c){if(i=We,i!==null&&(m=id(i,a),m!==0&&m!==d.retryLane))throw d.retryLane=m,Sn(e,m),Gt(i,e,m),tc;Ps(),t=mp(e,t,a)}else e=d.treeContext,tt=sa(m.nextSibling),Nt=t,qe=!0,Ia=null,ia=!1,e!==null&&ef(t,e),t=Ds(t,i),t.flags|=4096;return t}return e=za(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ls(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ac(e,t,a,i,c){return zn(t),a=Lo(e,t,a,i,void 0,c),i=Uo(),e!==null&&!xt?(Ho(e,t,c),Ba(e,t,c)):(qe&&i&&xo(t),t.flags|=1,Ct(e,t,a,c),t.child)}function gp(e,t,a,i,c,d){return zn(t),t.updateQueue=null,a=yf(t,i,a,c),bf(e),i=Uo(),e!==null&&!xt?(Ho(e,t,d),Ba(e,t,d)):(qe&&i&&xo(t),t.flags|=1,Ct(e,t,a,d),t.child)}function xp(e,t,a,i,c){if(zn(t),t.stateNode===null){var d=ci,m=a.contextType;typeof m=="object"&&m!==null&&(d=Et(m)),d=new a(i,d),t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=$o,t.stateNode=d,d._reactInternals=t,d=t.stateNode,d.props=i,d.state=t.memoizedState,d.refs={},zo(t),m=a.contextType,d.context=typeof m=="object"&&m!==null?Et(m):ci,d.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(_o(t,a,m,i),d.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(m=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),m!==d.state&&$o.enqueueReplaceState(d,d.state,null),hr(t,i,d,c),pr(),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){d=t.stateNode;var y=t.memoizedProps,N=Bn(a,y);d.props=N;var B=d.context,Y=a.contextType;m=ci,typeof Y=="object"&&Y!==null&&(m=Et(Y));var Z=a.getDerivedStateFromProps;Y=typeof Z=="function"||typeof d.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,Y||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y||B!==m)&&np(t,d,i,m),_a=!1;var L=t.memoizedState;d.state=L,hr(t,i,d,c),pr(),B=t.memoizedState,y||L!==B||_a?(typeof Z=="function"&&(_o(t,a,Z,i),B=t.memoizedState),(N=_a||ap(t,a,N,i,L,B,m))?(Y||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=B),d.props=i,d.state=B,d.context=m,i=N):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{d=t.stateNode,Oo(e,t),m=t.memoizedProps,Y=Bn(a,m),d.props=Y,Z=t.pendingProps,L=d.context,B=a.contextType,N=ci,typeof B=="object"&&B!==null&&(N=Et(B)),y=a.getDerivedStateFromProps,(B=typeof y=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==Z||L!==N)&&np(t,d,i,N),_a=!1,L=t.memoizedState,d.state=L,hr(t,i,d,c),pr();var G=t.memoizedState;m!==Z||L!==G||_a||e!==null&&e.dependencies!==null&&xs(e.dependencies)?(typeof y=="function"&&(_o(t,a,y,i),G=t.memoizedState),(Y=_a||ap(t,a,Y,i,L,G,N)||e!==null&&e.dependencies!==null&&xs(e.dependencies))?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,G,N),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,G,N)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=G),d.props=i,d.state=G,d.context=N,i=Y):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),i=!1)}return d=i,Ls(e,t),i=(t.flags&128)!==0,d||i?(d=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:d.render(),t.flags|=1,e!==null&&i?(t.child=Rn(t,e.child,null,c),t.child=Rn(t,null,a,c)):Ct(e,t,a,c),t.memoizedState=d.state,e=t.child):e=Ba(e,t,c),e}function bp(e,t,a,i){return En(),t.flags|=256,Ct(e,t,a,i),t.child}var nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ic(e){return{baseLanes:e,cachePool:lf()}}function rc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Jt),e}function yp(e,t,a){var i=t.pendingProps,c=!1,d=(t.flags&128)!==0,m;if((m=d)||(m=e!==null&&e.memoizedState===null?!1:(ft.current&2)!==0),m&&(c=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(qe){if(c?tn(t):an(),(e=tt)?(e=Ch(e,ia),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:ba,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},a=Wd(e),a.return=t,t.child=a,Nt=t,tt=null)):e=null,e===null)throw Ja(t);return Gc(e)?t.lanes=32:t.lanes=536870912,null}var y=i.children;return i=i.fallback,c?(an(),c=t.mode,y=Us({mode:"hidden",children:y},c),i=Nn(i,c,a,null),y.return=t,i.return=t,y.sibling=i,t.child=y,i=t.child,i.memoizedState=ic(a),i.childLanes=rc(e,m,a),t.memoizedState=nc,yr(null,i)):(tn(t),sc(t,y))}var N=e.memoizedState;if(N!==null&&(y=N.dehydrated,y!==null)){if(d)t.flags&256?(tn(t),t.flags&=-257,t=lc(e,t,a)):t.memoizedState!==null?(an(),t.child=e.child,t.flags|=128,t=null):(an(),y=i.fallback,c=t.mode,i=Us({mode:"visible",children:i.children},c),y=Nn(y,c,a,null),y.flags|=2,i.return=t,y.return=t,i.sibling=y,t.child=i,Rn(t,e.child,null,a),i=t.child,i.memoizedState=ic(a),i.childLanes=rc(e,m,a),t.memoizedState=nc,t=yr(null,i));else if(tn(t),Gc(y)){if(m=y.nextSibling&&y.nextSibling.dataset,m)var B=m.dgst;m=B,i=Error(o(419)),i.stack="",i.digest=m,lr({value:i,source:null,stack:null}),t=lc(e,t,a)}else if(xt||pi(e,t,a,!1),m=(a&e.childLanes)!==0,xt||m){if(m=We,m!==null&&(i=id(m,a),i!==0&&i!==N.retryLane))throw N.retryLane=i,Sn(e,i),Gt(m,e,i),tc;Vc(y)||Ps(),t=lc(e,t,a)}else Vc(y)?(t.flags|=192,t.child=e.child,t=null):(e=N.treeContext,tt=sa(y.nextSibling),Nt=t,qe=!0,Ia=null,ia=!1,e!==null&&ef(t,e),t=sc(t,i.children),t.flags|=4096);return t}return c?(an(),y=i.fallback,c=t.mode,N=e.child,B=N.sibling,i=za(N,{mode:"hidden",children:i.children}),i.subtreeFlags=N.subtreeFlags&65011712,B!==null?y=za(B,y):(y=Nn(y,c,a,null),y.flags|=2),y.return=t,i.return=t,i.sibling=y,t.child=i,yr(null,i),i=t.child,y=e.child.memoizedState,y===null?y=ic(a):(c=y.cachePool,c!==null?(N=mt._currentValue,c=c.parent!==N?{parent:N,pool:N}:c):c=lf(),y={baseLanes:y.baseLanes|a,cachePool:c}),i.memoizedState=y,i.childLanes=rc(e,m,a),t.memoizedState=nc,yr(e.child,i)):(tn(t),a=e.child,e=a.sibling,a=za(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function sc(e,t){return t=Us({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Us(e,t){return e=Pt(22,e,null,t),e.lanes=0,e}function lc(e,t,a){return Rn(t,e.child,null,a),e=sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vp(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),wo(e.return,t,a)}function oc(e,t,a,i,c,d){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:c,treeForkCount:d}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=i,m.tail=a,m.tailMode=c,m.treeForkCount=d)}function jp(e,t,a){var i=t.pendingProps,c=i.revealOrder,d=i.tail;i=i.children;var m=ft.current,y=(m&2)!==0;if(y?(m=m&1|2,t.flags|=128):m&=1,I(ft,m),Ct(e,t,i,a),i=qe?sr:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vp(e,a,t);else if(e.tag===19)vp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=t.child,c=null;a!==null;)e=a.alternate,e!==null&&Ns(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=t.child,t.child=null):(c=a.sibling,a.sibling=null),oc(t,!1,c,a,d,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Ns(e)===null){t.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}oc(t,!0,a,null,d,i);break;case"together":oc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Ba(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(pi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=za(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=za(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function cc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xs(e)))}function _0(e,t,a){switch(t.tag){case 3:nt(t,t.stateNode.containerInfo),Wa(t,mt,e.memoizedState.cache),En();break;case 27:case 5:Bt(t);break;case 4:nt(t,t.stateNode.containerInfo);break;case 10:Wa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Bo(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(tn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?yp(e,t,a):(tn(t),e=Ba(e,t,a),e!==null?e.sibling:null);tn(t);break;case 19:var c=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(pi(e,t,a,!1),i=(a&t.childLanes)!==0),c){if(i)return jp(e,t,a);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),I(ft,ft.current),i)break;return null;case 22:return t.lanes=0,pp(e,t,a,t.pendingProps);case 24:Wa(t,mt,e.memoizedState.cache)}return Ba(e,t,a)}function wp(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)xt=!0;else{if(!cc(e,a)&&(t.flags&128)===0)return xt=!1,_0(e,t,a);xt=(e.flags&131072)!==0}else xt=!1,qe&&(t.flags&1048576)!==0&&$d(t,sr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=kn(t.elementType),t.type=e,typeof e=="function")ho(e)?(i=Bn(e,i),t.tag=1,t=xp(null,t,e,i,a)):(t.tag=0,t=ac(null,t,e,i,a));else{if(e!=null){var c=e.$$typeof;if(c===re){t.tag=11,t=up(null,t,e,i,a);break e}else if(c===te){t.tag=14,t=dp(null,t,e,i,a);break e}}throw t=ge(e)||e,Error(o(306,t,""))}}return t;case 0:return ac(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,c=Bn(i,t.pendingProps),xp(e,t,i,c,a);case 3:e:{if(nt(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var d=t.memoizedState;c=d.element,Oo(e,t),hr(t,i,null,a);var m=t.memoizedState;if(i=m.cache,Wa(t,mt,i),i!==d.cache&&Ao(t,[mt],a,!0),pr(),i=m.element,d.isDehydrated)if(d={element:i,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){t=bp(e,t,i,a);break e}else if(i!==c){c=ta(Error(o(424)),t),lr(c),t=bp(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tt=sa(e.firstChild),Nt=t,qe=!0,Ia=null,ia=!0,a=pf(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(En(),i===c){t=Ba(e,t,a);break e}Ct(e,t,i,a)}t=t.child}return t;case 26:return Ls(e,t),e===null?(a=Mh(t.type,null,t.pendingProps,null))?t.memoizedState=a:qe||(a=t.type,e=t.pendingProps,i=$s(we.current).createElement(a),i[St]=t,i[Dt]=e,zt(i,a,e),vt(i),t.stateNode=i):t.memoizedState=Mh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Bt(t),e===null&&qe&&(i=t.stateNode=kh(t.type,t.pendingProps,we.current),Nt=t,ia=!0,c=tt,dn(t.type)?(Qc=c,tt=sa(i.firstChild)):tt=c),Ct(e,t,t.pendingProps.children,a),Ls(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&qe&&((c=i=tt)&&(i=z1(i,t.type,t.pendingProps,ia),i!==null?(t.stateNode=i,Nt=t,tt=sa(i.firstChild),ia=!1,c=!0):c=!1),c||Ja(t)),Bt(t),c=t.type,d=t.pendingProps,m=e!==null?e.memoizedProps:null,i=d.children,Uc(c,d)?i=null:m!==null&&Uc(c,m)&&(t.flags|=32),t.memoizedState!==null&&(c=Lo(e,t,Y0,null,null,a),Br._currentValue=c),Ls(e,t),Ct(e,t,i,a),t.child;case 6:return e===null&&qe&&((e=a=tt)&&(a=O1(a,t.pendingProps,ia),a!==null?(t.stateNode=a,Nt=t,tt=null,e=!0):e=!1),e||Ja(t)),null;case 13:return yp(e,t,a);case 4:return nt(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Rn(t,null,i,a):Ct(e,t,i,a),t.child;case 11:return up(e,t,t.type,t.pendingProps,a);case 7:return Ct(e,t,t.pendingProps,a),t.child;case 8:return Ct(e,t,t.pendingProps.children,a),t.child;case 12:return Ct(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Wa(t,t.type,i.value),Ct(e,t,i.children,a),t.child;case 9:return c=t.type._context,i=t.pendingProps.children,zn(t),c=Et(c),i=i(c),t.flags|=1,Ct(e,t,i,a),t.child;case 14:return dp(e,t,t.type,t.pendingProps,a);case 15:return fp(e,t,t.type,t.pendingProps,a);case 19:return jp(e,t,a);case 31:return W0(e,t,a);case 22:return pp(e,t,a,t.pendingProps);case 24:return zn(t),i=Et(mt),e===null?(c=Eo(),c===null&&(c=We,d=So(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),t.memoizedState={parent:i,cache:c},zo(t),Wa(t,mt,c)):((e.lanes&a)!==0&&(Oo(e,t),hr(t,null,null,a),pr()),c=e.memoizedState,d=t.memoizedState,c.parent!==i?(c={parent:i,cache:i},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),Wa(t,mt,i)):(i=d.cache,Wa(t,mt,i),i!==c.cache&&Ao(t,[mt],a,!0))),Ct(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Da(e){e.flags|=4}function uc(e,t,a,i,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Ip())e.flags|=8192;else throw Tn=js,Co}else e.flags&=-16777217}function Ap(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hh(t))if(Ip())e.flags|=8192;else throw Tn=js,Co}function Hs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Zi():536870912,e.lanes|=t,Ni|=t)}function vr(e,t){if(!qe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,i|=c.subtreeFlags&65011712,i|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,i|=c.subtreeFlags,i|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function $0(e,t,a){var i=t.pendingProps;switch(bo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return at(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ta(mt),Je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(fi(t)?Da(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vo())),at(t),null;case 26:var c=t.type,d=t.memoizedState;return e===null?(Da(t),d!==null?(at(t),Ap(t,d)):(at(t),uc(t,c,null,i,a))):d?d!==e.memoizedState?(Da(t),at(t),Ap(t,d)):(at(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Da(t),at(t),uc(t,c,e,i,a)),null;case 27:if(lt(t),a=we.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Da(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return at(t),null}e=se.current,fi(t)?tf(t):(e=kh(c,i,a),t.stateNode=e,Da(t))}return at(t),null;case 5:if(lt(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Da(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return at(t),null}if(d=se.current,fi(t))tf(t);else{var m=$s(we.current);switch(d){case 1:d=m.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=m.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=m.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=m.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=m.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof i.is=="string"?m.createElement("select",{is:i.is}):m.createElement("select"),i.multiple?d.multiple=!0:i.size&&(d.size=i.size);break;default:d=typeof i.is=="string"?m.createElement(c,{is:i.is}):m.createElement(c)}}d[St]=t,d[Dt]=i;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)d.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=d;e:switch(zt(d,c,i),c){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Da(t)}}return at(t),uc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Da(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=we.current,fi(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,c=Nt,c!==null)switch(c.tag){case 27:case 5:i=c.memoizedProps}e[St]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||yh(e.nodeValue,a)),e||Ja(t,!0)}else e=$s(e).createTextNode(i),e[St]=t,t.stateNode=e}return at(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=fi(t),a!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[St]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),e=!1}else a=vo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Xt(t),t):(Xt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return at(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=fi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[St]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),c=!1}else c=vo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Xt(t),t):(Xt(t),null)}return Xt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,c=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(c=i.alternate.memoizedState.cachePool.pool),d=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(d=i.memoizedState.cachePool.pool),d!==c&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Hs(t,t.updateQueue),at(t),null);case 4:return Je(),e===null&&Rc(t.stateNode.containerInfo),at(t),null;case 10:return Ta(t.type),at(t),null;case 19:if(U(ft),i=t.memoizedState,i===null)return at(t),null;if(c=(t.flags&128)!==0,d=i.rendering,d===null)if(c)vr(i,!1);else{if(ut!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Ns(e),d!==null){for(t.flags|=128,vr(i,!1),e=d.updateQueue,t.updateQueue=e,Hs(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Jd(a,e),a=a.sibling;return I(ft,ft.current&1|2),qe&&Oa(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Rt()>Ys&&(t.flags|=128,c=!0,vr(i,!1),t.lanes=4194304)}else{if(!c)if(e=Ns(d),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,Hs(t,e),vr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!d.alternate&&!qe)return at(t),null}else 2*Rt()-i.renderingStartTime>Ys&&a!==536870912&&(t.flags|=128,c=!0,vr(i,!1),t.lanes=4194304);i.isBackwards?(d.sibling=t.child,t.child=d):(e=i.last,e!==null?e.sibling=d:t.child=d,i.last=d)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Rt(),e.sibling=null,a=ft.current,I(ft,c?a&1|2:a&1),qe&&Oa(t,i.treeForkCount),e):(at(t),null);case 22:case 23:return Xt(t),Mo(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),a=t.updateQueue,a!==null&&Hs(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&U(On),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ta(mt),at(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function e1(e,t){switch(bo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ta(mt),Je(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return lt(t),null;case 31:if(t.memoizedState!==null){if(Xt(t),t.alternate===null)throw Error(o(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Xt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(ft),null;case 4:return Je(),null;case 10:return Ta(t.type),null;case 22:case 23:return Xt(t),Mo(),e!==null&&U(On),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ta(mt),null;case 25:return null;default:return null}}function Sp(e,t){switch(bo(t),t.tag){case 3:Ta(mt),Je();break;case 26:case 27:case 5:lt(t);break;case 4:Je();break;case 31:t.memoizedState!==null&&Xt(t);break;case 13:Xt(t);break;case 19:U(ft);break;case 10:Ta(t.type);break;case 22:case 23:Xt(t),Mo(),e!==null&&U(On);break;case 24:Ta(mt)}}function jr(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var c=i.next;a=c;do{if((a.tag&e)===e){i=void 0;var d=a.create,m=a.inst;i=d(),m.destroy=i}a=a.next}while(a!==c)}}catch(y){Pe(t,t.return,y)}}function nn(e,t,a){try{var i=t.updateQueue,c=i!==null?i.lastEffect:null;if(c!==null){var d=c.next;i=d;do{if((i.tag&e)===e){var m=i.inst,y=m.destroy;if(y!==void 0){m.destroy=void 0,c=t;var N=a,B=y;try{B()}catch(Y){Pe(c,N,Y)}}}i=i.next}while(i!==d)}}catch(Y){Pe(t,t.return,Y)}}function Np(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{mf(t,a)}catch(i){Pe(e,e.return,i)}}}function Ep(e,t,a){a.props=Bn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){Pe(e,t,i)}}function wr(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(c){Pe(e,t,c)}}function va(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(c){Pe(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(e,t,c)}else a.current=null}function Cp(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(c){Pe(e,e.return,c)}}function dc(e,t,a){try{var i=e.stateNode;w1(i,e.type,a,t),i[Dt]=t}catch(c){Pe(e,e.return,c)}}function zp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&dn(e.type)||e.tag===4}function fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&dn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pc(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ea));else if(i!==4&&(i===27&&dn(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(pc(e,t,a),e=e.sibling;e!==null;)pc(e,t,a),e=e.sibling}function qs(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&dn(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(qs(e,t,a),e=e.sibling;e!==null;)qs(e,t,a),e=e.sibling}function Op(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);zt(t,i,a),t[St]=e,t[Dt]=a}catch(d){Pe(e,e.return,d)}}var La=!1,bt=!1,hc=!1,kp=typeof WeakSet=="function"?WeakSet:Set,jt=null;function t1(e,t){if(e=e.containerInfo,Dc=sl,e=Gd(e),so(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var c=i.anchorOffset,d=i.focusNode;i=i.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var m=0,y=-1,N=-1,B=0,Y=0,Z=e,L=null;t:for(;;){for(var G;Z!==a||c!==0&&Z.nodeType!==3||(y=m+c),Z!==d||i!==0&&Z.nodeType!==3||(N=m+i),Z.nodeType===3&&(m+=Z.nodeValue.length),(G=Z.firstChild)!==null;)L=Z,Z=G;for(;;){if(Z===e)break t;if(L===a&&++B===c&&(y=m),L===d&&++Y===i&&(N=m),(G=Z.nextSibling)!==null)break;Z=L,L=Z.parentNode}Z=G}a=y===-1||N===-1?null:{start:y,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lc={focusedElem:e,selectionRange:a},sl=!1,jt=t;jt!==null;)if(t=jt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,jt=e;else for(;jt!==null;){switch(t=jt,d=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=t,c=d.memoizedProps,d=d.memoizedState,i=a.stateNode;try{var xe=Bn(a.type,c);e=i.getSnapshotBeforeUpdate(xe,d),i.__reactInternalSnapshotBeforeUpdate=e}catch(je){Pe(a,a.return,je)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)qc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,jt=e;break}jt=t.return}}function Tp(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Ha(e,a),i&4&&jr(5,a);break;case 1:if(Ha(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){Pe(a,a.return,m)}else{var c=Bn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Pe(a,a.return,m)}}i&64&&Np(a),i&512&&wr(a,a.return);break;case 3:if(Ha(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{mf(e,t)}catch(m){Pe(a,a.return,m)}}break;case 27:t===null&&i&4&&Op(a);case 26:case 5:Ha(e,a),t===null&&i&4&&Cp(a),i&512&&wr(a,a.return);break;case 12:Ha(e,a);break;case 31:Ha(e,a),i&4&&Bp(e,a);break;case 13:Ha(e,a),i&4&&Dp(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=u1.bind(null,a),k1(e,a))));break;case 22:if(i=a.memoizedState!==null||La,!i){t=t!==null&&t.memoizedState!==null||bt,c=La;var d=bt;La=i,(bt=t)&&!d?qa(e,a,(a.subtreeFlags&8772)!==0):Ha(e,a),La=c,bt=d}break;case 30:break;default:Ha(e,a)}}function Rp(e){var t=e.alternate;t!==null&&(e.alternate=null,Rp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Yl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rt=null,Ut=!1;function Ua(e,t,a){for(a=a.child;a!==null;)Mp(e,t,a),a=a.sibling}function Mp(e,t,a){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(P,a)}catch{}switch(a.tag){case 26:bt||va(a,t),Ua(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:bt||va(a,t);var i=rt,c=Ut;dn(a.type)&&(rt=a.stateNode,Ut=!1),Ua(e,t,a),Tr(a.stateNode),rt=i,Ut=c;break;case 5:bt||va(a,t);case 6:if(i=rt,c=Ut,rt=null,Ua(e,t,a),rt=i,Ut=c,rt!==null)if(Ut)try{(rt.nodeType===9?rt.body:rt.nodeName==="HTML"?rt.ownerDocument.body:rt).removeChild(a.stateNode)}catch(d){Pe(a,t,d)}else try{rt.removeChild(a.stateNode)}catch(d){Pe(a,t,d)}break;case 18:rt!==null&&(Ut?(e=rt,Nh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mi(e)):Nh(rt,a.stateNode));break;case 4:i=rt,c=Ut,rt=a.stateNode.containerInfo,Ut=!0,Ua(e,t,a),rt=i,Ut=c;break;case 0:case 11:case 14:case 15:nn(2,a,t),bt||nn(4,a,t),Ua(e,t,a);break;case 1:bt||(va(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Ep(a,t,i)),Ua(e,t,a);break;case 21:Ua(e,t,a);break;case 22:bt=(i=bt)||a.memoizedState!==null,Ua(e,t,a),bt=i;break;default:Ua(e,t,a)}}function Bp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mi(e)}catch(a){Pe(t,t.return,a)}}}function Dp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mi(e)}catch(a){Pe(t,t.return,a)}}function a1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new kp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new kp),t;default:throw Error(o(435,e.tag))}}function Vs(e,t){var a=a1(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var c=d1.bind(null,e,i);i.then(c,c)}})}function Ht(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var c=a[i],d=e,m=t,y=m;e:for(;y!==null;){switch(y.tag){case 27:if(dn(y.type)){rt=y.stateNode,Ut=!1;break e}break;case 5:rt=y.stateNode,Ut=!1;break e;case 3:case 4:rt=y.stateNode.containerInfo,Ut=!0;break e}y=y.return}if(rt===null)throw Error(o(160));Mp(d,m,c),rt=null,Ut=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Lp(t,e),t=t.sibling}var fa=null;function Lp(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ht(t,e),qt(e),i&4&&(nn(3,e,e.return),jr(3,e),nn(5,e,e.return));break;case 1:Ht(t,e),qt(e),i&512&&(bt||a===null||va(a,a.return)),i&64&&La&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var c=fa;if(Ht(t,e),qt(e),i&512&&(bt||a===null||va(a,a.return)),i&4){var d=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(i){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Ii]||d[St]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(i),c.head.insertBefore(d,c.querySelector("head > title"))),zt(d,i,a),d[St]=e,vt(d),i=d;break e;case"link":var m=Lh("link","href",c).get(i+(a.href||""));if(m){for(var y=0;y<m.length;y++)if(d=m[y],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(y,1);break t}}d=c.createElement(i),zt(d,i,a),c.head.appendChild(d);break;case"meta":if(m=Lh("meta","content",c).get(i+(a.content||""))){for(y=0;y<m.length;y++)if(d=m[y],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(y,1);break t}}d=c.createElement(i),zt(d,i,a),c.head.appendChild(d);break;default:throw Error(o(468,i))}d[St]=e,vt(d),i=d}e.stateNode=i}else Uh(c,e.type,e.stateNode);else e.stateNode=Dh(c,i,e.memoizedProps);else d!==i?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,i===null?Uh(c,e.type,e.stateNode):Dh(c,i,e.memoizedProps)):i===null&&e.stateNode!==null&&dc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ht(t,e),qt(e),i&512&&(bt||a===null||va(a,a.return)),a!==null&&i&4&&dc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ht(t,e),qt(e),i&512&&(bt||a===null||va(a,a.return)),e.flags&32){c=e.stateNode;try{ai(c,"")}catch(xe){Pe(e,e.return,xe)}}i&4&&e.stateNode!=null&&(c=e.memoizedProps,dc(e,c,a!==null?a.memoizedProps:c)),i&1024&&(hc=!0);break;case 6:if(Ht(t,e),qt(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(xe){Pe(e,e.return,xe)}}break;case 3:if(al=null,c=fa,fa=el(t.containerInfo),Ht(t,e),fa=c,qt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Mi(t.containerInfo)}catch(xe){Pe(e,e.return,xe)}hc&&(hc=!1,Up(e));break;case 4:i=fa,fa=el(e.stateNode.containerInfo),Ht(t,e),qt(e),fa=i;break;case 12:Ht(t,e),qt(e);break;case 31:Ht(t,e),qt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Vs(e,i)));break;case 13:Ht(t,e),qt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qs=Rt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Vs(e,i)));break;case 22:c=e.memoizedState!==null;var N=a!==null&&a.memoizedState!==null,B=La,Y=bt;if(La=B||c,bt=Y||N,Ht(t,e),bt=Y,La=B,qt(e),i&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(a===null||N||La||bt||Dn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){N=a=t;try{if(d=N.stateNode,c)m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{y=N.stateNode;var Z=N.memoizedProps.style,L=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;y.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(xe){Pe(N,N.return,xe)}}}else if(t.tag===6){if(a===null){N=t;try{N.stateNode.nodeValue=c?"":N.memoizedProps}catch(xe){Pe(N,N.return,xe)}}}else if(t.tag===18){if(a===null){N=t;try{var G=N.stateNode;c?Eh(G,!0):Eh(N.stateNode,!1)}catch(xe){Pe(N,N.return,xe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Vs(e,a))));break;case 19:Ht(t,e),qt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Vs(e,i)));break;case 30:break;case 21:break;default:Ht(t,e),qt(e)}}function qt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(zp(i)){a=i;break}i=i.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var c=a.stateNode,d=fc(e);qs(e,d,c);break;case 5:var m=a.stateNode;a.flags&32&&(ai(m,""),a.flags&=-33);var y=fc(e);qs(e,y,m);break;case 3:case 4:var N=a.stateNode.containerInfo,B=fc(e);pc(e,B,N);break;default:throw Error(o(161))}}catch(Y){Pe(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Up(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Up(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ha(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Tp(e,t.alternate,t),t=t.sibling}function Dn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:nn(4,t,t.return),Dn(t);break;case 1:va(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ep(t,t.return,a),Dn(t);break;case 27:Tr(t.stateNode);case 26:case 5:va(t,t.return),Dn(t);break;case 22:t.memoizedState===null&&Dn(t);break;case 30:Dn(t);break;default:Dn(t)}e=e.sibling}}function qa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,c=e,d=t,m=d.flags;switch(d.tag){case 0:case 11:case 15:qa(c,d,a),jr(4,d);break;case 1:if(qa(c,d,a),i=d,c=i.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(B){Pe(i,i.return,B)}if(i=d,c=i.updateQueue,c!==null){var y=i.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)hf(N[c],y)}catch(B){Pe(i,i.return,B)}}a&&m&64&&Np(d),wr(d,d.return);break;case 27:Op(d);case 26:case 5:qa(c,d,a),a&&i===null&&m&4&&Cp(d),wr(d,d.return);break;case 12:qa(c,d,a);break;case 31:qa(c,d,a),a&&m&4&&Bp(c,d);break;case 13:qa(c,d,a),a&&m&4&&Dp(c,d);break;case 22:d.memoizedState===null&&qa(c,d,a),wr(d,d.return);break;case 30:break;default:qa(c,d,a)}t=t.sibling}}function mc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&or(a))}function gc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&or(e))}function pa(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hp(e,t,a,i),t=t.sibling}function Hp(e,t,a,i){var c=t.flags;switch(t.tag){case 0:case 11:case 15:pa(e,t,a,i),c&2048&&jr(9,t);break;case 1:pa(e,t,a,i);break;case 3:pa(e,t,a,i),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&or(e)));break;case 12:if(c&2048){pa(e,t,a,i),e=t.stateNode;try{var d=t.memoizedProps,m=d.id,y=d.onPostCommit;typeof y=="function"&&y(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Pe(t,t.return,N)}}else pa(e,t,a,i);break;case 31:pa(e,t,a,i);break;case 13:pa(e,t,a,i);break;case 23:break;case 22:d=t.stateNode,m=t.alternate,t.memoizedState!==null?d._visibility&2?pa(e,t,a,i):Ar(e,t):d._visibility&2?pa(e,t,a,i):(d._visibility|=2,wi(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),c&2048&&mc(m,t);break;case 24:pa(e,t,a,i),c&2048&&gc(t.alternate,t);break;default:pa(e,t,a,i)}}function wi(e,t,a,i,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var d=e,m=t,y=a,N=i,B=m.flags;switch(m.tag){case 0:case 11:case 15:wi(d,m,y,N,c),jr(8,m);break;case 23:break;case 22:var Y=m.stateNode;m.memoizedState!==null?Y._visibility&2?wi(d,m,y,N,c):Ar(d,m):(Y._visibility|=2,wi(d,m,y,N,c)),c&&B&2048&&mc(m.alternate,m);break;case 24:wi(d,m,y,N,c),c&&B&2048&&gc(m.alternate,m);break;default:wi(d,m,y,N,c)}t=t.sibling}}function Ar(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,c=i.flags;switch(i.tag){case 22:Ar(a,i),c&2048&&mc(i.alternate,i);break;case 24:Ar(a,i),c&2048&&gc(i.alternate,i);break;default:Ar(a,i)}t=t.sibling}}var Sr=8192;function Ai(e,t,a){if(e.subtreeFlags&Sr)for(e=e.child;e!==null;)qp(e,t,a),e=e.sibling}function qp(e,t,a){switch(e.tag){case 26:Ai(e,t,a),e.flags&Sr&&e.memoizedState!==null&&Q1(a,fa,e.memoizedState,e.memoizedProps);break;case 5:Ai(e,t,a);break;case 3:case 4:var i=fa;fa=el(e.stateNode.containerInfo),Ai(e,t,a),fa=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Sr,Sr=16777216,Ai(e,t,a),Sr=i):Ai(e,t,a));break;default:Ai(e,t,a)}}function Vp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];jt=i,Qp(i,e)}Vp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gp(e),e=e.sibling}function Gp(e){switch(e.tag){case 0:case 11:case 15:Nr(e),e.flags&2048&&nn(9,e,e.return);break;case 3:Nr(e);break;case 12:Nr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gs(e)):Nr(e);break;default:Nr(e)}}function Gs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];jt=i,Qp(i,e)}Vp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:nn(8,t,t.return),Gs(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Gs(t));break;default:Gs(t)}e=e.sibling}}function Qp(e,t){for(;jt!==null;){var a=jt;switch(a.tag){case 0:case 11:case 15:nn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:or(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,jt=i;else e:for(a=e;jt!==null;){i=jt;var c=i.sibling,d=i.return;if(Rp(i),i===a){jt=null;break e}if(c!==null){c.return=d,jt=c;break e}jt=d}}}var n1={getCacheForType:function(e){var t=Et(mt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Et(mt).controller.signal}},i1=typeof WeakMap=="function"?WeakMap:Map,Ye=0,We=null,Be=null,Le=0,Fe=0,It=null,rn=!1,Si=!1,xc=!1,Va=0,ut=0,sn=0,Ln=0,bc=0,Jt=0,Ni=0,Er=null,Vt=null,yc=!1,Qs=0,Yp=0,Ys=1/0,Ks=null,ln=null,yt=0,on=null,Ei=null,Ga=0,vc=0,jc=null,Kp=null,Cr=0,wc=null;function Wt(){return(Ye&2)!==0&&Le!==0?Le&-Le:T.T!==null?zc():rd()}function Fp(){if(Jt===0)if((Le&536870912)===0||qe){var e=ot;ot<<=1,(ot&3932160)===0&&(ot=262144),Jt=e}else Jt=536870912;return e=Zt.current,e!==null&&(e.flags|=32),Jt}function Gt(e,t,a){(e===We&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(Ci(e,0),cn(e,Le,Jt,!1)),Xi(e,a),((Ye&2)===0||e!==We)&&(e===We&&((Ye&2)===0&&(Ln|=a),ut===4&&cn(e,Le,Jt,!1)),ja(e))}function Pp(e,t,a){if((Ye&6)!==0)throw Error(o(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Kt(e,t),c=i?l1(e,t):Sc(e,t,!0),d=i;do{if(c===0){Si&&!i&&cn(e,t,0,!1);break}else{if(a=e.current.alternate,d&&!r1(a)){c=Sc(e,t,!1),d=!1;continue}if(c===2){if(d=t,e.errorRecoveryDisabledLanes&d)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var y=e;c=Er;var N=y.current.memoizedState.isDehydrated;if(N&&(Ci(y,m).flags|=256),m=Sc(y,m,!1),m!==2){if(xc&&!N){y.errorRecoveryDisabledLanes|=d,Ln|=d,c=4;break e}d=Vt,Vt=c,d!==null&&(Vt===null?Vt=d:Vt.push.apply(Vt,d))}c=m}if(d=!1,c!==2)continue}}if(c===1){Ci(e,0),cn(e,t,0,!0);break}e:{switch(i=e,d=c,d){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:cn(i,t,Jt,!rn);break e;case 2:Vt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(c=Qs+300-Rt(),10<c)){if(cn(i,t,Jt,!rn),ua(i,0,!0)!==0)break e;Ga=t,i.timeoutHandle=Ah(Zp.bind(null,i,a,Vt,Ks,yc,t,Jt,Ln,Ni,rn,d,"Throttled",-0,0),c);break e}Zp(i,a,Vt,Ks,yc,t,Jt,Ln,Ni,rn,d,null,-0,0)}}break}while(!0);ja(e)}function Zp(e,t,a,i,c,d,m,y,N,B,Y,Z,L,G){if(e.timeoutHandle=-1,Z=t.subtreeFlags,Z&8192||(Z&16785408)===16785408){Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ea},qp(t,d,Z);var xe=(d&62914560)===d?Qs-Rt():(d&4194048)===d?Yp-Rt():0;if(xe=Y1(Z,xe),xe!==null){Ga=d,e.cancelPendingCommit=xe(th.bind(null,e,t,d,a,i,c,m,y,N,Y,Z,null,L,G)),cn(e,d,m,!B);return}}th(e,t,d,a,i,c,m,y,N)}function r1(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var c=a[i],d=c.getSnapshot;c=c.value;try{if(!Ft(d(),c))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t,a,i){t&=~bc,t&=~Ln,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var c=t;0<c;){var d=31-de(c),m=1<<d;i[d]=-1,c&=~m}a!==0&&ad(e,a,t)}function Fs(){return(Ye&6)===0?(zr(0),!1):!0}function Ac(){if(Be!==null){if(Fe===0)var e=Be.return;else e=Be,ka=Cn=null,qo(e),xi=null,ur=0,e=Be;for(;e!==null;)Sp(e.alternate,e),e=e.return;Be=null}}function Ci(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,N1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ga=0,Ac(),We=e,Be=a=za(e.current,null),Le=t,Fe=0,It=null,rn=!1,Si=Kt(e,t),xc=!1,Ni=Jt=bc=Ln=sn=ut=0,Vt=Er=null,yc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var c=31-de(i),d=1<<c;t|=e[c],i&=~d}return Va=t,fs(),a}function Xp(e,t){Ce=null,T.H=br,t===gi||t===vs?(t=uf(),Fe=3):t===Co?(t=uf(),Fe=4):Fe=t===tc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,It=t,Be===null&&(ut=1,Bs(e,ta(t,e.current)))}function Ip(){var e=Zt.current;return e===null?!0:(Le&4194048)===Le?ra===null:(Le&62914560)===Le||(Le&536870912)!==0?e===ra:!1}function Jp(){var e=T.H;return T.H=br,e===null?br:e}function Wp(){var e=T.A;return T.A=n1,e}function Ps(){ut=4,rn||(Le&4194048)!==Le&&Zt.current!==null||(Si=!0),(sn&134217727)===0&&(Ln&134217727)===0||We===null||cn(We,Le,Jt,!1)}function Sc(e,t,a){var i=Ye;Ye|=2;var c=Jp(),d=Wp();(We!==e||Le!==t)&&(Ks=null,Ci(e,t)),t=!1;var m=ut;e:do try{if(Fe!==0&&Be!==null){var y=Be,N=It;switch(Fe){case 8:Ac(),m=6;break e;case 3:case 2:case 9:case 6:Zt.current===null&&(t=!0);var B=Fe;if(Fe=0,It=null,zi(e,y,N,B),a&&Si){m=0;break e}break;default:B=Fe,Fe=0,It=null,zi(e,y,N,B)}}s1(),m=ut;break}catch(Y){Xp(e,Y)}while(!0);return t&&e.shellSuspendCounter++,ka=Cn=null,Ye=i,T.H=c,T.A=d,Be===null&&(We=null,Le=0,fs()),m}function s1(){for(;Be!==null;)_p(Be)}function l1(e,t){var a=Ye;Ye|=2;var i=Jp(),c=Wp();We!==e||Le!==t?(Ks=null,Ys=Rt()+500,Ci(e,t)):Si=Kt(e,t);e:do try{if(Fe!==0&&Be!==null){t=Be;var d=It;t:switch(Fe){case 1:Fe=0,It=null,zi(e,t,d,1);break;case 2:case 9:if(of(d)){Fe=0,It=null,$p(t);break}t=function(){Fe!==2&&Fe!==9||We!==e||(Fe=7),ja(e)},d.then(t,t);break e;case 3:Fe=7;break e;case 4:Fe=5;break e;case 7:of(d)?(Fe=0,It=null,$p(t)):(Fe=0,It=null,zi(e,t,d,7));break;case 5:var m=null;switch(Be.tag){case 26:m=Be.memoizedState;case 5:case 27:var y=Be;if(m?Hh(m):y.stateNode.complete){Fe=0,It=null;var N=y.sibling;if(N!==null)Be=N;else{var B=y.return;B!==null?(Be=B,Zs(B)):Be=null}break t}}Fe=0,It=null,zi(e,t,d,5);break;case 6:Fe=0,It=null,zi(e,t,d,6);break;case 8:Ac(),ut=6;break e;default:throw Error(o(462))}}o1();break}catch(Y){Xp(e,Y)}while(!0);return ka=Cn=null,T.H=i,T.A=c,Ye=a,Be!==null?0:(We=null,Le=0,fs(),ut)}function o1(){for(;Be!==null&&!Zn();)_p(Be)}function _p(e){var t=wp(e.alternate,e,Va);e.memoizedProps=e.pendingProps,t===null?Zs(e):Be=t}function $p(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=gp(a,t,t.pendingProps,t.type,void 0,Le);break;case 11:t=gp(a,t,t.pendingProps,t.type.render,t.ref,Le);break;case 5:qo(t);default:Sp(a,t),t=Be=Jd(t,Va),t=wp(a,t,Va)}e.memoizedProps=e.pendingProps,t===null?Zs(e):Be=t}function zi(e,t,a,i){ka=Cn=null,qo(t),xi=null,ur=0;var c=t.return;try{if(J0(e,c,t,a,Le)){ut=1,Bs(e,ta(a,e.current)),Be=null;return}}catch(d){if(c!==null)throw Be=c,d;ut=1,Bs(e,ta(a,e.current)),Be=null;return}t.flags&32768?(qe||i===1?e=!0:Si||(Le&536870912)!==0?e=!1:(rn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Zt.current,i!==null&&i.tag===13&&(i.flags|=16384))),eh(t,e)):Zs(t)}function Zs(e){var t=e;do{if((t.flags&32768)!==0){eh(t,rn);return}e=t.return;var a=$0(t.alternate,t,Va);if(a!==null){Be=a;return}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);ut===0&&(ut=5)}function eh(e,t){do{var a=e1(e.alternate,e);if(a!==null){a.flags&=32767,Be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Be=e;return}Be=e=a}while(e!==null);ut=6,Be=null}function th(e,t,a,i,c,d,m,y,N){e.cancelPendingCommit=null;do Xs();while(yt!==0);if((Ye&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(d=t.lanes|t.childLanes,d|=fo,Gx(e,a,d,m,y,N),e===We&&(Be=We=null,Le=0),Ei=t,on=e,Ga=a,vc=d,jc=c,Kp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,f1(ne,function(){return sh(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=T.T,T.T=null,c=J.p,J.p=2,m=Ye,Ye|=4;try{t1(e,t,a)}finally{Ye=m,J.p=c,T.T=i}}yt=1,ah(),nh(),ih()}}function ah(){if(yt===1){yt=0;var e=on,t=Ei,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=T.T,T.T=null;var i=J.p;J.p=2;var c=Ye;Ye|=4;try{Lp(t,e);var d=Lc,m=Gd(e.containerInfo),y=d.focusedElem,N=d.selectionRange;if(m!==y&&y&&y.ownerDocument&&Vd(y.ownerDocument.documentElement,y)){if(N!==null&&so(y)){var B=N.start,Y=N.end;if(Y===void 0&&(Y=B),"selectionStart"in y)y.selectionStart=B,y.selectionEnd=Math.min(Y,y.value.length);else{var Z=y.ownerDocument||document,L=Z&&Z.defaultView||window;if(L.getSelection){var G=L.getSelection(),xe=y.textContent.length,je=Math.min(N.start,xe),Ie=N.end===void 0?je:Math.min(N.end,xe);!G.extend&&je>Ie&&(m=Ie,Ie=je,je=m);var k=qd(y,je),C=qd(y,Ie);if(k&&C&&(G.rangeCount!==1||G.anchorNode!==k.node||G.anchorOffset!==k.offset||G.focusNode!==C.node||G.focusOffset!==C.offset)){var M=Z.createRange();M.setStart(k.node,k.offset),G.removeAllRanges(),je>Ie?(G.addRange(M),G.extend(C.node,C.offset)):(M.setEnd(C.node,C.offset),G.addRange(M))}}}}for(Z=[],G=y;G=G.parentNode;)G.nodeType===1&&Z.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<Z.length;y++){var F=Z[y];F.element.scrollLeft=F.left,F.element.scrollTop=F.top}}sl=!!Dc,Lc=Dc=null}finally{Ye=c,J.p=i,T.T=a}}e.current=t,yt=2}}function nh(){if(yt===2){yt=0;var e=on,t=Ei,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=T.T,T.T=null;var i=J.p;J.p=2;var c=Ye;Ye|=4;try{Tp(e,t.alternate,t)}finally{Ye=c,J.p=i,T.T=a}}yt=3}}function ih(){if(yt===4||yt===3){yt=0,Pi();var e=on,t=Ei,a=Ga,i=Kp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?yt=5:(yt=0,Ei=on=null,rh(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ln=null),Gl(a),t=t.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(P,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=T.T,c=J.p,J.p=2,T.T=null;try{for(var d=e.onRecoverableError,m=0;m<i.length;m++){var y=i[m];d(y.value,{componentStack:y.stack})}}finally{T.T=t,J.p=c}}(Ga&3)!==0&&Xs(),ja(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===wc?Cr++:(Cr=0,wc=e):Cr=0,zr(0)}}function rh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,or(t)))}function Xs(){return ah(),nh(),ih(),sh()}function sh(){if(yt!==5)return!1;var e=on,t=vc;vc=0;var a=Gl(Ga),i=T.T,c=J.p;try{J.p=32>a?32:a,T.T=null,a=jc,jc=null;var d=on,m=Ga;if(yt=0,Ei=on=null,Ga=0,(Ye&6)!==0)throw Error(o(331));var y=Ye;if(Ye|=4,Gp(d.current),Hp(d,d.current,m,a),Ye=y,zr(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(P,d)}catch{}return!0}finally{J.p=c,T.T=i,rh(e,t)}}function lh(e,t,a){t=ta(a,t),t=ec(e.stateNode,t,2),e=en(e,t,2),e!==null&&(Xi(e,2),ja(e))}function Pe(e,t,a){if(e.tag===3)lh(e,e,a);else for(;t!==null;){if(t.tag===3){lh(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ln===null||!ln.has(i))){e=ta(a,e),a=op(2),i=en(t,a,2),i!==null&&(cp(a,i,t,e),Xi(i,2),ja(i));break}}t=t.return}}function Nc(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new i1;var c=new Set;i.set(t,c)}else c=i.get(t),c===void 0&&(c=new Set,i.set(t,c));c.has(a)||(xc=!0,c.add(a),e=c1.bind(null,e,t,a),t.then(e,e))}function c1(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Le&a)===a&&(ut===4||ut===3&&(Le&62914560)===Le&&300>Rt()-Qs?(Ye&2)===0&&Ci(e,0):bc|=a,Ni===Le&&(Ni=0)),ja(e)}function oh(e,t){t===0&&(t=Zi()),e=Sn(e,t),e!==null&&(Xi(e,t),ja(e))}function u1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),oh(e,a)}function d1(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),oh(e,a)}function f1(e,t){return Pn(e,t)}var Is=null,Oi=null,Ec=!1,Js=!1,Cc=!1,un=0;function ja(e){e!==Oi&&e.next===null&&(Oi===null?Is=Oi=e:Oi=Oi.next=e),Js=!0,Ec||(Ec=!0,h1())}function zr(e,t){if(!Cc&&Js){Cc=!0;do for(var a=!1,i=Is;i!==null;){if(e!==0){var c=i.pendingLanes;if(c===0)var d=0;else{var m=i.suspendedLanes,y=i.pingedLanes;d=(1<<31-de(42|e)+1)-1,d&=c&~(m&~y),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,fh(i,d))}else d=Le,d=ua(i,i===We?d:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(d&3)===0||Kt(i,d)||(a=!0,fh(i,d));i=i.next}while(a);Cc=!1}}function p1(){ch()}function ch(){Js=Ec=!1;var e=0;un!==0&&S1()&&(e=un);for(var t=Rt(),a=null,i=Is;i!==null;){var c=i.next,d=uh(i,t);d===0?(i.next=null,a===null?Is=c:a.next=c,c===null&&(Oi=a)):(a=i,(e!==0||(d&3)!==0)&&(Js=!0)),i=c}yt!==0&&yt!==5||zr(e),un!==0&&(un=0)}function uh(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var m=31-de(d),y=1<<m,N=c[m];N===-1?((y&a)===0||(y&i)!==0)&&(c[m]=Xn(y,t)):N<=t&&(e.expiredLanes|=y),d&=~y}if(t=We,a=Le,a=ua(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&yn(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Kt(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&yn(i),Gl(a)){case 2:case 8:a=ae;break;case 32:a=ne;break;case 268435456:a=Te;break;default:a=ne}return i=dh.bind(null,e),a=Pn(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&yn(i),e.callbackPriority=2,e.callbackNode=null,2}function dh(e,t){if(yt!==0&&yt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xs()&&e.callbackNode!==a)return null;var i=Le;return i=ua(e,e===We?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Pp(e,i,t),uh(e,Rt()),e.callbackNode!=null&&e.callbackNode===a?dh.bind(null,e):null)}function fh(e,t){if(Xs())return null;Pp(e,t,!0)}function h1(){E1(function(){(Ye&6)!==0?Pn(D,p1):ch()})}function zc(){if(un===0){var e=hi;e===0&&(e=Ke,Ke<<=1,(Ke&261888)===0&&(Ke=256)),un=e}return un}function ph(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:is(""+e)}function hh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function m1(e,t,a,i,c){if(t==="submit"&&a&&a.stateNode===c){var d=ph((c[Dt]||null).action),m=i.submitter;m&&(t=(t=m[Dt]||null)?ph(t.formAction):m.getAttribute("formAction"),t!==null&&(d=t,m=null));var y=new os("action","action",null,i,c);e.push({event:y,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(un!==0){var N=m?hh(c,m):new FormData(c);Xo(a,{pending:!0,data:N,method:c.method,action:d},null,N)}}else typeof d=="function"&&(y.preventDefault(),N=m?hh(c,m):new FormData(c),Xo(a,{pending:!0,data:N,method:c.method,action:d},d,N))},currentTarget:c}]})}}for(var Oc=0;Oc<uo.length;Oc++){var kc=uo[Oc],g1=kc.toLowerCase(),x1=kc[0].toUpperCase()+kc.slice(1);da(g1,"on"+x1)}da(Kd,"onAnimationEnd"),da(Fd,"onAnimationIteration"),da(Pd,"onAnimationStart"),da("dblclick","onDoubleClick"),da("focusin","onFocus"),da("focusout","onBlur"),da(M0,"onTransitionRun"),da(B0,"onTransitionStart"),da(D0,"onTransitionCancel"),da(Zd,"onTransitionEnd"),ei("onMouseEnter",["mouseout","mouseover"]),ei("onMouseLeave",["mouseout","mouseover"]),ei("onPointerEnter",["pointerout","pointerover"]),ei("onPointerLeave",["pointerout","pointerover"]),vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),vn("onBeforeInput",["compositionend","keypress","textInput","paste"]),vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Or));function mh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],c=i.event;i=i.listeners;e:{var d=void 0;if(t)for(var m=i.length-1;0<=m;m--){var y=i[m],N=y.instance,B=y.currentTarget;if(y=y.listener,N!==d&&c.isPropagationStopped())break e;d=y,c.currentTarget=B;try{d(c)}catch(Y){ds(Y)}c.currentTarget=null,d=N}else for(m=0;m<i.length;m++){if(y=i[m],N=y.instance,B=y.currentTarget,y=y.listener,N!==d&&c.isPropagationStopped())break e;d=y,c.currentTarget=B;try{d(c)}catch(Y){ds(Y)}c.currentTarget=null,d=N}}}}function De(e,t){var a=t[Ql];a===void 0&&(a=t[Ql]=new Set);var i=e+"__bubble";a.has(i)||(gh(t,e,2,!1),a.add(i))}function Tc(e,t,a){var i=0;t&&(i|=4),gh(a,e,i,t)}var Ws="_reactListening"+Math.random().toString(36).slice(2);function Rc(e){if(!e[Ws]){e[Ws]=!0,od.forEach(function(a){a!=="selectionchange"&&(b1.has(a)||Tc(a,!1,e),Tc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ws]||(t[Ws]=!0,Tc("selectionchange",!1,t))}}function gh(e,t,a,i){switch(Fh(t)){case 2:var c=P1;break;case 8:c=Z1;break;default:c=Zc}a=c.bind(null,t,a,e),c=void 0,!Wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),i?c!==void 0?e.addEventListener(t,a,{capture:!0,passive:c}):e.addEventListener(t,a,!0):c!==void 0?e.addEventListener(t,a,{passive:c}):e.addEventListener(t,a,!1)}function Mc(e,t,a,i,c){var d=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var m=i.tag;if(m===3||m===4){var y=i.stateNode.containerInfo;if(y===c)break;if(m===4)for(m=i.return;m!==null;){var N=m.tag;if((N===3||N===4)&&m.stateNode.containerInfo===c)return;m=m.return}for(;y!==null;){if(m=Wn(y),m===null)return;if(N=m.tag,N===5||N===6||N===26||N===27){i=d=m;continue e}y=y.parentNode}}i=i.return}vd(function(){var B=d,Y=Il(a),Z=[];e:{var L=Xd.get(e);if(L!==void 0){var G=os,xe=e;switch(e){case"keypress":if(ss(a)===0)break e;case"keydown":case"keyup":G=d0;break;case"focusin":xe="focus",G=to;break;case"focusout":xe="blur",G=to;break;case"beforeblur":case"afterblur":G=to;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=$x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=h0;break;case Kd:case Fd:case Pd:G=a0;break;case Zd:G=g0;break;case"scroll":case"scrollend":G=Wx;break;case"wheel":G=b0;break;case"copy":case"cut":case"paste":G=i0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Nd;break;case"toggle":case"beforetoggle":G=v0}var je=(t&4)!==0,Ie=!je&&(e==="scroll"||e==="scrollend"),k=je?L!==null?L+"Capture":null:L;je=[];for(var C=B,M;C!==null;){var F=C;if(M=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||M===null||k===null||(F=Wi(C,k),F!=null&&je.push(kr(C,F,M))),Ie)break;C=C.return}0<je.length&&(L=new G(L,xe,null,a,Y),Z.push({event:L,listeners:je}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",L&&a!==Xl&&(xe=a.relatedTarget||a.fromElement)&&(Wn(xe)||xe[Jn]))break e;if((G||L)&&(L=Y.window===Y?Y:(L=Y.ownerDocument)?L.defaultView||L.parentWindow:window,G?(xe=a.relatedTarget||a.toElement,G=B,xe=xe?Wn(xe):null,xe!==null&&(Ie=f(xe),je=xe.tag,xe!==Ie||je!==5&&je!==27&&je!==6)&&(xe=null)):(G=null,xe=B),G!==xe)){if(je=Ad,F="onMouseLeave",k="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(je=Nd,F="onPointerLeave",k="onPointerEnter",C="pointer"),Ie=G==null?L:Ji(G),M=xe==null?L:Ji(xe),L=new je(F,C+"leave",G,a,Y),L.target=Ie,L.relatedTarget=M,F=null,Wn(Y)===B&&(je=new je(k,C+"enter",xe,a,Y),je.target=M,je.relatedTarget=Ie,F=je),Ie=F,G&&xe)t:{for(je=y1,k=G,C=xe,M=0,F=k;F;F=je(F))M++;F=0;for(var ve=C;ve;ve=je(ve))F++;for(;0<M-F;)k=je(k),M--;for(;0<F-M;)C=je(C),F--;for(;M--;){if(k===C||C!==null&&k===C.alternate){je=k;break t}k=je(k),C=je(C)}je=null}else je=null;G!==null&&xh(Z,L,G,je,!1),xe!==null&&Ie!==null&&xh(Z,Ie,xe,je,!0)}}e:{if(L=B?Ji(B):window,G=L.nodeName&&L.nodeName.toLowerCase(),G==="select"||G==="input"&&L.type==="file")var Ve=Md;else if(Td(L))if(Bd)Ve=k0;else{Ve=z0;var be=C0}else G=L.nodeName,!G||G.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?B&&Zl(B.elementType)&&(Ve=Md):Ve=O0;if(Ve&&(Ve=Ve(e,B))){Rd(Z,Ve,a,Y);break e}be&&be(e,L,B),e==="focusout"&&B&&L.type==="number"&&B.memoizedProps.value!=null&&Pl(L,"number",L.value)}switch(be=B?Ji(B):window,e){case"focusin":(Td(be)||be.contentEditable==="true")&&(si=be,lo=B,rr=null);break;case"focusout":rr=lo=si=null;break;case"mousedown":oo=!0;break;case"contextmenu":case"mouseup":case"dragend":oo=!1,Qd(Z,a,Y);break;case"selectionchange":if(R0)break;case"keydown":case"keyup":Qd(Z,a,Y)}var ke;if(no)e:{switch(e){case"compositionstart":var Ue="onCompositionStart";break e;case"compositionend":Ue="onCompositionEnd";break e;case"compositionupdate":Ue="onCompositionUpdate";break e}Ue=void 0}else ri?Od(e,a)&&(Ue="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ue="onCompositionStart");Ue&&(Ed&&a.locale!=="ko"&&(ri||Ue!=="onCompositionStart"?Ue==="onCompositionEnd"&&ri&&(ke=jd()):(Za=Y,_l="value"in Za?Za.value:Za.textContent,ri=!0)),be=_s(B,Ue),0<be.length&&(Ue=new Sd(Ue,e,null,a,Y),Z.push({event:Ue,listeners:be}),ke?Ue.data=ke:(ke=kd(a),ke!==null&&(Ue.data=ke)))),(ke=w0?A0(e,a):S0(e,a))&&(Ue=_s(B,"onBeforeInput"),0<Ue.length&&(be=new Sd("onBeforeInput","beforeinput",null,a,Y),Z.push({event:be,listeners:Ue}),be.data=ke)),m1(Z,e,B,a,Y)}mh(Z,t)})}function kr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function _s(e,t){for(var a=t+"Capture",i=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Wi(e,a),c!=null&&i.unshift(kr(e,c,d)),c=Wi(e,t),c!=null&&i.push(kr(e,c,d))),e.tag===3)return i;e=e.return}return[]}function y1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xh(e,t,a,i,c){for(var d=t._reactName,m=[];a!==null&&a!==i;){var y=a,N=y.alternate,B=y.stateNode;if(y=y.tag,N!==null&&N===i)break;y!==5&&y!==26&&y!==27||B===null||(N=B,c?(B=Wi(a,d),B!=null&&m.unshift(kr(a,B,N))):c||(B=Wi(a,d),B!=null&&m.push(kr(a,B,N)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var v1=/\r\n?/g,j1=/\u0000|\uFFFD/g;function bh(e){return(typeof e=="string"?e:""+e).replace(v1,`
`).replace(j1,"")}function yh(e,t){return t=bh(t),bh(e)===t}function Xe(e,t,a,i,c,d){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ai(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ai(e,""+i);break;case"className":as(e,"class",i);break;case"tabIndex":as(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":as(e,a,i);break;case"style":bd(e,i,d);break;case"data":if(t!=="object"){as(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=is(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(t!=="input"&&Xe(e,t,"name",c.name,c,null),Xe(e,t,"formEncType",c.formEncType,c,null),Xe(e,t,"formMethod",c.formMethod,c,null),Xe(e,t,"formTarget",c.formTarget,c,null)):(Xe(e,t,"encType",c.encType,c,null),Xe(e,t,"method",c.method,c,null),Xe(e,t,"target",c.target,c,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=is(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=Ea);break;case"onScroll":i!=null&&De("scroll",e);break;case"onScrollEnd":i!=null&&De("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(a=i.__html,a!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=is(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":De("beforetoggle",e),De("toggle",e),ts(e,"popover",i);break;case"xlinkActuate":Na(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Na(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Na(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Na(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Na(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Na(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Na(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Na(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Na(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ts(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ix.get(a)||a,ts(e,a,i))}}function Bc(e,t,a,i,c,d){switch(a){case"style":bd(e,i,d);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(a=i.__html,a!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof i=="string"?ai(e,i):(typeof i=="number"||typeof i=="bigint")&&ai(e,""+i);break;case"onScroll":i!=null&&De("scroll",e);break;case"onScrollEnd":i!=null&&De("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),t=a.slice(2,c?a.length-7:void 0),d=e[Dt]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(t,d,c),typeof i=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,c);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):ts(e,a,i)}}}function zt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var i=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var m=a[d];if(m!=null)switch(d){case"src":i=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Xe(e,t,d,m,a,null)}}c&&Xe(e,t,"srcSet",a.srcSet,a,null),i&&Xe(e,t,"src",a.src,a,null);return;case"input":De("invalid",e);var y=d=m=c=null,N=null,B=null;for(i in a)if(a.hasOwnProperty(i)){var Y=a[i];if(Y!=null)switch(i){case"name":c=Y;break;case"type":m=Y;break;case"checked":N=Y;break;case"defaultChecked":B=Y;break;case"value":d=Y;break;case"defaultValue":y=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(o(137,t));break;default:Xe(e,t,i,Y,a,null)}}hd(e,d,y,N,B,m,c,!1);return;case"select":De("invalid",e),i=m=d=null;for(c in a)if(a.hasOwnProperty(c)&&(y=a[c],y!=null))switch(c){case"value":d=y;break;case"defaultValue":m=y;break;case"multiple":i=y;default:Xe(e,t,c,y,a,null)}t=d,a=m,e.multiple=!!i,t!=null?ti(e,!!i,t,!1):a!=null&&ti(e,!!i,a,!0);return;case"textarea":De("invalid",e),d=c=i=null;for(m in a)if(a.hasOwnProperty(m)&&(y=a[m],y!=null))switch(m){case"value":i=y;break;case"defaultValue":c=y;break;case"children":d=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(91));break;default:Xe(e,t,m,y,a,null)}gd(e,i,c,d);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(i=a[N],i!=null))switch(N){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Xe(e,t,N,i,a,null)}return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(i=0;i<Or.length;i++)De(Or[i],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in a)if(a.hasOwnProperty(B)&&(i=a[B],i!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Xe(e,t,B,i,a,null)}return;default:if(Zl(t)){for(Y in a)a.hasOwnProperty(Y)&&(i=a[Y],i!==void 0&&Bc(e,t,Y,i,a,void 0));return}}for(y in a)a.hasOwnProperty(y)&&(i=a[y],i!=null&&Xe(e,t,y,i,a,null))}function w1(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,m=null,y=null,N=null,B=null,Y=null;for(G in a){var Z=a[G];if(a.hasOwnProperty(G)&&Z!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":N=Z;default:i.hasOwnProperty(G)||Xe(e,t,G,null,i,Z)}}for(var L in i){var G=i[L];if(Z=a[L],i.hasOwnProperty(L)&&(G!=null||Z!=null))switch(L){case"type":d=G;break;case"name":c=G;break;case"checked":B=G;break;case"defaultChecked":Y=G;break;case"value":m=G;break;case"defaultValue":y=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(o(137,t));break;default:G!==Z&&Xe(e,t,L,G,i,Z)}}Fl(e,m,y,N,B,Y,d,c);return;case"select":G=m=y=L=null;for(d in a)if(N=a[d],a.hasOwnProperty(d)&&N!=null)switch(d){case"value":break;case"multiple":G=N;default:i.hasOwnProperty(d)||Xe(e,t,d,null,i,N)}for(c in i)if(d=i[c],N=a[c],i.hasOwnProperty(c)&&(d!=null||N!=null))switch(c){case"value":L=d;break;case"defaultValue":y=d;break;case"multiple":m=d;default:d!==N&&Xe(e,t,c,d,i,N)}t=y,a=m,i=G,L!=null?ti(e,!!a,L,!1):!!i!=!!a&&(t!=null?ti(e,!!a,t,!0):ti(e,!!a,a?[]:"",!1));return;case"textarea":G=L=null;for(y in a)if(c=a[y],a.hasOwnProperty(y)&&c!=null&&!i.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Xe(e,t,y,null,i,c)}for(m in i)if(c=i[m],d=a[m],i.hasOwnProperty(m)&&(c!=null||d!=null))switch(m){case"value":L=c;break;case"defaultValue":G=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:c!==d&&Xe(e,t,m,c,i,d)}md(e,L,G);return;case"option":for(var xe in a)if(L=a[xe],a.hasOwnProperty(xe)&&L!=null&&!i.hasOwnProperty(xe))switch(xe){case"selected":e.selected=!1;break;default:Xe(e,t,xe,null,i,L)}for(N in i)if(L=i[N],G=a[N],i.hasOwnProperty(N)&&L!==G&&(L!=null||G!=null))switch(N){case"selected":e.selected=L&&typeof L!="function"&&typeof L!="symbol";break;default:Xe(e,t,N,L,i,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var je in a)L=a[je],a.hasOwnProperty(je)&&L!=null&&!i.hasOwnProperty(je)&&Xe(e,t,je,null,i,L);for(B in i)if(L=i[B],G=a[B],i.hasOwnProperty(B)&&L!==G&&(L!=null||G!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(o(137,t));break;default:Xe(e,t,B,L,i,G)}return;default:if(Zl(t)){for(var Ie in a)L=a[Ie],a.hasOwnProperty(Ie)&&L!==void 0&&!i.hasOwnProperty(Ie)&&Bc(e,t,Ie,void 0,i,L);for(Y in i)L=i[Y],G=a[Y],!i.hasOwnProperty(Y)||L===G||L===void 0&&G===void 0||Bc(e,t,Y,L,i,G);return}}for(var k in a)L=a[k],a.hasOwnProperty(k)&&L!=null&&!i.hasOwnProperty(k)&&Xe(e,t,k,null,i,L);for(Z in i)L=i[Z],G=a[Z],!i.hasOwnProperty(Z)||L===G||L==null&&G==null||Xe(e,t,Z,L,i,G)}function vh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function A1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var c=a[i],d=c.transferSize,m=c.initiatorType,y=c.duration;if(d&&y&&vh(m)){for(m=0,y=c.responseEnd,i+=1;i<a.length;i++){var N=a[i],B=N.startTime;if(B>y)break;var Y=N.transferSize,Z=N.initiatorType;Y&&vh(Z)&&(N=N.responseEnd,m+=Y*(N<y?1:(y-B)/(N-B)))}if(--i,t+=8*(d+m)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Dc=null,Lc=null;function $s(e){return e.nodeType===9?e:e.ownerDocument}function jh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Uc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hc=null;function S1(){var e=window.event;return e&&e.type==="popstate"?e===Hc?!1:(Hc=e,!0):(Hc=null,!1)}var Ah=typeof setTimeout=="function"?setTimeout:void 0,N1=typeof clearTimeout=="function"?clearTimeout:void 0,Sh=typeof Promise=="function"?Promise:void 0,E1=typeof queueMicrotask=="function"?queueMicrotask:typeof Sh<"u"?function(e){return Sh.resolve(null).then(e).catch(C1)}:Ah;function C1(e){setTimeout(function(){throw e})}function dn(e){return e==="head"}function Nh(e,t){var a=t,i=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(c),Mi(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")Tr(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Tr(a);for(var d=a.firstChild;d;){var m=d.nextSibling,y=d.nodeName;d[Ii]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=m}}else a==="body"&&Tr(e.ownerDocument.body);a=c}while(a);Mi(t)}function Eh(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function qc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qc(a),Yl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function z1(e,t,a,i){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ii])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=sa(e.nextSibling),e===null)break}return null}function O1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=sa(e.nextSibling),e===null))return null;return e}function Ch(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=sa(e.nextSibling),e===null))return null;return e}function Vc(e){return e.data==="$?"||e.data==="$~"}function Gc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function k1(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function sa(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qc=null;function zh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return sa(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Oh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function kh(e,t,a){switch(t=$s(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Tr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Yl(e)}var la=new Map,Th=new Set;function el(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qa=J.d;J.d={f:T1,r:R1,D:M1,C:B1,L:D1,m:L1,X:H1,S:U1,M:q1};function T1(){var e=Qa.f(),t=Fs();return e||t}function R1(e){var t=_n(e);t!==null&&t.tag===5&&t.type==="form"?Xf(t):Qa.r(e)}var ki=typeof document>"u"?null:document;function Rh(e,t,a){var i=ki;if(i&&typeof t=="string"&&t){var c=$t(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Th.has(c)||(Th.add(c),e={rel:e,crossOrigin:a,href:t},i.querySelector(c)===null&&(t=i.createElement("link"),zt(t,"link",e),vt(t),i.head.appendChild(t)))}}function M1(e){Qa.D(e),Rh("dns-prefetch",e,null)}function B1(e,t){Qa.C(e,t),Rh("preconnect",e,t)}function D1(e,t,a){Qa.L(e,t,a);var i=ki;if(i&&e&&t){var c='link[rel="preload"][as="'+$t(t)+'"]';t==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+$t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+$t(a.imageSizes)+'"]')):c+='[href="'+$t(e)+'"]';var d=c;switch(t){case"style":d=Ti(e);break;case"script":d=Ri(e)}la.has(d)||(e=v({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),la.set(d,e),i.querySelector(c)!==null||t==="style"&&i.querySelector(Rr(d))||t==="script"&&i.querySelector(Mr(d))||(t=i.createElement("link"),zt(t,"link",e),vt(t),i.head.appendChild(t)))}}function L1(e,t){Qa.m(e,t);var a=ki;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+$t(i)+'"][href="'+$t(e)+'"]',d=c;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ri(e)}if(!la.has(d)&&(e=v({rel:"modulepreload",href:e},t),la.set(d,e),a.querySelector(c)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mr(d)))return}i=a.createElement("link"),zt(i,"link",e),vt(i),a.head.appendChild(i)}}}function U1(e,t,a){Qa.S(e,t,a);var i=ki;if(i&&e){var c=$n(i).hoistableStyles,d=Ti(e);t=t||"default";var m=c.get(d);if(!m){var y={loading:0,preload:null};if(m=i.querySelector(Rr(d)))y.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},a),(a=la.get(d))&&Yc(e,a);var N=m=i.createElement("link");vt(N),zt(N,"link",e),N._p=new Promise(function(B,Y){N.onload=B,N.onerror=Y}),N.addEventListener("load",function(){y.loading|=1}),N.addEventListener("error",function(){y.loading|=2}),y.loading|=4,tl(m,t,i)}m={type:"stylesheet",instance:m,count:1,state:y},c.set(d,m)}}}function H1(e,t){Qa.X(e,t);var a=ki;if(a&&e){var i=$n(a).hoistableScripts,c=Ri(e),d=i.get(c);d||(d=a.querySelector(Mr(c)),d||(e=v({src:e,async:!0},t),(t=la.get(c))&&Kc(e,t),d=a.createElement("script"),vt(d),zt(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(c,d))}}function q1(e,t){Qa.M(e,t);var a=ki;if(a&&e){var i=$n(a).hoistableScripts,c=Ri(e),d=i.get(c);d||(d=a.querySelector(Mr(c)),d||(e=v({src:e,async:!0,type:"module"},t),(t=la.get(c))&&Kc(e,t),d=a.createElement("script"),vt(d),zt(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(c,d))}}function Mh(e,t,a,i){var c=(c=we.current)?el(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ti(a.href),a=$n(c).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ti(a.href);var d=$n(c).hoistableStyles,m=d.get(e);if(m||(c=c.ownerDocument||c,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,m),(d=c.querySelector(Rr(e)))&&!d._p&&(m.instance=d,m.state.loading=5),la.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},la.set(e,a),d||V1(c,e,a,m.state))),t&&i===null)throw Error(o(528,""));return m}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ri(a),a=$n(c).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ti(e){return'href="'+$t(e)+'"'}function Rr(e){return'link[rel="stylesheet"]['+e+"]"}function Bh(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function V1(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),zt(t,"link",a),vt(t),e.head.appendChild(t))}function Ri(e){return'[src="'+$t(e)+'"]'}function Mr(e){return"script[async]"+e}function Dh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+$t(a.href)+'"]');if(i)return t.instance=i,vt(i),i;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),vt(i),zt(i,"style",c),tl(i,a.precedence,e),t.instance=i;case"stylesheet":c=Ti(a.href);var d=e.querySelector(Rr(c));if(d)return t.state.loading|=4,t.instance=d,vt(d),d;i=Bh(a),(c=la.get(c))&&Yc(i,c),d=(e.ownerDocument||e).createElement("link"),vt(d);var m=d;return m._p=new Promise(function(y,N){m.onload=y,m.onerror=N}),zt(d,"link",i),t.state.loading|=4,tl(d,a.precedence,e),t.instance=d;case"script":return d=Ri(a.src),(c=e.querySelector(Mr(d)))?(t.instance=c,vt(c),c):(i=a,(c=la.get(d))&&(i=v({},a),Kc(i,c)),e=e.ownerDocument||e,c=e.createElement("script"),vt(c),zt(c,"link",i),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,tl(i,a.precedence,e));return t.instance}function tl(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=i.length?i[i.length-1]:null,d=c,m=0;m<i.length;m++){var y=i[m];if(y.dataset.precedence===t)d=y;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Yc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Kc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var al=null;function Lh(e,t,a){if(al===null){var i=new Map,c=al=new Map;c.set(a,i)}else c=al,i=c.get(a),i||(i=new Map,c.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var d=a[c];if(!(d[Ii]||d[St]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var m=d.getAttribute(t)||"";m=e+m;var y=i.get(m);y?y.push(d):i.set(m,[d])}}return i}function Uh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function G1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Hh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Q1(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Ti(i.href),d=t.querySelector(Rr(c));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=nl.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=d,vt(d);return}d=t.ownerDocument||t,i=Bh(i),(c=la.get(c))&&Yc(i,c),d=d.createElement("link"),vt(d);var m=d;m._p=new Promise(function(y,N){m.onload=y,m.onerror=N}),zt(d,"link",i),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=nl.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Fc=0;function Y1(e,t){return e.stylesheets&&e.count===0&&rl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&rl(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+t);0<e.imgBytes&&Fc===0&&(Fc=62500*A1());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rl(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Fc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(c)}}:null}function nl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var il=null;function rl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,il=new Map,t.forEach(K1,e),il=null,nl.call(e))}function K1(e,t){if(!(t.state.loading&4)){var a=il.get(e);if(a)var i=a.get(null);else{a=new Map,il.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var m=c[d];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),i=m)}i&&a.set(null,i)}c=t.instance,m=c.getAttribute("data-precedence"),d=a.get(m)||i,d===i&&a.set(null,c),a.set(m,c),this.count++,i=nl.bind(this),c.addEventListener("load",i),c.addEventListener("error",i),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Br={$$typeof:V,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function F1(e,t,a,i,c,d,m,y,N){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=In(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=In(0),this.hiddenUpdates=In(null),this.identifierPrefix=i,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.incompleteTransitions=new Map}function qh(e,t,a,i,c,d,m,y,N,B,Y,Z){return e=new F1(e,t,a,m,N,B,Y,Z,y),t=1,d===!0&&(t|=24),d=Pt(3,null,null,t),e.current=d,d.stateNode=e,t=So(),t.refCount++,e.pooledCache=t,t.refCount++,d.memoizedState={element:i,isDehydrated:a,cache:t},zo(d),e}function Vh(e){return e?(e=ci,e):ci}function Gh(e,t,a,i,c,d){c=Vh(c),i.context===null?i.context=c:i.pendingContext=c,i=$a(t),i.payload={element:a},d=d===void 0?null:d,d!==null&&(i.callback=d),a=en(e,i,t),a!==null&&(Gt(a,e,t),fr(a,e,t))}function Qh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Pc(e,t){Qh(e,t),(e=e.alternate)&&Qh(e,t)}function Yh(e){if(e.tag===13||e.tag===31){var t=Sn(e,67108864);t!==null&&Gt(t,e,67108864),Pc(e,67108864)}}function Kh(e){if(e.tag===13||e.tag===31){var t=Wt();t=Vl(t);var a=Sn(e,t);a!==null&&Gt(a,e,t),Pc(e,t)}}var sl=!0;function P1(e,t,a,i){var c=T.T;T.T=null;var d=J.p;try{J.p=2,Zc(e,t,a,i)}finally{J.p=d,T.T=c}}function Z1(e,t,a,i){var c=T.T;T.T=null;var d=J.p;try{J.p=8,Zc(e,t,a,i)}finally{J.p=d,T.T=c}}function Zc(e,t,a,i){if(sl){var c=Xc(i);if(c===null)Mc(e,t,i,ll,a),Ph(e,i);else if(I1(c,e,t,a,i))i.stopPropagation();else if(Ph(e,i),t&4&&-1<X1.indexOf(e)){for(;c!==null;){var d=_n(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var m=it(d.pendingLanes);if(m!==0){var y=d;for(y.pendingLanes|=2,y.entangledLanes|=2;m;){var N=1<<31-de(m);y.entanglements[1]|=N,m&=~N}ja(d),(Ye&6)===0&&(Ys=Rt()+500,zr(0))}}break;case 31:case 13:y=Sn(d,2),y!==null&&Gt(y,d,2),Fs(),Pc(d,2)}if(d=Xc(i),d===null&&Mc(e,t,i,ll,a),d===c)break;c=d}c!==null&&i.stopPropagation()}else Mc(e,t,i,null,a)}}function Xc(e){return e=Il(e),Ic(e)}var ll=null;function Ic(e){if(ll=null,e=Wn(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=p(t),e!==null)return e;e=null}else if(a===31){if(e=g(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ll=e,null}function Fh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case D:return 2;case ae:return 8;case ne:case Oe:return 32;case Te:return 268435456;default:return 32}default:return 32}}var Jc=!1,fn=null,pn=null,hn=null,Dr=new Map,Lr=new Map,mn=[],X1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ph(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Dr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(t.pointerId)}}function Ur(e,t,a,i,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:d,targetContainers:[c]},t!==null&&(t=_n(t),t!==null&&Yh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function I1(e,t,a,i,c){switch(t){case"focusin":return fn=Ur(fn,e,t,a,i,c),!0;case"dragenter":return pn=Ur(pn,e,t,a,i,c),!0;case"mouseover":return hn=Ur(hn,e,t,a,i,c),!0;case"pointerover":var d=c.pointerId;return Dr.set(d,Ur(Dr.get(d)||null,e,t,a,i,c)),!0;case"gotpointercapture":return d=c.pointerId,Lr.set(d,Ur(Lr.get(d)||null,e,t,a,i,c)),!0}return!1}function Zh(e){var t=Wn(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=p(a),t!==null){e.blockedOn=t,sd(e.priority,function(){Kh(a)});return}}else if(t===31){if(t=g(a),t!==null){e.blockedOn=t,sd(e.priority,function(){Kh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ol(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Xc(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Xl=i,a.target.dispatchEvent(i),Xl=null}else return t=_n(a),t!==null&&Yh(t),e.blockedOn=a,!1;t.shift()}return!0}function Xh(e,t,a){ol(e)&&a.delete(t)}function J1(){Jc=!1,fn!==null&&ol(fn)&&(fn=null),pn!==null&&ol(pn)&&(pn=null),hn!==null&&ol(hn)&&(hn=null),Dr.forEach(Xh),Lr.forEach(Xh)}function cl(e,t){e.blockedOn===t&&(e.blockedOn=null,Jc||(Jc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,J1)))}var ul=null;function Ih(e){ul!==e&&(ul=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ul===e&&(ul=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],c=e[t+2];if(typeof i!="function"){if(Ic(i||a)===null)continue;break}var d=_n(a);d!==null&&(e.splice(t,3),t-=3,Xo(d,{pending:!0,data:c,method:a.method,action:i},i,c))}}))}function Mi(e){function t(N){return cl(N,e)}fn!==null&&cl(fn,e),pn!==null&&cl(pn,e),hn!==null&&cl(hn,e),Dr.forEach(t),Lr.forEach(t);for(var a=0;a<mn.length;a++){var i=mn[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<mn.length&&(a=mn[0],a.blockedOn===null);)Zh(a),a.blockedOn===null&&mn.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var c=a[i],d=a[i+1],m=c[Dt]||null;if(typeof d=="function")m||Ih(a);else if(m){var y=null;if(d&&d.hasAttribute("formAction")){if(c=d,m=d[Dt]||null)y=m.formAction;else if(Ic(c)!==null)continue}else y=m.action;typeof y=="function"?a[i+1]=y:(a.splice(i,3),i-=3),Ih(a)}}}function Jh(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(m){return c=m})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function Wc(e){this._internalRoot=e}dl.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,i=Wt();Gh(a,i,e,t,null,null)},dl.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gh(e.current,2,null,e,null,null),Fs(),t[Jn]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=rd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<mn.length&&t!==0&&t<mn[a].priority;a++);mn.splice(a,0,e),a===0&&Zh(e)}};var Wh=s.version;if(Wh!=="19.2.0")throw Error(o(527,Wh,"19.2.0"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=h(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var W1={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{P=fl.inject(W1),he=fl}catch{}}return qr.createRoot=function(e,t){if(!u(e))throw Error(o(299));var a=!1,i="",c=ip,d=rp,m=sp;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=qh(e,1,!1,null,null,a,i,null,c,d,m,Jh),e[Jn]=t.current,Rc(e),new Wc(t)},qr.hydrateRoot=function(e,t,a){if(!u(e))throw Error(o(299));var i=!1,c="",d=ip,m=rp,y=sp,N=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(y=a.onRecoverableError),a.formState!==void 0&&(N=a.formState)),t=qh(e,1,!0,t,a??null,i,c,N,d,m,y,Jh),t.context=Vh(null),a=t.current,i=Wt(),i=Vl(i),c=$a(i),c.callback=null,en(a,c,i),a=i,t.current.lanes=a,Xi(t,a),ja(t),e[Jn]=t.current,Rc(e),new dl(t)},qr.version="19.2.0",qr}var lm;function ob(){if(lm)return eu.exports;lm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),eu.exports=lb(),eu.exports}var cb=ob();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var om="popstate";function ub(r={}){function s(o,u){let{pathname:f,search:p,hash:g}=o.location;return Au("",{pathname:f,search:p,hash:g},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function l(o,u){return typeof u=="string"?u:Fr(u)}return fb(s,l,null,r)}function st(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function ha(r,s){if(!r){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function db(){return Math.random().toString(36).substring(2,10)}function cm(r,s){return{usr:r.state,key:r.key,idx:s}}function Au(r,s,l=null,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof s=="string"?Vi(s):s,state:l,key:s&&s.key||o||db()}}function Fr({pathname:r="/",search:s="",hash:l=""}){return s&&s!=="?"&&(r+=s.charAt(0)==="?"?s:"?"+s),l&&l!=="#"&&(r+=l.charAt(0)==="#"?l:"#"+l),r}function Vi(r){let s={};if(r){let l=r.indexOf("#");l>=0&&(s.hash=r.substring(l),r=r.substring(0,l));let o=r.indexOf("?");o>=0&&(s.search=r.substring(o),r=r.substring(0,o)),r&&(s.pathname=r)}return s}function fb(r,s,l,o={}){let{window:u=document.defaultView,v5Compat:f=!1}=o,p=u.history,g="POP",x=null,h=b();h==null&&(h=0,p.replaceState({...p.state,idx:h},""));function b(){return(p.state||{idx:null}).idx}function v(){g="POP";let z=b(),H=z==null?null:z-h;h=z,x&&x({action:g,location:O.location,delta:H})}function E(z,H){g="PUSH";let R=Au(O.location,z,H);h=b()+1;let V=cm(R,h),re=O.createHref(R);try{p.pushState(V,"",re)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;u.location.assign(re)}f&&x&&x({action:g,location:O.location,delta:1})}function S(z,H){g="REPLACE";let R=Au(O.location,z,H);h=b();let V=cm(R,h),re=O.createHref(R);p.replaceState(V,"",re),f&&x&&x({action:g,location:O.location,delta:0})}function j(z){return pb(z)}let O={get action(){return g},get location(){return r(u,p)},listen(z){if(x)throw new Error("A history only accepts one active listener");return u.addEventListener(om,v),x=z,()=>{u.removeEventListener(om,v),x=null}},createHref(z){return s(u,z)},createURL:j,encodeLocation(z){let H=j(z);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:E,replace:S,go(z){return p.go(z)}};return O}function pb(r,s=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),st(l,"No window.location.(origin|href) available to create URL");let o=typeof r=="string"?r:Fr(r);return o=o.replace(/ $/,"%20"),!s&&o.startsWith("//")&&(o=l+o),new URL(o,l)}function fg(r,s,l="/"){return hb(r,s,l,!1)}function hb(r,s,l,o){let u=typeof s=="string"?Vi(s):s,f=Fa(u.pathname||"/",l);if(f==null)return null;let p=pg(r);mb(p);let g=null;for(let x=0;g==null&&x<p.length;++x){let h=Eb(f);g=Sb(p[x],h,o)}return g}function pg(r,s=[],l=[],o="",u=!1){let f=(p,g,x=u,h)=>{let b={relativePath:h===void 0?p.path||"":h,caseSensitive:p.caseSensitive===!0,childrenIndex:g,route:p};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(o)&&x)return;st(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length)}let v=Ka([o,b.relativePath]),E=l.concat(b);p.children&&p.children.length>0&&(st(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),pg(p.children,s,E,v,x)),!(p.path==null&&!p.index)&&s.push({path:v,score:wb(v,p.index),routesMeta:E})};return r.forEach((p,g)=>{if(p.path===""||!p.path?.includes("?"))f(p,g);else for(let x of hg(p.path))f(p,g,!0,x)}),s}function hg(r){let s=r.split("/");if(s.length===0)return[];let[l,...o]=s,u=l.endsWith("?"),f=l.replace(/\?$/,"");if(o.length===0)return u?[f,""]:[f];let p=hg(o.join("/")),g=[];return g.push(...p.map(x=>x===""?f:[f,x].join("/"))),u&&g.push(...p),g.map(x=>r.startsWith("/")&&x===""?"/":x)}function mb(r){r.sort((s,l)=>s.score!==l.score?l.score-s.score:Ab(s.routesMeta.map(o=>o.childrenIndex),l.routesMeta.map(o=>o.childrenIndex)))}var gb=/^:[\w-]+$/,xb=3,bb=2,yb=1,vb=10,jb=-2,um=r=>r==="*";function wb(r,s){let l=r.split("/"),o=l.length;return l.some(um)&&(o+=jb),s&&(o+=bb),l.filter(u=>!um(u)).reduce((u,f)=>u+(gb.test(f)?xb:f===""?yb:vb),o)}function Ab(r,s){return r.length===s.length&&r.slice(0,-1).every((o,u)=>o===s[u])?r[r.length-1]-s[s.length-1]:0}function Sb(r,s,l=!1){let{routesMeta:o}=r,u={},f="/",p=[];for(let g=0;g<o.length;++g){let x=o[g],h=g===o.length-1,b=f==="/"?s:s.slice(f.length)||"/",v=jl({path:x.relativePath,caseSensitive:x.caseSensitive,end:h},b),E=x.route;if(!v&&h&&l&&!o[o.length-1].route.index&&(v=jl({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},b)),!v)return null;Object.assign(u,v.params),p.push({params:u,pathname:Ka([f,v.pathname]),pathnameBase:kb(Ka([f,v.pathnameBase])),route:E}),v.pathnameBase!=="/"&&(f=Ka([f,v.pathnameBase]))}return p}function jl(r,s){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[l,o]=Nb(r.path,r.caseSensitive,r.end),u=s.match(l);if(!u)return null;let f=u[0],p=f.replace(/(.)\/+$/,"$1"),g=u.slice(1);return{params:o.reduce((h,{paramName:b,isOptional:v},E)=>{if(b==="*"){let j=g[E]||"";p=f.slice(0,f.length-j.length).replace(/(.)\/+$/,"$1")}const S=g[E];return v&&!S?h[b]=void 0:h[b]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:f,pathnameBase:p,pattern:r}}function Nb(r,s=!1,l=!0){ha(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let o=[],u="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,g,x)=>(o.push({paramName:g,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(o.push({paramName:"*"}),u+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?u+="\\/*$":r!==""&&r!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,s?void 0:"i"),o]}function Eb(r){try{return r.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return ha(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),r}}function Fa(r,s){if(s==="/")return r;if(!r.toLowerCase().startsWith(s.toLowerCase()))return null;let l=s.endsWith("/")?s.length-1:s.length,o=r.charAt(l);return o&&o!=="/"?null:r.slice(l)||"/"}function Cb(r,s="/"){let{pathname:l,search:o="",hash:u=""}=typeof r=="string"?Vi(r):r;return{pathname:l?l.startsWith("/")?l:zb(l,s):s,search:Tb(o),hash:Rb(u)}}function zb(r,s){let l=s.replace(/\/+$/,"").split("/");return r.split("/").forEach(u=>{u===".."?l.length>1&&l.pop():u!=="."&&l.push(u)}),l.length>1?l.join("/"):"/"}function iu(r,s,l,o){return`Cannot include a '${r}' character in a manually specified \`to.${s}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ob(r){return r.filter((s,l)=>l===0||s.route.path&&s.route.path.length>0)}function Bu(r){let s=Ob(r);return s.map((l,o)=>o===s.length-1?l.pathname:l.pathnameBase)}function Du(r,s,l,o=!1){let u;typeof r=="string"?u=Vi(r):(u={...r},st(!u.pathname||!u.pathname.includes("?"),iu("?","pathname","search",u)),st(!u.pathname||!u.pathname.includes("#"),iu("#","pathname","hash",u)),st(!u.search||!u.search.includes("#"),iu("#","search","hash",u)));let f=r===""||u.pathname==="",p=f?"/":u.pathname,g;if(p==null)g=l;else{let v=s.length-1;if(!o&&p.startsWith("..")){let E=p.split("/");for(;E[0]==="..";)E.shift(),v-=1;u.pathname=E.join("/")}g=v>=0?s[v]:"/"}let x=Cb(u,g),h=p&&p!=="/"&&p.endsWith("/"),b=(f||p===".")&&l.endsWith("/");return!x.pathname.endsWith("/")&&(h||b)&&(x.pathname+="/"),x}var Ka=r=>r.join("/").replace(/\/\/+/g,"/"),kb=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Tb=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Rb=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Mb(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var mg=["POST","PUT","PATCH","DELETE"];new Set(mg);var Bb=["GET",...mg];new Set(Bb);var Gi=w.createContext(null);Gi.displayName="DataRouter";var kl=w.createContext(null);kl.displayName="DataRouterState";w.createContext(!1);var gg=w.createContext({isTransitioning:!1});gg.displayName="ViewTransition";var Db=w.createContext(new Map);Db.displayName="Fetchers";var Lb=w.createContext(null);Lb.displayName="Await";var ma=w.createContext(null);ma.displayName="Navigation";var Xr=w.createContext(null);Xr.displayName="Location";var oa=w.createContext({outlet:null,matches:[],isDataRoute:!1});oa.displayName="Route";var Lu=w.createContext(null);Lu.displayName="RouteError";function Ub(r,{relative:s}={}){st(Qi(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:o}=w.useContext(ma),{hash:u,pathname:f,search:p}=Ir(r,{relative:s}),g=f;return l!=="/"&&(g=f==="/"?l:Ka([l,f])),o.createHref({pathname:g,search:p,hash:u})}function Qi(){return w.useContext(Xr)!=null}function ga(){return st(Qi(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Xr).location}var xg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bg(r){w.useContext(ma).static||w.useLayoutEffect(r)}function ca(){let{isDataRoute:r}=w.useContext(oa);return r?_b():Hb()}function Hb(){st(Qi(),"useNavigate() may be used only in the context of a <Router> component.");let r=w.useContext(Gi),{basename:s,navigator:l}=w.useContext(ma),{matches:o}=w.useContext(oa),{pathname:u}=ga(),f=JSON.stringify(Bu(o)),p=w.useRef(!1);return bg(()=>{p.current=!0}),w.useCallback((x,h={})=>{if(ha(p.current,xg),!p.current)return;if(typeof x=="number"){l.go(x);return}let b=Du(x,JSON.parse(f),u,h.relative==="path");r==null&&s!=="/"&&(b.pathname=b.pathname==="/"?s:Ka([s,b.pathname])),(h.replace?l.replace:l.push)(b,h.state,h)},[s,l,f,u,r])}var qb=w.createContext(null);function Vb(r){let s=w.useContext(oa).outlet;return w.useMemo(()=>s&&w.createElement(qb.Provider,{value:r},s),[s,r])}function Uu(){let{matches:r}=w.useContext(oa),s=r[r.length-1];return s?s.params:{}}function Ir(r,{relative:s}={}){let{matches:l}=w.useContext(oa),{pathname:o}=ga(),u=JSON.stringify(Bu(l));return w.useMemo(()=>Du(r,JSON.parse(u),o,s==="path"),[r,u,o,s])}function Gb(r,s){return yg(r,s)}function yg(r,s,l,o,u){st(Qi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=w.useContext(ma),{matches:p}=w.useContext(oa),g=p[p.length-1],x=g?g.params:{},h=g?g.pathname:"/",b=g?g.pathnameBase:"/",v=g&&g.route;{let R=v&&v.path||"";vg(h,!v||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let E=ga(),S;if(s){let R=typeof s=="string"?Vi(s):s;st(b==="/"||R.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${R.pathname}" was given in the \`location\` prop.`),S=R}else S=E;let j=S.pathname||"/",O=j;if(b!=="/"){let R=b.replace(/^\//,"").split("/");O="/"+j.replace(/^\//,"").split("/").slice(R.length).join("/")}let z=fg(r,{pathname:O});ha(v||z!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ha(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=Pb(z&&z.map(R=>Object.assign({},R,{params:Object.assign({},x,R.params),pathname:Ka([b,f.encodeLocation?f.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?b:Ka([b,f.encodeLocation?f.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),p,l,o,u);return s&&H?w.createElement(Xr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},H):H}function Qb(){let r=Wb(),s=Mb(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),l=r instanceof Error?r.stack:null,o="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},p=null;return console.error("Error handled by React Router default ErrorBoundary:",r),p=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:f},"ErrorBoundary")," or"," ",w.createElement("code",{style:f},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},s),l?w.createElement("pre",{style:u},l):null,p)}var Yb=w.createElement(Qb,null),Kb=class extends w.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,s){return s.location!==r.location||s.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:s.error,location:s.location,revalidation:r.revalidation||s.revalidation}}componentDidCatch(r,s){this.props.unstable_onError?this.props.unstable_onError(r,s):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?w.createElement(oa.Provider,{value:this.props.routeContext},w.createElement(Lu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Fb({routeContext:r,match:s,children:l}){let o=w.useContext(Gi);return o&&o.static&&o.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=s.route.id),w.createElement(oa.Provider,{value:r},l)}function Pb(r,s=[],l=null,o=null,u=null){if(r==null){if(!l)return null;if(l.errors)r=l.matches;else if(s.length===0&&!l.initialized&&l.matches.length>0)r=l.matches;else return null}let f=r,p=l?.errors;if(p!=null){let h=f.findIndex(b=>b.route.id&&p?.[b.route.id]!==void 0);st(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,h+1))}let g=!1,x=-1;if(l)for(let h=0;h<f.length;h++){let b=f[h];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(x=h),b.route.id){let{loaderData:v,errors:E}=l,S=b.route.loader&&!v.hasOwnProperty(b.route.id)&&(!E||E[b.route.id]===void 0);if(b.route.lazy||S){g=!0,x>=0?f=f.slice(0,x+1):f=[f[0]];break}}}return f.reduceRight((h,b,v)=>{let E,S=!1,j=null,O=null;l&&(E=p&&b.route.id?p[b.route.id]:void 0,j=b.route.errorElement||Yb,g&&(x<0&&v===0?(vg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,O=null):x===v&&(S=!0,O=b.route.hydrateFallbackElement||null)));let z=s.concat(f.slice(0,v+1)),H=()=>{let R;return E?R=j:S?R=O:b.route.Component?R=w.createElement(b.route.Component,null):b.route.element?R=b.route.element:R=h,w.createElement(Fb,{match:b,routeContext:{outlet:h,matches:z,isDataRoute:l!=null},children:R})};return l&&(b.route.ErrorBoundary||b.route.errorElement||v===0)?w.createElement(Kb,{location:l.location,revalidation:l.revalidation,component:j,error:E,children:H(),routeContext:{outlet:null,matches:z,isDataRoute:!0},unstable_onError:o}):H()},null)}function Hu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zb(r){let s=w.useContext(Gi);return st(s,Hu(r)),s}function Xb(r){let s=w.useContext(kl);return st(s,Hu(r)),s}function Ib(r){let s=w.useContext(oa);return st(s,Hu(r)),s}function qu(r){let s=Ib(r),l=s.matches[s.matches.length-1];return st(l.route.id,`${r} can only be used on routes that contain a unique "id"`),l.route.id}function Jb(){return qu("useRouteId")}function Wb(){let r=w.useContext(Lu),s=Xb("useRouteError"),l=qu("useRouteError");return r!==void 0?r:s.errors?.[l]}function _b(){let{router:r}=Zb("useNavigate"),s=qu("useNavigate"),l=w.useRef(!1);return bg(()=>{l.current=!0}),w.useCallback(async(u,f={})=>{ha(l.current,xg),l.current&&(typeof u=="number"?r.navigate(u):await r.navigate(u,{fromRouteId:s,...f}))},[r,s])}var dm={};function vg(r,s,l){!s&&!dm[r]&&(dm[r]=!0,ha(!1,l))}w.memo($b);function $b({routes:r,future:s,state:l,unstable_onError:o}){return yg(r,void 0,l,o,s)}function fm({to:r,replace:s,state:l,relative:o}){st(Qi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:u}=w.useContext(ma);ha(!u,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=w.useContext(oa),{pathname:p}=ga(),g=ca(),x=Du(r,Bu(f),p,o==="path"),h=JSON.stringify(x);return w.useEffect(()=>{g(JSON.parse(h),{replace:s,state:l,relative:o})},[g,h,o,s,l]),null}function jg(r){return Vb(r.context)}function Ee(r){st(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function e2({basename:r="/",children:s=null,location:l,navigationType:o="POP",navigator:u,static:f=!1}){st(!Qi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=r.replace(/^\/*/,"/"),g=w.useMemo(()=>({basename:p,navigator:u,static:f,future:{}}),[p,u,f]);typeof l=="string"&&(l=Vi(l));let{pathname:x="/",search:h="",hash:b="",state:v=null,key:E="default"}=l,S=w.useMemo(()=>{let j=Fa(x,p);return j==null?null:{location:{pathname:j,search:h,hash:b,state:v,key:E},navigationType:o}},[p,x,h,b,v,E,o]);return ha(S!=null,`<Router basename="${p}"> is not able to match the URL "${x}${h}${b}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:w.createElement(ma.Provider,{value:g},w.createElement(Xr.Provider,{children:s,value:S}))}function t2({children:r,location:s}){return Gb(Su(r),s)}function Su(r,s=[]){let l=[];return w.Children.forEach(r,(o,u)=>{if(!w.isValidElement(o))return;let f=[...s,u];if(o.type===w.Fragment){l.push.apply(l,Su(o.props.children,f));return}st(o.type===Ee,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),st(!o.props.index||!o.props.children,"An index route cannot have child routes.");let p={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(p.children=Su(o.props.children,f)),l.push(p)}),l}var gl="get",xl="application/x-www-form-urlencoded";function Tl(r){return r!=null&&typeof r.tagName=="string"}function a2(r){return Tl(r)&&r.tagName.toLowerCase()==="button"}function n2(r){return Tl(r)&&r.tagName.toLowerCase()==="form"}function i2(r){return Tl(r)&&r.tagName.toLowerCase()==="input"}function r2(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function s2(r,s){return r.button===0&&(!s||s==="_self")&&!r2(r)}var pl=null;function l2(){if(pl===null)try{new FormData(document.createElement("form"),0),pl=!1}catch{pl=!0}return pl}var o2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ru(r){return r!=null&&!o2.has(r)?(ha(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xl}"`),null):r}function c2(r,s){let l,o,u,f,p;if(n2(r)){let g=r.getAttribute("action");o=g?Fa(g,s):null,l=r.getAttribute("method")||gl,u=ru(r.getAttribute("enctype"))||xl,f=new FormData(r)}else if(a2(r)||i2(r)&&(r.type==="submit"||r.type==="image")){let g=r.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=r.getAttribute("formaction")||g.getAttribute("action");if(o=x?Fa(x,s):null,l=r.getAttribute("formmethod")||g.getAttribute("method")||gl,u=ru(r.getAttribute("formenctype"))||ru(g.getAttribute("enctype"))||xl,f=new FormData(g,r),!l2()){let{name:h,type:b,value:v}=r;if(b==="image"){let E=h?`${h}.`:"";f.append(`${E}x`,"0"),f.append(`${E}y`,"0")}else h&&f.append(h,v)}}else{if(Tl(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=gl,o=null,u=xl,p=r}return f&&u==="text/plain"&&(p=f,f=void 0),{action:o,method:l.toLowerCase(),encType:u,formData:f,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Vu(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function u2(r,s,l){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return o.pathname==="/"?o.pathname=`_root.${l}`:s&&Fa(o.pathname,s)==="/"?o.pathname=`${s.replace(/\/$/,"")}/_root.${l}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${l}`,o}async function d2(r,s){if(r.id in s)return s[r.id];try{let l=await import(r.module);return s[r.id]=l,l}catch(l){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function f2(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function p2(r,s,l){let o=await Promise.all(r.map(async u=>{let f=s.routes[u.route.id];if(f){let p=await d2(f,l);return p.links?p.links():[]}return[]}));return x2(o.flat(1).filter(f2).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function pm(r,s,l,o,u,f){let p=(x,h)=>l[h]?x.route.id!==l[h].route.id:!0,g=(x,h)=>l[h].pathname!==x.pathname||l[h].route.path?.endsWith("*")&&l[h].params["*"]!==x.params["*"];return f==="assets"?s.filter((x,h)=>p(x,h)||g(x,h)):f==="data"?s.filter((x,h)=>{let b=o.routes[x.route.id];if(!b||!b.hasLoader)return!1;if(p(x,h)||g(x,h))return!0;if(x.route.shouldRevalidate){let v=x.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function h2(r,s,{includeHydrateFallback:l}={}){return m2(r.map(o=>{let u=s.routes[o.route.id];if(!u)return[];let f=[u.module];return u.clientActionModule&&(f=f.concat(u.clientActionModule)),u.clientLoaderModule&&(f=f.concat(u.clientLoaderModule)),l&&u.hydrateFallbackModule&&(f=f.concat(u.hydrateFallbackModule)),u.imports&&(f=f.concat(u.imports)),f}).flat(1))}function m2(r){return[...new Set(r)]}function g2(r){let s={},l=Object.keys(r).sort();for(let o of l)s[o]=r[o];return s}function x2(r,s){let l=new Set;return new Set(s),r.reduce((o,u)=>{let f=JSON.stringify(g2(u));return l.has(f)||(l.add(f),o.push({key:f,link:u})),o},[])}function wg(){let r=w.useContext(Gi);return Vu(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function b2(){let r=w.useContext(kl);return Vu(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Gu=w.createContext(void 0);Gu.displayName="FrameworkContext";function Ag(){let r=w.useContext(Gu);return Vu(r,"You must render this element inside a <HydratedRouter> element"),r}function y2(r,s){let l=w.useContext(Gu),[o,u]=w.useState(!1),[f,p]=w.useState(!1),{onFocus:g,onBlur:x,onMouseEnter:h,onMouseLeave:b,onTouchStart:v}=s,E=w.useRef(null);w.useEffect(()=>{if(r==="render"&&p(!0),r==="viewport"){let O=H=>{H.forEach(R=>{p(R.isIntersecting)})},z=new IntersectionObserver(O,{threshold:.5});return E.current&&z.observe(E.current),()=>{z.disconnect()}}},[r]),w.useEffect(()=>{if(o){let O=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(O)}}},[o]);let S=()=>{u(!0)},j=()=>{u(!1),p(!1)};return l?r!=="intent"?[f,E,{}]:[f,E,{onFocus:Vr(g,S),onBlur:Vr(x,j),onMouseEnter:Vr(h,S),onMouseLeave:Vr(b,j),onTouchStart:Vr(v,S)}]:[!1,E,{}]}function Vr(r,s){return l=>{r&&r(l),l.defaultPrevented||s(l)}}function v2({page:r,...s}){let{router:l}=wg(),o=w.useMemo(()=>fg(l.routes,r,l.basename),[l.routes,r,l.basename]);return o?w.createElement(w2,{page:r,matches:o,...s}):null}function j2(r){let{manifest:s,routeModules:l}=Ag(),[o,u]=w.useState([]);return w.useEffect(()=>{let f=!1;return p2(r,s,l).then(p=>{f||u(p)}),()=>{f=!0}},[r,s,l]),o}function w2({page:r,matches:s,...l}){let o=ga(),{manifest:u,routeModules:f}=Ag(),{basename:p}=wg(),{loaderData:g,matches:x}=b2(),h=w.useMemo(()=>pm(r,s,x,u,o,"data"),[r,s,x,u,o]),b=w.useMemo(()=>pm(r,s,x,u,o,"assets"),[r,s,x,u,o]),v=w.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let j=new Set,O=!1;if(s.forEach(H=>{let R=u.routes[H.route.id];!R||!R.hasLoader||(!h.some(V=>V.route.id===H.route.id)&&H.route.id in g&&f[H.route.id]?.shouldRevalidate||R.hasClientLoader?O=!0:j.add(H.route.id))}),j.size===0)return[];let z=u2(r,p,"data");return O&&j.size>0&&z.searchParams.set("_routes",s.filter(H=>j.has(H.route.id)).map(H=>H.route.id).join(",")),[z.pathname+z.search]},[p,g,o,u,h,s,r,f]),E=w.useMemo(()=>h2(b,u),[b,u]),S=j2(b);return w.createElement(w.Fragment,null,v.map(j=>w.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...l})),E.map(j=>w.createElement("link",{key:j,rel:"modulepreload",href:j,...l})),S.map(({key:j,link:O})=>w.createElement("link",{key:j,nonce:l.nonce,...O})))}function A2(...r){return s=>{r.forEach(l=>{typeof l=="function"?l(s):l!=null&&(l.current=s)})}}var Sg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Sg&&(window.__reactRouterVersion="7.9.4")}catch{}function S2({basename:r,children:s,window:l}){let o=w.useRef();o.current==null&&(o.current=ub({window:l,v5Compat:!0}));let u=o.current,[f,p]=w.useState({action:u.action,location:u.location}),g=w.useCallback(x=>{w.startTransition(()=>p(x))},[p]);return w.useLayoutEffect(()=>u.listen(g),[u,g]),w.createElement(e2,{basename:r,children:s,location:f.location,navigationType:f.action,navigator:u})}var Ng=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oe=w.forwardRef(function({onClick:s,discover:l="render",prefetch:o="none",relative:u,reloadDocument:f,replace:p,state:g,target:x,to:h,preventScrollReset:b,viewTransition:v,...E},S){let{basename:j}=w.useContext(ma),O=typeof h=="string"&&Ng.test(h),z,H=!1;if(typeof h=="string"&&O&&(z=h,Sg))try{let ie=new URL(window.location.href),pe=h.startsWith("//")?new URL(ie.protocol+h):new URL(h),_=Fa(pe.pathname,j);pe.origin===ie.origin&&_!=null?h=_+pe.search+pe.hash:H=!0}catch{ha(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=Ub(h,{relative:u}),[V,re,W]=y2(o,E),le=C2(h,{replace:p,state:g,target:x,preventScrollReset:b,relative:u,viewTransition:v});function te(ie){s&&s(ie),ie.defaultPrevented||le(ie)}let ce=w.createElement("a",{...E,...W,href:z||R,onClick:H||f?s:te,ref:A2(S,re),target:x,"data-discover":!O&&l==="render"?"true":void 0});return V&&!O?w.createElement(w.Fragment,null,ce,w.createElement(v2,{page:R})):ce});oe.displayName="Link";var wl=w.forwardRef(function({"aria-current":s="page",caseSensitive:l=!1,className:o="",end:u=!1,style:f,to:p,viewTransition:g,children:x,...h},b){let v=Ir(p,{relative:h.relative}),E=ga(),S=w.useContext(kl),{navigator:j,basename:O}=w.useContext(ma),z=S!=null&&R2(v)&&g===!0,H=j.encodeLocation?j.encodeLocation(v).pathname:v.pathname,R=E.pathname,V=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;l||(R=R.toLowerCase(),V=V?V.toLowerCase():null,H=H.toLowerCase()),V&&O&&(V=Fa(V,O)||V);const re=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let W=R===H||!u&&R.startsWith(H)&&R.charAt(re)==="/",le=V!=null&&(V===H||!u&&V.startsWith(H)&&V.charAt(H.length)==="/"),te={isActive:W,isPending:le,isTransitioning:z},ce=W?s:void 0,ie;typeof o=="function"?ie=o(te):ie=[o,W?"active":null,le?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let pe=typeof f=="function"?f(te):f;return w.createElement(oe,{...h,"aria-current":ce,className:ie,ref:b,style:pe,to:p,viewTransition:g},typeof x=="function"?x(te):x)});wl.displayName="NavLink";var N2=w.forwardRef(({discover:r="render",fetcherKey:s,navigate:l,reloadDocument:o,replace:u,state:f,method:p=gl,action:g,onSubmit:x,relative:h,preventScrollReset:b,viewTransition:v,...E},S)=>{let j=k2(),O=T2(g,{relative:h}),z=p.toLowerCase()==="get"?"get":"post",H=typeof g=="string"&&Ng.test(g),R=V=>{if(x&&x(V),V.defaultPrevented)return;V.preventDefault();let re=V.nativeEvent.submitter,W=re?.getAttribute("formmethod")||p;j(re||V.currentTarget,{fetcherKey:s,method:W,navigate:l,replace:u,state:f,relative:h,preventScrollReset:b,viewTransition:v})};return w.createElement("form",{ref:S,method:z,action:O,onSubmit:o?x:R,...E,"data-discover":!H&&r==="render"?"true":void 0})});N2.displayName="Form";function E2(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Eg(r){let s=w.useContext(Gi);return st(s,E2(r)),s}function C2(r,{target:s,replace:l,state:o,preventScrollReset:u,relative:f,viewTransition:p}={}){let g=ca(),x=ga(),h=Ir(r,{relative:f});return w.useCallback(b=>{if(s2(b,s)){b.preventDefault();let v=l!==void 0?l:Fr(x)===Fr(h);g(r,{replace:v,state:o,preventScrollReset:u,relative:f,viewTransition:p})}},[x,g,h,l,o,s,r,u,f,p])}var z2=0,O2=()=>`__${String(++z2)}__`;function k2(){let{router:r}=Eg("useSubmit"),{basename:s}=w.useContext(ma),l=Jb();return w.useCallback(async(o,u={})=>{let{action:f,method:p,encType:g,formData:x,body:h}=c2(o,s);if(u.navigate===!1){let b=u.fetcherKey||O2();await r.fetch(b,l,u.action||f,{preventScrollReset:u.preventScrollReset,formData:x,body:h,formMethod:u.method||p,formEncType:u.encType||g,flushSync:u.flushSync})}else await r.navigate(u.action||f,{preventScrollReset:u.preventScrollReset,formData:x,body:h,formMethod:u.method||p,formEncType:u.encType||g,replace:u.replace,state:u.state,fromRouteId:l,flushSync:u.flushSync,viewTransition:u.viewTransition})},[r,s,l])}function T2(r,{relative:s}={}){let{basename:l}=w.useContext(ma),o=w.useContext(oa);st(o,"useFormAction must be used inside a RouteContext");let[u]=o.matches.slice(-1),f={...Ir(r||".",{relative:s})},p=ga();if(r==null){f.search=p.search;let g=new URLSearchParams(f.search),x=g.getAll("index");if(x.some(b=>b==="")){g.delete("index"),x.filter(v=>v).forEach(v=>g.append("index",v));let b=g.toString();f.search=b?`?${b}`:""}}return(!r||r===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(f.pathname=f.pathname==="/"?l:Ka([l,f.pathname])),Fr(f)}function R2(r,{relative:s}={}){let l=w.useContext(gg);st(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Eg("useViewTransitionState"),u=Ir(r,{relative:s});if(!l.isTransitioning)return!1;let f=Fa(l.currentLocation.pathname,o)||l.currentLocation.pathname,p=Fa(l.nextLocation.pathname,o)||l.nextLocation.pathname;return jl(u.pathname,p)!=null||jl(u.pathname,f)!=null}function Yn(){const[r,s]=w.useState(!1),[l,o]=w.useState(!1),[u,f]=w.useState(!1),p=ga(),g=w.useRef(null),x=w.useRef(null);return w.useEffect(()=>{const h=()=>f(window.innerWidth<=800);return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),w.useEffect(()=>{s(!1),o(!1)},[p]),w.useEffect(()=>{const h=b=>{g.current&&!g.current.contains(b.target)&&s(!1),x.current&&!x.current.contains(b.target)&&o(!1)};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]),n.jsxs("header",{className:"agri-header",children:[n.jsxs("nav",{className:"agri-nav",ref:g,children:[n.jsxs(oe,{to:"/",className:"agri-logo",children:[n.jsx("img",{src:"https://www.shutterstock.com/image-vector/agri-tech-leaf-logo-design-600nw-2388734381.jpg",alt:"logo"}),"AgriTechPro"]}),n.jsx("div",{className:"agri-center",children:n.jsxs("div",{className:"agri-search",children:[n.jsx("input",{type:"text",placeholder:"Search Seeds, Fertilizers, Tools..."}),n.jsx("button",{children:"Search"})]})}),n.jsxs("div",{className:`agri-links ${r?"open":""}`,children:[n.jsxs("div",{className:"agri-more-area",ref:x,onMouseEnter:()=>!u&&o(!0),onMouseLeave:()=>!u&&o(!1),children:[n.jsxs("button",{className:"agri-more-btn",onClick:u?()=>o(!l):void 0,children:["Categories ",n.jsx("span",{children:l?"▲":"▼"})]}),l&&n.jsxs("div",{className:"agri-dropdown open",children:[n.jsx(oe,{to:"/products/seeds",children:"Seeds"}),n.jsx(oe,{to:"/products/fertilizers",children:"Fertilizers"}),n.jsx(oe,{to:"/products/pesticides",children:"Pesticides"}),n.jsx(oe,{to:"/products/tools",children:"Tools"}),n.jsx(oe,{to:"/products/equipment",children:"Equipment"})]})]}),n.jsx(oe,{to:"/services",children:"Services"}),n.jsx(oe,{to:"/about",children:"About Us"}),n.jsx(oe,{to:"/contact",children:"Contact"}),n.jsx(oe,{to:"/login",className:"agri-login-btn",children:"Login"})]}),n.jsxs("button",{className:"agri-hamburger",onClick:()=>s(!r),children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]})]}),n.jsx("style",{children:`
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
      `})]})}var Cg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},hm=xn.createContext&&xn.createContext(Cg),M2=["attr","size","title"];function B2(r,s){if(r==null)return{};var l=D2(r,s),o,u;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(u=0;u<f.length;u++)o=f[u],!(s.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(r,o)&&(l[o]=r[o])}return l}function D2(r,s){if(r==null)return{};var l={};for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){if(s.indexOf(o)>=0)continue;l[o]=r[o]}return l}function Al(){return Al=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(r[o]=l[o])}return r},Al.apply(this,arguments)}function mm(r,s){var l=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);s&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),l.push.apply(l,o)}return l}function Sl(r){for(var s=1;s<arguments.length;s++){var l=arguments[s]!=null?arguments[s]:{};s%2?mm(Object(l),!0).forEach(function(o){L2(r,o,l[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(l)):mm(Object(l)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(l,o))})}return r}function L2(r,s,l){return s=U2(s),s in r?Object.defineProperty(r,s,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[s]=l,r}function U2(r){var s=H2(r,"string");return typeof s=="symbol"?s:s+""}function H2(r,s){if(typeof r!="object"||!r)return r;var l=r[Symbol.toPrimitive];if(l!==void 0){var o=l.call(r,s);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(r)}function zg(r){return r&&r.map((s,l)=>xn.createElement(s.tag,Sl({key:l},s.attr),zg(s.child)))}function wt(r){return s=>xn.createElement(q2,Al({attr:Sl({},r.attr)},s),zg(r.child))}function q2(r){var s=l=>{var{attr:o,size:u,title:f}=r,p=B2(r,M2),g=u||l.size||"1em",x;return l.className&&(x=l.className),r.className&&(x=(x?x+" ":"")+r.className),xn.createElement("svg",Al({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,o,p,{className:x,style:Sl(Sl({color:r.color||l.color},l.style),r.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),f&&xn.createElement("title",null,f),r.children)};return hm!==void 0?xn.createElement(hm.Consumer,null,l=>s(l)):s(Cg)}function Qu(r){return wt({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(r)}function Yu(r){return wt({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(r)}function Ku(r){return wt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(r)}function Fu(r){return wt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(r)}function V2(r){return wt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(r)}function gm(r){return wt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"},child:[]}]})(r)}function G2(r){return wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M473.7 73.8l-2.4-2.5c-46-47-118-51.7-169.6-14.8L336 159.9l-96 64 48 128-144-144 96-64-28.6-86.5C159.7 19.6 87 24 40.7 71.4l-2.4 2.4C-10.4 123.6-12.5 202.9 31 256l212.1 218.6c7.1 7.3 18.6 7.3 25.7 0L481 255.9c43.5-53 41.4-132.3-7.3-182.1z"},child:[]}]})(r)}function xm(r){return wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(r)}function Q2(r){return wt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(r)}function Y2(r){return wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(r)}function K2(r){return wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(r)}function Nu(r){return wt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(r)}function bm(r){return wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(r)}function ym(r){return wt({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(r)}function F2(r){return wt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(r)}function vm(r){return wt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(r)}function P2(r){return wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"},child:[]}]})(r)}function Og(r,s){return function(){return r.apply(s,arguments)}}const{toString:Z2}=Object.prototype,{getPrototypeOf:Pu}=Object,{iterator:Rl,toStringTag:kg}=Symbol,Ml=(r=>s=>{const l=Z2.call(s);return r[l]||(r[l]=l.slice(8,-1).toLowerCase())})(Object.create(null)),xa=r=>(r=r.toLowerCase(),s=>Ml(s)===r),Bl=r=>s=>typeof s===r,{isArray:Yi}=Array,Ui=Bl("undefined");function Jr(r){return r!==null&&!Ui(r)&&r.constructor!==null&&!Ui(r.constructor)&&Qt(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const Tg=xa("ArrayBuffer");function X2(r){let s;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?s=ArrayBuffer.isView(r):s=r&&r.buffer&&Tg(r.buffer),s}const I2=Bl("string"),Qt=Bl("function"),Rg=Bl("number"),Wr=r=>r!==null&&typeof r=="object",J2=r=>r===!0||r===!1,bl=r=>{if(Ml(r)!=="object")return!1;const s=Pu(r);return(s===null||s===Object.prototype||Object.getPrototypeOf(s)===null)&&!(kg in r)&&!(Rl in r)},W2=r=>{if(!Wr(r)||Jr(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},_2=xa("Date"),$2=xa("File"),ey=xa("Blob"),ty=xa("FileList"),ay=r=>Wr(r)&&Qt(r.pipe),ny=r=>{let s;return r&&(typeof FormData=="function"&&r instanceof FormData||Qt(r.append)&&((s=Ml(r))==="formdata"||s==="object"&&Qt(r.toString)&&r.toString()==="[object FormData]"))},iy=xa("URLSearchParams"),[ry,sy,ly,oy]=["ReadableStream","Request","Response","Headers"].map(xa),cy=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _r(r,s,{allOwnKeys:l=!1}={}){if(r===null||typeof r>"u")return;let o,u;if(typeof r!="object"&&(r=[r]),Yi(r))for(o=0,u=r.length;o<u;o++)s.call(null,r[o],o,r);else{if(Jr(r))return;const f=l?Object.getOwnPropertyNames(r):Object.keys(r),p=f.length;let g;for(o=0;o<p;o++)g=f[o],s.call(null,r[g],g,r)}}function Mg(r,s){if(Jr(r))return null;s=s.toLowerCase();const l=Object.keys(r);let o=l.length,u;for(;o-- >0;)if(u=l[o],s===u.toLowerCase())return u;return null}const Un=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Bg=r=>!Ui(r)&&r!==Un;function Eu(){const{caseless:r,skipUndefined:s}=Bg(this)&&this||{},l={},o=(u,f)=>{const p=r&&Mg(l,f)||f;bl(l[p])&&bl(u)?l[p]=Eu(l[p],u):bl(u)?l[p]=Eu({},u):Yi(u)?l[p]=u.slice():(!s||!Ui(u))&&(l[p]=u)};for(let u=0,f=arguments.length;u<f;u++)arguments[u]&&_r(arguments[u],o);return l}const uy=(r,s,l,{allOwnKeys:o}={})=>(_r(s,(u,f)=>{l&&Qt(u)?r[f]=Og(u,l):r[f]=u},{allOwnKeys:o}),r),dy=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),fy=(r,s,l,o)=>{r.prototype=Object.create(s.prototype,o),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:s.prototype}),l&&Object.assign(r.prototype,l)},py=(r,s,l,o)=>{let u,f,p;const g={};if(s=s||{},r==null)return s;do{for(u=Object.getOwnPropertyNames(r),f=u.length;f-- >0;)p=u[f],(!o||o(p,r,s))&&!g[p]&&(s[p]=r[p],g[p]=!0);r=l!==!1&&Pu(r)}while(r&&(!l||l(r,s))&&r!==Object.prototype);return s},hy=(r,s,l)=>{r=String(r),(l===void 0||l>r.length)&&(l=r.length),l-=s.length;const o=r.indexOf(s,l);return o!==-1&&o===l},my=r=>{if(!r)return null;if(Yi(r))return r;let s=r.length;if(!Rg(s))return null;const l=new Array(s);for(;s-- >0;)l[s]=r[s];return l},gy=(r=>s=>r&&s instanceof r)(typeof Uint8Array<"u"&&Pu(Uint8Array)),xy=(r,s)=>{const o=(r&&r[Rl]).call(r);let u;for(;(u=o.next())&&!u.done;){const f=u.value;s.call(r,f[0],f[1])}},by=(r,s)=>{let l;const o=[];for(;(l=r.exec(s))!==null;)o.push(l);return o},yy=xa("HTMLFormElement"),vy=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(l,o,u){return o.toUpperCase()+u}),jm=(({hasOwnProperty:r})=>(s,l)=>r.call(s,l))(Object.prototype),jy=xa("RegExp"),Dg=(r,s)=>{const l=Object.getOwnPropertyDescriptors(r),o={};_r(l,(u,f)=>{let p;(p=s(u,f,r))!==!1&&(o[f]=p||u)}),Object.defineProperties(r,o)},wy=r=>{Dg(r,(s,l)=>{if(Qt(r)&&["arguments","caller","callee"].indexOf(l)!==-1)return!1;const o=r[l];if(Qt(o)){if(s.enumerable=!1,"writable"in s){s.writable=!1;return}s.set||(s.set=()=>{throw Error("Can not rewrite read-only method '"+l+"'")})}})},Ay=(r,s)=>{const l={},o=u=>{u.forEach(f=>{l[f]=!0})};return Yi(r)?o(r):o(String(r).split(s)),l},Sy=()=>{},Ny=(r,s)=>r!=null&&Number.isFinite(r=+r)?r:s;function Ey(r){return!!(r&&Qt(r.append)&&r[kg]==="FormData"&&r[Rl])}const Cy=r=>{const s=new Array(10),l=(o,u)=>{if(Wr(o)){if(s.indexOf(o)>=0)return;if(Jr(o))return o;if(!("toJSON"in o)){s[u]=o;const f=Yi(o)?[]:{};return _r(o,(p,g)=>{const x=l(p,u+1);!Ui(x)&&(f[g]=x)}),s[u]=void 0,f}}return o};return l(r,0)},zy=xa("AsyncFunction"),Oy=r=>r&&(Wr(r)||Qt(r))&&Qt(r.then)&&Qt(r.catch),Lg=((r,s)=>r?setImmediate:s?((l,o)=>(Un.addEventListener("message",({source:u,data:f})=>{u===Un&&f===l&&o.length&&o.shift()()},!1),u=>{o.push(u),Un.postMessage(l,"*")}))(`axios@${Math.random()}`,[]):l=>setTimeout(l))(typeof setImmediate=="function",Qt(Un.postMessage)),ky=typeof queueMicrotask<"u"?queueMicrotask.bind(Un):typeof process<"u"&&process.nextTick||Lg,Ty=r=>r!=null&&Qt(r[Rl]),q={isArray:Yi,isArrayBuffer:Tg,isBuffer:Jr,isFormData:ny,isArrayBufferView:X2,isString:I2,isNumber:Rg,isBoolean:J2,isObject:Wr,isPlainObject:bl,isEmptyObject:W2,isReadableStream:ry,isRequest:sy,isResponse:ly,isHeaders:oy,isUndefined:Ui,isDate:_2,isFile:$2,isBlob:ey,isRegExp:jy,isFunction:Qt,isStream:ay,isURLSearchParams:iy,isTypedArray:gy,isFileList:ty,forEach:_r,merge:Eu,extend:uy,trim:cy,stripBOM:dy,inherits:fy,toFlatObject:py,kindOf:Ml,kindOfTest:xa,endsWith:hy,toArray:my,forEachEntry:xy,matchAll:by,isHTMLForm:yy,hasOwnProperty:jm,hasOwnProp:jm,reduceDescriptors:Dg,freezeMethods:wy,toObjectSet:Ay,toCamelCase:vy,noop:Sy,toFiniteNumber:Ny,findKey:Mg,global:Un,isContextDefined:Bg,isSpecCompliantForm:Ey,toJSONObject:Cy,isAsyncFn:zy,isThenable:Oy,setImmediate:Lg,asap:ky,isIterable:Ty};function ze(r,s,l,o,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",s&&(this.code=s),l&&(this.config=l),o&&(this.request=o),u&&(this.response=u,this.status=u.status?u.status:null)}q.inherits(ze,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.status}}});const Ug=ze.prototype,Hg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{Hg[r]={value:r}});Object.defineProperties(ze,Hg);Object.defineProperty(Ug,"isAxiosError",{value:!0});ze.from=(r,s,l,o,u,f)=>{const p=Object.create(Ug);q.toFlatObject(r,p,function(b){return b!==Error.prototype},h=>h!=="isAxiosError");const g=r&&r.message?r.message:"Error",x=s==null&&r?r.code:s;return ze.call(p,g,x,l,o,u),r&&p.cause==null&&Object.defineProperty(p,"cause",{value:r,configurable:!0}),p.name=r&&r.name||"Error",f&&Object.assign(p,f),p};const Ry=null;function Cu(r){return q.isPlainObject(r)||q.isArray(r)}function qg(r){return q.endsWith(r,"[]")?r.slice(0,-2):r}function wm(r,s,l){return r?r.concat(s).map(function(u,f){return u=qg(u),!l&&f?"["+u+"]":u}).join(l?".":""):s}function My(r){return q.isArray(r)&&!r.some(Cu)}const By=q.toFlatObject(q,{},null,function(s){return/^is[A-Z]/.test(s)});function Dl(r,s,l){if(!q.isObject(r))throw new TypeError("target must be an object");s=s||new FormData,l=q.toFlatObject(l,{metaTokens:!0,dots:!1,indexes:!1},!1,function(O,z){return!q.isUndefined(z[O])});const o=l.metaTokens,u=l.visitor||b,f=l.dots,p=l.indexes,x=(l.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(s);if(!q.isFunction(u))throw new TypeError("visitor must be a function");function h(j){if(j===null)return"";if(q.isDate(j))return j.toISOString();if(q.isBoolean(j))return j.toString();if(!x&&q.isBlob(j))throw new ze("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(j)||q.isTypedArray(j)?x&&typeof Blob=="function"?new Blob([j]):Buffer.from(j):j}function b(j,O,z){let H=j;if(j&&!z&&typeof j=="object"){if(q.endsWith(O,"{}"))O=o?O:O.slice(0,-2),j=JSON.stringify(j);else if(q.isArray(j)&&My(j)||(q.isFileList(j)||q.endsWith(O,"[]"))&&(H=q.toArray(j)))return O=qg(O),H.forEach(function(V,re){!(q.isUndefined(V)||V===null)&&s.append(p===!0?wm([O],re,f):p===null?O:O+"[]",h(V))}),!1}return Cu(j)?!0:(s.append(wm(z,O,f),h(j)),!1)}const v=[],E=Object.assign(By,{defaultVisitor:b,convertValue:h,isVisitable:Cu});function S(j,O){if(!q.isUndefined(j)){if(v.indexOf(j)!==-1)throw Error("Circular reference detected in "+O.join("."));v.push(j),q.forEach(j,function(H,R){(!(q.isUndefined(H)||H===null)&&u.call(s,H,q.isString(R)?R.trim():R,O,E))===!0&&S(H,O?O.concat(R):[R])}),v.pop()}}if(!q.isObject(r))throw new TypeError("data must be an object");return S(r),s}function Am(r){const s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(o){return s[o]})}function Zu(r,s){this._pairs=[],r&&Dl(r,this,s)}const Vg=Zu.prototype;Vg.append=function(s,l){this._pairs.push([s,l])};Vg.toString=function(s){const l=s?function(o){return s.call(this,o,Am)}:Am;return this._pairs.map(function(u){return l(u[0])+"="+l(u[1])},"").join("&")};function Dy(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Gg(r,s,l){if(!s)return r;const o=l&&l.encode||Dy;q.isFunction(l)&&(l={serialize:l});const u=l&&l.serialize;let f;if(u?f=u(s,l):f=q.isURLSearchParams(s)?s.toString():new Zu(s,l).toString(o),f){const p=r.indexOf("#");p!==-1&&(r=r.slice(0,p)),r+=(r.indexOf("?")===-1?"?":"&")+f}return r}class Sm{constructor(){this.handlers=[]}use(s,l,o){return this.handlers.push({fulfilled:s,rejected:l,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(s){this.handlers[s]&&(this.handlers[s]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(s){q.forEach(this.handlers,function(o){o!==null&&s(o)})}}const Qg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ly=typeof URLSearchParams<"u"?URLSearchParams:Zu,Uy=typeof FormData<"u"?FormData:null,Hy=typeof Blob<"u"?Blob:null,qy={isBrowser:!0,classes:{URLSearchParams:Ly,FormData:Uy,Blob:Hy},protocols:["http","https","file","blob","url","data"]},Xu=typeof window<"u"&&typeof document<"u",zu=typeof navigator=="object"&&navigator||void 0,Vy=Xu&&(!zu||["ReactNative","NativeScript","NS"].indexOf(zu.product)<0),Gy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Qy=Xu&&window.location.href||"http://localhost",Yy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Xu,hasStandardBrowserEnv:Vy,hasStandardBrowserWebWorkerEnv:Gy,navigator:zu,origin:Qy},Symbol.toStringTag,{value:"Module"})),Tt={...Yy,...qy};function Ky(r,s){return Dl(r,new Tt.classes.URLSearchParams,{visitor:function(l,o,u,f){return Tt.isNode&&q.isBuffer(l)?(this.append(o,l.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)},...s})}function Fy(r){return q.matchAll(/\w+|\[(\w*)]/g,r).map(s=>s[0]==="[]"?"":s[1]||s[0])}function Py(r){const s={},l=Object.keys(r);let o;const u=l.length;let f;for(o=0;o<u;o++)f=l[o],s[f]=r[f];return s}function Yg(r){function s(l,o,u,f){let p=l[f++];if(p==="__proto__")return!0;const g=Number.isFinite(+p),x=f>=l.length;return p=!p&&q.isArray(u)?u.length:p,x?(q.hasOwnProp(u,p)?u[p]=[u[p],o]:u[p]=o,!g):((!u[p]||!q.isObject(u[p]))&&(u[p]=[]),s(l,o,u[p],f)&&q.isArray(u[p])&&(u[p]=Py(u[p])),!g)}if(q.isFormData(r)&&q.isFunction(r.entries)){const l={};return q.forEachEntry(r,(o,u)=>{s(Fy(o),u,l,0)}),l}return null}function Zy(r,s,l){if(q.isString(r))try{return(s||JSON.parse)(r),q.trim(r)}catch(o){if(o.name!=="SyntaxError")throw o}return(l||JSON.stringify)(r)}const $r={transitional:Qg,adapter:["xhr","http","fetch"],transformRequest:[function(s,l){const o=l.getContentType()||"",u=o.indexOf("application/json")>-1,f=q.isObject(s);if(f&&q.isHTMLForm(s)&&(s=new FormData(s)),q.isFormData(s))return u?JSON.stringify(Yg(s)):s;if(q.isArrayBuffer(s)||q.isBuffer(s)||q.isStream(s)||q.isFile(s)||q.isBlob(s)||q.isReadableStream(s))return s;if(q.isArrayBufferView(s))return s.buffer;if(q.isURLSearchParams(s))return l.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),s.toString();let g;if(f){if(o.indexOf("application/x-www-form-urlencoded")>-1)return Ky(s,this.formSerializer).toString();if((g=q.isFileList(s))||o.indexOf("multipart/form-data")>-1){const x=this.env&&this.env.FormData;return Dl(g?{"files[]":s}:s,x&&new x,this.formSerializer)}}return f||u?(l.setContentType("application/json",!1),Zy(s)):s}],transformResponse:[function(s){const l=this.transitional||$r.transitional,o=l&&l.forcedJSONParsing,u=this.responseType==="json";if(q.isResponse(s)||q.isReadableStream(s))return s;if(s&&q.isString(s)&&(o&&!this.responseType||u)){const p=!(l&&l.silentJSONParsing)&&u;try{return JSON.parse(s,this.parseReviver)}catch(g){if(p)throw g.name==="SyntaxError"?ze.from(g,ze.ERR_BAD_RESPONSE,this,null,this.response):g}}return s}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Tt.classes.FormData,Blob:Tt.classes.Blob},validateStatus:function(s){return s>=200&&s<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};q.forEach(["delete","get","head","post","put","patch"],r=>{$r.headers[r]={}});const Xy=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Iy=r=>{const s={};let l,o,u;return r&&r.split(`
`).forEach(function(p){u=p.indexOf(":"),l=p.substring(0,u).trim().toLowerCase(),o=p.substring(u+1).trim(),!(!l||s[l]&&Xy[l])&&(l==="set-cookie"?s[l]?s[l].push(o):s[l]=[o]:s[l]=s[l]?s[l]+", "+o:o)}),s},Nm=Symbol("internals");function Gr(r){return r&&String(r).trim().toLowerCase()}function yl(r){return r===!1||r==null?r:q.isArray(r)?r.map(yl):String(r)}function Jy(r){const s=Object.create(null),l=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=l.exec(r);)s[o[1]]=o[2];return s}const Wy=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function su(r,s,l,o,u){if(q.isFunction(o))return o.call(this,s,l);if(u&&(s=l),!!q.isString(s)){if(q.isString(o))return s.indexOf(o)!==-1;if(q.isRegExp(o))return o.test(s)}}function _y(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(s,l,o)=>l.toUpperCase()+o)}function $y(r,s){const l=q.toCamelCase(" "+s);["get","set","has"].forEach(o=>{Object.defineProperty(r,o+l,{value:function(u,f,p){return this[o].call(this,s,u,f,p)},configurable:!0})})}let Yt=class{constructor(s){s&&this.set(s)}set(s,l,o){const u=this;function f(g,x,h){const b=Gr(x);if(!b)throw new Error("header name must be a non-empty string");const v=q.findKey(u,b);(!v||u[v]===void 0||h===!0||h===void 0&&u[v]!==!1)&&(u[v||x]=yl(g))}const p=(g,x)=>q.forEach(g,(h,b)=>f(h,b,x));if(q.isPlainObject(s)||s instanceof this.constructor)p(s,l);else if(q.isString(s)&&(s=s.trim())&&!Wy(s))p(Iy(s),l);else if(q.isObject(s)&&q.isIterable(s)){let g={},x,h;for(const b of s){if(!q.isArray(b))throw TypeError("Object iterator must return a key-value pair");g[h=b[0]]=(x=g[h])?q.isArray(x)?[...x,b[1]]:[x,b[1]]:b[1]}p(g,l)}else s!=null&&f(l,s,o);return this}get(s,l){if(s=Gr(s),s){const o=q.findKey(this,s);if(o){const u=this[o];if(!l)return u;if(l===!0)return Jy(u);if(q.isFunction(l))return l.call(this,u,o);if(q.isRegExp(l))return l.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(s,l){if(s=Gr(s),s){const o=q.findKey(this,s);return!!(o&&this[o]!==void 0&&(!l||su(this,this[o],o,l)))}return!1}delete(s,l){const o=this;let u=!1;function f(p){if(p=Gr(p),p){const g=q.findKey(o,p);g&&(!l||su(o,o[g],g,l))&&(delete o[g],u=!0)}}return q.isArray(s)?s.forEach(f):f(s),u}clear(s){const l=Object.keys(this);let o=l.length,u=!1;for(;o--;){const f=l[o];(!s||su(this,this[f],f,s,!0))&&(delete this[f],u=!0)}return u}normalize(s){const l=this,o={};return q.forEach(this,(u,f)=>{const p=q.findKey(o,f);if(p){l[p]=yl(u),delete l[f];return}const g=s?_y(f):String(f).trim();g!==f&&delete l[f],l[g]=yl(u),o[g]=!0}),this}concat(...s){return this.constructor.concat(this,...s)}toJSON(s){const l=Object.create(null);return q.forEach(this,(o,u)=>{o!=null&&o!==!1&&(l[u]=s&&q.isArray(o)?o.join(", "):o)}),l}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([s,l])=>s+": "+l).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(s){return s instanceof this?s:new this(s)}static concat(s,...l){const o=new this(s);return l.forEach(u=>o.set(u)),o}static accessor(s){const o=(this[Nm]=this[Nm]={accessors:{}}).accessors,u=this.prototype;function f(p){const g=Gr(p);o[g]||($y(u,p),o[g]=!0)}return q.isArray(s)?s.forEach(f):f(s),this}};Yt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.reduceDescriptors(Yt.prototype,({value:r},s)=>{let l=s[0].toUpperCase()+s.slice(1);return{get:()=>r,set(o){this[l]=o}}});q.freezeMethods(Yt);function lu(r,s){const l=this||$r,o=s||l,u=Yt.from(o.headers);let f=o.data;return q.forEach(r,function(g){f=g.call(l,f,u.normalize(),s?s.status:void 0)}),u.normalize(),f}function Kg(r){return!!(r&&r.__CANCEL__)}function Ki(r,s,l){ze.call(this,r??"canceled",ze.ERR_CANCELED,s,l),this.name="CanceledError"}q.inherits(Ki,ze,{__CANCEL__:!0});function Fg(r,s,l){const o=l.config.validateStatus;!l.status||!o||o(l.status)?r(l):s(new ze("Request failed with status code "+l.status,[ze.ERR_BAD_REQUEST,ze.ERR_BAD_RESPONSE][Math.floor(l.status/100)-4],l.config,l.request,l))}function ev(r){const s=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return s&&s[1]||""}function tv(r,s){r=r||10;const l=new Array(r),o=new Array(r);let u=0,f=0,p;return s=s!==void 0?s:1e3,function(x){const h=Date.now(),b=o[f];p||(p=h),l[u]=x,o[u]=h;let v=f,E=0;for(;v!==u;)E+=l[v++],v=v%r;if(u=(u+1)%r,u===f&&(f=(f+1)%r),h-p<s)return;const S=b&&h-b;return S?Math.round(E*1e3/S):void 0}}function av(r,s){let l=0,o=1e3/s,u,f;const p=(h,b=Date.now())=>{l=b,u=null,f&&(clearTimeout(f),f=null),r(...h)};return[(...h)=>{const b=Date.now(),v=b-l;v>=o?p(h,b):(u=h,f||(f=setTimeout(()=>{f=null,p(u)},o-v)))},()=>u&&p(u)]}const Nl=(r,s,l=3)=>{let o=0;const u=tv(50,250);return av(f=>{const p=f.loaded,g=f.lengthComputable?f.total:void 0,x=p-o,h=u(x),b=p<=g;o=p;const v={loaded:p,total:g,progress:g?p/g:void 0,bytes:x,rate:h||void 0,estimated:h&&g&&b?(g-p)/h:void 0,event:f,lengthComputable:g!=null,[s?"download":"upload"]:!0};r(v)},l)},Em=(r,s)=>{const l=r!=null;return[o=>s[0]({lengthComputable:l,total:r,loaded:o}),s[1]]},Cm=r=>(...s)=>q.asap(()=>r(...s)),nv=Tt.hasStandardBrowserEnv?((r,s)=>l=>(l=new URL(l,Tt.origin),r.protocol===l.protocol&&r.host===l.host&&(s||r.port===l.port)))(new URL(Tt.origin),Tt.navigator&&/(msie|trident)/i.test(Tt.navigator.userAgent)):()=>!0,iv=Tt.hasStandardBrowserEnv?{write(r,s,l,o,u,f,p){if(typeof document>"u")return;const g=[`${r}=${encodeURIComponent(s)}`];q.isNumber(l)&&g.push(`expires=${new Date(l).toUTCString()}`),q.isString(o)&&g.push(`path=${o}`),q.isString(u)&&g.push(`domain=${u}`),f===!0&&g.push("secure"),q.isString(p)&&g.push(`SameSite=${p}`),document.cookie=g.join("; ")},read(r){if(typeof document>"u")return null;const s=document.cookie.match(new RegExp("(?:^|; )"+r+"=([^;]*)"));return s?decodeURIComponent(s[1]):null},remove(r){this.write(r,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function rv(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function sv(r,s){return s?r.replace(/\/?\/$/,"")+"/"+s.replace(/^\/+/,""):r}function Pg(r,s,l){let o=!rv(s);return r&&(o||l==!1)?sv(r,s):s}const zm=r=>r instanceof Yt?{...r}:r;function qn(r,s){s=s||{};const l={};function o(h,b,v,E){return q.isPlainObject(h)&&q.isPlainObject(b)?q.merge.call({caseless:E},h,b):q.isPlainObject(b)?q.merge({},b):q.isArray(b)?b.slice():b}function u(h,b,v,E){if(q.isUndefined(b)){if(!q.isUndefined(h))return o(void 0,h,v,E)}else return o(h,b,v,E)}function f(h,b){if(!q.isUndefined(b))return o(void 0,b)}function p(h,b){if(q.isUndefined(b)){if(!q.isUndefined(h))return o(void 0,h)}else return o(void 0,b)}function g(h,b,v){if(v in s)return o(h,b);if(v in r)return o(void 0,h)}const x={url:f,method:f,data:f,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,withXSRFToken:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,responseEncoding:p,validateStatus:g,headers:(h,b,v)=>u(zm(h),zm(b),v,!0)};return q.forEach(Object.keys({...r,...s}),function(b){const v=x[b]||u,E=v(r[b],s[b],b);q.isUndefined(E)&&v!==g||(l[b]=E)}),l}const Zg=r=>{const s=qn({},r);let{data:l,withXSRFToken:o,xsrfHeaderName:u,xsrfCookieName:f,headers:p,auth:g}=s;if(s.headers=p=Yt.from(p),s.url=Gg(Pg(s.baseURL,s.url,s.allowAbsoluteUrls),r.params,r.paramsSerializer),g&&p.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):""))),q.isFormData(l)){if(Tt.hasStandardBrowserEnv||Tt.hasStandardBrowserWebWorkerEnv)p.setContentType(void 0);else if(q.isFunction(l.getHeaders)){const x=l.getHeaders(),h=["content-type","content-length"];Object.entries(x).forEach(([b,v])=>{h.includes(b.toLowerCase())&&p.set(b,v)})}}if(Tt.hasStandardBrowserEnv&&(o&&q.isFunction(o)&&(o=o(s)),o||o!==!1&&nv(s.url))){const x=u&&f&&iv.read(f);x&&p.set(u,x)}return s},lv=typeof XMLHttpRequest<"u",ov=lv&&function(r){return new Promise(function(l,o){const u=Zg(r);let f=u.data;const p=Yt.from(u.headers).normalize();let{responseType:g,onUploadProgress:x,onDownloadProgress:h}=u,b,v,E,S,j;function O(){S&&S(),j&&j(),u.cancelToken&&u.cancelToken.unsubscribe(b),u.signal&&u.signal.removeEventListener("abort",b)}let z=new XMLHttpRequest;z.open(u.method.toUpperCase(),u.url,!0),z.timeout=u.timeout;function H(){if(!z)return;const V=Yt.from("getAllResponseHeaders"in z&&z.getAllResponseHeaders()),W={data:!g||g==="text"||g==="json"?z.responseText:z.response,status:z.status,statusText:z.statusText,headers:V,config:r,request:z};Fg(function(te){l(te),O()},function(te){o(te),O()},W),z=null}"onloadend"in z?z.onloadend=H:z.onreadystatechange=function(){!z||z.readyState!==4||z.status===0&&!(z.responseURL&&z.responseURL.indexOf("file:")===0)||setTimeout(H)},z.onabort=function(){z&&(o(new ze("Request aborted",ze.ECONNABORTED,r,z)),z=null)},z.onerror=function(re){const W=re&&re.message?re.message:"Network Error",le=new ze(W,ze.ERR_NETWORK,r,z);le.event=re||null,o(le),z=null},z.ontimeout=function(){let re=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const W=u.transitional||Qg;u.timeoutErrorMessage&&(re=u.timeoutErrorMessage),o(new ze(re,W.clarifyTimeoutError?ze.ETIMEDOUT:ze.ECONNABORTED,r,z)),z=null},f===void 0&&p.setContentType(null),"setRequestHeader"in z&&q.forEach(p.toJSON(),function(re,W){z.setRequestHeader(W,re)}),q.isUndefined(u.withCredentials)||(z.withCredentials=!!u.withCredentials),g&&g!=="json"&&(z.responseType=u.responseType),h&&([E,j]=Nl(h,!0),z.addEventListener("progress",E)),x&&z.upload&&([v,S]=Nl(x),z.upload.addEventListener("progress",v),z.upload.addEventListener("loadend",S)),(u.cancelToken||u.signal)&&(b=V=>{z&&(o(!V||V.type?new Ki(null,r,z):V),z.abort(),z=null)},u.cancelToken&&u.cancelToken.subscribe(b),u.signal&&(u.signal.aborted?b():u.signal.addEventListener("abort",b)));const R=ev(u.url);if(R&&Tt.protocols.indexOf(R)===-1){o(new ze("Unsupported protocol "+R+":",ze.ERR_BAD_REQUEST,r));return}z.send(f||null)})},cv=(r,s)=>{const{length:l}=r=r?r.filter(Boolean):[];if(s||l){let o=new AbortController,u;const f=function(h){if(!u){u=!0,g();const b=h instanceof Error?h:this.reason;o.abort(b instanceof ze?b:new Ki(b instanceof Error?b.message:b))}};let p=s&&setTimeout(()=>{p=null,f(new ze(`timeout ${s} of ms exceeded`,ze.ETIMEDOUT))},s);const g=()=>{r&&(p&&clearTimeout(p),p=null,r.forEach(h=>{h.unsubscribe?h.unsubscribe(f):h.removeEventListener("abort",f)}),r=null)};r.forEach(h=>h.addEventListener("abort",f));const{signal:x}=o;return x.unsubscribe=()=>q.asap(g),x}},uv=function*(r,s){let l=r.byteLength;if(l<s){yield r;return}let o=0,u;for(;o<l;)u=o+s,yield r.slice(o,u),o=u},dv=async function*(r,s){for await(const l of fv(r))yield*uv(l,s)},fv=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const s=r.getReader();try{for(;;){const{done:l,value:o}=await s.read();if(l)break;yield o}}finally{await s.cancel()}},Om=(r,s,l,o)=>{const u=dv(r,s);let f=0,p,g=x=>{p||(p=!0,o&&o(x))};return new ReadableStream({async pull(x){try{const{done:h,value:b}=await u.next();if(h){g(),x.close();return}let v=b.byteLength;if(l){let E=f+=v;l(E)}x.enqueue(new Uint8Array(b))}catch(h){throw g(h),h}},cancel(x){return g(x),u.return()}},{highWaterMark:2})},km=64*1024,{isFunction:hl}=q,pv=(({Request:r,Response:s})=>({Request:r,Response:s}))(q.global),{ReadableStream:Tm,TextEncoder:Rm}=q.global,Mm=(r,...s)=>{try{return!!r(...s)}catch{return!1}},hv=r=>{r=q.merge.call({skipUndefined:!0},pv,r);const{fetch:s,Request:l,Response:o}=r,u=s?hl(s):typeof fetch=="function",f=hl(l),p=hl(o);if(!u)return!1;const g=u&&hl(Tm),x=u&&(typeof Rm=="function"?(j=>O=>j.encode(O))(new Rm):async j=>new Uint8Array(await new l(j).arrayBuffer())),h=f&&g&&Mm(()=>{let j=!1;const O=new l(Tt.origin,{body:new Tm,method:"POST",get duplex(){return j=!0,"half"}}).headers.has("Content-Type");return j&&!O}),b=p&&g&&Mm(()=>q.isReadableStream(new o("").body)),v={stream:b&&(j=>j.body)};u&&["text","arrayBuffer","blob","formData","stream"].forEach(j=>{!v[j]&&(v[j]=(O,z)=>{let H=O&&O[j];if(H)return H.call(O);throw new ze(`Response type '${j}' is not supported`,ze.ERR_NOT_SUPPORT,z)})});const E=async j=>{if(j==null)return 0;if(q.isBlob(j))return j.size;if(q.isSpecCompliantForm(j))return(await new l(Tt.origin,{method:"POST",body:j}).arrayBuffer()).byteLength;if(q.isArrayBufferView(j)||q.isArrayBuffer(j))return j.byteLength;if(q.isURLSearchParams(j)&&(j=j+""),q.isString(j))return(await x(j)).byteLength},S=async(j,O)=>{const z=q.toFiniteNumber(j.getContentLength());return z??E(O)};return async j=>{let{url:O,method:z,data:H,signal:R,cancelToken:V,timeout:re,onDownloadProgress:W,onUploadProgress:le,responseType:te,headers:ce,withCredentials:ie="same-origin",fetchOptions:pe}=Zg(j),_=s||fetch;te=te?(te+"").toLowerCase():"text";let X=cv([R,V&&V.toAbortSignal()],re),ee=null;const ge=X&&X.unsubscribe&&(()=>{X.unsubscribe()});let Me;try{if(le&&h&&z!=="get"&&z!=="head"&&(Me=await S(ce,H))!==0){let A=new l(O,{method:"POST",body:H,duplex:"half"}),U;if(q.isFormData(H)&&(U=A.headers.get("content-type"))&&ce.setContentType(U),A.body){const[I,se]=Em(Me,Nl(Cm(le)));H=Om(A.body,km,I,se)}}q.isString(ie)||(ie=ie?"include":"omit");const T=f&&"credentials"in l.prototype,J={...pe,signal:X,method:z.toUpperCase(),headers:ce.normalize().toJSON(),body:H,duplex:"half",credentials:T?ie:void 0};ee=f&&new l(O,J);let ue=await(f?_(ee,pe):_(O,J));const K=b&&(te==="stream"||te==="response");if(b&&(W||K&&ge)){const A={};["status","statusText","headers"].forEach(ye=>{A[ye]=ue[ye]});const U=q.toFiniteNumber(ue.headers.get("content-length")),[I,se]=W&&Em(U,Nl(Cm(W),!0))||[];ue=new o(Om(ue.body,km,I,()=>{se&&se(),ge&&ge()}),A)}te=te||"text";let fe=await v[q.findKey(v,te)||"text"](ue,j);return!K&&ge&&ge(),await new Promise((A,U)=>{Fg(A,U,{data:fe,headers:Yt.from(ue.headers),status:ue.status,statusText:ue.statusText,config:j,request:ee})})}catch(T){throw ge&&ge(),T&&T.name==="TypeError"&&/Load failed|fetch/i.test(T.message)?Object.assign(new ze("Network Error",ze.ERR_NETWORK,j,ee),{cause:T.cause||T}):ze.from(T,T&&T.code,j,ee)}}},mv=new Map,Xg=r=>{let s=r&&r.env||{};const{fetch:l,Request:o,Response:u}=s,f=[o,u,l];let p=f.length,g=p,x,h,b=mv;for(;g--;)x=f[g],h=b.get(x),h===void 0&&b.set(x,h=g?new Map:hv(s)),b=h;return h};Xg();const Iu={http:Ry,xhr:ov,fetch:{get:Xg}};q.forEach(Iu,(r,s)=>{if(r){try{Object.defineProperty(r,"name",{value:s})}catch{}Object.defineProperty(r,"adapterName",{value:s})}});const Bm=r=>`- ${r}`,gv=r=>q.isFunction(r)||r===null||r===!1;function xv(r,s){r=q.isArray(r)?r:[r];const{length:l}=r;let o,u;const f={};for(let p=0;p<l;p++){o=r[p];let g;if(u=o,!gv(o)&&(u=Iu[(g=String(o)).toLowerCase()],u===void 0))throw new ze(`Unknown adapter '${g}'`);if(u&&(q.isFunction(u)||(u=u.get(s))))break;f[g||"#"+p]=u}if(!u){const p=Object.entries(f).map(([x,h])=>`adapter ${x} `+(h===!1?"is not supported by the environment":"is not available in the build"));let g=l?p.length>1?`since :
`+p.map(Bm).join(`
`):" "+Bm(p[0]):"as no adapter specified";throw new ze("There is no suitable adapter to dispatch the request "+g,"ERR_NOT_SUPPORT")}return u}const Ig={getAdapter:xv,adapters:Iu};function ou(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Ki(null,r)}function Dm(r){return ou(r),r.headers=Yt.from(r.headers),r.data=lu.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),Ig.getAdapter(r.adapter||$r.adapter,r)(r).then(function(o){return ou(r),o.data=lu.call(r,r.transformResponse,o),o.headers=Yt.from(o.headers),o},function(o){return Kg(o)||(ou(r),o&&o.response&&(o.response.data=lu.call(r,r.transformResponse,o.response),o.response.headers=Yt.from(o.response.headers))),Promise.reject(o)})}const Jg="1.13.1",Ll={};["object","boolean","number","function","string","symbol"].forEach((r,s)=>{Ll[r]=function(o){return typeof o===r||"a"+(s<1?"n ":" ")+r}});const Lm={};Ll.transitional=function(s,l,o){function u(f,p){return"[Axios v"+Jg+"] Transitional option '"+f+"'"+p+(o?". "+o:"")}return(f,p,g)=>{if(s===!1)throw new ze(u(p," has been removed"+(l?" in "+l:"")),ze.ERR_DEPRECATED);return l&&!Lm[p]&&(Lm[p]=!0,console.warn(u(p," has been deprecated since v"+l+" and will be removed in the near future"))),s?s(f,p,g):!0}};Ll.spelling=function(s){return(l,o)=>(console.warn(`${o} is likely a misspelling of ${s}`),!0)};function bv(r,s,l){if(typeof r!="object")throw new ze("options must be an object",ze.ERR_BAD_OPTION_VALUE);const o=Object.keys(r);let u=o.length;for(;u-- >0;){const f=o[u],p=s[f];if(p){const g=r[f],x=g===void 0||p(g,f,r);if(x!==!0)throw new ze("option "+f+" must be "+x,ze.ERR_BAD_OPTION_VALUE);continue}if(l!==!0)throw new ze("Unknown option "+f,ze.ERR_BAD_OPTION)}}const vl={assertOptions:bv,validators:Ll},wa=vl.validators;let Hn=class{constructor(s){this.defaults=s||{},this.interceptors={request:new Sm,response:new Sm}}async request(s,l){try{return await this._request(s,l)}catch(o){if(o instanceof Error){let u={};Error.captureStackTrace?Error.captureStackTrace(u):u=new Error;const f=u.stack?u.stack.replace(/^.+\n/,""):"";try{o.stack?f&&!String(o.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+f):o.stack=f}catch{}}throw o}}_request(s,l){typeof s=="string"?(l=l||{},l.url=s):l=s||{},l=qn(this.defaults,l);const{transitional:o,paramsSerializer:u,headers:f}=l;o!==void 0&&vl.assertOptions(o,{silentJSONParsing:wa.transitional(wa.boolean),forcedJSONParsing:wa.transitional(wa.boolean),clarifyTimeoutError:wa.transitional(wa.boolean)},!1),u!=null&&(q.isFunction(u)?l.paramsSerializer={serialize:u}:vl.assertOptions(u,{encode:wa.function,serialize:wa.function},!0)),l.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?l.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:l.allowAbsoluteUrls=!0),vl.assertOptions(l,{baseUrl:wa.spelling("baseURL"),withXsrfToken:wa.spelling("withXSRFToken")},!0),l.method=(l.method||this.defaults.method||"get").toLowerCase();let p=f&&q.merge(f.common,f[l.method]);f&&q.forEach(["delete","get","head","post","put","patch","common"],j=>{delete f[j]}),l.headers=Yt.concat(p,f);const g=[];let x=!0;this.interceptors.request.forEach(function(O){typeof O.runWhen=="function"&&O.runWhen(l)===!1||(x=x&&O.synchronous,g.unshift(O.fulfilled,O.rejected))});const h=[];this.interceptors.response.forEach(function(O){h.push(O.fulfilled,O.rejected)});let b,v=0,E;if(!x){const j=[Dm.bind(this),void 0];for(j.unshift(...g),j.push(...h),E=j.length,b=Promise.resolve(l);v<E;)b=b.then(j[v++],j[v++]);return b}E=g.length;let S=l;for(;v<E;){const j=g[v++],O=g[v++];try{S=j(S)}catch(z){O.call(this,z);break}}try{b=Dm.call(this,S)}catch(j){return Promise.reject(j)}for(v=0,E=h.length;v<E;)b=b.then(h[v++],h[v++]);return b}getUri(s){s=qn(this.defaults,s);const l=Pg(s.baseURL,s.url,s.allowAbsoluteUrls);return Gg(l,s.params,s.paramsSerializer)}};q.forEach(["delete","get","head","options"],function(s){Hn.prototype[s]=function(l,o){return this.request(qn(o||{},{method:s,url:l,data:(o||{}).data}))}});q.forEach(["post","put","patch"],function(s){function l(o){return function(f,p,g){return this.request(qn(g||{},{method:s,headers:o?{"Content-Type":"multipart/form-data"}:{},url:f,data:p}))}}Hn.prototype[s]=l(),Hn.prototype[s+"Form"]=l(!0)});let yv=class Wg{constructor(s){if(typeof s!="function")throw new TypeError("executor must be a function.");let l;this.promise=new Promise(function(f){l=f});const o=this;this.promise.then(u=>{if(!o._listeners)return;let f=o._listeners.length;for(;f-- >0;)o._listeners[f](u);o._listeners=null}),this.promise.then=u=>{let f;const p=new Promise(g=>{o.subscribe(g),f=g}).then(u);return p.cancel=function(){o.unsubscribe(f)},p},s(function(f,p,g){o.reason||(o.reason=new Ki(f,p,g),l(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]}unsubscribe(s){if(!this._listeners)return;const l=this._listeners.indexOf(s);l!==-1&&this._listeners.splice(l,1)}toAbortSignal(){const s=new AbortController,l=o=>{s.abort(o)};return this.subscribe(l),s.signal.unsubscribe=()=>this.unsubscribe(l),s.signal}static source(){let s;return{token:new Wg(function(u){s=u}),cancel:s}}};function vv(r){return function(l){return r.apply(null,l)}}function jv(r){return q.isObject(r)&&r.isAxiosError===!0}const Ou={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ou).forEach(([r,s])=>{Ou[s]=r});function _g(r){const s=new Hn(r),l=Og(Hn.prototype.request,s);return q.extend(l,Hn.prototype,s,{allOwnKeys:!0}),q.extend(l,s,null,{allOwnKeys:!0}),l.create=function(u){return _g(qn(r,u))},l}const ht=_g($r);ht.Axios=Hn;ht.CanceledError=Ki;ht.CancelToken=yv;ht.isCancel=Kg;ht.VERSION=Jg;ht.toFormData=Dl;ht.AxiosError=ze;ht.Cancel=ht.CanceledError;ht.all=function(s){return Promise.all(s)};ht.spread=vv;ht.isAxiosError=jv;ht.mergeConfig=qn;ht.AxiosHeaders=Yt;ht.formToJSON=r=>Yg(q.isHTMLForm(r)?new FormData(r):r);ht.getAdapter=Ig.getAdapter;ht.HttpStatusCode=Ou;ht.default=ht;const{Axios:q6,AxiosError:V6,CanceledError:G6,isCancel:Q6,CancelToken:Y6,VERSION:K6,all:F6,Cancel:P6,isAxiosError:Z6,spread:X6,toFormData:I6,AxiosHeaders:J6,HttpStatusCode:W6,formToJSON:_6,getAdapter:$6,mergeConfig:e3}=ht,wv="http://localhost:8080/api/auth",$g=ht.create({baseURL:wv,headers:{"Content-Type":"application/json"}}),Av=async(r,s)=>{try{const l=await $g.post("/login",{username:r,password:s});if(!l.data.accessToken)throw new Error(l.data.message||"Invalid credentials");return l.data}catch(l){throw console.error(" Login API Error:",l),new Error(l.response?.data?.message||"Login failed")}},Sv=async r=>{try{return(await $g.post("/register",r)).data}catch(s){throw console.error(" Register API Error:",s),new Error(s.response?.data?.message||"Registration failed")}},Nv=[{email:"user@gmail.com",password:"123",name:"Default User"},{email:"test@example.com",password:"12345",name:"Test User"}],Ev=()=>{const[r,s]=w.useState(!0),[l,o]=w.useState(!1),[u,f]=w.useState(""),[p,g]=w.useState(""),[x,h]=w.useState(""),[b,v]=w.useState(!1),E=ca(),S=async j=>{j.preventDefault(),h(""),v(!0);try{const z=await Av(u,p);if(z?.accessToken){sessionStorage.setItem("accessToken",z.accessToken),sessionStorage.setItem("refreshToken",z.refreshToken),sessionStorage.setItem("userEmail",u),alert("Login Successful!"),E("/userdashboard");return}h(z?.message||"Trying offline login...")}catch{console.warn("Backend offline. Using offline fallback login...")}const O=Nv.find(z=>z.email.toLowerCase()===u.toLowerCase()&&z.password===p);O?(sessionStorage.setItem("accessToken","offline-token"),sessionStorage.setItem("userEmail",O.email),alert("Offline Login Successful!"),E("/userdashboard")):h("Invalid username or password (offline login)"),v(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(Yn,{}),n.jsx("div",{style:{paddingTop:"120px"},children:n.jsx("div",{className:"login-container",children:n.jsxs("div",{className:"login-card",children:[n.jsx("h2",{children:"Welcome Back"}),n.jsx("p",{children:"Login to continue your AgriTechPro journey"}),n.jsxs("div",{className:"login-toggle",children:[n.jsx("button",{className:r?"active":"",onClick:()=>s(!0),children:"Email Login"}),n.jsx("button",{className:r?"":"active",onClick:()=>s(!1),children:"Phone Login"})]}),n.jsxs("form",{className:"login-form",onSubmit:S,children:[n.jsx("input",{type:r?"email":"tel",placeholder:r?"Enter your email":"Enter your phone number",value:u,onChange:j=>f(j.target.value),required:!0}),n.jsxs("div",{className:"password-field",children:[n.jsx("input",{type:l?"text":"password",placeholder:"Enter your password",value:p,onChange:j=>g(j.target.value),required:!0}),n.jsx("span",{className:"toggle-password",onClick:()=>o(!l),children:l?"Hide":"Show"})]}),x&&n.jsx("p",{className:"error-text",children:x}),n.jsx("div",{className:"forgot-password",children:n.jsx("a",{href:"/forgot-password",children:"Forgot Password?"})}),n.jsx("button",{type:"submit",className:"login-btn",disabled:b,children:b?"Logging in...":"Login"})]}),n.jsx("div",{className:"divider",children:n.jsx("span",{children:"OR"})}),n.jsxs("div",{className:"sso-icons",children:[n.jsx("a",{href:"http://localhost:8080/oauth2/authorization/google",className:"sso-btn google",children:n.jsx(Qu,{size:22})}),n.jsx("a",{href:"http://localhost:8080/oauth2/authorization/github",className:"sso-btn github",children:n.jsx(Ku,{size:20})}),n.jsx("a",{href:"#",className:"sso-btn facebook",children:n.jsx(Yu,{size:20})}),n.jsx("a",{href:"#",className:"sso-btn linkedin",children:n.jsx(Fu,{size:20})})]}),n.jsxs("p",{className:"signup-text",children:["Don’t have an account? ",n.jsx(oe,{to:"/register",children:"Sign up"})]})]})})}),n.jsx("style",{children:`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #e8f5e9, #f1f8e9);
          padding: 1rem;
          margin-top: -120px;
        }
        .login-card {
          background: #fff;
          padding: 2.5rem 2rem;
          border-radius: 15px;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 420px;
          text-align: center;
          transition: 0.3s;
        }
        .login-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        h2 { color: #2a7a0e; margin-bottom: .5rem; }
        p { color: #555; font-size: .95rem; margin-bottom: 1.5rem; }

        .login-toggle {
          display: flex;
          justify-content: center;
          margin-bottom: 1.2rem;
          background:#f3f4f6;
          border-radius: 10px;
          overflow:hidden;
        }
        .login-toggle button {
          flex: 1;
          padding: .7rem;
          border: none;
          background: transparent;
          font-weight: 500;
          color: #555;
          cursor:pointer;
          transition:.3s;
        }
        .login-toggle button.active {
          background:#2a7a0e;
          color:white;
        }

        .login-form { display:flex; flex-direction:column; gap:1rem; }
        .login-form input {
          width:100%; padding:.9rem; border:1px solid #ccc;
          border-radius:8px; font-size:1rem;
        }

        .password-field { position:relative; }
        .toggle-password {
          position:absolute; right:12px; top:50%;
          transform:translateY(-50%); color:#2a7a0e;
          cursor:pointer; font-size:.9rem; font-weight:600;
        }

        .forgot-password { text-align:right; }
        .forgot-password a { color:#2a7a0e; font-size:.9rem; }

        .login-btn {
          background:#2a7a0e; color:white;
          padding:.9rem; border:none; border-radius:8px;
          font-weight:600; cursor:pointer;
        }

        .divider { margin:1.5rem 0; color:#999; font-weight:500; }

        .sso-icons { display:flex; justify-content:center; gap:1rem; }
        .sso-btn { 
          width:45px; height:45px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
        }

        .sso-btn.google { background:#fff; border:1px solid #ddd; }
        .sso-btn.github { background:#333; color:white; }
        .sso-btn.facebook { background:#1877f2; }
        .sso-btn.linkedin { background:#0077b5; }

        .signup-text a { color:#2a7a0e; font-weight:600; }

        @media (max-width:600px) {
          .login-card { padding:2rem 1.5rem; }
          h2 { font-size:1.3rem; }
        }
      `})]})},Cv=()=>{const[r,s]=w.useState({userName:"",email:"",mobile:"",password:"",address:"",role:"USER"}),[l,o]=w.useState(!1),[u,f]=w.useState(""),p=ca(),g=h=>{s({...r,[h.target.name]:h.target.value})},x=async h=>{h.preventDefault(),f(""),o(!0);try{const b=await Sv(r);alert(b.message||"User registered successfully!"),p("/login")}catch(b){f(b.message||"Registration failed! Try again.")}finally{o(!1)}};return n.jsxs("div",{className:"register-container",children:[n.jsxs("div",{className:"register-card",children:[n.jsx("h2",{children:"Create Account 🌿"}),n.jsx("p",{children:"Join AgriTechPro and grow your future"}),n.jsxs("form",{className:"register-form",onSubmit:x,children:[n.jsx("input",{type:"text",name:"userName",placeholder:"Full Name",value:r.userName,onChange:g,required:!0}),n.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:r.email,onChange:g,required:!0}),n.jsx("input",{type:"tel",name:"mobile",placeholder:"Mobile Number",value:r.mobile,onChange:g,required:!0}),n.jsx("input",{type:"password",name:"password",placeholder:"Password",value:r.password,onChange:g,required:!0}),n.jsx("textarea",{name:"address",placeholder:"Full Address",rows:"3",value:r.address,onChange:g,required:!0}),n.jsxs("select",{name:"role",value:r.role,onChange:g,required:!0,children:[n.jsx("option",{value:"USER",children:"USER"}),n.jsx("option",{value:"ADMIN",children:"ADMIN"}),n.jsx("option",{value:"VENDOR",children:"VENDOR"})]}),u&&n.jsx("p",{style:{color:"red"},children:u}),n.jsx("button",{type:"submit",className:"register-btn",disabled:l,children:l?"Registering...":"Register"})]}),n.jsxs("p",{className:"signup-text",children:["Already have an account? ",n.jsx(oe,{to:"/login",children:"Login"})]})]}),n.jsx("style",{children:`
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
      `})]})},zv="/AgriTechUl/assets/b1-x3izpeS2.jpg",Ov="/AgriTechUl/assets/b2-D2CNAekI.jpeg",kv="/AgriTechUl/assets/b3-DNW8ECe5.jpg",cu=[{id:1,image:zv,title:"Quality Seeds for High Yield",subtitle:"Scientifically tested seeds to boost productivity.",backgroundColor:"#e6f7e6"},{id:2,image:Ov,title:"Organic Fertilizers",subtitle:"Keep your soil healthy. Grow naturally.",backgroundColor:"#fff4e6"},{id:3,image:kv,title:"Tractor & Equipments",subtitle:"Modern tools for smart farming.",backgroundColor:"#e6f3ff"}];function ex(){const[r,s]=w.useState(0);return w.useEffect(()=>{const l=setInterval(()=>{s(o=>(o+1)%cu.length)},3500);return()=>clearInterval(l)},[]),n.jsxs("div",{className:"hero-slider",children:[cu.map((l,o)=>n.jsxs("div",{className:`hero-slide ${r===o?"active":""}`,style:{backgroundColor:l.backgroundColor},children:[n.jsxs("div",{className:"hero-content",children:[n.jsx("h2",{children:l.title}),n.jsx("p",{children:l.subtitle}),n.jsxs("div",{className:"hero-buttons",children:[n.jsx("button",{className:"buy-btn",children:"Buy Now"}),n.jsx("button",{className:"info-btn",children:"More Info"})]})]}),n.jsx("div",{className:"hero-img-box",children:n.jsx("img",{src:l.image,alt:"banner"})})]},l.id)),n.jsx("div",{className:"dots",children:cu.map((l,o)=>n.jsx("span",{className:`dot ${r===o?"active":""}`,onClick:()=>s(o)},o))}),n.jsx("style",{children:`
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
      `})]})}const Tv=[{id:1,name:"Offers",img:"https://media.bighaat.com/wsfbanners/ec9db2d0-d70c-41ae-abf0-83a286c1de05.webp?w=1080&q=80",to:"/category/offers-today"},{id:2,name:"Insecticides",img:"https://media.bighaat.com/wsfbanners/f74bb722-23ff-4cfa-8a4f-09a817617c5f.webp?w=1080&q=80",to:"/category/insecticides"},{id:3,name:"Nutrients",img:"https://media.bighaat.com/wsfbanners/45e90225-8767-44f7-a3de-c1f5d186ae16.webp?w=1080&q=80",to:"/category/nutrients"},{id:4,name:"Fungicides",img:"https://media.bighaat.com/wsfbanners/97c1397e-0e1a-4c66-8d63-229a983de12b.webp?w=1080&q=80",to:"/category/fungicides"},{id:5,name:"Vegetable & Fruit Seeds",img:"https://media.bighaat.com/wsfbanners/87f7b455-ab96-4433-9e8c-24fac60ccff3.webp?w=1080&q=80",to:"/category/veg-fruit-seeds"},{id:6,name:"Herbicides",img:"https://media.bighaat.com/wsfbanners/f294b1e7-1cd2-4895-8b6f-d50fe172ddd1.webp?w=1080&q=80",to:"/category/herbicides"},{id:7,name:"Growth Promoters",img:"https://media.bighaat.com/wsfbanners/153b1941-7cab-41b0-ba1b-f1020be1f4b9.webp?w=1080&q=80",to:"/category/growth-promoters"},{id:8,name:"Farm Machinery",img:"https://media.bighaat.com/wsfbanners/65967dbe-5b82-4c4a-a24f-5d72cf21eaf6.webp?w=1080&q=80",to:"/category/farm-machinery"},{id:9,name:"Flower Seeds",img:"https://media.bighaat.com/wsfbanners/74efbaad-48dd-432c-8979-78fd0a970d39.webp?w=1080&q=80",to:"/category/flower-seeds"},{id:10,name:"Organic Farming",img:"https://media.bighaat.com/wsfbanners/b5b78d8a-27fe-40a5-8c05-5684ed78611c.webp?w=1080&q=80",to:"/category/organic"},{id:11,name:"Animal Husbandry",img:"https://media.bighaat.com/wsfbanners/6f4d9010-e0c9-4653-b27e-5a3933fbefa5.webp?w=1080&q=80",to:"/category/animal-husbandry"},{id:12,name:"New Arrivals",img:"https://media.bighaat.com/wsfbanners/5270cb61-95a2-41f8-9d8f-d88ae16bef1e.webp?w=1080&q=80",to:"/new-arrivals"}];function tx(){return n.jsxs("section",{className:"cat-wrap",children:[n.jsx("h2",{className:"cat-title",children:"Categories"}),n.jsx("div",{className:"cat-grid",children:Tv.map((r,s)=>n.jsxs(oe,{to:r.to,className:"cat-card",children:[n.jsx("div",{className:"cat-thumb",style:{background:Um[s%Um.length]},children:n.jsx("img",{src:r.img,alt:r.name,loading:"lazy"})}),n.jsx("div",{className:"cat-name",children:r.name})]},r.id))}),n.jsx("style",{children:`
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
      `})]})}const Um=["linear-gradient(145deg, #d9f6ff, #fffdf3)","linear-gradient(145deg, #ffe5ec, #fffdfa)","linear-gradient(145deg, #e8ffe8, #fffef2)","linear-gradient(145deg, #f1e8ff, #fffdf6)","linear-gradient(145deg, #ffe9d9, #fffdf9)","linear-gradient(145deg, #dff5ff, #fffef4)"],Vn=[{id:1,name:"Hybrid Tomato Seeds",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",brand:"Kaveri Seeds",price:199,mrp:250,rating:4.6},{id:2,name:"F1 Hybrid Chilli Seeds",image:"https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&q=80",brand:"East West Seeds",price:149,mrp:200,rating:4.3},{id:3,name:"Hybrid Brinjal Seeds",image:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",brand:"Nunhems",price:135,mrp:180,rating:4.1},{id:4,name:"Cucumber Hybrid Seeds",image:"https://th.bing.com/th/id/OIP.Y-g_X54Kg34x7GkIgTGDxgHaHY?w=179&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",brand:"Mahyco",price:160,mrp:220,rating:4.4},{id:5,name:"Okra / Bhindi Hybrid Seeds",image:"data:image/webp;base64,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",brand:"Syngenta",price:120,mrp:180,rating:4.2},{id:6,name:"Tomato Hybrid Seeds",image:"data:image/jpeg;base64,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",brand:"Kaveri Seeds",price:180,mrp:240,rating:4.5},{id:7,name:"Hot Green Chilli Seeds",image:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",brand:"East West Seeds",price:145,mrp:195,rating:4.4},{id:8,name:"Round Brinjal Hybrid Seeds",image:"https://th.bing.com/th/id/OIP.Y-g_X54Kg34x7GkIgTGDxgHaHY?w=179&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",brand:"Nunhems",price:130,mrp:175,rating:4},{id:9,name:"Cucumber Long Hybrid Seeds",image:"https://th.bing.com/th/id/OIP.Y-g_X54Kg34x7GkIgTGDxgHaHY?w=179&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",brand:"Mahyco",price:165,mrp:230,rating:4.3},{id:10,name:"High Yield Okra Seeds",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",brand:"Syngenta",price:125,mrp:185,rating:4.2},{id:11,name:"Fresh Cucumber Hybrid Seeds",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",brand:"Mahyco",price:158,mrp:215,rating:4.4},{id:12,name:"Premium Okra Seeds Pack",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",brand:"Syngenta",price:118,mrp:170,rating:4.1}],ax=({item:r})=>n.jsxs(oe,{to:`/seeds/${r.id}`,className:"seed-card",children:[n.jsx("div",{className:"seed-img-box",children:n.jsx("img",{src:r.image,alt:r.name})}),n.jsx("h3",{className:"seed-name",children:r.name}),n.jsx("p",{className:"seed-brand",children:r.brand}),n.jsxs("div",{className:"seed-price-row",children:[n.jsxs("span",{className:"seed-price",children:["₹",r.price]}),n.jsxs("span",{className:"seed-mrp",children:["₹",r.mrp]})]}),n.jsx("style",{children:`
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
      `})]}),Rv=()=>{const[r,s]=w.useState(""),[l,o]=w.useState("All"),[u,f]=w.useState("default"),[p,g]=w.useState(1),x=12,h=["All",...new Set(Vn.map(j=>j.brand))];let b=Vn.filter(j=>j.name.toLowerCase().includes(r.toLowerCase()));l!=="All"&&(b=b.filter(j=>j.brand===l)),u==="low"&&b.sort((j,O)=>j.price-O.price),u==="high"&&b.sort((j,O)=>O.price-j.price),u==="rating"&&b.sort((j,O)=>O.rating-j.rating);const v=Math.ceil(b.length/x),E=(p-1)*x,S=b.slice(E,E+x);return n.jsxs("div",{className:"seed-page",children:[n.jsx("h2",{className:"seed-title",children:"Vegetable Seeds"}),n.jsxs("div",{className:"seed-filters",children:[n.jsx("input",{type:"text",placeholder:"Search Seeds...",value:r,onChange:j=>s(j.target.value)}),n.jsx("select",{value:l,onChange:j=>o(j.target.value),children:h.map((j,O)=>n.jsx("option",{value:j,children:j},O))}),n.jsxs("select",{value:u,onChange:j=>f(j.target.value),children:[n.jsx("option",{value:"default",children:"Sort By"}),n.jsx("option",{value:"low",children:"Price: Low to High"}),n.jsx("option",{value:"high",children:"Price: High to Low"}),n.jsx("option",{value:"rating",children:"Rating"})]})]}),n.jsx("div",{className:"seed-grid",children:S.map(j=>n.jsx(ax,{item:j},j.id))}),n.jsxs("div",{className:"seed-pagination",children:[n.jsx("button",{disabled:p===1,onClick:()=>g(p-1),children:"⟵ Prev"}),n.jsxs("span",{children:["Page ",p," of ",v]}),n.jsx("button",{disabled:p===v,onClick:()=>g(p+1),children:"Next ⟶"})]}),n.jsx("style",{children:`
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
      `})]})},nx=()=>{const r=Vn.slice(0,6);return n.jsxs("div",{className:"seed-preview-wrapper",children:[n.jsxs("div",{className:"seed-header-row",children:[n.jsx("h2",{className:"seed-preview-title",children:"Vegetable Seeds"}),n.jsx(oe,{to:"/category/vegetable-seeds",className:"seed-more-btn",children:"View More →"})]}),n.jsx("div",{className:"seed-scroll-row",children:r.map(s=>n.jsx("div",{className:"scroll-item",children:n.jsx(ax,{item:s})},s.id))}),n.jsx("style",{children:`
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
      `})]})},Gn=[{id:1,name:"Urea Nitrogen Fertilizer",image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQAeksVMkoWSBA8t3J0ndEEPLCqeYGZf1vEfwdpgmNEn2evLpabELU2w_v5YUb-DyYv5tmWc5S4P1Zgs13N_kuO1ezmbY6STFefd2B6RiGi&usqp=CAc",brand:"IFFCO",price:220,mrp:260,rating:4.4},{id:2,name:"DAP 18-46-0 Fertilizer",image:"data:image/jpeg;base64,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",brand:"Coromandel",price:1350,mrp:1500,rating:4.6},{id:3,name:"NPK 19-19-19 Water Soluble",image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_Ce0IZ6xOrvzQijF4oiB8xcLr0_a_6NfSyqyXpA8_9SBdsrrcNiMFdiisY9hbpTX02Wy8Eo9iHBq8cQ8lOhqBRS2e7R554chA-XqzdLDC-ntioc2hE7ndYtTWVn8vScx4nORk8Q&usqp=CAc",brand:"Mahadhan",price:780,mrp:900,rating:4.3},{id:4,name:"Potash Muriate of Potash",image:"data:image/jpeg;base64,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",brand:"Zuari",price:550,mrp:620,rating:4.2},{id:5,name:"Zinc Sulphate 21%",image:"https://pratikindia.com/wp-content/uploads/2023/12/Zinc-Sulphate-21.png",brand:"Nova",price:260,mrp:320,rating:4.1},{id:6,name:"Zinc Sulphate 21%",image:"https://pratikindia.com/wp-content/uploads/2023/12/Zinc-Sulphate-21.png",brand:"Nova",price:250,mrp:320,rating:4.1},{id:7,name:"Zinc Sulphate 21%",image:"https://pratikindia.com/wp-content/uploads/2023/12/Zinc-Sulphate-21.png",brand:"Nova",price:230,mrp:320,rating:4.1}],ix=({item:r})=>n.jsxs(oe,{to:`/fertilizers/${r.id}`,className:"fert-card",children:[n.jsx("div",{className:"fert-img-box",children:n.jsx("img",{src:r.image||"/mnt/data/c61b8eae-dfc2-4cca-a1e0-c301228d07ef.png",alt:r.name,loading:"lazy"})}),n.jsx("h3",{className:"fert-name",children:r.name}),n.jsx("p",{className:"fert-brand",children:r.brand}),n.jsxs("div",{className:"fert-price-row",children:[n.jsxs("span",{className:"fert-price",children:["₹",r.price]}),n.jsxs("span",{className:"fert-mrp",children:["₹",r.mrp]})]}),n.jsx("style",{children:`
        .fert-card {
          background: #fff;
          border-radius: 12px;
          padding: 14px;
          text-align: center;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          border: 1px solid #e6e6e6;
          transition: .25s;
          display: block;
          text-decoration: none;
          color: #222;
        }
        .fert-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }

        .fert-img-box {
          height: 160px;
          border-radius: 10px;
          overflow: hidden;
          background: #fafafa;
          display:flex;
          justify-content:center;
          align-items:center;
        }
        .fert-img-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: .3s;
        }
        .fert-card:hover img {
          transform: scale(1.06);
        }

        .fert-name {
          margin: 12px 0 4px;
          font-size: 15px;
          font-weight: 600;
          color: #222;
          height: 38px; /* consistent height */
          overflow: hidden;
        }
        .fert-brand {
          font-size: 13px;
          color: #777;
          margin-bottom: 8px;
        }

        .fert-price-row {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .fert-price {
          font-weight: 700;
          color: #2a7a0e;
          font-size: 16px;
        }
        .fert-mrp {
          text-decoration: line-through;
          font-size: 13px;
          color: #888;
          margin-top: 2px;
        }

        /* Responsive */
        @media (max-width: 600px) {
          .fert-img-box { height: 140px; }
          .fert-name { font-size: 14px; }
        }
      `})]}),rx=()=>{const r=Gn.slice(0,12);return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"fert-preview-wrapper",children:[n.jsxs("div",{className:"fert-header-row",children:[n.jsx("h2",{className:"fert-preview-title",children:"Fertilizers"}),n.jsx(oe,{to:"/category/fertilizers",className:"fert-more-btn",children:"View More →"})]}),n.jsx("div",{className:"fert-scroll-row",children:r.map(s=>n.jsx("div",{className:"scroll-item",children:n.jsx(ix,{item:s})},s.id))}),n.jsx("style",{children:`
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
      `})]})})},Hi=[{id:1,name:"Power Sprayer 18L (Portable)",image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRAKvOsKUweVhPlby71fTxm1lUToHw23WKi6VzD_X80KFFBxTLGtDQBb36g_obFxXgizT8cdIxf-3FdaHLLLn8OB1BeM2o3wYQ-njCv8tL4GxU-P3PSYl_gVEWs-ZcyXjkqqzAr388&usqp=CAc",brand:"Kisan Kraft",price:6500,mrp:7800,rating:4.4},{id:2,name:"Knapsack Manual Sprayer 16L",image:"data:image/webp;base64,UklGRt4WAABXRUJQVlA4INIWAABQYQCdASr5APkAPj0ejESiIaER6RVMIAPEsbdwuYODFf4iMCOR/2P5Ve2Zyj4ueuIlPIvks8u/7v7gPnR/mv+L+OXzS/uv+R/zPuAfqh/qeqP+4vqO/ln90/8H9691//bftP7ov2J9gX+d/2DrZv7J/uPYE/ln+Y///rqfth8NP9q/3v7T+0h/29aIZT/mfCvx4eqfbv2DP4nwp9S/9H0N+mz4r8w/jD/Qfbl6M8BH2F/l97vAP9Zf9l4d395/dvU76/f8z8qvoA/jX83/0Xrj4Fn2D/hf8D3Bf5Z/Uv9L/c/yD+Rj/f/1f5Ve9T6d/6f3E/Yj/OP7N/zf717aHsY/df2Wf2A//5KNdJML+M8k9koq411TlBV7Z2DrvZ1lGLAprqnKCmW2AN3Iz2+LJoq4yo3AgQM640gtrpcMMxTpVsaux0irjWrfwHd26oCVPAbI4qYMQ8W7CzbnjigfI5jJVk7xqcoKviWdEhicYJyfr1KV8RR2f/Gux+SRrhjSRL0zt7xWD88Y/QX2ps/Vhmti1y7cd9T5ng5lzmvdG1Nz680gCtB0qORFSW9YYyrcTi4vG9NE0MnImus1J5gBY5yUgVHIBiHxvCGy8gJKuEyxBTC0Vd2MzbbswBh8Qk05QUMqDp4N+7dZauHuPuDmt9ukp9eCTn4UPVoPaRS7kEwX3gjBUFkt8BflT2/ze1yytcdrfmZVHjQ2ae4FCHT1HoxSgkut6QpemdskiT8lphxetJeVGXz1/EGyWHRDHyGdnyRDl003YF31OBH9j2+JXEQgUjSWwUYFAZZhMUkM+N2iPzwi8an6L79VfDghJqDdDiJdHZ5MiWtpG14ELZtYuk+BP+9FI2+3MaTU0IDW6MP1zUZq3zWD6MuDoJIl44CXmFsNRP0zwSIw7dTWiOcSMrXUdhR9+GbKdmSxzpnuTXGuQimAPsnWl80t8qZXzZ33ANrP/+rmI+gEYqrK9xkHlPwbW8A8SvUkObbW+pzZY4tVNWRL0p0B4wsY0tmZefcXTctoA6MQU02pxRmUieGHN+nFY0yAAP7/qQN7THBdsRdbNzb4kBTCoPiYW/lJX6//1F5PmANSMS+Mo5FQhPZWjmbl2wuiex4LuhiXdWRIsmU5Sk997wy49jQS2jhAEi9tTMNCO85tD//7ggcqU79Om8+tCjK2fusmN1jGJd6HAUwEHkJUiWUuJSYS0Vh6NLM2cxe3e9hDV2eNqJc2dFqHzME5SpbcbVrO5228NHs4w8kr10L7q8Mp/FscBQr61V5tGoL2jf4iFuAtgrkWP3BRTo8K8Cv0GaQqHC0y1w/cutxMpqOsFFRfWR2J/UQWjuuPwdbbn6cI30HhN9mwk/CgjjpgFthj1jRCYRcNvtjCqFV1/Lu6Fc+8MVvvutfktU4rZrzo7FS/AQRn/eTuV83oVeD+9hUmuiuj43dxE+PN3dofzoN/+ENDqWmg7mr1yUBOpPij+jeIWJLv8P8BHMDXG1gBQvyDygJrdgUQCF19JY5zykKMXEHKc4htK/HE6uAlERlk+zs+ZyaAw2MU0egb0RKp+WzHSTbS0bAQAaQAf1o9NOaJFLlgV3/jz/4fudxQ2j/PgQjqRY98F7JT0IiTGVi+UWhe5ptzRnVuSXCoQ4EG436hGD4aXfkkVvoQGZek61mSE0HWL7gc5LCHZYw01QZFJdKnf46ty+nX6vDtgkpxIcIIGzkmY2AN1Xo9nVKdLbI62KxtvcMW8SXHUIu+IeXVcdikfM4beTvV4yKd+XJ56aDLjws6BzdSS0QmXDNbiXxlypF9k4ulLVoRKH8RwD5eLhAe/0rqaajsoIAr/x+upP9m7fwfpkAKq0XhV0f82lTht9ISc1YdukfNvtDVay5f76NFwz5XtO0MEvP2pvv8Vinns/y7XYB804OMRbXgX+XQHtQXsBe33f8E6zzZUXKAt7BGGEwsh0Xv/sW3j8zZ8U5PDdx3HK/uXMUPXoZLyJFnmnCdmH9VUVn5Sdvkxyft9hhoJMoc9/HqLrHMC5W465RJ5wcJTCC9CIAhPmHIUMGf8/2v0r+ldStXZagHczlP2e/NYkT8XvlKwp5P9dpDZ6JVyiPx9vLkXWzUtxZLGs7DtsczabVvW41YDYLZlXeJIc3Z4o3ZaHn8bxSLlpOs16aTO4Fjv7TE9H90NPLU8r+G7bYFbbUsjM3rFM4KqnjC9idC4BTQkMEGjP9OUWsw37tmj44DadOol6xA9o12FA1GdIJAAOipmDQj2oLZS9/Admsz2BKANK5RnsoiWdQE0bU4hPo1UxdCjnCpyKARoLqLGaZE2jhv/ipaqBh+7/mv2xjYoNjhJNylQnnVNLDTI2ROuXMeb1McHCh3mB1Jirp/VVFxYIS047fPxKgsgvdbIdL9Vm1mCwHIzrniQhjIFU4zA+4gshSJz8US8tXSElK2MmLvUedZPjGINT0CZiT5XRdPezJJ+RIBJoww+oI7Lh5O+pnW3omK6LmQEKSwrSJiPrwITpJN864qN3YEpNRnjE4lM/DnPNx/htydX6XG/+X8TvQDfkt+m5nwszWa3tnl2iy3Z46Tye7tBYOFC/Z87Uw2I+L1g+6b7H3aaFG/84K2ZZBjnShC2VzTTpT/QGjYwIUfoOGQ+1ihMc1ZWAKflNJwGdMU8sfuzttsTHP08V4xVS9EpB/Uc8QQMb5+fDcPzoeRTE+8Bdeg/qbFH26aeYLOOPQL/MGgque6KBMRWfhX/6w3X38L7+CVjjOG90ahMHdvC8xGBgPFx4NkHbYsLNsi+9fviOE1RRq6g1aLXBdNoQL0gUjaEehKRx14zBYdmm7P2FVlz5BEZJksjIbq7Zz/0HI6gPhQaxUAZ1Bb6V1l/8vUXVZR5nuwWQxy2AsXiHj+DKIn9YJb96t/0rlfrF0PqKTqU/S5BSmRSJYhRHsEO4DXz4DZlqT0SIdzSHmkzISXFib+RnphVHuM88xA+SCi0oB5S8RA/wG/slyZfwgsPyH0yJ1TIk1RdwLmW2zKz32C6jm6/XSHOwrtzYPx7w3nmZ+Y1xssGQ8pNbyCKChgcRpePNB2jEfKquHgEjXOSV2VMCvfjXBtrR/5Q6EOoBR9Jwv4n+t2gBVFXA0A8QGRvaqQfiJ7YZ5oNahi6Cn7vqHIHkVPVvcjTezd4f3glcbhudZEnneQxuP3+1QYgPmZ+1KJLVJ3uP812LcSil8xkXcOBn6nuDmVqO5UDZhj3w14MPLujc9ZbfmMgDBuyA+Y0q2DExEK9IUc2nKz0SoDDqyuQ4F4s00CfJQ0X69ZTQOphwPUOhUlNK0sG5xdjIKdgB1SMhgsv5L0BQgcD0ZV/U41G6X3l48rBpwS/FslC86cgel/cEHngM+i+r1WJRNvZN1y9wB+JIRPZv6y0Xd0IO1d8R6dh/zqHPZrugL/cy0tmQOIrURNd9dFS41MbJYyGs8YtPiE3XkaZ3njzMosnRXNli2KMcu1G6RKHm68o9CQ/9AgJjLLlJhhrgf+AafszjPhmHXkvobndxEkxXv+6qRlLIMVJ7Ev/18K7HBW+Mstxz0xy3pqUmohz5f7jb/4yDldnkQKxrpNs2IfHDwuNnNXCg+uhT+z8M6kNFOY8/ijMoX6qpXZgb0Tt+p+ltz3NDXWBQTqt6Na0U8k9t8YFsCip2BzbyNrGDkOCRp7MJPKmnYOStsoIXOWLk24X/S/46YuxO91Rf8AsEuK6iKlr+CZEFdPtR83Tkxjy4Zkt4BJf5qgcMKIuEHKMDpoQaBHM8YN5P1a2f+w44DLk3MCHvYrmPgxrA2Rlw+4GdgzG1iHAss+/YI/lHVGq8TfSQGcNaqrk9PmwpSmUXJn/kudZyoUAe3C91ENHouvkxM0RcsOJiWH41SnQpIqekA53MtrAmeer2ZTY7XiwZ+OplxpBj1gMAp2/4lbEnCfROWn+8neHTXHwWigvtzzfJmZ4dNNGr4jrM/iZ0qhD7ifJlWCQUNvutz8kg+j9NnSrkDRq3Ak1x6tz8CRKRY2w9UC9Fs6eVs0cTg+QI0LFJpKMSKDWixJtjQpVyvEExdEkUs33I+vNyMAChWSKEIJYPoEGtoGdAFBJnqZjAFmMwXrjMdCouN6NoFCD7uMjaJQATEkzZED2ayAOUAuXA6asdMnkMZsSpsG+IaAF1CcjL/p8bHSZLbZI5MiGvJtdDdK/xyCQRnf9hYrG+sfRm7FlcgMe9AOOPFNayJ2rwypGH1n15JffZQ0q0wY+AXvtus3OkukyWakowXmRhMXWRFMFnRvboOAHrP6N+d19EpQSyfWjqPBUf1G1d7xBLHr/ZF2dGTyC9K3YoKMinlBRw2oKf+8YxI2jkAAqj0jEo5lnajXylNjMktw6ZwALBl+9iPsxa4xhpuy/zttyInqU49hpwj0Sp3p/4EjWidyKW/ZNYs1Fq0f4xBYtr6KfPKd2i+oYl1x2ZepQeoia/wKJFnTfWt2ra9qRVxO3HBxLu6bVRHn+fu7ocKxP4I1KFF+ozj2iyxeTO0kaeyuiZgMy/sfug+S5YARsyI2o/eFelHqbZ+L4Ah7RIya2WpZVBa/vNi7k4LcYLVRZwFwIu1i2iNglE0Z0qLWnIAUeKvsiwchG1kLtTjkkj/OoqkV2T7ZxaBmwq0W/RLm+bTGfLRtTuHnUVlb42a5rX1es1+t54zdDOrjvdOdgxWX9Zl+RZTvhbg6Unr9+jfzD95tvwTymNQKhV5uRl2wg8xJykp6KEWz4QGOurWDmzMdT/wTfvhmHxCwtl1YuGwU7kO1sHQn6IbS57aemlTddCRnLcWg33s5fhwJFuKfbydLpYzZy1prvEFLz06czxAyFHCohTomegVq2H8C1NxHIf6F+uuaLN84l4s4k1XIttYHeMIniInyUDlUNx067zHXnOs6UFV/bkx+b+huXe4C1z3E77ev7y18H9VU31gKrGwBtlDzc6cghMPUGpARo9FFLB/libF5HzRfuh2doBGCzO6fkrI7njHcluEHPMluu7bGghl2Eqwaf3r2GdUYaC4HK4v+/PWSFtbWJsW+ouuasrFvLgALscZ7rGx0jsGhocF/ekHeIjPyqyz9ZR8TdWCc+wRKn3J6mC1L5uTWyvWHu1pg28YWBNjLoxbLgZetLY+SHt0WzCFDEPMO0sDseYJZuCHMAndkHIywfAbIMY8UY0s9FI6aWTgS4JlbNtQelr/OszfcfxdDAACRuQdjKZFxI7wQkjdiJ4J2MOpgog5QNUDBgCSnRKFp5cLAlilyqllspDVEO84v71/ynU9P3DlJeGrT/jZvDf/7e/CzYvLKuh+ePIYUVfci7HlQMOr4emf/sav2cVPonKkqFZdPISLBqdUUk/eEmN8xtWCcUsVwyDc28gwVvTy66nk8mioB6Xxv9YmSB8/96fCOuq/tMPJn0kcaMryFiJy76jzOdvm1ajZ8OI8AmLpYz6afmX7xfgkaK6GjJIs0G3GJzLEH4+XM4B7Uq81aLfYctZToO0HYjKuRM53W3tLEqNea9pIefD1TiviPlwtK+Pch01Tn6z+ffBZyfSVniEMQpjqQceO2hFcQN08nuggZBMNCrmA80a3NQHfOmDFXsKBslqpEIz9jeyzRPCj6ap8OUDQLK2OTB9yYgPx/NsYtJfO83FLzH5zoAb+ZXOB9PMyo7qEiP9uYugp95MWl8HxeU0I9MWOyQ3X+TB/40aOu0IJLJSFZ3PrgJ2AkXKyXdVTYbFGDzfXR1v5tDpNRmwu1VR7AL+2Cs2/FmvVvQDFtNEEcjlCmFbfjPQ/beUYjakKbXVCkAUJnpkItBj65ZPHhavvqjtVycH7b5RLAfiXn7t16X9C4liXczr+Ekn9v9VYfeQZPGGflfj4JAtM3PSgknQpyy9gfaEjXzbeD+fDiKD/qSwC7zNlppalL8u5/DCY8lWg2Oa2DMCfVEfdRcEmzBJibzjnukzqlz5PkenKg3wUjfMkS+Y7gL8ONc5FmC3Yu53MOmX/UvARt23dkKUB12CdaXdWTLOrGVzv1DaYaURscVBU0M0Vj9cPCkdihwAAJe4VqK0UmMURvrSCq0W3HSzHf8IzVlrs43nlj1HVBKEoneSwVULofulX86p3QrXOIXVzgjPsPwfd6ah5DtKGhLgEpIQLoED6ZjdMf3NGQTfBedFFMEjtJa2DHHZ4qKFJAZ/uYJGPZdTNsIQVgEJpK4lFUiFOzkZ36WCfOfMCRseZ8NCqOLfokjHg0SJr8ziD2zuIYJWvkID1VYgDClRJZ42ivam/FUyAhUKKXYrKufUpPv3vqkRL1EqwUlDstce9xoVS9B/iu7ORd8+uB89/CWnTHCDbfrwFmm35eyVS4VtsHSvBC7BFcMPhvc/ZzAi9Q4Vah7Y5IdN884v5+swd9lU5rJHJM4wTFcqjsR8QEHB2vZni/TcCaflZDEjBVKs/LGDhoLPml3NUyLKJmbr7KaJIgM99OZulmM7SHyO0xcoy+Wm0G/qrimgTIAVEVGS0Qc6k7s/3T9D9m+dAIRVDLUv5UAH5HhyCMxqgEfR4n/RMGrwY78ZPy+Z+YnIC1MjDGgb6XYDsh7biOcf5LV33kzEvFoqtvCHCui/wZZPIjHbTUuJRDrcUd0QegHWKwJWjnV59UaW/MSuvU7347YfvOCGhp7hly4dIei1Iml+buM++0m+EaLbFszNm/iiJe2mfrhWWKMROpJPdWg/ywMUcLxsoZ0X2FCIrXBJlErWmZOCXLspo3pPBP/vnTPE2Jgsdz1VG07FaHJEHQJZYyJlgJUxJVkcZrZVOg9fsR2AIPz3RDPfTSdtEozgteQRBZvEiOgtnu4XDW772uY+vUdgApMOEb5N3PpDaoq4d6epJebG7MJQxtvUTYSAMxQFLMPQuGy/6k7oOEDCH/GMLWvJ28TQodgM9YSS6r/DGLpbJ4w7lpTHFfFe53OWu34KppV/2U1/8maAyP2mMvD2natdCO7pVTVNE6sc0hKDP1IuU2ytGvU0t8yt99nt9PfXaTm6NuDN6ySWoOWv3/fltSy/QElUWzqTK4MG1wkgiKWEDJ2HXqXkq6V2WqHtB6aSRjWIP/LzKGHSP+k2ZJCqZKyeh8DD9aV3kasEf/B6wznmFSi/ydT5gwHPpswwgz6nL+TuxZWo+4uPr5p64Nv3/gjNZQZ7RJx2tiTh8Y3noRlzi0u3Gc0w+nkHDklr5HjSbe9uo6NLUNvSo0UhdvNjdFgmT1yNdkhQ2lPOukL8LaolbNvfLbLvIzFZwf+Ll2JfQBs6+BxOy4d/2ztFLo8NZaCtsNCUf/uitjvumMVTBPnBlsXIOSiuaDfGHHgtShTKaKw2b2WJkxV+f+NhhETaHq9qB0gEAa2D4II872BSVWFx6RnDTF2s8DJhnXLNFzCTHNCwfuwpUTomzjCI4F8EsSbro8oCUQgfotcuUIwAp8X20AZ29ZCUIRr5mICR550Qg8ZlkSBEncn2S+A3chcDb9kODG6q/TCpCM6vHY+S3mWrkGbRiJY9SSefn04277qDWiM03Hcv3N1oL0Xxa0Cq9iafRlVOjVmveMQcHBn7IE3DwMhzDWa60a1/yOFmV173xh3aZ8mkf/RfFIPXlKh8kAAhowbmvz/vrjLew6Xq2I/ynGv0zENqY4bjKIBQCpofA0/RnzTStcECDV52leNUSwUYmB8/f8Tc/J+nHun6v/qKr//lEa28kpV1YKKNzClNIQPoI/gkTw5wi27RKpwSulmUsE63DHdjwvUIrwKYVXug2Z5VjclpT73gMhTpr0Ooc4QzifV9FtkOmAtEizL0C7n8O0ujwkAAAA",brand:"Neptune",price:1450,mrp:1800,rating:4.3},{id:3,name:"Mini Power Tiller / Cultivator",image:"data:image/jpeg;base64,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",brand:"AgriPro",price:18500,mrp:21500,rating:4.5},{id:4,name:"Brush Cutter 52cc Heavy Duty",image:"/assets/machinery/brush-cutter.jpg",brand:"Balwaan",price:7200,mrp:8900,rating:4.2},{id:5,name:"Water Pump 5HP Diesel",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTXPjEg7g0BDMdu5jzOY8E6rNA_Ktd-vYaXVXWj-8Jq6z1s9DY9lRVID5Awua6D7O_sVFNoRi-QTJAHMwqNb96fcYzjy8X_eID6i1pzXAjZ2JhMUAD6AT9gZX00jR35CTCodWHVjg&usqp=CAc",brand:"FieldPro",price:14800,mrp:17e3,rating:4.1},{id:6,name:"Mini Tractor 12HP Compact",image:"data:image/jpeg;base64,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",brand:"VST Shakti",price:245e3,mrp:27e4,rating:4.7}],sx=({item:r})=>n.jsxs(oe,{to:`/machinery/${r.id}`,className:"mach-card",children:[n.jsx("div",{className:"mach-img-box",children:n.jsx("img",{src:r.image,alt:r.name})}),n.jsx("h3",{className:"mach-name",children:r.name}),n.jsx("p",{className:"mach-brand",children:r.brand}),n.jsxs("div",{className:"mach-price-row",children:[n.jsxs("span",{className:"mach-price",children:["₹",r.price]}),n.jsxs("span",{className:"mach-mrp",children:["₹",r.mrp]})]}),n.jsx("style",{children:`
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
      `})]}),lx=()=>{const r=Hi.slice(0,12);return n.jsxs("div",{className:"mach-preview-wrapper",children:[n.jsxs("div",{className:"mach-header-row",children:[n.jsx("h2",{className:"mach-preview-title",children:"Farm Machinery"}),n.jsx(oe,{to:"/category/farm-machinery",className:"mach-more-btn",children:"View More →"})]}),n.jsx("div",{className:"mach-scroll-row",children:r.map(s=>n.jsx("div",{className:"scroll-item",children:n.jsx(sx,{item:s})},s.id))}),n.jsx("style",{children:`
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
      `})]})},uu=(r,s)=>r.map(l=>({...l,category:s,discountPercent:Math.round((l.mrp-l.price)/l.mrp*100)})),ox=[...uu(Vn,"seeds"),...uu(Gn,"fertilizers"),...uu(Hi,"machinery")],Mv=(r=6)=>ox.filter(s=>s.discountPercent>=10).sort((s,l)=>l.discountPercent-s.discountPercent).slice(0,r),Bv=()=>ox.filter(r=>r.discountPercent>=10),cx=({item:r})=>{const s={seeds:`/seeds/${r.id}`,fertilizers:`/fertilizers/${r.id}`,machinery:`/machinery/${r.id}`}[r.category];return n.jsxs(oe,{to:s,className:"offer-card",children:[n.jsxs("div",{className:"offer-img-box",children:[n.jsx("img",{src:r.image,alt:r.name}),n.jsxs("span",{className:"offer-badge",children:["-",r.discountPercent,"%"]})]}),n.jsx("h3",{className:"offer-name",children:r.name}),n.jsx("p",{className:"offer-brand",children:r.brand}),n.jsxs("div",{className:"offer-price-box",children:[n.jsxs("span",{className:"offer-price",children:["₹",r.price]}),n.jsxs("span",{className:"offer-mrp",children:["₹",r.mrp]})]}),n.jsx("style",{children:`
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
      `})]})},ux=()=>{const r=Mv(12);return n.jsxs("div",{className:"offers-preview-wrap",children:[n.jsxs("div",{className:"offers-head-row",children:[n.jsx("h2",{className:"offers-title",children:"Today's Offers"}),n.jsx(oe,{to:"/category/offers-today",className:"offers-more-btn",children:"View More →"})]}),n.jsx("div",{className:"offers-scroll",children:r.map(s=>n.jsx("div",{className:"scroll-item",children:n.jsx(cx,{item:s})},s.id))}),n.jsx("style",{children:`
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
      `})]})},du=(r,s)=>r.map(l=>({...l,category:s,rating:l.rating||4}));let El=[...du(Vn,"seeds"),...du(Gn,"fertilizers"),...du(Hi,"machinery")];El=El.sort((r,s)=>s.rating-r.rating);const Dv=(r=6)=>El.slice(0,r),Lv=()=>El,dx=({item:r})=>{const s={seeds:`/seeds/${r.id}`,fertilizers:`/fertilizers/${r.id}`,machinery:`/machinery/${r.id}`}[r.category];return n.jsxs(oe,{to:s,className:"bs-card",children:[n.jsxs("div",{className:"bs-img-box",children:[n.jsx("img",{src:r.image,alt:r.name}),n.jsxs("span",{className:"bs-badge",children:["⭐ ",r.rating]})]}),n.jsx("h3",{className:"bs-name",children:r.name}),n.jsx("p",{className:"bs-brand",children:r.brand}),n.jsxs("div",{className:"bs-price-row",children:[n.jsxs("span",{className:"bs-price",children:["₹",r.price]}),n.jsxs("span",{className:"bs-mrp",children:["₹",r.mrp]})]}),n.jsx("style",{children:`
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
      `})]})},fx=()=>{const r=Dv(12);return n.jsxs("div",{className:"bs-preview-wrap",children:[n.jsxs("div",{className:"bs-head-row",children:[n.jsx("h2",{className:"bs-title",children:"Best Selling"}),n.jsx(oe,{to:"/best-selling",className:"bs-more-btn",children:"View More →"})]}),n.jsx("div",{className:"bs-scroll",children:r.map(s=>n.jsx("div",{className:"scroll-item",children:n.jsx(dx,{item:s})},s.id))}),n.jsx("style",{children:`
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
      `})]})},Uv=({item:r})=>n.jsxs(oe,{to:r.to,className:"ex-card",children:[n.jsx("img",{src:r.image,alt:"exclusive"}),n.jsx("style",{children:`
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
      `})]}),Hv=[{id:1,image:"https://media.bighaat.com//wsfbanners/0307c441-0f8b-4c9a-b195-b13a7883f58d.webp?w=750&q=80",to:"/products/tiger-power"},{id:2,image:"https://media.bighaat.com//wsfbanners/9b54f6e3-f14f-41f1-842e-0235ea29ffa9.webp?w=750&q=80",to:"/products/amino-maxx"},{id:3,image:"https://media.bighaat.com//wsfbanners/270395f8-cf32-4231-a8f7-b42be512bd18.webp?w=750&q=80",to:"/products/insecticides-offers"},{id:4,image:"https://media.bighaat.com//wsfbanners/81e11abf-dd4a-40cc-bb27-6104ec4a5350.webp?w=750&q=80",to:"/products/farm-implements"}],px=()=>n.jsxs("div",{className:"exclusive-wrapper",children:[n.jsx("h2",{className:"exclusive-title",children:"Exclusive"}),n.jsx("div",{className:"exclusive-grid",children:Hv.map(r=>n.jsx(Uv,{item:r},r.id))}),n.jsx("style",{children:`
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
      `})]}),qv=()=>n.jsxs("div",{className:"trust-banner",children:[n.jsxs("div",{className:"trust-item",children:[n.jsx("span",{className:"trust-icon",children:"🏷️"}),n.jsxs("p",{className:"trust-text",children:["100% Branded ",n.jsx("br",{})," Products"]})]}),n.jsxs("div",{className:"trust-item",children:[n.jsx("svg",{className:"trust-icon",width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"#2a7a0e",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("path",{d:"M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"})}),n.jsxs("p",{className:"trust-text",children:["100% Original ",n.jsx("br",{})," Products"]})]}),n.jsxs("div",{className:"trust-item",children:[n.jsx("span",{className:"trust-icon",children:"🚚"}),n.jsx("p",{className:"trust-text",children:"Free Delivery"})]}),n.jsx("style",{children:`
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
      `})]}),Vv=()=>n.jsxs("div",{className:"trust2-wrapper",children:[n.jsxs("div",{className:"trust2-item",children:[n.jsxs("svg",{className:"trust2-icon",viewBox:"0 0 24 24",fill:"none",stroke:"#2a7a0e",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"}),n.jsx("circle",{cx:"12",cy:"12",r:"2.2"})]}),n.jsxs("p",{className:"trust2-text",children:["Safe & Secure ",n.jsx("br",{})," Payment"]})]}),n.jsxs("div",{className:"trust2-item",children:[n.jsxs("svg",{className:"trust2-icon",viewBox:"0 0 24 24",fill:"none",stroke:"#2a7a0e",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("circle",{cx:"12",cy:"8",r:"4"}),n.jsx("path",{d:"M6 21c1.5-3 4.5-5 6-5s4.5 2 6 5"}),n.jsx("path",{d:"M16 3.5l2.5 2"})]}),n.jsx("p",{className:"trust2-text",children:"Expert Advice"})]}),n.jsxs("div",{className:"trust2-item",children:[n.jsxs("svg",{className:"trust2-icon",viewBox:"0 0 24 24",fill:"none",stroke:"#2a7a0e",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M8 12h8"}),n.jsx("path",{d:"M12 8v8"}),n.jsx("circle",{cx:"12",cy:"12",r:"9"})]}),n.jsxs("p",{className:"trust2-text",children:["Best Price ",n.jsx("br",{})," Assured"]})]}),n.jsx("style",{children:`
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
      `})]});var fu={exports:{}},Hm;function Gv(){return Hm||(Hm=1,(()=>{var r={296:(u,f,p)=>{var g=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,E=typeof p.g=="object"&&p.g&&p.g.Object===Object&&p.g,S=typeof self=="object"&&self&&self.Object===Object&&self,j=E||S||Function("return this")(),O=Object.prototype.toString,z=Math.max,H=Math.min,R=function(){return j.Date.now()};function V(W){var le=typeof W;return!!W&&(le=="object"||le=="function")}function re(W){if(typeof W=="number")return W;if((function(ce){return typeof ce=="symbol"||(function(ie){return!!ie&&typeof ie=="object"})(ce)&&O.call(ce)=="[object Symbol]"})(W))return NaN;if(V(W)){var le=typeof W.valueOf=="function"?W.valueOf():W;W=V(le)?le+"":le}if(typeof W!="string")return W===0?W:+W;W=W.replace(g,"");var te=h.test(W);return te||b.test(W)?v(W.slice(2),te?2:8):x.test(W)?NaN:+W}u.exports=function(W,le,te){var ce,ie,pe,_,X,ee,ge=0,Me=!1,T=!1,J=!0;if(typeof W!="function")throw new TypeError("Expected a function");function ue(I){var se=ce,ye=ie;return ce=ie=void 0,ge=I,_=W.apply(ye,se)}function K(I){var se=I-ee;return ee===void 0||se>=le||se<0||T&&I-ge>=pe}function fe(){var I=R();if(K(I))return A(I);X=setTimeout(fe,(function(se){var ye=le-(se-ee);return T?H(ye,pe-(se-ge)):ye})(I))}function A(I){return X=void 0,J&&ce?ue(I):(ce=ie=void 0,_)}function U(){var I=R(),se=K(I);if(ce=arguments,ie=this,ee=I,se){if(X===void 0)return(function(ye){return ge=ye,X=setTimeout(fe,le),Me?ue(ye):_})(ee);if(T)return X=setTimeout(fe,le),ue(ee)}return X===void 0&&(X=setTimeout(fe,le)),_}return le=re(le)||0,V(te)&&(Me=!!te.leading,pe=(T="maxWait"in te)?z(re(te.maxWait)||0,le):pe,J="trailing"in te?!!te.trailing:J),U.cancel=function(){X!==void 0&&clearTimeout(X),ge=0,ce=ee=ie=X=void 0},U.flush=function(){return X===void 0?_:A(R())},U}},96:(u,f,p)=>{var g="Expected a function",x=NaN,h="[object Symbol]",b=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,S=/^0o[0-7]+$/i,j=parseInt,O=typeof p.g=="object"&&p.g&&p.g.Object===Object&&p.g,z=typeof self=="object"&&self&&self.Object===Object&&self,H=O||z||Function("return this")(),R=Object.prototype.toString,V=Math.max,re=Math.min,W=function(){return H.Date.now()};function le(ce){var ie=typeof ce;return!!ce&&(ie=="object"||ie=="function")}function te(ce){if(typeof ce=="number")return ce;if((function(_){return typeof _=="symbol"||(function(X){return!!X&&typeof X=="object"})(_)&&R.call(_)==h})(ce))return x;if(le(ce)){var ie=typeof ce.valueOf=="function"?ce.valueOf():ce;ce=le(ie)?ie+"":ie}if(typeof ce!="string")return ce===0?ce:+ce;ce=ce.replace(b,"");var pe=E.test(ce);return pe||S.test(ce)?j(ce.slice(2),pe?2:8):v.test(ce)?x:+ce}u.exports=function(ce,ie,pe){var _=!0,X=!0;if(typeof ce!="function")throw new TypeError(g);return le(pe)&&(_="leading"in pe?!!pe.leading:_,X="trailing"in pe?!!pe.trailing:X),(function(ee,ge,Me){var T,J,ue,K,fe,A,U=0,I=!1,se=!1,ye=!0;if(typeof ee!="function")throw new TypeError(g);function we(lt){var Ot=T,At=J;return T=J=void 0,U=lt,K=ee.apply(At,Ot)}function He(lt){var Ot=lt-A;return A===void 0||Ot>=ge||Ot<0||se&&lt-U>=ue}function nt(){var lt=W();if(He(lt))return Je(lt);fe=setTimeout(nt,(function(Ot){var At=ge-(Ot-A);return se?re(At,ue-(Ot-U)):At})(lt))}function Je(lt){return fe=void 0,ye&&T?we(lt):(T=J=void 0,K)}function Bt(){var lt=W(),Ot=He(lt);if(T=arguments,J=this,A=lt,Ot){if(fe===void 0)return(function(At){return U=At,fe=setTimeout(nt,ge),I?we(At):K})(A);if(se)return fe=setTimeout(nt,ge),we(A)}return fe===void 0&&(fe=setTimeout(nt,ge)),K}return ge=te(ge)||0,le(Me)&&(I=!!Me.leading,ue=(se="maxWait"in Me)?V(te(Me.maxWait)||0,ge):ue,ye="trailing"in Me?!!Me.trailing:ye),Bt.cancel=function(){fe!==void 0&&clearTimeout(fe),U=0,T=A=J=fe=void 0},Bt.flush=function(){return fe===void 0?K:Je(W())},Bt})(ce,ie,{leading:_,maxWait:ie,trailing:X})}},703:(u,f,p)=>{var g=p(414);function x(){}function h(){}h.resetWarningCache=x,u.exports=function(){function b(S,j,O,z,H,R){if(R!==g){var V=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw V.name="Invariant Violation",V}}function v(){return b}b.isRequired=b;var E={array:b,bigint:b,bool:b,func:b,number:b,object:b,string:b,symbol:b,any:b,arrayOf:v,element:b,elementType:b,instanceOf:v,node:b,objectOf:v,oneOf:v,oneOfType:v,shape:v,exact:v,checkPropTypes:h,resetWarningCache:x};return E.PropTypes=E,E}},697:(u,f,p)=>{u.exports=p(703)()},414:u=>{u.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},s={};function l(u){var f=s[u];if(f!==void 0)return f.exports;var p=s[u]={exports:{}};return r[u](p,p.exports,l),p.exports}l.n=u=>{var f=u&&u.__esModule?()=>u.default:()=>u;return l.d(f,{a:f}),f},l.d=(u,f)=>{for(var p in f)l.o(f,p)&&!l.o(u,p)&&Object.defineProperty(u,p,{enumerable:!0,get:f[p]})},l.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}})(),l.o=(u,f)=>Object.prototype.hasOwnProperty.call(u,f),l.r=u=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})};var o={};(()=>{l.r(o),l.d(o,{LazyLoadComponent:()=>Ot,LazyLoadImage:()=>Rt,trackWindowScroll:()=>K});const u=Zr();var f=l.n(u),p=l(697);function g(){return typeof window<"u"&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function x($){return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},x($)}function h($,D){var ae=Object.keys($);if(Object.getOwnPropertySymbols){var ne=Object.getOwnPropertySymbols($);D&&(ne=ne.filter((function(Oe){return Object.getOwnPropertyDescriptor($,Oe).enumerable}))),ae.push.apply(ae,ne)}return ae}function b($,D,ae){return(D=E(D))in $?Object.defineProperty($,D,{value:ae,enumerable:!0,configurable:!0,writable:!0}):$[D]=ae,$}function v($,D){for(var ae=0;ae<D.length;ae++){var ne=D[ae];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty($,E(ne.key),ne)}}function E($){var D=(function(ae,ne){if(x(ae)!=="object"||ae===null)return ae;var Oe=ae[Symbol.toPrimitive];if(Oe!==void 0){var Te=Oe.call(ae,"string");if(x(Te)!=="object")return Te;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(ae)})($);return x(D)==="symbol"?D:String(D)}function S($,D){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ae,ne){return ae.__proto__=ne,ae},S($,D)}function j($){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(D){return D.__proto__||Object.getPrototypeOf(D)},j($)}var O=function($){$.forEach((function(D){D.isIntersecting&&D.target.onVisible()}))},z={},H=(function($){(function(Q,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");Q.prototype=Object.create(P&&P.prototype,{constructor:{value:Q,writable:!0,configurable:!0}}),Object.defineProperty(Q,"prototype",{writable:!1}),P&&S(Q,P)})(Qe,$);var D,ae,ne,Oe,Te=(ne=Qe,Oe=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var Q,P=j(ne);if(Oe){var he=j(this).constructor;Q=Reflect.construct(P,arguments,he)}else Q=P.apply(this,arguments);return(function(me,de){if(de&&(x(de)==="object"||typeof de=="function"))return de;if(de!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(function(Re){if(Re===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Re})(me)})(this,Q)});function Qe(Q){var P;if((function(me,de){if(!(me instanceof de))throw new TypeError("Cannot call a class as a function")})(this,Qe),(P=Te.call(this,Q)).supportsObserver=!Q.scrollPosition&&Q.useIntersectionObserver&&g(),P.supportsObserver){var he=Q.threshold;P.observer=(function(me){return z[me]=z[me]||new IntersectionObserver(O,{rootMargin:me+"px"}),z[me]})(he)}return P}return D=Qe,ae=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.scrollPosition,P=this.placeholder.getBoundingClientRect(),he=this.placeholder.style,me=parseInt(he.getPropertyValue("margin-left"),10)||0,de=parseInt(he.getPropertyValue("margin-top"),10)||0;return{bottom:Q.y+P.bottom+de,left:Q.x+P.left+me,right:Q.x+P.right+me,top:Q.y+P.top+de}}},{key:"isPlaceholderInViewport",value:function(){if(typeof window>"u"||!this.placeholder)return!1;var Q=this.props,P=Q.scrollPosition,he=Q.threshold,me=this.getPlaceholderBoundingBox(P),de=P.y+window.innerHeight,Re=P.x,_e=P.x+window.innerWidth,$e=P.y;return $e-he<=me.bottom&&de+he>=me.top&&Re-he<=me.right&&_e+he>=me.left}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var Q=this,P=this.props,he=P.className,me=P.height,de=P.placeholder,Re=P.style,_e=P.width;if(de&&typeof de.type!="function")return f().cloneElement(de,{ref:function(Ke){return Q.placeholder=Ke}});var $e=(function(Ke){for(var ot=1;ot<arguments.length;ot++){var et=arguments[ot]!=null?arguments[ot]:{};ot%2?h(Object(et),!0).forEach((function(it){b(Ke,it,et[it])})):Object.getOwnPropertyDescriptors?Object.defineProperties(Ke,Object.getOwnPropertyDescriptors(et)):h(Object(et)).forEach((function(it){Object.defineProperty(Ke,it,Object.getOwnPropertyDescriptor(et,it))}))}return Ke})({display:"inline-block"},Re);return _e!==void 0&&($e.width=_e),me!==void 0&&($e.height=me),f().createElement("span",{className:he,ref:function(Ke){return Q.placeholder=Ke},style:$e},de)}}],ae&&v(D.prototype,ae),Object.defineProperty(D,"prototype",{writable:!1}),Qe})(f().Component);H.propTypes={onVisible:p.PropTypes.func.isRequired,className:p.PropTypes.string,height:p.PropTypes.oneOfType([p.PropTypes.number,p.PropTypes.string]),placeholder:p.PropTypes.element,threshold:p.PropTypes.number,useIntersectionObserver:p.PropTypes.bool,scrollPosition:p.PropTypes.shape({x:p.PropTypes.number.isRequired,y:p.PropTypes.number.isRequired}),width:p.PropTypes.oneOfType([p.PropTypes.number,p.PropTypes.string])},H.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const R=H;var V=l(296),re=l.n(V),W=l(96),le=l.n(W),te=function($){var D=getComputedStyle($,null);return D.getPropertyValue("overflow")+D.getPropertyValue("overflow-y")+D.getPropertyValue("overflow-x")};const ce=function($){if(!($ instanceof HTMLElement))return window;for(var D=$;D&&D instanceof HTMLElement;){if(/(scroll|auto)/.test(te(D)))return D;D=D.parentNode}return window};function ie($){return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},ie($)}var pe=["delayMethod","delayTime"];function _(){return _=Object.assign?Object.assign.bind():function($){for(var D=1;D<arguments.length;D++){var ae=arguments[D];for(var ne in ae)Object.prototype.hasOwnProperty.call(ae,ne)&&($[ne]=ae[ne])}return $},_.apply(this,arguments)}function X($,D){for(var ae=0;ae<D.length;ae++){var ne=D[ae];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty($,(Oe=(function(Te,Qe){if(ie(Te)!=="object"||Te===null)return Te;var Q=Te[Symbol.toPrimitive];if(Q!==void 0){var P=Q.call(Te,"string");if(ie(P)!=="object")return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Te)})(ne.key),ie(Oe)==="symbol"?Oe:String(Oe)),ne)}var Oe}function ee($,D){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ae,ne){return ae.__proto__=ne,ae},ee($,D)}function ge($,D){if(D&&(ie(D)==="object"||typeof D=="function"))return D;if(D!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Me($)}function Me($){if($===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return $}function T($){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(D){return D.__proto__||Object.getPrototypeOf(D)},T($)}var J=function(){return typeof window>"u"?0:window.scrollX||window.pageXOffset},ue=function(){return typeof window>"u"?0:window.scrollY||window.pageYOffset};const K=function($){var D=(function(ae){(function(he,me){if(typeof me!="function"&&me!==null)throw new TypeError("Super expression must either be null or a function");he.prototype=Object.create(me&&me.prototype,{constructor:{value:he,writable:!0,configurable:!0}}),Object.defineProperty(he,"prototype",{writable:!1}),me&&ee(he,me)})(P,ae);var ne,Oe,Te,Qe,Q=(Te=P,Qe=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var he,me=T(Te);if(Qe){var de=T(this).constructor;he=Reflect.construct(me,arguments,de)}else he=me.apply(this,arguments);return ge(this,he)});function P(he){var me;if((function(Re,_e){if(!(Re instanceof _e))throw new TypeError("Cannot call a class as a function")})(this,P),(me=Q.call(this,he)).useIntersectionObserver=he.useIntersectionObserver&&g(),me.useIntersectionObserver)return ge(me);var de=me.onChangeScroll.bind(Me(me));return he.delayMethod==="debounce"?me.delayedScroll=re()(de,he.delayTime):he.delayMethod==="throttle"&&(me.delayedScroll=le()(de,he.delayTime)),me.state={scrollPosition:{x:J(),y:ue()}},me.baseComponentRef=f().createRef(),me}return ne=P,(Oe=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){typeof window>"u"||this.useIntersectionObserver||ce(this.baseComponentRef.current)!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement=ce(this.baseComponentRef.current),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:J(),y:ue()}})}},{key:"render",value:function(){var he=this.props,me=(he.delayMethod,he.delayTime,(function(Re,_e){if(Re==null)return{};var $e,Ke,ot=(function(it,ua){if(it==null)return{};var Kt,Xn,Zi={},In=Object.keys(it);for(Xn=0;Xn<In.length;Xn++)Kt=In[Xn],ua.indexOf(Kt)>=0||(Zi[Kt]=it[Kt]);return Zi})(Re,_e);if(Object.getOwnPropertySymbols){var et=Object.getOwnPropertySymbols(Re);for(Ke=0;Ke<et.length;Ke++)$e=et[Ke],_e.indexOf($e)>=0||Object.prototype.propertyIsEnumerable.call(Re,$e)&&(ot[$e]=Re[$e])}return ot})(he,pe)),de=this.useIntersectionObserver?null:this.state.scrollPosition;return f().createElement($,_({forwardRef:this.baseComponentRef,scrollPosition:de},me))}}])&&X(ne.prototype,Oe),Object.defineProperty(ne,"prototype",{writable:!1}),P})(f().Component);return D.propTypes={delayMethod:p.PropTypes.oneOf(["debounce","throttle"]),delayTime:p.PropTypes.number,useIntersectionObserver:p.PropTypes.bool},D.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},D};function fe($){return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},fe($)}function A($,D){for(var ae=0;ae<D.length;ae++){var ne=D[ae];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty($,(Oe=(function(Te,Qe){if(fe(Te)!=="object"||Te===null)return Te;var Q=Te[Symbol.toPrimitive];if(Q!==void 0){var P=Q.call(Te,"string");if(fe(P)!=="object")return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Te)})(ne.key),fe(Oe)==="symbol"?Oe:String(Oe)),ne)}var Oe}function U($,D){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ae,ne){return ae.__proto__=ne,ae},U($,D)}function I($){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(D){return D.__proto__||Object.getPrototypeOf(D)},I($)}var se=(function($){(function(Q,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");Q.prototype=Object.create(P&&P.prototype,{constructor:{value:Q,writable:!0,configurable:!0}}),Object.defineProperty(Q,"prototype",{writable:!1}),P&&U(Q,P)})(Qe,$);var D,ae,ne,Oe,Te=(ne=Qe,Oe=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var Q,P=I(ne);if(Oe){var he=I(this).constructor;Q=Reflect.construct(P,arguments,he)}else Q=P.apply(this,arguments);return(function(me,de){if(de&&(fe(de)==="object"||typeof de=="function"))return de;if(de!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(function(Re){if(Re===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Re})(me)})(this,Q)});function Qe(Q){return(function(P,he){if(!(P instanceof he))throw new TypeError("Cannot call a class as a function")})(this,Qe),Te.call(this,Q)}return D=Qe,(ae=[{key:"render",value:function(){return f().createElement(R,this.props)}}])&&A(D.prototype,ae),Object.defineProperty(D,"prototype",{writable:!1}),Qe})(f().Component);const ye=K(se);function we($){return we=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},we($)}function He($,D){for(var ae=0;ae<D.length;ae++){var ne=D[ae];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty($,(Oe=(function(Te,Qe){if(we(Te)!=="object"||Te===null)return Te;var Q=Te[Symbol.toPrimitive];if(Q!==void 0){var P=Q.call(Te,"string");if(we(P)!=="object")return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Te)})(ne.key),we(Oe)==="symbol"?Oe:String(Oe)),ne)}var Oe}function nt($,D){return nt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ae,ne){return ae.__proto__=ne,ae},nt($,D)}function Je($){if($===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return $}function Bt($){return Bt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(D){return D.__proto__||Object.getPrototypeOf(D)},Bt($)}var lt=(function($){(function(Q,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");Q.prototype=Object.create(P&&P.prototype,{constructor:{value:Q,writable:!0,configurable:!0}}),Object.defineProperty(Q,"prototype",{writable:!1}),P&&nt(Q,P)})(Qe,$);var D,ae,ne,Oe,Te=(ne=Qe,Oe=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var Q,P=Bt(ne);if(Oe){var he=Bt(this).constructor;Q=Reflect.construct(P,arguments,he)}else Q=P.apply(this,arguments);return(function(me,de){if(de&&(we(de)==="object"||typeof de=="function"))return de;if(de!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Je(me)})(this,Q)});function Qe(Q){var P;(function(_e,$e){if(!(_e instanceof $e))throw new TypeError("Cannot call a class as a function")})(this,Qe),P=Te.call(this,Q);var he=Q.afterLoad,me=Q.beforeLoad,de=Q.scrollPosition,Re=Q.visibleByDefault;return P.state={visible:Re},Re&&(me(),he()),P.onVisible=P.onVisible.bind(Je(P)),P.isScrollTracked=!!(de&&Number.isFinite(de.x)&&de.x>=0&&Number.isFinite(de.y)&&de.y>=0),P}return D=Qe,(ae=[{key:"componentDidUpdate",value:function(Q,P){P.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var Q=this.props,P=Q.className,he=Q.delayMethod,me=Q.delayTime,de=Q.height,Re=Q.placeholder,_e=Q.scrollPosition,$e=Q.style,Ke=Q.threshold,ot=Q.useIntersectionObserver,et=Q.width;return this.isScrollTracked||ot&&g()?f().createElement(R,{className:P,height:de,onVisible:this.onVisible,placeholder:Re,scrollPosition:_e,style:$e,threshold:Ke,useIntersectionObserver:ot,width:et}):f().createElement(ye,{className:P,delayMethod:he,delayTime:me,height:de,onVisible:this.onVisible,placeholder:Re,style:$e,threshold:Ke,width:et})}}])&&He(D.prototype,ae),Object.defineProperty(D,"prototype",{writable:!1}),Qe})(f().Component);lt.propTypes={afterLoad:p.PropTypes.func,beforeLoad:p.PropTypes.func,useIntersectionObserver:p.PropTypes.bool,visibleByDefault:p.PropTypes.bool},lt.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const Ot=lt;function At($){return At=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},At($)}var Sa=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function Kn($,D){var ae=Object.keys($);if(Object.getOwnPropertySymbols){var ne=Object.getOwnPropertySymbols($);D&&(ne=ne.filter((function(Oe){return Object.getOwnPropertyDescriptor($,Oe).enumerable}))),ae.push.apply(ae,ne)}return ae}function Fn($){for(var D=1;D<arguments.length;D++){var ae=arguments[D]!=null?arguments[D]:{};D%2?Kn(Object(ae),!0).forEach((function(ne){ql($,ne,ae[ne])})):Object.getOwnPropertyDescriptors?Object.defineProperties($,Object.getOwnPropertyDescriptors(ae)):Kn(Object(ae)).forEach((function(ne){Object.defineProperty($,ne,Object.getOwnPropertyDescriptor(ae,ne))}))}return $}function ql($,D,ae){return(D=Pn(D))in $?Object.defineProperty($,D,{value:ae,enumerable:!0,configurable:!0,writable:!0}):$[D]=ae,$}function bn(){return bn=Object.assign?Object.assign.bind():function($){for(var D=1;D<arguments.length;D++){var ae=arguments[D];for(var ne in ae)Object.prototype.hasOwnProperty.call(ae,ne)&&($[ne]=ae[ne])}return $},bn.apply(this,arguments)}function Fi($,D){for(var ae=0;ae<D.length;ae++){var ne=D[ae];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty($,Pn(ne.key),ne)}}function Pn($){var D=(function(ae,ne){if(At(ae)!=="object"||ae===null)return ae;var Oe=ae[Symbol.toPrimitive];if(Oe!==void 0){var Te=Oe.call(ae,"string");if(At(Te)!=="object")return Te;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(ae)})($);return At(D)==="symbol"?D:String(D)}function yn($,D){return yn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ae,ne){return ae.__proto__=ne,ae},yn($,D)}function Zn($){return Zn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(D){return D.__proto__||Object.getPrototypeOf(D)},Zn($)}var Pi=(function($){(function(Q,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");Q.prototype=Object.create(P&&P.prototype,{constructor:{value:Q,writable:!0,configurable:!0}}),Object.defineProperty(Q,"prototype",{writable:!1}),P&&yn(Q,P)})(Qe,$);var D,ae,ne,Oe,Te=(ne=Qe,Oe=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var Q,P=Zn(ne);if(Oe){var he=Zn(this).constructor;Q=Reflect.construct(P,arguments,he)}else Q=P.apply(this,arguments);return(function(me,de){if(de&&(At(de)==="object"||typeof de=="function"))return de;if(de!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(function(Re){if(Re===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Re})(me)})(this,Q)});function Qe(Q){var P;return(function(he,me){if(!(he instanceof me))throw new TypeError("Cannot call a class as a function")})(this,Qe),(P=Te.call(this,Q)).state={loaded:!1},P}return D=Qe,(ae=[{key:"onImageLoad",value:function(){var Q=this;return this.state.loaded?null:function(P){Q.props.onLoad(P),Q.props.afterLoad(),Q.setState({loaded:!0})}}},{key:"getImg",value:function(){var Q=this.props,P=(Q.afterLoad,Q.beforeLoad,Q.delayMethod,Q.delayTime,Q.effect,Q.placeholder,Q.placeholderSrc,Q.scrollPosition,Q.threshold,Q.useIntersectionObserver,Q.visibleByDefault,Q.wrapperClassName,Q.wrapperProps,(function(he,me){if(he==null)return{};var de,Re,_e=(function(Ke,ot){if(Ke==null)return{};var et,it,ua={},Kt=Object.keys(Ke);for(it=0;it<Kt.length;it++)et=Kt[it],ot.indexOf(et)>=0||(ua[et]=Ke[et]);return ua})(he,me);if(Object.getOwnPropertySymbols){var $e=Object.getOwnPropertySymbols(he);for(Re=0;Re<$e.length;Re++)de=$e[Re],me.indexOf(de)>=0||Object.prototype.propertyIsEnumerable.call(he,de)&&(_e[de]=he[de])}return _e})(Q,Sa));return f().createElement("img",bn({},P,{onLoad:this.onImageLoad()}))}},{key:"getLazyLoadImage",value:function(){var Q=this.props,P=Q.beforeLoad,he=Q.className,me=Q.delayMethod,de=Q.delayTime,Re=Q.height,_e=Q.placeholder,$e=Q.scrollPosition,Ke=Q.style,ot=Q.threshold,et=Q.useIntersectionObserver,it=Q.visibleByDefault,ua=Q.width;return f().createElement(Ot,{beforeLoad:P,className:he,delayMethod:me,delayTime:de,height:Re,placeholder:_e,scrollPosition:$e,style:Ke,threshold:ot,useIntersectionObserver:et,visibleByDefault:it,width:ua},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(Q){var P=this.props,he=P.effect,me=P.height,de=P.placeholderSrc,Re=P.width,_e=P.wrapperClassName,$e=P.wrapperProps,Ke=this.state.loaded,ot=Ke?" lazy-load-image-loaded":"",et=Ke||!de?{}:{backgroundImage:"url(".concat(de,")"),backgroundSize:"100% 100%"};return f().createElement("span",bn({className:_e+" lazy-load-image-background "+he+ot,style:Fn(Fn({},et),{},{color:"transparent",display:"inline-block",height:me,width:Re})},$e),Q)}},{key:"render",value:function(){var Q=this.props,P=Q.effect,he=Q.placeholderSrc,me=Q.visibleByDefault,de=Q.wrapperClassName,Re=Q.wrapperProps,_e=this.getLazyLoadImage();return(P||he)&&!me||de||Re?this.getWrappedLazyLoadImage(_e):_e}}])&&Fi(D.prototype,ae),Object.defineProperty(D,"prototype",{writable:!1}),Qe})(f().Component);Pi.propTypes={onLoad:p.PropTypes.func,afterLoad:p.PropTypes.func,beforeLoad:p.PropTypes.func,delayMethod:p.PropTypes.string,delayTime:p.PropTypes.number,effect:p.PropTypes.string,placeholderSrc:p.PropTypes.string,threshold:p.PropTypes.number,useIntersectionObserver:p.PropTypes.bool,visibleByDefault:p.PropTypes.bool,wrapperClassName:p.PropTypes.string,wrapperProps:p.PropTypes.object},Pi.defaultProps={onLoad:function(){},afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const Rt=Pi})(),fu.exports=o})()),fu.exports}var Qv=Gv();const pu=[{name:"Tapas",slug:"tapas",image:"https://media.bighaat.com/brands/tapasLogo.webp?w=1920&q=80"},{name:"Syngenta",slug:"syngenta",image:"https://media.bighaat.com/brands/syngentaLogo.webp?w=1920&q=80"},{name:"Indo American",slug:"indo-american",image:"https://media.bighaat.com/brands/dcm_shriram_logo.webp?w=1920&q=80"},{name:"Shriram",slug:"shriram",image:"https://media.bighaat.com/brands/seminisLogo.webp?w=1920&q=80"},{name:"Geolife",slug:"geolife",image:"https://media.bighaat.com/brands/namdhariSeedsLogo.webp?w=1920&q=80"},{name:"Bayer",slug:"bayer",image:"https://media.bighaat.com/brands/dhanukaLogo.webp?w=1920&q=80"},{name:"Seminis",slug:"seminis",image:"https://media.bighaat.com/brands/geolife-brand-logo.webp?w=1920&q=80"},{name:"Namdhari Seeds",slug:"namdhari",image:"https://media.bighaat.com/brands/excel%20industries.webp?w=1920&q=80"}],hx=()=>{const r=ca(),s=l=>{r(`/brand/${l}`)};return n.jsxs("div",{className:"brands-section",children:[n.jsxs("div",{className:"brands-header",children:[n.jsx("h2",{className:"brands-title",children:"Brands"}),n.jsx("a",{className:"brands-more-btn",onClick:()=>r("/brands"),children:"View All →"})]}),n.jsx("div",{className:"slider",children:n.jsx("div",{className:"slide-track",children:pu.concat(pu).map((l,o)=>n.jsx("div",{className:"brand-card",style:{"--i":o},onClick:()=>s(l.slug),children:n.jsx(Qv.LazyLoadImage,{src:l.image,alt:l.name,effect:"blur",draggable:"false"})},o))})}),n.jsx("style",{children:`
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
          width: calc(160px * ${pu.length*2});
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
      `})]})},Yv=()=>{const[r,s]=w.useState(""),[l,o]=w.useState("All");let u=Bv();return l!=="All"&&(u=u.filter(f=>f.category===l)),u=u.filter(f=>f.name.toLowerCase().includes(r.toLowerCase())),n.jsx(n.Fragment,{children:n.jsxs("div",{className:"offers-page",children:[n.jsx("h2",{className:"offers-page-title",children:"Today's Best Deals"}),n.jsxs("div",{className:"offers-filters",children:[n.jsx("input",{placeholder:"Search offers...",value:r,onChange:f=>s(f.target.value)}),n.jsxs("select",{value:l,onChange:f=>o(f.target.value),children:[n.jsx("option",{children:"All"}),n.jsx("option",{value:"seeds",children:"Seeds"}),n.jsx("option",{value:"fertilizers",children:"Fertilizers"}),n.jsx("option",{value:"machinery",children:"Machinery"})]})]}),n.jsx("div",{className:"offers-grid",children:u.map(f=>n.jsx(cx,{item:f},f.id))}),n.jsx("style",{children:`
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
      `})]})})};function Kv(){return n.jsx(Yv,{})}const es=()=>{const r=new Date().getFullYear();return n.jsxs("footer",{className:"agri-footer",children:[n.jsxs("div",{className:"footer-top",children:[n.jsxs("div",{className:"brand-block",children:[n.jsxs("div",{className:"brand-logo",children:["Agri",n.jsx("span",{children:"Tech"})]}),n.jsx("p",{className:"brand-tag",children:"Quality agri products at honest prices. Seeds, fertilizers, and machinery—delivered fast."}),n.jsxs("div",{className:"socials",children:[n.jsx("a",{"aria-label":"Facebook",href:"#",className:"social",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M22 12a10 10 0 1 0-11.563 9.874v-6.987H7.898V12h2.54V9.797c0-2.506 1.493-3.89 3.778-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.772-1.63 1.563V12h2.773l-.443 2.887h-2.33v6.987A10.002 10.002 0 0 0 22 12z"})})}),n.jsx("a",{"aria-label":"Instagram",href:"#",className:"social",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.997.24 2.69.512a5.4 5.4 0 0 1 1.95 1.268 5.4 5.4 0 0 1 1.268 1.95c.272.693.456 1.52.512 2.69.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.997-.512 2.69a5.4 5.4 0 0 1-1.268 1.95 5.4 5.4 0 0 1-1.95 1.268c-.693.272-1.52.456-2.69.512-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.997-.24-2.69-.512a5.4 5.4 0 0 1-1.95-1.268 5.4 5.4 0 0 1-1.268-1.95c-.272-.693-.456-1.52-.512-2.69C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.997.512-2.69a5.4 5.4 0 0 1 1.268-1.95 5.4 5.4 0 0 1 1.95-1.268c.693-.272 1.52-.456 2.69-.512C8.416 2.175 8.796 2.163 12 2.163zm0 1.8c-3.16 0-3.532.012-4.775.069-1.03.047-1.59.219-1.96.364-.493.191-.846.418-1.216.788s-.597.723-.788 1.216c-.145.37-.317.93-.364 1.96-.057 1.243-.069 1.615-.069 4.775s.012 3.532.069 4.775c.047 1.03.219 1.59.364 1.96.191.493.418.846.788 1.216s.723.597 1.216.788c.37.145.93.317 1.96.364 1.243.057 1.615.069 4.775.069s3.532-.012 4.775-.069c1.03-.047 1.59-.219 1.96-.364.493-.191.846-.418 1.216-.788s.597-.723.788-1.216c.145-.37.317-.93.364-1.96.057-1.243.069-1.615.069-4.775s-.012-3.532-.69-4.775c-.047-1.03-.219-1.59-.364-1.96a3.6 3.6 0 0 0-.788-1.216 3.6 3.6 0 0 0-1.216-.788c-.37-.145-.93-.317-1.96-.364-1.243-.057-1.615-.069-4.775-.069zm0 3.474a5.563 5.563 0 1 1 0 11.126 5.563 5.563 0 0 1 0-11.126zm0 1.8a3.763 3.763 0 1 0 0 7.526 3.763 3.763 0 0 0 0-7.526zm5.67-2.025a1.302 1.302 0 1 1 0 2.604 1.302 1.302 0 0 1 0-2.604z"})})}),n.jsx("a",{"aria-label":"Twitter",href:"#",className:"social",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M22.46 6c-.77.35-1.6.58-2.47.69a4.29 4.29 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.32 5.71 4.25 4.25 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.58 8.58 0 0 1 2 19.54a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.71 8.71 0 0 0 22.46 6z"})})})]})]}),n.jsxs("div",{className:"newsletter",children:[n.jsx("h4",{children:"Subscribe for best offers"}),n.jsx("p",{children:"Get updates on seeds, fertilizers & machinery deals."}),n.jsxs("form",{className:"news-form",onSubmit:s=>s.preventDefault(),children:[n.jsx("input",{type:"email",placeholder:"Enter your email",required:!0}),n.jsx("button",{type:"submit",children:"Subscribe"})]})]})]}),n.jsxs("div",{className:"footer-links",children:[n.jsxs("div",{className:"link-col",children:[n.jsx("h5",{children:"Shop"}),n.jsx(oe,{to:"/category/vegetable-seeds",children:"Seeds"}),n.jsx(oe,{to:"/category/fertilizers",children:"Fertilizers"}),n.jsx(oe,{to:"/category/farm-machinery",children:"Farm Machinery"}),n.jsx(oe,{to:"/offers-today",children:"Today’s Offers"})]}),n.jsxs("div",{className:"link-col",children:[n.jsx("h5",{children:"Help"}),n.jsx(oe,{to:"/help/faq",children:"FAQ"}),n.jsx(oe,{to:"/help/returns",children:"Returns & Refunds"}),n.jsx(oe,{to:"/help/shipping",children:"Shipping"}),n.jsx(oe,{to:"/contact",children:"Contact Us"})]}),n.jsxs("div",{className:"link-col",children:[n.jsx("h5",{children:"Company"}),n.jsx(oe,{to:"/about",children:"About Us"}),n.jsx(oe,{to:"/careers",children:"Careers"}),n.jsx(oe,{to:"/terms",children:"Terms of Use"}),n.jsx(oe,{to:"/privacy",children:"Privacy Policy"})]}),n.jsxs("div",{className:"link-col contact",children:[n.jsx("h5",{children:"Contact"}),n.jsx("p",{children:"📍 Hyderabad, India"}),n.jsx("p",{children:"✉️ support@agritech.com"}),n.jsx("p",{children:"📞 +91 98765 43210"}),n.jsx("p",{children:"Mon–Sat: 9:00 AM – 7:00 PM"})]}),n.jsxs("div",{className:"link-col",children:[n.jsx("h5",{children:"Login"}),n.jsx(oe,{to:"/login",children:"Login as User"}),n.jsx(oe,{to:"/admin-login",children:"Login as Admin"}),n.jsx(oe,{to:"/vendor-login",children:"Login as Vendor"})]})]}),n.jsxs("div",{className:"footer-bottom",children:[n.jsxs("p",{children:["© ",r," AgriTech. All rights reserved."]}),n.jsxs("div",{className:"payments",children:[n.jsx("span",{className:"pill",children:"UPI"}),n.jsx("span",{className:"pill",children:"NetBanking"}),n.jsx("span",{className:"pill",children:"Cards"}),n.jsx("span",{className:"pill",children:"COD"})]})]}),n.jsx("style",{children:`
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
      `})]})},Fv=()=>{const[r,s]=w.useState(!0);return w.useEffect(()=>{const l=setInterval(()=>{s(o=>!o)},4e3);return()=>clearInterval(l)},[]),n.jsxs("div",{className:"trust-rotator-wrapper",children:[n.jsx("div",{className:`banner ${r?"visible":"hidden"}`,children:n.jsx(qv,{})}),n.jsx("div",{className:`banner ${r?"hidden":"visible"}`,children:n.jsx(Vv,{})}),n.jsx("style",{children:`
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
      `})]})},Pv=()=>n.jsxs("div",{children:[n.jsx(Yn,{}),n.jsx(ex,{}),n.jsx(tx,{}),n.jsx(ux,{}),n.jsx(fx,{}),n.jsx(nx,{}),n.jsx(hx,{}),n.jsx(rx,{}),n.jsx(Fv,{}),n.jsx(lx,{}),n.jsx(px,{}),n.jsx(es,{})]}),hu=()=>{const[r,s]=w.useState({name:"",email:"",phone:"",message:""}),l=u=>{s({...r,[u.target.name]:u.target.value})},o=u=>{u.preventDefault(),alert("Thank you! Your message has been submitted ✅"),s({name:"",email:"",phone:"",message:""})};return n.jsxs(n.Fragment,{children:[n.jsx(Yn,{}),n.jsxs("div",{className:"contact-wrapper",children:[n.jsx("h1",{className:"contact-title",children:"Contact Us"}),n.jsx("p",{className:"contact-sub",children:"We are here to help and answer your questions"}),n.jsxs("div",{className:"contact-container",children:[n.jsxs("div",{className:"contact-info",children:[n.jsx("h2",{children:"Get in Touch"}),n.jsx("p",{children:"Feel free to reach out to us for support, product inquiries or partnership opportunities."}),n.jsxs("div",{className:"info-row",children:[n.jsx("strong",{children:"📍 Address:"}),n.jsx("span",{children:"Hyderabad, Telangana, India"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("strong",{children:"📞 Phone:"}),n.jsx("span",{children:"+91 98765 43210"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("strong",{children:"✉️ Email:"}),n.jsx("span",{children:"support@agritechfarm.com"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("strong",{children:"🕒 Working Hours:"}),n.jsx("span",{children:"Mon - Sat : 9:00 AM - 7:00 PM"})]})]}),n.jsxs("form",{className:"contact-form",onSubmit:o,children:[n.jsx("input",{type:"text",name:"name",placeholder:"Your Name",value:r.name,onChange:l,required:!0}),n.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:r.email,onChange:l,required:!0}),n.jsx("input",{type:"tel",name:"phone",placeholder:"Phone Number",value:r.phone,onChange:l,required:!0}),n.jsx("textarea",{name:"message",placeholder:"Write your message...",rows:"5",value:r.message,onChange:l,required:!0}),n.jsx("button",{type:"submit",children:"Send Message"})]})]}),n.jsx("style",{children:`
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
      `})]}),n.jsx(es,{})]})},mu=()=>{const r=[{icon:"🚚",title:"Fast Delivery",desc:"Quick delivery to your doorstep"},{icon:"🛡️",title:"Trusted Quality",desc:"Verified & lab-tested products"},{icon:"💬",title:"24/7 Support",desc:"We are always here to help"},{icon:"💵",title:"Easy Returns",desc:"Hassle-free replacement guarantee"}];return n.jsxs(n.Fragment,{children:[n.jsx(Yn,{}),n.jsxs("div",{className:"services-wrapper",children:[n.jsx("div",{className:"services-container",children:r.map((s,l)=>n.jsxs("div",{className:"service-box",children:[n.jsx("div",{className:"service-icon",children:s.icon}),n.jsx("h3",{children:s.title}),n.jsx("p",{children:s.desc})]},l))}),n.jsx("style",{children:`
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
      `})]}),n.jsx(es,{})]})},gu=()=>{const r=[{name:"Ravi Kumar",role:"Founder & CEO",image:"https://i.postimg.cc/g2cwQwcS/avatar1.png"},{name:"Priya Sharma",role:"Agriculture Expert",image:"https://i.postimg.cc/mD4zGNyM/avatar2.png"},{name:"Arun Verma",role:"Supply Chain Manager",image:"https://i.postimg.cc/3xk6Gtxz/avatar3.png"},{name:"Sneha Patil",role:"Customer Success Lead",image:"https://i.postimg.cc/fRYp57QZ/avatar4.png"}];return n.jsxs(n.Fragment,{children:[n.jsx(Yn,{}),n.jsxs("div",{className:"about-wrap",children:[n.jsxs("div",{className:"about-header",children:[n.jsx("h1",{children:"About Us"}),n.jsx("p",{children:"Your trusted partner in modern agriculture"})]}),n.jsxs("div",{className:"about-content",children:[n.jsx("p",{children:"We are an AgriTech driven marketplace focused on providing farmers with the highest quality seeds, fertilizers, pesticides, tools and farming equipment at fair and transparent prices. Our goal is to empower farmers with reliable products, trusted guidance, and seamless last-mile delivery."}),n.jsx("p",{children:"Agriculture is the backbone of our nation — and we believe farmers deserve both respect and access to the best resources. We work with verified manufacturers, certified suppliers, agronomists, and high-trust distributors to ensure genuine, result-driven products reach you on time."})]}),n.jsxs("div",{className:"about-section",children:[n.jsx("h2",{children:"Our Mission"}),n.jsx("p",{children:"To make quality agri-products accessible, affordable, and reliable for every farmer — helping them increase productivity, crop yield, and profit margins."})]}),n.jsxs("div",{className:"about-section",children:[n.jsx("h2",{children:"What We Offer"}),n.jsxs("ul",{children:[n.jsx("li",{children:"✔ High-quality seeds and fertilizers"}),n.jsx("li",{children:"✔ Trusted and certified farming products"}),n.jsx("li",{children:"✔ Farm tools, machinery & accessories"}),n.jsx("li",{children:"✔ 24/7 customer support in your language"}),n.jsx("li",{children:"✔ Fast and secure delivery across regions"})]})]}),n.jsxs("div",{className:"about-section",children:[n.jsx("h2",{children:"Our Promise"}),n.jsx("p",{children:"Transparent pricing. Genuine brands. Expert support. Because farmers deserve the best — always."})]}),n.jsxs("div",{className:"about-section team-section",children:[n.jsx("h2",{children:"Meet Our Team"}),n.jsx("div",{className:"team-grid",children:r.map((s,l)=>n.jsxs("div",{className:"team-card",children:[n.jsx("img",{src:s.image,alt:s.name}),n.jsx("h3",{children:s.name}),n.jsx("p",{children:s.role})]},l))})]}),n.jsx("style",{children:`
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
      `})]}),n.jsx(es,{})]})};function Zv(){return n.jsx(Rv,{})}function Xv(){const{id:r}=Uu(),s=Vn.find(X=>String(X.id)===String(r)),l="/mnt/data/c61b8eae-dfc2-4cca-a1e0-c301228d07ef.png";if(!s)return n.jsxs("div",{style:{textAlign:"center",padding:40},children:[n.jsx("h2",{children:"Product Not Found"}),n.jsx(oe,{to:"/",children:"Go Home"})]});const{name:o="Unnamed Product",brand:u="Unknown Brand",price:f=0,mrp:p=0,image:g,description:x="No description available.",sizes:h=["Single Pack"],highlights:b=[],benefits:v=[],specifications:E={},reviews:S=[],category:j="Seeds"}=s,[O,z]=w.useState(h[0]),[H,R]=w.useState(!1),[V,re]=w.useState(""),[W,le]=w.useState(null),te=w.useMemo(()=>{if(!S.length)return{avg:4.6,count:108};const X=S.reduce((ee,ge)=>ee+(ge.rating||0),0)/S.length;return{avg:Math.round(X*10)/10,count:S.length}},[S]),ce=Vn.filter(X=>X.id!==s.id).slice(0,6);function ie(){if(!/^\d{6}$/.test(V)){le({ok:!1,msg:"Enter valid 6-digit PIN"});return}const X=/^[1-9]/.test(V);le(X?{ok:!0,msg:"Delivery available (3–5 days)"}:{ok:!1,msg:"Delivery not available in this area"})}function pe(){alert(`Added ${o} (${O}) to cart`)}function _(){alert(`Proceeding to buy ${o} (${O})`)}return n.jsxs("div",{className:"product-page-root",children:[n.jsxs("div",{className:"product-page",children:[n.jsxs("nav",{className:"breadcrumb",children:[n.jsx(oe,{to:"/",children:"Home"}),n.jsx("span",{children:"›"}),n.jsx(oe,{to:"/category/seeds",children:"Seeds"}),n.jsx("span",{children:"›"}),n.jsx("span",{className:"current",children:o})]}),n.jsxs("div",{className:"product-grid",children:[n.jsxs("div",{className:`image-col ${H?"zoomed":""}`,onMouseEnter:()=>R(!0),onMouseLeave:()=>R(!1),children:[n.jsx("div",{className:"main-image",children:n.jsx("img",{src:g||l,alt:o,loading:"lazy"})}),n.jsxs("div",{className:"mini-row",children:[n.jsx("img",{className:"thumb",src:g||l,alt:""}),n.jsx("img",{className:"thumb",src:l,alt:""}),n.jsx("img",{className:"thumb",src:l,alt:""})]})]}),n.jsxs("div",{className:"info-col",children:[n.jsx("h1",{className:"title",children:o}),n.jsx("p",{className:"brand",children:u}),n.jsxs("div",{className:"rating",children:[n.jsxs("div",{className:"stars",children:["★".repeat(Math.round(te.avg)),"☆".repeat(5-Math.round(te.avg))]}),n.jsxs("div",{className:"rating-meta",children:[te.avg," • ",te.count," reviews"]})]}),n.jsxs("div",{className:"price-card",children:[n.jsxs("div",{className:"price-left",children:[n.jsxs("div",{className:"price-current",children:["₹",f]}),n.jsxs("div",{className:"price-mrp",children:["₹",p]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"save",children:["Save ₹",Math.max(0,p-f)]}),n.jsx("div",{className:"badge",children:"Best Seller"})]})]}),b.length>0&&n.jsxs("div",{className:"highlights",children:[n.jsx("h4",{children:"Key Highlights"}),n.jsx("ul",{children:b.map((X,ee)=>n.jsx("li",{children:X},ee))})]}),n.jsxs("div",{className:"variants",children:[n.jsx("h4",{children:"Choose Pack"}),n.jsx("div",{className:"variants-row",children:h.map(X=>n.jsx("button",{className:`variant ${O===X?"active":""}`,onClick:()=>z(X),children:X},X))})]}),n.jsxs("div",{className:"offers-delivery",children:[n.jsxs("div",{className:"offers",children:[n.jsx("strong",{children:"Offers"}),n.jsxs("ul",{children:[n.jsx("li",{children:"5% off on prepaid orders"}),n.jsx("li",{children:"Free delivery above ₹499"}),n.jsx("li",{children:"Cash on Delivery available"})]})]}),n.jsxs("div",{className:"delivery-check",children:[n.jsx("label",{children:"Check Delivery"}),n.jsxs("div",{className:"pin-row",children:[n.jsx("input",{value:V,onChange:X=>{re(X.target.value),le(null)},placeholder:"Enter PIN"}),n.jsx("button",{onClick:ie,children:"Check"})]}),W&&n.jsx("div",{className:`pin-result ${W.ok?"ok":"no"}`,children:W.msg})]})]}),n.jsxs("div",{className:"cta-row",children:[n.jsx("button",{className:"buy",onClick:_,children:"Buy Now"}),n.jsx("button",{className:"cart",onClick:pe,children:"Add to Cart"})]}),n.jsxs("div",{className:"short-desc",children:[n.jsx("h4",{children:"About this Product"}),n.jsx("p",{children:x})]})]})]}),n.jsxs("div",{className:"lower",children:[n.jsxs("div",{className:"left-card",children:[n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Product Overview"}),n.jsxs("div",{className:"spec-grid",children:[n.jsx("div",{children:n.jsx("strong",{children:"Name"})}),n.jsx("div",{children:o}),n.jsx("div",{children:n.jsx("strong",{children:"Brand"})}),n.jsx("div",{children:u}),n.jsx("div",{children:n.jsx("strong",{children:"Category"})}),n.jsx("div",{children:j}),n.jsx("div",{children:n.jsx("strong",{children:"Pack Size"})}),n.jsx("div",{children:O})]})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Specifications"}),Object.keys(E).length>0?n.jsx("table",{className:"spec-table",children:n.jsx("tbody",{children:Object.entries(E).map(([X,ee])=>n.jsxs("tr",{children:[n.jsx("td",{children:X}),n.jsx("td",{children:ee})]},X))})}):n.jsx("p",{children:"No specifications provided."})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Usage Instructions"}),n.jsxs("ul",{className:"bullet-list",children:[n.jsx("li",{children:"Sow seeds at recommended depth for best germination."}),n.jsx("li",{children:"Use well-drained soil with proper moisture."}),n.jsx("li",{children:"Follow standard seed treatment if required."})]})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Sowing & Germination Guide"}),n.jsxs("ul",{className:"bullet-list",children:[n.jsx("li",{children:"Sowing depth: 1–2 cm"}),n.jsx("li",{children:"Ideal spacing: 30–45 cm"}),n.jsx("li",{children:"Germination time: 5–10 days"}),n.jsx("li",{children:"Maintain moderate irrigation"})]})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Crop Management / Care Tips"}),n.jsxs("ul",{className:"bullet-list",children:[n.jsx("li",{children:"Apply balanced NPK fertilizer for healthy growth."}),n.jsx("li",{children:"Avoid waterlogging and over-irrigation."}),n.jsx("li",{children:"Regularly monitor for pests / diseases."})]})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Storage & Safety Information"}),n.jsxs("ul",{className:"bullet-list",children:[n.jsx("li",{children:"Store seeds in cool, dry place away from sunlight."}),n.jsx("li",{children:"Keep out of reach of children & animals."}),n.jsx("li",{children:"Seal the packet tightly after each use."})]})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Disclaimer"}),n.jsx("p",{children:"Actual results may vary depending on soil, climate & cultivation practices. All information is provided for educational purposes."})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Frequently Asked Questions"}),n.jsxs("details",{children:[n.jsx("summary",{children:"What is the germination rate?"}),n.jsx("p",{children:"Typically 90–95% under ideal conditions."})]}),n.jsxs("details",{children:[n.jsx("summary",{children:"How long can the seeds be stored?"}),n.jsx("p",{children:"Up to 1–2 years if stored properly."})]}),n.jsxs("details",{children:[n.jsx("summary",{children:"Is this suitable for all soil types?"}),n.jsx("p",{children:"Works best in well-drained soils."})]})]})]}),n.jsxs("div",{className:"right-card",children:[n.jsxs("section",{className:"card reviews-card",children:[n.jsx("h3",{children:"Customer Reviews"}),n.jsxs("div",{className:"reviews-summary",children:[n.jsx("div",{className:"big-rating",children:te.avg}),n.jsxs("div",{className:"small",children:["Based on ",te.count," reviews"]})]}),n.jsx("div",{className:"reviews-list",children:(S.length?S:[{name:"Amit",rating:5,text:"Good germination, healthy seedlings!",date:"2025-07-10"},{name:"Priya",rating:4,text:"Quality seeds, happy with results.",date:"2025-07-16"}]).map((X,ee)=>n.jsxs("div",{className:"review",children:[n.jsxs("div",{className:"r-top",children:[n.jsx("strong",{children:X.name}),n.jsxs("span",{className:"r-rating",children:["★".repeat(X.rating),"☆".repeat(5-X.rating)]})]}),n.jsx("div",{className:"r-text",children:X.text}),n.jsx("div",{className:"r-date",children:X.date})]},ee))})]}),n.jsxs("section",{className:"card related-card",children:[n.jsx("h3",{children:"Related Products"}),n.jsx("div",{className:"related-grid",children:ce.map(X=>n.jsxs(oe,{to:`/product/${X.id}`,className:"related-item",children:[n.jsx("img",{src:X.image||l,alt:X.name}),n.jsx("div",{className:"r-name",children:X.name}),n.jsxs("div",{className:"r-price",children:["₹",X.price]})]},X.id))})]})]})]})]}),n.jsx("div",{className:"sticky",children:n.jsxs("div",{className:"sticky-inner",children:[n.jsxs("div",{className:"sticky-left",children:[n.jsxs("div",{className:"sticky-price",children:["₹",f]}),n.jsxs("div",{className:"sticky-save",children:["Save ₹",Math.max(0,p-f)]})]}),n.jsxs("div",{className:"sticky-ctas",children:[n.jsx("button",{className:"sticky-cart",onClick:pe,children:"Add"}),n.jsx("button",{className:"sticky-buy",onClick:_,children:"Buy"})]})]})}),n.jsx("style",{children:`
        html, body { overflow-x: hidden; }

        :root {
          --green: #2a7a0e;
          --muted: #666;
          --border: #e6e6e6;
        }

        .product-page-root { padding-bottom: 120px; }
        .product-page {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
          font-family: Inter, sans-serif;
        }

        .breadcrumb {
          display: flex;
          gap: 8px;
          font-size: 13px;
          margin-bottom: 12px;
        }
        .breadcrumb a { color: var(--green); }

        /* MAIN GRID */
        .product-grid {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 28px;
          align-items: start;
        }

        .main-image {
          background: #fafafa;
          border-radius: 12px;
          padding: 10px;
          border: 1px solid var(--border);
          text-align: center;
        }
        .main-image img {
          width: 100%;
          max-height: 380px;
          object-fit: contain;
          transition: 0.3s;
        }
        .image-col.zoomed img {
          transform: scale(1.07);
        }

        .mini-row {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }
        .thumb {
          width: 68px;
          height: 68px;
          object-fit: cover;
          border: 1px solid var(--border);
          border-radius: 8px;
        }

        /* INFO COLUMN */
        .title {
          font-size: 26px;
          color: var(--green);
          margin-bottom: 4px;
        }
        .brand {
          color: #666;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .rating {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }
        .stars { color: #f7b500; }

        .price-card {
          background: #f6fbf6;
          border: 1px solid #dff0df;
          padding: 12px;
          border-radius: 12px;
          margin-bottom: 16px;
          display: flex;
          justify-content: space-between;
        }

        .price-current { color: var(--green); font-size: 24px; font-weight: 800; }
        .price-mrp { text-decoration: line-through; margin-left: 8px; color: #888; }

        .save { color: #e67e22; font-weight: 600; }
        .badge {
          background: #e6f3e6;
          padding: 6px 12px;
          border-radius: 6px;
          color: var(--green);
          font-size: 13px;
          margin-top: 6px;
        }

        .variants h4 { margin: 12px 0 6px; }
        .variants-row { display: flex; gap: 10px; flex-wrap: wrap; }

        .variant {
          padding: 10px 16px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: white;
          cursor: pointer;
        }
        .variant.active {
          background: #eaf6ea;
          border-color: var(--green);
          color: var(--green);
          font-weight: 700;
        }

        .offers-delivery {
          display: flex;
          gap: 20px;
          margin: 18px 0;
        }
        .offers {
          background: #fff8e8;
          padding: 12px;
          border-left: 4px solid #ff9900;
          border-radius: 10px;
          flex: 1;
        }

        .pin-row {
          display: flex;
          gap: 6px;
          margin-top: 6px;
        }
        .pin-row input {
          padding: 8px;
          border-radius: 8px;
          border: 1px solid var(--border);
          flex: 1;
        }
        .pin-row button {
          background: var(--green);
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
        }
        .pin-result.ok { color: #1a7b1a; }
        .pin-result.no { color: #c34a4a; }

        .cta-row {
          display: flex;
          gap: 12px;
          margin: 20px 0;
        }
        .buy {
          background: var(--green);
          color: white;
          padding: 12px;
          border: none;
          flex: 1;
          border-radius: 10px;
          cursor: pointer;
        }
        .cart {
          background: white;
          border: 2px solid var(--green);
          color: var(--green);
          padding: 12px;
          flex: 1;
          border-radius: 10px;
          cursor: pointer;
        }

        .short-desc p { color: #444; }

        /* LOWER SECTION */
        .lower {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }

        .left-card { flex: 2; }
        .right-card { flex: 1; }

        .card {
          background: white;
          border: 1px solid var(--border);
          padding: 16px;
          border-radius: 10px;
          margin-bottom: 16px;
        }

        .spec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 18px;
          margin-top: 10px;
        }

        .spec-table { width: 100%; border-collapse: collapse; }
        .spec-table td {
          padding: 8px;
          border-bottom: 1px solid var(--border);
        }

        .bullet-list { padding-left: 18px; color: #444; }

        /* FAQ */
        details {
          border: 1px solid var(--border);
          padding: 10px;
          border-radius: 8px;
          margin-top: 10px;
          cursor: pointer;
        }
        details summary {
          font-weight: 600;
          margin-bottom: 6px;
        }

        /* Reviews */
        .big-rating {
          font-size: 26px;
          font-weight: 800;
          color: var(--green);
        }
        .review { border-top: 1px solid #eee; padding-top: 10px; }

        /* Related */
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
        }
        .related-item {
          border: 1px solid var(--border);
          padding: 10px;
          border-radius: 10px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: 0.2s;
        }
        .related-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.1);
        }
        .related-item img {
          width: 100%;
          height: 100px;
          object-fit: contain;
        }

        /* Sticky */
        .sticky {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          border-top: 1px solid var(--border);
          z-index: 1000;
        }
        .sticky-inner {
          max-width: 1200px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          padding: 10px 20px;
          align-items: center;
        }
        .sticky-cart,
        .sticky-buy {
          padding: 10px 14px;
          border-radius: 8px;
          cursor: pointer;
          border: none;
          font-weight: 700;
        }
        .sticky-cart {
          border: 1px solid var(--green);
          background: #f4fff4;
          color: var(--green);
        }
        .sticky-buy {
          background: var(--green);
          color: white;
        }

        /* RESPONSIVE */
        @media (max-width: 990px) {
          .product-grid {
            grid-template-columns: 1fr;
          }
          .image-col { align-items: center; }
          .lower { flex-direction: column; }
        }

        @media (max-width: 600px) {
          .title { font-size: 20px; }
          .main-image img { max-height: 280px; }
          .sticky-inner { padding: 8px 12px; }
        }
      `})]})}function Iv(){const{id:r}=Uu(),s=Gn.find(ee=>String(ee.id)===String(r)),l="/mnt/data/c61b8eae-dfc2-4cca-a1e0-c301228d07ef.png";if(!s)return n.jsxs("div",{style:{textAlign:"center",padding:40},children:[n.jsx("h2",{children:"Product Not Found"}),n.jsx(oe,{to:"/",children:"Go Home"})]});const{name:o="Unnamed Fertilizer",brand:u="Unknown Brand",price:f=0,mrp:p=0,image:g,description:x="No description available.",sizes:h=["Single Pack"],highlights:b=[],benefits:v=[],specifications:E={},nutrientComposition:S={},application:j={},precautions:O=[],reviews:z=[],category:H="Fertilizers"}=s,[R,V]=w.useState(h[0]||"Single Pack"),[re,W]=w.useState(""),[le,te]=w.useState(null),ce=w.useMemo(()=>{if(!z.length)return{avg:4.5,count:42};const ee=z.reduce((ge,Me)=>ge+(Me.rating||0),0)/z.length;return{avg:Math.round(ee*10)/10,count:z.length}},[z]),ie=Gn.filter(ee=>ee.id!==s.id).slice(0,6);function pe(){if(!/^\d{6}$/.test(re)){te({ok:!1,msg:"Enter valid 6-digit PIN"});return}const ee=/^[1-9]/.test(re);te(ee?{ok:!0,msg:"Delivery available (2–5 days)"}:{ok:!1,msg:"Delivery not available in this area"})}function _(){alert(`Added ${o} (${R}) to cart`)}function X(){alert(`Proceeding to buy ${o} (${R})`)}return n.jsxs("div",{className:"fert-page-root",children:[n.jsxs("div",{className:"fert-page",children:[n.jsxs("nav",{className:"breadcrumb",children:[n.jsx(oe,{to:"/",children:"Home"}),n.jsx("span",{children:"›"}),n.jsx(oe,{to:"/category/fertilizers",children:"Fertilizers"}),n.jsx("span",{children:"›"}),n.jsx("span",{className:"current",children:o})]}),n.jsxs("div",{className:"product-grid",children:[n.jsxs("div",{className:"image-col",children:[n.jsx("div",{className:"main-image",children:n.jsx("img",{src:g||l,alt:o,loading:"lazy"})}),n.jsxs("div",{className:"mini-row",children:[n.jsx("img",{className:"thumb",src:g||l,alt:"thumb1"}),n.jsx("img",{className:"thumb",src:l,alt:"thumb2"}),n.jsx("img",{className:"thumb",src:l,alt:"thumb3"})]})]}),n.jsxs("div",{className:"info-col",children:[n.jsx("h1",{className:"title",children:o}),n.jsx("p",{className:"brand",children:u}),n.jsxs("div",{className:"rating",children:[n.jsxs("div",{className:"stars",children:["★".repeat(Math.round(ce.avg)),"☆".repeat(5-Math.round(ce.avg))]}),n.jsxs("div",{className:"rating-meta",children:[ce.avg," • ",ce.count," Reviews"]})]}),n.jsxs("div",{className:"price-card",children:[n.jsxs("div",{className:"price-left",children:[n.jsxs("div",{className:"price-current",children:["₹",f]}),n.jsxs("div",{className:"price-mrp",children:["₹",p]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"save",children:["Save ₹",Math.max(0,p-f)]}),n.jsx("div",{className:"badge",children:"Top Rated"})]})]}),b.length>0&&n.jsxs("div",{className:"highlights",children:[n.jsx("h4",{children:"Highlights"}),n.jsx("ul",{children:b.map((ee,ge)=>n.jsx("li",{children:ee},ge))})]}),n.jsxs("div",{className:"variants",children:[n.jsx("h4",{children:"Select Pack"}),n.jsx("div",{className:"variants-row",children:h.map(ee=>n.jsx("button",{className:`variant ${R===ee?"active":""}`,onClick:()=>V(ee),children:ee},ee))})]}),n.jsxs("div",{className:"offers-delivery",children:[n.jsxs("div",{className:"offers",children:[n.jsx("strong",{children:"Offers"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Special price on bulk orders"}),n.jsx("li",{children:"Free delivery above ₹999"}),n.jsx("li",{children:"Prepaid discounts available"})]})]}),n.jsxs("div",{className:"delivery-check",children:[n.jsx("label",{children:"Check Delivery"}),n.jsxs("div",{className:"pin-row",children:[n.jsx("input",{value:re,onChange:ee=>{W(ee.target.value),te(null)},placeholder:"Enter 6 digit PIN"}),n.jsx("button",{onClick:pe,children:"Check"})]}),le&&n.jsx("div",{className:`pin-result ${le.ok?"ok":"no"}`,children:le.msg})]})]}),n.jsxs("div",{className:"cta-row",children:[n.jsx("button",{className:"buy",onClick:X,children:"Buy Now"}),n.jsx("button",{className:"cart",onClick:_,children:"Add to Cart"})]}),n.jsxs("div",{className:"short-desc",children:[n.jsx("h4",{children:"About this Product"}),n.jsx("p",{children:x})]})]})]}),n.jsxs("div",{className:"lower",children:[n.jsxs("div",{className:"left-card",children:[n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Product Overview"}),n.jsxs("div",{className:"spec-grid",children:[n.jsx("div",{children:n.jsx("strong",{children:"Name"})}),n.jsx("div",{children:o}),n.jsx("div",{children:n.jsx("strong",{children:"Brand"})}),n.jsx("div",{children:u}),n.jsx("div",{children:n.jsx("strong",{children:"Category"})}),n.jsx("div",{children:H}),n.jsx("div",{children:n.jsx("strong",{children:"Pack"})}),n.jsx("div",{children:R})]})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Specifications"}),Object.keys(E).length>0?n.jsx("table",{className:"spec-table",children:n.jsx("tbody",{children:Object.entries(E).map(([ee,ge])=>n.jsxs("tr",{children:[n.jsx("td",{children:ee}),n.jsx("td",{children:ge})]},ee))})}):n.jsx("p",{children:"No specifications provided."})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Nutrient Composition"}),Object.keys(S).length>0?n.jsx("div",{className:"spec-grid",children:Object.entries(S).map(([ee,ge])=>n.jsxs(xn.Fragment,{children:[n.jsx("div",{children:n.jsx("strong",{children:ee})}),n.jsx("div",{children:ge})]},ee))}):n.jsx("p",{children:"Composition details not provided."})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Application Guide"}),n.jsxs("ul",{className:"bullet-list",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Recommended Rate:"})," ",j.rate||"Refer label"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Method:"})," ",j.method||"Broadcast / Side dressing"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Timing:"})," ",j.timing||"As per crop requirement"]})]})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Crop Management & Tips"}),n.jsx("ul",{className:"bullet-list",children:v.length>0?v.map((ee,ge)=>n.jsx("li",{children:ee},ge)):n.jsxs(n.Fragment,{children:[n.jsx("li",{children:"Split application for better uptake."}),n.jsx("li",{children:"Apply with recommended irrigation scheduling."})]})})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Storage & Safety"}),n.jsxs("ul",{className:"bullet-list",children:[n.jsx("li",{children:"Store in a cool, dry place away from moisture."}),n.jsx("li",{children:"Use protective gloves while handling concentrated forms."}),O.map((ee,ge)=>n.jsx("li",{children:ee},ge))]})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Disclaimer"}),n.jsx("p",{children:"Field conditions, soil type and weather affect fertilizer performance. Use recommendations as guidance; test small area before wide application."})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Frequently Asked Questions"}),n.jsxs("details",{children:[n.jsx("summary",{children:"How often should I apply?"}),n.jsx("p",{children:"Depends on crop and soil test — typically split doses during the growing season."})]}),n.jsxs("details",{children:[n.jsx("summary",{children:"Can I mix this with other fertilizers?"}),n.jsx("p",{children:"Check compatibility; avoid mixing with strong alkaline products directly."})]}),n.jsxs("details",{children:[n.jsx("summary",{children:"Is there an expiry?"}),n.jsx("p",{children:"Most granular fertilizers are stable; check label for shelf life."})]})]})]}),n.jsxs("div",{className:"right-card",children:[n.jsxs("section",{className:"card reviews-card",children:[n.jsx("h3",{children:"Customer Reviews"}),n.jsxs("div",{className:"reviews-summary",children:[n.jsx("div",{className:"big-rating",children:ce.avg}),n.jsxs("div",{className:"small",children:["Based on ",ce.count," reviews"]})]}),n.jsx("div",{className:"reviews-list",children:(z.length?z:[{name:"Ravi",rating:5,text:"Excellent nutrient release",date:"2025-07-01"},{name:"Sunita",rating:4,text:"Good value for money",date:"2025-07-10"}]).map((ee,ge)=>n.jsxs("div",{className:"review",children:[n.jsxs("div",{className:"r-top",children:[n.jsx("strong",{children:ee.name})," ",n.jsxs("span",{className:"r-rating",children:["★".repeat(ee.rating),"☆".repeat(5-ee.rating)]})]}),n.jsx("div",{className:"r-text",children:ee.text}),n.jsx("div",{className:"r-date",children:ee.date})]},ge))})]}),n.jsxs("section",{className:"card related-card",children:[n.jsx("h3",{children:"Related Fertilizers"}),n.jsx("div",{className:"related-grid",children:ie.map(ee=>n.jsxs(oe,{to:`/fertilizers/${ee.id}`,className:"related-item",children:[n.jsx("img",{src:ee.image||l,alt:ee.name}),n.jsx("div",{className:"r-name",children:ee.name}),n.jsxs("div",{className:"r-price",children:["₹",ee.price]})]},ee.id))})]})]})]})]}),n.jsx("div",{className:"sticky",children:n.jsxs("div",{className:"sticky-inner",children:[n.jsxs("div",{className:"sticky-left",children:[n.jsxs("div",{className:"sticky-price",children:["₹",f]}),n.jsxs("div",{className:"sticky-save",children:["Save ₹",Math.max(0,p-f)]})]}),n.jsxs("div",{className:"sticky-ctas",children:[n.jsx("button",{className:"sticky-cart",onClick:_,children:"Add"}),n.jsx("button",{className:"sticky-buy",onClick:X,children:"Buy"})]})]})}),n.jsx("style",{children:`
        html, body { overflow-x: hidden; }

        :root {
          --green: #2a7a0e;
          --muted: #666;
          --border: #e6e6e6;
        }

        .fert-page-root { padding-bottom: 120px; }
        .fert-page { max-width: 1200px; margin: auto; padding: 20px; font-family: Inter, sans-serif; }

        .breadcrumb { display:flex; gap:8px; font-size:13px; margin-bottom:12px; }
        .breadcrumb a { color: var(--green); }

        .product-grid { display:grid; grid-template-columns: 420px 1fr; gap:28px; align-items:start; }

        .main-image { background:#fafafa; border-radius:12px; padding:10px; border:1px solid var(--border); text-align:center; }
        .main-image img { width:100%; max-height:380px; object-fit:contain; transition: .3s; }
        .mini-row { display:flex; gap:12px; margin-top:8px; }
        .thumb { width:68px; height:68px; object-fit:cover; border-radius:8px; border:1px solid var(--border); }

        .title { font-size:26px; color:var(--green); margin-bottom:4px; }
        .brand { color:var(--muted); font-weight:600; margin-bottom:12px; }

        .rating { display:flex; gap:12px; margin-bottom:12px; }
        .stars { color:#f7b500; }

        .price-card { background:#f6fbf6; border:1px solid #dff0df; padding:12px; border-radius:12px; margin-bottom:16px; display:flex; justify-content:space-between; }
        .price-current { color:var(--green); font-size:24px; font-weight:800; }
        .price-mrp { text-decoration:line-through; margin-left:8px; color:#888; }

        .variants-row { display:flex; gap:10px; flex-wrap:wrap; }
        .variant { padding:10px 16px; border-radius:8px; border:1px solid var(--border); background:#fff; cursor:pointer; }
        .variant.active { background:#eef9ee; border-color:var(--green); color:var(--green); font-weight:700; }

        .offers-delivery { display:flex; gap:20px; margin:18px 0; flex-wrap:wrap; }
        .offers { background:#fff8e8; padding:12px; border-left:4px solid #ff9900; border-radius:10px; flex:1; min-width:220px; }

        .pin-row { display:flex; gap:6px; margin-top:6px; }
        .pin-row input { padding:8px; border-radius:8px; border:1px solid var(--border); flex:1; }
        .pin-row button { background:var(--green); color:#fff; border:none; padding:8px 14px; border-radius:8px; cursor:pointer; }

        .cta-row { display:flex; gap:12px; margin:20px 0; }
        .buy { background:var(--green); color:white; padding:12px; border:none; flex:1; border-radius:10px; cursor:pointer; }
        .cart { background:white; border:2px solid var(--green); color:var(--green); padding:12px; border-radius:10px; cursor:pointer; }

        .short-desc p { color:#444; }

        .lower { display:flex; gap:20px; margin-top:30px; }
        .left-card { flex:2; min-width:0; }
        .right-card { flex:1; min-width:0; }

        .card { background:white; border:1px solid var(--border); padding:16px; border-radius:10px; margin-bottom:16px; }

        .spec-grid { display:grid; grid-template-columns: 1fr 1fr; gap:12px 18px; margin-top:10px; }
        .spec-table { width:100%; border-collapse:collapse; }
        .spec-table td { padding:8px; border-bottom:1px solid var(--border); }

        .bullet-list { padding-left:18px; color:#444; }

        details { border:1px solid var(--border); padding:10px; border-radius:8px; margin-top:10px; cursor:pointer; }
        details summary { font-weight:600; margin-bottom:6px; }

        .big-rating { font-size:26px; font-weight:800; color:var(--green); }
        .review { border-top:1px solid #eee; padding-top:10px; }

        .related-grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(140px,1fr)); gap:12px; }
        .related-item { border:1px solid var(--border); padding:10px; border-radius:10px; display:flex; flex-direction:column; gap:6px; text-decoration:none; color:inherit; }
        .related-item img { width:100%; height:100px; object-fit:contain; }

        .sticky { position:fixed; bottom:0; left:0; right:0; background:white; border-top:1px solid var(--border); z-index:1000; }
        .sticky-inner { max-width:1200px; margin:auto; display:flex; justify-content:space-between; padding:10px 20px; align-items:center; }
        .sticky-cart, .sticky-buy { padding:10px 14px; border-radius:8px; cursor:pointer; border:none; font-weight:700; }
        .sticky-cart { border:1px solid var(--green); background:#f4fff4; color:var(--green); }
        .sticky-buy { background:var(--green); color:white; }

        /* Responsive */
        @media (max-width: 990px) {
          .product-grid { grid-template-columns: 1fr; }
          .lower { flex-direction:column; }
        }
        @media (max-width: 600px) {
          .title { font-size:20px; }
          .main-image img { max-height: 280px; }
          .sticky-inner { padding:8px 12px; }
          .fert-page-root { padding-bottom: 140px; }
        }
      `})]})}function Jv(){return n.jsx(Iv,{})}const Wv=()=>{const[r,s]=w.useState(""),l=Hi.filter(o=>o.name.toLowerCase().includes(r.toLowerCase()));return n.jsxs("div",{className:"mach-page",children:[n.jsxs("div",{className:"mach-header",children:[n.jsx("h2",{children:"Farm Machinery"}),n.jsx("p",{className:"mach-subtitle",children:"Explore high-quality tools & machinery for farming and agriculture."})]}),n.jsx("div",{className:"mach-search-box",children:n.jsx("input",{placeholder:"Search machinery (tractors, sprayers, tools...)",value:r,onChange:o=>s(o.target.value)})}),n.jsx("div",{className:"mach-grid",children:l.length>0?l.map(o=>n.jsx(sx,{item:o},o.id)):n.jsx("div",{className:"mach-no-results",children:"No machinery found."})}),n.jsx("style",{children:`
        .mach-page {
          max-width:1300px;
          margin:auto;
          padding:40px 20px;
          font-family:Inter, sans-serif;
        }

        /* HEADER */
        .mach-header {
          text-align:center;
          margin-bottom:25px;
        }
        .mach-header h2 {
          font-size:28px;
          font-weight:700;
          color:#2a7a0e;
          margin-bottom:8px;
        }
        .mach-subtitle {
          color:#666;
          font-size:15px;
        }

        /* SEARCH BOX */
        .mach-search-box {
          display:flex;
          justify-content:center;
          margin:25px 0;
        }
        .mach-search-box input {
          padding:12px 16px;
          border:1px solid #ccc;
          border-radius:8px;
          width:320px;
          font-size:15px;
          outline:none;
          transition:.2s;
        }
        .mach-search-box input:focus {
          border-color:#2a7a0e;
          box-shadow:0 0 4px rgba(42,122,14,.3);
        }

        /* GRID */
        .mach-grid {
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
          gap:22px;
        }

        /* NO RESULTS */
        .mach-no-results {
          text-align:center;
          grid-column:1 / -1;
          color:#777;
          font-size:16px;
          padding:20px 0;
        }

        @media (max-width:600px) {
          .mach-header h2 { font-size:24px; }
          .mach-search-box input { width:100%; }
        }
      `})]})};function _v(){return n.jsx(Wv,{})}const $v=()=>{const[r,s]=w.useState(""),[l,o]=w.useState("All");let u=Lv();return l!=="All"&&(u=u.filter(f=>f.category===l)),u=u.filter(f=>f.name.toLowerCase().includes(r.toLowerCase())),n.jsxs("div",{className:"bs-page",children:[n.jsx("h2",{className:"bs-page-title",children:"Best Selling Products"}),n.jsxs("div",{className:"bs-filters",children:[n.jsx("input",{placeholder:"Search products...",value:r,onChange:f=>s(f.target.value)}),n.jsxs("select",{value:l,onChange:f=>o(f.target.value),children:[n.jsx("option",{children:"All"}),n.jsx("option",{value:"seeds",children:"Seeds"}),n.jsx("option",{value:"fertilizers",children:"Fertilizers"}),n.jsx("option",{value:"machinery",children:"Farm Machinery"})]})]}),n.jsx("div",{className:"bs-grid",children:u.map(f=>n.jsx(dx,{item:f},f.id))}),n.jsx("style",{children:`
        .bs-page { max-width:1300px;margin:auto;padding:40px 20px; }
        .bs-page-title { text-align:center;font-size:28px;font-weight:700;color:#2a7a0e;margin-bottom:25px; }

        .bs-filters { display:flex;gap:12px;justify-content:center;margin-bottom:25px; }
        .bs-filters input,.bs-filters select {
          padding:10px 14px;border:1px solid #ccc;border-radius:6px;font-size:15px;
        }

        .bs-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px; }
      `})]})};function ej(){return n.jsx($v,{})}let mx=[{firstName:"Raju",lastName:"Seeds",email:"vendor@gmail.com",password:"123",phoneNumber:"9876543210",businessName:"Raju Seeds Store",businessType:"Seed Supplier",address:"Guntur, Andhra Pradesh",city:"Guntur",state:"AP",pincode:"522001"}];const xu=JSON.parse(localStorage.getItem("vendorDB"));xu&&xu.length>0&&(mx=xu);const tj=(r,s)=>{const l=mx.find(o=>o.email===r&&o.password===s);if(!l)throw new Error("Invalid Email or Password");return sessionStorage.setItem("vendorSession",JSON.stringify(l)),l};let qi=[{id:1,name:"Hybrid Tomato Seeds",category:"Seeds",price:150,stock:50,description:"High-yield hybrid tomato seeds ideal for warm climates.",image:"https://images.unsplash.com/photo-1603048297172-1d5a2608a2cc?auto=format&fit=crop&w=400&q=60"},{id:2,name:"Organic Fertilizer",category:"Fertilizers",price:350,stock:30,description:"Natural fertilizer with organic nutrients for soil enrichment.",image:"https://images.unsplash.com/photo-1590747854873-2c0e59c2a734?auto=format&fit=crop&w=400&q=60"},{id:3,name:"Power Sprayer",category:"Machinery",price:12e3,stock:10,description:"Durable sprayer suitable for all types of crops.",image:"https://images.unsplash.com/photo-1602526218600-8ef2e779a58c?auto=format&fit=crop&w=400&q=60"}];const bu=async()=>Promise.resolve(qi),aj=async r=>{const s={id:Date.now(),...r};return qi.push(s),Promise.resolve(s)},nj=async(r,s)=>(qi=qi.map(l=>l.id===r?{...l,...s}:l),Promise.resolve(s)),ij=async r=>(qi=qi.filter(s=>s.id!==r),Promise.resolve(!0)),rj=()=>{const[r,s]=w.useState(!0),[l,o]=w.useState(!1),[u,f]=w.useState(""),[p,g]=w.useState(""),[x,h]=w.useState(""),[b,v]=w.useState(!1),E=ca(),S=async j=>{j.preventDefault(),h(""),v(!0);try{const O=tj(u,p);alert(`Welcome ${O.firstName}!`),E("/vendor")}catch(O){h(O.message)}finally{v(!1)}};return n.jsxs(n.Fragment,{children:[n.jsx(Yn,{}),n.jsx("div",{style:{paddingTop:"120px"},children:n.jsx("div",{className:"login-container",children:n.jsxs("div",{className:"login-card",children:[n.jsx("h2",{children:"Vendor Login"}),n.jsx("p",{children:"Manage your store, products & customers"}),n.jsxs("div",{className:"login-toggle",children:[n.jsx("button",{className:r?"active":"",onClick:()=>s(!0),children:"Email Login"}),n.jsx("button",{className:r?"":"active",onClick:()=>s(!1),children:"Phone Login"})]}),n.jsxs("form",{className:"login-form",onSubmit:S,children:[n.jsx("input",{type:r?"email":"tel",placeholder:r?"Enter your email":"Enter your phone number",value:u,onChange:j=>f(j.target.value),required:!0}),n.jsxs("div",{className:"password-field",children:[n.jsx("input",{type:l?"text":"password",placeholder:"Enter your password",value:p,onChange:j=>g(j.target.value),required:!0}),n.jsx("span",{className:"toggle-password",onClick:()=>o(!l),children:l?"Hide":"Show"})]}),x&&n.jsx("p",{className:"error-text",children:x}),n.jsx("button",{type:"submit",className:"login-btn",disabled:b,children:b?"Logging in...":"Login"})]}),n.jsx("div",{className:"divider",children:n.jsx("span",{children:"OR"})}),n.jsxs("div",{className:"sso-icons",children:[n.jsx("a",{className:"sso-btn google",children:n.jsx(Qu,{size:22})}),n.jsx("a",{className:"sso-btn github",children:n.jsx(Ku,{size:20})}),n.jsx("a",{className:"sso-btn facebook",children:n.jsx(Yu,{size:20})}),n.jsx("a",{className:"sso-btn linkedin",children:n.jsx(Fu,{size:20})})]}),n.jsxs("p",{className:"signup-text",children:["New Vendor? ",n.jsx(oe,{to:"/vendor-register",children:"Register Here"})]})]})})}),n.jsx("style",{children:`
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
      `})]})},sj=()=>{const r=ca(),[s,l]=w.useState(!1),[o,u]=w.useState({firstName:"",lastName:"",email:"",phoneNumber:"",password:"",businessName:"",businessType:"",gstNumber:"",address:"",city:"",state:"",pincode:""}),[f,p]=w.useState(null),[g,x]=w.useState(null),h=S=>{u({...o,[S.target.name]:S.target.value})},b=S=>{p(S.target.files[0])},v=S=>{x(S.target.files[0])},E=async S=>{S.preventDefault(),l(!0);const j=new FormData;Object.keys(o).forEach(O=>j.append(O,o[O])),f&&j.append("businessCertificate",f),g&&j.append("profileImage",g);try{const O=await registerVendor(j);alert("Vendor Registration Successful ✅ Please wait for approval."),r("/vendor-login")}catch(O){alert(O.message||"Registration failed")}finally{l(!1)}};return n.jsxs("div",{className:"reg-container",children:[n.jsxs("div",{className:"reg-card",children:[n.jsx("h2",{children:"Vendor Registration"}),n.jsx("p",{children:"Register your business and start selling on AgriTech"}),n.jsxs("form",{className:"reg-form",onSubmit:E,children:[n.jsxs("div",{className:"row",children:[n.jsx("input",{type:"text",name:"firstName",placeholder:"First Name",onChange:h,required:!0}),n.jsx("input",{type:"text",name:"lastName",placeholder:"Last Name",onChange:h,required:!0})]}),n.jsx("input",{type:"email",name:"email",placeholder:"Email",onChange:h,required:!0}),n.jsx("input",{type:"tel",name:"phoneNumber",placeholder:"Phone Number",onChange:h,required:!0}),n.jsx("input",{type:"password",name:"password",placeholder:"Password",onChange:h,required:!0}),n.jsx("input",{type:"text",name:"businessName",placeholder:"Business / Shop Name",onChange:h,required:!0}),n.jsxs("select",{name:"businessType",onChange:h,required:!0,children:[n.jsx("option",{value:"",children:"Select Business Type"}),n.jsx("option",{value:"Seed Supplier",children:"Seed Supplier"}),n.jsx("option",{value:"Farmer Producer Group",children:"Farmer Producer Group"}),n.jsx("option",{value:"Fertilizer Dealer",children:"Fertilizer Dealer"}),n.jsx("option",{value:"Machinery Supplier",children:"Machinery Supplier"})]}),n.jsx("input",{type:"text",name:"gstNumber",placeholder:"GST Number (Optional)",onChange:h}),n.jsx("textarea",{name:"address",placeholder:"Full Business Address",rows:"3",onChange:h,required:!0}),n.jsxs("div",{className:"row",children:[n.jsx("input",{type:"text",name:"city",placeholder:"City",onChange:h,required:!0}),n.jsx("input",{type:"text",name:"state",placeholder:"State",onChange:h,required:!0})]}),n.jsx("input",{type:"number",name:"pincode",placeholder:"Pincode",onChange:h,required:!0}),n.jsx("label",{children:"Upload Business Certificate (PDF/JPG/PNG)"}),n.jsx("input",{type:"file",onChange:b,required:!0}),n.jsx("label",{children:"Profile Image (Optional)"}),n.jsx("input",{type:"file",onChange:v}),n.jsx("button",{type:"submit",className:"reg-btn",disabled:s,children:s?"Registering...":"Register"})]})]}),n.jsx("style",{children:`
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
 */const lj=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oj=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,l,o)=>o?o.toUpperCase():l.toLowerCase()),qm=r=>{const s=oj(r);return s.charAt(0).toUpperCase()+s.slice(1)},gx=(...r)=>r.filter((s,l,o)=>!!s&&s.trim()!==""&&o.indexOf(s)===l).join(" ").trim(),cj=r=>{for(const s in r)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dj=w.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:u="",children:f,iconNode:p,...g},x)=>w.createElement("svg",{ref:x,...uj,width:s,height:s,stroke:r,strokeWidth:o?Number(l)*24/Number(s):l,className:gx("lucide",u),...!f&&!cj(g)&&{"aria-hidden":"true"},...g},[...p.map(([h,b])=>w.createElement(h,b)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=(r,s)=>{const l=w.forwardRef(({className:o,...u},f)=>w.createElement(dj,{ref:f,iconNode:s,className:gx(`lucide-${lj(qm(r))}`,`lucide-${r}`,o),...u}));return l.displayName=qm(r),l};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fj=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Vm=Ae("arrow-down",fj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pj=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],Gm=Ae("arrow-up-down",pj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hj=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Qm=Ae("arrow-up",hj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Ju=Ae("bell",mj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],xj=Ae("bookmark",gj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bj=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],xx=Ae("chevron-left",bj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yj=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],bx=Ae("chevron-right",yj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vj=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Wu=Ae("circle-check-big",vj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]],wj=Ae("circle-pause",jj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],yx=Ae("circle-plus",Aj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Nj=Ae("circle-user-round",Sj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],Cj=Ae("circle-user",Ej);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],vx=Ae("circle-x",zj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oj=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],jx=Ae("clipboard-list",Oj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Tj=Ae("clock-4",kj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rj=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Mj=Ae("clock",Rj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bj=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Dj=Ae("funnel",Bj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lj=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Uj=Ae("heart",Lj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],wx=Ae("info",Hj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qj=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Ax=Ae("layout-dashboard",qj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vj=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],_u=Ae("log-out",Vj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gj=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Sx=Ae("menu",Gj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qj=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Yj=Ae("message-circle",Qj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kj=[["path",{d:"M5 12h14",key:"1ays0h"}]],Fj=Ae("minus",Kj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Zj=Ae("moon",Pj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xj=[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]],Nx=Ae("package-check",Xj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ij=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],$u=Ae("package",Ij);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jj=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Wj=Ae("pen",Jj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],$j=Ae("phone-call",_j);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Ex=Ae("phone",ew);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],aw=Ae("plus",tw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],iw=Ae("save",nw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],sw=Ae("search",rw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Cx=Ae("settings",lw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],cw=Ae("shopping-bag",ow);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],dw=Ae("smartphone",uw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],zx=Ae("square-pen",fw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],hw=Ae("sun",pw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],ed=Ae("trash-2",mw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],td=Ae("truck",gw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],bw=Ae("user-check",xw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m14.305 16.53.923-.382",key:"1itpsq"}],["path",{d:"m15.228 13.852-.923-.383",key:"eplpkm"}],["path",{d:"m16.852 12.228-.383-.923",key:"13v3q0"}],["path",{d:"m16.852 17.772-.383.924",key:"1i8mnm"}],["path",{d:"m19.148 12.228.383-.923",key:"1q8j1v"}],["path",{d:"m19.53 18.696-.382-.924",key:"vk1qj3"}],["path",{d:"m20.772 13.852.924-.383",key:"n880s0"}],["path",{d:"m20.772 16.148.924.383",key:"1g6xey"}],["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],vw=Ae("user-cog",yw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],ww=Ae("user-x",jw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ox=Ae("user",Aw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Nw=Ae("users",Sw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],kx=Ae("wrench",Ew);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zw=Ae("x",Cw);function Ow(){return n.jsxs("header",{className:"vendor-navbar",children:[n.jsx("div",{className:"left",children:n.jsx("h2",{children:"🌿 Vendor Dashboard"})}),n.jsxs("div",{className:"right",children:[n.jsxs("button",{className:"add-btn",children:[n.jsx(yx,{size:18}),"Add Product"]}),n.jsxs("div",{className:"icon-badge",children:[n.jsx(Ju,{size:20}),n.jsx("span",{className:"badge",children:"3"})]}),n.jsxs("div",{className:"profile",children:[n.jsx(Cj,{size:26}),"GreenGrow Traders"]})]}),n.jsx("style",{jsx:"true",children:`
        .vendor-navbar {
          height: 70px;                           /* IMPORTANT */
          background: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 5000;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        }

        .left h2 {
          font-size: 20px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .right {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .add-btn {
          background: #1f7a0a;
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          border: none;
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
        }

        .icon-badge {
          position: relative;
        }

        .badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: red;
          color: white;
          font-size: 10px;
          padding: 2px 5px;
          border-radius: 8px;
        }

        .profile {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
        }
      `})]})}function kw(){const r=ca(),s=ga(),[l,o]=w.useState(!1),[u,f]=w.useState(!0);w.useEffect(()=>{const h=window.matchMedia("(max-width: 992px)"),b=v=>{const E=v.matches;o(E),f(!E)};return b(h),h.addEventListener?.("change",b),h.addListener?.(b),()=>{h.removeEventListener?.("change",b),h.removeListener?.(b)}},[]),w.useEffect(()=>{l&&f(!1)},[s.pathname,l]);const p=()=>{sessionStorage.removeItem("vendorSession"),r("/vendor-login")},g=[{to:"/vendor/dashboard",icon:Ax,label:"Dashboard"},{to:"/vendor/products",icon:$u,label:"Products"},{to:"/vendor/orders",icon:jx,label:"Orders"},{to:"/vendor/profile",icon:Ox,label:"Profile"},{to:"/vendor/settings",icon:Cx,label:"Settings"}],x=[{to:"/vendor/about",icon:wx,label:"About Us"},{to:"/vendor/services",icon:kx,label:"Services"},{to:"/vendor/contact",icon:Ex,label:"Contact Us"}];return n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"hamburger",onClick:()=>f(h=>!h),"aria-label":u?"Close sidebar":"Open sidebar",children:u?n.jsx(zw,{size:20}):n.jsx(Sx,{size:20})}),l&&u&&n.jsx("div",{className:"overlay",onClick:()=>f(!1)}),n.jsxs("aside",{className:`vendor-sidebar ${u?"open":"closed"}`,children:[n.jsxs("div",{className:"sidebar-header",children:[n.jsx("div",{className:"logo",children:"🌿"}),n.jsx("h2",{className:"title",children:"Vendor Panel"})]}),n.jsxs("nav",{className:"nav",children:[n.jsx("div",{className:"nav-group-title",children:"MAIN MENU"}),g.map(({to:h,icon:b,label:v})=>n.jsxs(wl,{to:h,onClick:()=>l&&f(!1),className:({isActive:E})=>`nav-item ${E?"active":""}`,children:[n.jsx(b,{size:18}),n.jsx("span",{children:v})]},h)),n.jsx("div",{className:"nav-group-title",style:{marginTop:"10px"},children:"MORE"}),x.map(({to:h,icon:b,label:v})=>n.jsxs(wl,{to:h,onClick:()=>l&&f(!1),className:({isActive:E})=>`nav-item ${E?"active":""}`,children:[n.jsx(b,{size:18}),n.jsx("span",{children:v})]},h))]}),n.jsx("div",{className:"bottom",children:n.jsxs("button",{className:"logout",onClick:p,children:[n.jsx(_u,{size:16})," Logout"]})})]}),n.jsx("style",{jsx:"true",children:`
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
      `})]})}function Tw(){return n.jsxs("div",{className:"vendor-layout",children:[n.jsx("header",{className:"vendor-navbar",children:n.jsx(Ow,{})}),n.jsxs("div",{className:"vendor-body",children:[n.jsx("div",{className:"vendor-sidebar-wrapper",children:n.jsx(kw,{})}),n.jsx("main",{className:"vendor-content",children:n.jsx(jg,{})})]}),n.jsx("style",{jsx:"true",children:`
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
      `})]})}const Rw=()=>{const r=[{label:"Mon",value:12},{label:"Tue",value:18},{label:"Wed",value:10},{label:"Thu",value:25},{label:"Fri",value:30},{label:"Sat",value:20},{label:"Sun",value:15}],s=[{name:"Organic Fertilizer",sales:240},{name:"Hybrid Tomato Seeds",sales:190},{name:"Power Sprayer",sales:160},{name:"Wheat Seeds",sales:120}];return n.jsxs("div",{className:"vendor-dashboard",children:[n.jsxs("section",{className:"header-section",children:[n.jsx("div",{className:"welcome",children:"Welcome, Raju 👋"}),n.jsx("h1",{className:"heading",children:"Vendor Overview"}),n.jsx("p",{className:"sub",children:"Your business performance insights this week."})]}),n.jsxs("section",{className:"stats",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"icon",children:"🌾"}),n.jsx("h4",{children:"Products"}),n.jsx("p",{children:"18"}),n.jsx("span",{className:"delta",children:"+5%"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"icon",children:"🛒"}),n.jsx("h4",{children:"Orders"}),n.jsx("p",{children:"45"}),n.jsx("span",{className:"delta",children:"+12%"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"icon",children:"💰"}),n.jsx("h4",{children:"Earnings"}),n.jsx("p",{children:"₹42,000"}),n.jsx("span",{className:"delta",children:"+8%"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"icon",children:"⭐"}),n.jsx("h4",{children:"Rating"}),n.jsx("p",{children:"4.6 / 5"}),n.jsx("span",{className:"delta",children:"+0.2"})]})]}),n.jsxs("section",{className:"cards",children:[n.jsxs("div",{className:"panel",children:[n.jsxs("div",{className:"panel-head",children:[n.jsx("h3",{children:"Weekly Sales"}),n.jsx("span",{className:"hint",children:"Last 7 days"})]}),n.jsx("div",{className:"bar-chart",children:r.map(l=>n.jsxs("div",{className:"bar-wrap",children:[n.jsx("div",{className:"bar",style:{height:`${l.value*6}px`},title:`${l.label}: ${l.value} orders`}),n.jsx("span",{className:"lbl",children:l.label})]},l.label))})]}),n.jsxs("div",{className:"panel",children:[n.jsxs("div",{className:"panel-head",children:[n.jsx("h3",{children:"Top Selling Products"}),n.jsx("span",{className:"hint",children:"Based on order volume"})]}),n.jsx("ul",{className:"list",children:s.map(l=>n.jsxs("li",{className:"li",children:[n.jsx("span",{children:l.name}),n.jsx("span",{className:"pill",children:l.sales})]},l.name))})]})]}),n.jsx("style",{jsx:"true",children:`
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
      `})]})};function Mw({products:r,onView:s,onEdit:l,onDelete:o}){return n.jsxs("section",{className:"product-grid",children:[r.length>0?r.map(u=>n.jsxs("div",{className:"product-card",children:[n.jsx("div",{className:"image-wrapper",onClick:()=>s(u),children:n.jsx("img",{src:u.image||"https://via.placeholder.com/400x300?text=No+Image",alt:u.name,className:"product-image"})}),n.jsxs("div",{className:"product-info",children:[n.jsx("h4",{onClick:()=>s(u),children:u.name}),n.jsx("p",{className:"category",children:u.category}),n.jsxs("div",{className:"meta",children:[n.jsxs("span",{className:"price",children:["₹",u.price]}),n.jsxs("span",{className:"stock",children:["Stock: ",u.stock]})]})]}),n.jsxs("div",{className:"actions",children:[n.jsx("button",{className:"edit-btn",onClick:()=>l(u),children:"✏️ Edit"}),n.jsx("button",{className:"delete-btn",onClick:()=>o(u.id),children:"🗑️ Delete"})]})]},u.id)):n.jsx("p",{className:"no-products",children:"No products to display."}),n.jsx("style",{jsx:"true",children:`
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
      `})]})}function Bw({product:r,onClose:s,onEdit:l,onDelete:o}){return r?n.jsx("div",{className:"overlay",children:n.jsxs("div",{className:"details-card",children:[n.jsx("div",{className:"image-section",children:n.jsx("img",{src:r.image||"https://via.placeholder.com/300",alt:r.name,className:"product-img"})}),n.jsxs("div",{className:"info-section",children:[n.jsx("h3",{children:r.name}),n.jsxs("p",{children:[n.jsx("strong",{children:"Category:"})," ",r.category]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Price:"})," ₹",r.price]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Stock:"})," ",r.stock]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Description:"})," ",r.description||"No description available."]}),n.jsxs("div",{className:"actions",children:[n.jsx("button",{className:"edit",onClick:()=>l(r),children:"✏️ Edit"}),n.jsx("button",{className:"delete",onClick:()=>o(r.id),children:"🗑️ Delete"}),n.jsx("button",{className:"close",onClick:s,children:"❌ Close"})]})]}),n.jsx("style",{jsx:"true",children:`
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
        `})]})}):null}function Dw({formData:r,setFormData:s,onSubmit:l,onCancel:o,editMode:u}){const f=w.useRef(),p=g=>{const x=g.target.files[0];if(x){const h=new FileReader;h.onload=()=>s({...r,image:h.result}),h.readAsDataURL(x)}};return n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("h3",{children:u?"Edit Product":"Add New Product"}),n.jsxs("form",{onSubmit:l,children:[n.jsx("input",{type:"text",placeholder:"Product Name",value:r.name,onChange:g=>s({...r,name:g.target.value}),required:!0}),n.jsx("input",{type:"text",placeholder:"Category",value:r.category,onChange:g=>s({...r,category:g.target.value}),required:!0}),n.jsx("input",{type:"number",placeholder:"Price (₹)",value:r.price,onChange:g=>s({...r,price:g.target.value}),required:!0}),n.jsx("input",{type:"number",placeholder:"Stock Quantity",value:r.stock,onChange:g=>s({...r,stock:g.target.value}),required:!0}),n.jsx("textarea",{placeholder:"Product Description",value:r.description,onChange:g=>s({...r,description:g.target.value})}),n.jsxs("div",{className:"upload-section",children:[n.jsx("label",{children:"Upload Product Image:"}),n.jsx("input",{type:"file",accept:"image/*",ref:f,onChange:p}),r.image&&n.jsx("img",{src:r.image,alt:"preview",className:"preview"})]}),n.jsxs("div",{className:"form-actions",children:[n.jsx("button",{type:"submit",children:u?"Update Product":"Add Product"}),n.jsx("button",{type:"button",onClick:o,children:"Cancel"})]})]}),n.jsx("style",{jsx:"true",children:`
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
        `})]})})}function Lw(){const[r,s]=w.useState([]),[l,o]=w.useState(null),[u,f]=w.useState(!1),[p,g]=w.useState(!1),[x,h]=w.useState({name:"",category:"",price:"",stock:"",description:"",image:""});w.useEffect(()=>{bu().then(s)},[]);const b=async O=>{O.preventDefault(),p&&l?await nj(l.id,x):await aj(x);const z=await bu();s(z),f(!1),g(!1),o(null),h({name:"",category:"",price:"",stock:"",description:"",image:""})},v=O=>{o(O),h(O),g(!0),f(!0)},E=O=>{o(O)},S=async O=>{if(window.confirm("Are you sure you want to delete this product?")){await ij(O);const z=await bu();s(z),o(null)}},j=()=>{h({name:"",category:"",price:"",stock:"",description:"",image:""}),g(!1),f(!0)};return n.jsxs("div",{className:"vendor-layout",children:[n.jsx("div",{className:"sidebar-area"}),n.jsxs("div",{className:"main-content",children:[n.jsxs("header",{className:"page-header",children:[n.jsx("h2",{children:"Vendor Product Management"}),n.jsx("p",{children:"Manage, edit, and track your listed products easily."}),n.jsx("button",{className:"add-btn",onClick:j,children:"➕ Add Product"})]}),n.jsx(Mw,{products:r,onView:E,onEdit:v,onDelete:S}),l&&!u&&n.jsx(Bw,{product:l,onClose:()=>o(null),onEdit:()=>v(l),onDelete:S}),u&&n.jsx(Dw,{formData:x,setFormData:h,onSubmit:b,onCancel:()=>f(!1),editMode:p})]}),n.jsx("style",{jsx:"true",children:`
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
      `})]})}function Uw(){const[r,s]=w.useState(""),l=[{id:"ORD-1001",customer:"Rahul Sharma",amount:1899,status:"Pending",date:"2025-02-10"},{id:"ORD-1002",customer:"Priya Verma",amount:2999,status:"Shipped",date:"2025-02-09"},{id:"ORD-1003",customer:"Arun Kumar",amount:1199,status:"Delivered",date:"2025-02-08"},{id:"ORD-1004",customer:"Meghana Rao",amount:899,status:"Cancelled",date:"2025-02-07"},{id:"ORD-1005",customer:"Suresh R",amount:2499,status:"Delivered",date:"2025-02-06"}],o={Pending:"#eab308",Shipped:"#3b82f6",Delivered:"#16a34a",Cancelled:"#dc2626"};return n.jsxs("div",{className:"orders-page",children:[n.jsxs("div",{className:"header",children:[n.jsx("h1",{children:"📦 Orders"}),n.jsx("p",{children:"Manage your orders, view details, update statuses, and track progress."})]}),n.jsxs("div",{className:"actions",children:[n.jsxs("div",{className:"search-box",children:[n.jsx(sw,{size:18}),n.jsx("input",{type:"text",placeholder:"Search by Order ID or Customer Name...",value:r,onChange:u=>s(u.target.value)})]}),n.jsxs("button",{className:"filter-btn",children:[n.jsx(Dj,{size:18}),"Filter"]})]}),n.jsx("div",{className:"table-wrapper",children:n.jsxs("table",{className:"order-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Order ID"}),n.jsx("th",{children:"Customer"}),n.jsx("th",{children:"Amount"}),n.jsx("th",{children:"Status"}),n.jsx("th",{children:"Date"}),n.jsx("th",{children:"Action"})]})}),n.jsx("tbody",{children:l.filter(u=>u.id.toLowerCase().includes(r.toLowerCase())||u.customer.toLowerCase().includes(r.toLowerCase())).map(u=>n.jsxs("tr",{children:[n.jsx("td",{children:u.id}),n.jsx("td",{children:u.customer}),n.jsxs("td",{children:["₹",u.amount]}),n.jsx("td",{children:n.jsx("span",{className:"status",style:{background:o[u.status]+"22",color:o[u.status],border:`1px solid ${o[u.status]}55`},children:u.status})}),n.jsx("td",{children:u.date}),n.jsx("td",{children:n.jsx("button",{className:"view-btn",children:"View"})})]},u.id))})]})}),n.jsxs("div",{className:"pagination",children:[n.jsx("button",{className:"page-btn",children:n.jsx(xx,{size:18})}),n.jsx("span",{className:"page-number",children:"1"}),n.jsx("button",{className:"page-btn",children:n.jsx(bx,{size:18})})]}),n.jsx("style",{jsx:"true",children:`
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
      `})]})}function Hw(){const[r,s]=w.useState({name:"GreenGrow Traders",email:"vendor@grow.com",phone:"9876543210",shopName:"GreenGrow Organic Store",address:"Hyderabad, Telangana",gst:"22ABCDE1234F2Z5"}),[l,o]=w.useState(!1),[u,f]=w.useState(!1),[p,g]=w.useState(r),x=v=>{g({...p,[v.target.name]:v.target.value})},h=()=>{s(p),o(!1)},b=()=>{console.log("Vendor Account Deactivated!"),alert("Vendor account has been deactivated."),f(!1)};return n.jsxs("div",{className:"profile-page",children:[n.jsx("h1",{className:"title",children:"👤 Vendor Profile"}),n.jsx("p",{className:"subtitle",children:"View and manage your vendor profile information."}),n.jsxs("div",{className:"profile-card",children:[n.jsxs("div",{className:"avatar-section",children:[n.jsx("div",{className:"avatar",children:n.jsx("img",{src:"https://i.ibb.co/3kL4m7x/profile-avatar.png",alt:"Vendor Avatar"})}),n.jsx("h2",{children:r.name}),n.jsx("p",{className:"shop",children:r.shopName})]}),n.jsxs("div",{className:"details",children:[n.jsxs("div",{className:"info-row",children:[n.jsx("strong",{children:"Email:"}),n.jsx("span",{children:r.email})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("strong",{children:"Phone:"}),n.jsx("span",{children:r.phone})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("strong",{children:"Shop Name:"}),n.jsx("span",{children:r.shopName})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("strong",{children:"Address:"}),n.jsx("span",{children:r.address})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("strong",{children:"GST Number:"}),n.jsx("span",{children:r.gst})]}),n.jsxs("div",{className:"actions",children:[n.jsxs("button",{className:"edit-btn",onClick:()=>o(!0),children:[n.jsx(Wj,{size:16})," Edit Profile"]}),n.jsxs("button",{className:"deactivate-btn",onClick:()=>f(!0),children:[n.jsx(vx,{size:16})," Deactivate Account"]})]})]})]}),l&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("h2",{children:"Edit Profile"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{name:"name",value:p.name,onChange:x})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Email"}),n.jsx("input",{name:"email",value:p.email,onChange:x})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Phone"}),n.jsx("input",{name:"phone",value:p.phone,onChange:x})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Shop Name"}),n.jsx("input",{name:"shopName",value:p.shopName,onChange:x})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Address"}),n.jsx("textarea",{name:"address",value:p.address,onChange:x,rows:"2"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"GST Number"}),n.jsx("input",{name:"gst",value:p.gst,onChange:x})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"save-btn",onClick:h,children:"Save Changes"}),n.jsx("button",{className:"cancel-btn",onClick:()=>o(!1),children:"Cancel"})]})]})}),u&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal small",children:[n.jsx("h3",{children:"Are you sure?"}),n.jsx("p",{children:"This action will permanently deactivate your vendor account."}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"danger-btn",onClick:b,children:"Yes, Deactivate"}),n.jsx("button",{className:"cancel-btn",onClick:()=>f(!1),children:"Cancel"})]})]})}),n.jsx("style",{jsx:"true",children:`
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
      `})]})}function Ym(){const[r,s]=w.useState({businessName:"GreenGrow Traders",email:"vendor@grow.com",phone:"9876543210"}),[l,o]=w.useState({currentPwd:"",newPwd:"",confirmPwd:""}),[u,f]=w.useState({email:!0,sms:!1}),[p,g]=w.useState(!1),[x,h]=w.useState(!1);function b(z){s(H=>({...H,[z.target.name]:z.target.value}))}function v(z){o(H=>({...H,[z.target.name]:z.target.value}))}function E(z){f(H=>({...H,[z]:!H[z]}))}function S(){h(!0),setTimeout(()=>{h(!1),alert("Account settings saved.")},700)}function j(){if(!l.currentPwd||!l.newPwd){alert("Please fill required password fields.");return}if(l.newPwd!==l.confirmPwd){alert("New password and confirm password do not match.");return}h(!0),setTimeout(()=>{h(!1),o({currentPwd:"",newPwd:"",confirmPwd:""}),alert("Password updated successfully.")},900)}function O(){h(!0),setTimeout(()=>{h(!1),alert("Preferences saved.")},600)}return n.jsxs("div",{className:"settings-page",children:[n.jsxs("header",{className:"header",children:[n.jsx("h1",{children:"⚙️ Settings"}),n.jsx("p",{children:"Manage account, security and notifications for your vendor account."})]}),n.jsxs("div",{className:"grid",children:[n.jsxs("section",{className:"card",children:[n.jsx("h2",{children:"Account"}),n.jsx("p",{className:"muted",children:"Basic business contact information."}),n.jsxs("div",{className:"form",children:[n.jsxs("label",{children:["Business Name",n.jsx("input",{name:"businessName",value:r.businessName,onChange:b})]}),n.jsxs("label",{children:["Email",n.jsx("input",{name:"email",value:r.email,onChange:b})]}),n.jsxs("label",{children:["Phone",n.jsx("input",{name:"phone",value:r.phone,onChange:b})]}),n.jsx("div",{className:"row",children:n.jsxs("button",{className:"btn primary",onClick:S,disabled:x,children:[n.jsx(iw,{size:14})," ",x?"Saving...":"Save Account"]})})]})]}),n.jsxs("section",{className:"card",children:[n.jsx("h2",{children:"Security"}),n.jsx("p",{className:"muted",children:"Change your password to keep your account secure."}),n.jsxs("div",{className:"form",children:[n.jsxs("label",{children:["Current Password",n.jsx("input",{name:"currentPwd",type:"password",value:l.currentPwd,onChange:v})]}),n.jsxs("label",{children:["New Password",n.jsx("input",{name:"newPwd",type:"password",value:l.newPwd,onChange:v})]}),n.jsxs("label",{children:["Confirm New Password",n.jsx("input",{name:"confirmPwd",type:"password",value:l.confirmPwd,onChange:v})]}),n.jsx("div",{className:"row",children:n.jsx("button",{className:"btn danger",onClick:j,children:"Change Password"})})]})]}),n.jsxs("section",{className:"card",children:[n.jsx("h2",{children:"Notifications & Preferences"}),n.jsx("p",{className:"muted",children:"Control how you receive notifications and app preferences."}),n.jsxs("div",{className:"form",children:[n.jsxs("div",{className:"toggle-row",children:[n.jsxs("div",{className:"label",children:[n.jsx(Ju,{})," Email Notifications"]}),n.jsxs("label",{className:"switch",children:[n.jsx("input",{type:"checkbox",checked:u.email,onChange:()=>E("email")}),n.jsx("span",{className:"slider"})]})]}),n.jsxs("div",{className:"toggle-row",children:[n.jsxs("div",{className:"label",children:[n.jsx(dw,{})," SMS Notifications"]}),n.jsxs("label",{className:"switch",children:[n.jsx("input",{type:"checkbox",checked:u.sms,onChange:()=>E("sms")}),n.jsx("span",{className:"slider"})]})]}),n.jsxs("div",{className:"toggle-row",children:[n.jsx("div",{className:"label",children:"Theme"}),n.jsxs("button",{className:"theme-toggle",onClick:()=>g(z=>!z),children:[p?n.jsx(Zj,{}):n.jsx(hw,{})," ",p?"Dark":"Light"]})]}),n.jsx("div",{className:"row",children:n.jsx("button",{className:"btn",onClick:O,children:"Save Preferences"})})]})]})]}),n.jsx("style",{jsx:"true",children:`
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
      `})]})}const qw=[{email:"admin@gmail.com",phone:"1234567890",password:"123",firstName:"Super"}],Vw=(r,s)=>{const l=qw.find(o=>(o.email===r||o.phone===r)&&o.password===s);if(!l)throw new Error("Invalid admin credentials.");return l},Gw=()=>{const[r,s]=w.useState(!0),[l,o]=w.useState(!1),[u,f]=w.useState(""),[p,g]=w.useState(""),[x,h]=w.useState(""),[b,v]=w.useState(!1),E=ca(),S=async j=>{j.preventDefault(),h(""),v(!0);try{const O=Vw(u,p);alert(`Welcome Admin ${O.firstName}!`),E("/admin")}catch(O){h(O.message)}finally{v(!1)}};return n.jsxs(n.Fragment,{children:[n.jsx(Yn,{}),n.jsx("div",{style:{paddingTop:"120px"},children:n.jsxs("div",{className:"login-container",children:[n.jsxs("div",{className:"login-card",children:[n.jsx("h2",{children:"Admin Login"}),n.jsx("p",{children:"Access admin control panel & manage the system"}),n.jsxs("div",{className:"login-toggle",children:[n.jsx("button",{className:r?"active":"",onClick:()=>s(!0),children:"Email Login"}),n.jsx("button",{className:r?"":"active",onClick:()=>s(!1),children:"Phone Login"})]}),n.jsxs("form",{className:"login-form",onSubmit:S,children:[n.jsx("input",{type:r?"email":"tel",placeholder:r?"Enter admin email":"Enter admin phone",value:u,onChange:j=>f(j.target.value),required:!0}),n.jsxs("div",{className:"password-field",children:[n.jsx("input",{type:l?"text":"password",placeholder:"Enter admin password",value:p,onChange:j=>g(j.target.value),required:!0}),n.jsx("span",{className:"toggle-password",onClick:()=>o(!l),children:l?"Hide":"Show"})]}),x&&n.jsx("p",{className:"error-text",children:x}),n.jsx("button",{type:"submit",className:"login-btn",disabled:b,children:b?"Logging in...":"Login"})]}),n.jsx("div",{className:"divider",children:n.jsx("span",{children:"OR"})}),n.jsxs("div",{className:"sso-icons",children:[n.jsx("a",{className:"sso-btn google",children:n.jsx(Qu,{size:22})}),n.jsx("a",{className:"sso-btn github",children:n.jsx(Ku,{size:20})}),n.jsx("a",{className:"sso-btn facebook",children:n.jsx(Yu,{size:20})}),n.jsx("a",{className:"sso-btn linkedin",children:n.jsx(Fu,{size:20})})]}),n.jsxs("p",{className:"signup-text",children:["Need an Admin Account? ",n.jsx(oe,{to:"/admin-register",children:"Create One"})]})]}),n.jsx("style",{children:`
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
          `})]})})]})};function Qw({setSidebarOpen:r}){return n.jsxs("header",{className:"admin-navbar-inner",children:[n.jsxs("div",{className:"nav-left",children:[n.jsx("button",{className:"menu-btn",onClick:()=>r(o=>!o),children:n.jsx(Sx,{size:22})}),n.jsx("h2",{children:"🛡️ Admin Dashboard"})]}),n.jsxs("div",{className:"nav-right",children:[n.jsxs("div",{className:"icon-btn",children:[n.jsx(Ju,{size:20}),n.jsx("span",{className:"badge",children:5})]}),n.jsxs("div",{className:"admin-profile",children:[n.jsx(Nj,{size:28}),n.jsx("span",{className:"name",children:"Administrator"})]}),n.jsxs("button",{className:"logout-btn",children:[n.jsx(_u,{size:18})," Logout"]})]}),n.jsx("style",{jsx:"true",children:`
        .admin-navbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 24px;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
        }

        .menu-btn:hover {
          background: #f2f4f7;
        }

        .nav-left h2 {
          margin: 0;
          color: #0d47a1;
          font-weight: 800;
          font-size: 1.2rem;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .icon-btn {
          position: relative;
          cursor: pointer;
        }

        .badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: red;
          color: white;
          padding: 2px 5px;
          border-radius: 50%;
          font-size: 10px;
        }

        .admin-profile {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #0d47a1;
          font-weight: 600;
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #c53030;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 8px;
          font-weight: 600;
        }

        .logout-btn:hover {
          background: #a72626;
        }
      `})]})}function Yw(){const r=ca(),s=()=>{localStorage.removeItem("adminToken"),r("/admin-login")};return n.jsxs("div",{className:"admin-sidebar",children:[n.jsx("div",{className:"sidebar-header",children:n.jsx("h2",{children:"Admin Panel"})}),n.jsx("div",{className:"menu-section-title",children:"MAIN MENU"}),n.jsxs("nav",{className:"menu-list",children:[n.jsx(Ya,{to:"/admin/dashboard",icon:n.jsx(Ax,{size:18}),label:"Dashboard"}),n.jsx(Ya,{to:"/admin/users",icon:n.jsx(Nw,{size:18}),label:"Users"}),n.jsx(Ya,{to:"/admin/vendors",icon:n.jsx(vw,{size:18}),label:"Vendors"}),n.jsx(Ya,{to:"/admin/products",icon:n.jsx($u,{size:18}),label:"Products"}),n.jsx(Ya,{to:"/admin/orders",icon:n.jsx(jx,{size:18}),label:"Orders"}),n.jsx(Ya,{to:"/admin/settings",icon:n.jsx(Cx,{size:18}),label:"Settings"}),n.jsx(Ya,{to:"/admin/services",icon:n.jsx(kx,{size:18}),label:"Services"})]}),n.jsx("div",{className:"menu-section-title",style:{marginTop:"20px"},children:"MORE"}),n.jsxs("nav",{className:"menu-list",children:[n.jsx(Ya,{to:"/admin/about",icon:n.jsx(wx,{size:18}),label:"About Us"}),n.jsx(Ya,{to:"/admin/support",icon:n.jsx($j,{size:18}),label:"Support"})]}),n.jsx("div",{className:"logout-container",children:n.jsxs("button",{className:"logout-btn",onClick:s,children:[n.jsx(_u,{size:18})," Logout"]})}),n.jsx("style",{jsx:"true",children:`
        .admin-sidebar {
          height: 100%;
          width: 100%;
          background: #0d1b2a;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          padding: 20px 0;
        }

        .sidebar-header {
          padding: 0 22px 20px;
        }

        .sidebar-header h2 {
          font-size: 1.3rem;
          margin: 0;
          font-weight: 700;
        }

        .menu-section-title {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 5px 22px;
          color: #9db4c0;
        }

        .menu-list {
          display: flex;
          flex-direction: column;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 22px;
          margin: 4px 12px;
          color: #e6edf5;
          border-radius: 8px;
          text-decoration: none;
        }

        .menu-item:hover {
          background: #1b2b40;
        }

        .menu-item.active {
          background: #1e3a5f;
        }

        .logout-container {
          margin-top: auto;
          padding: 20px;
        }

        .logout-btn {
          width: 100%;
          padding: 10px;
          font-weight: 600;
          background: white;
          color: #c53030;
          border-radius: 10px;
          border: none;
        }
      `})]})}function Ya({to:r,icon:s,label:l}){return n.jsxs(wl,{to:r,className:({isActive:o})=>o?"menu-item active":"menu-item",children:[s,n.jsx("span",{children:l})]})}function Kw(){const[r,s]=w.useState(!0);return n.jsxs("div",{className:"admin-layout",children:[n.jsx("header",{className:"admin-navbar",children:n.jsx(Qw,{setSidebarOpen:s})}),n.jsxs("div",{className:"admin-body",children:[n.jsx("aside",{className:`admin-sidebar-container ${r?"open":"closed"}`,children:n.jsx(Yw,{})}),n.jsx("main",{className:`admin-content ${r?"with-sidebar":"full-width"}`,children:n.jsx(jg,{})})]}),n.jsx("style",{jsx:"true",children:`
        :root {
          --admin-sidebar-width: 230px;
          --admin-navbar-height: 70px;
        }

        .admin-layout {
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #eef3ff;
          overflow: hidden;
        }

        .admin-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--admin-navbar-height);
          z-index: 2000;
        }

        .admin-body {
          display: flex;
          flex: 1;
          margin-top: var(--admin-navbar-height);
          height: calc(100vh - var(--admin-navbar-height));
        }

       /* SLIDING SIDEBAR */
.admin-sidebar-container {
  width: var(--admin-sidebar-width);
  min-width: var(--admin-sidebar-width);
  transition: all 0.3s ease-in-out;
  overflow-y: auto;
  background: #0d1b2a;
}

/* Sidebar CLOSED → width becomes 0 */
.admin-sidebar-container.closed {
  width: 0;
  min-width: 0;
  overflow: hidden;
}


        .admin-sidebar-container.open {
          transform: translateX(0);
        }

        /* CONTENT AREA RESPONSIVE SHIFT */
        .admin-content {
  flex: 1;
  background: #ffffff;
  padding: 25px 32px;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
}


        .admin-content.with-sidebar {
          margin-left: 0; /* no need margin because sidebar is inside flex */
        }

        .admin-content.full-width {
          margin-left: 0;
        }

        @media (max-width: 768px) {
          .admin-content {
            padding: 15px 20px;
          }
        }
      `})]})}function Fw(){return n.jsxs("div",{className:"admin-dashboard",children:[n.jsx("h1",{className:"dashboard-title",children:"Dashboard"}),n.jsxs("div",{className:"cards-container",children:[n.jsxs("div",{className:"card",children:[n.jsx("div",{className:"card-title",children:"Total Users"}),n.jsx("div",{className:"card-value",children:"120"})]}),n.jsxs("div",{className:"card",children:[n.jsx("div",{className:"card-title",children:"Total Vendors"}),n.jsx("div",{className:"card-value",children:"45"})]}),n.jsxs("div",{className:"card",children:[n.jsx("div",{className:"card-title",children:"Total Orders"}),n.jsx("div",{className:"card-value",children:"540"})]}),n.jsxs("div",{className:"card",children:[n.jsx("div",{className:"card-title",children:"Active Users"}),n.jsx("div",{className:"card-value",children:"67"})]})]}),n.jsx("style",{children:`
        .admin-dashboard {
          width: 100%;
          padding: 20px;
        }

        .dashboard-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        /* Cards Grid */
        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .card {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease-in-out;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
        }

        .card-value {
          font-size: 26px;
          font-weight: 700;
          margin-top: 10px;
        }

        /* -----------------------------------
          MEDIA QUERIES FOR RESPONSIVENESS
        ------------------------------------*/

        /* Tablets (768px - 1024px) */
        @media (max-width: 1024px) {
          .dashboard-title {
            font-size: 22px;
          }
          .card {
            padding: 18px;
          }
          .card-value {
            font-size: 24px;
          }
        }

        /* Mobile Large (600px - 768px) */
        @media (max-width: 768px) {
          .cards-container {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
          .dashboard-title {
            font-size: 20px;
          }
          .card-title {
            font-size: 16px;
          }
          .card-value {
            font-size: 22px;
          }
        }

        /* Mobile Small (Below 480px) */
        @media (max-width: 480px) {
          .admin-dashboard {
            padding: 10px;
          }
          .cards-container {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          .dashboard-title {
            font-size: 18px;
          }
          .card {
            padding: 15px;
            border-radius: 8px;
          }
          .card-title {
            font-size: 15px;
          }
          .card-value {
            font-size: 20px;
          }
        }
      `})]})}function Pw(){const[r,s]=w.useState([{id:1,name:"Ravi Kumar",email:"ravi@example.com",role:"Customer",status:"Active"},{id:2,name:"Meena Sharma",email:"meena@example.com",role:"Vendor",status:"Blocked"},{id:3,name:"Venu Gopal",email:"venu@example.com",role:"Customer",status:"Active"}]),[l,o]=w.useState(null),[u,f]=w.useState({name:"",email:"",role:""}),p=S=>{o(S),f({name:S.name,email:S.email,role:S.role})},g=()=>{s(S=>S.map(j=>j.id===l.id?{...j,...u}:j)),o(null)},x=S=>{window.confirm("Are you sure want to delete this user?")&&s(j=>j.filter(O=>O.id!==S))},h=S=>{s(j=>j.map(O=>O.id===S?{...O,status:O.status==="Active"?"Blocked":"Active"}:O))},b=r.length,v=r.filter(S=>S.status==="Active").length,E=r.filter(S=>S.status==="Blocked").length;return n.jsxs("div",{className:"users-page",children:[n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("h3",{children:"Total Users"}),n.jsx("p",{children:b})]}),n.jsxs("div",{className:"stat-card active-card",children:[n.jsx("h3",{children:"Active Users"}),n.jsx("p",{children:v})]}),n.jsxs("div",{className:"stat-card blocked-card",children:[n.jsx("h3",{children:"Blocked Users"}),n.jsx("p",{children:E})]})]}),n.jsxs("div",{className:"table-container",children:[n.jsx("h2",{children:"User Management"}),n.jsx("div",{className:"table-wrapper",children:n.jsxs("table",{className:"user-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"#ID"}),n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Email"}),n.jsx("th",{children:"Role"}),n.jsx("th",{children:"Status"}),n.jsx("th",{style:{textAlign:"center"},children:"Actions"})]})}),n.jsx("tbody",{children:r.map(S=>n.jsxs("tr",{children:[n.jsx("td",{children:S.id}),n.jsx("td",{children:S.name}),n.jsx("td",{children:S.email}),n.jsx("td",{children:S.role}),n.jsx("td",{children:n.jsx("span",{className:`status-badge ${S.status.toLowerCase()}`,children:S.status})}),n.jsxs("td",{className:"action-btns",children:[n.jsx("button",{className:"edit-btn",onClick:()=>p(S),children:n.jsx(zx,{size:18})}),n.jsx("button",{className:"status-btn",onClick:()=>h(S.id),children:S.status==="Active"?n.jsx(ww,{size:18}):n.jsx(bw,{size:18})}),n.jsx("button",{className:"delete-btn",onClick:()=>x(S.id),children:n.jsx(ed,{size:18})})]})]},S.id))})]})})]}),l&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-box",children:[n.jsx("h3",{children:"Edit User"}),n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:u.name,onChange:S=>f({...u,name:S.target.value})}),n.jsx("label",{children:"Email"}),n.jsx("input",{type:"email",value:u.email,onChange:S=>f({...u,email:S.target.value})}),n.jsx("label",{children:"Role"}),n.jsxs("select",{value:u.role,onChange:S=>f({...u,role:S.target.value}),children:[n.jsx("option",{children:"Customer"}),n.jsx("option",{children:"Vendor"}),n.jsx("option",{children:"Admin"})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"save-btn",onClick:g,children:"Save"}),n.jsx("button",{className:"cancel-btn",onClick:()=>o(null),children:"Cancel"})]})]})}),n.jsx("style",{jsx:"true",children:`
        .users-page {
          width: 100%;
          padding: 20px;
        }

        /* ========== STAT CARDS ========== */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .stat-card {
          background: #e3e8ff;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          font-weight: 700;
          color: #0d1b2a;
        }
        .active-card {
          background: #d1f7d6;
          color: #166534;
        }
        .blocked-card {
          background: #ffe5e5;
          color: #b91c1c;
        }

        /* ========== TABLE ========== */
        .table-container h2 {
          margin-bottom: 12px;
          font-size: 1.3rem;
          color: #0d1b2a;
        }

        .table-wrapper {
          overflow-x: auto; /* important for mobile */
        }

        .user-table {
          width: 100%;
          min-width: 700px;
          border-collapse: collapse;
          background: white;
          border-radius: 10px;
          overflow: hidden;
        }

        .user-table th,
        .user-table td {
          padding: 12px;
          border-bottom: 1px solid #e5e7eb;
          white-space: nowrap;
        }

        .status-badge {
          padding: 5px 10px;
          border-radius: 6px;
          font-weight: 600;
        }
        .status-badge.active {
          background: #d1f7d6;
          color: #166534;
        }
        .status-badge.blocked {
          background: #ffe5e5;
          color: #b91c1c;
        }

        .action-btns {
          display: flex;
          gap: 10px;
          justify-content: center;
        }

        .edit-btn, .delete-btn, .status-btn {
          border: none;
          background: #f0f0f0;
          padding: 6px;
          border-radius: 6px;
          cursor: pointer;
        }
        .delete-btn {
          background: #ffe5e5;
          color: #b91c1c;
        }

        /* ========== MODAL ========== */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        .modal-box {
          background: white;
          padding: 25px;
          width: 350px;
          max-width: 100%;
          border-radius: 10px;
        }

        input, select {
          width: 100%;
          padding: 8px;
          margin-bottom: 12px;
          border: 1px solid #cbd5e0;
          border-radius: 6px;
        }

        .modal-actions {
          display: flex;
          justify-content: space-between;
        }

        .save-btn {
          background: #2563eb;
          color: white;
          padding: 8px 14px;
          border-radius: 6px;
          border: none;
        }

        .cancel-btn {
          background: #ddd;
          padding: 8px 14px;
          border-radius: 6px;
          border: none;
        }

        /* ========== MEDIA QUERIES ========== */

        /* Tablet (768px–1024px) */
        @media (max-width: 1024px) {
          .stat-card { padding: 18px; }
          .user-table th, .user-table td { padding: 10px; }
        }

        /* Large Mobile (600px–768px) */
        @media (max-width: 768px) {
          .users-page { padding: 15px; }
          .stat-card h3 { font-size: 16px; }
          .stat-card p { font-size: 22px; }
        }

        /* Small Mobile (<480px) */
        @media (max-width: 480px) {
          .users-page { padding: 10px; }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .stat-card {
            padding: 16px;
          }

          .table-wrapper {
            overflow-x: scroll;
          }

          .modal-box {
            padding: 20px;
          }
        }
      `})]})}function Zw(){const r=ca(),[s,l]=w.useState([{id:1,name:"GreenGrow Traders",email:"green@grow.com",phone:"9876543210",company:"GreenGrow Pvt Ltd",status:"Pending"},{id:2,name:"FreshFarm Suppliers",email:"fresh@farm.com",phone:"9123456780",company:"FreshFarm Enterprises",status:"Approved"},{id:3,name:"AgriMart",email:"contact@agrimart.com",phone:"9988776655",company:"AgriMart Services",status:"Hold"},{id:4,name:"Farmers Best",email:"hello@farmersbest.com",phone:"9012345678",company:"Farmers Best Co",status:"Approved"},{id:5,name:"UrbanAgri",email:"info@urbanagri.com",phone:"9001122334",company:"UrbanAgri Pvt",status:"Rejected"}]),[o,u]=w.useState(""),[f,p]=w.useState("All"),[g,x]=w.useState({key:"id",dir:"desc"}),[h,b]=w.useState(1),[v,E]=w.useState(5),[S,j]=w.useState(null),[O,z]=w.useState(!1),[H,R]=w.useState({name:"",email:"",phone:"",company:"",status:"Pending"});w.useEffect(()=>b(1),[o,f,g,v]);const V=K=>{j(K),R(K)},re=()=>{l(K=>K.map(fe=>fe.id===S.id?H:fe)),j(null)},W=K=>{window.confirm("Delete vendor?")&&l(fe=>fe.filter(A=>A.id!==K))},le=(K,fe)=>{l(A=>A.map(U=>U.id===K?{...U,status:fe}:U))},te=()=>{const K=s.length?Math.max(...s.map(fe=>fe.id))+1:1;l([{id:K,...H},...s]),z(!1),R({name:"",email:"",phone:"",company:"",status:"Pending"})},ce=K=>r(`/admin/vendors/${K.id}`),ie=s.length,pe=s.filter(K=>K.status==="Approved").length,_=s.filter(K=>K.status==="Pending").length,X=s.filter(K=>K.status==="Rejected").length,ee=s.filter(K=>K.status==="Hold").length,ge=w.useMemo(()=>{const K=o.toLowerCase();return s.filter(fe=>f!=="All"&&fe.status!==f?!1:fe.name.toLowerCase().includes(K)||fe.email.toLowerCase().includes(K)||fe.phone.toLowerCase().includes(K)||fe.company.toLowerCase().includes(K)||fe.status.toLowerCase().includes(K))},[s,o,f]),Me=w.useMemo(()=>{let K=[...ge];return K.sort((fe,A)=>{let U=fe[g.key].toString().toLowerCase(),I=A[g.key].toString().toLowerCase();return U<I?g.dir==="asc"?-1:1:U>I?g.dir==="asc"?1:-1:0}),K},[ge,g]),T=Math.ceil(Me.length/v),J=Me.slice((h-1)*v,h*v),ue=K=>{x(fe=>({key:K,dir:fe.key===K&&fe.dir==="asc"?"desc":"asc"}))};return n.jsxs("div",{className:"vendor-page",children:[n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card total",children:[n.jsx("h3",{children:"Total Vendors"}),n.jsx("p",{children:ie})]}),n.jsxs("div",{className:"stat-card approved",children:[n.jsx("h3",{children:"Approved"}),n.jsx("p",{children:pe})]}),n.jsxs("div",{className:"stat-card pending",children:[n.jsx("h3",{children:"Pending"}),n.jsx("p",{children:_})]}),n.jsxs("div",{className:"stat-card rejected",children:[n.jsx("h3",{children:"Rejected"}),n.jsx("p",{children:X})]}),n.jsxs("div",{className:"stat-card hold",children:[n.jsx("h3",{children:"On Hold"}),n.jsx("p",{children:ee})]})]}),n.jsx("div",{className:"add-button-row",children:n.jsxs("button",{className:"add-btn",onClick:()=>z(!0),children:[n.jsx(yx,{size:16})," Add New Vendor"]})}),n.jsxs("div",{className:"controls-row",children:[n.jsx("input",{className:"search-input",placeholder:"Search vendor by name, email, phone, company, status...",value:o,onChange:K=>u(K.target.value)}),n.jsxs("select",{className:"filter",value:f,onChange:K=>p(K.target.value),children:[n.jsx("option",{children:"All"}),n.jsx("option",{children:"Approved"}),n.jsx("option",{children:"Pending"}),n.jsx("option",{children:"Rejected"}),n.jsx("option",{children:"Hold"})]}),n.jsxs("button",{className:"sort-btn",onClick:()=>ue("name"),children:["Name ",g.key==="name"?g.dir==="asc"?n.jsx(Qm,{}):n.jsx(Vm,{}):n.jsx(Gm,{})]}),n.jsxs("button",{className:"sort-btn",onClick:()=>ue("status"),children:["Status ",g.key==="status"?g.dir==="asc"?n.jsx(Qm,{}):n.jsx(Vm,{}):n.jsx(Gm,{})]})]}),n.jsx("div",{className:"table-wrapper",children:n.jsxs("table",{className:"vendor-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"#ID"}),n.jsx("th",{children:"Vendor"}),n.jsx("th",{children:"Email"}),n.jsx("th",{children:"Phone"}),n.jsx("th",{children:"Company"}),n.jsx("th",{children:"Status"}),n.jsx("th",{style:{textAlign:"center"},children:"Actions"})]})}),n.jsx("tbody",{children:J.map(K=>n.jsxs("tr",{children:[n.jsx("td",{children:K.id}),n.jsx("td",{children:n.jsxs("button",{className:`vendor-name ${K.status.toLowerCase()}`,onClick:()=>ce(K),children:[n.jsx(Ox,{size:14})," ",K.name]})}),n.jsx("td",{children:K.email}),n.jsx("td",{children:K.phone}),n.jsx("td",{children:K.company}),n.jsx("td",{children:n.jsx("span",{className:`badge ${K.status.toLowerCase()}`,children:K.status})}),n.jsxs("td",{className:"actions",children:[n.jsx("button",{className:"btn green",onClick:()=>le(K.id,"Approved"),children:n.jsx(Wu,{})}),n.jsx("button",{className:"btn yellow",onClick:()=>le(K.id,"Hold"),children:n.jsx(wj,{})}),n.jsx("button",{className:"btn red",onClick:()=>le(K.id,"Rejected"),children:n.jsx(vx,{})}),n.jsx("button",{className:"btn edit",onClick:()=>V(K),children:n.jsx(zx,{})}),n.jsx("button",{className:"btn delete",onClick:()=>W(K.id),children:n.jsx(ed,{})})]})]},K.id))})]})}),n.jsxs("div",{className:"pagination",children:[n.jsx("button",{onClick:()=>b(h-1),disabled:h===1,children:n.jsx(xx,{})}),n.jsxs("span",{children:[h," / ",T]}),n.jsx("button",{onClick:()=>b(h+1),disabled:h===T,children:n.jsx(bx,{})})]}),S&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-box",children:[n.jsx("h3",{children:"Edit Vendor"}),n.jsx("input",{value:H.name,onChange:K=>R({...H,name:K.target.value})}),n.jsx("input",{value:H.email,onChange:K=>R({...H,email:K.target.value})}),n.jsx("input",{value:H.phone,onChange:K=>R({...H,phone:K.target.value})}),n.jsx("input",{value:H.company,onChange:K=>R({...H,company:K.target.value})}),n.jsxs("select",{value:H.status,onChange:K=>R({...H,status:K.target.value}),children:[n.jsx("option",{children:"Approved"}),n.jsx("option",{children:"Pending"}),n.jsx("option",{children:"Rejected"}),n.jsx("option",{children:"Hold"})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"save",onClick:re,children:"Save"}),n.jsx("button",{className:"cancel",onClick:()=>j(null),children:"Cancel"})]})]})}),O&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-box",children:[n.jsx("h3",{children:"Add Vendor"}),n.jsx("input",{placeholder:"Name",value:H.name,onChange:K=>R({...H,name:K.target.value})}),n.jsx("input",{placeholder:"Email",value:H.email,onChange:K=>R({...H,email:K.target.value})}),n.jsx("input",{placeholder:"Phone",value:H.phone,onChange:K=>R({...H,phone:K.target.value})}),n.jsx("input",{placeholder:"Company",value:H.company,onChange:K=>R({...H,company:K.target.value})}),n.jsxs("select",{value:H.status,onChange:K=>R({...H,status:K.target.value}),children:[n.jsx("option",{children:"Pending"}),n.jsx("option",{children:"Approved"}),n.jsx("option",{children:"Rejected"}),n.jsx("option",{children:"Hold"})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"save",onClick:te,children:"Add"}),n.jsx("button",{className:"cancel",onClick:()=>z(!1),children:"Cancel"})]})]})}),n.jsx("style",{jsx:"true",children:`
        .vendor-page {
          width: 100%;
          padding: 20px;
        }

        /* =======================
         RESPONSIVE STATS GRID
        ========================*/
        .stats-grid {
          display: grid;
          gap: 16px;
          margin-bottom: 20px;
          grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }

        .stat-card {
          background: #eaf0ff;
          padding: 16px;
          border-radius: 10px;
          text-align: center;
          font-weight: 700;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .stat-card.approved { background: #d1f7d6; color: #165c2b; }
        .stat-card.pending { background: #fff7d6; color: #b7791f; }
        .stat-card.rejected { background: #ffe5e5; color: #c53030; }
        .stat-card.hold { background: #e9e9e9; color: #555; }

        /* Add vendor button */
        .add-button-row {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 15px;
        }

        .add-btn {
          background: #0d47a1;
          color: white;
          padding: 10px 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Search / Filter / Sort */
        .controls-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 15px;
        }

        .search-input {
          flex: 1;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }

        .filter {
          padding: 10px;
          border-radius: 8px;
        }

        .sort-btn {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          cursor: pointer;
        }

        /* Table */
        .table-wrapper {
          width: 100%;
          overflow-x: auto;
          background: white;
          border-radius: 10px;
        }

        .vendor-table {
          width: 100%;
          min-width: 900px;
          border-collapse: collapse;
        }

        th, td {
          padding: 12px;
          border-bottom: 1px solid #eee;
        }

        .actions {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .btn {
          border: none;
          padding: 8px;
          border-radius: 6px;
          cursor: pointer;
        }

        .green { background: #d1f7d6; }
        .yellow { background: #fff7d6; }
        .red { background: #ffe5e5; }
        .edit { background: #dce6ff; }
        .delete { background: #ffc9c9; }

        .badge {
          padding: 6px 10px;
          border-radius: 6px;
        }

        .badge.approved { background: #d1f7d6; }
        .badge.pending { background: #fff7d6; }
        .badge.rejected { background: #ffe5e5; }
        .badge.hold { background: #e9e9e9; }

        /* Pagination */
        .pagination {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
        }

        .pagination button {
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
          background: white;
        }

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-box {
          background: white;
          padding: 20px;
          width: 350px;
          max-width: 95%;
          border-radius: 10px;
        }

        .modal-box input, .modal-box select {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 12px;
          border: 1px solid #ccc;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        .save {
          background: #0d47a1;
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
        }

        .cancel {
          background: #e5e5e5;
          padding: 8px 16px;
          border-radius: 8px;
        }

      `})]})}function Xw(){const{id:r}=Uu(),s=Hi.find(_=>String(_.id)===String(r)),l="/mnt/data/c61b8eae-dfc2-4cca-a1e0-c301228d07ef.png";if(!s)return n.jsxs("div",{style:{textAlign:"center",padding:40},children:[n.jsx("h2",{children:"Product Not Found"}),n.jsx(oe,{to:"/",children:"Go Home"})]});const{name:o="Unnamed Machinery",brand:u="Unknown Brand",price:f=0,mrp:p=0,image:g,description:x="No description available.",highlights:h=[],specifications:b={},features:v=[],usage:E=[],maintenance:S=[],safety:j=[],warranty:O="Standard 1-year warranty",reviews:z=[],category:H="Farm Machinery"}=s,[R,V]=w.useState(""),[re,W]=w.useState(null),le=w.useMemo(()=>{if(!z.length)return{avg:4.6,count:112};const _=z.reduce((X,ee)=>X+(ee.rating||0),0)/z.length;return{avg:Math.round(_*10)/10,count:z.length}},[z]),te=Hi.filter(_=>_.id!==s.id).slice(0,6);function ce(){if(!/^\d{6}$/.test(R)){W({ok:!1,msg:"Enter valid 6-digit PIN"});return}const _=/^[1-9]/.test(R);W(_?{ok:!0,msg:"Delivery available (4–7 days)"}:{ok:!1,msg:"Delivery not available in this area"})}function ie(){alert(`Added ${o} to cart`)}function pe(){alert(`Proceeding to buy ${o}`)}return n.jsxs("div",{className:"mach-page-root",children:[n.jsxs("div",{className:"mach-page",children:[n.jsxs("nav",{className:"breadcrumb",children:[n.jsx(oe,{to:"/",children:"Home"}),n.jsx("span",{children:"›"}),n.jsx(oe,{to:"/category/farm-machinery",children:"Farm Machinery"}),n.jsx("span",{children:"›"}),n.jsx("span",{className:"current",children:o})]}),n.jsxs("div",{className:"product-grid",children:[n.jsxs("div",{className:"image-col",children:[n.jsx("div",{className:"main-image",children:n.jsx("img",{src:g||l,alt:o,loading:"lazy"})}),n.jsxs("div",{className:"mini-row",children:[n.jsx("img",{className:"thumb",src:g||l,alt:""}),n.jsx("img",{className:"thumb",src:l,alt:""}),n.jsx("img",{className:"thumb",src:l,alt:""})]})]}),n.jsxs("div",{className:"info-col",children:[n.jsx("h1",{className:"title",children:o}),n.jsx("p",{className:"brand",children:u}),n.jsxs("div",{className:"rating",children:[n.jsxs("div",{className:"stars",children:["★".repeat(Math.round(le.avg)),"☆".repeat(5-Math.round(le.avg))]}),n.jsxs("div",{className:"rating-meta",children:[le.avg," • ",le.count," reviews"]})]}),n.jsxs("div",{className:"price-card",children:[n.jsxs("div",{className:"price-left",children:[n.jsxs("div",{className:"price-current",children:["₹",f]}),n.jsxs("div",{className:"price-mrp",children:["₹",p]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"save",children:["Save ₹",p-f]}),n.jsx("div",{className:"badge",children:"Best Seller"})]})]}),h.length>0&&n.jsxs("div",{className:"highlights",children:[n.jsx("h4",{children:"Highlights"}),n.jsx("ul",{children:h.map((_,X)=>n.jsx("li",{children:_},X))})]}),n.jsxs("div",{className:"delivery-check",children:[n.jsx("label",{children:"Check Delivery"}),n.jsxs("div",{className:"pin-row",children:[n.jsx("input",{value:R,onChange:_=>{V(_.target.value),W(null)},placeholder:"Enter 6 digit PIN"}),n.jsx("button",{onClick:ce,children:"Check"})]}),re&&n.jsx("div",{className:`pin-result ${re.ok?"ok":"no"}`,children:re.msg})]}),n.jsxs("div",{className:"cta-row",children:[n.jsx("button",{className:"buy",onClick:pe,children:"Buy Now"}),n.jsx("button",{className:"cart",onClick:ie,children:"Add to Cart"})]}),n.jsxs("div",{className:"short-desc",children:[n.jsx("h4",{children:"About this Machinery"}),n.jsx("p",{children:x})]})]})]}),n.jsxs("div",{className:"lower",children:[n.jsxs("div",{className:"left-card",children:[n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Product Overview"}),n.jsxs("div",{className:"spec-grid",children:[n.jsx("div",{children:n.jsx("strong",{children:"Name"})}),n.jsx("div",{children:o}),n.jsx("div",{children:n.jsx("strong",{children:"Brand"})}),n.jsx("div",{children:u}),n.jsx("div",{children:n.jsx("strong",{children:"Category"})}),n.jsx("div",{children:H})]})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Specifications"}),Object.keys(b).length>0?n.jsx("table",{className:"spec-table",children:n.jsx("tbody",{children:Object.entries(b).map(([_,X])=>n.jsxs("tr",{children:[n.jsx("td",{children:_}),n.jsx("td",{children:X})]},_))})}):n.jsx("p",{children:"No specifications available."})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Key Features"}),n.jsx("ul",{className:"bullet-list",children:v.length>0?v.map((_,X)=>n.jsx("li",{children:_},X)):n.jsxs(n.Fragment,{children:[n.jsx("li",{children:"High durability & long life."}),n.jsx("li",{children:"Designed for efficient farming."}),n.jsx("li",{children:"Low maintenance cost."})]})})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Usage Guide"}),n.jsx("ul",{className:"bullet-list",children:E.length>0?E.map((_,X)=>n.jsx("li",{children:_},X)):n.jsxs(n.Fragment,{children:[n.jsx("li",{children:"Read the manual before operation."}),n.jsx("li",{children:"Check engine oil and coolant levels."}),n.jsx("li",{children:"Ensure safety guards are in place."})]})})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Maintenance Tips"}),n.jsx("ul",{className:"bullet-list",children:S.length>0?S.map((_,X)=>n.jsx("li",{children:_},X)):n.jsxs(n.Fragment,{children:[n.jsx("li",{children:"Regular lubrication recommended."}),n.jsx("li",{children:"Clean air filters weekly."}),n.jsx("li",{children:"Inspect belts & bolts before use."})]})})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Safety Instructions"}),n.jsx("ul",{className:"bullet-list",children:j.length>0?j.map((_,X)=>n.jsx("li",{children:_},X)):n.jsxs(n.Fragment,{children:[n.jsx("li",{children:"Wear protective gear."}),n.jsx("li",{children:"Keep away from moving parts."}),n.jsx("li",{children:"Do not overload machinery."})]})})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Warranty"}),n.jsx("p",{children:O})]}),n.jsxs("section",{className:"card",children:[n.jsx("h3",{children:"Frequently Asked Questions"}),n.jsxs("details",{children:[n.jsx("summary",{children:"Does this model require servicing?"}),n.jsx("p",{children:"Yes, regular servicing ensures best performance."})]}),n.jsxs("details",{children:[n.jsx("summary",{children:"Are spare parts available?"}),n.jsx("p",{children:"Yes, parts are available with authorized dealers."})]}),n.jsxs("details",{children:[n.jsx("summary",{children:"Can beginners operate it?"}),n.jsx("p",{children:"Yes, but proper guidance is recommended."})]})]})]}),n.jsxs("div",{className:"right-card",children:[n.jsxs("section",{className:"card reviews-card",children:[n.jsx("h3",{children:"Customer Reviews"}),n.jsxs("div",{className:"reviews-summary",children:[n.jsx("div",{className:"big-rating",children:le.avg}),n.jsxs("div",{className:"small",children:["Based on ",le.count," reviews"]})]}),n.jsx("div",{className:"reviews-list",children:(z.length?z:[{name:"Mahesh",rating:5,text:"Very powerful and efficient. Worth the price!",date:"2025-07-10"},{name:"Arun",rating:4,text:"Good performance, low fuel usage.",date:"2025-07-12"}]).map((_,X)=>n.jsxs("div",{className:"review",children:[n.jsxs("div",{className:"r-top",children:[n.jsx("strong",{children:_.name}),n.jsxs("span",{className:"r-rating",children:["★".repeat(_.rating),"☆".repeat(5-_.rating)]})]}),n.jsx("div",{className:"r-text",children:_.text}),n.jsx("div",{className:"r-date",children:_.date})]},X))})]}),n.jsxs("section",{className:"card related-card",children:[n.jsx("h3",{children:"Related Machinery"}),n.jsx("div",{className:"related-grid",children:te.map(_=>n.jsxs(oe,{to:`/machinery/${_.id}`,className:"related-item",children:[n.jsx("img",{src:_.image||l,alt:_.name}),n.jsx("div",{className:"r-name",children:_.name}),n.jsxs("div",{className:"r-price",children:["₹",_.price]})]},_.id))})]})]})]})]}),n.jsx("div",{className:"sticky",children:n.jsxs("div",{className:"sticky-inner",children:[n.jsxs("div",{className:"sticky-left",children:[n.jsxs("div",{className:"sticky-price",children:["₹",f]}),n.jsxs("div",{className:"sticky-save",children:["Save ₹",Math.max(0,p-f)]})]}),n.jsxs("div",{className:"sticky-ctas",children:[n.jsx("button",{className:"sticky-cart",onClick:ie,children:"Add"}),n.jsx("button",{className:"sticky-buy",onClick:pe,children:"Buy"})]})]})}),n.jsx("style",{children:`
        html, body { overflow-x: hidden; }

        :root {
          --green:#2a7a0e;
          --muted:#666;
          --border:#e6e6e6;
        }

        .mach-page-root { padding-bottom:140px; }
        .mach-page { max-width:1200px;margin:auto;padding:20px;font-family:Inter,sans-serif; }

        .breadcrumb { display:flex;gap:8px;font-size:13px;margin-bottom:12px; }
        .breadcrumb a { color:var(--green); }

        .product-grid { display:grid;grid-template-columns:420px 1fr;gap:28px;align-items:start; }

        .main-image { background:#fafafa;border-radius:12px;padding:12px;border:1px solid var(--border); }
        .main-image img { width:100%;max-height:380px;object-fit:contain; }

        .mini-row { display:flex;gap:12px;margin-top:10px; }
        .thumb { width:68px;height:68px;border-radius:8px;border:1px solid var(--border);object-fit:cover; }

        .title { font-size:28px;color:var(--green); }
        .brand { color:var(--muted);font-weight:600;margin-bottom:12px; }

        .rating { display:flex;gap:14px;margin:10px 0; }
        .stars { color:#ffb400; }

        .price-card {
          background:#f6fbf6;border:1px solid #dff0df;
          padding:12px;border-radius:12px;display:flex;justify-content:space-between;
          margin-bottom:18px;
        }
        .price-current { font-size:24px;font-weight:800;color:var(--green); }
        .price-mrp { text-decoration:line-through;color:#777; }

        .save { color:#e67e22;font-weight:600; }
        .badge {
          margin-top:6px;background:#e8f6e8;color:var(--green);
          padding:4px 10px;border-radius:6px;font-size:13px;
        }

        .delivery-check { margin:15px 0; }
        .pin-row { display:flex;gap:8px;margin-top:4px; }
        .pin-row input { padding:8px;border:1px solid var(--border);border-radius:6px;flex:1; }
        .pin-row button { padding:8px 14px;background:var(--green);border:none;color:white;border-radius:8px; }
        .pin-result.ok { color:#1b7b1b; }
        .pin-result.no { color:#c24444; }

        .cta-row { display:flex;gap:14px;margin:20px 0; }
        .buy { background:var(--green);color:#fff;padding:12px;border:none;border-radius:10px;flex:1; }
        .cart { background:#fff;border:2px solid var(--green);color:var(--green);padding:12px;border-radius:10px;flex:1; }

        .short-desc { color:#444;margin-bottom:16px; }

        /* LOWER SECTION */
        .lower { display:flex;gap:20px;margin-top:30px; }
        .left-card { flex:2; }
        .right-card { flex:1; }

        .card {
          background:white;border:1px solid var(--border);
          padding:16px;border-radius:10px;margin-bottom:16px;
        }

        .spec-grid { display:grid;grid-template-columns:1fr 1fr;gap:12px 18px; }
        .spec-table { width:100%;border-collapse:collapse; }
        .spec-table td { border-bottom:1px solid #eee;padding:8px; }

        .bullet-list { padding-left:18px;color:#444; }

        details { border:1px solid var(--border);padding:10px;border-radius:8px;margin-top:8px;cursor:pointer; }
        details summary { font-weight:600; }

        /* Reviews */
        .big-rating { font-size:26px;font-weight:800;color:var(--green); }
        .review { border-top:1px solid #eee;padding-top:10px;margin-top:10px; }

        /* Related */
        .related-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px; }
        .related-item { border:1px solid var(--border);border-radius:10px;padding:10px;text-align:center; }
        .related-item img { width:100%;height:100px;object-fit:contain; }
        .r-name { font-size:14px;font-weight:600;color:#333;margin-top:6px; }
        .r-price { color:var(--green);font-weight:700;margin-top:2px; }

        /* Sticky Bar */
        .sticky {
          position:fixed;bottom:0;left:0;right:0;background:white;
          border-top:1px solid var(--border);z-index:1000;
        }
        .sticky-inner {
          max-width:1200px;margin:auto;
          display:flex;justify-content:space-between;
          padding:10px 20px;align-items:center;
        }
        .sticky-cart, .sticky-buy {
          padding:10px 14px;border:none;border-radius:8px;font-weight:700;cursor:pointer;
        }
        .sticky-cart { background:#eaffea;color:var(--green);border:1px solid var(--green); }
        .sticky-buy { background:var(--green);color:white; }

        /* Responsive */
        @media(max-width:990px) {
          .product-grid { grid-template-columns:1fr; }
          .lower { flex-direction:column; }
        }
        @media(max-width:600px) {
          .title { font-size:20px; }
          .main-image img { max-height:260px; }
          .sticky-inner { padding:8px 12px; }
        }
      `})]})}function Iw(r){return wt({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"},child:[]}]})(r)}const Se=r=>typeof r=="string",Qr=()=>{let r,s;const l=new Promise((o,u)=>{r=o,s=u});return l.resolve=r,l.reject=s,l},Km=r=>r==null?"":""+r,Jw=(r,s,l)=>{r.forEach(o=>{s[o]&&(l[o]=s[o])})},Ww=/###/g,Fm=r=>r&&r.indexOf("###")>-1?r.replace(Ww,"."):r,Pm=r=>!r||Se(r),Yr=(r,s,l)=>{const o=Se(s)?s.split("."):s;let u=0;for(;u<o.length-1;){if(Pm(r))return{};const f=Fm(o[u]);!r[f]&&l&&(r[f]=new l),Object.prototype.hasOwnProperty.call(r,f)?r=r[f]:r={},++u}return Pm(r)?{}:{obj:r,k:Fm(o[u])}},Zm=(r,s,l)=>{const{obj:o,k:u}=Yr(r,s,Object);if(o!==void 0||s.length===1){o[u]=l;return}let f=s[s.length-1],p=s.slice(0,s.length-1),g=Yr(r,p,Object);for(;g.obj===void 0&&p.length;)f=`${p[p.length-1]}.${f}`,p=p.slice(0,p.length-1),g=Yr(r,p,Object),g?.obj&&typeof g.obj[`${g.k}.${f}`]<"u"&&(g.obj=void 0);g.obj[`${g.k}.${f}`]=l},_w=(r,s,l,o)=>{const{obj:u,k:f}=Yr(r,s,Object);u[f]=u[f]||[],u[f].push(l)},Cl=(r,s)=>{const{obj:l,k:o}=Yr(r,s);if(l&&Object.prototype.hasOwnProperty.call(l,o))return l[o]},$w=(r,s,l)=>{const o=Cl(r,l);return o!==void 0?o:Cl(s,l)},Tx=(r,s,l)=>{for(const o in s)o!=="__proto__"&&o!=="constructor"&&(o in r?Se(r[o])||r[o]instanceof String||Se(s[o])||s[o]instanceof String?l&&(r[o]=s[o]):Tx(r[o],s[o],l):r[o]=s[o]);return r},Bi=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var e4={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const t4=r=>Se(r)?r.replace(/[&<>"'\/]/g,s=>e4[s]):r;class a4{constructor(s){this.capacity=s,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(s){const l=this.regExpMap.get(s);if(l!==void 0)return l;const o=new RegExp(s);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(s,o),this.regExpQueue.push(s),o}}const n4=[" ",",","?","!",";"],i4=new a4(20),r4=(r,s,l)=>{s=s||"",l=l||"";const o=n4.filter(p=>s.indexOf(p)<0&&l.indexOf(p)<0);if(o.length===0)return!0;const u=i4.getRegExp(`(${o.map(p=>p==="?"?"\\?":p).join("|")})`);let f=!u.test(r);if(!f){const p=r.indexOf(l);p>0&&!u.test(r.substring(0,p))&&(f=!0)}return f},ku=(r,s,l=".")=>{if(!r)return;if(r[s])return Object.prototype.hasOwnProperty.call(r,s)?r[s]:void 0;const o=s.split(l);let u=r;for(let f=0;f<o.length;){if(!u||typeof u!="object")return;let p,g="";for(let x=f;x<o.length;++x)if(x!==f&&(g+=l),g+=o[x],p=u[g],p!==void 0){if(["string","number","boolean"].indexOf(typeof p)>-1&&x<o.length-1)continue;f+=x-f+1;break}u=p}return u},Pr=r=>r?.replace("_","-"),s4={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,s){console?.[r]?.apply?.(console,s)}};class zl{constructor(s,l={}){this.init(s,l)}init(s,l={}){this.prefix=l.prefix||"i18next:",this.logger=s||s4,this.options=l,this.debug=l.debug}log(...s){return this.forward(s,"log","",!0)}warn(...s){return this.forward(s,"warn","",!0)}error(...s){return this.forward(s,"error","")}deprecate(...s){return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(s,l,o,u){return u&&!this.debug?null:(Se(s[0])&&(s[0]=`${o}${this.prefix} ${s[0]}`),this.logger[l](s))}create(s){return new zl(this.logger,{prefix:`${this.prefix}:${s}:`,...this.options})}clone(s){return s=s||this.options,s.prefix=s.prefix||this.prefix,new zl(this.logger,s)}}var Aa=new zl;class Ul{constructor(){this.observers={}}on(s,l){return s.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const u=this.observers[o].get(l)||0;this.observers[o].set(l,u+1)}),this}off(s,l){if(this.observers[s]){if(!l){delete this.observers[s];return}this.observers[s].delete(l)}}emit(s,...l){this.observers[s]&&Array.from(this.observers[s].entries()).forEach(([u,f])=>{for(let p=0;p<f;p++)u(...l)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([u,f])=>{for(let p=0;p<f;p++)u.apply(u,[s,...l])})}}class Xm extends Ul{constructor(s,l={ns:["translation"],defaultNS:"translation"}){super(),this.data=s||{},this.options=l,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(s){this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}removeNamespaces(s){const l=this.options.ns.indexOf(s);l>-1&&this.options.ns.splice(l,1)}getResource(s,l,o,u={}){const f=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,p=u.ignoreJSONStructure!==void 0?u.ignoreJSONStructure:this.options.ignoreJSONStructure;let g;s.indexOf(".")>-1?g=s.split("."):(g=[s,l],o&&(Array.isArray(o)?g.push(...o):Se(o)&&f?g.push(...o.split(f)):g.push(o)));const x=Cl(this.data,g);return!x&&!l&&!o&&s.indexOf(".")>-1&&(s=g[0],l=g[1],o=g.slice(2).join(".")),x||!p||!Se(o)?x:ku(this.data?.[s]?.[l],o,f)}addResource(s,l,o,u,f={silent:!1}){const p=f.keySeparator!==void 0?f.keySeparator:this.options.keySeparator;let g=[s,l];o&&(g=g.concat(p?o.split(p):o)),s.indexOf(".")>-1&&(g=s.split("."),u=l,l=g[1]),this.addNamespaces(l),Zm(this.data,g,u),f.silent||this.emit("added",s,l,o,u)}addResources(s,l,o,u={silent:!1}){for(const f in o)(Se(o[f])||Array.isArray(o[f]))&&this.addResource(s,l,f,o[f],{silent:!0});u.silent||this.emit("added",s,l,o)}addResourceBundle(s,l,o,u,f,p={silent:!1,skipCopy:!1}){let g=[s,l];s.indexOf(".")>-1&&(g=s.split("."),u=o,o=l,l=g[1]),this.addNamespaces(l);let x=Cl(this.data,g)||{};p.skipCopy||(o=JSON.parse(JSON.stringify(o))),u?Tx(x,o,f):x={...x,...o},Zm(this.data,g,x),p.silent||this.emit("added",s,l,o)}removeResourceBundle(s,l){this.hasResourceBundle(s,l)&&delete this.data[s][l],this.removeNamespaces(l),this.emit("removed",s,l)}hasResourceBundle(s,l){return this.getResource(s,l)!==void 0}getResourceBundle(s,l){return l||(l=this.options.defaultNS),this.getResource(s,l)}getDataByLanguage(s){return this.data[s]}hasLanguageSomeTranslations(s){const l=this.getDataByLanguage(s);return!!(l&&Object.keys(l)||[]).find(u=>l[u]&&Object.keys(l[u]).length>0)}toJSON(){return this.data}}var Rx={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,s,l,o,u){return r.forEach(f=>{s=this.processors[f]?.process(s,l,o,u)??s}),s}};const Mx=Symbol("i18next/PATH_KEY");function l4(){const r=[],s=Object.create(null);let l;return s.get=(o,u)=>(l?.revoke?.(),u===Mx?r:(r.push(u),l=Proxy.revocable(o,s),l.proxy)),Proxy.revocable(Object.create(null),s).proxy}function Tu(r,s){const{[Mx]:l}=r(l4());return l.join(s?.keySeparator??".")}const Im={},yu=r=>!Se(r)&&typeof r!="boolean"&&typeof r!="number";class Ol extends Ul{constructor(s,l={}){super(),Jw(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],s,this),this.options=l,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Aa.create("translator")}changeLanguage(s){s&&(this.language=s)}exists(s,l={interpolation:{}}){const o={...l};if(s==null)return!1;const u=this.resolve(s,o);if(u?.res===void 0)return!1;const f=yu(u.res);return!(o.returnObjects===!1&&f)}extractFromKey(s,l){let o=l.nsSeparator!==void 0?l.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const u=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let f=l.ns||this.options.defaultNS||[];const p=o&&s.indexOf(o)>-1,g=!this.options.userDefinedKeySeparator&&!l.keySeparator&&!this.options.userDefinedNsSeparator&&!l.nsSeparator&&!r4(s,o,u);if(p&&!g){const x=s.match(this.interpolator.nestingRegexp);if(x&&x.length>0)return{key:s,namespaces:Se(f)?[f]:f};const h=s.split(o);(o!==u||o===u&&this.options.ns.indexOf(h[0])>-1)&&(f=h.shift()),s=h.join(u)}return{key:s,namespaces:Se(f)?[f]:f}}translate(s,l,o){let u=typeof l=="object"?{...l}:l;if(typeof u!="object"&&this.options.overloadTranslationOptionHandler&&(u=this.options.overloadTranslationOptionHandler(arguments)),typeof u=="object"&&(u={...u}),u||(u={}),s==null)return"";typeof s=="function"&&(s=Tu(s,{...this.options,...u})),Array.isArray(s)||(s=[String(s)]);const f=u.returnDetails!==void 0?u.returnDetails:this.options.returnDetails,p=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,{key:g,namespaces:x}=this.extractFromKey(s[s.length-1],u),h=x[x.length-1];let b=u.nsSeparator!==void 0?u.nsSeparator:this.options.nsSeparator;b===void 0&&(b=":");const v=u.lng||this.language,E=u.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(v?.toLowerCase()==="cimode")return E?f?{res:`${h}${b}${g}`,usedKey:g,exactUsedKey:g,usedLng:v,usedNS:h,usedParams:this.getUsedParamsDetails(u)}:`${h}${b}${g}`:f?{res:g,usedKey:g,exactUsedKey:g,usedLng:v,usedNS:h,usedParams:this.getUsedParamsDetails(u)}:g;const S=this.resolve(s,u);let j=S?.res;const O=S?.usedKey||g,z=S?.exactUsedKey||g,H=["[object Number]","[object Function]","[object RegExp]"],R=u.joinArrays!==void 0?u.joinArrays:this.options.joinArrays,V=!this.i18nFormat||this.i18nFormat.handleAsObject,re=u.count!==void 0&&!Se(u.count),W=Ol.hasDefaultValue(u),le=re?this.pluralResolver.getSuffix(v,u.count,u):"",te=u.ordinal&&re?this.pluralResolver.getSuffix(v,u.count,{ordinal:!1}):"",ce=re&&!u.ordinal&&u.count===0,ie=ce&&u[`defaultValue${this.options.pluralSeparator}zero`]||u[`defaultValue${le}`]||u[`defaultValue${te}`]||u.defaultValue;let pe=j;V&&!j&&W&&(pe=ie);const _=yu(pe),X=Object.prototype.toString.apply(pe);if(V&&pe&&_&&H.indexOf(X)<0&&!(Se(R)&&Array.isArray(pe))){if(!u.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const ee=this.options.returnedObjectHandler?this.options.returnedObjectHandler(O,pe,{...u,ns:x}):`key '${g} (${this.language})' returned an object instead of string.`;return f?(S.res=ee,S.usedParams=this.getUsedParamsDetails(u),S):ee}if(p){const ee=Array.isArray(pe),ge=ee?[]:{},Me=ee?z:O;for(const T in pe)if(Object.prototype.hasOwnProperty.call(pe,T)){const J=`${Me}${p}${T}`;W&&!j?ge[T]=this.translate(J,{...u,defaultValue:yu(ie)?ie[T]:void 0,joinArrays:!1,ns:x}):ge[T]=this.translate(J,{...u,joinArrays:!1,ns:x}),ge[T]===J&&(ge[T]=pe[T])}j=ge}}else if(V&&Se(R)&&Array.isArray(j))j=j.join(R),j&&(j=this.extendTranslation(j,s,u,o));else{let ee=!1,ge=!1;!this.isValidLookup(j)&&W&&(ee=!0,j=ie),this.isValidLookup(j)||(ge=!0,j=g);const T=(u.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&ge?void 0:j,J=W&&ie!==j&&this.options.updateMissing;if(ge||ee||J){if(this.logger.log(J?"updateKey":"missingKey",v,h,g,J?ie:j),p){const A=this.resolve(g,{...u,keySeparator:!1});A&&A.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let ue=[];const K=this.languageUtils.getFallbackCodes(this.options.fallbackLng,u.lng||this.language);if(this.options.saveMissingTo==="fallback"&&K&&K[0])for(let A=0;A<K.length;A++)ue.push(K[A]);else this.options.saveMissingTo==="all"?ue=this.languageUtils.toResolveHierarchy(u.lng||this.language):ue.push(u.lng||this.language);const fe=(A,U,I)=>{const se=W&&I!==j?I:T;this.options.missingKeyHandler?this.options.missingKeyHandler(A,h,U,se,J,u):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(A,h,U,se,J,u),this.emit("missingKey",A,h,U,j)};this.options.saveMissing&&(this.options.saveMissingPlurals&&re?ue.forEach(A=>{const U=this.pluralResolver.getSuffixes(A,u);ce&&u[`defaultValue${this.options.pluralSeparator}zero`]&&U.indexOf(`${this.options.pluralSeparator}zero`)<0&&U.push(`${this.options.pluralSeparator}zero`),U.forEach(I=>{fe([A],g+I,u[`defaultValue${I}`]||ie)})}):fe(ue,g,ie))}j=this.extendTranslation(j,s,u,S,o),ge&&j===g&&this.options.appendNamespaceToMissingKey&&(j=`${h}${b}${g}`),(ge||ee)&&this.options.parseMissingKeyHandler&&(j=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${h}${b}${g}`:g,ee?j:void 0,u))}return f?(S.res=j,S.usedParams=this.getUsedParamsDetails(u),S):j}extendTranslation(s,l,o,u,f){if(this.i18nFormat?.parse)s=this.i18nFormat.parse(s,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||u.usedLng,u.usedNS,u.usedKey,{resolved:u});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const x=Se(s)&&(o?.interpolation?.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(x){const v=s.match(this.interpolator.nestingRegexp);h=v&&v.length}let b=o.replace&&!Se(o.replace)?o.replace:o;if(this.options.interpolation.defaultVariables&&(b={...this.options.interpolation.defaultVariables,...b}),s=this.interpolator.interpolate(s,b,o.lng||this.language||u.usedLng,o),x){const v=s.match(this.interpolator.nestingRegexp),E=v&&v.length;h<E&&(o.nest=!1)}!o.lng&&u&&u.res&&(o.lng=this.language||u.usedLng),o.nest!==!1&&(s=this.interpolator.nest(s,(...v)=>f?.[0]===v[0]&&!o.context?(this.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${l[0]}`),null):this.translate(...v,l),o)),o.interpolation&&this.interpolator.reset()}const p=o.postProcess||this.options.postProcess,g=Se(p)?[p]:p;return s!=null&&g?.length&&o.applyPostProcessor!==!1&&(s=Rx.handle(g,s,l,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...u,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),s}resolve(s,l={}){let o,u,f,p,g;return Se(s)&&(s=[s]),s.forEach(x=>{if(this.isValidLookup(o))return;const h=this.extractFromKey(x,l),b=h.key;u=b;let v=h.namespaces;this.options.fallbackNS&&(v=v.concat(this.options.fallbackNS));const E=l.count!==void 0&&!Se(l.count),S=E&&!l.ordinal&&l.count===0,j=l.context!==void 0&&(Se(l.context)||typeof l.context=="number")&&l.context!=="",O=l.lngs?l.lngs:this.languageUtils.toResolveHierarchy(l.lng||this.language,l.fallbackLng);v.forEach(z=>{this.isValidLookup(o)||(g=z,!Im[`${O[0]}-${z}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(g)&&(Im[`${O[0]}-${z}`]=!0,this.logger.warn(`key "${u}" for languages "${O.join(", ")}" won't get resolved as namespace "${g}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),O.forEach(H=>{if(this.isValidLookup(o))return;p=H;const R=[b];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(R,b,H,z,l);else{let re;E&&(re=this.pluralResolver.getSuffix(H,l.count,l));const W=`${this.options.pluralSeparator}zero`,le=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(E&&(l.ordinal&&re.indexOf(le)===0&&R.push(b+re.replace(le,this.options.pluralSeparator)),R.push(b+re),S&&R.push(b+W)),j){const te=`${b}${this.options.contextSeparator||"_"}${l.context}`;R.push(te),E&&(l.ordinal&&re.indexOf(le)===0&&R.push(te+re.replace(le,this.options.pluralSeparator)),R.push(te+re),S&&R.push(te+W))}}let V;for(;V=R.pop();)this.isValidLookup(o)||(f=V,o=this.getResource(H,z,V,l))}))})}),{res:o,usedKey:u,exactUsedKey:f,usedLng:p,usedNS:g}}isValidLookup(s){return s!==void 0&&!(!this.options.returnNull&&s===null)&&!(!this.options.returnEmptyString&&s==="")}getResource(s,l,o,u={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(s,l,o,u):this.resourceStore.getResource(s,l,o,u)}getUsedParamsDetails(s={}){const l=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=s.replace&&!Se(s.replace);let u=o?s.replace:s;if(o&&typeof s.count<"u"&&(u.count=s.count),this.options.interpolation.defaultVariables&&(u={...this.options.interpolation.defaultVariables,...u}),!o){u={...u};for(const f of l)delete u[f]}return u}static hasDefaultValue(s){const l="defaultValue";for(const o in s)if(Object.prototype.hasOwnProperty.call(s,o)&&l===o.substring(0,l.length)&&s[o]!==void 0)return!0;return!1}}class Jm{constructor(s){this.options=s,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Aa.create("languageUtils")}getScriptPartFromCode(s){if(s=Pr(s),!s||s.indexOf("-")<0)return null;const l=s.split("-");return l.length===2||(l.pop(),l[l.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(l.join("-"))}getLanguagePartFromCode(s){if(s=Pr(s),!s||s.indexOf("-")<0)return s;const l=s.split("-");return this.formatLanguageCode(l[0])}formatLanguageCode(s){if(Se(s)&&s.indexOf("-")>-1){let l;try{l=Intl.getCanonicalLocales(s)[0]}catch{}return l&&this.options.lowerCaseLng&&(l=l.toLowerCase()),l||(this.options.lowerCaseLng?s.toLowerCase():s)}return this.options.cleanCode||this.options.lowerCaseLng?s.toLowerCase():s}isSupportedCode(s){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(s=this.getLanguagePartFromCode(s)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(s)>-1}getBestMatchFromCodes(s){if(!s)return null;let l;return s.forEach(o=>{if(l)return;const u=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(u))&&(l=u)}),!l&&this.options.supportedLngs&&s.forEach(o=>{if(l)return;const u=this.getScriptPartFromCode(o);if(this.isSupportedCode(u))return l=u;const f=this.getLanguagePartFromCode(o);if(this.isSupportedCode(f))return l=f;l=this.options.supportedLngs.find(p=>{if(p===f)return p;if(!(p.indexOf("-")<0&&f.indexOf("-")<0)&&(p.indexOf("-")>0&&f.indexOf("-")<0&&p.substring(0,p.indexOf("-"))===f||p.indexOf(f)===0&&f.length>1))return p})}),l||(l=this.getFallbackCodes(this.options.fallbackLng)[0]),l}getFallbackCodes(s,l){if(!s)return[];if(typeof s=="function"&&(s=s(l)),Se(s)&&(s=[s]),Array.isArray(s))return s;if(!l)return s.default||[];let o=s[l];return o||(o=s[this.getScriptPartFromCode(l)]),o||(o=s[this.formatLanguageCode(l)]),o||(o=s[this.getLanguagePartFromCode(l)]),o||(o=s.default),o||[]}toResolveHierarchy(s,l){const o=this.getFallbackCodes((l===!1?[]:l)||this.options.fallbackLng||[],s),u=[],f=p=>{p&&(this.isSupportedCode(p)?u.push(p):this.logger.warn(`rejecting language code not found in supportedLngs: ${p}`))};return Se(s)&&(s.indexOf("-")>-1||s.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&f(this.formatLanguageCode(s)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&f(this.getScriptPartFromCode(s)),this.options.load!=="currentOnly"&&f(this.getLanguagePartFromCode(s))):Se(s)&&f(this.formatLanguageCode(s)),o.forEach(p=>{u.indexOf(p)<0&&f(this.formatLanguageCode(p))}),u}}const Wm={zero:0,one:1,two:2,few:3,many:4,other:5},_m={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class o4{constructor(s,l={}){this.languageUtils=s,this.options=l,this.logger=Aa.create("pluralResolver"),this.pluralRulesCache={}}addRule(s,l){this.rules[s]=l}clearCache(){this.pluralRulesCache={}}getRule(s,l={}){const o=Pr(s==="dev"?"en":s),u=l.ordinal?"ordinal":"cardinal",f=JSON.stringify({cleanedCode:o,type:u});if(f in this.pluralRulesCache)return this.pluralRulesCache[f];let p;try{p=new Intl.PluralRules(o,{type:u})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),_m;if(!s.match(/-|_/))return _m;const x=this.languageUtils.getLanguagePartFromCode(s);p=this.getRule(x,l)}return this.pluralRulesCache[f]=p,p}needsPlural(s,l={}){let o=this.getRule(s,l);return o||(o=this.getRule("dev",l)),o?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(s,l,o={}){return this.getSuffixes(s,o).map(u=>`${l}${u}`)}getSuffixes(s,l={}){let o=this.getRule(s,l);return o||(o=this.getRule("dev",l)),o?o.resolvedOptions().pluralCategories.sort((u,f)=>Wm[u]-Wm[f]).map(u=>`${this.options.prepend}${l.ordinal?`ordinal${this.options.prepend}`:""}${u}`):[]}getSuffix(s,l,o={}){const u=this.getRule(s,o);return u?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${u.select(l)}`:(this.logger.warn(`no plural rule found for: ${s}`),this.getSuffix("dev",l,o))}}const $m=(r,s,l,o=".",u=!0)=>{let f=$w(r,s,l);return!f&&u&&Se(l)&&(f=ku(r,l,o),f===void 0&&(f=ku(s,l,o))),f},vu=r=>r.replace(/\$/g,"$$$$");class c4{constructor(s={}){this.logger=Aa.create("interpolator"),this.options=s,this.format=s?.interpolation?.format||(l=>l),this.init(s)}init(s={}){s.interpolation||(s.interpolation={escapeValue:!0});const{escape:l,escapeValue:o,useRawValueToEscape:u,prefix:f,prefixEscaped:p,suffix:g,suffixEscaped:x,formatSeparator:h,unescapeSuffix:b,unescapePrefix:v,nestingPrefix:E,nestingPrefixEscaped:S,nestingSuffix:j,nestingSuffixEscaped:O,nestingOptionsSeparator:z,maxReplaces:H,alwaysFormat:R}=s.interpolation;this.escape=l!==void 0?l:t4,this.escapeValue=o!==void 0?o:!0,this.useRawValueToEscape=u!==void 0?u:!1,this.prefix=f?Bi(f):p||"{{",this.suffix=g?Bi(g):x||"}}",this.formatSeparator=h||",",this.unescapePrefix=b?"":v||"-",this.unescapeSuffix=this.unescapePrefix?"":b||"",this.nestingPrefix=E?Bi(E):S||Bi("$t("),this.nestingSuffix=j?Bi(j):O||Bi(")"),this.nestingOptionsSeparator=z||",",this.maxReplaces=H||1e3,this.alwaysFormat=R!==void 0?R:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const s=(l,o)=>l?.source===o?(l.lastIndex=0,l):new RegExp(o,"g");this.regexp=s(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=s(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=s(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(s,l,o,u){let f,p,g;const x=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=S=>{if(S.indexOf(this.formatSeparator)<0){const H=$m(l,x,S,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(H,void 0,o,{...u,...l,interpolationkey:S}):H}const j=S.split(this.formatSeparator),O=j.shift().trim(),z=j.join(this.formatSeparator).trim();return this.format($m(l,x,O,this.options.keySeparator,this.options.ignoreJSONStructure),z,o,{...u,...l,interpolationkey:O})};this.resetRegExp();const b=u?.missingInterpolationHandler||this.options.missingInterpolationHandler,v=u?.interpolation?.skipOnVariables!==void 0?u.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:S=>vu(S)},{regex:this.regexp,safeValue:S=>this.escapeValue?vu(this.escape(S)):vu(S)}].forEach(S=>{for(g=0;f=S.regex.exec(s);){const j=f[1].trim();if(p=h(j),p===void 0)if(typeof b=="function"){const z=b(s,f,u);p=Se(z)?z:""}else if(u&&Object.prototype.hasOwnProperty.call(u,j))p="";else if(v){p=f[0];continue}else this.logger.warn(`missed to pass in variable ${j} for interpolating ${s}`),p="";else!Se(p)&&!this.useRawValueToEscape&&(p=Km(p));const O=S.safeValue(p);if(s=s.replace(f[0],O),v?(S.regex.lastIndex+=p.length,S.regex.lastIndex-=f[0].length):S.regex.lastIndex=0,g++,g>=this.maxReplaces)break}}),s}nest(s,l,o={}){let u,f,p;const g=(x,h)=>{const b=this.nestingOptionsSeparator;if(x.indexOf(b)<0)return x;const v=x.split(new RegExp(`${b}[ ]*{`));let E=`{${v[1]}`;x=v[0],E=this.interpolate(E,p);const S=E.match(/'/g),j=E.match(/"/g);((S?.length??0)%2===0&&!j||j.length%2!==0)&&(E=E.replace(/'/g,'"'));try{p=JSON.parse(E),h&&(p={...h,...p})}catch(O){return this.logger.warn(`failed parsing options string in nesting for key ${x}`,O),`${x}${b}${E}`}return p.defaultValue&&p.defaultValue.indexOf(this.prefix)>-1&&delete p.defaultValue,x};for(;u=this.nestingRegexp.exec(s);){let x=[];p={...o},p=p.replace&&!Se(p.replace)?p.replace:p,p.applyPostProcessor=!1,delete p.defaultValue;const h=/{.*}/.test(u[1])?u[1].lastIndexOf("}")+1:u[1].indexOf(this.formatSeparator);if(h!==-1&&(x=u[1].slice(h).split(this.formatSeparator).map(b=>b.trim()).filter(Boolean),u[1]=u[1].slice(0,h)),f=l(g.call(this,u[1].trim(),p),p),f&&u[0]===s&&!Se(f))return f;Se(f)||(f=Km(f)),f||(this.logger.warn(`missed to resolve ${u[1]} for nesting ${s}`),f=""),x.length&&(f=x.reduce((b,v)=>this.format(b,v,o.lng,{...o,interpolationkey:u[1].trim()}),f.trim())),s=s.replace(u[0],f),this.regexp.lastIndex=0}return s}}const u4=r=>{let s=r.toLowerCase().trim();const l={};if(r.indexOf("(")>-1){const o=r.split("(");s=o[0].toLowerCase().trim();const u=o[1].substring(0,o[1].length-1);s==="currency"&&u.indexOf(":")<0?l.currency||(l.currency=u.trim()):s==="relativetime"&&u.indexOf(":")<0?l.range||(l.range=u.trim()):u.split(";").forEach(p=>{if(p){const[g,...x]=p.split(":"),h=x.join(":").trim().replace(/^'+|'+$/g,""),b=g.trim();l[b]||(l[b]=h),h==="false"&&(l[b]=!1),h==="true"&&(l[b]=!0),isNaN(h)||(l[b]=parseInt(h,10))}})}return{formatName:s,formatOptions:l}},eg=r=>{const s={};return(l,o,u)=>{let f=u;u&&u.interpolationkey&&u.formatParams&&u.formatParams[u.interpolationkey]&&u[u.interpolationkey]&&(f={...f,[u.interpolationkey]:void 0});const p=o+JSON.stringify(f);let g=s[p];return g||(g=r(Pr(o),u),s[p]=g),g(l)}},d4=r=>(s,l,o)=>r(Pr(l),o)(s);class f4{constructor(s={}){this.logger=Aa.create("formatter"),this.options=s,this.init(s)}init(s,l={interpolation:{}}){this.formatSeparator=l.interpolation.formatSeparator||",";const o=l.cacheInBuiltFormats?eg:d4;this.formats={number:o((u,f)=>{const p=new Intl.NumberFormat(u,{...f});return g=>p.format(g)}),currency:o((u,f)=>{const p=new Intl.NumberFormat(u,{...f,style:"currency"});return g=>p.format(g)}),datetime:o((u,f)=>{const p=new Intl.DateTimeFormat(u,{...f});return g=>p.format(g)}),relativetime:o((u,f)=>{const p=new Intl.RelativeTimeFormat(u,{...f});return g=>p.format(g,f.range||"day")}),list:o((u,f)=>{const p=new Intl.ListFormat(u,{...f});return g=>p.format(g)})}}add(s,l){this.formats[s.toLowerCase().trim()]=l}addCached(s,l){this.formats[s.toLowerCase().trim()]=eg(l)}format(s,l,o,u={}){const f=l.split(this.formatSeparator);if(f.length>1&&f[0].indexOf("(")>1&&f[0].indexOf(")")<0&&f.find(g=>g.indexOf(")")>-1)){const g=f.findIndex(x=>x.indexOf(")")>-1);f[0]=[f[0],...f.splice(1,g)].join(this.formatSeparator)}return f.reduce((g,x)=>{const{formatName:h,formatOptions:b}=u4(x);if(this.formats[h]){let v=g;try{const E=u?.formatParams?.[u.interpolationkey]||{},S=E.locale||E.lng||u.locale||u.lng||o;v=this.formats[h](g,S,{...b,...u,...E})}catch(E){this.logger.warn(E)}return v}else this.logger.warn(`there was no format function for ${h}`);return g},s)}}const p4=(r,s)=>{r.pending[s]!==void 0&&(delete r.pending[s],r.pendingCount--)};class h4 extends Ul{constructor(s,l,o,u={}){super(),this.backend=s,this.store=l,this.services=o,this.languageUtils=o.languageUtils,this.options=u,this.logger=Aa.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=u.maxParallelReads||10,this.readingCalls=0,this.maxRetries=u.maxRetries>=0?u.maxRetries:5,this.retryTimeout=u.retryTimeout>=1?u.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(o,u.backend,u)}queueLoad(s,l,o,u){const f={},p={},g={},x={};return s.forEach(h=>{let b=!0;l.forEach(v=>{const E=`${h}|${v}`;!o.reload&&this.store.hasResourceBundle(h,v)?this.state[E]=2:this.state[E]<0||(this.state[E]===1?p[E]===void 0&&(p[E]=!0):(this.state[E]=1,b=!1,p[E]===void 0&&(p[E]=!0),f[E]===void 0&&(f[E]=!0),x[v]===void 0&&(x[v]=!0)))}),b||(g[h]=!0)}),(Object.keys(f).length||Object.keys(p).length)&&this.queue.push({pending:p,pendingCount:Object.keys(p).length,loaded:{},errors:[],callback:u}),{toLoad:Object.keys(f),pending:Object.keys(p),toLoadLanguages:Object.keys(g),toLoadNamespaces:Object.keys(x)}}loaded(s,l,o){const u=s.split("|"),f=u[0],p=u[1];l&&this.emit("failedLoading",f,p,l),!l&&o&&this.store.addResourceBundle(f,p,o,void 0,void 0,{skipCopy:!0}),this.state[s]=l?-1:2,l&&o&&(this.state[s]=0);const g={};this.queue.forEach(x=>{_w(x.loaded,[f],p),p4(x,s),l&&x.errors.push(l),x.pendingCount===0&&!x.done&&(Object.keys(x.loaded).forEach(h=>{g[h]||(g[h]={});const b=x.loaded[h];b.length&&b.forEach(v=>{g[h][v]===void 0&&(g[h][v]=!0)})}),x.done=!0,x.errors.length?x.callback(x.errors):x.callback())}),this.emit("loaded",g),this.queue=this.queue.filter(x=>!x.done)}read(s,l,o,u=0,f=this.retryTimeout,p){if(!s.length)return p(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:s,ns:l,fcName:o,tried:u,wait:f,callback:p});return}this.readingCalls++;const g=(h,b)=>{if(this.readingCalls--,this.waitingReads.length>0){const v=this.waitingReads.shift();this.read(v.lng,v.ns,v.fcName,v.tried,v.wait,v.callback)}if(h&&b&&u<this.maxRetries){setTimeout(()=>{this.read.call(this,s,l,o,u+1,f*2,p)},f);return}p(h,b)},x=this.backend[o].bind(this.backend);if(x.length===2){try{const h=x(s,l);h&&typeof h.then=="function"?h.then(b=>g(null,b)).catch(g):g(null,h)}catch(h){g(h)}return}return x(s,l,g)}prepareLoading(s,l,o={},u){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),u&&u();Se(s)&&(s=this.languageUtils.toResolveHierarchy(s)),Se(l)&&(l=[l]);const f=this.queueLoad(s,l,o,u);if(!f.toLoad.length)return f.pending.length||u(),null;f.toLoad.forEach(p=>{this.loadOne(p)})}load(s,l,o){this.prepareLoading(s,l,{},o)}reload(s,l,o){this.prepareLoading(s,l,{reload:!0},o)}loadOne(s,l=""){const o=s.split("|"),u=o[0],f=o[1];this.read(u,f,"read",void 0,void 0,(p,g)=>{p&&this.logger.warn(`${l}loading namespace ${f} for language ${u} failed`,p),!p&&g&&this.logger.log(`${l}loaded namespace ${f} for language ${u}`,g),this.loaded(s,p,g)})}saveMissing(s,l,o,u,f,p={},g=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(l)){this.logger.warn(`did not save key "${o}" as the namespace "${l}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if(this.backend?.create){const x={...p,isUpdate:f},h=this.backend.create.bind(this.backend);if(h.length<6)try{let b;h.length===5?b=h(s,l,o,u,x):b=h(s,l,o,u),b&&typeof b.then=="function"?b.then(v=>g(null,v)).catch(g):g(null,b)}catch(b){g(b)}else h(s,l,o,u,g,x)}!s||!s[0]||this.store.addResource(s[0],l,o,u)}}}const tg=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let s={};if(typeof r[1]=="object"&&(s=r[1]),Se(r[1])&&(s.defaultValue=r[1]),Se(r[2])&&(s.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const l=r[3]||r[2];Object.keys(l).forEach(o=>{s[o]=l[o]})}return s},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),ag=r=>(Se(r.ns)&&(r.ns=[r.ns]),Se(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),Se(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),r.supportedLngs?.indexOf?.("cimode")<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r),ml=()=>{},m4=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(l=>{typeof r[l]=="function"&&(r[l]=r[l].bind(r))})};class Kr extends Ul{constructor(s={},l){if(super(),this.options=ag(s),this.services={},this.logger=Aa,this.modules={external:[]},m4(this),l&&!this.isInitialized&&!s.isClone){if(!this.options.initAsync)return this.init(s,l),this;setTimeout(()=>{this.init(s,l)},0)}}init(s={},l){this.isInitializing=!0,typeof s=="function"&&(l=s,s={}),s.defaultNS==null&&s.ns&&(Se(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const o=tg();this.options={...o,...this.options,...ag(s)},this.options.interpolation={...o.interpolation,...this.options.interpolation},s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const u=h=>h?typeof h=="function"?new h:h:null;if(!this.options.isClone){this.modules.logger?Aa.init(u(this.modules.logger),this.options):Aa.init(null,this.options);let h;this.modules.formatter?h=this.modules.formatter:h=f4;const b=new Jm(this.options);this.store=new Xm(this.options.resources,this.options);const v=this.services;v.logger=Aa,v.resourceStore=this.store,v.languageUtils=b,v.pluralResolver=new o4(b,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==o.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),h&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(v.formatter=u(h),v.formatter.init&&v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new c4(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new h4(u(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",(S,...j)=>{this.emit(S,...j)}),this.modules.languageDetector&&(v.languageDetector=u(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=u(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new Ol(this.services,this.options),this.translator.on("*",(S,...j)=>{this.emit(S,...j)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,l||(l=ml),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(h=>{this[h]=(...b)=>this.store[h](...b)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(h=>{this[h]=(...b)=>(this.store[h](...b),this)});const g=Qr(),x=()=>{const h=(b,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),g.resolve(v),l(b,v)};if(this.languages&&!this.isInitialized)return h(null,this.t.bind(this));this.changeLanguage(this.options.lng,h)};return this.options.resources||!this.options.initAsync?x():setTimeout(x,0),g}loadResources(s,l=ml){let o=l;const u=Se(s)?s:this.language;if(typeof s=="function"&&(o=s),!this.options.resources||this.options.partialBundledLanguages){if(u?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return o();const f=[],p=g=>{if(!g||g==="cimode")return;this.services.languageUtils.toResolveHierarchy(g).forEach(h=>{h!=="cimode"&&f.indexOf(h)<0&&f.push(h)})};u?p(u):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(x=>p(x)),this.options.preload?.forEach?.(g=>p(g)),this.services.backendConnector.load(f,this.options.ns,g=>{!g&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(g)})}else o(null)}reloadResources(s,l,o){const u=Qr();return typeof s=="function"&&(o=s,s=void 0),typeof l=="function"&&(o=l,l=void 0),s||(s=this.languages),l||(l=this.options.ns),o||(o=ml),this.services.backendConnector.reload(s,l,f=>{u.resolve(),o(f)}),u}use(s){if(!s)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!s.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return s.type==="backend"&&(this.modules.backend=s),(s.type==="logger"||s.log&&s.warn&&s.error)&&(this.modules.logger=s),s.type==="languageDetector"&&(this.modules.languageDetector=s),s.type==="i18nFormat"&&(this.modules.i18nFormat=s),s.type==="postProcessor"&&Rx.addPostProcessor(s),s.type==="formatter"&&(this.modules.formatter=s),s.type==="3rdParty"&&this.modules.external.push(s),this}setResolvedLanguage(s){if(!(!s||!this.languages)&&!(["cimode","dev"].indexOf(s)>-1)){for(let l=0;l<this.languages.length;l++){const o=this.languages[l];if(!(["cimode","dev"].indexOf(o)>-1)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}!this.resolvedLanguage&&this.languages.indexOf(s)<0&&this.store.hasLanguageSomeTranslations(s)&&(this.resolvedLanguage=s,this.languages.unshift(s))}}changeLanguage(s,l){this.isLanguageChangingTo=s;const o=Qr();this.emit("languageChanging",s);const u=g=>{this.language=g,this.languages=this.services.languageUtils.toResolveHierarchy(g),this.resolvedLanguage=void 0,this.setResolvedLanguage(g)},f=(g,x)=>{x?this.isLanguageChangingTo===s&&(u(x),this.translator.changeLanguage(x),this.isLanguageChangingTo=void 0,this.emit("languageChanged",x),this.logger.log("languageChanged",x)):this.isLanguageChangingTo=void 0,o.resolve((...h)=>this.t(...h)),l&&l(g,(...h)=>this.t(...h))},p=g=>{!s&&!g&&this.services.languageDetector&&(g=[]);const x=Se(g)?g:g&&g[0],h=this.store.hasLanguageSomeTranslations(x)?x:this.services.languageUtils.getBestMatchFromCodes(Se(g)?[g]:g);h&&(this.language||u(h),this.translator.language||this.translator.changeLanguage(h),this.services.languageDetector?.cacheUserLanguage?.(h)),this.loadResources(h,b=>{f(b,h)})};return!s&&this.services.languageDetector&&!this.services.languageDetector.async?p(this.services.languageDetector.detect()):!s&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(p):this.services.languageDetector.detect(p):p(s),o}getFixedT(s,l,o){const u=(f,p,...g)=>{let x;typeof p!="object"?x=this.options.overloadTranslationOptionHandler([f,p].concat(g)):x={...p},x.lng=x.lng||u.lng,x.lngs=x.lngs||u.lngs,x.ns=x.ns||u.ns,x.keyPrefix!==""&&(x.keyPrefix=x.keyPrefix||o||u.keyPrefix);const h=this.options.keySeparator||".";let b;return x.keyPrefix&&Array.isArray(f)?b=f.map(v=>(typeof v=="function"&&(v=Tu(v,{...this.options,...p})),`${x.keyPrefix}${h}${v}`)):(typeof f=="function"&&(f=Tu(f,{...this.options,...p})),b=x.keyPrefix?`${x.keyPrefix}${h}${f}`:f),this.t(b,x)};return Se(s)?u.lng=s:u.lngs=s,u.ns=l,u.keyPrefix=o,u}t(...s){return this.translator?.translate(...s)}exists(...s){return this.translator?.exists(...s)}setDefaultNamespace(s){this.options.defaultNS=s}hasLoadedNamespace(s,l={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=l.lng||this.resolvedLanguage||this.languages[0],u=this.options?this.options.fallbackLng:!1,f=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const p=(g,x)=>{const h=this.services.backendConnector.state[`${g}|${x}`];return h===-1||h===0||h===2};if(l.precheck){const g=l.precheck(this,p);if(g!==void 0)return g}return!!(this.hasResourceBundle(o,s)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||p(o,s)&&(!u||p(f,s)))}loadNamespaces(s,l){const o=Qr();return this.options.ns?(Se(s)&&(s=[s]),s.forEach(u=>{this.options.ns.indexOf(u)<0&&this.options.ns.push(u)}),this.loadResources(u=>{o.resolve(),l&&l(u)}),o):(l&&l(),Promise.resolve())}loadLanguages(s,l){const o=Qr();Se(s)&&(s=[s]);const u=this.options.preload||[],f=s.filter(p=>u.indexOf(p)<0&&this.services.languageUtils.isSupportedCode(p));return f.length?(this.options.preload=u.concat(f),this.loadResources(p=>{o.resolve(),l&&l(p)}),o):(l&&l(),Promise.resolve())}dir(s){if(s||(s=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!s)return"rtl";try{const u=new Intl.Locale(s);if(u&&u.getTextInfo){const f=u.getTextInfo();if(f&&f.direction)return f.direction}}catch{}const l=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],o=this.services?.languageUtils||new Jm(tg());return s.toLowerCase().indexOf("-latn")>1?"ltr":l.indexOf(o.getLanguagePartFromCode(s))>-1||s.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(s={},l){const o=new Kr(s,l);return o.createInstance=Kr.createInstance,o}cloneInstance(s={},l=ml){const o=s.forkResourceStore;o&&delete s.forkResourceStore;const u={...this.options,...s,isClone:!0},f=new Kr(u);if((s.debug!==void 0||s.prefix!==void 0)&&(f.logger=f.logger.clone(s)),["store","services","language"].forEach(g=>{f[g]=this[g]}),f.services={...this.services},f.services.utils={hasLoadedNamespace:f.hasLoadedNamespace.bind(f)},o){const g=Object.keys(this.store.data).reduce((x,h)=>(x[h]={...this.store.data[h]},x[h]=Object.keys(x[h]).reduce((b,v)=>(b[v]={...x[h][v]},b),x[h]),x),{});f.store=new Xm(g,u),f.services.resourceStore=f.store}return f.translator=new Ol(f.services,u),f.translator.on("*",(g,...x)=>{f.emit(g,...x)}),f.init(u,l),f.translator.options=u,f.translator.backendConnector.services.utils={hasLoadedNamespace:f.hasLoadedNamespace.bind(f)},f}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const dt=Kr.createInstance();dt.createInstance;dt.dir;dt.init;dt.loadResources;dt.reloadResources;dt.use;dt.changeLanguage;dt.getFixedT;dt.t;dt.exists;dt.setDefaultNamespace;dt.hasLoadedNamespace;dt.loadNamespaces;dt.loadLanguages;const g4=(r,s,l,o)=>{const u=[l,{code:s,...o||{}}];if(r?.services?.logger?.forward)return r.services.logger.forward(u,"warn","react-i18next::",!0);Qn(u[0])&&(u[0]=`react-i18next:: ${u[0]}`),r?.services?.logger?.warn?r.services.logger.warn(...u):console?.warn&&console.warn(...u)},ng={},Bx=(r,s,l,o)=>{Qn(l)&&ng[l]||(Qn(l)&&(ng[l]=new Date),g4(r,s,l,o))},Dx=(r,s)=>()=>{if(r.isInitialized)s();else{const l=()=>{setTimeout(()=>{r.off("initialized",l)},0),s()};r.on("initialized",l)}},Ru=(r,s,l)=>{r.loadNamespaces(s,Dx(r,l))},ig=(r,s,l,o)=>{if(Qn(l)&&(l=[l]),r.options.preload&&r.options.preload.indexOf(s)>-1)return Ru(r,l,o);l.forEach(u=>{r.options.ns.indexOf(u)<0&&r.options.ns.push(u)}),r.loadLanguages(s,Dx(r,o))},x4=(r,s,l={})=>!s.languages||!s.languages.length?(Bx(s,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:s.languages}),!0):s.hasLoadedNamespace(r,{lng:l.lng,precheck:(o,u)=>{if(l.bindI18n&&l.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!u(o.isLanguageChangingTo,r))return!1}}),Qn=r=>typeof r=="string",b4=r=>typeof r=="object"&&r!==null,y4=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,v4={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},j4=r=>v4[r],w4=r=>r.replace(y4,j4);let Mu={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:w4};const A4=(r={})=>{Mu={...Mu,...r}},S4=()=>Mu;let Lx;const N4=r=>{Lx=r},E4=()=>Lx,C4={type:"3rdParty",init(r){A4(r.options.react),N4(r)}},Ux=w.createContext();class z4{constructor(){this.usedNamespaces={}}addUsedNamespaces(s){s.forEach(l=>{this.usedNamespaces[l]||(this.usedNamespaces[l]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var ju={exports:{}},wu={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function O4(){if(rg)return wu;rg=1;var r=Zr();function s(v,E){return v===E&&(v!==0||1/v===1/E)||v!==v&&E!==E}var l=typeof Object.is=="function"?Object.is:s,o=r.useState,u=r.useEffect,f=r.useLayoutEffect,p=r.useDebugValue;function g(v,E){var S=E(),j=o({inst:{value:S,getSnapshot:E}}),O=j[0].inst,z=j[1];return f(function(){O.value=S,O.getSnapshot=E,x(O)&&z({inst:O})},[v,S,E]),u(function(){return x(O)&&z({inst:O}),v(function(){x(O)&&z({inst:O})})},[v]),p(S),S}function x(v){var E=v.getSnapshot;v=v.value;try{var S=E();return!l(v,S)}catch{return!0}}function h(v,E){return E()}var b=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:g;return wu.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:b,wu}var sg;function k4(){return sg||(sg=1,ju.exports=O4()),ju.exports}var T4=k4();const R4=(r,s)=>Qn(s)?s:b4(s)&&Qn(s.defaultValue)?s.defaultValue:Array.isArray(r)?r[r.length-1]:r,M4={t:R4,ready:!1},B4=()=>()=>{},D4=(r,s={})=>{const{i18n:l}=s,{i18n:o,defaultNS:u}=w.useContext(Ux)||{},f=l||o||E4();f&&!f.reportNamespaces&&(f.reportNamespaces=new z4),f||Bx(f,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const p=w.useMemo(()=>({...S4(),...f?.options?.react,...s}),[f,s]),{useSuspense:g,keyPrefix:x}=p,h=u||f?.options?.defaultNS,b=Qn(h)?[h]:h||["translation"],v=w.useMemo(()=>b,b);f?.reportNamespaces?.addUsedNamespaces?.(v);const E=w.useRef(0),S=w.useCallback(ie=>{if(!f)return B4;const{bindI18n:pe,bindI18nStore:_}=p,X=()=>{E.current+=1,ie()};return pe&&f.on(pe,X),_&&f.store.on(_,X),()=>{pe&&pe.split(" ").forEach(ee=>f.off(ee,X)),_&&_.split(" ").forEach(ee=>f.store.off(ee,X))}},[f,p]),j=w.useRef(),O=w.useCallback(()=>{if(!f)return M4;const ie=!!(f.isInitialized||f.initializedStoreOnce)&&v.every(Me=>x4(Me,f,p)),pe=s.lng||f.language,_=E.current,X=j.current;if(X&&X.ready===ie&&X.lng===pe&&X.keyPrefix===x&&X.revision===_)return X;const ge={t:f.getFixedT(pe,p.nsMode==="fallback"?v:v[0],x),ready:ie,lng:pe,keyPrefix:x,revision:_};return j.current=ge,ge},[f,v,x,p,s.lng]),[z,H]=w.useState(0),{t:R,ready:V}=T4.useSyncExternalStore(S,O,O);w.useEffect(()=>{if(f&&!V&&!g){const ie=()=>H(pe=>pe+1);s.lng?ig(f,s.lng,v,ie):Ru(f,v,ie)}},[f,s.lng,v,V,g,z]);const re=f||{},W=w.useRef(null),le=w.useRef(),te=ie=>{const pe=Object.getOwnPropertyDescriptors(ie);pe.__original&&delete pe.__original;const _=Object.create(Object.getPrototypeOf(ie),pe);if(!Object.prototype.hasOwnProperty.call(_,"__original"))try{Object.defineProperty(_,"__original",{value:ie,writable:!1,enumerable:!1,configurable:!1})}catch{}return _},ce=w.useMemo(()=>{const ie=re,pe=ie?.language;let _=ie;ie&&(W.current&&W.current.__original===ie?le.current!==pe?(_=te(ie),W.current=_,le.current=pe):_=W.current:(_=te(ie),W.current=_,le.current=pe));const X=[R,_,V];return X.t=R,X.i18n=_,X.ready=V,X},[R,re,V,re.resolvedLanguage,re.language,re.languages]);if(f&&g&&!V)throw new Promise(ie=>{const pe=()=>ie();s.lng?ig(f,s.lng,v,pe):Ru(f,v,pe)});return ce};function L4({i18n:r,defaultNS:s,children:l}){const o=w.useMemo(()=>({i18n:r,defaultNS:s}),[r,s]);return w.createElement(Ux.Provider,{value:o},l)}const{slice:U4,forEach:H4}=[];function q4(r){return H4.call(U4.call(arguments,1),s=>{if(s)for(const l in s)r[l]===void 0&&(r[l]=s[l])}),r}function V4(r){return typeof r!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(l=>l.test(r))}const lg=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,G4=function(r,s){const o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},u=encodeURIComponent(s);let f=`${r}=${u}`;if(o.maxAge>0){const p=o.maxAge-0;if(Number.isNaN(p))throw new Error("maxAge should be a Number");f+=`; Max-Age=${Math.floor(p)}`}if(o.domain){if(!lg.test(o.domain))throw new TypeError("option domain is invalid");f+=`; Domain=${o.domain}`}if(o.path){if(!lg.test(o.path))throw new TypeError("option path is invalid");f+=`; Path=${o.path}`}if(o.expires){if(typeof o.expires.toUTCString!="function")throw new TypeError("option expires is invalid");f+=`; Expires=${o.expires.toUTCString()}`}if(o.httpOnly&&(f+="; HttpOnly"),o.secure&&(f+="; Secure"),o.sameSite)switch(typeof o.sameSite=="string"?o.sameSite.toLowerCase():o.sameSite){case!0:f+="; SameSite=Strict";break;case"lax":f+="; SameSite=Lax";break;case"strict":f+="; SameSite=Strict";break;case"none":f+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o.partitioned&&(f+="; Partitioned"),f},og={create(r,s,l,o){let u=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};l&&(u.expires=new Date,u.expires.setTime(u.expires.getTime()+l*60*1e3)),o&&(u.domain=o),document.cookie=G4(r,s,u)},read(r){const s=`${r}=`,l=document.cookie.split(";");for(let o=0;o<l.length;o++){let u=l[o];for(;u.charAt(0)===" ";)u=u.substring(1,u.length);if(u.indexOf(s)===0)return u.substring(s.length,u.length)}return null},remove(r,s){this.create(r,"",-1,s)}};var Q4={name:"cookie",lookup(r){let{lookupCookie:s}=r;if(s&&typeof document<"u")return og.read(s)||void 0},cacheUserLanguage(r,s){let{lookupCookie:l,cookieMinutes:o,cookieDomain:u,cookieOptions:f}=s;l&&typeof document<"u"&&og.create(l,r,o,u,f)}},Y4={name:"querystring",lookup(r){let{lookupQuerystring:s}=r,l;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const f=o.substring(1).split("&");for(let p=0;p<f.length;p++){const g=f[p].indexOf("=");g>0&&f[p].substring(0,g)===s&&(l=f[p].substring(g+1))}}return l}},K4={name:"hash",lookup(r){let{lookupHash:s,lookupFromHashIndex:l}=r,o;if(typeof window<"u"){const{hash:u}=window.location;if(u&&u.length>2){const f=u.substring(1);if(s){const p=f.split("&");for(let g=0;g<p.length;g++){const x=p[g].indexOf("=");x>0&&p[g].substring(0,x)===s&&(o=p[g].substring(x+1))}}if(o)return o;if(!o&&l>-1){const p=u.match(/\/([a-zA-Z-]*)/g);return Array.isArray(p)?p[typeof l=="number"?l:0]?.replace("/",""):void 0}}}return o}};let Di=null;const cg=()=>{if(Di!==null)return Di;try{if(Di=typeof window<"u"&&window.localStorage!==null,!Di)return!1;const r="i18next.translate.boo";window.localStorage.setItem(r,"foo"),window.localStorage.removeItem(r)}catch{Di=!1}return Di};var F4={name:"localStorage",lookup(r){let{lookupLocalStorage:s}=r;if(s&&cg())return window.localStorage.getItem(s)||void 0},cacheUserLanguage(r,s){let{lookupLocalStorage:l}=s;l&&cg()&&window.localStorage.setItem(l,r)}};let Li=null;const ug=()=>{if(Li!==null)return Li;try{if(Li=typeof window<"u"&&window.sessionStorage!==null,!Li)return!1;const r="i18next.translate.boo";window.sessionStorage.setItem(r,"foo"),window.sessionStorage.removeItem(r)}catch{Li=!1}return Li};var P4={name:"sessionStorage",lookup(r){let{lookupSessionStorage:s}=r;if(s&&ug())return window.sessionStorage.getItem(s)||void 0},cacheUserLanguage(r,s){let{lookupSessionStorage:l}=s;l&&ug()&&window.sessionStorage.setItem(l,r)}},Z4={name:"navigator",lookup(r){const s=[];if(typeof navigator<"u"){const{languages:l,userLanguage:o,language:u}=navigator;if(l)for(let f=0;f<l.length;f++)s.push(l[f]);o&&s.push(o),u&&s.push(u)}return s.length>0?s:void 0}},X4={name:"htmlTag",lookup(r){let{htmlTag:s}=r,l;const o=s||(typeof document<"u"?document.documentElement:null);return o&&typeof o.getAttribute=="function"&&(l=o.getAttribute("lang")),l}},I4={name:"path",lookup(r){let{lookupFromPathIndex:s}=r;if(typeof window>"u")return;const l=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(l)?l[typeof s=="number"?s:0]?.replace("/",""):void 0}},J4={name:"subdomain",lookup(r){let{lookupFromSubdomainIndex:s}=r;const l=typeof s=="number"?s+1:1,o=typeof window<"u"&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(o)return o[l]}};let Hx=!1;try{document.cookie,Hx=!0}catch{}const qx=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Hx||qx.splice(1,1);const W4=()=>({order:qx,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:r=>r});class Vx{constructor(s){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(s,l)}init(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=s,this.options=q4(l,this.options||{},W4()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=u=>u.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=o,this.addDetector(Q4),this.addDetector(Y4),this.addDetector(F4),this.addDetector(P4),this.addDetector(Z4),this.addDetector(X4),this.addDetector(I4),this.addDetector(J4),this.addDetector(K4)}addDetector(s){return this.detectors[s.name]=s,this}detect(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,l=[];return s.forEach(o=>{if(this.detectors[o]){let u=this.detectors[o].lookup(this.options);u&&typeof u=="string"&&(u=[u]),u&&(l=l.concat(u))}}),l=l.filter(o=>o!=null&&!V4(o)).map(o=>this.options.convertDetectedLanguage(o)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?l:l.length>0?l[0]:null}cacheUserLanguage(s){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;l&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(s)>-1||l.forEach(o=>{this.detectors[o]&&this.detectors[o].cacheUserLanguage(s,this.options)}))}}Vx.type="languageDetector";const _4="Search products...",$4="Search",eA="Cart",tA="Orders",aA="Wishlist",nA="Notifications",iA="View All",rA="My Profile",sA="My Orders",lA="My Cart",oA="Logout",cA="Track Order",uA="Language",dA="Upload Avatar",fA="No notifications",pA="Mark all read",hA="New promo: 15% off selected seeds",mA="Welcome Back",gA="Login",xA="Email Login",bA="Phone Login",yA="Forgot Password?",vA="Sign up",jA="Services",wA="About Us",AA="Contact",SA="Categories",NA={search_placeholder:_4,search_button:$4,cart:eA,orders:tA,wishlist:aA,notifications:nA,view_all:iA,profile:rA,my_orders:sA,my_cart:lA,logout:oA,track_order:cA,language:uA,upload_avatar:dA,no_notifications:fA,mark_all_read:pA,simulated_notification:hA,welcome_back:mA,login:gA,email_login:xA,phone_login:bA,forgot_password:yA,signup:vA,services:jA,about_us:wA,contact:AA,categories:SA},EA="उत्पाद खोजें...",CA="खोजें",zA="कार्ट",OA="ऑर्डर",kA="इच्छा सूची",TA="सूचनाएँ",RA="सभी देखें",MA="मेरा प्रोफ़ाइल",BA="मेरे ऑर्डर",DA="मेरा कार्ट",LA="लॉग आउट",UA="ऑर्डर ट्रैक करें",HA="भाषा",qA="अवतार अपलोड करें",VA="कोई सूचनाएँ नहीं",GA="सभी पढ़ा हुआ मार्क करें",QA="नया प्रचार: कुछ चुनिंदा बीजों पर 15% छूट",YA="वापसी पर स्वागत है",KA="लॉगिन",FA="ईमेल लॉगिन",PA="फोन लॉगिन",ZA="पासवर्ड भूल गए?",XA="साइन अप",IA="सेवाएं",JA="हमारे बारे में",WA="संपर्क करें",_A="श्रेणियाँ",$A={search_placeholder:EA,search_button:CA,cart:zA,orders:OA,wishlist:kA,notifications:TA,view_all:RA,profile:MA,my_orders:BA,my_cart:DA,logout:LA,track_order:UA,language:HA,upload_avatar:qA,no_notifications:VA,mark_all_read:GA,simulated_notification:QA,welcome_back:YA,login:KA,email_login:FA,phone_login:PA,forgot_password:ZA,signup:XA,services:IA,about_us:JA,contact:WA,categories:_A},e6="ఉత్పత్తులను శోధించండి...",t6="శోధించండి",a6="కార్ట్",n6="ఆర్డర్లు",i6="ఇష్టాలు",r6="నోటిఫికేషన్లు",s6="అన్నింటిని చూడండి",l6="నా پروఫైల్",o6="నా ఆర్డర్లు",c6="నా కార్ట్",u6="లాగ్ అవుట్",d6="ఆర్డర్ ట్రాక్ చేయండి",f6="భాష",p6="అవతార్ అప్లోడ్ చేయండి",h6="ఏనొట్టి లేదు",m6="అన్నింటిని చదివినట్లు గుర్తించండి",g6="కొత్త ఆఫర్: ప్రత్యేక బీజుపై 15% తగ్గింపు",x6="వెనక్కి స్వాగతం",b6="లాగిన్",y6="ఇమెయిల్ లాగిన్",v6="ఫోన్ లాగిన్",j6="పాస్వర్డ్ మర్చిపోయాను?",w6="సైన్ అప్",A6="సేవలు",S6="గురించి",N6="సంప్రదించండి",E6="వర్గాలు",C6={search_placeholder:e6,search_button:t6,cart:a6,orders:n6,wishlist:i6,notifications:r6,view_all:s6,profile:l6,my_orders:o6,my_cart:c6,logout:u6,track_order:d6,language:f6,upload_avatar:p6,no_notifications:h6,mark_all_read:m6,simulated_notification:g6,welcome_back:x6,login:b6,email_login:y6,phone_login:v6,forgot_password:j6,signup:w6,services:A6,about_us:S6,contact:N6,categories:E6},z6={en:{translation:NA},hi:{translation:$A},te:{translation:C6}};dt.use(Vx).use(C4).init({resources:z6,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},detection:{order:["sessionStorage","localStorage","navigator","htmlTag","path","subdomain"],caches:["sessionStorage"],lookupSessionStorage:"language"}});const dg=sessionStorage.getItem("language");dg&&dt.changeLanguage(dg);function Hl(){const{t:r}=D4(),[s,l]=w.useState(!1),[o,u]=w.useState(!1),[f,p]=w.useState(!1),[g,x]=w.useState(dt.language||"en"),h=ca(),b=w.useRef(null),v=w.useRef(null),E=w.useRef(null),S=[{code:"en",label:"English"},{code:"hi",label:"हिन्दी"},{code:"te",label:"తెలుగు"},{code:"ta",label:"தமிழ்"},{code:"mr",label:"मराठी"},{code:"bn",label:"বাংলা"},{code:"kn",label:"ಕನ್ನಡ"},{code:"ml",label:"മലയാളം"}],j=sessionStorage.getItem("userEmail")||"guest@agri.com";w.useEffect(()=>{const V=sessionStorage.getItem("language");V&&(dt.changeLanguage(V),x(V))},[]),w.useEffect(()=>{const V=re=>x(re);return dt.on("languageChanged",V),()=>dt.off("languageChanged",V)},[]),w.useEffect(()=>{function V(re){b.current&&!b.current.contains(re.target)&&l(!1),v.current&&!v.current.contains(re.target)&&p(!1),E.current&&!E.current.contains(re.target)&&o&&(re.target.closest&&re.target.closest(".hamburger-btn")||u(!1))}return document.addEventListener("mousedown",V),document.body.style.overflowX="hidden",()=>{document.removeEventListener("mousedown",V),document.body.style.overflowX=""}},[o]);const O=()=>{u(V=>!V),l(!1),p(!1)},z=()=>{sessionStorage.clear(),h("/login")},H=V=>{dt.changeLanguage(V),sessionStorage.setItem("language",V),x(V),p(!1)},R=V=>{H(V),u(!1)};return n.jsxs(n.Fragment,{children:[n.jsx("header",{className:"user-header","aria-hidden":"false",children:n.jsxs("nav",{className:"user-nav",children:[n.jsxs("div",{className:"left-group",children:[n.jsx("button",{"aria-label":o?"Close menu":"Open menu",className:"hamburger-btn",onClick:O,children:o?n.jsx(ym,{size:20}):n.jsx(V2,{size:20})}),n.jsxs(oe,{to:"/",className:"user-logo","aria-label":"AgriTechPro home",children:[n.jsx("img",{src:"https://www.shutterstock.com/image-vector/agri-tech-leaf-logo-design-600nw-2388734381.jpg",alt:"AgriTechPro"}),n.jsx("span",{className:"brand-text",children:"AgriTechPro"})]})]}),n.jsx("div",{className:"center-group",children:n.jsxs("form",{className:"user-search",onSubmit:V=>V.preventDefault(),children:[n.jsx("input",{type:"text",placeholder:r?r("search_placeholder"):"Search for products, seeds, tools...","aria-label":"Search"}),n.jsx("button",{type:"submit","aria-label":"Search",children:r?r("search_button"):"Search"})]})}),n.jsxs("div",{className:"right-group",children:[n.jsxs("div",{className:"lang-desktop",ref:v,children:[n.jsxs("button",{className:"lang-btn",onClick:()=>p(V=>!V),"aria-haspopup":"true","aria-expanded":f,children:[n.jsx(Iw,{size:16}),n.jsx("span",{className:"lang-code",children:g.toUpperCase()})," ▾"]}),f&&n.jsx("div",{className:"lang-dropdown",children:S.map(V=>n.jsx("div",{className:`lang-option ${g===V.code?"active":""}`,onClick:()=>H(V.code),children:V.label},V.code))})]}),n.jsxs(oe,{to:"/cart",className:"user-act-btn",title:"Cart",children:[n.jsx(Nu,{size:20}),n.jsx("span",{className:"icon-label",children:r?r("cart"):"Cart"})]}),n.jsxs(oe,{to:"/orders",className:"user-act-btn",title:"Orders",children:[n.jsx(gm,{size:20}),n.jsx("span",{className:"icon-label",children:r?r("orders"):"Orders"})]}),n.jsxs(oe,{to:"/wishlist",className:"user-act-btn",title:"Wishlist",children:[n.jsx(xm,{size:20}),n.jsx("span",{className:"icon-label",children:r?r("wishlist"):"Wishlist"})]}),n.jsxs("div",{className:"profile-box",ref:b,children:[n.jsx("button",{className:"profile-btn",onClick:()=>l(V=>!V),"aria-haspopup":"true","aria-expanded":s,title:"Profile",children:n.jsx(vm,{size:26})}),s&&n.jsxs("div",{className:"profile-dropdown",role:"menu",children:[n.jsx("p",{className:"profile-email",children:j}),n.jsx(oe,{to:"/user/profile",className:"profile-item",children:"My Profile"}),n.jsx(oe,{to:"/orders",className:"profile-item",children:"My Orders"}),n.jsx(oe,{to:"/cart",className:"profile-item",children:"My Cart"}),n.jsx(oe,{to:"/services",className:"profile-item",children:"Services"}),n.jsx(oe,{to:"/about",className:"profile-item",children:"About Us"}),n.jsx(oe,{to:"/contact",className:"profile-item",children:"Contact"}),n.jsxs("button",{onClick:z,className:"logout-btn",children:[n.jsx(bm,{})," Logout"]})]})]})]})]})}),n.jsx("aside",{className:`mobile-drawer ${o?"open":""}`,ref:E,"aria-hidden":!o,children:n.jsxs("div",{className:"drawer-inner",children:[n.jsxs("div",{className:"drawer-top",children:[n.jsxs(oe,{to:"/",className:"drawer-logo",onClick:()=>u(!1),children:[n.jsx("img",{src:"https://www.shutterstock.com/image-vector/agri-tech-leaf-logo-design-600nw-2388734381.jpg",alt:"logo"}),n.jsx("span",{children:"AgriTechPro"})]}),n.jsx("button",{className:"drawer-close",onClick:()=>u(!1),"aria-label":"Close menu",children:n.jsx(ym,{size:18})})]}),n.jsxs("nav",{className:"drawer-nav",children:[n.jsxs(oe,{to:"/",className:"drawer-link",onClick:()=>u(!1),children:[n.jsx(Q2,{})," Home"]}),n.jsxs(oe,{to:"/services",className:"drawer-link",onClick:()=>u(!1),children:[n.jsx(P2,{})," Services"]}),n.jsxs(oe,{to:"/about",className:"drawer-link",onClick:()=>u(!1),children:[n.jsx(Y2,{})," About Us"]}),n.jsxs(oe,{to:"/contact",className:"drawer-link",onClick:()=>u(!1),children:[n.jsx(K2,{})," Contact"]}),n.jsx("div",{className:"drawer-divider"}),n.jsxs(oe,{to:"/cart",className:"drawer-link",onClick:()=>u(!1),children:[n.jsx(Nu,{})," Cart"]}),n.jsxs(oe,{to:"/orders",className:"drawer-link",onClick:()=>u(!1),children:[n.jsx(gm,{})," Orders"]}),n.jsxs(oe,{to:"/wishlist",className:"drawer-link",onClick:()=>u(!1),children:[n.jsx(xm,{})," Wishlist"]}),n.jsx("div",{className:"drawer-divider"}),n.jsx("div",{className:"drawer-subtitle",children:"Language"}),n.jsx("div",{className:"drawer-langs",children:S.map(V=>n.jsx("button",{className:`drawer-lang-btn ${g===V.code?"active":""}`,onClick:()=>R(V.code),children:V.label},V.code))}),n.jsx("div",{className:"drawer-divider"}),n.jsxs("div",{className:"drawer-profile",children:[n.jsxs("div",{className:"drawer-profile-top",children:[n.jsx(vm,{size:36}),n.jsxs("div",{style:{marginLeft:12},children:[n.jsx("div",{style:{fontWeight:700},children:j}),n.jsx("div",{style:{fontSize:13,color:"#666"},children:"Member since 2024"})]})]}),n.jsxs("div",{className:"drawer-profile-links",children:[n.jsx(oe,{to:"/user/profile",onClick:()=>u(!1),children:"My Profile"}),n.jsx(oe,{to:"/orders",onClick:()=>u(!1),children:"My Orders"}),n.jsx(oe,{to:"/support",onClick:()=>u(!1),children:"Support"}),n.jsxs("button",{className:"drawer-logout",onClick:()=>{z(),u(!1)},children:[n.jsx(bm,{})," Logout"]})]})]})]})]})}),n.jsx("div",{className:`drawer-overlay ${o?"visible":""}`,onClick:()=>u(!1)}),n.jsx("style",{children:`
        /* Prevent horizontal scrollbar globally */
        html, body { overflow-x: hidden; }

        /* Header */
        .user-header {
          width: 100%;
          background: white;
          border-bottom: 1px solid #e7e7e7;
          position: sticky;
          top: 0;
          z-index: 1200;
        }

        .user-nav {
          max-width: 1300px;
          margin: 0 auto;
          padding: 10px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .left-group { display: flex; align-items: center; gap: 12px; }
        .hamburger-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          border-radius: 8px;
          border: none;
          background: transparent;
          cursor: pointer;
          color: #2a7a0e;
        }
        .hamburger-btn:focus { outline: 2px solid #cfead0; }

        .user-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; color: #2a7a0e; }
        .user-logo img { height: 40px; width: 40px; object-fit: cover; border-radius: 8px; }
        .brand-text { font-weight: 700; font-size: 18px; }

        /* center search */
        .center-group { flex: 1; display: flex; justify-content: center; padding: 0 12px; }
        .user-search {
          display: flex;
          width: 540px;
          max-width: 100%;
          background: #f6f8f5;
          border: 1px solid #ddd;
          border-radius: 28px;
          overflow: hidden;
        }
        .user-search input {
          flex: 1;
          padding: 10px 14px;
          border: none;
          outline: none;
          background: transparent;
          font-size: 14px;
        }
        .user-search button {
          padding: 10px 16px;
          border: none;
          background: #2a7a0e;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        /* right icons */
        .right-group { display: flex; align-items: center; gap: 16px; }
        .user-act-btn {
          text-decoration: none;
          color: #333;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          font-size: 12px;
        }
        .user-act-btn .icon-label { display: block; margin-top: 2px; }

        /* language desktop */
        .lang-desktop { display: inline-block; position: relative; margin-right: 6px; }
        .lang-btn {
          padding: 6px 10px;
          border-radius: 8px;
          border: 1px solid #ddd;
          background: white;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          font-size: 13px;
        }
        .lang-dropdown {
          position: absolute;
          top: 44px;
          right: 0;
          background: white;
          border: 1px solid #eee;
          border-radius: 10px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          width: 200px;
          overflow: hidden;
          z-index: 1400;
        }
        .lang-option {
          padding: 10px 12px;
          cursor: pointer;
        }
        .lang-option.active { background: #e8f7e8; font-weight: 700; color: #2a7a0e; }
        .lang-option:hover { background: #f5f5f5; }

        /* profile dropdown */
        .profile-box { position: relative; }
        .profile-btn { border: none; background: transparent; cursor: pointer; color: #2a7a0e; }
        .profile-dropdown {
          position: absolute;
          top: 44px;
          right: 0;
          width: 220px;
          background: white;
          border: 1px solid #eee;
          border-radius: 10px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          z-index: 1400;
        }
        .profile-email { padding: 10px; background: #fafafa; border-bottom: 1px solid #eee; font-weight: 700; }
        .profile-item { display: block; padding: 10px 12px; color: #333; text-decoration: none; }
        .profile-item:hover { background: #f6f6f6; }
        .logout-btn {
          width: 100%;
          text-align: left;
          padding: 10px 12px;
          border: none;
          background: #fff4f4;
          color: #c0392b;
          cursor: pointer;
        }

        /* MOBILE DRAWER */
        .mobile-drawer {
          --drawer-width: 280px;
          position: fixed;
          top: 0;
          left: calc(-1 * var(--drawer-width));
          width: var(--drawer-width);
          height: 100vh;
          background: #fff;
          z-index: 1500;
          box-shadow: 4px 0 18px rgba(0,0,0,0.08);
          transition: left 280ms cubic-bezier(.2,.8,.2,1);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        .mobile-drawer.open { left: 0; }

        .drawer-inner { padding: 16px; }
        .drawer-top { display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom: 10px; }
        .drawer-logo { display:flex; align-items:center; gap:8px; text-decoration:none; color:#2a7a0e; }
        .drawer-logo img { width:40px; height:40px; border-radius:8px; }
        .drawer-close { border:none; background:transparent; cursor:pointer; color:#333; }

        .drawer-nav { display:flex; flex-direction:column; gap:8px; padding-top:8px; }
        .drawer-link {
          display:flex; align-items:center; gap:12px;
          padding:10px 12px; text-decoration:none; color:#222; border-radius:8px;
          font-weight:600;
        }
        .drawer-link:hover { background:#f4f7f4; }

        .drawer-divider { height:1px; background:#efefef; margin:12px 0; border-radius:2px; }

        .drawer-subtitle { font-size:13px; color:#666; margin:6px 2px; font-weight:600; }
        .drawer-langs { display:flex; flex-wrap:wrap; gap:8px; padding:6px 2px; }
        .drawer-lang-btn {
          border:1px solid #eee; padding:8px 10px; border-radius:8px; background:white; cursor:pointer; font-size:14px;
        }
        .drawer-lang-btn.active { background:#e8f7e8; border-color:#cfead0; font-weight:700; color:#2a7a0e; }

        .drawer-profile { margin-top:12px; padding-top:12px; border-top:1px dashed #eaeaea; }
        .drawer-profile-top { display:flex; align-items:center; gap:12px; margin-bottom:10px; }
        .drawer-profile-links { display:flex; flex-direction:column; gap:8px; }
        .drawer-profile-links a { color:#2a7a0e; text-decoration:none; padding:8px 6px; font-weight:600; }

        .drawer-logout {
          margin-top:8px; padding:10px; border-radius:8px; border:none; background:#fff4f4; color:#c0392b; cursor:pointer; width:100%;
        }

        .drawer-overlay {
          position: fixed;
          top:0; left:0; right:0; bottom:0; background: rgba(0,0,0,0.28);
          opacity: 0; pointer-events: none; transition: opacity 200ms;
          z-index: 1400;
        }
        .drawer-overlay.visible { opacity: 1; pointer-events: all; }

        /* RESPONSIVE tweaks */
        @media (max-width: 900px) {
          .user-search { width: 360px; }
          .lang-desktop { display: none; } /* hide desktop language on smaller */
        }

        @media (max-width: 700px) {
          .center-group { display: none; } /* hide center search on very small */
          .user-search { display: none; }
          .brand-text { display: none; }
          .user-act-btn .icon-label { display: none; } /* show icons only */
        }

        @media (max-width: 420px) {
          .hamburger-btn { width:36px; height:36px; }
        }
      `})]})}function O6(){return n.jsxs("div",{children:[n.jsx(Hl,{}),n.jsx(ex,{}),n.jsx(tx,{}),n.jsx(ux,{}),n.jsx(fx,{}),n.jsx(nx,{}),n.jsx(hx,{}),n.jsx(rx,{}),n.jsx(lx,{}),n.jsx(px,{}),n.jsx(es,{})]})}const k6=()=>{const[r,s]=w.useState(""),[l,o]=w.useState("All"),[u,f]=w.useState("default"),[p,g]=w.useState(1),x=12,h=["All",...new Set(Gn.map(S=>S.brand))];let b=Gn.filter(S=>S.name.toLowerCase().includes(r.toLowerCase()));l!=="All"&&(b=b.filter(S=>S.brand===l)),u==="low"&&b.sort((S,j)=>S.price-j.price),u==="high"&&b.sort((S,j)=>j.price-S.price),u==="rating"&&b.sort((S,j)=>j.rating-S.rating);const v=Math.ceil(b.length/x),E=b.slice((p-1)*x,p*x);return n.jsxs("div",{className:"fert-page",children:[n.jsx("h2",{className:"fert-title",children:"Fertilizers"}),n.jsxs("div",{className:"fert-filters",children:[n.jsx("input",{placeholder:"Search Fertilizers...",value:r,onChange:S=>s(S.target.value)}),n.jsx("select",{value:l,onChange:S=>o(S.target.value),children:h.map((S,j)=>n.jsx("option",{children:S},j))}),n.jsxs("select",{value:u,onChange:S=>f(S.target.value),children:[n.jsx("option",{value:"default",children:"Sort"}),n.jsx("option",{value:"low",children:"Price Low → High"}),n.jsx("option",{value:"high",children:"Price High → Low"}),n.jsx("option",{value:"rating",children:"Rating"})]})]}),n.jsx("div",{className:"fert-grid",children:E.map(S=>n.jsx(ix,{item:S},S.id))}),n.jsxs("div",{className:"fert-pagination",children:[n.jsx("button",{disabled:p===1,onClick:()=>g(p-1),children:"⟵ Prev"}),n.jsxs("span",{children:["Page ",p," of ",v]}),n.jsx("button",{disabled:p===v,onClick:()=>g(p+1),children:"Next ⟶"})]}),n.jsx("style",{children:`
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
      `})]})};function T6(){const[r,s]=w.useState([]),[l,o]=w.useState(""),[u,f]=w.useState(0),[p,g]=w.useState([]),[x,h]=w.useState([]);w.useEffect(()=>{const R=JSON.parse(localStorage.getItem("agri_cart"))||[];s(R)},[]);const b=(R,V)=>{const re=r.map(W=>{if(W.id===R){const le=V==="inc"?W.quantity+1:W.quantity-1;return{...W,quantity:le>1?le:1}}return W});s(re),localStorage.setItem("agri_cart",JSON.stringify(re))},v=R=>{const V=r.filter(re=>re.id!==R);s(V),localStorage.setItem("agri_cart",JSON.stringify(V))},E=()=>{l==="FARM10"?f(10):l==="FARM20"?f(20):(f(0),alert("Invalid Coupon"))},S=R=>{g([...p,R]),v(R.id)},j=R=>{h([...x,R])},O=r.reduce((R,V)=>R+V.price*V.quantity,0),z=O-O*u/100,H=()=>{const R=new Date;return R.setDate(R.getDate()+4),R.toDateString()};return n.jsxs(n.Fragment,{children:[n.jsx(Hl,{}),n.jsxs("div",{className:"cart-wrapper",children:[n.jsx("style",{children:`
        .cart-wrapper { max-width: 1200px; margin: auto; padding: 20px; }

        .info-bar { background:#FFF3CD; padding:15px; border-left:4px solid #E0A800; border-radius:8px; 
                    margin-bottom:20px; color:#8A6D00; }

        .cart-title { font-size:32px; font-weight:bold; display:flex; align-items:center; gap:10px; margin-bottom:20px; }

        .cart-grid { display:grid; grid-template-columns:1fr; gap:20px; }
        @media(min-width:1024px){ .cart-grid { grid-template-columns:2fr 1fr; } }

        .cart-card { background:white; border:1px solid #ddd; padding:15px; border-radius:14px;
                     display:flex; justify-content:space-between; gap:20px; }

        .cart-card img { width:90px; height:90px; object-fit:cover; border-radius:10px; }

        .qty-btn { padding:6px; border:1px solid #ccc; border-radius:50%; cursor:pointer; background:white; }
        .qty-btn:hover { background:#f0f0f0; }

        .delete-btn { background:#ffd6d6; padding:10px; border-radius:50%; color:red; cursor:pointer; }
        .delete-btn:hover { background:#ffbdbd; }

        .summary-box { background:white; border:1px solid #ddd; padding:20px; border-radius:14px; }

        .summary-row { display:flex; justify-content:space-between; padding:6px 0; font-size:16px; }

        .checkout-btn { width:100%; padding:14px; border-radius:12px; background:#28a745; 
                        font-weight:bold; color:white; cursor:pointer; margin-top:15px; font-size:18px; }
        .checkout-btn:hover { background:#208838; }

        .coupon-box { display:flex; gap:10px; margin:20px 0; }
        .coupon-input { flex:1; padding:10px; border-radius:8px; border:1px solid #ccc; font-size:16px; }
        .coupon-btn { padding:10px 20px; background:#007bff; color:white; border-radius:8px; cursor:pointer; }
        .coupon-btn:hover { background:#0063d1; }

        .continue-btn { margin:40px auto; display:block; background:#2874f0; padding:14px 28px; color:white;
                        border-radius:12px; font-weight:bold; text-align:center; width:fit-content; font-size:18px; }
        .continue-btn:hover { background:#145ac4; }

        .suggest-section { margin-top:50px; background:#f8f9fa; padding:20px; border-radius:12px; border:1px solid #ddd; }

        .suggest-item { min-width:180px; background:white; padding:10px; border-radius:10px;
                        border:1px solid #ddd; text-align:center; }
        .suggest-item img { width:100%; border-radius:10px; }

        .extra-info { margin-top:40px; background:white; border-radius:12px; padding:20px; 
                      border:1px solid #ddd; font-size:15px; }
      `}),n.jsx("div",{className:"info-bar",children:"🛒 Items in your cart are not reserved — checkout soon!"}),n.jsxs("h1",{className:"cart-title",children:[n.jsx(cw,{})," Your Cart"]}),r.length===0?n.jsx("h2",{children:"Your cart is empty."}):n.jsxs("div",{className:"cart-grid",children:[n.jsx("div",{children:r.map(R=>n.jsxs("div",{className:"cart-card",children:[n.jsx("img",{src:R.image,alt:R.name}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h3",{style:{fontSize:18,fontWeight:"bold"},children:R.name}),n.jsxs("p",{children:["₹",R.price]}),n.jsxs("p",{style:{color:"green",display:"flex",gap:6},children:[n.jsx(td,{size:16})," Delivery by ",H()]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginTop:"10px"},children:[n.jsx("button",{className:"qty-btn",onClick:()=>b(R.id,"dec"),children:n.jsx(Fj,{size:15})}),n.jsx("span",{style:{fontWeight:"bold",fontSize:18},children:R.quantity}),n.jsx("button",{className:"qty-btn",onClick:()=>b(R.id,"inc"),children:n.jsx(aw,{size:15})})]}),n.jsxs("div",{style:{display:"flex",gap:"15px",marginTop:"12px"},children:[n.jsxs("button",{onClick:()=>S(R),style:{color:"blue"},children:[n.jsx(xj,{size:16})," Save for Later"]}),n.jsxs("button",{onClick:()=>j(R),style:{color:"crimson"},children:[n.jsx(Uj,{size:16})," Wishlist"]})]})]}),n.jsx("button",{className:"delete-btn",onClick:()=>v(R.id),children:n.jsx(ed,{})})]},R.id))}),n.jsxs("div",{className:"summary-box",children:[n.jsx("h2",{style:{fontSize:22,fontWeight:"bold"},children:"Price Details"}),n.jsxs("div",{className:"summary-row",children:[n.jsx("span",{children:"Subtotal"}),n.jsxs("span",{children:["₹",O]})]}),n.jsxs("div",{className:"summary-row",children:[n.jsx("span",{children:"Delivery"}),n.jsx("span",{style:{color:"green"},children:"FREE"})]}),n.jsxs("div",{className:"summary-row",children:[n.jsx("span",{children:"Discount"}),n.jsxs("span",{children:["- ",u,"%"]})]}),n.jsx("hr",{}),n.jsxs("div",{className:"summary-row",style:{fontWeight:"bold",fontSize:18},children:[n.jsx("span",{children:"Total"}),n.jsxs("span",{children:["₹",z]})]}),n.jsxs("div",{className:"coupon-box",children:[n.jsx("input",{className:"coupon-input",placeholder:"Enter coupon",value:l,onChange:R=>o(R.target.value)}),n.jsx("button",{className:"coupon-btn",onClick:E,children:"Apply"})]}),n.jsx("button",{className:"checkout-btn",children:"Pay with Razorpay ▶"})]})]}),n.jsx(oe,{className:"continue-btn",to:"/userdashboard",children:"← Continue Shopping"}),n.jsxs("div",{className:"extra-info",children:[n.jsx("h3",{style:{fontSize:20,fontWeight:"bold"},children:"Why shop with AgriFarm?"}),n.jsxs("ul",{style:{lineHeight:"28px",marginTop:8},children:[n.jsx("li",{children:"✔ Trusted suppliers"}),n.jsx("li",{children:"✔ Easy 7-day returns"}),n.jsx("li",{children:"✔ Real-time order tracking"}),n.jsx("li",{children:"✔ Bulk discounts for farmers"}),n.jsx("li",{children:"✔ 24/7 support"})]})]}),n.jsxs("div",{className:"suggest-section",children:[n.jsx("h3",{style:{fontSize:22,fontWeight:"bold"},children:"Recommended for You"}),n.jsxs("div",{style:{display:"flex",gap:"20px",overflowX:"auto",paddingTop:10},children:[n.jsxs("div",{className:"suggest-item",children:[n.jsx("img",{src:"https://m.media-amazon.com/images/I/71jTQtFCtUL._SL1500_.jpg",alt:"Irrigation Kit"}),n.jsx("p",{children:n.jsx("b",{children:"Drip Irrigation Kit"})}),n.jsx("p",{style:{color:"green"},children:"₹1499"})]}),n.jsxs("div",{className:"suggest-item",children:[n.jsx("img",{src:"https://m.media-amazon.com/images/I/71JFZ8tL4xL.jpg",alt:"Fertilizer"}),n.jsx("p",{children:n.jsx("b",{children:"Organic Fertilizer"})}),n.jsx("p",{style:{color:"green"},children:"₹450"})]}),n.jsxs("div",{className:"suggest-item",children:[n.jsx("img",{src:"https://www.bigbasket.com/media/uploads/p/xxl/40120007-2_3-seeds-corn-hybrid.jpg",alt:"Corn Seeds"}),n.jsx("p",{children:n.jsx("b",{children:"Corn Hybrid Seeds"})}),n.jsx("p",{style:{color:"green"},children:"₹320"})]})]})]})]})]})}function R6(){const r=[{id:"ORD12345",date:"Feb 20, 2025",deliveryDate:"Feb 25, 2025",status:"Delivered",progress:4,products:[{name:"Organic Fertilizer – 5 KG",price:450,img:"https://m.media-amazon.com/images/I/71JFZ8tL4xL.jpg"}]},{id:"ORD67890",date:"Feb 24, 2025",deliveryDate:"Expected Mar 02, 2025",status:"Out for Delivery",progress:3,products:[{name:"Hybrid Maize Seeds – 1 KG",price:320,img:"https://www.bigbasket.com/media/uploads/p/xxl/40120007-2_3-seeds-corn-hybrid.jpg"}]}];return n.jsxs(n.Fragment,{children:[n.jsx(Hl,{}),n.jsxs("div",{className:"orders-wrapper",children:[n.jsx("style",{children:`
        .orders-wrapper { max-width: 1000px; margin: auto; padding: 20px; font-family: sans-serif; }
        .orders-title { font-size: 32px; font-weight: bold; margin-bottom: 25px; }

        .order-card {
          background: white;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 16px;
          margin-bottom: 22px;
          transition: 0.3s;
        }
        .order-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.12); }

        .order-header { display: flex; justify-content: space-between; margin-bottom: 15px; }
        .order-id { font-size: 15px; color: #666; }
        .order-date { font-size: 14px; color: #444; }

        .product-row { display: flex; gap: 15px; margin-top: 10px; }
        .product-img { width: 85px; height: 85px; border-radius: 10px; object-fit: cover; }
        .product-name { font-size: 18px; font-weight: bold; }
        .price { font-size: 18px; margin-top: 5px; font-weight: bold; }

        .status-tag { margin-top: 5px; font-weight: bold; }
        .delivered { color: green; }
        .shipped { color: orange; }
        .out-for-delivery { color: #0a7cff; }
        .packed { color: #444; }

        /* PROGRESS BAR */
        .progress-bar {
          margin-top: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .progress-line {
          position: absolute;
          top: 50%;
          left: 5%;
          width: 90%;
          height: 3px;
          background: #ddd;
          z-index: 1;
        }

        .progress-step {
          z-index: 2;
          background: white;
          padding: 5px;
          border-radius: 50%;
          border: 2px solid #999;
        }

        .active-step { border-color: green; color: green; }

        .btn-row {
          margin-top: 20px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 10px 16px;
          border-radius: 10px;
          cursor: pointer;
          font-size: 15px;
          font-weight: bold;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .btn-track { background: #007bff; color: white; }
        .btn-reorder { background: #28a745; color: white; }
        .btn-invoice { background: #f4f4f4; color: black; }
        .btn-support { background: #ffe8c4; color: #9c6200; }
        .continue-shopping {
          background:#2874f0; 
          color:white; 
          padding:10px 18px; 
          border-radius:10px;
        }
      `}),n.jsx("h1",{className:"orders-title",children:"Your Orders"}),r.map(s=>n.jsxs("div",{className:"order-card",children:[n.jsxs("div",{className:"order-header",children:[n.jsxs("p",{className:"order-id",children:["Order ID: ",s.id]}),n.jsxs("p",{className:"order-date",children:["Ordered on: ",s.date]})]}),s.products.map((l,o)=>n.jsxs("div",{className:"product-row",children:[n.jsx("img",{src:l.img,className:"product-img",alt:""}),n.jsxs("div",{children:[n.jsx("p",{className:"product-name",children:l.name}),n.jsxs("p",{className:"price",children:["₹",l.price]}),n.jsxs("p",{className:`status-tag ${s.status.toLowerCase().replace(/ /g,"-")}`,children:["Status: ",s.status]}),n.jsxs("p",{style:{color:"#333",marginTop:4},children:["Delivery: ",n.jsx("b",{children:s.deliveryDate})]})]})]},o)),n.jsxs("div",{className:"progress-bar",children:[n.jsx("div",{className:"progress-line"}),n.jsx(Nx,{className:`progress-step ${s.progress>=1?"active-step":""}`}),n.jsx(Tj,{className:`progress-step ${s.progress>=2?"active-step":""}`}),n.jsx(td,{className:`progress-step ${s.progress>=3?"active-step":""}`}),n.jsx(Wu,{className:`progress-step ${s.progress>=4?"active-step":""}`})]}),n.jsxs("div",{className:"btn-row",children:[n.jsx(oe,{to:`/track-order/${s.id}`,className:"btn btn-track",children:"Track Order"}),n.jsx(oe,{to:`/product/${s.id}`,className:"btn btn-reorder",children:"Reorder"}),n.jsx(oe,{to:`/invoice/${s.id}`,className:"btn btn-invoice",children:"Download Invoice"}),n.jsxs(oe,{to:"/support",className:"btn btn-support",children:[n.jsx(Yj,{size:16})," Support"]}),n.jsx(oe,{to:"/userdashboard",className:"btn continue-shopping",children:"← Continue Shopping"})]})]},s.id))]})]})}function M6(){const r={id:"ORD12345",productName:"Organic Fertilizer – 5 KG",img:"https://m.media-amazon.com/images/I/71JFZ8tL4xL.jpg",price:450,orderedOn:"Feb 20, 2025",estimated:"Feb 25, 2025",status:4,address:{name:"Ramesh Kumar",phone:"9876543210",street:"Plot 22, Green Valley",village:"Madha Village",district:"Nellore",state:"Andhra Pradesh",pincode:"524101"}},s=[{id:1,label:"Ordered",icon:n.jsx($u,{size:22})},{id:2,label:"Packed",icon:n.jsx(Nx,{size:22})},{id:3,label:"Shipped",icon:n.jsx(td,{size:22})},{id:4,label:"Out for Delivery",icon:n.jsx(Mj,{size:22})},{id:5,label:"Delivered",icon:n.jsx(Wu,{size:22})}];return n.jsxs("div",{className:"track-wrapper",children:[n.jsx("style",{children:`
        .track-wrapper { max-width: 900px; margin: auto; padding: 20px; }

        .title { font-size: 30px; font-weight: bold; margin-bottom: 15px; }

        .order-card {
          background: white;
          border: 1px solid #ddd;
          padding: 18px;
          border-radius: 14px;
          margin-bottom: 20px;
        }

        .product-row { display: flex; gap: 15px; margin-bottom: 20px; }
        .product-img { width: 90px; height: 90px; object-fit: cover; border-radius: 10px; }

        .product-name { font-size: 18px; font-weight: bold; }
        .price { font-size: 18px; font-weight: bold; margin-top: 5px; }

        .timeline { margin-top: 25px; position: relative; }
        .line {
          position: absolute; top: 30px; left: 10px;
          width: 3px; height: calc(100% - 50px);
          background: #ddd;
        }

        .step {
          display: flex; gap: 15px; margin-bottom: 35px;
          align-items: center;
        }

        .step-icon {
          width: 40px; height: 40px;
          border-radius: 50%;
          display:flex; justify-content:center; align-items:center;
          background:#f2f2f2;
          border:2px solid #ccc;
          z-index:2;
        }

        .step-active {
          background: #d4f8d4;
          border-color: green;
          color: green;
        }

        .address-box, .summary-box {
          background: white;
          border: 1px solid #ddd;
          padding: 16px;
          border-radius: 14px;
          margin-top: 20px;
        }

        .address-title, .summary-title {
          font-size: 20px; font-weight: bold; margin-bottom: 10px;
        }

        .address-line { font-size: 15px; margin-bottom: 4px; }

        .summary-row { display: flex; justify-content: space-between; padding: 4px 0; }

        @media (max-width:600px) {
          .product-row { flex-direction: column; text-align:center; }
        }
      `}),n.jsx("h1",{className:"title",children:"Track Your Order"}),n.jsxs("div",{className:"order-card",children:[n.jsxs("div",{className:"product-row",children:[n.jsx("img",{src:r.img,className:"product-img"}),n.jsxs("div",{children:[n.jsx("p",{className:"product-name",children:r.productName}),n.jsxs("p",{className:"price",children:["₹",r.price]}),n.jsxs("p",{style:{color:"#666",marginTop:6},children:["Order ID: ",r.id]}),n.jsxs("p",{style:{color:"#666"},children:["Ordered on: ",r.orderedOn]}),n.jsxs("p",{style:{color:"green",marginTop:4},children:["Estimated Delivery: ",n.jsx("b",{children:r.estimated})]})]})]}),n.jsxs("div",{className:"timeline",children:[n.jsx("div",{className:"line"}),s.map(l=>n.jsxs("div",{className:"step",children:[n.jsx("div",{className:`step-icon ${r.status>=l.id?"step-active":""}`,children:l.icon}),n.jsx("p",{style:{fontSize:17,fontWeight:r.status>=l.id?"bold":"normal"},children:l.label})]},l.id))]})]}),n.jsxs("div",{className:"address-box",children:[n.jsx("p",{className:"address-title",children:"Delivery Address"}),n.jsx("p",{className:"address-line",children:n.jsx("b",{children:r.address.name})}),n.jsxs("p",{className:"address-line",children:[n.jsx(Ex,{size:15})," ",r.address.phone]}),n.jsx("p",{className:"address-line",children:r.address.street}),n.jsx("p",{className:"address-line",children:r.address.village}),n.jsxs("p",{className:"address-line",children:[r.address.district,", ",r.address.state," - ",r.address.pincode]})]}),n.jsxs("div",{className:"summary-box",children:[n.jsx("p",{className:"summary-title",children:"Order Summary"}),n.jsxs("div",{className:"summary-row",children:[n.jsx("span",{children:"Item Price"})," ",n.jsxs("span",{children:["₹",r.price]})]}),n.jsxs("div",{className:"summary-row",children:[n.jsx("span",{children:"Delivery"})," ",n.jsx("span",{style:{color:"green"},children:"FREE"})]}),n.jsx("hr",{}),n.jsxs("div",{className:"summary-row",style:{fontWeight:"bold",fontSize:18},children:[n.jsx("span",{children:"Total Paid"})," ",n.jsxs("span",{children:["₹",r.price]})]})]})]})}function B6(){const r=[{id:1,name:"Organic Fertilizer 5KG",price:450,mrp:699,discount:"35% off",img:"https://m.media-amazon.com/images/I/71JFZ8tL4xL.jpg"},{id:2,name:"Hybrid Maize Seeds 1KG",price:320,mrp:420,discount:"24% off",img:"https://www.bigbasket.com/media/uploads/p/xxl/40120007-2_3-seeds-corn-hybrid.jpg"}];return n.jsxs(n.Fragment,{children:[n.jsx(Hl,{}),n.jsxs("div",{className:"wishlist-wrapper",children:[n.jsx("style",{children:`
        .wishlist-wrapper {
          max-width: 1100px;
          margin: auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .title {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        /* GRID layout */
        .wishlist-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
        }

        .wish-card {
          background: white;
          padding: 14px;
          border-radius: 14px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
          border: 1px solid #eee;
          transition: 0.3s;
        }
        .wish-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }

        .wish-img {
          width: 100%;
          height: 200px;
          object-fit: contain;
          background: #fafafa;
          border-radius: 12px;
        }

        .wish-name {
          font-weight: bold;
          font-size: 18px;
          margin-top: 10px;
        }

        .price-box {
          margin-top: 8px;
        }
        .price {
          color: green;
          font-size: 20px;
          font-weight: bold;
        }
        .mrp {
          margin-left: 10px;
          text-decoration: line-through;
          color: #777;
        }
        .discount {
          color: #d32f2f;
          margin-left: 6px;
          font-weight: 600;
        }

        .btn-row {
          display: flex;
          gap: 10px;
          margin-top: 12px;
        }

        .btn {
          flex: 1;
          padding: 10px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          text-align: center;
          transition: 0.2s;
        }
        .btn-cart {
          background: #1a8c1a;
          color: white;
        }
        .btn-cart:hover {
          background: #146814;
        }
        .btn-remove {
          background: #fff2f2;
          color: #d32f2f;
        }
        .btn-remove:hover {
          background: #ffe5e5;
        }

        /* Empty wishlist */
        .empty-box {
          text-align: center;
          padding: 50px 20px;
        }
        .empty-icon {
          font-size: 70px;
          color: #d9534f;
          margin-bottom: 10px;
        }
        .empty-title {
          font-size: 22px;
          font-weight: bold;
          color: #444;
        }
        .empty-sub {
          color: #666;
          margin-top: 6px;
        }
        .start-shopping {
          margin-top: 20px;
          display: inline-block;
          background: #2a7a0e;
          color: white;
          padding: 12px 20px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
        }
        .start-shopping:hover {
          background: #25690d;
        }

        @media (max-width: 480px) {
          .wish-img { height: 170px; }
          .title { font-size: 26px; }
        }
      `}),n.jsx("h1",{className:"title",children:"My Wishlist"}),r.length===0&&n.jsxs("div",{className:"empty-box",children:[n.jsx(G2,{className:"empty-icon"}),n.jsx("p",{className:"empty-title",children:"Your Wishlist is Empty"}),n.jsx("p",{className:"empty-sub",children:"Save items you love and buy them anytime."}),n.jsx(oe,{to:"/products",className:"start-shopping",children:"Start Shopping"})]}),n.jsx("div",{className:"wishlist-grid",children:r.map(s=>n.jsxs("div",{className:"wish-card",children:[n.jsx("img",{src:s.img,alt:s.name,className:"wish-img"}),n.jsx("p",{className:"wish-name",children:s.name}),n.jsxs("div",{className:"price-box",children:[n.jsxs("span",{className:"price",children:["₹",s.price]}),n.jsxs("span",{className:"mrp",children:["₹",s.mrp]}),n.jsx("span",{className:"discount",children:s.discount})]}),n.jsxs("div",{className:"btn-row",children:[n.jsxs("button",{className:"btn btn-cart",children:[n.jsx(Nu,{})," Add to Cart"]}),n.jsxs("button",{className:"btn btn-remove",children:[n.jsx(F2,{})," Remove"]})]})]},s.id))})]})]})}function D6(){return n.jsx(n.Fragment,{children:n.jsxs(t2,{children:[n.jsx(Ee,{path:"/",element:n.jsx(Pv,{})}),n.jsx(Ee,{path:"/login",element:n.jsx(Ev,{})}),n.jsx(Ee,{path:"/register",element:n.jsx(Cv,{})}),n.jsx(Ee,{path:"/contact",element:n.jsx(hu,{})}),n.jsx(Ee,{path:"/services",element:n.jsx(mu,{})}),n.jsx(Ee,{path:"/about",element:n.jsx(gu,{})}),n.jsx(Ee,{path:"/category/vegetable-seeds",element:n.jsx(Zv,{})}),n.jsx(Ee,{path:"/seeds/:id",element:n.jsx(Xv,{})}),n.jsx(Ee,{path:"/fertilizers/:id",element:n.jsx(Jv,{})}),n.jsx(Ee,{path:"/category/fertilizers",element:n.jsx(k6,{})}),n.jsx(Ee,{path:"/category/farm-machinery",element:n.jsx(_v,{})}),n.jsx(Ee,{path:"/machinery/:id",element:n.jsx(Xw,{})}),n.jsx(Ee,{path:"/category/offers-today",element:n.jsx(Kv,{})}),n.jsx(Ee,{path:"/best-selling",element:n.jsx(ej,{})}),n.jsx(Ee,{path:"/vendor-login",element:n.jsx(rj,{})}),n.jsx(Ee,{path:"/vendor-register",element:n.jsx(sj,{})}),n.jsxs(Ee,{path:"/vendor",element:n.jsx(Tw,{}),children:[n.jsx(Ee,{index:!0,element:n.jsx(fm,{to:"dashboard",replace:!0})}),n.jsx(Ee,{path:"dashboard",element:n.jsx(Rw,{})}),n.jsx(Ee,{path:"products",element:n.jsx(Lw,{})}),n.jsx(Ee,{path:"orders",element:n.jsx(Uw,{})}),n.jsx(Ee,{path:"profile",element:n.jsx(Hw,{})}),n.jsx(Ee,{path:"about",element:n.jsx(gu,{})}),n.jsx(Ee,{path:"services",element:n.jsx(mu,{})}),n.jsx(Ee,{path:"contact",element:n.jsx(hu,{})}),n.jsx(Ee,{path:"settings",element:n.jsx(Ym,{})})]}),n.jsx(Ee,{path:"/admin-login",element:n.jsx(Gw,{})}),n.jsxs(Ee,{path:"/admin",element:n.jsx(Kw,{}),children:["Default redirect",n.jsx(Ee,{index:!0,element:n.jsx(fm,{to:"dashboard",replace:!0})}),n.jsx(Ee,{path:"dashboard",element:n.jsx(Fw,{})}),n.jsx(Ee,{path:"users",element:n.jsx(Pw,{})}),n.jsx(Ee,{path:"vendors",element:n.jsx(Zw,{})}),n.jsx(Ee,{path:"about",element:n.jsx(gu,{})}),n.jsx(Ee,{path:"services",element:n.jsx(mu,{})}),n.jsx(Ee,{path:"contact",element:n.jsx(hu,{})}),n.jsx(Ee,{path:"settings",element:n.jsx(Ym,{})}),n.jsx(Ee,{})]}),n.jsx(Ee,{path:"/userdashboard",element:n.jsx(O6,{})}),n.jsx(Ee,{path:"/cart",element:n.jsx(T6,{})}),n.jsx(Ee,{path:"/orders",element:n.jsx(R6,{})}),n.jsx(Ee,{path:"/track-order/:orderId",element:n.jsx(M6,{})}),n.jsx(Ee,{path:"/wishlist",element:n.jsx(B6,{})}),n.jsx(Ee,{path:"*",element:n.jsx("div",{style:{padding:40},children:"404 Not Found"})})]})})}function L6(){const{pathname:r,key:s}=ga(),l=w.useRef({});return w.useEffect(()=>{const o=l.current[s];if(o!==void 0){requestAnimationFrame(()=>{window.scrollTo({top:o,behavior:"auto"})});return}requestAnimationFrame(()=>{window.scrollTo({top:0,behavior:"smooth"})});const u=()=>{l.current[s]=window.scrollY};return window.addEventListener("beforeunload",u),()=>window.removeEventListener("beforeunload",u)},[r,s]),null}cb.createRoot(document.getElementById("root")).render(n.jsx(w.StrictMode,{children:n.jsx(L4,{i18n:dt,children:n.jsxs(S2,{basename:"/AgriTechUl/",children:[n.jsx(L6,{}),n.jsx(D6,{})]})})}));
