var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,a,o,i,l,u,s,d,c,f,p,h,v,b,m,g,y,w,j,S,k,E,P={58723:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(179),t.e(255),t.e(833),t.e(806)]).then((()=>()=>t(77806))),"./extension":()=>Promise.all([t.e(833),t.e(875)]).then((()=>()=>t(93875)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},x={};function O(e){var r=x[e];if(void 0!==r)return r.exports;var t=x[e]={id:e,loaded:!1,exports:{}};return P[e].call(t.exports,t,t.exports,O),t.loaded=!0,t.exports}O.m=P,O.c=x,O.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return O.d(r,{a:r}),r},O.d=(e,r)=>{for(var t in r)O.o(r,t)&&!O.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},O.f={},O.e=e=>Promise.all(Object.keys(O.f).reduce(((r,t)=>(O.f[t](e,r),r)),[])),O.u=e=>e+"."+{132:"15f612f13061a6b87fcc",179:"24576232b1f07dfa1434",255:"e971d8320f539559e0dd",806:"c14c418749d9d21260b1",833:"eeb318ac4881268c241c",875:"f3cad8e11284596d9a09",977:"534cc18a32e4e3512c18"}[e]+".js?v="+{132:"15f612f13061a6b87fcc",179:"24576232b1f07dfa1434",255:"e971d8320f539559e0dd",806:"c14c418749d9d21260b1",833:"eeb318ac4881268c241c",875:"f3cad8e11284596d9a09",977:"534cc18a32e4e3512c18"}[e],O.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),O.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="molstar-clj:",O.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,O.nc&&i.setAttribute("nonce",O.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var c=(r,n)=>{i.onerror=i.onload=null,clearTimeout(f);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},f=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),l&&document.head.appendChild(i)}},O.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},O.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{O.S={};var e={},r={};O.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];O.o(O.S,t)||(O.S[t]={});var o=O.S[t],i="molstar-clj",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("case","1.6.3",(()=>O.e(132).then((()=>()=>O(42132))))),l("molstar-clj","0.1.0",(()=>Promise.all([O.e(179),O.e(255),O.e(833),O.e(806)]).then((()=>()=>O(77806))))),l("ngl","2.3.1",(()=>O.e(977).then((()=>()=>O(84977)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;O.g.importScripts&&(e=O.g.location+"");var r=O.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),O.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():a(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,d,c=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(d=(typeof(s=r[i]))[0]))return!u||("u"==c?l>n&&!a:""==c!=a);if("u"==d){if(!u||"u"!=c)return!1}else if(u)if(c==d)if(l<=n){if(s!=e[l])return!1}else{if(a?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=c&&"n"!=c){if(a||l<=n)return!1;u=!1,l--}else{if(l<=n||d<c!=a)return!1;u=!1}else"s"!=c&&"n"!=c&&(u=!1,l--)}}var f=[],p=f.pop.bind(f);for(i=1;i<e.length;i++){var h=e[i];f.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r)=>e&&O.o(e,r),l=e=>(e.loaded=1,e.get()),u=e=>Object.keys(e).reduce(((r,t)=>(e[t].eager&&(r[t]=e[t]),r)),{}),s=(e,r,t)=>{var a=t?u(e[r]):e[r];return(r=Object.keys(a).reduce(((e,r)=>!e||n(e,r)?r:e),0))&&a[r]},d=(e,r,t,a)=>{var i=a?u(e[r]):e[r];return(r=Object.keys(i).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&i[r]},c=(e,r,t)=>{var a=t?u(e[r]):e[r];return Object.keys(a).reduce(((e,r)=>!e||!a[e].loaded&&n(e,r)?r:e),0)},f=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",p=(e,r,t,n,o)=>{var i=e[t];return"No satisfying version ("+a(n)+")"+(o?" for eager consumption":"")+" of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(i).map((e=>e+" from "+i[e].from)).join(", ")},h=e=>{throw new Error(e)},v=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},m=(e,r,t)=>t?t():((e,r)=>h("Shared module "+r+" doesn't exist in shared scope "+e))(e,r),g=(b=e=>function(r,t,n,a,o){var i=O.I(r);return i&&i.then&&!n?i.then(e.bind(e,r,O.S[r],t,!1,a,o)):e(r,O.S[r],t,n,a,o)})(((e,r,t,n,a,o)=>{if(!i(r,t))return m(e,t,o);var u=d(r,t,a,n);return u?l(u):(v(p(r,e,t,a,n)),l(s(r,t,n)))})),y=b(((e,r,t,n,a,o)=>{if(!i(r,t))return m(e,t,o);var u=d(r,t,a,n);return u?l(u):o?o():void h(p(r,e,t,a,n))})),w=b(((e,r,t,n,a,u)=>{if(!i(r,t))return m(e,t,u);var s=c(r,t,n);return o(a,s)||v(f(r,t,s,a)),l(r[t][s])})),j={},S={7628:()=>w("default","react-dom",!1,[1,18,2,0]),60530:()=>y("default","case",!1,[1,1,6,3],(()=>O.e(132).then((()=>()=>O(42132))))),93345:()=>w("default","react",!1,[1,18,2,0]),383:()=>y("default","ngl",!1,[4,2,3,1],(()=>O.e(977).then((()=>()=>O(84977))))),35256:()=>w("default","@lumino/widgets",!1,[1,2,3,1,,"alpha",0]),39994:()=>g("default","@jupyterlab/docregistry",!1,[1,4,2,4]),52607:()=>w("default","@jupyterlab/apputils",!1,[1,4,3,4]),67262:()=>w("default","@lumino/coreutils",!1,[1,2,0,0]),95580:()=>w("default","@jupyter-widgets/base",!1,[1,6,0,4]),50974:()=>w("default","@jupyterlab/application",!1,[1,4,2,4])},k={255:[7628,60530,93345],833:[383,35256,39994,52607,67262,95580],875:[50974]},E={},O.f.consumes=(e,r)=>{O.o(k,e)&&k[e].forEach((e=>{if(O.o(j,e))return r.push(j[e]);if(!E[e]){var t=r=>{j[e]=0,O.m[e]=t=>{delete O.c[e],t.exports=r()}};E[e]=!0;var n=r=>{delete j[e],O.m[e]=t=>{throw delete O.c[e],r}};try{var a=S[e]();a.then?r.push(j[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}}))},(()=>{O.b=document.baseURI||self.location.href;var e={427:0};O.f.j=(r,t)=>{var n=O.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(833!=r){var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=O.p+O.u(r),i=new Error;O.l(o,(t=>{if(O.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,a,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(n in i)O.o(i,n)&&(O.m[n]=i[n]);l&&l(O)}for(r&&r(t);u<o.length;u++)a=o[u],O.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkmolstar_clj=self.webpackChunkmolstar_clj||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),O.nc=void 0;var T=O(58723);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["molstar-clj"]=T})();