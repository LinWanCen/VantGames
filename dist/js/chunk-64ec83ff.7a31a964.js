(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64ec83ff"],{"25f0":function(t,n,e){"use strict";var r=e("6eeb"),s=e("825a"),i=e("d039"),a=e("ad6d"),o="toString",u=RegExp.prototype,h=u[o],c=i((function(){return"/a/b"!=h.call({source:"a",flags:"b"})})),f=h.name!=o;(c||f)&&r(RegExp.prototype,o,(function(){var t=s(this),n=String(t.source),e=t.flags,r=String(void 0===e&&t instanceof RegExp&&!("flags"in u)?a.call(t):e);return"/"+n+"/"+r}),{unsafe:!0})},4453:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("MentalArithmeticLine",{attrs:{question:t.questions[t.currentIndex-2]}}),e("MentalArithmeticLine",{attrs:{question:t.questions[t.currentIndex-1]}}),e("MentalArithmeticLine",{style:t.answerStyle,attrs:{question:t.questions[t.currentIndex],answer:t.currentInput}}),e("MentalArithmeticLine",{attrs:{question:t.questions[t.currentIndex+1],answer:""}}),e("van-number-keyboard",{attrs:{"extra-key":" ","hide-on-click-outside":!1,show:!0,"v-model":t.currentInput},on:{input:t.onInput,delete:t.onDelete}}),e("van-popup",{attrs:{"safe-area-inset-bottom":"",duration:"0","close-on-click-overlay":!1,closeable:!0,position:"bottom"},on:{closed:t.Refresh},model:{value:t.showScore,callback:function(n){t.showScore=n},expression:"showScore"}},[e("pre",{staticClass:"game_formula",staticStyle:{"font-size":"30px"}},[t._v(t._s(t.score))]),e("pre",{staticClass:"game_formula",staticStyle:{"margin-top":"0","font-size":"20px"}},[t._v(t._s(t.scoreEn))])]),e("Start")],1)},s=[],i=(e("d3b7"),e("ac1f"),e("25f0"),e("5319"),e("86bf")),a=e("9579"),o=e.n(a),u=function(){return e.e("chunk-2d21d0d1").then(e.bind(null,"d03b"))},h=function(){return e.e("chunk-2d0e9b73").then(e.bind(null,"8f5d"))},c={components:{Start:u,MentalArithmeticLine:h},data:function(){return{startTime:(new Date).getTime(),showScore:!1,score:"",scoreEn:"",questions:[],currentIndex:0,currentInput:"_",answerStyle:"",n:this.intParam("n",25),a1:this.intParam("a1",0),a2:this.intParam("a2",10),b1:this.intParam("b1",0),b2:this.intParam("b2",10),f1:this.intParam("f1",0),f2:this.intParam("f2",3)}},created:function(){for(var t=this.a2-this.a1+1,n=this.b2-this.b1+1,e=this.f2-this.f1+1,r=0;r<this.n;r++){var s=this.a1+Math.floor(Math.random()*t),i=this.b1+Math.floor(Math.random()*n),a=this.f1+Math.floor(Math.random()*e);if(3===a&&0===i){if(1===e&&1===n)break;do{i=this.b1+Math.floor(Math.random()*n),a=this.f1+Math.floor(Math.random()*e)}while(3===a&&0===i)}if(4!==a&&(3!==a||0!==s)&&1===Math.floor(2*Math.random())){var o=s;s=i,i=o}switch(a){case 0:this.questions.push({m:s,f:"+",n:i,a:s+i,ma:""});break;case 1:this.questions.push({m:s+i,f:"-",n:i,a:s,ma:""});break;case 2:this.questions.push({m:s,f:"×",n:i,a:s*i,ma:""});break;case 3:this.questions.push({m:s*i,f:"÷",n:i,a:s,ma:""});break;case 4:this.questions.push({m:s,f:"^",n:i,a:Math.pow(s,i),ma:""});break}}},mounted:function(){var t=this;document.onkeydown=function(n){var e=n.key;e>=0&&e<=9?t.onInput(e):t.onDelete()}},methods:{onInput:function(t){var n=this.questions[this.currentIndex];if("_"===this.currentInput||this.currentInput.length===n.a.toString().length?this.currentInput=""+t:this.currentInput=""+this.currentInput+t,n.a.toString().substr(0,this.currentInput.length)!==this.currentInput?this.answerStyle="color: #f25022":this.answerStyle="",n.a===1*this.currentInput)if(n.ma=this.currentInput,this.currentIndex++,this.currentIndex===this.n){for(var e=(new Date).getTime()-this.startTime-3e3,r=Object(i["a"])(e),s="",a=this.f1;a<=this.f2;a++)switch(a){case 0:s+="+";break;case 1:s+="-";break;case 2:s+="×";break;case 3:s+="÷";break;case 4:s+="^";break}this.score=this.n+" 道计算题\n耗时 "+r,this.scoreEn=this.a1+" ~ "+this.a2+" "+s+" "+this.b1+" ~ "+this.b2+"\n\n"+this.n+" calculation questions\ntakes "+Object(i["b"])(e),this.showScore=!0,o.a.clickStat("MentalArithmeticScore",{n:this.n,time:e,timecn:r,a1:this.a1,a2:this.a2,b1:this.b1,b2:this.b2,f1:this.f1,f2:this.f2,operator:s})}else this.currentInput="_"},onDelete:function(){this.currentInput=this.currentInput.substr(0,this.currentInput.length-1);var t=this.questions[this.currentIndex];t.a.toString().substr(0,this.currentInput.length)!==this.currentInput?this.answerStyle="color: #f25022":this.answerStyle="",0===this.currentInput.length&&(this.currentInput="_")},Refresh:function(){this.$router.replace("/Refresh")}}},f=c,l=e("2877"),p=Object(l["a"])(f,r,s,!1,null,null,null);n["default"]=p.exports},"86bf":function(t,n,e){"use strict";function r(t){return i(t," 时 "," 分 "," 秒")}function s(t){return i(t," hour "," minute "," second")}function i(t,n,e,r){var s,i=Math.floor(t/36e5),a=t%36e5,o=Math.floor(a/6e4),u=a%6e4,h=Math.round(u/1e3);return s=h+r,o>0&&(s=o+e+s),i>0&&(s=i+n+s),s}e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return s}))}}]);
//# sourceMappingURL=chunk-64ec83ff.7a31a964.js.map