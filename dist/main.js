!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),a=n(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],d=t.base?o[0]+t.base:o[0],s=n[d]||0,l="".concat(d," ").concat(s);n[d]=s+1;var u=c(l),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:g(p,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function f(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function g(e,t){var n,r,a;if(t.singleton){var o=m++;n=h||(h=s(t)),r=p.bind(null,n,o,!1),a=p.bind(null,n,o,!0)}else n=s(t),r=f.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=c(n[r]);i[a].references--}for(var o=d(e,t),s=0;s<n.length;s++){var l=c(n[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=o}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900&display=swap);"]),t.push([e.i,"*{margin:0;padding:0;box-sizing:border-box;font-family:'Poppins', sans-serif}body{background:linear-gradient(#2f96a3, #303e8f);background-size:cover;background-repeat:no-repeat;background-position:center center;color:white;text-shadow:2px 2px 1px black;height:100vh}#searchContainer{display:grid;grid-template-columns:80% 18%;grid-gap:2%;width:35%;margin:0 auto;padding:15px 0;top:0;right:0}#searchContainer .searchControl{box-shadow:2px 2px 5px black;border:none;border-radius:5px;padding:5px}#searchContainer input{width:100%;height:50px}#searchContainer button{background-color:black;color:white;width:100%;height:50px;cursor:pointer}#searchContainer .toggle{display:flex;flex-flow:row nowrap;justify-content:space-between;margin-top:5px}#searchContainer .toggle .button{width:49%;border-radius:7px;border:none;outline:none;cursor:pointer}#weatherContainer{width:35%;margin:0 auto;background-color:rgba(0,0,0,0.25);box-shadow:1px 1px 5px black;padding:50px;border-radius:10px;visibility:hidden}#weatherContainer h1{font-size:42px}#weatherMain{display:flex;margin-bottom:20px;flex-direction:column;justify-content:space-between;align-items:baseline}#weatherMain .overcast{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;width:100%}#weatherMain .overcast #weatherDescriptionHeader{font-size:28px;vertical-align:50%}#weatherMain .overcast .icon{align-self:flex-end;height:48px;padding-left:10px}#temperature{font-size:38px;vertical-align:25%;cursor:pointer;width:108px;text-align:center;border-radius:9px;margin-left:-8px;background-color:rgba(0,0,0,0.3)}.bottom-details{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;font-size:24px;text-align:right;line-height:3rem}hr{margin-bottom:20px}@media only screen and (min-width: 768px) and (max-width: 1030px){#searchContainer,#weatherContainer{width:50%}}@media only screen and (min-width: 451px) and (max-width: 768px){#searchContainer,#weatherContainer{width:80%}}@media only screen and (max-width: 450px){#searchContainer,#weatherContainer{width:90%}#weatherContainer{padding:10px}}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var i,c,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&a[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){"use strict";n.r(t);n(0);var r=()=>{const e=document.getElementById("weatherContainer"),t=e.clientHeight,n=e.clientWidth;e.style.left=`calc(50% - ${n/2}px)`,e.style.top=`calc(50% - ${t/1.3}px)`,e.style.visibility="visible"},a=n.p+"87fe59164e771532c0d755c36c88eea2.jpg",o=n.p+"a78ee11220e6ff9d02c064ee93182b3f.jpg",i=n.p+"daaa239520dc1c9214ab2d8dfc154a56.jpg",c=n.p+"fe304746ac77283dd4282750daa76740.jpg",d=n.p+"890eda6fadd4638f64fc9124c7827cea.jpg",s=n.p+"6a04b7101f07020c7cc494ef27fc3d67.jpg";var l=e=>{switch(e.weather[0].main){case"Clear":document.body.style.backgroundImage=`url('${a}')`;break;case"Clouds":document.body.style.backgroundImage=`url('${o}')`;break;case"Rain":case"Drizzle":document.body.style.backgroundImage=`url('${i}')`;break;case"Mist":document.body.style.backgroundImage=`url('${c}')`;break;case"Thunderstorm":document.body.style.backgroundImage=`url('${d}')`;break;case"Snow":document.body.style.backgroundImage=`url('${s}')`}console.log(e);const t=document.getElementById("weatherDescriptionHeader"),n=document.getElementById("temperature"),l=document.getElementById("humidity"),u=document.getElementById("windSpeed"),p=document.getElementById("cityHeader");document.getElementById("documentIconImg").src=`http://openweathermap.org/img/w/${e.weather[0].icon}.png`;const f=e.weather[0].description;t.innerText=f.charAt(0).toUpperCase()+f.slice(1),n.innerHTML=Math.floor(e.main.temp)+"&deg; F",u.innerHTML=`Wind Speed: ${Math.floor(e.wind.speed)} meter/s`,p.innerHTML=e.name,l.innerHTML=`Humidity levels: ${e.main.humidity}%`,r()};let u;var p=(e,t)=>{(e=>{u=5===e.length&&""+Number.parseInt(e)===e?"zip":"q"})(e),fetch(`http://api.openweathermap.org/data/2.5/weather?${u}=${e}&APPID=31fbe75b00972a42dd7b94da28403791&units=${t}`).then(e=>e.json()).then(e=>{l(e)}).catch(e=>{throw alert("Input a valid city name!"),new Error(e.message)})};let f="";document.getElementById("searchBtn").addEventListener("click",()=>{f=document.getElementById("searchInput").value.trim(""),f&&p(f,"imperial")});document.querySelector(".toggle").addEventListener("click",e=>{e.target.classList.contains("fahrenheit")?p(f,"imperial"):p(f,"metric")})}]);