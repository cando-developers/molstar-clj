/*! For license information please see 132.15f612f13061a6b87fcc.js.LICENSE.txt */
(self.webpackChunkmolstar_clj=self.webpackChunkmolstar_clj||[]).push([[132],{42132:function(e){(function(){"use strict";var n=function(e,n){return n=n||"",e.replace(/(^|-)/g,"$1\\u"+n).replace(/,/g,"\\u"+n)},r=n("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7","00"),t="a-z"+n("DF-F6,F8-FF","00"),l="A-Z"+n("C0-D6,D8-DE","00"),p=function(e,n,p,c){return e=e||r,n=n||t,p=p||l,c=c||"A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via",{capitalize:new RegExp("(^|["+e+"])(["+n+"])","g"),pascal:new RegExp("(^|["+e+"])+(["+n+p+"])","g"),fill:new RegExp("["+e+"]+(.|$)","g"),sentence:new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")(['+n+"])","g"),improper:new RegExp("\\b("+c+")\\b","g"),relax:new RegExp("([^"+p+"])(["+p+"]*)(["+p+"])(?=[^"+p+"]|$)","g"),upper:new RegExp("^[^"+n+"]+$"),hole:/[^\s]\s[^\s]/,apostrophe:/'/g,room:new RegExp("["+e+"]")}},c=p(),u={re:c,unicodes:n,regexps:p,types:[],up:String.prototype.toUpperCase,low:String.prototype.toLowerCase,cap:function(e){return u.up.call(e.charAt(0))+e.slice(1)},decap:function(e){return u.low.call(e.charAt(0))+e.slice(1)},deapostrophe:function(e){return e.replace(c.apostrophe,"")},fill:function(e,n,r){return null!=n&&(e=e.replace(c.fill,(function(e,r){return r?n+r:""}))),r&&(e=u.deapostrophe(e)),e},prep:function(e,n,r,t){if(e=null==e?"":e+"",!t&&c.upper.test(e)&&(e=u.low.call(e)),!n&&!c.hole.test(e)){var l=u.fill(e," ");c.hole.test(l)&&(e=l)}return r||c.room.test(e)||(e=e.replace(c.relax,u.relax)),e},relax:function(e,n,r,t){return n+" "+(r?r+" ":"")+t}},o={_:u,of:function(e){for(var n=0,r=u.types.length;n<r;n++)if(o[u.types[n]].apply(o,arguments)===e)return u.types[n]},flip:function(e){return e.replace(/\w/g,(function(e){return(e==u.up.call(e)?u.low:u.up).call(e)}))},random:function(e){return e.replace(/\w/g,(function(e){return(Math.round(Math.random())?u.up:u.low).call(e)}))},type:function(e,n){o[e]=n,u.types.push(e)}},a={lower:function(e,n,r){return u.fill(u.low.call(u.prep(e,n)),n,r)},snake:function(e){return o.lower(e,"_",!0)},constant:function(e){return o.upper(e,"_",!0)},camel:function(e){return u.decap(o.pascal(e))},kebab:function(e){return o.lower(e,"-",!0)},upper:function(e,n,r){return u.fill(u.up.call(u.prep(e,n,!1,!0)),n,r)},capital:function(e,n,r){return u.fill(u.prep(e).replace(c.capitalize,(function(e,n,r){return n+u.up.call(r)})),n,r)},header:function(e){return o.capital(e,"-",!0)},pascal:function(e){return u.fill(u.prep(e,!1,!0).replace(c.pascal,(function(e,n,r){return u.up.call(r)})),"",!0)},title:function(e){return o.capital(e).replace(c.improper,(function(e,n,r,t){return r>0&&r<t.lastIndexOf(" ")?u.low.call(e):e}))},sentence:function(e,n,r){return e=o.lower(e).replace(c.sentence,(function(e,n,r){return n+u.up.call(r)})),n&&n.forEach((function(n){e=e.replace(new RegExp("\\b"+o.lower(n)+"\\b","g"),u.cap)})),r&&r.forEach((function(n){e=e.replace(new RegExp("(\\b"+o.lower(n)+"\\. +)(\\w)"),(function(e,n,r){return n+u.low.call(r)}))})),e}};for(var i in a.squish=a.pascal,o.default=o,a)o.type(i,a[i]);var f="function"==typeof f?f:function(){};f(e.exports?e.exports=o:this.Case=o)}).call(this)}}]);