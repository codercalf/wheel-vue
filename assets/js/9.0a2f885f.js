(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{306:function(n,t){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},307:function(n,t,o){var r=o(24),f="["+o(306)+"]",c=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),i=function(n){return function(t){var o=String(r(t));return 1&n&&(o=o.replace(c,"")),2&n&&(o=o.replace(v,"")),o}};n.exports={start:i(1),end:i(2),trim:i(3)}},308:function(n,t,o){"use strict";var r=o(1),f=o(307).trim;r({target:"String",proto:!0,forced:o(309)("trim")},{trim:function(){return f(this)}})},309:function(n,t,o){var r=o(3),f=o(306);n.exports=function(n){return r((function(){return!!f[n]()||"​᠎"!="​᠎"[n]()||f[n].name!==n}))}},318:function(n,t,o){var r=o(5),f=o(96);n.exports=function(n,t,o){var c,v;return f&&"function"==typeof(c=t.constructor)&&c!==o&&r(v=c.prototype)&&v!==o.prototype&&f(n,v),n}},320:function(n,t,o){"use strict";var r=o(7),f=o(4),c=o(95),v=o(19),i=o(9),a=o(26),s=o(318),e=o(48),l=o(3),d=o(29),p=o(71).f,_=o(25).f,u=o(8).f,g=o(307).trim,h=f.Number,w=h.prototype,b="Number"==a(d(w)),m=function(n){var t,o,r,f,c,v,i,a,s=e(n,!1);if("string"==typeof s&&s.length>2)if(43===(t=(s=g(s)).charCodeAt(0))||45===t){if(88===(o=s.charCodeAt(2))||120===o)return NaN}else if(48===t){switch(s.charCodeAt(1)){case 66:case 98:r=2,f=49;break;case 79:case 111:r=8,f=55;break;default:return+s}for(v=(c=s.slice(2)).length,i=0;i<v;i++)if((a=c.charCodeAt(i))<48||a>f)return NaN;return parseInt(c,r)}return+s};if(c("Number",!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var N,y=function(n){var t=arguments.length<1?0:n,o=this;return o instanceof y&&(b?l((function(){w.valueOf.call(o)})):"Number"!=a(o))?s(new h(m(t)),o,y):m(t)},E=r?p(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;E.length>I;I++)i(h,N=E[I])&&!i(y,N)&&u(y,N,_(h,N));y.prototype=w,w.constructor=y,v(f,"Number",y)}},343:function(n,t,o){},344:function(n,t,o){},345:function(n,t,o){},392:function(n,t,o){"use strict";o(343)},393:function(n,t,o){"use strict";o(344)},394:function(n,t,o){"use strict";o(345)},415:function(n,t,o){"use strict";o.r(t);o(308),o(47),o(67),o(320),o(92),o(93);var r={name:"fliRow",props:{gutter:{type:[Number,String]}},computed:{rowStyle:function(){var n=this.gutter;return{marginLeft:-n/2+"px",marginRight:-n/2+"px"}}},mounted:function(){var n=this;this.$children.forEach((function(t){t.gutter=n.gutter}))}},f=(o(392),o(46)),c=Object(f.a)(r,(function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"row",style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"34208b6c",null).exports,v=o(44),i=(o(97),o(172),o(174),function(n){var t=Object.keys(n),o=!0;return t.forEach((function(n){["span","offset"].includes(n)||(o=!1)})),o}),a={name:"fliCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},iPad:{type:Object,validator:i},narrowPc:{type:Object,validator:i},pc:{type:Object,validator:i},widePc:{type:Object,validator:i}},data:function(){return{gutter:0}},methods:{createClasses:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!n)return[];var o=[];return n.span&&o.push("col-".concat(t).concat(n.span)),n.offset&&o.push("offset-".concat(t).concat(n.offset)),o}},computed:{colClass:function(){var n=this.span,t=this.offset,o=this.iPad,r=this.narrowPc,f=this.pc,c=this.widePc,i=this.createClasses;return[].concat(Object(v.a)(i({span:n,offset:t})),Object(v.a)(i(o,"iPad-")),Object(v.a)(i(r,"narrowPc-")),Object(v.a)(i(f,"pc-")),Object(v.a)(i(c,"widePc-")))},colStyle:function(){return{paddingRight:this.gutter/2+"px",paddingLeft:this.gutter/2+"px"}}}},s=(o(393),{components:{"f-row":c,"f-col":Object(f.a)(a,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[t("div",[this._t("default")],2)])}),[],!1,null,"066048a4",null).exports},data:function(){return{content:'\n    * {\n    box-sizing: border-box;\n     }\n    <f-row align="center">\n        <f-col span="8">\n            <div>8</div>\n        </f-col>\n        <f-col span="8">\n            <div>8</div>\n        </f-col>\n        <f-col span="8">\n            <div>8</div>\n        </f-col>\n    </f-row>\n    <f-row align="center">\n        <f-col span="6">\n            <div>6</div>\n        </f-col>\n        <f-col span="6">\n            <div>6</div>\n        </f-col>\n        <f-col span="6">\n            <div>6</div>\n        </f-col>\n        <f-col span="6">\n            <div>6</div>\n        </f-col>\n    </f-row>\n    <f-row align="center">\n        <f-col span="4">\n            <div>4</div>\n        </f-col>\n        <f-col span="4">\n            <div>4</div>\n        </f-col>\n        <f-col span="4">\n            <div>4</div>\n        </f-col>\n        <f-col span="4">\n            <div>4</div>\n        </f-col>\n        <f-col span="4">\n            <div>4</div>\n        </f-col>\n        <f-col span="4">\n            <div>4</div>\n        </f-col>\n    </f-row>\n    <f-row align="center">\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n    </f-row>\n  '.replace(/\s{2,}/,"").trim(),content1:'\n     <f-row align="center" gutter="10">\n        <f-col span="8">\n            <div>8</div>\n        </f-col>\n        <f-col span="8">\n            <div>8</div>\n        </f-col>\n        <f-col span="8">\n            <div>8</div>\n        </f-col>\n    </f-row>\n    <f-row align="center" gutter="10">\n        <f-col span="6">\n            <div>6</div>\n        </f-col>\n        <f-col span="6">\n            <div>6</div>\n        </f-col>\n        <f-col span="6">\n            <div>6</div>\n        </f-col>\n        <f-col span="6">\n            <div>6</div>\n        </f-col>\n    </f-row>'.replace(/\s{2,}/,"").trim(),content2:'\n            <f-row gutter="10" align="center">\n        <f-col span="8">\n            <div>8</div>\n        </f-col>\n        <f-col span="8" offset="8">\n            <div>8</div>\n        </f-col>\n    </f-row>\n    <f-row gutter="10" align="center">\n        <f-col span="6" offset="6">\n            <div>6</div>\n        </f-col>\n        <f-col span="6" offset="6">\n            <div>6</div>\n        </f-col>\n    </f-row>\n    <f-row gutter="10" align="center">\n        <f-col span="4">\n            <div>4</div>\n        </f-col>\n        <f-col span="4" offset="4">\n            <div>4</div>\n        </f-col>\n        <f-col span="4" offset="8">\n            <div>4</div>\n        </f-col>\n    </f-row>\n    <f-row gutter="10" align="center">\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2" offset="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2" offset="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2" offset="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2" offset="2">\n            <div>2</div>\n        </f-col>\n    </f-row>\n            '.replace(/\s{2,}/,"").trim()}}}),e=(o(394),Object(f.a)(s,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("h3",[n._v("24网格")]),n._v(" "),o("hr"),n._v(" "),o("f-row",{attrs:{align:"center"}},[o("f-col",{attrs:{span:"8"}},[o("div",[n._v("8")])]),n._v(" "),o("f-col",{attrs:{span:"8"}},[o("div",[n._v("8")])]),n._v(" "),o("f-col",{attrs:{span:"8"}},[o("div",[n._v("8")])])],1),n._v(" "),o("f-row",{attrs:{align:"center"}},[o("f-col",{attrs:{span:"6"}},[o("div",[n._v("6")])]),n._v(" "),o("f-col",{attrs:{span:"6"}},[o("div",[n._v("6")])]),n._v(" "),o("f-col",{attrs:{span:"6"}},[o("div",[n._v("6")])]),n._v(" "),o("f-col",{attrs:{span:"6"}},[o("div",[n._v("6")])])],1),n._v(" "),o("f-row",{attrs:{align:"center"}},[o("f-col",{attrs:{span:"4"}},[o("div",[n._v("4")])]),n._v(" "),o("f-col",{attrs:{span:"4"}},[o("div",[n._v("4")])]),n._v(" "),o("f-col",{attrs:{span:"4"}},[o("div",[n._v("4")])]),n._v(" "),o("f-col",{attrs:{span:"4"}},[o("div",[n._v("4")])]),n._v(" "),o("f-col",{attrs:{span:"4"}},[o("div",[n._v("4")])]),n._v(" "),o("f-col",{attrs:{span:"4"}},[o("div",[n._v("4")])])],1),n._v(" "),o("f-row",{attrs:{align:"center"}},[o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])])],1),n._v(" "),o("h4",[n._v("代码")]),n._v(" "),o("pre",[o("code",[n._v(n._s(n.content))])]),n._v(" "),o("br"),n._v(" "),o("h3",[n._v("设置 gutter")]),n._v(" "),o("hr"),n._v(" "),o("h4",[n._v("预览")]),n._v(" "),o("f-row",{attrs:{gutter:"10",align:"center"}},[o("f-col",{attrs:{span:"8"}},[o("div",[n._v("8")])]),n._v(" "),o("f-col",{attrs:{span:"8"}},[o("div",[n._v("8")])]),n._v(" "),o("f-col",{attrs:{span:"8"}},[o("div",[n._v("8")])])],1),n._v(" "),o("f-row",{attrs:{gutter:"10",align:"center"}},[o("f-col",{attrs:{span:"6"}},[o("div",[n._v("6")])]),n._v(" "),o("f-col",{attrs:{span:"6"}},[o("div",[n._v("6")])]),n._v(" "),o("f-col",{attrs:{span:"6"}},[o("div",[n._v("6")])]),n._v(" "),o("f-col",{attrs:{span:"6"}},[o("div",[n._v("6")])])],1),n._v(" "),o("h4",[n._v("代码")]),n._v(" "),o("pre",[o("code",[n._v(n._s(n.content1))])]),n._v(" "),o("br"),n._v(" "),o("h3",[n._v("设置 空隙")]),n._v(" "),o("hr"),n._v(" "),o("h4",[n._v("预览")]),n._v(" "),o("f-row",{attrs:{gutter:"10",align:"center"}},[o("f-col",{attrs:{span:"8"}},[o("div",[n._v("8")])]),n._v(" "),o("f-col",{attrs:{span:"8",offset:"8"}},[o("div",[n._v("8")])])],1),n._v(" "),o("f-row",{attrs:{gutter:"10",align:"center"}},[o("f-col",{attrs:{span:"6",offset:"6"}},[o("div",[n._v("6")])]),n._v(" "),o("f-col",{attrs:{span:"6",offset:"6"}},[o("div",[n._v("6")])])],1),n._v(" "),o("f-row",{attrs:{gutter:"10",align:"center"}},[o("f-col",{attrs:{span:"4"}},[o("div",[n._v("4")])]),n._v(" "),o("f-col",{attrs:{span:"4",offset:"4"}},[o("div",[n._v("4")])]),n._v(" "),o("f-col",{attrs:{span:"4",offset:"8"}},[o("div",[n._v("4")])])],1),n._v(" "),o("f-row",{attrs:{gutter:"10",align:"center"}},[o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2",offset:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2",offset:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2",offset:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2",offset:"2"}},[o("div",[n._v("2")])])],1),n._v(" "),o("h4",[n._v("代码")]),n._v(" "),o("pre",[o("code",[n._v(n._s(n.content2))])])],1)}),[],!1,null,null,null));t.default=e.exports}}]);