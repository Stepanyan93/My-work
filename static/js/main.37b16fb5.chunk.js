(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(19),a=n(20),o=n(22),s=n(21),i=n(23),u=n(0),c=n.n(u),l=n(30),m=n(10),f=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){function n(){return Object(r.a)(this,n),Object(o.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(i.a)(n,t),Object(a.a)(n,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(l.a,{to:"/login"})}}]),n}(c.a.Component);return Object(m.b)(f)(t)}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(39),a=n(28);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={dialogsData:[{name:"John",id:"1"},{name:"Jana",id:"2"},{name:"Lana",id:"3"},{name:"Jenifer",id:"4"},{name:"Smith",id:"5"},{name:"Lauren",id:"6"}],messageUsersData:[{message:"hello,how are you"},{message:"Fine,Thank you!!!"}],messageMyData:[{message:""}]},u=function(e){return{type:"Add-Message",newMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Add-Message":var n={message:t.newMessage};return s({},e,{messageMyData:[].concat(Object(r.a)(e.messageMyData),[n])});default:return e}}},133:function(e,t,n){e.exports={blockFriendHeader:"BlockFriend_blockFriendHeader__1SIAI"}},136:function(e,t,n){e.exports=n.p+"static/media/preLoader.ea3271ae.gif"},14:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n(135),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"91505e0e-7e1c-42f5-a6af-7dab9d5c8659"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},s={follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},i={profilepage:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getProfileStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},setProfileStatus:function(e){return a.put("profile/status",{status:e})},setProfileInfo:function(e){return a.put("profile",e)},uploadPhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},u={login:function(){return a.get("auth/me")},loginUser:function(e,t,n){return a.post("auth/login",{email:e,password:t,rememberMe:n})},loginOutUser:function(){return a.delete("auth/login")}}},166:function(e,t,n){e.exports=n(299)},168:function(e,t,n){},172:function(e,t,n){},195:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);n(168),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(64),s=n.n(o),i=n(19),u=n(20),c=n(22),l=n(21),m=n(23),f=(n(172),n(9)),p=n.n(f),d=n(11),g=n(10),h=n(133),b=n.n(h),O=n(89),v=n.n(O),E=n(43),P=n.n(E),A=function(e){return a.a.createElement("div",{className:v.a.friendOnlineItems},a.a.createElement(d.b,{to:e.isAuth?"/profile/"+e.id:"/login/"},a.a.createElement("img",{src:e.img||P.a,alt:"",className:v.a.friendOnlineImg})),a.a.createElement("p",null,e.name))},w=function(e){var t=e.setUserIsFollowed.filter((function(e){return!0===e.followed})),n=t.map((function(t){return a.a.createElement(A,{name:t.name,img:t.photos.large,id:t.id,key:t.id,isAuth:e.isAuth})}));return console.log(t),a.a.createElement("div",null,a.a.createElement("div",{className:b.a.blockFriendHeader},"My Friend"),a.a.createElement("div",null,n))},j=n(6),y=n(8),N=n.n(y),C=n(17),k=n(39),T=n(28),U=n(14);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(T.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D={users:[],pageUsersCount:54,usersCount:0,currentPage:1,isFetching:!0,followingProcess:[]},L=function(e){return{type:"SET_CURRENT-PAGE",currentPage:e}},S=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},G=function(e,t){return{type:"TOGGLE_FOLLOWING_PROCESS_TYPE",followingProcessValue:e,userId:t}},x=function(e,t){return function(){var n=Object(C.a)(N.a.mark((function n(r){var a;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(L(e)),r(S(!0)),n.next=4,U.d.getUsers(e,t);case 4:a=n.sent,r(S(!1)),r({type:"SET_USERS",users:a.items}),r({type:"TOTAL_COUNT",usersCount:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_FOLLOWING_PROCESS_TYPE":return I({},e,{followingProcess:t.followingProcessValue?[].concat(Object(k.a)(e.followingProcess),[t.userId]):e.followingProcess.filter((function(e){return e!==t.userId}))});case"TOGGLE_IS_FETCHING":return I({},e,{isFetching:t.isFetching});case"SET_CURRENT-PAGE":return I({},e,{currentPage:t.currentPage});case"TOTAL_COUNT":return I({},e,{usersCount:t.usersCount});case"FOLLOW":return I({},e,{users:e.users.map((function(e){return e.id===t.userId?I({},e,{followed:!0}):e}))});case"UN_FOLLOW":return I({},e,{users:e.users.map((function(e){return e.id===t.userId?I({},e,{followed:!1}):e}))});case"SET_USERS":return I({},e,{users:Object(k.a)(t.users)});default:return e}},M=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageUsersCount)}},{key:"render",value:function(){return a.a.createElement(w,{setUserIsFollowed:this.props.setUserIsFollowed,navBarPage:this.props.navBarPage,isAuth:this.props.isAuth})}}]),t}(a.a.Component),Y=Object(j.d)(Object(g.b)((function(e){return{isAuth:e.auth.isAuth,navBarPage:e.navBarPage,setUserIsFollowed:e.usersPage.users,currentPage:e.usersPage.currentPage,pageUsersCount:e.usersPage.pageUsersCount}}),{getUsers:x}))(M),J=function(e){return a.a.createElement("div",{className:p.a.nav},a.a.createElement("div",{className:p.a.container},a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/profile",activeClassName:p.a.itemActiveLink,className:p.a.itemLink},"Profile")),a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/dialogs",activeClassName:p.a.itemActiveLink,className:p.a.itemLink},"Messages")),a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/news",activeClassName:p.a.itemActiveLink,className:p.a.itemLink},"News")),a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/music",activeClassName:p.a.itemActiveLink,className:p.a.itemLink},"Music")),a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/settings",activeClassName:p.a.itemActiveLink,className:p.a.itemLink},"Settings")),a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/users",activeClassName:p.a.itemActiveLink,className:p.a.itemLink},"Users"))),a.a.createElement("div",null,a.a.createElement(Y,null)))},R=(n(195),function(){return a.a.createElement("div",null,"News")}),Q=(n(196),function(){return a.a.createElement("div",null,"Settings")}),z=(n(197),function(){return a.a.createElement("div",null,"Music")}),B=n(30),X=n(31),W=n.n(X),H=n(49),q=n(137),Z=n.n(q),K=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).handlePageChange=function(e){console.log("active page is ".concat(e)),n.setState({activePage:e}),n.props.onPgaeChanged(e)},n.state={activePage:1},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(Z.a,{activePage:this.state.activePage,itemsCountPerPage:this.props.pageUsersCount,totalItemsCount:this.props.usersCount,pageRangeDisplayed:5,onChange:this.handlePageChange,innerClass:"pagination",itemClass:"page-item",linkClass:"page-link",prevPageText:"<",nextPageText:">",firstPageText:"<<",lastPageText:">>"}),a.a.createElement("div",null,this.props.isFetching?a.a.createElement(H.a,null):null))}}]),t}(a.a.Component),V=function(e){return a.a.createElement("div",null,a.a.createElement("div",{className:W.a.pagination},a.a.createElement("div",{className:W.a.paginationItem},a.a.createElement(K,{usersCount:e.usersCount,pageUsersCount:e.pageUsersCount,currentPage:e.currentPage,onPgaeChanged:e.onPgaeChanged}))),a.a.createElement("div",{className:W.a.container},e.users.map((function(t){return a.a.createElement("div",{className:W.a.usersItem,key:t.id},a.a.createElement("div",null,a.a.createElement(d.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:P.a,className:W.a.userImg,alt:""})),a.a.createElement("p",{className:W.a.userName},t.name),a.a.createElement("div",null,t.followed?a.a.createElement("button",{className:"btn btn-outline-secondary",disabled:e.followingProcess.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"UnFollow"):a.a.createElement("button",{className:"btn btn-outline-secondary",disabled:e.followingProcess.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow"))))}))),a.a.createElement("div",{className:W.a.pagination},a.a.createElement("div",{className:W.a.paginationItem},a.a.createElement(K,{usersCount:e.usersCount,pageUsersCount:e.pageUsersCount,currentPage:e.currentPage,onPgaeChanged:e.onPgaeChanged}))))},$=n(107),ee=n(138),te=Object(ee.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ne=function(e){return e.usersPage.pageUsersCount},re=function(e){return e.usersPage.usersCount},ae=function(e){return e.usersPage.currentPage},oe=function(e){return e.usersPage.isFetching},se=function(e){return e.usersPage.followingProcess},ie=function(e){return e.auth.isAuth},ue=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPgaeChanged=function(e){n.props.getUsers(e,n.props.pageUsersCount)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageUsersCount)}},{key:"render",value:function(){return a.a.createElement(V,{usersCount:this.props.usersCount,pageUsersCount:this.props.pageUsersCount,currentPage:this.props.currentPage,onPgaeChanged:this.onPgaeChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,isFetching:this.props.isFetching,followingProcess:this.props.followingProcess})}}]),t}(a.a.Component),ce=Object(j.d)(Object(g.b)((function(e){return{users:te(e),pageUsersCount:ne(e),usersCount:re(e),currentPage:ae(e),isFetching:oe(e),followingProcess:se(e),isAuth:ie(e)}}),{getUsers:x,unfollow:function(e){return function(){var t=Object(C.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(G(!0,e)),t.next=3,U.a.unfollow(e);case 3:0===t.sent.resultCode&&(n({type:"UN_FOLLOW",userId:e}),n(G(!1,e)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(C.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(G(!0,e)),t.next=3,U.a.follow(e);case 3:0===t.sent.resultCode&&(n({type:"FOLLOW",userId:e}),n(G(!1,e)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),$.a)(ue),le=n(32),me=n.n(le),fe=function(e){return a.a.createElement("header",{className:me.a.header},a.a.createElement("div",{className:me.a.container},a.a.createElement("div",{className:me.a.containerItem}),a.a.createElement("div",{className:me.a.containerItem},a.a.createElement("div",null,e.isAuth&&a.a.createElement("img",{src:e.authPhoto||P.a,className:me.a.userPhoto,alt:""})),a.a.createElement("div",{className:me.a.userName},e.isAuth?a.a.createElement("div",{className:me.a.containerLogin},a.a.createElement("div",null,a.a.createElement("p",{className:me.a.userNameText},e.login)),a.a.createElement("div",null,a.a.createElement("button",{className:"btn btn-light",onClick:e.loginOutUserThunkCreator}," Log Out"))):a.a.createElement("div",null,a.a.createElement(B.a,{to:"/login"}),a.a.createElement(d.b,{className:"btn btn-light",to:"/login"},"Login"))))))},pe=n(40);function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(n,!0).forEach((function(t){Object(T.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var he={id:null,email:null,login:null,isAuth:!1,photo:void 0},be=function(e,t,n,r){return{type:"SET_USER_DATA_TYPE",payload:{id:e,email:t,login:n,isAuth:r}}},Oe=function(){return function(){var e=Object(C.a)(N.a.mark((function e(t){var n,r,a,o,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.b.login();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.email,s=r.login,t(be(a,o,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA_TYPE":return ge({},e,{},t.payload);case"SET_USER_PHOTO":return ge({},e,{photo:t.userPhoto});default:return e}},Ee=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){if(null!==this.props.authUserId){var e=this.props.authUserId;this.props.profilePhotoAuthUser(e)}}},{key:"render",value:function(){return a.a.createElement(fe,this.props)}}]),t}(a.a.Component),Pe=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,authUserId:e.auth.id,login:e.auth.login,authPhoto:e.auth.photo}}),{loginOutUserThunkCreator:function(){return function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.b.loginOutUser();case 2:0===e.sent.data.resultCode&&t(be(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},profilePhotoAuthUser:function(e){return function(){var t=Object(C.a)(N.a.mark((function t(n){var r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.c.profilepage(e);case 2:r=t.sent,n({type:"SET_USER_PHOTO",userPhoto:r.photos.large});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(Ee),Ae=n(129),we=n(130),je=n(73),ye=n(70),Ne=n(51),Ce=n.n(Ne),ke=n(92),Te=n.n(ke),Ue=Object(we.a)({form:"login"})((function(e){return a.a.createElement("form",{onSubmit:e.handleSubmit},a.a.createElement("div",{className:"form-group"},a.a.createElement(Ae.a,{component:ye.a,name:"email",validate:je.b,placeholder:"Email",className:"form-control"}),a.a.createElement("small",{className:"form-text text-muted"},"We'll never share your email with anyone else.")),a.a.createElement("div",{className:"form-group"},a.a.createElement(Ae.a,{component:ye.a,name:"password",validate:je.b,placeholder:"Password",className:"form-control"})),a.a.createElement("div",{className:"form-group form-check"},a.a.createElement(Ae.a,{component:"input",type:"checkbox",name:"rememberMe"})," remember me"),e.error&&a.a.createElement("div",{className:Ce.a.errorGroup},e.error),a.a.createElement("div",{className:"form-group"},a.a.createElement("button",{className:"btn btn-primary"},"Login")))})),_e=Object(g.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginUserThunkCreator:function(e,t,n){return function(){var r=Object(C.a)(N.a.mark((function r(a){var o,s;return N.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,U.b.loginUser(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(Oe()):(s=o.data.messages.length>0?o.data.messages[0]:"Some error",a(Object(pe.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(B.a,{to:"/profile"}):a.a.createElement("div",{className:Te.a.container},a.a.createElement("div",null,a.a.createElement("h1",{className:Te.a.headerLogin},"Login")),a.a.createElement("div",null,a.a.createElement(Ue,{onSubmit:function(t){e.loginUserThunkCreator(t.email,t.password,t.rememberMe)}})))}));function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(n,!0).forEach((function(t){Object(T.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Le={initialized:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return De({},e,{initialized:!0});default:return e}},Ge=(n(298),n(95)),xe=n(128),Fe={friendOnlineData:[{name:"John"},{name:"Jana"},{name:"Lana"},{name:"Jenifer"},{name:"Smith"},{name:"Lauren"}]},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;arguments.length>1&&arguments[1];return e},Ye=n(140),Je=n(131),Re=Object(j.c)({profilePage:Ge.b,dialogPage:xe.b,navBarPage:Me,usersPage:F,auth:ve,form:Je.a,app:Se}),Qe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,ze=Object(j.e)(Re,Qe(Object(j.a)(Ye.a)));window.store=ze;var Be=ze,Xe=a.a.lazy((function(){return n.e(3).then(n.bind(null,305))})),We=a.a.lazy((function(){return n.e(4).then(n.bind(null,306))})),He=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.initializedThunkCreate()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"site"},a.a.createElement(Pe,null),a.a.createElement(J,null),a.a.createElement("div",{className:"containerSite"},a.a.createElement(B.b,{path:"/profile/:userId?",render:function(){return a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"...Loading")},a.a.createElement(Xe,null))}}),a.a.createElement(B.b,{path:"/dialogs",render:function(){return a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"...Loading")},a.a.createElement(We,null))}}),a.a.createElement(B.b,{path:"/news",render:function(){return a.a.createElement(R,null)}}),a.a.createElement(B.b,{path:"/music",render:function(){return a.a.createElement(z,null)}}),a.a.createElement(B.b,{path:"/settings",render:function(){return a.a.createElement(Q,null)}}),a.a.createElement(B.b,{path:"/users",render:function(){return a.a.createElement(ce,null)}}),a.a.createElement(B.b,{path:"/login",render:function(){return a.a.createElement(_e,null)}}))):a.a.createElement(H.a,null)}}]),t}(a.a.Component),qe=Object(j.d)(B.f,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializedThunkCreate:function(){return function(e){e(Oe()).then((function(){e({type:"SET_INITIALIZED"})}))}}}))(He),Ze=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(d.a,null,a.a.createElement(g.a,{store:Be},a.a.createElement(qe,null)))}}]),t}(a.a.Component);s.a.render(a.a.createElement(Ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},31:function(e,t,n){e.exports={container:"Users_container__3UfY_",paginationItem:"Users_paginationItem__kk5cK",usersItem:"Users_usersItem__oJ2ys",userName:"Users_userName__-dJ3V",userImg:"Users_userImg__2ULTs",usersInfo:"Users_usersInfo__1Xmsg",usersButton:"Users_usersButton__X6aDO",pagination:"Users_pagination__1jQA_"}},32:function(e,t,n){e.exports={header:"Header_header__sprJE",container:"Header_container__3ZaBQ",containerItem:"Header_containerItem__2JyNu",containerLogin:"Header_containerLogin__2X0G3",userPhoto:"Header_userPhoto__72gJL",userNameText:"Header_userNameText__INGem"}},43:function(e,t){e.exports="data:image/png;base64,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"},49:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(136),s=n.n(o);t.a=function(e){return a.a.createElement("div",null,a.a.createElement("img",{src:s.a,alt:""}))}},51:function(e,t,n){e.exports={error:"FormControls_error__3wmGE",errorGroup:"FormControls_errorGroup__2hz31"}},70:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c}));var r=n(91),a=n(0),o=n.n(a),s=n(51),i=n.n(s),u=function(e){var t=e.input,n=e.meta,a=Object(r.a)(e,["input","meta"]),s=n.touched&&n.error;return o.a.createElement("div",{className:s?i.a.error:""},o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,a))),o.a.createElement("div",null,s&&o.a.createElement("span",null,n.error)))},c=function(e){var t=e.input,n=e.meta,a=Object(r.a)(e,["input","meta"]),s=n.touched&&n.error;return o.a.createElement("div",{className:s?i.a.error:""},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,a))),o.a.createElement("div",null,s&&o.a.createElement("span",null,n.error)))}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max Length is ".concat(e," symbol")}}},89:function(e,t,n){e.exports={friendOnlineItems:"FriendOnline_friendOnlineItems__KP4Uh",friendOnlineImg:"FriendOnline_friendOnlineImg__w5_gy"}},9:function(e,t,n){e.exports={nav:"Navbar_nav__153R5",container:"Navbar_container__1dNhE",item:"Navbar_item__1day1",itemLink:"Navbar_itemLink__2TXJb",itemActiveLink:"Navbar_itemActiveLink__17A2v"}},92:function(e,t,n){e.exports={container:"login_container__X0pQ-",headerLogin:"login_headerLogin__3K7Qw"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"f",(function(){return b})),n.d(t,"d",(function(){return O})),n.d(t,"g",(function(){return v}));var r=n(8),a=n.n(r),o=n(17),s=n(39),i=n(28),u=n(14),c=n(40);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={postData:[{message:"hello how w are you?",likeCount:"45"},{message:"What'is your name",likeCount:"56"},{message:"hello how w are you?",likeCount:"3"},{message:"hello how w are you?",likeCount:"5"},{message:"hello how w are you?",likeCount:"15"}],setProfileInfo:null,profileStatus:""},p=function(e){return{type:"Add-New-Post-Data",newPost:e}},d=function(e){return{type:"SET_USER_PROFILE_STATUS",status:e}},g=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.profilepage(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",setProfileInfo:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfileStatus(e);case 2:r=t.sent,n(d(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.setProfileStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){var o,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.id,t.next=3,u.c.setProfileInfo(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(g(o)),t.next=10;break;case 8:return n(Object(c.a)("profileUserInfo",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},v=function(e){return function(t){u.c.uploadPhoto(e).then((function(e){0===e.data.resultCode&&t(function(e){return{type:"UPLOAD_PHOTO",photo:e}}(e.data.data.photos))}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Add-New-Post-Data":var n={message:t.newPost,likeCount:0};return m({},e,{postData:[].concat(Object(s.a)(e.postData),[n])});case"SET_USER_PROFILE":return m({},e,{setProfileInfo:t.setProfileInfo});case"SET_USER_PROFILE_STATUS":return m({},e,{profileStatus:t.status});case"UPLOAD_PHOTO":return m({},e,{setProfileInfo:m({},e.setProfileInfo,{photos:t.photo})});default:return e}}}},[[166,1,2]]]);
//# sourceMappingURL=main.37b16fb5.chunk.js.map