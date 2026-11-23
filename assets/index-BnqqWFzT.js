const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/renderer-DJzmJv6q.js","assets/vendor-three-DLEEHw1X.js"])))=>i.map(i=>d[i]);
import { m as microtask, i as isHTMLElement, g as getFeatureDefinitions, v as variantPriorityOrder, s as setFeatureDefinitions, r as resolveTransition, a as isControllingVariants, b as isVariantLabel, c as isMotionValue, d as isForcedMotionValue, e as buildHTMLStyles, f as buildSVGAttrs, h as isSVGTag, j as resolveMotionValue, k as isVariantNode, l as isAnimationControls, n as resolveVariantFromProps, o as scrapeMotionValuesFromProps, p as scrapeMotionValuesFromProps$1, q as optimizedAppearDataAttribute, t as rootProjectionNode, S as SVGVisualElement, H as HTMLVisualElement, F as Feature, u as createAnimationState, w as resolveVariant, x as noop, V as VisualElementDragControls, P as PanSession, y as frame, z as addPointerEvent, A as globalProjectionState, B as HTMLProjectionNode, C as hover, D as extractEventInfo, E as pipe, G as addDomEvent, I as press, J as motionValue, K as cancelFrame, L as collectMotionValues, M as transform, N as animate } from './vendor-motion-DBdVBFfm.js';
import { L as L$2 } from './vendor-map-OErl2XPo.js';

true&&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1=Symbol.for("react.element"),n$1=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q$1=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v$1=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z$1=Symbol.iterator;function A$1(a){if(null===a||"object"!==typeof a)return null;a=z$1&&a[z$1]||a["@@iterator"];return "function"===typeof a?a:null}
var B$1={isMounted:function(){return  false},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$1={};function E$1(a,b,e){this.props=a;this.context=b;this.refs=D$1;this.updater=e||B$1;}E$1.prototype.isReactComponent={};
E$1.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E$1.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E$1.prototype;function G$1(a,b,e){this.props=a;this.context=b;this.refs=D$1;this.updater=e||B$1;}var H$1=G$1.prototype=new F;
H$1.constructor=G$1;C$1(H$1,E$1.prototype);H$1.isPureReactComponent=true;var I$1=Array.isArray,J=Object.prototype.hasOwnProperty,K$1={current:null},L$1={key:true,ref:true,__self:true,__source:true};
function M$1(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L$1.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g) void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l$1,type:a,key:k,ref:h,props:c,_owner:K$1.current}}
function N$1(a,b){return {$$typeof:l$1,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O$1(a){return "object"===typeof a&&null!==a&&a.$$typeof===l$1}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P$1=/\/+/g;function Q$1(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R$1(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=false;if(null===a)h=true;else switch(k){case "string":case "number":h=true;break;case "object":switch(a.$$typeof){case l$1:case n$1:h=true;}}if(h)return h=a,c=c(h),a=""===d?"."+Q$1(h,0):d,I$1(c)?(e="",null!=a&&(e=a.replace(P$1,"$&/")+"/"),R$1(c,b,e,"",function(a){return a})):null!=c&&(O$1(c)&&(c=N$1(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P$1,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I$1(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q$1(k,g);h+=R$1(k,b,e,f,c);}else if(f=A$1(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q$1(k,g++),h+=R$1(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S$1(a,b,e){if(null==a)return a;var d=[],c=0;R$1(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T$1(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
var U$1={current:null},V$1={transition:null},W$1={ReactCurrentDispatcher:U$1,ReactCurrentBatchConfig:V$1,ReactCurrentOwner:K$1};function X$1(){throw Error("act(...) is not supported in production builds of React.");}
react_production_min.Children={map:S$1,forEach:function(a,b,e){S$1(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S$1(a,function(){b++;});return b},toArray:function(a){return S$1(a,function(a){return a})||[]},only:function(a){if(!O$1(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E$1;react_production_min.Fragment=p$2;react_production_min.Profiler=r;react_production_min.PureComponent=G$1;react_production_min.StrictMode=q$1;react_production_min.Suspense=w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$1;react_production_min.act=X$1;
react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C$1({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){ void 0!==b.ref&&(k=b.ref,h=K$1.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L$1.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l$1,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M$1;react_production_min.createFactory=function(a){var b=M$1.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
react_production_min.forwardRef=function(a){return {$$typeof:v$1,render:a}};react_production_min.isValidElement=O$1;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T$1}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V$1.transition;V$1.transition={};try{a();}finally{V$1.transition=b;}};react_production_min.unstable_act=X$1;react_production_min.useCallback=function(a,b){return U$1.current.useCallback(a,b)};react_production_min.useContext=function(a){return U$1.current.useContext(a)};
react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U$1.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U$1.current.useEffect(a,b)};react_production_min.useId=function(){return U$1.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U$1.current.useImperativeHandle(a,b,e)};react_production_min.useInsertionEffect=function(a,b){return U$1.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U$1.current.useLayoutEffect(a,b)};
react_production_min.useMemo=function(a,b){return U$1.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U$1.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U$1.current.useRef(a)};react_production_min.useState=function(a){return U$1.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U$1.current.useSyncExternalStore(a,b,e)};react_production_min.useTransition=function(){return U$1.current.useTransition()};react_production_min.version="18.3.1";

{
  react.exports = react_production_min;
}

var reactExports = react.exports;

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m$1=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$1={key:true,ref:true,__self:true,__source:true};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m$1.call(a,b)&&!p$1.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

var reactDom = {exports: {}};

var reactDom_production_min = {};

var scheduler = {exports: {}};

var scheduler_production_min = {};

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
	function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}var r=[],t=[],u=1,v=null,y=3,z=false,A=false,B=false,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
	"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=false;G(a);if(!A)if(null!==h(r))A=true,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}
	function J(a,b){A=false;B&&(B=false,E(L),L=-1);z=true;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w}finally{v=null,y=c,z=false;}}var N=false,O=null,L=-1,P=5,Q=-1;
	function M(){return exports.unstable_now()-Q<P?false:true}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=true;try{b=O(!0,a);}finally{b?S():(N=false,O=null);}}else N=false;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=true,S());}function K(a,b){L=D(function(){a(exports.unstable_now());},b);}
	exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){A||z||(A=true,I(J));};
	exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a()}finally{y=c;}};exports.unstable_pauseExecution=function(){};
	exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b()}finally{y=c;}};
	exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=true,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=true,I(J)));return a};
	exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c;}}}; 
} (scheduler_production_min));

{
  scheduler.exports = scheduler_production_min;
}

var schedulerExports = scheduler.exports;

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa=reactExports,ca=schedulerExports;function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b);}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a]);}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja$1=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja$1.call(ma,a))return  true;if(ja$1.call(la,a))return  false;if(ka.test(a))return ma[a]=true;la[a]=true;return  false}function pa(a,b,c,d){if(null!==c&&0===c.type)return  false;switch(typeof b){case "function":case "symbol":return  true;case "boolean":if(d)return  false;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return  false}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return  true;if(d)return  false;if(null!==c)switch(c.type){case 3:return !b;case 4:return  false===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return  false}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,false,a,null,false,false);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,false,a[1],null,false,false);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,false,a.toLowerCase(),null,false,false);});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,false,a,null,false,false);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,false,a.toLowerCase(),null,false,false);});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,true,a,null,false,false);});["capture","download"].forEach(function(a){z[a]=new v(a,4,false,a,null,false,false);});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,false,a,null,false,false);});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,false,a.toLowerCase(),null,false,false);});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,false,a,null,false,false);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,false,a,"http://www.w3.org/1999/xlink",false,false);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,false,a,"http://www.w3.org/XML/1998/namespace",false,false);});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,false,a.toLowerCase(),null,false,false);});
z.xlinkHref=new v("xlinkHref",1,false,"xlink:href","http://www.w3.org/1999/xlink",true,false);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,false,a.toLowerCase(),null,true,true);});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?false:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&true===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");var Ia=Symbol.for("react.offscreen");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return "function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a}var Na=false;
function Oa(a,b){if(!a||Na)return "";Na=true;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=false,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,false),a;case 11:return a=Oa(a.type.render,false),a;case 1:return a=Oa(a.type,true),a;default:return ""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return "Fragment";case wa:return "Portal";case Aa:return "Profiler";case za:return "StrictMode";case Ea:return "Suspense";case Fa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return (a.displayName||"Context")+".Consumer";case Ba:return (a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return "Offscreen";
case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return ""}}
function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:true,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return  false;var b=a._valueTracker;if(!b)return  true;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),true):false}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,false);}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=true;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=true);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=true;d&&(a[e].defaultSelected=true);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=true);}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
var pb={animationIterationCount:true,aspectRatio:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,columns:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridArea:true,gridRow:true,gridRowEnd:true,gridRowSpan:true,gridRowStart:true,gridColumn:true,gridColumnEnd:true,gridColumnSpan:true,gridColumnStart:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,
zoom:true,fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A({menuitem:true},{area:true,base:true,br:true,col:true,embed:true,hr:true,img:true,input:true,keygen:true,link:true,meta:true,param:true,source:true,track:true,wbr:true});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return  false;default:return  true}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(){}var Ib=false;function Jb(a,b,c){if(Ib)return a(b,c);Ib=true;try{return Gb(a,b,c)}finally{if(Ib=false,null!==zb||null!==Ab)Hb(),Fb();}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=false;}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=false;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=false;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=false,Pb=null,Qb=false,Rb=null,Sb={onError:function(a){Ob=true;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=false;Pb=null;Nb.apply(Sb,arguments);}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=false;Pb=null;}else throw Error(p(198));Qb||(Qb=true,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=false,h=e.child;h;){if(h===c){g=true;c=e;d=f;break}if(h===d){g=true;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
c){g=true;c=f;d=e;break}if(h===d){g=true;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return  -1;case 134217728:case 268435456:case 536870912:case 1073741824:return  -1;default:return  -1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=false,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId);}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),true;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),true;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),true;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return  true;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),true}return  false}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
function Xc(a){if(null!==a.blockedOn)return  false;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,false;b.shift();}return  true}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=false;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=true,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)));}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua.ReactCurrentBatchConfig,dd=true;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id$1,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id$1,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id$1=null;
function Yc(a,b,c,d){id$1=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id$1=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return  true}function qd(){return  false}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:false===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=true;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=false),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=true),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:false}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=false;
function ge(a,b){switch(a){case "keyup":return  -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return  true;default:return  false}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=false;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=true;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=false,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:true,date:true,datetime:true,"datetime-local":true,email:true,month:true,number:true,password:true,range:true,search:true,tel:true,text:true,time:true,url:true,week:true};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?true:false}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=false;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=false;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b);}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return  true;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return  false;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return  false;for(d=0;d<c.length;d++){var e=c[d];if(!ja$1.call(b,e)||!He(a[e],b[e]))return  false}return  true}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?true:a&&3===a.nodeType?false:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):false:false}
function Me$1(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=false;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me$1(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=false;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=false,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,false),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=true;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,false,a),qf(b,true,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=true,qf("selectionchange",false,b));}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=true);d?void 0!==e?a.addEventListener(b,c,{capture:true,passive:e}):a.addEventListener(b,c,true):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,false);}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,false);null!==n&&null!==J&&wf(g,J,n,t,true);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else {na=De;var xa=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=true;break;case "contextmenu":case "mouseup":case "dragend":Te=false;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0;}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=true)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;});}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return {current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H=Uf(Vf),Wf=Uf(false),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H);}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return  true}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c);}var eg=null,fg$1=false,gg=false;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg$1=true;hg(a);}
function jg(){if(!gg&&null!==eg){gg=true;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg$1=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=false;}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I=false,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),true):false;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,true):false;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,true):false;default:return  false}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=false,xg=a);}}else {if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=false;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}
function Gg(a){if(a!==xg)return  false;if(!I)return Fg(a),I=true,false;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=
null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return  true}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I=false;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode;}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b);}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d);}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h);}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=Sg(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(true),Vg=Og(false),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null;}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b;}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=true),a.firstContext=null);}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a};}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a);}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=false;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function mh(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b;}
function qh(a,b,c,d){var e=a.updateQueue;jh=false;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=true;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q;}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d);}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E(uh);G(uh,b);}function zh$1(){E(uh);E(vh);E(wh);}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c));}function Bh(a){vh.current===a&&(E(uh),E(vh));}var L=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0;}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=false,Jh=false,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return  false;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return  false;return  true}
function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=false;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e);}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=false;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null;}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else {if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a;}return O}
function Vh(a,b){return "function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=true);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=true);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function Yh(){}
function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=true);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e);}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a);}function ai(a,b,c){return c(function(){ei(b)&&fi(a);})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He(a,c)}catch(d){return  true}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1);}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return [b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d);}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d);}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=false,dh=true),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=true);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(true);var d=Gh.transition;Gh.transition={};try{a(!1),b();}finally{C=c,Gh.transition=d;}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:false,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d);}}
function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:false,eagerState:null,next:null};if(zi(a))Ai(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d));}}
function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=true;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:false},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return [d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(false),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c();}else {c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:false},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:false},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:false};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a) void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
var Ei={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:false},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d));}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):true}
function Gi(a,b,c){var d=false,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null);}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=true,Pi=d);Li(a,b);};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a));}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?true:false:true;if(b)return a;a=a.return;}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=false;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d);}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=false,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=true);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d;}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=true;cg(b);}else f=false;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=true;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=false;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=false);}else {g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=false;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||false)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=false);}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,false),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,true);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,false);yh(a,b.containerInfo);}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return {baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L.current,f=false,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?false:0!==(e&2));if(h)f=true,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1));}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=true;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c);}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G(L,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,false,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}wj(b,true,c,null,f);break;case "together":wj(b,false,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4);};
function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh$1();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(true!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(true!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d);}switch(c){case "input":Va(d);db(d,f,true);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=true:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,false,false);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g));}switch(c){case "input":Va(a);db(a,d,false);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,false):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
true);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=true;break a;default:d=false;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:true!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=false;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=false;}else null!==zg&&(Fj(zg),zg=null),f=true;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh$1(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,false);else {if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,false);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
a.sibling;}null!==f.tail&&B()>Gj&&(b.flags|=128,d=true,Dj(f,false),b.lanes=4194304);}else {if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=true,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,true),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=true,Dj(f,false),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh$1(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh$1(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=false,U=false,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W(a,b,d);}else c.current=null;}function Mj(a,b,c){try{c();}catch(d){W(a,b,d);}}var Nj=false;
function Oj(a,b){Cf=dd;a=Me$1();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=false;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return;}n=Nj;Nj=false;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f);}e=e.next;}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling;}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}var X=null,Xj=false;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling;}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=true;
Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next;}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W(c,b,h);}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c);}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return;}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling;}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a);}catch(t){W(a,a.return,t);}try{Pj(5,a,a.return);}catch(t){W(a,a.return,t);}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l);}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W(a,a.return,t);}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W(a,a.return,t);}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W(a,a.return,t);}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W(d,c,t);}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g));}catch(t){W(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a);}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return;}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function hk(a,b,c){V=a;ik(a);}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f),f=f.sibling;V=e;Jj=h;U=l;}kk(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a);}}
function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode;}sh(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Rj(b);}catch(r){W(b,b.return,r);}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}
function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b);}catch(k){W(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W(b,e,k);}}var f=b.return;try{Rj(b);}catch(k){W(b,f,k);}break;case 5:var g=b.return;try{Rj(b);}catch(k){W(b,g,k);}}}catch(k){W(b,b.return,k);}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return;}}
var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=false,Pi=null,Ri=null,vk=false,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg$1&&jg());}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Fk(c,Gk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else {b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h);}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
else {e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a);}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return !1}catch(g){return  false}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return  true;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return  true}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d));}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg$1&&jg());}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg();}}function Hj(){fj=ej.current;E(ej);}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh$1();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh$1();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj();}c=c.return;}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}fh=null;}return a}
function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Ih=!1;}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t;}else n.add(k);break a}else {if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426));}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return;}while(null!==f)}Sk(c);}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z);}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e);}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y);}function Lk(){for(;null!==Y&&!cc();)Uk(Y);}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null;}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else {c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===T&&(T=5);}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d);}finally{ok.transition=e,C=d;}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=true,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c);dc();K=h;C=g;ok.transition=f;}else a.current=c;vk&&(vk=false,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=false,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else {a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t)}}V=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return;}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h);}}catch(na){W(h,h.return,na);}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return;}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d}finally{C=c,ok.transition=b;}}return  false}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b));}
function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return;}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b);}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c));}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c);}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c);}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=true;else {if(0===(a.lanes&c)&&0===(b.flags&128))return dh=false,yj(a,b,c);dh=0!==(a.flags&131072)?true:false;}else dh=false,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=true,cg(b)):f=false,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,true,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:false,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=true,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c);}b=b.child;}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Xi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=true,cg(b)):a=false,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,true,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:false};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null;}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,true===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,true,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b);}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a);};function ll(a){this._internalRoot=a;}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null);};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null);});b[uf]=null;}};function ml(a){this._internalRoot=a;}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function nl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a);};}var g=el(b,d,a,0,null,false,false,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a);};}var k=bl(a,0,false,null,null,false,false,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d);});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a);};}fl(b,g,a,e);}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()));}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c);}}),il(a,1);}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c);}il(a,134217728);}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d);}il(a,b);}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c;}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,false);}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:false,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};reactDom_production_min.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=false,d="",e=kl;null!==b&&void 0!==b&&(true===b.unstable_strictMode&&(c=true),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,false,null,null,c,false,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a){return Rk(a)};reactDom_production_min.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,true,c)};
reactDom_production_min.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=false,f="",g=kl;null!==c&&void 0!==c&&(true===c.unstable_strictMode&&(e=true),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,false,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};reactDom_production_min.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,false,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),true):false};reactDom_production_min.unstable_batchedUpdates=Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,false,d)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";

function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}

var reactDomExports = reactDom.exports;

var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}

const scriptRel = 'modulepreload';const assetsURL = function(dep) { return "/surprise-card-preview/"+dep };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (true && deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};

function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  let wb;
  let registerPromise;
  const updateServiceWorker = async (_reloadPage = true) => {
    await registerPromise;
  };
  async function register() {
    if ("serviceWorker" in navigator) {
      wb = await __vitePreload(async () => { const {Workbox} = await import('./workbox-window.prod.es5-CaDmdVKn.js');return { Workbox }},true?[]:void 0).then(({ Workbox }) => {
        return new Workbox("/surprise-card-preview/sw.js", { scope: "/surprise-card-preview/", type: "classic" });
      }).catch((e) => {
        onRegisterError?.(e);
        return void 0;
      });
      if (!wb)
        return;
      {
        {
          wb.addEventListener("activated", (event) => {
            if (event.isUpdate || event.isExternal)
              window.location.reload();
          });
          wb.addEventListener("installed", (event) => {
            if (!event.isUpdate) {
              onOfflineReady?.();
            }
          });
        }
      }
      wb.register({ immediate }).then((r) => {
        if (onRegisteredSW)
          onRegisteredSW("/surprise-card-preview/sw.js", r);
        else
          onRegistered?.(r);
      }).catch((e) => {
        onRegisterError?.(e);
      });
    }
  }
  registerPromise = register();
  return updateServiceWorker;
}

const LayoutGroupContext = 
/* @__PURE__ */ reactExports.createContext({});

/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    const ref = reactExports.useRef(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}

const isBrowser = typeof window !== "undefined";

const useIsomorphicLayoutEffect = isBrowser ? reactExports.useLayoutEffect : reactExports.useEffect;

/**
 * @public
 */
const PresenceContext = 
/* @__PURE__ */ reactExports.createContext(null);

/**
 * @public
 */
const MotionConfigContext = 
/* @__PURE__ */ reactExports.createContext({
    transformPagePoint: (p) => p,
    isStatic: false,
    reducedMotion: "never",
});

/**
 * Taken from https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/compose-refs.tsx
 */
/**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    }
    else if (ref !== null && ref !== undefined) {
        ref.current = value;
    }
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */
function composeRefs(...refs) {
    return (node) => {
        let hasCleanup = false;
        const cleanups = refs.map((ref) => {
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup === "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        // React <19 will log an error to the console if a callback ref returns a
        // value. We don't use ref cleanups internally so this will only happen if a
        // user's ref callback returns a value, which we only expect if they are
        // using the cleanup functionality added in React 19.
        if (hasCleanup) {
            return () => {
                for (let i = 0; i < cleanups.length; i++) {
                    const cleanup = cleanups[i];
                    if (typeof cleanup === "function") {
                        cleanup();
                    }
                    else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */
function useComposedRefs(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return reactExports.useCallback(composeRefs(...refs), refs);
}

/**
 * How much an element's transforms, and its ancestors', scale it on screen.
 */
const measureScale = (element) => {
    const { width, height } = element?.getBoundingClientRect() || {};
    return [
        width / element?.offsetWidth || 1,
        height / element?.offsetHeight || 1,
    ];
};
/**
 * The element's position in the space it scrolls in, as the projection
 * system measures it (see measurePageBox and removeElementScroll): its
 * viewport position, plus its scroll containers' scroll (across shadow
 * roots), plus the window's (the root's) scroll. Like checkIsScrollRoot, a
 * fixed ancestor is a scroll root: it doesn't scroll with anything above it,
 * so a fixed container is measured relative to the viewport.
 *
 * So a scroll position clamped by content shrinking reads as the element
 * moving only if it doesn't scroll with that content.
 *
 * Scroll offsets are in their container's coordinate space, so are scaled
 * onto the screen, and the result is returned in the offsetParent's
 * coordinate space, which the pop rule's offsets are in.
 */
const measurePoint = (element) => {
    let { left, top } = element.getBoundingClientRect();
    let node = element;
    while ((node = (node.parentElement ||
        node.parentNode?.host))) {
        const { scrollLeft, scrollTop } = node;
        if (scrollLeft || scrollTop) {
            const [x, y] = measureScale(node);
            left += scrollLeft * x;
            top += scrollTop * y;
        }
        if (getComputedStyle(node).position === "fixed")
            break;
    }
    const [x, y] = measureScale(element.offsetParent);
    return [left / x, top / y];
};
/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */
class PopChildMeasure extends reactExports.Component {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.getElement();
        if (isHTMLElement(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
            const parent = element.offsetParent;
            const parentWidth = isHTMLElement(parent)
                ? parent.offsetWidth || 0
                : 0;
            const parentHeight = isHTMLElement(parent)
                ? parent.offsetHeight || 0
                : 0;
            const computedStyle = getComputedStyle(element);
            const size = this.props.sizeRef.current;
            size.height = parseFloat(computedStyle.height);
            size.width = parseFloat(computedStyle.width);
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
            size.right = parentWidth - size.width - size.left;
            size.bottom = parentHeight - size.height - size.top;
            size.direction = computedStyle.direction;
            size.point = measurePoint(element);
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() { }
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent, anchorX, anchorY, root, pop, popNode }) {
    const id = reactExports.useId();
    const ref = reactExports.useRef(null);
    const size = reactExports.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        direction: "ltr",
    });
    const { nonce } = reactExports.useContext(MotionConfigContext);
    /**
     * In React 19, refs are passed via props.ref instead of element.ref.
     * We check props.ref first (React 19) and fall back to element.ref (React 18).
     *
     * The composed ref is only used when popping the child out (pop !== false),
     * so we avoid reading children.props.ref otherwise. In React 18.3 that read
     * triggers a spurious "`ref` is not a prop" warning getter (#3745).
     */
    const childRef = pop !== false
        ? (children.props?.ref ??
            children?.ref)
        : undefined;
    const composedRef = useComposedRefs(ref, childRef);
    /**
     * The child's element: the one our ref reached or, if the child can't
     * be given a ref (for instance a function component that doesn't
     * forward it), its outermost motion component's element (#2503).
     */
    const getElement = () => ref.current || popNode?.current?.current;
    const insertPopRule = (sheet) => {
        const { width, height, top, left, right, bottom, direction } = size.current;
        const isRTL = direction === "rtl";
        const x = anchorX === "left"
            ? (isRTL ? `right:${right}` : `left:${left}`)
            : (isRTL ? `left:${left}` : `right:${right}`);
        const y = anchorY === "bottom" ? `bottom:${bottom}` : `top:${top}`;
        sheet?.insertRule(`[data-motion-pop-id="${id}"]{position:absolute!important;width:${width}px!important;height:${height}px!important;${x}px!important;${y}px!important}`);
    };
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */
    reactExports.useInsertionEffect(() => {
        const { width, height } = size.current;
        const element = getElement();
        if (isPresent || pop === false || !element || !width || !height)
            return;
        element.dataset.motionPopId = id;
        /**
         * Use the element's own document so this works when rendering
         * into another window or iframe (e.g. via window.open()).
         */
        const doc = element.ownerDocument;
        const style = doc.createElement("style");
        if (nonce)
            style.nonce = nonce;
        const parent = root ?? doc.head;
        parent.appendChild(style);
        insertPopRule(style.sheet);
        /**
         * Popping the element out of the layout can move its offsetParent,
         * which we've pinned it to. For instance, a bottom-anchored or
         * centred container shrinks around its remaining children (#2348).
         * So once the whole commit is in the DOM, measure how far the
         * element moved and offset it back.
         *
         * This runs on the microtask frameloop, so before paint even if
         * this commit happens within an animation frame. Every popped
         * element is measured in its first step, then corrected at the
         * start of the read step: before the projection system, which
         * schedules its layout measurement there from layout effects, so
         * layout animations see the corrected position.
         */
        let dx = 0;
        let dy = 0;
        microtask.setup(() => {
            const [x, y] = measurePoint(element);
            dx = size.current.point[0] - x;
            dy = size.current.point[1] - y;
        });
        microtask.read(() => {
            /**
             * The style has no sheet if it's been removed since, because
             * the element is present again.
             */
            const { sheet } = style;
            if (!sheet || (!dx && !dy))
                return;
            const s = size.current;
            s.left += dx;
            s.right -= dx;
            s.top += dy;
            s.bottom -= dy;
            sheet.deleteRule(0);
            insertPopRule(sheet);
        });
        return () => {
            element.removeAttribute("data-motion-pop-id");
            if (parent.contains(style)) {
                parent.removeChild(style);
            }
        };
    }, [isPresent]);
    return (jsxRuntimeExports.jsx(PopChildMeasure, { isPresent: isPresent, getElement: getElement, sizeRef: size, pop: pop, children: pop === false
            ? children
            : reactExports.cloneElement(children, { ref: composedRef }) }));
}

const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
    const presenceChildren = useConstant(newChildrenMap);
    const id = reactExports.useId();
    /**
     * The outermost motion component within this child. popLayout falls
     * back to its element when the child can't be given a ref, for instance
     * a function component that doesn't forward refs (#2503).
     */
    const popNode = reactExports.useRef();
    // Written in a layout effect (not render) so discarded concurrent
    // renders can't leave the refs pointing at uncommitted state.
    const isPresentRef = reactExports.useRef(isPresent);
    const onExitCompleteRef = reactExports.useRef(onExitComplete);
    useIsomorphicLayoutEffect(() => {
        isPresentRef.current = isPresent;
        onExitCompleteRef.current = onExitComplete;
    });
    let isReusedContext = true;
    let context = reactExports.useMemo(() => {
        isReusedContext = false;
        return {
            id,
            initial,
            isPresent,
            custom,
            onExitComplete: (childId) => {
                presenceChildren.set(childId, true);
                for (const isComplete of presenceChildren.values()) {
                    if (!isComplete)
                        return; // can stop searching when any is incomplete
                }
                onExitComplete && onExitComplete();
            },
            register: (childId, node) => {
                presenceChildren.set(childId, false);
                if (node && node.parent?.presenceContext?.id !== id) {
                    popNode.current = node;
                }
                return () => {
                    presenceChildren.delete(childId);
                    !isPresentRef.current &&
                        !presenceChildren.size &&
                        onExitCompleteRef.current?.();
                };
            },
        };
    }, [isPresent, presenceChildren, onExitComplete]);
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    if (presenceAffectsLayout && isReusedContext) {
        context = { ...context };
    }
    reactExports.useMemo(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    reactExports.useEffect(() => {
        !isPresent &&
            !presenceChildren.size &&
            onExitComplete &&
            onExitComplete();
    }, [isPresent]);
    children = (jsxRuntimeExports.jsx(PopChild, { pop: mode === "popLayout", isPresent: isPresent, anchorX: anchorX, anchorY: anchorY, root: root, popNode: popNode, children: children }));
    return (jsxRuntimeExports.jsx(PresenceContext.Provider, { value: context, children: children }));
};
function newChildrenMap() {
    return new Map();
}

/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed from the tree,
 * but `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence(subscribe = true) {
    const context = reactExports.useContext(PresenceContext);
    if (context === null)
        return [true, null];
    const { isPresent, onExitComplete, register } = context;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    const id = reactExports.useId();
    reactExports.useEffect(() => {
        if (subscribe) {
            return register(id);
        }
    }, [subscribe]);
    const safeToRemove = reactExports.useCallback(() => subscribe && onExitComplete && onExitComplete(id), [id, onExitComplete, subscribe]);
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}

const getChildKey = (child) => child.key || "";
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by prepending `.$`
    reactExports.Children.forEach(children, (child) => {
        if (reactExports.isValidElement(child))
            filtered.push(child);
    });
    return filtered;
}

const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = reactExports.useMemo(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = reactExports.useRef(true);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const exitingComponents = reactExports.useRef(/* @__PURE__ */ new Set());
  const [diffedChildren, setDiffedChildren] = reactExports.useState(presentChildren);
  const [renderedChildren, setRenderedChildren] = reactExports.useState(presentChildren);
  useIsomorphicLayoutEffect(() => {
    if (propagate && !isParentPresent && !renderedChildren.length) {
      safeToRemove?.();
    }
  }, [isParentPresent, propagate, renderedChildren.length, safeToRemove]);
  const pendingExitComplete = reactExports.useRef();
  reactExports.useEffect(() => () => {
    const callback = pendingExitComplete.current;
    pendingExitComplete.current = void 0;
    callback?.();
  }, [renderedChildren]);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
        exitingComponents.current.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    let insertionIndex = 0;
    for (const child of renderedChildren) {
      const presentIndex = presentKeys.indexOf(getChildKey(child));
      if (presentIndex === -1) {
        nextChildren.splice(insertionIndex++, 0, child);
        exitingChildren.push(child);
      } else {
        insertionIndex = presentIndex + exitingChildren.length + 1;
      }
    }
    if (exitingChildren.every((child) => exitComplete.get(getChildKey(child)))) {
      nextChildren = presentChildren;
    } else if (mode === "wait") {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return null;
  }
  const { forceRender } = reactExports.useContext(LayoutGroupContext);
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitingComponents.current.has(key)) {
        return;
      }
      if (exitComplete.has(key)) {
        exitingComponents.current.add(key);
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender?.();
        setDiffedChildren([]);
        propagate && safeToRemove?.();
        pendingExitComplete.current = onExitComplete;
      }
    };
    return jsxRuntimeExports.jsx(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom, presenceAffectsLayout, mode, root, onExitComplete: isPresent ? void 0 : onExit, anchorX, anchorY, children: child }, key);
  }) });
};

const LazyContext = /* @__PURE__ */ reactExports.createContext({
    strict: false,
});

const featureProps = {
    animation: ["variants", ...variantPriorityOrder],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
};
let isInitialized = false;
/**
 * Initialize feature definitions with isEnabled checks.
 * This must be called before any motion components are rendered.
 */
function initFeatureDefinitions() {
    if (isInitialized)
        return;
    const initialFeatureDefinitions = {};
    for (const key in featureProps) {
        initialFeatureDefinitions[key] = {
            isEnabled: (props) => featureProps[key].some((name) => !!props[name]),
        };
    }
    setFeatureDefinitions(initialFeatureDefinitions);
    isInitialized = true;
}
/**
 * Get the current feature definitions, initializing if needed.
 */
function getInitializedFeatureDefinitions() {
    initFeatureDefinitions();
    return getFeatureDefinitions();
}

function loadFeatures(features) {
    const featureDefinitions = getInitializedFeatureDefinitions();
    for (const key in features) {
        featureDefinitions[key] = {
            ...featureDefinitions[key],
            ...features[key],
        };
    }
    setFeatureDefinitions(featureDefinitions);
}

/**
 * `MotionConfig` is used to set configuration options for all children `motion` components.
 *
 * ```jsx
 * import { motion, MotionConfig } from "framer-motion"
 *
 * export function App() {
 *   return (
 *     <MotionConfig transition={{ type: "spring" }}>
 *       <motion.div animate={{ x: 100 }} />
 *     </MotionConfig>
 *   )
 * }
 * ```
 *
 * @public
 */
function MotionConfig({ children, ...config }) {
    /**
     * Inherit props from any parent MotionConfig components
     */
    const parentConfig = reactExports.useContext(MotionConfigContext);
    config = { ...parentConfig, ...config };
    config.transition = resolveTransition(config.transition, parentConfig.transition);
    /**
     * Don't allow isStatic to change between renders as it affects how many hooks
     * motion components fire.
     */
    config.isStatic = useConstant(() => config.isStatic);
    /**
     * Creating a new config context object will re-render every `motion` component
     * every time it renders. So we only want to create a new one sparingly.
     */
    const context = reactExports.useMemo(() => config, [
        JSON.stringify(config.transition),
        config.transformPagePoint,
        config.reducedMotion,
        config.skipAnimations,
        config.isValidProp,
    ]);
    return (jsxRuntimeExports.jsx(MotionConfigContext.Provider, { value: context, children: children }));
}

const MotionContext = /* @__PURE__ */ reactExports.createContext({});

function getCurrentTreeVariants(props, context) {
    if (isControllingVariants(props)) {
        const { initial, animate } = props;
        return {
            initial: initial === false || isVariantLabel(initial)
                ? initial
                : undefined,
            animate: isVariantLabel(animate) ? animate : undefined,
        };
    }
    return props.inherit !== false ? context : {};
}

function useCreateMotionContext(props) {
    const { initial, animate } = getCurrentTreeVariants(props, reactExports.useContext(MotionContext));
    return reactExports.useMemo(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}

const createHtmlRenderState = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
});

function copyRawValuesOnly(target, source, props) {
    for (const key in source) {
        if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues({ transformTemplate }, visualState) {
    return reactExports.useMemo(() => {
        const state = createHtmlRenderState();
        buildHTMLStyles(state, visualState, transformTemplate);
        return Object.assign({}, state.vars, state.style);
    }, [visualState]);
}
function useStyle(props, visualState) {
    const styleProp = props.style || {};
    const style = {};
    /**
     * Copy non-Motion Values straight into style
     */
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState));
    return style;
}
function useHTMLProps(props, visualState) {
    // The `any` isn't ideal but it is the type of createElement props argument
    const htmlProps = {};
    const style = useStyle(props, visualState);
    if (props.drag && props.dragListener !== false) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect =
            style.WebkitUserSelect =
                style.WebkitTouchCallout =
                    "none";
        // Disable scrolling on the draggable direction
        style.touchAction =
            props.drag === true
                ? "none"
                : `pan-${props.drag === "x" ? "y" : "x"}`;
    }
    if (props.tabIndex === undefined &&
        (props.onTap || props.onTapStart || props.whileTap)) {
        htmlProps.tabIndex = 0;
    }
    htmlProps.style = style;
    return htmlProps;
}

const createSvgRenderState = () => ({
    ...createHtmlRenderState(),
    attrs: {},
});

function useSVGProps(props, visualState, _isStatic, Component) {
    const visualProps = reactExports.useMemo(() => {
        const state = createSvgRenderState();
        buildSVGAttrs(state, visualState, isSVGTag(Component), props.transformTemplate, props.style);
        return {
            ...state.attrs,
            style: { ...state.style },
        };
    }, [visualState]);
    if (props.style) {
        /**
         * Build a fresh style each render rather than writing back into
         * the memoised visualProps, which would carry the previous
         * render's raw styles over (and above) the latest ones.
         */
        const style = {};
        copyRawValuesOnly(style, props.style, props);
        return { ...visualProps, style: { ...style, ...visualProps.style } };
    }
    return visualProps;
}

/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
const validMotionProps = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "tap",
    "propagate",
    "ignoreStrict",
    "viewport",
    "pinch",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return (key.startsWith("while") ||
        (key.startsWith("drag") && key !== "draggable") ||
        key.startsWith("layout") ||
        key.startsWith("onTap") ||
        key.startsWith("onPan") ||
        key.startsWith("onLayout") ||
        validMotionProps.has(key));
}

function shouldForward(key, isValidProp) {
    return key.startsWith("on")
        ? !isValidMotionProp(key)
        : isValidProp?.(key) ?? !isValidMotionProp(key);
}
function filterProps(props, isDom, forwardMotionProps, isValidProp) {
    const filteredProps = {};
    for (const key in props) {
        /**
         * values is considered a valid prop by Emotion, so if it's present
         * this will be rendered out to the DOM unless explicitly filtered.
         *
         * We check the type as it could be used with the `feColorMatrix`
         * element, which we support.
         */
        if (key === "values" && typeof props.values === "object")
            continue;
        if (isMotionValue(props[key]))
            continue;
        /**
         * `fx` marks the element for a canvas layer to draw. React doesn't
         * render `true` as an attribute.
         */
        if (key === "fx") {
            if (props.fx)
                filteredProps.fx = "";
            continue;
        }
        if (shouldForward(key, isValidProp) ||
            (forwardMotionProps === true && isValidMotionProp(key)) ||
            (!isDom && !isValidMotionProp(key)) ||
            // If trying to use native HTML drag events, forward drag listeners
            (props["draggable"] &&
                key.startsWith("onDrag"))) {
            filteredProps[key] =
                props[key];
        }
    }
    return filteredProps;
}

/**
 * We keep these listed separately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
const lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
];

function isSVGComponent(Component) {
    if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" ||
        /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */
        Component.includes("-")) {
        return false;
    }
    else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component) > -1 ||
        /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/u.test(Component)) {
        return true;
    }
    return false;
}

function useRender(Component, props, ref, { latestValues, }, isStatic, forwardMotionProps = false, isSVG, isValidProp) {
    const useVisualProps = (isSVG ?? isSVGComponent(Component)) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic, Component);
    const filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps, isValidProp);
    const elementProps = Component !== reactExports.Fragment ? { ...filteredProps, ...visualProps, ref } : {};
    /**
     * If component has been handed a motion value as its child,
     * memoise its initial value and render that. Subsequent updates
     * will be handled by the onChange handler
     */
    const { children } = props;
    const renderedChildren = reactExports.useMemo(() => (isMotionValue(children) ? children.get() : children), [children]);
    return reactExports.createElement(Component, {
        ...elementProps,
        children: renderedChildren,
    });
}

function makeState({ scrapeMotionValuesFromProps, createRenderState, }, props, context, presenceContext) {
    const state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState(),
    };
    return state;
}
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    const values = {};
    const motionValues = scrapeMotionValues(props, {});
    for (const key in motionValues) {
        values[key] = resolveMotionValue(motionValues[key]);
    }
    let { initial, animate } = props;
    const isControllingVariants$1 = isControllingVariants(props);
    const isVariantNode$1 = isVariantNode(props);
    if (context &&
        isVariantNode$1 &&
        !isControllingVariants$1 &&
        props.inherit !== false) {
        if (initial === undefined)
            initial = context.initial;
        if (animate === undefined)
            animate = context.animate;
    }
    let isInitialAnimationBlocked = presenceContext
        ? presenceContext.initial === false
        : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    const variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet &&
        typeof variantToSet !== "boolean" &&
        !isAnimationControls(variantToSet)) {
        const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
        for (let i = 0; i < list.length; i++) {
            const resolved = resolveVariantFromProps(props, list[i]);
            if (resolved) {
                const { transitionEnd, transition, ...target } = resolved;
                for (const key in target) {
                    let valueTarget = target[key];
                    if (Array.isArray(valueTarget)) {
                        /**
                         * Take final keyframe if the initial animation is blocked because
                         * we want to initialise at the end of that blocked animation.
                         */
                        const index = isInitialAnimationBlocked
                            ? valueTarget.length - 1
                            : 0;
                        valueTarget = valueTarget[index];
                    }
                    if (valueTarget !== null) {
                        values[key] = valueTarget;
                    }
                }
                for (const key in transitionEnd) {
                    values[key] = transitionEnd[key];
                }
            }
        }
    }
    return values;
}
const makeUseVisualState = (config) => (props, isStatic) => {
    const context = reactExports.useContext(MotionContext);
    const presenceContext = reactExports.useContext(PresenceContext);
    const make = () => makeState(config, props, context, presenceContext);
    return isStatic ? make() : useConstant(make);
};

const useHTMLVisualState = /*@__PURE__*/ makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState,
});

const useSVGVisualState = /*@__PURE__*/ makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
    createRenderState: createSvgRenderState,
});

const motionComponentSymbol = /* @__PURE__ */ Symbol.for("motionComponentSymbol");

/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
    /**
     * Store externalRef in a ref to avoid including it in the useCallback
     * dependency array. Including externalRef in dependencies causes issues
     * with libraries like Radix UI that create new callback refs on each render
     * when using asChild - this would cause the callback to be recreated,
     * triggering element remounts and breaking AnimatePresence exit animations.
     */
    const externalRefContainer = reactExports.useRef(externalRef);
    reactExports.useInsertionEffect(() => {
        externalRefContainer.current = externalRef;
    });
    // Store cleanup function returned by callback refs (React 19 feature)
    const refCleanup = reactExports.useRef(null);
    return reactExports.useCallback((instance) => {
        if (instance) {
            visualState.onMount?.(instance);
        }
        if (visualElement) {
            instance ? visualElement.mount(instance) : visualElement.unmount();
        }
        const ref = externalRefContainer.current;
        if (typeof ref === "function") {
            if (instance) {
                const cleanup = ref(instance);
                if (typeof cleanup === "function") {
                    refCleanup.current = cleanup;
                }
            }
            else if (refCleanup.current) {
                refCleanup.current();
                refCleanup.current = null;
            }
            else {
                ref(instance);
            }
        }
        else if (ref) {
            ref.current = instance;
        }
    }, [visualElement]);
}

/**
 * Internal, exported only for usage in Framer
 */
const SwitchLayoutGroupContext = 
/* @__PURE__ */ reactExports.createContext({});

function useVisualElement(Component, visualState, props, createVisualElement, ProjectionNodeConstructor, isSVG) {
    const { visualElement: parent } = reactExports.useContext(MotionContext);
    const lazyContext = reactExports.useContext(LazyContext);
    const presenceContext = reactExports.useContext(PresenceContext);
    const motionConfig = reactExports.useContext(MotionConfigContext);
    const reducedMotionConfig = motionConfig.reducedMotion;
    const skipAnimations = motionConfig.skipAnimations;
    const visualElementRef = reactExports.useRef(null);
    /**
     * Track whether the component has been through React's commit phase.
     * Used to detect when LazyMotion features load after the component has mounted.
     */
    const hasMountedOnce = reactExports.useRef(false);
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */
    createVisualElement =
        createVisualElement ||
            lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState,
            parent,
            props,
            presenceContext,
            blockInitialAnimation: presenceContext
                ? presenceContext.initial === false
                : false,
            reducedMotionConfig,
            skipAnimations,
            isSVG,
        });
        /**
         * If the component has already mounted before features loaded (e.g. via
         * LazyMotion with async feature loading), we need to force the initial
         * animation to run. Otherwise state changes that occurred before features
         * loaded will be lost and the element will snap to its final state.
         */
        if (hasMountedOnce.current && visualElementRef.current) {
            visualElementRef.current.manuallyAnimateOnMount = true;
        }
    }
    const visualElement = visualElementRef.current;
    /**
     * Load Motion gesture and animation features. These are rendered as renderless
     * components so each feature can optionally make use of React lifecycle methods.
     */
    const initialLayoutGroupConfig = reactExports.useContext(SwitchLayoutGroupContext);
    if (visualElement &&
        !visualElement.projection &&
        ProjectionNodeConstructor &&
        (visualElement.type === "html" || visualElement.type === "svg")) {
        /**
         * Classes built by createProjectionNode set up their node from the
         * component's props, so components only bundle the setup with the
         * layout and drag features.
         */
        ProjectionNodeConstructor.create(visualElement, props, initialLayoutGroupConfig);
    }
    reactExports.useInsertionEffect(() => {
        /**
         * Skip the update if the visual element was created with these props.
         * This isn't gated on the layout effect below having run, as a hidden
         * <Activity> runs insertion effects but not layout effects, and
         * props from renders made while hidden must still reach the element.
         */
        if (visualElement && visualElement.props !== props) {
            visualElement.update(props, presenceContext);
        }
    });
    /**
     * Cache this value as we want to know whether HandoffAppearAnimations
     * was present on initial render - it will be deleted after this.
     */
    const optimisedAppearId = props[optimizedAppearDataAttribute];
    const wantsHandoff = reactExports.useRef(Boolean(optimisedAppearId) &&
        typeof window !== "undefined" &&
        !window.MotionHandoffIsComplete?.(optimisedAppearId) &&
        window.MotionHasOptimisedAnimation?.(optimisedAppearId));
    /**
     * Layout effects re-run when a hidden Suspense/Activity boundary is
     * revealed, but passive effects only re-run if this component re-renders
     * (not the case for memoized elements). Replay animations on every
     * reconnection. Must be declared before the effect that sets hasMountedOnce.
     */
    useIsomorphicLayoutEffect(() => {
        if (!hasMountedOnce.current || !visualElement)
            return;
        visualElement.animationState?.animateChanges();
        visualElement.enteringChildren = undefined;
    }, []);
    useIsomorphicLayoutEffect(() => {
        /**
         * Track that this component has mounted. This is used to detect when
         * LazyMotion features load after the component has already committed.
         */
        hasMountedOnce.current = true;
        if (!visualElement)
            return;
        window.MotionIsMounted = true;
        visualElement.updateFeatures();
        visualElement.scheduleRenderMicrotask();
        /**
         * Ideally this function would always run in a useEffect.
         *
         * However, if we have optimised appear animations to handoff from,
         * it needs to happen synchronously to ensure there's no flash of
         * incorrect styles in the event of a hydration error.
         *
         * So if we detect a situation where optimised appear animations
         * are running, we use useLayoutEffect to trigger animations.
         */
        if (wantsHandoff.current && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
    });
    reactExports.useEffect(() => {
        if (!visualElement)
            return;
        if (!wantsHandoff.current && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
        if (wantsHandoff.current) {
            // This ensures all future calls to animateChanges() in this component will run in useEffect
            queueMicrotask(() => {
                window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
            });
            wantsHandoff.current = false;
        }
        /**
         * Now we've finished triggering animations for this element we
         * can wipe the enteringChildren set for the next render.
         */
        visualElement.enteringChildren = undefined;
    });
    return visualElement;
}

function createMotionComponent(Component, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
  preloadedFeatures && loadFeatures(preloadedFeatures);
  const isSVG = type ? type === "svg" : isSVGComponent(Component);
  const useVisualState = isSVG ? useSVGVisualState : useHTMLVisualState;
  function MotionDOMComponent(props, externalRef) {
    let MeasureLayout;
    const layoutId = useLayoutId(props);
    if (useConstant(() => !!rootProjectionNode.current?.sharedNodes.get(layoutId)?.lead && props.initial)) {
      props = { ...props, initial: false };
    }
    const configAndProps = {
      ...reactExports.useContext(MotionConfigContext),
      ...props,
      layoutId
    };
    const { isStatic, isValidProp } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState(props, isStatic);
    if (!isStatic && typeof window !== "undefined") {
      useStrictMode();
      const layoutProjection = getProjectionFunctionality(configAndProps);
      context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode, isSVG);
      if (layoutProjection.isEnabled || context.visualElement?.projection?.options.layoutId)
        MeasureLayout = layoutProjection.MeasureLayout;
    }
    return jsxRuntimeExports.jsxs(MotionContext.Provider, { value: context, children: [MeasureLayout && context.visualElement ? jsxRuntimeExports.jsx(MeasureLayout, { visualElement: context.visualElement, ...configAndProps }) : null, useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG, isValidProp)] });
  }
  MotionDOMComponent.displayName = `motion.${typeof Component === "string" ? Component : `create(${Component.displayName ?? Component.name ?? ""})`}`;
  const ForwardRefMotionComponent = reactExports.forwardRef(MotionDOMComponent);
  ForwardRefMotionComponent[motionComponentSymbol] = Component;
  return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = reactExports.useContext(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
  reactExports.useContext(LazyContext).strict;
}
function getProjectionFunctionality(props) {
  const featureDefinitions = getInitializedFeatureDefinitions();
  const { drag, layout } = featureDefinitions;
  if (!drag && !layout)
    return {};
  const combined = { ...drag, ...layout };
  return {
    MeasureLayout: combined.MeasureLayout,
    isEnabled: drag?.isEnabled(props) || layout?.isEnabled(props),
    ProjectionNode: combined.ProjectionNode
  };
}

function createMotionProxy(preloadedFeatures, createVisualElement) {
  if (typeof Proxy === "undefined") {
    return createMotionComponent;
  }
  const componentCache = /* @__PURE__ */ new Map();
  const factory = (Component, options) => {
    return createMotionComponent(Component, options, preloadedFeatures, createVisualElement);
  };
  const deprecatedFactoryFunction = (Component, options) => {
    return factory(Component, options);
  };
  return new Proxy(deprecatedFactoryFunction, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (_target, key) => {
      if (key === "create")
        return factory;
      if (!componentCache.has(key)) {
        componentCache.set(key, createMotionComponent(key, void 0, preloadedFeatures, createVisualElement));
      }
      return componentCache.get(key);
    }
  });
}

const createDomVisualElement = (Component, options) => {
    /**
     * Use explicit isSVG override if provided, otherwise auto-detect
     */
    const isSVG = options.isSVG ?? isSVGComponent(Component);
    return isSVG
        ? new SVGVisualElement(options)
        : new HTMLVisualElement(options, {
            allowProjection: Component !== reactExports.Fragment,
        });
};

class AnimationFeature extends Feature {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(node) {
        super(node);
        node.animationState || (node.animationState = createAnimationState(node));
    }
    updateAnimationControlsSubscription() {
        const { animate } = this.node.getProps();
        if (isAnimationControls(animate)) {
            this.unmountControls = animate.subscribe(this.node);
        }
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        if (this.node.getProps().animate !== this.node.prevProps?.animate) {
            this.updateAnimationControlsSubscription();
        }
    }
    unmount() {
        this.node.animationState.reset();
        this.unmountControls?.();
    }
}

let id = 0;
class ExitAnimationFeature extends Feature {
    constructor() {
        super(...arguments);
        this.id = id++;
    }
    update() {
        const { presenceContext, animationState } = this.node;
        if (!presenceContext || !animationState)
            return;
        const { isPresent, onExitComplete } = presenceContext;
        /**
         * Compare presence with our own exit, not the previous presence
         * context. An element can mount already exiting, for instance when
         * Suspense reveals it in the render that removed it, and then both
         * contexts have isPresent: false (#4049).
         */
        if (isPresent === !this.exit)
            return;
        if (isPresent) {
            /**
             * When re-entering after the exit completed (element is at
             * rest), replay the enter animation from initial.
             */
            if (this.exit === true) {
                const { initial } = this.node.getProps();
                if (initial && !Array.isArray(initial)) {
                    const { transition, transitionEnd, ...target } = resolveVariant(this.node, initial) || {};
                    for (const key in target) {
                        this.node
                            .getValue(key)
                            ?.jump(target[key]);
                    }
                }
                /**
                 * A re-entering element is no longer an initial child, so
                 * AnimatePresence's initial={false} mustn't block its enter.
                 */
                this.node.blockInitialAnimation = false;
                animationState.reset();
                animationState.animateChanges();
            }
            else {
                animationState.setActive("exit", false);
            }
            this.exit = undefined;
            return;
        }
        const exit = (this.exit = animationState.setActive("exit", true));
        if (onExitComplete) {
            exit.then(() => {
                /**
                 * An exit can resolve after the element has re-entered, e.g.
                 * when its final tick lands in the stop() of the enter.
                 */
                if (this.exit !== exit)
                    return;
                this.exit = true;
                onExitComplete(this.id);
            });
        }
    }
    mount() {
        const { register } = this.node.presenceContext || {};
        if (register) {
            this.unmount = register(this.id, this.node);
        }
        // Start the exit of an element that mounts already exiting
        this.update();
    }
    unmount() { }
}

const animations = {
    animation: {
        Feature: AnimationFeature,
    },
    exit: {
        Feature: ExitAnimationFeature,
    },
};

class DragGesture extends Feature {
    constructor(node) {
        super(node);
        this.removeGroupControls = noop;
        this.removeListeners = noop;
        this.controls = new VisualElementDragControls(node);
    }
    mount() {
        // If we've been provided a DragControls for manual control over the drag gesture,
        // subscribe this component to it on mount.
        const { dragControls } = this.node.getProps();
        if (dragControls) {
            this.removeGroupControls = dragControls.subscribe(this.controls);
        }
        this.removeListeners = this.controls.addListeners() || noop;
    }
    update() {
        const { dragControls, drag } = this.node.getProps();
        const { dragControls: prevDragControls, drag: prevDrag } = this.node.prevProps || {};
        if (dragControls !== prevDragControls) {
            this.removeGroupControls();
            if (dragControls) {
                this.removeGroupControls = dragControls.subscribe(this.controls);
            }
        }
        /**
         * If drag is disabled mid-gesture, for instance from onDrag, end the
         * gesture as if released. This must happen before this render's
         * layout change is processed, otherwise the element is still
         * animation-blocked, so it jumps to its new layout and keeps that
         * jump as a drag offset, which release wouldn't animate away as
         * drag is now disabled.
         */
        if (prevDrag && !drag)
            this.controls.stop(undefined, undefined, prevDrag);
    }
    unmount() {
        this.removeGroupControls();
        this.removeListeners();
        /**
         * In React 19, during list reorder reconciliation, components may
         * briefly unmount and remount while the drag is still active. If we're
         * actively dragging, we should NOT end the pan session - it will
         * continue tracking pointer events via its window-level listeners.
         *
         * The pan session will be properly cleaned up when:
         * 1. The drag ends naturally (pointerup/pointercancel)
         * 2. The component is truly removed from the DOM
         */
        if (!this.controls.isDragging) {
            this.controls.endPanSession();
        }
    }
}

const asyncHandler = (handler) => (event, info) => {
    if (handler) {
        frame.update(() => handler(event, info), false, true);
    }
};
class PanGesture extends Feature {
    constructor() {
        super(...arguments);
        this.removePointerDownListener = noop;
    }
    onPointerDown(pointerDownEvent) {
        this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            // Fixes https://github.com/motiondivision/motion/issues/2270
            contextWindow: this.node.current?.ownerDocument.defaultView,
        });
    }
    createPanHandlers() {
        const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
        return {
            onSessionStart: asyncHandler(onPanSessionStart),
            onStart: asyncHandler(onPanStart),
            onMove: asyncHandler(onPan),
            onEnd: (event, info) => {
                delete this.session;
                if (onPanEnd) {
                    frame.postRender(() => onPanEnd(event, info));
                }
            },
        };
    }
    mount() {
        this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
    }
    update() {
        this.session?.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener();
        this.session?.end();
    }
}

/**
 * Track whether we've taken any snapshots yet. If not,
 * we can safely skip notification of didUpdate.
 *
 * Difficult to capture in a test but to prevent flickering
 * we must set this to true either on update or unmount.
 * Running `next-env/layout-id` in Safari will show this behaviour if broken.
 */
let hasTakenAnySnapshot = false;
/**
 * The projection node is created with the props from the component's first
 * render, so keep these in sync as they can change (or be enabled) later.
 */
const layoutOptions = ({ layout, layoutDependency, layoutAnchor, }) => ({
    layout,
    layoutDependency,
    layoutAnchor,
    animationType: typeof layout === "string" ? layout : "both",
});
/**
 * Move a mounted node to its new layoutId's stack, as an unmount and remount
 * would. Returns a takeover to run once every node in the commit has had the
 * chance to change its layoutId.
 */
const switchLayoutId = (projection, layoutId) => {
    const { snapshot } = projection;
    const stack = projection.getStack();
    stack?.remove(projection);
    /**
     * If this node led the old stack (so remove() made it the prevLead of
     * the new lead), the new lead animates from this node's snapshot, which
     * it now holds. Unlike a node that unmounts, this one stays mounted, so
     * unlink them: the new lead mustn't read this node's snapshot after it
     * changes, or stop or share its animation.
     */
    const lead = stack?.lead;
    if (stack?.prevLead === projection && lead.resumeFrom === projection)
        lead.resumeFrom = lead.currentAnimation = projection.resumingFrom =
            undefined;
    projection.options.layoutId = layoutId;
    /**
     * A node that followed another no longer does, so clear the styles
     * that hid it.
     */
    if (!layoutId) {
        projection.needsShow = true;
        return;
    }
    projection.root.registerSharedNode(layoutId, projection);
    /**
     * Like a mounting node, this one animates from the lead it replaces.
     * But if that lead is still on screen with this layoutId (e.g. an open
     * card moving to another thumbnail), this node is already on screen
     * too, so it takes over instantly: it keeps its own snapshot, and the
     * lead is hidden, as at the end of a crossfade. A lead that left the
     * stack in this commit (e.g. layoutId={selected ? "x" : undefined})
     * is animated from, as is one that's exiting.
     */
    return () => {
        const { resumeFrom } = projection;
        if (resumeFrom?.isPresent !== false &&
            projection.getStack().members.includes(resumeFrom)) {
            resumeFrom.hide();
            projection.resumeFrom = undefined;
            projection.snapshot = snapshot;
        }
    };
};
class MeasureLayoutWithContext extends reactExports.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
        const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
        const { projection } = visualElement;
        if (projection) {
            layoutGroup.group?.add(projection);
            layoutId && switchLayoutGroup?.register?.(projection);
            if (hasTakenAnySnapshot) {
                projection.root.didUpdate();
            }
            /**
             * Without `layout` or `drag`, this only renders while there's a
             * layoutId, so a mounted node can gain one here.
             */
            if (projection.options.layoutId !== layoutId)
                switchLayoutId(projection, layoutId)?.();
            projection.addEventListener("animationComplete", () => this.safeToRemove());
            projection.setOptions({
                ...projection.options,
                ...layoutOptions(this.props),
                onExitComplete: () => this.safeToRemove(),
            });
        }
        globalProjectionState.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(prevProps) {
        const { layoutDependency, layoutId, visualElement, drag, isPresent } = this.props;
        const { projection } = visualElement;
        if (!projection)
            return null;
        /**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */
        projection.isPresent = isPresent;
        this.takeOver =
            prevProps.layoutId !== layoutId
                ? (projection.willUpdate(), switchLayoutId(projection, layoutId))
                : undefined;
        projection.setOptions({
            ...projection.options,
            ...layoutOptions(this.props),
        });
        hasTakenAnySnapshot = true;
        if (drag ||
            prevProps.layoutDependency !== layoutDependency ||
            layoutDependency === undefined ||
            prevProps.isPresent !== isPresent) {
            projection.willUpdate();
        }
        else {
            this.safeToRemove();
        }
        if (prevProps.isPresent !== isPresent) {
            if (isPresent) {
                projection.promote();
            }
            else if (!projection.relegate()) {
                /**
                 * If there's another stack member taking over from this one,
                 * it's in charge of the exit animation and therefore should
                 * be in charge of the safe to remove. Otherwise we call it here.
                 */
                frame.postRender(() => {
                    projection.getStack()?.members.length || this.safeToRemove();
                });
            }
        }
        return null;
    }
    componentDidUpdate() {
        const { projection } = this.props.visualElement;
        if (projection) {
            this.takeOver?.();
            projection.root.didUpdate();
            microtask.postRender(() => {
                if (!projection.currentAnimation && projection.isLead()) {
                    this.safeToRemove();
                }
            });
        }
    }
    componentWillUnmount() {
        const { visualElement, layoutGroup, switchLayoutGroup: promoteContext, } = this.props;
        const { projection } = visualElement;
        hasTakenAnySnapshot = true;
        if (projection) {
            projection.scheduleCheckAfterUnmount();
            layoutGroup.group?.remove(projection);
            promoteContext?.deregister?.(projection);
        }
    }
    safeToRemove() {
        this.props.safeToRemove?.();
    }
    render() {
        return null;
    }
}
function MeasureLayout(props) {
    const [isPresent, safeToRemove] = usePresence();
    const layoutGroup = reactExports.useContext(LayoutGroupContext);
    return (jsxRuntimeExports.jsx(MeasureLayoutWithContext, { ...props, layoutGroup: layoutGroup, switchLayoutGroup: reactExports.useContext(SwitchLayoutGroupContext), isPresent: isPresent, safeToRemove: safeToRemove }));
}

const drag = {
    pan: {
        Feature: PanGesture,
    },
    drag: {
        Feature: DragGesture,
        ProjectionNode: HTMLProjectionNode,
        MeasureLayout,
    },
};

/**
 * Toggle `while{gesture}` and fire `on{gesture}{lifecycle}`, e.g.
 * `onHoverStart` or, with an empty lifecycle, `onTap`. A repeat fires the
 * callback but leaves `while{gesture}` active.
 */
function handleGestureEvent(node, event, gesture, lifecycle, isRepeat) {
    const { props } = node;
    const whileKey = ("while" + gesture);
    if (!isRepeat && node.animationState && props[whileKey]) {
        node.animationState.setActive(whileKey, lifecycle === "Start");
    }
    const callback = props[("on" + gesture + lifecycle)];
    if (callback) {
        frame.postRender(() => callback(event, extractEventInfo(event)));
    }
}
class HoverGesture extends Feature {
    mount() {
        const { current } = this.node;
        if (!current)
            return;
        this.unmount = hover(current, (_element, startEvent) => {
            handleGestureEvent(this.node, startEvent, "Hover", "Start");
            return (endEvent) => handleGestureEvent(this.node, endEvent, "Hover", "End");
        });
    }
    unmount() { }
}

class FocusGesture extends Feature {
    constructor() {
        super(...arguments);
        this.isActive = false;
    }
    onFocus() {
        let isFocusVisible = false;
        /**
         * If this element doesn't match focus-visible then don't
         * apply whileHover. But, if matches throws that focus-visible
         * is not a valid selector then in that browser outline styles will be applied
         * to the element by default and we want to match that behaviour with whileFocus.
         */
        try {
            isFocusVisible = this.node.current.matches(":focus-visible");
        }
        catch (e) {
            isFocusVisible = true;
        }
        if (!isFocusVisible || !this.node.animationState)
            return;
        this.node.animationState.setActive("whileFocus", true);
        this.isActive = true;
    }
    onBlur() {
        if (!this.isActive || !this.node.animationState)
            return;
        this.node.animationState.setActive("whileFocus", false);
        this.isActive = false;
    }
    mount() {
        this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() { }
}

function handlePressEvent(node, event, lifecycle, isRepeat) {
    if (node.current instanceof HTMLButtonElement && node.current.disabled) {
        return;
    }
    handleGestureEvent(node, event, "Tap", lifecycle, isRepeat);
}
class PressGesture extends Feature {
    constructor() {
        super(...arguments);
        /**
         * press() reads its options on each press, so this object is kept
         * and updated in place when props change.
         */
        this.options = {};
    }
    mount() {
        const { current } = this.node;
        if (!current)
            return;
        this.update();
        this.unmount = press(current, (_element, startEvent) => {
            handlePressEvent(this.node, startEvent, "Start");
            return {
                onComplete: (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "" : "Cancel"),
                onRepeat: () => handlePressEvent(this.node, startEvent, "", true),
            };
        }, this.options);
    }
    update() {
        const { options, node } = this;
        const { globalTapTarget, propagate, tap } = node.props;
        for (const key in options)
            delete options[key];
        Object.assign(options, tap, {
            useGlobalTarget: globalTapTarget,
            stopPropagation: propagate?.tap === false,
        });
    }
    unmount() { }
}

/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */
const observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */
const observers = new WeakMap();
const fireObserverCallback = (entry) => {
    const callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
};
const fireAllObserverCallbacks = (entries) => {
    entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
    const lookupRoot = root || document;
    /**
     * If we don't have an observer lookup map for this root, create one.
     */
    if (!observers.has(lookupRoot)) {
        observers.set(lookupRoot, {});
    }
    const rootObservers = observers.get(lookupRoot);
    const key = JSON.stringify(options);
    /**
     * If we don't have an observer for this combination of root and settings,
     * create one.
     */
    if (!rootObservers[key]) {
        rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
    }
    return rootObservers[key];
}
function observeIntersection(element, options, callback) {
    const rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return () => {
        observerCallbacks.delete(element);
        rootInteresectionObserver.unobserve(element);
    };
}

const thresholdNames = {
    some: 0,
    all: 1,
};
class InViewFeature extends Feature {
    constructor() {
        super(...arguments);
        this.hasEnteredView = false;
        this.isInView = false;
    }
    startObserver() {
        this.stopObserver?.();
        const { viewport = {} } = this.node.getProps();
        const { root, margin: rootMargin, amount = "some", once } = viewport;
        const options = {
            root: root ? root.current : undefined,
            rootMargin,
            threshold: typeof amount === "number" ? amount : thresholdNames[amount],
        };
        const onIntersectionUpdate = (entry) => {
            const { isIntersecting } = entry;
            /**
             * If there's been no change in the viewport state, early return.
             */
            if (this.isInView === isIntersecting)
                return;
            this.isInView = isIntersecting;
            /**
             * Handle hasEnteredView. If this is only meant to run once, and
             * element isn't visible, early return. Otherwise set hasEnteredView to true.
             */
            if (once && !isIntersecting && this.hasEnteredView) {
                return;
            }
            else if (isIntersecting) {
                this.hasEnteredView = true;
            }
            if (this.node.animationState) {
                this.node.animationState.setActive("whileInView", isIntersecting);
            }
            /**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */
            const { onViewportEnter, onViewportLeave } = this.node.getProps();
            const callback = isIntersecting ? onViewportEnter : onViewportLeave;
            callback && callback(entry);
        };
        this.stopObserver = observeIntersection(this.node.current, options, onIntersectionUpdate);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver === "undefined")
            return;
        const { props, prevProps } = this.node;
        const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
        if (hasOptionsChanged) {
            this.startObserver();
        }
    }
    unmount() {
        this.stopObserver?.();
        this.hasEnteredView = false;
        this.isInView = false;
    }
}
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
    return (name) => viewport[name] !== prevViewport[name];
}

const gestureAnimations = {
    inView: {
        Feature: InViewFeature,
    },
    tap: {
        Feature: PressGesture,
    },
    focus: {
        Feature: FocusGesture,
    },
    hover: {
        Feature: HoverGesture,
    },
};

const layout = {
    layout: {
        ProjectionNode: HTMLProjectionNode,
        MeasureLayout,
    },
};

const featureBundle = /* @__PURE__ */ Object.assign({}, animations, gestureAnimations, drag, layout);

const motion$1 = /*@__PURE__*/ createMotionProxy(featureBundle, createDomVisualElement);

/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */
function useMotionValue(initial) {
    const value = useConstant(() => motionValue(initial));
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */
    const { isStatic } = reactExports.useContext(MotionConfigContext);
    if (isStatic) {
        const [, setLatest] = reactExports.useState(initial);
        reactExports.useEffect(() => value.on("change", setLatest), []);
    }
    return value;
}

function useCombineMotionValues(values, combineValues) {
    /**
     * Initialise the returned motion value. This remains the same between renders.
     */
    const value = useMotionValue(combineValues());
    /**
     * Create a function that will update the template motion value with the latest values.
     * This is pre-bound so whenever a motion value updates it can schedule its
     * execution in Framesync. If it's already been scheduled it won't be fired twice
     * in a single frame.
     */
    const updateValue = () => value.set(combineValues());
    /**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */
    updateValue();
    /**
     * Subscribe to all motion values found within the template. Whenever any of them change,
     * schedule an update.
     */
    useIsomorphicLayoutEffect(() => {
        const scheduleUpdate = () => frame.preRender(updateValue, false, true);
        const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
        /**
         * Catch up on changes made while unsubscribed. A source can change
         * between render and this subscription (e.g. in a child's layout
         * effect), and Strict Mode or <Activity> can re-run this effect
         * without a render after the cleanup cancelled a scheduled update.
         */
        updateValue();
        return () => {
            subscriptions.forEach((unsubscribe) => unsubscribe());
            cancelFrame(updateValue);
        };
    });
    return value;
}

function useComputed(compute) {
    /**
     * Open session of collectMotionValues. Any MotionValue that calls get()
     * will be saved into this array.
     */
    collectMotionValues.current = [];
    compute();
    const value = useCombineMotionValues(collectMotionValues.current, compute);
    /**
     * Synchronously close session of collectMotionValues.
     */
    collectMotionValues.current = undefined;
    return value;
}

function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
    if (typeof input === "function") {
        return useComputed(input);
    }
    /**
     * Detect if outputRangeOrMap is an output map (object with keys)
     * rather than an output range (array).
     */
    const isOutputMap = outputRangeOrMap !== undefined &&
        !Array.isArray(outputRangeOrMap) &&
        typeof inputRangeOrTransformer !== "function";
    if (isOutputMap) {
        return useMapTransform(input, inputRangeOrTransformer, outputRangeOrMap, options);
    }
    const outputRange = outputRangeOrMap;
    const transformer = typeof inputRangeOrTransformer === "function"
        ? inputRangeOrTransformer
        : transform(inputRangeOrTransformer, outputRange, options);
    const result = Array.isArray(input)
        ? useListTransform(input, transformer)
        : useListTransform([input], ([latest]) => transformer(latest));
    const inputAccelerate = !Array.isArray(input)
        ? input.accelerate
        : undefined;
    if (inputAccelerate &&
        !inputAccelerate.isTransformed &&
        typeof inputRangeOrTransformer !== "function" &&
        Array.isArray(outputRangeOrMap) &&
        options?.clamp !== false &&
        // WAAPI can't call a mixer
        true) {
        /**
         * WAAPI fills missing 0 and 1 offsets with the underlying value, so
         * hold the end values to match the clamped transform.
         */
        result.accelerate = {
            ...inputAccelerate,
            times: [0, ...inputRangeOrTransformer, 1],
            keyframes: [
                outputRangeOrMap[0],
                ...outputRangeOrMap,
                outputRangeOrMap[outputRangeOrMap.length - 1],
            ],
            isTransformed: true,
            ...({}),
        };
    }
    return result;
}
function useListTransform(values, transformer) {
    const latest = useConstant(() => []);
    return useCombineMotionValues(values, () => {
        latest.length = 0;
        const numValues = values.length;
        for (let i = 0; i < numValues; i++) {
            latest[i] = values[i].get();
        }
        return transformer(latest);
    });
}
function useMapTransform(inputValue, inputRange, outputMap, options) {
    /**
     * Capture keys once to ensure hooks are called in consistent order.
     */
    const keys = useConstant(() => Object.keys(outputMap));
    const output = useConstant(() => ({}));
    for (const key of keys) {
        output[key] = useTransform(inputValue, inputRange, outputMap[key], options);
    }
    return output;
}

// Re-export everything from framer-motion.
//
// `motion` and `m` are aliased through local bindings so the module has
// explicit named exports for IDE auto-import (see #3432). The previous
// `export { motion, m } from "framer-motion"` line — sitting alongside
// `export * from "framer-motion"` — was a duplicate-source re-export pattern
// that caused Next.js Turbopack to OOM during module-graph analysis (#3741).
// Local declarations shadow the wildcard re-export per the ES spec, so
// `motion` and `m` come from the explicit bindings below and the rest from
// `export *`.
const motion = motion$1;

const current = () => location.hash.replace(/^#/, "") || "/";
function useRoute() {
  const [r, setR] = reactExports.useState(current);
  reactExports.useEffect(() => {
    const on = () => {
      setR(current());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return r;
}
function navigate(path) {
  if (current() !== path) location.hash = path;
}

function assetUrl(path, base = "/surprise-card-preview/") {
  return `${base.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}

let cachedManifest = null;
let inflight = null;
let loadError = false;
const listeners = /* @__PURE__ */ new Set();
function loadPlaceManifest(force = false) {
  if (cachedManifest && !force) return Promise.resolve(cachedManifest);
  if (inflight && !force) return inflight;
  if (typeof fetch !== "function" || typeof window === "undefined") {
    return Promise.resolve(null);
  }
  loadError = false;
  listeners.forEach((fn) => fn());
  inflight = fetch(assetUrl("images/manifest.json")).then((r) => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
  }).then((data) => {
    if (data && data.places) {
      cachedManifest = data;
      loadError = false;
      listeners.forEach((fn) => fn());
    } else {
      loadError = true;
      listeners.forEach((fn) => fn());
    }
    return cachedManifest;
  }).catch(() => {
    loadError = true;
    listeners.forEach((fn) => fn());
    return null;
  }).finally(() => {
    inflight = null;
  });
  return inflight;
}
function resolvePlacePhoto(manifest, placeId) {
  const entry = manifest?.places?.[placeId];
  if (!entry) return null;
  const picked = entry.candidates.find((c) => c.filename === entry.selected) ?? entry.candidates[0];
  if (!picked) return null;
  return {
    placeId,
    name: entry.name,
    url: assetUrl(picked.path),
    objectPosition: entry.objectPosition || "50% 45%",
    dominantColor: entry.dominantColor || "#e8dfd0",
    blurDataUrl: entry.blurDataUrl || "",
    artist: picked.artist,
    license: picked.license,
    licenseUrl: picked.licenseUrl,
    commonsUrl: picked.commonsUrl
  };
}
function usePlaceManifest() {
  const [manifest, setManifest] = reactExports.useState(cachedManifest);
  reactExports.useEffect(() => {
    const update = () => setManifest(cachedManifest);
    listeners.add(update);
    if (!cachedManifest) void loadPlaceManifest();
    return () => {
      listeners.delete(update);
    };
  }, []);
  return manifest;
}
function usePlaceManifestState() {
  const [manifest, setManifest] = reactExports.useState(cachedManifest);
  const [error, setError] = reactExports.useState(loadError);
  reactExports.useEffect(() => {
    const update = () => {
      setManifest(cachedManifest);
      setError(loadError);
    };
    listeners.add(update);
    if (!cachedManifest && !loadError) void loadPlaceManifest();
    return () => {
      listeners.delete(update);
    };
  }, []);
  return {
    manifest,
    error,
    retry: () => {
      void loadPlaceManifest(true);
    }
  };
}
function usePlacePhoto(placeId) {
  const manifest = usePlaceManifest();
  return resolvePlacePhoto(manifest, placeId);
}

const QUERY = "(prefers-reduced-motion: reduce)";
function usePrefersReducedMotion() {
  const [reduced, setReduced] = reactExports.useState(
    () => typeof window !== "undefined" && typeof window.matchMedia === "function" ? window.matchMedia(QUERY).matches : false
  );
  reactExports.useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const mql = window.matchMedia(QUERY);
    setReduced(mql.matches);
    const onChange = (e) => setReduced(e.matches);
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }
    mql.addListener?.(onChange);
    return () => mql.removeListener?.(onChange);
  }, []);
  return reduced;
}

function distanceM(a, b) {
  const R = 6371e3;
  const toRad = (d) => d * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
function walkMinutes(m) {
  return Math.max(1, Math.round(m * 1.3 / 80));
}
function formatDistance(m) {
  return m < 1e3 ? `${Math.round(m / 10) * 10}m` : `${(m / 1e3).toFixed(1)}km`;
}
function withinUnlockRange(dist, radiusM, accuracyM) {
  return dist <= radiusM + Math.min(Math.max(accuracyM, 0), 50);
}
const KINTETSU_NARA = {
  label: "近鉄奈良駅",
  lat: 34.68444,
  lng: 135.82742
};
function googleWalkingUrl(dest, origin, via) {
  const p = new URLSearchParams({ api: "1", destination: `${dest.lat},${dest.lng}`, travelmode: "walking" });
  if (origin) p.set("origin", `${origin.lat},${origin.lng}`);
  if (via) p.set("waypoints", `${via.lat},${via.lng}`);
  return `https://www.google.com/maps/dir/?${p.toString()}`;
}
const toMin = (t) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};
function openState(h, now = /* @__PURE__ */ new Date(), arriveInMin = 0) {
  const t = new Date(now.getTime() + arriveInMin * 6e4);
  if (h.closedWeekdays.includes(t.getDay())) return { open: false, label: "本日休館・休業日" };
  if (!h.open || !h.close) return { open: true, label: h.note ?? "終日通行可" };
  const cur = t.getHours() * 60 + t.getMinutes();
  if (cur < toMin(h.open)) return { open: false, label: `${h.open} から公開` };
  if (cur >= toMin(h.close)) return { open: false, label: `本日の公開は ${h.close} まで（終了）` };
  return { open: true, label: `${h.open}〜${h.close}` };
}

const BUFFER_MIN = 5;
function buildDeck(spots, origin, dest, minutes, opts = {}) {
  const now = opts.now ?? /* @__PURE__ */ new Date();
  const rand = opts.rand ?? Math.random;
  const ok = [];
  const rejected = [];
  for (const spot of spots) {
    if (distanceM(origin, spot) <= spot.unlockRadiusM + 50) continue;
    const toSpotMin = walkMinutes(distanceM(origin, spot));
    const toDestMin = walkMinutes(distanceM(spot, dest));
    const visitMin = spot.visitMin;
    const totalMin = toSpotMin + visitMin + toDestMin;
    if (totalMin + BUFFER_MIN > minutes) {
      rejected.push({ spot, reason: "time", totalMin });
      continue;
    }
    const openOnArrival = openState(spot.hours, now, toSpotMin).open;
    const openUntilLeave = openState(spot.hours, now, toSpotMin + visitMin).open;
    if (!openOnArrival || !openUntilLeave) {
      rejected.push({ spot, reason: "closed", totalMin });
      continue;
    }
    ok.push({ spot, toSpotMin, visitMin, toDestMin, totalMin, slackMin: minutes - totalMin, visited: spot.unlocked });
  }
  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  return { deck: [...shuffle(ok.filter((d) => !d.visited)), ...shuffle(ok.filter((d) => d.visited))], rejected };
}

const LANG_KEY = "surprisecard.lang.v1";
function readUrlLang(search = typeof location !== "undefined" ? location.search ?? "" : "", hash = typeof location !== "undefined" ? location.hash ?? "" : "") {
  const safeSearch = typeof search === "string" ? search : "";
  const safeHash = typeof hash === "string" ? hash : "";
  const fromSearch = new URLSearchParams(safeSearch).get("lang");
  const hashQuery = safeHash.includes("?") ? safeHash.slice(safeHash.indexOf("?") + 1) : "";
  const raw = fromSearch ?? new URLSearchParams(hashQuery).get("lang");
  if (raw === "ja" || raw === "en" || raw === "zh") return raw;
  return null;
}
function loadLang() {
  try {
    const v = localStorage.getItem(LANG_KEY);
    if (v === "ja" || v === "en" || v === "zh") return v;
  } catch {
  }
  return "ja";
}
function saveLang(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
  }
}
const SPOT_TEXTS = {
  "kyobate-station": {
    en: {
      name: "JR Kyobate Station",
      area: "Kyobate",
      teaser: "A tiny wooden station gateway with Meiji-era charm",
      address: "211 Minami-Kyobate-cho, Nara",
      hoursNote: "Unmanned station open 24h (cafe/info hours vary)",
      fee: "Free to view station building (cafe separate)",
      safety: ["Stay clear of tracks and trains when taking photos", "Unmanned station; visit nearby tourist desks if you need help"],
      dataNote: "Exact hours and prices for the attached cafe and info corner could not be verified.",
      story: "Restored in 2019 by Nara City based on its original 1898 opening design. The former station office is now a cafe and local info space, welcoming walkers heading north into historic Naramachi."
    },
    zh: {
      name: "JR京终站",
      area: "京终",
      teaser: "保留明治风貌的小巧木造车站入口",
      address: "奈良县奈良市南京终町211",
      hoursNote: "车站为无人站全天通行（附设咖啡馆等营业时间另计）",
      fee: "免费参观站舍（咖啡消费另计）",
      safety: ["拍摄列车或站台时请注意安全，切勿越线", "无人值守车站，有需要可前往周边观光问讯处"],
      dataNote: "附设咖啡馆与观光问讯角的营业时间及价格暂未能从官方渠道确认。",
      story: "2019年奈良市依据1898年开业时的风貌复原了这座木造站舍。旧站务室化身为咖啡馆与观光角落，从这里向北步行即可走入古色古香的奈良町老街。"
    }
  },
  "irie-photo-museum": {
    en: {
      name: "Irie Taikichi Memorial Museum of Photography",
      area: "Takabatake",
      teaser: "See Nara through the lifelong lens of one master photographer",
      address: "600-1 Takabatake-cho, Nara",
      hoursNote: "9:30–17:00 (last entry 16:30). Closed Mon (or next weekday if holiday) & exhibit changes",
      fee: "General ¥500 (special exhibitions may vary)",
      safety: ["Ramps and elevators available inside", "Quiet residential neighborhood — please stroll softly"],
      dataNote: "Substitute holiday closures and exhibition changeovers vary; check the official site before visiting.",
      story: "Designed by Kisho Kurokawa and opened in 1992, this municipal museum houses the works of Taikichi Irie, who spent his life photographing Nara landscapes and Buddhist statues. Step outside afterward to wander the earthen-walled lanes of Takabatake."
    },
    zh: {
      name: "入江泰吉纪念 奈良市写真美术馆",
      area: "高畑",
      teaser: "在一代摄影大师的镜头里，遇见他凝望一生的奈良",
      address: "奈良县奈良市高畑町600-1",
      hoursNote: "9:30–17:00（16:30停止入馆）。周一休馆（遇节假日顺延至次日），换展及年末年初休馆",
      fee: "成人 500日元（特展可能不同）",
      safety: ["馆内设有坡道及电梯", "周边为安静住宅区，请轻声漫步"],
      dataNote: "节假日顺延闭馆及换展期因日程而异，出发前请查看官网。",
      story: "由建筑师黑川纪章设计、1992年开馆的市立摄影美术馆，馆藏一生拍摄奈良风土与佛像的入江泰吉作品。走出美术馆后，不妨亲自走进高畑的土墙小巷，寻找镜头里的光影。"
    }
  },
  "shiga-naoya-house": {
    en: {
      name: "Former Residence of Shiga Naoya",
      area: "Takabatake",
      teaser: "A light-filled home co-designed by a literary master",
      address: "1237-2 Takabatake-cho, Nara",
      hoursNote: "9:30–17:30 (until 16:30 Dec–Feb), last entry 30 min before close. Closed Dec 28–Jan 5",
      fee: "General ¥350 (per Nara City Tourism Assoc.)",
      safety: ["Shoes must be removed indoors", "Watch your step on traditional raised thresholds"],
      dataNote: "Admission differs across sources (¥350 / ¥500); winter early closing is not reflected in the automatic filter.",
      story: 'Built in 1929 in sukiya-inspired style with novelist Naoya Shiga helping design the layout. He lived here until 1938 and completed "A Dark Night’s Passing." The sunlit sunroom and dining hall still echo the "Takabatake Salon" of writers and painters.'
    },
    zh: {
      name: "志贺直哉旧居",
      area: "高畑",
      teaser: "由文豪亲自参与设计的温暖采光宅邸",
      address: "奈良县奈良市高畑町1237-2",
      hoursNote: "9:30–17:30（12–2月至16:30），闭馆前30分钟停止入馆。12/28–1/5休馆",
      fee: "成人 350日元（据奈良市观光协会信息）",
      safety: ["入内参观需脱鞋", "室内外有台阶高低差，请留心脚下"],
      dataNote: "不同资料记载票价略有差异（350/500日元），冬季提前闭馆暂未计入自动筛选。",
      story: "作家志贺直哉于1929年亲自参与设计的数寄屋风住宅，他在此居住至1938年并完成长篇小说《暗夜行路》。阳光房与餐厅里至今留存着昔日文人画家聚会的“高畑沙龙”气息。"
    }
  },
  futaiji: {
    en: {
      name: "Futaiji Temple",
      area: "Sahoji",
      teaser: "A quiet flower temple named after a Heian poet",
      address: "517 Horen-cho, Nara",
      hoursNote: "9:00–17:00 (admission until ~16:50)",
      fee: "General ¥500 (special openings vary)",
      safety: ["5–7 min walk north from Ichijo-koko-mae (Futaiji-guchi) bus stop", "Please observe quiet temple etiquette"],
      dataNote: "Regular closing days could not be confirmed; special events may limit access.",
      story: 'Known as "Narihira-dera" after Heian poet Ariwara no Narihira. Its Kamakura-period Main Hall and South Gate are Important Cultural Properties, framed by seasonal flowers along the tranquil Sahoji temple route.'
    },
    zh: {
      name: "不退寺",
      area: "佐保路",
      teaser: "以平安时代歌人之名传颂的静谧花之古寺",
      address: "奈良县奈良市法莲町517",
      hoursNote: "9:00–17:00（16:50左右停止受理）",
      fee: "成人 500日元（特别公开期另计）",
      safety: ["从“一条高校前（不退寺口）”巴士站向北步行约5–7分钟", "参拜时请遵守寺院礼仪"],
      dataNote: "暂未确认固定休息日，如遇法事活动可能暂停参观。",
      story: "相传与平安时代歌人在原业平渊源深厚，又称“业平寺”。镰仓时代修建的本堂与南门为日本重要文化财，四季花木相伴，是佐保路清幽古寺漫步的好起点。"
    }
  }
};
const DEST_LABELS = {
  "jr-nara": { ja: "JR奈良駅", en: "JR Nara Sta.", zh: "JR奈良站" },
  "kintetsu-nara": { ja: "近鉄奈良駅", en: "Kintetsu-Nara Sta.", zh: "近铁奈良站" },
  todaiji: { ja: "東大寺（大仏殿）", en: "Todai-ji", zh: "东大寺（大佛殿）" },
  kasuga: { ja: "春日大社", en: "Kasuga Taisha", zh: "春日大社" },
  "shin-omiya": { ja: "近鉄新大宮駅", en: "Shin-Omiya Sta.", zh: "近铁新大宫站" }
};
function getDestLabel(dest, lang) {
  return DEST_LABELS[dest.id]?.[lang] ?? dest.label;
}
function getPlaceDisplayName(placeId, nameJa, nameEn, lang) {
  if (lang === "ja") return nameJa;
  if (DEST_LABELS[placeId]?.[lang]) return DEST_LABELS[placeId][lang];
  if (SPOT_TEXTS[placeId]?.[lang]?.name) return SPOT_TEXTS[placeId][lang].name;
  return lang === "en" && nameEn ? nameEn : nameJa;
}
function getSpotText(spot, lang) {
  if (lang === "ja") {
    return {
      name: spot.name,
      area: spot.area,
      teaser: spot.teaser,
      address: spot.address,
      hoursNote: spot.hours.note ?? "",
      fee: spot.fee,
      safety: spot.safety,
      dataNote: spot.dataNote
    };
  }
  const t = SPOT_TEXTS[spot.id]?.[lang];
  if (!t) {
    return {
      name: spot.nameEn || spot.name,
      area: spot.area,
      teaser: spot.teaser,
      address: spot.address,
      hoursNote: spot.hours.note ?? "",
      fee: spot.fee,
      safety: spot.safety,
      dataNote: spot.dataNote
    };
  }
  return t;
}
function formatOpenState(os, lang) {
  if (lang === "ja") return os.label;
  if (os.label === "本日休館・休業日") return lang === "en" ? "Closed today" : "今日闭馆・休息";
  if (os.label === "終日通行可") return lang === "en" ? "Open all day" : "全天通行";
  const openMatch = os.label.match(/^(\d{2}:\d{2}) から公開$/);
  if (openMatch) return lang === "en" ? `Opens at ${openMatch[1]}` : `${openMatch[1]} 开放`;
  const closeMatch = os.label.match(/^本日の公開は (\d{2}:\d{2}) まで（終了）$/);
  if (closeMatch) return lang === "en" ? `Closed (until ${closeMatch[1]})` : `今日已闭馆（至 ${closeMatch[1]}）`;
  return os.open ? lang === "en" ? "Open" : "开放中" : os.label;
}
function formatEmptyAdvice(r, minutes, lang) {
  if (lang === "ja") {
    if (!r.rejected.length) return "登録されているスポットがありません。";
    const timeOnly2 = r.rejected.filter((x) => x.reason === "time");
    if (timeOnly2.length) {
      const nearest = Math.min(...timeOnly2.map((x) => x.totalMin)) + BUFFER_MIN;
      if (nearest > minutes) return `いちばん近い寄り道でも約${nearest}分かかります。時間を延ばすか、目的地を変えてみてください。`;
    }
    return "いまの時間帯に公開されていて、時間内に寄れる場所がありません。";
  }
  if (!r.rejected.length) {
    return lang === "en" ? "No spots registered." : "暂无可推荐的顺路地点。";
  }
  const timeOnly = r.rejected.filter((x) => x.reason === "time");
  if (timeOnly.length) {
    const nearest = Math.min(...timeOnly.map((x) => x.totalMin)) + BUFFER_MIN;
    if (nearest > minutes) {
      return lang === "en" ? `Even the closest detour needs about ${nearest} min. Try extending your time or changing the destination.` : `最近的顺路地点也需要约 ${nearest} 分钟。请试着增加剩余时间或更换终点。`;
    }
  }
  return lang === "en" ? "No spots are both open right now and reachable within your remaining time." : "当前时段暂无既开放又能在剩余时间内顺路前往的地点。";
}
function formatRelativeTime(iso, lang, now = Date.now()) {
  const diff = Math.max(0, now - new Date(iso).getTime());
  const m = Math.floor(diff / 6e4);
  if (lang === "ja") {
    if (m < 1) return "たった今";
    if (m < 60) return `${m}分前`;
    const h2 = Math.floor(m / 60);
    if (h2 < 24) return `${h2}時間前`;
    const d2 = Math.floor(h2 / 24);
    if (d2 < 30) return `${d2}日前`;
    return new Date(iso).toLocaleDateString("ja-JP");
  }
  if (lang === "en") {
    if (m < 1) return "Just now";
    if (m < 60) return `${m}m ago`;
    const h2 = Math.floor(m / 60);
    if (h2 < 24) return `${h2}h ago`;
    const d2 = Math.floor(h2 / 24);
    if (d2 < 30) return `${d2}d ago`;
    return new Date(iso).toLocaleDateString("en-US");
  }
  if (m < 1) return "刚刚";
  if (m < 60) return `${m}分钟前`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}小时前`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}天前`;
  return new Date(iso).toLocaleDateString("zh-CN");
}
function getCategoryLabel(c, lang) {
  const map = {
    ja: { discovery: "発見", hint: "ヒント", memory: "思い出", scenery: "景色" },
    en: { discovery: "Discovery", hint: "Tip", memory: "Memory", scenery: "View" },
    zh: { discovery: "发现", hint: "贴士", memory: "回忆", scenery: "风景" }
  };
  return map[lang][c];
}
function formatLocSummary(status, hasPos, source, lang) {
  if (lang === "ja") {
    if (hasPos) return source === "demo" ? "現在地：デモ位置" : "現在地を取得済み";
    if (status === "denied") return "位置未許可（近鉄奈良駅から計算）";
    const map2 = {
      idle: "現在地はまだ取得していません",
      locating: "現在地を取得しています…",
      ok: "現在地を取得しました",
      unavailable: "現在地を取得できませんでした",
      timeout: "現在地の取得に時間がかかっています",
      unsupported: "位置情報に非対応のブラウザです",
      insecure: "位置情報は HTTPS で使えます"
    };
    return `${map2[status] ?? "現在地を取得中"}（近鉄奈良駅から計算）`;
  }
  if (lang === "en") {
    if (hasPos) return source === "demo" ? "Location: Demo position" : "Current location ready";
    if (status === "denied") return "Location denied (from Kintetsu-Nara Sta.)";
    const map2 = {
      idle: "Location not requested yet",
      locating: "Getting your location…",
      ok: "Location acquired",
      unavailable: "Location unavailable",
      timeout: "Location timed out",
      unsupported: "Geolocation unsupported",
      insecure: "HTTPS required for GPS"
    };
    return `${map2[status] ?? "Locating"} (from Kintetsu-Nara)`;
  }
  if (hasPos) return source === "demo" ? "当前位置：演示坐标" : "已获取当前位置";
  if (status === "denied") return "未授权定位（按近铁奈良站出发计算）";
  const map = {
    idle: "尚未获取定位",
    locating: "正在获取当前位置…",
    ok: "已获取当前位置",
    unavailable: "无法获取当前位置",
    timeout: "获取定位超时",
    unsupported: "浏览器不支持定位",
    insecure: "需要 HTTPS 才能使用定位"
  };
  return `${map[status] ?? "定位中"}（按近铁奈良站计算）`;
}
const DICT = {
  ja: {
    tagline: "次の行き先も、次に届く言葉も、ちょっとした偶然から。",
    myRecordAria: "旅の記録",
    aboutTitle: "このプロトタイプについて",
    onDetour: "寄り道中：",
    finalDest: "最後に行く場所",
    timeLeft: "残り時間",
    minUnit: "分",
    walk: "徒歩",
    retry: "再取得",
    deckCoverLine1: "次の寄り道は、",
    deckCoverLine2: "この中に。",
    deckCoverSub: "{dest}まで{min}分で\n無理なく寄れる場所から1枚",
    drawBtn: "カードを引く",
    redrawBtn: "引き直す",
    goHereBtn: "ここに寄る",
    emptyTitle: "いまは寄り道を出せません",
    emptyNote: "無理のない寄り道だけを提案しています",
    deckEndTitle: "カードは以上です",
    deckEndSub: "この条件で寄れる場所は{n}か所でした。",
    reshuffleBtn: "もう一度シャッフルして引く",
    extendTimeBtn: "{m}分に延ばして探す",
    onlyOneHint: "この時間帯に寄れるのは、いまこの1か所だけです",
    onlyOneShort: "この1か所のみ",
    swipeHint: "次のカードへ",
    visitedBadge: "訪問済み",
    stayLabel: "立ち寄り",
    toDestLabel: "{dest}まで",
    totalMin: "計{n}分",
    travelerCards: "旅人のカード",
    cardsUnit: "{n}枚",
    flipHint: "タップで詳細を見る ・ 左右スワイプで引き直す",
    leg1: "現在地 → ここ  徒歩 約{n}分",
    leg2: "立ち寄り  約{n}分",
    leg3: "ここ → {dest}  徒歩 約{n}分",
    legSummary: "合計 約{total}分・余裕 {slack}分（直線距離からの概算）",
    openOnArrival: "到着時は公開中",
    photoCredit: "写真",
    backAria: "戻る",
    goTitle: "寄り道へ向かう",
    spotNotFound: "スポットが見つかりません",
    distToHere: "ここまで {dist}・徒歩約{min}分",
    fallbackOriginNote: "※ 現在地未取得のため近鉄奈良駅からの概算",
    demoOriginNote: "※ デモ位置で計算中",
    openRoute: "経路を開く（寄り道 → {dest}・Googleマップ）",
    seeCardsBtn: "旅人のカードを見る",
    waitingCards: "{n}枚の旅人のカードが待っています",
    autoUnlockHint: "着いたら自動で受け取れます（半径{r}m）",
    checkingIn: "確認中…",
    receiveCards: "カードを受け取る",
    checkInArrived: "着いたのでチェックイン",
    checkBeforeGo: "向かう前に確認",
    cancelDetour: "この寄り道をやめる",
    mapAria: "スポットの地図",
    mapOffline: "地図タイルを読み込めません（オフラインまたは接続エラー）",
    mapRetry: "再試行",
    openNow: "現在公開中",
    openAtArrival: "到着予定時刻は公開中",
    accessOpenTitle: "公開・営業",
    accessFeeTitle: "料金",
    accessAddressTitle: "住所",
    accessSafetyTitle: "安全・アクセス",
    accessDataNote: "情報の確認状況：",
    lockedCount: "{n}人の旅人がメッセージを残しています",
    lockedNone: "まだ誰のメッセージもありません",
    lockedHint: "現地に到着すると、すべての写真とメッセージが解放されます",
    spotLoadError: "読み込めませんでした",
    notUnlockedTitle: "まだ受け取れません",
    goToSpotBtn: "この場所へ向かう",
    stackedCards: "この場所に積み重なった {n} 枚のカード",
    noCardsYet: "まだ誰もカードを残していません",
    latestCard: "最新のカード",
    nthCard: "{n}枚目・前の旅人",
    firstCardTitle: "ここが最初のカードでした",
    firstTravelerTitle: "あなたが最初の旅人です",
    firstCardDesc: "この場所の物語は、ここから始まりました。",
    firstTravelerDesc: "次に来る誰かへ、最初のカードを残しませんか？",
    backToLatest: "最新のカードに戻る",
    prevNewer: "← 新しい",
    nextOlder: "めくる →",
    postedBanner: "あなたのカードが、この場所のいちばん上に積まれました",
    headToDest: "{dest}へ向かう",
    toDestShort: "{dest}へ",
    drawNextBtn: "次のカードを引く",
    leaveCardBtn: "自分のカードを残す",
    postedToast: "カードを残しました。次の旅人に届きますように",
    sampleImage: "サンプル画像",
    sampleTag: "サンプル",
    youTag: "あなた",
    menuAria: "メニュー",
    likeAria: "いいね",
    unlikeAria: "いいねを取り消す",
    likeError: "いいねできませんでした",
    actionError: "操作できませんでした",
    deleteCard: "このカードを削除する",
    reportCard: "このカードを通報する",
    cancel: "キャンセル",
    deleteConfirm: "このカードを削除しますか？ 写真も削除され、元に戻せません。",
    stopDelete: "やめる",
    confirmDelete: "削除する",
    deletedToast: "カードを削除しました",
    reportPrompt: "通報の理由を選んでください（このカードはあなたには表示されなくなります）",
    reportedToast: "通報しました",
    composerTitle: "次の旅人へカードを残す",
    closeAria: "閉じる",
    chosenPhotoAlt: "選んだ写真",
    removePhotoAria: "写真を外す",
    preparingPhoto: "写真を準備中…",
    pickPhotoLabel: "写真を1枚（なくてもOK）",
    bodyPlaceholder: "ここで見つけたこと、ひとこと",
    bodyAria: "ひとこと",
    exifNote: "写真の位置情報（EXIF）は自動で削除されます。人の顔や車のナンバーが写らないようご配慮ください。表示名：{name}",
    postingBtn: "残しています…",
    postBtn: "カードを残す",
    unlockDialogAria: "スポット解放",
    discoveredTitle: "新しい場所を発見しました！",
    arrivedCardsPrefix: "前の旅人たちから",
    arrivedCardsCount: "{n}枚のカード",
    arrivedCardsSuffix: "が届いています。",
    arrivedFirstPrompt: "ここにはまだ誰のカードもありません。あなたが最初の旅人になりませんか？",
    meTitle: "旅の記録",
    displayNameLabel: "表示名",
    saveBtn: "保存",
    savedNameToast: "表示名を保存しました",
    displayNameNote: "カードに表示される名前です。本名は避けてください。",
    yourCardsTitle: "あなたが残したカード",
    noMyCards: "まだカードはありません",
    reachedCount: "{n}人の旅人に届きました",
    waitingNextTraveler: "まだ次の旅人を待っています",
    visitedPlacesTitle: "訪れた場所（{visited}/{total}）",
    noVisitedPlaces: "カードを引いて、最初の寄り道へ",
    loadRetryBtn: "再試行",
    aboutLead1: "予定の中に、小さな冒険を。",
    aboutLead2: "そして、自分の発見を次の旅人へ。",
    aboutRealTitle: "✅ 実際に動作している機能",
    aboutDemoTitle: "🧪 デモ・仮の部分",
    aboutCreditsTitle: "📷 写真の出典・ライセンス（Wikimedia Commons）",
    aboutCreditsDesc: "各地点の写真は Public Domain / CC0 / CC BY / CC BY-SA の自由利用許可画像を使用しています。すべての候補画像の詳細は public/images/credits.json に記録しています。",
    aboutAuthor: "作者：",
    aboutLoading: "読み込み中…",
    aboutLoadFailed: "写真クレジット情報を読み込めませんでした。",
    aboutFootnote: "スポットと目的地の座標・営業情報は Wikipedia・奈良市観光協会などで確認したものです（2026年11月時点）。確認できなかった情報は各スポットに「⚠」で表示しています。お出かけ前に公式情報もご確認ください。",
    checkInDenied: "位置情報が許可されていません",
    checkInLocating: "現在地を取得しています。少し待ってからもう一度お試しください",
    checkInTooFar: "あと約{dist}で解放できます",
    checkInFailed: "チェックインに失敗しました",
    bootErrorTitle: "接続できませんでした",
    reloadBtn: "再読み込み",
    cardAuthorPhotoAlt: "{name}さんの写真",
    entryBlindTitle: "盲抽手がかり散歩",
    entryBlindSub: "地名を伏せて、感官のヒントと距離だけで歩く",
    modeNormal: "通常",
    modeBlind: "盲抽手がかり",
    blindBadge: "盲抽手がかり",
    blindHiddenTitle: "霧の向こうの寄り道",
    blindSensoryLabel: "前の旅人からの手がかり",
    blindCommitLine1: "最遅 {time} 出発で〈{dest}〉へ間に合う",
    blindCommitLine2: "余白 約{slack}分",
    blindCommitSoon: "そろそろ折り返しの目安です",
    blindCommitTight: "そろそろ目的地へ向かう時間です",
    blindStartBtn: "出発する",
    blindRulesTitle: "盲抽手がかり散歩について",
    blindRulesBody: "地名を伏せた霧のカードと感官の手がかりだけで歩きます。営業中で時間に間に合う候補があるときだけ案内し、いつでも地名を明かして地図へ戻れます。",
    blindWalkingTitle: "手がかり散歩中",
    blindResumeLabel: "盲抽手がかり散歩を続ける",
    blindRevealBtn: "地名を見て地図へ切替",
    blindBandFar: "まだ少し遠く",
    blindBandCloser: "少しずつ近く",
    blindBandNearby: "すぐ近く",
    blindBandNoGps: "現在地を待っています",
    blindTempStart: "出発基準を記録しました",
    blindTempWarmer: "近づいています",
    blindTempColder: "遠ざかっています",
    blindTempNearby: "すぐ近くです",
    blindTempNoGps: "位置が取れると距離の変化を案内します",
    blindDistHint: "歩く距離だけで、そっと近づき方を案内します",
    blindMoreHintBtn: "もう少しヒントを見る（{used}/{max}）",
    blindMoreHintDone: "手がかりはすべて開きました",
    blindExtraHintLabel: "追加の手がかり {n}",
    blindGpsInlineError: "現在地を取得できません",
    blindClueSwapBtn: "別の手がかり",
    blindOfflineBanner: "オフラインです（手がかり表示は続けられます・通信復帰後に再試行できます）",
    blindOfflineRetry: "再試行"
  },
  en: {
    tagline: "A spontaneous detour & a note left by the last traveler.",
    myRecordAria: "Travel Log",
    aboutTitle: "About Surprise Card",
    onDetour: "On detour: ",
    finalDest: "Destination",
    timeLeft: "Time left",
    minUnit: "m",
    walk: "Walk",
    retry: "Retry",
    deckCoverLine1: "Your next detour",
    deckCoverLine2: "awaits inside.",
    deckCoverSub: "1 spot you can comfortably visit\non the way to {dest} within {min} min",
    drawBtn: "Draw a card",
    redrawBtn: "Redraw",
    goHereBtn: "Go Here",
    emptyTitle: "No detours fit right now",
    emptyNote: "We only suggest detours that fit comfortably.",
    deckEndTitle: "End of deck",
    deckEndSub: "Found {n} reachable detour spot(s) for these settings.",
    reshuffleBtn: "Shuffle & Draw Again",
    extendTimeBtn: "Try {m} min",
    onlyOneHint: "Only this 1 spot is open and reachable right now.",
    onlyOneShort: "Only 1 spot",
    swipeHint: "Next card",
    visitedBadge: "Visited",
    stayLabel: "Stay",
    toDestLabel: "To {dest}",
    totalMin: "{n} min",
    travelerCards: "Cards",
    cardsUnit: "{n}",
    flipHint: "Tap for details · Swipe left/right for another",
    leg1: "Here → Spot  ~{n} min walk",
    leg2: "Visit  ~{n} min",
    leg3: "Spot → {dest}  ~{n} min walk",
    legSummary: "Total ~{total} min · {slack} min spare (straight-line est.)",
    openOnArrival: "Open upon arrival",
    photoCredit: "Photo",
    backAria: "Back",
    goTitle: "Heading to Detour",
    spotNotFound: "Spot not found",
    distToHere: "{dist} away · ~{min} min walk",
    fallbackOriginNote: "* Estimated from Kintetsu-Nara Sta. (GPS unavailable)",
    demoOriginNote: "* Calculated using demo location",
    openRoute: "Open Route (Detour → {dest} · Google Maps)",
    seeCardsBtn: "Read Traveler Cards",
    waitingCards: "{n} traveler card(s) waiting here",
    autoUnlockHint: "Unlocks automatically on arrival (within {r}m)",
    checkingIn: "Checking…",
    receiveCards: "Unlock Cards",
    checkInArrived: "I'm Here — Check In",
    checkBeforeGo: "Before You Go",
    cancelDetour: "Cancel this detour",
    mapAria: "Spot Map",
    mapOffline: "Map tiles unavailable (offline or connection error)",
    mapRetry: "Retry",
    openNow: "Open now",
    openAtArrival: "Open at estimated arrival",
    accessOpenTitle: "Hours",
    accessFeeTitle: "Admission",
    accessAddressTitle: "Address",
    accessSafetyTitle: "Safety & Access",
    accessDataNote: "Verification note: ",
    lockedCount: "{n} traveler(s) left a card here",
    lockedNone: "No cards here yet",
    lockedHint: "Arrive at the spot to unlock all photos and notes.",
    spotLoadError: "Could not load spot",
    notUnlockedTitle: "Locked for now",
    goToSpotBtn: "Head to This Spot",
    stackedCards: "{n} card(s) stacked at this spot",
    noCardsYet: "No one has left a card yet",
    latestCard: "Latest card",
    nthCard: "Card #{n} · Earlier traveler",
    firstCardTitle: "That was the very first card",
    firstTravelerTitle: "You are the first traveler",
    firstCardDesc: "The story of this place started right here.",
    firstTravelerDesc: "Leave the first card for whoever comes next?",
    backToLatest: "Back to Latest Card",
    prevNewer: "← Newer",
    nextOlder: "Next →",
    postedBanner: "Your card is now stacked on top at this spot",
    headToDest: "Head to {dest}",
    toDestShort: "To {dest}",
    drawNextBtn: "Draw Next Card",
    leaveCardBtn: "Leave Your Card",
    postedToast: "Card posted! Hope it reaches the next traveler.",
    sampleImage: "Sample photo",
    sampleTag: "Sample",
    youTag: "You",
    menuAria: "Menu",
    likeAria: "Like",
    unlikeAria: "Unlike",
    likeError: "Could not update like",
    actionError: "Action failed",
    deleteCard: "Delete this card",
    reportCard: "Report this card",
    cancel: "Cancel",
    deleteConfirm: "Delete this card? The photo will also be removed permanently.",
    stopDelete: "Keep",
    confirmDelete: "Delete",
    deletedToast: "Card deleted",
    reportPrompt: "Select a reason to report (this card will be hidden for you)",
    reportedToast: "Reported",
    composerTitle: "Leave a Card for the Next Traveler",
    closeAria: "Close",
    chosenPhotoAlt: "Selected photo",
    removePhotoAria: "Remove photo",
    preparingPhoto: "Preparing photo…",
    pickPhotoLabel: "Add 1 photo (optional)",
    bodyPlaceholder: "A quick note on what you discovered here",
    bodyAria: "Short note",
    exifNote: "EXIF location data is stripped automatically. Please avoid capturing faces or license plates. Display name: {name}",
    postingBtn: "Posting…",
    postBtn: "Post Card",
    unlockDialogAria: "Spot Unlocked",
    discoveredTitle: "New Spot Discovered!",
    arrivedCardsPrefix: "Previous travelers left",
    arrivedCardsCount: "{n} card(s)",
    arrivedCardsSuffix: "waiting for you here.",
    arrivedFirstPrompt: "No cards are here yet. Would you like to be the first traveler?",
    meTitle: "Travel Log",
    displayNameLabel: "Display Name",
    saveBtn: "Save",
    savedNameToast: "Display name saved",
    displayNameNote: "Shown on your cards. Please avoid using your real name.",
    yourCardsTitle: "Cards You Left",
    noMyCards: "No cards left yet",
    reachedCount: "Reached {n} traveler(s)",
    waitingNextTraveler: "Waiting for the next traveler",
    visitedPlacesTitle: "Visited Spots ({visited}/{total})",
    noVisitedPlaces: "Draw a card to start your first detour",
    loadRetryBtn: "Retry",
    aboutLead1: "A small adventure tucked into your schedule.",
    aboutLead2: "Pass your discovery on to the next traveler.",
    aboutRealTitle: "✅ Working Features",
    aboutDemoTitle: "🧪 Demo / Simulated Parts",
    aboutCreditsTitle: "📷 Photo Credits & Licenses (Wikimedia Commons)",
    aboutCreditsDesc: "All place photos use freely licensed images (Public Domain / CC0 / CC BY / CC BY-SA). Full candidate records are stored in public/images/credits.json.",
    aboutAuthor: "Author: ",
    aboutLoading: "Loading…",
    aboutLoadFailed: "Could not load photo attribution metadata.",
    aboutFootnote: 'Coordinates and opening hours were verified via Wikipedia and the Nara City Tourism Association (Nov 2026). Unverified items are marked with "⚠". Please check official sources before visiting.',
    checkInDenied: "Location permission is denied",
    checkInLocating: "Getting your location — please try again in a moment",
    checkInTooFar: "About {dist} closer to unlock",
    checkInFailed: "Check-in failed",
    bootErrorTitle: "Connection Failed",
    reloadBtn: "Reload",
    cardAuthorPhotoAlt: "Photo by {name}",
    entryBlindTitle: "Blind Clue Walk",
    entryBlindSub: "Follow sensory clues & distance without seeing the name",
    modeNormal: "Normal",
    modeBlind: "Blind Clue",
    blindBadge: "BLIND CLUE",
    blindHiddenTitle: "Detour in the Mist",
    blindSensoryLabel: "CLUE FROM THE LAST TRAVELER",
    blindCommitLine1: "Leave by {time} for {dest}",
    blindCommitLine2: "About {slack} min spare",
    blindCommitSoon: "Keep an eye on your departure time",
    blindCommitTight: "Time to head toward your destination",
    blindStartBtn: "Start Walk",
    blindRulesTitle: "About Blind Clue Walk",
    blindRulesBody: "Walk with only a misted photo and sensory clues—the spot name stays hidden until arrival. Only open, on-time spots are suggested, and you can reveal the map anytime.",
    blindWalkingTitle: "Blind Clue Walk",
    blindResumeLabel: "Resume Blind Clue Walk",
    blindRevealBtn: "Reveal Name & Open Map",
    blindBandFar: "Still a ways off",
    blindBandCloser: "Getting close",
    blindBandNearby: "Right nearby",
    blindBandNoGps: "Waiting for location",
    blindTempStart: "Starting point set",
    blindTempWarmer: "Getting closer",
    blindTempColder: "Moving farther",
    blindTempNearby: "Right nearby",
    blindTempNoGps: "Enable location to see warmer / colder hints",
    blindDistHint: "Guided gently by your distance as you walk",
    blindMoreHintBtn: "See another hint ({used}/{max})",
    blindMoreHintDone: "All hints revealed",
    blindExtraHintLabel: "Extra hint {n}",
    blindGpsInlineError: "Location unavailable",
    blindClueSwapBtn: "Other clue",
    blindOfflineBanner: "You are offline (clues stay readable — retry when back online)",
    blindOfflineRetry: "Retry"
  },
  zh: {
    tagline: "下一站去哪里、下一句收到的话，都来自一点小小偶然。",
    myRecordAria: "旅行记录",
    aboutTitle: "关于 Surprise Card",
    onDetour: "顺路前往中：",
    finalDest: "最终目的地",
    timeLeft: "剩余时间",
    minUnit: "分",
    walk: "步行",
    retry: "重新定位",
    deckCoverLine1: "下一处顺路惊喜，",
    deckCoverLine2: "就在这叠卡片里。",
    deckCoverSub: "前往{dest}、{min}分钟内\n可从容顺路造访的一处地点",
    drawBtn: "抽取卡片",
    redrawBtn: "换一张",
    goHereBtn: "去这里",
    emptyTitle: "当前暂无合适的顺路地点",
    emptyNote: "我们只推荐时间充裕、能够从容造访的地点",
    deckEndTitle: "卡片已全部看完",
    deckEndSub: "当前条件下共有 {n} 处顺路地点。",
    reshuffleBtn: "重新洗牌再抽一次",
    extendTimeBtn: "放宽到 {m} 分钟再试",
    onlyOneHint: "当前时段仅此 1 处地点开放且时间充裕",
    onlyOneShort: "仅此 1 处",
    swipeHint: "下一张",
    visitedBadge: "已造访",
    stayLabel: "停留约",
    toDestLabel: "至{dest}",
    totalMin: "共{n}分",
    travelerCards: "旅人卡片",
    cardsUnit: "{n}张",
    flipHint: "点击查看详情 · 左右滑动换一张",
    leg1: "当前位置 → 此处  步行约{n}分钟",
    leg2: "停留参观  约{n}分钟",
    leg3: "此处 → {dest}  步行约{n}分钟",
    legSummary: "合计约{total}分钟 · 富余{slack}分钟（按直线距离估算）",
    openOnArrival: "抵达时段开放中",
    photoCredit: "照片",
    backAria: "返回",
    goTitle: "前往顺路地点",
    spotNotFound: "未找到该地点",
    distToHere: "距此处 {dist} · 步行约{min}分钟",
    fallbackOriginNote: "※ 尚未获取定位，暂按近铁奈良站出发估算",
    demoOriginNote: "※ 当前使用演示位置计算",
    openRoute: "打开路线（顺路地点 → {dest} · Google地图）",
    seeCardsBtn: "查看旅人卡片",
    waitingCards: "有 {n} 张旅人卡片在这里等你",
    autoUnlockHint: "抵达后自动解锁（半径 {r}m）",
    checkingIn: "确认中…",
    receiveCards: "领取卡片",
    checkInArrived: "已抵达，立即打卡",
    checkBeforeGo: "出发前确认",
    cancelDetour: "放弃此次顺路",
    mapAria: "地点地图",
    mapOffline: "无法加载地图瓦片（离线或网络连接异常）",
    mapRetry: "重试",
    openNow: "当前开放中",
    openAtArrival: "预计抵达时开放中",
    accessOpenTitle: "开放・营业时间",
    accessFeeTitle: "门票费用",
    accessAddressTitle: "地址",
    accessSafetyTitle: "安全与交通提示",
    accessDataNote: "信息核实说明：",
    lockedCount: "已有 {n} 位旅人在此留下卡片",
    lockedNone: "目前还没有旅人留言",
    lockedHint: "抵达现场后即可解锁全部照片与留言",
    spotLoadError: "加载失败",
    notUnlockedTitle: "暂未解锁",
    goToSpotBtn: "前往此地点",
    stackedCards: "这里共叠放着 {n} 张旅人卡片",
    noCardsYet: "还没有人留下卡片",
    latestCard: "最新卡片",
    nthCard: "第{n}张 · 前一位旅人",
    firstCardTitle: "这就是最早的一张卡片",
    firstTravelerTitle: "你是第一位来访的旅人",
    firstCardDesc: "这个地方的故事，就从这里开始。",
    firstTravelerDesc: "要为下一位到来的旅人留下第一张卡片吗？",
    backToLatest: "回到最新卡片",
    prevNewer: "← 较新",
    nextOlder: "翻一张 →",
    postedBanner: "你的卡片已叠放在这个地点的最上方",
    headToDest: "前往{dest}",
    toDestShort: "去{dest}",
    drawNextBtn: "抽取下一张卡片",
    leaveCardBtn: "留下我的卡片",
    postedToast: "已留下卡片，祝愿它能传递到下一位旅人手中",
    sampleImage: "示例图片",
    sampleTag: "示例",
    youTag: "你",
    menuAria: "菜单",
    likeAria: "点赞",
    unlikeAria: "取消点赞",
    likeError: "点赞操作失败",
    actionError: "操作失败",
    deleteCard: "删除这张卡片",
    reportCard: "举报这张卡片",
    cancel: "取消",
    deleteConfirm: "确定要删除这张卡片吗？照片也会一并移除且无法恢复。",
    stopDelete: "取消",
    confirmDelete: "确认删除",
    deletedToast: "卡片已删除",
    reportPrompt: "请选择举报原因（该卡片将不再向你显示）",
    reportedToast: "已提交举报",
    composerTitle: "给下一位旅人留一张卡片",
    closeAria: "关闭",
    chosenPhotoAlt: "已选照片",
    removePhotoAria: "移除照片",
    preparingPhoto: "正在处理照片…",
    pickPhotoLabel: "添加1张照片（也可不选）",
    bodyPlaceholder: "写下在这里发现的小惊喜或一句话",
    bodyAria: "一句话留言",
    exifNote: "照片的位置信息（EXIF）会自动清除。请注意避免拍到他人正脸或车牌。当前显示名：{name}",
    postingBtn: "发布中…",
    postBtn: "留下卡片",
    unlockDialogAria: "地点已解锁",
    discoveredTitle: "发现了新地点！",
    arrivedCardsPrefix: "来自前几位旅人的",
    arrivedCardsCount: "{n}张卡片",
    arrivedCardsSuffix: "已经送达。",
    arrivedFirstPrompt: "这里还没有任何卡片，要成为第一位留下印记的旅人吗？",
    meTitle: "旅行记录",
    displayNameLabel: "显示名称",
    saveBtn: "保存",
    savedNameToast: "已保存显示名称",
    displayNameNote: "将显示在你留下的卡片上，请勿填写真实姓名。",
    yourCardsTitle: "你留下的卡片",
    noMyCards: "还没有留下卡片",
    reachedCount: "已送达 {n} 位旅人",
    waitingNextTraveler: "正在等待下一位旅人",
    visitedPlacesTitle: "已造访地点（{visited}/{total}）",
    noVisitedPlaces: "先抽一张卡片，开启第一次顺路吧",
    loadRetryBtn: "重试",
    aboutLead1: "在既定行程中，藏进一点小小的冒险。",
    aboutLead2: "然后，把你的发现传递到下一位旅人手中。",
    aboutRealTitle: "✅ 实际运行中的功能",
    aboutDemoTitle: "🧪 演示 / 模拟部分",
    aboutCreditsTitle: "📷 照片来源与授权（Wikimedia Commons）",
    aboutCreditsDesc: "所有地点照片均采用 Public Domain / CC0 / CC BY / CC BY-SA 自由授权图片。完整候选列表记录于 public/images/credits.json。",
    aboutAuthor: "作者：",
    aboutLoading: "加载中…",
    aboutLoadFailed: "未能加载照片署名信息。",
    aboutFootnote: "地点坐标与开放时间核实自 Wikipedia 与奈良市观光协会（截至 2026年11月）。未确认的信息以“⚠”标出，出行前请以官方最新公告为准。",
    checkInDenied: "未授予位置权限",
    checkInLocating: "正在获取当前位置，请稍候再试",
    checkInTooFar: "再靠近约 {dist} 即可解锁",
    checkInFailed: "打卡失败",
    bootErrorTitle: "无法连接",
    reloadBtn: "重新加载",
    cardAuthorPhotoAlt: "{name}的照片",
    entryBlindTitle: "盲抽线索散步",
    entryBlindSub: "藏起地名，只凭感官线索与冷热提示去遇见",
    modeNormal: "通常",
    modeBlind: "盲抽线索",
    blindBadge: "盲抽线索",
    blindHiddenTitle: "雾里的顺路地",
    blindSensoryLabel: "前一位旅人留下的线索",
    blindCommitLine1: "按最晚 {time} 离开仍来得及去〈{dest}〉",
    blindCommitLine2: "余量约 {slack} 分钟",
    blindCommitSoon: "已接近建议离开时间",
    blindCommitTight: "建议准备前往目的地",
    blindStartBtn: "出发",
    blindRulesTitle: "关于盲抽线索散步",
    blindRulesBody: "隐藏地名，只凭雾化氛围卡与感官线索出发。仅在有营业中且不误行程的候选时出卡，途中随时可以揭晓地名并切回原地图。",
    blindWalkingTitle: "盲抽线索散步",
    blindResumeLabel: "继续盲抽线索散步",
    blindRevealBtn: "揭晓地名并切回原地图",
    blindBandFar: "还很远",
    blindBandCloser: "有点近",
    blindBandNearby: "就在附近",
    blindBandNoGps: "尚未获取定位",
    blindTempStart: "已记录出发基准",
    blindTempWarmer: "更近了",
    blindTempColder: "更远了",
    blindTempNearby: "就在附近",
    blindTempNoGps: "获取定位后将随脚步更新冷热提示",
    blindDistHint: "只需迈步前行，距离会轻声为你引路",
    blindMoreHintBtn: "再看一点提示（{used}/{max}）",
    blindMoreHintDone: "线索已全部展开",
    blindExtraHintLabel: "补充线索 {n}",
    blindGpsInlineError: "暂时无法获取定位",
    blindClueSwapBtn: "换一条线索",
    blindOfflineBanner: "当前处于离线状态（线索仍可查看，恢复网络后可重试）",
    blindOfflineRetry: "重试"
  }
};
const Ctx$3 = reactExports.createContext({
  lang: "ja",
  setLang: () => {
  },
  t: (key, vars) => formatTemplate(DICT.ja[key], vars)
});
function formatTemplate(str, vars) {
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (_, k) => vars[k] !== void 0 ? String(vars[k]) : `{${k}}`);
}
function I18nProvider({ children }) {
  const [lang, setLangState] = reactExports.useState(() => readUrlLang() ?? loadLang());
  const setLang = reactExports.useCallback((next) => {
    setLangState(next);
    saveLang(next);
  }, []);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const syncUrlLang = () => {
      const fromUrl = readUrlLang();
      if (fromUrl) setLangState(fromUrl);
    };
    window.addEventListener("hashchange", syncUrlLang);
    window.addEventListener("popstate", syncUrlLang);
    return () => {
      window.removeEventListener("hashchange", syncUrlLang);
      window.removeEventListener("popstate", syncUrlLang);
    };
  }, []);
  reactExports.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
    }
  }, [lang]);
  const t = reactExports.useCallback(
    (key, vars) => {
      const val = DICT[lang][key] ?? DICT.ja[key];
      return formatTemplate(val, vars);
    },
    [lang]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ctx$3.Provider, { value: { lang, setLang, t }, children });
}
const useI18n = () => reactExports.useContext(Ctx$3);
function getRealFeatures(lang) {
  if (lang === "en") {
    return [
      "Current location detection (Browser Geolocation)",
      "Filter & shuffle detours by destination and remaining time",
      "Excludes spots that are closed or exceed remaining time",
      "Swipe cards to redraw · Tap to flip for details",
      "Blind Clue Walk (misted photo, sensory clues, live latest-leave time & compass-free hot/cold hints)",
      "On-site check-in (unlock radius + GPS accuracy allowance)",
      "Browse traveler cards (newest first) & like (once per user)",
      "Post photo + short note cards (EXIF location auto-stripped)",
      "Delete your own cards & report inappropriate cards",
      "Google Maps walking directions (Detour → Destination)",
      "Freely licensed real photos for all 9 places (Wikimedia Commons) with credits"
    ];
  }
  if (lang === "zh") {
    return [
      "获取当前位置（浏览器定位）",
      "根据最终目的地与剩余时间筛选并随机推荐顺路地点",
      "自动排除闭馆中或时间不足的地点，不强行推荐",
      "左右滑动换卡 · 点击卡片3D翻转查看详情",
      "盲抽线索散步（雾化氛围卡・感官线索・最晚离开时间承诺・无朝向传感器冷热寻路）",
      "现场打卡解锁（解锁半径＋GPS误差容错）",
      "浏览旅人卡片（从最新开始翻阅）・点赞（每人限一次）",
      "发布照片＋一句话卡片（自动清除照片位置信息 EXIF）",
      "删除自己的卡片・举报他人卡片",
      "Google 地图步行导航（顺路地点 → 目的地）",
      "全部9个地点的自由授权实景照片（Wikimedia Commons）与署名展示"
    ];
  }
  return [
    "現在地の取得（ブラウザの位置情報）",
    "目的地・残り時間をもとにした寄り道候補の絞り込みとランダム提案",
    "公開時間外・時間内に寄れない場所は提案しない",
    "カードのスワイプ引き直し・タップで裏返し",
    "盲抽手がかり散歩（霧の雰囲気カード・感官ヒント・最遅出発時刻の常駐表示・方位センサー不使用の冷熱案内）",
    "現地チェックイン（解放範囲＋GPS誤差で判定）",
    "旅人のカードの閲覧（最新から順にめくる）・いいね（1人1回）",
    "写真＋一言のカード作成（写真の位置情報は自動削除）",
    "自分のカードの削除・他人のカードの通報",
    "Googleマップでの経路案内（寄り道 → 目的地）",
    "各地点の自由利用許可写真（Wikimedia Commons）とライセンス表示"
  ];
}
function getDemoItems(isMock, devTools, lang) {
  if (lang === "en") {
    return [
      "Storage: Saved only in this browser (not shared across devices; Supabase not configured)" ,
      '10 sample cards ("Sample" badge) are fictional demo posts',
      "Walking times are straight-line estimates (verify real paths on Maps)",
      ...[]
    ];
  }
  if (lang === "zh") {
    return [
      "数据保存：仅保存在当前浏览器内，不会同步给他人（未配置 Supabase）" ,
      "10张“示例”卡片为测试用的虚构内容",
      "步行时间为直线距离估算（实际路线请在地图中确认）",
      ...[]
    ];
  }
  return [
    "データ保存：このブラウザ内のみ。他の人とは共有されません（Supabase接続は未設定）" ,
    "サンプルカード10枚（「サンプル」表示）はテスト用の架空の投稿です",
    "徒歩時間は直線距離からの概算です（実際の道のりは経路で確認してください）",
    ...[]
  ];
}
function getReportReasons(lang) {
  if (lang === "en") return ["Inappropriate content", "Contains personal info", "Unsafe location guidance", "Spam / Promotion", "Other"];
  if (lang === "zh") return ["不当内容", "包含个人信息", "引导前往危险场所", "垃圾广告", "其他"];
  return ["不適切な内容", "個人情報が含まれている", "危険な場所への誘導", "スパム・宣伝", "その他"];
}
function LangSwitcher() {
  const { lang, setLang } = useI18n();
  const opts = [
    { id: "ja", label: "日" },
    { id: "en", label: "EN" },
    { id: "zh", label: "中" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "lang-switch", className: "inline-flex shrink-0 items-center rounded-full bg-white/80 p-0.5 ring-1 ring-sumi/10", role: "group", "aria-label": "Language", children: opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      "data-testid": `lang-${o.id}`,
      onClick: () => setLang(o.id),
      "aria-pressed": lang === o.id,
      className: `min-w-[30px] rounded-full px-2.5 py-1.5 text-[11px] font-medium leading-none transition ${lang === o.id ? "bg-sumi text-washi shadow-sm" : "text-sumi/60 hover:text-sumi"}`,
      children: o.label
    },
    o.id
  )) });
}

const MAX_BODY = 80;

const SEED_SPOTS = [
  {
    id: "kyobate-station",
    name: "JR京終駅",
    nameEn: "Kyobate Station",
    area: "京終",
    lat: 34.66986,
    lng: 135.82883,
    interests: ["townwalk", "history"],
    teaser: "明治の面影をまとった、小さな木造の玄関口",
    address: "奈良県奈良市南京終町211",
    hours: { open: null, close: null, closedWeekdays: [], note: "駅舎は無人駅として利用可（併設施設の営業時間は要確認）" },
    fee: "駅舎の見学は無料（併設カフェ等は別途）",
    safety: ["線路・ホームへの立ち入りや列車の撮影時は安全に注意", "無人駅のため、困ったときは周辺の案内所へ"],
    stayMin: 20,
    visitMin: 10,
    unlockRadiusM: 80,
    dataNote: "併設カフェ・観光案内所の営業時間と料金は公式情報を確認できなかったため未掲載です。",
    sources: ["https://ja.wikipedia.org/wiki/京終駅", "https://www.city.nara.lg.jp/uploaded/attachment/21783.pdf"],
    story: "1898年の開業当時の姿をもとに、奈良市が木造駅舎を復元し2019年に完成しました。旧駅務室はカフェに、駅舎の一角は観光案内のスペースになり、列車を待つ人だけでなく、まち歩きの人が立ち寄る場所に生まれ変わっています。ここから北へ歩けば、ならまちの古い町並みへと続きます。"
  },
  {
    id: "irie-photo-museum",
    name: "入江泰吉記念 奈良市写真美術館",
    nameEn: "Irie Taikichi Memorial Nara City Museum of Photography",
    area: "高畑",
    lat: 34.67559,
    lng: 135.84542,
    interests: ["art"],
    teaser: "一人の写真家が見つめ続けた「奈良」に出会える場所",
    address: "奈良県奈良市高畑町600-1",
    hours: { open: "09:30", close: "16:30", closedWeekdays: [1], note: "9:30〜17:00（入館は16:30まで）。月曜休館（祝日の場合は翌平日）、展示替期間・年末年始休館" },
    fee: "一般 500円（特別展は異なる場合あり）",
    safety: ["館内はスロープ・エレベーターあり", "周辺は住宅地。静かに散策を"],
    stayMin: 50,
    visitMin: 40,
    unlockRadiusM: 80,
    dataNote: "祝日の振替休館・展示替期間は日によって異なるため、訪問前に公式サイトを確認してください。",
    sources: ["https://ja.wikipedia.org/wiki/入江泰吉記念奈良市写真美術館", "https://narashikanko.or.jp/en/spot/detail_10042.html"],
    story: "奈良の風景や仏像を撮り続けた写真家・入江泰吉の作品を収める市立の写真美術館です。建物は黒川紀章の設計で、1992年に開館しました。館を出たら、作品に写っていたような高畑の土塀の小道を、自分の目で探してみてください。"
  },
  {
    id: "shiga-naoya-house",
    name: "志賀直哉旧居",
    nameEn: "Former Residence of Shiga Naoya",
    area: "高畑",
    lat: 34.67778,
    lng: 135.84363,
    interests: ["history", "art", "townwalk"],
    teaser: "ある文豪が自ら設計に関わった、光の入る家",
    address: "奈良県奈良市高畑町1237-2",
    hours: { open: "09:30", close: "17:00", closedWeekdays: [], note: "9:30〜17:30（12〜2月は16:30まで）、最終入館は閉館30分前。12/28〜1/5休館" },
    fee: "一般 350円（奈良市観光協会の掲載による）",
    safety: ["建物内は靴を脱いで見学", "段差があるため足元に注意"],
    stayMin: 40,
    visitMin: 30,
    unlockRadiusM: 60,
    dataNote: "料金は情報源によって差があったため（350円／500円）、訪問前に確認してください。冬季の閉館時間はアプリの判定に反映していません。",
    sources: ["https://narashikanko.or.jp/en/spot/detail_10100.html", "https://online.bunka.go.jp/heritages/detail/239261"],
    story: "作家・志賀直哉が自ら設計に関わり、1929年に建てた数寄屋風の住まいです。1938年まで家族とここで暮らし、長編『暗夜行路』を書き上げました。サンルームや食堂には、文人や画家たちが集った「高畑サロン」の空気が今も残っています。"
  },
  {
    id: "futaiji",
    name: "不退寺",
    nameEn: "Futaiji Temple",
    area: "佐保路",
    lat: 34.69478,
    lng: 135.81252,
    interests: ["history", "nature"],
    teaser: "平安の歌人の名で呼ばれる、花の寺",
    address: "奈良県奈良市法蓮町517",
    hours: { open: "09:00", close: "16:50", closedWeekdays: [], note: "9:00〜17:00（受付16:50頃まで）" },
    fee: "一般 500円（特別公開時は異なる）",
    safety: ["バス停「一条高校前（不退寺口）」から北へ徒歩5〜7分", "境内では参拝のマナーを守って"],
    stayMin: 30,
    visitMin: 20,
    unlockRadiusM: 100,
    dataNote: "休業日は確認できませんでした。行事により拝観できない場合があります。",
    sources: ["https://ja.wikipedia.org/wiki/不退寺", "https://narashikanko.or.jp/en/spot/detail_10016.html"],
    story: "在原業平ゆかりの寺と伝わり、「業平寺」とも呼ばれます。鎌倉時代に建てられた本堂と南門は国の重要文化財。春から秋にかけて境内を彩る花々でも知られ、佐保路の静かな寺めぐりの起点にもなります。"
  }
];
const SEED_ECHOES = [
  { id: "s-k1", spotId: "kyobate-station", authorName: "サンプル旅人A", category: "discovery", body: "駅舎の木の柱を触ってみてください。思っていたよりずっと温かい色でした。", scene: "station", daysAgo: 12, likes: 5 },
  { id: "s-k2", spotId: "kyobate-station", authorName: "サンプル旅人B", category: "hint", body: "ここから北へ歩くと、ならまちの古い町家が少しずつ増えていきます。地図を閉じて歩くのがおすすめ。", daysAgo: 6, likes: 8 },
  { id: "s-k3", spotId: "kyobate-station", authorName: "サンプル旅人C", category: "scenery", body: "夕方、駅舎の窓に西日が差し込む時間がいちばんきれいでした。", scene: "dusk", daysAgo: 2, likes: 3 },
  { id: "s-m1", spotId: "irie-photo-museum", authorName: "サンプル旅人D", category: "memory", body: "白黒写真の中の奈良が、外に出ると色つきで続いていて不思議な気持ちに。", scene: "museum", daysAgo: 20, likes: 11 },
  { id: "s-m2", spotId: "irie-photo-museum", authorName: "サンプル旅人E", category: "hint", body: "月曜は休館なので注意。開館日に、時間に余裕を持って来るのがいいです。", daysAgo: 9, likes: 4 },
  { id: "s-s1", spotId: "shiga-naoya-house", authorName: "サンプル旅人F", category: "discovery", body: "サンルームの光が本当に柔らかい。ここで小説を書いていたのか…と想像してしまう。", scene: "house", daysAgo: 15, likes: 9 },
  { id: "s-s2", spotId: "shiga-naoya-house", authorName: "サンプル旅人G", category: "scenery", body: "庭側の縁側から見る木々がおすすめ。座って少しぼーっとしてみて。", scene: "garden", daysAgo: 4, likes: 6 },
  { id: "s-s3", spotId: "shiga-naoya-house", authorName: "サンプル旅人H", category: "hint", body: "靴を脱いで上がるので、脱ぎやすい靴で来ると楽です。", daysAgo: 1, likes: 2 },
  { id: "s-f1", spotId: "futaiji", authorName: "サンプル旅人I", category: "scenery", body: "本堂の前、花越しに屋根を見上げる角度が好きでした。", scene: "temple", daysAgo: 18, likes: 7 },
  { id: "s-f2", spotId: "futaiji", authorName: "サンプル旅人J", category: "memory", body: "観光客がほとんどいなくて、鳥の声だけが聞こえる時間があった。", scene: "garden", daysAgo: 7, likes: 10 }
];

const palettes = {
  station: ["#f3d9b1", "#e9b38a", "#6b4f3a", "#3b2e26"],
  museum: ["#dfe7e4", "#b9c9c4", "#5d6e6a", "#2c3533"],
  house: ["#efe6d2", "#d8c49e", "#7a5b3c", "#3e3125"],
  temple: ["#f4e1c8", "#e3a978", "#8a3f2c", "#3a231c"],
  garden: ["#e4eedc", "#a9c49a", "#4f6b4a", "#263522"],
  dusk: ["#f1c9a8", "#c98b8e", "#5b4a6e", "#251f33"]
};
function hills(c, y, amp, seed) {
  let d = `M0 ${y}`;
  for (let x = 0; x <= 400; x += 40) {
    d += ` Q${x + 20} ${y - amp * Math.abs(Math.sin(seed + x / 57))} ${x + 40} ${y}`;
  }
  return `<path d="${d} V300 H0Z" fill="${c}"/>`;
}
const fg = {
  station: (c) => `<rect x="120" y="150" width="170" height="80" fill="${c}"/><path d="M105 155 L205 110 L305 155Z" fill="${c}"/><rect x="150" y="175" width="22" height="30" fill="#f6e7c8" opacity=".8"/><rect x="190" y="175" width="22" height="30" fill="#f6e7c8" opacity=".8"/><rect x="230" y="175" width="22" height="30" fill="#f6e7c8" opacity=".8"/><rect x="0" y="236" width="400" height="5" fill="${c}"/>`,
  museum: (c) => `<rect x="70" y="160" width="260" height="70" fill="${c}"/><path d="M50 165 L200 120 L350 165Z" fill="${c}" opacity=".85"/><rect x="0" y="228" width="400" height="80" fill="${c}" opacity=".5"/>`,
  house: (c) => `<rect x="110" y="165" width="180" height="65" fill="${c}"/><path d="M85 170 L200 125 L315 170Z" fill="${c}"/><rect x="130" y="185" width="140" height="6" fill="#efe6d2" opacity=".5"/><circle cx="320" cy="150" r="30" fill="${c}" opacity=".7"/>`,
  temple: (c) => `<rect x="140" y="160" width="120" height="70" fill="${c}"/><path d="M100 168 Q200 120 300 168Z" fill="${c}"/><path d="M125 140 Q200 105 275 140Z" fill="${c}"/><rect x="196" y="92" width="8" height="30" fill="${c}"/>`,
  garden: (c) => `<circle cx="90" cy="190" r="40" fill="${c}"/><circle cx="130" cy="200" r="30" fill="${c}" opacity=".8"/><circle cx="300" cy="185" r="45" fill="${c}"/><circle cx="270" cy="210" r="18" fill="#e8b4c0"/><circle cx="110" cy="215" r="10" fill="#e8b4c0"/>`,
  dusk: (c) => `<rect x="60" y="175" width="40" height="55" fill="${c}"/><rect x="110" y="160" width="60" height="70" fill="${c}"/><rect x="250" y="170" width="70" height="60" fill="${c}"/><path d="M240 175 L285 140 L330 175Z" fill="${c}"/>`
};
function sampleArt(scene, seed = 1) {
  const [sky1, sky2, mid, dark] = palettes[scene];
  const sunX = 80 + seed * 97 % 240;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky1}"/><stop offset="1" stop-color="${sky2}"/></linearGradient></defs><rect width="400" height="300" fill="url(#s)"/><circle cx="${sunX}" cy="80" r="26" fill="#fff6e4" opacity=".75"/>${hills(mid, 200, 40, seed)}${fg[scene](dark)}${hills(dark, 262, 14, seed + 3)}</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

async function processPhoto(file, maxSize = 1280) {
  if (!file.type.startsWith("image/")) throw new Error("画像ファイルを選択してください");
  if (file.size > 20 * 1024 * 1024) throw new Error("画像が大きすぎます（20MBまで）");
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" }).catch(
    () => {
      throw new Error("この画像形式は読み込めませんでした（JPEG / PNG を推奨）");
    }
  );
  const scale = Math.min(1, maxSize / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  return new Promise(
    (res, rej) => canvas.toBlob((b) => b ? res(b) : rej(new Error("画像の変換に失敗しました")), "image/jpeg", 0.8)
  );
}
async function tinyThumb(src, width = 20) {
  const url = typeof src === "string" ? src : URL.createObjectURL(src);
  try {
    const img = await loadImage(url);
    const h = Math.max(1, Math.round(img.naturalHeight / img.naturalWidth * width));
    const c = document.createElement("canvas");
    c.width = width;
    c.height = h;
    c.getContext("2d").drawImage(img, 0, 0, width, h);
    return c.toDataURL("image/jpeg", 0.5);
  } finally {
    if (typeof src !== "string") URL.revokeObjectURL(url);
  }
}
function blobToDataUrl(b) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = () => rej(r.error);
    r.readAsDataURL(b);
  });
}
function loadImage(url) {
  return new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = () => rej(new Error("画像を読み込めませんでした"));
    img.src = url;
  });
}

const DB_KEY = "surprisecard.mock.db.v1";
const USER_KEY = "surprisecard.mock.user.v1";
const HIDE_AT_REPORTS = 3;
const wait = (ms = 160 + Math.random() * 180) => new Promise((r) => setTimeout(r, ms));
const uid = () => crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
function seedDB() {
  const now = Date.now();
  return {
    version: 1,
    echoes: SEED_ECHOES.map((s) => ({
      id: s.id,
      spotId: s.spotId,
      authorId: `sample-${s.id}`,
      authorName: s.authorName,
      category: s.category,
      body: s.body,
      scene: s.scene,
      createdAt: new Date(now - s.daysAgo * 864e5).toISOString(),
      baseLikes: s.likes,
      isSample: true
    })),
    likes: [],
    unlocks: [],
    reports: []
  };
}
function sampleThumb(scene) {
  return sampleArt(scene).replace(/%3Cpath[\s\S]*?%3C%2Fsvg%3E$/, "%3C%2Fsvg%3E");
}
class MockBackend {
  constructor() {
    this.mode = "mock";
    this.channel = typeof BroadcastChannel !== "undefined" ? new BroadcastChannel("surprisecard") : null;
    this.listeners = /* @__PURE__ */ new Set();
    this.channel?.addEventListener("message", () => this.listeners.forEach((l) => l()));
  }
  // ---- 「サーバー内部」 ----
  load() {
    try {
      const raw = localStorage.getItem(DB_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
    }
    const db = seedDB();
    this.save(db, false);
    return db;
  }
  save(db, notify = true) {
    try {
      localStorage.setItem(DB_KEY, JSON.stringify(db));
    } catch (e) {
      throw new Error("端末の保存容量が不足しています（モックモードはブラウザ内に保存します）。写真なしで投稿するか、データをリセットしてください。");
    }
    if (notify) {
      this.listeners.forEach((l) => l());
      this.channel?.postMessage("changed");
    }
  }
  session() {
    try {
      const raw = localStorage.getItem(USER_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
    }
    const s = { userId: uid(), displayName: "名もなき旅人" };
    localStorage.setItem(USER_KEY, JSON.stringify(s));
    return s;
  }
  spot(id) {
    const s = SEED_SPOTS.find((x) => x.id === id);
    if (!s) throw new Error("スポットが見つかりません");
    return s;
  }
  isUnlocked(db, userId, spotId) {
    return db.unlocks.find((u) => u.userId === userId && u.spotId === spotId);
  }
  visibleEchoes(db, userId, spotId) {
    return db.echoes.filter((e) => {
      if (spotId && e.spotId !== spotId) return false;
      const reports = db.reports.filter((r) => r.echoId === e.id);
      if (reports.some((r) => r.userId === userId)) return false;
      if (reports.length >= HIDE_AT_REPORTS && e.authorId !== userId) return false;
      return true;
    });
  }
  toEcho(db, e, userId) {
    const likes = db.likes.filter((l) => l.echoId === e.id);
    return {
      id: e.id,
      spotId: e.spotId,
      authorName: e.authorName,
      category: e.category,
      body: e.body,
      photoUrl: e.photo ?? (e.scene ? sampleArt(e.scene, e.id.length + e.body.length) : void 0),
      createdAt: e.createdAt,
      likeCount: e.baseLikes + likes.length,
      likedByMe: likes.some((l) => l.userId === userId),
      mine: e.authorId === userId,
      isSample: e.isSample
    };
  }
  preview(db, s, userId) {
    const { story: _hidden, ...pub } = s;
    const echoes = this.visibleEchoes(db, userId, s.id).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    const withPhoto = echoes.filter((e) => e.photo || e.scene);
    const unlock = this.isUnlocked(db, userId, s.id);
    return {
      ...pub,
      postCount: echoes.length,
      photoCount: withPhoto.length,
      // 未解放ユーザーには冒頭数文字だけ渡す
      snippets: echoes.slice(0, 2).map((e) => ({ category: e.category, snippet: e.body.slice(0, 7) + "…" })),
      lockedThumbs: withPhoto.slice(0, 3).map((e) => e.thumb ?? sampleThumb(e.scene ?? "garden")),
      coverPhoto: unlock && withPhoto[0] ? this.toEcho(db, withPhoto[0], userId).photoUrl : void 0,
      unlocked: !!unlock,
      unlockedAt: unlock?.at
    };
  }
  // ---- 公開API ----
  getSessionSync() {
    return this.session();
  }
  listSpotsSync() {
    const db = this.load();
    const { userId } = this.session();
    return SEED_SPOTS.map((s) => this.preview(db, s, userId));
  }
  async getSession() {
    return this.session();
  }
  async setDisplayName(name) {
    const s = this.session();
    s.displayName = name.trim().slice(0, 20) || "名もなき旅人";
    localStorage.setItem(USER_KEY, JSON.stringify(s));
  }
  async listSpots() {
    await wait();
    const db = this.load();
    const { userId } = this.session();
    return SEED_SPOTS.map((s) => this.preview(db, s, userId));
  }
  async getSpot(spotId) {
    await wait();
    const db = this.load();
    const { userId } = this.session();
    const s = this.spot(spotId);
    const preview = this.preview(db, s, userId);
    if (!preview.unlocked) return { unlocked: false, spot: preview };
    const echoes = this.visibleEchoes(db, userId, spotId).sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((e) => this.toEcho(db, e, userId));
    return { unlocked: true, spot: preview, story: s.story, echoes };
  }
  async checkIn(spotId, pos) {
    await wait(400);
    const db = this.load();
    const { userId } = this.session();
    const s = this.spot(spotId);
    const dist = distanceM(pos, s);
    const already = !!this.isUnlocked(db, userId, spotId);
    if (already) return { ok: true, distanceM: dist, radiusM: s.unlockRadiusM, firstTime: false };
    if (!withinUnlockRange(dist, s.unlockRadiusM, pos.accuracy)) {
      return { ok: false, distanceM: dist, radiusM: s.unlockRadiusM, firstTime: false, message: "まだ目的地から離れています" };
    }
    db.unlocks.push({ userId, spotId, at: (/* @__PURE__ */ new Date()).toISOString() });
    this.save(db);
    return { ok: true, distanceM: dist, radiusM: s.unlockRadiusM, firstTime: true };
  }
  async createEcho(spotId, input) {
    const db = this.load();
    const me = this.session();
    if (!this.isUnlocked(db, me.userId, spotId)) throw new Error("このスポットを解放してから投稿できます");
    const body = input.body.trim();
    if (!body) throw new Error("メッセージを入力してください");
    if (body.length > MAX_BODY) throw new Error(`メッセージは${MAX_BODY}文字までです`);
    let photo;
    let thumb;
    if (input.photo) {
      photo = await blobToDataUrl(input.photo);
      thumb = await tinyThumb(input.photo);
    }
    await wait(500);
    db.echoes.push({
      id: uid(),
      spotId,
      authorId: me.userId,
      authorName: me.displayName,
      category: input.category,
      body,
      photo,
      thumb,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      baseLikes: 0,
      isSample: false
    });
    this.save(db);
  }
  async toggleLike(echoId) {
    const db = this.load();
    const { userId } = this.session();
    const e = db.echoes.find((x) => x.id === echoId);
    if (!e) throw new Error("投稿が見つかりません");
    if (!this.isUnlocked(db, userId, e.spotId)) throw new Error("スポットを解放するといいねできます");
    const idx = db.likes.findIndex((l) => l.userId === userId && l.echoId === echoId);
    if (idx >= 0) db.likes.splice(idx, 1);
    else db.likes.push({ userId, echoId });
    this.save(db);
    const echo = this.toEcho(db, e, userId);
    return { liked: echo.likedByMe, likeCount: echo.likeCount };
  }
  async deleteEcho(echoId) {
    await wait();
    const db = this.load();
    const { userId } = this.session();
    const e = db.echoes.find((x) => x.id === echoId);
    if (!e) return;
    if (e.authorId !== userId) throw new Error("自分の投稿のみ削除できます");
    db.echoes = db.echoes.filter((x) => x.id !== echoId);
    db.likes = db.likes.filter((l) => l.echoId !== echoId);
    db.reports = db.reports.filter((r) => r.echoId !== echoId);
    this.save(db);
  }
  async reportEcho(echoId, reason) {
    await wait();
    const db = this.load();
    const { userId } = this.session();
    if (db.reports.some((r) => r.userId === userId && r.echoId === echoId)) return;
    db.reports.push({ userId, echoId, reason: reason.slice(0, 200), at: (/* @__PURE__ */ new Date()).toISOString() });
    this.save(db);
  }
  async listMyEchoes() {
    await wait();
    const db = this.load();
    const { userId } = this.session();
    return db.echoes.filter((e) => e.authorId === userId).sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((e) => ({ ...this.toEcho(db, e, userId), spotName: this.spot(e.spotId).name }));
  }
  subscribe(onChange) {
    this.listeners.add(onChange);
    return () => {
      this.listeners.delete(onChange);
    };
  }
  // ---- 開発用（デモパネルからのみ使用） ----
  devReset() {
    localStorage.removeItem(DB_KEY);
    this.listeners.forEach((l) => l());
    this.channel?.postMessage("changed");
  }
  /** 別の旅人として操作する（いいね・削除権限の確認用） */
  devSwitchUser() {
    const s = { userId: uid(), displayName: `テスト旅人${Math.floor(Math.random() * 90 + 10)}` };
    localStorage.setItem(USER_KEY, JSON.stringify(s));
    this.listeners.forEach((l) => l());
  }
}

const isMockMode = true;
let mockSingleton = null;
let instance = null;
function getMockBackendSync() {
  mockSingleton ??= new MockBackend();
  return mockSingleton;
}
function getBackend() {
  instance ??= Promise.resolve(getMockBackendSync()) ;
  return instance;
}

const Ctx$2 = reactExports.createContext(null);
function DataProvider({ children }) {
  const { t } = useI18n();
  const [backend, setBackend] = reactExports.useState(() => getMockBackendSync());
  const [session, setSession] = reactExports.useState(() => getMockBackendSync()?.getSessionSync() ?? null);
  const [spots, setSpots] = reactExports.useState(() => getMockBackendSync()?.listSpotsSync() ?? null);
  const [spotsError, setSpotsError] = reactExports.useState(null);
  const [bootError, setBootError] = reactExports.useState(null);
  const [version, setVersion] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (backend) return;
    getBackend().then(async (b) => {
      setBackend(b);
      setSession(await b.getSession());
    }).catch((e) => setBootError(String(e?.message ?? e)));
  }, [backend]);
  const refresh = reactExports.useCallback(async () => {
    if (!backend) return;
    try {
      setSpots(await backend.listSpots());
      setSpotsError(null);
    } catch (e) {
      setSpotsError(e instanceof Error ? e.message : String(e));
    }
  }, [backend]);
  const refreshSession = reactExports.useCallback(async () => {
    if (backend) setSession(await backend.getSession());
  }, [backend]);
  reactExports.useEffect(() => {
    if (!backend) return;
    if (spots === null) void refresh();
    return backend.subscribe(() => {
      setVersion((v) => v + 1);
      void refresh();
      void refreshSession();
    });
  }, [backend, refresh, refreshSession, spots]);
  if (bootError)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-h-dvh place-items-center p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-xl", children: t("bootErrorTitle") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-sumi/60", children: bootError }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-primary mt-6", onClick: () => location.reload(), children: t("reloadBtn") })
    ] }) });
  if (!backend || !session || !spots) return /* @__PURE__ */ jsxRuntimeExports.jsx(Splash, { failed: spotsError, onRetry: refresh });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ctx$2.Provider, { value: { backend, session, spots, spotsError, version, refresh, refreshSession }, children });
}
function Splash({ failed, onRetry }) {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-h-dvh place-items-center bg-[#eaece5] text-[#28372f]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto h-16 w-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full border border-kin/60 animate-pulseRing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-5 rounded-full bg-kin" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-serif tracking-[0.4em]", children: "NARA ECHO" }),
    failed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-sm text-[#28372f]/70", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: failed }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-3 underline", onClick: onRetry, children: t("loadRetryBtn") })
    ] })
  ] }) });
}
function useData() {
  const c = reactExports.useContext(Ctx$2);
  if (!c) throw new Error("DataProvider missing");
  return c;
}

const DEV_TOOLS = false;
const Ctx$1 = reactExports.createContext(null);
function LocationProvider({ children, autoResume = true }) {
  const [gps, setGps] = reactExports.useState(null);
  const [demo, setDemoState] = reactExports.useState(() => {
    return null;
  });
  const [status, setStatus] = reactExports.useState("idle");
  const statusRef = reactExports.useRef("idle");
  const [demoPickOnMap, setDemoPickOnMap] = reactExports.useState(false);
  const watchId = reactExports.useRef(null);
  const updateStatus = reactExports.useCallback((next) => {
    setStatus((prev) => {
      const value = typeof next === "function" ? next(prev) : next;
      statusRef.current = value;
      return value;
    });
  }, []);
  const request = reactExports.useCallback(() => {
    if (!window.isSecureContext) return updateStatus("insecure");
    if (!("geolocation" in navigator)) return updateStatus("unsupported");
    if (watchId.current !== null) {
      if (statusRef.current !== "timeout" && statusRef.current !== "unavailable") return;
      navigator.geolocation.clearWatch(watchId.current);
      watchId.current = null;
    }
    updateStatus((s) => s === "ok" ? s : "locating");
    let denied = false;
    const id = navigator.geolocation.watchPosition(
      (p) => {
        setGps({ lat: p.coords.latitude, lng: p.coords.longitude, accuracy: p.coords.accuracy });
        updateStatus("ok");
      },
      (err) => {
        if (err.code === 1) {
          denied = true;
          updateStatus("denied");
          if (watchId.current !== null) navigator.geolocation.clearWatch(watchId.current);
          watchId.current = null;
          return;
        }
        updateStatus((s) => s === "ok" ? s : err.code === 3 ? "timeout" : "unavailable");
      },
      { enableHighAccuracy: true, maximumAge: 1e4, timeout: 2e4 }
    );
    watchId.current = denied ? null : id;
  }, [updateStatus]);
  reactExports.useEffect(() => {
    if (autoResume) navigator.permissions?.query({ name: "geolocation" }).then((r) => r.state === "granted" && request()).catch(() => {
    });
    return () => {
      if (watchId.current !== null) {
        navigator.geolocation.clearWatch(watchId.current);
        watchId.current = null;
      }
    };
  }, [request, autoResume]);
  const setDemo = reactExports.useCallback((p) => {
    return;
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ctx$1.Provider,
    {
      value: {
        pos: gps,
        status: status,
        source: "gps",
        request,
        setDemo,
        demoPickOnMap: DEV_TOOLS,
        setDemoPickOnMap
      },
      children
    }
  );
}
function useLocation() {
  const c = reactExports.useContext(Ctx$1);
  if (!c) throw new Error("LocationProvider missing");
  return c;
}

const copy = {
  ja: {
    hint: "タップでスキップ",
    inspect: "タップで絵の面へ · 横スワイプで引き直し",
    backHint: "指でなぞると奥行き · タップで写真へ",
    guide: "揺らして、カードを目覚めさせよう",
    guideBody: "スマホを傾けて、絵の奥へ。指でも楽しめます。",
    allow: "傾けて楽しむ",
    pointer: "指で楽しむ",
    result: "今日の一枚",
    hidden: "霧のカード",
    hiddenBody: "木々の奥に、まだ見ぬ風景。",
    collection: "奈良の風景",
    denied: "指でなぞって、絵の奥へ。",
    enabled: "スマホをゆっくり傾けてみてください。",
    rareBadge: "金箔 · 特別",
    legendaryBadge: "金箔 · 希有",
    mistSkip: "タップで霧を晴らす"
  },
  en: {
    hint: "Tap to skip",
    inspect: "Tap for the illustration · Swipe for another card",
    backHint: "Drag to see the depth · Tap for the photo",
    guide: "Tilt a little. Wake your card.",
    guideBody: "Look inside the illustration. You can use a finger, too.",
    allow: "Enable tilt",
    pointer: "Use my finger",
    result: "Your little discovery",
    hidden: "A mist card",
    hiddenBody: "Somewhere among the trees, a view awaits.",
    collection: "Scenes of Nara",
    denied: "Trace the illustration to see its depth.",
    enabled: "Slowly tilt your phone to look inside.",
    rareBadge: "Gold leaf · Rare",
    legendaryBadge: "Gold leaf · Singular",
    mistSkip: "Tap to clear the mist"
  },
  zh: {
    hint: "点一下跳过",
    inspect: "点按看插画 · 左右滑动重新抽卡",
    backHint: "拖动看景深 · 点按回到照片",
    guide: "晃一晃，让卡片醒过来",
    guideBody: "轻轻倾斜手机，看看画里的远近。也可以用手指。",
    allow: "试试晃动",
    pointer: "用手指就好",
    result: "今天捡到的风景",
    hidden: "雾之卡",
    hiddenBody: "树影深处，藏着还没遇见的风景。",
    collection: "奈良风物",
    denied: "用手指轻轻拖动，看看插画的远近。",
    enabled: "慢慢倾斜手机，看看画里的风景。",
    rareBadge: "金箔 · 稀有",
    legendaryBadge: "金箔 · 极稀有",
    mistSkip: "点一下散开薄雾"
  }
};
const motionCopy = (lang) => copy[lang];

const clamp = (n, min = 0, max = 1) => Math.min(max, Math.max(min, n));
const easeOut = (n) => 1 - (1 - clamp(n)) ** 4;
const restPose = { rotate: 0, y: 0, lift: 0, mist: 0, seal: 1 };

const mist = {
  id: "mist",
  duration: 1.1,
  pose(t) {
    const clear = easeOut((clamp(t) - 0.2) / 0.8);
    return { ...restPose, mist: 1 - clear, y: (1 - clear) * 8 };
  }
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
function triggerHaptic(pattern = 15) {
  try {
    if (typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia(REDUCED_MOTION_QUERY).matches) {
      return;
    }
    if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
      navigator.vibrate(pattern);
    }
  } catch {
  }
}

function PlacePhoto({
  placeId,
  alt = "",
  className = "",
  imgClassName = "",
  imgStyle,
  priority = false,
  fallbackSrc,
  children
}) {
  const photo = usePlacePhoto(placeId);
  const prefersReduced = usePrefersReducedMotion();
  const src = photo?.url ?? fallbackSrc;
  const [loaded, setLoaded] = reactExports.useState(false);
  const imgRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [src]);
  const mergedStyle = {
    objectPosition: photo?.objectPosition ?? "50% 45%",
    ...imgStyle
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative overflow-hidden ${className}`,
      style: { backgroundColor: photo?.dominantColor ?? "#e6ddcc" },
      children: [
        photo?.blurDataUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: photo.blurDataUrl,
            alt: "",
            "aria-hidden": true,
            className: `pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover blur-md ${prefersReduced ? "" : "transition-opacity duration-300 ease-out"} ${loaded ? "opacity-0" : "opacity-100"}`,
            style: { objectPosition: mergedStyle.objectPosition }
          }
        ),
        src && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            ref: imgRef,
            src,
            alt,
            decoding: "async",
            loading: priority ? "eager" : "lazy",
            draggable: false,
            onLoad: () => setLoaded(true),
            className: `relative h-full w-full object-cover ${prefersReduced ? "opacity-100" : `transition-opacity duration-300 ease-out ${loaded ? "opacity-100" : "opacity-0"}`} ${imgClassName}`,
            style: mergedStyle
          }
        ),
        children
      ]
    }
  );
}

const Ctx = reactExports.createContext(() => {
});
const useCelebrate = () => reactExports.useContext(Ctx);
const CONFETTI = [
  { x: -135, y: -150, r: -48, color: "#c9a24a", w: 9, h: 5 },
  { x: 128, y: -140, r: 52, color: "#b5523b", w: 8, h: 6 },
  { x: -95, y: -180, r: -85, color: "#f6f1e7", w: 7, h: 7 },
  { x: 85, y: -185, r: 74, color: "#7f9a72", w: 10, h: 5 },
  { x: -155, y: -65, r: -30, color: "#c9a24a", w: 7, h: 5 },
  { x: 158, y: -55, r: 42, color: "#f6f1e7", w: 8, h: 5 },
  { x: -55, y: -195, r: 28, color: "#b5523b", w: 6, h: 8 },
  { x: 45, y: -200, r: -40, color: "#c9a24a", w: 9, h: 5 },
  { x: -120, y: 20, r: -65, color: "#7f9a72", w: 8, h: 5 },
  { x: 125, y: 25, r: 62, color: "#c9a24a", w: 7, h: 7 },
  { x: -150, y: -110, r: 95, color: "#f6f1e7", w: 6, h: 6 },
  { x: 148, y: -105, r: -95, color: "#7f9a72", w: 8, h: 5 },
  { x: -20, y: -175, r: 15, color: "#c9a24a", w: 8, h: 5 },
  { x: 18, y: -170, r: -25, color: "#b5523b", w: 7, h: 5 }
];
function UnlockProvider({ children }) {
  const { lang, t } = useI18n();
  const mc = motionCopy(lang);
  const prefersReduced = usePrefersReducedMotion();
  const [c, setC] = reactExports.useState(null);
  const [stage, setStage] = reactExports.useState(0);
  const [mistAmount, setMistAmount] = reactExports.useState(1);
  const activeSpotRef = reactExports.useRef(null);
  const celebrate = reactExports.useCallback(
    (x) => {
      if (activeSpotRef.current === x.spotId) return;
      activeSpotRef.current = x.spotId;
      if (prefersReduced) {
        setStage(2);
        setMistAmount(0);
      } else {
        setStage(0);
        setMistAmount(x.fromBlind ? 1 : 0);
      }
      setC(x);
      triggerHaptic([30, 60, 40]);
    },
    [prefersReduced]
  );
  reactExports.useEffect(() => {
    if (!c) return;
    if (prefersReduced) {
      setStage(2);
      setMistAmount(0);
      return;
    }
    if (c.fromBlind) {
      const start = performance.now();
      const totalMs = mist.duration * 1e3;
      let raf = 0;
      let cancelled = false;
      const step = (now) => {
        if (cancelled) return;
        const progress = Math.min(1, (now - start) / totalMs);
        const pose = mist.pose(progress, 0, { id: c.spotId });
        setMistAmount(pose.mist);
        if (progress >= 0.65) setStage((s) => Math.max(s, 1));
        if (progress >= 1) {
          setStage(2);
          return;
        }
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
      const fallback1 = setTimeout(() => setStage((s) => Math.max(s, 1)), Math.round(totalMs * 0.65));
      const fallback2 = setTimeout(() => {
        setMistAmount(0);
        setStage(2);
      }, Math.round(totalMs) + 40);
      return () => {
        cancelled = true;
        cancelAnimationFrame(raf);
        clearTimeout(fallback1);
        clearTimeout(fallback2);
      };
    }
    const t1 = setTimeout(() => setStage(1), 520);
    const t2 = setTimeout(() => setStage(2), 1150);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [c, prefersReduced]);
  const skipReveal = () => {
    if (!c || stage >= 2) return;
    setMistAmount(0);
    setStage(2);
  };
  const close = () => {
    if (c) navigate(`/spot/${c.spotId}`);
    activeSpotRef.current = null;
    setC(null);
  };
  const isBlindMist = !!c?.fromBlind;
  const blurPx = isBlindMist && !prefersReduced ? Math.round(mistAmount * 28) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Ctx.Provider, { value: celebrate, children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: c && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        "data-testid": "unlock-overlay",
        "data-stage": stage,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 0.2 } },
        onClick: stage < 2 ? skipReveal : void 0,
        className: "fixed inset-0 z-[4000] grid place-items-center overflow-hidden bg-sumi/95 text-washi backdrop-blur",
        role: "dialog",
        "aria-modal": true,
        "aria-label": t("unlockDialogAria"),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-1/2 top-[34%]", children: !prefersReduced && stage >= 1 && CONFETTI.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              initial: { x: 0, y: 0, scale: 0.2, rotate: 0, opacity: 0 },
              animate: {
                x: p.x,
                y: [0, p.y, p.y + 70],
                scale: [0.3, 1.1, 0.85],
                rotate: p.r * 2.2,
                opacity: [0, 1, 0]
              },
              transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.025 },
              className: "absolute rounded-sm",
              style: { width: p.w, height: p.h, backgroundColor: p.color }
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex w-full max-w-sm flex-col items-center px-6 text-center", children: [
            isBlindMist ? (
              /* 盲抽到着の霧散（mist + 霧晴れ統合）：ぼかし→鮮明→地名出現 */
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 w-64 overflow-hidden rounded-[24px] bg-washi shadow-2xl ring-2 ring-kin/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full w-full",
                    style: {
                      filter: blurPx > 0 ? `blur(${blurPx}px)` : "none",
                      transform: prefersReduced ? "none" : `scale(${1 + mistAmount * 0.14})`
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PlacePhoto, { placeId: c.spotId, alt: stage >= 1 ? c.spotName : "", priority: true, className: "h-full w-full", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-2.5 left-3 text-[10px] tracking-[0.25em] text-white/95", children: "UNLOCKED" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "data-testid": "blind-mist-clear",
                    "aria-hidden": true,
                    className: "pointer-events-none absolute inset-0",
                    style: {
                      opacity: prefersReduced ? 0 : mistAmount,
                      transform: prefersReduced ? "none" : `scale(${1 + (1 - mistAmount) * 0.18})`,
                      background: "radial-gradient(circle at 50% 45%, rgba(246,241,231,0.88) 0%, rgba(246,241,231,0.96) 55%, rgba(193,205,191,0.82) 100%)"
                    }
                  }
                )
              ] })
            ) : (
              /* 通常到着：封筒が開いて写真カードが現れる */
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: prefersReduced ? { opacity: 0 } : { y: 90, scale: 0.8, opacity: 0 },
                  animate: prefersReduced ? { opacity: 1 } : { y: 0, scale: 1, opacity: 1 },
                  transition: prefersReduced ? { duration: 0.16 } : { type: "spring", stiffness: 260, damping: 22 },
                  className: "relative h-44 w-60",
                  style: { perspective: 900 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-32 rounded-2xl bg-[#2c3a32] shadow-2xl ring-1 ring-kin/40" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { y: 24, scale: 0.88, opacity: 0 },
                        animate: stage >= 1 ? { y: -30, scale: 1, opacity: 1 } : { y: 18, scale: 0.9, opacity: 0.6 },
                        transition: prefersReduced ? { duration: 0.12 } : { type: "spring", stiffness: 220, damping: 20 },
                        className: "absolute inset-x-3 bottom-4 h-36 overflow-hidden rounded-2xl bg-white shadow-xl ring-2 ring-kin/60",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PlacePhoto, { placeId: c.spotId, alt: c.spotName, priority: true, className: "h-full w-full", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-2 left-3 text-[10px] tracking-[0.25em] text-white/95", children: "UNLOCKED" })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "pointer-events-none absolute inset-x-0 bottom-0 h-20 rounded-b-2xl bg-gradient-to-t from-[#222e27] to-[#2e3e35] ring-1 ring-kin/30",
                        style: { clipPath: "polygon(0 0, 50% 38%, 100% 0, 100% 100%, 0 100%)" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { rotateX: 0 },
                        animate: stage >= 1 ? prefersReduced ? { rotateX: 0, opacity: 0 } : { rotateX: -170, opacity: 0.25 } : { rotateX: 0, opacity: 1 },
                        transition: prefersReduced ? { duration: 0.16 } : { type: "spring", stiffness: 180, damping: 20 },
                        style: { transformOrigin: "top center", transformStyle: "preserve-3d" },
                        className: "pointer-events-none absolute inset-x-0 top-12 h-20 rounded-t-xl bg-[#34453b] ring-1 ring-kin/40",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-7 grid h-7 w-7 place-items-center rounded-full bg-kin text-[11px] font-bold text-sumi shadow", children: "✦" })
                      }
                    )
                  ]
                }
              )
            ),
            stage < 2 && !prefersReduced && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[11px] tracking-[0.16em] text-washi/55", children: isBlindMist ? mc.mistSkip : mc.hint }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 14 },
                animate: stage >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
                transition: { duration: prefersReduced ? 0.01 : 0.4 },
                className: "mt-5 text-xs tracking-[0.45em] text-kin",
                children: "DISCOVERED"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h2,
              {
                initial: { opacity: 0, y: 18 },
                animate: stage >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
                transition: { duration: prefersReduced ? 0.01 : 0.45, delay: prefersReduced ? 0 : 0.05 },
                className: "mt-2 font-serif text-xl",
                children: t("discoveredTitle")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                "data-testid": "unlock-spot-name",
                initial: { opacity: 0, y: 22, scale: 0.94 },
                animate: stage >= 2 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 22, scale: 0.94 },
                transition: prefersReduced ? { duration: 0.01 } : { type: "spring", stiffness: 260, damping: 24 },
                className: "mt-3 font-serif text-3xl text-white",
                children: stage >= 1 ? c.spotName : ""
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 16 },
                animate: stage >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
                transition: { duration: prefersReduced ? 0.01 : 0.45, delay: prefersReduced ? 0 : 0.08 },
                className: "mt-4 max-w-xs text-sm leading-relaxed text-washi/75",
                children: c.postCount > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  t("arrivedCardsPrefix"),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-kin", children: t("arrivedCardsCount", { n: c.postCount }) }),
                  t("arrivedCardsSuffix")
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: t("arrivedFirstPrompt") })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                "data-testid": "unlock-receive-button",
                initial: { opacity: 0, y: 24, scale: 0.92 },
                animate: stage >= 2 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.92 },
                transition: prefersReduced ? { duration: 0.01 } : { type: "spring", stiffness: 300, damping: 22, delay: 0.14 },
                className: `mt-8 rounded-full bg-kin px-8 py-3.5 text-sm font-bold text-sumi shadow-lg shadow-kin/30 active:scale-95 ${stage >= 2 ? "pointer-events-auto" : "pointer-events-none"}`,
                onClick: (e) => {
                  e.stopPropagation();
                  close();
                },
                children: t("receiveCards")
              }
            )
          ] })
        ]
      },
      "unlock-overlay"
    ) })
  ] });
}

function Icon({ name, className = "h-5 w-5" }) {
  const p = {
    home: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" }),
    map: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m9 4-6 2v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14" }),
    list: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" }),
    user: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 21a8 8 0 1 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" }),
    heart: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 20s-7.5-4.6-9.3-9.2C1.4 7.4 3.7 4 7.2 4c2 0 3.4 1.1 4.8 2.8C13.4 5.1 14.8 4 16.8 4c3.5 0 5.8 3.4 4.5 6.8C19.5 15.4 12 20 12 20z" }),
    lock: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 11V8a4 4 0 0 1 8 0v3" })
    ] }),
    pin: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "9.5", r: "2.5" })
    ] }),
    back: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 18 9 12l6-6" }),
    camera: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "13.5", r: "3.5" })
    ] }),
    more: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 12h.01M12 12h.01M19 12h.01", strokeWidth: "3" }),
    walk: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M13 4a1.5 1.5 0 1 0 0-.01M10 21l2-6 3 3v3M9 9l3-1 3 3 3 1M12 8l-2 6" }),
    shield: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z" }),
    clock: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 7v5l3 2" })
    ] }),
    yen: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 4l6 8 6-8M12 12v8M8 13h8M8 16.5h8" }),
    spark: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" }),
    close: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 6l12 12M18 6 6 18" }),
    route: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "19", r: "2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "5", r: "2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 19h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7" })
    ] })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className, fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true, children: p[name] });
}
function TopBar({ title, back, right }) {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-[500] flex h-14 items-center gap-2 bg-washi/85 px-3 backdrop-blur-md", children: [
    back && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "grid h-10 w-10 place-items-center rounded-full hover:bg-sumi/5",
        onClick: () => back === true ? history.back() : navigate(back),
        "aria-label": t("backAria"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "back" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "flex-1 truncate font-serif text-lg", children: title }),
    right
  ] });
}
const ToastCtx = reactExports.createContext(() => {
});
function ToastProvider({ children }) {
  const [toasts, setToasts] = reactExports.useState([]);
  const push = reactExports.useCallback((text, tone = "info") => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, text, tone }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3600);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ToastCtx.Provider, { value: push, children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-x-0 top-3 z-[3000] flex flex-col items-center gap-2 px-4", "aria-live": "polite", children: toasts.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `animate-floatIn rounded-2xl px-4 py-2.5 text-sm shadow-xl ${t.tone === "error" ? "bg-shu text-white" : "bg-sumi text-washi"}`, children: t.text }, t.id)) })
  ] });
}
const useToast = () => reactExports.useContext(ToastCtx);

function MistBurstCurtain({ seed, durationMs = 1450 }) {
  const curtainRef = reactExports.useRef(null);
  const coreRef = reactExports.useRef(null);
  const reduced = usePrefersReducedMotion();
  reactExports.useEffect(() => {
    const el = curtainRef.current;
    const core = coreRef.current;
    if (!el) return;
    const start = performance.now();
    const total = reduced ? 200 : durationMs;
    let frame = 0;
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / total);
      const pose = mist.pose(progress, seed, { id: "fortune" });
      const veilOpacity = reduced ? 1 - progress : pose.mist;
      el.style.opacity = String(veilOpacity.toFixed(3));
      if (!reduced) {
        const burstScale = 0.72 + progress * 0.92;
        el.style.transform = `scale(${burstScale.toFixed(3)})`;
        if (core) {
          const corePhase = Math.min(1, progress / 0.48);
          core.style.opacity = String(((1 - corePhase) * 0.92).toFixed(3));
          core.style.transform = `scale(${(0.55 + corePhase * 1.55).toFixed(3)})`;
        }
      }
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        el.style.display = "none";
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduced, seed, durationMs]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: curtainRef, className: "fortune-release-curtain", "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: coreRef, className: "fortune-burst-core" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-waiting-fog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", {})
    ] })
  ] });
}

const paletteFor = (id) => id === "todaiji" ? { paper: "#efe8d6", ink: "#293e3a", accent: "#a57b39", forest: "#7b9080" } : id === "kasuga" ? { paper: "#f2ead8", ink: "#263d34", accent: "#aa4b36", forest: "#7a8b69" } : { paper: "#eee5d4", ink: "#354238", accent: id.includes("station") ? "#61797b" : "#a66a45", forest: "#89967b" };
const path = (d, fill, stroke, width = 2, opacity = 1) => ({ d, fill, stroke, width, opacity });
const rect = (x, y, w, h, fill) => path(`M${x} ${y}h${w}v${h}h${-w}Z`, fill);
const circle = (x, y, r, fill) => path(`M${x - r} ${y}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0`, fill);
function background(p) {
  return [
    { depth: 0, marks: [
      rect(0, 0, 600, 720, p.paper),
      circle(414, 156, 57, "#d9bd7f"),
      path("M-30 345Q60 230 138 292Q240 184 338 275Q450 170 640 297V720H-30Z", "#bcc3a5"),
      path("M-30 428Q72 318 180 365Q290 263 388 355Q510 270 640 391V720H-30Z", "#9da98c"),
      path("M75 164Q140 146 226 160M38 180Q142 164 278 179M350 220Q451 208 531 219", "none", "#f7f0df", 4, 0.7)
    ] },
    { depth: 0.28, marks: [
      path("M-30 506Q90 420 204 480Q360 401 640 455V720H-30Z", p.forest),
      ...[25, 78, 518, 565].flatMap((x, i) => [rect(x, 185 + i * 18, 7, 392, p.ink), path(`M${x - 56} 424L${x + 3} ${150 + i * 18}L${x + 63} 424L${x + 38} 413L${x + 75} 478H${x - 64}L${x - 32} 415Z`, p.ink, void 0, 2, 0.72)])
    ] }
  ];
}
function lantern(x, y, s, p) {
  return [
    rect(x - 28 * s, y - 10 * s, 56 * s, 10 * s, p.ink),
    rect(x - 7 * s, y - 78 * s, 14 * s, 68 * s, p.ink),
    rect(x - 24 * s, y - 92 * s, 48 * s, 13 * s, p.ink),
    rect(x - 20 * s, y - 137 * s, 40 * s, 45 * s, "#d6b568"),
    rect(x - 3 * s, y - 137 * s, 6 * s, 45 * s, p.ink),
    rect(x - 20 * s, y - 116 * s, 40 * s, 4 * s, p.ink),
    path(`M${x - 38 * s} ${y - 137 * s}Q${x - 24 * s} ${y - 139 * s} ${x - 13 * s} ${y - 161 * s}H${x + 13 * s}Q${x + 24 * s} ${y - 139 * s} ${x + 38 * s} ${y - 137 * s}Z`, p.ink),
    circle(x, y - 169 * s, 5 * s, p.ink)
  ];
}
function foreground(p, temple = false) {
  return { depth: 1, marks: [
    path("M-20 677Q165 636 298 665Q476 622 620 667V740H-20Z", p.ink),
    ...lantern(temple ? 510 : 102, 676, temple ? 1.05 : 1.2, p),
    path("M606 18Q510 55 468 109Q439 139 398 156M530 63L529 18M483 99L550 104M449 134L461 192", "none", p.ink, 6),
    ...[[530, 54], [482, 98], [443, 139], [465, 178], [564, 101], [407, 153]].map(([x, y]) => path(`M${x - 19} ${y + 3}Q${x - 15} ${y - 21} ${x + 18} ${y - 10}Q${x + 15} ${y + 13} ${x - 19} ${y + 3}Z`, p.forest)),
    ...Array.from({ length: 12 }, (_, i) => path(`M${i * 58} 690l-6 -31m6 31l15 -24`, "none", "#d3c7a0", 1.5, 0.65))
  ] };
}
function templateArt(id) {
  const p = paletteFor(id);
  return [...background(p), { depth: 0.65, marks: [
    path("M170 520V350H434V520Z", p.paper, p.ink, 3),
    path("M130 356Q200 333 245 292H362Q407 333 475 356Z", p.ink),
    ...[196, 244, 292, 340, 388].map((x) => rect(x, 370, 7, 146, p.accent)),
    rect(153, 517, 300, 13, p.ink),
    path("M200 720Q250 585 301 529Q331 585 399 720Z", "#d4c49c")
  ] }, foreground(p)];
}

function kasugaArt() {
  const p = paletteFor("kasuga");
  return [...background(p), { depth: 0.62, marks: [
    path("M228 720L271 397H333L398 720Z", "#d8ccb0"),
    rect(207, 326, 17, 244, p.accent),
    rect(380, 326, 17, 244, p.accent),
    path("M174 301Q302 330 431 301L423 322Q302 348 182 322Z", p.ink),
    rect(189, 353, 225, 12, p.accent),
    rect(293, 323, 18, 45, p.accent),
    ...lantern(198, 508, 0.48, p),
    ...lantern(408, 512, 0.5, p),
    ...lantern(161, 585, 0.7, p),
    ...lantern(453, 590, 0.76, p),
    path("M269 446L266 468M337 451L343 477M253 553L244 582M362 558L373 589", "none", "#b2a181", 2)
  ] }, foreground(p)];
}

function todaijiArt() {
  const p = paletteFor("todaiji");
  return [...background(p), { depth: 0.65, marks: [
    rect(127, 447, 346, 142, p.paper),
    rect(160, 364, 280, 59, p.paper),
    path("M80 447Q142 438 181 401H419Q458 438 520 447L490 460H110Z", p.ink),
    path("M124 364Q181 350 214 293H386Q419 350 476 364L456 378H144Z", p.ink),
    path("M218 300Q228 289 230 275M382 300Q372 289 370 275", "none", p.accent, 6),
    rect(232, 297, 136, 5, p.accent),
    ...[150, 198, 246, 294, 342, 390, 438].map((x) => rect(x, 465, 9, 124, p.accent)),
    ...[181, 219, 257, 295, 333, 371, 409].map((x) => rect(x, 385, 5, 28, p.ink)),
    rect(263, 486, 74, 104, p.ink),
    rect(110, 589, 380, 13, p.ink),
    rect(91, 610, 418, 8, p.ink),
    path("M178 720L267 619H333L424 720Z", "#d1c5a3"),
    path("M143 576H457M143 570H457M176 355H424", "none", p.accent, 1.5)
  ] }, foreground(p, true)];
}

const artFor = (id) => id === "kasuga" ? kasugaArt() : id === "todaiji" ? todaijiArt() : templateArt(id);

function Art({ layers }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "motion-art-fallback", "aria-hidden": true, children: layers.map((layer, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 600 720", preserveAspectRatio: "xMidYMid slice", style: { "--depth": layer.depth }, children: layer.marks.map((mark, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: mark.d, fill: mark.fill, stroke: mark.stroke, strokeWidth: mark.width, opacity: mark.opacity, strokeLinecap: "round", strokeLinejoin: "round" }, j)) }, i)) });
}

function limitTilt(x, y) {
  const length = Math.hypot(x, y);
  const scale = length > 0.38 ? 0.38 / length : 1;
  return { x: x * scale || 0, y: y * scale || 0 };
}
function createOrientationInput(initialBaseline) {
  let baseline = initialBaseline ? { ...initialBaseline } : null;
  return (beta, gamma, dt) => {
    if (!Number.isFinite(beta) || !Number.isFinite(gamma)) return { x: 0, y: 0 };
    if (!baseline) baseline = { beta, gamma };
    const result = limitTilt((beta - baseline.beta) / 52, -(gamma - baseline.gamma) / 52);
    const center = clamp(dt * 0.025);
    baseline.beta += (beta - baseline.beta) * center;
    baseline.gamma += (gamma - baseline.gamma) * center;
    return result;
  };
}

const damp = (current, target, dt, rate = 4) => current + (target - current) * (1 - Math.exp(-rate * dt));

const SEALED_FLIP_DURATION = 1.75;
const flip = {
  id: "flip",
  duration: 0.6,
  pose(t, _seed, card) {
    if (t >= 1) return { ...restPose };
    if (!card.sealed) {
      const drop2 = clamp(t / 0.92);
      const back2 = 1 + 2.5 * (drop2 - 1) ** 3 + 1.5 * (drop2 - 1) ** 2;
      return {
        ...restPose,
        rotate: 0,
        y: (1 - back2) * -85,
        lift: 0,
        seal: 1
      };
    }
    const seconds = clamp(t) * SEALED_FLIP_DURATION;
    const drop = clamp(seconds / 0.38);
    const back = 1 + 2.5 * (drop - 1) ** 3 + 1.5 * (drop - 1) ** 2;
    const turn = clamp((seconds - 1.22) / 0.53);
    const eased = turn < 0.5 ? 4 * turn ** 3 : 1 - (-2 * turn + 2) ** 3 / 2;
    return {
      ...restPose,
      rotate: (1 - eased) * 180,
      y: (1 - back) * -85 + Math.sin(turn * Math.PI * 2) * 3 * (1 - turn),
      lift: Math.sin(eased * Math.PI) * 0.18,
      seal: clamp((seconds - 0.48) / 0.7)
    };
  }
};

const CARD = "h-full w-full overflow-hidden rounded-[28px] shadow-[0_24px_60px_-20px_rgba(31,42,36,.45)] ring-1 ring-sumi/5";
const TIME_EXPR_RE = /(\d+(?:[〜～–—-]\d+)?(?:分間|分钟|分|時間|小时|\s?(?:minutes?|mins?|hours?|hrs?)\b))/gi;
const SHORT_BRACKET_RE = /([「『（][^」』）]{1,6}[」』）])/g;
const IS_SHORT_BRACKET_RE = /^[「『（][^」』）]{1,6}[」』）]$/;
const CJK_RE = /[\u3040-\u30ff\u3400-\u9fff]/;
const MAX_EN_NOWRAP_LEN = 22;
const MAX_CJK_TAIL_LEN = 5;
const DEFAULT_CJK_TAIL_LEN = 4;
function splitNoWrapTimeSegments(text) {
  const parts = text.split(TIME_EXPR_RE);
  const out = [];
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part) continue;
    out.push({ text: part, nowrap: i % 2 === 1 });
  }
  return out;
}
function renderNoWrapTimes(text) {
  return splitNoWrapTimeSegments(text).map(
    (seg, i) => seg.nowrap ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "nowrap-time", className: "whitespace-nowrap", children: seg.text }, i) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: seg.text }, i)
  );
}
function splitBalancedTitle(teaser, lang) {
  const trimmed = teaser.trim();
  if (!trimmed) return [{ text: "「」", nowrap: true }];
  if (lang === "en" || !CJK_RE.test(trimmed)) {
    const words = trimmed.split(/\s+/);
    if (words.length >= 2) {
      const last = words[words.length - 1];
      const prev = words[words.length - 2];
      const pair = `${prev} ${last}」`;
      if (pair.length <= MAX_EN_NOWRAP_LEN) {
        const head = words.slice(0, -2).join(" ");
        return [
          { text: head ? `「${head} ` : "「", nowrap: false },
          { text: pair, nowrap: true }
        ];
      }
      const single = `${last}」`;
      if (single.length <= MAX_EN_NOWRAP_LEN) {
        const head = words.slice(0, -1).join(" ");
        return [
          { text: head ? `「${head} ` : "「", nowrap: false },
          { text: single, nowrap: true }
        ];
      }
    }
    return [{ text: `「${trimmed}」`, nowrap: trimmed.length + 2 <= MAX_EN_NOWRAP_LEN }];
  }
  const tailBoundary = Math.max(
    trimmed.lastIndexOf("、"),
    trimmed.lastIndexOf("，"),
    trimmed.lastIndexOf("。"),
    trimmed.lastIndexOf("」"),
    trimmed.lastIndexOf("』"),
    trimmed.lastIndexOf("）")
  );
  const afterBoundary = tailBoundary >= 0 ? trimmed.slice(tailBoundary + 1) : "";
  const tailLen = afterBoundary.length >= 2 && afterBoundary.length <= MAX_CJK_TAIL_LEN ? afterBoundary.length : Math.min(DEFAULT_CJK_TAIL_LEN, trimmed.length);
  const headRaw = trimmed.slice(0, trimmed.length - tailLen);
  const tailText = `${trimmed.slice(trimmed.length - tailLen)}」`;
  if (!headRaw) return [{ text: `「${tailText}`, nowrap: true }];
  const segments = [];
  let prependedOpen = false;
  for (const part of headRaw.split(SHORT_BRACKET_RE)) {
    if (!part) continue;
    const isBracket = IS_SHORT_BRACKET_RE.test(part);
    if (!prependedOpen) {
      if (isBracket) {
        segments.push({ text: "「", nowrap: false });
        segments.push({ text: part, nowrap: true });
      } else {
        segments.push({ text: `「${part}`, nowrap: false });
      }
      prependedOpen = true;
    } else {
      segments.push({ text: part, nowrap: isBracket });
    }
  }
  if (!prependedOpen) segments.push({ text: "「", nowrap: false });
  segments.push({ text: tailText, nowrap: true });
  return segments;
}
function SpotCardFront({ d, destLabel, rarity }) {
  const s = d.spot;
  const { lang, t } = useI18n();
  const st = getSpotText(s, lang);
  const photo = usePlacePhoto(s.id);
  const titleSegments = splitBalancedTitle(st.teaser, lang);
  const mc = motionCopy(lang);
  const isRare = rarity === "rare" || rarity === "legendary";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-testid": "card-front", className: `${CARD} relative flex flex-col bg-white ${isRare ? "ring-kin/50" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(PlacePhoto, { placeId: s.id, alt: st.area, priority: true, className: "h-[64%] shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-3 top-3 flex items-center gap-1.5", children: [
        d.visited && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-moss/90 px-2.5 py-0.5 text-[11px] font-medium text-white shadow-sm backdrop-blur-sm", children: t("visitedBadge") }),
        isRare && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "data-testid": "rare-badge",
            className: `rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-[0.08em] shadow-sm backdrop-blur-sm ${rarity === "legendary" ? "bg-shu/90 text-washi ring-1 ring-kin/60" : "bg-sumi/80 text-kin ring-1 ring-kin/50"}`,
            children: rarity === "legendary" ? mc.legendaryBadge : mc.rareBadge
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-0.5 text-[10px] text-white/90 backdrop-blur-sm", children: st.area }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-4 bottom-3 flex items-end justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium tracking-[0.28em] text-white/95 drop-shadow", children: "SURPRISE CARD" }),
        photo && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "max-w-[55%] truncate text-[10px] text-white/75 drop-shadow", children: [
          photo.license,
          " · ",
          photo.artist
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col justify-between px-5 pb-4 pt-3.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          "data-testid": "card-front-title",
          className: "font-serif text-[18.5px] leading-snug tracking-[-0.01em] text-sumi [line-break:strict] [text-wrap:balance]",
          children: titleSegments.map(
            (seg, i) => seg.nowrap ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "title-nowrap-segment", className: "whitespace-nowrap", children: seg.text }, i) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: seg.text }, i)
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: t("stayLabel"), value: `${d.visitMin}${t("minUnit")}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: t("toDestLabel", { dest: destLabel }), value: t("totalMin", { n: d.totalMin }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: t("travelerCards"), value: t("cardsUnit", { n: s.postCount }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-[11px] text-sumi/45", children: t("flipHint") })
      ] })
    ] })
  ] });
}
function SpotCardBack({
  d,
  destLabel,
  onGo,
  artSlot
}) {
  const s = d.spot;
  const { lang, t } = useI18n();
  const st = getSpotText(s, lang);
  const os = openState(s.hours, /* @__PURE__ */ new Date(), d.toSpotMin);
  const photo = usePlacePhoto(s.id);
  if (artSlot) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-testid": "card-back", className: `${CARD} flex flex-col bg-sumi p-3 text-washi ring-kin/25`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-testid": "card-back-art-frame",
          className: "relative h-[58%] min-h-[220px] shrink-0 overflow-hidden rounded-[20px]",
          children: [
            artSlot,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-sumi/95 via-sumi/55 to-transparent px-3.5 pb-2.5 pt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11.5px] tracking-[0.22em] text-kin", children: st.area }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-0.5 line-clamp-1 font-serif text-[18px] leading-snug text-washi", children: st.name })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-testid": "card-back-body",
          className: "flex min-h-0 flex-1 flex-col justify-center gap-2 px-1.5 py-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 text-[12.5px] leading-snug text-washi", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "walk", className: "h-3.5 w-3.5 shrink-0 text-kin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 truncate", children: renderNoWrapTimes(t("legSummary", { total: d.totalMin, slack: d.slackMin })) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: `line-clamp-1 text-[12px] leading-snug ${os.open ? "text-washi/90" : "text-[#ff9c87]"}`,
                children: [
                  "● ",
                  os.open ? t("openOnArrival") : formatOpenState(os, lang),
                  " · ",
                  renderNoWrapTimes(st.fee)
                ]
              }
            ),
            photo && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "truncate text-[11.5px] leading-snug text-washi/75", children: [
              t("photoCredit"),
              ":",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: photo.commonsUrl,
                  target: "_blank",
                  rel: "noreferrer",
                  onClick: (e) => e.stopPropagation(),
                  className: "underline underline-offset-2 hover:text-washi",
                  children: photo.artist
                }
              ),
              " ",
              "(",
              photo.licenseUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: photo.licenseUrl,
                  target: "_blank",
                  rel: "noreferrer",
                  onClick: (e) => e.stopPropagation(),
                  className: "underline underline-offset-2 hover:text-washi",
                  children: photo.license
                }
              ) : photo.license,
              ")"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "data-testid": "card-back-go-button",
          className: "mt-auto w-full shrink-0 rounded-full bg-kin py-3 text-sm font-bold text-sumi shadow-lg shadow-kin/20 transition active:scale-[.98]",
          onClick: (e) => {
            e.stopPropagation();
            onGo();
          },
          children: t("goHereBtn")
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-testid": "card-back", className: `${CARD} flex flex-col bg-sumi p-4 text-washi ring-kin/25`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-3 border-b border-washi/10 pb-3.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PlacePhoto, { placeId: s.id, alt: st.name, className: "h-12 w-12 shrink-0 rounded-2xl ring-1 ring-washi/15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-[0.26em] text-kin", children: st.area }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-0.5 line-clamp-2 font-serif text-[19px] leading-snug text-washi", children: st.name })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-testid": "card-back-body",
        className: "flex min-h-0 flex-1 flex-col gap-3.5 overflow-y-auto py-3.5 pr-0.5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-washi/[0.06] px-3.5 py-2.5 ring-1 ring-washi/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-1 text-[12px] leading-snug text-washi", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Leg, { icon: "walk", text: t("leg1", { n: d.toSpotMin }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Leg, { icon: "clock", text: t("leg2", { n: d.visitMin }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Leg, { icon: "walk", text: t("leg3", { dest: destLabel, n: d.toDestMin }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 border-t border-washi/10 pt-1.5 text-[11px] leading-snug text-kin", children: renderNoWrapTimes(t("legSummary", { total: d.totalMin, slack: d.slackMin })) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-[12px] leading-[1.45] text-washi/95", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: os.open ? "font-medium" : "font-medium text-[#ff9c87]", children: [
              "● ",
              os.open ? t("openOnArrival") : formatOpenState(os, lang),
              "　",
              renderNoWrapTimes(st.fee)
            ] }),
            st.safety.slice(0, 2).map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { "data-testid": "card-back-safety", className: "line-clamp-2 text-washi/85", children: [
              "・",
              renderNoWrapTimes(x)
            ] }, x)),
            st.dataNote && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "line-clamp-2 text-[11px] leading-snug text-kin/90", children: [
              "⚠ ",
              renderNoWrapTimes(st.dataNote)
            ] })
          ] }),
          photo && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "border-t border-washi/10 pt-3 break-words text-[11px] leading-snug text-washi/80", children: [
            t("photoCredit"),
            ":",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: photo.commonsUrl, target: "_blank", rel: "noreferrer", className: "underline underline-offset-2 hover:text-washi", children: photo.artist }),
            " ",
            "(",
            photo.licenseUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: photo.licenseUrl, target: "_blank", rel: "noreferrer", className: "underline underline-offset-2 hover:text-washi", children: photo.license }) : photo.license,
            ")"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        "data-testid": "card-back-go-button",
        className: "mt-auto w-full shrink-0 rounded-full bg-kin py-3.5 text-sm font-bold text-sumi shadow-lg shadow-kin/20 transition active:scale-[.98]",
        onClick: onGo,
        children: t("goHereBtn")
      }
    )
  ] });
}
function Mini({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-washi px-1.5 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[10px] text-sumi/50", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: value })
  ] });
}
function Leg({ icon, text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 whitespace-pre-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: icon, className: "h-4 w-4 shrink-0 text-kin" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 truncate", children: text })
  ] });
}

function SwipeCard({
  children,
  onSwipe,
  onBounce,
  onTap,
  disabled,
  dragDisabled,
  canSwipeOut = true,
  bounceTrigger = 0,
  dragX,
  testId,
  dataRole,
  hintText,
  className = ""
}) {
  const { t } = useI18n();
  const prefersReduced = usePrefersReducedMotion();
  const localX = useMotionValue(0);
  const rotate = useTransform(localX, [-220, 0, 220], [-15, 0, 15]);
  const scale = useTransform(localX, [-240, 0, 240], [0.96, 1, 0.96]);
  const hintOpacity = useTransform(localX, [-130, -35, 0, 35, 130], [0.96, 0, 0, 0, 0.96]);
  const hintScale = useTransform(localX, [-130, -35, 0, 35, 130], [1, 0.88, 0.85, 0.88, 1]);
  const containerRef = reactExports.useRef(null);
  const pointerDownPos = reactExports.useRef(null);
  const axisLock = reactExports.useRef("pending");
  const didDrag = reactExports.useRef(false);
  const tappedOnPointerUp = reactExports.useRef(false);
  const swipedOut = reactExports.useRef(false);
  const lastTapAt = reactExports.useRef(0);
  const canDrag = !disabled && !dragDisabled;
  reactExports.useEffect(() => {
    swipedOut.current = false;
    localX.set(0);
  }, [localX]);
  reactExports.useEffect(() => {
    if (!dragX) return;
    return localX.on("change", (v) => {
      if (!swipedOut.current) dragX.set(prefersReduced ? 0 : v);
    });
  }, [localX, dragX, prefersReduced]);
  reactExports.useEffect(() => {
    if (bounceTrigger <= 0 || swipedOut.current || prefersReduced) return;
    void animate(localX, -64, { duration: 0.16 }).then(
      () => animate(localX, 0, { type: "spring", stiffness: 220, damping: 16 })
    );
  }, [bounceTrigger, localX, prefersReduced]);
  const fireTap = (target) => {
    if (disabled || !onTap) return;
    const el = target;
    if (el?.closest("button,a,input,textarea")) return;
    const now = Date.now();
    if (now - lastTapAt.current < 220) return;
    lastTapAt.current = now;
    onTap();
  };
  const handleDragStart = () => {
  };
  const handleDrag = (_, info) => {
    if (axisLock.current === "pending" && Math.hypot(info.offset.x, info.offset.y) >= 8) {
      axisLock.current = Math.abs(info.offset.y) > Math.abs(info.offset.x) ? "y" : "x";
    }
    if (axisLock.current === "y") {
      didDrag.current = true;
      localX.set(0);
      return;
    }
    if (Math.hypot(info.offset.x, info.offset.y) > 10) {
      didDrag.current = true;
    }
  };
  const handleDragEnd = (_, info) => {
    const lockedVertical = axisLock.current === "y";
    axisLock.current = "pending";
    setTimeout(() => {
      didDrag.current = false;
    }, 60);
    if (lockedVertical) {
      localX.set(0);
      return;
    }
    if (!canDrag) {
      if (prefersReduced) localX.set(0);
      else animate(localX, 0, { type: "spring", stiffness: 380, damping: 26 });
      return;
    }
    if (swipedOut.current) return;
    const width = containerRef.current?.clientWidth || 348;
    const swiped = Math.abs(info.offset.x) > width * 0.3 || Math.abs(info.velocity.x) / width > 1.1;
    if (swiped && canSwipeOut) {
      const dir = (info.offset.x !== 0 ? info.offset.x : info.velocity.x) < 0 ? "left" : "right";
      swipedOut.current = true;
      triggerHaptic(8);
      if (prefersReduced) localX.set(0);
      else animate(localX, dir === "left" ? -460 : 460, { duration: 0.26, ease: [0.22, 1, 0.36, 1] });
      onSwipe(dir);
    } else if (swiped && !canSwipeOut) {
      triggerHaptic([8, 30, 8]);
      if (prefersReduced) localX.set(0);
      else animate(localX, 0, { type: "spring", stiffness: 160, damping: 16 });
      onBounce?.();
    } else {
      if (prefersReduced) localX.set(0);
      else animate(localX, 0, { type: "spring", stiffness: 110, damping: 18 });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref: containerRef,
      "data-testid": testId,
      "data-role": dataRole,
      className: `relative select-none ${canDrag ? "cursor-grab active:cursor-grabbing" : ""} ${className}`,
      style: prefersReduced ? { touchAction: "pan-y" } : { x: localX, rotate, scale, touchAction: "pan-y" },
      drag: canDrag ? "x" : false,
      dragDirectionLock: true,
      dragElastic: canSwipeOut ? 0.85 : 0.35,
      dragMomentum: false,
      onDragStart: handleDragStart,
      onDrag: handleDrag,
      onDragEnd: handleDragEnd,
      onPointerDown: (e) => {
        pointerDownPos.current = { x: e.clientX, y: e.clientY };
        axisLock.current = "pending";
        didDrag.current = false;
        tappedOnPointerUp.current = false;
      },
      onPointerMove: (e) => {
        const start = pointerDownPos.current;
        if (!start) return;
        const dx = e.clientX - start.x;
        const dy = e.clientY - start.y;
        if (axisLock.current === "pending" && Math.hypot(dx, dy) >= 8) {
          axisLock.current = Math.abs(dy) > Math.abs(dx) ? "y" : "x";
        }
        if (axisLock.current === "y") {
          didDrag.current = true;
          localX.set(0);
        }
      },
      onPointerUp: (e) => {
        const start = pointerDownPos.current;
        pointerDownPos.current = null;
        const lockedVertical = axisLock.current === "y";
        axisLock.current = "pending";
        if (lockedVertical) {
          didDrag.current = true;
          localX.set(0);
          return;
        }
        if (!start || didDrag.current) return;
        if (Math.hypot(e.clientX - start.x, e.clientY - start.y) <= 10) {
          tappedOnPointerUp.current = true;
          fireTap(e.target);
        } else {
          didDrag.current = true;
        }
      },
      onPointerCancel: () => {
        pointerDownPos.current = null;
        axisLock.current = "pending";
        tappedOnPointerUp.current = false;
      },
      onClick: (e) => {
        if (tappedOnPointerUp.current) {
          tappedOnPointerUp.current = false;
          return;
        }
        if (didDrag.current) return;
        fireTap(e.target);
      },
      children: [
        children,
        canDrag && !prefersReduced && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            "aria-hidden": true,
            style: { opacity: hintOpacity, scale: hintScale },
            className: "pointer-events-none absolute inset-x-0 top-4 z-20 flex justify-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-sumi/85 px-3.5 py-1 text-[11px] font-medium tracking-wider text-washi shadow-sm backdrop-blur-sm", children: hintText ?? (canSwipeOut ? t("swipeHint") : t("onlyOneShort")) })
          }
        )
      ]
    }
  );
}

function NormalCardStage({
  frontSlot,
  backSlot,
  embedded = false,
  swipeTestId = "swipe-card",
  dataRole,
  detour,
  destLabel,
  variant,
  sealed,
  flipped,
  onFlippedChange,
  onGo,
  onSwipe,
  canSwipeOut,
  bounceTrigger,
  onBounce,
  dragX,
  gyro,
  onGyroActive,
  fogOverride,
  onRevealed
}) {
  const { lang } = useI18n();
  const mc = motionCopy(lang);
  const reduced = usePrefersReducedMotion();
  const spotId = detour.spot.id;
  const stageRef = reactExports.useRef(null);
  const frontFaceRef = reactExports.useRef(null);
  const backFaceRef = reactExports.useRef(null);
  const artHostRef = reactExports.useRef(null);
  const rendererRef = reactExports.useRef(null);
  const [webgl, setWebgl] = reactExports.useState(false);
  const [complete, setComplete] = reactExports.useState(() => reduced && !sealed);
  const stateRef = reactExports.useRef({ complete: reduced && !sealed, back: flipped, progress: reduced && !sealed ? 1 : 0 });
  const gyroTilt = reactExports.useRef({ x: 0, y: 0 });
  const hoverTilt = reactExports.useRef({ x: 0, y: 0 });
  const gyroActiveRef = reactExports.useRef(false);
  const isPointerDownRef = reactExports.useRef(false);
  const applyRef = reactExports.useRef(() => {
  });
  const onFlippedRef = reactExports.useRef(onFlippedChange);
  onFlippedRef.current = onFlippedChange;
  const onGyroActiveRef = reactExports.useRef(onGyroActive);
  onGyroActiveRef.current = onGyroActive;
  const fogOverrideRef = reactExports.useRef(fogOverride);
  fogOverrideRef.current = fogOverride;
  reactExports.useEffect(() => {
    stateRef.current.back = flipped;
  }, [flipped]);
  const layers = reactExports.useMemo(() => artFor(spotId), [spotId]);
  const palette = reactExports.useMemo(() => paletteFor(spotId), [spotId]);
  const reveal = variant.reveal === "mist" ? mist : flip;
  const duration = sealed ? SEALED_FLIP_DURATION : reveal.duration;
  reactExports.useEffect(() => {
    if (complete) onRevealed?.(variant.seed);
  }, [complete, onRevealed, variant.seed]);
  reactExports.useEffect(() => {
    let cancelled = false;
    setWebgl(false);
    if (reduced || !complete) return;
    void __vitePreload(async () => { const {createCardRenderer} = await import('./renderer-DJzmJv6q.js');return { createCardRenderer }},true?__vite__mapDeps([0,1]):void 0).then(({ createCardRenderer }) => {
      if (cancelled || !artHostRef.current) return;
      const failed = () => {
        if (!cancelled) {
          rendererRef.current = null;
          setWebgl(false);
        }
      };
      try {
        const instance = createCardRenderer(artHostRef.current, layers, palette, variant, failed);
        if (cancelled) instance.dispose();
        else {
          rendererRef.current = instance;
          setWebgl(true);
        }
      } catch {
        failed();
      }
    }).catch(() => {
      if (!cancelled) setWebgl(false);
    });
    return () => {
      cancelled = true;
      rendererRef.current?.dispose();
      rendererRef.current = null;
    };
  }, [layers, palette, variant, reduced, complete]);
  reactExports.useEffect(() => {
    if (!gyro || reduced) {
      gyroActiveRef.current = false;
      gyroTilt.current = { x: 0, y: 0 };
      return;
    }
    const input = createOrientationInput({ beta: 0, gamma: 0 });
    let last = performance.now();
    const onOrient = (event) => {
      if (reduced || !gyro) return;
      if (event.beta == null || event.gamma == null) return;
      if (!Number.isFinite(event.beta) || !Number.isFinite(event.gamma)) return;
      gyroActiveRef.current = true;
      onGyroActiveRef.current?.();
      const now = performance.now();
      gyroTilt.current = input(event.beta, event.gamma, Math.min(0.1, (now - last) / 1e3));
      last = now;
    };
    window.addEventListener("deviceorientation", onOrient);
    return () => window.removeEventListener("deviceorientation", onOrient);
  }, [gyro, reduced]);
  reactExports.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const tilt = { x: 0, y: 0 };
    let elapsed = 0;
    let last = performance.now();
    let revealStart = last;
    let pausedAt = 0;
    let frame = 0;
    const initialSpin = reduced || !sealed ? 0 : 180;
    let spin = initialSpin;
    let paused = document.hidden;
    const startComplete = reduced && !sealed;
    stateRef.current = { complete: startComplete, back: false, progress: startComplete ? 1 : 0 };
    setComplete(startComplete);
    gyroTilt.current = { x: 0, y: 0 };
    hoverTilt.current = { x: 0, y: 0 };
    gyroActiveRef.current = false;
    const apply = (pose, rotation = pose.rotate) => {
      spin = rotation;
      const clampedSpin = reduced ? 0 : rotation;
      el.style.setProperty("--spin", `${clampedSpin}deg`);
      el.style.setProperty("--rise", `${reduced ? 0 : pose.y}px`);
      const flipArcLift = !reduced && stateRef.current.complete ? Math.sin(Math.max(0, Math.min(180, clampedSpin)) / 180 * Math.PI) * 0.14 : pose.lift;
      el.style.setProperty("--lift", `${reduced ? 1 : 1 + flipArcLift}`);
      const activeFog = fogOverrideRef.current;
      if (activeFog?.active) {
        el.style.setProperty("--fog", `${activeFog.opacity}`);
        el.style.setProperty("--blur", `${reduced ? 0 : activeFog.blurPx}px`);
      } else {
        el.style.setProperty("--fog", `${pose.mist}`);
        el.style.setProperty("--blur", `${reduced ? 0 : pose.mist * 28}px`);
      }
      el.style.setProperty("--seal", `${pose.seal}`);
      el.style.setProperty("--seal-opacity", `${Math.max(0, 1 - Math.max(0, pose.seal - 0.78) * 4.6)}`);
      el.dataset.spin = String(Math.round(clampedSpin));
      const showingBack = reduced ? stateRef.current.back : clampedSpin >= 90;
      if (frontFaceRef.current) {
        frontFaceRef.current.style.visibility = showingBack ? "hidden" : "visible";
      }
      if (backFaceRef.current) {
        backFaceRef.current.style.visibility = showingBack ? "visible" : "hidden";
      }
      rendererRef.current?.update(
        reduced ? 0 : tilt.x,
        reduced ? 0 : tilt.y,
        pose.seal,
        sealed && !stateRef.current.complete
      );
    };
    applyRef.current = apply;
    apply(startComplete ? restPose : reveal.pose(0, variant.seed, { id: spotId, sealed }), initialSpin);
    const tick = (now) => {
      if (paused) return;
      const dt = Math.max(0, Math.min(0.05, (now - last) / 1e3));
      last = now;
      elapsed = Math.max(0, (now - revealStart) / 1e3);
      const effectiveDuration = reduced ? 0.2 : duration;
      const progress = stateRef.current.complete ? 1 : Math.min(1, elapsed / effectiveDuration);
      if (!stateRef.current.complete && progress >= 1) {
        stateRef.current.complete = true;
        setComplete(true);
        triggerHaptic(8);
      }
      stateRef.current.progress = stateRef.current.complete ? 1 : progress;
      const pose = stateRef.current.complete ? restPose : reveal.pose(progress, variant.seed, { id: spotId, sealed });
      spin = stateRef.current.complete ? damp(spin, stateRef.current.back ? 180 : 0, dt, 7) : pose.rotate;
      const activeTilt = !reduced && stateRef.current.complete;
      const sourceTilt = gyroActiveRef.current ? gyroTilt.current : hoverTilt.current;
      tilt.x = damp(tilt.x, activeTilt ? sourceTilt.x : 0, dt, 9);
      tilt.y = damp(tilt.y, activeTilt ? sourceTilt.y : 0, dt, 9);
      const scale = stateRef.current.back ? 1 : 0.72;
      el.style.setProperty("--rx", `${(tilt.x * 57.3 * scale).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(tilt.y * 57.3 * scale).toFixed(2)}deg`);
      el.style.setProperty("--px", `${(tilt.y * 34).toFixed(2)}px`);
      el.style.setProperty("--py", `${(tilt.x * 34).toFixed(2)}px`);
      const sheenX = 50 + Math.cos(variant.lightAngle) * 18 + tilt.y * 135;
      const sheenY = 42 + Math.sin(variant.lightAngle) * 18 + tilt.x * 135;
      const sheenAngle = 115 + tilt.y * 95 - tilt.x * 55;
      const tiltMag = Math.hypot(tilt.x, tilt.y);
      el.style.setProperty("--sheen-x", `${sheenX.toFixed(1)}%`);
      el.style.setProperty("--sheen-y", `${sheenY.toFixed(1)}%`);
      el.style.setProperty("--sheen-angle", `${sheenAngle.toFixed(1)}deg`);
      el.style.setProperty("--sheen-opacity", `${activeTilt ? Math.min(0.95, 0.2 + tiltMag * 2.1).toFixed(2) : 0}`);
      el.style.setProperty("--tilt-mag", `${activeTilt ? tiltMag.toFixed(3) : 0}`);
      el.style.setProperty("--breath", "0px");
      apply(pose, spin);
      frame = requestAnimationFrame(tick);
    };
    const onVisibility = () => {
      const nextPaused = document.hidden;
      if (nextPaused === paused) return;
      paused = nextPaused;
      cancelAnimationFrame(frame);
      if (paused) {
        pausedAt = performance.now();
      } else {
        const now = performance.now();
        if (pausedAt > 0) revealStart += now - pausedAt;
        pausedAt = 0;
        last = now;
        frame = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    if (!paused) frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("visibilitychange", onVisibility);
      applyRef.current = () => {
      };
    };
  }, [variant, spotId, duration, reduced, sealed, reveal]);
  const handleTap = () => {
    if (!stateRef.current.complete) {
      stateRef.current.complete = true;
      stateRef.current.back = false;
      applyRef.current(restPose, 0);
      setComplete(true);
      onFlippedRef.current(false);
      return;
    }
    const nextBack = !stateRef.current.back;
    stateRef.current.back = nextBack;
    onFlippedRef.current(nextBack);
    if (reduced) applyRef.current(restPose, 0);
  };
  const stageStyle = {
    "--paper": palette.paper,
    "--ink": palette.ink,
    "--accent": palette.accent
  };
  const kanjiLabel = spotId === "kasuga" ? "春日" : spotId === "todaiji" ? "東大寺" : "奈良";
  const isRare = variant.rarity !== "common";
  const artWindow = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "motion-art-window h-full w-full", "data-testid": "card-back-art", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Art, { layers }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "motion-webgl", ref: artHostRef }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "motion-art-title", "aria-hidden": true, children: [
      kanjiLabel,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "旅の栞" })
    ] }),
    !reduced && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `motion-gold-leaf ${variant.rarity === "common" ? "motion-motes" : ""}`,
        "data-testid": isRare ? "rare-particles" : "common-motes",
        "aria-hidden": true,
        children: variant.particles.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("i", { style: { left: `${p.x * 100}%`, top: `${p.y * 100}%`, transform: `rotate(${p.phase}rad)` } }, i))
      }
    )
  ] });
  const hankoMark = variant.rarity === "legendary" ? "希有" : "特別";
  const sealedCover = /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-testid": "sealed-cover",
      className: "relative h-full w-full overflow-hidden rounded-[28px] border border-kin/40 bg-sumi text-washi shadow-[0_24px_60px_-20px_rgba(31,42,36,.45)]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "pointer-events-none absolute inset-0 h-full w-full",
            viewBox: "0 0 340 440",
            preserveAspectRatio: "none",
            "aria-hidden": true,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "14", y: "14", width: "312", height: "412", rx: "20", fill: "none", stroke: "#c9a24a", strokeOpacity: ".34" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "20", y: "20", width: "300", height: "400", rx: "16", fill: "none", stroke: "#c9a24a", strokeOpacity: ".16" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "170", cy: "212", r: "78", fill: "none", stroke: "#c9a24a", strokeOpacity: ".18" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "170", cy: "212", r: "52", fill: "none", stroke: "#c9a24a", strokeOpacity: ".26" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-testid": "card-seal",
            "data-seal-style": "hanko",
            className: "motion-hanko-seal",
            "aria-hidden": true,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "motion-hanko-ring" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "motion-hanko-stamp", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: hankoMark }) }),
              !reduced && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "motion-hanko-flecks", "data-testid": "seal-gold-particles", children: variant.particles.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "i",
                {
                  style: {
                    "--fx": `${(p.x - 0.5) * 210}px`,
                    "--fy": `${(p.y - 0.5) * 220}px`,
                    "--fr": `${Math.round(p.phase * 48)}deg`
                  }
                },
                i
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 bottom-5 text-center text-[11px] tracking-[0.18em] text-kin/85", children: mc.hint })
      ]
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SwipeCard,
    {
      testId: swipeTestId,
      dataRole,
      dragX,
      canSwipeOut,
      bounceTrigger,
      onBounce,
      onSwipe,
      dragDisabled: embedded && !canSwipeOut || flipped || !complete,
      onTap: handleTap,
      className: "h-full",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: stageRef,
          "data-testid": "spot-card",
          "data-renderer": webgl ? "webgl" : "css",
          "data-complete": String(complete),
          "data-face": flipped ? "back" : "front",
          "data-rarity": variant.rarity,
          "data-variation": variant.variation,
          style: stageStyle,
          className: `${variant.reveal === "mist" ? "card-motion-mist" : ""} card-motion-stage ${reduced ? "motion-reduced" : "flip"} ${isRare ? "card-motion-rare" : ""} h-full`,
          onPointerDown: () => {
            isPointerDownRef.current = true;
            hoverTilt.current = { x: 0, y: 0 };
          },
          onPointerUp: () => {
            isPointerDownRef.current = false;
          },
          onPointerMove: (event) => {
            if (reduced || isPointerDownRef.current || event.pointerType !== "mouse" || event.buttons !== 0) return;
            if (typeof window === "undefined" || !window.matchMedia?.("(pointer: fine) and (hover: hover)").matches) return;
            const bounds = event.currentTarget.getBoundingClientRect();
            if (!bounds.width || !bounds.height) return;
            const raw = limitTilt(
              (event.clientY - bounds.top - bounds.height / 2) / bounds.height * 0.3,
              -((event.clientX - bounds.left - bounds.width / 2) / bounds.width) * 0.3
            );
            const mag = Math.hypot(raw.x, raw.y);
            const hoverCap = 0.16;
            const factor = mag > hoverCap ? hoverCap / mag : 1;
            hoverTilt.current = { x: raw.x * factor, y: raw.y * factor };
          },
          onPointerLeave: () => {
            isPointerDownRef.current = false;
            hoverTilt.current = { x: 0, y: 0 };
          },
          onPointerCancel: () => {
            isPointerDownRef.current = false;
            hoverTilt.current = { x: 0, y: 0 };
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-motion-scene", children: [
            !reduced && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-motion-ground", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-motion-lift", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-motion-turn", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  ref: frontFaceRef,
                  "data-flip-face": "front",
                  "aria-hidden": flipped || variant.reveal === "mist" && !complete,
                  className: `card-motion-face card-motion-front ${flipped ? "pointer-events-none" : "pointer-events-auto"}`,
                  style: {
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: reduced ? "none" : "rotateY(0deg) translateZ(1px)",
                    opacity: reduced ? flipped ? 0 : 1 : 1
                  },
                  children: [
                    frontSlot ?? /* @__PURE__ */ jsxRuntimeExports.jsx(SpotCardFront, { d: detour, destLabel, rarity: variant.rarity }),
                    (variant.reveal === "mist" || fogOverride?.active) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "motion-fog", "aria-hidden": true, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", {})
                    ] }),
                    reduced && sealed && !complete && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "motion-reduced-seal-fade", children: sealedCover }),
                    !reduced && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-motion-sheen", "aria-hidden": true }),
                    !reduced && isRare && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-motion-foil-sweep", "aria-hidden": true }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-motion-hairline", "aria-hidden": true })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  ref: backFaceRef,
                  "data-flip-face": "back",
                  "aria-hidden": !flipped,
                  className: `card-motion-face card-motion-back ${flipped ? "pointer-events-auto" : "pointer-events-none"}`,
                  style: {
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: reduced ? "none" : "rotateY(180deg) translateZ(1px)",
                    opacity: reduced ? flipped ? 1 : 0 : 1
                  },
                  children: [
                    complete ? backSlot ? backSlot(artWindow) : /* @__PURE__ */ jsxRuntimeExports.jsx(SpotCardBack, { d: detour, destLabel, onGo, artSlot: artWindow }) : sealed ? sealedCover : null,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-motion-hairline", "aria-hidden": true })
                  ]
                }
              )
            ] }) })
          ] })
        }
      )
    }
  );
}

const LEGACY_ORIENTATION_KEY = "surprisecard.orientation.v1";
const ORIENTATION_KEY = "surprisecard.orientation.v2";
let deniedThisSession = false;
let lastReason = null;
function clearLegacyOrientation() {
  try {
    if (localStorage.getItem(LEGACY_ORIENTATION_KEY) !== null) {
      localStorage.removeItem(LEGACY_ORIENTATION_KEY);
    }
  } catch {
  }
}
clearLegacyOrientation();
function orientationChoice() {
  clearLegacyOrientation();
  try {
    const stored = localStorage.getItem(ORIENTATION_KEY);
    if (stored === "granted") return "granted";
    if (stored !== null) localStorage.removeItem(ORIENTATION_KEY);
    return null;
  } catch {
    return null;
  }
}
function saveGranted() {
  deniedThisSession = false;
  lastReason = null;
  try {
    localStorage.setItem(ORIENTATION_KEY, "granted");
  } catch {
  }
  return "granted";
}
function canOrient() {
  return typeof window !== "undefined" && window.isSecureContext && typeof window.DeviceOrientationEvent !== "undefined";
}
function needsOrientationPermission() {
  if (!canOrient()) return false;
  const event = window.DeviceOrientationEvent;
  return typeof event.requestPermission === "function";
}
function usePointer() {
  deniedThisSession = true;
  lastReason = "denied";
  try {
    localStorage.removeItem(ORIENTATION_KEY);
  } catch {
  }
  return "pointer";
}
function requestOrientationDetailed(opts) {
  clearLegacyOrientation();
  const saved = orientationChoice();
  if (saved === "granted" && !opts?.forceRetry) {
    return Promise.resolve("granted");
  }
  if (!canOrient()) {
    lastReason = "no-sensor";
    return Promise.resolve("no-sensor");
  }
  if (deniedThisSession && !opts?.forceRetry) {
    lastReason = "denied";
    return Promise.resolve("denied");
  }
  const event = window.DeviceOrientationEvent;
  if (typeof event.requestPermission !== "function") {
    saveGranted();
    return Promise.resolve("granted");
  }
  try {
    const pending = event.requestPermission();
    return pending.then(
      (answer) => {
        if (answer === "granted") {
          saveGranted();
          return "granted";
        }
        deniedThisSession = true;
        lastReason = "denied";
        return "denied";
      },
      () => {
        deniedThisSession = true;
        lastReason = "denied";
        return "denied";
      }
    );
  } catch {
    deniedThisSession = true;
    lastReason = "denied";
    return Promise.resolve("denied");
  }
}
function requestOrientationFromClick(opts) {
  return requestOrientationDetailed(opts).then((res) => res === "granted" ? "granted" : "pointer");
}

function mulberry32(seed) {
  return () => {
    seed |= 0;
    seed = seed + 1831565813 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const defaultRarity = { common: 80, rare: 17, legendary: 3 };
const VARIATIONS = ["morning-gold", "vermilion-glow", "cedar-mist", "washi-shimmer"];
function variants({
  seed,
  previousReveal,
  recentReveals = [],
  available = ["flip", "mist"],
  previousVariation,
  recentVariations = [],
  weights = defaultRarity,
  rng
}) {
  if (!available.length) throw new Error("At least one reveal is required");
  const values = Object.values(weights);
  if (values.some((w) => !Number.isFinite(w) || w < 0) || !values.some((w) => w > 0)) throw new Error("Invalid rarity weights");
  const random = rng ?? mulberry32(seed);
  const totalWeight = values.reduce((sum, value) => sum + value, 0);
  const roll = random() * totalWeight;
  const rarity = roll < weights.common ? "common" : roll < weights.common + weights.rare ? "rare" : "legendary";
  const nonRepeating = available.length > 1 ? available.filter((id) => id !== previousReveal) : [...available];
  const fresh = nonRepeating.filter((id) => !recentReveals.slice(-2).includes(id));
  const pool = fresh.length ? fresh : nonRepeating;
  const reveal = pool[Math.floor(random() * pool.length) % pool.length];
  const varNonRepeating = VARIATIONS.filter((id) => id !== previousVariation);
  const varFresh = varNonRepeating.filter((id) => !recentVariations.slice(-2).includes(id));
  const varPool = varFresh.length ? varFresh : varNonRepeating;
  const variation = varPool[Math.floor(random() * varPool.length) % varPool.length];
  const particleCount = rarity === "legendary" ? 22 : rarity === "rare" ? 16 : 8;
  return {
    seed,
    reveal,
    rarity,
    variation,
    lightAngle: random() * Math.PI * 2,
    foilPhase: random() * Math.PI * 2,
    particles: Array.from({ length: particleCount }, () => ({
      x: random(),
      y: random(),
      speed: 0.3 + random() * 0.6,
      phase: random() * Math.PI * 2
    }))
  };
}
function readUrlSeed(search = typeof location !== "undefined" ? location.search ?? "" : "", hash = typeof location !== "undefined" ? location.hash ?? "" : "") {
  const safeSearch = typeof search === "string" ? search : "";
  const safeHash = typeof hash === "string" ? hash : "";
  const fromSearch = new URLSearchParams(safeSearch).get("seed");
  const hashQuery = safeHash.includes("?") ? safeHash.slice(safeHash.indexOf("?") + 1) : "";
  const raw = fromSearch ?? new URLSearchParams(hashQuery).get("seed");
  if (raw === null || raw.trim() === "") return null;
  const parsed = Number(raw);
  if (!Number.isFinite(parsed)) return null;
  return parsed >>> 0;
}
function newSeed() {
  const pinned = readUrlSeed();
  if (pinned !== null) return pinned;
  return crypto.getRandomValues(new Uint32Array(1))[0];
}

const DESTINATIONS = [
  { id: "jr-nara", label: "JR奈良駅", point: "駅の代表地点", lat: 34.68066, lng: 135.81902 },
  { id: "kintetsu-nara", label: "近鉄奈良駅", point: "駅の代表地点", lat: 34.68444, lng: 135.82742 },
  { id: "todaiji", label: "東大寺（大仏殿）", point: "大仏殿", lat: 34.68897, lng: 135.83983 },
  { id: "kasuga", label: "春日大社", point: "境内の代表地点", lat: 34.68139, lng: 135.84833 },
  { id: "shin-omiya", label: "近鉄新大宮駅", point: "駅の代表地点", lat: 34.68545, lng: 135.81151 }
];
const TIME_OPTIONS = [30, 60, 90, 120];
const KEY$1 = "surprisecard.prefs.v1";
function loadPrefs() {
  try {
    const p = JSON.parse(localStorage.getItem(KEY$1) ?? "null");
    if (p && DESTINATIONS.some((d) => d.id === p.destId) && TIME_OPTIONS.includes(p.minutes)) return p;
  } catch {
  }
  return { destId: "jr-nara", minutes: 90 };
}
function savePrefs(p) {
  localStorage.setItem(KEY$1, JSON.stringify(p));
}
const destById = (id) => DESTINATIONS.find((d) => d.id === id) ?? DESTINATIONS[0];

const BLIND_NEAR_ENTER_M = 60;
const BLIND_NEAR_EXIT_M = 85;
const BLIND_TREND_DEADBAND_M = 15;
const BLIND_CLOSER_BAND_M = 350;
const BLIND_MAX_EXTRA_HINTS = 3;
function initialBlindState() {
  return {
    refDistanceM: null,
    status: "start",
    lastDistanceM: null,
    deltaM: 0
  };
}
function getDistanceBand(distanceM, status) {
  if (status === "nearby") return "nearby";
  const d = Math.max(0, Number.isFinite(distanceM) ? distanceM : 0);
  if (d <= BLIND_NEAR_ENTER_M) return "nearby";
  if (d <= BLIND_CLOSER_BAND_M) return "closer";
  return "far";
}
function stepBlindDistance(prev, distanceM) {
  const d = Math.max(0, Number.isFinite(distanceM) ? distanceM : 0);
  if (prev.refDistanceM === null) {
    return {
      refDistanceM: d,
      status: d <= BLIND_NEAR_ENTER_M ? "nearby" : "start",
      lastDistanceM: d,
      deltaM: 0
    };
  }
  if (prev.status === "nearby") {
    if (d < BLIND_NEAR_EXIT_M) {
      return {
        refDistanceM: Math.min(prev.refDistanceM, d),
        status: "nearby",
        lastDistanceM: d,
        deltaM: d - prev.refDistanceM
      };
    }
    return {
      refDistanceM: d,
      status: "colder",
      lastDistanceM: d,
      deltaM: d - prev.refDistanceM
    };
  }
  if (d <= BLIND_NEAR_ENTER_M) {
    return {
      refDistanceM: d,
      status: "nearby",
      lastDistanceM: d,
      deltaM: d - prev.refDistanceM
    };
  }
  const diff = d - prev.refDistanceM;
  if (diff <= -BLIND_TREND_DEADBAND_M) {
    return {
      refDistanceM: d,
      status: "warmer",
      lastDistanceM: d,
      deltaM: diff
    };
  }
  if (diff >= BLIND_TREND_DEADBAND_M) {
    return {
      refDistanceM: d,
      status: "colder",
      lastDistanceM: d,
      deltaM: diff
    };
  }
  return {
    refDistanceM: prev.refDistanceM,
    status: prev.status,
    lastDistanceM: d,
    deltaM: diff
  };
}
function formatHHMM(date) {
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}
function getLeaveUrgency(slackMin) {
  if (slackMin <= 5) return "tight";
  if (slackMin <= 12) return "soon";
  return "calm";
}
function computeLeaveWindow(detour, now = /* @__PURE__ */ new Date()) {
  const leaveOffsetMin = Math.max(0, detour.toSpotMin + detour.visitMin + detour.slackMin);
  const latestLeaveTime = new Date(now.getTime() + leaveOffsetMin * 6e4);
  return {
    latestLeaveTime,
    latestLeaveLabel: formatHHMM(latestLeaveTime),
    slackMin: detour.slackMin,
    totalMin: detour.totalMin,
    urgency: getLeaveUrgency(detour.slackMin)
  };
}
function computeLiveLeaveWindow(baseWindow, now = /* @__PURE__ */ new Date()) {
  const startedMs = baseWindow.startedAt ? Date.parse(baseWindow.startedAt) : NaN;
  const elapsedMin = Number.isFinite(startedMs) ? Math.max(0, Math.floor((now.getTime() - startedMs) / 6e4)) : 0;
  const slackMin = Math.max(0, baseWindow.slackMin - elapsedMin);
  const latestLeaveTime = baseWindow.latestLeaveAt && Number.isFinite(Date.parse(baseWindow.latestLeaveAt)) ? new Date(baseWindow.latestLeaveAt) : now;
  const latestLeaveLabel = baseWindow.latestLeaveLabel ?? formatHHMM(latestLeaveTime);
  return {
    latestLeaveTime,
    latestLeaveLabel,
    slackMin,
    totalMin: baseWindow.totalMin ?? 0,
    urgency: getLeaveUrgency(slackMin)
  };
}
const BLIND_CROP_PRESETS = [
  { objectPosition: "32% 40%", scale: 1.16, blurPx: 5.5 },
  { objectPosition: "68% 42%", scale: 1.2, blurPx: 6 },
  { objectPosition: "50% 60%", scale: 1.15, blurPx: 5.5 },
  { objectPosition: "40% 52%", scale: 1.22, blurPx: 6 }
];
const SENSORY_CLUE_POOLS = {
  "kyobate-station": {
    ja: [
      "古い木の柱のぬくもりと、線路沿いを抜ける静かな風の気配。",
      "傾いた陽が木の窓枠に落ちて、ときおり遠くのレールの音が響く場所。",
      "少し背の低い軒下をくぐると、古い町の匂いと穏やかな時間が流れている。"
    ],
    en: [
      "Warm aged timber pillars and a soft breeze drifting beside quiet rails.",
      "Late light resting on wooden window frames, with a distant hum of iron tracks.",
      "Step beneath low wooden eaves where the pace slows to an older town rhythm."
    ],
    zh: [
      "温润的旧木柱气息，与轻拂过安静铁道旁的微风。",
      "斜阳落在木窗格上，偶尔能听见远处铁轨轻响的安静角落。",
      "走进低矮的木檐下，空气里带着老街的木香与慢下来的时间。"
    ]
  },
  "irie-photo-museum": {
    ja: [
      "土塀の小道の先に佇む静かな館。白と黒の陰影が、外の光を際立たせる。",
      "涼やかな石壁の奥で、光と影だけを切り取った静寂に出会える場所。",
      "住宅街の細い道がふっと開け、静かな軒先に季節の空が映り込む。"
    ],
    en: [
      "Beyond earthen-walled lanes, quiet halls hold monochrome light and shadow.",
      "Inside cool stone walls, stillness frames the light waiting just outside.",
      "Where a narrow residential lane opens up and the sky reflects off quiet eaves."
    ],
    zh: [
      "土墙小巷尽头的安静馆舍，黑白光影正让窗外的光显得更鲜明。",
      "清凉石墙之内，只剩光与影交错的片刻静谧。",
      "穿过幽静小巷忽见开阔，屋檐下静静映着当季的天色。"
    ]
  },
  "shiga-naoya-house": {
    ja: [
      "靴を脱いで上がる縁側と、柔らかな光が満ちるガラス張りの部屋。",
      "木の床に落ちる木漏れ日と、庭の緑を静かに眺めていたくなる軒先。",
      "古いガラス戸越しにやわらかな午後の光が差し、言葉が静かに沈む住まい。"
    ],
    en: [
      "A wooden veranda where you slip off your shoes, and a sunlit glass room.",
      "Dappled shade across polished timber floors looking out onto a quiet garden.",
      "Soft afternoon light through old glass panes in a house built for unhurried thought."
    ],
    zh: [
      "脱鞋踏上的木质廊檐，与洒满柔和日光的玻璃阳光房。",
      "树影斑驳地落在木地板上，让人想坐在檐下静静发会儿呆。",
      "穿过旧玻璃窗洒入的午后柔光，整座老宅都安静得像一页书。"
    ]
  },
  futaiji: {
    ja: [
      "季節の花の香りと鳥の声だけが響く、木立の奥の静かな境内。",
      "古い南の門をくぐると、花越しに反りのある瓦屋根が見えてくる。",
      "人の声が遠のき、風で揺れる葉音と土の匂いだけが残る小さな庭。"
    ],
    en: [
      "Seasonal blossoms and birdsong echoing softly across tranquil temple grounds.",
      "Pass through an old wooden gate to glimpse curved tiled eaves framed by flowers.",
      "Footsteps fade away, leaving only rustling leaves, warm earth, and quiet shade."
    ],
    zh: [
      "四季花香与鸟鸣轻回，隐于树影深处的静谧庭院。",
      "穿过古老的木门，透过花枝仰望微微起翘的古朴瓦檐。",
      "游人的喧闹渐远，耳边只剩风吹树叶与湿润泥土的气息。"
    ]
  }
};
const ATMOSPHERE_HINTS = {
  "kyobate-station": {
    ja: "線路沿いの小さな木造の建物。切符がなくても外から静かに眺められます。",
    en: "A small wooden building beside the tracks—easy to pause by without a ticket.",
    zh: "紧邻铁道的小巧木造建筑，不买车票也能在站舍边静静停留。"
  },
  "irie-photo-museum": {
    ja: "静かな住宅街と土塀の小道に囲まれた、落ち着いた佇まいの建物です。",
    en: "Tucked among quiet residential streets and old earthen walls.",
    zh: "隐身在安静住宅区与古朴土墙小巷之间，外观克制而沉静。"
  },
  "shiga-naoya-house": {
    ja: "生け垣と土塀の続く坂道のそば、庭木に包まれた昔ながらの住まいです。",
    en: "Near a sloped lane of hedges and earthen walls, framed by garden trees.",
    zh: "顺着绿篱与土墙交错的坡道前行，被庭院草木环绕的旧日宅邸。"
  },
  futaiji: {
    ja: "大通りから少し北へ入った静かな小道の先、花の咲く木門が目印です。",
    en: "Off a quiet lane a little north of the main road, marked by an old wooden gate.",
    zh: "离开主干道往幽静小巷走入几分钟，古朴的木门与花木便是标志。"
  }
};
const FALLBACK_CLUES = {
  ja: [
    "距離のヒントをたよりに、奈良の静かな一角を探してみてください。",
    "角をひとつ曲がるたびに、町の空気と光の角度が少し変わります。",
    "地図を閉じて歩くと、足音と風の気配がいつもより近く感じられます。"
  ],
  en: [
    "Follow the distance hints and discover a quiet corner of Nara.",
    "Around each turn, the light and texture of the street softly shift.",
    "With the map tucked away, footsteps and breeze become your quiet guide."
  ],
  zh: [
    "循着距离的冷热提示前行，去发现奈良一处静谧的角落。",
    "每拐过一个街角，光线与街巷的气息都会悄然变化。",
    "收起地图漫步时，脚步声与微风会成为最温柔的路标。"
  ]
};
function getSensoryCluePool(spotId, lang) {
  return SENSORY_CLUE_POOLS[spotId]?.[lang] ?? FALLBACK_CLUES[lang];
}
function getSensoryClue(spotId, lang, index = 0) {
  const pool = getSensoryCluePool(spotId, lang);
  const safeIdx = (index % pool.length + pool.length) % pool.length;
  return pool[safeIdx];
}
function splitClueSegments(clue, lang) {
  if (lang === "en") {
    const bound = clue.replace(/\b(with|of|on|in|to|by|for|from|and)\s+(a|an|the)\s+/gi, "$1 $2 ").replace(/\b(a|an|the)\s+([a-z]+)/gi, "$1 $2").replace(/(\S+)\s+(\S+)$/, "$1 $2");
    return bound.split(/(?<=,\s)/).filter(Boolean);
  }
  return clue.split(/(?<=[、，。])/).filter(Boolean);
}
function pickBlindClue(spotId, lang, drawSeq, lastClue) {
  const pool = getSensoryCluePool(spotId, lang);
  let clueIndex = (drawSeq % pool.length + pool.length) % pool.length;
  if (lastClue && pool.length > 1 && pool[clueIndex] === lastClue) {
    clueIndex = (clueIndex + 1) % pool.length;
  }
  const cropIndex = (drawSeq % BLIND_CROP_PRESETS.length + BLIND_CROP_PRESETS.length) % BLIND_CROP_PRESETS.length;
  return {
    clue: pool[clueIndex],
    clueIndex,
    crop: BLIND_CROP_PRESETS[cropIndex],
    cropIndex
  };
}
function getCardinalDirectionHint(origin, target, lang) {
  const dLat = target.lat - origin.lat;
  const dLng = (target.lng - origin.lng) * Math.cos((origin.lat + target.lat) / 2 * (Math.PI / 180));
  const angleDeg = (Math.atan2(dLng, dLat) * 180 / Math.PI + 360) % 360;
  const idx = Math.round(angleDeg / 45) % 8;
  const dirs = {
    ja: ["北", "北東", "東", "南東", "南", "南西", "西", "北西"],
    en: ["north", "northeast", "east", "southeast", "south", "southwest", "west", "northwest"],
    zh: ["北边", "东北方向", "东边", "东南方向", "南边", "西南方向", "西边", "西北方向"]
  };
  const dir = dirs[lang][idx];
  if (lang === "en") return `Roughly ${dir} from where you are now.`;
  if (lang === "zh") return `大致位于你当前位置的${dir}一带。`;
  return `いまの位置から、おおよそ${dir}の方向あたりにあります。`;
}
function getExtraHints(spotId, lang, primaryClueIndex, origin, target) {
  const pool = getSensoryCluePool(spotId, lang);
  const secondClue = pool[(primaryClueIndex + 1) % pool.length];
  const atmosphere = ATMOSPHERE_HINTS[spotId]?.[lang] ?? pool[(primaryClueIndex + 2) % pool.length];
  const thirdHint = origin && target ? getCardinalDirectionHint(origin, target, lang) : pool[(primaryClueIndex + 2) % pool.length];
  return [secondClue, atmosphere, thirdHint].slice(0, BLIND_MAX_EXTRA_HINTS);
}
const MODE_KEY = "surprisecard.drawMode.v1";
function loadDrawMode() {
  try {
    const v = localStorage.getItem(MODE_KEY);
    if (v === "blind" || v === "normal") return v;
  } catch {
  }
  return "normal";
}
function saveDrawMode(mode) {
  try {
    localStorage.setItem(MODE_KEY, mode);
  } catch {
  }
}

const FOG_CLEAR_DISTANCE_M = 80;
const FOG_MID_DISTANCE_M = 240;
const FOG_MAX_DISTANCE_M = 600;
const FOG_MID_LEVEL = 0.45;
const FOG_LPF_ALPHA = 0.45;
function fogLevel(distanceM) {
  if (!Number.isFinite(distanceM)) return 1;
  if (distanceM <= FOG_CLEAR_DISTANCE_M) return 0;
  if (distanceM >= FOG_MAX_DISTANCE_M) return 1;
  if (distanceM <= FOG_MID_DISTANCE_M) {
    return (distanceM - FOG_CLEAR_DISTANCE_M) / (FOG_MID_DISTANCE_M - FOG_CLEAR_DISTANCE_M) * FOG_MID_LEVEL;
  }
  return FOG_MID_LEVEL + (distanceM - FOG_MID_DISTANCE_M) / (FOG_MAX_DISTANCE_M - FOG_MID_DISTANCE_M) * (1 - FOG_MID_LEVEL);
}
function fogVisuals(level) {
  const clamped = Math.max(0, Math.min(1, Number.isFinite(level) ? level : 1));
  return {
    blurPx: Number((clamped * 28).toFixed(2)),
    opacity: Number((clamped * 0.92).toFixed(3))
  };
}
function initialFogTracker(initialDistanceM = null) {
  if (initialDistanceM === null || !Number.isFinite(initialDistanceM)) {
    return {
      blind: initialBlindState(),
      filteredDistanceM: null,
      effectiveDistanceM: null,
      level: 0.78,
      cleared: false,
      frozen: false,
      arrivalHits: 0
    };
  }
  const d = Math.max(0, initialDistanceM);
  const blind = stepBlindDistance(initialBlindState(), d);
  const cleared = d <= FOG_CLEAR_DISTANCE_M;
  return {
    blind,
    filteredDistanceM: d,
    effectiveDistanceM: d,
    level: cleared ? 0 : fogLevel(d),
    cleared,
    frozen: false,
    arrivalHits: cleared ? 2 : 0
  };
}
function stepFogTracker(prev, rawDistanceM) {
  if (prev.cleared) {
    return { ...prev, level: 0, frozen: false };
  }
  if (rawDistanceM === null || !Number.isFinite(rawDistanceM) || rawDistanceM < 0) {
    return { ...prev, frozen: true };
  }
  const filtered = prev.filteredDistanceM === null ? rawDistanceM : prev.filteredDistanceM + FOG_LPF_ALPHA * (rawDistanceM - prev.filteredDistanceM);
  const arrivalHits = rawDistanceM <= FOG_CLEAR_DISTANCE_M ? prev.arrivalHits + 1 : 0;
  const nextBlind = stepBlindDistance(prev.blind, filtered);
  if (filtered <= FOG_CLEAR_DISTANCE_M || nextBlind.status === "nearby" || arrivalHits >= 2) {
    return {
      blind: nextBlind,
      filteredDistanceM: filtered,
      effectiveDistanceM: Math.min(filtered, rawDistanceM),
      level: 0,
      cleared: true,
      frozen: false,
      arrivalHits
    };
  }
  const stableDistance = nextBlind.refDistanceM ?? filtered;
  return {
    blind: nextBlind,
    filteredDistanceM: filtered,
    effectiveDistanceM: stableDistance,
    level: fogLevel(stableDistance),
    cleared: false,
    frozen: false,
    arrivalHits
  };
}

const NARA = DESTINATIONS[0];
const KIND_WEIGHTS = { normal: 72, seal: 16, mist: 12 };
function nearestStation(pos) {
  return DESTINATIONS.filter((d) => /nara|omiya/.test(d.id)).reduce(
    (a, b) => distanceM(pos, a) <= distanceM(pos, b) ? a : b
  );
}
function deriveStepSeed(baseSeed, step) {
  if (step <= 0) return baseSeed >>> 0;
  return (Math.imul(baseSeed + step | 0, 2654435761) ^ step * 2654435769) >>> 0;
}
function createFortuneLocation(onChange, geo) {
  let started = false;
  let disposed = false;
  let finished = false;
  let timer;
  const finish = (origin, status, coords) => {
    if (disposed || finished) return;
    finished = true;
    clearTimeout(timer);
    onChange(origin, status, coords);
  };
  return {
    start() {
      if (started || disposed) return;
      started = true;
      onChange(NARA, "locating");
      if (!geo) return finish(NARA, "fallback");
      timer = setTimeout(() => finish(NARA, "fallback"), 8e3);
      try {
        geo.getCurrentPosition(
          (p) => {
            const { latitude: lat, longitude: lng } = p.coords;
            if (Number.isFinite(lat) && Number.isFinite(lng)) {
              finish(nearestStation({ lat, lng }), "gps", { lat, lng });
            } else {
              finish(NARA, "fallback");
            }
          },
          () => finish(NARA, "fallback"),
          { timeout: 7500, maximumAge: 6e4, enableHighAccuracy: false }
        );
      } catch {
        finish(NARA, "fallback");
      }
    },
    dispose() {
      disposed = true;
      clearTimeout(timer);
    }
  };
}
function pickKind(seed, weights = KIND_WEIGHTS) {
  const entries = Object.entries(weights);
  if (entries.some(([, weight]) => !Number.isFinite(weight) || weight < 0) || !entries.some(([, weight]) => weight > 0)) {
    throw new Error("Invalid card weights");
  }
  let roll = mulberry32(seed ^ 1374496523)() * entries.reduce((sum, [, weight]) => sum + weight, 0);
  for (const [kind, weight] of entries) {
    roll -= weight;
    if (roll < 0) return kind;
  }
  return "normal";
}
function drawFortuneCard(spots, origin, journey, seed, now = /* @__PURE__ */ new Date(), weights = KIND_WEIGHTS, excludeSpotId) {
  const random = mulberry32(seed);
  let deck;
  if (journey.destination || journey.arrival) {
    const minutes = journey.arrival ? (new Date(journey.arrival).getTime() - now.getTime()) / 6e4 : Infinity;
    if (Number.isNaN(minutes) || minutes <= 0) return null;
    deck = buildDeck(spots, origin, journey.destination ?? origin, minutes, { now, rand: random }).deck;
    if (excludeSpotId && deck.length > 1 && deck[0].spot.id === excludeSpotId) {
      deck = [...deck.slice(1), deck[0]];
    }
  } else {
    const pool = [...spots.filter((s) => !s.unlocked), ...spots.filter((s) => s.unlocked)];
    const unvisited = pool.filter((s) => !s.unlocked);
    const base = unvisited.length ? unvisited : pool;
    const filtered = excludeSpotId && base.length > 1 ? base.filter((s) => s.id !== excludeSpotId) : base;
    const candidates = filtered.length ? filtered : base;
    const spot = candidates[Math.floor(random() * candidates.length)];
    if (!spot) return null;
    const toSpotMin = walkMinutes(distanceM(origin, spot));
    deck = [
      {
        spot,
        toSpotMin,
        visitMin: spot.visitMin,
        toDestMin: 0,
        totalMin: toSpotMin + spot.visitMin,
        slackMin: Infinity,
        visited: spot.unlocked
      }
    ];
  }
  if (!deck.length) return null;
  const kind = pickKind(seed, weights);
  const variant = variants({
    seed,
    available: [kind === "mist" ? "mist" : "flip"],
    weights: kind === "seal" ? { common: 0, rare: 85, legendary: 15 } : { common: 1, rare: 0, legendary: 0 }
  });
  return {
    detour: deck[0],
    origin: { ...origin },
    journey: { ...journey },
    kind,
    variant,
    drawnAt: new Date(now),
    seed
  };
}

const ja = {
  settings: "設定",
  close: "閉じる",
  trip: "旅程のしおり",
  destination: "最後に行く場所",
  none: "決めずに歩く",
  arrival: "着きたい時刻",
  optional: "どちらも任意",
  save: "山札に戻す",
  clear: "旅程を消す",
  hold: "押して、離す",
  quick: "霧の向こうから一枚",
  reveal: "カードを引く",
  flip: "タップで裏返す · スワイプで次へ",
  backHint: "傾けて奥行き · タップで表へ",
  go: "ここへ行く",
  goDetails: "地図・チェックインへ",
  spotCards: "旅人のカードを見る",
  walk: "徒歩 約",
  min: "分",
  hours: "公開時間",
  anytime: "終日通行可",
  closed: "到着時は公開時間外",
  checkHours: "出発前に公式情報をご確認ください",
  from: "出発",
  gps: "GPS 測位済み",
  fallback: "JR奈良駅を基準にしています",
  locating: "位置確認中",
  locRetry: "位置を再取得",
  routeNote: "徒歩時間は概算です",
  previous: "前の旅人のひとこと",
  previousEmpty: "まだ言葉は届いていません。到着後に最初の一枚を残せます。",
  empty: "この旅程では寄れる場所がありません。旅程を変えるか消してください。",
  slack: "分余裕",
  onway: "目的地への寄り道",
  returnTo: "出発駅へ戻る旅程",
  illustration: "旅の栞",
  language: "言語",
  tiltLabel: "傾きをオン",
  tiltDesc: "スマホを傾けてカードの奥行きと光を見る",
  tiltActive: "傾きオン（動作中）",
  tiltWaiting: "スマホを少し傾けてみてください",
  tiltDenied: "傾きの許可がオフです（再度オンで許可できます）",
  tiltNoSensor: "傾きセンサーが見つかりません",
  tiltOff: "オフ",
  fogTitle: "霧の向こうの風景",
  fogFrozen: "もう少し歩いてみて",
  fogCleared: "霧が晴れました",
  fogDistance: "目的地まで",
  fogLocOk: "GPS 連動中",
  fogLocInvalid: "位置待機中・もう少し歩いてみて",
  classicMode: "通常モード（条件から選ぶ）",
  blindMode: "盲抽手がかり散歩",
  myRecord: "旅の記録",
  about: "このアプリについて"
};
const en = {
  settings: "Settings",
  close: "Close",
  trip: "Journey bookmark",
  destination: "Final destination",
  none: "Wander freely",
  arrival: "Arrive by",
  optional: "Both are optional",
  save: "Return to deck",
  clear: "Clear journey",
  hold: "Hold, then release",
  quick: "Draw a fortune from the mist",
  reveal: "Draw a card",
  flip: "Tap to flip · Swipe for next",
  backHint: "Tilt for depth · Tap for front",
  go: "Go here",
  goDetails: "Map & check in",
  spotCards: "View traveler cards",
  walk: "About",
  min: "min walk",
  hours: "Opening hours",
  anytime: "Open all day",
  closed: "Closed at estimated arrival",
  checkHours: "Check official hours before you go",
  from: "From",
  gps: "GPS active",
  fallback: "Using JR Nara Station as start",
  locating: "Finding location",
  locRetry: "Retry location",
  routeNote: "Walking times are estimates",
  previous: "From a previous traveler",
  previousEmpty: "No notes here yet. Arrive to leave the first card.",
  empty: "No reachable stop for this journey. Change or clear your plans.",
  slack: "min spare",
  onway: "On the way to your destination",
  returnTo: "Back to departure station",
  illustration: "A keepsake from Nara",
  language: "Language",
  tiltLabel: "Enable tilt",
  tiltDesc: "Tilt your phone for card depth and sheen",
  tiltActive: "Tilt active",
  tiltWaiting: "Gently tilt your phone to test",
  tiltDenied: "Tilt permission denied (tap to retry)",
  tiltNoSensor: "No tilt sensor found",
  tiltOff: "Off",
  fogTitle: "Beyond the mist",
  fogFrozen: "Keep walking a little",
  fogCleared: "The mist has cleared",
  fogDistance: "Distance",
  fogLocOk: "GPS linked",
  fogLocInvalid: "Waiting for GPS · Keep walking a little",
  classicMode: "Classic mode (filters)",
  blindMode: "Blind Clue Walk",
  myRecord: "Travel log",
  about: "About this app"
};
const zh = {
  settings: "设置",
  close: "关闭",
  trip: "行程牌",
  destination: "最后想去哪里",
  none: "随心走走",
  arrival: "几点要到",
  optional: "两项都可不设",
  save: "放回牌堆",
  clear: "清除行程",
  hold: "按住，再松手",
  quick: "从雾中抽出一张风景",
  reveal: "抽一张卡",
  flip: "轻点翻面 · 左右滑动换卡",
  backHint: "倾斜看景深 · 轻点回正面",
  go: "去这里",
  goDetails: "地图与签到",
  spotCards: "查看旅人卡片",
  walk: "步行约",
  min: "分钟",
  hours: "开放时间",
  anytime: "全天可通行",
  closed: "预计到达时未开放",
  checkHours: "出发前请核对官方开放信息",
  from: "出发",
  gps: "GPS 已定位",
  fallback: "暂以 JR 奈良站为出发地",
  locating: "定位中",
  locRetry: "重新定位",
  routeNote: "步行时间为估算",
  previous: "前一位旅人的话",
  previousEmpty: "还没有旅人留言，到达后可以留下第一张卡。",
  empty: "没有符合行程的可达地点，请修改或清除行程。",
  slack: "分钟余裕",
  onway: "顺路前往目的地",
  returnTo: "回到出发车站的行程",
  illustration: "奈良风物志",
  language: "语言",
  tiltLabel: "开启倾斜",
  tiltDesc: "晃动手机感受卡片景深与光泽",
  tiltActive: "倾斜已开启",
  tiltWaiting: "轻轻晃动手机试试看",
  tiltDenied: "倾斜权限被拒绝（可再次开启重试）",
  tiltNoSensor: "未检测到倾斜传感器",
  tiltOff: "已关闭",
  fogTitle: "雾中的风景",
  fogFrozen: "再走走",
  fogCleared: "雾散了",
  fogDistance: "距此约",
  fogLocOk: "GPS 联动中",
  fogLocInvalid: "等待定位 · 再走走",
  classicMode: "通常模式（按条件筛选）",
  blindMode: "盲抽线索散步",
  myRecord: "我的足迹",
  about: "关于应用"
};
const fortuneCopy = (lang) => ({ ja, en, zh })[lang];

const DevFogSlider = null;
function MistFortune() {
  const { spots } = useData();
  const liveLoc = useLocation();
  const { lang, setLang } = useI18n();
  const reduced = usePrefersReducedMotion();
  const c = fortuneCopy(lang);
  const [origin, setOrigin] = reactExports.useState(NARA);
  const [locStatus, setLocStatus] = reactExports.useState("idle");
  const [journey, setJourney] = reactExports.useState({});
  const [card, setCard] = reactExports.useState(null);
  const [serial, setSerial] = reactExports.useState(0);
  const [back, setBack] = reactExports.useState(false);
  const [panel, setPanel] = reactExports.useState(null);
  const [empty, setEmpty] = reactExports.useState(false);
  const [ready, setReady] = reactExports.useState(false);
  const [holding, setHolding] = reactExports.useState(false);
  const [exitDir, setExitDir] = reactExports.useState("left");
  const [dealOrigin, setDealOrigin] = reactExports.useState("hold");
  const [devDistanceOverride, setDevDistanceOverride] = reactExports.useState(void 0);
  const [userTiltDisabled, setUserTiltDisabled] = reactExports.useState(false);
  const [gyroEnabled, setGyroEnabled] = reactExports.useState(() => {
    if (!canOrient()) return false;
    if (!needsOrientationPermission()) return true;
    return orientationChoice() === "granted";
  });
  const [gyroVerified, setGyroVerified] = reactExports.useState(false);
  const [gyroStatus, setGyroStatus] = reactExports.useState(() => {
    if (!canOrient()) return "no-sensor";
    if (!needsOrientationPermission()) return "waiting";
    return orientationChoice() === "granted" ? "waiting" : "off";
  });
  const [fogTracker, setFogTracker] = reactExports.useState(() => initialFogTracker(null));
  const [fogJustCleared, setFogJustCleared] = reactExports.useState(false);
  const screenRef = reactExports.useRef(null);
  const locationSvc = reactExports.useRef(null);
  const pointerRef = reactExports.useRef(null);
  const holdRafRef = reactExports.useRef(0);
  const gestureConsumedRef = reactExports.useRef(false);
  const switchingRef = reactExports.useRef(false);
  const sensorCheckTimerRef = reactExports.useRef(null);
  const stepIndexRef = reactExports.useRef(0);
  const pinnedSeedRef = reactExports.useRef(readUrlSeed());
  const bookmarkY = reactExports.useRef(null);
  const dragX = useMotionValue(0);
  const peekScale = useTransform(dragX, [-180, 0, 180], [1, 0.95, 1]);
  const peekY = useTransform(dragX, [-180, 0, 180], [0, 28, 0]);
  const peekRotate = useTransform(dragX, [-180, 0, 180], [0, 1.3, 0]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const syncSeed = () => {
      const next = readUrlSeed();
      if (next !== pinnedSeedRef.current) {
        pinnedSeedRef.current = next;
        stepIndexRef.current = 0;
      }
    };
    window.addEventListener("hashchange", syncSeed);
    window.addEventListener("popstate", syncSeed);
    return () => {
      window.removeEventListener("hashchange", syncSeed);
      window.removeEventListener("popstate", syncSeed);
    };
  }, []);
  reactExports.useEffect(() => {
    const service = createFortuneLocation((next, status) => {
      setOrigin(next);
      setLocStatus(status);
    }, navigator.geolocation);
    locationSvc.current = service;
    return () => {
      service.dispose();
      locationSvc.current = null;
      if (sensorCheckTimerRef.current) clearTimeout(sensorCheckTimerRef.current);
      cancelAnimationFrame(holdRafRef.current);
    };
  }, []);
  reactExports.useEffect(() => {
    if (userTiltDisabled || gyroVerified) return;
    const onFirstOrient = (ev) => {
      if (ev.beta != null && ev.gamma != null && Number.isFinite(ev.beta) && Number.isFinite(ev.gamma)) {
        setGyroEnabled(true);
        setGyroVerified(true);
        setGyroStatus("active");
      }
    };
    window.addEventListener("deviceorientation", onFirstOrient);
    return () => window.removeEventListener("deviceorientation", onFirstOrient);
  }, [userTiltDisabled, gyroVerified]);
  const currentSpot = card?.detour.spot ?? null;
  const liveDistanceM = reactExports.useMemo(() => {
    if (!currentSpot) return null;
    if (liveLoc.pos) return distanceM(liveLoc.pos, currentSpot);
    return null;
  }, [currentSpot, devDistanceOverride, liveLoc.pos]);
  reactExports.useEffect(() => {
    if (!card || card.kind !== "mist") return;
    setFogTracker((prev) => {
      const next = stepFogTracker(prev, liveDistanceM);
      if (!prev.cleared && next.cleared) {
        setFogJustCleared(true);
        triggerHaptic([14, 40, 18]);
      }
      return next;
    });
  }, [card, liveDistanceM]);
  const requestOrientationInGesture = reactExports.useCallback((forceRetry = false) => {
    const pending = requestOrientationDetailed({ forceRetry });
    void pending.then((res) => {
      if (res === "granted") {
        setGyroEnabled(true);
        setGyroStatus((prev) => prev === "active" ? "active" : "waiting");
        if (forceRetry) {
          if (sensorCheckTimerRef.current) clearTimeout(sensorCheckTimerRef.current);
          sensorCheckTimerRef.current = setTimeout(() => {
            setGyroStatus((prev) => prev === "active" ? "active" : "no-sensor");
          }, 1400);
        }
      } else if (res === "denied") {
        setGyroEnabled(false);
        setGyroStatus("denied");
      } else {
        setGyroEnabled(false);
        setGyroStatus("no-sensor");
      }
    });
  }, []);
  const resetHoldVisuals = reactExports.useCallback(() => {
    cancelAnimationFrame(holdRafRef.current);
    setHolding(false);
    if (screenRef.current) {
      screenRef.current.style.setProperty("--hold", "0");
      screenRef.current.style.setProperty("--tremor-x", "0px");
      screenRef.current.style.setProperty("--tremor-y", "0px");
    }
  }, []);
  const drawCard = reactExports.useCallback(
    (source, dir = "left") => {
      if (switchingRef.current) return;
      switchingRef.current = true;
      setTimeout(() => {
        switchingRef.current = false;
      }, 360);
      const departure = origin;
      locationSvc.current?.start();
      if (liveLoc.status === "idle") liveLoc.request();
      const baseSeed = pinnedSeedRef.current;
      const nextSeed = baseSeed !== null ? deriveStepSeed(baseSeed, stepIndexRef.current) : newSeed();
      stepIndexRef.current += 1;
      const excludeSpotId = source === "swipe" ? card?.detour.spot.id : void 0;
      const result = drawFortuneCard(spots, departure, journey, nextSeed, /* @__PURE__ */ new Date(), void 0, excludeSpotId);
      setExitDir(dir);
      setDealOrigin(source);
      setEmpty(!result);
      setCard(result);
      setSerial((s) => s + 1);
      setBack(false);
      setReady(false);
      setFogJustCleared(false);
      setDevDistanceOverride(void 0);
      if (reduced) dragX.set(0);
      else void animate(dragX, 0, { type: "spring", stiffness: 110, damping: 18 });
      if (result?.kind === "mist") {
        const initDist = liveLoc.pos ? distanceM(liveLoc.pos, result.detour.spot) : null;
        setFogTracker(initialFogTracker(initDist));
      }
      if (!result) switchingRef.current = false;
    },
    [card, dragX, journey, liveLoc, origin, reduced, spots]
  );
  const startHold = (event) => {
    if (card || panel || !event.isPrimary) return;
    const target = event.target;
    if (target?.closest("button,a,input,select")) return;
    gestureConsumedRef.current = false;
    pointerRef.current = { x: event.clientX, y: event.clientY, id: event.pointerId, downAt: performance.now() };
    event.currentTarget.setPointerCapture?.(event.pointerId);
    setHolding(true);
    if (!reduced && typeof navigator !== "undefined" && "vibrate" in navigator) {
      triggerHaptic(18);
    }
    const startTime = performance.now();
    cancelAnimationFrame(holdRafRef.current);
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / 820);
      if (screenRef.current) {
        screenRef.current.style.setProperty("--hold", progress.toFixed(3));
        if (!reduced && progress > 0.25) {
          const amp = (progress - 0.25) * 3.4;
          const tx = Math.sin(elapsed * 0.055) * amp;
          const ty = Math.cos(elapsed * 0.071) * amp * 0.7;
          screenRef.current.style.setProperty("--tremor-x", `${tx.toFixed(2)}px`);
          screenRef.current.style.setProperty("--tremor-y", `${ty.toFixed(2)}px`);
        }
      }
      holdRafRef.current = requestAnimationFrame(tick);
    };
    holdRafRef.current = requestAnimationFrame(tick);
  };
  const endHold = (event) => {
    const start = pointerRef.current;
    pointerRef.current = null;
    resetHoldVisuals();
    if (!start || start.id !== event.pointerId || card || gestureConsumedRef.current) return;
    const moved = Math.hypot(event.clientX - start.x, event.clientY - start.y);
    if (moved > 36) return;
    gestureConsumedRef.current = true;
    requestOrientationInGesture(false);
    drawCard("hold");
  };
  const handleTouchEnd = () => {
    if (!card && pointerRef.current && !gestureConsumedRef.current) {
      requestOrientationInGesture(false);
    }
  };
  const handleCancelHold = () => {
    pointerRef.current = null;
    gestureConsumedRef.current = true;
    resetHoldVisuals();
  };
  const toggleTiltFromSettings = () => {
    if (gyroEnabled) {
      usePointer();
      setUserTiltDisabled(true);
      setGyroEnabled(false);
      setGyroVerified(false);
      setGyroStatus("off");
      return;
    }
    setUserTiltDisabled(false);
    requestOrientationInGesture(true);
  };
  const activeJourney = !!(journey.destination || journey.arrival);
  const spot = card?.detour.spot;
  const text = spot ? getSpotText(spot, lang) : null;
  const isMistCard = card?.kind === "mist";
  const isFogVeiled = isMistCard && !fogTracker.cleared;
  const fogVis = fogVisuals(fogTracker.level);
  const sensoryClue = spot ? getSensoryClue(spot.id, lang, serial) : "";
  const tiltStatusMessage = gyroStatus === "active" ? c.tiltActive : gyroStatus === "denied" ? c.tiltDenied : gyroStatus === "no-sensor" ? c.tiltNoSensor : gyroStatus === "waiting" ? c.tiltWaiting : c.tiltOff;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "main",
    {
      ref: screenRef,
      className: `fortune-screen ${holding ? "fortune-holding" : ""}`,
      "data-testid": "fortune-screen",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-corner-tools", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: `fortune-trip-mark ${activeJourney ? "fortune-bookmark" : ""}`,
              "data-testid": "trip-toggle",
              onClick: () => setPanel("trip"),
              "aria-label": c.trip,
              onPointerDown: (event) => {
                bookmarkY.current = event.clientY;
                event.currentTarget.setPointerCapture?.(event.pointerId);
              },
              onPointerUp: (event) => {
                if (activeJourney && bookmarkY.current !== null && Math.abs(event.clientY - bookmarkY.current) > 16) {
                  setPanel("trip");
                }
                bookmarkY.current = null;
              },
              onPointerCancel: () => {
                bookmarkY.current = null;
              },
              children: activeJourney ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: journey.arrival ? new Date(journey.arrival).toLocaleTimeString(lang, { hour: "2-digit", minute: "2-digit" }) : "◇" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.25", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "8" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 7v5l3 2" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "fortune-language",
              "data-testid": "fortune-lang",
              onClick: () => setLang(lang === "ja" ? "en" : lang === "en" ? "zh" : "ja"),
              "aria-label": c.language,
              children: "文/A"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "fortune-settings-btn",
              "data-testid": "settings-toggle",
              "data-role": "settings-toggle",
              onClick: () => setPanel((p) => p === "settings" ? null : "settings"),
              "aria-label": c.settings,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.25", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "3.6" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2.5v2.6m0 13.8v2.6M2.5 12h2.6m13.8 0h2.6M5.2 5.2l1.9 1.9m9.8 9.8 1.9 1.9M5.2 18.8l1.9-1.9m9.8-9.8 1.9-1.9" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-table", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "fortune-deck",
              "data-testid": "deck",
              "data-role": "deck",
              onPointerDownCapture: startHold,
              onPointerUpCapture: endHold,
              onTouchEndCapture: handleTouchEnd,
              onPointerCancel: handleCancelHold,
              children: [
                (!card || !back && (card.kind !== "seal" || ready)) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `fortune-under-wrap ${!card && !holding && !reduced ? "fortune-idle-alive" : ""}`, "aria-hidden": true, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fortune-under-card fortune-under-two", "aria-hidden": true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      className: "fortune-under-card",
                      "data-testid": "deck-under-card",
                      "aria-hidden": true,
                      style: reduced ? { zIndex: -1, transform: "translateY(28px) scale(0.95)" } : { zIndex: -1, scale: peekScale, y: peekY, rotate: peekRotate }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-top-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", initial: false, children: !card ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      "data-testid": "card-top",
                      "data-role": "top-card",
                      className: "fortune-cover-hit",
                      role: "button",
                      tabIndex: 0,
                      "aria-label": c.reveal,
                      initial: reduced ? { opacity: 0 } : { scale: 0.96, opacity: 0 },
                      animate: reduced ? { opacity: 1 } : { scale: 1, opacity: 1 },
                      exit: reduced ? { opacity: 0 } : { scale: 1.04, opacity: 0, transition: { duration: 0.2 } },
                      onKeyDown: (event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          requestOrientationInGesture(false);
                          drawCard("hold");
                        }
                      },
                      onClick: () => {
                        if (gestureConsumedRef.current) {
                          gestureConsumedRef.current = false;
                          return;
                        }
                        requestOrientationInGesture(false);
                        drawCard("hold");
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `fortune-cover-breathe ${!holding && !reduced ? "fortune-idle-alive" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-cover", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fortune-cover-glow", "aria-hidden": true }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fortune-cover-border", "aria-hidden": true }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fortune-card-imprint", children: "NARA · SURPRISE CARD" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-cover-art", "aria-hidden": true, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fortune-orbit" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fortune-orbit fortune-orbit-inner" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fortune-cover-kanji", children: "霧" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fortune-gold-line" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-cover-bottom", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fortune-eyebrow", children: "A MOMENT OF WONDER" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: c.hold }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: c.quick })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-waiting-fog", "aria-hidden": true, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("i", {}),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("i", {}),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("i", {})
                        ] })
                      ] }) })
                    },
                    "cover"
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      className: "h-full w-full",
                      initial: reduced ? { opacity: 0 } : dealOrigin === "swipe" ? { scale: 0.95, y: 14, opacity: 0.72 } : { scale: 0.94, y: 18, opacity: 0.25 },
                      animate: reduced ? { opacity: 1 } : { scale: 1, y: 0, opacity: 1 },
                      exit: reduced ? { opacity: 0, transition: { duration: 0.14 } } : {
                        x: exitDir === "left" ? -440 : 440,
                        rotate: exitDir === "left" ? -15 : 15,
                        opacity: 0,
                        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
                      },
                      transition: reduced ? { duration: 0.18 } : { type: "spring", stiffness: 110, damping: 18, mass: 1 },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        NormalCardStage,
                        {
                          swipeTestId: "card-top",
                          dataRole: "top-card",
                          detour: card.detour,
                          destLabel: "",
                          variant: card.variant,
                          sealed: card.kind === "seal",
                          flipped: back,
                          onFlippedChange: setBack,
                          onGo: () => navigate(`/go/${spot.id}`),
                          onSwipe: (dir) => drawCard("swipe", dir),
                          canSwipeOut: spots.length > 1,
                          bounceTrigger: 0,
                          dragX,
                          gyro: gyroEnabled || !userTiltDisabled,
                          onGyroActive: () => {
                            setGyroEnabled(true);
                            setGyroVerified(true);
                            setGyroStatus("active");
                          },
                          fogOverride: isMistCard ? {
                            active: isFogVeiled,
                            blurPx: fogVis.blurPx,
                            opacity: fogVis.opacity
                          } : void 0,
                          embedded: true,
                          onRevealed: () => setReady(true),
                          frontSlot: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-result-front", "data-card-kind": card.kind, children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-photo-frame", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-front-photo-parallax", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                PlacePhoto,
                                {
                                  placeId: spot.id,
                                  alt: isFogVeiled ? c.fogTitle : text.name,
                                  priority: true,
                                  className: "fortune-result-photo"
                                }
                              ) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fortune-photo-imprint card-front-imprint-parallax", children: [
                                "NARA · ",
                                card.kind === "seal" ? "朱印" : isMistCard ? "MIST" : "POSTCARD"
                              ] }),
                              isFogVeiled && fogTracker.frozen && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "fog-frozen-hint", className: "fortune-fog-pill", role: "status", children: c.fogFrozen })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-result-caption card-front-caption-parallax", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fortune-eyebrow", children: isFogVeiled ? "MIST · WALK CLOSER" : `${text.area} · ${card.kind === "seal" ? "朱印" : isMistCard ? c.fogCleared : "SURPRISE CARD"}` }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { "data-testid": "fortune-card-title", children: isFogVeiled ? c.fogTitle : text.name }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: isFogVeiled ? sensoryClue : text.teaser }),
                              activeJourney && /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: Number.isFinite(card.detour.slackMin) ? `${Math.floor(card.detour.slackMin)} ${c.slack}` : c.onway })
                            ] })
                          ] }),
                          backSlot: (art) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-result-back", "data-testid": "fortune-card-back", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fortune-collection-art", children: art }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-back-pocket", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fortune-eyebrow", children: c.illustration }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-back-route", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(RouteSummary, { card }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-fog-status", "data-testid": "fog-back-status", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                                    c.fogDistance,
                                    ":",
                                    " ",
                                    isMistCard && fogTracker.effectiveDistanceM != null ? formatDistance(fogTracker.effectiveDistanceM) : liveDistanceM != null ? formatDistance(liveDistanceM) : formatDistance(distanceM(card.origin, spot))
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: isMistCard ? fogTracker.cleared ? c.fogCleared : fogTracker.frozen || liveDistanceM === null ? c.fogLocInvalid : c.fogLocOk : locStatus === "gps" || liveDistanceM !== null ? c.fogLocOk : locStatus === "locating" ? c.locating : c.fallback })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-back-actions", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "a",
                                    {
                                      "data-testid": "back-route-link",
                                      className: "fortune-back-cta",
                                      target: "_blank",
                                      rel: "noreferrer",
                                      href: googleWalkingUrl(
                                        card.journey.destination ?? spot,
                                        card.origin,
                                        card.journey.destination ? spot : void 0
                                      ),
                                      children: c.go
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      "data-testid": "back-detail-btn",
                                      className: "fortune-back-secondary",
                                      onClick: () => navigate(spot.unlocked ? `/spot/${spot.id}` : `/go/${spot.id}`),
                                      children: spot.unlocked ? c.spotCards : c.goDetails
                                    }
                                  )
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "fortune-traveler", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: c.previous }),
                                spot.snippets.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { children: [
                                  "「",
                                  spot.snippets[0].snippet,
                                  "」"
                                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: c.previousEmpty })
                              ] })
                            ] })
                          ] })
                        }
                      )
                    },
                    `card-${serial}`
                  ) }),
                  card && dealOrigin === "hold" && card.kind !== "seal" && /* @__PURE__ */ jsxRuntimeExports.jsx(MistBurstCurtain, { seed: card.variant.seed, durationMs: 1450 }, `burst-${serial}`),
                  card && isMistCard && fogJustCleared && /* @__PURE__ */ jsxRuntimeExports.jsx(MistBurstCurtain, { seed: card.variant.seed + 7, durationMs: 1350 }, `clear-${serial}`)
                ] })
              ]
            }
          ),
          empty && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-empty", role: "status", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: c.empty }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setPanel("trip"), children: c.trip }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setJourney({});
                  setEmpty(false);
                },
                children: c.clear
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "fortune-bottom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "fortune-edition", children: [
          "SURPRISE CARD ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "奈良 / NARA" })
        ] }) }),
        panel === "trip" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          TripPanel,
          {
            journey,
            onSave: (value) => {
              setJourney(value);
              setPanel(null);
              setEmpty(false);
            },
            onClose: () => setPanel(null)
          }
        ),
        panel === "settings" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-scrim", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "fortune-scrim-backdrop",
              "data-role": "settings-backdrop",
              onClick: () => setPanel(null),
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "section",
            {
              className: "fortune-sheet",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": c.settings,
              "data-testid": "settings-sheet",
              "data-role": "settings-drawer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fortune-sheet-handle", "aria-hidden": true }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "fortune-sheet-close",
                    onClick: () => setPanel(null),
                    "aria-label": c.close,
                    children: "×"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fortune-eyebrow", children: "NARA · SURPRISE CARD" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: c.settings }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-toggle-row", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-medium text-sumi whitespace-nowrap", children: c.tiltLabel }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-sumi/65", children: c.tiltDesc }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11.5px] text-[#7a6434]", "data-testid": "tilt-status", role: "status", children: tiltStatusMessage })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      role: "switch",
                      "aria-checked": gyroEnabled,
                      "aria-label": c.tiltLabel,
                      "data-testid": "tilt-toggle",
                      className: "fortune-switch",
                      onClick: toggleTiltFromSettings,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 text-[12.5px] text-sumi/75", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: locStatus === "gps" ? `${c.gps} · ${getDestLabel(origin, lang)}` : locStatus === "locating" ? c.locating : c.fallback }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "shrink-0 text-[12px] text-[#7a6434] underline underline-offset-4",
                      onClick: () => {
                        liveLoc.request();
                        locationSvc.current?.start();
                      },
                      children: c.locRetry
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "fortune-sheet-links", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#/classic", onClick: () => setPanel(null), children: c.classicMode }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#/?mode=blind", onClick: () => setPanel(null), children: c.blindMode }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#/me", onClick: () => setPanel(null), children: c.myRecord }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#/about", onClick: () => setPanel(null), children: c.about })
                ] })
              ]
            }
          )
        ] }),
        DevFogSlider
      ]
    }
  );
}
function RouteSummary({ card }) {
  const { lang } = useI18n();
  const c = fortuneCopy(lang);
  const { detour: d } = card;
  const state = openState(d.spot.hours, card.drawnAt, d.toSpotMin);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fortune-route-summary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      c.from,
      " ",
      getDestLabel(card.origin, lang),
      " · ",
      formatDistance(distanceM(card.origin, d.spot)),
      " · ",
      c.walk,
      " ",
      d.toSpotMin,
      " ",
      c.min
    ] }),
    card.journey.destination && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      c.onway,
      " · ",
      getDestLabel(card.journey.destination, lang),
      " · ",
      d.toDestMin,
      " ",
      c.min
    ] }),
    card.journey.arrival && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      card.journey.destination ? "" : c.returnTo,
      " ·",
      " ",
      new Date(card.journey.arrival).toLocaleTimeString(lang, { hour: "2-digit", minute: "2-digit" }),
      " ·",
      " ",
      Math.floor(d.slackMin),
      " ",
      c.slack
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: state.open ? "" : "fortune-closed", children: [
      c.hours,
      " · ",
      d.spot.hours.open ? `${d.spot.hours.open}–${d.spot.hours.close}` : c.anytime,
      " ·",
      " ",
      formatOpenState(state, lang)
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { children: [
      c.routeNote,
      " · ",
      c.checkHours
    ] })
  ] });
}
function TripPanel({
  journey,
  onSave,
  onClose
}) {
  const { lang } = useI18n();
  const c = fortuneCopy(lang);
  const [destId, setDestId] = reactExports.useState(journey.destination?.id ?? "");
  const [time, setTime] = reactExports.useState(
    journey.arrival ? new Date(journey.arrival).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) : ""
  );
  const dialog = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const old = document.activeElement;
    dialog.current?.querySelector("button")?.focus();
    return () => old?.focus();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fortune-scrim", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref: dialog,
      className: "fortune-sheet fortune-trip-sheet",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": c.trip,
      onClick: (event) => event.stopPropagation(),
      onKeyDown: (event) => {
        if (event.key === "Escape") onClose();
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "fortune-sheet-close", onClick: onClose, "aria-label": c.close, children: "×" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fortune-eyebrow", children: "NARA · JOURNEY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: c.trip }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12.5px] text-sumi/65", children: c.optional }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
          c.destination,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: destId, onChange: (event) => setDestId(event.target.value), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: c.none }),
            DESTINATIONS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: d.id, children: getDestLabel(d, lang) }, d.id))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
          c.arrival,
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "time", value: time, onChange: (event) => setTime(event.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "fortune-primary",
            onClick: () => {
              let arrival;
              if (time) {
                const date = /* @__PURE__ */ new Date();
                const [h, m] = time.split(":").map(Number);
                date.setHours(h, m, 0, 0);
                arrival = date.toISOString();
              }
              onSave({ destination: DESTINATIONS.find((d) => d.id === destId), arrival });
            },
            children: c.save
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "fortune-clear", onClick: () => onSave({}), children: c.clear })
      ]
    }
  ) });
}

const KEY = "surprisecard.trip.v1";
function loadTrip() {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "null");
  } catch {
    return null;
  }
}
function saveTrip(t) {
  if (t) localStorage.setItem(KEY, JSON.stringify(t));
  else localStorage.removeItem(KEY);
}

function BlindCommitBar({ destLabel, window: baseWindow, tone = "dark", className = "" }) {
  const { t } = useI18n();
  const [now, setNow] = reactExports.useState(() => /* @__PURE__ */ new Date());
  reactExports.useEffect(() => {
    const id = window.setInterval(() => setNow(/* @__PURE__ */ new Date()), 15e3);
    return () => window.clearInterval(id);
  }, []);
  const live = computeLiveLeaveWindow(baseWindow, now);
  const toneClasses = tone === "dark" ? live.urgency === "tight" ? "border-shu/40 bg-shu/20 text-[#ffd8ce]" : live.urgency === "soon" ? "border-kin/45 bg-kin/20 text-[#f7e1a8]" : "border-kin/25 bg-kin/15 text-kin" : live.urgency === "tight" ? "border-shu/30 bg-shu/10 text-[#8c3220]" : live.urgency === "soon" ? "border-kin/45 bg-kin/20 text-[#6d4f0f]" : "border-kin/30 bg-[#f8f1e0] text-[#5e4510]";
  const urgencyNote = live.urgency === "tight" ? t("blindCommitTight") : live.urgency === "soon" ? t("blindCommitSoon") : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-testid": "blind-commit-bar",
      "data-urgency": live.urgency,
      className: `border-y px-4 py-2.5 transition-colors duration-300 ${toneClasses} ${className}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "clock", className: "mt-0.5 h-3.5 w-3.5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              "data-testid": "blind-commit-line1",
              className: "text-[12px] font-medium leading-snug tabular-nums [line-break:strict]",
              children: t("blindCommitLine1", {
                time: live.latestLeaveLabel,
                dest: destLabel
              })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] leading-snug", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                "data-testid": "blind-commit-line2",
                className: `whitespace-nowrap font-semibold tabular-nums ${tone === "dark" ? "text-washi/90" : "text-sumi/80"}`,
                children: t("blindCommitLine2", { slack: live.slackMin })
              }
            ),
            urgencyNote && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: tone === "dark" ? "text-washi/75" : "text-sumi/65", children: [
              "· ",
              urgencyNote
            ] })
          ] })
        ] })
      ] })
    }
  );
}

function BlindCard({ d, destLabel, picked, drawnAtIso }) {
  const { lang, t } = useI18n();
  const leave = reactExports.useMemo(() => computeLeaveWindow(d, new Date(drawnAtIso)), [d, drawnAtIso]);
  const clueSegments = reactExports.useMemo(() => splitClueSegments(picked.clue, lang), [picked.clue, lang]);
  const clueStyle = { wordBreak: "auto-phrase", textWrap: "pretty" };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      "data-testid": "blind-card",
      "aria-label": t("blindHiddenTitle"),
      className: "flex h-full w-full flex-col overflow-hidden rounded-[28px] bg-sumi text-washi shadow-[0_24px_60px_-20px_rgba(31,42,36,.48)] ring-1 ring-kin/30",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[53%] shrink-0 overflow-hidden bg-[#26352d]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PlacePhoto,
            {
              placeId: d.spot.id,
              alt: t("blindHiddenTitle"),
              priority: true,
              className: "h-full w-full",
              imgStyle: {
                objectPosition: picked.crop.objectPosition,
                transform: `scale(${picked.crop.scale})`,
                filter: `blur(${picked.crop.blurPx}px) saturate(1.08) contrast(1.04) brightness(0.96)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "pointer-events-none absolute inset-0",
              style: {
                background: "radial-gradient(ellipse at 50% 34%, rgba(246,241,231,0.22) 0%, rgba(246,241,231,0.08) 42%, rgba(31,42,36,0.42) 76%, rgba(31,42,36,0.88) 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "pointer-events-none absolute inset-x-0 bottom-0 h-28",
              style: {
                background: "linear-gradient(to top, rgba(31,42,36,0.96) 0%, rgba(31,42,36,0.55) 58%, rgba(31,42,36,0) 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-3 rounded-[20px] border border-kin/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-5 top-5 rounded-full bg-sumi/70 px-3 py-1 text-[10px] font-medium tracking-[0.14em] text-kin ring-1 ring-kin/40 backdrop-blur-sm", children: t("blindBadge") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-5 bottom-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-[0.22em] text-kin/90", children: t("blindSensoryLabel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-1 font-serif text-[21px] leading-snug text-washi [text-wrap:balance] [line-break:strict]", children: t("blindHiddenTitle") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BlindCommitBar,
          {
            destLabel,
            tone: "dark",
            window: {
              latestLeaveAt: leave.latestLeaveTime.toISOString(),
              latestLeaveLabel: leave.latestLeaveLabel,
              slackMin: leave.slackMin,
              startedAt: drawnAtIso,
              totalMin: leave.totalMin
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col justify-between px-5 pb-4 pt-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              "data-testid": "blind-clue-text",
              "data-clue-wrap": "phrase",
              style: clueStyle,
              className: "font-serif text-[16px] leading-[1.7] text-washi/95 [line-break:strict]",
              children: lang === "en" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                "“",
                clueSegments.map((seg, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
                  i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("wbr", {}),
                  seg
                ] }, i)),
                "”"
              ] }) : clueSegments.map((seg, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
                i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("wbr", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-block max-w-full", children: [
                  i === 0 ? "「" : "",
                  seg,
                  i === clueSegments.length - 1 ? "」" : ""
                ] })
              ] }, i))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-washi/15 pt-2.5 text-[11px] leading-snug text-washi/65", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block [line-break:strict]", children: t("blindDistHint") }) })
        ] })
      ]
    }
  );
}

const STACK_LAYERS = [
  { x: -6, y: 7, rotate: -3.2, scale: 0.985 },
  { x: 6, y: 13, rotate: 2.5, scale: 0.965 },
  { x: -3, y: 18, rotate: -1.4, scale: 0.945 }
];
const drawCardVariants = {
  enter: ({ mode }) => mode === "deal" ? { y: 200, x: -36, scale: 0.74, rotate: -12, opacity: 0 } : { y: 36, x: 0, scale: 0.92, rotate: -2, opacity: 0.8 },
  center: { y: 0, x: 0, scale: 1, rotate: 0, opacity: 1 },
  exit: ({ dir }) => ({
    x: dir === "left" ? -440 : 440,
    y: 28,
    rotate: dir === "left" ? -22 : 22,
    opacity: 0,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
  })
};
const reducedCardVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.16 } },
  exit: { opacity: 0, transition: { duration: 0.12 } }
};
function Draw({ auto, initialBlind = false }) {
  const { spots } = useData();
  const loc = useLocation();
  const { lang, t } = useI18n();
  const prefersReduced = usePrefersReducedMotion();
  const [prefs, setPrefsState] = reactExports.useState(loadPrefs);
  const [mode, setModeState] = reactExports.useState(() => initialBlind ? "blind" : loadDrawMode());
  const [deck, setDeck] = reactExports.useState(null);
  const [flipped, setFlipped] = reactExports.useState(false);
  const [dealKey, setDealKey] = reactExports.useState(0);
  const [dealMode, setDealMode] = reactExports.useState("deal");
  const [exitDir, setExitDir] = reactExports.useState("left");
  const [onlyOneHint, setOnlyOneHint] = reactExports.useState(false);
  const [bounceTrigger, setBounceTrigger] = reactExports.useState(0);
  const [blindSeq, setBlindSeq] = reactExports.useState(0);
  const [drawnAtIso, setDrawnAtIso] = reactExports.useState(() => (/* @__PURE__ */ new Date()).toISOString());
  const lastBlindClueRef = reactExports.useRef(null);
  const recentVariationsRef = reactExports.useRef([]);
  const [cardVariant, setCardVariant] = reactExports.useState(() => variants({ seed: newSeed(), available: ["flip"] }));
  const [tiltChoice, setTiltChoice] = reactExports.useState(
    () => orientationChoice() ?? (canOrient() ? null : usePointer())
  );
  const mc = motionCopy(lang);
  const rollNormalVariant = reactExports.useCallback(() => {
    const prev = recentVariationsRef.current[recentVariationsRef.current.length - 1];
    const nextVar = variants({
      seed: newSeed(),
      available: ["flip"],
      previousVariation: prev,
      recentVariations: recentVariationsRef.current
    });
    recentVariationsRef.current = [...recentVariationsRef.current.slice(-2), nextVar.variation];
    setCardVariant(nextVar);
  }, []);
  const dragX = useMotionValue(0);
  const peekY = useTransform(dragX, [-160, 0, 160], [0, 8, 0]);
  const peekScale = useTransform(dragX, [-160, 0, 160], [1, 0.97, 1]);
  const peekRotate = useTransform(dragX, [-160, 0, 160], [0, -2.5, 0]);
  const trip = loadTrip();
  const tripSpot = trip ? spots.find((s) => s.id === trip.spotId) : void 0;
  reactExports.useEffect(() => {
    if (loc.status === "idle") loc.request();
  }, [loc]);
  reactExports.useEffect(() => {
    if (!onlyOneHint) return;
    const timer = setTimeout(() => setOnlyOneHint(false), 3200);
    return () => clearTimeout(timer);
  }, [onlyOneHint]);
  const dest = destById(prefs.destId);
  const destLabel = getDestLabel(dest, lang);
  const origin = loc.pos ?? KINTETSU_NARA;
  const setPrefs = (p) => {
    setPrefsState(p);
    savePrefs(p);
    setDeck(null);
    setFlipped(false);
    setOnlyOneHint(false);
    dragX.set(0);
  };
  const drawWithMinutes = reactExports.useCallback(
    (minutes) => {
      dragX.set(0);
      setOnlyOneHint(false);
      setDealMode("deal");
      setDeck({ result: buildDeck(spots, origin, dest, minutes), index: 0 });
      setFlipped(false);
      setDrawnAtIso((/* @__PURE__ */ new Date()).toISOString());
      setBlindSeq((s) => s + 1);
      rollNormalVariant();
      setDealKey((k) => k + 1);
      triggerHaptic(12);
    },
    [spots, origin, dest, dragX, rollNormalVariant]
  );
  const draw = reactExports.useCallback(() => {
    drawWithMinutes(prefs.minutes);
  }, [drawWithMinutes, prefs.minutes]);
  const switchMode = reactExports.useCallback(
    (nextMode, opts) => {
      setModeState(nextMode);
      saveDrawMode(nextMode);
      setFlipped(false);
      setOnlyOneHint(false);
      dragX.set(0);
      if (nextMode === "blind" && opts?.autoDraw) {
        setDealMode("deal");
        setDeck({ result: buildDeck(spots, origin, dest, prefs.minutes), index: 0 });
        setDrawnAtIso((/* @__PURE__ */ new Date()).toISOString());
        setBlindSeq((s) => s + 1);
        setDealKey((k) => k + 1);
      } else {
        setDeck(null);
      }
    },
    [spots, origin, dest, prefs.minutes, dragX]
  );
  reactExports.useEffect(() => {
    if (initialBlind) {
      saveDrawMode("blind");
      draw();
    } else if (auto) {
      draw();
      history.replaceState(null, "", "#/");
    }
  }, []);
  const bounceSingleCard = reactExports.useCallback(() => {
    setOnlyOneHint(true);
    setBounceTrigger((n) => n + 1);
    triggerHaptic([8, 30, 8]);
  }, []);
  const next = (dir = "left") => {
    if (!deck || deck.index >= deck.result.deck.length) return;
    if (deck.result.deck.length <= 1) {
      if (mode === "blind") {
        setBlindSeq((s) => s + 1);
      }
      bounceSingleCard();
      return;
    }
    if (prefersReduced) dragX.set(0);
    else void animate(dragX, 0, { type: "spring", stiffness: 300, damping: 26 });
    setOnlyOneHint(false);
    setExitDir(dir);
    setDealMode("next");
    setDeck({ ...deck, index: deck.index + 1 });
    setFlipped(false);
    setBlindSeq((s) => s + 1);
    if (mode === "normal") rollNormalVariant();
    setDealKey((k) => k + 1);
  };
  const current = deck ? deck.result.deck[deck.index] : void 0;
  const total = deck?.result.deck.length ?? 0;
  const pickedBlind = reactExports.useMemo(() => {
    if (mode !== "blind" || !current) return null;
    return pickBlindClue(current.spot.id, lang, blindSeq, lastBlindClueRef.current);
  }, [mode, current, lang, blindSeq]);
  reactExports.useEffect(() => {
    if (pickedBlind) {
      lastBlindClueRef.current = pickedBlind.clue;
    }
  }, [pickedBlind]);
  const go = () => {
    if (!current) return;
    if (mode === "blind") {
      const now = /* @__PURE__ */ new Date();
      const leave = computeLeaveWindow(current, now);
      saveTrip({
        spotId: current.spot.id,
        destId: dest.id,
        minutes: prefs.minutes,
        startedAt: now.toISOString(),
        mode: "blind",
        latestLeaveLabel: leave.latestLeaveLabel,
        latestLeaveAt: leave.latestLeaveTime.toISOString(),
        slackMin: leave.slackMin,
        clueIndex: pickedBlind?.clueIndex ?? 0,
        cropIndex: pickedBlind?.cropIndex ?? 0
      });
      navigate(`/go/${current.spot.id}?mode=blind`);
      return;
    }
    saveTrip({
      spotId: current.spot.id,
      destId: dest.id,
      minutes: prefs.minutes,
      startedAt: (/* @__PURE__ */ new Date()).toISOString(),
      mode: "normal"
    });
    navigate(`/go/${current.spot.id}`);
  };
  const stackBehind = reactExports.useMemo(() => Math.min(3, Math.max(0, total - (deck?.index ?? 0) - 1)), [total, deck]);
  const minNeededMin = reactExports.useMemo(() => {
    if (!deck || deck.result.deck.length > 0) return null;
    const timeRejected = deck.result.rejected.filter((r) => r.reason === "time");
    if (!timeRejected.length) return null;
    return Math.min(...timeRejected.map((r) => r.totalMin)) + BUFFER_MIN;
  }, [deck]);
  const nextTimeOption = TIME_OPTIONS.find((m) => m > prefs.minutes && (minNeededMin == null || m >= minNeededMin));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-dvh flex-col px-4 pb-4 pt-[max(0.875rem,env(safe-area-inset-top))]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "min-w-0 flex-1 font-serif text-lg leading-none", children: "Surprise Card" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LangSwitcher, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            "data-testid": "me-button",
            className: "shrink-0 grid h-10 w-10 place-items-center rounded-full hover:bg-sumi/5",
            onClick: () => navigate("/me"),
            "aria-label": t("myRecordAria"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "user" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            "data-testid": "info-button",
            className: "shrink-0 grid h-10 w-10 place-items-center rounded-full font-serif text-[15px] hover:bg-sumi/5",
            onClick: () => navigate("/about"),
            "aria-label": "i",
            title: t("aboutTitle"),
            children: "i"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] leading-snug text-sumi/60", children: t("tagline") })
    ] }),
    tripSpot && !tripSpot.unlocked && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: "mt-3 flex items-center gap-2 rounded-2xl bg-kin/15 px-4 py-2.5 text-left text-[13px]",
        onClick: () => navigate(trip?.mode === "blind" ? `/go/${tripSpot.id}?mode=blind` : `/go/${tripSpot.id}`),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "pin", className: "h-4 w-4 text-[#8a6a1f]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 truncate", children: trip?.mode === "blind" ? t("blindResumeLabel") : `${t("onDetour")}「${getSpotText(tripSpot, lang).teaser}」` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "back", className: "h-4 w-4 rotate-180" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-2.5 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label", children: t("finalDest") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar -mx-4 mt-1 flex gap-2 overflow-x-auto px-4 pb-0.5", children: DESTINATIONS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setPrefs({ ...prefs, destId: d.id }),
            className: `flex shrink-0 items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3.5 text-[13px] ring-1 transition ${prefs.destId === d.id ? "bg-sumi text-washi ring-sumi shadow-sm" : "bg-white/75 ring-sumi/10"}`,
            "aria-pressed": prefs.destId === d.id,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PlacePhoto, { placeId: d.id, alt: "", className: "h-6 w-6 shrink-0 rounded-full ring-1 ring-black/10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: getDestLabel(d, lang) })
            ]
          },
          d.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label shrink-0", children: t("timeLeft") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 gap-1.5", children: TIME_OPTIONS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setPrefs({ ...prefs, minutes: m }), className: `flex-1 rounded-full py-2 text-[13px] ring-1 transition ${prefs.minutes === m ? "bg-sumi text-washi ring-sumi" : "bg-white/75 ring-sumi/10"}`, "aria-pressed": prefs.minutes === m, children: [
          m,
          t("minUnit")
        ] }, m)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1.5 text-[11px] text-sumi/55", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "walk", className: "h-3.5 w-3.5 shrink-0" }),
          " ",
          t("walk"),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-0.5", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 truncate", children: formatLocSummary(loc.status, !!loc.pos, loc.source, lang) }),
          !loc.pos && (loc.status === "denied" || loc.status === "timeout" || loc.status === "unavailable") && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: loc.request, className: "shrink-0 text-moss-dark underline underline-offset-2", children: t("retry") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-testid": "draw-mode-toggle",
            role: "group",
            "aria-label": t("modeBlind"),
            className: "inline-flex shrink-0 rounded-full bg-white/80 p-0.5 ring-1 ring-sumi/10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-testid": "mode-normal",
                  "aria-pressed": mode === "normal",
                  onClick: () => switchMode("normal"),
                  className: `rounded-full px-2.5 py-1 text-[11px] font-medium leading-none transition ${mode === "normal" ? "bg-sumi text-washi shadow-sm" : "text-sumi/60"}`,
                  children: t("modeNormal")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-testid": "mode-blind",
                  "aria-pressed": mode === "blind",
                  onClick: () => switchMode("blind"),
                  className: `rounded-full px-2.5 py-1 text-[11px] font-medium leading-none transition ${mode === "blind" ? "bg-shu text-washi shadow-sm" : "text-sumi/60"}`,
                  children: t("modeBlind")
                }
              )
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mt-2 flex flex-1 flex-col justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative isolate mx-auto h-[436px] w-full max-w-[348px]", children: [
        (!deck || mode === "blind" && stackBehind > 0) && Array.from({ length: deck ? stackBehind : 3 }).map((_, i) => {
          const layer = STACK_LAYERS[i] ?? STACK_LAYERS[STACK_LAYERS.length - 1];
          const isCoverStack = !deck;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              style: i === 0 && !prefersReduced ? { zIndex: -1, y: peekY, scale: peekScale, rotate: peekRotate } : { zIndex: -i - 1 },
              animate: i === 0 ? { opacity: 1 } : prefersReduced ? { opacity: 1 - i * 0.14 } : {
                x: layer.x,
                y: layer.y,
                rotate: layer.rotate,
                scale: layer.scale,
                opacity: 1 - i * 0.14
              },
              transition: prefersReduced ? { duration: 0.16 } : { type: "spring", stiffness: 260, damping: 24 },
              className: isCoverStack ? "absolute inset-0 rounded-[28px] border border-washi/25 bg-[#2a3930] shadow-lg ring-1 ring-kin/50" : "absolute inset-0 rounded-[28px] border border-sumi/10 bg-[#faf6ed] shadow-md ring-1 ring-sumi/5",
              children: isCoverStack && /* @__PURE__ */ jsxRuntimeExports.jsx(CardBackPattern, { quiet: true })
            },
            isCoverStack ? `stack-cover-${i}` : `stack-deck-${(deck?.index ?? 0) + i}`
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { initial: false, custom: { mode: dealMode, dir: exitDir }, children: [
          !deck && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: prefersReduced ? { opacity: 0 } : { y: 24, scale: 0.94, opacity: 0 },
              animate: prefersReduced ? { opacity: 1 } : { y: 0, scale: 1, opacity: 1 },
              exit: prefersReduced ? { opacity: 0, transition: { duration: 0.14 } } : { y: -120, scale: 0.86, rotate: -9, opacity: 0, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
              transition: prefersReduced ? { duration: 0.16 } : { type: "spring", stiffness: 260, damping: 24 },
              className: "absolute inset-0",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SwipeCard, { onSwipe: () => draw(), onTap: draw, dragX, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full rounded-[28px] border border-kin/35 bg-sumi text-washi shadow-[0_24px_50px_-16px_rgba(31,42,36,.5)] ring-1 ring-washi/15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardBackPattern, { quiet: true }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  mode === "blind" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-3 inline-block rounded-full bg-shu/90 px-3 py-1 text-[11px] font-medium tracking-[0.14em] text-washi shadow-sm", children: t("blindBadge") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-xl", children: t("deckCoverLine1") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-xl", children: t("deckCoverLine2") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 whitespace-pre-line text-[12px] text-washi/65", children: t("deckCoverSub", { dest: destLabel, min: prefs.minutes }) })
                ] }) })
              ] }) })
            },
            "deck-cover"
          ),
          deck && current && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: prefersReduced ? reducedCardVariants : drawCardVariants,
              initial: "enter",
              animate: "center",
              exit: "exit",
              custom: { mode: dealMode, dir: exitDir },
              transition: prefersReduced ? { duration: 0.16 } : { type: "spring", stiffness: 170, damping: 20, mass: 1 },
              className: "absolute inset-0",
              children: mode === "blind" && pickedBlind ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                SwipeCard,
                {
                  testId: "swipe-card",
                  dragX,
                  canSwipeOut: total > 1,
                  bounceTrigger,
                  onBounce: () => setOnlyOneHint(true),
                  onSwipe: (dir) => next(dir),
                  className: "h-full",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    BlindCard,
                    {
                      d: current,
                      destLabel,
                      picked: pickedBlind,
                      drawnAtIso
                    }
                  )
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                NormalCardStage,
                {
                  detour: current,
                  destLabel,
                  variant: cardVariant,
                  sealed: cardVariant.rarity !== "common",
                  flipped,
                  onFlippedChange: setFlipped,
                  onGo: go,
                  onSwipe: (dir) => next(dir),
                  canSwipeOut: total > 1,
                  bounceTrigger,
                  onBounce: () => setOnlyOneHint(true),
                  dragX,
                  gyro: tiltChoice === "granted"
                }
              )
            },
            `card-${dealKey}-${mode}`
          ),
          deck && !current && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: prefersReduced ? { opacity: 0 } : { y: 50, scale: 0.92, opacity: 0 },
              animate: prefersReduced ? { opacity: 1 } : { y: 0, scale: 1, opacity: 1 },
              exit: prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.95 },
              transition: prefersReduced ? { duration: 0.16 } : { type: "spring", stiffness: 260, damping: 24 },
              className: "absolute inset-0 grid place-items-center rounded-[28px] border border-kin/25 bg-white p-6 text-center shadow-[0_24px_60px_-20px_rgba(31,42,36,.35)] ring-1 ring-sumi/5",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
                mode === "blind" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 inline-block rounded-full bg-shu/10 px-2.5 py-0.5 text-[11px] font-medium text-shu", children: t("blindBadge") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-3 grid h-11 w-11 place-items-center rounded-full bg-washi text-kin ring-1 ring-kin/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "clock", className: "h-5 w-5" }) }),
                total === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-lg", children: t("emptyTitle") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13px] leading-relaxed text-sumi/70", children: formatEmptyAdvice(deck.result, prefs.minutes, lang) }),
                  mode === "blind" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-testid": "blind-empty-rules", className: "mt-3 rounded-2xl bg-washi p-3 text-left text-[12px] leading-relaxed text-sumi/75", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sumi", children: t("blindRulesTitle") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: t("blindRulesBody") })
                  ] }),
                  nextTimeOption && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      className: "btn-primary mt-4",
                      onClick: () => {
                        const nextPrefs = { ...prefs, minutes: nextTimeOption };
                        setPrefsState(nextPrefs);
                        savePrefs(nextPrefs);
                        drawWithMinutes(nextTimeOption);
                      },
                      children: t("extendTimeBtn", { m: nextTimeOption })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2.5 text-[11px] text-sumi/45", children: t("emptyNote") })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-xl", children: t("deckEndTitle") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[13px] text-sumi/65", children: t("deckEndSub", { n: total }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-primary mt-6", onClick: draw, children: t("reshuffleBtn") })
                ] })
              ] })
            },
            `empty-${dealKey}-${mode}`
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: onlyOneHint && current && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 6 },
          animate: prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 },
          exit: prefersReduced ? { opacity: 0 } : { opacity: 0, y: -4 },
          role: "status",
          className: "mx-auto mt-2.5 max-w-[340px] rounded-full bg-sumi/90 px-4 py-1.5 text-center text-[12px] text-washi shadow",
          children: t("onlyOneHint")
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2.5", children: !deck ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { "data-testid": "draw-button", className: "btn-primary w-full bg-kin py-3.5 text-base font-bold text-sumi shadow-kin/30", onClick: draw, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "spark" }),
      " ",
      t("drawBtn")
    ] }) : current ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      mode === "blind" && total <= 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          "data-testid": "redraw-button",
          className: "btn-ghost px-3.5 text-[13px] text-sumi/70 opacity-80",
          onClick: () => next("left"),
          "aria-label": t("blindClueSwapBtn"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "back", className: "h-4 w-4" }),
            " ",
            t("blindClueSwapBtn")
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          "data-testid": "redraw-button",
          className: "btn-ghost px-4",
          onClick: () => next("left"),
          "aria-label": t("redrawBtn"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "back", className: "h-4 w-4" }),
            " ",
            t("redrawBtn")
          ]
        }
      ),
      mode === "blind" && total <= 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", "aria-hidden": true }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "p",
        {
          "data-testid": mode === "blind" ? "blind-card-counter" : void 0,
          className: "flex-1 text-center text-[12px] tabular-nums text-sumi/50",
          children: [
            deck.index + 1,
            " / ",
            total
          ]
        }
      ),
      !flipped && mode === "normal" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "data-testid": "go-button", className: "btn-primary px-6", onClick: go, children: t("goHereBtn") }),
      mode === "blind" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "data-testid": "blind-depart", className: "btn-primary bg-shu px-6 text-washi shadow-shu/25", onClick: go, children: t("blindStartBtn") })
    ] }) : null }),
    mode === "normal" && deck && current && tiltChoice === null && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-testid": "tilt-guide", className: "motion-guide", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "motion-guide-title", children: mc.guide }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "motion-guide-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-testid": "tilt-allow-button",
            onClick: () => {
              const pending = requestOrientationFromClick();
              void pending.then(setTiltChoice);
            },
            children: mc.allow
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-testid": "tilt-pointer-button",
            onClick: () => setTiltChoice(usePointer()),
            children: mc.pointer
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-2.5 border-t border-sumi/10 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-testid": "entry-blind",
        onClick: () => {
          switchMode("blind", { autoDraw: true });
          window.scrollTo({ top: 0 });
        },
        className: `flex w-full items-center justify-between gap-3 rounded-2xl border px-3.5 py-2.5 text-left transition active:scale-[.99] ${mode === "blind" ? "border-shu/35 bg-shu/10" : "border-sumi/10 bg-white/75 hover:bg-white"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-[13px] font-medium text-sumi", children: t("entryBlindTitle") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 truncate text-[11px] text-sumi/60", children: t("entryBlindSub") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              "aria-hidden": true,
              className: `grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px] ${mode === "blind" ? "bg-shu text-washi" : "bg-sumi/10 text-sumi/70"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "back", className: "h-3.5 w-3.5 rotate-180" })
            }
          )
        ]
      }
    ) })
  ] });
}
function CardBackPattern({ quiet = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 h-full w-full rounded-[28px]", viewBox: "0 0 340 440", preserveAspectRatio: "none", "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "12", y: "12", width: "316", height: "416", rx: "20", fill: "none", stroke: "#c9a24a", strokeOpacity: ".35" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "170", cy: "220", r: "46", fill: "none", stroke: "#c9a24a", strokeOpacity: ".35" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "170", cy: "220", r: "76", fill: "none", stroke: "#c9a24a", strokeOpacity: ".2" }),
    !quiet && /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "170", cy: "220", r: "8", fill: "#c9a24a", fillOpacity: ".6" })
  ] });
}

function useCheckIn() {
  const { backend, refresh } = useData();
  const { pos, request, status } = useLocation();
  const { lang, t } = useI18n();
  const celebrate = useCelebrate();
  const toast = useToast();
  const [busy, setBusy] = reactExports.useState(false);
  const checkIn = reactExports.useCallback(
    async (spot, opts = {}) => {
      if (!pos) {
        request();
        if (!opts.silentFail) toast(status === "denied" ? t("checkInDenied") : t("checkInLocating"), "error");
        return false;
      }
      setBusy(true);
      try {
        const r = await backend.checkIn(spot.id, pos);
        if (r.ok) {
          await refresh();
          if (r.firstTime) {
            const trip = loadTrip();
            const fromBlind = opts.fromBlind ?? (trip?.spotId === spot.id && trip?.mode === "blind");
            celebrate({ spotId: spot.id, spotName: getSpotText(spot, lang).name, postCount: spot.postCount, fromBlind });
          }
          return true;
        }
        if (!opts.silentFail) {
          toast(t("checkInTooFar", { dist: formatDistance(Math.max(0, r.distanceM - r.radiusM)) }), "error");
        }
        return false;
      } catch (e) {
        if (!opts.silentFail) toast(e instanceof Error ? e.message : t("checkInFailed"), "error");
        return false;
      } finally {
        setBusy(false);
      }
    },
    [backend, pos, request, status, refresh, celebrate, toast, lang, t]
  );
  return { checkIn, busy };
}

const NARA_CENTER = [34.68, 135.833];
const TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const TILE_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
function esc(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}
function spotIcon(s, opts) {
  const size = opts.selected ? 54 : 46;
  const inner = s.unlocked ? s.coverPhoto ? `<div style="position:absolute;inset:3px;border-radius:999px;background:url('${s.coverPhoto.replace(/'/g, "%27")}') center/cover"></div>` : `<div style="position:absolute;inset:3px;border-radius:999px;background:#4f6b4a;display:grid;place-items:center;color:#f6f1e7;font-size:18px">✦</div>` : `<div style="position:absolute;inset:3px;border-radius:999px;background:#1f2a24;display:grid;place-items:center">
         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a24a" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>
       </div>`;
  const ring = s.unlocked ? "#7f9a72" : "#c9a24a";
  const pulse = opts.target ? `<span style="position:absolute;inset:-6px;border-radius:999px;border:2px solid #c9a24a" class="animate-pulseRing"></span>` : "";
  const badge = s.postCount > 0 ? `<span style="position:absolute;top:-4px;right:-6px;min-width:20px;height:20px;padding:0 5px;border-radius:999px;background:#b5523b;color:#fff;font:600 11px/20px system-ui;text-align:center;box-shadow:0 1px 4px rgba(0,0,0,.3)">${s.postCount}</span>` : "";
  return L$2.divIcon({
    className: "echo-marker",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    html: `<div style="position:relative;width:${size}px;height:${size}px;border-radius:999px;background:${ring};box-shadow:0 6px 16px -4px rgba(31,42,36,.5);transition:transform .2s">${pulse}${inner}${badge}</div>`
  });
}
const destIcon = L$2.divIcon({
  className: "echo-marker",
  iconSize: [26, 26],
  iconAnchor: [13, 13],
  html: '<div style="width:26px;height:26px;border-radius:8px;background:#b5523b;color:#fff;display:grid;place-items:center;font:700 13px system-ui;box-shadow:0 2px 6px rgba(0,0,0,.35)">G</div>'
});
const userIcon = L$2.divIcon({
  className: "echo-marker",
  iconSize: [22, 22],
  iconAnchor: [11, 11],
  html: `<div style="position:relative;width:22px;height:22px"><span class="animate-pulseRing" style="position:absolute;inset:0;border-radius:999px;background:#3b82f6;opacity:.4"></span><span style="position:absolute;inset:4px;border-radius:999px;background:#2563eb;border:3px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4)"></span></div>`
});
function EchoMap({ spots, userPos, targetId, selectedId, onSelect, onMapClick, hideTargetName, destination, fit = "all", className }) {
  const { lang, t } = useI18n();
  const el = reactExports.useRef(null);
  const map = reactExports.useRef(null);
  const tileLayerRef = reactExports.useRef(null);
  const spotLayer = reactExports.useRef(null);
  const userLayer = reactExports.useRef(null);
  const clickRef = reactExports.useRef(onMapClick);
  clickRef.current = onMapClick;
  const fitted = reactExports.useRef(false);
  const [tileFailed, setTileFailed] = reactExports.useState(() => typeof navigator !== "undefined" && navigator.onLine === false);
  const loadedAnyTile = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!el.current) return;
    const m = L$2.map(el.current, { center: NARA_CENTER, zoom: 14, zoomControl: false, attributionControl: true });
    const tiles = L$2.tileLayer(TILE_URL, {
      maxZoom: 19,
      attribution: TILE_ATTRIBUTION,
      className: "echo-tiles"
    }).addTo(m);
    tiles.on("tileload", () => {
      loadedAnyTile.current = true;
      setTileFailed(false);
    });
    tiles.on("tileerror", () => {
      if (!loadedAnyTile.current || typeof navigator !== "undefined" && !navigator.onLine) {
        setTileFailed(true);
      }
    });
    tileLayerRef.current = tiles;
    L$2.control.zoom({ position: "bottomright" }).addTo(m);
    spotLayer.current = L$2.layerGroup().addTo(m);
    userLayer.current = L$2.layerGroup().addTo(m);
    m.on("click", (e) => clickRef.current?.({ lat: e.latlng.lat, lng: e.latlng.lng }));
    map.current = m;
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => m.invalidateSize()) : null;
    ro?.observe(el.current);
    const onOnline = () => {
      loadedAnyTile.current = false;
      setTileFailed(false);
      tiles.redraw();
    };
    const onOffline = () => setTileFailed(true);
    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);
    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
      ro?.disconnect();
      m.remove();
      map.current = null;
      tileLayerRef.current = null;
    };
  }, []);
  reactExports.useEffect(() => {
    const layer = spotLayer.current;
    if (!layer) return;
    layer.clearLayers();
    for (const s of spots) {
      const isTarget = s.id === targetId;
      if (isTarget) {
        L$2.circle([s.lat, s.lng], { radius: s.unlockRadiusM, color: "#c9a24a", weight: 1.5, dashArray: "4 6", fillColor: "#c9a24a", fillOpacity: 0.08, interactive: false }).addTo(layer);
      }
      const label = getSpotText(s, lang).name;
      const mk = L$2.marker([s.lat, s.lng], { icon: spotIcon(s, { target: isTarget, selected: s.id === selectedId }), zIndexOffset: isTarget ? 500 : 0, keyboard: true, title: isTarget && hideTargetName ? "Destination" : label });
      const name = isTarget && hideTargetName && !s.unlocked ? "？？？" : label;
      mk.bindTooltip(esc(name), { direction: "top", offset: [0, -26], className: "echo-tip", permanent: isTarget });
      mk.on("click", (e) => {
        L$2.DomEvent.stopPropagation(e);
        onSelect?.(s.id);
      });
      mk.addTo(layer);
    }
  }, [spots, targetId, selectedId, hideTargetName, onSelect, lang]);
  reactExports.useEffect(() => {
    const layer = userLayer.current;
    if (!layer) return;
    layer.clearLayers();
    const tSpot = spots.find((s) => s.id === targetId);
    if (destination) {
      L$2.marker([destination.lat, destination.lng], { icon: destIcon, interactive: false, zIndexOffset: 400 }).bindTooltip(esc(destination.label), { permanent: true, direction: "top", offset: [0, -18], className: "echo-tip" }).addTo(layer);
      if (tSpot) L$2.polyline([[tSpot.lat, tSpot.lng], [destination.lat, destination.lng]], { color: "#b5523b", weight: 2, dashArray: "2 8", opacity: 0.7, interactive: false }).addTo(layer);
    }
    if (!userPos) return;
    L$2.circle([userPos.lat, userPos.lng], { radius: Math.min(userPos.accuracy, 300), color: "#2563eb", weight: 0, fillOpacity: 0.1, interactive: false }).addTo(layer);
    L$2.marker([userPos.lat, userPos.lng], { icon: userIcon, interactive: false, zIndexOffset: 1e3 }).addTo(layer);
    if (tSpot) L$2.polyline([[userPos.lat, userPos.lng], [tSpot.lat, tSpot.lng]], { color: "#1f2a24", weight: 2, dashArray: "2 8", opacity: 0.6, interactive: false }).addTo(layer);
  }, [userPos, targetId, spots, destination]);
  reactExports.useEffect(() => {
    const m = map.current;
    if (!m || !spots.length) return;
    const tSpot = spots.find((s) => s.id === targetId);
    const pts = fit === "target" && tSpot ? [[tSpot.lat, tSpot.lng]] : spots.map((s) => [s.lat, s.lng]);
    if (destination && fit === "target") pts.push([destination.lat, destination.lng]);
    if (userPos && (fit === "target" || !fitted.current)) pts.push([userPos.lat, userPos.lng]);
    if (fitted.current && fit === "all") return;
    m.fitBounds(L$2.latLngBounds(pts), { padding: [50, 50], maxZoom: 16 });
    fitted.current = true;
  }, [spots.length, targetId, fit, !!userPos]);
  const retryTiles = () => {
    loadedAnyTile.current = false;
    setTileFailed(false);
    tileLayerRef.current?.redraw();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative ${className ?? ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: el, className: "h-full w-full", role: "application", "aria-label": t("mapAria") }),
    tileFailed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-auto absolute inset-x-3 top-3 z-[450] flex items-center gap-2 rounded-2xl bg-sumi/90 px-3.5 py-2.5 text-[12px] text-washi shadow-lg backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 leading-snug", children: t("mapOffline") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-testid": "map-retry-button",
          onClick: retryTiles,
          className: "shrink-0 rounded-full bg-kin px-3 py-1 text-[11px] font-bold text-sumi active:scale-95",
          children: t("mapRetry")
        }
      )
    ] })
  ] });
}

function HeatView({
  spotId,
  spotCoord,
  destLabel,
  pos,
  locStatus,
  locSource,
  onRetryGps,
  effectiveDistM,
  blindState,
  clueIndex,
  cropIndex,
  leaveWindow,
  onReveal
}) {
  const { lang, t } = useI18n();
  const prefersReduced = usePrefersReducedMotion();
  const [hintCount, setHintCount] = reactExports.useState(0);
  const [offline, setOffline] = reactExports.useState(() => typeof navigator !== "undefined" && navigator.onLine === false);
  reactExports.useEffect(() => {
    const onOnline = () => setOffline(false);
    const onOffline = () => setOffline(true);
    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);
    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
    };
  }, []);
  const handleOfflineRetry = () => {
    if (typeof navigator === "undefined" || navigator.onLine !== false) {
      setOffline(false);
    }
    if (!pos) onRetryGps();
  };
  const hasReading = effectiveDistM !== null;
  const band = hasReading ? getDistanceBand(effectiveDistM, blindState.status) : null;
  const crop = BLIND_CROP_PRESETS[(cropIndex % BLIND_CROP_PRESETS.length + BLIND_CROP_PRESETS.length) % BLIND_CROP_PRESETS.length];
  const primaryClue = getSensoryClue(spotId, lang, clueIndex);
  const primaryClueSegments = reactExports.useMemo(() => splitClueSegments(primaryClue, lang), [primaryClue, lang]);
  const clueStyle = { wordBreak: "auto-phrase", textWrap: "pretty" };
  const extraHints = reactExports.useMemo(
    () => getExtraHints(spotId, lang, clueIndex, pos, spotCoord),
    [spotId, lang, clueIndex, pos, spotCoord]
  );
  const shownHints = extraHints.slice(0, hintCount);
  const hintsExhausted = hintCount >= Math.min(BLIND_MAX_EXTRA_HINTS, extraHints.length);
  const bandLabel = !hasReading ? t("blindBandNoGps") : band === "nearby" ? t("blindBandNearby") : band === "closer" ? t("blindBandCloser") : t("blindBandFar");
  const trendLabel = !hasReading ? t("blindTempNoGps") : blindState.status === "nearby" ? t("blindTempNearby") : blindState.status === "warmer" ? t("blindTempWarmer") : blindState.status === "colder" ? t("blindTempColder") : t("blindTempStart");
  const visual = !hasReading ? {
    ringOuter: "rgba(31, 42, 36, 0.12)",
    ringMid: "rgba(31, 42, 36, 0.18)",
    ringInner: "rgba(201, 162, 74, 0.30)",
    coreDot: "bg-sumi/45 ring-4 ring-sumi/10",
    haloBg: "radial-gradient(circle, rgba(201,162,74,0.12) 0%, rgba(31,42,36,0.05) 54%, rgba(246,241,231,0) 78%)",
    bandBadge: "bg-sumi/10 text-sumi",
    trendPill: "border-sumi/15 bg-white text-sumi/70"
  } : band === "nearby" || blindState.status === "nearby" ? {
    ringOuter: "rgba(181, 82, 59, 0.20)",
    ringMid: "rgba(181, 82, 59, 0.34)",
    ringInner: "rgba(201, 162, 74, 0.50)",
    coreDot: "bg-shu ring-4 ring-shu/25",
    haloBg: "radial-gradient(circle, rgba(181,82,59,0.24) 0%, rgba(201,162,74,0.12) 48%, rgba(246,241,231,0) 76%)",
    bandBadge: "bg-shu text-washi",
    trendPill: "border-shu/30 bg-shu/10 text-shu"
  } : blindState.status === "warmer" || band === "closer" ? {
    ringOuter: "rgba(201, 162, 74, 0.22)",
    ringMid: "rgba(201, 162, 74, 0.36)",
    ringInner: "rgba(201, 162, 74, 0.55)",
    coreDot: "bg-kin ring-4 ring-kin/30",
    haloBg: "radial-gradient(circle, rgba(201,162,74,0.28) 0%, rgba(201,162,74,0.10) 52%, rgba(246,241,231,0) 76%)",
    bandBadge: "bg-kin text-sumi",
    trendPill: "border-kin/45 bg-kin/20 text-[#6d4f0f]"
  } : {
    ringOuter: "rgba(31, 42, 36, 0.14)",
    ringMid: "rgba(31, 42, 36, 0.22)",
    ringInner: "rgba(91, 90, 114, 0.32)",
    coreDot: "bg-sumi ring-4 ring-sumi/15",
    haloBg: "radial-gradient(circle, rgba(91,90,114,0.18) 0%, rgba(31,42,36,0.07) 52%, rgba(246,241,231,0) 76%)",
    bandBadge: "bg-sumi text-washi",
    trendPill: "border-sumi/20 bg-sumi/5 text-sumi/80"
  };
  const hasGpsError = !pos && (locStatus === "denied" || locStatus === "timeout" || locStatus === "unavailable" || locStatus === "insecure" || locStatus === "unsupported");
  const canRetryGps = locStatus === "denied" || locStatus === "timeout" || locStatus === "unavailable";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-testid": "blind-radar", className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-testid": "blind-reveal",
        onClick: onReveal,
        className: "flex w-full items-center justify-center gap-2 rounded-2xl bg-shu px-4 py-3 text-[13px] font-bold text-washi shadow-md shadow-shu/20 transition active:scale-[.98]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "map", className: "h-4 w-4 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("blindRevealBtn") })
        ]
      }
    ),
    offline && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-testid": "blind-offline-banner",
        role: "status",
        className: "sticky top-16 z-30 flex items-center gap-2 rounded-2xl bg-sumi px-3.5 py-2.5 text-[12px] text-washi shadow-md",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 leading-snug", children: t("blindOfflineBanner") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-testid": "blind-offline-retry",
              onClick: handleOfflineRetry,
              className: "shrink-0 rounded-full bg-kin px-3 py-1 text-[11px] font-bold text-sumi active:scale-95",
              children: t("blindOfflineRetry")
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "overflow-hidden rounded-[28px] border border-sumi/10 bg-white shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-24 w-full overflow-hidden bg-[#26352d]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PlacePhoto,
          {
            placeId: spotId,
            alt: t("blindHiddenTitle"),
            priority: true,
            className: "h-full w-full",
            imgStyle: {
              objectPosition: crop.objectPosition,
              transform: `scale(${crop.scale})`,
              filter: `blur(${crop.blurPx}px) saturate(1.08) brightness(0.94)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0",
            style: {
              background: "radial-gradient(ellipse at 50% 30%, rgba(246,241,231,0.18) 0%, rgba(31,42,36,0.45) 65%, rgba(31,42,36,0.92) 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-2.5 rounded-full bg-sumi/70 px-2.5 py-0.5 text-[10px] font-medium tracking-[0.12em] text-kin ring-1 ring-kin/35", children: t("blindBadge") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-4 bottom-2.5 text-washi", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-[17px] leading-snug", children: t("blindHiddenTitle") }) })
      ] }),
      leaveWindow && /* @__PURE__ */ jsxRuntimeExports.jsx(
        BlindCommitBar,
        {
          destLabel,
          tone: "light",
          window: leaveWindow
        }
      ),
      locSource === "demo" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-5 pt-2.5 text-[11px] text-[#8a6a1f]", children: t("demoOriginNote") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pb-5 pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[24px] border border-kin/30 bg-washi/70 px-4 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-testid": "blind-rings-visual",
              className: "relative mx-auto flex h-40 w-40 items-center justify-center rounded-full",
              style: { backgroundImage: visual.haloBg },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    "aria-hidden": true,
                    animate: prefersReduced || !hasReading ? { opacity: 0.72 } : { scale: [0.96, 1.04, 0.96], opacity: [0.55, 0.88, 0.55] },
                    transition: prefersReduced ? { duration: 0.2 } : { duration: 3.6, repeat: Infinity, ease: "easeInOut" },
                    className: "pointer-events-none absolute h-36 w-36 rounded-full border",
                    style: { borderColor: visual.ringOuter }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    "aria-hidden": true,
                    animate: prefersReduced || !hasReading ? { opacity: 0.82 } : { scale: [0.97, 1.03, 0.97], opacity: [0.68, 0.96, 0.68] },
                    transition: prefersReduced ? { duration: 0.2 } : { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
                    className: "pointer-events-none absolute h-24 w-24 rounded-full border-[1.5px]",
                    style: { borderColor: visual.ringMid }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": true,
                    className: "pointer-events-none absolute h-12 w-12 rounded-full border-2",
                    style: { borderColor: visual.ringInner }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    "aria-hidden": true,
                    className: `relative z-10 h-3.5 w-3.5 rounded-full transition-colors duration-300 ${visual.coreDot}`
                  }
                )
              ]
            }
          ),
          !hasReading && hasGpsError ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-testid": "blind-gps-error",
              role: "alert",
              className: "mt-3 flex flex-col items-center text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    "data-testid": "blind-distance-band",
                    className: "rounded-full border border-shu/25 bg-[#fbf2ee] px-5 py-1.5 font-serif text-[16px] font-semibold text-[#8c3220] shadow-sm",
                    children: t("blindGpsInlineError")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-[260px] text-[12px] leading-snug text-sumi/70 [line-break:strict]", children: t("blindTempNoGps") }),
                canRetryGps && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-testid": "blind-gps-retry",
                    onClick: onRetryGps,
                    className: "mt-2.5 rounded-full border border-shu/35 bg-white px-4 py-1.5 text-[12px] font-medium text-[#8c3220] shadow-sm transition hover:bg-shu/5 active:scale-95",
                    children: t("retry")
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-col items-center text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                "data-testid": "blind-distance-band",
                className: `rounded-full px-5 py-1.5 font-serif text-[17px] font-semibold shadow-sm transition-colors duration-300 ${visual.bandBadge}`,
                children: bandLabel
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                "data-testid": "blind-temp-badge",
                className: `mt-2 inline-flex items-center rounded-full border px-3 py-1 text-[12px] font-medium transition-colors duration-300 ${visual.trendPill}`,
                children: trendLabel
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2.5 text-center text-[11px] leading-snug text-sumi/60 [line-break:strict]", children: t("blindDistHint") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2.5 rounded-2xl border border-kin/30 bg-washi/65 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-medium tracking-[0.2em] text-[#8a6a1f]", children: t("blindSensoryLabel") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              "data-testid": "blind-heat-clue",
              "data-clue-wrap": "phrase",
              style: clueStyle,
              className: "font-serif text-[15px] leading-relaxed text-sumi [line-break:strict]",
              children: lang === "en" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                "“",
                primaryClueSegments.map((seg, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
                  i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("wbr", {}),
                  seg
                ] }, i)),
                "”"
              ] }) : primaryClueSegments.map((seg, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
                i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("wbr", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-block max-w-full", children: [
                  i === 0 ? "「" : "",
                  seg,
                  i === primaryClueSegments.length - 1 ? "」" : ""
                ] })
              ] }, i))
            }
          ),
          shownHints.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { "data-testid": "blind-extra-hints", className: "space-y-2 border-t border-sumi/10 pt-2.5", children: shownHints.map((hint, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.li,
            {
              initial: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 6 },
              animate: prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 },
              transition: { duration: 0.22 },
              className: "rounded-xl border border-sumi/10 bg-white/90 px-3 py-2 text-[13px] leading-relaxed text-sumi/85",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] font-medium text-sumi/50", children: t("blindExtraHintLabel", { n: idx + 1 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 block", children: hint })
              ]
            },
            idx
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-testid": "blind-more-hint",
              disabled: hintsExhausted,
              onClick: () => setHintCount((c) => Math.min(extraHints.length, c + 1)),
              className: `w-full rounded-full border py-2.5 text-[12px] font-medium transition ${hintsExhausted ? "cursor-default border-sumi/10 bg-sumi/5 text-sumi/45" : "border-sumi/15 bg-white text-sumi hover:bg-sumi/5 active:scale-[.98]"}`,
              children: hintsExhausted ? t("blindMoreHintDone") : t("blindMoreHintBtn", { used: hintCount, max: Math.min(BLIND_MAX_EXTRA_HINTS, extraHints.length) })
            }
          )
        ] })
      ] })
    ] })
  ] });
}

const categoryMeta = {
  discovery: { label: "発見", desc: "面白いものを見つけた", icon: "✦", cls: "bg-kin/15 text-[#8a6a1f] ring-kin/40" },
  hint: { label: "ヒント", desc: "次の旅行者へのアドバイス", icon: "➜", cls: "bg-moss/15 text-moss-dark ring-moss/40" },
  memory: { label: "思い出", desc: "その場所で感じたこと", icon: "❍", cls: "bg-fuji/15 text-fuji ring-fuji/40" },
  scenery: { label: "景色", desc: "おすすめの写真スポット", icon: "◐", cls: "bg-shu/10 text-shu ring-shu/30" }
};

function AccessInfo({ spot, arriveInMin = 0 }) {
  const { lang, t } = useI18n();
  const st = getSpotText(spot, lang);
  const os = openState(spot.hours, /* @__PURE__ */ new Date(), arriveInMin);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-[13px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { icon: "clock", title: t("accessOpenTitle"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: os.open ? "text-moss-dark" : "text-shu", children: os.open ? arriveInMin ? t("openAtArrival") : t("openNow") : formatOpenState(os, lang) }),
      st.hoursNote && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sumi/60", children: st.hoursNote })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: "yen", title: t("accessFeeTitle"), children: st.fee }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: "pin", title: t("accessAddressTitle"), children: st.address }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: "shield", title: t("accessSafetyTitle"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc space-y-0.5 pl-4 text-sumi/75", children: st.safety.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: s }, s)) }) }),
    st.dataNote && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "rounded-xl bg-kin/10 px-3 py-2 text-[12px] leading-relaxed text-[#7a5d17]", children: [
      "⚠ ",
      t("accessDataNote"),
      st.dataNote
    ] })
  ] });
}
function Row({ icon, title, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: icon, className: "mt-0.5 h-4 w-4 shrink-0 text-sumi/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-sumi/45", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "leading-relaxed", children })
    ] })
  ] });
}
function LockedEchoes({ spot }) {
  const { lang, t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card relative overflow-hidden p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "lock", className: "h-4 w-4 text-kin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: spot.postCount > 0 ? t("lockedCount", { n: spot.postCount }) : t("lockedNone") })
    ] }),
    spot.lockedThumbs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-3 gap-2", children: spot.lockedThumbs.map((th, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden rounded-2xl bg-sumi/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: th, alt: "", className: "h-full w-full scale-125 object-cover blur-md" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center bg-sumi/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "lock", className: "h-5 w-5 text-white/90 drop-shadow" }) })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: spot.snippets.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 rounded-2xl bg-washi/80 px-3 py-2.5 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `chip ${categoryMeta[s.category].cls}`, children: getCategoryLabel(s.category, lang) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sumi/70", children: s.snippet }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto h-2 w-16 rounded-full bg-sumi/10" })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-[12px] text-sumi/50", children: t("lockedHint") })
  ] });
}

function Go({ id, blind = false }) {
  const { spots } = useData();
  const { pos, source, status, request } = useLocation();
  const { checkIn, busy } = useCheckIn();
  const { lang, t } = useI18n();
  const spot = spots.find((s) => s.id === id);
  const trip = loadTrip();
  const dest = destById(trip?.destId ?? "jr-nara");
  const destLabel = getDestLabel(dest, lang);
  const destination = reactExports.useMemo(() => ({ lat: dest.lat, lng: dest.lng, label: destLabel }), [dest, destLabel]);
  const blindMode = blind || trip?.spotId === id && trip?.mode === "blind";
  const [revealed, setRevealed] = reactExports.useState(false);
  const [blindState, setBlindState] = reactExports.useState(initialBlindState);
  const origin = pos ?? KINTETSU_NARA;
  const dist = spot ? distanceM(origin, spot) : 0;
  const hasBlindReading = pos !== null;
  const effectiveBlindDist = hasBlindReading ? Math.max(10, dist) : null;
  const inRange = spot && pos ? withinUnlockRange(dist, spot.unlockRadiusM, pos.accuracy) : false;
  const isBlindActive = blindMode && !revealed && !spot?.unlocked;
  reactExports.useEffect(() => {
    if (!spot || !blindMode || effectiveBlindDist === null) return;
    setBlindState((prev) => stepBlindDistance(prev, effectiveBlindDist));
  }, [spot, blindMode, effectiveBlindDist]);
  const tried = reactExports.useRef("");
  const checkedInSpot = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (status === "idle") request();
  }, [status, request]);
  reactExports.useEffect(() => {
    if (!spot || !pos || spot.unlocked || !inRange || busy) return;
    if (checkedInSpot.current === spot.id) return;
    const key = `${pos.lat.toFixed(5)},${pos.lng.toFixed(5)}`;
    if (tried.current === key) return;
    tried.current = key;
    checkedInSpot.current = spot.id;
    void checkIn(spot, { silentFail: true, fromBlind: isBlindActive });
  }, [spot, pos, inRange, busy, checkIn, isBlindActive]);
  const fallbackLeave = reactExports.useMemo(() => {
    if (!spot) return null;
    if (trip?.spotId === id && trip.latestLeaveLabel) {
      return {
        latestLeaveAt: trip.latestLeaveAt,
        latestLeaveLabel: trip.latestLeaveLabel,
        slackMin: trip.slackMin ?? 0,
        startedAt: trip.startedAt
      };
    }
    const toSpotMin = walkMinutes(distanceM(origin, spot));
    const toDestMin = walkMinutes(distanceM(spot, dest));
    const totalMin = toSpotMin + spot.visitMin + toDestMin;
    const budget = trip?.minutes ?? Math.max(90, totalMin + 10);
    const now = /* @__PURE__ */ new Date();
    const win = computeLeaveWindow(
      {
        toSpotMin,
        visitMin: spot.visitMin,
        totalMin,
        slackMin: Math.max(0, budget - totalMin),
        visited: spot.unlocked
      },
      now
    );
    return {
      latestLeaveAt: win.latestLeaveTime.toISOString(),
      latestLeaveLabel: win.latestLeaveLabel,
      slackMin: win.slackMin,
      startedAt: now.toISOString()
    };
  }, [spot, trip, id, origin, dest]);
  if (!spot) return /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { back: "/", title: t("spotNotFound") });
  const st = getSpotText(spot, lang);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-dvh pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { back: "/", title: isBlindActive ? t("blindWalkingTitle") : spot.unlocked ? st.name : t("goTitle") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 px-4", children: [
      isBlindActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        HeatView,
        {
          spotId: spot.id,
          spotCoord: { lat: spot.lat, lng: spot.lng },
          destLabel,
          pos,
          locStatus: status,
          locSource: source,
          onRetryGps: request,
          effectiveDistM: effectiveBlindDist,
          blindState,
          clueIndex: trip?.spotId === id ? trip.clueIndex ?? 0 : 0,
          cropIndex: trip?.spotId === id ? trip.cropIndex ?? 0 : 0,
          leaveWindow: fallbackLeave,
          onReveal: () => setRevealed(true)
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "overflow-hidden rounded-[28px] bg-white shadow-xl ring-1 ring-sumi/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(PlacePhoto, { placeId: spot.id, alt: st.name, priority: true, className: "h-36 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-sumi via-sumi/45 to-black/15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-5 bottom-3.5 text-washi", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-[0.3em] text-kin", children: st.area }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 font-serif text-xl leading-snug", children: st.name })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-sumi px-5 py-3 text-washi", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[13px] text-washi/85", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("distToHere", { dist: formatDistance(dist), min: walkMinutes(dist) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-washi/40", children: "→" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-white/10 py-0.5 pl-0.5 pr-2 text-[12px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PlacePhoto, { placeId: dest.id, alt: "", className: "h-4 w-4 shrink-0 rounded-full" }),
              destLabel
            ] })
          ] }),
          !pos && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 flex flex-wrap items-center gap-2 text-[11px] text-washi/55", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("fallbackOriginNote") }),
            (status === "denied" || status === "timeout" || status === "unavailable") && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: request, className: "text-kin underline underline-offset-2", children: t("retry") })
          ] }),
          source === "demo" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] text-kin/80", children: t("demoOriginNote") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(EchoMap, { spots: [spot], userPos: pos, targetId: spot.id, destination, fit: "target", className: "h-64 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "btn-ghost w-full text-center", href: googleWalkingUrl(dest, pos ?? void 0, spot), target: "_blank", rel: "noreferrer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "route", className: "h-4 w-4 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: t("openRoute", { dest: destLabel }) })
        ] }) })
      ] }),
      spot.unlocked ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-primary w-full bg-kin py-4 text-sumi shadow-kin/30", onClick: () => navigate(`/spot/${spot.id}`), children: t("seeCardsBtn") }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-[28px] bg-white p-5 shadow-lg ring-1 ring-sumi/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-kin/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full border border-kin/50 animate-pulseRing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "lock", className: "h-5 w-5 text-[#8a6a1f]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: t("waitingCards", { n: spot.postCount }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-sumi/55", children: t("autoUnlockHint", { r: spot.unlockRadiusM }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            "data-testid": "checkin-button",
            className: "btn-primary mt-4 w-full",
            disabled: busy,
            onClick: () => checkIn(spot, { fromBlind: isBlindActive }),
            children: busy ? t("checkingIn") : inRange ? t("receiveCards") : t("checkInArrived")
          }
        )
      ] }),
      !isBlindActive && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-[28px] bg-white p-5 shadow-lg ring-1 ring-sumi/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label mb-3", children: t("checkBeforeGo") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccessInfo, { spot, arriveInMin: walkMinutes(dist) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "w-full py-2 text-center text-[13px] text-sumi/50 underline underline-offset-4",
          onClick: () => {
            saveTrip(null);
            navigate("/");
          },
          children: t("cancelDetour")
        }
      )
    ] })
  ] });
}

const TINTS = ["from-[#e9dcc3] to-[#d4b98c]", "from-[#dfe7dc] to-[#a9c49a]", "from-[#e6e0ee] to-[#b9aed3]", "from-[#f1d9cf] to-[#d9a08c]"];
function MessageCard({ echo, label, onChanged }) {
  const { backend } = useData();
  const { lang, t } = useI18n();
  const toast = useToast();
  const [liked, setLiked] = reactExports.useState(echo.likedByMe);
  const [count, setCount] = reactExports.useState(echo.likeCount);
  const [pop, setPop] = reactExports.useState(0);
  const [pending, setPending] = reactExports.useState(false);
  const [menu, setMenu] = reactExports.useState(null);
  const tint = TINTS[echo.id.charCodeAt(echo.id.length - 1) % TINTS.length];
  const reportReasons = getReportReasons(lang);
  const like = async () => {
    if (pending) return;
    setPending(true);
    const nextLiked = !liked;
    setLiked(nextLiked);
    setCount((c) => c + (nextLiked ? 1 : -1));
    if (nextLiked) setPop((p) => p + 1);
    try {
      const r = await backend.toggleLike(echo.id);
      setLiked(r.liked);
      setCount(r.likeCount);
    } catch (e) {
      setLiked(!nextLiked);
      setCount((c) => c + (nextLiked ? -1 : 1));
      toast(e instanceof Error ? e.message : t("likeError"), "error");
    } finally {
      setPending(false);
    }
  };
  const run = async (fn, ok) => {
    try {
      await fn();
      toast(ok);
      onChanged();
    } catch (e) {
      toast(e instanceof Error ? e.message : t("actionError"), "error");
    }
    setMenu(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_-20px_rgba(31,42,36,.45)] ring-1 ring-sumi/5", children: [
    echo.photoUrl ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[55%] shrink-0 bg-sumi/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: echo.photoUrl, alt: t("cardAuthorPhotoAlt", { name: echo.authorName }), className: "h-full w-full object-cover", draggable: false }),
      echo.isSample && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-3 rounded-full bg-black/40 px-2 py-0.5 text-[10px] text-white", children: t("sampleImage") })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative grid h-[38%] shrink-0 place-items-center bg-gradient-to-br ${tint}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-6xl text-white/70", children: "“" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[11px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-kin/15 px-2 py-0.5 text-[#7a5d17]", children: label }),
        echo.isSample && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-sumi/5 px-2 py-0.5 text-sumi/50", children: t("sampleTag") }),
        echo.mine && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-moss/10 px-2 py-0.5 text-moss-dark", children: t("youTag") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "ml-auto grid h-8 w-8 place-items-center rounded-full text-sumi/40 hover:bg-sumi/5", onClick: () => setMenu("menu"), "aria-label": t("menuAria"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "more" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 line-clamp-4 break-words font-serif text-[18px] leading-[1.75]", children: echo.body }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center pt-3 text-[12px] text-sumi/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: echo.authorName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1.5", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: echo.createdAt, children: formatRelativeTime(echo.createdAt, lang) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: like, className: `relative ml-auto inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 transition ${liked ? "bg-shu/10 text-shu" : "bg-washi"}`, "aria-pressed": liked, "aria-label": liked ? t("unlikeAria") : t("likeAria"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: pop ? "animate-pop" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "heart", className: `h-4 w-4 ${liked ? "fill-shu" : ""}` }) }, pop),
          pop > 0 && liked && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-2 top-1 h-6 w-6 rounded-full bg-shu/30 animate-glow" }, `g${pop}`),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums", children: count })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: menu && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[3500] flex items-end bg-sumi/40 backdrop-blur-sm",
        onClick: () => setMenu(null),
        onPointerDown: (e) => e.stopPropagation(),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { y: 240 },
            animate: { y: 0 },
            exit: { y: 240 },
            transition: { type: "spring", stiffness: 320, damping: 28 },
            className: "mx-auto w-full max-w-md rounded-t-3xl bg-washi p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",
            onClick: (e) => e.stopPropagation(),
            children: [
              menu === "menu" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                echo.mine ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-2xl bg-white p-4 text-left text-shu", onClick: () => setMenu("delete"), children: t("deleteCard") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-2xl bg-white p-4 text-left", onClick: () => setMenu("report"), children: t("reportCard") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-2xl p-4 text-sumi/60", onClick: () => setMenu(null), children: t("cancel") })
              ] }),
              menu === "delete" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-2 py-3 text-sm", children: t("deleteConfirm") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-ghost flex-1", onClick: () => setMenu(null), children: t("stopDelete") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-primary flex-1 bg-shu shadow-shu/20", onClick: () => run(() => backend.deleteEcho(echo.id), t("deletedToast")), children: t("confirmDelete") })
                ] })
              ] }),
              menu === "report" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-2 py-2 text-sm text-sumi/70", children: t("reportPrompt") }),
                reportReasons.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-2xl bg-white p-3.5 text-left text-sm", onClick: () => run(() => backend.reportEcho(echo.id, r), t("reportedToast")), children: r }, r))
              ] })
            ]
          }
        )
      }
    ) })
  ] });
}

function CardComposer({ spotId, onPosted, onClose }) {
  const { backend, session } = useData();
  const { t } = useI18n();
  const [body, setBody] = reactExports.useState("");
  const [photo, setPhoto] = reactExports.useState(null);
  const [preview, setPreview] = reactExports.useState(null);
  const [busy, setBusy] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const fileRef = reactExports.useRef(null);
  reactExports.useEffect(() => () => void (preview && URL.revokeObjectURL(preview)), [preview]);
  const pick = async (f) => {
    if (!f) return;
    setBusy("photo");
    setError(null);
    try {
      const b = await processPhoto(f);
      setPhoto(b);
      setPreview(URL.createObjectURL(b));
    } catch (e) {
      setError(e instanceof Error ? e.message : t("spotLoadError"));
    } finally {
      setBusy(false);
    }
  };
  const submit = async () => {
    setBusy("post");
    setError(null);
    try {
      await backend.createEcho(spotId, { category: "memory", body, photo: photo ?? void 0 });
      onPosted();
    } catch (e) {
      setError(e instanceof Error ? e.message : t("actionError"));
      setBusy(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[3000] flex items-end bg-sumi/50 backdrop-blur-sm",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { y: 280 },
          animate: { y: 0 },
          exit: { y: 280 },
          transition: { type: "spring", stiffness: 320, damping: 28 },
          className: "mx-auto w-full max-w-md rounded-t-[2rem] bg-washi p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]",
          onClick: (e) => e.stopPropagation(),
          role: "dialog",
          "aria-label": t("composerTitle"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-xl", children: t("composerTitle") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "ml-auto grid h-9 w-9 place-items-center rounded-full hover:bg-sumi/5", onClick: onClose, "aria-label": t("closeAria"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileRef, type: "file", accept: "image/*", className: "hidden", onChange: (e) => pick(e.target.files?.[0]) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-sumi/5", children: [
              preview ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: preview, alt: t("chosenPhotoAlt"), className: "aspect-[4/3] w-full object-cover" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-black/50 text-white", onClick: () => {
                  setPhoto(null);
                  setPreview(null);
                }, "aria-label": t("removePhotoAria"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "close", className: "h-4 w-4" }) })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#efe6d2] to-[#e2d3b3] text-sumi/60", onClick: () => fileRef.current?.click(), disabled: !!busy, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "camera", className: "h-8 w-8" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: busy === "photo" ? t("preparingPhoto") : t("pickPhotoLabel") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: body, onChange: (e) => setBody(e.target.value.slice(0, MAX_BODY)), rows: 2, placeholder: t("bodyPlaceholder"), className: "w-full resize-none border-0 bg-white px-4 py-3 font-serif text-[17px] leading-relaxed placeholder:text-sumi/30 focus:ring-0", "aria-label": t("bodyAria") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "px-4 pb-2 text-right text-[11px] text-sumi/40", children: [
                body.length,
                "/",
                MAX_BODY
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[11px] leading-relaxed text-sumi/45", children: t("exifNote", { name: session.displayName }) }),
            error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 rounded-xl bg-shu/10 px-3 py-2 text-sm text-shu", children: error }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-primary mt-4 w-full bg-kin py-4 font-bold text-sumi shadow-kin/30", disabled: !body.trim() || !!busy, onClick: submit, children: busy === "post" ? t("postingBtn") : busy === "photo" ? t("preparingPhoto") : t("postBtn") })
          ]
        }
      )
    }
  );
}

const ECHO_STACK_LAYERS = [
  { x: -6, y: 11, rotate: -2.4, scale: 0.965 },
  { x: 7, y: 20, rotate: 2.1, scale: 0.93 }
];
const spotCardVariants = {
  enter: ({ dropped }) => dropped ? { y: -140, scale: 1.06, rotate: -3, opacity: 0 } : { y: 34, x: -10, scale: 0.93, rotate: -2.2, opacity: 0 },
  center: { y: 0, x: 0, scale: 1, rotate: 0, opacity: 1 },
  exit: ({ dir }) => ({
    x: dir === "left" ? -440 : 440,
    y: 26,
    rotate: dir === "left" ? -20 : 20,
    opacity: 0,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
  })
};
const reducedSpotVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.16 } },
  exit: { opacity: 0, transition: { duration: 0.12 } }
};
function Spot({ id }) {
  const { backend, version } = useData();
  const { pos } = useLocation();
  const { lang, t } = useI18n();
  const prefersReduced = usePrefersReducedMotion();
  const toast = useToast();
  const [view, setView] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  const [index, setIndex] = reactExports.useState(0);
  const [composing, setComposing] = reactExports.useState(false);
  const [justPosted, setJustPosted] = reactExports.useState(false);
  const [animKey, setAnimKey] = reactExports.useState(0);
  const [exitDir, setExitDir] = reactExports.useState("left");
  const dragX = useMotionValue(0);
  const peekY = useTransform(dragX, [-160, 0, 160], [0, 11, 0]);
  const peekScale = useTransform(dragX, [-160, 0, 160], [1, 0.965, 1]);
  const peekRotate = useTransform(dragX, [-160, 0, 160], [0, -2.4, 0]);
  const trip = loadTrip();
  const dest = destById(trip?.destId ?? "jr-nara");
  const destLabel = getDestLabel(dest, lang);
  const load = reactExports.useCallback(async () => {
    try {
      setView(await backend.getSpot(id));
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : t("spotLoadError"));
    }
  }, [backend, id, t]);
  reactExports.useEffect(() => {
    void load();
  }, [load, version]);
  const echoCount = view?.unlocked ? view.echoes.length : 0;
  reactExports.useEffect(() => {
    if (echoCount > 0) {
      triggerHaptic(15);
    }
  }, [echoCount]);
  if (error)
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-dvh", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { back: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-sumi/60", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-ghost mt-4", onClick: load, children: t("loadRetryBtn") })
      ] })
    ] });
  if (!view)
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-dvh", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { back: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-6 h-[460px] max-w-[340px] px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skeleton h-full rounded-[28px]" }) })
    ] });
  const { spot } = view;
  const st = getSpotText(spot, lang);
  if (!view.unlocked)
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-dvh pb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { back: "/", title: t("notUnlockedTitle") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LockedEchoes, { spot }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-primary w-full", onClick: () => navigate(`/go/${spot.id}`), children: t("goToSpotBtn") })
      ] })
    ] });
  const cards = view.echoes;
  const current = cards[index];
  const older = (d) => {
    if (prefersReduced) dragX.set(0);
    else void animate(dragX, 0, { type: "spring", stiffness: 300, damping: 26 });
    setExitDir(d);
    setIndex((i) => {
      if (d === "right") return Math.max(0, i - 1);
      return Math.min(cards.length, i + 1);
    });
  };
  const behind = Math.min(2, Math.max(0, cards.length - index - 1));
  const finishTrip = () => {
    saveTrip(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-dvh flex-col pb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { back: "/", title: st.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-4 flex items-center gap-3 rounded-2xl bg-white/75 p-2.5 ring-1 ring-sumi/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PlacePhoto, { placeId: spot.id, alt: st.name, className: "h-11 w-14 shrink-0 rounded-xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-sumi/50", children: st.area }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[12px] text-sumi/75", children: cards.length > 0 ? t("stackedCards", { n: cards.length }) : t("noCardsYet") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mt-4 flex-1 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative isolate mx-auto h-[460px] max-w-[340px]", children: [
        Array.from({ length: behind }).map((_, i) => {
          const layer = ECHO_STACK_LAYERS[i] ?? ECHO_STACK_LAYERS[ECHO_STACK_LAYERS.length - 1];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              "data-testid": `echo-stack-behind-${i}`,
              style: i === 0 && !prefersReduced ? { zIndex: -1, y: peekY, scale: peekScale, rotate: peekRotate } : { zIndex: -i - 1 },
              initial: prefersReduced ? { opacity: 0 } : { y: layer.y + 18, scale: layer.scale - 0.03, rotate: 0, opacity: 0 },
              animate: prefersReduced ? { opacity: 0.9 - i * 0.25 } : {
                x: layer.x,
                y: layer.y,
                rotate: layer.rotate,
                scale: layer.scale,
                opacity: 0.94 - i * 0.22
              },
              transition: prefersReduced ? { duration: 0.16 } : { type: "spring", stiffness: 260, damping: 24 },
              className: "absolute inset-0 rounded-[28px] border border-kin/20 bg-[#faf6ed] shadow-lg ring-1 ring-sumi/10"
            },
            `behind-${index + i}`
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, custom: { dropped: justPosted && index === 0, dir: exitDir }, children: current ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: prefersReduced ? reducedSpotVariants : spotCardVariants,
            initial: "enter",
            animate: "center",
            exit: "exit",
            custom: { dropped: justPosted && index === 0, dir: exitDir },
            transition: prefersReduced ? { duration: 0.16 } : { type: "spring", stiffness: 240, damping: 22 },
            className: "absolute inset-0",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SwipeCard, { testId: "swipe-card", dragX, onSwipe: older, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              MessageCard,
              {
                echo: current,
                label: index === 0 ? t("latestCard") : t("nthCard", { n: index + 1 }),
                onChanged: load
              }
            ) })
          },
          `${current.id}-${animKey}`
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: prefersReduced ? { opacity: 0 } : { y: 32, scale: 0.94, opacity: 0 },
            animate: prefersReduced ? { opacity: 1 } : { y: 0, scale: 1, opacity: 1 },
            exit: { opacity: 0 },
            transition: prefersReduced ? { duration: 0.16 } : { type: "spring", stiffness: 260, damping: 24 },
            className: "absolute inset-0 grid place-items-center rounded-[28px] bg-white p-8 text-center shadow-xl ring-1 ring-sumi/5",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-xl", children: cards.length ? t("firstCardTitle") : t("firstTravelerTitle") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[13px] text-sumi/60", children: cards.length ? t("firstCardDesc") : t("firstTravelerDesc") }),
              cards.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-ghost mt-5", onClick: () => setIndex(0), children: t("backToLatest") })
            ] })
          },
          "spot-empty"
        ) })
      ] }),
      cards.length > 0 && current && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-5 flex max-w-[340px] items-center text-[12px] text-sumi/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-2 py-1 disabled:opacity-30", disabled: index === 0, onClick: () => older("right"), children: t("prevNewer") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex-1 text-center tabular-nums", children: [
          index + 1,
          " / ",
          cards.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-2 py-1", onClick: () => older("left"), children: t("nextOlder") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-5 w-full max-w-[372px] space-y-2 px-4", children: justPosted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[13px] text-moss-dark", children: t("postedBanner") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "btn-primary w-full py-4", href: googleWalkingUrl(dest, pos ?? void 0), target: "_blank", rel: "noreferrer", onClick: finishTrip, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "route", className: "h-4 w-4" }),
        " ",
        t("headToDest", { dest: destLabel })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-ghost w-full", onClick: () => {
        finishTrip();
        navigate("/?auto=1");
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "spark", className: "h-4 w-4" }),
        " ",
        t("drawNextBtn")
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-primary w-full bg-kin py-4 font-bold text-sumi shadow-kin/30", onClick: () => setComposing(true), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "camera", className: "h-4 w-4" }),
        " ",
        t("leaveCardBtn")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn-ghost flex-1 px-2 text-[13px]", href: googleWalkingUrl(dest, pos ?? void 0), target: "_blank", rel: "noreferrer", children: t("toDestShort", { dest: destLabel }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-ghost flex-1 px-2 text-[13px]", onClick: () => {
          finishTrip();
          navigate("/?auto=1");
        }, children: t("drawNextBtn") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: composing && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CardComposer,
      {
        spotId: spot.id,
        onClose: () => setComposing(false),
        onPosted: async () => {
          setComposing(false);
          await load();
          setIndex(0);
          setJustPosted(true);
          setAnimKey((k) => k + 1);
          toast(t("postedToast"));
        }
      }
    ) })
  ] });
}

function Me() {
  const { backend, session, spots, version, refreshSession } = useData();
  const { lang, t } = useI18n();
  const toast = useToast();
  const [mine, setMine] = reactExports.useState(null);
  const [loadError, setLoadError] = reactExports.useState(false);
  const [name, setName] = reactExports.useState(session.displayName);
  const loadMine = reactExports.useCallback(() => {
    setLoadError(false);
    backend.listMyEchoes().then((res) => {
      setMine(res);
      setLoadError(false);
    }).catch(() => {
      setLoadError(true);
      setMine([]);
    });
  }, [backend]);
  reactExports.useEffect(() => {
    loadMine();
  }, [loadMine, version]);
  reactExports.useEffect(() => setName(session.displayName), [session.displayName]);
  const visited = spots.filter((s) => s.unlocked).sort((a, b) => (b.unlockedAt ?? "").localeCompare(a.unlockedAt ?? ""));
  const dateLocale = lang === "en" ? "en-US" : lang === "zh" ? "zh-CN" : "ja-JP";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-dvh pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { back: "/", title: t("meTitle") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-3xl bg-white p-4 ring-1 ring-sumi/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label", children: t("displayNameLabel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value.slice(0, 20)), className: "min-w-0 flex-1 rounded-full border-0 bg-washi px-4 py-2.5 text-sm ring-1 ring-sumi/10", "aria-label": t("displayNameLabel") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "btn-primary px-5 py-2.5",
              disabled: name === session.displayName,
              onClick: async () => {
                await backend.setDisplayName(name);
                await refreshSession();
                toast(t("savedNameToast"));
              },
              children: t("saveBtn")
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[11px] text-sumi/45", children: t("displayNameNote") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "px-1 font-serif text-lg", children: t("yourCardsTitle") }),
        loadError ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 rounded-3xl bg-white p-5 text-center ring-1 ring-sumi/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-sumi/60", children: t("spotLoadError") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-ghost mt-3", onClick: loadMine, children: t("loadRetryBtn") })
        ] }) : mine === null ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skeleton mt-2 h-20" }) : mine.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "py-6 text-center text-sm text-sumi/50", children: t("noMyCards") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-2", children: mine.map((e) => {
          const matchedSpot = spots.find((s) => s.id === e.spotId);
          const spotLabel = matchedSpot ? getSpotText(matchedSpot, lang).name : e.spotName;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex w-full gap-3 rounded-3xl bg-white p-3 text-left ring-1 ring-sumi/5", onClick: () => navigate(`/spot/${e.spotId}`), children: [
            e.photoUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: e.photoUrl, alt: "", className: "h-16 w-16 shrink-0 rounded-2xl object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-[11px] text-sumi/50", children: [
                spotLabel,
                " · ",
                formatRelativeTime(e.createdAt, lang)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 line-clamp-2 block font-serif text-sm", children: e.body }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-1 inline-flex items-center gap-1 text-[12px] text-shu", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "heart", className: "h-3.5 w-3.5 fill-shu" }),
                e.likeCount > 0 ? t("reachedCount", { n: e.likeCount }) : t("waitingNextTraveler")
              ] })
            ] })
          ] }) }, e.id);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "px-1 font-serif text-lg", children: t("visitedPlacesTitle", { visited: visited.length, total: spots.length }) }),
        visited.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "py-6 text-center text-sm text-sumi/50", children: t("noVisitedPlaces") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-2", children: visited.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex w-full items-center gap-3 rounded-3xl bg-white p-3 text-left ring-1 ring-sumi/5", onClick: () => navigate(`/spot/${s.id}`), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PlacePhoto, { placeId: s.id, alt: getSpotText(s, lang).name, className: "h-12 w-12 shrink-0 rounded-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block truncate font-serif", children: getSpotText(s, lang).name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-[11px] text-sumi/50", children: [
              s.unlockedAt && new Date(s.unlockedAt).toLocaleDateString(dateLocale),
              " · ",
              t("cardsUnit", { n: s.postCount })
            ] })
          ] })
        ] }) }, s.id)) })
      ] })
    ] })
  ] });
}

function About() {
  const { manifest, error, retry } = usePlaceManifestState();
  const { lang, t } = useI18n();
  const placeIds = manifest ? Object.keys(manifest.places) : [];
  const real = getRealFeatures(lang);
  const demo = getDemoItems(isMockMode, DEV_TOOLS, lang);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-dvh pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { back: "/", title: t("aboutTitle"), right: /* @__PURE__ */ jsxRuntimeExports.jsx(LangSwitcher, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "px-1 font-serif text-[17px] leading-relaxed", children: [
        t("aboutLead1"),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        t("aboutLead2")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-3xl bg-white p-5 ring-1 ring-sumi/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-moss-dark", children: t("aboutRealTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 list-disc space-y-1 pl-5 text-[13px] text-sumi/75", children: real.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: r }, r)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-3xl bg-white p-5 ring-1 ring-sumi/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-fuji", children: t("aboutDemoTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 list-disc space-y-1 pl-5 text-[13px] text-sumi/75", children: demo.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: r }, r)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-3xl bg-white p-5 ring-1 ring-sumi/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sumi", children: t("aboutCreditsTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] leading-relaxed text-sumi/60", children: t("aboutCreditsDesc") }),
        placeIds.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2.5", children: placeIds.map((pid) => {
          const entry = manifest?.places[pid];
          const p = resolvePlacePhoto(manifest, pid);
          if (!p) return null;
          const displayName = getPlaceDisplayName(pid, p.name, entry?.nameEn, lang);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 rounded-2xl bg-washi/65 p-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PlacePhoto, { placeId: pid, alt: displayName, className: "h-12 w-14 shrink-0 rounded-xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 text-[12px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-medium text-sumi", children: displayName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "truncate text-sumi/70", children: [
                t("aboutAuthor"),
                p.artist
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 flex flex-wrap items-center gap-x-2 text-[11px]", children: [
                p.licenseUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: p.licenseUrl, target: "_blank", rel: "noreferrer", className: "text-moss-dark underline underline-offset-2", children: p.license }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sumi/60", children: p.license }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sumi/30", children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: p.commonsUrl, target: "_blank", rel: "noreferrer", className: "text-sumi/60 underline underline-offset-2", children: "Wikimedia Commons" })
              ] })
            ] })
          ] }, pid);
        }) }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-2xl bg-washi/80 p-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-sumi/65", children: t("aboutLoadFailed") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: retry, className: "btn-ghost mt-2 px-4 py-1.5 text-[12px]", children: t("loadRetryBtn") })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[12px] text-sumi/50", children: t("aboutLoading") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-3xl bg-white p-5 text-[12px] leading-relaxed text-sumi/60 ring-1 ring-sumi/5", children: [
        t("aboutFootnote"),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "地図 / Map © OpenStreetMap contributors"
      ] })
    ] })
  ] });
}

const DevPanel = null;
function Screens() {
  const route = useRoute();
  const prefersReduced = usePrefersReducedMotion();
  const [rawPath, query = ""] = route.split("?");
  const path = rawPath.split("#")[0];
  const q = new URLSearchParams(query);
  const go = path.match(/^\/go\/([\w-]+)$/);
  const spot = path.match(/^\/spot\/([\w-]+)$/);
  const prevPath = reactExports.useRef(path);
  const goingHome = path === "/" && prevPath.current !== "/";
  reactExports.useEffect(() => {
    prevPath.current = path;
  }, [path]);
  const useClassicDraw = path === "/classic" || path === "/draw" || path === "/" && (q.get("mode") === "blind" || q.get("auto") === "1");
  let screenKey = "fortune";
  let screen;
  if (go) {
    screenKey = `go-${go[1]}`;
    screen = /* @__PURE__ */ jsxRuntimeExports.jsx(Go, { id: go[1], blind: q.get("mode") === "blind" });
  } else if (spot) {
    screenKey = `spot-${spot[1]}`;
    screen = /* @__PURE__ */ jsxRuntimeExports.jsx(Spot, { id: spot[1] });
  } else if (path === "/me") {
    screenKey = "me";
    screen = /* @__PURE__ */ jsxRuntimeExports.jsx(Me, {});
  } else if (path === "/about") {
    screenKey = "about";
    screen = /* @__PURE__ */ jsxRuntimeExports.jsx(About, {});
  } else if (useClassicDraw) {
    screenKey = "draw";
    screen = /* @__PURE__ */ jsxRuntimeExports.jsx(Draw, { auto: q.get("auto") === "1", initialBlind: q.get("mode") === "blind" }, route);
  } else {
    screenKey = "fortune";
    screen = /* @__PURE__ */ jsxRuntimeExports.jsx(MistFortune, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto min-h-dvh max-w-md overflow-x-clip bg-washi sm:shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: prefersReduced ? { opacity: 0 } : { x: goingHome ? -72 : 96, opacity: 0 },
        animate: prefersReduced ? { opacity: 1 } : { x: 0, opacity: 1 },
        exit: prefersReduced ? { opacity: 0, transition: { duration: 0.12 } } : { x: goingHome ? 72 : -56, opacity: 0, transition: { duration: 0.12, ease: "easeIn" } },
        transition: prefersReduced ? { duration: 0.16 } : { type: "spring", stiffness: 360, damping: 30, mass: 0.85 },
        className: "min-h-dvh",
        children: screen
      },
      screenKey
    ) }),
    DevPanel
  ] });
}
function App() {
  const route = useRoute();
  const [rawPath, query = ""] = route.split("?");
  const path = rawPath.split("#")[0];
  const q = new URLSearchParams(query);
  const isFortuneHome = path === "/" && q.get("mode") !== "blind" && q.get("auto") !== "1";
  reactExports.useEffect(() => {
    void loadPlaceManifest();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsxRuntimeExports.jsx(I18nProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToastProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LocationProvider, { autoResume: !isFortuneHome, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DataProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(UnlockProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Screens, {}) }) }) }) }) }) });
}

registerSW({ immediate: true });
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
