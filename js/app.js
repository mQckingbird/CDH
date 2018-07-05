// mQ dQta v7.0.0

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).PouchDB=e()}}(function(){return function o(s,a,u){function c(t,e){if(!a[t]){if(!s[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(f)return f(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var i=a[t]={exports:{}};s[t][0].call(i.exports,function(e){return c(s[t][1][e]||e)},i,i.exports,o,s,a,u)}return a[t].exports}for(var f="function"==typeof require&&require,e=0;e<u.length;e++)c(u[e]);return c}({1:[function(e,t,n){"use strict";t.exports=function(r){return function(){var e=arguments.length;if(e){for(var t=[],n=-1;++n<e;)t[n]=arguments[n];return r.call(this,t)}return r.call(this,[])}}},{}],2:[function(e,t,n){var u=Object.create||function(e){var t=function(){};return t.prototype=e,new t},s=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return n},o=Function.prototype.bind||function(e){var t=this;return function(){return t.apply(e,arguments)}};function r(){this._events&&Object.prototype.hasOwnProperty.call(this,"_events")||(this._events=u(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0}((t.exports=r).EventEmitter=r).prototype._events=void 0,r.prototype._maxListeners=void 0;var i,a=10;try{var c={};Object.defineProperty&&Object.defineProperty(c,"x",{value:0}),i=0===c.x}catch(e){i=!1}function f(e){return void 0===e._maxListeners?r.defaultMaxListeners:e._maxListeners}function l(e,t,n,r){var i,o,s;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((o=e._events)?(o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]):(o=e._events=u(null),e._eventsCount=0),s){if("function"==typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),!s.warned&&(i=f(e))&&0<i&&s.length>i){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+' "'+String(t)+'" listeners added. Use emitter.setMaxListeners() to increase limit.');a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=s.length,"object"==typeof console&&console.warn&&console.warn("%s: %s",a.name,a.message)}}else s=o[t]=n,++e._eventsCount;return e}function d(){if(!this.fired)switch(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length){case 0:return this.listener.call(this.target);case 1:return this.listener.call(this.target,arguments[0]);case 2:return this.listener.call(this.target,arguments[0],arguments[1]);case 3:return this.listener.call(this.target,arguments[0],arguments[1],arguments[2]);default:for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];this.listener.apply(this.target,e)}}function h(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=o.call(d,r);return i.listener=n,r.wrapFn=i}function p(e,t,n){var r=e._events;if(!r)return[];var i=r[t];return i?"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):y(i,i.length):[]}function v(e){var t=this._events;if(t){var n=t[e];if("function"==typeof n)return 1;if(n)return n.length}return 0}function y(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}i?Object.defineProperty(r,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||e!=e)throw new TypeError('"defaultMaxListeners" must be a positive number');a=e}}):r.defaultMaxListeners=a,r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},r.prototype.getMaxListeners=function(){return f(this)},r.prototype.emit=function(e){var t,n,r,i,o,s,a="error"===e;if(s=this._events)a=a&&null==s.error;else if(!a)return!1;if(a){if(1<arguments.length&&(t=arguments[1]),t instanceof Error)throw t;var u=new Error('Unhandled "error" event. ('+t+")");throw u.context=t,u}if(!(n=s[e]))return!1;var c="function"==typeof n;switch(r=arguments.length){case 1:!function(e,t,n){if(t)e.call(n);else for(var r=e.length,i=y(e,r),o=0;o<r;++o)i[o].call(n)}(n,c,this);break;case 2:!function(e,t,n,r){if(t)e.call(n,r);else for(var i=e.length,o=y(e,i),s=0;s<i;++s)o[s].call(n,r)}(n,c,this,arguments[1]);break;case 3:!function(e,t,n,r,i){if(t)e.call(n,r,i);else for(var o=e.length,s=y(e,o),a=0;a<o;++a)s[a].call(n,r,i)}(n,c,this,arguments[1],arguments[2]);break;case 4:!function(e,t,n,r,i,o){if(t)e.call(n,r,i,o);else for(var s=e.length,a=y(e,s),u=0;u<s;++u)a[u].call(n,r,i,o)}(n,c,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=new Array(r-1),o=1;o<r;o++)i[o-1]=arguments[o];!function(e,t,n,r){if(t)e.apply(n,r);else for(var i=e.length,o=y(e,i),s=0;s<i;++s)o[s].apply(n,r)}(n,c,this,i)}return!0},r.prototype.on=r.prototype.addListener=function(e,t){return l(this,e,t,!1)},r.prototype.prependListener=function(e,t){return l(this,e,t,!0)},r.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,h(this,e,t)),this},r.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,h(this,e,t)),this},r.prototype.removeListener=function(e,t){var n,r,i,o,s;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(r=this._events))return this;if(!(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=u(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;0<=o;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),r.removeListener&&this.emit("removeListener",e,s||t)}return this},r.prototype.removeAllListeners=function(e){var t,n,r;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=u(null),this._eventsCount=0):n[e]&&(0==--this._eventsCount?this._events=u(null):delete n[e]),this;if(0===arguments.length){var i,o=s(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=u(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(t)for(r=t.length-1;0<=r;r--)this.removeListener(e,t[r]);return this},r.prototype.listeners=function(e){return p(this,e,!0)},r.prototype.rawListeners=function(e){return p(this,e,!1)},r.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):v.call(e,t)},r.prototype.listenerCount=v,r.prototype.eventNames=function(){return 0<this._eventsCount?Reflect.ownKeys(this._events):[]}},{}],3:[function(e,f,t){(function(t){"use strict";var n,r,e=t.MutationObserver||t.WebKitMutationObserver;if(e){var i=0,o=new e(c),s=t.document.createTextNode("");o.observe(s,{characterData:!0}),n=function(){s.data=i=++i%2}}else if(t.setImmediate||void 0===t.MessageChannel)n="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var e=t.document.createElement("script");e.onreadystatechange=function(){c(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.document.documentElement.appendChild(e)}:function(){setTimeout(c,0)};else{var a=new t.MessageChannel;a.port1.onmessage=c,n=function(){a.port2.postMessage(0)}}var u=[];function c(){var e,t;r=!0;for(var n=u.length;n;){for(t=u,u=[],e=-1;++e<n;)t[e]();n=u.length}r=!1}f.exports=function(e){1!==u.push(e)||r||n()}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],5:[function(e,t,n){var r,i,o=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var c,f=[],l=!1,d=-1;function h(){l&&c&&(l=!1,c.length?f=c.concat(f):d=-1,f.length&&p())}function p(){if(!l){var e=u(h);l=!0;for(var t=f.length;t;){for(c=f,f=[];++d<t;)c&&c[d].run();d=-1,t=f.length}c=null,l=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new v(e,t)),1!==f.length||l||u(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],6:[function(e,n,r){!function(e){if("object"==typeof r)n.exports=e();else{var t;try{t=window}catch(e){t=self}t.SparkMD5=e()}}(function(f){"use strict";var r=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function c(e,t){var n=e[0],r=e[1],i=e[2],o=e[3];r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[0]-680876936|0)<<7|n>>>25)+r|0)&r|~n&i)+t[1]-389564586|0)<<12|o>>>20)+n|0)&n|~o&r)+t[2]+606105819|0)<<17|i>>>15)+o|0)&o|~i&n)+t[3]-1044525330|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[4]-176418897|0)<<7|n>>>25)+r|0)&r|~n&i)+t[5]+1200080426|0)<<12|o>>>20)+n|0)&n|~o&r)+t[6]-1473231341|0)<<17|i>>>15)+o|0)&o|~i&n)+t[7]-45705983|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[8]+1770035416|0)<<7|n>>>25)+r|0)&r|~n&i)+t[9]-1958414417|0)<<12|o>>>20)+n|0)&n|~o&r)+t[10]-42063|0)<<17|i>>>15)+o|0)&o|~i&n)+t[11]-1990404162|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&i|~r&o)+t[12]+1804603682|0)<<7|n>>>25)+r|0)&r|~n&i)+t[13]-40341101|0)<<12|o>>>20)+n|0)&n|~o&r)+t[14]-1502002290|0)<<17|i>>>15)+o|0)&o|~i&n)+t[15]+1236535329|0)<<22|r>>>10)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[1]-165796510|0)<<5|n>>>27)+r|0)&i|r&~i)+t[6]-1069501632|0)<<9|o>>>23)+n|0)&r|n&~r)+t[11]+643717713|0)<<14|i>>>18)+o|0)&n|o&~n)+t[0]-373897302|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[5]-701558691|0)<<5|n>>>27)+r|0)&i|r&~i)+t[10]+38016083|0)<<9|o>>>23)+n|0)&r|n&~r)+t[15]-660478335|0)<<14|i>>>18)+o|0)&n|o&~n)+t[4]-405537848|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[9]+568446438|0)<<5|n>>>27)+r|0)&i|r&~i)+t[14]-1019803690|0)<<9|o>>>23)+n|0)&r|n&~r)+t[3]-187363961|0)<<14|i>>>18)+o|0)&n|o&~n)+t[8]+1163531501|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r&o|i&~o)+t[13]-1444681467|0)<<5|n>>>27)+r|0)&i|r&~i)+t[2]-51403784|0)<<9|o>>>23)+n|0)&r|n&~r)+t[7]+1735328473|0)<<14|i>>>18)+o|0)&n|o&~n)+t[12]-1926607734|0)<<20|r>>>12)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[5]-378558|0)<<4|n>>>28)+r|0)^r^i)+t[8]-2022574463|0)<<11|o>>>21)+n|0)^n^r)+t[11]+1839030562|0)<<16|i>>>16)+o|0)^o^n)+t[14]-35309556|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[1]-1530992060|0)<<4|n>>>28)+r|0)^r^i)+t[4]+1272893353|0)<<11|o>>>21)+n|0)^n^r)+t[7]-155497632|0)<<16|i>>>16)+o|0)^o^n)+t[10]-1094730640|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[13]+681279174|0)<<4|n>>>28)+r|0)^r^i)+t[0]-358537222|0)<<11|o>>>21)+n|0)^n^r)+t[3]-722521979|0)<<16|i>>>16)+o|0)^o^n)+t[6]+76029189|0)<<23|r>>>9)+i|0,r=((r+=((i=((i+=((o=((o+=((n=((n+=(r^i^o)+t[9]-640364487|0)<<4|n>>>28)+r|0)^r^i)+t[12]-421815835|0)<<11|o>>>21)+n|0)^n^r)+t[15]+530742520|0)<<16|i>>>16)+o|0)^o^n)+t[2]-995338651|0)<<23|r>>>9)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[0]-198630844|0)<<6|n>>>26)+r|0)|~i))+t[7]+1126891415|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[14]-1416354905|0)<<15|i>>>17)+o|0)|~n))+t[5]-57434055|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[12]+1700485571|0)<<6|n>>>26)+r|0)|~i))+t[3]-1894986606|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[10]-1051523|0)<<15|i>>>17)+o|0)|~n))+t[1]-2054922799|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[8]+1873313359|0)<<6|n>>>26)+r|0)|~i))+t[15]-30611744|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[6]-1560198380|0)<<15|i>>>17)+o|0)|~n))+t[13]+1309151649|0)<<21|r>>>11)+i|0,r=((r+=((o=((o+=(r^((n=((n+=(i^(r|~o))+t[4]-145523070|0)<<6|n>>>26)+r|0)|~i))+t[11]-1120210379|0)<<10|o>>>22)+n|0)^((i=((i+=(n^(o|~r))+t[2]+718787259|0)<<15|i>>>17)+o|0)|~n))+t[9]-343485551|0)<<21|r>>>11)+i|0,e[0]=n+e[0]|0,e[1]=r+e[1]|0,e[2]=i+e[2]|0,e[3]=o+e[3]|0}function l(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return n}function d(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return n}function i(e){var t,n,r,i,o,s,a=e.length,u=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=a;t+=64)c(u,l(e.substring(t-64,t)));for(n=(e=e.substring(t-64)).length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)r[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(r[t>>2]|=128<<(t%4<<3),55<t)for(c(u,r),t=0;t<16;t+=1)r[t]=0;return i=(i=8*a).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(i[2],16),s=parseInt(i[1],16)||0,r[14]=o,r[15]=s,c(u,r),u}function n(e){var t,n="";for(t=0;t<4;t+=1)n+=r[e>>8*t+4&15]+r[e>>8*t&15];return n}function s(e){var t;for(t=0;t<e.length;t+=1)e[t]=n(e[t]);return e.join("")}function o(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function a(e){var t,n=[],r=e.length;for(t=0;t<r-1;t+=2)n.push(parseInt(e.substr(t,2),16));return String.fromCharCode.apply(String,n)}function u(){this.reset()}return"5d41402abc4b2a76b9719d911017c592"!==s(i("hello"))&&function(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n},"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function c(e,t){return(e=0|e||0)<0?Math.max(e+t,0):Math.min(e,t)}ArrayBuffer.prototype.slice=function(e,t){var n,r,i,o,s=this.byteLength,a=c(e,s),u=s;return t!==f&&(u=c(t,s)),u<a?new ArrayBuffer(0):(n=u-a,r=new ArrayBuffer(n),i=new Uint8Array(r),o=new Uint8Array(this,a,n),i.set(o),r)}}(),u.prototype.append=function(e){return this.appendBinary(o(e)),this},u.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var t,n=this._buff.length;for(t=64;t<=n;t+=64)c(this._hash,l(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},u.prototype.end=function(e){var t,n,r=this._buff,i=r.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<i;t+=1)o[t>>2]|=r.charCodeAt(t)<<(t%4<<3);return this._finish(o,i),n=s(this._hash),e&&(n=a(n)),this.reset(),n},u.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},u.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},u.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},u.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},u.prototype._finish=function(e,t){var n,r,i,o=t;if(e[o>>2]|=128<<(o%4<<3),55<o)for(c(this._hash,e),o=0;o<16;o+=1)e[o]=0;n=(n=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),r=parseInt(n[2],16),i=parseInt(n[1],16)||0,e[14]=r,e[15]=i,c(this._hash,e)},u.hash=function(e,t){return u.hashBinary(o(e),t)},u.hashBinary=function(e,t){var n=s(i(e));return t?a(n):n},(u.ArrayBuffer=function(){this.reset()}).prototype.append=function(e){var t,n,r,i,o,s=(n=this._buff.buffer,r=e,i=!0,(o=new Uint8Array(n.byteLength+r.byteLength)).set(new Uint8Array(n)),o.set(new Uint8Array(r),n.byteLength),i?o:o.buffer),a=s.length;for(this._length+=e.byteLength,t=64;t<=a;t+=64)c(this._hash,d(s.subarray(t-64,t)));return this._buff=t-64<a?new Uint8Array(s.buffer.slice(t-64)):new Uint8Array(0),this},u.ArrayBuffer.prototype.end=function(e){var t,n,r=this._buff,i=r.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<i;t+=1)o[t>>2]|=r[t]<<(t%4<<3);return this._finish(o,i),n=s(this._hash),e&&(n=a(n)),this.reset(),n},u.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},u.ArrayBuffer.prototype.getState=function(){var e,t=u.prototype.getState.call(this);return t.buff=(e=t.buff,String.fromCharCode.apply(null,new Uint8Array(e))),t},u.ArrayBuffer.prototype.setState=function(e){return e.buff=function(e,t){var n,r=e.length,i=new ArrayBuffer(r),o=new Uint8Array(i);for(n=0;n<r;n+=1)o[n]=e.charCodeAt(n);return t?o:i}(e.buff,!0),u.prototype.setState.call(this,e)},u.ArrayBuffer.prototype.destroy=u.prototype.destroy,u.ArrayBuffer.prototype._finish=u.prototype._finish,u.ArrayBuffer.hash=function(e,t){var n=s(function(e){var t,n,r,i,o,s,a=e.length,u=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=a;t+=64)c(u,d(e.subarray(t-64,t)));for(n=(e=t-64<a?e.subarray(t-64):new Uint8Array(0)).length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)r[t>>2]|=e[t]<<(t%4<<3);if(r[t>>2]|=128<<(t%4<<3),55<t)for(c(u,r),t=0;t<16;t+=1)r[t]=0;return i=(i=8*a).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(i[2],16),s=parseInt(i[1],16)||0,r[14]=o,r[15]=s,c(u,r),u}(new Uint8Array(e)));return t?a(n):n},u})},{}],7:[function(e,t,n){var r=e(10),i=e(11),o=i;o.v1=r,o.v4=i,t.exports=o},{10:10,11:11}],8:[function(e,t,n){for(var i=[],r=0;r<256;++r)i[r]=(r+256).toString(16).substr(1);t.exports=function(e,t){var n=t||0,r=i;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}},{}],9:[function(e,t,n){var r="undefined"!=typeof crypto&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&msCrypto.getRandomValues.bind(msCrypto);if(r){var i=new Uint8Array(16);t.exports=function(){return r(i),i}}else{var o=new Array(16);t.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},{}],10:[function(e,t,n){var p,v,y=e(9),_=e(8),g=0,m=0;t.exports=function(e,t,n){var r=t&&n||0,i=t||[],o=(e=e||{}).node||p,s=void 0!==e.clockseq?e.clockseq:v;if(null==o||null==s){var a=y();null==o&&(o=p=[1|a[0],a[1],a[2],a[3],a[4],a[5]]),null==s&&(s=v=16383&(a[6]<<8|a[7]))}var u=void 0!==e.msecs?e.msecs:(new Date).getTime(),c=void 0!==e.nsecs?e.nsecs:m+1,f=u-g+(c-m)/1e4;if(f<0&&void 0===e.clockseq&&(s=s+1&16383),(f<0||g<u)&&void 0===e.nsecs&&(c=0),1e4<=c)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");g=u,v=s;var l=(1e4*(268435455&(u+=122192928e5))+(m=c))%4294967296;i[r++]=l>>>24&255,i[r++]=l>>>16&255,i[r++]=l>>>8&255,i[r++]=255&l;var d=u/4294967296*1e4&268435455;i[r++]=d>>>8&255,i[r++]=255&d,i[r++]=d>>>24&15|16,i[r++]=d>>>16&255,i[r++]=s>>>8|128,i[r++]=255&s;for(var h=0;h<6;++h)i[r+h]=o[h];return t||_(i)}},{8:8,9:9}],11:[function(e,t,n){var s=e(9),a=e(8);t.exports=function(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||s)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var o=0;o<16;++o)t[r+o]=i[o];return t||a(i)}},{8:8,9:9}],12:[function(e,t,n){"use strict";function h(e,t,n){var r=n[n.length-1];e===r.element&&(n.pop(),r=n[n.length-1]);var i=r.element,o=r.index;if(Array.isArray(i))i.push(e);else if(o===t.length-2){i[t.pop()]=e}else t.push(e)}n.stringify=function(e){var t=[];t.push({obj:e});for(var n,r,i,o,s,a,u,c,f,l,d="";n=t.pop();)if(r=n.obj,d+=n.prefix||"",i=n.val||"")d+=i;else if("object"!=typeof r)d+=void 0===r?null:JSON.stringify(r);else if(null===r)d+="null";else if(Array.isArray(r)){for(t.push({val:"]"}),o=r.length-1;0<=o;o--)s=0===o?"":",",t.push({obj:r[o],prefix:s});t.push({val:"["})}else{for(u in a=[],r)r.hasOwnProperty(u)&&a.push(u);for(t.push({val:"}"}),o=a.length-1;0<=o;o--)f=r[c=a[o]],l=0<o?",":"",l+=JSON.stringify(c)+":",t.push({obj:f,prefix:l});t.push({val:"{"})}return d},n.parse=function(e){for(var t,n,r,i,o,s,a,u,c,f=[],l=[],d=0;;)if("}"!==(t=e[d++])&&"]"!==t&&void 0!==t)switch(t){case" ":case"\t":case"\n":case":":case",":break;case"n":d+=3,h(null,f,l);break;case"t":d+=3,h(!0,f,l);break;case"f":d+=4,h(!1,f,l);break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"-":for(n="",d--;;){if(r=e[d++],!/[\d\.\-e\+]/.test(r)){d--;break}n+=r}h(parseFloat(n),f,l);break;case'"':for(i="",o=void 0,s=0;'"'!==(a=e[d++])||"\\"===o&&s%2==1;)i+=a,"\\"===(o=a)?s++:s=0;h(JSON.parse('"'+i+'"'),f,l);break;case"[":u={element:[],index:f.length},f.push(u.element),l.push(u);break;case"{":c={element:{},index:f.length},f.push(c.element),l.push(c);break;default:throw new Error("unexpectedly reached end of input: "+t)}else{if(1===f.length)return f.pop();h(f.pop(),f,l)}}},{}],13:[function(yr,_r,e){(function(u,e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var O=t(yr(1)),T=t(yr(3)),a=yr(2),r=t(yr(4)),d=t(yr(6)),i=t(yr(7)),o=t(yr(12));function s(e){if(e instanceof ArrayBuffer)return function(e){if("function"==typeof e.slice)return e.slice(0);var t=new ArrayBuffer(e.byteLength),n=new Uint8Array(t),r=new Uint8Array(e);return n.set(r),t}(e);var t=e.size,n=e.type;return"function"==typeof e.slice?e.slice(0,t,n):e.webkitSlice(0,t,n)}var q,x,c=Function.prototype.toString,f=c.call(Object);function R(e){var t,n,r,i;if(!e||"object"!=typeof e)return e;if(Array.isArray(e)){for(t=[],n=0,r=e.length;n<r;n++)t[n]=R(e[n]);return t}if(e instanceof Date)return e.toISOString();if(i=e,"undefined"!=typeof ArrayBuffer&&i instanceof ArrayBuffer||"undefined"!=typeof Blob&&i instanceof Blob)return s(e);if(!function(e){var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==f}(e))return e;for(n in t={},e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=R(e[n]);void 0!==o&&(t[n]=o)}return t}function l(t){var n=!1;return O(function(e){if(n)throw new Error("once called more than once");n=!0,t.apply(this,e)})}function v(s){return O(function(i){i=R(i);var o=this,t="function"==typeof i[i.length-1]&&i.pop(),e=new Promise(function(n,r){var e;try{var t=l(function(e,t){e?r(e):n(t)});i.push(t),(e=s.apply(o,i))&&"function"==typeof e.then&&n(e)}catch(e){r(e)}});return t&&e.then(function(e){t(null,e)},t),e})}function h(o,e){return v(O(function(r){if(this._closed)return Promise.reject(new Error("database is closed"));if(this._destroyed)return Promise.reject(new Error("database is destroyed"));var i=this;return function(r,i,e){if(r.constructor.listeners("debug").length){for(var t=["api",r.name,i],n=0;n<e.length-1;n++)t.push(e[n]);r.constructor.emit("debug",t);var o=e[e.length-1];e[e.length-1]=function(e,t){var n=["api",r.name,i];n=n.concat(e?["error",e]:["success",t]),r.constructor.emit("debug",n),o(e,t)}}}(i,o,r),this.taskqueue.isReady?e.apply(this,r):new Promise(function(t,n){i.taskqueue.addTask(function(e){e?n(e):t(i[o].apply(i,r))})})}))}function p(e){return"$"+e}function y(){this._store={}}function n(e){if(this._store=new y,e&&Array.isArray(e))for(var t=0,n=e.length;t<n;t++)this.add(e[t])}function m(e,t){for(var n={},r=0,i=t.length;r<i;r++){var o=t[r];o in e&&(n[o]=e[o])}return n}y.prototype.get=function(e){var t=p(e);return this._store[t]},y.prototype.set=function(e,t){var n=p(e);return this._store[n]=t,!0},y.prototype.has=function(e){return p(e)in this._store},y.prototype.delete=function(e){var t=p(e),n=t in this._store;return delete this._store[t],n},y.prototype.forEach=function(e){for(var t=Object.keys(this._store),n=0,r=t.length;n<r;n++){var i=t[n];e(this._store[i],i=i.substring(1))}},Object.defineProperty(y.prototype,"size",{get:function(){return Object.keys(this._store).length}}),n.prototype.add=function(e){return this._store.set(e,!0)},n.prototype.has=function(e){return this._store.has(e)},n.prototype.forEach=function(n){this._store.forEach(function(e,t){n(t)})},Object.defineProperty(n.prototype,"size",{get:function(){return this._store.size}}),!function(){if("undefined"==typeof Symbol||"undefined"==typeof Map||"undefined"==typeof Set)return!1;var e=Object.getOwnPropertyDescriptor(Map,Symbol.species);return e&&"get"in e&&Map[Symbol.species]===Map}()?(q=n,x=y):(q=Set,x=Map);var _,g=6;function b(e){return e}function w(e){return[{ok:e}]}function k(i,u,e){var t=u.docs,c=new x;t.forEach(function(e){c.has(e.id)?c.get(e.id).push(e):c.set(e.id,[e])});var r=c.size,o=0,f=new Array(r);function l(){var n;++o===r&&(n=[],f.forEach(function(t){t.docs.forEach(function(e){n.push({id:t.id,docs:[e]})})}),e(null,{results:n}))}var n=[];c.forEach(function(e,t){n.push(t)});var s=0;function d(){if(!(s>=n.length)){var r,e=Math.min(s+g,n.length),t=n.slice(s,e);r=s,t.forEach(function(o,e){var s=r+e,t=c.get(o),n=m(t[0],["atts_since","attachments"]);n.open_revs=t.map(function(e){return e.rev}),n.open_revs=n.open_revs.filter(b);var a=b;0===n.open_revs.length&&(delete n.open_revs,a=w),["revs","attachments","binary","ajax","latest"].forEach(function(e){e in u&&(n[e]=u[e])}),i.get(o,n,function(e,t){var n,r,i;n=e?[{error:e}]:a(t),r=o,i=n,f[s]={id:r,docs:i},l(),d()})}),s+=t.length}}d()}try{localStorage.setItem("_pouch_check_localstorage",1),_=!!localStorage.getItem("_pouch_check_localstorage")}catch(e){_=!1}function j(){return _}function A(){var t;a.EventEmitter.call(this),this._listeners={},t=this,j()&&addEventListener("storage",function(e){t.emit(e.key)})}function E(e){if("undefined"!=typeof console&&"function"==typeof console[e]){var t=Array.prototype.slice.call(arguments,1);console[e].apply(console,t)}}function M(e){var t,n,r=0;return e||(r=2e3),t=e,n=r,t=parseInt(t,10)||0,(n=parseInt(n,10))!=n||n<=t?n=(t||1)<<1:n+=1,6e5<n&&(t=3e5,n=6e5),~~((n-t)*Math.random()+t)}function S(e,t){E("info","The above "+e+" is totally normal. "+t)}r(A,a.EventEmitter),A.prototype.addListener=function(e,t,n,r){if(!this._listeners[t]){var i=this,o=!1;this._listeners[t]=s,this.on(e,s)}function s(){if(i._listeners[t])if(o)o="waiting";else{o=!0;var e=m(r,["style","include_docs","attachments","conflicts","filter","doc_ids","view","since","query_params","binary","return_docs"]);n.changes(e).on("change",function(e){e.seq>r.since&&!r.cancelled&&(r.since=e.seq,r.onChange(e))}).on("complete",function(){"waiting"===o&&T(s),o=!1}).on("error",function(){o=!1})}}},A.prototype.removeListener=function(e,t){t in this._listeners&&(a.EventEmitter.prototype.removeListener.call(this,e,this._listeners[t]),delete this._listeners[t])},A.prototype.notifyLocalWindows=function(e){j()&&(localStorage[e]="a"===localStorage[e]?"b":"a")},A.prototype.notify=function(e){this.emit(e),this.notifyLocalWindows(e)};var C="function"==typeof Object.assign?Object.assign:function(e){for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t};function P(e,t,n){Error.call(this,n),this.status=e,this.name=t,this.message=n,this.error=!0}r(P,Error),P.prototype.toString=function(){return JSON.stringify({status:this.status,name:this.name,message:this.message,reason:this.reason})};new P(401,"unauthorized","Name or password is incorrect.");var L=new P(400,"bad_request","Missing JSON list of 'docs'"),D=new P(404,"not_found","missing"),$=new P(409,"conflict","Document update conflict"),I=new P(400,"bad_request","_id field must contain a string"),B=new P(412,"missing_id","_id is required for puts"),N=new P(400,"bad_request","Only reserved document ids may start with underscore."),U=(new P(412,"precondition_failed","Database not open"),new P(500,"unknown_error","Database encountered an unknown error")),F=new P(500,"badarg","Some query argument is invalid"),K=(new P(400,"invalid_request","Request was invalid"),new P(400,"query_parse_error","Some query parameter is invalid")),J=new P(500,"doc_validation","Bad special document member"),z=new P(400,"bad_request","Something wrong with the request"),V=new P(400,"bad_request","Document must be a JSON object"),G=(new P(404,"not_found","Database not found"),new P(500,"indexed_db_went_bad","unknown")),Q=(new P(500,"web_sql_went_bad","unknown"),new P(500,"levelDB_went_went_bad","unknown"),new P(403,"forbidden","Forbidden by design doc validate_doc_update function"),new P(400,"bad_request","Invalid rev format")),W=(new P(412,"file_exists","The database could not be created, the file already exists."),new P(412,"missing_stub","A pre-existing attachment stub wasn't found"));new P(413,"invalid_url","Provided URL is invalid");function Y(n,e){function t(e){for(var t in n)"function"!=typeof n[t]&&(this[t]=n[t]);void 0!==e&&(this.reason=e)}return t.prototype=P.prototype,new t(e)}function H(e){if("object"!=typeof e){var t=e;(e=U).data=t}return"error"in e&&"conflict"===e.error&&(e.name="conflict",e.status=409),"name"in e||(e.name=e.error||"unknown"),"status"in e||(e.status=500),"message"in e||(e.message=e.message||e.reason),e}function X(r){var i={},o=r.filter&&"function"==typeof r.filter;return i.query=r.query_params,function(e){e.doc||(e.doc={});var t=o&&function(e,t,n){try{return!e(t,n)}catch(e){var r="Filter function threw: "+e.toString();return Y(z,r)}}(r.filter,e.doc,i);if("object"==typeof t)return t;if(t)return!1;if(r.include_docs){if(!r.attachments)for(var n in e.doc._attachments)e.doc._attachments.hasOwnProperty(n)&&(e.doc._attachments[n].stub=!0)}else delete e.doc;return!0}}function Z(e){for(var t=[],n=0,r=e.length;n<r;n++)t=t.concat(e[n]);return t}function ee(e){var t;if(e?"string"!=typeof e?t=Y(I):/^_/.test(e)&&!/^_(design|local)/.test(e)&&(t=Y(N)):t=Y(B),t)throw t}function te(e){return"boolean"==typeof e._remote?e._remote:"function"==typeof e.type&&(E("warn","db.type() is deprecated and will be removed in a future version of PouchDB"),"http"===e.type())}function ne(e){if(!e)return null;var t=e.split("/");return 2===t.length?t:1===t.length?[e,e]:null}function re(e){var t=ne(e);return t?t.join("/"):null}var ie=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],oe="queryKey",se=/(?:^|&)([^&=]*)=?([^&]*)/g,ae=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;function ue(e){for(var t=ae.exec(e),r={},n=14;n--;){var i=ie[n],o=t[n]||"",s=-1!==["user","password"].indexOf(i);r[i]=s?decodeURIComponent(o):o}return r[oe]={},r[ie[12]].replace(se,function(e,t,n){t&&(r[oe][t]=n)}),r}function ce(e,t){var n=[],r=[];for(var i in t)t.hasOwnProperty(i)&&(n.push(i),r.push(t[i]));return n.push(e),Function.apply(null,n).apply(null,r)}function fe(c,f,l){return new Promise(function(a,u){c.get(f,function(e,t){if(e){if(404!==e.status)return u(e);t={}}var n,r,i,o=t._rev,s=l(t);if(!s)return a({updated:!1,rev:o});s._id=f,s._rev=o,a((r=s,i=l,(n=c).put(r).then(function(e){return{updated:!0,rev:e.rev}},function(e){if(409!==e.status)throw e;return fe(n,r._id,i)})))})})}var le=function(e){return atob(e)},de=function(e){return btoa(e)};function he(t,n){t=t||[],n=n||{};try{return new Blob(t,n)}catch(e){if("TypeError"!==e.name)throw e;for(var r=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),i=0;i<t.length;i+=1)r.append(t[i]);return r.getBlob(n.type)}}function pe(e,t){return he([function(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),i=0;i<t;i++)r[i]=e.charCodeAt(i);return n}(e)],{type:t})}function ve(e,t){return pe(le(e),t)}function ye(e,n){var t=new FileReader,r="function"==typeof t.readAsBinaryString;t.onloadend=function(e){var t=e.target.result||"";if(r)return n(t);n(function(e){for(var t="",n=new Uint8Array(e),r=n.byteLength,i=0;i<r;i++)t+=String.fromCharCode(n[i]);return t}(t))},r?t.readAsBinaryString(e):t.readAsArrayBuffer(e)}function _e(e,t){ye(e,function(e){t(e)})}function ge(e,t){_e(e,function(e){t(de(e))})}var me=e.setImmediate||e.setTimeout,be=32768;function we(t,e,n,r,i){var o,s,a,u,c,f;(0<n||r<e.size)&&(s=n,a=r,e=(o=e).webkitSlice?o.webkitSlice(s,a):o.slice(s,a)),u=e,c=function(e){t.append(e),i()},(f=new FileReader).onloadend=function(e){var t=e.target.result||new ArrayBuffer(0);c(t)},f.readAsArrayBuffer(u)}function ke(e,t,n,r,i){(0<n||r<t.length)&&(t=t.substring(n,r)),e.appendBinary(t),i()}function je(n,r){var e="string"==typeof n,t=e?n.length:n.size,i=Math.min(be,t),o=Math.ceil(t/i),s=0,a=e?new d:new d.ArrayBuffer,u=e?ke:we;function c(){me(l)}function f(){var e=a.end(!0),t=de(e);r(t),a.destroy()}function l(){var e=s*i,t=e+i;u(a,n,e,t,++s<o?c:f)}l()}function Oe(e){return d.hash(e)}function qe(e,t){var n=R(e);return t?(delete n._rev_tree,Oe(JSON.stringify(n))):i.v4().replace(/-/g,"").toLowerCase()}var Ae=i.v4;function Ee(e){for(var t,n,r,i,o=e.rev_tree.slice();i=o.pop();){var s=i.ids,a=s[2],u=i.pos;if(a.length)for(var c=0,f=a.length;c<f;c++)o.push({pos:u+1,ids:a[c]});else{var l=!!s[1].deleted,d=s[0];t&&!(r!==l?r:n!==u?n<u:t<d)||(t=d,n=u,r=l)}}return n+"-"+t}function Se(e,t){for(var n,r=e.slice();n=r.pop();)for(var i=n.pos,o=n.ids,s=o[2],a=t(0===s.length,i,o[0],n.ctx,o[1]),u=0,c=s.length;u<c;u++)r.push({pos:i+1,ids:s[u],ctx:a})}function xe(e,t){return e.pos-t.pos}function Ce(e){var o=[];Se(e,function(e,t,n,r,i){e&&o.push({rev:t+"-"+n,pos:t,opts:i})}),o.sort(xe).reverse();for(var t=0,n=o.length;t<n;t++)delete o[t].pos;return o}function Pe(e){for(var t=Ee(e),n=Ce(e.rev_tree),r=[],i=0,o=n.length;i<o;i++){var s=n[i];s.rev===t||s.opts.deleted||r.push(s.rev)}return r}function Le(e){for(var t,n=[],r=e.slice();t=r.pop();){var i=t.pos,o=t.ids,s=o[0],a=o[1],u=o[2],c=0===u.length,f=t.history?t.history.slice():[];f.push({id:s,opts:a}),c&&n.push({pos:i+1-f.length,ids:f});for(var l=0,d=u.length;l<d;l++)r.push({pos:i+1,ids:u[l],history:f})}return n.reverse()}function De(e,t){return e.pos-t.pos}function $e(e,t){for(var n,r,i=t,o=e.length;i<o;i++){var s=e[i],a=[s.id,s.opts,[]];r?(r[2].push(a),r=a):n=r=a}return n}function Ie(e,t){return e[0]<t[0]?-1:1}function Be(e,t){for(var n,r,i,o=[{tree1:e,tree2:t}],s=!1;0<o.length;){var a=o.pop(),u=a.tree1,c=a.tree2;(u[1].status||c[1].status)&&(u[1].status="available"===u[1].status||"available"===c[1].status?"available":"missing");for(var f=0;f<c[2].length;f++)if(u[2][0]){for(var l=!1,d=0;d<u[2].length;d++)u[2][d][0]===c[2][f][0]&&(o.push({tree1:u[2][d],tree2:c[2][f]}),l=!0);l||(s="new_branch",n=u[2],r=c[2][f],void 0,i=function(e,t,n){for(var r,i=0,o=e.length;i<o;)n(e[r=i+o>>>1],t)<0?i=r+1:o=r;return i}(n,r,Ie),n.splice(i,0,r))}else s="new_leaf",u[2][0]=c[2][f]}return{conflicts:s,tree:e}}function Te(e,t,n){var r,i=[],o=!1,s=!1;if(!e.length)return{tree:[t],conflicts:"new_leaf"};for(var a=0,u=e.length;a<u;a++){var c=e[a];if(c.pos===t.pos&&c.ids[0]===t.ids[0])r=Be(c.ids,t.ids),i.push({pos:c.pos,ids:r.tree}),o=o||r.conflicts,s=!0;else if(!0!==n){var f=c.pos<t.pos?c:t,l=c.pos<t.pos?t:c,d=l.pos-f.pos,h=[],p=[];for(p.push({ids:f.ids,diff:d,parent:null,parentIdx:null});0<p.length;){var v=p.pop();if(0!==v.diff)for(var y=v.ids[2],_=0,g=y.length;_<g;_++)p.push({ids:y[_],diff:v.diff-1,parent:v.ids,parentIdx:_});else v.ids[0]===l.ids[0]&&h.push(v)}var m=h[0];m?(r=Be(m.ids,l.ids),m.parent[2][m.parentIdx]=r.tree,i.push({pos:f.pos,ids:f.ids}),o=o||r.conflicts,s=!0):i.push(c)}else i.push(c)}return s||i.push(t),i.sort(De),{tree:i,conflicts:o||"internal_node"}}function Re(e,t,n){var r=Te(e,t),i=function(e,t){for(var r,n,i=Le(e),o=0,s=i.length;o<s;o++){var a,u=i[o],c=u.ids;if(c.length>t){r||(r={});var f=c.length-t;a={pos:u.pos+f,ids:$e(c,f)};for(var l=0;l<f;l++){var d=u.pos+l+"-"+c[l].id;r[d]=!0}}else a={pos:u.pos,ids:$e(c,0)};n=n?Te(n,a,!0).tree:[a]}return r&&Se(n,function(e,t,n){delete r[t+"-"+n]}),{tree:n,revs:r?Object.keys(r):[]}}(r.tree,n);return{tree:i.tree,stemmedRevs:i.revs,conflicts:r.conflicts}}function Me(e){return e.ids}function Ne(e,t){t||(t=Ee(e));for(var n,r=t.substring(t.indexOf("-")+1),i=e.rev_tree.map(Me);n=i.pop();){if(n[0]===r)return!!n[1].deleted;i=i.concat(n[2])}}function Ue(e){return/^_local/.test(e)}function Fe(i,t,n){a.EventEmitter.call(this);var o=this;this.db=i;var r=(t=t?R(t):{}).complete=l(function(e,t){var n,r;e?(r="error",0<("listenerCount"in(n=o)?n.listenerCount(r):a.EventEmitter.listenerCount(n,r))&&o.emit("error",e)):o.emit("complete",t),o.removeAllListeners(),i.removeListener("destroyed",s)});function s(){o.cancel()}n&&(o.on("complete",function(e){n(null,e)}),o.on("error",n)),i.once("destroyed",s),t.onChange=function(e,t,n){o.isCancelled||function(e,t,n,r){try{e.emit("change",t,n,r)}catch(e){E("error",'Error in .on("change", function):',e)}}(o,e,t,n)};var e=new Promise(function(n,r){t.complete=function(e,t){e?r(e):n(t)}});o.once("cancel",function(){i.removeListener("destroyed",s),t.complete(null,{status:"cancelled"})}),this.then=e.then.bind(e),this.catch=e.catch.bind(e),this.then(function(e){r(null,e)},r),i.taskqueue.isReady?o.validateChanges(t):i.taskqueue.addTask(function(e){e?t.complete(e):o.isCancelled?o.emit("cancel"):o.validateChanges(t)})}function Ke(e,t,n){var r=[{rev:e._rev}];"all_docs"===n.style&&(r=Ce(t.rev_tree).map(function(e){return{rev:e.rev}}));var i={id:t.id,changes:r,doc:e};return Ne(t,e._rev)&&(i.deleted=!0),n.conflicts&&(i.doc._conflicts=Pe(t),i.doc._conflicts.length||delete i.doc._conflicts),i}function Je(e,t){return e<t?-1:t<e?1:0}function ze(n,r){return function(e,t){e||t[0]&&t[0].error?((e=e||t[0]).docId=r,n(e)):n(null,t.length?t[0]:t)}}function Ve(e,t){var n=Je(e._id,t._id);return 0!==n?n:Je(e._revisions?e._revisions.start:0,t._revisions?t._revisions.start:0)}function Ge(){for(var e in a.EventEmitter.call(this),Ge.prototype)"function"==typeof this[e]&&(this[e]=this[e].bind(this))}function Qe(){this.isReady=!1,this.failed=!1,this.queue=[]}function We(e,t){if(!(this instanceof We))return new We(e,t);var n=this;if(t=t||{},e&&"object"==typeof e&&(e=(t=e).name,delete t.name),void 0===t.deterministic_revs&&(t.deterministic_revs=!0),this.__opts=t=R(t),n.auto_compaction=t.auto_compaction,n.prefix=We.prefix,"string"!=typeof e)throw new Error("Missing/invalid DB name");var r=function(e,t){var n=e.match(/([a-z-]*):\/\/(.*)/);if(n)return{name:/https?/.test(n[1])?n[1]+"://"+n[2]:n[2],adapter:n[1]};var r=We.adapters,i=We.preferredAdapters,o=We.prefix,s=t.adapter;if(!s)for(var a=0;a<i.length&&"idb"===(s=i[a])&&"websql"in r&&j()&&localStorage["_pouch__websqldb_"+o+e];++a)E("log",'PouchDB is downgrading "'+e+'" to WebSQL to avoid data loss, because it was already opened with WebSQL.');var u=r[s];return{name:u&&"use_prefix"in u&&!u.use_prefix?e:o+e,adapter:s}}((t.prefix||"")+e,t);if(t.name=r.name,t.adapter=t.adapter||r.adapter,n.name=e,n._adapter=t.adapter,We.emit("debug",["adapter","Picked adapter: ",t.adapter]),!We.adapters[t.adapter]||!We.adapters[t.adapter].valid())throw new Error("Invalid Adapter: "+t.adapter);Ge.call(n),n.taskqueue=new Qe,n.adapter=t.adapter,We.adapters[t.adapter].call(n,t,function(e){if(e)return n.taskqueue.fail(e);!function(t){function e(e){t.removeListener("closed",n),e||t.constructor.emit("destroyed",t.name)}function n(){t.removeListener("destroyed",e),t.constructor.emit("unref",t)}t.once("destroyed",e),t.once("closed",n),t.constructor.emit("ref",t)}(n),n.emit("created",n),We.emit("created",n.name),n.taskqueue.ready(n)})}r(Fe,a.EventEmitter),Fe.prototype.cancel=function(){this.isCancelled=!0,this.db.taskqueue.isReady&&this.emit("cancel")},Fe.prototype.validateChanges=function(t){var n=t.complete,r=this;We._changesFilterPlugin?We._changesFilterPlugin.validate(t,function(e){if(e)return n(e);r.doChanges(t)}):r.doChanges(t)},Fe.prototype.doChanges=function(t){var n=this,r=t.complete;if("live"in(t=R(t))&&!("continuous"in t)&&(t.continuous=t.live),t.processChange=Ke,"latest"===t.since&&(t.since="now"),t.since||(t.since=0),"now"!==t.since){if(We._changesFilterPlugin){if(We._changesFilterPlugin.normalize(t),We._changesFilterPlugin.shouldFilter(this,t))return We._changesFilterPlugin.filter(this,t)}else["doc_ids","filter","selector","view"].forEach(function(e){e in t&&E("warn",'The "'+e+'" option was passed in to changes/replicate, but pouchdb-changes-filter plugin is not installed, so it was ignored. Please install the plugin to enable filtering.')});"descending"in t||(t.descending=!1),t.limit=0===t.limit?1:t.limit,t.complete=r;var i=this.db._changes(t);if(i&&"function"==typeof i.cancel){var o=n.cancel;n.cancel=O(function(e){i.cancel(),o.apply(this,e)})}}else this.db.info().then(function(e){n.isCancelled?r(null,{status:"cancelled"}):(t.since=e.update_seq,n.doChanges(t))},r)},r(Ge,a.EventEmitter),Ge.prototype.post=h("post",function(e,t,n){if("function"==typeof t&&(n=t,t={}),"object"!=typeof e||Array.isArray(e))return n(Y(V));this.bulkDocs({docs:[e]},t,ze(n,e._id))}),Ge.prototype.put=h("put",function(n,t,r){if("function"==typeof t&&(r=t,t={}),"object"!=typeof n||Array.isArray(n))return r(Y(V));if(ee(n._id),Ue(n._id)&&"function"==typeof this._putLocal)return n._deleted?this._removeLocal(n,r):this._putLocal(n,r);var e,i,o,s,a=this;function u(e){"function"==typeof a._put&&!1!==t.new_edits?a._put(n,t,e):a.bulkDocs({docs:[n]},t,ze(e,n._id))}t.force&&n._rev?(e=n._rev.split("-"),i=e[1],o=parseInt(e[0],10)+1,s=qe(),n._revisions={start:o,ids:[s,i]},n._rev=o+"-"+s,t.new_edits=!1,u(function(e){var t=e?null:{ok:!0,id:n._id,rev:n._rev};r(e,t)})):u(r)}),Ge.prototype.putAttachment=h("putAttachment",function(t,n,r,i,o){var s=this;function a(e){var t="_rev"in e?parseInt(e._rev,10):0;return e._attachments=e._attachments||{},e._attachments[n]={content_type:o,data:i,revpos:++t},s.put(e)}return"function"==typeof o&&(o=i,i=r,r=null),void 0===o&&(o=i,i=r,r=null),o||E("warn","Attachment",n,"on document",t,"is missing content_type"),s.get(t).then(function(e){if(e._rev!==r)throw Y($);return a(e)},function(e){if(e.reason===D.message)return a({_id:t});throw e})}),Ge.prototype.removeAttachment=h("removeAttachment",function(e,n,r,i){var o=this;o.get(e,function(e,t){if(e)i(e);else if(t._rev===r){if(!t._attachments)return i();delete t._attachments[n],0===Object.keys(t._attachments).length&&delete t._attachments,o.put(t,i)}else i(Y($))})}),Ge.prototype.remove=h("remove",function(e,t,n,r){var i;"string"==typeof t?(i={_id:e,_rev:t},"function"==typeof n&&(r=n,n={})):(i=e,"function"==typeof t?(r=t,n={}):(r=n,n=t)),(n=n||{}).was_delete=!0;var o={_id:i._id,_rev:i._rev||n.rev,_deleted:!0};if(Ue(o._id)&&"function"==typeof this._removeLocal)return this._removeLocal(i,r);this.bulkDocs({docs:[o]},n,ze(r,o._id))}),Ge.prototype.revsDiff=h("revsDiff",function(o,e,s){"function"==typeof e&&(s=e,e={});var c=Object.keys(o);if(!c.length)return s(null,{});var f=0,l=new x;function d(e,t){l.has(e)||l.set(e,{missing:[]}),l.get(e).missing.push(t)}c.map(function(i){this._getRevisionTree(i,function(e,t){if(e&&404===e.status&&"missing"===e.message)l.set(i,{missing:o[i]});else{if(e)return s(e);n=t,u=o[a=i].slice(0),Se(n,function(e,t,n,r,i){var o=t+"-"+n,s=u.indexOf(o);-1!==s&&(u.splice(s,1),"available"!==i.status&&d(a,o))}),u.forEach(function(e){d(a,e)})}var a,n,u;if(++f===c.length){var r={};return l.forEach(function(e,t){r[t]=e}),s(null,r)}})},this)}),Ge.prototype.bulkGet=h("bulkGet",function(e,t){k(this,e,t)}),Ge.prototype.compactDocument=h("compactDocument",function(r,i,c){var f=this;this._getRevisionTree(r,function(e,t){if(e)return c(e);var o,s,n=(o={},s=[],Se(t,function(e,t,n,r){var i=t+"-"+n;return e&&(o[i]=0),void 0!==r&&s.push({from:r,to:i}),i}),s.reverse(),s.forEach(function(e){void 0===o[e.from]?o[e.from]=1+o[e.to]:o[e.from]=Math.min(o[e.from],1+o[e.to])}),o),a=[],u=[];Object.keys(n).forEach(function(e){n[e]>i&&a.push(e)}),Se(t,function(e,t,n,r,i){var o=t+"-"+n;"available"===i.status&&-1!==a.indexOf(o)&&u.push(o)}),f._doCompaction(r,u,c)})}),Ge.prototype.compact=h("compact",function(e,t){"function"==typeof e&&(t=e,e={});var n=this;e=e||{},n._compactionQueue=n._compactionQueue||[],n._compactionQueue.push({opts:e,callback:t}),1===n._compactionQueue.length&&function n(r){var e=r._compactionQueue[0],t=e.opts,i=e.callback;r.get("_local/compaction").catch(function(){return!1}).then(function(e){e&&e.last_seq&&(t.last_seq=e.last_seq),r._compact(t,function(e,t){e?i(e):i(null,t),T(function(){r._compactionQueue.shift(),r._compactionQueue.length&&n(r)})})})}(n)}),Ge.prototype._compact=function(e,n){var r=this,t={return_docs:!1,last_seq:e.last_seq||0},i=[];r.changes(t).on("change",function(e){i.push(r.compactDocument(e.id,0))}).on("complete",function(e){var t=e.last_seq;Promise.all(i).then(function(){return fe(r,"_local/compaction",function(e){return(!e.last_seq||e.last_seq<t)&&(e.last_seq=t,e)})}).then(function(){n(null,{ok:!0})}).catch(n)}).on("error",n)},Ge.prototype.get=h("get",function(b,w,k){if("function"==typeof w&&(k=w,w={}),"string"!=typeof b)return k(Y(I));if(Ue(b)&&"function"==typeof this._getLocal)return this._getLocal(b,k);var n=[],j=this;function r(){var s=[],a=n.length;if(!a)return k(null,s);n.forEach(function(o){j.get(b,{rev:o,revs:w.revs,latest:w.latest,attachments:w.attachments,binary:w.binary},function(e,t){if(e)s.push({missing:o});else{for(var n,r=0,i=s.length;r<i;r++)if(s[r].ok&&s[r].ok._rev===t._rev){n=!0;break}n||s.push({ok:t})}--a||k(null,s)})})}if(!w.open_revs)return this._get(b,w,function(e,t){if(e)return e.docId=b,k(e);var i=t.doc,n=t.metadata,o=t.ctx;if(w.conflicts){var r=Pe(n);r.length&&(i._conflicts=r)}if(Ne(n,i._rev)&&(i._deleted=!0),w.revs||w.revs_info){for(var s=i._rev.split("-"),a=parseInt(s[0],10),u=s[1],c=Le(n.rev_tree),f=null,l=0;l<c.length;l++){var d=c[l],h=d.ids.map(function(e){return e.id}).indexOf(u);(h===a-1||!f&&-1!==h)&&(f=d)}var p=f.ids.map(function(e){return e.id}).indexOf(i._rev.split("-")[1])+1,v=f.ids.length-p;if(f.ids.splice(p,v),f.ids.reverse(),w.revs&&(i._revisions={start:f.pos+f.ids.length-1,ids:f.ids.map(function(e){return e.id})}),w.revs_info){var y=f.pos+f.ids.length;i._revs_info=f.ids.map(function(e){return{rev:--y+"-"+e.id,status:e.opts.status}})}}if(w.attachments&&i._attachments){var _=i._attachments,g=Object.keys(_).length;if(0===g)return k(null,i);Object.keys(_).forEach(function(r){this._getAttachment(i._id,r,_[r],{rev:i._rev,binary:w.binary,ctx:o},function(e,t){var n=i._attachments[r];n.data=t,delete n.stub,delete n.length,--g||k(null,i)})},j)}else{if(i._attachments)for(var m in i._attachments)i._attachments.hasOwnProperty(m)&&(i._attachments[m].stub=!0);k(null,i)}});if("all"===w.open_revs)this._getRevisionTree(b,function(e,t){if(e)return k(e);n=Ce(t).map(function(e){return e.rev}),r()});else{if(!Array.isArray(w.open_revs))return k(Y(U,"function_clause"));n=w.open_revs;for(var e=0;e<n.length;e++){var t=n[e];if("string"!=typeof t||!/^\d+-/.test(t))return k(Y(Q))}r()}}),Ge.prototype.getAttachment=h("getAttachment",function(n,r,i,o){var s=this;i instanceof Function&&(o=i,i={}),this._get(n,i,function(e,t){return e?o(e):t.doc._attachments&&t.doc._attachments[r]?(i.ctx=t.ctx,i.binary=!0,void s._getAttachment(n,r,t.doc._attachments[r],i,o)):o(Y(D))})}),Ge.prototype.allDocs=h("allDocs",function(t,e){if("function"==typeof t&&(e=t,t={}),t.skip=void 0!==t.skip?t.skip:0,t.start_key&&(t.startkey=t.start_key),t.end_key&&(t.endkey=t.end_key),"keys"in t){if(!Array.isArray(t.keys))return e(new TypeError("options.keys must be an array"));var n=["startkey","endkey","key"].filter(function(e){return e in t})[0];if(n)return void e(Y(K,"Query parameter `"+n+"` is not compatible with multi-get"));if(!te(this)&&(i="limit"in(r=t)?r.keys.slice(r.skip,r.limit+r.skip):0<r.skip?r.keys.slice(r.skip):r.keys,r.keys=i,r.skip=0,delete r.limit,r.descending&&(i.reverse(),r.descending=!1),0===t.keys.length))return this._allDocs({limit:0},e)}var r,i;return this._allDocs(t,e)}),Ge.prototype.changes=function(e,t){return"function"==typeof e&&(t=e,e={}),(e=e||{}).return_docs="return_docs"in e?e.return_docs:!e.live,new Fe(this,e,t)},Ge.prototype.close=h("close",function(e){return this._closed=!0,this.emit("closed"),this._close(e)}),Ge.prototype.info=h("info",function(n){var r=this;this._info(function(e,t){if(e)return n(e);t.db_name=t.db_name||r.name,t.auto_compaction=!(!r.auto_compaction||te(r)),t.adapter=r.adapter,n(null,t)})}),Ge.prototype.id=h("id",function(e){return this._id(e)}),Ge.prototype.type=function(){return"function"==typeof this._type?this._type():this.adapter},Ge.prototype.bulkDocs=h("bulkDocs",function(e,i,o){if("function"==typeof i&&(o=i,i={}),i=i||{},Array.isArray(e)&&(e={docs:e}),!e||!e.docs||!Array.isArray(e.docs))return o(Y(L));for(var t=0;t<e.docs.length;++t)if("object"!=typeof e.docs[t]||Array.isArray(e.docs[t]))return o(Y(V));var r;if(e.docs.forEach(function(n){n._attachments&&Object.keys(n._attachments).forEach(function(e){var t;r=r||"_"===(t=e).charAt(0)&&t+" is not a valid attachment name, attachment names cannot start with '_'",n._attachments[e].content_type||E("warn","Attachment",e,"on document",n._id,"is missing content_type")})}),r)return o(Y(z,r));"new_edits"in i||(i.new_edits=!("new_edits"in e)||e.new_edits);var s=this;i.new_edits||te(s)||e.docs.sort(Ve),function(e){for(var t=0;t<e.length;t++){var n=e[t];if(n._deleted)delete n._attachments;else if(n._attachments)for(var r=Object.keys(n._attachments),i=0;i<r.length;i++){var o=r[i];n._attachments[o]=m(n._attachments[o],["data","digest","content_type","length","revpos","stub"])}}}(e.docs);var a=e.docs.map(function(e){return e._id});return this._bulkDocs(e,i,function(e,t){if(e)return o(e);if(i.new_edits||(t=t.filter(function(e){return e.error})),!te(s))for(var n=0,r=t.length;n<r;n++)t[n].id=t[n].id||a[n];o(null,t)})}),Ge.prototype.registerDependentDatabase=h("registerDependentDatabase",function(t,e){var n=new this.constructor(t,this.__opts);fe(this,"_local/_pouch_dependentDbs",function(e){return e.dependentDbs=e.dependentDbs||{},!e.dependentDbs[t]&&(e.dependentDbs[t]=!0,e)}).then(function(){e(null,{db:n})}).catch(e)}),Ge.prototype.destroy=h("destroy",function(e,o){"function"==typeof e&&(o=e,e={});var s=this,a=!("use_prefix"in s)||s.use_prefix;function u(){s._destroy(e,function(e,t){if(e)return o(e);s._destroyed=!0,s.emit("destroyed"),o(null,t||{ok:!0})})}if(te(s))return u();s.get("_local/_pouch_dependentDbs",function(e,t){if(e)return 404!==e.status?o(e):u();var n=t.dependentDbs,r=s.constructor,i=Object.keys(n).map(function(e){var t=a?e.replace(new RegExp("^"+r.prefix),""):e;return new r(t,s.__opts).destroy()});Promise.all(i).then(u,o)})}),Qe.prototype.execute=function(){var e;if(this.failed)for(;e=this.queue.shift();)e(this.failed);else for(;e=this.queue.shift();)e()},Qe.prototype.fail=function(e){this.failed=e,this.execute()},Qe.prototype.ready=function(e){this.isReady=!0,this.db=e,this.execute()},Qe.prototype.addTask=function(e){this.queue.push(e),this.failed&&this.execute()},r(We,Ge);var Ye="undefined"!=typeof AbortController?AbortController:function(){return{abort:function(){}}},He=fetch,Xe=Headers;We.adapters={},We.preferredAdapters=[],We.prefix="_pouch_";var Ze=new a.EventEmitter;!function(t){Object.keys(a.EventEmitter.prototype).forEach(function(e){"function"==typeof a.EventEmitter.prototype[e]&&(t[e]=Ze[e].bind(Ze))});var r=t._destructionListeners=new x;t.on("ref",function(e){r.has(e.name)||r.set(e.name,[]),r.get(e.name).push(e)}),t.on("unref",function(e){if(r.has(e.name)){var t=r.get(e.name),n=t.indexOf(e);n<0||(t.splice(n,1),1<t.length?r.set(e.name,t):r.delete(e.name))}}),t.on("destroyed",function(e){if(r.has(e)){var t=r.get(e);r.delete(e),t.forEach(function(e){e.emit("destroyed",!0)})}})}(We),We.adapter=function(e,t,n){t.valid()&&(We.adapters[e]=t,n&&We.preferredAdapters.push(e))},We.plugin=function(t){if("function"==typeof t)t(We);else{if("object"!=typeof t||0===Object.keys(t).length)throw new Error('Invalid plugin: got "'+t+'", expected an object or a function');Object.keys(t).forEach(function(e){We.prototype[e]=t[e]})}return this.__defaults&&(We.__defaults=C({},this.__defaults)),We},We.defaults=function(e){function n(e,t){if(!(this instanceof n))return new n(e,t);t=t||{},e&&"object"==typeof e&&(e=(t=e).name,delete t.name),t=C({},n.__defaults,t),We.call(this,e,t)}return r(n,We),n.preferredAdapters=We.preferredAdapters.slice(),Object.keys(We).forEach(function(e){e in n||(n[e]=We[e])}),n.__defaults=C({},this.__defaults,e),n},We.fetch=function(e,t){return He(e,t)};function et(e,t){for(var n=e,r=0,i=t.length;r<i;r++){if(!(n=n[t[r]]))break}return n}function tt(e){for(var t=[],n="",r=0,i=e.length;r<i;r++){var o=e[r];"."===o?0<r&&"\\"===e[r-1]?n=n.substring(0,n.length-1)+".":(t.push(n),n=""):n+=o}return t.push(n),t}var nt=["$or","$nor","$not"];function rt(e){return-1<nt.indexOf(e)}function it(e){return Object.keys(e)[0]}function ot(e){var n={};return e.forEach(function(t){Object.keys(t).forEach(function(e){var s=t[e];if("object"!=typeof s&&(s={$eq:s}),rt(e))s instanceof Array?n[e]=s.map(function(e){return ot([e])}):n[e]=ot([s]);else{var a=n[e]=n[e]||{};Object.keys(s).forEach(function(e){var t,n,r,i,o=s[e];return"$gt"===e||"$gte"===e?function(e,t,n){if(void 0!==n.$eq)return;void 0!==n.$gte?"$gte"===e?t>n.$gte&&(n.$gte=t):t>=n.$gte&&(delete n.$gte,n.$gt=t):void 0!==n.$gt?"$gte"===e?t>n.$gt&&(delete n.$gt,n.$gte=t):t>n.$gt&&(n.$gt=t):n[e]=t}(e,o,a):"$lt"===e||"$lte"===e?function(e,t,n){if(void 0!==n.$eq)return;void 0!==n.$lte?"$lte"===e?t<n.$lte&&(n.$lte=t):t<=n.$lte&&(delete n.$lte,n.$lt=t):void 0!==n.$lt?"$lte"===e?t<n.$lt&&(delete n.$lt,n.$lte=t):t<n.$lt&&(n.$lt=t):n[e]=t}(e,o,a):"$ne"===e?(r=o,void("$ne"in(i=a)?i.$ne.push(r):i.$ne=[r])):"$eq"===e?(t=o,delete(n=a).$gt,delete n.$gte,delete n.$lt,delete n.$lte,delete n.$ne,void(n.$eq=t)):void(a[e]=o)})}})}),n}var st=-324,at=3,ut="";function ct(e,t){if(e===t)return 0;e=ft(e),t=ft(t);var n,r,i=vt(e),o=vt(t);if(i-o!=0)return i-o;switch(typeof e){case"number":return e-t;case"boolean":return e<t?-1:1;case"string":return(n=e)===(r=t)?0:r<n?1:-1}return Array.isArray(e)?function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=ct(e[r],t[r]);if(0!==i)return i}return e.length===t.length?0:e.length>t.length?1:-1}(e,t):function(e,t){for(var n=Object.keys(e),r=Object.keys(t),i=Math.min(n.length,r.length),o=0;o<i;o++){var s=ct(n[o],r[o]);if(0!==s)return s;if(0!==(s=ct(e[n[o]],t[r[o]])))return s}return n.length===r.length?0:n.length>r.length?1:-1}(e,t)}function ft(e){switch(typeof e){case"undefined":return null;case"number":return e===1/0||e===-1/0||isNaN(e)?null:e;case"object":var t=e;if(Array.isArray(e)){var n=e.length;e=new Array(n);for(var r=0;r<n;r++)e[r]=ft(t[r])}else{if(e instanceof Date)return e.toJSON();if(null!==e)for(var i in e={},t)if(t.hasOwnProperty(i)){var o=t[i];void 0!==o&&(e[i]=ft(o))}}}return e}function lt(e){if(null!==e)switch(typeof e){case"boolean":return e?1:0;case"number":return function(e){if(0===e)return"1";var t=e.toExponential().split(/e\+?/),n=parseInt(t[1],10),r=e<0,i=r?"0":"2",o=(s=((r?-n:n)-st).toString(),a="0",u=at,function(e,t,n){for(var r="",i=n-e.length;r.length<i;)r+=t;return r}(s,a,u)+s);var s,a,u;i+=ut+o;var c=Math.abs(parseFloat(t[0]));r&&(c=10-c);var f=c.toFixed(20);return f=f.replace(/\.?0+$/,""),i+=ut+f}(e);case"string":return e.replace(/\u0002/g,"").replace(/\u0001/g,"").replace(/\u0000/g,"");case"object":var t=Array.isArray(e),n=t?e:Object.keys(e),r=-1,i=n.length,o="";if(t)for(;++r<i;)o+=dt(n[r]);else for(;++r<i;){var s=n[r];o+=dt(s)+dt(e[s])}return o}return""}function dt(e){return vt(e=ft(e))+ut+lt(e)+"\0"}function ht(e,t){var n,r=t;if("1"===e[t])n=0,t++;else{var i="0"===e[t];t++;var o="",s=e.substring(t,t+at),a=parseInt(s,10)+st;for(i&&(a=-a),t+=at;;){var u=e[t];if("\0"===u)break;o+=u,t++}n=1===(o=o.split(".")).length?parseInt(o,10):parseFloat(o[0]+"."+o[1]),i&&(n-=10),0!==a&&(n=parseFloat(n+"e"+a))}return{num:n,length:t-r}}function pt(e,t){var n=e.pop();if(t.length){var r=t[t.length-1];n===r.element&&(t.pop(),r=t[t.length-1]);var i=r.element,o=r.index;if(Array.isArray(i))i.push(n);else if(o===e.length-2){i[e.pop()]=n}else e.push(n)}}function vt(e){var t=["boolean","number","string","object"].indexOf(typeof e);return~t?null===e?1:Array.isArray(e)?5:t<3?t+2:t+3:Array.isArray(e)?5:void 0}function yt(e,t,n){if(e=e.filter(function(e){return _t(e.doc,t.selector,n)}),t.sort){var r=function(e){function o(n){return e.map(function(e){var t=tt(it(e));return et(n,t)})}return function(e,t){var n,r,i=ct(o(e.doc),o(t.doc));return 0!==i?i:(n=e.doc._id,r=t.doc._id,n<r?-1:r<n?1:0)}}(t.sort);e=e.sort(r),"string"!=typeof t.sort[0]&&"desc"===(i=t.sort[0])[it(i)]&&(e=e.reverse())}var i;if("limit"in t||"skip"in t){var o=t.skip||0,s=("limit"in t?t.limit:e.length)+o;e=e.slice(o,s)}return e}function _t(i,o,e){return e.every(function(e){var t=o[e],n=tt(e),r=et(i,n);return rt(e)?function(e,t,n){if("$or"===e)return t.some(function(e){return _t(n,e,Object.keys(e))});if("$not"===e)return!_t(n,t,Object.keys(t));return!t.find(function(e){return _t(n,e,Object.keys(e))})}(e,t,i):gt(t,i,n,r)})}function gt(n,r,i,o){return!n||Object.keys(n).every(function(e){var t=n[e];return function(e,t,n,r,i){if(!kt[e])throw new Error('unknown operator "'+e+'" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, $nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all');return kt[e](t,n,r,i)}(e,r,t,i,o)})}function mt(e){return null!=e}function bt(e){return void 0!==e}function wt(t,e){return e.some(function(e){return t instanceof Array?-1<t.indexOf(e):t===e})}var kt={$elemMatch:function(t,n,r,e){return!!Array.isArray(e)&&(0!==e.length&&("object"==typeof e[0]?e.some(function(e){return _t(e,n,Object.keys(n))}):e.some(function(e){return gt(n,t,r,e)})))},$allMatch:function(t,n,r,e){return!!Array.isArray(e)&&(0!==e.length&&("object"==typeof e[0]?e.every(function(e){return _t(e,n,Object.keys(n))}):e.every(function(e){return gt(n,t,r,e)})))},$eq:function(e,t,n,r){return bt(r)&&0===ct(r,t)},$gte:function(e,t,n,r){return bt(r)&&0<=ct(r,t)},$gt:function(e,t,n,r){return bt(r)&&0<ct(r,t)},$lte:function(e,t,n,r){return bt(r)&&ct(r,t)<=0},$lt:function(e,t,n,r){return bt(r)&&ct(r,t)<0},$exists:function(e,t,n,r){return t?bt(r):!bt(r)},$mod:function(e,t,n,r){return mt(r)&&function(e,t){var n=t[0],r=t[1];if(0===n)throw new Error("Bad divisor, cannot divide by zero");if(parseInt(n,10)!==n)throw new Error("Divisor is not an integer");if(parseInt(r,10)!==r)throw new Error("Modulus is not an integer");return parseInt(e,10)===e&&e%n===r}(r,t)},$ne:function(e,t,n,r){return t.every(function(e){return 0!==ct(r,e)})},$in:function(e,t,n,r){return mt(r)&&wt(r,t)},$nin:function(e,t,n,r){return mt(r)&&!wt(r,t)},$size:function(e,t,n,r){return mt(r)&&(i=t,r.length===i);var i},$all:function(e,t,n,r){return Array.isArray(r)&&(i=r,t.every(function(e){return-1<i.indexOf(e)}));var i},$regex:function(e,t,n,r){return mt(r)&&(i=r,new RegExp(t).test(i));var i},$type:function(e,t,n,r){return function(e,t){switch(t){case"null":return null===e;case"boolean":return"boolean"==typeof e;case"number":return"number"==typeof e;case"string":return"string"==typeof e;case"array":return e instanceof Array;case"object":return"[object Object]"==={}.toString.call(e)}throw new Error(t+" not supported as a type.Please use one of object, string, array, number, boolean or null.")}(r,t)}};function jt(e,t){if("object"!=typeof t)throw new Error("Selector error: expected a JSON object");var n=yt([{doc:e}],{selector:t=function(e){var t=R(e),n=!1;"$and"in t&&(t=ot(t.$and),n=!0),["$or","$nor"].forEach(function(e){e in t&&t[e].forEach(function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n],i=e[r];"object"==typeof i&&null!==i||(e[r]={$eq:i})}})}),"$not"in t&&(t.$not=ot([t.$not]));for(var r=Object.keys(t),i=0;i<r.length;i++){var o=r[i],s=t[o];"object"!=typeof s||null===s?s={$eq:s}:"$ne"in s&&!n&&(s.$ne=[s.$ne]),t[o]=s}return t}(t)},Object.keys(t));return n&&1===n.length}function Ot(e,t){if(e.selector&&e.filter&&"_selector"!==e.filter){var n="string"==typeof e.filter?e.filter:"function";return t(new Error('selector invalid for filter "'+n+'"'))}t()}function qt(e){e.view&&!e.filter&&(e.filter="_view"),e.selector&&!e.filter&&(e.filter="_selector"),e.filter&&"string"==typeof e.filter&&("_view"===e.filter?e.view=re(e.view):e.filter=re(e.filter))}function At(e,t){return t.filter&&"string"==typeof t.filter&&!t.doc_ids&&!te(e.db)}function Et(r,i){var o=i.complete;if("_view"===i.filter){if(!i.view||"string"!=typeof i.view){var e=Y(z,"`view` filter parameter not found or invalid.");return o(e)}var s=ne(i.view);r.db.get("_design/"+s[0],function(e,t){if(r.isCancelled)return o(null,{status:"cancelled"});if(e)return o(H(e));var n=t&&t.views&&t.views[s[1]]&&t.views[s[1]].map;if(!n)return o(Y(D,t.views?"missing json key: "+s[1]:"missing json key: views"));i.filter=ce(["return function(doc) {",'  "use strict";',"  var emitted = false;","  var emit = function (a, b) {","    emitted = true;","  };","  var view = "+n+";","  view(doc);","  if (emitted) {","    return true;","  }","};"].join("\n"),{}),r.doChanges(i)})}else if(i.selector)i.filter=function(e){return jt(e,i.selector)},r.doChanges(i);else{var a=ne(i.filter);r.db.get("_design/"+a[0],function(e,t){if(r.isCancelled)return o(null,{status:"cancelled"});if(e)return o(H(e));var n=t&&t.filters&&t.filters[a[1]];if(!n)return o(Y(D,t&&t.filters?"missing json key: "+a[1]:"missing json key: filters"));i.filter=ce('"use strict";\nreturn '+n+";",{}),r.doChanges(i)})}}function St(e){return e.reduce(function(e,t){return e[t]=!0,e},{})}We.plugin(function(e){e._changesFilterPlugin={validate:Ot,normalize:qt,shouldFilter:At,filter:Et}}),We.version="7.0.0";var xt=St(["_id","_rev","_attachments","_deleted","_revisions","_revs_info","_conflicts","_deleted_conflicts","_local_seq","_rev_tree","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats","_removed"]),Ct=St(["_attachments","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats"]);function Pt(e){if(!/^\d+-./.test(e))return Y(Q);var t=e.indexOf("-"),n=e.substring(0,t),r=e.substring(t+1);return{prefix:parseInt(n,10),id:r}}function Lt(e,t,n){var r,i,o;n||(n={deterministic_revs:!0});var s={status:"available"};if(e._deleted&&(s.deleted=!0),t)if(e._id||(e._id=Ae()),i=qe(e,n.deterministic_revs),e._rev){if((o=Pt(e._rev)).error)return o;e._rev_tree=[{pos:o.prefix,ids:[o.id,{status:"missing"},[[i,s,[]]]]}],r=o.prefix+1}else e._rev_tree=[{pos:1,ids:[i,s,[]]}],r=1;else if(e._revisions&&(e._rev_tree=function(e,t){for(var n=e.start-e.ids.length+1,r=e.ids,i=[r[0],t,[]],o=1,s=r.length;o<s;o++)i=[r[o],{status:"missing"},[i]];return[{pos:n,ids:i}]}(e._revisions,s),r=e._revisions.start,i=e._revisions.ids[0]),!e._rev_tree){if((o=Pt(e._rev)).error)return o;r=o.prefix,i=o.id,e._rev_tree=[{pos:r,ids:[i,s,[]]}]}ee(e._id),e._rev=r+"-"+i;var a={metadata:{},data:{}};for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var c="_"===u[0];if(c&&!xt[u]){var f=Y(J,u);throw f.message=J.message+": "+u,f}c&&!Ct[u]?a.metadata[u.slice(1)]=e[u]:a.data[u]=e[u]}return a}function Dt(t,e,n){var r=function(e){try{return le(e)}catch(e){return{error:Y(F,"Attachment is not a valid base64 string")}}}(t.data);if(r.error)return n(r.error);t.length=r.length,t.data="blob"===e?pe(r,t.content_type):"base64"===e?de(r):r,je(r,function(e){t.digest="md5-"+e,n()})}function $t(e,t,n){if(e.stub)return n();var r,i,o;"string"==typeof e.data?Dt(e,t,n):(i=t,o=n,je((r=e).data,function(e){r.digest="md5-"+e,r.length=r.data.size||r.data.length||0,"binary"===i?_e(r.data,function(e){r.data=e,o()}):"base64"===i?ge(r.data,function(e){r.data=e,o()}):o()}))}function It(e,t,n,r,i,o,s,a){if(function(e,t){for(var n,r=e.slice(),i=t.split("-"),o=parseInt(i[0],10),s=i[1];n=r.pop();){if(n.pos===o&&n.ids[0]===s)return!0;for(var a=n.ids[2],u=0,c=a.length;u<c;u++)r.push({pos:n.pos+1,ids:a[u]})}return!1}(t.rev_tree,n.metadata.rev)&&!a)return r[i]=n,o();var u=t.winningRev||Ee(t),c="deleted"in t?t.deleted:Ne(t,u),f="deleted"in n.metadata?n.metadata.deleted:Ne(n.metadata),l=/^1-/.test(n.metadata.rev);if(c&&!f&&a&&l){var d=n.data;d._rev=u,d._id=n.metadata.id,n=Lt(d,a)}var h=Re(t.rev_tree,n.metadata.rev_tree[0],e);if(a&&(c&&f&&"new_leaf"!==h.conflicts||!c&&"new_leaf"!==h.conflicts||c&&!f&&"new_branch"===h.conflicts)){var p=Y($);return r[i]=p,o()}var v=n.metadata.rev;n.metadata.rev_tree=h.tree,n.stemmedRevs=h.stemmedRevs||[],t.rev_map&&(n.metadata.rev_map=t.rev_map);var y=Ee(n.metadata),_=Ne(n.metadata,y),g=c===_?0:c<_?-1:1;s(n,y,_,v===y?_:Ne(n.metadata,v),!0,g,i,o)}function Bt(u,e,i,c,o,f,l,d,t){u=u||1e3;var h=d.new_edits,s=new x,n=0,a=e.length;function p(){++n===a&&t&&t()}e.forEach(function(e,n){if(e._id&&Ue(e._id)){var t=e._deleted?"_removeLocal":"_putLocal";i[t](e,{ctx:o},function(e,t){f[n]=e||t,p()})}else{var r=e.metadata.id;s.has(r)?(a--,s.get(r).push([e,n])):s.set(r,[[e,n]])}}),s.forEach(function(i,o){var s=0;function a(){++s<i.length?e():p()}function e(){var e=i[s],t=e[0],n=e[1];if(c.has(o))It(u,c.get(o),t,f,n,a,l,h);else{var r=Re([],t.metadata.rev_tree[0],u);t.metadata.rev_tree=r.tree,t.stemmedRevs=r.stemmedRevs||[],function(e,t,n){var r=Ee(e.metadata),i=Ne(e.metadata,r);if("was_delete"in d&&i)return f[t]=Y(D,"deleted"),n();if(h&&"missing"===e.metadata.rev_tree[0].ids[1].status){var o=Y($);return f[t]=o,n()}l(e,r,i,i,!1,i?0:1,t,n)}(t,n,a)}}e()})}var Tt=5,Rt="document-store",Mt="by-sequence",Nt="attach-store",Ut="attach-seq-store",Ft="meta-store",Kt="local-store",Jt="detect-blob-support";function zt(n){return function(e){var t="unknown_error";e.target&&e.target.error&&(t=e.target.error.name||e.target.error.message),n(Y(G,t,e.type))}}function Vt(e,t,n){return{data:function(t){try{return JSON.stringify(t)}catch(e){return o.stringify(t)}}(e),winningRev:t,deletedOrLocal:n?"1":"0",seq:e.seq,id:e.id}}function Gt(e){if(!e)return null;var t=function(t){try{return JSON.parse(t)}catch(e){return o.parse(t)}}(e.data);return t.winningRev=e.winningRev,t.deleted="1"===e.deletedOrLocal,t.seq=e.seq,t}function Qt(e){if(!e)return e;var t=e._doc_id_rev.lastIndexOf(":");return e._id=e._doc_id_rev.substring(0,t-1),e._rev=e._doc_id_rev.substring(t+1),delete e._doc_id_rev,e}function Wt(e,t,n,r){n?r(e?"string"!=typeof e?e:ve(e,t):he([""],{type:t})):e?"string"!=typeof e?ye(e,function(e){r(de(e))}):r(e):r("")}function Yt(i,o,s,e){var t=Object.keys(i._attachments||{});if(!t.length)return e&&e();var n=0;function a(){++n===t.length&&e&&e()}t.forEach(function(e){var t,n,r;o.attachments&&o.include_docs?(t=e,n=i._attachments[t],r=n.digest,s.objectStore(Nt).get(r).onsuccess=function(e){n.body=e.target.result.body,a()}):(i._attachments[e].stub=!0,a())})}function Ht(e,s){return Promise.all(e.map(function(o){if(o.doc&&o.doc._attachments){var e=Object.keys(o.doc._attachments);return Promise.all(e.map(function(n){var r=o.doc._attachments[n];if("body"in r){var e=r.body,i=r.content_type;return new Promise(function(t){Wt(e,i,s,function(e){o.doc._attachments[n]=C(m(r,["digest","content_type"]),{data:e}),t()})})}}))}}))}function Xt(e,r,t){var i=[],o=t.objectStore(Mt),s=t.objectStore(Nt),a=t.objectStore(Ut),n=e.length;function u(){--n||function(){if(!i.length)return;i.forEach(function(n){var e=a.index("digestSeq").count(IDBKeyRange.bound(n+"::",n+"::￿",!1,!1));e.onsuccess=function(e){var t=e.target.result;t||s.delete(n)}})}()}e.forEach(function(e){var t=o.index("_doc_id_rev"),n=r+"::"+e;t.getKey(n).onsuccess=function(e){var t=e.target.result;if("number"!=typeof t)return u();o.delete(t),a.index("seq").openCursor(IDBKeyRange.only(t)).onsuccess=function(e){var t=e.target.result;if(t){var n=t.value.digestSeq.split("::")[0];i.push(n),a.delete(t.primaryKey),t.continue()}else u()}}})}function Zt(e,t,n){try{return{txn:e.transaction(t,n)}}catch(e){return{error:e}}}var en=new A;function tn(a,e,u,l,t,n){for(var d,h,p,v,y,r,i,o,c=e.docs,s=0,f=c.length;s<f;s++){var _=c[s];_._id&&Ue(_._id)||(_=c[s]=Lt(_,u.new_edits,a)).error&&!i&&(i=_)}if(i)return n(i);var g=!1,m=0,b=new Array(c.length),w=new x,k=!1,j=l._meta.blobSupport?"blob":"base64";function O(){g=!0,q()}function q(){o&&g&&(o.docCount+=m,r.put(o))}function A(){k||(en.notify(l._meta.name),n(null,b))}function E(e,t,n,r,i,o,s,a){e.metadata.winningRev=t,e.metadata.deleted=n;var u=e.data;if(u._id=e.metadata.id,u._rev=e.metadata.rev,r&&(u._deleted=!0),u._attachments&&Object.keys(u._attachments).length)return function(a,u,e,t,n,r){var i=a.data,c=0,o=Object.keys(i._attachments);function f(){c===o.length&&S(a,u,e,t,n,r)}function l(){c++,f()}o.forEach(function(e){var i,o,s,t=a.data._attachments[e];if(t.stub)c++,f();else{var n=t.data;delete t.data,t.revpos=parseInt(u,10);var r=t.digest;i=r,o=n,s=l,v.count(i).onsuccess=function(e){var t=e.target.result;if(t)return s();var n={digest:i,body:o},r=v.put(n);r.onsuccess=s}}})}(e,t,n,i,s,a);m+=o,q(),S(e,t,n,i,s,a)}function S(i,s,a,u,e,t){var n=i.data,c=i.metadata;function r(e){var t,o,n=i.stemmedRevs||[];u&&l.auto_compaction&&(n=n.concat((t=i.metadata,o=[],Se(t.rev_tree,function(e,t,n,r,i){"available"!==i.status||e||(o.push(t+"-"+n),i.status="missing")}),o))),n&&n.length&&Xt(n,i.metadata.id,d),c.seq=e.target.result;var r=Vt(c,s,a);h.put(r).onsuccess=f}function f(){b[e]={ok:!0,id:c.id,rev:c.rev},w.set(i.metadata.id,i.metadata),function(r,i,e){var t=0,n=Object.keys(r.data._attachments||{});if(!n.length)return e();function o(){++t===n.length&&e()}function s(e){var t=r.data._attachments[e].digest,n=y.put({seq:i,digestSeq:t+"::"+i});n.onsuccess=o,n.onerror=function(e){e.preventDefault(),e.stopPropagation(),o()}}for(var a=0;a<n.length;a++)s(n[a])}(i,c.seq,t)}n._doc_id_rev=c.id+"::"+c.rev,delete n._id,delete n._rev;var o=p.put(n);o.onsuccess=r,o.onerror=function(e){e.preventDefault(),e.stopPropagation(),p.index("_doc_id_rev").getKey(n._doc_id_rev).onsuccess=function(e){p.put(n,e.target.result).onsuccess=r}}}!function(e,o,t){if(!e.length)return t();var s,n=0;function a(){n++,e.length===n&&(s?t(s):t())}e.forEach(function(e){var t=e.data&&e.data._attachments?Object.keys(e.data._attachments):[],n=0;if(!t.length)return a();function r(e){s=e,++n===t.length&&a()}for(var i in e.data._attachments)e.data._attachments.hasOwnProperty(i)&&$t(e.data._attachments[i],o,r)})}(c,j,function(e){if(e)return n(e);!function(){var e=Zt(t,[Rt,Mt,Nt,Kt,Ut,Ft],"readwrite");if(e.error)return n(e.error);(d=e.txn).onabort=zt(n),d.ontimeout=zt(n),d.oncomplete=A,h=d.objectStore(Rt),p=d.objectStore(Mt),v=d.objectStore(Nt),y=d.objectStore(Ut),(r=d.objectStore(Ft)).get(Ft).onsuccess=function(e){o=e.target.result,q()},function(t){var i=[];if(c.forEach(function(n){n.data&&n.data._attachments&&Object.keys(n.data._attachments).forEach(function(e){var t=n.data._attachments[e];t.stub&&i.push(t.digest)})}),!i.length)return t();var o,s=0;i.forEach(function(e){var n,r;n=e,r=function(e){e&&!o&&(o=e),++s===i.length&&t(o)},v.get(n).onsuccess=function(e){if(e.target.result)r();else{var t=Y(W,"unknown stub attachment with digest "+n);t.status=412,r(t)}}})}(function(e){if(e)return k=!0,n(e);!function(){if(!c.length)return;var e=0;function n(){++e===c.length&&Bt(a.revs_limit,c,l,w,d,b,E,u,O)}function t(e){var t=Gt(e.target.result);t&&w.set(t.id,t),n()}for(var r=0,i=c.length;r<i;r++){var o=c[r];if(o._id&&Ue(o._id))n();else{var s=h.get(o.metadata.id);s.onsuccess=t}}}()})}()})}function nn(n,r,e,i,o){var s,a,t;function u(e){a=e.target.result,s&&o(s,a,t)}function c(e){s=e.target.result,a&&o(s,a,t)}function f(e){var t=e.target.result;if(!t)return o();o([t.key],[t.value],t)}-1===i&&(i=1e3),"function"==typeof n.getAll&&"function"==typeof n.getAllKeys&&1<i&&!e?(t={continue:function(){if(!s.length)return o();var e,t=s[s.length-1];if(r&&r.upper)try{e=IDBKeyRange.bound(t,r.upper,!0,r.upperOpen)}catch(e){if("DataError"===e.name&&0===e.code)return o()}else e=IDBKeyRange.lowerBound(t,!0);r=e,a=s=null,n.getAll(r,i).onsuccess=u,n.getAllKeys(r,i).onsuccess=c}},n.getAll(r,i).onsuccess=u,n.getAllKeys(r,i).onsuccess=c):e?n.openCursor(r,"prev").onsuccess=f:n.openCursor(r).onsuccess=f}function rn(a,e,t){var n,r,i="startkey"in a&&a.startkey,o="endkey"in a&&a.endkey,s="key"in a&&a.key,u="keys"in a&&a.keys,c=a.skip||0,f="number"==typeof a.limit?a.limit:-1,l=!1!==a.inclusive_end;if(!u&&(r=(n=function(e,t,n,r,i){try{if(e&&t)return i?IDBKeyRange.bound(t,e,!n,!1):IDBKeyRange.bound(e,t,!1,!n);if(e)return i?IDBKeyRange.upperBound(e):IDBKeyRange.lowerBound(e);if(t)return i?IDBKeyRange.lowerBound(t,!n):IDBKeyRange.upperBound(t,!n);if(r)return IDBKeyRange.only(r)}catch(e){return{error:e}}return null}(i,o,l,s,a.descending))&&n.error)&&("DataError"!==r.name||0!==r.code))return t(Y(G,r.name,r.message));var d=[Rt,Mt,Ft];a.attachments&&d.push(Nt);var h=Zt(e,d,"readonly");if(h.error)return t(h.error);var p=h.txn;p.oncomplete=function(){a.attachments?Ht(E,a.binary).then(P):P()},p.onabort=zt(t);var v,y,_,g,m,b,w,k,j=p.objectStore(Rt),O=p.objectStore(Mt),q=p.objectStore(Ft),A=O.index("_doc_id_rev"),E=[];function S(e,t){var n,r,i,o,s={id:t.id,key:t.id,value:{rev:e}};t.deleted?u&&(E.push(s),s.value.deleted=!0,s.doc=null):c--<=0&&(E.push(s),a.include_docs&&(r=s,i=e,o=(n=t).id+"::"+i,A.get(o).onsuccess=function(e){if(r.doc=Qt(e.target.result)||{},a.conflicts){var t=Pe(n);t.length&&(r.doc._conflicts=t)}Yt(r.doc,a,p)}))}function x(e){for(var t=0,n=e.length;t<n&&E.length!==f;t++){var r=e[t];if(r.error&&u)E.push(r);else{var i=Gt(r);S(i.winningRev,i)}}}function C(e,t,n){n&&(x(t),E.length<f&&n.continue())}function P(){var e={total_rows:v,offset:a.skip,rows:E};a.update_seq&&void 0!==y&&(e.update_seq=y),t(null,e)}return q.get(Ft).onsuccess=function(e){v=e.target.result.docCount},a.update_seq&&(_=function(e){e.target.result&&0<e.target.result.length&&(y=e.target.result[0])},O.openCursor(null,"prev").onsuccess=function(e){var t=e.target.result,n=void 0;return t&&t.key&&(n=t.key),_({target:{result:[n]}})}),r||0===f?void 0:u?(g=a.keys,m=j,b=C,w=new Array(g.length),k=0,void g.forEach(function(t,n){m.get(t).onsuccess=function(e){e.target.result?w[n]=e.target.result:w[n]={key:t,error:"not_found"},++k===g.length&&b(g,w,{})}})):-1===f?function(e,t,n){if("function"!=typeof e.getAll){var r=[];e.openCursor(t).onsuccess=function(e){var t=e.target.result;t?(r.push(t.value),t.continue()):n({target:{result:r}})}}else e.getAll(t).onsuccess=n}(j,n,function(e){var t=e.target.result;a.descending&&(t=t.reverse()),x(t)}):void nn(j,n,a.descending,f+c,C)}var on=!1,sn=[];function an(){!on&&sn.length&&(on=!0,sn.shift()())}function un(c,e,t,n){if((c=R(c)).continuous){var r=t+":"+Ae();return en.addListener(t,r,e,c),en.notify(t),{cancel:function(){en.removeListener(t,r)}}}var f=c.doc_ids&&new q(c.doc_ids);c.since=c.since||0;var l=c.since,d="limit"in c?c.limit:-1;0===d&&(d=1);var h,i,p,o,v=[],y=0,_=X(c),g=new x;function m(e,t,n,r){if(n.seq!==t)return r();if(n.winningRev===e._rev)return r(n,e);var i=e._id+"::"+n.winningRev;o.get(i).onsuccess=function(e){r(n,Qt(e.target.result))}}function s(){c.complete(null,{results:v,last_seq:l})}var a=[Rt,Mt];c.attachments&&a.push(Nt);var u=Zt(n,a,"readonly");if(u.error)return c.complete(u.error);(h=u.txn).onabort=zt(c.complete),h.oncomplete=function(){!c.continuous&&c.attachments?Ht(v).then(s):s()},i=h.objectStore(Mt),p=h.objectStore(Rt),o=i.index("_doc_id_rev"),nn(i,c.since&&!c.descending?IDBKeyRange.lowerBound(c.since,!0):null,c.descending,d,function(r,e,o){if(o&&r.length){var s=new Array(r.length),a=new Array(r.length),i=0;e.forEach(function(e,n){!function(t,n,r){if(f&&!f.has(t._id))return r();var i=g.get(t._id);if(i)return m(t,n,i,r);p.get(t._id).onsuccess=function(e){i=Gt(e.target.result),g.set(t._id,i),m(t,n,i,r)}}(Qt(e),r[n],function(e,t){a[n]=e,s[n]=t,++i===r.length&&function(){for(var e=[],t=0,n=s.length;t<n&&y!==d;t++){var r=s[t];if(r){var i=a[t];e.push(u(i,r))}}Promise.all(e).then(function(e){for(var t=0,n=e.length;t<n;t++)e[t]&&c.onChange(e[t])}).catch(c.complete),y!==d&&o.continue()}()})})}function u(e,t){var n=c.processChange(t,e,c);l=n.seq=e.seq;var r=_(n);return"object"==typeof r?Promise.reject(r):r?(y++,c.return_docs&&v.push(n),c.attachments&&c.include_docs?new Promise(function(e){Yt(t,c,h,function(){Ht([n],c.binary).then(function(){e(n)})})}):Promise.resolve(n)):Promise.resolve()}})}var cn,fn=new x,ln=new x;function dn(t,e){var n,r,i,o=this;n=function(e){!function(l,r,d){var h=r.name,p=null;function s(e,i){var o=e.objectStore(Rt);o.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),o.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var n=t.value,r=Ne(n);n.deletedOrLocal=r?"1":"0",o.put(n),t.continue()}else i()}}function a(e,d){var h=e.objectStore(Kt),p=e.objectStore(Rt),v=e.objectStore(Mt),t=p.openCursor();t.onsuccess=function(e){var n=e.target.result;if(n){var t=n.value,r=t.id,i=Ue(r),o=Ee(t);if(i){var s=r+"::"+o,a=r+"::",u=r+"::~",c=v.index("_doc_id_rev"),f=IDBKeyRange.bound(a,u,!1,!1),l=c.openCursor(f);l.onsuccess=function(e){if(l=e.target.result){var t=l.value;t._doc_id_rev===s&&h.put(t),v.delete(l.primaryKey),l.continue()}else p.delete(n.primaryKey),n.continue()}}else n.continue()}else d&&d()}}function u(e,f){var n=e.objectStore(Mt),t=e.objectStore(Nt),l=e.objectStore(Ut),r=t.count();r.onsuccess=function(e){var t=e.target.result;if(!t)return f();n.openCursor().onsuccess=function(e){var t=e.target.result;if(!t)return f();for(var n=t.value,r=t.primaryKey,i=Object.keys(n._attachments||{}),o={},s=0;s<i.length;s++){var a=n._attachments[i[s]];o[a.digest]=!0}var u=Object.keys(o);for(s=0;s<u.length;s++){var c=u[s];l.put({seq:r,digestSeq:c+"::"+r})}t.continue()}}}function c(e){var u=e.objectStore(Mt),c=e.objectStore(Rt),t=c.openCursor();t.onsuccess=function(e){var n=e.target.result;if(n){var t,r,i,o,s=function(e){if(!e.data)return e.deleted="1"===e.deletedOrLocal,e;return Gt(e)}(n.value);if(s.winningRev=s.winningRev||Ee(s),s.seq)return a();t=s.id+"::",r=s.id+"::￿",i=u.index("_doc_id_rev").openCursor(IDBKeyRange.bound(t,r)),o=0,i.onsuccess=function(e){var t=e.target.result;if(!t)return s.seq=o,a();var n=t.primaryKey;o<n&&(o=n),t.continue()}}function a(){var e=Vt(s,s.winningRev,s.deleted),t=c.put(e);t.onsuccess=function(){n.continue()}}}}l._meta=null,l._remote=!1,l.type=function(){return"idb"},l._id=v(function(e){e(null,l._meta.instanceId)}),l._bulkDocs=function(e,t,n){tn(r,e,t,l,p,n)},l._get=function(e,o,t){var s,a,u,c=o.ctx;if(!c){var n=Zt(p,[Rt,Mt,Nt],"readonly");if(n.error)return t(n.error);c=n.txn}function f(){t(u,{doc:s,metadata:a,ctx:c})}c.objectStore(Rt).get(e).onsuccess=function(e){if(!(a=Gt(e.target.result)))return u=Y(D,"missing"),f();var t;if(o.rev)t=o.latest?function(e,t){for(var n,r=t.rev_tree.slice();n=r.pop();){var i=n.pos,o=n.ids,s=o[0],a=o[1],u=o[2],c=0===u.length,f=n.history?n.history.slice():[];if(f.push({id:s,pos:i,opts:a}),c)for(var l=0,d=f.length;l<d;l++){var h=f[l];if(h.pos+"-"+h.id===e)return i+"-"+s}for(var p=0,v=u.length;p<v;p++)r.push({pos:i+1,ids:u[p],history:f})}throw new Error("Unable to resolve latest revision for id "+t.id+", rev "+e)}(o.rev,a):o.rev;else{t=a.winningRev;var n=Ne(a);if(n)return u=Y(D,"deleted"),f()}var r=c.objectStore(Mt),i=a.id+"::"+t;r.index("_doc_id_rev").get(i).onsuccess=function(e){if((s=e.target.result)&&(s=Qt(s)),!s)return u=Y(D,"missing"),f();f()}}},l._getAttachment=function(e,t,n,r,i){var o;if(r.ctx)o=r.ctx;else{var s=Zt(p,[Rt,Mt,Nt],"readonly");if(s.error)return i(s.error);o=s.txn}var a=n.digest,u=n.content_type;o.objectStore(Nt).get(a).onsuccess=function(e){var t=e.target.result.body;Wt(t,u,r.binary,function(e){i(null,e)})}},l._info=function(e){var n,t,r=Zt(p,[Ft,Mt],"readonly");if(r.error)return e(r.error);var i=r.txn;i.objectStore(Ft).get(Ft).onsuccess=function(e){t=e.target.result.docCount},i.objectStore(Mt).openCursor(null,"prev").onsuccess=function(e){var t=e.target.result;n=t?t.key:0},i.oncomplete=function(){e(null,{doc_count:t,update_seq:n,idb_attachment_format:l._meta.blobSupport?"binary":"base64"})}},l._allDocs=function(e,t){rn(e,p,t)},l._changes=function(e){return un(e,l,h,p)},l._close=function(e){p.close(),fn.delete(h),e()},l._getRevisionTree=function(e,n){var t=Zt(p,[Rt],"readonly");if(t.error)return n(t.error);var r=t.txn,i=r.objectStore(Rt).get(e);i.onsuccess=function(e){var t=Gt(e.target.result);t?n(null,t.rev_tree):n(Y(D))}},l._doCompaction=function(i,s,e){var t=[Rt,Mt,Nt,Ut],n=Zt(p,t,"readwrite");if(n.error)return e(n.error);var o=n.txn,r=o.objectStore(Rt);r.get(i).onsuccess=function(e){var t=Gt(e.target.result);Se(t.rev_tree,function(e,t,n,r,i){var o=t+"-"+n;-1!==s.indexOf(o)&&(i.status="missing")}),Xt(s,i,o);var n=t.winningRev,r=t.deleted;o.objectStore(Rt).put(Vt(t,n,r))},o.onabort=zt(e),o.oncomplete=function(){e()}},l._getLocal=function(e,n){var t=Zt(p,[Kt],"readonly");if(t.error)return n(t.error);var r=t.txn,i=r.objectStore(Kt).get(e);i.onerror=zt(n),i.onsuccess=function(e){var t=e.target.result;t?(delete t._doc_id_rev,n(null,t)):n(Y(D))}},l._putLocal=function(r,i,o){"function"==typeof i&&(o=i,i={}),delete r._revisions;var s=r._rev,e=r._id;r._rev=s?"0-"+(parseInt(s.split("-")[1],10)+1):"0-1";var a,t=i.ctx;if(!t){var n=Zt(p,[Kt],"readwrite");if(n.error)return o(n.error);(t=n.txn).onerror=zt(o),t.oncomplete=function(){a&&o(null,a)}}var u,c=t.objectStore(Kt);s?(u=c.get(e)).onsuccess=function(e){var t=e.target.result;if(t&&t._rev===s){var n=c.put(r);n.onsuccess=function(){a={ok:!0,id:r._id,rev:r._rev},i.ctx&&o(null,a)}}else o(Y($))}:((u=c.add(r)).onerror=function(e){o(Y($)),e.preventDefault(),e.stopPropagation()},u.onsuccess=function(){a={ok:!0,id:r._id,rev:r._rev},i.ctx&&o(null,a)})},l._removeLocal=function(n,r,i){"function"==typeof r&&(i=r,r={});var o,e=r.ctx;if(!e){var t=Zt(p,[Kt],"readwrite");if(t.error)return i(t.error);(e=t.txn).oncomplete=function(){o&&i(null,o)}}var s=n._id,a=e.objectStore(Kt),u=a.get(s);u.onerror=zt(i),u.onsuccess=function(e){var t=e.target.result;t&&t._rev===n._rev?(a.delete(s),o={ok:!0,id:s,rev:"0-0"},r.ctx&&i(null,o)):i(Y(D))}},l._destroy=function(e,t){en.removeAllListeners(h);var n=ln.get(h);n&&n.result&&(n.result.close(),fn.delete(h));var r=indexedDB.deleteDatabase(h);r.onsuccess=function(){ln.delete(h),j()&&h in localStorage&&delete localStorage[h],t(null,{ok:!0})},r.onerror=zt(t)};var e=fn.get(h);if(e)return p=e.idb,l._meta=e.global,T(function(){d(null,l)});var t=indexedDB.open(h,Tt);ln.set(h,t),t.onupgradeneeded=function(e){var t=e.target.result;if(e.oldVersion<1)return function(e){var t=e.createObjectStore(Rt,{keyPath:"id"});e.createObjectStore(Mt,{autoIncrement:!0}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0}),e.createObjectStore(Nt,{keyPath:"digest"}),e.createObjectStore(Ft,{keyPath:"id",autoIncrement:!1}),e.createObjectStore(Jt),t.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),e.createObjectStore(Kt,{keyPath:"_id"});var n=e.createObjectStore(Ut,{autoIncrement:!0});n.createIndex("seq","seq"),n.createIndex("digestSeq","digestSeq",{unique:!0})}(t);var n,r=e.currentTarget.transaction;e.oldVersion<3&&t.createObjectStore(Kt,{keyPath:"_id"}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0}),e.oldVersion<4&&((n=t.createObjectStore(Ut,{autoIncrement:!0})).createIndex("seq","seq"),n.createIndex("digestSeq","digestSeq",{unique:!0}));var i=[s,a,u,c],o=e.oldVersion;!function e(){var t=i[o-1];o++;t&&t(r,e)}()},t.onsuccess=function(e){(p=e.target.result).onversionchange=function(){p.close(),fn.delete(h)},p.onabort=function(e){E("error","Database has a global failure",e.target.error),p.close(),fn.delete(h)};var t,n,r,i,o,s,a=p.transaction([Ft,Jt,Rt],"readwrite"),u=!1;function c(){void 0!==r&&u&&(l._meta={name:h,instanceId:i,blobSupport:r},fn.set(h,{idb:p,global:l._meta}),d(null,l))}function f(){if(void 0!==n&&void 0!==t){var e=h+"_id";e in t?i=t[e]:t[e]=i=Ae(),t.docCount=n,a.objectStore(Ft).put(t)}}a.objectStore(Ft).get(Ft).onsuccess=function(e){t=e.target.result||{id:Ft},f()},o=function(e){n=e,f()},a.objectStore(Rt).index("deletedOrLocal").count(IDBKeyRange.only("0")).onsuccess=function(e){o(e.target.result)},cn||(s=a,cn=new Promise(function(n){var e=he([""]),t=s.objectStore(Jt).put(e,"key");t.onsuccess=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),t=navigator.userAgent.match(/Edge\//);n(t||!e||43<=parseInt(e[1],10))},t.onerror=s.onabort=function(e){e.preventDefault(),e.stopPropagation(),n(!1)}}).catch(function(){return!1})),cn.then(function(e){r=e,c()}),a.oncomplete=function(){u=!0,c()},a.onabort=zt(d)},t.onerror=function(){var e="Failed to open indexedDB, are you in private browsing mode?";E("error",e),d(Y(G,e))}}(o,t,e)},r=e,i=o.constructor,sn.push(function(){n(function(e,t){!function(e,t,n,r){try{e(t,n)}catch(t){r.emit("error",t)}}(r,e,t,i),on=!1,T(function(){an()})})}),an()}dn.valid=function(){try{return"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}};var hn=25,pn=50,vn=5e3,yn=1e4,_n={};function gn(e){var n=(e.doc||e.ok)._attachments;n&&Object.keys(n).forEach(function(e){var t=n[e];t.data=ve(t.data,t.content_type)})}function mn(e){return/^_design/.test(e)?"_design/"+encodeURIComponent(e.slice(8)):/^_local/.test(e)?"_local/"+encodeURIComponent(e.slice(7)):encodeURIComponent(e)}function bn(n){return n._attachments&&Object.keys(n._attachments)?Promise.all(Object.keys(n._attachments).map(function(e){var t=n._attachments[e];if(t.data&&"string"!=typeof t.data)return new Promise(function(e){ge(t.data,e)}).then(function(e){t.data=e})})):Promise.resolve()}function wn(e,t){if(function(e){if(!e.prefix)return!1;var t=ue(e.prefix).protocol;return"http"===t||"https"===t}(t)){var n=t.name.substr(t.prefix.length);e=t.prefix.replace(/\/?$/,"/")+encodeURIComponent(n)}var r=ue(e);(r.user||r.password)&&(r.auth={username:r.user,password:r.password});var i=r.path.replace(/(^\/|\/$)/g,"").split("/");return r.db=i.pop(),-1===r.db.indexOf("%")&&(r.db=encodeURIComponent(r.db)),r.path=i.join("/"),r}function kn(e,t){return jn(e,e.db+"/"+t)}function jn(e,t){var n=e.path?"/":"";return e.protocol+"://"+e.host+(e.port?":"+e.port:"")+"/"+e.path+n+t}function On(t){return"?"+Object.keys(t).map(function(e){return e+"="+encodeURIComponent(t[e])}).join("&")}function qn(d,e){var t=this,y=wn(d.name,d),n=kn(y,"");d=R(d);var r,a=function(e,t){if((t=t||{}).headers=t.headers||new Xe,d.auth||y.auth){var n=d.auth||y.auth,r=n.username+":"+n.password,i=de(unescape(encodeURIComponent(r)));t.headers.set("Authorization","Basic "+i)}var o,s,a,u,c,f,l=d.headers||{};return Object.keys(l).forEach(function(e){t.headers.append(e,l[e])}),o=t,s="undefined"!=typeof navigator&&navigator.userAgent?navigator.userAgent.toLowerCase():"",a=-1!==s.indexOf("msie"),u=-1!==s.indexOf("trident"),c=-1!==s.indexOf("edge"),f=!("method"in o)||"GET"===o.method,(a||u||c)&&f&&(e+=(-1===e.indexOf("?")?"?":"&")+"_nonce="+Date.now()),(d.fetch||He)(e,t)};function i(e,n){return h(e,O(function(t){g().then(function(){return n.apply(this,t)}).catch(function(e){t.pop()(e)})})).bind(t)}function _(e,t,n){var r={};return(t=t||{}).headers=t.headers||new Xe,t.headers.get("Content-Type")||t.headers.set("Content-Type","application/json"),t.headers.get("Accept")||t.headers.set("Accept","application/json"),a(e,t).then(function(e){return r.ok=e.ok,r.status=e.status,e.json()}).then(function(e){if(r.data=e,!r.ok){r.data.status=r.status;var t=H(r.data);if(n)return n(t);throw t}if(Array.isArray(r.data)&&(r.data=r.data.map(function(e){return e.error||e.missing?H(e):e})),!n)return r;n(null,r.data)})}function g(){return d.skip_setup?Promise.resolve():r||((r=_(n).catch(function(e){return e&&e.status&&404===e.status?(S(404,"PouchDB is just detecting if the remote exists."),_(n,{method:"PUT"})):Promise.reject(e)}).catch(function(e){return!(!e||!e.status||412!==e.status)||Promise.reject(e)})).catch(function(){r=null}),r)}function c(e){return e.split("/").map(encodeURIComponent).join("/")}T(function(){e(null,t)}),t._remote=!0,t.type=function(){return"http"},t.id=i("id",function(n){a(jn(y,"")).then(function(e){return e.json()}).then(function(e){var t=e&&e.uuid?e.uuid+y.db:kn(y,"");n(null,t)}).catch(function(e){n(e)})}),t.compact=i("compact",function(r,i){"function"==typeof r&&(i=r,r={}),r=R(r),_(kn(y,"_compact"),{method:"POST"}).then(function(){!function n(){t.info(function(e,t){t&&!t.compact_running?i(null,{ok:!0}):setTimeout(n,r.interval||200)})}()})}),t.bulkGet=h("bulkGet",function(a,u){var c=this;function e(t){var e={};a.revs&&(e.revs=!0),a.attachments&&(e.attachments=!0),a.latest&&(e.latest=!0),_(kn(y,"_bulk_get"+On(e)),{method:"POST",body:JSON.stringify({docs:a.docs})}).then(function(e){a.attachments&&a.binary&&e.data.results.forEach(function(e){e.docs.forEach(gn)}),t(null,e.data)}).catch(t)}function n(){var e=pn,r=Math.ceil(a.docs.length/e),i=0,o=new Array(r);function t(n){return function(e,t){o[n]=t.results,++i===r&&u(null,{results:Z(o)})}}for(var n=0;n<r;n++){var s=m(a,["revs","attachments","binary","latest"]);s.docs=a.docs.slice(n*e,Math.min(a.docs.length,(n+1)*e)),k(c,s,t(n))}}var r=jn(y,""),t=_n[r];"boolean"!=typeof t?e(function(e,t){e?(_n[r]=!1,S(e.status,"PouchDB is just detecting if the remote supports the _bulk_get API."),n()):(_n[r]=!0,u(null,t))}):t?e(u):n()}),t._info=function(t){g().then(function(){return a(kn(y,""))}).then(function(e){return e.json()}).then(function(e){e.host=kn(y,""),t(null,e)}).catch(t)},t.fetch=function(e,t){return g().then(function(){return a(kn(y,e),t)})},t.get=i("get",function(t,s,n){"function"==typeof s&&(n=s,s={});var e={};function r(i){var o=i._attachments,e=o&&Object.keys(o);if(o&&e.length){var l,d,t=e.map(function(r){return function(){return n=o[e=r],t=mn(i._id)+"/"+c(e)+"?rev="+i._rev,a(kn(y,t)).then(function(e){return void 0===u||u.browser?e.blob():e.buffer()}).then(function(t){return s.binary?(void 0===u||u.browser||(t.type=n.content_type),t):new Promise(function(e){ge(t,e)})}).then(function(e){delete n.stub,delete n.length,n.data=e});var e,n,t}});return l=t,d=5,new Promise(function(e,t){var n,r=0,i=0,o=0,s=l.length;function a(){++o===s?n?t(n):e():f()}function u(){r--,a()}function c(e){r--,n=n||e,a()}function f(){for(;r<d&&i<s;)r++,l[i++]().then(u,c)}f()})}}(s=R(s)).revs&&(e.revs=!0),s.revs_info&&(e.revs_info=!0),s.latest&&(e.latest=!0),s.open_revs&&("all"!==s.open_revs&&(s.open_revs=JSON.stringify(s.open_revs)),e.open_revs=s.open_revs),s.rev&&(e.rev=s.rev),s.conflicts&&(e.conflicts=s.conflicts),s.update_seq&&(e.update_seq=s.update_seq),t=mn(t),_(kn(y,t+On(e))).then(function(t){return Promise.resolve().then(function(){if(s.attachments)return e=t.data,Array.isArray(e)?Promise.all(e.map(function(e){if(e.ok)return r(e.ok)})):r(e);var e}).then(function(){n(null,t.data)})}).catch(function(e){e.docId=t,n(e)})}),t.remove=i("remove",function(e,t,n,r){var i;"string"==typeof t?(i={_id:e,_rev:t},"function"==typeof n&&(r=n,n={})):(i=e,"function"==typeof t?(r=t,n={}):(r=n,n=t));var o=i._rev||n.rev;_(kn(y,mn(i._id))+"?rev="+o,{method:"DELETE"},r).catch(r)}),t.getAttachment=i("getAttachment",function(e,t,n,r){"function"==typeof n&&(r=n,n={});var i,o=n.rev?"?rev="+n.rev:"",s=kn(y,mn(e))+"/"+c(t)+o;a(s,{method:"GET"}).then(function(e){if(i=e.headers.get("content-type"),e.ok)return void 0===u||u.browser?e.blob():e.buffer();throw e}).then(function(e){void 0===u||u.browser||(e.type=i),r(null,e)}).catch(function(e){r(e)})}),t.removeAttachment=i("removeAttachment",function(e,t,n,r){_(kn(y,mn(e)+"/"+c(t))+"?rev="+n,{method:"DELETE"},r).catch(r)}),t.putAttachment=i("putAttachment",function(e,t,n,r,i,o){"function"==typeof i&&(o=i,i=r,r=n,n=null);var s=mn(e)+"/"+c(t),a=kn(y,s);if(n&&(a+="?rev="+n),"string"==typeof r){var u;try{u=le(r)}catch(e){return o(Y(F,"Attachment is not a valid base64 string"))}r=u?pe(u,i):""}_(a,{headers:new Xe({"Content-Type":i}),method:"PUT",body:r},o).catch(o)}),t._bulkDocs=function(e,t,n){e.new_edits=t.new_edits,g().then(function(){return Promise.all(e.docs.map(bn))}).then(function(){return _(kn(y,"_bulk_docs"),{method:"POST",body:JSON.stringify(e)},n)}).catch(n)},t._put=function(t,e,n){g().then(function(){return bn(t)}).then(function(){return _(kn(y,mn(t._id)),{method:"PUT",body:JSON.stringify(t)})}).then(function(e){n(null,e.data)}).catch(function(e){e.docId=t&&t._id,n(e)})},t.allDocs=i("allDocs",function(t,n){"function"==typeof t&&(n=t,t={});var e,r={},i="GET";(t=R(t)).conflicts&&(r.conflicts=!0),t.update_seq&&(r.update_seq=!0),t.descending&&(r.descending=!0),t.include_docs&&(r.include_docs=!0),t.attachments&&(r.attachments=!0),t.key&&(r.key=JSON.stringify(t.key)),t.start_key&&(t.startkey=t.start_key),t.startkey&&(r.startkey=JSON.stringify(t.startkey)),t.end_key&&(t.endkey=t.end_key),t.endkey&&(r.endkey=JSON.stringify(t.endkey)),void 0!==t.inclusive_end&&(r.inclusive_end=!!t.inclusive_end),void 0!==t.limit&&(r.limit=t.limit),void 0!==t.skip&&(r.skip=t.skip);var o=On(r);void 0!==t.keys&&(i="POST",e={keys:t.keys}),_(kn(y,"_all_docs"+o),{method:i,body:JSON.stringify(e)}).then(function(e){t.include_docs&&t.attachments&&t.binary&&e.data.rows.forEach(gn),n(null,e.data)}).catch(n)}),t._changes=function(s){var a="batch_size"in s?s.batch_size:hn;!(s=R(s)).continuous||"heartbeat"in s||(s.heartbeat=yn);var e="timeout"in s?s.timeout:3e4;"timeout"in s&&s.timeout&&e-s.timeout<vn&&(e=s.timeout+vn),"heartbeat"in s&&s.heartbeat&&e-s.heartbeat<vn&&(e=s.heartbeat+vn);var i={};"timeout"in s&&s.timeout&&(i.timeout=s.timeout);var u=void 0!==s.limit&&s.limit,c=u;if(s.style&&(i.style=s.style),(s.include_docs||s.filter&&"function"==typeof s.filter)&&(i.include_docs=!0),s.attachments&&(i.attachments=!0),s.continuous&&(i.feed="longpoll"),s.seq_interval&&(i.seq_interval=s.seq_interval),s.conflicts&&(i.conflicts=!0),s.descending&&(i.descending=!0),s.update_seq&&(i.update_seq=!0),"heartbeat"in s&&s.heartbeat&&(i.heartbeat=s.heartbeat),s.filter&&"string"==typeof s.filter&&(i.filter=s.filter),s.view&&"string"==typeof s.view&&(i.filter="_view",i.view=s.view),s.query_params&&"object"==typeof s.query_params)for(var t in s.query_params)s.query_params.hasOwnProperty(t)&&(i[t]=s.query_params[t]);var o,f="GET";s.doc_ids?(i.filter="_doc_ids",f="POST",o={doc_ids:s.doc_ids}):s.selector&&(i.filter="_selector",f="POST",o={selector:s.selector});var l,d=new Ye,h=function(e,t){if(!s.aborted){i.since=e,"object"==typeof i.since&&(i.since=JSON.stringify(i.since)),s.descending?u&&(i.limit=c):i.limit=!u||a<c?a:c;var n=kn(y,"_changes"+On(i)),r={signal:d.signal,method:f,body:JSON.stringify(o)};l=e,s.aborted||g().then(function(){return _(n,r,t)}).catch(t)}},p={results:[]},v=function(e,t){if(!s.aborted){var n=0;if(t&&t.results){n=t.results.length,p.last_seq=t.last_seq;var r=null,i=null;"number"==typeof t.pending&&(r=t.pending),"string"!=typeof p.last_seq&&"number"!=typeof p.last_seq||(i=p.last_seq);s.query_params,t.results=t.results.filter(function(e){c--;var t=X(s)(e);return t&&(s.include_docs&&s.attachments&&s.binary&&gn(e),s.return_docs&&p.results.push(e),s.onChange(e,r,i)),t})}else if(e)return s.aborted=!0,void s.complete(e);t&&t.last_seq&&(l=t.last_seq);var o=u&&c<=0||t&&n<a||s.descending;(!s.continuous||u&&c<=0)&&o?s.complete(null,p):T(function(){h(l,v)})}};return h(s.since||0,v),{cancel:function(){s.aborted=!0,d.abort()}}},t.revsDiff=i("revsDiff",function(e,t,n){"function"==typeof t&&(n=t,t={}),_(kn(y,"_revs_diff"),{method:"POST",body:JSON.stringify(e)},n).catch(n)}),t._close=function(e){e()},t._destroy=function(e,t){_(kn(y,""),{method:"DELETE"}).then(function(e){t(null,e)}).catch(function(e){404===e.status?t(null,{ok:!0}):t(e)})}}function An(e){this.status=400,this.name="query_parse_error",this.message=e,this.error=!0;try{Error.captureStackTrace(this,An)}catch(e){}}function En(e){this.status=404,this.name="not_found",this.message=e,this.error=!0;try{Error.captureStackTrace(this,En)}catch(e){}}function Sn(e){this.status=500,this.name="invalid_value",this.message=e,this.error=!0;try{Error.captureStackTrace(this,Sn)}catch(e){}}function xn(e,t){return t&&e.then(function(e){T(function(){t(null,e)})},function(e){T(function(){t(e)})}),e}function Cn(n,r){return function(){var e=arguments,t=this;return n.add(function(){return r.apply(t,e)})}}function Pn(e){var t=new q(e),n=new Array(t.size),r=-1;return t.forEach(function(e){n[++r]=e}),n}function Ln(e){var n=new Array(e.size),r=-1;return e.forEach(function(e,t){n[++r]=t}),n}function Dn(e){return new Sn("builtin "+e+" function requires map values to be numbers or number arrays")}function $n(e){for(var t=0,n=0,r=e.length;n<r;n++){var i=e[n];if("number"!=typeof i){if(!Array.isArray(i))throw Dn("_sum");t="number"==typeof t?[t]:t;for(var o=0,s=i.length;o<s;o++){var a=i[o];if("number"!=typeof a)throw Dn("_sum");void 0===t[o]?t.push(a):t[o]+=a}}else"number"==typeof t?t+=i:t[0]+=i}return t}qn.valid=function(){return!0},r(An,Error),r(En,Error),r(Sn,Error);var In=E.bind(null,"log"),Bn=Array.isArray,Tn=JSON.parse;function Rn(e,t){return ce("return ("+e.replace(/;\s*$/,"")+");",{emit:t,sum:$n,log:In,isArray:Bn,toJSON:Tn})}function Mn(){this.promise=new Promise(function(e){e()})}function Nn(e){if(!e)return"undefined";switch(typeof e){case"function":case"string":return e.toString();default:return JSON.stringify(e)}}function Un(i,o,s,a,t,n){var e,u,c=(e=a,Nn(s)+Nn(e)+"undefined");if(!t&&(u=i._cachedViews=i._cachedViews||{})[c])return u[c];var r=i.info().then(function(e){var r=e.db_name+"-mrview-"+(t?"temp":Oe(c));return fe(i,"_local/"+n,function(e){e.views=e.views||{};var t=o;-1===t.indexOf("/")&&(t=o+"/"+o);var n=e.views[t]=e.views[t]||{};if(!n[r])return n[r]=!0,e}).then(function(){return i.registerDependentDatabase(r).then(function(e){var t=e.db;t.auto_compaction=!0;var n={name:r,db:t,sourceDB:i,adapter:i.adapter,mapFun:s,reduceFun:a};return n.db.get("_local/lastSeq").catch(function(e){if(404!==e.status)throw e}).then(function(e){return n.seq=e?e.seq:0,u&&n.db.once("destroyed",function(){delete u[c]}),n})})})});return u&&(u[c]=r),r}Mn.prototype.add=function(e){return this.promise=this.promise.catch(function(){}).then(function(){return e()}),this.promise},Mn.prototype.finish=function(){return this.promise};var Fn={},Kn=new Mn,Jn=50;function zn(e){return-1===e.indexOf("/")?[e,e]:e.split("/")}function Vn(e,t){try{e.emit("error",t)}catch(e){E("error","The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."),E("error",t)}}var Gn={_sum:function(e,t){return $n(t)},_count:function(e,t){return t.length},_stats:function(e,t){return{sum:$n(t),min:Math.min.apply(null,t),max:Math.max.apply(null,t),count:t.length,sumsqr:function(e){for(var t=0,n=0,r=e.length;n<r;n++){var i=e[n];t+=i*i}return t}(t)}}};var Qn=function(f,t,v,l){function d(t,e,n){try{e(n)}catch(e){Vn(t,e)}}function y(t,e,n,r,i){try{return{output:e(n,r,i)}}catch(e){return Vn(t,e),{error:e}}}function h(e,t){var n=ct(e.key,t.key);return 0!==n?n:ct(e.value,t.value)}function _(e){var t=e.value;return t&&"object"==typeof t&&t._id||e.id}function p(t){return function(e){return t.include_docs&&t.attachments&&t.binary&&e.rows.forEach(function(e){var n=e.doc&&e.doc._attachments;n&&Object.keys(n).forEach(function(e){var t=n[e];n[e].data=ve(t.data,t.content_type)})}),e}}function g(e,t,n,r){var i=t[e];void 0!==i&&(r&&(i=encodeURIComponent(JSON.stringify(i))),n.push(e+"="+i))}function s(e){if(void 0!==e){var t=Number(e);return isNaN(t)||t!==parseInt(e,10)?e:t}}function m(n,e){var t=n.descending?"endkey":"startkey",r=n.descending?"startkey":"endkey";if(void 0!==n[t]&&void 0!==n[r]&&0<ct(n[t],n[r]))throw new An("No rows can match your key range, reverse your start_key and end_key or set {descending : true}");if(e.reduce&&!1!==n.reduce){if(n.include_docs)throw new An("{include_docs:true} is invalid for reduce");if(n.keys&&1<n.keys.length&&!n.group&&!n.group_level)throw new An("Multi-key fetches for reduce views must use {group: true}")}["group_level","limit","skip"].forEach(function(e){var t=function(e){if(e){if("number"!=typeof e)return new An('Invalid value for integer: "'+e+'"');if(e<0)return new An('Invalid value for positive integer: "'+e+'"')}}(n[e]);if(t)throw t})}function b(t){return function(e){if(404===e.status)return t;throw e}}function w(e,n,t){var r,i="_local/doc_"+e,o={_id:i,keys:[]},s=t.get(e),c=s[0],a=s[1];return(1===(r=a).length&&/^1-/.test(r[0].rev)?Promise.resolve(o):n.db.get(i).catch(b(o))).then(function(t){return(e=t,e.keys.length?n.db.allDocs({keys:e.keys,include_docs:!0}):Promise.resolve({rows:[]})).then(function(e){return function(e,t){for(var r=[],i=new q,n=0,o=t.rows.length;n<o;n++){var s=t.rows[n].doc;if(s&&(r.push(s),i.add(s._id),s._deleted=!c.has(s._id),!s._deleted)){var a=c.get(s._id);"value"in a&&(s.value=a.value)}}var u=Ln(c);return u.forEach(function(e){if(!i.has(e)){var t={_id:e},n=c.get(e);"value"in n&&(t.value=n.value),r.push(t)}}),e.keys=Pn(u.concat(e.keys)),r.push(e),r}(t,e)});var e})}function r(e){var t="string"==typeof e?e:e.name,n=Fn[t];return n||(n=Fn[t]=new Mn),n}function k(e){return Cn(r(e),function(){return function(s){var a,u,c=t(s.mapFun,function(e,t){var n={id:u._id,key:ft(e)};null!=t&&(n.value=ft(t)),a.push(n)}),f=s.seq||0;function r(n,o){return function(){return t=n,i=o,e="_local/lastSeq",(r=s).db.get(e).catch(b({_id:e,seq:0})).then(function(n){var e=Ln(t);return Promise.all(e.map(function(e){return w(e,r,t)})).then(function(e){var t=Z(e);return n.seq=i,t.push(n),r.db.bulkDocs({docs:t})})});var r,t,i,e}}var i=new Mn;function o(){return s.sourceDB.changes({return_docs:!0,conflicts:!0,include_docs:!0,style:"all_docs",since:f,limit:Jn}).then(e)}function e(e){var t=e.results;if(t.length){var n=function(e){for(var t=new x,n=0,r=e.length;n<r;n++){var i=e[n];if("_"!==i.doc._id[0]){a=[],(u=i.doc)._deleted||d(s.sourceDB,c,u),a.sort(h);var o=l(a);t.set(i.doc._id,[o,i.changes])}f=i.seq}return t}(t);if(i.add(r(n,f)),!(t.length<Jn))return o()}}function l(e){for(var t,n=new x,r=0,i=e.length;r<i;r++){var o=e[r],s=[o.key,o.id];0<r&&0===ct(o.key,t)&&s.push(r),n.set(dt(s),o),t=o.key}return n}return o().then(function(){return i.finish()}).then(function(){s.seq=f})}(e)})()}function j(e,t){return Cn(r(e),function(){return function(r,i){var o,s=r.reduceFun&&!1!==i.reduce,a=i.skip||0;function n(e){return e.include_docs=!0,r.db.allDocs(e).then(function(e){return o=e.total_rows,e.rows.map(function(e){if("value"in e.doc&&"object"==typeof e.doc.value&&null!==e.doc.value){var t=Object.keys(e.doc.value).sort(),n=["id","key","value"];if(!(t<n||n<t))return e.doc.value}var r=function(e){for(var t=[],n=[],r=0;;){var i=e[r++];if("\0"!==i)switch(i){case"1":t.push(null);break;case"2":t.push("1"===e[r]),r++;break;case"3":var o=ht(e,r);t.push(o.num),r+=o.length;break;case"4":for(var s="";;){var a=e[r];if("\0"===a)break;s+=a,r++}s=s.replace(/\u0001\u0001/g,"\0").replace(/\u0001\u0002/g,"").replace(/\u0002\u0002/g,""),t.push(s);break;case"5":var u={element:[],index:t.length};t.push(u.element),n.push(u);break;case"6":var c={element:{},index:t.length};t.push(c.element),n.push(c);break;default:throw new Error("bad collationIndex or unexpectedly reached end of input: "+i)}else{if(1===t.length)return t.pop();pt(t,n)}}}(e.doc._id);return{key:r[0],id:r[1],value:"value"in e.doc?e.doc.value:null}})})}function e(t){var n;if(n=s?function(e,t,n){0===n.group_level&&delete n.group_level;var r,i,o,s=n.group||n.group_level,a=v(e.reduceFun),u=[],c=isNaN(n.group_level)?Number.POSITIVE_INFINITY:n.group_level;t.forEach(function(e){var t=u[u.length-1],n=s?e.key:null;if(s&&Array.isArray(n)&&(n=n.slice(0,c)),t&&0===ct(t.groupKey,n))return t.keys.push([e.key,e.id]),void t.values.push(e.value);u.push({keys:[[e.key,e.id]],values:[e.value],groupKey:n})}),t=[];for(var f=0,l=u.length;f<l;f++){var d=u[f],h=y(e.sourceDB,a,d.keys,d.values,!1);if(h.error&&h.error instanceof Sn)throw h.error;t.push({value:h.error?null:h.output,key:d.groupKey})}return{rows:(r=t,i=n.limit,o=n.skip,o=o||0,"number"==typeof i?r.slice(o,i+o):0<o?r.slice(o):r)}}(r,t,i):{total_rows:o,offset:a,rows:t},i.update_seq&&(n.update_seq=r.seq),i.include_docs){var e=Pn(t.map(_));return r.sourceDB.allDocs({keys:e,include_docs:!0,conflicts:i.conflicts,attachments:i.attachments,binary:i.binary}).then(function(e){var r=new x;return e.rows.forEach(function(e){r.set(e.id,e.doc)}),t.forEach(function(e){var t=_(e),n=r.get(t);n&&(e.doc=n)}),n})}return n}if(void 0===i.keys||i.keys.length||(i.limit=0,delete i.keys),void 0!==i.keys){var t=i.keys,u=t.map(function(e){var t={startkey:dt([e]),endkey:dt([e,{}])};return i.update_seq&&(t.update_seq=!0),n(t)});return Promise.all(u).then(Z).then(e)}var c,f,l={descending:i.descending};if(i.update_seq&&(l.update_seq=!0),"start_key"in i&&(c=i.start_key),"startkey"in i&&(c=i.startkey),"end_key"in i&&(f=i.end_key),"endkey"in i&&(f=i.endkey),void 0!==c&&(l.startkey=i.descending?dt([c,{}]):dt([c])),void 0!==f){var d=!1!==i.inclusive_end;i.descending&&(d=!d),l.endkey=dt(d?[f,{}]:[f])}if(void 0!==i.key){var h=dt([i.key]),p=dt([i.key,{}]);l.descending?(l.endkey=h,l.startkey=p):(l.startkey=h,l.endkey=p)}return s||("number"==typeof i.limit&&(l.limit=i.limit),l.skip=a),n(l).then(e)}(e,t)})()}function a(n,e,r){if("function"==typeof n._query)return t=n,i=e,o=r,new Promise(function(n,r){t._query(i,o,function(e,t){if(e)return r(e);n(t)})});var t,i,o;if(te(n))return function(e,t,n){var r,i,o,s=[],a="GET";if(g("reduce",n,s),g("include_docs",n,s),g("attachments",n,s),g("limit",n,s),g("descending",n,s),g("group",n,s),g("group_level",n,s),g("skip",n,s),g("stale",n,s),g("conflicts",n,s),g("startkey",n,s,!0),g("start_key",n,s,!0),g("endkey",n,s,!0),g("end_key",n,s,!0),g("inclusive_end",n,s),g("key",n,s,!0),g("update_seq",n,s),s=""===(s=s.join("&"))?"":"?"+s,void 0!==n.keys){var u="keys="+encodeURIComponent(JSON.stringify(n.keys));u.length+s.length+1<=2e3?s+=("?"===s[0]?"&":"?")+u:(a="POST","string"==typeof t?r={keys:n.keys}:t.keys=n.keys)}if("string"==typeof t){var c=zn(t);return e.fetch("_design/"+c[0]+"/_view/"+c[1]+s,{headers:new Xe({"Content-Type":"application/json"}),method:a,body:JSON.stringify(r)}).then(function(e){return i=e.ok,o=e.status,e.json()}).then(function(e){if(!i)throw e.status=o,H(e);return e.rows.forEach(function(e){if(e.value&&e.value.error&&"builtin_reduce_error"===e.value.error)throw new Error(e.reason)}),e}).then(p(n))}return r=r||{},Object.keys(t).forEach(function(e){Array.isArray(t[e])?r[e]=t[e]:r[e]=t[e].toString()}),e.fetch("_temp_view"+s,{headers:new Xe({"Content-Type":"application/json"}),method:"POST",body:JSON.stringify(r)}).then(function(e){return i=e.ok,o=e.status,e.json()}).then(function(e){if(!i)throw e.status=o,H(e);return e}).then(p(n))}(n,e,r);if("string"!=typeof e)return m(r,e),Kn.add(function(){return Un(n,"temp_view/temp_view",e.map,e.reduce,!0,f).then(function(e){return t=k(e).then(function(){return j(e,r)}),n=function(){return e.db.destroy()},t.then(function(e){return n().then(function(){return e})},function(e){return n().then(function(){throw e})});var t,n})}),Kn.finish();var s=e,a=zn(s),u=a[0],c=a[1];return n.get("_design/"+u).then(function(e){var t=e.views&&e.views[c];if(!t)throw new En("ddoc "+e._id+" has no view named "+c);return l(e,c),m(r,t),Un(n,s,t.map,t.reduce,!1,f).then(function(e){return"ok"===r.stale||"update_after"===r.stale?("update_after"===r.stale&&T(function(){k(e)}),j(e,r)):k(e).then(function(){return j(e,r)})})})}var i;return{query:function(e,t,n){var r,i=this;"function"==typeof t&&(n=t,t={}),t=t?((r=t).group_level=s(r.group_level),r.limit=s(r.limit),r.skip=s(r.skip),r):{},"function"==typeof e&&(e={map:e});var o=Promise.resolve().then(function(){return a(i,e,t)});return xn(o,n),o},viewCleanup:(i=function(){var e,n,t=this;return"function"==typeof t._viewCleanup?(e=t,new Promise(function(n,r){e._viewCleanup(function(e,t){if(e)return r(e);n(t)})})):te(t)?t.fetch("_view_cleanup",{headers:new Xe({"Content-Type":"application/json"}),method:"POST"}).then(function(e){return e.json()}):(n=t).get("_local/"+f).then(function(a){var u=new x;Object.keys(a.views).forEach(function(e){var t=zn(e),n="_design/"+t[0],r=t[1],i=u.get(n);i||(i=new q,u.set(n,i)),i.add(r)});var e={keys:Ln(u),include_docs:!0};return n.allDocs(e).then(function(e){var s={};e.rows.forEach(function(i){var o=i.key.substring(8);u.get(i.key).forEach(function(e){var t=o+"/"+e;a.views[t]||(t=e);var n=Object.keys(a.views[t]),r=i.doc&&i.doc.views&&i.doc.views[e];n.forEach(function(e){s[e]=s[e]||r})})});var t=Object.keys(s).filter(function(e){return!s[e]}).map(function(e){return Cn(r(e),function(){return new n.constructor(e,n.__opts).destroy()})()});return Promise.all(t).then(function(){return{ok:!0}})})},b({ok:!0}))},O(function(e){var t=e.pop(),n=i.apply(this,e);return"function"==typeof t&&xn(n,t),n}))}}("mrviews",function(e,t){if("function"==typeof e&&2===e.length){var n=e;return function(e){return n(e,t)}}return Rn(e.toString(),t)},function(e){var t=e.toString(),n=function(e){if(/^_sum/.test(e))return Gn._sum;if(/^_count/.test(e))return Gn._count;if(/^_stats/.test(e))return Gn._stats;if(/^_/.test(e))throw new Error(e+" is not a supported reduce function.")}(t);return n||Rn(t)},function(e,t){var n=e.views&&e.views[t];if("string"!=typeof n.map)throw new En("ddoc "+e._id+" has no string view named "+t+", instead found object of type: "+typeof n.map)});var Wn={query:function(e,t,n){return Qn.query.call(this,e,t,n)},viewCleanup:function(e){return Qn.viewCleanup.call(this,e)}};function Yn(e){return/^1-/.test(e)}function Hn(t,n){var e=Object.keys(n._attachments);return Promise.all(e.map(function(e){return t.getAttachment(n._id,e,{rev:n._rev})}))}function Xn(r,u,i,o){i=R(i);var s=[],c=!0;function t(e){return r.allDocs({keys:e,include_docs:!0,conflicts:!0}).then(function(e){if(o.cancelled)throw new Error("cancelled");e.rows.forEach(function(e){var t,n;e.deleted||!e.doc||!Yn(e.value.rev)||(n=e.doc)._attachments&&0<Object.keys(n._attachments).length||(t=e.doc)._conflicts&&0<t._conflicts.length||(e.doc._conflicts&&delete e.doc._conflicts,s.push(e.doc),delete i[e.id])})})}return Promise.resolve().then(function(){var e=Object.keys(i).filter(function(e){var t=i[e].missing;return 1===t.length&&Yn(t[0])});if(0<e.length)return t(e)}).then(function(){var e,n,t=(e=i,n=[],Object.keys(e).forEach(function(t){e[t].missing.forEach(function(e){n.push({id:t,rev:e})})}),{docs:n,revs:!0,latest:!0});if(t.docs.length)return r.bulkGet(t).then(function(e){if(o.cancelled)throw new Error("cancelled");return Promise.all(e.results.map(function(e){return Promise.all(e.docs.map(function(e){var o,s,a,t,n,i=e.ok;return e.error&&(c=!1),i&&i._attachments?(o=u,s=r,a=i,t=te(s)&&!te(o),n=Object.keys(a._attachments),t?o.get(a._id).then(function(i){return Promise.all(n.map(function(e){return n=a,r=e,(t=i)._attachments&&t._attachments[r]&&t._attachments[r].digest===n._attachments[r].digest?o.getAttachment(i._id,e):s.getAttachment(a._id,e);var t,n,r}))}).catch(function(e){if(404!==e.status)throw e;return Hn(s,a)}):Hn(s,a)).then(function(e){var r=Object.keys(i._attachments);return e.forEach(function(e,t){var n=i._attachments[r[t]];delete n.stub,delete n.length,n.data=e}),i}):i}))})).then(function(e){s=s.concat(Z(e).filter(Boolean))})})}).then(function(){return{ok:c,docs:s}})}var Zn=1,er="pouchdb",tr=5,nr=0;function rr(t,n,r,i,o){return t.get(n).catch(function(e){if(404===e.status)return"http"!==t.adapter&&"https"!==t.adapter||S(404,"PouchDB is just checking if a remote checkpoint exists."),{session_id:i,_id:n,history:[],replicator:er,version:Zn};throw e}).then(function(e){if(!o.cancelled&&e.last_seq!==r)return e.history=(e.history||[]).filter(function(e){return e.session_id!==i}),e.history.unshift({last_seq:r,session_id:i}),e.history=e.history.slice(0,tr),e.version=Zn,e.replicator=er,e.session_id=i,e.last_seq=r,t.put(e).catch(function(e){if(409===e.status)return rr(t,n,r,i,o);throw e})})}function ir(e,t,n,r,i){this.src=e,this.target=t,this.id=n,this.returnValue=r,this.opts=i||{}}ir.prototype.writeCheckpoint=function(e,t){var n=this;return this.updateTarget(e,t).then(function(){return n.updateSource(e,t)})},ir.prototype.updateTarget=function(e,t){return this.opts.writeTargetCheckpoint?rr(this.target,this.id,e,t,this.returnValue):Promise.resolve(!0)},ir.prototype.updateSource=function(e,t){if(this.opts.writeSourceCheckpoint){var n=this;return rr(this.src,this.id,e,t,this.returnValue).catch(function(e){if(ar(e))return!(n.opts.writeSourceCheckpoint=!1);throw e})}return Promise.resolve(!0)};var or={undefined:function(e,t){return 0===ct(e.last_seq,t.last_seq)?t.last_seq:0},1:function(e,t){return function(e,t){if(e.session_id===t.session_id)return{last_seq:e.last_seq,history:e.history};return function e(t,n){var r=t[0];var i=t.slice(1);var o=n[0];var s=n.slice(1);if(!r||0===n.length)return{last_seq:nr,history:[]};var a=r.session_id;if(sr(a,n))return{last_seq:r.last_seq,history:t};var u=o.session_id;if(sr(u,i))return{last_seq:o.last_seq,history:s};return e(i,s)}(e.history,t.history)}(t,e).last_seq}};function sr(e,t){var n=t[0],r=t.slice(1);return!(!e||0===t.length)&&(e===n.session_id||sr(e,r))}function ar(e){return"number"==typeof e.status&&4===Math.floor(e.status/100)}ir.prototype.getCheckpoint=function(){var t=this;return t.opts&&t.opts.writeSourceCheckpoint&&!t.opts.writeTargetCheckpoint?t.src.get(t.id).then(function(e){return e.last_seq||nr}).catch(function(e){if(404!==e.status)throw e;return nr}):t.target.get(t.id).then(function(n){return t.opts&&t.opts.writeTargetCheckpoint&&!t.opts.writeSourceCheckpoint?n.last_seq||nr:t.src.get(t.id).then(function(e){return n.version!==e.version?nr:(t=n.version?n.version.toString():"undefined")in or?or[t](n,e):nr;var t},function(e){if(404===e.status&&n.last_seq)return t.src.put({_id:t.id,last_seq:nr}).then(function(){return nr},function(e){return ar(e)?(t.opts.writeSourceCheckpoint=!1,n.last_seq):nr});throw e})}).catch(function(e){if(404!==e.status)throw e;return nr})};var ur=0;function cr(e,t,n){var r,i=n.doc_ids?n.doc_ids.sort(ct):"",o=n.filter?n.filter.toString():"",s="",a="",u="";return n.selector&&(u=JSON.stringify(n.selector)),n.filter&&n.query_params&&(s=JSON.stringify((r=n.query_params,Object.keys(r).sort(ct).reduce(function(e,t){return e[t]=r[t],e},{})))),n.filter&&"_view"===n.filter&&(a=n.view.toString()),Promise.all([e.id(),t.id()]).then(function(e){var t=e[0]+e[1]+o+a+s+i+u;return new Promise(function(e){je(t,e)})}).then(function(e){return"_local/"+(e=e.replace(/\//g,".").replace(/\+/g,"_"))})}function fr(r,i,o,s,a){var u,n,c,f=[],l={seq:0,changes:[],docs:[]},d=!1,h=!1,p=!1,v=0,y=o.continuous||o.live||!1,t=o.batch_size||100,_=o.batches_limit||10,g=!1,m=o.doc_ids,b=o.selector,w=[],k=Ae();a=a||{ok:!0,start_time:(new Date).toISOString(),docs_read:0,docs_written:0,doc_write_failures:0,errors:[]};var j={};function e(){return c?Promise.resolve():cr(r,i,o).then(function(e){n=e;var t={};t=!1===o.checkpoint?{writeSourceCheckpoint:!1,writeTargetCheckpoint:!1}:"source"===o.checkpoint?{writeSourceCheckpoint:!0,writeTargetCheckpoint:!1}:"target"===o.checkpoint?{writeSourceCheckpoint:!1,writeTargetCheckpoint:!0}:{writeSourceCheckpoint:!0,writeTargetCheckpoint:!0},c=new ir(r,i,n,s,t)})}function O(){if(w=[],0!==u.docs.length){var n=u.docs,e={timeout:o.timeout};return i.bulkDocs({docs:n,new_edits:!1},e).then(function(e){if(s.cancelled)throw C(),new Error("cancelled");var r=Object.create(null);e.forEach(function(e){e.error&&(r[e.id]=e)});var t=Object.keys(r).length;a.doc_write_failures+=t,a.docs_written+=n.length-t,n.forEach(function(e){var t=r[e._id];if(t){a.errors.push(t);var n=(t.name||"").toLowerCase();if("unauthorized"!==n&&"forbidden"!==n)throw t;s.emit("denied",R(t))}else w.push(e)})},function(e){throw a.doc_write_failures+=n.length,e})}}function q(){if(u.error)throw new Error("There was a problem getting docs.");a.last_seq=v=u.seq;var e=R(a);return w.length&&(e.docs=w,"number"==typeof u.pending&&(e.pending=u.pending,delete u.pending),s.emit("change",e)),d=!0,c.writeCheckpoint(u.seq,k).then(function(){if(d=!1,s.cancelled)throw C(),new Error("cancelled");u=void 0,$()}).catch(function(e){throw B(e),e})}function A(){return Xn(r,i,u.diffs,s).then(function(e){u.error=!e.ok,e.docs.forEach(function(e){delete u.diffs[e._id],a.docs_read++,u.docs.push(e)})})}function E(){var t;s.cancelled||u||(0!==f.length?(u=f.shift(),(t={},u.changes.forEach(function(e){"_user/"!==e.id&&(t[e.id]=e.changes.map(function(e){return e.rev}))}),i.revsDiff(t).then(function(e){if(s.cancelled)throw C(),new Error("cancelled");u.diffs=e})).then(A).then(O).then(q).then(E).catch(function(e){x("batch processing terminated with error",e)})):S(!0))}function S(e){0!==l.changes.length?(e||h||l.changes.length>=t)&&(f.push(l),l={seq:0,changes:[],docs:[]},"pending"!==s.state&&"stopped"!==s.state||(s.state="active",s.emit("active")),E()):0!==f.length||u||((y&&j.live||h)&&(s.state="pending",s.emit("paused")),h&&C())}function x(e,t){p||(t.message||(t.message=e),a.ok=!1,a.status="aborting",f=[],l={seq:0,changes:[],docs:[]},C(t))}function C(e){if(!(p||s.cancelled&&(a.status="cancelled",d)))if(a.status=a.status||"complete",a.end_time=(new Date).toISOString(),a.last_seq=v,p=!0,e){(e=Y(e)).result=a;var t=(e.name||"").toLowerCase();"unauthorized"===t||"forbidden"===t?(s.emit("error",e),s.removeAllListeners()):function(e,t,n,r){if(!1===e.retry)return t.emit("error",n),t.removeAllListeners();if("function"!=typeof e.back_off_function&&(e.back_off_function=M),t.emit("requestError",n),"active"===t.state||"pending"===t.state){t.emit("paused",n),t.state="stopped";var i=function(){e.current_back_off=ur};t.once("paused",function(){t.removeListener("active",i)}),t.once("active",i)}e.current_back_off=e.current_back_off||ur,e.current_back_off=e.back_off_function(e.current_back_off),setTimeout(r,e.current_back_off)}(o,s,e,function(){fr(r,i,o,s)})}else s.emit("complete",a),s.removeAllListeners()}function P(e,t,n){if(s.cancelled)return C();"number"==typeof t&&(l.pending=t),X(o)(e)&&(l.seq=e.seq||n,l.changes.push(e),T(function(){S(0===f.length&&j.live)}))}function L(e){if(g=!1,s.cancelled)return C();if(0<e.results.length)j.since=e.results[e.results.length-1].seq,$(),S(!0);else{var t=function(){y?(j.live=!0,$()):h=!0,S(!0)};u||0!==e.results.length?t():(d=!0,c.writeCheckpoint(e.last_seq,k).then(function(){d=!1,a.last_seq=v=e.last_seq,t()}).catch(B))}}function D(e){if(g=!1,s.cancelled)return C();x("changes rejected",e)}function $(){if(!g&&!h&&f.length<_){g=!0,s._changes&&(s.removeListener("cancel",s._abortChanges),s._changes.cancel()),s.once("cancel",t);var e=r.changes(j).on("change",P);e.then(n,n),e.then(L).catch(D),o.retry&&(s._changes=e,s._abortChanges=t)}function t(){e.cancel()}function n(){s.removeListener("cancel",t)}}function I(){e().then(function(){if(!s.cancelled)return c.getCheckpoint().then(function(e){j={since:v=e,limit:t,batch_size:t,style:"all_docs",doc_ids:m,selector:b,return_docs:!0},o.filter&&("string"!=typeof o.filter?j.include_docs=!0:j.filter=o.filter),"heartbeat"in o&&(j.heartbeat=o.heartbeat),"timeout"in o&&(j.timeout=o.timeout),o.query_params&&(j.query_params=o.query_params),o.view&&(j.view=o.view),$()});C()}).catch(function(e){x("getCheckpoint rejected with ",e)})}function B(e){d=!1,x("writeCheckpoint completed with error",e)}s.ready(r,i),s.cancelled?C():(s._addedListeners||(s.once("cancel",C),"function"==typeof o.complete&&(s.once("error",o.complete),s.once("complete",function(e){o.complete(null,e)})),s._addedListeners=!0),void 0===o.since?I():e().then(function(){return d=!0,c.writeCheckpoint(o.since,k)}).then(function(){d=!1,s.cancelled?C():(v=o.since,I())}).catch(B))}function lr(){a.EventEmitter.call(this),this.cancelled=!1,this.state="pending";var n=this,r=new Promise(function(e,t){n.once("complete",e),n.once("error",t)});n.then=function(e,t){return r.then(e,t)},n.catch=function(e){return r.catch(e)},n.catch(function(){})}function dr(e,t){var n=t.PouchConstructor;return"string"==typeof e?new n(e,t):e}function hr(e,t,n,r){if("function"==typeof n&&(r=n,n={}),void 0===n&&(n={}),n.doc_ids&&!Array.isArray(n.doc_ids))throw Y(z,"`doc_ids` filter parameter is not a list.");n.complete=r,(n=R(n)).continuous=n.continuous||n.live,n.retry="retry"in n&&n.retry,n.PouchConstructor=n.PouchConstructor||this;var i=new lr(n);return fr(dr(e,n),dr(t,n),n,i),i}function pr(e,t,n,r){return"function"==typeof n&&(r=n,n={}),void 0===n&&(n={}),(n=R(n)).PouchConstructor=n.PouchConstructor||this,new vr(e=dr(e,n),t=dr(t,n),n,r)}function vr(e,t,n,r){var i=this;this.canceled=!1;var o=n.push?C({},n,n.push):n,s=n.pull?C({},n,n.pull):n;function a(e){i.emit("change",{direction:"pull",change:e})}function u(e){i.emit("change",{direction:"push",change:e})}function c(e){i.emit("denied",{direction:"push",doc:e})}function f(e){i.emit("denied",{direction:"pull",doc:e})}function l(){i.pushPaused=!0,i.pullPaused&&i.emit("paused")}function d(){i.pullPaused=!0,i.pushPaused&&i.emit("paused")}function h(){i.pushPaused=!1,i.pullPaused&&i.emit("active",{direction:"push"})}function p(){i.pullPaused=!1,i.pushPaused&&i.emit("active",{direction:"pull"})}this.push=hr(e,t,o),this.pull=hr(t,e,s),this.pushPaused=!0,this.pullPaused=!0;var v={};function y(n){return function(e,t){("change"===e&&(t===a||t===u)||"denied"===e&&(t===f||t===c)||"paused"===e&&(t===d||t===l)||"active"===e&&(t===p||t===h))&&(e in v||(v[e]={}),v[e][n]=!0,2===Object.keys(v[e]).length&&i.removeAllListeners(e))}}function _(e,t,n){-1==e.listeners(t).indexOf(n)&&e.on(t,n)}n.live&&(this.push.on("complete",i.pull.cancel.bind(i.pull)),this.pull.on("complete",i.push.cancel.bind(i.push))),this.on("newListener",function(e){"change"===e?(_(i.pull,"change",a),_(i.push,"change",u)):"denied"===e?(_(i.pull,"denied",f),_(i.push,"denied",c)):"active"===e?(_(i.pull,"active",p),_(i.push,"active",h)):"paused"===e&&(_(i.pull,"paused",d),_(i.push,"paused",l))}),this.on("removeListener",function(e){"change"===e?(i.pull.removeListener("change",a),i.push.removeListener("change",u)):"denied"===e?(i.pull.removeListener("denied",f),i.push.removeListener("denied",c)):"active"===e?(i.pull.removeListener("active",p),i.push.removeListener("active",h)):"paused"===e&&(i.pull.removeListener("paused",d),i.push.removeListener("paused",l))}),this.pull.on("removeListener",y("pull")),this.push.on("removeListener",y("push"));var g=Promise.all([this.push,this.pull]).then(function(e){var t={push:e[0],pull:e[1]};return i.emit("complete",t),r&&r(null,t),i.removeAllListeners(),t},function(e){if(i.cancel(),r?r(e):i.emit("error",e),i.removeAllListeners(),r)throw e});this.then=function(e,t){return g.then(e,t)},this.catch=function(e){return g.catch(e)}}r(lr,a.EventEmitter),lr.prototype.cancel=function(){this.cancelled=!0,this.state="cancelled",this.emit("cancel")},lr.prototype.ready=function(e,t){var n=this;function r(){n.cancel()}n._readyCalled||(n._readyCalled=!0,e.once("destroyed",r),t.once("destroyed",r),n.once("complete",function(){e.removeListener("destroyed",r),t.removeListener("destroyed",r)}))},r(vr,a.EventEmitter),vr.prototype.cancel=function(){this.canceled||(this.canceled=!0,this.push.cancel(),this.pull.cancel())},We.plugin(function(e){e.adapter("idb",dn,!0)}).plugin(function(e){e.adapter("http",qn,!1),e.adapter("https",qn,!1)}).plugin(Wn).plugin(function(e){e.replicate=hr,e.sync=pr,Object.defineProperty(e.prototype,"replicate",{get:function(){var r=this;return void 0===this.replicateMethods&&(this.replicateMethods={from:function(e,t,n){return r.constructor.replicate(e,r,t,n)},to:function(e,t,n){return r.constructor.replicate(r,e,t,n)}}),this.replicateMethods}}),e.prototype.sync=function(e,t,n){return this.constructor.sync(this,e,t,n)}}),_r.exports=We}).call(this,yr(5),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1,12:12,2:2,3:3,4:4,5:5,6:6,7:7}]},{},[13])(13)});
jQuery(document).ready(function($){
	var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
	var transitionsSupported = ( $('.csstransitions').length > 0 );
	//if browser does not support transitions - use a different event to trigger them
	if( !transitionsSupported ) transitionEnd = 'noTransition';
	
	//should add a loding while the events are organized 

	function SchedulePlan( element ) {
		this.element = element;
		this.timeline = this.element.find('.timeline');
		this.timelineItems = this.timeline.find('li');
		this.timelineItemsNumber = this.timelineItems.length;
		this.timelineStart = getScheduleTimestamp(this.timelineItems.eq(0).text());
		//need to store delta (in our case half hour) timestamp
		this.timelineUnitDuration = getScheduleTimestamp(this.timelineItems.eq(1).text()) - getScheduleTimestamp(this.timelineItems.eq(0).text());

		this.eventsWrapper = this.element.find('.events');
		this.eventsGroup = this.eventsWrapper.find('.events-group');
		this.singleEvents = this.eventsGroup.find('.single-event');
		this.eventSlotHeight = this.eventsGroup.eq(0).children('.top-info').outerHeight();

		this.modal = this.element.find('.event-modal');
		this.modalHeader = this.modal.find('.header');
		this.modalHeaderBg = this.modal.find('.header-bg');
		this.modalBody = this.modal.find('.body'); 
		this.modalBodyBg = this.modal.find('.body-bg'); 
		this.modalMaxWidth = 800;
		this.modalMaxHeight = 480;

		this.animating = false;

		this.initSchedule();
	}

	SchedulePlan.prototype.initSchedule = function() {
		this.scheduleReset();
		this.initEvents();
	};

	SchedulePlan.prototype.scheduleReset = function() {
		var mq = this.mq();
		if( mq == 'desktop' && !this.element.hasClass('js-full') ) {
			//in this case you are on a desktop version (first load or resize from mobile)
			this.eventSlotHeight = this.eventsGroup.eq(0).children('.top-info').outerHeight();
			this.element.addClass('js-full');
			this.placeEvents();
			this.element.hasClass('modal-is-open') && this.checkEventModal();
		} else if(  mq == 'mobile' && this.element.hasClass('js-full') ) {
			//in this case you are on a mobile version (first load or resize from desktop)
			this.element.removeClass('js-full loading');
			this.eventsGroup.children('ul').add(this.singleEvents).removeAttr('style');
			this.eventsWrapper.children('.grid-line').remove();
			this.element.hasClass('modal-is-open') && this.checkEventModal();
		} else if( mq == 'desktop' && this.element.hasClass('modal-is-open')){
			//on a mobile version with modal open - need to resize/move modal window
			this.checkEventModal('desktop');
			this.element.removeClass('loading');
		} else {
			this.element.removeClass('loading');
		}
	};

	SchedulePlan.prototype.initEvents = function() {
		var self = this;

		this.singleEvents.each(function(){
			//create the .event-date element for each event
			var durationLabel = '<span class="event-date">'+$(this).data('start')+' - '+$(this).data('end')+'</span>';
			$(this).children('a').prepend($(durationLabel));

			//detect click on the event and open the modal
			$(this).on('click', 'a', function(event){
				event.preventDefault();
				if( !self.animating ) self.openModal($(this));
			});
		});

		//close modal window
		this.modal.on('click', '.close', function(event){
			event.preventDefault();
			if( !self.animating ) self.closeModal(self.eventsGroup.find('.selected-event'));
		});
		this.element.on('click', '.cover-layer', function(event){
			if( !self.animating && self.element.hasClass('modal-is-open') ) self.closeModal(self.eventsGroup.find('.selected-event'));
		});
	};

	SchedulePlan.prototype.placeEvents = function() {
		var self = this;
		this.singleEvents.each(function(){
			//place each event in the grid -> need to set top position and height
			var start = getScheduleTimestamp($(this).attr('data-start')),
				duration = getScheduleTimestamp($(this).attr('data-end')) - start;

			var eventTop = self.eventSlotHeight*(start - self.timelineStart)/self.timelineUnitDuration,
				eventHeight = self.eventSlotHeight*duration/self.timelineUnitDuration;
			
			$(this).css({
				top: (eventTop -1) +'px',
				height: (eventHeight+1)+'px'
			});
		});

		this.element.removeClass('loading');
	};

	SchedulePlan.prototype.openModal = function(event) {
		var self = this;
		var mq = self.mq();
		this.animating = true;

		//update event name and time
		this.modalHeader.find('.event-name').text(event.find('.event-name').text());
		this.modalHeader.find('.event-date').text(event.find('.event-date').text());
		this.modal.attr('data-event', event.parent().attr('data-event'));

		//update event content
		this.modalBody.find('.event-info').load(event.parent().attr('data-content')+'.html .event-info > *', function(data){
			//once the event content has been loaded
			self.element.addClass('content-loaded');
		});

		this.element.addClass('modal-is-open');

		setTimeout(function(){
			//fixes a flash when an event is selected - desktop version only
			event.parent('li').addClass('selected-event');
		}, 10);

		if( mq == 'mobile' ) {
			self.modal.one(transitionEnd, function(){
				self.modal.off(transitionEnd);
				self.animating = false;
			});
		} else {
			var eventTop = event.offset().top - $(window).scrollTop(),
				eventLeft = event.offset().left,
				eventHeight = event.innerHeight(),
				eventWidth = event.innerWidth();

			var windowWidth = $(window).width(),
				windowHeight = $(window).height();

			var modalWidth = ( windowWidth*.8 > self.modalMaxWidth ) ? self.modalMaxWidth : windowWidth*.8,
				modalHeight = ( windowHeight*.8 > self.modalMaxHeight ) ? self.modalMaxHeight : windowHeight*.8;

			var modalTranslateX = parseInt((windowWidth - modalWidth)/2 - eventLeft),
				modalTranslateY = parseInt((windowHeight - modalHeight)/2 - eventTop);
			
			var HeaderBgScaleY = modalHeight/eventHeight,
				BodyBgScaleX = (modalWidth - eventWidth);

			//change modal height/width and translate it
			self.modal.css({
				top: eventTop+'px',
				left: eventLeft+'px',
				height: modalHeight+'px',
				width: modalWidth+'px',
			});
			transformElement(self.modal, 'translateY('+modalTranslateY+'px) translateX('+modalTranslateX+'px)');

			//set modalHeader width
			self.modalHeader.css({
				width: eventWidth+'px',
			});
			//set modalBody left margin
			self.modalBody.css({
				marginLeft: eventWidth+'px',
			});

			//change modalBodyBg height/width ans scale it
			self.modalBodyBg.css({
				height: eventHeight+'px',
				width: '1px',
			});
			transformElement(self.modalBodyBg, 'scaleY('+HeaderBgScaleY+') scaleX('+BodyBgScaleX+')');

			//change modal modalHeaderBg height/width and scale it
			self.modalHeaderBg.css({
				height: eventHeight+'px',
				width: eventWidth+'px',
			});
			transformElement(self.modalHeaderBg, 'scaleY('+HeaderBgScaleY+')');
			
			self.modalHeaderBg.one(transitionEnd, function(){
				//wait for the  end of the modalHeaderBg transformation and show the modal content
				self.modalHeaderBg.off(transitionEnd);
				self.animating = false;
				self.element.addClass('animation-completed');
			});
		}

		//if browser do not support transitions -> no need to wait for the end of it
		if( !transitionsSupported ) self.modal.add(self.modalHeaderBg).trigger(transitionEnd);
	};

	SchedulePlan.prototype.closeModal = function(event) {
		var self = this;
		var mq = self.mq();

		this.animating = true;

		if( mq == 'mobile' ) {
			this.element.removeClass('modal-is-open');
			this.modal.one(transitionEnd, function(){
				self.modal.off(transitionEnd);
				self.animating = false;
				self.element.removeClass('content-loaded');
				event.removeClass('selected-event');
			});
		} else {
			var eventTop = event.offset().top - $(window).scrollTop(),
				eventLeft = event.offset().left,
				eventHeight = event.innerHeight(),
				eventWidth = event.innerWidth();

			var modalTop = Number(self.modal.css('top').replace('px', '')),
				modalLeft = Number(self.modal.css('left').replace('px', ''));

			var modalTranslateX = eventLeft - modalLeft,
				modalTranslateY = eventTop - modalTop;

			self.element.removeClass('animation-completed modal-is-open');

			//change modal width/height and translate it
			this.modal.css({
				width: eventWidth+'px',
				height: eventHeight+'px'
			});
			transformElement(self.modal, 'translateX('+modalTranslateX+'px) translateY('+modalTranslateY+'px)');
			
			//scale down modalBodyBg element
			transformElement(self.modalBodyBg, 'scaleX(0) scaleY(1)');
			//scale down modalHeaderBg element
			transformElement(self.modalHeaderBg, 'scaleY(1)');

			this.modalHeaderBg.one(transitionEnd, function(){
				//wait for the  end of the modalHeaderBg transformation and reset modal style
				self.modalHeaderBg.off(transitionEnd);
				self.modal.addClass('no-transition');
				setTimeout(function(){
					self.modal.add(self.modalHeader).add(self.modalBody).add(self.modalHeaderBg).add(self.modalBodyBg).attr('style', '');
				}, 10);
				setTimeout(function(){
					self.modal.removeClass('no-transition');
				}, 20);

				self.animating = false;
				self.element.removeClass('content-loaded');
				event.removeClass('selected-event');
			});
		}

		//browser do not support transitions -> no need to wait for the end of it
		if( !transitionsSupported ) self.modal.add(self.modalHeaderBg).trigger(transitionEnd);
	}

	SchedulePlan.prototype.mq = function(){
		//get MQ value ('desktop' or 'mobile') 
		var self = this;
		return window.getComputedStyle(this.element.get(0), '::before').getPropertyValue('content').replace(/["']/g, '');
	};

	SchedulePlan.prototype.checkEventModal = function(device) {
		this.animating = true;
		var self = this;
		var mq = this.mq();

		if( mq == 'mobile' ) {
			//reset modal style on mobile
			self.modal.add(self.modalHeader).add(self.modalHeaderBg).add(self.modalBody).add(self.modalBodyBg).attr('style', '');
			self.modal.removeClass('no-transition');	
			self.animating = false;	
		} else if( mq == 'desktop' && self.element.hasClass('modal-is-open') ) {
			self.modal.addClass('no-transition');
			self.element.addClass('animation-completed');
			var event = self.eventsGroup.find('.selected-event');

			var eventTop = event.offset().top - $(window).scrollTop(),
				eventLeft = event.offset().left,
				eventHeight = event.innerHeight(),
				eventWidth = event.innerWidth();

			var windowWidth = $(window).width(),
				windowHeight = $(window).height();

			var modalWidth = ( windowWidth*.8 > self.modalMaxWidth ) ? self.modalMaxWidth : windowWidth*.8,
				modalHeight = ( windowHeight*.8 > self.modalMaxHeight ) ? self.modalMaxHeight : windowHeight*.8;

			var HeaderBgScaleY = modalHeight/eventHeight,
				BodyBgScaleX = (modalWidth - eventWidth);

			setTimeout(function(){
				self.modal.css({
					width: modalWidth+'px',
					height: modalHeight+'px',
					top: (windowHeight/2 - modalHeight/2)+'px',
					left: (windowWidth/2 - modalWidth/2)+'px',
				});
				transformElement(self.modal, 'translateY(0) translateX(0)');
				//change modal modalBodyBg height/width
				self.modalBodyBg.css({
					height: modalHeight+'px',
					width: '1px',
				});

				transformElement(self.modalBodyBg, 'scaleX('+BodyBgScaleX+')');
				//set modalHeader width
				self.modalHeader.css({
					width: eventWidth+'px',
				});
				//set modalBody left margin
				self.modalBody.css({
					marginLeft: eventWidth+'px',
				});
        
				//change modal modalHeaderBg height/width and scale it
				self.modalHeaderBg.css({
					height: eventHeight+'px',
					width: eventWidth+'px',
				});
				transformElement(self.modalHeaderBg, 'scaleY('+HeaderBgScaleY+')');
			}, 10);

			setTimeout(function(){
				self.modal.removeClass('no-transition');
				self.animating = false;	
			}, 20);
		}
	};

	var schedules = $('.cd-schedule');
	var objSchedulesPlan = [],
		windowResize = false;
	
	if( schedules.length > 0 ) {
		schedules.each(function(){
			//create SchedulePlan objects
			objSchedulesPlan.push(new SchedulePlan($(this)));
		});
	}

	$(window).on('resize', function(){
		if( !windowResize ) {
			windowResize = true;
			(!window.requestAnimationFrame) ? setTimeout(checkResize) : window.requestAnimationFrame(checkResize);
		}
	});

	$(window).keyup(function(event) {
		if (event.keyCode == 27) {
			objSchedulesPlan.forEach(function(element){
				element.closeModal(element.eventsGroup.find('.selected-event'));
			});
		}
	});

	function checkResize(){
		objSchedulesPlan.forEach(function(element){
			element.scheduleReset();
		});
		windowResize = false;
	}

	function getScheduleTimestamp(time) {
		//accepts hh:mm format - convert hh:mm to timestamp
		time = time.replace(/ /g,'');
		var timeArray = time.split(':');
		var timeStamp = parseInt(timeArray[0])*60 + parseInt(timeArray[1]);
		return timeStamp;
	}

	function transformElement(element, value) {
		element.css({
		    '-moz-transform': value,
		    '-webkit-transform': value,
			'-ms-transform': value,
			'-o-transform': value,
			'transform': value
		});
	}
});
(function() {

  'use strict';

  var ENTER_KEY = 13;
  var newTodoDom = document.getElementById('new-todo');
  var syncDom = document.getElementById('sync-wrapper');

// fade out

function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in

function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

document.addEventListener("DOMContentLoaded", function(event) {
  var counter = 0;
  var c = 0;
  var i = setInterval(function(){
    document.getElementById('h1counter').innerHTML= c + "%";
      //$(".loading-page .counter h1").html(c + "%");
      document.getElementById('hrcounter').style['width'] = c + "%";
      // $(".loading-page .counter hr").css("width", c + "%");
      //$(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");

    /*
    $(".loading-page .counter h1.color").css("width", c + "%");
    */
    counter++;
    c++;
      
    if(counter == 101) {
        clearInterval(i);
    }
  }, 50);
  });
  // Cambio de Habito - App for all platforms

  var db = new PouchDB('todos');
  var remoteCouch = 'http://localhost:5984/todos';
  
  db.info(function(err, info) {
    db.changes({
      since: info.update_seq,
      live: true
    }).on('change', showTodos);
  });

  // We have to create a new todo document and enter it in the database
  function addTodo(text) {
    var todo = {
      _id: new Date().toISOString(),
      title: text,
      completed: false
    };
    db.put(todo).then(function (result) {
      console.log("everything is A-OK");
      console.log(result);
    }).catch(function (err) {
      console.log('everything is terrible');
      console.log(err);
    });
  }

  // Show the current list of todos by reading them from the database
  function showTodos() {
    db.allDocs({include_docs: true, descending: true}).then(function(doc) {
      redrawTodosUI(doc.rows);
      fadeOut(document.getElementById('cargandocdh'));
          document.getElementById('h1counter').innerHTML= "100%";
      //$(".loading-page .counter h1").html(c + "%");
      document.getElementById('hrcounter').style['width'] = "100%";
    }).catch(function (err) {
      console.log(err);
    });
  }

  function checkboxChanged(todo, event) {
    todo.completed = event.target.checked;
    console.log(todo);
    db.put(todo);
  }

  // User pressed the delete button for a todo, delete it
  function deleteButtonPressed(todo) {
    db.remove(todo);
  }

  // The input box when editing a todo has blurred, we should save
  // the new title or delete the todo if the title is empty
  function todoBlurred(todo, event) {
    var trimmedText = event.target.value.trim();
    if (!trimmedText) {
      db.remove(todo);
    } else {
      todo.title = trimmedText;
      db.put(todo);
    }
  }

  // Initialise a sync with the remote server
  function sync() {
    syncDom.setAttribute('data-sync-state', 'syncing');
    
    var opts = {live: true};
    db.sync(remoteCouch, opts, syncError);
  }

  // EDITING STARTS HERE (you dont need to edit anything below this line)

  // There was some form or error syncing
  function syncError() {
    syncDom.setAttribute('data-sync-state', 'error');
  }

  // User has double clicked a todo, display an input so they can edit the title
  function todoDblClicked(todo) {
    var div = document.getElementById('li_' + todo._id);
    var inputEditTodo = document.getElementById('input_' + todo._id);
    div.className = 'editing';
    inputEditTodo.focus();
  }

  // If they press enter while editing an entry, blur it to trigger save
  // (or delete)
  function todoKeyPressed(todo, event) {
    if (event.keyCode === ENTER_KEY) {
      var inputEditTodo = document.getElementById('input_' + todo._id);
      inputEditTodo.blur();
    }
  }

  // Given an object representing a todo, this will create a list item
  // to display it.
  function createTodoListItem(todo) {
    var checkbox = document.createElement('input');
    checkbox.className = 'toggle';
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', checkboxChanged.bind(this, todo));

    var label = document.createElement('label');
    label.appendChild( document.createTextNode(todo.title));
    label.addEventListener('dblclick', todoDblClicked.bind(this, todo));

    var deleteLink = document.createElement('button');
    deleteLink.className = 'destroy';
    deleteLink.addEventListener( 'click', deleteButtonPressed.bind(this, todo));

    var divDisplay = document.createElement('div');
    divDisplay.className = 'view';
    divDisplay.appendChild(checkbox);
    divDisplay.appendChild(label);
    divDisplay.appendChild(deleteLink);

    var inputEditTodo = document.createElement('input');
    inputEditTodo.id = 'input_' + todo._id;
    inputEditTodo.className = 'edit';
    inputEditTodo.value = todo.title;
    inputEditTodo.addEventListener('keypress', todoKeyPressed.bind(this, todo));
    inputEditTodo.addEventListener('blur', todoBlurred.bind(this, todo));

    var li = document.createElement('li');
    li.id = 'li_' + todo._id;
    li.appendChild(divDisplay);
    li.appendChild(inputEditTodo);

    if (todo.completed) {
      li.className += 'complete';
      checkbox.checked = true;
    }

    return li;
  }

  function redrawTodosUI(todos) {
    var ul = document.getElementById('todo-list');
    ul.innerHTML = '';
    todos.forEach(function(todo) {
      ul.appendChild(createTodoListItem(todo.doc));
    });
  }

  function newTodoKeyPressHandler( event ) {
    if (event.keyCode === ENTER_KEY) {
      addTodo(newTodoDom.value);
      newTodoDom.value = '';
    }
  }

  function addEventListeners() {
    newTodoDom.addEventListener('keypress', newTodoKeyPressHandler, false);
  }

  addEventListeners();
  showTodos();

  if (remoteCouch) {
    sync();
  }

})();
var button = document.querySelector('.menu__button');
var menu = document.querySelector('.menu__body');
var close = document.querySelector('.menu__header button');
var overlay = document.querySelector('.menu__overlay');

function showMenu() {
	button.setAttribute('hidden', '');
	menu.removeAttribute('hidden');
	overlay.removeAttribute('hidden');
};

function hideMenu() {
	menu.setAttribute('hidden', '');
	overlay.setAttribute('hidden', '');
	button.removeAttribute('hidden');
};

button.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);
overlay.addEventListener('click', hideMenu); 

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  mobileFirst: true,
  speed: 500
});

$('.slider-for').slick({
  mobileFirst: true,
  infinite: false,
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.slider-nav',
  mobileFirst: true,
  speed: 300,
  adaptiveHeight: true
});

const GRADIENT_ONE   = [[253, 145, 79],  [224, 50, 152]];
const GRADIENT_TWO   = [[94, 169, 247],  [25,  86, 207]];
const GRADIENT_THREE = [[81, 251, 213],  [55, 198, 197]];

// precision is 10 for 10ths, 100 for 100ths, etc.
function roundUp(num, precision) {
  return Math.ceil(num * precision) / precision
}

const interpolateRGB = function(color1, color2, factor) {
  if (arguments.length < 3) { factor = 0.5; }
  var result = color1.slice();
  for (var i=0;i<3;i++) {
    result[i] = Math.round(result[i] + factor*(color2[i]-color1[i]));
  }
  return result;
};


let h = document.getElementById('home');
let home_rect = h.getBoundingClientRect();
let prev_left = home_rect.left;

let breakpoint_1 = home_rect.left - home_rect.width;
let breakpoint_2 = breakpoint_1 - home_rect.width;

setInterval(() => {
  let rect = h.getBoundingClientRect();
  let left =  rect.left;
  if (prev_left === left) return;
  let sliding;
  if (prev_left > left) sliding = 'left';
  if (prev_left < left) sliding = 'right';
  let slide;
  if (left > breakpoint_1) {
    if (sliding === 'left') slide = 2; // entering slide 2
    else slide = 1; // leaving slide 2 into slide 1
    
    let delta = home_rect.left - left;
    let factor = roundUp(delta / home_rect.width, 10);

    let [g0r, g0g, g0b] = interpolateRGB(GRADIENT_ONE[0], GRADIENT_TWO[0], factor);
    let [g1r, g1g, g1b] = interpolateRGB(GRADIENT_ONE[1], GRADIENT_TWO[1], factor);
    
    $('#app').css('background', `linear-gradient(11deg, 
        rgb(${g1r}, ${g1g}, ${g1b}) 5%,
        rgb(${g0r}, ${g0g}, ${g0b})
    )` );
  }
  if (left <= breakpoint_1 && left >= breakpoint_2) {
    if (sliding === 'left') slide = 3; // entering slide 3
    else slide = 2; // leaving slide 3 into slide 2
    
    let delta = home_rect.left - left;
    let factor = roundUp(delta / home_rect.width, 10) - 1;

    let [g0r, g0g, g0b] = interpolateRGB(GRADIENT_TWO[0], GRADIENT_THREE[0], factor);
    let [g1r, g1g, g1b] = interpolateRGB(GRADIENT_TWO[1], GRADIENT_THREE[1], factor);
    
    $('#app').css('background', `linear-gradient(11deg, 
        rgb(${g1r}, ${g1g}, ${g1b}) 5%,
        rgb(${g0r}, ${g0g}, ${g0b})
    )` );
  }
  
  // console.log(sliding, slide);
  

  prev_left = left;
});

var space_key = typeof KeyEvent !== "undefined" ? KeyEvent.DOM_VK_SPACE : 32;
var enter_key = typeof KeyEvent !== "undefined" ? KeyEvent.DOM_VK_ENTER : 13;
var up_key =    typeof KeyEvent !== "undefined" ? KeyEvent.DOM_VK_UP    : 38;
var down_key =  typeof KeyEvent !== "undefined" ? KeyEvent.DOM_VK_DOWN  : 40;

function setup_compy_form(){
    var form = $("form");
    var inputs = form.find("input, textarea");
    var spans = form.find("span");
    var checkboxes = spans.filter(".checkbox");
    var radios = spans.filter(".radio");
    var radio_inputs = inputs.filter("[type=radio]");
    var checkbox_inputs = inputs.filter("[type=checkbox]");
    var spinner_arrows = form.find(".spinner-arrow");
    var underlines = form.find(".underline");
    var underline_inputs = underlines.children("input");
    var underline_labels = underlines.children("label");
    var textareas = inputs.filter("textarea");
    var dropdowns = form.find(".dropdown");
   // var dropdown_options = dropdowns.find("p");
    var labels = form.find("label"); 
    var dropdown_inputs = dropdowns.find("input");
    var selects = dropdowns.find("select");
  
    labels.mousedown(function(e){
      e.preventDefault();
    })
  
    selects.change(function(){
      var select = $(this);
      var container = select.siblings("div");               
      set_dropdown_value(container, select.val());
    });
  
    function set_dropdown_value(container, value){
        var input = container.children("input");
        var placeholder = container.children(".placeholder");

        container.addClass("float-label");

        input.val(value);
        placeholder.hide();
    }

    dropdown_inputs
      .filter(".focus-helper")
          .blur(function(){
              $(this).closest(".dropdown").removeClass("open");
          });
  
  
    dropdowns
       .click(function(e){
         var dropdown = $(this);
         var select = dropdown.find("select");
         
         if(select.size() > 0){
 
         } else {
             dropdown.toggleClass("open");
         
             if(dropdown.hasClass("open")){
                var label = dropdown.find("label");
             
                if(label.hasClass("invalid")){
                  label.text(label.data("text"));
                  label.removeClass("invalid");
                }
                dropdown.find(".focus-helper").focus();
               
             }
         }
       })
       .mousedown(function(e){
          if(!$(e.target).is("select")){
            e.preventDefault();
          }
       })
       .blur(function(){
         var dropdown = $(this);
         dropdown.removeClass("open");
       })
       .find(".dropdown-box p")
            .mousedown(function(e){
                e.preventDefault();
            })
            .click(function(e){
                var option = $(this);
                var dropdown_box = option.closest(".dropdown-box");
                dropdown_box.removeClass("open");
                set_dropdown_value(dropdown_box.parent(), option.text());
           });

  
  
    radio_inputs
       .filter("[checked]")
            .each(function(){
                 activate_radio_input($(this));
             });

    // load previous form data from local storage
    load_form_data();

    form.submit(function () {
      
        if (validate_all()) {
            var $this = $(this);
            var formData = $this.serialize();
            alert(formData);
            return false;
        } else {
            $('html,body').animate({
                scrollTop: $(".invalid").offset().top - 10
            }, 'fast');
            return false;
        }
    });
   
    textareas.each(function(){
      var textarea = $(this);
             
      textarea.on('input change cut paste drop keyup', function(){
        $(this)
          .height('auto')
          .height(this.scrollHeight);
      });
    });
  
    checkboxes
        .click(function () {
            var checkbox = $(this);
            toggle_checkbox_value(checkbox);
            checkbox.focus();
        })
        .keydown(function (e) {
            // check if space is defined
            var key = e.which;

            // space is pressed on focus
            if (key === space_key || key === enter_key) {
                e.preventDefault();
                toggle_checkbox_value($(this));
            }
        })
        .siblings("label")
            .click(function () {
                $(this).siblings(".checkbox").focus();
            });

    radios
        .click(function () {
            var radio = $(this);
            activate_radio_input(radio.siblings("input"));
        })
        .keydown(function (e) {
            // check if space is defined
            var key = e.which;

            // space is pressed on focus
            if (key === space_key || key === enter_key) {
                activate_radio_input($(this).siblings("input"));
            }
        })
        .siblings("label")
            .click(function () {
                var radio = $(this).siblings(".radio");
                activate_radio_input(radio.siblings("input"));
                radio.focus();
            })
            .mousedown(function (e) {
                e.preventDefault();
            });


    inputs
        .each(function () {
            check_label_state($(this));
        })
        .focus(function () {
            var input = $(this);
            set_label_state(input, true);
            $(this).parent().addClass("focused");
            set_input_label_as_valid(input.siblings("label"));
        })
        .blur(function () {
            var input = $(this);
            check_label_state(input);
            input.parent().removeClass("focused");
        });



    inputs.filter("[type=number]")
        .each(function(){
          // fool HTML validation, enable numeric keyboard, but not a spinner widget
          $(this).attr("type", "tel");
        })
        .keydown(function (e) {
            var key = e.which;
            var input = $(this);
            if (key === up_key) {
                step_numeric_input(input.siblings(".up"));
                e.preventDefault();
            } else if (key === down_key) {
                step_numeric_input(input.siblings(".down"));
                e.preventDefault();
            }
        });



    inputs.on("input text change paste drop", function () {
        set_input_label_as_valid($(this).siblings("label"));
    });

    var spinner_hold_timeout = 0;

    spinner_arrows
        .click(function () {
            step_numeric_input($(this));
        })
        .mousedown(function (e) {
            e.preventDefault();
            spinner_hold_timeout = setInterval(function () {
                step_numeric_input($(e.target));
            }, 150);
        })
        .bind('mouseup', function () {
            clearTimeout(spinner_hold_timeout);
        });


    if (!Modernizr.touch) {
        inputs.hover(function () {
            $(this).parent().addClass("input-hover");
        }, function () {
            $(this).parent().removeClass("input-hover");
        });
    }



    $(window).on('beforeunload', save_form_data);
    form.find("button[name=clear]").click(clear_all);
  
    function int_css(element, property){
      return parseInt(element.css(property));
    }

    function activate_radio_input(input) {
        var radio = input.siblings(".radio");
        var name = input.attr("name");
        var group = radio_inputs.filter("[name=" + name + "]");

        group.each(function () {
            $(this).prop("checked", false);
        });

        input.prop("checked", true);
    }

    function clear_form_data_from_local_storage() {
        // clear all
        var starts_with = /^compyform/;
        Object.keys(localStorage).forEach(function (key) {
            if (starts_with.test(key)) {
                localStorage.removeItem(key);
            }
        });
    }


    function set_input_label_as_valid(label){
      if (label.hasClass("invalid")) {
            // set label as valid and restore text
            label
              .removeClass("invalid")
              .text(label.data("text"));
        }
    }

    function toggle_checkbox_value(checkbox) {
        var input = checkbox.siblings("input");
        input.prop("checked", !input.prop("checked"));
    }

    function clear_all() {

        underlines
          .filter(".float-label")
            .removeClass("float-label");
        
       underline_inputs.val("");
      
        dropdowns.find(".placeholder").show();

        var invalid_labels = underline_labels.filter(".invalid");
        underline_labels.removeClass("invalid");
        

        setTimeout(function(){
          underline_labels.each(function(){
              var label = $(this);
              label.text(label.data("text"));
          });
        }, 250);
        
        checkbox_inputs
            .filter(":checked")
                .prop("checked", false);

        $('html, body').animate({
            scrollTop: form.offset().top - 10
        }, 'fast');
       
        if (Modernizr.localstorage) {
            clear_form_data_from_local_storage();
        }
    }

    function hasAttr(element, attr) {
        return typeof element.attr(attr) !== "undefined";
    }

    function set_input_as_invalid(input){
      var label = input.siblings("label");
      if (!label.hasClass("invalid")) {

            // set error text to required if empty, error if set, otherwise invalid
            var error_text;
        if(hasAttr(input, "required") && input.val() === ""){
             error_text = "Required" 
        } else {
             error_text = input.data("error") || "Invalid";
        }
            // set label as invalid, save text for later, and set text to error text
            label
                .addClass("invalid")
                .data("text", label.text())
                .text(error_text);
        }
    }

    function validate_input(input){
        var value = input.val();
        if (hasAttr(input, "required") && value === "") {
            set_input_as_invalid(input);
        } else {
          var validation = input.data('validation');
          if (validation && !validate(validation, value)) {
              set_input_as_invalid(input);
          }
        }
    }

    function validate_all() {
       inputs.each(function(){
          validate_input($(this));
       });
       return $(".invalid").size() === 0;
    }

    function step_numeric_input(arrow) {
        // assumed sanitized

        var input = arrow.siblings("input");
        var step = input.attr("step");


        if (arrow.hasClass("down")) {
            step *= -1;
        }

        var value = satitize_numeric_value(input.val());

        if (value === "") {
            value = step;
        } else {
            value = +(value) + +(step);
        }
        input.val(value);
        input.focus();
    }

    function satitize_numeric_value(value) {
        return value.replace(/[^0-9\+\-]/g, "");
    }

    function set_label_state(input, float_label) {
        if (float_label) {
            input.parent().addClass("float-label");
        } else {
            input.parent().removeClass("float-label");
        }
        // the 0.99 forces consistent AA on webkit
        // http://stackoverflow.com/a/11403025/828867
    }

    function check_label_state(input) {
        var not_empty = input.val().length > 0;
        var is_focus = input.is(":focus");
        set_label_state(input, not_empty || is_focus);
    }

    function is_valid_email_address(value) {
        var reg = /^([\w-]+\.?[\w-]*)+@([\w-]+\.[\w-]+)+$/;
        return reg.test(value);
    }

    function is_valid_number(value) {
        var reg = /^\d+$/;
        return reg.test(value);
    }

    function validate(validation, value) {
        return true;
        switch (validation) {
        case "email":
            return is_valid_email_address(value);
        case "number":
            return is_valid_number(value);
        case "password":
            return value.length > 5;
        default:
            return true;
        }
    }

    function save_form_data() {
        if (!Modernizr.localstorage) {
            // no support for html storage, bail out
            return false;
        }

        clear_form_data_from_local_storage();

        inputs.each(function () {
            var input = $(this);
            var type = input.attr("type");
            if (type === "password") {
                // skip password
                return true;
            }
            var name = input.attr("name");
            if (typeof name !== 'undefined') {

                var storage_key = "compyform:" + type + ":" + name;
                var value = input.val();
                if (type === "checkbox" || type === "radio") {
                    if (input.is(":checked")) {
                        localStorage.setItem(storage_key, value);
                    }
                } else {
                    if (value !== null && typeof value !== undefined && value.length > 0) {
                        localStorage.setItem(storage_key, value);
                    }
                }
            }
        });
    }

    function load_form_data() {
        if (!Modernizr.localstorage) {
            // no support for html storage, bail out
            return false;
        }

        inputs.each(function () {
            var input = $(this);
            var type = input.attr("type");
            if (type === "password") {
                // skip password
                return true;
            }

            var name = input.attr("name");
            if (typeof name !== 'undefined') {
                var value = localStorage.getItem("compyform:" + type + ":" + name);
                if (value !== null && typeof value !== undefined) {
                    // set the field data here
                    if (type === "checkbox") {
                     
                        input
                          .prop("checked", true)
                          .siblings(".checkbox")
                              .addClass("checked");
                   
                    } else if (type === "radio") {
                        if (value === input.val()) {
                            activate_radio_input(input);
                        }
                    } else {
                        input.val(value);
                    }
                }
            }
        });
    }
    //inputs.filter("[tabindex=1]").focus();
}

$(document).ready(setup_compy_form);