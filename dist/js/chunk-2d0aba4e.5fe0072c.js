(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aba4e"],{"15c7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Menu"},[a("van-cell-group",{attrs:{title:"选项 Options"}},[a("van-cell",{attrs:{center:"",title:"行列数",label:"Row and Column",value:""}},[a("van-row",[a("van-col",{attrs:{span:"12"}},[a("van-stepper",{attrs:{min:1,"button-size":t.bottonSize},model:{value:t.row,callback:function(e){t.row=e},expression:"row"}})],1),a("van-col",{attrs:{span:"12"}},[a("van-stepper",{attrs:{min:1,"button-size":t.bottonSize},model:{value:t.col,callback:function(e){t.col=e},expression:"col"}})],1)],1)],1),a("van-cell",{attrs:{center:"",title:"数字范围",label:"Number Range",value:""}},[a("van-row",[a("van-col",{attrs:{span:"12"}},[a("van-stepper",{attrs:{min:0,max:t.a2,"button-size":t.bottonSize},model:{value:t.a1,callback:function(e){t.a1=e},expression:"a1"}})],1),a("van-col",{attrs:{span:"12"}},[a("van-stepper",{attrs:{min:t.a1,max:99,"button-size":t.bottonSize},model:{value:t.a2,callback:function(e){t.a2=e},expression:"a2"}})],1)],1)],1),a("van-cell",{attrs:{center:"",title:"根据行列数计算数字范围",label:"Calculate Number Range by rows and columns"},on:{click:function(e){return t.range()}}})],1),a("van-divider",{style:{borderColor:"#1989fa"}}),a("van-cell-group",{attrs:{title:"开始 Start"}},[a("van-cell",{attrs:{title:"数字记忆",label:"Number Memory"},on:{click:function(e){return t.memory("0"+t.a1,t.a2-t.a1)}}}),a("van-cell",{attrs:{title:"大写字母记忆",label:"Upper Case Letters Memory"},on:{click:function(e){return t.memory("A",26)}}}),a("van-cell",{attrs:{title:"小写字母记忆",label:"Lower Case Letters Memory"},on:{click:function(e){return t.memory("a",26)}}}),a("van-cell",{attrs:{title:"平假名记忆",label:"Japanese Hiragana Memory"},on:{click:function(e){return t.memory("ぁ",86)}}}),a("van-cell",{attrs:{title:"片假名记忆",label:"Japanese Katakana Memory"},on:{click:function(e){return t.memory("ァ",95)}}}),a("van-cell",{attrs:{title:"动物图形记忆",label:"Animal Memory"},on:{click:function(e){return t.memory("🐭",17)}}}),a("van-cell",{attrs:{title:"约会图形记忆",label:"Dating Event Memory"},on:{click:function(e){return t.memory("🎠",52)}}})],1)],1)},l=[],r=(a("ac1f"),a("5319"),{data:function(){return{bottonSize:"20px",a1:0,a2:25,row:5,col:5}},methods:{memory:function(t,e){this.$router.replace("/Memory?row="+this.row+"&col="+this.col+"&symbol="+t+"&keyLen="+e)},range:function(){this.a2=this.a1+this.row*this.col}}}),o=r,c=a("2877"),i=Object(c["a"])(o,n,l,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0aba4e.5fe0072c.js.map