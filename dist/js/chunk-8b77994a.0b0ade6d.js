(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b77994a"],{1148:function(t,e,r){"use strict";var i=r("a691"),s=r("1d80");t.exports="".repeat||function(t){var e=String(s(this)),r="",n=i(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(r+=e);return r}},"38cf":function(t,e,r){var i=r("23e7"),s=r("1148");i({target:"String",proto:!0},{repeat:s})},"86bf":function(t,e,r){"use strict";function i(t){return n(t," 时 "," 分 "," 秒")}function s(t){return n(t," hour "," minute "," second")}function n(t,e,r,i){var s,n=Math.floor(t/36e5),o=t%36e5,h=Math.floor(o/6e4),a=o%6e4,c=Math.round(a/1e3);return s=c+i,h>0&&(s=h+r+s),n>0&&(s=n+e+s),s}r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return s}))},d96e:function(t,e,r){"use strict";var i=r("ed61"),s=r.n(i);s.a},ed61:function(t,e,r){},ed90:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Memory"},[r("van-grid",{attrs:{"column-num":t.col,gutter:8,clickable:!0}},t._l(t.displayArr.length,(function(e){return r("van-grid-item",{key:e,attrs:{text:""+t.displayArr[e-1]},on:{click:function(r){return t.jump(e-1)}}})})),1),r("van-popup",{attrs:{"safe-area-inset-bottom":"",overlay:!1,duration:"0",position:"bottom"},model:{value:t.showButton,callback:function(e){t.showButton=e},expression:"showButton"}},[r("van-button",{attrs:{type:"primary"},on:{click:t.startToAnswer}},[t._v("记住了")]),r("van-divider")],1),r("van-popup",{attrs:{"safe-area-inset-bottom":"",overlay:!1,duration:"0",position:"bottom"},model:{value:t.showKey,callback:function(e){t.showKey=e},expression:"showKey"}},[r("van-grid",{attrs:{"column-num":t.col,gutter:8,clickable:!0}},t._l(t.keyArr.length,(function(e){return r("van-grid-item",{key:e,attrs:{text:""+t.keyArr[e-1]},on:{click:function(r){return t.fill(t.keyArr[e-1])}}})})),1),r("van-divider")],1),r("van-popup",{attrs:{"safe-area-inset-bottom":"",duration:"0","close-on-click-overlay":!1,closeable:!0,position:"bottom"},on:{closed:t.Refresh},model:{value:t.showScore,callback:function(e){t.showScore=e},expression:"showScore"}},[r("pre",{staticClass:"game_formula",staticStyle:{"font-size":"30px"}},[t._v(t._s(t.score))]),r("pre",{staticClass:"game_formula",staticStyle:{"margin-top":"0","font-size":"20px"}},[t._v(t._s(t.scoreEn))])]),r("Start")],1)},s=[],n=(r("d3b7"),r("ac1f"),r("f5b2"),r("f6d6"),r("38cf"),r("5319"),r("86bf")),o=r("9579"),h=r.n(o),a=function(){return r.e("chunk-2d21d0d1").then(r.bind(null,"d03b"))},c={components:{Start:a},data:function(){return{displayArr:[],answerArr:[],keyArr:[],rightCount:0,wrongCount:0,selectIndex:0,startTime:(new Date).getTime(),midTime:(new Date).getTime(),showButton:!0,showKey:!1,showScore:!1,score:"",scoreEn:"",repeat:void 0!==this.$route.query.repeat&&"true"===this.$route.query.repeat,symbol:void 0===this.$route.query.symbol?"0".codePointAt(0):this.$route.query.symbol.codePointAt(0),row:this.intParam("row",5),col:this.intParam("col",5),n:0,keyLen:0}},created:function(){void 0===this.$route.query.keyLen?(this.n=this.row*this.col,this.keyLen=this.n):(this.keyLen=parseInt(String(this.$route.query.keyLen)),this.keyLen<this.col&&(this.col=this.keyLen),this.keyLen<this.col*this.row&&(this.row=Math.floor(this.keyLen/this.col)),this.n=this.row*this.col);for(var t={},e=0,r=0;r<this.n;r++){do{e=Math.ceil(Math.random()*this.keyLen)}while(t[e]);t[e]=1,void 0!==this.$route.query.symbol?(e=String.fromCodePoint(this.symbol+e-1),this.$set(this.keyArr,r,e)):this.$set(this.keyArr,r,r+1),this.$set(this.displayArr,r,e),this.$set(this.answerArr,r,e)}void 0!==this.$route.query.symbol&&this.keyArr.sort()},methods:{startToAnswer:function(){this.showButton=!1,this.showKey=!0,this.$set(this.displayArr,0,"__");for(var t=1;t<this.n;t++)this.$set(this.displayArr,t,"　");this.midTime=(new Date).getTime()},jump:function(t){"　"===this.displayArr[t]&&("__"===this.displayArr[this.selectIndex]&&this.$set(this.displayArr,this.selectIndex,"　"),this.$set(this.displayArr,t,"__"),this.selectIndex=t)},fill:function(t){if("__"===this.displayArr[this.selectIndex]){if("　"!==t){if(this.answerArr[this.selectIndex]===t?(this.$set(this.displayArr,this.selectIndex,t),this.rightCount++):(this.$set(this.displayArr,this.selectIndex,"("+this.answerArr[this.selectIndex]+")"),this.wrongCount++),this.repeat||(this.keyArr[this.answerArr[this.selectIndex]-1]="　"),this.rightCount+this.wrongCount===this.n){var e=this.midTime-this.startTime-3e3,r=(new Date).getTime()-this.midTime,i=Object(n["a"])(e),s=Object(n["a"])(r);return this.score=this.n+" 记住 "+this.rightCount+" 个\n记忆时长 "+i+"\n填写时长 "+s,this.scoreEn=this.n+" remember "+this.rightCount+"\nmemory time: "+Object(n["b"])(e)+"\nanswer time: "+Object(n["b"])(r),this.showScore=!0,void h.a.clickStat("MemoryScore",{rightcount:this.rightCount,n:this.n,symbol:String.fromCodePoint(this.symbol),memorytime:e,answertime:r,memorytimecn:i,answertimecn:s})}do{this.selectIndex++,void 0===this.displayArr[this.selectIndex]&&(this.selectIndex=0)}while("　"!==this.displayArr[this.selectIndex]);this.jump(this.selectIndex)}}else console.log("不会出现的情况")},Refresh:function(){this.$router.replace("/Refresh")}}},u=c,l=(r("d96e"),r("2877")),d=Object(l["a"])(u,i,s,!1,null,"e49d819e",null);e["default"]=d.exports},f5b2:function(t,e,r){"use strict";var i=r("23e7"),s=r("6547").codeAt;i({target:"String",proto:!0},{codePointAt:function(t){return s(this,t)}})},f6d6:function(t,e,r){var i=r("23e7"),s=r("23cb"),n=String.fromCharCode,o=String.fromCodePoint,h=!!o&&1!=o.length;i({target:"String",stat:!0,forced:h},{fromCodePoint:function(t){var e,r=[],i=arguments.length,o=0;while(i>o){if(e=+arguments[o++],s(e,1114111)!==e)throw RangeError(e+" is not a valid code point");r.push(e<65536?n(e):n(55296+((e-=65536)>>10),e%1024+56320))}return r.join("")}})}}]);
//# sourceMappingURL=chunk-8b77994a.0b0ade6d.js.map