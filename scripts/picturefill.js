!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<41&&addEventListener("resize",function(){var t,r=document.createElement("source"),n=function(e){var t,n,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=r.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},i=function(){clearTimeout(t),t=setTimeout(s,99)},c=e.matchMedia&&matchMedia("(orientation: landscape)"),a=function(){i(),c&&c.addListener&&c.addListener(i)};return r.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),i}())}(window),function(e,t,r){"use strict";function n(e){return" "===e||"	"===e||"\n"===e||"\f"===e||"\r"===e}function s(t,r){var n=new e.Image;return n.onerror=function(){z[t]=!1,ee()},n.onload=function(){z[t]=1===n.width,ee()},n.src=r,"pending"}function i(){W=!1,F=e.devicePixelRatio,B={},Q={},v.DPR=F||1,G.width=Math.max(e.innerWidth||0,b.clientWidth),G.height=Math.max(e.innerHeight||0,b.clientHeight),G.vw=G.width/100,G.vh=G.height/100,A=[G.height,G.width,F].join("-"),G.em=v.getEmValue(),G.rem=G.em}function c(e,t,r,n){var s,i,c,a;return"saveData"===T.algorithm?e>2.7?a=r+1:(i=t-r,s=Math.pow(e-.6,1.5),c=i*s,n&&(c+=.1*s),a=e+c):a=r>1?Math.sqrt(e*t):e,a>r}function a(e){var t,r=v.getSet(e),n=!1;"pending"!==r&&(n=A,r&&(t=v.setRes(r),v.applySetCandidate(t,e))),e[v.ns].evaled=n}function u(e,t){return e.res-t.res}function o(e,t,r){var n;return!r&&t&&(r=e[v.ns].sets,r=r&&r[r.length-1]),n=l(t,r),n&&(t=v.makeUrl(t),e[v.ns].curSrc=t,e[v.ns].curCan=n,n.res||Z(n,n.set.sizes)),n}function l(e,t){var r,n,s;if(e&&t)for(s=v.parseSet(t),e=v.makeUrl(e),r=0;r<s.length;r++)if(e===v.makeUrl(s[r].url)){n=s[r];break}return n}function f(e,t){var r,n,s,i,c=e.getElementsByTagName("source");for(r=0,n=c.length;n>r;r++)s=c[r],s[v.ns]=!0,i=s.getAttribute("srcset"),i&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}function d(e,t){function r(t){var r,n=t.exec(e.substring(d));return n?(r=n[0],d+=r.length,r):void 0}function s(){var e,r,n,s,i,u,o,l,f,d=!1,m={};for(s=0;s<a.length;s++)i=a[s],u=i[i.length-1],o=i.substring(0,i.length-1),l=parseInt(o,10),f=parseFloat(o),O.test(o)&&"w"===u?((e||r)&&(d=!0),0===l?d=!0:e=l):J.test(o)&&"x"===u?((e||r||n)&&(d=!0),0>f?d=!0:r=f):O.test(o)&&"h"===u?((n||r)&&(d=!0),0===l?d=!0:n=l):d=!0;d||(m.url=c,e&&(m.w=e),r&&(m.d=r),n&&(m.h=n),n||r||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,p.push(m))}function i(){for(r(j),u="",o="in descriptor";;){if(l=e.charAt(d),"in descriptor"===o)if(n(l))u&&(a.push(u),u="",o="after descriptor");else{if(","===l)return d+=1,u&&a.push(u),void s();if("("===l)u+=l,o="in parens";else{if(""===l)return u&&a.push(u),void s();u+=l}}else if("in parens"===o)if(")"===l)u+=l,o="in descriptor";else{if(""===l)return a.push(u),void s();u+=l}else if("after descriptor"===o)if(n(l));else{if(""===l)return void s();o="in descriptor",d-=1}d+=1}}for(var c,a,u,o,l,f=e.length,d=0,p=[];;){if(r(q),d>=f)return p;c=r(V),a=[],","===c.slice(-1)?(c=c.replace(_,""),s()):i()}}function p(e){function t(e){function t(){i&&(c.push(i),i="")}function r(){c[0]&&(a.push(c),c=[])}for(var s,i="",c=[],a=[],u=0,o=0,l=!1;;){if(s=e.charAt(o),""===s)return t(),r(),a;if(l){if("*"===s&&"/"===e[o+1]){l=!1,o+=2,t();continue}o+=1}else{if(n(s)){if(e.charAt(o-1)&&n(e.charAt(o-1))||!i){o+=1;continue}if(0===u){t(),o+=1;continue}s=" "}else if("("===s)u+=1;else if(")"===s)u-=1;else{if(","===s){t(),r(),o+=1;continue}if("/"===s&&"*"===e.charAt(o+1)){l=!0,o+=2;continue}}i+=s,o+=1}}}function r(e){return l.test(e)&&parseFloat(e)>=0?!0:f.test(e)?!0:"0"===e||"-0"===e||"+0"===e?!0:!1}var s,i,c,a,u,o,l=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,f=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=t(e),c=i.length,s=0;c>s;s++)if(a=i[s],u=a[a.length-1],r(u)){if(o=u,a.pop(),0===a.length)return o;if(a=a.join(" "),v.matchesMedia(a))return o}return"100vw"}t.createElement("picture");var m,h,g,A,v={},w=function(){},S=t.createElement("img"),x=S.getAttribute,y=S.setAttribute,E=S.removeAttribute,b=t.documentElement,z={},T={algorithm:""},R="data-pfsrc",C=R+"set",M=navigator.userAgent,L=/rident/.test(M)||/ecko/.test(M)&&M.match(/rv\:(\d+)/)&&RegExp.$1>35,P="currentSrc",D=/\s+\+?\d+(e\d+)?w/,U=/(\([^)]+\))?\s*(.+)/,$=e.picturefillCFG,k="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",I="font-size:100%!important;",W=!0,B={},Q={},F=e.devicePixelRatio,G={px:1,"in":96},H=t.createElement("a"),N=!1,j=/^[ \t\n\r\u000c]+/,q=/^[, \t\n\r\u000c]+/,V=/^[^ \t\n\r\u000c]+/,_=/[,]+$/,O=/^\d+$/,J=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,K=function(e,t,r,n){e.addEventListener?e.addEventListener(t,r,n||!1):e.attachEvent&&e.attachEvent("on"+t,r)},X=function(e){var t={};return function(r){return r in t||(t[r]=e(r)),t[r]}},Y=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,r=e[0];++t in e;)r=r.replace(e[t],e[++t]);return r},r=X(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,n){var s;if(!(t in B))if(B[t]=!1,n&&(s=t.match(e)))B[t]=s[1]*G[s[2]];else try{B[t]=new Function("e",r(t))(G)}catch(i){}return B[t]}}(),Z=function(e,t){return e.w?(e.cWidth=v.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ee=function(e){var r,n,s,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),r=i.elements||v.qsa(i.context||t,i.reevaluate||i.reselect?v.sel:v.selShort),s=r.length){for(v.setupRun(i),N=!0,n=0;s>n;n++)v.fillImg(r[n],i);v.teardownRun(i)}};m=e.console&&console.warn?function(e){console.warn(e)}:w,P in S||(P="src"),z["image/jpeg"]=!0,z["image/gif"]=!0,z["image/png"]=!0,z["image/svg+xml"]=t.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),v.ns=("pf"+(new Date).getTime()).substr(0,9),v.supSrcset="srcset"in S,v.supSizes="sizes"in S,v.supPicture=!!e.HTMLPictureElement,v.supSrcset&&v.supPicture&&!v.supSizes&&!function(e){S.srcset="data:,a",e.src="data:,a",v.supSrcset=S.complete===e.complete,v.supPicture=v.supSrcset&&v.supPicture}(t.createElement("img")),v.selShort="picture>img,img[srcset]",v.sel=v.selShort,v.cfg=T,v.supSrcset&&(v.sel+=",img["+C+"]"),v.DPR=F||1,v.u=G,v.types=z,g=v.supSrcset&&!v.supSizes,v.setSize=w,v.makeUrl=X(function(e){return H.href=e,H.href}),v.qsa=function(e,t){return e.querySelectorAll(t)},v.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?v.matchesMedia=function(e){return!e||matchMedia(e).matches}:v.matchesMedia=v.mMQ,v.matchesMedia.apply(this,arguments)},v.mMQ=function(e){return e?Y(e):!0},v.calcLength=function(e){var t=Y(e,!0)||!1;return 0>t&&(t=!1),t},v.supportsType=function(e){return e?z[e]:!0},v.parseSize=X(function(e){var t=(e||"").match(U);return{media:t&&t[1],length:t&&t[2]}}),v.parseSet=function(e){return e.cands||(e.cands=d(e.srcset,e)),e.cands},v.getEmValue=function(){var e;if(!h&&(e=t.body)){var r=t.createElement("div"),n=b.style.cssText,s=e.style.cssText;r.style.cssText=k,b.style.cssText=I,e.style.cssText=I,e.appendChild(r),h=r.offsetWidth,e.removeChild(r),h=parseFloat(h,10),b.style.cssText=n,e.style.cssText=s}return h||16},v.calcListLength=function(e){if(!(e in Q)||T.uT){var t=v.calcLength(p(e));Q[e]=t?t:G.width}return Q[e]},v.setRes=function(e){var t;if(e){t=v.parseSet(e);for(var r=0,n=t.length;n>r;r++)Z(t[r],e.sizes)}return t},v.setRes.res=Z,v.applySetCandidate=function(e,t){if(e.length){var r,n,s,i,a,l,f,d,p,m=t[v.ns],h=v.DPR;if(l=m.curSrc||t[P],f=m.curCan||o(t,l,e[0].set),f&&f.set===e[0].set&&(p=L&&!t.complete&&f.res-.1>h,p||(f.cached=!0,f.res>=h&&(a=f))),!a)for(e.sort(u),i=e.length,a=e[i-1],n=0;i>n;n++)if(r=e[n],r.res>=h){s=n-1,a=e[s]&&(p||l!==v.makeUrl(r.url))&&c(e[s].res,r.res,h,e[s].cached)?e[s]:r;break}a&&(d=v.makeUrl(a.url),m.curSrc=d,m.curCan=a,d!==l&&v.setSrc(t,a),v.setSize(t))}},v.setSrc=function(e,t){var r;e.src=t.url,"image/svg+xml"===t.set.type&&(r=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=r))},v.getSet=function(e){var t,r,n,s=!1,i=e[v.ns].sets;for(t=0;t<i.length&&!s;t++)if(r=i[t],r.srcset&&v.matchesMedia(r.media)&&(n=v.supportsType(r.type))){"pending"===n&&(r=n),s=r;break}return s},v.parseSets=function(e,t,n){var s,i,c,a,u=t&&"PICTURE"===t.nodeName.toUpperCase(),o=e[v.ns];(o.src===r||n.src)&&(o.src=x.call(e,"src"),o.src?y.call(e,R,o.src):E.call(e,R)),(o.srcset===r||n.srcset||!v.supSrcset||e.srcset)&&(s=x.call(e,"srcset"),o.srcset=s,a=!0),o.sets=[],u&&(o.pic=!0,f(t,o.sets)),o.srcset?(i={srcset:o.srcset,sizes:x.call(e,"sizes")},o.sets.push(i),c=(g||o.src)&&D.test(o.srcset||""),c||!o.src||l(o.src,i)||i.has1x||(i.srcset+=", "+o.src,i.cands.push({url:o.src,d:1,set:i}))):o.src&&o.sets.push({srcset:o.src,sizes:null}),o.curCan=null,o.curSrc=r,o.supported=!(u||i&&!v.supSrcset||c),a&&v.supSrcset&&!o.supported&&(s?(y.call(e,C,s),e.srcset=""):E.call(e,C)),o.supported&&!o.srcset&&(!o.src&&e.src||e.src!==v.makeUrl(o.src))&&(null===o.src?e.removeAttribute("src"):e.src=o.src),o.parsed=!0},v.fillImg=function(e,t){var r,n=t.reselect||t.reevaluate;e[v.ns]||(e[v.ns]={}),r=e[v.ns],(n||r.evaled!==A)&&((!r.parsed||t.reevaluate)&&v.parseSets(e,e.parentNode,t),r.supported?r.evaled=A:a(e))},v.setupRun=function(){(!N||W||F!==e.devicePixelRatio)&&i()},v.supPicture?(ee=w,v.fillImg=w):!function(){var r,n=e.attachEvent?/d$|^c/:/d$|^c|^i/,s=function(){var e=t.readyState||"";i=setTimeout(s,"loading"===e?200:999),t.body&&(v.fillImgs(),r=r||n.test(e),r&&clearTimeout(i))},i=setTimeout(s,t.body?9:99),c=function(e,t){var r,n,s=function(){var i=new Date-n;t>i?r=setTimeout(s,t-i):(r=null,e())};return function(){n=new Date,r||(r=setTimeout(s,t))}},a=b.clientHeight,u=function(){W=Math.max(e.innerWidth||0,b.clientWidth)!==G.width||b.clientHeight!==a,a=b.clientHeight,W&&v.fillImgs()};K(e,"resize",c(u,99)),K(t,"readystatechange",s)}(),v.picturefill=ee,v.fillImgs=ee,v.teardownRun=w,ee._=v,e.picturefillCFG={pf:v,push:function(e){var t=e.shift();"function"==typeof v[t]?v[t].apply(v,e):(T[t]=e[0],N&&v.fillImgs({reselect:!0}))}};for(;$&&$.length;)e.picturefillCFG.push($.shift());e.picturefill=ee,"object"==typeof module&&"object"==typeof module.exports?module.exports=ee:"function"==typeof define&&define.amd&&define("picturefill",function(){return ee}),v.supPicture||(z["image/webp"]=s("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);