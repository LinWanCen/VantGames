(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e32b392"],{1148:function(e,t,n){"use strict";var a=n("a691"),r=n("1d80");e.exports="".repeat||function(e){var t=String(r(this)),n="",i=a(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n}},"15c7":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Menu"},[n("van-cell-group",{attrs:{title:"选项 Options"}},[n("van-cell",{attrs:{center:"",title:"隐藏找到的",label:"Hide Found",value:""}},[n("van-switch",{model:{value:e.hideFound,callback:function(t){e.hideFound=t},expression:"hideFound"}})],1),n("van-cell",{attrs:{center:"",title:"键盘",label:"Keyboard",value:""}},[n("van-switch",{on:{input:e.switchKeyboard},model:{value:e.keyboard,callback:function(t){e.keyboard=t},expression:"keyboard"}})],1),n("van-cell",{attrs:{center:"",title:"行式",label:"Line",value:""}},[n("van-switch",{on:{input:e.switchLine},model:{value:e.line,callback:function(t){e.line=t},expression:"line"}})],1),n("van-cell",{attrs:{center:"",title:"重复",label:"Repeat",value:""}},[n("van-switch",{model:{value:e.repeat,callback:function(t){e.repeat=t},expression:"repeat"}})],1),n("van-cell",{attrs:{center:"",title:"行列数",label:"Row and Column",value:""}},[n("van-row",e._l(4,(function(t){return n("van-col",{key:t,attrs:{span:"4"}},[n("span",{on:{click:function(n){e.row=t+1,e.col=t+1}}},[e._v(e._s(t+1))])])})),1),n("van-row",[n("van-col",{attrs:{span:"12"}},[n("van-stepper",{attrs:{min:1,"button-size":e.buttonSize},model:{value:e.row,callback:function(t){e.row=t},expression:"row"}})],1),n("van-col",{attrs:{span:"12"}},[n("van-stepper",{attrs:{min:1,"button-size":e.buttonSize},model:{value:e.col,callback:function(t){e.col=t},expression:"col"}})],1)],1)],1),n("van-cell",{attrs:{center:"",title:"数字范围",label:"Number Range",value:""}},[n("van-row",[n("van-col",{attrs:{span:"12"}},[n("span",{on:{click:function(t){e.a1=0,e.a2=9,e.repeat=!0}}},[e._v("0 ~ 9")])]),n("van-col",{attrs:{span:"12"}},[n("span",{on:{click:function(t){return e.range()}}},[e._v("row * col")])])],1),n("van-row",[n("van-col",{attrs:{span:"12"}},[n("van-stepper",{attrs:{min:0,max:e.a2,"button-size":e.buttonSize},model:{value:e.a1,callback:function(t){e.a1=t},expression:"a1"}})],1),n("van-col",{attrs:{span:"12"}},[n("van-stepper",{attrs:{min:e.a1,max:e.keyboard?9:void 0,"button-size":e.buttonSize},model:{value:e.a2,callback:function(t){e.a2=t},expression:"a2"}})],1)],1)],1),n("van-cell",{attrs:{center:"",title:"时间限制",label:"Time Limit",value:""}},[n("van-row",[n("van-col",{attrs:{span:"12"}}),n("van-col",{attrs:{span:"12"}},[n("span",{on:{click:function(t){e.time2=60}}},[e._v("60")])])],1),n("van-row",[n("van-col",{attrs:{span:"12"}},[n("van-stepper",{attrs:{min:0,"button-size":e.buttonSize},model:{value:e.time1,callback:function(t){e.time1=t},expression:"time1"}})],1),n("van-col",{attrs:{span:"12"}},[n("van-stepper",{attrs:{min:1,"button-size":e.buttonSize},model:{value:e.time2,callback:function(t){e.time2=t},expression:"time2"}})],1)],1)],1)],1),n("van-divider",{style:{borderColor:"#1989fa"}}),n("van-cell-group",{attrs:{title:"开始 Start"}},[n("van-cell",{attrs:{title:"数字记忆",label:"Number Memory"},on:{click:function(t){return e.memory("0"+e.a1,e.a2-e.a1)}}}),n("van-cell",{attrs:{title:"小写字母记忆",label:"Lower Case Letters Memory"},on:{click:function(t){return e.memory("a",26)}}}),n("van-cell",{attrs:{title:"大写字母记忆",label:"Upper Case Letters Memory"},on:{click:function(t){return e.memory("A",26)}}}),n("van-cell",{attrs:{title:"平假名记忆",label:"Japanese Hiragana Memory"},on:{click:function(t){return e.memory("ぁ",86)}}}),n("van-cell",{attrs:{title:"片假名记忆",label:"Japanese Katakana Memory"},on:{click:function(t){return e.memory("ァ",95)}}}),n("van-cell",{attrs:{title:"动物表情记忆",label:"Animal Emoji Memory"},on:{click:function(t){return e.memory("🐭",17)}}}),n("van-cell",{attrs:{title:"约会表情记忆",label:"Dating Event Emoji Memory"},on:{click:function(t){return e.memory("🎠",52)}}})],1)],1)},r=[],i=(n("ac1f"),n("38cf"),n("5319"),{data:function(){return{buttonSize:"20px",hideFound:!0,line:!1,repeat:!1,keyboard:!1,a1:0,a2:25,row:5,col:5,time1:2,time2:60}},methods:{memory:function(e,t){this.$router.replace("/Memory?row="+this.row+"&col="+this.col+"&timeLimit="+this.time1*this.time2+"&symbol="+e+"&keyLen="+t+"&hideFound="+this.hideFound+"&line="+this.line+"&repeat="+this.repeat+"&keyboard="+this.keyboard)},switchKeyboard:function(e){e?this.repeat=!0:(this.range(),this.repeat=!1),this.keyboard=e},switchLine:function(e){e?(this.a1=0,this.a2=9,this.row=4,this.repeat=!0):(this.row=5,this.range(),this.repeat=!1),this.line=e},range:function(){this.a2=this.a1+this.row*this.col}}}),l=i,o=n("2877"),s=Object(o["a"])(l,a,r,!1,null,null,null);t["default"]=s.exports},"38cf":function(e,t,n){var a=n("23e7"),r=n("1148");a({target:"String",proto:!0},{repeat:r})}}]);
//# sourceMappingURL=chunk-7e32b392.9a6d8cf7.js.map