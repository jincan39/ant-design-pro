webpackJsonp([22],{1219:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.className,n=e.type,a=e.title,l=e.description,i=e.extra,s=e.actions,c=(0,u.default)(e,["className","type","title","description","extra","actions"]),d={error:f.default.createElement(o.default,{className:y.default.error,type:"close-circle"}),success:f.default.createElement(o.default,{className:y.default.success,type:"check-circle"})},p=(0,m.default)(y.default.result,t);return f.default.createElement("div",(0,r.default)({className:p},c),f.default.createElement("div",{className:y.default.icon},d[n]),f.default.createElement("div",{className:y.default.title},a),l&&f.default.createElement("div",{className:y.default.description},l),i&&f.default.createElement("div",{className:y.default.extra},i),s&&f.default.createElement("div",{className:y.default.actions},s))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(15),r=a(i),s=n(828),o=a(s),c=n(826),u=a(c);t.default=l,n(855);var d=n(6),f=a(d),p=n(309),m=a(p),_=n(1220),y=a(_);e.exports=t.default},1220:function(e,t){e.exports={result:"result___Hm4g7",icon:"icon___3gQI1",success:"success___mKc7I",error:"error___1xqXc",title:"title___3_4zg",description:"description___1xuel",extra:"extra___2XdYc",actions:"actions___1qj92"}},1440:function(e,t){e.exports={registerResult:"registerResult___IPmKq",title:"title___2zsbu",actions:"actions___2SvTl"}},823:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(839),i=a(l);n(848);var r=n(6),s=a(r),o=n(314),c=n(1219),u=a(c),d=n(1440),f=a(d),p=s.default.createElement("div",{className:f.default.title},"\u4f60\u7684\u8d26\u6237\uff1aAntDesign@example.com \u6ce8\u518c\u6210\u529f"),m=s.default.createElement("div",{className:f.default.actions},s.default.createElement("a",{href:""},s.default.createElement(i.default,{size:"large",type:"primary"},"\u67e5\u770b\u90ae\u7bb1")),s.default.createElement(o.Link,{to:"/"},s.default.createElement(i.default,{size:"large"},"\u8fd4\u56de\u9996\u9875")));t.default=function(){return s.default.createElement(u.default,{className:f.default.registerResult,type:"success",title:p,description:"\u6fc0\u6d3b\u90ae\u4ef6\u5df2\u53d1\u9001\u5230\u4f60\u7684\u90ae\u7bb1\u4e2d\uff0c\u90ae\u4ef6\u6709\u6548\u671f\u4e3a24\u5c0f\u65f6\u3002\u8bf7\u53ca\u65f6\u767b\u5f55\u90ae\u7bb1\uff0c\u70b9\u51fb\u90ae\u4ef6\u4e2d\u7684\u94fe\u63a5\u6fc0\u6d3b\u5e10\u6237\u3002",actions:m,style:{marginTop:56}})},e.exports=t.default},826:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}},828:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(15),l=n.n(a),i=n(191),r=n.n(i),s=n(6),o=(n.n(s),n(309)),c=n.n(o),u=n(311),d=function(e){var t=e.type,n=e.className,a=void 0===n?"":n,i=e.spin,o=c()(r()({anticon:!0,"anticon-spin":!!i||"loading"===t},"anticon-"+t,!0),a);return s.createElement("i",l()({},Object(u.a)(e,["type","spin"]),{className:o}))};t.default=d},839:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(859),l=n(860);a.a.Group=l.a,t.default=a.a},848:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(310),l=(n.n(a),n(864));n.n(l)},855:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(310);n.n(a)},859:function(e,t,n){"use strict";function a(e){return"string"==typeof e}function l(e,t){if(null!=e){var n=t?" ":"";return"string"!=typeof e&&"number"!=typeof e&&a(e.type)&&T(e.props.children)?v.cloneElement(e,{},e.props.children.split("").join(n)):"string"==typeof e?(T(e)&&(e=e.split("").join(n)),v.createElement("span",null,e)):e}}var i=n(15),r=n.n(i),s=n(191),o=n.n(s),c=n(65),u=n.n(c),d=n(66),f=n.n(d),p=n(76),m=n.n(p),_=n(77),y=n.n(_),v=n(6),g=(n.n(v),n(11)),h=n.n(g),b=n(309),O=n.n(b),N=n(311),x=n(828),E=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&(n[a[l]]=e[a[l]]);return n},j=/^[\u4e00-\u9fa5]{2}$/,T=j.test.bind(j),k=function(e){function t(e){u()(this,t);var n=m()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=function(e){n.setState({clicked:!0}),clearTimeout(n.timeout),n.timeout=window.setTimeout(function(){return n.setState({clicked:!1})},500);var t=n.props.onClick;t&&t(e)},n.state={loading:e.loading,clicked:!1},n}return y()(t,e),f()(t,[{key:"componentWillReceiveProps",value:function(e){var t=this,n=this.props.loading,a=e.loading;n&&clearTimeout(this.delayTimeout),"boolean"!=typeof a&&a&&a.delay?this.delayTimeout=window.setTimeout(function(){return t.setState({loading:a})},a.delay):this.setState({loading:a})}},{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout),this.delayTimeout&&clearTimeout(this.delayTimeout)}},{key:"render",value:function(){var e,t=this.props,n=t.type,a=t.shape,i=t.size,s=t.className,c=t.htmlType,u=t.children,d=t.icon,f=t.prefixCls,p=t.ghost,m=E(t,["type","shape","size","className","htmlType","children","icon","prefixCls","ghost"]),_=this.state,y=_.loading,g=_.clicked,h="";switch(i){case"large":h="lg";break;case"small":h="sm"}var b=m.href?"a":"button",j=O()(f,s,(e={},o()(e,f+"-"+n,n),o()(e,f+"-"+a,a),o()(e,f+"-"+h,h),o()(e,f+"-icon-only",!u&&d),o()(e,f+"-loading",y),o()(e,f+"-clicked",g),o()(e,f+"-background-ghost",p),e)),T=y?"loading":d,k=T?v.createElement(x.default,{type:T}):null,P=1===v.Children.count(u)&&(!T||"loading"===T),w=u?v.Children.map(u,function(e){return l(e,P)}):null;return v.createElement(b,r()({},Object(N.a)(m,["loading"]),{type:m.href?void 0:c||"button",className:j,onClick:this.handleClick}),k,w)}}]),t}(v.Component);t.a=k,k.__ANT_BUTTON=!0,k.defaultProps={prefixCls:"ant-btn",loading:!1,ghost:!1},k.propTypes={type:h.a.string,shape:h.a.oneOf(["circle","circle-outline"]),size:h.a.oneOf(["large","default","small"]),htmlType:h.a.oneOf(["submit","button","reset"]),onClick:h.a.func,loading:h.a.oneOfType([h.a.bool,h.a.object]),className:h.a.string,icon:h.a.string}},860:function(e,t,n){"use strict";var a=n(15),l=n.n(a),i=n(191),r=n.n(i),s=n(6),o=(n.n(s),n(309)),c=n.n(o),u=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&(n[a[l]]=e[a[l]]);return n},d=function(e){var t=e.prefixCls,n=void 0===t?"ant-btn-group":t,a=e.size,i=e.className,o=u(e,["prefixCls","size","className"]),d="";switch(a){case"large":d="lg";break;case"small":d="sm"}var f=c()(n,r()({},n+"-"+d,d),i);return s.createElement("div",l()({},o,{className:f}))};t.a=d},864:function(e,t){}});