(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{179:function(t,e,n){var content=n(182);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("e46b6ba2",content,!0,{sourceMap:!1})},180:function(t,e,n){var content=n(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("6759f5ab",content,!0,{sourceMap:!1})},181:function(t,e,n){"use strict";var l=n(179);n.n(l).a},182:function(t,e,n){(e=n(47)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s}@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}",""]),t.exports=e},183:function(t,e,n){"use strict";var l=n(180);n.n(l).a},184:function(t,e,n){(e=n(47)(!1)).push([t.i,".box{border-radius:20px}@media(max-width:767px){.reverse-columns{flex-direction:column-reverse;display:flex}}",""]),t.exports=e},185:function(t,e,n){"use strict";n.r(e);n(181);var l=n(20),r=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"150px",height:"150px",viewBox:"0 0 54 22",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("title",[this._v("COVID19 Jharkhand")]),this._v(" "),e("desc",[this._v("Created with Sketch.")]),this._v(" "),e("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","font-family":"Ubuntu-Bold, Ubuntu","font-size":"13","font-weight":"bold","letter-spacing":"-0.424086722","line-spacing":"11"}},[e("g",{attrs:{id:"Artboard",transform:"translate(-131.000000, -177.000000)"}},[e("text",{attrs:{id:"COVID19-Jharkhand"}},[e("tspan",{attrs:{x:"131.115213",y:"191",fill:"#464646"}},[this._v("COVID19")]),this._v(" "),e("tspan",{attrs:{x:"131",y:"202.962006","font-family":"Ubuntu-Regular, Ubuntu","font-size":"12","font-weight":"normal","letter-spacing":"-0.391464667",fill:"#3BCCA7"}},[this._v("Jharkhand")])])])])])}),[],!1,null,null,null).exports,o={data:function(){return{count:0}},components:{}},c=Object(l.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[n("img",{attrs:{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"}})]),t._v(" "),n("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[n("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{attrs:{"aria-hidden":"true"}})])]),t._v(" "),n("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[n("div",{staticClass:"navbar-start"},[n("a",{staticClass:"navbar-item"},[t._v("\n        Home\n      ")]),t._v(" "),n("a",{staticClass:"navbar-item"},[t._v("\n        Documentation\n      ")])]),t._v(" "),n("div",{staticClass:"navbar-end"})])])}],!1,null,null,null).exports,v={data:function(){return{toggle:!0}}},d=Object(l.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("aside",{staticClass:"menu",class:{"is-hidden-touch":t.toggle},staticStyle:{padding:"20px"}},[n("p",{staticClass:"menu-label"},[t._v("\n    General\n  ")]),t._v(" "),t._m(0),t._v(" "),n("p",{staticClass:"menu-label"},[t._v("\n    Covid Help\n  ")]),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"menu-list"},[e("li",[e("a",[this._v("Cases")])]),this._v(" "),e("li",[e("a",[this._v("Hospitals")])]),this._v(" "),e("li",[e("a",[this._v("Tests")])]),this._v(" "),e("li",[e("a",[this._v("Quarantined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"menu-list"},[e("li",[e("a",[this._v("Immigrants")])]),this._v(" "),e("li",[e("a",[this._v("S.O.S")])]),this._v(" "),e("li",[e("a",[this._v("Community Kitchen")])])])}],!1,null,null,null).exports,h={data:function(){return{}}},_={data:function(){return{state:{}}},components:{Logo:r,Nav:c,Footer:Object(l.a)(h,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"has-text-grey-light has-text-weight-semibold"},[e("div",{staticClass:"is-size-7 has-text-centered"},[e("a",{attrs:{href:"https://github.com/CodeForJharkhand/covid",target:"_blank"}},[this._v("Open Source Project ")]),this._v("  by "),e("a",{attrs:{href:"https://twitter.com/codeforjharkhand",target:"_blank"}},[this._v("Code For Jharkhand")])])])}],!1,null,null,null).exports,Sidenav:d},methods:{getStats:function(t){var e=this;this.$axios.$get("https://covidtrace.xyz/api/jharkhand").then((function(data){console.log(data),e.state=data})).catch((function(t){console.log(t)}))}},mounted:function(){this.getStats("Jharkhand")}},m=(n(183),Object(l.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"containerx"},[n("div",{staticClass:"columns is-multiline"},[n("div",{staticClass:"column is-2"},[n("div",{staticClass:"has-text-centered"},[n("Logo")],1),t._v(" "),n("Sidenav")],1),t._v(" "),n("div",{staticClass:"column is-10"},[n("div",{staticClass:"container"},[t.state[0]?n("div",{staticClass:"columns is-desktop is-mobile is-multiline",staticStyle:{padding:"30px"}},[n("div",{staticClass:"column is-3-desktop is-6-mobile"},[n("div",{staticClass:"box has-text-centered has-text-info has-text-weight-bold\t"},[n("div",{staticClass:"is-size-6 is-capitalized "},[t._v("confirmed")]),t._v(" "),n("div",{staticClass:"is-size-4"},[t._v("\n                          "+t._s(t.state[0].confirmed)+"\n                      ")])])]),t._v(" "),n("div",{staticClass:"column is-3-desktop is-6-mobile"},[n("div",{staticClass:"box has-text-centered has-text-danger has-text-weight-bold"},[n("div",{staticClass:"is-size-6 is-capitalized "},[t._v("active")]),t._v(" "),n("div",{staticClass:"is-size-4"},[t._v("\n                          "+t._s(t.state[0].active)+"\n                      ")])])]),t._v(" "),n("div",{staticClass:"column is-3-desktop is-6-mobile"},[n("div",{staticClass:"box has-text-centered has-text-weight-bold"},[n("div",{staticClass:"is-size-6 is-capitalized"},[t._v("Fatals")]),t._v(" "),n("div",{staticClass:"is-size-4"},[t._v("\n                          "+t._s(t.state[0].deaths)+"\n                      ")])])]),t._v(" "),n("div",{staticClass:"column is-3-desktop is-6-mobile"},[n("div",{staticClass:"box has-text-centered has-text-success has-text-weight-bold"},[n("div",{staticClass:"is-size-6 is-capitalized"},[t._v("recovered")]),t._v(" "),n("div",{staticClass:"is-size-4"},[t._v("\n                          "+t._s(t.state[0].recovered)+"\n                      ")])])])]):t._e()])])])]),t._v(" "),n("Footer")],1)}),[],!1,null,null,null));e.default=m.exports}}]);