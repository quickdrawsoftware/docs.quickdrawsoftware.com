!function(){"use strict";var e,t,r,n,o,c={},u={};function i(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={id:e,loaded:!1,exports:{}};return c[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=c,i.c=u,e=[],i.O=function(t,r,n,o){if(!r){var c=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],o=e[d][2];for(var u=!0,f=0;f<r.length;f++)(!1&o||c>=o)&&Object.keys(i.O).every((function(e){return i.O[e](r[f])}))?r.splice(f--,1):(u=!1,o<c&&(c=o));if(u){e.splice(d--,1);var a=n();void 0!==a&&(t=a)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var u=2&n&&e;"object"==typeof u&&!~t.indexOf(u);u=r(u))Object.getOwnPropertyNames(u).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},i.d(o,c),o},i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,r){return i.f[r](e,t),t}),[]))},i.u=function(e){return"assets/js/"+({53:"935f2afb",91:"ab999430",121:"55960ee5",245:"440cb521",475:"c1c65881",477:"b2f554cd",514:"1be78505",565:"3c8992b4",592:"common",608:"9e4087bc",751:"3720c009",918:"17896441",971:"c377a04b",980:"c0b2d2be"}[e]||e)+"."+{53:"643f085a",75:"24a64662",91:"69db8097",121:"3965ebdf",245:"248c3b0d",475:"e78c9437",477:"5773d389",514:"1bb2901d",565:"c58d41b2",592:"a990cdce",608:"f4855d25",698:"4bf3c2d2",751:"17179faf",918:"234ee2cc",971:"bb9d2bd9",980:"e23139a1"}[e]+".js"},i.miniCssF=function(e){return"assets/css/styles.0c1eb2ef.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},o="docs-quickdrawsoftware-com:",i.l=function(e,t,r,c){if(n[e])n[e].push(t);else{var u,f;if(void 0!==r)for(var a=document.getElementsByTagName("script"),d=0;d<a.length;d++){var s=a[d];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+r){u=s;break}}u||(f=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.setAttribute("data-webpack",o+r),u.src=e),n[e]=[t];var l=function(t,r){u.onerror=u.onload=null,clearTimeout(b);var o=n[e];if(delete n[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(r)})),t)return t(r)},b=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),f&&document.head.appendChild(u)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",i.gca=function(e){return e={17896441:"918","935f2afb":"53",ab999430:"91","55960ee5":"121","440cb521":"245",c1c65881:"475",b2f554cd:"477","1be78505":"514","3c8992b4":"565",common:"592","9e4087bc":"608","3720c009":"751",c377a04b:"971",c0b2d2be:"980"}[e]||e,i.p+i.u(e)},function(){var e={303:0,532:0};i.f.j=function(t,r){var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise((function(r,o){n=e[t]=[r,o]}));r.push(n[2]=o);var c=i.p+i.u(t),u=new Error;i.l(c,(function(r){if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",u.name="ChunkLoadError",u.type=o,u.request=c,n[1](u)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,c=r[0],u=r[1],f=r[2],a=0;if(c.some((function(t){return 0!==e[t]}))){for(n in u)i.o(u,n)&&(i.m[n]=u[n]);if(f)var d=f(i)}for(t&&t(r);a<c.length;a++)o=c[a],i.o(e,o)&&e[o]&&e[o][0](),e[c[a]]=0;return i.O(d)},r=self.webpackChunkdocs_quickdrawsoftware_com=self.webpackChunkdocs_quickdrawsoftware_com||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}()}();