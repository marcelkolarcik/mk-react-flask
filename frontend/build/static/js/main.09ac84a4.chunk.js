(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,t,s){e.exports={room:"Front_room__4_siU",hero:"Front_hero__2IaUr",search_bar:"Front_search_bar__1Tvj_",search_bar_item:"Front_search_bar_item__MImjl",search_btn:"Front_search_btn__bW4KM"}},58:function(e,t,s){e.exports={avatar:"AccessAndDescription_avatar__3rrI8"}},64:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},74:function(e,t,s){"use strict";s.r(t);var c=s(7),r=s(37),a=s.n(r),n=(s(64),s(28)),o=s(19),i=s(15),l=s(0),j=s.n(l),d=s(3),b=s(56),m=b.a.initializeApp({apiKey:"AIzaSyAYZ94tcJHjzsWA9dZ_XDfq2-5N7fshBys",authDomain:"getting-started-react-19e7f.firebaseapp.com",databaseURL:"https://getting-started-react-19e7f-default-rtdb.europe-west1.firebasedatabase.app",projectId:"getting-started-react-19e7f",storageBucket:"getting-started-react-19e7f.appspot.com",messagingSenderId:"1057344622688",appId:"1:1057344622688:web:b49976a0434d2828633305"}).auth(),h=new b.a.auth.GoogleAuthProvider,u=function(){var e=Object(d.a)(j.a.mark((function e(){var t,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.signInWithPopup(h);case 3:return t=e.sent,s=t.user,e.next=7,fetch("/api/user/"+s.uid).then((function(e){if(200===e.status)return e.json()})).then((function(e){e.name||fetch("/api/add_user/",{method:"POST",body:JSON.stringify({uid:s.uid,name:s.displayName,authProvider:"google",email:s.email}),headers:new Headers({"content-type":"application/json"})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){alert("error: "+e)}))}));case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),alert(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(j.a.mark((function e(t,s){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.signInWithEmailAndPassword(t,s);case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0),alert(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,s){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(j.a.mark((function e(t,s,c){var r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.createUserWithEmailAndPassword(s,c);case 3:return r=e.sent,a=r.user,e.next=7,fetch("/api/add_user/",{method:"POST",body:JSON.stringify({uid:a.uid,name:t,authProvider:"local",email:s}),headers:new Headers({"content-type":"application/json"})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){alert("error: "+e)}));case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),alert(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,s,c){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.sendPasswordResetEmail(t);case 3:alert("Password reset link sent!"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),alert(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){m.signOut()},p=s(36),g=s(5);var N=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),s=t[0],r=t[1],a=Object(c.useState)(""),l=Object(i.a)(a,2),j=l[0],d=l[1],b=Object(p.a)(m),h=Object(i.a)(b,3),O=h[0],f=h[1],v=h[2],N=Object(o.f)();return Object(c.useEffect)((function(){f||O&&N("/dashboard")}),[O,f,v]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h4",{className:"text-center my-5",children:"Login"}),Object(g.jsx)("div",{className:"row row-cols-1",children:Object(g.jsxs)("div",{className:"col-md-6 mx-auto",children:[Object(g.jsxs)("div",{className:"form-floating",children:[Object(g.jsx)("input",{type:"text",className:"form-control",value:s,id:"email",onChange:function(e){return r(e.target.value)},placeholder:"E-mail Address"}),Object(g.jsx)("label",{htmlFor:"email",children:"Email"})]}),Object(g.jsxs)("div",{className:"form-floating my-3",children:[Object(g.jsx)("input",{type:"password",className:"form-control",value:j,id:"password",onChange:function(e){return d(e.target.value)},placeholder:"Password"}),Object(g.jsx)("label",{htmlFor:"password",children:"Password"})]}),Object(g.jsx)("button",{className:"btn btn-outline-dark w-100 mb-3",onClick:function(){return x(s,j)},children:"Login"}),Object(g.jsx)("button",{className:"btn btn-primary w-100 mb-3",onClick:u,children:"Login with Google"}),Object(g.jsx)("div",{children:Object(g.jsx)(n.b,{to:"/reset",children:"Forgot Password"})}),Object(g.jsxs)("div",{children:["Don't have an account? ",Object(g.jsx)(n.b,{to:"/register",children:"Register"})," now."]})]})})]})};s(68);var w=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),s=t[0],r=t[1],a=Object(c.useState)(""),l=Object(i.a)(a,2),j=l[0],d=l[1],b=Object(c.useState)(""),h=Object(i.a)(b,2),x=h[0],f=h[1],v=Object(p.a)(m),N=Object(i.a)(v,3),w=N[0],_=N[1],y=N[2],k=Object(o.f)();return Object(c.useEffect)((function(){_||w&&k("/dashboard")}),[w,_,y]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h4",{className:"text-center my-5",children:"Register"}),Object(g.jsx)("div",{className:"row row-cols-1",children:Object(g.jsxs)("div",{className:"col-md-6 mx-auto",children:[Object(g.jsxs)("div",{className:"form-floating mb-3",children:[Object(g.jsx)("input",{type:"text",id:"name",className:"form-control",value:x,onChange:function(e){return f(e.target.value)},placeholder:"Full Name"}),Object(g.jsx)("label",{htmlFor:"name",children:"Name"})]}),Object(g.jsxs)("div",{className:"form-floating mb-3",children:[Object(g.jsx)("input",{type:"text",className:"form-control",id:"email",value:s,onChange:function(e){return r(e.target.value)},placeholder:"E-mail Address"}),Object(g.jsx)("label",{htmlFor:"email",children:"Email"})]}),Object(g.jsxs)("div",{className:"form-floating mb-3",children:[Object(g.jsx)("input",{type:"password",className:"form-control",id:"password",value:j,onChange:function(e){return d(e.target.value)},placeholder:"Password"}),Object(g.jsx)("label",{htmlFor:"password",children:"Password"})]}),Object(g.jsx)("button",{className:"btn btn-outline-dark w-100 mb-3",onClick:function(){x||alert("Please enter name"),O(x,s,j)},children:"Register"}),Object(g.jsx)("button",{className:"btn btn-primary w-100 mb-3",onClick:u,children:"Register with Google"}),Object(g.jsxs)("div",{children:["Already have an account? ",Object(g.jsx)(n.b,{to:"/login",children:"Login"})," now."]})]})})]})};s(69);var _=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),s=t[0],r=t[1],a=Object(p.a)(m),l=Object(i.a)(a,3),j=l[0],d=l[1],b=(l[2],Object(o.f)());return Object(c.useEffect)((function(){d||j&&b("/dashboard")}),[j,d]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h4",{className:"text-center my-5",children:"Reset password"}),Object(g.jsx)("div",{className:"row row-cols-1",children:Object(g.jsxs)("div",{className:"col-md-6 mx-auto",children:[Object(g.jsxs)("div",{className:"form-floating mb-3",children:[Object(g.jsx)("input",{type:"text",className:"form-control",id:"email",value:s,onChange:function(e){return r(e.target.value)},placeholder:"E-mail Address"}),Object(g.jsx)("label",{htmlFor:"email",children:"Email"})]}),Object(g.jsx)("button",{className:"btn btn-secondary w-100",onClick:function(){return f(s)},children:"Send password reset email"}),Object(g.jsxs)("div",{children:["Don't have an account? ",Object(g.jsx)(n.b,{to:"/register",children:"Register"})," now."]})]})})]})};s(70);var y=function(){var e=Object(p.a)(m),t=Object(i.a)(e,3),s=t[0],r=t[1],a=t[2],n=Object(c.useState)(""),l=Object(i.a)(n,2),j=l[0],d=l[1],b=Object(c.useState)(""),h=Object(i.a)(b,2),u=h[0],x=h[1],O=Object(o.f)();return Object(c.useEffect)((function(){if(!r)return s?void fetch("/api/user/"+(null===s||void 0===s?void 0:s.uid)).then((function(e){if(200===e.status)return e.json()})).then((function(e){d(e.name),x(e.email)})).catch((function(e){alert("error: "+e)})):O("/")}),[s,r,a]),Object(g.jsx)("div",{className:"dashboard",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h4",{className:"text-center",children:"Your Dashboard"}),"Logged in as",Object(g.jsx)("div",{children:j}),Object(g.jsx)("div",{children:u}),Object(g.jsx)("button",{className:"btn btn-outline-danger",onClick:v,children:"Logout"})]})})};function k(){return Object(g.jsx)("span",{className:"text-info",children:Object(g.jsx)(g.Fragment,{children:"\u2605"})})}var F=s(34),S=s.n(F);function P(e){var t=e.room;return Object(g.jsxs)("p",{className:"small text-muted p-0 m-0 px-1",children:[t.accommodates," guest",t.accommodates>1?"s":"",",",t.bedrooms," bedroom",t.bedrooms>1?"s":"",",",t.beds," bed",t.beds>1?"s":"",",",t.bathrooms," bathroom",t.bathrooms>1?"s":"",","]})}function A(){return Object(g.jsx)("div",{className:S.a.search_bar,children:Object(g.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(g.jsxs)("div",{className:"col text-center "+S.a.search_bar_item,children:[Object(g.jsx)("strong",{className:"ms-2",children:Object(g.jsx)("small",{children:"Location"})}),Object(g.jsx)("br",{}),Object(g.jsx)("small",{className:"text-muted ms-2",children:"Where are you going?"})]}),Object(g.jsxs)("div",{className:"text-center d-none d-sm-block col "+S.a.search_bar_item,children:[Object(g.jsx)("strong",{children:Object(g.jsx)("small",{children:"Check in"})}),Object(g.jsx)("br",{}),Object(g.jsx)("small",{className:"text-muted",children:"Add dates"})]}),Object(g.jsxs)("div",{className:"text-center d-none d-sm-block col "+S.a.search_bar_item,children:[Object(g.jsx)("strong",{children:Object(g.jsx)("small",{children:"Check out"})}),Object(g.jsx)("br",{}),Object(g.jsx)("small",{className:"text-muted",children:"Add dates"})]}),Object(g.jsxs)("div",{className:"text-center d-none d-sm-block col "+S.a.search_bar_item,children:[Object(g.jsx)("strong",{children:Object(g.jsx)("small",{children:"Guests"})}),Object(g.jsx)("br",{}),Object(g.jsx)("small",{className:"text-muted",children:"Add guests"})]}),Object(g.jsx)("div",{className:"text-center col "+S.a.search_bar_item,children:Object(g.jsx)("div",{className:"ms-auto  me-2 "+S.a.search_btn,children:Object(g.jsx)(g.Fragment,{children:"\ud83d\udd0e"})})})]})})}function C(e){var t=e.room;return Object(g.jsx)("div",{className:"col mb-3 ",children:Object(g.jsx)(n.b,{className:"text-muted text-decoration-none",to:"/room/"+t._id,children:Object(g.jsxs)("div",{className:"card h-100 text-start "+S.a.room,children:[Object(g.jsx)("img",{className:"rounded-3",style:{height:"150px",width:"auto"},src:t.images.picture_url?t.images.picture_url:"https://source.unsplash.com/featured/500x500?hotel,room,"+t._id,alt:""}),Object(g.jsx)("div",{className:"card-header bg-transparent border-0",children:Object(g.jsx)("p",{className:"small",children:Object(g.jsxs)("strong",{children:[t.name.substring(0,20)+"..."," "]})})}),Object(g.jsxs)("div",{className:"card-body p-0",children:[Object(g.jsx)(P,{room:t}),Object(g.jsxs)("p",{className:"small text-muted p-0 m-0 px-1",children:[Object(g.jsx)(k,{})," ",t.reviews.length," reviews"]})]})]})})},t._id)}var E=s(35),I=s(42);function D(){return Object(g.jsxs)(I.a,{children:[Object(g.jsx)(E.a,{as:I.a.Title,animation:"glow",children:Object(g.jsx)(E.a,{xs:12,size:"xl"})}),Object(g.jsxs)(I.a.Body,{children:[Object(g.jsx)(E.a,{as:I.a.Title,animation:"glow",children:Object(g.jsx)(E.a,{xs:6})}),Object(g.jsxs)(E.a,{as:I.a.Text,animation:"glow",children:[Object(g.jsx)(E.a,{xs:7})," ",Object(g.jsx)(E.a,{xs:4})," ",Object(g.jsx)(E.a,{xs:4})," ",Object(g.jsx)(E.a,{xs:6})," ",Object(g.jsx)(E.a,{xs:8})]}),Object(g.jsx)(E.a.Button,{variant:"primary",xs:6})]})]})}function L(){return Array.from({length:12}).map((function(e,t){return Object(g.jsx)(D,{})}))}function B(){var e=Object(c.useState)({}),t=Object(i.a)(e,2),s=t[0],r=t[1],a=Object(c.useState)(!0),n=Object(i.a)(a,2),o=n[0],l=n[1];return Object(c.useEffect)((function(){l(!0),fetch("/api/rooms/").then((function(e){return e.json()})).then((function(e){r(e.rooms),l(!1)})).catch((function(e){alert("error: "+e)}))}),[]),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"row border-top border-danger bg-black g-0 ",children:[Object(g.jsx)(A,{}),Object(g.jsxs)("div",{className:S.a.hero,children:[Object(g.jsx)("h4",{className:"mx-auto text-center",children:"React-Flask-Mongo example with authorization with Firebase."}),Object(g.jsx)("h3",{className:"mt-auto mx-auto",children:"Not sure where to go? Perfect."})]})]}),Object(g.jsx)("div",{className:"container mt-5",children:Object(g.jsx)("div",{className:"row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3",children:o?Object(g.jsx)(L,{}):s.map((function(e){return Object(g.jsx)(C,{room:e})}))})})]})}function R(e){return Object(g.jsxs)("span",{children:[Object(g.jsx)(k,{}),Object(g.jsxs)("strong",{children:[" ",e.room.review_scores.review_scores_rating,"%"]}),Object(g.jsx)(g.Fragment,{children:"\xa0"}),"(",Object(g.jsxs)("span",{className:"text-decoration-underline text-muted",children:[e.room.reviews.length," reviews"]}),")"]})}function T(e){var t={backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"300px",backgroundImage:'url("'.concat(e.room.images.picture_url,'")')};return Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("p",{className:"lead fw-bold",children:[e.room.name,"  ",Object(g.jsx)(g.Fragment,{children:"\xa0"}),Object(g.jsxs)("span",{className:"float-end fw-light small",children:[Object(g.jsx)(g.Fragment,{children:"\u2665"}),"Save ",Object(g.jsx)(g.Fragment,{children:"\xa0"})]}),Object(g.jsxs)("span",{className:"float-end fw-light small",children:["Share ",Object(g.jsx)(g.Fragment,{children:"\xa0"})]})]}),Object(g.jsxs)("p",{className:"small p-o m-0",children:[Object(g.jsx)(R,{room:e.room}),Object(g.jsx)(g.Fragment,{children:"\xa0"}),Object(g.jsx)(g.Fragment,{children:"\xa0"}),Object(g.jsx)("small",{className:"text-muted",children:e.room.host.host_location})]}),Object(g.jsx)("div",{className:"mt-3",style:t})]})}var W=s(58),z=s.n(W);function H(e){return Object(g.jsx)("div",{className:"row row-cols-2",children:e.amenities.map((function(e){return Object(g.jsxs)("div",{className:"col border border-1 p-2",children:[e," "]},e)}))})}function J(e){return Object(g.jsxs)("div",{className:"row mt-3",children:[Object(g.jsx)("div",{className:"col-md-9",children:Object(g.jsxs)("p",{className:"lead fw-bold",children:[e.room.room_type," hosted by ",e.room.host.host_name," ",Object(g.jsx)("br",{})]})}),Object(g.jsx)("div",{className:"col-md-3",children:Object(g.jsx)("img",{className:z.a.avatar,src:e.room.host.host_thumbnail_url,alt:e.room.host.host_name})}),Object(g.jsx)(P,{room:e.room}),Object(g.jsxs)("div",{className:"col-md-6",children:[Object(g.jsx)("hr",{}),Object(g.jsx)("p",{className:"small",children:e.room.summary}),Object(g.jsx)("hr",{}),Object(g.jsx)("p",{className:"lead fw-bold",children:"Where you'll sleep."}),Object(g.jsx)("img",{className:"img-thumbnail",src:e.room.images.picture_url,alt:""}),Object(g.jsx)("p",{children:e.room.bed_type}),Object(g.jsx)("hr",{}),Object(g.jsx)("p",{className:"lead fw-bold",children:"What this place offers"}),Object(g.jsx)(H,{amenities:e.room.amenities})]})]})}function G(e){var t=e.review,s=new Date(t.date);return Object(g.jsxs)("p",{className:"border-bottom mb-3 p-3",children:[t.comments,Object(g.jsx)("br",{}),Object(g.jsxs)("span",{className:"text-muted fst-italic",children:["by ",t.reviewer_name," ",s.getFullYear(),"/",s.getMonth(),"/",s.getDay()]})]},t._id)}function M(e){return e.reviews.map((function(e,t){return t<6?Object(g.jsx)(G,{review:e}):""}))}var U=s(59);function Y(e){return Object(g.jsx)("div",{className:"col",children:Object(g.jsxs)("div",{className:"row d-flex align-items-center",children:[Object(g.jsx)("div",{className:"col small p-2",children:e.scoreName}),Object(g.jsx)("div",{className:"col",children:Object(g.jsx)(U.a,{variant:"black",style:{height:"5px"},now:10*parseInt(e.score)})}),Object(g.jsx)("div",{className:"col small",children:e.score})]})})}function K(e){var t=e.room;return Object(g.jsxs)("section",{className:"my-5",children:[Object(g.jsxs)("p",{className:"lead fw-bold",children:[Object(g.jsx)(k,{})," ",t.review_scores.review_scores_rating,"% (",t.reviews.length," reviews)"]}),Object(g.jsxs)("div",{className:"row row-cols-md-2 row-cols-1",children:[Object(g.jsx)(Y,{scoreName:"Accuracy",score:t.review_scores.review_scores_accuracy}),Object(g.jsx)(Y,{scoreName:"Checkin",score:t.review_scores.review_scores_checkin}),Object(g.jsx)(Y,{scoreName:"Cleanliness",score:t.review_scores.review_scores_cleanliness}),Object(g.jsx)(Y,{scoreName:"Communication",score:t.review_scores.review_scores_communication}),Object(g.jsx)(Y,{scoreName:"Location",score:t.review_scores.review_scores_location}),Object(g.jsx)(Y,{scoreName:"Value",score:t.review_scores.review_scores_value})]})]})}var Z=s(46),q=s(52);function V(e){var t=Object(c.useState)(!1),s=Object(i.a)(t,2),r=s[0],a=s[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(q.a,{className:"bg-transparent text-primary text-decoration-underline",onClick:function(){return a(!0)},children:["Show all ",e.room.reviews.length," reviews"]}),Object(g.jsxs)(Z.a,{size:"lg",show:r,onHide:function(){return a(!1)},animation:!1,scrollable:!0,children:[Object(g.jsx)(Z.a.Header,{closeButton:!0,children:Object(g.jsx)(Z.a.Title,{children:Object(g.jsx)(R,{room:e.room})})}),Object(g.jsxs)(Z.a.Body,{children:[Object(g.jsx)(K,{room:e.room}),e.room.reviews.map((function(e){return Object(g.jsx)(G,{review:e})}))]})]})]})}function X(){var e=Object(o.g)().roomId,t=Object(c.useState)({}),s=Object(i.a)(t,2),r=s[0],a=s[1],n=Object(c.useState)(!0),l=Object(i.a)(n,2),j=l[0],d=l[1];return Object(c.useEffect)((function(){d(!0),fetch("/api/get_room/"+e+"/").then((function(e){if(200===e.status)return e.json()})).then((function(e){a(e.room),d(!1)})).catch((function(e){alert("error : "+e)}))}),[e]),j?Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(D,{})}):Object(g.jsxs)("div",{className:"container container-fluid",children:[Object(g.jsx)(T,{room:r}),Object(g.jsx)(J,{room:r}),Object(g.jsx)(K,{room:r}),Object(g.jsx)(M,{reviews:r.reviews}),r.reviews.length>6?Object(g.jsx)(V,{room:r}):""]})}function Q(){var e=Object(p.a)(m),t=Object(i.a)(e,1)[0];return Object(g.jsxs)("div",{className:"d-flex justify-content-center  bg-black ",children:[Object(g.jsx)(n.b,{className:"mx-3 nav-link text-light fw-bold",to:"/",children:"Demo App"}),Object(g.jsx)(n.b,{className:"mx-3 nav-link text-light ",to:"/",children:"Places to stay"}),t?Object(g.jsx)(n.b,{className:"ms-auto mx-3 nav-link text-light fw-bold",to:"/dashboard",children:"Dashboard"}):Object(g.jsx)(n.b,{className:"ms-auto mx-3 nav-link text-light fw-bold",to:"/login",children:"Become a host"})]})}function $(){return Object(g.jsx)("div",{className:"row bg-black mt-5 px-5",children:Object(g.jsxs)("footer",{className:"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top",children:[Object(g.jsx)("p",{className:"col-md-4 mb-0 text-muted",children:"\xa9 2021 Demo App, Inc"}),Object(g.jsx)(n.b,{className:"col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none",to:"/",children:"Demo App"}),Object(g.jsx)("ul",{className:"nav col-md-4 justify-content-end",children:Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(n.b,{to:"/",className:"nav-link px-2 text-muted",children:"Places to stay"})})})]})})}var ee=function(){return Object(g.jsx)("div",{children:Object(g.jsxs)(n.a,{children:[Object(g.jsx)(Q,{}),Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{path:"/api/index",element:Object(g.jsx)(B,{})}),Object(g.jsx)(o.a,{path:"/",element:Object(g.jsx)(B,{})}),Object(g.jsx)(o.a,{path:"/login",element:Object(g.jsx)(N,{})}),Object(g.jsx)(o.a,{path:"/register",element:Object(g.jsx)(w,{})}),Object(g.jsx)(o.a,{path:"/reset",element:Object(g.jsx)(_,{})}),Object(g.jsx)(o.a,{path:"/dashboard",element:Object(g.jsx)(y,{})}),Object(g.jsx)(o.a,{path:"room/:roomId",element:Object(g.jsx)(X,{})})]}),Object(g.jsx)($,{})]})})},te=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,76)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,n=t.getTTFB;s(e),c(e),r(e),a(e),n(e)}))};s(73);a.a.render(Object(g.jsx)(ee,{}),document.getElementById("root")),te()}},[[74,1,2]]]);
//# sourceMappingURL=main.09ac84a4.chunk.js.map