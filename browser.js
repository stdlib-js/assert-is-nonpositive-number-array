// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,c){var a,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(u.call(t,e)||l.call(t,e)?(a=t.__proto__,t.__proto__=r,delete t[e],t[e]=c.value,t.__proto__=a):t[e]=c.value),p="get"in c,y="set"in c,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,c.get),y&&i&&i.call(t,e,c.set),t};function a(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,m="function"==typeof Symbol?Symbol.toStringTag:"",_=y()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[m],i=m,e=null!=(o=t)&&s.call(o,i);try{t[m]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[m]=r:delete t[m],n}:function(t){return b.call(t)},v=Number,d=v.prototype.toString,g=y();function j(t){return"object"==typeof t&&(t instanceof v||(g?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function h(t){return f(t)||j(t)}function S(t){return f(t)&&t<=0}function w(t){return j(t)&&t.valueOf()<=0}function O(t){return S(t)||w(t)}a(h,"isPrimitive",f),a(h,"isObject",j),a(O,"isPrimitive",S),a(O,"isObject",w);var P=Math.floor;function T(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&(e=t.length,P(e)===e)&&t.length>=0&&t.length<=4294967295;var e}function E(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!T(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}var N=E(O.isPrimitive),x=E(O.isObject),A=E(O);return a(A,"primitives",N),a(A,"objects",x),A},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isNonPositiveNumberArray=e();
//# sourceMappingURL=browser.js.map
