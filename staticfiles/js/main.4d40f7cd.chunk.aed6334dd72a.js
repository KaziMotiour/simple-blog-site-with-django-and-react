(this.webpackJsonpblogpost=this.webpackJsonpblogpost||[]).push([[0],{110:function(e,t,a){e.exports=a(144)},115:function(e,t,a){},116:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=(a(115),a(22)),i=(a(116),a(24)),u=a(17),m=a(18),s=a.n(m),d=a(38),p=a(31),f=a.n(p),E=function(e){return{type:"AUTH_SUCCESS",token:e}},b=function(e){return{type:"AUTH_FAIL",error:e}};var v=Object(u.b)((function(e){return{token:e.auth.token}}),(function(e){return{onSuccess:function(){return e(E())},onLogout:function(){return e((localStorage.removeItem("token"),{type:"AUTH_LOGOUT"}))}}}))((function(e){Object(n.useEffect)((function(){e.onSuccess()}),[]);var t=Object(n.useState)(!1),a=Object(l.a)(t,2);return a[0],a[1],r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"nav"},r.a.createElement("p",{className:"nav-item"},r.a.createElement(i.b,{to:"/",className:"a"},"Home")),null!==e.token?r.a.createElement(i.b,{to:"/login",className:"nav-item",onClick:e.onLogout},"Logout"):r.a.createElement("p",{className:"nav-item"},r.a.createElement(i.b,{to:"/login",className:"a"},"Login")," ")))})),h=(a(140),a(32)),g=a(10),O=a(190),y=(a(141),a(179)),j=function(){return function(){var e=Object(d.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("http://127.0.0.1:8000/api/");case 3:a=e.sent,t({type:"FETCH_DATA",data:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"ERROR",error:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()};var w=Object(u.b)(null,(function(e){return{onCreate:function(t,a){return e(function(e,t){return function(){var a=Object(d.a)(s.a.mark((function a(n){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.post("http://127.0.0.1:8000/api/create/",{title:e,content:t});case 3:n(j()),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),n({type:"ERROR",error:a.t0});case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e){return a.apply(this,arguments)}}()}(t,a))}}}))((function(e){var t=Object(n.useState)({title:"",content:""}),a=Object(l.a)(t,2),c=a[0],o=a[1],i=function(e){o(Object(g.a)(Object(g.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"toolbox"},r.a.createElement("h3",null,"Write an article"),r.a.createElement(O.a,{value:c.title,name:"title",onChange:function(e){return i(e)},required:!0,className:"title",label:"Make a Title"}),r.a.createElement("textarea",{value:c.content,name:"content",onChange:function(e){return i(e)},className:"textarea",placeholder:"Write what ever you love"}),r.a.createElement("div",{className:"butoon"},r.a.createElement(y.a,{variant:"contained",className:"button",onClick:function(){e.onCreate(c.title,c.content),o({title:"",content:""})}},"Post ")))})),k=a(195),C=a(86),N=a.n(C),x=a(87),S=a.n(x),T=(a(142),a(194)),A=a(182),_=a(181),W=a(183),U=a(180);var R=Object(u.b)(null,(function(e){return{onUpdate:function(t,a,n){return e(function(e,t,a){return function(){var n=Object(d.a)(s.a.mark((function n(r){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.a.put("http://127.0.0.1:8000/api/update/".concat(a,"/"),{title:e,content:t});case 3:r(j()),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),r({type:"ERROR",error:n.t0});case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()}(t,a,n))},onDelete:function(t){return e(function(e){return function(){var t=Object(d.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.delete("http://127.0.0.1:8000/api/delete/".concat(e,"/"));case 3:a(j()),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),a({type:"ERROR",error:t.t0});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Object(n.useState)({title:e.title,content:e.content}),a=Object(l.a)(t,2),c=a[0],o=a[1],i=r.a.useState(!1),u=Object(l.a)(i,2),m=u[0],s=u[1],d=r.a.useState(!1),p=Object(l.a)(d,2),f=p[0],E=p[1],b=function(){e.onDelete(e.id),E(!1)},v=function(){e.onUpdate(c.title,c.content,e.id),s(!1)},j=function(e){o(Object(g.a)(Object(g.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"header"},r.a.createElement(k.a,{src:"https://media-exp1.licdn.com/dms/image/C4D03AQGv0oGQhWGxAA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=WZYz_B2Sq7PqTZ8qcBSTt6tku__0dqlA-2PIHOwVSr8"}),r.a.createElement("div",{className:"showtime"},r.a.createElement("h3",null,"kazi Motiour"),r.a.createElement("span",null,"time")),r.a.createElement("div",null),r.a.createElement("div",{className:"icon"},r.a.createElement(N.a,{className:"editIcon",onClick:function(){s(!0)}}),r.a.createElement(S.a,{className:"deleteIcon",onClick:function(){E(!0)}}))),r.a.createElement("div",{className:"body"},r.a.createElement("h4",null,e.title),r.a.createElement("p",{className:"content"},e.content)),r.a.createElement("div",{className:"footer"},r.a.createElement("h4",null,"like"),r.a.createElement("h4",null,"comment"),r.a.createElement("h4",null,"share")),r.a.createElement("div",null,r.a.createElement(T.a,{className:"dialog",open:m,onClose:v,"aria-labelledby":"form-dialog-title"},r.a.createElement(U.a,{id:"form-dialog-title"},"Edit"),r.a.createElement(_.a,null,r.a.createElement(O.a,{autoFocus:!0,margin:"dense",id:"name",label:"Title",type:"email",fullWidth:!0,value:c.title,name:"title",onChange:function(e){return j(e)}}),r.a.createElement(O.a,{autoFocus:!0,margin:"dense",id:"name",label:"content",type:"email",fullWidth:!0,value:c.content,name:"content",onChange:function(e){return j(e)}})),r.a.createElement(A.a,null,r.a.createElement(y.a,{onClick:v,color:"primary"},"Cancel"),r.a.createElement(y.a,{onClick:v,color:"primary"},"Confirm edit")))),r.a.createElement("div",null,r.a.createElement(T.a,{className:"dialog",open:f,onClose:b,"aria-labelledby":"form-dialog-title"},r.a.createElement(U.a,{id:"form-dialog-title"},"Subscribe"),r.a.createElement(_.a,null,r.a.createElement(W.a,null,"You want to Delete this article"),r.a.createElement("p",null,"Title: ",e.title),r.a.createElement("p",null,"Article: ",e.content)),r.a.createElement(A.a,null,r.a.createElement(y.a,{onClick:b,color:"primary"},"Cancel"),r.a.createElement(y.a,{onClick:b,color:"primary"},"Confirm Delete")))))}));var D=Object(u.b)((function(e){return{post:e.CRUD.post}}),(function(e){return{fetchDatas:function(t,a){return e(j())}}}))((function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0];a[1],console.log(c),Object(n.useEffect)((function(){e.fetchDatas()}),[]);var o=e.post&&e.post.map((function(e){return r.a.createElement(R,{key:e.id,id:e.id,title:e.title,content:e.content})}));return r.a.createElement("div",{className:"posts"},o)}));var I=function(e){return r.a.createElement("div",{className:"article"},localStorage.getItem("token")&&r.a.createElement(w,{className:"toolbox"}),r.a.createElement("div",{className:"border"}),r.a.createElement(D,null))},q=a(13),H=a(187),F=a(188),L=a(192),P=a(184),G=a(189),B=a(60),V=a.n(B),Y=a(61),M=a(185),z=a(186);var J=Object(M.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var Q=Object(u.b)((function(e){return{loading:e.auth.loading,error:e.auth.error}}),(function(e){return{onAuth:function(t,a){return e(function(e,t){return function(){var a=Object(d.a)(s.a.mark((function a(n){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"AUTH_START"}),a.next=3,f.a.post("http://127.0.0.1:8000/rest-auth/login/",{username:e,password:t}).then((function(e){var t=e.data.key;localStorage.setItem("token",t),n(E(t))})).then((function(e){n(b(e))}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t,a))}}}))((function(e){Object(n.useEffect)((function(){localStorage.getItem("token")&&e.history.push("/")}),[]);var t=J(),a=Object(n.useState)({username:"",password:""}),c=Object(l.a)(a,2),o=c[0],u=c[1],m=function(e){u(Object(g.a)(Object(g.a)({},o),{},Object(h.a)({},e.target.name,e.target.value)))};return r.a.createElement(z.a,{component:"main",maxWidth:"xs"},r.a.createElement(H.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(k.a,{className:t.avatar},r.a.createElement(V.a,null)),r.a.createElement(Y.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"username",autoComplete:"email",autoFocus:!0,onChange:function(e){return m(e)}}),r.a.createElement(O.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return m(e)}}),r.a.createElement(F.a,{control:r.a.createElement(L.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(y.a,{fullWidth:!0,variant:"contained",style:{background:"rgb(10, 97, 68)",color:"white"},className:t.submit,onClick:function(){e.onAuth(o.username,o.password),e.history.push("/")}},"Sign In"),r.a.createElement(G.a,{container:!0},r.a.createElement(G.a,{item:!0,xs:!0},r.a.createElement(i.c,{to:"",variant:"body2"},"Forgot password?")),r.a.createElement(G.a,{item:!0},r.a.createElement(i.c,{to:"/singup",variant:"body2"},'"Don\'t have an account? Sign Up"'))))))})),X=a(191);function Z(){return r.a.createElement(Y.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(P.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var $=Object(M.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function K(e){var t=$();return Object(n.useEffect)((function(){localStorage.getItem("token")&&e.history.push("/")}),[]),r.a.createElement(z.a,{component:"main",maxWidth:"xs"},r.a.createElement(H.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(k.a,{className:t.avatar},r.a.createElement(V.a,null)),r.a.createElement(Y.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(G.a,{container:!0,spacing:2},r.a.createElement(G.a,{item:!0,xs:12,sm:6},r.a.createElement(O.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(G.a,{item:!0,xs:12,sm:6},r.a.createElement(O.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.a.createElement(G.a,{item:!0,xs:12},r.a.createElement(O.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.a.createElement(G.a,{item:!0,xs:12},r.a.createElement(O.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(G.a,{item:!0,xs:12},r.a.createElement(O.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Confirm Password",type:"password",id:"password",autoComplete:"current-password"}))),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",style:{background:"rgb(10, 97, 68)",color:"white"},className:t.submit},"Sign Up"),r.a.createElement(G.a,{container:!0,justify:"flex-end"},r.a.createElement(G.a,{item:!0},r.a.createElement(i.c,{to:"/login",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(X.a,{mt:5},r.a.createElement(Z,null)))}var ee=Object(u.b)((function(e){return{token:e.auth.token,loading:e.auth.loading,error:e.auth.error}}),null)((function(e){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(q.a,{path:"/",exact:!0,component:I}),r.a.createElement(q.a,{path:"/login",exact:!0,component:Q}),r.a.createElement(q.a,{path:"/singup",exact:!0,component:K})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te={token:null,error:null,loading:!1},ae=function(e,t){return Object(g.a)(Object(g.a)({},e),{},{error:null,loading:!0})},ne=function(e,t){return Object(g.a)(Object(g.a)({},e),{},{token:localStorage.getItem("token"),error:null,loading:!1})},re=function(e,t){return Object(g.a)(Object(g.a)({},e),{},{error:t.error,loading:!1})},ce=function(e,t){return Object(g.a)(Object(g.a)({},e),{},{token:null})},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return ae(e);case"AUTH_SUCCESS":return ne(e);case"AUTH_FAIL":return re(e,t);case"AUTH_LOGOUT":return ce(e);default:return e}},le={post:[],loading:!1,error:null},ie=function(e,t){return Object(g.a)(Object(g.a)({},e),{},{post:t.data})};var ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DATA":return ie(e,t);default:return e}},me=a(43),se=a(88),de=Object(me.c)({auth:oe,CRUD:ue}),pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.d,fe=Object(me.e)(de,pe(Object(me.a)((function(e){return function(t){return function(a){console.log("[middleware] dipatching",a);var n=t(a);return console.log("[middleware] next state",e.getState()),n}}}),se.a)));o.a.render(r.a.createElement(u.a,{store:fe},r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[110,1,2]]]);
//# sourceMappingURL=main.4d40f7cd.chunk.js.map