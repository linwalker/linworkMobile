webpackJsonp([2],{0:function(e,t){e.exports=React},13:function(e,t){e.exports=ReactDOM},187:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(50);t.default=(0,r.createActions)({FIELD_CHANGE:function(e){return{fields:e}},LOADING:void 0,LOGIN:function(e){return{username:e.username,password:e.password}},LOGINED:void 0,REJECTED:function(e){return{message:e}}})},19:function(e,t){e.exports=antd},193:function(e,t){e.exports="data:image/png;base64,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"},36:function(e,t,a){var r,n;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(a.apply(this,r));else if("object"===n)for(var o in r)u.call(r,o)&&r[o]&&e.push(this&&this[o]||o)}}return e.join(" ")}var u={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=a:(r=[],void 0!==(n=function(){return a}.apply(t,r))&&(e.exports=n))}()},571:function(e,t,a){e.exports=a(572)},572:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(46),u=r(n),o=a(1),l=r(o),s=a(4),d=r(s),f=a(2),c=r(f),i=a(3),p=r(i),m=a(0),A=r(m),g=a(26),v=a(180),O=a(124),h=r(O),M=a(623),E=r(M),w=a(669),U=r(w),Y=a(698),C=r(Y);a(701);var T=function(e){function t(){return(0,l.default)(this,t),(0,c.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,null,[{key:"getStore",value:function(){return(0,h.default)(E.default,U.default,{username:{value:"beidou"},password:{value:"admin"},message:{error:!1,message:""}})}},{key:"getPartial",value:function(e){var t=e.store;return{html:A.default.createElement(g.Provider,{store:t},A.default.createElement(C.default,null))}}}]),t}(v.View);T.defaultProps={title:"Login",asset:"login"},t.default=T,(0,v.render)(C.default,E.default,U.default)},623:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n,u=a(9),o=r(u),l=a(6),s=r(l),d=a(50),f=a(187),c=r(f),i={username:{value:"beidou"},password:{value:"admin"},message:{error:!1,text:""},loading:!1,logined:!1};t.default=(0,d.handleActions)((n={},(0,o.default)(n,c.default.fieldChange,function(e,t){var a=t.payload.fields;return(0,s.default)({},e,a)}),(0,o.default)(n,c.default.rejected,function(e,t){var a=t.payload.message;return(0,s.default)({},e,{password:{value:""},message:{error:!0,text:a},loading:!1})}),(0,o.default)(n,c.default.loading,function(e){return(0,s.default)({},e,{loading:!0})}),(0,o.default)(n,c.default.logined,function(e){return(0,s.default)({},e,{message:{error:!1,text:"Login Successfully"},loading:!1,logined:!0})}),n),i)},669:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e){var t,a=e.payload,r=a.username,n=a.password;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.put)(g.default.loading());case 2:return e.prev=2,e.next=5,i.default.post("login",{username:r,password:n});case 5:if(t=e.sent,"OK"!==t.statusText||!t.data.success){e.next=12;break}return e.next=9,(0,f.put)(g.default.logined());case 9:setTimeout(function(){var e=m.default.parse(window.location.search).r||"/dashboard";window.location.href=e},1e3),e.next=14;break;case 12:return e.next=14,(0,f.put)(g.default.rejected(t.data.message||"Error password or username"));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0);case 19:case"end":return e.stop()}},v,this,[[2,16]])}function u(){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.takeLatest)(g.default.login,n);case 2:case"end":return e.stop()}},O,this)}Object.defineProperty(t,"__esModule",{value:!0}),t.run=t.sagaMiddleware=void 0;var o=a(125),l=r(o),s=a(188),d=r(s),f=a(127),c=a(190),i=r(c),p=a(128),m=r(p),A=a(187),g=r(A),v=l.default.mark(n),O=l.default.mark(u),h=t.sagaMiddleware=(0,d.default)(),M=t.run=function(){h.run(u)};t.default={saga:u,sagaMiddleware:h,run:M}},698:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(6),u=r(n),o=a(0),l=r(o),s=a(26),d=a(19),f=a(36),c=r(f),i=a(187),p=r(i),m=a(699),A=r(m),g=a(193),v=r(g),O=c.default.bind(A.default),h=d.Form.Item,M=function(e){function t(){u(function(e,t){e||a(p.default.login(t))})}var a=e.dispatch,r=e.form,n=r.getFieldDecorator,u=r.validateFieldsAndScroll,o=e.message,s=o.error,f=o.text,c=e.loading,i=e.logined;return l.default.createElement("div",{className:O("form")},l.default.createElement("div",{className:O("logo")},l.default.createElement("img",{alt:"logo",src:v.default}),l.default.createElement("span",null,"Antd Admin Login")),l.default.createElement("form",null,l.default.createElement(h,{hasFeedback:!0},n("username",{rules:[{required:!0}]})(l.default.createElement(d.Input,{size:"large",onPressEnter:t,placeholder:"Username"}))),l.default.createElement(h,{hasFeedback:!0},n("password",{rules:[{required:!0}]})(l.default.createElement(d.Input,{size:"large",type:"password",onPressEnter:t,placeholder:"Password"}))),l.default.createElement(d.Row,null,l.default.createElement(d.Button,{type:"primary",size:"large",loading:c,onClick:t,disabled:i},i?"Login Successfully":"Sign in"),l.default.createElement("p",{className:O({error:s})},f),l.default.createElement("p",null,l.default.createElement("span",null,"Username：beidou"),l.default.createElement("span",null,"Password：admin")))))};t.default=(0,s.connect)(function(e){return e})(d.Form.create({onFieldsChange:function(e,t){e.dispatch(p.default.fieldChange(t))},mapPropsToFields:function(e){return{username:d.Form.createFormField((0,u.default)({},e.username,{value:e.username.value})),password:d.Form.createFormField((0,u.default)({},e.password,{value:e.password.value}))}}})(M))},699:function(e,t){e.exports={form:"form_3F2rkSYJXzHMug-dZ11taj",error:"error_1gXi6ScAGQSAdY4c4f9Yiw",logo:"logo_2bt0Uo0X1NaNI2KGe7_sq4"}},701:function(e,t){}},[571]);