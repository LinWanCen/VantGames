(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25c2a30d"],{4453:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Start"),n("MentalArithmeticLine",{attrs:{question:t.questions[t.currentIndex-2]}}),n("MentalArithmeticLine",{attrs:{question:t.questions[t.currentIndex-1]}}),n("MentalArithmeticLine",{attrs:{question:t.questions[t.currentIndex],answer:t.currentInput}}),n("MentalArithmeticLine",{attrs:{question:t.questions[t.currentIndex+1],answer:""}}),n("van-number-keyboard",{attrs:{"extra-key":" ","delete-button-text":"🗑️","hide-on-click-outside":!1,show:!0,"v-model":t.currentInput},on:{input:t.onInput,delete:t.onDelete}}),n("van-popup",{attrs:{"safe-area-inset-bottom":"",duration:"0","close-on-click-overlay":!1,closeable:!0,position:"bottom"},on:{closed:t.Refresh},model:{value:t.showScore,callback:function(e){t.showScore=e},expression:"showScore"}},[n("pre",{staticClass:"game_formula",staticStyle:{"font-size":"30px"}},[t._v(t._s(t.score))]),n("pre",{staticClass:"game_formula",staticStyle:{"margin-top":"0","font-size":"20px"}},[t._v(t._s(t.scoreEn))])])],1)},i=[],r=(n("d3b7"),n("ac1f"),n("5319"),n("86bf")),a=n("9579"),o=n.n(a),u=function(){return n.e("chunk-2d21d0d1").then(n.bind(null,"d03b"))},c=function(){return n.e("chunk-2d0e9b73").then(n.bind(null,"8f5d"))},h={components:{Start:u,MentalArithmeticLine:c},data:function(){return{startTime:(new Date).getTime(),showScore:!1,score:"",scoreEn:"",questions:[],currentIndex:0,currentInput:"_",n:this.intParam("n",25),a1:this.intParam("a1",0),a2:this.intParam("a2",10),b1:this.intParam("b1",0),b2:this.intParam("b2",10),f1:this.intParam("f1",0),f2:this.intParam("f2",3)}},created:function(){for(var t=this.a2-this.a1+1,e=this.b2-this.b1+1,n=this.f2-this.f1+1,s=0;s<this.n;s++){var i=this.a1+Math.floor(Math.random()*t),r=this.b1+Math.floor(Math.random()*e),a=this.f1+Math.floor(Math.random()*n);switch(a){case 0:this.questions.push({m:i,f:"+",n:r,a:i+r,ma:""});break;case 1:this.questions.push({m:i+r,f:"-",n:r,a:i,ma:""});break;case 2:this.questions.push({m:i,f:"×",n:r,a:i*r,ma:""});break;case 3:this.questions.push({m:i*r,f:"÷",n:r,a:i,ma:""});break;case 4:this.questions.push({m:i,f:"^",n:r,a:Math.pow(i,r),ma:""});break}}},mounted:function(){var t=this;document.onkeydown=function(e){var n=e.key;n>=0&&n<=9?t.onInput(n):t.onDelete()}},methods:{onInput:function(t){"_"===this.currentInput||2===this.currentInput.length?this.currentInput=""+t:this.currentInput=""+this.currentInput+t;var e=this.questions[this.currentIndex];if(e.a===1*this.currentInput){if(e.ma=this.currentInput,this.currentIndex++,this.currentIndex===this.n){for(var n=(new Date).getTime()-this.startTime-3e3,s=Object(r["a"])(n),i="",a=this.f1;a<=this.f2;a++)switch(a){case 0:i+="+";break;case 1:i+="-";break;case 2:i+="×";break;case 3:i+="÷";break;case 4:i+="^";break}return this.score=this.n+" 道计算题\n耗时 "+s,this.scoreEn=this.a1+" ~ "+this.a2+" "+i+" "+this.b1+" ~ "+this.b2+"\n\n"+this.n+" calculation questions\ntakes "+Object(r["b"])(n),this.showScore=!0,void o.a.clickStat("MentalArithmeticScore",{n:this.n,time:n,timecn:s,a1:this.a1,a2:this.a2,b1:this.b1,b2:this.b2,f1:this.f1,f2:this.f2,operator:i})}this.currentInput="_"}},onDelete:function(){this.currentInput="_"},Refresh:function(){this.$router.replace("/Refresh")}}},f=h,l=n("2877"),m=Object(l["a"])(f,s,i,!1,null,null,null);e["default"]=m.exports},"86bf":function(t,e,n){"use strict";function s(t){return r(t," 时 "," 分 "," 秒")}function i(t){return r(t," hour "," minute "," second")}function r(t,e,n,s){var i,r=Math.floor(t/36e5),a=t%36e5,o=Math.floor(a/6e4),u=a%6e4,c=Math.round(u/1e3);return i=c+s,o>0&&(i=o+n+i),r>0&&(i=r+e+i),i}n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i}))}}]);
//# sourceMappingURL=chunk-25c2a30d.2a9cb2b6.js.map