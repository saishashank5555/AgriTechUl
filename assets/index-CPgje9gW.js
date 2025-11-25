(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function l(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(d){if(d.ep)return;d.ep=!0;const f=l(d);fetch(d.href,f)}})();function tb(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Wc={exports:{}},Vr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function ab(){if(Wh)return Vr;Wh=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function l(o,d,f){var p=null;if(f!==void 0&&(p=""+f),d.key!==void 0&&(p=""+d.key),"key"in d){f={};for(var m in d)m!=="key"&&(f[m]=d[m])}else f=d;return d=f.ref,{$$typeof:r,type:o,key:p,ref:d!==void 0?d:null,props:f}}return Vr.Fragment=s,Vr.jsx=l,Vr.jsxs=l,Vr}var _h;function nb(){return _h||(_h=1,Wc.exports=ab()),Wc.exports}var a=nb(),_c={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function ib(){if($h)return Ce;$h=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),E=Symbol.iterator;function S(A){return A===null||typeof A!="object"?null:(A=E&&A[E]||A["@@iterator"],typeof A=="function"?A:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,z={};function R(A,H,J){this.props=A,this.context=H,this.refs=z,this.updater=J||j}R.prototype.isReactComponent={},R.prototype.setState=function(A,H){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,H,"setState")},R.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function M(){}M.prototype=R.prototype;function V(A,H,J){this.props=A,this.context=H,this.refs=z,this.updater=J||j}var re=V.prototype=new M;re.constructor=V,C(re,R.prototype),re.isPureReactComponent=!0;var $=Array.isArray;function ce(){}var te={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function ae(A,H,J){var se=J.ref;return{$$typeof:r,type:A,key:H,ref:se!==void 0?se:null,props:J}}function pe(A,H){return ae(A.type,H,A.props)}function ge(A){return typeof A=="object"&&A!==null&&A.$$typeof===r}function X(A){var H={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(J){return H[J]})}var W=/\/+/g;function I(A,H){return typeof A=="object"&&A!==null&&A.key!=null?X(""+A.key):H.toString(36)}function je(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(ce,ce):(A.status="pending",A.then(function(H){A.status==="pending"&&(A.status="fulfilled",A.value=H)},function(H){A.status==="pending"&&(A.status="rejected",A.reason=H)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function T(A,H,J,se,ye){var Se=typeof A;(Se==="undefined"||Se==="boolean")&&(A=null);var He=!1;if(A===null)He=!0;else switch(Se){case"bigint":case"string":case"number":He=!0;break;case"object":switch(A.$$typeof){case r:case s:He=!0;break;case b:return He=A._init,T(He(A._payload),H,J,se,ye)}}if(He)return ye=ye(A),He=se===""?"."+I(A,0):se,$(ye)?(J="",He!=null&&(J=He.replace(W,"$&/")+"/"),T(ye,H,J,"",function(Dt){return Dt})):ye!=null&&(ge(ye)&&(ye=pe(ye,J+(ye.key==null||A&&A.key===ye.key?"":(""+ye.key).replace(W,"$&/")+"/")+He)),H.push(ye)),1;He=0;var nt=se===""?".":se+":";if($(A))for(var Je=0;Je<A.length;Je++)se=A[Je],Se=nt+I(se,Je),He+=T(se,H,J,Se,ye);else if(Je=S(A),typeof Je=="function")for(A=Je.call(A),Je=0;!(se=A.next()).done;)se=se.value,Se=nt+I(se,Je++),He+=T(se,H,J,Se,ye);else if(Se==="object"){if(typeof A.then=="function")return T(je(A),H,J,se,ye);throw H=String(A),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return He}function _(A,H,J){if(A==null)return A;var se=[],ye=0;return T(A,se,"","",function(Se){return H.call(J,Se,ye++)}),se}function de(A){if(A._status===-1){var H=A._result;H=H(),H.then(function(J){(A._status===0||A._status===-1)&&(A._status=1,A._result=J)},function(J){(A._status===0||A._status===-1)&&(A._status=2,A._result=J)}),A._status===-1&&(A._status=0,A._result=H)}if(A._status===1)return A._result.default;throw A._result}var F=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},fe={map:_,forEach:function(A,H,J){_(A,function(){H.apply(this,arguments)},J)},count:function(A){var H=0;return _(A,function(){H++}),H},toArray:function(A){return _(A,function(H){return H})||[]},only:function(A){if(!ge(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return Ce.Activity=y,Ce.Children=fe,Ce.Component=R,Ce.Fragment=l,Ce.Profiler=d,Ce.PureComponent=V,Ce.StrictMode=o,Ce.Suspense=x,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(A){return te.H.useMemoCache(A)}},Ce.cache=function(A){return function(){return A.apply(null,arguments)}},Ce.cacheSignal=function(){return null},Ce.cloneElement=function(A,H,J){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var se=C({},A.props),ye=A.key;if(H!=null)for(Se in H.key!==void 0&&(ye=""+H.key),H)!le.call(H,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&H.ref===void 0||(se[Se]=H[Se]);var Se=arguments.length-2;if(Se===1)se.children=J;else if(1<Se){for(var He=Array(Se),nt=0;nt<Se;nt++)He[nt]=arguments[nt+2];se.children=He}return ae(A.type,ye,se)},Ce.createContext=function(A){return A={$$typeof:p,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:f,_context:A},A},Ce.createElement=function(A,H,J){var se,ye={},Se=null;if(H!=null)for(se in H.key!==void 0&&(Se=""+H.key),H)le.call(H,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ye[se]=H[se]);var He=arguments.length-2;if(He===1)ye.children=J;else if(1<He){for(var nt=Array(He),Je=0;Je<He;Je++)nt[Je]=arguments[Je+2];ye.children=nt}if(A&&A.defaultProps)for(se in He=A.defaultProps,He)ye[se]===void 0&&(ye[se]=He[se]);return ae(A,Se,ye)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(A){return{$$typeof:m,render:A}},Ce.isValidElement=ge,Ce.lazy=function(A){return{$$typeof:b,_payload:{_status:-1,_result:A},_init:de}},Ce.memo=function(A,H){return{$$typeof:h,type:A,compare:H===void 0?null:H}},Ce.startTransition=function(A){var H=te.T,J={};te.T=J;try{var se=A(),ye=te.S;ye!==null&&ye(J,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(ce,F)}catch(Se){F(Se)}finally{H!==null&&J.types!==null&&(H.types=J.types),te.T=H}},Ce.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},Ce.use=function(A){return te.H.use(A)},Ce.useActionState=function(A,H,J){return te.H.useActionState(A,H,J)},Ce.useCallback=function(A,H){return te.H.useCallback(A,H)},Ce.useContext=function(A){return te.H.useContext(A)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(A,H){return te.H.useDeferredValue(A,H)},Ce.useEffect=function(A,H){return te.H.useEffect(A,H)},Ce.useEffectEvent=function(A){return te.H.useEffectEvent(A)},Ce.useId=function(){return te.H.useId()},Ce.useImperativeHandle=function(A,H,J){return te.H.useImperativeHandle(A,H,J)},Ce.useInsertionEffect=function(A,H){return te.H.useInsertionEffect(A,H)},Ce.useLayoutEffect=function(A,H){return te.H.useLayoutEffect(A,H)},Ce.useMemo=function(A,H){return te.H.useMemo(A,H)},Ce.useOptimistic=function(A,H){return te.H.useOptimistic(A,H)},Ce.useReducer=function(A,H,J){return te.H.useReducer(A,H,J)},Ce.useRef=function(A){return te.H.useRef(A)},Ce.useState=function(A){return te.H.useState(A)},Ce.useSyncExternalStore=function(A,H,J){return te.H.useSyncExternalStore(A,H,J)},Ce.useTransition=function(){return te.H.useTransition()},Ce.version="19.2.0",Ce}var em;function Ir(){return em||(em=1,_c.exports=ib()),_c.exports}var w=Ir();const xn=tb(w);var $c={exports:{}},qr={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function rb(){return tm||(tm=1,(function(r){function s(T,_){var de=T.length;T.push(_);e:for(;0<de;){var F=de-1>>>1,fe=T[F];if(0<d(fe,_))T[F]=_,T[de]=fe,de=F;else break e}}function l(T){return T.length===0?null:T[0]}function o(T){if(T.length===0)return null;var _=T[0],de=T.pop();if(de!==_){T[0]=de;e:for(var F=0,fe=T.length,A=fe>>>1;F<A;){var H=2*(F+1)-1,J=T[H],se=H+1,ye=T[se];if(0>d(J,de))se<fe&&0>d(ye,J)?(T[F]=ye,T[se]=de,F=se):(T[F]=J,T[H]=de,F=H);else if(se<fe&&0>d(ye,de))T[F]=ye,T[se]=de,F=se;else break e}}return _}function d(T,_){var de=T.sortIndex-_.sortIndex;return de!==0?de:T.id-_.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var p=Date,m=p.now();r.unstable_now=function(){return p.now()-m}}var x=[],h=[],b=1,y=null,E=3,S=!1,j=!1,C=!1,z=!1,R=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function re(T){for(var _=l(h);_!==null;){if(_.callback===null)o(h);else if(_.startTime<=T)o(h),_.sortIndex=_.expirationTime,s(x,_);else break;_=l(h)}}function $(T){if(C=!1,re(T),!j)if(l(x)!==null)j=!0,ce||(ce=!0,X());else{var _=l(h);_!==null&&je($,_.startTime-T)}}var ce=!1,te=-1,le=5,ae=-1;function pe(){return z?!0:!(r.unstable_now()-ae<le)}function ge(){if(z=!1,ce){var T=r.unstable_now();ae=T;var _=!0;try{e:{j=!1,C&&(C=!1,M(te),te=-1),S=!0;var de=E;try{t:{for(re(T),y=l(x);y!==null&&!(y.expirationTime>T&&pe());){var F=y.callback;if(typeof F=="function"){y.callback=null,E=y.priorityLevel;var fe=F(y.expirationTime<=T);if(T=r.unstable_now(),typeof fe=="function"){y.callback=fe,re(T),_=!0;break t}y===l(x)&&o(x),re(T)}else o(x);y=l(x)}if(y!==null)_=!0;else{var A=l(h);A!==null&&je($,A.startTime-T),_=!1}}break e}finally{y=null,E=de,S=!1}_=void 0}}finally{_?X():ce=!1}}}var X;if(typeof V=="function")X=function(){V(ge)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,I=W.port2;W.port1.onmessage=ge,X=function(){I.postMessage(null)}}else X=function(){R(ge,0)};function je(T,_){te=R(function(){T(r.unstable_now())},_)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(T){T.callback=null},r.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<T?Math.floor(1e3/T):5},r.unstable_getCurrentPriorityLevel=function(){return E},r.unstable_next=function(T){switch(E){case 1:case 2:case 3:var _=3;break;default:_=E}var de=E;E=_;try{return T()}finally{E=de}},r.unstable_requestPaint=function(){z=!0},r.unstable_runWithPriority=function(T,_){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var de=E;E=T;try{return _()}finally{E=de}},r.unstable_scheduleCallback=function(T,_,de){var F=r.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?F+de:F):de=F,T){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=de+fe,T={id:b++,callback:_,priorityLevel:T,startTime:de,expirationTime:fe,sortIndex:-1},de>F?(T.sortIndex=de,s(h,T),l(x)===null&&T===l(h)&&(C?(M(te),te=-1):C=!0,je($,de-F))):(T.sortIndex=fe,s(x,T),j||S||(j=!0,ce||(ce=!0,X()))),T},r.unstable_shouldYield=pe,r.unstable_wrapCallback=function(T){var _=E;return function(){var de=E;E=_;try{return T.apply(this,arguments)}finally{E=de}}}})(td)),td}var am;function sb(){return am||(am=1,ed.exports=rb()),ed.exports}var ad={exports:{}},Tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function lb(){if(nm)return Tt;nm=1;var r=Ir();function s(x){var h="https://react.dev/errors/"+x;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)h+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+x+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(s(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(x,h,b){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:y==null?null:""+y,children:x,containerInfo:h,implementation:b}}var p=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(x,h){if(x==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Tt.createPortal=function(x,h){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(s(299));return f(x,h,null,b)},Tt.flushSync=function(x){var h=p.T,b=o.p;try{if(p.T=null,o.p=2,x)return x()}finally{p.T=h,o.p=b,o.d.f()}},Tt.preconnect=function(x,h){typeof x=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(x,h))},Tt.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},Tt.preinit=function(x,h){if(typeof x=="string"&&h&&typeof h.as=="string"){var b=h.as,y=m(b,h.crossOrigin),E=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;b==="style"?o.d.S(x,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:E,fetchPriority:S}):b==="script"&&o.d.X(x,{crossOrigin:y,integrity:E,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Tt.preinitModule=function(x,h){if(typeof x=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var b=m(h.as,h.crossOrigin);o.d.M(x,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(x)},Tt.preload=function(x,h){if(typeof x=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var b=h.as,y=m(b,h.crossOrigin);o.d.L(x,b,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Tt.preloadModule=function(x,h){if(typeof x=="string")if(h){var b=m(h.as,h.crossOrigin);o.d.m(x,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(x)},Tt.requestFormReset=function(x){o.d.r(x)},Tt.unstable_batchedUpdates=function(x,h){return x(h)},Tt.useFormState=function(x,h,b){return p.H.useFormState(x,h,b)},Tt.useFormStatus=function(){return p.H.useHostTransitionStatus()},Tt.version="19.2.0",Tt}var im;function ob(){if(im)return ad.exports;im=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),ad.exports=lb(),ad.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function cb(){if(rm)return qr;rm=1;var r=sb(),s=Ir(),l=ob();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(f(e)!==e)throw Error(o(188))}function h(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var c=n.return;if(c===null)break;var u=c.alternate;if(u===null){if(i=c.return,i!==null){n=i;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===n)return x(c),e;if(u===i)return x(c),t;u=u.sibling}throw Error(o(188))}if(n.return!==i.return)n=c,i=u;else{for(var g=!1,v=c.child;v;){if(v===n){g=!0,n=c,i=u;break}if(v===i){g=!0,i=c,n=u;break}v=v.sibling}if(!g){for(v=u.child;v;){if(v===n){g=!0,n=u,i=c;break}if(v===i){g=!0,i=u,n=c;break}v=v.sibling}if(!g)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,E=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),V=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),pe=Symbol.for("react.memo_cache_sentinel"),ge=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=ge&&e[ge]||e["@@iterator"],typeof e=="function"?e:null)}var W=Symbol.for("react.client.reference");function I(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===W?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case R:return"Profiler";case z:return"StrictMode";case $:return"Suspense";case ce:return"SuspenseList";case ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case V:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return t=e.displayName||null,t!==null?t:I(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return I(e(t))}catch{}}return null}var je=Array.isArray,T=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},F=[],fe=-1;function A(e){return{current:e}}function H(e){0>fe||(e.current=F[fe],F[fe]=null,fe--)}function J(e,t){fe++,F[fe]=e.current,e.current=t}var se=A(null),ye=A(null),Se=A(null),He=A(null);function nt(e,t){switch(J(Se,t),J(ye,e),J(se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vh(t),e=jh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(se),J(se,e)}function Je(){H(se),H(ye),H(Se)}function Dt(e){e.memoizedState!==null&&J(He,e);var t=se.current,n=jh(t,e.type);t!==n&&(J(ye,e),J(se,n))}function lt(e){ye.current===e&&(H(se),H(ye)),He.current===e&&(H(He),Dr._currentValue=de)}var kt,St;function Sa(e){if(kt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kt=t&&t[1]||"",St=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+e+St}var Yn=!1;function Fn(e,t){if(!e||Yn)return"";Yn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(G){var U=G}Reflect.construct(e,[],Z)}else{try{Z.call()}catch(G){U=G}e.call(Z.prototype)}}else{try{throw Error()}catch(G){U=G}(Z=e())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(G){if(G&&U&&typeof G.stack=="string")return[G.stack,U.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),g=u[0],v=u[1];if(g&&v){var N=g.split(`
`),D=v.split(`
`);for(c=i=0;i<N.length&&!N[i].includes("DetermineComponentFrameRoot");)i++;for(;c<D.length&&!D[c].includes("DetermineComponentFrameRoot");)c++;if(i===N.length||c===D.length)for(i=N.length-1,c=D.length-1;1<=i&&0<=c&&N[i]!==D[c];)c--;for(;1<=i&&0<=c;i--,c--)if(N[i]!==D[c]){if(i!==1||c!==1)do if(i--,c--,0>c||N[i]!==D[c]){var Y=`
`+N[i].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=i&&0<=c);break}}}finally{Yn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Sa(n):""}function Hl(e,t){switch(e.tag){case 26:case 27:case 5:return Sa(e.type);case 16:return Sa("Lazy");case 13:return e.child!==t&&t!==null?Sa("Suspense Fallback"):Sa("Suspense");case 19:return Sa("SuspenseList");case 0:case 15:return Fn(e.type,!1);case 11:return Fn(e.type.render,!1);case 1:return Fn(e.type,!0);case 31:return Sa("Activity");default:return""}}function bn(e){try{var t="",n=null;do t+=Hl(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Pi=Object.prototype.hasOwnProperty,Kn=r.unstable_scheduleCallback,yn=r.unstable_cancelCallback,Pn=r.unstable_shouldYield,Zi=r.unstable_requestPaint,Mt=r.unstable_now,ee=r.unstable_getCurrentPriorityLevel,L=r.unstable_ImmediatePriority,ne=r.unstable_UserBlockingPriority,ie=r.unstable_NormalPriority,ke=r.unstable_LowPriority,Re=r.unstable_IdlePriority,Qe=r.log,Q=r.unstable_setDisableYieldValue,P=null,he=null;function me(e){if(typeof Qe=="function"&&Q(e),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(P,e)}catch{}}var ue=Math.clz32?Math.clz32:$e,Me=Math.log,_e=Math.LN2;function $e(e){return e>>>=0,e===0?32:31-(Me(e)/_e|0)|0}var Fe=256,ot=262144,et=4194304;function it(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ua(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var c=0,u=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var v=i&134217727;return v!==0?(i=v&~u,i!==0?c=it(i):(g&=v,g!==0?c=it(g):n||(n=v&~e,n!==0&&(c=it(n))))):(v=i&~u,v!==0?c=it(v):g!==0?c=it(g):n||(n=i&~e,n!==0&&(c=it(n)))),c===0?0:t!==0&&t!==c&&(t&u)===0&&(u=c&-c,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:c}function Kt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Zn(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ii(){var e=et;return et<<=1,(et&62914560)===0&&(et=4194304),e}function In(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yx(e,t,n,i,c,u){var g=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,N=e.expirationTimes,D=e.hiddenUpdates;for(n=g&~n;0<n;){var Y=31-ue(n),Z=1<<Y;v[Y]=0,N[Y]=-1;var U=D[Y];if(U!==null)for(D[Y]=null,Y=0;Y<U.length;Y++){var G=U[Y];G!==null&&(G.lane&=-536870913)}n&=~Z}i!==0&&tu(e,i,0),u!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=u&~(g&~t))}function tu(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ue(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function au(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ue(n),c=1<<i;c&t|e[i]&t&&(e[i]|=t),n&=~c}}function nu(e,t){var n=t&-t;return n=(n&42)!==0?1:Vl(n),(n&(e.suspendedLanes|t))!==0?0:n}function Vl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ql(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function iu(){var e=_.p;return e!==0?e:(e=window.event,e===void 0?32:Fh(e.type))}function ru(e,t){var n=_.p;try{return _.p=e,t()}finally{_.p=n}}var Pa=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Pa,Lt="__reactProps$"+Pa,Xn="__reactContainer$"+Pa,Gl="__reactEvents$"+Pa,Fx="__reactListeners$"+Pa,Kx="__reactHandles$"+Pa,su="__reactResources$"+Pa,Ji="__reactMarker$"+Pa;function Ql(e){delete e[Nt],delete e[Lt],delete e[Gl],delete e[Fx],delete e[Kx]}function Jn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xn]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Oh(e);e!==null;){if(n=e[Nt])return n;e=Oh(e)}return t}e=n,n=e.parentNode}return null}function Wn(e){if(e=e[Nt]||e[Xn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function _n(e){var t=e[su];return t||(t=e[su]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function jt(e){e[Ji]=!0}var lu=new Set,ou={};function vn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(ou[e]=t,e=0;e<t.length;e++)lu.add(t[e])}var Px=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cu={},du={};function Zx(e){return Pi.call(du,e)?!0:Pi.call(cu,e)?!1:Px.test(e)?du[e]=!0:(cu[e]=!0,!1)}function ts(e,t,n){if(Zx(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function as(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Na(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ix(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,u=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(g){n=""+g,u.call(this,g)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(g){n=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yl(e){if(!e._valueTracker){var t=uu(e)?"checked":"value";e._valueTracker=Ix(e,t,""+e[t])}}function fu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=uu(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xx=/[\n"\\]/g;function ea(e){return e.replace(Xx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fl(e,t,n,i,c,u,g,v){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$t(t)):e.value!==""+$t(t)&&(e.value=""+$t(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?Kl(e,g,$t(t)):n!=null?Kl(e,g,$t(n)):i!=null&&e.removeAttribute("value"),c==null&&u!=null&&(e.defaultChecked=!!u),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+$t(v):e.removeAttribute("name")}function pu(e,t,n,i,c,u,g,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Yl(e);return}n=n!=null?""+$t(n):"",t=t!=null?""+$t(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}i=i??c,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=v?e.checked:!!i,e.defaultChecked=!!i,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Yl(e)}function Kl(e,t,n){t==="number"&&ns(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ei(e,t,n,i){if(e=e.options,t){t={};for(var c=0;c<n.length;c++)t["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=t.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&i&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,i&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function hu(e,t,n){if(t!=null&&(t=""+$t(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+$t(n):""}function mu(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(je(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=$t(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Yl(e)}function ti(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gu(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Jx.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function xu(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var c in t)i=t[c],t.hasOwnProperty(c)&&n[c]!==i&&gu(e,c,i)}else for(var u in t)t.hasOwnProperty(u)&&gu(e,u,t[u])}function Pl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_x=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function is(e){return _x.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ea(){}var Zl=null;function Il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ai=null,ni=null;function bu(e){var t=Wn(e);if(t&&(e=t.stateNode)){var n=e[Lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Fl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ea(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var c=i[Lt]||null;if(!c)throw Error(o(90));Fl(i,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&fu(i)}break e;case"textarea":hu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ei(e,!!n.multiple,t,!1)}}}var Xl=!1;function yu(e,t,n){if(Xl)return e(t,n);Xl=!0;try{var i=e(t);return i}finally{if(Xl=!1,(ai!==null||ni!==null)&&(Ks(),ai&&(t=ai,e=ni,ni=ai=null,bu(t),e)))for(t=0;t<e.length;t++)bu(e[t])}}function _i(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Lt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jl=!1;if(Ca)try{var $i={};Object.defineProperty($i,"passive",{get:function(){Jl=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{Jl=!1}var Za=null,Wl=null,rs=null;function vu(){if(rs)return rs;var e,t=Wl,n=t.length,i,c="value"in Za?Za.value:Za.textContent,u=c.length;for(e=0;e<n&&t[e]===c[e];e++);var g=n-e;for(i=1;i<=g&&t[n-i]===c[u-i];i++);return rs=c.slice(e,1<i?1-i:void 0)}function ss(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ls(){return!0}function ju(){return!1}function Ut(e){function t(n,i,c,u,g){this._reactName=n,this._targetInst=c,this.type=i,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ls:ju,this.isPropagationStopped=ju,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ls)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ls)},persist:function(){},isPersistent:ls}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},os=Ut(jn),er=y({},jn,{view:0,detail:0}),$x=Ut(er),_l,$l,tr,cs=y({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(_l=e.screenX-tr.screenX,$l=e.screenY-tr.screenY):$l=_l=0,tr=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),wu=Ut(cs),e0=y({},cs,{dataTransfer:0}),t0=Ut(e0),a0=y({},er,{relatedTarget:0}),eo=Ut(a0),n0=y({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),i0=Ut(n0),r0=y({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s0=Ut(r0),l0=y({},jn,{data:0}),Au=Ut(l0),o0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=d0[e])?!!t[e]:!1}function to(){return u0}var f0=y({},er,{key:function(e){if(e.key){var t=o0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),p0=Ut(f0),h0=y({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Su=Ut(h0),m0=y({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),g0=Ut(m0),x0=y({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),b0=Ut(x0),y0=y({},cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),v0=Ut(y0),j0=y({},jn,{newState:0,oldState:0}),w0=Ut(j0),A0=[9,13,27,32],ao=Ca&&"CompositionEvent"in window,ar=null;Ca&&"documentMode"in document&&(ar=document.documentMode);var S0=Ca&&"TextEvent"in window&&!ar,Nu=Ca&&(!ao||ar&&8<ar&&11>=ar),Eu=" ",Cu=!1;function Ou(e,t){switch(e){case"keyup":return A0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ii=!1;function N0(e,t){switch(e){case"compositionend":return zu(t);case"keypress":return t.which!==32?null:(Cu=!0,Eu);case"textInput":return e=t.data,e===Eu&&Cu?null:e;default:return null}}function E0(e,t){if(ii)return e==="compositionend"||!ao&&Ou(e,t)?(e=vu(),rs=Wl=Za=null,ii=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nu&&t.locale!=="ko"?null:t.data;default:return null}}var C0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!C0[e.type]:t==="textarea"}function Tu(e,t,n,i){ai?ni?ni.push(i):ni=[i]:ai=i,t=_s(t,"onChange"),0<t.length&&(n=new os("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var nr=null,ir=null;function O0(e){hh(e,0)}function ds(e){var t=Wi(e);if(fu(t))return e}function Ru(e,t){if(e==="change")return t}var Mu=!1;if(Ca){var no;if(Ca){var io="oninput"in document;if(!io){var Bu=document.createElement("div");Bu.setAttribute("oninput","return;"),io=typeof Bu.oninput=="function"}no=io}else no=!1;Mu=no&&(!document.documentMode||9<document.documentMode)}function Du(){nr&&(nr.detachEvent("onpropertychange",Lu),ir=nr=null)}function Lu(e){if(e.propertyName==="value"&&ds(ir)){var t=[];Tu(t,ir,e,Il(e)),yu(O0,t)}}function z0(e,t,n){e==="focusin"?(Du(),nr=t,ir=n,nr.attachEvent("onpropertychange",Lu)):e==="focusout"&&Du()}function k0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ds(ir)}function T0(e,t){if(e==="click")return ds(t)}function R0(e,t){if(e==="input"||e==="change")return ds(t)}function M0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:M0;function rr(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var c=n[i];if(!Pi.call(t,c)||!Pt(e[c],t[c]))return!1}return!0}function Uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hu(e,t){var n=Uu(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uu(n)}}function Vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ns(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ns(e.document)}return t}function ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var B0=Ca&&"documentMode"in document&&11>=document.documentMode,ri=null,so=null,sr=null,lo=!1;function Gu(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lo||ri==null||ri!==ns(i)||(i=ri,"selectionStart"in i&&ro(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),sr&&rr(sr,i)||(sr=i,i=_s(so,"onSelect"),0<i.length&&(t=new os("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ri)))}function wn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var si={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionrun:wn("Transition","TransitionRun"),transitionstart:wn("Transition","TransitionStart"),transitioncancel:wn("Transition","TransitionCancel"),transitionend:wn("Transition","TransitionEnd")},oo={},Qu={};Ca&&(Qu=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function An(e){if(oo[e])return oo[e];if(!si[e])return e;var t=si[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qu)return oo[e]=t[n];return e}var Yu=An("animationend"),Fu=An("animationiteration"),Ku=An("animationstart"),D0=An("transitionrun"),L0=An("transitionstart"),U0=An("transitioncancel"),Pu=An("transitionend"),Zu=new Map,co="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");co.push("scrollEnd");function fa(e,t){Zu.set(e,t),vn(t,[e])}var us=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ta=[],li=0,uo=0;function fs(){for(var e=li,t=uo=li=0;t<e;){var n=ta[t];ta[t++]=null;var i=ta[t];ta[t++]=null;var c=ta[t];ta[t++]=null;var u=ta[t];if(ta[t++]=null,i!==null&&c!==null){var g=i.pending;g===null?c.next=c:(c.next=g.next,g.next=c),i.pending=c}u!==0&&Iu(n,c,u)}}function ps(e,t,n,i){ta[li++]=e,ta[li++]=t,ta[li++]=n,ta[li++]=i,uo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function fo(e,t,n,i){return ps(e,t,n,i),hs(e)}function Sn(e,t){return ps(e,null,null,t),hs(e)}function Iu(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var c=!1,u=e.return;u!==null;)u.childLanes|=n,i=u.alternate,i!==null&&(i.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(c=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,c&&t!==null&&(c=31-ue(n),e=u.hiddenUpdates,i=e[c],i===null?e[c]=[t]:i.push(t),t.lane=n|536870912),u):null}function hs(e){if(50<Or)throw Or=0,jc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var oi={};function H0(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(e,t,n,i){return new H0(e,t,n,i)}function po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oa(e,t){var n=e.alternate;return n===null?(n=Zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Xu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ms(e,t,n,i,c,u){var g=0;if(i=e,typeof e=="function")po(e)&&(g=1);else if(typeof e=="string")g=Y1(e,n,se.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ae:return e=Zt(31,n,t,c),e.elementType=ae,e.lanes=u,e;case C:return Nn(n.children,c,u,t);case z:g=8,c|=24;break;case R:return e=Zt(12,n,t,c|2),e.elementType=R,e.lanes=u,e;case $:return e=Zt(13,n,t,c),e.elementType=$,e.lanes=u,e;case ce:return e=Zt(19,n,t,c),e.elementType=ce,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:g=10;break e;case M:g=9;break e;case re:g=11;break e;case te:g=14;break e;case le:g=16,i=null;break e}g=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Zt(g,n,t,c),t.elementType=e,t.type=i,t.lanes=u,t}function Nn(e,t,n,i){return e=Zt(7,e,i,t),e.lanes=n,e}function ho(e,t,n){return e=Zt(6,e,null,t),e.lanes=n,e}function Ju(e){var t=Zt(18,null,null,0);return t.stateNode=e,t}function mo(e,t,n){return t=Zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wu=new WeakMap;function aa(e,t){if(typeof e=="object"&&e!==null){var n=Wu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:bn(t)},Wu.set(e,t),t)}return{value:e,source:t,stack:bn(t)}}var ci=[],di=0,gs=null,lr=0,na=[],ia=0,Ia=null,ba=1,ya="";function za(e,t){ci[di++]=lr,ci[di++]=gs,gs=e,lr=t}function _u(e,t,n){na[ia++]=ba,na[ia++]=ya,na[ia++]=Ia,Ia=e;var i=ba;e=ya;var c=32-ue(i)-1;i&=~(1<<c),n+=1;var u=32-ue(t)+c;if(30<u){var g=c-c%5;u=(i&(1<<g)-1).toString(32),i>>=g,c-=g,ba=1<<32-ue(t)+c|n<<c|i,ya=u+e}else ba=1<<u|n<<c|i,ya=e}function go(e){e.return!==null&&(za(e,1),_u(e,1,0))}function xo(e){for(;e===gs;)gs=ci[--di],ci[di]=null,lr=ci[--di],ci[di]=null;for(;e===Ia;)Ia=na[--ia],na[ia]=null,ya=na[--ia],na[ia]=null,ba=na[--ia],na[ia]=null}function $u(e,t){na[ia++]=ba,na[ia++]=ya,na[ia++]=Ia,ba=t.id,ya=t.overflow,Ia=e}var Et=null,tt=null,Ve=!1,Xa=null,ra=!1,bo=Error(o(519));function Ja(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw or(aa(t,e)),bo}function ef(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Nt]=e,t[Lt]=i,n){case"dialog":De("cancel",t),De("close",t);break;case"iframe":case"object":case"embed":De("load",t);break;case"video":case"audio":for(n=0;n<kr.length;n++)De(kr[n],t);break;case"source":De("error",t);break;case"img":case"image":case"link":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"input":De("invalid",t),pu(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":De("invalid",t);break;case"textarea":De("invalid",t),mu(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||bh(t.textContent,n)?(i.popover!=null&&(De("beforetoggle",t),De("toggle",t)),i.onScroll!=null&&De("scroll",t),i.onScrollEnd!=null&&De("scrollend",t),i.onClick!=null&&(t.onclick=Ea),t=!0):t=!1,t||Ja(e,!0)}function tf(e){for(Et=e.return;Et;)switch(Et.tag){case 5:case 31:case 13:ra=!1;return;case 27:case 3:ra=!0;return;default:Et=Et.return}}function ui(e){if(e!==Et)return!1;if(!Ve)return tf(e),Ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Lc(e.type,e.memoizedProps)),n=!n),n&&tt&&Ja(e),tf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));tt=Ch(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));tt=Ch(e)}else t===27?(t=tt,un(e.type)?(e=Gc,Gc=null,tt=e):tt=t):tt=Et?la(e.stateNode.nextSibling):null;return!0}function En(){tt=Et=null,Ve=!1}function yo(){var e=Xa;return e!==null&&(Gt===null?Gt=e:Gt.push.apply(Gt,e),Xa=null),e}function or(e){Xa===null?Xa=[e]:Xa.push(e)}var vo=A(null),Cn=null,ka=null;function Wa(e,t,n){J(vo,t._currentValue),t._currentValue=n}function Ta(e){e._currentValue=vo.current,H(vo)}function jo(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function wo(e,t,n,i){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var u=c.dependencies;if(u!==null){var g=c.child;u=u.firstContext;e:for(;u!==null;){var v=u;u=c;for(var N=0;N<t.length;N++)if(v.context===t[N]){u.lanes|=n,v=u.alternate,v!==null&&(v.lanes|=n),jo(u.return,n,e),i||(g=null);break e}u=v.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(o(341));g.lanes|=n,u=g.alternate,u!==null&&(u.lanes|=n),jo(g,n,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function fi(e,t,n,i){e=null;for(var c=t,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(o(387));if(g=g.memoizedProps,g!==null){var v=c.type;Pt(c.pendingProps.value,g.value)||(e!==null?e.push(v):e=[v])}}else if(c===He.current){if(g=c.alternate,g===null)throw Error(o(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Dr):e=[Dr])}c=c.return}e!==null&&wo(t,e,n,i),t.flags|=262144}function xs(e){for(e=e.firstContext;e!==null;){if(!Pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function On(e){Cn=e,ka=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ct(e){return af(Cn,e)}function bs(e,t){return Cn===null&&On(e),af(e,t)}function af(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ka===null){if(e===null)throw Error(o(308));ka=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ka=ka.next=t;return n}var V0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},q0=r.unstable_scheduleCallback,G0=r.unstable_NormalPriority,gt={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ao(){return{controller:new V0,data:new Map,refCount:0}}function cr(e){e.refCount--,e.refCount===0&&q0(G0,function(){e.controller.abort()})}var dr=null,So=0,pi=0,hi=null;function Q0(e,t){if(dr===null){var n=dr=[];So=0,pi=Cc(),hi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return So++,t.then(nf,nf),t}function nf(){if(--So===0&&dr!==null){hi!==null&&(hi.status="fulfilled");var e=dr;dr=null,pi=0,hi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Y0(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var c=0;c<n.length;c++)(0,n[c])(t)},function(c){for(i.status="rejected",i.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),i}var rf=T.S;T.S=function(e,t){Qp=Mt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Q0(e,t),rf!==null&&rf(e,t)};var zn=A(null);function No(){var e=zn.current;return e!==null?e:We.pooledCache}function ys(e,t){t===null?J(zn,zn.current):J(zn,t.pool)}function sf(){var e=No();return e===null?null:{parent:gt._currentValue,pool:e}}var mi=Error(o(460)),Eo=Error(o(474)),vs=Error(o(542)),js={then:function(){}};function lf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function of(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ea,Ea),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,df(e),e;default:if(typeof t.status=="string")t.then(Ea,Ea);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=i}},function(i){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,df(e),e}throw Tn=t,mi}}function kn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Tn=n,mi):n}}var Tn=null;function cf(){if(Tn===null)throw Error(o(459));var e=Tn;return Tn=null,e}function df(e){if(e===mi||e===vs)throw Error(o(483))}var gi=null,ur=0;function ws(e){var t=ur;return ur+=1,gi===null&&(gi=[]),of(gi,e,t)}function fr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function As(e,t){throw t.$$typeof===E?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function uf(e){function t(k,O){if(e){var B=k.deletions;B===null?(k.deletions=[O],k.flags|=16):B.push(O)}}function n(k,O){if(!e)return null;for(;O!==null;)t(k,O),O=O.sibling;return null}function i(k){for(var O=new Map;k!==null;)k.key!==null?O.set(k.key,k):O.set(k.index,k),k=k.sibling;return O}function c(k,O){return k=Oa(k,O),k.index=0,k.sibling=null,k}function u(k,O,B){return k.index=B,e?(B=k.alternate,B!==null?(B=B.index,B<O?(k.flags|=67108866,O):B):(k.flags|=67108866,O)):(k.flags|=1048576,O)}function g(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function v(k,O,B,K){return O===null||O.tag!==6?(O=ho(B,k.mode,K),O.return=k,O):(O=c(O,B),O.return=k,O)}function N(k,O,B,K){var ve=B.type;return ve===C?Y(k,O,B.props.children,K,B.key):O!==null&&(O.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===le&&kn(ve)===O.type)?(O=c(O,B.props),fr(O,B),O.return=k,O):(O=ms(B.type,B.key,B.props,null,k.mode,K),fr(O,B),O.return=k,O)}function D(k,O,B,K){return O===null||O.tag!==4||O.stateNode.containerInfo!==B.containerInfo||O.stateNode.implementation!==B.implementation?(O=mo(B,k.mode,K),O.return=k,O):(O=c(O,B.children||[]),O.return=k,O)}function Y(k,O,B,K,ve){return O===null||O.tag!==7?(O=Nn(B,k.mode,K,ve),O.return=k,O):(O=c(O,B),O.return=k,O)}function Z(k,O,B){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=ho(""+O,k.mode,B),O.return=k,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case S:return B=ms(O.type,O.key,O.props,null,k.mode,B),fr(B,O),B.return=k,B;case j:return O=mo(O,k.mode,B),O.return=k,O;case le:return O=kn(O),Z(k,O,B)}if(je(O)||X(O))return O=Nn(O,k.mode,B,null),O.return=k,O;if(typeof O.then=="function")return Z(k,ws(O),B);if(O.$$typeof===V)return Z(k,bs(k,O),B);As(k,O)}return null}function U(k,O,B,K){var ve=O!==null?O.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return ve!==null?null:v(k,O,""+B,K);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case S:return B.key===ve?N(k,O,B,K):null;case j:return B.key===ve?D(k,O,B,K):null;case le:return B=kn(B),U(k,O,B,K)}if(je(B)||X(B))return ve!==null?null:Y(k,O,B,K,null);if(typeof B.then=="function")return U(k,O,ws(B),K);if(B.$$typeof===V)return U(k,O,bs(k,B),K);As(k,B)}return null}function G(k,O,B,K,ve){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return k=k.get(B)||null,v(O,k,""+K,ve);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case S:return k=k.get(K.key===null?B:K.key)||null,N(O,k,K,ve);case j:return k=k.get(K.key===null?B:K.key)||null,D(O,k,K,ve);case le:return K=kn(K),G(k,O,B,K,ve)}if(je(K)||X(K))return k=k.get(B)||null,Y(O,k,K,ve,null);if(typeof K.then=="function")return G(k,O,B,ws(K),ve);if(K.$$typeof===V)return G(k,O,B,bs(O,K),ve);As(O,K)}return null}function xe(k,O,B,K){for(var ve=null,qe=null,be=O,Te=O=0,Ue=null;be!==null&&Te<B.length;Te++){be.index>Te?(Ue=be,be=null):Ue=be.sibling;var Ge=U(k,be,B[Te],K);if(Ge===null){be===null&&(be=Ue);break}e&&be&&Ge.alternate===null&&t(k,be),O=u(Ge,O,Te),qe===null?ve=Ge:qe.sibling=Ge,qe=Ge,be=Ue}if(Te===B.length)return n(k,be),Ve&&za(k,Te),ve;if(be===null){for(;Te<B.length;Te++)be=Z(k,B[Te],K),be!==null&&(O=u(be,O,Te),qe===null?ve=be:qe.sibling=be,qe=be);return Ve&&za(k,Te),ve}for(be=i(be);Te<B.length;Te++)Ue=G(be,k,Te,B[Te],K),Ue!==null&&(e&&Ue.alternate!==null&&be.delete(Ue.key===null?Te:Ue.key),O=u(Ue,O,Te),qe===null?ve=Ue:qe.sibling=Ue,qe=Ue);return e&&be.forEach(function(gn){return t(k,gn)}),Ve&&za(k,Te),ve}function we(k,O,B,K){if(B==null)throw Error(o(151));for(var ve=null,qe=null,be=O,Te=O=0,Ue=null,Ge=B.next();be!==null&&!Ge.done;Te++,Ge=B.next()){be.index>Te?(Ue=be,be=null):Ue=be.sibling;var gn=U(k,be,Ge.value,K);if(gn===null){be===null&&(be=Ue);break}e&&be&&gn.alternate===null&&t(k,be),O=u(gn,O,Te),qe===null?ve=gn:qe.sibling=gn,qe=gn,be=Ue}if(Ge.done)return n(k,be),Ve&&za(k,Te),ve;if(be===null){for(;!Ge.done;Te++,Ge=B.next())Ge=Z(k,Ge.value,K),Ge!==null&&(O=u(Ge,O,Te),qe===null?ve=Ge:qe.sibling=Ge,qe=Ge);return Ve&&za(k,Te),ve}for(be=i(be);!Ge.done;Te++,Ge=B.next())Ge=G(be,k,Te,Ge.value,K),Ge!==null&&(e&&Ge.alternate!==null&&be.delete(Ge.key===null?Te:Ge.key),O=u(Ge,O,Te),qe===null?ve=Ge:qe.sibling=Ge,qe=Ge);return e&&be.forEach(function(eb){return t(k,eb)}),Ve&&za(k,Te),ve}function Xe(k,O,B,K){if(typeof B=="object"&&B!==null&&B.type===C&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case S:e:{for(var ve=B.key;O!==null;){if(O.key===ve){if(ve=B.type,ve===C){if(O.tag===7){n(k,O.sibling),K=c(O,B.props.children),K.return=k,k=K;break e}}else if(O.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===le&&kn(ve)===O.type){n(k,O.sibling),K=c(O,B.props),fr(K,B),K.return=k,k=K;break e}n(k,O);break}else t(k,O);O=O.sibling}B.type===C?(K=Nn(B.props.children,k.mode,K,B.key),K.return=k,k=K):(K=ms(B.type,B.key,B.props,null,k.mode,K),fr(K,B),K.return=k,k=K)}return g(k);case j:e:{for(ve=B.key;O!==null;){if(O.key===ve)if(O.tag===4&&O.stateNode.containerInfo===B.containerInfo&&O.stateNode.implementation===B.implementation){n(k,O.sibling),K=c(O,B.children||[]),K.return=k,k=K;break e}else{n(k,O);break}else t(k,O);O=O.sibling}K=mo(B,k.mode,K),K.return=k,k=K}return g(k);case le:return B=kn(B),Xe(k,O,B,K)}if(je(B))return xe(k,O,B,K);if(X(B)){if(ve=X(B),typeof ve!="function")throw Error(o(150));return B=ve.call(B),we(k,O,B,K)}if(typeof B.then=="function")return Xe(k,O,ws(B),K);if(B.$$typeof===V)return Xe(k,O,bs(k,B),K);As(k,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,O!==null&&O.tag===6?(n(k,O.sibling),K=c(O,B),K.return=k,k=K):(n(k,O),K=ho(B,k.mode,K),K.return=k,k=K),g(k)):n(k,O)}return function(k,O,B,K){try{ur=0;var ve=Xe(k,O,B,K);return gi=null,ve}catch(be){if(be===mi||be===vs)throw be;var qe=Zt(29,be,null,k.mode);return qe.lanes=K,qe.return=k,qe}finally{}}}var Rn=uf(!0),ff=uf(!1),_a=!1;function Co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ye&2)!==0){var c=i.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),i.pending=t,t=hs(e),Iu(e,null,n),t}return ps(e,i,t,n),hs(e)}function pr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,au(e,n)}}function zo(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var c=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var g={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?c=u=g:u=u.next=g,n=n.next}while(n!==null);u===null?c=u=t:u=u.next=t}else c=u=t;n={baseState:i.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ko=!1;function hr(){if(ko){var e=hi;if(e!==null)throw e}}function mr(e,t,n,i){ko=!1;var c=e.updateQueue;_a=!1;var u=c.firstBaseUpdate,g=c.lastBaseUpdate,v=c.shared.pending;if(v!==null){c.shared.pending=null;var N=v,D=N.next;N.next=null,g===null?u=D:g.next=D,g=N;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,v=Y.lastBaseUpdate,v!==g&&(v===null?Y.firstBaseUpdate=D:v.next=D,Y.lastBaseUpdate=N))}if(u!==null){var Z=c.baseState;g=0,Y=D=N=null,v=u;do{var U=v.lane&-536870913,G=U!==v.lane;if(G?(Le&U)===U:(i&U)===U){U!==0&&U===pi&&(ko=!0),Y!==null&&(Y=Y.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var xe=e,we=v;U=t;var Xe=n;switch(we.tag){case 1:if(xe=we.payload,typeof xe=="function"){Z=xe.call(Xe,Z,U);break e}Z=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=we.payload,U=typeof xe=="function"?xe.call(Xe,Z,U):xe,U==null)break e;Z=y({},Z,U);break e;case 2:_a=!0}}U=v.callback,U!==null&&(e.flags|=64,G&&(e.flags|=8192),G=c.callbacks,G===null?c.callbacks=[U]:G.push(U))}else G={lane:U,tag:v.tag,payload:v.payload,callback:v.callback,next:null},Y===null?(D=Y=G,N=Z):Y=Y.next=G,g|=U;if(v=v.next,v===null){if(v=c.shared.pending,v===null)break;G=v,v=G.next,G.next=null,c.lastBaseUpdate=G,c.shared.pending=null}}while(!0);Y===null&&(N=Z),c.baseState=N,c.firstBaseUpdate=D,c.lastBaseUpdate=Y,u===null&&(c.shared.lanes=0),sn|=g,e.lanes=g,e.memoizedState=Z}}function pf(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function hf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)pf(n[e],t)}var xi=A(null),Ss=A(0);function mf(e,t){e=qa,J(Ss,e),J(xi,t),qa=e|t.baseLanes}function To(){J(Ss,qa),J(xi,xi.current)}function Ro(){qa=Ss.current,H(xi),H(Ss)}var It=A(null),sa=null;function tn(e){var t=e.alternate;J(ft,ft.current&1),J(It,e),sa===null&&(t===null||xi.current!==null||t.memoizedState!==null)&&(sa=e)}function Mo(e){J(ft,ft.current),J(It,e),sa===null&&(sa=e)}function gf(e){e.tag===22?(J(ft,ft.current),J(It,e),sa===null&&(sa=e)):an()}function an(){J(ft,ft.current),J(It,It.current)}function Xt(e){H(It),sa===e&&(sa=null),H(ft)}var ft=A(0);function Ns(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Vc(n)||qc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ra=0,Oe=null,Ze=null,xt=null,Es=!1,bi=!1,Mn=!1,Cs=0,gr=0,yi=null,F0=0;function ct(){throw Error(o(321))}function Bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pt(e[n],t[n]))return!1;return!0}function Do(e,t,n,i,c,u){return Ra=u,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?$f:Jo,Mn=!1,u=n(i,c),Mn=!1,bi&&(u=bf(t,n,i,c)),xf(e),u}function xf(e){T.H=yr;var t=Ze!==null&&Ze.next!==null;if(Ra=0,xt=Ze=Oe=null,Es=!1,gr=0,yi=null,t)throw Error(o(300));e===null||bt||(e=e.dependencies,e!==null&&xs(e)&&(bt=!0))}function bf(e,t,n,i){Oe=e;var c=0;do{if(bi&&(yi=null),gr=0,bi=!1,25<=c)throw Error(o(301));if(c+=1,xt=Ze=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}T.H=ep,u=t(n,i)}while(bi);return u}function K0(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?xr(t):t,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(Oe.flags|=1024),t}function Lo(){var e=Cs!==0;return Cs=0,e}function Uo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ho(e){if(Es){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Es=!1}Ra=0,xt=Ze=Oe=null,bi=!1,gr=Cs=0,yi=null}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?Oe.memoizedState=xt=e:xt=xt.next=e,xt}function pt(){if(Ze===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=xt===null?Oe.memoizedState:xt.next;if(t!==null)xt=t,Ze=e;else{if(e===null)throw Oe.alternate===null?Error(o(467)):Error(o(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},xt===null?Oe.memoizedState=xt=e:xt=xt.next=e}return xt}function Os(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xr(e){var t=gr;return gr+=1,yi===null&&(yi=[]),e=of(yi,e,t),t=Oe,(xt===null?t.memoizedState:xt.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?$f:Jo),e}function zs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xr(e);if(e.$$typeof===V)return Ct(e)}throw Error(o(438,String(e)))}function Vo(e){var t=null,n=Oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Oe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Os(),Oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=pe;return t.index++,n}function Ma(e,t){return typeof t=="function"?t(e):t}function ks(e){var t=pt();return qo(t,Ze,e)}function qo(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var c=e.baseQueue,u=i.pending;if(u!==null){if(c!==null){var g=c.next;c.next=u.next,u.next=g}t.baseQueue=c=u,i.pending=null}if(u=e.baseState,c===null)e.memoizedState=u;else{t=c.next;var v=g=null,N=null,D=t,Y=!1;do{var Z=D.lane&-536870913;if(Z!==D.lane?(Le&Z)===Z:(Ra&Z)===Z){var U=D.revertLane;if(U===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),Z===pi&&(Y=!0);else if((Ra&U)===U){D=D.next,U===pi&&(Y=!0);continue}else Z={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},N===null?(v=N=Z,g=u):N=N.next=Z,Oe.lanes|=U,sn|=U;Z=D.action,Mn&&n(u,Z),u=D.hasEagerState?D.eagerState:n(u,Z)}else U={lane:Z,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},N===null?(v=N=U,g=u):N=N.next=U,Oe.lanes|=Z,sn|=Z;D=D.next}while(D!==null&&D!==t);if(N===null?g=u:N.next=v,!Pt(u,e.memoizedState)&&(bt=!0,Y&&(n=hi,n!==null)))throw n;e.memoizedState=u,e.baseState=g,e.baseQueue=N,i.lastRenderedState=u}return c===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Go(e){var t=pt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,c=n.pending,u=t.memoizedState;if(c!==null){n.pending=null;var g=c=c.next;do u=e(u,g.action),g=g.next;while(g!==c);Pt(u,t.memoizedState)||(bt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,i]}function yf(e,t,n){var i=Oe,c=pt(),u=Ve;if(u){if(n===void 0)throw Error(o(407));n=n()}else n=t();var g=!Pt((Ze||c).memoizedState,n);if(g&&(c.memoizedState=n,bt=!0),c=c.queue,Fo(wf.bind(null,i,c,e),[e]),c.getSnapshot!==t||g||xt!==null&&xt.memoizedState.tag&1){if(i.flags|=2048,vi(9,{destroy:void 0},jf.bind(null,i,c,n,t),null),We===null)throw Error(o(349));u||(Ra&127)!==0||vf(i,t,n)}return n}function vf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t=Os(),Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jf(e,t,n,i){t.value=n,t.getSnapshot=i,Af(t)&&Sf(e)}function wf(e,t,n){return n(function(){Af(t)&&Sf(e)})}function Af(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pt(e,n)}catch{return!0}}function Sf(e){var t=Sn(e,2);t!==null&&Qt(t,e,2)}function Qo(e){var t=Bt();if(typeof e=="function"){var n=e;if(e=n(),Mn){me(!0);try{n()}finally{me(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:e},t}function Nf(e,t,n,i){return e.baseState=n,qo(e,Ze,typeof i=="function"?i:Ma)}function P0(e,t,n,i,c){if(Ms(e))throw Error(o(485));if(e=t.action,e!==null){var u={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){u.listeners.push(g)}};T.T!==null?n(!0):u.isTransition=!1,i(u),n=t.pending,n===null?(u.next=t.pending=u,Ef(t,u)):(u.next=n.next,t.pending=n.next=u)}}function Ef(e,t){var n=t.action,i=t.payload,c=e.state;if(t.isTransition){var u=T.T,g={};T.T=g;try{var v=n(c,i),N=T.S;N!==null&&N(g,v),Cf(e,t,v)}catch(D){Yo(e,t,D)}finally{u!==null&&g.types!==null&&(u.types=g.types),T.T=u}}else try{u=n(c,i),Cf(e,t,u)}catch(D){Yo(e,t,D)}}function Cf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Of(e,t,i)},function(i){return Yo(e,t,i)}):Of(e,t,n)}function Of(e,t,n){t.status="fulfilled",t.value=n,zf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ef(e,n)))}function Yo(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,zf(t),t=t.next;while(t!==i)}e.action=null}function zf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function kf(e,t){return t}function Tf(e,t){if(Ve){var n=We.formState;if(n!==null){e:{var i=Oe;if(Ve){if(tt){t:{for(var c=tt,u=ra;c.nodeType!==8;){if(!u){c=null;break t}if(c=la(c.nextSibling),c===null){c=null;break t}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){tt=la(c.nextSibling),i=c.data==="F!";break e}}Ja(i)}i=!1}i&&(t=n[0])}}return n=Bt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kf,lastRenderedState:t},n.queue=i,n=Jf.bind(null,Oe,i),i.dispatch=n,i=Qo(!1),u=Xo.bind(null,Oe,!1,i.queue),i=Bt(),c={state:t,dispatch:null,action:e,pending:null},i.queue=c,n=P0.bind(null,Oe,c,u,n),c.dispatch=n,i.memoizedState=e,[t,n,!1]}function Rf(e){var t=pt();return Mf(t,Ze,e)}function Mf(e,t,n){if(t=qo(e,t,kf)[0],e=ks(Ma)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=xr(t)}catch(g){throw g===mi?vs:g}else i=t;t=pt();var c=t.queue,u=c.dispatch;return n!==t.memoizedState&&(Oe.flags|=2048,vi(9,{destroy:void 0},Z0.bind(null,c,n),null)),[i,u,e]}function Z0(e,t){e.action=t}function Bf(e){var t=pt(),n=Ze;if(n!==null)return Mf(t,n,e);pt(),t=t.memoizedState,n=pt();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function vi(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Oe.updateQueue,t===null&&(t=Os(),Oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Df(){return pt().memoizedState}function Ts(e,t,n,i){var c=Bt();Oe.flags|=e,c.memoizedState=vi(1|t,{destroy:void 0},n,i===void 0?null:i)}function Rs(e,t,n,i){var c=pt();i=i===void 0?null:i;var u=c.memoizedState.inst;Ze!==null&&i!==null&&Bo(i,Ze.memoizedState.deps)?c.memoizedState=vi(t,u,n,i):(Oe.flags|=e,c.memoizedState=vi(1|t,u,n,i))}function Lf(e,t){Ts(8390656,8,e,t)}function Fo(e,t){Rs(2048,8,e,t)}function I0(e){Oe.flags|=4;var t=Oe.updateQueue;if(t===null)t=Os(),Oe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Uf(e){var t=pt().memoizedState;return I0({ref:t,nextImpl:e}),function(){if((Ye&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Hf(e,t){return Rs(4,2,e,t)}function Vf(e,t){return Rs(4,4,e,t)}function qf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gf(e,t,n){n=n!=null?n.concat([e]):null,Rs(4,4,qf.bind(null,t,e),n)}function Ko(){}function Qf(e,t){var n=pt();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Bo(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Yf(e,t){var n=pt();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Bo(t,i[1]))return i[0];if(i=e(),Mn){me(!0);try{e()}finally{me(!1)}}return n.memoizedState=[i,t],i}function Po(e,t,n){return n===void 0||(Ra&1073741824)!==0&&(Le&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Fp(),Oe.lanes|=e,sn|=e,n)}function Ff(e,t,n,i){return Pt(n,t)?n:xi.current!==null?(e=Po(e,n,i),Pt(e,t)||(bt=!0),e):(Ra&42)===0||(Ra&1073741824)!==0&&(Le&261930)===0?(bt=!0,e.memoizedState=n):(e=Fp(),Oe.lanes|=e,sn|=e,t)}function Kf(e,t,n,i,c){var u=_.p;_.p=u!==0&&8>u?u:8;var g=T.T,v={};T.T=v,Xo(e,!1,t,n);try{var N=c(),D=T.S;if(D!==null&&D(v,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var Y=Y0(N,i);br(e,t,Y,_t(e))}else br(e,t,i,_t(e))}catch(Z){br(e,t,{then:function(){},status:"rejected",reason:Z},_t())}finally{_.p=u,g!==null&&v.types!==null&&(g.types=v.types),T.T=g}}function X0(){}function Zo(e,t,n,i){if(e.tag!==5)throw Error(o(476));var c=Pf(e).queue;Kf(e,c,t,de,n===null?X0:function(){return Zf(e),n(i)})}function Pf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Zf(e){var t=Pf(e);t.next===null&&(t=e.alternate.memoizedState),br(e,t.next.queue,{},_t())}function Io(){return Ct(Dr)}function If(){return pt().memoizedState}function Xf(){return pt().memoizedState}function J0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=_t();e=$a(n);var i=en(t,e,n);i!==null&&(Qt(i,t,n),pr(i,t,n)),t={cache:Ao()},e.payload=t;return}t=t.return}}function W0(e,t,n){var i=_t();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ms(e)?Wf(t,n):(n=fo(e,t,n,i),n!==null&&(Qt(n,e,i),_f(n,t,i)))}function Jf(e,t,n){var i=_t();br(e,t,n,i)}function br(e,t,n,i){var c={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ms(e))Wf(t,c);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var g=t.lastRenderedState,v=u(g,n);if(c.hasEagerState=!0,c.eagerState=v,Pt(v,g))return ps(e,t,c,0),We===null&&fs(),!1}catch{}finally{}if(n=fo(e,t,c,i),n!==null)return Qt(n,e,i),_f(n,t,i),!0}return!1}function Xo(e,t,n,i){if(i={lane:2,revertLane:Cc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ms(e)){if(t)throw Error(o(479))}else t=fo(e,n,i,2),t!==null&&Qt(t,e,2)}function Ms(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function Wf(e,t){bi=Es=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _f(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,au(e,n)}}var yr={readContext:Ct,use:zs,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct};yr.useEffectEvent=ct;var $f={readContext:Ct,use:zs,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:Lf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ts(4194308,4,qf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ts(4194308,4,e,t)},useInsertionEffect:function(e,t){Ts(4,2,e,t)},useMemo:function(e,t){var n=Bt();t=t===void 0?null:t;var i=e();if(Mn){me(!0);try{e()}finally{me(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Bt();if(n!==void 0){var c=n(t);if(Mn){me(!0);try{n(t)}finally{me(!1)}}}else c=t;return i.memoizedState=i.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},i.queue=e,e=e.dispatch=W0.bind(null,Oe,e),[i.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:function(e){e=Qo(e);var t=e.queue,n=Jf.bind(null,Oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ko,useDeferredValue:function(e,t){var n=Bt();return Po(n,e,t)},useTransition:function(){var e=Qo(!1);return e=Kf.bind(null,Oe,e.queue,!0,!1),Bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Oe,c=Bt();if(Ve){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),We===null)throw Error(o(349));(Le&127)!==0||vf(i,t,n)}c.memoizedState=n;var u={value:n,getSnapshot:t};return c.queue=u,Lf(wf.bind(null,i,u,e),[e]),i.flags|=2048,vi(9,{destroy:void 0},jf.bind(null,i,u,n,t),null),n},useId:function(){var e=Bt(),t=We.identifierPrefix;if(Ve){var n=ya,i=ba;n=(i&~(1<<32-ue(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Cs++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=F0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Io,useFormState:Tf,useActionState:Tf,useOptimistic:function(e){var t=Bt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Xo.bind(null,Oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Vo,useCacheRefresh:function(){return Bt().memoizedState=J0.bind(null,Oe)},useEffectEvent:function(e){var t=Bt(),n={impl:e};return t.memoizedState=n,function(){if((Ye&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Jo={readContext:Ct,use:zs,useCallback:Qf,useContext:Ct,useEffect:Fo,useImperativeHandle:Gf,useInsertionEffect:Hf,useLayoutEffect:Vf,useMemo:Yf,useReducer:ks,useRef:Df,useState:function(){return ks(Ma)},useDebugValue:Ko,useDeferredValue:function(e,t){var n=pt();return Ff(n,Ze.memoizedState,e,t)},useTransition:function(){var e=ks(Ma)[0],t=pt().memoizedState;return[typeof e=="boolean"?e:xr(e),t]},useSyncExternalStore:yf,useId:If,useHostTransitionStatus:Io,useFormState:Rf,useActionState:Rf,useOptimistic:function(e,t){var n=pt();return Nf(n,Ze,e,t)},useMemoCache:Vo,useCacheRefresh:Xf};Jo.useEffectEvent=Uf;var ep={readContext:Ct,use:zs,useCallback:Qf,useContext:Ct,useEffect:Fo,useImperativeHandle:Gf,useInsertionEffect:Hf,useLayoutEffect:Vf,useMemo:Yf,useReducer:Go,useRef:Df,useState:function(){return Go(Ma)},useDebugValue:Ko,useDeferredValue:function(e,t){var n=pt();return Ze===null?Po(n,e,t):Ff(n,Ze.memoizedState,e,t)},useTransition:function(){var e=Go(Ma)[0],t=pt().memoizedState;return[typeof e=="boolean"?e:xr(e),t]},useSyncExternalStore:yf,useId:If,useHostTransitionStatus:Io,useFormState:Bf,useActionState:Bf,useOptimistic:function(e,t){var n=pt();return Ze!==null?Nf(n,Ze,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Vo,useCacheRefresh:Xf};ep.useEffectEvent=Uf;function Wo(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _o={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=_t(),c=$a(i);c.payload=t,n!=null&&(c.callback=n),t=en(e,c,i),t!==null&&(Qt(t,e,i),pr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=_t(),c=$a(i);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=en(e,c,i),t!==null&&(Qt(t,e,i),pr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_t(),i=$a(n);i.tag=2,t!=null&&(i.callback=t),t=en(e,i,n),t!==null&&(Qt(t,e,n),pr(t,e,n))}};function tp(e,t,n,i,c,u,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,g):t.prototype&&t.prototype.isPureReactComponent?!rr(n,i)||!rr(c,u):!0}function ap(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function Bn(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}function np(e){us(e)}function ip(e){console.error(e)}function rp(e){us(e)}function Bs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function sp(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $o(e,t,n){return n=$a(n),n.tag=3,n.payload={element:null},n.callback=function(){Bs(e,t)},n}function lp(e){return e=$a(e),e.tag=3,e}function op(e,t,n,i){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var u=i.value;e.payload=function(){return c(u)},e.callback=function(){sp(t,n,i)}}var g=n.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){sp(t,n,i),typeof c!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})})}function _0(e,t,n,i,c){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&fi(t,n,c,!0),n=It.current,n!==null){switch(n.tag){case 31:case 13:return sa===null?Ps():n.alternate===null&&dt===0&&(dt=3),n.flags&=-257,n.flags|=65536,n.lanes=c,i===js?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Sc(e,i,c)),!1;case 22:return n.flags|=65536,i===js?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Sc(e,i,c)),!1}throw Error(o(435,n.tag))}return Sc(e,i,c),Ps(),!1}if(Ve)return t=It.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,i!==bo&&(e=Error(o(422),{cause:i}),or(aa(e,n)))):(i!==bo&&(t=Error(o(423),{cause:i}),or(aa(t,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,i=aa(i,n),c=$o(e.stateNode,i,c),zo(e,c),dt!==4&&(dt=2)),!1;var u=Error(o(520),{cause:i});if(u=aa(u,n),Cr===null?Cr=[u]:Cr.push(u),dt!==4&&(dt=2),t===null)return!0;i=aa(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=$o(n.stateNode,i,e),zo(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ln===null||!ln.has(u))))return n.flags|=65536,c&=-c,n.lanes|=c,c=lp(c),op(c,e,n,i),zo(n,c),!1}n=n.return}while(n!==null);return!1}var ec=Error(o(461)),bt=!1;function Ot(e,t,n,i){t.child=e===null?ff(t,null,n,i):Rn(t,e.child,n,i)}function cp(e,t,n,i,c){n=n.render;var u=t.ref;if("ref"in i){var g={};for(var v in i)v!=="ref"&&(g[v]=i[v])}else g=i;return On(t),i=Do(e,t,n,g,u,c),v=Lo(),e!==null&&!bt?(Uo(e,t,c),Ba(e,t,c)):(Ve&&v&&go(t),t.flags|=1,Ot(e,t,i,c),t.child)}function dp(e,t,n,i,c){if(e===null){var u=n.type;return typeof u=="function"&&!po(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,up(e,t,u,i,c)):(e=ms(n.type,null,i,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!oc(e,c)){var g=u.memoizedProps;if(n=n.compare,n=n!==null?n:rr,n(g,i)&&e.ref===t.ref)return Ba(e,t,c)}return t.flags|=1,e=Oa(u,i),e.ref=t.ref,e.return=t,t.child=e}function up(e,t,n,i,c){if(e!==null){var u=e.memoizedProps;if(rr(u,i)&&e.ref===t.ref)if(bt=!1,t.pendingProps=i=u,oc(e,c))(e.flags&131072)!==0&&(bt=!0);else return t.lanes=e.lanes,Ba(e,t,c)}return tc(e,t,n,i,c)}function fp(e,t,n,i){var c=i.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(i=t.child=e.child,c=0;i!==null;)c=c|i.lanes|i.childLanes,i=i.sibling;i=c&~u}else i=0,t.child=null;return pp(e,t,u,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ys(t,u!==null?u.cachePool:null),u!==null?mf(t,u):To(),gf(t);else return i=t.lanes=536870912,pp(e,t,u!==null?u.baseLanes|n:n,n,i)}else u!==null?(ys(t,u.cachePool),mf(t,u),an(),t.memoizedState=null):(e!==null&&ys(t,null),To(),an());return Ot(e,t,c,n),t.child}function vr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pp(e,t,n,i,c){var u=No();return u=u===null?null:{parent:gt._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&ys(t,null),To(),gf(t),e!==null&&fi(e,t,i,!0),t.childLanes=c,null}function Ds(e,t){return t=Us({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hp(e,t,n){return Rn(t,e.child,null,n),e=Ds(t,t.pendingProps),e.flags|=2,Xt(t),t.memoizedState=null,e}function $0(e,t,n){var i=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ve){if(i.mode==="hidden")return e=Ds(t,i),t.lanes=536870912,vr(null,e);if(Mo(t),(e=tt)?(e=Eh(e,ra),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ia!==null?{id:ba,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},n=Ju(e),n.return=t,t.child=n,Et=t,tt=null)):e=null,e===null)throw Ja(t);return t.lanes=536870912,null}return Ds(t,i)}var u=e.memoizedState;if(u!==null){var g=u.dehydrated;if(Mo(t),c)if(t.flags&256)t.flags&=-257,t=hp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(bt||fi(e,t,n,!1),c=(n&e.childLanes)!==0,bt||c){if(i=We,i!==null&&(g=nu(i,n),g!==0&&g!==u.retryLane))throw u.retryLane=g,Sn(e,g),Qt(i,e,g),ec;Ps(),t=hp(e,t,n)}else e=u.treeContext,tt=la(g.nextSibling),Et=t,Ve=!0,Xa=null,ra=!1,e!==null&&$u(t,e),t=Ds(t,i),t.flags|=4096;return t}return e=Oa(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ls(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function tc(e,t,n,i,c){return On(t),n=Do(e,t,n,i,void 0,c),i=Lo(),e!==null&&!bt?(Uo(e,t,c),Ba(e,t,c)):(Ve&&i&&go(t),t.flags|=1,Ot(e,t,n,c),t.child)}function mp(e,t,n,i,c,u){return On(t),t.updateQueue=null,n=bf(t,i,n,c),xf(e),i=Lo(),e!==null&&!bt?(Uo(e,t,u),Ba(e,t,u)):(Ve&&i&&go(t),t.flags|=1,Ot(e,t,n,u),t.child)}function gp(e,t,n,i,c){if(On(t),t.stateNode===null){var u=oi,g=n.contextType;typeof g=="object"&&g!==null&&(u=Ct(g)),u=new n(i,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=_o,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=i,u.state=t.memoizedState,u.refs={},Co(t),g=n.contextType,u.context=typeof g=="object"&&g!==null?Ct(g):oi,u.state=t.memoizedState,g=n.getDerivedStateFromProps,typeof g=="function"&&(Wo(t,n,g,i),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(g=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),g!==u.state&&_o.enqueueReplaceState(u,u.state,null),mr(t,i,u,c),hr(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){u=t.stateNode;var v=t.memoizedProps,N=Bn(n,v);u.props=N;var D=u.context,Y=n.contextType;g=oi,typeof Y=="object"&&Y!==null&&(g=Ct(Y));var Z=n.getDerivedStateFromProps;Y=typeof Z=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,Y||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||D!==g)&&ap(t,u,i,g),_a=!1;var U=t.memoizedState;u.state=U,mr(t,i,u,c),hr(),D=t.memoizedState,v||U!==D||_a?(typeof Z=="function"&&(Wo(t,n,Z,i),D=t.memoizedState),(N=_a||tp(t,n,N,i,U,D,g))?(Y||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=D),u.props=i,u.state=D,u.context=g,i=N):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,Oo(e,t),g=t.memoizedProps,Y=Bn(n,g),u.props=Y,Z=t.pendingProps,U=u.context,D=n.contextType,N=oi,typeof D=="object"&&D!==null&&(N=Ct(D)),v=n.getDerivedStateFromProps,(D=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==Z||U!==N)&&ap(t,u,i,N),_a=!1,U=t.memoizedState,u.state=U,mr(t,i,u,c),hr();var G=t.memoizedState;g!==Z||U!==G||_a||e!==null&&e.dependencies!==null&&xs(e.dependencies)?(typeof v=="function"&&(Wo(t,n,v,i),G=t.memoizedState),(Y=_a||tp(t,n,Y,i,U,G,N)||e!==null&&e.dependencies!==null&&xs(e.dependencies))?(D||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,G,N),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,G,N)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=G),u.props=i,u.state=G,u.context=N,i=Y):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),i=!1)}return u=i,Ls(e,t),i=(t.flags&128)!==0,u||i?(u=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&i?(t.child=Rn(t,e.child,null,c),t.child=Rn(t,null,n,c)):Ot(e,t,n,c),t.memoizedState=u.state,e=t.child):e=Ba(e,t,c),e}function xp(e,t,n,i){return En(),t.flags|=256,Ot(e,t,n,i),t.child}var ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nc(e){return{baseLanes:e,cachePool:sf()}}function ic(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Wt),e}function bp(e,t,n){var i=t.pendingProps,c=!1,u=(t.flags&128)!==0,g;if((g=u)||(g=e!==null&&e.memoizedState===null?!1:(ft.current&2)!==0),g&&(c=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ve){if(c?tn(t):an(),(e=tt)?(e=Eh(e,ra),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ia!==null?{id:ba,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},n=Ju(e),n.return=t,t.child=n,Et=t,tt=null)):e=null,e===null)throw Ja(t);return qc(e)?t.lanes=32:t.lanes=536870912,null}var v=i.children;return i=i.fallback,c?(an(),c=t.mode,v=Us({mode:"hidden",children:v},c),i=Nn(i,c,n,null),v.return=t,i.return=t,v.sibling=i,t.child=v,i=t.child,i.memoizedState=nc(n),i.childLanes=ic(e,g,n),t.memoizedState=ac,vr(null,i)):(tn(t),rc(t,v))}var N=e.memoizedState;if(N!==null&&(v=N.dehydrated,v!==null)){if(u)t.flags&256?(tn(t),t.flags&=-257,t=sc(e,t,n)):t.memoizedState!==null?(an(),t.child=e.child,t.flags|=128,t=null):(an(),v=i.fallback,c=t.mode,i=Us({mode:"visible",children:i.children},c),v=Nn(v,c,n,null),v.flags|=2,i.return=t,v.return=t,i.sibling=v,t.child=i,Rn(t,e.child,null,n),i=t.child,i.memoizedState=nc(n),i.childLanes=ic(e,g,n),t.memoizedState=ac,t=vr(null,i));else if(tn(t),qc(v)){if(g=v.nextSibling&&v.nextSibling.dataset,g)var D=g.dgst;g=D,i=Error(o(419)),i.stack="",i.digest=g,or({value:i,source:null,stack:null}),t=sc(e,t,n)}else if(bt||fi(e,t,n,!1),g=(n&e.childLanes)!==0,bt||g){if(g=We,g!==null&&(i=nu(g,n),i!==0&&i!==N.retryLane))throw N.retryLane=i,Sn(e,i),Qt(g,e,i),ec;Vc(v)||Ps(),t=sc(e,t,n)}else Vc(v)?(t.flags|=192,t.child=e.child,t=null):(e=N.treeContext,tt=la(v.nextSibling),Et=t,Ve=!0,Xa=null,ra=!1,e!==null&&$u(t,e),t=rc(t,i.children),t.flags|=4096);return t}return c?(an(),v=i.fallback,c=t.mode,N=e.child,D=N.sibling,i=Oa(N,{mode:"hidden",children:i.children}),i.subtreeFlags=N.subtreeFlags&65011712,D!==null?v=Oa(D,v):(v=Nn(v,c,n,null),v.flags|=2),v.return=t,i.return=t,i.sibling=v,t.child=i,vr(null,i),i=t.child,v=e.child.memoizedState,v===null?v=nc(n):(c=v.cachePool,c!==null?(N=gt._currentValue,c=c.parent!==N?{parent:N,pool:N}:c):c=sf(),v={baseLanes:v.baseLanes|n,cachePool:c}),i.memoizedState=v,i.childLanes=ic(e,g,n),t.memoizedState=ac,vr(e.child,i)):(tn(t),n=e.child,e=n.sibling,n=Oa(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=n,t.memoizedState=null,n)}function rc(e,t){return t=Us({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Us(e,t){return e=Zt(22,e,null,t),e.lanes=0,e}function sc(e,t,n){return Rn(t,e.child,null,n),e=rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yp(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),jo(e.return,t,n)}function lc(e,t,n,i,c,u){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:c,treeForkCount:u}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=i,g.tail=n,g.tailMode=c,g.treeForkCount=u)}function vp(e,t,n){var i=t.pendingProps,c=i.revealOrder,u=i.tail;i=i.children;var g=ft.current,v=(g&2)!==0;if(v?(g=g&1|2,t.flags|=128):g&=1,J(ft,g),Ot(e,t,i,n),i=Ve?lr:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yp(e,n,t);else if(e.tag===19)yp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(n=t.child,c=null;n!==null;)e=n.alternate,e!==null&&Ns(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=t.child,t.child=null):(c=n.sibling,n.sibling=null),lc(t,!1,c,n,u,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Ns(e)===null){t.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}lc(t,!0,n,null,u,i);break;case"together":lc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Ba(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(fi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Oa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Oa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function oc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xs(e)))}function e1(e,t,n){switch(t.tag){case 3:nt(t,t.stateNode.containerInfo),Wa(t,gt,e.memoizedState.cache),En();break;case 27:case 5:Dt(t);break;case 4:nt(t,t.stateNode.containerInfo);break;case 10:Wa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Mo(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(tn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?bp(e,t,n):(tn(t),e=Ba(e,t,n),e!==null?e.sibling:null);tn(t);break;case 19:var c=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(fi(e,t,n,!1),i=(n&t.childLanes)!==0),c){if(i)return vp(e,t,n);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),J(ft,ft.current),i)break;return null;case 22:return t.lanes=0,fp(e,t,n,t.pendingProps);case 24:Wa(t,gt,e.memoizedState.cache)}return Ba(e,t,n)}function jp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)bt=!0;else{if(!oc(e,n)&&(t.flags&128)===0)return bt=!1,e1(e,t,n);bt=(e.flags&131072)!==0}else bt=!1,Ve&&(t.flags&1048576)!==0&&_u(t,lr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=kn(t.elementType),t.type=e,typeof e=="function")po(e)?(i=Bn(e,i),t.tag=1,t=gp(null,t,e,i,n)):(t.tag=0,t=tc(null,t,e,i,n));else{if(e!=null){var c=e.$$typeof;if(c===re){t.tag=11,t=cp(null,t,e,i,n);break e}else if(c===te){t.tag=14,t=dp(null,t,e,i,n);break e}}throw t=I(e)||e,Error(o(306,t,""))}}return t;case 0:return tc(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,c=Bn(i,t.pendingProps),gp(e,t,i,c,n);case 3:e:{if(nt(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var u=t.memoizedState;c=u.element,Oo(e,t),mr(t,i,null,n);var g=t.memoizedState;if(i=g.cache,Wa(t,gt,i),i!==u.cache&&wo(t,[gt],n,!0),hr(),i=g.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=xp(e,t,i,n);break e}else if(i!==c){c=aa(Error(o(424)),t),or(c),t=xp(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tt=la(e.firstChild),Et=t,Ve=!0,Xa=null,ra=!0,n=ff(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(En(),i===c){t=Ba(e,t,n);break e}Ot(e,t,i,n)}t=t.child}return t;case 26:return Ls(e,t),e===null?(n=Rh(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ve||(n=t.type,e=t.pendingProps,i=$s(Se.current).createElement(n),i[Nt]=t,i[Lt]=e,zt(i,n,e),jt(i),t.stateNode=i):t.memoizedState=Rh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Dt(t),e===null&&Ve&&(i=t.stateNode=zh(t.type,t.pendingProps,Se.current),Et=t,ra=!0,c=tt,un(t.type)?(Gc=c,tt=la(i.firstChild)):tt=c),Ot(e,t,t.pendingProps.children,n),Ls(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ve&&((c=i=tt)&&(i=k1(i,t.type,t.pendingProps,ra),i!==null?(t.stateNode=i,Et=t,tt=la(i.firstChild),ra=!1,c=!0):c=!1),c||Ja(t)),Dt(t),c=t.type,u=t.pendingProps,g=e!==null?e.memoizedProps:null,i=u.children,Lc(c,u)?i=null:g!==null&&Lc(c,g)&&(t.flags|=32),t.memoizedState!==null&&(c=Do(e,t,K0,null,null,n),Dr._currentValue=c),Ls(e,t),Ot(e,t,i,n),t.child;case 6:return e===null&&Ve&&((e=n=tt)&&(n=T1(n,t.pendingProps,ra),n!==null?(t.stateNode=n,Et=t,tt=null,e=!0):e=!1),e||Ja(t)),null;case 13:return bp(e,t,n);case 4:return nt(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Rn(t,null,i,n):Ot(e,t,i,n),t.child;case 11:return cp(e,t,t.type,t.pendingProps,n);case 7:return Ot(e,t,t.pendingProps,n),t.child;case 8:return Ot(e,t,t.pendingProps.children,n),t.child;case 12:return Ot(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Wa(t,t.type,i.value),Ot(e,t,i.children,n),t.child;case 9:return c=t.type._context,i=t.pendingProps.children,On(t),c=Ct(c),i=i(c),t.flags|=1,Ot(e,t,i,n),t.child;case 14:return dp(e,t,t.type,t.pendingProps,n);case 15:return up(e,t,t.type,t.pendingProps,n);case 19:return vp(e,t,n);case 31:return $0(e,t,n);case 22:return fp(e,t,n,t.pendingProps);case 24:return On(t),i=Ct(gt),e===null?(c=No(),c===null&&(c=We,u=Ao(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=n),c=u),t.memoizedState={parent:i,cache:c},Co(t),Wa(t,gt,c)):((e.lanes&n)!==0&&(Oo(e,t),mr(t,null,null,n),hr()),c=e.memoizedState,u=t.memoizedState,c.parent!==i?(c={parent:i,cache:i},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),Wa(t,gt,i)):(i=u.cache,Wa(t,gt,i),i!==c.cache&&wo(t,[gt],n,!0))),Ot(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Da(e){e.flags|=4}function cc(e,t,n,i,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Ip())e.flags|=8192;else throw Tn=js,Eo}else e.flags&=-16777217}function wp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Uh(t))if(Ip())e.flags|=8192;else throw Tn=js,Eo}function Hs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ii():536870912,e.lanes|=t,Si|=t)}function jr(e,t){if(!Ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,i|=c.subtreeFlags&65011712,i|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,i|=c.subtreeFlags,i|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function t1(e,t,n){var i=t.pendingProps;switch(xo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return at(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ta(gt),Je(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ui(t)?Da(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yo())),at(t),null;case 26:var c=t.type,u=t.memoizedState;return e===null?(Da(t),u!==null?(at(t),wp(t,u)):(at(t),cc(t,c,null,i,n))):u?u!==e.memoizedState?(Da(t),at(t),wp(t,u)):(at(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Da(t),at(t),cc(t,c,e,i,n)),null;case 27:if(lt(t),n=Se.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Da(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return at(t),null}e=se.current,ui(t)?ef(t):(e=zh(c,i,n),t.stateNode=e,Da(t))}return at(t),null;case 5:if(lt(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Da(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return at(t),null}if(u=se.current,ui(t))ef(t);else{var g=$s(Se.current);switch(u){case 1:u=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=g.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?g.createElement("select",{is:i.is}):g.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?g.createElement(c,{is:i.is}):g.createElement(c)}}u[Nt]=t,u[Lt]=i;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)u.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=u;e:switch(zt(u,c,i),c){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Da(t)}}return at(t),cc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Da(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=Se.current,ui(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,c=Et,c!==null)switch(c.tag){case 27:case 5:i=c.memoizedProps}e[Nt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||bh(e.nodeValue,n)),e||Ja(t,!0)}else e=$s(e).createTextNode(i),e[Nt]=t,t.stateNode=e}return at(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ui(t),n!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Nt]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),e=!1}else n=yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Xt(t),t):(Xt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return at(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ui(t),i!==null&&i.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[Nt]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),c=!1}else c=yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Xt(t),t):(Xt(t),null)}return Xt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,c=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(c=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==c&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Hs(t,t.updateQueue),at(t),null);case 4:return Je(),e===null&&Tc(t.stateNode.containerInfo),at(t),null;case 10:return Ta(t.type),at(t),null;case 19:if(H(ft),i=t.memoizedState,i===null)return at(t),null;if(c=(t.flags&128)!==0,u=i.rendering,u===null)if(c)jr(i,!1);else{if(dt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Ns(e),u!==null){for(t.flags|=128,jr(i,!1),e=u.updateQueue,t.updateQueue=e,Hs(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Xu(n,e),n=n.sibling;return J(ft,ft.current&1|2),Ve&&za(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Mt()>Ys&&(t.flags|=128,c=!0,jr(i,!1),t.lanes=4194304)}else{if(!c)if(e=Ns(u),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,Hs(t,e),jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Ve)return at(t),null}else 2*Mt()-i.renderingStartTime>Ys&&n!==536870912&&(t.flags|=128,c=!0,jr(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Mt(),e.sibling=null,n=ft.current,J(ft,c?n&1|2:n&1),Ve&&za(t,i.treeForkCount),e):(at(t),null);case 22:case 23:return Xt(t),Ro(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),n=t.updateQueue,n!==null&&Hs(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&H(zn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ta(gt),at(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function a1(e,t){switch(xo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ta(gt),Je(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return lt(t),null;case 31:if(t.memoizedState!==null){if(Xt(t),t.alternate===null)throw Error(o(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Xt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(ft),null;case 4:return Je(),null;case 10:return Ta(t.type),null;case 22:case 23:return Xt(t),Ro(),e!==null&&H(zn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ta(gt),null;case 25:return null;default:return null}}function Ap(e,t){switch(xo(t),t.tag){case 3:Ta(gt),Je();break;case 26:case 27:case 5:lt(t);break;case 4:Je();break;case 31:t.memoizedState!==null&&Xt(t);break;case 13:Xt(t);break;case 19:H(ft);break;case 10:Ta(t.type);break;case 22:case 23:Xt(t),Ro(),e!==null&&H(zn);break;case 24:Ta(gt)}}function wr(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var c=i.next;n=c;do{if((n.tag&e)===e){i=void 0;var u=n.create,g=n.inst;i=u(),g.destroy=i}n=n.next}while(n!==c)}}catch(v){Pe(t,t.return,v)}}function nn(e,t,n){try{var i=t.updateQueue,c=i!==null?i.lastEffect:null;if(c!==null){var u=c.next;i=u;do{if((i.tag&e)===e){var g=i.inst,v=g.destroy;if(v!==void 0){g.destroy=void 0,c=t;var N=n,D=v;try{D()}catch(Y){Pe(c,N,Y)}}}i=i.next}while(i!==u)}}catch(Y){Pe(t,t.return,Y)}}function Sp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{hf(t,n)}catch(i){Pe(e,e.return,i)}}}function Np(e,t,n){n.props=Bn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Pe(e,t,i)}}function Ar(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(c){Pe(e,t,c)}}function va(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(c){Pe(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){Pe(e,t,c)}else n.current=null}function Ep(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(c){Pe(e,e.return,c)}}function dc(e,t,n){try{var i=e.stateNode;S1(i,e.type,n,t),i[Lt]=t}catch(c){Pe(e,e.return,c)}}function Cp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&un(e.type)||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&un(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ea));else if(i!==4&&(i===27&&un(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(fc(e,t,n),e=e.sibling;e!==null;)fc(e,t,n),e=e.sibling}function Vs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&un(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Vs(e,t,n),e=e.sibling;e!==null;)Vs(e,t,n),e=e.sibling}function Op(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);zt(t,i,n),t[Nt]=e,t[Lt]=n}catch(u){Pe(e,e.return,u)}}var La=!1,yt=!1,pc=!1,zp=typeof WeakSet=="function"?WeakSet:Set,wt=null;function n1(e,t){if(e=e.containerInfo,Bc=sl,e=qu(e),ro(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var c=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var g=0,v=-1,N=-1,D=0,Y=0,Z=e,U=null;t:for(;;){for(var G;Z!==n||c!==0&&Z.nodeType!==3||(v=g+c),Z!==u||i!==0&&Z.nodeType!==3||(N=g+i),Z.nodeType===3&&(g+=Z.nodeValue.length),(G=Z.firstChild)!==null;)U=Z,Z=G;for(;;){if(Z===e)break t;if(U===n&&++D===c&&(v=g),U===u&&++Y===i&&(N=g),(G=Z.nextSibling)!==null)break;Z=U,U=Z.parentNode}Z=G}n=v===-1||N===-1?null:{start:v,end:N}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dc={focusedElem:e,selectionRange:n},sl=!1,wt=t;wt!==null;)if(t=wt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,wt=e;else for(;wt!==null;){switch(t=wt,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)c=e[n],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,c=u.memoizedProps,u=u.memoizedState,i=n.stateNode;try{var xe=Bn(n.type,c);e=i.getSnapshotBeforeUpdate(xe,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(we){Pe(n,n.return,we)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Hc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,wt=e;break}wt=t.return}}function kp(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ha(e,n),i&4&&wr(5,n);break;case 1:if(Ha(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(g){Pe(n,n.return,g)}else{var c=Bn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Pe(n,n.return,g)}}i&64&&Sp(n),i&512&&Ar(n,n.return);break;case 3:if(Ha(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{hf(e,t)}catch(g){Pe(n,n.return,g)}}break;case 27:t===null&&i&4&&Op(n);case 26:case 5:Ha(e,n),t===null&&i&4&&Ep(n),i&512&&Ar(n,n.return);break;case 12:Ha(e,n);break;case 31:Ha(e,n),i&4&&Mp(e,n);break;case 13:Ha(e,n),i&4&&Bp(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=f1.bind(null,n),R1(e,n))));break;case 22:if(i=n.memoizedState!==null||La,!i){t=t!==null&&t.memoizedState!==null||yt,c=La;var u=yt;La=i,(yt=t)&&!u?Va(e,n,(n.subtreeFlags&8772)!==0):Ha(e,n),La=c,yt=u}break;case 30:break;default:Ha(e,n)}}function Tp(e){var t=e.alternate;t!==null&&(e.alternate=null,Tp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ql(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rt=null,Ht=!1;function Ua(e,t,n){for(n=n.child;n!==null;)Rp(e,t,n),n=n.sibling}function Rp(e,t,n){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(P,n)}catch{}switch(n.tag){case 26:yt||va(n,t),Ua(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:yt||va(n,t);var i=rt,c=Ht;un(n.type)&&(rt=n.stateNode,Ht=!1),Ua(e,t,n),Rr(n.stateNode),rt=i,Ht=c;break;case 5:yt||va(n,t);case 6:if(i=rt,c=Ht,rt=null,Ua(e,t,n),rt=i,Ht=c,rt!==null)if(Ht)try{(rt.nodeType===9?rt.body:rt.nodeName==="HTML"?rt.ownerDocument.body:rt).removeChild(n.stateNode)}catch(u){Pe(n,t,u)}else try{rt.removeChild(n.stateNode)}catch(u){Pe(n,t,u)}break;case 18:rt!==null&&(Ht?(e=rt,Sh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ri(e)):Sh(rt,n.stateNode));break;case 4:i=rt,c=Ht,rt=n.stateNode.containerInfo,Ht=!0,Ua(e,t,n),rt=i,Ht=c;break;case 0:case 11:case 14:case 15:nn(2,n,t),yt||nn(4,n,t),Ua(e,t,n);break;case 1:yt||(va(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Np(n,t,i)),Ua(e,t,n);break;case 21:Ua(e,t,n);break;case 22:yt=(i=yt)||n.memoizedState!==null,Ua(e,t,n),yt=i;break;default:Ua(e,t,n)}}function Mp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ri(e)}catch(n){Pe(t,t.return,n)}}}function Bp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ri(e)}catch(n){Pe(t,t.return,n)}}function i1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zp),t;default:throw Error(o(435,e.tag))}}function qs(e,t){var n=i1(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var c=p1.bind(null,e,i);i.then(c,c)}})}function Vt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var c=n[i],u=e,g=t,v=g;e:for(;v!==null;){switch(v.tag){case 27:if(un(v.type)){rt=v.stateNode,Ht=!1;break e}break;case 5:rt=v.stateNode,Ht=!1;break e;case 3:case 4:rt=v.stateNode.containerInfo,Ht=!0;break e}v=v.return}if(rt===null)throw Error(o(160));Rp(u,g,c),rt=null,Ht=!1,u=c.alternate,u!==null&&(u.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Dp(t,e),t=t.sibling}var pa=null;function Dp(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vt(t,e),qt(e),i&4&&(nn(3,e,e.return),wr(3,e),nn(5,e,e.return));break;case 1:Vt(t,e),qt(e),i&512&&(yt||n===null||va(n,n.return)),i&64&&La&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var c=pa;if(Vt(t,e),qt(e),i&512&&(yt||n===null||va(n,n.return)),i&4){var u=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(i){case"title":u=c.getElementsByTagName("title")[0],(!u||u[Ji]||u[Nt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=c.createElement(i),c.head.insertBefore(u,c.querySelector("head > title"))),zt(u,i,n),u[Nt]=e,jt(u),i=u;break e;case"link":var g=Dh("link","href",c).get(i+(n.href||""));if(g){for(var v=0;v<g.length;v++)if(u=g[v],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){g.splice(v,1);break t}}u=c.createElement(i),zt(u,i,n),c.head.appendChild(u);break;case"meta":if(g=Dh("meta","content",c).get(i+(n.content||""))){for(v=0;v<g.length;v++)if(u=g[v],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){g.splice(v,1);break t}}u=c.createElement(i),zt(u,i,n),c.head.appendChild(u);break;default:throw Error(o(468,i))}u[Nt]=e,jt(u),i=u}e.stateNode=i}else Lh(c,e.type,e.stateNode);else e.stateNode=Bh(c,i,e.memoizedProps);else u!==i?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,i===null?Lh(c,e.type,e.stateNode):Bh(c,i,e.memoizedProps)):i===null&&e.stateNode!==null&&dc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Vt(t,e),qt(e),i&512&&(yt||n===null||va(n,n.return)),n!==null&&i&4&&dc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Vt(t,e),qt(e),i&512&&(yt||n===null||va(n,n.return)),e.flags&32){c=e.stateNode;try{ti(c,"")}catch(xe){Pe(e,e.return,xe)}}i&4&&e.stateNode!=null&&(c=e.memoizedProps,dc(e,c,n!==null?n.memoizedProps:c)),i&1024&&(pc=!0);break;case 6:if(Vt(t,e),qt(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(xe){Pe(e,e.return,xe)}}break;case 3:if(al=null,c=pa,pa=el(t.containerInfo),Vt(t,e),pa=c,qt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ri(t.containerInfo)}catch(xe){Pe(e,e.return,xe)}pc&&(pc=!1,Lp(e));break;case 4:i=pa,pa=el(e.stateNode.containerInfo),Vt(t,e),qt(e),pa=i;break;case 12:Vt(t,e),qt(e);break;case 31:Vt(t,e),qt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,qs(e,i)));break;case 13:Vt(t,e),qt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Qs=Mt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,qs(e,i)));break;case 22:c=e.memoizedState!==null;var N=n!==null&&n.memoizedState!==null,D=La,Y=yt;if(La=D||c,yt=Y||N,Vt(t,e),yt=Y,La=D,qt(e),i&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(n===null||N||La||yt||Dn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){N=n=t;try{if(u=N.stateNode,c)g=u.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{v=N.stateNode;var Z=N.memoizedProps.style,U=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;v.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(xe){Pe(N,N.return,xe)}}}else if(t.tag===6){if(n===null){N=t;try{N.stateNode.nodeValue=c?"":N.memoizedProps}catch(xe){Pe(N,N.return,xe)}}}else if(t.tag===18){if(n===null){N=t;try{var G=N.stateNode;c?Nh(G,!0):Nh(N.stateNode,!1)}catch(xe){Pe(N,N.return,xe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,qs(e,n))));break;case 19:Vt(t,e),qt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,qs(e,i)));break;case 30:break;case 21:break;default:Vt(t,e),qt(e)}}function qt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Cp(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var c=n.stateNode,u=uc(e);Vs(e,u,c);break;case 5:var g=n.stateNode;n.flags&32&&(ti(g,""),n.flags&=-33);var v=uc(e);Vs(e,v,g);break;case 3:case 4:var N=n.stateNode.containerInfo,D=uc(e);fc(e,D,N);break;default:throw Error(o(161))}}catch(Y){Pe(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Lp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ha(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)kp(e,t.alternate,t),t=t.sibling}function Dn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:nn(4,t,t.return),Dn(t);break;case 1:va(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Np(t,t.return,n),Dn(t);break;case 27:Rr(t.stateNode);case 26:case 5:va(t,t.return),Dn(t);break;case 22:t.memoizedState===null&&Dn(t);break;case 30:Dn(t);break;default:Dn(t)}e=e.sibling}}function Va(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,c=e,u=t,g=u.flags;switch(u.tag){case 0:case 11:case 15:Va(c,u,n),wr(4,u);break;case 1:if(Va(c,u,n),i=u,c=i.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(D){Pe(i,i.return,D)}if(i=u,c=i.updateQueue,c!==null){var v=i.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)pf(N[c],v)}catch(D){Pe(i,i.return,D)}}n&&g&64&&Sp(u),Ar(u,u.return);break;case 27:Op(u);case 26:case 5:Va(c,u,n),n&&i===null&&g&4&&Ep(u),Ar(u,u.return);break;case 12:Va(c,u,n);break;case 31:Va(c,u,n),n&&g&4&&Mp(c,u);break;case 13:Va(c,u,n),n&&g&4&&Bp(c,u);break;case 22:u.memoizedState===null&&Va(c,u,n),Ar(u,u.return);break;case 30:break;default:Va(c,u,n)}t=t.sibling}}function hc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&cr(n))}function mc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cr(e))}function ha(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Up(e,t,n,i),t=t.sibling}function Up(e,t,n,i){var c=t.flags;switch(t.tag){case 0:case 11:case 15:ha(e,t,n,i),c&2048&&wr(9,t);break;case 1:ha(e,t,n,i);break;case 3:ha(e,t,n,i),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cr(e)));break;case 12:if(c&2048){ha(e,t,n,i),e=t.stateNode;try{var u=t.memoizedProps,g=u.id,v=u.onPostCommit;typeof v=="function"&&v(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Pe(t,t.return,N)}}else ha(e,t,n,i);break;case 31:ha(e,t,n,i);break;case 13:ha(e,t,n,i);break;case 23:break;case 22:u=t.stateNode,g=t.alternate,t.memoizedState!==null?u._visibility&2?ha(e,t,n,i):Sr(e,t):u._visibility&2?ha(e,t,n,i):(u._visibility|=2,ji(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),c&2048&&hc(g,t);break;case 24:ha(e,t,n,i),c&2048&&mc(t.alternate,t);break;default:ha(e,t,n,i)}}function ji(e,t,n,i,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,g=t,v=n,N=i,D=g.flags;switch(g.tag){case 0:case 11:case 15:ji(u,g,v,N,c),wr(8,g);break;case 23:break;case 22:var Y=g.stateNode;g.memoizedState!==null?Y._visibility&2?ji(u,g,v,N,c):Sr(u,g):(Y._visibility|=2,ji(u,g,v,N,c)),c&&D&2048&&hc(g.alternate,g);break;case 24:ji(u,g,v,N,c),c&&D&2048&&mc(g.alternate,g);break;default:ji(u,g,v,N,c)}t=t.sibling}}function Sr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,c=i.flags;switch(i.tag){case 22:Sr(n,i),c&2048&&hc(i.alternate,i);break;case 24:Sr(n,i),c&2048&&mc(i.alternate,i);break;default:Sr(n,i)}t=t.sibling}}var Nr=8192;function wi(e,t,n){if(e.subtreeFlags&Nr)for(e=e.child;e!==null;)Hp(e,t,n),e=e.sibling}function Hp(e,t,n){switch(e.tag){case 26:wi(e,t,n),e.flags&Nr&&e.memoizedState!==null&&F1(n,pa,e.memoizedState,e.memoizedProps);break;case 5:wi(e,t,n);break;case 3:case 4:var i=pa;pa=el(e.stateNode.containerInfo),wi(e,t,n),pa=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Nr,Nr=16777216,wi(e,t,n),Nr=i):wi(e,t,n));break;default:wi(e,t,n)}}function Vp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Er(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];wt=i,Gp(i,e)}Vp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qp(e),e=e.sibling}function qp(e){switch(e.tag){case 0:case 11:case 15:Er(e),e.flags&2048&&nn(9,e,e.return);break;case 3:Er(e);break;case 12:Er(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gs(e)):Er(e);break;default:Er(e)}}function Gs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];wt=i,Gp(i,e)}Vp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:nn(8,t,t.return),Gs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Gs(t));break;default:Gs(t)}e=e.sibling}}function Gp(e,t){for(;wt!==null;){var n=wt;switch(n.tag){case 0:case 11:case 15:nn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:cr(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,wt=i;else e:for(n=e;wt!==null;){i=wt;var c=i.sibling,u=i.return;if(Tp(i),i===n){wt=null;break e}if(c!==null){c.return=u,wt=c;break e}wt=u}}}var r1={getCacheForType:function(e){var t=Ct(gt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ct(gt).controller.signal}},s1=typeof WeakMap=="function"?WeakMap:Map,Ye=0,We=null,Be=null,Le=0,Ke=0,Jt=null,rn=!1,Ai=!1,gc=!1,qa=0,dt=0,sn=0,Ln=0,xc=0,Wt=0,Si=0,Cr=null,Gt=null,bc=!1,Qs=0,Qp=0,Ys=1/0,Fs=null,ln=null,vt=0,on=null,Ni=null,Ga=0,yc=0,vc=null,Yp=null,Or=0,jc=null;function _t(){return(Ye&2)!==0&&Le!==0?Le&-Le:T.T!==null?Cc():iu()}function Fp(){if(Wt===0)if((Le&536870912)===0||Ve){var e=ot;ot<<=1,(ot&3932160)===0&&(ot=262144),Wt=e}else Wt=536870912;return e=It.current,e!==null&&(e.flags|=32),Wt}function Qt(e,t,n){(e===We&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)&&(Ei(e,0),cn(e,Le,Wt,!1)),Xi(e,n),((Ye&2)===0||e!==We)&&(e===We&&((Ye&2)===0&&(Ln|=n),dt===4&&cn(e,Le,Wt,!1)),ja(e))}function Kp(e,t,n){if((Ye&6)!==0)throw Error(o(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Kt(e,t),c=i?c1(e,t):Ac(e,t,!0),u=i;do{if(c===0){Ai&&!i&&cn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!l1(n)){c=Ac(e,t,!1),u=!1;continue}if(c===2){if(u=t,e.errorRecoveryDisabledLanes&u)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var v=e;c=Cr;var N=v.current.memoizedState.isDehydrated;if(N&&(Ei(v,g).flags|=256),g=Ac(v,g,!1),g!==2){if(gc&&!N){v.errorRecoveryDisabledLanes|=u,Ln|=u,c=4;break e}u=Gt,Gt=c,u!==null&&(Gt===null?Gt=u:Gt.push.apply(Gt,u))}c=g}if(u=!1,c!==2)continue}}if(c===1){Ei(e,0),cn(e,t,0,!0);break}e:{switch(i=e,u=c,u){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:cn(i,t,Wt,!rn);break e;case 2:Gt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(c=Qs+300-Mt(),10<c)){if(cn(i,t,Wt,!rn),ua(i,0,!0)!==0)break e;Ga=t,i.timeoutHandle=wh(Pp.bind(null,i,n,Gt,Fs,bc,t,Wt,Ln,Si,rn,u,"Throttled",-0,0),c);break e}Pp(i,n,Gt,Fs,bc,t,Wt,Ln,Si,rn,u,null,-0,0)}}break}while(!0);ja(e)}function Pp(e,t,n,i,c,u,g,v,N,D,Y,Z,U,G){if(e.timeoutHandle=-1,Z=t.subtreeFlags,Z&8192||(Z&16785408)===16785408){Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ea},Hp(t,u,Z);var xe=(u&62914560)===u?Qs-Mt():(u&4194048)===u?Qp-Mt():0;if(xe=K1(Z,xe),xe!==null){Ga=u,e.cancelPendingCommit=xe(eh.bind(null,e,t,u,n,i,c,g,v,N,Y,Z,null,U,G)),cn(e,u,g,!D);return}}eh(e,t,u,n,i,c,g,v,N)}function l1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var c=n[i],u=c.getSnapshot;c=c.value;try{if(!Pt(u(),c))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t,n,i){t&=~xc,t&=~Ln,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var c=t;0<c;){var u=31-ue(c),g=1<<u;i[u]=-1,c&=~g}n!==0&&tu(e,n,t)}function Ks(){return(Ye&6)===0?(zr(0),!1):!0}function wc(){if(Be!==null){if(Ke===0)var e=Be.return;else e=Be,ka=Cn=null,Ho(e),gi=null,ur=0,e=Be;for(;e!==null;)Ap(e.alternate,e),e=e.return;Be=null}}function Ei(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,C1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ga=0,wc(),We=e,Be=n=Oa(e.current,null),Le=t,Ke=0,Jt=null,rn=!1,Ai=Kt(e,t),gc=!1,Si=Wt=xc=Ln=sn=dt=0,Gt=Cr=null,bc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var c=31-ue(i),u=1<<c;t|=e[c],i&=~u}return qa=t,fs(),n}function Zp(e,t){Oe=null,T.H=yr,t===mi||t===vs?(t=cf(),Ke=3):t===Eo?(t=cf(),Ke=4):Ke=t===ec?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Jt=t,Be===null&&(dt=1,Bs(e,aa(t,e.current)))}function Ip(){var e=It.current;return e===null?!0:(Le&4194048)===Le?sa===null:(Le&62914560)===Le||(Le&536870912)!==0?e===sa:!1}function Xp(){var e=T.H;return T.H=yr,e===null?yr:e}function Jp(){var e=T.A;return T.A=r1,e}function Ps(){dt=4,rn||(Le&4194048)!==Le&&It.current!==null||(Ai=!0),(sn&134217727)===0&&(Ln&134217727)===0||We===null||cn(We,Le,Wt,!1)}function Ac(e,t,n){var i=Ye;Ye|=2;var c=Xp(),u=Jp();(We!==e||Le!==t)&&(Fs=null,Ei(e,t)),t=!1;var g=dt;e:do try{if(Ke!==0&&Be!==null){var v=Be,N=Jt;switch(Ke){case 8:wc(),g=6;break e;case 3:case 2:case 9:case 6:It.current===null&&(t=!0);var D=Ke;if(Ke=0,Jt=null,Ci(e,v,N,D),n&&Ai){g=0;break e}break;default:D=Ke,Ke=0,Jt=null,Ci(e,v,N,D)}}o1(),g=dt;break}catch(Y){Zp(e,Y)}while(!0);return t&&e.shellSuspendCounter++,ka=Cn=null,Ye=i,T.H=c,T.A=u,Be===null&&(We=null,Le=0,fs()),g}function o1(){for(;Be!==null;)Wp(Be)}function c1(e,t){var n=Ye;Ye|=2;var i=Xp(),c=Jp();We!==e||Le!==t?(Fs=null,Ys=Mt()+500,Ei(e,t)):Ai=Kt(e,t);e:do try{if(Ke!==0&&Be!==null){t=Be;var u=Jt;t:switch(Ke){case 1:Ke=0,Jt=null,Ci(e,t,u,1);break;case 2:case 9:if(lf(u)){Ke=0,Jt=null,_p(t);break}t=function(){Ke!==2&&Ke!==9||We!==e||(Ke=7),ja(e)},u.then(t,t);break e;case 3:Ke=7;break e;case 4:Ke=5;break e;case 7:lf(u)?(Ke=0,Jt=null,_p(t)):(Ke=0,Jt=null,Ci(e,t,u,7));break;case 5:var g=null;switch(Be.tag){case 26:g=Be.memoizedState;case 5:case 27:var v=Be;if(g?Uh(g):v.stateNode.complete){Ke=0,Jt=null;var N=v.sibling;if(N!==null)Be=N;else{var D=v.return;D!==null?(Be=D,Zs(D)):Be=null}break t}}Ke=0,Jt=null,Ci(e,t,u,5);break;case 6:Ke=0,Jt=null,Ci(e,t,u,6);break;case 8:wc(),dt=6;break e;default:throw Error(o(462))}}d1();break}catch(Y){Zp(e,Y)}while(!0);return ka=Cn=null,T.H=i,T.A=c,Ye=n,Be!==null?0:(We=null,Le=0,fs(),dt)}function d1(){for(;Be!==null&&!Pn();)Wp(Be)}function Wp(e){var t=jp(e.alternate,e,qa);e.memoizedProps=e.pendingProps,t===null?Zs(e):Be=t}function _p(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mp(n,t,t.pendingProps,t.type,void 0,Le);break;case 11:t=mp(n,t,t.pendingProps,t.type.render,t.ref,Le);break;case 5:Ho(t);default:Ap(n,t),t=Be=Xu(t,qa),t=jp(n,t,qa)}e.memoizedProps=e.pendingProps,t===null?Zs(e):Be=t}function Ci(e,t,n,i){ka=Cn=null,Ho(t),gi=null,ur=0;var c=t.return;try{if(_0(e,c,t,n,Le)){dt=1,Bs(e,aa(n,e.current)),Be=null;return}}catch(u){if(c!==null)throw Be=c,u;dt=1,Bs(e,aa(n,e.current)),Be=null;return}t.flags&32768?(Ve||i===1?e=!0:Ai||(Le&536870912)!==0?e=!1:(rn=e=!0,(i===2||i===9||i===3||i===6)&&(i=It.current,i!==null&&i.tag===13&&(i.flags|=16384))),$p(t,e)):Zs(t)}function Zs(e){var t=e;do{if((t.flags&32768)!==0){$p(t,rn);return}e=t.return;var n=t1(t.alternate,t,qa);if(n!==null){Be=n;return}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);dt===0&&(dt=5)}function $p(e,t){do{var n=a1(e.alternate,e);if(n!==null){n.flags&=32767,Be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Be=e;return}Be=e=n}while(e!==null);dt=6,Be=null}function eh(e,t,n,i,c,u,g,v,N){e.cancelPendingCommit=null;do Is();while(vt!==0);if((Ye&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(u=t.lanes|t.childLanes,u|=uo,Yx(e,n,u,g,v,N),e===We&&(Be=We=null,Le=0),Ni=t,on=e,Ga=n,yc=u,vc=c,Yp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,h1(ie,function(){return rh(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=T.T,T.T=null,c=_.p,_.p=2,g=Ye,Ye|=4;try{n1(e,t,n)}finally{Ye=g,_.p=c,T.T=i}}vt=1,th(),ah(),nh()}}function th(){if(vt===1){vt=0;var e=on,t=Ni,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=T.T,T.T=null;var i=_.p;_.p=2;var c=Ye;Ye|=4;try{Dp(t,e);var u=Dc,g=qu(e.containerInfo),v=u.focusedElem,N=u.selectionRange;if(g!==v&&v&&v.ownerDocument&&Vu(v.ownerDocument.documentElement,v)){if(N!==null&&ro(v)){var D=N.start,Y=N.end;if(Y===void 0&&(Y=D),"selectionStart"in v)v.selectionStart=D,v.selectionEnd=Math.min(Y,v.value.length);else{var Z=v.ownerDocument||document,U=Z&&Z.defaultView||window;if(U.getSelection){var G=U.getSelection(),xe=v.textContent.length,we=Math.min(N.start,xe),Xe=N.end===void 0?we:Math.min(N.end,xe);!G.extend&&we>Xe&&(g=Xe,Xe=we,we=g);var k=Hu(v,we),O=Hu(v,Xe);if(k&&O&&(G.rangeCount!==1||G.anchorNode!==k.node||G.anchorOffset!==k.offset||G.focusNode!==O.node||G.focusOffset!==O.offset)){var B=Z.createRange();B.setStart(k.node,k.offset),G.removeAllRanges(),we>Xe?(G.addRange(B),G.extend(O.node,O.offset)):(B.setEnd(O.node,O.offset),G.addRange(B))}}}}for(Z=[],G=v;G=G.parentNode;)G.nodeType===1&&Z.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<Z.length;v++){var K=Z[v];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}sl=!!Bc,Dc=Bc=null}finally{Ye=c,_.p=i,T.T=n}}e.current=t,vt=2}}function ah(){if(vt===2){vt=0;var e=on,t=Ni,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=T.T,T.T=null;var i=_.p;_.p=2;var c=Ye;Ye|=4;try{kp(e,t.alternate,t)}finally{Ye=c,_.p=i,T.T=n}}vt=3}}function nh(){if(vt===4||vt===3){vt=0,Zi();var e=on,t=Ni,n=Ga,i=Yp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?vt=5:(vt=0,Ni=on=null,ih(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ln=null),ql(n),t=t.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(P,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=T.T,c=_.p,_.p=2,T.T=null;try{for(var u=e.onRecoverableError,g=0;g<i.length;g++){var v=i[g];u(v.value,{componentStack:v.stack})}}finally{T.T=t,_.p=c}}(Ga&3)!==0&&Is(),ja(e),c=e.pendingLanes,(n&261930)!==0&&(c&42)!==0?e===jc?Or++:(Or=0,jc=e):Or=0,zr(0)}}function ih(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,cr(t)))}function Is(){return th(),ah(),nh(),rh()}function rh(){if(vt!==5)return!1;var e=on,t=yc;yc=0;var n=ql(Ga),i=T.T,c=_.p;try{_.p=32>n?32:n,T.T=null,n=vc,vc=null;var u=on,g=Ga;if(vt=0,Ni=on=null,Ga=0,(Ye&6)!==0)throw Error(o(331));var v=Ye;if(Ye|=4,qp(u.current),Up(u,u.current,g,n),Ye=v,zr(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(P,u)}catch{}return!0}finally{_.p=c,T.T=i,ih(e,t)}}function sh(e,t,n){t=aa(n,t),t=$o(e.stateNode,t,2),e=en(e,t,2),e!==null&&(Xi(e,2),ja(e))}function Pe(e,t,n){if(e.tag===3)sh(e,e,n);else for(;t!==null;){if(t.tag===3){sh(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ln===null||!ln.has(i))){e=aa(n,e),n=lp(2),i=en(t,n,2),i!==null&&(op(n,i,t,e),Xi(i,2),ja(i));break}}t=t.return}}function Sc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new s1;var c=new Set;i.set(t,c)}else c=i.get(t),c===void 0&&(c=new Set,i.set(t,c));c.has(n)||(gc=!0,c.add(n),e=u1.bind(null,e,t,n),t.then(e,e))}function u1(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,We===e&&(Le&n)===n&&(dt===4||dt===3&&(Le&62914560)===Le&&300>Mt()-Qs?(Ye&2)===0&&Ei(e,0):xc|=n,Si===Le&&(Si=0)),ja(e)}function lh(e,t){t===0&&(t=Ii()),e=Sn(e,t),e!==null&&(Xi(e,t),ja(e))}function f1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lh(e,n)}function p1(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),lh(e,n)}function h1(e,t){return Kn(e,t)}var Xs=null,Oi=null,Nc=!1,Js=!1,Ec=!1,dn=0;function ja(e){e!==Oi&&e.next===null&&(Oi===null?Xs=Oi=e:Oi=Oi.next=e),Js=!0,Nc||(Nc=!0,g1())}function zr(e,t){if(!Ec&&Js){Ec=!0;do for(var n=!1,i=Xs;i!==null;){if(e!==0){var c=i.pendingLanes;if(c===0)var u=0;else{var g=i.suspendedLanes,v=i.pingedLanes;u=(1<<31-ue(42|e)+1)-1,u&=c&~(g&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,uh(i,u))}else u=Le,u=ua(i,i===We?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||Kt(i,u)||(n=!0,uh(i,u));i=i.next}while(n);Ec=!1}}function m1(){oh()}function oh(){Js=Nc=!1;var e=0;dn!==0&&E1()&&(e=dn);for(var t=Mt(),n=null,i=Xs;i!==null;){var c=i.next,u=ch(i,t);u===0?(i.next=null,n===null?Xs=c:n.next=c,c===null&&(Oi=n)):(n=i,(e!==0||(u&3)!==0)&&(Js=!0)),i=c}vt!==0&&vt!==5||zr(e),dn!==0&&(dn=0)}function ch(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,c=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var g=31-ue(u),v=1<<g,N=c[g];N===-1?((v&n)===0||(v&i)!==0)&&(c[g]=Zn(v,t)):N<=t&&(e.expiredLanes|=v),u&=~v}if(t=We,n=Le,n=ua(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&yn(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Kt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&yn(i),ql(n)){case 2:case 8:n=ne;break;case 32:n=ie;break;case 268435456:n=Re;break;default:n=ie}return i=dh.bind(null,e),n=Kn(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&yn(i),e.callbackPriority=2,e.callbackNode=null,2}function dh(e,t){if(vt!==0&&vt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Is()&&e.callbackNode!==n)return null;var i=Le;return i=ua(e,e===We?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Kp(e,i,t),ch(e,Mt()),e.callbackNode!=null&&e.callbackNode===n?dh.bind(null,e):null)}function uh(e,t){if(Is())return null;Kp(e,t,!0)}function g1(){O1(function(){(Ye&6)!==0?Kn(L,m1):oh()})}function Cc(){if(dn===0){var e=pi;e===0&&(e=Fe,Fe<<=1,(Fe&261888)===0&&(Fe=256)),dn=e}return dn}function fh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:is(""+e)}function ph(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function x1(e,t,n,i,c){if(t==="submit"&&n&&n.stateNode===c){var u=fh((c[Lt]||null).action),g=i.submitter;g&&(t=(t=g[Lt]||null)?fh(t.formAction):g.getAttribute("formAction"),t!==null&&(u=t,g=null));var v=new os("action","action",null,i,c);e.push({event:v,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(dn!==0){var N=g?ph(c,g):new FormData(c);Zo(n,{pending:!0,data:N,method:c.method,action:u},null,N)}}else typeof u=="function"&&(v.preventDefault(),N=g?ph(c,g):new FormData(c),Zo(n,{pending:!0,data:N,method:c.method,action:u},u,N))},currentTarget:c}]})}}for(var Oc=0;Oc<co.length;Oc++){var zc=co[Oc],b1=zc.toLowerCase(),y1=zc[0].toUpperCase()+zc.slice(1);fa(b1,"on"+y1)}fa(Yu,"onAnimationEnd"),fa(Fu,"onAnimationIteration"),fa(Ku,"onAnimationStart"),fa("dblclick","onDoubleClick"),fa("focusin","onFocus"),fa("focusout","onBlur"),fa(D0,"onTransitionRun"),fa(L0,"onTransitionStart"),fa(U0,"onTransitionCancel"),fa(Pu,"onTransitionEnd"),$n("onMouseEnter",["mouseout","mouseover"]),$n("onMouseLeave",["mouseout","mouseover"]),$n("onPointerEnter",["pointerout","pointerover"]),$n("onPointerLeave",["pointerout","pointerover"]),vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),vn("onBeforeInput",["compositionend","keypress","textInput","paste"]),vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kr));function hh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],c=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var g=i.length-1;0<=g;g--){var v=i[g],N=v.instance,D=v.currentTarget;if(v=v.listener,N!==u&&c.isPropagationStopped())break e;u=v,c.currentTarget=D;try{u(c)}catch(Y){us(Y)}c.currentTarget=null,u=N}else for(g=0;g<i.length;g++){if(v=i[g],N=v.instance,D=v.currentTarget,v=v.listener,N!==u&&c.isPropagationStopped())break e;u=v,c.currentTarget=D;try{u(c)}catch(Y){us(Y)}c.currentTarget=null,u=N}}}}function De(e,t){var n=t[Gl];n===void 0&&(n=t[Gl]=new Set);var i=e+"__bubble";n.has(i)||(mh(t,e,2,!1),n.add(i))}function kc(e,t,n){var i=0;t&&(i|=4),mh(n,e,i,t)}var Ws="_reactListening"+Math.random().toString(36).slice(2);function Tc(e){if(!e[Ws]){e[Ws]=!0,lu.forEach(function(n){n!=="selectionchange"&&(v1.has(n)||kc(n,!1,e),kc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ws]||(t[Ws]=!0,kc("selectionchange",!1,t))}}function mh(e,t,n,i){switch(Fh(t)){case 2:var c=I1;break;case 8:c=X1;break;default:c=Pc}n=c.bind(null,t,n,e),c=void 0,!Jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),i?c!==void 0?e.addEventListener(t,n,{capture:!0,passive:c}):e.addEventListener(t,n,!0):c!==void 0?e.addEventListener(t,n,{passive:c}):e.addEventListener(t,n,!1)}function Rc(e,t,n,i,c){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var g=i.tag;if(g===3||g===4){var v=i.stateNode.containerInfo;if(v===c)break;if(g===4)for(g=i.return;g!==null;){var N=g.tag;if((N===3||N===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;v!==null;){if(g=Jn(v),g===null)return;if(N=g.tag,N===5||N===6||N===26||N===27){i=u=g;continue e}v=v.parentNode}}i=i.return}yu(function(){var D=u,Y=Il(n),Z=[];e:{var U=Zu.get(e);if(U!==void 0){var G=os,xe=e;switch(e){case"keypress":if(ss(n)===0)break e;case"keydown":case"keyup":G=p0;break;case"focusin":xe="focus",G=eo;break;case"focusout":xe="blur",G=eo;break;case"beforeblur":case"afterblur":G=eo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=t0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=g0;break;case Yu:case Fu:case Ku:G=i0;break;case Pu:G=b0;break;case"scroll":case"scrollend":G=$x;break;case"wheel":G=v0;break;case"copy":case"cut":case"paste":G=s0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Su;break;case"toggle":case"beforetoggle":G=w0}var we=(t&4)!==0,Xe=!we&&(e==="scroll"||e==="scrollend"),k=we?U!==null?U+"Capture":null:U;we=[];for(var O=D,B;O!==null;){var K=O;if(B=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||B===null||k===null||(K=_i(O,k),K!=null&&we.push(Tr(O,K,B))),Xe)break;O=O.return}0<we.length&&(U=new G(U,xe,null,n,Y),Z.push({event:U,listeners:we}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",U&&n!==Zl&&(xe=n.relatedTarget||n.fromElement)&&(Jn(xe)||xe[Xn]))break e;if((G||U)&&(U=Y.window===Y?Y:(U=Y.ownerDocument)?U.defaultView||U.parentWindow:window,G?(xe=n.relatedTarget||n.toElement,G=D,xe=xe?Jn(xe):null,xe!==null&&(Xe=f(xe),we=xe.tag,xe!==Xe||we!==5&&we!==27&&we!==6)&&(xe=null)):(G=null,xe=D),G!==xe)){if(we=wu,K="onMouseLeave",k="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(we=Su,K="onPointerLeave",k="onPointerEnter",O="pointer"),Xe=G==null?U:Wi(G),B=xe==null?U:Wi(xe),U=new we(K,O+"leave",G,n,Y),U.target=Xe,U.relatedTarget=B,K=null,Jn(Y)===D&&(we=new we(k,O+"enter",xe,n,Y),we.target=B,we.relatedTarget=Xe,K=we),Xe=K,G&&xe)t:{for(we=j1,k=G,O=xe,B=0,K=k;K;K=we(K))B++;K=0;for(var ve=O;ve;ve=we(ve))K++;for(;0<B-K;)k=we(k),B--;for(;0<K-B;)O=we(O),K--;for(;B--;){if(k===O||O!==null&&k===O.alternate){we=k;break t}k=we(k),O=we(O)}we=null}else we=null;G!==null&&gh(Z,U,G,we,!1),xe!==null&&Xe!==null&&gh(Z,Xe,xe,we,!0)}}e:{if(U=D?Wi(D):window,G=U.nodeName&&U.nodeName.toLowerCase(),G==="select"||G==="input"&&U.type==="file")var qe=Ru;else if(ku(U))if(Mu)qe=R0;else{qe=k0;var be=z0}else G=U.nodeName,!G||G.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?D&&Pl(D.elementType)&&(qe=Ru):qe=T0;if(qe&&(qe=qe(e,D))){Tu(Z,qe,n,Y);break e}be&&be(e,U,D),e==="focusout"&&D&&U.type==="number"&&D.memoizedProps.value!=null&&Kl(U,"number",U.value)}switch(be=D?Wi(D):window,e){case"focusin":(ku(be)||be.contentEditable==="true")&&(ri=be,so=D,sr=null);break;case"focusout":sr=so=ri=null;break;case"mousedown":lo=!0;break;case"contextmenu":case"mouseup":case"dragend":lo=!1,Gu(Z,n,Y);break;case"selectionchange":if(B0)break;case"keydown":case"keyup":Gu(Z,n,Y)}var Te;if(ao)e:{switch(e){case"compositionstart":var Ue="onCompositionStart";break e;case"compositionend":Ue="onCompositionEnd";break e;case"compositionupdate":Ue="onCompositionUpdate";break e}Ue=void 0}else ii?Ou(e,n)&&(Ue="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ue="onCompositionStart");Ue&&(Nu&&n.locale!=="ko"&&(ii||Ue!=="onCompositionStart"?Ue==="onCompositionEnd"&&ii&&(Te=vu()):(Za=Y,Wl="value"in Za?Za.value:Za.textContent,ii=!0)),be=_s(D,Ue),0<be.length&&(Ue=new Au(Ue,e,null,n,Y),Z.push({event:Ue,listeners:be}),Te?Ue.data=Te:(Te=zu(n),Te!==null&&(Ue.data=Te)))),(Te=S0?N0(e,n):E0(e,n))&&(Ue=_s(D,"onBeforeInput"),0<Ue.length&&(be=new Au("onBeforeInput","beforeinput",null,n,Y),Z.push({event:be,listeners:Ue}),be.data=Te)),x1(Z,e,D,n,Y)}hh(Z,t)})}function Tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _s(e,t){for(var n=t+"Capture",i=[];e!==null;){var c=e,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=_i(e,n),c!=null&&i.unshift(Tr(e,c,u)),c=_i(e,t),c!=null&&i.push(Tr(e,c,u))),e.tag===3)return i;e=e.return}return[]}function j1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gh(e,t,n,i,c){for(var u=t._reactName,g=[];n!==null&&n!==i;){var v=n,N=v.alternate,D=v.stateNode;if(v=v.tag,N!==null&&N===i)break;v!==5&&v!==26&&v!==27||D===null||(N=D,c?(D=_i(n,u),D!=null&&g.unshift(Tr(n,D,N))):c||(D=_i(n,u),D!=null&&g.push(Tr(n,D,N)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var w1=/\r\n?/g,A1=/\u0000|\uFFFD/g;function xh(e){return(typeof e=="string"?e:""+e).replace(w1,`
`).replace(A1,"")}function bh(e,t){return t=xh(t),xh(e)===t}function Ie(e,t,n,i,c,u){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ti(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ti(e,""+i);break;case"className":as(e,"class",i);break;case"tabIndex":as(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":as(e,n,i);break;case"style":xu(e,i,u);break;case"data":if(t!=="object"){as(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=is(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Ie(e,t,"name",c.name,c,null),Ie(e,t,"formEncType",c.formEncType,c,null),Ie(e,t,"formMethod",c.formMethod,c,null),Ie(e,t,"formTarget",c.formTarget,c,null)):(Ie(e,t,"encType",c.encType,c,null),Ie(e,t,"method",c.method,c,null),Ie(e,t,"target",c.target,c,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=is(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ea);break;case"onScroll":i!=null&&De("scroll",e);break;case"onScrollEnd":i!=null&&De("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=is(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":De("beforetoggle",e),De("toggle",e),ts(e,"popover",i);break;case"xlinkActuate":Na(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Na(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Na(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Na(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Na(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Na(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Na(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Na(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Na(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ts(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Wx.get(n)||n,ts(e,n,i))}}function Mc(e,t,n,i,c,u){switch(n){case"style":xu(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?ti(e,i):(typeof i=="number"||typeof i=="bigint")&&ti(e,""+i);break;case"onScroll":i!=null&&De("scroll",e);break;case"onScrollEnd":i!=null&&De("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ou.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),t=n.slice(2,c?n.length-7:void 0),u=e[Lt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,c),typeof i=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,c);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):ts(e,n,i)}}}function zt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var i=!1,c=!1,u;for(u in n)if(n.hasOwnProperty(u)){var g=n[u];if(g!=null)switch(u){case"src":i=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ie(e,t,u,g,n,null)}}c&&Ie(e,t,"srcSet",n.srcSet,n,null),i&&Ie(e,t,"src",n.src,n,null);return;case"input":De("invalid",e);var v=u=g=c=null,N=null,D=null;for(i in n)if(n.hasOwnProperty(i)){var Y=n[i];if(Y!=null)switch(i){case"name":c=Y;break;case"type":g=Y;break;case"checked":N=Y;break;case"defaultChecked":D=Y;break;case"value":u=Y;break;case"defaultValue":v=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(o(137,t));break;default:Ie(e,t,i,Y,n,null)}}pu(e,u,v,N,D,g,c,!1);return;case"select":De("invalid",e),i=g=u=null;for(c in n)if(n.hasOwnProperty(c)&&(v=n[c],v!=null))switch(c){case"value":u=v;break;case"defaultValue":g=v;break;case"multiple":i=v;default:Ie(e,t,c,v,n,null)}t=u,n=g,e.multiple=!!i,t!=null?ei(e,!!i,t,!1):n!=null&&ei(e,!!i,n,!0);return;case"textarea":De("invalid",e),u=c=i=null;for(g in n)if(n.hasOwnProperty(g)&&(v=n[g],v!=null))switch(g){case"value":i=v;break;case"defaultValue":c=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:Ie(e,t,g,v,n,null)}mu(e,i,c,u);return;case"option":for(N in n)if(n.hasOwnProperty(N)&&(i=n[N],i!=null))switch(N){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ie(e,t,N,i,n,null)}return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(i=0;i<kr.length;i++)De(kr[i],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in n)if(n.hasOwnProperty(D)&&(i=n[D],i!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ie(e,t,D,i,n,null)}return;default:if(Pl(t)){for(Y in n)n.hasOwnProperty(Y)&&(i=n[Y],i!==void 0&&Mc(e,t,Y,i,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(i=n[v],i!=null&&Ie(e,t,v,i,n,null))}function S1(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,g=null,v=null,N=null,D=null,Y=null;for(G in n){var Z=n[G];if(n.hasOwnProperty(G)&&Z!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":N=Z;default:i.hasOwnProperty(G)||Ie(e,t,G,null,i,Z)}}for(var U in i){var G=i[U];if(Z=n[U],i.hasOwnProperty(U)&&(G!=null||Z!=null))switch(U){case"type":u=G;break;case"name":c=G;break;case"checked":D=G;break;case"defaultChecked":Y=G;break;case"value":g=G;break;case"defaultValue":v=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(o(137,t));break;default:G!==Z&&Ie(e,t,U,G,i,Z)}}Fl(e,g,v,N,D,Y,u,c);return;case"select":G=g=v=U=null;for(u in n)if(N=n[u],n.hasOwnProperty(u)&&N!=null)switch(u){case"value":break;case"multiple":G=N;default:i.hasOwnProperty(u)||Ie(e,t,u,null,i,N)}for(c in i)if(u=i[c],N=n[c],i.hasOwnProperty(c)&&(u!=null||N!=null))switch(c){case"value":U=u;break;case"defaultValue":v=u;break;case"multiple":g=u;default:u!==N&&Ie(e,t,c,u,i,N)}t=v,n=g,i=G,U!=null?ei(e,!!n,U,!1):!!i!=!!n&&(t!=null?ei(e,!!n,t,!0):ei(e,!!n,n?[]:"",!1));return;case"textarea":G=U=null;for(v in n)if(c=n[v],n.hasOwnProperty(v)&&c!=null&&!i.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ie(e,t,v,null,i,c)}for(g in i)if(c=i[g],u=n[g],i.hasOwnProperty(g)&&(c!=null||u!=null))switch(g){case"value":U=c;break;case"defaultValue":G=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:c!==u&&Ie(e,t,g,c,i,u)}hu(e,U,G);return;case"option":for(var xe in n)if(U=n[xe],n.hasOwnProperty(xe)&&U!=null&&!i.hasOwnProperty(xe))switch(xe){case"selected":e.selected=!1;break;default:Ie(e,t,xe,null,i,U)}for(N in i)if(U=i[N],G=n[N],i.hasOwnProperty(N)&&U!==G&&(U!=null||G!=null))switch(N){case"selected":e.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:Ie(e,t,N,U,i,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in n)U=n[we],n.hasOwnProperty(we)&&U!=null&&!i.hasOwnProperty(we)&&Ie(e,t,we,null,i,U);for(D in i)if(U=i[D],G=n[D],i.hasOwnProperty(D)&&U!==G&&(U!=null||G!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,t));break;default:Ie(e,t,D,U,i,G)}return;default:if(Pl(t)){for(var Xe in n)U=n[Xe],n.hasOwnProperty(Xe)&&U!==void 0&&!i.hasOwnProperty(Xe)&&Mc(e,t,Xe,void 0,i,U);for(Y in i)U=i[Y],G=n[Y],!i.hasOwnProperty(Y)||U===G||U===void 0&&G===void 0||Mc(e,t,Y,U,i,G);return}}for(var k in n)U=n[k],n.hasOwnProperty(k)&&U!=null&&!i.hasOwnProperty(k)&&Ie(e,t,k,null,i,U);for(Z in i)U=i[Z],G=n[Z],!i.hasOwnProperty(Z)||U===G||U==null&&G==null||Ie(e,t,Z,U,i,G)}function yh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function N1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var c=n[i],u=c.transferSize,g=c.initiatorType,v=c.duration;if(u&&v&&yh(g)){for(g=0,v=c.responseEnd,i+=1;i<n.length;i++){var N=n[i],D=N.startTime;if(D>v)break;var Y=N.transferSize,Z=N.initiatorType;Y&&yh(Z)&&(N=N.responseEnd,g+=Y*(N<v?1:(v-D)/(N-D)))}if(--i,t+=8*(u+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bc=null,Dc=null;function $s(e){return e.nodeType===9?e:e.ownerDocument}function vh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Uc=null;function E1(){var e=window.event;return e&&e.type==="popstate"?e===Uc?!1:(Uc=e,!0):(Uc=null,!1)}var wh=typeof setTimeout=="function"?setTimeout:void 0,C1=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,O1=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(e){return Ah.resolve(null).then(e).catch(z1)}:wh;function z1(e){setTimeout(function(){throw e})}function un(e){return e==="head"}function Sh(e,t){var n=t,i=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(c),Ri(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Rr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Rr(n);for(var u=n.firstChild;u;){var g=u.nextSibling,v=u.nodeName;u[Ji]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=g}}else n==="body"&&Rr(e.ownerDocument.body);n=c}while(n);Ri(t)}function Nh(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Hc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Hc(n),Ql(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function k1(e,t,n,i){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ji])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=la(e.nextSibling),e===null)break}return null}function T1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=la(e.nextSibling),e===null))return null;return e}function Eh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=la(e.nextSibling),e===null))return null;return e}function Vc(e){return e.data==="$?"||e.data==="$~"}function qc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function R1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function la(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Gc=null;function Ch(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return la(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Oh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function zh(e,t,n){switch(t=$s(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Rr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ql(e)}var oa=new Map,kh=new Set;function el(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qa=_.d;_.d={f:M1,r:B1,D:D1,C:L1,L:U1,m:H1,X:q1,S:V1,M:G1};function M1(){var e=Qa.f(),t=Ks();return e||t}function B1(e){var t=Wn(e);t!==null&&t.tag===5&&t.type==="form"?Zf(t):Qa.r(e)}var zi=typeof document>"u"?null:document;function Th(e,t,n){var i=zi;if(i&&typeof t=="string"&&t){var c=ea(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),kh.has(c)||(kh.add(c),e={rel:e,crossOrigin:n,href:t},i.querySelector(c)===null&&(t=i.createElement("link"),zt(t,"link",e),jt(t),i.head.appendChild(t)))}}function D1(e){Qa.D(e),Th("dns-prefetch",e,null)}function L1(e,t){Qa.C(e,t),Th("preconnect",e,t)}function U1(e,t,n){Qa.L(e,t,n);var i=zi;if(i&&e&&t){var c='link[rel="preload"][as="'+ea(t)+'"]';t==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+ea(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+ea(n.imageSizes)+'"]')):c+='[href="'+ea(e)+'"]';var u=c;switch(t){case"style":u=ki(e);break;case"script":u=Ti(e)}oa.has(u)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),oa.set(u,e),i.querySelector(c)!==null||t==="style"&&i.querySelector(Mr(u))||t==="script"&&i.querySelector(Br(u))||(t=i.createElement("link"),zt(t,"link",e),jt(t),i.head.appendChild(t)))}}function H1(e,t){Qa.m(e,t);var n=zi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+ea(i)+'"][href="'+ea(e)+'"]',u=c;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ti(e)}if(!oa.has(u)&&(e=y({rel:"modulepreload",href:e},t),oa.set(u,e),n.querySelector(c)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Br(u)))return}i=n.createElement("link"),zt(i,"link",e),jt(i),n.head.appendChild(i)}}}function V1(e,t,n){Qa.S(e,t,n);var i=zi;if(i&&e){var c=_n(i).hoistableStyles,u=ki(e);t=t||"default";var g=c.get(u);if(!g){var v={loading:0,preload:null};if(g=i.querySelector(Mr(u)))v.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=oa.get(u))&&Qc(e,n);var N=g=i.createElement("link");jt(N),zt(N,"link",e),N._p=new Promise(function(D,Y){N.onload=D,N.onerror=Y}),N.addEventListener("load",function(){v.loading|=1}),N.addEventListener("error",function(){v.loading|=2}),v.loading|=4,tl(g,t,i)}g={type:"stylesheet",instance:g,count:1,state:v},c.set(u,g)}}}function q1(e,t){Qa.X(e,t);var n=zi;if(n&&e){var i=_n(n).hoistableScripts,c=Ti(e),u=i.get(c);u||(u=n.querySelector(Br(c)),u||(e=y({src:e,async:!0},t),(t=oa.get(c))&&Yc(e,t),u=n.createElement("script"),jt(u),zt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(c,u))}}function G1(e,t){Qa.M(e,t);var n=zi;if(n&&e){var i=_n(n).hoistableScripts,c=Ti(e),u=i.get(c);u||(u=n.querySelector(Br(c)),u||(e=y({src:e,async:!0,type:"module"},t),(t=oa.get(c))&&Yc(e,t),u=n.createElement("script"),jt(u),zt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(c,u))}}function Rh(e,t,n,i){var c=(c=Se.current)?el(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ki(n.href),n=_n(c).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ki(n.href);var u=_n(c).hoistableStyles,g=u.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,g),(u=c.querySelector(Mr(e)))&&!u._p&&(g.instance=u,g.state.loading=5),oa.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},oa.set(e,n),u||Q1(c,e,n,g.state))),t&&i===null)throw Error(o(528,""));return g}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ti(n),n=_n(c).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function ki(e){return'href="'+ea(e)+'"'}function Mr(e){return'link[rel="stylesheet"]['+e+"]"}function Mh(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Q1(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),zt(t,"link",n),jt(t),e.head.appendChild(t))}function Ti(e){return'[src="'+ea(e)+'"]'}function Br(e){return"script[async]"+e}function Bh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ea(n.href)+'"]');if(i)return t.instance=i,jt(i),i;var c=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),jt(i),zt(i,"style",c),tl(i,n.precedence,e),t.instance=i;case"stylesheet":c=ki(n.href);var u=e.querySelector(Mr(c));if(u)return t.state.loading|=4,t.instance=u,jt(u),u;i=Mh(n),(c=oa.get(c))&&Qc(i,c),u=(e.ownerDocument||e).createElement("link"),jt(u);var g=u;return g._p=new Promise(function(v,N){g.onload=v,g.onerror=N}),zt(u,"link",i),t.state.loading|=4,tl(u,n.precedence,e),t.instance=u;case"script":return u=Ti(n.src),(c=e.querySelector(Br(u)))?(t.instance=c,jt(c),c):(i=n,(c=oa.get(u))&&(i=y({},n),Yc(i,c)),e=e.ownerDocument||e,c=e.createElement("script"),jt(c),zt(c,"link",i),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,tl(i,n.precedence,e));return t.instance}function tl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=i.length?i[i.length-1]:null,u=c,g=0;g<i.length;g++){var v=i[g];if(v.dataset.precedence===t)u=v;else if(u!==c)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Qc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var al=null;function Dh(e,t,n){if(al===null){var i=new Map,c=al=new Map;c.set(n,i)}else c=al,i=c.get(n),i||(i=new Map,c.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var u=n[c];if(!(u[Ji]||u[Nt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var g=u.getAttribute(t)||"";g=e+g;var v=i.get(g);v?v.push(u):i.set(g,[u])}}return i}function Lh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Y1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Uh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function F1(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ki(i.href),u=t.querySelector(Mr(c));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=nl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,jt(u);return}u=t.ownerDocument||t,i=Mh(i),(c=oa.get(c))&&Qc(i,c),u=u.createElement("link"),jt(u);var g=u;g._p=new Promise(function(v,N){g.onload=v,g.onerror=N}),zt(u,"link",i),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=nl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Fc=0;function K1(e,t){return e.stylesheets&&e.count===0&&rl(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&rl(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Fc===0&&(Fc=62500*N1());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rl(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Fc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(c)}}:null}function nl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var il=null;function rl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,il=new Map,t.forEach(P1,e),il=null,nl.call(e))}function P1(e,t){if(!(t.state.loading&4)){var n=il.get(e);if(n)var i=n.get(null);else{n=new Map,il.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var g=c[u];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(n.set(g.dataset.precedence,g),i=g)}i&&n.set(null,i)}c=t.instance,g=c.getAttribute("data-precedence"),u=n.get(g)||i,u===i&&n.set(null,c),n.set(g,c),this.count++,i=nl.bind(this),c.addEventListener("load",i),c.addEventListener("error",i),u?u.parentNode.insertBefore(c,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Dr={$$typeof:V,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function Z1(e,t,n,i,c,u,g,v,N){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=In(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=In(0),this.hiddenUpdates=In(null),this.identifierPrefix=i,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.incompleteTransitions=new Map}function Hh(e,t,n,i,c,u,g,v,N,D,Y,Z){return e=new Z1(e,t,n,g,N,D,Y,Z,v),t=1,u===!0&&(t|=24),u=Zt(3,null,null,t),e.current=u,u.stateNode=e,t=Ao(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:i,isDehydrated:n,cache:t},Co(u),e}function Vh(e){return e?(e=oi,e):oi}function qh(e,t,n,i,c,u){c=Vh(c),i.context===null?i.context=c:i.pendingContext=c,i=$a(t),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=en(e,i,t),n!==null&&(Qt(n,e,t),pr(n,e,t))}function Gh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kc(e,t){Gh(e,t),(e=e.alternate)&&Gh(e,t)}function Qh(e){if(e.tag===13||e.tag===31){var t=Sn(e,67108864);t!==null&&Qt(t,e,67108864),Kc(e,67108864)}}function Yh(e){if(e.tag===13||e.tag===31){var t=_t();t=Vl(t);var n=Sn(e,t);n!==null&&Qt(n,e,t),Kc(e,t)}}var sl=!0;function I1(e,t,n,i){var c=T.T;T.T=null;var u=_.p;try{_.p=2,Pc(e,t,n,i)}finally{_.p=u,T.T=c}}function X1(e,t,n,i){var c=T.T;T.T=null;var u=_.p;try{_.p=8,Pc(e,t,n,i)}finally{_.p=u,T.T=c}}function Pc(e,t,n,i){if(sl){var c=Zc(i);if(c===null)Rc(e,t,i,ll,n),Kh(e,i);else if(W1(c,e,t,n,i))i.stopPropagation();else if(Kh(e,i),t&4&&-1<J1.indexOf(e)){for(;c!==null;){var u=Wn(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var g=it(u.pendingLanes);if(g!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;g;){var N=1<<31-ue(g);v.entanglements[1]|=N,g&=~N}ja(u),(Ye&6)===0&&(Ys=Mt()+500,zr(0))}}break;case 31:case 13:v=Sn(u,2),v!==null&&Qt(v,u,2),Ks(),Kc(u,2)}if(u=Zc(i),u===null&&Rc(e,t,i,ll,n),u===c)break;c=u}c!==null&&i.stopPropagation()}else Rc(e,t,i,null,n)}}function Zc(e){return e=Il(e),Ic(e)}var ll=null;function Ic(e){if(ll=null,e=Jn(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ll=e,null}function Fh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ee()){case L:return 2;case ne:return 8;case ie:case ke:return 32;case Re:return 268435456;default:return 32}default:return 32}}var Xc=!1,fn=null,pn=null,hn=null,Lr=new Map,Ur=new Map,mn=[],J1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kh(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ur.delete(t.pointerId)}}function Hr(e,t,n,i,c,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[c]},t!==null&&(t=Wn(t),t!==null&&Qh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function W1(e,t,n,i,c){switch(t){case"focusin":return fn=Hr(fn,e,t,n,i,c),!0;case"dragenter":return pn=Hr(pn,e,t,n,i,c),!0;case"mouseover":return hn=Hr(hn,e,t,n,i,c),!0;case"pointerover":var u=c.pointerId;return Lr.set(u,Hr(Lr.get(u)||null,e,t,n,i,c)),!0;case"gotpointercapture":return u=c.pointerId,Ur.set(u,Hr(Ur.get(u)||null,e,t,n,i,c)),!0}return!1}function Ph(e){var t=Jn(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,ru(e.priority,function(){Yh(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,ru(e.priority,function(){Yh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ol(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Zl=i,n.target.dispatchEvent(i),Zl=null}else return t=Wn(n),t!==null&&Qh(t),e.blockedOn=n,!1;t.shift()}return!0}function Zh(e,t,n){ol(e)&&n.delete(t)}function _1(){Xc=!1,fn!==null&&ol(fn)&&(fn=null),pn!==null&&ol(pn)&&(pn=null),hn!==null&&ol(hn)&&(hn=null),Lr.forEach(Zh),Ur.forEach(Zh)}function cl(e,t){e.blockedOn===t&&(e.blockedOn=null,Xc||(Xc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,_1)))}var dl=null;function Ih(e){dl!==e&&(dl=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){dl===e&&(dl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],c=e[t+2];if(typeof i!="function"){if(Ic(i||n)===null)continue;break}var u=Wn(n);u!==null&&(e.splice(t,3),t-=3,Zo(u,{pending:!0,data:c,method:n.method,action:i},i,c))}}))}function Ri(e){function t(N){return cl(N,e)}fn!==null&&cl(fn,e),pn!==null&&cl(pn,e),hn!==null&&cl(hn,e),Lr.forEach(t),Ur.forEach(t);for(var n=0;n<mn.length;n++){var i=mn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)Ph(n),n.blockedOn===null&&mn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var c=n[i],u=n[i+1],g=c[Lt]||null;if(typeof u=="function")g||Ih(n);else if(g){var v=null;if(u&&u.hasAttribute("formAction")){if(c=u,g=u[Lt]||null)v=g.formAction;else if(Ic(c)!==null)continue}else v=g.action;typeof v=="function"?n[i+1]=v:(n.splice(i,3),i-=3),Ih(n)}}}function Xh(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function Jc(e){this._internalRoot=e}ul.prototype.render=Jc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=_t();qh(n,i,e,t,null,null)},ul.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qh(e.current,2,null,e,null,null),Ks(),t[Xn]=null}};function ul(e){this._internalRoot=e}ul.prototype.unstable_scheduleHydration=function(e){if(e){var t=iu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&Ph(e)}};var Jh=s.version;if(Jh!=="19.2.0")throw Error(o(527,Jh,"19.2.0"));_.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=h(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var $1={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{P=fl.inject($1),he=fl}catch{}}return qr.createRoot=function(e,t){if(!d(e))throw Error(o(299));var n=!1,i="",c=np,u=ip,g=rp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=Hh(e,1,!1,null,null,n,i,null,c,u,g,Xh),e[Xn]=t.current,Tc(e),new Jc(t)},qr.hydrateRoot=function(e,t,n){if(!d(e))throw Error(o(299));var i=!1,c="",u=np,g=ip,v=rp,N=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(N=n.formState)),t=Hh(e,1,!0,t,n??null,i,c,N,u,g,v,Xh),t.context=Vh(null),n=t.current,i=_t(),i=Vl(i),c=$a(i),c.callback=null,en(n,c,i),n=i,t.current.lanes=n,Xi(t,n),ja(t),e[Xn]=t.current,Tc(e),new ul(t)},qr.version="19.2.0",qr}var sm;function db(){if(sm)return $c.exports;sm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),$c.exports=cb(),$c.exports}var ub=db();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var lm="popstate";function fb(r={}){function s(o,d){let{pathname:f,search:p,hash:m}=o.location;return jd("",{pathname:f,search:p,hash:m},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function l(o,d){return typeof d=="string"?d:Pr(d)}return hb(s,l,null,r)}function st(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function ma(r,s){if(!r){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function pb(){return Math.random().toString(36).substring(2,10)}function om(r,s){return{usr:r.state,key:r.key,idx:s}}function jd(r,s,l=null,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof s=="string"?qi(s):s,state:l,key:s&&s.key||o||pb()}}function Pr({pathname:r="/",search:s="",hash:l=""}){return s&&s!=="?"&&(r+=s.charAt(0)==="?"?s:"?"+s),l&&l!=="#"&&(r+=l.charAt(0)==="#"?l:"#"+l),r}function qi(r){let s={};if(r){let l=r.indexOf("#");l>=0&&(s.hash=r.substring(l),r=r.substring(0,l));let o=r.indexOf("?");o>=0&&(s.search=r.substring(o),r=r.substring(0,o)),r&&(s.pathname=r)}return s}function hb(r,s,l,o={}){let{window:d=document.defaultView,v5Compat:f=!1}=o,p=d.history,m="POP",x=null,h=b();h==null&&(h=0,p.replaceState({...p.state,idx:h},""));function b(){return(p.state||{idx:null}).idx}function y(){m="POP";let z=b(),R=z==null?null:z-h;h=z,x&&x({action:m,location:C.location,delta:R})}function E(z,R){m="PUSH";let M=jd(C.location,z,R);h=b()+1;let V=om(M,h),re=C.createHref(M);try{p.pushState(V,"",re)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;d.location.assign(re)}f&&x&&x({action:m,location:C.location,delta:1})}function S(z,R){m="REPLACE";let M=jd(C.location,z,R);h=b();let V=om(M,h),re=C.createHref(M);p.replaceState(V,"",re),f&&x&&x({action:m,location:C.location,delta:0})}function j(z){return mb(z)}let C={get action(){return m},get location(){return r(d,p)},listen(z){if(x)throw new Error("A history only accepts one active listener");return d.addEventListener(lm,y),x=z,()=>{d.removeEventListener(lm,y),x=null}},createHref(z){return s(d,z)},createURL:j,encodeLocation(z){let R=j(z);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:E,replace:S,go(z){return p.go(z)}};return C}function mb(r,s=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),st(l,"No window.location.(origin|href) available to create URL");let o=typeof r=="string"?r:Pr(r);return o=o.replace(/ $/,"%20"),!s&&o.startsWith("//")&&(o=l+o),new URL(o,l)}function ug(r,s,l="/"){return gb(r,s,l,!1)}function gb(r,s,l,o){let d=typeof s=="string"?qi(s):s,f=Ka(d.pathname||"/",l);if(f==null)return null;let p=fg(r);xb(p);let m=null;for(let x=0;m==null&&x<p.length;++x){let h=Ob(f);m=Eb(p[x],h,o)}return m}function fg(r,s=[],l=[],o="",d=!1){let f=(p,m,x=d,h)=>{let b={relativePath:h===void 0?p.path||"":h,caseSensitive:p.caseSensitive===!0,childrenIndex:m,route:p};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(o)&&x)return;st(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length)}let y=Fa([o,b.relativePath]),E=l.concat(b);p.children&&p.children.length>0&&(st(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),fg(p.children,s,E,y,x)),!(p.path==null&&!p.index)&&s.push({path:y,score:Sb(y,p.index),routesMeta:E})};return r.forEach((p,m)=>{if(p.path===""||!p.path?.includes("?"))f(p,m);else for(let x of pg(p.path))f(p,m,!0,x)}),s}function pg(r){let s=r.split("/");if(s.length===0)return[];let[l,...o]=s,d=l.endsWith("?"),f=l.replace(/\?$/,"");if(o.length===0)return d?[f,""]:[f];let p=pg(o.join("/")),m=[];return m.push(...p.map(x=>x===""?f:[f,x].join("/"))),d&&m.push(...p),m.map(x=>r.startsWith("/")&&x===""?"/":x)}function xb(r){r.sort((s,l)=>s.score!==l.score?l.score-s.score:Nb(s.routesMeta.map(o=>o.childrenIndex),l.routesMeta.map(o=>o.childrenIndex)))}var bb=/^:[\w-]+$/,yb=3,vb=2,jb=1,wb=10,Ab=-2,cm=r=>r==="*";function Sb(r,s){let l=r.split("/"),o=l.length;return l.some(cm)&&(o+=Ab),s&&(o+=vb),l.filter(d=>!cm(d)).reduce((d,f)=>d+(bb.test(f)?yb:f===""?jb:wb),o)}function Nb(r,s){return r.length===s.length&&r.slice(0,-1).every((o,d)=>o===s[d])?r[r.length-1]-s[s.length-1]:0}function Eb(r,s,l=!1){let{routesMeta:o}=r,d={},f="/",p=[];for(let m=0;m<o.length;++m){let x=o[m],h=m===o.length-1,b=f==="/"?s:s.slice(f.length)||"/",y=jl({path:x.relativePath,caseSensitive:x.caseSensitive,end:h},b),E=x.route;if(!y&&h&&l&&!o[o.length-1].route.index&&(y=jl({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},b)),!y)return null;Object.assign(d,y.params),p.push({params:d,pathname:Fa([f,y.pathname]),pathnameBase:Rb(Fa([f,y.pathnameBase])),route:E}),y.pathnameBase!=="/"&&(f=Fa([f,y.pathnameBase]))}return p}function jl(r,s){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[l,o]=Cb(r.path,r.caseSensitive,r.end),d=s.match(l);if(!d)return null;let f=d[0],p=f.replace(/(.)\/+$/,"$1"),m=d.slice(1);return{params:o.reduce((h,{paramName:b,isOptional:y},E)=>{if(b==="*"){let j=m[E]||"";p=f.slice(0,f.length-j.length).replace(/(.)\/+$/,"$1")}const S=m[E];return y&&!S?h[b]=void 0:h[b]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:f,pathnameBase:p,pattern:r}}function Cb(r,s=!1,l=!0){ma(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let o=[],d="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,m,x)=>(o.push({paramName:m,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(o.push({paramName:"*"}),d+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?d+="\\/*$":r!==""&&r!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),o]}function Ob(r){try{return r.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return ma(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),r}}function Ka(r,s){if(s==="/")return r;if(!r.toLowerCase().startsWith(s.toLowerCase()))return null;let l=s.endsWith("/")?s.length-1:s.length,o=r.charAt(l);return o&&o!=="/"?null:r.slice(l)||"/"}function zb(r,s="/"){let{pathname:l,search:o="",hash:d=""}=typeof r=="string"?qi(r):r;return{pathname:l?l.startsWith("/")?l:kb(l,s):s,search:Mb(o),hash:Bb(d)}}function kb(r,s){let l=s.replace(/\/+$/,"").split("/");return r.split("/").forEach(d=>{d===".."?l.length>1&&l.pop():d!=="."&&l.push(d)}),l.length>1?l.join("/"):"/"}function nd(r,s,l,o){return`Cannot include a '${r}' character in a manually specified \`to.${s}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Tb(r){return r.filter((s,l)=>l===0||s.route.path&&s.route.path.length>0)}function Rd(r){let s=Tb(r);return s.map((l,o)=>o===s.length-1?l.pathname:l.pathnameBase)}function Md(r,s,l,o=!1){let d;typeof r=="string"?d=qi(r):(d={...r},st(!d.pathname||!d.pathname.includes("?"),nd("?","pathname","search",d)),st(!d.pathname||!d.pathname.includes("#"),nd("#","pathname","hash",d)),st(!d.search||!d.search.includes("#"),nd("#","search","hash",d)));let f=r===""||d.pathname==="",p=f?"/":d.pathname,m;if(p==null)m=l;else{let y=s.length-1;if(!o&&p.startsWith("..")){let E=p.split("/");for(;E[0]==="..";)E.shift(),y-=1;d.pathname=E.join("/")}m=y>=0?s[y]:"/"}let x=zb(d,m),h=p&&p!=="/"&&p.endsWith("/"),b=(f||p===".")&&l.endsWith("/");return!x.pathname.endsWith("/")&&(h||b)&&(x.pathname+="/"),x}var Fa=r=>r.join("/").replace(/\/\/+/g,"/"),Rb=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Mb=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Bb=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Db(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var hg=["POST","PUT","PATCH","DELETE"];new Set(hg);var Lb=["GET",...hg];new Set(Lb);var Gi=w.createContext(null);Gi.displayName="DataRouter";var kl=w.createContext(null);kl.displayName="DataRouterState";w.createContext(!1);var mg=w.createContext({isTransitioning:!1});mg.displayName="ViewTransition";var Ub=w.createContext(new Map);Ub.displayName="Fetchers";var Hb=w.createContext(null);Hb.displayName="Await";var ga=w.createContext(null);ga.displayName="Navigation";var Qi=w.createContext(null);Qi.displayName="Location";var ca=w.createContext({outlet:null,matches:[],isDataRoute:!1});ca.displayName="Route";var Bd=w.createContext(null);Bd.displayName="RouteError";function Vb(r,{relative:s}={}){st(Yi(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:o}=w.useContext(ga),{hash:d,pathname:f,search:p}=Xr(r,{relative:s}),m=f;return l!=="/"&&(m=f==="/"?l:Fa([l,f])),o.createHref({pathname:m,search:p,hash:d})}function Yi(){return w.useContext(Qi)!=null}function da(){return st(Yi(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Qi).location}function qb(){return w.useContext(Qi).navigationType}var gg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xg(r){w.useContext(ga).static||w.useLayoutEffect(r)}function mt(){let{isDataRoute:r}=w.useContext(ca);return r?ty():Gb()}function Gb(){st(Yi(),"useNavigate() may be used only in the context of a <Router> component.");let r=w.useContext(Gi),{basename:s,navigator:l}=w.useContext(ga),{matches:o}=w.useContext(ca),{pathname:d}=da(),f=JSON.stringify(Rd(o)),p=w.useRef(!1);return xg(()=>{p.current=!0}),w.useCallback((x,h={})=>{if(ma(p.current,gg),!p.current)return;if(typeof x=="number"){l.go(x);return}let b=Md(x,JSON.parse(f),d,h.relative==="path");r==null&&s!=="/"&&(b.pathname=b.pathname==="/"?s:Fa([s,b.pathname])),(h.replace?l.replace:l.push)(b,h.state,h)},[s,l,f,d,r])}var Qb=w.createContext(null);function Yb(r){let s=w.useContext(ca).outlet;return w.useMemo(()=>s&&w.createElement(Qb.Provider,{value:r},s),[s,r])}function Dd(){let{matches:r}=w.useContext(ca),s=r[r.length-1];return s?s.params:{}}function Xr(r,{relative:s}={}){let{matches:l}=w.useContext(ca),{pathname:o}=da(),d=JSON.stringify(Rd(l));return w.useMemo(()=>Md(r,JSON.parse(d),o,s==="path"),[r,d,o,s])}function Fb(r,s){return bg(r,s)}function bg(r,s,l,o,d){st(Yi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=w.useContext(ga),{matches:p}=w.useContext(ca),m=p[p.length-1],x=m?m.params:{},h=m?m.pathname:"/",b=m?m.pathnameBase:"/",y=m&&m.route;{let M=y&&y.path||"";yg(h,!y||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let E=da(),S;if(s){let M=typeof s=="string"?qi(s):s;st(b==="/"||M.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${M.pathname}" was given in the \`location\` prop.`),S=M}else S=E;let j=S.pathname||"/",C=j;if(b!=="/"){let M=b.replace(/^\//,"").split("/");C="/"+j.replace(/^\//,"").split("/").slice(M.length).join("/")}let z=ug(r,{pathname:C});ma(y||z!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ma(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=Xb(z&&z.map(M=>Object.assign({},M,{params:Object.assign({},x,M.params),pathname:Fa([b,f.encodeLocation?f.encodeLocation(M.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?b:Fa([b,f.encodeLocation?f.encodeLocation(M.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),p,l,o,d);return s&&R?w.createElement(Qi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},R):R}function Kb(){let r=ey(),s=Db(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),l=r instanceof Error?r.stack:null,o="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},p=null;return console.error("Error handled by React Router default ErrorBoundary:",r),p=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:f},"ErrorBoundary")," or"," ",w.createElement("code",{style:f},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},s),l?w.createElement("pre",{style:d},l):null,p)}var Pb=w.createElement(Kb,null),Zb=class extends w.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,s){return s.location!==r.location||s.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:s.error,location:s.location,revalidation:r.revalidation||s.revalidation}}componentDidCatch(r,s){this.props.unstable_onError?this.props.unstable_onError(r,s):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?w.createElement(ca.Provider,{value:this.props.routeContext},w.createElement(Bd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ib({routeContext:r,match:s,children:l}){let o=w.useContext(Gi);return o&&o.static&&o.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=s.route.id),w.createElement(ca.Provider,{value:r},l)}function Xb(r,s=[],l=null,o=null,d=null){if(r==null){if(!l)return null;if(l.errors)r=l.matches;else if(s.length===0&&!l.initialized&&l.matches.length>0)r=l.matches;else return null}let f=r,p=l?.errors;if(p!=null){let h=f.findIndex(b=>b.route.id&&p?.[b.route.id]!==void 0);st(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,h+1))}let m=!1,x=-1;if(l)for(let h=0;h<f.length;h++){let b=f[h];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(x=h),b.route.id){let{loaderData:y,errors:E}=l,S=b.route.loader&&!y.hasOwnProperty(b.route.id)&&(!E||E[b.route.id]===void 0);if(b.route.lazy||S){m=!0,x>=0?f=f.slice(0,x+1):f=[f[0]];break}}}return f.reduceRight((h,b,y)=>{let E,S=!1,j=null,C=null;l&&(E=p&&b.route.id?p[b.route.id]:void 0,j=b.route.errorElement||Pb,m&&(x<0&&y===0?(yg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,C=null):x===y&&(S=!0,C=b.route.hydrateFallbackElement||null)));let z=s.concat(f.slice(0,y+1)),R=()=>{let M;return E?M=j:S?M=C:b.route.Component?M=w.createElement(b.route.Component,null):b.route.element?M=b.route.element:M=h,w.createElement(Ib,{match:b,routeContext:{outlet:h,matches:z,isDataRoute:l!=null},children:M})};return l&&(b.route.ErrorBoundary||b.route.errorElement||y===0)?w.createElement(Zb,{location:l.location,revalidation:l.revalidation,component:j,error:E,children:R(),routeContext:{outlet:null,matches:z,isDataRoute:!0},unstable_onError:o}):R()},null)}function Ld(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jb(r){let s=w.useContext(Gi);return st(s,Ld(r)),s}function Wb(r){let s=w.useContext(kl);return st(s,Ld(r)),s}function _b(r){let s=w.useContext(ca);return st(s,Ld(r)),s}function Ud(r){let s=_b(r),l=s.matches[s.matches.length-1];return st(l.route.id,`${r} can only be used on routes that contain a unique "id"`),l.route.id}function $b(){return Ud("useRouteId")}function ey(){let r=w.useContext(Bd),s=Wb("useRouteError"),l=Ud("useRouteError");return r!==void 0?r:s.errors?.[l]}function ty(){let{router:r}=Jb("useNavigate"),s=Ud("useNavigate"),l=w.useRef(!1);return xg(()=>{l.current=!0}),w.useCallback(async(d,f={})=>{ma(l.current,gg),l.current&&(typeof d=="number"?r.navigate(d):await r.navigate(d,{fromRouteId:s,...f}))},[r,s])}var dm={};function yg(r,s,l){!s&&!dm[r]&&(dm[r]=!0,ma(!1,l))}w.memo(ay);function ay({routes:r,future:s,state:l,unstable_onError:o}){return bg(r,void 0,l,o,s)}function um({to:r,replace:s,state:l,relative:o}){st(Yi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=w.useContext(ga);ma(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=w.useContext(ca),{pathname:p}=da(),m=mt(),x=Md(r,Rd(f),p,o==="path"),h=JSON.stringify(x);return w.useEffect(()=>{m(JSON.parse(h),{replace:s,state:l,relative:o})},[m,h,o,s,l]),null}function vg(r){return Yb(r.context)}function Ae(r){st(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ny({basename:r="/",children:s=null,location:l,navigationType:o="POP",navigator:d,static:f=!1}){st(!Yi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=r.replace(/^\/*/,"/"),m=w.useMemo(()=>({basename:p,navigator:d,static:f,future:{}}),[p,d,f]);typeof l=="string"&&(l=qi(l));let{pathname:x="/",search:h="",hash:b="",state:y=null,key:E="default"}=l,S=w.useMemo(()=>{let j=Ka(x,p);return j==null?null:{location:{pathname:j,search:h,hash:b,state:y,key:E},navigationType:o}},[p,x,h,b,y,E,o]);return ma(S!=null,`<Router basename="${p}"> is not able to match the URL "${x}${h}${b}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:w.createElement(ga.Provider,{value:m},w.createElement(Qi.Provider,{children:s,value:S}))}function iy({children:r,location:s}){return Fb(wd(r),s)}function wd(r,s=[]){let l=[];return w.Children.forEach(r,(o,d)=>{if(!w.isValidElement(o))return;let f=[...s,d];if(o.type===w.Fragment){l.push.apply(l,wd(o.props.children,f));return}st(o.type===Ae,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),st(!o.props.index||!o.props.children,"An index route cannot have child routes.");let p={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(p.children=wd(o.props.children,f)),l.push(p)}),l}var gl="get",xl="application/x-www-form-urlencoded";function Tl(r){return r!=null&&typeof r.tagName=="string"}function ry(r){return Tl(r)&&r.tagName.toLowerCase()==="button"}function sy(r){return Tl(r)&&r.tagName.toLowerCase()==="form"}function ly(r){return Tl(r)&&r.tagName.toLowerCase()==="input"}function oy(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function cy(r,s){return r.button===0&&(!s||s==="_self")&&!oy(r)}var pl=null;function dy(){if(pl===null)try{new FormData(document.createElement("form"),0),pl=!1}catch{pl=!0}return pl}var uy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function id(r){return r!=null&&!uy.has(r)?(ma(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xl}"`),null):r}function fy(r,s){let l,o,d,f,p;if(sy(r)){let m=r.getAttribute("action");o=m?Ka(m,s):null,l=r.getAttribute("method")||gl,d=id(r.getAttribute("enctype"))||xl,f=new FormData(r)}else if(ry(r)||ly(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=r.getAttribute("formaction")||m.getAttribute("action");if(o=x?Ka(x,s):null,l=r.getAttribute("formmethod")||m.getAttribute("method")||gl,d=id(r.getAttribute("formenctype"))||id(m.getAttribute("enctype"))||xl,f=new FormData(m,r),!dy()){let{name:h,type:b,value:y}=r;if(b==="image"){let E=h?`${h}.`:"";f.append(`${E}x`,"0"),f.append(`${E}y`,"0")}else h&&f.append(h,y)}}else{if(Tl(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=gl,o=null,d=xl,p=r}return f&&d==="text/plain"&&(p=f,f=void 0),{action:o,method:l.toLowerCase(),encType:d,formData:f,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Hd(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function py(r,s,l){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return o.pathname==="/"?o.pathname=`_root.${l}`:s&&Ka(o.pathname,s)==="/"?o.pathname=`${s.replace(/\/$/,"")}/_root.${l}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${l}`,o}async function hy(r,s){if(r.id in s)return s[r.id];try{let l=await import(r.module);return s[r.id]=l,l}catch(l){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function my(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function gy(r,s,l){let o=await Promise.all(r.map(async d=>{let f=s.routes[d.route.id];if(f){let p=await hy(f,l);return p.links?p.links():[]}return[]}));return vy(o.flat(1).filter(my).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function fm(r,s,l,o,d,f){let p=(x,h)=>l[h]?x.route.id!==l[h].route.id:!0,m=(x,h)=>l[h].pathname!==x.pathname||l[h].route.path?.endsWith("*")&&l[h].params["*"]!==x.params["*"];return f==="assets"?s.filter((x,h)=>p(x,h)||m(x,h)):f==="data"?s.filter((x,h)=>{let b=o.routes[x.route.id];if(!b||!b.hasLoader)return!1;if(p(x,h)||m(x,h))return!0;if(x.route.shouldRevalidate){let y=x.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function xy(r,s,{includeHydrateFallback:l}={}){return by(r.map(o=>{let d=s.routes[o.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),l&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function by(r){return[...new Set(r)]}function yy(r){let s={},l=Object.keys(r).sort();for(let o of l)s[o]=r[o];return s}function vy(r,s){let l=new Set;return new Set(s),r.reduce((o,d)=>{let f=JSON.stringify(yy(d));return l.has(f)||(l.add(f),o.push({key:f,link:d})),o},[])}function jg(){let r=w.useContext(Gi);return Hd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function jy(){let r=w.useContext(kl);return Hd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Vd=w.createContext(void 0);Vd.displayName="FrameworkContext";function wg(){let r=w.useContext(Vd);return Hd(r,"You must render this element inside a <HydratedRouter> element"),r}function wy(r,s){let l=w.useContext(Vd),[o,d]=w.useState(!1),[f,p]=w.useState(!1),{onFocus:m,onBlur:x,onMouseEnter:h,onMouseLeave:b,onTouchStart:y}=s,E=w.useRef(null);w.useEffect(()=>{if(r==="render"&&p(!0),r==="viewport"){let C=R=>{R.forEach(M=>{p(M.isIntersecting)})},z=new IntersectionObserver(C,{threshold:.5});return E.current&&z.observe(E.current),()=>{z.disconnect()}}},[r]),w.useEffect(()=>{if(o){let C=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(C)}}},[o]);let S=()=>{d(!0)},j=()=>{d(!1),p(!1)};return l?r!=="intent"?[f,E,{}]:[f,E,{onFocus:Gr(m,S),onBlur:Gr(x,j),onMouseEnter:Gr(h,S),onMouseLeave:Gr(b,j),onTouchStart:Gr(y,S)}]:[!1,E,{}]}function Gr(r,s){return l=>{r&&r(l),l.defaultPrevented||s(l)}}function Ay({page:r,...s}){let{router:l}=jg(),o=w.useMemo(()=>ug(l.routes,r,l.basename),[l.routes,r,l.basename]);return o?w.createElement(Ny,{page:r,matches:o,...s}):null}function Sy(r){let{manifest:s,routeModules:l}=wg(),[o,d]=w.useState([]);return w.useEffect(()=>{let f=!1;return gy(r,s,l).then(p=>{f||d(p)}),()=>{f=!0}},[r,s,l]),o}function Ny({page:r,matches:s,...l}){let o=da(),{manifest:d,routeModules:f}=wg(),{basename:p}=jg(),{loaderData:m,matches:x}=jy(),h=w.useMemo(()=>fm(r,s,x,d,o,"data"),[r,s,x,d,o]),b=w.useMemo(()=>fm(r,s,x,d,o,"assets"),[r,s,x,d,o]),y=w.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let j=new Set,C=!1;if(s.forEach(R=>{let M=d.routes[R.route.id];!M||!M.hasLoader||(!h.some(V=>V.route.id===R.route.id)&&R.route.id in m&&f[R.route.id]?.shouldRevalidate||M.hasClientLoader?C=!0:j.add(R.route.id))}),j.size===0)return[];let z=py(r,p,"data");return C&&j.size>0&&z.searchParams.set("_routes",s.filter(R=>j.has(R.route.id)).map(R=>R.route.id).join(",")),[z.pathname+z.search]},[p,m,o,d,h,s,r,f]),E=w.useMemo(()=>xy(b,d),[b,d]),S=Sy(b);return w.createElement(w.Fragment,null,y.map(j=>w.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...l})),E.map(j=>w.createElement("link",{key:j,rel:"modulepreload",href:j,...l})),S.map(({key:j,link:C})=>w.createElement("link",{key:j,nonce:l.nonce,...C})))}function Ey(...r){return s=>{r.forEach(l=>{typeof l=="function"?l(s):l!=null&&(l.current=s)})}}var Ag=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ag&&(window.__reactRouterVersion="7.9.4")}catch{}function Cy({basename:r,children:s,window:l}){let o=w.useRef();o.current==null&&(o.current=fb({window:l,v5Compat:!0}));let d=o.current,[f,p]=w.useState({action:d.action,location:d.location}),m=w.useCallback(x=>{w.startTransition(()=>p(x))},[p]);return w.useLayoutEffect(()=>d.listen(m),[d,m]),w.createElement(ny,{basename:r,children:s,location:f.location,navigationType:f.action,navigator:d})}var Sg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oe=w.forwardRef(function({onClick:s,discover:l="render",prefetch:o="none",relative:d,reloadDocument:f,replace:p,state:m,target:x,to:h,preventScrollReset:b,viewTransition:y,...E},S){let{basename:j}=w.useContext(ga),C=typeof h=="string"&&Sg.test(h),z,R=!1;if(typeof h=="string"&&C&&(z=h,Ag))try{let ae=new URL(window.location.href),pe=h.startsWith("//")?new URL(ae.protocol+h):new URL(h),ge=Ka(pe.pathname,j);pe.origin===ae.origin&&ge!=null?h=ge+pe.search+pe.hash:R=!0}catch{ma(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=Vb(h,{relative:d}),[V,re,$]=wy(o,E),ce=ky(h,{replace:p,state:m,target:x,preventScrollReset:b,relative:d,viewTransition:y});function te(ae){s&&s(ae),ae.defaultPrevented||ce(ae)}let le=w.createElement("a",{...E,...$,href:z||M,onClick:R||f?s:te,ref:Ey(S,re),target:x,"data-discover":!C&&l==="render"?"true":void 0});return V&&!C?w.createElement(w.Fragment,null,le,w.createElement(Ay,{page:M})):le});oe.displayName="Link";var wl=w.forwardRef(function({"aria-current":s="page",caseSensitive:l=!1,className:o="",end:d=!1,style:f,to:p,viewTransition:m,children:x,...h},b){let y=Xr(p,{relative:h.relative}),E=da(),S=w.useContext(kl),{navigator:j,basename:C}=w.useContext(ga),z=S!=null&&Dy(y)&&m===!0,R=j.encodeLocation?j.encodeLocation(y).pathname:y.pathname,M=E.pathname,V=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;l||(M=M.toLowerCase(),V=V?V.toLowerCase():null,R=R.toLowerCase()),V&&C&&(V=Ka(V,C)||V);const re=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let $=M===R||!d&&M.startsWith(R)&&M.charAt(re)==="/",ce=V!=null&&(V===R||!d&&V.startsWith(R)&&V.charAt(R.length)==="/"),te={isActive:$,isPending:ce,isTransitioning:z},le=$?s:void 0,ae;typeof o=="function"?ae=o(te):ae=[o,$?"active":null,ce?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let pe=typeof f=="function"?f(te):f;return w.createElement(oe,{...h,"aria-current":le,className:ae,ref:b,style:pe,to:p,viewTransition:m},typeof x=="function"?x(te):x)});wl.displayName="NavLink";var Oy=w.forwardRef(({discover:r="render",fetcherKey:s,navigate:l,reloadDocument:o,replace:d,state:f,method:p=gl,action:m,onSubmit:x,relative:h,preventScrollReset:b,viewTransition:y,...E},S)=>{let j=My(),C=By(m,{relative:h}),z=p.toLowerCase()==="get"?"get":"post",R=typeof m=="string"&&Sg.test(m),M=V=>{if(x&&x(V),V.defaultPrevented)return;V.preventDefault();let re=V.nativeEvent.submitter,$=re?.getAttribute("formmethod")||p;j(re||V.currentTarget,{fetcherKey:s,method:$,navigate:l,replace:d,state:f,relative:h,preventScrollReset:b,viewTransition:y})};return w.createElement("form",{ref:S,method:z,action:C,onSubmit:o?x:M,...E,"data-discover":!R&&r==="render"?"true":void 0})});Oy.displayName="Form";function zy(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ng(r){let s=w.useContext(Gi);return st(s,zy(r)),s}function ky(r,{target:s,replace:l,state:o,preventScrollReset:d,relative:f,viewTransition:p}={}){let m=mt(),x=da(),h=Xr(r,{relative:f});return w.useCallback(b=>{if(cy(b,s)){b.preventDefault();let y=l!==void 0?l:Pr(x)===Pr(h);m(r,{replace:y,state:o,preventScrollReset:d,relative:f,viewTransition:p})}},[x,m,h,l,o,s,r,d,f,p])}var Ty=0,Ry=()=>`__${String(++Ty)}__`;function My(){let{router:r}=Ng("useSubmit"),{basename:s}=w.useContext(ga),l=$b();return w.useCallback(async(o,d={})=>{let{action:f,method:p,encType:m,formData:x,body:h}=fy(o,s);if(d.navigate===!1){let b=d.fetcherKey||Ry();await r.fetch(b,l,d.action||f,{preventScrollReset:d.preventScrollReset,formData:x,body:h,formMethod:d.method||p,formEncType:d.encType||m,flushSync:d.flushSync})}else await r.navigate(d.action||f,{preventScrollReset:d.preventScrollReset,formData:x,body:h,formMethod:d.method||p,formEncType:d.encType||m,replace:d.replace,state:d.state,fromRouteId:l,flushSync:d.flushSync,viewTransition:d.viewTransition})},[r,s,l])}function By(r,{relative:s}={}){let{basename:l}=w.useContext(ga),o=w.useContext(ca);st(o,"useFormAction must be used inside a RouteContext");let[d]=o.matches.slice(-1),f={...Xr(r||".",{relative:s})},p=da();if(r==null){f.search=p.search;let m=new URLSearchParams(f.search),x=m.getAll("index");if(x.some(b=>b==="")){m.delete("index"),x.filter(y=>y).forEach(y=>m.append("index",y));let b=m.toString();f.search=b?`?${b}`:""}}return(!r||r===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(f.pathname=f.pathname==="/"?l:Fa([l,f.pathname])),Pr(f)}function Dy(r,{relative:s}={}){let l=w.useContext(mg);st(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Ng("useViewTransitionState"),d=Xr(r,{relative:s});if(!l.isTransitioning)return!1;let f=Ka(l.currentLocation.pathname,o)||l.currentLocation.pathname,p=Ka(l.nextLocation.pathname,o)||l.nextLocation.pathname;return jl(d.pathname,p)!=null||jl(d.pathname,f)!=null}function qd(){const[r,s]=w.useState(!1),[l,o]=w.useState(!1),[d,f]=w.useState(!1),p=da(),m=w.useRef(null),x=w.useRef(null);return w.useEffect(()=>{const h=()=>f(window.innerWidth<=800);return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),w.useEffect(()=>{s(!1),o(!1)},[p]),w.useEffect(()=>{const h=b=>{m.current&&!m.current.contains(b.target)&&s(!1),x.current&&!x.current.contains(b.target)&&o(!1)};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]),a.jsxs("header",{className:"agri-header",children:[a.jsxs("nav",{className:"agri-nav",ref:m,children:[a.jsxs(oe,{to:"/",className:"agri-logo",children:[a.jsx("img",{src:"https://www.shutterstock.com/image-vector/agri-tech-leaf-logo-design-600nw-2388734381.jpg",alt:"logo"}),"AgriTechPro"]}),a.jsx("div",{className:"agri-center",children:a.jsxs("div",{className:"agri-search",children:[a.jsx("input",{type:"text",placeholder:"Search Seeds, Fertilizers, Tools..."}),a.jsx("button",{children:"Search"})]})}),a.jsxs("div",{className:`agri-links ${r?"open":""}`,children:[a.jsxs("div",{className:"agri-more-area",ref:x,onMouseEnter:()=>!d&&o(!0),onMouseLeave:()=>!d&&o(!1),children:[a.jsxs("button",{className:"agri-more-btn",onClick:d?()=>o(!l):null,children:["Categories ",a.jsx("span",{children:l?"▲":"▼"})]}),l&&a.jsxs("div",{className:"agri-dropdown",children:[a.jsx(oe,{to:"/products/seeds",children:"Seeds"}),a.jsx(oe,{to:"/products/fertilizers",children:"Fertilizers"}),a.jsx(oe,{to:"/products/pesticides",children:"Pesticides"}),a.jsx(oe,{to:"/products/tools",children:"Tools"}),a.jsx(oe,{to:"/products/equipment",children:"Equipment"})]})]}),a.jsx(oe,{to:"/services",children:"Services"}),a.jsx(oe,{to:"/about",children:"About Us"}),a.jsx(oe,{to:"/contact",children:"Contact"}),a.jsx(oe,{to:"/login",className:"agri-login-btn",children:"Login"})]}),a.jsxs("button",{className:"agri-hamburger",onClick:()=>s(!r),children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})]}),a.jsx("style",{children:`
        :root {
          --green: #2a7a0e;
          --border: #e2e2e2;
          --light: #f6f8f5;
        }

        /* HEADER STICKY FIX */
        .agri-header {
          background: #fff;
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          z-index: 999999;
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

        .agri-center {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .agri-search {
          display: flex;
          background: var(--light);
          border: 1px solid var(--border);
          border-radius: 25px;
          overflow: hidden;
          width: 420px;
          max-width: 100%;
        }
        .agri-search input {
          flex: 1;
          border: none;
          padding: 10px;
          background: transparent;
          outline: none;
        }
        .agri-search button {
          background: var(--green);
          border: none;
          padding: 10px 18px;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
        }

        .agri-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .agri-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
        }
        .agri-links a:hover {
          color: var(--green);
        }

        /* ------------------------ DROPDOWN FIXED ------------------------ */

        .agri-more-area {
          position: relative;
        }

        .agri-more-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
          color: #333;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .agri-dropdown {
          position: absolute;
          top: 45px;  /* places dropdown BELOW navbar */
          left: 0;
          width: 180px;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 10px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
          padding: 8px 0;
          z-index: 999999;
          animation: fadeIn .2s;
        }

        .agri-dropdown a {
          display: block;
          padding: 10px 18px;
          color: #333;
          text-decoration: none;
        }
        .agri-dropdown a:hover {
          background: var(--light);
          color: var(--green);
        }

        /* LOGIN BUTTON */
       /* LOGIN BUTTON */
.agri-login-btn {
  padding: 8px 18px;
  border: 1px solid var(--green);
  border-radius: 6px;
  color: var(--green);     /* default text color */
  background: transparent; /* default background */
  transition: 0.3s ease;
}

.agri-login-btn:hover,
.agri-login-btn:active,
.agri-login-btn:focus {
  background: var(--green);
  color: #fff !important;  /* white text on hover/click */
}


      /* HAMBURGER */
.agri-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}
.agri-hamburger span {
  width: 26px;
  height: 3px;
  background: var(--green);
}

/* MOBILE MENU — WORKS FOR ALL DEVICES */
@media (max-width: 1024px) {

  /* hide normal navbar links */
  .agri-center,
  .agri-links-desktop {
    display: none;
  }

  /* mobile dropdown */
  .agri-links {
    display: none;
    flex-direction: column;
    gap: 12px;
    padding: 15px 20px;
    background: #fff;
    border-radius: 10px;

    position: fixed;      
    top: 70px;            
    right: 18px;          
    width: 220px;
    z-index: 2000;

    border: 1px solid #e5e5e5;
    box-shadow: 0px 4px 12px rgba(0,0,0,0.12);
  }

  .agri-links.open {
    display: flex;
  }

  .agri-hamburger {
    display: flex;
  }

  .agri-dropdown {
    position: static;
    padding-left: 10px;
    border: none;
    box-shadow: none;
  }
}

/* EXTRA RESPONSIVENESS FOR SMALLER DEVICES */
@media (max-width: 768px) {
  .agri-links {
    width: 150px;
    top: 74px;
    right: 15px;
  }
}

@media (max-width: 600px) {
  .agri-links {
    width: 150px;
    top: 74px;
    right: 12px;
  }
}

@media (max-width: 480px) {
  .agri-links {
    width: 150px;
    top: 74px;
    right: 10px;
  }
}

@media (max-width: 380px) {
  .agri-links {
    width: 150px;
    top: 74px;
    right: 8px;
  }
}

@media (max-width: 320px) {
  .agri-links {
    width: 150px;
    top: 74px;
    right: 8px;
  }
}


        /* ANIMATION */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})}var Eg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pm=xn.createContext&&xn.createContext(Eg),Ly=["attr","size","title"];function Uy(r,s){if(r==null)return{};var l=Hy(r,s),o,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(d=0;d<f.length;d++)o=f[d],!(s.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(r,o)&&(l[o]=r[o])}return l}function Hy(r,s){if(r==null)return{};var l={};for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){if(s.indexOf(o)>=0)continue;l[o]=r[o]}return l}function Al(){return Al=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(r[o]=l[o])}return r},Al.apply(this,arguments)}function hm(r,s){var l=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);s&&(o=o.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),l.push.apply(l,o)}return l}function Sl(r){for(var s=1;s<arguments.length;s++){var l=arguments[s]!=null?arguments[s]:{};s%2?hm(Object(l),!0).forEach(function(o){Vy(r,o,l[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(l)):hm(Object(l)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(l,o))})}return r}function Vy(r,s,l){return s=qy(s),s in r?Object.defineProperty(r,s,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[s]=l,r}function qy(r){var s=Gy(r,"string");return typeof s=="symbol"?s:s+""}function Gy(r,s){if(typeof r!="object"||!r)return r;var l=r[Symbol.toPrimitive];if(l!==void 0){var o=l.call(r,s);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(r)}function Cg(r){return r&&r.map((s,l)=>xn.createElement(s.tag,Sl({key:l},s.attr),Cg(s.child)))}function At(r){return s=>xn.createElement(Qy,Al({attr:Sl({},r.attr)},s),Cg(r.child))}function Qy(r){var s=l=>{var{attr:o,size:d,title:f}=r,p=Uy(r,Ly),m=d||l.size||"1em",x;return l.className&&(x=l.className),r.className&&(x=(x?x+" ":"")+r.className),xn.createElement("svg",Al({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,o,p,{className:x,style:Sl(Sl({color:r.color||l.color},l.style),r.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),f&&xn.createElement("title",null,f),r.children)};return pm!==void 0?xn.createElement(pm.Consumer,null,l=>s(l)):s(Eg)}function Gd(r){return At({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(r)}function Qd(r){return At({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(r)}function Yd(r){return At({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(r)}function Fd(r){return At({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(r)}function Yy(r){return At({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(r)}function mm(r){return At({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"},child:[]}]})(r)}function Fy(r){return At({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M473.7 73.8l-2.4-2.5c-46-47-118-51.7-169.6-14.8L336 159.9l-96 64 48 128-144-144 96-64-28.6-86.5C159.7 19.6 87 24 40.7 71.4l-2.4 2.4C-10.4 123.6-12.5 202.9 31 256l212.1 218.6c7.1 7.3 18.6 7.3 25.7 0L481 255.9c43.5-53 41.4-132.3-7.3-182.1z"},child:[]}]})(r)}function gm(r){return At({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(r)}function Ky(r){return At({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(r)}function Py(r){return At({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(r)}function Zy(r){return At({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(r)}function Ad(r){return At({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(r)}function xm(r){return At({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(r)}function bm(r){return At({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(r)}function Iy(r){return At({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(r)}function ym(r){return At({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(r)}function Xy(r){return At({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"},child:[]}]})(r)}function Og(r,s){return function(){return r.apply(s,arguments)}}const{toString:Jy}=Object.prototype,{getPrototypeOf:Kd}=Object,{iterator:Rl,toStringTag:zg}=Symbol,Ml=(r=>s=>{const l=Jy.call(s);return r[l]||(r[l]=l.slice(8,-1).toLowerCase())})(Object.create(null)),xa=r=>(r=r.toLowerCase(),s=>Ml(s)===r),Bl=r=>s=>typeof s===r,{isArray:Fi}=Array,Li=Bl("undefined");function Jr(r){return r!==null&&!Li(r)&&r.constructor!==null&&!Li(r.constructor)&&Yt(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const kg=xa("ArrayBuffer");function Wy(r){let s;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?s=ArrayBuffer.isView(r):s=r&&r.buffer&&kg(r.buffer),s}const _y=Bl("string"),Yt=Bl("function"),Tg=Bl("number"),Wr=r=>r!==null&&typeof r=="object",$y=r=>r===!0||r===!1,bl=r=>{if(Ml(r)!=="object")return!1;const s=Kd(r);return(s===null||s===Object.prototype||Object.getPrototypeOf(s)===null)&&!(zg in r)&&!(Rl in r)},e2=r=>{if(!Wr(r)||Jr(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},t2=xa("Date"),a2=xa("File"),n2=xa("Blob"),i2=xa("FileList"),r2=r=>Wr(r)&&Yt(r.pipe),s2=r=>{let s;return r&&(typeof FormData=="function"&&r instanceof FormData||Yt(r.append)&&((s=Ml(r))==="formdata"||s==="object"&&Yt(r.toString)&&r.toString()==="[object FormData]"))},l2=xa("URLSearchParams"),[o2,c2,d2,u2]=["ReadableStream","Request","Response","Headers"].map(xa),f2=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _r(r,s,{allOwnKeys:l=!1}={}){if(r===null||typeof r>"u")return;let o,d;if(typeof r!="object"&&(r=[r]),Fi(r))for(o=0,d=r.length;o<d;o++)s.call(null,r[o],o,r);else{if(Jr(r))return;const f=l?Object.getOwnPropertyNames(r):Object.keys(r),p=f.length;let m;for(o=0;o<p;o++)m=f[o],s.call(null,r[m],m,r)}}function Rg(r,s){if(Jr(r))return null;s=s.toLowerCase();const l=Object.keys(r);let o=l.length,d;for(;o-- >0;)if(d=l[o],s===d.toLowerCase())return d;return null}const Un=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Mg=r=>!Li(r)&&r!==Un;function Sd(){const{caseless:r,skipUndefined:s}=Mg(this)&&this||{},l={},o=(d,f)=>{const p=r&&Rg(l,f)||f;bl(l[p])&&bl(d)?l[p]=Sd(l[p],d):bl(d)?l[p]=Sd({},d):Fi(d)?l[p]=d.slice():(!s||!Li(d))&&(l[p]=d)};for(let d=0,f=arguments.length;d<f;d++)arguments[d]&&_r(arguments[d],o);return l}const p2=(r,s,l,{allOwnKeys:o}={})=>(_r(s,(d,f)=>{l&&Yt(d)?r[f]=Og(d,l):r[f]=d},{allOwnKeys:o}),r),h2=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),m2=(r,s,l,o)=>{r.prototype=Object.create(s.prototype,o),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:s.prototype}),l&&Object.assign(r.prototype,l)},g2=(r,s,l,o)=>{let d,f,p;const m={};if(s=s||{},r==null)return s;do{for(d=Object.getOwnPropertyNames(r),f=d.length;f-- >0;)p=d[f],(!o||o(p,r,s))&&!m[p]&&(s[p]=r[p],m[p]=!0);r=l!==!1&&Kd(r)}while(r&&(!l||l(r,s))&&r!==Object.prototype);return s},x2=(r,s,l)=>{r=String(r),(l===void 0||l>r.length)&&(l=r.length),l-=s.length;const o=r.indexOf(s,l);return o!==-1&&o===l},b2=r=>{if(!r)return null;if(Fi(r))return r;let s=r.length;if(!Tg(s))return null;const l=new Array(s);for(;s-- >0;)l[s]=r[s];return l},y2=(r=>s=>r&&s instanceof r)(typeof Uint8Array<"u"&&Kd(Uint8Array)),v2=(r,s)=>{const o=(r&&r[Rl]).call(r);let d;for(;(d=o.next())&&!d.done;){const f=d.value;s.call(r,f[0],f[1])}},j2=(r,s)=>{let l;const o=[];for(;(l=r.exec(s))!==null;)o.push(l);return o},w2=xa("HTMLFormElement"),A2=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(l,o,d){return o.toUpperCase()+d}),vm=(({hasOwnProperty:r})=>(s,l)=>r.call(s,l))(Object.prototype),S2=xa("RegExp"),Bg=(r,s)=>{const l=Object.getOwnPropertyDescriptors(r),o={};_r(l,(d,f)=>{let p;(p=s(d,f,r))!==!1&&(o[f]=p||d)}),Object.defineProperties(r,o)},N2=r=>{Bg(r,(s,l)=>{if(Yt(r)&&["arguments","caller","callee"].indexOf(l)!==-1)return!1;const o=r[l];if(Yt(o)){if(s.enumerable=!1,"writable"in s){s.writable=!1;return}s.set||(s.set=()=>{throw Error("Can not rewrite read-only method '"+l+"'")})}})},E2=(r,s)=>{const l={},o=d=>{d.forEach(f=>{l[f]=!0})};return Fi(r)?o(r):o(String(r).split(s)),l},C2=()=>{},O2=(r,s)=>r!=null&&Number.isFinite(r=+r)?r:s;function z2(r){return!!(r&&Yt(r.append)&&r[zg]==="FormData"&&r[Rl])}const k2=r=>{const s=new Array(10),l=(o,d)=>{if(Wr(o)){if(s.indexOf(o)>=0)return;if(Jr(o))return o;if(!("toJSON"in o)){s[d]=o;const f=Fi(o)?[]:{};return _r(o,(p,m)=>{const x=l(p,d+1);!Li(x)&&(f[m]=x)}),s[d]=void 0,f}}return o};return l(r,0)},T2=xa("AsyncFunction"),R2=r=>r&&(Wr(r)||Yt(r))&&Yt(r.then)&&Yt(r.catch),Dg=((r,s)=>r?setImmediate:s?((l,o)=>(Un.addEventListener("message",({source:d,data:f})=>{d===Un&&f===l&&o.length&&o.shift()()},!1),d=>{o.push(d),Un.postMessage(l,"*")}))(`axios@${Math.random()}`,[]):l=>setTimeout(l))(typeof setImmediate=="function",Yt(Un.postMessage)),M2=typeof queueMicrotask<"u"?queueMicrotask.bind(Un):typeof process<"u"&&process.nextTick||Dg,B2=r=>r!=null&&Yt(r[Rl]),q={isArray:Fi,isArrayBuffer:kg,isBuffer:Jr,isFormData:s2,isArrayBufferView:Wy,isString:_y,isNumber:Tg,isBoolean:$y,isObject:Wr,isPlainObject:bl,isEmptyObject:e2,isReadableStream:o2,isRequest:c2,isResponse:d2,isHeaders:u2,isUndefined:Li,isDate:t2,isFile:a2,isBlob:n2,isRegExp:S2,isFunction:Yt,isStream:r2,isURLSearchParams:l2,isTypedArray:y2,isFileList:i2,forEach:_r,merge:Sd,extend:p2,trim:f2,stripBOM:h2,inherits:m2,toFlatObject:g2,kindOf:Ml,kindOfTest:xa,endsWith:x2,toArray:b2,forEachEntry:v2,matchAll:j2,isHTMLForm:w2,hasOwnProperty:vm,hasOwnProp:vm,reduceDescriptors:Bg,freezeMethods:N2,toObjectSet:E2,toCamelCase:A2,noop:C2,toFiniteNumber:O2,findKey:Rg,global:Un,isContextDefined:Mg,isSpecCompliantForm:z2,toJSONObject:k2,isAsyncFn:T2,isThenable:R2,setImmediate:Dg,asap:M2,isIterable:B2};function ze(r,s,l,o,d){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",s&&(this.code=s),l&&(this.config=l),o&&(this.request=o),d&&(this.response=d,this.status=d.status?d.status:null)}q.inherits(ze,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.status}}});const Lg=ze.prototype,Ug={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{Ug[r]={value:r}});Object.defineProperties(ze,Ug);Object.defineProperty(Lg,"isAxiosError",{value:!0});ze.from=(r,s,l,o,d,f)=>{const p=Object.create(Lg);q.toFlatObject(r,p,function(b){return b!==Error.prototype},h=>h!=="isAxiosError");const m=r&&r.message?r.message:"Error",x=s==null&&r?r.code:s;return ze.call(p,m,x,l,o,d),r&&p.cause==null&&Object.defineProperty(p,"cause",{value:r,configurable:!0}),p.name=r&&r.name||"Error",f&&Object.assign(p,f),p};const D2=null;function Nd(r){return q.isPlainObject(r)||q.isArray(r)}function Hg(r){return q.endsWith(r,"[]")?r.slice(0,-2):r}function jm(r,s,l){return r?r.concat(s).map(function(d,f){return d=Hg(d),!l&&f?"["+d+"]":d}).join(l?".":""):s}function L2(r){return q.isArray(r)&&!r.some(Nd)}const U2=q.toFlatObject(q,{},null,function(s){return/^is[A-Z]/.test(s)});function Dl(r,s,l){if(!q.isObject(r))throw new TypeError("target must be an object");s=s||new FormData,l=q.toFlatObject(l,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,z){return!q.isUndefined(z[C])});const o=l.metaTokens,d=l.visitor||b,f=l.dots,p=l.indexes,x=(l.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(s);if(!q.isFunction(d))throw new TypeError("visitor must be a function");function h(j){if(j===null)return"";if(q.isDate(j))return j.toISOString();if(q.isBoolean(j))return j.toString();if(!x&&q.isBlob(j))throw new ze("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(j)||q.isTypedArray(j)?x&&typeof Blob=="function"?new Blob([j]):Buffer.from(j):j}function b(j,C,z){let R=j;if(j&&!z&&typeof j=="object"){if(q.endsWith(C,"{}"))C=o?C:C.slice(0,-2),j=JSON.stringify(j);else if(q.isArray(j)&&L2(j)||(q.isFileList(j)||q.endsWith(C,"[]"))&&(R=q.toArray(j)))return C=Hg(C),R.forEach(function(V,re){!(q.isUndefined(V)||V===null)&&s.append(p===!0?jm([C],re,f):p===null?C:C+"[]",h(V))}),!1}return Nd(j)?!0:(s.append(jm(z,C,f),h(j)),!1)}const y=[],E=Object.assign(U2,{defaultVisitor:b,convertValue:h,isVisitable:Nd});function S(j,C){if(!q.isUndefined(j)){if(y.indexOf(j)!==-1)throw Error("Circular reference detected in "+C.join("."));y.push(j),q.forEach(j,function(R,M){(!(q.isUndefined(R)||R===null)&&d.call(s,R,q.isString(M)?M.trim():M,C,E))===!0&&S(R,C?C.concat(M):[M])}),y.pop()}}if(!q.isObject(r))throw new TypeError("data must be an object");return S(r),s}function wm(r){const s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(o){return s[o]})}function Pd(r,s){this._pairs=[],r&&Dl(r,this,s)}const Vg=Pd.prototype;Vg.append=function(s,l){this._pairs.push([s,l])};Vg.toString=function(s){const l=s?function(o){return s.call(this,o,wm)}:wm;return this._pairs.map(function(d){return l(d[0])+"="+l(d[1])},"").join("&")};function H2(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function qg(r,s,l){if(!s)return r;const o=l&&l.encode||H2;q.isFunction(l)&&(l={serialize:l});const d=l&&l.serialize;let f;if(d?f=d(s,l):f=q.isURLSearchParams(s)?s.toString():new Pd(s,l).toString(o),f){const p=r.indexOf("#");p!==-1&&(r=r.slice(0,p)),r+=(r.indexOf("?")===-1?"?":"&")+f}return r}class Am{constructor(){this.handlers=[]}use(s,l,o){return this.handlers.push({fulfilled:s,rejected:l,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(s){this.handlers[s]&&(this.handlers[s]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(s){q.forEach(this.handlers,function(o){o!==null&&s(o)})}}const Gg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},V2=typeof URLSearchParams<"u"?URLSearchParams:Pd,q2=typeof FormData<"u"?FormData:null,G2=typeof Blob<"u"?Blob:null,Q2={isBrowser:!0,classes:{URLSearchParams:V2,FormData:q2,Blob:G2},protocols:["http","https","file","blob","url","data"]},Zd=typeof window<"u"&&typeof document<"u",Ed=typeof navigator=="object"&&navigator||void 0,Y2=Zd&&(!Ed||["ReactNative","NativeScript","NS"].indexOf(Ed.product)<0),F2=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",K2=Zd&&window.location.href||"http://localhost",P2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Zd,hasStandardBrowserEnv:Y2,hasStandardBrowserWebWorkerEnv:F2,navigator:Ed,origin:K2},Symbol.toStringTag,{value:"Module"})),Rt={...P2,...Q2};function Z2(r,s){return Dl(r,new Rt.classes.URLSearchParams,{visitor:function(l,o,d,f){return Rt.isNode&&q.isBuffer(l)?(this.append(o,l.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)},...s})}function I2(r){return q.matchAll(/\w+|\[(\w*)]/g,r).map(s=>s[0]==="[]"?"":s[1]||s[0])}function X2(r){const s={},l=Object.keys(r);let o;const d=l.length;let f;for(o=0;o<d;o++)f=l[o],s[f]=r[f];return s}function Qg(r){function s(l,o,d,f){let p=l[f++];if(p==="__proto__")return!0;const m=Number.isFinite(+p),x=f>=l.length;return p=!p&&q.isArray(d)?d.length:p,x?(q.hasOwnProp(d,p)?d[p]=[d[p],o]:d[p]=o,!m):((!d[p]||!q.isObject(d[p]))&&(d[p]=[]),s(l,o,d[p],f)&&q.isArray(d[p])&&(d[p]=X2(d[p])),!m)}if(q.isFormData(r)&&q.isFunction(r.entries)){const l={};return q.forEachEntry(r,(o,d)=>{s(I2(o),d,l,0)}),l}return null}function J2(r,s,l){if(q.isString(r))try{return(s||JSON.parse)(r),q.trim(r)}catch(o){if(o.name!=="SyntaxError")throw o}return(l||JSON.stringify)(r)}const $r={transitional:Gg,adapter:["xhr","http","fetch"],transformRequest:[function(s,l){const o=l.getContentType()||"",d=o.indexOf("application/json")>-1,f=q.isObject(s);if(f&&q.isHTMLForm(s)&&(s=new FormData(s)),q.isFormData(s))return d?JSON.stringify(Qg(s)):s;if(q.isArrayBuffer(s)||q.isBuffer(s)||q.isStream(s)||q.isFile(s)||q.isBlob(s)||q.isReadableStream(s))return s;if(q.isArrayBufferView(s))return s.buffer;if(q.isURLSearchParams(s))return l.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),s.toString();let m;if(f){if(o.indexOf("application/x-www-form-urlencoded")>-1)return Z2(s,this.formSerializer).toString();if((m=q.isFileList(s))||o.indexOf("multipart/form-data")>-1){const x=this.env&&this.env.FormData;return Dl(m?{"files[]":s}:s,x&&new x,this.formSerializer)}}return f||d?(l.setContentType("application/json",!1),J2(s)):s}],transformResponse:[function(s){const l=this.transitional||$r.transitional,o=l&&l.forcedJSONParsing,d=this.responseType==="json";if(q.isResponse(s)||q.isReadableStream(s))return s;if(s&&q.isString(s)&&(o&&!this.responseType||d)){const p=!(l&&l.silentJSONParsing)&&d;try{return JSON.parse(s,this.parseReviver)}catch(m){if(p)throw m.name==="SyntaxError"?ze.from(m,ze.ERR_BAD_RESPONSE,this,null,this.response):m}}return s}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Rt.classes.FormData,Blob:Rt.classes.Blob},validateStatus:function(s){return s>=200&&s<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};q.forEach(["delete","get","head","post","put","patch"],r=>{$r.headers[r]={}});const W2=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_2=r=>{const s={};let l,o,d;return r&&r.split(`
`).forEach(function(p){d=p.indexOf(":"),l=p.substring(0,d).trim().toLowerCase(),o=p.substring(d+1).trim(),!(!l||s[l]&&W2[l])&&(l==="set-cookie"?s[l]?s[l].push(o):s[l]=[o]:s[l]=s[l]?s[l]+", "+o:o)}),s},Sm=Symbol("internals");function Qr(r){return r&&String(r).trim().toLowerCase()}function yl(r){return r===!1||r==null?r:q.isArray(r)?r.map(yl):String(r)}function $2(r){const s=Object.create(null),l=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=l.exec(r);)s[o[1]]=o[2];return s}const ev=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function rd(r,s,l,o,d){if(q.isFunction(o))return o.call(this,s,l);if(d&&(s=l),!!q.isString(s)){if(q.isString(o))return s.indexOf(o)!==-1;if(q.isRegExp(o))return o.test(s)}}function tv(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(s,l,o)=>l.toUpperCase()+o)}function av(r,s){const l=q.toCamelCase(" "+s);["get","set","has"].forEach(o=>{Object.defineProperty(r,o+l,{value:function(d,f,p){return this[o].call(this,s,d,f,p)},configurable:!0})})}let Ft=class{constructor(s){s&&this.set(s)}set(s,l,o){const d=this;function f(m,x,h){const b=Qr(x);if(!b)throw new Error("header name must be a non-empty string");const y=q.findKey(d,b);(!y||d[y]===void 0||h===!0||h===void 0&&d[y]!==!1)&&(d[y||x]=yl(m))}const p=(m,x)=>q.forEach(m,(h,b)=>f(h,b,x));if(q.isPlainObject(s)||s instanceof this.constructor)p(s,l);else if(q.isString(s)&&(s=s.trim())&&!ev(s))p(_2(s),l);else if(q.isObject(s)&&q.isIterable(s)){let m={},x,h;for(const b of s){if(!q.isArray(b))throw TypeError("Object iterator must return a key-value pair");m[h=b[0]]=(x=m[h])?q.isArray(x)?[...x,b[1]]:[x,b[1]]:b[1]}p(m,l)}else s!=null&&f(l,s,o);return this}get(s,l){if(s=Qr(s),s){const o=q.findKey(this,s);if(o){const d=this[o];if(!l)return d;if(l===!0)return $2(d);if(q.isFunction(l))return l.call(this,d,o);if(q.isRegExp(l))return l.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(s,l){if(s=Qr(s),s){const o=q.findKey(this,s);return!!(o&&this[o]!==void 0&&(!l||rd(this,this[o],o,l)))}return!1}delete(s,l){const o=this;let d=!1;function f(p){if(p=Qr(p),p){const m=q.findKey(o,p);m&&(!l||rd(o,o[m],m,l))&&(delete o[m],d=!0)}}return q.isArray(s)?s.forEach(f):f(s),d}clear(s){const l=Object.keys(this);let o=l.length,d=!1;for(;o--;){const f=l[o];(!s||rd(this,this[f],f,s,!0))&&(delete this[f],d=!0)}return d}normalize(s){const l=this,o={};return q.forEach(this,(d,f)=>{const p=q.findKey(o,f);if(p){l[p]=yl(d),delete l[f];return}const m=s?tv(f):String(f).trim();m!==f&&delete l[f],l[m]=yl(d),o[m]=!0}),this}concat(...s){return this.constructor.concat(this,...s)}toJSON(s){const l=Object.create(null);return q.forEach(this,(o,d)=>{o!=null&&o!==!1&&(l[d]=s&&q.isArray(o)?o.join(", "):o)}),l}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([s,l])=>s+": "+l).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(s){return s instanceof this?s:new this(s)}static concat(s,...l){const o=new this(s);return l.forEach(d=>o.set(d)),o}static accessor(s){const o=(this[Sm]=this[Sm]={accessors:{}}).accessors,d=this.prototype;function f(p){const m=Qr(p);o[m]||(av(d,p),o[m]=!0)}return q.isArray(s)?s.forEach(f):f(s),this}};Ft.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.reduceDescriptors(Ft.prototype,({value:r},s)=>{let l=s[0].toUpperCase()+s.slice(1);return{get:()=>r,set(o){this[l]=o}}});q.freezeMethods(Ft);function sd(r,s){const l=this||$r,o=s||l,d=Ft.from(o.headers);let f=o.data;return q.forEach(r,function(m){f=m.call(l,f,d.normalize(),s?s.status:void 0)}),d.normalize(),f}function Yg(r){return!!(r&&r.__CANCEL__)}function Ki(r,s,l){ze.call(this,r??"canceled",ze.ERR_CANCELED,s,l),this.name="CanceledError"}q.inherits(Ki,ze,{__CANCEL__:!0});function Fg(r,s,l){const o=l.config.validateStatus;!l.status||!o||o(l.status)?r(l):s(new ze("Request failed with status code "+l.status,[ze.ERR_BAD_REQUEST,ze.ERR_BAD_RESPONSE][Math.floor(l.status/100)-4],l.config,l.request,l))}function nv(r){const s=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return s&&s[1]||""}function iv(r,s){r=r||10;const l=new Array(r),o=new Array(r);let d=0,f=0,p;return s=s!==void 0?s:1e3,function(x){const h=Date.now(),b=o[f];p||(p=h),l[d]=x,o[d]=h;let y=f,E=0;for(;y!==d;)E+=l[y++],y=y%r;if(d=(d+1)%r,d===f&&(f=(f+1)%r),h-p<s)return;const S=b&&h-b;return S?Math.round(E*1e3/S):void 0}}function rv(r,s){let l=0,o=1e3/s,d,f;const p=(h,b=Date.now())=>{l=b,d=null,f&&(clearTimeout(f),f=null),r(...h)};return[(...h)=>{const b=Date.now(),y=b-l;y>=o?p(h,b):(d=h,f||(f=setTimeout(()=>{f=null,p(d)},o-y)))},()=>d&&p(d)]}const Nl=(r,s,l=3)=>{let o=0;const d=iv(50,250);return rv(f=>{const p=f.loaded,m=f.lengthComputable?f.total:void 0,x=p-o,h=d(x),b=p<=m;o=p;const y={loaded:p,total:m,progress:m?p/m:void 0,bytes:x,rate:h||void 0,estimated:h&&m&&b?(m-p)/h:void 0,event:f,lengthComputable:m!=null,[s?"download":"upload"]:!0};r(y)},l)},Nm=(r,s)=>{const l=r!=null;return[o=>s[0]({lengthComputable:l,total:r,loaded:o}),s[1]]},Em=r=>(...s)=>q.asap(()=>r(...s)),sv=Rt.hasStandardBrowserEnv?((r,s)=>l=>(l=new URL(l,Rt.origin),r.protocol===l.protocol&&r.host===l.host&&(s||r.port===l.port)))(new URL(Rt.origin),Rt.navigator&&/(msie|trident)/i.test(Rt.navigator.userAgent)):()=>!0,lv=Rt.hasStandardBrowserEnv?{write(r,s,l,o,d,f,p){if(typeof document>"u")return;const m=[`${r}=${encodeURIComponent(s)}`];q.isNumber(l)&&m.push(`expires=${new Date(l).toUTCString()}`),q.isString(o)&&m.push(`path=${o}`),q.isString(d)&&m.push(`domain=${d}`),f===!0&&m.push("secure"),q.isString(p)&&m.push(`SameSite=${p}`),document.cookie=m.join("; ")},read(r){if(typeof document>"u")return null;const s=document.cookie.match(new RegExp("(?:^|; )"+r+"=([^;]*)"));return s?decodeURIComponent(s[1]):null},remove(r){this.write(r,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function ov(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function cv(r,s){return s?r.replace(/\/?\/$/,"")+"/"+s.replace(/^\/+/,""):r}function Kg(r,s,l){let o=!ov(s);return r&&(o||l==!1)?cv(r,s):s}const Cm=r=>r instanceof Ft?{...r}:r;function Vn(r,s){s=s||{};const l={};function o(h,b,y,E){return q.isPlainObject(h)&&q.isPlainObject(b)?q.merge.call({caseless:E},h,b):q.isPlainObject(b)?q.merge({},b):q.isArray(b)?b.slice():b}function d(h,b,y,E){if(q.isUndefined(b)){if(!q.isUndefined(h))return o(void 0,h,y,E)}else return o(h,b,y,E)}function f(h,b){if(!q.isUndefined(b))return o(void 0,b)}function p(h,b){if(q.isUndefined(b)){if(!q.isUndefined(h))return o(void 0,h)}else return o(void 0,b)}function m(h,b,y){if(y in s)return o(h,b);if(y in r)return o(void 0,h)}const x={url:f,method:f,data:f,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,withXSRFToken:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,responseEncoding:p,validateStatus:m,headers:(h,b,y)=>d(Cm(h),Cm(b),y,!0)};return q.forEach(Object.keys({...r,...s}),function(b){const y=x[b]||d,E=y(r[b],s[b],b);q.isUndefined(E)&&y!==m||(l[b]=E)}),l}const Pg=r=>{const s=Vn({},r);let{data:l,withXSRFToken:o,xsrfHeaderName:d,xsrfCookieName:f,headers:p,auth:m}=s;if(s.headers=p=Ft.from(p),s.url=qg(Kg(s.baseURL,s.url,s.allowAbsoluteUrls),r.params,r.paramsSerializer),m&&p.set("Authorization","Basic "+btoa((m.username||"")+":"+(m.password?unescape(encodeURIComponent(m.password)):""))),q.isFormData(l)){if(Rt.hasStandardBrowserEnv||Rt.hasStandardBrowserWebWorkerEnv)p.setContentType(void 0);else if(q.isFunction(l.getHeaders)){const x=l.getHeaders(),h=["content-type","content-length"];Object.entries(x).forEach(([b,y])=>{h.includes(b.toLowerCase())&&p.set(b,y)})}}if(Rt.hasStandardBrowserEnv&&(o&&q.isFunction(o)&&(o=o(s)),o||o!==!1&&sv(s.url))){const x=d&&f&&lv.read(f);x&&p.set(d,x)}return s},dv=typeof XMLHttpRequest<"u",uv=dv&&function(r){return new Promise(function(l,o){const d=Pg(r);let f=d.data;const p=Ft.from(d.headers).normalize();let{responseType:m,onUploadProgress:x,onDownloadProgress:h}=d,b,y,E,S,j;function C(){S&&S(),j&&j(),d.cancelToken&&d.cancelToken.unsubscribe(b),d.signal&&d.signal.removeEventListener("abort",b)}let z=new XMLHttpRequest;z.open(d.method.toUpperCase(),d.url,!0),z.timeout=d.timeout;function R(){if(!z)return;const V=Ft.from("getAllResponseHeaders"in z&&z.getAllResponseHeaders()),$={data:!m||m==="text"||m==="json"?z.responseText:z.response,status:z.status,statusText:z.statusText,headers:V,config:r,request:z};Fg(function(te){l(te),C()},function(te){o(te),C()},$),z=null}"onloadend"in z?z.onloadend=R:z.onreadystatechange=function(){!z||z.readyState!==4||z.status===0&&!(z.responseURL&&z.responseURL.indexOf("file:")===0)||setTimeout(R)},z.onabort=function(){z&&(o(new ze("Request aborted",ze.ECONNABORTED,r,z)),z=null)},z.onerror=function(re){const $=re&&re.message?re.message:"Network Error",ce=new ze($,ze.ERR_NETWORK,r,z);ce.event=re||null,o(ce),z=null},z.ontimeout=function(){let re=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded";const $=d.transitional||Gg;d.timeoutErrorMessage&&(re=d.timeoutErrorMessage),o(new ze(re,$.clarifyTimeoutError?ze.ETIMEDOUT:ze.ECONNABORTED,r,z)),z=null},f===void 0&&p.setContentType(null),"setRequestHeader"in z&&q.forEach(p.toJSON(),function(re,$){z.setRequestHeader($,re)}),q.isUndefined(d.withCredentials)||(z.withCredentials=!!d.withCredentials),m&&m!=="json"&&(z.responseType=d.responseType),h&&([E,j]=Nl(h,!0),z.addEventListener("progress",E)),x&&z.upload&&([y,S]=Nl(x),z.upload.addEventListener("progress",y),z.upload.addEventListener("loadend",S)),(d.cancelToken||d.signal)&&(b=V=>{z&&(o(!V||V.type?new Ki(null,r,z):V),z.abort(),z=null)},d.cancelToken&&d.cancelToken.subscribe(b),d.signal&&(d.signal.aborted?b():d.signal.addEventListener("abort",b)));const M=nv(d.url);if(M&&Rt.protocols.indexOf(M)===-1){o(new ze("Unsupported protocol "+M+":",ze.ERR_BAD_REQUEST,r));return}z.send(f||null)})},fv=(r,s)=>{const{length:l}=r=r?r.filter(Boolean):[];if(s||l){let o=new AbortController,d;const f=function(h){if(!d){d=!0,m();const b=h instanceof Error?h:this.reason;o.abort(b instanceof ze?b:new Ki(b instanceof Error?b.message:b))}};let p=s&&setTimeout(()=>{p=null,f(new ze(`timeout ${s} of ms exceeded`,ze.ETIMEDOUT))},s);const m=()=>{r&&(p&&clearTimeout(p),p=null,r.forEach(h=>{h.unsubscribe?h.unsubscribe(f):h.removeEventListener("abort",f)}),r=null)};r.forEach(h=>h.addEventListener("abort",f));const{signal:x}=o;return x.unsubscribe=()=>q.asap(m),x}},pv=function*(r,s){let l=r.byteLength;if(l<s){yield r;return}let o=0,d;for(;o<l;)d=o+s,yield r.slice(o,d),o=d},hv=async function*(r,s){for await(const l of mv(r))yield*pv(l,s)},mv=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const s=r.getReader();try{for(;;){const{done:l,value:o}=await s.read();if(l)break;yield o}}finally{await s.cancel()}},Om=(r,s,l,o)=>{const d=hv(r,s);let f=0,p,m=x=>{p||(p=!0,o&&o(x))};return new ReadableStream({async pull(x){try{const{done:h,value:b}=await d.next();if(h){m(),x.close();return}let y=b.byteLength;if(l){let E=f+=y;l(E)}x.enqueue(new Uint8Array(b))}catch(h){throw m(h),h}},cancel(x){return m(x),d.return()}},{highWaterMark:2})},zm=64*1024,{isFunction:hl}=q,gv=(({Request:r,Response:s})=>({Request:r,Response:s}))(q.global),{ReadableStream:km,TextEncoder:Tm}=q.global,Rm=(r,...s)=>{try{return!!r(...s)}catch{return!1}},xv=r=>{r=q.merge.call({skipUndefined:!0},gv,r);const{fetch:s,Request:l,Response:o}=r,d=s?hl(s):typeof fetch=="function",f=hl(l),p=hl(o);if(!d)return!1;const m=d&&hl(km),x=d&&(typeof Tm=="function"?(j=>C=>j.encode(C))(new Tm):async j=>new Uint8Array(await new l(j).arrayBuffer())),h=f&&m&&Rm(()=>{let j=!1;const C=new l(Rt.origin,{body:new km,method:"POST",get duplex(){return j=!0,"half"}}).headers.has("Content-Type");return j&&!C}),b=p&&m&&Rm(()=>q.isReadableStream(new o("").body)),y={stream:b&&(j=>j.body)};d&&["text","arrayBuffer","blob","formData","stream"].forEach(j=>{!y[j]&&(y[j]=(C,z)=>{let R=C&&C[j];if(R)return R.call(C);throw new ze(`Response type '${j}' is not supported`,ze.ERR_NOT_SUPPORT,z)})});const E=async j=>{if(j==null)return 0;if(q.isBlob(j))return j.size;if(q.isSpecCompliantForm(j))return(await new l(Rt.origin,{method:"POST",body:j}).arrayBuffer()).byteLength;if(q.isArrayBufferView(j)||q.isArrayBuffer(j))return j.byteLength;if(q.isURLSearchParams(j)&&(j=j+""),q.isString(j))return(await x(j)).byteLength},S=async(j,C)=>{const z=q.toFiniteNumber(j.getContentLength());return z??E(C)};return async j=>{let{url:C,method:z,data:R,signal:M,cancelToken:V,timeout:re,onDownloadProgress:$,onUploadProgress:ce,responseType:te,headers:le,withCredentials:ae="same-origin",fetchOptions:pe}=Pg(j),ge=s||fetch;te=te?(te+"").toLowerCase():"text";let X=fv([M,V&&V.toAbortSignal()],re),W=null;const I=X&&X.unsubscribe&&(()=>{X.unsubscribe()});let je;try{if(ce&&h&&z!=="get"&&z!=="head"&&(je=await S(le,R))!==0){let A=new l(C,{method:"POST",body:R,duplex:"half"}),H;if(q.isFormData(R)&&(H=A.headers.get("content-type"))&&le.setContentType(H),A.body){const[J,se]=Nm(je,Nl(Em(ce)));R=Om(A.body,zm,J,se)}}q.isString(ae)||(ae=ae?"include":"omit");const T=f&&"credentials"in l.prototype,_={...pe,signal:X,method:z.toUpperCase(),headers:le.normalize().toJSON(),body:R,duplex:"half",credentials:T?ae:void 0};W=f&&new l(C,_);let de=await(f?ge(W,pe):ge(C,_));const F=b&&(te==="stream"||te==="response");if(b&&($||F&&I)){const A={};["status","statusText","headers"].forEach(ye=>{A[ye]=de[ye]});const H=q.toFiniteNumber(de.headers.get("content-length")),[J,se]=$&&Nm(H,Nl(Em($),!0))||[];de=new o(Om(de.body,zm,J,()=>{se&&se(),I&&I()}),A)}te=te||"text";let fe=await y[q.findKey(y,te)||"text"](de,j);return!F&&I&&I(),await new Promise((A,H)=>{Fg(A,H,{data:fe,headers:Ft.from(de.headers),status:de.status,statusText:de.statusText,config:j,request:W})})}catch(T){throw I&&I(),T&&T.name==="TypeError"&&/Load failed|fetch/i.test(T.message)?Object.assign(new ze("Network Error",ze.ERR_NETWORK,j,W),{cause:T.cause||T}):ze.from(T,T&&T.code,j,W)}}},bv=new Map,Zg=r=>{let s=r&&r.env||{};const{fetch:l,Request:o,Response:d}=s,f=[o,d,l];let p=f.length,m=p,x,h,b=bv;for(;m--;)x=f[m],h=b.get(x),h===void 0&&b.set(x,h=m?new Map:xv(s)),b=h;return h};Zg();const Id={http:D2,xhr:uv,fetch:{get:Zg}};q.forEach(Id,(r,s)=>{if(r){try{Object.defineProperty(r,"name",{value:s})}catch{}Object.defineProperty(r,"adapterName",{value:s})}});const Mm=r=>`- ${r}`,yv=r=>q.isFunction(r)||r===null||r===!1;function vv(r,s){r=q.isArray(r)?r:[r];const{length:l}=r;let o,d;const f={};for(let p=0;p<l;p++){o=r[p];let m;if(d=o,!yv(o)&&(d=Id[(m=String(o)).toLowerCase()],d===void 0))throw new ze(`Unknown adapter '${m}'`);if(d&&(q.isFunction(d)||(d=d.get(s))))break;f[m||"#"+p]=d}if(!d){const p=Object.entries(f).map(([x,h])=>`adapter ${x} `+(h===!1?"is not supported by the environment":"is not available in the build"));let m=l?p.length>1?`since :
`+p.map(Mm).join(`
`):" "+Mm(p[0]):"as no adapter specified";throw new ze("There is no suitable adapter to dispatch the request "+m,"ERR_NOT_SUPPORT")}return d}const Ig={getAdapter:vv,adapters:Id};function ld(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Ki(null,r)}function Bm(r){return ld(r),r.headers=Ft.from(r.headers),r.data=sd.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),Ig.getAdapter(r.adapter||$r.adapter,r)(r).then(function(o){return ld(r),o.data=sd.call(r,r.transformResponse,o),o.headers=Ft.from(o.headers),o},function(o){return Yg(o)||(ld(r),o&&o.response&&(o.response.data=sd.call(r,r.transformResponse,o.response),o.response.headers=Ft.from(o.response.headers))),Promise.reject(o)})}const Xg="1.13.1",Ll={};["object","boolean","number","function","string","symbol"].forEach((r,s)=>{Ll[r]=function(o){return typeof o===r||"a"+(s<1?"n ":" ")+r}});const Dm={};Ll.transitional=function(s,l,o){function d(f,p){return"[Axios v"+Xg+"] Transitional option '"+f+"'"+p+(o?". "+o:"")}return(f,p,m)=>{if(s===!1)throw new ze(d(p," has been removed"+(l?" in "+l:"")),ze.ERR_DEPRECATED);return l&&!Dm[p]&&(Dm[p]=!0,console.warn(d(p," has been deprecated since v"+l+" and will be removed in the near future"))),s?s(f,p,m):!0}};Ll.spelling=function(s){return(l,o)=>(console.warn(`${o} is likely a misspelling of ${s}`),!0)};function jv(r,s,l){if(typeof r!="object")throw new ze("options must be an object",ze.ERR_BAD_OPTION_VALUE);const o=Object.keys(r);let d=o.length;for(;d-- >0;){const f=o[d],p=s[f];if(p){const m=r[f],x=m===void 0||p(m,f,r);if(x!==!0)throw new ze("option "+f+" must be "+x,ze.ERR_BAD_OPTION_VALUE);continue}if(l!==!0)throw new ze("Unknown option "+f,ze.ERR_BAD_OPTION)}}const vl={assertOptions:jv,validators:Ll},wa=vl.validators;let Hn=class{constructor(s){this.defaults=s||{},this.interceptors={request:new Am,response:new Am}}async request(s,l){try{return await this._request(s,l)}catch(o){if(o instanceof Error){let d={};Error.captureStackTrace?Error.captureStackTrace(d):d=new Error;const f=d.stack?d.stack.replace(/^.+\n/,""):"";try{o.stack?f&&!String(o.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+f):o.stack=f}catch{}}throw o}}_request(s,l){typeof s=="string"?(l=l||{},l.url=s):l=s||{},l=Vn(this.defaults,l);const{transitional:o,paramsSerializer:d,headers:f}=l;o!==void 0&&vl.assertOptions(o,{silentJSONParsing:wa.transitional(wa.boolean),forcedJSONParsing:wa.transitional(wa.boolean),clarifyTimeoutError:wa.transitional(wa.boolean)},!1),d!=null&&(q.isFunction(d)?l.paramsSerializer={serialize:d}:vl.assertOptions(d,{encode:wa.function,serialize:wa.function},!0)),l.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?l.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:l.allowAbsoluteUrls=!0),vl.assertOptions(l,{baseUrl:wa.spelling("baseURL"),withXsrfToken:wa.spelling("withXSRFToken")},!0),l.method=(l.method||this.defaults.method||"get").toLowerCase();let p=f&&q.merge(f.common,f[l.method]);f&&q.forEach(["delete","get","head","post","put","patch","common"],j=>{delete f[j]}),l.headers=Ft.concat(p,f);const m=[];let x=!0;this.interceptors.request.forEach(function(C){typeof C.runWhen=="function"&&C.runWhen(l)===!1||(x=x&&C.synchronous,m.unshift(C.fulfilled,C.rejected))});const h=[];this.interceptors.response.forEach(function(C){h.push(C.fulfilled,C.rejected)});let b,y=0,E;if(!x){const j=[Bm.bind(this),void 0];for(j.unshift(...m),j.push(...h),E=j.length,b=Promise.resolve(l);y<E;)b=b.then(j[y++],j[y++]);return b}E=m.length;let S=l;for(;y<E;){const j=m[y++],C=m[y++];try{S=j(S)}catch(z){C.call(this,z);break}}try{b=Bm.call(this,S)}catch(j){return Promise.reject(j)}for(y=0,E=h.length;y<E;)b=b.then(h[y++],h[y++]);return b}getUri(s){s=Vn(this.defaults,s);const l=Kg(s.baseURL,s.url,s.allowAbsoluteUrls);return qg(l,s.params,s.paramsSerializer)}};q.forEach(["delete","get","head","options"],function(s){Hn.prototype[s]=function(l,o){return this.request(Vn(o||{},{method:s,url:l,data:(o||{}).data}))}});q.forEach(["post","put","patch"],function(s){function l(o){return function(f,p,m){return this.request(Vn(m||{},{method:s,headers:o?{"Content-Type":"multipart/form-data"}:{},url:f,data:p}))}}Hn.prototype[s]=l(),Hn.prototype[s+"Form"]=l(!0)});let wv=class Jg{constructor(s){if(typeof s!="function")throw new TypeError("executor must be a function.");let l;this.promise=new Promise(function(f){l=f});const o=this;this.promise.then(d=>{if(!o._listeners)return;let f=o._listeners.length;for(;f-- >0;)o._listeners[f](d);o._listeners=null}),this.promise.then=d=>{let f;const p=new Promise(m=>{o.subscribe(m),f=m}).then(d);return p.cancel=function(){o.unsubscribe(f)},p},s(function(f,p,m){o.reason||(o.reason=new Ki(f,p,m),l(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]}unsubscribe(s){if(!this._listeners)return;const l=this._listeners.indexOf(s);l!==-1&&this._listeners.splice(l,1)}toAbortSignal(){const s=new AbortController,l=o=>{s.abort(o)};return this.subscribe(l),s.signal.unsubscribe=()=>this.unsubscribe(l),s.signal}static source(){let s;return{token:new Jg(function(d){s=d}),cancel:s}}};function Av(r){return function(l){return r.apply(null,l)}}function Sv(r){return q.isObject(r)&&r.isAxiosError===!0}const Cd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Cd).forEach(([r,s])=>{Cd[s]=r});function Wg(r){const s=new Hn(r),l=Og(Hn.prototype.request,s);return q.extend(l,Hn.prototype,s,{allOwnKeys:!0}),q.extend(l,s,null,{allOwnKeys:!0}),l.create=function(d){return Wg(Vn(r,d))},l}const ht=Wg($r);ht.Axios=Hn;ht.CanceledError=Ki;ht.CancelToken=wv;ht.isCancel=Yg;ht.VERSION=Xg;ht.toFormData=Dl;ht.AxiosError=ze;ht.Cancel=ht.CanceledError;ht.all=function(s){return Promise.all(s)};ht.spread=Av;ht.isAxiosError=Sv;ht.mergeConfig=Vn;ht.AxiosHeaders=Ft;ht.formToJSON=r=>Qg(q.isHTMLForm(r)?new FormData(r):r);ht.getAdapter=Ig.getAdapter;ht.HttpStatusCode=Cd;ht.default=ht;const{Axios:X6,AxiosError:J6,CanceledError:W6,isCancel:_6,CancelToken:$6,VERSION:eS,all:tS,Cancel:aS,isAxiosError:nS,spread:iS,toFormData:rS,AxiosHeaders:sS,HttpStatusCode:lS,formToJSON:oS,getAdapter:cS,mergeConfig:dS}=ht,Nv="http://localhost:8080/api/auth",_g=ht.create({baseURL:Nv,headers:{"Content-Type":"application/json"}}),Ev=async(r,s)=>{try{const l=await _g.post("/login",{username:r,password:s});if(!l.data.accessToken)throw new Error(l.data.message||"Invalid credentials");return l.data}catch(l){throw console.error(" Login API Error:",l),new Error(l.response?.data?.message||"Login failed")}},Cv=async r=>{try{return(await _g.post("/register",r)).data}catch(s){throw console.error(" Register API Error:",s),new Error(s.response?.data?.message||"Registration failed")}},Ov=[{email:"user@gmail.com",password:"123",name:"Default User"},{email:"test@example.com",password:"12345",name:"Test User"}],zv=()=>{const[r,s]=w.useState(!0),[l,o]=w.useState(!1),[d,f]=w.useState(""),[p,m]=w.useState(""),[x,h]=w.useState(""),[b,y]=w.useState(!1),E=mt(),S=async j=>{j.preventDefault(),h(""),y(!0);try{const z=await Ev(d,p);if(z?.accessToken){if(sessionStorage.setItem("accessToken",z.accessToken),sessionStorage.setItem("refreshToken",z.refreshToken),sessionStorage.setItem("userEmail",d),sessionStorage.setItem("auth","true"),alert("Login Successful!"),sessionStorage.getItem("redirectToBuyNow")){sessionStorage.removeItem("redirectToBuyNow"),E("/buy-now");return}const M=sessionStorage.getItem("redirectTo");M?(sessionStorage.removeItem("redirectTo"),E(M)):E("/userdashboard");return}h(z?.message||"Trying offline login...")}catch{console.warn("Backend offline — using fallback login")}if(Ov.find(z=>z.email.toLowerCase()===d.toLowerCase()&&z.password===p)){if(sessionStorage.setItem("auth","true"),alert("Offline Login Successful!"),sessionStorage.getItem("redirectToBuyNow")){sessionStorage.removeItem("redirectToBuyNow"),E("/buy-now");return}const R=sessionStorage.getItem("redirectTo");R?(sessionStorage.removeItem("redirectTo"),E(R)):E("/userdashboard")}else h("Invalid username or password (offline login)");y(!1)};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"login-page-wrapper",children:a.jsxs("div",{className:"login-container",children:[a.jsx("h2",{children:"Welcome Back"}),a.jsx("p",{children:"Login to continue your AgriTechPro journey"}),a.jsxs("div",{className:"login-toggle",children:[a.jsx("button",{className:r?"active":"",onClick:()=>s(!0),children:"Email Login"}),a.jsx("button",{className:r?"":"active",onClick:()=>s(!1),children:"Phone Login"})]}),a.jsxs("form",{className:"login-form",onSubmit:S,children:[a.jsx("input",{type:r?"email":"tel",placeholder:r?"Enter your email":"Enter your phone number",value:d,onChange:j=>f(j.target.value),required:!0}),a.jsxs("div",{className:"password-field",children:[a.jsx("input",{className:"passwordbox",type:l?"text":"password",placeholder:"Enter your password",value:p,onChange:j=>m(j.target.value),required:!0}),a.jsx("span",{className:"toggle-password",onClick:()=>o(!l),children:l?"Hide":"Show"})]}),a.jsx("div",{className:"forgot-password",children:a.jsx("a",{href:"/forgot-password",children:"Forgot Password?"})}),x&&a.jsx("p",{style:{color:"red"},children:x}),a.jsx("button",{className:"login-btn",type:"submit",disabled:b,children:b?"Logging in...":"Login"})]}),a.jsx("div",{className:"divider",children:a.jsx("span",{children:"OR"})}),a.jsxs("div",{className:"sso-icons",children:[a.jsx("a",{className:"sso-btn google",children:a.jsx(Gd,{size:22})}),a.jsx("a",{className:"sso-btn github",children:a.jsx(Yd,{size:20})}),a.jsx("a",{className:"sso-btn facebook",children:a.jsx(Qd,{size:20})}),a.jsx("a",{className:"sso-btn linkedin",children:a.jsx(Fd,{size:20})})]}),a.jsxs("p",{className:"signup-text",children:["Don’t have an account? ",a.jsx(oe,{to:"/register",children:"Sign up"})]})]})}),a.jsx("style",{children:`
        .login-page-wrapper {
          display:flex;
          justify-content:center;
          align-items:center;
          min-height:100vh;
          padding:2rem;
          background:linear-gradient(135deg, #e8f5e9, #f1f8e9);
        }

        .login-container {
          width:100%;
          max-width:420px;
          background:#fff;
          padding:2.4rem 2rem;
          border-radius:15px;
          box-shadow:0 6px 25px rgba(0,0,0,0.1);
          text-align:center;
        }

        .login-container:hover {
          transform:translateY(-3px);
          box-shadow:0 8px 25px rgba(0,0,0,0.15);
        }

        h2 { color:#2a7a0e; }

        .login-toggle {
          display:flex;
          width:100%;
          background:#f3f4f6;
          margin:1rem 0 1.3rem;
          border-radius:10px;
          overflow:hidden;
        }
        .login-toggle button {
          flex:1;
          padding:.8rem;
          border:none;
          font-weight:600;
          cursor:pointer;
          background:transparent;
        }
        .login-toggle .active {
          background:#2a7a0e;
          color:white;
        }

        .login-form {
          display:flex;
          flex-direction:column;
          gap:1rem;
        }

        .login-form input {
          padding:.9rem;
          border:1px solid #ccc;
          border-radius:8px;
          font-size:1rem;
        }

        .password-field { position:relative;
        }
        .passwordbox {          
          width:93%;
          padding-right:60px;
        }

        .toggle-password {
          position:absolute;
          right:12px;
          top:50%;
          transform:translateY(-50%);
          cursor:pointer;
          font-size:.9rem;
          font-weight:600;
          color:#2a7a0e;
        }

        .forgot-password {
          text-align:right;
          margin-top:-5px;
          margin-bottom:8px;
        }
        .forgot-password a {
          color:#2a7a0e;
          font-size:.9rem;
          text-decoration:none;
        }

        .login-btn {
          padding:.9rem;
          background:#2a7a0e;
          color:white;
          border:none;
          border-radius:8px;
          font-weight:600;
          cursor:pointer;
        }

        .divider { margin:1.5rem 0; color:#777; }

        .sso-icons {
          display:flex;
          justify-content:center;
          gap:1.2rem;
          margin-bottom:1rem;
        }

        .sso-btn {
          width:45px;
          height:45px;
          background:#fff;
          border-radius:50%;
          display:flex;
          justify-content:center;
          align-items:center;
          box-shadow:0 3px 10px rgba(0,0,0,.15);
          cursor:pointer;
        }

        .github { background:#333; color:white; }
        .facebook { background:#1877f2; color:white; }
        .linkedin { background:#0077b5; color:white; }

        .signup-text a {
          color:#2a7a0e;
          font-weight:600;
        }

        @media (max-width:600px) {
          .login-container { padding:2rem 1.4rem; }
          .passwordbox {          
          width:93%;
          padding-right:60px;
        }
        }
      `})]})},kv=()=>{const[r,s]=w.useState({userName:"",email:"",mobile:"",password:"",address:"",role:"USER"}),[l,o]=w.useState(!1),[d,f]=w.useState(""),p=mt(),m=h=>{s({...r,[h.target.name]:h.target.value})},x=async h=>{h.preventDefault(),f(""),o(!0);try{const b=await Cv(r);alert(b.message||"User registered successfully!"),p("/login")}catch(b){f(b.message||"Registration failed! Try again.")}finally{o(!1)}};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"register-page-wrapper",children:a.jsxs("div",{className:"register-container",children:[a.jsx("div",{className:"icon-badge",children:a.jsxs("svg",{width:"45",height:"45",viewBox:"0 0 24 24",fill:"none",children:[a.jsx("path",{d:"M12 2C10.9 2 10 2.9 10 4V6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6V4C14 2.9 13.1 2 12 2Z",fill:"currentColor"}),a.jsx("path",{d:"M5 9C3.9 9 3 9.9 3 11V13C3 14.1 3.9 15 5 15C6.1 15 7 14.1 7 13V11C7 9.9 6.1 9 5 9Z",fill:"currentColor"}),a.jsx("path",{d:"M19 9C17.9 9 17 9.9 17 11V13C17 14.1 17.9 15 19 15C20.1 15 21 14.1 21 13V11C21 9.9 20.1 9 19 9Z",fill:"currentColor"}),a.jsx("path",{d:"M12 10C10.9 10 10 10.9 10 12V22H14V12C14 10.9 13.1 10 12 10Z",fill:"currentColor"})]})}),a.jsx("h2",{children:"Join AgriTechPro 🌾"}),a.jsx("p",{className:"subtitle",children:"Create your account and grow your future"}),a.jsxs("form",{className:"register-form",onSubmit:x,children:[a.jsx("div",{className:"input-group",children:a.jsx("input",{type:"text",name:"userName",placeholder:"Full Name",value:r.userName,onChange:m,required:!0})}),a.jsx("div",{className:"input-group",children:a.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:r.email,onChange:m,required:!0})}),a.jsx("div",{className:"input-group",children:a.jsx("input",{type:"tel",name:"mobile",placeholder:"Mobile Number",value:r.mobile,onChange:m,required:!0})}),a.jsx("div",{className:"input-group",children:a.jsx("input",{type:"password",name:"password",placeholder:"Password",value:r.password,onChange:m,required:!0})}),a.jsx("div",{className:"input-group",children:a.jsx("textarea",{name:"address",placeholder:"Full Address",rows:"3",value:r.address,onChange:m,required:!0})}),a.jsx("div",{className:"input-group",children:a.jsxs("select",{name:"role",value:r.role,onChange:m,required:!0,children:[a.jsx("option",{value:"USER",children:"USER"}),a.jsx("option",{value:"ADMIN",children:"ADMIN"}),a.jsx("option",{value:"VENDOR",children:"VENDOR"})]})}),d&&a.jsxs("div",{className:"error-message",children:[a.jsx("span",{children:"⚠️"}),a.jsx("span",{children:d})]}),a.jsx("button",{type:"submit",className:"register-btn",disabled:l,children:l?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"spinner"}),a.jsx("span",{children:"Creating Account..."})]}):a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"Create Account"}),a.jsx("span",{children:"→"})]})})]}),a.jsxs("p",{className:"signup-text",children:["Already have an account? ",a.jsx(oe,{to:"/login",children:"Login"})]})]})}),a.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .register-page-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 2rem;
          background: #E9F8E4;
          overflow: hidden;
        }

        .register-container {
          position: relative;
          width: 100%;
          max-width: 520px;
          background: linear-gradient(180deg, #ffffff, #fbfff9);
          padding: 2.2rem 2.2rem;
          border-radius: 20px;
          box-shadow: 0 12px 36px rgba(42, 122, 14, 0.10);
          text-align: center;
          border: 1px solid rgba(34, 197, 94, 0.06);
        }

        /* Icon Badge */
        .icon-badge {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: #2a7a0e;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 8px 24px rgba(42, 122, 14, 0.3);
        }

        h2 {
          color: #2a7a0e;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.5rem;
          letter-spacing: -0.5px;
        }

        .subtitle {
          color: #558b2f;
          font-size: 0.95rem;
          margin: 0 0 2rem;
        }

        /* Form Styling */
        .register-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem 1.1rem;
        }

        .input-group {
          position: relative;
        }

        .input-group input,
        .input-group textarea,
        .input-group select {
          width: 100%;
          padding: 1.1rem 1.3rem;
          border: 1px solid rgba(34,197,94,0.12);
          border-radius: 12px;
          font-size: 1rem;
          color: #1f2937;
          background: white;
          transition: all 0.3s ease;
          outline: none;
          font-family: inherit;
        }

        .input-group input:focus,
        .input-group textarea:focus,
        .input-group select:focus {
          border-color: #2a7a0e;
          box-shadow: 0 0 0 4px rgba(42, 122, 14, 0.1);
        }

        .input-group input::placeholder,
        .input-group textarea::placeholder {
          color: #9ca3af;
        }

        .input-group textarea {
          resize: none;
          font-family: inherit;
        }

        .input-group select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%232a7a0e' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1.2rem center;
          padding-right: 2.8rem;
        }

        /* Error Message */
        .error-message {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 1rem 1.2rem;
          background: #fee2e2;
          border: 2px solid #fca5a5;
          border-radius: 10px;
          color: #dc2626;
          font-size: 0.9rem;
        }

        /* Register Button */
        .register-btn {
          grid-column: 1 / -1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 1rem 1.15rem;
          background: var(--green);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.05rem;
          cursor: pointer;
          transition: transform 0.14s ease, box-shadow 0.14s ease;
          box-shadow: 0 8px 24px rgba(42, 122, 14, 0.08);
          margin-top: 0.25rem;
        }

        .register-btn:hover:not(:disabled) {
          background: #1e5a0a;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(42, 122, 14, 0.4);
        }

        .register-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .register-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Spinner */
        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Signup Text */
        .signup-text {
          color: #6b7280;
          font-size: 0.95rem;
          margin-top: 2rem;
        }

        .signup-text a {
          color: #2a7a0e;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .signup-text a:hover {
          color: #1e5a0a;
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 820px) {
          .register-container {
            padding: 2rem 1.5rem;
            max-width: 460px;
          }
          .register-form {
            grid-template-columns: 1fr;
          }

          h2 { font-size: 1.7rem; }
        }
      `})]})},$g="/AgriTechUl/assets/b1-x3izpeS2.jpg",ex="/AgriTechUl/assets/b2-D2CNAekI.jpeg",tx="/AgriTechUl/assets/b3-DNW8ECe5.jpg";function ax(){const r=mt(),[s,l]=w.useState(0),o=w.useRef(!1),d=w.useRef(null),f=[{id:1,title:"Quality Vegetable Seeds",subtitle:"Premium seeds for high yield and rapid germination.",stats:["95%+ Lab-tested germination rate","High-yield seed varieties","Perfect for all farming types"],image:$g,to:"/category/vegetable-seeds",buyLabel:"Shop Seeds",infoLabel:"Learn More",infoTo:"/HeroBannerSlider/vegetable-seeds-info"},{id:2,title:"Organic Fertilizers",subtitle:"Boost your soil naturally with organic nutrients.",stats:["100% natural ingredients","Improves soil structure","Better nutrient absorption"],image:ex,to:"/category/fertilizers",buyLabel:"Shop Fertilizers",infoLabel:"Know More",infoTo:"/HeroBannerSlider/fertilizers-info"},{id:3,title:"Farm Machinery & Tools",subtitle:"Modern equipment designed for smart farming.",stats:["Fuel-efficient machinery","High durability & performance","Trusted by farmers across India"],image:tx,to:"/category/farm-machinery",buyLabel:"Shop Machinery",infoLabel:"Explore Tools",infoTo:"/HeroBannerSlider/machinery-info"}];w.useEffect(()=>(p(),()=>m()),[]);const p=()=>{m(),d.current=setInterval(()=>x(),6e3)},m=()=>{d.current&&clearInterval(d.current)},x=()=>{o.current=!0,setTimeout(()=>{l(C=>(C+1)%f.length),o.current=!1},300)},h=()=>{o.current=!0,setTimeout(()=>{l(C=>(C-1+f.length)%f.length),o.current=!1},300)},b=C=>{o.current=!0,setTimeout(()=>{l(C),o.current=!1},300)};let y=0;const E=C=>y=C.touches[0].clientX,S=C=>{const z=y-C.changedTouches[0].clientX;z>50&&x(),z<-50&&h()},j=f[s];return a.jsxs("section",{className:"agri-hero",onMouseEnter:m,onMouseLeave:p,onTouchStart:E,onTouchEnd:S,children:[a.jsxs("div",{className:`agri-wrapper ${o.current?"fade":""}`,children:[a.jsxs("div",{className:"agri-left",children:[a.jsx("h1",{className:"agri-title",children:j.title}),a.jsx("p",{className:"agri-subtitle",children:j.subtitle}),a.jsx("ul",{className:"agri-stats",children:j.stats.map((C,z)=>a.jsxs("li",{children:[a.jsx("span",{className:"check",children:"✔"})," ",C]},z))}),a.jsxs("div",{className:"agri-buttons",children:[a.jsx("button",{className:"primary-btn",onClick:()=>r(j.to),children:j.buyLabel}),a.jsx("button",{className:"secondary-btn",onClick:()=>r(j.infoTo),children:j.infoLabel})]})]}),a.jsx("div",{className:"agri-right",children:a.jsx("img",{src:j.image,alt:j.title,loading:"lazy"})})]}),a.jsx("div",{className:"agri-dots",children:f.map((C,z)=>a.jsx("button",{className:`dot ${s===z?"active":""}`,onClick:()=>b(z)},z))}),a.jsx("style",{children:`
        .agri-hero {
          padding: 55px 20px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          overflow-x: hidden;
        }

        .agri-wrapper {
          max-width: 1250px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 45px;
          transition: opacity .35s ease;
        }
        .fade { opacity: .2; }

        .agri-left { flex: 1; }
        .agri-title {
          font-size: 40px;
          font-weight: 800;
          color: #14532d;
          margin-bottom: 10px;
        }
        .agri-subtitle {
          font-size: 17px;
          color: #475569;
          margin-bottom: 18px;
        }

        .agri-stats {
          list-style: none;
          padding: 0;
          margin: 0 0 22px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .check { color: #16a34a; margin-right: 6px; }

        .agri-buttons {
          display: flex;
          gap: 12px;
        }
        .primary-btn {
          background: linear-gradient(135deg,#28a745,#166534);
          padding: 12px 26px;
          border-radius: 8px;
          color: white;
          font-weight: 700;
          border: none;
        }
        .secondary-btn {
          border: 2px solid #22863a;
          padding: 12px 26px;
          border-radius: 8px;
          background: white;
          font-weight: 700;
          color: #14532d;
        }

        .agri-right {
          width: 48%;
          height: 360px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
        .agri-right img { width: 100%; height: 100%; object-fit: cover; }

        .agri-dots {
          margin-top: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }
        .dot {
          width: 12px;
          height: 12px;
          background: #cbd5e1;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: 0.3s;
        }
        .dot.active {
          background: #1b7a34;
          transform: scale(1.3);
        }

        @media (max-width: 930px) {
          .agri-wrapper {
            flex-direction: column-reverse;
            text-align: center;
          }
          .agri-right { width: 95%; height: 240px; }
        }
        @media (max-width: 480px) {
          .agri-title { font-size: 26px; }
          .agri-right { height: 200px; }
        }

        * { box-sizing: border-box; }
        html, body { overflow-x: hidden; }
      `})]})}const Tv=[{id:1,name:"Offers",img:"https://media.bighaat.com/wsfbanners/ec9db2d0-d70c-41ae-abf0-83a286c1de05.webp?w=1080&q=80",to:"/category/offers-today"},{id:2,name:"Insecticides",img:"https://media.bighaat.com/wsfbanners/f74bb722-23ff-4cfa-8a4f-09a817617c5f.webp?w=1080&q=80",to:"/category/insecticides"},{id:3,name:"Nutrients",img:"https://media.bighaat.com/wsfbanners/45e90225-8767-44f7-a3de-c1f5d186ae16.webp?w=1080&q=80",to:"/category/nutrients"},{id:4,name:"Fungicides",img:"https://media.bighaat.com/wsfbanners/97c1397e-0e1a-4c66-8d63-229a983de12b.webp?w=1080&q=80",to:"/category/fungicides"},{id:5,name:"Vegetable & Fruit Seeds",img:"https://media.bighaat.com/wsfbanners/87f7b455-ab96-4433-9e8c-24fac60ccff3.webp?w=1080&q=80",to:"/category/veg-fruit-seeds"},{id:6,name:"Herbicides",img:"https://media.bighaat.com/wsfbanners/f294b1e7-1cd2-4895-8b6f-d50fe172ddd1.webp?w=1080&q=80",to:"/category/herbicides"},{id:7,name:"Growth Promoters",img:"https://media.bighaat.com/wsfbanners/153b1941-7cab-41b0-ba1b-f1020be1f4b9.webp?w=1080&q=80",to:"/category/growth-promoters"},{id:8,name:"Farm Machinery",img:"https://media.bighaat.com/wsfbanners/65967dbe-5b82-4c4a-a24f-5d72cf21eaf6.webp?w=1080&q=80",to:"/category/farm-machinery"},{id:9,name:"Flower Seeds",img:"https://media.bighaat.com/wsfbanners/74efbaad-48dd-432c-8979-78fd0a970d39.webp?w=1080&q=80",to:"/category/flower-seeds"},{id:10,name:"Organic Farming",img:"https://media.bighaat.com/wsfbanners/b5b78d8a-27fe-40a5-8c05-5684ed78611c.webp?w=1080&q=80",to:"/category/organic"},{id:11,name:"Animal Husbandry",img:"https://media.bighaat.com/wsfbanners/6f4d9010-e0c9-4653-b27e-5a3933fbefa5.webp?w=1080&q=80",to:"/category/animal-husbandry"},{id:12,name:"New Arrivals",img:"https://media.bighaat.com/wsfbanners/5270cb61-95a2-41f8-9d8f-d88ae16bef1e.webp?w=1080&q=80",to:"/new-arrivals"}];function nx(){return a.jsxs("section",{className:"cat-wrap",children:[a.jsx("h2",{className:"cat-title",children:"Categories"}),a.jsx("div",{className:"cat-grid",children:Tv.map((r,s)=>a.jsxs(oe,{to:r.to,className:"cat-card",children:[a.jsx("div",{className:"cat-thumb",style:{background:Lm[s%Lm.length]},children:a.jsx("img",{src:r.img,alt:r.name,loading:"lazy"})}),a.jsx("div",{className:"cat-name",children:r.name})]},r.id))}),a.jsx("style",{children:`
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
      `})]})}const Lm=["linear-gradient(145deg, #d9f6ff, #fffdf3)","linear-gradient(145deg, #ffe5ec, #fffdfa)","linear-gradient(145deg, #e8ffe8, #fffef2)","linear-gradient(145deg, #f1e8ff, #fffdf6)","linear-gradient(145deg, #ffe9d9, #fffdf9)","linear-gradient(145deg, #dff5ff, #fffef4)"],qn=[{id:1,name:"Hybrid Tomato Seeds",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",brand:"Kaveri Seeds",price:199,mrp:250,rating:4.6},{id:2,name:"F1 Hybrid Chilli Seeds",image:"https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&q=80",brand:"East West Seeds",price:149,mrp:200,rating:4.3},{id:3,name:"Hybrid Brinjal Seeds",image:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",brand:"Nunhems",price:135,mrp:180,rating:4.1},{id:4,name:"Cucumber Hybrid Seeds",image:"https://th.bing.com/th/id/OIP.Y-g_X54Kg34x7GkIgTGDxgHaHY?w=179&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",brand:"Mahyco",price:160,mrp:220,rating:4.4},{id:5,name:"Okra / Bhindi Hybrid Seeds",image:"data:image/webp;base64,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",brand:"Syngenta",price:120,mrp:180,rating:4.2},{id:6,name:"Tomato Hybrid Seeds",image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUXFhUVFRUVGBgYFRUWFxcWFhcXFxcYHiggGBolGxcWIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLy0uLS0tLS0tLy0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEAQAAIBAgQDBgIHBwIGAwAAAAECEQADBBIhMQUTQQYiUWFxgTKRFCNCobHB0QcVM1JykvBj4RZTYoKiwiSDsv/EABsBAQACAwEBAAAAAAAAAAAAAAABBAIDBQYH/8QAOBEAAgIBAwMBBQcEAQMFAAAAAAECAxEEITEFEkFREyJhcYEykaGxwdHwBhRC4SNywvEVM0Niov/aAAwDAQACEQMRAD8A9soAoAoAoBwoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoBtAFAFALQC0AUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUA2gI71yNqAi5h8aAXmHxoA5p8aAOafGgF5p8aAOafGgDmnxoA5p8aAOYfGgF5p8aATmnxoA5poA5xoBecaAktXJ0oCSgCgCgCgCgCgCgCgCgCgCgCgG0BBf39qAjFALFAEUAsUAuWgEigCKAWKABQCxQCUAlAFAJQEljf2oCxQBQBQBQBQBQBQBQBQBQBQBQCUBDiD0oCHIaAAhoBcpoB2U0AQaAINAGU+FAEGgAKaAMpoBChoBMp8KAWD4UAa+FASWDrQE9AFAFAFAFAFAFAFAFAFAFAFAEUBWxO/tQDFPrQDp8zQCZvWgFzetAGf1oAz+tAGb1oAzetAGb1oAzeZoAz+ZoAzetAGbzNAIzetAPsb+1AWKAKAKAzcLx/DXLgtJdDOZgAHWASYMQdAarV6umyfZF5YNKrICgCgCgCgCgCgCgCgK2K39qAjSgH5aAyrXEstzlXlKksQj/YYT3dehiKqR1LjPssWPR+Ga1PDxI0LV62xIVgxETBmJ2mPSrEbIybSecGeUyXJWZIuSgDJQBy6AOXQBy6AOXQBy6AXligIbhEwKxbBLh9/b9KkFmpAUAUB5V2dtcniqIdg9+2PTK4H4D515/SJV6px+LMFyeq16AzCgCgCgCgCgCgCgCgK+J3FAQ0A8NQGTxDF2nvrh3K5VTm3MxAAzNktLvuxF0//X51hOEZrElkhpPk0sLhkQQihQde6N6QrhBYisBJLgsCsyRRQBNAE0BDbxltmyq6ltdAROm+lYKyDeE1kjuRNNZkhNAJmoDOwPFkvZ8gYZTBzCJ3gjXbQ1i2SkSh9axMsbFnDHve36VkjFjrWJm69o7qttx/S5dRPnmtv7RUp74IE4liuVbLxMFJ/pLqGPyJpJ4QIuM8Xs4W2bt9wqjbxY+Cjqa1W3RrjmX3eWDyDEdoc3EUuG09oC4t451KnIW3AMEgida4jjKFvtp7ZfBg+T22vQmZR45juTh7l0RmVTknYue6g92Kj3rGbwsgvVkAoAoAoAoAoAoCvidxQENAKKA8j/bB2ev3Lj3Fw1zEWrqW8rWBmu4e9aDqJQatadWE+BEyIhgNH9nPB8cMHgrWMN9FGJuuEDOjrYFkm2l0rBC82TlJ/lHlQF/CYhubhCz4v6S+KyYglrv0V4W8WVJPJNsFRlFvUBe9s1AScOW9zcHP036RzT9Pzc/6N/AvTlzfVZOZky8vSInWgIrmBxdvBhrbYs3rvDcSboZ7rsMSEtG1lVieVcBa4AFiesxoBrXVP0pub9O5vPt8jkm59H5Hc3j6jL/Ez8zv75fsUBq2EfMg75y3XbKUhACX72eB0adzM1SipZS35e2NvPk1LItjNmt/xs0nmznyfA3/AGxmiMtTHOY858844f054wFnKGWpykjnAFhmU8zMtsT8JbUsTBOXppURzhtZ5434+vn1wF9RVViSBzQhuJElwcuQzBPeCzRJvbfGV68Y+/GSUslsoBMACTJgRJ8T4mrLLEUNQ61GTNrYuYQ972/MVlE1tGZhcSBxO/bJ1bDYdkHiEe/m++4KxUl7Rr4L9TX5OT7b9teVav4do5lvEBG0jNagXkbyPwqfGCdJgVdRdP7EHvn8BkvcK4SzNYxGOm5i77A27biUwyAcxiE2zhR8RGjMoAHXOqrGJSeZPz/OARftQ4cmexiSANHsufFYLp8of+6qvVYvsTREi32V7fYW5aS3euhLigISfhaNA09CY1nrW7T6xdqjZs/wJTH/ALTceBg7RRgyvibGoMhgjG5oR5otb7rUopryyGdfdvhWVT9okKehIEx6wCfY1YyZFXAXJu4gHpcSP6TZtR/5Z6hcsF6sgFAFAFAFAV8T0oCGgFFAOFAOoDmLCBLpvpwtVulv4i5M5z5M7Fguh1OaNTk60Bp/vW+GVThHgmGdWBCiF1AiTqWER9nzoBr8XxACxg3MqpPeHdJzSp7upEDbxoCxhMfdac2HZPgglpnMSG6D4YHz9yBUfjOJG2BuHfTOs7AjYRqZGnhQEl/i18MyjCOwBIDZtG+LUd3yH93WKAuYDEu6kvaNogxlJBkQDMj1I9jQErmsWSkVrjVg2b4obb3rFPcza2JlxSW5e4wVQNz7aDxPlU98Y7tmKqlY1GCyziO1nF1u3bd/DBkvWZCv3e8p3Ur4anf+Y6a1zdRq4tqVfKOlX0OyS96ST+v5nn/aHixv4hbl1Rm5ivcUiM+XKIA8Mqx1rRTKTm7Zb5ObqdFfp5YnH6+PvO67K9ssM+Iu4rHYhUvMOVZtgEpbtSGIWJJZmAknU5R6Do06hTbcs/cyth8mr28xJv4VHVGW3ze6bilGf6u53graqv8AUATPhBOjqkv+KL/+yIZn3sVhbXD8Il20pdLVt0W7bm3fRgDdVLhGVbhkkCQQyjodbHtIquPd6Dwc32t5VjJewV1bmFeTyic3JuCNGB1GjDQ6jXpVDUUVtpwfO/1IO64j2st3BgUtOC95rN59R9XaXvuW/l2YegaujK7Palyycmj2R4gMS+LxCzy2vLbtH+ZbVtQWHkWJ/wAFbap97b8eAjo63EhQBQBQBQEGJ6UBDFAAoB4oBaAzuNWMQ4RcPc5ZzNneAcq8t8pyn4ofIY8vCgM9r3E5ICWfhkGBGbKCFI5k/FK+EQZGooBy3uJAsOVbMucrSuUIEABK8ydW1jXrMaUA66ccbXeWXFzUWTbR3t8n7JuMVBF06yRovzArtieKZVXkJOVA7A29WJOYqC/RSDt8QO4oCbhd3Hi9y7ygozO2aB3EVECqGUwWLltDBAGk9AN00BE5rAziV3rWyzFAm9RncyaOI7ScVN25CnujRfzPvXI1VznLC4PS9P0iqhl8vn9ivawH1edj6VpVXu9zN0tR7/ajExNhSGkA+tasY3OhGT2RkYS9yrge33HUghl028Y3rYpzWGmTbRBpprZ8nb9s+19q5grEsOYxLuvgVDJ95JI9Ktaq3+5rhBc5y/gfPtfp/wC3vlWuFx8mQL2qVuG2cNkBPLyXM4mMrMoCg9YAM9NOu2yerUa1BcnT6X0yFsPb3P3fT5c5OHxZUAqJObQaFjHhI396pxy33ehVs6dbZY3RXLt8Z5DDYSIBkzpqCIHXWKSs8m/TdC1E5r2qxH5r9z1jsf2nsoiYYqttVGVSugH9QPUnUnxNdHS62LxB7G7W9ElWu6rLXodyK6ZwAoAoAoAoCHEdPegIaAKAeKAS4TBIEmDA8T0FCHwcB2f7RjEC3afFXbGNF1Obbud1LkXAXtKpELKyABDbTOs4plOu7v2bwyfiHGmtcTvWr2JuJhkw/OgFdG7mgOUk7tpUN7iVmLXFvbGS12sv4jDcOuXUxDm4rqUuHLmyXHUBXAXKSAxG3Sal5wZXSlCrKZb4FiDea01vFXHNtLbYlDlKNzbTwB3ZDBgraGINSZwfdjD+Zmdnr+IxGJ4hZOKuqLLhbJGSVk3RrK974V3qFnc1VylKc45e3Bn2u2l9sFbvXFb6vEmzi3siGNsJmDL/ACSSoJ02MRIqMsxWol2Zfh4eDqOzWOt3jcuWcS160RbCo579lhnzAyA0GVMtJ0OsRUos0zUsuLyjXuViy3Equ0VrbLMEZ3FcZktOesQPfT8JqvdPtg2XtLT32xX82PPnuS1cc9Wo4iaOM4gAkA9K2SntgqVafM8s5jE8Rga7dfetai5cFzUy/t4q18JrPye2foVTbCjmMZn4UHXzY9BWSk37i+rOZ1DqslZ/a6eOZvbPhZOo7IYS3ewXELl4KSLYCsRqD3mUAdAGRIjqT5R0dPGKpml4/Y85rdL2XKpPum/tP1k9/wAjm7hGkGRuR4T1+f4iuWs+Tqf09q1h6eXPK/b5m5wHhCsDdbzitkIuS34O7qdQ632IhvgZjHStZYg327mTi7xVpFTGKZYUcrc9V/Zp2gOIsmy5l7YEHqU2+4/iK7Ohuco9kuV+R4rruhVNithxLn5/7O0q+cEKAKAKAgxHT3/KgIqAKAcKAS4CQQN4MesUIfByfEezV3FJZGJt2FvI1svibbNnKpBbKMgMtGxMAmekVj2laVLml3LdeSS5wLEfvG7jMllrb2TY5bXGBKnLqfqyNcu3nRrfIdUvaOfjGBOPcFxmJwd6w3JVrlxCgDubdq0nLIE5JZiVYnQfF5Uwyba5zg47F7CYTFryFyWECi0t+4tx2d1tA5VUcsAAsep2JFSZqMtlt8TN4PwTGWL2MvKLE4lgyzcc8uDc3HL73xjw2qNzXCqcZSltuT8K7O3cHZtW8Oy3Dnd8RzSVF7OuUxAaIhYmfh8zRLBlClwjhfUl4HwAWMRfxARLQuhFFq2ZUZZJY6AAknYCBr41Hkyqq7JuXqbL1DfguRKV81pkW6zne01z6sD/AKvyNUdW/c+p2enx/wCT6HE3H61zsnpYrwZ+NxJGs1lBdzIupc6pRjzjb58r8TLxEsIjfT3On41Yj7pz7dRXrdFZBbSw8xfKa+HzQ3iDlSisdQiL9w/SlSUk2vVnmem6uFd875+I/jsvxNSzxYpgcTbQ/HdwqegUX7h+9VFb6liEk/OP1OjpK8yhfby++T+val+BnYvulXU7gfnt8qr1+8nF+DndM0lWotshLxw1yt3wbPC+LtkyAx6bH9D5bVpsThxwddauWmsVet39J+vz+JWw2LlmBOoYj8x9xFROGEmjraTVQtUknnEml+a/BiYxgZ9KVrBZVydjgvC3+vBs/syxxt462s6OSh/7hp98VdobjdF+uxzutVKzSy+G/wBx7nXaPBBQBQBQEOJ6e/5UBDQBQDhQC0BgXOE4pQ/KxOVnbENLQ2TO7NaygqZCqcsHQb6gAUBJiuF4nmM9vEsASMqMREZLKnXKYY5H8hnmJmgIbvDcfl0xgmDJyqBJOhXuHLA8Z8Os0A/iHC8Ublx7N9UzfCWLHKMtoZQsFdCjtP8AqEQN6AjxHC8cSCuKAMN4R3mBIAyRoBAYyekdaAeeHYyZ+lD4ifhX4Y0WMu2aD+dAWuDLeFv/AOQZeTuVJiAPs6byfesWSkWrlYvk3RKWIrTIt1nOdo1m0T4EH8vzqhq1mGTs9Pkva4OIY1y8npUUhg3vPlXRR8TeHkPOt9bUVkmdihHcuNwTJHLfXrOoPrUSszycTVaCjVPvku2XqjNxXD35klA3nm7o9QBJ9PvrKNiUcJ4+hyV/T1jl9tY/H7v9lPimEcLqwImcqjKs/wBI39TNbabY5wl9+51K+k+yfdNufz8fJbofxIRYtE9UU/h+tY072yS9Tiaa6VGutcVnnK+Gc7fFFC2xHodJG2tb2sncus0/UNNKMZJvleqfyHYeQ34+okfgf/Golho4XR9SqZt2P3Us/Xj9S7buTPjNaXHGD0PSJTnCd8/85ZXyWyNnsTYP02wf9VPxFbK3myKXqWuoSX9tZ/0v8j36u8fPAoAoAoCHE9Pf8qAhoAoBwoBaA53j2NZbwQOywgYAGNSW189q8x1rU313xVcmljO3qXtJGEotNbjcH2rt8s82TcWQQo+KDEgnQdN/Gr1PV6/ZZs+16Jc/I01aeVtjhHwY3Fu0zXmtqLRCK4dhn1eNUG2mon5VWt6qp493CTzzzjj8S8+kz295YNvhfa23dYIyG2x+GSCrHoA3QnzFdDT9Trtfa1hmjUdPnTHuzlHCcR45iGvvcW46gmVAZsqjQgRMTG/vXKlrJzn3ptfA5mTt+xfGbuJtubsSpUCFy6FQdfOZrtaPUSug3LwzOLOgNWjYiG5WLNiKeIrVItV8mVi7IdWU7EEVosh3xcfUvVWOElJeDznFWmS4bZHemPIzsfSuN7Nxfaz1Vd0ZQ71waltAihF9z4nxrKRp3k+5m9awKC2CdyJNb41R7cnNlfN2YRzuJcAmq3B1q4tpHN4ol3CDr8gOpPkBJrbDEY9zLF1sKanZPhIpcSuF9F+BRlUeAGg/AVupSjzy9zwac9Pqo327d/vfRjeHyBkIzE7KJzD16AetTbj7S2NlunlqrO/TQa+PCZdscGu5sxhQfcj8p31861O+Ljhbl7SdCxJSvksei/cv/u2yu4I8xvWr2k/LPTqG2Io6n9nnCJxauCGRAzz1B2AI8ZI+VXdHBStUlwcbrGo7NLKD5bSPWq7Z4wKAKAKAhxHT3/KgIaAKAcKAy+P8etYVMzmTpCzB1nU+WhqvfqPZ7RWZPhLn+bGddc7JKEFlvwcDieMXMQ6XQAzAFVyjKXWZKwdz4R1HnXl9ZbO14vwmtv8AyZpWae7tmt/KF4pgLyfWC0+ViswJggHcDUCcvvVaqEpR+R2dLKuEperKT8xGIuW7lsZlKllKg6dCRB2rZKlxSZhrtdKtRVWN858kuFweYcwsQknJ0beQZ8iDrWmVzg0o/aKc+qSlV2497yy7b4YlwhT3VOpnUmOvrp1rQ75R3zucyKy9y1wfjAwpIgcp7gJLEykwo16nQe5iu107qEq17NpY5bxv8dkZwzJ4ijs8Bj7d9M9syslZiNVMGvQ1Wxsgpx4ZnwSXKl8GyJUvitbLMGUSN61lkxOMYS3kN1l+sV0VG8AVuFvUaCqmojFRcvOUdDRWWO1QT93Db+9HMLe71UD0Dh7poYzigCwD0rOVm2CrVpcyyc1cxW5rV2tnSwkiji7gVMwMs8if5VB2jz01rdBZePQ81q73rtRHTL7CxJ/HZP8AUp8H7zMvSPzH61u1HuxTK3XknXF+j/n5G12ewgDQerb+RNVrp9zR29HdGzSRsh6fiddxfDqiDLWVkFFbGrS2SnN5ObxgkVpydavYb2c44+GxCuDoDDDoy9RVmqbqkrF9fkaNdpY6mlwl/wCH6nvOHvB1V1MhgGB8iJFehi1JZR85nBwk4y5WxJUmIUAUBDiOnvQENAAoBWEgjxEf5FQ1lA8V4/hsRe0HMuwzZCcxLAHYZvWY6VwtFOUL8tN5yk9/5g6HSdZHS6junw1j5HO2g8lWVg66EQe6fCOmtdz/AI+ZY/A9xRbVZHv2947nh/FLwsW1Ny4Yhu98R1nK3Ujp6V5LU3NXyUVFRzwuMHitZZZ/dSUI8PhI2eMcct3Ry0QuARMr3S0TGumngfEVp1Njml2vCK+ti68J+TjeJdp3S4wREOUMhzTGsTpOm29b6OmRnWpNvfc7PT+gwv0qtnPDlwvCNvh3GVQpcYDKx2OuhUn56VRdLUmlyjzTTrscX4eB/GeD28apOFvhG35RP1bEeIjMvrqPKul02+FM8zhh+v8ANjraHV16efeopv18ordne0WKwIGGxFqVX7JWGGv2HWVcf5Neriq7F3QZVvl7WyVj2beT0bC4xLq5kM6DTYiehHQ1X7k+DUmMv1hIswKY61giw2YfajSyPN//AFNUtY8QXz/Q6XSt7n8v1Rx0da5+T0xmY+6RrNZ17mN1XfD3HiS4fx/b1Rl3rh6VZUUcmXU42U+14lB4nHzh7P54e6+WBnFMVIRAPhUDTck6mporw3L1Z5/peojXbOyb/wAcfl+xWw1/l5gfjZSp1+EE/joPT5xunDvx6I2pvWXp/wCGVz5xk3eF4owCPiH31QtgkzpxiunXY/8Ahn/+ZfsbOM4kzqATWptvZnbqpjB5RUzyKxwbzJxIhqtQ4Ms7HuH7OsabmCSd0JT5aj8a6+glmlL02PBdaq9nqm15SZ01XDkhQBQFfF3AIkgb7kCgIQ48R86AkAoBQKAbds5gRrqCJGh18CNjUSipLDJTw8nL3+xKQSt69OpALLqegJyk+9c+XS9O9+3L+bLi192yb2+SKGE7F32H114KPBFzn3ZtPuqtV0aC3se/wN0+pS4gvvNK92bY2lsDTKdLo3AOrNlj4j8uvlUvpEO5en82Kdt3tV73JyeN/Zpe57XBcV7czlMi4+moMQAZ61ZnppwqcaefH8Z1a+sey00aYJppYzn8i7/wlfdR9WoVfsMYLHxBG0ffXKq6XqO1ybxLx/s4TWXksYLsQ6uLjkQJ+qUknbQ5yRrPT763y6VZKrHf7/rjYmCSe50XC+G5CWcNJA0dywHmFJIX2Jq/otM6K+2Ty/U2Sab2Lr3FHUD3FWmTEpYjFW+rp/cP1rXJFiEkiouKtz8a+zA/hWHaza7I+pU7SWM+Ed115dxGOh2IKn/9A+1VdbW3Q36PJd6Xelq0vVNfr+h5+5riZbPYGTxAlmCKJJ6CrlKwssnuwifDcFvKPjXX7JBgehqZWxfg4Wt6XVqJOaliXnC5+ZFjeDXVJKFNfiOsx4LppUxuivtJlCHQPez3p/Nf7MjF8KZDMA+EE7+9WK9QpLB0bNNOlKeVhc4WMIXCYgqQRuKiyClsy/ZVXqKnXPh/zJp4jGDN3dtJPmd/y+dV41vG5yejaq1WS0lr+zx67Pgkw2IkkeenpA/3rGcMJHWhqF3W5/xf/an+Yy+kmkXguZPW/wBlIIw1wf6n/qK6vTXmt/M8d/UGPbQ/6f1O2ronACgCgK+LtgxIB33E0BT+hWv+Un9q/pQGZx27h8Ohe4lpVClmdrWeACoACrBJJYAagfdUN4Ndk1FZZDd4nhLaW2v2Vt55H8MQsKrd4brIddNdTHqTMoSyhf3nw3Lni1l5nKzcrQPE5fhmpMg/enDgxQraVgzJl5YLErcNkwqgkDOCASBO4ka0BH+/eFa96yAAWk2zEDRvs9NPmKAdb4twxmyxaklVANrcuAV+zoCD1igLPGrdiysjD2zoT/DVj8SqAF0klnUakAeNQ3g12WdiyV2xmES2tx7CwzZZS0NuXzs5U6gBNTvEHeieTKEu5ZK9ztDwxSVISRMg2SIAOUnVehqTIf8AvrA5WZLQYK4Q5bQGpDkASBmJyEACSSQBvWJKIj2gwuaLdh2HVltQBJgbxP8AnlUNEp4HYrjKq5T6PeMRBS3mBkA+gOsRvp5icHE3Rml4LHDMSbiByj2yZlHEMCDGx6dR5Vpawzd3Zjku4rEouDxFxhmQWXePEZCazWPZtM0Sm4yU4vdbo8p7R4R8Nd5b7EZrb9LiHZh5+I6H2rh2aV1S+Hg9toddHU1KS58r4kfBsOFXmn4m28l6frUSfgtTl3bI6bhmCDLnasq6lLdnP1F7i+2JncUUKxUbVrksPBb0zco5OW4q3TpWVK3LtkZOHupN+j8/Ayzhi8ldx1HX1/z571a71HZnkI9Qekt7H9j0f2o/B+v7cDWutkCEENqI6nXT8BRRXd3Lgqz1ka+oe3i9vP1W5Y5oSBMn8NtPWtfb37l3pdluptm39ly7n9OF+v0LtkzWiex6jJ7Z2BwRtYNJ3cl/Y6D7gK7ehr7KVnzueJ61d7TVtLhJI6OrhygoAoCHEdKAhFAZHaPiduyqm5uSQpBIMx8IgiSfAkDumToAcZM1WyUeRljtBhVs27hbuPIUjMwYnLJltTOcHXXUz1qU8oyhJSjlFhOO4VgxVw4UrORS3xsFBAA1GZgCRtNSZkJ7TYKf4qkkK+gkw2xMegnw0oC/gcbh708p7dyAJywYDTE+sGgLeQeA+VAZXaK/bVBnXNuepgSq7D4pLLptpJ2FYs03SjGOZFdOP2LNlXYFQTAyy0khWmTrqHXU1KMqpRlFND/+K8MVdldmCFQ0D+Y5dJgGDoak2Fc9scERJunaYNu5O2YD4d46fpWJKG3u1WHlR9YVdSQ2RoPfNuIIncHpqNRIBjHBJVu9qLR2t321gZbZ1J23jp12E1g4M2xmkaOBvZ1D5SuYTlYQw8iOhrU1vg2d2Ucu/GORhr/DsUGVuWyYe7BKXbYEWwSNmiAenjHXTO5RqlGXONipLPBznaDjn0uzg8CCAyFhcuNEBVGVCGP/AEST4kAVqjd7WuOfHJu01tkLF2PDexLfIBCjYVzm8s+gVRxE3LOIyoB5VvjLETnzr7ps5ziGJlzVebOtRXiBz3FH1rdStiz/AIlHhuCd7hKsVGxIrfdbGEMNZODqtFXdJzsWTqbfAwVlmZtNSIE+pAmuU9Y08JI4f/p0FIGwVpRAtrH+fOiuse/czo0Vzrwo8F3szwSzexNtM+RSZZT9qNcqnoTtB/2q7psXTUZv/Zc1GrspplNLLx93x+R7WigAACABAA6AbV6NHiG23limpIEoB1AQ4jpQEUUBWx+At3gA4mNjpInffQjyNQ1kxlFS5HW+H2goTlqVEwGAbfU7+g+Q8KEpJLCEw3DLFsFUtIoJJICjUk5tfeD7CpJF/d1j/k2v7F/SgIbiYfCrcvlUtLCm4wECF7oJA2AmgEbjmHG91QdO6dH1MDub7+XQ0BX4pi8Jc+ruvE8wSZUQj8u53iIgOoBnrl8qhrJjKKksMZa4jgUUILlshYOpDGCAc2s6QBrtA8qnBKSSwjQw2FtKsW0QKe93VABLHNPuTNQySQqPAViBjmsWZFS+a0S4M4vBzXH+Mm39XbMN9pv5R4DzrlavWOL9nDnyxKXocticBcuWyzSRMySSZ8Z8a5S1PbPGdzDDwcuuDIvITtnUid9CK6StTrePQ3aOOdRBfFHQ4g9+tCZ9DrXuDr+LIET0rPJEKk3kx3uEmaFvGFgycfc1NWao7GFssRNng6QgqnqHmRXthskd7gFUWBpuKwqpg6stbs4Vnd7XY5fFESarwTOtCvYyzfKOGUwQZB8xVyK2NjrTWGe39meKfScMl37REP8A1DQ/r716LTW+1rUjwmv039vfKC45XyZqVYKYUA6gIb/SgI6AKAWaAUUAlAMvWlYZWUMDEhgCDBkaHzAoConBsMIjD2RAAEW10A1AGmlATPgbRXK1tWXvaMoYd5s7b+LQfUUAxuHWTP1SCREhQDAEDUaiABQEykEd2COkbfdUMDWqARFwdiD00rBk5KGOu5VZvAE/Kqd1nZFy9DI86vOXcljMmTXmMt5b5INTGY5QgQbVTrqbl3MzbOM4tiJcPsAQfka7OnhiLiTTPstjL0aNO4Z1rVBn0Wt5WxBeFbHI3RKd0RWSJbMHGNr71frWxpvlsb2BPdFULeTOe50FniBFvLNaFJpYRTenTnkzDckmp7dizgz8ZvW+vgyxselfslxJNq7bPRlYe4g/gK6vTZfaj9Tyn9QV4lCfzR31dQ84FAOoCK9096AjoBKAWgMHjXBOdiMPdFu2Qpuc0tuQ1pkTT7UMZiRGp3oDNHDeK5EBxAzZQLhDLLP9Guq7A5NFOINpgIEBW2nLQCvguLaReUgXVeS6zywMLnSOXrJXFRrpzF8igC4PhPErYVVvjKLrN3nL904w3XLFhLA4Y5Av2WB8QQBLjuz9971xw47+Kw15L0w9mzaVBcsr172VxA0POaesgMvYDiYS0FvBmV/rGLAZ7aXbWUlckZ3tC7MQAzRGzKBBc7N3jhLVgC2HXGXb8mGVUe/eujQiGOW4AV2OomgIMPwjiaWVtW7q2smFW3aAfmILypdQs5dCzKWNpgdxkiIkNANns9gLlpb3MABe890d7MYZUHeMDvSDWuTA3j5+pf0/MVy+oP8A4JfzyZI4Nkrz8XsCtfUmtseAYnGEhYq3p3uYss8KxWe3E95dGH4H3/WsL6+yefDPbdI1iupSf2ls/wByZ2rCLOymVb5rdEZMTGoFUu3oo/mboPTqfSr1T7nhfU5vUtZHT093nwvibfC2BQGqF+VIuVWq2CmvKTLrGtC3NpB1raSV74ms47DJ6B+ypYa74ZR+I/3ro9M3lJnmf6g/9uHz/Q9FmuweWFmgHUBHe6e9AR0A2KAdQAKAWgFFAcTh+1GJQtzLXM1XK6lRYC3HuZC7FQ9lgFClHBgkGaAtXO1l2WBwpULctW2JuapzGsqbrALPKAuuc231fSTlATsv2gvXOTZvW2LNazNe0guMxZWUAFCO7qQAZ0MiKA6c1DA2sWCNxWDBk8Xt5kZfL/eudrYOVMor0MonEOK8umSVnrdnwQYPGFq9p2YlC5w+9h3RiCpZVaD1VhIBFXJ4a7JIsae+zTzVkHua2fN5GqGMHrNN1qmxYl7r/D7yji8QFGxJ/wA61vrrbI1PWqK17j7n8P3OcxTvceX6fCOgHlXRgowjiJ5XVauzUz75/ReEdRwDC3ORzY+r5htz4MAGE+oP3VT1VTa70eh6HrFKHsZPdcfL/ReNUEejImrYCIissg9O/Zpgytl7h+00D0G/4j5V2OmwxBy9TyXX7U7Y1rwvzOzFdM8+FMgfQEd3pQDIoAigCKAKAy27Q4YEg3NQcp7raN/Ltvvp/wBLfymAHrxuwQSHJymG7rSDlZiDp0COT4ZTQDH7RYcAEuwBiCVbWY8vMfOgFbj1oTGYkOtuIghmcJGsdZ/tNAQf8TYciQWI11gaju66kdWA9dKAdd4/ZCh4cq2aCAD8JjXWRPTy1MVDBZwGLF1M4UqCSAGiYBgEgbTvHnUAmYVgwUMXbqtYjM5TiuAIJZRp18v9q87q9HKqTnBZj+X+ieTCvDoNSdgNSfQVVgu7gxNXgfZUu4u4lYQai2d3PTMOi+W5rt6PRv7VnBKRN+0bhudFxCiSndeP5ZkH2M/OrGtrzia+RLOHVtJrlY3IKd1ZrdF4ILPCuy9zFLc5Q1RSwnZm6ID4nX5VZq7pywuCe3KPTOwnA+Xw8Wb6a3Sz3EbcTAUHwIVVPka6EK04dslyZ0ynXJTi8NHN9ouz1zDksAWtdHHTyeNj57H7q42o0kqnlbx/nJ7Pp/UYaldreJ+nr8jAYVWR1C9wPg9zE3QiD+pvsqPE/p1rdTTK6XbEq6vVV6avvn9F6nsWBwy2ra20+FRA/Mnzr0kIKuKjHhHgrrZXWOyXLLINbEzULTAwSEVJA11oCPKaAIoAigEoCPkJ/Ku87DfXX17zf3HxoBrYa2d0Q6zqq7zM+sgH1oCL922cxfloWbLJIn4RCwDosDwigJ2sId0U77gHfU/OB8qAXkrvlWeugoBQvh91AIVPgaxaA02z4VGAQXsOx6VrlFk5M3EYB/KK0yh4MkyHC4HlCEQKN+6oGp9KwjWo8IklKv4GstzLYjvI5BBWQdCDsR5isZZaM1g4PjXZi6GJsWzB+zI09J6VzZ0yT2Wxi4ehn8P7M4h3i7bZE6wVJP36VKqfAjW3yejcJsrati3bTKo6dSepJ6nzroVrtWEbezBqI5rcmRglDVnnIwZeN7NYS7vaCHxt9z7hp91V7NJVPx92xdp6lqquJZXx3NXh+Et2UCW1CqOg6+ZPU+dWa4Rrj2xWClfbZdJzm8stq1bEzQ0SrUmLHRUgmqTEDQCUAlALQBQCUAUAk0ATQBQBQCUAlAIRUYAhWjQG8use0kClRgkabQp2k5GHDDwqOxGeRhwi+FY+zRl3sUYUeFT7NDvYow4qewd4v0YU7B3h9Gp2kd44Yep7SHIlW1WSRi5DwtTgxHRTBA6pICgCKAIoAigEigCKAIoAoBIoAigCKAIoAigEigCKAIoBCKYJyEVDRIRUYYDLTBIZanAyGWowyMhFTgnIsUIFipARQjIUAUGR1CAoAoAoAoAoAoAoBDQCUAUAUAUAUAUAUAUAlAFDIKAKAKAWgCgCgChAUDChAUB//9k=",brand:"Kaveri Seeds",price:180,mrp:240,rating:4.5},{id:7,name:"Hot Green Chilli Seeds",image:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",brand:"East West Seeds",price:145,mrp:195,rating:4.4},{id:8,name:"Round Brinjal Hybrid Seeds",image:"https://th.bing.com/th/id/OIP.Y-g_X54Kg34x7GkIgTGDxgHaHY?w=179&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",brand:"Nunhems",price:130,mrp:175,rating:4},{id:9,name:"Cucumber Long Hybrid Seeds",image:"https://th.bing.com/th/id/OIP.Y-g_X54Kg34x7GkIgTGDxgHaHY?w=179&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",brand:"Mahyco",price:165,mrp:230,rating:4.3},{id:10,name:"High Yield Okra Seeds",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",brand:"Syngenta",price:125,mrp:185,rating:4.2},{id:11,name:"Fresh Cucumber Hybrid Seeds",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",brand:"Mahyco",price:158,mrp:215,rating:4.4},{id:12,name:"Premium Okra Seeds Pack",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",brand:"Syngenta",price:118,mrp:170,rating:4.1}],ix=({item:r})=>a.jsxs(oe,{to:`/seeds/${r.id}`,className:"seed-card",children:[a.jsx("div",{className:"seed-img-box",children:a.jsx("img",{src:r.image,alt:r.name})}),a.jsx("h3",{className:"seed-name",children:r.name}),a.jsx("p",{className:"seed-brand",children:r.brand}),a.jsxs("div",{className:"seed-price-row",children:[a.jsxs("span",{className:"seed-price",children:["₹",r.price]}),a.jsxs("span",{className:"seed-mrp",children:["₹",r.mrp]})]}),a.jsx("style",{children:`
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
      `})]}),Rv=()=>{const[r,s]=w.useState(""),[l,o]=w.useState("All"),[d,f]=w.useState("default"),[p,m]=w.useState(1),x=12,h=["All",...new Set(qn.map(j=>j.brand))];let b=qn.filter(j=>j.name.toLowerCase().includes(r.toLowerCase()));l!=="All"&&(b=b.filter(j=>j.brand===l)),d==="low"&&b.sort((j,C)=>j.price-C.price),d==="high"&&b.sort((j,C)=>C.price-j.price),d==="rating"&&b.sort((j,C)=>C.rating-j.rating);const y=Math.ceil(b.length/x),E=(p-1)*x,S=b.slice(E,E+x);return a.jsxs("div",{className:"seed-page",children:[a.jsx("h2",{className:"seed-title",children:"Vegetable Seeds"}),a.jsxs("div",{className:"seed-filters",children:[a.jsx("input",{type:"text",placeholder:"Search Seeds...",value:r,onChange:j=>s(j.target.value)}),a.jsx("select",{value:l,onChange:j=>o(j.target.value),children:h.map((j,C)=>a.jsx("option",{value:j,children:j},C))}),a.jsxs("select",{value:d,onChange:j=>f(j.target.value),children:[a.jsx("option",{value:"default",children:"Sort By"}),a.jsx("option",{value:"low",children:"Price: Low to High"}),a.jsx("option",{value:"high",children:"Price: High to Low"}),a.jsx("option",{value:"rating",children:"Rating"})]})]}),a.jsx("div",{className:"seed-grid",children:S.map(j=>a.jsx(ix,{item:j},j.id))}),a.jsxs("div",{className:"seed-pagination",children:[a.jsx("button",{disabled:p===1,onClick:()=>m(p-1),children:"⟵ Prev"}),a.jsxs("span",{children:["Page ",p," of ",y]}),a.jsx("button",{disabled:p===y,onClick:()=>m(p+1),children:"Next ⟶"})]}),a.jsx("style",{children:`
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
      `})]})},rx=()=>{const r=qn.slice(0,12);return a.jsxs("div",{className:"seed-preview-wrapper",children:[a.jsxs("div",{className:"seed-header-row",children:[a.jsx("h2",{className:"seed-preview-title",children:"Vegetable Seeds"}),a.jsx(oe,{to:"/category/vegetable-seeds",className:"seed-more-btn",children:"View More →"})]}),a.jsx("div",{className:"seed-scroll-row",children:r.map(s=>a.jsx("div",{className:"scroll-item",children:a.jsx(ix,{item:s})},s.id))}),a.jsx("style",{children:`
        .seed-preview-wrapper {
          max-width: 1300px;
          margin: auto;
          padding: 0 20px;
        }

        .seed-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
          margin-top: 30px;
        }

        .seed-preview-title {
          font-size: 24px;
          font-weight: 700;
          color: #2a7a0e;
          margin: 0;
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
          scrollbar-width: none;
          margin-top: 0;
        }

        .seed-scroll-row::-webkit-scrollbar {
          display: none;
        }

        /* CARD WIDTH MATCHING FERTILIZERS */
        .scroll-item {
          min-width: 180px;
          max-width: 180px;
          flex-shrink: 0;
        }

        @media(max-width: 600px) {
          .scroll-item {
            min-width: 150px;
            max-width: 150px;
          }
        }
      `})]})},Gn=[{id:1,name:"Urea Nitrogen Fertilizer",image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQAeksVMkoWSBA8t3J0ndEEPLCqeYGZf1vEfwdpgmNEn2evLpabELU2w_v5YUb-DyYv5tmWc5S4P1Zgs13N_kuO1ezmbY6STFefd2B6RiGi&usqp=CAc",brand:"IFFCO",price:220,mrp:260,rating:4.4},{id:2,name:"DAP 18-46-0 Fertilizer",image:"data:image/jpeg;base64,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",brand:"Coromandel",price:1350,mrp:1500,rating:4.6},{id:3,name:"NPK 19-19-19 Water Soluble",image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_Ce0IZ6xOrvzQijF4oiB8xcLr0_a_6NfSyqyXpA8_9SBdsrrcNiMFdiisY9hbpTX02Wy8Eo9iHBq8cQ8lOhqBRS2e7R554chA-XqzdLDC-ntioc2hE7ndYtTWVn8vScx4nORk8Q&usqp=CAc",brand:"Mahadhan",price:780,mrp:900,rating:4.3},{id:4,name:"Potash Muriate of Potash",image:"data:image/jpeg;base64,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",brand:"Zuari",price:550,mrp:620,rating:4.2},{id:5,name:"Zinc Sulphate 21%",image:"https://pratikindia.com/wp-content/uploads/2023/12/Zinc-Sulphate-21.png",brand:"Nova",price:260,mrp:320,rating:4.1},{id:6,name:"Zinc Sulphate 21%",image:"https://pratikindia.com/wp-content/uploads/2023/12/Zinc-Sulphate-21.png",brand:"Nova",price:250,mrp:320,rating:4.1},{id:7,name:"Zinc Sulphate 21%",image:"https://pratikindia.com/wp-content/uploads/2023/12/Zinc-Sulphate-21.png",brand:"Nova",price:230,mrp:320,rating:4.1}],sx=({item:r})=>a.jsxs(oe,{to:`/fertilizers/${r.id}`,className:"fert-card",children:[a.jsx("div",{className:"fert-img-box",children:a.jsx("img",{src:r.image||"/mnt/data/c61b8eae-dfc2-4cca-a1e0-c301228d07ef.png",alt:r.name,loading:"lazy"})}),a.jsx("h3",{className:"fert-name",children:r.name}),a.jsx("p",{className:"fert-brand",children:r.brand}),a.jsxs("div",{className:"fert-price-row",children:[a.jsxs("span",{className:"fert-price",children:["₹",r.price]}),a.jsxs("span",{className:"fert-mrp",children:["₹",r.mrp]})]}),a.jsx("style",{children:`
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
      `})]}),lx=()=>{const r=Gn.slice(0,12);return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"fert-preview-wrapper",children:[a.jsxs("div",{className:"fert-header-row",children:[a.jsx("h2",{className:"fert-preview-title",children:"Fertilizers"}),a.jsx(oe,{to:"/category/fertilizers",className:"fert-more-btn",children:"View More →"})]}),a.jsx("div",{className:"fert-scroll-row",children:r.map(s=>a.jsx("div",{className:"scroll-item",children:a.jsx(sx,{item:s})},s.id))}),a.jsx("style",{children:`
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
      `})]})})},Ui=[{id:1,name:"Power Sprayer 18L (Portable)",image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRAKvOsKUweVhPlby71fTxm1lUToHw23WKi6VzD_X80KFFBxTLGtDQBb36g_obFxXgizT8cdIxf-3FdaHLLLn8OB1BeM2o3wYQ-njCv8tL4GxU-P3PSYl_gVEWs-ZcyXjkqqzAr388&usqp=CAc",brand:"Kisan Kraft",price:6500,mrp:7800,rating:4.4},{id:2,name:"Knapsack Manual Sprayer 16L",image:"data:image/webp;base64,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",brand:"Neptune",price:1450,mrp:1800,rating:4.3},{id:3,name:"Mini Power Tiller / Cultivator",image:"data:image/jpeg;base64,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",brand:"AgriPro",price:18500,mrp:21500,rating:4.5},{id:4,name:"Brush Cutter 52cc Heavy Duty",image:"/assets/machinery/brush-cutter.jpg",brand:"Balwaan",price:7200,mrp:8900,rating:4.2},{id:5,name:"Water Pump 5HP Diesel",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTXPjEg7g0BDMdu5jzOY8E6rNA_Ktd-vYaXVXWj-8Jq6z1s9DY9lRVID5Awua6D7O_sVFNoRi-QTJAHMwqNb96fcYzjy8X_eID6i1pzXAjZ2JhMUAD6AT9gZX00jR35CTCodWHVjg&usqp=CAc",brand:"FieldPro",price:14800,mrp:17e3,rating:4.1},{id:6,name:"Mini Tractor 12HP Compact",image:"data:image/jpeg;base64,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",brand:"VST Shakti",price:245e3,mrp:27e4,rating:4.7}],ox=({item:r})=>a.jsxs(oe,{to:`/machinery/${r.id}`,className:"mach-card",children:[a.jsx("div",{className:"mach-img-box",children:a.jsx("img",{src:r.image,alt:r.name})}),a.jsx("h3",{className:"mach-name",children:r.name}),a.jsx("p",{className:"mach-brand",children:r.brand}),a.jsxs("div",{className:"mach-price-row",children:[a.jsxs("span",{className:"mach-price",children:["₹",r.price]}),a.jsxs("span",{className:"mach-mrp",children:["₹",r.mrp]})]}),a.jsx("style",{children:`
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
      `})]}),cx=()=>{const r=Ui.slice(0,12);return a.jsxs("div",{className:"mach-preview-wrapper",children:[a.jsxs("div",{className:"mach-header-row",children:[a.jsx("h2",{className:"mach-preview-title",children:"Farm Machinery"}),a.jsx(oe,{to:"/category/farm-machinery",className:"mach-more-btn",children:"View More →"})]}),a.jsx("div",{className:"mach-scroll-row",children:r.map(s=>a.jsx("div",{className:"scroll-item",children:a.jsx(ox,{item:s})},s.id))}),a.jsx("style",{children:`
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
      `})]})},od=(r,s)=>r.map(l=>({...l,category:s,discountPercent:Math.round((l.mrp-l.price)/l.mrp*100)})),dx=[...od(qn,"seeds"),...od(Gn,"fertilizers"),...od(Ui,"machinery")],Mv=(r=6)=>dx.filter(s=>s.discountPercent>=10).sort((s,l)=>l.discountPercent-s.discountPercent).slice(0,r),Bv=()=>dx.filter(r=>r.discountPercent>=10),ux=({item:r})=>{const s={seeds:`/seeds/${r.id}`,fertilizers:`/fertilizers/${r.id}`,machinery:`/machinery/${r.id}`}[r.category];return a.jsxs(oe,{to:s,className:"offer-card",children:[a.jsxs("div",{className:"offer-img-box",children:[a.jsx("img",{src:r.image,alt:r.name}),a.jsxs("span",{className:"offer-badge",children:["-",r.discountPercent,"%"]})]}),a.jsx("h3",{className:"offer-name",children:r.name}),a.jsx("p",{className:"offer-brand",children:r.brand}),a.jsxs("div",{className:"offer-price-box",children:[a.jsxs("span",{className:"offer-price",children:["₹",r.price]}),a.jsxs("span",{className:"offer-mrp",children:["₹",r.mrp]})]}),a.jsx("style",{children:`
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
      `})]})},fx=()=>{const r=Mv(12);return a.jsxs("div",{className:"offers-preview-wrapper",children:[a.jsxs("div",{className:"offers-header-row",children:[a.jsx("h2",{className:"offers-title",children:"Today's Offers"}),a.jsx(oe,{to:"/category/offers-today",className:"offers-more-btn",children:"View More →"})]}),a.jsx("div",{className:"offers-scroll-row",children:r.map(s=>a.jsx("div",{className:"scroll-item",children:a.jsx(ux,{item:s})},s.id))}),a.jsx("style",{children:`
        .offers-preview-wrapper {
          max-width: 1300px;
          margin: auto;
          padding: 0 20px;
        }

        /* HEADER */
        .offers-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 30px;
          margin-bottom: 6px;
        }

        .offers-title {
          font-size: 24px;
          font-weight: 700;
          color: #2a7a0e;
          margin: 0;
        }

        .offers-more-btn {
          background: #2a7a0e;
          color: white;
          padding: 6px 14px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
        }

        .offers-more-btn:hover { opacity: 0.85; }

        /* SCROLL ROW */
        .offers-scroll-row {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding-bottom: 8px;
          scrollbar-width: none;
        }

        .offers-scroll-row::-webkit-scrollbar {
          display: none;
        }

        /* GRID ITEM SIZE (MATCHING FERTILIZER PREVIEW) */
        .scroll-item {
          min-width: 200px;       /* SAME SIZE FOR ALL CARDS */
          max-width: 200px;
          flex-shrink: 0;
        }

        /* RESPONSIVE */
        @media (max-width: 600px) {
          .scroll-item {
            min-width: 160px;
            max-width: 160px;
          }
        }
      `})]})},cd=(r,s)=>r.map(l=>({...l,category:s,rating:l.rating||4}));let El=[...cd(qn,"seeds"),...cd(Gn,"fertilizers"),...cd(Ui,"machinery")];El=El.sort((r,s)=>s.rating-r.rating);const Dv=(r=6)=>El.slice(0,r),Lv=()=>El,px=({item:r})=>{const s={seeds:`/seeds/${r.id}`,fertilizers:`/fertilizers/${r.id}`,machinery:`/machinery/${r.id}`}[r.category];return a.jsxs(oe,{to:s,className:"bs-card",children:[a.jsxs("div",{className:"bs-img-box",children:[a.jsx("img",{src:r.image,alt:r.name}),a.jsxs("span",{className:"bs-badge",children:["⭐ ",r.rating]})]}),a.jsx("h3",{className:"bs-name",children:r.name}),a.jsx("p",{className:"bs-brand",children:r.brand}),a.jsxs("div",{className:"bs-price-row",children:[a.jsxs("span",{className:"bs-price",children:["₹",r.price]}),a.jsxs("span",{className:"bs-mrp",children:["₹",r.mrp]})]}),a.jsx("style",{children:`
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
      `})]})},hx=()=>{const r=Dv(12);return a.jsxs("div",{className:"bs-preview-wrap",children:[a.jsxs("div",{className:"bs-head-row",children:[a.jsx("h2",{className:"bs-title",children:"Best Selling"}),a.jsx(oe,{to:"/best-selling",className:"bs-more-btn",children:"View More →"})]}),a.jsx("div",{className:"bs-scroll",children:r.map(s=>a.jsx("div",{className:"scroll-item",children:a.jsx(px,{item:s})},s.id))}),a.jsx("style",{children:`
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
      `})]})},Uv=({item:r})=>a.jsxs(oe,{to:r.to,className:"ex-card",children:[a.jsx("img",{src:r.image,alt:"exclusive"}),a.jsx("style",{children:`
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
      `})]}),Hv=[{id:1,image:"https://media.bighaat.com//wsfbanners/0307c441-0f8b-4c9a-b195-b13a7883f58d.webp?w=750&q=80",to:"/products/tiger-power"},{id:2,image:"https://media.bighaat.com//wsfbanners/9b54f6e3-f14f-41f1-842e-0235ea29ffa9.webp?w=750&q=80",to:"/products/amino-maxx"},{id:3,image:"https://media.bighaat.com//wsfbanners/270395f8-cf32-4231-a8f7-b42be512bd18.webp?w=750&q=80",to:"/products/insecticides-offers"},{id:4,image:"https://media.bighaat.com//wsfbanners/81e11abf-dd4a-40cc-bb27-6104ec4a5350.webp?w=750&q=80",to:"/products/farm-implements"}],mx=()=>a.jsxs("div",{className:"exclusive-wrapper",children:[a.jsx("h2",{className:"exclusive-title",children:"Exclusive"}),a.jsx("div",{className:"exclusive-grid",children:Hv.map(r=>a.jsx(Uv,{item:r},r.id))}),a.jsx("style",{children:`
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
      `})]}),Vv=()=>a.jsxs("div",{className:"trust-banner",children:[a.jsxs("div",{className:"trust-item",children:[a.jsx("span",{className:"trust-icon",children:"🏷️"}),a.jsxs("p",{className:"trust-text",children:["100% Branded ",a.jsx("br",{})," Products"]})]}),a.jsxs("div",{className:"trust-item",children:[a.jsx("svg",{className:"trust-icon",width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"#2a7a0e",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"})}),a.jsxs("p",{className:"trust-text",children:["100% Original ",a.jsx("br",{})," Products"]})]}),a.jsxs("div",{className:"trust-item",children:[a.jsx("span",{className:"trust-icon",children:"🚚"}),a.jsx("p",{className:"trust-text",children:"Free Delivery"})]}),a.jsx("style",{children:`
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
      `})]}),qv=()=>a.jsxs("div",{className:"trust2-wrapper",children:[a.jsxs("div",{className:"trust2-item",children:[a.jsxs("svg",{className:"trust2-icon",viewBox:"0 0 24 24",fill:"none",stroke:"#2a7a0e",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"}),a.jsx("circle",{cx:"12",cy:"12",r:"2.2"})]}),a.jsxs("p",{className:"trust2-text",children:["Safe & Secure ",a.jsx("br",{})," Payment"]})]}),a.jsxs("div",{className:"trust2-item",children:[a.jsxs("svg",{className:"trust2-icon",viewBox:"0 0 24 24",fill:"none",stroke:"#2a7a0e",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"8",r:"4"}),a.jsx("path",{d:"M6 21c1.5-3 4.5-5 6-5s4.5 2 6 5"}),a.jsx("path",{d:"M16 3.5l2.5 2"})]}),a.jsx("p",{className:"trust2-text",children:"Expert Advice"})]}),a.jsxs("div",{className:"trust2-item",children:[a.jsxs("svg",{className:"trust2-icon",viewBox:"0 0 24 24",fill:"none",stroke:"#2a7a0e",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M8 12h8"}),a.jsx("path",{d:"M12 8v8"}),a.jsx("circle",{cx:"12",cy:"12",r:"9"})]}),a.jsxs("p",{className:"trust2-text",children:["Best Price ",a.jsx("br",{})," Assured"]})]}),a.jsx("style",{children:`
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
      `})]});var dd={exports:{}},Um;function Gv(){return Um||(Um=1,(()=>{var r={296:(d,f,p)=>{var m=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,b=/^0o[0-7]+$/i,y=parseInt,E=typeof p.g=="object"&&p.g&&p.g.Object===Object&&p.g,S=typeof self=="object"&&self&&self.Object===Object&&self,j=E||S||Function("return this")(),C=Object.prototype.toString,z=Math.max,R=Math.min,M=function(){return j.Date.now()};function V($){var ce=typeof $;return!!$&&(ce=="object"||ce=="function")}function re($){if(typeof $=="number")return $;if((function(le){return typeof le=="symbol"||(function(ae){return!!ae&&typeof ae=="object"})(le)&&C.call(le)=="[object Symbol]"})($))return NaN;if(V($)){var ce=typeof $.valueOf=="function"?$.valueOf():$;$=V(ce)?ce+"":ce}if(typeof $!="string")return $===0?$:+$;$=$.replace(m,"");var te=h.test($);return te||b.test($)?y($.slice(2),te?2:8):x.test($)?NaN:+$}d.exports=function($,ce,te){var le,ae,pe,ge,X,W,I=0,je=!1,T=!1,_=!0;if(typeof $!="function")throw new TypeError("Expected a function");function de(J){var se=le,ye=ae;return le=ae=void 0,I=J,ge=$.apply(ye,se)}function F(J){var se=J-W;return W===void 0||se>=ce||se<0||T&&J-I>=pe}function fe(){var J=M();if(F(J))return A(J);X=setTimeout(fe,(function(se){var ye=ce-(se-W);return T?R(ye,pe-(se-I)):ye})(J))}function A(J){return X=void 0,_&&le?de(J):(le=ae=void 0,ge)}function H(){var J=M(),se=F(J);if(le=arguments,ae=this,W=J,se){if(X===void 0)return(function(ye){return I=ye,X=setTimeout(fe,ce),je?de(ye):ge})(W);if(T)return X=setTimeout(fe,ce),de(W)}return X===void 0&&(X=setTimeout(fe,ce)),ge}return ce=re(ce)||0,V(te)&&(je=!!te.leading,pe=(T="maxWait"in te)?z(re(te.maxWait)||0,ce):pe,_="trailing"in te?!!te.trailing:_),H.cancel=function(){X!==void 0&&clearTimeout(X),I=0,le=W=ae=X=void 0},H.flush=function(){return X===void 0?ge:A(M())},H}},96:(d,f,p)=>{var m="Expected a function",x=NaN,h="[object Symbol]",b=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,S=/^0o[0-7]+$/i,j=parseInt,C=typeof p.g=="object"&&p.g&&p.g.Object===Object&&p.g,z=typeof self=="object"&&self&&self.Object===Object&&self,R=C||z||Function("return this")(),M=Object.prototype.toString,V=Math.max,re=Math.min,$=function(){return R.Date.now()};function ce(le){var ae=typeof le;return!!le&&(ae=="object"||ae=="function")}function te(le){if(typeof le=="number")return le;if((function(ge){return typeof ge=="symbol"||(function(X){return!!X&&typeof X=="object"})(ge)&&M.call(ge)==h})(le))return x;if(ce(le)){var ae=typeof le.valueOf=="function"?le.valueOf():le;le=ce(ae)?ae+"":ae}if(typeof le!="string")return le===0?le:+le;le=le.replace(b,"");var pe=E.test(le);return pe||S.test(le)?j(le.slice(2),pe?2:8):y.test(le)?x:+le}d.exports=function(le,ae,pe){var ge=!0,X=!0;if(typeof le!="function")throw new TypeError(m);return ce(pe)&&(ge="leading"in pe?!!pe.leading:ge,X="trailing"in pe?!!pe.trailing:X),(function(W,I,je){var T,_,de,F,fe,A,H=0,J=!1,se=!1,ye=!0;if(typeof W!="function")throw new TypeError(m);function Se(lt){var kt=T,St=_;return T=_=void 0,H=lt,F=W.apply(St,kt)}function He(lt){var kt=lt-A;return A===void 0||kt>=I||kt<0||se&&lt-H>=de}function nt(){var lt=$();if(He(lt))return Je(lt);fe=setTimeout(nt,(function(kt){var St=I-(kt-A);return se?re(St,de-(kt-H)):St})(lt))}function Je(lt){return fe=void 0,ye&&T?Se(lt):(T=_=void 0,F)}function Dt(){var lt=$(),kt=He(lt);if(T=arguments,_=this,A=lt,kt){if(fe===void 0)return(function(St){return H=St,fe=setTimeout(nt,I),J?Se(St):F})(A);if(se)return fe=setTimeout(nt,I),Se(A)}return fe===void 0&&(fe=setTimeout(nt,I)),F}return I=te(I)||0,ce(je)&&(J=!!je.leading,de=(se="maxWait"in je)?V(te(je.maxWait)||0,I):de,ye="trailing"in je?!!je.trailing:ye),Dt.cancel=function(){fe!==void 0&&clearTimeout(fe),H=0,T=A=_=fe=void 0},Dt.flush=function(){return fe===void 0?F:Je($())},Dt})(le,ae,{leading:ge,maxWait:ae,trailing:X})}},703:(d,f,p)=>{var m=p(414);function x(){}function h(){}h.resetWarningCache=x,d.exports=function(){function b(S,j,C,z,R,M){if(M!==m){var V=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw V.name="Invariant Violation",V}}function y(){return b}b.isRequired=b;var E={array:b,bigint:b,bool:b,func:b,number:b,object:b,string:b,symbol:b,any:b,arrayOf:y,element:b,elementType:b,instanceOf:y,node:b,objectOf:y,oneOf:y,oneOfType:y,shape:y,exact:y,checkPropTypes:h,resetWarningCache:x};return E.PropTypes=E,E}},697:(d,f,p)=>{d.exports=p(703)()},414:d=>{d.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},s={};function l(d){var f=s[d];if(f!==void 0)return f.exports;var p=s[d]={exports:{}};return r[d](p,p.exports,l),p.exports}l.n=d=>{var f=d&&d.__esModule?()=>d.default:()=>d;return l.d(f,{a:f}),f},l.d=(d,f)=>{for(var p in f)l.o(f,p)&&!l.o(d,p)&&Object.defineProperty(d,p,{enumerable:!0,get:f[p]})},l.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}})(),l.o=(d,f)=>Object.prototype.hasOwnProperty.call(d,f),l.r=d=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})};var o={};(()=>{l.r(o),l.d(o,{LazyLoadComponent:()=>kt,LazyLoadImage:()=>Mt,trackWindowScroll:()=>F});const d=Ir();var f=l.n(d),p=l(697);function m(){return typeof window<"u"&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function x(ee){return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},x(ee)}function h(ee,L){var ne=Object.keys(ee);if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(ee);L&&(ie=ie.filter((function(ke){return Object.getOwnPropertyDescriptor(ee,ke).enumerable}))),ne.push.apply(ne,ie)}return ne}function b(ee,L,ne){return(L=E(L))in ee?Object.defineProperty(ee,L,{value:ne,enumerable:!0,configurable:!0,writable:!0}):ee[L]=ne,ee}function y(ee,L){for(var ne=0;ne<L.length;ne++){var ie=L[ne];ie.enumerable=ie.enumerable||!1,ie.configurable=!0,"value"in ie&&(ie.writable=!0),Object.defineProperty(ee,E(ie.key),ie)}}function E(ee){var L=(function(ne,ie){if(x(ne)!=="object"||ne===null)return ne;var ke=ne[Symbol.toPrimitive];if(ke!==void 0){var Re=ke.call(ne,"string");if(x(Re)!=="object")return Re;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(ne)})(ee);return x(L)==="symbol"?L:String(L)}function S(ee,L){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ne,ie){return ne.__proto__=ie,ne},S(ee,L)}function j(ee){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},j(ee)}var C=function(ee){ee.forEach((function(L){L.isIntersecting&&L.target.onVisible()}))},z={},R=(function(ee){(function(Q,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");Q.prototype=Object.create(P&&P.prototype,{constructor:{value:Q,writable:!0,configurable:!0}}),Object.defineProperty(Q,"prototype",{writable:!1}),P&&S(Q,P)})(Qe,ee);var L,ne,ie,ke,Re=(ie=Qe,ke=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var Q,P=j(ie);if(ke){var he=j(this).constructor;Q=Reflect.construct(P,arguments,he)}else Q=P.apply(this,arguments);return(function(me,ue){if(ue&&(x(ue)==="object"||typeof ue=="function"))return ue;if(ue!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(function(Me){if(Me===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Me})(me)})(this,Q)});function Qe(Q){var P;if((function(me,ue){if(!(me instanceof ue))throw new TypeError("Cannot call a class as a function")})(this,Qe),(P=Re.call(this,Q)).supportsObserver=!Q.scrollPosition&&Q.useIntersectionObserver&&m(),P.supportsObserver){var he=Q.threshold;P.observer=(function(me){return z[me]=z[me]||new IntersectionObserver(C,{rootMargin:me+"px"}),z[me]})(he)}return P}return L=Qe,ne=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.scrollPosition,P=this.placeholder.getBoundingClientRect(),he=this.placeholder.style,me=parseInt(he.getPropertyValue("margin-left"),10)||0,ue=parseInt(he.getPropertyValue("margin-top"),10)||0;return{bottom:Q.y+P.bottom+ue,left:Q.x+P.left+me,right:Q.x+P.right+me,top:Q.y+P.top+ue}}},{key:"isPlaceholderInViewport",value:function(){if(typeof window>"u"||!this.placeholder)return!1;var Q=this.props,P=Q.scrollPosition,he=Q.threshold,me=this.getPlaceholderBoundingBox(P),ue=P.y+window.innerHeight,Me=P.x,_e=P.x+window.innerWidth,$e=P.y;return $e-he<=me.bottom&&ue+he>=me.top&&Me-he<=me.right&&_e+he>=me.left}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var Q=this,P=this.props,he=P.className,me=P.height,ue=P.placeholder,Me=P.style,_e=P.width;if(ue&&typeof ue.type!="function")return f().cloneElement(ue,{ref:function(Fe){return Q.placeholder=Fe}});var $e=(function(Fe){for(var ot=1;ot<arguments.length;ot++){var et=arguments[ot]!=null?arguments[ot]:{};ot%2?h(Object(et),!0).forEach((function(it){b(Fe,it,et[it])})):Object.getOwnPropertyDescriptors?Object.defineProperties(Fe,Object.getOwnPropertyDescriptors(et)):h(Object(et)).forEach((function(it){Object.defineProperty(Fe,it,Object.getOwnPropertyDescriptor(et,it))}))}return Fe})({display:"inline-block"},Me);return _e!==void 0&&($e.width=_e),me!==void 0&&($e.height=me),f().createElement("span",{className:he,ref:function(Fe){return Q.placeholder=Fe},style:$e},ue)}}],ne&&y(L.prototype,ne),Object.defineProperty(L,"prototype",{writable:!1}),Qe})(f().Component);R.propTypes={onVisible:p.PropTypes.func.isRequired,className:p.PropTypes.string,height:p.PropTypes.oneOfType([p.PropTypes.number,p.PropTypes.string]),placeholder:p.PropTypes.element,threshold:p.PropTypes.number,useIntersectionObserver:p.PropTypes.bool,scrollPosition:p.PropTypes.shape({x:p.PropTypes.number.isRequired,y:p.PropTypes.number.isRequired}),width:p.PropTypes.oneOfType([p.PropTypes.number,p.PropTypes.string])},R.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const M=R;var V=l(296),re=l.n(V),$=l(96),ce=l.n($),te=function(ee){var L=getComputedStyle(ee,null);return L.getPropertyValue("overflow")+L.getPropertyValue("overflow-y")+L.getPropertyValue("overflow-x")};const le=function(ee){if(!(ee instanceof HTMLElement))return window;for(var L=ee;L&&L instanceof HTMLElement;){if(/(scroll|auto)/.test(te(L)))return L;L=L.parentNode}return window};function ae(ee){return ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},ae(ee)}var pe=["delayMethod","delayTime"];function ge(){return ge=Object.assign?Object.assign.bind():function(ee){for(var L=1;L<arguments.length;L++){var ne=arguments[L];for(var ie in ne)Object.prototype.hasOwnProperty.call(ne,ie)&&(ee[ie]=ne[ie])}return ee},ge.apply(this,arguments)}function X(ee,L){for(var ne=0;ne<L.length;ne++){var ie=L[ne];ie.enumerable=ie.enumerable||!1,ie.configurable=!0,"value"in ie&&(ie.writable=!0),Object.defineProperty(ee,(ke=(function(Re,Qe){if(ae(Re)!=="object"||Re===null)return Re;var Q=Re[Symbol.toPrimitive];if(Q!==void 0){var P=Q.call(Re,"string");if(ae(P)!=="object")return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Re)})(ie.key),ae(ke)==="symbol"?ke:String(ke)),ie)}var ke}function W(ee,L){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ne,ie){return ne.__proto__=ie,ne},W(ee,L)}function I(ee,L){if(L&&(ae(L)==="object"||typeof L=="function"))return L;if(L!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return je(ee)}function je(ee){if(ee===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return ee}function T(ee){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},T(ee)}var _=function(){return typeof window>"u"?0:window.scrollX||window.pageXOffset},de=function(){return typeof window>"u"?0:window.scrollY||window.pageYOffset};const F=function(ee){var L=(function(ne){(function(he,me){if(typeof me!="function"&&me!==null)throw new TypeError("Super expression must either be null or a function");he.prototype=Object.create(me&&me.prototype,{constructor:{value:he,writable:!0,configurable:!0}}),Object.defineProperty(he,"prototype",{writable:!1}),me&&W(he,me)})(P,ne);var ie,ke,Re,Qe,Q=(Re=P,Qe=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var he,me=T(Re);if(Qe){var ue=T(this).constructor;he=Reflect.construct(me,arguments,ue)}else he=me.apply(this,arguments);return I(this,he)});function P(he){var me;if((function(Me,_e){if(!(Me instanceof _e))throw new TypeError("Cannot call a class as a function")})(this,P),(me=Q.call(this,he)).useIntersectionObserver=he.useIntersectionObserver&&m(),me.useIntersectionObserver)return I(me);var ue=me.onChangeScroll.bind(je(me));return he.delayMethod==="debounce"?me.delayedScroll=re()(ue,he.delayTime):he.delayMethod==="throttle"&&(me.delayedScroll=ce()(ue,he.delayTime)),me.state={scrollPosition:{x:_(),y:de()}},me.baseComponentRef=f().createRef(),me}return ie=P,(ke=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){typeof window>"u"||this.useIntersectionObserver||le(this.baseComponentRef.current)!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement=le(this.baseComponentRef.current),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:_(),y:de()}})}},{key:"render",value:function(){var he=this.props,me=(he.delayMethod,he.delayTime,(function(Me,_e){if(Me==null)return{};var $e,Fe,ot=(function(it,ua){if(it==null)return{};var Kt,Zn,Ii={},In=Object.keys(it);for(Zn=0;Zn<In.length;Zn++)Kt=In[Zn],ua.indexOf(Kt)>=0||(Ii[Kt]=it[Kt]);return Ii})(Me,_e);if(Object.getOwnPropertySymbols){var et=Object.getOwnPropertySymbols(Me);for(Fe=0;Fe<et.length;Fe++)$e=et[Fe],_e.indexOf($e)>=0||Object.prototype.propertyIsEnumerable.call(Me,$e)&&(ot[$e]=Me[$e])}return ot})(he,pe)),ue=this.useIntersectionObserver?null:this.state.scrollPosition;return f().createElement(ee,ge({forwardRef:this.baseComponentRef,scrollPosition:ue},me))}}])&&X(ie.prototype,ke),Object.defineProperty(ie,"prototype",{writable:!1}),P})(f().Component);return L.propTypes={delayMethod:p.PropTypes.oneOf(["debounce","throttle"]),delayTime:p.PropTypes.number,useIntersectionObserver:p.PropTypes.bool},L.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},L};function fe(ee){return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},fe(ee)}function A(ee,L){for(var ne=0;ne<L.length;ne++){var ie=L[ne];ie.enumerable=ie.enumerable||!1,ie.configurable=!0,"value"in ie&&(ie.writable=!0),Object.defineProperty(ee,(ke=(function(Re,Qe){if(fe(Re)!=="object"||Re===null)return Re;var Q=Re[Symbol.toPrimitive];if(Q!==void 0){var P=Q.call(Re,"string");if(fe(P)!=="object")return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Re)})(ie.key),fe(ke)==="symbol"?ke:String(ke)),ie)}var ke}function H(ee,L){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ne,ie){return ne.__proto__=ie,ne},H(ee,L)}function J(ee){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},J(ee)}var se=(function(ee){(function(Q,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");Q.prototype=Object.create(P&&P.prototype,{constructor:{value:Q,writable:!0,configurable:!0}}),Object.defineProperty(Q,"prototype",{writable:!1}),P&&H(Q,P)})(Qe,ee);var L,ne,ie,ke,Re=(ie=Qe,ke=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var Q,P=J(ie);if(ke){var he=J(this).constructor;Q=Reflect.construct(P,arguments,he)}else Q=P.apply(this,arguments);return(function(me,ue){if(ue&&(fe(ue)==="object"||typeof ue=="function"))return ue;if(ue!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(function(Me){if(Me===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Me})(me)})(this,Q)});function Qe(Q){return(function(P,he){if(!(P instanceof he))throw new TypeError("Cannot call a class as a function")})(this,Qe),Re.call(this,Q)}return L=Qe,(ne=[{key:"render",value:function(){return f().createElement(M,this.props)}}])&&A(L.prototype,ne),Object.defineProperty(L,"prototype",{writable:!1}),Qe})(f().Component);const ye=F(se);function Se(ee){return Se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},Se(ee)}function He(ee,L){for(var ne=0;ne<L.length;ne++){var ie=L[ne];ie.enumerable=ie.enumerable||!1,ie.configurable=!0,"value"in ie&&(ie.writable=!0),Object.defineProperty(ee,(ke=(function(Re,Qe){if(Se(Re)!=="object"||Re===null)return Re;var Q=Re[Symbol.toPrimitive];if(Q!==void 0){var P=Q.call(Re,"string");if(Se(P)!=="object")return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Re)})(ie.key),Se(ke)==="symbol"?ke:String(ke)),ie)}var ke}function nt(ee,L){return nt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ne,ie){return ne.__proto__=ie,ne},nt(ee,L)}function Je(ee){if(ee===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return ee}function Dt(ee){return Dt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},Dt(ee)}var lt=(function(ee){(function(Q,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");Q.prototype=Object.create(P&&P.prototype,{constructor:{value:Q,writable:!0,configurable:!0}}),Object.defineProperty(Q,"prototype",{writable:!1}),P&&nt(Q,P)})(Qe,ee);var L,ne,ie,ke,Re=(ie=Qe,ke=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var Q,P=Dt(ie);if(ke){var he=Dt(this).constructor;Q=Reflect.construct(P,arguments,he)}else Q=P.apply(this,arguments);return(function(me,ue){if(ue&&(Se(ue)==="object"||typeof ue=="function"))return ue;if(ue!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Je(me)})(this,Q)});function Qe(Q){var P;(function(_e,$e){if(!(_e instanceof $e))throw new TypeError("Cannot call a class as a function")})(this,Qe),P=Re.call(this,Q);var he=Q.afterLoad,me=Q.beforeLoad,ue=Q.scrollPosition,Me=Q.visibleByDefault;return P.state={visible:Me},Me&&(me(),he()),P.onVisible=P.onVisible.bind(Je(P)),P.isScrollTracked=!!(ue&&Number.isFinite(ue.x)&&ue.x>=0&&Number.isFinite(ue.y)&&ue.y>=0),P}return L=Qe,(ne=[{key:"componentDidUpdate",value:function(Q,P){P.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var Q=this.props,P=Q.className,he=Q.delayMethod,me=Q.delayTime,ue=Q.height,Me=Q.placeholder,_e=Q.scrollPosition,$e=Q.style,Fe=Q.threshold,ot=Q.useIntersectionObserver,et=Q.width;return this.isScrollTracked||ot&&m()?f().createElement(M,{className:P,height:ue,onVisible:this.onVisible,placeholder:Me,scrollPosition:_e,style:$e,threshold:Fe,useIntersectionObserver:ot,width:et}):f().createElement(ye,{className:P,delayMethod:he,delayTime:me,height:ue,onVisible:this.onVisible,placeholder:Me,style:$e,threshold:Fe,width:et})}}])&&He(L.prototype,ne),Object.defineProperty(L,"prototype",{writable:!1}),Qe})(f().Component);lt.propTypes={afterLoad:p.PropTypes.func,beforeLoad:p.PropTypes.func,useIntersectionObserver:p.PropTypes.bool,visibleByDefault:p.PropTypes.bool},lt.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const kt=lt;function St(ee){return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},St(ee)}var Sa=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function Yn(ee,L){var ne=Object.keys(ee);if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(ee);L&&(ie=ie.filter((function(ke){return Object.getOwnPropertyDescriptor(ee,ke).enumerable}))),ne.push.apply(ne,ie)}return ne}function Fn(ee){for(var L=1;L<arguments.length;L++){var ne=arguments[L]!=null?arguments[L]:{};L%2?Yn(Object(ne),!0).forEach((function(ie){Hl(ee,ie,ne[ie])})):Object.getOwnPropertyDescriptors?Object.defineProperties(ee,Object.getOwnPropertyDescriptors(ne)):Yn(Object(ne)).forEach((function(ie){Object.defineProperty(ee,ie,Object.getOwnPropertyDescriptor(ne,ie))}))}return ee}function Hl(ee,L,ne){return(L=Kn(L))in ee?Object.defineProperty(ee,L,{value:ne,enumerable:!0,configurable:!0,writable:!0}):ee[L]=ne,ee}function bn(){return bn=Object.assign?Object.assign.bind():function(ee){for(var L=1;L<arguments.length;L++){var ne=arguments[L];for(var ie in ne)Object.prototype.hasOwnProperty.call(ne,ie)&&(ee[ie]=ne[ie])}return ee},bn.apply(this,arguments)}function Pi(ee,L){for(var ne=0;ne<L.length;ne++){var ie=L[ne];ie.enumerable=ie.enumerable||!1,ie.configurable=!0,"value"in ie&&(ie.writable=!0),Object.defineProperty(ee,Kn(ie.key),ie)}}function Kn(ee){var L=(function(ne,ie){if(St(ne)!=="object"||ne===null)return ne;var ke=ne[Symbol.toPrimitive];if(ke!==void 0){var Re=ke.call(ne,"string");if(St(Re)!=="object")return Re;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(ne)})(ee);return St(L)==="symbol"?L:String(L)}function yn(ee,L){return yn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ne,ie){return ne.__proto__=ie,ne},yn(ee,L)}function Pn(ee){return Pn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},Pn(ee)}var Zi=(function(ee){(function(Q,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function");Q.prototype=Object.create(P&&P.prototype,{constructor:{value:Q,writable:!0,configurable:!0}}),Object.defineProperty(Q,"prototype",{writable:!1}),P&&yn(Q,P)})(Qe,ee);var L,ne,ie,ke,Re=(ie=Qe,ke=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}})(),function(){var Q,P=Pn(ie);if(ke){var he=Pn(this).constructor;Q=Reflect.construct(P,arguments,he)}else Q=P.apply(this,arguments);return(function(me,ue){if(ue&&(St(ue)==="object"||typeof ue=="function"))return ue;if(ue!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(function(Me){if(Me===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Me})(me)})(this,Q)});function Qe(Q){var P;return(function(he,me){if(!(he instanceof me))throw new TypeError("Cannot call a class as a function")})(this,Qe),(P=Re.call(this,Q)).state={loaded:!1},P}return L=Qe,(ne=[{key:"onImageLoad",value:function(){var Q=this;return this.state.loaded?null:function(P){Q.props.onLoad(P),Q.props.afterLoad(),Q.setState({loaded:!0})}}},{key:"getImg",value:function(){var Q=this.props,P=(Q.afterLoad,Q.beforeLoad,Q.delayMethod,Q.delayTime,Q.effect,Q.placeholder,Q.placeholderSrc,Q.scrollPosition,Q.threshold,Q.useIntersectionObserver,Q.visibleByDefault,Q.wrapperClassName,Q.wrapperProps,(function(he,me){if(he==null)return{};var ue,Me,_e=(function(Fe,ot){if(Fe==null)return{};var et,it,ua={},Kt=Object.keys(Fe);for(it=0;it<Kt.length;it++)et=Kt[it],ot.indexOf(et)>=0||(ua[et]=Fe[et]);return ua})(he,me);if(Object.getOwnPropertySymbols){var $e=Object.getOwnPropertySymbols(he);for(Me=0;Me<$e.length;Me++)ue=$e[Me],me.indexOf(ue)>=0||Object.prototype.propertyIsEnumerable.call(he,ue)&&(_e[ue]=he[ue])}return _e})(Q,Sa));return f().createElement("img",bn({},P,{onLoad:this.onImageLoad()}))}},{key:"getLazyLoadImage",value:function(){var Q=this.props,P=Q.beforeLoad,he=Q.className,me=Q.delayMethod,ue=Q.delayTime,Me=Q.height,_e=Q.placeholder,$e=Q.scrollPosition,Fe=Q.style,ot=Q.threshold,et=Q.useIntersectionObserver,it=Q.visibleByDefault,ua=Q.width;return f().createElement(kt,{beforeLoad:P,className:he,delayMethod:me,delayTime:ue,height:Me,placeholder:_e,scrollPosition:$e,style:Fe,threshold:ot,useIntersectionObserver:et,visibleByDefault:it,width:ua},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(Q){var P=this.props,he=P.effect,me=P.height,ue=P.placeholderSrc,Me=P.width,_e=P.wrapperClassName,$e=P.wrapperProps,Fe=this.state.loaded,ot=Fe?" lazy-load-image-loaded":"",et=Fe||!ue?{}:{backgroundImage:"url(".concat(ue,")"),backgroundSize:"100% 100%"};return f().createElement("span",bn({className:_e+" lazy-load-image-background "+he+ot,style:Fn(Fn({},et),{},{color:"transparent",display:"inline-block",height:me,width:Me})},$e),Q)}},{key:"render",value:function(){var Q=this.props,P=Q.effect,he=Q.placeholderSrc,me=Q.visibleByDefault,ue=Q.wrapperClassName,Me=Q.wrapperProps,_e=this.getLazyLoadImage();return(P||he)&&!me||ue||Me?this.getWrappedLazyLoadImage(_e):_e}}])&&Pi(L.prototype,ne),Object.defineProperty(L,"prototype",{writable:!1}),Qe})(f().Component);Zi.propTypes={onLoad:p.PropTypes.func,afterLoad:p.PropTypes.func,beforeLoad:p.PropTypes.func,delayMethod:p.PropTypes.string,delayTime:p.PropTypes.number,effect:p.PropTypes.string,placeholderSrc:p.PropTypes.string,threshold:p.PropTypes.number,useIntersectionObserver:p.PropTypes.bool,visibleByDefault:p.PropTypes.bool,wrapperClassName:p.PropTypes.string,wrapperProps:p.PropTypes.object},Zi.defaultProps={onLoad:function(){},afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const Mt=Zi})(),dd.exports=o})()),dd.exports}var Qv=Gv();const ud=[{name:"Tapas",slug:"tapas",image:"https://media.bighaat.com/brands/tapasLogo.webp?w=1920&q=80"},{name:"Syngenta",slug:"syngenta",image:"https://media.bighaat.com/brands/syngentaLogo.webp?w=1920&q=80"},{name:"Indo American",slug:"indo-american",image:"https://media.bighaat.com/brands/dcm_shriram_logo.webp?w=1920&q=80"},{name:"Shriram",slug:"shriram",image:"https://media.bighaat.com/brands/seminisLogo.webp?w=1920&q=80"},{name:"Geolife",slug:"geolife",image:"https://media.bighaat.com/brands/namdhariSeedsLogo.webp?w=1920&q=80"},{name:"Bayer",slug:"bayer",image:"https://media.bighaat.com/brands/dhanukaLogo.webp?w=1920&q=80"},{name:"Seminis",slug:"seminis",image:"https://media.bighaat.com/brands/geolife-brand-logo.webp?w=1920&q=80"},{name:"Namdhari Seeds",slug:"namdhari",image:"https://media.bighaat.com/brands/excel%20industries.webp?w=1920&q=80"}],gx=()=>{const r=mt(),s=l=>{r(`/brand/${l}`)};return a.jsxs("div",{className:"brands-section",children:[a.jsxs("div",{className:"brands-header",children:[a.jsx("h2",{className:"brands-title",children:"Brands"}),a.jsx("a",{className:"brands-more-btn",onClick:()=>r("/brands"),children:"View All →"})]}),a.jsx("div",{className:"slider",children:a.jsx("div",{className:"slide-track",children:ud.concat(ud).map((l,o)=>a.jsx("div",{className:"brand-card",style:{"--i":o},onClick:()=>s(l.slug),children:a.jsx(Qv.LazyLoadImage,{src:l.image,alt:l.name,effect:"blur",draggable:"false"})},o))})}),a.jsx("style",{children:`
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
          width: calc(160px * ${ud.length*2});
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
      `})]})},Yv=()=>{const[r,s]=w.useState(""),[l,o]=w.useState("All");let d=Bv();return l!=="All"&&(d=d.filter(f=>f.category===l)),d=d.filter(f=>f.name.toLowerCase().includes(r.toLowerCase())),a.jsx(a.Fragment,{children:a.jsxs("div",{className:"offers-page",children:[a.jsx("h2",{className:"offers-page-title",children:"Today's Best Deals"}),a.jsxs("div",{className:"offers-filters",children:[a.jsx("input",{placeholder:"Search offers...",value:r,onChange:f=>s(f.target.value)}),a.jsxs("select",{value:l,onChange:f=>o(f.target.value),children:[a.jsx("option",{children:"All"}),a.jsx("option",{value:"seeds",children:"Seeds"}),a.jsx("option",{value:"fertilizers",children:"Fertilizers"}),a.jsx("option",{value:"machinery",children:"Machinery"})]})]}),a.jsx("div",{className:"offers-grid",children:d.map(f=>a.jsx(ux,{item:f},f.id))}),a.jsx("style",{children:`
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
      `})]})})};function Fv(){return a.jsx(Yv,{})}const es=()=>{const r=new Date().getFullYear();return a.jsxs("footer",{className:"agri-footer",children:[a.jsxs("div",{className:"footer-top",children:[a.jsxs("div",{className:"brand-block",children:[a.jsxs("div",{className:"brand-logo",children:["Agri",a.jsx("span",{children:"Tech"})]}),a.jsx("p",{className:"brand-tag",children:"Quality agri products at honest prices. Seeds, fertilizers, and machinery—delivered fast."}),a.jsxs("div",{className:"socials",children:[a.jsx("a",{"aria-label":"Facebook",href:"#",className:"social",children:a.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M22 12a10 10 0 1 0-11.563 9.874v-6.987H7.898V12h2.54V9.797c0-2.506 1.493-3.89 3.778-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.772-1.63 1.563V12h2.773l-.443 2.887h-2.33v6.987A10.002 10.002 0 0 0 22 12z"})})}),a.jsx("a",{"aria-label":"Instagram",href:"#",className:"social",children:a.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.997.24 2.69.512a5.4 5.4 0 0 1 1.95 1.268 5.4 5.4 0 0 1 1.268 1.95c.272.693.456 1.52.512 2.69.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.997-.512 2.69a5.4 5.4 0 0 1-1.268 1.95 5.4 5.4 0 0 1-1.95 1.268c-.693.272-1.52.456-2.69.512-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.997-.24-2.69-.512a5.4 5.4 0 0 1-1.95-1.268 5.4 5.4 0 0 1-1.268-1.95c-.272-.693-.456-1.52-.512-2.69C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.997.512-2.69a5.4 5.4 0 0 1 1.268-1.95 5.4 5.4 0 0 1 1.95-1.268c.693-.272 1.52-.456 2.69-.512C8.416 2.175 8.796 2.163 12 2.163zm0 1.8c-3.16 0-3.532.012-4.775.069-1.03.047-1.59.219-1.96.364-.493.191-.846.418-1.216.788s-.597.723-.788 1.216c-.145.37-.317.93-.364 1.96-.057 1.243-.069 1.615-.069 4.775s.012 3.532.069 4.775c.047 1.03.219 1.59.364 1.96.191.493.418.846.788 1.216s.723.597 1.216.788c.37.145.93.317 1.96.364 1.243.057 1.615.069 4.775.069s3.532-.012 4.775-.069c1.03-.047 1.59-.219 1.96-.364.493-.191.846-.418 1.216-.788s.597-.723.788-1.216c.145-.37.317-.93.364-1.96.057-1.243.069-1.615.069-4.775s-.012-3.532-.69-4.775c-.047-1.03-.219-1.59-.364-1.96a3.6 3.6 0 0 0-.788-1.216 3.6 3.6 0 0 0-1.216-.788c-.37-.145-.93-.317-1.96-.364-1.243-.057-1.615-.069-4.775-.069zm0 3.474a5.563 5.563 0 1 1 0 11.126 5.563 5.563 0 0 1 0-11.126zm0 1.8a3.763 3.763 0 1 0 0 7.526 3.763 3.763 0 0 0 0-7.526zm5.67-2.025a1.302 1.302 0 1 1 0 2.604 1.302 1.302 0 0 1 0-2.604z"})})}),a.jsx("a",{"aria-label":"Twitter",href:"#",className:"social",children:a.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M22.46 6c-.77.35-1.6.58-2.47.69a4.29 4.29 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.32 5.71 4.25 4.25 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.58 8.58 0 0 1 2 19.54a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.71 8.71 0 0 0 22.46 6z"})})})]})]}),a.jsxs("div",{className:"newsletter",children:[a.jsx("h4",{children:"Subscribe for best offers"}),a.jsx("p",{children:"Get updates on seeds, fertilizers & machinery deals."}),a.jsxs("form",{className:"news-form",onSubmit:s=>s.preventDefault(),children:[a.jsx("input",{type:"email",placeholder:"Enter your email",required:!0}),a.jsx("button",{type:"submit",children:"Subscribe"})]})]})]}),a.jsxs("div",{className:"footer-links",children:[a.jsxs("div",{className:"link-col",children:[a.jsx("h5",{children:"Shop"}),a.jsx(oe,{to:"/category/vegetable-seeds",children:"Seeds"}),a.jsx(oe,{to:"/category/fertilizers",children:"Fertilizers"}),a.jsx(oe,{to:"/category/farm-machinery",children:"Farm Machinery"}),a.jsx(oe,{to:"/offers-today",children:"Today’s Offers"})]}),a.jsxs("div",{className:"link-col",children:[a.jsx("h5",{children:"Help"}),a.jsx(oe,{to:"/help/faq",children:"FAQ"}),a.jsx(oe,{to:"/help/returns",children:"Returns & Refunds"}),a.jsx(oe,{to:"/help/shipping",children:"Shipping"}),a.jsx(oe,{to:"/contact",children:"Contact Us"})]}),a.jsxs("div",{className:"link-col",children:[a.jsx("h5",{children:"Company"}),a.jsx(oe,{to:"/about",children:"About Us"}),a.jsx(oe,{to:"/careers",children:"Careers"}),a.jsx(oe,{to:"/terms",children:"Terms of Use"}),a.jsx(oe,{to:"/privacy",children:"Privacy Policy"})]}),a.jsxs("div",{className:"link-col contact",children:[a.jsx("h5",{children:"Contact"}),a.jsx("p",{children:"📍 Hyderabad, India"}),a.jsx("p",{children:"✉️ support@agritech.com"}),a.jsx("p",{children:"📞 +91 98765 43210"}),a.jsx("p",{children:"Mon–Sat: 9:00 AM – 7:00 PM"})]}),a.jsxs("div",{className:"link-col",children:[a.jsx("h5",{children:"Login"}),a.jsx(oe,{to:"/login",children:"Login as User"}),a.jsx(oe,{to:"/admin-login",children:"Login as Admin"}),a.jsx(oe,{to:"/vendor-login",children:"Login as Vendor"})]})]}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("p",{children:["© ",r," AgriTech. All rights reserved."]}),a.jsxs("div",{className:"payments",children:[a.jsx("span",{className:"pill",children:"UPI"}),a.jsx("span",{className:"pill",children:"NetBanking"}),a.jsx("span",{className:"pill",children:"Cards"}),a.jsx("span",{className:"pill",children:"COD"})]})]}),a.jsx("style",{children:`
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
      `})]})},Kv=()=>{const[r,s]=w.useState(!0);return w.useEffect(()=>{const l=setInterval(()=>{s(o=>!o)},4e3);return()=>clearInterval(l)},[]),a.jsxs("div",{className:"trust-rotator-wrapper",children:[a.jsx("div",{className:`banner ${r?"visible":"hidden"}`,children:a.jsx(Vv,{})}),a.jsx("div",{className:`banner ${r?"hidden":"visible"}`,children:a.jsx(qv,{})}),a.jsx("style",{children:`
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
      `})]})},Pv=()=>a.jsxs("div",{children:[a.jsx(ax,{}),a.jsx(nx,{}),a.jsx(fx,{}),a.jsx(hx,{}),a.jsx(rx,{}),a.jsx(gx,{}),a.jsx(lx,{}),a.jsx(Kv,{}),a.jsx(cx,{}),a.jsx(mx,{}),a.jsx(es,{})]}),fd=()=>{const[r,s]=w.useState({name:"",email:"",phone:"",message:""}),l=d=>{s({...r,[d.target.name]:d.target.value})},o=d=>{d.preventDefault(),alert("Thank you! Your message has been submitted ✅"),s({name:"",email:"",phone:"",message:""})};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"contact-wrapper",children:[a.jsx("h1",{className:"contact-title",children:"Contact Us"}),a.jsx("p",{className:"contact-sub",children:"We are here to help and answer your questions"}),a.jsxs("div",{className:"contact-container",children:[a.jsxs("div",{className:"contact-info",children:[a.jsx("h2",{children:"Get in Touch"}),a.jsx("p",{children:"Feel free to reach out to us for support, product inquiries or partnership opportunities."}),a.jsxs("div",{className:"info-row",children:[a.jsx("strong",{children:"📍 Address:"}),a.jsx("span",{children:"Hyderabad, Telangana, India"})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("strong",{children:"📞 Phone:"}),a.jsx("span",{children:"+91 98765 43210"})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("strong",{children:"✉️ Email:"}),a.jsx("span",{children:"support@agritechfarm.com"})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("strong",{children:"🕒 Working Hours:"}),a.jsx("span",{children:"Mon - Sat : 9:00 AM - 7:00 PM"})]})]}),a.jsxs("form",{className:"contact-form",onSubmit:o,children:[a.jsx("input",{type:"text",name:"name",placeholder:"Your Name",value:r.name,onChange:l,required:!0}),a.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:r.email,onChange:l,required:!0}),a.jsx("input",{type:"tel",name:"phone",placeholder:"Phone Number",value:r.phone,onChange:l,required:!0}),a.jsx("textarea",{name:"message",placeholder:"Write your message...",rows:"5",value:r.message,onChange:l,required:!0}),a.jsx("button",{type:"submit",children:"Send Message"})]})]}),a.jsx("style",{children:`
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
      `})]}),a.jsx(es,{})]})},pd=()=>{const r=[{icon:"🚚",title:"Fast Delivery",desc:"Quick delivery to your doorstep"},{icon:"🛡️",title:"Trusted Quality",desc:"Verified & lab-tested products"},{icon:"💬",title:"24/7 Support",desc:"We are always here to help"},{icon:"💵",title:"Easy Returns",desc:"Hassle-free replacement guarantee"}];return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"services-wrapper",children:[a.jsx("div",{className:"services-container",children:r.map((s,l)=>a.jsxs("div",{className:"service-box",children:[a.jsx("div",{className:"service-icon",children:s.icon}),a.jsx("h3",{children:s.title}),a.jsx("p",{children:s.desc})]},l))}),a.jsx("style",{children:`
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
      `})]}),a.jsx(es,{})]})},hd=()=>{const r=[{name:"Ravi Kumar",role:"Founder & CEO",image:"https://i.postimg.cc/g2cwQwcS/avatar1.png"},{name:"Priya Sharma",role:"Agriculture Expert",image:"https://i.postimg.cc/mD4zGNyM/avatar2.png"},{name:"Arun Verma",role:"Supply Chain Manager",image:"https://i.postimg.cc/3xk6Gtxz/avatar3.png"},{name:"Sneha Patil",role:"Customer Success Lead",image:"https://i.postimg.cc/fRYp57QZ/avatar4.png"}];return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"about-wrap",children:[a.jsxs("div",{className:"about-header",children:[a.jsx("h1",{children:"About Us"}),a.jsx("p",{children:"Your trusted partner in modern agriculture"})]}),a.jsxs("div",{className:"about-content",children:[a.jsx("p",{children:"We are an AgriTech driven marketplace focused on providing farmers with the highest quality seeds, fertilizers, pesticides, tools and farming equipment at fair and transparent prices. Our goal is to empower farmers with reliable products, trusted guidance, and seamless last-mile delivery."}),a.jsx("p",{children:"Agriculture is the backbone of our nation — and we believe farmers deserve both respect and access to the best resources. We work with verified manufacturers, certified suppliers, agronomists, and high-trust distributors to ensure genuine, result-driven products reach you on time."})]}),a.jsxs("div",{className:"about-section",children:[a.jsx("h2",{children:"Our Mission"}),a.jsx("p",{children:"To make quality agri-products accessible, affordable, and reliable for every farmer — helping them increase productivity, crop yield, and profit margins."})]}),a.jsxs("div",{className:"about-section",children:[a.jsx("h2",{children:"What We Offer"}),a.jsxs("ul",{children:[a.jsx("li",{children:"✔ High-quality seeds and fertilizers"}),a.jsx("li",{children:"✔ Trusted and certified farming products"}),a.jsx("li",{children:"✔ Farm tools, machinery & accessories"}),a.jsx("li",{children:"✔ 24/7 customer support in your language"}),a.jsx("li",{children:"✔ Fast and secure delivery across regions"})]})]}),a.jsxs("div",{className:"about-section",children:[a.jsx("h2",{children:"Our Promise"}),a.jsx("p",{children:"Transparent pricing. Genuine brands. Expert support. Because farmers deserve the best — always."})]}),a.jsxs("div",{className:"about-section team-section",children:[a.jsx("h2",{children:"Meet Our Team"}),a.jsx("div",{className:"team-grid",children:r.map((s,l)=>a.jsxs("div",{className:"team-card",children:[a.jsx("img",{src:s.image,alt:s.name}),a.jsx("h3",{children:s.name}),a.jsx("p",{children:s.role})]},l))})]}),a.jsx("style",{children:`
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
      `})]}),a.jsx(es,{})]})};function Zv(){const r=mt();return a.jsxs("div",{className:"info-page",children:[a.jsx("img",{src:$g,className:"info-banner",alt:"Vegetable Seeds"}),a.jsxs("div",{className:"info-content",children:[a.jsx("h1",{children:"Premium Vegetable Seeds"}),a.jsx("p",{className:"tagline",children:"Grow more. Earn more. Trusted by thousands of farmers."}),a.jsx("h2",{children:"🌱 Why Choose Our Vegetable Seeds?"}),a.jsxs("ul",{children:[a.jsx("li",{children:"✔ 95%+ Lab-tested germination rate"}),a.jsx("li",{children:"✔ Resistant to common diseases & pests"}),a.jsx("li",{children:"✔ High-yield hybrid and desi varieties"}),a.jsx("li",{children:"✔ Suitable for all soil types of India"}),a.jsx("li",{children:"✔ Fast delivery across India"})]}),a.jsx("h2",{children:"🌾 What Makes Our Seeds Special?"}),a.jsx("p",{children:"We partner directly with certified agricultural research centers and top breeders. Every batch undergoes strict quality testing for:"}),a.jsxs("ul",{children:[a.jsx("li",{children:"🌡 Climate adaptability"}),a.jsx("li",{children:"🌿 Growth uniformity"}),a.jsx("li",{children:"🌻 Purity and moisture balance"}),a.jsx("li",{children:"📦 Vacuum-packed freshness"})]}),a.jsx("h2",{children:"🎯 Perfect For:"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Vegetable farmers"}),a.jsx("li",{children:"Polyhouse growers"}),a.jsx("li",{children:"Kitchen gardeners"}),a.jsx("li",{children:"Commercial farming"})]}),a.jsx("button",{className:"shop-btn",onClick:()=>r("/category/vegetable-seeds"),children:"Shop Vegetable Seeds"})]}),a.jsx("style",{children:`
        .info-page {
          width: 100%;
          max-width: 1100px;
          margin: auto;
          padding: 20px;
        }
        .info-banner {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 6px 20px rgba(0,0,0,.15);
        }
        .info-content { margin-top: 20px; }
        h1 { color: #14532d; font-size: 32px; margin-bottom: 10px; }
        h2 { margin-top: 20px; color: #166534; }
        .tagline { color: #475569; font-size: 18px; margin-bottom: 20px; }
        ul { margin-top: 10px; line-height: 1.8; }
        .shop-btn {
          margin-top: 20px;
          background: #15803d;
          color: white;
          padding: 12px 28px;
          border: none;
          font-size: 16px;
          border-radius: 8px;
          cursor: pointer;
        }
      `})]})}function Iv(){const r=mt();return a.jsxs("div",{className:"info-page",children:[a.jsx("img",{src:ex,className:"info-banner",alt:"Organic Fertilizers"}),a.jsxs("div",{className:"info-content",children:[a.jsx("h1",{children:"Organic Fertilizers"}),a.jsx("p",{className:"tagline",children:"Healthy soil, healthy crops, higher income."}),a.jsx("h2",{children:"🌿 Why Choose Our Fertilizers?"}),a.jsxs("ul",{children:[a.jsx("li",{children:"✔ 100% natural organic ingredients"}),a.jsx("li",{children:"✔ Improves soil structure & fertility"}),a.jsx("li",{children:"✔ Balanced NPK for healthy crop growth"}),a.jsx("li",{children:"✔ Safer alternative to chemical fertilizers"}),a.jsx("li",{children:"✔ Eco-friendly and long-lasting effect"})]}),a.jsx("h2",{children:"🧪 What Makes Our Fertilizers Special?"}),a.jsxs("ul",{children:[a.jsx("li",{children:"🌱 Rich in organic carbon"}),a.jsx("li",{children:"🌦 Suitable for all climates"}),a.jsx("li",{children:"🪴 Enhances microbial activity in soil"}),a.jsx("li",{children:"🔥 Boosts root strength and nutrient absorption"})]}),a.jsx("h2",{children:"🌾 Perfect For:"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Organic farming"}),a.jsx("li",{children:"Vegetable & fruit farming"}),a.jsx("li",{children:"Cereal & grain crops"}),a.jsx("li",{children:"Greenhouse and polyhouse farming"})]}),a.jsx("button",{className:"shop-btn",onClick:()=>r("/category/fertilizers"),children:"Shop Fertilizers"})]}),a.jsx("style",{children:`
        .info-page { width: 100%; max-width: 1100px; margin: auto; padding: 20px; }
        .info-banner { width: 100%; height: 300px; object-fit: cover; border-radius: 14px; }
        .info-content { margin-top: 20px; }
        h1 { color: #14532d; }
        .tagline { color: #475569; font-size: 18px; }
        ul { margin-top: 10px; line-height: 1.8; }
        .shop-btn {
          margin-top: 20px;
          background: #15803d;
          color: white;
          padding: 12px 28px;
          border-radius: 8px;
        }
      `})]})}function Xv(){const r=mt();return a.jsxs("div",{className:"info-page",children:[a.jsx("img",{src:tx,className:"info-banner",alt:"Farm Machinery"}),a.jsxs("div",{className:"info-content",children:[a.jsx("h1",{children:"Farm Machinery & Tools"}),a.jsx("p",{className:"tagline",children:"Modern tools for modern farming."}),a.jsx("h2",{children:"⚙️ Why Choose Our Machinery?"}),a.jsxs("ul",{children:[a.jsx("li",{children:"✔ Fuel-efficient and powerful"}),a.jsx("li",{children:"✔ Long-lasting durability"}),a.jsx("li",{children:"✔ Perfect for small and large farms"}),a.jsx("li",{children:"✔ Easy maintenance and spare parts support"}),a.jsx("li",{children:"✔ Trusted by 20,000+ farmers"})]}),a.jsx("h2",{children:"🔧 Features & Advantages"}),a.jsxs("ul",{children:[a.jsx("li",{children:"🚜 Advanced engineering design"}),a.jsx("li",{children:"🔩 Premium quality materials"}),a.jsx("li",{children:"🎯 High performance for tough conditions"}),a.jsx("li",{children:"⏳ Long operational life"})]}),a.jsx("h2",{children:"🌾 Suitable For:"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Ploughing & tilling"}),a.jsx("li",{children:"Harvesting"}),a.jsx("li",{children:"Soil preparation"}),a.jsx("li",{children:"Seed bed preparation"})]}),a.jsx("button",{className:"shop-btn",onClick:()=>r("/category/farm-machinery"),children:"Shop Machinery & Tools"})]}),a.jsx("style",{children:`
        .info-page { width: 100%; max-width: 1100px; margin: auto; padding: 20px; }
        .info-banner { width: 100%; height: 300px; object-fit: cover; border-radius: 14px; }
        h1 { color: #14532d; }
        .tagline { color: #475569; font-size: 18px; }
        ul { margin-top: 10px; line-height: 1.8; }
        .shop-btn {
          margin-top: 20px;
          background: #15803d;
          color: white;
          padding: 12px 28px;
          border-radius: 8px;
        }
      `})]})}function Jv(){return a.jsx(Rv,{})}function Hi(r,s){return sessionStorage.getItem("auth")==="true"?!0:(s&&sessionStorage.setItem("redirectTo",s),r("/login"),!1)}function Wv(){const{id:r}=Dd(),s=qn.find(W=>String(W.id)===String(r)),l=mt(),o="/mnt/data/c61b8eae-dfc2-4cca-a1e0-c301228d07ef.png";if(!s)return a.jsxs("div",{style:{textAlign:"center",padding:40},children:[a.jsx("h2",{children:"Product Not Found"}),a.jsx(oe,{to:"/",children:"Go Home"})]});const{name:d="Unnamed Product",brand:f="Unknown Brand",price:p=0,mrp:m=0,image:x,description:h="No description available.",sizes:b=["Single Pack"],highlights:y=[],benefits:E=[],specifications:S={},reviews:j=[],category:C="Seeds"}=s,[z,R]=w.useState(b[0]),[M,V]=w.useState(!1),[re,$]=w.useState(""),[ce,te]=w.useState(null),le=w.useMemo(()=>{if(!j.length)return{avg:4.6,count:108};const W=j.reduce((I,je)=>I+(je.rating||0),0)/j.length;return{avg:Math.round(W*10)/10,count:j.length}},[j]),ae=qn.filter(W=>W.id!==s.id).slice(0,6);function pe(){if(!/^\d{6}$/.test(re)){te({ok:!1,msg:"Enter valid 6-digit PIN"});return}const W=/^[1-9]/.test(re);te(W?{ok:!0,msg:"Delivery available (3–5 days)"}:{ok:!1,msg:"Delivery not available in this area"})}function ge(){const W=`/seeds/${r}`;Hi(l,W)&&alert(`Added ${d} (${z}) to cart`)}function X(){const W=`/seeds/${r}`,I={id:r,name:d,price:p,mrp:m,image:x};localStorage.setItem("buyNowItem",JSON.stringify(I)),sessionStorage.setItem("redirectToBuyNow","true"),Hi(l,W)&&l("/buy-now")}return a.jsxs("div",{className:"product-page-root",children:[a.jsxs("div",{className:"product-page",children:[a.jsxs("nav",{className:"breadcrumb",children:[a.jsx(oe,{to:"/",children:"Home"}),a.jsx("span",{children:"›"}),a.jsx(oe,{to:"/category/vegetable-seeds",children:"Seeds"}),a.jsx("span",{children:"›"}),a.jsx("span",{className:"current",children:d})]}),a.jsxs("div",{className:"product-grid",children:[a.jsxs("div",{className:`image-col ${M?"zoomed":""}`,onMouseEnter:()=>V(!0),onMouseLeave:()=>V(!1),children:[a.jsx("div",{className:"main-image",children:a.jsx("img",{src:x||o,alt:d,loading:"lazy"})}),a.jsxs("div",{className:"mini-row",children:[a.jsx("img",{className:"thumb",src:x||o,alt:""}),a.jsx("img",{className:"thumb",src:o,alt:""}),a.jsx("img",{className:"thumb",src:o,alt:""})]})]}),a.jsxs("div",{className:"info-col",children:[a.jsx("h1",{className:"title",children:d}),a.jsx("p",{className:"brand",children:f}),a.jsxs("div",{className:"rating",children:[a.jsxs("div",{className:"stars",children:["★".repeat(Math.round(le.avg)),"☆".repeat(5-Math.round(le.avg))]}),a.jsxs("div",{className:"rating-meta",children:[le.avg," • ",le.count," reviews"]})]}),a.jsxs("div",{className:"price-card",children:[a.jsxs("div",{className:"price-left",children:[a.jsxs("div",{className:"price-current",children:["₹",p]}),a.jsxs("div",{className:"price-mrp",children:["₹",m]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"save",children:["Save ₹",Math.max(0,m-p)]}),a.jsx("div",{className:"badge",children:"Best Seller"})]})]}),y.length>0&&a.jsxs("div",{className:"highlights",children:[a.jsx("h4",{children:"Key Highlights"}),a.jsx("ul",{children:y.map((W,I)=>a.jsx("li",{children:W},I))})]}),a.jsxs("div",{className:"variants",children:[a.jsx("h4",{children:"Choose Pack"}),a.jsx("div",{className:"variants-row",children:b.map(W=>a.jsx("button",{className:`variant ${z===W?"active":""}`,onClick:()=>R(W),children:W},W))})]}),a.jsxs("div",{className:"offers-delivery",children:[a.jsxs("div",{className:"offers",children:[a.jsx("strong",{children:"Offers"}),a.jsxs("ul",{children:[a.jsx("li",{children:"5% off on prepaid orders"}),a.jsx("li",{children:"Free delivery above ₹499"}),a.jsx("li",{children:"Cash on Delivery available"})]})]}),a.jsxs("div",{className:"delivery-check",children:[a.jsx("label",{children:"Check Delivery"}),a.jsxs("div",{className:"pin-row",children:[a.jsx("input",{value:re,onChange:W=>{$(W.target.value),te(null)},placeholder:"Enter PIN"}),a.jsx("button",{onClick:pe,children:"Check"})]}),ce&&a.jsx("div",{className:`pin-result ${ce.ok?"ok":"no"}`,children:ce.msg})]})]}),a.jsxs("div",{className:"cta-row",children:[a.jsx("button",{className:"buy",onClick:X,children:"Buy Now"}),a.jsx("button",{className:"cart",onClick:ge,children:"Add to Cart"})]}),a.jsxs("div",{className:"short-desc",children:[a.jsx("h4",{children:"About this Product"}),a.jsx("p",{children:h})]})]})]}),a.jsxs("div",{className:"lower",children:[a.jsxs("div",{className:"left-card",children:[a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Product Overview"}),a.jsxs("div",{className:"spec-grid",children:[a.jsx("div",{children:a.jsx("strong",{children:"Name"})}),a.jsx("div",{children:d}),a.jsx("div",{children:a.jsx("strong",{children:"Brand"})}),a.jsx("div",{children:f}),a.jsx("div",{children:a.jsx("strong",{children:"Category"})}),a.jsx("div",{children:C}),a.jsx("div",{children:a.jsx("strong",{children:"Pack Size"})}),a.jsx("div",{children:z})]})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Specifications"}),Object.keys(S).length>0?a.jsx("table",{className:"spec-table",children:a.jsx("tbody",{children:Object.entries(S).map(([W,I])=>a.jsxs("tr",{children:[a.jsx("td",{children:W}),a.jsx("td",{children:I})]},W))})}):a.jsx("p",{children:"No specifications provided."})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Usage Instructions"}),a.jsxs("ul",{className:"bullet-list",children:[a.jsx("li",{children:"Sow seeds at recommended depth for best germination."}),a.jsx("li",{children:"Use well-drained soil with proper moisture."}),a.jsx("li",{children:"Follow standard seed treatment if required."})]})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Sowing & Germination Guide"}),a.jsxs("ul",{className:"bullet-list",children:[a.jsx("li",{children:"Sowing depth: 1–2 cm"}),a.jsx("li",{children:"Ideal spacing: 30–45 cm"}),a.jsx("li",{children:"Germination time: 5–10 days"}),a.jsx("li",{children:"Maintain moderate irrigation"})]})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Crop Management / Care Tips"}),a.jsxs("ul",{className:"bullet-list",children:[a.jsx("li",{children:"Apply balanced NPK fertilizer for healthy growth."}),a.jsx("li",{children:"Avoid waterlogging and over-irrigation."}),a.jsx("li",{children:"Regularly monitor for pests / diseases."})]})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Storage & Safety Information"}),a.jsxs("ul",{className:"bullet-list",children:[a.jsx("li",{children:"Store seeds in cool, dry place away from sunlight."}),a.jsx("li",{children:"Keep out of reach of children & animals."}),a.jsx("li",{children:"Seal the packet tightly after each use."})]})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Disclaimer"}),a.jsx("p",{children:"Actual results may vary depending on soil, climate & cultivation practices. All information is provided for educational purposes."})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Frequently Asked Questions"}),a.jsxs("details",{children:[a.jsx("summary",{children:"What is the germination rate?"}),a.jsx("p",{children:"Typically 90–95% under ideal conditions."})]}),a.jsxs("details",{children:[a.jsx("summary",{children:"How long can the seeds be stored?"}),a.jsx("p",{children:"Up to 1–2 years if stored properly."})]}),a.jsxs("details",{children:[a.jsx("summary",{children:"Is this suitable for all soil types?"}),a.jsx("p",{children:"Works best in well-drained soils."})]})]})]}),a.jsxs("div",{className:"right-card",children:[a.jsxs("section",{className:"card reviews-card",children:[a.jsx("h3",{children:"Customer Reviews"}),a.jsxs("div",{className:"reviews-summary",children:[a.jsx("div",{className:"big-rating",children:le.avg}),a.jsxs("div",{className:"small",children:["Based on ",le.count," reviews"]})]}),a.jsx("div",{className:"reviews-list",children:(j.length?j:[{name:"Amit",rating:5,text:"Good germination, healthy seedlings!",date:"2025-07-10"},{name:"Priya",rating:4,text:"Quality seeds, happy with results.",date:"2025-07-16"}]).map((W,I)=>a.jsxs("div",{className:"review",children:[a.jsxs("div",{className:"r-top",children:[a.jsx("strong",{children:W.name}),a.jsxs("span",{className:"r-rating",children:["★".repeat(W.rating),"☆".repeat(5-W.rating)]})]}),a.jsx("div",{className:"r-text",children:W.text}),a.jsx("div",{className:"r-date",children:W.date})]},I))})]}),a.jsxs("section",{className:"card related-card",children:[a.jsx("h3",{children:"Related Products"}),a.jsx("div",{className:"related-grid",children:ae.map(W=>a.jsxs(oe,{to:`/seeds/${W.id}`,className:"related-item",children:[a.jsx("img",{src:W.image||o,alt:W.name}),a.jsx("div",{className:"r-name",children:W.name}),a.jsxs("div",{className:"r-price",children:["₹",W.price]})]},W.id))})]})]})]})]}),a.jsx("div",{className:"sticky",children:a.jsxs("div",{className:"sticky-inner",children:[a.jsxs("div",{className:"sticky-left",children:[a.jsxs("div",{className:"sticky-price",children:["₹",p]}),a.jsxs("div",{className:"sticky-save",children:["Save ₹",Math.max(0,m-p)]})]}),a.jsxs("div",{className:"sticky-ctas",children:[a.jsx("button",{className:"sticky-cart",onClick:ge,children:"Add"}),a.jsx("button",{className:"sticky-buy",onClick:X,children:"Buy"})]})]})}),a.jsx("style",{children:`
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
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          border: none;
          font-weight: 700;
          margin-left: 10px;
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
      `})]})}function _v(){const{id:r}=Dd(),s=Gn.find(I=>String(I.id)===String(r)),l=mt(),o="/mnt/data/c61b8eae-dfc2-4cca-a1e0-c301228d07ef.png";if(!s)return a.jsxs("div",{style:{textAlign:"center",padding:40},children:[a.jsx("h2",{children:"Product Not Found"}),a.jsx(oe,{to:"/",children:"Go Home"})]});const{name:d="Unnamed Fertilizer",brand:f="Unknown Brand",price:p=0,mrp:m=0,image:x,description:h="No description available.",sizes:b=["Single Pack"],highlights:y=[],benefits:E=[],specifications:S={},nutrientComposition:j={},application:C={},precautions:z=[],reviews:R=[],category:M="Fertilizers"}=s,[V,re]=w.useState(b[0]||"Single Pack"),[$,ce]=w.useState(""),[te,le]=w.useState(null),ae=w.useMemo(()=>{if(!R.length)return{avg:4.5,count:42};const I=R.reduce((je,T)=>je+(T.rating||0),0)/R.length;return{avg:Math.round(I*10)/10,count:R.length}},[R]),pe=Gn.filter(I=>I.id!==s.id).slice(0,6);function ge(){if(!/^\d{6}$/.test($)){le({ok:!1,msg:"Enter valid 6-digit PIN"});return}const I=/^[1-9]/.test($);le(I?{ok:!0,msg:"Delivery available (2–5 days)"}:{ok:!1,msg:"Delivery not available in this area"})}function X(){const I=`/fertilizers/${r}`;Hi(l,I)&&alert(`Added ${d} (${V}) to cart`)}function W(){const I=`/fertilizers/${r}`,je={id:r,name:d,price:p,mrp:m,image:x};localStorage.setItem("buyNowItem",JSON.stringify(je)),sessionStorage.setItem("redirectToBuyNow","true"),Hi(l,I)&&l("/buy-now")}return a.jsxs("div",{className:"fert-page-root",children:[a.jsxs("div",{className:"fert-page",children:[a.jsxs("nav",{className:"breadcrumb",children:[a.jsx(oe,{to:"/",children:"Home"}),a.jsx("span",{children:"›"}),a.jsx(oe,{to:"/category/fertilizers",children:"Fertilizers"}),a.jsx("span",{children:"›"}),a.jsx("span",{className:"current",children:d})]}),a.jsxs("div",{className:"product-grid",children:[a.jsxs("div",{className:"image-col",children:[a.jsx("div",{className:"main-image",children:a.jsx("img",{src:x||o,alt:d,loading:"lazy"})}),a.jsxs("div",{className:"mini-row",children:[a.jsx("img",{className:"thumb",src:x||o,alt:"thumb1"}),a.jsx("img",{className:"thumb",src:o,alt:"thumb2"}),a.jsx("img",{className:"thumb",src:o,alt:"thumb3"})]})]}),a.jsxs("div",{className:"info-col",children:[a.jsx("h1",{className:"title",children:d}),a.jsx("p",{className:"brand",children:f}),a.jsxs("div",{className:"rating",children:[a.jsxs("div",{className:"stars",children:["★".repeat(Math.round(ae.avg)),"☆".repeat(5-Math.round(ae.avg))]}),a.jsxs("div",{className:"rating-meta",children:[ae.avg," • ",ae.count," Reviews"]})]}),a.jsxs("div",{className:"price-card",children:[a.jsxs("div",{className:"price-left",children:[a.jsxs("div",{className:"price-current",children:["₹",p]}),a.jsxs("div",{className:"price-mrp",children:["₹",m]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"save",children:["Save ₹",Math.max(0,m-p)]}),a.jsx("div",{className:"badge",children:"Top Rated"})]})]}),y.length>0&&a.jsxs("div",{className:"highlights",children:[a.jsx("h4",{children:"Highlights"}),a.jsx("ul",{children:y.map((I,je)=>a.jsx("li",{children:I},je))})]}),a.jsxs("div",{className:"variants",children:[a.jsx("h4",{children:"Select Pack"}),a.jsx("div",{className:"variants-row",children:b.map(I=>a.jsx("button",{className:`variant ${V===I?"active":""}`,onClick:()=>re(I),children:I},I))})]}),a.jsxs("div",{className:"offers-delivery",children:[a.jsxs("div",{className:"offers",children:[a.jsx("strong",{children:"Offers"}),a.jsxs("ul",{children:[a.jsx("li",{children:"Special price on bulk orders"}),a.jsx("li",{children:"Free delivery above ₹999"}),a.jsx("li",{children:"Prepaid discounts available"})]})]}),a.jsxs("div",{className:"delivery-check",children:[a.jsx("label",{children:"Check Delivery"}),a.jsxs("div",{className:"pin-row",children:[a.jsx("input",{value:$,onChange:I=>{ce(I.target.value),le(null)},placeholder:"Enter 6 digit PIN"}),a.jsx("button",{onClick:ge,children:"Check"})]}),te&&a.jsx("div",{className:`pin-result ${te.ok?"ok":"no"}`,children:te.msg})]})]}),a.jsxs("div",{className:"cta-row",children:[a.jsx("button",{className:"buy",onClick:W,children:"Buy Now"}),a.jsx("button",{className:"cart",onClick:X,children:"Add to Cart"})]}),a.jsxs("div",{className:"short-desc",children:[a.jsx("h4",{children:"About this Product"}),a.jsx("p",{children:h})]})]})]}),a.jsxs("div",{className:"lower",children:[a.jsxs("div",{className:"left-card",children:[a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Product Overview"}),a.jsxs("div",{className:"spec-grid",children:[a.jsx("div",{children:a.jsx("strong",{children:"Name"})}),a.jsx("div",{children:d}),a.jsx("div",{children:a.jsx("strong",{children:"Brand"})}),a.jsx("div",{children:f}),a.jsx("div",{children:a.jsx("strong",{children:"Category"})}),a.jsx("div",{children:M}),a.jsx("div",{children:a.jsx("strong",{children:"Pack"})}),a.jsx("div",{children:V})]})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Specifications"}),Object.keys(S).length>0?a.jsx("table",{className:"spec-table",children:a.jsx("tbody",{children:Object.entries(S).map(([I,je])=>a.jsxs("tr",{children:[a.jsx("td",{children:I}),a.jsx("td",{children:je})]},I))})}):a.jsx("p",{children:"No specifications provided."})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Nutrient Composition"}),Object.keys(j).length>0?a.jsx("div",{className:"spec-grid",children:Object.entries(j).map(([I,je])=>a.jsxs(xn.Fragment,{children:[a.jsx("div",{children:a.jsx("strong",{children:I})}),a.jsx("div",{children:je})]},I))}):a.jsx("p",{children:"Composition details not provided."})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Application Guide"}),a.jsxs("ul",{className:"bullet-list",children:[a.jsxs("li",{children:[a.jsx("strong",{children:"Recommended Rate:"})," ",C.rate||"Refer label"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Method:"})," ",C.method||"Broadcast / Side dressing"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Timing:"})," ",C.timing||"As per crop requirement"]})]})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Crop Management & Tips"}),a.jsx("ul",{className:"bullet-list",children:E.length>0?E.map((I,je)=>a.jsx("li",{children:I},je)):a.jsxs(a.Fragment,{children:[a.jsx("li",{children:"Split application for better uptake."}),a.jsx("li",{children:"Apply with recommended irrigation scheduling."})]})})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Storage & Safety"}),a.jsxs("ul",{className:"bullet-list",children:[a.jsx("li",{children:"Store in a cool, dry place away from moisture."}),a.jsx("li",{children:"Use protective gloves while handling concentrated forms."}),z.map((I,je)=>a.jsx("li",{children:I},je))]})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Disclaimer"}),a.jsx("p",{children:"Field conditions, soil type and weather affect fertilizer performance. Use recommendations as guidance; test small area before wide application."})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Frequently Asked Questions"}),a.jsxs("details",{children:[a.jsx("summary",{children:"How often should I apply?"}),a.jsx("p",{children:"Depends on crop and soil test — typically split doses during the growing season."})]}),a.jsxs("details",{children:[a.jsx("summary",{children:"Can I mix this with other fertilizers?"}),a.jsx("p",{children:"Check compatibility; avoid mixing with strong alkaline products directly."})]}),a.jsxs("details",{children:[a.jsx("summary",{children:"Is there an expiry?"}),a.jsx("p",{children:"Most granular fertilizers are stable; check label for shelf life."})]})]})]}),a.jsxs("div",{className:"right-card",children:[a.jsxs("section",{className:"card reviews-card",children:[a.jsx("h3",{children:"Customer Reviews"}),a.jsxs("div",{className:"reviews-summary",children:[a.jsx("div",{className:"big-rating",children:ae.avg}),a.jsxs("div",{className:"small",children:["Based on ",ae.count," reviews"]})]}),a.jsx("div",{className:"reviews-list",children:(R.length?R:[{name:"Ravi",rating:5,text:"Excellent nutrient release",date:"2025-07-01"},{name:"Sunita",rating:4,text:"Good value for money",date:"2025-07-10"}]).map((I,je)=>a.jsxs("div",{className:"review",children:[a.jsxs("div",{className:"r-top",children:[a.jsx("strong",{children:I.name})," ",a.jsxs("span",{className:"r-rating",children:["★".repeat(I.rating),"☆".repeat(5-I.rating)]})]}),a.jsx("div",{className:"r-text",children:I.text}),a.jsx("div",{className:"r-date",children:I.date})]},je))})]}),a.jsxs("section",{className:"card related-card",children:[a.jsx("h3",{children:"Related Fertilizers"}),a.jsx("div",{className:"related-grid",children:pe.map(I=>a.jsxs(oe,{to:`/fertilizers/${I.id}`,className:"related-item",children:[a.jsx("img",{src:I.image||o,alt:I.name}),a.jsx("div",{className:"r-name",children:I.name}),a.jsxs("div",{className:"r-price",children:["₹",I.price]})]},I.id))})]})]})]})]}),a.jsx("div",{className:"sticky",children:a.jsxs("div",{className:"sticky-inner",children:[a.jsxs("div",{className:"sticky-left",children:[a.jsxs("div",{className:"sticky-price",children:["₹",p]}),a.jsxs("div",{className:"sticky-save",children:["Save ₹",Math.max(0,m-p)]})]}),a.jsxs("div",{className:"sticky-ctas",children:[a.jsx("button",{className:"sticky-cart",onClick:X,children:"Add"}),a.jsx("button",{className:"sticky-buy",onClick:W,children:"Buy"})]})]})}),a.jsx("style",{children:`
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
        .sticky-cart, .sticky-buy { padding:10px 14px; border-radius:8px; cursor:pointer; border:none; font-weight:700; margin-left:10px; }
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
      `})]})}function $v(){return a.jsx(_v,{})}const ej=()=>{const[r,s]=w.useState(""),l=Ui.filter(o=>o.name.toLowerCase().includes(r.toLowerCase()));return a.jsxs("div",{className:"mach-page",children:[a.jsxs("div",{className:"mach-header",children:[a.jsx("h2",{children:"Farm Machinery"}),a.jsx("p",{className:"mach-subtitle",children:"Explore high-quality tools & machinery for farming and agriculture."})]}),a.jsx("div",{className:"mach-search-box",children:a.jsx("input",{placeholder:"Search machinery (tractors, sprayers, tools...)",value:r,onChange:o=>s(o.target.value)})}),a.jsx("div",{className:"mach-grid",children:l.length>0?l.map(o=>a.jsx(ox,{item:o},o.id)):a.jsx("div",{className:"mach-no-results",children:"No machinery found."})}),a.jsx("style",{children:`
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
      `})]})};function tj(){return a.jsx(ej,{})}const aj=()=>{const[r,s]=w.useState(""),[l,o]=w.useState("All");let d=Lv();return l!=="All"&&(d=d.filter(f=>f.category===l)),d=d.filter(f=>f.name.toLowerCase().includes(r.toLowerCase())),a.jsxs("div",{className:"bs-page",children:[a.jsx("h2",{className:"bs-page-title",children:"Best Selling Products"}),a.jsxs("div",{className:"bs-filters",children:[a.jsx("input",{placeholder:"Search products...",value:r,onChange:f=>s(f.target.value)}),a.jsxs("select",{value:l,onChange:f=>o(f.target.value),children:[a.jsx("option",{children:"All"}),a.jsx("option",{value:"seeds",children:"Seeds"}),a.jsx("option",{value:"fertilizers",children:"Fertilizers"}),a.jsx("option",{value:"machinery",children:"Farm Machinery"})]})]}),a.jsx("div",{className:"bs-grid",children:d.map(f=>a.jsx(px,{item:f},f.id))}),a.jsx("style",{children:`
        .bs-page { max-width:1300px;margin:auto;padding:40px 20px; }
        .bs-page-title { text-align:center;font-size:28px;font-weight:700;color:#2a7a0e;margin-bottom:25px; }

        .bs-filters { display:flex;gap:12px;justify-content:center;margin-bottom:25px; }
        .bs-filters input,.bs-filters select {
          padding:10px 14px;border:1px solid #ccc;border-radius:6px;font-size:15px;
        }

        .bs-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px; }
      `})]})};function nj(){return a.jsx(aj,{})}let xx=[{firstName:"Raju",lastName:"Seeds",email:"vendor@gmail.com",password:"123",phoneNumber:"9876543210",businessName:"Raju Seeds Store",businessType:"Seed Supplier",address:"Guntur, Andhra Pradesh",city:"Guntur",state:"AP",pincode:"522001"}];const md=JSON.parse(localStorage.getItem("vendorDB"));md&&md.length>0&&(xx=md);const ij=(r,s)=>{const l=xx.find(o=>o.email===r&&o.password===s);if(!l)throw new Error("Invalid Email or Password");return sessionStorage.setItem("vendorSession",JSON.stringify(l)),l};let Vi=[{id:1,name:"Hybrid Tomato Seeds",category:"Seeds",price:150,stock:50,description:"High-yield hybrid tomato seeds ideal for warm climates.",image:"https://images.unsplash.com/photo-1603048297172-1d5a2608a2cc?auto=format&fit=crop&w=400&q=60"},{id:2,name:"Organic Fertilizer",category:"Fertilizers",price:350,stock:30,description:"Natural fertilizer with organic nutrients for soil enrichment.",image:"https://images.unsplash.com/photo-1590747854873-2c0e59c2a734?auto=format&fit=crop&w=400&q=60"},{id:3,name:"Power Sprayer",category:"Machinery",price:12e3,stock:10,description:"Durable sprayer suitable for all types of crops.",image:"https://images.unsplash.com/photo-1602526218600-8ef2e779a58c?auto=format&fit=crop&w=400&q=60"}];const gd=async()=>Promise.resolve(Vi),rj=async r=>{const s={id:Date.now(),...r};return Vi.push(s),Promise.resolve(s)},sj=async(r,s)=>(Vi=Vi.map(l=>l.id===r?{...l,...s}:l),Promise.resolve(s)),lj=async r=>(Vi=Vi.filter(s=>s.id!==r),Promise.resolve(!0)),oj=()=>{const[r,s]=w.useState(!0),[l,o]=w.useState(!1),[d,f]=w.useState(""),[p,m]=w.useState(""),[x,h]=w.useState(""),[b,y]=w.useState(!1),E=mt(),S=async j=>{j.preventDefault(),h(""),y(!0);try{const C=ij(d,p);alert(`Welcome ${C.firstName}!`),E("/vendor")}catch(C){h(C.message)}finally{y(!1)}};return a.jsxs(a.Fragment,{children:[a.jsx(qd,{}),a.jsx("div",{style:{paddingTop:"120px"},children:a.jsx("div",{className:"login-container",children:a.jsxs("div",{className:"login-card",children:[a.jsx("h2",{children:"Vendor Login"}),a.jsx("p",{children:"Manage your store, products & customers"}),a.jsxs("div",{className:"login-toggle",children:[a.jsx("button",{className:r?"active":"",onClick:()=>s(!0),children:"Email Login"}),a.jsx("button",{className:r?"":"active",onClick:()=>s(!1),children:"Phone Login"})]}),a.jsxs("form",{className:"login-form",onSubmit:S,children:[a.jsx("input",{type:r?"email":"tel",placeholder:r?"Enter your email":"Enter your phone number",value:d,onChange:j=>f(j.target.value),required:!0}),a.jsxs("div",{className:"password-field",children:[a.jsx("input",{type:l?"text":"password",placeholder:"Enter your password",value:p,onChange:j=>m(j.target.value),required:!0}),a.jsx("span",{className:"toggle-password",onClick:()=>o(!l),children:l?"Hide":"Show"})]}),x&&a.jsx("p",{className:"error-text",children:x}),a.jsx("button",{type:"submit",className:"login-btn",disabled:b,children:b?"Logging in...":"Login"})]}),a.jsx("div",{className:"divider",children:a.jsx("span",{children:"OR"})}),a.jsxs("div",{className:"sso-icons",children:[a.jsx("a",{className:"sso-btn google",children:a.jsx(Gd,{size:22})}),a.jsx("a",{className:"sso-btn github",children:a.jsx(Yd,{size:20})}),a.jsx("a",{className:"sso-btn facebook",children:a.jsx(Qd,{size:20})}),a.jsx("a",{className:"sso-btn linkedin",children:a.jsx(Fd,{size:20})})]}),a.jsxs("p",{className:"signup-text",children:["New Vendor? ",a.jsx(oe,{to:"/vendor-register",children:"Register Here"})]})]})})}),a.jsx("style",{children:`
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
      `})]})},cj=()=>{const r=mt(),[s,l]=w.useState(!1),[o,d]=w.useState({firstName:"",lastName:"",email:"",phoneNumber:"",password:"",businessName:"",businessType:"",gstNumber:"",address:"",city:"",state:"",pincode:""}),[f,p]=w.useState(null),[m,x]=w.useState(null),h=S=>{d({...o,[S.target.name]:S.target.value})},b=S=>{p(S.target.files[0])},y=S=>{x(S.target.files[0])},E=async S=>{S.preventDefault(),l(!0);const j=new FormData;Object.keys(o).forEach(C=>j.append(C,o[C])),f&&j.append("businessCertificate",f),m&&j.append("profileImage",m);try{const C=await registerVendor(j);alert("Vendor Registration Successful ✅ Please wait for approval."),r("/vendor-login")}catch(C){alert(C.message||"Registration failed")}finally{l(!1)}};return a.jsxs("div",{className:"reg-container",children:[a.jsxs("div",{className:"reg-card",children:[a.jsx("h2",{children:"Vendor Registration"}),a.jsx("p",{children:"Register your business and start selling on AgriTech"}),a.jsxs("form",{className:"reg-form",onSubmit:E,children:[a.jsxs("div",{className:"row",children:[a.jsx("input",{type:"text",name:"firstName",placeholder:"First Name",onChange:h,required:!0}),a.jsx("input",{type:"text",name:"lastName",placeholder:"Last Name",onChange:h,required:!0})]}),a.jsx("input",{type:"email",name:"email",placeholder:"Email",onChange:h,required:!0}),a.jsx("input",{type:"tel",name:"phoneNumber",placeholder:"Phone Number",onChange:h,required:!0}),a.jsx("input",{type:"password",name:"password",placeholder:"Password",onChange:h,required:!0}),a.jsx("input",{type:"text",name:"businessName",placeholder:"Business / Shop Name",onChange:h,required:!0}),a.jsxs("select",{name:"businessType",onChange:h,required:!0,children:[a.jsx("option",{value:"",children:"Select Business Type"}),a.jsx("option",{value:"Seed Supplier",children:"Seed Supplier"}),a.jsx("option",{value:"Farmer Producer Group",children:"Farmer Producer Group"}),a.jsx("option",{value:"Fertilizer Dealer",children:"Fertilizer Dealer"}),a.jsx("option",{value:"Machinery Supplier",children:"Machinery Supplier"})]}),a.jsx("input",{type:"text",name:"gstNumber",placeholder:"GST Number (Optional)",onChange:h}),a.jsx("textarea",{name:"address",placeholder:"Full Business Address",rows:"3",onChange:h,required:!0}),a.jsxs("div",{className:"row",children:[a.jsx("input",{type:"text",name:"city",placeholder:"City",onChange:h,required:!0}),a.jsx("input",{type:"text",name:"state",placeholder:"State",onChange:h,required:!0})]}),a.jsx("input",{type:"number",name:"pincode",placeholder:"Pincode",onChange:h,required:!0}),a.jsx("label",{children:"Upload Business Certificate (PDF/JPG/PNG)"}),a.jsx("input",{type:"file",onChange:b,required:!0}),a.jsx("label",{children:"Profile Image (Optional)"}),a.jsx("input",{type:"file",onChange:y}),a.jsx("button",{type:"submit",className:"reg-btn",disabled:s,children:s?"Registering...":"Register"})]})]}),a.jsx("style",{children:`
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
 */const dj=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),uj=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,l,o)=>o?o.toUpperCase():l.toLowerCase()),Hm=r=>{const s=uj(r);return s.charAt(0).toUpperCase()+s.slice(1)},bx=(...r)=>r.filter((s,l,o)=>!!s&&s.trim()!==""&&o.indexOf(s)===l).join(" ").trim(),fj=r=>{for(const s in r)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hj=w.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:d="",children:f,iconNode:p,...m},x)=>w.createElement("svg",{ref:x,...pj,width:s,height:s,stroke:r,strokeWidth:o?Number(l)*24/Number(s):l,className:bx("lucide",d),...!f&&!fj(m)&&{"aria-hidden":"true"},...m},[...p.map(([h,b])=>w.createElement(h,b)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=(r,s)=>{const l=w.forwardRef(({className:o,...d},f)=>w.createElement(hj,{ref:f,iconNode:s,className:bx(`lucide-${dj(Hm(r))}`,`lucide-${r}`,o),...d}));return l.displayName=Hm(r),l};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Vm=Ne("arrow-down",mj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],qm=Ne("arrow-up-down",gj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Gm=Ne("arrow-up",xj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bj=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Xd=Ne("bell",bj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yj=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],vj=Ne("bookmark",yj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],yx=Ne("chevron-left",jj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],vx=Ne("chevron-right",wj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aj=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Jd=Ne("circle-check-big",Aj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]],Nj=Ne("circle-pause",Sj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],jx=Ne("circle-plus",Ej);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Oj=Ne("circle-user-round",Cj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],kj=Ne("circle-user",zj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],wx=Ne("circle-x",Tj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rj=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Ax=Ne("clipboard-list",Rj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mj=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Bj=Ne("clock-4",Mj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dj=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Lj=Ne("clock",Dj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uj=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Hj=Ne("funnel",Uj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vj=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],qj=Ne("heart",Vj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Sx=Ne("info",Gj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qj=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Nx=Ne("layout-dashboard",Qj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yj=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Wd=Ne("log-out",Yj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fj=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ex=Ne("menu",Fj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kj=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Pj=Ne("message-circle",Kj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zj=[["path",{d:"M5 12h14",key:"1ays0h"}]],Ij=Ne("minus",Zj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xj=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Jj=Ne("moon",Xj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wj=[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]],Cx=Ne("package-check",Wj);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],_d=Ne("package",_j);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $j=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],ew=Ne("pen",$j);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],aw=Ne("phone-call",tw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Ox=Ne("phone",nw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],rw=Ne("plus",iw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],lw=Ne("save",sw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],cw=Ne("search",ow);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],zx=Ne("settings",dw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],fw=Ne("shopping-bag",uw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],hw=Ne("smartphone",pw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],kx=Ne("square-pen",mw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],xw=Ne("sun",gw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],$d=Ne("trash-2",bw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],eu=Ne("truck",yw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],jw=Ne("user-check",vw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m14.305 16.53.923-.382",key:"1itpsq"}],["path",{d:"m15.228 13.852-.923-.383",key:"eplpkm"}],["path",{d:"m16.852 12.228-.383-.923",key:"13v3q0"}],["path",{d:"m16.852 17.772-.383.924",key:"1i8mnm"}],["path",{d:"m19.148 12.228.383-.923",key:"1q8j1v"}],["path",{d:"m19.53 18.696-.382-.924",key:"vk1qj3"}],["path",{d:"m20.772 13.852.924-.383",key:"n880s0"}],["path",{d:"m20.772 16.148.924.383",key:"1g6xey"}],["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Aw=Ne("user-cog",ww);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],Nw=Ne("user-x",Sw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Tx=Ne("user",Ew);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ow=Ne("users",Cw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Rx=Ne("wrench",zw);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Tw=Ne("x",kw);function Rw(){return a.jsxs("header",{className:"vendor-navbar",children:[a.jsx("div",{className:"left",children:a.jsx("h2",{children:"🌿 Vendor Dashboard"})}),a.jsxs("div",{className:"right",children:[a.jsxs("button",{className:"add-btn",children:[a.jsx(jx,{size:18}),"Add Product"]}),a.jsxs("div",{className:"icon-badge",children:[a.jsx(Xd,{size:20}),a.jsx("span",{className:"badge",children:"3"})]}),a.jsxs("div",{className:"profile",children:[a.jsx(kj,{size:26}),"GreenGrow Traders"]})]}),a.jsx("style",{jsx:"true",children:`
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
      `})]})}function Mw(){const r=mt(),s=da(),[l,o]=w.useState(!1),[d,f]=w.useState(!0);w.useEffect(()=>{const h=window.matchMedia("(max-width: 992px)"),b=y=>{const E=y.matches;o(E),f(!E)};return b(h),h.addEventListener?.("change",b),h.addListener?.(b),()=>{h.removeEventListener?.("change",b),h.removeListener?.(b)}},[]),w.useEffect(()=>{l&&f(!1)},[s.pathname,l]);const p=()=>{sessionStorage.removeItem("vendorSession"),r("/vendor-login")},m=[{to:"/vendor/dashboard",icon:Nx,label:"Dashboard"},{to:"/vendor/products",icon:_d,label:"Products"},{to:"/vendor/orders",icon:Ax,label:"Orders"},{to:"/vendor/profile",icon:Tx,label:"Profile"},{to:"/vendor/settings",icon:zx,label:"Settings"}],x=[{to:"/vendor/about",icon:Sx,label:"About Us"},{to:"/vendor/services",icon:Rx,label:"Services"},{to:"/vendor/contact",icon:Ox,label:"Contact Us"}];return a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"hamburger",onClick:()=>f(h=>!h),"aria-label":d?"Close sidebar":"Open sidebar",children:d?a.jsx(Tw,{size:20}):a.jsx(Ex,{size:20})}),l&&d&&a.jsx("div",{className:"overlay",onClick:()=>f(!1)}),a.jsxs("aside",{className:`vendor-sidebar ${d?"open":"closed"}`,children:[a.jsxs("div",{className:"sidebar-header",children:[a.jsx("div",{className:"logo",children:"🌿"}),a.jsx("h2",{className:"title",children:"Vendor Panel"})]}),a.jsxs("nav",{className:"nav",children:[a.jsx("div",{className:"nav-group-title",children:"MAIN MENU"}),m.map(({to:h,icon:b,label:y})=>a.jsxs(wl,{to:h,onClick:()=>l&&f(!1),className:({isActive:E})=>`nav-item ${E?"active":""}`,children:[a.jsx(b,{size:18}),a.jsx("span",{children:y})]},h)),a.jsx("div",{className:"nav-group-title",style:{marginTop:"10px"},children:"MORE"}),x.map(({to:h,icon:b,label:y})=>a.jsxs(wl,{to:h,onClick:()=>l&&f(!1),className:({isActive:E})=>`nav-item ${E?"active":""}`,children:[a.jsx(b,{size:18}),a.jsx("span",{children:y})]},h))]}),a.jsx("div",{className:"bottom",children:a.jsxs("button",{className:"logout",onClick:p,children:[a.jsx(Wd,{size:16})," Logout"]})})]}),a.jsx("style",{jsx:"true",children:`
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
      `})]})}function Bw(){return a.jsxs("div",{className:"vendor-layout",children:[a.jsx("header",{className:"vendor-navbar",children:a.jsx(Rw,{})}),a.jsxs("div",{className:"vendor-body",children:[a.jsx("div",{className:"vendor-sidebar-wrapper",children:a.jsx(Mw,{})}),a.jsx("main",{className:"vendor-content",children:a.jsx(vg,{})})]}),a.jsx("style",{jsx:"true",children:`
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
      `})]})}const Dw=()=>{const r=[{label:"Mon",value:12},{label:"Tue",value:18},{label:"Wed",value:10},{label:"Thu",value:25},{label:"Fri",value:30},{label:"Sat",value:20},{label:"Sun",value:15}],s=[{name:"Organic Fertilizer",sales:240},{name:"Hybrid Tomato Seeds",sales:190},{name:"Power Sprayer",sales:160},{name:"Wheat Seeds",sales:120}];return a.jsxs("div",{className:"vendor-dashboard",children:[a.jsxs("section",{className:"header-section",children:[a.jsx("div",{className:"welcome",children:"Welcome, Raju 👋"}),a.jsx("h1",{className:"heading",children:"Vendor Overview"}),a.jsx("p",{className:"sub",children:"Your business performance insights this week."})]}),a.jsxs("section",{className:"stats",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"icon",children:"🌾"}),a.jsx("h4",{children:"Products"}),a.jsx("p",{children:"18"}),a.jsx("span",{className:"delta",children:"+5%"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"icon",children:"🛒"}),a.jsx("h4",{children:"Orders"}),a.jsx("p",{children:"45"}),a.jsx("span",{className:"delta",children:"+12%"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"icon",children:"💰"}),a.jsx("h4",{children:"Earnings"}),a.jsx("p",{children:"₹42,000"}),a.jsx("span",{className:"delta",children:"+8%"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"icon",children:"⭐"}),a.jsx("h4",{children:"Rating"}),a.jsx("p",{children:"4.6 / 5"}),a.jsx("span",{className:"delta",children:"+0.2"})]})]}),a.jsxs("section",{className:"cards",children:[a.jsxs("div",{className:"panel",children:[a.jsxs("div",{className:"panel-head",children:[a.jsx("h3",{children:"Weekly Sales"}),a.jsx("span",{className:"hint",children:"Last 7 days"})]}),a.jsx("div",{className:"bar-chart",children:r.map(l=>a.jsxs("div",{className:"bar-wrap",children:[a.jsx("div",{className:"bar",style:{height:`${l.value*6}px`},title:`${l.label}: ${l.value} orders`}),a.jsx("span",{className:"lbl",children:l.label})]},l.label))})]}),a.jsxs("div",{className:"panel",children:[a.jsxs("div",{className:"panel-head",children:[a.jsx("h3",{children:"Top Selling Products"}),a.jsx("span",{className:"hint",children:"Based on order volume"})]}),a.jsx("ul",{className:"list",children:s.map(l=>a.jsxs("li",{className:"li",children:[a.jsx("span",{children:l.name}),a.jsx("span",{className:"pill",children:l.sales})]},l.name))})]})]}),a.jsx("style",{jsx:"true",children:`
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
      `})]})};function Lw({products:r,onView:s,onEdit:l,onDelete:o}){return a.jsxs("section",{className:"product-grid",children:[r.length>0?r.map(d=>a.jsxs("div",{className:"product-card",children:[a.jsx("div",{className:"image-wrapper",onClick:()=>s(d),children:a.jsx("img",{src:d.image||"https://via.placeholder.com/400x300?text=No+Image",alt:d.name,className:"product-image"})}),a.jsxs("div",{className:"product-info",children:[a.jsx("h4",{onClick:()=>s(d),children:d.name}),a.jsx("p",{className:"category",children:d.category}),a.jsxs("div",{className:"meta",children:[a.jsxs("span",{className:"price",children:["₹",d.price]}),a.jsxs("span",{className:"stock",children:["Stock: ",d.stock]})]})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"edit-btn",onClick:()=>l(d),children:"✏️ Edit"}),a.jsx("button",{className:"delete-btn",onClick:()=>o(d.id),children:"🗑️ Delete"})]})]},d.id)):a.jsx("p",{className:"no-products",children:"No products to display."}),a.jsx("style",{jsx:"true",children:`
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
      `})]})}function Uw({product:r,onClose:s,onEdit:l,onDelete:o}){return r?a.jsx("div",{className:"overlay",children:a.jsxs("div",{className:"details-card",children:[a.jsx("div",{className:"image-section",children:a.jsx("img",{src:r.image||"https://via.placeholder.com/300",alt:r.name,className:"product-img"})}),a.jsxs("div",{className:"info-section",children:[a.jsx("h3",{children:r.name}),a.jsxs("p",{children:[a.jsx("strong",{children:"Category:"})," ",r.category]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Price:"})," ₹",r.price]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Stock:"})," ",r.stock]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Description:"})," ",r.description||"No description available."]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"edit",onClick:()=>l(r),children:"✏️ Edit"}),a.jsx("button",{className:"delete",onClick:()=>o(r.id),children:"🗑️ Delete"}),a.jsx("button",{className:"close",onClick:s,children:"❌ Close"})]})]}),a.jsx("style",{jsx:"true",children:`
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
        `})]})}):null}function Hw({formData:r,setFormData:s,onSubmit:l,onCancel:o,editMode:d}){const f=w.useRef(),p=m=>{const x=m.target.files[0];if(x){const h=new FileReader;h.onload=()=>s({...r,image:h.result}),h.readAsDataURL(x)}};return a.jsx("div",{className:"modal-overlay",children:a.jsxs("div",{className:"modal",children:[a.jsx("h3",{children:d?"Edit Product":"Add New Product"}),a.jsxs("form",{onSubmit:l,children:[a.jsx("input",{type:"text",placeholder:"Product Name",value:r.name,onChange:m=>s({...r,name:m.target.value}),required:!0}),a.jsx("input",{type:"text",placeholder:"Category",value:r.category,onChange:m=>s({...r,category:m.target.value}),required:!0}),a.jsx("input",{type:"number",placeholder:"Price (₹)",value:r.price,onChange:m=>s({...r,price:m.target.value}),required:!0}),a.jsx("input",{type:"number",placeholder:"Stock Quantity",value:r.stock,onChange:m=>s({...r,stock:m.target.value}),required:!0}),a.jsx("textarea",{placeholder:"Product Description",value:r.description,onChange:m=>s({...r,description:m.target.value})}),a.jsxs("div",{className:"upload-section",children:[a.jsx("label",{children:"Upload Product Image:"}),a.jsx("input",{type:"file",accept:"image/*",ref:f,onChange:p}),r.image&&a.jsx("img",{src:r.image,alt:"preview",className:"preview"})]}),a.jsxs("div",{className:"form-actions",children:[a.jsx("button",{type:"submit",children:d?"Update Product":"Add Product"}),a.jsx("button",{type:"button",onClick:o,children:"Cancel"})]})]}),a.jsx("style",{jsx:"true",children:`
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
        `})]})})}function Vw(){const[r,s]=w.useState([]),[l,o]=w.useState(null),[d,f]=w.useState(!1),[p,m]=w.useState(!1),[x,h]=w.useState({name:"",category:"",price:"",stock:"",description:"",image:""});w.useEffect(()=>{gd().then(s)},[]);const b=async C=>{C.preventDefault(),p&&l?await sj(l.id,x):await rj(x);const z=await gd();s(z),f(!1),m(!1),o(null),h({name:"",category:"",price:"",stock:"",description:"",image:""})},y=C=>{o(C),h(C),m(!0),f(!0)},E=C=>{o(C)},S=async C=>{if(window.confirm("Are you sure you want to delete this product?")){await lj(C);const z=await gd();s(z),o(null)}},j=()=>{h({name:"",category:"",price:"",stock:"",description:"",image:""}),m(!1),f(!0)};return a.jsxs("div",{className:"vendor-layout",children:[a.jsx("div",{className:"sidebar-area"}),a.jsxs("div",{className:"main-content",children:[a.jsxs("header",{className:"page-header",children:[a.jsx("h2",{children:"Vendor Product Management"}),a.jsx("p",{children:"Manage, edit, and track your listed products easily."}),a.jsx("button",{className:"add-btn",onClick:j,children:"➕ Add Product"})]}),a.jsx(Lw,{products:r,onView:E,onEdit:y,onDelete:S}),l&&!d&&a.jsx(Uw,{product:l,onClose:()=>o(null),onEdit:()=>y(l),onDelete:S}),d&&a.jsx(Hw,{formData:x,setFormData:h,onSubmit:b,onCancel:()=>f(!1),editMode:p})]}),a.jsx("style",{jsx:"true",children:`
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
      `})]})}function qw(){const[r,s]=w.useState(""),l=[{id:"ORD-1001",customer:"Rahul Sharma",amount:1899,status:"Pending",date:"2025-02-10"},{id:"ORD-1002",customer:"Priya Verma",amount:2999,status:"Shipped",date:"2025-02-09"},{id:"ORD-1003",customer:"Arun Kumar",amount:1199,status:"Delivered",date:"2025-02-08"},{id:"ORD-1004",customer:"Meghana Rao",amount:899,status:"Cancelled",date:"2025-02-07"},{id:"ORD-1005",customer:"Suresh R",amount:2499,status:"Delivered",date:"2025-02-06"}],o={Pending:"#eab308",Shipped:"#3b82f6",Delivered:"#16a34a",Cancelled:"#dc2626"};return a.jsxs("div",{className:"orders-page",children:[a.jsxs("div",{className:"header",children:[a.jsx("h1",{children:"📦 Orders"}),a.jsx("p",{children:"Manage your orders, view details, update statuses, and track progress."})]}),a.jsxs("div",{className:"actions",children:[a.jsxs("div",{className:"search-box",children:[a.jsx(cw,{size:18}),a.jsx("input",{type:"text",placeholder:"Search by Order ID or Customer Name...",value:r,onChange:d=>s(d.target.value)})]}),a.jsxs("button",{className:"filter-btn",children:[a.jsx(Hj,{size:18}),"Filter"]})]}),a.jsx("div",{className:"table-wrapper",children:a.jsxs("table",{className:"order-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Order ID"}),a.jsx("th",{children:"Customer"}),a.jsx("th",{children:"Amount"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Date"}),a.jsx("th",{children:"Action"})]})}),a.jsx("tbody",{children:l.filter(d=>d.id.toLowerCase().includes(r.toLowerCase())||d.customer.toLowerCase().includes(r.toLowerCase())).map(d=>a.jsxs("tr",{children:[a.jsx("td",{children:d.id}),a.jsx("td",{children:d.customer}),a.jsxs("td",{children:["₹",d.amount]}),a.jsx("td",{children:a.jsx("span",{className:"status",style:{background:o[d.status]+"22",color:o[d.status],border:`1px solid ${o[d.status]}55`},children:d.status})}),a.jsx("td",{children:d.date}),a.jsx("td",{children:a.jsx("button",{className:"view-btn",children:"View"})})]},d.id))})]})}),a.jsxs("div",{className:"pagination",children:[a.jsx("button",{className:"page-btn",children:a.jsx(yx,{size:18})}),a.jsx("span",{className:"page-number",children:"1"}),a.jsx("button",{className:"page-btn",children:a.jsx(vx,{size:18})})]}),a.jsx("style",{jsx:"true",children:`
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
      `})]})}function Gw(){const[r,s]=w.useState({name:"GreenGrow Traders",email:"vendor@grow.com",phone:"9876543210",shopName:"GreenGrow Organic Store",address:"Hyderabad, Telangana",gst:"22ABCDE1234F2Z5"}),[l,o]=w.useState(!1),[d,f]=w.useState(!1),[p,m]=w.useState(r),x=y=>{m({...p,[y.target.name]:y.target.value})},h=()=>{s(p),o(!1)},b=()=>{console.log("Vendor Account Deactivated!"),alert("Vendor account has been deactivated."),f(!1)};return a.jsxs("div",{className:"profile-page",children:[a.jsx("h1",{className:"title",children:"👤 Vendor Profile"}),a.jsx("p",{className:"subtitle",children:"View and manage your vendor profile information."}),a.jsxs("div",{className:"profile-card",children:[a.jsxs("div",{className:"avatar-section",children:[a.jsx("div",{className:"avatar",children:a.jsx("img",{src:"https://i.ibb.co/3kL4m7x/profile-avatar.png",alt:"Vendor Avatar"})}),a.jsx("h2",{children:r.name}),a.jsx("p",{className:"shop",children:r.shopName})]}),a.jsxs("div",{className:"details",children:[a.jsxs("div",{className:"info-row",children:[a.jsx("strong",{children:"Email:"}),a.jsx("span",{children:r.email})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("strong",{children:"Phone:"}),a.jsx("span",{children:r.phone})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("strong",{children:"Shop Name:"}),a.jsx("span",{children:r.shopName})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("strong",{children:"Address:"}),a.jsx("span",{children:r.address})]}),a.jsxs("div",{className:"info-row",children:[a.jsx("strong",{children:"GST Number:"}),a.jsx("span",{children:r.gst})]}),a.jsxs("div",{className:"actions",children:[a.jsxs("button",{className:"edit-btn",onClick:()=>o(!0),children:[a.jsx(ew,{size:16})," Edit Profile"]}),a.jsxs("button",{className:"deactivate-btn",onClick:()=>f(!0),children:[a.jsx(wx,{size:16})," Deactivate Account"]})]})]})]}),l&&a.jsx("div",{className:"modal-overlay",children:a.jsxs("div",{className:"modal",children:[a.jsx("h2",{children:"Edit Profile"}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Name"}),a.jsx("input",{name:"name",value:p.name,onChange:x})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Email"}),a.jsx("input",{name:"email",value:p.email,onChange:x})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Phone"}),a.jsx("input",{name:"phone",value:p.phone,onChange:x})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Shop Name"}),a.jsx("input",{name:"shopName",value:p.shopName,onChange:x})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Address"}),a.jsx("textarea",{name:"address",value:p.address,onChange:x,rows:"2"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"GST Number"}),a.jsx("input",{name:"gst",value:p.gst,onChange:x})]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"save-btn",onClick:h,children:"Save Changes"}),a.jsx("button",{className:"cancel-btn",onClick:()=>o(!1),children:"Cancel"})]})]})}),d&&a.jsx("div",{className:"modal-overlay",children:a.jsxs("div",{className:"modal small",children:[a.jsx("h3",{children:"Are you sure?"}),a.jsx("p",{children:"This action will permanently deactivate your vendor account."}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"danger-btn",onClick:b,children:"Yes, Deactivate"}),a.jsx("button",{className:"cancel-btn",onClick:()=>f(!1),children:"Cancel"})]})]})}),a.jsx("style",{jsx:"true",children:`
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
      `})]})}function Qm(){const[r,s]=w.useState({businessName:"GreenGrow Traders",email:"vendor@grow.com",phone:"9876543210"}),[l,o]=w.useState({currentPwd:"",newPwd:"",confirmPwd:""}),[d,f]=w.useState({email:!0,sms:!1}),[p,m]=w.useState(!1),[x,h]=w.useState(!1);function b(z){s(R=>({...R,[z.target.name]:z.target.value}))}function y(z){o(R=>({...R,[z.target.name]:z.target.value}))}function E(z){f(R=>({...R,[z]:!R[z]}))}function S(){h(!0),setTimeout(()=>{h(!1),alert("Account settings saved.")},700)}function j(){if(!l.currentPwd||!l.newPwd){alert("Please fill required password fields.");return}if(l.newPwd!==l.confirmPwd){alert("New password and confirm password do not match.");return}h(!0),setTimeout(()=>{h(!1),o({currentPwd:"",newPwd:"",confirmPwd:""}),alert("Password updated successfully.")},900)}function C(){h(!0),setTimeout(()=>{h(!1),alert("Preferences saved.")},600)}return a.jsxs("div",{className:"settings-page",children:[a.jsxs("header",{className:"header",children:[a.jsx("h1",{children:"⚙️ Settings"}),a.jsx("p",{children:"Manage account, security and notifications for your vendor account."})]}),a.jsxs("div",{className:"grid",children:[a.jsxs("section",{className:"card",children:[a.jsx("h2",{children:"Account"}),a.jsx("p",{className:"muted",children:"Basic business contact information."}),a.jsxs("div",{className:"form",children:[a.jsxs("label",{children:["Business Name",a.jsx("input",{name:"businessName",value:r.businessName,onChange:b})]}),a.jsxs("label",{children:["Email",a.jsx("input",{name:"email",value:r.email,onChange:b})]}),a.jsxs("label",{children:["Phone",a.jsx("input",{name:"phone",value:r.phone,onChange:b})]}),a.jsx("div",{className:"row",children:a.jsxs("button",{className:"btn primary",onClick:S,disabled:x,children:[a.jsx(lw,{size:14})," ",x?"Saving...":"Save Account"]})})]})]}),a.jsxs("section",{className:"card",children:[a.jsx("h2",{children:"Security"}),a.jsx("p",{className:"muted",children:"Change your password to keep your account secure."}),a.jsxs("div",{className:"form",children:[a.jsxs("label",{children:["Current Password",a.jsx("input",{name:"currentPwd",type:"password",value:l.currentPwd,onChange:y})]}),a.jsxs("label",{children:["New Password",a.jsx("input",{name:"newPwd",type:"password",value:l.newPwd,onChange:y})]}),a.jsxs("label",{children:["Confirm New Password",a.jsx("input",{name:"confirmPwd",type:"password",value:l.confirmPwd,onChange:y})]}),a.jsx("div",{className:"row",children:a.jsx("button",{className:"btn danger",onClick:j,children:"Change Password"})})]})]}),a.jsxs("section",{className:"card",children:[a.jsx("h2",{children:"Notifications & Preferences"}),a.jsx("p",{className:"muted",children:"Control how you receive notifications and app preferences."}),a.jsxs("div",{className:"form",children:[a.jsxs("div",{className:"toggle-row",children:[a.jsxs("div",{className:"label",children:[a.jsx(Xd,{})," Email Notifications"]}),a.jsxs("label",{className:"switch",children:[a.jsx("input",{type:"checkbox",checked:d.email,onChange:()=>E("email")}),a.jsx("span",{className:"slider"})]})]}),a.jsxs("div",{className:"toggle-row",children:[a.jsxs("div",{className:"label",children:[a.jsx(hw,{})," SMS Notifications"]}),a.jsxs("label",{className:"switch",children:[a.jsx("input",{type:"checkbox",checked:d.sms,onChange:()=>E("sms")}),a.jsx("span",{className:"slider"})]})]}),a.jsxs("div",{className:"toggle-row",children:[a.jsx("div",{className:"label",children:"Theme"}),a.jsxs("button",{className:"theme-toggle",onClick:()=>m(z=>!z),children:[p?a.jsx(Jj,{}):a.jsx(xw,{})," ",p?"Dark":"Light"]})]}),a.jsx("div",{className:"row",children:a.jsx("button",{className:"btn",onClick:C,children:"Save Preferences"})})]})]})]}),a.jsx("style",{jsx:"true",children:`
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
      `})]})}const Qw=[{email:"admin@gmail.com",phone:"1234567890",password:"123",firstName:"Super"}],Yw=(r,s)=>{const l=Qw.find(o=>(o.email===r||o.phone===r)&&o.password===s);if(!l)throw new Error("Invalid admin credentials.");return l},Fw=()=>{const[r,s]=w.useState(!0),[l,o]=w.useState(!1),[d,f]=w.useState(""),[p,m]=w.useState(""),[x,h]=w.useState(""),[b,y]=w.useState(!1),E=mt(),S=async j=>{j.preventDefault(),h(""),y(!0);try{const C=Yw(d,p);alert(`Welcome Admin ${C.firstName}!`),E("/admin")}catch(C){h(C.message)}finally{y(!1)}};return a.jsxs(a.Fragment,{children:[a.jsx(qd,{}),a.jsx("div",{style:{paddingTop:"120px"},children:a.jsxs("div",{className:"login-container",children:[a.jsxs("div",{className:"login-card",children:[a.jsx("h2",{children:"Admin Login"}),a.jsx("p",{children:"Access admin control panel & manage the system"}),a.jsxs("div",{className:"login-toggle",children:[a.jsx("button",{className:r?"active":"",onClick:()=>s(!0),children:"Email Login"}),a.jsx("button",{className:r?"":"active",onClick:()=>s(!1),children:"Phone Login"})]}),a.jsxs("form",{className:"login-form",onSubmit:S,children:[a.jsx("input",{type:r?"email":"tel",placeholder:r?"Enter admin email":"Enter admin phone",value:d,onChange:j=>f(j.target.value),required:!0}),a.jsxs("div",{className:"password-field",children:[a.jsx("input",{type:l?"text":"password",placeholder:"Enter admin password",value:p,onChange:j=>m(j.target.value),required:!0}),a.jsx("span",{className:"toggle-password",onClick:()=>o(!l),children:l?"Hide":"Show"})]}),x&&a.jsx("p",{className:"error-text",children:x}),a.jsx("button",{type:"submit",className:"login-btn",disabled:b,children:b?"Logging in...":"Login"})]}),a.jsx("div",{className:"divider",children:a.jsx("span",{children:"OR"})}),a.jsxs("div",{className:"sso-icons",children:[a.jsx("a",{className:"sso-btn google",children:a.jsx(Gd,{size:22})}),a.jsx("a",{className:"sso-btn github",children:a.jsx(Yd,{size:20})}),a.jsx("a",{className:"sso-btn facebook",children:a.jsx(Qd,{size:20})}),a.jsx("a",{className:"sso-btn linkedin",children:a.jsx(Fd,{size:20})})]}),a.jsxs("p",{className:"signup-text",children:["Need an Admin Account? ",a.jsx(oe,{to:"/admin-register",children:"Create One"})]})]}),a.jsx("style",{children:`
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
          `})]})})]})};function Kw({setSidebarOpen:r}){return a.jsxs("header",{className:"admin-navbar-inner",children:[a.jsxs("div",{className:"nav-left",children:[a.jsx("button",{className:"menu-btn",onClick:()=>r(o=>!o),children:a.jsx(Ex,{size:22})}),a.jsx("h2",{children:"🛡️ Admin Dashboard"})]}),a.jsxs("div",{className:"nav-right",children:[a.jsxs("div",{className:"icon-btn",children:[a.jsx(Xd,{size:20}),a.jsx("span",{className:"badge",children:5})]}),a.jsxs("div",{className:"admin-profile",children:[a.jsx(Oj,{size:28}),a.jsx("span",{className:"name",children:"Administrator"})]}),a.jsxs("button",{className:"logout-btn",children:[a.jsx(Wd,{size:18})," Logout"]})]}),a.jsx("style",{jsx:"true",children:`
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
      `})]})}function Pw(){const r=mt(),s=()=>{localStorage.removeItem("adminToken"),r("/admin-login")};return a.jsxs("div",{className:"admin-sidebar",children:[a.jsx("div",{className:"sidebar-header",children:a.jsx("h2",{children:"Admin Panel"})}),a.jsx("div",{className:"menu-section-title",children:"MAIN MENU"}),a.jsxs("nav",{className:"menu-list",children:[a.jsx(Ya,{to:"/admin/dashboard",icon:a.jsx(Nx,{size:18}),label:"Dashboard"}),a.jsx(Ya,{to:"/admin/users",icon:a.jsx(Ow,{size:18}),label:"Users"}),a.jsx(Ya,{to:"/admin/vendors",icon:a.jsx(Aw,{size:18}),label:"Vendors"}),a.jsx(Ya,{to:"/admin/products",icon:a.jsx(_d,{size:18}),label:"Products"}),a.jsx(Ya,{to:"/admin/orders",icon:a.jsx(Ax,{size:18}),label:"Orders"}),a.jsx(Ya,{to:"/admin/settings",icon:a.jsx(zx,{size:18}),label:"Settings"}),a.jsx(Ya,{to:"/admin/services",icon:a.jsx(Rx,{size:18}),label:"Services"})]}),a.jsx("div",{className:"menu-section-title",style:{marginTop:"20px"},children:"MORE"}),a.jsxs("nav",{className:"menu-list",children:[a.jsx(Ya,{to:"/admin/about",icon:a.jsx(Sx,{size:18}),label:"About Us"}),a.jsx(Ya,{to:"/admin/support",icon:a.jsx(aw,{size:18}),label:"Support"})]}),a.jsx("div",{className:"logout-container",children:a.jsxs("button",{className:"logout-btn",onClick:s,children:[a.jsx(Wd,{size:18})," Logout"]})}),a.jsx("style",{jsx:"true",children:`
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
      `})]})}function Ya({to:r,icon:s,label:l}){return a.jsxs(wl,{to:r,className:({isActive:o})=>o?"menu-item active":"menu-item",children:[s,a.jsx("span",{children:l})]})}function Zw(){const[r,s]=w.useState(!0);return a.jsxs("div",{className:"admin-layout",children:[a.jsx("header",{className:"admin-navbar",children:a.jsx(Kw,{setSidebarOpen:s})}),a.jsxs("div",{className:"admin-body",children:[a.jsx("aside",{className:`admin-sidebar-container ${r?"open":"closed"}`,children:a.jsx(Pw,{})}),a.jsx("main",{className:`admin-content ${r?"with-sidebar":"full-width"}`,children:a.jsx(vg,{})})]}),a.jsx("style",{jsx:"true",children:`
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
      `})]})}function Iw(){return a.jsxs("div",{className:"admin-dashboard",children:[a.jsx("h1",{className:"dashboard-title",children:"Dashboard"}),a.jsxs("div",{className:"cards-container",children:[a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-title",children:"Total Users"}),a.jsx("div",{className:"card-value",children:"120"})]}),a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-title",children:"Total Vendors"}),a.jsx("div",{className:"card-value",children:"45"})]}),a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-title",children:"Total Orders"}),a.jsx("div",{className:"card-value",children:"540"})]}),a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-title",children:"Active Users"}),a.jsx("div",{className:"card-value",children:"67"})]})]}),a.jsx("style",{children:`
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
      `})]})}function Xw(){const[r,s]=w.useState([{id:1,name:"Ravi Kumar",email:"ravi@example.com",role:"Customer",status:"Active"},{id:2,name:"Meena Sharma",email:"meena@example.com",role:"Vendor",status:"Blocked"},{id:3,name:"Venu Gopal",email:"venu@example.com",role:"Customer",status:"Active"}]),[l,o]=w.useState(null),[d,f]=w.useState({name:"",email:"",role:""}),p=S=>{o(S),f({name:S.name,email:S.email,role:S.role})},m=()=>{s(S=>S.map(j=>j.id===l.id?{...j,...d}:j)),o(null)},x=S=>{window.confirm("Are you sure want to delete this user?")&&s(j=>j.filter(C=>C.id!==S))},h=S=>{s(j=>j.map(C=>C.id===S?{...C,status:C.status==="Active"?"Blocked":"Active"}:C))},b=r.length,y=r.filter(S=>S.status==="Active").length,E=r.filter(S=>S.status==="Blocked").length;return a.jsxs("div",{className:"users-page",children:[a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("h3",{children:"Total Users"}),a.jsx("p",{children:b})]}),a.jsxs("div",{className:"stat-card active-card",children:[a.jsx("h3",{children:"Active Users"}),a.jsx("p",{children:y})]}),a.jsxs("div",{className:"stat-card blocked-card",children:[a.jsx("h3",{children:"Blocked Users"}),a.jsx("p",{children:E})]})]}),a.jsxs("div",{className:"table-container",children:[a.jsx("h2",{children:"User Management"}),a.jsx("div",{className:"table-wrapper",children:a.jsxs("table",{className:"user-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#ID"}),a.jsx("th",{children:"Name"}),a.jsx("th",{children:"Email"}),a.jsx("th",{children:"Role"}),a.jsx("th",{children:"Status"}),a.jsx("th",{style:{textAlign:"center"},children:"Actions"})]})}),a.jsx("tbody",{children:r.map(S=>a.jsxs("tr",{children:[a.jsx("td",{children:S.id}),a.jsx("td",{children:S.name}),a.jsx("td",{children:S.email}),a.jsx("td",{children:S.role}),a.jsx("td",{children:a.jsx("span",{className:`status-badge ${S.status.toLowerCase()}`,children:S.status})}),a.jsxs("td",{className:"action-btns",children:[a.jsx("button",{className:"edit-btn",onClick:()=>p(S),children:a.jsx(kx,{size:18})}),a.jsx("button",{className:"status-btn",onClick:()=>h(S.id),children:S.status==="Active"?a.jsx(Nw,{size:18}):a.jsx(jw,{size:18})}),a.jsx("button",{className:"delete-btn",onClick:()=>x(S.id),children:a.jsx($d,{size:18})})]})]},S.id))})]})})]}),l&&a.jsx("div",{className:"modal-overlay",children:a.jsxs("div",{className:"modal-box",children:[a.jsx("h3",{children:"Edit User"}),a.jsx("label",{children:"Name"}),a.jsx("input",{type:"text",value:d.name,onChange:S=>f({...d,name:S.target.value})}),a.jsx("label",{children:"Email"}),a.jsx("input",{type:"email",value:d.email,onChange:S=>f({...d,email:S.target.value})}),a.jsx("label",{children:"Role"}),a.jsxs("select",{value:d.role,onChange:S=>f({...d,role:S.target.value}),children:[a.jsx("option",{children:"Customer"}),a.jsx("option",{children:"Vendor"}),a.jsx("option",{children:"Admin"})]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"save-btn",onClick:m,children:"Save"}),a.jsx("button",{className:"cancel-btn",onClick:()=>o(null),children:"Cancel"})]})]})}),a.jsx("style",{jsx:"true",children:`
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
      `})]})}function Jw(){const r=mt(),[s,l]=w.useState([{id:1,name:"GreenGrow Traders",email:"green@grow.com",phone:"9876543210",company:"GreenGrow Pvt Ltd",status:"Pending"},{id:2,name:"FreshFarm Suppliers",email:"fresh@farm.com",phone:"9123456780",company:"FreshFarm Enterprises",status:"Approved"},{id:3,name:"AgriMart",email:"contact@agrimart.com",phone:"9988776655",company:"AgriMart Services",status:"Hold"},{id:4,name:"Farmers Best",email:"hello@farmersbest.com",phone:"9012345678",company:"Farmers Best Co",status:"Approved"},{id:5,name:"UrbanAgri",email:"info@urbanagri.com",phone:"9001122334",company:"UrbanAgri Pvt",status:"Rejected"}]),[o,d]=w.useState(""),[f,p]=w.useState("All"),[m,x]=w.useState({key:"id",dir:"desc"}),[h,b]=w.useState(1),[y,E]=w.useState(5),[S,j]=w.useState(null),[C,z]=w.useState(!1),[R,M]=w.useState({name:"",email:"",phone:"",company:"",status:"Pending"});w.useEffect(()=>b(1),[o,f,m,y]);const V=F=>{j(F),M(F)},re=()=>{l(F=>F.map(fe=>fe.id===S.id?R:fe)),j(null)},$=F=>{window.confirm("Delete vendor?")&&l(fe=>fe.filter(A=>A.id!==F))},ce=(F,fe)=>{l(A=>A.map(H=>H.id===F?{...H,status:fe}:H))},te=()=>{const F=s.length?Math.max(...s.map(fe=>fe.id))+1:1;l([{id:F,...R},...s]),z(!1),M({name:"",email:"",phone:"",company:"",status:"Pending"})},le=F=>r(`/admin/vendors/${F.id}`),ae=s.length,pe=s.filter(F=>F.status==="Approved").length,ge=s.filter(F=>F.status==="Pending").length,X=s.filter(F=>F.status==="Rejected").length,W=s.filter(F=>F.status==="Hold").length,I=w.useMemo(()=>{const F=o.toLowerCase();return s.filter(fe=>f!=="All"&&fe.status!==f?!1:fe.name.toLowerCase().includes(F)||fe.email.toLowerCase().includes(F)||fe.phone.toLowerCase().includes(F)||fe.company.toLowerCase().includes(F)||fe.status.toLowerCase().includes(F))},[s,o,f]),je=w.useMemo(()=>{let F=[...I];return F.sort((fe,A)=>{let H=fe[m.key].toString().toLowerCase(),J=A[m.key].toString().toLowerCase();return H<J?m.dir==="asc"?-1:1:H>J?m.dir==="asc"?1:-1:0}),F},[I,m]),T=Math.ceil(je.length/y),_=je.slice((h-1)*y,h*y),de=F=>{x(fe=>({key:F,dir:fe.key===F&&fe.dir==="asc"?"desc":"asc"}))};return a.jsxs("div",{className:"vendor-page",children:[a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card total",children:[a.jsx("h3",{children:"Total Vendors"}),a.jsx("p",{children:ae})]}),a.jsxs("div",{className:"stat-card approved",children:[a.jsx("h3",{children:"Approved"}),a.jsx("p",{children:pe})]}),a.jsxs("div",{className:"stat-card pending",children:[a.jsx("h3",{children:"Pending"}),a.jsx("p",{children:ge})]}),a.jsxs("div",{className:"stat-card rejected",children:[a.jsx("h3",{children:"Rejected"}),a.jsx("p",{children:X})]}),a.jsxs("div",{className:"stat-card hold",children:[a.jsx("h3",{children:"On Hold"}),a.jsx("p",{children:W})]})]}),a.jsx("div",{className:"add-button-row",children:a.jsxs("button",{className:"add-btn",onClick:()=>z(!0),children:[a.jsx(jx,{size:16})," Add New Vendor"]})}),a.jsxs("div",{className:"controls-row",children:[a.jsx("input",{className:"search-input",placeholder:"Search vendor by name, email, phone, company, status...",value:o,onChange:F=>d(F.target.value)}),a.jsxs("select",{className:"filter",value:f,onChange:F=>p(F.target.value),children:[a.jsx("option",{children:"All"}),a.jsx("option",{children:"Approved"}),a.jsx("option",{children:"Pending"}),a.jsx("option",{children:"Rejected"}),a.jsx("option",{children:"Hold"})]}),a.jsxs("button",{className:"sort-btn",onClick:()=>de("name"),children:["Name ",m.key==="name"?m.dir==="asc"?a.jsx(Gm,{}):a.jsx(Vm,{}):a.jsx(qm,{})]}),a.jsxs("button",{className:"sort-btn",onClick:()=>de("status"),children:["Status ",m.key==="status"?m.dir==="asc"?a.jsx(Gm,{}):a.jsx(Vm,{}):a.jsx(qm,{})]})]}),a.jsx("div",{className:"table-wrapper",children:a.jsxs("table",{className:"vendor-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#ID"}),a.jsx("th",{children:"Vendor"}),a.jsx("th",{children:"Email"}),a.jsx("th",{children:"Phone"}),a.jsx("th",{children:"Company"}),a.jsx("th",{children:"Status"}),a.jsx("th",{style:{textAlign:"center"},children:"Actions"})]})}),a.jsx("tbody",{children:_.map(F=>a.jsxs("tr",{children:[a.jsx("td",{children:F.id}),a.jsx("td",{children:a.jsxs("button",{className:`vendor-name ${F.status.toLowerCase()}`,onClick:()=>le(F),children:[a.jsx(Tx,{size:14})," ",F.name]})}),a.jsx("td",{children:F.email}),a.jsx("td",{children:F.phone}),a.jsx("td",{children:F.company}),a.jsx("td",{children:a.jsx("span",{className:`badge ${F.status.toLowerCase()}`,children:F.status})}),a.jsxs("td",{className:"actions",children:[a.jsx("button",{className:"btn green",onClick:()=>ce(F.id,"Approved"),children:a.jsx(Jd,{})}),a.jsx("button",{className:"btn yellow",onClick:()=>ce(F.id,"Hold"),children:a.jsx(Nj,{})}),a.jsx("button",{className:"btn red",onClick:()=>ce(F.id,"Rejected"),children:a.jsx(wx,{})}),a.jsx("button",{className:"btn edit",onClick:()=>V(F),children:a.jsx(kx,{})}),a.jsx("button",{className:"btn delete",onClick:()=>$(F.id),children:a.jsx($d,{})})]})]},F.id))})]})}),a.jsxs("div",{className:"pagination",children:[a.jsx("button",{onClick:()=>b(h-1),disabled:h===1,children:a.jsx(yx,{})}),a.jsxs("span",{children:[h," / ",T]}),a.jsx("button",{onClick:()=>b(h+1),disabled:h===T,children:a.jsx(vx,{})})]}),S&&a.jsx("div",{className:"modal-overlay",children:a.jsxs("div",{className:"modal-box",children:[a.jsx("h3",{children:"Edit Vendor"}),a.jsx("input",{value:R.name,onChange:F=>M({...R,name:F.target.value})}),a.jsx("input",{value:R.email,onChange:F=>M({...R,email:F.target.value})}),a.jsx("input",{value:R.phone,onChange:F=>M({...R,phone:F.target.value})}),a.jsx("input",{value:R.company,onChange:F=>M({...R,company:F.target.value})}),a.jsxs("select",{value:R.status,onChange:F=>M({...R,status:F.target.value}),children:[a.jsx("option",{children:"Approved"}),a.jsx("option",{children:"Pending"}),a.jsx("option",{children:"Rejected"}),a.jsx("option",{children:"Hold"})]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"save",onClick:re,children:"Save"}),a.jsx("button",{className:"cancel",onClick:()=>j(null),children:"Cancel"})]})]})}),C&&a.jsx("div",{className:"modal-overlay",children:a.jsxs("div",{className:"modal-box",children:[a.jsx("h3",{children:"Add Vendor"}),a.jsx("input",{placeholder:"Name",value:R.name,onChange:F=>M({...R,name:F.target.value})}),a.jsx("input",{placeholder:"Email",value:R.email,onChange:F=>M({...R,email:F.target.value})}),a.jsx("input",{placeholder:"Phone",value:R.phone,onChange:F=>M({...R,phone:F.target.value})}),a.jsx("input",{placeholder:"Company",value:R.company,onChange:F=>M({...R,company:F.target.value})}),a.jsxs("select",{value:R.status,onChange:F=>M({...R,status:F.target.value}),children:[a.jsx("option",{children:"Pending"}),a.jsx("option",{children:"Approved"}),a.jsx("option",{children:"Rejected"}),a.jsx("option",{children:"Hold"})]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"save",onClick:te,children:"Add"}),a.jsx("button",{className:"cancel",onClick:()=>z(!1),children:"Cancel"})]})]})}),a.jsx("style",{jsx:"true",children:`
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

      `})]})}function Ww(){const{id:r}=Dd(),s=Ui.find(X=>String(X.id)===String(r)),l=mt(),o="/mnt/data/c61b8eae-dfc2-4cca-a1e0-c301228d07ef.png";if(!s)return a.jsxs("div",{style:{textAlign:"center",padding:40},children:[a.jsx("h2",{children:"Product Not Found"}),a.jsx(oe,{to:"/",children:"Go Home"})]});const{name:d="Unnamed Machinery",brand:f="Unknown Brand",price:p=0,mrp:m=0,image:x,description:h="No description available.",highlights:b=[],specifications:y={},features:E=[],usage:S=[],maintenance:j=[],safety:C=[],warranty:z="Standard 1-year warranty",reviews:R=[],category:M="Farm Machinery"}=s,[V,re]=w.useState(""),[$,ce]=w.useState(null),te=w.useMemo(()=>{if(!R.length)return{avg:4.6,count:112};const X=R.reduce((W,I)=>W+(I.rating||0),0)/R.length;return{avg:Math.round(X*10)/10,count:R.length}},[R]),le=Ui.filter(X=>X.id!==s.id).slice(0,6);function ae(){if(!/^\d{6}$/.test(V)){ce({ok:!1,msg:"Enter valid 6-digit PIN"});return}const X=/^[1-9]/.test(V);ce(X?{ok:!0,msg:"Delivery available (4–7 days)"}:{ok:!1,msg:"Delivery not available in this area"})}function pe(){const X=`/machinery/${r}`;Hi(l,X)&&alert(`Added ${d} to cart`)}function ge(){const X=`/machinery/${r}`,W={id:r,name:d,price:p,mrp:m,image:x};localStorage.setItem("buyNowItem",JSON.stringify(W)),sessionStorage.setItem("redirectToBuyNow","true"),Hi(l,X)&&l("/buy-now")}return a.jsxs("div",{className:"mach-page-root",children:[a.jsxs("div",{className:"mach-page",children:[a.jsxs("nav",{className:"breadcrumb",children:[a.jsx(oe,{to:"/",children:"Home"}),a.jsx("span",{children:"›"}),a.jsx(oe,{to:"/category/farm-machinery",children:"Farm Machinery"}),a.jsx("span",{children:"›"}),a.jsx("span",{className:"current",children:d})]}),a.jsxs("div",{className:"product-grid",children:[a.jsxs("div",{className:"image-col",children:[a.jsx("div",{className:"main-image",children:a.jsx("img",{src:x||o,alt:d,loading:"lazy"})}),a.jsxs("div",{className:"mini-row",children:[a.jsx("img",{className:"thumb",src:x||o,alt:""}),a.jsx("img",{className:"thumb",src:o,alt:""}),a.jsx("img",{className:"thumb",src:o,alt:""})]})]}),a.jsxs("div",{className:"info-col",children:[a.jsx("h1",{className:"title",children:d}),a.jsx("p",{className:"brand",children:f}),a.jsxs("div",{className:"rating",children:[a.jsxs("div",{className:"stars",children:["★".repeat(Math.round(te.avg)),"☆".repeat(5-Math.round(te.avg))]}),a.jsxs("div",{className:"rating-meta",children:[te.avg," • ",te.count," reviews"]})]}),a.jsxs("div",{className:"price-card",children:[a.jsxs("div",{className:"price-left",children:[a.jsxs("div",{className:"price-current",children:["₹",p]}),a.jsxs("div",{className:"price-mrp",children:["₹",m]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"save",children:["Save ₹",m-p]}),a.jsx("div",{className:"badge",children:"Best Seller"})]})]}),b.length>0&&a.jsxs("div",{className:"highlights",children:[a.jsx("h4",{children:"Highlights"}),a.jsx("ul",{children:b.map((X,W)=>a.jsx("li",{children:X},W))})]}),a.jsxs("div",{className:"delivery-check",children:[a.jsx("label",{children:"Check Delivery"}),a.jsxs("div",{className:"pin-row",children:[a.jsx("input",{value:V,onChange:X=>{re(X.target.value),ce(null)},placeholder:"Enter 6 digit PIN"}),a.jsx("button",{onClick:ae,children:"Check"})]}),$&&a.jsx("div",{className:`pin-result ${$.ok?"ok":"no"}`,children:$.msg})]}),a.jsxs("div",{className:"cta-row",children:[a.jsx("button",{className:"buy",onClick:ge,children:"Buy Now"}),a.jsx("button",{className:"cart",onClick:pe,children:"Add to Cart"})]}),a.jsxs("div",{className:"short-desc",children:[a.jsx("h4",{children:"About this Machinery"}),a.jsx("p",{children:h})]})]})]}),a.jsxs("div",{className:"lower",children:[a.jsxs("div",{className:"left-card",children:[a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Product Overview"}),a.jsxs("div",{className:"spec-grid",children:[a.jsx("div",{children:a.jsx("strong",{children:"Name"})}),a.jsx("div",{children:d}),a.jsx("div",{children:a.jsx("strong",{children:"Brand"})}),a.jsx("div",{children:f}),a.jsx("div",{children:a.jsx("strong",{children:"Category"})}),a.jsx("div",{children:M})]})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Specifications"}),Object.keys(y).length>0?a.jsx("table",{className:"spec-table",children:a.jsx("tbody",{children:Object.entries(y).map(([X,W])=>a.jsxs("tr",{children:[a.jsx("td",{children:X}),a.jsx("td",{children:W})]},X))})}):a.jsx("p",{children:"No specifications available."})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Key Features"}),a.jsx("ul",{className:"bullet-list",children:E.length>0?E.map((X,W)=>a.jsx("li",{children:X},W)):a.jsxs(a.Fragment,{children:[a.jsx("li",{children:"High durability & long life."}),a.jsx("li",{children:"Designed for efficient farming."}),a.jsx("li",{children:"Low maintenance cost."})]})})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Usage Guide"}),a.jsx("ul",{className:"bullet-list",children:S.length>0?S.map((X,W)=>a.jsx("li",{children:X},W)):a.jsxs(a.Fragment,{children:[a.jsx("li",{children:"Read the manual before operation."}),a.jsx("li",{children:"Check engine oil and coolant levels."}),a.jsx("li",{children:"Ensure safety guards are in place."})]})})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Maintenance Tips"}),a.jsx("ul",{className:"bullet-list",children:j.length>0?j.map((X,W)=>a.jsx("li",{children:X},W)):a.jsxs(a.Fragment,{children:[a.jsx("li",{children:"Regular lubrication recommended."}),a.jsx("li",{children:"Clean air filters weekly."}),a.jsx("li",{children:"Inspect belts & bolts before use."})]})})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Safety Instructions"}),a.jsx("ul",{className:"bullet-list",children:C.length>0?C.map((X,W)=>a.jsx("li",{children:X},W)):a.jsxs(a.Fragment,{children:[a.jsx("li",{children:"Wear protective gear."}),a.jsx("li",{children:"Keep away from moving parts."}),a.jsx("li",{children:"Do not overload machinery."})]})})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Warranty"}),a.jsx("p",{children:z})]}),a.jsxs("section",{className:"card",children:[a.jsx("h3",{children:"Frequently Asked Questions"}),a.jsxs("details",{children:[a.jsx("summary",{children:"Does this model require servicing?"}),a.jsx("p",{children:"Yes, regular servicing ensures best performance."})]}),a.jsxs("details",{children:[a.jsx("summary",{children:"Are spare parts available?"}),a.jsx("p",{children:"Yes, parts are available with authorized dealers."})]}),a.jsxs("details",{children:[a.jsx("summary",{children:"Can beginners operate it?"}),a.jsx("p",{children:"Yes, but proper guidance is recommended."})]})]})]}),a.jsxs("div",{className:"right-card",children:[a.jsxs("section",{className:"card reviews-card",children:[a.jsx("h3",{children:"Customer Reviews"}),a.jsxs("div",{className:"reviews-summary",children:[a.jsx("div",{className:"big-rating",children:te.avg}),a.jsxs("div",{className:"small",children:["Based on ",te.count," reviews"]})]}),a.jsx("div",{className:"reviews-list",children:(R.length?R:[{name:"Mahesh",rating:5,text:"Very powerful and efficient. Worth the price!",date:"2025-07-10"},{name:"Arun",rating:4,text:"Good performance, low fuel usage.",date:"2025-07-12"}]).map((X,W)=>a.jsxs("div",{className:"review",children:[a.jsxs("div",{className:"r-top",children:[a.jsx("strong",{children:X.name}),a.jsxs("span",{className:"r-rating",children:["★".repeat(X.rating),"☆".repeat(5-X.rating)]})]}),a.jsx("div",{className:"r-text",children:X.text}),a.jsx("div",{className:"r-date",children:X.date})]},W))})]}),a.jsxs("section",{className:"card related-card",children:[a.jsx("h3",{children:"Related Machinery"}),a.jsx("div",{className:"related-grid",children:le.map(X=>a.jsxs(oe,{to:`/machinery/${X.id}`,className:"related-item",children:[a.jsx("img",{src:X.image||o,alt:X.name}),a.jsx("div",{className:"r-name",children:X.name}),a.jsxs("div",{className:"r-price",children:["₹",X.price]})]},X.id))})]})]})]})]}),a.jsx("div",{className:"sticky",children:a.jsxs("div",{className:"sticky-inner",children:[a.jsxs("div",{className:"sticky-left",children:[a.jsxs("div",{className:"sticky-price",children:["₹",p]}),a.jsxs("div",{className:"sticky-save",children:["Save ₹",Math.max(0,m-p)]})]}),a.jsxs("div",{className:"sticky-ctas",children:[a.jsx("button",{className:"sticky-cart",onClick:pe,children:"Add"}),a.jsx("button",{className:"sticky-buy",onClick:ge,children:"Buy"})]})]})}),a.jsx("style",{children:`
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
          padding:10px 14px;border:none;border-radius:8px;font-weight:700;cursor:pointer; margin-left:10px;
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
      `})]})}function _w(r){return At({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"},child:[]}]})(r)}const Ee=r=>typeof r=="string",Yr=()=>{let r,s;const l=new Promise((o,d)=>{r=o,s=d});return l.resolve=r,l.reject=s,l},Ym=r=>r==null?"":""+r,$w=(r,s,l)=>{r.forEach(o=>{s[o]&&(l[o]=s[o])})},e4=/###/g,Fm=r=>r&&r.indexOf("###")>-1?r.replace(e4,"."):r,Km=r=>!r||Ee(r),Fr=(r,s,l)=>{const o=Ee(s)?s.split("."):s;let d=0;for(;d<o.length-1;){if(Km(r))return{};const f=Fm(o[d]);!r[f]&&l&&(r[f]=new l),Object.prototype.hasOwnProperty.call(r,f)?r=r[f]:r={},++d}return Km(r)?{}:{obj:r,k:Fm(o[d])}},Pm=(r,s,l)=>{const{obj:o,k:d}=Fr(r,s,Object);if(o!==void 0||s.length===1){o[d]=l;return}let f=s[s.length-1],p=s.slice(0,s.length-1),m=Fr(r,p,Object);for(;m.obj===void 0&&p.length;)f=`${p[p.length-1]}.${f}`,p=p.slice(0,p.length-1),m=Fr(r,p,Object),m?.obj&&typeof m.obj[`${m.k}.${f}`]<"u"&&(m.obj=void 0);m.obj[`${m.k}.${f}`]=l},t4=(r,s,l,o)=>{const{obj:d,k:f}=Fr(r,s,Object);d[f]=d[f]||[],d[f].push(l)},Cl=(r,s)=>{const{obj:l,k:o}=Fr(r,s);if(l&&Object.prototype.hasOwnProperty.call(l,o))return l[o]},a4=(r,s,l)=>{const o=Cl(r,l);return o!==void 0?o:Cl(s,l)},Mx=(r,s,l)=>{for(const o in s)o!=="__proto__"&&o!=="constructor"&&(o in r?Ee(r[o])||r[o]instanceof String||Ee(s[o])||s[o]instanceof String?l&&(r[o]=s[o]):Mx(r[o],s[o],l):r[o]=s[o]);return r},Mi=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var n4={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const i4=r=>Ee(r)?r.replace(/[&<>"'\/]/g,s=>n4[s]):r;class r4{constructor(s){this.capacity=s,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(s){const l=this.regExpMap.get(s);if(l!==void 0)return l;const o=new RegExp(s);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(s,o),this.regExpQueue.push(s),o}}const s4=[" ",",","?","!",";"],l4=new r4(20),o4=(r,s,l)=>{s=s||"",l=l||"";const o=s4.filter(p=>s.indexOf(p)<0&&l.indexOf(p)<0);if(o.length===0)return!0;const d=l4.getRegExp(`(${o.map(p=>p==="?"?"\\?":p).join("|")})`);let f=!d.test(r);if(!f){const p=r.indexOf(l);p>0&&!d.test(r.substring(0,p))&&(f=!0)}return f},Od=(r,s,l=".")=>{if(!r)return;if(r[s])return Object.prototype.hasOwnProperty.call(r,s)?r[s]:void 0;const o=s.split(l);let d=r;for(let f=0;f<o.length;){if(!d||typeof d!="object")return;let p,m="";for(let x=f;x<o.length;++x)if(x!==f&&(m+=l),m+=o[x],p=d[m],p!==void 0){if(["string","number","boolean"].indexOf(typeof p)>-1&&x<o.length-1)continue;f+=x-f+1;break}d=p}return d},Zr=r=>r?.replace("_","-"),c4={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,s){console?.[r]?.apply?.(console,s)}};class Ol{constructor(s,l={}){this.init(s,l)}init(s,l={}){this.prefix=l.prefix||"i18next:",this.logger=s||c4,this.options=l,this.debug=l.debug}log(...s){return this.forward(s,"log","",!0)}warn(...s){return this.forward(s,"warn","",!0)}error(...s){return this.forward(s,"error","")}deprecate(...s){return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(s,l,o,d){return d&&!this.debug?null:(Ee(s[0])&&(s[0]=`${o}${this.prefix} ${s[0]}`),this.logger[l](s))}create(s){return new Ol(this.logger,{prefix:`${this.prefix}:${s}:`,...this.options})}clone(s){return s=s||this.options,s.prefix=s.prefix||this.prefix,new Ol(this.logger,s)}}var Aa=new Ol;class Ul{constructor(){this.observers={}}on(s,l){return s.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const d=this.observers[o].get(l)||0;this.observers[o].set(l,d+1)}),this}off(s,l){if(this.observers[s]){if(!l){delete this.observers[s];return}this.observers[s].delete(l)}}emit(s,...l){this.observers[s]&&Array.from(this.observers[s].entries()).forEach(([d,f])=>{for(let p=0;p<f;p++)d(...l)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([d,f])=>{for(let p=0;p<f;p++)d.apply(d,[s,...l])})}}class Zm extends Ul{constructor(s,l={ns:["translation"],defaultNS:"translation"}){super(),this.data=s||{},this.options=l,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(s){this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}removeNamespaces(s){const l=this.options.ns.indexOf(s);l>-1&&this.options.ns.splice(l,1)}getResource(s,l,o,d={}){const f=d.keySeparator!==void 0?d.keySeparator:this.options.keySeparator,p=d.ignoreJSONStructure!==void 0?d.ignoreJSONStructure:this.options.ignoreJSONStructure;let m;s.indexOf(".")>-1?m=s.split("."):(m=[s,l],o&&(Array.isArray(o)?m.push(...o):Ee(o)&&f?m.push(...o.split(f)):m.push(o)));const x=Cl(this.data,m);return!x&&!l&&!o&&s.indexOf(".")>-1&&(s=m[0],l=m[1],o=m.slice(2).join(".")),x||!p||!Ee(o)?x:Od(this.data?.[s]?.[l],o,f)}addResource(s,l,o,d,f={silent:!1}){const p=f.keySeparator!==void 0?f.keySeparator:this.options.keySeparator;let m=[s,l];o&&(m=m.concat(p?o.split(p):o)),s.indexOf(".")>-1&&(m=s.split("."),d=l,l=m[1]),this.addNamespaces(l),Pm(this.data,m,d),f.silent||this.emit("added",s,l,o,d)}addResources(s,l,o,d={silent:!1}){for(const f in o)(Ee(o[f])||Array.isArray(o[f]))&&this.addResource(s,l,f,o[f],{silent:!0});d.silent||this.emit("added",s,l,o)}addResourceBundle(s,l,o,d,f,p={silent:!1,skipCopy:!1}){let m=[s,l];s.indexOf(".")>-1&&(m=s.split("."),d=o,o=l,l=m[1]),this.addNamespaces(l);let x=Cl(this.data,m)||{};p.skipCopy||(o=JSON.parse(JSON.stringify(o))),d?Mx(x,o,f):x={...x,...o},Pm(this.data,m,x),p.silent||this.emit("added",s,l,o)}removeResourceBundle(s,l){this.hasResourceBundle(s,l)&&delete this.data[s][l],this.removeNamespaces(l),this.emit("removed",s,l)}hasResourceBundle(s,l){return this.getResource(s,l)!==void 0}getResourceBundle(s,l){return l||(l=this.options.defaultNS),this.getResource(s,l)}getDataByLanguage(s){return this.data[s]}hasLanguageSomeTranslations(s){const l=this.getDataByLanguage(s);return!!(l&&Object.keys(l)||[]).find(d=>l[d]&&Object.keys(l[d]).length>0)}toJSON(){return this.data}}var Bx={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,s,l,o,d){return r.forEach(f=>{s=this.processors[f]?.process(s,l,o,d)??s}),s}};const Dx=Symbol("i18next/PATH_KEY");function d4(){const r=[],s=Object.create(null);let l;return s.get=(o,d)=>(l?.revoke?.(),d===Dx?r:(r.push(d),l=Proxy.revocable(o,s),l.proxy)),Proxy.revocable(Object.create(null),s).proxy}function zd(r,s){const{[Dx]:l}=r(d4());return l.join(s?.keySeparator??".")}const Im={},xd=r=>!Ee(r)&&typeof r!="boolean"&&typeof r!="number";class zl extends Ul{constructor(s,l={}){super(),$w(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],s,this),this.options=l,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Aa.create("translator")}changeLanguage(s){s&&(this.language=s)}exists(s,l={interpolation:{}}){const o={...l};if(s==null)return!1;const d=this.resolve(s,o);if(d?.res===void 0)return!1;const f=xd(d.res);return!(o.returnObjects===!1&&f)}extractFromKey(s,l){let o=l.nsSeparator!==void 0?l.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const d=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let f=l.ns||this.options.defaultNS||[];const p=o&&s.indexOf(o)>-1,m=!this.options.userDefinedKeySeparator&&!l.keySeparator&&!this.options.userDefinedNsSeparator&&!l.nsSeparator&&!o4(s,o,d);if(p&&!m){const x=s.match(this.interpolator.nestingRegexp);if(x&&x.length>0)return{key:s,namespaces:Ee(f)?[f]:f};const h=s.split(o);(o!==d||o===d&&this.options.ns.indexOf(h[0])>-1)&&(f=h.shift()),s=h.join(d)}return{key:s,namespaces:Ee(f)?[f]:f}}translate(s,l,o){let d=typeof l=="object"?{...l}:l;if(typeof d!="object"&&this.options.overloadTranslationOptionHandler&&(d=this.options.overloadTranslationOptionHandler(arguments)),typeof d=="object"&&(d={...d}),d||(d={}),s==null)return"";typeof s=="function"&&(s=zd(s,{...this.options,...d})),Array.isArray(s)||(s=[String(s)]);const f=d.returnDetails!==void 0?d.returnDetails:this.options.returnDetails,p=d.keySeparator!==void 0?d.keySeparator:this.options.keySeparator,{key:m,namespaces:x}=this.extractFromKey(s[s.length-1],d),h=x[x.length-1];let b=d.nsSeparator!==void 0?d.nsSeparator:this.options.nsSeparator;b===void 0&&(b=":");const y=d.lng||this.language,E=d.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(y?.toLowerCase()==="cimode")return E?f?{res:`${h}${b}${m}`,usedKey:m,exactUsedKey:m,usedLng:y,usedNS:h,usedParams:this.getUsedParamsDetails(d)}:`${h}${b}${m}`:f?{res:m,usedKey:m,exactUsedKey:m,usedLng:y,usedNS:h,usedParams:this.getUsedParamsDetails(d)}:m;const S=this.resolve(s,d);let j=S?.res;const C=S?.usedKey||m,z=S?.exactUsedKey||m,R=["[object Number]","[object Function]","[object RegExp]"],M=d.joinArrays!==void 0?d.joinArrays:this.options.joinArrays,V=!this.i18nFormat||this.i18nFormat.handleAsObject,re=d.count!==void 0&&!Ee(d.count),$=zl.hasDefaultValue(d),ce=re?this.pluralResolver.getSuffix(y,d.count,d):"",te=d.ordinal&&re?this.pluralResolver.getSuffix(y,d.count,{ordinal:!1}):"",le=re&&!d.ordinal&&d.count===0,ae=le&&d[`defaultValue${this.options.pluralSeparator}zero`]||d[`defaultValue${ce}`]||d[`defaultValue${te}`]||d.defaultValue;let pe=j;V&&!j&&$&&(pe=ae);const ge=xd(pe),X=Object.prototype.toString.apply(pe);if(V&&pe&&ge&&R.indexOf(X)<0&&!(Ee(M)&&Array.isArray(pe))){if(!d.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const W=this.options.returnedObjectHandler?this.options.returnedObjectHandler(C,pe,{...d,ns:x}):`key '${m} (${this.language})' returned an object instead of string.`;return f?(S.res=W,S.usedParams=this.getUsedParamsDetails(d),S):W}if(p){const W=Array.isArray(pe),I=W?[]:{},je=W?z:C;for(const T in pe)if(Object.prototype.hasOwnProperty.call(pe,T)){const _=`${je}${p}${T}`;$&&!j?I[T]=this.translate(_,{...d,defaultValue:xd(ae)?ae[T]:void 0,joinArrays:!1,ns:x}):I[T]=this.translate(_,{...d,joinArrays:!1,ns:x}),I[T]===_&&(I[T]=pe[T])}j=I}}else if(V&&Ee(M)&&Array.isArray(j))j=j.join(M),j&&(j=this.extendTranslation(j,s,d,o));else{let W=!1,I=!1;!this.isValidLookup(j)&&$&&(W=!0,j=ae),this.isValidLookup(j)||(I=!0,j=m);const T=(d.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&I?void 0:j,_=$&&ae!==j&&this.options.updateMissing;if(I||W||_){if(this.logger.log(_?"updateKey":"missingKey",y,h,m,_?ae:j),p){const A=this.resolve(m,{...d,keySeparator:!1});A&&A.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let de=[];const F=this.languageUtils.getFallbackCodes(this.options.fallbackLng,d.lng||this.language);if(this.options.saveMissingTo==="fallback"&&F&&F[0])for(let A=0;A<F.length;A++)de.push(F[A]);else this.options.saveMissingTo==="all"?de=this.languageUtils.toResolveHierarchy(d.lng||this.language):de.push(d.lng||this.language);const fe=(A,H,J)=>{const se=$&&J!==j?J:T;this.options.missingKeyHandler?this.options.missingKeyHandler(A,h,H,se,_,d):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(A,h,H,se,_,d),this.emit("missingKey",A,h,H,j)};this.options.saveMissing&&(this.options.saveMissingPlurals&&re?de.forEach(A=>{const H=this.pluralResolver.getSuffixes(A,d);le&&d[`defaultValue${this.options.pluralSeparator}zero`]&&H.indexOf(`${this.options.pluralSeparator}zero`)<0&&H.push(`${this.options.pluralSeparator}zero`),H.forEach(J=>{fe([A],m+J,d[`defaultValue${J}`]||ae)})}):fe(de,m,ae))}j=this.extendTranslation(j,s,d,S,o),I&&j===m&&this.options.appendNamespaceToMissingKey&&(j=`${h}${b}${m}`),(I||W)&&this.options.parseMissingKeyHandler&&(j=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${h}${b}${m}`:m,W?j:void 0,d))}return f?(S.res=j,S.usedParams=this.getUsedParamsDetails(d),S):j}extendTranslation(s,l,o,d,f){if(this.i18nFormat?.parse)s=this.i18nFormat.parse(s,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||d.usedLng,d.usedNS,d.usedKey,{resolved:d});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const x=Ee(s)&&(o?.interpolation?.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(x){const y=s.match(this.interpolator.nestingRegexp);h=y&&y.length}let b=o.replace&&!Ee(o.replace)?o.replace:o;if(this.options.interpolation.defaultVariables&&(b={...this.options.interpolation.defaultVariables,...b}),s=this.interpolator.interpolate(s,b,o.lng||this.language||d.usedLng,o),x){const y=s.match(this.interpolator.nestingRegexp),E=y&&y.length;h<E&&(o.nest=!1)}!o.lng&&d&&d.res&&(o.lng=this.language||d.usedLng),o.nest!==!1&&(s=this.interpolator.nest(s,(...y)=>f?.[0]===y[0]&&!o.context?(this.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${l[0]}`),null):this.translate(...y,l),o)),o.interpolation&&this.interpolator.reset()}const p=o.postProcess||this.options.postProcess,m=Ee(p)?[p]:p;return s!=null&&m?.length&&o.applyPostProcessor!==!1&&(s=Bx.handle(m,s,l,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...d,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),s}resolve(s,l={}){let o,d,f,p,m;return Ee(s)&&(s=[s]),s.forEach(x=>{if(this.isValidLookup(o))return;const h=this.extractFromKey(x,l),b=h.key;d=b;let y=h.namespaces;this.options.fallbackNS&&(y=y.concat(this.options.fallbackNS));const E=l.count!==void 0&&!Ee(l.count),S=E&&!l.ordinal&&l.count===0,j=l.context!==void 0&&(Ee(l.context)||typeof l.context=="number")&&l.context!=="",C=l.lngs?l.lngs:this.languageUtils.toResolveHierarchy(l.lng||this.language,l.fallbackLng);y.forEach(z=>{this.isValidLookup(o)||(m=z,!Im[`${C[0]}-${z}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(m)&&(Im[`${C[0]}-${z}`]=!0,this.logger.warn(`key "${d}" for languages "${C.join(", ")}" won't get resolved as namespace "${m}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),C.forEach(R=>{if(this.isValidLookup(o))return;p=R;const M=[b];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(M,b,R,z,l);else{let re;E&&(re=this.pluralResolver.getSuffix(R,l.count,l));const $=`${this.options.pluralSeparator}zero`,ce=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(E&&(l.ordinal&&re.indexOf(ce)===0&&M.push(b+re.replace(ce,this.options.pluralSeparator)),M.push(b+re),S&&M.push(b+$)),j){const te=`${b}${this.options.contextSeparator||"_"}${l.context}`;M.push(te),E&&(l.ordinal&&re.indexOf(ce)===0&&M.push(te+re.replace(ce,this.options.pluralSeparator)),M.push(te+re),S&&M.push(te+$))}}let V;for(;V=M.pop();)this.isValidLookup(o)||(f=V,o=this.getResource(R,z,V,l))}))})}),{res:o,usedKey:d,exactUsedKey:f,usedLng:p,usedNS:m}}isValidLookup(s){return s!==void 0&&!(!this.options.returnNull&&s===null)&&!(!this.options.returnEmptyString&&s==="")}getResource(s,l,o,d={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(s,l,o,d):this.resourceStore.getResource(s,l,o,d)}getUsedParamsDetails(s={}){const l=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=s.replace&&!Ee(s.replace);let d=o?s.replace:s;if(o&&typeof s.count<"u"&&(d.count=s.count),this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),!o){d={...d};for(const f of l)delete d[f]}return d}static hasDefaultValue(s){const l="defaultValue";for(const o in s)if(Object.prototype.hasOwnProperty.call(s,o)&&l===o.substring(0,l.length)&&s[o]!==void 0)return!0;return!1}}class Xm{constructor(s){this.options=s,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Aa.create("languageUtils")}getScriptPartFromCode(s){if(s=Zr(s),!s||s.indexOf("-")<0)return null;const l=s.split("-");return l.length===2||(l.pop(),l[l.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(l.join("-"))}getLanguagePartFromCode(s){if(s=Zr(s),!s||s.indexOf("-")<0)return s;const l=s.split("-");return this.formatLanguageCode(l[0])}formatLanguageCode(s){if(Ee(s)&&s.indexOf("-")>-1){let l;try{l=Intl.getCanonicalLocales(s)[0]}catch{}return l&&this.options.lowerCaseLng&&(l=l.toLowerCase()),l||(this.options.lowerCaseLng?s.toLowerCase():s)}return this.options.cleanCode||this.options.lowerCaseLng?s.toLowerCase():s}isSupportedCode(s){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(s=this.getLanguagePartFromCode(s)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(s)>-1}getBestMatchFromCodes(s){if(!s)return null;let l;return s.forEach(o=>{if(l)return;const d=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(d))&&(l=d)}),!l&&this.options.supportedLngs&&s.forEach(o=>{if(l)return;const d=this.getScriptPartFromCode(o);if(this.isSupportedCode(d))return l=d;const f=this.getLanguagePartFromCode(o);if(this.isSupportedCode(f))return l=f;l=this.options.supportedLngs.find(p=>{if(p===f)return p;if(!(p.indexOf("-")<0&&f.indexOf("-")<0)&&(p.indexOf("-")>0&&f.indexOf("-")<0&&p.substring(0,p.indexOf("-"))===f||p.indexOf(f)===0&&f.length>1))return p})}),l||(l=this.getFallbackCodes(this.options.fallbackLng)[0]),l}getFallbackCodes(s,l){if(!s)return[];if(typeof s=="function"&&(s=s(l)),Ee(s)&&(s=[s]),Array.isArray(s))return s;if(!l)return s.default||[];let o=s[l];return o||(o=s[this.getScriptPartFromCode(l)]),o||(o=s[this.formatLanguageCode(l)]),o||(o=s[this.getLanguagePartFromCode(l)]),o||(o=s.default),o||[]}toResolveHierarchy(s,l){const o=this.getFallbackCodes((l===!1?[]:l)||this.options.fallbackLng||[],s),d=[],f=p=>{p&&(this.isSupportedCode(p)?d.push(p):this.logger.warn(`rejecting language code not found in supportedLngs: ${p}`))};return Ee(s)&&(s.indexOf("-")>-1||s.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&f(this.formatLanguageCode(s)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&f(this.getScriptPartFromCode(s)),this.options.load!=="currentOnly"&&f(this.getLanguagePartFromCode(s))):Ee(s)&&f(this.formatLanguageCode(s)),o.forEach(p=>{d.indexOf(p)<0&&f(this.formatLanguageCode(p))}),d}}const Jm={zero:0,one:1,two:2,few:3,many:4,other:5},Wm={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class u4{constructor(s,l={}){this.languageUtils=s,this.options=l,this.logger=Aa.create("pluralResolver"),this.pluralRulesCache={}}addRule(s,l){this.rules[s]=l}clearCache(){this.pluralRulesCache={}}getRule(s,l={}){const o=Zr(s==="dev"?"en":s),d=l.ordinal?"ordinal":"cardinal",f=JSON.stringify({cleanedCode:o,type:d});if(f in this.pluralRulesCache)return this.pluralRulesCache[f];let p;try{p=new Intl.PluralRules(o,{type:d})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Wm;if(!s.match(/-|_/))return Wm;const x=this.languageUtils.getLanguagePartFromCode(s);p=this.getRule(x,l)}return this.pluralRulesCache[f]=p,p}needsPlural(s,l={}){let o=this.getRule(s,l);return o||(o=this.getRule("dev",l)),o?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(s,l,o={}){return this.getSuffixes(s,o).map(d=>`${l}${d}`)}getSuffixes(s,l={}){let o=this.getRule(s,l);return o||(o=this.getRule("dev",l)),o?o.resolvedOptions().pluralCategories.sort((d,f)=>Jm[d]-Jm[f]).map(d=>`${this.options.prepend}${l.ordinal?`ordinal${this.options.prepend}`:""}${d}`):[]}getSuffix(s,l,o={}){const d=this.getRule(s,o);return d?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${d.select(l)}`:(this.logger.warn(`no plural rule found for: ${s}`),this.getSuffix("dev",l,o))}}const _m=(r,s,l,o=".",d=!0)=>{let f=a4(r,s,l);return!f&&d&&Ee(l)&&(f=Od(r,l,o),f===void 0&&(f=Od(s,l,o))),f},bd=r=>r.replace(/\$/g,"$$$$");class f4{constructor(s={}){this.logger=Aa.create("interpolator"),this.options=s,this.format=s?.interpolation?.format||(l=>l),this.init(s)}init(s={}){s.interpolation||(s.interpolation={escapeValue:!0});const{escape:l,escapeValue:o,useRawValueToEscape:d,prefix:f,prefixEscaped:p,suffix:m,suffixEscaped:x,formatSeparator:h,unescapeSuffix:b,unescapePrefix:y,nestingPrefix:E,nestingPrefixEscaped:S,nestingSuffix:j,nestingSuffixEscaped:C,nestingOptionsSeparator:z,maxReplaces:R,alwaysFormat:M}=s.interpolation;this.escape=l!==void 0?l:i4,this.escapeValue=o!==void 0?o:!0,this.useRawValueToEscape=d!==void 0?d:!1,this.prefix=f?Mi(f):p||"{{",this.suffix=m?Mi(m):x||"}}",this.formatSeparator=h||",",this.unescapePrefix=b?"":y||"-",this.unescapeSuffix=this.unescapePrefix?"":b||"",this.nestingPrefix=E?Mi(E):S||Mi("$t("),this.nestingSuffix=j?Mi(j):C||Mi(")"),this.nestingOptionsSeparator=z||",",this.maxReplaces=R||1e3,this.alwaysFormat=M!==void 0?M:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const s=(l,o)=>l?.source===o?(l.lastIndex=0,l):new RegExp(o,"g");this.regexp=s(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=s(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=s(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(s,l,o,d){let f,p,m;const x=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=S=>{if(S.indexOf(this.formatSeparator)<0){const R=_m(l,x,S,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(R,void 0,o,{...d,...l,interpolationkey:S}):R}const j=S.split(this.formatSeparator),C=j.shift().trim(),z=j.join(this.formatSeparator).trim();return this.format(_m(l,x,C,this.options.keySeparator,this.options.ignoreJSONStructure),z,o,{...d,...l,interpolationkey:C})};this.resetRegExp();const b=d?.missingInterpolationHandler||this.options.missingInterpolationHandler,y=d?.interpolation?.skipOnVariables!==void 0?d.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:S=>bd(S)},{regex:this.regexp,safeValue:S=>this.escapeValue?bd(this.escape(S)):bd(S)}].forEach(S=>{for(m=0;f=S.regex.exec(s);){const j=f[1].trim();if(p=h(j),p===void 0)if(typeof b=="function"){const z=b(s,f,d);p=Ee(z)?z:""}else if(d&&Object.prototype.hasOwnProperty.call(d,j))p="";else if(y){p=f[0];continue}else this.logger.warn(`missed to pass in variable ${j} for interpolating ${s}`),p="";else!Ee(p)&&!this.useRawValueToEscape&&(p=Ym(p));const C=S.safeValue(p);if(s=s.replace(f[0],C),y?(S.regex.lastIndex+=p.length,S.regex.lastIndex-=f[0].length):S.regex.lastIndex=0,m++,m>=this.maxReplaces)break}}),s}nest(s,l,o={}){let d,f,p;const m=(x,h)=>{const b=this.nestingOptionsSeparator;if(x.indexOf(b)<0)return x;const y=x.split(new RegExp(`${b}[ ]*{`));let E=`{${y[1]}`;x=y[0],E=this.interpolate(E,p);const S=E.match(/'/g),j=E.match(/"/g);((S?.length??0)%2===0&&!j||j.length%2!==0)&&(E=E.replace(/'/g,'"'));try{p=JSON.parse(E),h&&(p={...h,...p})}catch(C){return this.logger.warn(`failed parsing options string in nesting for key ${x}`,C),`${x}${b}${E}`}return p.defaultValue&&p.defaultValue.indexOf(this.prefix)>-1&&delete p.defaultValue,x};for(;d=this.nestingRegexp.exec(s);){let x=[];p={...o},p=p.replace&&!Ee(p.replace)?p.replace:p,p.applyPostProcessor=!1,delete p.defaultValue;const h=/{.*}/.test(d[1])?d[1].lastIndexOf("}")+1:d[1].indexOf(this.formatSeparator);if(h!==-1&&(x=d[1].slice(h).split(this.formatSeparator).map(b=>b.trim()).filter(Boolean),d[1]=d[1].slice(0,h)),f=l(m.call(this,d[1].trim(),p),p),f&&d[0]===s&&!Ee(f))return f;Ee(f)||(f=Ym(f)),f||(this.logger.warn(`missed to resolve ${d[1]} for nesting ${s}`),f=""),x.length&&(f=x.reduce((b,y)=>this.format(b,y,o.lng,{...o,interpolationkey:d[1].trim()}),f.trim())),s=s.replace(d[0],f),this.regexp.lastIndex=0}return s}}const p4=r=>{let s=r.toLowerCase().trim();const l={};if(r.indexOf("(")>-1){const o=r.split("(");s=o[0].toLowerCase().trim();const d=o[1].substring(0,o[1].length-1);s==="currency"&&d.indexOf(":")<0?l.currency||(l.currency=d.trim()):s==="relativetime"&&d.indexOf(":")<0?l.range||(l.range=d.trim()):d.split(";").forEach(p=>{if(p){const[m,...x]=p.split(":"),h=x.join(":").trim().replace(/^'+|'+$/g,""),b=m.trim();l[b]||(l[b]=h),h==="false"&&(l[b]=!1),h==="true"&&(l[b]=!0),isNaN(h)||(l[b]=parseInt(h,10))}})}return{formatName:s,formatOptions:l}},$m=r=>{const s={};return(l,o,d)=>{let f=d;d&&d.interpolationkey&&d.formatParams&&d.formatParams[d.interpolationkey]&&d[d.interpolationkey]&&(f={...f,[d.interpolationkey]:void 0});const p=o+JSON.stringify(f);let m=s[p];return m||(m=r(Zr(o),d),s[p]=m),m(l)}},h4=r=>(s,l,o)=>r(Zr(l),o)(s);class m4{constructor(s={}){this.logger=Aa.create("formatter"),this.options=s,this.init(s)}init(s,l={interpolation:{}}){this.formatSeparator=l.interpolation.formatSeparator||",";const o=l.cacheInBuiltFormats?$m:h4;this.formats={number:o((d,f)=>{const p=new Intl.NumberFormat(d,{...f});return m=>p.format(m)}),currency:o((d,f)=>{const p=new Intl.NumberFormat(d,{...f,style:"currency"});return m=>p.format(m)}),datetime:o((d,f)=>{const p=new Intl.DateTimeFormat(d,{...f});return m=>p.format(m)}),relativetime:o((d,f)=>{const p=new Intl.RelativeTimeFormat(d,{...f});return m=>p.format(m,f.range||"day")}),list:o((d,f)=>{const p=new Intl.ListFormat(d,{...f});return m=>p.format(m)})}}add(s,l){this.formats[s.toLowerCase().trim()]=l}addCached(s,l){this.formats[s.toLowerCase().trim()]=$m(l)}format(s,l,o,d={}){const f=l.split(this.formatSeparator);if(f.length>1&&f[0].indexOf("(")>1&&f[0].indexOf(")")<0&&f.find(m=>m.indexOf(")")>-1)){const m=f.findIndex(x=>x.indexOf(")")>-1);f[0]=[f[0],...f.splice(1,m)].join(this.formatSeparator)}return f.reduce((m,x)=>{const{formatName:h,formatOptions:b}=p4(x);if(this.formats[h]){let y=m;try{const E=d?.formatParams?.[d.interpolationkey]||{},S=E.locale||E.lng||d.locale||d.lng||o;y=this.formats[h](m,S,{...b,...d,...E})}catch(E){this.logger.warn(E)}return y}else this.logger.warn(`there was no format function for ${h}`);return m},s)}}const g4=(r,s)=>{r.pending[s]!==void 0&&(delete r.pending[s],r.pendingCount--)};class x4 extends Ul{constructor(s,l,o,d={}){super(),this.backend=s,this.store=l,this.services=o,this.languageUtils=o.languageUtils,this.options=d,this.logger=Aa.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=d.maxParallelReads||10,this.readingCalls=0,this.maxRetries=d.maxRetries>=0?d.maxRetries:5,this.retryTimeout=d.retryTimeout>=1?d.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(o,d.backend,d)}queueLoad(s,l,o,d){const f={},p={},m={},x={};return s.forEach(h=>{let b=!0;l.forEach(y=>{const E=`${h}|${y}`;!o.reload&&this.store.hasResourceBundle(h,y)?this.state[E]=2:this.state[E]<0||(this.state[E]===1?p[E]===void 0&&(p[E]=!0):(this.state[E]=1,b=!1,p[E]===void 0&&(p[E]=!0),f[E]===void 0&&(f[E]=!0),x[y]===void 0&&(x[y]=!0)))}),b||(m[h]=!0)}),(Object.keys(f).length||Object.keys(p).length)&&this.queue.push({pending:p,pendingCount:Object.keys(p).length,loaded:{},errors:[],callback:d}),{toLoad:Object.keys(f),pending:Object.keys(p),toLoadLanguages:Object.keys(m),toLoadNamespaces:Object.keys(x)}}loaded(s,l,o){const d=s.split("|"),f=d[0],p=d[1];l&&this.emit("failedLoading",f,p,l),!l&&o&&this.store.addResourceBundle(f,p,o,void 0,void 0,{skipCopy:!0}),this.state[s]=l?-1:2,l&&o&&(this.state[s]=0);const m={};this.queue.forEach(x=>{t4(x.loaded,[f],p),g4(x,s),l&&x.errors.push(l),x.pendingCount===0&&!x.done&&(Object.keys(x.loaded).forEach(h=>{m[h]||(m[h]={});const b=x.loaded[h];b.length&&b.forEach(y=>{m[h][y]===void 0&&(m[h][y]=!0)})}),x.done=!0,x.errors.length?x.callback(x.errors):x.callback())}),this.emit("loaded",m),this.queue=this.queue.filter(x=>!x.done)}read(s,l,o,d=0,f=this.retryTimeout,p){if(!s.length)return p(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:s,ns:l,fcName:o,tried:d,wait:f,callback:p});return}this.readingCalls++;const m=(h,b)=>{if(this.readingCalls--,this.waitingReads.length>0){const y=this.waitingReads.shift();this.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(h&&b&&d<this.maxRetries){setTimeout(()=>{this.read.call(this,s,l,o,d+1,f*2,p)},f);return}p(h,b)},x=this.backend[o].bind(this.backend);if(x.length===2){try{const h=x(s,l);h&&typeof h.then=="function"?h.then(b=>m(null,b)).catch(m):m(null,h)}catch(h){m(h)}return}return x(s,l,m)}prepareLoading(s,l,o={},d){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),d&&d();Ee(s)&&(s=this.languageUtils.toResolveHierarchy(s)),Ee(l)&&(l=[l]);const f=this.queueLoad(s,l,o,d);if(!f.toLoad.length)return f.pending.length||d(),null;f.toLoad.forEach(p=>{this.loadOne(p)})}load(s,l,o){this.prepareLoading(s,l,{},o)}reload(s,l,o){this.prepareLoading(s,l,{reload:!0},o)}loadOne(s,l=""){const o=s.split("|"),d=o[0],f=o[1];this.read(d,f,"read",void 0,void 0,(p,m)=>{p&&this.logger.warn(`${l}loading namespace ${f} for language ${d} failed`,p),!p&&m&&this.logger.log(`${l}loaded namespace ${f} for language ${d}`,m),this.loaded(s,p,m)})}saveMissing(s,l,o,d,f,p={},m=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(l)){this.logger.warn(`did not save key "${o}" as the namespace "${l}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if(this.backend?.create){const x={...p,isUpdate:f},h=this.backend.create.bind(this.backend);if(h.length<6)try{let b;h.length===5?b=h(s,l,o,d,x):b=h(s,l,o,d),b&&typeof b.then=="function"?b.then(y=>m(null,y)).catch(m):m(null,b)}catch(b){m(b)}else h(s,l,o,d,m,x)}!s||!s[0]||this.store.addResource(s[0],l,o,d)}}}const eg=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let s={};if(typeof r[1]=="object"&&(s=r[1]),Ee(r[1])&&(s.defaultValue=r[1]),Ee(r[2])&&(s.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const l=r[3]||r[2];Object.keys(l).forEach(o=>{s[o]=l[o]})}return s},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),tg=r=>(Ee(r.ns)&&(r.ns=[r.ns]),Ee(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),Ee(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),r.supportedLngs?.indexOf?.("cimode")<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r),ml=()=>{},b4=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(l=>{typeof r[l]=="function"&&(r[l]=r[l].bind(r))})};class Kr extends Ul{constructor(s={},l){if(super(),this.options=tg(s),this.services={},this.logger=Aa,this.modules={external:[]},b4(this),l&&!this.isInitialized&&!s.isClone){if(!this.options.initAsync)return this.init(s,l),this;setTimeout(()=>{this.init(s,l)},0)}}init(s={},l){this.isInitializing=!0,typeof s=="function"&&(l=s,s={}),s.defaultNS==null&&s.ns&&(Ee(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const o=eg();this.options={...o,...this.options,...tg(s)},this.options.interpolation={...o.interpolation,...this.options.interpolation},s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const d=h=>h?typeof h=="function"?new h:h:null;if(!this.options.isClone){this.modules.logger?Aa.init(d(this.modules.logger),this.options):Aa.init(null,this.options);let h;this.modules.formatter?h=this.modules.formatter:h=m4;const b=new Xm(this.options);this.store=new Zm(this.options.resources,this.options);const y=this.services;y.logger=Aa,y.resourceStore=this.store,y.languageUtils=b,y.pluralResolver=new u4(b,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==o.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),h&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(y.formatter=d(h),y.formatter.init&&y.formatter.init(y,this.options),this.options.interpolation.format=y.formatter.format.bind(y.formatter)),y.interpolator=new f4(this.options),y.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},y.backendConnector=new x4(d(this.modules.backend),y.resourceStore,y,this.options),y.backendConnector.on("*",(S,...j)=>{this.emit(S,...j)}),this.modules.languageDetector&&(y.languageDetector=d(this.modules.languageDetector),y.languageDetector.init&&y.languageDetector.init(y,this.options.detection,this.options)),this.modules.i18nFormat&&(y.i18nFormat=d(this.modules.i18nFormat),y.i18nFormat.init&&y.i18nFormat.init(this)),this.translator=new zl(this.services,this.options),this.translator.on("*",(S,...j)=>{this.emit(S,...j)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,l||(l=ml),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(h=>{this[h]=(...b)=>this.store[h](...b)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(h=>{this[h]=(...b)=>(this.store[h](...b),this)});const m=Yr(),x=()=>{const h=(b,y)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),m.resolve(y),l(b,y)};if(this.languages&&!this.isInitialized)return h(null,this.t.bind(this));this.changeLanguage(this.options.lng,h)};return this.options.resources||!this.options.initAsync?x():setTimeout(x,0),m}loadResources(s,l=ml){let o=l;const d=Ee(s)?s:this.language;if(typeof s=="function"&&(o=s),!this.options.resources||this.options.partialBundledLanguages){if(d?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return o();const f=[],p=m=>{if(!m||m==="cimode")return;this.services.languageUtils.toResolveHierarchy(m).forEach(h=>{h!=="cimode"&&f.indexOf(h)<0&&f.push(h)})};d?p(d):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(x=>p(x)),this.options.preload?.forEach?.(m=>p(m)),this.services.backendConnector.load(f,this.options.ns,m=>{!m&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(m)})}else o(null)}reloadResources(s,l,o){const d=Yr();return typeof s=="function"&&(o=s,s=void 0),typeof l=="function"&&(o=l,l=void 0),s||(s=this.languages),l||(l=this.options.ns),o||(o=ml),this.services.backendConnector.reload(s,l,f=>{d.resolve(),o(f)}),d}use(s){if(!s)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!s.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return s.type==="backend"&&(this.modules.backend=s),(s.type==="logger"||s.log&&s.warn&&s.error)&&(this.modules.logger=s),s.type==="languageDetector"&&(this.modules.languageDetector=s),s.type==="i18nFormat"&&(this.modules.i18nFormat=s),s.type==="postProcessor"&&Bx.addPostProcessor(s),s.type==="formatter"&&(this.modules.formatter=s),s.type==="3rdParty"&&this.modules.external.push(s),this}setResolvedLanguage(s){if(!(!s||!this.languages)&&!(["cimode","dev"].indexOf(s)>-1)){for(let l=0;l<this.languages.length;l++){const o=this.languages[l];if(!(["cimode","dev"].indexOf(o)>-1)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}!this.resolvedLanguage&&this.languages.indexOf(s)<0&&this.store.hasLanguageSomeTranslations(s)&&(this.resolvedLanguage=s,this.languages.unshift(s))}}changeLanguage(s,l){this.isLanguageChangingTo=s;const o=Yr();this.emit("languageChanging",s);const d=m=>{this.language=m,this.languages=this.services.languageUtils.toResolveHierarchy(m),this.resolvedLanguage=void 0,this.setResolvedLanguage(m)},f=(m,x)=>{x?this.isLanguageChangingTo===s&&(d(x),this.translator.changeLanguage(x),this.isLanguageChangingTo=void 0,this.emit("languageChanged",x),this.logger.log("languageChanged",x)):this.isLanguageChangingTo=void 0,o.resolve((...h)=>this.t(...h)),l&&l(m,(...h)=>this.t(...h))},p=m=>{!s&&!m&&this.services.languageDetector&&(m=[]);const x=Ee(m)?m:m&&m[0],h=this.store.hasLanguageSomeTranslations(x)?x:this.services.languageUtils.getBestMatchFromCodes(Ee(m)?[m]:m);h&&(this.language||d(h),this.translator.language||this.translator.changeLanguage(h),this.services.languageDetector?.cacheUserLanguage?.(h)),this.loadResources(h,b=>{f(b,h)})};return!s&&this.services.languageDetector&&!this.services.languageDetector.async?p(this.services.languageDetector.detect()):!s&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(p):this.services.languageDetector.detect(p):p(s),o}getFixedT(s,l,o){const d=(f,p,...m)=>{let x;typeof p!="object"?x=this.options.overloadTranslationOptionHandler([f,p].concat(m)):x={...p},x.lng=x.lng||d.lng,x.lngs=x.lngs||d.lngs,x.ns=x.ns||d.ns,x.keyPrefix!==""&&(x.keyPrefix=x.keyPrefix||o||d.keyPrefix);const h=this.options.keySeparator||".";let b;return x.keyPrefix&&Array.isArray(f)?b=f.map(y=>(typeof y=="function"&&(y=zd(y,{...this.options,...p})),`${x.keyPrefix}${h}${y}`)):(typeof f=="function"&&(f=zd(f,{...this.options,...p})),b=x.keyPrefix?`${x.keyPrefix}${h}${f}`:f),this.t(b,x)};return Ee(s)?d.lng=s:d.lngs=s,d.ns=l,d.keyPrefix=o,d}t(...s){return this.translator?.translate(...s)}exists(...s){return this.translator?.exists(...s)}setDefaultNamespace(s){this.options.defaultNS=s}hasLoadedNamespace(s,l={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=l.lng||this.resolvedLanguage||this.languages[0],d=this.options?this.options.fallbackLng:!1,f=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const p=(m,x)=>{const h=this.services.backendConnector.state[`${m}|${x}`];return h===-1||h===0||h===2};if(l.precheck){const m=l.precheck(this,p);if(m!==void 0)return m}return!!(this.hasResourceBundle(o,s)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||p(o,s)&&(!d||p(f,s)))}loadNamespaces(s,l){const o=Yr();return this.options.ns?(Ee(s)&&(s=[s]),s.forEach(d=>{this.options.ns.indexOf(d)<0&&this.options.ns.push(d)}),this.loadResources(d=>{o.resolve(),l&&l(d)}),o):(l&&l(),Promise.resolve())}loadLanguages(s,l){const o=Yr();Ee(s)&&(s=[s]);const d=this.options.preload||[],f=s.filter(p=>d.indexOf(p)<0&&this.services.languageUtils.isSupportedCode(p));return f.length?(this.options.preload=d.concat(f),this.loadResources(p=>{o.resolve(),l&&l(p)}),o):(l&&l(),Promise.resolve())}dir(s){if(s||(s=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!s)return"rtl";try{const d=new Intl.Locale(s);if(d&&d.getTextInfo){const f=d.getTextInfo();if(f&&f.direction)return f.direction}}catch{}const l=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],o=this.services?.languageUtils||new Xm(eg());return s.toLowerCase().indexOf("-latn")>1?"ltr":l.indexOf(o.getLanguagePartFromCode(s))>-1||s.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(s={},l){const o=new Kr(s,l);return o.createInstance=Kr.createInstance,o}cloneInstance(s={},l=ml){const o=s.forkResourceStore;o&&delete s.forkResourceStore;const d={...this.options,...s,isClone:!0},f=new Kr(d);if((s.debug!==void 0||s.prefix!==void 0)&&(f.logger=f.logger.clone(s)),["store","services","language"].forEach(m=>{f[m]=this[m]}),f.services={...this.services},f.services.utils={hasLoadedNamespace:f.hasLoadedNamespace.bind(f)},o){const m=Object.keys(this.store.data).reduce((x,h)=>(x[h]={...this.store.data[h]},x[h]=Object.keys(x[h]).reduce((b,y)=>(b[y]={...x[h][y]},b),x[h]),x),{});f.store=new Zm(m,d),f.services.resourceStore=f.store}return f.translator=new zl(f.services,d),f.translator.on("*",(m,...x)=>{f.emit(m,...x)}),f.init(d,l),f.translator.options=d,f.translator.backendConnector.services.utils={hasLoadedNamespace:f.hasLoadedNamespace.bind(f)},f}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ut=Kr.createInstance();ut.createInstance;ut.dir;ut.init;ut.loadResources;ut.reloadResources;ut.use;ut.changeLanguage;ut.getFixedT;ut.t;ut.exists;ut.setDefaultNamespace;ut.hasLoadedNamespace;ut.loadNamespaces;ut.loadLanguages;const y4=(r,s,l,o)=>{const d=[l,{code:s,...o||{}}];if(r?.services?.logger?.forward)return r.services.logger.forward(d,"warn","react-i18next::",!0);Qn(d[0])&&(d[0]=`react-i18next:: ${d[0]}`),r?.services?.logger?.warn?r.services.logger.warn(...d):console?.warn&&console.warn(...d)},ag={},Lx=(r,s,l,o)=>{Qn(l)&&ag[l]||(Qn(l)&&(ag[l]=new Date),y4(r,s,l,o))},Ux=(r,s)=>()=>{if(r.isInitialized)s();else{const l=()=>{setTimeout(()=>{r.off("initialized",l)},0),s()};r.on("initialized",l)}},kd=(r,s,l)=>{r.loadNamespaces(s,Ux(r,l))},ng=(r,s,l,o)=>{if(Qn(l)&&(l=[l]),r.options.preload&&r.options.preload.indexOf(s)>-1)return kd(r,l,o);l.forEach(d=>{r.options.ns.indexOf(d)<0&&r.options.ns.push(d)}),r.loadLanguages(s,Ux(r,o))},v4=(r,s,l={})=>!s.languages||!s.languages.length?(Lx(s,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:s.languages}),!0):s.hasLoadedNamespace(r,{lng:l.lng,precheck:(o,d)=>{if(l.bindI18n&&l.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!d(o.isLanguageChangingTo,r))return!1}}),Qn=r=>typeof r=="string",j4=r=>typeof r=="object"&&r!==null,w4=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,A4={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},S4=r=>A4[r],N4=r=>r.replace(w4,S4);let Td={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:N4};const E4=(r={})=>{Td={...Td,...r}},C4=()=>Td;let Hx;const O4=r=>{Hx=r},z4=()=>Hx,k4={type:"3rdParty",init(r){E4(r.options.react),O4(r)}},Vx=w.createContext();class T4{constructor(){this.usedNamespaces={}}addUsedNamespaces(s){s.forEach(l=>{this.usedNamespaces[l]||(this.usedNamespaces[l]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var yd={exports:{}},vd={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function R4(){if(ig)return vd;ig=1;var r=Ir();function s(y,E){return y===E&&(y!==0||1/y===1/E)||y!==y&&E!==E}var l=typeof Object.is=="function"?Object.is:s,o=r.useState,d=r.useEffect,f=r.useLayoutEffect,p=r.useDebugValue;function m(y,E){var S=E(),j=o({inst:{value:S,getSnapshot:E}}),C=j[0].inst,z=j[1];return f(function(){C.value=S,C.getSnapshot=E,x(C)&&z({inst:C})},[y,S,E]),d(function(){return x(C)&&z({inst:C}),y(function(){x(C)&&z({inst:C})})},[y]),p(S),S}function x(y){var E=y.getSnapshot;y=y.value;try{var S=E();return!l(y,S)}catch{return!0}}function h(y,E){return E()}var b=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:m;return vd.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:b,vd}var rg;function M4(){return rg||(rg=1,yd.exports=R4()),yd.exports}var B4=M4();const D4=(r,s)=>Qn(s)?s:j4(s)&&Qn(s.defaultValue)?s.defaultValue:Array.isArray(r)?r[r.length-1]:r,L4={t:D4,ready:!1},U4=()=>()=>{},H4=(r,s={})=>{const{i18n:l}=s,{i18n:o,defaultNS:d}=w.useContext(Vx)||{},f=l||o||z4();f&&!f.reportNamespaces&&(f.reportNamespaces=new T4),f||Lx(f,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const p=w.useMemo(()=>({...C4(),...f?.options?.react,...s}),[f,s]),{useSuspense:m,keyPrefix:x}=p,h=d||f?.options?.defaultNS,b=Qn(h)?[h]:h||["translation"],y=w.useMemo(()=>b,b);f?.reportNamespaces?.addUsedNamespaces?.(y);const E=w.useRef(0),S=w.useCallback(ae=>{if(!f)return U4;const{bindI18n:pe,bindI18nStore:ge}=p,X=()=>{E.current+=1,ae()};return pe&&f.on(pe,X),ge&&f.store.on(ge,X),()=>{pe&&pe.split(" ").forEach(W=>f.off(W,X)),ge&&ge.split(" ").forEach(W=>f.store.off(W,X))}},[f,p]),j=w.useRef(),C=w.useCallback(()=>{if(!f)return L4;const ae=!!(f.isInitialized||f.initializedStoreOnce)&&y.every(je=>v4(je,f,p)),pe=s.lng||f.language,ge=E.current,X=j.current;if(X&&X.ready===ae&&X.lng===pe&&X.keyPrefix===x&&X.revision===ge)return X;const I={t:f.getFixedT(pe,p.nsMode==="fallback"?y:y[0],x),ready:ae,lng:pe,keyPrefix:x,revision:ge};return j.current=I,I},[f,y,x,p,s.lng]),[z,R]=w.useState(0),{t:M,ready:V}=B4.useSyncExternalStore(S,C,C);w.useEffect(()=>{if(f&&!V&&!m){const ae=()=>R(pe=>pe+1);s.lng?ng(f,s.lng,y,ae):kd(f,y,ae)}},[f,s.lng,y,V,m,z]);const re=f||{},$=w.useRef(null),ce=w.useRef(),te=ae=>{const pe=Object.getOwnPropertyDescriptors(ae);pe.__original&&delete pe.__original;const ge=Object.create(Object.getPrototypeOf(ae),pe);if(!Object.prototype.hasOwnProperty.call(ge,"__original"))try{Object.defineProperty(ge,"__original",{value:ae,writable:!1,enumerable:!1,configurable:!1})}catch{}return ge},le=w.useMemo(()=>{const ae=re,pe=ae?.language;let ge=ae;ae&&($.current&&$.current.__original===ae?ce.current!==pe?(ge=te(ae),$.current=ge,ce.current=pe):ge=$.current:(ge=te(ae),$.current=ge,ce.current=pe));const X=[M,ge,V];return X.t=M,X.i18n=ge,X.ready=V,X},[M,re,V,re.resolvedLanguage,re.language,re.languages]);if(f&&m&&!V)throw new Promise(ae=>{const pe=()=>ae();s.lng?ng(f,s.lng,y,pe):kd(f,y,pe)});return le};function V4({i18n:r,defaultNS:s,children:l}){const o=w.useMemo(()=>({i18n:r,defaultNS:s}),[r,s]);return w.createElement(Vx.Provider,{value:o},l)}const{slice:q4,forEach:G4}=[];function Q4(r){return G4.call(q4.call(arguments,1),s=>{if(s)for(const l in s)r[l]===void 0&&(r[l]=s[l])}),r}function Y4(r){return typeof r!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(l=>l.test(r))}const sg=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,F4=function(r,s){const o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},d=encodeURIComponent(s);let f=`${r}=${d}`;if(o.maxAge>0){const p=o.maxAge-0;if(Number.isNaN(p))throw new Error("maxAge should be a Number");f+=`; Max-Age=${Math.floor(p)}`}if(o.domain){if(!sg.test(o.domain))throw new TypeError("option domain is invalid");f+=`; Domain=${o.domain}`}if(o.path){if(!sg.test(o.path))throw new TypeError("option path is invalid");f+=`; Path=${o.path}`}if(o.expires){if(typeof o.expires.toUTCString!="function")throw new TypeError("option expires is invalid");f+=`; Expires=${o.expires.toUTCString()}`}if(o.httpOnly&&(f+="; HttpOnly"),o.secure&&(f+="; Secure"),o.sameSite)switch(typeof o.sameSite=="string"?o.sameSite.toLowerCase():o.sameSite){case!0:f+="; SameSite=Strict";break;case"lax":f+="; SameSite=Lax";break;case"strict":f+="; SameSite=Strict";break;case"none":f+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o.partitioned&&(f+="; Partitioned"),f},lg={create(r,s,l,o){let d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};l&&(d.expires=new Date,d.expires.setTime(d.expires.getTime()+l*60*1e3)),o&&(d.domain=o),document.cookie=F4(r,s,d)},read(r){const s=`${r}=`,l=document.cookie.split(";");for(let o=0;o<l.length;o++){let d=l[o];for(;d.charAt(0)===" ";)d=d.substring(1,d.length);if(d.indexOf(s)===0)return d.substring(s.length,d.length)}return null},remove(r,s){this.create(r,"",-1,s)}};var K4={name:"cookie",lookup(r){let{lookupCookie:s}=r;if(s&&typeof document<"u")return lg.read(s)||void 0},cacheUserLanguage(r,s){let{lookupCookie:l,cookieMinutes:o,cookieDomain:d,cookieOptions:f}=s;l&&typeof document<"u"&&lg.create(l,r,o,d,f)}},P4={name:"querystring",lookup(r){let{lookupQuerystring:s}=r,l;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const f=o.substring(1).split("&");for(let p=0;p<f.length;p++){const m=f[p].indexOf("=");m>0&&f[p].substring(0,m)===s&&(l=f[p].substring(m+1))}}return l}},Z4={name:"hash",lookup(r){let{lookupHash:s,lookupFromHashIndex:l}=r,o;if(typeof window<"u"){const{hash:d}=window.location;if(d&&d.length>2){const f=d.substring(1);if(s){const p=f.split("&");for(let m=0;m<p.length;m++){const x=p[m].indexOf("=");x>0&&p[m].substring(0,x)===s&&(o=p[m].substring(x+1))}}if(o)return o;if(!o&&l>-1){const p=d.match(/\/([a-zA-Z-]*)/g);return Array.isArray(p)?p[typeof l=="number"?l:0]?.replace("/",""):void 0}}}return o}};let Bi=null;const og=()=>{if(Bi!==null)return Bi;try{if(Bi=typeof window<"u"&&window.localStorage!==null,!Bi)return!1;const r="i18next.translate.boo";window.localStorage.setItem(r,"foo"),window.localStorage.removeItem(r)}catch{Bi=!1}return Bi};var I4={name:"localStorage",lookup(r){let{lookupLocalStorage:s}=r;if(s&&og())return window.localStorage.getItem(s)||void 0},cacheUserLanguage(r,s){let{lookupLocalStorage:l}=s;l&&og()&&window.localStorage.setItem(l,r)}};let Di=null;const cg=()=>{if(Di!==null)return Di;try{if(Di=typeof window<"u"&&window.sessionStorage!==null,!Di)return!1;const r="i18next.translate.boo";window.sessionStorage.setItem(r,"foo"),window.sessionStorage.removeItem(r)}catch{Di=!1}return Di};var X4={name:"sessionStorage",lookup(r){let{lookupSessionStorage:s}=r;if(s&&cg())return window.sessionStorage.getItem(s)||void 0},cacheUserLanguage(r,s){let{lookupSessionStorage:l}=s;l&&cg()&&window.sessionStorage.setItem(l,r)}},J4={name:"navigator",lookup(r){const s=[];if(typeof navigator<"u"){const{languages:l,userLanguage:o,language:d}=navigator;if(l)for(let f=0;f<l.length;f++)s.push(l[f]);o&&s.push(o),d&&s.push(d)}return s.length>0?s:void 0}},W4={name:"htmlTag",lookup(r){let{htmlTag:s}=r,l;const o=s||(typeof document<"u"?document.documentElement:null);return o&&typeof o.getAttribute=="function"&&(l=o.getAttribute("lang")),l}},_4={name:"path",lookup(r){let{lookupFromPathIndex:s}=r;if(typeof window>"u")return;const l=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(l)?l[typeof s=="number"?s:0]?.replace("/",""):void 0}},$4={name:"subdomain",lookup(r){let{lookupFromSubdomainIndex:s}=r;const l=typeof s=="number"?s+1:1,o=typeof window<"u"&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(o)return o[l]}};let qx=!1;try{document.cookie,qx=!0}catch{}const Gx=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];qx||Gx.splice(1,1);const eA=()=>({order:Gx,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:r=>r});class Qx{constructor(s){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(s,l)}init(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=s,this.options=Q4(l,this.options||{},eA()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=d=>d.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=o,this.addDetector(K4),this.addDetector(P4),this.addDetector(I4),this.addDetector(X4),this.addDetector(J4),this.addDetector(W4),this.addDetector(_4),this.addDetector($4),this.addDetector(Z4)}addDetector(s){return this.detectors[s.name]=s,this}detect(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,l=[];return s.forEach(o=>{if(this.detectors[o]){let d=this.detectors[o].lookup(this.options);d&&typeof d=="string"&&(d=[d]),d&&(l=l.concat(d))}}),l=l.filter(o=>o!=null&&!Y4(o)).map(o=>this.options.convertDetectedLanguage(o)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?l:l.length>0?l[0]:null}cacheUserLanguage(s){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;l&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(s)>-1||l.forEach(o=>{this.detectors[o]&&this.detectors[o].cacheUserLanguage(s,this.options)}))}}Qx.type="languageDetector";const tA="Search products...",aA="Search",nA="Cart",iA="Orders",rA="Wishlist",sA="Notifications",lA="View All",oA="My Profile",cA="My Orders",dA="My Cart",uA="Logout",fA="Track Order",pA="Language",hA="Upload Avatar",mA="No notifications",gA="Mark all read",xA="New promo: 15% off selected seeds",bA="Welcome Back",yA="Login",vA="Email Login",jA="Phone Login",wA="Forgot Password?",AA="Sign up",SA="Services",NA="About Us",EA="Contact",CA="Categories",OA={search_placeholder:tA,search_button:aA,cart:nA,orders:iA,wishlist:rA,notifications:sA,view_all:lA,profile:oA,my_orders:cA,my_cart:dA,logout:uA,track_order:fA,language:pA,upload_avatar:hA,no_notifications:mA,mark_all_read:gA,simulated_notification:xA,welcome_back:bA,login:yA,email_login:vA,phone_login:jA,forgot_password:wA,signup:AA,services:SA,about_us:NA,contact:EA,categories:CA},zA="उत्पाद खोजें...",kA="खोजें",TA="कार्ट",RA="ऑर्डर",MA="इच्छा सूची",BA="सूचनाएँ",DA="सभी देखें",LA="मेरा प्रोफ़ाइल",UA="मेरे ऑर्डर",HA="मेरा कार्ट",VA="लॉग आउट",qA="ऑर्डर ट्रैक करें",GA="भाषा",QA="अवतार अपलोड करें",YA="कोई सूचनाएँ नहीं",FA="सभी पढ़ा हुआ मार्क करें",KA="नया प्रचार: कुछ चुनिंदा बीजों पर 15% छूट",PA="वापसी पर स्वागत है",ZA="लॉगिन",IA="ईमेल लॉगिन",XA="फोन लॉगिन",JA="पासवर्ड भूल गए?",WA="साइन अप",_A="सेवाएं",$A="हमारे बारे में",e6="संपर्क करें",t6="श्रेणियाँ",a6={search_placeholder:zA,search_button:kA,cart:TA,orders:RA,wishlist:MA,notifications:BA,view_all:DA,profile:LA,my_orders:UA,my_cart:HA,logout:VA,track_order:qA,language:GA,upload_avatar:QA,no_notifications:YA,mark_all_read:FA,simulated_notification:KA,welcome_back:PA,login:ZA,email_login:IA,phone_login:XA,forgot_password:JA,signup:WA,services:_A,about_us:$A,contact:e6,categories:t6},n6="ఉత్పత్తులను శోధించండి...",i6="శోధించండి",r6="కార్ట్",s6="ఆర్డర్లు",l6="ఇష్టాలు",o6="నోటిఫికేషన్లు",c6="అన్నింటిని చూడండి",d6="నా پروఫైల్",u6="నా ఆర్డర్లు",f6="నా కార్ట్",p6="లాగ్ అవుట్",h6="ఆర్డర్ ట్రాక్ చేయండి",m6="భాష",g6="అవతార్ అప్లోడ్ చేయండి",x6="ఏనొట్టి లేదు",b6="అన్నింటిని చదివినట్లు గుర్తించండి",y6="కొత్త ఆఫర్: ప్రత్యేక బీజుపై 15% తగ్గింపు",v6="వెనక్కి స్వాగతం",j6="లాగిన్",w6="ఇమెయిల్ లాగిన్",A6="ఫోన్ లాగిన్",S6="పాస్వర్డ్ మర్చిపోయాను?",N6="సైన్ అప్",E6="సేవలు",C6="గురించి",O6="సంప్రదించండి",z6="వర్గాలు",k6={search_placeholder:n6,search_button:i6,cart:r6,orders:s6,wishlist:l6,notifications:o6,view_all:c6,profile:d6,my_orders:u6,my_cart:f6,logout:p6,track_order:h6,language:m6,upload_avatar:g6,no_notifications:x6,mark_all_read:b6,simulated_notification:y6,welcome_back:v6,login:j6,email_login:w6,phone_login:A6,forgot_password:S6,signup:N6,services:E6,about_us:C6,contact:O6,categories:z6},T6={en:{translation:OA},hi:{translation:a6},te:{translation:k6}};ut.use(Qx).use(k4).init({resources:T6,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},detection:{order:["sessionStorage","localStorage","navigator","htmlTag","path","subdomain"],caches:["sessionStorage"],lookupSessionStorage:"language"}});const dg=sessionStorage.getItem("language");dg&&ut.changeLanguage(dg);function R6(){const{t:r}=H4(),[s,l]=w.useState(!1),[o,d]=w.useState(!1),[f,p]=w.useState(!1),[m,x]=w.useState(ut.language||"en"),h=mt(),b=w.useRef(null),y=w.useRef(null),E=w.useRef(null),S=[{code:"en",label:"English"},{code:"hi",label:"हिन्दी"},{code:"te",label:"తెలుగు"},{code:"ta",label:"தமிழ்"},{code:"mr",label:"मराठी"},{code:"bn",label:"বাংলা"},{code:"kn",label:"ಕನ್ನಡ"},{code:"ml",label:"മലയാളം"}],j=sessionStorage.getItem("userEmail")||"guest@agri.com";w.useEffect(()=>{const V=sessionStorage.getItem("language");V&&(ut.changeLanguage(V),x(V))},[]),w.useEffect(()=>{const V=re=>x(re);return ut.on("languageChanged",V),()=>ut.off("languageChanged",V)},[]),w.useEffect(()=>{function V(re){b.current&&!b.current.contains(re.target)&&l(!1),y.current&&!y.current.contains(re.target)&&p(!1),E.current&&!E.current.contains(re.target)&&o&&(re.target.closest&&re.target.closest(".hamburger-btn")||d(!1))}return document.addEventListener("mousedown",V),document.body.style.overflowX="hidden",()=>{document.removeEventListener("mousedown",V),document.body.style.overflowX=""}},[o]);const C=()=>{d(V=>!V),l(!1),p(!1)},z=()=>{sessionStorage.clear(),h("/login")},R=V=>{ut.changeLanguage(V),sessionStorage.setItem("language",V),x(V),p(!1)},M=V=>{R(V),d(!1)};return a.jsxs(a.Fragment,{children:[a.jsx("header",{className:"user-header","aria-hidden":"false",children:a.jsxs("nav",{className:"user-nav",children:[a.jsxs("div",{className:"left-group",children:[a.jsx("button",{"aria-label":o?"Close menu":"Open menu",className:"hamburger-btn",onClick:C,children:o?a.jsx(bm,{size:20}):a.jsx(Yy,{size:20})}),a.jsxs(oe,{to:"/",className:"user-logo","aria-label":"AgriTechPro home",children:[a.jsx("img",{src:"https://www.shutterstock.com/image-vector/agri-tech-leaf-logo-design-600nw-2388734381.jpg",alt:"AgriTechPro"}),a.jsx("span",{className:"brand-text",children:"AgriTechPro"})]})]}),a.jsx("div",{className:"center-group",children:a.jsxs("form",{className:"user-search",onSubmit:V=>V.preventDefault(),children:[a.jsx("input",{type:"text",placeholder:r?r("search_placeholder"):"Search for products, seeds, tools...","aria-label":"Search"}),a.jsx("button",{type:"submit","aria-label":"Search",children:r?r("search_button"):"Search"})]})}),a.jsxs("div",{className:"right-group",children:[a.jsxs("div",{className:"lang-desktop",ref:y,children:[a.jsxs("button",{className:"lang-btn",onClick:()=>p(V=>!V),"aria-haspopup":"true","aria-expanded":f,children:[a.jsx(_w,{size:16}),a.jsx("span",{className:"lang-code",children:m.toUpperCase()})," ▾"]}),f&&a.jsx("div",{className:"lang-dropdown",children:S.map(V=>a.jsx("div",{className:`lang-option ${m===V.code?"active":""}`,onClick:()=>R(V.code),children:V.label},V.code))})]}),a.jsxs(oe,{to:"/cart",className:"user-act-btn",title:"Cart",children:[a.jsx(Ad,{size:20}),a.jsx("span",{className:"icon-label",children:r?r("cart"):"Cart"})]}),a.jsxs(oe,{to:"/orders",className:"user-act-btn",title:"Orders",children:[a.jsx(mm,{size:20}),a.jsx("span",{className:"icon-label",children:r?r("orders"):"Orders"})]}),a.jsxs(oe,{to:"/wishlist",className:"user-act-btn",title:"Wishlist",children:[a.jsx(gm,{size:20}),a.jsx("span",{className:"icon-label",children:r?r("wishlist"):"Wishlist"})]}),a.jsxs("div",{className:"profile-box",ref:b,children:[a.jsx("button",{className:"profile-btn",onClick:()=>l(V=>!V),"aria-haspopup":"true","aria-expanded":s,title:"Profile",children:a.jsx(ym,{size:26})}),s&&a.jsxs("div",{className:"profile-dropdown",role:"menu",children:[a.jsx("p",{className:"profile-email",children:j}),a.jsx(oe,{to:"/user/profile",className:"profile-item",children:"My Profile"}),a.jsx(oe,{to:"/orders",className:"profile-item",children:"My Orders"}),a.jsx(oe,{to:"/cart",className:"profile-item",children:"My Cart"}),a.jsx(oe,{to:"/services",className:"profile-item",children:"Services"}),a.jsx(oe,{to:"/about",className:"profile-item",children:"About Us"}),a.jsx(oe,{to:"/contact",className:"profile-item",children:"Contact"}),a.jsxs("button",{onClick:z,className:"logout-btn",children:[a.jsx(xm,{})," Logout"]})]})]})]})]})}),a.jsx("aside",{className:`mobile-drawer ${o?"open":""}`,ref:E,"aria-hidden":!o,children:a.jsxs("div",{className:"drawer-inner",children:[a.jsxs("div",{className:"drawer-top",children:[a.jsxs(oe,{to:"/",className:"drawer-logo",onClick:()=>d(!1),children:[a.jsx("img",{src:"https://www.shutterstock.com/image-vector/agri-tech-leaf-logo-design-600nw-2388734381.jpg",alt:"logo"}),a.jsx("span",{children:"AgriTechPro"})]}),a.jsx("button",{className:"drawer-close",onClick:()=>d(!1),"aria-label":"Close menu",children:a.jsx(bm,{size:18})})]}),a.jsxs("nav",{className:"drawer-nav",children:[a.jsxs(oe,{to:"/",className:"drawer-link",onClick:()=>d(!1),children:[a.jsx(Ky,{})," Home"]}),a.jsxs(oe,{to:"/services",className:"drawer-link",onClick:()=>d(!1),children:[a.jsx(Xy,{})," Services"]}),a.jsxs(oe,{to:"/about",className:"drawer-link",onClick:()=>d(!1),children:[a.jsx(Py,{})," About Us"]}),a.jsxs(oe,{to:"/contact",className:"drawer-link",onClick:()=>d(!1),children:[a.jsx(Zy,{})," Contact"]}),a.jsx("div",{className:"drawer-divider"}),a.jsxs(oe,{to:"/cart",className:"drawer-link",onClick:()=>d(!1),children:[a.jsx(Ad,{})," Cart"]}),a.jsxs(oe,{to:"/orders",className:"drawer-link",onClick:()=>d(!1),children:[a.jsx(mm,{})," Orders"]}),a.jsxs(oe,{to:"/wishlist",className:"drawer-link",onClick:()=>d(!1),children:[a.jsx(gm,{})," Wishlist"]}),a.jsx("div",{className:"drawer-divider"}),a.jsx("div",{className:"drawer-subtitle",children:"Language"}),a.jsx("div",{className:"drawer-langs",children:S.map(V=>a.jsx("button",{className:`drawer-lang-btn ${m===V.code?"active":""}`,onClick:()=>M(V.code),children:V.label},V.code))}),a.jsx("div",{className:"drawer-divider"}),a.jsxs("div",{className:"drawer-profile",children:[a.jsxs("div",{className:"drawer-profile-top",children:[a.jsx(ym,{size:36}),a.jsxs("div",{style:{marginLeft:12},children:[a.jsx("div",{style:{fontWeight:700},children:j}),a.jsx("div",{style:{fontSize:13,color:"#666"},children:"Member since 2024"})]})]}),a.jsxs("div",{className:"drawer-profile-links",children:[a.jsx(oe,{to:"/user/profile",onClick:()=>d(!1),children:"My Profile"}),a.jsx(oe,{to:"/orders",onClick:()=>d(!1),children:"My Orders"}),a.jsx(oe,{to:"/support",onClick:()=>d(!1),children:"Support"}),a.jsxs("button",{className:"drawer-logout",onClick:()=>{z(),d(!1)},children:[a.jsx(xm,{})," Logout"]})]})]})]})]})}),a.jsx("div",{className:`drawer-overlay ${o?"visible":""}`,onClick:()=>d(!1)}),a.jsx("style",{children:`
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
      `})]})}function M6(){return a.jsxs("div",{children:[a.jsx(ax,{}),a.jsx(nx,{}),a.jsx(fx,{}),a.jsx(hx,{}),a.jsx(rx,{}),a.jsx(gx,{}),a.jsx(lx,{}),a.jsx(cx,{}),a.jsx(mx,{}),a.jsx(es,{})]})}const B6=()=>{const[r,s]=w.useState(""),[l,o]=w.useState("All"),[d,f]=w.useState("default"),[p,m]=w.useState(1),x=12,h=["All",...new Set(Gn.map(S=>S.brand))];let b=Gn.filter(S=>S.name.toLowerCase().includes(r.toLowerCase()));l!=="All"&&(b=b.filter(S=>S.brand===l)),d==="low"&&b.sort((S,j)=>S.price-j.price),d==="high"&&b.sort((S,j)=>j.price-S.price),d==="rating"&&b.sort((S,j)=>j.rating-S.rating);const y=Math.ceil(b.length/x),E=b.slice((p-1)*x,p*x);return a.jsxs("div",{className:"fert-page",children:[a.jsx("h2",{className:"fert-title",children:"Fertilizers"}),a.jsxs("div",{className:"fert-filters",children:[a.jsx("input",{placeholder:"Search Fertilizers...",value:r,onChange:S=>s(S.target.value)}),a.jsx("select",{value:l,onChange:S=>o(S.target.value),children:h.map((S,j)=>a.jsx("option",{children:S},j))}),a.jsxs("select",{value:d,onChange:S=>f(S.target.value),children:[a.jsx("option",{value:"default",children:"Sort"}),a.jsx("option",{value:"low",children:"Price Low → High"}),a.jsx("option",{value:"high",children:"Price High → Low"}),a.jsx("option",{value:"rating",children:"Rating"})]})]}),a.jsx("div",{className:"fert-grid",children:E.map(S=>a.jsx(sx,{item:S},S.id))}),a.jsxs("div",{className:"fert-pagination",children:[a.jsx("button",{disabled:p===1,onClick:()=>m(p-1),children:"⟵ Prev"}),a.jsxs("span",{children:["Page ",p," of ",y]}),a.jsx("button",{disabled:p===y,onClick:()=>m(p+1),children:"Next ⟶"})]}),a.jsx("style",{children:`
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
      `})]})};function D6(){const[r,s]=w.useState([]),[l,o]=w.useState(""),[d,f]=w.useState(0),[p,m]=w.useState([]),[x,h]=w.useState([]);w.useEffect(()=>{const M=JSON.parse(localStorage.getItem("agri_cart"))||[];s(M)},[]);const b=(M,V)=>{const re=r.map($=>{if($.id===M){const ce=V==="inc"?$.quantity+1:$.quantity-1;return{...$,quantity:ce>1?ce:1}}return $});s(re),localStorage.setItem("agri_cart",JSON.stringify(re))},y=M=>{const V=r.filter(re=>re.id!==M);s(V),localStorage.setItem("agri_cart",JSON.stringify(V))},E=()=>{l==="FARM10"?f(10):l==="FARM20"?f(20):(f(0),alert("Invalid Coupon"))},S=M=>{m([...p,M]),y(M.id)},j=M=>{h([...x,M])},C=r.reduce((M,V)=>M+V.price*V.quantity,0),z=C-C*d/100,R=()=>{const M=new Date;return M.setDate(M.getDate()+4),M.toDateString()};return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"cart-wrapper",children:[a.jsx("style",{children:`
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
      `}),a.jsx("div",{className:"info-bar",children:"🛒 Items in your cart are not reserved — checkout soon!"}),a.jsxs("h1",{className:"cart-title",children:[a.jsx(fw,{})," Your Cart"]}),r.length===0?a.jsx("h2",{children:"Your cart is empty."}):a.jsxs("div",{className:"cart-grid",children:[a.jsx("div",{children:r.map(M=>a.jsxs("div",{className:"cart-card",children:[a.jsx("img",{src:M.image,alt:M.name}),a.jsxs("div",{style:{flex:1},children:[a.jsx("h3",{style:{fontSize:18,fontWeight:"bold"},children:M.name}),a.jsxs("p",{children:["₹",M.price]}),a.jsxs("p",{style:{color:"green",display:"flex",gap:6},children:[a.jsx(eu,{size:16})," Delivery by ",R()]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginTop:"10px"},children:[a.jsx("button",{className:"qty-btn",onClick:()=>b(M.id,"dec"),children:a.jsx(Ij,{size:15})}),a.jsx("span",{style:{fontWeight:"bold",fontSize:18},children:M.quantity}),a.jsx("button",{className:"qty-btn",onClick:()=>b(M.id,"inc"),children:a.jsx(rw,{size:15})})]}),a.jsxs("div",{style:{display:"flex",gap:"15px",marginTop:"12px"},children:[a.jsxs("button",{onClick:()=>S(M),style:{color:"blue"},children:[a.jsx(vj,{size:16})," Save for Later"]}),a.jsxs("button",{onClick:()=>j(M),style:{color:"crimson"},children:[a.jsx(qj,{size:16})," Wishlist"]})]})]}),a.jsx("button",{className:"delete-btn",onClick:()=>y(M.id),children:a.jsx($d,{})})]},M.id))}),a.jsxs("div",{className:"summary-box",children:[a.jsx("h2",{style:{fontSize:22,fontWeight:"bold"},children:"Price Details"}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Subtotal"}),a.jsxs("span",{children:["₹",C]})]}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Delivery"}),a.jsx("span",{style:{color:"green"},children:"FREE"})]}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Discount"}),a.jsxs("span",{children:["- ",d,"%"]})]}),a.jsx("hr",{}),a.jsxs("div",{className:"summary-row",style:{fontWeight:"bold",fontSize:18},children:[a.jsx("span",{children:"Total"}),a.jsxs("span",{children:["₹",z]})]}),a.jsxs("div",{className:"coupon-box",children:[a.jsx("input",{className:"coupon-input",placeholder:"Enter coupon",value:l,onChange:M=>o(M.target.value)}),a.jsx("button",{className:"coupon-btn",onClick:E,children:"Apply"})]}),a.jsx("button",{className:"checkout-btn",children:"Pay with Razorpay ▶"})]})]}),a.jsx(oe,{className:"continue-btn",to:"/userdashboard",children:"← Continue Shopping"}),a.jsxs("div",{className:"extra-info",children:[a.jsx("h3",{style:{fontSize:20,fontWeight:"bold"},children:"Why shop with AgriFarm?"}),a.jsxs("ul",{style:{lineHeight:"28px",marginTop:8},children:[a.jsx("li",{children:"✔ Trusted suppliers"}),a.jsx("li",{children:"✔ Easy 7-day returns"}),a.jsx("li",{children:"✔ Real-time order tracking"}),a.jsx("li",{children:"✔ Bulk discounts for farmers"}),a.jsx("li",{children:"✔ 24/7 support"})]})]}),a.jsxs("div",{className:"suggest-section",children:[a.jsx("h3",{style:{fontSize:22,fontWeight:"bold"},children:"Recommended for You"}),a.jsxs("div",{style:{display:"flex",gap:"20px",overflowX:"auto",paddingTop:10},children:[a.jsxs("div",{className:"suggest-item",children:[a.jsx("img",{src:"https://m.media-amazon.com/images/I/71jTQtFCtUL._SL1500_.jpg",alt:"Irrigation Kit"}),a.jsx("p",{children:a.jsx("b",{children:"Drip Irrigation Kit"})}),a.jsx("p",{style:{color:"green"},children:"₹1499"})]}),a.jsxs("div",{className:"suggest-item",children:[a.jsx("img",{src:"https://m.media-amazon.com/images/I/71JFZ8tL4xL.jpg",alt:"Fertilizer"}),a.jsx("p",{children:a.jsx("b",{children:"Organic Fertilizer"})}),a.jsx("p",{style:{color:"green"},children:"₹450"})]}),a.jsxs("div",{className:"suggest-item",children:[a.jsx("img",{src:"https://www.bigbasket.com/media/uploads/p/xxl/40120007-2_3-seeds-corn-hybrid.jpg",alt:"Corn Seeds"}),a.jsx("p",{children:a.jsx("b",{children:"Corn Hybrid Seeds"})}),a.jsx("p",{style:{color:"green"},children:"₹320"})]})]})]})]})})}function L6(){const r=[{id:"ORD12345",date:"Feb 20, 2025",deliveryDate:"Feb 25, 2025",status:"Delivered",progress:4,products:[{name:"Organic Fertilizer – 5 KG",price:450,img:"https://m.media-amazon.com/images/I/71JFZ8tL4xL.jpg"}]},{id:"ORD67890",date:"Feb 24, 2025",deliveryDate:"Expected Mar 02, 2025",status:"Out for Delivery",progress:3,products:[{name:"Hybrid Maize Seeds – 1 KG",price:320,img:"https://www.bigbasket.com/media/uploads/p/xxl/40120007-2_3-seeds-corn-hybrid.jpg"}]}];return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"orders-wrapper",children:[a.jsx("style",{children:`
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
      `}),a.jsx("h1",{className:"orders-title",children:"Your Orders"}),r.map(s=>a.jsxs("div",{className:"order-card",children:[a.jsxs("div",{className:"order-header",children:[a.jsxs("p",{className:"order-id",children:["Order ID: ",s.id]}),a.jsxs("p",{className:"order-date",children:["Ordered on: ",s.date]})]}),s.products.map((l,o)=>a.jsxs("div",{className:"product-row",children:[a.jsx("img",{src:l.img,className:"product-img",alt:""}),a.jsxs("div",{children:[a.jsx("p",{className:"product-name",children:l.name}),a.jsxs("p",{className:"price",children:["₹",l.price]}),a.jsxs("p",{className:`status-tag ${s.status.toLowerCase().replace(/ /g,"-")}`,children:["Status: ",s.status]}),a.jsxs("p",{style:{color:"#333",marginTop:4},children:["Delivery: ",a.jsx("b",{children:s.deliveryDate})]})]})]},o)),a.jsxs("div",{className:"progress-bar",children:[a.jsx("div",{className:"progress-line"}),a.jsx(Cx,{className:`progress-step ${s.progress>=1?"active-step":""}`}),a.jsx(Bj,{className:`progress-step ${s.progress>=2?"active-step":""}`}),a.jsx(eu,{className:`progress-step ${s.progress>=3?"active-step":""}`}),a.jsx(Jd,{className:`progress-step ${s.progress>=4?"active-step":""}`})]}),a.jsxs("div",{className:"btn-row",children:[a.jsx(oe,{to:`/track-order/${s.id}`,className:"btn btn-track",children:"Track Order"}),a.jsx(oe,{to:`/product/${s.id}`,className:"btn btn-reorder",children:"Reorder"}),a.jsx(oe,{to:`/invoice/${s.id}`,className:"btn btn-invoice",children:"Download Invoice"}),a.jsxs(oe,{to:"/support",className:"btn btn-support",children:[a.jsx(Pj,{size:16})," Support"]}),a.jsx(oe,{to:"/userdashboard",className:"btn continue-shopping",children:"← Continue Shopping"})]})]},s.id))]})})}function U6(){const r={id:"ORD12345",productName:"Organic Fertilizer – 5 KG",img:"https://m.media-amazon.com/images/I/71JFZ8tL4xL.jpg",price:450,orderedOn:"Feb 20, 2025",estimated:"Feb 25, 2025",status:4,address:{name:"Ramesh Kumar",phone:"9876543210",street:"Plot 22, Green Valley",village:"Madha Village",district:"Nellore",state:"Andhra Pradesh",pincode:"524101"}},s=[{id:1,label:"Ordered",icon:a.jsx(_d,{size:22})},{id:2,label:"Packed",icon:a.jsx(Cx,{size:22})},{id:3,label:"Shipped",icon:a.jsx(eu,{size:22})},{id:4,label:"Out for Delivery",icon:a.jsx(Lj,{size:22})},{id:5,label:"Delivered",icon:a.jsx(Jd,{size:22})}];return a.jsxs("div",{className:"track-wrapper",children:[a.jsx("style",{children:`
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
      `}),a.jsx("h1",{className:"title",children:"Track Your Order"}),a.jsxs("div",{className:"order-card",children:[a.jsxs("div",{className:"product-row",children:[a.jsx("img",{src:r.img,className:"product-img"}),a.jsxs("div",{children:[a.jsx("p",{className:"product-name",children:r.productName}),a.jsxs("p",{className:"price",children:["₹",r.price]}),a.jsxs("p",{style:{color:"#666",marginTop:6},children:["Order ID: ",r.id]}),a.jsxs("p",{style:{color:"#666"},children:["Ordered on: ",r.orderedOn]}),a.jsxs("p",{style:{color:"green",marginTop:4},children:["Estimated Delivery: ",a.jsx("b",{children:r.estimated})]})]})]}),a.jsxs("div",{className:"timeline",children:[a.jsx("div",{className:"line"}),s.map(l=>a.jsxs("div",{className:"step",children:[a.jsx("div",{className:`step-icon ${r.status>=l.id?"step-active":""}`,children:l.icon}),a.jsx("p",{style:{fontSize:17,fontWeight:r.status>=l.id?"bold":"normal"},children:l.label})]},l.id))]})]}),a.jsxs("div",{className:"address-box",children:[a.jsx("p",{className:"address-title",children:"Delivery Address"}),a.jsx("p",{className:"address-line",children:a.jsx("b",{children:r.address.name})}),a.jsxs("p",{className:"address-line",children:[a.jsx(Ox,{size:15})," ",r.address.phone]}),a.jsx("p",{className:"address-line",children:r.address.street}),a.jsx("p",{className:"address-line",children:r.address.village}),a.jsxs("p",{className:"address-line",children:[r.address.district,", ",r.address.state," - ",r.address.pincode]})]}),a.jsxs("div",{className:"summary-box",children:[a.jsx("p",{className:"summary-title",children:"Order Summary"}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Item Price"})," ",a.jsxs("span",{children:["₹",r.price]})]}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Delivery"})," ",a.jsx("span",{style:{color:"green"},children:"FREE"})]}),a.jsx("hr",{}),a.jsxs("div",{className:"summary-row",style:{fontWeight:"bold",fontSize:18},children:[a.jsx("span",{children:"Total Paid"})," ",a.jsxs("span",{children:["₹",r.price]})]})]})]})}function H6(){const r=[{id:1,name:"Organic Fertilizer 5KG",price:450,mrp:699,discount:"35% off",img:"https://m.media-amazon.com/images/I/71JFZ8tL4xL.jpg"},{id:2,name:"Hybrid Maize Seeds 1KG",price:320,mrp:420,discount:"24% off",img:"https://www.bigbasket.com/media/uploads/p/xxl/40120007-2_3-seeds-corn-hybrid.jpg"}];return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"wishlist-wrapper",children:[a.jsx("style",{children:`
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
      `}),a.jsx("h1",{className:"title",children:"My Wishlist"}),r.length===0&&a.jsxs("div",{className:"empty-box",children:[a.jsx(Fy,{className:"empty-icon"}),a.jsx("p",{className:"empty-title",children:"Your Wishlist is Empty"}),a.jsx("p",{className:"empty-sub",children:"Save items you love and buy them anytime."}),a.jsx(oe,{to:"/products",className:"start-shopping",children:"Start Shopping"})]}),a.jsx("div",{className:"wishlist-grid",children:r.map(s=>a.jsxs("div",{className:"wish-card",children:[a.jsx("img",{src:s.img,alt:s.name,className:"wish-img"}),a.jsx("p",{className:"wish-name",children:s.name}),a.jsxs("div",{className:"price-box",children:[a.jsxs("span",{className:"price",children:["₹",s.price]}),a.jsxs("span",{className:"mrp",children:["₹",s.mrp]}),a.jsx("span",{className:"discount",children:s.discount})]}),a.jsxs("div",{className:"btn-row",children:[a.jsxs("button",{className:"btn btn-cart",children:[a.jsx(Ad,{})," Add to Cart"]}),a.jsxs("button",{className:"btn btn-remove",children:[a.jsx(Iy,{})," Remove"]})]})]},s.id))})]})})}function V6(){const r=da(),[s,l]=w.useState(sessionStorage.getItem("auth")==="true");w.useEffect(()=>{l(sessionStorage.getItem("auth")==="true");const d=f=>{f.key==="auth"&&l(f.newValue==="true")};return window.addEventListener("storage",d),()=>window.removeEventListener("storage",d)},[r]);const o=r.pathname;return o.startsWith("/admin")||o.startsWith("/vendor")?null:s?a.jsx(R6,{}):a.jsx(qd,{})}function q6(){const r=mt(),s=JSON.parse(localStorage.getItem("buyNowItem"));if(!s)return a.jsx("h1",{style:{padding:"40px",textAlign:"center"},children:"No product selected for Buy Now"});const[l,o]=w.useState([{id:1,name:"Sai Shashank",phone:"9876543210",address:"D.No: 1-22, Near Bus Stand, Hyderabad",pin:"500001"}]),[d,f]=w.useState(l[0]?.id||null),[p,m]=w.useState(!1),[x,h]=w.useState({name:"",phone:"",address:"",pin:""}),b=()=>{if(!x.name||!x.phone||!x.address||!/^\d{6}$/.test(x.pin)){alert("❗ Please fill all fields correctly.");return}const y={id:Date.now(),...x};o([...l,y]),f(y.id),m(!1),h({name:"",phone:"",address:"",pin:""})};return a.jsxs("div",{className:"buy-container",children:[a.jsx("h2",{className:"page-title",children:"Buy Now"}),a.jsxs("div",{className:"section",children:[a.jsx("h3",{children:"Product Details"}),a.jsxs("div",{className:"buy-card",children:[a.jsx("img",{src:s.image,alt:"",className:"product-img"}),a.jsxs("div",{children:[a.jsx("h3",{children:s.name}),a.jsxs("p",{className:"price",children:["₹",s.price]}),a.jsxs("p",{className:"mrp",children:["M.R.P: ₹",s.mrp]})]})]})]}),a.jsxs("div",{className:"section",children:[a.jsx("h3",{children:"Delivery Address"}),l.map(y=>a.jsxs("label",{className:"address-box",children:[a.jsx("input",{type:"radio",name:"address",checked:d===y.id,onChange:()=>f(y.id)}),a.jsxs("div",{children:[a.jsx("strong",{children:y.name})," (",y.phone,")",a.jsx("br",{}),y.address," — ",y.pin]})]},y.id)),a.jsx("button",{className:"add-address-btn",onClick:()=>m(!0),children:"+ Add New Address"})]}),a.jsx("button",{className:"confirm-btn",onClick:()=>{if(!d){alert("Please select a delivery address");return}const y=l.find(E=>E.id===d);localStorage.setItem("selectedAddress",JSON.stringify(y)),r("/payment")},children:"Proceed to Payment →"}),p&&a.jsx("div",{className:"modal-overlay",children:a.jsxs("div",{className:"modal",children:[a.jsx("h3",{children:"Add New Address"}),a.jsx("input",{type:"text",placeholder:"Full Name",value:x.name,onChange:y=>h({...x,name:y.target.value})}),a.jsx("input",{type:"text",placeholder:"Phone Number",value:x.phone,onChange:y=>h({...x,phone:y.target.value})}),a.jsx("textarea",{placeholder:"Full Address",value:x.address,onChange:y=>h({...x,address:y.target.value})}),a.jsx("input",{type:"text",placeholder:"PIN Code",value:x.pin,onChange:y=>h({...x,pin:y.target.value})}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"save-btn",onClick:b,children:"Save Address"}),a.jsx("button",{className:"close-btn",onClick:()=>m(!1),children:"Cancel"})]})]})}),a.jsx("style",{children:`
        
.buy-container {
          max-width: 900px;
          margin: auto;
          padding: 20px;
          font-family: Inter, sans-serif;
        }

        .page-title {
          text-align: center;
          font-size: 26px;
          margin-bottom: 20px;
          color: #1b5e20;
        }

        .section {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 3px 12px rgba(0,0,0,0.1);
          margin-bottom: 20px;
        }

        .buy-card {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .product-img {
          width: 160px;
          height: 160px;
          object-fit: contain;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 10px;
          background: #fafafa;
        }

        .price {
          font-size: 20px;
          color: #2e7d32;
          font-weight: bold;
        }

        .mrp {
          text-decoration: line-through;
          color: #777;
        }

        .address-box {
          display: flex;
          gap: 12px;
          padding: 12px;
          margin-top: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          cursor: pointer;
        }

        .address-box:hover {
          border-color: #1b5e20;
        }

        .add-address-btn {
          margin-top: 12px;
          background: #f1f8e9;
          border: 1px solid #4caf50;
          padding: 10px 14px;
          border-radius: 8px;
          cursor: pointer;
          color: #2e7d32;
          font-weight: 600;
        }

        .confirm-btn {
          width: 100%;
          padding: 14px;
          font-size: 18px;
          color: white;
          background: #2e7d32;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 20px;
          font-weight: bold;
        }

        .confirm-btn:hover {
          background: #1b5e20;
        }

        /* MODAL */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }

        .modal {
          background: #fff;
          padding: 25px;
          width: 420px;
          border-radius: 10px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.2);
        }

        .modal input,
        .modal textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          margin: 8px 0;
        }

        .modal-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
        }

        .save-btn {
          background: #2e7d32;
          color: white;
          padding: 10px 18px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .close-btn {
          background: #ccc;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
        }


      `})]})}function G6(){const r=JSON.parse(localStorage.getItem("buyNowItem")),s=JSON.parse(localStorage.getItem("selectedBuyAddress")),[l,o]=w.useState("preferred");if(!r)return a.jsx("h2",{style:{padding:"40px",textAlign:"center"},children:"No product found for payment"});const d=15.52,f=1,p=r.price+d+f;return a.jsxs("div",{className:"payment-page",children:[a.jsxs("div",{className:"payment-layout",children:[a.jsxs("div",{className:"payment-left",children:[a.jsx("h3",{className:"section-title",children:"Payment Options"}),a.jsxs("div",{className:`payment-option ${l==="preferred"?"active":""}`,onClick:()=>o("preferred"),children:[a.jsx("i",{className:"icon",children:"👤"})," Preferred Payments"]}),a.jsxs("div",{className:`payment-option ${l==="upi"?"active":""}`,onClick:()=>o("upi"),children:[a.jsx("i",{className:"icon",children:"💳"})," Pay by UPI"]}),a.jsxs("div",{className:`payment-option ${l==="card"?"active":""}`,onClick:()=>o("card"),children:[a.jsx("i",{className:"icon",children:"💳"})," Debit / Credit Card"]}),a.jsxs("div",{className:`payment-option ${l==="wallet"?"active":""}`,onClick:()=>o("wallet"),children:[a.jsx("i",{className:"icon",children:"📱"})," Mobile Wallets"]}),a.jsxs("div",{className:`payment-option ${l==="netbank"?"active":""}`,onClick:()=>o("netbank"),children:[a.jsx("i",{className:"icon",children:"🏦"})," Net Banking"]}),a.jsxs("div",{className:`payment-option ${l==="paylater"?"active":""}`,onClick:()=>o("paylater"),children:[a.jsx("i",{className:"icon",children:"⏳"})," Pay Later"]})]}),a.jsxs("div",{className:"payment-right",children:[a.jsx("h3",{className:"summary-title",children:r.name}),a.jsxs("div",{className:"summary-box",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Price:"})," ₹",r.price]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Convenience Fee:"})," ₹",d.toFixed(2)]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Support Farmers Donation:"})," ₹",f.toFixed(2),a.jsx("span",{className:"add-link",children:" (Auto-added)"})]}),a.jsx("hr",{}),a.jsxs("h3",{className:"total",children:["Order Total: ₹",p.toFixed(2)]})]}),a.jsxs("div",{className:"summary-box",children:[a.jsx("h4",{children:"Shipping Details"}),a.jsxs("p",{children:[a.jsx("strong",{children:s?.name})," — ",s?.phone,a.jsx("br",{}),s?.address,", ",s?.pin]})]}),a.jsxs("button",{className:"pay-btn",onClick:()=>{window.location.href="/AgriTechUl/order-success"},children:["Pay ₹",p.toFixed(2)]})]})]}),a.jsx("style",{children:`
        .payment-page {
          max-width: 1100px;
          margin: auto;
          padding: 20px;
          font-family: Inter, sans-serif;
        }

        .payment-layout {
          display: flex;
          gap: 20px;
        }

        /* LEFT MENU */
        .payment-left {
          width: 30%;
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 3px 12px rgba(0,0,0,0.1);
        }

        .section-title {
          margin-bottom: 15px;
          font-size: 18px;
          font-weight: 700;
        }

        .payment-option {
          padding: 14px;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
        }

        .payment-option.active {
          background: #e8f5e9;
          border-left: 4px solid #2e7d32;
          font-weight: 700;
        }

        .icon {
          font-size: 20px;
        }

        /* RIGHT SUMMARY */
        .payment-right {
          width: 70%;
        }

        .summary-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #1b5e20;
        }

        .summary-box {
          background: #fff;
          padding: 18px;
          margin-bottom: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .total {
          color: #2e7d32;
          margin-top: 10px;
        }

        .add-link {
          font-size: 12px;
          color: #777;
        }

        .pay-btn {
          width: 100%;
          padding: 15px;
          background: #2e7d32;
          color: white;
          font-size: 18px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 10px;
        }

        .pay-btn:hover {
          background: #1b5e20;
        }

        @media(max-width: 900px) {
          .payment-layout {
            flex-direction: column;
          }
          .payment-left, .payment-right {
            width: 100%;
          }
        }
      `})]})}function Q6(){const r=mt(),s=JSON.parse(localStorage.getItem("buyNowItem")),l=JSON.parse(localStorage.getItem("selectedBuyAddress")),o="ORD"+Math.floor(1e5+Math.random()*9e5),d=new Date,f=new Date(d.setDate(d.getDate()+5)).toDateString();w.useEffect(()=>{s||r("/")},[]);const p=()=>{const m=`
      Order Invoice
      -----------------------
      Order ID: ${o}
      Product: ${s?.name}
      Amount: ₹${s?.price}
      Delivery Address: ${l?.address}, ${l?.pin}
    `,x=new Blob([m],{type:"text/plain"}),h=document.createElement("a");h.href=URL.createObjectURL(x),h.download=`Invoice-${o}.txt`,h.click()};return a.jsxs("div",{className:"success-page",children:[a.jsxs("div",{className:"success-card",children:[a.jsx("div",{className:"tick-wrapper",children:a.jsx("div",{className:"tick-circle",children:a.jsx("div",{className:"tick-mark"})})}),a.jsx("h1",{className:"success-title",children:"Order Confirmed!"}),a.jsx("p",{className:"success-message",children:"Thank you for shopping with AgriTechPro. Your order is confirmed and being processed."}),a.jsxs("div",{className:"summary-box",children:[a.jsx("h3",{children:"Order Details"}),a.jsxs("p",{children:[a.jsx("strong",{children:"Order ID:"})," ",o]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Expected Delivery:"})," ",f]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Shipping Status:"})," Confirmed"]}),a.jsxs("div",{className:"order-item",children:[a.jsx("img",{src:s?.image,alt:""}),a.jsxs("div",{children:[a.jsx("p",{className:"item-name",children:s?.name}),a.jsxs("p",{className:"item-price",children:["₹",s?.price]})]})]}),a.jsx("hr",{}),a.jsxs("div",{className:"address-block",children:[a.jsx("h4",{children:"Delivering To:"}),a.jsxs("p",{children:[a.jsx("strong",{children:l?.name})," — ",l?.phone," ",a.jsx("br",{}),l?.address,", ",l?.pin]})]}),a.jsx("hr",{}),a.jsxs("div",{className:"small-btns",children:[a.jsx("button",{className:"invoice-btn",onClick:p,children:"Download Invoice"}),a.jsx("button",{className:"cancel-btn",onClick:()=>alert("Order cancel request submitted"),children:"Cancel Order"})]})]}),a.jsxs("div",{className:"support-box",children:[a.jsx("h3",{children:"Customer Support"}),a.jsx("p",{children:"If you need help with your order, our support team is available."}),a.jsxs("div",{className:"support-info",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"📞 Phone:"})," +91 98765 43210"]}),a.jsxs("p",{children:[a.jsx("strong",{children:"📧 Email:"})," support@agritechpro.com"]}),a.jsxs("p",{children:[a.jsx("strong",{children:"🕒 Support Hours:"})," 9:00 AM – 7:00 PM"]})]}),a.jsxs("div",{className:"support-btns",children:[a.jsx("button",{className:"support-call",onClick:()=>window.location.href="tel:+919876543210",children:"Call Support"}),a.jsx("button",{className:"support-email",onClick:()=>window.location.href="mailto:support@agritechpro.com",children:"Email Support"}),a.jsx("button",{className:"support-whatsapp",onClick:()=>window.open("https://wa.me/919876543210","_blank"),children:"WhatsApp Chat"})]})]}),a.jsxs("div",{className:"btn-row",children:[a.jsx("button",{className:"continue-btn",onClick:()=>r("/"),children:"Continue Shopping"}),a.jsx("button",{className:"orders-btn",onClick:()=>r("/userdashboard/orders"),children:"View My Orders"})]})]}),a.jsx("style",{children:`
        .success-page {
          display: flex;
          justify-content: center;
          padding: 40px 20px;
          font-family: Inter, sans-serif;
        }

        .success-card {
          max-width: 650px;
          width: 100%;
          background: #fff;
          padding: 40px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
        }

        .success-title {
          color: #1b5e20;
        }

        .success-message {
          color: #555;
          margin-bottom: 20px;
        }

        .summary-box {
          text-align: left;
          padding: 20px;
          border: 1px solid #eee;
          border-radius: 12px;
          background: #fafafa;
          margin-bottom: 25px;
        }

        .order-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .order-item img {
          width: 70px;
          height: 70px;
          border-radius: 10px;
          object-fit: contain;
          border: 1px solid #ddd;
        }

        .item-name { font-weight: 600; }
        .item-price { color: #2e7d32; font-weight: 700; }

        .small-btns {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
        }

        .invoice-btn, .cancel-btn {
          padding: 10px 12px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          border: none;
        }

        .invoice-btn {
          background: #2e7d32;
          color: white;
        }

        .invoice-btn:hover { background: #1b5e20; }

        .cancel-btn {
          background: #ffdddd;
          color: #b30000;
        }

        .cancel-btn:hover { background: #ffcccc; }

        /* SUPPORT SECTION */
        .support-box {
          padding: 20px;
          background: #e8f5e9;
          border-left: 4px solid #2e7d32;
          border-radius: 12px;
          margin-bottom: 25px;
          text-align: left;
        }

        .support-info p { margin: 5px 0; }

        .support-btns {
          display: flex;
          gap: 10px;
          margin-top: 12px;
          flex-wrap: wrap;
        }

        .support-call,
        .support-email,
        .support-whatsapp {
          padding: 10px 14px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          color: #fff;
        }

        .support-call { background: #2e7d32; }
        .support-email { background: #1565c0; }
        .support-whatsapp { background: #25d366; }

        .btn-row {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .continue-btn, .orders-btn {
          padding: 12px 20px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
        }

        .continue-btn { background: #2e7d32; color: white; }
        .orders-btn { background: #ddd; }

        /* Tick Animation */
        .tick-wrapper {
          display: flex;
          justify-content: center;
        }

        .tick-circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #e8f5e9;
          border: 4px solid #2e7d32;
          position: relative;
          animation: pop 0.4s ease;
        }

        .tick-mark {
          width: 28px;
          height: 55px;
          border-bottom: 5px solid #2e7d32;
          border-right: 5px solid #2e7d32;
          transform: rotate(45deg);
          position: absolute;
          top: 10px;
          left: 28px;
          animation: drawTick 0.5s ease forwards;
          opacity: 0;
        }

        @keyframes drawTick {
          to { opacity: 1; transform: rotate(45deg) scale(1); }
        }

        @keyframes pop {
          0% { transform: scale(0.5); }
          100% { transform: scale(1); }
        }

      `})]})}function Y6(){return a.jsxs(a.Fragment,{children:[a.jsx(V6,{}),a.jsxs(iy,{children:[a.jsx(Ae,{path:"/",element:a.jsx(Pv,{})}),a.jsx(Ae,{path:"/login",element:a.jsx(zv,{})}),a.jsx(Ae,{path:"/register",element:a.jsx(kv,{})}),a.jsx(Ae,{path:"/contact",element:a.jsx(fd,{})}),a.jsx(Ae,{path:"/services",element:a.jsx(pd,{})}),a.jsx(Ae,{path:"/about",element:a.jsx(hd,{})}),a.jsx(Ae,{path:"/category/vegetable-seeds",element:a.jsx(Jv,{})}),a.jsx(Ae,{path:"/seeds/:id",element:a.jsx(Wv,{})}),a.jsx(Ae,{path:"/fertilizers/:id",element:a.jsx($v,{})}),a.jsx(Ae,{path:"/category/fertilizers",element:a.jsx(B6,{})}),a.jsx(Ae,{path:"/category/farm-machinery",element:a.jsx(tj,{})}),a.jsx(Ae,{path:"/HeroBannerSlider/vegetable-seeds-info",element:a.jsx(Zv,{})}),a.jsx(Ae,{path:"/HeroBannerSlider/fertilizers-info",element:a.jsx(Iv,{})}),a.jsx(Ae,{path:"/HeroBannerSlider/machinery-info",element:a.jsx(Xv,{})}),a.jsx(Ae,{path:"/machinery/:id",element:a.jsx(Ww,{})}),a.jsx(Ae,{path:"/category/offers-today",element:a.jsx(Fv,{})}),a.jsx(Ae,{path:"/best-selling",element:a.jsx(nj,{})}),a.jsx(Ae,{path:"/vendor-login",element:a.jsx(oj,{})}),a.jsx(Ae,{path:"/vendor-register",element:a.jsx(cj,{})}),a.jsxs(Ae,{path:"/vendor",element:a.jsx(Bw,{}),children:[a.jsx(Ae,{index:!0,element:a.jsx(um,{to:"dashboard",replace:!0})}),a.jsx(Ae,{path:"dashboard",element:a.jsx(Dw,{})}),a.jsx(Ae,{path:"products",element:a.jsx(Vw,{})}),a.jsx(Ae,{path:"orders",element:a.jsx(qw,{})}),a.jsx(Ae,{path:"profile",element:a.jsx(Gw,{})}),a.jsx(Ae,{path:"about",element:a.jsx(hd,{})}),a.jsx(Ae,{path:"services",element:a.jsx(pd,{})}),a.jsx(Ae,{path:"contact",element:a.jsx(fd,{})}),a.jsx(Ae,{path:"settings",element:a.jsx(Qm,{})})]}),a.jsx(Ae,{path:"/admin-login",element:a.jsx(Fw,{})}),a.jsxs(Ae,{path:"/admin",element:a.jsx(Zw,{}),children:["Default redirect",a.jsx(Ae,{index:!0,element:a.jsx(um,{to:"dashboard",replace:!0})}),a.jsx(Ae,{path:"dashboard",element:a.jsx(Iw,{})}),a.jsx(Ae,{path:"users",element:a.jsx(Xw,{})}),a.jsx(Ae,{path:"vendors",element:a.jsx(Jw,{})}),a.jsx(Ae,{path:"about",element:a.jsx(hd,{})}),a.jsx(Ae,{path:"services",element:a.jsx(pd,{})}),a.jsx(Ae,{path:"contact",element:a.jsx(fd,{})}),a.jsx(Ae,{path:"settings",element:a.jsx(Qm,{})}),a.jsx(Ae,{})]}),a.jsx(Ae,{path:"/userdashboard",element:a.jsx(M6,{})}),a.jsx(Ae,{path:"/cart",element:a.jsx(D6,{})}),a.jsx(Ae,{path:"/orders",element:a.jsx(L6,{})}),a.jsx(Ae,{path:"/track-order/:orderId",element:a.jsx(U6,{})}),a.jsx(Ae,{path:"/wishlist",element:a.jsx(H6,{})}),a.jsx(Ae,{path:"/buy-now",element:a.jsx(q6,{})}),a.jsx(Ae,{path:"/payment",element:a.jsx(G6,{})}),a.jsx(Ae,{path:"/order-success",element:a.jsx(Q6,{})}),a.jsx(Ae,{path:"*",element:a.jsx("div",{style:{padding:40},children:"404 Not Found"})})]})]})}function F6(){const{pathname:r}=da(),s=qb();return w.useLayoutEffect(()=>{if(s!=="POP")try{window.scrollTo(0,0)}catch{}},[r,s]),null}const K6=w.createContext();function P6({children:r}){const[s,l]=w.useState(null);return a.jsx(K6.Provider,{value:{buyItem:s,setBuyItem:l},children:r})}ub.createRoot(document.getElementById("root")).render(a.jsx(w.StrictMode,{children:a.jsx(V4,{i18n:ut,children:a.jsxs(Cy,{basename:"/AgriTechUl/",children:[a.jsx(F6,{}),a.jsx(P6,{children:a.jsx(Y6,{})})]})})}));
