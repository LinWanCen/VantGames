(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ec73"],{b18f:function(n,t,a){"use strict";a.r(t);var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"Menu"},[a("van-cell-group",{attrs:{title:"选项 Options"}},[a("van-cell",{attrs:{center:"",title:"题数",label:"Number of Questions",value:""}},[a("van-row",[a("van-col",{attrs:{span:"4"}},[a("span",{on:{click:function(t){n.n=5}}},[n._v("5")])]),a("van-col",{attrs:{span:"4"}},[a("span",{on:{click:function(t){n.n=10}}},[n._v("10")])]),a("van-col",{attrs:{span:"4"}},[a("span",{on:{click:function(t){n.n=25}}},[n._v("25")])]),a("van-col",{attrs:{span:"4"}},[a("span",{on:{click:function(t){n.n=50}}},[n._v("50")])]),a("van-col",{attrs:{span:"4"}},[a("span",{on:{click:function(t){n.n=50}}},[n._v("60")])]),a("van-col",{attrs:{span:"4"}},[a("span",{on:{click:function(t){n.n=100}}},[n._v("100")])])],1),a("van-stepper",{attrs:{min:1,step:5},model:{value:n.n,callback:function(t){n.n=t},expression:"n"}})],1),a("van-cell",{attrs:{center:"",title:"数字A范围",label:"Number Range of A",value:""}},[a("van-row",n._l(10,(function(t){return a("van-col",{key:t,attrs:{span:"2"}},[a("span",{on:{click:function(a){return n.clickRange("a1","a2",t-1)}}},[n._v(n._s(t-1))])])})),1),a("van-row",[a("van-col",{attrs:{span:"12"}},[a("van-stepper",{attrs:{min:0,max:n.a2,"button-size":n.bottonSize},model:{value:n.a1,callback:function(t){n.a1=t},expression:"a1"}})],1),a("van-col",{attrs:{span:"12"}},[a("van-stepper",{attrs:{min:n.a1,"button-size":n.bottonSize},model:{value:n.a2,callback:function(t){n.a2=t},expression:"a2"}})],1)],1)],1),a("van-cell",{attrs:{center:"",title:"数字B范围",label:"Number Range of B",value:""}},[a("van-row",n._l(10,(function(t){return a("van-col",{key:t,attrs:{span:"2"}},[a("span",{on:{click:function(a){return n.clickRange("b1","b2",t-1)}}},[n._v(n._s(t-1))])])})),1),a("van-row",[a("van-col",{attrs:{span:"12"}},[a("van-stepper",{attrs:{min:0,max:n.b2,"button-size":n.bottonSize},model:{value:n.b1,callback:function(t){n.b1=t},expression:"b1"}})],1),a("van-col",{attrs:{span:"12"}},[a("van-stepper",{attrs:{min:n.b1,"button-size":n.bottonSize},model:{value:n.b2,callback:function(t){n.b2=t},expression:"b2"}})],1)],1)],1),a("van-cell",{attrs:{center:"",title:"运算范围",label:"Operation Range",value:""}},[a("van-row",[a("van-col",{attrs:{span:"4"}}),a("van-col",{attrs:{span:"4"}},[a("span",{on:{click:function(t){return n.clickRange("f1","f2",0,2)}}},[n._v(" + ")])]),a("van-col",{attrs:{span:"4"}},[a("span",{on:{click:function(t){return n.clickRange("f1","f2",1,2)}}},[n._v(" - ")])]),a("van-col",{attrs:{span:"4"}},[a("span",{on:{click:function(t){return n.clickRange("f1","f2",2,2)}}},[n._v(" × ")])]),a("van-col",{attrs:{span:"4"}},[a("span",{on:{click:function(t){return n.clickRange("f1","f2",3,2)}}},[n._v(" ÷ ")])]),a("van-col",{attrs:{span:"4"}},[a("span",{on:{click:function(t){return n.clickRange("f1","f2",4,2)}}},[n._v(" ^ ")])])],1),a("van-row",[a("van-col",{attrs:{span:"12"}},[a("van-stepper",{attrs:{min:0,max:n.f2,"button-size":n.bottonSize},model:{value:n.f1,callback:function(t){n.f1=t},expression:"f1"}})],1),a("van-col",{attrs:{span:"12"}},[a("van-stepper",{attrs:{min:n.f1,max:4,"button-size":n.bottonSize},model:{value:n.f2,callback:function(t){n.f2=t},expression:"f2"}})],1)],1)],1)],1),a("van-divider",{style:{borderColor:"#1989fa"}}),a("van-cell-group",{attrs:{title:"开始 Start"}},[a("van-cell",{attrs:{title:"心算",label:"Mental Arithmetic",to:"/MentalArithmetic?n="+n.n+"&a1="+n.a1+"&a2="+n.a2+"&b1="+n.b1+"&b2="+n.b2+"&f1="+n.f1+"&f2="+n.f2}})],1)],1)},c=[],l={data:function(){return{bottonSize:"20px",a1:0,a2:9,b1:0,b2:9,f1:0,f2:2,n:25}},methods:{clickRange:function(n,t,a){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:9;this[n]===a&&this[t]===a?(this[n]=0,this[t]=e):(this[n]=a,this[t]=a)}}},o=l,s=a("2877"),i=Object(s["a"])(o,e,c,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d20ec73.8c739161.js.map