// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return t({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__;var c=e,f=function(t,r,e){var c,f,p,v;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(a.call(t,r)||l.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=c):t[r]=e.value),p="get"in e,v="set"in e,f&&(p||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),v&&u&&u.call(t,r,e.set),t},p=r()?c:f;var v=function(t,r,e){p(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})};var y=function(t){return"number"==typeof t};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return b&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,m=s;var g=function(t){return m.call(t)},j=Object.prototype.hasOwnProperty;var d=function(t,r){return null!=t&&j.call(t,r)},h="function"==typeof Symbol?Symbol.toStringTag:"",O=d,S=h,w=s;var P=g,T=function(t){var r,e,n;if(null==t)return w.call(t);e=t[S],r=O(t,S);try{t[S]=void 0}catch(r){return w.call(t)}return n=w.call(t),r?t[S]=e:delete t[S],n},E=_()?T:P,V=Number,k=V.prototype.toString;var x=E,A=V,G=function(t){try{return k.call(t),!0}catch(t){return!1}},M=_();var N=function(t){return"object"==typeof t&&(t instanceof A||(M?G(t):"[object Number]"===x(t)))},C=y,F=N;var q=v,z=function(t){return C(t)||F(t)},B=N;q(z,"isPrimitive",y),q(z,"isObject",B);var D=z.isPrimitive;var H=function(t){return D(t)&&t<=0},I=z.isObject;var J=function(t){return I(t)&&t.valueOf()<=0},K=H,L=J;var Q=v,R=function(t){return K(t)||L(t)},U=J;Q(R,"isPrimitive",H),Q(R,"isObject",U);var W=R,X=Math.floor;var Y=function(t){return X(t)===t};var Z=function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&Y(t.length)&&t.length>=0&&t.length<=4294967295};var $=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!Z(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}},tt=$(W);v(tt,"primitives",$(W.isPrimitive)),v(tt,"objects",$(W.isObject));export{tt as default};
//# sourceMappingURL=mod.js.map