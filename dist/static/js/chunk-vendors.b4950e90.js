"use strict";(self["webpackChunkstamp_web"]=self["webpackChunkstamp_web"]||[]).push([[504],{433:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},124:(e,t,n)=>{n.d(t,{Am:()=>x,FA:()=>O,I9:()=>N,Ku:()=>K,T9:()=>m,Uj:()=>c,XA:()=>g,ZQ:()=>y,bD:()=>D,c1:()=>b,cY:()=>v,dM:()=>C,eX:()=>S,g:()=>k,hp:()=>$,jZ:()=>w,lT:()=>I,lV:()=>T,p9:()=>z,sr:()=>_,tD:()=>L,u:()=>l,zW:()=>E});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,h=63&c;a||(h=64,o||(d=64)),r.push(n[l],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,a=o?n[e.charAt(i)]:0;++i;const c=i<e.length,l=c?n[e.charAt(i)]:64;++i;const u=i<e.length,d=u?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==l||null==d)throw new s;const h=t<<2|a>>4;if(r.push(h),64!==l){const e=a<<4&240|l>>2;if(r.push(e),64!==d){const e=l<<6&192|d;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return o.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},l=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=()=>u().__FIREBASE_DEFAULTS__,h=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},p=()=>{try{return d()||h()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},m=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},g=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function y(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function w(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())}function b(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function _(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function T(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function I(){const e=y();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function E(){try{return"object"===typeof indexedDB}catch(e){return!1}}function S(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function C(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P="FirebaseError";class k extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=P,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?A(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new k(r,s,n);return a}}function A(e,t){return e.replace(R,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const R=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(M(n)&&M(o)){if(!D(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function M(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function N(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function $(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){const n=new j(e,t);return n.subscribe.bind(n)}class j{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=U(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=F),void 0===r.error&&(r.error=F),void 0===r.complete&&(r.complete=F);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function U(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function F(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const V=1e3,W=2,B=144e5,H=.5;function z(e,t=V,n=W){const r=t*Math.pow(n,e),i=Math.round(H*r*(Math.random()-.5)*2);return Math.min(B,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){return e&&e._delegate?e._delegate:e}},953:(e,t,n)=>{n.d(t,{C4:()=>E,EW:()=>Le,Gc:()=>ve,IG:()=>Se,IJ:()=>Ae,KR:()=>Oe,Kh:()=>ge,Pr:()=>Ne,R1:()=>Me,X2:()=>l,bl:()=>S,hV:()=>Be,hZ:()=>$,i9:()=>ke,ju:()=>Ie,u4:()=>N,ux:()=>Ee,wB:()=>We,yC:()=>s});var r=n(33);
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let i,o;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(this._active=!1,t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function a(){return i}const c=new WeakSet;class l{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||f(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,C(this),g(this);const e=o,t=T;o=this,T=!0;try{return this.fn()}finally{0,v(this),o=e,T=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)b(e);this.deps=this.depsTail=void 0,C(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){y(this)&&this.run()}get dirty(){return y(this)}}let u,d,h=0;function f(e,t=!1){if(e.flags|=8,t)return e.next=d,void(d=e);e.next=u,u=e}function p(){h++}function m(){if(--h>0)return;if(d){let e=d;d=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(u){let n=u;u=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=r}}if(e)throw e}function g(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function v(e){let t,n=e.depsTail,r=n;while(r){const e=r.prevDep;-1===r.version?(r===n&&(n=e),b(r),_(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function y(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(w(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function w(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===P)return;e.globalVersion=P;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!y(e))return void(e.flags&=-3);const n=o,i=T;o=e,T=!0;try{g(e);const n=e.fn(e._value);(0===t.version||(0,r.$H)(n,e._value))&&(e._value=n,t.version++)}catch(s){throw t.version++,s}finally{o=n,T=i,v(e),e.flags&=-3}}function b(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)b(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function _(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let T=!0;const I=[];function E(){I.push(T),T=!1}function S(){const e=I.pop();T=void 0===e||e}function C(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=o;o=void 0;try{t()}finally{o=e}}}let P=0;class k{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class O{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!o||!T||o===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==o)t=this.activeLink=new k(o,this),o.deps?(t.prevDep=o.depsTail,o.depsTail.nextDep=t,o.depsTail=t):o.deps=o.depsTail=t,A(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=o.depsTail,t.nextDep=void 0,o.depsTail.nextDep=t,o.depsTail=t,o.deps===t&&(o.deps=e)}return t}trigger(e){this.version++,P++,this.notify(e)}notify(e){p();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{m()}}}function A(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)A(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const R=new WeakMap,D=Symbol(""),M=Symbol(""),x=Symbol("");function N(e,t,n){if(T&&o){let t=R.get(e);t||R.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new O),r.map=t,r.key=n),r.track()}}function $(e,t,n,i,o,s){const a=R.get(e);if(!a)return void P++;const c=e=>{e&&e.trigger()};if(p(),"clear"===t)a.forEach(c);else{const o=(0,r.cy)(e),s=o&&(0,r.yI)(n);if(o&&"length"===n){const e=Number(i);a.forEach(((t,n)=>{("length"===n||n===x||!(0,r.Bm)(n)&&n>=e)&&c(t)}))}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),s&&c(a.get(x)),t){case"add":o?s&&c(a.get("length")):(c(a.get(D)),(0,r.CE)(e)&&c(a.get(M)));break;case"delete":o||(c(a.get(D)),(0,r.CE)(e)&&c(a.get(M)));break;case"set":(0,r.CE)(e)&&c(a.get(D));break}}m()}function L(e){const t=Ee(e);return t===e?t:(N(t,"iterate",x),Te(e)?t:t.map(Ce))}function j(e){return N(e=Ee(e),"iterate",x),e}const U={__proto__:null,[Symbol.iterator](){return F(this,Symbol.iterator,Ce)},concat(...e){return L(this).concat(...e.map((e=>(0,r.cy)(e)?L(e):e)))},entries(){return F(this,"entries",(e=>(e[1]=Ce(e[1]),e)))},every(e,t){return W(this,"every",e,t,void 0,arguments)},filter(e,t){return W(this,"filter",e,t,(e=>e.map(Ce)),arguments)},find(e,t){return W(this,"find",e,t,Ce,arguments)},findIndex(e,t){return W(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return W(this,"findLast",e,t,Ce,arguments)},findLastIndex(e,t){return W(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return W(this,"forEach",e,t,void 0,arguments)},includes(...e){return H(this,"includes",e)},indexOf(...e){return H(this,"indexOf",e)},join(e){return L(this).join(e)},lastIndexOf(...e){return H(this,"lastIndexOf",e)},map(e,t){return W(this,"map",e,t,void 0,arguments)},pop(){return z(this,"pop")},push(...e){return z(this,"push",e)},reduce(e,...t){return B(this,"reduce",e,t)},reduceRight(e,...t){return B(this,"reduceRight",e,t)},shift(){return z(this,"shift")},some(e,t){return W(this,"some",e,t,void 0,arguments)},splice(...e){return z(this,"splice",e)},toReversed(){return L(this).toReversed()},toSorted(e){return L(this).toSorted(e)},toSpliced(...e){return L(this).toSpliced(...e)},unshift(...e){return z(this,"unshift",e)},values(){return F(this,"values",Ce)}};function F(e,t,n){const r=j(e),i=r[t]();return r===e||Te(e)||(i._next=i.next,i.next=()=>{const e=i._next();return e.value&&(e.value=n(e.value)),e}),i}const V=Array.prototype;function W(e,t,n,r,i,o){const s=j(e),a=s!==e&&!Te(e),c=s[t];if(c!==V[t]){const t=c.apply(e,o);return a?Ce(t):t}let l=n;s!==e&&(a?l=function(t,r){return n.call(this,Ce(t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));const u=c.call(s,l,r);return a&&i?i(u):u}function B(e,t,n,r){const i=j(e);let o=n;return i!==e&&(Te(e)?n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}):o=function(t,r,i){return n.call(this,t,Ce(r),i,e)}),i[t](o,...r)}function H(e,t,n){const r=Ee(e);N(r,"iterate",x);const i=r[t](...n);return-1!==i&&!1!==i||!Ie(n[0])?i:(n[0]=Ee(n[0]),r[t](...n))}function z(e,t,n=[]){E(),p();const r=Ee(e)[t].apply(e,n);return m(),S(),r}const K=(0,r.pD)("__proto__,__v_isRef,__isVue"),G=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm));function q(e){(0,r.Bm)(e)||(e=String(e));const t=Ee(this);return N(t,"has",e),t.hasOwnProperty(e)}class J{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if("__v_skip"===t)return e["__v_skip"];const i=this._isReadonly,o=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return o;if("__v_raw"===t)return n===(i?o?fe:he:o?de:ue).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const s=(0,r.cy)(e);if(!i){let e;if(s&&(e=U[t]))return e;if("hasOwnProperty"===t)return q}const a=Reflect.get(e,t,ke(e)?e:n);return((0,r.Bm)(t)?G.has(t):K(t))?a:(i||N(e,"get",t),o?a:ke(a)?s&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?i?ye(a):ge(a):a)}}class Z extends J{constructor(e=!1){super(!1,e)}set(e,t,n,i){let o=e[t];if(!this._isShallow){const t=_e(o);if(Te(n)||_e(n)||(o=Ee(o),n=Ee(n)),!(0,r.cy)(e)&&ke(o)&&!ke(n))return!t&&(o.value=n,!0)}const s=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,ke(e)?e:i);return e===Ee(i)&&(s?(0,r.$H)(n,o)&&$(e,"set",t,n,o):$(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&$(e,"delete",t,void 0,i),o}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&G.has(t)||N(e,"has",t),n}ownKeys(e){return N(e,"iterate",(0,r.cy)(e)?"length":D),Reflect.ownKeys(e)}}class Y extends J{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const X=new Z,Q=new Y,ee=new Z(!0),te=e=>e,ne=e=>Reflect.getPrototypeOf(e);function re(e,t,n){return function(...i){const o=this["__v_raw"],s=Ee(o),a=(0,r.CE)(s),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=o[e](...i),d=n?te:t?Pe:Ce;return!t&&N(s,"iterate",l?M:D),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function oe(e,t){const n={get(n){const i=this["__v_raw"],o=Ee(i),s=Ee(n);e||((0,r.$H)(n,s)&&N(o,"get",n),N(o,"get",s));const{has:a}=ne(o),c=t?te:e?Pe:Ce;return a.call(o,n)?c(i.get(n)):a.call(o,s)?c(i.get(s)):void(i!==o&&i.get(n))},get size(){const t=this["__v_raw"];return!e&&N(Ee(t),"iterate",D),Reflect.get(t,"size",t)},has(t){const n=this["__v_raw"],i=Ee(n),o=Ee(t);return e||((0,r.$H)(t,o)&&N(i,"has",t),N(i,"has",o)),t===o?n.has(t):n.has(t)||n.has(o)},forEach(n,r){const i=this,o=i["__v_raw"],s=Ee(o),a=t?te:e?Pe:Ce;return!e&&N(s,"iterate",D),o.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}};(0,r.X$)(n,e?{add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear")}:{add(e){t||Te(e)||_e(e)||(e=Ee(e));const n=Ee(this),r=ne(n),i=r.has.call(n,e);return i||(n.add(e),$(n,"add",e,e)),this},set(e,n){t||Te(n)||_e(n)||(n=Ee(n));const i=Ee(this),{has:o,get:s}=ne(i);let a=o.call(i,e);a||(e=Ee(e),a=o.call(i,e));const c=s.call(i,e);return i.set(e,n),a?(0,r.$H)(n,c)&&$(i,"set",e,n,c):$(i,"add",e,n),this},delete(e){const t=Ee(this),{has:n,get:r}=ne(t);let i=n.call(t,e);i||(e=Ee(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&$(t,"delete",e,void 0,o),s},clear(){const e=Ee(this),t=0!==e.size,n=void 0,r=e.clear();return t&&$(e,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach((r=>{n[r]=re(r,e,t)})),n}function se(e,t){const n=oe(e,t);return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.$3)(n,i)&&i in t?n:t,i,o)}const ae={get:se(!1,!1)},ce={get:se(!1,!0)},le={get:se(!0,!1)};const ue=new WeakMap,de=new WeakMap,he=new WeakMap,fe=new WeakMap;function pe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function me(e){return e["__v_skip"]||!Object.isExtensible(e)?0:pe((0,r.Zf)(e))}function ge(e){return _e(e)?e:we(e,!1,X,ae,ue)}function ve(e){return we(e,!1,ee,ce,de)}function ye(e){return we(e,!0,Q,le,he)}function we(e,t,n,i,o){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=me(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function be(e){return _e(e)?be(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function _e(e){return!(!e||!e["__v_isReadonly"])}function Te(e){return!(!e||!e["__v_isShallow"])}function Ie(e){return!!e&&!!e["__v_raw"]}function Ee(e){const t=e&&e["__v_raw"];return t?Ee(t):e}function Se(e){return!(0,r.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Ce=e=>(0,r.Gv)(e)?ge(e):e,Pe=e=>(0,r.Gv)(e)?ye(e):e;function ke(e){return!!e&&!0===e["__v_isRef"]}function Oe(e){return Re(e,!1)}function Ae(e){return Re(e,!0)}function Re(e,t){return ke(e)?e:new De(e,t)}class De{constructor(e,t){this.dep=new O,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:Ee(e),this._value=t?e:Ce(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this["__v_isShallow"]||Te(e)||_e(e);e=n?e:Ee(e),(0,r.$H)(e,t)&&(this._rawValue=e,this._value=n?e:Ce(e),this.dep.trigger())}}function Me(e){return ke(e)?e.value:e}const xe={get:(e,t,n)=>"__v_raw"===t?e:Me(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ke(i)&&!ke(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ne(e){return be(e)?e:new Proxy(e,xe)}class $e{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new O(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=P-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||o===this))return f(this,!0),!0}get value(){const e=this.dep.track();return w(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Le(e,t,n=!1){let i,o;(0,r.Tn)(e)?i=e:(i=e.get,o=e.set);const s=new $e(i,o,n);return s}const je={},Ue=new WeakMap;let Fe;function Ve(e,t=!1,n=Fe){if(n){let t=Ue.get(n);t||Ue.set(n,t=[]),t.push(e)}else 0}function We(e,t,n=r.MZ){const{immediate:i,deep:o,once:s,scheduler:c,augmentJob:u,call:d}=n,h=e=>o?e:Te(e)||!1===o||0===o?Be(e,1):Be(e);let f,p,m,g,v=!1,y=!1;if(ke(e)?(p=()=>e.value,v=Te(e)):be(e)?(p=()=>h(e),v=!0):(0,r.cy)(e)?(y=!0,v=e.some((e=>be(e)||Te(e))),p=()=>e.map((e=>ke(e)?e.value:be(e)?h(e):(0,r.Tn)(e)?d?d(e,2):e():void 0))):p=(0,r.Tn)(e)?t?d?()=>d(e,2):e:()=>{if(m){E();try{m()}finally{S()}}const t=Fe;Fe=f;try{return d?d(e,3,[g]):e(g)}finally{Fe=t}}:r.tE,t&&o){const e=p,t=!0===o?1/0:o;p=()=>Be(e(),t)}const w=a(),b=()=>{f.stop(),w&&w.active&&(0,r.TF)(w.effects,f)};if(s&&t){const e=t;t=(...t)=>{e(...t),b()}}let _=y?new Array(e.length).fill(je):je;const T=e=>{if(1&f.flags&&(f.dirty||e))if(t){const e=f.run();if(o||v||(y?e.some(((e,t)=>(0,r.$H)(e,_[t]))):(0,r.$H)(e,_))){m&&m();const n=Fe;Fe=f;try{const n=[e,_===je?void 0:y&&_[0]===je?[]:_,g];d?d(t,3,n):t(...n),_=e}finally{Fe=n}}}else f.run()};return u&&u(T),f=new l(p),f.scheduler=c?()=>c(T,!1):T,g=e=>Ve(e,!1,f),m=f.onStop=()=>{const e=Ue.get(f);if(e){if(d)d(e,4);else for(const t of e)t();Ue.delete(f)}},t?i?T(!0):_=f.run():c?c(T.bind(null,!0),!0):f.run(),b.pause=f.pause.bind(f),b.resume=f.resume.bind(f),b.stop=b,b}function Be(e,t=1/0,n){if(t<=0||!(0,r.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,ke(e))Be(e.value,t,n);else if((0,r.cy)(e))for(let r=0;r<e.length;r++)Be(e[r],t,n);else if((0,r.vM)(e)||(0,r.CE)(e))e.forEach((e=>{Be(e,t,n)}));else if((0,r.Qd)(e)){for(const r in e)Be(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Be(e[r],t,n)}return e}},641:(e,t,n)=>{n.d(t,{$u:()=>oe,CE:()=>Jt,Df:()=>V,EW:()=>$n,FK:()=>jt,Gt:()=>Be,Gy:()=>N,K9:()=>dt,Lk:()=>tn,MZ:()=>F,OW:()=>U,Q3:()=>cn,QP:()=>L,RG:()=>ve,WQ:()=>He,Wv:()=>Zt,bF:()=>nn,bo:()=>O,dY:()=>g,eW:()=>an,g2:()=>fe,h:()=>Ln,hi:()=>ae,k6:()=>k,nI:()=>yn,pM:()=>W,qL:()=>s,sV:()=>re,uX:()=>Ht,wB:()=>Tt});var r=n(953),i=n(33);function o(e,t,n,r){try{return r?e(...r):e()}catch(i){a(i,t,n)}}function s(e,t,n,r){if((0,i.Tn)(e)){const s=o(e,t,n,r);return s&&(0,i.yL)(s)&&s.catch((e=>{a(e,t,n)})),s}if((0,i.cy)(e)){const i=[];for(let o=0;o<e.length;o++)i.push(s(e[o],t,n,r));return i}}function a(e,t,n,s=!0){const a=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:u}=t&&t.appContext.config||i.MZ;if(t){let i=t.parent;const s=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,a))return;i=i.parent}if(l)return(0,r.C4)(),o(l,null,10,[e,s,a]),void(0,r.bl)()}c(e,n,a,s,u)}function c(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const l=[];let u=-1;const d=[];let h=null,f=0;const p=Promise.resolve();let m=null;function g(e){const t=m||p;return e?t.then(this?e.bind(this):e):t}function v(e){let t=u+1,n=l.length;while(t<n){const r=t+n>>>1,i=l[r],o=I(i);o<e||o===e&&2&i.flags?t=r+1:n=r}return t}function y(e){if(!(1&e.flags)){const t=I(e),n=l[l.length-1];!n||!(2&e.flags)&&t>=I(n)?l.push(e):l.splice(v(t),0,e),e.flags|=1,w()}}function w(){m||(m=p.then(E))}function b(e){(0,i.cy)(e)?d.push(...e):h&&-1===e.id?h.splice(f+1,0,e):1&e.flags||(d.push(e),e.flags|=1),w()}function _(e,t,n=u+1){for(0;n<l.length;n++){const t=l[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,l.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function T(e){if(d.length){const e=[...new Set(d)].sort(((e,t)=>I(e)-I(t)));if(d.length=0,h)return void h.push(...e);for(h=e,f=0;f<h.length;f++){const e=h[f];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}h=null,f=0}}const I=e=>null==e.id?2&e.flags?-1:1/0:e.id;function E(e){i.tE;try{for(u=0;u<l.length;u++){const e=l[u];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),o(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;u<l.length;u++){const e=l[u];e&&(e.flags&=-2)}u=-1,l.length=0,T(e),m=null,(l.length||d.length)&&E(e)}}let S=null,C=null;function P(e){const t=S;return S=e,C=e&&e.type.__scopeId||null,t}function k(e,t=S,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Gt(-1);const i=P(t);let o;try{o=e(...n)}finally{P(i),r._d&&Gt(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function O(e,t){if(null===S)return e;const n=Mn(S),o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,a,c,l=i.MZ]=t[s];e&&((0,i.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&(0,r.hV)(a),o.push({dir:e,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function A(e,t,n,i){const o=e.dirs,a=t&&t.dirs;for(let c=0;c<o.length;c++){const l=o[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.C4)(),s(u,n,8,[e.el,l,e,t]),(0,r.bl)())}}const R=Symbol("_vte"),D=e=>e.__isTeleport;const M=Symbol("_leaveCb"),x=Symbol("_enterCb");function N(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return re((()=>{e.isMounted=!0})),se((()=>{e.isUnmounting=!0})),e}const $=[Function,Array],L={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$,onEnter:$,onAfterEnter:$,onEnterCancelled:$,onBeforeLeave:$,onLeave:$,onAfterLeave:$,onLeaveCancelled:$,onBeforeAppear:$,onAppear:$,onAfterAppear:$,onAppearCancelled:$};function j(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function U(e,t,n,r,o){const{appear:a,mode:c,persisted:l=!1,onBeforeEnter:u,onEnter:d,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:y,onAppear:w,onAfterAppear:b,onAppearCancelled:_}=t,T=String(e.key),I=j(n,e),E=(e,t)=>{e&&s(e,r,9,t)},S=(e,t)=>{const n=t[1];E(e,t),(0,i.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},C={mode:c,persisted:l,beforeEnter(t){let r=u;if(!n.isMounted){if(!a)return;r=y||u}t[M]&&t[M](!0);const i=I[T];i&&Xt(e,i)&&i.el[M]&&i.el[M](),E(r,[t])},enter(e){let t=d,r=h,i=f;if(!n.isMounted){if(!a)return;t=w||d,r=b||h,i=_||f}let o=!1;const s=e[x]=t=>{o||(o=!0,E(t?i:r,[e]),C.delayedLeave&&C.delayedLeave(),e[x]=void 0)};t?S(t,[e,s]):s()},leave(t,r){const i=String(e.key);if(t[x]&&t[x](!0),n.isUnmounting)return r();E(p,[t]);let o=!1;const s=t[M]=n=>{o||(o=!0,r(),E(n?v:g,[t]),t[M]=void 0,I[i]===e&&delete I[i])};I[i]=e,m?S(m,[t,s]):s()},clone(e){const i=U(e,t,n,r,o);return o&&o(i),i}};return C}function F(e,t){6&e.shapeFlag&&e.component?(e.transition=t,F(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function V(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===jt?(128&s.patchFlag&&i++,r=r.concat(V(s.children,t,a))):(t||s.type!==Ft)&&r.push(null!=a?sn(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function W(e,t){return(0,i.Tn)(e)?(()=>(0,i.X$)({name:e.name},t,{setup:e}))():e}function B(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function H(e,t,n,s,a=!1){if((0,i.cy)(e))return void e.forEach(((e,r)=>H(e,t&&((0,i.cy)(t)?t[r]:t),n,s,a)));if(z(s)&&!a)return void(512&s.shapeFlag&&s.type.__asyncResolved&&s.component.subTree.component&&H(e,t,n,s.component.subTree));const c=4&s.shapeFlag?Mn(s.component):s.el,l=a?null:c,{i:u,r:d}=e;const h=t&&t.r,f=u.refs===i.MZ?u.refs={}:u.refs,p=u.setupState,m=(0,r.ux)(p),g=p===i.MZ?()=>!1:e=>(0,i.$3)(m,e);if(null!=h&&h!==d&&((0,i.Kg)(h)?(f[h]=null,g(h)&&(p[h]=null)):(0,r.i9)(h)&&(h.value=null)),(0,i.Tn)(d))o(d,u,12,[l,f]);else{const t=(0,i.Kg)(d),o=(0,r.i9)(d);if(t||o){const r=()=>{if(e.f){const n=t?g(d)?p[d]:f[d]:d.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):t?(f[d]=[c],g(d)&&(p[d]=f[d])):(d.value=[c],e.k&&(f[e.k]=d.value))}else t?(f[d]=l,g(d)&&(p[d]=l)):o&&(d.value=l,e.k&&(f[e.k]=l))};l?(r.id=-1,ut(r,n)):r()}else 0}}(0,i.We)().requestIdleCallback,(0,i.We)().cancelIdleCallback;const z=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const K=e=>e.type.__isKeepAlive;RegExp,RegExp;function G(e,t){return(0,i.cy)(e)?e.some((e=>G(e,t))):(0,i.Kg)(e)?e.split(",").includes(t):!!(0,i.gd)(e)&&(e.lastIndex=0,e.test(t))}function q(e,t){Z(e,"a",t)}function J(e,t){Z(e,"da",t)}function Z(e,t,n=vn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ee(t,r,n),n){let e=n.parent;while(e&&e.parent)K(e.parent.vnode)&&Y(r,t,n,e),e=e.parent}}function Y(e,t,n,r){const o=ee(t,e,r,!0);ae((()=>{(0,i.TF)(r[t],o)}),n)}function X(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Q(e){return 128&e.shapeFlag?e.ssContent:e}function ee(e,t,n=vn,i=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{(0,r.C4)();const o=_n(n),a=s(t,n,e,i);return o(),(0,r.bl)(),a});return i?o.unshift(a):o.push(a),a}}const te=e=>(t,n=vn)=>{Cn&&"sp"!==e||ee(e,((...e)=>t(...e)),n)},ne=te("bm"),re=te("m"),ie=te("bu"),oe=te("u"),se=te("bum"),ae=te("um"),ce=te("sp"),le=te("rtg"),ue=te("rtc");function de(e,t=vn){ee("ec",e,t)}const he="components";function fe(e,t){return me(he,e,!0,t)||e}const pe=Symbol.for("v-ndc");function me(e,t,n=!0,r=!1){const o=S||vn;if(o){const n=o.type;if(e===he){const e=xn(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const s=ge(o[e]||n[e],t)||ge(o.appContext[e],t);return!s&&r?n:s}}function ge(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}function ve(e,t,n={},r,o){if(S.ce||S.parent&&z(S.parent)&&S.parent.ce)return"default"!==t&&(n.name=t),Ht(),Zt(jt,null,[nn("slot",n,r&&r())],64);let s=e[t];s&&s._c&&(s._d=!1),Ht();const a=s&&ye(s(n)),c=n.key||a&&a.key,l=Zt(jt,{key:(c&&!(0,i.Bm)(c)?c:`_${t}`)+(!a&&r?"_fb":"")},a||(r?r():[]),a&&1===e._?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function ye(e){return e.some((e=>!Yt(e)||e.type!==Ft&&!(e.type===jt&&!ye(e.children))))?e:null}const we=e=>e?In(e)?Mn(e):we(e.parent):null,be=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>we(e.parent),$root:e=>we(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Oe(e),$forceUpdate:e=>e.f||(e.f=()=>{y(e.update)}),$nextTick:e=>e.n||(e.n=g.bind(e.proxy)),$watch:e=>Et.bind(e)}),_e=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),Te={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:l,appContext:u}=e;let d;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(_e(o,t))return c[t]=1,o[t];if(s!==i.MZ&&(0,i.$3)(s,t))return c[t]=2,s[t];if((d=e.propsOptions[0])&&(0,i.$3)(d,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];Ee&&(c[t]=0)}}const h=be[t];let f,p;return h?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),h(e)):(f=l.__cssModules)&&(f=f[t])?f:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(p=u.config.globalProperties,(0,i.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return _e(o,t)?(o[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==i.MZ&&(0,i.$3)(e,a)||_e(t,a)||(c=s[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(be,a)||(0,i.$3)(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ie(e){return(0,i.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ee=!0;function Se(e){const t=Oe(e),n=e.proxy,o=e.ctx;Ee=!1,t.beforeCreate&&Pe(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:l,provide:u,inject:d,created:h,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:T,render:I,renderTracked:E,renderTriggered:S,errorCaptured:C,serverPrefetch:P,expose:k,inheritAttrs:O,components:A,directives:R,filters:D}=t,M=null;if(d&&Ce(d,o,M),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(o[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Ee=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const s=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=$n({get:t,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)ke(l[r],o,n,r);if(u){const e=(0,i.Tn)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{Be(t,e[t])}))}function x(e,t){(0,i.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(h&&Pe(h,e,"c"),x(ne,f),x(re,p),x(ie,m),x(oe,g),x(q,v),x(J,y),x(de,C),x(ue,E),x(le,S),x(se,b),x(ae,T),x(ce,P),(0,i.cy)(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});I&&e.render===i.tE&&(e.render=I),null!=O&&(e.inheritAttrs=O),A&&(e.components=A),R&&(e.directives=R),P&&B(e)}function Ce(e,t,n=i.tE){(0,i.cy)(e)&&(e=xe(e));for(const o in e){const n=e[o];let s;s=(0,i.Gv)(n)?"default"in n?He(n.from||o,n.default,!0):He(n.from||o):He(n),(0,r.i9)(s)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function Pe(e,t,n){s((0,i.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function ke(e,t,n,r){let o=r.includes(".")?St(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&Tt(o,n)}else if((0,i.Tn)(e))Tt(o,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach((e=>ke(e,t,n,r)));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&Tt(o,r,e)}else 0}function Oe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let l;return c?l=c:o.length||n||r?(l={},o.length&&o.forEach((e=>Ae(l,e,a,!0))),Ae(l,t,a)):l=t,(0,i.Gv)(t)&&s.set(t,l),l}function Ae(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Ae(e,o,n,!0),i&&i.forEach((t=>Ae(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=Re[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Re={data:De,props:Le,emits:Le,methods:$e,computed:$e,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:$e,directives:$e,watch:je,provide:De,inject:Me};function De(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function Me(e,t){return $e(xe(e),xe(t))}function xe(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ne(e,t){return e?[...new Set([].concat(e,t))]:t}function $e(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function Le(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),Ie(e),Ie(null!=t?t:{})):t}function je(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=Ne(e[r],t[r]);return n}function Ue(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fe=0;function Ve(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const o=Ue(),a=new WeakSet,c=[];let l=!1;const u=o.app={_uid:Fe++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:jn,get config(){return o.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,i.Tn)(e.install)?(a.add(e),e.install(u,...t)):(0,i.Tn)(e)&&(a.add(e),e(u,...t))),u},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),u},component(e,t){return t?(o.components[e]=t,u):o.components[e]},directive(e,t){return t?(o.directives[e]=t,u):o.directives[e]},mount(i,s,a){if(!l){0;const c=u._ceVNode||nn(n,r);return c.appContext=o,!0===a?a="svg":!1===a&&(a=void 0),s&&t?t(c,i):e(c,i,a),l=!0,u._container=i,i.__vue_app__=u,Mn(c.component)}},onUnmount(e){c.push(e)},unmount(){l&&(s(c,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(e,t){return o.provides[e]=t,u},runWithContext(e){const t=We;We=u;try{return e()}finally{We=t}}};return u}}let We=null;function Be(e,t){if(vn){let n=vn.provides;const r=vn.parent&&vn.parent.provides;r===n&&(n=vn.provides=Object.create(r)),n[e]=t}else 0}function He(e,t,n=!1){const r=vn||S;if(r||We){const o=We?We._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}const ze={},Ke=()=>Object.create(ze),Ge=e=>Object.getPrototypeOf(e)===ze;function qe(e,t,n,i=!1){const o={},s=Ke();e.propsDefaults=Object.create(null),Ze(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:(0,r.Gc)(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Je(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.ux)(s),[u]=e.propsOptions;let d=!1;if(!(o||c>0)||16&c){let r;Ze(e,t,s,a)&&(d=!0);for(const o in l)t&&((0,i.$3)(t,o)||(r=(0,i.Tg)(o))!==o&&(0,i.$3)(t,r))||(u?!n||void 0===n[o]&&void 0===n[r]||(s[o]=Ye(u,l,o,void 0,e,!0)):delete s[o]);if(a!==l)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],d=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Ot(e.emitsOptions,o))continue;const c=t[o];if(u)if((0,i.$3)(a,o))c!==a[o]&&(a[o]=c,d=!0);else{const t=(0,i.PT)(o);s[t]=Ye(u,l,t,c,e,!1)}else c!==a[o]&&(a[o]=c,d=!0)}}d&&(0,r.hZ)(e.attrs,"set","")}function Ze(e,t,n,o){const[s,a]=e.propsOptions;let c,l=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const u=t[r];let d;s&&(0,i.$3)(s,d=(0,i.PT)(r))?a&&a.includes(d)?(c||(c={}))[d]=u:n[d]=u:Ot(e.emitsOptions,r)||r in o&&u===o[r]||(o[r]=u,l=!0)}if(a){const t=(0,r.ux)(n),o=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Ye(s,t,c,o[c],e,!(0,i.$3)(o,c))}}return l}function Ye(e,t,n,r,o,s){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=o;if(n in i)r=i[n];else{const s=_n(o);r=i[n]=e.call(null,t),s()}}else r=e;o.ce&&o.ce._setProp(n,r)}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const Xe=new WeakMap;function Qe(e,t,n=!1){const r=n?Xe:t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},c=[];let l=!1;if(!(0,i.Tn)(e)){const r=e=>{l=!0;const[n,r]=Qe(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!l)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(s))for(let d=0;d<s.length;d++){0;const e=(0,i.PT)(s[d]);et(e)&&(a[e]=i.MZ)}else if(s){0;for(const e in s){const t=(0,i.PT)(e);if(et(t)){const n=s[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),o=r.type;let l=!1,u=!0;if((0,i.cy)(o))for(let e=0;e<o.length;++e){const t=o[e],n=(0,i.Tn)(t)&&t.name;if("Boolean"===n){l=!0;break}"String"===n&&(u=!1)}else l=(0,i.Tn)(o)&&"Boolean"===o.name;r[0]=l,r[1]=u,(l||(0,i.$3)(r,"default"))&&c.push(t)}}}const u=[a,c];return(0,i.Gv)(e)&&r.set(e,u),u}function et(e){return"$"!==e[0]&&!(0,i.SU)(e)}const tt=e=>"_"===e[0]||"$stable"===e,nt=e=>(0,i.cy)(e)?e.map(ln):[ln(e)],rt=(e,t,n)=>{if(t._n)return t;const r=k(((...e)=>nt(t(...e))),n);return r._c=!1,r},it=(e,t,n)=>{const r=e._ctx;for(const o in e){if(tt(o))continue;const n=e[o];if((0,i.Tn)(n))t[o]=rt(o,n,r);else if(null!=n){0;const e=nt(n);t[o]=()=>e}}},ot=(e,t)=>{const n=nt(t);e.slots.default=()=>n},st=(e,t,n)=>{for(const r in t)(n||"_"!==r)&&(e[r]=t[r])},at=(e,t,n)=>{const r=e.slots=Ke();if(32&e.vnode.shapeFlag){const e=t._;e?(st(r,t,n),n&&(0,i.yQ)(r,"_",e,!0)):it(t,r)}else t&&ot(e,t)},ct=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:st(o,t,n):(s=!t.$stable,it(t,o)),a=t}else t&&(ot(e,t),a={default:1});if(s)for(const i in o)tt(i)||null!=a[i]||delete o[i]};function lt(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const ut=Lt;function dt(e){return ht(e)}function ht(e,t){lt();const n=(0,i.We)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:l,createComment:u,setText:d,setElementText:h,parentNode:f,nextSibling:p,setScopeId:m=i.tE,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,o=null,s=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Xt(e,t)&&(r=Q(e),q(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:d}=t;switch(l){case Ut:w(e,t,n,r);break;case Ft:b(e,t,n,r);break;case Vt:null==e&&I(t,n,r,s);break;case jt:N(e,t,n,r,i,o,s,a,c);break;default:1&d?C(e,t,n,r,i,o,s,a,c):6&d?$(e,t,n,r,i,o,s,a,c):(64&d||128&d)&&l.process(e,t,n,r,i,o,s,a,c,ne)}null!=u&&i&&H(u,e&&e.ref,o,t||e,!t)},w=(e,t,n,r)=>{if(null==e)o(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},b=(e,t,n,r)=>{null==e?o(t.el=u(t.children||""),n,r):t.el=e.el},I=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),o(e,n,r),e=i;o(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},C=(e,t,n,r,i,o,s,a,c)=>{"svg"===t.type?s="svg":"math"===t.type&&(s="mathml"),null==e?P(t,n,r,i,o,s,a,c):D(e,t,i,o,s,a,c)},P=(e,t,n,r,s,l,u,d)=>{let f,p;const{props:m,shapeFlag:g,transition:v,dirs:y}=e;if(f=e.el=c(e.type,l,m&&m.is,m),8&g?h(f,e.children):16&g&&O(e.children,f,null,r,s,ft(e,l),u,d),y&&A(e,null,r,"created"),k(f,e,e.scopeId,u,r),m){for(const e in m)"value"===e||(0,i.SU)(e)||a(f,e,null,m[e],l,r);"value"in m&&a(f,"value",null,m.value,l),(p=m.onVnodeBeforeMount)&&fn(p,r,e)}y&&A(e,null,r,"beforeMount");const w=mt(s,v);w&&v.beforeEnter(f),o(f,t,n),((p=m&&m.onVnodeMounted)||w||y)&&ut((()=>{p&&fn(p,r,e),w&&v.enter(f),y&&A(e,null,r,"mounted")}),s)},k=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let o=0;o<r.length;o++)m(e,r[o]);if(i){let n=i.subTree;if(t===n||$t(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=i.vnode;k(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,o,s,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?un(e[l]):ln(e[l]);v(null,c,t,n,r,i,o,s,a)}},D=(e,t,n,r,o,s,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i.MZ,m=t.props||i.MZ;let g;if(n&&pt(n,!1),(g=m.onVnodeBeforeUpdate)&&fn(g,n,t,e),f&&A(t,e,n,"beforeUpdate"),n&&pt(n,!0),(p.innerHTML&&null==m.innerHTML||p.textContent&&null==m.textContent)&&h(l,""),d?M(e.dynamicChildren,d,l,n,r,ft(t,o),s):c||V(e,t,l,null,n,r,ft(t,o),s,!1),u>0){if(16&u)x(l,p,m,n,o);else if(2&u&&p.class!==m.class&&a(l,"class",null,m.class,o),4&u&&a(l,"style",p.style,m.style,o),8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t],i=p[r],s=m[r];s===i&&"value"!==r||a(l,r,i,s,o,n)}}1&u&&e.children!==t.children&&h(l,t.children)}else c||null!=d||x(l,p,m,n,o);((g=m.onVnodeUpdated)||f)&&ut((()=>{g&&fn(g,n,t,e),f&&A(t,e,n,"updated")}),r)},M=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===jt||!Xt(c,l)||70&c.shapeFlag)?f(c.el):n;v(c,l,u,null,r,i,o,s,!0)}},x=(e,t,n,r,o)=>{if(t!==n){if(t!==i.MZ)for(const s in t)(0,i.SU)(s)||s in n||a(e,s,t[s],null,o,r);for(const s in n){if((0,i.SU)(s))continue;const c=n[s],l=t[s];c!==l&&"value"!==s&&a(e,s,l,c,o,r)}"value"in n&&a(e,"value",t.value,n.value,o)}},N=(e,t,n,r,i,s,a,c,u)=>{const d=t.el=e?e.el:l(""),h=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(o(d,n,r),o(h,n,r),O(t.children||[],n,h,i,s,a,c,u)):f>0&&64&f&&p&&e.dynamicChildren?(M(e.dynamicChildren,p,n,i,s,a,c),(null!=t.key||i&&t===i.subTree)&&gt(e,t,!0)):V(e,t,n,h,i,s,a,c,u)},$=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):L(t,n,r,i,o,s,c):j(e,t,c)},L=(e,t,n,r,i,o,s)=>{const a=e.component=gn(e,r,i);if(K(e)&&(a.ctx.renderer=ne),Pn(a,!1,s),a.asyncDep){if(i&&i.registerDep(a,U,s),!e.el){const e=a.subTree=nn(Ft);b(null,e,t,n)}}else U(a,e,t,n,i,o,s)},j=(e,t,n)=>{const r=t.component=e.component;if(Mt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,t,n);r.next=t,r.update()}else t.el=e.el,r.vnode=t},U=(e,t,n,o,s,a,c)=>{const l=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:o,vnode:u}=e;{const n=yt(e);if(n)return t&&(t.el=u.el,F(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||l()}))}let d,h=t;0,pt(e,!1),t?(t.el=u.el,F(e,t,c)):t=u,n&&(0,i.DY)(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&fn(d,o,t,u),pt(e,!0);const p=At(e);0;const m=e.subTree;e.subTree=p,v(m,p,f(m.el),Q(m),e,s,a),t.el=p.el,null===h&&Nt(e,p.el),r&&ut(r,s),(d=t.props&&t.props.onVnodeUpdated)&&ut((()=>fn(d,o,t,u)),s)}else{let r;const{el:c,props:l}=t,{bm:u,m:d,parent:h,root:f,type:p}=e,m=z(t);if(pt(e,!1),u&&(0,i.DY)(u),!m&&(r=l&&l.onVnodeBeforeMount)&&fn(r,h,t),pt(e,!0),c&&ie){const t=()=>{e.subTree=At(e),ie(c,e.subTree,e,s,null)};m&&p.__asyncHydrate?p.__asyncHydrate(c,e,t):t()}else{f.ce&&f.ce._injectChildStyle(p);const r=e.subTree=At(e);0,v(null,r,n,o,e,s,a),t.el=r.el}if(d&&ut(d,s),!m&&(r=l&&l.onVnodeMounted)){const e=t;ut((()=>fn(r,h,e)),s)}(256&t.shapeFlag||h&&z(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&ut(e.a,s),e.isMounted=!0,t=n=o=null}};e.scope.on();const u=e.effect=new r.X2(l);e.scope.off();const d=e.update=u.run.bind(u),h=e.job=u.runIfDirty.bind(u);h.i=e,h.id=e.uid,u.scheduler=()=>y(h),pt(e,!0),d()},F=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,Je(e,t.props,i,n),ct(e,t.children,n),(0,r.C4)(),_(e),(0,r.bl)()},V=(e,t,n,r,i,o,s,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void B(l,d,n,r,i,o,s,a,c);if(256&f)return void W(l,d,n,r,i,o,s,a,c)}8&p?(16&u&&X(l,i,o),d!==l&&h(n,d)):16&u?16&p?B(l,d,n,r,i,o,s,a,c):X(l,i,o,!0):(8&u&&h(n,""),16&p&&O(d,n,r,i,o,s,a,c))},W=(e,t,n,r,o,s,a,c,l)=>{e=e||i.Oj,t=t||i.Oj;const u=e.length,d=t.length,h=Math.min(u,d);let f;for(f=0;f<h;f++){const r=t[f]=l?un(t[f]):ln(t[f]);v(e[f],r,n,null,o,s,a,c,l)}u>d?X(e,o,s,!0,!1,h):O(t,n,r,o,s,a,c,l,h)},B=(e,t,n,r,o,s,a,c,l)=>{let u=0;const d=t.length;let h=e.length-1,f=d-1;while(u<=h&&u<=f){const r=e[u],i=t[u]=l?un(t[u]):ln(t[u]);if(!Xt(r,i))break;v(r,i,n,null,o,s,a,c,l),u++}while(u<=h&&u<=f){const r=e[h],i=t[f]=l?un(t[f]):ln(t[f]);if(!Xt(r,i))break;v(r,i,n,null,o,s,a,c,l),h--,f--}if(u>h){if(u<=f){const e=f+1,i=e<d?t[e].el:r;while(u<=f)v(null,t[u]=l?un(t[u]):ln(t[u]),n,i,o,s,a,c,l),u++}}else if(u>f)while(u<=h)q(e[u],o,s,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const e=t[u]=l?un(t[u]):ln(t[u]);null!=e.key&&g.set(e.key,u)}let y,w=0;const b=f-m+1;let _=!1,T=0;const I=new Array(b);for(u=0;u<b;u++)I[u]=0;for(u=p;u<=h;u++){const r=e[u];if(w>=b){q(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=f;y++)if(0===I[y-m]&&Xt(r,t[y])){i=y;break}void 0===i?q(r,o,s,!0):(I[i-m]=u+1,i>=T?T=i:_=!0,v(r,t[i],n,null,o,s,a,c,l),w++)}const E=_?vt(I):i.Oj;for(y=E.length-1,u=b-1;u>=0;u--){const e=m+u,i=t[e],h=e+1<d?t[e+1].el:r;0===I[u]?v(null,i,n,h,o,s,a,c,l):_&&(y<0||u!==E[y]?G(i,n,h,2):y--)}}},G=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void G(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,ne);if(a===jt){o(s,t,n);for(let e=0;e<l.length;e++)G(l[e],t,n,r);return void o(e.anchor,t,n)}if(a===Vt)return void E(e,t,n);const d=2!==r&&1&u&&c;if(d)if(0===r)c.beforeEnter(s),o(s,t,n),ut((()=>c.enter(s)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),l=()=>{e(s,(()=>{a(),i&&i()}))};r?r(s,a,l):l()}else o(s,t,n)},q=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:h,cacheIndex:f}=e;if(-2===d&&(i=!1),null!=a&&H(a,null,n,e,!0),null!=f&&(t.renderCache[f]=void 0),256&u)return void t.ctx.deactivate(e);const p=1&u&&h,m=!z(e);let g;if(m&&(g=s&&s.onVnodeBeforeUnmount)&&fn(g,t,e),6&u)Y(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&A(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,ne,r):l&&!l.hasOnce&&(o!==jt||d>0&&64&d)?X(l,t,n,!1,!0):(o===jt&&384&d||!i&&16&u)&&X(c,t,n),r&&J(e)}(m&&(g=s&&s.onVnodeUnmounted)||p)&&ut((()=>{g&&fn(g,t,e),p&&A(e,null,t,"unmounted")}),n)},J=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===jt)return void Z(n,r);if(t===Vt)return void S(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},Z=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},Y=(e,t,n)=>{const{bum:r,scope:o,job:s,subTree:a,um:c,m:l,a:u}=e;wt(l),wt(u),r&&(0,i.DY)(r),o.stop(),s&&(s.flags|=8,q(a,e,t,n)),c&&ut(c,t),ut((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)q(e[s],t,n,r,i)},Q=e=>{if(6&e.shapeFlag)return Q(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[R];return n?p(n):t};let ee=!1;const te=(e,t,n)=>{null==e?t._vnode&&q(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ee||(ee=!0,_(),T(),ee=!1)},ne={p:v,um:q,m:G,r:J,mt:L,mc:O,pc:V,pbc:M,n:Q,o:e};let re,ie;return t&&([re,ie]=t(ne)),{render:te,hydrate:re,createApp:Ve(te,re)}}function ft({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function pt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function mt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function gt(e,t,n=!1){const r=e.children,o=t.children;if((0,i.cy)(r)&&(0,i.cy)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=un(o[i]),t.el=e.el),n||-2===t.patchFlag||gt(e,t)),t.type===Ut&&(t.el=e.el)}}function vt(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}function yt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:yt(t)}function wt(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const bt=Symbol.for("v-scx"),_t=()=>{{const e=He(bt);return e}};function Tt(e,t,n){return It(e,t,n)}function It(e,t,n=i.MZ){const{immediate:o,deep:a,flush:c,once:l}=n;const u=(0,i.X$)({},n);const d=t&&o||!t&&"post"!==c;let h;if(Cn)if("sync"===c){const e=_t();h=e.__watcherHandles||(e.__watcherHandles=[])}else if(!d){const e=()=>{};return e.stop=i.tE,e.resume=i.tE,e.pause=i.tE,e}const f=vn;u.call=(e,t,n)=>s(e,f,t,n);let p=!1;"post"===c?u.scheduler=e=>{ut(e,f&&f.suspense)}:"sync"!==c&&(p=!0,u.scheduler=(e,t)=>{t?e():y(e)}),u.augmentJob=e=>{t&&(e.flags|=4),p&&(e.flags|=2,f&&(e.id=f.uid,e.i=f))};const m=(0,r.wB)(e,t,u);return Cn&&(h?h.push(m):d&&m()),m}function Et(e,t,n){const r=this.proxy,o=(0,i.Kg)(e)?e.includes(".")?St(r,e):()=>r[e]:e.bind(r,r);let s;(0,i.Tn)(t)?s=t:(s=t.handler,n=t);const a=_n(this),c=It(o,s.bind(r),n);return a(),c}function St(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const Ct=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,i.PT)(t)}Modifiers`]||e[`${(0,i.Tg)(t)}Modifiers`];function Pt(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let o=n;const a=t.startsWith("update:"),c=a&&Ct(r,t.slice(7));let l;c&&(c.trim&&(o=n.map((e=>(0,i.Kg)(e)?e.trim():e))),c.number&&(o=n.map(i.bB)));let u=r[l=(0,i.rU)(t)]||r[l=(0,i.rU)((0,i.PT)(t))];!u&&a&&(u=r[l=(0,i.rU)((0,i.Tg)(t))]),u&&s(u,e,6,o);const d=r[l+"Once"];if(d){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,s(d,e,6,o)}}function kt(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=kt(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,i.cy)(s)?s.forEach((e=>a[e]=null)):(0,i.X$)(a,s),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function Ot(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}function At(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:c,attrs:l,emit:u,render:d,renderCache:h,props:f,data:p,setupState:m,ctx:g,inheritAttrs:v}=e,y=P(e);let w,b;try{if(4&n.shapeFlag){const e=o||r,t=e;w=ln(d.call(t,e,h,f,m,p,g)),b=l}else{const e=t;0,w=ln(e.length>1?e(f,{attrs:l,slots:c,emit:u}):e(f,null)),b=t.props?l:Rt(l)}}catch(T){Wt.length=0,a(T,e,1),w=nn(Ft)}let _=w;if(b&&!1!==v){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(s&&e.some(i.CP)&&(b=Dt(b,s)),_=sn(_,b,!1,!0))}return n.dirs&&(_=sn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&F(_,n.transition),w=_,P(y),w}const Rt=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},Dt=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Mt(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||xt(r,s,l):!!s);if(1024&c)return!0;if(16&c)return r?xt(r,s,l):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!Ot(l,n))return!0}}return!1}function xt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!Ot(n,o))return!0}return!1}function Nt({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const $t=e=>e.__isSuspense;function Lt(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):b(e)}const jt=Symbol.for("v-fgt"),Ut=Symbol.for("v-txt"),Ft=Symbol.for("v-cmt"),Vt=Symbol.for("v-stc"),Wt=[];let Bt=null;function Ht(e=!1){Wt.push(Bt=e?null:[])}function zt(){Wt.pop(),Bt=Wt[Wt.length-1]||null}let Kt=1;function Gt(e,t=!1){Kt+=e,e<0&&Bt&&t&&(Bt.hasOnce=!0)}function qt(e){return e.dynamicChildren=Kt>0?Bt||i.Oj:null,zt(),Kt>0&&Bt&&Bt.push(e),e}function Jt(e,t,n,r,i,o){return qt(tn(e,t,n,r,i,o,!0))}function Zt(e,t,n,r,i){return qt(nn(e,t,n,r,i,!0))}function Yt(e){return!!e&&!0===e.__v_isVNode}function Xt(e,t){return e.type===t.type&&e.key===t.key}const Qt=({key:e})=>null!=e?e:null,en=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:S,r:e,k:t,f:!!n}:e:null);function tn(e,t=null,n=null,r=0,o=null,s=(e===jt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qt(t),ref:t&&en(t),scopeId:C,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:S};return c?(dn(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.Kg)(n)?8:16),Kt>0&&!a&&Bt&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Bt.push(l),l}const nn=rn;function rn(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==pe||(e=Ft),Yt(e)){const r=sn(e,t,!0);return n&&dn(r,n),Kt>0&&!a&&Bt&&(6&r.shapeFlag?Bt[Bt.indexOf(e)]=r:Bt.push(r)),r.patchFlag=-2,r}if(Nn(e)&&(e=e.__vccOpts),t){t=on(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:$t(e)?128:D(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return tn(e,t,n,o,s,c,a,!0)}function on(e){return e?(0,r.ju)(e)||Ge(e)?(0,i.X$)({},e):e:null}function sn(e,t,n=!1,r=!1){const{props:o,ref:s,patchFlag:a,children:c,transition:l}=e,u=t?hn(o||{},t):o,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Qt(u),ref:t&&t.ref?n&&s?(0,i.cy)(s)?s.concat(en(t)):[s,en(t)]:en(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==jt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&F(d,l.clone(d)),d}function an(e=" ",t=0){return nn(Ut,null,e,t)}function cn(e="",t=!1){return t?(Ht(),Zt(Ft,null,e)):nn(Ft,null,e)}function ln(e){return null==e||"boolean"===typeof e?nn(Ft):(0,i.cy)(e)?nn(jt,null,e.slice()):Yt(e)?un(e):nn(Ut,null,String(e))}function un(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:sn(e)}function dn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),dn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Ge(t)?3===r&&S&&(1===S.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=S}}else(0,i.Tn)(t)?(t={default:t,_ctx:S},n=32):(t=String(t),64&r?(n=16,t=[an(t)]):n=8);e.children=t,e.shapeFlag|=n}function hn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.cy)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function fn(e,t,n,r=null){s(e,t,7,[n,r])}const pn=Ue();let mn=0;function gn(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||pn,a={uid:mn++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qe(o,s),emitsOptions:kt(o,s),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:o.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Pt.bind(null,a),e.ce&&e.ce(a),a}let vn=null;const yn=()=>vn||S;let wn,bn;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};wn=t("__VUE_INSTANCE_SETTERS__",(e=>vn=e)),bn=t("__VUE_SSR_SETTERS__",(e=>Cn=e))}const _n=e=>{const t=vn;return wn(e),e.scope.on(),()=>{e.scope.off(),wn(t)}},Tn=()=>{vn&&vn.scope.off(),wn(null)};function In(e){return 4&e.vnode.shapeFlag}let En,Sn,Cn=!1;function Pn(e,t=!1,n=!1){t&&bn(t);const{props:r,children:i}=e.vnode,o=In(e);qe(e,r,o,t),at(e,i,n);const s=o?kn(e,t):void 0;return t&&bn(!1),s}function kn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Te);const{setup:s}=n;if(s){(0,r.C4)();const n=e.setupContext=s.length>1?Dn(e):null,c=_n(e),l=o(s,e,0,[e.props,n]),u=(0,i.yL)(l);if((0,r.bl)(),c(),!u&&!e.sp||z(e)||B(e),u){if(l.then(Tn,Tn),t)return l.then((n=>{On(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else On(e,l,t)}else An(e,t)}function On(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),An(e,n)}function An(e,t,n){const o=e.type;if(!e.render){if(!t&&En&&!o.render){const t=o.template||Oe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:s},r),a);o.render=En(t,c)}}e.render=o.render||i.tE,Sn&&Sn(e)}{const t=_n(e);(0,r.C4)();try{Se(e)}finally{(0,r.bl)(),t()}}}const Rn={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function Dn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Rn),slots:e.slots,emit:e.emit,expose:t}}function Mn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in be?be[n](e):void 0},has(e,t){return t in e||t in be}})):e.proxy}function xn(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Nn(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const $n=(e,t)=>{const n=(0,r.EW)(e,t,Cn);return n};function Ln(e,t,n){const r=arguments.length;return 2===r?(0,i.Gv)(t)&&!(0,i.cy)(t)?Yt(t)?nn(e,null,[t]):nn(e,t):nn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Yt(n)&&(n=[n]),nn(e,t,n))}const jn="3.5.13"},751:(e,t,n)=>{n.d(t,{D$:()=>X,Ef:()=>ne,Jo:()=>J,aG:()=>y});var r=n(641),i=n(33);n(953);
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let o;const s="undefined"!==typeof window&&window.trustedTypes;if(s)try{o=s.createPolicy("vue",{createHTML:e=>e})}catch(oe){}const a=o?e=>o.createHTML(e):e=>e,c="http://www.w3.org/2000/svg",l="http://www.w3.org/1998/Math/MathML",u="undefined"!==typeof document?document:null,d=u&&u.createElement("template"),h={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?u.createElementNS(c,e):"mathml"===t?u.createElementNS(l,e):n?u.createElement(e,{is:n}):u.createElement(e);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>u.createTextNode(e),createComment:e=>u.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>u.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{d.innerHTML=a("svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e);const i=d.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},f=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function m(e,t,n){const r=e[f];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const g=Symbol("_vod"),v=Symbol("_vsh"),y={beforeMount(e,{value:t},{transition:n}){e[g]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):w(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),w(e,!0),r.enter(e)):r.leave(e,(()=>{w(e,!1)})):w(e,t))},beforeUnmount(e,{value:t}){w(e,t)}};function w(e,t){e.style.display=t?e[g]:"none",e[v]=!t}const b=Symbol("");const _=/(^|;)\s*display\s*:/;function T(e,t,n){const r=e.style,o=(0,i.Kg)(n);let s=!1;if(n&&!o){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&E(r,t,"")}else for(const e in t)null==n[e]&&E(r,e,"");for(const e in n)"display"===e&&(s=!0),E(r,e,n[e])}else if(o){if(t!==n){const e=r[b];e&&(n+=";"+e),r.cssText=n,s=_.test(n)}}else t&&e.removeAttribute("style");g in e&&(e[g]=s?r.display:"",e[v]&&(r.display="none"))}const I=/\s*!important$/;function E(e,t,n){if((0,i.cy)(n))n.forEach((n=>E(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=P(e,t);I.test(n)?e.setProperty((0,i.Tg)(r),n.replace(I,""),"important"):e[r]=n}}const S=["Webkit","Moz","ms"],C={};function P(e,t){const n=C[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return C[t]=r;r=(0,i.ZH)(r);for(let i=0;i<S.length;i++){const n=S[i]+r;if(n in e)return C[t]=n}return t}const k="http://www.w3.org/1999/xlink";function O(e,t,n,r,o,s=(0,i.J$)(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(k,t.slice(6,t.length)):e.setAttributeNS(k,t,n):null==n||s&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,s?"":(0,i.Bm)(n)?String(n):n)}function A(e,t,n,r,o){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?a(n):n));const s=e.tagName;if("value"===t&&"PROGRESS"!==s&&!s.includes("-")){const r="OPTION"===s?e.getAttribute("value")||"":e.value,i=null==n?"checkbox"===e.type?"on":"":String(n);return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let c=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{e[t]=n}catch(oe){0}c&&e.removeAttribute(o||t)}function R(e,t,n,r){e.addEventListener(t,n,r)}function D(e,t,n,r){e.removeEventListener(t,n,r)}const M=Symbol("_vei");function x(e,t,n,r,i=null){const o=e[M]||(e[M]={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=$(t);if(r){const s=o[t]=F(r,i);R(e,n,s,a)}else s&&(D(e,n,s,a),o[t]=void 0)}}const N=/(?:Once|Passive|Capture)$/;function $(e){let t;if(N.test(e)){let n;t={};while(n=e.match(N))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[n,t]}let L=0;const j=Promise.resolve(),U=()=>L||(j.then((()=>L=0)),L=Date.now());function F(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(V(e,n.value),t,5,[e])};return n.value=e,n.attached=U(),n}function V(e,t){if((0,i.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const W=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,B=(e,t,n,r,o,s)=>{const a="svg"===o;"class"===t?m(e,r,a):"style"===t?T(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||x(e,t,n,r,s):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):H(e,t,r,a))?(A(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||O(e,t,r,a,s,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&(0,i.Kg)(r)?("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),O(e,t,r,a)):A(e,(0,i.PT)(t),r,s,t)};function H(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&W(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!W(t)||!(0,i.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");const z=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.cy)(t)?e=>(0,i.DY)(t,e):t};function K(e){e.target.composing=!0}function G(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const q=Symbol("_assign"),J={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e[q]=z(o);const s=r||o.props&&"number"===o.props.type;R(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),s&&(r=(0,i.bB)(r)),e[q](r)})),n&&R(e,"change",(()=>{e.value=e.value.trim()})),t||(R(e,"compositionstart",K),R(e,"compositionend",G),R(e,"change",G))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:o,number:s}},a){if(e[q]=z(a),e.composing)return;const c=!s&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,i.bB)(e.value),l=null==t?"":t;if(c!==l){if(document.activeElement===e&&"range"!==e.type){if(r&&t===n)return;if(o&&e.value.trim()===l)return}e.value=l}}};const Z=["ctrl","shift","alt","meta"],Y={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Z.some((n=>e[`${n}Key`]&&!t.includes(n)))},X=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=Y[t[e]];if(r&&r(n,t))return}return e(n,...r)})},Q=(0,i.X$)({patchProp:B},h);let ee;function te(){return ee||(ee=(0,r.K9)(Q))}const ne=(...e)=>{const t=te().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=ie(e);if(!r)return;const o=t._component;(0,i.Tn)(o)||o.render||o.template||(o.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const s=n(r,!1,re(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function re(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function ie(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}},33:(e,t,n)=>{
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}n.d(t,{$3:()=>f,$H:()=>L,BH:()=>z,BX:()=>ne,Bm:()=>_,C4:()=>Y,CE:()=>m,CP:()=>l,DY:()=>j,Gv:()=>T,J$:()=>Q,Kg:()=>b,MZ:()=>i,Mp:()=>c,NO:()=>a,Oj:()=>o,PT:()=>D,Qd:()=>P,Ro:()=>V,SU:()=>O,TF:()=>d,Tg:()=>x,Tn:()=>w,Tr:()=>K,We:()=>B,X$:()=>u,Y2:()=>ee,ZH:()=>N,Zf:()=>C,bB:()=>F,cy:()=>p,gd:()=>y,pD:()=>r,rU:()=>$,tE:()=>s,u3:()=>re,vM:()=>g,v_:()=>oe,yI:()=>k,yL:()=>I,yQ:()=>U});const i={},o=[],s=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l=e=>e.startsWith("onUpdate:"),u=Object.assign,d=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},h=Object.prototype.hasOwnProperty,f=(e,t)=>h.call(e,t),p=Array.isArray,m=e=>"[object Map]"===S(e),g=e=>"[object Set]"===S(e),v=e=>"[object Date]"===S(e),y=e=>"[object RegExp]"===S(e),w=e=>"function"===typeof e,b=e=>"string"===typeof e,_=e=>"symbol"===typeof e,T=e=>null!==e&&"object"===typeof e,I=e=>(T(e)||w(e))&&w(e.then)&&w(e.catch),E=Object.prototype.toString,S=e=>E.call(e),C=e=>S(e).slice(8,-1),P=e=>"[object Object]"===S(e),k=e=>b(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,O=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),A=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},R=/-(\w)/g,D=A((e=>e.replace(R,((e,t)=>t?t.toUpperCase():"")))),M=/\B([A-Z])/g,x=A((e=>e.replace(M,"-$1").toLowerCase())),N=A((e=>e.charAt(0).toUpperCase()+e.slice(1))),$=A((e=>{const t=e?`on${N(e)}`:"";return t})),L=(e,t)=>!Object.is(e,t),j=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},U=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},F=e=>{const t=parseFloat(e);return isNaN(t)?e:t},V=e=>{const t=b(e)?Number(e):NaN;return isNaN(t)?e:t};let W;const B=()=>W||(W="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",z=r(H);function K(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=b(r)?Z(r):K(r);if(i)for(const e in i)t[e]=i[e]}return t}if(b(e)||T(e))return e}const G=/;(?![^(]*\))/g,q=/:([^]+)/,J=/\/\*[^]*?\*\//g;function Z(e){const t={};return e.replace(J,"").split(G).forEach((e=>{if(e){const n=e.split(q);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function Y(e){let t="";if(b(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=Y(e[n]);r&&(t+=r+" ")}else if(T(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const X="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Q=r(X);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=v(e),r=v(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=_(e),r=_(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=T(e),r=T(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const ie=e=>!(!e||!0!==e["__v_isRef"]),oe=e=>b(e)?e:null==e?"":p(e)||T(e)&&(e.toString===E||!w(e.toString))?ie(e)?oe(e.value):JSON.stringify(e,se,2):String(e),se=(e,t)=>ie(t)?se(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[ae(t,r)+" =>"]=n,e)),{})}:g(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:_(t)?ae(t):!T(t)||p(t)||P(t)?t:String(t),ae=(e,t="")=>{var n;return _(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},461:(e,t,n)=>{n.d(t,{KO:()=>ee,MF:()=>Y,Sx:()=>Q,Wp:()=>X,j6:()=>K,om:()=>z,xZ:()=>G});var r=n(125),i=n(424),o=n(124),s=n(297);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(c(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function c(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const l="@firebase/app",u="0.10.17",d=new i.Vy("@firebase/app"),h="@firebase/app-compat",f="@firebase/analytics-compat",p="@firebase/analytics",m="@firebase/app-check-compat",g="@firebase/app-check",v="@firebase/auth",y="@firebase/auth-compat",w="@firebase/database",b="@firebase/data-connect",_="@firebase/database-compat",T="@firebase/functions",I="@firebase/functions-compat",E="@firebase/installations",S="@firebase/installations-compat",C="@firebase/messaging",P="@firebase/messaging-compat",k="@firebase/performance",O="@firebase/performance-compat",A="@firebase/remote-config",R="@firebase/remote-config-compat",D="@firebase/storage",M="@firebase/storage-compat",x="@firebase/firestore",N="@firebase/vertexai",$="@firebase/firestore-compat",L="firebase",j="11.1.0",U="[DEFAULT]",F={[l]:"fire-core",[h]:"fire-core-compat",[p]:"fire-analytics",[f]:"fire-analytics-compat",[g]:"fire-app-check",[m]:"fire-app-check-compat",[v]:"fire-auth",[y]:"fire-auth-compat",[w]:"fire-rtdb",[b]:"fire-data-connect",[_]:"fire-rtdb-compat",[T]:"fire-fn",[I]:"fire-fn-compat",[E]:"fire-iid",[S]:"fire-iid-compat",[C]:"fire-fcm",[P]:"fire-fcm-compat",[k]:"fire-perf",[O]:"fire-perf-compat",[A]:"fire-rc",[R]:"fire-rc-compat",[D]:"fire-gcs",[M]:"fire-gcs-compat",[x]:"fire-fst",[$]:"fire-fst-compat",[N]:"fire-vertex","fire-js":"fire-js",[L]:"fire-js-all"},V=new Map,W=new Map,B=new Map;function H(e,t){try{e.container.addComponent(t)}catch(n){d.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function z(e){const t=e.name;if(B.has(t))return d.debug(`There were multiple attempts to register component ${t}.`),!1;B.set(t,e);for(const n of V.values())H(n,e);for(const n of W.values())H(n,e);return!0}function K(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function G(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},J=new o.FA("app","Firebase",q);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw J.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Y=j;function X(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:U,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw J.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.T9)()),!n)throw J.create("no-options");const a=V.get(s);if(a){if((0,o.bD)(n,a.options)&&(0,o.bD)(i,a.config))return a;throw J.create("duplicate-app",{appName:s})}const c=new r.h1(s);for(const r of B.values())c.addComponent(r);const l=new Z(n,i,c);return V.set(s,l),l}function Q(e=U){const t=V.get(e);if(!t&&e===U&&(0,o.T9)())return X();if(!t)throw J.create("no-app",{appName:e});return t}function ee(e,t,n){var i;let o=null!==(i=F[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void d.warn(e.join(" "))}z(new r.uA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const te="firebase-heartbeat-database",ne=1,re="firebase-heartbeat-store";let ie=null;function oe(){return ie||(ie=(0,s.P2)(te,ne,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(re)}catch(n){console.warn(n)}}}}).catch((e=>{throw J.create("idb-open",{originalErrorMessage:e.message})}))),ie}async function se(e){try{const t=await oe(),n=t.transaction(re),r=await n.objectStore(re).get(ce(e));return await n.done,r}catch(t){if(t instanceof o.g)d.warn(t.message);else{const e=J.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});d.warn(e.message)}}}async function ae(e,t){try{const n=await oe(),r=n.transaction(re,"readwrite"),i=r.objectStore(re);await i.put(t,ce(e)),await r.done}catch(n){if(n instanceof o.g)d.warn(n.message);else{const e=J.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});d.warn(e.message)}}}function ce(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=1024,ue=2592e6;class de{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=he();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return;return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=ue})),this._storage.overwrite(this._heartbeatsCache)}catch(n){d.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=he(),{heartbeatsToSend:n,unsentEntries:r}=fe(this._heartbeatsCache.heartbeats),i=(0,o.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return d.warn(t),""}}}function he(){const e=new Date;return e.toISOString().substring(0,10)}function fe(e,t=le){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),me(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),me(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.zW)()&&(0,o.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await se(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function me(e){return(0,o.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){z(new r.uA("platform-logger",(e=>new a(e)),"PRIVATE")),z(new r.uA("heartbeat",(e=>new de(e)),"PRIVATE")),ee(l,u,e),ee(l,u,"esm2017"),ee("fire-js","")}ge("")},125:(e,t,n)=>{n.d(t,{h1:()=>l,uA:()=>i});var r=n(124);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},424:(e,t,n)=>{n.d(t,{$b:()=>i,Vy:()=>l});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},922:(e,t,n)=>{n.d(t,{P5:()=>bt});var r=n(461),i=n(424),o=n(124),s=n(125),a=n(297);const c="@firebase/installations",l="0.6.11",u=1e4,d=`w:${l}`,h="FIS_v2",f="https://firebaseinstallations.googleapis.com/v1",p=36e5,m="installations",g="Installations",v={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},y=new o.FA(m,g,v);function w(e){return e instanceof o.g&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b({projectId:e}){return`${f}/projects/${e}/installations`}function _(e){return{token:e.token,requestStatus:2,expiresIn:C(e.expiresIn),creationTime:Date.now()}}async function T(e,t){const n=await t.json(),r=n.error;return y.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function I({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function E(e,{refreshToken:t}){const n=I(e);return n.append("Authorization",P(t)),n}async function S(e){const t=await e();return t.status>=500&&t.status<600?e():t}function C(e){return Number(e.replace("s","000"))}function P(e){return`${h} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=b(e),i=I(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={fid:n,authVersion:h,appId:e.appId,sdkVersion:d},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await S((()=>fetch(r,a)));if(c.ok){const e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:_(e.authToken)};return t}throw await T("Create Installation",c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=/^[cdef][\w-]{21}$/,D="";function M(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=x(e);return R.test(n)?n:D}catch(e){return D}}function x(e){const t=A(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=new Map;function L(e,t){const n=N(e);j(n,t),U(n,t)}function j(e,t){const n=$.get(e);if(n)for(const r of n)r(t)}function U(e,t){const n=V();n&&n.postMessage({key:e,fid:t}),W()}let F=null;function V(){return!F&&"BroadcastChannel"in self&&(F=new BroadcastChannel("[Firebase] FID Change"),F.onmessage=e=>{j(e.data.key,e.data.fid)}),F}function W(){0===$.size&&F&&(F.close(),F=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B="firebase-installations-database",H=1,z="firebase-installations-store";let K=null;function G(){return K||(K=(0,a.P2)(B,H,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(z)}}})),K}async function q(e,t){const n=N(e),r=await G(),i=r.transaction(z,"readwrite"),o=i.objectStore(z),s=await o.get(n);return await o.put(t,n),await i.done,s&&s.fid===t.fid||L(e,t.fid),t}async function J(e){const t=N(e),n=await G(),r=n.transaction(z,"readwrite");await r.objectStore(z).delete(t),await r.done}async function Z(e,t){const n=N(e),r=await G(),i=r.transaction(z,"readwrite"),o=i.objectStore(z),s=await o.get(n),a=t(s);return void 0===a?await o.delete(n):await o.put(a,n),await i.done,!a||s&&s.fid===a.fid||L(e,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e){let t;const n=await Z(e.appConfig,(n=>{const r=X(n),i=Q(e,r);return t=i.registrationPromise,i.installationEntry}));return n.fid===D?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function X(e){const t=e||{fid:M(),registrationStatus:0};return re(t)}function Q(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(y.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ee(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:te(e)}:{installationEntry:t}}async function ee(e,t){try{const n=await k(e,t);return q(e.appConfig,n)}catch(n){throw w(n)&&409===n.customData.serverCode?await J(e.appConfig):await q(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function te(e){let t=await ne(e.appConfig);while(1===t.registrationStatus)await O(100),t=await ne(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Y(e);return n||t}return t}function ne(e){return Z(e,(e=>{if(!e)throw y.create("installation-not-found");return re(e)}))}function re(e){return ie(e)?{fid:e.fid,registrationStatus:0}:e}function ie(e){return 1===e.registrationStatus&&e.registrationTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe({appConfig:e,heartbeatServiceProvider:t},n){const r=se(e,n),i=E(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={installation:{sdkVersion:d,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await S((()=>fetch(r,a)));if(c.ok){const e=await c.json(),t=_(e);return t}throw await T("Generate Auth Token",c)}function se(e,{fid:t}){return`${b(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,t=!1){let n;const r=await Z(e.appConfig,(r=>{if(!de(r))throw y.create("not-registered");const i=r.authToken;if(!t&&he(i))return r;if(1===i.requestStatus)return n=ce(e,t),r;{if(!navigator.onLine)throw y.create("app-offline");const t=pe(r);return n=ue(e,t),t}})),i=n?await n:r.authToken;return i}async function ce(e,t){let n=await le(e.appConfig);while(1===n.authToken.requestStatus)await O(100),n=await le(e.appConfig);const r=n.authToken;return 0===r.requestStatus?ae(e,t):r}function le(e){return Z(e,(e=>{if(!de(e))throw y.create("not-registered");const t=e.authToken;return me(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function ue(e,t){try{const n=await oe(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await q(e.appConfig,r),n}catch(n){if(!w(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await q(e.appConfig,n)}else await J(e.appConfig);throw n}}function de(e){return void 0!==e&&2===e.registrationStatus}function he(e){return 2===e.requestStatus&&!fe(e)}function fe(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+p}function pe(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function me(e){return 1===e.requestStatus&&e.requestTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ge(e){const t=e,{installationEntry:n,registrationPromise:r}=await Y(t);return r?r.catch(console.error):ae(t).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(e,t=!1){const n=e;await ye(n);const r=await ae(n,t);return r.token}async function ye(e){const{registrationPromise:t}=await Y(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function we(e){if(!e||!e.options)throw be("App Configuration");if(!e.name)throw be("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw be(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function be(e){return y.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="installations",Te="installations-internal",Ie=e=>{const t=e.getProvider("app").getImmediate(),n=we(t),i=(0,r.j6)(t,"heartbeat"),o={app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return o},Ee=e=>{const t=e.getProvider("app").getImmediate(),n=(0,r.j6)(t,_e).getImmediate(),i={getId:()=>ge(n),getToken:e=>ve(n,e)};return i};function Se(){(0,r.om)(new s.uA(_e,Ie,"PUBLIC")),(0,r.om)(new s.uA(Te,Ee,"PRIVATE"))}Se(),(0,r.KO)(c,l),(0,r.KO)(c,l,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ce="analytics",Pe="firebase_id",ke="origin",Oe=6e4,Ae="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Re="https://www.googletagmanager.com/gtag/js",De=new i.Vy("@firebase/analytics"),Me={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},xe=new o.FA("analytics","Analytics",Me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ne(e){if(!e.startsWith(Re)){const t=xe.create("invalid-gtag-resource",{gtagURL:e});return De.warn(t.message),""}return e}function $e(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Le(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function je(e,t){const n=Le("firebase-js-sdk-policy",{createScriptURL:Ne}),r=document.createElement("script"),i=`${Re}?l=${e}&id=${t}`;r.src=n?null===n||void 0===n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Ue(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Fe(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const e=await $e(n),r=e.find((e=>e.measurementId===i));r&&await t[r.appId]}}catch(a){De.error(a)}e("config",i,o)}async function Ve(e,t,n,r,i){try{let o=[];if(i&&i["send_to"]){let e=i["send_to"];Array.isArray(e)||(e=[e]);const r=await $e(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){De.error(o)}}function We(e,t,n,r){async function i(i,...o){try{if("event"===i){const[r,i]=o;await Ve(e,t,n,r,i)}else if("config"===i){const[i,s]=o;await Fe(e,t,n,r,i,s)}else if("consent"===i){const[t,n]=o;e("consent",t,n)}else if("get"===i){const[t,n,r]=o;e("get",t,n,r)}else if("set"===i){const[t]=o;e("set",t)}else e(i,...o)}catch(s){De.error(s)}}return i}function Be(e,t,n,r,i){let o=function(...e){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(o=window[i]),window[i]=We(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function He(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Re)&&n.src.includes(e))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=30,Ke=1e3;class Ge{constructor(e={},t=Ke){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const qe=new Ge;function Je(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ze(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Je(r)},o=Ae.replace("{app-id}",n),s=await fetch(o,i);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw xe.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}async function Ye(e,t=qe,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw xe.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw xe.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new tt;return setTimeout((async()=>{a.abort()}),void 0!==n?n:Oe),Xe({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Xe(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=qe){var s;const{appId:a,measurementId:c}=e;try{await Qe(r,t)}catch(l){if(c)return De.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===l||void 0===l?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const t=await Ze(e);return i.deleteThrottleMetadata(a),t}catch(l){const t=l;if(!et(t)){if(i.deleteThrottleMetadata(a),c)return De.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===t||void 0===t?void 0:t.message}]`),{appId:a,measurementId:c};throw l}const u=503===Number(null===(s=null===t||void 0===t?void 0:t.customData)||void 0===s?void 0:s.httpStatus)?(0,o.p9)(n,i.intervalMillis,ze):(0,o.p9)(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(a,d),De.debug(`Calling attemptFetch again in ${u} millis`),Xe(e,d,r,i)}}function Qe(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(o),r(xe.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function et(e){if(!(e instanceof o.g)||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class tt{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nt,rt;async function it(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}function ot(e){rt=e}function st(e){nt=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(){if(!(0,o.zW)())return De.warn(xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,o.eX)()}catch(e){return De.warn(xe.create("indexeddb-unavailable",{errorInfo:null===e||void 0===e?void 0:e.toString()}).message),!1}return!0}async function ct(e,t,n,r,i,o,s){var a;const c=Ye(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&De.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>De.error(e))),t.push(c);const l=at().then((e=>e?r.getId():void 0)),[u,d]=await Promise.all([c,l]);He(o)||je(o,u.measurementId),rt&&(i("consent","default",rt),ot(void 0)),i("js",new Date);const h=null!==(a=null===s||void 0===s?void 0:s.config)&&void 0!==a?a:{};return h[ke]="firebase",h.update=!0,null!=d&&(h[Pe]=d),i("config",u.measurementId,h),nt&&(i("set",nt),st(void 0)),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.app=e}_delete(){return delete ut[this.app.options.appId],Promise.resolve()}}let ut={},dt=[];const ht={};let ft,pt,mt="dataLayer",gt="gtag",vt=!1;function yt(){const e=[];if((0,o.sr)()&&e.push("This is a browser extension environment."),(0,o.dM)()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=xe.create("invalid-analytics-context",{errorInfo:t});De.warn(n.message)}}function wt(e,t,n){yt();const r=e.options.appId;if(!r)throw xe.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw xe.create("no-api-key");De.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=ut[r])throw xe.create("already-exists",{id:r});if(!vt){Ue(mt);const{wrappedGtag:e,gtagCore:t}=Be(ut,dt,ht,mt,gt);pt=e,ft=t,vt=!0}ut[r]=ct(e,dt,ht,t,ft,mt,n);const i=new lt(e);return i}function bt(e=(0,r.Sx)()){e=(0,o.Ku)(e);const t=(0,r.j6)(e,Ce);return t.isInitialized()?t.getImmediate():_t(e)}function _t(e,t={}){const n=(0,r.j6)(e,Ce);if(n.isInitialized()){const e=n.getImmediate();if((0,o.bD)(t,n.getOptions()))return e;throw xe.create("already-initialized")}const i=n.initialize({options:t});return i}function Tt(e,t,n,r){e=(0,o.Ku)(e),it(pt,ut[e.app.options.appId],t,n,r).catch((e=>De.error(e)))}const It="@firebase/analytics",Et="0.10.10";function St(){function e(e){try{const t=e.getProvider(Ce).getImmediate();return{logEvent:(e,n,r)=>Tt(t,e,n,r)}}catch(t){throw xe.create("interop-component-reg-failed",{reason:t})}}(0,r.om)(new s.uA(Ce,((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return wt(n,r,t)}),"PUBLIC")),(0,r.om)(new s.uA("analytics-internal",e,"PRIVATE")),(0,r.KO)(It,Et),(0,r.KO)(It,Et,"esm2017")}St()},223:(e,t,n)=>{n.d(t,{Wp:()=>r.Wp});var r=n(461),i="firebase",o="11.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,o,"app")},268:(e,t,n)=>{n.d(t,{eJ:()=>kt,x9:()=>Ot});var r=n(461),i=n(124),o=n(424);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(125);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new i.FA("auth","Firebase",c()),d=new o.Vy("@firebase/auth");function h(e,...t){d.logLevel<=o.$b.WARN&&d.warn(`Auth (${r.MF}): ${e}`,...t)}function f(e,...t){d.logLevel<=o.$b.ERROR&&d.error(`Auth (${r.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw y(e,...t)}function m(e,...t){return y(e,...t)}function g(e,t,n){const r=Object.assign(Object.assign({},l()),{[t]:n}),o=new i.FA("auth","Firebase",r);return o.create(t,{appName:e.name})}function v(e){return g(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function w(e,t,...n){if(!e)throw y(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function _(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return E()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},A=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function D(e,t,n,r,o={}){return M(e,o,(async()=>{let o={},s={};r&&("GET"===t?s=r:o={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:c},o);return(0,i.c1)()||(l.referrerPolicy="no-referrer"),k.fetch()(N(e,e.config.apiHost,n,a),l)}))}async function M(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},O),t);try{const t=new L(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw j(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw j(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw g(e,a,s);p(e,a)}}catch(o){if(o instanceof i.g)throw o;p(e,"network-request-failed",{message:String(o)})}}async function x(e,t,n,r,i={}){const o=await D(e,t,n,r,i);return"mfaPendingCredential"in o&&p(e,"multi-factor-auth-required",{_serverResponse:o}),o}function N(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?P(e.config,i):`${e.config.apiScheme}://${i}`}function $(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class L{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),A.get())}))}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){return void 0!==e&&void 0!==e.enterprise}class F{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t){return D(e,"GET","/v2/recaptchaConfig",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t){return D(e,"POST","/v1/accounts:delete",t)}async function B(e,t){return D(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),o=G(r);w(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:r,authTime:H(K(o.auth_time)),issuedAtTime:H(K(o.iat)),expirationTime:H(K(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function K(e){return 1e3*Number(e)}function G(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(o){return f("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function q(e){const t=G(e);return w(t,"internal-error"),w("undefined"!==typeof t.exp,"internal-error"),w("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&Z(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Z({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),i=await J(e,B(n,{idToken:r}));w(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?ne(o.providerUserInfo):[],a=te(e.providerData,s),c=e.isAnonymous,l=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new X(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function ee(e){const t=(0,i.Ku)(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function te(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ne(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e,t){const n=await M(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:o}=e.config,s=N(e,r,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",k.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ie(e,t){return D(e,"POST","/v2/accounts:revokeToken",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w("undefined"!==typeof e.idToken,"internal-error"),w("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):q(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){w(0!==e.length,"internal-error");const t=q(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await re(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new oe;return n&&(w("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(w("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(w("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oe,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t){w("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ae{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return ee(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ae(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(v(this.auth));const e=await this.getIdToken();return await J(this,W(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:T,stsTokenManager:I}=t;w(y&&I,e,"internal-error");const E=oe.fromJSON(this.name,I);w("string"===typeof y,e,"internal-error"),se(u,e.name),se(d,e.name),w("boolean"===typeof b,e,"internal-error"),w("boolean"===typeof _,e,"internal-error"),se(h,e.name),se(f,e.name),se(p,e.name),se(m,e.name),se(g,e.name),se(v,e.name);const S=new ae({uid:y,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:v});return T&&Array.isArray(T)&&(S.providerData=T.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new oe;r.updateFromServerResponse(t);const i=new ae({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];w(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?ne(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),s=new oe;s.updateFromIdToken(n);const a=new ae({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new X(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new Map;function le(e){_(e instanceof Function,"Expected a class definition");let t=ce.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ce.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ue.type="NONE";const de=ue;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e,t,n){return`firebase:${e}:${t}:${n}`}class fe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=he(this.userKey,r.apiKey,i),this.fullPersistenceKey=he("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ae._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new fe(le(de),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||le(de);const o=he(n,e.config.apiKey,e.name);let s=null;for(const l of t)try{const t=await l._get(o);if(t){const n=ae._fromJSON(e,t);l!==i&&(s=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new fe(i,e,n)):new fe(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ye(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(be(t))return"Blackberry";if(_e(t))return"Webos";if(ge(t))return"Safari";if((t.includes("chrome/")||ve(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function me(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function ge(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ve(e=(0,i.ZQ)()){return/crios\//i.test(e)}function ye(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function we(e=(0,i.ZQ)()){return/android/i.test(e)}function be(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function _e(e=(0,i.ZQ)()){return/webos/i.test(e)}function Te(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ie(){return(0,i.lT)()&&10===document.documentMode}function Ee(e=(0,i.ZQ)()){return Te(e)||we(e)||_e(e)||be(e)||/windows phone/i.test(e)||ye(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,t=[]){let n;switch(e){case"Browser":n=pe((0,i.ZQ)());break;case"Worker":n=`${pe((0,i.ZQ)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t={}){return D(e,"GET","/v2/passwordPolicy",R(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=6;class Oe{constructor(e){var t,n,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:ke,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,o,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(o=a.containsNumericCharacter)||void 0===o||o),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new De(this),this.idTokenSubscription=new De(this),this.beforeStateQueue=new Ce(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=le(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await fe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await B(this,{idToken:e}),n=await ae._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==r||!(null===s||void 0===s?void 0:s.user)||(i=s.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(v(this));const t=e?(0,i.Ku)(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(v(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(v(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(le(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Pe(this),t=new Oe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await ie(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&le(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await fe.create(this,[le(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(s,this,"internal-error"),s.then((()=>{o||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{o=!0,i()}}{const n=e.addObserver(t);return()=>{o=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Se(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&h(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Re(e){return(0,i.Ku)(e)}class De{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Me={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xe(e){Me=e}function Ne(e){return Me.loadJS(e)}function $e(){return Me.recaptchaEnterpriseScript}function Le(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(){this.enterprise=new Ue}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ue{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Fe="recaptcha-enterprise",Ve="NO_RECAPTCHA";class We{constructor(e){this.type=Fe,this.auth=Re(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{V(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new F(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;U(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Ve)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const e=new je;return e.execute("siteKey",{action:"verify"})}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&U(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=$e();0!==t.length&&(t+=n),Ne(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Be(e,t,n,r=!1,i=!1){const o=new We(e);let s;if(i)s=Ve;else try{s=await o.verify(n)}catch(c){s=await o.verify(n,!0)}const a=Object.assign({},t);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function He(e,t,n,r,i){var o,s;if("EMAIL_PASSWORD_PROVIDER"===i){if(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Be(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Be(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}if("PHONE_PROVIDER"===i){if(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("PHONE_PROVIDER")){const i=await Be(e,t,n);return r(e,i).catch((async i=>{var o;if("AUDIT"===(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await Be(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)}))}{const i=await Be(e,t,n,!1,!0);return r(e,i)}}return Promise.reject(i+" provider is not supported.")}async function ze(e){const t=Re(e),n=await V(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new F(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){const e=new We(t);e.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(le);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(e,t){return D(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Je(e,t){return x(e,"POST","/v1/accounts:signInWithPassword",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ze(e,t){return x(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}async function Ye(e,t){return x(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Ge{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Xe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Xe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return He(e,t,"signInWithPassword",Je,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Ze(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return He(e,n,"signUpPassword",qe,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Ye(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t){return x(e,"POST","/v1/accounts:signInWithIdp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="http://localhost";class tt extends Ge{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new tt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Qe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Qe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qe(e,t)}buildRequest(){const e={requestUri:et,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return D(e,"POST","/v1/accounts:sendVerificationCode",R(e,t))}async function rt(e,t){return x(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t))}async function it(e,t){const n=await x(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const ot={["USER_NOT_FOUND"]:"user-not-found"};async function st(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return x(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,n),ot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Ge{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new at({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new at({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return rt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return it(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return st(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new at({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lt(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],o=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return o||r||n||t||e}class ut{constructor(e){var t,n,r,o,s,a;const c=(0,i.I9)((0,i.hp)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=ct(null!==(r=c["mode"])&&void 0!==r?r:null);w(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=lt(e);try{return new ut(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(){this.providerId=dt.PROVIDER_ID}static credential(e,t){return Xe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ut.parseLink(t);return w(n,"argument-error"),Xe._fromEmailAndCode(e,n.code,n.tenantId)}}dt.PROVIDER_ID="password",dt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",dt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends ht{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt extends ft{constructor(){super("facebook.com")}static credential(e){return tt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch(t){return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com",pt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return mt.credential(t,n)}catch(r){return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com",mt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends ft{constructor(){super("github.com")}static credential(e){return tt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch(t){return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com",gt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends ft{constructor(){super("twitter.com")}static credential(e,t){return tt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return vt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yt(e,t){return x(e,"POST","/v1/accounts:signUp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.TWITTER_SIGN_IN_METHOD="twitter.com",vt.PROVIDER_ID="twitter.com";class wt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ae._fromIdTokenResponse(e,n,r),o=bt(n),s=new wt({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=bt(n);return new wt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function bt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t extends i.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,_t.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new _t(e,t,n,r)}}function Tt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw _t._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(e,t,n=!1){const r=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return wt._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Et(e,t,n=!1){const{auth:i}=e;if((0,r.xZ)(i.app))return Promise.reject(v(i));const o="reauthenticate";try{const r=await J(e,Tt(i,o,t,e),n);w(r.idToken,i,"internal-error");const s=G(r.idToken);w(s,i,"internal-error");const{sub:a}=s;return w(e.uid===a,i,"user-mismatch"),wt._forOperation(e,o,r)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i="signIn",o=await Tt(e,i,t),s=await wt._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(s.user),s}async function Ct(e,t){return St(Re(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pt(e){const t=Re(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function kt(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i=Re(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},s=He(i,o,"signUpPassword",yt,"EMAIL_PASSWORD_PROVIDER"),a=await s.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Pt(e),t})),c=await wt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Ot(e,t,n){return(0,r.xZ)(e.app)?Promise.reject(v(e)):Ct((0,i.Ku)(e),dt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Pt(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function At(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function Rt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}function Dt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function Mt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}new WeakMap;const xt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xt,"1"),this.storage.removeItem(xt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=1e3,Lt=10;class jt extends Nt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ee(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ie()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Lt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),$t)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jt.type="LOCAL";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut extends Nt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ut.type="SESSION";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ft(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Vt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await Ft(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.receivers=[];class Bt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=Wt("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(){return"undefined"!==typeof Ht()["WorkerGlobalScope"]&&"function"===typeof Ht()["importScripts"]}async function Kt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Gt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function qt(){return zt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="firebaseLocalStorageDb",Zt=1,Yt="firebaseLocalStorage",Xt="fbase_key";class Qt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function en(e,t){return e.transaction([Yt],t?"readwrite":"readonly").objectStore(Yt)}function tn(){const e=indexedDB.deleteDatabase(Jt);return new Qt(e).toPromise()}function nn(){const e=indexedDB.open(Jt,Zt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Yt,{keyPath:Xt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Yt)?t(n):(n.close(),await tn(),t(await nn()))}))}))}async function rn(e,t,n){const r=en(e,!0).put({[Xt]:t,value:n});return new Qt(r).toPromise()}async function on(e,t){const n=en(e,!1).get(t),r=await new Qt(n).toPromise();return void 0===r?null:r.value}function sn(e,t){const n=en(e,!0).delete(t);return new Qt(n).toPromise()}const an=800,cn=3;class ln{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await nn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>cn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vt._getInstance(qt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Kt(),!this.activeServiceWorker)return;this.sender=new Bt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Gt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nn();return await rn(e,xt,"1"),await sn(e,xt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>rn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>on(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>sn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=en(e,!1).getAll();return new Qt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),an)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ln.type="LOCAL";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function un(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:start",R(e,t))}function dn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}function hn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fn="recaptcha";async function pn(e,t,n){var r;if(!e._getRecaptchaConfig())try{await ze(e)}catch(i){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){w("enroll"===t.type,e,"internal-error");const r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},o=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===Ve){w((null===n||void 0===n?void 0:n.type)===fn,e,"argument-error");const r=await mn(e,t,n);return At(e,r)}return At(e,t)},s=He(e,r,"mfaSmsEnrollment",o,"PHONE_PROVIDER"),a=await s.catch((e=>Promise.reject(e)));return a.phoneSessionInfo.sessionInfo}{w("signin"===t.type,e,"internal-error");const o=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;w(o,e,"missing-multi-factor-info");const s={mfaPendingCredential:t.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},a=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===Ve){w((null===n||void 0===n?void 0:n.type)===fn,e,"argument-error");const r=await mn(e,t,n);return un(e,r)}return un(e,t)},c=He(e,s,"mfaSmsSignIn",a,"PHONE_PROVIDER"),l=await c.catch((e=>Promise.reject(e)));return l.phoneResponseInfo.sessionInfo}}{const t={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"},r=async(e,t)=>{if(t.captchaResponse===Ve){w((null===n||void 0===n?void 0:n.type)===fn,e,"argument-error");const r=await mn(e,t,n);return nt(e,r)}return nt(e,t)},o=He(e,t,"sendVerificationCode",r,"PHONE_PROVIDER"),s=await o.catch((e=>Promise.reject(e)));return s.sessionInfo}}finally{null===n||void 0===n||n._reset()}}async function mn(e,t,n){w(n.type===fn,e,"argument-error");const r=await n.verify();w("string"===typeof r,e,"argument-error");const i=Object.assign({},t);if("phoneEnrollmentInfo"in i){const e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,o=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:o}}),i}if("phoneSignInInfo"in i){const e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.providerId=gn.PROVIDER_ID,this.auth=Re(e)}verifyPhoneNumber(e,t){return pn(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return at._fromVerification(e,t)}static credentialFromResult(e){const t=e;return gn.credentialFromTaggedObject(t)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?at._fromTokenResponse(t,n):null}}gn.PROVIDER_ID="phone",gn.PHONE_SIGN_IN_METHOD="phone";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn extends Ge{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yn(e){return St(e.auth,new vn(e),e.bypassAuthState)}function wn(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Et(n,new vn(e),e.bypassAuthState)}async function bn(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),It(n,new vn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yn;case"linkViaPopup":case"linkViaRedirect":return bn;case"reauthViaPopup":case"reauthViaRedirect":return wn;default:p(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new C(2e3,1e4);class In extends _n{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=Wt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Tn.get())};e()}}In.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Map;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new C(5e3,15e3),new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
encodeURIComponent("fac");class En{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class Sn extends En{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Sn(e)}_finalizeEnroll(e,t,n){return Rt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return dn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Cn{constructor(){}static assertion(e){return Sn._fromCredential(e)}}Cn.FACTOR_ID="phone";class Pn{static assertionForEnrollment(e,t){return kn._fromSecret(e,t)}static assertionForSignIn(e,t){return kn._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;w("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Dt(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return On._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Pn.FACTOR_ID="totp";class kn extends En{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new kn(t,void 0,e)}static _fromEnrollmentId(e,t){return new kn(t,e)}async _finalizeEnroll(e,t,n){return w("undefined"!==typeof this.secret,e,"argument-error"),Mt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){w(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return hn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class On{constructor(e,t,n,r,i,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new On(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(An(e)||An(t))&&(r=!0),r&&(An(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),An(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function An(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Rn="@firebase/auth",Dn="1.8.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nn(e){(0,r.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;w(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Se(e)},l=new Ae(r,i,o,c);return Ke(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(e=>{const t=Re(e.getProvider("auth").getImmediate());return(e=>new Mn(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Rn,Dn,xn(e)),(0,r.KO)(Rn,Dn,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=300;(0,i.XA)("authIdTokenMaxAge");function Ln(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}xe({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Ln().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Nn("Browser")},297:(e,t,n)=>{n.d(t,{P2:()=>_});const r=(e,t)=>t.some((t=>e instanceof t));let i,o;function s(){return i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c=new WeakMap,l=new WeakMap,u=new WeakMap,d=new WeakMap,h=new WeakMap;function f(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(w(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&c.set(t,e)})).catch((()=>{})),h.set(t,e),t}function p(e){if(l.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));l.set(e,t)}let m={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||u.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function g(e){m=e(m)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?a().includes(e)?function(...t){return e.apply(b(this),t),w(c.get(this))}:function(...t){return w(e.apply(b(this),t))}:function(t,...n){const r=e.call(b(this),t,...n);return u.set(r,t.sort?t.sort():[t]),w(r)}}function y(e){return"function"===typeof e?v(e):(e instanceof IDBTransaction&&p(e),r(e,s())?new Proxy(e,m):e)}function w(e){if(e instanceof IDBRequest)return f(e);if(d.has(e))return d.get(e);const t=y(e);return t!==e&&(d.set(e,t),h.set(t,e)),t}const b=e=>h.get(e);function _(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=w(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(w(s.result),e.oldVersion,e.newVersion,w(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const T=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],E=new Map;function S(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(E.get(t))return E.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!T.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return E.set(t,o),o}g((e=>({...e,get:(t,n,r)=>S(t,n)||e.get(t,n,r),has:(t,n)=>!!S(t,n)||e.has(t,n)})))},995:(e,t,n)=>{n.d(t,{tR:()=>wt});var r=n(641),i=n(953),o=n(33),s=n(751),a=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},c=(e,t,n)=>(a(e,t,"read from private field"),n?n.call(e):t.get(e)),l=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},u=(e,t,n,r)=>(a(e,t,"write to private field"),t.set(e,n),n);const d=[["aztec","Aztec"],["code_128","Code128"],["code_39","Code39"],["code_93","Code93"],["codabar","Codabar"],["databar","DataBar"],["databar_expanded","DataBarExpanded"],["data_matrix","DataMatrix"],["dx_film_edge","DXFilmEdge"],["ean_13","EAN-13"],["ean_8","EAN-8"],["itf","ITF"],["maxi_code","MaxiCode"],["micro_qr_code","MicroQRCode"],["pdf417","PDF417"],["qr_code","QRCode"],["rm_qr_code","rMQRCode"],["upc_a","UPC-A"],["upc_e","UPC-E"],["linear_codes","Linear-Codes"],["matrix_codes","Matrix-Codes"]],h=[...d,["unknown"]].map((e=>e[0])),f=new Map(d);function p(e){for(const[t,n]of f)if(e===n)return t;return"unknown"}function m(e){if(g(e))return{width:e.naturalWidth,height:e.naturalHeight};if(v(e))return{width:e.width.baseVal.value,height:e.height.baseVal.value};if(y(e))return{width:e.videoWidth,height:e.videoHeight};if(b(e))return{width:e.width,height:e.height};if(T(e))return{width:e.displayWidth,height:e.displayHeight};if(w(e))return{width:e.width,height:e.height};if(_(e))return{width:e.width,height:e.height};throw new TypeError("The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.")}function g(e){try{return e instanceof HTMLImageElement}catch(t){return!1}}function v(e){try{return e instanceof SVGImageElement}catch(t){return!1}}function y(e){try{return e instanceof HTMLVideoElement}catch(t){return!1}}function w(e){try{return e instanceof HTMLCanvasElement}catch(t){return!1}}function b(e){try{return e instanceof ImageBitmap}catch(t){return!1}}function _(e){try{return e instanceof OffscreenCanvas}catch(t){return!1}}function T(e){try{return e instanceof VideoFrame}catch(t){return!1}}function I(e){try{return e instanceof Blob}catch(t){return!1}}function E(e){try{return e instanceof ImageData}catch(t){return!1}}function S(e,t){try{const n=new OffscreenCanvas(e,t);if(n.getContext("2d")instanceof OffscreenCanvasRenderingContext2D)return n;throw void 0}catch(n){const r=document.createElement("canvas");return r.width=e,r.height=t,r}}async function C(e){if(g(e)&&!await A(e))throw new DOMException("Failed to load or decode HTMLImageElement.","InvalidStateError");if(v(e)&&!await R(e))throw new DOMException("Failed to load or decode SVGImageElement.","InvalidStateError");if(T(e)&&D(e))throw new DOMException("VideoFrame is closed.","InvalidStateError");if(y(e)&&(0===e.readyState||1===e.readyState))throw new DOMException("Invalid element or state.","InvalidStateError");if(b(e)&&x(e))throw new DOMException("The image source is detached.","InvalidStateError");const{width:t,height:n}=m(e);if(0===t||0===n)return null;const r=S(t,n).getContext("2d");r.drawImage(e,0,0);try{return r.getImageData(0,0,t,n)}catch(i){throw new DOMException("Source would taint origin.","SecurityError")}}async function P(e){let t;try{if(globalThis.createImageBitmap)t=await createImageBitmap(e);else{if(!globalThis.Image)return e;{t=new Image;let n="";try{n=URL.createObjectURL(e),t.src=n,await t.decode()}finally{URL.revokeObjectURL(n)}}}}catch(n){throw new DOMException("Failed to load or decode Blob.","InvalidStateError")}return await C(t)}function k(e){const{width:t,height:n}=e;if(0===t||0===n)return null;const r=e.getContext("2d");try{return r.getImageData(0,0,t,n)}catch(i){throw new DOMException("Source would taint origin.","SecurityError")}}async function O(e){if(I(e))return await P(e);if(E(e)){if(M(e))throw new DOMException("The image data has been detached.","InvalidStateError");return e}return w(e)||_(e)?k(e):await C(e)}async function A(e){try{return await e.decode(),!0}catch(t){return!1}}async function R(e){var t;try{return await(null==(t=e.decode)?void 0:t.call(e)),!0}catch(n){return!1}}function D(e){return null===e.format}function M(e){return 0===e.data.buffer.byteLength}function x(e){return 0===e.width&&0===e.height}function N(e,t){return e instanceof DOMException?new DOMException(`${t}: ${e.message}`,e.name):e instanceof Error?new e.constructor(`${t}: ${e.message}`):new Error(`${t}: ${e}`)}const $=["Aztec","Codabar","Code128","Code39","Code93","DataBar","DataBarExpanded","DataMatrix","DXFilmEdge","EAN-13","EAN-8","ITF","Linear-Codes","Matrix-Codes","MaxiCode","MicroQRCode","None","PDF417","QRCode","rMQRCode","UPC-A","UPC-E"];function L(e){return e.join("|")}function j(e){const t=U(e);let n=0,r=$.length-1;for(;n<=r;){const e=Math.floor((n+r)/2),i=$[e],o=U(i);if(o===t)return i;o<t?n=e+1:r=e-1}return"None"}function U(e){return e.toLowerCase().replace(/_-\[\]/g,"")}function F(e,t){return e.Binarizer[t]}function V(e,t){return e.CharacterSet[t]}const W=["Text","Binary","Mixed","GS1","ISO15434","UnknownECI"];function B(e){return W[e.value]}function H(e,t){return e.EanAddOnSymbol[t]}function z(e,t){return e.TextMode[t]}const K={formats:[],tryHarder:!0,tryRotate:!0,tryInvert:!0,tryDownscale:!0,binarizer:"LocalAverage",isPure:!1,downscaleFactor:3,downscaleThreshold:500,minLineCount:2,maxNumberOfSymbols:255,tryCode39ExtendedMode:!1,validateCode39CheckSum:!1,validateITFCheckSum:!1,returnCodabarStartEnd:!1,returnErrors:!1,eanAddOnSymbol:"Read",textMode:"Plain",characterSet:"Unknown"};function G(e,t){return{...t,formats:L(t.formats),binarizer:F(e,t.binarizer),eanAddOnSymbol:H(e,t.eanAddOnSymbol),textMode:z(e,t.textMode),characterSet:V(e,t.characterSet)}}function q(e){return{...e,format:j(e.format),eccLevel:e.eccLevel,contentType:B(e.contentType)}}const J={locateFile:(e,t)=>{const n=e.match(/_(.+?)\.wasm$/);return n?`https://fastly.jsdelivr.net/npm/zxing-wasm@1.1.3/dist/${n[1]}/${e}`:t+e}};let Z=new WeakMap;function Y(e,t){var n;const r=Z.get(e);if(null!=r&&r.modulePromise&&void 0===t)return r.modulePromise;const i=null!=(n=null==r?void 0:r.moduleOverrides)?n:J,o=e({...i});return Z.set(e,{moduleOverrides:i,modulePromise:o}),o}async function X(e,t,n=K){const r={...K,...n},i=await Y(e),{size:o}=t,s=new Uint8Array(await t.arrayBuffer()),a=i._malloc(o);i.HEAPU8.set(s,a);const c=i.readBarcodesFromImage(a,o,G(i,r));i._free(a);const l=[];for(let u=0;u<c.size();++u)l.push(q(c.get(u)));return l}async function Q(e,t,n=K){const r={...K,...n},i=await Y(e),{data:o,width:s,height:a,data:{byteLength:c}}=t,l=i._malloc(c);i.HEAPU8.set(o,l);const u=i.readBarcodesFromPixmap(l,s,a,G(i,r));i._free(l);const d=[];for(let h=0;h<u.size();++h)d.push(q(u.get(h)));return d}K.formats;var ee,te=(()=>{var e=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return function(t={}){var n,r,i=t;i.ready=new Promise(((e,t)=>{n=e,r=t}));var o=Object.assign({},i),s="./this.program",a="object"==typeof window,c="function"==typeof importScripts;"object"==typeof process&&"object"==typeof process.versions&&process.versions.node;var l,u="";function d(e){return i.locateFile?i.locateFile(e,u):u+e}(a||c)&&(c?u=self.location.href:typeof document<"u"&&document.currentScript&&(u=document.currentScript.src),e&&(u=e),u=0!==u.indexOf("blob:")?u.substr(0,u.replace(/[?#].*/,"").lastIndexOf("/")+1):"",c&&(l=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)})),i.print||console.log.bind(console);var h,f=i.printErr||console.error.bind(console);Object.assign(i,o),o=null,i.arguments&&i.arguments,i.thisProgram&&(s=i.thisProgram),i.quit&&i.quit,i.wasmBinary&&(h=i.wasmBinary),"object"!=typeof WebAssembly&&j("no native wasm support detected");var p,m,g,v,y,w,b,_,T,I=!1;function E(){var e=p.buffer;i.HEAP8=m=new Int8Array(e),i.HEAP16=v=new Int16Array(e),i.HEAPU8=g=new Uint8Array(e),i.HEAPU16=y=new Uint16Array(e),i.HEAP32=w=new Int32Array(e),i.HEAPU32=b=new Uint32Array(e),i.HEAPF32=_=new Float32Array(e),i.HEAPF64=T=new Float64Array(e)}var S=[],C=[],P=[];function k(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)R(i.preRun.shift());G(S)}function O(){G(C)}function A(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)M(i.postRun.shift());G(P)}function R(e){S.unshift(e)}function D(e){C.unshift(e)}function M(e){P.unshift(e)}var x=0,N=null;function $(e){var t;x++,null===(t=i.monitorRunDependencies)||void 0===t||t.call(i,x)}function L(e){var t;if(x--,null===(t=i.monitorRunDependencies)||void 0===t||t.call(i,x),0==x&&N){var n=N;N=null,n()}}function j(e){var t;null===(t=i.onAbort)||void 0===t||t.call(i,e),e="Aborted("+e+")",f(e),I=!0,e+=". Build with -sASSERTIONS for more info.";var n=new WebAssembly.RuntimeError(e);throw r(n),n}var U,F="data:application/octet-stream;base64,",V=e=>e.startsWith(F);function W(e){if(e==U&&h)return new Uint8Array(h);if(l)return l(e);throw"both async and sync fetching of the wasm failed"}function B(e){return h||!a&&!c||"function"!=typeof fetch?Promise.resolve().then((()=>W(e))):fetch(e,{credentials:"same-origin"}).then((t=>{if(!t.ok)throw"failed to load wasm binary file at '"+e+"'";return t.arrayBuffer()})).catch((()=>W(e)))}function H(e,t,n){return B(e).then((e=>WebAssembly.instantiate(e,t))).then((e=>e)).then(n,(e=>{f(`failed to asynchronously prepare wasm: ${e}`),j(e)}))}function z(e,t,n,r){return e||"function"!=typeof WebAssembly.instantiateStreaming||V(t)||"function"!=typeof fetch?H(t,n,r):fetch(t,{credentials:"same-origin"}).then((e=>{var i=WebAssembly.instantiateStreaming(e,n);return i.then(r,(function(e){return f(`wasm streaming compile failed: ${e}`),f("falling back to ArrayBuffer instantiation"),H(t,n,r)}))}))}function K(){var e={a:Jn};function t(e,t){return Zn=e.exports,p=Zn.ia,E(),dt=Zn.ma,D(Zn.ja),L(),Zn}function n(e){t(e.instance)}if($(),i.instantiateWasm)try{return i.instantiateWasm(e,t)}catch(o){f(`Module.instantiateWasm callback failed with error: ${o}`),r(o)}return z(h,U,e,n).catch(r),{}}U="zxing_reader.wasm",V(U)||(U=d(U));var G=e=>{for(;e.length>0;)e.shift()(i)};i.noExitRuntime;var q=[],J=0,Z=e=>{var t=new Q(e);return t.get_caught()||(t.set_caught(!0),J--),t.set_rethrown(!1),q.push(t),or(t.excPtr),t.get_exception_ptr()},Y=0,X=()=>{er(0,0);var e=q.pop();ir(e.excPtr),Y=0};function Q(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(e){b[this.ptr+4>>2]=e},this.get_type=function(){return b[this.ptr+4>>2]},this.set_destructor=function(e){b[this.ptr+8>>2]=e},this.get_destructor=function(){return b[this.ptr+8>>2]},this.set_caught=function(e){e=e?1:0,m[this.ptr+12|0]=e},this.get_caught=function(){return 0!=m[this.ptr+12|0]},this.set_rethrown=function(e){e=e?1:0,m[this.ptr+13|0]=e},this.get_rethrown=function(){return 0!=m[this.ptr+13|0]},this.init=function(e,t){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(t)},this.set_adjusted_ptr=function(e){b[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return b[this.ptr+16>>2]},this.get_exception_ptr=function(){var e=ar(this.get_type());if(e)return b[this.excPtr>>2];var t=this.get_adjusted_ptr();return 0!==t?t:this.excPtr}}var ee=e=>{throw Y||(Y=e),Y},te=e=>{var t=Y;if(!t)return tr(0),0;var n=new Q(t);n.set_adjusted_ptr(t);var r=n.get_type();if(!r)return tr(0),t;for(var i in e){var o=e[i];if(0===o||o===r)break;var s=n.ptr+16;if(sr(o,r,s))return tr(o),t}return tr(r),t},ne=()=>te([]),re=e=>te([e]),ie=(e,t)=>te([e,t]),oe=()=>{var e=q.pop();e||j("no exception to throw");var t=e.excPtr;throw e.get_rethrown()||(q.push(e),e.set_rethrown(!0),e.set_caught(!1),J++),Y=t,Y},se=(e,t,n)=>{var r=new Q(e);throw r.init(t,n),Y=e,J++,Y},ae=()=>J,ce={},le=e=>{for(;e.length;){var t=e.pop(),n=e.pop();n(t)}};function ue(e){return this.fromWireType(w[e>>2])}var de,he,fe,pe={},me={},ge={},ve=e=>{throw new de(e)},ye=(e,t,n)=>{function r(t){var r=n(t);r.length!==e.length&&ve("Mismatched type converter count");for(var i=0;i<e.length;++i)Se(e[i],r[i])}e.forEach((function(e){ge[e]=t}));var i=new Array(t.length),o=[],s=0;t.forEach(((e,t)=>{me.hasOwnProperty(e)?i[t]=me[e]:(o.push(e),pe.hasOwnProperty(e)||(pe[e]=[]),pe[e].push((()=>{i[t]=me[e],++s,s===o.length&&r(i)})))})),0===o.length&&r(i)},we=e=>{var t=ce[e];delete ce[e];var n=t.rawConstructor,r=t.rawDestructor,i=t.fields,o=i.map((e=>e.getterReturnType)).concat(i.map((e=>e.setterArgumentType)));ye([e],o,(e=>{var o={};return i.forEach(((t,n)=>{var r=t.fieldName,s=e[n],a=t.getter,c=t.getterContext,l=e[n+i.length],u=t.setter,d=t.setterContext;o[r]={read:e=>s.fromWireType(a(c,e)),write:(e,t)=>{var n=[];u(d,e,l.toWireType(n,t)),le(n)}}})),[{name:t.name,fromWireType:e=>{var t={};for(var n in o)t[n]=o[n].read(e);return r(e),t},toWireType:(e,t)=>{for(var i in o)if(!(i in t))throw new TypeError(`Missing field: "${i}"`);var s=n();for(i in o)o[i].write(s,t[i]);return null!==e&&e.push(r,s),s},argPackAdvance:Pe,readValueFromPointer:ue,destructorFunction:r}]}))},be=(e,t,n,r,i)=>{},_e=()=>{for(var e=new Array(256),t=0;t<256;++t)e[t]=String.fromCharCode(t);he=e},Te=e=>{for(var t="",n=e;g[n];)t+=he[g[n++]];return t},Ie=e=>{throw new fe(e)};function Ee(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var r=t.name;if(e||Ie(`type "${r}" must have a positive integer typeid pointer`),me.hasOwnProperty(e)){if(n.ignoreDuplicateRegistrations)return;Ie(`Cannot register type '${r}' twice`)}if(me[e]=t,delete ge[e],pe.hasOwnProperty(e)){var i=pe[e];delete pe[e],i.forEach((e=>e()))}}function Se(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Ee(e,t,n)}var Ce,Pe=8,ke=(e,t,n,r)=>{t=Te(t),Se(e,{name:t,fromWireType:function(e){return!!e},toWireType:function(e,t){return t?n:r},argPackAdvance:Pe,readValueFromPointer:function(e){return this.fromWireType(g[e])},destructorFunction:null})},Oe=e=>({count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType}),Ae=e=>{function t(e){return e.$$.ptrType.registeredClass.name}Ie(t(e)+" instance already deleted")},Re=!1,De=e=>{},Me=e=>{e.smartPtr?e.smartPtrType.rawDestructor(e.smartPtr):e.ptrType.registeredClass.rawDestructor(e.ptr)},xe=e=>{e.count.value-=1;var t=0===e.count.value;t&&Me(e)},Ne=(e,t,n)=>{if(t===n)return e;if(void 0===n.baseClass)return null;var r=Ne(e,t,n.baseClass);return null===r?null:n.downcast(r)},$e={},Le=()=>Object.keys(Be).length,je=()=>{var e=[];for(var t in Be)Be.hasOwnProperty(t)&&e.push(Be[t]);return e},Ue=[],Fe=()=>{for(;Ue.length;){var e=Ue.pop();e.$$.deleteScheduled=!1,e.delete()}},Ve=e=>{Ce=e,Ue.length&&Ce&&Ce(Fe)},We=()=>{i.getInheritedInstanceCount=Le,i.getLiveInheritedInstances=je,i.flushPendingDeletes=Fe,i.setDelayFunction=Ve},Be={},He=(e,t)=>{for(void 0===t&&Ie("ptr should not be undefined");e.baseClass;)t=e.upcast(t),e=e.baseClass;return t},ze=(e,t)=>(t=He(e,t),Be[t]),Ke=(e,t)=>{(!t.ptrType||!t.ptr)&&ve("makeClassHandle requires ptr and ptrType");var n=!!t.smartPtrType,r=!!t.smartPtr;return n!==r&&ve("Both smartPtrType and smartPtr must be specified"),t.count={value:1},qe(Object.create(e,{$$:{value:t,writable:!0}}))};function Ge(e){var t=this.getPointee(e);if(!t)return this.destructor(e),null;var n=ze(this.registeredClass,t);if(void 0!==n){if(0===n.$$.count.value)return n.$$.ptr=t,n.$$.smartPtr=e,n.clone();var r=n.clone();return this.destructor(e),r}function i(){return this.isSmartPointer?Ke(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:t,smartPtrType:this,smartPtr:e}):Ke(this.registeredClass.instancePrototype,{ptrType:this,ptr:e})}var o,s=this.registeredClass.getActualType(t),a=$e[s];if(!a)return i.call(this);o=this.isConst?a.constPointerType:a.pointerType;var c=Ne(t,this.registeredClass,o.registeredClass);return null===c?i.call(this):this.isSmartPointer?Ke(o.registeredClass.instancePrototype,{ptrType:o,ptr:c,smartPtrType:this,smartPtr:e}):Ke(o.registeredClass.instancePrototype,{ptrType:o,ptr:c})}var qe=e=>typeof FinalizationRegistry>"u"?(qe=e=>e,e):(Re=new FinalizationRegistry((e=>{xe(e.$$)})),qe=e=>{var t=e.$$,n=!!t.smartPtr;if(n){var r={$$:t};Re.register(e,r,e)}return e},De=e=>Re.unregister(e),qe(e)),Je=()=>{Object.assign(Ze.prototype,{isAliasOf(e){if(!(this instanceof Ze)||!(e instanceof Ze))return!1;var t=this.$$.ptrType.registeredClass,n=this.$$.ptr;e.$$=e.$$;for(var r=e.$$.ptrType.registeredClass,i=e.$$.ptr;t.baseClass;)n=t.upcast(n),t=t.baseClass;for(;r.baseClass;)i=r.upcast(i),r=r.baseClass;return t===r&&n===i},clone(){if(this.$$.ptr||Ae(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=qe(Object.create(Object.getPrototypeOf(this),{$$:{value:Oe(this.$$)}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e},delete(){this.$$.ptr||Ae(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Ie("Object already scheduled for deletion"),De(this),xe(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Ae(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Ie("Object already scheduled for deletion"),Ue.push(this),1===Ue.length&&Ce&&Ce(Fe),this.$$.deleteScheduled=!0,this}})};function Ze(){}var Ye=(e,t)=>Object.defineProperty(t,"name",{value:e}),Xe=(e,t,n)=>{if(void 0===e[t].overloadTable){var r=e[t];e[t]=function(){return e[t].overloadTable.hasOwnProperty(arguments.length)||Ie(`Function '${n}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[t].overloadTable})!`),e[t].overloadTable[arguments.length].apply(this,arguments)},e[t].overloadTable=[],e[t].overloadTable[r.argCount]=r}},Qe=(e,t,n)=>{i.hasOwnProperty(e)?((void 0===n||void 0!==i[e].overloadTable&&void 0!==i[e].overloadTable[n])&&Ie(`Cannot register public name '${e}' twice`),Xe(i,e,e),i.hasOwnProperty(n)&&Ie(`Cannot register multiple overloads of a function with the same number of arguments (${n})!`),i[e].overloadTable[n]=t):(i[e]=t,void 0!==n&&(i[e].numArguments=n))},et=48,tt=57,nt=e=>{if(void 0===e)return"_unknown";e=e.replace(/[^a-zA-Z0-9_]/g,"$");var t=e.charCodeAt(0);return t>=et&&t<=tt?`_${e}`:e};function rt(e,t,n,r,i,o,s,a){this.name=e,this.constructor=t,this.instancePrototype=n,this.rawDestructor=r,this.baseClass=i,this.getActualType=o,this.upcast=s,this.downcast=a,this.pureVirtualFunctions=[]}var it=(e,t,n)=>{for(;t!==n;)t.upcast||Ie(`Expected null or instance of ${n.name}, got an instance of ${t.name}`),e=t.upcast(e),t=t.baseClass;return e};function ot(e,t){if(null===t)return this.isReference&&Ie(`null is not a valid ${this.name}`),0;t.$$||Ie(`Cannot pass "${Wt(t)}" as a ${this.name}`),t.$$.ptr||Ie(`Cannot pass deleted object as a pointer of type ${this.name}`);var n=t.$$.ptrType.registeredClass,r=it(t.$$.ptr,n,this.registeredClass);return r}function st(e,t){var n;if(null===t)return this.isReference&&Ie(`null is not a valid ${this.name}`),this.isSmartPointer?(n=this.rawConstructor(),null!==e&&e.push(this.rawDestructor,n),n):0;(!t||!t.$$)&&Ie(`Cannot pass "${Wt(t)}" as a ${this.name}`),t.$$.ptr||Ie(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&t.$$.ptrType.isConst&&Ie(`Cannot convert argument of type ${t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name} to parameter type ${this.name}`);var r=t.$$.ptrType.registeredClass;if(n=it(t.$$.ptr,r,this.registeredClass),this.isSmartPointer)switch(void 0===t.$$.smartPtr&&Ie("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:t.$$.smartPtrType===this?n=t.$$.smartPtr:Ie(`Cannot convert argument of type ${t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:n=t.$$.smartPtr;break;case 2:if(t.$$.smartPtrType===this)n=t.$$.smartPtr;else{var i=t.clone();n=this.rawShare(n,$t.toHandle((()=>i.delete()))),null!==e&&e.push(this.rawDestructor,n)}break;default:Ie("Unsupporting sharing policy")}return n}function at(e,t){if(null===t)return this.isReference&&Ie(`null is not a valid ${this.name}`),0;t.$$||Ie(`Cannot pass "${Wt(t)}" as a ${this.name}`),t.$$.ptr||Ie(`Cannot pass deleted object as a pointer of type ${this.name}`),t.$$.ptrType.isConst&&Ie(`Cannot convert argument of type ${t.$$.ptrType.name} to parameter type ${this.name}`);var n=t.$$.ptrType.registeredClass,r=it(t.$$.ptr,n,this.registeredClass);return r}function ct(e){return this.fromWireType(b[e>>2])}var lt=()=>{Object.assign(ut.prototype,{getPointee(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e},destructor(e){var t;null===(t=this.rawDestructor)||void 0===t||t.call(this,e)},argPackAdvance:Pe,readValueFromPointer:ct,deleteObject(e){null!==e&&e.delete()},fromWireType:Ge})};function ut(e,t,n,r,i,o,s,a,c,l,u){this.name=e,this.registeredClass=t,this.isReference=n,this.isConst=r,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=s,this.rawGetPointee=a,this.rawConstructor=c,this.rawShare=l,this.rawDestructor=u,i||void 0!==t.baseClass?this.toWireType=st:r?(this.toWireType=ot,this.destructorFunction=null):(this.toWireType=at,this.destructorFunction=null)}var dt,ht,ft=(e,t,n)=>{i.hasOwnProperty(e)||ve("Replacing nonexistant public symbol"),void 0!==i[e].overloadTable&&void 0!==n?i[e].overloadTable[n]=t:(i[e]=t,i[e].argCount=n)},pt=(e,t,n)=>{var r=i["dynCall_"+e];return n&&n.length?r.apply(null,[t].concat(n)):r.call(null,t)},mt=[],gt=e=>{var t=mt[e];return t||(e>=mt.length&&(mt.length=e+1),mt[e]=t=dt.get(e)),t},vt=(e,t,n)=>{if(e.includes("j"))return pt(e,t,n);var r=gt(t).apply(null,n);return r},yt=(e,t)=>{var n=[];return function(){return n.length=0,Object.assign(n,arguments),vt(e,t,n)}},wt=(e,t)=>{function n(){return e.includes("j")?yt(e,t):gt(t)}e=Te(e);var r=n();return"function"!=typeof r&&Ie(`unknown function pointer with signature ${e}: ${t}`),r},bt=(e,t)=>{var n=Ye(t,(function(e){this.name=t,this.message=e;var n=new Error(e).stack;void 0!==n&&(this.stack=this.toString()+"\n"+n.replace(/^Error(:[^\n]*)?\n/,""))}));return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},n},_t=e=>{var t=Qn(e),n=Te(t);return Yn(t),n},Tt=(e,t)=>{var n=[],r={};function i(e){if(!r[e]&&!me[e]){if(ge[e])return void ge[e].forEach(i);n.push(e),r[e]=!0}}throw t.forEach(i),new ht(`${e}: `+n.map(_t).join([", "]))},It=(e,t,n,r,i,o,s,a,c,l,u,d,h)=>{u=Te(u),o=wt(i,o),a&&(a=wt(s,a)),l&&(l=wt(c,l)),h=wt(d,h);var f=nt(u);Qe(f,(function(){Tt(`Cannot construct ${u} due to unbound types`,[r])})),ye([e,t,n],r?[r]:[],(function(t){var n,i;t=t[0],r?(n=t.registeredClass,i=n.instancePrototype):i=Ze.prototype;var s=Ye(u,(function(){if(Object.getPrototypeOf(this)!==c)throw new fe("Use 'new' to construct "+u);if(void 0===m.constructor_body)throw new fe(u+" has no accessible constructor");var e=m.constructor_body[arguments.length];if(void 0===e)throw new fe(`Tried to invoke ctor of ${u} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(m.constructor_body).toString()}) parameters instead!`);return e.apply(this,arguments)})),c=Object.create(i,{constructor:{value:s}});s.prototype=c;var d,p,m=new rt(u,s,c,h,n,o,a,l);m.baseClass&&(null!==(p=(d=m.baseClass).__derivedClasses)&&void 0!==p||(d.__derivedClasses=[]),m.baseClass.__derivedClasses.push(m));var g=new ut(u,m,!0,!1,!1),v=new ut(u+"*",m,!1,!1,!1),y=new ut(u+" const*",m,!1,!0,!1);return $e[e]={pointerType:v,constPointerType:y},ft(f,s),[g,v,y]}))},Et=(e,t)=>{for(var n=[],r=0;r<e;r++)n.push(b[t+4*r>>2]);return n};function St(e){for(var t=1;t<e.length;++t)if(null!==e[t]&&void 0===e[t].destructorFunction)return!0;return!1}function Ct(e,t,n,r,i,o){var s=t.length;s<2&&Ie("argTypes array size mismatch! Must at least get return value and 'this' types!");var a=null!==t[1]&&null!==n,c=St(t),l="void"!==t[0].name,u=s-2,d=new Array(u),h=[],f=[],p=function(){var n;arguments.length!==u&&Ie(`function ${e} called with ${arguments.length} arguments, expected ${u}`),f.length=0,h.length=a?2:1,h[0]=i,a&&(n=t[1].toWireType(f,this),h[1]=n);for(var o=0;o<u;++o)d[o]=t[o+2].toWireType(f,arguments[o]),h.push(d[o]);var s=r.apply(null,h);function p(e){if(c)le(f);else for(var r=a?1:2;r<t.length;r++){var i=1===r?n:d[r-2];null!==t[r].destructorFunction&&t[r].destructorFunction(i)}if(l)return t[0].fromWireType(e)}return p(s)};return Ye(e,p)}var Pt=(e,t,n,r,i,o)=>{var s=Et(t,n);i=wt(r,i),ye([],[e],(function(e){e=e[0];var n=`constructor ${e.name}`;if(void 0===e.registeredClass.constructor_body&&(e.registeredClass.constructor_body=[]),void 0!==e.registeredClass.constructor_body[t-1])throw new fe(`Cannot register multiple constructors with identical number of parameters (${t-1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return e.registeredClass.constructor_body[t-1]=()=>{Tt(`Cannot construct ${e.name} due to unbound types`,s)},ye([],s,(r=>(r.splice(1,0,null),e.registeredClass.constructor_body[t-1]=Ct(n,r,null,i,o),[]))),[]}))},kt=e=>{e=e.trim();const t=e.indexOf("(");return-1!==t?e.substr(0,t):e},Ot=(e,t,n,r,i,o,s,a,c)=>{var l=Et(n,r);t=Te(t),t=kt(t),o=wt(i,o),ye([],[e],(function(e){e=e[0];var r=`${e.name}.${t}`;function i(){Tt(`Cannot call ${r} due to unbound types`,l)}t.startsWith("@@")&&(t=Symbol[t.substring(2)]),a&&e.registeredClass.pureVirtualFunctions.push(t);var c=e.registeredClass.instancePrototype,u=c[t];return void 0===u||void 0===u.overloadTable&&u.className!==e.name&&u.argCount===n-2?(i.argCount=n-2,i.className=e.name,c[t]=i):(Xe(c,t,r),c[t].overloadTable[n-2]=i),ye([],l,(function(i){var a=Ct(r,i,e,o,s);return void 0===c[t].overloadTable?(a.argCount=n-2,c[t]=a):c[t].overloadTable[n-2]=a,[]})),[]}))};function At(){Object.assign(Rt.prototype,{get(e){return this.allocated[e]},has(e){return void 0!==this.allocated[e]},allocate(e){var t=this.freelist.pop()||this.allocated.length;return this.allocated[t]=e,t},free(e){this.allocated[e]=void 0,this.freelist.push(e)}})}function Rt(){this.allocated=[void 0],this.freelist=[]}var Dt=new Rt,Mt=e=>{e>=Dt.reserved&&0===--Dt.get(e).refcount&&Dt.free(e)},xt=()=>{for(var e=0,t=Dt.reserved;t<Dt.allocated.length;++t)void 0!==Dt.allocated[t]&&++e;return e},Nt=()=>{Dt.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),Dt.reserved=Dt.allocated.length,i.count_emval_handles=xt},$t={toValue:e=>(e||Ie("Cannot use deleted val. handle = "+e),Dt.get(e).value),toHandle:e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return Dt.allocate({refcount:1,value:e})}}},Lt=(e,t)=>{t=Te(t),Se(e,{name:t,fromWireType:e=>{var t=$t.toValue(e);return Mt(e),t},toWireType:(e,t)=>$t.toHandle(t),argPackAdvance:Pe,readValueFromPointer:ue,destructorFunction:null})},jt=(e,t,n)=>{switch(t){case 1:return n?function(e){return this.fromWireType(m[e|0])}:function(e){return this.fromWireType(g[e|0])};case 2:return n?function(e){return this.fromWireType(v[e>>1])}:function(e){return this.fromWireType(y[e>>1])};case 4:return n?function(e){return this.fromWireType(w[e>>2])}:function(e){return this.fromWireType(b[e>>2])};default:throw new TypeError(`invalid integer width (${t}): ${e}`)}},Ut=(e,t,n,r)=>{function i(){}t=Te(t),i.values={},Se(e,{name:t,constructor:i,fromWireType:function(e){return this.constructor.values[e]},toWireType:(e,t)=>t.value,argPackAdvance:Pe,readValueFromPointer:jt(t,n,r),destructorFunction:null}),Qe(t,i)},Ft=(e,t)=>{var n=me[e];return void 0===n&&Ie(t+" has unknown type "+_t(e)),n},Vt=(e,t,n)=>{var r=Ft(e,"enum");t=Te(t);var i=r.constructor,o=Object.create(r.constructor.prototype,{value:{value:n},constructor:{value:Ye(`${r.name}_${t}`,(function(){}))}});i.values[n]=o,i[t]=o},Wt=e=>{if(null===e)return"null";var t=typeof e;return"object"===t||"array"===t||"function"===t?e.toString():""+e},Bt=(e,t)=>{switch(t){case 4:return function(e){return this.fromWireType(_[e>>2])};case 8:return function(e){return this.fromWireType(T[e>>3])};default:throw new TypeError(`invalid float width (${t}): ${e}`)}},Ht=(e,t,n)=>{t=Te(t),Se(e,{name:t,fromWireType:e=>e,toWireType:(e,t)=>t,argPackAdvance:Pe,readValueFromPointer:Bt(t,n),destructorFunction:null})},zt=(e,t,n,r,i,o,s)=>{var a=Et(t,n);e=Te(e),e=kt(e),i=wt(r,i),Qe(e,(function(){Tt(`Cannot call ${e} due to unbound types`,a)}),t-1),ye([],a,(function(n){var r=[n[0],null].concat(n.slice(1));return ft(e,Ct(e,r,null,i,o),t-1),[]}))},Kt=(e,t,n)=>{switch(t){case 1:return n?e=>m[e|0]:e=>g[e|0];case 2:return n?e=>v[e>>1]:e=>y[e>>1];case 4:return n?e=>w[e>>2]:e=>b[e>>2];default:throw new TypeError(`invalid integer width (${t}): ${e}`)}},Gt=(e,t,n,r,i)=>{t=Te(t);var o=e=>e;if(0===r){var s=32-8*n;o=e=>e<<s>>>s}var a,c=t.includes("unsigned"),l=(e,t)=>{};a=c?function(e,t){return l(t,this.name),t>>>0}:function(e,t){return l(t,this.name),t},Se(e,{name:t,fromWireType:o,toWireType:a,argPackAdvance:Pe,readValueFromPointer:Kt(t,n,0!==r),destructorFunction:null})},qt=(e,t,n)=>{var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],i=r[t];function o(e){var t=b[e>>2],n=b[e+4>>2];return new i(m.buffer,n,t)}n=Te(n),Se(e,{name:n,fromWireType:o,argPackAdvance:Pe,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},Jt=(e,t,n,r)=>{if(!(r>0))return 0;for(var i=n,o=n+r-1,s=0;s<e.length;++s){var a=e.charCodeAt(s);if(a>=55296&&a<=57343){var c=e.charCodeAt(++s);a=65536+((1023&a)<<10)|1023&c}if(a<=127){if(n>=o)break;t[n++]=a}else if(a<=2047){if(n+1>=o)break;t[n++]=192|a>>6,t[n++]=128|63&a}else if(a<=65535){if(n+2>=o)break;t[n++]=224|a>>12,t[n++]=128|a>>6&63,t[n++]=128|63&a}else{if(n+3>=o)break;t[n++]=240|a>>18,t[n++]=128|a>>12&63,t[n++]=128|a>>6&63,t[n++]=128|63&a}}return t[n]=0,n-i},Zt=(e,t,n)=>Jt(e,g,t,n),Yt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);r<=127?t++:r<=2047?t+=2:r>=55296&&r<=57343?(t+=4,++n):t+=3}return t},Xt=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Qt=(e,t,n)=>{for(var r=t+n,i=t;e[i]&&!(i>=r);)++i;if(i-t>16&&e.buffer&&Xt)return Xt.decode(e.subarray(t,i));for(var o="";t<i;){var s=e[t++];if(128&s){var a=63&e[t++];if(192!=(224&s)){var c=63&e[t++];if(s=224==(240&s)?(15&s)<<12|a<<6|c:(7&s)<<18|a<<12|c<<6|63&e[t++],s<65536)o+=String.fromCharCode(s);else{var l=s-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&s)<<6|a)}else o+=String.fromCharCode(s)}return o},en=(e,t)=>e?Qt(g,e,t):"",tn=(e,t)=>{t=Te(t);var n="std::string"===t;Se(e,{name:t,fromWireType(e){var t,r=b[e>>2],i=e+4;if(n)for(var o=i,s=0;s<=r;++s){var a=i+s;if(s==r||0==g[a]){var c=a-o,l=en(o,c);void 0===t?t=l:(t+="\0",t+=l),o=a+1}}else{var u=new Array(r);for(s=0;s<r;++s)u[s]=String.fromCharCode(g[i+s]);t=u.join("")}return Yn(e),t},toWireType(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var r,i="string"==typeof t;i||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||Ie("Cannot pass non-string to std::string"),r=n&&i?Yt(t):t.length;var o=Xn(4+r+1),s=o+4;if(b[o>>2]=r,n&&i)Zt(t,s,r+1);else if(i)for(var a=0;a<r;++a){var c=t.charCodeAt(a);c>255&&(Yn(s),Ie("String has UTF-16 code units that do not fit in 8 bits")),g[s+a]=c}else for(a=0;a<r;++a)g[s+a]=t[a];return null!==e&&e.push(Yn,o),o},argPackAdvance:Pe,readValueFromPointer:ct,destructorFunction(e){Yn(e)}})},nn=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,rn=(e,t)=>{for(var n=e,r=n>>1,i=r+t/2;!(r>=i)&&y[r];)++r;if(n=r<<1,n-e>32&&nn)return nn.decode(g.subarray(e,n));for(var o="",s=0;!(s>=t/2);++s){var a=v[e+2*s>>1];if(0==a)break;o+=String.fromCharCode(a)}return o},on=(e,t,n)=>{var r;if(null!==(r=n)&&void 0!==r||(n=2147483647),n<2)return 0;n-=2;for(var i=t,o=n<2*e.length?n/2:e.length,s=0;s<o;++s){var a=e.charCodeAt(s);v[t>>1]=a,t+=2}return v[t>>1]=0,t-i},sn=e=>2*e.length,an=(e,t)=>{for(var n=0,r="";!(n>=t/4);){var i=w[e+4*n>>2];if(0==i)break;if(++n,i>=65536){var o=i-65536;r+=String.fromCharCode(55296|o>>10,56320|1023&o)}else r+=String.fromCharCode(i)}return r},cn=(e,t,n)=>{var r;if(null!==(r=n)&&void 0!==r||(n=2147483647),n<4)return 0;for(var i=t,o=i+n-4,s=0;s<e.length;++s){var a=e.charCodeAt(s);if(a>=55296&&a<=57343){var c=e.charCodeAt(++s);a=65536+((1023&a)<<10)|1023&c}if(w[t>>2]=a,t+=4,t+4>o)break}return w[t>>2]=0,t-i},ln=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);r>=55296&&r<=57343&&++n,t+=4}return t},un=(e,t,n)=>{var r,i,o,s,a;n=Te(n),2===t?(r=rn,i=on,s=sn,o=()=>y,a=1):4===t&&(r=an,i=cn,s=ln,o=()=>b,a=2),Se(e,{name:n,fromWireType:e=>{for(var n,i=b[e>>2],s=o(),c=e+4,l=0;l<=i;++l){var u=e+4+l*t;if(l==i||0==s[u>>a]){var d=u-c,h=r(c,d);void 0===n?n=h:(n+="\0",n+=h),c=u+t}}return Yn(e),n},toWireType:(e,r)=>{"string"!=typeof r&&Ie(`Cannot pass non-string to C++ string type ${n}`);var o=s(r),c=Xn(4+o+t);return b[c>>2]=o>>a,i(r,c+4,o+t),null!==e&&e.push(Yn,c),c},argPackAdvance:Pe,readValueFromPointer:ue,destructorFunction(e){Yn(e)}})},dn=(e,t,n,r,i,o)=>{ce[e]={name:Te(t),rawConstructor:wt(n,r),rawDestructor:wt(i,o),fields:[]}},hn=(e,t,n,r,i,o,s,a,c,l)=>{ce[e].fields.push({fieldName:Te(t),getterReturnType:n,getter:wt(r,i),getterContext:o,setterArgumentType:s,setter:wt(a,c),setterContext:l})},fn=(e,t)=>{t=Te(t),Se(e,{isVoid:!0,name:t,argPackAdvance:0,fromWireType:()=>{},toWireType:(e,t)=>{}})},pn=[],mn=(e,t,n,r)=>(e=pn[e],t=$t.toValue(t),e(null,t,n,r)),gn={},vn=e=>{var t=gn[e];return void 0===t?Te(e):t},yn=()=>{if("object"==typeof globalThis)return globalThis;function e(e){e.$$$embind_global$$$=e;var t="object"==typeof $$$embind_global$$$&&e.$$$embind_global$$$==e;return t||delete e.$$$embind_global$$$,t}if("object"==typeof $$$embind_global$$$||("object"==typeof global&&e(global)?$$$embind_global$$$=global:"object"==typeof self&&e(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$))return $$$embind_global$$$;throw Error("unable to get global object.")},wn=e=>0===e?$t.toHandle(yn()):(e=vn(e),$t.toHandle(yn()[e])),bn=e=>{var t=pn.length;return pn.push(e),t},_n=(e,t)=>{for(var n=new Array(e),r=0;r<e;++r)n[r]=Ft(b[t+4*r>>2],"parameter "+r);return n},Tn=Reflect.construct,In=(e,t,n)=>{var r=[],i=e.toWireType(r,n);return r.length&&(b[t>>2]=$t.toHandle(r)),i},En=(e,t,n)=>{var r=_n(e,t),i=r.shift();e--;var o=new Array(e),s=(t,s,a,c)=>{for(var l=0,u=0;u<e;++u)o[u]=r[u].readValueFromPointer(c+l),l+=r[u].argPackAdvance;var d=1===n?Tn(s,o):s.apply(t,o);for(u=0;u<e;++u){var h,f;null===(h=(f=r[u]).deleteObject)||void 0===h||h.call(f,o[u])}return In(i,a,d)},a=`methodCaller<(${r.map((e=>e.name)).join(", ")}) => ${i.name}>`;return bn(Ye(a,s))},Sn=e=>{e>4&&(Dt.get(e).refcount+=1)},Cn=e=>{var t=$t.toValue(e);le(t),Mt(e)},Pn=(e,t)=>{e=Ft(e,"_emval_take_value");var n=e.readValueFromPointer(t);return $t.toHandle(n)},kn=()=>{j("")},On=(e,t,n)=>g.copyWithin(e,t,t+n),An=()=>2147483648,Rn=e=>{var t=p.buffer,n=(e-t.byteLength+65535)/65536;try{return p.grow(n),E(),1}catch(r){}},Dn=e=>{var t=g.length;e>>>=0;var n=An();if(e>n)return!1;for(var r=(e,t)=>e+(t-e%t)%t,i=1;i<=4;i*=2){var o=t*(1+.2/i);o=Math.min(o,e+100663296);var s=Math.min(n,r(Math.max(e,o),65536)),a=Rn(s);if(a)return!0}return!1},Mn={},xn=()=>s||"./this.program",Nn=()=>{if(!Nn.strings){var e=("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:e,_:xn()};for(var n in Mn)void 0===Mn[n]?delete t[n]:t[n]=Mn[n];var r=[];for(var n in t)r.push(`${n}=${t[n]}`);Nn.strings=r}return Nn.strings},$n=(e,t)=>{for(var n=0;n<e.length;++n)m[t++|0]=e.charCodeAt(n);m[t|0]=0},Ln=(e,t)=>{var n=0;return Nn().forEach(((r,i)=>{var o=t+n;b[e+4*i>>2]=o,$n(r,o),n+=r.length+1})),0},jn=(e,t)=>{var n=Nn();b[e>>2]=n.length;var r=0;return n.forEach((e=>r+=e.length+1)),b[t>>2]=r,0},Un=e=>e,Fn=e=>e%4===0&&(e%100!==0||e%400===0),Vn=(e,t)=>{for(var n=0,r=0;r<=t;n+=e[r++]);return n},Wn=[31,29,31,30,31,30,31,31,30,31,30,31],Bn=[31,28,31,30,31,30,31,31,30,31,30,31],Hn=(e,t)=>{for(var n=new Date(e.getTime());t>0;){var r=Fn(n.getFullYear()),i=n.getMonth(),o=(r?Wn:Bn)[i];if(!(t>o-n.getDate()))return n.setDate(n.getDate()+t),n;t-=o-n.getDate()+1,n.setDate(1),i<11?n.setMonth(i+1):(n.setMonth(0),n.setFullYear(n.getFullYear()+1))}return n};function zn(e,t,n){var r=Yt(e)+1,i=new Array(r);return Jt(e,i,0,i.length),i}var Kn=(e,t)=>{m.set(e,t)},Gn=(e,t,n,r)=>{var i=b[r+40>>2],o={tm_sec:w[r>>2],tm_min:w[r+4>>2],tm_hour:w[r+8>>2],tm_mday:w[r+12>>2],tm_mon:w[r+16>>2],tm_year:w[r+20>>2],tm_wday:w[r+24>>2],tm_yday:w[r+28>>2],tm_isdst:w[r+32>>2],tm_gmtoff:w[r+36>>2],tm_zone:i?en(i):""},s=en(n),a={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var c in a)s=s.replace(new RegExp(c,"g"),a[c]);var l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=["January","February","March","April","May","June","July","August","September","October","November","December"];function d(e,t,n){for(var r="number"==typeof e?e.toString():e||"";r.length<t;)r=n[0]+r;return r}function h(e,t){return d(e,t,"0")}function f(e,t){function n(e){return e<0?-1:e>0?1:0}var r;return 0===(r=n(e.getFullYear()-t.getFullYear()))&&0===(r=n(e.getMonth()-t.getMonth()))&&(r=n(e.getDate()-t.getDate())),r}function p(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function m(e){var t=Hn(new Date(e.tm_year+1900,0,1),e.tm_yday),n=new Date(t.getFullYear(),0,4),r=new Date(t.getFullYear()+1,0,4),i=p(n),o=p(r);return f(i,t)<=0?f(o,t)<=0?t.getFullYear()+1:t.getFullYear():t.getFullYear()-1}var g={"%a":e=>l[e.tm_wday].substring(0,3),"%A":e=>l[e.tm_wday],"%b":e=>u[e.tm_mon].substring(0,3),"%B":e=>u[e.tm_mon],"%C":e=>{var t=e.tm_year+1900;return h(t/100|0,2)},"%d":e=>h(e.tm_mday,2),"%e":e=>d(e.tm_mday,2," "),"%g":e=>m(e).toString().substring(2),"%G":e=>m(e),"%H":e=>h(e.tm_hour,2),"%I":e=>{var t=e.tm_hour;return 0==t?t=12:t>12&&(t-=12),h(t,2)},"%j":e=>h(e.tm_mday+Vn(Fn(e.tm_year+1900)?Wn:Bn,e.tm_mon-1),3),"%m":e=>h(e.tm_mon+1,2),"%M":e=>h(e.tm_min,2),"%n":()=>"\n","%p":e=>e.tm_hour>=0&&e.tm_hour<12?"AM":"PM","%S":e=>h(e.tm_sec,2),"%t":()=>"\t","%u":e=>e.tm_wday||7,"%U":e=>{var t=e.tm_yday+7-e.tm_wday;return h(Math.floor(t/7),2)},"%V":e=>{var t=Math.floor((e.tm_yday+7-(e.tm_wday+6)%7)/7);if((e.tm_wday+371-e.tm_yday-2)%7<=2&&t++,t){if(53==t){var n=(e.tm_wday+371-e.tm_yday)%7;4!=n&&(3!=n||!Fn(e.tm_year))&&(t=1)}}else{t=52;var r=(e.tm_wday+7-e.tm_yday-1)%7;(4==r||5==r&&Fn(e.tm_year%400-1))&&t++}return h(t,2)},"%w":e=>e.tm_wday,"%W":e=>{var t=e.tm_yday+7-(e.tm_wday+6)%7;return h(Math.floor(t/7),2)},"%y":e=>(e.tm_year+1900).toString().substring(2),"%Y":e=>e.tm_year+1900,"%z":e=>{var t=e.tm_gmtoff,n=t>=0;return t=Math.abs(t)/60,t=t/60*100+t%60,(n?"+":"-")+("0000"+t).slice(-4)},"%Z":e=>e.tm_zone,"%%":()=>"%"};for(var c in s=s.replace(/%%/g,"\0\0"),g)s.includes(c)&&(s=s.replace(new RegExp(c,"g"),g[c](o)));s=s.replace(/\0\0/g,"%");var v=zn(s);return v.length>t?0:(Kn(v,e),v.length-1)},qn=(e,t,n,r,i)=>Gn(e,t,n,r);de=i.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}},_e(),fe=i.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},Je(),We(),lt(),ht=i.UnboundTypeError=bt(Error,"UnboundTypeError"),At(),Nt();var Jn={s:Z,u:X,b:ne,g:re,q:ie,J:oe,f:se,V:ae,d:ee,da:we,Q:be,_:ke,ca:It,ba:Pt,w:Ot,Y:Lt,x:Ut,h:Vt,L:Ht,M:zt,t:Gt,o:qt,K:tn,C:un,A:dn,ea:hn,$:fn,R:mn,ha:Mt,fa:wn,Z:En,N:Sn,O:Cn,aa:Pn,B:kn,X:On,W:Dn,T:Ln,U:jn,E:Sr,D:pr,F:Er,n:Cr,a:ur,e:gr,m:fr,k:yr,H:Tr,v:br,G:Ir,z:kr,P:Ar,l:vr,j:mr,c:hr,p:dr,I:_r,r:Pr,i:wr,y:Or,ga:Un,S:qn},Zn=K(),Yn=i._free=e=>(Yn=i._free=Zn.ka)(e),Xn=i._malloc=e=>(Xn=i._malloc=Zn.la)(e),Qn=e=>(Qn=Zn.na)(e),er=(e,t)=>(er=Zn.oa)(e,t),tr=e=>(tr=Zn.pa)(e),nr=()=>(nr=Zn.qa)(),rr=e=>(rr=Zn.ra)(e),ir=e=>(ir=Zn.sa)(e),or=e=>(or=Zn.ta)(e),sr=(e,t,n)=>(sr=Zn.ua)(e,t,n),ar=e=>(ar=Zn.va)(e);i.dynCall_viijii=(e,t,n,r,o,s,a)=>(i.dynCall_viijii=Zn.wa)(e,t,n,r,o,s,a);var cr,lr=i.dynCall_jiiii=(e,t,n,r,o)=>(lr=i.dynCall_jiiii=Zn.xa)(e,t,n,r,o);function ur(e,t){var n=nr();try{return gt(e)(t)}catch(r){if(rr(n),r!==r+0)throw r;er(1,0)}}function dr(e,t,n,r){var i=nr();try{gt(e)(t,n,r)}catch(o){if(rr(i),o!==o+0)throw o;er(1,0)}}function hr(e,t,n){var r=nr();try{gt(e)(t,n)}catch(i){if(rr(r),i!==i+0)throw i;er(1,0)}}function fr(e,t,n,r){var i=nr();try{return gt(e)(t,n,r)}catch(o){if(rr(i),o!==o+0)throw o;er(1,0)}}function pr(e,t,n,r,i){var o=nr();try{return gt(e)(t,n,r,i)}catch(s){if(rr(o),s!==s+0)throw s;er(1,0)}}function mr(e,t){var n=nr();try{gt(e)(t)}catch(r){if(rr(n),r!==r+0)throw r;er(1,0)}}function gr(e,t,n){var r=nr();try{return gt(e)(t,n)}catch(i){if(rr(r),i!==i+0)throw i;er(1,0)}}function vr(e){var t=nr();try{gt(e)()}catch(n){if(rr(t),n!==n+0)throw n;er(1,0)}}function yr(e,t,n,r,i){var o=nr();try{return gt(e)(t,n,r,i)}catch(s){if(rr(o),s!==s+0)throw s;er(1,0)}}function wr(e,t,n,r,i,o,s,a,c,l,u){var d=nr();try{gt(e)(t,n,r,i,o,s,a,c,l,u)}catch(h){if(rr(d),h!==h+0)throw h;er(1,0)}}function br(e,t,n,r,i,o,s){var a=nr();try{return gt(e)(t,n,r,i,o,s)}catch(c){if(rr(a),c!==c+0)throw c;er(1,0)}}function _r(e,t,n,r,i){var o=nr();try{gt(e)(t,n,r,i)}catch(s){if(rr(o),s!==s+0)throw s;er(1,0)}}function Tr(e,t,n,r,i,o){var s=nr();try{return gt(e)(t,n,r,i,o)}catch(a){if(rr(s),a!==a+0)throw a;er(1,0)}}function Ir(e,t,n,r,i,o,s,a){var c=nr();try{return gt(e)(t,n,r,i,o,s,a)}catch(l){if(rr(c),l!==l+0)throw l;er(1,0)}}function Er(e,t,n,r){var i=nr();try{return gt(e)(t,n,r)}catch(o){if(rr(i),o!==o+0)throw o;er(1,0)}}function Sr(e,t,n,r){var i=nr();try{return gt(e)(t,n,r)}catch(o){if(rr(i),o!==o+0)throw o;er(1,0)}}function Cr(e){var t=nr();try{return gt(e)()}catch(n){if(rr(t),n!==n+0)throw n;er(1,0)}}function Pr(e,t,n,r,i,o,s,a){var c=nr();try{gt(e)(t,n,r,i,o,s,a)}catch(l){if(rr(c),l!==l+0)throw l;er(1,0)}}function kr(e,t,n,r,i,o,s,a,c,l,u,d){var h=nr();try{return gt(e)(t,n,r,i,o,s,a,c,l,u,d)}catch(f){if(rr(h),f!==f+0)throw f;er(1,0)}}function Or(e,t,n,r,i,o,s,a,c,l,u,d,h,f,p,m){var g=nr();try{gt(e)(t,n,r,i,o,s,a,c,l,u,d,h,f,p,m)}catch(v){if(rr(g),v!==v+0)throw v;er(1,0)}}function Ar(e,t,n,r,i){var o=nr();try{return lr(e,t,n,r,i)}catch(s){if(rr(o),s!==s+0)throw s;er(1,0)}}function Rr(){function e(){cr||(cr=!0,i.calledRun=!0,!I&&(O(),n(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),A()))}x>0||(k(),x>0)||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),e()}),1)):e())}if(i.dynCall_iiiiij=(e,t,n,r,o,s,a)=>(i.dynCall_iiiiij=Zn.ya)(e,t,n,r,o,s,a),i.dynCall_iiiiijj=(e,t,n,r,o,s,a,c,l)=>(i.dynCall_iiiiijj=Zn.za)(e,t,n,r,o,s,a,c,l),i.dynCall_iiiiiijj=(e,t,n,r,o,s,a,c,l,u)=>(i.dynCall_iiiiiijj=Zn.Aa)(e,t,n,r,o,s,a,c,l,u),N=function e(){cr||Rr(),cr||(N=e)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Rr(),t.ready}})();function ne(e){return Y(te,e)}async function re(e,t){return X(te,e,t)}async function ie(e,t){return Q(te,e,t)}class oe extends EventTarget{constructor(e={}){var t;super(),l(this,ee,void 0);try{const n=null==(t=null==e?void 0:e.formats)?void 0:t.filter((e=>"unknown"!==e));if(0===(null==n?void 0:n.length))throw new TypeError("Hint option provided, but is empty.");null==n||n.forEach((e=>{if(!f.has(e))throw new TypeError(`Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '${e}' is not a valid enum value of type BarcodeFormat.`)})),u(this,ee,null!=n?n:[]),ne().then((e=>{this.dispatchEvent(new CustomEvent("load",{detail:e}))})).catch((e=>{this.dispatchEvent(new CustomEvent("error",{detail:e}))}))}catch(n){throw N(n,"Failed to construct 'BarcodeDetector'")}}static async getSupportedFormats(){return h.filter((e=>"unknown"!==e))}async detect(e){try{const n=await O(e);if(null===n)return[];let r;try{r=I(n)?await re(n,{tryHarder:!0,formats:c(this,ee).map((e=>f.get(e)))}):await ie(n,{tryHarder:!0,formats:c(this,ee).map((e=>f.get(e)))})}catch(t){throw console.error(t),new DOMException("Barcode detection service unavailable.","NotSupportedError")}return r.map((e=>{const{topLeft:{x:t,y:n},topRight:{x:r,y:i},bottomLeft:{x:o,y:s},bottomRight:{x:a,y:c}}=e.position,l=Math.min(t,r,o,a),u=Math.min(n,i,s,c),d=Math.max(t,r,o,a),h=Math.max(n,i,s,c);return{boundingBox:new DOMRectReadOnly(l,u,d-l,h-u),rawValue:e.text,format:p(e.format),cornerPoints:[{x:t,y:n},{x:r,y:i},{x:a,y:c},{x:o,y:s}]}}))}catch(n){throw N(n,"Failed to execute 'detect' on 'BarcodeDetector'")}}}ee=new WeakMap;const se=(e,t,n="error")=>{let r,i;const o=new Promise(((o,s)=>{r=o,i=s,e.addEventListener(t,r),e.addEventListener(n,i)}));return o.finally((()=>{e.removeEventListener(t,r),e.removeEventListener(n,i)})),o},ae=e=>new Promise((t=>setTimeout(t,e)));Error;class ce extends Error{constructor(){super("this browser has no Stream API support"),this.name="StreamApiNotSupportedError"}}class le extends Error{constructor(){super("camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP."),this.name="InsecureContextError"}}class ue extends Error{constructor(){super("Loading camera stream timed out after 6 seconds. If you are on iOS in PWA mode, this is a known issue (see https://github.com/gruhn/vue-qrcode-reader/issues/298)"),this.name="StreamLoadTimeoutError"}}let de;async function he(e){if(void 0===window.BarcodeDetector)return console.debug("[vue-qrcode-reader] Native BarcodeDetector not supported. Will use polyfill."),new oe({formats:e});const t=await window.BarcodeDetector.getSupportedFormats(),n=e.filter((e=>!t.includes(e)));return n.length>0?(console.debug(`[vue-qrcode-reader] Native BarcodeDetector does not support formats ${JSON.stringify(n)}. Will use polyfill.`),new oe({formats:e})):(console.debug("[vue-qrcode-reader] Will use native BarcodeDetector."),new window.BarcodeDetector({formats:e}))}async function fe(e){de=await he(e)}const pe=async(e,{detectHandler:t,locateHandler:n,minDelay:r,formats:i})=>{console.debug("[vue-qrcode-reader] start scanning"),await fe(i);const o=i=>async s=>{if(0===e.readyState)console.debug("[vue-qrcode-reader] stop scanning: video element readyState is 0");else{const{lastScanned:a,contentBefore:c,lastScanHadContent:l}=i;if(s-a<r)window.requestAnimationFrame(o(i));else{const r=await de.detect(e),i=r.some((e=>!c.includes(e.rawValue)));i&&t(r);const a=r.length>0;a&&n(r),!a&&l&&n(r);const u={lastScanned:s,lastScanHadContent:a,contentBefore:i?r.map((e=>e.rawValue)):c};window.requestAnimationFrame(o(u))}}};o({lastScanned:performance.now(),contentBefore:[],lastScanHadContent:!1})(performance.now())};var me={},ge={};Object.defineProperty(ge,"__esModule",{value:!0}),ge.compactObject=De,ge.deprecated=Oe;var ve=ge.detectBrowser=Ae;function ye(e,t,n){return t=we(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function we(e){var t=be(e,"string");return"symbol"===_e(t)?t:String(t)}function be(e,t){if("object"!==_e(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==_e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function _e(e){return _e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_e(e)}ge.disableLog=Ce,ge.disableWarnings=Pe,ge.extractVersion=Ee,ge.filterStats=xe,ge.log=ke,ge.walkStats=Me,ge.wrapPeerConnectionEvent=Se;var Te=!0,Ie=!0;function Ee(e,t,n){var r=e.match(t);return r&&r.length>=n&&parseInt(r[n],10)}function Se(e,t,n){if(e.RTCPeerConnection){var r=e.RTCPeerConnection.prototype,i=r.addEventListener;r.addEventListener=function(e,r){if(e!==t)return i.apply(this,arguments);var o=function(e){var t=n(e);t&&(r.handleEvent?r.handleEvent(t):r(t))};return this._eventMap=this._eventMap||{},this._eventMap[t]||(this._eventMap[t]=new Map),this._eventMap[t].set(r,o),i.apply(this,[e,o])};var o=r.removeEventListener;r.removeEventListener=function(e,n){if(e!==t||!this._eventMap||!this._eventMap[t])return o.apply(this,arguments);if(!this._eventMap[t].has(n))return o.apply(this,arguments);var r=this._eventMap[t].get(n);return this._eventMap[t].delete(n),0===this._eventMap[t].size&&delete this._eventMap[t],0===Object.keys(this._eventMap).length&&delete this._eventMap,o.apply(this,[e,r])},Object.defineProperty(r,"on"+t,{get:function(){return this["_on"+t]},set:function(e){this["_on"+t]&&(this.removeEventListener(t,this["_on"+t]),delete this["_on"+t]),e&&this.addEventListener(t,this["_on"+t]=e)},enumerable:!0,configurable:!0})}}function Ce(e){return"boolean"!=typeof e?new Error("Argument type: "+_e(e)+". Please use a boolean."):(Te=e,e?"adapter.js logging disabled":"adapter.js logging enabled")}function Pe(e){return"boolean"!=typeof e?new Error("Argument type: "+_e(e)+". Please use a boolean."):(Ie=!e,"adapter.js deprecation warnings "+(e?"disabled":"enabled"))}function ke(){if("object"===(typeof window>"u"?"undefined":_e(window))){if(Te)return;typeof console<"u"&&"function"==typeof console.log&&console.log.apply(console,arguments)}}function Oe(e,t){Ie&&console.warn(e+" is deprecated, please use "+t+" instead.")}function Ae(e){var t={browser:null,version:null};if(typeof e>"u"||!e.navigator||!e.navigator.userAgent)return t.browser="Not a browser.",t;var n=e.navigator;if(n.mozGetUserMedia)t.browser="firefox",t.version=Ee(n.userAgent,/Firefox\/(\d+)\./,1);else if(n.webkitGetUserMedia||!1===e.isSecureContext&&e.webkitRTCPeerConnection)t.browser="chrome",t.version=Ee(n.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else{if(!e.RTCPeerConnection||!n.userAgent.match(/AppleWebKit\/(\d+)\./))return t.browser="Not a supported browser.",t;t.browser="safari",t.version=Ee(n.userAgent,/AppleWebKit\/(\d+)\./,1),t.supportsUnifiedPlan=e.RTCRtpTransceiver&&"currentDirection"in e.RTCRtpTransceiver.prototype}return t}function Re(e){return"[object Object]"===Object.prototype.toString.call(e)}function De(e){return Re(e)?Object.keys(e).reduce((function(t,n){var r=Re(e[n]),i=r?De(e[n]):e[n],o=r&&!Object.keys(i).length;return void 0===i||o?t:Object.assign(t,ye({},n,i))}),{}):e}function Me(e,t,n){!t||n.has(t.id)||(n.set(t.id,t),Object.keys(t).forEach((function(r){r.endsWith("Id")?Me(e,e.get(t[r]),n):r.endsWith("Ids")&&t[r].forEach((function(t){Me(e,e.get(t),n)}))})))}function xe(e,t,n){var r=n?"outbound-rtp":"inbound-rtp",i=new Map;if(null===t)return i;var o=[];return e.forEach((function(e){"track"===e.type&&e.trackIdentifier===t.id&&o.push(e)})),o.forEach((function(t){e.forEach((function(n){n.type===r&&n.trackId===t.id&&Me(e,n,i)}))})),i}Object.defineProperty(me,"__esModule",{value:!0});var Ne=me.shimGetUserMedia=Ve,$e=je(ge);function Le(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(Le=function(e){return e?n:t})(e)}function je(e,t){if(e.__esModule)return e;if(null===e||"object"!==Ue(e)&&"function"!=typeof e)return{default:e};var n=Le(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function Ue(e){return Ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ue(e)}var Fe=$e.log;function Ve(e,t){var n=e&&e.navigator;if(n.mediaDevices){var r=function(e){if("object"!==Ue(e)||e.mandatory||e.optional)return e;var t={};return Object.keys(e).forEach((function(n){if("require"!==n&&"advanced"!==n&&"mediaSource"!==n){var r="object"===Ue(e[n])?e[n]:{ideal:e[n]};void 0!==r.exact&&"number"==typeof r.exact&&(r.min=r.max=r.exact);var i=function(e,t){return e?e+t.charAt(0).toUpperCase()+t.slice(1):"deviceId"===t?"sourceId":t};if(void 0!==r.ideal){t.optional=t.optional||[];var o={};"number"==typeof r.ideal?(o[i("min",n)]=r.ideal,t.optional.push(o),o={},o[i("max",n)]=r.ideal,t.optional.push(o)):(o[i("",n)]=r.ideal,t.optional.push(o))}void 0!==r.exact&&"number"!=typeof r.exact?(t.mandatory=t.mandatory||{},t.mandatory[i("",n)]=r.exact):["min","max"].forEach((function(e){void 0!==r[e]&&(t.mandatory=t.mandatory||{},t.mandatory[i(e,n)]=r[e])}))}})),e.advanced&&(t.optional=(t.optional||[]).concat(e.advanced)),t},i=function(e,i){if(t.version>=61)return i(e);if(e=JSON.parse(JSON.stringify(e)),e&&"object"===Ue(e.audio)){var o=function(e,t,n){t in e&&!(n in e)&&(e[n]=e[t],delete e[t])};e=JSON.parse(JSON.stringify(e)),o(e.audio,"autoGainControl","googAutoGainControl"),o(e.audio,"noiseSuppression","googNoiseSuppression"),e.audio=r(e.audio)}if(e&&"object"===Ue(e.video)){var s=e.video.facingMode;s=s&&("object"===Ue(s)?s:{ideal:s});var a,c=t.version<66;if(s&&("user"===s.exact||"environment"===s.exact||"user"===s.ideal||"environment"===s.ideal)&&(!n.mediaDevices.getSupportedConstraints||!n.mediaDevices.getSupportedConstraints().facingMode||c))if(delete e.video.facingMode,"environment"===s.exact||"environment"===s.ideal?a=["back","rear"]:("user"===s.exact||"user"===s.ideal)&&(a=["front"]),a)return n.mediaDevices.enumerateDevices().then((function(t){t=t.filter((function(e){return"videoinput"===e.kind}));var n=t.find((function(e){return a.some((function(t){return e.label.toLowerCase().includes(t)}))}));return!n&&t.length&&a.includes("back")&&(n=t[t.length-1]),n&&(e.video.deviceId=s.exact?{exact:n.deviceId}:{ideal:n.deviceId}),e.video=r(e.video),Fe("chrome: "+JSON.stringify(e)),i(e)}));e.video=r(e.video)}return Fe("chrome: "+JSON.stringify(e)),i(e)},o=function(e){return t.version>=64?e:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[e.name]||e.name,message:e.message,constraint:e.constraint||e.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}},s=function(e,t,r){i(e,(function(e){n.webkitGetUserMedia(e,t,(function(e){r&&r(o(e))}))}))};if(n.getUserMedia=s.bind(n),n.mediaDevices.getUserMedia){var a=n.mediaDevices.getUserMedia.bind(n.mediaDevices);n.mediaDevices.getUserMedia=function(e){return i(e,(function(e){return a(e).then((function(t){if(e.audio&&!t.getAudioTracks().length||e.video&&!t.getVideoTracks().length)throw t.getTracks().forEach((function(e){e.stop()})),new DOMException("","NotFoundError");return t}),(function(e){return Promise.reject(o(e))}))}))}}}}var We={};Object.defineProperty(We,"__esModule",{value:!0});var Be=We.shimGetUserMedia=qe,He=Ke(ge);function ze(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(ze=function(e){return e?n:t})(e)}function Ke(e,t){if(e.__esModule)return e;if(null===e||"object"!==Ge(e)&&"function"!=typeof e)return{default:e};var n=ze(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function Ge(e){return Ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ge(e)}function qe(e,t){var n=e&&e.navigator,r=e&&e.MediaStreamTrack;if(n.getUserMedia=function(e,t,r){He.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),n.mediaDevices.getUserMedia(e).then(t,r)},!(t.version>55&&"autoGainControl"in n.mediaDevices.getSupportedConstraints())){var i=function(e,t,n){t in e&&!(n in e)&&(e[n]=e[t],delete e[t])},o=n.mediaDevices.getUserMedia.bind(n.mediaDevices);if(n.mediaDevices.getUserMedia=function(e){return"object"===Ge(e)&&"object"===Ge(e.audio)&&(e=JSON.parse(JSON.stringify(e)),i(e.audio,"autoGainControl","mozAutoGainControl"),i(e.audio,"noiseSuppression","mozNoiseSuppression")),o(e)},r&&r.prototype.getSettings){var s=r.prototype.getSettings;r.prototype.getSettings=function(){var e=s.apply(this,arguments);return i(e,"mozAutoGainControl","autoGainControl"),i(e,"mozNoiseSuppression","noiseSuppression"),e}}if(r&&r.prototype.applyConstraints){var a=r.prototype.applyConstraints;r.prototype.applyConstraints=function(e){return"audio"===this.kind&&"object"===Ge(e)&&(e=JSON.parse(JSON.stringify(e)),i(e,"autoGainControl","mozAutoGainControl"),i(e,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[e])}}}}var Je={};Object.defineProperty(Je,"__esModule",{value:!0}),Je.shimAudioContext=lt,Je.shimCallbacksAPI=rt,Je.shimConstraints=ot,Je.shimCreateOfferLegacy=ct;var Ze=Je.shimGetUserMedia=it;Je.shimLocalStreamsAPI=tt,Je.shimRTCIceServerUrls=st,Je.shimRemoteStreamsAPI=nt,Je.shimTrackEventTransceiver=at;var Ye=Qe(ge);function Xe(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(Xe=function(e){return e?n:t})(e)}function Qe(e,t){if(e.__esModule)return e;if(null===e||"object"!==et(e)&&"function"!=typeof e)return{default:e};var n=Xe(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function et(e){return et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},et(e)}function tt(e){if("object"===et(e)&&e.RTCPeerConnection){if("getLocalStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in e.RTCPeerConnection.prototype)){var t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addStream=function(e){var n=this;this._localStreams||(this._localStreams=[]),this._localStreams.includes(e)||this._localStreams.push(e),e.getAudioTracks().forEach((function(r){return t.call(n,r,e)})),e.getVideoTracks().forEach((function(r){return t.call(n,r,e)}))},e.RTCPeerConnection.prototype.addTrack=function(e){for(var n=this,r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return i&&i.forEach((function(e){n._localStreams?n._localStreams.includes(e)||n._localStreams.push(e):n._localStreams=[e]})),t.apply(this,arguments)}}"removeStream"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.removeStream=function(e){var t=this;this._localStreams||(this._localStreams=[]);var n=this._localStreams.indexOf(e);if(-1!==n){this._localStreams.splice(n,1);var r=e.getTracks();this.getSenders().forEach((function(e){r.includes(e.track)&&t.removeTrack(e)}))}})}}function nt(e){if("object"===et(e)&&e.RTCPeerConnection&&("getRemoteStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in e.RTCPeerConnection.prototype))){Object.defineProperty(e.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(e){var t=this;this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=e),this.addEventListener("track",this._onaddstreampoly=function(e){e.streams.forEach((function(e){if(t._remoteStreams||(t._remoteStreams=[]),!t._remoteStreams.includes(e)){t._remoteStreams.push(e);var n=new Event("addstream");n.stream=e,t.dispatchEvent(n)}}))})}});var t=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function(){var e=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(t){t.streams.forEach((function(t){if(e._remoteStreams||(e._remoteStreams=[]),!(e._remoteStreams.indexOf(t)>=0)){e._remoteStreams.push(t);var n=new Event("addstream");n.stream=t,e.dispatchEvent(n)}}))}),t.apply(e,arguments)}}}function rt(e){if("object"===et(e)&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype,n=t.createOffer,r=t.createAnswer,i=t.setLocalDescription,o=t.setRemoteDescription,s=t.addIceCandidate;t.createOffer=function(e,t){var r=arguments.length>=2?arguments[2]:arguments[0],i=n.apply(this,[r]);return t?(i.then(e,t),Promise.resolve()):i},t.createAnswer=function(e,t){var n=arguments.length>=2?arguments[2]:arguments[0],i=r.apply(this,[n]);return t?(i.then(e,t),Promise.resolve()):i};var a=function(e,t,n){var r=i.apply(this,[e]);return n?(r.then(t,n),Promise.resolve()):r};t.setLocalDescription=a,a=function(e,t,n){var r=o.apply(this,[e]);return n?(r.then(t,n),Promise.resolve()):r},t.setRemoteDescription=a,a=function(e,t,n){var r=s.apply(this,[e]);return n?(r.then(t,n),Promise.resolve()):r},t.addIceCandidate=a}}function it(e){var t=e&&e.navigator;if(t.mediaDevices&&t.mediaDevices.getUserMedia){var n=t.mediaDevices,r=n.getUserMedia.bind(n);t.mediaDevices.getUserMedia=function(e){return r(ot(e))}}!t.getUserMedia&&t.mediaDevices&&t.mediaDevices.getUserMedia&&(t.getUserMedia=function(e,n,r){t.mediaDevices.getUserMedia(e).then(n,r)}.bind(t))}function ot(e){return e&&void 0!==e.video?Object.assign({},e,{video:Ye.compactObject(e.video)}):e}function st(e){if(e.RTCPeerConnection){var t=e.RTCPeerConnection;e.RTCPeerConnection=function(e,n){if(e&&e.iceServers){for(var r=[],i=0;i<e.iceServers.length;i++){var o=e.iceServers[i];void 0===o.urls&&o.url?(Ye.deprecated("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,r.push(o)):r.push(e.iceServers[i])}e.iceServers=r}return new t(e,n)},e.RTCPeerConnection.prototype=t.prototype,"generateCertificate"in t&&Object.defineProperty(e.RTCPeerConnection,"generateCertificate",{get:function(){return t.generateCertificate}})}}function at(e){"object"===et(e)&&e.RTCTrackEvent&&"receiver"in e.RTCTrackEvent.prototype&&!("transceiver"in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})}function ct(e){var t=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function(e){if(e){typeof e.offerToReceiveAudio<"u"&&(e.offerToReceiveAudio=!!e.offerToReceiveAudio);var n=this.getTransceivers().find((function(e){return"audio"===e.receiver.track.kind}));!1===e.offerToReceiveAudio&&n?"sendrecv"===n.direction?n.setDirection?n.setDirection("sendonly"):n.direction="sendonly":"recvonly"===n.direction&&(n.setDirection?n.setDirection("inactive"):n.direction="inactive"):!0===e.offerToReceiveAudio&&!n&&this.addTransceiver("audio",{direction:"recvonly"}),typeof e.offerToReceiveVideo<"u"&&(e.offerToReceiveVideo=!!e.offerToReceiveVideo);var r=this.getTransceivers().find((function(e){return"video"===e.receiver.track.kind}));!1===e.offerToReceiveVideo&&r?"sendrecv"===r.direction?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":"recvonly"===r.direction&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):!0===e.offerToReceiveVideo&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return t.apply(this,arguments)}}function lt(e){"object"!==et(e)||e.AudioContext||(e.AudioContext=e.webkitAudioContext)}const ut=e=>{let t,n=!1;return(...r)=>(n||(t=e(r),n=!0),t)};function dt(e,t){if(!1===e)throw new Error(null!=t?t:"assertion failure")}function ht(e){throw new Error("this code should be unreachable")}const ft=ut((()=>{const e=ve(window);switch(e.browser){case"chrome":Ne(window,e);break;case"firefox":Be(window,e);break;case"safari":Ze(window,e);break;default:throw new ce}}));let pt=Promise.resolve({type:"stop",data:{}});async function mt(e,t,n){var r,i,o;if(console.debug("[vue-qrcode-reader] starting camera with constraints: ",JSON.stringify(t)),!0!==window.isSecureContext)throw new le;if(void 0===(null==(r=null==navigator?void 0:navigator.mediaDevices)?void 0:r.getUserMedia))throw new ce;ft(),console.debug("[vue-qrcode-reader] calling getUserMedia");const s=await navigator.mediaDevices.getUserMedia({audio:!1,video:t});void 0!==e.srcObject?e.srcObject=s:void 0!==e.mozSrcObject?e.mozSrcObject=s:window.URL.createObjectURL?e.src=window.URL.createObjectURL(s):window.webkitURL?e.src=window.webkitURL.createObjectURL(s):e.src=s.id,e.play(),console.debug("[vue-qrcode-reader] waiting for video element to load"),await Promise.race([se(e,"loadeddata"),ae(6e3).then((()=>{throw new ue}))]),console.debug("[vue-qrcode-reader] video element loaded"),await ae(500);const[a]=s.getVideoTracks(),c=null!=(o=null==(i=null==a?void 0:a.getCapabilities)?void 0:i.call(a))?o:{};let l=!1;return n&&c.torch&&(await a.applyConstraints({advanced:[{torch:!0}]}),l=!0),console.debug("[vue-qrcode-reader] camera ready"),{type:"start",data:{videoEl:e,stream:s,capabilities:c,constraints:t,isTorchOn:l}}}async function gt(e,{constraints:t,torch:n,restart:r=!1}){pt=pt.then((i=>{if("start"===i.type){const{data:{videoEl:o,stream:s,constraints:a,isTorchOn:c}}=i;return r||e!==o||t!==a||n!==c?vt(o,s,c).then((()=>mt(e,t,n))):i}if("stop"===i.type||"failed"===i.type)return mt(e,t,n);ht()})).catch((e=>(console.debug(`[vue-qrcode-reader] starting camera failed with "${e}"`),{type:"failed",error:e})));const i=await pt;if("stop"===i.type)throw new Error("Something went wrong with the camera task queue (start task).");if("failed"===i.type)throw i.error;if("start"===i.type)return i.data.capabilities;ht()}async function vt(e,t,n){console.debug("[vue-qrcode-reader] stopping camera"),e.src="",e.srcObject=null,e.load(),await se(e,"error");for(const r of t.getTracks())null!=n||await r.applyConstraints({advanced:[{torch:!1}]}),t.removeTrack(r),r.stop();return{type:"stop",data:{}}}async function yt(){if(pt=pt.then((e=>{if("stop"===e.type||"failed"===e.type)return e;const{data:{videoEl:t,stream:n,isTorchOn:r}}=e;return vt(t,n,r)})),"start"===(await pt).type)throw new Error("Something went wrong with the camera task queue (stop task).")}const wt=(0,r.pM)({__name:"QrcodeStream",props:{constraints:{default:()=>({facingMode:"environment"})},formats:{default:()=>["qr_code"]},paused:{type:Boolean,default:!1},torch:{type:Boolean,default:!1},track:{type:Function,default:void 0}},emits:["detect","camera-on","camera-off","error"],setup(e,{emit:t}){const n=e,a=t,c=(0,i.KR)(n.constraints),l=(0,i.KR)(n.formats);(0,r.wB)((()=>n.constraints),((e,t)=>{JSON.stringify(e)!==JSON.stringify(t)&&(c.value=e)}),{deep:!0}),(0,r.wB)((()=>n.formats),((e,t)=>{JSON.stringify(e)!==JSON.stringify(t)&&(l.value=e)}),{deep:!0});const u=(0,i.KR)(),d=(0,i.KR)(),h=(0,i.KR)(),f=(0,i.KR)(!1),p=(0,i.KR)(!1);(0,r.sV)((()=>{p.value=!0})),(0,r.hi)((()=>{yt()}));const m=(0,r.EW)((()=>({torch:n.torch,constraints:c.value,shouldStream:p.value&&!n.paused})));(0,r.wB)(m,(async e=>{const t=h.value;dt(void 0!==t,"cameraSettings watcher should never be triggered when component is not mounted. Thus video element should always be defined.");const n=u.value;dt(void 0!==n,"cameraSettings watcher should never be triggered when component is not mounted. Thus canvas should always be defined.");const r=n.getContext("2d");if(dt(null!==r,"if cavnas is defined, canvas 2d context should also be non-null"),e.shouldStream){yt(),f.value=!1;try{const n=await gt(t,e);p.value?(f.value=!0,a("camera-on",n)):await yt()}catch(i){a("error",i)}}else n.width=t.videoWidth,n.height=t.videoHeight,r.drawImage(t,0,0,t.videoWidth,t.videoHeight),yt(),f.value=!1,a("camera-off")}),{deep:!0}),(0,r.wB)(l,(async e=>{p.value&&await fe(e)}));const g=(0,r.EW)((()=>m.value.shouldStream&&f.value));(0,r.wB)(g,(e=>{if(e){dt(void 0!==u.value,"shouldScan watcher should only be triggered when component is mounted. Thus pause frame canvas is defined"),v(u.value),dt(void 0!==d.value,"shouldScan watcher should only be triggered when component is mounted. Thus tracking canvas is defined"),v(d.value);const e=()=>void 0===n.track?500:40;dt(void 0!==h.value,"shouldScan watcher should only be triggered when component is mounted. Thus video element is defined"),pe(h.value,{detectHandler:e=>a("detect",e),formats:l.value,locateHandler:y,minDelay:e()})}}));const v=e=>{const t=e.getContext("2d");dt(null!==t,"canvas 2d context should always be non-null"),t.clearRect(0,0,e.width,e.height)},y=e=>{const t=d.value;dt(void 0!==t,"onLocate handler should only be called when component is mounted. Thus tracking canvas is always defined.");const r=h.value;if(dt(void 0!==r,"onLocate handler should only be called when component is mounted. Thus video element is always defined."),0===e.length||void 0===n.track)v(t);else{const i=r.offsetWidth,o=r.offsetHeight,s=r.videoWidth,a=r.videoHeight,c=Math.max(i/s,o/a),l=s*c,u=a*c,d=l/s,h=u/a,f=(i-l)/2,p=(o-u)/2,m=({x:e,y:t})=>({x:Math.floor(e*d),y:Math.floor(t*h)}),g=({x:e,y:t})=>({x:Math.floor(e+f),y:Math.floor(t+p)}),v=e.map((e=>{const{boundingBox:t,cornerPoints:n}=e,{x:r,y:i}=g(m({x:t.x,y:t.y})),{x:o,y:s}=m({x:t.width,y:t.height});return{...e,cornerPoints:n.map((e=>g(m(e)))),boundingBox:DOMRectReadOnly.fromRect({x:r,y:i,width:o,height:s})}}));t.width=r.offsetWidth,t.height=r.offsetHeight;const y=t.getContext("2d");dt(null!==y,"canvas 2d context should always be non-null"),n.track(v,y)}},w={width:"100%",height:"100%",position:"relative","z-index":"0"},b={width:"100%",height:"100%",position:"absolute",top:"0",left:"0"},_={width:"100%",height:"100%","object-fit":"cover"},T=(0,r.EW)((()=>g.value?_:{..._,visibility:"hidden",position:"absolute"}));return(e,t)=>((0,r.uX)(),(0,r.CE)("div",{style:w},[(0,r.Lk)("video",{ref_key:"videoRef",ref:h,style:(0,o.Tr)(T.value),autoplay:"",muted:"",playsinline:""},null,4),(0,r.bo)((0,r.Lk)("canvas",{id:"qrcode-stream-pause-frame",ref_key:"pauseFrameRef",ref:u,style:_},null,512),[[s.aG,!g.value]]),(0,r.Lk)("canvas",{id:"qrcode-stream-tracking-layer",ref_key:"trackingLayerRef",ref:d,style:b},null,512),(0,r.Lk)("div",{style:b},[(0,r.RG)(e.$slots,"default")])]))}})},220:(e,t,n)=>{n.d(t,{LA:()=>ce,aE:()=>it});var r=n(641),i=n(953);
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const o="undefined"!==typeof document;function s(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function a(e){return e.__esModule||"Module"===e[Symbol.toStringTag]||e.default&&s(e.default)}const c=Object.assign;function l(e,t){const n={};for(const r in t){const i=t[r];n[r]=d(i)?i.map(e):e(i)}return n}const u=()=>{},d=Array.isArray;const h=/#/g,f=/&/g,p=/\//g,m=/=/g,g=/\?/g,v=/\+/g,y=/%5B/g,w=/%5D/g,b=/%5E/g,_=/%60/g,T=/%7B/g,I=/%7C/g,E=/%7D/g,S=/%20/g;function C(e){return encodeURI(""+e).replace(I,"|").replace(y,"[").replace(w,"]")}function P(e){return C(e).replace(T,"{").replace(E,"}").replace(b,"^")}function k(e){return C(e).replace(v,"%2B").replace(S,"+").replace(h,"%23").replace(f,"%26").replace(_,"`").replace(T,"{").replace(E,"}").replace(b,"^")}function O(e){return k(e).replace(m,"%3D")}function A(e){return C(e).replace(h,"%23").replace(g,"%3F")}function R(e){return null==e?"":A(e).replace(p,"%2F")}function D(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const M=/\/$/,x=e=>e.replace(M,"");function N(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),i=e(o)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=B(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:D(s)}}function $(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function L(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function j(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&U(t.matched[r],n.matched[i])&&F(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function U(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function F(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!V(e[n],t[n]))return!1;return!0}function V(e,t){return d(e)?W(e,t):d(t)?W(t,e):e===t}function W(e,t){return d(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function B(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let o,s,a=n.length-1;for(o=0;o<r.length;o++)if(s=r[o],"."!==s){if(".."!==s)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(o).join("/")}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var z,K;(function(e){e["pop"]="pop",e["push"]="push"})(z||(z={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(K||(K={}));function G(e){if(!e)if(o){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),x(e)}const q=/^[^#]+#/;function J(e,t){return e.replace(q,"#")+t}function Z(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Y=()=>({left:window.scrollX,top:window.scrollY});function X(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Z(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function Q(e,t){const n=history.state?history.state.position-t:-1;return n+e}const ee=new Map;function te(e,t){ee.set(e,t)}function ne(e){const t=ee.get(e);return ee.delete(e),t}let re=()=>location.protocol+"//"+location.host;function ie(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),L(n,"")}const s=L(n,e);return s+r+i}function oe(e,t,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=ie(e,location),c=n.value,l=t.value;let u=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);u=l?o.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:z.pop,direction:u?u>0?K.forward:K.back:K.unknown})}))};function l(){s=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function d(){const{history:e}=window;e.state&&e.replaceState(c({},e.state,{scroll:Y()}),"")}function h(){for(const e of o)e();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:h}}function se(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Y():null}}function ae(e){const{history:t,location:n}=window,r={value:ie(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:re()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(l){console.error(l),n[s?"replace":"assign"](c)}}function s(e,n){const s=c({},t.state,se(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function a(e,n){const s=c({},i.value,t.state,{forward:e,scroll:Y()});o(s.current,s,!0);const a=c({},se(r.value,e,null),{position:s.position+1},n);o(e,a,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function ce(e){e=G(e);const t=ae(e),n=oe(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=c({location:"",base:e,go:r,createHref:J.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function le(e){return"string"===typeof e||e&&"object"===typeof e}function ue(e){return"string"===typeof e||"symbol"===typeof e}const de=Symbol("");var he;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(he||(he={}));function fe(e,t){return c(new Error,{type:e,[de]:!0},t)}function pe(e,t){return e instanceof Error&&de in e&&(null==t||!!(e.type&t))}const me="[^/]+?",ge={sensitive:!1,strict:!1,start:!0,end:!0},ve=/[.+*?^${}()[\]/\\]/g;function ye(e,t){const n=c({},ge,t),r=[];let i=n.start?"^":"";const o=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let t=0;t<c.length;t++){const r=c[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ve,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:l}=r;o.push({name:e,repeatable:n,optional:a});const d=l||me;if(d!==me){s+=10;try{new RegExp(`(${d})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${d}): `+u.message)}}let h=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;t||(h=a&&c.length<2?`(?:/${h})`:"/"+h),a&&(h+="?"),i+=h,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===d&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(d(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const l=d(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:s,score:r,keys:o,parse:a,stringify:l}}function we(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function be(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=we(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(_e(r))return 1;if(_e(i))return-1}return i.length-r.length}function _e(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Te={type:0,value:""},Ie=/[a-zA-Z0-9_]/;function Ee(e){if(!e)return[[]];if("/"===e)return[[Te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,l="",u="";function d(){l&&(0===n?o.push({type:0,value:l}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function h(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&d(),s()):":"===a?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:"("===a?n=2:Ie.test(a)?h():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),d(),s(),i}function Se(e,t,n){const r=ye(Ee(e.path),n);const i=c(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function Ce(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,a=ke(e);a.aliasOf=r&&r.record;const d=De(t,e),h=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)h.push(ke(c({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a})))}let f,p;for(const t of h){const{path:c}=t;if(n&&"/"!==c[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(c&&r+c)}if(f=Se(t,n,d),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!Ae(f)&&s(e.name)),Ne(f)&&l(f),a.children){const e=a.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f}return p?()=>{s(p)}:u}function s(e){if(ue(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function l(e){const t=Me(e,n);n.splice(t,0,e),e.record.name&&!Ae(e)&&r.set(e.record.name,e)}function d(e,t){let i,o,s,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw fe(1,{location:e});0,s=i.record.name,a=c(Pe(t.params,i.keys.filter((e=>!e.optional)).concat(i.parent?i.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Pe(e.params,i.keys.map((e=>e.name)))),o=i.stringify(a)}else if(null!=e.path)o=e.path,i=n.find((e=>e.re.test(o))),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw fe(1,{location:e,currentLocation:t});s=i.record.name,a=c({},t.params,e.params),o=i.stringify(a)}const l=[];let u=i;while(u)l.unshift(u.record),u=u.parent;return{name:s,path:o,params:a,matched:l,meta:Re(l)}}function h(){n.length=0,r.clear()}return t=De({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:d,removeRoute:s,clearRoutes:h,getRoutes:a,getRecordMatcher:i}}function Pe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ke(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Oe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Oe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function Ae(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Re(e){return e.reduce(((e,t)=>c(e,t.meta)),{})}function De(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Me(e,t){let n=0,r=t.length;while(n!==r){const i=n+r>>1,o=be(e,t[i]);o<0?r=i:n=i+1}const i=xe(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function xe(e){let t=e;while(t=t.parent)if(Ne(t)&&0===be(e,t))return t}function Ne({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function $e(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(v," "),n=e.indexOf("="),o=D(n<0?e:e.slice(0,n)),s=n<0?null:D(e.slice(n+1));if(o in t){let e=t[o];d(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=O(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=d(r)?r.map((e=>e&&k(e))):[r&&k(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function je(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=d(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Ue=Symbol(""),Fe=Symbol(""),Ve=Symbol(""),We=Symbol(""),Be=Symbol("");function He(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ze(e,t,n,r,i,o=e=>e()){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const l=e=>{!1===e?c(fe(4,{from:n,to:t})):e instanceof Error?c(e):le(e)?c(fe(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),a())},u=o((()=>e.call(r&&r.instances[i],t,n,l)));let d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch((e=>c(e)))}))}function Ke(e,t,n,r,i=e=>e()){const o=[];for(const c of e){0;for(const e in c.components){let l=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if(s(l)){const s=l.__vccOpts||l,a=s[t];a&&o.push(ze(a,n,r,c,e,i))}else{let s=l();0,o.push((()=>s.then((o=>{if(!o)throw new Error(`Couldn't resolve component "${e}" at "${c.path}"`);const s=a(o)?o.default:o;c.mods[e]=o,c.components[e]=s;const l=s.__vccOpts||s,u=l[t];return u&&ze(u,n,r,c,e,i)()}))))}}}return o}function Ge(e){const t=(0,r.WQ)(Ve),n=(0,r.WQ)(We);const o=(0,r.EW)((()=>{const n=(0,i.R1)(e.to);return t.resolve(n)})),s=(0,r.EW)((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(U.bind(null,r));if(s>-1)return s;const a=Qe(e[t-2]);return t>1&&Qe(r)===a&&i[i.length-1].path!==a?i.findIndex(U.bind(null,e[t-2])):s})),a=(0,r.EW)((()=>s.value>-1&&Xe(n.params,o.value.params))),c=(0,r.EW)((()=>s.value>-1&&s.value===n.matched.length-1&&F(n.params,o.value.params)));function l(n={}){if(Ye(n)){const n=t[(0,i.R1)(e.replace)?"replace":"push"]((0,i.R1)(e.to)).catch(u);return e.viewTransition&&"undefined"!==typeof document&&"startViewTransition"in document&&document.startViewTransition((()=>n)),n}return Promise.resolve()}return{route:o,href:(0,r.EW)((()=>o.value.href)),isActive:a,isExactActive:c,navigate:l}}function qe(e){return 1===e.length?e[0]:e}const Je=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup(e,{slots:t}){const n=(0,i.Kh)(Ge(e)),{options:o}=(0,r.WQ)(Ve),s=(0,r.EW)((()=>({[et(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[et(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&qe(t.default(n));return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ze=Je;function Ye(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!d(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const et=(e,t,n)=>null!=e?e:null!=t?t:n,tt=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=(0,r.WQ)(Be),s=(0,r.EW)((()=>e.route||o.value)),a=(0,r.WQ)(Fe,0),l=(0,r.EW)((()=>{let e=(0,i.R1)(a);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,r.EW)((()=>s.value.matched[l.value]));(0,r.Gt)(Fe,(0,r.EW)((()=>l.value+1))),(0,r.Gt)(Ue,u),(0,r.Gt)(Be,s);const d=(0,i.KR)();return(0,r.wB)((()=>[d.value,u.value,e.name]),(([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&U(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=s.value,o=e.name,a=u.value,l=a&&a.components[o];if(!l)return nt(n.default,{Component:l,route:i});const h=a.props[o],f=h?!0===h?i.params:"function"===typeof h?h(i):h:null,p=e=>{e.component.isUnmounted&&(a.instances[o]=null)},m=(0,r.h)(l,c({},f,t,{onVnodeUnmounted:p,ref:d}));return nt(n.default,{Component:m,route:i})||m}}});function nt(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const rt=tt;function it(e){const t=Ce(e.routes,e),n=e.parseQuery||$e,s=e.stringifyQuery||Le,a=e.history;const h=He(),f=He(),p=He(),m=(0,i.IJ)(H);let g=H;o&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=l.bind(null,(e=>""+e)),y=l.bind(null,R),w=l.bind(null,D);function b(e,n){let r,i;return ue(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function _(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function T(){return t.getRoutes().map((e=>e.record))}function I(e){return!!t.getRecordMatcher(e)}function E(e,r){if(r=c({},r||m.value),"string"===typeof e){const i=N(n,e,r.path),o=t.resolve({path:i.path},r),s=a.createHref(i.fullPath);return c(i,o,{params:w(o.params),hash:D(i.hash),redirectedFrom:void 0,href:s})}let i;if(null!=e.path)i=c({},e,{path:N(n,e.path,r.path).path});else{const t=c({},e.params);for(const e in t)null==t[e]&&delete t[e];i=c({},e,{params:y(t)}),r.params=y(r.params)}const o=t.resolve(i,r),l=e.hash||"";o.params=v(w(o.params));const u=$(s,c({},e,{hash:P(l),path:o.path})),d=a.createHref(u);return c({fullPath:u,hash:l,query:s===Le?je(e.query):e.query||{}},o,{redirectedFrom:void 0,href:d})}function S(e){return"string"===typeof e?N(n,e,m.value.path):c({},e)}function C(e,t){if(g!==e)return fe(8,{from:t,to:e})}function k(e){return M(e)}function O(e){return k(c(S(e),{replace:!0}))}function A(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=S(r):{path:r},r.params={}),c({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function M(e,t){const n=g=E(e),r=m.value,i=e.state,o=e.force,a=!0===e.replace,l=A(n);if(l)return M(c(S(l),{state:"object"===typeof l?c({},i,l.state):i,force:o,replace:a}),t||n);const u=n;let d;return u.redirectedFrom=t,!o&&j(s,r,n)&&(d=fe(16,{to:u,from:r}),re(r,r,!0,!1)),(d?Promise.resolve(d):U(u,r)).catch((e=>pe(e)?pe(e,2)?e:ee(e):J(e,u,r))).then((e=>{if(e){if(pe(e,2))return M(c({replace:a},S(e.to),{state:"object"===typeof e.to?c({},i,e.to.state):i,force:o}),t||u)}else e=V(u,r,!0,a,i);return F(u,r,e),e}))}function x(e,t){const n=C(e,t);return n?Promise.reject(n):Promise.resolve()}function L(e){const t=se.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function U(e,t){let n;const[r,i,o]=ot(e,t);n=Ke(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(ze(r,e,t))}));const s=x.bind(null,e,t);return n.push(s),ce(n).then((()=>{n=[];for(const r of h.list())n.push(ze(r,e,t));return n.push(s),ce(n)})).then((()=>{n=Ke(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(ze(r,e,t))}));return n.push(s),ce(n)})).then((()=>{n=[];for(const r of o)if(r.beforeEnter)if(d(r.beforeEnter))for(const i of r.beforeEnter)n.push(ze(i,e,t));else n.push(ze(r.beforeEnter,e,t));return n.push(s),ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ke(o,"beforeRouteEnter",e,t,L),n.push(s),ce(n)))).then((()=>{n=[];for(const r of f.list())n.push(ze(r,e,t));return n.push(s),ce(n)})).catch((e=>pe(e,8)?e:Promise.reject(e)))}function F(e,t,n){p.list().forEach((r=>L((()=>r(e,t,n)))))}function V(e,t,n,r,i){const s=C(e,t);if(s)return s;const l=t===H,u=o?history.state:{};n&&(r||l?a.replace(e.fullPath,c({scroll:l&&u&&u.scroll},i)):a.push(e.fullPath,i)),m.value=e,re(e,t,n,l),ee()}let W;function B(){W||(W=a.listen(((e,t,n)=>{if(!ae.listening)return;const r=E(e),i=A(r);if(i)return void M(c(i,{replace:!0,force:!0}),r).catch(u);g=r;const s=m.value;o&&te(Q(s.fullPath,n.delta),Y()),U(r,s).catch((e=>pe(e,12)?e:pe(e,2)?(M(c(S(e.to),{force:!0}),r).then((e=>{pe(e,20)&&!n.delta&&n.type===z.pop&&a.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&a.go(-n.delta,!1),J(e,r,s)))).then((e=>{e=e||V(r,s,!1),e&&(n.delta&&!pe(e,8)?a.go(-n.delta,!1):n.type===z.pop&&pe(e,20)&&a.go(-1,!1)),F(r,s,e)})).catch(u)})))}let K,G=He(),q=He();function J(e,t,n){ee(e);const r=q.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function Z(){return K&&m.value!==H?Promise.resolve():new Promise(((e,t)=>{G.add([e,t])}))}function ee(e){return K||(K=!e,B(),G.list().forEach((([t,n])=>e?n(e):t())),G.reset()),e}function re(t,n,i,s){const{scrollBehavior:a}=e;if(!o||!a)return Promise.resolve();const c=!i&&ne(Q(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(t,n,c))).then((e=>e&&X(e))).catch((e=>J(e,t,n)))}const ie=e=>a.go(e);let oe;const se=new Set,ae={currentRoute:m,listening:!0,addRoute:b,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:I,getRoutes:T,resolve:E,options:e,push:k,replace:O,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:h.add,beforeResolve:f.add,afterEach:p.add,onError:q.add,isReady:Z,install(e){const t=this;e.component("RouterLink",Ze),e.component("RouterView",rt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(m)}),o&&!oe&&m.value===H&&(oe=!0,k(a.location).catch((e=>{0})));const n={};for(const i in H)Object.defineProperty(n,i,{get:()=>m.value[i],enumerable:!0});e.provide(Ve,t),e.provide(We,(0,i.Gc)(n)),e.provide(Be,m);const r=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(g=H,W&&W(),W=null,m.value=H,oe=!1,K=!1),r()}}};function ce(e){return e.reduce(((e,t)=>e.then((()=>L(t)))),Promise.resolve())}return ae}function ot(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find((e=>U(e,o)))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find((e=>U(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.b4950e90.js.map