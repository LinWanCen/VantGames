(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&f.push(u[a][0]),u[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==u[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},u={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2574cb66":"b1fb13ab","chunk-25c2a30d":"003d26f7","chunk-2d0de750":"d3cb2085","chunk-7eb268da":"0440f5e4","chunk-2d21d0d1":"60c5240d","chunk-2d0e9b73":"a6506269"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-2574cb66":1,"chunk-7eb268da":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2574cb66":"ec804cf5","chunk-25c2a30d":"31d6cfe0","chunk-2d0de750":"31d6cfe0","chunk-7eb268da":"70f9735a","chunk-2d21d0d1":"31d6cfe0","chunk-2d0e9b73":"31d6cfe0"}[e]+".css",u=i.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=o[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===u))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===u)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}u[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("5246");var r=n("6b41"),a=(n("0ec5"),n("21ab")),u=(n("3df5"),n("2830")),o=(n("2b28"),n("9ed2")),c=(n("414a"),n("7a82")),i=(n("8fec"),n("7bd9")),s=(n("8a58"),n("e41f")),l=(n("4d48"),n("d1e1")),f=(n("81e6"),n("9ffb")),d=(n("0653"),n("34e9")),h=(n("c194"),n("7744")),p=(n("66b9"),n("b650")),m=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},["Menu"!==this.$router.currentRoute.name?n("van-nav-bar",{attrs:{title:this.$router.currentRoute.meta.title,"left-text":"主页 🏠","right-text":"🔄 重来"},on:{"click-left":e.Home,"click-right":e.Refresh}}):e._e(),n("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:e.$route.meta.title,expression:"$route.meta.title"}],attrs:{"img-set":"/logo.png"}})],1)},v=[],g=(n("ac1f"),n("5319"),{methods:{Home:function(){this.$router.replace("/")},Refresh:function(){this.$router.replace("/Refresh")}}}),y=g,k=(n("034f"),n("2877")),w=Object(k["a"])(y,b,v,!1,null,null,null),M=w.exports,O=(n("d3b7"),n("8c4f"));m["a"].use(O["a"]);var j=function(){return n.e("chunk-7eb268da").then(n.bind(null,"fb62"))},_=function(){return n.e("chunk-2d0de750").then(n.bind(null,"8673"))},x=function(){return n.e("chunk-25c2a30d").then(n.bind(null,"4453"))},E=function(){return n.e("chunk-2574cb66").then(n.bind(null,"7367"))},P=new O["a"]({routes:[{path:"/",name:"Menu",component:j,meta:{title:"林万程的脑锻炼"}},{path:"/Refresh",name:"Refresh",component:_,meta:{title:"加载中"}},{path:"/MentalArithmetic",name:"MentalArithmetic",component:x,meta:{title:"Mental Arithmetic 心算"}},{path:"/NumberMemory",name:"NumberMemory",component:E,meta:{title:"Number Memory 记忆"}}]}),A=n("9579"),N=n.n(A);m["a"].use(n("7876")),m["a"].use(p["a"]),m["a"].use(h["a"]),m["a"].use(d["a"]),m["a"].use(f["a"]),m["a"].use(l["a"]),m["a"].use(s["a"]),m["a"].use(i["a"]),m["a"].use(c["a"]),m["a"].use(o["a"]),m["a"].use(u["a"]),m["a"].use(a["a"]),m["a"].use(r["a"]),m["a"].config.productionTip=!1,new m["a"]({router:P,render:function(e){return e(M)}}).$mount("#app"),N.a.init({sid:"500727406",cid:"500727498",autoReport:1,senseHash:1,senseQuery:1,performanceMonitor:1,ignoreParams:[]}),P.afterEach((function(e){"Refresh"!==e.name&&N.a.pgv()}))},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.0a2080ce.js.map