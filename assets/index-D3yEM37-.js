(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function c(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(d){if(d.ep)return;d.ep=!0;const p=c(d);fetch(d.href,p)}})();function Tx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Uc={exports:{}},zi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh;function Bx(){if(vh)return zi;vh=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(u,d,p){var h=null;if(p!==void 0&&(h=""+p),d.key!==void 0&&(h=""+d.key),"key"in d){p={};for(var x in d)x!=="key"&&(p[x]=d[x])}else p=d;return d=p.ref,{$$typeof:i,type:u,key:h,ref:d!==void 0?d:null,props:p}}return zi.Fragment=s,zi.jsx=c,zi.jsxs=c,zi}var Ah;function Rx(){return Ah||(Ah=1,Uc.exports=Bx()),Uc.exports}var l=Rx(),Dc={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jh;function Mx(){if(jh)return xe;jh=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),h=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),H=Symbol.iterator;function z(A){return A===null||typeof A!="object"?null:(A=H&&A[H]||A["@@iterator"],typeof A=="function"?A:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,U={};function Y(A,L,X){this.props=A,this.context=L,this.refs=U,this.updater=X||w}Y.prototype.isReactComponent={},Y.prototype.setState=function(A,L){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,L,"setState")},Y.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function J(){}J.prototype=Y.prototype;function ee(A,L,X){this.props=A,this.context=L,this.refs=U,this.updater=X||w}var me=ee.prototype=new J;me.constructor=ee,T(me,Y.prototype),me.isPureReactComponent=!0;var re=Array.isArray;function pe(){}var ie={H:null,A:null,T:null,S:null},se=Object.prototype.hasOwnProperty;function de(A,L,X){var _=X.ref;return{$$typeof:i,type:A,key:L,ref:_!==void 0?_:null,props:X}}function ke(A,L){return de(A.type,L,A.props)}function Te(A){return typeof A=="object"&&A!==null&&A.$$typeof===i}function ye(A){var L={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(X){return L[X]})}var Qe=/\/+/g;function Ne(A,L){return typeof A=="object"&&A!==null&&A.key!=null?ye(""+A.key):L.toString(36)}function Ye(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(pe,pe):(A.status="pending",A.then(function(L){A.status==="pending"&&(A.status="fulfilled",A.value=L)},function(L){A.status==="pending"&&(A.status="rejected",A.reason=L)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function B(A,L,X,_,ue){var ge=typeof A;(ge==="undefined"||ge==="boolean")&&(A=null);var Ue=!1;if(A===null)Ue=!0;else switch(ge){case"bigint":case"string":case"number":Ue=!0;break;case"object":switch(A.$$typeof){case i:case s:Ue=!0;break;case y:return Ue=A._init,B(Ue(A._payload),L,X,_,ue)}}if(Ue)return ue=ue(A),Ue=_===""?"."+Ne(A,0):_,re(ue)?(X="",Ue!=null&&(X=Ue.replace(Qe,"$&/")+"/"),B(ue,L,X,"",function(Bt){return Bt})):ue!=null&&(Te(ue)&&(ue=ke(ue,X+(ue.key==null||A&&A.key===ue.key?"":(""+ue.key).replace(Qe,"$&/")+"/")+Ue)),L.push(ue)),1;Ue=0;var at=_===""?".":_+":";if(re(A))for(var Pe=0;Pe<A.length;Pe++)_=A[Pe],ge=at+Ne(_,Pe),Ue+=B(_,L,X,ge,ue);else if(Pe=z(A),typeof Pe=="function")for(A=Pe.call(A),Pe=0;!(_=A.next()).done;)_=_.value,ge=at+Ne(_,Pe++),Ue+=B(_,L,X,ge,ue);else if(ge==="object"){if(typeof A.then=="function")return B(Ye(A),L,X,_,ue);throw L=String(A),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return Ue}function W(A,L,X){if(A==null)return A;var _=[],ue=0;return B(A,_,"","",function(ge){return L.call(X,ge,ue++)}),_}function ne(A){if(A._status===-1){var L=A._result;L=L(),L.then(function(X){(A._status===0||A._status===-1)&&(A._status=1,A._result=X)},function(X){(A._status===0||A._status===-1)&&(A._status=2,A._result=X)}),A._status===-1&&(A._status=0,A._result=L)}if(A._status===1)return A._result.default;throw A._result}var G=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},te={map:W,forEach:function(A,L,X){W(A,function(){L.apply(this,arguments)},X)},count:function(A){var L=0;return W(A,function(){L++}),L},toArray:function(A){return W(A,function(L){return L})||[]},only:function(A){if(!Te(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return xe.Activity=j,xe.Children=te,xe.Component=Y,xe.Fragment=c,xe.Profiler=d,xe.PureComponent=ee,xe.StrictMode=u,xe.Suspense=b,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ie,xe.__COMPILER_RUNTIME={__proto__:null,c:function(A){return ie.H.useMemoCache(A)}},xe.cache=function(A){return function(){return A.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(A,L,X){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var _=T({},A.props),ue=A.key;if(L!=null)for(ge in L.key!==void 0&&(ue=""+L.key),L)!se.call(L,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&L.ref===void 0||(_[ge]=L[ge]);var ge=arguments.length-2;if(ge===1)_.children=X;else if(1<ge){for(var Ue=Array(ge),at=0;at<ge;at++)Ue[at]=arguments[at+2];_.children=Ue}return de(A.type,ue,_)},xe.createContext=function(A){return A={$$typeof:h,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:p,_context:A},A},xe.createElement=function(A,L,X){var _,ue={},ge=null;if(L!=null)for(_ in L.key!==void 0&&(ge=""+L.key),L)se.call(L,_)&&_!=="key"&&_!=="__self"&&_!=="__source"&&(ue[_]=L[_]);var Ue=arguments.length-2;if(Ue===1)ue.children=X;else if(1<Ue){for(var at=Array(Ue),Pe=0;Pe<Ue;Pe++)at[Pe]=arguments[Pe+2];ue.children=at}if(A&&A.defaultProps)for(_ in Ue=A.defaultProps,Ue)ue[_]===void 0&&(ue[_]=Ue[_]);return de(A,ge,ue)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(A){return{$$typeof:x,render:A}},xe.isValidElement=Te,xe.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:ne}},xe.memo=function(A,L){return{$$typeof:m,type:A,compare:L===void 0?null:L}},xe.startTransition=function(A){var L=ie.T,X={};ie.T=X;try{var _=A(),ue=ie.S;ue!==null&&ue(X,_),typeof _=="object"&&_!==null&&typeof _.then=="function"&&_.then(pe,G)}catch(ge){G(ge)}finally{L!==null&&X.types!==null&&(L.types=X.types),ie.T=L}},xe.unstable_useCacheRefresh=function(){return ie.H.useCacheRefresh()},xe.use=function(A){return ie.H.use(A)},xe.useActionState=function(A,L,X){return ie.H.useActionState(A,L,X)},xe.useCallback=function(A,L){return ie.H.useCallback(A,L)},xe.useContext=function(A){return ie.H.useContext(A)},xe.useDebugValue=function(){},xe.useDeferredValue=function(A,L){return ie.H.useDeferredValue(A,L)},xe.useEffect=function(A,L){return ie.H.useEffect(A,L)},xe.useEffectEvent=function(A){return ie.H.useEffectEvent(A)},xe.useId=function(){return ie.H.useId()},xe.useImperativeHandle=function(A,L,X){return ie.H.useImperativeHandle(A,L,X)},xe.useInsertionEffect=function(A,L){return ie.H.useInsertionEffect(A,L)},xe.useLayoutEffect=function(A,L){return ie.H.useLayoutEffect(A,L)},xe.useMemo=function(A,L){return ie.H.useMemo(A,L)},xe.useOptimistic=function(A,L){return ie.H.useOptimistic(A,L)},xe.useReducer=function(A,L,X){return ie.H.useReducer(A,L,X)},xe.useRef=function(A){return ie.H.useRef(A)},xe.useState=function(A){return ie.H.useState(A)},xe.useSyncExternalStore=function(A,L,X){return ie.H.useSyncExternalStore(A,L,X)},xe.useTransition=function(){return ie.H.useTransition()},xe.version="19.2.0",xe}var wh;function us(){return wh||(wh=1,Dc.exports=Mx()),Dc.exports}var S=us();const Mn=Tx(S);var kc={exports:{}},Ci={},Lc={exports:{}},Hc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sh;function Ux(){return Sh||(Sh=1,(function(i){function s(B,W){var ne=B.length;B.push(W);e:for(;0<ne;){var G=ne-1>>>1,te=B[G];if(0<d(te,W))B[G]=W,B[ne]=te,ne=G;else break e}}function c(B){return B.length===0?null:B[0]}function u(B){if(B.length===0)return null;var W=B[0],ne=B.pop();if(ne!==W){B[0]=ne;e:for(var G=0,te=B.length,A=te>>>1;G<A;){var L=2*(G+1)-1,X=B[L],_=L+1,ue=B[_];if(0>d(X,ne))_<te&&0>d(ue,X)?(B[G]=ue,B[_]=ne,G=_):(B[G]=X,B[L]=ne,G=L);else if(_<te&&0>d(ue,ne))B[G]=ue,B[_]=ne,G=_;else break e}}return W}function d(B,W){var ne=B.sortIndex-W.sortIndex;return ne!==0?ne:B.id-W.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var h=Date,x=h.now();i.unstable_now=function(){return h.now()-x}}var b=[],m=[],y=1,j=null,H=3,z=!1,w=!1,T=!1,U=!1,Y=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function me(B){for(var W=c(m);W!==null;){if(W.callback===null)u(m);else if(W.startTime<=B)u(m),W.sortIndex=W.expirationTime,s(b,W);else break;W=c(m)}}function re(B){if(T=!1,me(B),!w)if(c(b)!==null)w=!0,pe||(pe=!0,ye());else{var W=c(m);W!==null&&Ye(re,W.startTime-B)}}var pe=!1,ie=-1,se=5,de=-1;function ke(){return U?!0:!(i.unstable_now()-de<se)}function Te(){if(U=!1,pe){var B=i.unstable_now();de=B;var W=!0;try{e:{w=!1,T&&(T=!1,J(ie),ie=-1),z=!0;var ne=H;try{t:{for(me(B),j=c(b);j!==null&&!(j.expirationTime>B&&ke());){var G=j.callback;if(typeof G=="function"){j.callback=null,H=j.priorityLevel;var te=G(j.expirationTime<=B);if(B=i.unstable_now(),typeof te=="function"){j.callback=te,me(B),W=!0;break t}j===c(b)&&u(b),me(B)}else u(b);j=c(b)}if(j!==null)W=!0;else{var A=c(m);A!==null&&Ye(re,A.startTime-B),W=!1}}break e}finally{j=null,H=ne,z=!1}W=void 0}}finally{W?ye():pe=!1}}}var ye;if(typeof ee=="function")ye=function(){ee(Te)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Ne=Qe.port2;Qe.port1.onmessage=Te,ye=function(){Ne.postMessage(null)}}else ye=function(){Y(Te,0)};function Ye(B,W){ie=Y(function(){B(i.unstable_now())},W)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(B){B.callback=null},i.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<B?Math.floor(1e3/B):5},i.unstable_getCurrentPriorityLevel=function(){return H},i.unstable_next=function(B){switch(H){case 1:case 2:case 3:var W=3;break;default:W=H}var ne=H;H=W;try{return B()}finally{H=ne}},i.unstable_requestPaint=function(){U=!0},i.unstable_runWithPriority=function(B,W){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ne=H;H=B;try{return W()}finally{H=ne}},i.unstable_scheduleCallback=function(B,W,ne){var G=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?G+ne:G):ne=G,B){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ne+te,B={id:y++,callback:W,priorityLevel:B,startTime:ne,expirationTime:te,sortIndex:-1},ne>G?(B.sortIndex=ne,s(m,B),c(b)===null&&B===c(m)&&(T?(J(ie),ie=-1):T=!0,Ye(re,ne-G))):(B.sortIndex=te,s(b,B),w||z||(w=!0,pe||(pe=!0,ye()))),B},i.unstable_shouldYield=ke,i.unstable_wrapCallback=function(B){var W=H;return function(){var ne=H;H=W;try{return B.apply(this,arguments)}finally{H=ne}}}})(Hc)),Hc}var Eh;function Dx(){return Eh||(Eh=1,Lc.exports=Ux()),Lc.exports}var qc={exports:{}},zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh;function kx(){if(Nh)return zt;Nh=1;var i=us();function s(b){var m="https://react.dev/errors/"+b;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+b+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(b,m,y){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:j==null?null:""+j,children:b,containerInfo:m,implementation:y}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(b,m){if(b==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,zt.createPortal=function(b,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(s(299));return p(b,m,null,y)},zt.flushSync=function(b){var m=h.T,y=u.p;try{if(h.T=null,u.p=2,b)return b()}finally{h.T=m,u.p=y,u.d.f()}},zt.preconnect=function(b,m){typeof b=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(b,m))},zt.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},zt.preinit=function(b,m){if(typeof b=="string"&&m&&typeof m.as=="string"){var y=m.as,j=x(y,m.crossOrigin),H=typeof m.integrity=="string"?m.integrity:void 0,z=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?u.d.S(b,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:j,integrity:H,fetchPriority:z}):y==="script"&&u.d.X(b,{crossOrigin:j,integrity:H,fetchPriority:z,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},zt.preinitModule=function(b,m){if(typeof b=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=x(m.as,m.crossOrigin);u.d.M(b,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(b)},zt.preload=function(b,m){if(typeof b=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,j=x(y,m.crossOrigin);u.d.L(b,y,{crossOrigin:j,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},zt.preloadModule=function(b,m){if(typeof b=="string")if(m){var y=x(m.as,m.crossOrigin);u.d.m(b,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(b)},zt.requestFormReset=function(b){u.d.r(b)},zt.unstable_batchedUpdates=function(b,m){return b(m)},zt.useFormState=function(b,m,y){return h.H.useFormState(b,m,y)},zt.useFormStatus=function(){return h.H.useHostTransitionStatus()},zt.version="19.2.0",zt}var zh;function Lx(){if(zh)return qc.exports;zh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),qc.exports=kx(),qc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ch;function Hx(){if(Ch)return Ci;Ch=1;var i=Dx(),s=us(),c=Lx();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(p(e)!==e)throw Error(u(188))}function m(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,n=t;;){var r=a.return;if(r===null)break;var o=r.alternate;if(o===null){if(n=r.return,n!==null){a=n;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===a)return b(r),e;if(o===n)return b(r),t;o=o.sibling}throw Error(u(188))}if(a.return!==n.return)a=r,n=o;else{for(var f=!1,g=r.child;g;){if(g===a){f=!0,a=r,n=o;break}if(g===n){f=!0,n=r,a=o;break}g=g.sibling}if(!f){for(g=o.child;g;){if(g===a){f=!0,a=o,n=r;break}if(g===n){f=!0,n=o,a=r;break}g=g.sibling}if(!f)throw Error(u(189))}}if(a.alternate!==n)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,H=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),ke=Symbol.for("react.memo_cache_sentinel"),Te=Symbol.iterator;function ye(e){return e===null||typeof e!="object"?null:(e=Te&&e[Te]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Symbol.for("react.client.reference");function Ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Qe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case Y:return"Profiler";case U:return"StrictMode";case re:return"Suspense";case pe:return"SuspenseList";case de:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case ee:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case me:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ie:return t=e.displayName||null,t!==null?t:Ne(e.type)||"Memo";case se:t=e._payload,e=e._init;try{return Ne(e(t))}catch{}}return null}var Ye=Array.isArray,B=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},G=[],te=-1;function A(e){return{current:e}}function L(e){0>te||(e.current=G[te],G[te]=null,te--)}function X(e,t){te++,G[te]=e.current,e.current=t}var _=A(null),ue=A(null),ge=A(null),Ue=A(null);function at(e,t){switch(X(ge,t),X(ue,e),X(_,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gp(t),e=Kp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(_),X(_,e)}function Pe(){L(_),L(ue),L(ge)}function Bt(e){e.memoizedState!==null&&X(Ue,e);var t=_.current,a=Kp(t,e.type);t!==a&&(X(ue,e),X(_,a))}function rt(e){ue.current===e&&(L(_),L(ue)),Ue.current===e&&(L(Ue),wi._currentValue=ne)}var Nt,vt;function va(e){if(Nt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Nt=t&&t[1]||"",vt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+e+vt}var kn=!1;function Ln(e,t){if(!e||kn)return"";kn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(k){var M=k}Reflect.construct(e,[],Z)}else{try{Z.call()}catch(k){M=k}e.call(Z.prototype)}}else{try{throw Error()}catch(k){M=k}(Z=e())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(k){if(k&&M&&typeof k.stack=="string")return[k.stack,M.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),f=o[0],g=o[1];if(f&&g){var v=f.split(`
`),O=g.split(`
`);for(r=n=0;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;for(;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;if(n===v.length||r===O.length)for(n=v.length-1,r=O.length-1;1<=n&&0<=r&&v[n]!==O[r];)r--;for(;1<=n&&0<=r;n--,r--)if(v[n]!==O[r]){if(n!==1||r!==1)do if(n--,r--,0>r||v[n]!==O[r]){var V=`
`+v[n].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=n&&0<=r);break}}}finally{kn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?va(a):""}function As(e,t){switch(e.tag){case 26:case 27:case 5:return va(e.type);case 16:return va("Lazy");case 13:return e.child!==t&&t!==null?va("Suspense Fallback"):va("Suspense");case 19:return va("SuspenseList");case 0:case 15:return Ln(e.type,!1);case 11:return Ln(e.type.render,!1);case 1:return Ln(e.type,!0);case 31:return va("Activity");default:return""}}function pn(e){try{var t="",a=null;do t+=As(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Ul=Object.prototype.hasOwnProperty,Hn=i.unstable_scheduleCallback,hn=i.unstable_cancelCallback,qn=i.unstable_shouldYield,Dl=i.unstable_requestPaint,Ot=i.unstable_now,F=i.unstable_getCurrentPriorityLevel,R=i.unstable_ImmediatePriority,P=i.unstable_UserBlockingPriority,I=i.unstable_NormalPriority,je=i.unstable_LowPriority,Se=i.unstable_IdlePriority,qe=i.log,q=i.unstable_setDisableYieldValue,K=null,ae=null;function le(e){if(typeof qe=="function"&&q(e),ae&&typeof ae.setStrictMode=="function")try{ae.setStrictMode(K,e)}catch{}}var $=Math.clz32?Math.clz32:_e,Ee=Math.log,We=Math.LN2;function _e(e){return e>>>=0,e===0?32:31-(Ee(e)/We|0)|0}var Ge=256,st=262144,$e=4194304;function nt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function sa(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var g=n&134217727;return g!==0?(n=g&~o,n!==0?r=nt(n):(f&=g,f!==0?r=nt(f):a||(a=g&~e,a!==0&&(r=nt(a))))):(g=n&~o,g!==0?r=nt(g):f!==0?r=nt(f):a||(a=n&~e,a!==0&&(r=nt(a)))),r===0?0:t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:r}function Qt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Vn(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kl(){var e=$e;return $e<<=1,($e&62914560)===0&&($e=4194304),e}function Qn(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ll(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bg(e,t,a,n,r,o){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var g=e.entanglements,v=e.expirationTimes,O=e.hiddenUpdates;for(a=f&~a;0<a;){var V=31-$(a),Z=1<<V;g[V]=0,v[V]=-1;var M=O[V];if(M!==null)for(O[V]=null,V=0;V<M.length;V++){var k=M[V];k!==null&&(k.lane&=-536870913)}a&=~Z}n!==0&&Su(e,n,0),o!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=o&~(f&~t))}function Su(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-$(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Eu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-$(a),r=1<<n;r&t|e[n]&t&&(e[n]|=t),a&=~r}}function Nu(e,t){var a=t&-t;return a=(a&42)!==0?1:js(a),(a&(e.suspendedLanes|t))!==0?0:a}function js(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ws(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zu(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:ph(e.type))}function Cu(e,t){var a=W.p;try{return W.p=e,t()}finally{W.p=a}}var Ya=Math.random().toString(36).slice(2),At="__reactFiber$"+Ya,Rt="__reactProps$"+Ya,Yn="__reactContainer$"+Ya,Ss="__reactEvents$"+Ya,yg="__reactListeners$"+Ya,vg="__reactHandles$"+Ya,Ou="__reactResources$"+Ya,Hl="__reactMarker$"+Ya;function Es(e){delete e[At],delete e[Rt],delete e[Ss],delete e[yg],delete e[vg]}function Gn(e){var t=e[At];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Yn]||a[At]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Wp(e);e!==null;){if(a=e[At])return a;e=Wp(e)}return t}e=a,a=e.parentNode}return null}function Kn(e){if(e=e[At]||e[Yn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ql(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Zn(e){var t=e[Ou];return t||(t=e[Ou]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function bt(e){e[Hl]=!0}var Tu=new Set,Bu={};function mn(e,t){Xn(e,t),Xn(e+"Capture",t)}function Xn(e,t){for(Bu[e]=t,e=0;e<t.length;e++)Tu.add(t[e])}var Ag=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ru={},Mu={};function jg(e){return Ul.call(Mu,e)?!0:Ul.call(Ru,e)?!1:Ag.test(e)?Mu[e]=!0:(Ru[e]=!0,!1)}function qi(e,t,a){if(jg(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Vi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Aa(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Pt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wg(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(f){a=""+f,o.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ns(e){if(!e._valueTracker){var t=Uu(e)?"checked":"value";e._valueTracker=wg(e,t,""+e[t])}}function Du(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Uu(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sg=/[\n"\\]/g;function It(e){return e.replace(Sg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function zs(e,t,a,n,r,o,f,g){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Pt(t)):e.value!==""+Pt(t)&&(e.value=""+Pt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Cs(e,f,Pt(t)):a!=null?Cs(e,f,Pt(a)):n!=null&&e.removeAttribute("value"),r==null&&o!=null&&(e.defaultChecked=!!o),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Pt(g):e.removeAttribute("name")}function ku(e,t,a,n,r,o,f,g){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Ns(e);return}a=a!=null?""+Pt(a):"",t=t!=null?""+Pt(t):a,g||t===e.value||(e.value=t),e.defaultValue=t}n=n??r,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=g?e.checked:!!n,e.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Ns(e)}function Cs(e,t,a){t==="number"&&Qi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Fn(e,t,a,n){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Pt(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Lu(e,t,a){if(t!=null&&(t=""+Pt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Pt(a):""}function Hu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(u(92));if(Ye(n)){if(1<n.length)throw Error(u(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Pt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Ns(e)}function Jn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Eg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Eg.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Vu(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var r in t)n=t[r],t.hasOwnProperty(r)&&a[r]!==n&&qu(e,r,n)}else for(var o in t)t.hasOwnProperty(o)&&qu(e,o,t[o])}function Os(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ng=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yi(e){return zg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ja(){}var Ts=null;function Bs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pn=null,In=null;function Qu(e){var t=Kn(e);if(t&&(e=t.stateNode)){var a=e[Rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(zs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+It(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var r=n[Rt]||null;if(!r)throw Error(u(90));zs(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Du(n)}break e;case"textarea":Lu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Fn(e,!!a.multiple,t,!1)}}}var Rs=!1;function Yu(e,t,a){if(Rs)return e(t,a);Rs=!0;try{var n=e(t);return n}finally{if(Rs=!1,(Pn!==null||In!==null)&&(Or(),Pn&&(t=Pn,e=In,In=Pn=null,Qu(t),e)))for(t=0;t<e.length;t++)Qu(e[t])}}function Vl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Rt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var wa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ms=!1;if(wa)try{var Ql={};Object.defineProperty(Ql,"passive",{get:function(){Ms=!0}}),window.addEventListener("test",Ql,Ql),window.removeEventListener("test",Ql,Ql)}catch{Ms=!1}var Ga=null,Us=null,Gi=null;function Gu(){if(Gi)return Gi;var e,t=Us,a=t.length,n,r="value"in Ga?Ga.value:Ga.textContent,o=r.length;for(e=0;e<a&&t[e]===r[e];e++);var f=a-e;for(n=1;n<=f&&t[a-n]===r[o-n];n++);return Gi=r.slice(e,1<n?1-n:void 0)}function Ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function Ku(){return!1}function Mt(e){function t(a,n,r,o,f){this._reactName=a,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=f,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(a=e[g],this[g]=a?a(o):o[g]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zi:Ku,this.isPropagationStopped=Ku,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xi=Mt(gn),Yl=j({},gn,{view:0,detail:0}),Cg=Mt(Yl),Ds,ks,Gl,Fi=j({},Yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gl&&(Gl&&e.type==="mousemove"?(Ds=e.screenX-Gl.screenX,ks=e.screenY-Gl.screenY):ks=Ds=0,Gl=e),Ds)},movementY:function(e){return"movementY"in e?e.movementY:ks}}),Zu=Mt(Fi),Og=j({},Fi,{dataTransfer:0}),Tg=Mt(Og),Bg=j({},Yl,{relatedTarget:0}),Ls=Mt(Bg),Rg=j({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Mg=Mt(Rg),Ug=j({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dg=Mt(Ug),kg=j({},gn,{data:0}),Xu=Mt(kg),Lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qg[e])?!!t[e]:!1}function Hs(){return Vg}var Qg=j({},Yl,{key:function(e){if(e.key){var t=Lg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(e){return e.type==="keypress"?Ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yg=Mt(Qg),Gg=j({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=Mt(Gg),Kg=j({},Yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),Zg=Mt(Kg),Xg=j({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fg=Mt(Xg),Jg=j({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pg=Mt(Jg),Ig=j({},gn,{newState:0,oldState:0}),Wg=Mt(Ig),_g=[9,13,27,32],qs=wa&&"CompositionEvent"in window,Kl=null;wa&&"documentMode"in document&&(Kl=document.documentMode);var $g=wa&&"TextEvent"in window&&!Kl,Ju=wa&&(!qs||Kl&&8<Kl&&11>=Kl),Pu=" ",Iu=!1;function Wu(e,t){switch(e){case"keyup":return _g.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _u(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function e0(e,t){switch(e){case"compositionend":return _u(t);case"keypress":return t.which!==32?null:(Iu=!0,Pu);case"textInput":return e=t.data,e===Pu&&Iu?null:e;default:return null}}function t0(e,t){if(Wn)return e==="compositionend"||!qs&&Wu(e,t)?(e=Gu(),Gi=Us=Ga=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ju&&t.locale!=="ko"?null:t.data;default:return null}}var a0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!a0[e.type]:t==="textarea"}function ed(e,t,a,n){Pn?In?In.push(n):In=[n]:Pn=n,t=kr(t,"onChange"),0<t.length&&(a=new Xi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Zl=null,Xl=null;function n0(e){Lp(e,0)}function Ji(e){var t=ql(e);if(Du(t))return e}function td(e,t){if(e==="change")return t}var ad=!1;if(wa){var Vs;if(wa){var Qs="oninput"in document;if(!Qs){var nd=document.createElement("div");nd.setAttribute("oninput","return;"),Qs=typeof nd.oninput=="function"}Vs=Qs}else Vs=!1;ad=Vs&&(!document.documentMode||9<document.documentMode)}function ld(){Zl&&(Zl.detachEvent("onpropertychange",id),Xl=Zl=null)}function id(e){if(e.propertyName==="value"&&Ji(Xl)){var t=[];ed(t,Xl,e,Bs(e)),Yu(n0,t)}}function l0(e,t,a){e==="focusin"?(ld(),Zl=t,Xl=a,Zl.attachEvent("onpropertychange",id)):e==="focusout"&&ld()}function i0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ji(Xl)}function r0(e,t){if(e==="click")return Ji(t)}function s0(e,t){if(e==="input"||e==="change")return Ji(t)}function o0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:o0;function Fl(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var r=a[n];if(!Ul.call(t,r)||!Yt(e[r],t[r]))return!1}return!0}function rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sd(e,t){var a=rd(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rd(a)}}function od(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?od(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Qi(e.document)}return t}function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var c0=wa&&"documentMode"in document&&11>=document.documentMode,_n=null,Gs=null,Jl=null,Ks=!1;function ud(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ks||_n==null||_n!==Qi(n)||(n=_n,"selectionStart"in n&&Ys(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Jl&&Fl(Jl,n)||(Jl=n,n=kr(Gs,"onSelect"),0<n.length&&(t=new Xi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=_n)))}function xn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var $n={animationend:xn("Animation","AnimationEnd"),animationiteration:xn("Animation","AnimationIteration"),animationstart:xn("Animation","AnimationStart"),transitionrun:xn("Transition","TransitionRun"),transitionstart:xn("Transition","TransitionStart"),transitioncancel:xn("Transition","TransitionCancel"),transitionend:xn("Transition","TransitionEnd")},Zs={},dd={};wa&&(dd=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function bn(e){if(Zs[e])return Zs[e];if(!$n[e])return e;var t=$n[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in dd)return Zs[e]=t[a];return e}var fd=bn("animationend"),pd=bn("animationiteration"),hd=bn("animationstart"),u0=bn("transitionrun"),d0=bn("transitionstart"),f0=bn("transitioncancel"),md=bn("transitionend"),gd=new Map,Xs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xs.push("scrollEnd");function oa(e,t){gd.set(e,t),mn(t,[e])}var Pi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wt=[],el=0,Fs=0;function Ii(){for(var e=el,t=Fs=el=0;t<e;){var a=Wt[t];Wt[t++]=null;var n=Wt[t];Wt[t++]=null;var r=Wt[t];Wt[t++]=null;var o=Wt[t];if(Wt[t++]=null,n!==null&&r!==null){var f=n.pending;f===null?r.next=r:(r.next=f.next,f.next=r),n.pending=r}o!==0&&xd(a,r,o)}}function Wi(e,t,a,n){Wt[el++]=e,Wt[el++]=t,Wt[el++]=a,Wt[el++]=n,Fs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Js(e,t,a,n){return Wi(e,t,a,n),_i(e)}function yn(e,t){return Wi(e,null,null,t),_i(e)}function xd(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var r=!1,o=e.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(r=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,r&&t!==null&&(r=31-$(a),e=o.hiddenUpdates,n=e[r],n===null?e[r]=[t]:n.push(t),t.lane=a|536870912),o):null}function _i(e){if(50<gi)throw gi=0,lc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var tl={};function p0(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(e,t,a,n){return new p0(e,t,a,n)}function Ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sa(e,t){var a=e.alternate;return a===null?(a=Gt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function bd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $i(e,t,a,n,r,o){var f=0;if(n=e,typeof e=="function")Ps(e)&&(f=1);else if(typeof e=="string")f=bx(e,a,_.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case de:return e=Gt(31,a,t,r),e.elementType=de,e.lanes=o,e;case T:return vn(a.children,r,o,t);case U:f=8,r|=24;break;case Y:return e=Gt(12,a,t,r|2),e.elementType=Y,e.lanes=o,e;case re:return e=Gt(13,a,t,r),e.elementType=re,e.lanes=o,e;case pe:return e=Gt(19,a,t,r),e.elementType=pe,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ee:f=10;break e;case J:f=9;break e;case me:f=11;break e;case ie:f=14;break e;case se:f=16,n=null;break e}f=29,a=Error(u(130,e===null?"null":typeof e,"")),n=null}return t=Gt(f,a,t,r),t.elementType=e,t.type=n,t.lanes=o,t}function vn(e,t,a,n){return e=Gt(7,e,n,t),e.lanes=a,e}function Is(e,t,a){return e=Gt(6,e,null,t),e.lanes=a,e}function yd(e){var t=Gt(18,null,null,0);return t.stateNode=e,t}function Ws(e,t,a){return t=Gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vd=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var a=vd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:pn(t)},vd.set(e,t),t)}return{value:e,source:t,stack:pn(t)}}var al=[],nl=0,er=null,Pl=0,$t=[],ea=0,Ka=null,ma=1,ga="";function Ea(e,t){al[nl++]=Pl,al[nl++]=er,er=e,Pl=t}function Ad(e,t,a){$t[ea++]=ma,$t[ea++]=ga,$t[ea++]=Ka,Ka=e;var n=ma;e=ga;var r=32-$(n)-1;n&=~(1<<r),a+=1;var o=32-$(t)+r;if(30<o){var f=r-r%5;o=(n&(1<<f)-1).toString(32),n>>=f,r-=f,ma=1<<32-$(t)+r|a<<r|n,ga=o+e}else ma=1<<o|a<<r|n,ga=e}function _s(e){e.return!==null&&(Ea(e,1),Ad(e,1,0))}function $s(e){for(;e===er;)er=al[--nl],al[nl]=null,Pl=al[--nl],al[nl]=null;for(;e===Ka;)Ka=$t[--ea],$t[ea]=null,ga=$t[--ea],$t[ea]=null,ma=$t[--ea],$t[ea]=null}function jd(e,t){$t[ea++]=ma,$t[ea++]=ga,$t[ea++]=Ka,ma=t.id,ga=t.overflow,Ka=e}var jt=null,et=null,De=!1,Za=null,ta=!1,eo=Error(u(519));function Xa(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Il(_t(t,e)),eo}function wd(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[At]=e,t[Rt]=n,a){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(a=0;a<bi.length;a++)Ce(bi[a],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),ku(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),Hu(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Qp(t.textContent,a)?(n.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),n.onScroll!=null&&Ce("scroll",t),n.onScrollEnd!=null&&Ce("scrollend",t),n.onClick!=null&&(t.onclick=ja),t=!0):t=!1,t||Xa(e,!0)}function Sd(e){for(jt=e.return;jt;)switch(jt.tag){case 5:case 31:case 13:ta=!1;return;case 27:case 3:ta=!0;return;default:jt=jt.return}}function ll(e){if(e!==jt)return!1;if(!De)return Sd(e),De=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yc(e.type,e.memoizedProps)),a=!a),a&&et&&Xa(e),Sd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));et=Ip(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));et=Ip(e)}else t===27?(t=et,sn(e.type)?(e=Sc,Sc=null,et=e):et=t):et=jt?na(e.stateNode.nextSibling):null;return!0}function An(){et=jt=null,De=!1}function to(){var e=Za;return e!==null&&(Lt===null?Lt=e:Lt.push.apply(Lt,e),Za=null),e}function Il(e){Za===null?Za=[e]:Za.push(e)}var ao=A(null),jn=null,Na=null;function Fa(e,t,a){X(ao,t._currentValue),t._currentValue=a}function za(e){e._currentValue=ao.current,L(ao)}function no(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function lo(e,t,a,n){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){var f=r.child;o=o.firstContext;e:for(;o!==null;){var g=o;o=r;for(var v=0;v<t.length;v++)if(g.context===t[v]){o.lanes|=a,g=o.alternate,g!==null&&(g.lanes|=a),no(o.return,a,e),n||(f=null);break e}o=g.next}}else if(r.tag===18){if(f=r.return,f===null)throw Error(u(341));f.lanes|=a,o=f.alternate,o!==null&&(o.lanes|=a),no(f,a,e),f=null}else f=r.child;if(f!==null)f.return=r;else for(f=r;f!==null;){if(f===e){f=null;break}if(r=f.sibling,r!==null){r.return=f.return,f=r;break}f=f.return}r=f}}function il(e,t,a,n){e=null;for(var r=t,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var f=r.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var g=r.type;Yt(r.pendingProps.value,f.value)||(e!==null?e.push(g):e=[g])}}else if(r===Ue.current){if(f=r.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(wi):e=[wi])}r=r.return}e!==null&&lo(t,e,a,n),t.flags|=262144}function tr(e){for(e=e.firstContext;e!==null;){if(!Yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wn(e){jn=e,Na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wt(e){return Ed(jn,e)}function ar(e,t){return jn===null&&wn(e),Ed(e,t)}function Ed(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Na===null){if(e===null)throw Error(u(308));Na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Na=Na.next=t;return a}var h0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},m0=i.unstable_scheduleCallback,g0=i.unstable_NormalPriority,pt={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function io(){return{controller:new h0,data:new Map,refCount:0}}function Wl(e){e.refCount--,e.refCount===0&&m0(g0,function(){e.controller.abort()})}var _l=null,ro=0,rl=0,sl=null;function x0(e,t){if(_l===null){var a=_l=[];ro=0,rl=uc(),sl={status:"pending",value:void 0,then:function(n){a.push(n)}}}return ro++,t.then(Nd,Nd),t}function Nd(){if(--ro===0&&_l!==null){sl!==null&&(sl.status="fulfilled");var e=_l;_l=null,rl=0,sl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function b0(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var r=0;r<a.length;r++)(0,a[r])(t)},function(r){for(n.status="rejected",n.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),n}var zd=B.S;B.S=function(e,t){dp=Ot(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&x0(e,t),zd!==null&&zd(e,t)};var Sn=A(null);function so(){var e=Sn.current;return e!==null?e:Ie.pooledCache}function nr(e,t){t===null?X(Sn,Sn.current):X(Sn,t.pool)}function Cd(){var e=so();return e===null?null:{parent:pt._currentValue,pool:e}}var ol=Error(u(460)),oo=Error(u(474)),lr=Error(u(542)),ir={then:function(){}};function Od(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Td(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ja,ja),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rd(e),e;default:if(typeof t.status=="string")t.then(ja,ja);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=n}},function(n){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rd(e),e}throw Nn=t,ol}}function En(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Nn=a,ol):a}}var Nn=null;function Bd(){if(Nn===null)throw Error(u(459));var e=Nn;return Nn=null,e}function Rd(e){if(e===ol||e===lr)throw Error(u(483))}var cl=null,$l=0;function rr(e){var t=$l;return $l+=1,cl===null&&(cl=[]),Td(cl,e,t)}function ei(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function sr(e,t){throw t.$$typeof===H?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Md(e){function t(N,E){if(e){var C=N.deletions;C===null?(N.deletions=[E],N.flags|=16):C.push(E)}}function a(N,E){if(!e)return null;for(;E!==null;)t(N,E),E=E.sibling;return null}function n(N){for(var E=new Map;N!==null;)N.key!==null?E.set(N.key,N):E.set(N.index,N),N=N.sibling;return E}function r(N,E){return N=Sa(N,E),N.index=0,N.sibling=null,N}function o(N,E,C){return N.index=C,e?(C=N.alternate,C!==null?(C=C.index,C<E?(N.flags|=67108866,E):C):(N.flags|=67108866,E)):(N.flags|=1048576,E)}function f(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function g(N,E,C,Q){return E===null||E.tag!==6?(E=Is(C,N.mode,Q),E.return=N,E):(E=r(E,C),E.return=N,E)}function v(N,E,C,Q){var fe=C.type;return fe===T?V(N,E,C.props.children,Q,C.key):E!==null&&(E.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===se&&En(fe)===E.type)?(E=r(E,C.props),ei(E,C),E.return=N,E):(E=$i(C.type,C.key,C.props,null,N.mode,Q),ei(E,C),E.return=N,E)}function O(N,E,C,Q){return E===null||E.tag!==4||E.stateNode.containerInfo!==C.containerInfo||E.stateNode.implementation!==C.implementation?(E=Ws(C,N.mode,Q),E.return=N,E):(E=r(E,C.children||[]),E.return=N,E)}function V(N,E,C,Q,fe){return E===null||E.tag!==7?(E=vn(C,N.mode,Q,fe),E.return=N,E):(E=r(E,C),E.return=N,E)}function Z(N,E,C){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Is(""+E,N.mode,C),E.return=N,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case z:return C=$i(E.type,E.key,E.props,null,N.mode,C),ei(C,E),C.return=N,C;case w:return E=Ws(E,N.mode,C),E.return=N,E;case se:return E=En(E),Z(N,E,C)}if(Ye(E)||ye(E))return E=vn(E,N.mode,C,null),E.return=N,E;if(typeof E.then=="function")return Z(N,rr(E),C);if(E.$$typeof===ee)return Z(N,ar(N,E),C);sr(N,E)}return null}function M(N,E,C,Q){var fe=E!==null?E.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return fe!==null?null:g(N,E,""+C,Q);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case z:return C.key===fe?v(N,E,C,Q):null;case w:return C.key===fe?O(N,E,C,Q):null;case se:return C=En(C),M(N,E,C,Q)}if(Ye(C)||ye(C))return fe!==null?null:V(N,E,C,Q,null);if(typeof C.then=="function")return M(N,E,rr(C),Q);if(C.$$typeof===ee)return M(N,E,ar(N,C),Q);sr(N,C)}return null}function k(N,E,C,Q,fe){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return N=N.get(C)||null,g(E,N,""+Q,fe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case z:return N=N.get(Q.key===null?C:Q.key)||null,v(E,N,Q,fe);case w:return N=N.get(Q.key===null?C:Q.key)||null,O(E,N,Q,fe);case se:return Q=En(Q),k(N,E,C,Q,fe)}if(Ye(Q)||ye(Q))return N=N.get(C)||null,V(E,N,Q,fe,null);if(typeof Q.then=="function")return k(N,E,C,rr(Q),fe);if(Q.$$typeof===ee)return k(N,E,C,ar(E,Q),fe);sr(E,Q)}return null}function oe(N,E,C,Q){for(var fe=null,Le=null,ce=E,we=E=0,Re=null;ce!==null&&we<C.length;we++){ce.index>we?(Re=ce,ce=null):Re=ce.sibling;var He=M(N,ce,C[we],Q);if(He===null){ce===null&&(ce=Re);break}e&&ce&&He.alternate===null&&t(N,ce),E=o(He,E,we),Le===null?fe=He:Le.sibling=He,Le=He,ce=Re}if(we===C.length)return a(N,ce),De&&Ea(N,we),fe;if(ce===null){for(;we<C.length;we++)ce=Z(N,C[we],Q),ce!==null&&(E=o(ce,E,we),Le===null?fe=ce:Le.sibling=ce,Le=ce);return De&&Ea(N,we),fe}for(ce=n(ce);we<C.length;we++)Re=k(ce,N,we,C[we],Q),Re!==null&&(e&&Re.alternate!==null&&ce.delete(Re.key===null?we:Re.key),E=o(Re,E,we),Le===null?fe=Re:Le.sibling=Re,Le=Re);return e&&ce.forEach(function(fn){return t(N,fn)}),De&&Ea(N,we),fe}function he(N,E,C,Q){if(C==null)throw Error(u(151));for(var fe=null,Le=null,ce=E,we=E=0,Re=null,He=C.next();ce!==null&&!He.done;we++,He=C.next()){ce.index>we?(Re=ce,ce=null):Re=ce.sibling;var fn=M(N,ce,He.value,Q);if(fn===null){ce===null&&(ce=Re);break}e&&ce&&fn.alternate===null&&t(N,ce),E=o(fn,E,we),Le===null?fe=fn:Le.sibling=fn,Le=fn,ce=Re}if(He.done)return a(N,ce),De&&Ea(N,we),fe;if(ce===null){for(;!He.done;we++,He=C.next())He=Z(N,He.value,Q),He!==null&&(E=o(He,E,we),Le===null?fe=He:Le.sibling=He,Le=He);return De&&Ea(N,we),fe}for(ce=n(ce);!He.done;we++,He=C.next())He=k(ce,N,we,He.value,Q),He!==null&&(e&&He.alternate!==null&&ce.delete(He.key===null?we:He.key),E=o(He,E,we),Le===null?fe=He:Le.sibling=He,Le=He);return e&&ce.forEach(function(Ox){return t(N,Ox)}),De&&Ea(N,we),fe}function Je(N,E,C,Q){if(typeof C=="object"&&C!==null&&C.type===T&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case z:e:{for(var fe=C.key;E!==null;){if(E.key===fe){if(fe=C.type,fe===T){if(E.tag===7){a(N,E.sibling),Q=r(E,C.props.children),Q.return=N,N=Q;break e}}else if(E.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===se&&En(fe)===E.type){a(N,E.sibling),Q=r(E,C.props),ei(Q,C),Q.return=N,N=Q;break e}a(N,E);break}else t(N,E);E=E.sibling}C.type===T?(Q=vn(C.props.children,N.mode,Q,C.key),Q.return=N,N=Q):(Q=$i(C.type,C.key,C.props,null,N.mode,Q),ei(Q,C),Q.return=N,N=Q)}return f(N);case w:e:{for(fe=C.key;E!==null;){if(E.key===fe)if(E.tag===4&&E.stateNode.containerInfo===C.containerInfo&&E.stateNode.implementation===C.implementation){a(N,E.sibling),Q=r(E,C.children||[]),Q.return=N,N=Q;break e}else{a(N,E);break}else t(N,E);E=E.sibling}Q=Ws(C,N.mode,Q),Q.return=N,N=Q}return f(N);case se:return C=En(C),Je(N,E,C,Q)}if(Ye(C))return oe(N,E,C,Q);if(ye(C)){if(fe=ye(C),typeof fe!="function")throw Error(u(150));return C=fe.call(C),he(N,E,C,Q)}if(typeof C.then=="function")return Je(N,E,rr(C),Q);if(C.$$typeof===ee)return Je(N,E,ar(N,C),Q);sr(N,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,E!==null&&E.tag===6?(a(N,E.sibling),Q=r(E,C),Q.return=N,N=Q):(a(N,E),Q=Is(C,N.mode,Q),Q.return=N,N=Q),f(N)):a(N,E)}return function(N,E,C,Q){try{$l=0;var fe=Je(N,E,C,Q);return cl=null,fe}catch(ce){if(ce===ol||ce===lr)throw ce;var Le=Gt(29,ce,null,N.mode);return Le.lanes=Q,Le.return=N,Le}finally{}}}var zn=Md(!0),Ud=Md(!1),Ja=!1;function co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ve&2)!==0){var r=n.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),n.pending=t,t=_i(e),xd(e,null,a),t}return Wi(e,n,t,a),_i(e)}function ti(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Eu(e,a)}}function fo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var r=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?r=o=f:o=o.next=f,a=a.next}while(a!==null);o===null?r=o=t:o=o.next=t}else r=o=t;a={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var po=!1;function ai(){if(po){var e=sl;if(e!==null)throw e}}function ni(e,t,a,n){po=!1;var r=e.updateQueue;Ja=!1;var o=r.firstBaseUpdate,f=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var v=g,O=v.next;v.next=null,f===null?o=O:f.next=O,f=v;var V=e.alternate;V!==null&&(V=V.updateQueue,g=V.lastBaseUpdate,g!==f&&(g===null?V.firstBaseUpdate=O:g.next=O,V.lastBaseUpdate=v))}if(o!==null){var Z=r.baseState;f=0,V=O=v=null,g=o;do{var M=g.lane&-536870913,k=M!==g.lane;if(k?(Be&M)===M:(n&M)===M){M!==0&&M===rl&&(po=!0),V!==null&&(V=V.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var oe=e,he=g;M=t;var Je=a;switch(he.tag){case 1:if(oe=he.payload,typeof oe=="function"){Z=oe.call(Je,Z,M);break e}Z=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=he.payload,M=typeof oe=="function"?oe.call(Je,Z,M):oe,M==null)break e;Z=j({},Z,M);break e;case 2:Ja=!0}}M=g.callback,M!==null&&(e.flags|=64,k&&(e.flags|=8192),k=r.callbacks,k===null?r.callbacks=[M]:k.push(M))}else k={lane:M,tag:g.tag,payload:g.payload,callback:g.callback,next:null},V===null?(O=V=k,v=Z):V=V.next=k,f|=M;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;k=g,g=k.next,k.next=null,r.lastBaseUpdate=k,r.shared.pending=null}}while(!0);V===null&&(v=Z),r.baseState=v,r.firstBaseUpdate=O,r.lastBaseUpdate=V,o===null&&(r.shared.lanes=0),tn|=f,e.lanes=f,e.memoizedState=Z}}function Dd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function kd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Dd(a[e],t)}var ul=A(null),or=A(0);function Ld(e,t){e=ka,X(or,e),X(ul,t),ka=e|t.baseLanes}function ho(){X(or,ka),X(ul,ul.current)}function mo(){ka=or.current,L(ul),L(or)}var Kt=A(null),aa=null;function Wa(e){var t=e.alternate;X(ut,ut.current&1),X(Kt,e),aa===null&&(t===null||ul.current!==null||t.memoizedState!==null)&&(aa=e)}function go(e){X(ut,ut.current),X(Kt,e),aa===null&&(aa=e)}function Hd(e){e.tag===22?(X(ut,ut.current),X(Kt,e),aa===null&&(aa=e)):_a()}function _a(){X(ut,ut.current),X(Kt,Kt.current)}function Zt(e){L(Kt),aa===e&&(aa=null),L(ut)}var ut=A(0);function cr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jc(a)||wc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ca=0,ve=null,Xe=null,ht=null,ur=!1,dl=!1,Cn=!1,dr=0,li=0,fl=null,y0=0;function ot(){throw Error(u(321))}function xo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Yt(e[a],t[a]))return!1;return!0}function bo(e,t,a,n,r,o){return Ca=o,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?jf:Mo,Cn=!1,o=a(n,r),Cn=!1,dl&&(o=Vd(t,a,n,r)),qd(e),o}function qd(e){B.H=si;var t=Xe!==null&&Xe.next!==null;if(Ca=0,ht=Xe=ve=null,ur=!1,li=0,fl=null,t)throw Error(u(300));e===null||mt||(e=e.dependencies,e!==null&&tr(e)&&(mt=!0))}function Vd(e,t,a,n){ve=e;var r=0;do{if(dl&&(fl=null),li=0,dl=!1,25<=r)throw Error(u(301));if(r+=1,ht=Xe=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}B.H=wf,o=t(a,n)}while(dl);return o}function v0(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?ii(t):t,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(ve.flags|=1024),t}function yo(){var e=dr!==0;return dr=0,e}function vo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ao(e){if(ur){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ur=!1}Ca=0,ht=Xe=ve=null,dl=!1,li=dr=0,fl=null}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?ve.memoizedState=ht=e:ht=ht.next=e,ht}function dt(){if(Xe===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=ht===null?ve.memoizedState:ht.next;if(t!==null)ht=t,Xe=e;else{if(e===null)throw ve.alternate===null?Error(u(467)):Error(u(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},ht===null?ve.memoizedState=ht=e:ht=ht.next=e}return ht}function fr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ii(e){var t=li;return li+=1,fl===null&&(fl=[]),e=Td(fl,e,t),t=ve,(ht===null?t.memoizedState:ht.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?jf:Mo),e}function pr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ii(e);if(e.$$typeof===ee)return wt(e)}throw Error(u(438,String(e)))}function jo(e){var t=null,a=ve.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ve.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=fr(),ve.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=ke;return t.index++,a}function Oa(e,t){return typeof t=="function"?t(e):t}function hr(e){var t=dt();return wo(t,Xe,e)}function wo(e,t,a){var n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=a;var r=e.baseQueue,o=n.pending;if(o!==null){if(r!==null){var f=r.next;r.next=o.next,o.next=f}t.baseQueue=r=o,n.pending=null}if(o=e.baseState,r===null)e.memoizedState=o;else{t=r.next;var g=f=null,v=null,O=t,V=!1;do{var Z=O.lane&-536870913;if(Z!==O.lane?(Be&Z)===Z:(Ca&Z)===Z){var M=O.revertLane;if(M===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),Z===rl&&(V=!0);else if((Ca&M)===M){O=O.next,M===rl&&(V=!0);continue}else Z={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},v===null?(g=v=Z,f=o):v=v.next=Z,ve.lanes|=M,tn|=M;Z=O.action,Cn&&a(o,Z),o=O.hasEagerState?O.eagerState:a(o,Z)}else M={lane:Z,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},v===null?(g=v=M,f=o):v=v.next=M,ve.lanes|=Z,tn|=Z;O=O.next}while(O!==null&&O!==t);if(v===null?f=o:v.next=g,!Yt(o,e.memoizedState)&&(mt=!0,V&&(a=sl,a!==null)))throw a;e.memoizedState=o,e.baseState=f,e.baseQueue=v,n.lastRenderedState=o}return r===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function So(e){var t=dt(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var n=a.dispatch,r=a.pending,o=t.memoizedState;if(r!==null){a.pending=null;var f=r=r.next;do o=e(o,f.action),f=f.next;while(f!==r);Yt(o,t.memoizedState)||(mt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function Qd(e,t,a){var n=ve,r=dt(),o=De;if(o){if(a===void 0)throw Error(u(407));a=a()}else a=t();var f=!Yt((Xe||r).memoizedState,a);if(f&&(r.memoizedState=a,mt=!0),r=r.queue,zo(Kd.bind(null,n,r,e),[e]),r.getSnapshot!==t||f||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,pl(9,{destroy:void 0},Gd.bind(null,n,r,a,t),null),Ie===null)throw Error(u(349));o||(Ca&127)!==0||Yd(n,t,a)}return a}function Yd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ve.updateQueue,t===null?(t=fr(),ve.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Gd(e,t,a,n){t.value=a,t.getSnapshot=n,Zd(t)&&Xd(e)}function Kd(e,t,a){return a(function(){Zd(t)&&Xd(e)})}function Zd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Yt(e,a)}catch{return!0}}function Xd(e){var t=yn(e,2);t!==null&&Ht(t,e,2)}function Eo(e){var t=Tt();if(typeof e=="function"){var a=e;if(e=a(),Cn){le(!0);try{a()}finally{le(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:e},t}function Fd(e,t,a,n){return e.baseState=a,wo(e,Xe,typeof n=="function"?n:Oa)}function A0(e,t,a,n,r){if(xr(e))throw Error(u(485));if(e=t.action,e!==null){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){o.listeners.push(f)}};B.T!==null?a(!0):o.isTransition=!1,n(o),a=t.pending,a===null?(o.next=t.pending=o,Jd(t,o)):(o.next=a.next,t.pending=a.next=o)}}function Jd(e,t){var a=t.action,n=t.payload,r=e.state;if(t.isTransition){var o=B.T,f={};B.T=f;try{var g=a(r,n),v=B.S;v!==null&&v(f,g),Pd(e,t,g)}catch(O){No(e,t,O)}finally{o!==null&&f.types!==null&&(o.types=f.types),B.T=o}}else try{o=a(r,n),Pd(e,t,o)}catch(O){No(e,t,O)}}function Pd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Id(e,t,n)},function(n){return No(e,t,n)}):Id(e,t,a)}function Id(e,t,a){t.status="fulfilled",t.value=a,Wd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Jd(e,a)))}function No(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Wd(t),t=t.next;while(t!==n)}e.action=null}function Wd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _d(e,t){return t}function $d(e,t){if(De){var a=Ie.formState;if(a!==null){e:{var n=ve;if(De){if(et){t:{for(var r=et,o=ta;r.nodeType!==8;){if(!o){r=null;break t}if(r=na(r.nextSibling),r===null){r=null;break t}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){et=na(r.nextSibling),n=r.data==="F!";break e}}Xa(n)}n=!1}n&&(t=a[0])}}return a=Tt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_d,lastRenderedState:t},a.queue=n,a=yf.bind(null,ve,n),n.dispatch=a,n=Eo(!1),o=Ro.bind(null,ve,!1,n.queue),n=Tt(),r={state:t,dispatch:null,action:e,pending:null},n.queue=r,a=A0.bind(null,ve,r,o,a),r.dispatch=a,n.memoizedState=e,[t,a,!1]}function ef(e){var t=dt();return tf(t,Xe,e)}function tf(e,t,a){if(t=wo(e,t,_d)[0],e=hr(Oa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ii(t)}catch(f){throw f===ol?lr:f}else n=t;t=dt();var r=t.queue,o=r.dispatch;return a!==t.memoizedState&&(ve.flags|=2048,pl(9,{destroy:void 0},j0.bind(null,r,a),null)),[n,o,e]}function j0(e,t){e.action=t}function af(e){var t=dt(),a=Xe;if(a!==null)return tf(t,a,e);dt(),t=t.memoizedState,a=dt();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function pl(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ve.updateQueue,t===null&&(t=fr(),ve.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function nf(){return dt().memoizedState}function mr(e,t,a,n){var r=Tt();ve.flags|=e,r.memoizedState=pl(1|t,{destroy:void 0},a,n===void 0?null:n)}function gr(e,t,a,n){var r=dt();n=n===void 0?null:n;var o=r.memoizedState.inst;Xe!==null&&n!==null&&xo(n,Xe.memoizedState.deps)?r.memoizedState=pl(t,o,a,n):(ve.flags|=e,r.memoizedState=pl(1|t,o,a,n))}function lf(e,t){mr(8390656,8,e,t)}function zo(e,t){gr(2048,8,e,t)}function w0(e){ve.flags|=4;var t=ve.updateQueue;if(t===null)t=fr(),ve.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function rf(e){var t=dt().memoizedState;return w0({ref:t,nextImpl:e}),function(){if((Ve&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function sf(e,t){return gr(4,2,e,t)}function of(e,t){return gr(4,4,e,t)}function cf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function uf(e,t,a){a=a!=null?a.concat([e]):null,gr(4,4,cf.bind(null,t,e),a)}function Co(){}function df(e,t){var a=dt();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&xo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function ff(e,t){var a=dt();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&xo(t,n[1]))return n[0];if(n=e(),Cn){le(!0);try{e()}finally{le(!1)}}return a.memoizedState=[n,t],n}function Oo(e,t,a){return a===void 0||(Ca&1073741824)!==0&&(Be&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=pp(),ve.lanes|=e,tn|=e,a)}function pf(e,t,a,n){return Yt(a,t)?a:ul.current!==null?(e=Oo(e,a,n),Yt(e,t)||(mt=!0),e):(Ca&42)===0||(Ca&1073741824)!==0&&(Be&261930)===0?(mt=!0,e.memoizedState=a):(e=pp(),ve.lanes|=e,tn|=e,t)}function hf(e,t,a,n,r){var o=W.p;W.p=o!==0&&8>o?o:8;var f=B.T,g={};B.T=g,Ro(e,!1,t,a);try{var v=r(),O=B.S;if(O!==null&&O(g,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var V=b0(v,n);ri(e,t,V,Jt(e))}else ri(e,t,n,Jt(e))}catch(Z){ri(e,t,{then:function(){},status:"rejected",reason:Z},Jt())}finally{W.p=o,f!==null&&g.types!==null&&(f.types=g.types),B.T=f}}function S0(){}function To(e,t,a,n){if(e.tag!==5)throw Error(u(476));var r=mf(e).queue;hf(e,r,t,ne,a===null?S0:function(){return gf(e),a(n)})}function mf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:ne},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gf(e){var t=mf(e);t.next===null&&(t=e.alternate.memoizedState),ri(e,t.next.queue,{},Jt())}function Bo(){return wt(wi)}function xf(){return dt().memoizedState}function bf(){return dt().memoizedState}function E0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Jt();e=Pa(a);var n=Ia(t,e,a);n!==null&&(Ht(n,t,a),ti(n,t,a)),t={cache:io()},e.payload=t;return}t=t.return}}function N0(e,t,a){var n=Jt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},xr(e)?vf(t,a):(a=Js(e,t,a,n),a!==null&&(Ht(a,e,n),Af(a,t,n)))}function yf(e,t,a){var n=Jt();ri(e,t,a,n)}function ri(e,t,a,n){var r={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(xr(e))vf(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var f=t.lastRenderedState,g=o(f,a);if(r.hasEagerState=!0,r.eagerState=g,Yt(g,f))return Wi(e,t,r,0),Ie===null&&Ii(),!1}catch{}finally{}if(a=Js(e,t,r,n),a!==null)return Ht(a,e,n),Af(a,t,n),!0}return!1}function Ro(e,t,a,n){if(n={lane:2,revertLane:uc(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},xr(e)){if(t)throw Error(u(479))}else t=Js(e,a,n,2),t!==null&&Ht(t,e,2)}function xr(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function vf(e,t){dl=ur=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Af(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Eu(e,a)}}var si={readContext:wt,use:pr,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useLayoutEffect:ot,useInsertionEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useSyncExternalStore:ot,useId:ot,useHostTransitionStatus:ot,useFormState:ot,useActionState:ot,useOptimistic:ot,useMemoCache:ot,useCacheRefresh:ot};si.useEffectEvent=ot;var jf={readContext:wt,use:pr,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:lf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,mr(4194308,4,cf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return mr(4194308,4,e,t)},useInsertionEffect:function(e,t){mr(4,2,e,t)},useMemo:function(e,t){var a=Tt();t=t===void 0?null:t;var n=e();if(Cn){le(!0);try{e()}finally{le(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Tt();if(a!==void 0){var r=a(t);if(Cn){le(!0);try{a(t)}finally{le(!1)}}}else r=t;return n.memoizedState=n.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=N0.bind(null,ve,e),[n.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:function(e){e=Eo(e);var t=e.queue,a=yf.bind(null,ve,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Co,useDeferredValue:function(e,t){var a=Tt();return Oo(a,e,t)},useTransition:function(){var e=Eo(!1);return e=hf.bind(null,ve,e.queue,!0,!1),Tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ve,r=Tt();if(De){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Ie===null)throw Error(u(349));(Be&127)!==0||Yd(n,t,a)}r.memoizedState=a;var o={value:a,getSnapshot:t};return r.queue=o,lf(Kd.bind(null,n,o,e),[e]),n.flags|=2048,pl(9,{destroy:void 0},Gd.bind(null,n,o,a,t),null),a},useId:function(){var e=Tt(),t=Ie.identifierPrefix;if(De){var a=ga,n=ma;a=(n&~(1<<32-$(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=dr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=y0++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Bo,useFormState:$d,useActionState:$d,useOptimistic:function(e){var t=Tt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ro.bind(null,ve,!0,a),a.dispatch=t,[e,t]},useMemoCache:jo,useCacheRefresh:function(){return Tt().memoizedState=E0.bind(null,ve)},useEffectEvent:function(e){var t=Tt(),a={impl:e};return t.memoizedState=a,function(){if((Ve&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Mo={readContext:wt,use:pr,useCallback:df,useContext:wt,useEffect:zo,useImperativeHandle:uf,useInsertionEffect:sf,useLayoutEffect:of,useMemo:ff,useReducer:hr,useRef:nf,useState:function(){return hr(Oa)},useDebugValue:Co,useDeferredValue:function(e,t){var a=dt();return pf(a,Xe.memoizedState,e,t)},useTransition:function(){var e=hr(Oa)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:ii(e),t]},useSyncExternalStore:Qd,useId:xf,useHostTransitionStatus:Bo,useFormState:ef,useActionState:ef,useOptimistic:function(e,t){var a=dt();return Fd(a,Xe,e,t)},useMemoCache:jo,useCacheRefresh:bf};Mo.useEffectEvent=rf;var wf={readContext:wt,use:pr,useCallback:df,useContext:wt,useEffect:zo,useImperativeHandle:uf,useInsertionEffect:sf,useLayoutEffect:of,useMemo:ff,useReducer:So,useRef:nf,useState:function(){return So(Oa)},useDebugValue:Co,useDeferredValue:function(e,t){var a=dt();return Xe===null?Oo(a,e,t):pf(a,Xe.memoizedState,e,t)},useTransition:function(){var e=So(Oa)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:ii(e),t]},useSyncExternalStore:Qd,useId:xf,useHostTransitionStatus:Bo,useFormState:af,useActionState:af,useOptimistic:function(e,t){var a=dt();return Xe!==null?Fd(a,Xe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:jo,useCacheRefresh:bf};wf.useEffectEvent=rf;function Uo(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:j({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Do={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Jt(),r=Pa(n);r.payload=t,a!=null&&(r.callback=a),t=Ia(e,r,n),t!==null&&(Ht(t,e,n),ti(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Jt(),r=Pa(n);r.tag=1,r.payload=t,a!=null&&(r.callback=a),t=Ia(e,r,n),t!==null&&(Ht(t,e,n),ti(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Jt(),n=Pa(a);n.tag=2,t!=null&&(n.callback=t),t=Ia(e,n,a),t!==null&&(Ht(t,e,a),ti(t,e,a))}};function Sf(e,t,a,n,r,o,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,f):t.prototype&&t.prototype.isPureReactComponent?!Fl(a,n)||!Fl(r,o):!0}function Ef(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Do.enqueueReplaceState(t,t.state,null)}function On(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=j({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function Nf(e){Pi(e)}function zf(e){console.error(e)}function Cf(e){Pi(e)}function br(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Of(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ko(e,t,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){br(e,t)},a}function Tf(e){return e=Pa(e),e.tag=3,e}function Bf(e,t,a,n){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;e.payload=function(){return r(o)},e.callback=function(){Of(t,a,n)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Of(t,a,n),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var g=n.stack;this.componentDidCatch(n.value,{componentStack:g!==null?g:""})})}function z0(e,t,a,n,r){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&il(t,a,r,!0),a=Kt.current,a!==null){switch(a.tag){case 31:case 13:return aa===null?Tr():a.alternate===null&&ct===0&&(ct=3),a.flags&=-257,a.flags|=65536,a.lanes=r,n===ir?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),sc(e,n,r)),!1;case 22:return a.flags|=65536,n===ir?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),sc(e,n,r)),!1}throw Error(u(435,a.tag))}return sc(e,n,r),Tr(),!1}if(De)return t=Kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,n!==eo&&(e=Error(u(422),{cause:n}),Il(_t(e,a)))):(n!==eo&&(t=Error(u(423),{cause:n}),Il(_t(t,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,n=_t(n,a),r=ko(e.stateNode,n,r),fo(e,r),ct!==4&&(ct=2)),!1;var o=Error(u(520),{cause:n});if(o=_t(o,a),mi===null?mi=[o]:mi.push(o),ct!==4&&(ct=2),t===null)return!0;n=_t(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=ko(a.stateNode,n,e),fo(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(an===null||!an.has(o))))return a.flags|=65536,r&=-r,a.lanes|=r,r=Tf(r),Bf(r,e,a,n),fo(a,r),!1}a=a.return}while(a!==null);return!1}var Lo=Error(u(461)),mt=!1;function St(e,t,a,n){t.child=e===null?Ud(t,null,a,n):zn(t,e.child,a,n)}function Rf(e,t,a,n,r){a=a.render;var o=t.ref;if("ref"in n){var f={};for(var g in n)g!=="ref"&&(f[g]=n[g])}else f=n;return wn(t),n=bo(e,t,a,f,o,r),g=yo(),e!==null&&!mt?(vo(e,t,r),Ta(e,t,r)):(De&&g&&_s(t),t.flags|=1,St(e,t,n,r),t.child)}function Mf(e,t,a,n,r){if(e===null){var o=a.type;return typeof o=="function"&&!Ps(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,Uf(e,t,o,n,r)):(e=$i(a.type,null,n,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Zo(e,r)){var f=o.memoizedProps;if(a=a.compare,a=a!==null?a:Fl,a(f,n)&&e.ref===t.ref)return Ta(e,t,r)}return t.flags|=1,e=Sa(o,n),e.ref=t.ref,e.return=t,t.child=e}function Uf(e,t,a,n,r){if(e!==null){var o=e.memoizedProps;if(Fl(o,n)&&e.ref===t.ref)if(mt=!1,t.pendingProps=n=o,Zo(e,r))(e.flags&131072)!==0&&(mt=!0);else return t.lanes=e.lanes,Ta(e,t,r)}return Ho(e,t,a,n,r)}function Df(e,t,a,n){var r=n.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|a:a,e!==null){for(n=t.child=e.child,r=0;n!==null;)r=r|n.lanes|n.childLanes,n=n.sibling;n=r&~o}else n=0,t.child=null;return kf(e,t,o,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&nr(t,o!==null?o.cachePool:null),o!==null?Ld(t,o):ho(),Hd(t);else return n=t.lanes=536870912,kf(e,t,o!==null?o.baseLanes|a:a,a,n)}else o!==null?(nr(t,o.cachePool),Ld(t,o),_a(),t.memoizedState=null):(e!==null&&nr(t,null),ho(),_a());return St(e,t,r,a),t.child}function oi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function kf(e,t,a,n,r){var o=so();return o=o===null?null:{parent:pt._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&nr(t,null),ho(),Hd(t),e!==null&&il(e,t,n,!0),t.childLanes=r,null}function yr(e,t){return t=Ar({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Lf(e,t,a){return zn(t,e.child,null,a),e=yr(t,t.pendingProps),e.flags|=2,Zt(t),t.memoizedState=null,e}function C0(e,t,a){var n=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(De){if(n.mode==="hidden")return e=yr(t,n),t.lanes=536870912,oi(null,e);if(go(t),(e=et)?(e=Pp(e,ta),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ka!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},a=yd(e),a.return=t,t.child=a,jt=t,et=null)):e=null,e===null)throw Xa(t);return t.lanes=536870912,null}return yr(t,n)}var o=e.memoizedState;if(o!==null){var f=o.dehydrated;if(go(t),r)if(t.flags&256)t.flags&=-257,t=Lf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(mt||il(e,t,a,!1),r=(a&e.childLanes)!==0,mt||r){if(n=Ie,n!==null&&(f=Nu(n,a),f!==0&&f!==o.retryLane))throw o.retryLane=f,yn(e,f),Ht(n,e,f),Lo;Tr(),t=Lf(e,t,a)}else e=o.treeContext,et=na(f.nextSibling),jt=t,De=!0,Za=null,ta=!1,e!==null&&jd(t,e),t=yr(t,n),t.flags|=4096;return t}return e=Sa(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ho(e,t,a,n,r){return wn(t),a=bo(e,t,a,n,void 0,r),n=yo(),e!==null&&!mt?(vo(e,t,r),Ta(e,t,r)):(De&&n&&_s(t),t.flags|=1,St(e,t,a,r),t.child)}function Hf(e,t,a,n,r,o){return wn(t),t.updateQueue=null,a=Vd(t,n,a,r),qd(e),n=yo(),e!==null&&!mt?(vo(e,t,o),Ta(e,t,o)):(De&&n&&_s(t),t.flags|=1,St(e,t,a,o),t.child)}function qf(e,t,a,n,r){if(wn(t),t.stateNode===null){var o=tl,f=a.contextType;typeof f=="object"&&f!==null&&(o=wt(f)),o=new a(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Do,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},co(t),f=a.contextType,o.context=typeof f=="object"&&f!==null?wt(f):tl,o.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(Uo(t,a,f,n),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(f=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),f!==o.state&&Do.enqueueReplaceState(o,o.state,null),ni(t,n,o,r),ai(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var g=t.memoizedProps,v=On(a,g);o.props=v;var O=o.context,V=a.contextType;f=tl,typeof V=="object"&&V!==null&&(f=wt(V));var Z=a.getDerivedStateFromProps;V=typeof Z=="function"||typeof o.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,V||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(g||O!==f)&&Ef(t,o,n,f),Ja=!1;var M=t.memoizedState;o.state=M,ni(t,n,o,r),ai(),O=t.memoizedState,g||M!==O||Ja?(typeof Z=="function"&&(Uo(t,a,Z,n),O=t.memoizedState),(v=Ja||Sf(t,a,v,n,M,O,f))?(V||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=O),o.props=n,o.state=O,o.context=f,n=v):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,uo(e,t),f=t.memoizedProps,V=On(a,f),o.props=V,Z=t.pendingProps,M=o.context,O=a.contextType,v=tl,typeof O=="object"&&O!==null&&(v=wt(O)),g=a.getDerivedStateFromProps,(O=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f!==Z||M!==v)&&Ef(t,o,n,v),Ja=!1,M=t.memoizedState,o.state=M,ni(t,n,o,r),ai();var k=t.memoizedState;f!==Z||M!==k||Ja||e!==null&&e.dependencies!==null&&tr(e.dependencies)?(typeof g=="function"&&(Uo(t,a,g,n),k=t.memoizedState),(V=Ja||Sf(t,a,V,n,M,k,v)||e!==null&&e.dependencies!==null&&tr(e.dependencies))?(O||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,k,v),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,k,v)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=k),o.props=n,o.state=k,o.context=v,n=V):(typeof o.componentDidUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,vr(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=zn(t,e.child,null,r),t.child=zn(t,null,a,r)):St(e,t,a,r),t.memoizedState=o.state,e=t.child):e=Ta(e,t,r),e}function Vf(e,t,a,n){return An(),t.flags|=256,St(e,t,a,n),t.child}var qo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vo(e){return{baseLanes:e,cachePool:Cd()}}function Qo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ft),e}function Qf(e,t,a){var n=t.pendingProps,r=!1,o=(t.flags&128)!==0,f;if((f=o)||(f=e!==null&&e.memoizedState===null?!1:(ut.current&2)!==0),f&&(r=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(De){if(r?Wa(t):_a(),(e=et)?(e=Pp(e,ta),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ka!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},a=yd(e),a.return=t,t.child=a,jt=t,et=null)):e=null,e===null)throw Xa(t);return wc(e)?t.lanes=32:t.lanes=536870912,null}var g=n.children;return n=n.fallback,r?(_a(),r=t.mode,g=Ar({mode:"hidden",children:g},r),n=vn(n,r,a,null),g.return=t,n.return=t,g.sibling=n,t.child=g,n=t.child,n.memoizedState=Vo(a),n.childLanes=Qo(e,f,a),t.memoizedState=qo,oi(null,n)):(Wa(t),Yo(t,g))}var v=e.memoizedState;if(v!==null&&(g=v.dehydrated,g!==null)){if(o)t.flags&256?(Wa(t),t.flags&=-257,t=Go(e,t,a)):t.memoizedState!==null?(_a(),t.child=e.child,t.flags|=128,t=null):(_a(),g=n.fallback,r=t.mode,n=Ar({mode:"visible",children:n.children},r),g=vn(g,r,a,null),g.flags|=2,n.return=t,g.return=t,n.sibling=g,t.child=n,zn(t,e.child,null,a),n=t.child,n.memoizedState=Vo(a),n.childLanes=Qo(e,f,a),t.memoizedState=qo,t=oi(null,n));else if(Wa(t),wc(g)){if(f=g.nextSibling&&g.nextSibling.dataset,f)var O=f.dgst;f=O,n=Error(u(419)),n.stack="",n.digest=f,Il({value:n,source:null,stack:null}),t=Go(e,t,a)}else if(mt||il(e,t,a,!1),f=(a&e.childLanes)!==0,mt||f){if(f=Ie,f!==null&&(n=Nu(f,a),n!==0&&n!==v.retryLane))throw v.retryLane=n,yn(e,n),Ht(f,e,n),Lo;jc(g)||Tr(),t=Go(e,t,a)}else jc(g)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,et=na(g.nextSibling),jt=t,De=!0,Za=null,ta=!1,e!==null&&jd(t,e),t=Yo(t,n.children),t.flags|=4096);return t}return r?(_a(),g=n.fallback,r=t.mode,v=e.child,O=v.sibling,n=Sa(v,{mode:"hidden",children:n.children}),n.subtreeFlags=v.subtreeFlags&65011712,O!==null?g=Sa(O,g):(g=vn(g,r,a,null),g.flags|=2),g.return=t,n.return=t,n.sibling=g,t.child=n,oi(null,n),n=t.child,g=e.child.memoizedState,g===null?g=Vo(a):(r=g.cachePool,r!==null?(v=pt._currentValue,r=r.parent!==v?{parent:v,pool:v}:r):r=Cd(),g={baseLanes:g.baseLanes|a,cachePool:r}),n.memoizedState=g,n.childLanes=Qo(e,f,a),t.memoizedState=qo,oi(e.child,n)):(Wa(t),a=e.child,e=a.sibling,a=Sa(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function Yo(e,t){return t=Ar({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ar(e,t){return e=Gt(22,e,null,t),e.lanes=0,e}function Go(e,t,a){return zn(t,e.child,null,a),e=Yo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),no(e.return,t,a)}function Ko(e,t,a,n,r,o){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:r,treeForkCount:o}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=n,f.tail=a,f.tailMode=r,f.treeForkCount=o)}function Gf(e,t,a){var n=t.pendingProps,r=n.revealOrder,o=n.tail;n=n.children;var f=ut.current,g=(f&2)!==0;if(g?(f=f&1|2,t.flags|=128):f&=1,X(ut,f),St(e,t,n,a),n=De?Pl:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yf(e,a,t);else if(e.tag===19)Yf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=t.child,r=null;a!==null;)e=a.alternate,e!==null&&cr(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),Ko(t,!1,r,a,o,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&cr(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}Ko(t,!0,a,null,o,n);break;case"together":Ko(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Ta(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(il(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Sa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Sa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Zo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&tr(e)))}function O0(e,t,a){switch(t.tag){case 3:at(t,t.stateNode.containerInfo),Fa(t,pt,e.memoizedState.cache),An();break;case 27:case 5:Bt(t);break;case 4:at(t,t.stateNode.containerInfo);break;case 10:Fa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,go(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Wa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Qf(e,t,a):(Wa(t),e=Ta(e,t,a),e!==null?e.sibling:null);Wa(t);break;case 19:var r=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(il(e,t,a,!1),n=(a&t.childLanes)!==0),r){if(n)return Gf(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),X(ut,ut.current),n)break;return null;case 22:return t.lanes=0,Df(e,t,a,t.pendingProps);case 24:Fa(t,pt,e.memoizedState.cache)}return Ta(e,t,a)}function Kf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)mt=!0;else{if(!Zo(e,a)&&(t.flags&128)===0)return mt=!1,O0(e,t,a);mt=(e.flags&131072)!==0}else mt=!1,De&&(t.flags&1048576)!==0&&Ad(t,Pl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=En(t.elementType),t.type=e,typeof e=="function")Ps(e)?(n=On(e,n),t.tag=1,t=qf(null,t,e,n,a)):(t.tag=0,t=Ho(null,t,e,n,a));else{if(e!=null){var r=e.$$typeof;if(r===me){t.tag=11,t=Rf(null,t,e,n,a);break e}else if(r===ie){t.tag=14,t=Mf(null,t,e,n,a);break e}}throw t=Ne(e)||e,Error(u(306,t,""))}}return t;case 0:return Ho(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,r=On(n,t.pendingProps),qf(e,t,n,r,a);case 3:e:{if(at(t,t.stateNode.containerInfo),e===null)throw Error(u(387));n=t.pendingProps;var o=t.memoizedState;r=o.element,uo(e,t),ni(t,n,null,a);var f=t.memoizedState;if(n=f.cache,Fa(t,pt,n),n!==o.cache&&lo(t,[pt],a,!0),ai(),n=f.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Vf(e,t,n,a);break e}else if(n!==r){r=_t(Error(u(424)),t),Il(r),t=Vf(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(et=na(e.firstChild),jt=t,De=!0,Za=null,ta=!0,a=Ud(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(An(),n===r){t=Ta(e,t,a);break e}St(e,t,n,a)}t=t.child}return t;case 26:return vr(e,t),e===null?(a=th(t.type,null,t.pendingProps,null))?t.memoizedState=a:De||(a=t.type,e=t.pendingProps,n=Lr(ge.current).createElement(a),n[At]=t,n[Rt]=e,Et(n,a,e),bt(n),t.stateNode=n):t.memoizedState=th(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Bt(t),e===null&&De&&(n=t.stateNode=_p(t.type,t.pendingProps,ge.current),jt=t,ta=!0,r=et,sn(t.type)?(Sc=r,et=na(n.firstChild)):et=r),St(e,t,t.pendingProps.children,a),vr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&De&&((r=n=et)&&(n=ix(n,t.type,t.pendingProps,ta),n!==null?(t.stateNode=n,jt=t,et=na(n.firstChild),ta=!1,r=!0):r=!1),r||Xa(t)),Bt(t),r=t.type,o=t.pendingProps,f=e!==null?e.memoizedProps:null,n=o.children,yc(r,o)?n=null:f!==null&&yc(r,f)&&(t.flags|=32),t.memoizedState!==null&&(r=bo(e,t,v0,null,null,a),wi._currentValue=r),vr(e,t),St(e,t,n,a),t.child;case 6:return e===null&&De&&((e=a=et)&&(a=rx(a,t.pendingProps,ta),a!==null?(t.stateNode=a,jt=t,et=null,e=!0):e=!1),e||Xa(t)),null;case 13:return Qf(e,t,a);case 4:return at(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=zn(t,null,n,a):St(e,t,n,a),t.child;case 11:return Rf(e,t,t.type,t.pendingProps,a);case 7:return St(e,t,t.pendingProps,a),t.child;case 8:return St(e,t,t.pendingProps.children,a),t.child;case 12:return St(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Fa(t,t.type,n.value),St(e,t,n.children,a),t.child;case 9:return r=t.type._context,n=t.pendingProps.children,wn(t),r=wt(r),n=n(r),t.flags|=1,St(e,t,n,a),t.child;case 14:return Mf(e,t,t.type,t.pendingProps,a);case 15:return Uf(e,t,t.type,t.pendingProps,a);case 19:return Gf(e,t,a);case 31:return C0(e,t,a);case 22:return Df(e,t,a,t.pendingProps);case 24:return wn(t),n=wt(pt),e===null?(r=so(),r===null&&(r=Ie,o=io(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=a),r=o),t.memoizedState={parent:n,cache:r},co(t),Fa(t,pt,r)):((e.lanes&a)!==0&&(uo(e,t),ni(t,null,null,a),ai()),r=e.memoizedState,o=t.memoizedState,r.parent!==n?(r={parent:n,cache:n},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Fa(t,pt,n)):(n=o.cache,Fa(t,pt,n),n!==r.cache&&lo(t,[pt],a,!0))),St(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Ba(e){e.flags|=4}function Xo(e,t,a,n,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(xp())e.flags|=8192;else throw Nn=ir,oo}else e.flags&=-16777217}function Zf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rh(t))if(xp())e.flags|=8192;else throw Nn=ir,oo}function jr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?kl():536870912,e.lanes|=t,xl|=t)}function ci(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags&65011712,n|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function T0(e,t,a){var n=t.pendingProps;switch($s(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return tt(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),za(pt),Pe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ll(t)?Ba(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,to())),tt(t),null;case 26:var r=t.type,o=t.memoizedState;return e===null?(Ba(t),o!==null?(tt(t),Zf(t,o)):(tt(t),Xo(t,r,null,n,a))):o?o!==e.memoizedState?(Ba(t),tt(t),Zf(t,o)):(tt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Ba(t),tt(t),Xo(t,r,e,n,a)),null;case 27:if(rt(t),a=ge.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ba(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return tt(t),null}e=_.current,ll(t)?wd(t):(e=_p(r,n,a),t.stateNode=e,Ba(t))}return tt(t),null;case 5:if(rt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ba(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return tt(t),null}if(o=_.current,ll(t))wd(t);else{var f=Lr(ge.current);switch(o){case 1:o=f.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:o=f.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":o=f.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":o=f.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":o=f.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?f.createElement("select",{is:n.is}):f.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?f.createElement(r,{is:n.is}):f.createElement(r)}}o[At]=t,o[Rt]=n;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)o.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=o;e:switch(Et(o,r,n),r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Ba(t)}}return tt(t),Xo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Ba(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(e=ge.current,ll(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,r=jt,r!==null)switch(r.tag){case 27:case 5:n=r.memoizedProps}e[At]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Qp(e.nodeValue,a)),e||Xa(t,!0)}else e=Lr(e).createTextNode(n),e[At]=t,t.stateNode=e}return tt(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=ll(t),a!==null){if(e===null){if(!n)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[At]=t}else An(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),e=!1}else a=to(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Zt(t),t):(Zt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return tt(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ll(t),n!==null&&n.dehydrated!==null){if(e===null){if(!r)throw Error(u(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(u(317));r[At]=t}else An(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),r=!1}else r=to(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Zt(t),t):(Zt(t),null)}return Zt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,r=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(r=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),jr(t,t.updateQueue),tt(t),null);case 4:return Pe(),e===null&&hc(t.stateNode.containerInfo),tt(t),null;case 10:return za(t.type),tt(t),null;case 19:if(L(ut),n=t.memoizedState,n===null)return tt(t),null;if(r=(t.flags&128)!==0,o=n.rendering,o===null)if(r)ci(n,!1);else{if(ct!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=cr(e),o!==null){for(t.flags|=128,ci(n,!1),e=o.updateQueue,t.updateQueue=e,jr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)bd(a,e),a=a.sibling;return X(ut,ut.current&1|2),De&&Ea(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Ot()>zr&&(t.flags|=128,r=!0,ci(n,!1),t.lanes=4194304)}else{if(!r)if(e=cr(o),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,jr(t,e),ci(n,!0),n.tail===null&&n.tailMode==="hidden"&&!o.alternate&&!De)return tt(t),null}else 2*Ot()-n.renderingStartTime>zr&&a!==536870912&&(t.flags|=128,r=!0,ci(n,!1),t.lanes=4194304);n.isBackwards?(o.sibling=t.child,t.child=o):(e=n.last,e!==null?e.sibling=o:t.child=o,n.last=o)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Ot(),e.sibling=null,a=ut.current,X(ut,r?a&1|2:a&1),De&&Ea(t,n.treeForkCount),e):(tt(t),null);case 22:case 23:return Zt(t),mo(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),a=t.updateQueue,a!==null&&jr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&L(Sn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),za(pt),tt(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function B0(e,t){switch($s(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return za(pt),Pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return rt(t),null;case 31:if(t.memoizedState!==null){if(Zt(t),t.alternate===null)throw Error(u(340));An()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Zt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));An()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(ut),null;case 4:return Pe(),null;case 10:return za(t.type),null;case 22:case 23:return Zt(t),mo(),e!==null&&L(Sn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return za(pt),null;case 25:return null;default:return null}}function Xf(e,t){switch($s(t),t.tag){case 3:za(pt),Pe();break;case 26:case 27:case 5:rt(t);break;case 4:Pe();break;case 31:t.memoizedState!==null&&Zt(t);break;case 13:Zt(t);break;case 19:L(ut);break;case 10:za(t.type);break;case 22:case 23:Zt(t),mo(),e!==null&&L(Sn);break;case 24:za(pt)}}function ui(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var r=n.next;a=r;do{if((a.tag&e)===e){n=void 0;var o=a.create,f=a.inst;n=o(),f.destroy=n}a=a.next}while(a!==r)}}catch(g){Ze(t,t.return,g)}}function $a(e,t,a){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var o=r.next;n=o;do{if((n.tag&e)===e){var f=n.inst,g=f.destroy;if(g!==void 0){f.destroy=void 0,r=t;var v=a,O=g;try{O()}catch(V){Ze(r,v,V)}}}n=n.next}while(n!==o)}}catch(V){Ze(t,t.return,V)}}function Ff(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{kd(t,a)}catch(n){Ze(e,e.return,n)}}}function Jf(e,t,a){a.props=On(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ze(e,t,n)}}function di(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(r){Ze(e,t,r)}}function xa(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(r){Ze(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){Ze(e,t,r)}else a.current=null}function Pf(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(r){Ze(e,e.return,r)}}function Fo(e,t,a){try{var n=e.stateNode;$0(n,e.type,a,t),n[Rt]=t}catch(r){Ze(e,e.return,r)}}function If(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sn(e.type)||e.tag===4}function Jo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||If(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Po(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ja));else if(n!==4&&(n===27&&sn(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Po(e,t,a),e=e.sibling;e!==null;)Po(e,t,a),e=e.sibling}function wr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&sn(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(wr(e,t,a),e=e.sibling;e!==null;)wr(e,t,a),e=e.sibling}function Wf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Et(t,n,a),t[At]=e,t[Rt]=a}catch(o){Ze(e,e.return,o)}}var Ra=!1,gt=!1,Io=!1,_f=typeof WeakSet=="function"?WeakSet:Set,yt=null;function R0(e,t){if(e=e.containerInfo,xc=Kr,e=cd(e),Ys(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var r=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var f=0,g=-1,v=-1,O=0,V=0,Z=e,M=null;t:for(;;){for(var k;Z!==a||r!==0&&Z.nodeType!==3||(g=f+r),Z!==o||n!==0&&Z.nodeType!==3||(v=f+n),Z.nodeType===3&&(f+=Z.nodeValue.length),(k=Z.firstChild)!==null;)M=Z,Z=k;for(;;){if(Z===e)break t;if(M===a&&++O===r&&(g=f),M===o&&++V===n&&(v=f),(k=Z.nextSibling)!==null)break;Z=M,M=Z.parentNode}Z=k}a=g===-1||v===-1?null:{start:g,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(bc={focusedElem:e,selectionRange:a},Kr=!1,yt=t;yt!==null;)if(t=yt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,yt=e;else for(;yt!==null;){switch(t=yt,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,r=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var oe=On(a.type,r);e=n.getSnapshotBeforeUpdate(oe,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(he){Ze(a,a.return,he)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ac(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ac(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,yt=e;break}yt=t.return}}function $f(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ua(e,a),n&4&&ui(5,a);break;case 1:if(Ua(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){Ze(a,a.return,f)}else{var r=On(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ze(a,a.return,f)}}n&64&&Ff(a),n&512&&di(a,a.return);break;case 3:if(Ua(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{kd(e,t)}catch(f){Ze(a,a.return,f)}}break;case 27:t===null&&n&4&&Wf(a);case 26:case 5:Ua(e,a),t===null&&n&4&&Pf(a),n&512&&di(a,a.return);break;case 12:Ua(e,a);break;case 31:Ua(e,a),n&4&&ap(e,a);break;case 13:Ua(e,a),n&4&&np(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Q0.bind(null,a),sx(e,a))));break;case 22:if(n=a.memoizedState!==null||Ra,!n){t=t!==null&&t.memoizedState!==null||gt,r=Ra;var o=gt;Ra=n,(gt=t)&&!o?Da(e,a,(a.subtreeFlags&8772)!==0):Ua(e,a),Ra=r,gt=o}break;case 30:break;default:Ua(e,a)}}function ep(e){var t=e.alternate;t!==null&&(e.alternate=null,ep(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Es(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var lt=null,Ut=!1;function Ma(e,t,a){for(a=a.child;a!==null;)tp(e,t,a),a=a.sibling}function tp(e,t,a){if(ae&&typeof ae.onCommitFiberUnmount=="function")try{ae.onCommitFiberUnmount(K,a)}catch{}switch(a.tag){case 26:gt||xa(a,t),Ma(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gt||xa(a,t);var n=lt,r=Ut;sn(a.type)&&(lt=a.stateNode,Ut=!1),Ma(e,t,a),vi(a.stateNode),lt=n,Ut=r;break;case 5:gt||xa(a,t);case 6:if(n=lt,r=Ut,lt=null,Ma(e,t,a),lt=n,Ut=r,lt!==null)if(Ut)try{(lt.nodeType===9?lt.body:lt.nodeName==="HTML"?lt.ownerDocument.body:lt).removeChild(a.stateNode)}catch(o){Ze(a,t,o)}else try{lt.removeChild(a.stateNode)}catch(o){Ze(a,t,o)}break;case 18:lt!==null&&(Ut?(e=lt,Fp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),El(e)):Fp(lt,a.stateNode));break;case 4:n=lt,r=Ut,lt=a.stateNode.containerInfo,Ut=!0,Ma(e,t,a),lt=n,Ut=r;break;case 0:case 11:case 14:case 15:$a(2,a,t),gt||$a(4,a,t),Ma(e,t,a);break;case 1:gt||(xa(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Jf(a,t,n)),Ma(e,t,a);break;case 21:Ma(e,t,a);break;case 22:gt=(n=gt)||a.memoizedState!==null,Ma(e,t,a),gt=n;break;default:Ma(e,t,a)}}function ap(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{El(e)}catch(a){Ze(t,t.return,a)}}}function np(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{El(e)}catch(a){Ze(t,t.return,a)}}function M0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new _f),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new _f),t;default:throw Error(u(435,e.tag))}}function Sr(e,t){var a=M0(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var r=Y0.bind(null,e,n);n.then(r,r)}})}function Dt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var r=a[n],o=e,f=t,g=f;e:for(;g!==null;){switch(g.tag){case 27:if(sn(g.type)){lt=g.stateNode,Ut=!1;break e}break;case 5:lt=g.stateNode,Ut=!1;break e;case 3:case 4:lt=g.stateNode.containerInfo,Ut=!0;break e}g=g.return}if(lt===null)throw Error(u(160));tp(o,f,r),lt=null,Ut=!1,o=r.alternate,o!==null&&(o.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)lp(t,e),t=t.sibling}var ca=null;function lp(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dt(t,e),kt(e),n&4&&($a(3,e,e.return),ui(3,e),$a(5,e,e.return));break;case 1:Dt(t,e),kt(e),n&512&&(gt||a===null||xa(a,a.return)),n&64&&Ra&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var r=ca;if(Dt(t,e),kt(e),n&512&&(gt||a===null||xa(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(n){case"title":o=r.getElementsByTagName("title")[0],(!o||o[Hl]||o[At]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=r.createElement(n),r.head.insertBefore(o,r.querySelector("head > title"))),Et(o,n,a),o[At]=e,bt(o),n=o;break e;case"link":var f=lh("link","href",r).get(n+(a.href||""));if(f){for(var g=0;g<f.length;g++)if(o=f[g],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(g,1);break t}}o=r.createElement(n),Et(o,n,a),r.head.appendChild(o);break;case"meta":if(f=lh("meta","content",r).get(n+(a.content||""))){for(g=0;g<f.length;g++)if(o=f[g],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(g,1);break t}}o=r.createElement(n),Et(o,n,a),r.head.appendChild(o);break;default:throw Error(u(468,n))}o[At]=e,bt(o),n=o}e.stateNode=n}else ih(r,e.type,e.stateNode);else e.stateNode=nh(r,n,e.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?ih(r,e.type,e.stateNode):nh(r,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Fo(e,e.memoizedProps,a.memoizedProps)}break;case 27:Dt(t,e),kt(e),n&512&&(gt||a===null||xa(a,a.return)),a!==null&&n&4&&Fo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Dt(t,e),kt(e),n&512&&(gt||a===null||xa(a,a.return)),e.flags&32){r=e.stateNode;try{Jn(r,"")}catch(oe){Ze(e,e.return,oe)}}n&4&&e.stateNode!=null&&(r=e.memoizedProps,Fo(e,r,a!==null?a.memoizedProps:r)),n&1024&&(Io=!0);break;case 6:if(Dt(t,e),kt(e),n&4){if(e.stateNode===null)throw Error(u(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(oe){Ze(e,e.return,oe)}}break;case 3:if(Vr=null,r=ca,ca=Hr(t.containerInfo),Dt(t,e),ca=r,kt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{El(t.containerInfo)}catch(oe){Ze(e,e.return,oe)}Io&&(Io=!1,ip(e));break;case 4:n=ca,ca=Hr(e.stateNode.containerInfo),Dt(t,e),kt(e),ca=n;break;case 12:Dt(t,e),kt(e);break;case 31:Dt(t,e),kt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Sr(e,n)));break;case 13:Dt(t,e),kt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nr=Ot()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Sr(e,n)));break;case 22:r=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,O=Ra,V=gt;if(Ra=O||r,gt=V||v,Dt(t,e),gt=V,Ra=O,kt(e),n&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(a===null||v||Ra||gt||Tn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(o=v.stateNode,r)f=o.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{g=v.stateNode;var Z=v.memoizedProps.style,M=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;g.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(oe){Ze(v,v.return,oe)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=r?"":v.memoizedProps}catch(oe){Ze(v,v.return,oe)}}}else if(t.tag===18){if(a===null){v=t;try{var k=v.stateNode;r?Jp(k,!0):Jp(v.stateNode,!1)}catch(oe){Ze(v,v.return,oe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Sr(e,a))));break;case 19:Dt(t,e),kt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Sr(e,n)));break;case 30:break;case 21:break;default:Dt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(If(n)){a=n;break}n=n.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var r=a.stateNode,o=Jo(e);wr(e,o,r);break;case 5:var f=a.stateNode;a.flags&32&&(Jn(f,""),a.flags&=-33);var g=Jo(e);wr(e,g,f);break;case 3:case 4:var v=a.stateNode.containerInfo,O=Jo(e);Po(e,O,v);break;default:throw Error(u(161))}}catch(V){Ze(e,e.return,V)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ip(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ip(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ua(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$f(e,t.alternate,t),t=t.sibling}function Tn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:$a(4,t,t.return),Tn(t);break;case 1:xa(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Jf(t,t.return,a),Tn(t);break;case 27:vi(t.stateNode);case 26:case 5:xa(t,t.return),Tn(t);break;case 22:t.memoizedState===null&&Tn(t);break;case 30:Tn(t);break;default:Tn(t)}e=e.sibling}}function Da(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,r=e,o=t,f=o.flags;switch(o.tag){case 0:case 11:case 15:Da(r,o,a),ui(4,o);break;case 1:if(Da(r,o,a),n=o,r=n.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(O){Ze(n,n.return,O)}if(n=o,r=n.updateQueue,r!==null){var g=n.stateNode;try{var v=r.shared.hiddenCallbacks;if(v!==null)for(r.shared.hiddenCallbacks=null,r=0;r<v.length;r++)Dd(v[r],g)}catch(O){Ze(n,n.return,O)}}a&&f&64&&Ff(o),di(o,o.return);break;case 27:Wf(o);case 26:case 5:Da(r,o,a),a&&n===null&&f&4&&Pf(o),di(o,o.return);break;case 12:Da(r,o,a);break;case 31:Da(r,o,a),a&&f&4&&ap(r,o);break;case 13:Da(r,o,a),a&&f&4&&np(r,o);break;case 22:o.memoizedState===null&&Da(r,o,a),di(o,o.return);break;case 30:break;default:Da(r,o,a)}t=t.sibling}}function Wo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Wl(a))}function _o(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wl(e))}function ua(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rp(e,t,a,n),t=t.sibling}function rp(e,t,a,n){var r=t.flags;switch(t.tag){case 0:case 11:case 15:ua(e,t,a,n),r&2048&&ui(9,t);break;case 1:ua(e,t,a,n);break;case 3:ua(e,t,a,n),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wl(e)));break;case 12:if(r&2048){ua(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,f=o.id,g=o.onPostCommit;typeof g=="function"&&g(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ze(t,t.return,v)}}else ua(e,t,a,n);break;case 31:ua(e,t,a,n);break;case 13:ua(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,f=t.alternate,t.memoizedState!==null?o._visibility&2?ua(e,t,a,n):fi(e,t):o._visibility&2?ua(e,t,a,n):(o._visibility|=2,hl(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Wo(f,t);break;case 24:ua(e,t,a,n),r&2048&&_o(t.alternate,t);break;default:ua(e,t,a,n)}}function hl(e,t,a,n,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,f=t,g=a,v=n,O=f.flags;switch(f.tag){case 0:case 11:case 15:hl(o,f,g,v,r),ui(8,f);break;case 23:break;case 22:var V=f.stateNode;f.memoizedState!==null?V._visibility&2?hl(o,f,g,v,r):fi(o,f):(V._visibility|=2,hl(o,f,g,v,r)),r&&O&2048&&Wo(f.alternate,f);break;case 24:hl(o,f,g,v,r),r&&O&2048&&_o(f.alternate,f);break;default:hl(o,f,g,v,r)}t=t.sibling}}function fi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,r=n.flags;switch(n.tag){case 22:fi(a,n),r&2048&&Wo(n.alternate,n);break;case 24:fi(a,n),r&2048&&_o(n.alternate,n);break;default:fi(a,n)}t=t.sibling}}var pi=8192;function ml(e,t,a){if(e.subtreeFlags&pi)for(e=e.child;e!==null;)sp(e,t,a),e=e.sibling}function sp(e,t,a){switch(e.tag){case 26:ml(e,t,a),e.flags&pi&&e.memoizedState!==null&&yx(a,ca,e.memoizedState,e.memoizedProps);break;case 5:ml(e,t,a);break;case 3:case 4:var n=ca;ca=Hr(e.stateNode.containerInfo),ml(e,t,a),ca=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=pi,pi=16777216,ml(e,t,a),pi=n):ml(e,t,a));break;default:ml(e,t,a)}}function op(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function hi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];yt=n,up(n,e)}op(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cp(e),e=e.sibling}function cp(e){switch(e.tag){case 0:case 11:case 15:hi(e),e.flags&2048&&$a(9,e,e.return);break;case 3:hi(e);break;case 12:hi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Er(e)):hi(e);break;default:hi(e)}}function Er(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];yt=n,up(n,e)}op(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:$a(8,t,t.return),Er(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Er(t));break;default:Er(t)}e=e.sibling}}function up(e,t){for(;yt!==null;){var a=yt;switch(a.tag){case 0:case 11:case 15:$a(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Wl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,yt=n;else e:for(a=e;yt!==null;){n=yt;var r=n.sibling,o=n.return;if(ep(n),n===a){yt=null;break e}if(r!==null){r.return=o,yt=r;break e}yt=o}}}var U0={getCacheForType:function(e){var t=wt(pt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return wt(pt).controller.signal}},D0=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Ie=null,ze=null,Be=0,Ke=0,Xt=null,en=!1,gl=!1,$o=!1,ka=0,ct=0,tn=0,Bn=0,ec=0,Ft=0,xl=0,mi=null,Lt=null,tc=!1,Nr=0,dp=0,zr=1/0,Cr=null,an=null,xt=0,nn=null,bl=null,La=0,ac=0,nc=null,fp=null,gi=0,lc=null;function Jt(){return(Ve&2)!==0&&Be!==0?Be&-Be:B.T!==null?uc():zu()}function pp(){if(Ft===0)if((Be&536870912)===0||De){var e=st;st<<=1,(st&3932160)===0&&(st=262144),Ft=e}else Ft=536870912;return e=Kt.current,e!==null&&(e.flags|=32),Ft}function Ht(e,t,a){(e===Ie&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)&&(yl(e,0),ln(e,Be,Ft,!1)),Ll(e,a),((Ve&2)===0||e!==Ie)&&(e===Ie&&((Ve&2)===0&&(Bn|=a),ct===4&&ln(e,Be,Ft,!1)),ba(e))}function hp(e,t,a){if((Ve&6)!==0)throw Error(u(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Qt(e,t),r=n?H0(e,t):rc(e,t,!0),o=n;do{if(r===0){gl&&!n&&ln(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!k0(a)){r=rc(e,t,!1),o=!1;continue}if(r===2){if(o=t,e.errorRecoveryDisabledLanes&o)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var g=e;r=mi;var v=g.current.memoizedState.isDehydrated;if(v&&(yl(g,f).flags|=256),f=rc(g,f,!1),f!==2){if($o&&!v){g.errorRecoveryDisabledLanes|=o,Bn|=o,r=4;break e}o=Lt,Lt=r,o!==null&&(Lt===null?Lt=o:Lt.push.apply(Lt,o))}r=f}if(o=!1,r!==2)continue}}if(r===1){yl(e,0),ln(e,t,0,!0);break}e:{switch(n=e,o=r,o){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:ln(n,t,Ft,!en);break e;case 2:Lt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(r=Nr+300-Ot(),10<r)){if(ln(n,t,Ft,!en),sa(n,0,!0)!==0)break e;La=t,n.timeoutHandle=Zp(mp.bind(null,n,a,Lt,Cr,tc,t,Ft,Bn,xl,en,o,"Throttled",-0,0),r);break e}mp(n,a,Lt,Cr,tc,t,Ft,Bn,xl,en,o,null,-0,0)}}break}while(!0);ba(e)}function mp(e,t,a,n,r,o,f,g,v,O,V,Z,M,k){if(e.timeoutHandle=-1,Z=t.subtreeFlags,Z&8192||(Z&16785408)===16785408){Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ja},sp(t,o,Z);var oe=(o&62914560)===o?Nr-Ot():(o&4194048)===o?dp-Ot():0;if(oe=vx(Z,oe),oe!==null){La=o,e.cancelPendingCommit=oe(wp.bind(null,e,t,o,a,n,r,f,g,v,V,Z,null,M,k)),ln(e,o,f,!O);return}}wp(e,t,o,a,n,r,f,g,v)}function k0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var r=a[n],o=r.getSnapshot;r=r.value;try{if(!Yt(o(),r))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t,a,n){t&=~ec,t&=~Bn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var r=t;0<r;){var o=31-$(r),f=1<<o;n[o]=-1,r&=~f}a!==0&&Su(e,a,t)}function Or(){return(Ve&6)===0?(xi(0),!1):!0}function ic(){if(ze!==null){if(Ke===0)var e=ze.return;else e=ze,Na=jn=null,Ao(e),cl=null,$l=0,e=ze;for(;e!==null;)Xf(e.alternate,e),e=e.return;ze=null}}function yl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ax(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),La=0,ic(),Ie=e,ze=a=Sa(e.current,null),Be=t,Ke=0,Xt=null,en=!1,gl=Qt(e,t),$o=!1,xl=Ft=ec=Bn=tn=ct=0,Lt=mi=null,tc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-$(n),o=1<<r;t|=e[r],n&=~o}return ka=t,Ii(),a}function gp(e,t){ve=null,B.H=si,t===ol||t===lr?(t=Bd(),Ke=3):t===oo?(t=Bd(),Ke=4):Ke=t===Lo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Xt=t,ze===null&&(ct=1,br(e,_t(t,e.current)))}function xp(){var e=Kt.current;return e===null?!0:(Be&4194048)===Be?aa===null:(Be&62914560)===Be||(Be&536870912)!==0?e===aa:!1}function bp(){var e=B.H;return B.H=si,e===null?si:e}function yp(){var e=B.A;return B.A=U0,e}function Tr(){ct=4,en||(Be&4194048)!==Be&&Kt.current!==null||(gl=!0),(tn&134217727)===0&&(Bn&134217727)===0||Ie===null||ln(Ie,Be,Ft,!1)}function rc(e,t,a){var n=Ve;Ve|=2;var r=bp(),o=yp();(Ie!==e||Be!==t)&&(Cr=null,yl(e,t)),t=!1;var f=ct;e:do try{if(Ke!==0&&ze!==null){var g=ze,v=Xt;switch(Ke){case 8:ic(),f=6;break e;case 3:case 2:case 9:case 6:Kt.current===null&&(t=!0);var O=Ke;if(Ke=0,Xt=null,vl(e,g,v,O),a&&gl){f=0;break e}break;default:O=Ke,Ke=0,Xt=null,vl(e,g,v,O)}}L0(),f=ct;break}catch(V){gp(e,V)}while(!0);return t&&e.shellSuspendCounter++,Na=jn=null,Ve=n,B.H=r,B.A=o,ze===null&&(Ie=null,Be=0,Ii()),f}function L0(){for(;ze!==null;)vp(ze)}function H0(e,t){var a=Ve;Ve|=2;var n=bp(),r=yp();Ie!==e||Be!==t?(Cr=null,zr=Ot()+500,yl(e,t)):gl=Qt(e,t);e:do try{if(Ke!==0&&ze!==null){t=ze;var o=Xt;t:switch(Ke){case 1:Ke=0,Xt=null,vl(e,t,o,1);break;case 2:case 9:if(Od(o)){Ke=0,Xt=null,Ap(t);break}t=function(){Ke!==2&&Ke!==9||Ie!==e||(Ke=7),ba(e)},o.then(t,t);break e;case 3:Ke=7;break e;case 4:Ke=5;break e;case 7:Od(o)?(Ke=0,Xt=null,Ap(t)):(Ke=0,Xt=null,vl(e,t,o,7));break;case 5:var f=null;switch(ze.tag){case 26:f=ze.memoizedState;case 5:case 27:var g=ze;if(f?rh(f):g.stateNode.complete){Ke=0,Xt=null;var v=g.sibling;if(v!==null)ze=v;else{var O=g.return;O!==null?(ze=O,Br(O)):ze=null}break t}}Ke=0,Xt=null,vl(e,t,o,5);break;case 6:Ke=0,Xt=null,vl(e,t,o,6);break;case 8:ic(),ct=6;break e;default:throw Error(u(462))}}q0();break}catch(V){gp(e,V)}while(!0);return Na=jn=null,B.H=n,B.A=r,Ve=a,ze!==null?0:(Ie=null,Be=0,Ii(),ct)}function q0(){for(;ze!==null&&!qn();)vp(ze)}function vp(e){var t=Kf(e.alternate,e,ka);e.memoizedProps=e.pendingProps,t===null?Br(e):ze=t}function Ap(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Hf(a,t,t.pendingProps,t.type,void 0,Be);break;case 11:t=Hf(a,t,t.pendingProps,t.type.render,t.ref,Be);break;case 5:Ao(t);default:Xf(a,t),t=ze=bd(t,ka),t=Kf(a,t,ka)}e.memoizedProps=e.pendingProps,t===null?Br(e):ze=t}function vl(e,t,a,n){Na=jn=null,Ao(t),cl=null,$l=0;var r=t.return;try{if(z0(e,r,t,a,Be)){ct=1,br(e,_t(a,e.current)),ze=null;return}}catch(o){if(r!==null)throw ze=r,o;ct=1,br(e,_t(a,e.current)),ze=null;return}t.flags&32768?(De||n===1?e=!0:gl||(Be&536870912)!==0?e=!1:(en=e=!0,(n===2||n===9||n===3||n===6)&&(n=Kt.current,n!==null&&n.tag===13&&(n.flags|=16384))),jp(t,e)):Br(t)}function Br(e){var t=e;do{if((t.flags&32768)!==0){jp(t,en);return}e=t.return;var a=T0(t.alternate,t,ka);if(a!==null){ze=a;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);ct===0&&(ct=5)}function jp(e,t){do{var a=B0(e.alternate,e);if(a!==null){a.flags&=32767,ze=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ze=e;return}ze=e=a}while(e!==null);ct=6,ze=null}function wp(e,t,a,n,r,o,f,g,v){e.cancelPendingCommit=null;do Rr();while(xt!==0);if((Ve&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(o=t.lanes|t.childLanes,o|=Fs,bg(e,a,o,f,g,v),e===Ie&&(ze=Ie=null,Be=0),bl=t,nn=e,La=a,ac=o,nc=r,fp=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,G0(I,function(){return Cp(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null,r=W.p,W.p=2,f=Ve,Ve|=4;try{R0(e,t,a)}finally{Ve=f,W.p=r,B.T=n}}xt=1,Sp(),Ep(),Np()}}function Sp(){if(xt===1){xt=0;var e=nn,t=bl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var n=W.p;W.p=2;var r=Ve;Ve|=4;try{lp(t,e);var o=bc,f=cd(e.containerInfo),g=o.focusedElem,v=o.selectionRange;if(f!==g&&g&&g.ownerDocument&&od(g.ownerDocument.documentElement,g)){if(v!==null&&Ys(g)){var O=v.start,V=v.end;if(V===void 0&&(V=O),"selectionStart"in g)g.selectionStart=O,g.selectionEnd=Math.min(V,g.value.length);else{var Z=g.ownerDocument||document,M=Z&&Z.defaultView||window;if(M.getSelection){var k=M.getSelection(),oe=g.textContent.length,he=Math.min(v.start,oe),Je=v.end===void 0?he:Math.min(v.end,oe);!k.extend&&he>Je&&(f=Je,Je=he,he=f);var N=sd(g,he),E=sd(g,Je);if(N&&E&&(k.rangeCount!==1||k.anchorNode!==N.node||k.anchorOffset!==N.offset||k.focusNode!==E.node||k.focusOffset!==E.offset)){var C=Z.createRange();C.setStart(N.node,N.offset),k.removeAllRanges(),he>Je?(k.addRange(C),k.extend(E.node,E.offset)):(C.setEnd(E.node,E.offset),k.addRange(C))}}}}for(Z=[],k=g;k=k.parentNode;)k.nodeType===1&&Z.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<Z.length;g++){var Q=Z[g];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Kr=!!xc,bc=xc=null}finally{Ve=r,W.p=n,B.T=a}}e.current=t,xt=2}}function Ep(){if(xt===2){xt=0;var e=nn,t=bl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var n=W.p;W.p=2;var r=Ve;Ve|=4;try{$f(e,t.alternate,t)}finally{Ve=r,W.p=n,B.T=a}}xt=3}}function Np(){if(xt===4||xt===3){xt=0,Dl();var e=nn,t=bl,a=La,n=fp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?xt=5:(xt=0,bl=nn=null,zp(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(an=null),ws(a),t=t.stateNode,ae&&typeof ae.onCommitFiberRoot=="function")try{ae.onCommitFiberRoot(K,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=B.T,r=W.p,W.p=2,B.T=null;try{for(var o=e.onRecoverableError,f=0;f<n.length;f++){var g=n[f];o(g.value,{componentStack:g.stack})}}finally{B.T=t,W.p=r}}(La&3)!==0&&Rr(),ba(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===lc?gi++:(gi=0,lc=e):gi=0,xi(0)}}function zp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Wl(t)))}function Rr(){return Sp(),Ep(),Np(),Cp()}function Cp(){if(xt!==5)return!1;var e=nn,t=ac;ac=0;var a=ws(La),n=B.T,r=W.p;try{W.p=32>a?32:a,B.T=null,a=nc,nc=null;var o=nn,f=La;if(xt=0,bl=nn=null,La=0,(Ve&6)!==0)throw Error(u(331));var g=Ve;if(Ve|=4,cp(o.current),rp(o,o.current,f,a),Ve=g,xi(0,!1),ae&&typeof ae.onPostCommitFiberRoot=="function")try{ae.onPostCommitFiberRoot(K,o)}catch{}return!0}finally{W.p=r,B.T=n,zp(e,t)}}function Op(e,t,a){t=_t(a,t),t=ko(e.stateNode,t,2),e=Ia(e,t,2),e!==null&&(Ll(e,2),ba(e))}function Ze(e,t,a){if(e.tag===3)Op(e,e,a);else for(;t!==null;){if(t.tag===3){Op(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(an===null||!an.has(n))){e=_t(a,e),a=Tf(2),n=Ia(t,a,2),n!==null&&(Bf(a,n,t,e),Ll(n,2),ba(n));break}}t=t.return}}function sc(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new D0;var r=new Set;n.set(t,r)}else r=n.get(t),r===void 0&&(r=new Set,n.set(t,r));r.has(a)||($o=!0,r.add(a),e=V0.bind(null,e,t,a),t.then(e,e))}function V0(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ie===e&&(Be&a)===a&&(ct===4||ct===3&&(Be&62914560)===Be&&300>Ot()-Nr?(Ve&2)===0&&yl(e,0):ec|=a,xl===Be&&(xl=0)),ba(e)}function Tp(e,t){t===0&&(t=kl()),e=yn(e,t),e!==null&&(Ll(e,t),ba(e))}function Q0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Tp(e,a)}function Y0(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(t),Tp(e,a)}function G0(e,t){return Hn(e,t)}var Mr=null,Al=null,oc=!1,Ur=!1,cc=!1,rn=0;function ba(e){e!==Al&&e.next===null&&(Al===null?Mr=Al=e:Al=Al.next=e),Ur=!0,oc||(oc=!0,Z0())}function xi(e,t){if(!cc&&Ur){cc=!0;do for(var a=!1,n=Mr;n!==null;){if(e!==0){var r=n.pendingLanes;if(r===0)var o=0;else{var f=n.suspendedLanes,g=n.pingedLanes;o=(1<<31-$(42|e)+1)-1,o&=r&~(f&~g),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,Up(n,o))}else o=Be,o=sa(n,n===Ie?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||Qt(n,o)||(a=!0,Up(n,o));n=n.next}while(a);cc=!1}}function K0(){Bp()}function Bp(){Ur=oc=!1;var e=0;rn!==0&&tx()&&(e=rn);for(var t=Ot(),a=null,n=Mr;n!==null;){var r=n.next,o=Rp(n,t);o===0?(n.next=null,a===null?Mr=r:a.next=r,r===null&&(Al=a)):(a=n,(e!==0||(o&3)!==0)&&(Ur=!0)),n=r}xt!==0&&xt!==5||xi(e),rn!==0&&(rn=0)}function Rp(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var f=31-$(o),g=1<<f,v=r[f];v===-1?((g&a)===0||(g&n)!==0)&&(r[f]=Vn(g,t)):v<=t&&(e.expiredLanes|=g),o&=~g}if(t=Ie,a=Be,a=sa(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&hn(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Qt(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&hn(n),ws(a)){case 2:case 8:a=P;break;case 32:a=I;break;case 268435456:a=Se;break;default:a=I}return n=Mp.bind(null,e),a=Hn(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&hn(n),e.callbackPriority=2,e.callbackNode=null,2}function Mp(e,t){if(xt!==0&&xt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Rr()&&e.callbackNode!==a)return null;var n=Be;return n=sa(e,e===Ie?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(hp(e,n,t),Rp(e,Ot()),e.callbackNode!=null&&e.callbackNode===a?Mp.bind(null,e):null)}function Up(e,t){if(Rr())return null;hp(e,t,!0)}function Z0(){nx(function(){(Ve&6)!==0?Hn(R,K0):Bp()})}function uc(){if(rn===0){var e=rl;e===0&&(e=Ge,Ge<<=1,(Ge&261888)===0&&(Ge=256)),rn=e}return rn}function Dp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yi(""+e)}function kp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function X0(e,t,a,n,r){if(t==="submit"&&a&&a.stateNode===r){var o=Dp((r[Rt]||null).action),f=n.submitter;f&&(t=(t=f[Rt]||null)?Dp(t.formAction):f.getAttribute("formAction"),t!==null&&(o=t,f=null));var g=new Xi("action","action",null,n,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(rn!==0){var v=f?kp(r,f):new FormData(r);To(a,{pending:!0,data:v,method:r.method,action:o},null,v)}}else typeof o=="function"&&(g.preventDefault(),v=f?kp(r,f):new FormData(r),To(a,{pending:!0,data:v,method:r.method,action:o},o,v))},currentTarget:r}]})}}for(var dc=0;dc<Xs.length;dc++){var fc=Xs[dc],F0=fc.toLowerCase(),J0=fc[0].toUpperCase()+fc.slice(1);oa(F0,"on"+J0)}oa(fd,"onAnimationEnd"),oa(pd,"onAnimationIteration"),oa(hd,"onAnimationStart"),oa("dblclick","onDoubleClick"),oa("focusin","onFocus"),oa("focusout","onBlur"),oa(u0,"onTransitionRun"),oa(d0,"onTransitionStart"),oa(f0,"onTransitionCancel"),oa(md,"onTransitionEnd"),Xn("onMouseEnter",["mouseout","mouseover"]),Xn("onMouseLeave",["mouseout","mouseover"]),Xn("onPointerEnter",["pointerout","pointerover"]),Xn("onPointerLeave",["pointerout","pointerover"]),mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bi));function Lp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],r=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var f=n.length-1;0<=f;f--){var g=n[f],v=g.instance,O=g.currentTarget;if(g=g.listener,v!==o&&r.isPropagationStopped())break e;o=g,r.currentTarget=O;try{o(r)}catch(V){Pi(V)}r.currentTarget=null,o=v}else for(f=0;f<n.length;f++){if(g=n[f],v=g.instance,O=g.currentTarget,g=g.listener,v!==o&&r.isPropagationStopped())break e;o=g,r.currentTarget=O;try{o(r)}catch(V){Pi(V)}r.currentTarget=null,o=v}}}}function Ce(e,t){var a=t[Ss];a===void 0&&(a=t[Ss]=new Set);var n=e+"__bubble";a.has(n)||(Hp(t,e,2,!1),a.add(n))}function pc(e,t,a){var n=0;t&&(n|=4),Hp(a,e,n,t)}var Dr="_reactListening"+Math.random().toString(36).slice(2);function hc(e){if(!e[Dr]){e[Dr]=!0,Tu.forEach(function(a){a!=="selectionchange"&&(P0.has(a)||pc(a,!1,e),pc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dr]||(t[Dr]=!0,pc("selectionchange",!1,t))}}function Hp(e,t,a,n){switch(ph(t)){case 2:var r=wx;break;case 8:r=Sx;break;default:r=Oc}a=r.bind(null,t,a,e),r=void 0,!Ms||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),n?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function mc(e,t,a,n,r){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var g=n.stateNode.containerInfo;if(g===r)break;if(f===4)for(f=n.return;f!==null;){var v=f.tag;if((v===3||v===4)&&f.stateNode.containerInfo===r)return;f=f.return}for(;g!==null;){if(f=Gn(g),f===null)return;if(v=f.tag,v===5||v===6||v===26||v===27){n=o=f;continue e}g=g.parentNode}}n=n.return}Yu(function(){var O=o,V=Bs(a),Z=[];e:{var M=gd.get(e);if(M!==void 0){var k=Xi,oe=e;switch(e){case"keypress":if(Ki(a)===0)break e;case"keydown":case"keyup":k=Yg;break;case"focusin":oe="focus",k=Ls;break;case"focusout":oe="blur",k=Ls;break;case"beforeblur":case"afterblur":k=Ls;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Zu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Zg;break;case fd:case pd:case hd:k=Mg;break;case md:k=Fg;break;case"scroll":case"scrollend":k=Cg;break;case"wheel":k=Pg;break;case"copy":case"cut":case"paste":k=Dg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Fu;break;case"toggle":case"beforetoggle":k=Wg}var he=(t&4)!==0,Je=!he&&(e==="scroll"||e==="scrollend"),N=he?M!==null?M+"Capture":null:M;he=[];for(var E=O,C;E!==null;){var Q=E;if(C=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||C===null||N===null||(Q=Vl(E,N),Q!=null&&he.push(yi(E,Q,C))),Je)break;E=E.return}0<he.length&&(M=new k(M,oe,null,a,V),Z.push({event:M,listeners:he}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",M&&a!==Ts&&(oe=a.relatedTarget||a.fromElement)&&(Gn(oe)||oe[Yn]))break e;if((k||M)&&(M=V.window===V?V:(M=V.ownerDocument)?M.defaultView||M.parentWindow:window,k?(oe=a.relatedTarget||a.toElement,k=O,oe=oe?Gn(oe):null,oe!==null&&(Je=p(oe),he=oe.tag,oe!==Je||he!==5&&he!==27&&he!==6)&&(oe=null)):(k=null,oe=O),k!==oe)){if(he=Zu,Q="onMouseLeave",N="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(he=Fu,Q="onPointerLeave",N="onPointerEnter",E="pointer"),Je=k==null?M:ql(k),C=oe==null?M:ql(oe),M=new he(Q,E+"leave",k,a,V),M.target=Je,M.relatedTarget=C,Q=null,Gn(V)===O&&(he=new he(N,E+"enter",oe,a,V),he.target=C,he.relatedTarget=Je,Q=he),Je=Q,k&&oe)t:{for(he=I0,N=k,E=oe,C=0,Q=N;Q;Q=he(Q))C++;Q=0;for(var fe=E;fe;fe=he(fe))Q++;for(;0<C-Q;)N=he(N),C--;for(;0<Q-C;)E=he(E),Q--;for(;C--;){if(N===E||E!==null&&N===E.alternate){he=N;break t}N=he(N),E=he(E)}he=null}else he=null;k!==null&&qp(Z,M,k,he,!1),oe!==null&&Je!==null&&qp(Z,Je,oe,he,!0)}}e:{if(M=O?ql(O):window,k=M.nodeName&&M.nodeName.toLowerCase(),k==="select"||k==="input"&&M.type==="file")var Le=td;else if($u(M))if(ad)Le=s0;else{Le=i0;var ce=l0}else k=M.nodeName,!k||k.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?O&&Os(O.elementType)&&(Le=td):Le=r0;if(Le&&(Le=Le(e,O))){ed(Z,Le,a,V);break e}ce&&ce(e,M,O),e==="focusout"&&O&&M.type==="number"&&O.memoizedProps.value!=null&&Cs(M,"number",M.value)}switch(ce=O?ql(O):window,e){case"focusin":($u(ce)||ce.contentEditable==="true")&&(_n=ce,Gs=O,Jl=null);break;case"focusout":Jl=Gs=_n=null;break;case"mousedown":Ks=!0;break;case"contextmenu":case"mouseup":case"dragend":Ks=!1,ud(Z,a,V);break;case"selectionchange":if(c0)break;case"keydown":case"keyup":ud(Z,a,V)}var we;if(qs)e:{switch(e){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else Wn?Wu(e,a)&&(Re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Re="onCompositionStart");Re&&(Ju&&a.locale!=="ko"&&(Wn||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Wn&&(we=Gu()):(Ga=V,Us="value"in Ga?Ga.value:Ga.textContent,Wn=!0)),ce=kr(O,Re),0<ce.length&&(Re=new Xu(Re,e,null,a,V),Z.push({event:Re,listeners:ce}),we?Re.data=we:(we=_u(a),we!==null&&(Re.data=we)))),(we=$g?e0(e,a):t0(e,a))&&(Re=kr(O,"onBeforeInput"),0<Re.length&&(ce=new Xu("onBeforeInput","beforeinput",null,a,V),Z.push({event:ce,listeners:Re}),ce.data=we)),X0(Z,e,O,a,V)}Lp(Z,t)})}function yi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function kr(e,t){for(var a=t+"Capture",n=[];e!==null;){var r=e,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=Vl(e,a),r!=null&&n.unshift(yi(e,r,o)),r=Vl(e,t),r!=null&&n.push(yi(e,r,o))),e.tag===3)return n;e=e.return}return[]}function I0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qp(e,t,a,n,r){for(var o=t._reactName,f=[];a!==null&&a!==n;){var g=a,v=g.alternate,O=g.stateNode;if(g=g.tag,v!==null&&v===n)break;g!==5&&g!==26&&g!==27||O===null||(v=O,r?(O=Vl(a,o),O!=null&&f.unshift(yi(a,O,v))):r||(O=Vl(a,o),O!=null&&f.push(yi(a,O,v)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var W0=/\r\n?/g,_0=/\u0000|\uFFFD/g;function Vp(e){return(typeof e=="string"?e:""+e).replace(W0,`
`).replace(_0,"")}function Qp(e,t){return t=Vp(t),Vp(e)===t}function Fe(e,t,a,n,r,o){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Jn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Jn(e,""+n);break;case"className":Vi(e,"class",n);break;case"tabIndex":Vi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Vi(e,a,n);break;case"style":Vu(e,n,o);break;case"data":if(t!=="object"){Vi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Yi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&Fe(e,t,"name",r.name,r,null),Fe(e,t,"formEncType",r.formEncType,r,null),Fe(e,t,"formMethod",r.formMethod,r,null),Fe(e,t,"formTarget",r.formTarget,r,null)):(Fe(e,t,"encType",r.encType,r,null),Fe(e,t,"method",r.method,r,null),Fe(e,t,"target",r.target,r,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Yi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=ja);break;case"onScroll":n!=null&&Ce("scroll",e);break;case"onScrollEnd":n!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Yi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),qi(e,"popover",n);break;case"xlinkActuate":Aa(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Aa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Aa(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Aa(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Aa(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Aa(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Aa(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Aa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Aa(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":qi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ng.get(a)||a,qi(e,a,n))}}function gc(e,t,a,n,r,o){switch(a){case"style":Vu(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Jn(e,n):(typeof n=="number"||typeof n=="bigint")&&Jn(e,""+n);break;case"onScroll":n!=null&&Ce("scroll",e);break;case"onScrollEnd":n!=null&&Ce("scrollend",e);break;case"onClick":n!=null&&(e.onclick=ja);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),t=a.slice(2,r?a.length-7:void 0),o=e[Rt]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,r),typeof n=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,r);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):qi(e,a,n)}}}function Et(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var n=!1,r=!1,o;for(o in a)if(a.hasOwnProperty(o)){var f=a[o];if(f!=null)switch(o){case"src":n=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Fe(e,t,o,f,a,null)}}r&&Fe(e,t,"srcSet",a.srcSet,a,null),n&&Fe(e,t,"src",a.src,a,null);return;case"input":Ce("invalid",e);var g=o=f=r=null,v=null,O=null;for(n in a)if(a.hasOwnProperty(n)){var V=a[n];if(V!=null)switch(n){case"name":r=V;break;case"type":f=V;break;case"checked":v=V;break;case"defaultChecked":O=V;break;case"value":o=V;break;case"defaultValue":g=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(u(137,t));break;default:Fe(e,t,n,V,a,null)}}ku(e,o,g,v,O,f,r,!1);return;case"select":Ce("invalid",e),n=f=o=null;for(r in a)if(a.hasOwnProperty(r)&&(g=a[r],g!=null))switch(r){case"value":o=g;break;case"defaultValue":f=g;break;case"multiple":n=g;default:Fe(e,t,r,g,a,null)}t=o,a=f,e.multiple=!!n,t!=null?Fn(e,!!n,t,!1):a!=null&&Fn(e,!!n,a,!0);return;case"textarea":Ce("invalid",e),o=r=n=null;for(f in a)if(a.hasOwnProperty(f)&&(g=a[f],g!=null))switch(f){case"value":n=g;break;case"defaultValue":r=g;break;case"children":o=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(u(91));break;default:Fe(e,t,f,g,a,null)}Hu(e,n,r,o);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(n=a[v],n!=null))switch(v){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Fe(e,t,v,n,a,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(n=0;n<bi.length;n++)Ce(bi[n],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in a)if(a.hasOwnProperty(O)&&(n=a[O],n!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Fe(e,t,O,n,a,null)}return;default:if(Os(t)){for(V in a)a.hasOwnProperty(V)&&(n=a[V],n!==void 0&&gc(e,t,V,n,a,void 0));return}}for(g in a)a.hasOwnProperty(g)&&(n=a[g],n!=null&&Fe(e,t,g,n,a,null))}function $0(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,f=null,g=null,v=null,O=null,V=null;for(k in a){var Z=a[k];if(a.hasOwnProperty(k)&&Z!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":v=Z;default:n.hasOwnProperty(k)||Fe(e,t,k,null,n,Z)}}for(var M in n){var k=n[M];if(Z=a[M],n.hasOwnProperty(M)&&(k!=null||Z!=null))switch(M){case"type":o=k;break;case"name":r=k;break;case"checked":O=k;break;case"defaultChecked":V=k;break;case"value":f=k;break;case"defaultValue":g=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(u(137,t));break;default:k!==Z&&Fe(e,t,M,k,n,Z)}}zs(e,f,g,v,O,V,o,r);return;case"select":k=f=g=M=null;for(o in a)if(v=a[o],a.hasOwnProperty(o)&&v!=null)switch(o){case"value":break;case"multiple":k=v;default:n.hasOwnProperty(o)||Fe(e,t,o,null,n,v)}for(r in n)if(o=n[r],v=a[r],n.hasOwnProperty(r)&&(o!=null||v!=null))switch(r){case"value":M=o;break;case"defaultValue":g=o;break;case"multiple":f=o;default:o!==v&&Fe(e,t,r,o,n,v)}t=g,a=f,n=k,M!=null?Fn(e,!!a,M,!1):!!n!=!!a&&(t!=null?Fn(e,!!a,t,!0):Fn(e,!!a,a?[]:"",!1));return;case"textarea":k=M=null;for(g in a)if(r=a[g],a.hasOwnProperty(g)&&r!=null&&!n.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Fe(e,t,g,null,n,r)}for(f in n)if(r=n[f],o=a[f],n.hasOwnProperty(f)&&(r!=null||o!=null))switch(f){case"value":M=r;break;case"defaultValue":k=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:r!==o&&Fe(e,t,f,r,n,o)}Lu(e,M,k);return;case"option":for(var oe in a)if(M=a[oe],a.hasOwnProperty(oe)&&M!=null&&!n.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:Fe(e,t,oe,null,n,M)}for(v in n)if(M=n[v],k=a[v],n.hasOwnProperty(v)&&M!==k&&(M!=null||k!=null))switch(v){case"selected":e.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:Fe(e,t,v,M,n,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in a)M=a[he],a.hasOwnProperty(he)&&M!=null&&!n.hasOwnProperty(he)&&Fe(e,t,he,null,n,M);for(O in n)if(M=n[O],k=a[O],n.hasOwnProperty(O)&&M!==k&&(M!=null||k!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:Fe(e,t,O,M,n,k)}return;default:if(Os(t)){for(var Je in a)M=a[Je],a.hasOwnProperty(Je)&&M!==void 0&&!n.hasOwnProperty(Je)&&gc(e,t,Je,void 0,n,M);for(V in n)M=n[V],k=a[V],!n.hasOwnProperty(V)||M===k||M===void 0&&k===void 0||gc(e,t,V,M,n,k);return}}for(var N in a)M=a[N],a.hasOwnProperty(N)&&M!=null&&!n.hasOwnProperty(N)&&Fe(e,t,N,null,n,M);for(Z in n)M=n[Z],k=a[Z],!n.hasOwnProperty(Z)||M===k||M==null&&k==null||Fe(e,t,Z,M,n,k)}function Yp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ex(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var r=a[n],o=r.transferSize,f=r.initiatorType,g=r.duration;if(o&&g&&Yp(f)){for(f=0,g=r.responseEnd,n+=1;n<a.length;n++){var v=a[n],O=v.startTime;if(O>g)break;var V=v.transferSize,Z=v.initiatorType;V&&Yp(Z)&&(v=v.responseEnd,f+=V*(v<g?1:(g-O)/(v-O)))}if(--n,t+=8*(o+f)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xc=null,bc=null;function Lr(e){return e.nodeType===9?e:e.ownerDocument}function Gp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function yc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vc=null;function tx(){var e=window.event;return e&&e.type==="popstate"?e===vc?!1:(vc=e,!0):(vc=null,!1)}var Zp=typeof setTimeout=="function"?setTimeout:void 0,ax=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,nx=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(e){return Xp.resolve(null).then(e).catch(lx)}:Zp;function lx(e){setTimeout(function(){throw e})}function sn(e){return e==="head"}function Fp(e,t){var a=t,n=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(r),El(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")vi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,vi(a);for(var o=a.firstChild;o;){var f=o.nextSibling,g=o.nodeName;o[Hl]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=f}}else a==="body"&&vi(e.ownerDocument.body);a=r}while(a);El(t)}function Jp(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Ac(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ac(a),Es(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ix(e,t,a,n){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Hl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=na(e.nextSibling),e===null)break}return null}function rx(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=na(e.nextSibling),e===null))return null;return e}function Pp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=na(e.nextSibling),e===null))return null;return e}function jc(e){return e.data==="$?"||e.data==="$~"}function wc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function sx(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function na(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Sc=null;function Ip(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return na(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Wp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function _p(e,t,a){switch(t=Lr(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function vi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Es(e)}var la=new Map,$p=new Set;function Hr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ha=W.d;W.d={f:ox,r:cx,D:ux,C:dx,L:fx,m:px,X:mx,S:hx,M:gx};function ox(){var e=Ha.f(),t=Or();return e||t}function cx(e){var t=Kn(e);t!==null&&t.tag===5&&t.type==="form"?gf(t):Ha.r(e)}var jl=typeof document>"u"?null:document;function eh(e,t,a){var n=jl;if(n&&typeof t=="string"&&t){var r=It(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),$p.has(r)||($p.add(r),e={rel:e,crossOrigin:a,href:t},n.querySelector(r)===null&&(t=n.createElement("link"),Et(t,"link",e),bt(t),n.head.appendChild(t)))}}function ux(e){Ha.D(e),eh("dns-prefetch",e,null)}function dx(e,t){Ha.C(e,t),eh("preconnect",e,t)}function fx(e,t,a){Ha.L(e,t,a);var n=jl;if(n&&e&&t){var r='link[rel="preload"][as="'+It(t)+'"]';t==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+It(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+It(a.imageSizes)+'"]')):r+='[href="'+It(e)+'"]';var o=r;switch(t){case"style":o=wl(e);break;case"script":o=Sl(e)}la.has(o)||(e=j({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),la.set(o,e),n.querySelector(r)!==null||t==="style"&&n.querySelector(Ai(o))||t==="script"&&n.querySelector(ji(o))||(t=n.createElement("link"),Et(t,"link",e),bt(t),n.head.appendChild(t)))}}function px(e,t){Ha.m(e,t);var a=jl;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+It(n)+'"][href="'+It(e)+'"]',o=r;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Sl(e)}if(!la.has(o)&&(e=j({rel:"modulepreload",href:e},t),la.set(o,e),a.querySelector(r)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ji(o)))return}n=a.createElement("link"),Et(n,"link",e),bt(n),a.head.appendChild(n)}}}function hx(e,t,a){Ha.S(e,t,a);var n=jl;if(n&&e){var r=Zn(n).hoistableStyles,o=wl(e);t=t||"default";var f=r.get(o);if(!f){var g={loading:0,preload:null};if(f=n.querySelector(Ai(o)))g.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},a),(a=la.get(o))&&Ec(e,a);var v=f=n.createElement("link");bt(v),Et(v,"link",e),v._p=new Promise(function(O,V){v.onload=O,v.onerror=V}),v.addEventListener("load",function(){g.loading|=1}),v.addEventListener("error",function(){g.loading|=2}),g.loading|=4,qr(f,t,n)}f={type:"stylesheet",instance:f,count:1,state:g},r.set(o,f)}}}function mx(e,t){Ha.X(e,t);var a=jl;if(a&&e){var n=Zn(a).hoistableScripts,r=Sl(e),o=n.get(r);o||(o=a.querySelector(ji(r)),o||(e=j({src:e,async:!0},t),(t=la.get(r))&&Nc(e,t),o=a.createElement("script"),bt(o),Et(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(r,o))}}function gx(e,t){Ha.M(e,t);var a=jl;if(a&&e){var n=Zn(a).hoistableScripts,r=Sl(e),o=n.get(r);o||(o=a.querySelector(ji(r)),o||(e=j({src:e,async:!0,type:"module"},t),(t=la.get(r))&&Nc(e,t),o=a.createElement("script"),bt(o),Et(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(r,o))}}function th(e,t,a,n){var r=(r=ge.current)?Hr(r):null;if(!r)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=wl(a.href),a=Zn(r).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=wl(a.href);var o=Zn(r).hoistableStyles,f=o.get(e);if(f||(r=r.ownerDocument||r,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,f),(o=r.querySelector(Ai(e)))&&!o._p&&(f.instance=o,f.state.loading=5),la.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},la.set(e,a),o||xx(r,e,a,f.state))),t&&n===null)throw Error(u(528,""));return f}if(t&&n!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Sl(a),a=Zn(r).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function wl(e){return'href="'+It(e)+'"'}function Ai(e){return'link[rel="stylesheet"]['+e+"]"}function ah(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function xx(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Et(t,"link",a),bt(t),e.head.appendChild(t))}function Sl(e){return'[src="'+It(e)+'"]'}function ji(e){return"script[async]"+e}function nh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+It(a.href)+'"]');if(n)return t.instance=n,bt(n),n;var r=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),bt(n),Et(n,"style",r),qr(n,a.precedence,e),t.instance=n;case"stylesheet":r=wl(a.href);var o=e.querySelector(Ai(r));if(o)return t.state.loading|=4,t.instance=o,bt(o),o;n=ah(a),(r=la.get(r))&&Ec(n,r),o=(e.ownerDocument||e).createElement("link"),bt(o);var f=o;return f._p=new Promise(function(g,v){f.onload=g,f.onerror=v}),Et(o,"link",n),t.state.loading|=4,qr(o,a.precedence,e),t.instance=o;case"script":return o=Sl(a.src),(r=e.querySelector(ji(o)))?(t.instance=r,bt(r),r):(n=a,(r=la.get(o))&&(n=j({},a),Nc(n,r)),e=e.ownerDocument||e,r=e.createElement("script"),bt(r),Et(r,"link",n),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,qr(n,a.precedence,e));return t.instance}function qr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=n.length?n[n.length-1]:null,o=r,f=0;f<n.length;f++){var g=n[f];if(g.dataset.precedence===t)o=g;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ec(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Nc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vr=null;function lh(e,t,a){if(Vr===null){var n=new Map,r=Vr=new Map;r.set(a,n)}else r=Vr,n=r.get(a),n||(n=new Map,r.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var o=a[r];if(!(o[Hl]||o[At]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var f=o.getAttribute(t)||"";f=e+f;var g=n.get(f);g?g.push(o):n.set(f,[o])}}return n}function ih(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function bx(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function rh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yx(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=wl(n.href),o=t.querySelector(Ai(r));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Qr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=o,bt(o);return}o=t.ownerDocument||t,n=ah(n),(r=la.get(r))&&Ec(n,r),o=o.createElement("link"),bt(o);var f=o;f._p=new Promise(function(g,v){f.onload=g,f.onerror=v}),Et(o,"link",n),a.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Qr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var zc=0;function vx(e,t){return e.stylesheets&&e.count===0&&Gr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Gr(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&zc===0&&(zc=62500*ex());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Gr(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>zc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(r)}}:null}function Qr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yr=null;function Gr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yr=new Map,t.forEach(Ax,e),Yr=null,Qr.call(e))}function Ax(e,t){if(!(t.state.loading&4)){var a=Yr.get(e);if(a)var n=a.get(null);else{a=new Map,Yr.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var f=r[o];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),n=f)}n&&a.set(null,n)}r=t.instance,f=r.getAttribute("data-precedence"),o=a.get(f)||n,o===n&&a.set(null,r),a.set(f,r),this.count++,n=Qr.bind(this),r.addEventListener("load",n),r.addEventListener("error",n),o?o.parentNode.insertBefore(r,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var wi={$$typeof:ee,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function jx(e,t,a,n,r,o,f,g,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qn(0),this.hiddenUpdates=Qn(null),this.identifierPrefix=n,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function sh(e,t,a,n,r,o,f,g,v,O,V,Z){return e=new jx(e,t,a,f,v,O,V,Z,g),t=1,o===!0&&(t|=24),o=Gt(3,null,null,t),e.current=o,o.stateNode=e,t=io(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},co(o),e}function oh(e){return e?(e=tl,e):tl}function ch(e,t,a,n,r,o){r=oh(r),n.context===null?n.context=r:n.pendingContext=r,n=Pa(t),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=Ia(e,n,t),a!==null&&(Ht(a,e,t),ti(a,e,t))}function uh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Cc(e,t){uh(e,t),(e=e.alternate)&&uh(e,t)}function dh(e){if(e.tag===13||e.tag===31){var t=yn(e,67108864);t!==null&&Ht(t,e,67108864),Cc(e,67108864)}}function fh(e){if(e.tag===13||e.tag===31){var t=Jt();t=js(t);var a=yn(e,t);a!==null&&Ht(a,e,t),Cc(e,t)}}var Kr=!0;function wx(e,t,a,n){var r=B.T;B.T=null;var o=W.p;try{W.p=2,Oc(e,t,a,n)}finally{W.p=o,B.T=r}}function Sx(e,t,a,n){var r=B.T;B.T=null;var o=W.p;try{W.p=8,Oc(e,t,a,n)}finally{W.p=o,B.T=r}}function Oc(e,t,a,n){if(Kr){var r=Tc(n);if(r===null)mc(e,t,n,Zr,a),hh(e,n);else if(Nx(r,e,t,a,n))n.stopPropagation();else if(hh(e,n),t&4&&-1<Ex.indexOf(e)){for(;r!==null;){var o=Kn(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var f=nt(o.pendingLanes);if(f!==0){var g=o;for(g.pendingLanes|=2,g.entangledLanes|=2;f;){var v=1<<31-$(f);g.entanglements[1]|=v,f&=~v}ba(o),(Ve&6)===0&&(zr=Ot()+500,xi(0))}}break;case 31:case 13:g=yn(o,2),g!==null&&Ht(g,o,2),Or(),Cc(o,2)}if(o=Tc(n),o===null&&mc(e,t,n,Zr,a),o===r)break;r=o}r!==null&&n.stopPropagation()}else mc(e,t,n,null,a)}}function Tc(e){return e=Bs(e),Bc(e)}var Zr=null;function Bc(e){if(Zr=null,e=Gn(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=x(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zr=e,null}function ph(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(F()){case R:return 2;case P:return 8;case I:case je:return 32;case Se:return 268435456;default:return 32}default:return 32}}var Rc=!1,on=null,cn=null,un=null,Si=new Map,Ei=new Map,dn=[],Ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hh(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Ni(e,t,a,n,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[r]},t!==null&&(t=Kn(t),t!==null&&dh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Nx(e,t,a,n,r){switch(t){case"focusin":return on=Ni(on,e,t,a,n,r),!0;case"dragenter":return cn=Ni(cn,e,t,a,n,r),!0;case"mouseover":return un=Ni(un,e,t,a,n,r),!0;case"pointerover":var o=r.pointerId;return Si.set(o,Ni(Si.get(o)||null,e,t,a,n,r)),!0;case"gotpointercapture":return o=r.pointerId,Ei.set(o,Ni(Ei.get(o)||null,e,t,a,n,r)),!0}return!1}function mh(e){var t=Gn(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,Cu(e.priority,function(){fh(a)});return}}else if(t===31){if(t=x(a),t!==null){e.blockedOn=t,Cu(e.priority,function(){fh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Tc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Ts=n,a.target.dispatchEvent(n),Ts=null}else return t=Kn(a),t!==null&&dh(t),e.blockedOn=a,!1;t.shift()}return!0}function gh(e,t,a){Xr(e)&&a.delete(t)}function zx(){Rc=!1,on!==null&&Xr(on)&&(on=null),cn!==null&&Xr(cn)&&(cn=null),un!==null&&Xr(un)&&(un=null),Si.forEach(gh),Ei.forEach(gh)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Rc||(Rc=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,zx)))}var Jr=null;function xh(e){Jr!==e&&(Jr=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Jr===e&&(Jr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],r=e[t+2];if(typeof n!="function"){if(Bc(n||a)===null)continue;break}var o=Kn(a);o!==null&&(e.splice(t,3),t-=3,To(o,{pending:!0,data:r,method:a.method,action:n},n,r))}}))}function El(e){function t(v){return Fr(v,e)}on!==null&&Fr(on,e),cn!==null&&Fr(cn,e),un!==null&&Fr(un,e),Si.forEach(t),Ei.forEach(t);for(var a=0;a<dn.length;a++){var n=dn[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<dn.length&&(a=dn[0],a.blockedOn===null);)mh(a),a.blockedOn===null&&dn.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var r=a[n],o=a[n+1],f=r[Rt]||null;if(typeof o=="function")f||xh(a);else if(f){var g=null;if(o&&o.hasAttribute("formAction")){if(r=o,f=o[Rt]||null)g=f.formAction;else if(Bc(r)!==null)continue}else g=f.action;typeof g=="function"?a[n+1]=g:(a.splice(n,3),n-=3),xh(a)}}}function bh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(f){return r=f})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Mc(e){this._internalRoot=e}Pr.prototype.render=Mc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,n=Jt();ch(a,n,e,t,null,null)},Pr.prototype.unmount=Mc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ch(e.current,2,null,e,null,null),Or(),t[Yn]=null}};function Pr(e){this._internalRoot=e}Pr.prototype.unstable_scheduleHydration=function(e){if(e){var t=zu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<dn.length&&t!==0&&t<dn[a].priority;a++);dn.splice(a,0,e),a===0&&mh(e)}};var yh=s.version;if(yh!=="19.2.0")throw Error(u(527,yh,"19.2.0"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=m(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Cx={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ir.isDisabled&&Ir.supportsFiber)try{K=Ir.inject(Cx),ae=Ir}catch{}}return Ci.createRoot=function(e,t){if(!d(e))throw Error(u(299));var a=!1,n="",r=Nf,o=zf,f=Cf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=sh(e,1,!1,null,null,a,n,null,r,o,f,bh),e[Yn]=t.current,hc(e),new Mc(t)},Ci.hydrateRoot=function(e,t,a){if(!d(e))throw Error(u(299));var n=!1,r="",o=Nf,f=zf,g=Cf,v=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(g=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=sh(e,1,!0,t,a??null,n,r,v,o,f,g,bh),t.context=oh(null),a=t.current,n=Jt(),n=js(n),r=Pa(n),r.callback=null,Ia(a,r,n),a=n,t.current.lanes=a,Ll(t,a),ba(t),e[Yn]=t.current,hc(e),new Pr(t)},Ci.version="19.2.0",Ci}var Oh;function qx(){if(Oh)return kc.exports;Oh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),kc.exports=Hx(),kc.exports}var Vx=qx();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Th="popstate";function Qx(i={}){function s(u,d){let{pathname:p,search:h,hash:x}=u.location;return tu("",{pathname:p,search:h,hash:x},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(u,d){return typeof d=="string"?d:Bi(d)}return Gx(s,c,null,i)}function it(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function da(i,s){if(!i){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Yx(){return Math.random().toString(36).substring(2,10)}function Bh(i,s){return{usr:i.state,key:i.key,idx:s}}function tu(i,s,c=null,u){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof s=="string"?Ol(s):s,state:c,key:s&&s.key||u||Yx()}}function Bi({pathname:i="/",search:s="",hash:c=""}){return s&&s!=="?"&&(i+=s.charAt(0)==="?"?s:"?"+s),c&&c!=="#"&&(i+=c.charAt(0)==="#"?c:"#"+c),i}function Ol(i){let s={};if(i){let c=i.indexOf("#");c>=0&&(s.hash=i.substring(c),i=i.substring(0,c));let u=i.indexOf("?");u>=0&&(s.search=i.substring(u),i=i.substring(0,u)),i&&(s.pathname=i)}return s}function Gx(i,s,c,u={}){let{window:d=document.defaultView,v5Compat:p=!1}=u,h=d.history,x="POP",b=null,m=y();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function y(){return(h.state||{idx:null}).idx}function j(){x="POP";let U=y(),Y=U==null?null:U-m;m=U,b&&b({action:x,location:T.location,delta:Y})}function H(U,Y){x="PUSH";let J=tu(T.location,U,Y);m=y()+1;let ee=Bh(J,m),me=T.createHref(J);try{h.pushState(ee,"",me)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;d.location.assign(me)}p&&b&&b({action:x,location:T.location,delta:1})}function z(U,Y){x="REPLACE";let J=tu(T.location,U,Y);m=y();let ee=Bh(J,m),me=T.createHref(J);h.replaceState(ee,"",me),p&&b&&b({action:x,location:T.location,delta:0})}function w(U){return Kx(U)}let T={get action(){return x},get location(){return i(d,h)},listen(U){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(Th,j),b=U,()=>{d.removeEventListener(Th,j),b=null}},createHref(U){return s(d,U)},createURL:w,encodeLocation(U){let Y=w(U);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:H,replace:z,go(U){return h.go(U)}};return T}function Kx(i,s=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),it(c,"No window.location.(origin|href) available to create URL");let u=typeof i=="string"?i:Bi(i);return u=u.replace(/ $/,"%20"),!s&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function sm(i,s,c="/"){return Zx(i,s,c,!1)}function Zx(i,s,c,u){let d=typeof s=="string"?Ol(s):s,p=Qa(d.pathname||"/",c);if(p==null)return null;let h=om(i);Xx(h);let x=null;for(let b=0;x==null&&b<h.length;++b){let m=nb(p);x=tb(h[b],m,u)}return x}function om(i,s=[],c=[],u="",d=!1){let p=(h,x,b=d,m)=>{let y={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:x,route:h};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(u)&&b)return;it(y.relativePath.startsWith(u),`Absolute route path "${y.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(u.length)}let j=Va([u,y.relativePath]),H=c.concat(y);h.children&&h.children.length>0&&(it(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${j}".`),om(h.children,s,H,j,b)),!(h.path==null&&!h.index)&&s.push({path:j,score:$x(j,h.index),routesMeta:H})};return i.forEach((h,x)=>{if(h.path===""||!h.path?.includes("?"))p(h,x);else for(let b of cm(h.path))p(h,x,!0,b)}),s}function cm(i){let s=i.split("/");if(s.length===0)return[];let[c,...u]=s,d=c.endsWith("?"),p=c.replace(/\?$/,"");if(u.length===0)return d?[p,""]:[p];let h=cm(u.join("/")),x=[];return x.push(...h.map(b=>b===""?p:[p,b].join("/"))),d&&x.push(...h),x.map(b=>i.startsWith("/")&&b===""?"/":b)}function Xx(i){i.sort((s,c)=>s.score!==c.score?c.score-s.score:eb(s.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var Fx=/^:[\w-]+$/,Jx=3,Px=2,Ix=1,Wx=10,_x=-2,Rh=i=>i==="*";function $x(i,s){let c=i.split("/"),u=c.length;return c.some(Rh)&&(u+=_x),s&&(u+=Px),c.filter(d=>!Rh(d)).reduce((d,p)=>d+(Fx.test(p)?Jx:p===""?Ix:Wx),u)}function eb(i,s){return i.length===s.length&&i.slice(0,-1).every((u,d)=>u===s[d])?i[i.length-1]-s[s.length-1]:0}function tb(i,s,c=!1){let{routesMeta:u}=i,d={},p="/",h=[];for(let x=0;x<u.length;++x){let b=u[x],m=x===u.length-1,y=p==="/"?s:s.slice(p.length)||"/",j=ls({path:b.relativePath,caseSensitive:b.caseSensitive,end:m},y),H=b.route;if(!j&&m&&c&&!u[u.length-1].route.index&&(j=ls({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},y)),!j)return null;Object.assign(d,j.params),h.push({params:d,pathname:Va([p,j.pathname]),pathnameBase:sb(Va([p,j.pathnameBase])),route:H}),j.pathnameBase!=="/"&&(p=Va([p,j.pathnameBase]))}return h}function ls(i,s){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[c,u]=ab(i.path,i.caseSensitive,i.end),d=s.match(c);if(!d)return null;let p=d[0],h=p.replace(/(.)\/+$/,"$1"),x=d.slice(1);return{params:u.reduce((m,{paramName:y,isOptional:j},H)=>{if(y==="*"){let w=x[H]||"";h=p.slice(0,p.length-w.length).replace(/(.)\/+$/,"$1")}const z=x[H];return j&&!z?m[y]=void 0:m[y]=(z||"").replace(/%2F/g,"/"),m},{}),pathname:p,pathnameBase:h,pattern:i}}function ab(i,s=!1,c=!0){da(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let u=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,x,b)=>(u.push({paramName:x,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(u.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),u]}function nb(i){try{return i.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return da(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),i}}function Qa(i,s){if(s==="/")return i;if(!i.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,u=i.charAt(c);return u&&u!=="/"?null:i.slice(c)||"/"}function lb(i,s="/"){let{pathname:c,search:u="",hash:d=""}=typeof i=="string"?Ol(i):i;return{pathname:c?c.startsWith("/")?c:ib(c,s):s,search:ob(u),hash:cb(d)}}function ib(i,s){let c=s.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function Vc(i,s,c,u){return`Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rb(i){return i.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function su(i){let s=rb(i);return s.map((c,u)=>u===s.length-1?c.pathname:c.pathnameBase)}function ou(i,s,c,u=!1){let d;typeof i=="string"?d=Ol(i):(d={...i},it(!d.pathname||!d.pathname.includes("?"),Vc("?","pathname","search",d)),it(!d.pathname||!d.pathname.includes("#"),Vc("#","pathname","hash",d)),it(!d.search||!d.search.includes("#"),Vc("#","search","hash",d)));let p=i===""||d.pathname==="",h=p?"/":d.pathname,x;if(h==null)x=c;else{let j=s.length-1;if(!u&&h.startsWith("..")){let H=h.split("/");for(;H[0]==="..";)H.shift(),j-=1;d.pathname=H.join("/")}x=j>=0?s[j]:"/"}let b=lb(d,x),m=h&&h!=="/"&&h.endsWith("/"),y=(p||h===".")&&c.endsWith("/");return!b.pathname.endsWith("/")&&(m||y)&&(b.pathname+="/"),b}var Va=i=>i.join("/").replace(/\/\/+/g,"/"),sb=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),ob=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,cb=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function ub(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var um=["POST","PUT","PATCH","DELETE"];new Set(um);var db=["GET",...um];new Set(db);var Tl=S.createContext(null);Tl.displayName="DataRouter";var ds=S.createContext(null);ds.displayName="DataRouterState";S.createContext(!1);var dm=S.createContext({isTransitioning:!1});dm.displayName="ViewTransition";var fb=S.createContext(new Map);fb.displayName="Fetchers";var pb=S.createContext(null);pb.displayName="Await";var fa=S.createContext(null);fa.displayName="Navigation";var Mi=S.createContext(null);Mi.displayName="Location";var ia=S.createContext({outlet:null,matches:[],isDataRoute:!1});ia.displayName="Route";var cu=S.createContext(null);cu.displayName="RouteError";function hb(i,{relative:s}={}){it(Bl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=S.useContext(fa),{hash:d,pathname:p,search:h}=Ui(i,{relative:s}),x=p;return c!=="/"&&(x=p==="/"?c:Va([c,p])),u.createHref({pathname:x,search:h,hash:d})}function Bl(){return S.useContext(Mi)!=null}function pa(){return it(Bl(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(Mi).location}var fm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function pm(i){S.useContext(fa).static||S.useLayoutEffect(i)}function ra(){let{isDataRoute:i}=S.useContext(ia);return i?Tb():mb()}function mb(){it(Bl(),"useNavigate() may be used only in the context of a <Router> component.");let i=S.useContext(Tl),{basename:s,navigator:c}=S.useContext(fa),{matches:u}=S.useContext(ia),{pathname:d}=pa(),p=JSON.stringify(su(u)),h=S.useRef(!1);return pm(()=>{h.current=!0}),S.useCallback((b,m={})=>{if(da(h.current,fm),!h.current)return;if(typeof b=="number"){c.go(b);return}let y=ou(b,JSON.parse(p),d,m.relative==="path");i==null&&s!=="/"&&(y.pathname=y.pathname==="/"?s:Va([s,y.pathname])),(m.replace?c.replace:c.push)(y,m.state,m)},[s,c,p,d,i])}var gb=S.createContext(null);function xb(i){let s=S.useContext(ia).outlet;return S.useMemo(()=>s&&S.createElement(gb.Provider,{value:i},s),[s,i])}function bb(){let{matches:i}=S.useContext(ia),s=i[i.length-1];return s?s.params:{}}function Ui(i,{relative:s}={}){let{matches:c}=S.useContext(ia),{pathname:u}=pa(),d=JSON.stringify(su(c));return S.useMemo(()=>ou(i,JSON.parse(d),u,s==="path"),[i,d,u,s])}function yb(i,s){return hm(i,s)}function hm(i,s,c,u,d){it(Bl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=S.useContext(fa),{matches:h}=S.useContext(ia),x=h[h.length-1],b=x?x.params:{},m=x?x.pathname:"/",y=x?x.pathnameBase:"/",j=x&&x.route;{let J=j&&j.path||"";mm(m,!j||J.endsWith("*")||J.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J==="/"?"*":`${J}/*`}">.`)}let H=pa(),z;if(s){let J=typeof s=="string"?Ol(s):s;it(y==="/"||J.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${J.pathname}" was given in the \`location\` prop.`),z=J}else z=H;let w=z.pathname||"/",T=w;if(y!=="/"){let J=y.replace(/^\//,"").split("/");T="/"+w.replace(/^\//,"").split("/").slice(J.length).join("/")}let U=sm(i,{pathname:T});da(j||U!=null,`No routes matched location "${z.pathname}${z.search}${z.hash}" `),da(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=Sb(U&&U.map(J=>Object.assign({},J,{params:Object.assign({},b,J.params),pathname:Va([y,p.encodeLocation?p.encodeLocation(J.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:J.pathname]),pathnameBase:J.pathnameBase==="/"?y:Va([y,p.encodeLocation?p.encodeLocation(J.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:J.pathnameBase])})),h,c,u,d);return s&&Y?S.createElement(Mi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...z},navigationType:"POP"}},Y):Y}function vb(){let i=Ob(),s=ub(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),c=i instanceof Error?i.stack:null,u="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:u},p={padding:"2px 4px",backgroundColor:u},h=null;return console.error("Error handled by React Router default ErrorBoundary:",i),h=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:p},"ErrorBoundary")," or"," ",S.createElement("code",{style:p},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},s),c?S.createElement("pre",{style:d},c):null,h)}var Ab=S.createElement(vb,null),jb=class extends S.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,s){return s.location!==i.location||s.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:s.error,location:s.location,revalidation:i.revalidation||s.revalidation}}componentDidCatch(i,s){this.props.unstable_onError?this.props.unstable_onError(i,s):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?S.createElement(ia.Provider,{value:this.props.routeContext},S.createElement(cu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function wb({routeContext:i,match:s,children:c}){let u=S.useContext(Tl);return u&&u.static&&u.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=s.route.id),S.createElement(ia.Provider,{value:i},c)}function Sb(i,s=[],c=null,u=null,d=null){if(i==null){if(!c)return null;if(c.errors)i=c.matches;else if(s.length===0&&!c.initialized&&c.matches.length>0)i=c.matches;else return null}let p=i,h=c?.errors;if(h!=null){let m=p.findIndex(y=>y.route.id&&h?.[y.route.id]!==void 0);it(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),p=p.slice(0,Math.min(p.length,m+1))}let x=!1,b=-1;if(c)for(let m=0;m<p.length;m++){let y=p[m];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(b=m),y.route.id){let{loaderData:j,errors:H}=c,z=y.route.loader&&!j.hasOwnProperty(y.route.id)&&(!H||H[y.route.id]===void 0);if(y.route.lazy||z){x=!0,b>=0?p=p.slice(0,b+1):p=[p[0]];break}}}return p.reduceRight((m,y,j)=>{let H,z=!1,w=null,T=null;c&&(H=h&&y.route.id?h[y.route.id]:void 0,w=y.route.errorElement||Ab,x&&(b<0&&j===0?(mm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),z=!0,T=null):b===j&&(z=!0,T=y.route.hydrateFallbackElement||null)));let U=s.concat(p.slice(0,j+1)),Y=()=>{let J;return H?J=w:z?J=T:y.route.Component?J=S.createElement(y.route.Component,null):y.route.element?J=y.route.element:J=m,S.createElement(wb,{match:y,routeContext:{outlet:m,matches:U,isDataRoute:c!=null},children:J})};return c&&(y.route.ErrorBoundary||y.route.errorElement||j===0)?S.createElement(jb,{location:c.location,revalidation:c.revalidation,component:w,error:H,children:Y(),routeContext:{outlet:null,matches:U,isDataRoute:!0},unstable_onError:u}):Y()},null)}function uu(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Eb(i){let s=S.useContext(Tl);return it(s,uu(i)),s}function Nb(i){let s=S.useContext(ds);return it(s,uu(i)),s}function zb(i){let s=S.useContext(ia);return it(s,uu(i)),s}function du(i){let s=zb(i),c=s.matches[s.matches.length-1];return it(c.route.id,`${i} can only be used on routes that contain a unique "id"`),c.route.id}function Cb(){return du("useRouteId")}function Ob(){let i=S.useContext(cu),s=Nb("useRouteError"),c=du("useRouteError");return i!==void 0?i:s.errors?.[c]}function Tb(){let{router:i}=Eb("useNavigate"),s=du("useNavigate"),c=S.useRef(!1);return pm(()=>{c.current=!0}),S.useCallback(async(d,p={})=>{da(c.current,fm),c.current&&(typeof d=="number"?i.navigate(d):await i.navigate(d,{fromRouteId:s,...p}))},[i,s])}var Mh={};function mm(i,s,c){!s&&!Mh[i]&&(Mh[i]=!0,da(!1,c))}S.memo(Bb);function Bb({routes:i,future:s,state:c,unstable_onError:u}){return hm(i,void 0,c,u,s)}function Uh({to:i,replace:s,state:c,relative:u}){it(Bl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=S.useContext(fa);da(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=S.useContext(ia),{pathname:h}=pa(),x=ra(),b=ou(i,su(p),h,u==="path"),m=JSON.stringify(b);return S.useEffect(()=>{x(JSON.parse(m),{replace:s,state:c,relative:u})},[x,m,u,s,c]),null}function gm(i){return xb(i.context)}function Oe(i){it(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Rb({basename:i="/",children:s=null,location:c,navigationType:u="POP",navigator:d,static:p=!1}){it(!Bl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=i.replace(/^\/*/,"/"),x=S.useMemo(()=>({basename:h,navigator:d,static:p,future:{}}),[h,d,p]);typeof c=="string"&&(c=Ol(c));let{pathname:b="/",search:m="",hash:y="",state:j=null,key:H="default"}=c,z=S.useMemo(()=>{let w=Qa(b,h);return w==null?null:{location:{pathname:w,search:m,hash:y,state:j,key:H},navigationType:u}},[h,b,m,y,j,H,u]);return da(z!=null,`<Router basename="${h}"> is not able to match the URL "${b}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:S.createElement(fa.Provider,{value:x},S.createElement(Mi.Provider,{children:s,value:z}))}function Mb({children:i,location:s}){return yb(au(i),s)}function au(i,s=[]){let c=[];return S.Children.forEach(i,(u,d)=>{if(!S.isValidElement(u))return;let p=[...s,d];if(u.type===S.Fragment){c.push.apply(c,au(u.props.children,p));return}it(u.type===Oe,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),it(!u.props.index||!u.props.children,"An index route cannot have child routes.");let h={id:u.props.id||p.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(h.children=au(u.props.children,p)),c.push(h)}),c}var $r="get",es="application/x-www-form-urlencoded";function fs(i){return i!=null&&typeof i.tagName=="string"}function Ub(i){return fs(i)&&i.tagName.toLowerCase()==="button"}function Db(i){return fs(i)&&i.tagName.toLowerCase()==="form"}function kb(i){return fs(i)&&i.tagName.toLowerCase()==="input"}function Lb(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Hb(i,s){return i.button===0&&(!s||s==="_self")&&!Lb(i)}var Wr=null;function qb(){if(Wr===null)try{new FormData(document.createElement("form"),0),Wr=!1}catch{Wr=!0}return Wr}var Vb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qc(i){return i!=null&&!Vb.has(i)?(da(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${es}"`),null):i}function Qb(i,s){let c,u,d,p,h;if(Db(i)){let x=i.getAttribute("action");u=x?Qa(x,s):null,c=i.getAttribute("method")||$r,d=Qc(i.getAttribute("enctype"))||es,p=new FormData(i)}else if(Ub(i)||kb(i)&&(i.type==="submit"||i.type==="image")){let x=i.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=i.getAttribute("formaction")||x.getAttribute("action");if(u=b?Qa(b,s):null,c=i.getAttribute("formmethod")||x.getAttribute("method")||$r,d=Qc(i.getAttribute("formenctype"))||Qc(x.getAttribute("enctype"))||es,p=new FormData(x,i),!qb()){let{name:m,type:y,value:j}=i;if(y==="image"){let H=m?`${m}.`:"";p.append(`${H}x`,"0"),p.append(`${H}y`,"0")}else m&&p.append(m,j)}}else{if(fs(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=$r,u=null,d=es,h=i}return p&&d==="text/plain"&&(h=p,p=void 0),{action:u,method:c.toLowerCase(),encType:d,formData:p,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function fu(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function Yb(i,s,c){let u=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return u.pathname==="/"?u.pathname=`_root.${c}`:s&&Qa(u.pathname,s)==="/"?u.pathname=`${s.replace(/\/$/,"")}/_root.${c}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${c}`,u}async function Gb(i,s){if(i.id in s)return s[i.id];try{let c=await import(i.module);return s[i.id]=c,c}catch(c){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Kb(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Zb(i,s,c){let u=await Promise.all(i.map(async d=>{let p=s.routes[d.route.id];if(p){let h=await Gb(p,c);return h.links?h.links():[]}return[]}));return Pb(u.flat(1).filter(Kb).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Dh(i,s,c,u,d,p){let h=(b,m)=>c[m]?b.route.id!==c[m].route.id:!0,x=(b,m)=>c[m].pathname!==b.pathname||c[m].route.path?.endsWith("*")&&c[m].params["*"]!==b.params["*"];return p==="assets"?s.filter((b,m)=>h(b,m)||x(b,m)):p==="data"?s.filter((b,m)=>{let y=u.routes[b.route.id];if(!y||!y.hasLoader)return!1;if(h(b,m)||x(b,m))return!0;if(b.route.shouldRevalidate){let j=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function Xb(i,s,{includeHydrateFallback:c}={}){return Fb(i.map(u=>{let d=s.routes[u.route.id];if(!d)return[];let p=[d.module];return d.clientActionModule&&(p=p.concat(d.clientActionModule)),d.clientLoaderModule&&(p=p.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(p=p.concat(d.hydrateFallbackModule)),d.imports&&(p=p.concat(d.imports)),p}).flat(1))}function Fb(i){return[...new Set(i)]}function Jb(i){let s={},c=Object.keys(i).sort();for(let u of c)s[u]=i[u];return s}function Pb(i,s){let c=new Set;return new Set(s),i.reduce((u,d)=>{let p=JSON.stringify(Jb(d));return c.has(p)||(c.add(p),u.push({key:p,link:d})),u},[])}function xm(){let i=S.useContext(Tl);return fu(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Ib(){let i=S.useContext(ds);return fu(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var pu=S.createContext(void 0);pu.displayName="FrameworkContext";function bm(){let i=S.useContext(pu);return fu(i,"You must render this element inside a <HydratedRouter> element"),i}function Wb(i,s){let c=S.useContext(pu),[u,d]=S.useState(!1),[p,h]=S.useState(!1),{onFocus:x,onBlur:b,onMouseEnter:m,onMouseLeave:y,onTouchStart:j}=s,H=S.useRef(null);S.useEffect(()=>{if(i==="render"&&h(!0),i==="viewport"){let T=Y=>{Y.forEach(J=>{h(J.isIntersecting)})},U=new IntersectionObserver(T,{threshold:.5});return H.current&&U.observe(H.current),()=>{U.disconnect()}}},[i]),S.useEffect(()=>{if(u){let T=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(T)}}},[u]);let z=()=>{d(!0)},w=()=>{d(!1),h(!1)};return c?i!=="intent"?[p,H,{}]:[p,H,{onFocus:Oi(x,z),onBlur:Oi(b,w),onMouseEnter:Oi(m,z),onMouseLeave:Oi(y,w),onTouchStart:Oi(j,z)}]:[!1,H,{}]}function Oi(i,s){return c=>{i&&i(c),c.defaultPrevented||s(c)}}function _b({page:i,...s}){let{router:c}=xm(),u=S.useMemo(()=>sm(c.routes,i,c.basename),[c.routes,i,c.basename]);return u?S.createElement(e1,{page:i,matches:u,...s}):null}function $b(i){let{manifest:s,routeModules:c}=bm(),[u,d]=S.useState([]);return S.useEffect(()=>{let p=!1;return Zb(i,s,c).then(h=>{p||d(h)}),()=>{p=!0}},[i,s,c]),u}function e1({page:i,matches:s,...c}){let u=pa(),{manifest:d,routeModules:p}=bm(),{basename:h}=xm(),{loaderData:x,matches:b}=Ib(),m=S.useMemo(()=>Dh(i,s,b,d,u,"data"),[i,s,b,d,u]),y=S.useMemo(()=>Dh(i,s,b,d,u,"assets"),[i,s,b,d,u]),j=S.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let w=new Set,T=!1;if(s.forEach(Y=>{let J=d.routes[Y.route.id];!J||!J.hasLoader||(!m.some(ee=>ee.route.id===Y.route.id)&&Y.route.id in x&&p[Y.route.id]?.shouldRevalidate||J.hasClientLoader?T=!0:w.add(Y.route.id))}),w.size===0)return[];let U=Yb(i,h,"data");return T&&w.size>0&&U.searchParams.set("_routes",s.filter(Y=>w.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[U.pathname+U.search]},[h,x,u,d,m,s,i,p]),H=S.useMemo(()=>Xb(y,d),[y,d]),z=$b(y);return S.createElement(S.Fragment,null,j.map(w=>S.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...c})),H.map(w=>S.createElement("link",{key:w,rel:"modulepreload",href:w,...c})),z.map(({key:w,link:T})=>S.createElement("link",{key:w,nonce:c.nonce,...T})))}function t1(...i){return s=>{i.forEach(c=>{typeof c=="function"?c(s):c!=null&&(c.current=s)})}}var ym=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ym&&(window.__reactRouterVersion="7.9.4")}catch{}function a1({basename:i,children:s,window:c}){let u=S.useRef();u.current==null&&(u.current=Qx({window:c,v5Compat:!0}));let d=u.current,[p,h]=S.useState({action:d.action,location:d.location}),x=S.useCallback(b=>{S.startTransition(()=>h(b))},[h]);return S.useLayoutEffect(()=>d.listen(x),[d,x]),S.createElement(Rb,{basename:i,children:s,location:p.location,navigationType:p.action,navigator:d})}var vm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,be=S.forwardRef(function({onClick:s,discover:c="render",prefetch:u="none",relative:d,reloadDocument:p,replace:h,state:x,target:b,to:m,preventScrollReset:y,viewTransition:j,...H},z){let{basename:w}=S.useContext(fa),T=typeof m=="string"&&vm.test(m),U,Y=!1;if(typeof m=="string"&&T&&(U=m,ym))try{let de=new URL(window.location.href),ke=m.startsWith("//")?new URL(de.protocol+m):new URL(m),Te=Qa(ke.pathname,w);ke.origin===de.origin&&Te!=null?m=Te+ke.search+ke.hash:Y=!0}catch{da(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=hb(m,{relative:d}),[ee,me,re]=Wb(u,H),pe=i1(m,{replace:h,state:x,target:b,preventScrollReset:y,relative:d,viewTransition:j});function ie(de){s&&s(de),de.defaultPrevented||pe(de)}let se=S.createElement("a",{...H,...re,href:U||J,onClick:Y||p?s:ie,ref:t1(z,me),target:b,"data-discover":!T&&c==="render"?"true":void 0});return ee&&!T?S.createElement(S.Fragment,null,se,S.createElement(_b,{page:J})):se});be.displayName="Link";var is=S.forwardRef(function({"aria-current":s="page",caseSensitive:c=!1,className:u="",end:d=!1,style:p,to:h,viewTransition:x,children:b,...m},y){let j=Ui(h,{relative:m.relative}),H=pa(),z=S.useContext(ds),{navigator:w,basename:T}=S.useContext(fa),U=z!=null&&u1(j)&&x===!0,Y=w.encodeLocation?w.encodeLocation(j).pathname:j.pathname,J=H.pathname,ee=z&&z.navigation&&z.navigation.location?z.navigation.location.pathname:null;c||(J=J.toLowerCase(),ee=ee?ee.toLowerCase():null,Y=Y.toLowerCase()),ee&&T&&(ee=Qa(ee,T)||ee);const me=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let re=J===Y||!d&&J.startsWith(Y)&&J.charAt(me)==="/",pe=ee!=null&&(ee===Y||!d&&ee.startsWith(Y)&&ee.charAt(Y.length)==="/"),ie={isActive:re,isPending:pe,isTransitioning:U},se=re?s:void 0,de;typeof u=="function"?de=u(ie):de=[u,re?"active":null,pe?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let ke=typeof p=="function"?p(ie):p;return S.createElement(be,{...m,"aria-current":se,className:de,ref:y,style:ke,to:h,viewTransition:x},typeof b=="function"?b(ie):b)});is.displayName="NavLink";var n1=S.forwardRef(({discover:i="render",fetcherKey:s,navigate:c,reloadDocument:u,replace:d,state:p,method:h=$r,action:x,onSubmit:b,relative:m,preventScrollReset:y,viewTransition:j,...H},z)=>{let w=o1(),T=c1(x,{relative:m}),U=h.toLowerCase()==="get"?"get":"post",Y=typeof x=="string"&&vm.test(x),J=ee=>{if(b&&b(ee),ee.defaultPrevented)return;ee.preventDefault();let me=ee.nativeEvent.submitter,re=me?.getAttribute("formmethod")||h;w(me||ee.currentTarget,{fetcherKey:s,method:re,navigate:c,replace:d,state:p,relative:m,preventScrollReset:y,viewTransition:j})};return S.createElement("form",{ref:z,method:U,action:T,onSubmit:u?b:J,...H,"data-discover":!Y&&i==="render"?"true":void 0})});n1.displayName="Form";function l1(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Am(i){let s=S.useContext(Tl);return it(s,l1(i)),s}function i1(i,{target:s,replace:c,state:u,preventScrollReset:d,relative:p,viewTransition:h}={}){let x=ra(),b=pa(),m=Ui(i,{relative:p});return S.useCallback(y=>{if(Hb(y,s)){y.preventDefault();let j=c!==void 0?c:Bi(b)===Bi(m);x(i,{replace:j,state:u,preventScrollReset:d,relative:p,viewTransition:h})}},[b,x,m,c,u,s,i,d,p,h])}var r1=0,s1=()=>`__${String(++r1)}__`;function o1(){let{router:i}=Am("useSubmit"),{basename:s}=S.useContext(fa),c=Cb();return S.useCallback(async(u,d={})=>{let{action:p,method:h,encType:x,formData:b,body:m}=Qb(u,s);if(d.navigate===!1){let y=d.fetcherKey||s1();await i.fetch(y,c,d.action||p,{preventScrollReset:d.preventScrollReset,formData:b,body:m,formMethod:d.method||h,formEncType:d.encType||x,flushSync:d.flushSync})}else await i.navigate(d.action||p,{preventScrollReset:d.preventScrollReset,formData:b,body:m,formMethod:d.method||h,formEncType:d.encType||x,replace:d.replace,state:d.state,fromRouteId:c,flushSync:d.flushSync,viewTransition:d.viewTransition})},[i,s,c])}function c1(i,{relative:s}={}){let{basename:c}=S.useContext(fa),u=S.useContext(ia);it(u,"useFormAction must be used inside a RouteContext");let[d]=u.matches.slice(-1),p={...Ui(i||".",{relative:s})},h=pa();if(i==null){p.search=h.search;let x=new URLSearchParams(p.search),b=x.getAll("index");if(b.some(y=>y==="")){x.delete("index"),b.filter(j=>j).forEach(j=>x.append("index",j));let y=x.toString();p.search=y?`?${y}`:""}}return(!i||i===".")&&d.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(p.pathname=p.pathname==="/"?c:Va([c,p.pathname])),Bi(p)}function u1(i,{relative:s}={}){let c=S.useContext(dm);it(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Am("useViewTransitionState"),d=Ui(i,{relative:s});if(!c.isTransitioning)return!1;let p=Qa(c.currentLocation.pathname,u)||c.currentLocation.pathname,h=Qa(c.nextLocation.pathname,u)||c.nextLocation.pathname;return ls(d.pathname,h)!=null||ls(d.pathname,p)!=null}function ps(){const[i,s]=S.useState(!1),[c,u]=S.useState(!1),[d,p]=S.useState(!1),h=pa(),x=S.useRef(null),b=S.useRef(null);return S.useEffect(()=>{const m=()=>p(window.innerWidth<=800);return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),S.useEffect(()=>{s(!1),u(!1)},[h]),S.useEffect(()=>{const m=y=>{x.current&&!x.current.contains(y.target)&&s(!1),b.current&&!b.current.contains(y.target)&&u(!1)};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[]),l.jsxs("header",{className:"agri-header",children:[l.jsxs("nav",{className:"agri-nav",ref:x,children:[l.jsxs(be,{to:"/",className:"agri-logo",children:[l.jsx("img",{src:"https://www.shutterstock.com/image-vector/agri-tech-leaf-logo-design-600nw-2388734381.jpg",alt:"logo"}),"AgriTechPro"]}),l.jsx("div",{className:"agri-center",children:l.jsxs("div",{className:"agri-search",children:[l.jsx("input",{type:"text",placeholder:"Search Seeds, Fertilizers, Tools..."}),l.jsx("button",{children:"Search"})]})}),l.jsxs("div",{className:`agri-links ${i?"open":""}`,children:[l.jsxs("div",{className:"agri-more-area",ref:b,onMouseEnter:()=>!d&&u(!0),onMouseLeave:()=>!d&&u(!1),children:[l.jsxs("button",{className:"agri-more-btn",onClick:d?()=>u(!c):void 0,children:["Categories ",l.jsx("span",{children:c?"▲":"▼"})]}),c&&l.jsxs("div",{className:"agri-dropdown open",children:[l.jsx(be,{to:"/products/seeds",children:"Seeds"}),l.jsx(be,{to:"/products/fertilizers",children:"Fertilizers"}),l.jsx(be,{to:"/products/pesticides",children:"Pesticides"}),l.jsx(be,{to:"/products/tools",children:"Tools"}),l.jsx(be,{to:"/products/equipment",children:"Equipment"})]})]}),l.jsx(be,{to:"/services",children:"Services"}),l.jsx(be,{to:"/about",children:"About Us"}),l.jsx(be,{to:"/contact",children:"Contact"}),l.jsx(be,{to:"/login",className:"agri-login-btn",children:"Login"})]}),l.jsxs("button",{className:"agri-hamburger",onClick:()=>s(!i),children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]})]}),l.jsx("style",{children:`
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
      `})]})}var jm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},kh=Mn.createContext&&Mn.createContext(jm),d1=["attr","size","title"];function f1(i,s){if(i==null)return{};var c=p1(i,s),u,d;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(i);for(d=0;d<p.length;d++)u=p[d],!(s.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(i,u)&&(c[u]=i[u])}return c}function p1(i,s){if(i==null)return{};var c={};for(var u in i)if(Object.prototype.hasOwnProperty.call(i,u)){if(s.indexOf(u)>=0)continue;c[u]=i[u]}return c}function rs(){return rs=Object.assign?Object.assign.bind():function(i){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(i[u]=c[u])}return i},rs.apply(this,arguments)}function Lh(i,s){var c=Object.keys(i);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);s&&(u=u.filter(function(d){return Object.getOwnPropertyDescriptor(i,d).enumerable})),c.push.apply(c,u)}return c}function ss(i){for(var s=1;s<arguments.length;s++){var c=arguments[s]!=null?arguments[s]:{};s%2?Lh(Object(c),!0).forEach(function(u){h1(i,u,c[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(c)):Lh(Object(c)).forEach(function(u){Object.defineProperty(i,u,Object.getOwnPropertyDescriptor(c,u))})}return i}function h1(i,s,c){return s=m1(s),s in i?Object.defineProperty(i,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[s]=c,i}function m1(i){var s=g1(i,"string");return typeof s=="symbol"?s:s+""}function g1(i,s){if(typeof i!="object"||!i)return i;var c=i[Symbol.toPrimitive];if(c!==void 0){var u=c.call(i,s);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(i)}function wm(i){return i&&i.map((s,c)=>Mn.createElement(s.tag,ss({key:c},s.attr),wm(s.child)))}function hs(i){return s=>Mn.createElement(x1,rs({attr:ss({},i.attr)},s),wm(i.child))}function x1(i){var s=c=>{var{attr:u,size:d,title:p}=i,h=f1(i,d1),x=d||c.size||"1em",b;return c.className&&(b=c.className),i.className&&(b=(b?b+" ":"")+i.className),Mn.createElement("svg",rs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,u,h,{className:b,style:ss(ss({color:i.color||c.color},c.style),i.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),p&&Mn.createElement("title",null,p),i.children)};return kh!==void 0?Mn.createElement(kh.Consumer,null,c=>s(c)):s(jm)}function hu(i){return hs({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(i)}function mu(i){return hs({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(i)}function gu(i){return hs({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(i)}function xu(i){return hs({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(i)}function Sm(i,s){return function(){return i.apply(s,arguments)}}const{toString:b1}=Object.prototype,{getPrototypeOf:bu}=Object,{iterator:ms,toStringTag:Em}=Symbol,gs=(i=>s=>{const c=b1.call(s);return i[c]||(i[c]=c.slice(8,-1).toLowerCase())})(Object.create(null)),ha=i=>(i=i.toLowerCase(),s=>gs(s)===i),xs=i=>s=>typeof s===i,{isArray:Rl}=Array,Nl=xs("undefined");function Di(i){return i!==null&&!Nl(i)&&i.constructor!==null&&!Nl(i.constructor)&&qt(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Nm=ha("ArrayBuffer");function y1(i){let s;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?s=ArrayBuffer.isView(i):s=i&&i.buffer&&Nm(i.buffer),s}const v1=xs("string"),qt=xs("function"),zm=xs("number"),ki=i=>i!==null&&typeof i=="object",A1=i=>i===!0||i===!1,ts=i=>{if(gs(i)!=="object")return!1;const s=bu(i);return(s===null||s===Object.prototype||Object.getPrototypeOf(s)===null)&&!(Em in i)&&!(ms in i)},j1=i=>{if(!ki(i)||Di(i))return!1;try{return Object.keys(i).length===0&&Object.getPrototypeOf(i)===Object.prototype}catch{return!1}},w1=ha("Date"),S1=ha("File"),E1=ha("Blob"),N1=ha("FileList"),z1=i=>ki(i)&&qt(i.pipe),C1=i=>{let s;return i&&(typeof FormData=="function"&&i instanceof FormData||qt(i.append)&&((s=gs(i))==="formdata"||s==="object"&&qt(i.toString)&&i.toString()==="[object FormData]"))},O1=ha("URLSearchParams"),[T1,B1,R1,M1]=["ReadableStream","Request","Response","Headers"].map(ha),U1=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Li(i,s,{allOwnKeys:c=!1}={}){if(i===null||typeof i>"u")return;let u,d;if(typeof i!="object"&&(i=[i]),Rl(i))for(u=0,d=i.length;u<d;u++)s.call(null,i[u],u,i);else{if(Di(i))return;const p=c?Object.getOwnPropertyNames(i):Object.keys(i),h=p.length;let x;for(u=0;u<h;u++)x=p[u],s.call(null,i[x],x,i)}}function Cm(i,s){if(Di(i))return null;s=s.toLowerCase();const c=Object.keys(i);let u=c.length,d;for(;u-- >0;)if(d=c[u],s===d.toLowerCase())return d;return null}const Rn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Om=i=>!Nl(i)&&i!==Rn;function nu(){const{caseless:i,skipUndefined:s}=Om(this)&&this||{},c={},u=(d,p)=>{const h=i&&Cm(c,p)||p;ts(c[h])&&ts(d)?c[h]=nu(c[h],d):ts(d)?c[h]=nu({},d):Rl(d)?c[h]=d.slice():(!s||!Nl(d))&&(c[h]=d)};for(let d=0,p=arguments.length;d<p;d++)arguments[d]&&Li(arguments[d],u);return c}const D1=(i,s,c,{allOwnKeys:u}={})=>(Li(s,(d,p)=>{c&&qt(d)?i[p]=Sm(d,c):i[p]=d},{allOwnKeys:u}),i),k1=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),L1=(i,s,c,u)=>{i.prototype=Object.create(s.prototype,u),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:s.prototype}),c&&Object.assign(i.prototype,c)},H1=(i,s,c,u)=>{let d,p,h;const x={};if(s=s||{},i==null)return s;do{for(d=Object.getOwnPropertyNames(i),p=d.length;p-- >0;)h=d[p],(!u||u(h,i,s))&&!x[h]&&(s[h]=i[h],x[h]=!0);i=c!==!1&&bu(i)}while(i&&(!c||c(i,s))&&i!==Object.prototype);return s},q1=(i,s,c)=>{i=String(i),(c===void 0||c>i.length)&&(c=i.length),c-=s.length;const u=i.indexOf(s,c);return u!==-1&&u===c},V1=i=>{if(!i)return null;if(Rl(i))return i;let s=i.length;if(!zm(s))return null;const c=new Array(s);for(;s-- >0;)c[s]=i[s];return c},Q1=(i=>s=>i&&s instanceof i)(typeof Uint8Array<"u"&&bu(Uint8Array)),Y1=(i,s)=>{const u=(i&&i[ms]).call(i);let d;for(;(d=u.next())&&!d.done;){const p=d.value;s.call(i,p[0],p[1])}},G1=(i,s)=>{let c;const u=[];for(;(c=i.exec(s))!==null;)u.push(c);return u},K1=ha("HTMLFormElement"),Z1=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(c,u,d){return u.toUpperCase()+d}),Hh=(({hasOwnProperty:i})=>(s,c)=>i.call(s,c))(Object.prototype),X1=ha("RegExp"),Tm=(i,s)=>{const c=Object.getOwnPropertyDescriptors(i),u={};Li(c,(d,p)=>{let h;(h=s(d,p,i))!==!1&&(u[p]=h||d)}),Object.defineProperties(i,u)},F1=i=>{Tm(i,(s,c)=>{if(qt(i)&&["arguments","caller","callee"].indexOf(c)!==-1)return!1;const u=i[c];if(qt(u)){if(s.enumerable=!1,"writable"in s){s.writable=!1;return}s.set||(s.set=()=>{throw Error("Can not rewrite read-only method '"+c+"'")})}})},J1=(i,s)=>{const c={},u=d=>{d.forEach(p=>{c[p]=!0})};return Rl(i)?u(i):u(String(i).split(s)),c},P1=()=>{},I1=(i,s)=>i!=null&&Number.isFinite(i=+i)?i:s;function W1(i){return!!(i&&qt(i.append)&&i[Em]==="FormData"&&i[ms])}const _1=i=>{const s=new Array(10),c=(u,d)=>{if(ki(u)){if(s.indexOf(u)>=0)return;if(Di(u))return u;if(!("toJSON"in u)){s[d]=u;const p=Rl(u)?[]:{};return Li(u,(h,x)=>{const b=c(h,d+1);!Nl(b)&&(p[x]=b)}),s[d]=void 0,p}}return u};return c(i,0)},$1=ha("AsyncFunction"),ey=i=>i&&(ki(i)||qt(i))&&qt(i.then)&&qt(i.catch),Bm=((i,s)=>i?setImmediate:s?((c,u)=>(Rn.addEventListener("message",({source:d,data:p})=>{d===Rn&&p===c&&u.length&&u.shift()()},!1),d=>{u.push(d),Rn.postMessage(c,"*")}))(`axios@${Math.random()}`,[]):c=>setTimeout(c))(typeof setImmediate=="function",qt(Rn.postMessage)),ty=typeof queueMicrotask<"u"?queueMicrotask.bind(Rn):typeof process<"u"&&process.nextTick||Bm,ay=i=>i!=null&&qt(i[ms]),D={isArray:Rl,isArrayBuffer:Nm,isBuffer:Di,isFormData:C1,isArrayBufferView:y1,isString:v1,isNumber:zm,isBoolean:A1,isObject:ki,isPlainObject:ts,isEmptyObject:j1,isReadableStream:T1,isRequest:B1,isResponse:R1,isHeaders:M1,isUndefined:Nl,isDate:w1,isFile:S1,isBlob:E1,isRegExp:X1,isFunction:qt,isStream:z1,isURLSearchParams:O1,isTypedArray:Q1,isFileList:N1,forEach:Li,merge:nu,extend:D1,trim:U1,stripBOM:k1,inherits:L1,toFlatObject:H1,kindOf:gs,kindOfTest:ha,endsWith:q1,toArray:V1,forEachEntry:Y1,matchAll:G1,isHTMLForm:K1,hasOwnProperty:Hh,hasOwnProp:Hh,reduceDescriptors:Tm,freezeMethods:F1,toObjectSet:J1,toCamelCase:Z1,noop:P1,toFiniteNumber:I1,findKey:Cm,global:Rn,isContextDefined:Om,isSpecCompliantForm:W1,toJSONObject:_1,isAsyncFn:$1,isThenable:ey,setImmediate:Bm,asap:ty,isIterable:ay};function Ae(i,s,c,u,d){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",s&&(this.code=s),c&&(this.config=c),u&&(this.request=u),d&&(this.response=d,this.status=d.status?d.status:null)}D.inherits(Ae,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.status}}});const Rm=Ae.prototype,Mm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{Mm[i]={value:i}});Object.defineProperties(Ae,Mm);Object.defineProperty(Rm,"isAxiosError",{value:!0});Ae.from=(i,s,c,u,d,p)=>{const h=Object.create(Rm);D.toFlatObject(i,h,function(y){return y!==Error.prototype},m=>m!=="isAxiosError");const x=i&&i.message?i.message:"Error",b=s==null&&i?i.code:s;return Ae.call(h,x,b,c,u,d),i&&h.cause==null&&Object.defineProperty(h,"cause",{value:i,configurable:!0}),h.name=i&&i.name||"Error",p&&Object.assign(h,p),h};const ny=null;function lu(i){return D.isPlainObject(i)||D.isArray(i)}function Um(i){return D.endsWith(i,"[]")?i.slice(0,-2):i}function qh(i,s,c){return i?i.concat(s).map(function(d,p){return d=Um(d),!c&&p?"["+d+"]":d}).join(c?".":""):s}function ly(i){return D.isArray(i)&&!i.some(lu)}const iy=D.toFlatObject(D,{},null,function(s){return/^is[A-Z]/.test(s)});function bs(i,s,c){if(!D.isObject(i))throw new TypeError("target must be an object");s=s||new FormData,c=D.toFlatObject(c,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,U){return!D.isUndefined(U[T])});const u=c.metaTokens,d=c.visitor||y,p=c.dots,h=c.indexes,b=(c.Blob||typeof Blob<"u"&&Blob)&&D.isSpecCompliantForm(s);if(!D.isFunction(d))throw new TypeError("visitor must be a function");function m(w){if(w===null)return"";if(D.isDate(w))return w.toISOString();if(D.isBoolean(w))return w.toString();if(!b&&D.isBlob(w))throw new Ae("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(w)||D.isTypedArray(w)?b&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function y(w,T,U){let Y=w;if(w&&!U&&typeof w=="object"){if(D.endsWith(T,"{}"))T=u?T:T.slice(0,-2),w=JSON.stringify(w);else if(D.isArray(w)&&ly(w)||(D.isFileList(w)||D.endsWith(T,"[]"))&&(Y=D.toArray(w)))return T=Um(T),Y.forEach(function(ee,me){!(D.isUndefined(ee)||ee===null)&&s.append(h===!0?qh([T],me,p):h===null?T:T+"[]",m(ee))}),!1}return lu(w)?!0:(s.append(qh(U,T,p),m(w)),!1)}const j=[],H=Object.assign(iy,{defaultVisitor:y,convertValue:m,isVisitable:lu});function z(w,T){if(!D.isUndefined(w)){if(j.indexOf(w)!==-1)throw Error("Circular reference detected in "+T.join("."));j.push(w),D.forEach(w,function(Y,J){(!(D.isUndefined(Y)||Y===null)&&d.call(s,Y,D.isString(J)?J.trim():J,T,H))===!0&&z(Y,T?T.concat(J):[J])}),j.pop()}}if(!D.isObject(i))throw new TypeError("data must be an object");return z(i),s}function Vh(i){const s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(u){return s[u]})}function yu(i,s){this._pairs=[],i&&bs(i,this,s)}const Dm=yu.prototype;Dm.append=function(s,c){this._pairs.push([s,c])};Dm.toString=function(s){const c=s?function(u){return s.call(this,u,Vh)}:Vh;return this._pairs.map(function(d){return c(d[0])+"="+c(d[1])},"").join("&")};function ry(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function km(i,s,c){if(!s)return i;const u=c&&c.encode||ry;D.isFunction(c)&&(c={serialize:c});const d=c&&c.serialize;let p;if(d?p=d(s,c):p=D.isURLSearchParams(s)?s.toString():new yu(s,c).toString(u),p){const h=i.indexOf("#");h!==-1&&(i=i.slice(0,h)),i+=(i.indexOf("?")===-1?"?":"&")+p}return i}class Qh{constructor(){this.handlers=[]}use(s,c,u){return this.handlers.push({fulfilled:s,rejected:c,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1}eject(s){this.handlers[s]&&(this.handlers[s]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(s){D.forEach(this.handlers,function(u){u!==null&&s(u)})}}const Lm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},sy=typeof URLSearchParams<"u"?URLSearchParams:yu,oy=typeof FormData<"u"?FormData:null,cy=typeof Blob<"u"?Blob:null,uy={isBrowser:!0,classes:{URLSearchParams:sy,FormData:oy,Blob:cy},protocols:["http","https","file","blob","url","data"]},vu=typeof window<"u"&&typeof document<"u",iu=typeof navigator=="object"&&navigator||void 0,dy=vu&&(!iu||["ReactNative","NativeScript","NS"].indexOf(iu.product)<0),fy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",py=vu&&window.location.href||"http://localhost",hy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:vu,hasStandardBrowserEnv:dy,hasStandardBrowserWebWorkerEnv:fy,navigator:iu,origin:py},Symbol.toStringTag,{value:"Module"})),Ct={...hy,...uy};function my(i,s){return bs(i,new Ct.classes.URLSearchParams,{visitor:function(c,u,d,p){return Ct.isNode&&D.isBuffer(c)?(this.append(u,c.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)},...s})}function gy(i){return D.matchAll(/\w+|\[(\w*)]/g,i).map(s=>s[0]==="[]"?"":s[1]||s[0])}function xy(i){const s={},c=Object.keys(i);let u;const d=c.length;let p;for(u=0;u<d;u++)p=c[u],s[p]=i[p];return s}function Hm(i){function s(c,u,d,p){let h=c[p++];if(h==="__proto__")return!0;const x=Number.isFinite(+h),b=p>=c.length;return h=!h&&D.isArray(d)?d.length:h,b?(D.hasOwnProp(d,h)?d[h]=[d[h],u]:d[h]=u,!x):((!d[h]||!D.isObject(d[h]))&&(d[h]=[]),s(c,u,d[h],p)&&D.isArray(d[h])&&(d[h]=xy(d[h])),!x)}if(D.isFormData(i)&&D.isFunction(i.entries)){const c={};return D.forEachEntry(i,(u,d)=>{s(gy(u),d,c,0)}),c}return null}function by(i,s,c){if(D.isString(i))try{return(s||JSON.parse)(i),D.trim(i)}catch(u){if(u.name!=="SyntaxError")throw u}return(c||JSON.stringify)(i)}const Hi={transitional:Lm,adapter:["xhr","http","fetch"],transformRequest:[function(s,c){const u=c.getContentType()||"",d=u.indexOf("application/json")>-1,p=D.isObject(s);if(p&&D.isHTMLForm(s)&&(s=new FormData(s)),D.isFormData(s))return d?JSON.stringify(Hm(s)):s;if(D.isArrayBuffer(s)||D.isBuffer(s)||D.isStream(s)||D.isFile(s)||D.isBlob(s)||D.isReadableStream(s))return s;if(D.isArrayBufferView(s))return s.buffer;if(D.isURLSearchParams(s))return c.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),s.toString();let x;if(p){if(u.indexOf("application/x-www-form-urlencoded")>-1)return my(s,this.formSerializer).toString();if((x=D.isFileList(s))||u.indexOf("multipart/form-data")>-1){const b=this.env&&this.env.FormData;return bs(x?{"files[]":s}:s,b&&new b,this.formSerializer)}}return p||d?(c.setContentType("application/json",!1),by(s)):s}],transformResponse:[function(s){const c=this.transitional||Hi.transitional,u=c&&c.forcedJSONParsing,d=this.responseType==="json";if(D.isResponse(s)||D.isReadableStream(s))return s;if(s&&D.isString(s)&&(u&&!this.responseType||d)){const h=!(c&&c.silentJSONParsing)&&d;try{return JSON.parse(s,this.parseReviver)}catch(x){if(h)throw x.name==="SyntaxError"?Ae.from(x,Ae.ERR_BAD_RESPONSE,this,null,this.response):x}}return s}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ct.classes.FormData,Blob:Ct.classes.Blob},validateStatus:function(s){return s>=200&&s<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],i=>{Hi.headers[i]={}});const yy=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vy=i=>{const s={};let c,u,d;return i&&i.split(`
`).forEach(function(h){d=h.indexOf(":"),c=h.substring(0,d).trim().toLowerCase(),u=h.substring(d+1).trim(),!(!c||s[c]&&yy[c])&&(c==="set-cookie"?s[c]?s[c].push(u):s[c]=[u]:s[c]=s[c]?s[c]+", "+u:u)}),s},Yh=Symbol("internals");function Ti(i){return i&&String(i).trim().toLowerCase()}function as(i){return i===!1||i==null?i:D.isArray(i)?i.map(as):String(i)}function Ay(i){const s=Object.create(null),c=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let u;for(;u=c.exec(i);)s[u[1]]=u[2];return s}const jy=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Yc(i,s,c,u,d){if(D.isFunction(u))return u.call(this,s,c);if(d&&(s=c),!!D.isString(s)){if(D.isString(u))return s.indexOf(u)!==-1;if(D.isRegExp(u))return u.test(s)}}function wy(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(s,c,u)=>c.toUpperCase()+u)}function Sy(i,s){const c=D.toCamelCase(" "+s);["get","set","has"].forEach(u=>{Object.defineProperty(i,u+c,{value:function(d,p,h){return this[u].call(this,s,d,p,h)},configurable:!0})})}let Vt=class{constructor(s){s&&this.set(s)}set(s,c,u){const d=this;function p(x,b,m){const y=Ti(b);if(!y)throw new Error("header name must be a non-empty string");const j=D.findKey(d,y);(!j||d[j]===void 0||m===!0||m===void 0&&d[j]!==!1)&&(d[j||b]=as(x))}const h=(x,b)=>D.forEach(x,(m,y)=>p(m,y,b));if(D.isPlainObject(s)||s instanceof this.constructor)h(s,c);else if(D.isString(s)&&(s=s.trim())&&!jy(s))h(vy(s),c);else if(D.isObject(s)&&D.isIterable(s)){let x={},b,m;for(const y of s){if(!D.isArray(y))throw TypeError("Object iterator must return a key-value pair");x[m=y[0]]=(b=x[m])?D.isArray(b)?[...b,y[1]]:[b,y[1]]:y[1]}h(x,c)}else s!=null&&p(c,s,u);return this}get(s,c){if(s=Ti(s),s){const u=D.findKey(this,s);if(u){const d=this[u];if(!c)return d;if(c===!0)return Ay(d);if(D.isFunction(c))return c.call(this,d,u);if(D.isRegExp(c))return c.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(s,c){if(s=Ti(s),s){const u=D.findKey(this,s);return!!(u&&this[u]!==void 0&&(!c||Yc(this,this[u],u,c)))}return!1}delete(s,c){const u=this;let d=!1;function p(h){if(h=Ti(h),h){const x=D.findKey(u,h);x&&(!c||Yc(u,u[x],x,c))&&(delete u[x],d=!0)}}return D.isArray(s)?s.forEach(p):p(s),d}clear(s){const c=Object.keys(this);let u=c.length,d=!1;for(;u--;){const p=c[u];(!s||Yc(this,this[p],p,s,!0))&&(delete this[p],d=!0)}return d}normalize(s){const c=this,u={};return D.forEach(this,(d,p)=>{const h=D.findKey(u,p);if(h){c[h]=as(d),delete c[p];return}const x=s?wy(p):String(p).trim();x!==p&&delete c[p],c[x]=as(d),u[x]=!0}),this}concat(...s){return this.constructor.concat(this,...s)}toJSON(s){const c=Object.create(null);return D.forEach(this,(u,d)=>{u!=null&&u!==!1&&(c[d]=s&&D.isArray(u)?u.join(", "):u)}),c}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([s,c])=>s+": "+c).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(s){return s instanceof this?s:new this(s)}static concat(s,...c){const u=new this(s);return c.forEach(d=>u.set(d)),u}static accessor(s){const u=(this[Yh]=this[Yh]={accessors:{}}).accessors,d=this.prototype;function p(h){const x=Ti(h);u[x]||(Sy(d,h),u[x]=!0)}return D.isArray(s)?s.forEach(p):p(s),this}};Vt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(Vt.prototype,({value:i},s)=>{let c=s[0].toUpperCase()+s.slice(1);return{get:()=>i,set(u){this[c]=u}}});D.freezeMethods(Vt);function Gc(i,s){const c=this||Hi,u=s||c,d=Vt.from(u.headers);let p=u.data;return D.forEach(i,function(x){p=x.call(c,p,d.normalize(),s?s.status:void 0)}),d.normalize(),p}function qm(i){return!!(i&&i.__CANCEL__)}function Ml(i,s,c){Ae.call(this,i??"canceled",Ae.ERR_CANCELED,s,c),this.name="CanceledError"}D.inherits(Ml,Ae,{__CANCEL__:!0});function Vm(i,s,c){const u=c.config.validateStatus;!c.status||!u||u(c.status)?i(c):s(new Ae("Request failed with status code "+c.status,[Ae.ERR_BAD_REQUEST,Ae.ERR_BAD_RESPONSE][Math.floor(c.status/100)-4],c.config,c.request,c))}function Ey(i){const s=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return s&&s[1]||""}function Ny(i,s){i=i||10;const c=new Array(i),u=new Array(i);let d=0,p=0,h;return s=s!==void 0?s:1e3,function(b){const m=Date.now(),y=u[p];h||(h=m),c[d]=b,u[d]=m;let j=p,H=0;for(;j!==d;)H+=c[j++],j=j%i;if(d=(d+1)%i,d===p&&(p=(p+1)%i),m-h<s)return;const z=y&&m-y;return z?Math.round(H*1e3/z):void 0}}function zy(i,s){let c=0,u=1e3/s,d,p;const h=(m,y=Date.now())=>{c=y,d=null,p&&(clearTimeout(p),p=null),i(...m)};return[(...m)=>{const y=Date.now(),j=y-c;j>=u?h(m,y):(d=m,p||(p=setTimeout(()=>{p=null,h(d)},u-j)))},()=>d&&h(d)]}const os=(i,s,c=3)=>{let u=0;const d=Ny(50,250);return zy(p=>{const h=p.loaded,x=p.lengthComputable?p.total:void 0,b=h-u,m=d(b),y=h<=x;u=h;const j={loaded:h,total:x,progress:x?h/x:void 0,bytes:b,rate:m||void 0,estimated:m&&x&&y?(x-h)/m:void 0,event:p,lengthComputable:x!=null,[s?"download":"upload"]:!0};i(j)},c)},Gh=(i,s)=>{const c=i!=null;return[u=>s[0]({lengthComputable:c,total:i,loaded:u}),s[1]]},Kh=i=>(...s)=>D.asap(()=>i(...s)),Cy=Ct.hasStandardBrowserEnv?((i,s)=>c=>(c=new URL(c,Ct.origin),i.protocol===c.protocol&&i.host===c.host&&(s||i.port===c.port)))(new URL(Ct.origin),Ct.navigator&&/(msie|trident)/i.test(Ct.navigator.userAgent)):()=>!0,Oy=Ct.hasStandardBrowserEnv?{write(i,s,c,u,d,p,h){if(typeof document>"u")return;const x=[`${i}=${encodeURIComponent(s)}`];D.isNumber(c)&&x.push(`expires=${new Date(c).toUTCString()}`),D.isString(u)&&x.push(`path=${u}`),D.isString(d)&&x.push(`domain=${d}`),p===!0&&x.push("secure"),D.isString(h)&&x.push(`SameSite=${h}`),document.cookie=x.join("; ")},read(i){if(typeof document>"u")return null;const s=document.cookie.match(new RegExp("(?:^|; )"+i+"=([^;]*)"));return s?decodeURIComponent(s[1]):null},remove(i){this.write(i,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Ty(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function By(i,s){return s?i.replace(/\/?\/$/,"")+"/"+s.replace(/^\/+/,""):i}function Qm(i,s,c){let u=!Ty(s);return i&&(u||c==!1)?By(i,s):s}const Zh=i=>i instanceof Vt?{...i}:i;function Dn(i,s){s=s||{};const c={};function u(m,y,j,H){return D.isPlainObject(m)&&D.isPlainObject(y)?D.merge.call({caseless:H},m,y):D.isPlainObject(y)?D.merge({},y):D.isArray(y)?y.slice():y}function d(m,y,j,H){if(D.isUndefined(y)){if(!D.isUndefined(m))return u(void 0,m,j,H)}else return u(m,y,j,H)}function p(m,y){if(!D.isUndefined(y))return u(void 0,y)}function h(m,y){if(D.isUndefined(y)){if(!D.isUndefined(m))return u(void 0,m)}else return u(void 0,y)}function x(m,y,j){if(j in s)return u(m,y);if(j in i)return u(void 0,m)}const b={url:p,method:p,data:p,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:x,headers:(m,y,j)=>d(Zh(m),Zh(y),j,!0)};return D.forEach(Object.keys({...i,...s}),function(y){const j=b[y]||d,H=j(i[y],s[y],y);D.isUndefined(H)&&j!==x||(c[y]=H)}),c}const Ym=i=>{const s=Dn({},i);let{data:c,withXSRFToken:u,xsrfHeaderName:d,xsrfCookieName:p,headers:h,auth:x}=s;if(s.headers=h=Vt.from(h),s.url=km(Qm(s.baseURL,s.url,s.allowAbsoluteUrls),i.params,i.paramsSerializer),x&&h.set("Authorization","Basic "+btoa((x.username||"")+":"+(x.password?unescape(encodeURIComponent(x.password)):""))),D.isFormData(c)){if(Ct.hasStandardBrowserEnv||Ct.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if(D.isFunction(c.getHeaders)){const b=c.getHeaders(),m=["content-type","content-length"];Object.entries(b).forEach(([y,j])=>{m.includes(y.toLowerCase())&&h.set(y,j)})}}if(Ct.hasStandardBrowserEnv&&(u&&D.isFunction(u)&&(u=u(s)),u||u!==!1&&Cy(s.url))){const b=d&&p&&Oy.read(p);b&&h.set(d,b)}return s},Ry=typeof XMLHttpRequest<"u",My=Ry&&function(i){return new Promise(function(c,u){const d=Ym(i);let p=d.data;const h=Vt.from(d.headers).normalize();let{responseType:x,onUploadProgress:b,onDownloadProgress:m}=d,y,j,H,z,w;function T(){z&&z(),w&&w(),d.cancelToken&&d.cancelToken.unsubscribe(y),d.signal&&d.signal.removeEventListener("abort",y)}let U=new XMLHttpRequest;U.open(d.method.toUpperCase(),d.url,!0),U.timeout=d.timeout;function Y(){if(!U)return;const ee=Vt.from("getAllResponseHeaders"in U&&U.getAllResponseHeaders()),re={data:!x||x==="text"||x==="json"?U.responseText:U.response,status:U.status,statusText:U.statusText,headers:ee,config:i,request:U};Vm(function(ie){c(ie),T()},function(ie){u(ie),T()},re),U=null}"onloadend"in U?U.onloadend=Y:U.onreadystatechange=function(){!U||U.readyState!==4||U.status===0&&!(U.responseURL&&U.responseURL.indexOf("file:")===0)||setTimeout(Y)},U.onabort=function(){U&&(u(new Ae("Request aborted",Ae.ECONNABORTED,i,U)),U=null)},U.onerror=function(me){const re=me&&me.message?me.message:"Network Error",pe=new Ae(re,Ae.ERR_NETWORK,i,U);pe.event=me||null,u(pe),U=null},U.ontimeout=function(){let me=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded";const re=d.transitional||Lm;d.timeoutErrorMessage&&(me=d.timeoutErrorMessage),u(new Ae(me,re.clarifyTimeoutError?Ae.ETIMEDOUT:Ae.ECONNABORTED,i,U)),U=null},p===void 0&&h.setContentType(null),"setRequestHeader"in U&&D.forEach(h.toJSON(),function(me,re){U.setRequestHeader(re,me)}),D.isUndefined(d.withCredentials)||(U.withCredentials=!!d.withCredentials),x&&x!=="json"&&(U.responseType=d.responseType),m&&([H,w]=os(m,!0),U.addEventListener("progress",H)),b&&U.upload&&([j,z]=os(b),U.upload.addEventListener("progress",j),U.upload.addEventListener("loadend",z)),(d.cancelToken||d.signal)&&(y=ee=>{U&&(u(!ee||ee.type?new Ml(null,i,U):ee),U.abort(),U=null)},d.cancelToken&&d.cancelToken.subscribe(y),d.signal&&(d.signal.aborted?y():d.signal.addEventListener("abort",y)));const J=Ey(d.url);if(J&&Ct.protocols.indexOf(J)===-1){u(new Ae("Unsupported protocol "+J+":",Ae.ERR_BAD_REQUEST,i));return}U.send(p||null)})},Uy=(i,s)=>{const{length:c}=i=i?i.filter(Boolean):[];if(s||c){let u=new AbortController,d;const p=function(m){if(!d){d=!0,x();const y=m instanceof Error?m:this.reason;u.abort(y instanceof Ae?y:new Ml(y instanceof Error?y.message:y))}};let h=s&&setTimeout(()=>{h=null,p(new Ae(`timeout ${s} of ms exceeded`,Ae.ETIMEDOUT))},s);const x=()=>{i&&(h&&clearTimeout(h),h=null,i.forEach(m=>{m.unsubscribe?m.unsubscribe(p):m.removeEventListener("abort",p)}),i=null)};i.forEach(m=>m.addEventListener("abort",p));const{signal:b}=u;return b.unsubscribe=()=>D.asap(x),b}},Dy=function*(i,s){let c=i.byteLength;if(c<s){yield i;return}let u=0,d;for(;u<c;)d=u+s,yield i.slice(u,d),u=d},ky=async function*(i,s){for await(const c of Ly(i))yield*Dy(c,s)},Ly=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const s=i.getReader();try{for(;;){const{done:c,value:u}=await s.read();if(c)break;yield u}}finally{await s.cancel()}},Xh=(i,s,c,u)=>{const d=ky(i,s);let p=0,h,x=b=>{h||(h=!0,u&&u(b))};return new ReadableStream({async pull(b){try{const{done:m,value:y}=await d.next();if(m){x(),b.close();return}let j=y.byteLength;if(c){let H=p+=j;c(H)}b.enqueue(new Uint8Array(y))}catch(m){throw x(m),m}},cancel(b){return x(b),d.return()}},{highWaterMark:2})},Fh=64*1024,{isFunction:_r}=D,Hy=(({Request:i,Response:s})=>({Request:i,Response:s}))(D.global),{ReadableStream:Jh,TextEncoder:Ph}=D.global,Ih=(i,...s)=>{try{return!!i(...s)}catch{return!1}},qy=i=>{i=D.merge.call({skipUndefined:!0},Hy,i);const{fetch:s,Request:c,Response:u}=i,d=s?_r(s):typeof fetch=="function",p=_r(c),h=_r(u);if(!d)return!1;const x=d&&_r(Jh),b=d&&(typeof Ph=="function"?(w=>T=>w.encode(T))(new Ph):async w=>new Uint8Array(await new c(w).arrayBuffer())),m=p&&x&&Ih(()=>{let w=!1;const T=new c(Ct.origin,{body:new Jh,method:"POST",get duplex(){return w=!0,"half"}}).headers.has("Content-Type");return w&&!T}),y=h&&x&&Ih(()=>D.isReadableStream(new u("").body)),j={stream:y&&(w=>w.body)};d&&["text","arrayBuffer","blob","formData","stream"].forEach(w=>{!j[w]&&(j[w]=(T,U)=>{let Y=T&&T[w];if(Y)return Y.call(T);throw new Ae(`Response type '${w}' is not supported`,Ae.ERR_NOT_SUPPORT,U)})});const H=async w=>{if(w==null)return 0;if(D.isBlob(w))return w.size;if(D.isSpecCompliantForm(w))return(await new c(Ct.origin,{method:"POST",body:w}).arrayBuffer()).byteLength;if(D.isArrayBufferView(w)||D.isArrayBuffer(w))return w.byteLength;if(D.isURLSearchParams(w)&&(w=w+""),D.isString(w))return(await b(w)).byteLength},z=async(w,T)=>{const U=D.toFiniteNumber(w.getContentLength());return U??H(T)};return async w=>{let{url:T,method:U,data:Y,signal:J,cancelToken:ee,timeout:me,onDownloadProgress:re,onUploadProgress:pe,responseType:ie,headers:se,withCredentials:de="same-origin",fetchOptions:ke}=Ym(w),Te=s||fetch;ie=ie?(ie+"").toLowerCase():"text";let ye=Uy([J,ee&&ee.toAbortSignal()],me),Qe=null;const Ne=ye&&ye.unsubscribe&&(()=>{ye.unsubscribe()});let Ye;try{if(pe&&m&&U!=="get"&&U!=="head"&&(Ye=await z(se,Y))!==0){let A=new c(T,{method:"POST",body:Y,duplex:"half"}),L;if(D.isFormData(Y)&&(L=A.headers.get("content-type"))&&se.setContentType(L),A.body){const[X,_]=Gh(Ye,os(Kh(pe)));Y=Xh(A.body,Fh,X,_)}}D.isString(de)||(de=de?"include":"omit");const B=p&&"credentials"in c.prototype,W={...ke,signal:ye,method:U.toUpperCase(),headers:se.normalize().toJSON(),body:Y,duplex:"half",credentials:B?de:void 0};Qe=p&&new c(T,W);let ne=await(p?Te(Qe,ke):Te(T,W));const G=y&&(ie==="stream"||ie==="response");if(y&&(re||G&&Ne)){const A={};["status","statusText","headers"].forEach(ue=>{A[ue]=ne[ue]});const L=D.toFiniteNumber(ne.headers.get("content-length")),[X,_]=re&&Gh(L,os(Kh(re),!0))||[];ne=new u(Xh(ne.body,Fh,X,()=>{_&&_(),Ne&&Ne()}),A)}ie=ie||"text";let te=await j[D.findKey(j,ie)||"text"](ne,w);return!G&&Ne&&Ne(),await new Promise((A,L)=>{Vm(A,L,{data:te,headers:Vt.from(ne.headers),status:ne.status,statusText:ne.statusText,config:w,request:Qe})})}catch(B){throw Ne&&Ne(),B&&B.name==="TypeError"&&/Load failed|fetch/i.test(B.message)?Object.assign(new Ae("Network Error",Ae.ERR_NETWORK,w,Qe),{cause:B.cause||B}):Ae.from(B,B&&B.code,w,Qe)}}},Vy=new Map,Gm=i=>{let s=i&&i.env||{};const{fetch:c,Request:u,Response:d}=s,p=[u,d,c];let h=p.length,x=h,b,m,y=Vy;for(;x--;)b=p[x],m=y.get(b),m===void 0&&y.set(b,m=x?new Map:qy(s)),y=m;return m};Gm();const Au={http:ny,xhr:My,fetch:{get:Gm}};D.forEach(Au,(i,s)=>{if(i){try{Object.defineProperty(i,"name",{value:s})}catch{}Object.defineProperty(i,"adapterName",{value:s})}});const Wh=i=>`- ${i}`,Qy=i=>D.isFunction(i)||i===null||i===!1;function Yy(i,s){i=D.isArray(i)?i:[i];const{length:c}=i;let u,d;const p={};for(let h=0;h<c;h++){u=i[h];let x;if(d=u,!Qy(u)&&(d=Au[(x=String(u)).toLowerCase()],d===void 0))throw new Ae(`Unknown adapter '${x}'`);if(d&&(D.isFunction(d)||(d=d.get(s))))break;p[x||"#"+h]=d}if(!d){const h=Object.entries(p).map(([b,m])=>`adapter ${b} `+(m===!1?"is not supported by the environment":"is not available in the build"));let x=c?h.length>1?`since :
`+h.map(Wh).join(`
`):" "+Wh(h[0]):"as no adapter specified";throw new Ae("There is no suitable adapter to dispatch the request "+x,"ERR_NOT_SUPPORT")}return d}const Km={getAdapter:Yy,adapters:Au};function Kc(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new Ml(null,i)}function _h(i){return Kc(i),i.headers=Vt.from(i.headers),i.data=Gc.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),Km.getAdapter(i.adapter||Hi.adapter,i)(i).then(function(u){return Kc(i),u.data=Gc.call(i,i.transformResponse,u),u.headers=Vt.from(u.headers),u},function(u){return qm(u)||(Kc(i),u&&u.response&&(u.response.data=Gc.call(i,i.transformResponse,u.response),u.response.headers=Vt.from(u.response.headers))),Promise.reject(u)})}const Zm="1.13.1",ys={};["object","boolean","number","function","string","symbol"].forEach((i,s)=>{ys[i]=function(u){return typeof u===i||"a"+(s<1?"n ":" ")+i}});const $h={};ys.transitional=function(s,c,u){function d(p,h){return"[Axios v"+Zm+"] Transitional option '"+p+"'"+h+(u?". "+u:"")}return(p,h,x)=>{if(s===!1)throw new Ae(d(h," has been removed"+(c?" in "+c:"")),Ae.ERR_DEPRECATED);return c&&!$h[h]&&($h[h]=!0,console.warn(d(h," has been deprecated since v"+c+" and will be removed in the near future"))),s?s(p,h,x):!0}};ys.spelling=function(s){return(c,u)=>(console.warn(`${u} is likely a misspelling of ${s}`),!0)};function Gy(i,s,c){if(typeof i!="object")throw new Ae("options must be an object",Ae.ERR_BAD_OPTION_VALUE);const u=Object.keys(i);let d=u.length;for(;d-- >0;){const p=u[d],h=s[p];if(h){const x=i[p],b=x===void 0||h(x,p,i);if(b!==!0)throw new Ae("option "+p+" must be "+b,Ae.ERR_BAD_OPTION_VALUE);continue}if(c!==!0)throw new Ae("Unknown option "+p,Ae.ERR_BAD_OPTION)}}const ns={assertOptions:Gy,validators:ys},ya=ns.validators;let Un=class{constructor(s){this.defaults=s||{},this.interceptors={request:new Qh,response:new Qh}}async request(s,c){try{return await this._request(s,c)}catch(u){if(u instanceof Error){let d={};Error.captureStackTrace?Error.captureStackTrace(d):d=new Error;const p=d.stack?d.stack.replace(/^.+\n/,""):"";try{u.stack?p&&!String(u.stack).endsWith(p.replace(/^.+\n.+\n/,""))&&(u.stack+=`
`+p):u.stack=p}catch{}}throw u}}_request(s,c){typeof s=="string"?(c=c||{},c.url=s):c=s||{},c=Dn(this.defaults,c);const{transitional:u,paramsSerializer:d,headers:p}=c;u!==void 0&&ns.assertOptions(u,{silentJSONParsing:ya.transitional(ya.boolean),forcedJSONParsing:ya.transitional(ya.boolean),clarifyTimeoutError:ya.transitional(ya.boolean)},!1),d!=null&&(D.isFunction(d)?c.paramsSerializer={serialize:d}:ns.assertOptions(d,{encode:ya.function,serialize:ya.function},!0)),c.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?c.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:c.allowAbsoluteUrls=!0),ns.assertOptions(c,{baseUrl:ya.spelling("baseURL"),withXsrfToken:ya.spelling("withXSRFToken")},!0),c.method=(c.method||this.defaults.method||"get").toLowerCase();let h=p&&D.merge(p.common,p[c.method]);p&&D.forEach(["delete","get","head","post","put","patch","common"],w=>{delete p[w]}),c.headers=Vt.concat(h,p);const x=[];let b=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(c)===!1||(b=b&&T.synchronous,x.unshift(T.fulfilled,T.rejected))});const m=[];this.interceptors.response.forEach(function(T){m.push(T.fulfilled,T.rejected)});let y,j=0,H;if(!b){const w=[_h.bind(this),void 0];for(w.unshift(...x),w.push(...m),H=w.length,y=Promise.resolve(c);j<H;)y=y.then(w[j++],w[j++]);return y}H=x.length;let z=c;for(;j<H;){const w=x[j++],T=x[j++];try{z=w(z)}catch(U){T.call(this,U);break}}try{y=_h.call(this,z)}catch(w){return Promise.reject(w)}for(j=0,H=m.length;j<H;)y=y.then(m[j++],m[j++]);return y}getUri(s){s=Dn(this.defaults,s);const c=Qm(s.baseURL,s.url,s.allowAbsoluteUrls);return km(c,s.params,s.paramsSerializer)}};D.forEach(["delete","get","head","options"],function(s){Un.prototype[s]=function(c,u){return this.request(Dn(u||{},{method:s,url:c,data:(u||{}).data}))}});D.forEach(["post","put","patch"],function(s){function c(u){return function(p,h,x){return this.request(Dn(x||{},{method:s,headers:u?{"Content-Type":"multipart/form-data"}:{},url:p,data:h}))}}Un.prototype[s]=c(),Un.prototype[s+"Form"]=c(!0)});let Ky=class Xm{constructor(s){if(typeof s!="function")throw new TypeError("executor must be a function.");let c;this.promise=new Promise(function(p){c=p});const u=this;this.promise.then(d=>{if(!u._listeners)return;let p=u._listeners.length;for(;p-- >0;)u._listeners[p](d);u._listeners=null}),this.promise.then=d=>{let p;const h=new Promise(x=>{u.subscribe(x),p=x}).then(d);return h.cancel=function(){u.unsubscribe(p)},h},s(function(p,h,x){u.reason||(u.reason=new Ml(p,h,x),c(u.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]}unsubscribe(s){if(!this._listeners)return;const c=this._listeners.indexOf(s);c!==-1&&this._listeners.splice(c,1)}toAbortSignal(){const s=new AbortController,c=u=>{s.abort(u)};return this.subscribe(c),s.signal.unsubscribe=()=>this.unsubscribe(c),s.signal}static source(){let s;return{token:new Xm(function(d){s=d}),cancel:s}}};function Zy(i){return function(c){return i.apply(null,c)}}function Xy(i){return D.isObject(i)&&i.isAxiosError===!0}const ru={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ru).forEach(([i,s])=>{ru[s]=i});function Fm(i){const s=new Un(i),c=Sm(Un.prototype.request,s);return D.extend(c,Un.prototype,s,{allOwnKeys:!0}),D.extend(c,s,null,{allOwnKeys:!0}),c.create=function(d){return Fm(Dn(i,d))},c}const ft=Fm(Hi);ft.Axios=Un;ft.CanceledError=Ml;ft.CancelToken=Ky;ft.isCancel=qm;ft.VERSION=Zm;ft.toFormData=bs;ft.AxiosError=Ae;ft.Cancel=ft.CanceledError;ft.all=function(s){return Promise.all(s)};ft.spread=Zy;ft.isAxiosError=Xy;ft.mergeConfig=Dn;ft.AxiosHeaders=Vt;ft.formToJSON=i=>Hm(D.isHTMLForm(i)?new FormData(i):i);ft.getAdapter=Km.getAdapter;ft.HttpStatusCode=ru;ft.default=ft;const{Axios:pA,AxiosError:hA,CanceledError:mA,isCancel:gA,CancelToken:xA,VERSION:bA,all:yA,Cancel:vA,isAxiosError:AA,spread:jA,toFormData:wA,AxiosHeaders:SA,HttpStatusCode:EA,formToJSON:NA,getAdapter:zA,mergeConfig:CA}=ft,Fy="http://localhost:8080/api/auth",Jm=ft.create({baseURL:Fy,headers:{"Content-Type":"application/json"}}),Jy=async(i,s)=>{try{const c=await Jm.post("/login",{username:i,password:s});if(!c.data.accessToken)throw new Error(c.data.message||"Invalid credentials");return c.data}catch(c){throw console.error(" Login API Error:",c),new Error(c.response?.data?.message||"Login failed")}},Py=async i=>{try{return(await Jm.post("/register",i)).data}catch(s){throw console.error(" Register API Error:",s),new Error(s.response?.data?.message||"Registration failed")}},Iy=()=>{const[i,s]=S.useState(!0),[c,u]=S.useState(!1),[d,p]=S.useState(""),[h,x]=S.useState(""),[b,m]=S.useState(""),[y,j]=S.useState(!1),H=ra(),z=async w=>{w.preventDefault(),m(""),j(!0);try{const T=await Jy(d,h);T.accessToken?(sessionStorage.setItem("accessToken",T.accessToken),sessionStorage.setItem("refreshToken",T.refreshToken),sessionStorage.setItem("userEmail",d),alert("Login Successful!"),H("/userdashboard")):m(T.message||"Invalid email or password")}catch(T){m(T.message||"Invalid email or password")}finally{j(!1)}};return l.jsxs(l.Fragment,{children:[l.jsx(ps,{}),l.jsx("div",{style:{paddingTop:"120px"},children:l.jsx("div",{className:"login-container",children:l.jsxs("div",{className:"login-card",children:[l.jsx("h2",{children:"Welcome Back"}),l.jsx("p",{children:"Login to continue your AgriTechPro journey"}),l.jsxs("div",{className:"login-toggle",children:[l.jsx("button",{className:i?"active":"",onClick:()=>s(!0),children:"Email Login"}),l.jsx("button",{className:i?"":"active",onClick:()=>s(!1),children:"Phone Login"})]}),l.jsxs("form",{className:"login-form",onSubmit:z,children:[l.jsx("input",{type:i?"email":"tel",placeholder:i?"Enter your email":"Enter your phone number",value:d,onChange:w=>p(w.target.value),required:!0}),l.jsxs("div",{className:"password-field",children:[l.jsx("input",{type:c?"text":"password",placeholder:"Enter your password",value:h,onChange:w=>x(w.target.value),required:!0}),l.jsx("span",{className:"toggle-password",onClick:()=>u(!c),children:c?"Hide":"Show"})]}),b&&l.jsx("p",{className:"error-text",children:b}),l.jsx("div",{className:"forgot-password",children:l.jsx("a",{href:"/forgot-password",children:"Forgot Password?"})}),l.jsx("button",{type:"submit",className:"login-btn",disabled:y,children:y?"Logging in...":"Login"})]}),l.jsx("div",{className:"divider",children:l.jsx("span",{children:"OR"})}),l.jsxs("div",{className:"sso-icons",children:[l.jsx("a",{href:"http://localhost:8080/oauth2/authorization/google",className:"sso-btn google",children:l.jsx(hu,{size:22})}),l.jsx("a",{href:"http://localhost:8080/oauth2/authorization/github",className:"sso-btn github",children:l.jsx(gu,{size:20})}),l.jsx("a",{href:"#",className:"sso-btn facebook",children:l.jsx(mu,{size:20})}),l.jsx("a",{href:"#",className:"sso-btn linkedin",children:l.jsx(xu,{size:20})})]}),l.jsxs("p",{className:"signup-text",children:["Don’t have an account? ",l.jsx(be,{to:"/register",children:"Sign up"})]})]})})}),l.jsx("style",{children:`
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
      `})]})},Wy=()=>{const[i,s]=S.useState({userName:"",email:"",mobile:"",password:"",address:"",role:"USER"}),[c,u]=S.useState(!1),[d,p]=S.useState(""),h=ra(),x=m=>{s({...i,[m.target.name]:m.target.value})},b=async m=>{m.preventDefault(),p(""),u(!0);try{const y=await Py(i);alert(y.message||"User registered successfully!"),h("/login")}catch(y){p(y.message||"Registration failed! Try again.")}finally{u(!1)}};return l.jsxs("div",{className:"register-container",children:[l.jsxs("div",{className:"register-card",children:[l.jsx("h2",{children:"Create Account 🌿"}),l.jsx("p",{children:"Join AgriTechPro and grow your future"}),l.jsxs("form",{className:"register-form",onSubmit:b,children:[l.jsx("input",{type:"text",name:"userName",placeholder:"Full Name",value:i.userName,onChange:x,required:!0}),l.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:i.email,onChange:x,required:!0}),l.jsx("input",{type:"tel",name:"mobile",placeholder:"Mobile Number",value:i.mobile,onChange:x,required:!0}),l.jsx("input",{type:"password",name:"password",placeholder:"Password",value:i.password,onChange:x,required:!0}),l.jsx("textarea",{name:"address",placeholder:"Full Address",rows:"3",value:i.address,onChange:x,required:!0}),l.jsxs("select",{name:"role",value:i.role,onChange:x,required:!0,children:[l.jsx("option",{value:"USER",children:"USER"}),l.jsx("option",{value:"ADMIN",children:"ADMIN"}),l.jsx("option",{value:"VENDOR",children:"VENDOR"})]}),d&&l.jsx("p",{style:{color:"red"},children:d}),l.jsx("button",{type:"submit",className:"register-btn",disabled:c,children:c?"Registering...":"Register"})]}),l.jsxs("p",{className:"signup-text",children:["Already have an account? ",l.jsx(be,{to:"/login",children:"Login"})]})]}),l.jsx("style",{children:`
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
      `})]})},_y="/AgriTechUl/assets/b1-x3izpeS2.jpg",$y="/AgriTechUl/assets/b2-D2CNAekI.jpeg",ev="/AgriTechUl/assets/b3-DNW8ECe5.jpg",Zc=[{id:1,image:_y,title:"Quality Seeds for High Yield",subtitle:"Scientifically tested seeds to boost productivity.",backgroundColor:"#e6f7e6"},{id:2,image:$y,title:"Organic Fertilizers",subtitle:"Keep your soil healthy. Grow naturally.",backgroundColor:"#fff4e6"},{id:3,image:ev,title:"Tractor & Equipments",subtitle:"Modern tools for smart farming.",backgroundColor:"#e6f3ff"}];function tv(){const[i,s]=S.useState(0);return S.useEffect(()=>{const c=setInterval(()=>{s(u=>(u+1)%Zc.length)},3500);return()=>clearInterval(c)},[]),l.jsxs("div",{className:"hero-slider",children:[Zc.map((c,u)=>l.jsxs("div",{className:`hero-slide ${i===u?"active":""}`,style:{backgroundColor:c.backgroundColor},children:[l.jsxs("div",{className:"hero-content",children:[l.jsx("h2",{children:c.title}),l.jsx("p",{children:c.subtitle}),l.jsxs("div",{className:"hero-buttons",children:[l.jsx("button",{className:"buy-btn",children:"Buy Now"}),l.jsx("button",{className:"info-btn",children:"More Info"})]})]}),l.jsx("div",{className:"hero-img-box",children:l.jsx("img",{src:c.image,alt:"banner"})})]},c.id)),l.jsx("div",{className:"dots",children:Zc.map((c,u)=>l.jsx("span",{className:`dot ${i===u?"active":""}`,onClick:()=>s(u)},u))}),l.jsx("style",{children:`
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
      `})]})}const av=[{id:1,name:"Offers",img:"https://media.bighaat.com/wsfbanners/ec9db2d0-d70c-41ae-abf0-83a286c1de05.webp?w=1080&q=80",to:"/offers"},{id:2,name:"Insecticides",img:"https://media.bighaat.com/wsfbanners/f74bb722-23ff-4cfa-8a4f-09a817617c5f.webp?w=1080&q=80",to:"/category/insecticides"},{id:3,name:"Nutrients",img:"https://media.bighaat.com/wsfbanners/45e90225-8767-44f7-a3de-c1f5d186ae16.webp?w=1080&q=80",to:"/category/nutrients"},{id:4,name:"Fungicides",img:"https://media.bighaat.com/wsfbanners/97c1397e-0e1a-4c66-8d63-229a983de12b.webp?w=1080&q=80",to:"/category/fungicides"},{id:5,name:"Vegetable & Fruit Seeds",img:"https://media.bighaat.com/wsfbanners/87f7b455-ab96-4433-9e8c-24fac60ccff3.webp?w=1080&q=80",to:"/category/veg-fruit-seeds"},{id:6,name:"Herbicides",img:"https://media.bighaat.com/wsfbanners/f294b1e7-1cd2-4895-8b6f-d50fe172ddd1.webp?w=1080&q=80",to:"/category/herbicides"},{id:7,name:"Growth Promoters",img:"https://media.bighaat.com/wsfbanners/153b1941-7cab-41b0-ba1b-f1020be1f4b9.webp?w=1080&q=80",to:"/category/growth-promoters"},{id:8,name:"Farm Machinery",img:"https://media.bighaat.com/wsfbanners/65967dbe-5b82-4c4a-a24f-5d72cf21eaf6.webp?w=1080&q=80",to:"/category/farm-machinery"},{id:9,name:"Flower Seeds",img:"https://media.bighaat.com/wsfbanners/74efbaad-48dd-432c-8979-78fd0a970d39.webp?w=1080&q=80",to:"/category/flower-seeds"},{id:10,name:"Organic Farming",img:"https://media.bighaat.com/wsfbanners/b5b78d8a-27fe-40a5-8c05-5684ed78611c.webp?w=1080&q=80",to:"/category/organic"},{id:11,name:"Animal Husbandry",img:"https://media.bighaat.com/wsfbanners/6f4d9010-e0c9-4653-b27e-5a3933fbefa5.webp?w=1080&q=80",to:"/category/animal-husbandry"},{id:12,name:"New Arrivals",img:"https://media.bighaat.com/wsfbanners/5270cb61-95a2-41f8-9d8f-d88ae16bef1e.webp?w=1080&q=80",to:"/new-arrivals"}];function nv(){return l.jsxs("section",{className:"cat-wrap",children:[l.jsx("h2",{className:"cat-title",children:"Categories"}),l.jsx("div",{className:"cat-grid",children:av.map((i,s)=>l.jsxs(be,{to:i.to,className:"cat-card",children:[l.jsx("div",{className:"cat-thumb",style:{background:em[s%em.length]},children:l.jsx("img",{src:i.img,alt:i.name,loading:"lazy"})}),l.jsx("div",{className:"cat-name",children:i.name})]},i.id))}),l.jsx("style",{children:`
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
      `})]})}const em=["linear-gradient(145deg, #d9f6ff, #fffdf3)","linear-gradient(145deg, #ffe5ec, #fffdfa)","linear-gradient(145deg, #e8ffe8, #fffef2)","linear-gradient(145deg, #f1e8ff, #fffdf6)","linear-gradient(145deg, #ffe9d9, #fffdf9)","linear-gradient(145deg, #dff5ff, #fffef4)"],zl=[{id:1,name:"Kaveri Hybrid Tomato Seeds",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",brand:"Kaveri Seeds",price:199,mrp:250,rating:4.6},{id:2,name:"F1 Hybrid Chilli Seeds",image:"https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&q=80",brand:"East West Seeds",price:149,mrp:200,rating:4.3},{id:3,name:"Hybrid Brinjal Seeds",image:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",brand:"Nunhems",price:135,mrp:180,rating:4.1},{id:4,name:"Cucumber Hybrid Seeds",image:"https://th.bing.com/th/id/OIP.Y-g_X54Kg34x7GkIgTGDxgHaHY?w=179&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",brand:"Mahyco",price:160,mrp:220,rating:4.4},{id:5,name:"Okra / Bhindi Hybrid Seeds",image:"data:image/webp;base64,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",brand:"Syngenta",price:120,mrp:180,rating:4.2},{id:6,name:"Tomato Hybrid Seeds",image:"data:image/jpeg;base64,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",brand:"Kaveri Seeds",price:180,mrp:240,rating:4.5},{id:7,name:"Hot Green Chilli Seeds",image:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",brand:"East West Seeds",price:145,mrp:195,rating:4.4},{id:8,name:"Round Brinjal Hybrid Seeds",image:"https://th.bing.com/th/id/OIP.Y-g_X54Kg34x7GkIgTGDxgHaHY?w=179&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",brand:"Nunhems",price:130,mrp:175,rating:4},{id:9,name:"Cucumber Long Hybrid Seeds",image:"https://th.bing.com/th/id/OIP.Y-g_X54Kg34x7GkIgTGDxgHaHY?w=179&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",brand:"Mahyco",price:165,mrp:230,rating:4.3},{id:10,name:"High Yield Okra Seeds",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",brand:"Syngenta",price:125,mrp:185,rating:4.2},{id:11,name:"Fresh Cucumber Hybrid Seeds",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",brand:"Mahyco",price:158,mrp:215,rating:4.4},{id:12,name:"Premium Okra Seeds Pack",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",brand:"Syngenta",price:118,mrp:170,rating:4.1}],Pm=({item:i})=>l.jsxs(be,{to:`/seeds/${i.id}`,className:"seed-card",children:[l.jsx("div",{className:"seed-img-box",children:l.jsx("img",{src:i.image,alt:i.name})}),l.jsx("h3",{className:"seed-name",children:i.name}),l.jsx("p",{className:"seed-brand",children:i.brand}),l.jsxs("div",{className:"seed-price-row",children:[l.jsxs("span",{className:"seed-price",children:["₹",i.price]}),l.jsxs("span",{className:"seed-mrp",children:["₹",i.mrp]})]}),l.jsx("style",{children:`
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
      `})]}),lv=()=>{const[i,s]=S.useState(""),[c,u]=S.useState("All"),[d,p]=S.useState("default"),[h,x]=S.useState(1),b=12,m=["All",...new Set(zl.map(w=>w.brand))];let y=zl.filter(w=>w.name.toLowerCase().includes(i.toLowerCase()));c!=="All"&&(y=y.filter(w=>w.brand===c)),d==="low"&&y.sort((w,T)=>w.price-T.price),d==="high"&&y.sort((w,T)=>T.price-w.price),d==="rating"&&y.sort((w,T)=>T.rating-w.rating);const j=Math.ceil(y.length/b),H=(h-1)*b,z=y.slice(H,H+b);return l.jsxs("div",{className:"seed-page",children:[l.jsx("h2",{className:"seed-title",children:"Vegetable Seeds"}),l.jsxs("div",{className:"seed-filters",children:[l.jsx("input",{type:"text",placeholder:"Search Seeds...",value:i,onChange:w=>s(w.target.value)}),l.jsx("select",{value:c,onChange:w=>u(w.target.value),children:m.map((w,T)=>l.jsx("option",{value:w,children:w},T))}),l.jsxs("select",{value:d,onChange:w=>p(w.target.value),children:[l.jsx("option",{value:"default",children:"Sort By"}),l.jsx("option",{value:"low",children:"Price: Low to High"}),l.jsx("option",{value:"high",children:"Price: High to Low"}),l.jsx("option",{value:"rating",children:"Rating"})]})]}),l.jsx("div",{className:"seed-grid",children:z.map(w=>l.jsx(Pm,{item:w},w.id))}),l.jsxs("div",{className:"seed-pagination",children:[l.jsx("button",{disabled:h===1,onClick:()=>x(h-1),children:"⟵ Prev"}),l.jsxs("span",{children:["Page ",h," of ",j]}),l.jsx("button",{disabled:h===j,onClick:()=>x(h+1),children:"Next ⟶"})]}),l.jsx("style",{children:`
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
      `})]})},iv=()=>{const i=zl.slice(0,6);return l.jsxs("div",{className:"seed-preview-wrapper",children:[l.jsxs("div",{className:"seed-header-row",children:[l.jsx("h2",{className:"seed-preview-title",children:"Vegetable Seeds"}),l.jsx(be,{to:"/category/vegetable-seeds",className:"seed-more-btn",children:"View More →"})]}),l.jsx("div",{className:"seed-scroll-row",children:i.map(s=>l.jsx("div",{className:"scroll-item",children:l.jsx(Pm,{item:s})},s.id))}),l.jsx("style",{children:`
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
      `})]})},Ri=[{id:1,name:"Urea Nitrogen Fertilizer",image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQAeksVMkoWSBA8t3J0ndEEPLCqeYGZf1vEfwdpgmNEn2evLpabELU2w_v5YUb-DyYv5tmWc5S4P1Zgs13N_kuO1ezmbY6STFefd2B6RiGi&usqp=CAc",brand:"IFFCO",price:220,mrp:260,rating:4.4},{id:2,name:"DAP 18-46-0 Fertilizer",image:"data:image/jpeg;base64,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",brand:"Coromandel",price:1350,mrp:1500,rating:4.6},{id:3,name:"NPK 19-19-19 Water Soluble",image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_Ce0IZ6xOrvzQijF4oiB8xcLr0_a_6NfSyqyXpA8_9SBdsrrcNiMFdiisY9hbpTX02Wy8Eo9iHBq8cQ8lOhqBRS2e7R554chA-XqzdLDC-ntioc2hE7ndYtTWVn8vScx4nORk8Q&usqp=CAc",brand:"Mahadhan",price:780,mrp:900,rating:4.3},{id:4,name:"Potash Muriate of Potash",image:"data:image/jpeg;base64,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",brand:"Zuari",price:550,mrp:620,rating:4.2},{id:5,name:"Zinc Sulphate 21%",image:"https://pratikindia.com/wp-content/uploads/2023/12/Zinc-Sulphate-21.png",brand:"Nova",price:260,mrp:320,rating:4.1},{id:6,name:"Zinc Sulphate 21%",image:"https://pratikindia.com/wp-content/uploads/2023/12/Zinc-Sulphate-21.png",brand:"Nova",price:250,mrp:320,rating:4.1},{id:7,name:"Zinc Sulphate 21%",image:"https://pratikindia.com/wp-content/uploads/2023/12/Zinc-Sulphate-21.png",brand:"Nova",price:230,mrp:320,rating:4.1}],Im=({item:i})=>l.jsxs(be,{to:`/fertilizers/${i.id}`,className:"fert-card",children:[l.jsx("div",{className:"fert-img-box",children:l.jsx("img",{src:i.image,alt:i.name})}),l.jsx("h3",{className:"fert-name",children:i.name}),l.jsx("p",{className:"fert-brand",children:i.brand}),l.jsxs("div",{className:"fert-price-row",children:[l.jsxs("span",{className:"fert-price",children:["₹",i.price]}),l.jsxs("span",{className:"fert-mrp",children:["₹",i.mrp]})]}),l.jsx("style",{children:`
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
      `})]}),rv=()=>{const i=Ri.slice(0,12);return l.jsxs("div",{className:"fert-preview-wrapper",children:[l.jsxs("div",{className:"fert-header-row",children:[l.jsx("h2",{className:"fert-preview-title",children:"Fertilizers"}),l.jsx(be,{to:"/category/fertilizers",className:"fert-more-btn",children:"View More →"})]}),l.jsx("div",{className:"fert-scroll-row",children:i.map(s=>l.jsx("div",{className:"scroll-item",children:l.jsx(Im,{item:s})},s.id))}),l.jsx("style",{children:`
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
      `})]})},vs=[{id:1,name:"Power Sprayer 18L (Portable)",image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRAKvOsKUweVhPlby71fTxm1lUToHw23WKi6VzD_X80KFFBxTLGtDQBb36g_obFxXgizT8cdIxf-3FdaHLLLn8OB1BeM2o3wYQ-njCv8tL4GxU-P3PSYl_gVEWs-ZcyXjkqqzAr388&usqp=CAc",brand:"Kisan Kraft",price:6500,mrp:7800,rating:4.4},{id:2,name:"Knapsack Manual Sprayer 16L",image:"data:image/webp;base64,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",brand:"Neptune",price:1450,mrp:1800,rating:4.3},{id:3,name:"Mini Power Tiller / Cultivator",image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFhUWFxsbGRgXGBYZGhgZFxgWGBgZGRcYHSggGBsmIBUYIjIhJikrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGzUlHyUrLS41MDU1NS0yMCstLS03LS8tLS4rLy0rLS0rNy0tLS0tLS8wLSstLS0uLSstLS4tLf/AABEIAN0A5AMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAgMEAQj/xABIEAACAQMCAwUEBgYIAwkBAAABAgMABBESIQUGMQcTIkFRMmFxgRQjQpGhwVJicpKx0QgVJDOCorLwQ1PhFmNzdHWDwtLTRP/EABoBAQADAQEBAAAAAAAAAAAAAAABAwQCBQb/xAAuEQEAAgIBAQMLBQEAAAAAAAAAAQIDEQQSITFBBRMiUXGBkaHR4fAUUmGxwUL/2gAMAwEAAhEDEQA/ANxpSlApSlApSlApSlApSlApSlApSlApSlApXFpANiQK4wXCONSMrDOMqQRkdRkUHZSlKBSlcXcDckD40HKlRt7zBawjMtzCn7TqPzqv33alwqLrdBz6Rq7fwGKC5UrLOIdudgn93FPJ8kQf5mz+FQs3bpLIcWvDyx97s5/dRPzoNtpX5esOeeKG4fRJcGV85jGpznrpEYGwHoBt7qmbq15iuEYd1d4I6M4Ufuu1B+iKV124IRQeukZ+OK+UHbSlKBSlKBSlKBSlKBSlKBSlKBXGSQKMsQB6kgD7zXKsg5w4rDcXJa5kdbZZjFEqB2z3OBK6onts0pWIDyCsaDTZ+P2qe1PGP8QP8KjZOebIZ+tJx6Kfkfhsaz615Uubne2szbxnH1t8/jPri2iGVP7TCpu17IIMhp7maR8ePSI0ViOmBpJUDp1qRnnaBzC0vEPpMLgqgDRY1NoMa7awB4SSSCMkEH41Ict83z2dsIrS3CqxMhysj+InSQADgA6Og9fU1qCdm3DRjNvqx+nJK2fiC29WSwsIoUCQxrGg+yoAH3CoTMzPe52cjNGjOuhmUFlP2SQCV+R2rupVE7S+cktIWQHLHYqDuxx7Ax0GCCx8gQBuwwQ6OceeTG6wWymaaQ6YoozhpT+mz/8ADiGDuMFsE5VQTVavOzjjN4dV1fQwqdxHF3hA+OwLH4s3xqydl/KEkWq/vd7ucZAP/BjOMKB5MRjPoMD1zodBjtr2DxHe4vppD5lFVPxcvU/Y9jPCo8ao5Jcf8yVt/iE0itDpQV6w5H4dCcx2UAI8zGrH72yanYbdEGEVVHooA/hXZSg8VvwmBJGmSGNZX9p1RQzfFgMmvbSlApSlApSlApSlApSlApSlApSlApSq/wA6cba2gAiGqeZhHCvq7bZ+A+7OPWgiOc+cZI2a3sk7yZQO8fbTFqIVVz01sSFA8s58jjp7NLGLu3nBV448QxSHoyw6u9mBPTXK0pyOoAqo9p0K2NjFYoS00xMkzgamc6SGJHUg5ZR6YFVvlzlfiPFoY4NbQ2sHg3P1QKk50ov96+c5Yk7/AKPSpG4XXO3DYyQ99bAjqBKhI+IUmoy47U+EJ1vUP7KyN/pU1WbXsHsQBrnuGPngooPy0nH31KQ9i/Cl6xyN+1K35YqAuO2jhK9JJX/Zicf6sV6eB9rXDbmQRq8kZOwMqFVP+IEgfPFdkHZNwlf/AOXPxkl/J6j+bOXuH2It5YokhdJhJlSclIgXbOSdshR/iHrQWDnrmpbGJcANJIwVBqVQM58RLbADHXeqD2bcuScQuP6zvRqiRv7OpB0uwJPeAH7CnoTuzZY9Kh+VuEScbve8m1CztsKQc+LAGmLPqQAW9BgVvUMSooVQFVQAAAAABsAAOgqRzpSlQFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFUnhI+m8TluTvDZ5hh9DKf71x7x0/dPlVi5n4l9GtJ5vNIyV/aOyf5iKpfELr+rOA5/4skfruZJhk7nzAOPkKDOeeeYBc3dxsCshEaPqGpI4GVjpAGQHYLk5+y3xrcOReIxz2MEkMaxJp0hFxpXQSvhx5HGR54IzWGL2d3lwJHhAc23dQ6BgF3dBJMQzMFBVpST/MVs3Zpy/JZWSwzBRIWLMFOQM4CjPTIVQDjbPr1oLXSlfGYAZJwB50H5i7QOd7qe9lCSSR6XaJVjdihETuqkJjdiTufh6CpKLh/EeIrbxltYJWHvC2QO5UaiRnLInVm+3I3X2cRXNa20l/PLZKdBcKgUbszeE90B5u2dPn4i3kK3Ps25TNhagSnMz+JwPZjzj6pPcMDJ8zk+lSJvlvgkVlbx28I8CDqfaZjuzsfNick1J0pUBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKCndqbZtI4vKe5ijPwJL4/wAlQfa0kZmsFd2CQ97PIgxp7qBUfLeedSqg/bNTXacfBY/+oQf6ZaqPEX+n8UdRukk6Wq/+XtP7Rdn9lpNEZ+I69KDQuRbBorKLvBiWTMsv/iTEyMPlqx8qn6UoFZH2v85Fi3DbZ8HTm6lG/dpt9WMdWORkDfxKvVtrP2m85/QIRHCNd3P4YUG5GdjIR6DO3qfnVO7JeTO8b6XP441fWGO/0icE5lyfajQkhT9ptTelBM9mnZ39HZLu4zrwWihbfudQxqdvtSaQPcuWA8q02lKBSlKDxSXuGI2x5fKupeKqc4ZNuviG3xry3aEuwHU6sfPpVLPKXETqP0qLLg6j4hnOxJwgqnLOWJjzcR79/wCOqxXxaNbXWrGCD7wc++vQ7gDJOBkD7yAPxNV/lKwnhjC3MiSSaidSDSunACgDAxjFTl5AJI2Q7alIz6ZHUe8VZSbTWOrvRLnNKFUsxwqgkk9AAMk1zqG4lOX4fK7bE2zlh6HuzqH35qXj6D4CukOVKUoFKUoFKUoFKUoFKUoFKUoFKUoM/wC2yRksEmU4MNzHJn0Kh8fiQPnUH2HQCbNxviCIQKT9qWVu/uX+ZMYz6CpDt9mP9XxRLnMtwowPMKkj4Puyq1MdkPDhBw2MD7ckr9Mf8RlBOPcgoLpUXzNx2KytpLmY+GNc482boqL7ycCpSsW7ab6Se9gtEGpIVEhXIw80mpYVYeYyB8nPrQRHKXB5+MXr3NySNe8pGfqYSPBBGfsu6+Y3CEnq9b5bQLGioihUUBVUDAAAwAB5Co/lrgkdnbpBHvpGWY+1I53d2PmzHJqUoFKUoPhONzXxHBAIIIPQjcH51Su03jkkMaxRnSZQdTYz4dhj575qkcC5jngZRHISowChzowPd5fKqL8itLdMvU43krLnw+drLZZrMMc5IOa6msgNy+K7oW7yNSQV1KCQCQRkA4yMEVEcWWKQPHLFHIkZBKzMTk6c5GoHbfGT1Oav283pnekjFoU57wH7q9kcgYZByK64YUwCEA29ACK7q4r179LROvBAXR1cOmI31QzEY3zqEhAH34qdToPhXFplHVgPmK+xyq3skH4V25c6UpQKUpQKUpQKUpQdF9dLFG8rnCxozsfcoJPX3CqPY9sHDXOGaaI7f3kROM4692W9a6+0Xn+2tC9vMnfa0wYQAdSsCDrLbKp3HyO1Yty1xThzPL9MVo1ZgU0LlU3bIGFLE4KjJ/Rz7qD9ScPvY5o0liYPG41Kwzgg9CM1Q+eO08cPvBbC2776tXZhJoILEgKFKHVsB5j2hVM5f7QbhLhrXhwF1bRIBCj6Y2MaiNcAsqkkFm2OMgfOq9zjwriNzcy3b2N0DIRssZcKFULgBCxAwOvvJoNZsO1izZQ0sc0J8wVDgA9CSp6Hy2qx8F5wsbpgkFzG7n7GSr7bnwNhvwr86Ndd2mCjIWIUJKCj4XA1YbruvQZru5f46bSVLvuO8aIthCSCSVdSScEjCtnp089qJ6Z1vTQf6QV8UFqo64lYfqsTEqnHn4TL/s1T+UuI8b4gkdtYSdzBbxqmoHQuwxl5MFix64H3edVbmvnC64rJEJlDMmVRYkIJ1EHGkEljsK3vsT0f1aFRQpSWRW2wdQIzq9+4ohUbHmji3CbhYeKt30UgPdyZVgxAzoEmAQx6DV5keRyI+e+S94x3kLakmurYKR5xoIJPw+jPn0wPWtK7XOFJPwq51AZiXvVPmGi8Rx6ZXUvwNYxy5dwcNvoXlEkptwdSoV21QrpZQ7AbtLIcZ/jQfpmlRfLnH4L2ETW76lONS7akYqGKOB0YahmpSgUpSgieZOBJdxd2x0kHKuBll3GcfEDFeDhvJFrCwbDOQcjWQRn4KAD881ZaVzNKzO5hfXk5aU83W0xDotpi2+kBT0Odz8sbffXzIL4KDIGQTg+nT0868sLfUxn0dfxbR/8AKvWD9Z/h/OulCp8j8wXFxc3sUxBWF8R7KNhNcRn2d+ka9d+p6GrO4bvl8Z049nA64I3PXHnVX5OtlS9vdKgFnck+v1znf981apg3eKQuwG5+OR+H50Hj41w6Mo8hQFhhsn3EEjfbBAwakLa2SMYjVVB3woAH4UvYtUbr+krD7wRXyxkLRox6lQT8cDNB30pSgUpSgUpSgUpXn4hciKKSQ9ERmPwVST/CgwbjtvHe8XfWA4DsDkZ2BEar7wCkpx6mpq77L7CUbI0Z9UY/wbI/Cq/2dEyzNM2MsfL3Df8Azu9atAelEsa4Zyv9D4t3cUrMImUDOASHhLsCR1Klo/L7YO1b1bHYVj/KUgueKXE2cgSuQf1Wcov+W2T762CDyFDweuaJWXS6hlPUMAw+41nPaZwu3hjikhjWJzJp+rAUMNLHdRtkEDetHc1lnaxc5nt4s+yjuf8AEQo/0GqeRMRjmXpeR4tPLpET7fZpUbe4VZElEa98jEiQABunn69T8as/JvN62KyJ3RKySd4csRhiFU42Ix4RVG4jPoUt+iufn5V94HctKEZ1G5JIGcaV6+pGwNY8d8kV3t9LzONw75ei1e3W+xrvPPM8VzwO9ljJGFEbA9QXdFA2PQ6xv76wmWT66QEhiAq6seSxooG3ppxnzxV942ujl64cne4uY1HpiNl6fNGr3djvJcN3Cbm7hSSMqUQNnOtZZS7bdBpMY6+RrfjmZrEy+Q5eOmPNalO6JT/YDbSLZzuzAo83hA66lRVds+hwox+qa1GuEMKoAqKFUdAAAB8hXOu2YpSlArjI4UFicAAkn0A3NcjVO4hwa6ZJJLm58KoxEceQuwJGeg+8H41XkvNY7I2uw4q3n0ra/PB4bztP4cp0d4+FI2WPO6tn+Ir6nazw89BN8omqDR9KjfausXPnuc+VYK8zJbur8/s9K/BxU3u39/VLW3aBw2ORpUjuQz51fVSEHJ1E4OwOfSvaO1O0PSK5P/sv/Kq+Lse+uuO6zk/mK78/mn/n5x9FX6bB39Xyn6rrwLnmC6mEKxzITnBdCoyPLJ86tIGKzLh0mJoD/wB6n4nH51p1X8bNOWJ34Sz8vBGKY14wUpStLIUpSgUpSgV03tqksbxSDUkisjD1VgVYfME12k1xSVSMggj3EGgzyHkmSxQLaQpcRqWKguYZ1ViWK6yDHLv01BfjUJzDzl9F1K9vKjiNSFkXdWfVjUyApgEDzGd616eUIrOxwqgkn0AGSaxznHna3vrUosEqOSrAkRnOnPhY6s9Cemd6JV3sjv4olcyuFOo7noAFQDLdBnc7+tbNY3KPhkZWHqpBH3isg5Y4fw6XafETnbJLRN+90P4irVY8qiEMFm1gn6tk2IjySASvtNud6DQWkrFud73veITHbEYWMY/VALfPUzD5VK8fjvQ+i2nkREG5MjkuSAc5OcY3FUp7aSEgyqxyx3znUwyT4t9/OsvKm011EPofIePFTL5y143rsjxebi9v3gZNWnpvjPTBr1cLiCIQDq0IAPfnAY9DjbV6devkZDgvBp7yQLDESSd2J8CZyfGwB0j02JrUeV+zaOBlluHErqQQoGEBHQnO74674HuqrHjvMa8G/mczj4sk3tPpa1rx1369UKR2vWpg4Lw+Bhhu8DMP1u6kLfjJV/7G7fRwe1B+0Hb9+V2H4EVnv9Iq+Dz2tspy0cckjAeWrGCfgI3PwrX+TuHm3sbWFhho4I1YfrBBq/HNbojUafIXvN7TafGdpilKVLkpSlArx8ZhZ4JVUZZkYAepI2FeylRMbjSazqYlm45duuncnHxT+dcV5Uudh3e3xT/7VpVfCw9RWSnDrXsi0/L6Nt+fe87msfP6s6HJ9wfsgf4lruj5PnGdhv6vV+WQHoQfnXKu/wBNH7p/Pcr/AFdv2x+e9Rl5UuBggx5UgjLHyIP6Puq80pXeLBXFvp8XGbkXy66vApSlXKClKUClK4yJkEb7gjbY7+h8qDKe0/nQuzWFm2SdppAenrGD/qPy9aieU4I7bSrSEuxxoUk4zjLOo9k7jAO+Dmp++7LGiYyWM4z10TjUDg5A1gZx8QageMWksb6+I2kijPjlhOqOVMaSkmMjR0OPD0Pqc5dT5zqye57F5rOCMXGnfr8JmfZP+bWSa77+F1imYJIrKrjJB1ArlMEZX0bofLbeqHdcr3kI8KCVB9qI5P7p3q9cNvYJhmKRXwNkHhPToBnr5bZqlW8FxfOdSSodK6jJGNEesAsYyygxNGfCoU6mZQT1JGnstG4l5k9VJ1aEbDdIoCt4W6aXGk5+Dda9Vs31gRJEhOkkZMiksSqoBodcDOoknOw2FaPf2MUoYzohQDfWB0HXxevnjNZPxQxNI626ssQzge1n36T5HyFV3ydExE+LVx+JPIiZp2REbnfd8UY3aBdKSpfVgkZV1IODjILqxI99ejhHFZr6RYyHITLYLRbAsNWCEGWJIA2NRr2yn/ln4xIfyNezhrWi6NbiOQSeJkAX6sAEYxg6s756VM3iY1MJjjZcVotW0b/iWo8D7VOF2ifR+4ng0MQwKBjqB0sWIOS2Rj5emKlLntm4YIWeN2ZxssZUqWPlufZHvNYPPFCxyhjXfOVklyfjrY5NT3DU4YyabnvEk8pY2jkUHyJiKg49cE0jJXucX4Wed27/AHxM/wBrFyNwyTivE5LyTLxeEyyEEKSMN3MQ/R2VT+oGz7db7WUdinGz/aLR3Vkj+tjcbLoJw+PQZwcHpqNXz/tPCF1yHu4ioZXbbUDnHhxnfBwOu3SrO9jtE1nUpulUiftSsUPi7wDybSN/goOo/dVi4BzHbXilraUPjGobqy56akYBl+YohK0pSg+E1V7vnaDve4h+sbfL/YBHkD9o9em23Wojnzibyrohni7vzRX+sf4+Wn3ZyfwrPrkvamN3GgndTsfNU3AztlwN/X3Vk5N8uprjjt9b2/J/B42THOTNkiJ8I3r4/ZrFtdXE8bqsixy5GGZCwVdWHwmRk46Z8yKr3DeAXkNwRpDxxEOPFpWU5JyHYMUbJ3UYB3yfWCtJ72QBoyNwMEBAcNg+Qz0INRnHuNXFvIIpJSzEZ8BUhcashthgjSdqrwXz0xxW1dz69/Zxk4GCbbjNWPjP9QtvJHCLqC9vHuIDGlx9Yzd8jxs5cthBgMDh2Bz6CrsJdPSRR8XX8xWM2nEZ5VLLI+xI9vGSDjrXl5V4w15fx2bysquWGsSE6sK58Gwzkrir4yZp/wCPn9lNuJxa9+f4VlvCcTjHtSJ8mFe4HPSvzRxfmQW11PDKjyJGzKmJGVmI9ksxyMeoAzUp2edrTQTLBdafoznAI1ZhJOxyxOU9R5dR6Huk5N+lEM+bFgrXeO8zPs1/r9CUr4rAgEHIPQjzr7VrKUpSgUpSgVWu0HmxeG2huCneMWCImrTqZs9TvsACastU/nrkocTeFJpHW3RXLCMqH15XSQWVhjGc7bY99B+cuM86z3E5n0QxH9GFAg653I8TH3k1ZOX+1GVMLN41/WyfuYbis+u0RZXVCWjDMFPQlQSFJ29MGuk5BricdZnfdLRXk3iOm3bHqnt+8e6Wxcy85/S4kigBVDu+Dks36OfTaovk6yaTi1lEcaBIJD72jR5QfloGP+td3KUC9z3jKq+AE49T0JJ9N9vj61VOM8YkNystuzIYz4XU6TkeYP8AvYmuK4tX6pnctOXn9XHjBjr0x3z/ACv3bzIsdwkawRqDEH1ooDyMWdcOw+yNOfnWYX80ZEekNlowWJ04D5IOnAHhxpO+4yRvjNSnE+N3F65a4kaSUrgsQoCgZ8IUDAXc9BuTk15F4b4QuScHI26e6rtbYa5LV7pe1+VbtYEuVt5DC66ldV1AjcZOnJUbeY9DUNFufnWvcF7Rmi4f9D7krIkIiikU5Gy6dTg4Kkdds5PpUD2e8FsroXTXTFAmhYypActmQEgYIb2R1HmKrtj3HY14uZ02jqjsdfZ3GxnMWsIJIyjk7DuyyM4/yY+BNeDmbmtr27Zo8iBPDEvTEabKT72yTv01V38w8Oa0t3l7wqXXSo6MwlDJsRt9l8/Db1qN7M+CC6uoomGVJLuPWOMZI+BJVT+3U4omsalHPyYsmXrxz3xHxXblDs8a5QXN0zoj4KIgXWy+RJYHQh8lAzjfIzivbe8Fbg95bXMLs0LyCN9WNQDnxKxUAMMZYbdU+daksgAXV4cnAHrVR7TvHYH1M8QX4mQKPwJqxiaFVR7QuPCCNYRu02dXujGz/fnHwzVtUbVhXanxaR7uYx4PcEIvu0oHPxyxYVAtXBOb+HQ6be6QRyADEpQFJFPsvqGdJwMHIAyD5Yqt89pEzppkVo+6kZZARpKM7tnI2xkJj4VU+NWpu/o8adJCoRxnYSIX0+8KVx8DXC+7/hhCzxNJGy6Qw9jcksFPlknOGwetSJ3kbmeOFC0xwAfEV3+sQAEAfrqAR8PfUNf30N3xIzQxaFdt89XIAUsd9s4zgbb+81RZrllJC5VW8s+QyAT/AITirFybORcRISCM5FQL3Hw9/wC0IGSONQw0lSScr126Z05GPWsntpyEV02eHcEbHST1yN8q2Dn31+iYlzFdD1//ABX+VfmpJmGSNsgjYeTbEb0Eq/GpJC8kmGZiM5AOWwctv64yffXjlus6gyoMqcYXH515nhK5BG/+z/A18mXy04P/AE3oP0x2FX88vDEE+CqMyQtnJMa7YI8tJyB7gPStFrI/6O/EC1jLET/cz5HuWRR+YY1rlApSlApSlAqH5t4rFbWk0ksixjQwUk9WKkKqgbkk+QqYqr838i23EXR7gy5jUhVV9K+LfJAGc9POg/Jki6ceuPxrrijLMB5kgfMmrFyTwD+sL6C1csoYtrIxlVRSzdeh8OPnVg595UThd6saZeIqskZYjVsSCrEDyZeuBsfdQdvFpzDZMDsGcImPtaVGw+BZvuNZ537A4z+YFSnG76WUrk7LqwOioGIJx6Z33O5+VR0tmR7yOuN/f/A/xoPZw+TUdBBAf7QPpufh0rvdAQzlnAyThSRt5YFdfBYsK7Y3xgH47n8q72gY6EX7TKpGwyDt1PQVI9LWJjOSznTnqzYJXYjfrvtV17NLHMZLbRjLufPRGF1YHqScD3mqpxF3JYPkuDoxuTkE5HvOfxre+WuR0itrVXysiLmUDo5Y62U/M4+ApEkqJ2w8OYcNgkddLy3KkgdEXuZRGg9yqMfGvD2Goq3Lk9Rbtj9+PP5VrPaFy8b6xlgTHebPHnbxocgZ8s7rn31gXLHFZOH3YkKHVGSkkbeFirY1Lv0bZSM+aj1oP0ZLGGK6hk5267dD5eWwqq8yL9Jv7KyXcRyfSp/RViyIgQOup26e4VF3narb6cW0cs07+FEKFcE9AT57+S5z+NWjkLl6SBJLi6Oq7uSGlP6IHsxj3L/voKIWusC7XOXdV3qiUA5LsWJ8RfLZAHXBVh9wrfaoPadwVZIu8ZcqDpcbjKsdQII6YOfnioSznlLhdzcCFLeMP3PdSMxdV04yOjbnI1dOm1Xfm+4S0iAvYi0cgbIULIvhwSGBxvg56eVfOyhVW4nVBhdJwPcrKB/qqz9ovBzc2ThBmSP6xPeV3I+YztUj8x8W4dEbqaOAHQdXdA9QVQSEHJ381+Yr3cuhlubcFcEacnGOvkffipeys1knHdofI+bFmfqB1OTkDHpmtN4pyMwtbeYRgTwkvIqjLOC2w2G7Kp3+GPKgk7GLInHrj8Ux+VYTCsbBjIB3a+I+W2AAvxJrcrW6bvHURnopJyoGNJyMseviFYbdIS7RIh3kOFG5LE4C7dcdBQQ8sZbxkYLN08tzgY9w6VwkQF21EghHxkY9lWI+/GPnW5NyErxWVkIlE0YD3U4wGRX1MY9XRjljjrjCnoTUdz52Y29pZNOs0rsrBSZCuAJPq19lRjxsm/xoOX9HGHEF6x/TjX7lc/nW2VlH9H+1K2VwxHt3Rx7wqRn8yK1eoClKUClKUClKUGdf9hlsL5uI2cZkDau8gzlgHOXaHPU+en5DrirBzNyracTgJkjAkeMBJtGJo+rLgkBgAScofUg1ZaUH5OnjuuD8Qj+kRljFJqAOTHKnskpnYgqT8D16Yqf7ULeOaeLiVqQbe7jUZH2ZYxpZGH2W0gbe5vSv0RxLhsNwhjniSVD9mRQw+OCNj76rc3Z3YCzntIou6jmOskM7aJF9mRdbHTjA2GARsdqD84xgLHuQoLfD/fSuVpNEZVzImyvjJwNfdvoBY7AavX1rjeBY2CyEOkbEMUPt4bBKE9MjOD7xW02PZlwq+jjurSWeOKQZCxuhHoQe8VmDAggjOxzUjHbriKFk0yamQKNYDeJkCgEEjfpgE9cA1+iOzCa6ksEku5C7OSyFsahH9nUftZwTk+RFdPDOy/hsO5hMp9ZmZwfimyH92rjHGFAVQAAMAAYAA2AAHQVA5VDcf5WtLwf2iFXI6OMq49wdSGx7s4qZpQQPL/JtlZnVbwAPv42Jd9+oDOSQPcMVPUpQK8t/arIjI4yrDS35H5GvVQigzbs1te7vLuP/AJZdM/CQAH/JWjTLlWA6kEfhUBY8JS0ubi4ySk+jYKzFXy5bOkHY6hvU/FKGGVORQZB2RcMzeTO/hMGoaSRnWSUzjqQqhh8WFbFVQu+ziykvPprd6JtYcaZCqhhjOAuDvjfffJq30HVJbIxyyKT6kA1R+B9nYt+JPeCRDESxSMpllLgdGJwuDnGB0NX2lB1Q26qWZRgucsfUgBR+CgVAc1QreI9iq6w+O9OSFjAIYZI31ZA2G/8AEWSulYwMqgCjJJwANzuenmfWgjOVuAQ2UCwQA6FJOT1ZmOWb79vlUzXwCvtApSlApSlApSlApSlAqL5l4N9Lt3tzLJEr41NHpDFc7r4gRg9DUpSgq1h2e8OijMf0ZJAwwzS/WMfm3s9Ps4qQ5Y5YtrCNorVGRGbUQXd98AbaycbAVM0oFKUoFKUoFKUoFKUoBFcNJHTceh/nXOlBw7wee3x/n0rkGB6GvtcdA9BQfSwrj3g8t/h/PpX3QPQVyoOGCeuw9B/OuQFfaUClKUClKUH/2Q==",brand:"AgriPro",price:18500,mrp:21500,rating:4.5},{id:4,name:"Brush Cutter 52cc Heavy Duty",image:"/assets/machinery/brush-cutter.jpg",brand:"Balwaan",price:7200,mrp:8900,rating:4.2},{id:5,name:"Water Pump 5HP Diesel",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTXPjEg7g0BDMdu5jzOY8E6rNA_Ktd-vYaXVXWj-8Jq6z1s9DY9lRVID5Awua6D7O_sVFNoRi-QTJAHMwqNb96fcYzjy8X_eID6i1pzXAjZ2JhMUAD6AT9gZX00jR35CTCodWHVjg&usqp=CAc",brand:"FieldPro",price:14800,mrp:17e3,rating:4.1},{id:6,name:"Mini Tractor 12HP Compact",image:"data:image/jpeg;base64,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",brand:"VST Shakti",price:245e3,mrp:27e4,rating:4.7}],Wm=({item:i})=>l.jsxs(be,{to:`/machinery/${i.id}`,className:"mach-card",children:[l.jsx("div",{className:"mach-img-box",children:l.jsx("img",{src:i.image,alt:i.name})}),l.jsx("h3",{className:"mach-name",children:i.name}),l.jsx("p",{className:"mach-brand",children:i.brand}),l.jsxs("div",{className:"mach-price-row",children:[l.jsxs("span",{className:"mach-price",children:["₹",i.price]}),l.jsxs("span",{className:"mach-mrp",children:["₹",i.mrp]})]}),l.jsx("style",{children:`
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
      `})]}),sv=()=>{const i=vs.slice(0,12);return l.jsxs("div",{className:"mach-preview-wrapper",children:[l.jsxs("div",{className:"mach-header-row",children:[l.jsx("h2",{className:"mach-preview-title",children:"Farm Machinery"}),l.jsx(be,{to:"/category/farm-machinery",className:"mach-more-btn",children:"View More →"})]}),l.jsx("div",{className:"mach-scroll-row",children:i.map(s=>l.jsx("div",{className:"scroll-item",children:l.jsx(Wm,{item:s})},s.id))}),l.jsx("style",{children:`
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
      `})]})},Xc=(i,s)=>i.map(c=>({...c,category:s,discountPercent:Math.round((c.mrp-c.price)/c.mrp*100)})),_m=[...Xc(zl,"seeds"),...Xc(Ri,"fertilizers"),...Xc(vs,"machinery")],ov=(i=6)=>_m.filter(s=>s.discountPercent>=10).sort((s,c)=>c.discountPercent-s.discountPercent).slice(0,i),cv=()=>_m.filter(i=>i.discountPercent>=10),$m=({item:i})=>{const s={seeds:`/seeds/${i.id}`,fertilizers:`/fertilizers/${i.id}`,machinery:`/machinery/${i.id}`}[i.category];return l.jsxs(be,{to:s,className:"offer-card",children:[l.jsxs("div",{className:"offer-img-box",children:[l.jsx("img",{src:i.image,alt:i.name}),l.jsxs("span",{className:"offer-badge",children:["-",i.discountPercent,"%"]})]}),l.jsx("h3",{className:"offer-name",children:i.name}),l.jsx("p",{className:"offer-brand",children:i.brand}),l.jsxs("div",{className:"offer-price-box",children:[l.jsxs("span",{className:"offer-price",children:["₹",i.price]}),l.jsxs("span",{className:"offer-mrp",children:["₹",i.mrp]})]}),l.jsx("style",{children:`
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
      `})]})},uv=()=>{const i=ov(12);return l.jsxs("div",{className:"offers-preview-wrap",children:[l.jsxs("div",{className:"offers-head-row",children:[l.jsx("h2",{className:"offers-title",children:"Today's Offers"}),l.jsx(be,{to:"/offers-today",className:"offers-more-btn",children:"View More →"})]}),l.jsx("div",{className:"offers-scroll",children:i.map(s=>l.jsx("div",{className:"scroll-item",children:l.jsx($m,{item:s})},s.id))}),l.jsx("style",{children:`
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
      `})]})},Fc=(i,s)=>i.map(c=>({...c,category:s,rating:c.rating||4}));let cs=[...Fc(zl,"seeds"),...Fc(Ri,"fertilizers"),...Fc(vs,"machinery")];cs=cs.sort((i,s)=>s.rating-i.rating);const dv=(i=6)=>cs.slice(0,i),fv=()=>cs,eg=({item:i})=>{const s={seeds:`/seeds/${i.id}`,fertilizers:`/fertilizers/${i.id}`,machinery:`/machinery/${i.id}`}[i.category];return l.jsxs(be,{to:s,className:"bs-card",children:[l.jsxs("div",{className:"bs-img-box",children:[l.jsx("img",{src:i.image,alt:i.name}),l.jsxs("span",{className:"bs-badge",children:["⭐ ",i.rating]})]}),l.jsx("h3",{className:"bs-name",children:i.name}),l.jsx("p",{className:"bs-brand",children:i.brand}),l.jsxs("div",{className:"bs-price-row",children:[l.jsxs("span",{className:"bs-price",children:["₹",i.price]}),l.jsxs("span",{className:"bs-mrp",children:["₹",i.mrp]})]}),l.jsx("style",{children:`
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
      `})]})},pv=()=>{const i=dv(12);return l.jsxs("div",{className:"bs-preview-wrap",children:[l.jsxs("div",{className:"bs-head-row",children:[l.jsx("h2",{className:"bs-title",children:"Best Selling"}),l.jsx(be,{to:"/best-selling",className:"bs-more-btn",children:"View More →"})]}),l.jsx("div",{className:"bs-scroll",children:i.map(s=>l.jsx("div",{className:"scroll-item",children:l.jsx(eg,{item:s})},s.id))}),l.jsx("style",{children:`
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
      `})]})},hv=({item:i})=>l.jsxs(be,{to:i.to,className:"ex-card",children:[l.jsx("img",{src:i.image,alt:"exclusive"}),l.jsx("style",{children:`
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
      `})]}),mv=[{id:1,image:"https://media.bighaat.com//wsfbanners/0307c441-0f8b-4c9a-b195-b13a7883f58d.webp?w=750&q=80",to:"/products/tiger-power"},{id:2,image:"https://media.bighaat.com//wsfbanners/9b54f6e3-f14f-41f1-842e-0235ea29ffa9.webp?w=750&q=80",to:"/products/amino-maxx"},{id:3,image:"https://media.bighaat.com//wsfbanners/270395f8-cf32-4231-a8f7-b42be512bd18.webp?w=750&q=80",to:"/products/insecticides-offers"},{id:4,image:"https://media.bighaat.com//wsfbanners/81e11abf-dd4a-40cc-bb27-6104ec4a5350.webp?w=750&q=80",to:"/products/farm-implements"}],gv=()=>l.jsxs("div",{className:"exclusive-wrapper",children:[l.jsx("h2",{className:"exclusive-title",children:"Exclusive"}),l.jsx("div",{className:"exclusive-grid",children:mv.map(i=>l.jsx(hv,{item:i},i.id))}),l.jsx("style",{children:`
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
      `})]}),xv=()=>l.jsxs("div",{className:"trust-banner",children:[l.jsxs("div",{className:"trust-item",children:[l.jsx("span",{className:"trust-icon",children:"🏷️"}),l.jsxs("p",{className:"trust-text",children:["100% Branded ",l.jsx("br",{})," Products"]})]}),l.jsxs("div",{className:"trust-item",children:[l.jsx("svg",{className:"trust-icon",width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"#2a7a0e",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"})}),l.jsxs("p",{className:"trust-text",children:["100% Original ",l.jsx("br",{})," Products"]})]}),l.jsxs("div",{className:"trust-item",children:[l.jsx("span",{className:"trust-icon",children:"🚚"}),l.jsx("p",{className:"trust-text",children:"Free Delivery"})]}),l.jsx("style",{children:`
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
      `})]}),bv=()=>l.jsxs("div",{className:"trust2-wrapper",children:[l.jsxs("div",{className:"trust2-item",children:[l.jsxs("svg",{className:"trust2-icon",viewBox:"0 0 24 24",fill:"none",stroke:"#2a7a0e",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.2"})]}),l.jsxs("p",{className:"trust2-text",children:["Safe & Secure ",l.jsx("br",{})," Payment"]})]}),l.jsxs("div",{className:"trust2-item",children:[l.jsxs("svg",{className:"trust2-icon",viewBox:"0 0 24 24",fill:"none",stroke:"#2a7a0e",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"8",r:"4"}),l.jsx("path",{d:"M6 21c1.5-3 4.5-5 6-5s4.5 2 6 5"}),l.jsx("path",{d:"M16 3.5l2.5 2"})]}),l.jsx("p",{className:"trust2-text",children:"Expert Advice"})]}),l.jsxs("div",{className:"trust2-item",children:[l.jsxs("svg",{className:"trust2-icon",viewBox:"0 0 24 24",fill:"none",stroke:"#2a7a0e",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M8 12h8"}),l.jsx("path",{d:"M12 8v8"}),l.jsx("circle",{cx:"12",cy:"12",r:"9"})]}),l.jsxs("p",{className:"trust2-text",children:["Best Price ",l.jsx("br",{})," Assured"]})]}),l.jsx("style",{children:`
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
      `})]});var Jc={exports:{}},tm;function yv(){return tm||(tm=1,(()=>{var i={296:(d,p,h)=>{var x=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,y=/^0o[0-7]+$/i,j=parseInt,H=typeof h.g=="object"&&h.g&&h.g.Object===Object&&h.g,z=typeof self=="object"&&self&&self.Object===Object&&self,w=H||z||Function("return this")(),T=Object.prototype.toString,U=Math.max,Y=Math.min,J=function(){return w.Date.now()};function ee(re){var pe=typeof re;return!!re&&(pe=="object"||pe=="function")}function me(re){if(typeof re=="number")return re;if((function(se){return typeof se=="symbol"||(function(de){return!!de&&typeof de=="object"})(se)&&T.call(se)=="[object Symbol]"})(re))return NaN;if(ee(re)){var pe=typeof re.valueOf=="function"?re.valueOf():re;re=ee(pe)?pe+"":pe}if(typeof re!="string")return re===0?re:+re;re=re.replace(x,"");var ie=m.test(re);return ie||y.test(re)?j(re.slice(2),ie?2:8):b.test(re)?NaN:+re}d.exports=function(re,pe,ie){var se,de,ke,Te,ye,Qe,Ne=0,Ye=!1,B=!1,W=!0;if(typeof re!="function")throw new TypeError("Expected a function");function ne(X){var _=se,ue=de;return se=de=void 0,Ne=X,Te=re.apply(ue,_)}function G(X){var _=X-Qe;return Qe===void 0||_>=pe||_<0||B&&X-Ne>=ke}function te(){var X=J();if(G(X))return A(X);ye=setTimeout(te,(function(_){var ue=pe-(_-Qe);return B?Y(ue,ke-(_-Ne)):ue})(X))}function A(X){return ye=void 0,W&&se?ne(X):(se=de=void 0,Te)}function L(){var X=J(),_=G(X);if(se=arguments,de=this,Qe=X,_){if(ye===void 0)return(function(ue){return Ne=ue,ye=setTimeout(te,pe),Ye?ne(ue):Te})(Qe);if(B)return ye=setTimeout(te,pe),ne(Qe)}return ye===void 0&&(ye=setTimeout(te,pe)),Te}return pe=me(pe)||0,ee(ie)&&(Ye=!!ie.leading,ke=(B="maxWait"in ie)?U(me(ie.maxWait)||0,pe):ke,W="trailing"in ie?!!ie.trailing:W),L.cancel=function(){ye!==void 0&&clearTimeout(ye),Ne=0,se=Qe=de=ye=void 0},L.flush=function(){return ye===void 0?Te:A(J())},L}},96:(d,p,h)=>{var x="Expected a function",b=NaN,m="[object Symbol]",y=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,H=/^0b[01]+$/i,z=/^0o[0-7]+$/i,w=parseInt,T=typeof h.g=="object"&&h.g&&h.g.Object===Object&&h.g,U=typeof self=="object"&&self&&self.Object===Object&&self,Y=T||U||Function("return this")(),J=Object.prototype.toString,ee=Math.max,me=Math.min,re=function(){return Y.Date.now()};function pe(se){var de=typeof se;return!!se&&(de=="object"||de=="function")}function ie(se){if(typeof se=="number")return se;if((function(Te){return typeof Te=="symbol"||(function(ye){return!!ye&&typeof ye=="object"})(Te)&&J.call(Te)==m})(se))return b;if(pe(se)){var de=typeof se.valueOf=="function"?se.valueOf():se;se=pe(de)?de+"":de}if(typeof se!="string")return se===0?se:+se;se=se.replace(y,"");var ke=H.test(se);return ke||z.test(se)?w(se.slice(2),ke?2:8):j.test(se)?b:+se}d.exports=function(se,de,ke){var Te=!0,ye=!0;if(typeof se!="function")throw new TypeError(x);return pe(ke)&&(Te="leading"in ke?!!ke.leading:Te,ye="trailing"in ke?!!ke.trailing:ye),(function(Qe,Ne,Ye){var B,W,ne,G,te,A,L=0,X=!1,_=!1,ue=!0;if(typeof Qe!="function")throw new TypeError(x);function ge(rt){var Nt=B,vt=W;return B=W=void 0,L=rt,G=Qe.apply(vt,Nt)}function Ue(rt){var Nt=rt-A;return A===void 0||Nt>=Ne||Nt<0||_&&rt-L>=ne}function at(){var rt=re();if(Ue(rt))return Pe(rt);te=setTimeout(at,(function(Nt){var vt=Ne-(Nt-A);return _?me(vt,ne-(Nt-L)):vt})(rt))}function Pe(rt){return te=void 0,ue&&B?ge(rt):(B=W=void 0,G)}function Bt(){var rt=re(),Nt=Ue(rt);if(B=arguments,W=this,A=rt,Nt){if(te===void 0)return(function(vt){return L=vt,te=setTimeout(at,Ne),X?ge(vt):G})(A);if(_)return te=setTimeout(at,Ne),ge(A)}return te===void 0&&(te=setTimeout(at,Ne)),G}return Ne=ie(Ne)||0,pe(Ye)&&(X=!!Ye.leading,ne=(_="maxWait"in Ye)?ee(ie(Ye.maxWait)||0,Ne):ne,ue="trailing"in Ye?!!Ye.trailing:ue),Bt.cancel=function(){te!==void 0&&clearTimeout(te),L=0,B=A=W=te=void 0},Bt.flush=function(){return te===void 0?G:Pe(re())},Bt})(se,de,{leading:Te,maxWait:de,trailing:ye})}},703:(d,p,h)=>{var x=h(414);function b(){}function m(){}m.resetWarningCache=b,d.exports=function(){function y(z,w,T,U,Y,J){if(J!==x){var ee=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw ee.name="Invariant Violation",ee}}function j(){return y}y.isRequired=y;var H={array:y,bigint:y,bool:y,func:y,number:y,object:y,string:y,symbol:y,any:y,arrayOf:j,element:y,elementType:y,instanceOf:j,node:y,objectOf:j,oneOf:j,oneOfType:j,shape:j,exact:j,checkPropTypes:m,resetWarningCache:b};return H.PropTypes=H,H}},697:(d,p,h)=>{d.exports=h(703)()},414:d=>{d.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},s={};function c(d){var p=s[d];if(p!==void 0)return p.exports;var h=s[d]={exports:{}};return i[d](h,h.exports,c),h.exports}c.n=d=>{var p=d&&d.__esModule?()=>d.default:()=>d;return c.d(p,{a:p}),p},c.d=(d,p)=>{for(var h in p)c.o(p,h)&&!c.o(d,h)&&Object.defineProperty(d,h,{enumerable:!0,get:p[h]})},c.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}})(),c.o=(d,p)=>Object.prototype.hasOwnProperty.call(d,p),c.r=d=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})};var u={};(()=>{c.r(u),c.d(u,{LazyLoadComponent:()=>Nt,LazyLoadImage:()=>Ot,trackWindowScroll:()=>G});const d=us();var p=c.n(d),h=c(697);function x(){return typeof window<"u"&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function b(F){return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},b(F)}function m(F,R){var P=Object.keys(F);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(F);R&&(I=I.filter((function(je){return Object.getOwnPropertyDescriptor(F,je).enumerable}))),P.push.apply(P,I)}return P}function y(F,R,P){return(R=H(R))in F?Object.defineProperty(F,R,{value:P,enumerable:!0,configurable:!0,writable:!0}):F[R]=P,F}function j(F,R){for(var P=0;P<R.length;P++){var I=R[P];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(F,H(I.key),I)}}function H(F){var R=(function(P,I){if(b(P)!=="object"||P===null)return P;var je=P[Symbol.toPrimitive];if(je!==void 0){var Se=je.call(P,"string");if(b(Se)!=="object")return Se;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(P)})(F);return b(R)==="symbol"?R:String(R)}function z(F,R){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(P,I){return P.__proto__=I,P},z(F,R)}function w(F){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(R){return R.__proto__||Object.getPrototypeOf(R)},w(F)}var T=function(F){F.forEach((function(R){R.isIntersecting&&R.target.onVisible()}))},U={},Y=(function(F){(function(q,K){if(typeof K!="function"&&K!==null)throw new TypeError("Super expression must either be null or a function");q.prototype=Object.create(K&&K.prototype,{constructor:{value:q,writable:!0,configurable:!0}}),Object.defineProperty(q,"prototype",{writable:!1}),K&&z(q,K)})(qe,F);var R,P,I,je,Se=(I=qe,je=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var q,K=w(I);if(je){var ae=w(this).constructor;q=Reflect.construct(K,arguments,ae)}else q=K.apply(this,arguments);return(function(le,$){if($&&(b($)==="object"||typeof $=="function"))return $;if($!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(function(Ee){if(Ee===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Ee})(le)})(this,q)});function qe(q){var K;if((function(le,$){if(!(le instanceof $))throw new TypeError("Cannot call a class as a function")})(this,qe),(K=Se.call(this,q)).supportsObserver=!q.scrollPosition&&q.useIntersectionObserver&&x(),K.supportsObserver){var ae=q.threshold;K.observer=(function(le){return U[le]=U[le]||new IntersectionObserver(T,{rootMargin:le+"px"}),U[le]})(ae)}return K}return R=qe,P=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.scrollPosition,K=this.placeholder.getBoundingClientRect(),ae=this.placeholder.style,le=parseInt(ae.getPropertyValue("margin-left"),10)||0,$=parseInt(ae.getPropertyValue("margin-top"),10)||0;return{bottom:q.y+K.bottom+$,left:q.x+K.left+le,right:q.x+K.right+le,top:q.y+K.top+$}}},{key:"isPlaceholderInViewport",value:function(){if(typeof window>"u"||!this.placeholder)return!1;var q=this.props,K=q.scrollPosition,ae=q.threshold,le=this.getPlaceholderBoundingBox(K),$=K.y+window.innerHeight,Ee=K.x,We=K.x+window.innerWidth,_e=K.y;return _e-ae<=le.bottom&&$+ae>=le.top&&Ee-ae<=le.right&&We+ae>=le.left}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var q=this,K=this.props,ae=K.className,le=K.height,$=K.placeholder,Ee=K.style,We=K.width;if($&&typeof $.type!="function")return p().cloneElement($,{ref:function(Ge){return q.placeholder=Ge}});var _e=(function(Ge){for(var st=1;st<arguments.length;st++){var $e=arguments[st]!=null?arguments[st]:{};st%2?m(Object($e),!0).forEach((function(nt){y(Ge,nt,$e[nt])})):Object.getOwnPropertyDescriptors?Object.defineProperties(Ge,Object.getOwnPropertyDescriptors($e)):m(Object($e)).forEach((function(nt){Object.defineProperty(Ge,nt,Object.getOwnPropertyDescriptor($e,nt))}))}return Ge})({display:"inline-block"},Ee);return We!==void 0&&(_e.width=We),le!==void 0&&(_e.height=le),p().createElement("span",{className:ae,ref:function(Ge){return q.placeholder=Ge},style:_e},$)}}],P&&j(R.prototype,P),Object.defineProperty(R,"prototype",{writable:!1}),qe})(p().Component);Y.propTypes={onVisible:h.PropTypes.func.isRequired,className:h.PropTypes.string,height:h.PropTypes.oneOfType([h.PropTypes.number,h.PropTypes.string]),placeholder:h.PropTypes.element,threshold:h.PropTypes.number,useIntersectionObserver:h.PropTypes.bool,scrollPosition:h.PropTypes.shape({x:h.PropTypes.number.isRequired,y:h.PropTypes.number.isRequired}),width:h.PropTypes.oneOfType([h.PropTypes.number,h.PropTypes.string])},Y.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const J=Y;var ee=c(296),me=c.n(ee),re=c(96),pe=c.n(re),ie=function(F){var R=getComputedStyle(F,null);return R.getPropertyValue("overflow")+R.getPropertyValue("overflow-y")+R.getPropertyValue("overflow-x")};const se=function(F){if(!(F instanceof HTMLElement))return window;for(var R=F;R&&R instanceof HTMLElement;){if(/(scroll|auto)/.test(ie(R)))return R;R=R.parentNode}return window};function de(F){return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},de(F)}var ke=["delayMethod","delayTime"];function Te(){return Te=Object.assign?Object.assign.bind():function(F){for(var R=1;R<arguments.length;R++){var P=arguments[R];for(var I in P)Object.prototype.hasOwnProperty.call(P,I)&&(F[I]=P[I])}return F},Te.apply(this,arguments)}function ye(F,R){for(var P=0;P<R.length;P++){var I=R[P];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(F,(je=(function(Se,qe){if(de(Se)!=="object"||Se===null)return Se;var q=Se[Symbol.toPrimitive];if(q!==void 0){var K=q.call(Se,"string");if(de(K)!=="object")return K;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Se)})(I.key),de(je)==="symbol"?je:String(je)),I)}var je}function Qe(F,R){return Qe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(P,I){return P.__proto__=I,P},Qe(F,R)}function Ne(F,R){if(R&&(de(R)==="object"||typeof R=="function"))return R;if(R!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ye(F)}function Ye(F){if(F===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return F}function B(F){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(R){return R.__proto__||Object.getPrototypeOf(R)},B(F)}var W=function(){return typeof window>"u"?0:window.scrollX||window.pageXOffset},ne=function(){return typeof window>"u"?0:window.scrollY||window.pageYOffset};const G=function(F){var R=(function(P){(function(ae,le){if(typeof le!="function"&&le!==null)throw new TypeError("Super expression must either be null or a function");ae.prototype=Object.create(le&&le.prototype,{constructor:{value:ae,writable:!0,configurable:!0}}),Object.defineProperty(ae,"prototype",{writable:!1}),le&&Qe(ae,le)})(K,P);var I,je,Se,qe,q=(Se=K,qe=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var ae,le=B(Se);if(qe){var $=B(this).constructor;ae=Reflect.construct(le,arguments,$)}else ae=le.apply(this,arguments);return Ne(this,ae)});function K(ae){var le;if((function(Ee,We){if(!(Ee instanceof We))throw new TypeError("Cannot call a class as a function")})(this,K),(le=q.call(this,ae)).useIntersectionObserver=ae.useIntersectionObserver&&x(),le.useIntersectionObserver)return Ne(le);var $=le.onChangeScroll.bind(Ye(le));return ae.delayMethod==="debounce"?le.delayedScroll=me()($,ae.delayTime):ae.delayMethod==="throttle"&&(le.delayedScroll=pe()($,ae.delayTime)),le.state={scrollPosition:{x:W(),y:ne()}},le.baseComponentRef=p().createRef(),le}return I=K,(je=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){typeof window>"u"||this.useIntersectionObserver||se(this.baseComponentRef.current)!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement=se(this.baseComponentRef.current),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:W(),y:ne()}})}},{key:"render",value:function(){var ae=this.props,le=(ae.delayMethod,ae.delayTime,(function(Ee,We){if(Ee==null)return{};var _e,Ge,st=(function(nt,sa){if(nt==null)return{};var Qt,Vn,kl={},Qn=Object.keys(nt);for(Vn=0;Vn<Qn.length;Vn++)Qt=Qn[Vn],sa.indexOf(Qt)>=0||(kl[Qt]=nt[Qt]);return kl})(Ee,We);if(Object.getOwnPropertySymbols){var $e=Object.getOwnPropertySymbols(Ee);for(Ge=0;Ge<$e.length;Ge++)_e=$e[Ge],We.indexOf(_e)>=0||Object.prototype.propertyIsEnumerable.call(Ee,_e)&&(st[_e]=Ee[_e])}return st})(ae,ke)),$=this.useIntersectionObserver?null:this.state.scrollPosition;return p().createElement(F,Te({forwardRef:this.baseComponentRef,scrollPosition:$},le))}}])&&ye(I.prototype,je),Object.defineProperty(I,"prototype",{writable:!1}),K})(p().Component);return R.propTypes={delayMethod:h.PropTypes.oneOf(["debounce","throttle"]),delayTime:h.PropTypes.number,useIntersectionObserver:h.PropTypes.bool},R.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},R};function te(F){return te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},te(F)}function A(F,R){for(var P=0;P<R.length;P++){var I=R[P];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(F,(je=(function(Se,qe){if(te(Se)!=="object"||Se===null)return Se;var q=Se[Symbol.toPrimitive];if(q!==void 0){var K=q.call(Se,"string");if(te(K)!=="object")return K;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Se)})(I.key),te(je)==="symbol"?je:String(je)),I)}var je}function L(F,R){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(P,I){return P.__proto__=I,P},L(F,R)}function X(F){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(R){return R.__proto__||Object.getPrototypeOf(R)},X(F)}var _=(function(F){(function(q,K){if(typeof K!="function"&&K!==null)throw new TypeError("Super expression must either be null or a function");q.prototype=Object.create(K&&K.prototype,{constructor:{value:q,writable:!0,configurable:!0}}),Object.defineProperty(q,"prototype",{writable:!1}),K&&L(q,K)})(qe,F);var R,P,I,je,Se=(I=qe,je=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var q,K=X(I);if(je){var ae=X(this).constructor;q=Reflect.construct(K,arguments,ae)}else q=K.apply(this,arguments);return(function(le,$){if($&&(te($)==="object"||typeof $=="function"))return $;if($!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(function(Ee){if(Ee===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Ee})(le)})(this,q)});function qe(q){return(function(K,ae){if(!(K instanceof ae))throw new TypeError("Cannot call a class as a function")})(this,qe),Se.call(this,q)}return R=qe,(P=[{key:"render",value:function(){return p().createElement(J,this.props)}}])&&A(R.prototype,P),Object.defineProperty(R,"prototype",{writable:!1}),qe})(p().Component);const ue=G(_);function ge(F){return ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},ge(F)}function Ue(F,R){for(var P=0;P<R.length;P++){var I=R[P];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(F,(je=(function(Se,qe){if(ge(Se)!=="object"||Se===null)return Se;var q=Se[Symbol.toPrimitive];if(q!==void 0){var K=q.call(Se,"string");if(ge(K)!=="object")return K;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Se)})(I.key),ge(je)==="symbol"?je:String(je)),I)}var je}function at(F,R){return at=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(P,I){return P.__proto__=I,P},at(F,R)}function Pe(F){if(F===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return F}function Bt(F){return Bt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(R){return R.__proto__||Object.getPrototypeOf(R)},Bt(F)}var rt=(function(F){(function(q,K){if(typeof K!="function"&&K!==null)throw new TypeError("Super expression must either be null or a function");q.prototype=Object.create(K&&K.prototype,{constructor:{value:q,writable:!0,configurable:!0}}),Object.defineProperty(q,"prototype",{writable:!1}),K&&at(q,K)})(qe,F);var R,P,I,je,Se=(I=qe,je=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var q,K=Bt(I);if(je){var ae=Bt(this).constructor;q=Reflect.construct(K,arguments,ae)}else q=K.apply(this,arguments);return(function(le,$){if($&&(ge($)==="object"||typeof $=="function"))return $;if($!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Pe(le)})(this,q)});function qe(q){var K;(function(We,_e){if(!(We instanceof _e))throw new TypeError("Cannot call a class as a function")})(this,qe),K=Se.call(this,q);var ae=q.afterLoad,le=q.beforeLoad,$=q.scrollPosition,Ee=q.visibleByDefault;return K.state={visible:Ee},Ee&&(le(),ae()),K.onVisible=K.onVisible.bind(Pe(K)),K.isScrollTracked=!!($&&Number.isFinite($.x)&&$.x>=0&&Number.isFinite($.y)&&$.y>=0),K}return R=qe,(P=[{key:"componentDidUpdate",value:function(q,K){K.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var q=this.props,K=q.className,ae=q.delayMethod,le=q.delayTime,$=q.height,Ee=q.placeholder,We=q.scrollPosition,_e=q.style,Ge=q.threshold,st=q.useIntersectionObserver,$e=q.width;return this.isScrollTracked||st&&x()?p().createElement(J,{className:K,height:$,onVisible:this.onVisible,placeholder:Ee,scrollPosition:We,style:_e,threshold:Ge,useIntersectionObserver:st,width:$e}):p().createElement(ue,{className:K,delayMethod:ae,delayTime:le,height:$,onVisible:this.onVisible,placeholder:Ee,style:_e,threshold:Ge,width:$e})}}])&&Ue(R.prototype,P),Object.defineProperty(R,"prototype",{writable:!1}),qe})(p().Component);rt.propTypes={afterLoad:h.PropTypes.func,beforeLoad:h.PropTypes.func,useIntersectionObserver:h.PropTypes.bool,visibleByDefault:h.PropTypes.bool},rt.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const Nt=rt;function vt(F){return vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},vt(F)}var va=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function kn(F,R){var P=Object.keys(F);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(F);R&&(I=I.filter((function(je){return Object.getOwnPropertyDescriptor(F,je).enumerable}))),P.push.apply(P,I)}return P}function Ln(F){for(var R=1;R<arguments.length;R++){var P=arguments[R]!=null?arguments[R]:{};R%2?kn(Object(P),!0).forEach((function(I){As(F,I,P[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(P)):kn(Object(P)).forEach((function(I){Object.defineProperty(F,I,Object.getOwnPropertyDescriptor(P,I))}))}return F}function As(F,R,P){return(R=Hn(R))in F?Object.defineProperty(F,R,{value:P,enumerable:!0,configurable:!0,writable:!0}):F[R]=P,F}function pn(){return pn=Object.assign?Object.assign.bind():function(F){for(var R=1;R<arguments.length;R++){var P=arguments[R];for(var I in P)Object.prototype.hasOwnProperty.call(P,I)&&(F[I]=P[I])}return F},pn.apply(this,arguments)}function Ul(F,R){for(var P=0;P<R.length;P++){var I=R[P];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(F,Hn(I.key),I)}}function Hn(F){var R=(function(P,I){if(vt(P)!=="object"||P===null)return P;var je=P[Symbol.toPrimitive];if(je!==void 0){var Se=je.call(P,"string");if(vt(Se)!=="object")return Se;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(P)})(F);return vt(R)==="symbol"?R:String(R)}function hn(F,R){return hn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(P,I){return P.__proto__=I,P},hn(F,R)}function qn(F){return qn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(R){return R.__proto__||Object.getPrototypeOf(R)},qn(F)}var Dl=(function(F){(function(q,K){if(typeof K!="function"&&K!==null)throw new TypeError("Super expression must either be null or a function");q.prototype=Object.create(K&&K.prototype,{constructor:{value:q,writable:!0,configurable:!0}}),Object.defineProperty(q,"prototype",{writable:!1}),K&&hn(q,K)})(qe,F);var R,P,I,je,Se=(I=qe,je=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var q,K=qn(I);if(je){var ae=qn(this).constructor;q=Reflect.construct(K,arguments,ae)}else q=K.apply(this,arguments);return(function(le,$){if($&&(vt($)==="object"||typeof $=="function"))return $;if($!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(function(Ee){if(Ee===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Ee})(le)})(this,q)});function qe(q){var K;return(function(ae,le){if(!(ae instanceof le))throw new TypeError("Cannot call a class as a function")})(this,qe),(K=Se.call(this,q)).state={loaded:!1},K}return R=qe,(P=[{key:"onImageLoad",value:function(){var q=this;return this.state.loaded?null:function(K){q.props.onLoad(K),q.props.afterLoad(),q.setState({loaded:!0})}}},{key:"getImg",value:function(){var q=this.props,K=(q.afterLoad,q.beforeLoad,q.delayMethod,q.delayTime,q.effect,q.placeholder,q.placeholderSrc,q.scrollPosition,q.threshold,q.useIntersectionObserver,q.visibleByDefault,q.wrapperClassName,q.wrapperProps,(function(ae,le){if(ae==null)return{};var $,Ee,We=(function(Ge,st){if(Ge==null)return{};var $e,nt,sa={},Qt=Object.keys(Ge);for(nt=0;nt<Qt.length;nt++)$e=Qt[nt],st.indexOf($e)>=0||(sa[$e]=Ge[$e]);return sa})(ae,le);if(Object.getOwnPropertySymbols){var _e=Object.getOwnPropertySymbols(ae);for(Ee=0;Ee<_e.length;Ee++)$=_e[Ee],le.indexOf($)>=0||Object.prototype.propertyIsEnumerable.call(ae,$)&&(We[$]=ae[$])}return We})(q,va));return p().createElement("img",pn({},K,{onLoad:this.onImageLoad()}))}},{key:"getLazyLoadImage",value:function(){var q=this.props,K=q.beforeLoad,ae=q.className,le=q.delayMethod,$=q.delayTime,Ee=q.height,We=q.placeholder,_e=q.scrollPosition,Ge=q.style,st=q.threshold,$e=q.useIntersectionObserver,nt=q.visibleByDefault,sa=q.width;return p().createElement(Nt,{beforeLoad:K,className:ae,delayMethod:le,delayTime:$,height:Ee,placeholder:We,scrollPosition:_e,style:Ge,threshold:st,useIntersectionObserver:$e,visibleByDefault:nt,width:sa},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(q){var K=this.props,ae=K.effect,le=K.height,$=K.placeholderSrc,Ee=K.width,We=K.wrapperClassName,_e=K.wrapperProps,Ge=this.state.loaded,st=Ge?" lazy-load-image-loaded":"",$e=Ge||!$?{}:{backgroundImage:"url(".concat($,")"),backgroundSize:"100% 100%"};return p().createElement("span",pn({className:We+" lazy-load-image-background "+ae+st,style:Ln(Ln({},$e),{},{color:"transparent",display:"inline-block",height:le,width:Ee})},_e),q)}},{key:"render",value:function(){var q=this.props,K=q.effect,ae=q.placeholderSrc,le=q.visibleByDefault,$=q.wrapperClassName,Ee=q.wrapperProps,We=this.getLazyLoadImage();return(K||ae)&&!le||$||Ee?this.getWrappedLazyLoadImage(We):We}}])&&Ul(R.prototype,P),Object.defineProperty(R,"prototype",{writable:!1}),qe})(p().Component);Dl.propTypes={onLoad:h.PropTypes.func,afterLoad:h.PropTypes.func,beforeLoad:h.PropTypes.func,delayMethod:h.PropTypes.string,delayTime:h.PropTypes.number,effect:h.PropTypes.string,placeholderSrc:h.PropTypes.string,threshold:h.PropTypes.number,useIntersectionObserver:h.PropTypes.bool,visibleByDefault:h.PropTypes.bool,wrapperClassName:h.PropTypes.string,wrapperProps:h.PropTypes.object},Dl.defaultProps={onLoad:function(){},afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const Ot=Dl})(),Jc.exports=u})()),Jc.exports}var vv=yv();const Pc=[{name:"Tapas",slug:"tapas",image:"https://media.bighaat.com/brands/tapasLogo.webp?w=1920&q=80"},{name:"Syngenta",slug:"syngenta",image:"https://media.bighaat.com/brands/syngentaLogo.webp?w=1920&q=80"},{name:"Indo American",slug:"indo-american",image:"https://media.bighaat.com/brands/dcm_shriram_logo.webp?w=1920&q=80"},{name:"Shriram",slug:"shriram",image:"https://media.bighaat.com/brands/seminisLogo.webp?w=1920&q=80"},{name:"Geolife",slug:"geolife",image:"https://media.bighaat.com/brands/namdhariSeedsLogo.webp?w=1920&q=80"},{name:"Bayer",slug:"bayer",image:"https://media.bighaat.com/brands/dhanukaLogo.webp?w=1920&q=80"},{name:"Seminis",slug:"seminis",image:"https://media.bighaat.com/brands/geolife-brand-logo.webp?w=1920&q=80"},{name:"Namdhari Seeds",slug:"namdhari",image:"https://media.bighaat.com/brands/excel%20industries.webp?w=1920&q=80"}],Av=()=>{const i=ra(),s=c=>{i(`/brand/${c}`)};return l.jsxs("div",{className:"brands-section",children:[l.jsxs("div",{className:"brands-header",children:[l.jsx("h2",{className:"brands-title",children:"Brands"}),l.jsx("a",{className:"brands-more-btn",onClick:()=>i("/brands"),children:"View All →"})]}),l.jsx("div",{className:"slider",children:l.jsx("div",{className:"slide-track",children:Pc.concat(Pc).map((c,u)=>l.jsx("div",{className:"brand-card",style:{"--i":u},onClick:()=>s(c.slug),children:l.jsx(vv.LazyLoadImage,{src:c.image,alt:c.name,effect:"blur",draggable:"false"})},u))})}),l.jsx("style",{children:`
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
          width: calc(160px * ${Pc.length*2});
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
      `})]})},jv=()=>{const[i,s]=S.useState(""),[c,u]=S.useState("All");let d=cv();return c!=="All"&&(d=d.filter(p=>p.category===c)),d=d.filter(p=>p.name.toLowerCase().includes(i.toLowerCase())),l.jsxs("div",{className:"offers-page",children:[l.jsx("h2",{className:"offers-page-title",children:"Today's Best Deals"}),l.jsxs("div",{className:"offers-filters",children:[l.jsx("input",{placeholder:"Search offers...",value:i,onChange:p=>s(p.target.value)}),l.jsxs("select",{value:c,onChange:p=>u(p.target.value),children:[l.jsx("option",{children:"All"}),l.jsx("option",{value:"seeds",children:"Seeds"}),l.jsx("option",{value:"fertilizers",children:"Fertilizers"}),l.jsx("option",{value:"machinery",children:"Machinery"})]})]}),l.jsx("div",{className:"offers-grid",children:d.map(p=>l.jsx($m,{item:p},p.id))}),l.jsx("style",{children:`
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
      `})]})};function wv(){return l.jsx(jv,{})}const Sv=()=>{const i=new Date().getFullYear();return l.jsxs("footer",{className:"agri-footer",children:[l.jsxs("div",{className:"footer-top",children:[l.jsxs("div",{className:"brand-block",children:[l.jsxs("div",{className:"brand-logo",children:["Agri",l.jsx("span",{children:"Tech"})]}),l.jsx("p",{className:"brand-tag",children:"Quality agri products at honest prices. Seeds, fertilizers, and machinery—delivered fast."}),l.jsxs("div",{className:"socials",children:[l.jsx("a",{"aria-label":"Facebook",href:"#",className:"social",children:l.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M22 12a10 10 0 1 0-11.563 9.874v-6.987H7.898V12h2.54V9.797c0-2.506 1.493-3.89 3.778-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.772-1.63 1.563V12h2.773l-.443 2.887h-2.33v6.987A10.002 10.002 0 0 0 22 12z"})})}),l.jsx("a",{"aria-label":"Instagram",href:"#",className:"social",children:l.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.997.24 2.69.512a5.4 5.4 0 0 1 1.95 1.268 5.4 5.4 0 0 1 1.268 1.95c.272.693.456 1.52.512 2.69.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.997-.512 2.69a5.4 5.4 0 0 1-1.268 1.95 5.4 5.4 0 0 1-1.95 1.268c-.693.272-1.52.456-2.69.512-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.997-.24-2.69-.512a5.4 5.4 0 0 1-1.95-1.268 5.4 5.4 0 0 1-1.268-1.95c-.272-.693-.456-1.52-.512-2.69C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.997.512-2.69a5.4 5.4 0 0 1 1.268-1.95 5.4 5.4 0 0 1 1.95-1.268c.693-.272 1.52-.456 2.69-.512C8.416 2.175 8.796 2.163 12 2.163zm0 1.8c-3.16 0-3.532.012-4.775.069-1.03.047-1.59.219-1.96.364-.493.191-.846.418-1.216.788s-.597.723-.788 1.216c-.145.37-.317.93-.364 1.96-.057 1.243-.069 1.615-.069 4.775s.012 3.532.069 4.775c.047 1.03.219 1.59.364 1.96.191.493.418.846.788 1.216s.723.597 1.216.788c.37.145.93.317 1.96.364 1.243.057 1.615.069 4.775.069s3.532-.012 4.775-.069c1.03-.047 1.59-.219 1.96-.364.493-.191.846-.418 1.216-.788s.597-.723.788-1.216c.145-.37.317-.93.364-1.96.057-1.243.069-1.615.069-4.775s-.012-3.532-.69-4.775c-.047-1.03-.219-1.59-.364-1.96a3.6 3.6 0 0 0-.788-1.216 3.6 3.6 0 0 0-1.216-.788c-.37-.145-.93-.317-1.96-.364-1.243-.057-1.615-.069-4.775-.069zm0 3.474a5.563 5.563 0 1 1 0 11.126 5.563 5.563 0 0 1 0-11.126zm0 1.8a3.763 3.763 0 1 0 0 7.526 3.763 3.763 0 0 0 0-7.526zm5.67-2.025a1.302 1.302 0 1 1 0 2.604 1.302 1.302 0 0 1 0-2.604z"})})}),l.jsx("a",{"aria-label":"Twitter",href:"#",className:"social",children:l.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M22.46 6c-.77.35-1.6.58-2.47.69a4.29 4.29 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.32 5.71 4.25 4.25 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.58 8.58 0 0 1 2 19.54a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.71 8.71 0 0 0 22.46 6z"})})})]})]}),l.jsxs("div",{className:"newsletter",children:[l.jsx("h4",{children:"Subscribe for best offers"}),l.jsx("p",{children:"Get updates on seeds, fertilizers & machinery deals."}),l.jsxs("form",{className:"news-form",onSubmit:s=>s.preventDefault(),children:[l.jsx("input",{type:"email",placeholder:"Enter your email",required:!0}),l.jsx("button",{type:"submit",children:"Subscribe"})]})]})]}),l.jsxs("div",{className:"footer-links",children:[l.jsxs("div",{className:"link-col",children:[l.jsx("h5",{children:"Shop"}),l.jsx(be,{to:"/category/seeds",children:"Seeds"}),l.jsx(be,{to:"/category/fertilizers",children:"Fertilizers"}),l.jsx(be,{to:"/category/farm-machinery",children:"Farm Machinery"}),l.jsx(be,{to:"/offers-today",children:"Today’s Offers"})]}),l.jsxs("div",{className:"link-col",children:[l.jsx("h5",{children:"Help"}),l.jsx(be,{to:"/help/faq",children:"FAQ"}),l.jsx(be,{to:"/help/returns",children:"Returns & Refunds"}),l.jsx(be,{to:"/help/shipping",children:"Shipping"}),l.jsx(be,{to:"/contact",children:"Contact Us"})]}),l.jsxs("div",{className:"link-col",children:[l.jsx("h5",{children:"Company"}),l.jsx(be,{to:"/about",children:"About Us"}),l.jsx(be,{to:"/careers",children:"Careers"}),l.jsx(be,{to:"/terms",children:"Terms of Use"}),l.jsx(be,{to:"/privacy",children:"Privacy Policy"})]}),l.jsxs("div",{className:"link-col contact",children:[l.jsx("h5",{children:"Contact"}),l.jsx("p",{children:"📍 Hyderabad, India"}),l.jsx("p",{children:"✉️ support@agritech.com"}),l.jsx("p",{children:"📞 +91 98765 43210"}),l.jsx("p",{children:"Mon–Sat: 9:00 AM – 7:00 PM"})]}),l.jsxs("div",{className:"link-col",children:[l.jsx("h5",{children:"Login"}),l.jsx(be,{to:"/login",children:"Login as User"}),l.jsx(be,{to:"/admin-login",children:"Login as Admin"}),l.jsx(be,{to:"/vendor-login",children:"Login as Vendor"})]})]}),l.jsxs("div",{className:"footer-bottom",children:[l.jsxs("p",{children:["© ",i," AgriTech. All rights reserved."]}),l.jsxs("div",{className:"payments",children:[l.jsx("span",{className:"pill",children:"UPI"}),l.jsx("span",{className:"pill",children:"NetBanking"}),l.jsx("span",{className:"pill",children:"Cards"}),l.jsx("span",{className:"pill",children:"COD"})]})]}),l.jsx("style",{children:`
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
      `})]})},Ev=()=>{const[i,s]=S.useState(!0);return S.useEffect(()=>{const c=setInterval(()=>{s(u=>!u)},4e3);return()=>clearInterval(c)},[]),l.jsxs("div",{className:"trust-rotator-wrapper",children:[l.jsx("div",{className:`banner ${i?"visible":"hidden"}`,children:l.jsx(xv,{})}),l.jsx("div",{className:`banner ${i?"hidden":"visible"}`,children:l.jsx(bv,{})}),l.jsx("style",{children:`
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
      `})]})},Nv=()=>l.jsxs("div",{children:[l.jsx(ps,{}),l.jsx(tv,{}),l.jsx(nv,{}),l.jsx(uv,{}),l.jsx(pv,{}),l.jsx(iv,{}),l.jsx(Av,{}),l.jsx(rv,{}),l.jsx(Ev,{}),l.jsx(sv,{}),l.jsx(gv,{}),l.jsx(Sv,{})]}),Ic=()=>{const[i,s]=S.useState({name:"",email:"",phone:"",message:""}),c=d=>{s({...i,[d.target.name]:d.target.value})},u=d=>{d.preventDefault(),alert("Thank you! Your message has been submitted ✅"),s({name:"",email:"",phone:"",message:""})};return l.jsxs("div",{className:"contact-wrapper",children:[l.jsx("h1",{className:"contact-title",children:"Contact Us"}),l.jsx("p",{className:"contact-sub",children:"We are here to help and answer your questions"}),l.jsxs("div",{className:"contact-container",children:[l.jsxs("div",{className:"contact-info",children:[l.jsx("h2",{children:"Get in Touch"}),l.jsx("p",{children:"Feel free to reach out to us for support, product inquiries or partnership opportunities."}),l.jsxs("div",{className:"info-row",children:[l.jsx("strong",{children:"📍 Address:"}),l.jsx("span",{children:"Hyderabad, Telangana, India"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("strong",{children:"📞 Phone:"}),l.jsx("span",{children:"+91 98765 43210"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("strong",{children:"✉️ Email:"}),l.jsx("span",{children:"support@agritechfarm.com"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("strong",{children:"🕒 Working Hours:"}),l.jsx("span",{children:"Mon - Sat : 9:00 AM - 7:00 PM"})]})]}),l.jsxs("form",{className:"contact-form",onSubmit:u,children:[l.jsx("input",{type:"text",name:"name",placeholder:"Your Name",value:i.name,onChange:c,required:!0}),l.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:i.email,onChange:c,required:!0}),l.jsx("input",{type:"tel",name:"phone",placeholder:"Phone Number",value:i.phone,onChange:c,required:!0}),l.jsx("textarea",{name:"message",placeholder:"Write your message...",rows:"5",value:i.message,onChange:c,required:!0}),l.jsx("button",{type:"submit",children:"Send Message"})]})]}),l.jsx("style",{children:`
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
      `})]})},Wc=()=>{const i=[{icon:"🚚",title:"Fast Delivery",desc:"Quick delivery to your doorstep"},{icon:"🛡️",title:"Trusted Quality",desc:"Verified & lab-tested products"},{icon:"💬",title:"24/7 Support",desc:"We are always here to help"},{icon:"💵",title:"Easy Returns",desc:"Hassle-free replacement guarantee"}];return l.jsxs("div",{className:"services-wrapper",children:[l.jsx("div",{className:"services-container",children:i.map((s,c)=>l.jsxs("div",{className:"service-box",children:[l.jsx("div",{className:"service-icon",children:s.icon}),l.jsx("h3",{children:s.title}),l.jsx("p",{children:s.desc})]},c))}),l.jsx("style",{children:`
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
      `})]})},_c=()=>{const i=[{name:"Ravi Kumar",role:"Founder & CEO",image:"https://i.postimg.cc/g2cwQwcS/avatar1.png"},{name:"Priya Sharma",role:"Agriculture Expert",image:"https://i.postimg.cc/mD4zGNyM/avatar2.png"},{name:"Arun Verma",role:"Supply Chain Manager",image:"https://i.postimg.cc/3xk6Gtxz/avatar3.png"},{name:"Sneha Patil",role:"Customer Success Lead",image:"https://i.postimg.cc/fRYp57QZ/avatar4.png"}];return l.jsxs("div",{className:"about-wrap",children:[l.jsxs("div",{className:"about-header",children:[l.jsx("h1",{children:"About Us"}),l.jsx("p",{children:"Your trusted partner in modern agriculture"})]}),l.jsxs("div",{className:"about-content",children:[l.jsx("p",{children:"We are an AgriTech driven marketplace focused on providing farmers with the highest quality seeds, fertilizers, pesticides, tools and farming equipment at fair and transparent prices. Our goal is to empower farmers with reliable products, trusted guidance, and seamless last-mile delivery."}),l.jsx("p",{children:"Agriculture is the backbone of our nation — and we believe farmers deserve both respect and access to the best resources. We work with verified manufacturers, certified suppliers, agronomists, and high-trust distributors to ensure genuine, result-driven products reach you on time."})]}),l.jsxs("div",{className:"about-section",children:[l.jsx("h2",{children:"Our Mission"}),l.jsx("p",{children:"To make quality agri-products accessible, affordable, and reliable for every farmer — helping them increase productivity, crop yield, and profit margins."})]}),l.jsxs("div",{className:"about-section",children:[l.jsx("h2",{children:"What We Offer"}),l.jsxs("ul",{children:[l.jsx("li",{children:"✔ High-quality seeds and fertilizers"}),l.jsx("li",{children:"✔ Trusted and certified farming products"}),l.jsx("li",{children:"✔ Farm tools, machinery & accessories"}),l.jsx("li",{children:"✔ 24/7 customer support in your language"}),l.jsx("li",{children:"✔ Fast and secure delivery across regions"})]})]}),l.jsxs("div",{className:"about-section",children:[l.jsx("h2",{children:"Our Promise"}),l.jsx("p",{children:"Transparent pricing. Genuine brands. Expert support. Because farmers deserve the best — always."})]}),l.jsxs("div",{className:"about-section team-section",children:[l.jsx("h2",{children:"Meet Our Team"}),l.jsx("div",{className:"team-grid",children:i.map((s,c)=>l.jsxs("div",{className:"team-card",children:[l.jsx("img",{src:s.image,alt:s.name}),l.jsx("h3",{children:s.name}),l.jsx("p",{children:s.role})]},c))})]}),l.jsx("style",{children:`
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
      `})]})};function zv(){return l.jsx(lv,{})}function Cv(){const{id:i}=bb(),s=zl.find(c=>c.id===Number(i));return s?l.jsxs("div",{className:"seed-details-page",children:[l.jsxs("div",{className:"seed-details-container",children:[l.jsx("div",{className:"seed-detail-img-box",children:l.jsx("img",{src:s.image,alt:s.name})}),l.jsxs("div",{className:"seed-info",children:[l.jsx("h2",{children:s.name}),l.jsx("p",{className:"brand",children:s.brand}),l.jsxs("div",{className:"price-section",children:[l.jsxs("span",{className:"price",children:["₹",s.price]}),l.jsxs("span",{className:"mrp",children:["₹",s.mrp]})]}),l.jsxs("select",{className:"pack-select",children:[l.jsx("option",{children:"Pack Size: 10g"}),l.jsx("option",{children:"Pack Size: 25g"}),l.jsx("option",{children:"Pack Size: 50g"})]}),l.jsxs("div",{className:"btn-row",children:[l.jsx("button",{className:"buy-btn",children:"Buy Now"}),l.jsx("button",{className:"cart-btn",children:"Add to Cart"})]})]})]}),l.jsx("style",{children:`
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
      `})]}):l.jsx("h2",{style:{textAlign:"center",marginTop:"40px"},children:"Seed Not Found"})}const Ov=()=>{const[i,s]=S.useState(""),[c,u]=S.useState("All"),[d,p]=S.useState("default"),[h,x]=S.useState(1),b=12,m=["All",...new Set(Ri.map(z=>z.brand))];let y=Ri.filter(z=>z.name.toLowerCase().includes(i.toLowerCase()));c!=="All"&&(y=y.filter(z=>z.brand===c)),d==="low"&&y.sort((z,w)=>z.price-w.price),d==="high"&&y.sort((z,w)=>w.price-z.price),d==="rating"&&y.sort((z,w)=>w.rating-z.rating);const j=Math.ceil(y.length/b),H=y.slice((h-1)*b,h*b);return l.jsxs("div",{className:"fert-page",children:[l.jsx("h2",{className:"fert-title",children:"Fertilizers"}),l.jsxs("div",{className:"fert-filters",children:[l.jsx("input",{placeholder:"Search Fertilizers...",value:i,onChange:z=>s(z.target.value)}),l.jsx("select",{value:c,onChange:z=>u(z.target.value),children:m.map((z,w)=>l.jsx("option",{children:z},w))}),l.jsxs("select",{value:d,onChange:z=>p(z.target.value),children:[l.jsx("option",{value:"default",children:"Sort"}),l.jsx("option",{value:"low",children:"Price Low → High"}),l.jsx("option",{value:"high",children:"Price High → Low"}),l.jsx("option",{value:"rating",children:"Rating"})]})]}),l.jsx("div",{className:"fert-grid",children:H.map(z=>l.jsx(Im,{item:z},z.id))}),l.jsxs("div",{className:"fert-pagination",children:[l.jsx("button",{disabled:h===1,onClick:()=>x(h-1),children:"⟵ Prev"}),l.jsxs("span",{children:["Page ",h," of ",j]}),l.jsx("button",{disabled:h===j,onClick:()=>x(h+1),children:"Next ⟶"})]}),l.jsx("style",{children:`
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
      `})]})};function Tv(){return l.jsx(Ov,{})}const Bv=()=>{const[i,s]=S.useState(""),c=vs.filter(u=>u.name.toLowerCase().includes(i.toLowerCase()));return l.jsxs("div",{className:"mach-page",children:[l.jsx("h2",{className:"mach-title",children:"Farm Machinery"}),l.jsx("div",{className:"mach-search-box",children:l.jsx("input",{placeholder:"Search machinery...",value:i,onChange:u=>s(u.target.value)})}),l.jsx("div",{className:"mach-grid",children:c.map(u=>l.jsx(Wm,{item:u},u.id))}),l.jsx("style",{children:`
        .mach-page { max-width:1300px;margin:auto;padding:40px 20px; }
        .mach-title { text-align:center;font-size:28px;font-weight:700;color:#2a7a0e;margin-bottom:25px; }

        .mach-search-box { display:flex;justify-content:center;margin-bottom:25px; }
        .mach-search-box input {
          padding:10px 14px;border:1px solid #ccc;border-radius:6px;font-size:15px;width:280px;
        }

        .mach-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
        gap:20px; }
      `})]})};function Rv(){return l.jsx(Bv,{})}const Mv=()=>{const[i,s]=S.useState(""),[c,u]=S.useState("All");let d=fv();return c!=="All"&&(d=d.filter(p=>p.category===c)),d=d.filter(p=>p.name.toLowerCase().includes(i.toLowerCase())),l.jsxs("div",{className:"bs-page",children:[l.jsx("h2",{className:"bs-page-title",children:"Best Selling Products"}),l.jsxs("div",{className:"bs-filters",children:[l.jsx("input",{placeholder:"Search products...",value:i,onChange:p=>s(p.target.value)}),l.jsxs("select",{value:c,onChange:p=>u(p.target.value),children:[l.jsx("option",{children:"All"}),l.jsx("option",{value:"seeds",children:"Seeds"}),l.jsx("option",{value:"fertilizers",children:"Fertilizers"}),l.jsx("option",{value:"machinery",children:"Farm Machinery"})]})]}),l.jsx("div",{className:"bs-grid",children:d.map(p=>l.jsx(eg,{item:p},p.id))}),l.jsx("style",{children:`
        .bs-page { max-width:1300px;margin:auto;padding:40px 20px; }
        .bs-page-title { text-align:center;font-size:28px;font-weight:700;color:#2a7a0e;margin-bottom:25px; }

        .bs-filters { display:flex;gap:12px;justify-content:center;margin-bottom:25px; }
        .bs-filters input,.bs-filters select {
          padding:10px 14px;border:1px solid #ccc;border-radius:6px;font-size:15px;
        }

        .bs-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px; }
      `})]})};function Uv(){return l.jsx(Mv,{})}let tg=[{firstName:"Raju",lastName:"Seeds",email:"vendor@gmail.com",password:"123",phoneNumber:"9876543210",businessName:"Raju Seeds Store",businessType:"Seed Supplier",address:"Guntur, Andhra Pradesh",city:"Guntur",state:"AP",pincode:"522001"}];const $c=JSON.parse(localStorage.getItem("vendorDB"));$c&&$c.length>0&&(tg=$c);const Dv=(i,s)=>{const c=tg.find(u=>u.email===i&&u.password===s);if(!c)throw new Error("Invalid Email or Password");return sessionStorage.setItem("vendorSession",JSON.stringify(c)),c};let Cl=[{id:1,name:"Hybrid Tomato Seeds",category:"Seeds",price:150,stock:50,description:"High-yield hybrid tomato seeds ideal for warm climates.",image:"https://images.unsplash.com/photo-1603048297172-1d5a2608a2cc?auto=format&fit=crop&w=400&q=60"},{id:2,name:"Organic Fertilizer",category:"Fertilizers",price:350,stock:30,description:"Natural fertilizer with organic nutrients for soil enrichment.",image:"https://images.unsplash.com/photo-1590747854873-2c0e59c2a734?auto=format&fit=crop&w=400&q=60"},{id:3,name:"Power Sprayer",category:"Machinery",price:12e3,stock:10,description:"Durable sprayer suitable for all types of crops.",image:"https://images.unsplash.com/photo-1602526218600-8ef2e779a58c?auto=format&fit=crop&w=400&q=60"}];const eu=async()=>Promise.resolve(Cl),kv=async i=>{const s={id:Date.now(),...i};return Cl.push(s),Promise.resolve(s)},Lv=async(i,s)=>(Cl=Cl.map(c=>c.id===i?{...c,...s}:c),Promise.resolve(s)),Hv=async i=>(Cl=Cl.filter(s=>s.id!==i),Promise.resolve(!0)),qv=()=>{const[i,s]=S.useState(!0),[c,u]=S.useState(!1),[d,p]=S.useState(""),[h,x]=S.useState(""),[b,m]=S.useState(""),[y,j]=S.useState(!1),H=ra(),z=async w=>{w.preventDefault(),m(""),j(!0);try{const T=Dv(d,h);alert(`Welcome ${T.firstName}!`),H("/vendor")}catch(T){m(T.message)}finally{j(!1)}};return l.jsxs(l.Fragment,{children:[l.jsx(ps,{}),l.jsx("div",{style:{paddingTop:"120px"},children:l.jsx("div",{className:"login-container",children:l.jsxs("div",{className:"login-card",children:[l.jsx("h2",{children:"Vendor Login"}),l.jsx("p",{children:"Manage your store, products & customers"}),l.jsxs("div",{className:"login-toggle",children:[l.jsx("button",{className:i?"active":"",onClick:()=>s(!0),children:"Email Login"}),l.jsx("button",{className:i?"":"active",onClick:()=>s(!1),children:"Phone Login"})]}),l.jsxs("form",{className:"login-form",onSubmit:z,children:[l.jsx("input",{type:i?"email":"tel",placeholder:i?"Enter your email":"Enter your phone number",value:d,onChange:w=>p(w.target.value),required:!0}),l.jsxs("div",{className:"password-field",children:[l.jsx("input",{type:c?"text":"password",placeholder:"Enter your password",value:h,onChange:w=>x(w.target.value),required:!0}),l.jsx("span",{className:"toggle-password",onClick:()=>u(!c),children:c?"Hide":"Show"})]}),b&&l.jsx("p",{className:"error-text",children:b}),l.jsx("button",{type:"submit",className:"login-btn",disabled:y,children:y?"Logging in...":"Login"})]}),l.jsx("div",{className:"divider",children:l.jsx("span",{children:"OR"})}),l.jsxs("div",{className:"sso-icons",children:[l.jsx("a",{className:"sso-btn google",children:l.jsx(hu,{size:22})}),l.jsx("a",{className:"sso-btn github",children:l.jsx(gu,{size:20})}),l.jsx("a",{className:"sso-btn facebook",children:l.jsx(mu,{size:20})}),l.jsx("a",{className:"sso-btn linkedin",children:l.jsx(xu,{size:20})})]}),l.jsxs("p",{className:"signup-text",children:["New Vendor? ",l.jsx(be,{to:"/vendor-register",children:"Register Here"})]})]})})}),l.jsx("style",{children:`
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
      `})]})},Vv=()=>{const i=ra(),[s,c]=S.useState(!1),[u,d]=S.useState({firstName:"",lastName:"",email:"",phoneNumber:"",password:"",businessName:"",businessType:"",gstNumber:"",address:"",city:"",state:"",pincode:""}),[p,h]=S.useState(null),[x,b]=S.useState(null),m=z=>{d({...u,[z.target.name]:z.target.value})},y=z=>{h(z.target.files[0])},j=z=>{b(z.target.files[0])},H=async z=>{z.preventDefault(),c(!0);const w=new FormData;Object.keys(u).forEach(T=>w.append(T,u[T])),p&&w.append("businessCertificate",p),x&&w.append("profileImage",x);try{const T=await registerVendor(w);alert("Vendor Registration Successful ✅ Please wait for approval."),i("/vendor-login")}catch(T){alert(T.message||"Registration failed")}finally{c(!1)}};return l.jsxs("div",{className:"reg-container",children:[l.jsxs("div",{className:"reg-card",children:[l.jsx("h2",{children:"Vendor Registration"}),l.jsx("p",{children:"Register your business and start selling on AgriTech"}),l.jsxs("form",{className:"reg-form",onSubmit:H,children:[l.jsxs("div",{className:"row",children:[l.jsx("input",{type:"text",name:"firstName",placeholder:"First Name",onChange:m,required:!0}),l.jsx("input",{type:"text",name:"lastName",placeholder:"Last Name",onChange:m,required:!0})]}),l.jsx("input",{type:"email",name:"email",placeholder:"Email",onChange:m,required:!0}),l.jsx("input",{type:"tel",name:"phoneNumber",placeholder:"Phone Number",onChange:m,required:!0}),l.jsx("input",{type:"password",name:"password",placeholder:"Password",onChange:m,required:!0}),l.jsx("input",{type:"text",name:"businessName",placeholder:"Business / Shop Name",onChange:m,required:!0}),l.jsxs("select",{name:"businessType",onChange:m,required:!0,children:[l.jsx("option",{value:"",children:"Select Business Type"}),l.jsx("option",{value:"Seed Supplier",children:"Seed Supplier"}),l.jsx("option",{value:"Farmer Producer Group",children:"Farmer Producer Group"}),l.jsx("option",{value:"Fertilizer Dealer",children:"Fertilizer Dealer"}),l.jsx("option",{value:"Machinery Supplier",children:"Machinery Supplier"})]}),l.jsx("input",{type:"text",name:"gstNumber",placeholder:"GST Number (Optional)",onChange:m}),l.jsx("textarea",{name:"address",placeholder:"Full Business Address",rows:"3",onChange:m,required:!0}),l.jsxs("div",{className:"row",children:[l.jsx("input",{type:"text",name:"city",placeholder:"City",onChange:m,required:!0}),l.jsx("input",{type:"text",name:"state",placeholder:"State",onChange:m,required:!0})]}),l.jsx("input",{type:"number",name:"pincode",placeholder:"Pincode",onChange:m,required:!0}),l.jsx("label",{children:"Upload Business Certificate (PDF/JPG/PNG)"}),l.jsx("input",{type:"file",onChange:y,required:!0}),l.jsx("label",{children:"Profile Image (Optional)"}),l.jsx("input",{type:"file",onChange:j}),l.jsx("button",{type:"submit",className:"reg-btn",disabled:s,children:s?"Registering...":"Register"})]})]}),l.jsx("style",{children:`
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
 */const Qv=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yv=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,c,u)=>u?u.toUpperCase():c.toLowerCase()),am=i=>{const s=Yv(i);return s.charAt(0).toUpperCase()+s.slice(1)},ag=(...i)=>i.filter((s,c,u)=>!!s&&s.trim()!==""&&u.indexOf(s)===c).join(" ").trim(),Gv=i=>{for(const s in i)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=S.forwardRef(({color:i="currentColor",size:s=24,strokeWidth:c=2,absoluteStrokeWidth:u,className:d="",children:p,iconNode:h,...x},b)=>S.createElement("svg",{ref:b,...Kv,width:s,height:s,stroke:i,strokeWidth:u?Number(c)*24/Number(s):c,className:ag("lucide",d),...!p&&!Gv(x)&&{"aria-hidden":"true"},...x},[...h.map(([m,y])=>S.createElement(m,y)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=(i,s)=>{const c=S.forwardRef(({className:u,...d},p)=>S.createElement(Zv,{ref:p,iconNode:s,className:ag(`lucide-${Qv(am(i))}`,`lucide-${i}`,u),...d}));return c.displayName=am(i),c};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],nm=Me("arrow-down",Xv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],lm=Me("arrow-up-down",Fv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],im=Me("arrow-up",Jv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],ju=Me("bell",Pv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ng=Me("chevron-left",Iv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],lg=Me("chevron-right",Wv);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],$v=Me("circle-check-big",_v);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]],t2=Me("circle-pause",e2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],ig=Me("circle-plus",a2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],rg=Me("circle-user-round",n2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],sg=Me("circle-x",l2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],og=Me("clipboard-list",i2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],s2=Me("funnel",r2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],cg=Me("info",o2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],ug=Me("layout-dashboard",c2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],wu=Me("log-out",u2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],dg=Me("menu",d2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],p2=Me("moon",f2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],fg=Me("package",h2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],g2=Me("pen",m2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],b2=Me("phone-call",x2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],v2=Me("phone",y2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],j2=Me("save",A2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],S2=Me("search",w2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],pg=Me("settings",E2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],z2=Me("smartphone",N2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],hg=Me("square-pen",C2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],T2=Me("sun",O2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],mg=Me("trash-2",B2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],M2=Me("user-check",R2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m14.305 16.53.923-.382",key:"1itpsq"}],["path",{d:"m15.228 13.852-.923-.383",key:"eplpkm"}],["path",{d:"m16.852 12.228-.383-.923",key:"13v3q0"}],["path",{d:"m16.852 17.772-.383.924",key:"1i8mnm"}],["path",{d:"m19.148 12.228.383-.923",key:"1q8j1v"}],["path",{d:"m19.53 18.696-.382-.924",key:"vk1qj3"}],["path",{d:"m20.772 13.852.924-.383",key:"n880s0"}],["path",{d:"m20.772 16.148.924.383",key:"1g6xey"}],["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],D2=Me("user-cog",U2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],L2=Me("user-x",k2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],gg=Me("user",H2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],V2=Me("users",q2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],xg=Me("wrench",Q2);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],G2=Me("x",Y2);function K2({onAddProduct:i}){const s=ra();return l.jsxs("header",{className:"vendor-navbar-inner",children:[l.jsx("div",{className:"nav-left",children:l.jsx("h2",{children:"🌿 Vendor Dashboard"})}),l.jsxs("div",{className:"nav-right",children:[l.jsxs("button",{className:"add-btn",onClick:()=>{i?i():s("/vendor/products")},children:[l.jsx(ig,{size:18})," Add Product"]}),l.jsxs("div",{className:"icon-btn",title:"Notifications",children:[l.jsx(ju,{size:20}),l.jsx("span",{className:"badge",children:"3"})]}),l.jsxs("div",{className:"vendor-profile",children:[l.jsx(rg,{size:28}),l.jsx("span",{className:"name",children:"GreenGrow Traders"})]})]}),l.jsx("style",{jsx:"true",children:`
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
      `})]})}function Z2(){const i=ra(),s=pa(),[c,u]=S.useState(!1),[d,p]=S.useState(!0);S.useEffect(()=>{const m=window.matchMedia("(max-width: 992px)"),y=j=>{const H=j.matches;u(H),p(!H)};return y(m),m.addEventListener?.("change",y),m.addListener?.(y),()=>{m.removeEventListener?.("change",y),m.removeListener?.(y)}},[]),S.useEffect(()=>{c&&p(!1)},[s.pathname,c]);const h=()=>{sessionStorage.removeItem("vendorSession"),i("/vendor-login")},x=[{to:"/vendor/dashboard",icon:ug,label:"Dashboard"},{to:"/vendor/products",icon:fg,label:"Products"},{to:"/vendor/orders",icon:og,label:"Orders"},{to:"/vendor/profile",icon:gg,label:"Profile"},{to:"/vendor/settings",icon:pg,label:"Settings"}],b=[{to:"/vendor/about",icon:cg,label:"About Us"},{to:"/vendor/services",icon:xg,label:"Services"},{to:"/vendor/contact",icon:v2,label:"Contact Us"}];return l.jsxs(l.Fragment,{children:[l.jsx("button",{className:"hamburger",onClick:()=>p(m=>!m),"aria-label":d?"Close sidebar":"Open sidebar",children:d?l.jsx(G2,{size:20}):l.jsx(dg,{size:20})}),c&&d&&l.jsx("div",{className:"overlay",onClick:()=>p(!1)}),l.jsxs("aside",{className:`vendor-sidebar ${d?"open":"closed"}`,children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsx("div",{className:"logo",children:"🌿"}),l.jsx("h2",{className:"title",children:"Vendor Panel"})]}),l.jsxs("nav",{className:"nav",children:[l.jsx("div",{className:"nav-group-title",children:"MAIN MENU"}),x.map(({to:m,icon:y,label:j})=>l.jsxs(is,{to:m,onClick:()=>c&&p(!1),className:({isActive:H})=>`nav-item ${H?"active":""}`,children:[l.jsx(y,{size:18}),l.jsx("span",{children:j})]},m)),l.jsx("div",{className:"nav-group-title",style:{marginTop:"10px"},children:"MORE"}),b.map(({to:m,icon:y,label:j})=>l.jsxs(is,{to:m,onClick:()=>c&&p(!1),className:({isActive:H})=>`nav-item ${H?"active":""}`,children:[l.jsx(y,{size:18}),l.jsx("span",{children:j})]},m))]}),l.jsx("div",{className:"bottom",children:l.jsxs("button",{className:"logout",onClick:h,children:[l.jsx(wu,{size:16})," Logout"]})})]}),l.jsx("style",{jsx:"true",children:`
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
      `})]})}function X2(){return l.jsxs("div",{className:"vendor-layout",children:[l.jsx("header",{className:"vendor-navbar",children:l.jsx(K2,{})}),l.jsxs("div",{className:"vendor-body",children:[l.jsx("div",{className:"vendor-sidebar-wrapper",children:l.jsx(Z2,{})}),l.jsx("main",{className:"vendor-content",children:l.jsx(gm,{})})]}),l.jsx("style",{jsx:"true",children:`
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
      `})]})}const F2=()=>{const i=[{label:"Mon",value:12},{label:"Tue",value:18},{label:"Wed",value:10},{label:"Thu",value:25},{label:"Fri",value:30},{label:"Sat",value:20},{label:"Sun",value:15}],s=[{name:"Organic Fertilizer",sales:240},{name:"Hybrid Tomato Seeds",sales:190},{name:"Power Sprayer",sales:160},{name:"Wheat Seeds",sales:120}];return l.jsxs("div",{className:"vendor-dashboard",children:[l.jsxs("section",{className:"header-section",children:[l.jsx("div",{className:"welcome",children:"Welcome, Raju 👋"}),l.jsx("h1",{className:"heading",children:"Vendor Overview"}),l.jsx("p",{className:"sub",children:"Your business performance insights this week."})]}),l.jsxs("section",{className:"stats",children:[l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"icon",children:"🌾"}),l.jsx("h4",{children:"Products"}),l.jsx("p",{children:"18"}),l.jsx("span",{className:"delta",children:"+5%"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"icon",children:"🛒"}),l.jsx("h4",{children:"Orders"}),l.jsx("p",{children:"45"}),l.jsx("span",{className:"delta",children:"+12%"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"icon",children:"💰"}),l.jsx("h4",{children:"Earnings"}),l.jsx("p",{children:"₹42,000"}),l.jsx("span",{className:"delta",children:"+8%"})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"icon",children:"⭐"}),l.jsx("h4",{children:"Rating"}),l.jsx("p",{children:"4.6 / 5"}),l.jsx("span",{className:"delta",children:"+0.2"})]})]}),l.jsxs("section",{className:"cards",children:[l.jsxs("div",{className:"panel",children:[l.jsxs("div",{className:"panel-head",children:[l.jsx("h3",{children:"Weekly Sales"}),l.jsx("span",{className:"hint",children:"Last 7 days"})]}),l.jsx("div",{className:"bar-chart",children:i.map(c=>l.jsxs("div",{className:"bar-wrap",children:[l.jsx("div",{className:"bar",style:{height:`${c.value*6}px`},title:`${c.label}: ${c.value} orders`}),l.jsx("span",{className:"lbl",children:c.label})]},c.label))})]}),l.jsxs("div",{className:"panel",children:[l.jsxs("div",{className:"panel-head",children:[l.jsx("h3",{children:"Top Selling Products"}),l.jsx("span",{className:"hint",children:"Based on order volume"})]}),l.jsx("ul",{className:"list",children:s.map(c=>l.jsxs("li",{className:"li",children:[l.jsx("span",{children:c.name}),l.jsx("span",{className:"pill",children:c.sales})]},c.name))})]})]}),l.jsx("style",{jsx:"true",children:`
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
      `})]})};function J2({products:i,onView:s,onEdit:c,onDelete:u}){return l.jsxs("section",{className:"product-grid",children:[i.length>0?i.map(d=>l.jsxs("div",{className:"product-card",children:[l.jsx("div",{className:"image-wrapper",onClick:()=>s(d),children:l.jsx("img",{src:d.image||"https://via.placeholder.com/400x300?text=No+Image",alt:d.name,className:"product-image"})}),l.jsxs("div",{className:"product-info",children:[l.jsx("h4",{onClick:()=>s(d),children:d.name}),l.jsx("p",{className:"category",children:d.category}),l.jsxs("div",{className:"meta",children:[l.jsxs("span",{className:"price",children:["₹",d.price]}),l.jsxs("span",{className:"stock",children:["Stock: ",d.stock]})]})]}),l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"edit-btn",onClick:()=>c(d),children:"✏️ Edit"}),l.jsx("button",{className:"delete-btn",onClick:()=>u(d.id),children:"🗑️ Delete"})]})]},d.id)):l.jsx("p",{className:"no-products",children:"No products to display."}),l.jsx("style",{jsx:"true",children:`
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
      `})]})}function P2({product:i,onClose:s,onEdit:c,onDelete:u}){return i?l.jsx("div",{className:"overlay",children:l.jsxs("div",{className:"details-card",children:[l.jsx("div",{className:"image-section",children:l.jsx("img",{src:i.image||"https://via.placeholder.com/300",alt:i.name,className:"product-img"})}),l.jsxs("div",{className:"info-section",children:[l.jsx("h3",{children:i.name}),l.jsxs("p",{children:[l.jsx("strong",{children:"Category:"})," ",i.category]}),l.jsxs("p",{children:[l.jsx("strong",{children:"Price:"})," ₹",i.price]}),l.jsxs("p",{children:[l.jsx("strong",{children:"Stock:"})," ",i.stock]}),l.jsxs("p",{children:[l.jsx("strong",{children:"Description:"})," ",i.description||"No description available."]}),l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"edit",onClick:()=>c(i),children:"✏️ Edit"}),l.jsx("button",{className:"delete",onClick:()=>u(i.id),children:"🗑️ Delete"}),l.jsx("button",{className:"close",onClick:s,children:"❌ Close"})]})]}),l.jsx("style",{jsx:"true",children:`
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
        `})]})}):null}function I2({formData:i,setFormData:s,onSubmit:c,onCancel:u,editMode:d}){const p=S.useRef(),h=x=>{const b=x.target.files[0];if(b){const m=new FileReader;m.onload=()=>s({...i,image:m.result}),m.readAsDataURL(b)}};return l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal",children:[l.jsx("h3",{children:d?"Edit Product":"Add New Product"}),l.jsxs("form",{onSubmit:c,children:[l.jsx("input",{type:"text",placeholder:"Product Name",value:i.name,onChange:x=>s({...i,name:x.target.value}),required:!0}),l.jsx("input",{type:"text",placeholder:"Category",value:i.category,onChange:x=>s({...i,category:x.target.value}),required:!0}),l.jsx("input",{type:"number",placeholder:"Price (₹)",value:i.price,onChange:x=>s({...i,price:x.target.value}),required:!0}),l.jsx("input",{type:"number",placeholder:"Stock Quantity",value:i.stock,onChange:x=>s({...i,stock:x.target.value}),required:!0}),l.jsx("textarea",{placeholder:"Product Description",value:i.description,onChange:x=>s({...i,description:x.target.value})}),l.jsxs("div",{className:"upload-section",children:[l.jsx("label",{children:"Upload Product Image:"}),l.jsx("input",{type:"file",accept:"image/*",ref:p,onChange:h}),i.image&&l.jsx("img",{src:i.image,alt:"preview",className:"preview"})]}),l.jsxs("div",{className:"form-actions",children:[l.jsx("button",{type:"submit",children:d?"Update Product":"Add Product"}),l.jsx("button",{type:"button",onClick:u,children:"Cancel"})]})]}),l.jsx("style",{jsx:"true",children:`
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
        `})]})})}function W2(){const[i,s]=S.useState([]),[c,u]=S.useState(null),[d,p]=S.useState(!1),[h,x]=S.useState(!1),[b,m]=S.useState({name:"",category:"",price:"",stock:"",description:"",image:""});S.useEffect(()=>{eu().then(s)},[]);const y=async T=>{T.preventDefault(),h&&c?await Lv(c.id,b):await kv(b);const U=await eu();s(U),p(!1),x(!1),u(null),m({name:"",category:"",price:"",stock:"",description:"",image:""})},j=T=>{u(T),m(T),x(!0),p(!0)},H=T=>{u(T)},z=async T=>{if(window.confirm("Are you sure you want to delete this product?")){await Hv(T);const U=await eu();s(U),u(null)}},w=()=>{m({name:"",category:"",price:"",stock:"",description:"",image:""}),x(!1),p(!0)};return l.jsxs("div",{className:"vendor-layout",children:[l.jsx("div",{className:"sidebar-area"}),l.jsxs("div",{className:"main-content",children:[l.jsxs("header",{className:"page-header",children:[l.jsx("h2",{children:"Vendor Product Management"}),l.jsx("p",{children:"Manage, edit, and track your listed products easily."}),l.jsx("button",{className:"add-btn",onClick:w,children:"➕ Add Product"})]}),l.jsx(J2,{products:i,onView:H,onEdit:j,onDelete:z}),c&&!d&&l.jsx(P2,{product:c,onClose:()=>u(null),onEdit:()=>j(c),onDelete:z}),d&&l.jsx(I2,{formData:b,setFormData:m,onSubmit:y,onCancel:()=>p(!1),editMode:h})]}),l.jsx("style",{jsx:"true",children:`
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
      `})]})}function _2(){const[i,s]=S.useState(""),c=[{id:"ORD-1001",customer:"Rahul Sharma",amount:1899,status:"Pending",date:"2025-02-10"},{id:"ORD-1002",customer:"Priya Verma",amount:2999,status:"Shipped",date:"2025-02-09"},{id:"ORD-1003",customer:"Arun Kumar",amount:1199,status:"Delivered",date:"2025-02-08"},{id:"ORD-1004",customer:"Meghana Rao",amount:899,status:"Cancelled",date:"2025-02-07"},{id:"ORD-1005",customer:"Suresh R",amount:2499,status:"Delivered",date:"2025-02-06"}],u={Pending:"#eab308",Shipped:"#3b82f6",Delivered:"#16a34a",Cancelled:"#dc2626"};return l.jsxs("div",{className:"orders-page",children:[l.jsxs("div",{className:"header",children:[l.jsx("h1",{children:"📦 Orders"}),l.jsx("p",{children:"Manage your orders, view details, update statuses, and track progress."})]}),l.jsxs("div",{className:"actions",children:[l.jsxs("div",{className:"search-box",children:[l.jsx(S2,{size:18}),l.jsx("input",{type:"text",placeholder:"Search by Order ID or Customer Name...",value:i,onChange:d=>s(d.target.value)})]}),l.jsxs("button",{className:"filter-btn",children:[l.jsx(s2,{size:18}),"Filter"]})]}),l.jsx("div",{className:"table-wrapper",children:l.jsxs("table",{className:"order-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Order ID"}),l.jsx("th",{children:"Customer"}),l.jsx("th",{children:"Amount"}),l.jsx("th",{children:"Status"}),l.jsx("th",{children:"Date"}),l.jsx("th",{children:"Action"})]})}),l.jsx("tbody",{children:c.filter(d=>d.id.toLowerCase().includes(i.toLowerCase())||d.customer.toLowerCase().includes(i.toLowerCase())).map(d=>l.jsxs("tr",{children:[l.jsx("td",{children:d.id}),l.jsx("td",{children:d.customer}),l.jsxs("td",{children:["₹",d.amount]}),l.jsx("td",{children:l.jsx("span",{className:"status",style:{background:u[d.status]+"22",color:u[d.status],border:`1px solid ${u[d.status]}55`},children:d.status})}),l.jsx("td",{children:d.date}),l.jsx("td",{children:l.jsx("button",{className:"view-btn",children:"View"})})]},d.id))})]})}),l.jsxs("div",{className:"pagination",children:[l.jsx("button",{className:"page-btn",children:l.jsx(ng,{size:18})}),l.jsx("span",{className:"page-number",children:"1"}),l.jsx("button",{className:"page-btn",children:l.jsx(lg,{size:18})})]}),l.jsx("style",{jsx:"true",children:`
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
      `})]})}function $2(){const[i,s]=S.useState({name:"GreenGrow Traders",email:"vendor@grow.com",phone:"9876543210",shopName:"GreenGrow Organic Store",address:"Hyderabad, Telangana",gst:"22ABCDE1234F2Z5"}),[c,u]=S.useState(!1),[d,p]=S.useState(!1),[h,x]=S.useState(i),b=j=>{x({...h,[j.target.name]:j.target.value})},m=()=>{s(h),u(!1)},y=()=>{console.log("Vendor Account Deactivated!"),alert("Vendor account has been deactivated."),p(!1)};return l.jsxs("div",{className:"profile-page",children:[l.jsx("h1",{className:"title",children:"👤 Vendor Profile"}),l.jsx("p",{className:"subtitle",children:"View and manage your vendor profile information."}),l.jsxs("div",{className:"profile-card",children:[l.jsxs("div",{className:"avatar-section",children:[l.jsx("div",{className:"avatar",children:l.jsx("img",{src:"https://i.ibb.co/3kL4m7x/profile-avatar.png",alt:"Vendor Avatar"})}),l.jsx("h2",{children:i.name}),l.jsx("p",{className:"shop",children:i.shopName})]}),l.jsxs("div",{className:"details",children:[l.jsxs("div",{className:"info-row",children:[l.jsx("strong",{children:"Email:"}),l.jsx("span",{children:i.email})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("strong",{children:"Phone:"}),l.jsx("span",{children:i.phone})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("strong",{children:"Shop Name:"}),l.jsx("span",{children:i.shopName})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("strong",{children:"Address:"}),l.jsx("span",{children:i.address})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("strong",{children:"GST Number:"}),l.jsx("span",{children:i.gst})]}),l.jsxs("div",{className:"actions",children:[l.jsxs("button",{className:"edit-btn",onClick:()=>u(!0),children:[l.jsx(g2,{size:16})," Edit Profile"]}),l.jsxs("button",{className:"deactivate-btn",onClick:()=>p(!0),children:[l.jsx(sg,{size:16})," Deactivate Account"]})]})]})]}),c&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal",children:[l.jsx("h2",{children:"Edit Profile"}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Name"}),l.jsx("input",{name:"name",value:h.name,onChange:b})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Email"}),l.jsx("input",{name:"email",value:h.email,onChange:b})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Phone"}),l.jsx("input",{name:"phone",value:h.phone,onChange:b})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Shop Name"}),l.jsx("input",{name:"shopName",value:h.shopName,onChange:b})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Address"}),l.jsx("textarea",{name:"address",value:h.address,onChange:b,rows:"2"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"GST Number"}),l.jsx("input",{name:"gst",value:h.gst,onChange:b})]}),l.jsxs("div",{className:"modal-actions",children:[l.jsx("button",{className:"save-btn",onClick:m,children:"Save Changes"}),l.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"})]})]})}),d&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal small",children:[l.jsx("h3",{children:"Are you sure?"}),l.jsx("p",{children:"This action will permanently deactivate your vendor account."}),l.jsxs("div",{className:"modal-actions",children:[l.jsx("button",{className:"danger-btn",onClick:y,children:"Yes, Deactivate"}),l.jsx("button",{className:"cancel-btn",onClick:()=>p(!1),children:"Cancel"})]})]})}),l.jsx("style",{jsx:"true",children:`
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
      `})]})}function rm(){const[i,s]=S.useState({businessName:"GreenGrow Traders",email:"vendor@grow.com",phone:"9876543210"}),[c,u]=S.useState({currentPwd:"",newPwd:"",confirmPwd:""}),[d,p]=S.useState({email:!0,sms:!1}),[h,x]=S.useState(!1),[b,m]=S.useState(!1);function y(U){s(Y=>({...Y,[U.target.name]:U.target.value}))}function j(U){u(Y=>({...Y,[U.target.name]:U.target.value}))}function H(U){p(Y=>({...Y,[U]:!Y[U]}))}function z(){m(!0),setTimeout(()=>{m(!1),alert("Account settings saved.")},700)}function w(){if(!c.currentPwd||!c.newPwd){alert("Please fill required password fields.");return}if(c.newPwd!==c.confirmPwd){alert("New password and confirm password do not match.");return}m(!0),setTimeout(()=>{m(!1),u({currentPwd:"",newPwd:"",confirmPwd:""}),alert("Password updated successfully.")},900)}function T(){m(!0),setTimeout(()=>{m(!1),alert("Preferences saved.")},600)}return l.jsxs("div",{className:"settings-page",children:[l.jsxs("header",{className:"header",children:[l.jsx("h1",{children:"⚙️ Settings"}),l.jsx("p",{children:"Manage account, security and notifications for your vendor account."})]}),l.jsxs("div",{className:"grid",children:[l.jsxs("section",{className:"card",children:[l.jsx("h2",{children:"Account"}),l.jsx("p",{className:"muted",children:"Basic business contact information."}),l.jsxs("div",{className:"form",children:[l.jsxs("label",{children:["Business Name",l.jsx("input",{name:"businessName",value:i.businessName,onChange:y})]}),l.jsxs("label",{children:["Email",l.jsx("input",{name:"email",value:i.email,onChange:y})]}),l.jsxs("label",{children:["Phone",l.jsx("input",{name:"phone",value:i.phone,onChange:y})]}),l.jsx("div",{className:"row",children:l.jsxs("button",{className:"btn primary",onClick:z,disabled:b,children:[l.jsx(j2,{size:14})," ",b?"Saving...":"Save Account"]})})]})]}),l.jsxs("section",{className:"card",children:[l.jsx("h2",{children:"Security"}),l.jsx("p",{className:"muted",children:"Change your password to keep your account secure."}),l.jsxs("div",{className:"form",children:[l.jsxs("label",{children:["Current Password",l.jsx("input",{name:"currentPwd",type:"password",value:c.currentPwd,onChange:j})]}),l.jsxs("label",{children:["New Password",l.jsx("input",{name:"newPwd",type:"password",value:c.newPwd,onChange:j})]}),l.jsxs("label",{children:["Confirm New Password",l.jsx("input",{name:"confirmPwd",type:"password",value:c.confirmPwd,onChange:j})]}),l.jsx("div",{className:"row",children:l.jsx("button",{className:"btn danger",onClick:w,children:"Change Password"})})]})]}),l.jsxs("section",{className:"card",children:[l.jsx("h2",{children:"Notifications & Preferences"}),l.jsx("p",{className:"muted",children:"Control how you receive notifications and app preferences."}),l.jsxs("div",{className:"form",children:[l.jsxs("div",{className:"toggle-row",children:[l.jsxs("div",{className:"label",children:[l.jsx(ju,{})," Email Notifications"]}),l.jsxs("label",{className:"switch",children:[l.jsx("input",{type:"checkbox",checked:d.email,onChange:()=>H("email")}),l.jsx("span",{className:"slider"})]})]}),l.jsxs("div",{className:"toggle-row",children:[l.jsxs("div",{className:"label",children:[l.jsx(z2,{})," SMS Notifications"]}),l.jsxs("label",{className:"switch",children:[l.jsx("input",{type:"checkbox",checked:d.sms,onChange:()=>H("sms")}),l.jsx("span",{className:"slider"})]})]}),l.jsxs("div",{className:"toggle-row",children:[l.jsx("div",{className:"label",children:"Theme"}),l.jsxs("button",{className:"theme-toggle",onClick:()=>x(U=>!U),children:[h?l.jsx(p2,{}):l.jsx(T2,{})," ",h?"Dark":"Light"]})]}),l.jsx("div",{className:"row",children:l.jsx("button",{className:"btn",onClick:T,children:"Save Preferences"})})]})]})]}),l.jsx("style",{jsx:"true",children:`
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
      `})]})}const eA=[{email:"admin@gmail.com",phone:"1234567890",password:"123",firstName:"Super"}],tA=(i,s)=>{const c=eA.find(u=>(u.email===i||u.phone===i)&&u.password===s);if(!c)throw new Error("Invalid admin credentials.");return c},aA=()=>{const[i,s]=S.useState(!0),[c,u]=S.useState(!1),[d,p]=S.useState(""),[h,x]=S.useState(""),[b,m]=S.useState(""),[y,j]=S.useState(!1),H=ra(),z=async w=>{w.preventDefault(),m(""),j(!0);try{const T=tA(d,h);alert(`Welcome Admin ${T.firstName}!`),H("/admin")}catch(T){m(T.message)}finally{j(!1)}};return l.jsxs(l.Fragment,{children:[l.jsx(ps,{}),l.jsx("div",{style:{paddingTop:"120px"},children:l.jsxs("div",{className:"login-container",children:[l.jsxs("div",{className:"login-card",children:[l.jsx("h2",{children:"Admin Login"}),l.jsx("p",{children:"Access admin control panel & manage the system"}),l.jsxs("div",{className:"login-toggle",children:[l.jsx("button",{className:i?"active":"",onClick:()=>s(!0),children:"Email Login"}),l.jsx("button",{className:i?"":"active",onClick:()=>s(!1),children:"Phone Login"})]}),l.jsxs("form",{className:"login-form",onSubmit:z,children:[l.jsx("input",{type:i?"email":"tel",placeholder:i?"Enter admin email":"Enter admin phone",value:d,onChange:w=>p(w.target.value),required:!0}),l.jsxs("div",{className:"password-field",children:[l.jsx("input",{type:c?"text":"password",placeholder:"Enter admin password",value:h,onChange:w=>x(w.target.value),required:!0}),l.jsx("span",{className:"toggle-password",onClick:()=>u(!c),children:c?"Hide":"Show"})]}),b&&l.jsx("p",{className:"error-text",children:b}),l.jsx("button",{type:"submit",className:"login-btn",disabled:y,children:y?"Logging in...":"Login"})]}),l.jsx("div",{className:"divider",children:l.jsx("span",{children:"OR"})}),l.jsxs("div",{className:"sso-icons",children:[l.jsx("a",{className:"sso-btn google",children:l.jsx(hu,{size:22})}),l.jsx("a",{className:"sso-btn github",children:l.jsx(gu,{size:20})}),l.jsx("a",{className:"sso-btn facebook",children:l.jsx(mu,{size:20})}),l.jsx("a",{className:"sso-btn linkedin",children:l.jsx(xu,{size:20})})]}),l.jsxs("p",{className:"signup-text",children:["Need an Admin Account? ",l.jsx(be,{to:"/admin-register",children:"Create One"})]})]}),l.jsx("style",{children:`
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
          `})]})})]})};function nA({setSidebarOpen:i}){return l.jsxs("header",{className:"admin-navbar-inner",children:[l.jsxs("div",{className:"nav-left",children:[l.jsx("button",{className:"menu-btn",onClick:()=>i(u=>!u),children:l.jsx(dg,{size:22})}),l.jsx("h2",{children:"🛡️ Admin Dashboard"})]}),l.jsxs("div",{className:"nav-right",children:[l.jsxs("div",{className:"icon-btn",children:[l.jsx(ju,{size:20}),l.jsx("span",{className:"badge",children:5})]}),l.jsxs("div",{className:"admin-profile",children:[l.jsx(rg,{size:28}),l.jsx("span",{className:"name",children:"Administrator"})]}),l.jsxs("button",{className:"logout-btn",children:[l.jsx(wu,{size:18})," Logout"]})]}),l.jsx("style",{jsx:"true",children:`
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
      `})]})}function lA(){const i=ra(),s=()=>{localStorage.removeItem("adminToken"),i("/admin-login")};return l.jsxs("div",{className:"admin-sidebar",children:[l.jsx("div",{className:"sidebar-header",children:l.jsx("h2",{children:"Admin Panel"})}),l.jsx("div",{className:"menu-section-title",children:"MAIN MENU"}),l.jsxs("nav",{className:"menu-list",children:[l.jsx(qa,{to:"/admin/dashboard",icon:l.jsx(ug,{size:18}),label:"Dashboard"}),l.jsx(qa,{to:"/admin/users",icon:l.jsx(V2,{size:18}),label:"Users"}),l.jsx(qa,{to:"/admin/vendors",icon:l.jsx(D2,{size:18}),label:"Vendors"}),l.jsx(qa,{to:"/admin/products",icon:l.jsx(fg,{size:18}),label:"Products"}),l.jsx(qa,{to:"/admin/orders",icon:l.jsx(og,{size:18}),label:"Orders"}),l.jsx(qa,{to:"/admin/settings",icon:l.jsx(pg,{size:18}),label:"Settings"}),l.jsx(qa,{to:"/admin/services",icon:l.jsx(xg,{size:18}),label:"Services"})]}),l.jsx("div",{className:"menu-section-title",style:{marginTop:"20px"},children:"MORE"}),l.jsxs("nav",{className:"menu-list",children:[l.jsx(qa,{to:"/admin/about",icon:l.jsx(cg,{size:18}),label:"About Us"}),l.jsx(qa,{to:"/admin/support",icon:l.jsx(b2,{size:18}),label:"Support"})]}),l.jsx("div",{className:"logout-container",children:l.jsxs("button",{className:"logout-btn",onClick:s,children:[l.jsx(wu,{size:18})," Logout"]})}),l.jsx("style",{jsx:"true",children:`
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
      `})]})}function qa({to:i,icon:s,label:c}){return l.jsxs(is,{to:i,className:({isActive:u})=>u?"menu-item active":"menu-item",children:[s,l.jsx("span",{children:c})]})}function iA(){const[i,s]=S.useState(!0);return l.jsxs("div",{className:"admin-layout",children:[l.jsx("header",{className:"admin-navbar",children:l.jsx(nA,{setSidebarOpen:s})}),l.jsxs("div",{className:"admin-body",children:[l.jsx("aside",{className:`admin-sidebar-container ${i?"open":"closed"}`,children:l.jsx(lA,{})}),l.jsx("main",{className:`admin-content ${i?"with-sidebar":"full-width"}`,children:l.jsx(gm,{})})]}),l.jsx("style",{jsx:"true",children:`
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
      `})]})}function rA(){return l.jsxs("div",{className:"admin-dashboard",children:[l.jsx("h1",{className:"dashboard-title",children:"Dashboard"}),l.jsxs("div",{className:"cards-container",children:[l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-title",children:"Total Users"}),l.jsx("div",{className:"card-value",children:"120"})]}),l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-title",children:"Total Vendors"}),l.jsx("div",{className:"card-value",children:"45"})]}),l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-title",children:"Total Orders"}),l.jsx("div",{className:"card-value",children:"540"})]}),l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-title",children:"Active Users"}),l.jsx("div",{className:"card-value",children:"67"})]})]}),l.jsx("style",{children:`
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
      `})]})}function sA(){const[i,s]=S.useState([{id:1,name:"Ravi Kumar",email:"ravi@example.com",role:"Customer",status:"Active"},{id:2,name:"Meena Sharma",email:"meena@example.com",role:"Vendor",status:"Blocked"},{id:3,name:"Venu Gopal",email:"venu@example.com",role:"Customer",status:"Active"}]),[c,u]=S.useState(null),[d,p]=S.useState({name:"",email:"",role:""}),h=z=>{u(z),p({name:z.name,email:z.email,role:z.role})},x=()=>{s(z=>z.map(w=>w.id===c.id?{...w,...d}:w)),u(null)},b=z=>{window.confirm("Are you sure want to delete this user?")&&s(w=>w.filter(T=>T.id!==z))},m=z=>{s(w=>w.map(T=>T.id===z?{...T,status:T.status==="Active"?"Blocked":"Active"}:T))},y=i.length,j=i.filter(z=>z.status==="Active").length,H=i.filter(z=>z.status==="Blocked").length;return l.jsxs("div",{className:"users-page",children:[l.jsxs("div",{className:"stats-grid",children:[l.jsxs("div",{className:"stat-card",children:[l.jsx("h3",{children:"Total Users"}),l.jsx("p",{children:y})]}),l.jsxs("div",{className:"stat-card active-card",children:[l.jsx("h3",{children:"Active Users"}),l.jsx("p",{children:j})]}),l.jsxs("div",{className:"stat-card blocked-card",children:[l.jsx("h3",{children:"Blocked Users"}),l.jsx("p",{children:H})]})]}),l.jsxs("div",{className:"table-container",children:[l.jsx("h2",{children:"User Management"}),l.jsx("div",{className:"table-wrapper",children:l.jsxs("table",{className:"user-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"#ID"}),l.jsx("th",{children:"Name"}),l.jsx("th",{children:"Email"}),l.jsx("th",{children:"Role"}),l.jsx("th",{children:"Status"}),l.jsx("th",{style:{textAlign:"center"},children:"Actions"})]})}),l.jsx("tbody",{children:i.map(z=>l.jsxs("tr",{children:[l.jsx("td",{children:z.id}),l.jsx("td",{children:z.name}),l.jsx("td",{children:z.email}),l.jsx("td",{children:z.role}),l.jsx("td",{children:l.jsx("span",{className:`status-badge ${z.status.toLowerCase()}`,children:z.status})}),l.jsxs("td",{className:"action-btns",children:[l.jsx("button",{className:"edit-btn",onClick:()=>h(z),children:l.jsx(hg,{size:18})}),l.jsx("button",{className:"status-btn",onClick:()=>m(z.id),children:z.status==="Active"?l.jsx(L2,{size:18}):l.jsx(M2,{size:18})}),l.jsx("button",{className:"delete-btn",onClick:()=>b(z.id),children:l.jsx(mg,{size:18})})]})]},z.id))})]})})]}),c&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-box",children:[l.jsx("h3",{children:"Edit User"}),l.jsx("label",{children:"Name"}),l.jsx("input",{type:"text",value:d.name,onChange:z=>p({...d,name:z.target.value})}),l.jsx("label",{children:"Email"}),l.jsx("input",{type:"email",value:d.email,onChange:z=>p({...d,email:z.target.value})}),l.jsx("label",{children:"Role"}),l.jsxs("select",{value:d.role,onChange:z=>p({...d,role:z.target.value}),children:[l.jsx("option",{children:"Customer"}),l.jsx("option",{children:"Vendor"}),l.jsx("option",{children:"Admin"})]}),l.jsxs("div",{className:"modal-actions",children:[l.jsx("button",{className:"save-btn",onClick:x,children:"Save"}),l.jsx("button",{className:"cancel-btn",onClick:()=>u(null),children:"Cancel"})]})]})}),l.jsx("style",{jsx:"true",children:`
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
      `})]})}function oA(){const i=ra(),[s,c]=S.useState([{id:1,name:"GreenGrow Traders",email:"green@grow.com",phone:"9876543210",company:"GreenGrow Pvt Ltd",status:"Pending"},{id:2,name:"FreshFarm Suppliers",email:"fresh@farm.com",phone:"9123456780",company:"FreshFarm Enterprises",status:"Approved"},{id:3,name:"AgriMart",email:"contact@agrimart.com",phone:"9988776655",company:"AgriMart Services",status:"Hold"},{id:4,name:"Farmers Best",email:"hello@farmersbest.com",phone:"9012345678",company:"Farmers Best Co",status:"Approved"},{id:5,name:"UrbanAgri",email:"info@urbanagri.com",phone:"9001122334",company:"UrbanAgri Pvt",status:"Rejected"}]),[u,d]=S.useState(""),[p,h]=S.useState("All"),[x,b]=S.useState({key:"id",dir:"desc"}),[m,y]=S.useState(1),[j,H]=S.useState(5),[z,w]=S.useState(null),[T,U]=S.useState(!1),[Y,J]=S.useState({name:"",email:"",phone:"",company:"",status:"Pending"});S.useEffect(()=>y(1),[u,p,x,j]);const ee=G=>{w(G),J(G)},me=()=>{c(G=>G.map(te=>te.id===z.id?Y:te)),w(null)},re=G=>{window.confirm("Delete vendor?")&&c(te=>te.filter(A=>A.id!==G))},pe=(G,te)=>{c(A=>A.map(L=>L.id===G?{...L,status:te}:L))},ie=()=>{const G=s.length?Math.max(...s.map(te=>te.id))+1:1;c([{id:G,...Y},...s]),U(!1),J({name:"",email:"",phone:"",company:"",status:"Pending"})},se=G=>i(`/admin/vendors/${G.id}`),de=s.length,ke=s.filter(G=>G.status==="Approved").length,Te=s.filter(G=>G.status==="Pending").length,ye=s.filter(G=>G.status==="Rejected").length,Qe=s.filter(G=>G.status==="Hold").length,Ne=S.useMemo(()=>{const G=u.toLowerCase();return s.filter(te=>p!=="All"&&te.status!==p?!1:te.name.toLowerCase().includes(G)||te.email.toLowerCase().includes(G)||te.phone.toLowerCase().includes(G)||te.company.toLowerCase().includes(G)||te.status.toLowerCase().includes(G))},[s,u,p]),Ye=S.useMemo(()=>{let G=[...Ne];return G.sort((te,A)=>{let L=te[x.key].toString().toLowerCase(),X=A[x.key].toString().toLowerCase();return L<X?x.dir==="asc"?-1:1:L>X?x.dir==="asc"?1:-1:0}),G},[Ne,x]),B=Math.ceil(Ye.length/j),W=Ye.slice((m-1)*j,m*j),ne=G=>{b(te=>({key:G,dir:te.key===G&&te.dir==="asc"?"desc":"asc"}))};return l.jsxs("div",{className:"vendor-page",children:[l.jsxs("div",{className:"stats-grid",children:[l.jsxs("div",{className:"stat-card total",children:[l.jsx("h3",{children:"Total Vendors"}),l.jsx("p",{children:de})]}),l.jsxs("div",{className:"stat-card approved",children:[l.jsx("h3",{children:"Approved"}),l.jsx("p",{children:ke})]}),l.jsxs("div",{className:"stat-card pending",children:[l.jsx("h3",{children:"Pending"}),l.jsx("p",{children:Te})]}),l.jsxs("div",{className:"stat-card rejected",children:[l.jsx("h3",{children:"Rejected"}),l.jsx("p",{children:ye})]}),l.jsxs("div",{className:"stat-card hold",children:[l.jsx("h3",{children:"On Hold"}),l.jsx("p",{children:Qe})]})]}),l.jsx("div",{className:"add-button-row",children:l.jsxs("button",{className:"add-btn",onClick:()=>U(!0),children:[l.jsx(ig,{size:16})," Add New Vendor"]})}),l.jsxs("div",{className:"controls-row",children:[l.jsx("input",{className:"search-input",placeholder:"Search vendor by name, email, phone, company, status...",value:u,onChange:G=>d(G.target.value)}),l.jsxs("select",{className:"filter",value:p,onChange:G=>h(G.target.value),children:[l.jsx("option",{children:"All"}),l.jsx("option",{children:"Approved"}),l.jsx("option",{children:"Pending"}),l.jsx("option",{children:"Rejected"}),l.jsx("option",{children:"Hold"})]}),l.jsxs("button",{className:"sort-btn",onClick:()=>ne("name"),children:["Name ",x.key==="name"?x.dir==="asc"?l.jsx(im,{}):l.jsx(nm,{}):l.jsx(lm,{})]}),l.jsxs("button",{className:"sort-btn",onClick:()=>ne("status"),children:["Status ",x.key==="status"?x.dir==="asc"?l.jsx(im,{}):l.jsx(nm,{}):l.jsx(lm,{})]})]}),l.jsx("div",{className:"table-wrapper",children:l.jsxs("table",{className:"vendor-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"#ID"}),l.jsx("th",{children:"Vendor"}),l.jsx("th",{children:"Email"}),l.jsx("th",{children:"Phone"}),l.jsx("th",{children:"Company"}),l.jsx("th",{children:"Status"}),l.jsx("th",{style:{textAlign:"center"},children:"Actions"})]})}),l.jsx("tbody",{children:W.map(G=>l.jsxs("tr",{children:[l.jsx("td",{children:G.id}),l.jsx("td",{children:l.jsxs("button",{className:`vendor-name ${G.status.toLowerCase()}`,onClick:()=>se(G),children:[l.jsx(gg,{size:14})," ",G.name]})}),l.jsx("td",{children:G.email}),l.jsx("td",{children:G.phone}),l.jsx("td",{children:G.company}),l.jsx("td",{children:l.jsx("span",{className:`badge ${G.status.toLowerCase()}`,children:G.status})}),l.jsxs("td",{className:"actions",children:[l.jsx("button",{className:"btn green",onClick:()=>pe(G.id,"Approved"),children:l.jsx($v,{})}),l.jsx("button",{className:"btn yellow",onClick:()=>pe(G.id,"Hold"),children:l.jsx(t2,{})}),l.jsx("button",{className:"btn red",onClick:()=>pe(G.id,"Rejected"),children:l.jsx(sg,{})}),l.jsx("button",{className:"btn edit",onClick:()=>ee(G),children:l.jsx(hg,{})}),l.jsx("button",{className:"btn delete",onClick:()=>re(G.id),children:l.jsx(mg,{})})]})]},G.id))})]})}),l.jsxs("div",{className:"pagination",children:[l.jsx("button",{onClick:()=>y(m-1),disabled:m===1,children:l.jsx(ng,{})}),l.jsxs("span",{children:[m," / ",B]}),l.jsx("button",{onClick:()=>y(m+1),disabled:m===B,children:l.jsx(lg,{})})]}),z&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-box",children:[l.jsx("h3",{children:"Edit Vendor"}),l.jsx("input",{value:Y.name,onChange:G=>J({...Y,name:G.target.value})}),l.jsx("input",{value:Y.email,onChange:G=>J({...Y,email:G.target.value})}),l.jsx("input",{value:Y.phone,onChange:G=>J({...Y,phone:G.target.value})}),l.jsx("input",{value:Y.company,onChange:G=>J({...Y,company:G.target.value})}),l.jsxs("select",{value:Y.status,onChange:G=>J({...Y,status:G.target.value}),children:[l.jsx("option",{children:"Approved"}),l.jsx("option",{children:"Pending"}),l.jsx("option",{children:"Rejected"}),l.jsx("option",{children:"Hold"})]}),l.jsxs("div",{className:"modal-actions",children:[l.jsx("button",{className:"save",onClick:me,children:"Save"}),l.jsx("button",{className:"cancel",onClick:()=>w(null),children:"Cancel"})]})]})}),T&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-box",children:[l.jsx("h3",{children:"Add Vendor"}),l.jsx("input",{placeholder:"Name",value:Y.name,onChange:G=>J({...Y,name:G.target.value})}),l.jsx("input",{placeholder:"Email",value:Y.email,onChange:G=>J({...Y,email:G.target.value})}),l.jsx("input",{placeholder:"Phone",value:Y.phone,onChange:G=>J({...Y,phone:G.target.value})}),l.jsx("input",{placeholder:"Company",value:Y.company,onChange:G=>J({...Y,company:G.target.value})}),l.jsxs("select",{value:Y.status,onChange:G=>J({...Y,status:G.target.value}),children:[l.jsx("option",{children:"Pending"}),l.jsx("option",{children:"Approved"}),l.jsx("option",{children:"Rejected"}),l.jsx("option",{children:"Hold"})]}),l.jsxs("div",{className:"modal-actions",children:[l.jsx("button",{className:"save",onClick:ie,children:"Add"}),l.jsx("button",{className:"cancel",onClick:()=>U(!1),children:"Cancel"})]})]})}),l.jsx("style",{jsx:"true",children:`
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

      `})]})}function cA(){return l.jsx(l.Fragment,{children:l.jsxs(Mb,{children:[l.jsx(Oe,{path:"/",element:l.jsx(Nv,{})}),l.jsx(Oe,{path:"/login",element:l.jsx(Iy,{})}),l.jsx(Oe,{path:"/register",element:l.jsx(Wy,{})}),l.jsx(Oe,{path:"/contact",element:l.jsx(Ic,{})}),l.jsx(Oe,{path:"/services",element:l.jsx(Wc,{})}),l.jsx(Oe,{path:"/about",element:l.jsx(_c,{})}),l.jsx(Oe,{path:"/category/vegetable-seeds",element:l.jsx(zv,{})}),l.jsx(Oe,{path:"/seeds/:id",element:l.jsx(Cv,{})}),l.jsx(Oe,{path:"/category/fertilizers",element:l.jsx(Tv,{})}),l.jsx(Oe,{path:"/category/farm-machinery",element:l.jsx(Rv,{})}),l.jsx(Oe,{path:"/offers-today",element:l.jsx(wv,{})}),l.jsx(Oe,{path:"/best-selling",element:l.jsx(Uv,{})}),l.jsx(Oe,{path:"/vendor-login",element:l.jsx(qv,{})}),l.jsx(Oe,{path:"/vendor-register",element:l.jsx(Vv,{})}),l.jsxs(Oe,{path:"/vendor",element:l.jsx(X2,{}),children:[l.jsx(Oe,{index:!0,element:l.jsx(Uh,{to:"dashboard",replace:!0})}),l.jsx(Oe,{path:"dashboard",element:l.jsx(F2,{})}),l.jsx(Oe,{path:"products",element:l.jsx(W2,{})}),l.jsx(Oe,{path:"orders",element:l.jsx(_2,{})}),l.jsx(Oe,{path:"profile",element:l.jsx($2,{})}),l.jsx(Oe,{path:"about",element:l.jsx(_c,{})}),l.jsx(Oe,{path:"services",element:l.jsx(Wc,{})}),l.jsx(Oe,{path:"contact",element:l.jsx(Ic,{})}),l.jsx(Oe,{path:"settings",element:l.jsx(rm,{})})]}),l.jsx(Oe,{path:"/admin-login",element:l.jsx(aA,{})}),l.jsxs(Oe,{path:"/admin",element:l.jsx(iA,{}),children:["Default redirect",l.jsx(Oe,{index:!0,element:l.jsx(Uh,{to:"dashboard",replace:!0})}),l.jsx(Oe,{path:"dashboard",element:l.jsx(rA,{})}),l.jsx(Oe,{path:"users",element:l.jsx(sA,{})}),l.jsx(Oe,{path:"vendors",element:l.jsx(oA,{})}),l.jsx(Oe,{path:"about",element:l.jsx(_c,{})}),l.jsx(Oe,{path:"services",element:l.jsx(Wc,{})}),l.jsx(Oe,{path:"contact",element:l.jsx(Ic,{})}),l.jsx(Oe,{path:"settings",element:l.jsx(rm,{})}),l.jsx(Oe,{})]}),l.jsx(Oe,{path:"*",element:l.jsx("div",{style:{padding:40},children:"404 Not Found"})})]})})}function uA(){const{pathname:i,key:s}=pa(),c=S.useRef({});return S.useEffect(()=>{const u=c.current[s];if(u!==void 0){requestAnimationFrame(()=>{window.scrollTo({top:u,behavior:"auto"})});return}requestAnimationFrame(()=>{window.scrollTo({top:0,behavior:"smooth"})});const d=()=>{c.current[s]=window.scrollY};return window.addEventListener("beforeunload",d),()=>window.removeEventListener("beforeunload",d)},[i,s]),null}Vx.createRoot(document.getElementById("root")).render(l.jsx(S.StrictMode,{children:l.jsxs(a1,{basename:"/AgriTechUl/",children:[l.jsx(uA,{}),l.jsx(cA,{})]})}));
